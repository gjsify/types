
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

export enum ImageError {
    SAVE_NOT_LOCAL,
    NOT_LOADED,
    NOT_SAVED,
    VFS,
    FILE_EXISTS,
    TMP_FILE_FAILED,
    GENERIC,
    UNKNOWN,
}
export enum ImageMetadataStatus {
    NOT_READ,
    NOT_AVAILABLE,
    READY,
}
export enum ImageStatus {
    UNKNOWN,
    LOADING,
    LOADED,
    SAVING,
    FAILED,
}
export enum JobPriority {
    PRIORITY_HIGH,
    PRIORITY_MEDIUM,
    PRIORITY_LOW,
    N_PRIORITIES,
}
export enum ListStoreColumn {
    THUMBNAIL,
    THUMB_SET,
    EOG_IMAGE,
    EOG_JOB,
    NUM_COLUMNS,
}
export enum ThumbNavMode {
    ONE_ROW,
    ONE_COLUMN,
    MULTIPLE_ROWS,
    MULTIPLE_COLUMNS,
}
export enum ThumbViewSelectionChange {
    CURRENT,
    LEFT,
    RIGHT,
    FIRST,
    LAST,
    RANDOM,
}
export enum TransformType {
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
export enum TransparencyStyle {
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
export enum UCError {
    INVALID_UNICODE,
    INVALID_CHARACTER,
    EQUAL_FILENAMES,
    UNKNOWN,
}
export enum UCType {
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
export enum WindowError {
    CONTROL_NOT_FOUND,
    UI_NOT_FOUND,
    NO_PERSIST_FILE_INTERFACE,
    IO,
    TRASH_NOT_FOUND,
    GENERIC,
    UNKNOWN,
}
export enum WindowGalleryPos {
    BOTTOM,
    LEFT,
    TOP,
    RIGHT,
}
export enum WindowMode {
    UNKNOWN,
    NORMAL,
    FULLSCREEN,
    SLIDESHOW,
}
/**
 * Used to determine the zooming behaviour of an #EogScrollView.
 */
export enum ZoomMode {
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
export enum Debug {
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
export enum ImageData {
    IMAGE,
    DIMENSION,
    EXIF,
    XMP,
}
export enum StartupFlags {
    FULLSCREEN,
    SLIDE_SHOW,
    DISABLE_GALLERY,
    SINGLE_WINDOW,
}
export const FILE_FORMAT_JPEG: string | null
export const IMAGE_DATA_ALL: number
export const LIST_STORE_THUMB_SIZE: number
export const SCROLL_VIEW_MAX_ZOOM_FACTOR: number
export const SCROLL_VIEW_MIN_ZOOM_FACTOR: number
export const THUMBNAIL_ORIGINAL_HEIGHT: string | null
export const THUMBNAIL_ORIGINAL_WIDTH: string | null
export function debug(section: Debug, file: string | null, line: number, function_: string | null): void
export function debug_init(): void
/**
 * Takes a date string formatted after Exif specifications and generates a
 * more readable, possibly localized, string out of it.
 * @param date a date string following Exif specifications
 * @returns a newly allocated date string formatted according to the current locale.
 */
export function exif_util_format_date(date: string | null): string | null
export function image_error_quark(): GLib.Quark
export function marshal_VOID__INT_INT(closure: GObject.TClosure, return_value: any, n_param_values: number, param_values: any, invocation_hint: any | null, marshal_data: any | null): void
/**
 * Adds a frame to `thumbnail`
 * @param thumbnail a #GdkPixbuf
 * @returns a new #GdkPixbuf, storing @thumbnail nicely framed.
 */
export function thumbnail_add_frame(thumbnail: GdkPixbuf.Pixbuf): GdkPixbuf.Pixbuf
/**
 * Ensures a pixbuf fits a given `dimension`
 * @param thumbnail a #GdkPixbuf
 * @param dimension the maximum width or height desired
 * @returns a new #GdkPixbuf
 */
export function thumbnail_fit_to_size(thumbnail: GdkPixbuf.Pixbuf, dimension: number): GdkPixbuf.Pixbuf
export function thumbnail_init(): void
/**
 * Loads the thumbnail for `image`. In case of error, %NULL is returned
 * and `error` is set.
 * @param image a #EogImage
 * @returns a new #GdkPixbuf with the thumbnail for @image or %NULL in case of error.
 */
export function thumbnail_load(image: Image): GdkPixbuf.Pixbuf
export function uc_error_quark(): GLib.Quark
export module ApplicationActivatable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Eog-3.0.Eog.ApplicationActivatable

        /**
         * This is the #EogApplication this #EogApplicationActivatable instance
         * should be attached to.
         */
        app?: Application | null
    }

}

export interface ApplicationActivatable {

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

export class ApplicationActivatable extends GObject.Object {

    // Own properties of Eog-3.0.Eog.ApplicationActivatable

    static name: string
    static $gtype: GObject.GType<ApplicationActivatable>

    // Constructors of Eog-3.0.Eog.ApplicationActivatable

    constructor(config?: ApplicationActivatable.ConstructorProperties) 
    _init(config?: ApplicationActivatable.ConstructorProperties): void
}

export module WindowActivatable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Eog-3.0.Eog.WindowActivatable

        /**
         * This is the #EogWindow this #EogWindowActivatable instance
         * should be attached to.
         */
        window?: Window | null
    }

}

export interface WindowActivatable {

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

export class WindowActivatable extends GObject.Object {

    // Own properties of Eog-3.0.Eog.WindowActivatable

    static name: string
    static $gtype: GObject.GType<WindowActivatable>

    // Constructors of Eog-3.0.Eog.WindowActivatable

    constructor(config?: WindowActivatable.ConstructorProperties) 
    _init(config?: WindowActivatable.ConstructorProperties): void
}

export module Application {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.ActionGroup.ConstructorProperties, Gio.ActionMap.ConstructorProperties, Gtk.Application.ConstructorProperties {
    }

}

export interface Application extends Gio.ActionGroup, Gio.ActionMap {

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
     * @returns Currently always %TRUE.
     */
    open_file_list(file_list: Gio.File[], timestamp: number, flags: StartupFlags): boolean
    /**
     * Opens a list of images, from a list of URIs. See
     * eog_application_open_file_list() for details.
     * @param uri_list A list of URIs.
     * @param timestamp The timestamp of the user interaction which triggered this call (see gtk_window_present_with_time()).
     * @param flags A set of #EogStartupFlags influencing a new windows' state.
     * @returns Currently always %TRUE.
     */
    open_uri_list(uri_list: string[], timestamp: number, flags: StartupFlags): boolean
    /**
     * Opens a list of images, from a list of URI strings. See
     * eog_application_open_file_list() for details.
     * @param uris A #GList of URI strings.
     * @param timestamp The timestamp of the user interaction which triggered this call (see gtk_window_present_with_time()).
     * @param flags A set of #EogStartupFlags influencing a new windows' state.
     * @returns Currently always %TRUE.
     */
    open_uris(uris: string | null, timestamp: number, flags: StartupFlags): boolean
    /**
     * Opens and presents an empty #EogWindow to the user. If there is
     * an empty window already open, this will be used. Otherwise, a
     * new one will be instantiated.
     * @param timestamp The timestamp of the user interaction which triggered this call (see gtk_window_present_with_time()).
     * @param flags A set of #EogStartupFlags influencing a new windows' state.
     * @returns %FALSE if @application is invalid, %TRUE otherwise
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

export class Application extends Gtk.Application {

    // Own properties of Eog-3.0.Eog.Application

    static name: string
    static $gtype: GObject.GType<Application>

    // Constructors of Eog-3.0.Eog.Application

    constructor(config?: Application.ConstructorProperties) 
    _init(config?: Application.ConstructorProperties): void
    /**
     * Returns a singleton instance of #EogApplication currently running.
     * If not running yet, it will create one.
     * @returns a running #EogApplication.
     */
    static get_instance(): Application

    // Conflicting static methods

    static new(...args: any[]): any
}

export module ClipboardHandler {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {

        // Own constructor properties of Eog-3.0.Eog.ClipboardHandler

        pixbuf?: GdkPixbuf.Pixbuf | null
        uri?: string | null
    }

}

export interface ClipboardHandler {

    // Own properties of Eog-3.0.Eog.ClipboardHandler

    readonly pixbuf: GdkPixbuf.Pixbuf
    readonly uri: string | null

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

export class ClipboardHandler extends GObject.InitiallyUnowned {

    // Own properties of Eog-3.0.Eog.ClipboardHandler

    static name: string
    static $gtype: GObject.GType<ClipboardHandler>

    // Constructors of Eog-3.0.Eog.ClipboardHandler

    constructor(config?: ClipboardHandler.ConstructorProperties) 
    constructor(img: Image) 
    static new(img: Image): ClipboardHandler
    _init(config?: ClipboardHandler.ConstructorProperties): void
}

export module DetailsDialog {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Window.ConstructorProperties {
    }

}

export interface DetailsDialog extends Atk.ImplementorIface, Gtk.Buildable {

    // Own fields of Eog-3.0.Eog.DetailsDialog

    readonly window: Gtk.Window & Gdk.Window
    priv: any

    // Owm methods of Eog-3.0.Eog.DetailsDialog

    update(image: Image): void

    // Conflicting methods

    /**
     * Activates the targets associated with the mnemonic.
     * @param keyval the mnemonic
     * @param modifier the modifiers
     * @returns %TRUE if the activation is done.
     */
    mnemonic_activate(keyval: number, modifier: Gdk.ModifierType): boolean

    // Overloads of mnemonic_activate

    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     * @returns %TRUE if the signal has been handled
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     * @returns %TRUE if the signal has been handled
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

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

export class DetailsDialog extends Gtk.Window {

    // Own properties of Eog-3.0.Eog.DetailsDialog

    static name: string
    static $gtype: GObject.GType<DetailsDialog>

    // Constructors of Eog-3.0.Eog.DetailsDialog

    constructor(config?: DetailsDialog.ConstructorProperties) 
    /**
     * If %parent implements #GActionMap its actions will be automatically
     * inserted in the "win" namespace.
     * @constructor 
     * @param parent the dialog's parent window
     * @returns a new #EogDetailsDialog
     */
    constructor(parent: Gtk.Window) 
    /**
     * If %parent implements #GActionMap its actions will be automatically
     * inserted in the "win" namespace.
     * @constructor 
     * @param parent the dialog's parent window
     * @returns a new #EogDetailsDialog
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
     * @returns a new #GtkWindow.
     */
    static new(type: Gtk.WindowType): Gtk.Window
    _init(config?: DetailsDialog.ConstructorProperties): void
}

export module FileChooser {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.FileChooser.ConstructorProperties, Gtk.FileChooserDialog.ConstructorProperties {
    }

}

export interface FileChooser extends Atk.ImplementorIface, Gtk.Buildable, Gtk.FileChooser {

    // Conflicting properties

    readonly window: Gtk.Window & Gdk.Window & Gdk.Window
    parent_instance: Gtk.Dialog & GObject.InitiallyUnowned & GObject.InitiallyUnowned

    // Own fields of Eog-3.0.Eog.FileChooser

    parent: Gtk.FileChooserDialog & Gtk.Container
    priv: any

    // Owm methods of Eog-3.0.Eog.FileChooser

    get_format(): GdkPixbuf.PixbufFormat

    // Conflicting methods

    /**
     * Activates the targets associated with the mnemonic.
     * @param keyval the mnemonic
     * @param modifier the modifiers
     * @returns %TRUE if the activation is done.
     */
    mnemonic_activate(keyval: number, modifier: Gdk.ModifierType): boolean

    // Overloads of mnemonic_activate

    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     * @returns %TRUE if the signal has been handled
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     * @returns %TRUE if the signal has been handled
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

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

export class FileChooser extends Gtk.FileChooserDialog {

    // Own properties of Eog-3.0.Eog.FileChooser

    static name: string
    static $gtype: GObject.GType<FileChooser>

    // Constructors of Eog-3.0.Eog.FileChooser

    constructor(config?: FileChooser.ConstructorProperties) 
    constructor(action: Gtk.FileChooserAction) 
    static new(action: Gtk.FileChooserAction): FileChooser

    // Overloads of new

    /**
     * Creates a new dialog box.
     * 
     * Widgets should not be packed into this #GtkWindow
     * directly, but into the `vbox` and `action_area,` as described above.
     * @constructor 
     * @returns the new dialog as a #GtkWidget
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
     * @returns a new #GtkWindow.
     */
    static new(type: Gtk.WindowType): Gtk.Window
    _init(config?: FileChooser.ConstructorProperties): void
}

export module Image {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        ($obj: Image): void
    }

    /**
     * Signal callback interface for `file-changed`
     */
    export interface FileChangedSignalCallback {
        ($obj: Image): void
    }

    /**
     * Signal callback interface for `next-frame`
     */
    export interface NextFrameSignalCallback {
        ($obj: Image, delay: number): void
    }

    /**
     * Signal callback interface for `save-progress`
     */
    export interface SaveProgressSignalCallback {
        ($obj: Image, object: number): void
    }

    /**
     * Signal callback interface for `size-prepared`
     */
    export interface SizePreparedSignalCallback {
        ($obj: Image, object: number, p0: number): void
    }

    /**
     * Signal callback interface for `thumbnail-changed`
     */
    export interface ThumbnailChangedSignalCallback {
        ($obj: Image): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Image {

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
     * @returns A #EogTransform.
     */
    get_autorotate_transform(): Transform
    get_bytes(): number
    get_caption(): string | null
    get_collate_key(): string | null
    /**
     * Gets the #GFile associated with `img`
     * @returns a #GFile
     */
    get_file(): Gio.File
    /**
     * Returns the current status of the image metadata, that is,
     * whether the metadata has not been read yet, is ready, or not available at all.
     * @returns one of #EogImageMetadataStatus
     */
    get_metadata_status(): ImageMetadataStatus
    /**
     * Gets the #GdkPixbuf of the image
     * @returns a #GdkPixbuf
     */
    get_pixbuf(): GdkPixbuf.Pixbuf
    get_size(width: number, height: number): void
    get_status(): ImageStatus
    /**
     * Gets the thumbnail pixbuf for `img`
     * @returns a #GdkPixbuf with a thumbnail
     */
    get_thumbnail(): GdkPixbuf.Pixbuf
    /**
     * Get `img` transform.
     * @returns A #EogTransform.
     */
    get_transform(): Transform
    get_uri_for_display(): string | null
    has_data(data: ImageData): boolean
    /**
     * Checks whether a given image is animated.
     * @returns #TRUE if it is an animated image, #FALSE otherwise.
     */
    is_animation(): boolean
    is_file_changed(): boolean
    /**
     * Evaluate if the user has write permission on the image file.
     * @returns %TRUE on success, %FALSE if the user hasn't write permissions on it, or @img is not an #EogImage.
     */
    is_file_writable(): boolean
    is_jpeg(): boolean
    is_modified(): boolean
    /**
     * Check whether the image actually contains multiple images/pages.
     * This can happen for TIFF files. GIF animations are not multipaged.
     * 
     * Note that this only works if the image data is loaded.
     * @returns %TRUE if @img is multipaged, %FALSE if not or the image data wasn't loaded.
     */
    is_multipaged(): boolean
    load(data2read: ImageData, job: Job): boolean
    modified(): void
    save_as_by_info(source: ImageSaveInfo, target: ImageSaveInfo): boolean
    save_by_info(source: ImageSaveInfo): boolean
    set_thumbnail(pixbuf: GdkPixbuf.Pixbuf): void
    /**
     * Starts playing an animated image.
     * @returns %TRUE on success, %FALSE if @img is already playing or isn't an animated image.
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

    connect(sigName: "changed", callback: Image.ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: Image.ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "file-changed", callback: Image.FileChangedSignalCallback): number
    connect_after(sigName: "file-changed", callback: Image.FileChangedSignalCallback): number
    emit(sigName: "file-changed", ...args: any[]): void
    connect(sigName: "next-frame", callback: Image.NextFrameSignalCallback): number
    connect_after(sigName: "next-frame", callback: Image.NextFrameSignalCallback): number
    emit(sigName: "next-frame", delay: number, ...args: any[]): void
    connect(sigName: "save-progress", callback: Image.SaveProgressSignalCallback): number
    connect_after(sigName: "save-progress", callback: Image.SaveProgressSignalCallback): number
    emit(sigName: "save-progress", object: number, ...args: any[]): void
    connect(sigName: "size-prepared", callback: Image.SizePreparedSignalCallback): number
    connect_after(sigName: "size-prepared", callback: Image.SizePreparedSignalCallback): number
    emit(sigName: "size-prepared", object: number, p0: number, ...args: any[]): void
    connect(sigName: "thumbnail-changed", callback: Image.ThumbnailChangedSignalCallback): number
    connect_after(sigName: "thumbnail-changed", callback: Image.ThumbnailChangedSignalCallback): number
    emit(sigName: "thumbnail-changed", ...args: any[]): void

    // Class property signals of Eog-3.0.Eog.Image

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Image extends GObject.Object {

    // Own properties of Eog-3.0.Eog.Image

    static name: string
    static $gtype: GObject.GType<Image>

    // Constructors of Eog-3.0.Eog.Image

    constructor(config?: Image.ConstructorProperties) 
    static new_file(file: Gio.File, caption: string | null): Image
    _init(config?: Image.ConstructorProperties): void
    /**
     * Gets the list of supported mimetypes
     * @returns a #GList of supported mimetypes
     */
    static get_supported_mime_types(): string[]
    static is_supported_mime_type(mime_type: string | null): boolean
}

export module ImageSaveInfo {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ImageSaveInfo {

    // Own fields of Eog-3.0.Eog.ImageSaveInfo

    parent: GObject.Object
    file: Gio.File
    format: string | null
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

export class ImageSaveInfo extends GObject.Object {

    // Own properties of Eog-3.0.Eog.ImageSaveInfo

    static name: string
    static $gtype: GObject.GType<ImageSaveInfo>

    // Constructors of Eog-3.0.Eog.ImageSaveInfo

    constructor(config?: ImageSaveInfo.ConstructorProperties) 
    static new_from_file(file: Gio.File, format: GdkPixbuf.PixbufFormat): ImageSaveInfo
    static new_from_image(image: Image): ImageSaveInfo
    static new_from_uri(uri: string | null, format: GdkPixbuf.PixbufFormat): ImageSaveInfo
    _init(config?: ImageSaveInfo.ConstructorProperties): void
}

export module Job {

    // Signal callback interfaces

    /**
     * Signal callback interface for `cancelled`
     */
    export interface CancelledSignalCallback {
        ($obj: Job): void
    }

    /**
     * Signal callback interface for `finished`
     */
    export interface FinishedSignalCallback {
        ($obj: Job): void
    }

    /**
     * Signal callback interface for `progress`
     */
    export interface ProgressSignalCallback {
        ($obj: Job, object: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Job {

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

    connect(sigName: "cancelled", callback: Job.CancelledSignalCallback): number
    connect_after(sigName: "cancelled", callback: Job.CancelledSignalCallback): number
    emit(sigName: "cancelled", ...args: any[]): void
    connect(sigName: "finished", callback: Job.FinishedSignalCallback): number
    connect_after(sigName: "finished", callback: Job.FinishedSignalCallback): number
    emit(sigName: "finished", ...args: any[]): void
    connect(sigName: "progress", callback: Job.ProgressSignalCallback): number
    connect_after(sigName: "progress", callback: Job.ProgressSignalCallback): number
    emit(sigName: "progress", object: number, ...args: any[]): void

    // Class property signals of Eog-3.0.Eog.Job

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Job extends GObject.Object {

    // Own properties of Eog-3.0.Eog.Job

    static name: string
    static $gtype: GObject.GType<Job>

    // Constructors of Eog-3.0.Eog.Job

    constructor(config?: Job.ConstructorProperties) 
    _init(config?: Job.ConstructorProperties): void
    static scheduler_init(): void
}

export module JobCopy {

    // Constructor properties interface

    export interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

export interface JobCopy {

    // Own fields of Eog-3.0.Eog.JobCopy

    parent: Job & GObject.Object
    images: any[]
    destination: string | null
    current_position: number

    // Class property signals of Eog-3.0.Eog.JobCopy

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class JobCopy extends Job {

    // Own properties of Eog-3.0.Eog.JobCopy

    static name: string
    static $gtype: GObject.GType<JobCopy>

    // Constructors of Eog-3.0.Eog.JobCopy

    constructor(config?: JobCopy.ConstructorProperties) 
    /**
     * Creates a new #EogJob.
     * @constructor 
     * @param images a #EogImage list
     * @param destination destination path for the copy
     * @returns A #EogJob.
     */
    constructor(images: Image[], destination: string | null) 
    /**
     * Creates a new #EogJob.
     * @constructor 
     * @param images a #EogImage list
     * @param destination destination path for the copy
     * @returns A #EogJob.
     */
    static new(images: Image[], destination: string | null): JobCopy
    _init(config?: JobCopy.ConstructorProperties): void
}

export module JobLoad {

    // Constructor properties interface

    export interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

export interface JobLoad {

    // Own fields of Eog-3.0.Eog.JobLoad

    parent: Job & GObject.Object
    image: Image
    data: ImageData

    // Class property signals of Eog-3.0.Eog.JobLoad

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class JobLoad extends Job {

    // Own properties of Eog-3.0.Eog.JobLoad

    static name: string
    static $gtype: GObject.GType<JobLoad>

    // Constructors of Eog-3.0.Eog.JobLoad

    constructor(config?: JobLoad.ConstructorProperties) 
    constructor(image: Image, data: ImageData) 
    static new(image: Image, data: ImageData): JobLoad
    _init(config?: JobLoad.ConstructorProperties): void
}

export module JobModel {

    // Constructor properties interface

    export interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

export interface JobModel {

    // Own fields of Eog-3.0.Eog.JobModel

    parent: Job & GObject.Object
    store: ListStore
    file_list: any[]

    // Class property signals of Eog-3.0.Eog.JobModel

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class JobModel extends Job {

    // Own properties of Eog-3.0.Eog.JobModel

    static name: string
    static $gtype: GObject.GType<JobModel>

    // Constructors of Eog-3.0.Eog.JobModel

    constructor(config?: JobModel.ConstructorProperties) 
    /**
     * Creates a new #EogJob model.
     * @constructor 
     * @param file_list a #GFile list
     * @returns A #EogJob.
     */
    constructor(file_list: Gio.File[]) 
    /**
     * Creates a new #EogJob model.
     * @constructor 
     * @param file_list a #GFile list
     * @returns A #EogJob.
     */
    static new(file_list: Gio.File[]): JobModel
    _init(config?: JobModel.ConstructorProperties): void
}

export module JobSave {

    // Constructor properties interface

    export interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

export interface JobSave {

    // Own fields of Eog-3.0.Eog.JobSave

    parent: Job & GObject.Object
    images: any[]
    current_image: Image
    current_position: number

    // Class property signals of Eog-3.0.Eog.JobSave

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class JobSave extends Job {

    // Own properties of Eog-3.0.Eog.JobSave

    static name: string
    static $gtype: GObject.GType<JobSave>

    // Constructors of Eog-3.0.Eog.JobSave

    constructor(config?: JobSave.ConstructorProperties) 
    /**
     * Creates a new #EogJob for image saving.
     * @constructor 
     * @param images a #EogImage list
     * @returns A #EogJob.
     */
    constructor(images: Image[]) 
    /**
     * Creates a new #EogJob for image saving.
     * @constructor 
     * @param images a #EogImage list
     * @returns A #EogJob.
     */
    static new(images: Image[]): JobSave
    _init(config?: JobSave.ConstructorProperties): void
}

export module JobSaveAs {

    // Constructor properties interface

    export interface ConstructorProperties extends JobSave.ConstructorProperties {
    }

}

export interface JobSaveAs {

    // Own fields of Eog-3.0.Eog.JobSaveAs

    parent: JobSave & Job & GObject.Object & GObject.Object
    converter: URIConverter
    file: Gio.File

    // Class property signals of Eog-3.0.Eog.JobSaveAs

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class JobSaveAs extends JobSave {

    // Own properties of Eog-3.0.Eog.JobSaveAs

    static name: string
    static $gtype: GObject.GType<JobSaveAs>

    // Constructors of Eog-3.0.Eog.JobSaveAs

    constructor(config?: JobSaveAs.ConstructorProperties) 
    /**
     * Creates a new #EogJog for save as.
     * @constructor 
     * @param images a #EogImage list
     * @param converter a URI converter file: a #GFile
     * @param file 
     * @returns A #EogJob.
     */
    constructor(images: Image[], converter: URIConverter, file: Gio.File) 
    /**
     * Creates a new #EogJog for save as.
     * @constructor 
     * @param images a #EogImage list
     * @param converter a URI converter file: a #GFile
     * @param file 
     * @returns A #EogJob.
     */
    static new(images: Image[], converter: URIConverter, file: Gio.File): JobSaveAs

    // Overloads of new

    /**
     * Creates a new #EogJob for image saving.
     * @constructor 
     * @param images a #EogImage list
     * @returns A #EogJob.
     */
    static new(images: Image[]): JobSave
    _init(config?: JobSaveAs.ConstructorProperties): void
}

export module JobThumbnail {

    // Constructor properties interface

    export interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

export interface JobThumbnail {

    // Own fields of Eog-3.0.Eog.JobThumbnail

    parent: Job & GObject.Object
    image: Image
    thumbnail: GdkPixbuf.Pixbuf

    // Class property signals of Eog-3.0.Eog.JobThumbnail

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class JobThumbnail extends Job {

    // Own properties of Eog-3.0.Eog.JobThumbnail

    static name: string
    static $gtype: GObject.GType<JobThumbnail>

    // Constructors of Eog-3.0.Eog.JobThumbnail

    constructor(config?: JobThumbnail.ConstructorProperties) 
    constructor(image: Image) 
    static new(image: Image): JobThumbnail
    _init(config?: JobThumbnail.ConstructorProperties): void
}

export module JobTransform {

    // Constructor properties interface

    export interface ConstructorProperties extends Job.ConstructorProperties {
    }

}

export interface JobTransform {

    // Own fields of Eog-3.0.Eog.JobTransform

    parent: Job & GObject.Object
    images: any[]
    transform: Transform

    // Class property signals of Eog-3.0.Eog.JobTransform

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class JobTransform extends Job {

    // Own properties of Eog-3.0.Eog.JobTransform

    static name: string
    static $gtype: GObject.GType<JobTransform>

    // Constructors of Eog-3.0.Eog.JobTransform

    constructor(config?: JobTransform.ConstructorProperties) 
    /**
     * Create a new #EogJob for image transformation.
     * @constructor 
     * @param images a #EogImage list
     * @param transform a #EogTransform
     * @returns A #EogJob.
     */
    constructor(images: Image[], transform: Transform) 
    /**
     * Create a new #EogJob for image transformation.
     * @constructor 
     * @param images a #EogImage list
     * @param transform a #EogTransform
     * @returns A #EogJob.
     */
    static new(images: Image[], transform: Transform): JobTransform
    _init(config?: JobTransform.ConstructorProperties): void
}

export module ListStore {

    // Signal callback interfaces

    /**
     * Signal callback interface for `draw-thumbnail`
     */
    export interface DrawThumbnailSignalCallback {
        ($obj: ListStore): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Buildable.ConstructorProperties, Gtk.TreeDragDest.ConstructorProperties, Gtk.TreeDragSource.ConstructorProperties, Gtk.TreeModel.ConstructorProperties, Gtk.TreeSortable.ConstructorProperties, Gtk.ListStore.ConstructorProperties {
    }

}

export interface ListStore extends Gtk.Buildable, Gtk.TreeDragDest, Gtk.TreeDragSource, Gtk.TreeModel, Gtk.TreeSortable {

    // Own fields of Eog-3.0.Eog.ListStore

    parent: Gtk.ListStore & GObject.Object
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
     * @returns the #EogImage in position @pos or %NULL.
     */
    get_image_by_pos(pos: number): Image
    /**
     * Gets the position of the #EogImage that should be loaded first.
     * If not set, it returns -1.
     * @returns the position of the image to be loaded first or -1.
     */
    get_initial_pos(): number
    /**
     * Gets the position where `image` is stored in `store`. If `image`
     * is not stored in `store,` -1 is returned.
     * @param image An #EogImage.
     * @returns the position of @image in @store or -1 if not found.
     */
    get_pos_by_image(image: Image): number
    /**
     * Gets the position of the image pointed by `iter`.
     * @param iter A #GtkTreeIter pointing to an image in `store`.
     * @returns The position of the image pointed by @iter.
     */
    get_pos_by_iter(iter: Gtk.TreeIter): number
    /**
     * Returns the number of images in the store.
     * @returns The number of images in @store.
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

    connect(sigName: "draw-thumbnail", callback: ListStore.DrawThumbnailSignalCallback): number
    connect_after(sigName: "draw-thumbnail", callback: ListStore.DrawThumbnailSignalCallback): number
    emit(sigName: "draw-thumbnail", ...args: any[]): void

    // Class property signals of Eog-3.0.Eog.ListStore

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ListStore extends Gtk.ListStore {

    // Own properties of Eog-3.0.Eog.ListStore

    static name: string
    static $gtype: GObject.GType<ListStore>

    // Constructors of Eog-3.0.Eog.ListStore

    constructor(config?: ListStore.ConstructorProperties) 
    /**
     * Creates a new and empty #EogListStore.
     * @constructor 
     * @returns a newly created #EogListStore.
     */
    constructor() 
    /**
     * Creates a new and empty #EogListStore.
     * @constructor 
     * @returns a newly created #EogListStore.
     */
    static new(): ListStore

    // Overloads of new

    /**
     * Non-vararg creation function.  Used primarily by language bindings.
     * @constructor 
     * @param types an array of #GType types for the columns, from first to last
     * @returns a new #GtkListStore
     */
    static new(types: GObject.GType[]): Gtk.ListStore
    /**
     * Creates a new #EogListStore from a list of #EogImage's.
     * The given list must be %NULL-terminated.
     * @constructor 
     * @param list a %NULL-terminated list of #EogImage's.
     * @returns a new #EogListStore.
     */
    static new_from_glist(list: Image[]): ListStore
    _init(config?: ListStore.ConstructorProperties): void
}

export module RemotePresenter {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Window.ConstructorProperties {

        // Own constructor properties of Eog-3.0.Eog.RemotePresenter

        next_action?: string | null
        prev_action?: string | null
        thumbview?: ThumbView | null
        nextAction?: string | null
        prevAction?: string | null
    }

}

export interface RemotePresenter extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Eog-3.0.Eog.RemotePresenter

    readonly next_action: string | null
    readonly nextAction: string | null
    readonly prev_action: string | null
    readonly prevAction: string | null
    readonly thumbview: ThumbView

    // Own fields of Eog-3.0.Eog.RemotePresenter

    readonly window: Gtk.Window & Gdk.Window
    priv: any

    // Owm methods of Eog-3.0.Eog.RemotePresenter

    update(image: Image): void

    // Conflicting methods

    /**
     * Activates the targets associated with the mnemonic.
     * @param keyval the mnemonic
     * @param modifier the modifiers
     * @returns %TRUE if the activation is done.
     */
    mnemonic_activate(keyval: number, modifier: Gdk.ModifierType): boolean

    // Overloads of mnemonic_activate

    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     * @returns %TRUE if the signal has been handled
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     * @returns %TRUE if the signal has been handled
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

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

export class RemotePresenter extends Gtk.Window {

    // Own properties of Eog-3.0.Eog.RemotePresenter

    static name: string
    static $gtype: GObject.GType<RemotePresenter>

    // Constructors of Eog-3.0.Eog.RemotePresenter

    constructor(config?: RemotePresenter.ConstructorProperties) 
    /**
     * If %parent implements #GActionMap its actions will be automatically
     * inserted in the "win" namespace.
     * @constructor 
     * @param parent the parent window
     * @param thumbview 
     * @param next_image_action 
     * @param previous_image_action 
     * @returns a new #EogRemotePresenter
     */
    constructor(parent: Gtk.Window, thumbview: ThumbView, next_image_action: string | null, previous_image_action: string | null) 
    /**
     * If %parent implements #GActionMap its actions will be automatically
     * inserted in the "win" namespace.
     * @constructor 
     * @param parent the parent window
     * @param thumbview 
     * @param next_image_action 
     * @param previous_image_action 
     * @returns a new #EogRemotePresenter
     */
    static new(parent: Gtk.Window, thumbview: ThumbView, next_image_action: string | null, previous_image_action: string | null): RemotePresenter

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
     * @returns a new #GtkWindow.
     */
    static new(type: Gtk.WindowType): Gtk.Window
    _init(config?: RemotePresenter.ConstructorProperties): void
}

export module ScrollView {

    // Signal callback interfaces

    /**
     * Signal callback interface for `next-image`
     */
    export interface NextImageSignalCallback {
        ($obj: ScrollView): void
    }

    /**
     * Signal callback interface for `previous-image`
     */
    export interface PreviousImageSignalCallback {
        ($obj: ScrollView): void
    }

    /**
     * Signal callback interface for `rotation-changed`
     */
    export interface RotationChangedSignalCallback {
        ($obj: ScrollView, object: number): void
    }

    /**
     * Signal callback interface for `zoom-changed`
     */
    export interface ZoomChangedSignalCallback {
        ($obj: ScrollView, object: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Scrollable.ConstructorProperties, Gtk.Overlay.ConstructorProperties {

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
        /**
         * If %TRUE the displayed image will be filtered in a second pass
         * while being zoomed in.
         */
        antialiasingIn?: boolean | null
        /**
         * If %TRUE the displayed image will be filtered in a second pass
         * while being zoomed out.
         */
        antialiasingOut?: boolean | null
        /**
         * This is the default background color used for painting the background
         * of the image view. If set to %NULL the color is determined by the
         * active GTK theme.
         */
        backgroundColor?: Gdk.RGBA | null
        /**
         * If %TRUE the scrollwheel will zoom the view, otherwise it will be
         * used for scrolling a zoomed image.
         */
        scrollwheelZoom?: boolean | null
        /**
         * This is the color used to fill the transparent parts of an image
         * if #EogScrollView:transparency-style is set to %EOG_TRANSP_COLOR.
         */
        transparencyColor?: Gdk.RGBA | null
        /**
         * Determines how to fill the shown image's transparent areas.
         */
        transparencyStyle?: TransparencyStyle | null
        useBackgroundColor?: boolean | null
        zoomMode?: ZoomMode | null
        /**
         * The current zoom factor is multiplied with this value + 1.0 when
         * scrolling with the scrollwheel to determine the next zoom factor.
         */
        zoomMultiplier?: number | null
    }

}

export interface ScrollView extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Own properties of Eog-3.0.Eog.ScrollView

    /**
     * If %TRUE the displayed image will be filtered in a second pass
     * while being zoomed in.
     */
    antialiasing_in: boolean
    /**
     * If %TRUE the displayed image will be filtered in a second pass
     * while being zoomed in.
     */
    antialiasingIn: boolean
    /**
     * If %TRUE the displayed image will be filtered in a second pass
     * while being zoomed out.
     */
    antialiasing_out: boolean
    /**
     * If %TRUE the displayed image will be filtered in a second pass
     * while being zoomed out.
     */
    antialiasingOut: boolean
    /**
     * This is the default background color used for painting the background
     * of the image view. If set to %NULL the color is determined by the
     * active GTK theme.
     */
    background_color: Gdk.RGBA
    /**
     * This is the default background color used for painting the background
     * of the image view. If set to %NULL the color is determined by the
     * active GTK theme.
     */
    backgroundColor: Gdk.RGBA
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
     * If %TRUE the scrollwheel will zoom the view, otherwise it will be
     * used for scrolling a zoomed image.
     */
    scrollwheelZoom: boolean
    /**
     * This is the color used to fill the transparent parts of an image
     * if #EogScrollView:transparency-style is set to %EOG_TRANSP_COLOR.
     */
    transparency_color: Gdk.RGBA
    /**
     * This is the color used to fill the transparent parts of an image
     * if #EogScrollView:transparency-style is set to %EOG_TRANSP_COLOR.
     */
    transparencyColor: Gdk.RGBA
    /**
     * Determines how to fill the shown image's transparent areas.
     */
    transparency_style: TransparencyStyle
    /**
     * Determines how to fill the shown image's transparent areas.
     */
    transparencyStyle: TransparencyStyle
    use_background_color: boolean
    useBackgroundColor: boolean
    zoom_mode: ZoomMode
    zoomMode: ZoomMode
    /**
     * The current zoom factor is multiplied with this value + 1.0 when
     * scrolling with the scrollwheel to determine the next zoom factor.
     */
    zoom_multiplier: number
    /**
     * The current zoom factor is multiplied with this value + 1.0 when
     * scrolling with the scrollwheel to determine the next zoom factor.
     */
    zoomMultiplier: number

    // Conflicting properties

    parent: Gtk.Bin & Gtk.Container & Gtk.Container

    // Own fields of Eog-3.0.Eog.ScrollView

    base_instance: Gtk.Overlay
    priv: any

    // Owm methods of Eog-3.0.Eog.ScrollView

    /**
     * Tells if `ev'`s originates from inside the image area. `view` must be
     * realized and have an image set for this to work.
     * 
     * It only works with #GdkEvent<!-- -->s that supply coordinate data,
     * i.e. #GdkEventButton.
     * @param ev A #GdkEvent which must have window-relative coordinates.
     * @returns %TRUE if @ev originates from over the image, %FALSE otherwise.
     */
    event_is_over_image(ev: Gdk.Event): boolean
    /**
     * Gets the currently displayed #EogImage.
     * @returns An #EogImage.
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

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Own virtual methods of Eog-3.0.Eog.ScrollView

    vfunc_next_image(): void
    vfunc_previous_image(): void
    vfunc_rotation_changed(degrees: number): void
    vfunc_zoom_changed(zoom: number): void

    // Own signals of Eog-3.0.Eog.ScrollView

    connect(sigName: "next-image", callback: ScrollView.NextImageSignalCallback): number
    connect_after(sigName: "next-image", callback: ScrollView.NextImageSignalCallback): number
    emit(sigName: "next-image", ...args: any[]): void
    connect(sigName: "previous-image", callback: ScrollView.PreviousImageSignalCallback): number
    connect_after(sigName: "previous-image", callback: ScrollView.PreviousImageSignalCallback): number
    emit(sigName: "previous-image", ...args: any[]): void
    connect(sigName: "rotation-changed", callback: ScrollView.RotationChangedSignalCallback): number
    connect_after(sigName: "rotation-changed", callback: ScrollView.RotationChangedSignalCallback): number
    emit(sigName: "rotation-changed", object: number, ...args: any[]): void
    connect(sigName: "zoom-changed", callback: ScrollView.ZoomChangedSignalCallback): number
    connect_after(sigName: "zoom-changed", callback: ScrollView.ZoomChangedSignalCallback): number
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

export class ScrollView extends Gtk.Overlay {

    // Own properties of Eog-3.0.Eog.ScrollView

    static name: string
    static $gtype: GObject.GType<ScrollView>

    // Constructors of Eog-3.0.Eog.ScrollView

    constructor(config?: ScrollView.ConstructorProperties) 
    constructor() 
    static new(): ScrollView
    _init(config?: ScrollView.ConstructorProperties): void
}

export module Sidebar {

    // Signal callback interfaces

    /**
     * Signal callback interface for `page-added`
     */
    export interface PageAddedSignalCallback {
        ($obj: Sidebar, object: Gtk.Widget): void
    }

    /**
     * Signal callback interface for `page-removed`
     */
    export interface PageRemovedSignalCallback {
        ($obj: Sidebar, object: Gtk.Widget): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {

        // Own constructor properties of Eog-3.0.Eog.Sidebar

        current_page?: Gtk.Widget | null
        currentPage?: Gtk.Widget | null
    }

}

export interface Sidebar extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Eog-3.0.Eog.Sidebar

    current_page: Gtk.Widget
    currentPage: Gtk.Widget

    // Own fields of Eog-3.0.Eog.Sidebar

    base_instance: Gtk.Box
    priv: SidebarPrivate

    // Owm methods of Eog-3.0.Eog.Sidebar

    add_page(title: string | null, main_widget: Gtk.Widget): void
    get_n_pages(): number
    get_page_nr(): number
    is_empty(): boolean
    remove_page(main_widget: Gtk.Widget): void
    set_page(main_widget: Gtk.Widget): void
    set_page_nr(index: number): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Own virtual methods of Eog-3.0.Eog.Sidebar

    vfunc_page_added(main_widget: Gtk.Widget): void
    vfunc_page_removed(main_widget: Gtk.Widget): void

    // Own signals of Eog-3.0.Eog.Sidebar

    connect(sigName: "page-added", callback: Sidebar.PageAddedSignalCallback): number
    connect_after(sigName: "page-added", callback: Sidebar.PageAddedSignalCallback): number
    emit(sigName: "page-added", object: Gtk.Widget, ...args: any[]): void
    connect(sigName: "page-removed", callback: Sidebar.PageRemovedSignalCallback): number
    connect_after(sigName: "page-removed", callback: Sidebar.PageRemovedSignalCallback): number
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

export class Sidebar extends Gtk.Box {

    // Own properties of Eog-3.0.Eog.Sidebar

    static name: string
    static $gtype: GObject.GType<Sidebar>

    // Constructors of Eog-3.0.Eog.Sidebar

    constructor(config?: Sidebar.ConstructorProperties) 
    constructor() 
    static new(): Sidebar

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     * @returns a new #GtkBox.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: Sidebar.ConstructorProperties): void
}

export module Statusbar {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Statusbar.ConstructorProperties {
    }

}

export interface Statusbar extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own fields of Eog-3.0.Eog.Statusbar

    parent: Gtk.Statusbar & Gtk.Container
    priv: StatusbarPrivate

    // Owm methods of Eog-3.0.Eog.Statusbar

    set_image_number(num: number, tot: number): void
    set_progress(progress: number): void

    // Conflicting methods

    /**
     * Forces the removal of a message from a statusbar’s stack.
     * The exact `context_id` and `message_id` must be specified.
     * @param context_id a context identifier
     * @param message_id a message identifier, as returned by gtk_statusbar_push()
     */
    remove(context_id: number, message_id: number): void

    // Overloads of remove

    /**
     * Removes `widget` from `container`. `widget` must be inside `container`.
     * Note that `container` will own a reference to `widget,` and that this
     * may be the last reference held; so removing a widget from its
     * container can destroy that widget. If you want to use `widget`
     * again, you need to add a reference to it before removing it from
     * a container, using g_object_ref(). If you don’t want to use `widget`
     * again it’s usually more efficient to simply destroy it directly
     * using gtk_widget_destroy() since this will remove it from the
     * container and help break any circular reference count cycles.
     * @param widget a current child of `container`
     */
    remove(widget: Gtk.Widget): void
    /**
     * Removes `widget` from `container`. `widget` must be inside `container`.
     * Note that `container` will own a reference to `widget,` and that this
     * may be the last reference held; so removing a widget from its
     * container can destroy that widget. If you want to use `widget`
     * again, you need to add a reference to it before removing it from
     * a container, using g_object_ref(). If you don’t want to use `widget`
     * again it’s usually more efficient to simply destroy it directly
     * using gtk_widget_destroy() since this will remove it from the
     * container and help break any circular reference count cycles.
     * @param widget a current child of `container`
     */
    remove(widget: Gtk.Widget): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

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

export class Statusbar extends Gtk.Statusbar {

    // Own properties of Eog-3.0.Eog.Statusbar

    static name: string
    static $gtype: GObject.GType<Statusbar>

    // Constructors of Eog-3.0.Eog.Statusbar

    constructor(config?: Statusbar.ConstructorProperties) 
    constructor() 
    static new(): Statusbar

    // Overloads of new

    /**
     * Creates a new #GtkStatusbar ready for messages.
     * @constructor 
     * @returns the new #GtkStatusbar
     */
    static new(): Gtk.Statusbar
    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     * @returns a new #GtkBox.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: Statusbar.ConstructorProperties): void
}

export module ThumbNav {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {

        // Own constructor properties of Eog-3.0.Eog.ThumbNav

        mode?: number | null
        show_buttons?: boolean | null
        thumbview?: ThumbView | null
        showButtons?: boolean | null
    }

}

export interface ThumbNav extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Eog-3.0.Eog.ThumbNav

    mode: number
    show_buttons: boolean
    showButtons: boolean
    readonly thumbview: ThumbView

    // Own fields of Eog-3.0.Eog.ThumbNav

    base_instance: Gtk.Box
    priv: ThumbNavPrivate

    // Owm methods of Eog-3.0.Eog.ThumbNav

    /**
     * Gets the navigation mode in `nav`.
     * @returns A value in #EogThumbNavMode.
     */
    get_mode(): ThumbNavMode
    /**
     * Gets whether the navigation buttons are visible.
     * @returns %TRUE if the navigation buttons are visible, %FALSE otherwise.
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

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

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

export class ThumbNav extends Gtk.Box {

    // Own properties of Eog-3.0.Eog.ThumbNav

    static name: string
    static $gtype: GObject.GType<ThumbNav>

    // Constructors of Eog-3.0.Eog.ThumbNav

    constructor(config?: ThumbNav.ConstructorProperties) 
    /**
     * Creates a new thumbnail navigation widget.
     * @constructor 
     * @param thumbview an #EogThumbView to embed in the navigation widget.
     * @param mode The navigation mode.
     * @param show_buttons Whether to show the navigation buttons.
     * @returns a new #EogThumbNav object.
     */
    constructor(thumbview: Gtk.Widget, mode: ThumbNavMode, show_buttons: boolean) 
    /**
     * Creates a new thumbnail navigation widget.
     * @constructor 
     * @param thumbview an #EogThumbView to embed in the navigation widget.
     * @param mode The navigation mode.
     * @param show_buttons Whether to show the navigation buttons.
     * @returns a new #EogThumbNav object.
     */
    static new(thumbview: Gtk.Widget, mode: ThumbNavMode, show_buttons: boolean): ThumbNav

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     * @returns a new #GtkBox.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: ThumbNav.ConstructorProperties): void
}

export module ThumbView {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.CellLayout.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Scrollable.ConstructorProperties, Gtk.IconView.ConstructorProperties {
    }

}

export interface ThumbView extends Atk.ImplementorIface, Gtk.Buildable, Gtk.CellLayout, Gtk.Orientable, Gtk.Scrollable {

    // Own fields of Eog-3.0.Eog.ThumbView

    icon_view: Gtk.IconView
    priv: ThumbViewPrivate

    // Owm methods of Eog-3.0.Eog.ThumbView

    /**
     * Returns the first selected image. Note that the returned #EogImage
     * is not ensured to be really the first selected image in `thumbview,` but
     * generally, it will be.
     * @returns A #EogImage.
     */
    get_first_selected_image(): Image
    /**
     * Gets the number of images that are currently selected in `thumbview`.
     * @returns the number of selected images in @thumbview.
     */
    get_n_selected(): number
    /**
     * Gets a list with the currently selected images. Note that a new reference is
     * hold for each image and the list must be freed with g_list_free().
     * @returns A newly allocated list of #EogImage's.
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
    /**
     * Set the contextual menu to be used with the thumbnails in the
     * widget. This can be done only once.
     * @param menu A #GtkMenu.
     */
    set_thumbnail_popup(menu: Gtk.Menu): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

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

export class ThumbView extends Gtk.IconView {

    // Own properties of Eog-3.0.Eog.ThumbView

    static name: string
    static $gtype: GObject.GType<ThumbView>

    // Constructors of Eog-3.0.Eog.ThumbView

    constructor(config?: ThumbView.ConstructorProperties) 
    /**
     * Creates a new #EogThumbView object.
     * @constructor 
     * @returns a newly created #EogThumbView.
     */
    constructor() 
    /**
     * Creates a new #EogThumbView object.
     * @constructor 
     * @returns a newly created #EogThumbView.
     */
    static new(): ThumbView
    _init(config?: ThumbView.ConstructorProperties): void
}

export module Transform {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Transform {

    // Own fields of Eog-3.0.Eog.Transform

    parent: GObject.Object
    priv: TransformPrivate

    // Owm methods of Eog-3.0.Eog.Transform

    /**
     * Applies the transformation in `trans` to `pixbuf,` setting its progress in `job`.
     * @param pixbuf a #GdkPixbuf
     * @param job a #EogJob
     * @returns A new #GdkPixbuf with the transformation applied.
     */
    apply(pixbuf: GdkPixbuf.Pixbuf, job: Job): GdkPixbuf.Pixbuf
    compose(compose: Transform): Transform
    get_affine(affine: cairo.Matrix): boolean
    get_transform_type(): TransformType
    is_identity(): boolean
    /**
     * Creates the reverse transformation of `trans`
     * @returns a new transformation
     */
    reverse(): Transform

    // Class property signals of Eog-3.0.Eog.Transform

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Transform extends GObject.Object {

    // Own properties of Eog-3.0.Eog.Transform

    static name: string
    static $gtype: GObject.GType<Transform>

    // Constructors of Eog-3.0.Eog.Transform

    constructor(config?: Transform.ConstructorProperties) 
    static flip_new(type: TransformType): Transform
    static identity_new(): Transform
    constructor(trans: TransformType) 
    static new(trans: TransformType): Transform
    static rotate_new(degree: number): Transform
    _init(config?: Transform.ConstructorProperties): void
}

export module URIConverter {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Eog-3.0.Eog.URIConverter

        convert_spaces?: boolean | null
        counter_n_digits?: number | null
        counter_start?: number | null
        n_images?: number | null
        space_character?: number | null
        convertSpaces?: boolean | null
        counterNDigits?: number | null
        counterStart?: number | null
        nImages?: number | null
        spaceCharacter?: number | null
    }

}

export interface URIConverter {

    // Own properties of Eog-3.0.Eog.URIConverter

    convert_spaces: boolean
    convertSpaces: boolean
    counter_n_digits: number
    counterNDigits: number
    counter_start: number
    counterStart: number
    n_images: number
    nImages: number
    space_character: number
    spaceCharacter: number

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

export class URIConverter extends GObject.Object {

    // Own properties of Eog-3.0.Eog.URIConverter

    static name: string
    static $gtype: GObject.GType<URIConverter>

    // Constructors of Eog-3.0.Eog.URIConverter

    constructor(config?: URIConverter.ConstructorProperties) 
    constructor(base_file: Gio.File, img_format: GdkPixbuf.PixbufFormat, format_string: string | null) 
    static new(base_file: Gio.File, img_format: GdkPixbuf.PixbufFormat, format_string: string | null): URIConverter
    _init(config?: URIConverter.ConstructorProperties): void
    static preview(format_str: string | null, img: Image, format: GdkPixbuf.PixbufFormat, counter: number, n_images: number, convert_spaces: boolean, space_char: string): string | null
}

export module Window {

    // Signal callback interfaces

    /**
     * Signal callback interface for `prepared`
     */
    export interface PreparedSignalCallback {
        ($obj: Window): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gio.ActionGroup.ConstructorProperties, Gio.ActionMap.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ApplicationWindow.ConstructorProperties {

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
        /**
         * Determines the position of the image gallery in the window
         * relative to the image.
         */
        galleryPosition?: WindowGalleryPos | null
        /**
         * If %TRUE the gallery will be resizable by the user otherwise it will be
         * in single column/row mode.
         */
        galleryResizable?: boolean | null
        /**
         * A bitwise OR of #EogStartupFlags elements, indicating how the window
         * should behave upon creation.
         */
        startupFlags?: StartupFlags | null
    }

}

export interface Window extends Atk.ImplementorIface, Gio.ActionGroup, Gio.ActionMap, Gtk.Buildable {

    // Own properties of Eog-3.0.Eog.Window

    /**
     * Determines the position of the image gallery in the window
     * relative to the image.
     */
    gallery_position: WindowGalleryPos
    /**
     * Determines the position of the image gallery in the window
     * relative to the image.
     */
    galleryPosition: WindowGalleryPos
    /**
     * If %TRUE the gallery will be resizable by the user otherwise it will be
     * in single column/row mode.
     */
    gallery_resizable: boolean
    /**
     * If %TRUE the gallery will be resizable by the user otherwise it will be
     * in single column/row mode.
     */
    galleryResizable: boolean
    /**
     * A bitwise OR of #EogStartupFlags elements, indicating how the window
     * should behave upon creation.
     */
    readonly startup_flags: StartupFlags
    /**
     * A bitwise OR of #EogStartupFlags elements, indicating how the window
     * should behave upon creation.
     */
    readonly startupFlags: StartupFlags

    // Conflicting properties

    parent_instance: Gtk.Window & GObject.InitiallyUnowned & GObject.InitiallyUnowned

    // Own fields of Eog-3.0.Eog.Window

    priv: any

    // Owm methods of Eog-3.0.Eog.Window

    close(): void
    get_gear_menu_section(id: string | null): Gio.Menu
    /**
     * Gets the image currently displayed in `window` or %NULL if
     * no image is being displayed.
     * @returns an #EogImage.
     */
    get_image(): Image
    /**
     * Gets the mode of `window`. See #EogWindowMode for details.
     * @returns An #EogWindowMode.
     */
    get_mode(): WindowMode
    /**
     * Gets the remote presenter dialog. The widget will be built on the first call to this function.
     * @returns a #GtkWidget.
     */
    get_remote_presenter(): Gtk.Widget
    /**
     * Gets the sidebar widget of `window`.
     * @returns the #EogSidebar.
     */
    get_sidebar(): Gtk.Widget
    /**
     * Gets the statusbar in `window`.
     * @returns a #EogStatusbar.
     */
    get_statusbar(): Gtk.Widget
    /**
     * Gets the #EogListStore that contains the images in the gallery
     * of `window`.
     * @returns an #EogListStore.
     */
    get_store(): ListStore
    /**
     * Gets the thumbnails navigation pane in `window`.
     * @returns an #EogThumbNav.
     */
    get_thumb_nav(): Gtk.Widget
    /**
     * Gets the thumbnails view in `window`.
     * @returns an #EogThumbView.
     */
    get_thumb_view(): Gtk.Widget
    /**
     * Gets the #EogScrollView in the window.
     * @returns the #EogScrollView.
     */
    get_view(): Gtk.Widget
    /**
     * Tells whether `window` is currently empty or not.
     * @returns %TRUE if @window has no images, %FALSE otherwise.
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

    /**
     * Activates the targets associated with the mnemonic.
     * @param keyval the mnemonic
     * @param modifier the modifiers
     * @returns %TRUE if the activation is done.
     */
    mnemonic_activate(keyval: number, modifier: Gdk.ModifierType): boolean

    // Overloads of mnemonic_activate

    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     * @returns %TRUE if the signal has been handled
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @param group_cycling %TRUE if there are other widgets with the same mnemonic
     * @returns %TRUE if the signal has been handled
     */
    mnemonic_activate(group_cycling: boolean): boolean
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param child_property the name of a child property installed on     the class of `container`
     */
    child_notify(child: Gtk.Widget, child_property: string | null): void

    // Overloads of child_notify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @param child_property the name of a child property installed on the                  class of `widget’`s parent
     */
    child_notify(child_property: string | null): void

    // Own virtual methods of Eog-3.0.Eog.Window

    vfunc_prepared(): void

    // Own signals of Eog-3.0.Eog.Window

    connect(sigName: "prepared", callback: Window.PreparedSignalCallback): number
    connect_after(sigName: "prepared", callback: Window.PreparedSignalCallback): number
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

export class Window extends Gtk.ApplicationWindow {

    // Own properties of Eog-3.0.Eog.Window

    static name: string
    static $gtype: GObject.GType<Window>

    // Constructors of Eog-3.0.Eog.Window

    constructor(config?: Window.ConstructorProperties) 
    /**
     * Creates a new and empty #EogWindow. Use `flags` to indicate
     * if the window should be initialized fullscreen, in slideshow mode,
     * and/or without the thumbnails gallery visible. See #EogStartupFlags.
     * @constructor 
     * @param flags the initialization parameters for the new window.
     * @returns a newly created #EogWindow.
     */
    constructor(flags: StartupFlags) 
    /**
     * Creates a new and empty #EogWindow. Use `flags` to indicate
     * if the window should be initialized fullscreen, in slideshow mode,
     * and/or without the thumbnails gallery visible. See #EogStartupFlags.
     * @constructor 
     * @param flags the initialization parameters for the new window.
     * @returns a newly created #EogWindow.
     */
    static new(flags: StartupFlags): Window

    // Overloads of new

    /**
     * Creates a new #GtkApplicationWindow.
     * @constructor 
     * @param application a #GtkApplication
     * @returns a newly created #GtkApplicationWindow
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
     * @returns a new #GtkWindow.
     */
    static new(type: Gtk.WindowType): Gtk.Window
    _init(config?: Window.ConstructorProperties): void
}

export interface ApplicationActivatableInterface {

    // Own fields of Eog-3.0.Eog.ApplicationActivatableInterface

    g_iface: GObject.TypeInterface
    activate: (activatable: ApplicationActivatable) => void
    deactivate: (activatable: ApplicationActivatable) => void
}

export abstract class ApplicationActivatableInterface {

    // Own properties of Eog-3.0.Eog.ApplicationActivatableInterface

    static name: string
}

export interface ApplicationClass {

    // Own fields of Eog-3.0.Eog.ApplicationClass

    parent_class: Gtk.ApplicationClass
}

export abstract class ApplicationClass {

    // Own properties of Eog-3.0.Eog.ApplicationClass

    static name: string
}

export interface ApplicationPrivate {
}

export class ApplicationPrivate {

    // Own properties of Eog-3.0.Eog.ApplicationPrivate

    static name: string
}

export interface ClipboardHandlerClass {

    // Own fields of Eog-3.0.Eog.ClipboardHandlerClass

    parent_klass: GObject.ObjectClass
}

export abstract class ClipboardHandlerClass {

    // Own properties of Eog-3.0.Eog.ClipboardHandlerClass

    static name: string
}

export interface ClipboardHandlerPrivate {
}

export class ClipboardHandlerPrivate {

    // Own properties of Eog-3.0.Eog.ClipboardHandlerPrivate

    static name: string
}

export interface DetailsDialogClass {

    // Own fields of Eog-3.0.Eog.DetailsDialogClass

    parent_class: Gtk.WindowClass
}

export abstract class DetailsDialogClass {

    // Own properties of Eog-3.0.Eog.DetailsDialogClass

    static name: string
}

export interface DetailsDialogPrivate {
}

export class DetailsDialogPrivate {

    // Own properties of Eog-3.0.Eog.DetailsDialogPrivate

    static name: string
}

export interface FileChooserClass {

    // Own fields of Eog-3.0.Eog.FileChooserClass

    parent_class: Gtk.FileChooserDialogClass
}

export abstract class FileChooserClass {

    // Own properties of Eog-3.0.Eog.FileChooserClass

    static name: string
}

export interface FileChooserPrivate {
}

export class FileChooserPrivate {

    // Own properties of Eog-3.0.Eog.FileChooserPrivate

    static name: string
}

export interface ImageClass {

    // Own fields of Eog-3.0.Eog.ImageClass

    parent_class: GObject.ObjectClass
    changed: (img: Image) => void
    size_prepared: (img: Image, width: number, height: number) => void
    thumbnail_changed: (img: Image) => void
    save_progress: (img: Image, progress: number) => void
    next_frame: (img: Image, delay: number) => void
    file_changed: (img: Image) => void
}

export abstract class ImageClass {

    // Own properties of Eog-3.0.Eog.ImageClass

    static name: string
}

export interface ImagePrivate {
}

export class ImagePrivate {

    // Own properties of Eog-3.0.Eog.ImagePrivate

    static name: string
}

export interface ImageSaveInfoClass {

    // Own fields of Eog-3.0.Eog.ImageSaveInfoClass

    parent_klass: GObject.ObjectClass
}

export abstract class ImageSaveInfoClass {

    // Own properties of Eog-3.0.Eog.ImageSaveInfoClass

    static name: string
}

export interface JobClass {

    // Own fields of Eog-3.0.Eog.JobClass

    parent_class: GObject.ObjectClass
    run: (job: Job) => void
    progress: (job: Job, progress: number) => void
    cancelled: (job: Job) => void
    finished: (job: Job) => void
}

export abstract class JobClass {

    // Own properties of Eog-3.0.Eog.JobClass

    static name: string
}

export interface JobCopyClass {

    // Own fields of Eog-3.0.Eog.JobCopyClass

    parent_class: JobClass
}

export abstract class JobCopyClass {

    // Own properties of Eog-3.0.Eog.JobCopyClass

    static name: string
}

export interface JobLoadClass {

    // Own fields of Eog-3.0.Eog.JobLoadClass

    parent_class: JobClass
}

export abstract class JobLoadClass {

    // Own properties of Eog-3.0.Eog.JobLoadClass

    static name: string
}

export interface JobModelClass {

    // Own fields of Eog-3.0.Eog.JobModelClass

    parent_class: JobClass
}

export abstract class JobModelClass {

    // Own properties of Eog-3.0.Eog.JobModelClass

    static name: string
}

export interface JobSaveAsClass {

    // Own fields of Eog-3.0.Eog.JobSaveAsClass

    parent: JobSaveClass
}

export abstract class JobSaveAsClass {

    // Own properties of Eog-3.0.Eog.JobSaveAsClass

    static name: string
}

export interface JobSaveClass {

    // Own fields of Eog-3.0.Eog.JobSaveClass

    parent_class: JobClass
}

export abstract class JobSaveClass {

    // Own properties of Eog-3.0.Eog.JobSaveClass

    static name: string
}

export interface JobThumbnailClass {

    // Own fields of Eog-3.0.Eog.JobThumbnailClass

    parent_class: JobClass
}

export abstract class JobThumbnailClass {

    // Own properties of Eog-3.0.Eog.JobThumbnailClass

    static name: string
}

export interface JobTransformClass {

    // Own fields of Eog-3.0.Eog.JobTransformClass

    parent_class: JobClass
}

export abstract class JobTransformClass {

    // Own properties of Eog-3.0.Eog.JobTransformClass

    static name: string
}

export interface ListStoreClass {

    // Own fields of Eog-3.0.Eog.ListStoreClass

    parent_class: Gtk.ListStoreClass
    draw_thumbnail: (store: ListStore) => void
}

export abstract class ListStoreClass {

    // Own properties of Eog-3.0.Eog.ListStoreClass

    static name: string
}

export interface ListStorePrivate {
}

export class ListStorePrivate {

    // Own properties of Eog-3.0.Eog.ListStorePrivate

    static name: string
}

export interface RemotePresenterClass {

    // Own fields of Eog-3.0.Eog.RemotePresenterClass

    parent_class: Gtk.WindowClass
}

export abstract class RemotePresenterClass {

    // Own properties of Eog-3.0.Eog.RemotePresenterClass

    static name: string
}

export interface RemotePresenterPrivate {
}

export class RemotePresenterPrivate {

    // Own properties of Eog-3.0.Eog.RemotePresenterPrivate

    static name: string
}

export interface ScrollViewClass {

    // Own fields of Eog-3.0.Eog.ScrollViewClass

    parent_class: Gtk.OverlayClass
    zoom_changed: (view: ScrollView, zoom: number) => void
    rotation_changed: (view: ScrollView, degrees: number) => void
    next_image: (view: ScrollView) => void
    previous_image: (view: ScrollView) => void
}

export abstract class ScrollViewClass {

    // Own properties of Eog-3.0.Eog.ScrollViewClass

    static name: string
}

export interface ScrollViewPrivate {
}

export class ScrollViewPrivate {

    // Own properties of Eog-3.0.Eog.ScrollViewPrivate

    static name: string
}

export interface SidebarClass {

    // Own fields of Eog-3.0.Eog.SidebarClass

    base_class: Gtk.BoxClass
    page_added: (eog_sidebar: Sidebar, main_widget: Gtk.Widget) => void
    page_removed: (eog_sidebar: Sidebar, main_widget: Gtk.Widget) => void
}

export abstract class SidebarClass {

    // Own properties of Eog-3.0.Eog.SidebarClass

    static name: string
}

export interface SidebarPrivate {
}

export class SidebarPrivate {

    // Own properties of Eog-3.0.Eog.SidebarPrivate

    static name: string
}

export interface StatusbarClass {

    // Own fields of Eog-3.0.Eog.StatusbarClass

    parent_class: Gtk.StatusbarClass
}

export abstract class StatusbarClass {

    // Own properties of Eog-3.0.Eog.StatusbarClass

    static name: string
}

export interface StatusbarPrivate {
}

export class StatusbarPrivate {

    // Own properties of Eog-3.0.Eog.StatusbarPrivate

    static name: string
}

export interface ThumbNavClass {

    // Own fields of Eog-3.0.Eog.ThumbNavClass

    parent_class: Gtk.BoxClass
}

export abstract class ThumbNavClass {

    // Own properties of Eog-3.0.Eog.ThumbNavClass

    static name: string
}

export interface ThumbNavPrivate {
}

export class ThumbNavPrivate {

    // Own properties of Eog-3.0.Eog.ThumbNavPrivate

    static name: string
}

export interface ThumbViewClass {

    // Own fields of Eog-3.0.Eog.ThumbViewClass

    icon_view_class: Gtk.IconViewClass
}

export abstract class ThumbViewClass {

    // Own properties of Eog-3.0.Eog.ThumbViewClass

    static name: string
}

export interface ThumbViewPrivate {
}

export class ThumbViewPrivate {

    // Own properties of Eog-3.0.Eog.ThumbViewPrivate

    static name: string
}

export interface TransformClass {

    // Own fields of Eog-3.0.Eog.TransformClass

    parent_klass: GObject.ObjectClass
}

export abstract class TransformClass {

    // Own properties of Eog-3.0.Eog.TransformClass

    static name: string
}

export interface TransformPrivate {
}

export class TransformPrivate {

    // Own properties of Eog-3.0.Eog.TransformPrivate

    static name: string
}

export interface UCInfo {

    // Own fields of Eog-3.0.Eog.UCInfo

    description: string | null
    rep: string | null
    req_exif: boolean
}

export class UCInfo {

    // Own properties of Eog-3.0.Eog.UCInfo

    static name: string
}

export interface URIConverterClass {

    // Own fields of Eog-3.0.Eog.URIConverterClass

    parent_klass: GObject.ObjectClass
}

export abstract class URIConverterClass {

    // Own properties of Eog-3.0.Eog.URIConverterClass

    static name: string
}

export interface URIConverterPrivate {
}

export class URIConverterPrivate {

    // Own properties of Eog-3.0.Eog.URIConverterPrivate

    static name: string
}

export interface WindowActivatableInterface {

    // Own fields of Eog-3.0.Eog.WindowActivatableInterface

    g_iface: GObject.TypeInterface
    activate: (activatable: WindowActivatable) => void
    deactivate: (activatable: WindowActivatable) => void
}

export abstract class WindowActivatableInterface {

    // Own properties of Eog-3.0.Eog.WindowActivatableInterface

    static name: string
}

export interface WindowClass {

    // Own fields of Eog-3.0.Eog.WindowClass

    prepared: (window: Window) => void
}

export abstract class WindowClass {

    // Own properties of Eog-3.0.Eog.WindowClass

    static name: string
}

export interface WindowPrivate {
}

export class WindowPrivate {

    // Own properties of Eog-3.0.Eog.WindowPrivate

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END