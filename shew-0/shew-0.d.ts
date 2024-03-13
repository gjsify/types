/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './shew-0-ambient.d.ts';

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

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            display: Gdk.Display;
        }
    }

    class ExternalWindow extends GObject.Object {
        // Own properties of Shew.ExternalWindow

        get display(): Gdk.Display;

        // Constructors of Shew.ExternalWindow

        constructor(properties?: Partial<ExternalWindow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_from_handle(handle_str: string): ExternalWindow;

        // Own virtual methods of Shew.ExternalWindow

        vfunc_set_parent_of(child_surface: Gdk.Surface): void;

        // Own methods of Shew.ExternalWindow

        get_display(): Gdk.Display;
        set_parent_of(child_surface: Gdk.Surface): void;
    }

    module WindowExporter {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            window: Gtk.Window;
        }
    }

    class WindowExporter extends GObject.Object {
        // Own properties of Shew.WindowExporter

        get window(): Gtk.Window;

        // Constructors of Shew.WindowExporter

        constructor(properties?: Partial<WindowExporter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](window: Gtk.Window): WindowExporter;

        // Own methods of Shew.WindowExporter

        ['export'](callback?: Gio.AsyncReadyCallback<this> | null): void;
        export_finish(result: Gio.AsyncResult): string;
        unexport(handle: string): void;
    }

    type ExternalWindowClass = typeof ExternalWindow;
    type WindowExporterClass = typeof WindowExporter;
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
