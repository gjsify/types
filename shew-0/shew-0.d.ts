/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './shew-0-ambient.d.ts';
import './shew-0-import.d.ts';
/**
 * Shew-0
 */

import type Gtk from '@girs/gtk-4.0';
import type Gsk from '@girs/gsk-4.0';
import type Graphene from '@girs/graphene-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gdk from '@girs/gdk-4.0';
import type cairo from '@girs/cairo-1.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Shew {
    module ExternalWindow {
        // Constructor properties interface
    }

    class ExternalWindow extends GObject.Object {
        // Own properties of Shew-0.ExternalWindow

        display: Gdk.Display;

        // Constructors of Shew-0.ExternalWindow

        static new_from_handle(handle_str: string): ExternalWindow;

        // Owm methods of Shew-0.ExternalWindow

        get_display(): Gdk.Display;
        set_parent_of(child_surface: Gdk.Surface): void;
    }

    module WindowExporter {
        // Constructor properties interface
    }

    class WindowExporter extends GObject.Object {
        // Own properties of Shew-0.WindowExporter

        window: Gtk.Window;

        // Constructors of Shew-0.WindowExporter

        static ['new'](window: Gtk.Window): WindowExporter;

        // Owm methods of Shew-0.WindowExporter

        ['export'](callback?: Gio.AsyncReadyCallback<this> | null): void;
        export_finish(result: Gio.AsyncResult): string;
        unexport(handle: string): void;
    }

    class ExternalWindowClass {}

    class WindowExporterClass {}

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

export default Shew;
// END
