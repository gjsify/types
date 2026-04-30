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

export namespace Pluma {
    /**
     * Pluma-1.0
     */

    /**
     * @gir-type Enum
     */
    export namespace DocumentNewlineType {
        export const $gtype: GObject.GType<DocumentNewlineType>;
    }

    /**
     * @gir-type Enum
     */
    enum DocumentNewlineType {
        LF,
        CR,
        CR_LF,
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
     * Do nothing if uri does not exist
     * @param window
     * @param uri
     * @param encoding
     * @param line_pos
     */
    function commands_load_uri(window: Window, uri: string, encoding: Encoding | null, line_pos: number): void;
    /**
     * @param window
     */
    function commands_save_all_documents(window: Window): void;
    /**
     * @param window
     * @param document
     */
    function commands_save_document(window: Window, document: Document): void;
    /**
     * @param section
     * @param file
     * @param line
     * @param _function
     */
    function debug(section: DebugSection, file: string, line: number, _function: string): void;
    function debug_init(): void;
    /**
     * @param dialog
     * @param text
     * @param icon_name
     * @param response_id
     */
    function dialog_add_button(dialog: Gtk.Dialog, text: string, icon_name: string, response_id: number): Gtk.Widget;
    function encoding_get_current(): Encoding;
    /**
     * @param charset
     */
    function encoding_get_from_charset(charset: string): Encoding;
    /**
     * @param index
     */
    function encoding_get_from_index(index: number): Encoding;
    function encoding_get_utf8(): Encoding;
    /**
     * @param label
     * @param icon_name
     */
    function gtk_button_new_with_icon(label: string, icon_name: string): Gtk.Widget;
    /**
     * @param iter
     * @param str
     * @param flags
     * @param match_start
     * @param match_end
     * @param limit
     * @param forward_search
     * @param replace_text
     */
    function gtk_text_iter_regex_search(
        iter: Gtk.TextIter,
        str: string,
        flags: Gtk.TextSearchFlags,
        match_start: Gtk.TextIter,
        match_end: Gtk.TextIter,
        limit: Gtk.TextIter,
        forward_search: boolean,
        replace_text: string,
    ): boolean;
    /**
     * @param parent
     * @param name
     * @param link_id
     */
    function help_display(parent: Gtk.Window, name: string, link_id: string): boolean;
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
     * @param view
     * @param item
     * @param font
     */
    function override_font(view: View, item: string, font: Pango.FontDescription): void;
    /**
     * @param view
     * @param level
     * @param type
     */
    function set_source_space_drawer_by_level(
        view: GtkSource.View,
        level: number,
        type: GtkSource.SpaceTypeFlags,
    ): void;
    /**
     * Return the basename of a file suitable for display to users.
     * @param uri uri for which the basename should be displayed
     */
    function utils_basename_for_display(uri: string): string;
    /**
     * Parse and break an uri apart in its individual components like the uri
     * scheme, user info, port, host and path. The return value pointer can be
     * `null` to ignore certain parts of the uri. If the function returns `true`, then
     * all return value pointers should be freed using g_free
     * @param uri the uri to decode
     * @param scheme return value pointer for the uri's scheme (e.g. http, sftp, ...), or `null`
     * @param user return value pointer for the uri user info, or `null`
     * @param host return value pointer for the uri host, or `null`
     * @param port return value pointer for the uri port, or `null`
     * @param path return value pointer for the uri path, or `null`
     * @returns `true` if the uri could be properly decoded, `false` otherwise.
     */
    function utils_decode_uri(
        uri: string,
        scheme: string | null,
        user: string | null,
        host: string | null,
        port: string | null,
        path: string | null,
    ): boolean;
    /**
     * Create a list of valid uri's from a uri-list drop.
     * @param selection_data the {@link Gtk.SelectionData} from drag_data_received
     * @returns a string array which will hold the uris or `null` if there 	 were no valid uris. g_strfreev should be used when the 	 string array is no longer used
     */
    function utils_drop_get_uris(selection_data: Gtk.SelectionData): string[];
    /**
     * @param text
     */
    function utils_escape_search_text(text: string): string;
    /**
     * @param text
     * @param length
     */
    function utils_escape_underscores(text: string, length: bigint | number): string;
    /**
     * Return `true` if the specified gfile has a parent (is not the root), `false`
     * otherwise
     * @param gfile the GFile to check the parent for
     */
    function utils_file_has_parent(gfile: Gio.File): boolean;
    /**
     * Get the current viewport origin
     *
     * Get the currently visible viewport origin for the {@link Gdk.Screen}.
     *
     * If the X11 window property isn't found, (0, 0) is returned.
     * @param screen
     * @param x
     * @param y
     */
    function utils_get_current_viewport(screen: Gdk.Screen, x: number, y: number): void;
    /**
     * Get the current workspace
     *
     * Get the currently visible workspace for the {@link Gdk.Screen}.
     *
     * If the X11 window property isn't found, 0 (the first workspace)
     * is returned.
     * @param screen
     */
    function utils_get_current_workspace(screen: Gdk.Screen): number;
    /**
     * Get the workspace the window is on
     *
     * This function gets the workspace that the {@link Gtk.Window} is visible on,
     * it returns PLUMA_ALL_WORKSPACES if the window is sticky, or if
     * the window manager doesn support this function
     * @param gtkwindow
     */
    function utils_get_window_workspace(gtkwindow: Gtk.Window): number;
    /**
     * @param uri
     */
    function utils_is_valid_uri(uri: string): boolean;
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
     * @param str
     */
    function utils_make_canonical_uri_from_shell_arg(str: string): string;
    /**
     * @param name
     */
    function utils_make_valid_utf8(name: string): string;
    /**
     * @param menu
     * @param x
     * @param y
     * @param push_in
     * @param user_data
     */
    function utils_menu_position_under_widget(
        menu: Gtk.Menu,
        x: number,
        y: number,
        push_in: boolean,
        user_data: any | null,
    ): void;
    /**
     * @param uri
     */
    function utils_replace_home_dir_with_tilde(uri: string): string;
    /**
     * This function sets up name and description
     * for a specified gtk widget.
     * @param widget The Gtk widget for which name/description to be set
     * @param name Atk name string
     * @param description Atk description string
     */
    function utils_set_atk_name_description(widget: Gtk.Widget, name: string, description: string): void;
    /**
     * @param obj1
     * @param obj2
     * @param rel_type
     */
    function utils_set_atk_relation(obj1: Gtk.Widget, obj2: Gtk.Widget, rel_type: Atk.RelationType): void;
    /**
     * @param string
     * @param truncate_length
     */
    function utils_str_end_truncate(string: string, truncate_length: number): string;
    /**
     * @param string
     * @param truncate_length
     */
    function utils_str_middle_truncate(string: string, truncate_length: number): string;
    /**
     * @param text
     */
    function utils_unescape_search_text(text: string): string;
    /**
     * @param text_uri
     */
    function utils_uri_exists(text_uri: string): boolean;
    /**
     * Filter, modify, unescape and change `uri` to make it appropriate
     * for display to users.
     *
     * This function is a convenient wrapper for g_file_get_parse_name
     * @param uri uri to be displayed.
     * @returns a string which represents `uri` and can be displayed.
     */
    function utils_uri_for_display(uri: string): string;
    /**
     * Note: this function replace home dir with ~
     * @param uri
     */
    function utils_uri_get_dirname(uri: string): string;
    /**
     * @param uri
     */
    function utils_uri_has_file_scheme(uri: string): boolean;
    /**
     * @param uri
     */
    function utils_uri_has_writable_scheme(uri: string): boolean;
    /**
     * @gir-type Callback
     */
    interface MessageBusForeach {
        (message_type: MessageType, userdata: any | null): void;
    }
    /**
     * @gir-type Callback
     */
    interface MessageCallback {
        (bus: MessageBus, message: Message, userdata: any | null): void;
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
    export namespace DocumentSaveFlags {
        export const $gtype: GObject.GType<DocumentSaveFlags>;
    }

    /**
     * @gir-type Flags
     */
    enum DocumentSaveFlags {
        /**
         * save file despite external modifications.
         */
        IGNORE_MTIME,
        /**
         * write the file directly without attempting to backup.
         */
        IGNORE_BACKUP,
        /**
         * preserve previous backup file, needed to support autosaving.
         */
        PRESERVE_BACKUP,
    }

    /**
     * @gir-type Flags
     */
    export namespace LockdownMask {
        export const $gtype: GObject.GType<LockdownMask>;
    }

    /**
     * @gir-type Flags
     */
    enum LockdownMask {
        COMMAND_LINE,
        PRINTING,
        PRINT_SETUP,
        SAVE_TO_DISK,
        ALL,
    }

    /**
     * @gir-type Flags
     */
    export namespace SearchFlags {
        export const $gtype: GObject.GType<SearchFlags>;
    }

    /**
     * @gir-type Flags
     */
    enum SearchFlags {
        DONT_SET_FLAGS,
        ENTIRE_WORD,
        CASE_SENSITIVE,
        PARSE_ESCAPES,
        MATCH_REGEX,
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
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::lockdown': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            lockdown: LockdownMask;
        }
    }

    /**
     * @gir-type Class
     */
    class App extends GObject.Object {
        static $gtype: GObject.GType<App>;

        // Properties

        /**
         * @read-only
         * @default 0
         */
        get lockdown(): LockdownMask;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: App.SignalSignatures;

        // Fields

        object: GObject.Object;

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

        // Static methods

        /**
         * Returns the {@link Pluma.App} object. This object is a singleton and
         * represents the running pluma instance.
         */
        static get_default(): App;

        // Methods

        /**
         * Create a new {@link Pluma.Window} part of `app`.
         * @param screen
         * @returns the new {@link Pluma.Window}
         */
        create_window(screen: Gdk.Screen | null): Window;
        /**
         * Retrives the {@link Pluma.Window} currently active.
         * @returns the active {@link Pluma.Window}
         */
        get_active_window(): Window;
        /**
         * Returns all the documents currently open in {@link Pluma.App}.
         * @returns a newly allocated list of {@link Pluma.Document} objects
         */
        get_documents(): Document[];
        /**
         * Gets the lockdown mask (see {@link Pluma.LockdownMask}) for the application.
         * The lockdown mask determines which functions are locked down using
         * the MATE-wise lockdown GSettings keys.
         */
        get_lockdown(): LockdownMask;
        /**
         * Returns all the views currently present in {@link Pluma.App}.
         * @returns a newly allocated list of {@link Pluma.View} objects
         */
        get_views(): View[];
        /**
         * Returns all the windows currently present in {@link Pluma.App}.
         * @returns the list of `PlumaWindows` objects. The list should not be freed
         */
        get_windows(): Window[];
    }

    namespace Application {
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
    class Application extends Gtk.Application implements Gio.ActionGroup, Gio.ActionMap {
        static $gtype: GObject.GType<Application>;

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

        static ['new'](): Application;

        // Signals

        /** @signal */
        connect<K extends keyof Application.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Application.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Application.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Application.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Application.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Application.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Document {
        // Signal signatures
        interface SignalSignatures extends GtkSource.Buffer.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            'cursor-moved': () => void;
            /**
             * The "load" signal is emitted when a document is loaded.
             * @signal
             * @run-last
             */
            load: (arg0: string, arg1: Encoding, arg2: number, arg3: boolean) => void;
            /**
             * @signal
             * @run-last
             */
            loaded: (arg0: any | null) => void;
            /**
             * @signal
             * @run-last
             */
            loading: (arg0: number, arg1: number) => void;
            /**
             * The "save" signal is emitted when the document is saved.
             * @signal
             * @run-last
             */
            save: (arg0: string, arg1: Encoding, arg2: DocumentSaveFlags) => void;
            /**
             * @signal
             * @run-last
             */
            saved: (arg0: any | null) => void;
            /**
             * @signal
             * @run-last
             */
            saving: (arg0: number, arg1: number) => void;
            /**
             * @signal
             * @run-last
             */
            'search-highlight-updated': (arg0: Gtk.TextIter, arg1: Gtk.TextIter) => void;
            'notify::can-search-again': (pspec: GObject.ParamSpec) => void;
            'notify::content-type': (pspec: GObject.ParamSpec) => void;
            'notify::enable-search-highlighting': (pspec: GObject.ParamSpec) => void;
            'notify::encoding': (pspec: GObject.ParamSpec) => void;
            'notify::mime-type': (pspec: GObject.ParamSpec) => void;
            'notify::newline-type': (pspec: GObject.ParamSpec) => void;
            'notify::read-only': (pspec: GObject.ParamSpec) => void;
            'notify::shortname': (pspec: GObject.ParamSpec) => void;
            'notify::uri': (pspec: GObject.ParamSpec) => void;
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
            can_search_again: boolean;
            canSearchAgain: boolean;
            content_type: string;
            contentType: string;
            enable_search_highlighting: boolean;
            enableSearchHighlighting: boolean;
            encoding: Encoding;
            mime_type: string;
            mimeType: string;
            newline_type: DocumentNewlineType;
            newlineType: DocumentNewlineType;
            read_only: boolean;
            readOnly: boolean;
            shortname: string;
            uri: string;
        }
    }

    /**
     * @gir-type Class
     */
    class Document extends GtkSource.Buffer {
        static $gtype: GObject.GType<Document>;

        // Properties

        /**
         * @read-only
         * @default false
         */
        get can_search_again(): boolean;
        /**
         * @read-only
         * @default false
         */
        get canSearchAgain(): boolean;
        /**
         * @default null
         */
        get content_type(): string;
        set content_type(val: string);
        /**
         * @default null
         */
        get contentType(): string;
        set contentType(val: string);
        /**
         * @default false
         */
        get enable_search_highlighting(): boolean;
        set enable_search_highlighting(val: boolean);
        /**
         * @default false
         */
        get enableSearchHighlighting(): boolean;
        set enableSearchHighlighting(val: boolean);
        /**
         * @read-only
         */
        get encoding(): Encoding;
        /**
         * @read-only
         * @default text/plain
         */
        get mime_type(): string;
        /**
         * @read-only
         * @default text/plain
         */
        get mimeType(): string;
        /**
         * The :newline-type property determines what is considered
         * as a line ending when saving the document
         * @default Pluma.DocumentNewlineType.LF
         */
        get newline_type(): DocumentNewlineType;
        set newline_type(val: DocumentNewlineType);
        /**
         * The :newline-type property determines what is considered
         * as a line ending when saving the document
         * @default Pluma.DocumentNewlineType.LF
         */
        get newlineType(): DocumentNewlineType;
        set newlineType(val: DocumentNewlineType);
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
         * @default null
         */
        get shortname(): string;
        set shortname(val: string);
        /**
         * @read-only
         * @default null
         */
        get uri(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Document.SignalSignatures;

        // Fields

        buffer: GtkSource.Buffer;

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

        // Static methods

        static error_quark(): GLib.Quark;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_cursor_moved(): void;
        /**
         * Load a document. This results in the "load" signal to be emitted.
         * @param uri the uri where to load the document from.
         * @param encoding the {@link Pluma.Encoding} to encode the document.
         * @param line_pos the line to show.
         * @param create whether the document should be created if it doesn't exist.
         * @virtual
         */
        vfunc_load(uri: string, encoding: Encoding, line_pos: number, create: boolean): void;
        /**
         * @param error
         * @virtual
         */
        vfunc_loaded(error: GLib.Error): void;
        /**
         * @param size
         * @param total_size
         * @virtual
         */
        vfunc_loading(size: number, total_size: number): void;
        /**
         * @param uri
         * @param encoding
         * @param flags
         * @virtual
         */
        vfunc_save(uri: string, encoding: Encoding, flags: DocumentSaveFlags): void;
        /**
         * @param error
         * @virtual
         */
        vfunc_saved(error: GLib.Error): void;
        /**
         * @param size
         * @param total_size
         * @virtual
         */
        vfunc_saving(size: number, total_size: number): void;
        /**
         * @param start
         * @param end
         * @virtual
         */
        vfunc_search_highlight_updated(start: Gtk.TextIter, end: Gtk.TextIter): void;

        // Methods

        get_can_search_again(): boolean;
        get_content_type(): string;
        get_deleted(): boolean;
        get_enable_search_highlighting(): boolean;
        get_encoding(): Encoding;
        get_language(): GtkSource.Language;
        /**
         * @param args
         */
        // Conflicted with GtkSource.Buffer.get_language
        get_language(...args: never[]): any;
        get_last_replace_text(): string;
        /**
         * @returns a new {@link Gio.File}
         */
        get_location(): Gio.File | null;
        /**
         * Gets the metadata assigned to `key`.
         * @param key name of the key
         * @returns the value assigned to `key`.
         */
        get_metadata(key: string): string;
        /**
         * Note: this never returns `null`.
         */
        get_mime_type(): string;
        get_newline_type(): DocumentNewlineType;
        get_readonly(): boolean;
        /**
         * @param flags
         */
        get_search_text(flags: number | null): string;
        /**
         * Note: this never returns `null`.
         */
        get_short_name_for_display(): string;
        get_uri(): string;
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
        /**
         * @param iter
         * @param uri
         * @param encoding
         */
        insert_file(iter: Gtk.TextIter, uri: string, encoding: Encoding): boolean;
        is_local(): boolean;
        is_untitled(): boolean;
        is_untouched(): boolean;
        /**
         * Load a document. This results in the "load" signal to be emitted.
         * @param uri the uri where to load the document from.
         * @param encoding the {@link Pluma.Encoding} to encode the document.
         * @param line_pos the line to show.
         * @param create whether the document should be created if it doesn't exist.
         */
        load(uri: string, encoding: Encoding, line_pos: number, create: boolean): void;
        /**
         * Cancel load of a document.
         */
        load_cancel(): boolean;
        /**
         * @param find
         * @param replace
         * @param flags
         */
        replace_all(find: string, replace: string, flags: number): number;
        /**
         * Save the document to its previous location. This results in the "save"
         * signal to be emitted.
         * @param flags optionnal {@link Pluma.DocumentSaveFlags}.
         */
        save(flags: DocumentSaveFlags): void;
        /**
         * Save the document to a new location. This results in the "save" signal
         * to be emitted.
         * @param uri the uri where to save the document.
         * @param encoding the {@link Pluma.Encoding} to encode the document.
         * @param flags optionnal {@link Pluma.DocumentSaveFlags}.
         */
        save_as(uri: string, encoding: Encoding, flags: DocumentSaveFlags): void;
        /**
         * @param start
         * @param end
         * @param match_start
         * @param match_end
         */
        search_backward(
            start: Gtk.TextIter | null,
            end: Gtk.TextIter | null,
            match_start: Gtk.TextIter | null,
            match_end: Gtk.TextIter | null,
        ): boolean;
        /**
         * @param start
         * @param end
         * @param match_start
         * @param match_end
         */
        search_forward(
            start: Gtk.TextIter | null,
            end: Gtk.TextIter | null,
            match_start: Gtk.TextIter | null,
            match_end: Gtk.TextIter | null,
        ): boolean;
        /**
         * @param content_type
         */
        set_content_type(content_type: string | null): void;
        /**
         * @param enable
         */
        set_enable_search_highlighting(enable: boolean): void;
        /**
         * @param lang
         */
        set_language(lang: GtkSource.Language | null): void;
        /**
         * @param text
         */
        set_last_replace_text(text: string | null): void;
        /**
         * @param newline_type
         */
        set_newline_type(newline_type: DocumentNewlineType): void;
        /**
         * @param text
         * @param flags
         */
        set_search_text(text: string | null, flags: number): void;
        /**
         * @param name
         */
        set_short_name_for_display(name: string | null): void;
        /**
         * @param uri
         */
        set_uri(uri: string): void;
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

        get_selected_encoding(): Encoding;
        /**
         * @param encoding
         */
        set_selected_encoding(encoding: Encoding | null): void;
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

    namespace Message {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::method': (pspec: GObject.ParamSpec) => void;
            'notify::object-path': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
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

        // Methods

        /**
         * Get the type of a message argument.
         * @param key the argument key
         * @returns the type of `key`
         */
        get_key_type(key: string): GObject.GType;
        get_message_type(): any | null;
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
         * Get the default application {@link Pluma.MessageBus}.
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
         * using `pluma_message_bus_unblock()`.
         * @param id the callback id
         */
        block(id: number): void;
        /**
         * Blocks evoking the callback that matches provided `callback` and `userdata`.
         * Unblock the callback using `pluma_message_unblock_by_func()`.
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
         * @param id the callback id as returned by `pluma_message_bus_connect()`
         */
        disconnect(id: number): void;
        /**
         * Disconnects a previously connected message callback by matching the
         * provided callback function and userdata. See also
         * `pluma_message_bus_disconnect()`.
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
         * Get the registered {@link Pluma.MessageType} for `method` at `object_path`. The
         * returned {@link Pluma.MessageType} is owned by the bus and should not be unreffed.
         * @param object_path the object path
         * @param method the method
         * @returns the registered {@link Pluma.MessageType} or `null` if no message type               is registered for `method` at `object_path`
         */
        lookup(object_path: string, method: string): MessageType;
        /**
         * This sends the provided `message` asynchronously over the bus. To send
         * a message synchronously, use `pluma_message_bus_send_message_sync()`. The
         * convenience function `pluma_message_bus_send()` can be used to easily send
         * a message without constructing the message object explicitly first.
         * @param message the message to send
         */
        send_message(message: Message): void;
        /**
         * This sends the provided `message` synchronously over the bus. To send
         * a message asynchronously, use `pluma_message_bus_send_message()`. The
         * convenience function `pluma_message_bus_send_sync()` can be used to easily send
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
         * This function emits the {@link Pluma.MessageBus.SignalSignatures.unregistered | Pluma.MessageBus::unregistered} signal.
         * @param message_type the {@link Pluma.MessageType} to unregister
         */
        unregister(message_type: MessageType): void;
        /**
         * Unregisters all message types for `object_path`. This is especially useful for
         * plugins which should unregister message types when they are deactivated.
         *
         * This function emits the {@link Pluma.MessageBus.SignalSignatures.unregistered | Pluma.MessageBus::unregistered} signal for all
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
            'tab-added': (arg0: Tab) => void;
            /**
             * @signal
             * @run-last
             */
            'tab-close-request': (arg0: Tab) => void;
            /**
             * @signal
             * @run-first
             */
            'tab-detached': (arg0: Tab) => void;
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
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Notebook.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {}
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

        static ['new'](): Notebook;

        // Signals

        /** @signal */
        connect<K extends keyof Notebook.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Notebook.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Notebook.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Notebook.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Notebook.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Notebook.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
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
         * @param tab a {@link Pluma.Tab}
         * @param position the position where the `tab` should be added
         * @param jump_to `true` to set the `tab` as active
         */
        add_tab(tab: Tab, position: number, jump_to: boolean): void;
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
         * Moves `tab` from `src` to `dest`.
         * If dest_position is greater than or equal to the number of tabs
         * of the destination nootebook or negative, tab will be moved to the
         * end of the tabs.
         * @param dest a {@link Pluma.Notebook}
         * @param tab a {@link Pluma.Tab}
         * @param dest_position the position for `tab`
         */
        move_tab(dest: Notebook, tab: Tab, dest_position: number): void;
        /**
         * Removes all {@link Pluma.Tab} from `nb`.
         */
        remove_all_tabs(): void;
        /**
         * Removes `tab` from `nb`.
         * @param tab a {@link Pluma.Tab}
         */
        remove_tab(tab: Tab): void;
        /**
         * Reorders the page containing `tab`, so that it appears in `dest_position` position.
         * If dest_position is greater than or equal to the number of tabs
         * of the destination notebook or negative, tab will be moved to the
         * end of the tabs.
         * @param tab a {@link Pluma.Tab}
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
    }

    namespace Panel {
        // Signal signatures
        interface SignalSignatures extends Gtk.Box.SignalSignatures {
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
            'focus-document': () => void;
            /**
             * @signal
             * @run-first
             */
            'item-added': (arg0: Gtk.Widget) => void;
            /**
             * @signal
             * @run-first
             */
            'item-removed': (arg0: Gtk.Widget) => void;
            'notify::panel-orientation': (pspec: GObject.ParamSpec) => void;
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
            'notify::orientation': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gtk.Box.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps {
            panel_orientation: Gtk.Orientation;
            panelOrientation: Gtk.Orientation;
        }
    }

    /**
     * @gir-type Class
     */
    class Panel extends Gtk.Box implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<Panel>;

        // Properties

        /**
         * @construct-only
         * @default Gtk.Orientation.VERTICAL
         */
        get panel_orientation(): Gtk.Orientation;
        /**
         * @construct-only
         * @default Gtk.Orientation.VERTICAL
         */
        get panelOrientation(): Gtk.Orientation;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Panel.SignalSignatures;

        // Fields

        vbox: Gtk.Box;

        // Constructors

        constructor(properties?: Partial<Panel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](orientation: Gtk.Orientation): Panel;

        // Signals

        /** @signal */
        connect<K extends keyof Panel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Panel.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Panel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Panel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Panel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Panel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
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
         * @param image the image to be shown in the `panel`
         */
        add_item(item: Gtk.Widget, name: string, image: Gtk.Widget): void;
        /**
         * Same as `pluma_panel_add_item()` but using an image from icon name.
         * @param item the {@link Gtk.Widget} to add to the `panel`
         * @param name the name to be shown in the `panel`
         * @param icon_name a icon name
         */
        add_item_with_icon(item: Gtk.Widget, name: string, icon_name: string): void;
        /**
         * Gets the number of items in a `panel`.
         * @returns the number of items contained in {@link Pluma.Panel}
         */
        get_n_items(): number;
        /**
         * Gets the orientation of the `panel`.
         * @returns the {@link Gtk.Orientation} of {@link Pluma.Panel}
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
        /**
         * The orientation of the orientable.
         * @since 2.16
         * @default Gtk.Orientation.HORIZONTAL
         * @category Inherited from Gtk.Orientable
         */
        get orientation(): Gtk.Orientation;
        set orientation(val: Gtk.Orientation);
        /**
         * Sets the orientation of the `orientable`.
         * @param orientation the orientable’s new orientation.
         */
        set_orientation(orientation: Gtk.Orientation): void;
    }

    namespace ProgressMessageArea {
        // Signal signatures
        interface SignalSignatures extends Gtk.InfoBar.SignalSignatures {
            'notify::has-cancel-button': (pspec: GObject.ParamSpec) => void;
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
            extends
                Gtk.InfoBar.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps,
                Gtk.Orientable.ConstructorProps {
            has_cancel_button: boolean;
            hasCancelButton: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class ProgressMessageArea extends Gtk.InfoBar implements Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {
        static $gtype: GObject.GType<ProgressMessageArea>;

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
        $signals: ProgressMessageArea.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ProgressMessageArea.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](image_id: string, markup: string, has_cancel: boolean): ProgressMessageArea;
        // Conflicted with Gtk.InfoBar.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof ProgressMessageArea.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ProgressMessageArea.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ProgressMessageArea.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ProgressMessageArea.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ProgressMessageArea.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ProgressMessageArea.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        pulse(): void;
        /**
         * @param fraction
         */
        set_fraction(fraction: number): void;
        /**
         * @param image_id
         */
        set_image(image_id: string): void;
        /**
         * @param markup
         */
        set_markup(markup: string): void;
        /**
         * @param text
         */
        set_text(text: string): void;
    }

    namespace StatusComboBox {
        // Signal signatures
        interface SignalSignatures extends Gtk.EventBox.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            changed: (arg0: Gtk.MenuItem) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::above-child': (pspec: GObject.ParamSpec) => void;
            'notify::visible-window': (pspec: GObject.ParamSpec) => void;
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
                Gtk.EventBox.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Gtk.Buildable.ConstructorProps {
            label: string;
        }
    }

    /**
     * @gir-type Class
     */
    class StatusComboBox extends Gtk.EventBox implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<StatusComboBox>;

        // Properties

        /**
         * @default null
         */
        get label(): string;
        set label(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StatusComboBox.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<StatusComboBox.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](label: string | null): StatusComboBox;
        // Conflicted with Gtk.EventBox.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof StatusComboBox.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StatusComboBox.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof StatusComboBox.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StatusComboBox.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof StatusComboBox.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StatusComboBox.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param item
         * @virtual
         */
        vfunc_changed(item: Gtk.MenuItem): void;

        // Methods

        /**
         * @param item
         * @param text
         */
        add_item(item: Gtk.MenuItem, text: string | null): void;
        /**
         * @param item
         */
        get_item_text(item: Gtk.MenuItem): string;
        get_items(): Gtk.Widget[];
        get_label(): string;
        /**
         * @param item
         */
        remove_item(item: Gtk.MenuItem): void;
        /**
         * @param item
         */
        set_item(item: Gtk.MenuItem): void;
        /**
         * @param item
         * @param text
         */
        set_item_text(item: Gtk.MenuItem, text: string | null): void;
        /**
         * @param label
         */
        set_label(label: string | null): void;
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
            'notify::autosave': (pspec: GObject.ParamSpec) => void;
            'notify::autosave-interval': (pspec: GObject.ParamSpec) => void;
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
         * @default null
         */
        get name(): string;
        /**
         * @read-only
         * @default Pluma.TabState.STATE_NORMAL
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
         * Gets the {@link Pluma.Tab} associated with `doc`.
         * @param doc a {@link Pluma.Document}
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
         * Gets the {@link Pluma.Document} associated to `tab`.
         * @returns the {@link Pluma.Document} associated to `tab`
         */
        get_document(): Document;
        /**
         * Gets the {@link Pluma.TabState} of `tab`.
         * @returns the {@link Pluma.TabState} of `tab`
         */
        get_state(): TabState;
        /**
         * @param args
         */
        // Conflicted with Gtk.Widget.get_state
        get_state(...args: never[]): any;
        /**
         * Gets the {@link Pluma.View} inside `tab`.
         * @returns the {@link Pluma.View} inside `tab`
         */
        get_view(): View;
        /**
         * Enables or disables the autosave feature. It does not install an
         * autosave timeout if the document is new or is read-only
         * @param enable enable (`true`) or disable (`false`) auto save
         */
        set_auto_save_enabled(enable: boolean): void;
        /**
         * Sets the interval for the autosave feature. It does nothing if the
         * interval is the same as the one already present. It removes the old
         * interval timeout and adds a new one with the autosave passed as
         * argument.
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
            'drop-uris': (arg0: string[]) => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            'reset-searched-text': () => boolean | void;
            /**
             * @signal
             * @action
             * @run-last
             */
            'start-interactive-goto-line': () => boolean | void;
            /**
             * @signal
             * @action
             * @run-last
             */
            'start-interactive-search': () => boolean | void;
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

        // Fields

        view: GtkSource.View;

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
        /**
         * @virtual
         */
        vfunc_reset_searched_text(): boolean;
        /**
         * @virtual
         */
        vfunc_start_interactive_goto_line(): boolean;
        /**
         * @virtual
         */
        vfunc_start_interactive_search(): boolean;

        // Methods

        copy_clipboard(): void;
        cut_clipboard(): void;
        /**
         * Deletes the text currently selected in the {@link Gtk.TextBuffer} associated
         * to the view and scroll to the cursor position.
         */
        delete_selection(): void;
        invert_case_selection(): void;
        lower_case_selection(): void;
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
         * If `def` is `TRUE`, resets the font of the `view` to the default font
         * otherwise sets it to `font_name`.
         * @param def whether to reset the default font
         * @param font_name the name of the font to use
         */
        set_font(def: boolean, font_name: string): void;
        title_case_selection(): void;
        upper_case_selection(): void;
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
         * @default Pluma.WindowState.NORMAL
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
         * @param tab the {@link Pluma.Tab} to close
         */
        close_tab(tab: Tab): void;
        /**
         * Closes all tabs specified by `tabs`.
         * @param tabs a list of {@link Pluma.Tab}
         */
        close_tabs(tabs: Tab[]): void;
        /**
         * Creates a new {@link Pluma.Tab} and adds the new tab to the {@link Pluma.Notebook}.
         * In case `jump_to` is `true` the {@link Pluma.Notebook} switches to that new {@link Pluma.Tab}.
         * @param jump_to `true` to set the new {@link Pluma.Tab} as active
         * @returns a new {@link Pluma.Tab}
         */
        create_tab(jump_to: boolean): Tab;
        /**
         * Creates a new {@link Pluma.Tab} loading the document specified by `uri`.
         * In case `jump_to` is `true` the {@link Pluma.Notebook} swithes to that new {@link Pluma.Tab}.
         * Whether `create` is `true`, creates a new empty document if location does
         * not refer to an existing file
         * @param uri the uri of the document
         * @param encoding a {@link Pluma.Encoding}
         * @param line_pos the line position to visualize
         * @param create `true` to create a new document in case `uri` does exist
         * @param jump_to `true` to set the new {@link Pluma.Tab} as active
         * @returns a new {@link Pluma.Tab}
         */
        create_tab_from_uri(uri: string, encoding: Encoding, line_pos: number, create: boolean, jump_to: boolean): Tab;
        /**
         * Gets the active {@link Pluma.Document}.
         * @returns the active {@link Pluma.Document}
         */
        get_active_document(): Document;
        /**
         * Gets the active {@link Pluma.Tab} in the `window`.
         * @returns the active {@link Pluma.Tab} in the `window`.
         */
        get_active_tab(): Tab;
        /**
         * Gets the active {@link Pluma.View}.
         * @returns the active {@link Pluma.View}
         */
        get_active_view(): View;
        /**
         * Gets the bottom {@link Pluma.Panel} of the `window`.
         * @returns the bottom {@link Pluma.Panel}.
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
         * Gets the {@link Pluma.MessageBus} associated with `window`. The returned reference
         * is owned by the window and should not be unreffed.
         * @returns the {@link Pluma.MessageBus} associated with `window`
         */
        get_message_bus(): MessageBus;
        /**
         * Gets the side {@link Pluma.Panel} of the `window`.
         * @returns the side {@link Pluma.Panel}.
         */
        get_side_panel(): Panel;
        /**
         * Retrieves the state of the `window`.
         * @returns the current {@link Pluma.WindowState} of the `window`.
         */
        get_state(): WindowState;
        /**
         * @param args
         */
        // Conflicted with Gtk.Widget.get_state
        get_state(...args: never[]): any;
        /**
         * Gets the {@link Pluma.Statusbar} of the `window`.
         * @returns the {@link Pluma.Statusbar} of the `window`.
         */
        get_statusbar(): Gtk.Widget;
        /**
         * Gets the {@link Pluma.Tab} that matches with the given `location`.
         * @param location a {@link Gio.File}
         * @returns the {@link Pluma.Tab} that matches with the given `location`.
         */
        get_tab_from_location(location: Gio.File): Tab;
        /**
         * Gets the {@link Gtk.UIManager} associated with the `window`.
         * @returns the {@link Gtk.UIManager} of the `window`.
         */
        get_ui_manager(): Gtk.UIManager;
        /**
         * Gets the list of documents that need to be saved before closing the window.
         * @returns a list of {@link Pluma.Document} that need to be saved before closing the window
         */
        get_unsaved_documents(): Document[];
        /**
         * Gets a list with all the views in the window. This list must be freed.
         * @returns a newly allocated list with all the views in the window
         */
        get_views(): View[];
        /**
         * Switches to the tab that matches with `tab`.
         * @param tab a {@link Pluma.Tab}
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
     * @gir-type Struct
     */
    abstract class AppPrivate {
        static $gtype: GObject.GType<AppPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ApplicationClass = typeof Application;
    /**
     * @gir-type Struct
     */
    abstract class ApplicationPrivate {
        static $gtype: GObject.GType<ApplicationPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DocumentClass = typeof Document;
    /**
     * @gir-type Struct
     */
    abstract class DocumentPrivate {
        static $gtype: GObject.GType<DocumentPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class Encoding {
        static $gtype: GObject.GType<Encoding>;

        // Static methods

        static get_current(): Encoding;
        /**
         * @param charset
         */
        static get_from_charset(charset: string): Encoding;
        /**
         * @param index
         */
        static get_from_index(index: number): Encoding;
        static get_utf8(): Encoding;

        // Methods

        copy(): Encoding;
        free(): void;
        get_charset(): string;
        get_name(): string;
        to_string(): string;
    }

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
    type ProgressMessageAreaClass = typeof ProgressMessageArea;
    /**
     * @gir-type Struct
     */
    abstract class ProgressMessageAreaPrivate {
        static $gtype: GObject.GType<ProgressMessageAreaPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type StatusComboBoxClass = typeof StatusComboBox;
    /**
     * @gir-type Struct
     */
    abstract class StatusComboBoxPrivate {
        static $gtype: GObject.GType<StatusComboBoxPrivate>;
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
         * The app property contains the pluma app for this
         * {@link Pluma.AppActivatable} instance.
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
         * The window property contains the pluma window for this
         * {@link Pluma.ViewActivatable} instance.
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
         * The window property contains the pluma window for this
         * {@link Pluma.WindowActivatable} instance.
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

export default Pluma;

// END
