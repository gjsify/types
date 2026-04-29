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

export namespace Shew {
    /**
     * Shew-0
     */

    namespace ExternalWindow {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::display': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            display: Gdk.Display;
        }
    }

    /**
     * @gir-type Class
     */
    class ExternalWindow extends GObject.Object {
        static $gtype: GObject.GType<ExternalWindow>;

        // Properties

        /**
         * @construct-only
         */
        get display(): Gdk.Display;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ExternalWindow.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ExternalWindow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_from_handle(handle_str: string): ExternalWindow;

        // Signals

        /** @signal */
        connect<K extends keyof ExternalWindow.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ExternalWindow.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ExternalWindow.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ExternalWindow.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ExternalWindow.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ExternalWindow.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param child_surface
         * @virtual
         */
        vfunc_set_parent_of(child_surface: Gdk.Surface): void;

        // Methods

        get_display(): Gdk.Display;
        /**
         * @param child_surface
         */
        set_parent_of(child_surface: Gdk.Surface): void;
    }

    namespace WindowExporter {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            window: Gtk.Window;
        }
    }

    /**
     * @gir-type Class
     */
    class WindowExporter extends GObject.Object {
        static $gtype: GObject.GType<WindowExporter>;

        // Properties

        /**
         * @construct-only
         */
        get window(): Gtk.Window;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WindowExporter.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WindowExporter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](window: Gtk.Window): WindowExporter;

        // Signals

        /** @signal */
        connect<K extends keyof WindowExporter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WindowExporter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WindowExporter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WindowExporter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WindowExporter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WindowExporter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        ['export'](): globalThis.Promise<string>;
        /**
         * @param callback
         */
        ['export'](callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param callback
         */
        ['export'](callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;
        /**
         * @param result
         */
        export_finish(result: Gio.AsyncResult): string;
        /**
         * @param handle
         */
        unexport(handle: string): void;
    }

    /**
     * @gir-type Alias
     */
    type ExternalWindowClass = typeof ExternalWindow;
    /**
     * @gir-type Alias
     */
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
