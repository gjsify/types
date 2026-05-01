
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
import type GstTag from '@girs/gsttag-1.0';
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type EvinceView from '@girs/evinceview-3.0';
import type EvinceDocument from '@girs/evincedocument-3.0';

export namespace Sushi {

    /**
     * Sushi-1.0
     */


    /**
     * @param file 
     */
    function convert_libreoffice(file: Gio.File): globalThis.Promise<Gio.File>;
    /**
     * @param file 
     * @param callback 
     */
    function convert_libreoffice(file: Gio.File, callback: (Gio.AsyncReadyCallback<Gio.File> | null)): void;
    /**
     * @param file 
     * @param callback 
     */
    function convert_libreoffice(file: Gio.File, callback: (Gio.AsyncReadyCallback<Gio.File> | null)): (globalThis.Promise<Gio.File> | void);

    /**
     * @param result 
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
    function get_asin_for_track(artist: string, album: string, callback: (Gio.AsyncReadyCallback<string> | null)): void;
    /**
     * @param artist 
     * @param album 
     * @param callback 
     */
    function get_asin_for_track(artist: string, album: string, callback: (Gio.AsyncReadyCallback<string> | null)): (globalThis.Promise<string> | void);

    /**
     * @param result 
     */
    function get_asin_for_track_finish(result: Gio.AsyncResult): string;

    /**
     * @param job 
     */
    function get_evince_document_from_job(job: EvinceView.Job): EvinceDocument.Document;

    /**
     * @param sample 
     */
    function pixbuf_from_gst_sample(sample: Gst.Sample): GdkPixbuf.Pixbuf;

    function query_supported_document_types(): string[];

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

    namespace FontWidget {
        // Signal signatures
        interface SignalSignatures extends Gtk.DrawingArea.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            error: (arg0: GLib.Error) => void;
            /**
             * @signal
             * @run-first
             */
            loaded: () => void;
            "notify::face-index": (pspec: GObject.ParamSpec) => void;
            "notify::uri": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.DrawingArea.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            face_index: number;
            faceIndex: number;
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


    namespace MediaBin {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            error: (arg0: GLib.Error) => (boolean | void);
            /**
             * @signal
             * @action
             * @run-last
             */
            seek: (arg0: number) => void;
            /**
             * @signal
             * @run-last
             */
            "size-change": () => void;
            /**
             * @signal
             * @run-last
             */
            "tags-change": () => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            toggle: (arg0: string) => void;
            "notify::audio-mode": (pspec: GObject.ParamSpec) => void;
            "notify::autohide-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::fullscreen": (pspec: GObject.ParamSpec) => void;
            "notify::show-stream-info": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::uri": (pspec: GObject.ParamSpec) => void;
            "notify::volume": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            audio_mode: boolean;
            audioMode: boolean;
            autohide_timeout: number;
            autohideTimeout: number;
            description: string;
            fullscreen: boolean;
            show_stream_info: boolean;
            showStreamInfo: boolean;
            title: string;
            uri: string;
            volume: number;
        }
    }

    /**
     * @gir-type Class
     */
    class MediaBin extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<MediaBin>;

        // Properties
        /**
         * @construct-only
         * @default false
         */
        get audio_mode(): boolean;

        /**
         * @construct-only
         * @default false
         */
        get audioMode(): boolean;

        /**
         * @default 2
         */
        get autohide_timeout(): number;
        set autohide_timeout(val: number);

        /**
         * @default 2
         */
        get autohideTimeout(): number;
        set autohideTimeout(val: number);

        /**
         * @default null
         */
        get description(): string;
        set description(val: string);

        /**
         * @default false
         */
        get fullscreen(): boolean;
        set fullscreen(val: boolean);

        /**
         * @default false
         */
        get show_stream_info(): boolean;
        set show_stream_info(val: boolean);

        /**
         * @default false
         */
        get showStreamInfo(): boolean;
        set showStreamInfo(val: boolean);

        /**
         * @default null
         */
        get title(): string;
        set title(val: string);

        /**
         * @default null
         */
        get uri(): string;
        set uri(val: string);

        /**
         * @default 1
         */
        get volume(): number;
        set volume(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MediaBin.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MediaBin.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](audio_mode: boolean): MediaBin;

        // Conflicted with Gtk.Box.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof MediaBin.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MediaBin.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MediaBin.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MediaBin.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MediaBin.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MediaBin.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Returns a {@link Gst.TagList} with the audio tags for the played media
         */
        get_audio_tags(): Gst.TagList;

        /**
         * Returns control's auto hide timeout in seconds.
         */
        get_autohide_timeout(): number;

        /**
         * Returns the media description if any
         */
        get_description(): string;

        /**
         * Returns whether video is fullscreen or not
         */
        get_fullscreen(): boolean;

        /**
         * Returns whether streams information are show or not
         */
        get_show_stream_info(): boolean;

        /**
         * Returns the media title if any
         */
        get_title(): string;

        /**
         * Return the media URI
         */
        get_uri(): string;

        /**
         * Returns a {@link Gst.TagList} with the video tags for the played media
         */
        get_video_tags(): Gst.TagList;

        /**
         * Returns audio volume from 0.0 to 1.0
         */
        get_volume(): number;

        /**
         * Pause media playback
         */
        pause(): void;

        /**
         * Start media playback
         */
        play(): void;

        /**
         * Takes a screenshot of the current frame.
         * @param width desired screenshot width or -1 for original size
         * @param height desired screenshot height or -1 for original size
         * @returns a new {@link GdkPixbuf.Pixbuf}
         */
        screenshot(width: number, height: number): GdkPixbuf.Pixbuf;

        /**
         * Sets the timeout to auto hide controls
         * @param autohide_timeout A timeout in seconds
         */
        set_autohide_timeout(autohide_timeout: number): void;

        /**
         * Sets the media description.
         * By default SushiMediaBin will use the description from the media metadata
         * @param description 
         */
        set_description(description: string): void;

        /**
         * Sets whether to show the video in fullscreen mode or not
         * @param fullscreen 
         */
        set_fullscreen(fullscreen: boolean): void;

        /**
         * Sets whether to show stream information or not
         * @param show_stream_info 
         */
        set_show_stream_info(show_stream_info: boolean): void;

        /**
         * Sets the media title.
         * By default SushiMediaBin will use the title from the media metadata
         * @param title 
         */
        set_title(title: string): void;

        /**
         * Sets the media URI to play
         * @param uri 
         */
        set_uri(uri: string): void;

        /**
         * Sets the audio volume
         * @param volume from 0.0 to 1.0
         */
        set_volume(volume: number): void;

        /**
         * Stop media playback
         */
        stop(): void;

        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
          * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }


    /**
     * @gir-type Alias
     */
    type FontWidgetClass = typeof FontWidget;

    /**
     * @gir-type Alias
     */
    type MediaBinClass = typeof MediaBin;

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
