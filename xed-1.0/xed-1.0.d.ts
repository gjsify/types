
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

export namespace Xed {

    /**
     * Xed-1.0
     */


    /**
     * @gir-type Enum
     */
    export namespace SearchMode {
        export const $gtype: GObject.GType<SearchMode>;
    }

    /**
     * @gir-type Enum
     */
    enum SearchMode {
        SEARCH,
        REPLACE,
    }


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
        STATE_PRINT_PREVIEWING,
        STATE_SHOWING_PRINT_PREVIEW,
        STATE_GENERIC_NOT_EDITABLE,
        STATE_LOADING_ERROR,
        STATE_REVERTING_ERROR,
        STATE_SAVING_ERROR,
        STATE_GENERIC_ERROR,
        STATE_CLOSING,
        STATE_EXTERNALLY_MODIFIED_NOTIFICATION,
        NUM_OF_STATES,
    }


    const METADATA_ATTRIBUTE_ENCODING: string;

    const METADATA_ATTRIBUTE_LANGUAGE: string;

    const METADATA_ATTRIBUTE_POSITION: string;

    /**
     * Loads `location`. Ignores non-existing locations
     * @param window a {@link Xed.Window}
     * @param location a {@link Gio.File} to be loaded
     * @param encoding the {@link GtkSource.Encoding} of `location`
     * @param line_pos the line column to place the cursor when `location` is loaded
     */
    function commands_load_location(window: Window, location: Gio.File, encoding: GtkSource.Encoding | null, line_pos: number): void;

    /**
     * Loads `locataions`. Ignore non-existing locations
     * @param window a {@link Xed.Window}
     * @param locations the locations to load
     * @param encoding the {@link GtkSource.Encoding}
     * @param line_pos the line position to place the cursor
     * @returns the locations that were loaded.
     */
    function commands_load_locations(window: Window, locations: Gio.File[], encoding: GtkSource.Encoding | null, line_pos: number): Document[];

    /**
     * Asynchronously save all documents belonging to `window`. The result of the
     * operation is not available, so it's difficult to know whether all the
     * documents are correctly saved.
     * @param window a {@link Xed.Window}.
     */
    function commands_save_all_documents(window: Window): void;

    /**
     * Asynchronously save `document`. `document` must belong to `window`. If you need
     * the result of the operation, use `xed_commands_save_document_async()`.
     * @param window a {@link Xed.Window}.
     * @param document the {@link Xed.Document} to save.
     */
    function commands_save_document(window: Window, document: Document): void;

    /**
     * Asynchronously save the `document`. `document` must belong to `window`. The
     * source object of the async task is `document` (which will be the first
     * parameter of the {@link Gio.AsyncReadyCallback}).
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * `xed_commands_save_document_finish()` to get the result of the operation.
     * @param document the {@link Xed.Document} to save.
     * @param window a {@link Xed.Window}.
     * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
     */
    function commands_save_document_async(document: Document, window: Window, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
    /**
     * Asynchronously save the `document`. `document` must belong to `window`. The
     * source object of the async task is `document` (which will be the first
     * parameter of the {@link Gio.AsyncReadyCallback}).
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * `xed_commands_save_document_finish()` to get the result of the operation.
     * @param document the {@link Xed.Document} to save.
     * @param window a {@link Xed.Window}.
     * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
     * @param callback a {@link Gio.AsyncReadyCallback} to call when the operation   is finished.
     */
    function commands_save_document_async(document: Document, window: Window, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Document> | null): void;
    /**
     * Asynchronously save the `document`. `document` must belong to `window`. The
     * source object of the async task is `document` (which will be the first
     * parameter of the {@link Gio.AsyncReadyCallback}).
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * `xed_commands_save_document_finish()` to get the result of the operation.
     * @param document the {@link Xed.Document} to save.
     * @param window a {@link Xed.Window}.
     * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
     * @param callback a {@link Gio.AsyncReadyCallback} to call when the operation   is finished.
     */
    function commands_save_document_async(document: Document, window: Window, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Document> | null): globalThis.Promise<boolean> | void;

    /**
     * Finishes an asynchronous document saving operation started with
     * `xed_commands_save_document_async()`.
     * 
     * Note that there is no error parameter because the errors are already handled
     * by xed.
     * @param document a {@link Xed.Document}.
     * @param result a {@link Gio.AsyncResult}.
     * @returns `true` if the document has been correctly saved, `false` otherwise.
     */
    function commands_save_document_finish(document: Document, result: Gio.AsyncResult): boolean;

    /**
     * @param section 
     * @param file 
     * @param line 
     * @param _function 
     */
    function debug(section: DebugSection, file: string, line: number, _function: string): void;

    function debug_init(): void;

    /**
     * @param closure 
     * @param return_value 
     * @param n_param_values 
     * @param param_values 
     * @param invocation_hint 
     * @param marshal_data 
     */
    function marshal_BOOLEAN__OBJECT(closure: GObject.Closure, return_value: GObject.Value | any, n_param_values: number, param_values: GObject.Value | any, invocation_hint: null, marshal_data: null): void;

    /**
     * @param closure 
     * @param return_value 
     * @param n_param_values 
     * @param param_values 
     * @param invocation_hint 
     * @param marshal_data 
     */
    function marshal_BOOLEAN__VOID(closure: GObject.Closure, return_value: GObject.Value | any, n_param_values: number, param_values: GObject.Value | any, invocation_hint: null, marshal_data: null): void;

    /**
     * @param closure 
     * @param return_value 
     * @param n_param_values 
     * @param param_values 
     * @param invocation_hint 
     * @param marshal_data 
     */
    function marshal_VOID__BOOLEAN_POINTER(closure: GObject.Closure, return_value: GObject.Value | any, n_param_values: number, param_values: GObject.Value | any, invocation_hint: null, marshal_data: null): void;

    /**
     * @param closure 
     * @param return_value 
     * @param n_param_values 
     * @param param_values 
     * @param invocation_hint 
     * @param marshal_data 
     */
    function marshal_VOID__BOXED_BOXED(closure: GObject.Closure, return_value: GObject.Value | any, n_param_values: number, param_values: GObject.Value | any, invocation_hint: null, marshal_data: null): void;

    /**
     * @param closure 
     * @param return_value 
     * @param n_param_values 
     * @param param_values 
     * @param invocation_hint 
     * @param marshal_data 
     */
    function marshal_VOID__INT_INT(closure: GObject.Closure, return_value: GObject.Value | any, n_param_values: number, param_values: GObject.Value | any, invocation_hint: null, marshal_data: null): void;

    /**
     * @param closure 
     * @param return_value 
     * @param n_param_values 
     * @param param_values 
     * @param invocation_hint 
     * @param marshal_data 
     */
    function marshal_VOID__OBJECT_BOXED_FLAGS(closure: GObject.Closure, return_value: GObject.Value | any, n_param_values: number, param_values: GObject.Value | any, invocation_hint: null, marshal_data: null): void;

    /**
     * @param closure 
     * @param return_value 
     * @param n_param_values 
     * @param param_values 
     * @param invocation_hint 
     * @param marshal_data 
     */
    function marshal_VOID__OBJECT_BOXED_INT_BOOLEAN(closure: GObject.Closure, return_value: GObject.Value | any, n_param_values: number, param_values: GObject.Value | any, invocation_hint: null, marshal_data: null): void;

    /**
     * @param closure 
     * @param return_value 
     * @param n_param_values 
     * @param param_values 
     * @param invocation_hint 
     * @param marshal_data 
     */
    function marshal_VOID__UINT64_UINT64(closure: GObject.Closure, return_value: GObject.Value | any, n_param_values: number, param_values: GObject.Value | any, invocation_hint: null, marshal_data: null): void;

    /**
     * Get the string identifier for `method` at `object_path`.
     * @param object_path the object path
     * @param method the method
     * @returns the identifier for `method` at `object_path`
     */
    function message_type_identifier(object_path: string | null, method: string | null): string;

    /**
     * Returns if `type` is {@link GObject.GType} supported by the message system.
     * @param type the {@link GObject.GType}
     * @returns `true` if `type` is a supported {@link GObject.GType}
     */
    function message_type_is_supported(type: GObject.GType): boolean;

    /**
     * Returns whether `object_path` is a valid object path
     * @param object_path the object path
     * @returns `true` if `object_path` is a valid object path
     */
    function message_type_is_valid_object_path(object_path: string | null): boolean;

    /**
     * @gir-type Callback
     */
    interface MessageBusForeach {
        (message_type: MessageType, userdata: null): void;
    }

    /**
     * @gir-type Callback
     */
    interface MessageCallback {
        (bus: MessageBus, message: Message, userdata: null): void;
    }

    /**
     * @gir-type Callback
     */
    interface MessageTypeForeach {
        (key: string, type: GObject.GType, required: boolean): void;
    }

    /**
     * @gir-type Flags
     */
    export namespace DebugSection {
        export const $gtype: GObject.GType<DebugSection>;
    }

    /**
     * @gir-type Flags
     */
    enum DebugSection {
        NO_DEBUG,
        DEBUG_VIEW,
        DEBUG_SEARCH,
        DEBUG_PRINT,
        DEBUG_PREFS,
        DEBUG_PLUGINS,
        DEBUG_TAB,
        DEBUG_DOCUMENT,
        DEBUG_COMMANDS,
        DEBUG_APP,
        DEBUG_SESSION,
        DEBUG_UTILS,
        DEBUG_METADATA,
        DEBUG_WINDOW,
        DEBUG_LOADER,
        DEBUG_SAVER,
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
        SAVING_SESSION,
    }


    namespace App {
        // Signal signatures
        interface SignalSignatures extends Gtk.Application.SignalSignatures {
            "notify::active-window": (pspec: GObject.ParamSpec) => void;
            "notify::app-menu": (pspec: GObject.ParamSpec) => void;
            "notify::menubar": (pspec: GObject.ParamSpec) => void;
            "notify::register-session": (pspec: GObject.ParamSpec) => void;
            "notify::screensaver-active": (pspec: GObject.ParamSpec) => void;
            "notify::action-group": (pspec: GObject.ParamSpec) => void;
            "notify::application-id": (pspec: GObject.ParamSpec) => void;
            "notify::flags": (pspec: GObject.ParamSpec) => void;
            "notify::inactivity-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::is-busy": (pspec: GObject.ParamSpec) => void;
            "notify::is-registered": (pspec: GObject.ParamSpec) => void;
            "notify::is-remote": (pspec: GObject.ParamSpec) => void;
            "notify::resource-base-path": (pspec: GObject.ParamSpec) => void;
            "notify::version": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Application.ConstructorProps, Gio.ActionGroup.ConstructorProps, Gio.ActionMap.ConstructorProps {}
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
        connect<K extends keyof App.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, App.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof App.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, App.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof App.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<App.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
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
         * Create a new {@link Xed.Window} part of `app`.
         * @param screen 
         * @returns the new {@link Xed.Window}
         */
        create_window(screen: Gdk.Screen | null): Window;

        /**
         * Returns all the documents currently open in {@link Xed.App}.
         * @returns a newly allocated list of {@link Xed.Document} objects
         */
        get_documents(): Document[];

        /**
         * Returns all {@link Xed.Window} currently open in {@link Xed.App}.
         * This differs from `gtk_application_get_windows()` since it does not
         * include the preferences dialog and other auxiliary windows.
         * @returns a newly allocated list of {@link Xed.Window} objects
         */
        get_main_windows(): Window[];

        /**
         * Returns all the views currently present in {@link Xed.App}.
         * @returns a newly allocated list of {@link Xed.View} objects
         */
        get_views(): View[];

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
             * @signal
             * @run-last
             */
            "cursor-moved": () => void;
            /**
             * The "load" signal is emitted at the beginning of file loading.
             * @signal
             * @run-last
             */
            load: () => void;
            /**
             * The "loaded" signal is emitted at the end of a successful loading.
             * @signal
             * @run-first
             */
            loaded: () => void;
            /**
             * The "save" signal is emitted at the beginning of file saving.
             * @signal
             * @run-last
             */
            save: () => void;
            /**
             * The "saved" signal is emitted at the end of a successful file saving.
             * @signal
             * @run-first
             */
            saved: () => void;
            "notify::content-type": (pspec: GObject.ParamSpec) => void;
            "notify::mime-type": (pspec: GObject.ParamSpec) => void;
            "notify::read-only": (pspec: GObject.ParamSpec) => void;
            "notify::shortname": (pspec: GObject.ParamSpec) => void;
            "notify::use-gvfs-metadata": (pspec: GObject.ParamSpec) => void;
            "notify::can-redo": (pspec: GObject.ParamSpec) => void;
            "notify::can-undo": (pspec: GObject.ParamSpec) => void;
            "notify::highlight-matching-brackets": (pspec: GObject.ParamSpec) => void;
            "notify::highlight-syntax": (pspec: GObject.ParamSpec) => void;
            "notify::implicit-trailing-newline": (pspec: GObject.ParamSpec) => void;
            "notify::language": (pspec: GObject.ParamSpec) => void;
            "notify::max-undo-levels": (pspec: GObject.ParamSpec) => void;
            "notify::style-scheme": (pspec: GObject.ParamSpec) => void;
            "notify::undo-manager": (pspec: GObject.ParamSpec) => void;
            "notify::copy-target-list": (pspec: GObject.ParamSpec) => void;
            "notify::cursor-position": (pspec: GObject.ParamSpec) => void;
            "notify::has-selection": (pspec: GObject.ParamSpec) => void;
            "notify::paste-target-list": (pspec: GObject.ParamSpec) => void;
            "notify::tag-table": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GtkSource.Buffer.ConstructorProps {
            content_type: string;
            contentType: string;
            mime_type: string;
            mimeType: string;
            read_only: boolean;
            readOnly: boolean;
            shortname: string;
            use_gvfs_metadata: boolean;
            useGvfsMetadata: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class Document extends GtkSource.Buffer {
        static $gtype: GObject.GType<Document>;

        // Properties
        /**
         * The documents content type.
         * @default null
         */
        get content_type(): string;
        set content_type(val: string);

        /**
         * The documents content type.
         * @default null
         */
        get contentType(): string;
        set contentType(val: string);

        /**
         * The documents MIME type.
         * @read-only
         * @default text/plain
         */
        get mime_type(): string;

        /**
         * The documents MIME type.
         * @read-only
         * @default text/plain
         */
        get mimeType(): string;

        /**
         * @read-only
         * @default false
         */
        get read_only(): boolean;

        /**
         * @read-only
         * @default false
         */
        get readOnly(): boolean;

        /**
         * The documents short name.
         * @default null
         */
        get shortname(): string;
        set shortname(val: string);

        /**
         * Whether to use GVFS metadata. If `false`, use the xed metadata
         * manager that stores the metadata in an XML file in the user cache
         * directory.
         * 
         * <warning>
         * The property is used internally by xed. It must not be used in a
         * xed plugin. The property can be modified or removed at any time.
         * </warning>
         * @construct-only
         * @default true
         */
        get use_gvfs_metadata(): boolean;

        /**
         * Whether to use GVFS metadata. If `false`, use the xed metadata
         * manager that stores the metadata in an XML file in the user cache
         * directory.
         * 
         * <warning>
         * The property is used internally by xed. It must not be used in a
         * xed plugin. The property can be modified or removed at any time.
         * </warning>
         * @construct-only
         * @default true
         */
        get useGvfsMetadata(): boolean;

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

        static ["new"](): Document;

        // Signals
        /** @signal */
        connect<K extends keyof Document.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Document.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Document.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Document.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Document.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Document.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_cursor_moved(): void;

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

        get_deleted(): boolean;

        get_encoding(): GtkSource.Encoding;

        /**
         * Gets the associated {@link GtkSource.File}. You should use it only for reading
         * purposes, not for creating a {@link GtkSource.FileLoader} or {@link GtkSource.FileSaver},
         * because xed does some extra work when loading or saving a file and
         * maintains an internal state. If you use in a plugin a file loader or saver on
         * the returned {@link GtkSource.File}, the internal state of xed won't be updated.
         * 
         * If you want to save the {@link Xed.Document} to a secondary file, you can create a
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
         * @returns a new {@link Gio.File}
         */
        get_location(): Gio.File | null;

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

        get_newline_type(): GtkSource.NewlineType;

        get_readonly(): boolean;

        /**
         * @returns the current search context of the document, or NULL if there is no search context
         */
        get_search_context(): GtkSource.SearchContext;

        /**
         * Note: this never returns `null`.
         */
        get_short_name_for_display(): string;

        /**
         * Note: this never returns `null`.
         */
        get_uri_for_display(): string;

        /**
         * @param line 
         */
        goto_line(line: number): boolean;

        /**
         * @param line 
         * @param line_offset 
         */
        goto_line_offset(line: number, line_offset: number): boolean;

        is_local(): boolean;

        is_untitled(): boolean;

        is_untouched(): boolean;

        /**
         * @param content_type 
         */
        set_content_type(content_type: string | null): void;

        /**
         * @param lang 
         */
        set_language(lang: GtkSource.Language | null): void;

        /**
         * @param location 
         */
        set_location(location: Gio.File): void;

        /**
         * Sets the new search context for the document.
         * @param search_context the new {@link GtkSource.SearchContext}
         */
        set_search_context(search_context: GtkSource.SearchContext | null): void;

        /**
         * @param short_name the short name to use
         */
        set_short_name_for_display(short_name: string | null): void;
    }


    namespace EncodingsComboBox {
        // Signal signatures
        interface SignalSignatures extends Gtk.ComboBox.SignalSignatures {
            "notify::save-mode": (pspec: GObject.ParamSpec) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::active-id": (pspec: GObject.ParamSpec) => void;
            "notify::add-tearoffs": (pspec: GObject.ParamSpec) => void;
            "notify::button-sensitivity": (pspec: GObject.ParamSpec) => void;
            "notify::cell-area": (pspec: GObject.ParamSpec) => void;
            "notify::column-span-column": (pspec: GObject.ParamSpec) => void;
            "notify::entry-text-column": (pspec: GObject.ParamSpec) => void;
            "notify::has-entry": (pspec: GObject.ParamSpec) => void;
            "notify::has-frame": (pspec: GObject.ParamSpec) => void;
            "notify::id-column": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::popup-fixed-width": (pspec: GObject.ParamSpec) => void;
            "notify::popup-shown": (pspec: GObject.ParamSpec) => void;
            "notify::row-span-column": (pspec: GObject.ParamSpec) => void;
            "notify::tearoff-title": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-width": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::editing-canceled": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.ComboBox.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.CellEditable.ConstructorProps, Gtk.CellLayout.ConstructorProps {
            save_mode: boolean;
            saveMode: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class EncodingsComboBox extends Gtk.ComboBox implements Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.CellLayout {
        static $gtype: GObject.GType<EncodingsComboBox>;

        // Properties
        /**
         * @default false
         */
        get save_mode(): boolean;
        set save_mode(val: boolean);

        /**
         * @default false
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

        static ["new"](save_mode: boolean): EncodingsComboBox;

        // Conflicted with Gtk.ComboBox.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof EncodingsComboBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EncodingsComboBox.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof EncodingsComboBox.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, EncodingsComboBox.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof EncodingsComboBox.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<EncodingsComboBox.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns the selected {@link GtkSource.Encoding}, or `null` if the encoding should be auto-detected (only for loading mode, not for saving).
         */
        get_selected_encoding(): GtkSource.Encoding;

        /**
         * Sets the selected encoding.
         * @param encoding the {@link GtkSource.Encoding}
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


    namespace FileChooserDialog {
        // Signal signatures
        interface SignalSignatures extends Gtk.FileChooserDialog.SignalSignatures {
            "notify::use-header-bar": (pspec: GObject.ParamSpec) => void;
            "notify::accept-focus": (pspec: GObject.ParamSpec) => void;
            "notify::application": (pspec: GObject.ParamSpec) => void;
            "notify::attached-to": (pspec: GObject.ParamSpec) => void;
            "notify::decorated": (pspec: GObject.ParamSpec) => void;
            "notify::default-height": (pspec: GObject.ParamSpec) => void;
            "notify::default-width": (pspec: GObject.ParamSpec) => void;
            "notify::deletable": (pspec: GObject.ParamSpec) => void;
            "notify::destroy-with-parent": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-map": (pspec: GObject.ParamSpec) => void;
            "notify::focus-visible": (pspec: GObject.ParamSpec) => void;
            "notify::gravity": (pspec: GObject.ParamSpec) => void;
            "notify::has-resize-grip": (pspec: GObject.ParamSpec) => void;
            "notify::has-toplevel-focus": (pspec: GObject.ParamSpec) => void;
            "notify::hide-titlebar-when-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::is-active": (pspec: GObject.ParamSpec) => void;
            "notify::is-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::mnemonics-visible": (pspec: GObject.ParamSpec) => void;
            "notify::modal": (pspec: GObject.ParamSpec) => void;
            "notify::resizable": (pspec: GObject.ParamSpec) => void;
            "notify::resize-grip-visible": (pspec: GObject.ParamSpec) => void;
            "notify::role": (pspec: GObject.ParamSpec) => void;
            "notify::screen": (pspec: GObject.ParamSpec) => void;
            "notify::skip-pager-hint": (pspec: GObject.ParamSpec) => void;
            "notify::skip-taskbar-hint": (pspec: GObject.ParamSpec) => void;
            "notify::startup-id": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::transient-for": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::type-hint": (pspec: GObject.ParamSpec) => void;
            "notify::urgency-hint": (pspec: GObject.ParamSpec) => void;
            "notify::window-position": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::action": (pspec: GObject.ParamSpec) => void;
            "notify::create-folders": (pspec: GObject.ParamSpec) => void;
            "notify::do-overwrite-confirmation": (pspec: GObject.ParamSpec) => void;
            "notify::extra-widget": (pspec: GObject.ParamSpec) => void;
            "notify::filter": (pspec: GObject.ParamSpec) => void;
            "notify::local-only": (pspec: GObject.ParamSpec) => void;
            "notify::preview-widget": (pspec: GObject.ParamSpec) => void;
            "notify::preview-widget-active": (pspec: GObject.ParamSpec) => void;
            "notify::select-multiple": (pspec: GObject.ParamSpec) => void;
            "notify::show-hidden": (pspec: GObject.ParamSpec) => void;
            "notify::use-preview-label": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.FileChooserDialog.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.FileChooser.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class FileChooserDialog extends Gtk.FileChooserDialog implements Atk.ImplementorIface, Gtk.Buildable, Gtk.FileChooser {
        static $gtype: GObject.GType<FileChooserDialog>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileChooserDialog.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<FileChooserDialog.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof FileChooserDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileChooserDialog.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FileChooserDialog.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FileChooserDialog.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FileChooserDialog.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FileChooserDialog.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_encoding(): GtkSource.Encoding;

        get_newline_type(): GtkSource.NewlineType;

        /**
         * @param encoding 
         */
        set_encoding(encoding: GtkSource.Encoding): void;

        /**
         * @param newline_type 
         */
        set_newline_type(newline_type: GtkSource.NewlineType): void;

        /**
         * @default Gtk.FileChooserAction.OPEN
          * @category Inherited from Gtk.FileChooser
         */
        get action(): Gtk.FileChooserAction;
        set action(val: Gtk.FileChooserAction);

        /**
         * Whether a file chooser not in {@link Gtk.FileChooserAction.OPEN} mode
         * will offer the user to create new folders.
         * @since 2.18
         * @default true
          * @category Inherited from Gtk.FileChooser
         */
        get create_folders(): boolean;
        set create_folders(val: boolean);

        /**
         * Whether a file chooser not in {@link Gtk.FileChooserAction.OPEN} mode
         * will offer the user to create new folders.
         * @since 2.18
         * @default true
          * @category Inherited from Gtk.FileChooser
         */
        get createFolders(): boolean;
        set createFolders(val: boolean);

        /**
         * Whether a file chooser in {@link Gtk.FileChooserAction.SAVE} mode
         * will present an overwrite confirmation dialog if the user
         * selects a file name that already exists.
         * @since 2.8
         * @default false
          * @category Inherited from Gtk.FileChooser
         */
        get do_overwrite_confirmation(): boolean;
        set do_overwrite_confirmation(val: boolean);

        /**
         * Whether a file chooser in {@link Gtk.FileChooserAction.SAVE} mode
         * will present an overwrite confirmation dialog if the user
         * selects a file name that already exists.
         * @since 2.8
         * @default false
          * @category Inherited from Gtk.FileChooser
         */
        get doOverwriteConfirmation(): boolean;
        set doOverwriteConfirmation(val: boolean);

        /** @category Inherited from Gtk.FileChooser */
        get extra_widget(): Gtk.Widget | null;
        set extra_widget(val: Gtk.Widget | null);

        /** @category Inherited from Gtk.FileChooser */
        get extraWidget(): Gtk.Widget | null;
        set extraWidget(val: Gtk.Widget | null);

        /** @category Inherited from Gtk.FileChooser */
        get filter(): Gtk.FileFilter | null;
        set filter(val: Gtk.FileFilter | null);

        /**
         * @default true
          * @category Inherited from Gtk.FileChooser
         */
        get local_only(): boolean;
        set local_only(val: boolean);

        /**
         * @default true
          * @category Inherited from Gtk.FileChooser
         */
        get localOnly(): boolean;
        set localOnly(val: boolean);

        /** @category Inherited from Gtk.FileChooser */
        get preview_widget(): Gtk.Widget | null;
        set preview_widget(val: Gtk.Widget | null);

        /** @category Inherited from Gtk.FileChooser */
        get previewWidget(): Gtk.Widget | null;
        set previewWidget(val: Gtk.Widget | null);

        /**
         * @default true
          * @category Inherited from Gtk.FileChooser
         */
        get preview_widget_active(): boolean;
        set preview_widget_active(val: boolean);

        /**
         * @default true
          * @category Inherited from Gtk.FileChooser
         */
        get previewWidgetActive(): boolean;
        set previewWidgetActive(val: boolean);

        /**
         * @default false
          * @category Inherited from Gtk.FileChooser
         */
        get select_multiple(): boolean;
        set select_multiple(val: boolean);

        /**
         * @default false
          * @category Inherited from Gtk.FileChooser
         */
        get selectMultiple(): boolean;
        set selectMultiple(val: boolean);

        /**
         * @default false
          * @category Inherited from Gtk.FileChooser
         */
        get show_hidden(): boolean;
        set show_hidden(val: boolean);

        /**
         * @default false
          * @category Inherited from Gtk.FileChooser
         */
        get showHidden(): boolean;
        set showHidden(val: boolean);

        /**
         * @default true
          * @category Inherited from Gtk.FileChooser
         */
        get use_preview_label(): boolean;
        set use_preview_label(val: boolean);

        /**
         * @default true
          * @category Inherited from Gtk.FileChooser
         */
        get usePreviewLabel(): boolean;
        set usePreviewLabel(val: boolean);

        /**
         * Adds a 'choice' to the file chooser. This is typically implemented
         * as a combobox or, for boolean choices, as a checkbutton. You can select
         * a value using `gtk_file_chooser_set_choice()` before the dialog is shown,
         * and you can obtain the user-selected value in the ::response signal handler
         * using `gtk_file_chooser_get_choice()`.
         * 
         * Compare `gtk_file_chooser_set_extra_widget()`.
         * @param id id for the added choice
         * @param label user-visible label for the added choice
         * @param options ids for the options of the choice, or `null` for a boolean choice
         * @param option_labels user-visible labels for the options, must be the same length as `options`
         */
        add_choice(id: string, label: string, options: string[] | null, option_labels: string[] | null): void;

        /**
         * Adds `filter` to the list of filters that the user can select between.
         * When a filter is selected, only files that are passed by that
         * filter are displayed.
         * 
         * Note that the `chooser` takes ownership of the filter, so you have to
         * ref and sink it if you want to keep a reference.
         * @param filter a {@link Gtk.FileFilter}
         */
        add_filter(filter: Gtk.FileFilter): void;

        /**
         * Adds a folder to be displayed with the shortcut folders in a file chooser.
         * Note that shortcut folders do not get saved, as they are provided by the
         * application.  For example, you can use this to add a
         * “/usr/share/mydrawprogram/Clipart” folder to the volume list.
         * @param folder filename of the folder to add
         * @returns `true` if the folder could be added successfully, `false` otherwise.  In the latter case, the `error` will be set as appropriate.
         */
        add_shortcut_folder(folder: string): boolean;

        /**
         * Adds a folder URI to be displayed with the shortcut folders in a file
         * chooser.  Note that shortcut folders do not get saved, as they are provided
         * by the application.  For example, you can use this to add a
         * “file:///usr/share/mydrawprogram/Clipart” folder to the volume list.
         * @param uri URI of the folder to add
         * @returns `true` if the folder could be added successfully, `false` otherwise.  In the latter case, the `error` will be set as appropriate.
         */
        add_shortcut_folder_uri(uri: string): boolean;

        /**
         * Gets the type of operation that the file chooser is performing; see
         * `gtk_file_chooser_set_action()`.
         * @returns the action that the file selector is performing
         */
        get_action(): Gtk.FileChooserAction;

        /**
         * Gets the currently selected option in the 'choice' with the given ID.
         * @param id the ID of the choice to get
         * @returns the ID of the currenly selected option
         */
        get_choice(id: string): string;

        /**
         * Gets whether file choser will offer to create new folders.
         * See `gtk_file_chooser_set_create_folders()`.
         * @returns `true` if the Create Folder button should be displayed.
         */
        get_create_folders(): boolean;

        /**
         * Gets the current folder of `chooser` as a local filename.
         * See `gtk_file_chooser_set_current_folder()`.
         * 
         * Note that this is the folder that the file chooser is currently displaying
         * (e.g. "/home/username/Documents"), which is not the same
         * as the currently-selected folder if the chooser is in
         * {@link Gtk.FileChooserAction.SELECT_FOLDER} mode
         * (e.g. "/home/username/Documents/selected-folder/".  To get the
         * currently-selected folder in that mode, use `gtk_file_chooser_get_uri()` as the
         * usual way to get the selection.
         * @returns the full path of the current folder, or `null` if the current path cannot be represented as a local filename.  Free with `g_free()`.  This function will also return `null` if the file chooser was unable to load the last folder that was requested from it; for example, as would be for calling `gtk_file_chooser_set_current_folder()` on a nonexistent folder.
         */
        get_current_folder(): string | null;

        /**
         * Gets the current folder of `chooser` as {@link Gio.File}.
         * See `gtk_file_chooser_get_current_folder_uri()`.
         * @returns the {@link Gio.File} for the current folder.
         */
        get_current_folder_file(): Gio.File | null;

        /**
         * Gets the current folder of `chooser` as an URI.
         * See `gtk_file_chooser_set_current_folder_uri()`.
         * 
         * Note that this is the folder that the file chooser is currently displaying
         * (e.g. "file:///home/username/Documents"), which is not the same
         * as the currently-selected folder if the chooser is in
         * {@link Gtk.FileChooserAction.SELECT_FOLDER} mode
         * (e.g. "file:///home/username/Documents/selected-folder/".  To get the
         * currently-selected folder in that mode, use `gtk_file_chooser_get_uri()` as the
         * usual way to get the selection.
         * @returns the URI for the current folder. Free with `g_free()`.  This function will also return `null` if the file chooser was unable to load the last folder that was requested from it; for example, as would be for calling `gtk_file_chooser_set_current_folder_uri()` on a nonexistent folder.
         */
        get_current_folder_uri(): string | null;

        /**
         * Gets the current name in the file selector, as entered by the user in the
         * text entry for “Name”.
         * 
         * This is meant to be used in save dialogs, to get the currently typed filename
         * when the file itself does not exist yet.  For example, an application that
         * adds a custom extra widget to the file chooser for “file format” may want to
         * change the extension of the typed filename based on the chosen format, say,
         * from “.jpg” to “.png”.
         * @returns The raw text from the file chooser’s “Name” entry.  Free this with `g_free()`.  Note that this string is not a full pathname or URI; it is whatever the contents of the entry are.  Note also that this string is in UTF-8 encoding, which is not necessarily the system’s encoding for filenames.
         */
        get_current_name(): string;

        /**
         * Queries whether a file chooser is set to confirm for overwriting when the user
         * types a file name that already exists.
         * @returns `true` if the file chooser will present a confirmation dialog; `false` otherwise.
         */
        get_do_overwrite_confirmation(): boolean;

        /**
         * Gets the current extra widget; see
         * `gtk_file_chooser_set_extra_widget()`.
         * @returns the current extra widget, or `null`
         */
        get_extra_widget(): Gtk.Widget | null;

        /**
         * Gets the {@link Gio.File} for the currently selected file in
         * the file selector. If multiple files are selected,
         * one of the files will be returned at random.
         * 
         * If the file chooser is in folder mode, this function returns the selected
         * folder.
         * @returns a selected {@link Gio.File}. You own the returned file;     use `g_object_unref()` to release it.
         */
        get_file(): Gio.File;

        /**
         * Gets the filename for the currently selected file in
         * the file selector. The filename is returned as an absolute path. If
         * multiple files are selected, one of the filenames will be returned at
         * random.
         * 
         * If the file chooser is in folder mode, this function returns the selected
         * folder.
         * @returns The currently selected filename,  or `null` if no file is selected, or the selected file can't  be represented with a local filename. Free with `g_free()`.
         */
        get_filename(): string | null;

        /**
         * Lists all the selected files and subfolders in the current folder of
         * `chooser`. The returned names are full absolute paths. If files in the current
         * folder cannot be represented as local filenames they will be ignored. (See
         * `gtk_file_chooser_get_uris()`)
         * @returns a {@link GLib.SList}    containing the filenames of all selected files and subfolders in    the current folder. Free the returned list with `g_slist_free()`,    and the filenames with `g_free()`.
         */
        get_filenames(): string[];

        /**
         * Lists all the selected files and subfolders in the current folder of `chooser`
         * as {@link Gio.File}. An internal function, see `gtk_file_chooser_get_uris()`.
         * @returns a {@link GLib.SList}   containing a {@link Gio.File} for each selected file and subfolder in the   current folder.  Free the returned list with `g_slist_free()`, and   the files with `g_object_unref()`.
         */
        get_files(): Gio.File[];

        /**
         * Gets the current filter; see `gtk_file_chooser_set_filter()`.
         * @returns the current filter, or `null`
         */
        get_filter(): Gtk.FileFilter | null;

        /**
         * Gets whether only local files can be selected in the
         * file selector. See `gtk_file_chooser_set_local_only()`
         * @returns `true` if only local files can be selected.
         */
        get_local_only(): boolean;

        /**
         * Gets the {@link Gio.File} that should be previewed in a custom preview
         * Internal function, see `gtk_file_chooser_get_preview_uri()`.
         * @returns the {@link Gio.File} for the file to preview,     or `null` if no file is selected. Free with `g_object_unref()`.
         */
        get_preview_file(): Gio.File | null;

        /**
         * Gets the filename that should be previewed in a custom preview
         * widget. See `gtk_file_chooser_set_preview_widget()`.
         * @returns the filename to preview, or `null` if  no file is selected, or if the selected file cannot be represented  as a local filename. Free with `g_free()`
         */
        get_preview_filename(): string | null;

        /**
         * Gets the URI that should be previewed in a custom preview
         * widget. See `gtk_file_chooser_set_preview_widget()`.
         * @returns the URI for the file to preview,     or `null` if no file is selected. Free with `g_free()`.
         */
        get_preview_uri(): string | null;

        /**
         * Gets the current preview widget; see
         * `gtk_file_chooser_set_preview_widget()`.
         * @returns the current preview widget, or `null`
         */
        get_preview_widget(): Gtk.Widget | null;

        /**
         * Gets whether the preview widget set by `gtk_file_chooser_set_preview_widget()`
         * should be shown for the current filename. See
         * `gtk_file_chooser_set_preview_widget_active()`.
         * @returns `true` if the preview widget is active for the current filename.
         */
        get_preview_widget_active(): boolean;

        /**
         * Gets whether multiple files can be selected in the file
         * selector. See `gtk_file_chooser_set_select_multiple()`.
         * @returns `true` if multiple files can be selected.
         */
        get_select_multiple(): boolean;

        /**
         * Gets whether hidden files and folders are displayed in the file selector.
         * See `gtk_file_chooser_set_show_hidden()`.
         * @returns `true` if hidden files and folders are displayed.
         */
        get_show_hidden(): boolean;

        /**
         * Gets the URI for the currently selected file in
         * the file selector. If multiple files are selected,
         * one of the filenames will be returned at random.
         * 
         * If the file chooser is in folder mode, this function returns the selected
         * folder.
         * @returns The currently selected URI, or `null`    if no file is selected. If `gtk_file_chooser_set_local_only()` is set to    `true` (the default) a local URI will be returned for any FUSE locations.    Free with `g_free()`
         */
        get_uri(): string | null;

        /**
         * Lists all the selected files and subfolders in the current folder of
         * `chooser`. The returned names are full absolute URIs.
         * @returns a {@link GLib.SList} containing the URIs of all selected   files and subfolders in the current folder. Free the returned list   with `g_slist_free()`, and the filenames with `g_free()`.
         */
        get_uris(): string[];

        /**
         * Gets whether a stock label should be drawn with the name of the previewed
         * file.  See `gtk_file_chooser_set_use_preview_label()`.
         * @returns `true` if the file chooser is set to display a label with the name of the previewed file, `false` otherwise.
         */
        get_use_preview_label(): boolean;

        /**
         * Lists the current set of user-selectable filters; see
         * `gtk_file_chooser_add_filter()`, `gtk_file_chooser_remove_filter()`.
         * @returns a  {@link GLib.SList} containing the current set of user selectable filters. The  contents of the list are owned by GTK+, but you must free the list  itself with `g_slist_free()` when you are done with it.
         */
        list_filters(): Gtk.FileFilter[];

        /**
         * Queries the list of shortcut folders in the file chooser, as set by
         * `gtk_file_chooser_add_shortcut_folder_uri()`.
         * @returns A list of folder URIs, or `null` if there are no shortcut folders.  Free the returned list with `g_slist_free()`, and the URIs with `g_free()`.
         */
        list_shortcut_folder_uris(): string[] | null;

        /**
         * Queries the list of shortcut folders in the file chooser, as set by
         * `gtk_file_chooser_add_shortcut_folder()`.
         * @returns A list of folder filenames, or `null` if there are no shortcut folders. Free the returned list with `g_slist_free()`, and the filenames with `g_free()`.
         */
        list_shortcut_folders(): string[] | null;

        /**
         * Removes a 'choice' that has been added with `gtk_file_chooser_add_choice()`.
         * @param id the ID of the choice to remove
         */
        remove_choice(id: string): void;

        /**
         * Removes `filter` from the list of filters that the user can select between.
         * @param filter a {@link Gtk.FileFilter}
         */
        remove_filter(filter: Gtk.FileFilter): void;

        /**
         * Removes a folder from a file chooser’s list of shortcut folders.
         * @param folder filename of the folder to remove
         * @returns `true` if the operation succeeds, `false` otherwise. In the latter case, the `error` will be set as appropriate. See also: `gtk_file_chooser_add_shortcut_folder()`
         */
        remove_shortcut_folder(folder: string): boolean;

        /**
         * Removes a folder URI from a file chooser’s list of shortcut folders.
         * @param uri URI of the folder to remove
         * @returns `true` if the operation succeeds, `false` otherwise. In the latter case, the `error` will be set as appropriate. See also: `gtk_file_chooser_add_shortcut_folder_uri()`
         */
        remove_shortcut_folder_uri(uri: string): boolean;

        /**
         * Selects all the files in the current folder of a file chooser.
         */
        select_all(): void;

        /**
         * Selects the file referred to by `file`. An internal function. See
         * _gtk_file_chooser_select_uri().
         * @param file the file to select
         * @returns Not useful.
         */
        select_file(file: Gio.File): boolean;

        /**
         * Selects a filename. If the file name isn’t in the current
         * folder of `chooser`, then the current folder of `chooser` will
         * be changed to the folder containing `filename`.
         * @param filename the filename to select
         * @returns Not useful. See also: `gtk_file_chooser_set_filename()`
         */
        select_filename(filename: string): boolean;

        /**
         * Selects the file to by `uri`. If the URI doesn’t refer to a
         * file in the current folder of `chooser`, then the current folder of
         * `chooser` will be changed to the folder containing `filename`.
         * @param uri the URI to select
         * @returns Not useful.
         */
        select_uri(uri: string): boolean;

        /**
         * Sets the type of operation that the chooser is performing; the
         * user interface is adapted to suit the selected action. For example,
         * an option to create a new folder might be shown if the action is
         * {@link Gtk.FileChooserAction.SAVE} but not if the action is
         * {@link Gtk.FileChooserAction.OPEN}.
         * @param action the action that the file selector is performing
         */
        set_action(action: Gtk.FileChooserAction): void;

        /**
         * Selects an option in a 'choice' that has been added with
         * `gtk_file_chooser_add_choice()`. For a boolean choice, the
         * possible options are "true" and "false".
         * @param id the ID of the choice to set
         * @param option the ID of the option to select
         */
        set_choice(id: string, option: string): void;

        /**
         * Sets whether file choser will offer to create new folders.
         * This is only relevant if the action is not set to be
         * {@link Gtk.FileChooserAction.OPEN}.
         * @param create_folders `true` if the Create Folder button should be displayed
         */
        set_create_folders(create_folders: boolean): void;

        /**
         * Sets the current folder for `chooser` from a local filename.
         * The user will be shown the full contents of the current folder,
         * plus user interface elements for navigating to other folders.
         * 
         * In general, you should not use this function.  See the
         * [section on setting up a file chooser dialog][gtkfilechooserdialog-setting-up]
         * for the rationale behind this.
         * @param filename the full path of the new current folder
         * @returns Not useful.
         */
        set_current_folder(filename: string): boolean;

        /**
         * Sets the current folder for `chooser` from a {@link Gio.File}.
         * Internal function, see `gtk_file_chooser_set_current_folder_uri()`.
         * @param file the {@link Gio.File} for the new folder
         * @returns `true` if the folder could be changed successfully, `false` otherwise.
         */
        set_current_folder_file(file: Gio.File): boolean;

        /**
         * Sets the current folder for `chooser` from an URI.
         * The user will be shown the full contents of the current folder,
         * plus user interface elements for navigating to other folders.
         * 
         * In general, you should not use this function.  See the
         * [section on setting up a file chooser dialog][gtkfilechooserdialog-setting-up]
         * for the rationale behind this.
         * @param uri the URI for the new current folder
         * @returns `true` if the folder could be changed successfully, `false` otherwise.
         */
        set_current_folder_uri(uri: string): boolean;

        /**
         * Sets the current name in the file selector, as if entered
         * by the user. Note that the name passed in here is a UTF-8
         * string rather than a filename. This function is meant for
         * such uses as a suggested name in a “Save As...” dialog.  You can
         * pass “Untitled.doc” or a similarly suitable suggestion for the `name`.
         * 
         * If you want to preselect a particular existing file, you should use
         * `gtk_file_chooser_set_filename()` or `gtk_file_chooser_set_uri()` instead.
         * Please see the documentation for those functions for an example of using
         * `gtk_file_chooser_set_current_name()` as well.
         * @param name the filename to use, as a UTF-8 string
         */
        set_current_name(name: string): void;

        /**
         * Sets whether a file chooser in {@link Gtk.FileChooserAction.SAVE} mode will present
         * a confirmation dialog if the user types a file name that already exists.  This
         * is `false` by default.
         * 
         * If set to `true`, the `chooser` will emit the
         * {@link Gtk.FileChooser.SignalSignatures.confirm_overwrite | Gtk.FileChooser::confirm-overwrite} signal when appropriate.
         * 
         * If all you need is the stock confirmation dialog, set this property to `true`.
         * You can override the way confirmation is done by actually handling the
         * {@link Gtk.FileChooser.SignalSignatures.confirm_overwrite | Gtk.FileChooser::confirm-overwrite} signal; please refer to its documentation
         * for the details.
         * @param do_overwrite_confirmation whether to confirm overwriting in save mode
         */
        set_do_overwrite_confirmation(do_overwrite_confirmation: boolean): void;

        /**
         * Sets an application-supplied widget to provide extra options to the user.
         * @param extra_widget widget for extra options
         */
        set_extra_widget(extra_widget: Gtk.Widget): void;

        /**
         * Sets `file` as the current filename for the file chooser, by changing
         * to the file’s parent folder and actually selecting the file in list.  If
         * the `chooser` is in {@link Gtk.FileChooserAction.SAVE} mode, the file’s base name
         * will also appear in the dialog’s file name entry.
         * 
         * If the file name isn’t in the current folder of `chooser`, then the current
         * folder of `chooser` will be changed to the folder containing `filename`. This
         * is equivalent to a sequence of `gtk_file_chooser_unselect_all()` followed by
         * `gtk_file_chooser_select_filename()`.
         * 
         * Note that the file must exist, or nothing will be done except
         * for the directory change.
         * 
         * If you are implementing a save dialog,
         * you should use this function if you already have a file name to which the
         * user may save; for example, when the user opens an existing file and then
         * does Save As...  If you don’t have
         * a file name already — for example, if the user just created a new
         * file and is saving it for the first time, do not call this function.
         * Instead, use something similar to this:
         * 
         * ```c
         * if (document_is_new)
         *   {
         *     // the user just created a new document
         *     gtk_file_chooser_set_current_folder_file (chooser, default_file_for_saving);
         *     gtk_file_chooser_set_current_name (chooser, "Untitled document");
         *   }
         * else
         *   {
         *     // the user edited an existing document
         *     gtk_file_chooser_set_file (chooser, existing_file);
         *   }
         * ```
         * 
         * @param file the {@link Gio.File} to set as current
         * @returns Not useful.
         */
        set_file(file: Gio.File): boolean;

        /**
         * Sets `filename` as the current filename for the file chooser, by changing to
         * the file’s parent folder and actually selecting the file in list; all other
         * files will be unselected.  If the `chooser` is in
         * {@link Gtk.FileChooserAction.SAVE} mode, the file’s base name will also appear in
         * the dialog’s file name entry.
         * 
         * Note that the file must exist, or nothing will be done except
         * for the directory change.
         * 
         * You should use this function only when implementing a save
         * dialog for which you already have a file name to which
         * the user may save.  For example, when the user opens an existing file and
         * then does Save As... to save a copy or
         * a modified version.  If you don’t have a file name already — for
         * example, if the user just created a new file and is saving it for the first
         * time, do not call this function.  Instead, use something similar to this:
         * 
         * ```c
         * if (document_is_new)
         *   {
         *     // the user just created a new document
         *     gtk_file_chooser_set_current_name (chooser, "Untitled document");
         *   }
         * else
         *   {
         *     // the user edited an existing document
         *     gtk_file_chooser_set_filename (chooser, existing_filename);
         *   }
         * ```
         * 
         * 
         * In the first case, the file chooser will present the user with useful suggestions
         * as to where to save his new file.  In the second case, the file’s existing location
         * is already known, so the file chooser will use it.
         * @param filename the filename to set as current
         * @returns Not useful.
         */
        set_filename(filename: string): boolean;

        /**
         * Sets the current filter; only the files that pass the
         * filter will be displayed. If the user-selectable list of filters
         * is non-empty, then the filter should be one of the filters
         * in that list. Setting the current filter when the list of
         * filters is empty is useful if you want to restrict the displayed
         * set of files without letting the user change it.
         * @param filter a {@link Gtk.FileFilter}
         */
        set_filter(filter: Gtk.FileFilter): void;

        /**
         * Sets whether only local files can be selected in the
         * file selector. If `local_only` is `true` (the default),
         * then the selected file or files are guaranteed to be
         * accessible through the operating systems native file
         * system and therefore the application only
         * needs to worry about the filename functions in
         * {@link Gtk.FileChooser}, like `gtk_file_chooser_get_filename()`,
         * rather than the URI functions like
         * `gtk_file_chooser_get_uri()`,
         * 
         * On some systems non-native files may still be
         * available using the native filesystem via a userspace
         * filesystem (FUSE).
         * @param local_only `true` if only local files can be selected
         */
        set_local_only(local_only: boolean): void;

        /**
         * Sets an application-supplied widget to use to display a custom preview
         * of the currently selected file. To implement a preview, after setting the
         * preview widget, you connect to the {@link Gtk.FileChooser.SignalSignatures.update_preview | Gtk.FileChooser::update-preview}
         * signal, and call `gtk_file_chooser_get_preview_filename()` or
         * `gtk_file_chooser_get_preview_uri()` on each change. If you can
         * display a preview of the new file, update your widget and
         * set the preview active using `gtk_file_chooser_set_preview_widget_active()`.
         * Otherwise, set the preview inactive.
         * 
         * When there is no application-supplied preview widget, or the
         * application-supplied preview widget is not active, the file chooser
         * will display no preview at all.
         * @param preview_widget widget for displaying preview.
         */
        set_preview_widget(preview_widget: Gtk.Widget): void;

        /**
         * Sets whether the preview widget set by
         * `gtk_file_chooser_set_preview_widget()` should be shown for the
         * current filename. When `active` is set to false, the file chooser
         * may display an internally generated preview of the current file
         * or it may display no preview at all. See
         * `gtk_file_chooser_set_preview_widget()` for more details.
         * @param active whether to display the user-specified preview widget
         */
        set_preview_widget_active(active: boolean): void;

        /**
         * Sets whether multiple files can be selected in the file selector.  This is
         * only relevant if the action is set to be {@link Gtk.FileChooserAction.OPEN} or
         * {@link Gtk.FileChooserAction.SELECT_FOLDER}.
         * @param select_multiple `true` if multiple files can be selected.
         */
        set_select_multiple(select_multiple: boolean): void;

        /**
         * Sets whether hidden files and folders are displayed in the file selector.
         * @param show_hidden `true` if hidden files and folders should be displayed.
         */
        set_show_hidden(show_hidden: boolean): void;

        /**
         * Sets the file referred to by `uri` as the current file for the file chooser,
         * by changing to the URI’s parent folder and actually selecting the URI in the
         * list.  If the `chooser` is {@link Gtk.FileChooserAction.SAVE} mode, the URI’s base
         * name will also appear in the dialog’s file name entry.
         * 
         * Note that the URI must exist, or nothing will be done except for the
         * directory change.
         * 
         * You should use this function only when implementing a save
         * dialog for which you already have a file name to which
         * the user may save.  For example, when the user opens an existing file and then
         * does Save As... to save a copy or a
         * modified version.  If you don’t have a file name already — for example,
         * if the user just created a new file and is saving it for the first time, do
         * not call this function.  Instead, use something similar to this:
         * 
         * ```c
         * if (document_is_new)
         *   {
         *     // the user just created a new document
         *     gtk_file_chooser_set_current_name (chooser, "Untitled document");
         *   }
         * else
         *   {
         *     // the user edited an existing document
         *     gtk_file_chooser_set_uri (chooser, existing_uri);
         *   }
         * ```
         * 
         * 
         * 
         * In the first case, the file chooser will present the user with useful suggestions
         * as to where to save his new file.  In the second case, the file’s existing location
         * is already known, so the file chooser will use it.
         * @param uri the URI to set as current
         * @returns Not useful.
         */
        set_uri(uri: string): boolean;

        /**
         * Sets whether the file chooser should display a stock label with the name of
         * the file that is being previewed; the default is `true`.  Applications that
         * want to draw the whole preview area themselves should set this to `false` and
         * display the name themselves in their preview widget.
         * 
         * See also: `gtk_file_chooser_set_preview_widget()`
         * @param use_label whether to display a stock label with the name of the previewed file
         */
        set_use_preview_label(use_label: boolean): void;

        /**
         * Unselects all the files in the current folder of a file chooser.
         */
        unselect_all(): void;

        /**
         * Unselects the file referred to by `file`. If the file is not in the current
         * directory, does not exist, or is otherwise not currently selected, does nothing.
         * @param file a {@link Gio.File}
         */
        unselect_file(file: Gio.File): void;

        /**
         * Unselects a currently selected filename. If the filename
         * is not in the current directory, does not exist, or
         * is otherwise not currently selected, does nothing.
         * @param filename the filename to unselect
         */
        unselect_filename(filename: string): void;

        /**
         * Unselects the file referred to by `uri`. If the file
         * is not in the current directory, does not exist, or
         * is otherwise not currently selected, does nothing.
         * @param uri the URI to unselect
         */
        unselect_uri(uri: string): void;
    }


    namespace Message {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::method": (pspec: GObject.ParamSpec) => void;
            "notify::object-path": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            method: string;
            object_path: string;
            objectPath: string;
            type: MessageType;
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
         * @read-only
         * @default null
         */
        get method(): string;

        /**
         * @read-only
         * @default null
         */
        get object_path(): string;

        /**
         * @read-only
         * @default null
         */
        get objectPath(): string;

        /**
         * @construct-only
         */
        get type(): MessageType;

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
        connect<K extends keyof Message.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Message.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Message.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Message.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Message.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Message.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Get the type of a message argument.
         * @param key the argument key
         * @returns the type of `key`
         */
        get_key_type(key: string): GObject.GType;

        get_message_type(): null;

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
         * Get the value of a specific message argument. `value` will be initialized
         * with the correct type.
         * @param key the argument key
         */
        get_value(key: string): unknown;

        /**
         * Check whether the message has a specific key.
         * @param key the argument key
         * @returns `true` if `message` has argument `key`
         */
        has_key(key: string): boolean;

        /**
         * Set value of message argument `key` to `value`.
         * @param key the argument key
         */
        set_value(key: string): unknown;

        /**
         * Set message argument values.
         * @param keys keys to set values for
         * @param values values to set
         */
        set_valuesv(keys: string[], values: (GObject.Value | any)[]): void;

        /**
         * Validates the message arguments according to the message type.
         * @returns `true` if the message is valid
         */
        validate(): boolean;
    }


    namespace MessageBus {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The "dispatch" signal is emitted when a message is to be dispatched.
             * The message is dispatched in the default handler of this signal.
             * Primary use of this signal is to customize the dispatch of a message
             * (for instance to automatically dispatch all messages over DBus).
             * 2
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
            registered: (arg0: MessageType) => void;
            /**
             * The "unregistered" signal is emitted when a message has been
             * unregistered from the bus.
             * @signal
             * @run-last
             */
            unregistered: (arg0: MessageType) => void;
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

        static ["new"](): MessageBus;

        // Signals
        /** @signal */
        connect<K extends keyof MessageBus.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MessageBus.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MessageBus.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MessageBus.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MessageBus.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MessageBus.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Get the default application {@link Xed.MessageBus}.
         */
        static get_default(): MessageBus;

        // Virtual methods
        /**
         * @param message 
         * @virtual
         */
        vfunc_dispatch(message: Message): void;

        /**
         * @param message_type 
         * @virtual
         */
        vfunc_registered(message_type: MessageType): void;

        /**
         * @param message_type 
         * @virtual
         */
        vfunc_unregistered(message_type: MessageType): void;

        // Methods
        /**
         * Blocks evoking the callback specified by `id`. Unblock the callback by
         * using `xed_message_bus_unblock()`.
         * @param id the callback id
         */
        block(id: number): void;

        /**
         * Blocks evoking the callback that matches provided `callback` and `userdata`.
         * Unblock the callback using `xed_message_bus_unblock_by_func()`.
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
         * @returns the callback identifier
         */
        connect(object_path: string, method: string, callback: MessageCallback): number;

        /**
         * @param args 
         */
        connect(...args: never[]): any;

        /**
         * Disconnects a previously connected message callback.
         * @param id the callback id as returned by `xed_message_bus_connect()`
         */
        disconnect(id: number): void;

        /**
         * Disconnects a previously connected message callback by matching the
         * provided callback function and userdata. See also
         * `xed_message_bus_disconnect()`.
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
         * Get the registered {@link Xed.MessageType} for `method` at `object_path`. The
         * returned {@link Xed.MessageType} is owned by the bus and should not be unreffed.
         * @param object_path the object path
         * @param method the method
         * @returns the registered {@link Xed.MessageType} or `null` if no message type               is registered for `method` at `object_path`
         */
        lookup(object_path: string, method: string): MessageType;

        /**
         * This sends the provided `message` asynchronously over the bus. To send
         * a message synchronously, use `xed_message_bus_send_message_sync()`. The
         * convenience function `xed_message_bus_send()` can be used to easily send
         * a message without constructing the message object explicitly first.
         * @param message the message to send
         */
        send_message(message: Message): void;

        /**
         * This sends the provided `message` synchronously over the bus. To send
         * a message asynchronously, use `xed_message_bus_send_message()`. The
         * convenience function `xed_message_bus_send_sync()` can be used to easily send
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
         * Unblocks the callback that matches provided `callback` and `userdata`.
         * @param object_path the object path
         * @param method the method
         * @param callback the callback to block
         */
        unblock_by_func(object_path: string, method: string, callback: MessageCallback): void;

        /**
         * Unregisters a previously registered message type. This is especially useful
         * for plugins which should unregister message types when they are deactivated.
         * 
         * This function emits the {@link Xed.MessageBus.SignalSignatures.unregistered | Xed.MessageBus::unregistered} signal.
         * @param message_type the {@link Xed.MessageType} to unregister
         */
        unregister(message_type: MessageType): void;

        /**
         * Unregisters all message types for `object_path`. This is especially useful for
         * plugins which should unregister message types when they are deactivated.
         * 
         * This function emits the {@link Xed.MessageBus.SignalSignatures.unregistered | Xed.MessageBus::unregistered} signal for all
         * unregistered message types.
         * @param object_path the object path
         */
        unregister_all(object_path: string): void;
    }


    namespace Notebook {
        // Signal signatures
        interface SignalSignatures extends Gtk.Notebook.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            "tab-added": (arg0: Tab) => void;
            /**
             * @signal
             * @run-last
             */
            "tab-close-request": (arg0: Tab) => void;
            /**
             * @signal
             * @run-first
             */
            "tab-detached": (arg0: Tab) => void;
            /**
             * @signal
             * @run-first
             */
            "tab-removed": (arg0: Tab) => void;
            /**
             * @signal
             * @run-first
             */
            "tabs-reordered": () => void;
            "notify::enable-popup": (pspec: GObject.ParamSpec) => void;
            "notify::group-name": (pspec: GObject.ParamSpec) => void;
            "notify::page": (pspec: GObject.ParamSpec) => void;
            "notify::scrollable": (pspec: GObject.ParamSpec) => void;
            "notify::show-border": (pspec: GObject.ParamSpec) => void;
            "notify::show-tabs": (pspec: GObject.ParamSpec) => void;
            "notify::tab-pos": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Notebook.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Notebook extends Gtk.Notebook implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Notebook>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Notebook.SignalSignatures;

        // Fields
        notebook: Gtk.Notebook;

        // Constructors
        constructor(properties?: Partial<Notebook.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Notebook;

        // Signals
        /** @signal */
        connect<K extends keyof Notebook.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Notebook.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Notebook.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Notebook.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Notebook.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Notebook.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param tab 
         * @virtual
         */
        vfunc_tab_added(tab: Tab): void;

        /**
         * @param tab 
         * @virtual
         */
        vfunc_tab_close_request(tab: Tab): void;

        /**
         * @param tab 
         * @virtual
         */
        vfunc_tab_detached(tab: Tab): void;

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
         * Adds the specified `tab` to the `nb`.
         * @param tab a {@link Xed.Tab}
         * @param position the position where the `tab` should be added
         * @param jump_to `true` to set the `tab` as active
         */
        add_tab(tab: Tab, position: number, jump_to: boolean): void;

        /**
         * Gets all {@link Xed.Tab} from `nb`.
         * @returns {@link GLib.List} of all tabs
         */
        get_all_tabs(): Gtk.Widget[];

        /**
         * Whether the close buttons are sensitive.
         * @returns `true` if the close buttons are sensitive
         */
        get_close_buttons_sensitive(): boolean;

        /**
         * Whether the drag and drop is enabled in the `nb`.
         * @returns `true` if the drag and drop is enabled.
         */
        get_tab_drag_and_drop_enabled(): boolean;

        /**
         * Whether notebook tab scrolling is enabled
         * @returns `true` if tab scrolling is enabled
         */
        get_tab_scrolling_enabled(): boolean;

        /**
         * Moves `tab` from `src` to `dest`.
         * If dest_position is greater than or equal to the number of tabs
         * of the destination nootebook or negative, tab will be moved to the
         * end of the tabs.
         * @param dest a {@link Xed.Notebook}
         * @param tab a {@link Xed.Tab}
         * @param dest_position the position for `tab`
         */
        move_tab(dest: Notebook, tab: Tab, dest_position: number): void;

        /**
         * Removes all {@link Xed.Tab} from `nb`.
         */
        remove_all_tabs(): void;

        /**
         * Removes `tab` from `nb`.
         * @param tab a {@link Xed.Tab}
         */
        remove_tab(tab: Tab): void;

        /**
         * Reorders the page containing `tab`, so that it appears in `dest_position` position.
         * If dest_position is greater than or equal to the number of tabs
         * of the destination notebook or negative, tab will be moved to the
         * end of the tabs.
         * @param tab a {@link Xed.Tab}
         * @param dest_position the position for `tab`
         */
        reorder_tab(tab: Tab, dest_position: number): void;

        /**
         * Sets whether the close buttons in the tabs of `nb` are sensitive.
         * @param sensitive `true` to make the buttons sensitive
         */
        set_close_buttons_sensitive(sensitive: boolean): void;

        /**
         * Sets whether drag and drop of tabs in the `nb` is enabled.
         * @param enable `true` to enable the drag and drop
         */
        set_tab_drag_and_drop_enabled(enable: boolean): void;

        /**
         * Sets whether tab scrolling in the `nb` is enabled.
         * @param enable `true` to enable tab scrolling
         */
        set_tab_scrolling_enabled(enable: boolean): void;
    }


    namespace Panel {
        // Signal signatures
        interface SignalSignatures extends Gtk.Bin.SignalSignatures {
            /**
             * @signal
             * @action
             * @run-last
             */
            close: () => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            "focus-document": () => void;
            /**
             * @signal
             * @run-first
             */
            "item-added": (arg0: Gtk.Widget) => void;
            /**
             * @signal
             * @run-first
             */
            "item-removed": (arg0: Gtk.Widget) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Bin.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            orientation: Gtk.Orientation;
        }
    }

    /**
     * @gir-type Class
     */
    class Panel extends Gtk.Bin implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Panel>;

        // Properties
        /**
         * @construct-only
         * @default Gtk.Orientation.VERTICAL
         */
        get orientation(): Gtk.Orientation;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Panel.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Panel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](orientation: Gtk.Orientation): Panel;

        // Signals
        /** @signal */
        connect<K extends keyof Panel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Panel.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Panel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Panel.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Panel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Panel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_close(): void;

        /**
         * @virtual
         */
        vfunc_focus_document(): void;

        /**
         * @param item 
         * @virtual
         */
        vfunc_item_added(item: Gtk.Widget): void;

        /**
         * @param item 
         * @virtual
         */
        vfunc_item_removed(item: Gtk.Widget): void;

        // Methods
        /**
         * Switches to the page that contains `item`.
         * @param item the item to be activated
         * @returns `true` if it was activated
         */
        activate_item(item: Gtk.Widget): boolean;

        /**
         * Adds a new item to the `panel`.
         * @param item the {@link Gtk.Widget} to add to the `panel`
         * @param name the name to be shown in the `panel`
         * @param icon_name the name of the icon to be shown in the `panel`
         */
        add_item(item: Gtk.Widget, name: string, icon_name: string): void;

        /**
         * Gets the number of items in a `panel`.
         * @returns the number of items contained in {@link Xed.Panel}
         */
        get_n_items(): number;

        /**
         * Gets the orientation of the `panel`.
         * @returns the {@link Gtk.Orientation} of {@link Xed.Panel}
         */
        get_orientation(): Gtk.Orientation;

        /**
         * Returns whether `item` is the active widget in `panel`
         * @param item a {@link Gtk.Widget}
         * @returns `true` if `item` is the active widget
         */
        item_is_active(item: Gtk.Widget): boolean;

        /**
         * Removes the widget `item` from the panel if it is in the `panel` and returns
         * `true` if there was not any problem.
         * @param item the item to be removed from the panel
         * @returns `true` if it was well removed.
         */
        remove_item(item: Gtk.Widget): boolean;
    }


    namespace ProgressInfoBar {
        // Signal signatures
        interface SignalSignatures extends Gtk.InfoBar.SignalSignatures {
            "notify::has-cancel-button": (pspec: GObject.ParamSpec) => void;
            "notify::message-type": (pspec: GObject.ParamSpec) => void;
            "notify::revealed": (pspec: GObject.ParamSpec) => void;
            "notify::show-close-button": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.InfoBar.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
            has_cancel_button: boolean;
            hasCancelButton: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class ProgressInfoBar extends Gtk.InfoBar implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<ProgressInfoBar>;

        // Properties
        /**
         * @construct-only
         * @default true
         */
        set has_cancel_button(val: boolean);

        /**
         * @construct-only
         * @default true
         */
        set hasCancelButton(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ProgressInfoBar.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ProgressInfoBar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](icon_name: string, markup: string, has_cancel: boolean): ProgressInfoBar;

        // Conflicted with Gtk.InfoBar.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof ProgressInfoBar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProgressInfoBar.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ProgressInfoBar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProgressInfoBar.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ProgressInfoBar.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ProgressInfoBar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        pulse(): void;

        /**
         * @param fraction 
         */
        set_fraction(fraction: number): void;

        /**
         * @param icon_name 
         */
        set_icon_name(icon_name: string): void;

        /**
         * @param markup 
         */
        set_markup(markup: string): void;

        /**
         * @param text 
         */
        set_text(text: string): void;
    }


    namespace Searchbar {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Searchbar extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<Searchbar>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Searchbar.SignalSignatures;

        // Fields
        
    // @ts-expect-error This property conflicts with an accessor in a parent class or interface.
    window: Window;

        // Constructors
        constructor(properties?: Partial<Searchbar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](parent: Gtk.Window): Searchbar;

        // Conflicted with Gtk.Box.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof Searchbar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Searchbar.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Searchbar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Searchbar.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Searchbar.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Searchbar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_show_replace(): boolean;

        // Methods
        /**
         * @param backward 
         */
        find_again(backward: boolean): void;

        get_backwards(): boolean;

        get_parse_escapes(): boolean;

        get_replace_text(): string;

        /**
         * Gets the search settings.
         * @returns {@link GtkSource.SearchSettings}
         */
        get_search_settings(): GtkSource.SearchSettings;

        get_search_text(): string;

        hide(): void;

        /**
         * @param parse_escapes 
         */
        set_parse_escapes(parse_escapes: boolean): void;

        /**
         * @param search_text 
         */
        set_search_text(search_text: string): void;

        /**
         * @param search_mode 
         */
        show(search_mode: SearchMode): void;

        /**
         * @param args 
         */
    // Conflicted with Gtk.Widget.show
        show(...args: never[]): any;

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


    namespace Statusbar {
        // Signal signatures
        interface SignalSignatures extends Gtk.Statusbar.SignalSignatures {
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Statusbar.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {}
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

        static ["new"](): Statusbar;

        // Signals
        /** @signal */
        connect<K extends keyof Statusbar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Statusbar.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Statusbar.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Statusbar.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Statusbar.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Statusbar.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        clear_overwrite(): void;

        /**
         * @param line 
         * @param col 
         */
        set_cursor_position(line: number, col: number): void;

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
            "notify::autosave": (pspec: GObject.ParamSpec) => void;
            "notify::autosave-interval": (pspec: GObject.ParamSpec) => void;
            "notify::can-close": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
            "notify::baseline-position": (pspec: GObject.ParamSpec) => void;
            "notify::homogeneous": (pspec: GObject.ParamSpec) => void;
            "notify::spacing": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::orientation": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Box.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Orientable.ConstructorProps {
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
        /**
         * @default true
         */
        get autosave(): boolean;
        set autosave(val: boolean);

        /**
         * @default 0
         */
        get autosave_interval(): number;
        set autosave_interval(val: number);

        /**
         * @default 0
         */
        get autosaveInterval(): number;
        set autosaveInterval(val: number);

        /**
         * @read-only
         * @default true
         */
        get can_close(): boolean;

        /**
         * @read-only
         * @default true
         */
        get canClose(): boolean;

        /**
         * @read-only
         * @default null
         */
        get name(): string;

        /**
         * @read-only
         * @default Xed.TabState.STATE_NORMAL
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

        // Fields
        vbox: Gtk.Box;

        // Constructors
        constructor(properties?: Partial<Tab.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Tab.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Tab.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Tab.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Tab.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Tab.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Tab.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Gets the {@link Xed.Tab} associated with `doc`.
         * @param doc a {@link Xed.Document}
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
         * Gets the {@link Xed.Document} associated to `tab`.
         * @returns the {@link Xed.Document} associated to `tab`
         */
        get_document(): Document;

        /**
         * Gets the {@link Xed.TabState} of `tab`.
         * @returns the {@link Xed.TabState} of `tab`
         */
        get_state(): TabState;

        /**
         * @param args 
         */
    // Conflicted with Gtk.Widget.get_state
        get_state(...args: never[]): any;

        /**
         * Gets the {@link Xed.View} inside `tab`.
         * @returns the {@link Xed.View} inside `tab`
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
             * @signal
             * @action
             * @run-last
             */
            "drop-uris": (arg0: string[]) => void;
            "notify::auto-indent": (pspec: GObject.ParamSpec) => void;
            "notify::background-pattern": (pspec: GObject.ParamSpec) => void;
            "notify::completion": (pspec: GObject.ParamSpec) => void;
            "notify::highlight-current-line": (pspec: GObject.ParamSpec) => void;
            "notify::indent-on-tab": (pspec: GObject.ParamSpec) => void;
            "notify::indent-width": (pspec: GObject.ParamSpec) => void;
            "notify::insert-spaces-instead-of-tabs": (pspec: GObject.ParamSpec) => void;
            "notify::right-margin-position": (pspec: GObject.ParamSpec) => void;
            "notify::show-line-marks": (pspec: GObject.ParamSpec) => void;
            "notify::show-line-numbers": (pspec: GObject.ParamSpec) => void;
            "notify::show-right-margin": (pspec: GObject.ParamSpec) => void;
            "notify::smart-backspace": (pspec: GObject.ParamSpec) => void;
            "notify::smart-home-end": (pspec: GObject.ParamSpec) => void;
            "notify::space-drawer": (pspec: GObject.ParamSpec) => void;
            "notify::tab-width": (pspec: GObject.ParamSpec) => void;
            "notify::accepts-tab": (pspec: GObject.ParamSpec) => void;
            "notify::bottom-margin": (pspec: GObject.ParamSpec) => void;
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::cursor-visible": (pspec: GObject.ParamSpec) => void;
            "notify::editable": (pspec: GObject.ParamSpec) => void;
            "notify::im-module": (pspec: GObject.ParamSpec) => void;
            "notify::indent": (pspec: GObject.ParamSpec) => void;
            "notify::input-hints": (pspec: GObject.ParamSpec) => void;
            "notify::input-purpose": (pspec: GObject.ParamSpec) => void;
            "notify::justification": (pspec: GObject.ParamSpec) => void;
            "notify::left-margin": (pspec: GObject.ParamSpec) => void;
            "notify::monospace": (pspec: GObject.ParamSpec) => void;
            "notify::overwrite": (pspec: GObject.ParamSpec) => void;
            "notify::pixels-above-lines": (pspec: GObject.ParamSpec) => void;
            "notify::pixels-below-lines": (pspec: GObject.ParamSpec) => void;
            "notify::pixels-inside-wrap": (pspec: GObject.ParamSpec) => void;
            "notify::populate-all": (pspec: GObject.ParamSpec) => void;
            "notify::right-margin": (pspec: GObject.ParamSpec) => void;
            "notify::tabs": (pspec: GObject.ParamSpec) => void;
            "notify::top-margin": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-mode": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GtkSource.View.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.Scrollable.ConstructorProps {}
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

        // Fields
        view: GtkSource.View;

        // Constructors
        constructor(properties?: Partial<View.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](doc: Document): View;

        // Conflicted with GtkSource.View.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof View.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, View.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof View.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, View.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof View.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<View.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param uri_list 
         * @virtual
         */
        vfunc_drop_uris(uri_list: string): void;

        // Methods
        copy_clipboard(): void;

        cut_clipboard(): void;

        /**
         * Deletes the text currently selected in the {@link Gtk.TextBuffer} associated
         * to the view and scroll to the cursor position.
         */
        delete_selection(): void;

        /**
         * Duplicates the text currently selected in the {@link Gtk.TextBuffer}
         * or duplicates the current line if nothing is selected
         */
        duplicate(): void;

        paste_clipboard(): void;

        /**
         * Scrolls the `view` to the cursor position.
         */
        scroll_to_cursor(): void;

        /**
         * Selects all the text displayed in the `view`.
         */
        select_all(): void;

        /**
         * Enables or disables rendering of any whitespace.
         * The locations and types of whitespace to render is set by
         * `xed_view_update_draw_whitespace_locations_and_types()`
         * @param enable whether whitespace should be drawn
         */
        set_draw_whitespace(enable: boolean): void;

        /**
         * If `def` is `TRUE`, resets the font of the `view` to the default font
         * otherwise sets it to `font_name`.
         * @param def whether to reset the default font
         * @param font_name the name of the font to use
         */
        set_font(def: boolean, font_name: string): void;

        /**
         * Updates the view to render whitespace at the locations and for types
         * set in the preferences
         */
        update_draw_whitespace_locations_and_types(): void;
    }


    namespace Window {
        // Signal signatures
        interface SignalSignatures extends Gtk.ApplicationWindow.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            "active-tab-changed": (arg0: Tab) => void;
            /**
             * @signal
             * @run-first
             */
            "active-tab-state-changed": () => void;
            /**
             * @signal
             * @run-first
             */
            "tab-added": (arg0: Tab) => void;
            /**
             * @signal
             * @run-first
             */
            "tab-removed": (arg0: Tab) => void;
            /**
             * @signal
             * @run-first
             */
            "tabs-reordered": () => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
            "notify::show-menubar": (pspec: GObject.ParamSpec) => void;
            "notify::accept-focus": (pspec: GObject.ParamSpec) => void;
            "notify::application": (pspec: GObject.ParamSpec) => void;
            "notify::attached-to": (pspec: GObject.ParamSpec) => void;
            "notify::decorated": (pspec: GObject.ParamSpec) => void;
            "notify::default-height": (pspec: GObject.ParamSpec) => void;
            "notify::default-width": (pspec: GObject.ParamSpec) => void;
            "notify::deletable": (pspec: GObject.ParamSpec) => void;
            "notify::destroy-with-parent": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-map": (pspec: GObject.ParamSpec) => void;
            "notify::focus-visible": (pspec: GObject.ParamSpec) => void;
            "notify::gravity": (pspec: GObject.ParamSpec) => void;
            "notify::has-resize-grip": (pspec: GObject.ParamSpec) => void;
            "notify::has-toplevel-focus": (pspec: GObject.ParamSpec) => void;
            "notify::hide-titlebar-when-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::is-active": (pspec: GObject.ParamSpec) => void;
            "notify::is-maximized": (pspec: GObject.ParamSpec) => void;
            "notify::mnemonics-visible": (pspec: GObject.ParamSpec) => void;
            "notify::modal": (pspec: GObject.ParamSpec) => void;
            "notify::resizable": (pspec: GObject.ParamSpec) => void;
            "notify::resize-grip-visible": (pspec: GObject.ParamSpec) => void;
            "notify::role": (pspec: GObject.ParamSpec) => void;
            "notify::screen": (pspec: GObject.ParamSpec) => void;
            "notify::skip-pager-hint": (pspec: GObject.ParamSpec) => void;
            "notify::skip-taskbar-hint": (pspec: GObject.ParamSpec) => void;
            "notify::startup-id": (pspec: GObject.ParamSpec) => void;
            "notify::title": (pspec: GObject.ParamSpec) => void;
            "notify::transient-for": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::type-hint": (pspec: GObject.ParamSpec) => void;
            "notify::urgency-hint": (pspec: GObject.ParamSpec) => void;
            "notify::window-position": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.ApplicationWindow.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gio.ActionGroup.ConstructorProps, Gio.ActionMap.ConstructorProps, Gtk.Buildable.ConstructorProps {
            state: WindowState;
        }
    }

    /**
     * @gir-type Class
     */
    class Window extends Gtk.ApplicationWindow implements Atk.ImplementorIface, Gio.ActionGroup, Gio.ActionMap, Gtk.Buildable {
        static $gtype: GObject.GType<Window>;

        // Properties
        /**
         * @read-only
         * @default Xed.WindowState.NORMAL
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
        connect<K extends keyof Window.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Window.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Window.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Window.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Window.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Window.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
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
         * @param tab the {@link Xed.Tab} to close
         */
        close_tab(tab: Tab): void;

        /**
         * Closes all tabs specified by `tabs`.
         * @param tabs a list of {@link Xed.Tab}
         */
        close_tabs(tabs: Tab[]): void;

        /**
         * Creates a new {@link Xed.Tab} and adds the new tab to the {@link Xed.Notebook}.
         * In case `jump_to` is `true` the {@link Xed.Notebook} switches to that new {@link Xed.Tab}.
         * @param jump_to `true` to set the new {@link Xed.Tab} as active
         * @returns a new {@link Xed.Tab}
         */
        create_tab(jump_to: boolean): Tab;

        /**
         * Creates a new {@link Xed.Tab} loading the document specified by `uri`.
         * In case `jump_to` is `true` the {@link Xed.Notebook} swithes to that new {@link Xed.Tab}.
         * Whether `create` is `true`, creates a new empty document if location does
         * not refer to an existing file
         * @param location the location of the document
         * @param encoding a {@link GtkSource.Encoding}
         * @param line_pos the line position to visualize
         * @param create `true` to create a new document in case `uri` does exist
         * @param jump_to `true` to set the new {@link Xed.Tab} as active
         * @returns a new {@link Xed.Tab}
         */
        create_tab_from_location(location: Gio.File, encoding: GtkSource.Encoding | null, line_pos: number, create: boolean, jump_to: boolean): Tab;

        /**
         * @param stream the {@link Gio.InputStream}
         * @param encoding the encoding to use in the stream
         * @param line_pos the position
         * @param jump_to whether to jump to the new tab
         * @returns the active {@link Xed.Tab} in the `window`.
         */
        create_tab_from_stream(stream: Gio.InputStream, encoding: GtkSource.Encoding, line_pos: number, jump_to: boolean): Tab;

        /**
         * Gets the active {@link Xed.Document}.
         * @returns the active {@link Xed.Document}
         */
        get_active_document(): Document;

        /**
         * Gets the active {@link Xed.Tab} in the `window`.
         * @returns the active {@link Xed.Tab} in the `window`.
         */
        get_active_tab(): Tab;

        /**
         * Gets the active {@link Xed.View}.
         * @returns the active {@link Xed.View}
         */
        get_active_view(): View;

        /**
         * Gets the bottom {@link Xed.Panel} of the `window`.
         * @returns the bottom {@link Xed.Panel}.
         */
        get_bottom_panel(): Panel;

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
         * Gets the {@link Xed.MessageBus} associated with `window`. The returned reference
         * is owned by the window and should not be unreffed.
         * @returns the {@link Xed.MessageBus} associated with `window`
         */
        get_message_bus(): MessageBus;

        /**
         * Gets the {@link Xed.Searchbar} of the `window`.
         * @returns the {@link Xed.Searchbar} of the `window`.
         */
        get_searchbar(): Gtk.Widget;

        /**
         * Gets the side {@link Xed.Panel} of the `window`.
         * @returns the side {@link Xed.Panel}.
         */
        get_side_panel(): Panel;

        /**
         * Retrieves the state of the `window`.
         * @returns the current {@link Xed.WindowState} of the `window`.
         */
        get_state(): WindowState;

        /**
         * @param args 
         */
    // Conflicted with Gtk.Widget.get_state
        get_state(...args: never[]): any;

        /**
         * Gets the {@link Xed.Statusbar} of the `window`.
         * @returns the {@link Xed.Statusbar} of the `window`.
         */
        get_statusbar(): Gtk.Widget;

        /**
         * Gets the {@link Xed.Tab} that matches with the given `location`.
         * @param location a {@link Gio.File}
         * @returns the {@link Xed.Tab} that matches with the given `location`.
         */
        get_tab_from_location(location: Gio.File): Tab;

        /**
         * Gets the {@link Gtk.UIManager} associated with the `window`.
         * @returns the {@link Gtk.UIManager} of the `window`.
         */
        get_ui_manager(): Gtk.UIManager;

        /**
         * Gets the list of documents that need to be saved before closing the window.
         * @returns a list of {@link Xed.Document} that need to be saved before closing the window
         */
        get_unsaved_documents(): Document[];

        /**
         * Gets a list with all the views in the window. This list must be freed.
         * @returns a newly allocated list with all the views in the window
         */
        get_views(): View[];

        /**
         * Switches to the tab that matches with `tab`.
         * @param tab a {@link Xed.Tab}
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
        query_action(action_name: string): [boolean, boolean, GLib.VariantType | null, GLib.VariantType | null, GLib.Variant | null, GLib.Variant | null];

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
        vfunc_query_action(action_name: string): [boolean, boolean, GLib.VariantType | null, GLib.VariantType | null, GLib.Variant | null, GLib.Variant | null];

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
     * @gir-type Struct
     */
    abstract class AppPrivate {
        static $gtype: GObject.GType<AppPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type DocumentClass = typeof Document;

    /**
     * @gir-type Alias
     */
    type EncodingsComboBoxClass = typeof EncodingsComboBox;

    /**
     * @gir-type Struct
     */
    abstract class EncodingsComboBoxPrivate {
        static $gtype: GObject.GType<EncodingsComboBoxPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type FileChooserDialogClass = typeof FileChooserDialog;

    /**
     * @gir-type Struct
     */
    abstract class FileChooserDialogPrivate {
        static $gtype: GObject.GType<FileChooserDialogPrivate>;
    }


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
     * @gir-type Struct
     */
    class MessageType {
        static $gtype: GObject.GType<MessageType>;

        // Constructors
        constructor(object_path: string | null, method: string | null, num_optional: number, ___: any[]);

        // Static methods
        /**
         * Get the string identifier for `method` at `object_path`.
         * @param object_path the object path
         * @param method the method
         */
        static identifier(object_path: string | null, method: string | null): string;

        /**
         * Returns if `type` is {@link GObject.GType} supported by the message system.
         * @param type the {@link GObject.GType}
         */
        static is_supported(type: GObject.GType): boolean;

        /**
         * Returns whether `object_path` is a valid object path
         * @param object_path the object path
         */
        static is_valid_object_path(object_path: string | null): boolean;

        // Methods
        /**
         * Calls `func` for each argument in the message type.
         * @param func the callback function
         */
        foreach(func: MessageTypeForeach): void;

        /**
         * Get the message type method.
         * @returns the message type method
         */
        get_method(): string;

        /**
         * Get the message type object path.
         * @returns the message type object path
         */
        get_object_path(): string;

        /**
         * Get the argument key {@link GObject.GType}.
         * @param key the argument key
         * @returns the {@link GObject.GType} of `key`
         */
        lookup(key: string): GObject.GType;

        /**
         * Increases the reference count on `message_type`.
         * @returns `message_type`
         */
        ref(): MessageType;

        /**
         * Decreases the reference count on `message_type`. When the reference count
         * drops to 0, `message_type` is destroyed.
         */
        unref(): void;
    }


    /**
     * @gir-type Alias
     */
    type NotebookClass = typeof Notebook;

    /**
     * @gir-type Struct
     */
    abstract class NotebookPrivate {
        static $gtype: GObject.GType<NotebookPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type PanelClass = typeof Panel;

    /**
     * @gir-type Struct
     */
    abstract class PanelPrivate {
        static $gtype: GObject.GType<PanelPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ProgressInfoBarClass = typeof ProgressInfoBar;

    /**
     * @gir-type Struct
     */
    abstract class ProgressInfoBarPrivate {
        static $gtype: GObject.GType<ProgressInfoBarPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type SearchbarClass = typeof Searchbar;

    /**
     * @gir-type Struct
     */
    abstract class SearchbarPrivate {
        static $gtype: GObject.GType<SearchbarPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type StatusbarClass = typeof Statusbar;

    /**
     * @gir-type Struct
     */
    abstract class StatusbarPrivate {
        static $gtype: GObject.GType<StatusbarPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type TabClass = typeof Tab;

    /**
     * @gir-type Struct
     */
    abstract class TabPrivate {
        static $gtype: GObject.GType<TabPrivate>;
    }


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
         * The app property contains the xed app for this
         * {@link Xed.AppActivatable} instance.
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
         * The window property contains the xed window for this
         * {@link Xed.ViewActivatable} instance.
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
             * Triggers an update of the extension insternal state to take into account
             * state changes in the window state, due to some event or user action.
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
         * The window property contains the xed window for this
         * {@link Xed.WindowActivatable} instance.
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
         * Triggers an update of the extension insternal state to take into account
         * state changes in the window state, due to some event or user action.
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

export default Xed;

// END
