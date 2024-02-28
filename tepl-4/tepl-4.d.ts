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
    class FileLoaderError extends GLib.Error {
        // Own fields of Tepl-4.FileLoaderError

        /**
         * The file is too big.
         */
        TOO_BIG: number;
        /**
         * It is not possible to
         *   detect the encoding automatically.
         */
        ENCODING_AUTO_DETECTION_FAILED: number;

        // Constructors of Tepl-4.FileLoaderError

        constructor(options: { message: string; code: number });

        // Owm methods of Tepl-4.FileLoaderError

        static quark(): GLib.Quark;
    }

    /**
     * An error code used with the %TEPL_FILE_SAVER_ERROR domain.
     */
    class FileSaverError extends GLib.Error {
        // Own fields of Tepl-4.FileSaverError

        /**
         * The buffer contains invalid
         *   characters.
         */
        INVALID_CHARS: number;
        /**
         * The file is externally
         *   modified.
         */
        EXTERNALLY_MODIFIED: number;

        // Constructors of Tepl-4.FileSaverError

        constructor(options: { message: string; code: number });

        // Owm methods of Tepl-4.FileSaverError

        static quark(): GLib.Quark;
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
     * Gets a list of all encodings known by #TeplEncoding.
     * @returns a list of #TeplEncoding's.
     */
    function encoding_get_all(): Encoding[];
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
    function encoding_get_default_candidates(): Encoding[];
    function file_loader_error_quark(): GLib.Quark;
    function file_saver_error_quark(): GLib.Quark;
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
    function finalize(): void;
    /**
     * Initializes the Tepl library (e.g. for the internationalization).
     *
     * This function can be called several times, but is meant to be called at the
     * beginning of main(), before any other Tepl function call.
     *
     * This function also calls amtk_init() and gtk_source_init().
     */
    function init(): void;
    /**
     * When a %G_IO_ERROR_CANT_CREATE_BACKUP error occurs while saving `location,`
     * offer two possible actions:
     * - Save anyway: %GTK_RESPONSE_YES.
     * - Don't save: %GTK_RESPONSE_CANCEL.
     * @param location the #GFile for which the backup failed to be created.
     * @param error must be a %G_IO_ERROR_CANT_CREATE_BACKUP.
     * @returns the newly created #TeplInfoBar.
     */
    function io_error_info_bar_cant_create_backup(location: Gio.File, error: GLib.Error): InfoBar;
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
    function io_error_info_bar_externally_modified(location: Gio.File, document_modified: boolean): InfoBar;
    /**
     * Creates a warning about `location` being already open in another window,
     * offering two possible actions:
     * - Edit anyway: %GTK_RESPONSE_YES.
     * - Don't edit: %GTK_RESPONSE_CANCEL.
     * @param location the #GFile already open in another window.
     * @returns the newly created #TeplInfoBar.
     */
    function io_error_info_bar_file_already_open(location: Gio.File): InfoBar;
    /**
     * For file saving, creates a warning about invalid characters that can corrupt
     * the file. Possible actions:
     * - Save anyway: %GTK_RESPONSE_YES.
     * - Don't save: %GTK_RESPONSE_CANCEL.
     * @param location where to save the document.
     * @returns the newly created #TeplInfoBar.
     */
    function io_error_info_bar_invalid_characters(location: Gio.File): InfoBar;
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
    function iter_get_line_indentation(iter: Gtk.TextIter): string;
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
    function menu_shell_append_edit_actions(menu_shell: Gtk.MenuShell): void;
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
    function metadata_manager_init(metadata_path: string): void;
    /**
     * This function saves synchronously metadata if they need to be saved, and
     * frees the internal data of the metadata manager.
     *
     * See also tepl_finalize(), which calls this function.
     */
    function metadata_manager_shutdown(): void;
    /**
     * Synchronously creates parent directories of `file,` so that `file` can be
     * saved.
     * @param file a file
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns whether the directories are correctly created. %FALSE is returned on error.
     */
    function utils_create_parent_directories(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean;
    /**
     * Parse and break an uri apart in its individual components like the uri
     * scheme, user info, host, port and path. The return value pointer can be
     * %NULL to ignore certain parts of the uri. If the function returns %TRUE, then
     * all return value pointers should be freed using g_free().
     * @param uri the uri to decode
     * @returns %TRUE if the uri could be properly decoded, %FALSE otherwise.
     */
    function utils_decode_uri(uri: string): boolean;
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
    function utils_get_file_extension(filename: string): string;
    /**
     * Returns `filename` without its extension. With the “extension” having the same
     * definition as in tepl_utils_get_file_extension(); in other words it returns
     * the other part of `filename`.
     * @param filename a filename.
     * @returns the @filename without its extension. Free with g_free().
     */
    function utils_get_file_shortname(filename: string): string;
    /**
     * Replaces the home directory with a tilde, if the home directory is present in
     * the `filename`.
     * @param filename the filename.
     * @returns the new filename. Free with g_free().
     */
    function utils_replace_home_dir_with_tilde(filename: string): string;
    /**
     * Like tepl_utils_str_middle_truncate() but the “…” character is at the end.
     * @param str a UTF-8 string.
     * @param truncate_length truncate the string at that length, in UTF-8 characters   (not bytes).
     * @returns the truncated string. Free with g_free().
     */
    function utils_str_end_truncate(str: string, truncate_length: number): string;
    /**
     * If `str` is longer than `truncate_length,` then this function returns `str`
     * truncated in the middle with a “…” character. Otherwise it just returns a
     * copy of `str`.
     * @param str a UTF-8 string.
     * @param truncate_length truncate the string at that length, in UTF-8 characters   (not bytes).
     * @returns the truncated string. Free with g_free().
     */
    function utils_str_middle_truncate(str: string, truncate_length: number): string;
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
    function utils_str_replace(string: string, search: string, replacement: string): string;
    /**
     * Flags to define the behavior of a #TeplFileSaver.
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
    module AbstractFactory {
        // Constructor properties interface
    }

    class AbstractFactory extends GObject.Object {
        // Owm methods of Tepl-4.AbstractFactory

        /**
         * Gets the #TeplAbstractFactory singleton instance.
         *
         * If tepl_abstract_factory_set_singleton() has not been called, the singleton
         * is created with a #TeplAbstractFactory instance.
         */
        static get_singleton(): AbstractFactory;

        // Owm methods of Tepl-4.AbstractFactory

        create_file(): File;
        /**
         * Creates a main #GtkApplicationWindow in the sense of
         * tepl_application_window_is_main_window().
         * @param app a #GtkApplication.
         * @returns a new main application window, or %NULL if the vfunc is not implemented.
         */
        create_main_window(app: Gtk.Application): Gtk.ApplicationWindow | null;
        create_tab(): Tab;
        /**
         * Creates a new tab label for `tab,` suitable for gtk_notebook_set_tab_label().
         * @param tab a #TeplTab.
         * @returns a new #GtkWidget, or %NULL for the default tab label (“page N” with #GtkNotebook).
         */
        create_tab_label(tab: Tab): Gtk.Widget | null;
        /**
         * Sets the #TeplAbstractFactory singleton. This should be called early in
         * main(), for example just after calling tepl_init().
         *
         * This function must be called only once, before the first call to
         * tepl_abstract_factory_get_singleton().
         *
         * Tepl takes ownership of the `factory` reference.
         */
        set_singleton(): void;
    }

    module AbstractFactoryVala {
        // Constructor properties interface
    }

    class AbstractFactoryVala extends AbstractFactory {
        // Owm methods of Tepl-4.AbstractFactoryVala

        /**
         * Like tepl_abstract_factory_create_main_window(), but with a (transfer full)
         * return value.
         * @param app a #GtkApplication.
         * @returns a new main application window, or %NULL if the vfunc is not implemented.
         */
        create_main_window_vala(app: Gtk.Application): Gtk.ApplicationWindow | null;
        /**
         * Like tepl_abstract_factory_set_singleton(), but with (transfer none) for the
         * `factory_vala` parameter.
         *
         * Apparently Vala doesn't support (transfer full) for the self parameter,
         * resulting to a double unref if tepl_abstract_factory_set_singleton() is
         * called in Vala...
         */
        set_singleton_vala(): void;
    }

    module Application {
        // Constructor properties interface
    }

    class Application extends GObject.Object {
        // Own properties of Tepl-4.Application

        /**
         * The #GtkApplication.
         */
        application: Gtk.Application;

        // Owm methods of Tepl-4.Application

        /**
         * Convenience function that calls g_application_get_default() followed by
         * tepl_application_get_from_gtk_application(). The object returned by
         * g_application_get_default() must be a #GtkApplication.
         */
        static get_default(): Application;
        /**
         * Returns the #TeplApplication of `gtk_app`. The returned object is guaranteed
         * to be the same for the lifetime of `gtk_app`.
         * @param gtk_app a #GtkApplication.
         */
        static get_from_gtk_application(gtk_app: Gtk.Application): Application;

        // Owm methods of Tepl-4.Application

        /**
         * Like gtk_application_get_active_window(), but returns the main window in the
         * sense of tepl_application_window_is_main_window().
         * @returns the active main #GtkApplicationWindow, or %NULL.
         */
        get_active_main_window(): Gtk.ApplicationWindow | null;
        /**
         * Returns an initially empty #AmtkActionInfoStore reserved for the
         * application-specific actions. Libraries should not add #AmtkActionInfo's to
         * this store. Libraries should provide their own store if they want to share
         * #AmtkActionInfo's.
         * @returns the #AmtkActionInfoStore reserved for the application.
         */
        get_app_action_info_store(): Amtk.ActionInfoStore;
        get_application(): Gtk.Application;
        /**
         * The returned #AmtkActionInfoStore contains #AmtkActionInfo's for all the
         * #GAction's listed in the [class description of
         * TeplApplicationWindow][tepl-application-window-gactions] and the [class
         * description of TeplApplication][tepl-application-gactions].
         * @returns the #AmtkActionInfoStore of the Tepl library.
         */
        get_tepl_action_info_store(): Amtk.ActionInfoStore;
        /**
         * Connects a generic function handler for the #GApplication::activate signal.
         *
         * If no main windows exist, it creates one with
         * tepl_abstract_factory_create_main_window(). If a main window already exists,
         * it calls gtk_window_present() on the most recently focused window of the
         * application.
         */
        handle_activate(): void;
        /**
         * Connects a generic function handler for the #GApplication::open signal.
         *
         * It calls tepl_application_window_open_file() for each #GFile to open, on the
         * active main window as returned by tepl_application_get_active_main_window().
         * If the active main window is %NULL, it creates one with
         * tepl_abstract_factory_create_main_window().
         */
        handle_open(): void;
        /**
         * Calls g_application_open() with a single file and an empty hint.
         * @param file a #GFile.
         */
        open_simple(file: Gio.File): void;
    }

    module ApplicationWindow {
        // Constructor properties interface
    }

    class ApplicationWindow extends GObject.Object {
        // Own properties of Tepl-4.ApplicationWindow

        /**
         * The #GtkApplicationWindow.
         */
        application_window: Gtk.ApplicationWindow;
        /**
         * The #GtkApplicationWindow.
         */
        applicationWindow: Gtk.ApplicationWindow;
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
        handle_title: boolean;
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
        handleTitle: boolean;

        // Owm methods of Tepl-4.ApplicationWindow

        /**
         * Returns the #TeplApplicationWindow of `gtk_window`. The returned object is
         * guaranteed to be the same for the lifetime of `gtk_window`.
         * @param gtk_window a #GtkApplicationWindow.
         */
        static get_from_gtk_application_window(gtk_window: Gtk.ApplicationWindow): ApplicationWindow;
        /**
         * Returns %TRUE iff `gtk_window` has an associated #TeplTabGroup (i.e. if
         * tepl_application_window_set_tab_group() has been called).
         *
         * This function takes a #GtkApplicationWindow parameter to avoid creating the
         * #TeplApplicationWindow object if it hasn't been created.
         * @param gtk_window a #GtkApplicationWindow.
         */
        static is_main_window(gtk_window: Gtk.ApplicationWindow): boolean;

        // Owm methods of Tepl-4.ApplicationWindow

        get_application_window(): Gtk.ApplicationWindow;
        get_handle_title(): boolean;
        /**
         * Gets the #GtkWindowGroup in which `tepl_window` resides.
         *
         * You should call this function only on main windows, to add secondary windows
         * to the #GtkWindowGroup.
         * @returns the #GtkWindowGroup.
         */
        get_window_group(): Gtk.WindowGroup;
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
        open_file(location: Gio.File, jump_to: boolean): void;
        /**
         * Sets the #TeplApplicationWindow:handle-title property.
         * @param handle_title the new value.
         */
        set_handle_title(handle_title: boolean): void;
        /**
         * Sets the #TeplTabGroup of `tepl_window`. This function can be called only
         * once, it is not possible to change the #TeplTabGroup afterwards (this
         * restriction may be lifted in the future if there is a compelling use-case).
         *
         * #TeplApplicationWindow implements the #TeplTabGroup interface by delegating
         * the requests to `tab_group`.
         * @param tab_group a #TeplTabGroup.
         */
        set_tab_group(tab_group: TabGroup): void;
    }

    module Buffer {
        // Signal callback interfaces

        interface TeplCursorMoved {
            (): void;
        }

        // Constructor properties interface
    }

    class Buffer extends GtkSource.Buffer {
        // Own properties of Tepl-4.Buffer

        /**
         * The full title. See tepl_buffer_get_full_title().
         */
        readonly tepl_full_title: string;
        /**
         * The full title. See tepl_buffer_get_full_title().
         */
        readonly teplFullTitle: string;
        /**
         * The short title. See tepl_buffer_get_short_title().
         */
        readonly tepl_short_title: string;
        /**
         * The short title. See tepl_buffer_get_short_title().
         */
        readonly teplShortTitle: string;
        /**
         * The #GtkSourceBuffer:style-scheme ID, as a string. This property is
         * useful for binding it to a #GSettings key.
         *
         * When the #GtkSourceBuffer:style-scheme is %NULL,
         * #TeplBuffer:tepl-style-scheme-id contains the empty string.
         */
        tepl_style_scheme_id: string;
        /**
         * The #GtkSourceBuffer:style-scheme ID, as a string. This property is
         * useful for binding it to a #GSettings key.
         *
         * When the #GtkSourceBuffer:style-scheme is %NULL,
         * #TeplBuffer:tepl-style-scheme-id contains the empty string.
         */
        teplStyleSchemeId: string;

        // Constructors of Tepl-4.Buffer

        static ['new'](): Buffer;

        // Owm methods of Tepl-4.Buffer

        /**
         * Returns the #TeplFile of `buffer`. The returned object is guaranteed to be the
         * same for the lifetime of `buffer`.
         *
         * #TeplBuffer creates the #TeplFile with tepl_abstract_factory_create_file().
         * @returns the associated #TeplFile.
         */
        get_file(): File;
        /**
         * Returns a title suitable for a #GtkWindow title. It contains (in that order):
         * - the #TeplBuffer:tepl-short-title;
         * - the directory path in parenthesis if the #TeplFile:location isn't
         *   %NULL.
         * @returns the @buffer full title. Free the return value with g_free() when no longer needed.
         */
        get_full_title(): string;
        get_selection_type(): SelectionType;
        /**
         * Returns a title suitable for a tab label. It contains (in that order):
         * - '*' if the buffer is modified;
         * - the #TeplFile:short-name;
         * @returns the @buffer short title. Free the return value with g_free() when no longer needed.
         */
        get_short_title(): string;
        get_style_scheme_id(): string;
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
        is_untouched(): boolean;
        /**
         * Sets the #TeplBuffer:tepl-style-scheme-id property.
         *
         * The #GtkSourceStyleScheme is taken from the default
         * #GtkSourceStyleSchemeManager as returned by
         * gtk_source_style_scheme_manager_get_default().
         * @param style_scheme_id the new value.
         */
        set_style_scheme_id(style_scheme_id: string): void;
    }

    module File {
        // Constructor properties interface
    }

    class File extends GObject.Object {
        // Own properties of Tepl-4.File

        /**
         * The compression type.
         */
        readonly compression_type: CompressionType;
        /**
         * The compression type.
         */
        readonly compressionType: CompressionType;
        /**
         * The character encoding, initially %NULL. After a successful file
         * loading or saving operation, the encoding is non-%NULL.
         */
        readonly encoding: Encoding;
        /**
         * The location.
         */
        location: Gio.File;
        /**
         * The line ending type.
         */
        readonly newline_type: NewlineType;
        /**
         * The line ending type.
         */
        readonly newlineType: NewlineType;
        /**
         * Whether the file is read-only or not. The value of this property is
         * not updated automatically (there is no file monitors).
         */
        readonly read_only: boolean;
        /**
         * Whether the file is read-only or not. The value of this property is
         * not updated automatically (there is no file monitors).
         */
        readonly readOnly: boolean;
        /**
         * The file short name. See tepl_file_get_short_name().
         */
        readonly short_name: string;
        /**
         * The file short name. See tepl_file_get_short_name().
         */
        readonly shortName: string;

        // Constructors of Tepl-4.File

        static ['new'](): File;

        // Owm methods of Tepl-4.File

        /**
         * If the #TeplFile:location isn't %NULL, adds its URI to the default
         * #GtkRecentManager with gtk_recent_manager_add_item().
         */
        add_uri_to_recent_manager(): void;
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
        check_file_on_disk(): void;
        get_compression_type(): CompressionType;
        /**
         * The encoding is initially %NULL. After a successful file loading or saving
         * operation, the encoding is non-%NULL.
         * @returns the character encoding.
         */
        get_encoding(): Encoding;
        get_file_metadata(): FileMetadata;
        get_location(): Gio.File;
        get_newline_type(): NewlineType;
        /**
         * Gets the `file` short name. If the #TeplFile:location isn't %NULL,
         * returns its display-name (see #G_FILE_ATTRIBUTE_STANDARD_DISPLAY_NAME).
         * Otherwise returns "Untitled File N", with N the Nth untitled file of the
         * application, starting at 1. When an untitled file is closed, its number is
         * released and can be used by a later untitled file.
         * @returns the @file short name.
         */
        get_short_name(): string;
        /**
         * Returns whether the file has been deleted. If the
         * #TeplFile:location is %NULL, returns %FALSE.
         *
         * To have an up-to-date value, you must first call
         * tepl_file_check_file_on_disk().
         * @returns whether the file has been deleted.
         */
        is_deleted(): boolean;
        /**
         * Returns whether the file is externally modified. If the
         * #TeplFile:location is %NULL, returns %FALSE.
         *
         * To have an up-to-date value, you must first call
         * tepl_file_check_file_on_disk().
         * @returns whether the file is externally modified.
         */
        is_externally_modified(): boolean;
        /**
         * Returns whether the file is local. If the #TeplFile:location is %NULL,
         * returns %FALSE.
         * @returns whether the file is local.
         */
        is_local(): boolean;
        /**
         * Returns whether the file is read-only. If the
         * #TeplFile:location is %NULL, returns %FALSE.
         *
         * To have an up-to-date value, you must first call
         * tepl_file_check_file_on_disk().
         * @returns whether the file is read-only.
         */
        is_readonly(): boolean;
        /**
         * Sets the location.
         * @param location the new #GFile, or %NULL.
         */
        set_location(location?: Gio.File | null): void;
    }

    module FileLoader {
        // Constructor properties interface
    }

    class FileLoader extends GObject.Object {
        // Own properties of Tepl-4.FileLoader

        /**
         * The #TeplBuffer to load the content into. The #TeplFileLoader object
         * has a weak reference to the buffer.
         */
        buffer: Buffer;
        /**
         * The chunk size, in bytes. The content is loaded chunk by chunk. It
         * permits to avoid allocating a too big contiguous memory area, as well
         * as reporting progress information after each chunk read.
         *
         * A small chunk size is better when loading a remote file with a slow
         * connection. For local files, the chunk size can be larger.
         */
        chunk_size: number;
        /**
         * The chunk size, in bytes. The content is loaded chunk by chunk. It
         * permits to avoid allocating a too big contiguous memory area, as well
         * as reporting progress information after each chunk read.
         *
         * A small chunk size is better when loading a remote file with a slow
         * connection. For local files, the chunk size can be larger.
         */
        chunkSize: number;
        /**
         * The #TeplFile. The #TeplFileLoader object has a weak
         * reference to the file.
         */
        file: File;
        /**
         * The #GFile to load. By default the location is taken from the
         * #TeplFile at construction time.
         */
        location: Gio.File;
        /**
         * The maximum content size, in bytes. Keep in mind that all the
         * content is loaded in memory, and when loaded into a #GtkTextBuffer
         * it takes more memory than just the content size.
         *
         * Set to -1 for unlimited size.
         */
        max_size: number;
        /**
         * The maximum content size, in bytes. Keep in mind that all the
         * content is loaded in memory, and when loaded into a #GtkTextBuffer
         * it takes more memory than just the content size.
         *
         * Set to -1 for unlimited size.
         */
        maxSize: number;

        // Constructors of Tepl-4.FileLoader

        static ['new'](buffer: Buffer, file: File): FileLoader;

        // Owm methods of Tepl-4.FileLoader

        get_buffer(): Buffer | null;
        get_chunk_size(): number;
        get_encoding(): Encoding | null;
        get_file(): File | null;
        get_location(): Gio.File | null;
        get_max_size(): number;
        get_newline_type(): NewlineType;
        /**
         * Loads asynchronously the file content into the #TeplBuffer.
         *
         * See the #GAsyncResult documentation to know how to use this function.
         * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param progress_callback function to call back with   progress information, or %NULL if progress information is not needed.
         * @param progress_callback_notify function to call on   @progress_callback_data when the @progress_callback is no longer needed, or   %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
         */
        load_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: Gio.FileProgressCallback | null,
            progress_callback_notify?: GLib.DestroyNotify | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes a file loading started with tepl_file_loader_load_async().
         * @param result a #GAsyncResult.
         * @returns whether the content has been loaded successfully.
         */
        load_finish(result: Gio.AsyncResult): boolean;
        set_chunk_size(chunk_size: number): void;
        set_max_size(max_size: number): void;
    }

    module FileMetadata {
        // Constructor properties interface
    }

    class FileMetadata extends GObject.Object {
        // Own properties of Tepl-4.FileMetadata

        /**
         * The #TeplFile that the metadata belong to.
         */
        file: File;

        // Constructors of Tepl-4.FileMetadata

        static ['new'](file: File): FileMetadata;

        // Owm methods of Tepl-4.FileMetadata

        /**
         * Gets the value of a metadata stored in the `metadata` object memory.
         * @param key the name of the metadata.
         * @returns the value of the metadata, or %NULL if the metadata   doesn't exist. Free with g_free().
         */
        get(key: string): string | null;
        get_file(): File;
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
        load(cancellable?: Gio.Cancellable | null): boolean;
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
        load_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the metadata loading started with tepl_file_metadata_load_async().
         * @param result a #GAsyncResult.
         * @returns whether the metadata was loaded successfully.
         */
        load_finish(result: Gio.AsyncResult): boolean;
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
        save(cancellable?: Gio.Cancellable | null): boolean;
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
        save_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the metadata saving started with tepl_file_metadata_save_async().
         * @param result a #GAsyncResult.
         * @returns whether the metadata was saved successfully.
         */
        save_finish(result: Gio.AsyncResult): boolean;
        /**
         * Sets the value of a metadata. It's preferable that `key` starts with a
         * namespace, to not get metadata conflicts between applications.
         *
         * This function just stores the new metadata value in the `metadata` object
         * memory.
         * @param key the name of the metadata.
         * @param value the value of the metadata, or %NULL to unset.
         */
        set(key: string, value?: string | null): void;
    }

    module FileSaver {
        // Constructor properties interface
    }

    class FileSaver extends GObject.Object {
        // Own properties of Tepl-4.FileSaver

        /**
         * The #TeplBuffer to save. The #TeplFileSaver object has a weak
         * reference to the buffer.
         */
        buffer: GtkSource.Buffer;
        /**
         * The compression type.
         */
        compression_type: GtkSource.CompressionType;
        /**
         * The compression type.
         */
        compressionType: GtkSource.CompressionType;
        /**
         * The file's encoding.
         */
        encoding: Encoding;
        /**
         * The #TeplFile. The #TeplFileSaver object has a weak
         * reference to the file.
         */
        file: File;
        /**
         * File saving flags.
         */
        flags: FileSaverFlags;
        /**
         * The #GFile where to save the buffer. By default the location is taken
         * from the #TeplFile at construction time.
         */
        location: Gio.File;
        /**
         * The newline type.
         */
        newline_type: GtkSource.NewlineType;
        /**
         * The newline type.
         */
        newlineType: GtkSource.NewlineType;

        // Own fields of Tepl-4.FileSaver

        object: GObject.Object;

        // Constructors of Tepl-4.FileSaver

        static ['new'](buffer: Buffer, file: File): FileSaver;

        static new_with_target(buffer: Buffer, file: File, target_location: Gio.File): FileSaver;

        // Owm methods of Tepl-4.FileSaver

        get_buffer(): Buffer;
        get_compression_type(): CompressionType;
        get_encoding(): Encoding;
        get_file(): File;
        get_flags(): FileSaverFlags;
        get_location(): Gio.File;
        get_newline_type(): NewlineType;
        /**
         * Saves asynchronously the buffer into the file. See the #GAsyncResult
         * documentation to know how to use this function.
         * @param io_priority the I/O priority of the request. E.g. %G_PRIORITY_LOW,   %G_PRIORITY_DEFAULT or %G_PRIORITY_HIGH.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param progress_callback function to call back with   progress information, or %NULL if progress information is not needed.
         * @param progress_callback_notify function to call on   @progress_callback_data when the @progress_callback is no longer needed, or   %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
         */
        save_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: Gio.FileProgressCallback | null,
            progress_callback_notify?: GLib.DestroyNotify | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        save_finish(result: Gio.AsyncResult): boolean;
        /**
         * Sets the compression type. By default the compression type is taken from the
         * #TeplFile.
         * @param compression_type the new compression type.
         */
        set_compression_type(compression_type: CompressionType): void;
        /**
         * Sets the encoding. If `encoding` is %NULL, the UTF-8 encoding will be set.
         * By default the encoding is taken from the #TeplFile.
         * @param encoding the new encoding, or %NULL for UTF-8.
         */
        set_encoding(encoding?: Encoding | null): void;
        set_flags(flags: FileSaverFlags): void;
        /**
         * Sets the newline type. By default the newline type is taken from the
         * #TeplFile.
         * @param newline_type the new newline type.
         */
        set_newline_type(newline_type: NewlineType): void;
    }

    module FoldRegion {
        // Constructor properties interface
    }

    class FoldRegion extends GObject.Object {
        // Own properties of Tepl-4.FoldRegion

        /**
         * The #GtkTextBuffer where the fold region is applied. The
         * #TeplFoldRegion object has a weak reference to the buffer.
         */
        buffer: Gtk.TextBuffer;
        /**
         * Whether the #TeplFoldRegion is folded or not.
         */
        folded: boolean;

        // Constructors of Tepl-4.FoldRegion

        static ['new'](buffer: Gtk.TextBuffer, start: Gtk.TextIter, end: Gtk.TextIter): FoldRegion;

        // Owm methods of Tepl-4.FoldRegion

        /**
         * Obtains iterators pointing to the start and end of the #TeplFoldRegion.
         * @returns %TRUE on success, %FALSE otherwise.
         */
        get_bounds(): boolean;
        get_buffer(): Gtk.TextBuffer | null;
        get_folded(): boolean;
        /**
         * Sets the start and end of the #TeplFoldRegion.
         * @param start a #GtkTextIter.
         * @param end a #GtkTextIter.
         */
        set_bounds(start: Gtk.TextIter, end: Gtk.TextIter): void;
        /**
         * Folds or unfolds the region.
         * @param folded the new value.
         */
        set_folded(folded: boolean): void;
    }

    module GutterRendererFolds {
        // Constructor properties interface
    }

    class GutterRendererFolds extends GtkSource.GutterRenderer {
        // Constructors of Tepl-4.GutterRendererFolds

        static ['new'](): GutterRendererFolds;

        // Owm methods of Tepl-4.GutterRendererFolds

        /**
         * Sets the folding state of the next cell to be drawn.
         *
         * This function is intended to be called from a subclass' draw method before
         * chaining-up to its parent's draw method.
         * @param state a #TeplGutterRendererFoldsState.
         */
        set_state(state: GutterRendererFoldsState): void;
    }

    module InfoBar {
        // Constructor properties interface
    }

    class InfoBar extends Gtk.InfoBar {
        // Constructors of Tepl-4.InfoBar

        static ['new'](): InfoBar;

        static new_simple(msg_type: Gtk.MessageType, primary_msg: string, secondary_msg?: string | null): InfoBar;

        // Owm methods of Tepl-4.InfoBar

        /**
         * Utility function to create a #GtkLabel suitable for a #GtkInfoBar. The
         * wrapping and alignment is configured. The label is also set as selectable,
         * for example to copy an error message and search an explanation on the web.
         */
        static create_label(): Gtk.Label;

        // Owm methods of Tepl-4.InfoBar

        /**
         * Calls gtk_info_bar_set_show_close_button(), and additionnally closes the
         * `info_bar` when the #GtkInfoBar::response signal is received with the
         * `response_id` %GTK_RESPONSE_CLOSE.
         */
        add_close_button(): void;
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
        add_content_widget(content: Gtk.Widget): void;
        /**
         * Adds an icon on the left, determined by the message type. So before calling
         * this function, gtk_info_bar_set_message_type() must have been called.
         *
         * The icon is not updated when the message type changes. Another #TeplInfoBar
         * must be created in that case.
         */
        add_icon(): void;
        /**
         * Adds a primary message.
         * @param primary_msg a primary message.
         */
        add_primary_message(primary_msg: string): void;
        /**
         * Adds a secondary message.
         * @param secondary_msg a secondary message.
         */
        add_secondary_message(secondary_msg: string): void;
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
        set_buttons_orientation(buttons_orientation: Gtk.Orientation): void;
    }

    module MetadataStore {
        // Constructor properties interface
    }

    class MetadataStore extends GObject.Object {
        // Own properties of Tepl-4.MetadataStore

        /**
         * %TRUE when the metadata has been loaded, or when there has been at
         * least an attempt to load it (i.e. when
         * tepl_metadata_store_load_finish() has been called).
         *
         * %FALSE otherwise.
         */
        readonly loaded: boolean;

        // Owm methods of Tepl-4.MetadataStore

        static get_singleton(): MetadataStore;

        // Owm methods of Tepl-4.MetadataStore

        get_metadata_for_location(location: Gio.File): Gio.FileInfo | null;
        is_loaded(): boolean;
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
        load_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the metadata loading started with tepl_metadata_store_load_async().
         *
         * Regardless of whether the operation was successful or not, calling this
         * function sets the #TeplMetadataStore:loaded property to %TRUE.
         * @param result a #GAsyncResult.
         * @returns whether the metadata was loaded successfully.
         */
        load_finish(result: Gio.AsyncResult): boolean;
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
        save(cancellable?: Gio.Cancellable | null): boolean;
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
        set_max_number_of_locations(max_number_of_locations: number): void;
        set_metadata_for_location(location: Gio.File, metadata?: Gio.FileInfo | null): void;
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
        set_store_file(store_file: Gio.File): void;
    }

    module Notebook {
        // Constructor properties interface
    }

    class Notebook extends Gtk.Notebook {
        // Constructors of Tepl-4.Notebook

        static ['new'](): Notebook;
    }

    module Tab {
        // Signal callback interfaces

        interface CloseRequest {
            (): void;
        }

        // Constructor properties interface
    }

    class Tab extends Gtk.Grid {
        // Own properties of Tepl-4.Tab

        /**
         * The #TeplView contained in the tab. When this property is set, the
         * ::pack_view virtual function is called.
         */
        view: View;

        // Constructors of Tepl-4.Tab

        static ['new'](): Tab;

        static new_with_view(view: View): Tab;

        // Owm methods of Tepl-4.Tab

        /**
         * Attaches `info_bar` to `tab`.
         *
         * This function calls the ::pack_info_bar virtual function.
         * @param info_bar a #GtkInfoBar.
         */
        add_info_bar(info_bar: Gtk.InfoBar): void;
        /**
         * A convenience function that calls gtk_text_view_get_buffer() on the
         * #TeplTab:view associated with the `tab`.
         * @returns the #TeplBuffer of the #TeplTab:view.
         */
        get_buffer(): Buffer;
        get_view(): View;
        /**
         * Unconditionally loads a file in `tab,` regardless if there are unsaved changes
         * in the #GtkTextBuffer. The previous buffer content is lost.
         *
         * This function is asynchronous, there is no way to know when the file loading
         * is finished.
         * @param location a #GFile.
         */
        load_file(location: Gio.File): void;
        /**
         * Shows a #GtkFileChooser to save the `tab` to a different location, creates an
         * appropriate #TeplFileSaver and asynchronously runs it.
         *
         * See the #GAsyncResult documentation to know how to use this function.
         * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
         */
        save_as_async(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * The same as tepl_tab_save_as_async(), but without callback.
         *
         * This function is useful when you don't need to know:
         * - when the operation is finished;
         * - and whether the operation ran successfully.
         */
        save_as_async_simple(): void;
        /**
         * Finishes a tab saving started with tepl_tab_save_as_async().
         * @param result a #GAsyncResult.
         * @returns whether the tab was saved successfully.
         */
        save_as_finish(result: Gio.AsyncResult): boolean;
        /**
         * Saves asynchronously the content of the `tab`. The #TeplFile:location must not
         * be %NULL.
         *
         * See the #GAsyncResult documentation to know how to use this function.
         * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
         */
        save_async(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * The same as tepl_tab_save_async(), but without callback.
         *
         * This function is useful when you don't need to know:
         * - when the operation is finished;
         * - and whether the operation ran successfully.
         */
        save_async_simple(): void;
        /**
         * Finishes a tab saving started with tepl_tab_save_async().
         * @param result a #GAsyncResult.
         * @returns whether the tab was saved successfully.
         */
        save_finish(result: Gio.AsyncResult): boolean;
    }

    module TabLabel {
        // Constructor properties interface
    }

    class TabLabel extends Gtk.Grid {
        // Own properties of Tepl-4.TabLabel

        /**
         * The associated #TeplTab. #TeplTabLabel has a weak reference to the
         * #TeplTab.
         */
        tab: Tab;

        // Constructors of Tepl-4.TabLabel

        static ['new'](tab: Tab): TabLabel;

        // Owm methods of Tepl-4.TabLabel

        get_tab(): Tab | null;
        /**
         * Asks #TeplTabLabel to update its tooltip. The ::get_tooltip_markup virtual
         * function is called and the result is set with
         * gtk_widget_set_tooltip_markup().
         */
        update_tooltip(): void;
    }

    module View {
        // Constructor properties interface
    }

    class View extends GtkSource.View {
        // Constructors of Tepl-4.View

        static ['new'](): View;

        // Owm methods of Tepl-4.View

        /**
         * Copies the clipboard.
         */
        copy_clipboard(): void;
        /**
         * Cuts the clipboard and then scrolls to the cursor position.
         */
        cut_clipboard(): void;
        /**
         * Deletes the text currently selected in the #GtkTextBuffer associated
         * to the view and then scrolls to the cursor position.
         */
        delete_selection(): void;
        /**
         * Places the cursor at the position returned by
         * gtk_text_buffer_get_iter_at_line(), and scrolls to that position.
         * @param line a line number, counting from 0.
         * @returns %TRUE if the cursor has been moved exactly to @line, %FALSE if that   line didn't exist.
         */
        goto_line(line: number): boolean;
        /**
         * Places the cursor at the position returned by
         * gtk_text_buffer_get_iter_at_line_offset(), and scrolls to that position.
         * @param line a line number, counting from 0.
         * @param line_offset the line offset, in characters (not bytes).
         * @returns %TRUE if the cursor has been moved exactly to @line and   @line_offset, %FALSE if that position didn't exist.
         */
        goto_line_offset(line: number, line_offset: number): boolean;
        /**
         * Pastes the clipboard and then scrolls to the cursor position.
         */
        paste_clipboard(): void;
        /**
         * Scrolls the `view` to the cursor position.
         */
        scroll_to_cursor(): void;
        /**
         * Selects all the text.
         */
        select_all(): void;
        /**
         * Selects the lines between `start_line` and `end_line` included, counting from
         * zero. And then scrolls to the cursor.
         *
         * Possible use-case: line numbers coming from a compilation output, to go to
         * the place where a warning or error occurred.
         * @param start_line start of the region to select.
         * @param end_line end of the region to select.
         */
        select_lines(start_line: number, end_line: number): void;
    }

    class AbstractFactoryClass {}

    class AbstractFactoryValaClass {}

    class ApplicationClass {
        // Own fields of Tepl-4.ApplicationClass

        padding: any[];
    }

    class ApplicationPrivate {}

    class ApplicationWindowClass {
        // Own fields of Tepl-4.ApplicationWindowClass

        padding: any[];
    }

    class ApplicationWindowPrivate {}

    class BufferClass {
        // Own fields of Tepl-4.BufferClass

        padding: any[];
    }

    class Encoding {
        // Constructors of Tepl-4.Encoding

        constructor(properties?: Partial<{}>);

        static ['new'](charset: string): Encoding;

        static new_from_locale(): Encoding;

        static new_utf8(): Encoding;

        // Owm methods of Tepl-4.Encoding

        /**
         * Gets a list of all encodings known by #TeplEncoding.
         */
        static get_all(): Encoding[];
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
         */
        static get_default_candidates(): Encoding[];

        // Owm methods of Tepl-4.Encoding

        copy(): Encoding;
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
        equals(enc2?: Encoding | null): boolean;
        free(): void;
        /**
         * Gets the character set of the #TeplEncoding, such as "UTF-8" or "ISO-8859-1".
         * @returns the character set of the #TeplEncoding.
         */
        get_charset(): string;
        /**
         * Gets the name of the #TeplEncoding such as "Unicode" or "Western". If the
         * charset is unknown by #TeplEncoding, "Unknown" is returned. The return value
         * is already translated by gettext.
         * @returns the name of the #TeplEncoding.
         */
        get_name(): string;
        /**
         * Returns whether `enc` is a UTF-8 encoding.
         *
         * If `enc` was created with tepl_encoding_new_utf8(), the charset is "UTF-8".
         * But iconv supports other variants: "UTF8", "utf-8" and "utf8". This function
         * returns %TRUE for all UTF-8 variants supported by iconv.
         * @returns whether @enc is a UTF-8 encoding.
         */
        is_utf8(): boolean;
        /**
         * Returns the encoding name with the charset in parenthesis, for example
         * "Unicode (UTF-8)". If the name is unknown, just the charset is returned. The
         * name is translated by gettext.
         * @returns a string representation. Free with g_free() when no longer needed.
         */
        to_string(): string;
    }

    class FileClass {
        // Own fields of Tepl-4.FileClass

        padding: any[];
    }

    class FileLoaderClass {
        // Own fields of Tepl-4.FileLoaderClass

        padding: any[];
    }

    class FileMetadataClass {
        // Own fields of Tepl-4.FileMetadataClass

        padding: any[];
    }

    class FileSaverClass {
        // Own fields of Tepl-4.FileSaverClass

        padding: any[];
    }

    class FileSaverPrivate {}

    class FoldRegionClass {
        // Own fields of Tepl-4.FoldRegionClass

        padding: any[];
    }

    class GutterRendererFoldsClass {
        // Own fields of Tepl-4.GutterRendererFoldsClass

        padding: any[];
    }

    class InfoBarClass {
        // Own fields of Tepl-4.InfoBarClass

        padding: any[];
    }

    class MetadataStoreClass {
        // Own fields of Tepl-4.MetadataStoreClass

        padding: any[];
    }

    class MetadataStorePrivate {}

    class NotebookClass {
        // Own fields of Tepl-4.NotebookClass

        padding: any[];
    }

    class NotebookPrivate {}

    class TabClass {}

    /**
     * The virtual function table for #TeplTabGroup. When implementing one of the
     * vfunc, you can assume that the pre-conditions are already checked (the
     * parameters are valid).
     */
    class TabGroupInterface {}

    class TabLabelClass {}

    class TabLabelPrivate {}

    class TabPrivate {}

    class ViewClass {
        // Own fields of Tepl-4.ViewClass

        padding: any[];
    }

    interface TabGroup {
        // Own properties of Tepl-4.TabGroup

        /**
         * The #TeplBuffer of the active tab.
         */
        readonly active_buffer: Buffer;
        /**
         * The #TeplBuffer of the active tab.
         */
        readonly activeBuffer: Buffer;
        /**
         * The #TeplTab currently shown.
         */
        active_tab: Tab;
        /**
         * The #TeplTab currently shown.
         */
        activeTab: Tab;
        /**
         * The #TeplView of the active tab.
         */
        readonly active_view: View;
        /**
         * The #TeplView of the active tab.
         */
        readonly activeView: View;

        // Owm methods of Tepl-4.TabGroup

        /**
         * Appends `tab` to `tab_group`.
         * @param tab a #TeplTab.
         * @param jump_to whether to set @tab as the active tab after appending it.
         */
        append_tab(tab: Tab, jump_to: boolean): void;
        /**
         * Convenience function.
         * @returns the #TeplBuffer of the active tab.
         */
        get_active_buffer(): Buffer | null;
        get_active_tab(): Tab | null;
        /**
         * Convenience function.
         * @returns the #TeplView of the active tab.
         */
        get_active_view(): View | null;
        /**
         * Convenience function.
         * @returns like tepl_tab_group_get_tabs(), but returns #TeplBuffer's.
         */
        get_buffers(): Buffer[];
        /**
         * Gets the list of #TeplTab's contained in `tab_group`.
         *
         * If `tab_group` contains non-#TeplTab children, those will not be present in the
         * returned list. In other words, it is <emphasis>not</emphasis> guaranteed that
         * the index of a #TeplTab in the returned #GList has the same child index in
         * the `tab_group` container.
         * @returns the list of all the #TeplTab's contained in @tab_group.
         */
        get_tabs(): Tab[];
        /**
         * Convenience function.
         * @returns like tepl_tab_group_get_tabs(), but returns #TeplView's.
         */
        get_views(): View[];
        /**
         * Sets the #TeplTabGroup:active-tab. `tab` must be part of `tab_group`.
         * @param tab a #TeplTab part of @tab_group.
         */
        set_active_tab(tab: Tab): void;

        // Own virtual methods of Tepl-4.TabGroup

        vfunc_append_tab_vfunc(tab: Tab): void;
        vfunc_get_active_tab(): Tab | null;
        /**
         * Gets the list of #TeplTab's contained in `tab_group`.
         *
         * If `tab_group` contains non-#TeplTab children, those will not be present in the
         * returned list. In other words, it is <emphasis>not</emphasis> guaranteed that
         * the index of a #TeplTab in the returned #GList has the same child index in
         * the `tab_group` container.
         */
        vfunc_get_tabs(): Tab[];
        /**
         * Sets the #TeplTabGroup:active-tab. `tab` must be part of `tab_group`.
         * @param tab a #TeplTab part of @tab_group.
         */
        vfunc_set_active_tab(tab: Tab): void;
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

export default Tepl;
// END
