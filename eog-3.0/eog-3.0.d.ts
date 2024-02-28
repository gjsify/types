/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './eog-3.0-ambient.d.ts';
import './eog-3.0-import.d.ts';
/**
 * Eog-3.0
 */

import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Atk from '@girs/atk-1.0';

export namespace Eog {
    class ImageError extends GLib.Error {
        // Own fields of Eog-3.0.ImageError

        SAVE_NOT_LOCAL: number;
        NOT_LOADED: number;
        NOT_SAVED: number;
        VFS: number;
        FILE_EXISTS: number;
        TMP_FILE_FAILED: number;
        GENERIC: number;
        UNKNOWN: number;

        // Constructors of Eog-3.0.ImageError

        constructor(options: { message: string; code: number });

        // Owm methods of Eog-3.0.ImageError

        static quark(): GLib.Quark;
    }

    enum ImageMetadataStatus {
        NOT_READ,
        NOT_AVAILABLE,
        READY,
    }
    enum ImageStatus {
        UNKNOWN,
        LOADING,
        LOADED,
        SAVING,
        FAILED,
    }
    enum JobPriority {
        PRIORITY_HIGH,
        PRIORITY_MEDIUM,
        PRIORITY_LOW,
        N_PRIORITIES,
    }
    enum ListStoreColumn {
        THUMBNAIL,
        THUMB_SET,
        EOG_IMAGE,
        EOG_JOB,
        NUM_COLUMNS,
    }
    enum ThumbNavMode {
        ONE_ROW,
        ONE_COLUMN,
        MULTIPLE_ROWS,
        MULTIPLE_COLUMNS,
    }
    enum ThumbViewSelectionChange {
        CURRENT,
        LEFT,
        RIGHT,
        FIRST,
        LAST,
        RANDOM,
    }
    enum TransformType {
        NONE,
        ROT_90,
        ROT_180,
        ROT_270,
        FLIP_HORIZONTAL,
        FLIP_VERTICAL,
        TRANSPOSE,
        TRANSVERSE,
    }
    /**
     * Used to define how transparent image parts are drawn.
     */
    enum TransparencyStyle {
        /**
         * Use the background color of the current UI theme
         */
        BACKGROUND,
        /**
         * Show transparent parts as a checkerboard pattern
         */
        CHECKED,
        /**
         * Show transparent parts in a user defined color
         *                    (see #EogScrollView:transparency-color )
         */
        COLOR,
    }
    class UCError extends GLib.Error {
        // Own fields of Eog-3.0.UCError

        INVALID_UNICODE: number;
        INVALID_CHARACTER: number;
        EQUAL_FILENAMES: number;
        UNKNOWN: number;

        // Constructors of Eog-3.0.UCError

        constructor(options: { message: string; code: number });

        // Owm methods of Eog-3.0.UCError

        static quark(): GLib.Quark;
    }

    enum UCType {
        STRING,
        FILENAME,
        COUNTER,
        COMMENT,
        DATE,
        TIME,
        DAY,
        MONTH,
        YEAR,
        HOUR,
        MINUTE,
        SECOND,
        END,
    }
    enum WindowError {
        CONTROL_NOT_FOUND,
        UI_NOT_FOUND,
        NO_PERSIST_FILE_INTERFACE,
        IO,
        TRASH_NOT_FOUND,
        GENERIC,
        UNKNOWN,
    }
    enum WindowGalleryPos {
        BOTTOM,
        LEFT,
        TOP,
        RIGHT,
    }
    enum WindowMode {
        UNKNOWN,
        NORMAL,
        FULLSCREEN,
        SLIDESHOW,
    }
    /**
     * Used to determine the zooming behaviour of an #EogScrollView.
     */
    enum ZoomMode {
        /**
         * Use the currently set zoom factor to display the image
         *                      (see eog_scroll_view_set_zoom()).
         */
        FREE,
        /**
         * If an image is to large for the window,
         *                               zoom out until the image is fully visible.
         *                               This will never zoom in on smaller images.
         */
        SHRINK_TO_FIT,
    }
    const FILE_FORMAT_JPEG: string;
    const IMAGE_DATA_ALL: number;
    const LIST_STORE_THUMB_SIZE: number;
    const SCROLL_VIEW_MAX_ZOOM_FACTOR: number;
    const SCROLL_VIEW_MIN_ZOOM_FACTOR: number;
    const THUMBNAIL_ORIGINAL_HEIGHT: string;
    const THUMBNAIL_ORIGINAL_WIDTH: string;
    function debug(section: Debug, file: string, line: number, _function: string): void;
    function debug_init(): void;
    /**
     * Takes a date string formatted after Exif specifications and generates a
     * more readable, possibly localized, string out of it.
     * @param date a date string following Exif specifications
     * @returns a newly allocated date string formatted according to the current locale.
     */
    function exif_util_format_date(date: string): string;
    function image_error_quark(): GLib.Quark;
    function marshal_VOID__INT_INT(
        closure: GObject.Closure,
        return_value: GObject.Value,
        n_param_values: number,
        param_values: GObject.Value,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    /**
     * Adds a frame to `thumbnail`
     * @param thumbnail a #GdkPixbuf
     * @returns a new #GdkPixbuf, storing @thumbnail nicely framed.
     */
    function thumbnail_add_frame(thumbnail: GdkPixbuf.Pixbuf): GdkPixbuf.Pixbuf;
    /**
     * Ensures a pixbuf fits a given `dimension`
     * @param thumbnail a #GdkPixbuf
     * @param dimension the maximum width or height desired
     * @returns a new #GdkPixbuf
     */
    function thumbnail_fit_to_size(thumbnail: GdkPixbuf.Pixbuf, dimension: number): GdkPixbuf.Pixbuf;
    function thumbnail_init(): void;
    /**
     * Loads the thumbnail for `image`. In case of error, %NULL is returned
     * and `error` is set.
     * @param image a #EogImage
     * @returns a new #GdkPixbuf with the thumbnail for @image or %NULL in case of error.
     */
    function thumbnail_load(image: Image): GdkPixbuf.Pixbuf;
    function uc_error_quark(): GLib.Quark;
    type ExifData = object | null;
    enum Debug {
        NO_DEBUG,
        WINDOW,
        VIEW,
        JOBS,
        THUMBNAIL,
        IMAGE_DATA,
        IMAGE_LOAD,
        IMAGE_SAVE,
        LIST_STORE,
        PREFERENCES,
        PRINTING,
        LCMS,
        PLUGINS,
    }
    enum ImageData {
        IMAGE,
        DIMENSION,
        EXIF,
        XMP,
    }
    enum StartupFlags {
        FULLSCREEN,
        SLIDE_SHOW,
        DISABLE_GALLERY,
        SINGLE_WINDOW,
    }
    module Application {
        // Constructor properties interface
    }

    class Application extends Gtk.Application {
        // Own fields of Eog-3.0.Application

        base_instance: Gtk.Application;

        // Owm methods of Eog-3.0.Application

        /**
         * Returns a singleton instance of #EogApplication currently running.
         * If not running yet, it will create one.
         */
        static get_instance(): Application;

        // Owm methods of Eog-3.0.Application

        close_all_windows(): boolean;
        /**
         * Opens a list of files in a #EogWindow. If an #EogWindow displaying the first
         * image in the list is already open, this will be used. Otherwise, an empty
         * #EogWindow is used, either already existing or newly created.
         * If the EOG_STARTUP_SINGLE_WINDOW flag is set, the files are opened in the
         * first #EogWindow and no new one is opened.
         * @param file_list A list of #GFile<!-- -->s.
         * @param timestamp The timestamp of the user interaction which triggered this call (see gtk_window_present_with_time()).
         * @param flags A set of #EogStartupFlags influencing a new windows' state.
         * @returns Currently always %TRUE.
         */
        open_file_list(file_list: Gio.File[], timestamp: number, flags: StartupFlags): boolean;
        /**
         * Opens a list of images, from a list of URIs. See
         * eog_application_open_file_list() for details.
         * @param uri_list A list of URIs.
         * @param timestamp The timestamp of the user interaction which triggered this call (see gtk_window_present_with_time()).
         * @param flags A set of #EogStartupFlags influencing a new windows' state.
         * @returns Currently always %TRUE.
         */
        open_uri_list(uri_list: string[], timestamp: number, flags: StartupFlags): boolean;
        /**
         * Opens a list of images, from a list of URI strings. See
         * eog_application_open_file_list() for details.
         * @param uris A #GList of URI strings.
         * @param timestamp The timestamp of the user interaction which triggered this call (see gtk_window_present_with_time()).
         * @param flags A set of #EogStartupFlags influencing a new windows' state.
         * @returns Currently always %TRUE.
         */
        open_uris(uris: string, timestamp: number, flags: StartupFlags): boolean;
        /**
         * Opens and presents an empty #EogWindow to the user. If there is
         * an empty window already open, this will be used. Otherwise, a
         * new one will be instantiated.
         * @param timestamp The timestamp of the user interaction which triggered this call (see gtk_window_present_with_time()).
         * @param flags A set of #EogStartupFlags influencing a new windows' state.
         * @returns %FALSE if @application is invalid, %TRUE otherwise
         */
        open_window(timestamp: number, flags: StartupFlags): boolean;
    }

    module ClipboardHandler {
        // Constructor properties interface
    }

    class ClipboardHandler extends GObject.InitiallyUnowned {
        // Own properties of Eog-3.0.ClipboardHandler

        pixbuf: GdkPixbuf.Pixbuf;
        uri: string;

        // Constructors of Eog-3.0.ClipboardHandler

        static ['new'](img: Image): ClipboardHandler;

        // Owm methods of Eog-3.0.ClipboardHandler

        copy_to_clipboard(clipboard: Gtk.Clipboard): void;
    }

    module DetailsDialog {
        // Constructor properties interface
    }

    class DetailsDialog extends Gtk.Window {
        // Own fields of Eog-3.0.DetailsDialog

        window: Gtk.Window;

        // Constructors of Eog-3.0.DetailsDialog

        static ['new'](parent: Gtk.Window): DetailsDialog;

        // Owm methods of Eog-3.0.DetailsDialog

        update(image: Image): void;
    }

    module FileChooser {
        // Constructor properties interface
    }

    class FileChooser extends Gtk.FileChooserDialog {
        // Constructors of Eog-3.0.FileChooser

        static ['new'](action: Gtk.FileChooserAction): FileChooser;

        // Owm methods of Eog-3.0.FileChooser

        get_format(): GdkPixbuf.PixbufFormat;
    }

    module Image {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        interface FileChanged {
            (): void;
        }

        interface NextFrame {
            (delay: number): void;
        }

        interface SaveProgress {
            (object: number): void;
        }

        interface SizePrepared {
            (object: number, p0: number): void;
        }

        interface ThumbnailChanged {
            (): void;
        }

        // Constructor properties interface
    }

    class Image extends GObject.Object {
        // Constructors of Eog-3.0.Image

        static new_file(file: Gio.File, caption: string): Image;

        // Owm methods of Eog-3.0.Image

        /**
         * Gets the list of supported mimetypes
         */
        static get_supported_mime_types(): string[];
        static is_supported_mime_type(mime_type: string): boolean;

        // Owm methods of Eog-3.0.Image

        autorotate(): void;
        cancel_load(): void;
        data_ref(): void;
        data_unref(): void;
        /**
         * Marks the image file contents as changed. Also, emits
         * EogImage::file-changed signal.
         */
        file_changed(): void;
        /**
         * Get `img` autorotate transform.
         * @returns A #EogTransform.
         */
        get_autorotate_transform(): Transform;
        get_bytes(): number;
        get_caption(): string;
        get_collate_key(): string;
        /**
         * Gets the #GFile associated with `img`
         * @returns a #GFile
         */
        get_file(): Gio.File;
        /**
         * Returns the current status of the image metadata, that is,
         * whether the metadata has not been read yet, is ready, or not available at all.
         * @returns one of #EogImageMetadataStatus
         */
        get_metadata_status(): ImageMetadataStatus;
        /**
         * Gets the #GdkPixbuf of the image
         * @returns a #GdkPixbuf
         */
        get_pixbuf(): GdkPixbuf.Pixbuf;
        get_size(width: number, height: number): void;
        get_status(): ImageStatus;
        /**
         * Gets the thumbnail pixbuf for `img`
         * @returns a #GdkPixbuf with a thumbnail
         */
        get_thumbnail(): GdkPixbuf.Pixbuf;
        /**
         * Get `img` transform.
         * @returns A #EogTransform.
         */
        get_transform(): Transform;
        get_uri_for_display(): string;
        has_data(data: ImageData): boolean;
        /**
         * Checks whether a given image is animated.
         * @returns #TRUE if it is an animated image, #FALSE otherwise.
         */
        is_animation(): boolean;
        is_file_changed(): boolean;
        /**
         * Evaluate if the user has write permission on the image file.
         * @returns %TRUE on success, %FALSE if the user hasn't write permissions on it, or @img is not an #EogImage.
         */
        is_file_writable(): boolean;
        is_jpeg(): boolean;
        is_modified(): boolean;
        /**
         * Check whether the image actually contains multiple images/pages.
         * This can happen for TIFF files. GIF animations are not multipaged.
         *
         * Note that this only works if the image data is loaded.
         * @returns %TRUE if @img is multipaged, %FALSE if not or the image data wasn't loaded.
         */
        is_multipaged(): boolean;
        load(data2read: ImageData, job: Job): boolean;
        modified(): void;
        save_as_by_info(source: ImageSaveInfo, target: ImageSaveInfo): boolean;
        save_by_info(source: ImageSaveInfo): boolean;
        set_thumbnail(pixbuf: GdkPixbuf.Pixbuf): void;
        /**
         * Starts playing an animated image.
         * @returns %TRUE on success, %FALSE if @img is already playing or isn't an animated image.
         */
        start_animation(): boolean;
        transform(trans: Transform, job: Job): void;
        undo(): void;
    }

    module ImageSaveInfo {
        // Constructor properties interface
    }

    class ImageSaveInfo extends GObject.Object {
        // Own fields of Eog-3.0.ImageSaveInfo

        file: Gio.File;
        format: string;
        exists: boolean;
        local: boolean;
        has_metadata: boolean;
        modified: boolean;
        overwrite: boolean;
        jpeg_quality: number;

        // Constructors of Eog-3.0.ImageSaveInfo

        static new_from_file(file: Gio.File, format: GdkPixbuf.PixbufFormat): ImageSaveInfo;

        static new_from_image(image: Image): ImageSaveInfo;

        static new_from_uri(uri: string, format: GdkPixbuf.PixbufFormat): ImageSaveInfo;
    }

    module Job {
        // Signal callback interfaces

        interface Cancelled {
            (): void;
        }

        interface Finished {
            (): void;
        }

        interface Progress {
            (object: number): void;
        }

        // Constructor properties interface
    }

    abstract class Job extends GObject.Object {
        // Own fields of Eog-3.0.Job

        cancellable: Gio.Cancellable;
        error: GLib.Error;
        mutex: GLib.Mutex;
        progress: number;
        cancelled: boolean;
        finished: boolean;

        // Owm methods of Eog-3.0.Job

        static scheduler_init(): void;

        // Owm methods of Eog-3.0.Job

        cancel(): void;
        get_progress(): number;
        is_cancelled(): boolean;
        is_finished(): boolean;
        run(): void;
        scheduler_add_job(): void;
        scheduler_add_job_with_priority(priority: JobPriority): void;
        set_progress(progress: number): void;
    }

    module JobCopy {
        // Constructor properties interface
    }

    class JobCopy extends Job {
        // Own fields of Eog-3.0.JobCopy

        images: any[];
        destination: string;
        current_position: number;

        // Constructors of Eog-3.0.JobCopy

        static ['new'](images: Image[], destination: string): JobCopy;
    }

    module JobLoad {
        // Constructor properties interface
    }

    class JobLoad extends Job {
        // Own fields of Eog-3.0.JobLoad

        image: Image;
        data: ImageData;

        // Constructors of Eog-3.0.JobLoad

        static ['new'](image: Image, data: ImageData): JobLoad;
    }

    module JobModel {
        // Constructor properties interface
    }

    class JobModel extends Job {
        // Own fields of Eog-3.0.JobModel

        store: ListStore;
        file_list: any[];

        // Constructors of Eog-3.0.JobModel

        static ['new'](file_list: Gio.File[]): JobModel;
    }

    module JobSave {
        // Constructor properties interface
    }

    class JobSave extends Job {
        // Own fields of Eog-3.0.JobSave

        images: any[];
        current_image: Image;
        current_position: number;

        // Constructors of Eog-3.0.JobSave

        static ['new'](images: Image[]): JobSave;
    }

    module JobSaveAs {
        // Constructor properties interface
    }

    class JobSaveAs extends JobSave {
        // Own fields of Eog-3.0.JobSaveAs

        converter: URIConverter;
        file: Gio.File;

        // Constructors of Eog-3.0.JobSaveAs

        static ['new'](images: Image[], converter: URIConverter, file: Gio.File): JobSaveAs;
    }

    module JobThumbnail {
        // Constructor properties interface
    }

    class JobThumbnail extends Job {
        // Own fields of Eog-3.0.JobThumbnail

        image: Image;
        thumbnail: GdkPixbuf.Pixbuf;

        // Constructors of Eog-3.0.JobThumbnail

        static ['new'](image: Image): JobThumbnail;
    }

    module JobTransform {
        // Constructor properties interface
    }

    class JobTransform extends Job {
        // Own fields of Eog-3.0.JobTransform

        images: any[];
        transform: Transform;

        // Constructors of Eog-3.0.JobTransform

        static ['new'](images: Image[], transform: Transform): JobTransform;
    }

    module ListStore {
        // Signal callback interfaces

        interface DrawThumbnail {
            (): void;
        }

        // Constructor properties interface
    }

    class ListStore extends Gtk.ListStore {
        // Constructors of Eog-3.0.ListStore

        static ['new'](): ListStore;

        static new_from_glist(list: Image[]): ListStore;

        // Owm methods of Eog-3.0.ListStore

        /**
         * Adds a list of #GFile's to `store`. The given list
         * must be %NULL-terminated.
         *
         * If any of the #GFile's in `file_list` is a directory, all the images
         * in that directory will be added to `store`. If the list of files contains
         * only one file and this is a regular file, then all the images in the same
         * directory will be added as well to `store`.
         * @param file_list A %NULL-terminated list of #GFile's.
         */
        add_files(file_list: Gio.File[]): void;
        /**
         * Adds an #EogImage to `store`. The thumbnail of the image is not
         * loaded and will only be loaded if the thumbnail is made visible.
         * @param image An #EogImage.
         */
        append_image(image: Image): void;
        /**
         * Gets the #EogImage in the position `pos` of `store`. If there is
         * no image at position `pos,` %NULL is returned.
         * @param pos the position of the required #EogImage.
         * @returns the #EogImage in position @pos or %NULL.
         */
        get_image_by_pos(pos: number): Image;
        /**
         * Gets the position of the #EogImage that should be loaded first.
         * If not set, it returns -1.
         * @returns the position of the image to be loaded first or -1.
         */
        get_initial_pos(): number;
        /**
         * Gets the position where `image` is stored in `store`. If `image`
         * is not stored in `store,` -1 is returned.
         * @param image An #EogImage.
         * @returns the position of @image in @store or -1 if not found.
         */
        get_pos_by_image(image: Image): number;
        /**
         * Gets the position of the image pointed by `iter`.
         * @param iter A #GtkTreeIter pointing to an image in @store.
         * @returns The position of the image pointed by @iter.
         */
        get_pos_by_iter(iter: Gtk.TreeIter): number;
        /**
         * Returns the number of images in the store.
         * @returns The number of images in @store.
         */
        length(): number;
        /**
         * Removes `image` from `store`.
         * @param image An #EogImage.
         */
        remove_image(image: Image): void;
        /**
         * Refreshes the thumbnail for the image pointed by `iter`.
         * @param iter A #GtkTreeIter pointing to an image in @store.
         */
        thumbnail_refresh(iter: Gtk.TreeIter): void;
        /**
         * Sets the thumbnail for the image pointed by `iter`.
         * @param iter A #GtkTreeIter pointing to an image in @store.
         */
        thumbnail_set(iter: Gtk.TreeIter): void;
        /**
         * Unsets the thumbnail for the image pointed by `iter,` changing
         * it to a "busy" icon.
         * @param iter A #GtkTreeIter pointing to an image in @store.
         */
        thumbnail_unset(iter: Gtk.TreeIter): void;
    }

    module RemotePresenter {
        // Constructor properties interface
    }

    class RemotePresenter extends Gtk.Window {
        // Own properties of Eog-3.0.RemotePresenter

        next_action: string;
        nextAction: string;
        prev_action: string;
        prevAction: string;
        thumbview: ThumbView;

        // Own fields of Eog-3.0.RemotePresenter

        window: Gtk.Window;

        // Constructors of Eog-3.0.RemotePresenter

        static ['new'](
            parent: Gtk.Window,
            thumbview: ThumbView,
            next_image_action: string,
            previous_image_action: string,
        ): RemotePresenter;

        // Owm methods of Eog-3.0.RemotePresenter

        update(image: Image): void;
    }

    module ScrollView {
        // Signal callback interfaces

        interface NextImage {
            (): void;
        }

        interface PreviousImage {
            (): void;
        }

        interface RotationChanged {
            (object: number): void;
        }

        interface ZoomChanged {
            (object: number): void;
        }

        // Constructor properties interface
    }

    class ScrollView extends Gtk.Overlay {
        // Own properties of Eog-3.0.ScrollView

        /**
         * If %TRUE the displayed image will be filtered in a second pass
         * while being zoomed in.
         */
        antialiasing_in: boolean;
        /**
         * If %TRUE the displayed image will be filtered in a second pass
         * while being zoomed in.
         */
        antialiasingIn: boolean;
        /**
         * If %TRUE the displayed image will be filtered in a second pass
         * while being zoomed out.
         */
        antialiasing_out: boolean;
        /**
         * If %TRUE the displayed image will be filtered in a second pass
         * while being zoomed out.
         */
        antialiasingOut: boolean;
        /**
         * This is the default background color used for painting the background
         * of the image view. If set to %NULL the color is determined by the
         * active GTK theme.
         */
        background_color: Gdk.RGBA;
        /**
         * This is the default background color used for painting the background
         * of the image view. If set to %NULL the color is determined by the
         * active GTK theme.
         */
        backgroundColor: Gdk.RGBA;
        /**
         * This is the currently display #EogImage.
         */
        image: Image;
        /**
         * If %TRUE the scrollwheel will zoom the view, otherwise it will be
         * used for scrolling a zoomed image.
         */
        scrollwheel_zoom: boolean;
        /**
         * If %TRUE the scrollwheel will zoom the view, otherwise it will be
         * used for scrolling a zoomed image.
         */
        scrollwheelZoom: boolean;
        /**
         * This is the color used to fill the transparent parts of an image
         * if #EogScrollView:transparency-style is set to %EOG_TRANSP_COLOR.
         */
        transparency_color: Gdk.RGBA;
        /**
         * This is the color used to fill the transparent parts of an image
         * if #EogScrollView:transparency-style is set to %EOG_TRANSP_COLOR.
         */
        transparencyColor: Gdk.RGBA;
        /**
         * Determines how to fill the shown image's transparent areas.
         */
        transparency_style: TransparencyStyle;
        /**
         * Determines how to fill the shown image's transparent areas.
         */
        transparencyStyle: TransparencyStyle;
        use_background_color: boolean;
        useBackgroundColor: boolean;
        zoom_mode: ZoomMode;
        zoomMode: ZoomMode;
        /**
         * The current zoom factor is multiplied with this value + 1.0 when
         * scrolling with the scrollwheel to determine the next zoom factor.
         */
        zoom_multiplier: number;
        /**
         * The current zoom factor is multiplied with this value + 1.0 when
         * scrolling with the scrollwheel to determine the next zoom factor.
         */
        zoomMultiplier: number;

        // Own fields of Eog-3.0.ScrollView

        base_instance: Gtk.Overlay;

        // Constructors of Eog-3.0.ScrollView

        static ['new'](): ScrollView;

        // Owm methods of Eog-3.0.ScrollView

        /**
         * Tells if `ev'`s originates from inside the image area. `view` must be
         * realized and have an image set for this to work.
         *
         * It only works with #GdkEvent<!-- -->s that supply coordinate data,
         * i.e. #GdkEventButton.
         * @param ev A #GdkEvent which must have window-relative coordinates.
         * @returns %TRUE if @ev originates from over the image, %FALSE otherwise.
         */
        event_is_over_image(ev: Gdk.Event): boolean;
        /**
         * Gets the currently displayed #EogImage.
         * @returns An #EogImage.
         */
        get_image(): Image;
        get_zoom(): number;
        get_zoom_is_max(): boolean;
        get_zoom_is_min(): boolean;
        get_zoom_mode(): ZoomMode;
        hide_cursor(): void;
        is_image_movable(): boolean;
        override_bg_color(color: Gdk.RGBA): void;
        set_antialiasing_in(state: boolean): void;
        set_antialiasing_out(state: boolean): void;
        set_background_color(color: Gdk.RGBA): void;
        set_image(image: Image): void;
        set_popup(menu: Gtk.Menu): void;
        set_scroll_wheel_zoom(scroll_wheel_zoom: boolean): void;
        set_transparency(style: TransparencyStyle): void;
        set_transparency_color(color: Gdk.RGBA): void;
        set_use_bg_color(use: boolean): void;
        set_zoom(zoom: number): void;
        set_zoom_mode(mode: ZoomMode): void;
        set_zoom_multiplier(multiplier: number): void;
        set_zoom_upscale(upscale: boolean): void;
        show_cursor(): void;
        zoom_in(smooth: boolean): void;
        zoom_out(smooth: boolean): void;
    }

    module Sidebar {
        // Signal callback interfaces

        interface PageAdded {
            (object: Gtk.Widget): void;
        }

        interface PageRemoved {
            (object: Gtk.Widget): void;
        }

        // Constructor properties interface
    }

    class Sidebar extends Gtk.Box {
        // Own properties of Eog-3.0.Sidebar

        current_page: Gtk.Widget;
        currentPage: Gtk.Widget;

        // Own fields of Eog-3.0.Sidebar

        base_instance: Gtk.Box;

        // Constructors of Eog-3.0.Sidebar

        static ['new'](): Sidebar;

        // Owm methods of Eog-3.0.Sidebar

        add_page(title: string, main_widget: Gtk.Widget): void;
        get_n_pages(): number;
        get_page_nr(): number;
        is_empty(): boolean;
        remove_page(main_widget: Gtk.Widget): void;
        set_page(main_widget: Gtk.Widget): void;
        set_page_nr(index: number): void;
    }

    module Statusbar {
        // Constructor properties interface
    }

    class Statusbar extends Gtk.Statusbar {
        // Constructors of Eog-3.0.Statusbar

        static ['new'](): Statusbar;

        // Owm methods of Eog-3.0.Statusbar

        set_image_number(num: number, tot: number): void;
        set_progress(progress: number): void;
    }

    module ThumbNav {
        // Constructor properties interface
    }

    class ThumbNav extends Gtk.Box {
        // Own properties of Eog-3.0.ThumbNav

        mode: number;
        show_buttons: boolean;
        showButtons: boolean;
        thumbview: ThumbView;

        // Own fields of Eog-3.0.ThumbNav

        base_instance: Gtk.Box;

        // Constructors of Eog-3.0.ThumbNav

        static ['new'](thumbview: Gtk.Widget, mode: ThumbNavMode, show_buttons: boolean): ThumbNav;

        // Owm methods of Eog-3.0.ThumbNav

        /**
         * Gets the navigation mode in `nav`.
         * @returns A value in #EogThumbNavMode.
         */
        get_mode(): ThumbNavMode;
        /**
         * Gets whether the navigation buttons are visible.
         * @returns %TRUE if the navigation buttons are visible, %FALSE otherwise.
         */
        get_show_buttons(): boolean;
        /**
         * Sets the navigation mode in `nav`. See #EogThumbNavMode for details.
         * @param mode One of #EogThumbNavMode.
         */
        set_mode(mode: ThumbNavMode): void;
        /**
         * Sets whether the navigation buttons to the left and right of the
         * widget should be visible.
         * @param show_buttons %TRUE to show the buttons, %FALSE to hide them.
         */
        set_show_buttons(show_buttons: boolean): void;
    }

    module ThumbView {
        // Constructor properties interface
    }

    class ThumbView extends Gtk.IconView {
        // Own fields of Eog-3.0.ThumbView

        icon_view: Gtk.IconView;

        // Constructors of Eog-3.0.ThumbView

        static ['new'](): ThumbView;

        // Owm methods of Eog-3.0.ThumbView

        /**
         * Returns the first selected image. Note that the returned #EogImage
         * is not ensured to be really the first selected image in `thumbview,` but
         * generally, it will be.
         * @returns A #EogImage.
         */
        get_first_selected_image(): Image;
        /**
         * Gets the number of images that are currently selected in `thumbview`.
         * @returns the number of selected images in @thumbview.
         */
        get_n_selected(): number;
        /**
         * Gets a list with the currently selected images. Note that a new reference is
         * hold for each image and the list must be freed with g_list_free().
         * @returns A newly allocated list of #EogImage's.
         */
        get_selected_images(): Image[];
        /**
         * Changes the current selection according to a single movement
         * described by #EogThumbViewSelectionChange. If there are no
         * thumbnails currently selected, one is selected according to the
         * natural selection according to the #EogThumbViewSelectionChange
         * used, p.g., when %EOG_THUMB_VIEW_SELECT_RIGHT is the selected change,
         * the first thumbnail will be selected.
         * @param change A #EogThumbViewSelectionChange, describing the desired selection change.
         */
        select_single(change: ThumbViewSelectionChange): void;
        /**
         * Changes the status of a image, marking it as currently selected.
         * If `deselect_other` is %TRUE, all other selected images will be
         * deselected.
         * @param image The image to be selected.
         * @param deselect_other Whether to deselect currently selected images.
         */
        set_current_image(image: Image, deselect_other: boolean): void;
        /**
         * Sets the height of each thumbnail in `thumbview`.
         * @param height The desired height.
         */
        set_item_height(height: number): void;
        /**
         * Sets the #EogListStore to be used with `thumbview`. If an initial image
         * was set during `store` creation, its thumbnail will be selected and visible.
         * @param store A #EogListStore.
         */
        set_model(store: ListStore): void;
        /**
         * Set the contextual menu to be used with the thumbnails in the
         * widget. This can be done only once.
         * @param menu A #GtkMenu.
         */
        set_thumbnail_popup(menu: Gtk.Menu): void;
    }

    module Transform {
        // Constructor properties interface
    }

    class Transform extends GObject.Object {
        // Constructors of Eog-3.0.Transform

        static flip_new(type: TransformType): Transform;

        static identity_new(): Transform;

        static ['new'](trans: TransformType): Transform;

        static rotate_new(degree: number): Transform;

        // Owm methods of Eog-3.0.Transform

        /**
         * Applies the transformation in `trans` to `pixbuf,` setting its progress in `job`.
         * @param pixbuf a #GdkPixbuf
         * @param job a #EogJob
         * @returns A new #GdkPixbuf with the transformation applied.
         */
        apply(pixbuf: GdkPixbuf.Pixbuf, job: Job): GdkPixbuf.Pixbuf;
        compose(compose: Transform): Transform;
        get_affine(affine: cairo.Matrix): boolean;
        get_transform_type(): TransformType;
        is_identity(): boolean;
        /**
         * Creates the reverse transformation of `trans`
         * @returns a new transformation
         */
        reverse(): Transform;
    }

    module URIConverter {
        // Constructor properties interface
    }

    class URIConverter extends GObject.Object {
        // Own properties of Eog-3.0.URIConverter

        convert_spaces: boolean;
        convertSpaces: boolean;
        counter_n_digits: number;
        counterNDigits: number;
        counter_start: number;
        counterStart: number;
        n_images: number;
        nImages: number;
        space_character: number;
        spaceCharacter: number;

        // Constructors of Eog-3.0.URIConverter

        static ['new'](base_file: Gio.File, img_format: GdkPixbuf.PixbufFormat, format_string: string): URIConverter;

        // Owm methods of Eog-3.0.URIConverter

        static preview(
            format_str: string,
            img: Image,
            format: GdkPixbuf.PixbufFormat,
            counter: number,
            n_images: number,
            convert_spaces: boolean,
            space_char: number,
        ): string;

        // Owm methods of Eog-3.0.URIConverter

        check(img_list: Gio.File[]): boolean;
        ['do'](image: Image, file: Gio.File, format: GdkPixbuf.PixbufFormat): boolean;
        print_list(): void;
        requires_exif(): boolean;
    }

    module Window {
        // Signal callback interfaces

        interface Prepared {
            (): void;
        }

        // Constructor properties interface
    }

    class Window extends Gtk.ApplicationWindow {
        // Own properties of Eog-3.0.Window

        /**
         * Determines the position of the image gallery in the window
         * relative to the image.
         */
        gallery_position: WindowGalleryPos;
        /**
         * Determines the position of the image gallery in the window
         * relative to the image.
         */
        galleryPosition: WindowGalleryPos;
        /**
         * If %TRUE the gallery will be resizable by the user otherwise it will be
         * in single column/row mode.
         */
        gallery_resizable: boolean;
        /**
         * If %TRUE the gallery will be resizable by the user otherwise it will be
         * in single column/row mode.
         */
        galleryResizable: boolean;
        /**
         * A bitwise OR of #EogStartupFlags elements, indicating how the window
         * should behave upon creation.
         */
        startup_flags: StartupFlags;
        /**
         * A bitwise OR of #EogStartupFlags elements, indicating how the window
         * should behave upon creation.
         */
        startupFlags: StartupFlags;

        // Constructors of Eog-3.0.Window

        static ['new'](flags: StartupFlags): Window;

        // Owm methods of Eog-3.0.Window

        close(): void;
        get_gear_menu_section(id: string): Gio.Menu;
        /**
         * Gets the image currently displayed in `window` or %NULL if
         * no image is being displayed.
         * @returns an #EogImage.
         */
        get_image(): Image;
        /**
         * Gets the mode of `window`. See #EogWindowMode for details.
         * @returns An #EogWindowMode.
         */
        get_mode(): WindowMode;
        /**
         * Gets the remote presenter dialog. The widget will be built on the first call to this function.
         * @returns a #GtkWidget.
         */
        get_remote_presenter(): Gtk.Widget;
        /**
         * Gets the sidebar widget of `window`.
         * @returns the #EogSidebar.
         */
        get_sidebar(): Gtk.Widget;
        /**
         * Gets the statusbar in `window`.
         * @returns a #EogStatusbar.
         */
        get_statusbar(): Gtk.Widget;
        /**
         * Gets the #EogListStore that contains the images in the gallery
         * of `window`.
         * @returns an #EogListStore.
         */
        get_store(): ListStore;
        /**
         * Gets the thumbnails navigation pane in `window`.
         * @returns an #EogThumbNav.
         */
        get_thumb_nav(): Gtk.Widget;
        /**
         * Gets the thumbnails view in `window`.
         * @returns an #EogThumbView.
         */
        get_thumb_view(): Gtk.Widget;
        /**
         * Gets the #EogScrollView in the window.
         * @returns the #EogScrollView.
         */
        get_view(): Gtk.Widget;
        /**
         * Tells whether `window` is currently empty or not.
         * @returns %TRUE if @window has no images, %FALSE otherwise.
         */
        is_empty(): boolean;
        is_not_initializing(): boolean;
        /**
         * Opens a list of files, adding them to the gallery in `window`.
         * Files will be checked to be readable and later filtered according
         * with eog_list_store_add_files().
         * @param file_list A %NULL-terminated list of #GFile's.
         */
        open_file_list(file_list: Gio.File[]): void;
        reload_image(): void;
        /**
         * Changes the mode of `window` to normal, fullscreen, or slideshow.
         * See #EogWindowMode for details.
         * @param mode an #EogWindowMode value.
         */
        set_mode(mode: WindowMode): void;
        show_about_dialog(): void;
        show_preferences_dialog(): void;
    }

    class ApplicationActivatableInterface {}

    class ApplicationClass {}

    class ApplicationPrivate {}

    class ClipboardHandlerClass {}

    class ClipboardHandlerPrivate {}

    class DetailsDialogClass {}

    class DetailsDialogPrivate {}

    class FileChooserClass {}

    class FileChooserPrivate {}

    class ImageClass {}

    class ImagePrivate {}

    class ImageSaveInfoClass {}

    class JobClass {}

    class JobCopyClass {}

    class JobLoadClass {}

    class JobModelClass {}

    class JobSaveAsClass {}

    class JobSaveClass {}

    class JobThumbnailClass {}

    class JobTransformClass {}

    class ListStoreClass {}

    class ListStorePrivate {}

    class RemotePresenterClass {}

    class RemotePresenterPrivate {}

    class ScrollViewClass {}

    class ScrollViewPrivate {}

    class SidebarClass {}

    class SidebarPrivate {}

    class StatusbarClass {}

    class StatusbarPrivate {}

    class ThumbNavClass {}

    class ThumbNavPrivate {}

    class ThumbViewClass {}

    class ThumbViewPrivate {}

    class TransformClass {}

    class TransformPrivate {}

    class UCInfo {
        // Own fields of Eog-3.0.UCInfo

        description: string;
        rep: string;
        req_exif: boolean;

        // Constructors of Eog-3.0.UCInfo

        constructor(
            properties?: Partial<{
                description: string;
                rep: string;
                req_exif: boolean;
            }>,
        );
    }

    class URIConverterClass {}

    class URIConverterPrivate {}

    class WindowActivatableInterface {}

    class WindowClass {
        // Constructors of Eog-3.0.WindowClass

        constructor(
            properties?: Partial<{
                parent_class: unknown;
            }>,
        );
    }

    class WindowPrivate {}

    interface ApplicationActivatable {
        // Own properties of Eog-3.0.ApplicationActivatable

        /**
         * This is the #EogApplication this #EogApplicationActivatable instance
         * should be attached to.
         */
        app: Application;

        // Owm methods of Eog-3.0.ApplicationActivatable

        activate(): void;
        deactivate(): void;

        // Own virtual methods of Eog-3.0.ApplicationActivatable

        vfunc_activate(): void;
        vfunc_deactivate(): void;
    }

    interface WindowActivatable {
        // Own properties of Eog-3.0.WindowActivatable

        /**
         * This is the #EogWindow this #EogWindowActivatable instance
         * should be attached to.
         */
        window: Window;

        // Owm methods of Eog-3.0.WindowActivatable

        activate(): void;
        deactivate(): void;

        // Own virtual methods of Eog-3.0.WindowActivatable

        vfunc_activate(): void;
        vfunc_deactivate(): void;
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

export default Eog;
// END
