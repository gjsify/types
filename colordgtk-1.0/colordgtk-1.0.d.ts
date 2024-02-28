/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './colordgtk-1.0-ambient.d.ts';
import './colordgtk-1.0-import.d.ts';
/**
 * ColordGtk-1.0
 */

import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Atk from '@girs/atk-1.0';
import type Colord from '@girs/colord-1.0';

export namespace ColordGtk {
    /**
     * Errors that can be thrown
     */
    enum WindowError {
        /**
         * the transaction failed for an unknown reason
         */
        FAILED,
        LAST,
    }
    const GTK_MAJOR_VERSION: number;
    const GTK_MICRO_VERSION: number;
    const GTK_MINOR_VERSION: number;
    module SampleWidget {
        // Constructor properties interface
    }

    class SampleWidget extends Gtk.DrawingArea {
        // Own properties of ColordGtk-1.0.SampleWidget

        color: Colord.ColorRGB;

        // Constructors of ColordGtk-1.0.SampleWidget

        static ['new'](): SampleWidget;

        // Owm methods of ColordGtk-1.0.SampleWidget

        /**
         * Sets the color for the sample widget
         * @param color A color
         */
        set_color(color: Colord.ColorRGB): void;
    }

    module SampleWindow {
        // Constructor properties interface
    }

    class SampleWindow extends Gtk.Window {
        // Constructors of ColordGtk-1.0.SampleWindow

        static ['new'](): SampleWindow;

        // Owm methods of ColordGtk-1.0.SampleWindow

        /**
         * Sets the window to a specific color.
         * @param color the color
         */
        set_color(color: Colord.ColorRGB): void;
        /**
         * Sets the percentage value on the window.
         * @param fraction the fraction value to show, or -1 for pulsing.
         */
        set_fraction(fraction: number): void;
    }

    module Window {
        // Signal callback interfaces

        interface Changed {
            (object: Colord.Profile): void;
        }

        // Constructor properties interface
    }

    class Window extends GObject.Object {
        // Own properties of ColordGtk-1.0.Window

        readonly Profile: string;

        // Constructors of ColordGtk-1.0.Window

        static ['new'](): Window;

        // Owm methods of ColordGtk-1.0.Window

        static error_quark(): GLib.Quark;

        // Owm methods of ColordGtk-1.0.Window

        /**
         * Gets the color profile to use for this widget.
         * @returns a #CdProfile
         */
        get_last_profile(): Colord.Profile;
        /**
         * Gets the screen profile that should be used for the widget,
         * which corresponds to the screen output the widget most covers.
         *
         * This method should be called when the widget has mapped, i.e.
         * g_signal_connect (dialog, "map", G_CALLBACK (map_cb), priv);
         *
         * Note, the returned profile from cd_client_get_profile_for_widget_finish()
         * has already been connected to, as is ready to use.
         * @param widget a #GtkWidget
         * @param cancellable a #GCancellable or %NULL
         * @param callback the function to run on completion
         */
        get_profile(
            widget: Gtk.Widget,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets the result from the asynchronous function.
         * @param res the #GAsyncResult
         * @returns a #CdProfile or %NULL
         */
        get_profile_finish(res: Gio.AsyncResult): Colord.Profile;
        /**
         * Gets the screen profile that should be used for the widget,
         * which corresponds to the screen output the widget most covers.
         *
         * WARNING: This function is synchronous, and may block.
         * Do not use it in GUI applications.
         * @param widget a #GtkWidget
         * @param cancellable a #GCancellable or %NULL
         * @returns a #CdProfile or %NULL
         */
        get_profile_sync(widget: Gtk.Widget, cancellable?: Gio.Cancellable | null): Colord.Profile;
    }

    class SampleWidgetClass {}

    class SampleWidgetPrivate {}

    class SampleWindowClass {}

    /**
     * Private #CdSampleWindow data
     */
    class SampleWindowPrivate {}

    class WindowClass {}

    /**
     * Private #CdWindow data
     */
    class WindowPrivate {}

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

export default ColordGtk;
// END
