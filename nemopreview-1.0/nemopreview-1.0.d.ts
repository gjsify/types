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
import type XreaderDocument from '@girs/xreaderdocument-1.5';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';
import type GtkSource from '@girs/gtksource-4';
import type GstTag from '@girs/gsttag-1.0';
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GstPbutils from '@girs/gstpbutils-1.0';
import type GstVideo from '@girs/gstvideo-1.0';
import type GstAudio from '@girs/gstaudio-1.0';
import type Clutter from '@girs/clutter-1.0';
import type Json from '@girs/json-1.0';
import type GL from '@girs/gl-1.0';
import type CoglPango from '@girs/coglpango-1.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Cogl from '@girs/cogl-1.0';

export namespace NemoPreview {
    /**
     * NemoPreview-1.0
     */

    /**
     * @gir-type Enum
     */
    export namespace SoundPlayerState {
        export const $gtype: GObject.GType<SoundPlayerState>;
    }

    /**
     * @gir-type Enum
     */
    enum SoundPlayerState {
        UNKNOWN,
        IDLE,
        PLAYING,
        DONE,
        ERROR,
    }

    /**
     * @param xid
     * @returns a {@link Gdk.Window}
     */
    function create_foreign_window(xid: number): Gdk.Window;
    /**
     * @returns a {@link Clutter.Actor}
     */
    function create_rounded_background(): Clutter.Actor;
    function query_supported_document_types(): string[];
    namespace CoverArtFetcher {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::cover': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            cover: GdkPixbuf.Pixbuf;
        }
    }

    /**
     * @gir-type Class
     */
    class CoverArtFetcher extends GObject.Object {
        static $gtype: GObject.GType<CoverArtFetcher>;

        // Properties

        /**
         * @read-only
         */
        get cover(): GdkPixbuf.Pixbuf;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CoverArtFetcher.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CoverArtFetcher.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](taglist: Gst.TagList): CoverArtFetcher;

        // Signals

        /** @signal */
        connect<K extends keyof CoverArtFetcher.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CoverArtFetcher.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CoverArtFetcher.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CoverArtFetcher.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CoverArtFetcher.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CoverArtFetcher.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace FileLoader {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::content-type': (pspec: GObject.ParamSpec) => void;
            'notify::file': (pspec: GObject.ParamSpec) => void;
            'notify::file-type': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::time': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            content_type: string;
            contentType: string;
            file: Gio.File;
            file_type: Gio.FileType;
            fileType: Gio.FileType;
            icon: GdkPixbuf.Pixbuf;
            name: string;
            size: string;
            time: string;
        }
    }

    /**
     * @gir-type Class
     */
    class FileLoader extends GObject.Object {
        static $gtype: GObject.GType<FileLoader>;

        // Properties

        /**
         * @read-only
         * @default null
         */
        get content_type(): string;
        /**
         * @read-only
         * @default null
         */
        get contentType(): string;
        get file(): Gio.File;
        set file(val: Gio.File);
        /**
         * @read-only
         * @default Gio.FileType.UNKNOWN
         */
        get file_type(): Gio.FileType;
        /**
         * @read-only
         * @default Gio.FileType.UNKNOWN
         */
        get fileType(): Gio.FileType;
        /**
         * @read-only
         */
        get icon(): GdkPixbuf.Pixbuf;
        /**
         * @read-only
         * @default null
         */
        get name(): string;
        /**
         * @read-only
         * @default null
         */
        get size(): string;
        /**
         * @read-only
         * @default null
         */
        get time(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileLoader.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FileLoader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](file: Gio.File): FileLoader;

        // Signals

        /** @signal */
        connect<K extends keyof FileLoader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileLoader.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FileLoader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileLoader.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FileLoader.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FileLoader.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_content_type_string(): string;
        get_date_string(): string;
        get_display_name(): string;
        get_file_type(): Gio.FileType;
        get_icon(): GdkPixbuf.Pixbuf;
        get_loading(): boolean;
        get_size_string(): string;
        stop(): void;
    }

    namespace FontWidget {
        // Signal signatures
        interface SignalSignatures extends Gtk.DrawingArea.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            error: (arg0: string) => void;
            /**
             * @signal
             * @run-first
             */
            loaded: () => void;
            'notify::uri': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.DrawingArea.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {
            uri: string;
        }
    }

    /**
     * @gir-type Class
     */
    class FontWidget extends Gtk.DrawingArea implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<FontWidget>;

        // Properties

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

        static ['new'](uri: string): FontWidget;
        // Conflicted with Gtk.DrawingArea.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof FontWidget.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FontWidget.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FontWidget.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FontWidget.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FontWidget.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FontWidget.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_uri(): string;
    }

    namespace PdfLoader {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::document': (pspec: GObject.ParamSpec) => void;
            'notify::uri': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            document: XreaderDocument.Document;
            uri: string;
        }
    }

    /**
     * @gir-type Class
     */
    class PdfLoader extends GObject.Object {
        static $gtype: GObject.GType<PdfLoader>;

        // Properties

        /**
         * @read-only
         */
        get document(): XreaderDocument.Document;
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
        $signals: PdfLoader.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PdfLoader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](uri: string): PdfLoader;

        // Signals

        /** @signal */
        connect<K extends keyof PdfLoader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PdfLoader.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PdfLoader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PdfLoader.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PdfLoader.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PdfLoader.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        cleanup_document(): void;
        get_max_page_size(): [number, number];
    }

    namespace SoundPlayer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::duration': (pspec: GObject.ParamSpec) => void;
            'notify::playing': (pspec: GObject.ParamSpec) => void;
            'notify::progress': (pspec: GObject.ParamSpec) => void;
            'notify::state': (pspec: GObject.ParamSpec) => void;
            'notify::uri': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            duration: number;
            playing: boolean;
            progress: number;
            state: SoundPlayerState;
            uri: string;
        }
    }

    /**
     * @gir-type Class
     */
    class SoundPlayer extends GObject.Object {
        static $gtype: GObject.GType<SoundPlayer>;

        // Properties

        /**
         * @read-only
         * @default 0
         */
        get duration(): number;
        /**
         * @default false
         */
        get playing(): boolean;
        set playing(val: boolean);
        /**
         * @default 0
         */
        get progress(): number;
        set progress(val: number);
        /**
         * @read-only
         * @default NemoPreview.SoundPlayerState.UNKNOWN
         */
        get state(): SoundPlayerState;
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
        $signals: SoundPlayer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SoundPlayer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof SoundPlayer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SoundPlayer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SoundPlayer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SoundPlayer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SoundPlayer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SoundPlayer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace TextLoader {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            loaded: (arg0: GtkSource.Buffer) => void;
            'notify::uri': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            uri: string;
        }
    }

    /**
     * @gir-type Class
     */
    class TextLoader extends GObject.Object {
        static $gtype: GObject.GType<TextLoader>;

        // Properties

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
        $signals: TextLoader.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TextLoader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](uri: string): TextLoader;

        // Signals

        /** @signal */
        connect<K extends keyof TextLoader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TextLoader.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof TextLoader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TextLoader.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof TextLoader.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TextLoader.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    /**
     * @gir-type Alias
     */
    type CoverArtFetcherClass = typeof CoverArtFetcher;
    /**
     * @gir-type Struct
     */
    abstract class CoverArtFetcherPrivate {
        static $gtype: GObject.GType<CoverArtFetcherPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type FileLoaderClass = typeof FileLoader;
    /**
     * @gir-type Struct
     */
    abstract class FileLoaderPrivate {
        static $gtype: GObject.GType<FileLoaderPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type FontWidgetClass = typeof FontWidget;
    /**
     * @gir-type Struct
     */
    abstract class FontWidgetPrivate {
        static $gtype: GObject.GType<FontWidgetPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type PdfLoaderClass = typeof PdfLoader;
    /**
     * @gir-type Struct
     */
    abstract class PdfLoaderPrivate {
        static $gtype: GObject.GType<PdfLoaderPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type SoundPlayerClass = typeof SoundPlayer;
    /**
     * @gir-type Struct
     */
    abstract class SoundPlayerPrivate {
        static $gtype: GObject.GType<SoundPlayerPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type TextLoaderClass = typeof TextLoader;
    /**
     * @gir-type Struct
     */
    abstract class TextLoaderPrivate {
        static $gtype: GObject.GType<TextLoaderPrivate>;
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

export default NemoPreview;

// END
