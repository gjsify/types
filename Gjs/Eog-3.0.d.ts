// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Eog-3.0
 */

import type * as Gjs from './Gjs';
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

export namespace Eog {

enum ImageError {
    SAVE_NOT_LOCAL,
    NOT_LOADED,
    NOT_SAVED,
    VFS,
    FILE_EXISTS,
    TMP_FILE_FAILED,
    GENERIC,
    UNKNOWN,
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
enum UCError {
    INVALID_UNICODE,
    INVALID_CHARACTER,
    EQUAL_FILENAMES,
    UNKNOWN,
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
const FILE_FORMAT_JPEG: string
const IMAGE_DATA_ALL: number
const LIST_STORE_THUMB_SIZE: number
const SCROLL_VIEW_MAX_ZOOM_FACTOR: number
const SCROLL_VIEW_MIN_ZOOM_FACTOR: number
const THUMBNAIL_ORIGINAL_HEIGHT: string
const THUMBNAIL_ORIGINAL_WIDTH: string
function debug(section: Debug, file: string, line: number, function_: string): void
function debug_init(): void
/**
 * Takes a date string formatted after Exif specifications and generates a
 * more readable, possibly localized, string out of it.
 * @param date a date string following Exif specifications
 */
function exif_util_format_date(date: string): string
function image_error_quark(): GLib.Quark
function marshal_VOID__INT_INT(closure: GObject.TClosure, return_value: any, n_param_values: number, param_values: any, invocation_hint: object | null, marshal_data: object | null): void
/**
 * Adds a frame to `thumbnail`
 * @param thumbnail a #GdkPixbuf
 */
function thumbnail_add_frame(thumbnail: GdkPixbuf.Pixbuf): GdkPixbuf.Pixbuf
/**
 * Ensures a pixbuf fits a given `dimension`
 * @param thumbnail a #GdkPixbuf
 * @param dimension the maximum width or height desired
 */
function thumbnail_fit_to_size(thumbnail: GdkPixbuf.Pixbuf, dimension: number): GdkPixbuf.Pixbuf
function thumbnail_init(): void
/**
 * Loads the thumbnail for `image`. In case of error, %NULL is returned
 * and `error` is set.
 * @param image a #EogImage
 */
function thumbnail_load(image: Image): GdkPixbuf.Pixbuf
function uc_error_quark(): GLib.Quark
interface ApplicationActivatable_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Eog-3.0.Eog.ApplicationActivatable

    /**
     * This is the #EogApplication this #EogApplicationActivatable instance
     * should be attached to.
     */
    app?: Application | null
}

interface ApplicationActivatable {

    // Own properties of Eog-3.0.Eog.ApplicationActivatable

    /**
     * This is the #EogApplication this #EogApplicationActivatable instance
     * should be attached to.
     */
    readonly app: Application

    // Owm methods of Eog-3.0.Eog.ApplicationActivatable

    activate(): void
    deactivate(): void

    // Own virtual methods of Eog-3.0.Eog.ApplicationActivatable

    vfunc_activate(): void
    vfunc_deactivate(): void

    // Class property signals of Eog-3.0.Eog.ApplicationActivatable

    connect(sigName: "notify::app", callback: (($obj: ApplicationActivatable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app", callback: (($obj: ApplicationActivatable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ApplicationActivatable extends GObject.Object {

    // Own properties of Eog-3.0.Eog.ApplicationActivatable

    static name: string
    static $gtype: GObject.GType<ApplicationActivatable>

    // Constructors of Eog-3.0.Eog.ApplicationActivatable

    constructor(config?: ApplicationActivatable_ConstructProps) 
    _init(config?: ApplicationActivatable_ConstructProps): void
}

interface WindowActivatable_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Eog-3.0.Eog.WindowActivatable

    /**
     * This is the #EogWindow this #EogWindowActivatable instance
     * should be attached to.
     */
    window?: Window | null
}

interface WindowActivatable {

    // Own properties of Eog-3.0.Eog.WindowActivatable

    /**
     * This is the #EogWindow this #EogWindowActivatable instance
     * should be attached to.
     */
    readonly window: Window

    // Owm methods of Eog-3.0.Eog.WindowActivatable

    activate(): void
    deactivate(): void

    // Own virtual methods of Eog-3.0.Eog.WindowActivatable

    vfunc_activate(): void
    vfunc_deactivate(): void

    // Class property signals of Eog-3.0.Eog.WindowActivatable

    connect(sigName: "notify::window", callback: (($obj: WindowActivatable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: WindowActivatable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WindowActivatable extends GObject.Object {

    // Own properties of Eog-3.0.Eog.WindowActivatable

    static name: string
    static $gtype: GObject.GType<WindowActivatable>

    // Constructors of Eog-3.0.Eog.WindowActivatable

    constructor(config?: WindowActivatable_ConstructProps) 
    _init(config?: WindowActivatable_ConstructProps): void
}

interface Application_ConstructProps extends Gio.ActionGroup_ConstructProps, Gio.ActionMap_ConstructProps, Gtk.Application_ConstructProps {
}

interface Application extends Gio.ActionGroup, Gio.ActionMap {

    // Own fields of Eog-3.0.Eog.Application

    base_instance: Gtk.Application
    priv: ApplicationPrivate

    // Owm methods of Eog-3.0.Eog.Application

    close_all_windows(): boolean
    /**
     * Opens a list of files in a #EogWindow. If an #EogWindow displaying the first
     * image in the list is already open, this will be used. Otherwise, an empty
     * #EogWindow is used, either already existing or newly created.
     * If the EOG_STARTUP_SINGLE_WINDOW flag is set, the files are opened in the
     * first #EogWindow and no new one is opened.
     * @param file_list A list of #GFile<!-- -->s.
     * @param timestamp The timestamp of the user interaction which triggered this call (see gtk_window_present_with_time()).
     * @param flags A set of #EogStartupFlags influencing a new windows' state.
     */
    open_file_list(file_list: Gio.File[], timestamp: number, flags: StartupFlags): boolean
    /**
     * Opens a list of images, from a list of URIs. See
     * eog_application_open_file_list() for details.
     * @param uri_list A list of URIs.
     * @param timestamp The timestamp of the user interaction which triggered this call (see gtk_window_present_with_time()).
     * @param flags A set of #EogStartupFlags influencing a new windows' state.
     */
    open_uri_list(uri_list: string[], timestamp: number, flags: StartupFlags): boolean
    /**
     * Opens a list of images, from a list of URI strings. See
     * eog_application_open_file_list() for details.
     * @param uris A #GList of URI strings.
     * @param timestamp The timestamp of the user interaction which triggered this call (see gtk_window_present_with_time()).
     * @param flags A set of #EogStartupFlags influencing a new windows' state.
     */
    open_uris(uris: string, timestamp: number, flags: StartupFlags): boolean
    /**
     * Opens and presents an empty #EogWindow to the user. If there is
     * an empty window already open, this will be used. Otherwise, a
     * new one will be instantiated.
     * @param timestamp The timestamp of the user interaction which triggered this call (see gtk_window_present_with_time()).
     * @param flags A set of #EogStartupFlags influencing a new windows' state.
     */
    open_window(timestamp: number, flags: StartupFlags): boolean

    // Class property signals of Eog-3.0.Eog.Application

    connect(sigName: "notify::active-window", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-window", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-window", ...args: any[]): void
    connect(sigName: "notify::app-menu", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-menu", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-menu", ...args: any[]): void
    connect(sigName: "notify::menubar", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menubar", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::menubar", ...args: any[]): void
    connect(sigName: "notify::register-session", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::register-session", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::register-session", ...args: any[]): void
    connect(sigName: "notify::screensaver-active", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screensaver-active", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::screensaver-active", ...args: any[]): void
    connect(sigName: "notify::action-group", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-group", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-group", ...args: any[]): void
    connect(sigName: "notify::application-id", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-id", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application-id", ...args: any[]): void
    connect(sigName: "notify::flags", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::inactivity-timeout", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inactivity-timeout", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inactivity-timeout", ...args: any[]): void
    connect(sigName: "notify::is-busy", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-busy", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-busy", ...args: any[]): void
    connect(sigName: "notify::is-registered", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-registered", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-registered", ...args: any[]): void
    connect(sigName: "notify::is-remote", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-remote", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-remote", ...args: any[]): void
    connect(sigName: "notify::resource-base-path", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-base-path", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resource-base-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Application extends Gtk.Application {

    // Own properties of Eog-3.0.Eog.Application

    static name: string
    static $gtype: GObject.GType<Application>

    // Constructors of Eog-3.0.Eog.Application

    constructor(config?: Application_ConstructProps) 
    _init(config?: Application_ConstructProps): void
    /**
     * Returns a singleton instance of #EogApplication currently running.
     * If not running yet, it will create one.
     */
    static get_instance(): Application

    // Conflicting static methods

    static new(...args: any[]): any
}

interface ClipboardHandler_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {

    // Own constructor properties of Eog-3.0.Eog.ClipboardHandler

    pixbuf?: GdkPixbuf.Pixbuf | null
    uri?: string | null
}

interface ClipboardHandler {

    // Own properties of Eog-3.0.Eog.ClipboardHandler

    readonly pixbuf: GdkPixbuf.Pixbuf
    readonly uri: string

    // Own fields of Eog-3.0.Eog.ClipboardHandler

    parent: GObject.Object
    priv: ClipboardHandlerPrivate

    // Owm methods of Eog-3.0.Eog.ClipboardHandler

    copy_to_clipboard(clipboard: Gtk.Clipboard): void

    // Class property signals of Eog-3.0.Eog.ClipboardHandler

    connect(sigName: "notify::pixbuf", callback: (($obj: ClipboardHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf", callback: (($obj: ClipboardHandler, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixbuf", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (($obj: ClipboardHandler, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: ClipboardHandler, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ClipboardHandler extends GObject.InitiallyUnowned {

    // Own properties of Eog-3.0.Eog.ClipboardHandler

    static name: string
    static $gtype: GObject.GType<ClipboardHandler>

    // Constructors of Eog-3.0.Eog.ClipboardHandler

    constructor(config?: ClipboardHandler_ConstructProps) 
    constructor(img: Image) 
    static new(img: Image): ClipboardHandler
    _init(config?: ClipboardHandler_ConstructProps): void
}

interface DetailsDialog_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Window_ConstructProps {
}

interface DetailsDialog extends Atk.ImplementorIface, Gtk.Buildable {

    // Own fields of Eog-3.0.Eog.DetailsDialog

    window: Gtk.Window
    priv: DetailsDialogPrivate

    // Owm methods of Eog-3.0.Eog.DetailsDialog

    update(image: Image): void

    // Conflicting methods

    mnemonic_activate(...args: any[]): any
    child_notify(...args: any[]): any

    // Class property signals of Eog-3.0.Eog.DetailsDialog

    connect(sigName: "notify::accept-focus", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-focus", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accept-focus", ...args: any[]): void
    connect(sigName: "notify::application", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::attached-to", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attached-to", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attached-to", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::default-height", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-height", ...args: any[]): void
    connect(sigName: "notify::default-width", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-width", ...args: any[]): void
    connect(sigName: "notify::deletable", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::deletable", ...args: any[]): void
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::destroy-with-parent", ...args: any[]): void
    connect(sigName: "notify::focus-on-map", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-map", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-map", ...args: any[]): void
    connect(sigName: "notify::focus-visible", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-visible", ...args: any[]): void
    connect(sigName: "notify::gravity", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gravity", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gravity", ...args: any[]): void
    connect(sigName: "notify::has-resize-grip", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-resize-grip", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-resize-grip", ...args: any[]): void
    connect(sigName: "notify::has-toplevel-focus", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-toplevel-focus", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-toplevel-focus", ...args: any[]): void
    connect(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hide-titlebar-when-maximized", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-active", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-active", ...args: any[]): void
    connect(sigName: "notify::is-maximized", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-maximized", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-maximized", ...args: any[]): void
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mnemonics-visible", ...args: any[]): void
    connect(sigName: "notify::modal", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::resizable", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resizable", ...args: any[]): void
    connect(sigName: "notify::resize-grip-visible", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-grip-visible", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-grip-visible", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::screen", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: "notify::skip-pager-hint", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-pager-hint", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-pager-hint", ...args: any[]): void
    connect(sigName: "notify::skip-taskbar-hint", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-taskbar-hint", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-taskbar-hint", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::startup-id", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::transient-for", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transient-for", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::type-hint", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-hint", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-hint", ...args: any[]): void
    connect(sigName: "notify::urgency-hint", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgency-hint", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::urgency-hint", ...args: any[]): void
    connect(sigName: "notify::window-position", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-position", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-position", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: DetailsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class DetailsDialog extends Gtk.Window {

    // Own properties of Eog-3.0.Eog.DetailsDialog

    static name: string
    static $gtype: GObject.GType<DetailsDialog>

    // Constructors of Eog-3.0.Eog.DetailsDialog

    constructor(config?: DetailsDialog_ConstructProps) 
    /**
     * If %parent implements #GActionMap its actions will be automatically
     * inserted in the "win" namespace.
     * @constructor 
     * @param parent the dialog's parent window
     */
    constructor(parent: Gtk.Window) 
    /**
     * If %parent implements #GActionMap its actions will be automatically
     * inserted in the "win" namespace.
     * @constructor 
     * @param parent the dialog's parent window
     */
    static new(parent: Gtk.Window): DetailsDialog

    // Overloads of new

    /**
     * Creates a new #GtkWindow, which is a toplevel window that can
     * contain other widgets. Nearly always, the type of the window should
     * be #GTK_WINDOW_TOPLEVEL. If you’re implementing something like a
     * popup menu from scratch (which is a bad idea, just use #GtkMenu),
     * you might use #GTK_WINDOW_POPUP. #GTK_WINDOW_POPUP is not for
     * dialogs, though in some other toolkits dialogs are called “popups”.
     * In GTK+, #GTK_WINDOW_POPUP means a pop-up menu or pop-up tooltip.
     * On X11, popup windows are not controlled by the
     * [window manager][gtk-X11-arch].
     * 
     * If you simply want an undecorated window (no window borders), use
     * gtk_window_set_decorated(), don’t use #GTK_WINDOW_POPUP.
     * 
     * All top-level windows created by gtk_window_new() are stored in
     * an internal top-level window list.  This list can be obtained from
     * gtk_window_list_toplevels().  Due to Gtk+ keeping a reference to
     * the window internally, gtk_window_new() does not return a reference
     * to the caller.
     * 
     * To delete a #GtkWindow, call gtk_widget_destroy().
     * @constructor 
     * @param type type of window
     */
    static new(type: Gtk.WindowType): Gtk.Window
    _init(config?: DetailsDialog_ConstructProps): void
}

interface FileChooser_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.FileChooser_ConstructProps, Gtk.FileChooserDialog_ConstructProps {
}

interface FileChooser extends Atk.ImplementorIface, Gtk.Buildable, Gtk.FileChooser {

    // Conflicting properties

    window: any
    parent_instance: any

    // Own fields of Eog-3.0.Eog.FileChooser

    parent: Gtk.FileChooserDialog
    priv: FileChooserPrivate

    // Owm methods of Eog-3.0.Eog.FileChooser

    get_format(): GdkPixbuf.PixbufFormat

    // Conflicting methods

    mnemonic_activate(...args: any[]): any
    child_notify(...args: any[]): any

    // Class property signals of Eog-3.0.Eog.FileChooser

    connect(sigName: "notify::use-header-bar", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-header-bar", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-header-bar", ...args: any[]): void
    connect(sigName: "notify::accept-focus", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-focus", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accept-focus", ...args: any[]): void
    connect(sigName: "notify::application", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::attached-to", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attached-to", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attached-to", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::default-height", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-height", ...args: any[]): void
    connect(sigName: "notify::default-width", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-width", ...args: any[]): void
    connect(sigName: "notify::deletable", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::deletable", ...args: any[]): void
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::destroy-with-parent", ...args: any[]): void
    connect(sigName: "notify::focus-on-map", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-map", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-map", ...args: any[]): void
    connect(sigName: "notify::focus-visible", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-visible", ...args: any[]): void
    connect(sigName: "notify::gravity", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gravity", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gravity", ...args: any[]): void
    connect(sigName: "notify::has-resize-grip", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-resize-grip", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-resize-grip", ...args: any[]): void
    connect(sigName: "notify::has-toplevel-focus", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-toplevel-focus", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-toplevel-focus", ...args: any[]): void
    connect(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hide-titlebar-when-maximized", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-active", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-active", ...args: any[]): void
    connect(sigName: "notify::is-maximized", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-maximized", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-maximized", ...args: any[]): void
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mnemonics-visible", ...args: any[]): void
    connect(sigName: "notify::modal", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::resizable", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resizable", ...args: any[]): void
    connect(sigName: "notify::resize-grip-visible", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-grip-visible", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-grip-visible", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::screen", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: "notify::skip-pager-hint", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-pager-hint", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-pager-hint", ...args: any[]): void
    connect(sigName: "notify::skip-taskbar-hint", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-taskbar-hint", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-taskbar-hint", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::startup-id", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::transient-for", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transient-for", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::type-hint", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-hint", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-hint", ...args: any[]): void
    connect(sigName: "notify::urgency-hint", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgency-hint", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::urgency-hint", ...args: any[]): void
    connect(sigName: "notify::window-position", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-position", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-position", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::action", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action", ...args: any[]): void
    connect(sigName: "notify::create-folders", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::create-folders", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::create-folders", ...args: any[]): void
    connect(sigName: "notify::do-overwrite-confirmation", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::do-overwrite-confirmation", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::do-overwrite-confirmation", ...args: any[]): void
    connect(sigName: "notify::extra-widget", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::extra-widget", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::extra-widget", ...args: any[]): void
    connect(sigName: "notify::filter", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filter", ...args: any[]): void
    connect(sigName: "notify::local-only", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local-only", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::local-only", ...args: any[]): void
    connect(sigName: "notify::preview-widget", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preview-widget", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::preview-widget", ...args: any[]): void
    connect(sigName: "notify::preview-widget-active", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::preview-widget-active", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::preview-widget-active", ...args: any[]): void
    connect(sigName: "notify::select-multiple", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::select-multiple", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::select-multiple", ...args: any[]): void
    connect(sigName: "notify::show-hidden", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-hidden", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-hidden", ...args: any[]): void
    connect(sigName: "notify::use-preview-label", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-preview-label", callback: (($obj: FileChooser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-preview-label", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FileChooser extends Gtk.FileChooserDialog {

    // Own properties of Eog-3.0.Eog.FileChooser

    static name: string
    static $gtype: GObject.GType<FileChooser>

    // Constructors of Eog-3.0.Eog.FileChooser

    constructor(config?: FileChooser_ConstructProps) 
    constructor(action: Gtk.FileChooserAction) 
    static new(action: Gtk.FileChooserAction): FileChooser

    // Overloads of new

    /**
     * Creates a new dialog box.
     * 
     * Widgets should not be packed into this #GtkWindow
     * directly, but into the `vbox` and `action_area,` as described above.
     * @constructor 
     */
    static new(): Gtk.Dialog
    /**
     * Creates a new #GtkWindow, which is a toplevel window that can
     * contain other widgets. Nearly always, the type of the window should
     * be #GTK_WINDOW_TOPLEVEL. If you’re implementing something like a
     * popup menu from scratch (which is a bad idea, just use #GtkMenu),
     * you might use #GTK_WINDOW_POPUP. #GTK_WINDOW_POPUP is not for
     * dialogs, though in some other toolkits dialogs are called “popups”.
     * In GTK+, #GTK_WINDOW_POPUP means a pop-up menu or pop-up tooltip.
     * On X11, popup windows are not controlled by the
     * [window manager][gtk-X11-arch].
     * 
     * If you simply want an undecorated window (no window borders), use
     * gtk_window_set_decorated(), don’t use #GTK_WINDOW_POPUP.
     * 
     * All top-level windows created by gtk_window_new() are stored in
     * an internal top-level window list.  This list can be obtained from
     * gtk_window_list_toplevels().  Due to Gtk+ keeping a reference to
     * the window internally, gtk_window_new() does not return a reference
     * to the caller.
     * 
     * To delete a #GtkWindow, call gtk_widget_destroy().
     * @constructor 
     * @param type type of window
     */
    static new(type: Gtk.WindowType): Gtk.Window
    _init(config?: FileChooser_ConstructProps): void
}

interface Image_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `changed`
 */
interface Image_ChangedSignalCallback {
    ($obj: Image): void
}

/**
 * Signal callback interface for `file-changed`
 */
interface Image_FileChangedSignalCallback {
    ($obj: Image): void
}

/**
 * Signal callback interface for `next-frame`
 */
interface Image_NextFrameSignalCallback {
    ($obj: Image, delay: number): void
}

/**
 * Signal callback interface for `save-progress`
 */
interface Image_SaveProgressSignalCallback {
    ($obj: Image, object: number): void
}

/**
 * Signal callback interface for `size-prepared`
 */
interface Image_SizePreparedSignalCallback {
    ($obj: Image, object: number, p0: number): void
}

/**
 * Signal callback interface for `thumbnail-changed`
 */
interface Image_ThumbnailChangedSignalCallback {
    ($obj: Image): void
}

interface Image {

    // Own fields of Eog-3.0.Eog.Image

    parent: GObject.Object
    priv: ImagePrivate

    // Owm methods of Eog-3.0.Eog.Image

    autorotate(): void
    cancel_load(): void
    data_ref(): void
    data_unref(): void
    /**
     * Marks the image file contents as changed. Also, emits
     * EogImage::file-changed signal.
     */
    file_changed(): void
    /**
     * Get `img` autorotate transform.
     */
    get_autorotate_transform(): Transform
    get_bytes(): number
    get_caption(): string
    get_collate_key(): string
    /**
     * Gets the #GFile associated with `img`
     */
    get_file(): Gio.File
    /**
     * Returns the current status of the image metadata, that is,
     * whether the metadata has not been read yet, is ready, or not available at all.
     */
    get_metadata_status(): ImageMetadataStatus
    /**
     * Gets the #GdkPixbuf of the image
     */
    get_pixbuf(): GdkPixbuf.Pixbuf
    get_size(width: number, height: number): void
    get_status(): ImageStatus
    /**
     * Gets the thumbnail pixbuf for `img`
     */
    get_thumbnail(): GdkPixbuf.Pixbuf
    /**
     * Get `img` transform.
     */
    get_transform(): Transform
    get_uri_for_display(): string
    has_data(data: ImageData): boolean
    /**
     * Checks whether a given image is animated.
     */
    is_animation(): boolean
    is_file_changed(): boolean
    /**
     * Evaluate if the user has write permission on the image file.
     */
    is_file_writable(): boolean
    is_jpeg(): boolean
    is_modified(): boolean
    /**
     * Check whether the image actually contains multiple images/pages.
     * This can happen for TIFF files. GIF animations are not multipaged.
     * 
     * Note that this only works if the image data is loaded.
     */
    is_multipaged(): boolean
    load(data2read: ImageData, job: Job): boolean
    modified(): void
    save_as_by_info(source: ImageSaveInfo, target: ImageSaveInfo): boolean
    save_by_info(source: ImageSaveInfo): boolean
    set_thumbnail(pixbuf: GdkPixbuf.Pixbuf): void
    /**
     * Starts playing an animated image.
     */
    start_animation(): boolean
    transform(trans: Transform, job: Job): void
    undo(): void

    // Own virtual methods of Eog-3.0.Eog.Image

    vfunc_changed(): void
    /**
     * Marks the image file contents as changed. Also, emits
     * EogImage::file-changed signal.
     * @virtual 
     */
    vfunc_file_changed(): void
    vfunc_next_frame(delay: number): void
    vfunc_save_progress(progress: number): void
    vfunc_size_prepared(width: number, height: number): void
    vfunc_thumbnail_changed(): void

    // Own signals of Eog-3.0.Eog.Image

    connect(sigName: "changed", callback: Image_ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: Image_ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "file-changed", callback: Image_FileChangedSignalCallback): number
    connect_after(sigName: "file-changed", callback: Image_FileChangedSignalCallback): number
    emit(sigName: "file-changed", ...args: any[]): void
    connect(sigName: "next-frame", callback: Image_NextFrameSignalCallback): number
    connect_after(sigName: "next-frame", callback: Image_NextFrameSignalCallback): number
    emit(sigName: "next-frame", delay: number, ...args: any[]): void
    connect(sigName: "save-progress", callback: Image_SaveProgressSignalCallback): number
    connect_after(sigName: "save-progress", callback: Image_SaveProgressSignalCallback): number
    emit(sigName: "save-progress", object: number, ...args: any[]): void
    connect(sigName: "size-prepared", callback: Image_SizePreparedSignalCallback): number
    connect_after(sigName: "size-prepared", callback: Image_SizePreparedSignalCallback): number
    emit(sigName: "size-prepared", object: number, p0: number, ...args: any[]): void
    connect(sigName: "thumbnail-changed", callback: Image_ThumbnailChangedSignalCallback): number
    connect_after(sigName: "thumbnail-changed", callback: Image_ThumbnailChangedSignalCallback): number
    emit(sigName: "thumbnail-changed", ...args: any[]): void

    // Class property signals of Eog-3.0.Eog.Image

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Image extends GObject.Object {

    // Own properties of Eog-3.0.Eog.Image

    static name: string
    static $gtype: GObject.GType<Image>

    // Constructors of Eog-3.0.Eog.Image

    constructor(config?: Image_ConstructProps) 
    static new_file(file: Gio.File, caption: string): Image
    _init(config?: Image_ConstructProps): void
    /**
     * Gets the list of supported mimetypes
     */
    static get_supported_mime_types(): string[]
    static is_supported_mime_type(mime_type: string): boolean
}

interface ImageSaveInfo_ConstructProps extends GObject.Object_ConstructProps {
}

interface ImageSaveInfo {

    // Own fields of Eog-3.0.Eog.ImageSaveInfo

    parent: GObject.Object
    file: Gio.File
    format: string
    exists: boolean
    local: boolean
    has_metadata: boolean
    modified: boolean
    overwrite: boolean
    jpeg_quality: number

    // Class property signals of Eog-3.0.Eog.ImageSaveInfo

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ImageSaveInfo extends GObject.Object {

    // Own properties of Eog-3.0.Eog.ImageSaveInfo

    static name: string
    static $gtype: GObject.GType<ImageSaveInfo>

    // Constructors of Eog-3.0.Eog.ImageSaveInfo

    constructor(config?: ImageSaveInfo_ConstructProps) 
    static new_from_file(file: Gio.File, format: GdkPixbuf.PixbufFormat): ImageSaveInfo
    static new_from_image(image: Image): ImageSaveInfo
    static new_from_uri(uri: string, format: GdkPixbuf.PixbufFormat): ImageSaveInfo
    _init(config?: ImageSaveInfo_ConstructProps): void
}

interface Job_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `cancelled`
 */
interface Job_CancelledSignalCallback {
    ($obj: Job): void
}

/**
 * Signal callback interface for `finished`
 */
interface Job_FinishedSignalCallback {
    ($obj: Job): void
}

/**
 * Signal callback interface for `progress`
 */
interface Job_ProgressSignalCallback {
    ($obj: Job, object: number): void
}

interface Job {

    // Own fields of Eog-3.0.Eog.Job

    parent: GObject.Object
    cancellable: Gio.Cancellable
    error: GLib.Error
    mutex: GLib.Mutex
    progress: number
    cancelled: boolean
    finished: boolean

    // Owm methods of Eog-3.0.Eog.Job

    cancel(): void
    get_progress(): number
    is_cancelled(): boolean
    is_finished(): boolean
    run(): void
    scheduler_add_job(): void
    scheduler_add_job_with_priority(priority: JobPriority): void
    set_progress(progress: number): void

    // Own virtual methods of Eog-3.0.Eog.Job

    vfunc_cancelled(): void
    vfunc_finished(): void
    vfunc_progress(progress: number): void
    vfunc_run(): void

    // Own signals of Eog-3.0.Eog.Job

    connect(sigName: "cancelled", callback: Job_CancelledSignalCallback): number
    connect_after(sigName: "cancelled", callback: Job_CancelledSignalCallback): number
    emit(sigName: "cancelled", ...args: any[]): void
    connect(sigName: "finished", callback: Job_FinishedSignalCallback): number
    connect_after(sigName: "finished", callback: Job_FinishedSignalCallback): number
    emit(sigName: "finished", ...args: any[]): void
    connect(sigName: "progress", callback: Job_ProgressSignalCallback): number
    connect_after(sigName: "progress", callback: Job_ProgressSignalCallback): number
    emit(sigName: "progress", object: number, ...args: any[]): void

    // Class property signals of Eog-3.0.Eog.Job

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Job extends GObject.Object {

    // Own properties of Eog-3.0.Eog.Job

    static name: string
    static $gtype: GObject.GType<Job>

    // Constructors of Eog-3.0.Eog.Job

    constructor(config?: Job_ConstructProps) 
    _init(config?: Job_ConstructProps): void
    static scheduler_init(): void
}

interface JobCopy_ConstructProps extends Job_ConstructProps {
}

interface JobCopy {

    // Own fields of Eog-3.0.Eog.JobCopy

    parent: Job
    images: object[]
    destination: string
    current_position: number

    // Class property signals of Eog-3.0.Eog.JobCopy

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class JobCopy extends Job {

    // Own properties of Eog-3.0.Eog.JobCopy

    static name: string
    static $gtype: GObject.GType<JobCopy>

    // Constructors of Eog-3.0.Eog.JobCopy

    constructor(config?: JobCopy_ConstructProps) 
    /**
     * Creates a new #EogJob.
     * @constructor 
     * @param images a #EogImage list
     * @param destination destination path for the copy
     */
    constructor(images: Image[], destination: string) 
    /**
     * Creates a new #EogJob.
     * @constructor 
     * @param images a #EogImage list
     * @param destination destination path for the copy
     */
    static new(images: Image[], destination: string): JobCopy
    _init(config?: JobCopy_ConstructProps): void
}

interface JobLoad_ConstructProps extends Job_ConstructProps {
}

interface JobLoad {

    // Own fields of Eog-3.0.Eog.JobLoad

    parent: Job
    image: Image
    data: ImageData

    // Class property signals of Eog-3.0.Eog.JobLoad

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class JobLoad extends Job {

    // Own properties of Eog-3.0.Eog.JobLoad

    static name: string
    static $gtype: GObject.GType<JobLoad>

    // Constructors of Eog-3.0.Eog.JobLoad

    constructor(config?: JobLoad_ConstructProps) 
    constructor(image: Image, data: ImageData) 
    static new(image: Image, data: ImageData): JobLoad
    _init(config?: JobLoad_ConstructProps): void
}

interface JobModel_ConstructProps extends Job_ConstructProps {
}

interface JobModel {

    // Own fields of Eog-3.0.Eog.JobModel

    parent: Job
    store: ListStore
    file_list: object[]

    // Class property signals of Eog-3.0.Eog.JobModel

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class JobModel extends Job {

    // Own properties of Eog-3.0.Eog.JobModel

    static name: string
    static $gtype: GObject.GType<JobModel>

    // Constructors of Eog-3.0.Eog.JobModel

    constructor(config?: JobModel_ConstructProps) 
    /**
     * Creates a new #EogJob model.
     * @constructor 
     * @param file_list a #GFile list
     */
    constructor(file_list: Gio.File[]) 
    /**
     * Creates a new #EogJob model.
     * @constructor 
     * @param file_list a #GFile list
     */
    static new(file_list: Gio.File[]): JobModel
    _init(config?: JobModel_ConstructProps): void
}

interface JobSave_ConstructProps extends Job_ConstructProps {
}

interface JobSave {

    // Own fields of Eog-3.0.Eog.JobSave

    parent: Job
    images: object[]
    current_image: Image
    current_position: number

    // Class property signals of Eog-3.0.Eog.JobSave

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class JobSave extends Job {

    // Own properties of Eog-3.0.Eog.JobSave

    static name: string
    static $gtype: GObject.GType<JobSave>

    // Constructors of Eog-3.0.Eog.JobSave

    constructor(config?: JobSave_ConstructProps) 
    /**
     * Creates a new #EogJob for image saving.
     * @constructor 
     * @param images a #EogImage list
     */
    constructor(images: Image[]) 
    /**
     * Creates a new #EogJob for image saving.
     * @constructor 
     * @param images a #EogImage list
     */
    static new(images: Image[]): JobSave
    _init(config?: JobSave_ConstructProps): void
}

interface JobSaveAs_ConstructProps extends JobSave_ConstructProps {
}

interface JobSaveAs {

    // Own fields of Eog-3.0.Eog.JobSaveAs

    parent: JobSave
    converter: URIConverter
    file: Gio.File

    // Class property signals of Eog-3.0.Eog.JobSaveAs

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class JobSaveAs extends JobSave {

    // Own properties of Eog-3.0.Eog.JobSaveAs

    static name: string
    static $gtype: GObject.GType<JobSaveAs>

    // Constructors of Eog-3.0.Eog.JobSaveAs

    constructor(config?: JobSaveAs_ConstructProps) 
    /**
     * Creates a new #EogJog for save as.
     * @constructor 
     * @param images a #EogImage list
     * @param converter a URI converter file: a #GFile
     * @param file 
     */
    constructor(images: Image[], converter: URIConverter, file: Gio.File) 
    /**
     * Creates a new #EogJog for save as.
     * @constructor 
     * @param images a #EogImage list
     * @param converter a URI converter file: a #GFile
     * @param file 
     */
    static new(images: Image[], converter: URIConverter, file: Gio.File): JobSaveAs

    // Overloads of new

    /**
     * Creates a new #EogJob for image saving.
     * @constructor 
     * @param images a #EogImage list
     */
    static new(images: Image[]): JobSave
    _init(config?: JobSaveAs_ConstructProps): void
}

interface JobThumbnail_ConstructProps extends Job_ConstructProps {
}

interface JobThumbnail {

    // Own fields of Eog-3.0.Eog.JobThumbnail

    parent: Job
    image: Image
    thumbnail: GdkPixbuf.Pixbuf

    // Class property signals of Eog-3.0.Eog.JobThumbnail

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class JobThumbnail extends Job {

    // Own properties of Eog-3.0.Eog.JobThumbnail

    static name: string
    static $gtype: GObject.GType<JobThumbnail>

    // Constructors of Eog-3.0.Eog.JobThumbnail

    constructor(config?: JobThumbnail_ConstructProps) 
    constructor(image: Image) 
    static new(image: Image): JobThumbnail
    _init(config?: JobThumbnail_ConstructProps): void
}

interface JobTransform_ConstructProps extends Job_ConstructProps {
}

interface JobTransform {

    // Own fields of Eog-3.0.Eog.JobTransform

    parent: Job
    images: object[]
    transform: Transform

    // Class property signals of Eog-3.0.Eog.JobTransform

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class JobTransform extends Job {

    // Own properties of Eog-3.0.Eog.JobTransform

    static name: string
    static $gtype: GObject.GType<JobTransform>

    // Constructors of Eog-3.0.Eog.JobTransform

    constructor(config?: JobTransform_ConstructProps) 
    /**
     * Create a new #EogJob for image transformation.
     * @constructor 
     * @param images a #EogImage list
     * @param transform a #EogTransform
     */
    constructor(images: Image[], transform: Transform) 
    /**
     * Create a new #EogJob for image transformation.
     * @constructor 
     * @param images a #EogImage list
     * @param transform a #EogTransform
     */
    static new(images: Image[], transform: Transform): JobTransform
    _init(config?: JobTransform_ConstructProps): void
}

interface ListStore_ConstructProps extends Gtk.Buildable_ConstructProps, Gtk.TreeDragDest_ConstructProps, Gtk.TreeDragSource_ConstructProps, Gtk.TreeModel_ConstructProps, Gtk.TreeSortable_ConstructProps, Gtk.ListStore_ConstructProps {
}

/**
 * Signal callback interface for `draw-thumbnail`
 */
interface ListStore_DrawThumbnailSignalCallback {
    ($obj: ListStore): void
}

interface ListStore extends Gtk.Buildable, Gtk.TreeDragDest, Gtk.TreeDragSource, Gtk.TreeModel, Gtk.TreeSortable {

    // Own fields of Eog-3.0.Eog.ListStore

    parent: Gtk.ListStore
    priv: ListStorePrivate

    // Owm methods of Eog-3.0.Eog.ListStore

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
    add_files(file_list: Gio.File[]): void
    /**
     * Adds an #EogImage to `store`. The thumbnail of the image is not
     * loaded and will only be loaded if the thumbnail is made visible.
     * @param image An #EogImage.
     */
    append_image(image: Image): void
    /**
     * Gets the #EogImage in the position `pos` of `store`. If there is
     * no image at position `pos,` %NULL is returned.
     * @param pos the position of the required #EogImage.
     */
    get_image_by_pos(pos: number): Image
    /**
     * Gets the position of the #EogImage that should be loaded first.
     * If not set, it returns -1.
     */
    get_initial_pos(): number
    /**
     * Gets the position where `image` is stored in `store`. If `image`
     * is not stored in `store,` -1 is returned.
     * @param image An #EogImage.
     */
    get_pos_by_image(image: Image): number
    /**
     * Gets the position of the image pointed by `iter`.
     * @param iter A #GtkTreeIter pointing to an image in `store`.
     */
    get_pos_by_iter(iter: Gtk.TreeIter): number
    /**
     * Returns the number of images in the store.
     */
    length(): number
    /**
     * Removes `image` from `store`.
     * @param image An #EogImage.
     */
    remove_image(image: Image): void
    /**
     * Refreshes the thumbnail for the image pointed by `iter`.
     * @param iter A #GtkTreeIter pointing to an image in `store`.
     */
    thumbnail_refresh(iter: Gtk.TreeIter): void
    /**
     * Sets the thumbnail for the image pointed by `iter`.
     * @param iter A #GtkTreeIter pointing to an image in `store`.
     */
    thumbnail_set(iter: Gtk.TreeIter): void
    /**
     * Unsets the thumbnail for the image pointed by `iter,` changing
     * it to a "busy" icon.
     * @param iter A #GtkTreeIter pointing to an image in `store`.
     */
    thumbnail_unset(iter: Gtk.TreeIter): void

    // Own virtual methods of Eog-3.0.Eog.ListStore

    vfunc_draw_thumbnail(): void

    // Own signals of Eog-3.0.Eog.ListStore

    connect(sigName: "draw-thumbnail", callback: ListStore_DrawThumbnailSignalCallback): number
    connect_after(sigName: "draw-thumbnail", callback: ListStore_DrawThumbnailSignalCallback): number
    emit(sigName: "draw-thumbnail", ...args: any[]): void

    // Class property signals of Eog-3.0.Eog.ListStore

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ListStore extends Gtk.ListStore {

    // Own properties of Eog-3.0.Eog.ListStore

    static name: string
    static $gtype: GObject.GType<ListStore>

    // Constructors of Eog-3.0.Eog.ListStore

    constructor(config?: ListStore_ConstructProps) 
    /**
     * Creates a new and empty #EogListStore.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new and empty #EogListStore.
     * @constructor 
     */
    static new(): ListStore

    // Overloads of new

    /**
     * Non-vararg creation function.  Used primarily by language bindings.
     * @constructor 
     * @param types an array of #GType types for the columns, from first to last
     */
    static new(types: GObject.GType[]): Gtk.ListStore
    /**
     * Creates a new #EogListStore from a list of #EogImage's.
     * The given list must be %NULL-terminated.
     * @constructor 
     * @param list a %NULL-terminated list of #EogImage's.
     */
    static new_from_glist(list: Image[]): ListStore
    _init(config?: ListStore_ConstructProps): void
}

interface RemotePresenter_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Window_ConstructProps {

    // Own constructor properties of Eog-3.0.Eog.RemotePresenter

    next_action?: string | null
    prev_action?: string | null
    thumbview?: ThumbView | null
}

interface RemotePresenter extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Eog-3.0.Eog.RemotePresenter

    readonly next_action: string
    readonly prev_action: string
    readonly thumbview: ThumbView

    // Own fields of Eog-3.0.Eog.RemotePresenter

    window: Gtk.Window
    priv: RemotePresenterPrivate

    // Owm methods of Eog-3.0.Eog.RemotePresenter

    update(image: Image): void

    // Conflicting methods

    mnemonic_activate(...args: any[]): any
    child_notify(...args: any[]): any

    // Class property signals of Eog-3.0.Eog.RemotePresenter

    connect(sigName: "notify::next-action", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::next-action", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::next-action", ...args: any[]): void
    connect(sigName: "notify::prev-action", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prev-action", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prev-action", ...args: any[]): void
    connect(sigName: "notify::thumbview", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::thumbview", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::thumbview", ...args: any[]): void
    connect(sigName: "notify::accept-focus", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-focus", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accept-focus", ...args: any[]): void
    connect(sigName: "notify::application", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::attached-to", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attached-to", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attached-to", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::default-height", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-height", ...args: any[]): void
    connect(sigName: "notify::default-width", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-width", ...args: any[]): void
    connect(sigName: "notify::deletable", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::deletable", ...args: any[]): void
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::destroy-with-parent", ...args: any[]): void
    connect(sigName: "notify::focus-on-map", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-map", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-map", ...args: any[]): void
    connect(sigName: "notify::focus-visible", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-visible", ...args: any[]): void
    connect(sigName: "notify::gravity", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gravity", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gravity", ...args: any[]): void
    connect(sigName: "notify::has-resize-grip", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-resize-grip", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-resize-grip", ...args: any[]): void
    connect(sigName: "notify::has-toplevel-focus", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-toplevel-focus", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-toplevel-focus", ...args: any[]): void
    connect(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hide-titlebar-when-maximized", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-active", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-active", ...args: any[]): void
    connect(sigName: "notify::is-maximized", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-maximized", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-maximized", ...args: any[]): void
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mnemonics-visible", ...args: any[]): void
    connect(sigName: "notify::modal", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::resizable", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resizable", ...args: any[]): void
    connect(sigName: "notify::resize-grip-visible", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-grip-visible", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-grip-visible", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::screen", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: "notify::skip-pager-hint", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-pager-hint", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-pager-hint", ...args: any[]): void
    connect(sigName: "notify::skip-taskbar-hint", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-taskbar-hint", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-taskbar-hint", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::startup-id", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::transient-for", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transient-for", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::type-hint", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-hint", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-hint", ...args: any[]): void
    connect(sigName: "notify::urgency-hint", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgency-hint", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::urgency-hint", ...args: any[]): void
    connect(sigName: "notify::window-position", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-position", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-position", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: RemotePresenter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RemotePresenter extends Gtk.Window {

    // Own properties of Eog-3.0.Eog.RemotePresenter

    static name: string
    static $gtype: GObject.GType<RemotePresenter>

    // Constructors of Eog-3.0.Eog.RemotePresenter

    constructor(config?: RemotePresenter_ConstructProps) 
    /**
     * If %parent implements #GActionMap its actions will be automatically
     * inserted in the "win" namespace.
     * @constructor 
     * @param parent the parent window
     * @param thumbview 
     * @param next_image_action 
     * @param previous_image_action 
     */
    constructor(parent: Gtk.Window, thumbview: ThumbView, next_image_action: string, previous_image_action: string) 
    /**
     * If %parent implements #GActionMap its actions will be automatically
     * inserted in the "win" namespace.
     * @constructor 
     * @param parent the parent window
     * @param thumbview 
     * @param next_image_action 
     * @param previous_image_action 
     */
    static new(parent: Gtk.Window, thumbview: ThumbView, next_image_action: string, previous_image_action: string): RemotePresenter

    // Overloads of new

    /**
     * Creates a new #GtkWindow, which is a toplevel window that can
     * contain other widgets. Nearly always, the type of the window should
     * be #GTK_WINDOW_TOPLEVEL. If you’re implementing something like a
     * popup menu from scratch (which is a bad idea, just use #GtkMenu),
     * you might use #GTK_WINDOW_POPUP. #GTK_WINDOW_POPUP is not for
     * dialogs, though in some other toolkits dialogs are called “popups”.
     * In GTK+, #GTK_WINDOW_POPUP means a pop-up menu or pop-up tooltip.
     * On X11, popup windows are not controlled by the
     * [window manager][gtk-X11-arch].
     * 
     * If you simply want an undecorated window (no window borders), use
     * gtk_window_set_decorated(), don’t use #GTK_WINDOW_POPUP.
     * 
     * All top-level windows created by gtk_window_new() are stored in
     * an internal top-level window list.  This list can be obtained from
     * gtk_window_list_toplevels().  Due to Gtk+ keeping a reference to
     * the window internally, gtk_window_new() does not return a reference
     * to the caller.
     * 
     * To delete a #GtkWindow, call gtk_widget_destroy().
     * @constructor 
     * @param type type of window
     */
    static new(type: Gtk.WindowType): Gtk.Window
    _init(config?: RemotePresenter_ConstructProps): void
}

interface ScrollView_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Scrollable_ConstructProps, Gtk.Overlay_ConstructProps {

    // Own constructor properties of Eog-3.0.Eog.ScrollView

    /**
     * If %TRUE the displayed image will be filtered in a second pass
     * while being zoomed in.
     */
    antialiasing_in?: boolean | null
    /**
     * If %TRUE the displayed image will be filtered in a second pass
     * while being zoomed out.
     */
    antialiasing_out?: boolean | null
    /**
     * This is the default background color used for painting the background
     * of the image view. If set to %NULL the color is determined by the
     * active GTK theme.
     */
    background_color?: Gdk.RGBA | null
    /**
     * This is the currently display #EogImage.
     */
    image?: Image | null
    /**
     * If %TRUE the scrollwheel will zoom the view, otherwise it will be
     * used for scrolling a zoomed image.
     */
    scrollwheel_zoom?: boolean | null
    /**
     * This is the color used to fill the transparent parts of an image
     * if #EogScrollView:transparency-style is set to %EOG_TRANSP_COLOR.
     */
    transparency_color?: Gdk.RGBA | null
    /**
     * Determines how to fill the shown image's transparent areas.
     */
    transparency_style?: TransparencyStyle | null
    use_background_color?: boolean | null
    zoom_mode?: ZoomMode | null
    /**
     * The current zoom factor is multiplied with this value + 1.0 when
     * scrolling with the scrollwheel to determine the next zoom factor.
     */
    zoom_multiplier?: number | null
}

/**
 * Signal callback interface for `next-image`
 */
interface ScrollView_NextImageSignalCallback {
    ($obj: ScrollView): void
}

/**
 * Signal callback interface for `previous-image`
 */
interface ScrollView_PreviousImageSignalCallback {
    ($obj: ScrollView): void
}

/**
 * Signal callback interface for `rotation-changed`
 */
interface ScrollView_RotationChangedSignalCallback {
    ($obj: ScrollView, object: number): void
}

/**
 * Signal callback interface for `zoom-changed`
 */
interface ScrollView_ZoomChangedSignalCallback {
    ($obj: ScrollView, object: number): void
}

interface ScrollView extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Own properties of Eog-3.0.Eog.ScrollView

    /**
     * If %TRUE the displayed image will be filtered in a second pass
     * while being zoomed in.
     */
    antialiasing_in: boolean
    /**
     * If %TRUE the displayed image will be filtered in a second pass
     * while being zoomed out.
     */
    antialiasing_out: boolean
    /**
     * This is the default background color used for painting the background
     * of the image view. If set to %NULL the color is determined by the
     * active GTK theme.
     */
    background_color: Gdk.RGBA
    /**
     * This is the currently display #EogImage.
     */
    image: Image
    /**
     * If %TRUE the scrollwheel will zoom the view, otherwise it will be
     * used for scrolling a zoomed image.
     */
    scrollwheel_zoom: boolean
    /**
     * This is the color used to fill the transparent parts of an image
     * if #EogScrollView:transparency-style is set to %EOG_TRANSP_COLOR.
     */
    transparency_color: Gdk.RGBA
    /**
     * Determines how to fill the shown image's transparent areas.
     */
    transparency_style: TransparencyStyle
    use_background_color: boolean
    zoom_mode: ZoomMode
    /**
     * The current zoom factor is multiplied with this value + 1.0 when
     * scrolling with the scrollwheel to determine the next zoom factor.
     */
    zoom_multiplier: number

    // Conflicting properties

    parent: any

    // Own fields of Eog-3.0.Eog.ScrollView

    base_instance: Gtk.Overlay
    priv: ScrollViewPrivate

    // Owm methods of Eog-3.0.Eog.ScrollView

    /**
     * Tells if `ev'`s originates from inside the image area. `view` must be
     * realized and have an image set for this to work.
     * 
     * It only works with #GdkEvent<!-- -->s that supply coordinate data,
     * i.e. #GdkEventButton.
     * @param ev A #GdkEvent which must have window-relative coordinates.
     */
    event_is_over_image(ev: Gdk.Event): boolean
    /**
     * Gets the currently displayed #EogImage.
     */
    get_image(): Image
    get_zoom(): number
    get_zoom_is_max(): boolean
    get_zoom_is_min(): boolean
    get_zoom_mode(): ZoomMode
    hide_cursor(): void
    is_image_movable(): boolean
    override_bg_color(color: Gdk.RGBA): void
    set_antialiasing_in(state: boolean): void
    set_antialiasing_out(state: boolean): void
    set_background_color(color: Gdk.RGBA): void
    set_image(image: Image): void
    set_popup(menu: Gtk.Menu): void
    set_scroll_wheel_zoom(scroll_wheel_zoom: boolean): void
    set_transparency(style: TransparencyStyle): void
    set_transparency_color(color: Gdk.RGBA): void
    set_use_bg_color(use: boolean): void
    set_zoom(zoom: number): void
    set_zoom_mode(mode: ZoomMode): void
    set_zoom_multiplier(multiplier: number): void
    set_zoom_upscale(upscale: boolean): void
    show_cursor(): void
    zoom_in(smooth: boolean): void
    zoom_out(smooth: boolean): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Own virtual methods of Eog-3.0.Eog.ScrollView

    vfunc_next_image(): void
    vfunc_previous_image(): void
    vfunc_rotation_changed(degrees: number): void
    vfunc_zoom_changed(zoom: number): void

    // Own signals of Eog-3.0.Eog.ScrollView

    connect(sigName: "next-image", callback: ScrollView_NextImageSignalCallback): number
    connect_after(sigName: "next-image", callback: ScrollView_NextImageSignalCallback): number
    emit(sigName: "next-image", ...args: any[]): void
    connect(sigName: "previous-image", callback: ScrollView_PreviousImageSignalCallback): number
    connect_after(sigName: "previous-image", callback: ScrollView_PreviousImageSignalCallback): number
    emit(sigName: "previous-image", ...args: any[]): void
    connect(sigName: "rotation-changed", callback: ScrollView_RotationChangedSignalCallback): number
    connect_after(sigName: "rotation-changed", callback: ScrollView_RotationChangedSignalCallback): number
    emit(sigName: "rotation-changed", object: number, ...args: any[]): void
    connect(sigName: "zoom-changed", callback: ScrollView_ZoomChangedSignalCallback): number
    connect_after(sigName: "zoom-changed", callback: ScrollView_ZoomChangedSignalCallback): number
    emit(sigName: "zoom-changed", object: number, ...args: any[]): void

    // Class property signals of Eog-3.0.Eog.ScrollView

    connect(sigName: "notify::antialiasing-in", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialiasing-in", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::antialiasing-in", ...args: any[]): void
    connect(sigName: "notify::antialiasing-out", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::antialiasing-out", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::antialiasing-out", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::image", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::image", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::image", ...args: any[]): void
    connect(sigName: "notify::scrollwheel-zoom", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scrollwheel-zoom", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scrollwheel-zoom", ...args: any[]): void
    connect(sigName: "notify::transparency-color", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transparency-color", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transparency-color", ...args: any[]): void
    connect(sigName: "notify::transparency-style", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transparency-style", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transparency-style", ...args: any[]): void
    connect(sigName: "notify::use-background-color", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-background-color", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-background-color", ...args: any[]): void
    connect(sigName: "notify::zoom-mode", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-mode", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::zoom-mode", ...args: any[]): void
    connect(sigName: "notify::zoom-multiplier", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-multiplier", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::zoom-multiplier", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: ScrollView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ScrollView extends Gtk.Overlay {

    // Own properties of Eog-3.0.Eog.ScrollView

    static name: string
    static $gtype: GObject.GType<ScrollView>

    // Constructors of Eog-3.0.Eog.ScrollView

    constructor(config?: ScrollView_ConstructProps) 
    constructor() 
    static new(): ScrollView
    _init(config?: ScrollView_ConstructProps): void
}

interface Sidebar_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Orientable_ConstructProps, Gtk.Box_ConstructProps {

    // Own constructor properties of Eog-3.0.Eog.Sidebar

    current_page?: Gtk.Widget | null
}

/**
 * Signal callback interface for `page-added`
 */
interface Sidebar_PageAddedSignalCallback {
    ($obj: Sidebar, object: Gtk.Widget): void
}

/**
 * Signal callback interface for `page-removed`
 */
interface Sidebar_PageRemovedSignalCallback {
    ($obj: Sidebar, object: Gtk.Widget): void
}

interface Sidebar extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Eog-3.0.Eog.Sidebar

    current_page: Gtk.Widget

    // Own fields of Eog-3.0.Eog.Sidebar

    base_instance: Gtk.Box
    priv: SidebarPrivate

    // Owm methods of Eog-3.0.Eog.Sidebar

    add_page(title: string, main_widget: Gtk.Widget): void
    get_n_pages(): number
    get_page_nr(): number
    is_empty(): boolean
    remove_page(main_widget: Gtk.Widget): void
    set_page(main_widget: Gtk.Widget): void
    set_page_nr(index: number): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Own virtual methods of Eog-3.0.Eog.Sidebar

    vfunc_page_added(main_widget: Gtk.Widget): void
    vfunc_page_removed(main_widget: Gtk.Widget): void

    // Own signals of Eog-3.0.Eog.Sidebar

    connect(sigName: "page-added", callback: Sidebar_PageAddedSignalCallback): number
    connect_after(sigName: "page-added", callback: Sidebar_PageAddedSignalCallback): number
    emit(sigName: "page-added", object: Gtk.Widget, ...args: any[]): void
    connect(sigName: "page-removed", callback: Sidebar_PageRemovedSignalCallback): number
    connect_after(sigName: "page-removed", callback: Sidebar_PageRemovedSignalCallback): number
    emit(sigName: "page-removed", object: Gtk.Widget, ...args: any[]): void

    // Class property signals of Eog-3.0.Eog.Sidebar

    connect(sigName: "notify::current-page", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-page", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-page", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: Sidebar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Sidebar extends Gtk.Box {

    // Own properties of Eog-3.0.Eog.Sidebar

    static name: string
    static $gtype: GObject.GType<Sidebar>

    // Constructors of Eog-3.0.Eog.Sidebar

    constructor(config?: Sidebar_ConstructProps) 
    constructor() 
    static new(): Sidebar

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: Sidebar_ConstructProps): void
}

interface Statusbar_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Orientable_ConstructProps, Gtk.Statusbar_ConstructProps {
}

interface Statusbar extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own fields of Eog-3.0.Eog.Statusbar

    parent: Gtk.Statusbar
    priv: StatusbarPrivate

    // Owm methods of Eog-3.0.Eog.Statusbar

    set_image_number(num: number, tot: number): void
    set_progress(progress: number): void

    // Conflicting methods

    remove(...args: any[]): any
    child_notify(...args: any[]): any

    // Class property signals of Eog-3.0.Eog.Statusbar

    connect(sigName: "notify::baseline-position", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: Statusbar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Statusbar extends Gtk.Statusbar {

    // Own properties of Eog-3.0.Eog.Statusbar

    static name: string
    static $gtype: GObject.GType<Statusbar>

    // Constructors of Eog-3.0.Eog.Statusbar

    constructor(config?: Statusbar_ConstructProps) 
    constructor() 
    static new(): Statusbar

    // Overloads of new

    /**
     * Creates a new #GtkStatusbar ready for messages.
     * @constructor 
     */
    static new(): Gtk.Statusbar
    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: Statusbar_ConstructProps): void
}

interface ThumbNav_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Orientable_ConstructProps, Gtk.Box_ConstructProps {

    // Own constructor properties of Eog-3.0.Eog.ThumbNav

    mode?: number | null
    show_buttons?: boolean | null
    thumbview?: ThumbView | null
}

interface ThumbNav extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Eog-3.0.Eog.ThumbNav

    mode: number
    show_buttons: boolean
    readonly thumbview: ThumbView

    // Own fields of Eog-3.0.Eog.ThumbNav

    base_instance: Gtk.Box
    priv: ThumbNavPrivate

    // Owm methods of Eog-3.0.Eog.ThumbNav

    /**
     * Gets the navigation mode in `nav`.
     */
    get_mode(): ThumbNavMode
    /**
     * Gets whether the navigation buttons are visible.
     */
    get_show_buttons(): boolean
    /**
     * Sets the navigation mode in `nav`. See #EogThumbNavMode for details.
     * @param mode One of #EogThumbNavMode.
     */
    set_mode(mode: ThumbNavMode): void
    /**
     * Sets whether the navigation buttons to the left and right of the
     * widget should be visible.
     * @param show_buttons %TRUE to show the buttons, %FALSE to hide them.
     */
    set_show_buttons(show_buttons: boolean): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Eog-3.0.Eog.ThumbNav

    connect(sigName: "notify::mode", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mode", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::show-buttons", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-buttons", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-buttons", ...args: any[]): void
    connect(sigName: "notify::thumbview", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::thumbview", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::thumbview", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: ThumbNav, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ThumbNav extends Gtk.Box {

    // Own properties of Eog-3.0.Eog.ThumbNav

    static name: string
    static $gtype: GObject.GType<ThumbNav>

    // Constructors of Eog-3.0.Eog.ThumbNav

    constructor(config?: ThumbNav_ConstructProps) 
    /**
     * Creates a new thumbnail navigation widget.
     * @constructor 
     * @param thumbview an #EogThumbView to embed in the navigation widget.
     * @param mode The navigation mode.
     * @param show_buttons Whether to show the navigation buttons.
     */
    constructor(thumbview: Gtk.Widget, mode: ThumbNavMode, show_buttons: boolean) 
    /**
     * Creates a new thumbnail navigation widget.
     * @constructor 
     * @param thumbview an #EogThumbView to embed in the navigation widget.
     * @param mode The navigation mode.
     * @param show_buttons Whether to show the navigation buttons.
     */
    static new(thumbview: Gtk.Widget, mode: ThumbNavMode, show_buttons: boolean): ThumbNav

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: ThumbNav_ConstructProps): void
}

interface ThumbView_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.CellLayout_ConstructProps, Gtk.Orientable_ConstructProps, Gtk.Scrollable_ConstructProps, Gtk.IconView_ConstructProps {
}

interface ThumbView extends Atk.ImplementorIface, Gtk.Buildable, Gtk.CellLayout, Gtk.Orientable, Gtk.Scrollable {

    // Own fields of Eog-3.0.Eog.ThumbView

    icon_view: Gtk.IconView
    priv: ThumbViewPrivate

    // Owm methods of Eog-3.0.Eog.ThumbView

    /**
     * Returns the first selected image. Note that the returned #EogImage
     * is not ensured to be really the first selected image in `thumbview,` but
     * generally, it will be.
     */
    get_first_selected_image(): Image
    /**
     * Gets the number of images that are currently selected in `thumbview`.
     */
    get_n_selected(): number
    /**
     * Gets a list with the currently selected images. Note that a new reference is
     * hold for each image and the list must be freed with g_list_free().
     */
    get_selected_images(): Image[]
    /**
     * Changes the current selection according to a single movement
     * described by #EogThumbViewSelectionChange. If there are no
     * thumbnails currently selected, one is selected according to the
     * natural selection according to the #EogThumbViewSelectionChange
     * used, p.g., when %EOG_THUMB_VIEW_SELECT_RIGHT is the selected change,
     * the first thumbnail will be selected.
     * @param change A #EogThumbViewSelectionChange, describing the desired selection change.
     */
    select_single(change: ThumbViewSelectionChange): void
    /**
     * Changes the status of a image, marking it as currently selected.
     * If `deselect_other` is %TRUE, all other selected images will be
     * deselected.
     * @param image The image to be selected.
     * @param deselect_other Whether to deselect currently selected images.
     */
    set_current_image(image: Image, deselect_other: boolean): void
    /**
     * Sets the height of each thumbnail in `thumbview`.
     * @param height The desired height.
     */
    set_item_height(height: number): void
    /**
     * Sets the #EogListStore to be used with `thumbview`. If an initial image
     * was set during `store` creation, its thumbnail will be selected and visible.
     * @param store A #EogListStore.
     */
    set_model(store: ListStore): void

    // Overloads of set_model

    /**
     * Sets the model for a #GtkIconView.
     * If the `icon_view` already has a model set, it will remove
     * it before setting the new model.  If `model` is %NULL, then
     * it will unset the old model.
     * @param model The model.
     */
    set_model(model: Gtk.TreeModel | null): void
    set_model(...args: any[]): any
    set_model(args_or_model: any[] | Gtk.TreeModel | null): void | any
    /**
     * Set the contextual menu to be used with the thumbnails in the
     * widget. This can be done only once.
     * @param menu A #GtkMenu.
     */
    set_thumbnail_popup(menu: Gtk.Menu): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Eog-3.0.Eog.ThumbView

    connect(sigName: "notify::activate-on-single-click", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::activate-on-single-click", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::activate-on-single-click", ...args: any[]): void
    connect(sigName: "notify::cell-area", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-area", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-area", ...args: any[]): void
    connect(sigName: "notify::column-spacing", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-spacing", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::columns", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::columns", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::columns", ...args: any[]): void
    connect(sigName: "notify::item-orientation", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::item-orientation", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::item-orientation", ...args: any[]): void
    connect(sigName: "notify::item-padding", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::item-padding", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::item-padding", ...args: any[]): void
    connect(sigName: "notify::item-width", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::item-width", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::item-width", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::markup-column", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::markup-column", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::markup-column", ...args: any[]): void
    connect(sigName: "notify::model", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::pixbuf-column", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixbuf-column", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixbuf-column", ...args: any[]): void
    connect(sigName: "notify::reorderable", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reorderable", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reorderable", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-spacing", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-spacing", ...args: any[]): void
    connect(sigName: "notify::selection-mode", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selection-mode", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selection-mode", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::text-column", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-column", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-column", ...args: any[]): void
    connect(sigName: "notify::tooltip-column", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-column", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-column", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: ThumbView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ThumbView extends Gtk.IconView {

    // Own properties of Eog-3.0.Eog.ThumbView

    static name: string
    static $gtype: GObject.GType<ThumbView>

    // Constructors of Eog-3.0.Eog.ThumbView

    constructor(config?: ThumbView_ConstructProps) 
    /**
     * Creates a new #EogThumbView object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #EogThumbView object.
     * @constructor 
     */
    static new(): ThumbView
    _init(config?: ThumbView_ConstructProps): void
}

interface Transform_ConstructProps extends GObject.Object_ConstructProps {
}

interface Transform {

    // Own fields of Eog-3.0.Eog.Transform

    parent: GObject.Object
    priv: TransformPrivate

    // Owm methods of Eog-3.0.Eog.Transform

    /**
     * Applies the transformation in `trans` to `pixbuf,` setting its progress in `job`.
     * @param pixbuf a #GdkPixbuf
     * @param job a #EogJob
     */
    apply(pixbuf: GdkPixbuf.Pixbuf, job: Job): GdkPixbuf.Pixbuf
    compose(compose: Transform): Transform
    get_affine(affine: cairo.Matrix): boolean
    get_transform_type(): TransformType
    is_identity(): boolean
    /**
     * Creates the reverse transformation of `trans`
     */
    reverse(): Transform

    // Class property signals of Eog-3.0.Eog.Transform

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Transform extends GObject.Object {

    // Own properties of Eog-3.0.Eog.Transform

    static name: string
    static $gtype: GObject.GType<Transform>

    // Constructors of Eog-3.0.Eog.Transform

    constructor(config?: Transform_ConstructProps) 
    static flip_new(type: TransformType): Transform
    static identity_new(): Transform
    constructor(trans: TransformType) 
    static new(trans: TransformType): Transform
    static rotate_new(degree: number): Transform
    _init(config?: Transform_ConstructProps): void
}

interface URIConverter_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Eog-3.0.Eog.URIConverter

    convert_spaces?: boolean | null
    counter_n_digits?: number | null
    counter_start?: number | null
    n_images?: number | null
    space_character?: number | null
}

interface URIConverter {

    // Own properties of Eog-3.0.Eog.URIConverter

    convert_spaces: boolean
    counter_n_digits: number
    counter_start: number
    n_images: number
    space_character: number

    // Own fields of Eog-3.0.Eog.URIConverter

    parent: GObject.Object
    priv: URIConverterPrivate

    // Owm methods of Eog-3.0.Eog.URIConverter

    check(img_list: Gio.File[]): boolean
    do(image: Image, file: Gio.File, format: GdkPixbuf.PixbufFormat): boolean
    print_list(): void
    requires_exif(): boolean

    // Class property signals of Eog-3.0.Eog.URIConverter

    connect(sigName: "notify::convert-spaces", callback: (($obj: URIConverter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::convert-spaces", callback: (($obj: URIConverter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::convert-spaces", ...args: any[]): void
    connect(sigName: "notify::counter-n-digits", callback: (($obj: URIConverter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::counter-n-digits", callback: (($obj: URIConverter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::counter-n-digits", ...args: any[]): void
    connect(sigName: "notify::counter-start", callback: (($obj: URIConverter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::counter-start", callback: (($obj: URIConverter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::counter-start", ...args: any[]): void
    connect(sigName: "notify::n-images", callback: (($obj: URIConverter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-images", callback: (($obj: URIConverter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::n-images", ...args: any[]): void
    connect(sigName: "notify::space-character", callback: (($obj: URIConverter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::space-character", callback: (($obj: URIConverter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::space-character", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class URIConverter extends GObject.Object {

    // Own properties of Eog-3.0.Eog.URIConverter

    static name: string
    static $gtype: GObject.GType<URIConverter>

    // Constructors of Eog-3.0.Eog.URIConverter

    constructor(config?: URIConverter_ConstructProps) 
    constructor(base_file: Gio.File, img_format: GdkPixbuf.PixbufFormat, format_string: string) 
    static new(base_file: Gio.File, img_format: GdkPixbuf.PixbufFormat, format_string: string): URIConverter
    _init(config?: URIConverter_ConstructProps): void
    static preview(format_str: string, img: Image, format: GdkPixbuf.PixbufFormat, counter: number, n_images: number, convert_spaces: boolean, space_char: string): string
}

interface Window_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gio.ActionGroup_ConstructProps, Gio.ActionMap_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.ApplicationWindow_ConstructProps {

    // Own constructor properties of Eog-3.0.Eog.Window

    /**
     * Determines the position of the image gallery in the window
     * relative to the image.
     */
    gallery_position?: WindowGalleryPos | null
    /**
     * If %TRUE the gallery will be resizable by the user otherwise it will be
     * in single column/row mode.
     */
    gallery_resizable?: boolean | null
    /**
     * A bitwise OR of #EogStartupFlags elements, indicating how the window
     * should behave upon creation.
     */
    startup_flags?: StartupFlags | null
}

/**
 * Signal callback interface for `prepared`
 */
interface Window_PreparedSignalCallback {
    ($obj: Window): void
}

interface Window extends Atk.ImplementorIface, Gio.ActionGroup, Gio.ActionMap, Gtk.Buildable {

    // Own properties of Eog-3.0.Eog.Window

    /**
     * Determines the position of the image gallery in the window
     * relative to the image.
     */
    gallery_position: WindowGalleryPos
    /**
     * If %TRUE the gallery will be resizable by the user otherwise it will be
     * in single column/row mode.
     */
    gallery_resizable: boolean
    /**
     * A bitwise OR of #EogStartupFlags elements, indicating how the window
     * should behave upon creation.
     */
    readonly startup_flags: StartupFlags

    // Conflicting properties

    parent_instance: any

    // Own fields of Eog-3.0.Eog.Window

    priv: WindowPrivate

    // Owm methods of Eog-3.0.Eog.Window

    close(): void
    get_gear_menu_section(id: string): Gio.Menu
    /**
     * Gets the image currently displayed in `window` or %NULL if
     * no image is being displayed.
     */
    get_image(): Image
    /**
     * Gets the mode of `window`. See #EogWindowMode for details.
     */
    get_mode(): WindowMode
    /**
     * Gets the remote presenter dialog. The widget will be built on the first call to this function.
     */
    get_remote_presenter(): Gtk.Widget
    /**
     * Gets the sidebar widget of `window`.
     */
    get_sidebar(): Gtk.Widget
    /**
     * Gets the statusbar in `window`.
     */
    get_statusbar(): Gtk.Widget
    /**
     * Gets the #EogListStore that contains the images in the gallery
     * of `window`.
     */
    get_store(): ListStore
    /**
     * Gets the thumbnails navigation pane in `window`.
     */
    get_thumb_nav(): Gtk.Widget
    /**
     * Gets the thumbnails view in `window`.
     */
    get_thumb_view(): Gtk.Widget
    /**
     * Gets the #EogScrollView in the window.
     */
    get_view(): Gtk.Widget
    /**
     * Tells whether `window` is currently empty or not.
     */
    is_empty(): boolean
    is_not_initializing(): boolean
    /**
     * Opens a list of files, adding them to the gallery in `window`.
     * Files will be checked to be readable and later filtered according
     * with eog_list_store_add_files().
     * @param file_list A %NULL-terminated list of #GFile's.
     */
    open_file_list(file_list: Gio.File[]): void
    reload_image(): void
    /**
     * Changes the mode of `window` to normal, fullscreen, or slideshow.
     * See #EogWindowMode for details.
     * @param mode an #EogWindowMode value.
     */
    set_mode(mode: WindowMode): void
    show_about_dialog(): void
    show_preferences_dialog(): void

    // Conflicting methods

    mnemonic_activate(...args: any[]): any
    child_notify(...args: any[]): any

    // Own virtual methods of Eog-3.0.Eog.Window

    vfunc_prepared(): void

    // Own signals of Eog-3.0.Eog.Window

    connect(sigName: "prepared", callback: Window_PreparedSignalCallback): number
    connect_after(sigName: "prepared", callback: Window_PreparedSignalCallback): number
    emit(sigName: "prepared", ...args: any[]): void

    // Class property signals of Eog-3.0.Eog.Window

    connect(sigName: "notify::gallery-position", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gallery-position", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gallery-position", ...args: any[]): void
    connect(sigName: "notify::gallery-resizable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gallery-resizable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gallery-resizable", ...args: any[]): void
    connect(sigName: "notify::startup-flags", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-flags", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::startup-flags", ...args: any[]): void
    connect(sigName: "notify::show-menubar", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-menubar", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-menubar", ...args: any[]): void
    connect(sigName: "notify::accept-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accept-focus", ...args: any[]): void
    connect(sigName: "notify::application", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::attached-to", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attached-to", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attached-to", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::default-height", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-height", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-height", ...args: any[]): void
    connect(sigName: "notify::default-width", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-width", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::default-width", ...args: any[]): void
    connect(sigName: "notify::deletable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::deletable", ...args: any[]): void
    connect(sigName: "notify::destroy-with-parent", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroy-with-parent", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::destroy-with-parent", ...args: any[]): void
    connect(sigName: "notify::focus-on-map", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-map", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-map", ...args: any[]): void
    connect(sigName: "notify::focus-visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-visible", ...args: any[]): void
    connect(sigName: "notify::gravity", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gravity", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gravity", ...args: any[]): void
    connect(sigName: "notify::has-resize-grip", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-resize-grip", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-resize-grip", ...args: any[]): void
    connect(sigName: "notify::has-toplevel-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-toplevel-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-toplevel-focus", ...args: any[]): void
    connect(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hide-titlebar-when-maximized", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hide-titlebar-when-maximized", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-active", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-active", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-active", ...args: any[]): void
    connect(sigName: "notify::is-maximized", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-maximized", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-maximized", ...args: any[]): void
    connect(sigName: "notify::mnemonics-visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mnemonics-visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mnemonics-visible", ...args: any[]): void
    connect(sigName: "notify::modal", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::resizable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resizable", ...args: any[]): void
    connect(sigName: "notify::resize-grip-visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-grip-visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-grip-visible", ...args: any[]): void
    connect(sigName: "notify::role", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::role", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::screen", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: "notify::skip-pager-hint", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-pager-hint", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-pager-hint", ...args: any[]): void
    connect(sigName: "notify::skip-taskbar-hint", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-taskbar-hint", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-taskbar-hint", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::startup-id", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::transient-for", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transient-for", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::type-hint", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type-hint", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type-hint", ...args: any[]): void
    connect(sigName: "notify::urgency-hint", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgency-hint", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::urgency-hint", ...args: any[]): void
    connect(sigName: "notify::window-position", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-position", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-position", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Window extends Gtk.ApplicationWindow {

    // Own properties of Eog-3.0.Eog.Window

    static name: string
    static $gtype: GObject.GType<Window>

    // Constructors of Eog-3.0.Eog.Window

    constructor(config?: Window_ConstructProps) 
    /**
     * Creates a new and empty #EogWindow. Use `flags` to indicate
     * if the window should be initialized fullscreen, in slideshow mode,
     * and/or without the thumbnails gallery visible. See #EogStartupFlags.
     * @constructor 
     * @param flags the initialization parameters for the new window.
     */
    constructor(flags: StartupFlags) 
    /**
     * Creates a new and empty #EogWindow. Use `flags` to indicate
     * if the window should be initialized fullscreen, in slideshow mode,
     * and/or without the thumbnails gallery visible. See #EogStartupFlags.
     * @constructor 
     * @param flags the initialization parameters for the new window.
     */
    static new(flags: StartupFlags): Window

    // Overloads of new

    /**
     * Creates a new #GtkApplicationWindow.
     * @constructor 
     * @param application a #GtkApplication
     */
    static new(application: Gtk.Application): Gtk.ApplicationWindow
    /**
     * Creates a new #GtkWindow, which is a toplevel window that can
     * contain other widgets. Nearly always, the type of the window should
     * be #GTK_WINDOW_TOPLEVEL. If you’re implementing something like a
     * popup menu from scratch (which is a bad idea, just use #GtkMenu),
     * you might use #GTK_WINDOW_POPUP. #GTK_WINDOW_POPUP is not for
     * dialogs, though in some other toolkits dialogs are called “popups”.
     * In GTK+, #GTK_WINDOW_POPUP means a pop-up menu or pop-up tooltip.
     * On X11, popup windows are not controlled by the
     * [window manager][gtk-X11-arch].
     * 
     * If you simply want an undecorated window (no window borders), use
     * gtk_window_set_decorated(), don’t use #GTK_WINDOW_POPUP.
     * 
     * All top-level windows created by gtk_window_new() are stored in
     * an internal top-level window list.  This list can be obtained from
     * gtk_window_list_toplevels().  Due to Gtk+ keeping a reference to
     * the window internally, gtk_window_new() does not return a reference
     * to the caller.
     * 
     * To delete a #GtkWindow, call gtk_widget_destroy().
     * @constructor 
     * @param type type of window
     */
    static new(type: Gtk.WindowType): Gtk.Window
    _init(config?: Window_ConstructProps): void
}

interface ApplicationActivatableInterface {

    // Own fields of Eog-3.0.Eog.ApplicationActivatableInterface

    g_iface: GObject.TypeInterface
    activate: (activatable: ApplicationActivatable) => void
    deactivate: (activatable: ApplicationActivatable) => void
}

abstract class ApplicationActivatableInterface {

    // Own properties of Eog-3.0.Eog.ApplicationActivatableInterface

    static name: string
}

interface ApplicationClass {

    // Own fields of Eog-3.0.Eog.ApplicationClass

    parent_class: Gtk.ApplicationClass
}

abstract class ApplicationClass {

    // Own properties of Eog-3.0.Eog.ApplicationClass

    static name: string
}

interface ApplicationPrivate {
}

class ApplicationPrivate {

    // Own properties of Eog-3.0.Eog.ApplicationPrivate

    static name: string
}

interface ClipboardHandlerClass {

    // Own fields of Eog-3.0.Eog.ClipboardHandlerClass

    parent_klass: GObject.ObjectClass
}

abstract class ClipboardHandlerClass {

    // Own properties of Eog-3.0.Eog.ClipboardHandlerClass

    static name: string
}

interface ClipboardHandlerPrivate {
}

class ClipboardHandlerPrivate {

    // Own properties of Eog-3.0.Eog.ClipboardHandlerPrivate

    static name: string
}

interface DetailsDialogClass {

    // Own fields of Eog-3.0.Eog.DetailsDialogClass

    parent_class: Gtk.WindowClass
}

abstract class DetailsDialogClass {

    // Own properties of Eog-3.0.Eog.DetailsDialogClass

    static name: string
}

interface DetailsDialogPrivate {
}

class DetailsDialogPrivate {

    // Own properties of Eog-3.0.Eog.DetailsDialogPrivate

    static name: string
}

interface FileChooserClass {

    // Own fields of Eog-3.0.Eog.FileChooserClass

    parent_class: Gtk.FileChooserDialogClass
}

abstract class FileChooserClass {

    // Own properties of Eog-3.0.Eog.FileChooserClass

    static name: string
}

interface FileChooserPrivate {
}

class FileChooserPrivate {

    // Own properties of Eog-3.0.Eog.FileChooserPrivate

    static name: string
}

interface ImageClass {

    // Own fields of Eog-3.0.Eog.ImageClass

    parent_class: GObject.ObjectClass
    changed: (img: Image) => void
    size_prepared: (img: Image, width: number, height: number) => void
    thumbnail_changed: (img: Image) => void
    save_progress: (img: Image, progress: number) => void
    next_frame: (img: Image, delay: number) => void
    file_changed: (img: Image) => void
}

abstract class ImageClass {

    // Own properties of Eog-3.0.Eog.ImageClass

    static name: string
}

interface ImagePrivate {
}

class ImagePrivate {

    // Own properties of Eog-3.0.Eog.ImagePrivate

    static name: string
}

interface ImageSaveInfoClass {

    // Own fields of Eog-3.0.Eog.ImageSaveInfoClass

    parent_klass: GObject.ObjectClass
}

abstract class ImageSaveInfoClass {

    // Own properties of Eog-3.0.Eog.ImageSaveInfoClass

    static name: string
}

interface JobClass {

    // Own fields of Eog-3.0.Eog.JobClass

    parent_class: GObject.ObjectClass
    run: (job: Job) => void
    progress: (job: Job, progress: number) => void
    cancelled: (job: Job) => void
    finished: (job: Job) => void
}

abstract class JobClass {

    // Own properties of Eog-3.0.Eog.JobClass

    static name: string
}

interface JobCopyClass {

    // Own fields of Eog-3.0.Eog.JobCopyClass

    parent_class: JobClass
}

abstract class JobCopyClass {

    // Own properties of Eog-3.0.Eog.JobCopyClass

    static name: string
}

interface JobLoadClass {

    // Own fields of Eog-3.0.Eog.JobLoadClass

    parent_class: JobClass
}

abstract class JobLoadClass {

    // Own properties of Eog-3.0.Eog.JobLoadClass

    static name: string
}

interface JobModelClass {

    // Own fields of Eog-3.0.Eog.JobModelClass

    parent_class: JobClass
}

abstract class JobModelClass {

    // Own properties of Eog-3.0.Eog.JobModelClass

    static name: string
}

interface JobSaveAsClass {

    // Own fields of Eog-3.0.Eog.JobSaveAsClass

    parent: JobSaveClass
}

abstract class JobSaveAsClass {

    // Own properties of Eog-3.0.Eog.JobSaveAsClass

    static name: string
}

interface JobSaveClass {

    // Own fields of Eog-3.0.Eog.JobSaveClass

    parent_class: JobClass
}

abstract class JobSaveClass {

    // Own properties of Eog-3.0.Eog.JobSaveClass

    static name: string
}

interface JobThumbnailClass {

    // Own fields of Eog-3.0.Eog.JobThumbnailClass

    parent_class: JobClass
}

abstract class JobThumbnailClass {

    // Own properties of Eog-3.0.Eog.JobThumbnailClass

    static name: string
}

interface JobTransformClass {

    // Own fields of Eog-3.0.Eog.JobTransformClass

    parent_class: JobClass
}

abstract class JobTransformClass {

    // Own properties of Eog-3.0.Eog.JobTransformClass

    static name: string
}

interface ListStoreClass {

    // Own fields of Eog-3.0.Eog.ListStoreClass

    parent_class: Gtk.ListStoreClass
    draw_thumbnail: (store: ListStore) => void
}

abstract class ListStoreClass {

    // Own properties of Eog-3.0.Eog.ListStoreClass

    static name: string
}

interface ListStorePrivate {
}

class ListStorePrivate {

    // Own properties of Eog-3.0.Eog.ListStorePrivate

    static name: string
}

interface RemotePresenterClass {

    // Own fields of Eog-3.0.Eog.RemotePresenterClass

    parent_class: Gtk.WindowClass
}

abstract class RemotePresenterClass {

    // Own properties of Eog-3.0.Eog.RemotePresenterClass

    static name: string
}

interface RemotePresenterPrivate {
}

class RemotePresenterPrivate {

    // Own properties of Eog-3.0.Eog.RemotePresenterPrivate

    static name: string
}

interface ScrollViewClass {

    // Own fields of Eog-3.0.Eog.ScrollViewClass

    parent_class: Gtk.OverlayClass
    zoom_changed: (view: ScrollView, zoom: number) => void
    rotation_changed: (view: ScrollView, degrees: number) => void
    next_image: (view: ScrollView) => void
    previous_image: (view: ScrollView) => void
}

abstract class ScrollViewClass {

    // Own properties of Eog-3.0.Eog.ScrollViewClass

    static name: string
}

interface ScrollViewPrivate {
}

class ScrollViewPrivate {

    // Own properties of Eog-3.0.Eog.ScrollViewPrivate

    static name: string
}

interface SidebarClass {

    // Own fields of Eog-3.0.Eog.SidebarClass

    base_class: Gtk.BoxClass
    page_added: (eog_sidebar: Sidebar, main_widget: Gtk.Widget) => void
    page_removed: (eog_sidebar: Sidebar, main_widget: Gtk.Widget) => void
}

abstract class SidebarClass {

    // Own properties of Eog-3.0.Eog.SidebarClass

    static name: string
}

interface SidebarPrivate {
}

class SidebarPrivate {

    // Own properties of Eog-3.0.Eog.SidebarPrivate

    static name: string
}

interface StatusbarClass {

    // Own fields of Eog-3.0.Eog.StatusbarClass

    parent_class: Gtk.StatusbarClass
}

abstract class StatusbarClass {

    // Own properties of Eog-3.0.Eog.StatusbarClass

    static name: string
}

interface StatusbarPrivate {
}

class StatusbarPrivate {

    // Own properties of Eog-3.0.Eog.StatusbarPrivate

    static name: string
}

interface ThumbNavClass {

    // Own fields of Eog-3.0.Eog.ThumbNavClass

    parent_class: Gtk.BoxClass
}

abstract class ThumbNavClass {

    // Own properties of Eog-3.0.Eog.ThumbNavClass

    static name: string
}

interface ThumbNavPrivate {
}

class ThumbNavPrivate {

    // Own properties of Eog-3.0.Eog.ThumbNavPrivate

    static name: string
}

interface ThumbViewClass {

    // Own fields of Eog-3.0.Eog.ThumbViewClass

    icon_view_class: Gtk.IconViewClass
}

abstract class ThumbViewClass {

    // Own properties of Eog-3.0.Eog.ThumbViewClass

    static name: string
}

interface ThumbViewPrivate {
}

class ThumbViewPrivate {

    // Own properties of Eog-3.0.Eog.ThumbViewPrivate

    static name: string
}

interface TransformClass {

    // Own fields of Eog-3.0.Eog.TransformClass

    parent_klass: GObject.ObjectClass
}

abstract class TransformClass {

    // Own properties of Eog-3.0.Eog.TransformClass

    static name: string
}

interface TransformPrivate {
}

class TransformPrivate {

    // Own properties of Eog-3.0.Eog.TransformPrivate

    static name: string
}

interface UCInfo {

    // Own fields of Eog-3.0.Eog.UCInfo

    description: string
    rep: string
    req_exif: boolean
}

class UCInfo {

    // Own properties of Eog-3.0.Eog.UCInfo

    static name: string
}

interface URIConverterClass {

    // Own fields of Eog-3.0.Eog.URIConverterClass

    parent_klass: GObject.ObjectClass
}

abstract class URIConverterClass {

    // Own properties of Eog-3.0.Eog.URIConverterClass

    static name: string
}

interface URIConverterPrivate {
}

class URIConverterPrivate {

    // Own properties of Eog-3.0.Eog.URIConverterPrivate

    static name: string
}

interface WindowActivatableInterface {

    // Own fields of Eog-3.0.Eog.WindowActivatableInterface

    g_iface: GObject.TypeInterface
    activate: (activatable: WindowActivatable) => void
    deactivate: (activatable: WindowActivatable) => void
}

abstract class WindowActivatableInterface {

    // Own properties of Eog-3.0.Eog.WindowActivatableInterface

    static name: string
}

interface WindowClass {

    // Own fields of Eog-3.0.Eog.WindowClass

    prepared: (window: Window) => void
}

abstract class WindowClass {

    // Own properties of Eog-3.0.Eog.WindowClass

    static name: string
}

interface WindowPrivate {
}

class WindowPrivate {

    // Own properties of Eog-3.0.Eog.WindowPrivate

    static name: string
}

}
export default Eog;