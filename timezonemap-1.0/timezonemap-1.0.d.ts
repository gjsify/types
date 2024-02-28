/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './timezonemap-1.0-ambient.d.ts';
import './timezonemap-1.0-import.d.ts';
/**
 * TimezoneMap-1.0
 */

import type xlib from '@girs/xlib-2.0';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type Json from '@girs/json-1.0';
import type Gtk from '@girs/gtk-3.0';
import type Gdk from '@girs/gdk-3.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Atk from '@girs/atk-1.0';

export namespace TimezoneMap {
    const TIMEZONE_COMPLETION_ADMIN1: number;
    const TIMEZONE_COMPLETION_COUNTRY: number;
    const TIMEZONE_COMPLETION_LAST: number;
    const TIMEZONE_COMPLETION_LATITUDE: number;
    const TIMEZONE_COMPLETION_LONGITUDE: number;
    const TIMEZONE_COMPLETION_NAME: number;
    const TIMEZONE_COMPLETION_ZONE: number;
    module TimezoneCompletion {
        // Constructor properties interface
    }

    class TimezoneCompletion extends Gtk.EntryCompletion {
        // Constructors of TimezoneMap-1.0.TimezoneCompletion

        static ['new'](): TimezoneCompletion;

        // Owm methods of TimezoneMap-1.0.TimezoneCompletion

        watch_entry(entry: Gtk.Entry): void;
    }

    module TimezoneLocation {
        // Constructor properties interface
    }

    class TimezoneLocation extends GObject.Object {
        // Own properties of TimezoneMap-1.0.TimezoneLocation

        Comment: string;
        country: string;
        dist: number;
        latitude: number;
        longitude: number;
        zone: string;

        // Constructors of TimezoneMap-1.0.TimezoneLocation

        static ['new'](): TimezoneLocation;
    }

    module TimezoneMap {
        // Signal callback interfaces

        interface LocationChanged {
            (object: TimezoneLocation): void;
        }

        // Constructor properties interface
    }

    class TimezoneMap extends Gtk.Widget {
        // Constructors of TimezoneMap-1.0.TimezoneMap

        static ['new'](): TimezoneMap;

        // Owm methods of TimezoneMap-1.0.TimezoneMap

        get_timezone_at_coords(lon: number, lat: number): string;
        set_coords(lon: number, lat: number): void;
        set_timezone(timezone: string): void;
        set_watermark(watermark: string): void;
    }

    class TimezoneCompletionClass {}

    class TimezoneCompletionPrivate {}

    class TimezoneLocationClass {}

    class TimezoneLocationPrivate {}

    class TimezoneMapClass {}

    class TimezoneMapPrivate {}

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

export default TimezoneMap;
// END
