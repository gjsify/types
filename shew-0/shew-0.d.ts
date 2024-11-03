/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
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
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';

export namespace Shew {
    /**
     * Shew-0
     */

    module ExternalWindow {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            display: Gdk.Display;
        }
    }

    class ExternalWindow extends GObject.Object {
        static $gtype: GObject.GType<ExternalWindow>;

        // Properties

        get display(): Gdk.Display;

        // Constructors

        constructor(properties?: Partial<ExternalWindow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_from_handle(handle_str: string): ExternalWindow;

        // Virtual methods

        vfunc_set_parent_of(child_surface: Gdk.Surface): void;

        // Methods

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
        static $gtype: GObject.GType<WindowExporter>;

        // Properties

        get window(): Gtk.Window;

        // Constructors

        constructor(properties?: Partial<WindowExporter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](window: Gtk.Window): WindowExporter;

        // Methods

        ['export'](): Promise<string>;
        ['export'](callback: Gio.AsyncReadyCallback<this> | null): void;
        ['export'](callback?: Gio.AsyncReadyCallback<this> | null): Promise<string> | void;
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
