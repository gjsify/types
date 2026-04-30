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

export namespace Gedit {
    /**
     * Gedit-3.0
     */

    /**
     * @gir-type Enum
     */
    export namespace TabState {
        export const $gtype: GObject.GType<TabState>;
    }

    /**
     * @gir-type Enum
     */
    enum TabState {
        STATE_NORMAL,
        STATE_LOADING,
        STATE_REVERTING,
        STATE_SAVING,
        STATE_PRINTING,
        STATE_SHOWING_PRINT_PREVIEW,
        STATE_LOADING_ERROR,
        STATE_REVERTING_ERROR,
        STATE_SAVING_ERROR,
        STATE_GENERIC_ERROR,
        STATE_CLOSING,
        STATE_EXTERNALLY_MODIFIED_NOTIFICATION,
        NUM_OF_STATES,
    }

    /**
     * Loads `location`. Ignores non-existing locations.
     * @param window a {@link Gedit.Window}
     * @param location a {@link Gio.File} to load
     * @param encoding the {@link GtkSource.Encoding} of `location`
     * @param line_pos the line position to place the cursor
     * @param column_pos the line column to place the cursor
     */
    function commands_load_location(
        window: Window,
        location: Gio.File,
        encoding: GtkSource.Encoding | null,
        line_pos: number,
        column_pos: number,
    ): void;
    /**
     * Loads `locations`. Ignore non-existing locations.
     * @param window a {@link Gedit.Window}
     * @param locations the locations to load
     * @param encoding the {@link GtkSource.Encoding}
     * @param line_pos the line position to place the cursor
     * @param column_pos the line column to place the cursor
     * @returns the locations that were loaded.
     */
    function commands_load_locations(
        window: Window,
        locations: Gio.File[],
        encoding: GtkSource.Encoding | null,
        line_pos: number,
        column_pos: number,
    ): Document[];
    /**
     * Asynchronously save all documents belonging to `window`. The result of the
     * operation is not available, so it's difficult to know whether all the
     * documents are correctly saved.
     * @param window a {@link Gedit.Window}.
     */
    function commands_save_all_documents(window: Window): void;
    /**
     * Asynchronously save `document`. `document` must belong to `window`. If you need
     * the result of the operation, use `gedit_commands_save_document_async()`.
     * @param window a {@link Gedit.Window}.
     * @param document the {@link Gedit.Document} to save.
     */
    function commands_save_document(window: Window, document: Document): void;
    /**
     * Asynchronously save the `document`. `document` must belong to `window`. The
     * source object of the async task is `document` (which will be the first
     * parameter of the {@link Gio.AsyncReadyCallback}).
     *
     * When the operation is finished, `callback` will be called. You can then call
     * `gedit_commands_save_document_finish()` to get the result of the operation.
     * @param document the {@link Gedit.Document} to save.
     * @param window a {@link Gedit.Window}.
     * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
     * @since 3.14
     */
    function commands_save_document_async(
        document: Document,
        window: Window,
        cancellable: Gio.Cancellable | null,
    ): globalThis.Promise<boolean>;
    /**
     * Asynchronously save the `document`. `document` must belong to `window`. The
     * source object of the async task is `document` (which will be the first
     * parameter of the {@link Gio.AsyncReadyCallback}).
     *
     * When the operation is finished, `callback` will be called. You can then call
     * `gedit_commands_save_document_finish()` to get the result of the operation.
     * @param document the {@link Gedit.Document} to save.
     * @param window a {@link Gedit.Window}.
     * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
     * @param callback a {@link Gio.AsyncReadyCallback} to call when the operation   is finished.
     * @since 3.14
     */
    function commands_save_document_async(
        document: Document,
        window: Window,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<Document> | null,
    ): void;
    /**
     * Asynchronously save the `document`. `document` must belong to `window`. The
     * source object of the async task is `document` (which will be the first
     * parameter of the {@link Gio.AsyncReadyCallback}).
     *
     * When the operation is finished, `callback` will be called. You can then call
     * `gedit_commands_save_document_finish()` to get the result of the operation.
     * @param document the {@link Gedit.Document} to save.
     * @param window a {@link Gedit.Window}.
     * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
     * @param callback a {@link Gio.AsyncReadyCallback} to call when the operation   is finished.
     * @since 3.14
     */
    function commands_save_document_async(
        document: Document,
        window: Window,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<Document> | null,
    ): globalThis.Promise<boolean> | void;
    /**
     * Finishes an asynchronous document saving operation started with
     * `gedit_commands_save_document_async()`.
     *
     * Note that there is no error parameter because the errors are already handled
     * by gedit.
     * @param document a {@link Gedit.Document}.
     * @param result a {@link Gio.AsyncResult}.
     * @returns `true` if the document has been correctly saved, `false` otherwise.
     * @since 3.14
     */
    function commands_save_document_finish(document: Document, result: Gio.AsyncResult): boolean;
    /**
     * If `section` is enabled, then logs the trace information `file`, `line`, and
     * `function`.
     * @param section debug section.
     * @param file file name.
     * @param line line number.
     * @param _function name of the function that is calling `gedit_debug()`.
     */
    function debug(section: DebugSection, file: string, line: number, _function: string): void;
    /**
     * Initializes the debugging subsystem of gedit.
     *
     * The function checks for the existence of certain environment variables to
     * determine whether to enable output for a debug section. To enable output
     * for a specific debug section, set an environment variable of the same name;
     * e.g. to enable output for the {@link Gedit.DebugSection.DEBUG_PLUGINS} section, set a
     * <code>GEDIT_DEBUG_PLUGINS</code> environment variable. To enable output
     * for all debug sections, set the <code>GEDIT_DEBUG</code> environment
     * variable.
     *
     * This function must be called before any of the other debug functions are
     * called. It must only be called once.
     */
    function debug_init(): void;
    /**
     * If the section {@link Gedit.DebugSection.DEBUG_PLUGINS} is enabled, then logs the trace
     * information `file`, `line`, and `function` along with `message`.
     *
     * This function may be overridden by GObject Introspection language bindings
     * to be more language-specific.
     *
     * <emphasis>Python</emphasis>
     *
     * A PyGObject override is provided that has the following signature:
     * <informalexample>
     *   <programlisting>
     *     def debug_plugin_message(format_str, *format_args):
     *         #...
     *   </programlisting>
     * </informalexample>
     *
     * It automatically supplies parameters `file`, `line`, and `function`, and it
     * formats <code>format_str</code> with the given format arguments. The syntax
     * of the format string is the usual Python string formatting syntax described
     * by <ulink url="http://docs.python.org/library/stdtypes.html#string-formatting">5.6.2. String Formatting Operations</ulink>.
     * @param file file name.
     * @param line line number.
     * @param _function name of the function that is calling `gedit_debug_plugin_message()`.
     * @param message a message.
     * @since 3.4
     */
    function debug_plugin_message(file: string, line: number, _function: string, message: string): void;
    /**
     * @param location location for which the basename should be displayed
     * @returns the basename of a file suitable for display to users.
     */
    function utils_basename_for_display(location: Gio.File): string;
    /**
     * Create a list of valid uri's from a uri-list drop.
     * @param selection_data the {@link Gtk.SelectionData} from drag_data_received
     * @returns a string array which will hold the uris or           `null` if there were no valid uris. g_strfreev should be used when           the string array is no longer used
     */
    function utils_drop_get_uris(selection_data: Gtk.SelectionData): string[];
    /**
     * @param content_type
     */
    function utils_get_compression_type_from_content_type(content_type: string): GtkSource.CompressionType;
    /**
     * @param location
     */
    function utils_is_valid_location(location: Gio.File): boolean;
    /**
     * Returns a string suitable to be displayed in the UI indicating
     * the name of the directory where the file is located.
     * For remote files it may also contain the hostname etc.
     * For local files it tries to replace the home dir with ~.
     * @param location the location
     * @returns a string to display the dirname
     */
    function utils_location_get_dirname_for_display(location: Gio.File): string;
    /**
     * @param tree_view
     * @param rect
     */
    function utils_menu_position_under_tree_view(tree_view: Gtk.TreeView, rect: Gdk.Rectangle): boolean;
    /**
     * @param newline_type
     */
    function utils_newline_type_to_string(newline_type: GtkSource.NewlineType): string;
    /**
     * This function sets up name and description
     * for a specified gtk widget.
     * @param widget The Gtk widget for which name/description to be set
     * @param name Atk name string
     * @param description Atk description string
     */
    function utils_set_atk_name_description(widget: Gtk.Widget, name: string, description: string): void;
    /**
     * @param context
     */
    function utils_set_direct_save_filename(context: Gdk.DragContext): string;
    /**
     * @gir-type Callback
     */
    interface MessageBusForeach {
        (object_path: string, method: string): void;
    }
    /**
     * @gir-type Callback
     */
    interface MessageCallback {
        (bus: MessageBus, message: Message): void;
    }
    /**
     * @gir-type Flags
     */
    export namespace DebugSection {
        export const $gtype: GObject.GType<DebugSection>;
    }

    /**
     * Enumeration of debug sections.
     *
     * Debugging output for a section is enabled by setting an environment variable
     * of the same name. For example, setting the <code>GEDIT_DEBUG_PLUGINS</code>
     * environment variable enables all debugging output for the {@link Gedit.DebugSection.DEBUG_PLUGINS}
     * section. Setting the special environment variable <code>GEDIT_DEBUG</code>
     * enables output for all sections.
     * @gir-type Flags
     */
    enum DebugSection {
        NO_DEBUG,
        DEBUG_VIEW,
        DEBUG_PREFS,
        DEBUG_WINDOW,
        DEBUG_PANEL,
        DEBUG_PLUGINS,
        DEBUG_TAB,
        DEBUG_DOCUMENT,
        DEBUG_COMMANDS,
        DEBUG_APP,
        DEBUG_UTILS,
    }

    /**
     * @gir-type Flags
     */
    export namespace WindowState {
        export const $gtype: GObject.GType<WindowState>;
    }

    /**
     * @gir-type Flags
     */
    enum WindowState {
        NORMAL,
        SAVING,
        PRINTING,
        LOADING,
        ERROR,
    }

    namespace App {
        // Signal signatures
        interface SignalSignatures extends Gtk.Application.SignalSignatures {
            'notify::active-window': (pspec: GObject.ParamSpec) => void;
            'notify::app-menu': (pspec: GObject.ParamSpec) => void;
            'notify::menubar': (pspec: GObject.ParamSpec) => void;
            'notify::register-session': (pspec: GObject.ParamSpec) => void;
            'notify::screensaver-active': (pspec: GObject.ParamSpec) => void;
            'notify::action-group': (pspec: GObject.ParamSpec) => void;
            'notify::application-id': (pspec: GObject.ParamSpec) => void;
            'notify::flags': (pspec: GObject.ParamSpec) => void;
            'notify::inactivity-timeout': (pspec: GObject.ParamSpec) => void;
            'notify::is-busy': (pspec: GObject.ParamSpec) => void;
            'notify::is-registered': (pspec: GObject.ParamSpec) => void;
            'notify::is-remote': (pspec: GObject.ParamSpec) => void;
            'notify::resource-base-path': (pspec: GObject.ParamSpec) => void;
            'notify::version': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Application.ConstructorProps,
                Gio.ActionGroup.ConstructorProps,
                Gio.ActionMap.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class App extends Gtk.Application implements Gio.ActionGroup, Gio.ActionMap {
        static $gtype: GObject.GType<App>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: App.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<App.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof App.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, App.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof App.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, App.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof App.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<App.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param name
         * @param link_id
         * @virtual
         */
        vfunc_help_link_id(name: string, link_id: string): string;
        /**
         * @param window
         * @param event
         * @virtual
         */
        vfunc_process_window_event(window: Window, event: Gdk.Event): boolean;
        /**
         * @param window
         * @param title
         * @virtual
         */
        vfunc_set_window_title(window: Window, title: string): void;
        /**
         * @param parent
         * @param name
         * @param link_id
         * @virtual
         */
        vfunc_show_help(parent: Gtk.Window, name: string, link_id: string): boolean;

        // Methods

        /**
         * Create a new {@link Gedit.Window} part of `app`.
         * @param screen
         * @returns the new {@link Gedit.Window}
         */
        create_window(screen: Gdk.Screen | null): Window;
        /**
         * Returns all the documents currently open in {@link Gedit.App}.
         * @returns a newly allocated list of {@link Gedit.Document} objects
         */
        get_documents(): Document[];
        /**
         * Returns all `GeditWindows` currently open in {@link Gedit.App}.
         * This differs from `gtk_application_get_windows()` since it does not
         * include the preferences dialog and other auxiliary windows.
         * @returns a newly allocated list of {@link Gedit.Window} objects
         */
        get_main_windows(): Window[];
        /**
         * Returns all the views currently present in {@link Gedit.App}.
         * @returns a newly allocated list of {@link Gedit.View} objects
         */
        get_views(): View[];
        /**
         * @param window
         * @param event
         */
        process_window_event(window: Window, event: Gdk.Event): boolean;
        /**
         * @param window
         * @param title
         */
        set_window_title(window: Window, title: string): void;
        /**
         * @param parent
         * @param name
         * @param link_id
         */
        show_help(parent: Gtk.Window, name: string, link_id: string): boolean;
    }

    namespace Document {
        // Signal signatures
        interface SignalSignatures extends GtkSource.Buffer.SignalSignatures {
            /**
             * The "load" signal is emitted at the beginning of a file loading.
             *
             * Before gedit 3.14 this signal contained parameters to configure the
             * file loading (the location, encoding, etc). Plugins should not need
             * those parameters.
             * @signal
             * @run-last
             */
            load: () => void;
            /**
             * The "loaded" signal is emitted at the end of a successful file
             * loading.
             *
             * Before gedit 3.14 this signal contained a {@link GLib.Error} parameter, and the
             * signal was also emitted if an error occurred. Plugins should not need
             * the error parameter.
             * @signal
             * @run-first
             */
            loaded: () => void;
            /**
             * The "save" signal is emitted at the beginning of a file saving.
             *
             * Before gedit 3.14 this signal contained parameters to configure the
             * file saving (the location, encoding, etc). Plugins should not need
             * those parameters.
             * @signal
             * @run-last
             */
            save: () => void;
            /**
             * The "saved" signal is emitted at the end of a successful file saving.
             *
             * Before gedit 3.14 this signal contained a {@link GLib.Error} parameter, and the
             * signal was also emitted if an error occurred. To save a document, a
             * plugin can use the `gedit_commands_save_document_async()` function and
             * get the result of the operation with
             * `gedit_commands_save_document_finish()`.
             * @signal
             * @run-first
             */
            saved: () => void;
            'notify::content-type': (pspec: GObject.ParamSpec) => void;
            'notify::empty-search': (pspec: GObject.ParamSpec) => void;
            'notify::mime-type': (pspec: GObject.ParamSpec) => void;
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
            content_type: string;
            contentType: string;
            empty_search: boolean;
            emptySearch: boolean;
            mime_type: string;
            mimeType: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Document extends GtkSource.Buffer {
        static $gtype: GObject.GType<Document>;

        // Properties

        /**
         * The document's content type.
         */
        get content_type(): string;
        set content_type(val: string);
        /**
         * The document's content type.
         */
        get contentType(): string;
        set contentType(val: string);
        /**
         * <warning>
         * The property is used internally by gedit. It must not be used in a
         * gedit plugin. The property can be modified or removed at any time.
         * </warning>
         * @read-only
         */
        get empty_search(): boolean;
        /**
         * <warning>
         * The property is used internally by gedit. It must not be used in a
         * gedit plugin. The property can be modified or removed at any time.
         * </warning>
         * @read-only
         */
        get emptySearch(): boolean;
        /**
         * The document's MIME type.
         * @read-only
         */
        get mime_type(): string;
        /**
         * The document's MIME type.
         * @read-only
         */
        get mimeType(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Document.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Document.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Document;

        // Signals

        /** @signal */
        connect<K extends keyof Document.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Document.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Document.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Document.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Document.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Document.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_load(): void;
        /**
         * @virtual
         */
        vfunc_loaded(): void;
        /**
         * @virtual
         */
        vfunc_save(): void;
        /**
         * @virtual
         */
        vfunc_saved(): void;

        // Methods

        get_content_type(): string;
        /**
         * Gets the associated {@link GtkSource.File}. You should use it only for reading
         * purposes, not for creating a {@link GtkSource.FileLoader} or {@link GtkSource.FileSaver},
         * because gedit does some extra work when loading or saving a file and
         * maintains an internal state. If you use in a plugin a file loader or saver on
         * the returned {@link GtkSource.File}, the internal state of gedit won't be updated.
         *
         * If you want to save the {@link Gedit.Document} to a secondary file, you can create a
         * new {@link GtkSource.File} and use a {@link GtkSource.FileSaver}.
         * @returns the associated {@link GtkSource.File}.
         */
        get_file(): GtkSource.File;
        get_language(): GtkSource.Language;
        /**
         * @param args
         */
        // Conflicted with GtkSource.Buffer.get_language
        get_language(...args: never[]): any;
        /**
         * Gets the metadata assigned to `key`.
         * @param key name of the key
         * @returns the value assigned to `key`. Free with `g_free()`.
         */
        get_metadata(key: string): string;
        /**
         * Note: this never returns `null`.
         */
        get_mime_type(): string;
        /**
         * Gets the search context. Use this function only if you have used
         * `gedit_document_set_search_context()` before. You should not alter other search
         * contexts, so you have to verify that the returned search context is yours.
         * One way to verify that is to compare the search settings object, or to mark
         * the search context with `g_object_set_data()`.
         * @returns the current search context of the document, or NULL if there is no current search context.
         */
        get_search_context(): GtkSource.SearchContext;
        /**
         * Note: this never returns `null`.
         */
        get_short_name_for_display(): string;
        is_untitled(): boolean;
        /**
         * @param lang
         */
        set_language(lang: GtkSource.Language | null): void;
        /**
         * Sets the new search context for the document. Use this function only when the
         * search occurrences are highlighted. So this function should not be used for
         * background searches. The purpose is to have only one highlighted search
         * context at a time in the document.
         *
         * After using this function, you should unref the `search_context`. The `doc`
         * should be the only owner of the `search_context`, so that the Clear Highlight
         * action works. If you need the `search_context` after calling this function,
         * use `gedit_document_get_search_context()`.
         * @param search_context the new {@link GtkSource.SearchContext}
         */
        set_search_context(search_context: GtkSource.SearchContext | null): void;
    }

    namespace EncodingsComboBox {
        // Signal signatures
        interface SignalSignatures extends Gtk.ComboBox.SignalSignatures {
            'notify::save-mode': (pspec: GObject.ParamSpec) => void;
            'notify::active': (pspec: GObject.ParamSpec) => void;
            'notify::active-id': (pspec: GObject.ParamSpec) => void;
            'notify::add-tearoffs': (pspec: GObject.ParamSpec) => void;
            'notify::button-sensitivity': (pspec: GObject.ParamSpec) => void;
            'notify::cell-area': (pspec: GObject.ParamSpec) => void;
            'notify::column-span-column': (pspec: GObject.ParamSpec) => void;
            'notify::entry-text-column': (pspec: GObject.ParamSpec) => void;
            'notify::has-entry': (pspec: GObject.ParamSpec) => void;
            'notify::has-frame': (pspec: GObject.ParamSpec) => void;
            'notify::id-column': (pspec: GObject.ParamSpec) => void;
            'notify::model': (pspec: GObject.ParamSpec) => void;
            'notify::popup-fixed-width': (pspec: GObject.ParamSpec) => void;
            'notify::popup-shown': (pspec: GObject.ParamSpec) => void;
            'notify::row-span-column': (pspec: GObject.ParamSpec) => void;
            'notify::tearoff-title': (pspec: GObject.ParamSpec) => void;
            'notify::wrap-width': (pspec: GObject.ParamSpec) => void;
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
            'notify::editing-canceled': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.ComboBox.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.CellEditable.ConstructorProps,
                Gtk.CellLayout.ConstructorProps {
            save_mode: boolean;
            saveMode: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class EncodingsComboBox
        extends Gtk.ComboBox
        implements Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.CellLayout
    {
        static $gtype: GObject.GType<EncodingsComboBox>;

        // Properties

        /**
         * Whether the combo box should be used for saving a content. If
         * `false`, the combo box is used for loading a content (e.g. a file)
         * and the row "Automatically Detected" is added.
         */
        get save_mode(): boolean;
        set save_mode(val: boolean);
        /**
         * Whether the combo box should be used for saving a content. If
         * `false`, the combo box is used for loading a content (e.g. a file)
         * and the row "Automatically Detected" is added.
         */
        get saveMode(): boolean;
        set saveMode(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: EncodingsComboBox.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<EncodingsComboBox.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](save_mode: boolean): EncodingsComboBox;
        // Conflicted with Gtk.ComboBox.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof EncodingsComboBox.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EncodingsComboBox.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof EncodingsComboBox.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, EncodingsComboBox.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof EncodingsComboBox.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<EncodingsComboBox.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns the selected {@link GtkSource.Encoding}, or `null` if the encoding should be auto-detected (only for loading mode, not for saving).
         */
        get_selected_encoding(): GtkSource.Encoding;
        /**
         * Sets the selected encoding.
         * @param encoding the {@link GtkSource.Encoding}.
         */
        set_selected_encoding(encoding: GtkSource.Encoding): void;
        /**
         * Indicates whether editing on the cell has been canceled.
         * @since 2.20
         * @default false
         * @category Inherited from Gtk.CellEditable
         */
        get editing_canceled(): boolean;
        set editing_canceled(val: boolean);
        /**
         * Indicates whether editing on the cell has been canceled.
         * @since 2.20
         * @default false
         * @category Inherited from Gtk.CellEditable
         */
        get editingCanceled(): boolean;
        set editingCanceled(val: boolean);
        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         */
        editing_done(): void;
        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         */
        remove_widget(): void;
        /**
         * Begins editing on a `cell_editable`.
         *
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         *
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         *
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         */
        start_editing(event: Gdk.Event | null): void;
        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         * @virtual
         */
        vfunc_editing_done(): void;
        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         * @virtual
         */
        vfunc_remove_widget(): void;
        /**
         * Begins editing on a `cell_editable`.
         *
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         *
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         *
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         * @virtual
         */
        vfunc_start_editing(event: Gdk.Event | null): void;
        /**
         * Adds an attribute mapping to the list in `cell_layout`.
         *
         * The `column` is the column of the model to get a value from, and the
         * `attribute` is the parameter on `cell` to be set from the value. So for
         * example if column 2 of the model contains strings, you could have the
         * “text” attribute of a {@link Gtk.CellRendererText} get its values from column 2.
         * @param cell a {@link Gtk.CellRenderer}
         * @param attribute an attribute on the renderer
         * @param column the column position on the model to get the attribute from
         */
        add_attribute(cell: Gtk.CellRenderer, attribute: string, column: number): void;
        /**
         * Unsets all the mappings on all renderers on `cell_layout` and
         * removes all renderers from `cell_layout`.
         */
        clear(): void;
        /**
         * Clears all existing attributes previously set with
         * `gtk_cell_layout_set_attributes()`.
         * @param cell a {@link Gtk.CellRenderer} to clear the attribute mapping on
         */
        clear_attributes(cell: Gtk.CellRenderer): void;
        /**
         * Returns the underlying {@link Gtk.CellArea} which might be `cell_layout`
         * if called on a {@link Gtk.CellArea} or might be `null` if no {@link Gtk.CellArea}
         * is used by `cell_layout`.
         * @returns the cell area used by `cell_layout`, or `null` in case no cell area is used.
         */
        get_area(): Gtk.CellArea | null;
        /**
         * Returns the cell renderers which have been added to `cell_layout`.
         * @returns a list of cell renderers. The list, but not the renderers has     been newly allocated and should be freed with `g_list_free()`     when no longer needed.
         */
        get_cells(): Gtk.CellRenderer[];
        /**
         * Adds the `cell` to the end of `cell_layout`. If `expand` is `false`, then the
         * `cell` is allocated no more space than it needs. Any unused space is
         * divided evenly between cells for which `expand` is `true`.
         *
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         */
        pack_end(cell: Gtk.CellRenderer, expand: boolean): void;
        /**
         * Packs the `cell` into the beginning of `cell_layout`. If `expand` is `false`,
         * then the `cell` is allocated no more space than it needs. Any unused space
         * is divided evenly between cells for which `expand` is `true`.
         *
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         */
        pack_start(cell: Gtk.CellRenderer, expand: boolean): void;
        /**
         * Re-inserts `cell` at `position`.
         *
         * Note that `cell` has already to be packed into `cell_layout`
         * for this to function properly.
         * @param cell a {@link Gtk.CellRenderer} to reorder
         * @param position new position to insert `cell` at
         */
        reorder(cell: Gtk.CellRenderer, position: number): void;
        /**
         * Sets the {@link Gtk.CellLayoutDataFunc} to use for `cell_layout`.
         *
         * This function is used instead of the standard attributes mapping
         * for setting the column value, and should set the value of `cell_layout`’s
         * cell renderer(s) as appropriate.
         *
         * `func` may be `null` to remove a previously set function.
         * @param cell a {@link Gtk.CellRenderer}
         * @param func the {@link Gtk.CellLayoutDataFunc} to use, or `null`
         */
        set_cell_data_func(cell: Gtk.CellRenderer, func: Gtk.CellLayoutDataFunc | null): void;
        /**
         * Adds an attribute mapping to the list in `cell_layout`.
         *
         * The `column` is the column of the model to get a value from, and the
         * `attribute` is the parameter on `cell` to be set from the value. So for
         * example if column 2 of the model contains strings, you could have the
         * “text” attribute of a {@link Gtk.CellRendererText} get its values from column 2.
         * @param cell a {@link Gtk.CellRenderer}
         * @param attribute an attribute on the renderer
         * @param column the column position on the model to get the attribute from
         * @virtual
         */
        vfunc_add_attribute(cell: Gtk.CellRenderer, attribute: string, column: number): void;
        /**
         * Unsets all the mappings on all renderers on `cell_layout` and
         * removes all renderers from `cell_layout`.
         * @virtual
         */
        vfunc_clear(): void;
        /**
         * Clears all existing attributes previously set with
         * `gtk_cell_layout_set_attributes()`.
         * @param cell a {@link Gtk.CellRenderer} to clear the attribute mapping on
         * @virtual
         */
        vfunc_clear_attributes(cell: Gtk.CellRenderer): void;
        /**
         * Returns the underlying {@link Gtk.CellArea} which might be `cell_layout`
         * if called on a {@link Gtk.CellArea} or might be `null` if no {@link Gtk.CellArea}
         * is used by `cell_layout`.
         * @virtual
         */
        vfunc_get_area(): Gtk.CellArea | null;
        /**
         * Returns the cell renderers which have been added to `cell_layout`.
         * @virtual
         */
        vfunc_get_cells(): Gtk.CellRenderer[];
        /**
         * Adds the `cell` to the end of `cell_layout`. If `expand` is `false`, then the
         * `cell` is allocated no more space than it needs. Any unused space is
         * divided evenly between cells for which `expand` is `true`.
         *
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         * @virtual
         */
        vfunc_pack_end(cell: Gtk.CellRenderer, expand: boolean): void;
        /**
         * Packs the `cell` into the beginning of `cell_layout`. If `expand` is `false`,
         * then the `cell` is allocated no more space than it needs. Any unused space
         * is divided evenly between cells for which `expand` is `true`.
         *
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         * @virtual
         */
        vfunc_pack_start(cell: Gtk.CellRenderer, expand: boolean): void;
        /**
         * Re-inserts `cell` at `position`.
         *
         * Note that `cell` has already to be packed into `cell_layout`
         * for this to function properly.
         * @param cell a {@link Gtk.CellRenderer} to reorder
         * @param position new position to insert `cell` at
         * @virtual
         */
        vfunc_reorder(cell: Gtk.CellRenderer, position: number): void;
        /**
         * Sets the {@link Gtk.CellLayoutDataFunc} to use for `cell_layout`.
         *
         * This function is used instead of the standard attributes mapping
         * for setting the column value, and should set the value of `cell_layout`’s
         * cell renderer(s) as appropriate.
         *
         * `func` may be `null` to remove a previously set function.
         * @param cell a {@link Gtk.CellRenderer}
         * @param func the {@link Gtk.CellLayoutDataFunc} to use, or `null`
         * @virtual
         */
        vfunc_set_cell_data_func(cell: Gtk.CellRenderer, func: Gtk.CellLayoutDataFunc | null): void;
        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         *
         * This is the analogue of `g_object_notify()` for child properties.
         *
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;
        /**
         * @param args
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;
        /**
         * Returns whether the widget should grab focus when it is clicked with the mouse.
         * See `gtk_widget_set_focus_on_click()`.
         * @returns `true` if the widget should grab focus when it is clicked with               the mouse.
         */
        get_focus_on_click(): boolean;
        /**
         * Sets whether the widget should grab focus when it is clicked with the mouse.
         * Making mouse clicks not grab focus is useful in places like toolbars where
         * you don’t want the keyboard focus removed from the main area of the
         * application.
         * @param focus_on_click whether the widget should grab focus when clicked with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
    }

    namespace MenuExtension {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::menu': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            menu: Gio.Menu;
        }
    }

    /**
     * @gir-type Class
     */
    class MenuExtension extends GObject.Object {
        static $gtype: GObject.GType<MenuExtension>;

        // Properties

        /**
         * @construct-only
         */
        get menu(): Gio.Menu;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MenuExtension.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MenuExtension.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](menu: Gio.Menu): MenuExtension;

        // Signals

        /** @signal */
        connect<K extends keyof MenuExtension.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MenuExtension.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MenuExtension.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MenuExtension.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MenuExtension.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MenuExtension.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param item
         */
        append_menu_item(item: Gio.MenuItem): void;
        /**
         * @param item
         */
        prepend_menu_item(item: Gio.MenuItem): void;
        remove_items(): void;
    }

    namespace Message {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::method': (pspec: GObject.ParamSpec) => void;
            'notify::object-path': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            method: string;
            object_path: string;
            objectPath: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Message extends GObject.Object {
        static $gtype: GObject.GType<Message>;

        // Properties

        /**
         * The messages method.
         */
        get method(): string;
        set method(val: string);
        get object_path(): string;
        set object_path(val: string);
        get objectPath(): string;
        set objectPath(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Message.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Message.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Message.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Message.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Message.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Message.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Message.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Message.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Returns whether `object_path` is a valid object path
         * @param object_path the object path
         */
        static is_valid_object_path(object_path: string | null): boolean;
        /**
         * @param gtype
         * @param propname
         * @param value_type
         */
        static type_check(gtype: GObject.GType, propname: string, value_type: GObject.GType): boolean;
        /**
         * @param gtype
         * @param propname
         */
        static type_has(gtype: GObject.GType, propname: string): boolean;
        /**
         * Get the string identifier for `method` at `object_path`.
         * @param object_path the object path
         * @param method the method
         */
        static type_identifier(object_path: string | null, method: string | null): string;

        // Methods

        /**
         * Get the message method.
         * @returns the message method
         */
        get_method(): string;
        /**
         * Get the message object path.
         * @returns the message object path
         */
        get_object_path(): string;
        /**
         * Check if a message has a certain property.
         * @param propname the property name
         * @returns `true` if message has `propname`, `false` otherwise
         */
        has(propname: string): boolean;
    }

    namespace MessageBus {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The "dispatch" signal is emitted when a message is to be dispatched.
             * The message is dispatched in the default handler of this signal.
             * Primary use of this signal is to customize the dispatch of a message
             * (for instance to automatically dispatch all messages over DBus).
             * @signal
             * @run-last
             */
            dispatch: (arg0: Message) => void;
            /**
             * The "registered" signal is emitted when a message has been registered
             * on the bus.
             * @signal
             * @run-last
             */
            registered: (arg0: string, arg1: string) => void;
            /**
             * The "unregistered" signal is emitted when a message has been
             * unregistered from the bus.
             * @signal
             * @run-last
             */
            unregistered: (arg0: string, arg1: string) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class MessageBus extends GObject.Object {
        static $gtype: GObject.GType<MessageBus>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MessageBus.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MessageBus.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MessageBus;

        // Signals

        /** @signal */
        connect<K extends keyof MessageBus.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MessageBus.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MessageBus.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MessageBus.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MessageBus.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MessageBus.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Get the default application {@link Gedit.MessageBus}.
         */
        static get_default(): MessageBus;

        // Virtual methods

        /**
         * @param message
         * @virtual
         */
        vfunc_dispatch(message: Message): void;
        /**
         * @param object_path
         * @param method
         * @virtual
         */
        vfunc_registered(object_path: string, method: string): void;
        /**
         * @param object_path
         * @param method
         * @virtual
         */
        vfunc_unregistered(object_path: string, method: string): void;

        // Methods

        /**
         * Blocks evoking the callback specified by `id`. Unblock the callback by
         * using `gedit_message_bus_unblock()`.
         * @param id the callback id
         */
        block(id: number): void;
        /**
         * Blocks evoking the callback that matches provided `callback` and `user_data`.
         * Unblock the callback using `gedit_message_bus_unblock_by_func()`.
         * @param object_path the object path
         * @param method the method
         * @param callback the callback to block
         */
        block_by_func(object_path: string, method: string, callback: MessageCallback): void;
        /**
         * Connect a callback handler to be evoked when message `method` at `object_path`
         * is sent over the bus.
         * @param object_path the object path
         * @param method the method
         * @param callback function to be called when message `method` at `object_path` is sent
         * @param destroy_data function to evoke with `user_data` as argument when `user_data`                needs to be freed
         * @returns the callback identifier
         */
        connect(
            object_path: string,
            method: string,
            callback: MessageCallback,
            destroy_data: GLib.DestroyNotify | null,
        ): number;
        /**
         * @param args
         */
        connect(...args: never[]): any;
        /**
         * Disconnects a previously connected message callback.
         * @param id the callback id as returned by `gedit_message_bus_connect()`
         */
        disconnect(id: number): void;
        /**
         * Disconnects a previously connected message callback by matching the
         * provided callback function and user_data. See also
         * `gedit_message_bus_disconnect()`.
         * @param object_path the object path
         * @param method the method
         * @param callback the connected callback
         */
        disconnect_by_func(object_path: string, method: string, callback: MessageCallback): void;
        /**
         * Calls `func` for each message type registered on the bus
         * @param func the callback function
         */
        foreach(func: MessageBusForeach): void;
        /**
         * Check whether a message type `method` at `object_path` is registered on the
         * bus.
         * @param object_path the object path
         * @param method the method
         * @returns `true` if the `method` at `object_path` is a registered message               type on the bus
         */
        is_registered(object_path: string, method: string): boolean;
        /**
         * Get the registered `GeditMessageType` for `method` at `object_path`. The
         * returned `GeditMessageType` is owned by the bus and should not be unreffed.
         * @param object_path the object path
         * @param method the method
         * @returns the registered `GeditMessageType` or `null` if no message type               is registered for `method` at `object_path`
         */
        lookup(object_path: string, method: string): GObject.GType;
        /**
         * Register a message on the bus. A message must be registered on the bus before
         * it can be send. This function registers the type for `method` at
         * `object_path`.
         *
         * This function emits a {@link Gedit.MessageBus.SignalSignatures.registered | Gedit.MessageBus::registered} signal.
         * @param message_type the message type
         * @param object_path the object path
         * @param method the method to register
         */
        register(message_type: GObject.GType, object_path: string, method: string): void;
        /**
         * This sends the provided `message` asynchronously over the bus. To send
         * a message synchronously, use `gedit_message_bus_send_message_sync()`. The
         * convenience function `gedit_message_bus_send()` can be used to easily send
         * a message without constructing the message object explicitly first.
         * @param message the message to send
         */
        send_message(message: Message): void;
        /**
         * This sends the provided `message` synchronously over the bus. To send
         * a message asynchronously, use `gedit_message_bus_send_message()`. The
         * convenience function `gedit_message_bus_send_sync()` can be used to easily send
         * a message without constructing the message object explicitly first.
         * @param message the message to send
         */
        send_message_sync(message: Message): void;
        /**
         * Unblocks the callback specified by `id`.
         * @param id the callback id
         */
        unblock(id: number): void;
        /**
         * Unblocks the callback that matches provided `callback` and `user_data`.
         * @param object_path the object path
         * @param method the method
         * @param callback the callback to block
         */
        unblock_by_func(object_path: string, method: string, callback: MessageCallback): void;
        /**
         * Unregisters a previously registered message type. This is especially useful
         * for plugins which should unregister message types when they are deactivated.
         *
         * This function emits the {@link Gedit.MessageBus.SignalSignatures.unregistered | Gedit.MessageBus::unregistered} signal.
         * @param object_path the object path
         * @param method the method
         */
        unregister(object_path: string, method: string): void;
        /**
         * Unregisters all message types for `object_path`. This is especially useful for
         * plugins which should unregister message types when they are deactivated.
         *
         * This function emits the {@link Gedit.MessageBus.SignalSignatures.unregistered | Gedit.MessageBus::unregistered} signal for all
         * unregistered message types.
         * @param object_path the object path
         */
        unregister_all(object_path: string): void;
    }

    namespace Statusbar {
        // Signal signatures
        interface SignalSignatures extends Gtk.Statusbar.SignalSignatures {
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
            extends
                Gtk.Statusbar.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Statusbar extends Gtk.Statusbar implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<Statusbar>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Statusbar.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Statusbar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Statusbar;

        // Signals

        /** @signal */
        connect<K extends keyof Statusbar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Statusbar.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Statusbar.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Statusbar.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Statusbar.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Statusbar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        clear_overwrite(): void;
        /**
         * Sets the overwrite mode on the statusbar.
         * @param overwrite if the overwrite mode is set
         */
        set_overwrite(overwrite: boolean): void;
        /**
         * @param state
         * @param num_of_errors
         */
        set_window_state(state: WindowState, num_of_errors: number): void;
    }

    namespace Tab {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            /**
             * @signal
             * @action
             * @run-last
             */
            'drop-uris': (arg0: string[]) => void;
            'notify::autosave': (pspec: GObject.ParamSpec) => void;
            'notify::autosave-interval': (pspec: GObject.ParamSpec) => void;
            'notify::can-close': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::state': (pspec: GObject.ParamSpec) => void;
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
            extends
                Gtk.Box.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps {
            autosave: boolean;
            autosave_interval: number;
            autosaveInterval: number;
            can_close: boolean;
            canClose: boolean;
            name: string;
            state: TabState;
        }
    }

    /**
     * @gir-type Class
     */
    class Tab extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<Tab>;

        // Properties

        get autosave(): boolean;
        set autosave(val: boolean);
        get autosave_interval(): number;
        set autosave_interval(val: number);
        get autosaveInterval(): number;
        set autosaveInterval(val: number);
        /**
         * @read-only
         */
        get can_close(): boolean;
        /**
         * @read-only
         */
        get canClose(): boolean;
        /**
         * @read-only
         */
        get name(): string;
        /**
         * @read-only
         */
        get state(): TabState;

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

        // Signals

        /** @signal */
        connect<K extends keyof Tab.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Tab.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Tab.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Tab.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Tab.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Tab.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Gets the {@link Gedit.Tab} associated with `doc`.
         * @param doc a {@link Gedit.Document}
         */
        static get_from_document(doc: Document): Tab;

        // Methods

        /**
         * Gets the current state for the autosave feature
         * @returns `true` if the autosave is enabled, else `false`
         */
        get_auto_save_enabled(): boolean;
        /**
         * Gets the current interval for the autosaves
         * @returns the value of the autosave
         */
        get_auto_save_interval(): number;
        /**
         * Gets the {@link Gedit.Document} associated to `tab`.
         * @returns the {@link Gedit.Document} associated to `tab`
         */
        get_document(): Document;
        /**
         * Gets the {@link Gedit.TabState} of `tab`.
         * @returns the {@link Gedit.TabState} of `tab`
         */
        get_state(): TabState;
        /**
         * @param args
         */
        // Conflicted with Gtk.Widget.get_state
        get_state(...args: never[]): any;
        /**
         * Gets the {@link Gedit.View} inside `tab`.
         * @returns the {@link Gedit.View} inside `tab`
         */
        get_view(): View;
        /**
         * Enables or disables the autosave feature. It does not install an
         * autosave timeout if the document is new or is read-only
         * @param enable enable (`true`) or disable (`false`) auto save
         */
        set_auto_save_enabled(enable: boolean): void;
        /**
         * Sets the interval for the autosave feature.
         * @param interval the new interval
         */
        set_auto_save_interval(interval: number): void;
        /**
         * @param info_bar
         */
        set_info_bar(info_bar: Gtk.Widget): void;
        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
         * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);
        /**
         * Retrieves the orientation of the `orientable`.
         * @returns the orientation of the `orientable`.
         */
        get_orientation(): Gtk.Orientation;
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }

    namespace View {
        // Signal signatures
        interface SignalSignatures extends GtkSource.View.SignalSignatures {
            /**
             * The {@link Gedit.View.SignalSignatures.drop_uris | Gedit.View::drop-uris} signal allows plugins to intercept the
             * default drag-and-drop behaviour of 'text/uri-list'. {@link Gedit.View}
             * handles drag-and-drop in the default handlers of
             * {@link Gtk.Widget.SignalSignatures.drag_drop | Gtk.Widget::drag-drop}, {@link Gtk.Widget.SignalSignatures.drag_motion | Gtk.Widget::drag-motion} and
             * {@link Gtk.Widget.SignalSignatures.drag_data_received | Gtk.Widget::drag-data-received}. The view emits the
             * {@link Gedit.View.SignalSignatures.drop_uris | Gedit.View::drop-uris} signal from {@link Gtk.Widget.SignalSignatures.drag_data_received | Gtk.Widget::drag-data-received} if
             * valid URIs have been dropped.  Plugins should connect to
             * {@link Gtk.Widget.SignalSignatures.drag_motion | Gtk.Widget::drag-motion}, {@link Gtk.Widget.SignalSignatures.drag_drop | Gtk.Widget::drag-drop} and
             * {@link Gtk.Widget.SignalSignatures.drag_data_received | Gtk.Widget::drag-data-received} to change this default behaviour. They
             * should NOT use this signal because this will not prevent gedit from
             * loading the URI.
             * @signal
             * @action
             * @run-last
             */
            'drop-uris': (arg0: string[]) => void;
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
            extends
                GtkSource.View.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Scrollable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
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

        static ['new'](doc: Document): View;
        // Conflicted with GtkSource.View.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof View.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, View.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof View.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, View.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof View.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<View.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param uri_list
         * @virtual
         */
        vfunc_drop_uris(uri_list: string): void;
    }

    namespace Window {
        // Signal signatures
        interface SignalSignatures extends Gtk.ApplicationWindow.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            'active-tab-changed': (arg0: Tab) => void;
            /**
             * @signal
             * @run-first
             */
            'active-tab-state-changed': () => void;
            /**
             * @signal
             * @run-first
             */
            'tab-added': (arg0: Tab) => void;
            /**
             * @signal
             * @run-first
             */
            'tab-removed': (arg0: Tab) => void;
            /**
             * @signal
             * @run-first
             */
            'tabs-reordered': () => void;
            'notify::state': (pspec: GObject.ParamSpec) => void;
            'notify::show-menubar': (pspec: GObject.ParamSpec) => void;
            'notify::accept-focus': (pspec: GObject.ParamSpec) => void;
            'notify::application': (pspec: GObject.ParamSpec) => void;
            'notify::attached-to': (pspec: GObject.ParamSpec) => void;
            'notify::decorated': (pspec: GObject.ParamSpec) => void;
            'notify::default-height': (pspec: GObject.ParamSpec) => void;
            'notify::default-width': (pspec: GObject.ParamSpec) => void;
            'notify::deletable': (pspec: GObject.ParamSpec) => void;
            'notify::destroy-with-parent': (pspec: GObject.ParamSpec) => void;
            'notify::focus-on-map': (pspec: GObject.ParamSpec) => void;
            'notify::focus-visible': (pspec: GObject.ParamSpec) => void;
            'notify::gravity': (pspec: GObject.ParamSpec) => void;
            'notify::has-resize-grip': (pspec: GObject.ParamSpec) => void;
            'notify::has-toplevel-focus': (pspec: GObject.ParamSpec) => void;
            'notify::hide-titlebar-when-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::is-active': (pspec: GObject.ParamSpec) => void;
            'notify::is-maximized': (pspec: GObject.ParamSpec) => void;
            'notify::mnemonics-visible': (pspec: GObject.ParamSpec) => void;
            'notify::modal': (pspec: GObject.ParamSpec) => void;
            'notify::resizable': (pspec: GObject.ParamSpec) => void;
            'notify::resize-grip-visible': (pspec: GObject.ParamSpec) => void;
            'notify::role': (pspec: GObject.ParamSpec) => void;
            'notify::screen': (pspec: GObject.ParamSpec) => void;
            'notify::skip-pager-hint': (pspec: GObject.ParamSpec) => void;
            'notify::skip-taskbar-hint': (pspec: GObject.ParamSpec) => void;
            'notify::startup-id': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::transient-for': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::type-hint': (pspec: GObject.ParamSpec) => void;
            'notify::urgency-hint': (pspec: GObject.ParamSpec) => void;
            'notify::window-position': (pspec: GObject.ParamSpec) => void;
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
            extends
                Gtk.ApplicationWindow.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gio.ActionGroup.ConstructorProps,
                Gio.ActionMap.ConstructorProps,
                Gtk.Buildable.ConstructorProps {
            state: WindowState;
        }
    }

    /**
     * @gir-type Class
     */
    class Window
        extends Gtk.ApplicationWindow
        implements Atk.ImplementorIface, Gio.ActionGroup, Gio.ActionMap, Gtk.Buildable
    {
        static $gtype: GObject.GType<Window>;

        // Properties

        /**
         * @read-only
         */
        get state(): WindowState;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Window.SignalSignatures;

        // Fields

        // @ts-expect-error This property conflicts with an accessor in a parent class or interface.
        window: Gtk.ApplicationWindow;

        // Constructors

        constructor(properties?: Partial<Window.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Window.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Window.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Window.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Window.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Window.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Window.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param tab
         * @virtual
         */
        vfunc_active_tab_changed(tab: Tab): void;
        /**
         * @virtual
         */
        vfunc_active_tab_state_changed(): void;
        /**
         * @param tab
         * @virtual
         */
        vfunc_tab_added(tab: Tab): void;
        /**
         * @param tab
         * @virtual
         */
        vfunc_tab_removed(tab: Tab): void;
        /**
         * @virtual
         */
        vfunc_tabs_reordered(): void;

        // Methods

        /**
         * Closes all opened tabs.
         */
        close_all_tabs(): void;
        /**
         * Closes the `tab`.
         * @param tab the {@link Gedit.Tab} to close
         */
        close_tab(tab: Tab): void;
        /**
         * Closes all tabs specified by `tabs`.
         * @param tabs a list of {@link Gedit.Tab}
         */
        close_tabs(tabs: Tab[]): void;
        /**
         * Creates a new {@link Gedit.Tab} and adds the new tab to the {@link Gtk.Notebook}.
         * In case `jump_to` is `true` the {@link Gtk.Notebook} switches to that new {@link Gedit.Tab}.
         * @param jump_to `true` to set the new {@link Gedit.Tab} as active
         * @returns a new {@link Gedit.Tab}
         */
        create_tab(jump_to: boolean): Tab;
        /**
         * Creates a new {@link Gedit.Tab} loading the document specified by `uri`.
         * In case `jump_to` is `true` the {@link Gtk.Notebook} swithes to that new {@link Gedit.Tab}.
         * Whether `create` is `true`, creates a new empty document if location does
         * not refer to an existing file
         * @param location the location of the document
         * @param encoding a {@link GtkSource.Encoding}, or `null`
         * @param line_pos the line position to visualize
         * @param column_pos the column position to visualize
         * @param create `true` to create a new document in case `uri` does exist
         * @param jump_to `true` to set the new {@link Gedit.Tab} as active
         * @returns a new {@link Gedit.Tab}
         */
        create_tab_from_location(
            location: Gio.File,
            encoding: GtkSource.Encoding | null,
            line_pos: number,
            column_pos: number,
            create: boolean,
            jump_to: boolean,
        ): Tab;
        /**
         * @param stream a {@link Gio.InputStream}
         * @param encoding a {@link GtkSource.Encoding}, or `null`
         * @param line_pos the line position to visualize
         * @param column_pos the column position to visualize
         * @param jump_to `true` to set the new {@link Gedit.Tab} as active
         * @returns a new {@link Gedit.Tab}
         */
        create_tab_from_stream(
            stream: Gio.InputStream,
            encoding: GtkSource.Encoding | null,
            line_pos: number,
            column_pos: number,
            jump_to: boolean,
        ): Tab;
        /**
         * Gets the active {@link Gedit.Document}.
         * @returns the active {@link Gedit.Document}
         */
        get_active_document(): Document;
        /**
         * Gets the active {@link Gedit.Tab} in the `window`.
         * @returns the active {@link Gedit.Tab} in the `window`.
         */
        get_active_tab(): Tab;
        /**
         * Gets the active {@link Gedit.View}.
         * @returns the active {@link Gedit.View}
         */
        get_active_view(): View;
        /**
         * Gets the bottom panel of the `window`.
         * @returns the bottom panel's {@link Gtk.Stack}.
         */
        get_bottom_panel(): Gtk.Widget;
        /**
         * Gets a newly allocated list with all the documents in the window.
         * This list must be freed.
         * @returns a newly allocated list with all the documents in the window
         */
        get_documents(): Document[];
        /**
         * Gets the {@link Gtk.WindowGroup} in which `window` resides.
         * @returns the {@link Gtk.WindowGroup}
         */
        get_group(): Gtk.WindowGroup;
        /**
         * Gets the {@link Gedit.MessageBus} associated with `window`. The returned reference
         * is owned by the window and should not be unreffed.
         * @returns the {@link Gedit.MessageBus} associated with `window`
         */
        get_message_bus(): MessageBus;
        /**
         * Gets the side panel of the `window`.
         * @returns the side panel's {@link Gtk.Stack}.
         */
        get_side_panel(): Gtk.Widget;
        /**
         * Retrieves the state of the `window`.
         * @returns the current {@link Gedit.WindowState} of the `window`.
         */
        get_state(): WindowState;
        /**
         * @param args
         */
        // Conflicted with Gtk.Widget.get_state
        get_state(...args: never[]): any;
        /**
         * Gets the {@link Gedit.Statusbar} of the `window`.
         * @returns the {@link Gedit.Statusbar} of the `window`.
         */
        get_statusbar(): Gtk.Widget;
        /**
         * Gets the {@link Gedit.Tab} that matches with the given `location`.
         * @param location a {@link Gio.File}
         * @returns the {@link Gedit.Tab} that matches with the given `location`.
         */
        get_tab_from_location(location: Gio.File): Tab;
        /**
         * Gets the list of documents that need to be saved before closing the window.
         * @returns a list of {@link Gedit.Document} that need to be saved before closing the window
         */
        get_unsaved_documents(): Document[];
        /**
         * Gets a list with all the views in the window. This list must be freed.
         * @returns a newly allocated list with all the views in the window
         */
        get_views(): View[];
        /**
         * Switches to the tab that matches with `tab`.
         * @param tab a {@link Gedit.Tab}
         */
        set_active_tab(tab: Tab): void;
        /**
         * Emits the `Gio.ActionGroup::action-added` signal on `action_group`.
         *
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         */
        action_added(action_name: string): void;
        /**
         * Emits the `Gio.ActionGroup::action-enabled-changed` signal on `action_group`.
         *
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @param enabled whether the action is now enabled
         */
        action_enabled_changed(action_name: string, enabled: boolean): void;
        /**
         * Emits the `Gio.ActionGroup::action-removed` signal on `action_group`.
         *
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         */
        action_removed(action_name: string): void;
        /**
         * Emits the `Gio.ActionGroup::action-state-changed` signal on `action_group`.
         *
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @param state the new state of the named action
         */
        action_state_changed(action_name: string, state: GLib.Variant): void;
        /**
         * Activate the named action within `action_group`.
         *
         * If the action is expecting a parameter, then the correct type of
         * parameter must be given as `parameter`.  If the action is expecting no
         * parameters then `parameter` must be `NULL`.  See
         * {@link Gio.ActionGroup.get_action_parameter_type}.
         *
         * If the {@link Gio.ActionGroup} implementation supports asynchronous remote
         * activation over D-Bus, this call may return before the relevant
         * D-Bus traffic has been sent, or any replies have been received. In
         * order to block on such asynchronous activation calls,
         * {@link Gio.DBusConnection.flush} should be called prior to the code, which
         * depends on the result of the action activation. Without flushing
         * the D-Bus connection, there is no guarantee that the action would
         * have been activated.
         *
         * The following code which runs in a remote app instance, shows an
         * example of a ‘quit’ action being activated on the primary app
         * instance over D-Bus. Here {@link Gio.DBusConnection.flush} is called
         * before `exit()`. Without `g_dbus_connection_flush()`, the ‘quit’ action
         * may fail to be activated on the primary instance.
         *
         * ```c
         * // call ‘quit’ action on primary instance
         * g_action_group_activate_action (G_ACTION_GROUP (app), "quit", NULL);
         *
         * // make sure the action is activated now
         * g_dbus_connection_flush (…);
         *
         * g_debug ("Application has been terminated. Exiting.");
         *
         * exit (0);
         * ```
         * @param action_name the name of the action to activate
         * @param parameter parameters to the activation
         */
        activate_action(action_name: string, parameter: GLib.Variant | null): void;
        /**
         * Request for the state of the named action within `action_group` to be
         * changed to `value`.
         *
         * The action must be stateful and `value` must be of the correct type.
         * See {@link Gio.ActionGroup.get_action_state_type}.
         *
         * This call merely requests a change.  The action may refuse to change
         * its state or may change its state to something other than `value`.
         * See {@link Gio.ActionGroup.get_action_state_hint}.
         *
         * If the `value` GVariant is floating, it is consumed.
         * @param action_name the name of the action to request the change on
         * @param value the new state
         */
        change_action_state(action_name: string, value: GLib.Variant): void;
        /**
         * Checks if the named action within `action_group` is currently enabled.
         *
         * An action must be enabled in order to be activated or in order to
         * have its state changed from outside callers.
         * @param action_name the name of the action to query
         * @returns whether the action is currently enabled
         */
        get_action_enabled(action_name: string): boolean;
        /**
         * Queries the type of the parameter that must be given when activating
         * the named action within `action_group`.
         *
         * When activating the action using {@link Gio.ActionGroup.activate_action},
         * the {@link GLib.Variant} given to that function must be of the type returned
         * by this function.
         *
         * In the case that this function returns `NULL`, you must not give any
         * {@link GLib.Variant}, but `NULL` instead.
         *
         * The parameter type of a particular action will never change but it is
         * possible for an action to be removed and for a new action to be added
         * with the same name but a different parameter type.
         * @param action_name the name of the action to query
         * @returns the parameter type
         */
        get_action_parameter_type(action_name: string): GLib.VariantType | null;
        /**
         * Queries the current state of the named action within `action_group`.
         *
         * If the action is not stateful then `NULL` will be returned.  If the
         * action is stateful then the type of the return value is the type
         * given by {@link Gio.ActionGroup.get_action_state_type}.
         *
         * The return value (if non-`NULL`) should be freed with
         * {@link GLib.Variant.unref} when it is no longer required.
         * @param action_name the name of the action to query
         * @returns the current state of the action
         */
        get_action_state(action_name: string): GLib.Variant | null;
        /**
         * Requests a hint about the valid range of values for the state of the
         * named action within `action_group`.
         *
         * If `NULL` is returned it either means that the action is not stateful
         * or that there is no hint about the valid range of values for the
         * state of the action.
         *
         * If a {@link GLib.Variant} array is returned then each item in the array is a
         * possible value for the state.  If a {@link GLib.Variant} pair (ie: two-tuple) is
         * returned then the tuple specifies the inclusive lower and upper bound
         * of valid values for the state.
         *
         * In any case, the information is merely a hint.  It may be possible to
         * have a state value outside of the hinted range and setting a value
         * within the range may fail.
         *
         * The return value (if non-`NULL`) should be freed with
         * {@link GLib.Variant.unref} when it is no longer required.
         * @param action_name the name of the action to query
         * @returns the state range hint
         */
        get_action_state_hint(action_name: string): GLib.Variant | null;
        /**
         * Queries the type of the state of the named action within
         * `action_group`.
         *
         * If the action is stateful then this function returns the
         * {@link GLib.VariantType} of the state.  All calls to
         * {@link Gio.ActionGroup.change_action_state} must give a {@link GLib.Variant} of this
         * type and {@link Gio.ActionGroup.get_action_state} will return a {@link GLib.Variant}
         * of the same type.
         *
         * If the action is not stateful then this function will return `NULL`.
         * In that case, {@link Gio.ActionGroup.get_action_state} will return `NULL`
         * and you must not call {@link Gio.ActionGroup.change_action_state}.
         *
         * The state type of a particular action will never change but it is
         * possible for an action to be removed and for a new action to be added
         * with the same name but a different state type.
         * @param action_name the name of the action to query
         * @returns the state type, if the action is stateful
         */
        get_action_state_type(action_name: string): GLib.VariantType | null;
        /**
         * Checks if the named action exists within `action_group`.
         * @param action_name the name of the action to check for
         * @returns whether the named action exists
         */
        has_action(action_name: string): boolean;
        /**
         * Lists the actions contained within `action_group`.
         *
         * The caller is responsible for freeing the list with {@link GLib.strfreev} when
         * it is no longer required.
         * @returns a `NULL`-terminated array   of the names of the actions in the group
         */
        list_actions(): string[];
        /**
         * Queries all aspects of the named action within an `action_group`.
         *
         * This function acquires the information available from
         * {@link Gio.ActionGroup.has_action}, {@link Gio.ActionGroup.get_action_enabled},
         * {@link Gio.ActionGroup.get_action_parameter_type},
         * {@link Gio.ActionGroup.get_action_state_type},
         * {@link Gio.ActionGroup.get_action_state_hint} and
         * {@link Gio.ActionGroup.get_action_state} with a single function call.
         *
         * This provides two main benefits.
         *
         * The first is the improvement in efficiency that comes with not having
         * to perform repeated lookups of the action in order to discover
         * different things about it.  The second is that implementing
         * {@link Gio.ActionGroup} can now be done by only overriding this one virtual
         * function.
         *
         * The interface provides a default implementation of this function that
         * calls the individual functions, as required, to fetch the
         * information.  The interface also provides default implementations of
         * those functions that call this function.  All implementations,
         * therefore, must override either this function or all of the others.
         *
         * If the action exists, `TRUE` is returned and any of the requested
         * fields (as indicated by having a non-`NULL` reference passed in) are
         * filled.  If the action doesn’t exist, `FALSE` is returned and the
         * fields may or may not have been modified.
         * @param action_name the name of an action in the group
         * @returns `TRUE` if the action exists, else `FALSE`
         */
        query_action(
            action_name: string,
        ): [
            boolean,
            boolean,
            GLib.VariantType | null,
            GLib.VariantType | null,
            GLib.Variant | null,
            GLib.Variant | null,
        ];
        /**
         * Emits the `Gio.ActionGroup::action-added` signal on `action_group`.
         *
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @virtual
         */
        vfunc_action_added(action_name: string): void;
        /**
         * Emits the `Gio.ActionGroup::action-enabled-changed` signal on `action_group`.
         *
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @param enabled whether the action is now enabled
         * @virtual
         */
        vfunc_action_enabled_changed(action_name: string, enabled: boolean): void;
        /**
         * Emits the `Gio.ActionGroup::action-removed` signal on `action_group`.
         *
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @virtual
         */
        vfunc_action_removed(action_name: string): void;
        /**
         * Emits the `Gio.ActionGroup::action-state-changed` signal on `action_group`.
         *
         * This function should only be called by {@link Gio.ActionGroup} implementations.
         * @param action_name the name of an action in the group
         * @param state the new state of the named action
         * @virtual
         */
        vfunc_action_state_changed(action_name: string, state: GLib.Variant): void;
        /**
         * Activate the named action within `action_group`.
         *
         * If the action is expecting a parameter, then the correct type of
         * parameter must be given as `parameter`.  If the action is expecting no
         * parameters then `parameter` must be `NULL`.  See
         * {@link Gio.ActionGroup.get_action_parameter_type}.
         *
         * If the {@link Gio.ActionGroup} implementation supports asynchronous remote
         * activation over D-Bus, this call may return before the relevant
         * D-Bus traffic has been sent, or any replies have been received. In
         * order to block on such asynchronous activation calls,
         * {@link Gio.DBusConnection.flush} should be called prior to the code, which
         * depends on the result of the action activation. Without flushing
         * the D-Bus connection, there is no guarantee that the action would
         * have been activated.
         *
         * The following code which runs in a remote app instance, shows an
         * example of a ‘quit’ action being activated on the primary app
         * instance over D-Bus. Here {@link Gio.DBusConnection.flush} is called
         * before `exit()`. Without `g_dbus_connection_flush()`, the ‘quit’ action
         * may fail to be activated on the primary instance.
         *
         * ```c
         * // call ‘quit’ action on primary instance
         * g_action_group_activate_action (G_ACTION_GROUP (app), "quit", NULL);
         *
         * // make sure the action is activated now
         * g_dbus_connection_flush (…);
         *
         * g_debug ("Application has been terminated. Exiting.");
         *
         * exit (0);
         * ```
         * @param action_name the name of the action to activate
         * @param parameter parameters to the activation
         * @virtual
         */
        vfunc_activate_action(action_name: string, parameter: GLib.Variant | null): void;
        /**
         * Request for the state of the named action within `action_group` to be
         * changed to `value`.
         *
         * The action must be stateful and `value` must be of the correct type.
         * See {@link Gio.ActionGroup.get_action_state_type}.
         *
         * This call merely requests a change.  The action may refuse to change
         * its state or may change its state to something other than `value`.
         * See {@link Gio.ActionGroup.get_action_state_hint}.
         *
         * If the `value` GVariant is floating, it is consumed.
         * @param action_name the name of the action to request the change on
         * @param value the new state
         * @virtual
         */
        vfunc_change_action_state(action_name: string, value: GLib.Variant): void;
        /**
         * Checks if the named action within `action_group` is currently enabled.
         *
         * An action must be enabled in order to be activated or in order to
         * have its state changed from outside callers.
         * @param action_name the name of the action to query
         * @virtual
         */
        vfunc_get_action_enabled(action_name: string): boolean;
        /**
         * Queries the type of the parameter that must be given when activating
         * the named action within `action_group`.
         *
         * When activating the action using {@link Gio.ActionGroup.activate_action},
         * the {@link GLib.Variant} given to that function must be of the type returned
         * by this function.
         *
         * In the case that this function returns `NULL`, you must not give any
         * {@link GLib.Variant}, but `NULL` instead.
         *
         * The parameter type of a particular action will never change but it is
         * possible for an action to be removed and for a new action to be added
         * with the same name but a different parameter type.
         * @param action_name the name of the action to query
         * @virtual
         */
        vfunc_get_action_parameter_type(action_name: string): GLib.VariantType | null;
        /**
         * Queries the current state of the named action within `action_group`.
         *
         * If the action is not stateful then `NULL` will be returned.  If the
         * action is stateful then the type of the return value is the type
         * given by {@link Gio.ActionGroup.get_action_state_type}.
         *
         * The return value (if non-`NULL`) should be freed with
         * {@link GLib.Variant.unref} when it is no longer required.
         * @param action_name the name of the action to query
         * @virtual
         */
        vfunc_get_action_state(action_name: string): GLib.Variant | null;
        /**
         * Requests a hint about the valid range of values for the state of the
         * named action within `action_group`.
         *
         * If `NULL` is returned it either means that the action is not stateful
         * or that there is no hint about the valid range of values for the
         * state of the action.
         *
         * If a {@link GLib.Variant} array is returned then each item in the array is a
         * possible value for the state.  If a {@link GLib.Variant} pair (ie: two-tuple) is
         * returned then the tuple specifies the inclusive lower and upper bound
         * of valid values for the state.
         *
         * In any case, the information is merely a hint.  It may be possible to
         * have a state value outside of the hinted range and setting a value
         * within the range may fail.
         *
         * The return value (if non-`NULL`) should be freed with
         * {@link GLib.Variant.unref} when it is no longer required.
         * @param action_name the name of the action to query
         * @virtual
         */
        vfunc_get_action_state_hint(action_name: string): GLib.Variant | null;
        /**
         * Queries the type of the state of the named action within
         * `action_group`.
         *
         * If the action is stateful then this function returns the
         * {@link GLib.VariantType} of the state.  All calls to
         * {@link Gio.ActionGroup.change_action_state} must give a {@link GLib.Variant} of this
         * type and {@link Gio.ActionGroup.get_action_state} will return a {@link GLib.Variant}
         * of the same type.
         *
         * If the action is not stateful then this function will return `NULL`.
         * In that case, {@link Gio.ActionGroup.get_action_state} will return `NULL`
         * and you must not call {@link Gio.ActionGroup.change_action_state}.
         *
         * The state type of a particular action will never change but it is
         * possible for an action to be removed and for a new action to be added
         * with the same name but a different state type.
         * @param action_name the name of the action to query
         * @virtual
         */
        vfunc_get_action_state_type(action_name: string): GLib.VariantType | null;
        /**
         * Checks if the named action exists within `action_group`.
         * @param action_name the name of the action to check for
         * @virtual
         */
        vfunc_has_action(action_name: string): boolean;
        /**
         * Lists the actions contained within `action_group`.
         *
         * The caller is responsible for freeing the list with {@link GLib.strfreev} when
         * it is no longer required.
         * @virtual
         */
        vfunc_list_actions(): string[];
        /**
         * Queries all aspects of the named action within an `action_group`.
         *
         * This function acquires the information available from
         * {@link Gio.ActionGroup.has_action}, {@link Gio.ActionGroup.get_action_enabled},
         * {@link Gio.ActionGroup.get_action_parameter_type},
         * {@link Gio.ActionGroup.get_action_state_type},
         * {@link Gio.ActionGroup.get_action_state_hint} and
         * {@link Gio.ActionGroup.get_action_state} with a single function call.
         *
         * This provides two main benefits.
         *
         * The first is the improvement in efficiency that comes with not having
         * to perform repeated lookups of the action in order to discover
         * different things about it.  The second is that implementing
         * {@link Gio.ActionGroup} can now be done by only overriding this one virtual
         * function.
         *
         * The interface provides a default implementation of this function that
         * calls the individual functions, as required, to fetch the
         * information.  The interface also provides default implementations of
         * those functions that call this function.  All implementations,
         * therefore, must override either this function or all of the others.
         *
         * If the action exists, `TRUE` is returned and any of the requested
         * fields (as indicated by having a non-`NULL` reference passed in) are
         * filled.  If the action doesn’t exist, `FALSE` is returned and the
         * fields may or may not have been modified.
         * @param action_name the name of an action in the group
         * @virtual
         */
        vfunc_query_action(
            action_name: string,
        ): [
            boolean,
            boolean,
            GLib.VariantType | null,
            GLib.VariantType | null,
            GLib.Variant | null,
            GLib.Variant | null,
        ];
        /**
         * Adds an action to the `action_map`.
         *
         * If the action map already contains an action with the same name
         * as `action` then the old action is dropped from the action map.
         *
         * The action map takes its own reference on `action`.
         * @param action a {@link Gio.Action}
         */
        add_action(action: Gio.Action): void;
        /**
         * A convenience function for creating multiple simple actions.
         * See Gio.ActionEntryObj for the structure of the action entry.
         * @param entries Array of action entries to add
         */
        add_action_entries(entries: Gio.ActionEntryObj[]): void;
        /**
         * Looks up the action with the name `action_name` in `action_map`.
         *
         * If no such action exists, returns `NULL`.
         * @param action_name the name of an action
         * @returns a {@link Gio.Action}
         */
        lookup_action(action_name: string): Gio.Action | null;
        /**
         * Removes the named action from the action map.
         *
         * If no action of this name is in the map then nothing happens.
         * @param action_name the name of the action
         */
        remove_action(action_name: string): void;
        /**
         * Remove actions from a {@link Gio.ActionMap}. This is meant as the reverse of
         * {@link Gio.ActionMap.add_action_entries}.
         *
         *
         * ```c
         * static const GActionEntry entries[] = {
         *     { "quit",         activate_quit              },
         *     { "print-string", activate_print_string, "s" }
         * };
         *
         * void
         * add_actions (GActionMap *map)
         * {
         *   g_action_map_add_action_entries (map, entries, G_N_ELEMENTS (entries), NULL);
         * }
         *
         * void
         * remove_actions (GActionMap *map)
         * {
         *   g_action_map_remove_action_entries (map, entries, G_N_ELEMENTS (entries));
         * }
         * ```
         * @param entries a pointer to   the first item in an array of {@link Gio.ActionEntry} structs
         */
        remove_action_entries(entries: Gio.ActionEntry[]): void;
        /**
         * Adds an action to the `action_map`.
         *
         * If the action map already contains an action with the same name
         * as `action` then the old action is dropped from the action map.
         *
         * The action map takes its own reference on `action`.
         * @param action a {@link Gio.Action}
         * @virtual
         */
        vfunc_add_action(action: Gio.Action): void;
        /**
         * Looks up the action with the name `action_name` in `action_map`.
         *
         * If no such action exists, returns `NULL`.
         * @param action_name the name of an action
         * @virtual
         */
        vfunc_lookup_action(action_name: string): Gio.Action | null;
        /**
         * Removes the named action from the action map.
         *
         * If no action of this name is in the map then nothing happens.
         * @param action_name the name of the action
         * @virtual
         */
        vfunc_remove_action(action_name: string): void;
    }

    /**
     * @gir-type Alias
     */
    type AppActivatableInterface = typeof AppActivatable;
    /**
     * @gir-type Alias
     */
    type AppClass = typeof App;
    /**
     * @gir-type Alias
     */
    type DocumentClass = typeof Document;
    /**
     * @gir-type Alias
     */
    type EncodingsComboBoxClass = typeof EncodingsComboBox;
    /**
     * @gir-type Alias
     */
    type MenuExtensionClass = typeof MenuExtension;
    /**
     * @gir-type Alias
     */
    type MessageBusClass = typeof MessageBus;
    /**
     * @gir-type Struct
     */
    abstract class MessageBusPrivate {
        static $gtype: GObject.GType<MessageBusPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type MessageClass = typeof Message;
    /**
     * @gir-type Struct
     */
    abstract class MessagePrivate {
        static $gtype: GObject.GType<MessagePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type StatusbarClass = typeof Statusbar;
    /**
     * @gir-type Alias
     */
    type TabClass = typeof Tab;
    /**
     * @gir-type Alias
     */
    type ViewActivatableInterface = typeof ViewActivatable;
    /**
     * @gir-type Alias
     */
    type ViewClass = typeof View;
    /**
     * @gir-type Struct
     */
    abstract class ViewPrivate {
        static $gtype: GObject.GType<ViewPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type WindowActivatableInterface = typeof WindowActivatable;
    /**
     * @gir-type Alias
     */
    type WindowClass = typeof Window;
    /**
     * @gir-type Struct
     */
    abstract class WindowPrivate {
        static $gtype: GObject.GType<WindowPrivate>;
    }

    namespace AppActivatable {
        /**
         * Interface for implementing AppActivatable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Activates the extension on the application.
             * @virtual
             */
            vfunc_activate(): void;
            /**
             * Deactivates the extension from the application.
             * @virtual
             */
            vfunc_deactivate(): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            app: App;
        }
    }

    export interface AppActivatableNamespace {
        $gtype: GObject.GType<AppActivatable>;
        prototype: AppActivatable;
    }
    /**
     * @gir-type Interface
     */
    interface AppActivatable extends GObject.Object, AppActivatable.Interface {
        // Properties

        /**
         * The app property contains the gedit app for this
         * {@link Gedit.AppActivatable} instance.
         * @construct-only
         */
        get app(): App;

        // Methods

        /**
         * Activates the extension on the application.
         */
        activate(): void;
        /**
         * Deactivates the extension from the application.
         */
        deactivate(): void;
        /**
         * Gets the {@link Gedit.MenuExtension} for the menu `extension_point`. Note that
         * the extension point could be in different menus (gear menu, app menu, etc)
         * depending on the platform.
         * @param extension_point the extension point section of the menu to get.
         * @returns a {@link Gedit.MenuExtension} for the specific section or `null` if not found.
         */
        extend_menu(extension_point: string): MenuExtension;
    }

    export const AppActivatable: AppActivatableNamespace & {
        new (): AppActivatable; // This allows `obj instanceof AppActivatable`
    };

    namespace ViewActivatable {
        /**
         * Interface for implementing ViewActivatable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Activates the extension on the window property.
             * @virtual
             */
            vfunc_activate(): void;
            /**
             * Deactivates the extension on the window property.
             * @virtual
             */
            vfunc_deactivate(): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            view: View;
        }
    }

    export interface ViewActivatableNamespace {
        $gtype: GObject.GType<ViewActivatable>;
        prototype: ViewActivatable;
    }
    /**
     * @gir-type Interface
     */
    interface ViewActivatable extends GObject.Object, ViewActivatable.Interface {
        // Properties

        /**
         * The window property contains the gedit window for this
         * {@link Gedit.ViewActivatable} instance.
         * @construct-only
         */
        get view(): View;

        // Methods

        /**
         * Activates the extension on the window property.
         */
        activate(): void;
        /**
         * Deactivates the extension on the window property.
         */
        deactivate(): void;
    }

    export const ViewActivatable: ViewActivatableNamespace & {
        new (): ViewActivatable; // This allows `obj instanceof ViewActivatable`
    };

    namespace WindowActivatable {
        /**
         * Interface for implementing WindowActivatable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Activates the extension on the window property.
             * @virtual
             */
            vfunc_activate(): void;
            /**
             * Deactivates the extension on the window property.
             * @virtual
             */
            vfunc_deactivate(): void;
            /**
             * Triggers an update of the extension internal state to take into account
             * state changes in the window, due to some event or user action.
             * @virtual
             */
            vfunc_update_state(): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            window: Window;
        }
    }

    export interface WindowActivatableNamespace {
        $gtype: GObject.GType<WindowActivatable>;
        prototype: WindowActivatable;
    }
    /**
     * @gir-type Interface
     */
    interface WindowActivatable extends GObject.Object, WindowActivatable.Interface {
        // Properties

        /**
         * The window property contains the gedit window for this
         * {@link Gedit.WindowActivatable} instance.
         * @construct-only
         */
        get window(): Window;

        // Methods

        /**
         * Activates the extension on the window property.
         */
        activate(): void;
        /**
         * Deactivates the extension on the window property.
         */
        deactivate(): void;
        /**
         * Triggers an update of the extension internal state to take into account
         * state changes in the window, due to some event or user action.
         */
        update_state(): void;
    }

    export const WindowActivatable: WindowActivatableNamespace & {
        new (): WindowActivatable; // This allows `obj instanceof WindowActivatable`
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

export default Gedit;

// END
