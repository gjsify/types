/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './mxgtk-1.0-ambient.d.ts';
import './mxgtk-1.0-import.d.ts';
/**
 * MxGtk-1.0
 */

import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type Gtk from '@girs/gtk-2.0';
import type Gdk from '@girs/gdk-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Atk from '@girs/atk-1.0';

export namespace MxGtk {
    module Frame {
        // Constructor properties interface
    }

    /**
     * The contents of this structure are private and should only be accessed
     * through the public API.
     */
    class Frame extends Gtk.Frame {
        // Constructors of MxGtk-1.0.Frame

        static ['new'](): Frame;
    }

    module LightSwitch {
        // Signal callback interfaces

        interface SwitchFlipped {
            (object: boolean): void;
        }

        // Constructor properties interface
    }

    /**
     * The contents of this structure are private and should only be accessed
     * through the public API.
     */
    class LightSwitch extends Gtk.DrawingArea {
        // Own properties of MxGtk-1.0.LightSwitch

        active: boolean;

        // Constructors of MxGtk-1.0.LightSwitch

        static ['new'](): LightSwitch;

        // Owm methods of MxGtk-1.0.LightSwitch

        /**
         * Get the value of the "active" property
         * @returns #TRUE if the switch is "on"
         */
        get_active(): boolean;
        /**
         * Set the value of the "active" property
         * @param active #TRUE to set the switch to its ON state
         */
        set_active(active: boolean): void;
    }

    class FrameClass {}

    class LightSwitchClass {}

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

export default MxGtk;
// END
