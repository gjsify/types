
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './tepl-4-ambient.d.ts';
import './tepl-4-import.d.ts';
/**
 * Tepl-4
 */

import type GtkSource from '@girs/gtksource-4';
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
import type Amtk from '@girs/amtk-5';

export namespace Tepl {

enum CompressionType {
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
 * An error code used with the %TEPL_FILE_LOADER_ERROR domain.
 */
enum FileLoaderError {
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
 * An error code used with the %TEPL_FILE_SAVER_ERROR domain.
 */
enum FileSaverError {
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
enum NewlineType {
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
enum SelectionType {
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
 * Flags to define the behavior of a #TeplFileSaver.
 * @bitfield 
 */
enum FileSaverFlags {
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
 * Since #TeplGutterRendererFolds has a flat view of the folding tree, some
 * states can be combined; for example, %TEPL_GUTTER_RENDERER_FOLDS_STATE_END
 * and %TEPL_GUTTER_RENDERER_FOLDS_STATE_CONTINUE.
 * @bitfield 
 */
enum GutterRendererFoldsState {
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
 * Gets a list of all encodings known by #TeplEncoding.
 * @returns a list of #TeplEncoding's.
 */
function encoding_get_all(): Encoding[]
/**
 * Gets the list of default candidate encodings to try when loading a file. See
 * gtk_source_file_loader_set_candidate_encodings().
 * 
 * This function returns a different list depending on the current locale (i.e.
 * language, country and default encoding). The UTF-8 encoding and the current
 * locale encoding are guaranteed to be present in the returned list.
 * 
 * Note that the returned list doesn't contain all encodings known by
 * #TeplEncoding, it is a limited list that contains only the encodings that
 * have the most likelihood to fit for the current locale.
 * @returns the list of default candidate encodings.
 */
function encoding_get_default_candidates(): Encoding[]
function file_loader_error_quark(): GLib.Quark
function file_saver_error_quark(): GLib.Quark
/**
 * Free the resources allocated by Tepl. For example it unrefs the singleton
 * objects. It also properly shutdowns the metadata manager by calling
 * tepl_metadata_manager_shutdown().
 * 
 * This function also calls amtk_finalize() and gtk_source_finalize().
 * 
 * It is not mandatory to call this function, it's just to be friendlier to
 * memory debugging tools (but if you don't call this function and you use the
 * metadata manager, you should call tepl_metadata_manager_shutdown()). This
 * function is meant to be called at the end of main(). It can be called several
 * times.
 */
function finalize(): void
/**
 * Initializes the Tepl library (e.g. for the internationalization).
 * 
 * This function can be called several times, but is meant to be called at the
 * beginning of main(), before any other Tepl function call.
 * 
 * This function also calls amtk_init() and gtk_source_init().
 */
function init(): void
/**
 * When a %G_IO_ERROR_CANT_CREATE_BACKUP error occurs while saving `location,`
 * offer two possible actions:
 * - Save anyway: %GTK_RESPONSE_YES.
 * - Don't save: %GTK_RESPONSE_CANCEL.
 * @param location the #GFile for which the backup failed to be created.
 * @param error must be a %G_IO_ERROR_CANT_CREATE_BACKUP.
 * @returns the newly created #TeplInfoBar.
 */
function io_error_info_bar_cant_create_backup(location: Gio.File, error: GLib.Error): InfoBar
/**
 * Creates a warning about `location` having changed on disk. The possible
 * actions:
 * - Depending on `document_modified,` "Reload" or "Drop changes and reload":
 *   %GTK_RESPONSE_OK.
 * - A close button as added with gtk_info_bar_set_show_close_button().
 * @param location the #GFile for which there has been an external modification.
 * @param document_modified whether the document (e.g. the #GtkTextBuffer) has   unsaved modifications.
 * @returns the newly created #TeplInfoBar.
 */
function io_error_info_bar_externally_modified(location: Gio.File, document_modified: boolean): InfoBar
/**
 * Creates a warning about `location` being already open in another window,
 * offering two possible actions:
 * - Edit anyway: %GTK_RESPONSE_YES.
 * - Don't edit: %GTK_RESPONSE_CANCEL.
 * @param location the #GFile already open in another window.
 * @returns the newly created #TeplInfoBar.
 */
function io_error_info_bar_file_already_open(location: Gio.File): InfoBar
/**
 * For file saving, creates a warning about invalid characters that can corrupt
 * the file. Possible actions:
 * - Save anyway: %GTK_RESPONSE_YES.
 * - Don't save: %GTK_RESPONSE_CANCEL.
 * @param location where to save the document.
 * @returns the newly created #TeplInfoBar.
 */
function io_error_info_bar_invalid_characters(location: Gio.File): InfoBar
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
function iter_get_line_indentation(iter: Gtk.TextIter): string | null
/**
 * Appends #GtkMenuItem's to `menu_shell` for the following #GAction's:
 * - `"win.tepl-cut"`
 * - `"win.tepl-copy"`
 * - `"win.tepl-paste"`
 * - `"win.tepl-delete"`
 * - `"win.tepl-select-all"`
 * 
 * See the [list of GActions implemented in
 * TeplApplicationWindow][tepl-application-window-gactions]. This function
 * correctly uses the %AMTK_FACTORY_IGNORE_ACCELS_FOR_APP flag to create the
 * #GtkMenuItem's.
 * @param menu_shell a #GtkMenuShell.
 */
function menu_shell_append_edit_actions(menu_shell: Gtk.MenuShell): void
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
function metadata_manager_init(metadata_path: string | null): void
/**
 * This function saves synchronously metadata if they need to be saved, and
 * frees the internal data of the metadata manager.
 * 
 * See also tepl_finalize(), which calls this function.
 */
function metadata_manager_shutdown(): void
/**
 * Synchronously creates parent directories of `file,` so that `file` can be
 * saved.
 * @param file a file
 * @param cancellable optional #GCancellable object, %NULL to ignore.
 * @returns whether the directories are correctly created. %FALSE is returned on error.
 */
function utils_create_parent_directories(file: Gio.File, cancellable: Gio.Cancellable | null): boolean
/**
 * Parse and break an uri apart in its individual components like the uri
 * scheme, user info, host, port and path. The return value pointer can be
 * %NULL to ignore certain parts of the uri. If the function returns %TRUE, then
 * all return value pointers should be freed using g_free().
 * @param uri the uri to decode
 * @returns %TRUE if the uri could be properly decoded, %FALSE otherwise.
 */
function utils_decode_uri(uri: string | null): [ /* returnType */ boolean, /* scheme */ string | null, /* user */ string | null, /* host */ string | null, /* port */ string | null, /* path */ string | null ]
/**
 * Examples:
 * - "file.pdf" returns ".pdf".
 * - "file.PDF" returns ".pdf".
 * - "file.tar.gz" returns ".gz".
 * - "path/to/file.pdf" returns ".pdf".
 * - "file" (without an extension) returns "" (the empty string).
 * @param filename a filename.
 * @returns the @filename's extension with the dot, in lowercase. Free with g_free().
 */
function utils_get_file_extension(filename: string | null): string | null
/**
 * Returns `filename` without its extension. With the “extension” having the same
 * definition as in tepl_utils_get_file_extension(); in other words it returns
 * the other part of `filename`.
 * @param filename a filename.
 * @returns the @filename without its extension. Free with g_free().
 */
function utils_get_file_shortname(filename: string | null): string | null
/**
 * Replaces the home directory with a tilde, if the home directory is present in
 * the `filename`.
 * @param filename the filename.
 * @returns the new filename. Free with g_free().
 */
function utils_replace_home_dir_with_tilde(filename: string | null): string | null
/**
 * Like tepl_utils_str_middle_truncate() but the “…” character is at the end.
 * @param str a UTF-8 string.
 * @param truncate_length truncate the string at that length, in UTF-8 characters   (not bytes).
 * @returns the truncated string. Free with g_free().
 */
function utils_str_end_truncate(str: string | null, truncate_length: number): string | null
/**
 * If `str` is longer than `truncate_length,` then this function returns `str`
 * truncated in the middle with a “…” character. Otherwise it just returns a
 * copy of `str`.
 * @param str a UTF-8 string.
 * @param truncate_length truncate the string at that length, in UTF-8 characters   (not bytes).
 * @returns the truncated string. Free with g_free().
 */
function utils_str_middle_truncate(str: string | null, truncate_length: number): string | null
/**
 * Replaces all occurences of `search` by `replacement`.
 * 
 * The function does only one pass, for example:
 * 
 * ```
 * tepl_utils_str_replace ("aaaa", "aa", "a");
 * ```
 * 
 * returns "aa", not "a".
 * @param string a string
 * @param search the search string
 * @param replacement the replacement string
 * @returns A newly allocated string with the replacements. Free with g_free().
 */
function utils_str_replace(string: string | null, search: string | null, replacement: string | null): string | null
module TabGroup {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Tepl-4.Tepl.TabGroup

        /**
         * The #TeplTab currently shown.
         */
        active_tab?: Tab | null
    }

}

interface TabGroup {

    // Own properties of Tepl-4.Tepl.TabGroup

    /**
     * The #TeplBuffer of the active tab.
     */
    readonly active_buffer: Buffer
    /**
     * The #TeplTab currently shown.
     */
    active_tab: Tab
    /**
     * The #TeplView of the active tab.
     */
    readonly active_view: View

    // Owm methods of Tepl-4.Tepl.TabGroup

    /**
     * Appends `tab` to `tab_group`.
     * @param tab a #TeplTab.
     * @param jump_to whether to set `tab` as the active tab after appending it.
     */
    append_tab(tab: Tab, jump_to: boolean): void
    /**
     * Convenience function.
     * @returns the #TeplBuffer of the active tab.
     */
    get_active_buffer(): Buffer | null
    get_active_tab(): Tab | null
    /**
     * Convenience function.
     * @returns the #TeplView of the active tab.
     */
    get_active_view(): View | null
    /**
     * Convenience function.
     * @returns like tepl_tab_group_get_tabs(), but returns #TeplBuffer's.
     */
    get_buffers(): Buffer[]
    /**
     * Gets the list of #TeplTab's contained in `tab_group`.
     * 
     * If `tab_group` contains non-#TeplTab children, those will not be present in the
     * returned list. In other words, it is <emphasis>not</emphasis> guaranteed that
     * the index of a #TeplTab in the returned #GList has the same child index in
     * the `tab_group` container.
     * @returns the list of all the #TeplTab's contained in @tab_group.
     */
    get_tabs(): Tab[]
    /**
     * Convenience function.
     * @returns like tepl_tab_group_get_tabs(), but returns #TeplView's.
     */
    get_views(): View[]
    /**
     * Sets the #TeplTabGroup:active-tab. `tab` must be part of `tab_group`.
     * @param tab a #TeplTab part of `tab_group`.
     */
    set_active_tab(tab: Tab): void

    // Own virtual methods of Tepl-4.Tepl.TabGroup

    vfunc_append_tab_vfunc(tab: Tab): void
    vfunc_get_active_tab(): Tab | null
    /**
     * Gets the list of #TeplTab's contained in `tab_group`.
     * 
     * If `tab_group` contains non-#TeplTab children, those will not be present in the
     * returned list. In other words, it is <emphasis>not</emphasis> guaranteed that
     * the index of a #TeplTab in the returned #GList has the same child index in
     * the `tab_group` container.
     * @virtual 
     * @returns the list of all the #TeplTab's contained in @tab_group.
     */
    vfunc_get_tabs(): Tab[]
    /**
     * Sets the #TeplTabGroup:active-tab. `tab` must be part of `tab_group`.
     * @virtual 
     * @param tab a #TeplTab part of `tab_group`.
     */
    vfunc_set_active_tab(tab: Tab): void

    // Class property signals of Tepl-4.Tepl.TabGroup

    connect(sigName: "notify::active-buffer", callback: (($obj: TabGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-buffer", callback: (($obj: TabGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-buffer", ...args: any[]): void
    connect(sigName: "notify::active-tab", callback: (($obj: TabGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-tab", callback: (($obj: TabGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-tab", ...args: any[]): void
    connect(sigName: "notify::active-view", callback: (($obj: TabGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-view", callback: (($obj: TabGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TabGroup extends GObject.Object {

    // Own properties of Tepl-4.Tepl.TabGroup

    static name: string
    static $gtype: GObject.GType<TabGroup>

    // Constructors of Tepl-4.Tepl.TabGroup

    constructor(config?: TabGroup.ConstructorProperties) 
    _init(config?: TabGroup.ConstructorProperties): void
}

module AbstractFactory {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface AbstractFactory {

    // Own fields of Tepl-4.Tepl.AbstractFactory

    parent: GObject.Object

    // Owm methods of Tepl-4.Tepl.AbstractFactory

    create_file(): File
    /**
     * Creates a main #GtkApplicationWindow in the sense of
     * tepl_application_window_is_main_window().
     * @param app a #GtkApplication.
     * @returns a new main application window, or %NULL if the vfunc is not implemented.
     */
    create_main_window(app: Gtk.Application): Gtk.ApplicationWindow | null
    create_tab(): Tab
    /**
     * Creates a new tab label for `tab,` suitable for gtk_notebook_set_tab_label().
     * @param tab a #TeplTab.
     * @returns a new #GtkWidget, or %NULL for the default tab label (“page N” with #GtkNotebook).
     */
    create_tab_label(tab: Tab): Gtk.Widget | null
    /**
     * Sets the #TeplAbstractFactory singleton. This should be called early in
     * main(), for example just after calling tepl_init().
     * 
     * This function must be called only once, before the first call to
     * tepl_abstract_factory_get_singleton().
     * 
     * Tepl takes ownership of the `factory` reference.
     */
    set_singleton(): void

    // Own virtual methods of Tepl-4.Tepl.AbstractFactory

    vfunc_create_file(): File
    /**
     * Creates a main #GtkApplicationWindow in the sense of
     * tepl_application_window_is_main_window().
     * @virtual 
     * @param app a #GtkApplication.
     * @returns a new main application window, or %NULL if the vfunc is not implemented.
     */
    vfunc_create_main_window(app: Gtk.Application): Gtk.ApplicationWindow | null
    vfunc_create_tab(): Tab
    /**
     * Creates a new tab label for `tab,` suitable for gtk_notebook_set_tab_label().
     * @virtual 
     * @param tab a #TeplTab.
     * @returns a new #GtkWidget, or %NULL for the default tab label (“page N” with #GtkNotebook).
     */
    vfunc_create_tab_label(tab: Tab): Gtk.Widget | null

    // Class property signals of Tepl-4.Tepl.AbstractFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AbstractFactory extends GObject.Object {

    // Own properties of Tepl-4.Tepl.AbstractFactory

    static name: string
    static $gtype: GObject.GType<AbstractFactory>

    // Constructors of Tepl-4.Tepl.AbstractFactory

    constructor(config?: AbstractFactory.ConstructorProperties) 
    _init(config?: AbstractFactory.ConstructorProperties): void
    /**
     * Gets the #TeplAbstractFactory singleton instance.
     * 
     * If tepl_abstract_factory_set_singleton() has not been called, the singleton
     * is created with a #TeplAbstractFactory instance.
     * @returns the #TeplAbstractFactory singleton instance.
     */
    static get_singleton(): AbstractFactory
}

module AbstractFactoryVala {

    // Constructor properties interface

    interface ConstructorProperties extends AbstractFactory.ConstructorProperties {
    }

}

interface AbstractFactoryVala {

    // Own fields of Tepl-4.Tepl.AbstractFactoryVala

    parent: AbstractFactory & GObject.Object

    // Owm methods of Tepl-4.Tepl.AbstractFactoryVala

    /**
     * Like tepl_abstract_factory_create_main_window(), but with a (transfer full)
     * return value.
     * @param app a #GtkApplication.
     * @returns a new main application window, or %NULL if the vfunc is not implemented.
     */
    create_main_window_vala(app: Gtk.Application): Gtk.ApplicationWindow | null
    /**
     * Like tepl_abstract_factory_set_singleton(), but with (transfer none) for the
     * `factory_vala` parameter.
     * 
     * Apparently Vala doesn't support (transfer full) for the self parameter,
     * resulting to a double unref if tepl_abstract_factory_set_singleton() is
     * called in Vala...
     */
    set_singleton_vala(): void

    // Own virtual methods of Tepl-4.Tepl.AbstractFactoryVala

    /**
     * Like tepl_abstract_factory_create_main_window(), but with a (transfer full)
     * return value.
     * @virtual 
     * @param app a #GtkApplication.
     * @returns a new main application window, or %NULL if the vfunc is not implemented.
     */
    vfunc_create_main_window_vala(app: Gtk.Application): Gtk.ApplicationWindow | null

    // Class property signals of Tepl-4.Tepl.AbstractFactoryVala

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AbstractFactoryVala extends AbstractFactory {

    // Own properties of Tepl-4.Tepl.AbstractFactoryVala

    static name: string
    static $gtype: GObject.GType<AbstractFactoryVala>

    // Constructors of Tepl-4.Tepl.AbstractFactoryVala

    constructor(config?: AbstractFactoryVala.ConstructorProperties) 
    _init(config?: AbstractFactoryVala.ConstructorProperties): void
}

module Application {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Tepl-4.Tepl.Application

        /**
         * The #GtkApplication.
         */
        application?: Gtk.Application | null
    }

}

interface Application {

    // Own properties of Tepl-4.Tepl.Application

    /**
     * The #GtkApplication.
     */
    readonly application: Gtk.Application

    // Own fields of Tepl-4.Tepl.Application

    parent: GObject.Object
    priv: ApplicationPrivate

    // Owm methods of Tepl-4.Tepl.Application

    /**
     * Like gtk_application_get_active_window(), but returns the main window in the
     * sense of tepl_application_window_is_main_window().
     * @returns the active main #GtkApplicationWindow, or %NULL.
     */
    get_active_main_window(): Gtk.ApplicationWindow | null
    /**
     * Returns an initially empty #AmtkActionInfoStore reserved for the
     * application-specific actions. Libraries should not add #AmtkActionInfo's to
     * this store. Libraries should provide their own store if they want to share
     * #AmtkActionInfo's.
     * @returns the #AmtkActionInfoStore reserved for the application.
     */
    get_app_action_info_store(): Amtk.ActionInfoStore
    get_application(): Gtk.Application
    /**
     * The returned #AmtkActionInfoStore contains #AmtkActionInfo's for all the
     * #GAction's listed in the [class description of
     * TeplApplicationWindow][tepl-application-window-gactions] and the [class
     * description of TeplApplication][tepl-application-gactions].
     * @returns the #AmtkActionInfoStore of the Tepl library.
     */
    get_tepl_action_info_store(): Amtk.ActionInfoStore
    /**
     * Connects a generic function handler for the #GApplication::activate signal.
     * 
     * If no main windows exist, it creates one with
     * tepl_abstract_factory_create_main_window(). If a main window already exists,
     * it calls gtk_window_present() on the most recently focused window of the
     * application.
     */
    handle_activate(): void
    /**
     * Connects a generic function handler for the #GApplication::open signal.
     * 
     * It calls tepl_application_window_open_file() for each #GFile to open, on the
     * active main window as returned by tepl_application_get_active_main_window().
     * If the active main window is %NULL, it creates one with
     * tepl_abstract_factory_create_main_window().
     */
    handle_open(): void
    /**
     * Calls g_application_open() with a single file and an empty hint.
     * @param file a #GFile.
     */
    open_simple(file: Gio.File): void

    // Class property signals of Tepl-4.Tepl.Application

    connect(sigName: "notify::application", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Application extends GObject.Object {

    // Own properties of Tepl-4.Tepl.Application

    static name: string
    static $gtype: GObject.GType<Application>

    // Constructors of Tepl-4.Tepl.Application

    constructor(config?: Application.ConstructorProperties) 
    _init(config?: Application.ConstructorProperties): void
    /**
     * Convenience function that calls g_application_get_default() followed by
     * tepl_application_get_from_gtk_application(). The object returned by
     * g_application_get_default() must be a #GtkApplication.
     * @returns the default #TeplApplication.
     */
    static get_default(): Application
    /**
     * Returns the #TeplApplication of `gtk_app`. The returned object is guaranteed
     * to be the same for the lifetime of `gtk_app`.
     * @param gtk_app a #GtkApplication.
     * @returns the #TeplApplication of @gtk_app.
     */
    static get_from_gtk_application(gtk_app: Gtk.Application): Application
}

module ApplicationWindow {

    // Constructor properties interface

    interface ConstructorProperties extends TabGroup.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Tepl-4.Tepl.ApplicationWindow

        /**
         * The #GtkApplicationWindow.
         */
        application_window?: Gtk.ApplicationWindow | null
        /**
         * Whether to handle the #GtkWindow:title. The title is probably not
         * appropriate if a #GtkHeaderBar is used, the title is meant to be used
         * only for applications with a traditional UI.
         * 
         * If %TRUE, the title will contain:
         * - the #TeplBuffer:tepl-full-title of the active buffer.
         * - if the active view is not #GtkTextView:editable, the
         *   `"[Read-Only]"` string.
         * - the application name as returned by g_get_application_name().
         * 
         * If the active view is %NULL, the title contains only the application
         * name.
         */
        handle_title?: boolean | null
    }

}

interface ApplicationWindow extends TabGroup {

    // Own properties of Tepl-4.Tepl.ApplicationWindow

    /**
     * The #GtkApplicationWindow.
     */
    readonly application_window: Gtk.ApplicationWindow
    /**
     * Whether to handle the #GtkWindow:title. The title is probably not
     * appropriate if a #GtkHeaderBar is used, the title is meant to be used
     * only for applications with a traditional UI.
     * 
     * If %TRUE, the title will contain:
     * - the #TeplBuffer:tepl-full-title of the active buffer.
     * - if the active view is not #GtkTextView:editable, the
     *   `"[Read-Only]"` string.
     * - the application name as returned by g_get_application_name().
     * 
     * If the active view is %NULL, the title contains only the application
     * name.
     */
    handle_title: boolean

    // Own fields of Tepl-4.Tepl.ApplicationWindow

    parent: GObject.Object
    priv: ApplicationWindowPrivate

    // Owm methods of Tepl-4.Tepl.ApplicationWindow

    get_application_window(): Gtk.ApplicationWindow
    get_handle_title(): boolean
    /**
     * Gets the #GtkWindowGroup in which `tepl_window` resides.
     * 
     * You should call this function only on main windows, to add secondary windows
     * to the #GtkWindowGroup.
     * @returns the #GtkWindowGroup.
     */
    get_window_group(): Gtk.WindowGroup
    /**
     * Opens a file in `tepl_window`. If the active tab is untouched (see
     * tepl_buffer_is_untouched()), then the file is loaded in that tab. Otherwise a
     * new tab is created.
     * 
     * This function is asynchronous, the file loading is done with the
     * tepl_tab_load_file() function. There is no way to know when the file loading
     * is finished.
     * @param location a #GFile.
     * @param jump_to whether to set the tab where the file is loaded as the active tab.
     */
    open_file(location: Gio.File, jump_to: boolean): void
    /**
     * Sets the #TeplApplicationWindow:handle-title property.
     * @param handle_title the new value.
     */
    set_handle_title(handle_title: boolean): void
    /**
     * Sets the #TeplTabGroup of `tepl_window`. This function can be called only
     * once, it is not possible to change the #TeplTabGroup afterwards (this
     * restriction may be lifted in the future if there is a compelling use-case).
     * 
     * #TeplApplicationWindow implements the #TeplTabGroup interface by delegating
     * the requests to `tab_group`.
     * @param tab_group a #TeplTabGroup.
     */
    set_tab_group(tab_group: TabGroup): void

    // Class property signals of Tepl-4.Tepl.ApplicationWindow

    connect(sigName: "notify::application-window", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-window", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application-window", ...args: any[]): void
    connect(sigName: "notify::handle-title", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::handle-title", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::handle-title", ...args: any[]): void
    connect(sigName: "notify::active-buffer", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-buffer", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-buffer", ...args: any[]): void
    connect(sigName: "notify::active-tab", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-tab", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-tab", ...args: any[]): void
    connect(sigName: "notify::active-view", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-view", callback: (($obj: ApplicationWindow, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ApplicationWindow extends GObject.Object {

    // Own properties of Tepl-4.Tepl.ApplicationWindow

    static name: string
    static $gtype: GObject.GType<ApplicationWindow>

    // Constructors of Tepl-4.Tepl.ApplicationWindow

    constructor(config?: ApplicationWindow.ConstructorProperties) 
    _init(config?: ApplicationWindow.ConstructorProperties): void
    /**
     * Returns the #TeplApplicationWindow of `gtk_window`. The returned object is
     * guaranteed to be the same for the lifetime of `gtk_window`.
     * @param gtk_window a #GtkApplicationWindow.
     * @returns the #TeplApplicationWindow of @gtk_window.
     */
    static get_from_gtk_application_window(gtk_window: Gtk.ApplicationWindow): ApplicationWindow
    /**
     * Returns %TRUE iff `gtk_window` has an associated #TeplTabGroup (i.e. if
     * tepl_application_window_set_tab_group() has been called).
     * 
     * This function takes a #GtkApplicationWindow parameter to avoid creating the
     * #TeplApplicationWindow object if it hasn't been created.
     * @param gtk_window a #GtkApplicationWindow.
     * @returns whether @gtk_window is considered a main application window.
     */
    static is_main_window(gtk_window: Gtk.ApplicationWindow): boolean
}

module Buffer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `tepl-cursor-moved`
     */
    interface TeplCursorMovedSignalCallback {
        ($obj: Buffer): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GtkSource.Buffer.ConstructorProperties {

        // Own constructor properties of Tepl-4.Tepl.Buffer

        /**
         * The #GtkSourceBuffer:style-scheme ID, as a string. This property is
         * useful for binding it to a #GSettings key.
         * 
         * When the #GtkSourceBuffer:style-scheme is %NULL,
         * #TeplBuffer:tepl-style-scheme-id contains the empty string.
         */
        tepl_style_scheme_id?: string | null
    }

}

interface Buffer {

    // Own properties of Tepl-4.Tepl.Buffer

    /**
     * The full title. See tepl_buffer_get_full_title().
     */
    readonly tepl_full_title: string | null
    /**
     * The short title. See tepl_buffer_get_short_title().
     */
    readonly tepl_short_title: string | null
    /**
     * The #GtkSourceBuffer:style-scheme ID, as a string. This property is
     * useful for binding it to a #GSettings key.
     * 
     * When the #GtkSourceBuffer:style-scheme is %NULL,
     * #TeplBuffer:tepl-style-scheme-id contains the empty string.
     */
    tepl_style_scheme_id: string | null

    // Conflicting properties

    priv: any & Gtk.TextBufferPrivate

    // Own fields of Tepl-4.Tepl.Buffer

    parent_instance: GtkSource.Buffer & Gtk.TextBuffer & GObject.Object & GObject.Object

    // Owm methods of Tepl-4.Tepl.Buffer

    /**
     * Returns the #TeplFile of `buffer`. The returned object is guaranteed to be the
     * same for the lifetime of `buffer`.
     * 
     * #TeplBuffer creates the #TeplFile with tepl_abstract_factory_create_file().
     * @returns the associated #TeplFile.
     */
    get_file(): File
    /**
     * Returns a title suitable for a #GtkWindow title. It contains (in that order):
     * - the #TeplBuffer:tepl-short-title;
     * - the directory path in parenthesis if the #TeplFile:location isn't
     *   %NULL.
     * @returns the @buffer full title. Free the return value with g_free() when no longer needed.
     */
    get_full_title(): string | null
    get_selection_type(): SelectionType
    /**
     * Returns a title suitable for a tab label. It contains (in that order):
     * - '*' if the buffer is modified;
     * - the #TeplFile:short-name;
     * @returns the @buffer short title. Free the return value with g_free() when no longer needed.
     */
    get_short_title(): string | null
    get_style_scheme_id(): string | null
    /**
     * Returns whether `buffer` is untouched.
     * 
     * This function is for example useful to know if we can re-use this buffer to
     * load a file, instead of opening a new tab or window.
     * 
     * For this function to return %TRUE, the `buffer` must be empty, non-modified,
     * the undo/redo #GtkSourceBuffer history must be empty, and the
     * #TeplFile:location must be %NULL.
     * @returns %TRUE if @buffer has not been touched, %FALSE otherwise.
     */
    is_untouched(): boolean
    /**
     * Sets the #TeplBuffer:tepl-style-scheme-id property.
     * 
     * The #GtkSourceStyleScheme is taken from the default
     * #GtkSourceStyleSchemeManager as returned by
     * gtk_source_style_scheme_manager_get_default().
     * @param style_scheme_id the new value.
     */
    set_style_scheme_id(style_scheme_id: string | null): void

    // Own virtual methods of Tepl-4.Tepl.Buffer

    vfunc_tepl_cursor_moved(): void

    // Own signals of Tepl-4.Tepl.Buffer

    connect(sigName: "tepl-cursor-moved", callback: Buffer.TeplCursorMovedSignalCallback): number
    connect_after(sigName: "tepl-cursor-moved", callback: Buffer.TeplCursorMovedSignalCallback): number
    emit(sigName: "tepl-cursor-moved", ...args: any[]): void

    // Class property signals of Tepl-4.Tepl.Buffer

    connect(sigName: "notify::tepl-full-title", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tepl-full-title", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tepl-full-title", ...args: any[]): void
    connect(sigName: "notify::tepl-short-title", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tepl-short-title", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tepl-short-title", ...args: any[]): void
    connect(sigName: "notify::tepl-style-scheme-id", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tepl-style-scheme-id", callback: (($obj: Buffer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tepl-style-scheme-id", ...args: any[]): void
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

class Buffer extends GtkSource.Buffer {

    // Own properties of Tepl-4.Tepl.Buffer

    static name: string
    static $gtype: GObject.GType<Buffer>

    // Constructors of Tepl-4.Tepl.Buffer

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

module File {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Tepl-4.Tepl.File

        /**
         * The location.
         */
        location?: Gio.File | null
    }

}

interface File {

    // Own properties of Tepl-4.Tepl.File

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
     * The file short name. See tepl_file_get_short_name().
     */
    readonly short_name: string | null

    // Own fields of Tepl-4.Tepl.File

    parent_instance: GObject.Object

    // Owm methods of Tepl-4.Tepl.File

    /**
     * If the #TeplFile:location isn't %NULL, adds its URI to the default
     * #GtkRecentManager with gtk_recent_manager_add_item().
     */
    add_uri_to_recent_manager(): void
    /**
     * Checks synchronously the file on disk, to know whether the file is externally
     * modified, or has been deleted, and whether the file is read-only.
     * 
     * #TeplFile doesn't create a #GFileMonitor to track those properties, so
     * this function needs to be called instead. Creating lots of #GFileMonitor's
     * would take lots of resources.
     * 
     * Since this function is synchronous, it is advised to call it only on local
     * files. See tepl_file_is_local().
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
     * Gets the `file` short name. If the #TeplFile:location isn't %NULL,
     * returns its display-name (see #G_FILE_ATTRIBUTE_STANDARD_DISPLAY_NAME).
     * Otherwise returns "Untitled File N", with N the Nth untitled file of the
     * application, starting at 1. When an untitled file is closed, its number is
     * released and can be used by a later untitled file.
     * @returns the @file short name.
     */
    get_short_name(): string | null
    /**
     * Returns whether the file has been deleted. If the
     * #TeplFile:location is %NULL, returns %FALSE.
     * 
     * To have an up-to-date value, you must first call
     * tepl_file_check_file_on_disk().
     * @returns whether the file has been deleted.
     */
    is_deleted(): boolean
    /**
     * Returns whether the file is externally modified. If the
     * #TeplFile:location is %NULL, returns %FALSE.
     * 
     * To have an up-to-date value, you must first call
     * tepl_file_check_file_on_disk().
     * @returns whether the file is externally modified.
     */
    is_externally_modified(): boolean
    /**
     * Returns whether the file is local. If the #TeplFile:location is %NULL,
     * returns %FALSE.
     * @returns whether the file is local.
     */
    is_local(): boolean
    /**
     * Returns whether the file is read-only. If the
     * #TeplFile:location is %NULL, returns %FALSE.
     * 
     * To have an up-to-date value, you must first call
     * tepl_file_check_file_on_disk().
     * @returns whether the file is read-only.
     */
    is_readonly(): boolean
    /**
     * Sets the location.
     * @param location the new #GFile, or %NULL.
     */
    set_location(location: Gio.File | null): void

    // Class property signals of Tepl-4.Tepl.File

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

class File extends GObject.Object {

    // Own properties of Tepl-4.Tepl.File

    static name: string
    static $gtype: GObject.GType<File>

    // Constructors of Tepl-4.Tepl.File

    constructor(config?: File.ConstructorProperties) 
    constructor() 
    static new(): File
    _init(config?: File.ConstructorProperties): void
}

module FileLoader {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Tepl-4.Tepl.FileLoader

        /**
         * The #TeplBuffer to load the content into. The #TeplFileLoader object
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
         * The #TeplFile. The #TeplFileLoader object has a weak
         * reference to the file.
         */
        file?: File | null
        /**
         * The #GFile to load. By default the location is taken from the
         * #TeplFile at construction time.
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

interface FileLoader {

    // Own properties of Tepl-4.Tepl.FileLoader

    /**
     * The #TeplBuffer to load the content into. The #TeplFileLoader object
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
     * The #TeplFile. The #TeplFileLoader object has a weak
     * reference to the file.
     */
    readonly file: File
    /**
     * The #GFile to load. By default the location is taken from the
     * #TeplFile at construction time.
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

    // Own fields of Tepl-4.Tepl.FileLoader

    parent_instance: GObject.Object

    // Owm methods of Tepl-4.Tepl.FileLoader

    get_buffer(): Buffer | null
    get_chunk_size(): number
    get_encoding(): Encoding | null
    get_file(): File | null
    get_location(): Gio.File | null
    get_max_size(): number
    get_newline_type(): NewlineType
    /**
     * Loads asynchronously the file content into the #TeplBuffer.
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
     * Loads asynchronously the file content into the #TeplBuffer.
     * 
     * See the #GAsyncResult documentation to know how to use this function.
     * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param progress_callback function to call back with   progress information, or %NULL if progress information is not needed.
     * @returns A Promise of: whether the content has been loaded successfully.
     */
    load_async(io_priority: number, cancellable: Gio.Cancellable | null, progress_callback: Gio.FileProgressCallback | null): globalThis.Promise<boolean>
    /**
     * Finishes a file loading started with tepl_file_loader_load_async().
     * @param result a #GAsyncResult.
     * @returns whether the content has been loaded successfully.
     */
    load_finish(result: Gio.AsyncResult): boolean
    set_chunk_size(chunk_size: number): void
    set_max_size(max_size: number): void

    // Class property signals of Tepl-4.Tepl.FileLoader

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

class FileLoader extends GObject.Object {

    // Own properties of Tepl-4.Tepl.FileLoader

    static name: string
    static $gtype: GObject.GType<FileLoader>

    // Constructors of Tepl-4.Tepl.FileLoader

    constructor(config?: FileLoader.ConstructorProperties) 
    /**
     * Creates a new #TeplFileLoader object. The content is read from the #TeplFile
     * location.
     * 
     * If not already done, call tepl_file_set_location() before calling this
     * constructor. The previous location is anyway not needed, because as soon as
     * the file loading begins, the `buffer` is emptied. Setting the #TeplFile
     * location directly permits to update the UI, to display the good location when
     * the file is loading.
     * @constructor 
     * @param buffer the #TeplBuffer to load the content into.
     * @param file the #TeplFile.
     * @returns a new #TeplFileLoader object.
     */
    constructor(buffer: Buffer, file: File) 
    /**
     * Creates a new #TeplFileLoader object. The content is read from the #TeplFile
     * location.
     * 
     * If not already done, call tepl_file_set_location() before calling this
     * constructor. The previous location is anyway not needed, because as soon as
     * the file loading begins, the `buffer` is emptied. Setting the #TeplFile
     * location directly permits to update the UI, to display the good location when
     * the file is loading.
     * @constructor 
     * @param buffer the #TeplBuffer to load the content into.
     * @param file the #TeplFile.
     * @returns a new #TeplFileLoader object.
     */
    static new(buffer: Buffer, file: File): FileLoader
    _init(config?: FileLoader.ConstructorProperties): void
}

module FileMetadata {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Tepl-4.Tepl.FileMetadata

        /**
         * The #TeplFile that the metadata belong to.
         */
        file?: File | null
    }

}

interface FileMetadata {

    // Own properties of Tepl-4.Tepl.FileMetadata

    /**
     * The #TeplFile that the metadata belong to.
     */
    readonly file: File

    // Own fields of Tepl-4.Tepl.FileMetadata

    parent_instance: GObject.Object

    // Owm methods of Tepl-4.Tepl.FileMetadata

    /**
     * Gets the value of a metadata stored in the `metadata` object memory.
     * @param key the name of the metadata.
     * @returns the value of the metadata, or %NULL if the metadata   doesn't exist. Free with g_free().
     */
    get(key: string | null): string | null
    get_file(): File
    /**
     * Loads synchronously the metadata from #TeplFile:location. The loaded
     * metadata values can then be accessed with tepl_file_metadata_get().
     * 
     * If the metadata are loaded successfully, this function deletes all previous
     * metadata stored in the `metadata` object memory.
     * 
     * The file at #TeplFile:location, if non-%NULL, must exist on the
     * filesystem, otherwise an error is returned.
     * 
     * If #TeplFile:location is %NULL, %FALSE is simply returned.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns whether the metadata was loaded successfully.
     */
    load(cancellable: Gio.Cancellable | null): boolean
    /**
     * The asynchronous version of tepl_file_metadata_load().
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
     * The asynchronous version of tepl_file_metadata_load().
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
     * Finishes the metadata loading started with tepl_file_metadata_load_async().
     * @param result a #GAsyncResult.
     * @returns whether the metadata was loaded successfully.
     */
    load_finish(result: Gio.AsyncResult): boolean
    /**
     * Saves synchronously the metadata for #TeplFile:location.
     * 
     * The file at #TeplFile:location, if non-%NULL, must exist on the
     * filesystem, otherwise an error is returned.
     * 
     * If #TeplFile:location is %NULL, %FALSE is simply returned.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns whether the metadata was saved successfully.
     */
    save(cancellable: Gio.Cancellable | null): boolean
    /**
     * The asynchronous version of tepl_file_metadata_save().
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
     * The asynchronous version of tepl_file_metadata_save().
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
     * Finishes the metadata saving started with tepl_file_metadata_save_async().
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

    // Class property signals of Tepl-4.Tepl.FileMetadata

    connect(sigName: "notify::file", callback: (($obj: FileMetadata, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::file", callback: (($obj: FileMetadata, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class FileMetadata extends GObject.Object {

    // Own properties of Tepl-4.Tepl.FileMetadata

    static name: string
    static $gtype: GObject.GType<FileMetadata>

    // Constructors of Tepl-4.Tepl.FileMetadata

    constructor(config?: FileMetadata.ConstructorProperties) 
    constructor(file: File) 
    static new(file: File): FileMetadata
    _init(config?: FileMetadata.ConstructorProperties): void
}

module FileSaver {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Tepl-4.Tepl.FileSaver

        /**
         * The #TeplBuffer to save. The #TeplFileSaver object has a weak
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
         * The #TeplFile. The #TeplFileSaver object has a weak
         * reference to the file.
         */
        file?: File | null
        /**
         * File saving flags.
         */
        flags?: FileSaverFlags | null
        /**
         * The #GFile where to save the buffer. By default the location is taken
         * from the #TeplFile at construction time.
         */
        location?: Gio.File | null
        /**
         * The newline type.
         */
        newline_type?: GtkSource.NewlineType | null
    }

}

interface FileSaver {

    // Own properties of Tepl-4.Tepl.FileSaver

    /**
     * The #TeplBuffer to save. The #TeplFileSaver object has a weak
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
     * The #TeplFile. The #TeplFileSaver object has a weak
     * reference to the file.
     */
    readonly file: File
    /**
     * File saving flags.
     */
    flags: FileSaverFlags
    /**
     * The #GFile where to save the buffer. By default the location is taken
     * from the #TeplFile at construction time.
     */
    readonly location: Gio.File
    /**
     * The newline type.
     */
    newline_type: GtkSource.NewlineType

    // Own fields of Tepl-4.Tepl.FileSaver

    object: GObject.Object
    priv: FileSaverPrivate

    // Owm methods of Tepl-4.Tepl.FileSaver

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
     * Finishes a file saving started with tepl_file_saver_save_async().
     * 
     * If the file has been saved successfully, the following #TeplFile
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
     * #TeplFile.
     * @param compression_type the new compression type.
     */
    set_compression_type(compression_type: CompressionType): void
    /**
     * Sets the encoding. If `encoding` is %NULL, the UTF-8 encoding will be set.
     * By default the encoding is taken from the #TeplFile.
     * @param encoding the new encoding, or %NULL for UTF-8.
     */
    set_encoding(encoding: Encoding | null): void
    set_flags(flags: FileSaverFlags): void
    /**
     * Sets the newline type. By default the newline type is taken from the
     * #TeplFile.
     * @param newline_type the new newline type.
     */
    set_newline_type(newline_type: NewlineType): void

    // Class property signals of Tepl-4.Tepl.FileSaver

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

class FileSaver extends GObject.Object {

    // Own properties of Tepl-4.Tepl.FileSaver

    static name: string
    static $gtype: GObject.GType<FileSaver>

    // Constructors of Tepl-4.Tepl.FileSaver

    constructor(config?: FileSaver.ConstructorProperties) 
    /**
     * Creates a new #TeplFileSaver object. The `buffer` will be saved to the
     * #TeplFile's location.
     * 
     * This constructor is suitable for a simple "save" operation, when the `file`
     * already contains a non-%NULL #TeplFile:location.
     * @constructor 
     * @param buffer the #TeplBuffer to save.
     * @param file the #TeplFile.
     * @returns a new #TeplFileSaver object.
     */
    constructor(buffer: Buffer, file: File) 
    /**
     * Creates a new #TeplFileSaver object. The `buffer` will be saved to the
     * #TeplFile's location.
     * 
     * This constructor is suitable for a simple "save" operation, when the `file`
     * already contains a non-%NULL #TeplFile:location.
     * @constructor 
     * @param buffer the #TeplBuffer to save.
     * @param file the #TeplFile.
     * @returns a new #TeplFileSaver object.
     */
    static new(buffer: Buffer, file: File): FileSaver
    /**
     * Creates a new #TeplFileSaver object with a target location. When the
     * file saving is finished successfully, `target_location` is set to the `file'`s
     * #TeplFile:location property. If an error occurs, the previous valid
     * location is still available in #TeplFile.
     * 
     * This constructor adds %TEPL_FILE_SAVER_FLAGS_IGNORE_MODIFICATION_TIME to the
     * #TeplFileSaver:flags property.
     * 
     * This constructor is suitable for a "save as" operation, or for saving a new
     * buffer for the first time.
     * @constructor 
     * @param buffer the #TeplBuffer to save.
     * @param file the #TeplFile.
     * @param target_location the #GFile where to save the buffer to.
     * @returns a new #TeplFileSaver object.
     */
    static new_with_target(buffer: Buffer, file: File, target_location: Gio.File): FileSaver
    _init(config?: FileSaver.ConstructorProperties): void
}

module FoldRegion {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Tepl-4.Tepl.FoldRegion

        /**
         * The #GtkTextBuffer where the fold region is applied. The
         * #TeplFoldRegion object has a weak reference to the buffer.
         */
        buffer?: Gtk.TextBuffer | null
        /**
         * Whether the #TeplFoldRegion is folded or not.
         */
        folded?: boolean | null
    }

}

interface FoldRegion {

    // Own properties of Tepl-4.Tepl.FoldRegion

    /**
     * The #GtkTextBuffer where the fold region is applied. The
     * #TeplFoldRegion object has a weak reference to the buffer.
     */
    readonly buffer: Gtk.TextBuffer
    /**
     * Whether the #TeplFoldRegion is folded or not.
     */
    folded: boolean

    // Own fields of Tepl-4.Tepl.FoldRegion

    parent_instance: GObject.Object

    // Owm methods of Tepl-4.Tepl.FoldRegion

    /**
     * Obtains iterators pointing to the start and end of the #TeplFoldRegion.
     * @returns %TRUE on success, %FALSE otherwise.
     */
    get_bounds(): [ /* returnType */ boolean, /* start */ Gtk.TextIter, /* end */ Gtk.TextIter ]
    get_buffer(): Gtk.TextBuffer | null
    get_folded(): boolean
    /**
     * Sets the start and end of the #TeplFoldRegion.
     * @param start a #GtkTextIter.
     * @param end a #GtkTextIter.
     */
    set_bounds(start: Gtk.TextIter, end: Gtk.TextIter): void
    /**
     * Folds or unfolds the region.
     * @param folded the new value.
     */
    set_folded(folded: boolean): void

    // Class property signals of Tepl-4.Tepl.FoldRegion

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

class FoldRegion extends GObject.Object {

    // Own properties of Tepl-4.Tepl.FoldRegion

    static name: string
    static $gtype: GObject.GType<FoldRegion>

    // Constructors of Tepl-4.Tepl.FoldRegion

    constructor(config?: FoldRegion.ConstructorProperties) 
    constructor(buffer: Gtk.TextBuffer, start: Gtk.TextIter, end: Gtk.TextIter) 
    static new(buffer: Gtk.TextBuffer, start: Gtk.TextIter, end: Gtk.TextIter): FoldRegion
    _init(config?: FoldRegion.ConstructorProperties): void
}

module GutterRendererFolds {

    // Constructor properties interface

    interface ConstructorProperties extends GtkSource.GutterRenderer.ConstructorProperties {
    }

}

interface GutterRendererFolds {

    // Own fields of Tepl-4.Tepl.GutterRendererFolds

    parent_instance: GtkSource.GutterRenderer

    // Owm methods of Tepl-4.Tepl.GutterRendererFolds

    /**
     * Sets the folding state of the next cell to be drawn.
     * 
     * This function is intended to be called from a subclass' draw method before
     * chaining-up to its parent's draw method.
     * @param state a #TeplGutterRendererFoldsState.
     */
    set_state(state: GutterRendererFoldsState): void

    // Class property signals of Tepl-4.Tepl.GutterRendererFolds

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

class GutterRendererFolds extends GtkSource.GutterRenderer {

    // Own properties of Tepl-4.Tepl.GutterRendererFolds

    static name: string
    static $gtype: GObject.GType<GutterRendererFolds>

    // Constructors of Tepl-4.Tepl.GutterRendererFolds

    constructor(config?: GutterRendererFolds.ConstructorProperties) 
    constructor() 
    static new(): GutterRendererFolds
    _init(config?: GutterRendererFolds.ConstructorProperties): void
}

module InfoBar {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.InfoBar.ConstructorProperties {
    }

}

interface InfoBar extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Conflicting properties

    parent: Gtk.Box & Gtk.Container & Gtk.Container

    // Own fields of Tepl-4.Tepl.InfoBar

    parent_instance: Gtk.InfoBar & GObject.InitiallyUnowned

    // Owm methods of Tepl-4.Tepl.InfoBar

    /**
     * Calls gtk_info_bar_set_show_close_button(), and additionnally closes the
     * `info_bar` when the #GtkInfoBar::response signal is received with the
     * `response_id` %GTK_RESPONSE_CLOSE.
     */
    add_close_button(): void
    /**
     * Adds `content` to `info_bar`.
     * 
     * #TeplInfoBar has an internal container, to be able to add the icon and add
     * primary or secondary messages. The internal container is added to the content
     * area, as returned by gtk_info_bar_get_content_area(). So if you use a
     * #TeplInfoBar and you need to add a custom #GtkWidget, it is better to use
     * this function instead of adding the #GtkWidget directly to the content area.
     * @param content a #GtkWidget.
     */
    add_content_widget(content: Gtk.Widget): void
    /**
     * Adds an icon on the left, determined by the message type. So before calling
     * this function, gtk_info_bar_set_message_type() must have been called.
     * 
     * The icon is not updated when the message type changes. Another #TeplInfoBar
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
    /**
     * Sets the desired orientation (horizontal or vertical) for the action area as
     * returned by gtk_info_bar_get_action_area(). The action area is where the
     * buttons are placed.
     * 
     * The default value for a #TeplInfoBar is %GTK_ORIENTATION_VERTICAL. The reason
     * is because with a small #GtkWindow, if 3 or more buttons are shown
     * horizontally, there is not enough space for the text. And it can be worse
     * when the button labels are translated to another language. When the buttons
     * are packed vertically, there is usually no problem. A vertical action area
     * also follows the original design of #GtkInfoBar.
     * @param buttons_orientation the desired orientation.
     */
    set_buttons_orientation(buttons_orientation: Gtk.Orientation): void

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

    // Class property signals of Tepl-4.Tepl.InfoBar

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

class InfoBar extends Gtk.InfoBar {

    // Own properties of Tepl-4.Tepl.InfoBar

    static name: string
    static $gtype: GObject.GType<InfoBar>

    // Constructors of Tepl-4.Tepl.InfoBar

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
     * Creates a new #TeplInfoBar with an icon (depending on `msg_type)`, a primary
     * message and a secondary message.
     * @constructor 
     * @param msg_type the message type.
     * @param primary_msg the primary message.
     * @param secondary_msg the secondary message, or %NULL.
     * @returns a new #TeplInfoBar.
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

module MetadataStore {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface MetadataStore {

    // Own properties of Tepl-4.Tepl.MetadataStore

    /**
     * %TRUE when the metadata has been loaded, or when there has been at
     * least an attempt to load it (i.e. when
     * tepl_metadata_store_load_finish() has been called).
     * 
     * %FALSE otherwise.
     */
    readonly loaded: boolean

    // Own fields of Tepl-4.Tepl.MetadataStore

    parent: GObject.Object
    priv: MetadataStorePrivate

    // Owm methods of Tepl-4.Tepl.MetadataStore

    get_metadata_for_location(location: Gio.File): Gio.FileInfo | null
    is_loaded(): boolean
    /**
     * Loads asynchronously the content of the store file. You need to call
     * tepl_metadata_store_set_store_file() before.
     * 
     * You can call this function only once. Once the #TeplMetadataStore is loaded
     * it cannot be loaded a second time. A good moment to call this function is on
     * application startup. TODO "application startup": refer to #GApplication API,
     * the exact startup phase.
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
     * Loads asynchronously the content of the store file. You need to call
     * tepl_metadata_store_set_store_file() before.
     * 
     * You can call this function only once. Once the #TeplMetadataStore is loaded
     * it cannot be loaded a second time. A good moment to call this function is on
     * application startup. TODO "application startup": refer to #GApplication API,
     * the exact startup phase.
     * 
     * See the #GAsyncResult documentation to know how to use this function.
     * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns A Promise of: whether the metadata was loaded successfully.
     */
    load_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Finishes the metadata loading started with tepl_metadata_store_load_async().
     * 
     * Regardless of whether the operation was successful or not, calling this
     * function sets the #TeplMetadataStore:loaded property to %TRUE.
     * @param result a #GAsyncResult.
     * @returns whether the metadata was loaded successfully.
     */
    load_finish(result: Gio.AsyncResult): boolean
    /**
     * Saves synchronously the metadata to the store file. You need to call
     * tepl_metadata_store_set_store_file() before.
     * 
     * An asynchronous version doesn't exist because this function is meant to be
     * called on application shutdown. TODO: refer to #GApplication API, the exact
     * shutdown phase.
     * 
     * This function respects the configuration as set with
     * tepl_metadata_store_set_max_number_of_locations().
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns whether the metadata was saved successfully.
     */
    save(cancellable: Gio.Cancellable | null): boolean
    /**
     * If you don't call this function, a default internal value is used that should
     * fit most applications' needs.
     * 
     * The purpose of having a maximum size is to avoid the store file (as set with
     * tepl_metadata_store_set_store_file()) to grow indefinitely.
     * 
     * `max_number_of_locations` is the maximum number of #GFile locations for which
     * metadata are written to the store file. See
     * tepl_metadata_store_set_metadata_for_location() (this sets the metadata for
     * _one_ location).
     * 
     * Upon saving, the #TeplMetadataStore discards the least recently accessed
     * metadata if needed.
     * @param max_number_of_locations the maximum size.
     */
    set_max_number_of_locations(max_number_of_locations: number): void
    set_metadata_for_location(location: Gio.File, metadata: Gio.FileInfo | null): void
    /**
     * The `store_file` must be different for each process. It is advised for your
     * application to rely on #GApplication process uniqueness.
     * 
     * A good place to store the metadata is in a sub-directory of the user data
     * directory. See g_get_user_data_dir().
     * 
     * Note that this function does no I/O. To load the metadata from the
     * `store_file,` call tepl_metadata_store_load_async(). To save the metadata,
     * call tepl_metadata_store_save().
     * @param store_file the #GFile where the metadata is or will be stored.
     */
    set_store_file(store_file: Gio.File): void

    // Class property signals of Tepl-4.Tepl.MetadataStore

    connect(sigName: "notify::loaded", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::loaded", callback: (($obj: MetadataStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::loaded", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MetadataStore extends GObject.Object {

    // Own properties of Tepl-4.Tepl.MetadataStore

    static name: string
    static $gtype: GObject.GType<MetadataStore>

    // Constructors of Tepl-4.Tepl.MetadataStore

    constructor(config?: MetadataStore.ConstructorProperties) 
    _init(config?: MetadataStore.ConstructorProperties): void
    static get_singleton(): MetadataStore
}

module Notebook {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, TabGroup.ConstructorProperties, Gtk.Notebook.ConstructorProperties {
    }

}

interface Notebook extends Atk.ImplementorIface, Gtk.Buildable, TabGroup {

    // Own fields of Tepl-4.Tepl.Notebook

    parent: Gtk.Notebook & Gtk.Container
    priv: NotebookPrivate

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

    // Class property signals of Tepl-4.Tepl.Notebook

    connect(sigName: "notify::enable-popup", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-popup", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enable-popup", ...args: any[]): void
    connect(sigName: "notify::group-name", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::group-name", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::group-name", ...args: any[]): void
    connect(sigName: "notify::page", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::page", ...args: any[]): void
    connect(sigName: "notify::scrollable", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scrollable", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scrollable", ...args: any[]): void
    connect(sigName: "notify::show-border", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-border", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-border", ...args: any[]): void
    connect(sigName: "notify::show-tabs", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-tabs", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-tabs", ...args: any[]): void
    connect(sigName: "notify::tab-pos", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tab-pos", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tab-pos", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::active-buffer", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-buffer", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-buffer", ...args: any[]): void
    connect(sigName: "notify::active-tab", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-tab", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-tab", ...args: any[]): void
    connect(sigName: "notify::active-view", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-view", callback: (($obj: Notebook, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Notebook extends Gtk.Notebook {

    // Own properties of Tepl-4.Tepl.Notebook

    static name: string
    static $gtype: GObject.GType<Notebook>

    // Constructors of Tepl-4.Tepl.Notebook

    constructor(config?: Notebook.ConstructorProperties) 
    constructor() 
    static new(): Notebook
    _init(config?: Notebook.ConstructorProperties): void
}

module Tab {

    // Signal callback interfaces

    /**
     * Signal callback interface for `close-request`
     */
    interface CloseRequestSignalCallback {
        ($obj: Tab): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, TabGroup.ConstructorProperties, Gtk.Grid.ConstructorProperties {

        // Own constructor properties of Tepl-4.Tepl.Tab

        /**
         * The #TeplView contained in the tab. When this property is set, the
         * ::pack_view virtual function is called.
         */
        view?: View | null
    }

}

interface Tab extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, TabGroup {

    // Own properties of Tepl-4.Tepl.Tab

    /**
     * The #TeplView contained in the tab. When this property is set, the
     * ::pack_view virtual function is called.
     */
    readonly view: View

    // Own fields of Tepl-4.Tepl.Tab

    parent: Gtk.Grid & Gtk.Container
    priv: TabPrivate

    // Owm methods of Tepl-4.Tepl.Tab

    /**
     * Attaches `info_bar` to `tab`.
     * 
     * This function calls the ::pack_info_bar virtual function.
     * @param info_bar a #GtkInfoBar.
     */
    add_info_bar(info_bar: Gtk.InfoBar): void
    /**
     * A convenience function that calls gtk_text_view_get_buffer() on the
     * #TeplTab:view associated with the `tab`.
     * @returns the #TeplBuffer of the #TeplTab:view.
     */
    get_buffer(): Buffer
    get_view(): View
    /**
     * Unconditionally loads a file in `tab,` regardless if there are unsaved changes
     * in the #GtkTextBuffer. The previous buffer content is lost.
     * 
     * This function is asynchronous, there is no way to know when the file loading
     * is finished.
     * @param location a #GFile.
     */
    load_file(location: Gio.File): void
    /**
     * Shows a #GtkFileChooser to save the `tab` to a different location, creates an
     * appropriate #TeplFileSaver and asynchronously runs it.
     * 
     * See the #GAsyncResult documentation to know how to use this function.
     * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
     */
    save_as_async(callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of save_as_async

    /**
     * Promisified version of {@link save_as_async}
     * 
     * Shows a #GtkFileChooser to save the `tab` to a different location, creates an
     * appropriate #TeplFileSaver and asynchronously runs it.
     * 
     * See the #GAsyncResult documentation to know how to use this function.
     * @returns A Promise of: whether the tab was saved successfully.
     */
    save_as_async(): globalThis.Promise<boolean>
    /**
     * The same as tepl_tab_save_as_async(), but without callback.
     * 
     * This function is useful when you don't need to know:
     * - when the operation is finished;
     * - and whether the operation ran successfully.
     */
    save_as_async_simple(): void
    /**
     * Finishes a tab saving started with tepl_tab_save_as_async().
     * @param result a #GAsyncResult.
     * @returns whether the tab was saved successfully.
     */
    save_as_finish(result: Gio.AsyncResult): boolean
    /**
     * Saves asynchronously the content of the `tab`. The #TeplFile:location must not
     * be %NULL.
     * 
     * See the #GAsyncResult documentation to know how to use this function.
     * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
     */
    save_async(callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of save_async

    /**
     * Promisified version of {@link save_async}
     * 
     * Saves asynchronously the content of the `tab`. The #TeplFile:location must not
     * be %NULL.
     * 
     * See the #GAsyncResult documentation to know how to use this function.
     * @returns A Promise of: whether the tab was saved successfully.
     */
    save_async(): globalThis.Promise<boolean>
    /**
     * The same as tepl_tab_save_async(), but without callback.
     * 
     * This function is useful when you don't need to know:
     * - when the operation is finished;
     * - and whether the operation ran successfully.
     */
    save_async_simple(): void
    /**
     * Finishes a tab saving started with tepl_tab_save_async().
     * @param result a #GAsyncResult.
     * @returns whether the tab was saved successfully.
     */
    save_finish(result: Gio.AsyncResult): boolean

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

    // Own virtual methods of Tepl-4.Tepl.Tab

    vfunc_close_request(): void
    vfunc_pack_info_bar(info_bar: Gtk.InfoBar): void
    vfunc_pack_view(view: View): void

    // Own signals of Tepl-4.Tepl.Tab

    connect(sigName: "close-request", callback: Tab.CloseRequestSignalCallback): number
    connect_after(sigName: "close-request", callback: Tab.CloseRequestSignalCallback): number
    emit(sigName: "close-request", ...args: any[]): void

    // Class property signals of Tepl-4.Tepl.Tab

    connect(sigName: "notify::view", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::view", ...args: any[]): void
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
    connect(sigName: "notify::active-buffer", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-buffer", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-buffer", ...args: any[]): void
    connect(sigName: "notify::active-tab", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-tab", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-tab", ...args: any[]): void
    connect(sigName: "notify::active-view", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-view", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Tab extends Gtk.Grid {

    // Own properties of Tepl-4.Tepl.Tab

    static name: string
    static $gtype: GObject.GType<Tab>

    // Constructors of Tepl-4.Tepl.Tab

    constructor(config?: Tab.ConstructorProperties) 
    /**
     * Creates a new #TeplTab with a new #TeplView. The new #TeplView can be
     * retrieved afterwards with tepl_tab_get_view().
     * @constructor 
     * @returns a new #TeplTab.
     */
    constructor() 
    /**
     * Creates a new #TeplTab with a new #TeplView. The new #TeplView can be
     * retrieved afterwards with tepl_tab_get_view().
     * @constructor 
     * @returns a new #TeplTab.
     */
    static new(): Tab

    // Overloads of new

    /**
     * Creates a new grid widget.
     * @constructor 
     * @returns the new #GtkGrid
     */
    static new(): Gtk.Grid
    static new_with_view(view: View): Tab
    _init(config?: Tab.ConstructorProperties): void
}

module TabLabel {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Grid.ConstructorProperties {

        // Own constructor properties of Tepl-4.Tepl.TabLabel

        /**
         * The associated #TeplTab. #TeplTabLabel has a weak reference to the
         * #TeplTab.
         */
        tab?: Tab | null
    }

}

interface TabLabel extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Tepl-4.Tepl.TabLabel

    /**
     * The associated #TeplTab. #TeplTabLabel has a weak reference to the
     * #TeplTab.
     */
    readonly tab: Tab

    // Own fields of Tepl-4.Tepl.TabLabel

    parent: Gtk.Grid & Gtk.Container
    priv: TabLabelPrivate

    // Owm methods of Tepl-4.Tepl.TabLabel

    get_tab(): Tab | null
    /**
     * Asks #TeplTabLabel to update its tooltip. The ::get_tooltip_markup virtual
     * function is called and the result is set with
     * gtk_widget_set_tooltip_markup().
     */
    update_tooltip(): void

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

    // Own virtual methods of Tepl-4.Tepl.TabLabel

    vfunc_get_tooltip_markup(): string | null

    // Class property signals of Tepl-4.Tepl.TabLabel

    connect(sigName: "notify::tab", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tab", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tab", ...args: any[]): void
    connect(sigName: "notify::baseline-row", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-row", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-row", ...args: any[]): void
    connect(sigName: "notify::column-homogeneous", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-homogeneous", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-homogeneous", ...args: any[]): void
    connect(sigName: "notify::column-spacing", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-spacing", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::row-homogeneous", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-homogeneous", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-homogeneous", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-spacing", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: TabLabel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class TabLabel extends Gtk.Grid {

    // Own properties of Tepl-4.Tepl.TabLabel

    static name: string
    static $gtype: GObject.GType<TabLabel>

    // Constructors of Tepl-4.Tepl.TabLabel

    constructor(config?: TabLabel.ConstructorProperties) 
    constructor(tab: Tab) 
    static new(tab: Tab): TabLabel

    // Overloads of new

    /**
     * Creates a new grid widget.
     * @constructor 
     * @returns the new #GtkGrid
     */
    static new(): Gtk.Grid
    _init(config?: TabLabel.ConstructorProperties): void
}

module View {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Scrollable.ConstructorProperties, GtkSource.View.ConstructorProperties {
    }

}

interface View extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Conflicting properties

    parent: Gtk.TextView & Gtk.Container & Gtk.Container

    // Own fields of Tepl-4.Tepl.View

    parent_instance: GtkSource.View & Gtk.Container & GObject.InitiallyUnowned & GObject.InitiallyUnowned

    // Owm methods of Tepl-4.Tepl.View

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

    // Class property signals of Tepl-4.Tepl.View

    connect(sigName: "notify::auto-indent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-indent", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::auto-indent", ...args: any[]): void
    connect(sigName: "notify::background-pattern", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-pattern", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-pattern", ...args: any[]): void
    connect(sigName: "notify::completion", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::completion", callback: (($obj: View, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::completion", ...args: any[]): void
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

class View extends GtkSource.View {

    // Own properties of Tepl-4.Tepl.View

    static name: string
    static $gtype: GObject.GType<View>

    // Constructors of Tepl-4.Tepl.View

    constructor(config?: View.ConstructorProperties) 
    constructor() 
    static new(): View
    _init(config?: View.ConstructorProperties): void

    // Conflicting static methods

    static new_with_buffer(...args: any[]): any
}

interface AbstractFactoryClass {

    // Own fields of Tepl-4.Tepl.AbstractFactoryClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: GObject.ObjectClass
    create_main_window: (factory: AbstractFactory, app: Gtk.Application) => Gtk.ApplicationWindow | null
    create_tab: (factory: AbstractFactory) => Tab
    create_tab_label: (factory: AbstractFactory, tab: Tab) => Gtk.Widget | null
    create_file: (factory: AbstractFactory) => File
}

abstract class AbstractFactoryClass {

    // Own properties of Tepl-4.Tepl.AbstractFactoryClass

    static name: string
}

interface AbstractFactoryValaClass {

    // Own fields of Tepl-4.Tepl.AbstractFactoryValaClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: AbstractFactoryClass
    create_main_window_vala: (factory_vala: AbstractFactoryVala, app: Gtk.Application) => Gtk.ApplicationWindow | null
}

abstract class AbstractFactoryValaClass {

    // Own properties of Tepl-4.Tepl.AbstractFactoryValaClass

    static name: string
}

interface ApplicationClass {

    // Own fields of Tepl-4.Tepl.ApplicationClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

abstract class ApplicationClass {

    // Own properties of Tepl-4.Tepl.ApplicationClass

    static name: string
}

interface ApplicationPrivate {
}

class ApplicationPrivate {

    // Own properties of Tepl-4.Tepl.ApplicationPrivate

    static name: string
}

interface ApplicationWindowClass {

    // Own fields of Tepl-4.Tepl.ApplicationWindowClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

abstract class ApplicationWindowClass {

    // Own properties of Tepl-4.Tepl.ApplicationWindowClass

    static name: string
}

interface ApplicationWindowPrivate {
}

class ApplicationWindowPrivate {

    // Own properties of Tepl-4.Tepl.ApplicationWindowPrivate

    static name: string
}

interface BufferClass {

    // Own fields of Tepl-4.Tepl.BufferClass

    parent_class: GtkSource.BufferClass
    tepl_cursor_moved: (buffer: Buffer) => void
    padding: any[]
}

abstract class BufferClass {

    // Own properties of Tepl-4.Tepl.BufferClass

    static name: string
}

interface Encoding {

    // Owm methods of Tepl-4.Tepl.Encoding

    copy(): Encoding
    /**
     * Returns whether `enc1` and `enc2` are equal. It returns %TRUE iff:
     * - Both `enc1` and `enc2` are %NULL;
     * - Or both `enc1` and `enc2` have a UTF-8 charset (see
     *   tepl_encoding_is_utf8());
     * - Or the charsets are equal according to g_ascii_strcasecmp() (because
     *   iconv-compatible charsets are case insensitive).
     * @param enc2 a #TeplEncoding, or %NULL.
     * @returns whether @enc1 and @enc2 are equal.
     */
    equals(enc2: Encoding | null): boolean
    free(): void
    /**
     * Gets the character set of the #TeplEncoding, such as "UTF-8" or "ISO-8859-1".
     * @returns the character set of the #TeplEncoding.
     */
    get_charset(): string | null
    /**
     * Gets the name of the #TeplEncoding such as "Unicode" or "Western". If the
     * charset is unknown by #TeplEncoding, "Unknown" is returned. The return value
     * is already translated by gettext.
     * @returns the name of the #TeplEncoding.
     */
    get_name(): string | null
    /**
     * Returns whether `enc` is a UTF-8 encoding.
     * 
     * If `enc` was created with tepl_encoding_new_utf8(), the charset is "UTF-8".
     * But iconv supports other variants: "UTF8", "utf-8" and "utf8". This function
     * returns %TRUE for all UTF-8 variants supported by iconv.
     * @returns whether @enc is a UTF-8 encoding.
     */
    is_utf8(): boolean
    /**
     * Returns the encoding name with the charset in parenthesis, for example
     * "Unicode (UTF-8)". If the name is unknown, just the charset is returned. The
     * name is translated by gettext.
     * @returns a string representation. Free with g_free() when no longer needed.
     */
    to_string(): string | null
}

class Encoding {

    // Own properties of Tepl-4.Tepl.Encoding

    static name: string

    // Constructors of Tepl-4.Tepl.Encoding

    /**
     * Creates a new #TeplEncoding from a character set such as "UTF-8" or
     * "ISO-8859-1".
     * 
     * The tepl_encoding_get_charset() function will return exactly the same string
     * as the `charset` passed in to this constructor.
     * @constructor 
     * @param charset a character set.
     * @returns the new #TeplEncoding. Free with tepl_encoding_free().
     */
    constructor(charset: string | null) 
    /**
     * Creates a new #TeplEncoding from a character set such as "UTF-8" or
     * "ISO-8859-1".
     * 
     * The tepl_encoding_get_charset() function will return exactly the same string
     * as the `charset` passed in to this constructor.
     * @constructor 
     * @param charset a character set.
     * @returns the new #TeplEncoding. Free with tepl_encoding_free().
     */
    static new(charset: string | null): Encoding
    /**
     * Creates a new #TeplEncoding from the current locale, as returned by
     * g_get_charset().
     * @constructor 
     * @returns the new #TeplEncoding. Free with tepl_encoding_free().
     */
    static new_from_locale(): Encoding
    /**
     * Creates a new #TeplEncoding with the "UTF-8" character set.
     * @constructor 
     * @returns the new #TeplEncoding. Free with tepl_encoding_free().
     */
    static new_utf8(): Encoding
    /**
     * Gets a list of all encodings known by #TeplEncoding.
     * @returns a list of #TeplEncoding's.
     */
    static get_all(): Encoding[]
    /**
     * Gets the list of default candidate encodings to try when loading a file. See
     * gtk_source_file_loader_set_candidate_encodings().
     * 
     * This function returns a different list depending on the current locale (i.e.
     * language, country and default encoding). The UTF-8 encoding and the current
     * locale encoding are guaranteed to be present in the returned list.
     * 
     * Note that the returned list doesn't contain all encodings known by
     * #TeplEncoding, it is a limited list that contains only the encodings that
     * have the most likelihood to fit for the current locale.
     * @returns the list of default candidate encodings.
     */
    static get_default_candidates(): Encoding[]
}

interface FileClass {

    // Own fields of Tepl-4.Tepl.FileClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

abstract class FileClass {

    // Own properties of Tepl-4.Tepl.FileClass

    static name: string
}

interface FileLoaderClass {

    // Own fields of Tepl-4.Tepl.FileLoaderClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

abstract class FileLoaderClass {

    // Own properties of Tepl-4.Tepl.FileLoaderClass

    static name: string
}

interface FileMetadataClass {

    // Own fields of Tepl-4.Tepl.FileMetadataClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

abstract class FileMetadataClass {

    // Own properties of Tepl-4.Tepl.FileMetadataClass

    static name: string
}

interface FileSaverClass {

    // Own fields of Tepl-4.Tepl.FileSaverClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

abstract class FileSaverClass {

    // Own properties of Tepl-4.Tepl.FileSaverClass

    static name: string
}

interface FileSaverPrivate {
}

class FileSaverPrivate {

    // Own properties of Tepl-4.Tepl.FileSaverPrivate

    static name: string
}

interface FoldRegionClass {

    // Own fields of Tepl-4.Tepl.FoldRegionClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

abstract class FoldRegionClass {

    // Own properties of Tepl-4.Tepl.FoldRegionClass

    static name: string
}

interface GutterRendererFoldsClass {

    // Own fields of Tepl-4.Tepl.GutterRendererFoldsClass

    parent_class: GtkSource.GutterRendererClass
    padding: any[]
}

abstract class GutterRendererFoldsClass {

    // Own properties of Tepl-4.Tepl.GutterRendererFoldsClass

    static name: string
}

interface InfoBarClass {

    // Own fields of Tepl-4.Tepl.InfoBarClass

    parent_class: Gtk.InfoBarClass
    padding: any[]
}

abstract class InfoBarClass {

    // Own properties of Tepl-4.Tepl.InfoBarClass

    static name: string
}

interface MetadataStoreClass {

    // Own fields of Tepl-4.Tepl.MetadataStoreClass

    parent_class: GObject.ObjectClass
    padding: any[]
}

abstract class MetadataStoreClass {

    // Own properties of Tepl-4.Tepl.MetadataStoreClass

    static name: string
}

interface MetadataStorePrivate {
}

class MetadataStorePrivate {

    // Own properties of Tepl-4.Tepl.MetadataStorePrivate

    static name: string
}

interface NotebookClass {

    // Own fields of Tepl-4.Tepl.NotebookClass

    parent_class: Gtk.NotebookClass
    padding: any[]
}

abstract class NotebookClass {

    // Own properties of Tepl-4.Tepl.NotebookClass

    static name: string
}

interface NotebookPrivate {
}

class NotebookPrivate {

    // Own properties of Tepl-4.Tepl.NotebookPrivate

    static name: string
}

interface TabClass {

    // Own fields of Tepl-4.Tepl.TabClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gtk.GridClass
    pack_view: (tab: Tab, view: View) => void
    pack_info_bar: (tab: Tab, info_bar: Gtk.InfoBar) => void
    close_request: (tab: Tab) => void
}

abstract class TabClass {

    // Own properties of Tepl-4.Tepl.TabClass

    static name: string
}

interface TabGroupInterface {

    // Own fields of Tepl-4.Tepl.TabGroupInterface

    /**
     * The parent interface.
     * @field 
     */
    parent_interface: GObject.TypeInterface
    get_tabs: (tab_group: TabGroup) => Tab[]
    get_active_tab: (tab_group: TabGroup) => Tab | null
    set_active_tab: (tab_group: TabGroup, tab: Tab) => void
    append_tab_vfunc: (tab_group: TabGroup, tab: Tab) => void
}

/**
 * The virtual function table for #TeplTabGroup. When implementing one of the
 * vfunc, you can assume that the pre-conditions are already checked (the
 * parameters are valid).
 * @record 
 */
abstract class TabGroupInterface {

    // Own properties of Tepl-4.Tepl.TabGroupInterface

    static name: string
}

interface TabLabelClass {

    // Own fields of Tepl-4.Tepl.TabLabelClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gtk.GridClass
    get_tooltip_markup: (tab_label: TabLabel) => string | null
}

abstract class TabLabelClass {

    // Own properties of Tepl-4.Tepl.TabLabelClass

    static name: string
}

interface TabLabelPrivate {
}

class TabLabelPrivate {

    // Own properties of Tepl-4.Tepl.TabLabelPrivate

    static name: string
}

interface TabPrivate {
}

class TabPrivate {

    // Own properties of Tepl-4.Tepl.TabPrivate

    static name: string
}

interface ViewClass {

    // Own fields of Tepl-4.Tepl.ViewClass

    parent_class: GtkSource.ViewClass
    padding: any[]
}

abstract class ViewClass {

    // Own properties of Tepl-4.Tepl.ViewClass

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

export default Tepl;
// END