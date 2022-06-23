// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GnomeDesktop-3.0
 */

import type Gtk from './Gtk-3.0';
import type xlib from './xlib-2.0';
import type Gdk from './Gdk-3.0';
import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Atk from './Atk-1.0';
import type GDesktopEnums from './GDesktopEnums-3.0';

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
 */
function desktopThumbnailIsValid(pixbuf: GdkPixbuf.Pixbuf, uri: string, mtime: number): boolean
/**
 * Returns the filename that a thumbnail of size `size` for `uri` would have.
 * This function is threadsafe and does no blocking I/O.
 * @param uri an uri
 * @param size a thumbnail size
 */
function desktopThumbnailPathForUri(uri: string, size: DesktopThumbnailSize): string
/**
 * Gets all locales.
 */
function getAllLocales(): string[]
/**
 * Gets the country name for `code`. If `translation` is provided the
 * returned string is translated accordingly.
 * @param code an ISO 3166 code string
 * @param translation a locale string
 */
function getCountryFromCode(code: string, translation: string | null): string
/**
 * Gets the country description for `locale`. If `translation` is
 * provided the returned string is translated accordingly.
 * @param locale a locale string
 * @param translation a locale string
 */
function getCountryFromLocale(locale: string, translation: string | null): string
/**
 * Gets the default input source's type and identifier for a given
 * locale.
 * @param locale a locale string
 */
function getInputSourceFromLocale(locale: string): [ /* returnType */ boolean, /* type */ string, /* id */ string ]
/**
 * Gets the language name for `code`. If `translation` is provided the
 * returned string is translated accordingly.
 * @param code an ISO 639 code string
 * @param translation a locale string
 */
function getLanguageFromCode(code: string, translation: string | null): string
/**
 * Gets the language description for `locale`. If `translation` is
 * provided the returned string is translated accordingly.
 * @param locale a locale string
 * @param translation a locale string
 */
function getLanguageFromLocale(locale: string, translation: string | null): string
/**
 * Returns an integer with the major version of GNOME. Useful for
 * dynamic languages like Javascript or Python (static languages like
 * C should use %GNOME_DESKTOP_PLATFORM_VERSION). If this
 * function doesn't exist, it can be presumed that the GNOME platform
 * version is 42 or previous.
 */
function getPlatformVersion(): number
/**
 * Gets a translation of the raw `modifier` string. If `translation`
 * is provided the returned string is translated accordingly.
 * @param modifier the modifier part of a locale name
 * @param translation a locale string
 */
function getTranslatedModifier(modifier: string, translation: string | null): string
/**
 * Returns %TRUE if there are translations for language `code`.
 * @param code an ISO 639 code string
 */
function languageHasTranslations(code: string): boolean
/**
 * Gets the normalized locale string in the form
 * [language[_country][.codeset][`modifier]`] for `name`.
 * @param locale a locale string
 */
function normalizeLocale(locale: string): string
/**
 * Extracts the various components of a locale string of the form
 * [language[_country][.codeset][`modifier]`]. See
 * http://en.wikipedia.org/wiki/Locale.
 * @param locale a locale string
 */
function parseLocale(locale: string): [ /* returnType */ boolean, /* languageCodep */ string, /* countryCodep */ string | null, /* codesetp */ string | null, /* modifierp */ string | null ]
/**
 * Returns the #GQuark that will be used for #GError values returned by the
 * GnomeRR API.
 */
function rrErrorQuark(): GLib.Quark
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
function startSystemdScope(name: string, pid: number, description: string | null, connection: Gio.DBusConnection | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
/**
 * Finish an asynchronous operation to create a transient scope that was
 * started with gnome_start_systemd_scope().
 * 
 * Note that a successful return code does not imply that a unit has been
 * created. It solely means that no error condition was hit sending the request.
 * @param res A #GAsyncResult
 */
function startSystemdScopeFinish(res: Gio.AsyncResult): boolean
interface IdleMonitorWatchFunc {
    (monitor: IdleMonitor, id: number): void
}
interface BG_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `changed`
 */
interface BG_ChangedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `transitioned`
 */
interface BG_TransitionedSignalCallback {
    (): void
}

interface BG {

    // Owm methods of GnomeDesktop-3.0.GnomeDesktop.BG

    changesWithTime(): boolean
    /**
     * Creates a thumbnail for a certain frame, where 'frame' is somewhat
     * vaguely defined as 'suitable point to show while single-stepping
     * through the slideshow'.
     * @param factory 
     * @param screen 
     * @param destWidth 
     * @param destHeight 
     * @param frameNum 
     */
    createFrameThumbnail(factory: DesktopThumbnailFactory, screen: Gdk.Screen, destWidth: number, destHeight: number, frameNum: number): GdkPixbuf.Pixbuf
    /**
     * Create a surface that can be set as background for `window`.
     * @param window 
     * @param width 
     * @param height 
     */
    createSurface(window: Gdk.Window, width: number, height: number): cairo.Surface
    createThumbnail(factory: DesktopThumbnailFactory, screen: Gdk.Screen, destWidth: number, destHeight: number): GdkPixbuf.Pixbuf
    draw(dest: GdkPixbuf.Pixbuf): void
    getFilename(): string
    getImageSize(factory: DesktopThumbnailFactory, bestWidth: number, bestHeight: number, width: number, height: number): boolean
    getPlacement(): GDesktopEnums.BackgroundStyle
    getRgba(type: GDesktopEnums.BackgroundShading, primary: Gdk.RGBA, secondary: Gdk.RGBA): void
    hasMultipleSizes(): boolean
    isDark(destWidth: number, destHeight: number): boolean
    loadFromPreferences(settings: Gio.Settings): void
    saveToPreferences(settings: Gio.Settings): void
    setFilename(filename: string): void
    setPlacement(placement: GDesktopEnums.BackgroundStyle): void
    setRgba(type: GDesktopEnums.BackgroundShading, primary: Gdk.RGBA, secondary: Gdk.RGBA): void

    // Own signals of GnomeDesktop-3.0.GnomeDesktop.BG

    connect(sigName: "changed", callback: BG_ChangedSignalCallback): number
    on(sigName: "changed", callback: BG_ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: BG_ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: BG_ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "transitioned", callback: BG_TransitionedSignalCallback): number
    on(sigName: "transitioned", callback: BG_TransitionedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "transitioned", callback: BG_TransitionedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "transitioned", callback: BG_TransitionedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "transitioned", ...args: any[]): void

    // Class property signals of GnomeDesktop-3.0.GnomeDesktop.BG

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class BG extends GObject.Object {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.BG

    static name: string
    static $gtype: GObject.GType<BG>

    // Constructors of GnomeDesktop-3.0.GnomeDesktop.BG

    constructor(config?: BG_ConstructProps) 
    constructor() 
    static new(): BG
    _init(config?: BG_ConstructProps): void
}

interface BGCrossfade_ConstructProps extends GObject.Object_ConstructProps {

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

/**
 * Signal callback interface for `finished`
 */
interface BGCrossfade_FinishedSignalCallback {
    (window: GObject.Object): void
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

    parentObject: GObject.Object
    priv: BGCrossfadePrivate

    // Owm methods of GnomeDesktop-3.0.GnomeDesktop.BGCrossfade

    /**
     * This function reveals whether or not `fade` is currently
     * running on a window.  See gnome_bg_crossfade_start() for
     * information on how to initiate a crossfade.
     */
    isStarted(): boolean
    /**
     * Before initiating a crossfade with gnome_bg_crossfade_start()
     * a start and end surface have to be set.  This function sets
     * the surface shown at the end of the crossfade effect.
     * @param surface The cairo surface to fade to
     */
    setEndSurface(surface: cairo.Surface): boolean
    /**
     * Before initiating a crossfade with gnome_bg_crossfade_start()
     * a start and end surface have to be set.  This function sets
     * the surface shown at the beginning of the crossfade effect.
     * @param surface The cairo surface to fade from
     */
    setStartSurface(surface: cairo.Surface): boolean
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

    // Own signals of GnomeDesktop-3.0.GnomeDesktop.BGCrossfade

    connect(sigName: "finished", callback: BGCrossfade_FinishedSignalCallback): number
    on(sigName: "finished", callback: BGCrossfade_FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: BGCrossfade_FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: BGCrossfade_FinishedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "finished", ...args: any[]): void

    // Class property signals of GnomeDesktop-3.0.GnomeDesktop.BGCrossfade

    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class BGCrossfade extends GObject.Object {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.BGCrossfade

    static name: string
    static $gtype: GObject.GType<BGCrossfade>

    // Constructors of GnomeDesktop-3.0.GnomeDesktop.BGCrossfade

    constructor(config?: BGCrossfade_ConstructProps) 
    /**
     * Creates a new object to manage crossfading a
     * window background between two #cairo_surface_ts.
     * @constructor 
     * @param width The width of the crossfading window
     * @param height The height of the crossfading window
     */
    constructor(width: number, height: number) 
    /**
     * Creates a new object to manage crossfading a
     * window background between two #cairo_surface_ts.
     * @constructor 
     * @param width The width of the crossfading window
     * @param height The height of the crossfading window
     */
    static new(width: number, height: number): BGCrossfade
    _init(config?: BGCrossfade_ConstructProps): void
}

interface BGSlideShow_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GnomeDesktop-3.0.GnomeDesktop.BGSlideShow

    file?: Gio.File | null
}

interface BGSlideShow {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.BGSlideShow

    readonly file: Gio.File
    readonly hasMultipleSizes: boolean
    readonly startTime: number
    readonly totalDuration: number

    // Own fields of GnomeDesktop-3.0.GnomeDesktop.BGSlideShow

    parentObject: GObject.Object
    priv: BGSlideShowPrivate

    // Owm methods of GnomeDesktop-3.0.GnomeDesktop.BGSlideShow

    /**
     * Returns the current slides progress.
     * @param width monitor width
     * @param height monitor height
     */
    getCurrentSlide(width: number, height: number): [ /* progress */ number, /* duration */ number, /* isFixed */ boolean, /* file1 */ string, /* file2 */ string ]
    /**
     * gets whether or not the slide show has multiple sizes for different monitors
     */
    getHasMultipleSizes(): boolean
    /**
     * Returns number of slides in slide show
     */
    getNumSlides(): number
    /**
     * Retrieves slide by frame number
     * @param frameNumber frame number
     * @param width monitor width
     * @param height monitor height
     */
    getSlide(frameNumber: number, width: number, height: number): [ /* returnType */ boolean, /* progress */ number, /* duration */ number, /* isFixed */ boolean, /* file1 */ string, /* file2 */ string ]
    /**
     * gets the start time of the slide show
     */
    getStartTime(): number
    /**
     * gets the total duration of the slide show
     */
    getTotalDuration(): number
    /**
     * Tries to load the slide show.
     */
    load(): boolean
    /**
     * Tries to load the slide show asynchronously.
     * @param cancellable a #GCancellable
     * @param callback the callback
     */
    loadAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

    // Class property signals of GnomeDesktop-3.0.GnomeDesktop.BGSlideShow

    connect(sigName: "notify::file", callback: (...args: any[]) => void): number
    on(sigName: "notify::file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: "notify::has-multiple-sizes", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-multiple-sizes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-multiple-sizes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-multiple-sizes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-multiple-sizes", ...args: any[]): void
    connect(sigName: "notify::start-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::start-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::start-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::start-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::start-time", ...args: any[]): void
    connect(sigName: "notify::total-duration", callback: (...args: any[]) => void): number
    on(sigName: "notify::total-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::total-duration", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::total-duration", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::total-duration", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class BGSlideShow extends GObject.Object {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.BGSlideShow

    static name: string
    static $gtype: GObject.GType<BGSlideShow>

    // Constructors of GnomeDesktop-3.0.GnomeDesktop.BGSlideShow

    constructor(config?: BGSlideShow_ConstructProps) 
    /**
     * Creates a new object to manage a slide show.
     * window background between two #cairo_surface_ts.
     * @constructor 
     * @param filename The filename of the slide show
     */
    constructor(filename: string) 
    /**
     * Creates a new object to manage a slide show.
     * window background between two #cairo_surface_ts.
     * @constructor 
     * @param filename The filename of the slide show
     */
    static new(filename: string): BGSlideShow
    _init(config?: BGSlideShow_ConstructProps): void
}

interface DesktopThumbnailFactory_ConstructProps extends GObject.Object_ConstructProps {
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
     * @param mimeType the mime type of the file
     * @param mtime the mtime of the file
     */
    canThumbnail(uri: string, mimeType: string, mtime: number): boolean
    /**
     * Creates a failed thumbnail for the file so that we don't try
     * to re-thumbnail the file later.
     * 
     * Usage of this function is threadsafe and does blocking I/O.
     * @param uri the uri of a file
     * @param mtime the modification time of the file
     */
    createFailedThumbnail(uri: string, mtime: number): void
    /**
     * Asynchronous version of gnome_desktop_thumbnail_factory_create_failed_thumbnail()
     * 
     * Since 42.0
     * @param uri the uri of a file
     * @param originalMtime the modification time of the original file
     * @param cancellable a Cancellable object
     * @param callback a function that will be called when the task has ended
     */
    createFailedThumbnailAsync(uri: string, originalMtime: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Since 42.0
     * @param result the result of the operation
     */
    createFailedThumbnailFinish(result: Gio.AsyncResult): void
    /**
     * Tries to generate a thumbnail for the specified file. If it succeeds
     * it returns a pixbuf that can be used as a thumbnail.
     * 
     * Usage of this function is threadsafe and does blocking I/O.
     * @param uri the uri of a file
     * @param mimeType the mime type of the file
     */
    generateThumbnail(uri: string, mimeType: string): GdkPixbuf.Pixbuf
    /**
     * Asynchronous version of gnome_desktop_thumbnail_factory_generate_thumbnail()
     * 
     * Since 42.0
     * @param uri the URI of a file
     * @param mimeType the MIME type of the file
     * @param cancellable a Cancellable object
     * @param callback a function that will be called when the task has ended
     */
    generateThumbnailAsync(uri: string, mimeType: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    generateThumbnailFinish(result: Gio.AsyncResult): GdkPixbuf.Pixbuf
    /**
     * Tries to locate an failed thumbnail for the file specified. Writing
     * and looking for failed thumbnails is important to avoid to try to
     * thumbnail e.g. broken images several times.
     * 
     * Usage of this function is threadsafe and does blocking I/O.
     * @param uri the uri of a file
     * @param mtime the mtime of the file
     */
    hasValidFailedThumbnail(uri: string, mtime: number): boolean
    /**
     * Tries to locate an existing thumbnail for the file specified.
     * 
     * Usage of this function is threadsafe and does blocking I/O.
     * @param uri the uri of a file
     * @param mtime the mtime of the file
     */
    lookup(uri: string, mtime: number): string
    /**
     * Saves `thumbnail` at the right place. If the save fails a
     * failed thumbnail is written.
     * 
     * Usage of this function is threadsafe and does blocking I/O.
     * @param thumbnail the thumbnail as a pixbuf
     * @param uri the uri of a file
     * @param originalMtime the modification time of the original file
     */
    saveThumbnail(thumbnail: GdkPixbuf.Pixbuf, uri: string, originalMtime: number): void
    /**
     * Asynchronous version of gnome_desktop_thumbnail_factory_save_thumbnail()
     * 
     * Since 42.0
     * @param thumbnail the thumbnail as a pixbuf
     * @param uri the uri of a file
     * @param originalMtime the modification time of the original file
     * @param cancellable a Cancellable object
     * @param callback a function that will be called when the task has ended
     */
    saveThumbnailAsync(thumbnail: GdkPixbuf.Pixbuf, uri: string, originalMtime: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Since 42.0
     * @param result the result of the operation
     */
    saveThumbnailFinish(result: Gio.AsyncResult): void

    // Class property signals of GnomeDesktop-3.0.GnomeDesktop.DesktopThumbnailFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class DesktopThumbnailFactory extends GObject.Object {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.DesktopThumbnailFactory

    static name: string
    static $gtype: GObject.GType<DesktopThumbnailFactory>

    // Constructors of GnomeDesktop-3.0.GnomeDesktop.DesktopThumbnailFactory

    constructor(config?: DesktopThumbnailFactory_ConstructProps) 
    /**
     * Creates a new #GnomeDesktopThumbnailFactory.
     * 
     * This function must be called on the main thread and is non-blocking.
     * @constructor 
     * @param size The thumbnail size to use
     */
    constructor(size: DesktopThumbnailSize) 
    /**
     * Creates a new #GnomeDesktopThumbnailFactory.
     * 
     * This function must be called on the main thread and is non-blocking.
     * @constructor 
     * @param size The thumbnail size to use
     */
    static new(size: DesktopThumbnailSize): DesktopThumbnailFactory
    _init(config?: DesktopThumbnailFactory_ConstructProps): void
}

interface IdleMonitor_ConstructProps extends Gio.Initable_ConstructProps, GObject.Object_ConstructProps {
}

interface IdleMonitor extends Gio.Initable {

    // Own fields of GnomeDesktop-3.0.GnomeDesktop.IdleMonitor

    parent: GObject.Object
    priv: IdleMonitorPrivate

    // Owm methods of GnomeDesktop-3.0.GnomeDesktop.IdleMonitor

    addIdleWatch(intervalMsec: number, callback: IdleMonitorWatchFunc | null): number
    addUserActiveWatch(callback: IdleMonitorWatchFunc | null): number
    getIdletime(): number
    /**
     * Removes an idle time watcher, previously added by
     * gnome_idle_monitor_add_idle_watch() or
     * gnome_idle_monitor_add_user_active_watch().
     * @param id A watch ID
     */
    removeWatch(id: number): void

    // Class property signals of GnomeDesktop-3.0.GnomeDesktop.IdleMonitor

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class IdleMonitor extends GObject.Object {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.IdleMonitor

    static name: string
    static $gtype: GObject.GType<IdleMonitor>

    // Constructors of GnomeDesktop-3.0.GnomeDesktop.IdleMonitor

    constructor(config?: IdleMonitor_ConstructProps) 
    constructor() 
    static new(): IdleMonitor
    _init(config?: IdleMonitor_ConstructProps): void
}

interface PnpIds_ConstructProps extends GObject.Object_ConstructProps {
}

interface PnpIds {

    // Own fields of GnomeDesktop-3.0.GnomeDesktop.PnpIds

    parent: GObject.Object
    priv: PnpIdsPrivate

    // Owm methods of GnomeDesktop-3.0.GnomeDesktop.PnpIds

    /**
     * Find the full manufacturer name for the given PNP ID.
     * @param pnpId the PNP ID to look for
     */
    getPnpId(pnpId: string): string

    // Class property signals of GnomeDesktop-3.0.GnomeDesktop.PnpIds

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class PnpIds extends GObject.Object {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.PnpIds

    static name: string
    static $gtype: GObject.GType<PnpIds>

    // Constructors of GnomeDesktop-3.0.GnomeDesktop.PnpIds

    constructor(config?: PnpIds_ConstructProps) 
    /**
     * Returns a reference to a #GnomePnpIds object, or creates
     * a new one if none have been created.
     * @constructor 
     */
    constructor() 
    /**
     * Returns a reference to a #GnomePnpIds object, or creates
     * a new one if none have been created.
     * @constructor 
     */
    static new(): PnpIds
    _init(config?: PnpIds_ConstructProps): void
}

interface RRConfig_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GnomeDesktop-3.0.GnomeDesktop.RRConfig

    screen?: RRScreen | null
}

interface RRConfig {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.RRConfig

    readonly screen: RRScreen

    // Own fields of GnomeDesktop-3.0.GnomeDesktop.RRConfig

    parent: GObject.Object

    // Owm methods of GnomeDesktop-3.0.GnomeDesktop.RRConfig

    applicable(screen: RRScreen): boolean
    apply(screen: RRScreen): boolean
    applyPersistent(screen: RRScreen): boolean
    ensurePrimary(): boolean
    equal(config2: RRConfig): boolean
    getClone(): boolean
    getOutputs(): RROutputInfo[]
    loadCurrent(): boolean
    match(config2: RRConfig): boolean
    sanitize(): void
    setClone(clone: boolean): void

    // Class property signals of GnomeDesktop-3.0.GnomeDesktop.RRConfig

    connect(sigName: "notify::screen", callback: (...args: any[]) => void): number
    on(sigName: "notify::screen", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::screen", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::screen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class RRConfig extends GObject.Object {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.RRConfig

    static name: string
    static $gtype: GObject.GType<RRConfig>

    // Constructors of GnomeDesktop-3.0.GnomeDesktop.RRConfig

    constructor(config?: RRConfig_ConstructProps) 
    static newCurrent(screen: RRScreen): RRConfig
    _init(config?: RRConfig_ConstructProps): void
}

interface RROutputInfo_ConstructProps extends GObject.Object_ConstructProps {
}

interface RROutputInfo {

    // Own fields of GnomeDesktop-3.0.GnomeDesktop.RROutputInfo

    parent: GObject.Object

    // Owm methods of GnomeDesktop-3.0.GnomeDesktop.RROutputInfo

    getAspectRatio(): number
    getDisplayName(): string
    /**
     * Get the geometry for the monitor connected to the specified output.
     * If the monitor is a tiled monitor, it returns the geometry for the complete monitor.
     */
    getGeometry(): [ /* x */ number, /* y */ number, /* width */ number, /* height */ number ]
    getName(): string
    getPreferredHeight(): number
    getPreferredWidth(): number
    getPrimary(): boolean
    getProduct(): string
    getRefreshRate(): number
    getRotation(): RRRotation
    getSerial(): string
    getUnderscanning(): boolean
    getVendor(): string
    isActive(): boolean
    isConnected(): boolean
    isPrimaryTile(): boolean
    setActive(active: boolean): void
    /**
     * Set the geometry for the monitor connected to the specified output.
     * If the monitor is a tiled monitor, it sets the geometry for the complete monitor.
     * @param x x offset for monitor
     * @param y y offset for monitor
     * @param width monitor width
     * @param height monitor height
     */
    setGeometry(x: number, y: number, width: number, height: number): void
    setPrimary(primary: boolean): void
    setRefreshRate(rate: number): void
    setRotation(rotation: RRRotation): void
    setUnderscanning(underscanning: boolean): void
    supportsRotation(rotation: RRRotation): boolean

    // Class property signals of GnomeDesktop-3.0.GnomeDesktop.RROutputInfo

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class RROutputInfo extends GObject.Object {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.RROutputInfo

    static name: string
    static $gtype: GObject.GType<RROutputInfo>

    // Constructors of GnomeDesktop-3.0.GnomeDesktop.RROutputInfo

    constructor(config?: RROutputInfo_ConstructProps) 
    _init(config?: RROutputInfo_ConstructProps): void
}

interface RRScreen_ConstructProps extends Gio.AsyncInitable_ConstructProps, Gio.Initable_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of GnomeDesktop-3.0.GnomeDesktop.RRScreen

    dpmsMode?: RRDpmsModeType | null
    gdkScreen?: Gdk.Screen | null
}

/**
 * Signal callback interface for `changed`
 */
interface RRScreen_ChangedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `output-connected`
 */
interface RRScreen_OutputConnectedSignalCallback {
    (output: object | null): void
}

/**
 * Signal callback interface for `output-disconnected`
 */
interface RRScreen_OutputDisconnectedSignalCallback {
    (output: object | null): void
}

interface RRScreen extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.RRScreen

    dpmsMode: RRDpmsModeType
    readonly gdkScreen: Gdk.Screen

    // Own fields of GnomeDesktop-3.0.GnomeDesktop.RRScreen

    parent: GObject.Object
    priv: RRScreenPrivate

    // Owm methods of GnomeDesktop-3.0.GnomeDesktop.RRScreen

    getCrtcById(id: number): RRCrtc
    getDpmsMode(): [ /* returnType */ boolean, /* mode */ RRDpmsMode ]
    getOutputById(id: number): RROutput
    getOutputByName(name: string): RROutput
    /**
     * Get the ranges of the screen
     */
    getRanges(): [ /* minWidth */ number, /* maxWidth */ number, /* minHeight */ number, /* maxHeight */ number ]
    /**
     * List available XRandR clone modes
     */
    listCloneModes(): RRMode[]
    /**
     * List all CRTCs
     */
    listCrtcs(): RRCrtc[]
    /**
     * List available XRandR modes
     */
    listModes(): RRMode[]
    /**
     * List all outputs
     */
    listOutputs(): RROutput[]
    /**
     * Refreshes the screen configuration, and calls the screen's callback if it
     * exists and if the screen's configuration changed.
     */
    refresh(): boolean
    /**
     * This method also disables the DPMS timeouts.
     * @param mode 
     */
    setDpmsMode(mode: RRDpmsMode): boolean

    // Own signals of GnomeDesktop-3.0.GnomeDesktop.RRScreen

    connect(sigName: "changed", callback: RRScreen_ChangedSignalCallback): number
    on(sigName: "changed", callback: RRScreen_ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: RRScreen_ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: RRScreen_ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "output-connected", callback: RRScreen_OutputConnectedSignalCallback): number
    on(sigName: "output-connected", callback: RRScreen_OutputConnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "output-connected", callback: RRScreen_OutputConnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "output-connected", callback: RRScreen_OutputConnectedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "output-connected", ...args: any[]): void
    connect(sigName: "output-disconnected", callback: RRScreen_OutputDisconnectedSignalCallback): number
    on(sigName: "output-disconnected", callback: RRScreen_OutputDisconnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "output-disconnected", callback: RRScreen_OutputDisconnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "output-disconnected", callback: RRScreen_OutputDisconnectedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "output-disconnected", ...args: any[]): void

    // Class property signals of GnomeDesktop-3.0.GnomeDesktop.RRScreen

    connect(sigName: "notify::dpms-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::dpms-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dpms-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dpms-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dpms-mode", ...args: any[]): void
    connect(sigName: "notify::gdk-screen", callback: (...args: any[]) => void): number
    on(sigName: "notify::gdk-screen", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::gdk-screen", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::gdk-screen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::gdk-screen", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class RRScreen extends GObject.Object {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.RRScreen

    static name: string
    static $gtype: GObject.GType<RRScreen>

    // Constructors of GnomeDesktop-3.0.GnomeDesktop.RRScreen

    constructor(config?: RRScreen_ConstructProps) 
    /**
     * Creates a unique #GnomeRRScreen instance for the specified `screen`.
     * @constructor 
     * @param screen the #GdkScreen on which to operate
     */
    constructor(screen: Gdk.Screen) 
    /**
     * Creates a unique #GnomeRRScreen instance for the specified `screen`.
     * @constructor 
     * @param screen the #GdkScreen on which to operate
     */
    static new(screen: Gdk.Screen): RRScreen
    static newFinish(result: Gio.AsyncResult): RRScreen
    _init(config?: RRScreen_ConstructProps): void
    static newAsync(screen: Gdk.Screen, callback: Gio.AsyncReadyCallback | null): void
}

interface WallClock_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GnomeDesktop-3.0.GnomeDesktop.WallClock

    /**
     * If %TRUE, the formatted clock will never include a date or the
     * day of the week, irrespective of configuration.
     */
    timeOnly?: boolean | null
}

interface WallClock {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.WallClock

    /**
     * A formatted string representing the current clock display.
     */
    readonly clock: string
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

    parentObject: GObject.Object
    priv: WallClockPrivate

    // Owm methods of GnomeDesktop-3.0.GnomeDesktop.WallClock

    /**
     * Returns the string representing the current time of this clock
     * according to the user settings.
     */
    getClock(): string
    /**
     * Returns the current local time zone used by this clock.
     */
    getTimezone(): GLib.TimeZone
    stringForDatetime(now: GLib.DateTime, clockFormat: GDesktopEnums.ClockFormat, showWeekday: boolean, showFullDate: boolean, showSeconds: boolean): string

    // Class property signals of GnomeDesktop-3.0.GnomeDesktop.WallClock

    connect(sigName: "notify::clock", callback: (...args: any[]) => void): number
    on(sigName: "notify::clock", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clock", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clock", ...args: any[]): void
    connect(sigName: "notify::time-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::time-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::time-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::time-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::time-only", ...args: any[]): void
    connect(sigName: "notify::timezone", callback: (...args: any[]) => void): number
    on(sigName: "notify::timezone", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::timezone", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::timezone", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::timezone", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class WallClock extends GObject.Object {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.WallClock

    static name: string
    static $gtype: GObject.GType<WallClock>

    // Constructors of GnomeDesktop-3.0.GnomeDesktop.WallClock

    constructor(config?: WallClock_ConstructProps) 
    /**
     * Creates a new #GnomeWallClock
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GnomeWallClock
     * @constructor 
     */
    static new(): WallClock
    _init(config?: WallClock_ConstructProps): void
}

interface XkbInfo_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `layouts-changed`
 */
interface XkbInfo_LayoutsChangedSignalCallback {
    (): void
}

interface XkbInfo {

    // Own fields of GnomeDesktop-3.0.GnomeDesktop.XkbInfo

    parentObject: GObject.Object
    priv: XkbInfoPrivate

    // Owm methods of GnomeDesktop-3.0.GnomeDesktop.XkbInfo

    descriptionForGroup(groupId: string): string
    descriptionForOption(groupId: string, id: string): string
    /**
     * Returns a list of all layout identifiers we know about.
     */
    getAllLayouts(): string[]
    /**
     * Returns a list of all option group identifiers we know about.
     */
    getAllOptionGroups(): string[]
    /**
     * Returns a list of all languages supported by a layout, given by
     * `layout_id`.
     * @param layoutId a layout identifier
     */
    getLanguagesForLayout(layoutId: string): string[]
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
     */
    getLayoutInfo(id: string): [ /* returnType */ boolean, /* displayName */ string | null, /* shortName */ string | null, /* xkbLayout */ string | null, /* xkbVariant */ string | null ]
    /**
     * Returns a list of all layout identifiers we know about for
     * `country_code`.
     * @param countryCode an ISO 3166 code string
     */
    getLayoutsForCountry(countryCode: string): string[]
    /**
     * Returns a list of all layout identifiers we know about for
     * `language_code`.
     * @param languageCode an ISO 639 code string
     */
    getLayoutsForLanguage(languageCode: string): string[]
    /**
     * Returns a list of all option identifiers we know about for group
     * `group_id`.
     * @param groupId group's identifier about which to retrieve the options
     */
    getOptionsForGroup(groupId: string): string[]

    // Own signals of GnomeDesktop-3.0.GnomeDesktop.XkbInfo

    connect(sigName: "layouts-changed", callback: XkbInfo_LayoutsChangedSignalCallback): number
    on(sigName: "layouts-changed", callback: XkbInfo_LayoutsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "layouts-changed", callback: XkbInfo_LayoutsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "layouts-changed", callback: XkbInfo_LayoutsChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "layouts-changed", ...args: any[]): void

    // Class property signals of GnomeDesktop-3.0.GnomeDesktop.XkbInfo

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class XkbInfo extends GObject.Object {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.XkbInfo

    static name: string
    static $gtype: GObject.GType<XkbInfo>

    // Constructors of GnomeDesktop-3.0.GnomeDesktop.XkbInfo

    constructor(config?: XkbInfo_ConstructProps) 
    constructor() 
    static new(): XkbInfo
    _init(config?: XkbInfo_ConstructProps): void
}

interface BGClass {
}

abstract class BGClass {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.BGClass

    static name: string
}

interface BGCrossfadeClass {

    // Own fields of GnomeDesktop-3.0.GnomeDesktop.BGCrossfadeClass

    parentClass: GObject.ObjectClass
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

    parentClass: GObject.ObjectClass
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

    parentClass: GObject.ObjectClass
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

    parentClass: GObject.ObjectClass
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

    parentClass: GObject.ObjectClass
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

    canDriveOutput(output: RROutput): boolean
    getCurrentMode(): RRMode
    getCurrentRotation(): RRRotation
    getGamma(size: number): [ /* returnType */ boolean, /* red */ number, /* green */ number, /* blue */ number ]
    getId(): number
    getPosition(): [ /* x */ number, /* y */ number ]
    getRotations(): RRRotation
    setGamma(size: number, red: number, green: number, blue: number): boolean
    supportsRotation(rotation: RRRotation): boolean
}

class RRCrtc {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.RRCrtc

    static name: string
}

interface RRMode {

    // Owm methods of GnomeDesktop-3.0.GnomeDesktop.RRMode

    getFreq(): number
    getFreqF(): number
    getHeight(): number
    getId(): number
    getIsInterlaced(): boolean
    /**
     * Returns TRUE if this mode is a tiled
     * mode created for span a tiled monitor.
     */
    getIsTiled(): boolean
    getWidth(): number
}

class RRMode {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.RRMode

    static name: string
}

interface RROutput {

    // Owm methods of GnomeDesktop-3.0.GnomeDesktop.RROutput

    canClone(clone: RROutput): boolean
    getBacklight(): number
    getCrtc(): RRCrtc
    getCurrentMode(): RRMode
    getDisplayName(): string
    getEdidData(size: number): number
    getId(): number
    getIdsFromEdid(): [ /* vendor */ string, /* product */ string, /* serial */ string ]
    getIsPrimary(): boolean
    getIsUnderscanning(): boolean
    getMinBacklightStep(): number
    getName(): string
    getPhysicalSize(): [ /* widthMm */ number, /* heightMm */ number ]
    getPosition(): [ /* x */ number, /* y */ number ]
    getPossibleCrtcs(): RRCrtc[]
    getPreferredMode(): RRMode
    isBuiltinDisplay(): boolean
    listModes(): RRMode[]
    setBacklight(value: number): boolean
    setColorTransform(value: RRCTM): boolean
    supportsColorTransform(): boolean
    supportsMode(mode: RRMode): boolean
    supportsUnderscanning(): boolean
}

class RROutput {

    // Own properties of GnomeDesktop-3.0.GnomeDesktop.RROutput

    static name: string
}

interface RROutputInfoClass {

    // Own fields of GnomeDesktop-3.0.GnomeDesktop.RROutputInfoClass

    parentClass: GObject.ObjectClass
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

    parentClass: GObject.ObjectClass
    changed: (screen: RRScreen) => void
    outputConnected: (screen: RRScreen, output: RROutput) => void
    outputDisconnected: (screen: RRScreen, output: RROutput) => void
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

    parentClass: GObject.ObjectClass
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

    parentClass: GObject.ObjectClass
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

}
export default GnomeDesktop;