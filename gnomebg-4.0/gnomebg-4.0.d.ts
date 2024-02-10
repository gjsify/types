/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gnomebg-4.0-ambient.d.ts';
import './gnomebg-4.0-import.d.ts';
/**
 * GnomeBG-4.0
 */

import type GnomeDesktop from '@girs/gnomedesktop-4.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GDesktopEnums from '@girs/gdesktopenums-3.0';
import type Gdk from '@girs/gdk-4.0';
import type cairo from '@girs/cairo-1.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';

export namespace GnomeBG {
    module BG {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        interface Transitioned {
            (): void;
        }

        // Constructor properties interface
    }

    class BG extends GObject.Object {
        // Constructors of GnomeBG-4.0.BG

        static ['new'](): BG;

        // Owm methods of GnomeBG-4.0.BG

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
        get_rgba(type: GDesktopEnums.BackgroundShading, primary: Gdk.RGBA, secondary: Gdk.RGBA): void;
        has_multiple_sizes(): boolean;
        is_dark(dest_width: number, dest_height: number): boolean;
        load_from_preferences(settings: Gio.Settings): void;
        save_to_preferences(settings: Gio.Settings): void;
        set_filename(filename: string): void;
        set_placement(placement: GDesktopEnums.BackgroundStyle): void;
        set_rgba(type: GDesktopEnums.BackgroundShading, primary: Gdk.RGBA, secondary: Gdk.RGBA): void;
    }

    module BGSlideShow {
        // Constructor properties interface
    }

    class BGSlideShow extends GObject.Object {
        // Own properties of GnomeBG-4.0.BGSlideShow

        file: Gio.File;
        readonly has_multiple_sizes: boolean;
        readonly hasMultipleSizes: boolean;
        readonly start_time: number;
        readonly startTime: number;
        readonly total_duration: number;
        readonly totalDuration: number;

        // Own fields of GnomeBG-4.0.BGSlideShow

        parent_object: GObject.Object;

        // Constructors of GnomeBG-4.0.BGSlideShow

        static ['new'](filename: string): BGSlideShow;

        // Owm methods of GnomeBG-4.0.BGSlideShow

        /**
         * Returns the current slides progress.
         * @param width monitor width
         * @param height monitor height
         */
        get_current_slide(width: number, height: number): void;
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
        get_slide(frame_number: number, width: number, height: number): boolean;
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

    class BGClass {}

    class BGSlideShowClass {}

    class BGSlideShowPrivate {}

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
