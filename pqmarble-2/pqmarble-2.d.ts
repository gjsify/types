/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

/**
 * PQMarble-2
 */

import type Gdk from '@girs/gdk-4.0';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Gtk from '@girs/gtk-4.0';
import type Gsk from '@girs/gsk-4.0';
import type Graphene from '@girs/graphene-1.0';

export namespace PQMarble {
    function get_css_provider_for_data(data: string): Gtk.CssProvider | null;
    function set_theming_for_data(widget: Gtk.Widget, data: string, class_name: string | null, priority: number): void;
    function add_css_provider_from_resource(resource: string, priority: number, display: Gdk.Display): void;
    module Settings {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            schema: Gio.Settings;
        }
    }

    abstract class Settings extends GObject.Object {
        static $gtype: GObject.GType<Settings>;

        // Own properties of PQMarble.Settings

        get schema(): Gio.Settings;
        set schema(val: Gio.Settings);

        // Constructors of PQMarble.Settings

        constructor(properties?: Partial<Settings.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of PQMarble.Settings

        get_schema(): Gio.Settings;
        set_schema(value: Gio.Settings): void;
    }

    type SettingsClass = typeof Settings;
    abstract class SettingsPrivate {
        static $gtype: GObject.GType<SettingsPrivate>;

        // Constructors of PQMarble.SettingsPrivate

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

export default PQMarble;
// END
