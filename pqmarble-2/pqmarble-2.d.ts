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
import type Gdk from '@girs/gdk-4.0';
import type cairo from 'cairo';
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
    /**
     * PQMarble-2
     */

    /**
     * @param data
     */
    function get_css_provider_for_data(data: string): Gtk.CssProvider | null;
    /**
     * @param widget
     * @param data
     * @param class_name
     * @param priority
     */
    function set_theming_for_data(widget: Gtk.Widget, data: string, class_name: string | null, priority: number): void;
    /**
     * @param resource
     * @param priority
     * @param display
     */
    function add_css_provider_from_resource(resource: string, priority: number, display: Gdk.Display): void;
    namespace Settings {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::schema': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            schema: Gio.Settings;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class Settings extends GObject.Object {
        static $gtype: GObject.GType<Settings>;

        // Properties

        get schema(): Gio.Settings;
        set schema(val: Gio.Settings);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Settings.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Settings.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Settings.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Settings.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Settings.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Settings.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Settings.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Settings.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_schema(): Gio.Settings;
        /**
         * @param value
         */
        set_schema(value: Gio.Settings): void;
    }

    /**
     * @gir-type Alias
     */
    type SettingsClass = typeof Settings;
    /**
     * @gir-type Struct
     */
    abstract class SettingsPrivate {
        static $gtype: GObject.GType<SettingsPrivate>;
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
