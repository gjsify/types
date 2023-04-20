
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * Gtef-2
 */

import type GtkSource from '@girs/gtksource-3.0';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from '@girs/cairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gio from '@girs/gio-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Atk from '@girs/atk-1.0';

export enum CompressionType {
    /**
     * plain text.
     */
    NONE,
    /**
     * gzip compression.
     */
    GZIP,
}
/**
 * An error code used with the %GTEF_FILE_LOADER_ERROR domain.
 */
export enum FileLoaderError {
    /**
     * The file is too big.
     */
    TOO_BIG,
    /**
     * It is not possible to
     *   detect the encoding automatically.
     */
    ENCODING_AUTO_DETECTION_FAILED,
}
/**
 * An error code used with the %GTEF_FILE_SAVER_ERROR domain.
 */
export enum FileSaverError {
    /**
     * The buffer contains invalid
     *   characters.
     */
    INVALID_CHARS,
    /**
     * The file is externally
     *   modified.
     */
    EXTERNALLY_MODIFIED,
}
export enum NewlineType {
    /**
     * line feed, used on UNIX.
     */
    LF,
    /**
     * carriage return, used on Mac.
     */
    CR,
    /**
     * carriage return followed by a line feed, used
     *   on Windows.
     */
    CR_LF,
}
export enum SelectionType {
    /**
     * No selection.
     */
    NO_SELECTION,
    /**
     * The start and end selection bounds are on
     *   the same line.
     */
    ON_SAME_LINE,
    /**
     * The selection spans multiple lines.
     */
    MULTIPLE_LINES,
}
/**
 * Flags to define the behavior of a #GtefFileSaver.
 * @bitfield 
 */
export enum FileSaverFlags {
    /**
     * No flags.
     */
    NONE,
    /**
     * Ignore invalid characters.
     */
    IGNORE_INVALID_CHARS,
    /**
     * Save file despite external modifications.
     */
    IGNORE_MODIFICATION_TIME,
    /**
     * Create a backup before saving the file.
     */
    CREATE_BACKUP,
}
/**
 * The folding state at a certain line in the #GtkTextBuffer.
 * 
 * Since #GtefGutterRendererFolds has a flat view of the folding tree, some
 * states can be combined; for example, %GTEF_GUTTER_RENDERER_FOLDS_STATE_END
 * and %GTEF_GUTTER_RENDERER_FOLDS_STATE_CONTINUE.
 * @bitfield 
 */
export enum GutterRendererFoldsState {
    /**
     * No code folding here.
     */
    NONE,
    /**
     * Start of currently folded
     *   fold region.
     */
    START_FOLDED,
    /**
     * Start of currently opened
     *   fold region.
     */
    START_OPENED,
    /**
     * Fold region continues.
     */
    CONTINUE,
    /**
     * End of fold region.
     */
    END,
}
/**
 * A wrapper function for g_action_map_add_action_entries() that checks
 * duplicates.
 * 
 * This function first checks - for each entry - that the `action_map` doesn't
 * already contain a #GAction with the same name. A warning is printed if an old
 * action will be dropped. In any case, it then calls
 * g_action_map_add_action_entries() with the same arguments as passed to this
 * function.
 * 
 * This function also checks if there are duplicates in the `entries` array
 * itself.
 * @param action_map a #GActionMap.
 * @param entries a pointer to           the first item in an array of #GActionEntry structs.
 * @param user_data the user data for signal connections.
 */
export function action_map_add_action_entries_check_dups(action_map: Gio.ActionMap, entries: Gio.ActionEntry[], user_data: any | null): void
/**
 * Gets a list of all encodings known by #GtefEncoding.
 * @returns a list of #GtefEncoding's.
 */
export function encoding_get_all(): Encoding[]
/**
 * Gets the list of default candidate encodings to try when loading a file. See
 * gtk_source_file_loader_set_candidate_encodings().
 * 
 * This function returns a different list depending on the current locale (i.e.
 * language, country and default encoding). The UTF-8 encoding and the current
 * locale encoding are guaranteed to be present in the returned list.
 * @returns the list of default candidate encodings.
 */
export function encoding_get_default_candidates(): Encoding[]
export function file_loader_error_quark(): GLib.Quark
export function file_saver_error_quark(): GLib.Quark
/**
 * Gets the indentation, as a string, of the line at `iter`. `iter` can be
 * anywhere in the line.
 * 
 * Possible use-case: to implement an action that inserts some text in a
 * #GtkTextBuffer. If the text to insert spans multiple lines, it is usually
 * desired to keep the same indentation level.
 * @param iter a #GtkTextIter.
 * @returns the line indentation at @iter. Free with g_free().
 */
export function iter_get_line_indentation(iter: Gtk.TextIter): string | null
export function menu_item_get_long_description(menu_item: Gtk.MenuItem): string | null
/**
 * Sets an icon to a #GtkMenuItem.
 * 
 * If the child widget of `item` is already a #GtkBox, all #GtkImage widgets
 * inside that box are first destroyed. A #GtkImage for `icon_name` is then
 * inserted to the box.
 * 
 * If the child widget of `item` is not a #GtkBox (it's usually the
 * #GtkAccelLabel), it is replaced by a new #GtkBox and the initial child widget
 * is inserted to the #GtkBox, alongside the icon.
 * 
 * As a consequence, if you want to call functions on the #GtkAccelLabel, it's
 * easier to do it before calling this function.
 * @param item a #GtkMenuItem.
 * @param icon_name an icon name.
 */
export function menu_item_set_icon_name(item: Gtk.MenuItem, icon_name: string | null): void
/**
 * Sets the long description of `menu_item`. A possible use-case is to display it
 * in a #GtkStatusbar, or as a tooltip.
 * @param menu_item a #GtkMenuItem.
 * @param long_description the long description, or %NULL to unset it.
 */
export function menu_item_set_long_description(menu_item: Gtk.MenuItem, long_description: string | null): void
/**
 * This function initializes the metadata manager.
 * 
 * The `metadata_path` must be different for each process. It is advised for your
 * application to rely on #GApplication process uniqueness.
 * 
 * A good place to store the metadata is in a sub-directory of the user data
 * directory. See g_get_user_data_dir().
 * @param metadata_path the filename where the metadata is stored.
 */
export function metadata_manager_init(metadata_path: string | null): void
/**
 * This function saves synchronously metadata if they need to be saved, and
 * frees the internal data of the metadata manager.
 */
export function metadata_manager_shutdown(): void
/**
 * Gets the URI of `item`. `item` must be a child of `menu`. `menu` must be a
 * #GtkRecentChooserMenu.
 * 
 * This function has been written because the value returned by
 * gtk_recent_chooser_get_current_uri() is not updated when #GtkMenuItem's of a
 * #GtkRecentChooserMenu are selected/deselected.
 * @param menu a #GtkRecentChooserMenu.
 * @param item a #GtkMenuItem.
 * @returns the URI of @item. Free with g_free() when no longer needed.
 */
export function utils_recent_chooser_menu_get_item_uri(menu: Gtk.RecentChooserMenu, item: Gtk.MenuItem): string | null
export module ActionInfoCentralStore {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ActionInfoCentralStore {

    // Own fields of Gtef-2.Gtef.ActionInfoCentralStore

    parent: GObject.Object
    priv: ActionInfoCentralStorePrivate

    // Owm methods of Gtef-2.Gtef.ActionInfoCentralStore

    lookup(action_name: string | null): ActionInfo

    // Class property signals of Gtef-2.Gtef.ActionInfoCentralStore

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ActionInfoCentralStore extends GObject.Object {

    // Own properties of Gtef-2.Gtef.ActionInfoCentralStore

    static name: string
    static $gtype: GObject.GType<ActionInfoCentralStore>

    // Constructors of Gtef-2.Gtef.ActionInfoCentralStore

    constructor(config?: ActionInfoCentralStore.ConstructorProperties) 
    _init(config?: ActionInfoCentralStore.ConstructorProperties): void
    static get_instance(): ActionInfoCentralStore
}

export module ActionInfoStore {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gtef-2.Gtef.ActionInfoStore

        /**
         * The associated #GtkApplication. #GtefActionInfoStore has a weak
         * reference to the #GtkApplication.
         */
        application?: Gtk.Application | null
    }

}

export interface ActionInfoStore {

    // Own properties of Gtef-2.Gtef.ActionInfoStore

    /**
     * The associated #GtkApplication. #GtefActionInfoStore has a weak
     * reference to the #GtkApplication.
     */
    readonly application: Gtk.Application

    // Own fields of Gtef-2.Gtef.ActionInfoStore

    parent: GObject.Object
    priv: ActionInfoStorePrivate

    // Owm methods of Gtef-2.Gtef.ActionInfoStore

    /**
     * Inserts `info` into `store` and into the #GtefActionInfoCentralStore. Both the
     * `store` and central store must <emphasis>not</emphasis> already contain a
     * #GtefActionInfo with the same action name. The stores take their own
     * reference on `info`.
     * @param info a #GtefActionInfo.
     */
    add(info: ActionInfo): void
    /**
     * Calls gtef_action_info_store_add() for each entry.
     * 
     * If `translation_domain` is not %NULL, g_dgettext() is used to translate the
     * `label` and `tooltip` of each entry before setting them to the #GtefActionInfo.
     * 
     * An API similar to g_action_map_add_action_entries().
     * @param entries a pointer to the first item in an array of #GtefActionInfoEntry structs.
     * @param translation_domain a gettext domain, or %NULL.
     */
    add_entries(entries: ActionInfoEntry[], translation_domain: string | null): void
    /**
     * Checks that all #GtefActionInfo's of `store` have been used by
     * gtef_action_info_store_create_menu_item(). If not, a warning is printed and
     * might indicate dead code.
     * 
     * You probably want to call this function on the store returned by
     * gtef_application_get_app_action_info_store(). But it can also be useful for a
     * store provided by a library, to easily see which actions you don't use.
     */
    check_all_used(): void
    /**
     * Creates a new #GtkMenuItem for `action_name`. The `store` must contain a
     * #GtefActionInfo for `action_name`.
     * 
     * gtk_actionable_set_action_name() is called on the menu item with
     * `action_name`. The label is set with the #GtkMenuItem:use-underline property
     * enabled. The first accelerator is set to the #GtkAccelLabel of the menu item.
     * The icon is set. And the tooltip is set with
     * gtef_menu_item_set_long_description().
     * 
     * If #GtefActionInfoStore:application is non-%NULL, this function also calls
     * gtk_application_set_accels_for_action() with the accelerators returned by
     * gtef_action_info_get_accels() (this will erase previously set accelerators
     * for that action, if any).
     * @param action_name an action name.
     * @returns a new #GtkMenuItem for @action_name.
     */
    create_menu_item(action_name: string | null): Gtk.Widget
    get_application(): Gtk.Application | null
    lookup(action_name: string | null): ActionInfo

    // Class property signals of Gtef-2.Gtef.ActionInfoStore

    connect(sigName: "notify::application", callback: (($obj: ActionInfoStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: ActionInfoStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ActionInfoStore extends GObject.Object {

    // Own properties of Gtef-2.Gtef.ActionInfoStore

    static name: string
    static $gtype: GObject.GType<ActionInfoStore>

    // Constructors of Gtef-2.Gtef.ActionInfoStore

    constructor(config?: ActionInfoStore.ConstructorProperties) 
    /**
     * Creates a new #GtefActionInfoStore object. Associating a #GtkApplication is
     * optional.
     * @constructor 
     * @param application a #GtkApplication, or %NULL.
     * @returns a new #GtefActionInfoStore.
     */
    constructor(application: Gtk.Application | null) 
    /**
     * Creates a new #GtefActionInfoStore object. Associating a #GtkApplication is
     * optional.
     * @constructor 
     * @param application a #GtkApplication, or %NULL.
     * @returns a new #GtefActionInfoStore.
     */
    static new(application: Gtk.Application | null): ActionInfoStore
    _init(config?: ActionInfoStore.ConstructorProperties): void
}

export module Application {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gtef-2.Gtef.Application

        /**
         * The #GtkApplication.
         */
        application?: Gtk.Application | null
    }

}

export interface Application {

    // Own properties of Gtef-2.Gtef.Application

    /**
     * The #GtkApplication.
     */
    readonly application: Gtk.Application

    // Own fields of Gtef-2.Gtef.Application

    parent: GObject.Object
    priv: ApplicationPrivate

    // Owm methods of Gtef-2.Gtef.Application

    /**
     * Returns an initially empty #GtefActionInfoStore reserved for the
     * application-specific actions. Libraries should not add #GtefActionInfo's to
     * this store. Libraries should provide their own store if they want to share
     * #GtefActionInfo's.
     * @returns the #GtefActionInfoStore reserved for the application.
     */
    get_app_action_info_store(): ActionInfoStore
    get_application(): Gtk.Application
    /**
     * Calls g_application_open() with a single file and an empty hint.
     * @param file a #GFile.
     */
    open_simple(file: Gio.File): void

    // Class property signals of Gtef-2.Gtef.Application

    connect(sigName: "notify::application", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Application extends GObject.Object {

    // Own properties of Gtef-2.Gtef.Application

    static name: string
    static $gtype: GObject.GType<Application>

    // Constructors of Gtef-2.Gtef.Application

    constructor(config?: Application.ConstructorProperties) 
    _init(config?: Application.ConstructorProperties): void
    /**
     * Convenience function that calls g_application_get_default() followed by
     * gtef_application_get_from_gtk_application(). The object returned by
     * g_application_get_default() must be a #GtkApplication.
     * @returns the default #GtefApplication.
     */
    static get_default(): Application
    /**
     * Returns the #GtefApplication of `gtk_app`. The returned object is guaranteed
     * to be the same for the lifetime of `gtk_app`.
     * @param gtk_app a #GtkApplication.
     * @returns the #GtefApplication of @gtk_app.
     */
    static get_from_gtk_application(gtk_app: Gtk.Application): Application
}

export module ApplicationWindow {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gtef-2.Gtef.ApplicationWindow

        /**
         * The #GtkApplicationWindow.
         */
        application_window?: Gtk.ApplicationWindow | null
        /**
         * The #GtkStatusbar. %NULL by default.
         */
        statusbar?: Gtk.Statusbar | null
    }

}

export interface ApplicationWindow {

    // Own properties of Gtef-2.Gtef.ApplicationWindow

    /**
     * The #GtkApplicationWindow.
     */
    readonly application_window: Gtk.ApplicationWindow
    /**
     * The #GtkStatusbar. %NULL by default.
     */
    statusbar: Gtk.Statusbar

    // Own fields of Gtef-2.Gtef.ApplicationWindow

    parent: GObject.Object
    priv: ApplicationWindowPrivate

    // Owm methods of Gtef-2.Gtef.ApplicationWindow

    /**
     * Connect to the #GtefMenuShell::menu-item-selected and
     * #GtefMenuShell::menu-item-deselected signals of `gtef_menu_shell` to push/pop
     * the long description of #GtkMenuItem's to the
     * #GtefApplicationWindow:statusbar.
     * 
     * The long description is retrieved with gtef_menu_item_get_long_description().
     * So gtef_menu_item_set_long_description() must have been called, which is the
     * case if the #GtkMenuItem has been created with the functions available in
     * #GtefActionInfoStore.
     * @param gtef_menu_shell a #GtefMenuShell.
     */
    connect_menu_to_statusbar(gtef_menu_shell: MenuShell): void
    /**
     * An alternative to gtk_recent_chooser_set_show_tips(). Shows the full path in
     * the #GtefApplicationWindow:statusbar when a #GtkMenuItem of `menu` is
     * selected.
     * 
     * The full path is retrieved with
     * gtef_utils_recent_chooser_menu_get_item_uri().
     * @param menu a #GtkRecentChooserMenu.
     */
    connect_recent_chooser_menu_to_statusbar(menu: Gtk.RecentChooserMenu): void
    /**
     * Creates a #GtkMenuItem with a simple and generic #GtkRecentChooserMenu as
     * submenu.
     * 
     * The #GtkRecentChooser is configured to show files only recently used with the
     * current application, as returned by g_get_application_name(). If recent files
     * are added to the default #GtkRecentManager with
     * gtk_recent_manager_add_item(), the files will normally show up in the
     * #GtkRecentChooserMenu.
     * 
     * The #GtkRecentChooserMenu is connected to the statusbar with
     * gtef_application_window_connect_recent_chooser_menu_to_statusbar().
     * 
     * When the #GtkRecentChooser::item-activated signal is emitted,
     * gtef_application_open_simple() is called, so the #GApplication must have the
     * %G_APPLICATION_HANDLES_OPEN flag set.
     * @returns a new #GtkMenuItem.
     */
    create_open_recent_menu_item(): Gtk.Widget
    get_application_window(): Gtk.ApplicationWindow
    get_statusbar(): Gtk.Statusbar | null
    /**
     * Sets the #GtefApplicationWindow:statusbar property.
     * @param statusbar a #GtkStatusbar, or %NULL.
     */
    set_statusbar(statusbar: Gtk.Statusbar | null): void

    // Class property signals of Gtef-2.Gtef.ApplicationWindow

    connect(sigName: "notify::application-window", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-window", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application-window", ...args: any[]): void
    connect(sigName: "notify::statusbar", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::statusbar", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::statusbar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ApplicationWindow extends GObject.Object {

    // Own properties of Gtef-2.Gtef.ApplicationWindow

    static name: string
    static $gtype: GObject.GType<ApplicationWindow>

    // Constructors of Gtef-2.Gtef.ApplicationWindow

    constructor(config?: ApplicationWindow.ConstructorProperties) 
    _init(config?: ApplicationWindow.ConstructorProperties): void
    /**
     * Returns the #GtefApplicationWindow of `gtk_window`. The returned object is
     * guaranteed to be the same for the lifetime of `gtk_window`.
     * @param gtk_window a #GtkApplicationWindow.
     * @returns the #GtefApplicationWindow of @gtk_window.
     */
    static get_from_gtk_application_window(gtk_window: Gtk.ApplicationWindow): ApplicationWindow
}

export module Buffer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `gtef-cursor-moved`
     */
    export interface GtefCursorMovedSignalCallback {
        ($obj: Buffer): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GtkSource.Buffer.ConstructorProperties {

        // Own constructor properties of Gtef-2.Gtef.Buffer

        /**
         * The #GtkSourceBuffer:style-scheme ID, as a string. This property is
         * useful for binding it to a #GSettings key.
         * 
         * When the #GtkSourceBuffer:style-scheme is %NULL,
         * #GtefBuffer:gtef-style-scheme-id contains the empty string.
         */
        gtef_style_scheme_id?: string | null
    }

}

export interface Buffer {

    // Own properties of Gtef-2.Gtef.Buffer

    /**
     * The #GtkSourceBuffer:style-scheme ID, as a string. This property is
     * useful for binding it to a #GSettings key.
     * 
     * When the #GtkSourceBuffer:style-scheme is %NULL,
     * #GtefBuffer:gtef-style-scheme-id contains the empty string.
     */
    gtef_style_scheme_id: string | null
    /**
     * The buffer title. See gtef_buffer_get_title().
     */
    readonly gtef_title: string | null

    // Conflicting properties

    priv: any & Gtk.TextBufferPrivate

    // Own fields of Gtef-2.Gtef.Buffer

    parent_instance: GtkSource.Buffer & Gtk.TextBuffer & GObject.Object & GObject.Object

    // Owm methods of Gtef-2.Gtef.Buffer

    /**
     * Returns the #GtefFile of `buffer`. The returned object is guaranteed to be the
     * same for the lifetime of `buffer`.
     * @returns the associated #GtefFile.
     */
    get_file(): File
    get_selection_type(): SelectionType
    get_style_scheme_id(): string | null
    /**
     * Returns a title suitable for a #GtkWindow title. It contains (in that order):
     * - '*' if the buffer is modified;
     * - the #GtefFile:short-name;
     * - the directory path in parenthesis if the #GtefFile:location isn't
     *   %NULL.
     * @returns the @buffer title. Free the return value with g_free() when no longer needed.
     */
    get_title(): string | null
    /**
     * Returns whether `buffer` is untouched.
     * 
     * This function is for example useful to know if we can re-use this buffer to
     * load a file, instead of opening a new tab or window.
     * 
     * For this function to return %TRUE, the `buffer` must be empty, non-modified,
     * the undo/redo #GtkSourceBuffer history must be empty, and the
     * #GtefFile:location must be %NULL.
     * @returns %TRUE if @buffer has not been touched, %FALSE otherwise.
     */
    is_untouched(): boolean
    /**
     * Sets the #GtefBuffer:gtef-style-scheme-id property.
     * 
     * The #GtkSourceStyleScheme is taken from the default
     * #GtkSourceStyleSchemeManager as returned by
     * gtk_source_style_scheme_manager_get_default().
     * @param style_scheme_id the new value.
     */
    set_style_scheme_id(style_scheme_id: string | null): void

    // Own virtual methods of Gtef-2.Gtef.Buffer

    vfunc_gtef_cursor_moved(): void

    // Own signals of Gtef-2.Gtef.Buffer

    connect(sigName: "gtef-cursor-moved", callback: Buffer.GtefCursorMovedSignalCallback): number
    connect_after(sigName: "gtef-cursor-moved", callback: Buffer.GtefCursorMovedSignalCallback): number
    emit(sigName: "gtef-cursor-moved", ...args: any[]): void

    // Class property signals of Gtef-2.Gtef.Buffer

    connect(sigName: "notify::gtef-style-scheme-id", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gtef-style-scheme-id", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gtef-style-scheme-id", ...args: any[]): void
    connect(sigName: "notify::gtef-title", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gtef-title", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gtef-title", ...args: any[]): void
    connect(sigName: "notify::can-redo", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-redo", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-redo", ...args: any[]): void
    connect(sigName: "notify::can-undo", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-undo", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-undo", ...args: any[]): void
    connect(sigName: "notify::highlight-matching-brackets", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highlight-matching-brackets", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::highlight-matching-brackets", ...args: any[]): void
    connect(sigName: "notify::highlight-syntax", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highlight-syntax", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::highlight-syntax", ...args: any[]): void
    connect(sigName: "notify::implicit-trailing-newline", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::implicit-trailing-newline", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::implicit-trailing-newline", ...args: any[]): void
    connect(sigName: "notify::language", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::language", ...args: any[]): void
    connect(sigName: "notify::max-undo-levels", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-undo-levels", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-undo-levels", ...args: any[]): void
    connect(sigName: "notify::style-scheme", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style-scheme", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style-scheme", ...args: any[]): void
    connect(sigName: "notify::undo-manager", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::undo-manager", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::undo-manager", ...args: any[]): void
    connect(sigName: "notify::copy-target-list", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::copy-target-list", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::copy-target-list", ...args: any[]): void
    connect(sigName: "notify::cursor-position", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-position", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor-position", ...args: any[]): void
    connect(sigName: "notify::has-selection", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-selection", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-selection", ...args: any[]): void
    connect(sigName: "notify::paste-target-list", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paste-target-list", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::paste-target-list", ...args: any[]): void
    connect(sigName: "notify::tag-table", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag-table", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tag-table", ...args: any[]): void
    connect(sigName: "notify::text", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Buffer extends GtkSource.Buffer {

    // Own properties of Gtef-2.Gtef.Buffer

    static name: string
    static $gtype: GObject.GType<Buffer>

    // Constructors of Gtef-2.Gtef.Buffer

    constructor(config?: Buffer.ConstructorProperties) 
    constructor() 
    static new(): Buffer

    // Overloads of new

    /**
     * Creates a new source buffer.
     * @constructor 
     * @param table a #GtkTextTagTable, or %NULL to create a new one.
     * @returns a new source buffer.
     */
    static new(table: Gtk.TextTagTable | null): GtkSource.Buffer
    /**
     * Creates a new text buffer.
     * @constructor 
     * @param table a tag table, or %NULL to create a new one
     * @returns a new text buffer
     */
    static new(table: Gtk.TextTagTable | null): Gtk.TextBuffer
    _init(config?: Buffer.ConstructorProperties): void
}

export module File {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gtef-2.Gtef.File

        /**
         * The location.
         */
        location?: Gio.File | null
    }

}

export interface File {

    // Own properties of Gtef-2.Gtef.File

    /**
     * The compression type.
     */
    readonly compression_type: CompressionType
    /**
     * The character encoding, initially %NULL. After a successful file
     * loading or saving operation, the encoding is non-%NULL.
     */
    readonly encoding: Encoding
    /**
     * The location.
     */
    location: Gio.File
    /**
     * The line ending type.
     */
    readonly newline_type: NewlineType
    /**
     * Whether the file is read-only or not. The value of this property is
     * not updated automatically (there is no file monitors).
     */
    readonly read_only: boolean
    /**
     * The file short name. See gtef_file_get_short_name().
     */
    readonly short_name: string | null

    // Own fields of Gtef-2.Gtef.File

    parent_instance: GObject.Object

    // Owm methods of Gtef-2.Gtef.File

    /**
     * Checks synchronously the file on disk, to know whether the file is externally
     * modified, or has been deleted, and whether the file is read-only.
     * 
     * #GtefFile doesn't create a #GFileMonitor to track those properties, so
     * this function needs to be called instead. Creating lots of #GFileMonitor's
     * would take lots of resources.
     * 
     * Since this function is synchronous, it is advised to call it only on local
     * files. See gtef_file_is_local().
     */
    check_file_on_disk(): void
    get_compression_type(): CompressionType
    /**
     * The encoding is initially %NULL. After a successful file loading or saving
     * operation, the encoding is non-%NULL.
     * @returns the character encoding.
     */
    get_encoding(): Encoding
    get_file_metadata(): FileMetadata
    get_location(): Gio.File
    get_newline_type(): NewlineType
    /**
     * Gets the `file` short name. If the #GtefFile:location isn't %NULL,
     * returns its display-name (see #G_FILE_ATTRIBUTE_STANDARD_DISPLAY_NAME).
     * Otherwise returns "Untitled File N", with N the Nth untitled file of the
     * application, starting at 1. When an untitled file is closed, its number is
     * released and can be used by a later untitled file.
     * @returns the @file short name.
     */
    get_short_name(): string | null
    /**
     * Returns whether the file has been deleted. If the
     * #GtefFile:location is %NULL, returns %FALSE.
     * 
     * To have an up-to-date value, you must first call
     * gtef_file_check_file_on_disk().
     * @returns whether the file has been deleted.
     */
    is_deleted(): boolean
    /**
     * Returns whether the file is externally modified. If the
     * #GtefFile:location is %NULL, returns %FALSE.
     * 
     * To have an up-to-date value, you must first call
     * gtef_file_check_file_on_disk().
     * @returns whether the file is externally modified.
     */
    is_externally_modified(): boolean
    /**
     * Returns whether the file is local. If the #GtefFile:location is %NULL,
     * returns %FALSE.
     * @returns whether the file is local.
     */
    is_local(): boolean
    /**
     * Returns whether the file is read-only. If the
     * #GtefFile:location is %NULL, returns %FALSE.
     * 
     * To have an up-to-date value, you must first call
     * gtef_file_check_file_on_disk().
     * @returns whether the file is read-only.
     */
    is_readonly(): boolean
    /**
     * Sets the location.
     * @param location the new #GFile, or %NULL.
     */
    set_location(location: Gio.File | null): void

    // Class property signals of Gtef-2.Gtef.File

    connect(sigName: "notify::compression-type", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compression-type", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::compression-type", ...args: any[]): void
    connect(sigName: "notify::encoding", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encoding", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::encoding", ...args: any[]): void
    connect(sigName: "notify::location", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::newline-type", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::newline-type", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::newline-type", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-only", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::short-name", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::short-name", callback: (($obj: File, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::short-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class File extends GObject.Object {

    // Own properties of Gtef-2.Gtef.File

    static name: string
    static $gtype: GObject.GType<File>

    // Constructors of Gtef-2.Gtef.File

    constructor(config?: File.ConstructorProperties) 
    constructor() 
    static new(): File
    _init(config?: File.ConstructorProperties): void
}

export module FileLoader {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gtef-2.Gtef.FileLoader

        /**
         * The #GtefBuffer to load the content into. The #GtefFileLoader object
         * has a weak reference to the buffer.
         */
        buffer?: Buffer | null
        /**
         * The chunk size, in bytes. The content is loaded chunk by chunk. It
         * permits to avoid allocating a too big contiguous memory area, as well
         * as reporting progress information after each chunk read.
         * 
         * A small chunk size is better when loading a remote file with a slow
         * connection. For local files, the chunk size can be larger.
         */
        chunk_size?: number | null
        /**
         * The #GtefFile. The #GtefFileLoader object has a weak
         * reference to the file.
         */
        file?: File | null
        /**
         * The #GFile to load. By default the location is taken from the
         * #GtefFile at construction time.
         */
        location?: Gio.File | null
        /**
         * The maximum content size, in bytes. Keep in mind that all the
         * content is loaded in memory, and when loaded into a #GtkTextBuffer
         * it takes more memory than just the content size.
         * 
         * Set to -1 for unlimited size.
         */
        max_size?: number | null
    }

}

export interface FileLoader {

    // Own properties of Gtef-2.Gtef.FileLoader

    /**
     * The #GtefBuffer to load the content into. The #GtefFileLoader object
     * has a weak reference to the buffer.
     */
    readonly buffer: Buffer
    /**
     * The chunk size, in bytes. The content is loaded chunk by chunk. It
     * permits to avoid allocating a too big contiguous memory area, as well
     * as reporting progress information after each chunk read.
     * 
     * A small chunk size is better when loading a remote file with a slow
     * connection. For local files, the chunk size can be larger.
     */
    chunk_size: number
    /**
     * The #GtefFile. The #GtefFileLoader object has a weak
     * reference to the file.
     */
    readonly file: File
    /**
     * The #GFile to load. By default the location is taken from the
     * #GtefFile at construction time.
     */
    readonly location: Gio.File
    /**
     * The maximum content size, in bytes. Keep in mind that all the
     * content is loaded in memory, and when loaded into a #GtkTextBuffer
     * it takes more memory than just the content size.
     * 
     * Set to -1 for unlimited size.
     */
    max_size: number

    // Own fields of Gtef-2.Gtef.FileLoader

    parent_instance: GObject.Object

    // Owm methods of Gtef-2.Gtef.FileLoader

    get_buffer(): Buffer | null
    get_chunk_size(): number
    get_encoding(): Encoding | null
    get_file(): File | null
    get_location(): Gio.File | null
    get_max_size(): number
    get_newline_type(): NewlineType
    /**
     * Loads asynchronously the file content into the #GtefBuffer.
     * 
     * See the #GAsyncResult documentation to know how to use this function.
     * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param progress_callback function to call back with   progress information, or %NULL if progress information is not needed.
     * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
     */
    load_async(io_priority: number, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileProgressCallback | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of load_async

    /**
     * Promisified version of {@link load_async}
     * 
     * Loads asynchronously the file content into the #GtefBuffer.
     * 
     * See the #GAsyncResult documentation to know how to use this function.
     * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param progress_callback function to call back with   progress information, or %NULL if progress information is not needed.
     * @returns A Promise of: whether the content has been loaded successfully.
     */
    load_async(io_priority: number, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileProgressCallback | null): globalThis.Promise<boolean>
    /**
     * Finishes a file loading started with gtef_file_loader_load_async().
     * @param result a #GAsyncResult.
     * @returns whether the content has been loaded successfully.
     */
    load_finish(result: Gio.AsyncResult): boolean
    set_chunk_size(chunk_size: number): void
    set_max_size(max_size: number): void

    // Class property signals of Gtef-2.Gtef.FileLoader

    connect(sigName: "notify::buffer", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::chunk-size", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chunk-size", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::chunk-size", ...args: any[]): void
    connect(sigName: "notify::file", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: "notify::location", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::max-size", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-size", callback: (($obj: FileLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class FileLoader extends GObject.Object {

    // Own properties of Gtef-2.Gtef.FileLoader

    static name: string
    static $gtype: GObject.GType<FileLoader>

    // Constructors of Gtef-2.Gtef.FileLoader

    constructor(config?: FileLoader.ConstructorProperties) 
    /**
     * Creates a new #GtefFileLoader object. The content is read from the #GtefFile
     * location.
     * 
     * If not already done, call gtef_file_set_location() before calling this
     * constructor. The previous location is anyway not needed, because as soon as
     * the file loading begins, the `buffer` is emptied. Setting the #GtefFile
     * location directly permits to update the UI, to display the good location when
     * the file is loading.
     * @constructor 
     * @param buffer the #GtefBuffer to load the content into.
     * @param file the #GtefFile.
     * @returns a new #GtefFileLoader object.
     */
    constructor(buffer: Buffer, file: File) 
    /**
     * Creates a new #GtefFileLoader object. The content is read from the #GtefFile
     * location.
     * 
     * If not already done, call gtef_file_set_location() before calling this
     * constructor. The previous location is anyway not needed, because as soon as
     * the file loading begins, the `buffer` is emptied. Setting the #GtefFile
     * location directly permits to update the UI, to display the good location when
     * the file is loading.
     * @constructor 
     * @param buffer the #GtefBuffer to load the content into.
     * @param file the #GtefFile.
     * @returns a new #GtefFileLoader object.
     */
    static new(buffer: Buffer, file: File): FileLoader
    _init(config?: FileLoader.ConstructorProperties): void
}

export module FileMetadata {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gtef-2.Gtef.FileMetadata

        /**
         * The #GtefFile that the metadata belong to.
         */
        file?: File | null
    }

}

export interface FileMetadata {

    // Own properties of Gtef-2.Gtef.FileMetadata

    /**
     * The #GtefFile that the metadata belong to.
     */
    readonly file: File

    // Own fields of Gtef-2.Gtef.FileMetadata

    parent_instance: GObject.Object

    // Owm methods of Gtef-2.Gtef.FileMetadata

    /**
     * Gets the value of a metadata stored in the `metadata` object memory.
     * @param key the name of the metadata.
     * @returns the value of the metadata, or %NULL if the metadata   doesn't exist. Free with g_free().
     */
    get(key: string | null): string | null
    get_file(): File
    /**
     * Loads synchronously the metadata from #GtefFile:location. The loaded
     * metadata values can then be accessed with gtef_file_metadata_get().
     * 
     * If the metadata are loaded successfully, this function deletes all previous
     * metadata stored in the `metadata` object memory.
     * 
     * The file at #GtefFile:location, if non-%NULL, must exist on the
     * filesystem, otherwise an error is returned.
     * 
     * If #GtefFile:location is %NULL, %FALSE is simply returned.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns whether the metadata was loaded successfully.
     */
    load(cancellable: Gio.Cancellable | null): boolean
    /**
     * The asynchronous version of gtef_file_metadata_load().
     * 
     * If the metadata is loaded from the metadata manager (i.e. not with GVfs),
     * this function loads the metadata synchronously. A future version might fix
     * this.
     * 
     * See the #GAsyncResult documentation to know how to use this function.
     * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
     */
    load_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of load_async

    /**
     * Promisified version of {@link load_async}
     * 
     * The asynchronous version of gtef_file_metadata_load().
     * 
     * If the metadata is loaded from the metadata manager (i.e. not with GVfs),
     * this function loads the metadata synchronously. A future version might fix
     * this.
     * 
     * See the #GAsyncResult documentation to know how to use this function.
     * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns A Promise of: whether the metadata was loaded successfully.
     */
    load_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Finishes the metadata loading started with gtef_file_metadata_load_async().
     * @param result a #GAsyncResult.
     * @returns whether the metadata was loaded successfully.
     */
    load_finish(result: Gio.AsyncResult): boolean
    /**
     * Saves synchronously the metadata for #GtefFile:location.
     * 
     * The file at #GtefFile:location, if non-%NULL, must exist on the
     * filesystem, otherwise an error is returned.
     * 
     * If #GtefFile:location is %NULL, %FALSE is simply returned.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns whether the metadata was saved successfully.
     */
    save(cancellable: Gio.Cancellable | null): boolean
    /**
     * The asynchronous version of gtef_file_metadata_save().
     * 
     * If the metadata is saved with the metadata manager (i.e. not with GVfs), this
     * function saves the metadata synchronously. A future version might fix this.
     * 
     * See the #GAsyncResult documentation to know how to use this function.
     * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
     */
    save_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of save_async

    /**
     * Promisified version of {@link save_async}
     * 
     * The asynchronous version of gtef_file_metadata_save().
     * 
     * If the metadata is saved with the metadata manager (i.e. not with GVfs), this
     * function saves the metadata synchronously. A future version might fix this.
     * 
     * See the #GAsyncResult documentation to know how to use this function.
     * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns A Promise of: whether the metadata was saved successfully.
     */
    save_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Finishes the metadata saving started with gtef_file_metadata_save_async().
     * @param result a #GAsyncResult.
     * @returns whether the metadata was saved successfully.
     */
    save_finish(result: Gio.AsyncResult): boolean
    /**
     * Sets the value of a metadata. It's preferable that `key` starts with a
     * namespace, to not get metadata conflicts between applications.
     * 
     * This function just stores the new metadata value in the `metadata` object
     * memory.
     * @param key the name of the metadata.
     * @param value the value of the metadata, or %NULL to unset.
     */
    set(key: string | null, value: string | null): void

    // Class property signals of Gtef-2.Gtef.FileMetadata

    connect(sigName: "notify::file", callback: (($obj: FileMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file", callback: (($obj: FileMetadata, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class FileMetadata extends GObject.Object {

    // Own properties of Gtef-2.Gtef.FileMetadata

    static name: string
    static $gtype: GObject.GType<FileMetadata>

    // Constructors of Gtef-2.Gtef.FileMetadata

    constructor(config?: FileMetadata.ConstructorProperties) 
    constructor(file: File) 
    static new(file: File): FileMetadata
    _init(config?: FileMetadata.ConstructorProperties): void
}

export module FileSaver {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gtef-2.Gtef.FileSaver

        /**
         * The #GtefBuffer to save. The #GtefFileSaver object has a weak
         * reference to the buffer.
         */
        buffer?: GtkSource.Buffer | null
        /**
         * The compression type.
         */
        compression_type?: GtkSource.CompressionType | null
        /**
         * The file's encoding.
         */
        encoding?: Encoding | null
        /**
         * The #GtefFile. The #GtefFileSaver object has a weak
         * reference to the file.
         */
        file?: File | null
        /**
         * File saving flags.
         */
        flags?: FileSaverFlags | null
        /**
         * The #GFile where to save the buffer. By default the location is taken
         * from the #GtefFile at construction time.
         */
        location?: Gio.File | null
        /**
         * The newline type.
         */
        newline_type?: GtkSource.NewlineType | null
    }

}

export interface FileSaver {

    // Own properties of Gtef-2.Gtef.FileSaver

    /**
     * The #GtefBuffer to save. The #GtefFileSaver object has a weak
     * reference to the buffer.
     */
    readonly buffer: GtkSource.Buffer
    /**
     * The compression type.
     */
    compression_type: GtkSource.CompressionType
    /**
     * The file's encoding.
     */
    encoding: Encoding
    /**
     * The #GtefFile. The #GtefFileSaver object has a weak
     * reference to the file.
     */
    readonly file: File
    /**
     * File saving flags.
     */
    flags: FileSaverFlags
    /**
     * The #GFile where to save the buffer. By default the location is taken
     * from the #GtefFile at construction time.
     */
    readonly location: Gio.File
    /**
     * The newline type.
     */
    newline_type: GtkSource.NewlineType

    // Own fields of Gtef-2.Gtef.FileSaver

    object: GObject.Object
    priv: FileSaverPrivate

    // Owm methods of Gtef-2.Gtef.FileSaver

    get_buffer(): Buffer
    get_compression_type(): CompressionType
    get_encoding(): Encoding
    get_file(): File
    get_flags(): FileSaverFlags
    get_location(): Gio.File
    get_newline_type(): NewlineType
    /**
     * Saves asynchronously the buffer into the file. See the #GAsyncResult
     * documentation to know how to use this function.
     * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param progress_callback function to call back with   progress information, or %NULL if progress information is not needed.
     * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
     */
    save_async(io_priority: number, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileProgressCallback | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of save_async

    /**
     * Promisified version of {@link save_async}
     * 
     * Saves asynchronously the buffer into the file. See the #GAsyncResult
     * documentation to know how to use this function.
     * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param progress_callback function to call back with   progress information, or %NULL if progress information is not needed.
     * @returns A Promise of: whether the file was saved successfully.
     */
    save_async(io_priority: number, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileProgressCallback | null): globalThis.Promise<boolean>
    /**
     * Finishes a file saving started with gtef_file_saver_save_async().
     * 
     * If the file has been saved successfully, the following #GtefFile
     * properties will be updated: the location, the encoding, the newline type and
     * the compression type.
     * 
     * gtk_text_buffer_set_modified() is called with %FALSE if the file has been
     * saved successfully.
     * @param result a #GAsyncResult.
     * @returns whether the file was saved successfully.
     */
    save_finish(result: Gio.AsyncResult): boolean
    /**
     * Sets the compression type. By default the compression type is taken from the
     * #GtefFile.
     * @param compression_type the new compression type.
     */
    set_compression_type(compression_type: CompressionType): void
    /**
     * Sets the encoding. If `encoding` is %NULL, the UTF-8 encoding will be set.
     * By default the encoding is taken from the #GtefFile.
     * @param encoding the new encoding, or %NULL for UTF-8.
     */
    set_encoding(encoding: Encoding | null): void
    set_flags(flags: FileSaverFlags): void
    /**
     * Sets the newline type. By default the newline type is taken from the
     * #GtefFile.
     * @param newline_type the new newline type.
     */
    set_newline_type(newline_type: NewlineType): void

    // Class property signals of Gtef-2.Gtef.FileSaver

    connect(sigName: "notify::buffer", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::compression-type", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compression-type", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::compression-type", ...args: any[]): void
    connect(sigName: "notify::encoding", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::encoding", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::encoding", ...args: any[]): void
    connect(sigName: "notify::file", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: "notify::flags", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::location", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::location", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::newline-type", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::newline-type", callback: (($obj: FileSaver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::newline-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class FileSaver extends GObject.Object {

    // Own properties of Gtef-2.Gtef.FileSaver

    static name: string
    static $gtype: GObject.GType<FileSaver>

    // Constructors of Gtef-2.Gtef.FileSaver

    constructor(config?: FileSaver.ConstructorProperties) 
    /**
     * Creates a new #GtefFileSaver object. The `buffer` will be saved to the
     * #GtefFile's location.
     * 
     * This constructor is suitable for a simple "save" operation, when the `file`
     * already contains a non-%NULL #GtefFile:location.
     * @constructor 
     * @param buffer the #GtefBuffer to save.
     * @param file the #GtefFile.
     * @returns a new #GtefFileSaver object.
     */
    constructor(buffer: Buffer, file: File) 
    /**
     * Creates a new #GtefFileSaver object. The `buffer` will be saved to the
     * #GtefFile's location.
     * 
     * This constructor is suitable for a simple "save" operation, when the `file`
     * already contains a non-%NULL #GtefFile:location.
     * @constructor 
     * @param buffer the #GtefBuffer to save.
     * @param file the #GtefFile.
     * @returns a new #GtefFileSaver object.
     */
    static new(buffer: Buffer, file: File): FileSaver
    /**
     * Creates a new #GtefFileSaver object with a target location. When the
     * file saving is finished successfully, `target_location` is set to the `file'`s
     * #GtefFile:location property. If an error occurs, the previous valid
     * location is still available in #GtefFile.
     * 
     * This constructor adds %GTEF_FILE_SAVER_FLAGS_IGNORE_MODIFICATION_TIME to the
     * #GtefFileSaver:flags property.
     * 
     * This constructor is suitable for a "save as" operation, or for saving a new
     * buffer for the first time.
     * @constructor 
     * @param buffer the #GtefBuffer to save.
     * @param file the #GtefFile.
     * @param target_location the #GFile where to save the buffer to.
     * @returns a new #GtefFileSaver object.
     */
    static new_with_target(buffer: Buffer, file: File, target_location: Gio.File): FileSaver
    _init(config?: FileSaver.ConstructorProperties): void
}

export module FoldRegion {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gtef-2.Gtef.FoldRegion

        /**
         * The #GtkTextBuffer where the fold region is applied. The
         * #GtefFoldRegion object has a weak reference to the buffer.
         */
        buffer?: Gtk.TextBuffer | null
        /**
         * Whether the #GtefFoldRegion is folded or not.
         */
        folded?: boolean | null
    }

}

export interface FoldRegion {

    // Own properties of Gtef-2.Gtef.FoldRegion

    /**
     * The #GtkTextBuffer where the fold region is applied. The
     * #GtefFoldRegion object has a weak reference to the buffer.
     */
    readonly buffer: Gtk.TextBuffer
    /**
     * Whether the #GtefFoldRegion is folded or not.
     */
    folded: boolean

    // Own fields of Gtef-2.Gtef.FoldRegion

    parent_instance: GObject.Object

    // Owm methods of Gtef-2.Gtef.FoldRegion

    /**
     * Obtains iterators pointing to the start and end of the #GtefFoldRegion.
     * @returns %TRUE on success, %FALSE otherwise.
     */
    get_bounds(): [ /* returnType */ boolean, /* start */ Gtk.TextIter, /* end */ Gtk.TextIter ]
    get_buffer(): Gtk.TextBuffer | null
    get_folded(): boolean
    /**
     * Sets the start and end of the #GtefFoldRegion.
     * @param start a #GtkTextIter.
     * @param end a #GtkTextIter.
     */
    set_bounds(start: Gtk.TextIter, end: Gtk.TextIter): void
    /**
     * Folds or unfolds the region.
     * @param folded the new value.
     */
    set_folded(folded: boolean): void

    // Class property signals of Gtef-2.Gtef.FoldRegion

    connect(sigName: "notify::buffer", callback: (($obj: FoldRegion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: FoldRegion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::folded", callback: (($obj: FoldRegion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::folded", callback: (($obj: FoldRegion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::folded", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class FoldRegion extends GObject.Object {

    // Own properties of Gtef-2.Gtef.FoldRegion

    static name: string
    static $gtype: GObject.GType<FoldRegion>

    // Constructors of Gtef-2.Gtef.FoldRegion

    constructor(config?: FoldRegion.ConstructorProperties) 
    constructor(buffer: Gtk.TextBuffer, start: Gtk.TextIter, end: Gtk.TextIter) 
    static new(buffer: Gtk.TextBuffer, start: Gtk.TextIter, end: Gtk.TextIter): FoldRegion
    _init(config?: FoldRegion.ConstructorProperties): void
}

export module GutterRendererFolds {

    // Constructor properties interface

    export interface ConstructorProperties extends GtkSource.GutterRenderer.ConstructorProperties {
    }

}

export interface GutterRendererFolds {

    // Own fields of Gtef-2.Gtef.GutterRendererFolds

    parent_instance: GtkSource.GutterRenderer

    // Owm methods of Gtef-2.Gtef.GutterRendererFolds

    /**
     * Sets the folding state of the next cell to be drawn.
     * 
     * This function is intended to be called from a subclass' draw method before
     * chaining-up to its parent's draw method.
     * @param state a #GtefGutterRendererFoldsState.
     */
    set_state(state: GutterRendererFoldsState): void

    // Class property signals of Gtef-2.Gtef.GutterRendererFolds

    connect(sigName: "notify::alignment-mode", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::alignment-mode", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::alignment-mode", ...args: any[]): void
    connect(sigName: "notify::background-rgba", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-rgba", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-rgba", ...args: any[]): void
    connect(sigName: "notify::background-set", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-set", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-set", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::view", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::view", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::window-type", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-type", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-type", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xalign", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::xpad", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xpad", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xpad", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::yalign", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::ypad", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ypad", callback: (($obj: GutterRendererFolds, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ypad", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class GutterRendererFolds extends GtkSource.GutterRenderer {

    // Own properties of Gtef-2.Gtef.GutterRendererFolds

    static name: string
    static $gtype: GObject.GType<GutterRendererFolds>

    // Constructors of Gtef-2.Gtef.GutterRendererFolds

    constructor(config?: GutterRendererFolds.ConstructorProperties) 
    constructor() 
    static new(): GutterRendererFolds
    _init(config?: GutterRendererFolds.ConstructorProperties): void
}

export module InfoBar {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.InfoBar.ConstructorProperties {
    }

}

export interface InfoBar extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Conflicting properties

    parent: Gtk.Box & Gtk.Container & Gtk.Container

    // Own fields of Gtef-2.Gtef.InfoBar

    parent_instance: Gtk.InfoBar & GObject.InitiallyUnowned

    // Owm methods of Gtef-2.Gtef.InfoBar

    /**
     * Calls gtk_info_bar_set_show_close_button(), and additionnally closes the
     * `info_bar` when the #GtkInfoBar::response signal is received with the
     * `response_id` %GTK_RESPONSE_CLOSE.
     */
    add_close_button(): void
    /**
     * Adds `content` to `info_bar`.
     * 
     * #GtefInfoBar has an internal container, to be able to add the icon and add
     * primary or secondary messages. The internal container is added to the content
     * area, as returned by gtk_info_bar_get_content_area(). So if you use a
     * #GtefInfoBar and you need to add a custom #GtkWidget, it is better to use
     * this function instead of adding the #GtkWidget directly to the content area.
     * @param content a #GtkWidget.
     */
    add_content_widget(content: Gtk.Widget): void
    /**
     * Adds an icon on the left, determined by the message type. So before calling
     * this function, gtk_info_bar_set_message_type() must have been called.
     * 
     * The icon is not updated when the message type changes. Another #GtefInfoBar
     * must be created in that case.
     */
    add_icon(): void
    /**
     * Adds a primary message.
     * @param primary_msg a primary message.
     */
    add_primary_message(primary_msg: string | null): void
    /**
     * Adds a secondary message.
     * @param secondary_msg a secondary message.
     */
    add_secondary_message(secondary_msg: string | null): void

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

    // Class property signals of Gtef-2.Gtef.InfoBar

    connect(sigName: "notify::message-type", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-type", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::message-type", ...args: any[]): void
    connect(sigName: "notify::revealed", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::revealed", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::revealed", ...args: any[]): void
    connect(sigName: "notify::show-close-button", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-close-button", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-close-button", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: InfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class InfoBar extends Gtk.InfoBar {

    // Own properties of Gtef-2.Gtef.InfoBar

    static name: string
    static $gtype: GObject.GType<InfoBar>

    // Constructors of Gtef-2.Gtef.InfoBar

    constructor(config?: InfoBar.ConstructorProperties) 
    constructor() 
    static new(): InfoBar

    // Overloads of new

    /**
     * Creates a new #GtkInfoBar object.
     * @constructor 
     * @returns a new #GtkInfoBar object
     */
    static new(): Gtk.InfoBar
    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     * @returns a new #GtkBox.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    /**
     * Creates a new #GtefInfoBar with an icon (depending on `msg_type)`, a primary
     * message and a secondary message.
     * @constructor 
     * @param msg_type the message type.
     * @param primary_msg the primary message.
     * @param secondary_msg the secondary message, or %NULL.
     * @returns a new #GtefInfoBar.
     */
    static new_simple(msg_type: Gtk.MessageType, primary_msg: string | null, secondary_msg: string | null): InfoBar
    _init(config?: InfoBar.ConstructorProperties): void
    /**
     * Utility function to create a #GtkLabel suitable for a #GtkInfoBar. The
     * wrapping and alignment is configured. The label is also set as selectable,
     * for example to copy an error message and search an explanation on the web.
     * @returns a new #GtkLabel suitable for a #GtkInfoBar.
     */
    static create_label(): Gtk.Label
}

export module MenuShell {

    // Signal callback interfaces

    /**
     * Signal callback interface for `menu-item-deselected`
     */
    export interface MenuItemDeselectedSignalCallback {
        ($obj: MenuShell, menu_item: Gtk.MenuItem): void
    }

    /**
     * Signal callback interface for `menu-item-selected`
     */
    export interface MenuItemSelectedSignalCallback {
        ($obj: MenuShell, menu_item: Gtk.MenuItem): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gtef-2.Gtef.MenuShell

        /**
         * The #GtkMenuShell.
         */
        menu_shell?: Gtk.MenuShell | null
    }

}

export interface MenuShell {

    // Own properties of Gtef-2.Gtef.MenuShell

    /**
     * The #GtkMenuShell.
     */
    readonly menu_shell: Gtk.MenuShell

    // Own fields of Gtef-2.Gtef.MenuShell

    parent: GObject.Object
    priv: MenuShellPrivate

    // Owm methods of Gtef-2.Gtef.MenuShell

    get_menu_shell(): Gtk.MenuShell

    // Own virtual methods of Gtef-2.Gtef.MenuShell

    vfunc_menu_item_deselected(menu_item: Gtk.MenuItem): void
    vfunc_menu_item_selected(menu_item: Gtk.MenuItem): void

    // Own signals of Gtef-2.Gtef.MenuShell

    connect(sigName: "menu-item-deselected", callback: MenuShell.MenuItemDeselectedSignalCallback): number
    connect_after(sigName: "menu-item-deselected", callback: MenuShell.MenuItemDeselectedSignalCallback): number
    emit(sigName: "menu-item-deselected", menu_item: Gtk.MenuItem, ...args: any[]): void
    connect(sigName: "menu-item-selected", callback: MenuShell.MenuItemSelectedSignalCallback): number
    connect_after(sigName: "menu-item-selected", callback: MenuShell.MenuItemSelectedSignalCallback): number
    emit(sigName: "menu-item-selected", menu_item: Gtk.MenuItem, ...args: any[]): void

    // Class property signals of Gtef-2.Gtef.MenuShell

    connect(sigName: "notify::menu-shell", callback: (($obj: MenuShell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menu-shell", callback: (($obj: MenuShell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::menu-shell", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MenuShell extends GObject.Object {

    // Own properties of Gtef-2.Gtef.MenuShell

    static name: string
    static $gtype: GObject.GType<MenuShell>

    // Constructors of Gtef-2.Gtef.MenuShell

    constructor(config?: MenuShell.ConstructorProperties) 
    _init(config?: MenuShell.ConstructorProperties): void
    /**
     * Returns the #GtefMenuShell of `gtk_menu_shell`. The returned object is
     * guaranteed to be the same for the lifetime of `gtk_menu_shell`.
     * @param gtk_menu_shell a #GtkMenuShell.
     * @returns the #GtefMenuShell of @gtk_menu_shell.
     */
    static get_from_gtk_menu_shell(gtk_menu_shell: Gtk.MenuShell): MenuShell
}

export module Tab {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Grid.ConstructorProperties {
    }

}

export interface Tab extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own fields of Gtef-2.Gtef.Tab

    parent_instance: Gtk.Grid & GObject.InitiallyUnowned

    // Owm methods of Gtef-2.Gtef.Tab

    /**
     * Attaches `info_bar` to `tab,` above the main widget.
     * 
     * If several info bars are added, the first one will be at the top, the second
     * one below the first info bar, etc. With the main widget of `tab` at the
     * bottom.
     * @param info_bar a #GtkInfoBar.
     */
    add_info_bar(info_bar: Gtk.InfoBar): void

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

    // Class property signals of Gtef-2.Gtef.Tab

    connect(sigName: "notify::baseline-row", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-row", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-row", ...args: any[]): void
    connect(sigName: "notify::column-homogeneous", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-homogeneous", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-homogeneous", ...args: any[]): void
    connect(sigName: "notify::column-spacing", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-spacing", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::row-homogeneous", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-homogeneous", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-homogeneous", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-spacing", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Tab extends Gtk.Grid {

    // Own properties of Gtef-2.Gtef.Tab

    static name: string
    static $gtype: GObject.GType<Tab>

    // Constructors of Gtef-2.Gtef.Tab

    constructor(config?: Tab.ConstructorProperties) 
    constructor(main_widget: Gtk.Widget) 
    static new(main_widget: Gtk.Widget): Tab

    // Overloads of new

    /**
     * Creates a new grid widget.
     * @constructor 
     * @returns the new #GtkGrid
     */
    static new(): Gtk.Grid
    _init(config?: Tab.ConstructorProperties): void
}

export module View {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Scrollable.ConstructorProperties, GtkSource.View.ConstructorProperties {
    }

}

export interface View extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Conflicting properties

    parent: Gtk.TextView & Gtk.Container & Gtk.Container

    // Own fields of Gtef-2.Gtef.View

    parent_instance: GtkSource.View & Gtk.Container & GObject.InitiallyUnowned & GObject.InitiallyUnowned

    // Owm methods of Gtef-2.Gtef.View

    /**
     * Copies the clipboard.
     */
    copy_clipboard(): void
    /**
     * Cuts the clipboard and then scrolls to the cursor position.
     */
    cut_clipboard(): void
    /**
     * Deletes the text currently selected in the #GtkTextBuffer associated
     * to the view and then scrolls to the cursor position.
     */
    delete_selection(): void
    /**
     * Places the cursor at the position returned by
     * gtk_text_buffer_get_iter_at_line(), and scrolls to that position.
     * @param line a line number, counting from 0.
     * @returns %TRUE if the cursor has been moved exactly to @line, %FALSE if that   line didn't exist.
     */
    goto_line(line: number): boolean
    /**
     * Places the cursor at the position returned by
     * gtk_text_buffer_get_iter_at_line_offset(), and scrolls to that position.
     * @param line a line number, counting from 0.
     * @param line_offset the line offset, in characters (not bytes).
     * @returns %TRUE if the cursor has been moved exactly to @line and   @line_offset, %FALSE if that position didn't exist.
     */
    goto_line_offset(line: number, line_offset: number): boolean
    /**
     * Pastes the clipboard and then scrolls to the cursor position.
     */
    paste_clipboard(): void
    /**
     * Scrolls the `view` to the cursor position.
     */
    scroll_to_cursor(): void
    /**
     * Selects all the text.
     */
    select_all(): void
    /**
     * Selects the lines between `start_line` and `end_line` included, counting from
     * zero. And then scrolls to the cursor.
     * 
     * Possible use-case: line numbers coming from a compilation output, to go to
     * the place where a warning or error occurred.
     * @param start_line start of the region to select.
     * @param end_line end of the region to select.
     */
    select_lines(start_line: number, end_line: number): void

    // Conflicting methods

    /**
     * Retrieves the #GdkWindow corresponding to an area of the text view;
     * possible windows include the overall widget window, child windows
     * on the left, right, top, bottom, and the window that displays the
     * text buffer. Windows are %NULL and nonexistent if their width or
     * height is 0, and are nonexistent before the widget has been
     * realized.
     * @param win window to get
     * @returns a #GdkWindow, or %NULL
     */
    get_window(win: Gtk.TextWindowType): Gdk.Window | null

    // Overloads of get_window

    /**
     * Returns the widget’s window if it is realized, %NULL otherwise
     * @returns @widget’s window.
     */
    get_window(): Gdk.Window | null
    /**
     * Returns the widget’s window if it is realized, %NULL otherwise
     * @returns @widget’s window.
     */
    get_window(): Gdk.Window | null
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

    // Class property signals of Gtef-2.Gtef.View

    connect(sigName: "notify::auto-indent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-indent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::auto-indent", ...args: any[]): void
    connect(sigName: "notify::background-pattern", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-pattern", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-pattern", ...args: any[]): void
    connect(sigName: "notify::completion", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completion", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::completion", ...args: any[]): void
    connect(sigName: "notify::draw-spaces", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::draw-spaces", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::draw-spaces", ...args: any[]): void
    connect(sigName: "notify::highlight-current-line", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highlight-current-line", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::highlight-current-line", ...args: any[]): void
    connect(sigName: "notify::indent-on-tab", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent-on-tab", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::indent-on-tab", ...args: any[]): void
    connect(sigName: "notify::indent-width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent-width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::indent-width", ...args: any[]): void
    connect(sigName: "notify::insert-spaces-instead-of-tabs", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::insert-spaces-instead-of-tabs", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::insert-spaces-instead-of-tabs", ...args: any[]): void
    connect(sigName: "notify::right-margin-position", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-margin-position", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::right-margin-position", ...args: any[]): void
    connect(sigName: "notify::show-line-marks", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-line-marks", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-line-marks", ...args: any[]): void
    connect(sigName: "notify::show-line-numbers", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-line-numbers", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-line-numbers", ...args: any[]): void
    connect(sigName: "notify::show-right-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-right-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-right-margin", ...args: any[]): void
    connect(sigName: "notify::smart-backspace", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-backspace", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-backspace", ...args: any[]): void
    connect(sigName: "notify::smart-home-end", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smart-home-end", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smart-home-end", ...args: any[]): void
    connect(sigName: "notify::space-drawer", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::space-drawer", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::space-drawer", ...args: any[]): void
    connect(sigName: "notify::tab-width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tab-width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tab-width", ...args: any[]): void
    connect(sigName: "notify::accepts-tab", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accepts-tab", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accepts-tab", ...args: any[]): void
    connect(sigName: "notify::bottom-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bottom-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bottom-margin", ...args: any[]): void
    connect(sigName: "notify::buffer", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::cursor-visible", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-visible", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor-visible", ...args: any[]): void
    connect(sigName: "notify::editable", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editable", ...args: any[]): void
    connect(sigName: "notify::im-module", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::im-module", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::im-module", ...args: any[]): void
    connect(sigName: "notify::indent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::indent", ...args: any[]): void
    connect(sigName: "notify::input-hints", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-hints", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-hints", ...args: any[]): void
    connect(sigName: "notify::input-purpose", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-purpose", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-purpose", ...args: any[]): void
    connect(sigName: "notify::justification", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::justification", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::justification", ...args: any[]): void
    connect(sigName: "notify::left-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::left-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::left-margin", ...args: any[]): void
    connect(sigName: "notify::monospace", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::monospace", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::monospace", ...args: any[]): void
    connect(sigName: "notify::overwrite", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overwrite", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::overwrite", ...args: any[]): void
    connect(sigName: "notify::pixels-above-lines", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-above-lines", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixels-above-lines", ...args: any[]): void
    connect(sigName: "notify::pixels-below-lines", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-below-lines", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixels-below-lines", ...args: any[]): void
    connect(sigName: "notify::pixels-inside-wrap", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels-inside-wrap", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixels-inside-wrap", ...args: any[]): void
    connect(sigName: "notify::populate-all", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::populate-all", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::populate-all", ...args: any[]): void
    connect(sigName: "notify::right-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::right-margin", ...args: any[]): void
    connect(sigName: "notify::tabs", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tabs", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tabs", ...args: any[]): void
    connect(sigName: "notify::top-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::top-margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::top-margin", ...args: any[]): void
    connect(sigName: "notify::wrap-mode", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-mode", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::wrap-mode", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hadjustment", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hscroll-policy", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vadjustment", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vscroll-policy", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class View extends GtkSource.View {

    // Own properties of Gtef-2.Gtef.View

    static name: string
    static $gtype: GObject.GType<View>

    // Constructors of Gtef-2.Gtef.View

    constructor(config?: View.ConstructorProperties) 
    constructor() 
    static new(): View
    _init(config?: View.ConstructorProperties): void

    // Conflicting static methods

    static new_with_buffer(...args: any[]): any
}

export interface ActionInfo {

    // Owm methods of Gtef-2.Gtef.ActionInfo

    copy(): ActionInfo
    /**
     * Returns the accelerators. This function never returns %NULL, it always
     * returns a %NULL-terminated array, to be suitable for
     * gtk_application_set_accels_for_action().
     * @returns a %NULL-terminated array of accelerators in the format understood by gtk_accelerator_parse().
     */
    get_accels(): string[]
    get_action_name(): string | null
    get_icon_name(): string | null
    get_label(): string | null
    get_tooltip(): string | null
    /**
     * Increments the reference count of `info` by one.
     * @returns the passed in @info.
     */
    ref(): ActionInfo
    /**
     * A function similar to gtk_application_set_accels_for_action().
     * 
     * `accels` must not be %NULL, it must be a %NULL-terminated array, to be
     * consistent with gtk_application_set_accels_for_action().
     * @param accels a %NULL-terminated array of accelerators in the format understood by gtk_accelerator_parse().
     */
    set_accels(accels: string[]): void
    /**
     * Sets the action name, for example `"win.save"`.
     * @param action_name the action name.
     */
    set_action_name(action_name: string | null): void
    set_icon_name(icon_name: string | null): void
    set_label(label: string | null): void
    set_tooltip(tooltip: string | null): void
    /**
     * Decrements the reference count of `info` by one. If the reference count drops
     * to 0, `info` is freed.
     */
    unref(): void
}

export class ActionInfo {

    // Own properties of Gtef-2.Gtef.ActionInfo

    static name: string

    // Constructors of Gtef-2.Gtef.ActionInfo

    constructor() 
    static new(): ActionInfo
    /**
     * Creates a new #GtefActionInfo from a #GtefActionInfoEntry.
     * 
     * If `translation_domain` is not %NULL, g_dgettext() is used to translate the
     * `label` and `tooltip` before setting them to the #GtefActionInfo.
     * @constructor 
     * @param info_entry a #GtefActionInfoEntry.
     * @param translation_domain a gettext domain, or %NULL.
     * @returns a new #GtefActionInfo.
     */
    static new_from_entry(info_entry: ActionInfoEntry, translation_domain: string | null): ActionInfo
}

export interface ActionInfoCentralStoreClass {

    // Own fields of Gtef-2.Gtef.ActionInfoCentralStoreClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

export abstract class ActionInfoCentralStoreClass {

    // Own properties of Gtef-2.Gtef.ActionInfoCentralStoreClass

    static name: string
}

export interface ActionInfoCentralStorePrivate {
}

export class ActionInfoCentralStorePrivate {

    // Own properties of Gtef-2.Gtef.ActionInfoCentralStorePrivate

    static name: string
}

export interface ActionInfoEntry {

    // Own fields of Gtef-2.Gtef.ActionInfoEntry

    /**
     * the action name.
     * @field 
     */
    action_name: string | null
    /**
     * the icon name, or %NULL.
     * @field 
     */
    icon_name: string | null
    /**
     * the label (i.e. a short description), or %NULL.
     * @field 
     */
    label: string | null
    /**
     * the accelerator, in the format understood by gtk_accelerator_parse().
     * Or %NULL.
     * @field 
     */
    accel: string | null
    /**
     * the tooltip (i.e. a long description), or %NULL.
     * @field 
     */
    tooltip: string | null
}

/**
 * This struct defines a set of information for a single action. It is for use
 * with gtef_action_info_store_add_entries().
 * 
 * Like #GActionEntry, it is permissible to use an incomplete initialiser in
 * order to leave some of the later values as %NULL. Additional optional fields
 * may be added in the future.
 * @record 
 */
export class ActionInfoEntry {

    // Own properties of Gtef-2.Gtef.ActionInfoEntry

    static name: string
}

export interface ActionInfoStoreClass {

    // Own fields of Gtef-2.Gtef.ActionInfoStoreClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

export abstract class ActionInfoStoreClass {

    // Own properties of Gtef-2.Gtef.ActionInfoStoreClass

    static name: string
}

export interface ActionInfoStorePrivate {
}

export class ActionInfoStorePrivate {

    // Own properties of Gtef-2.Gtef.ActionInfoStorePrivate

    static name: string
}

export interface ApplicationClass {

    // Own fields of Gtef-2.Gtef.ApplicationClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

export abstract class ApplicationClass {

    // Own properties of Gtef-2.Gtef.ApplicationClass

    static name: string
}

export interface ApplicationPrivate {
}

export class ApplicationPrivate {

    // Own properties of Gtef-2.Gtef.ApplicationPrivate

    static name: string
}

export interface ApplicationWindowClass {

    // Own fields of Gtef-2.Gtef.ApplicationWindowClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

export abstract class ApplicationWindowClass {

    // Own properties of Gtef-2.Gtef.ApplicationWindowClass

    static name: string
}

export interface ApplicationWindowPrivate {
}

export class ApplicationWindowPrivate {

    // Own properties of Gtef-2.Gtef.ApplicationWindowPrivate

    static name: string
}

export interface BufferClass {

    // Own fields of Gtef-2.Gtef.BufferClass

    parent_class: GtkSource.BufferClass
    gtef_cursor_moved: (buffer: Buffer) => void
    padding: any[]
}

export abstract class BufferClass {

    // Own properties of Gtef-2.Gtef.BufferClass

    static name: string
}

export interface Encoding {

    // Owm methods of Gtef-2.Gtef.Encoding

    copy(): Encoding
    equals(enc2: Encoding | null): boolean
    free(): void
    /**
     * Gets the character set of the #GtefEncoding, such as "UTF-8" or "ISO-8859-1".
     * @returns the character set of the #GtefEncoding.
     */
    get_charset(): string | null
    /**
     * Gets the name of the #GtefEncoding such as "Unicode" or "Western".
     * @returns the name of the #GtefEncoding.
     */
    get_name(): string | null
    is_utf8(): boolean
    /**
     * Returns the encoding name with the charset in parenthesis, for example
     * "Unicode (UTF-8)". If the name is unknown, just the charset is returned.
     * @returns a string representation. Free with g_free() when no longer needed.
     */
    to_string(): string | null
}

export class Encoding {

    // Own properties of Gtef-2.Gtef.Encoding

    static name: string

    // Constructors of Gtef-2.Gtef.Encoding

    /**
     * Creates a new #GtefEncoding from a character set such as "UTF-8" or
     * "ISO-8859-1".
     * @constructor 
     * @param charset a character set.
     * @returns the new #GtefEncoding. Free with gtef_encoding_free().
     */
    constructor(charset: string | null) 
    /**
     * Creates a new #GtefEncoding from a character set such as "UTF-8" or
     * "ISO-8859-1".
     * @constructor 
     * @param charset a character set.
     * @returns the new #GtefEncoding. Free with gtef_encoding_free().
     */
    static new(charset: string | null): Encoding
    /**
     * Creates a new #GtefEncoding from the current locale, as returned by
     * g_get_charset().
     * @constructor 
     * @returns the new #GtefEncoding. Free with gtef_encoding_free().
     */
    static new_from_locale(): Encoding
    /**
     * Creates a new #GtefEncoding with the "UTF-8" character set.
     * @constructor 
     * @returns the new #GtefEncoding. Free with gtef_encoding_free().
     */
    static new_utf8(): Encoding
    /**
     * Gets a list of all encodings known by #GtefEncoding.
     * @returns a list of #GtefEncoding's.
     */
    static get_all(): Encoding[]
    /**
     * Gets the list of default candidate encodings to try when loading a file. See
     * gtk_source_file_loader_set_candidate_encodings().
     * 
     * This function returns a different list depending on the current locale (i.e.
     * language, country and default encoding). The UTF-8 encoding and the current
     * locale encoding are guaranteed to be present in the returned list.
     * @returns the list of default candidate encodings.
     */
    static get_default_candidates(): Encoding[]
}

export interface FileClass {

    // Own fields of Gtef-2.Gtef.FileClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

export abstract class FileClass {

    // Own properties of Gtef-2.Gtef.FileClass

    static name: string
}

export interface FileLoaderClass {

    // Own fields of Gtef-2.Gtef.FileLoaderClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

export abstract class FileLoaderClass {

    // Own properties of Gtef-2.Gtef.FileLoaderClass

    static name: string
}

export interface FileMetadataClass {

    // Own fields of Gtef-2.Gtef.FileMetadataClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

export abstract class FileMetadataClass {

    // Own properties of Gtef-2.Gtef.FileMetadataClass

    static name: string
}

export interface FileSaverClass {

    // Own fields of Gtef-2.Gtef.FileSaverClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

export abstract class FileSaverClass {

    // Own properties of Gtef-2.Gtef.FileSaverClass

    static name: string
}

export interface FileSaverPrivate {
}

export class FileSaverPrivate {

    // Own properties of Gtef-2.Gtef.FileSaverPrivate

    static name: string
}

export interface FoldRegionClass {

    // Own fields of Gtef-2.Gtef.FoldRegionClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

export abstract class FoldRegionClass {

    // Own properties of Gtef-2.Gtef.FoldRegionClass

    static name: string
}

export interface GutterRendererFoldsClass {

    // Own fields of Gtef-2.Gtef.GutterRendererFoldsClass

    parent_class: GtkSource.GutterRendererClass
    padding: any[]
}

export abstract class GutterRendererFoldsClass {

    // Own properties of Gtef-2.Gtef.GutterRendererFoldsClass

    static name: string
}

export interface InfoBarClass {

    // Own fields of Gtef-2.Gtef.InfoBarClass

    parent_class: Gtk.InfoBarClass
    padding: any[]
}

export abstract class InfoBarClass {

    // Own properties of Gtef-2.Gtef.InfoBarClass

    static name: string
}

export interface MenuShellClass {

    // Own fields of Gtef-2.Gtef.MenuShellClass

    parent_class: GObject.ObjectClass
    menu_item_selected: (gtef_menu_shell: MenuShell, menu_item: Gtk.MenuItem) => void
    menu_item_deselected: (gtef_menu_shell: MenuShell, menu_item: Gtk.MenuItem) => void
    padding: any[]
}

export abstract class MenuShellClass {

    // Own properties of Gtef-2.Gtef.MenuShellClass

    static name: string
}

export interface MenuShellPrivate {
}

export class MenuShellPrivate {

    // Own properties of Gtef-2.Gtef.MenuShellPrivate

    static name: string
}

export interface TabClass {

    // Own fields of Gtef-2.Gtef.TabClass

    parent_class: Gtk.GridClass
    padding: any[]
}

export abstract class TabClass {

    // Own properties of Gtef-2.Gtef.TabClass

    static name: string
}

export interface ViewClass {

    // Own fields of Gtef-2.Gtef.ViewClass

    parent_class: GtkSource.ViewClass
    padding: any[]
}

export abstract class ViewClass {

    // Own properties of Gtef-2.Gtef.ViewClass

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