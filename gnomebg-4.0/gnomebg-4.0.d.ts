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
import type GnomeDesktop from '@girs/gnomedesktop-4.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GDesktopEnums from '@girs/gdesktopenums-3.0';
import type Gdk from '@girs/gdk-4.0';
import type cairo from 'cairo';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';

export namespace GnomeBG {
    /**
     * GnomeBG-4.0
     */

    namespace BG {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            changed: () => void;
            transitioned: () => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class BG extends GObject.Object {
        static $gtype: GObject.GType<BG>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BG.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<BG.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): BG;

        // Signals

        connect<K extends keyof BG.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BG.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BG.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BG.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BG.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BG.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        changes_with_time(): boolean;
        /**
         * Creates a thumbnail for a certain frame, where 'frame' is somewhat
         * vaguely defined as 'suitable point to show while single-stepping
         * through the slideshow'.
         * @param factory
         * @param screen_area
         * @param dest_width
         * @param dest_height
         * @param frame_num
         * @returns the newly created thumbnail or or NULL if frame_num is out of bounds.
         */
        create_frame_thumbnail(
            factory: GnomeDesktop.DesktopThumbnailFactory,
            screen_area: cairo.RectangleInt,
            dest_width: number,
            dest_height: number,
            frame_num: number,
        ): GdkPixbuf.Pixbuf;
        /**
         * Create a surface that can be set as background for `window`.
         * @param window
         * @param width
         * @param height
         * @returns %NULL on error (e.g. out of X connections)
         */
        create_surface(window: Gdk.Surface, width: number, height: number): cairo.Surface;
        create_thumbnail(
            factory: GnomeDesktop.DesktopThumbnailFactory,
            screen_area: cairo.RectangleInt,
            dest_width: number,
            dest_height: number,
        ): GdkPixbuf.Pixbuf;
        draw(dest: GdkPixbuf.Pixbuf): void;
        get_filename(): string;
        get_image_size(
            factory: GnomeDesktop.DesktopThumbnailFactory,
            best_width: number,
            best_height: number,
            width: number,
            height: number,
        ): boolean;
        get_placement(): GDesktopEnums.BackgroundStyle;
        get_rgba(type: GDesktopEnums.BackgroundShading | null, primary: Gdk.RGBA, secondary: Gdk.RGBA): void;
        has_multiple_sizes(): boolean;
        is_dark(dest_width: number, dest_height: number): boolean;
        load_from_preferences(settings: Gio.Settings): void;
        save_to_preferences(settings: Gio.Settings): void;
        set_filename(filename: string): void;
        set_placement(placement: GDesktopEnums.BackgroundStyle | null): void;
        set_rgba(type: GDesktopEnums.BackgroundShading | null, primary: Gdk.RGBA, secondary: Gdk.RGBA): void;
    }

    namespace BGSlideShow {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::file': (pspec: GObject.ParamSpec) => void;
            'notify::has-multiple-sizes': (pspec: GObject.ParamSpec) => void;
            'notify::start-time': (pspec: GObject.ParamSpec) => void;
            'notify::total-duration': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            file: Gio.File;
            has_multiple_sizes: boolean;
            hasMultipleSizes: boolean;
            start_time: number;
            startTime: number;
            total_duration: number;
            totalDuration: number;
        }
    }

    class BGSlideShow extends GObject.Object {
        static $gtype: GObject.GType<BGSlideShow>;

        // Properties

        get file(): Gio.File;
        get has_multiple_sizes(): boolean;
        get hasMultipleSizes(): boolean;
        get start_time(): number;
        get startTime(): number;
        get total_duration(): number;
        get totalDuration(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BGSlideShow.SignalSignatures;

        // Fields

        parent_object: GObject.Object;

        // Constructors

        constructor(properties?: Partial<BGSlideShow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](filename: string): BGSlideShow;

        // Signals

        connect<K extends keyof BGSlideShow.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BGSlideShow.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BGSlideShow.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BGSlideShow.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BGSlideShow.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BGSlideShow.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Returns the current slides progress.
         * @param width monitor width
         * @param height monitor height
         */
        get_current_slide(width: number, height: number): [number, number, boolean, string, string];
        /**
         * gets whether or not the slide show has multiple sizes for different monitors
         * @returns %TRUE if multiple sizes
         */
        get_has_multiple_sizes(): boolean;
        /**
         * Returns number of slides in slide show
         */
        get_num_slides(): number;
        /**
         * Retrieves slide by frame number
         * @param frame_number frame number
         * @param width monitor width
         * @param height monitor height
         * @returns %TRUE if successful
         */
        get_slide(
            frame_number: number,
            width: number,
            height: number,
        ): [boolean, number, number, boolean, string, string];
        /**
         * gets the start time of the slide show
         * @returns a timestamp
         */
        get_start_time(): number;
        /**
         * gets the total duration of the slide show
         * @returns a timestamp
         */
        get_total_duration(): number;
        /**
         * Tries to load the slide show.
         * @returns %TRUE if successful
         */
        load(): boolean;
        /**
         * Tries to load the slide show asynchronously.
         * @param cancellable a #GCancellable
         * @param callback the callback
         */
        load_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
    }

    type BGClass = typeof BG;
    type BGSlideShowClass = typeof BGSlideShow;
    abstract class BGSlideShowPrivate {
        static $gtype: GObject.GType<BGSlideShowPrivate>;

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

export default GnomeBG;

// END
