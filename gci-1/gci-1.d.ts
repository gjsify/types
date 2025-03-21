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
import type Gtk from '@girs/gtk-4.0';
import type Gsk from '@girs/gsk-4.0';
import type Graphene from '@girs/graphene-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gdk from '@girs/gdk-4.0';
import type cairo from 'cairo';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';

export namespace GCi {
    /**
     * GCi-1
     */

    namespace EntryController {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            entry: Gtk.Entry;
        }
    }

    class EntryController extends GObject.Object {
        static $gtype: GObject.GType<EntryController>;

        // Properties

        get entry(): Gtk.Entry;
        set entry(val: Gtk.Entry);

        // Constructors

        constructor(properties?: Partial<EntryController.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static for_entry(entry: Gtk.Entry): EntryController;

        static ['new'](): EntryController;

        // Methods

        get_entry(): Gtk.Entry;
        set_entry(value: Gtk.Entry): void;
    }

    type EntryControllerClass = typeof EntryController;
    abstract class EntryControllerPrivate {
        static $gtype: GObject.GType<EntryControllerPrivate>;

        // Constructors

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

export default GCi;

// END
