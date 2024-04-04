/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './xrandr-1.3-ambient.d.ts';

/**
 * xrandr-1.3
 */

import type GObject from '@girs/gobject-2.0';

export namespace xrandr {
    class ScreenSize {
        static $gtype: GObject.GType<ScreenSize>;

        // Constructors of xrandr.ScreenSize

        _init(...args: any[]): void;
    }

    class ScreenChangeNotifyEvent {
        static $gtype: GObject.GType<ScreenChangeNotifyEvent>;

        // Constructors of xrandr.ScreenChangeNotifyEvent

        _init(...args: any[]): void;
    }

    class NotifyEvent {
        static $gtype: GObject.GType<NotifyEvent>;

        // Constructors of xrandr.NotifyEvent

        _init(...args: any[]): void;
    }

    class ScreenResources {
        static $gtype: GObject.GType<ScreenResources>;

        // Constructors of xrandr.ScreenResources

        _init(...args: any[]): void;
    }

    class OutputChangeNotifyEvent {
        static $gtype: GObject.GType<OutputChangeNotifyEvent>;

        // Constructors of xrandr.OutputChangeNotifyEvent

        _init(...args: any[]): void;
    }

    class CrtcChangeNotifyEvent {
        static $gtype: GObject.GType<CrtcChangeNotifyEvent>;

        // Constructors of xrandr.CrtcChangeNotifyEvent

        _init(...args: any[]): void;
    }

    class OutputPropertyNotifyEvent {
        static $gtype: GObject.GType<OutputPropertyNotifyEvent>;

        // Constructors of xrandr.OutputPropertyNotifyEvent

        _init(...args: any[]): void;
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
