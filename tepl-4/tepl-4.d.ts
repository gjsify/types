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
import type GtkSource from '@girs/gtksource-4';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';
import type Amtk from '@girs/amtk-5';

export namespace Tepl {
    /**
     * Tepl-4
     */

    export namespace CompressionType {
        export const $gtype: GObject.GType<CompressionType>;
    }

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
        static $gtype: GObject.GType<FileLoaderError>;

        // Static fields

        /**
         * The file is too big.
         */
        static TOO_BIG: number;
        /**
         * It is not possible to
         *   detect the encoding automatically.
         */
        static ENCODING_AUTO_DETECTION_FAILED: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * An error code used with the %TEPL_FILE_SAVER_ERROR domain.
     */
    class FileSaverError extends GLib.Error {
        static $gtype: GObject.GType<FileSaverError>;

        // Static fields

        /**
         * The buffer contains invalid
         *   characters.
         */
        static INVALID_CHARS: number;
        /**
         * The file is externally
         *   modified.
         */
        static EXTERNALLY_MODIFIED: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        static quark(): GLib.Quark;
    }

    export namespace NewlineType {
        export const $gtype: GObject.GType<NewlineType>;
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

    export namespace SelectionType {
        export const $gtype: GObject.GType<SelectionType>;
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
    function utils_decode_uri(uri: string): [boolean, string, string, string, string, string];
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

    /**
     * Flags to define the behavior of a #TeplFileSaver.
     */
    export namespace FileSaverFlags {
        export const $gtype: GObject.GType<FileSaverFlags>;
    }

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

    /**
     * The folding state at a certain line in the #GtkTextBuffer.
     *
     * Since #TeplGutterRendererFolds has a flat view of the folding tree, some
     * states can be combined; for example, %TEPL_GUTTER_RENDERER_FOLDS_STATE_END
     * and %TEPL_GUTTER_RENDERER_FOLDS_STATE_CONTINUE.
     */
    export namespace GutterRendererFoldsState {
        export const $gtype: GObject.GType<GutterRendererFoldsState>;
    }

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
    namespace AbstractFactory {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class AbstractFactory extends GObject.Object {
        static $gtype: GObject.GType<AbstractFactory>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AbstractFactory.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AbstractFactory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof AbstractFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AbstractFactory.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AbstractFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AbstractFactory.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AbstractFactory.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AbstractFactory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Gets the #TeplAbstractFactory singleton instance.
         *
         * If tepl_abstract_factory_set_singleton() has not been called, the singleton
         * is created with a #TeplAbstractFactory instance.
         */
        static get_singleton(): AbstractFactory;

        // Virtual methods

        vfunc_create_file(): File;
        /**
         * Creates a main #GtkApplicationWindow in the sense of
         * tepl_application_window_is_main_window().
         * @param app a #GtkApplication.
         */
        vfunc_create_main_window(app: Gtk.Application): Gtk.ApplicationWindow | null;
        vfunc_create_tab(): Tab;
        /**
         * Creates a new tab label for `tab,` suitable for gtk_notebook_set_tab_label().
         * @param tab a #TeplTab.
         */
        vfunc_create_tab_label(tab: Tab): Gtk.Widget | null;

        // Methods

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

    namespace AbstractFactoryVala {
        // Signal signatures
        interface SignalSignatures extends AbstractFactory.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends AbstractFactory.ConstructorProps {}
    }

    class AbstractFactoryVala extends AbstractFactory {
        static $gtype: GObject.GType<AbstractFactoryVala>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AbstractFactoryVala.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AbstractFactoryVala.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof AbstractFactoryVala.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AbstractFactoryVala.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AbstractFactoryVala.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AbstractFactoryVala.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AbstractFactoryVala.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AbstractFactoryVala.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Like tepl_abstract_factory_create_main_window(), but with a (transfer full)
         * return value.
         * @param app a #GtkApplication.
         */
        vfunc_create_main_window_vala(app: Gtk.Application): Gtk.ApplicationWindow | null;

        // Methods

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

    namespace Application {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::application': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            application: Gtk.Application;
        }
    }

    class Application extends GObject.Object {
        static $gtype: GObject.GType<Application>;

        // Properties

        /**
         * The #GtkApplication.
         */
        get application(): Gtk.Application;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Application.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Application.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Application.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Application.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Application.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Application.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Application.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Application.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

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

        // Methods

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

    namespace ApplicationWindow {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::application-window': (pspec: GObject.ParamSpec) => void;
            'notify::handle-title': (pspec: GObject.ParamSpec) => void;
            'notify::active-buffer': (pspec: GObject.ParamSpec) => void;
            'notify::active-tab': (pspec: GObject.ParamSpec) => void;
            'notify::active-view': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, TabGroup.ConstructorProps {
            application_window: Gtk.ApplicationWindow;
            applicationWindow: Gtk.ApplicationWindow;
            handle_title: boolean;
            handleTitle: boolean;
        }
    }

    class ApplicationWindow extends GObject.Object implements TabGroup {
        static $gtype: GObject.GType<ApplicationWindow>;

        // Properties

        /**
         * The #GtkApplicationWindow.
         */
        get application_window(): Gtk.ApplicationWindow;
        /**
         * The #GtkApplicationWindow.
         */
        get applicationWindow(): Gtk.ApplicationWindow;
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
        get handle_title(): boolean;
        set handle_title(val: boolean);
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
        get handleTitle(): boolean;
        set handleTitle(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ApplicationWindow.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ApplicationWindow.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof ApplicationWindow.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ApplicationWindow.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ApplicationWindow.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ApplicationWindow.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ApplicationWindow.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ApplicationWindow.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

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

        // Methods

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

        // Inherited properties
        /**
         * The #TeplBuffer of the active tab.
         */
        get active_buffer(): Buffer;
        /**
         * The #TeplBuffer of the active tab.
         */
        get activeBuffer(): Buffer;
        /**
         * The #TeplTab currently shown.
         */
        get active_tab(): Tab;
        set active_tab(val: Tab);
        /**
         * The #TeplTab currently shown.
         */
        get activeTab(): Tab;
        set activeTab(val: Tab);
        /**
         * The #TeplView of the active tab.
         */
        get active_view(): View;
        /**
         * The #TeplView of the active tab.
         */
        get activeView(): View;

        // Inherited methods
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
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Buffer {
        // Signal signatures
        interface SignalSignatures extends GtkSource.Buffer.SignalSignatures {
            'tepl-cursor-moved': () => void;
            'notify::tepl-full-title': (pspec: GObject.ParamSpec) => void;
            'notify::tepl-short-title': (pspec: GObject.ParamSpec) => void;
            'notify::tepl-style-scheme-id': (pspec: GObject.ParamSpec) => void;
            'notify::can-redo': (pspec: GObject.ParamSpec) => void;
            'notify::can-undo': (pspec: GObject.ParamSpec) => void;
            'notify::highlight-matching-brackets': (pspec: GObject.ParamSpec) => void;
            'notify::highlight-syntax': (pspec: GObject.ParamSpec) => void;
            'notify::implicit-trailing-newline': (pspec: GObject.ParamSpec) => void;
            'notify::language': (pspec: GObject.ParamSpec) => void;
            'notify::max-undo-levels': (pspec: GObject.ParamSpec) => void;
            'notify::style-scheme': (pspec: GObject.ParamSpec) => void;
            'notify::undo-manager': (pspec: GObject.ParamSpec) => void;
            'notify::copy-target-list': (pspec: GObject.ParamSpec) => void;
            'notify::cursor-position': (pspec: GObject.ParamSpec) => void;
            'notify::has-selection': (pspec: GObject.ParamSpec) => void;
            'notify::paste-target-list': (pspec: GObject.ParamSpec) => void;
            'notify::tag-table': (pspec: GObject.ParamSpec) => void;
            'notify::text': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GtkSource.Buffer.ConstructorProps {
            tepl_full_title: string;
            teplFullTitle: string;
            tepl_short_title: string;
            teplShortTitle: string;
            tepl_style_scheme_id: string;
            teplStyleSchemeId: string;
        }
    }

    class Buffer extends GtkSource.Buffer {
        static $gtype: GObject.GType<Buffer>;

        // Properties

        /**
         * The full title. See tepl_buffer_get_full_title().
         */
        get tepl_full_title(): string;
        /**
         * The full title. See tepl_buffer_get_full_title().
         */
        get teplFullTitle(): string;
        /**
         * The short title. See tepl_buffer_get_short_title().
         */
        get tepl_short_title(): string;
        /**
         * The short title. See tepl_buffer_get_short_title().
         */
        get teplShortTitle(): string;
        /**
         * The #GtkSourceBuffer:style-scheme ID, as a string. This property is
         * useful for binding it to a #GSettings key.
         *
         * When the #GtkSourceBuffer:style-scheme is %NULL,
         * #TeplBuffer:tepl-style-scheme-id contains the empty string.
         */
        get tepl_style_scheme_id(): string;
        set tepl_style_scheme_id(val: string);
        /**
         * The #GtkSourceBuffer:style-scheme ID, as a string. This property is
         * useful for binding it to a #GSettings key.
         *
         * When the #GtkSourceBuffer:style-scheme is %NULL,
         * #TeplBuffer:tepl-style-scheme-id contains the empty string.
         */
        get teplStyleSchemeId(): string;
        set teplStyleSchemeId(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Buffer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Buffer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Buffer;

        // Signals

        connect<K extends keyof Buffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Buffer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Buffer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Buffer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Buffer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Buffer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_tepl_cursor_moved(): void;

        // Methods

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

    namespace File {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::compression-type': (pspec: GObject.ParamSpec) => void;
            'notify::encoding': (pspec: GObject.ParamSpec) => void;
            'notify::location': (pspec: GObject.ParamSpec) => void;
            'notify::newline-type': (pspec: GObject.ParamSpec) => void;
            'notify::read-only': (pspec: GObject.ParamSpec) => void;
            'notify::short-name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            compression_type: CompressionType;
            compressionType: CompressionType;
            encoding: Encoding;
            location: Gio.File;
            newline_type: NewlineType;
            newlineType: NewlineType;
            read_only: boolean;
            readOnly: boolean;
            short_name: string;
            shortName: string;
        }
    }

    class File extends GObject.Object {
        static $gtype: GObject.GType<File>;

        // Properties

        /**
         * The compression type.
         */
        get compression_type(): CompressionType;
        /**
         * The compression type.
         */
        get compressionType(): CompressionType;
        /**
         * The character encoding, initially %NULL. After a successful file
         * loading or saving operation, the encoding is non-%NULL.
         */
        get encoding(): Encoding;
        /**
         * The location.
         */
        get location(): Gio.File;
        set location(val: Gio.File);
        /**
         * The line ending type.
         */
        get newline_type(): NewlineType;
        /**
         * The line ending type.
         */
        get newlineType(): NewlineType;
        /**
         * Whether the file is read-only or not. The value of this property is
         * not updated automatically (there is no file monitors).
         */
        get read_only(): boolean;
        /**
         * Whether the file is read-only or not. The value of this property is
         * not updated automatically (there is no file monitors).
         */
        get readOnly(): boolean;
        /**
         * The file short name. See tepl_file_get_short_name().
         */
        get short_name(): string;
        /**
         * The file short name. See tepl_file_get_short_name().
         */
        get shortName(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: File.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<File.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): File;

        // Signals

        connect<K extends keyof File.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, File.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof File.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, File.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof File.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<File.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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

    namespace FileLoader {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::buffer': (pspec: GObject.ParamSpec) => void;
            'notify::chunk-size': (pspec: GObject.ParamSpec) => void;
            'notify::file': (pspec: GObject.ParamSpec) => void;
            'notify::location': (pspec: GObject.ParamSpec) => void;
            'notify::max-size': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffer: Buffer;
            chunk_size: number;
            chunkSize: number;
            file: File;
            location: Gio.File;
            max_size: number;
            maxSize: number;
        }
    }

    class FileLoader extends GObject.Object {
        static $gtype: GObject.GType<FileLoader>;

        // Properties

        /**
         * The #TeplBuffer to load the content into. The #TeplFileLoader object
         * has a weak reference to the buffer.
         */
        get buffer(): Buffer;
        /**
         * The chunk size, in bytes. The content is loaded chunk by chunk. It
         * permits to avoid allocating a too big contiguous memory area, as well
         * as reporting progress information after each chunk read.
         *
         * A small chunk size is better when loading a remote file with a slow
         * connection. For local files, the chunk size can be larger.
         */
        get chunk_size(): number;
        set chunk_size(val: number);
        /**
         * The chunk size, in bytes. The content is loaded chunk by chunk. It
         * permits to avoid allocating a too big contiguous memory area, as well
         * as reporting progress information after each chunk read.
         *
         * A small chunk size is better when loading a remote file with a slow
         * connection. For local files, the chunk size can be larger.
         */
        get chunkSize(): number;
        set chunkSize(val: number);
        /**
         * The #TeplFile. The #TeplFileLoader object has a weak
         * reference to the file.
         */
        get file(): File;
        /**
         * The #GFile to load. By default the location is taken from the
         * #TeplFile at construction time.
         */
        get location(): Gio.File;
        /**
         * The maximum content size, in bytes. Keep in mind that all the
         * content is loaded in memory, and when loaded into a #GtkTextBuffer
         * it takes more memory than just the content size.
         *
         * Set to -1 for unlimited size.
         */
        get max_size(): number;
        set max_size(val: number);
        /**
         * The maximum content size, in bytes. Keep in mind that all the
         * content is loaded in memory, and when loaded into a #GtkTextBuffer
         * it takes more memory than just the content size.
         *
         * Set to -1 for unlimited size.
         */
        get maxSize(): number;
        set maxSize(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileLoader.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FileLoader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](buffer: Buffer, file: File): FileLoader;

        // Signals

        connect<K extends keyof FileLoader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileLoader.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FileLoader.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileLoader.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FileLoader.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FileLoader.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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
         */
        load_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: Gio.FileProgressCallback | null,
            progress_callback_notify?: GLib.DestroyNotify | null,
        ): globalThis.Promise<boolean>;
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
            cancellable: Gio.Cancellable | null,
            progress_callback: Gio.FileProgressCallback | null,
            progress_callback_notify: GLib.DestroyNotify | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes a file loading started with tepl_file_loader_load_async().
         * @param result a #GAsyncResult.
         * @returns whether the content has been loaded successfully.
         */
        load_finish(result: Gio.AsyncResult): boolean;
        set_chunk_size(chunk_size: number): void;
        set_max_size(max_size: number): void;
    }

    namespace FileMetadata {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::file': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            file: File;
        }
    }

    class FileMetadata extends GObject.Object {
        static $gtype: GObject.GType<FileMetadata>;

        // Properties

        /**
         * The #TeplFile that the metadata belong to.
         */
        get file(): File;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileMetadata.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FileMetadata.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](file: File): FileMetadata;

        // Signals

        connect<K extends keyof FileMetadata.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileMetadata.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FileMetadata.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileMetadata.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FileMetadata.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FileMetadata.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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
         */
        load_async(io_priority: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
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
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        ): globalThis.Promise<boolean> | void;
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
         */
        save_async(io_priority: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
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
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        ): globalThis.Promise<boolean> | void;
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
        // Conflicted with GObject.Object.set
        set(...args: never[]): any;
    }

    namespace FileSaver {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::buffer': (pspec: GObject.ParamSpec) => void;
            'notify::compression-type': (pspec: GObject.ParamSpec) => void;
            'notify::encoding': (pspec: GObject.ParamSpec) => void;
            'notify::file': (pspec: GObject.ParamSpec) => void;
            'notify::flags': (pspec: GObject.ParamSpec) => void;
            'notify::location': (pspec: GObject.ParamSpec) => void;
            'notify::newline-type': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffer: GtkSource.Buffer;
            compression_type: GtkSource.CompressionType;
            compressionType: GtkSource.CompressionType;
            encoding: Encoding;
            file: File;
            flags: FileSaverFlags;
            location: Gio.File;
            newline_type: GtkSource.NewlineType;
            newlineType: GtkSource.NewlineType;
        }
    }

    class FileSaver extends GObject.Object {
        static $gtype: GObject.GType<FileSaver>;

        // Properties

        /**
         * The #TeplBuffer to save. The #TeplFileSaver object has a weak
         * reference to the buffer.
         */
        get buffer(): GtkSource.Buffer;
        /**
         * The compression type.
         */
        get compression_type(): GtkSource.CompressionType;
        set compression_type(val: GtkSource.CompressionType);
        /**
         * The compression type.
         */
        get compressionType(): GtkSource.CompressionType;
        set compressionType(val: GtkSource.CompressionType);
        /**
         * The file's encoding.
         */
        get encoding(): Encoding;
        set encoding(val: Encoding);
        /**
         * The #TeplFile. The #TeplFileSaver object has a weak
         * reference to the file.
         */
        get file(): File;
        /**
         * File saving flags.
         */
        get flags(): FileSaverFlags;
        set flags(val: FileSaverFlags);
        /**
         * The #GFile where to save the buffer. By default the location is taken
         * from the #TeplFile at construction time.
         */
        get location(): Gio.File;
        /**
         * The newline type.
         */
        get newline_type(): GtkSource.NewlineType;
        set newline_type(val: GtkSource.NewlineType);
        /**
         * The newline type.
         */
        get newlineType(): GtkSource.NewlineType;
        set newlineType(val: GtkSource.NewlineType);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileSaver.SignalSignatures;

        // Fields

        object: GObject.Object;

        // Constructors

        constructor(properties?: Partial<FileSaver.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](buffer: Buffer, file: File): FileSaver;

        static new_with_target(buffer: Buffer, file: File, target_location: Gio.File): FileSaver;

        // Signals

        connect<K extends keyof FileSaver.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileSaver.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FileSaver.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileSaver.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FileSaver.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FileSaver.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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
         */
        save_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            progress_callback?: Gio.FileProgressCallback | null,
            progress_callback_notify?: GLib.DestroyNotify | null,
        ): globalThis.Promise<boolean>;
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
            cancellable: Gio.Cancellable | null,
            progress_callback: Gio.FileProgressCallback | null,
            progress_callback_notify: GLib.DestroyNotify | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        ): globalThis.Promise<boolean> | void;
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
        set_compression_type(compression_type: CompressionType | null): void;
        /**
         * Sets the encoding. If `encoding` is %NULL, the UTF-8 encoding will be set.
         * By default the encoding is taken from the #TeplFile.
         * @param encoding the new encoding, or %NULL for UTF-8.
         */
        set_encoding(encoding?: Encoding | null): void;
        set_flags(flags: FileSaverFlags | null): void;
        /**
         * Sets the newline type. By default the newline type is taken from the
         * #TeplFile.
         * @param newline_type the new newline type.
         */
        set_newline_type(newline_type: NewlineType | null): void;
    }

    namespace FoldRegion {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::buffer': (pspec: GObject.ParamSpec) => void;
            'notify::folded': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffer: Gtk.TextBuffer;
            folded: boolean;
        }
    }

    class FoldRegion extends GObject.Object {
        static $gtype: GObject.GType<FoldRegion>;

        // Properties

        /**
         * The #GtkTextBuffer where the fold region is applied. The
         * #TeplFoldRegion object has a weak reference to the buffer.
         */
        get buffer(): Gtk.TextBuffer;
        /**
         * Whether the #TeplFoldRegion is folded or not.
         */
        get folded(): boolean;
        set folded(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FoldRegion.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FoldRegion.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](buffer: Gtk.TextBuffer, start: Gtk.TextIter, end: Gtk.TextIter): FoldRegion;

        // Signals

        connect<K extends keyof FoldRegion.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FoldRegion.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof FoldRegion.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FoldRegion.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof FoldRegion.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FoldRegion.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Obtains iterators pointing to the start and end of the #TeplFoldRegion.
         * @returns %TRUE on success, %FALSE otherwise.
         */
        get_bounds(): [boolean, Gtk.TextIter, Gtk.TextIter];
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

    namespace GutterRendererFolds {
        // Signal signatures
        interface SignalSignatures extends GtkSource.GutterRenderer.SignalSignatures {
            'notify::alignment-mode': (pspec: GObject.ParamSpec) => void;
            'notify::background-rgba': (pspec: GObject.ParamSpec) => void;
            'notify::background-set': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::view': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::window-type': (pspec: GObject.ParamSpec) => void;
            'notify::xalign': (pspec: GObject.ParamSpec) => void;
            'notify::xpad': (pspec: GObject.ParamSpec) => void;
            'notify::yalign': (pspec: GObject.ParamSpec) => void;
            'notify::ypad': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GtkSource.GutterRenderer.ConstructorProps {}
    }

    class GutterRendererFolds extends GtkSource.GutterRenderer {
        static $gtype: GObject.GType<GutterRendererFolds>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GutterRendererFolds.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GutterRendererFolds.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): GutterRendererFolds;

        // Signals

        connect<K extends keyof GutterRendererFolds.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GutterRendererFolds.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GutterRendererFolds.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GutterRendererFolds.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GutterRendererFolds.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GutterRendererFolds.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Sets the folding state of the next cell to be drawn.
         *
         * This function is intended to be called from a subclass' draw method before
         * chaining-up to its parent's draw method.
         * @param state a #TeplGutterRendererFoldsState.
         */
        set_state(state: GutterRendererFoldsState | null): void;
    }

    namespace InfoBar {
        // Signal signatures
        interface SignalSignatures extends Gtk.InfoBar.SignalSignatures {
            'notify::message-type': (pspec: GObject.ParamSpec) => void;
            'notify::revealed': (pspec: GObject.ParamSpec) => void;
            'notify::show-close-button': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-position': (pspec: GObject.ParamSpec) => void;
            'notify::homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::spacing': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.InfoBar.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps {}
    }

    class InfoBar extends Gtk.InfoBar implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<InfoBar>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: InfoBar.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<InfoBar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): InfoBar;

        static new_simple(msg_type: Gtk.MessageType, primary_msg: string, secondary_msg?: string | null): InfoBar;

        // Signals

        connect<K extends keyof InfoBar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InfoBar.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof InfoBar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, InfoBar.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof InfoBar.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<InfoBar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Utility function to create a #GtkLabel suitable for a #GtkInfoBar. The
         * wrapping and alignment is configured. The label is also set as selectable,
         * for example to copy an error message and search an explanation on the web.
         */
        static create_label(): Gtk.Label;

        // Methods

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
        set_buttons_orientation(buttons_orientation: Gtk.Orientation | null): void;

        // Inherited methods
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace MetadataStore {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::loaded': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            loaded: boolean;
        }
    }

    class MetadataStore extends GObject.Object {
        static $gtype: GObject.GType<MetadataStore>;

        // Properties

        /**
         * %TRUE when the metadata has been loaded, or when there has been at
         * least an attempt to load it (i.e. when
         * tepl_metadata_store_load_finish() has been called).
         *
         * %FALSE otherwise.
         */
        get loaded(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MetadataStore.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MetadataStore.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof MetadataStore.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MetadataStore.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MetadataStore.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MetadataStore.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MetadataStore.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MetadataStore.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_singleton(): MetadataStore;

        // Methods

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
         */
        load_async(io_priority: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
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
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        ): globalThis.Promise<boolean> | void;
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

    namespace Notebook {
        // Signal signatures
        interface SignalSignatures extends Gtk.Notebook.SignalSignatures {
            'notify::enable-popup': (pspec: GObject.ParamSpec) => void;
            'notify::group-name': (pspec: GObject.ParamSpec) => void;
            'notify::page': (pspec: GObject.ParamSpec) => void;
            'notify::scrollable': (pspec: GObject.ParamSpec) => void;
            'notify::show-border': (pspec: GObject.ParamSpec) => void;
            'notify::show-tabs': (pspec: GObject.ParamSpec) => void;
            'notify::tab-pos': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
            'notify::active-buffer': (pspec: GObject.ParamSpec) => void;
            'notify::active-tab': (pspec: GObject.ParamSpec) => void;
            'notify::active-view': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Notebook.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                TabGroup.ConstructorProps {}
    }

    class Notebook extends Gtk.Notebook implements Atk.ImplementorIface, Gtk.Buildable, TabGroup {
        static $gtype: GObject.GType<Notebook>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Notebook.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Notebook.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Notebook;

        // Signals

        connect<K extends keyof Notebook.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Notebook.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Notebook.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Notebook.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Notebook.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Notebook.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited properties
        /**
         * The #TeplBuffer of the active tab.
         */
        get active_buffer(): Buffer;
        /**
         * The #TeplBuffer of the active tab.
         */
        get activeBuffer(): Buffer;
        /**
         * The #TeplTab currently shown.
         */
        get active_tab(): Tab;
        set active_tab(val: Tab);
        /**
         * The #TeplTab currently shown.
         */
        get activeTab(): Tab;
        set activeTab(val: Tab);
        /**
         * The #TeplView of the active tab.
         */
        get active_view(): View;
        /**
         * The #TeplView of the active tab.
         */
        get activeView(): View;

        // Inherited methods
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
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Tab {
        // Signal signatures
        interface SignalSignatures extends Gtk.Grid.SignalSignatures {
            'close-request': () => void;
            'notify::view': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-row': (pspec: GObject.ParamSpec) => void;
            'notify::column-homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::column-spacing': (pspec: GObject.ParamSpec) => void;
            'notify::row-homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::row-spacing': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
            'notify::orientation': (pspec: GObject.ParamSpec) => void;
            'notify::active-buffer': (pspec: GObject.ParamSpec) => void;
            'notify::active-tab': (pspec: GObject.ParamSpec) => void;
            'notify::active-view': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Grid.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps,
                TabGroup.ConstructorProps {
            view: View;
        }
    }

    class Tab extends Gtk.Grid implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable, TabGroup {
        static $gtype: GObject.GType<Tab>;

        // Properties

        /**
         * The #TeplView contained in the tab. When this property is set, the
         * ::pack_view virtual function is called.
         */
        get view(): View;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Tab.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Tab.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Tab;

        static new_with_view(view: View): Tab;

        // Signals

        connect<K extends keyof Tab.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Tab.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Tab.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Tab.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Tab.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Tab.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_close_request(): void;
        vfunc_pack_info_bar(info_bar: Gtk.InfoBar): void;
        vfunc_pack_view(view: View): void;

        // Methods

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
         */
        save_as_async(): globalThis.Promise<boolean>;
        /**
         * Shows a #GtkFileChooser to save the `tab` to a different location, creates an
         * appropriate #TeplFileSaver and asynchronously runs it.
         *
         * See the #GAsyncResult documentation to know how to use this function.
         * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
         */
        save_as_async(callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Shows a #GtkFileChooser to save the `tab` to a different location, creates an
         * appropriate #TeplFileSaver and asynchronously runs it.
         *
         * See the #GAsyncResult documentation to know how to use this function.
         * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
         */
        save_as_async(callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
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
         */
        save_async(): globalThis.Promise<boolean>;
        /**
         * Saves asynchronously the content of the `tab`. The #TeplFile:location must not
         * be %NULL.
         *
         * See the #GAsyncResult documentation to know how to use this function.
         * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
         */
        save_async(callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Saves asynchronously the content of the `tab`. The #TeplFile:location must not
         * be %NULL.
         *
         * See the #GAsyncResult documentation to know how to use this function.
         * @param callback a #GAsyncReadyCallback to call when the request is   satisfied.
         */
        save_async(callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;
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

        // Inherited properties
        /**
         * The orientation of the orientable.
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);
        /**
         * The #TeplBuffer of the active tab.
         */
        get active_buffer(): Buffer;
        /**
         * The #TeplBuffer of the active tab.
         */
        get activeBuffer(): Buffer;
        /**
         * The #TeplTab currently shown.
         */
        get active_tab(): Tab;
        set active_tab(val: Tab);
        /**
         * The #TeplTab currently shown.
         */
        get activeTab(): Tab;
        set activeTab(val: Tab);
        /**
         * The #TeplView of the active tab.
         */
        get active_view(): View;
        /**
         * The #TeplView of the active tab.
         */
        get activeView(): View;

        // Inherited methods
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the @orientable.
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation | null): void;
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
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace TabLabel {
        // Signal signatures
        interface SignalSignatures extends Gtk.Grid.SignalSignatures {
            'notify::tab': (pspec: GObject.ParamSpec) => void;
            'notify::baseline-row': (pspec: GObject.ParamSpec) => void;
            'notify::column-homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::column-spacing': (pspec: GObject.ParamSpec) => void;
            'notify::row-homogeneous': (pspec: GObject.ParamSpec) => void;
            'notify::row-spacing': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
            'notify::orientation': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gtk.Grid.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps {
            tab: Tab;
        }
    }

    class TabLabel extends Gtk.Grid implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<TabLabel>;

        // Properties

        /**
         * The associated #TeplTab. #TeplTabLabel has a weak reference to the
         * #TeplTab.
         */
        get tab(): Tab;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TabLabel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<TabLabel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](tab: Tab): TabLabel;
        // Conflicted with Gtk.Grid.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof TabLabel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TabLabel.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof TabLabel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, TabLabel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof TabLabel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<TabLabel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_get_tooltip_markup(): string;

        // Methods

        get_tab(): Tab | null;
        /**
         * Asks #TeplTabLabel to update its tooltip. The ::get_tooltip_markup virtual
         * function is called and the result is set with
         * gtk_widget_set_tooltip_markup().
         */
        update_tooltip(): void;

        // Inherited properties
        /**
         * The orientation of the orientable.
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);

        // Inherited methods
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the @orientable.
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation | null): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace View {
        // Signal signatures
        interface SignalSignatures extends GtkSource.View.SignalSignatures {
            'notify::auto-indent': (pspec: GObject.ParamSpec) => void;
            'notify::background-pattern': (pspec: GObject.ParamSpec) => void;
            'notify::completion': (pspec: GObject.ParamSpec) => void;
            'notify::highlight-current-line': (pspec: GObject.ParamSpec) => void;
            'notify::indent-on-tab': (pspec: GObject.ParamSpec) => void;
            'notify::indent-width': (pspec: GObject.ParamSpec) => void;
            'notify::insert-spaces-instead-of-tabs': (pspec: GObject.ParamSpec) => void;
            'notify::right-margin-position': (pspec: GObject.ParamSpec) => void;
            'notify::show-line-marks': (pspec: GObject.ParamSpec) => void;
            'notify::show-line-numbers': (pspec: GObject.ParamSpec) => void;
            'notify::show-right-margin': (pspec: GObject.ParamSpec) => void;
            'notify::smart-backspace': (pspec: GObject.ParamSpec) => void;
            'notify::smart-home-end': (pspec: GObject.ParamSpec) => void;
            'notify::space-drawer': (pspec: GObject.ParamSpec) => void;
            'notify::tab-width': (pspec: GObject.ParamSpec) => void;
            'notify::accepts-tab': (pspec: GObject.ParamSpec) => void;
            'notify::bottom-margin': (pspec: GObject.ParamSpec) => void;
            'notify::buffer': (pspec: GObject.ParamSpec) => void;
            'notify::cursor-visible': (pspec: GObject.ParamSpec) => void;
            'notify::editable': (pspec: GObject.ParamSpec) => void;
            'notify::im-module': (pspec: GObject.ParamSpec) => void;
            'notify::indent': (pspec: GObject.ParamSpec) => void;
            'notify::input-hints': (pspec: GObject.ParamSpec) => void;
            'notify::input-purpose': (pspec: GObject.ParamSpec) => void;
            'notify::justification': (pspec: GObject.ParamSpec) => void;
            'notify::left-margin': (pspec: GObject.ParamSpec) => void;
            'notify::monospace': (pspec: GObject.ParamSpec) => void;
            'notify::overwrite': (pspec: GObject.ParamSpec) => void;
            'notify::pixels-above-lines': (pspec: GObject.ParamSpec) => void;
            'notify::pixels-below-lines': (pspec: GObject.ParamSpec) => void;
            'notify::pixels-inside-wrap': (pspec: GObject.ParamSpec) => void;
            'notify::populate-all': (pspec: GObject.ParamSpec) => void;
            'notify::right-margin': (pspec: GObject.ParamSpec) => void;
            'notify::tabs': (pspec: GObject.ParamSpec) => void;
            'notify::top-margin': (pspec: GObject.ParamSpec) => void;
            'notify::wrap-mode': (pspec: GObject.ParamSpec) => void;
            'notify::border-width': (pspec: GObject.ParamSpec) => void;
            'notify::child': (pspec: GObject.ParamSpec) => void;
            'notify::resize-mode': (pspec: GObject.ParamSpec) => void;
            'notify::app-paintable': (pspec: GObject.ParamSpec) => void;
            'notify::can-default': (pspec: GObject.ParamSpec) => void;
            'notify::can-focus': (pspec: GObject.ParamSpec) => void;
            'notify::composite-child': (pspec: GObject.ParamSpec) => void;
            'notify::double-buffered': (pspec: GObject.ParamSpec) => void;
            'notify::events': (pspec: GObject.ParamSpec) => void;
            'notify::expand': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-click': (pspec: GObject.ParamSpec) => void;
            'notify::halign': (pspec: GObject.ParamSpec) => void;
            'notify::has-default': (pspec: GObject.ParamSpec) => void;
            'notify::has-focus': (pspec: GObject.ParamSpec) => void;
            'notify::has-tooltip': (pspec: GObject.ParamSpec) => void;
            'notify::height-request': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand': (pspec: GObject.ParamSpec) => void;
            'notify::hexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::is-focus': (pspec: GObject.ParamSpec) => void;
            'notify::margin': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-end': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-start': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::no-show-all': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::receives-default': (pspec: GObject.ParamSpec) => void;
            'notify::scale-factor': (pspec: GObject.ParamSpec) => void;
            'notify::sensitive': (pspec: GObject.ParamSpec) => void;
            'notify::style': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-markup': (pspec: GObject.ParamSpec) => void;
            'notify::tooltip-text': (pspec: GObject.ParamSpec) => void;
            'notify::valign': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand': (pspec: GObject.ParamSpec) => void;
            'notify::vexpand-set': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width-request': (pspec: GObject.ParamSpec) => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends GtkSource.View.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Scrollable.ConstructorProps {}
    }

    class View extends GtkSource.View implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {
        static $gtype: GObject.GType<View>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: View.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<View.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): View;

        // Signals

        connect<K extends keyof View.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, View.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof View.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, View.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof View.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<View.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

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

        // Inherited methods
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    type AbstractFactoryClass = typeof AbstractFactory;
    type AbstractFactoryValaClass = typeof AbstractFactoryVala;
    type ApplicationClass = typeof Application;
    abstract class ApplicationPrivate {
        static $gtype: GObject.GType<ApplicationPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ApplicationWindowClass = typeof ApplicationWindow;
    abstract class ApplicationWindowPrivate {
        static $gtype: GObject.GType<ApplicationWindowPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type BufferClass = typeof Buffer;
    class Encoding {
        static $gtype: GObject.GType<Encoding>;

        // Constructors

        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;

        static ['new'](charset: string): Encoding;

        static new_from_locale(): Encoding;

        static new_utf8(): Encoding;

        // Static methods

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

        // Methods

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

    type FileClass = typeof File;
    type FileLoaderClass = typeof FileLoader;
    type FileMetadataClass = typeof FileMetadata;
    type FileSaverClass = typeof FileSaver;
    abstract class FileSaverPrivate {
        static $gtype: GObject.GType<FileSaverPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type FoldRegionClass = typeof FoldRegion;
    type GutterRendererFoldsClass = typeof GutterRendererFolds;
    type InfoBarClass = typeof InfoBar;
    type MetadataStoreClass = typeof MetadataStore;
    abstract class MetadataStorePrivate {
        static $gtype: GObject.GType<MetadataStorePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type NotebookClass = typeof Notebook;
    abstract class NotebookPrivate {
        static $gtype: GObject.GType<NotebookPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type TabClass = typeof Tab;
    type TabGroupInterface = typeof TabGroup;
    type TabLabelClass = typeof TabLabel;
    abstract class TabLabelPrivate {
        static $gtype: GObject.GType<TabLabelPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class TabPrivate {
        static $gtype: GObject.GType<TabPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ViewClass = typeof View;
    namespace TabGroup {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            active_buffer: Buffer;
            activeBuffer: Buffer;
            active_tab: Tab;
            activeTab: Tab;
            active_view: View;
            activeView: View;
        }
    }

    export interface TabGroupNamespace {
        $gtype: GObject.GType<TabGroup>;
        prototype: TabGroup;
    }
    interface TabGroup extends GObject.Object {
        // Properties

        /**
         * The #TeplBuffer of the active tab.
         */
        get active_buffer(): Buffer;
        /**
         * The #TeplBuffer of the active tab.
         */
        get activeBuffer(): Buffer;
        /**
         * The #TeplTab currently shown.
         */
        get active_tab(): Tab;
        set active_tab(val: Tab);
        /**
         * The #TeplTab currently shown.
         */
        get activeTab(): Tab;
        set activeTab(val: Tab);
        /**
         * The #TeplView of the active tab.
         */
        get active_view(): View;
        /**
         * The #TeplView of the active tab.
         */
        get activeView(): View;

        // Methods

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

        // Virtual methods

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

    export const TabGroup: TabGroupNamespace & {
        new (): TabGroup; // This allows `obj instanceof TabGroup`
    };

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
