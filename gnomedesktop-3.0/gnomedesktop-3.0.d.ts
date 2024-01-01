
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gnomedesktop-3.0-ambient.d.ts';
import './gnomedesktop-3.0-import.d.ts';
/**
 * GnomeDesktop-3.0
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
import type GDesktopEnums from '@girs/gdesktopenums-3.0';

export namespace GnomeDesktop {

enum DesktopThumbnailSize {
    NORMAL,
    LARGE,
    XLARGE,
    XXLARGE,
}
enum RRDpmsMode {
    ON,
    STANDBY,
    SUSPEND,
    OFF,
    UNKNOWN,
}
enum RRDpmsModeType {
    ON,
    STANDBY,
    SUSPEND,
    OFF,
    UNKNOWN,
}
enum RRError {
    UNKNOWN,
    NO_RANDR_EXTENSION,
    RANDR_ERROR,
    BOUNDS_ERROR,
    CRTC_ASSIGNMENT,
    NO_MATCHING_CONFIG,
    NO_DPMS_EXTENSION,
}
enum RRRotation {
    ROTATION_NEXT,
    ROTATION_0,
    ROTATION_90,
    ROTATION_180,
    ROTATION_270,
    REFLECT_X,
    REFLECT_Y,
}
const DESKTOP_PLATFORM_VERSION: number
const RR_CONNECTOR_TYPE_PANEL: string
/**
 * Returns whether the thumbnail has the correct uri and mtime embedded in the
 * png options. This function is threadsafe and does no blocking I/O.
 * @param pixbuf an loaded thumbnail #GdkPixbuf
 * @param uri a uri
 * @param mtime the mtime
 * @returns TRUE if the thumbnail has the right @uri and @mtime
 */
function desktop_thumbnail_is_valid(pixbuf: GdkPixbuf.Pixbuf, uri: string, mtime: number): boolean
/**
 * Returns the filename that a thumbnail of size `size` for `uri` would have.
 * This function is threadsafe and does no blocking I/O.
 * @param uri an uri
 * @param size a thumbnail size
 * @returns an absolute filename
 */
function desktop_thumbnail_path_for_uri(uri: string, size: DesktopThumbnailSize): string | null
/**
 * Gets all locales.
 * @returns    a newly allocated %NULL-terminated string array containing the   all locales. Free with g_strfreev().
 */
function get_all_locales(): string[]
/**
 * Gets the country name for `code`. If `translation` is provided the
 * returned string is translated accordingly.
 * @param code an ISO 3166 code string
 * @param translation a locale string
 * @returns the country name. Caller takes ownership.
 */
function get_country_from_code(code: string, translation: string | null): string | null
/**
 * Gets the country description for `locale`. If `translation` is
 * provided the returned string is translated accordingly.
 * @param locale a locale string
 * @param translation a locale string
 * @returns the country description. Caller takes ownership.
 */
function get_country_from_locale(locale: string, translation: string | null): string | null
/**
 * Asynchronously fetches a list of of default input sources based on locale and system
 * configuration. This is for when a user has no input sources configured
 * in GSettings.
 * @param cancellable a #GCancellable
 * @param callback a #GAsyncReadyCallback
 */
function get_default_input_sources<Z = unknown>(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Z> | null): void
/**
 * Returns a whether or not a list of default input sources based on locale and system
 * configuration could be retrieved. This is for when a user has no input sources configured
 * in GSettings.
 * @param result 
 */
function get_default_input_sources_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* ids */ string[], /* types */ string[], /* options */ string[] ]
/**
 * Gets the default input source's type and identifier for a given
 * locale.
 * @param locale a locale string
 * @returns %TRUE if a input source exists or %FALSE otherwise.
 */
function get_input_source_from_locale(locale: string): [ /* returnType */ boolean, /* type */ string, /* id */ string ]
/**
 * Gets the language name for `code`. If `translation` is provided the
 * returned string is translated accordingly.
 * @param code an ISO 639 code string
 * @param translation a locale string
 * @returns the language name. Caller takes ownership.
 */
function get_language_from_code(code: string, translation: string | null): string | null
/**
 * Gets the language description for `locale`. If `translation` is
 * provided the returned string is translated accordingly.
 * @param locale a locale string
 * @param translation a locale string
 * @returns the language description. Caller takes ownership.
 */
function get_language_from_locale(locale: string, translation: string | null): string | null
/**
 * Returns an integer with the major version of GNOME. Useful for
 * dynamic languages like Javascript or Python (static languages like
 * C should use %GNOME_DESKTOP_PLATFORM_VERSION). If this
 * function doesn't exist, it can be presumed that the GNOME platform
 * version is 42 or previous.
 * @returns an integer with the major version of GNOME.
 */
function get_platform_version(): number
/**
 * Gets a translation of the raw `modifier` string. If `translation`
 * is provided the returned string is translated accordingly.
 * @param modifier the modifier part of a locale name
 * @param translation a locale string
 * @returns the translated modifier string. Caller takes ownership.
 */
function get_translated_modifier(modifier: string, translation: string | null): string | null
/**
 * Returns whether or not the input source has the ability to enter latin characters.
 * @param type an input source type (e.g., "xkb" or "ibus")
 * @param id an input source id (e.g., "us+dvorak" or "anthy")
 * @returns %TRUE if it can't enter latin characters
 */
function input_source_is_non_latin(type: string, id: string): boolean
/**
 * Returns %TRUE if there are translations for language `code`.
 * @param code an ISO 639 code string
 * @returns %TRUE if there are translations for language @code.
 */
function language_has_translations(code: string): boolean
/**
 * Gets the normalized locale string in the form
 * [language[_country][.codeset][`modifier]`] for `name`.
 * @param locale a locale string
 * @returns normalized locale string. Caller takes ownership.
 */
function normalize_locale(locale: string): string | null
/**
 * Extracts the various components of a locale string in XPG format.
 * ([language[_country][.codeset][`modifier]`]). See
 * http://en.wikipedia.org/wiki/Locale.
 * @param locale a locale string
 * @returns %TRUE if parsing was successful.
 */
function parse_locale(locale: string): [ /* returnType */ boolean, /* language_codep */ string, /* country_codep */ string | null, /* codesetp */ string | null, /* modifierp */ string | null ]
/**
 * Returns the #GQuark that will be used for #GError values returned by the
 * GnomeRR API.
 * @returns a #GQuark used to identify errors coming from the GnomeRR API.
 */
function rr_error_quark(): GLib.Quark
/**
 * If the current process is running inside a user systemd instance, then move
 * the launched PID into a transient scope. The given `name` will be used to
 * create a unit name. It should be the application ID or the executable in all
 * other cases. If a desktop-id is passed then the .desktop suffix will be
 * stripped.
 * 
 * It is advisable to use this function every time where the started application
 * can be considered reasonably independent of the launching application. Placing
 * it in a scope creates proper separation between the programs rather than being
 * considered a single entity by systemd.
 * 
 * It is always safe to call this function. Note that a successful return code
 * does not imply that a unit has been created. It solely means that no error
 * condition was hit sending the request.
 * 
 * If `connection` is %NULL then g_dbus_get() will be called internally.
 * 
 * Note that most callers will not need to handle errors. As such, it is normal
 * to pass a %NULL `callback`.
 * @param name Name for the application
 * @param pid The PID of the application
 * @param description A description to use for the unit, or %NULL
 * @param connection An #GDBusConnection to the session bus, or %NULL
 * @param cancellable #GCancellable to use
 * @param callback Callback to call when the operation is done
 */
function start_systemd_scope<Z = unknown>(name: string, pid: number, description: string | null, connection: Gio.DBusConnection | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Z> | null): void
/**
 * Finish an asynchronous operation to create a transient scope that was
 * started with gnome_start_systemd_scope().
 * 
 * Note that a successful return code does not imply that a unit has been
 * created. It solely means that no error condition was hit sending the request.
 * @param res A #GAsyncResult
 * @returns %FALSE on error, %TRUE otherwise
 */
function start_systemd_scope_finish(res: Gio.AsyncResult): boolean
interface IdleMonitorWatchFunc {
    (monitor: IdleMonitor, id: number): void
}
module BG {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    interface ChangedSignalCallback {
        ($obj: BG): void
    }

    /**
     * Signal callback interface for `transitioned`
     */
    interface TransitionedSignalCallback {
        ($obj: BG): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface BG {

    // Owm methods of GnomeDesktop-3.0.GnomeDesktop.BG

    changes_with_time(): boolean
    /**
     * Creates a thumbnail for a certain frame, where 'frame' is somewhat
     * vaguely defined as 'suitable point to show while single-stepping
     * through the slideshow'.
     * @param factory 
     * @param screen 
     * @param dest_width 
     * @param dest_height 
     * @param frame_num 
     * @returns the newly created thumbnail or or NULL if frame_num is out of bounds.
     */
    create_frame_thumbnail(factory: DesktopThumbnailFactory, screen: Gdk.Screen, dest_width: number, dest_height: number, frame_num: number): GdkPixbuf.Pixbuf
    /**
     * Create a surface that can be set as background for `window`.
     * @param window 
     * @param width 
     * @param height 
     * @returns %NULL on error (e.g. out of X connections)
     */
    create_surface(window: Gdk.Window, width: number, height: number): cairo.Surface
    create_thumbnail(factory: DesktopThumbnailFactory, screen: Gdk.Screen, dest_width: number, dest_height: number): GdkPixbuf.Pixbuf
    draw(dest: GdkPixbuf.Pixbuf): void
    get_filename(): string
    get_image_size(factory: DesktopThumbnailFactory, best_width: number, best_height: number, width: number, height: number): boolean
    get_placement(): GDesktopEnums.BackgroundStyle
    get_rgba(type: GDesktopEnums.BackgroundShading, primary: Gdk.RGBA, secondary: Gdk.RGBA): void
    has_multiple_sizes(): boolean
    is_dark(dest_width: number, dest_height: number): boolean
    load_from_preferences(settings: Gio.Settings): void
    save_to_preferences(settings: Gio.Settings): void
    set_filename(filename: string): void
    set_placement(placement: GDesktopEnums.BackgroundStyle): void
    set_rgba(type: GDesktopEnums.BackgroundShading, primary: Gdk.RGBA, secondary: Gdk.RGBA): void

    // Own signals of GnomeDesktop-3.0.GnomeDesktop.BG

    connect(sigName: "changed", callback: BG.ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: BG.ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "transitioned", callback: BG.TransitionedSignalCallback): number
    connect_after(sigName: "transitioned", callback: BG.TransitionedSignalCallback): number
    emit(sigName: "transitioned", ...args: any[]): void

    // Class property signals of GnomeDesktop-3.0.GnomeDesktop.BG

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BG extends GObject.Object {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.BG

    static name: string
    static $gtype: GObject.GType<BG>

    // Constructors of GnomeDesktop-3.0.GnomeDesktop.BG

    constructor(config?: BG.ConstructorProperties) 
    constructor() 
    static new(): BG
    _init(config?: BG.ConstructorProperties): void
}

module BGCrossfade {

    // Signal callback interfaces

    /**
     * Signal callback interface for `finished`
     */
    interface FinishedSignalCallback {
        ($obj: BGCrossfade, window: GObject.Object): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GnomeDesktop-3.0.GnomeDesktop.BGCrossfade

        /**
         * When a crossfade is running, this is height of the fading
         * surface.
         */
        height?: number | null
        /**
         * When a crossfade is running, this is width of the fading
         * surface.
         */
        width?: number | null
    }

}

interface BGCrossfade {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.BGCrossfade

    /**
     * When a crossfade is running, this is height of the fading
     * surface.
     */
    readonly height: number
    /**
     * When a crossfade is running, this is width of the fading
     * surface.
     */
    readonly width: number

    // Own fields of GnomeDesktop-3.0.GnomeDesktop.BGCrossfade

    parent_object: GObject.Object
    priv: BGCrossfadePrivate

    // Owm methods of GnomeDesktop-3.0.GnomeDesktop.BGCrossfade

    /**
     * This function reveals whether or not `fade` is currently
     * running on a window.  See gnome_bg_crossfade_start() for
     * information on how to initiate a crossfade.
     * @returns %TRUE if fading, or %FALSE if not fading
     */
    is_started(): boolean
    /**
     * Before initiating a crossfade with gnome_bg_crossfade_start()
     * a start and end surface have to be set.  This function sets
     * the surface shown at the end of the crossfade effect.
     * @param surface The cairo surface to fade to
     * @returns %TRUE if successful, or %FALSE if the surface could not be copied.
     */
    set_end_surface(surface: cairo.Surface): boolean
    /**
     * Before initiating a crossfade with gnome_bg_crossfade_start()
     * a start and end surface have to be set.  This function sets
     * the surface shown at the beginning of the crossfade effect.
     * @param surface The cairo surface to fade from
     * @returns %TRUE if successful, or %FALSE if the surface could not be copied.
     */
    set_start_surface(surface: cairo.Surface): boolean
    /**
     * This function initiates a quick crossfade between two surfaces on
     * the background of `window`.  Before initiating the crossfade both
     * gnome_bg_crossfade_start() and gnome_bg_crossfade_end() need to
     * be called. If animations are disabled, the crossfade is skipped,
     * and the window background is set immediately to the end surface.
     * @param window The #GdkWindow to draw crossfade on
     */
    start(window: Gdk.Window): void
    /**
     * This function stops any in progress crossfades that may be
     * happening.  It's harmless to call this function if `fade` is
     * already stopped.
     */
    stop(): void

    // Own virtual methods of GnomeDesktop-3.0.GnomeDesktop.BGCrossfade

    vfunc_finished(window: Gdk.Window): void

    // Own signals of GnomeDesktop-3.0.GnomeDesktop.BGCrossfade

    connect(sigName: "finished", callback: BGCrossfade.FinishedSignalCallback): number
    connect_after(sigName: "finished", callback: BGCrossfade.FinishedSignalCallback): number
    emit(sigName: "finished", window: GObject.Object, ...args: any[]): void

    // Class property signals of GnomeDesktop-3.0.GnomeDesktop.BGCrossfade

    connect(sigName: "notify::height", callback: (($obj: BGCrossfade, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: BGCrossfade, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: BGCrossfade, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: BGCrossfade, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BGCrossfade extends GObject.Object {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.BGCrossfade

    static name: string
    static $gtype: GObject.GType<BGCrossfade>

    // Constructors of GnomeDesktop-3.0.GnomeDesktop.BGCrossfade

    constructor(config?: BGCrossfade.ConstructorProperties) 
    /**
     * Creates a new object to manage crossfading a
     * window background between two #cairo_surface_ts.
     * @constructor 
     * @param width The width of the crossfading window
     * @param height The height of the crossfading window
     * @returns the new #GnomeBGCrossfade
     */
    constructor(width: number, height: number) 
    /**
     * Creates a new object to manage crossfading a
     * window background between two #cairo_surface_ts.
     * @constructor 
     * @param width The width of the crossfading window
     * @param height The height of the crossfading window
     * @returns the new #GnomeBGCrossfade
     */
    static new(width: number, height: number): BGCrossfade
    _init(config?: BGCrossfade.ConstructorProperties): void
}

module BGSlideShow {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GnomeDesktop-3.0.GnomeDesktop.BGSlideShow

        file?: Gio.File | null
    }

}

interface BGSlideShow {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.BGSlideShow

    readonly file: Gio.File
    readonly has_multiple_sizes: boolean
    readonly hasMultipleSizes: boolean
    readonly start_time: number
    readonly startTime: number
    readonly total_duration: number
    readonly totalDuration: number

    // Own fields of GnomeDesktop-3.0.GnomeDesktop.BGSlideShow

    parent_object: GObject.Object
    priv: BGSlideShowPrivate

    // Owm methods of GnomeDesktop-3.0.GnomeDesktop.BGSlideShow

    /**
     * Returns the current slides progress.
     * @param width monitor width
     * @param height monitor height
     */
    get_current_slide(width: number, height: number): [ /* progress */ number, /* duration */ number, /* is_fixed */ boolean, /* file1 */ string, /* file2 */ string ]
    /**
     * gets whether or not the slide show has multiple sizes for different monitors
     * @returns %TRUE if multiple sizes
     */
    get_has_multiple_sizes(): boolean
    /**
     * Returns number of slides in slide show
     */
    get_num_slides(): number
    /**
     * Retrieves slide by frame number
     * @param frame_number frame number
     * @param width monitor width
     * @param height monitor height
     * @returns %TRUE if successful
     */
    get_slide(frame_number: number, width: number, height: number): [ /* returnType */ boolean, /* progress */ number, /* duration */ number, /* is_fixed */ boolean, /* file1 */ string, /* file2 */ string ]
    /**
     * gets the start time of the slide show
     * @returns a timestamp
     */
    get_start_time(): number
    /**
     * gets the total duration of the slide show
     * @returns a timestamp
     */
    get_total_duration(): number
    /**
     * Tries to load the slide show.
     * @returns %TRUE if successful
     */
    load(): boolean
    /**
     * Tries to load the slide show asynchronously.
     * @param cancellable a #GCancellable
     * @param callback the callback
     */
    load_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Class property signals of GnomeDesktop-3.0.GnomeDesktop.BGSlideShow

    connect(sigName: "notify::file", callback: (($obj: BGSlideShow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file", callback: (($obj: BGSlideShow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: "notify::has-multiple-sizes", callback: (($obj: BGSlideShow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-multiple-sizes", callback: (($obj: BGSlideShow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-multiple-sizes", ...args: any[]): void
    connect(sigName: "notify::start-time", callback: (($obj: BGSlideShow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time", callback: (($obj: BGSlideShow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::start-time", ...args: any[]): void
    connect(sigName: "notify::total-duration", callback: (($obj: BGSlideShow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::total-duration", callback: (($obj: BGSlideShow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::total-duration", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class BGSlideShow extends GObject.Object {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.BGSlideShow

    static name: string
    static $gtype: GObject.GType<BGSlideShow>

    // Constructors of GnomeDesktop-3.0.GnomeDesktop.BGSlideShow

    constructor(config?: BGSlideShow.ConstructorProperties) 
    /**
     * Creates a new object to manage a slide show.
     * window background between two #cairo_surface_ts.
     * @constructor 
     * @param filename The filename of the slide show
     * @returns the new #GnomeBGSlideShow
     */
    constructor(filename: string) 
    /**
     * Creates a new object to manage a slide show.
     * window background between two #cairo_surface_ts.
     * @constructor 
     * @param filename The filename of the slide show
     * @returns the new #GnomeBGSlideShow
     */
    static new(filename: string): BGSlideShow
    _init(config?: BGSlideShow.ConstructorProperties): void
}

module DesktopThumbnailFactory {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface DesktopThumbnailFactory {

    // Own fields of GnomeDesktop-3.0.GnomeDesktop.DesktopThumbnailFactory

    parent: GObject.Object
    priv: DesktopThumbnailFactoryPrivate

    // Owm methods of GnomeDesktop-3.0.GnomeDesktop.DesktopThumbnailFactory

    /**
     * Returns TRUE if this GnomeDesktopThumbnailFactory can (at least try) to thumbnail
     * this file. Thumbnails or files with failed thumbnails won't be thumbnailed.
     * 
     * Usage of this function is threadsafe and does blocking I/O.
     * @param uri the uri of a file
     * @param mime_type the mime type of the file
     * @param mtime the mtime of the file
     * @returns TRUE if the file can be thumbnailed.
     */
    can_thumbnail(uri: string, mime_type: string, mtime: number): boolean
    /**
     * Creates a failed thumbnail for the file so that we don't try
     * to re-thumbnail the file later.
     * 
     * Usage of this function is threadsafe and does blocking I/O.
     * @param uri the uri of a file
     * @param mtime the modification time of the file
     * @param cancellable a GCancellable object, or NULL
     * @returns TRUE if everything went fine; FALSE if there was an error.
     */
    create_failed_thumbnail(uri: string, mtime: number, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronous version of gnome_desktop_thumbnail_factory_create_failed_thumbnail()
     * 
     * Since 43.0
     * @param uri the uri of a file
     * @param original_mtime the modification time of the original file
     * @param cancellable a Cancellable object
     * @param callback a function that will be called when the task has ended
     */
    create_failed_thumbnail_async(uri: string, original_mtime: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of create_failed_thumbnail_async

    /**
     * Promisified version of {@link create_failed_thumbnail_async}
     * 
     * Asynchronous version of gnome_desktop_thumbnail_factory_create_failed_thumbnail()
     * 
     * Since 43.0
     * @param uri the uri of a file
     * @param original_mtime the modification time of the original file
     * @param cancellable a Cancellable object
     * @returns A Promise of: TRUE if the operation was correct; FALSE if there was an error Since 43.0
     */
    create_failed_thumbnail_async(uri: string, original_mtime: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    create_failed_thumbnail_finish(result: Gio.AsyncResult): boolean
    /**
     * Tries to generate a thumbnail for the specified file. If it succeeds
     * it returns a pixbuf that can be used as a thumbnail.
     * 
     * Usage of this function is threadsafe and does blocking I/O.
     * @param uri the uri of a file
     * @param mime_type the mime type of the file
     * @param cancellable a #GCancellable object or NULL
     * @returns thumbnail pixbuf if thumbnailing succeeded, %NULL otherwise and error will be set
     */
    generate_thumbnail(uri: string, mime_type: string, cancellable: Gio.Cancellable | null): GdkPixbuf.Pixbuf
    /**
     * Asynchronous version of gnome_desktop_thumbnail_factory_generate_thumbnail()
     * 
     * Since 43.0
     * @param uri the URI of a file
     * @param mime_type the MIME type of the file
     * @param cancellable a Cancellable object
     * @param callback a function that will be called when the task has ended
     */
    generate_thumbnail_async(uri: string, mime_type: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of generate_thumbnail_async

    /**
     * Promisified version of {@link generate_thumbnail_async}
     * 
     * Asynchronous version of gnome_desktop_thumbnail_factory_generate_thumbnail()
     * 
     * Since 43.0
     * @param uri the URI of a file
     * @param mime_type the MIME type of the file
     * @param cancellable a Cancellable object
     * @returns A Promise of: thumbnail pixbuf if thumbnailing succeeded, %NULL otherwise. Since 43.0
     */
    generate_thumbnail_async(uri: string, mime_type: string, cancellable: Gio.Cancellable | null): globalThis.Promise<GdkPixbuf.Pixbuf>
    generate_thumbnail_finish(result: Gio.AsyncResult): GdkPixbuf.Pixbuf
    /**
     * Tries to locate an failed thumbnail for the file specified. Writing
     * and looking for failed thumbnails is important to avoid to try to
     * thumbnail e.g. broken images several times.
     * 
     * Usage of this function is threadsafe and does blocking I/O.
     * @param uri the uri of a file
     * @param mtime the mtime of the file
     * @returns TRUE if there is a failed thumbnail for the file.
     */
    has_valid_failed_thumbnail(uri: string, mtime: number): boolean
    /**
     * Tries to locate an existing thumbnail for the file specified.
     * 
     * Usage of this function is threadsafe and does blocking I/O.
     * @param uri the uri of a file
     * @param mtime the mtime of the file
     * @returns The absolute path of the thumbnail, or %NULL if none exist.
     */
    lookup(uri: string, mtime: number): string | null
    /**
     * Saves `thumbnail` at the right place. If the save fails a
     * failed thumbnail is written.
     * 
     * Usage of this function is threadsafe and does blocking I/O.
     * @param thumbnail the thumbnail as a pixbuf
     * @param uri the uri of a file
     * @param original_mtime the modification time of the original file
     * @param cancellable a GCancellable object, or NULL
     * @returns TRUE if everything went fine; FALSE if there was an error.
     */
    save_thumbnail(thumbnail: GdkPixbuf.Pixbuf, uri: string, original_mtime: number, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronous version of gnome_desktop_thumbnail_factory_save_thumbnail()
     * 
     * Since 43.0
     * @param thumbnail the thumbnail as a pixbuf
     * @param uri the uri of a file
     * @param original_mtime the modification time of the original file
     * @param cancellable a Cancellable object
     * @param callback a function that will be called when the task has ended
     */
    save_thumbnail_async(thumbnail: GdkPixbuf.Pixbuf, uri: string, original_mtime: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of save_thumbnail_async

    /**
     * Promisified version of {@link save_thumbnail_async}
     * 
     * Asynchronous version of gnome_desktop_thumbnail_factory_save_thumbnail()
     * 
     * Since 43.0
     * @param thumbnail the thumbnail as a pixbuf
     * @param uri the uri of a file
     * @param original_mtime the modification time of the original file
     * @param cancellable a Cancellable object
     * @returns A Promise of: TRUE if the operation was correct; FALSE if there was an error Since 43.0
     */
    save_thumbnail_async(thumbnail: GdkPixbuf.Pixbuf, uri: string, original_mtime: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    save_thumbnail_finish(result: Gio.AsyncResult): boolean

    // Class property signals of GnomeDesktop-3.0.GnomeDesktop.DesktopThumbnailFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DesktopThumbnailFactory extends GObject.Object {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.DesktopThumbnailFactory

    static name: string
    static $gtype: GObject.GType<DesktopThumbnailFactory>

    // Constructors of GnomeDesktop-3.0.GnomeDesktop.DesktopThumbnailFactory

    constructor(config?: DesktopThumbnailFactory.ConstructorProperties) 
    /**
     * Creates a new #GnomeDesktopThumbnailFactory.
     * 
     * This function must be called on the main thread and is non-blocking.
     * @constructor 
     * @param size The thumbnail size to use
     * @returns a new #GnomeDesktopThumbnailFactory
     */
    constructor(size: DesktopThumbnailSize) 
    /**
     * Creates a new #GnomeDesktopThumbnailFactory.
     * 
     * This function must be called on the main thread and is non-blocking.
     * @constructor 
     * @param size The thumbnail size to use
     * @returns a new #GnomeDesktopThumbnailFactory
     */
    static new(size: DesktopThumbnailSize): DesktopThumbnailFactory
    _init(config?: DesktopThumbnailFactory.ConstructorProperties): void
}

module IdleMonitor {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface IdleMonitor extends Gio.Initable {

    // Own fields of GnomeDesktop-3.0.GnomeDesktop.IdleMonitor

    parent: GObject.Object
    priv: IdleMonitorPrivate

    // Owm methods of GnomeDesktop-3.0.GnomeDesktop.IdleMonitor

    add_idle_watch(interval_msec: number, callback: IdleMonitorWatchFunc | null): number
    add_user_active_watch(callback: IdleMonitorWatchFunc | null): number
    get_idletime(): number
    /**
     * Removes an idle time watcher, previously added by
     * gnome_idle_monitor_add_idle_watch() or
     * gnome_idle_monitor_add_user_active_watch().
     * @param id A watch ID
     */
    remove_watch(id: number): void

    // Class property signals of GnomeDesktop-3.0.GnomeDesktop.IdleMonitor

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class IdleMonitor extends GObject.Object {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.IdleMonitor

    static name: string
    static $gtype: GObject.GType<IdleMonitor>

    // Constructors of GnomeDesktop-3.0.GnomeDesktop.IdleMonitor

    constructor(config?: IdleMonitor.ConstructorProperties) 
    constructor() 
    static new(): IdleMonitor
    _init(config?: IdleMonitor.ConstructorProperties): void
}

module PnpIds {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface PnpIds {

    // Own fields of GnomeDesktop-3.0.GnomeDesktop.PnpIds

    parent: GObject.Object
    priv: PnpIdsPrivate

    // Owm methods of GnomeDesktop-3.0.GnomeDesktop.PnpIds

    /**
     * Find the full manufacturer name for the given PNP ID.
     * @param pnp_id the PNP ID to look for
     * @returns a new string representing the manufacturer name, or %NULL when not found.
     */
    get_pnp_id(pnp_id: string): string | null

    // Class property signals of GnomeDesktop-3.0.GnomeDesktop.PnpIds

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PnpIds extends GObject.Object {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.PnpIds

    static name: string
    static $gtype: GObject.GType<PnpIds>

    // Constructors of GnomeDesktop-3.0.GnomeDesktop.PnpIds

    constructor(config?: PnpIds.ConstructorProperties) 
    /**
     * Returns a reference to a #GnomePnpIds object, or creates
     * a new one if none have been created.
     * @constructor 
     * @returns a #GnomePnpIds object.
     */
    constructor() 
    /**
     * Returns a reference to a #GnomePnpIds object, or creates
     * a new one if none have been created.
     * @constructor 
     * @returns a #GnomePnpIds object.
     */
    static new(): PnpIds
    _init(config?: PnpIds.ConstructorProperties): void
}

module RRConfig {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GnomeDesktop-3.0.GnomeDesktop.RRConfig

        screen?: RRScreen | null
    }

}

interface RRConfig {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.RRConfig

    readonly screen: RRScreen

    // Own fields of GnomeDesktop-3.0.GnomeDesktop.RRConfig

    parent: GObject.Object

    // Owm methods of GnomeDesktop-3.0.GnomeDesktop.RRConfig

    applicable(screen: RRScreen): boolean
    apply(screen: RRScreen): boolean
    apply_persistent(screen: RRScreen): boolean
    ensure_primary(): boolean
    equal(config2: RRConfig): boolean
    get_clone(): boolean
    get_outputs(): RROutputInfo[]
    load_current(): boolean
    match(config2: RRConfig): boolean
    sanitize(): void
    set_clone(clone: boolean): void

    // Class property signals of GnomeDesktop-3.0.GnomeDesktop.RRConfig

    connect(sigName: "notify::screen", callback: (($obj: RRConfig, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: RRConfig, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RRConfig extends GObject.Object {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.RRConfig

    static name: string
    static $gtype: GObject.GType<RRConfig>

    // Constructors of GnomeDesktop-3.0.GnomeDesktop.RRConfig

    constructor(config?: RRConfig.ConstructorProperties) 
    static new_current(screen: RRScreen): RRConfig
    _init(config?: RRConfig.ConstructorProperties): void
}

module RROutputInfo {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface RROutputInfo {

    // Own fields of GnomeDesktop-3.0.GnomeDesktop.RROutputInfo

    parent: GObject.Object

    // Owm methods of GnomeDesktop-3.0.GnomeDesktop.RROutputInfo

    get_aspect_ratio(): number
    get_display_name(): string | null
    /**
     * Get the geometry for the monitor connected to the specified output.
     * If the monitor is a tiled monitor, it returns the geometry for the complete monitor.
     */
    get_geometry(): [ /* x */ number, /* y */ number, /* width */ number, /* height */ number ]
    get_name(): string | null
    get_preferred_height(): number
    get_preferred_width(): number
    get_primary(): boolean
    get_product(): string
    get_refresh_rate(): number
    get_rotation(): RRRotation
    get_serial(): string
    get_underscanning(): boolean
    get_vendor(): string
    is_active(): boolean
    is_connected(): boolean
    is_primary_tile(): boolean
    set_active(active: boolean): void
    /**
     * Set the geometry for the monitor connected to the specified output.
     * If the monitor is a tiled monitor, it sets the geometry for the complete monitor.
     * @param x x offset for monitor
     * @param y y offset for monitor
     * @param width monitor width
     * @param height monitor height
     */
    set_geometry(x: number, y: number, width: number, height: number): void
    set_primary(primary: boolean): void
    set_refresh_rate(rate: number): void
    set_rotation(rotation: RRRotation): void
    set_underscanning(underscanning: boolean): void
    supports_rotation(rotation: RRRotation): boolean

    // Class property signals of GnomeDesktop-3.0.GnomeDesktop.RROutputInfo

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RROutputInfo extends GObject.Object {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.RROutputInfo

    static name: string
    static $gtype: GObject.GType<RROutputInfo>

    // Constructors of GnomeDesktop-3.0.GnomeDesktop.RROutputInfo

    constructor(config?: RROutputInfo.ConstructorProperties) 
    _init(config?: RROutputInfo.ConstructorProperties): void
}

module RRScreen {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    interface ChangedSignalCallback {
        ($obj: RRScreen): void
    }

    /**
     * Signal callback interface for `output-connected`
     */
    interface OutputConnectedSignalCallback {
        ($obj: RRScreen, output: any | null): void
    }

    /**
     * Signal callback interface for `output-disconnected`
     */
    interface OutputDisconnectedSignalCallback {
        ($obj: RRScreen, output: any | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GnomeDesktop-3.0.GnomeDesktop.RRScreen

        dpms_mode?: RRDpmsModeType | null
        gdk_screen?: Gdk.Screen | null
        dpmsMode?: RRDpmsModeType | null
        gdkScreen?: Gdk.Screen | null
    }

}

interface RRScreen extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.RRScreen

    dpms_mode: RRDpmsModeType
    dpmsMode: RRDpmsModeType
    readonly gdk_screen: Gdk.Screen
    readonly gdkScreen: Gdk.Screen

    // Own fields of GnomeDesktop-3.0.GnomeDesktop.RRScreen

    parent: GObject.Object
    priv: RRScreenPrivate

    // Owm methods of GnomeDesktop-3.0.GnomeDesktop.RRScreen

    get_crtc_by_id(id: number): RRCrtc
    get_dpms_mode(): [ /* returnType */ boolean, /* mode */ RRDpmsMode ]
    get_output_by_id(id: number): RROutput
    get_output_by_name(name: string): RROutput
    /**
     * Get the ranges of the screen
     */
    get_ranges(): [ /* min_width */ number, /* max_width */ number, /* min_height */ number, /* max_height */ number ]
    /**
     * List available XRandR clone modes
     */
    list_clone_modes(): RRMode[]
    /**
     * List all CRTCs
     */
    list_crtcs(): RRCrtc[]
    /**
     * List available XRandR modes
     */
    list_modes(): RRMode[]
    /**
     * List all outputs
     */
    list_outputs(): RROutput[]
    /**
     * Refreshes the screen configuration, and calls the screen's callback if it
     * exists and if the screen's configuration changed.
     * @returns TRUE if the screen's configuration changed; otherwise, the function returns FALSE and a NULL error if the configuration didn't change, or FALSE and a non-NULL error if there was an error while refreshing the configuration.
     */
    refresh(): boolean
    /**
     * This method also disables the DPMS timeouts.
     * @param mode 
     */
    set_dpms_mode(mode: RRDpmsMode): boolean

    // Own virtual methods of GnomeDesktop-3.0.GnomeDesktop.RRScreen

    vfunc_changed(): void
    vfunc_output_connected(output: RROutput): void
    vfunc_output_disconnected(output: RROutput): void

    // Own signals of GnomeDesktop-3.0.GnomeDesktop.RRScreen

    connect(sigName: "changed", callback: RRScreen.ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: RRScreen.ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "output-connected", callback: RRScreen.OutputConnectedSignalCallback): number
    connect_after(sigName: "output-connected", callback: RRScreen.OutputConnectedSignalCallback): number
    emit(sigName: "output-connected", output: any | null, ...args: any[]): void
    connect(sigName: "output-disconnected", callback: RRScreen.OutputDisconnectedSignalCallback): number
    connect_after(sigName: "output-disconnected", callback: RRScreen.OutputDisconnectedSignalCallback): number
    emit(sigName: "output-disconnected", output: any | null, ...args: any[]): void

    // Class property signals of GnomeDesktop-3.0.GnomeDesktop.RRScreen

    connect(sigName: "notify::dpms-mode", callback: (($obj: RRScreen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dpms-mode", callback: (($obj: RRScreen, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dpms-mode", ...args: any[]): void
    connect(sigName: "notify::gdk-screen", callback: (($obj: RRScreen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gdk-screen", callback: (($obj: RRScreen, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gdk-screen", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RRScreen extends GObject.Object {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.RRScreen

    static name: string
    static $gtype: GObject.GType<RRScreen>

    // Constructors of GnomeDesktop-3.0.GnomeDesktop.RRScreen

    constructor(config?: RRScreen.ConstructorProperties) 
    /**
     * Creates a unique #GnomeRRScreen instance for the specified `screen`.
     * @constructor 
     * @param screen the #GdkScreen on which to operate
     * @returns a unique #GnomeRRScreen instance, specific to the @screen, or NULL if this could not be created, for instance if the driver does not support Xrandr 1.2.  Each #GdkScreen thus has a single instance of #GnomeRRScreen.
     */
    constructor(screen: Gdk.Screen) 
    /**
     * Creates a unique #GnomeRRScreen instance for the specified `screen`.
     * @constructor 
     * @param screen the #GdkScreen on which to operate
     * @returns a unique #GnomeRRScreen instance, specific to the @screen, or NULL if this could not be created, for instance if the driver does not support Xrandr 1.2.  Each #GdkScreen thus has a single instance of #GnomeRRScreen.
     */
    static new(screen: Gdk.Screen): RRScreen
    static new_finish(result: Gio.AsyncResult): RRScreen
    _init(config?: RRScreen.ConstructorProperties): void
    static new_async(screen: Gdk.Screen, callback: Gio.AsyncReadyCallback<RRScreen> | null): void
}

module WallClock {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GnomeDesktop-3.0.GnomeDesktop.WallClock

        /**
         * If %TRUE, the formatted clock will always have seconds precision and the
         * 'clock' property will always be updated every second, irrespective of
         * system configuration.
         */
        force_seconds?: boolean | null
        /**
         * If %TRUE, the formatted clock will never include a date or the
         * day of the week, irrespective of configuration.
         */
        time_only?: boolean | null
        /**
         * If %TRUE, the formatted clock will always have seconds precision and the
         * 'clock' property will always be updated every second, irrespective of
         * system configuration.
         */
        forceSeconds?: boolean | null
        /**
         * If %TRUE, the formatted clock will never include a date or the
         * day of the week, irrespective of configuration.
         */
        timeOnly?: boolean | null
    }

}

interface WallClock {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.WallClock

    /**
     * A formatted string representing the current clock display.
     */
    readonly clock: string | null
    /**
     * If %TRUE, the formatted clock will always have seconds precision and the
     * 'clock' property will always be updated every second, irrespective of
     * system configuration.
     */
    force_seconds: boolean
    /**
     * If %TRUE, the formatted clock will always have seconds precision and the
     * 'clock' property will always be updated every second, irrespective of
     * system configuration.
     */
    forceSeconds: boolean
    /**
     * If %TRUE, the formatted clock will never include a date or the
     * day of the week, irrespective of configuration.
     */
    time_only: boolean
    /**
     * If %TRUE, the formatted clock will never include a date or the
     * day of the week, irrespective of configuration.
     */
    timeOnly: boolean
    /**
     * The timezone used for this clock
     */
    readonly timezone: GLib.TimeZone

    // Own fields of GnomeDesktop-3.0.GnomeDesktop.WallClock

    parent_object: GObject.Object
    priv: WallClockPrivate

    // Owm methods of GnomeDesktop-3.0.GnomeDesktop.WallClock

    /**
     * Returns the string representing the current time of this clock
     * according to the user settings.
     * @returns the time of the clock as a string.      This string points to internally allocated storage and      must not be freed, modified or stored.
     */
    get_clock(): string
    /**
     * Returns the current local time zone used by this clock.
     * @returns the #GTimeZone of the clock.
     */
    get_timezone(): GLib.TimeZone
    string_for_datetime(now: GLib.DateTime, clock_format: GDesktopEnums.ClockFormat, show_weekday: boolean, show_full_date: boolean, show_seconds: boolean): string | null

    // Class property signals of GnomeDesktop-3.0.GnomeDesktop.WallClock

    connect(sigName: "notify::clock", callback: (($obj: WallClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock", callback: (($obj: WallClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clock", ...args: any[]): void
    connect(sigName: "notify::force-seconds", callback: (($obj: WallClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::force-seconds", callback: (($obj: WallClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::force-seconds", ...args: any[]): void
    connect(sigName: "notify::time-only", callback: (($obj: WallClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::time-only", callback: (($obj: WallClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::time-only", ...args: any[]): void
    connect(sigName: "notify::timezone", callback: (($obj: WallClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timezone", callback: (($obj: WallClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::timezone", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WallClock extends GObject.Object {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.WallClock

    static name: string
    static $gtype: GObject.GType<WallClock>

    // Constructors of GnomeDesktop-3.0.GnomeDesktop.WallClock

    constructor(config?: WallClock.ConstructorProperties) 
    /**
     * Creates a new #GnomeWallClock
     * @constructor 
     * @returns the new clock
     */
    constructor() 
    /**
     * Creates a new #GnomeWallClock
     * @constructor 
     * @returns the new clock
     */
    static new(): WallClock
    _init(config?: WallClock.ConstructorProperties): void
}

module XkbInfo {

    // Signal callback interfaces

    /**
     * Signal callback interface for `layouts-changed`
     */
    interface LayoutsChangedSignalCallback {
        ($obj: XkbInfo): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface XkbInfo {

    // Own fields of GnomeDesktop-3.0.GnomeDesktop.XkbInfo

    parent_object: GObject.Object
    priv: XkbInfoPrivate

    // Owm methods of GnomeDesktop-3.0.GnomeDesktop.XkbInfo

    description_for_group(group_id: string): string
    description_for_option(group_id: string, id: string): string
    /**
     * Returns a list of all layout identifiers we know about.
     * @returns the list of layout names. The caller takes ownership of the #GList but not of the strings themselves, those are internally allocated and must not be modified.
     */
    get_all_layouts(): string[]
    /**
     * Returns a list of all option group identifiers we know about.
     * @returns the list of option group ids. The caller takes ownership of the #GList but not of the strings themselves, those are internally allocated and must not be modified.
     */
    get_all_option_groups(): string[]
    /**
     * Returns a list of all languages supported by a layout, given by
     * `layout_id`.
     * @param layout_id a layout identifier
     * @returns the list of ISO 639 code strings. The caller takes ownership of the #GList but not of the strings themselves, those are internally allocated and must not be modified.
     */
    get_languages_for_layout(layout_id: string): string[]
    /**
     * Retrieves information about a layout. Both `display_name` and
     * `short_name` are suitable to show in UIs and might be localized if
     * translations are available.
     * 
     * Some layouts don't provide a short name (2 or 3 letters) or don't
     * specify a XKB variant, in those cases `short_name` or `xkb_variant`
     * are empty strings, i.e. "".
     * 
     * If the given layout doesn't exist the return value is %FALSE and
     * all the (out) parameters are set to %NULL.
     * @param id layout's identifier about which to retrieve the info
     * @returns %TRUE if the layout exists or %FALSE otherwise.
     */
    get_layout_info(id: string): [ /* returnType */ boolean, /* display_name */ string | null, /* short_name */ string | null, /* xkb_layout */ string | null, /* xkb_variant */ string | null ]
    /**
     * Returns a list of all layout identifiers we know about for
     * `country_code`.
     * @param country_code an ISO 3166 code string
     * @returns the list of layout ids. The caller takes ownership of the #GList but not of the strings themselves, those are internally allocated and must not be modified.
     */
    get_layouts_for_country(country_code: string): string[]
    /**
     * Returns a list of all layout identifiers we know about for
     * `language_code`.
     * @param language_code an ISO 639 code string
     * @returns the list of layout ids. The caller takes ownership of the #GList but not of the strings themselves, those are internally allocated and must not be modified.
     */
    get_layouts_for_language(language_code: string): string[]
    /**
     * Returns a list of all option identifiers we know about for group
     * `group_id`.
     * @param group_id group's identifier about which to retrieve the options
     * @returns the list of option ids. The caller takes ownership of the #GList but not of the strings themselves, those are internally allocated and must not be modified.
     */
    get_options_for_group(group_id: string): string[]

    // Own signals of GnomeDesktop-3.0.GnomeDesktop.XkbInfo

    connect(sigName: "layouts-changed", callback: XkbInfo.LayoutsChangedSignalCallback): number
    connect_after(sigName: "layouts-changed", callback: XkbInfo.LayoutsChangedSignalCallback): number
    emit(sigName: "layouts-changed", ...args: any[]): void

    // Class property signals of GnomeDesktop-3.0.GnomeDesktop.XkbInfo

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class XkbInfo extends GObject.Object {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.XkbInfo

    static name: string
    static $gtype: GObject.GType<XkbInfo>

    // Constructors of GnomeDesktop-3.0.GnomeDesktop.XkbInfo

    constructor(config?: XkbInfo.ConstructorProperties) 
    constructor() 
    static new(): XkbInfo
    _init(config?: XkbInfo.ConstructorProperties): void
}

interface BGClass {
}

abstract class BGClass {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.BGClass

    static name: string
}

interface BGCrossfadeClass {

    // Own fields of GnomeDesktop-3.0.GnomeDesktop.BGCrossfadeClass

    parent_class: GObject.ObjectClass
    finished: (fade: BGCrossfade, window: Gdk.Window) => void
}

abstract class BGCrossfadeClass {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.BGCrossfadeClass

    static name: string
}

interface BGCrossfadePrivate {
}

class BGCrossfadePrivate {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.BGCrossfadePrivate

    static name: string
}

interface BGSlideShowClass {

    // Own fields of GnomeDesktop-3.0.GnomeDesktop.BGSlideShowClass

    parent_class: GObject.ObjectClass
}

abstract class BGSlideShowClass {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.BGSlideShowClass

    static name: string
}

interface BGSlideShowPrivate {
}

class BGSlideShowPrivate {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.BGSlideShowPrivate

    static name: string
}

interface DesktopThumbnailFactoryClass {

    // Own fields of GnomeDesktop-3.0.GnomeDesktop.DesktopThumbnailFactoryClass

    parent: GObject.ObjectClass
}

abstract class DesktopThumbnailFactoryClass {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.DesktopThumbnailFactoryClass

    static name: string
}

interface DesktopThumbnailFactoryPrivate {
}

class DesktopThumbnailFactoryPrivate {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.DesktopThumbnailFactoryPrivate

    static name: string
}

interface IdleMonitorClass {

    // Own fields of GnomeDesktop-3.0.GnomeDesktop.IdleMonitorClass

    parent_class: GObject.ObjectClass
}

abstract class IdleMonitorClass {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.IdleMonitorClass

    static name: string
}

interface IdleMonitorPrivate {
}

class IdleMonitorPrivate {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.IdleMonitorPrivate

    static name: string
}

interface PnpIdsClass {

    // Own fields of GnomeDesktop-3.0.GnomeDesktop.PnpIdsClass

    parent_class: GObject.ObjectClass
}

abstract class PnpIdsClass {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.PnpIdsClass

    static name: string
}

interface PnpIdsPrivate {
}

class PnpIdsPrivate {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.PnpIdsPrivate

    static name: string
}

interface RRCTM {

    // Own fields of GnomeDesktop-3.0.GnomeDesktop.RRCTM

    matrix: number[]
}

class RRCTM {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.RRCTM

    static name: string
}

interface RRConfigClass {

    // Own fields of GnomeDesktop-3.0.GnomeDesktop.RRConfigClass

    parent_class: GObject.ObjectClass
}

abstract class RRConfigClass {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.RRConfigClass

    static name: string
}

interface RRConfigPrivate {
}

class RRConfigPrivate {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.RRConfigPrivate

    static name: string
}

interface RRCrtc {

    // Owm methods of GnomeDesktop-3.0.GnomeDesktop.RRCrtc

    can_drive_output(output: RROutput): boolean
    get_current_mode(): RRMode
    get_current_rotation(): RRRotation
    get_gamma(size: number): [ /* returnType */ boolean, /* red */ number, /* green */ number, /* blue */ number ]
    get_id(): number
    get_position(): [ /* x */ number, /* y */ number ]
    get_rotations(): RRRotation
    set_gamma(size: number, red: number, green: number, blue: number): boolean
    supports_rotation(rotation: RRRotation): boolean
}

class RRCrtc {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.RRCrtc

    static name: string
}

interface RRMode {

    // Owm methods of GnomeDesktop-3.0.GnomeDesktop.RRMode

    get_freq(): number
    get_freq_f(): number
    get_height(): number
    get_id(): number
    get_is_interlaced(): boolean
    /**
     * Returns TRUE if this mode is a tiled
     * mode created for span a tiled monitor.
     */
    get_is_tiled(): boolean
    get_width(): number
}

class RRMode {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.RRMode

    static name: string
}

interface RROutput {

    // Owm methods of GnomeDesktop-3.0.GnomeDesktop.RROutput

    can_clone(clone: RROutput): boolean
    get_backlight(): number
    get_crtc(): RRCrtc
    get_current_mode(): RRMode
    get_display_name(): string
    get_edid_data(size: number): number
    get_id(): number
    get_ids_from_edid(): [ /* vendor */ string, /* product */ string, /* serial */ string ]
    get_is_primary(): boolean
    get_is_underscanning(): boolean
    get_min_backlight_step(): number
    get_name(): string
    get_physical_size(): [ /* width_mm */ number, /* height_mm */ number ]
    get_position(): [ /* x */ number, /* y */ number ]
    get_possible_crtcs(): RRCrtc[]
    get_preferred_mode(): RRMode
    is_builtin_display(): boolean
    list_modes(): RRMode[]
    set_backlight(value: number): boolean
    set_color_transform(value: RRCTM): boolean
    supports_color_transform(): boolean
    supports_mode(mode: RRMode): boolean
    supports_underscanning(): boolean
}

class RROutput {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.RROutput

    static name: string
}

interface RROutputInfoClass {

    // Own fields of GnomeDesktop-3.0.GnomeDesktop.RROutputInfoClass

    parent_class: GObject.ObjectClass
}

abstract class RROutputInfoClass {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.RROutputInfoClass

    static name: string
}

interface RROutputInfoPrivate {
}

class RROutputInfoPrivate {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.RROutputInfoPrivate

    static name: string
}

interface RRScreenClass {

    // Own fields of GnomeDesktop-3.0.GnomeDesktop.RRScreenClass

    parent_class: GObject.ObjectClass
    changed: (screen: RRScreen) => void
    output_connected: (screen: RRScreen, output: RROutput) => void
    output_disconnected: (screen: RRScreen, output: RROutput) => void
}

abstract class RRScreenClass {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.RRScreenClass

    static name: string
}

interface RRScreenPrivate {
}

class RRScreenPrivate {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.RRScreenPrivate

    static name: string
}

interface WallClockClass {

    // Own fields of GnomeDesktop-3.0.GnomeDesktop.WallClockClass

    parent_class: GObject.ObjectClass
}

abstract class WallClockClass {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.WallClockClass

    static name: string
}

interface WallClockPrivate {
}

class WallClockPrivate {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.WallClockPrivate

    static name: string
}

interface XkbInfoClass {

    // Own fields of GnomeDesktop-3.0.GnomeDesktop.XkbInfoClass

    parent_class: GObject.ObjectClass
}

abstract class XkbInfoClass {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.XkbInfoClass

    static name: string
}

interface XkbInfoPrivate {
}

class XkbInfoPrivate {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.XkbInfoPrivate

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default GnomeDesktop;
// END