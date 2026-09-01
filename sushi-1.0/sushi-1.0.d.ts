
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
import type PapersView from '@girs/papersview-4.0';
import type PapersDocument from '@girs/papersdocument-4.0';
import type Pango from '@girs/pango-1.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gtk from '@girs/gtk-4.0';
import type Gsk from '@girs/gsk-4.0';
import type Graphene from '@girs/graphene-1.0';
import type Gdk from '@girs/gdk-4.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GstTag from '@girs/gsttag-1.0';
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';

export namespace Sushi {

    /**
     * Sushi-1.0
     */


    /**
     * @param file 
     * @param cancellable 
     */
    function convert_libreoffice(file: Gio.File, cancellable: Gio.Cancellable | null): globalThis.Promise<Gio.File>;
    /**
     * @param file 
     * @param cancellable 
     * @param callback 
     */
    function convert_libreoffice(file: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.File> | null): void;
    /**
     * @param file 
     * @param cancellable 
     * @param callback 
     */
    function convert_libreoffice(file: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.File> | null): globalThis.Promise<Gio.File> | void;

    /**
     * @param result 
     * @throws GLib.Error
     */
    function convert_libreoffice_finish(result: Gio.AsyncResult): Gio.File;

    /**
     * @param artist 
     * @param album 
     */
    function get_asin_for_track(artist: string, album: string): globalThis.Promise<string>;
    /**
     * @param artist 
     * @param album 
     * @param callback 
     */
    function get_asin_for_track(artist: string, album: string, callback: Gio.AsyncReadyCallback<string> | null): void;
    /**
     * @param artist 
     * @param album 
     * @param callback 
     */
    function get_asin_for_track(artist: string, album: string, callback: Gio.AsyncReadyCallback<string> | null): globalThis.Promise<string> | void;

    /**
     * @param result 
     * @throws GLib.Error
     */
    function get_asin_for_track_finish(result: Gio.AsyncResult): string;

    /**
     * @param display 
     * @returns Whether we are running under Wayland backend.
     */
    function running_under_wayland(display: Gdk.Display): boolean;

    /**
     * @param window 
     * @param handle 
     */
    function window_set_child_of_external(window: Gtk.Window, handle: string): void;

    namespace Discoverer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            "tags-changed": () => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Discoverer extends GObject.Object {
        static $gtype: GObject.GType<Discoverer>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Discoverer.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Discoverer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](uri: string): Discoverer;

        // Signals
        /** @signal */
        connect<K extends keyof Discoverer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Discoverer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Discoverer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Discoverer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Discoverer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Discoverer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_tag_list(): Gst.TagList;
    }


    namespace FontWidget {
        // Signal signatures
        interface SignalSignatures extends Gtk.DrawingArea.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            error: (object: GLib.Error) => void;
            /**
             * @signal
             * @run-first
             */
            loaded: () => void;
            "notify::face-index": (pspec: GObject.ParamSpec) => void;
            "notify::uri": (pspec: GObject.ParamSpec) => void;
            "notify::content-height": (pspec: GObject.ParamSpec) => void;
            "notify::content-width": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::can-target": (pspec: GObject.ParamSpec) => void;
            "notify::css-classes": (pspec: GObject.ParamSpec) => void;
            "notify::css-name": (pspec: GObject.ParamSpec) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::focusable": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::limit-events": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::overflow": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.DrawingArea.ConstructorProps, Gtk.Accessible.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.ConstraintTarget.ConstructorProps {
            face_index: number;
            faceIndex: number;
            uri: string;
        }
    }

    /**
     * @gir-type Class
     */
    class FontWidget extends Gtk.DrawingArea implements Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {
        static $gtype: GObject.GType<FontWidget>;

        // Properties
        /**
         * @default 0
         */
        get face_index(): number;
        set face_index(val: number);

        /**
         * @default 0
         */
        get faceIndex(): number;
        set faceIndex(val: number);

        /**
         * @default null
         */
        get uri(): string;
        set uri(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FontWidget.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<FontWidget.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](uri: string, face_index: number): FontWidget;

        // Conflicted with Gtk.DrawingArea.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof FontWidget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FontWidget.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FontWidget.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FontWidget.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FontWidget.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FontWidget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_uri(): string;

        load(): void;
    }


    /**
     * @gir-type Alias
     */
    type DiscovererClass = typeof Discoverer;

    /**
     * @gir-type Alias
     */
    type FontWidgetClass = typeof FontWidget;

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

export default Sushi;

// END
