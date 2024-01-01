
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gedit-3.0-ambient.d.ts';
import './gedit-3.0-import.d.ts';
/**
 * Gedit-3.0
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

export enum TabState {
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
 * Enumeration of debug sections.
 * 
 * Debugging output for a section is enabled by setting an environment variable
 * of the same name. For example, setting the <code>GEDIT_DEBUG_PLUGINS</code>
 * environment variable enables all debugging output for the %GEDIT_DEBUG_PLUGINS
 * section. Setting the special environment variable <code>GEDIT_DEBUG</code>
 * enables output for all sections.
 * @bitfield 
 */
export enum DebugSection {
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
export enum WindowState {
    NORMAL,
    SAVING,
    PRINTING,
    LOADING,
    ERROR,
}
/**
 * Loads `location`. Ignores non-existing locations.
 * @param window a #GeditWindow
 * @param location a #GFile to load
 * @param encoding the #GtkSourceEncoding of `location`
 * @param line_pos the line position to place the cursor
 * @param column_pos the line column to place the cursor
 */
export function commands_load_location(window: Window, location: Gio.File, encoding: GtkSource.Encoding | null, line_pos: number, column_pos: number): void
/**
 * Loads `locations`. Ignore non-existing locations.
 * @param window a #GeditWindow
 * @param locations the locations to load
 * @param encoding the #GtkSourceEncoding
 * @param line_pos the line position to place the cursor
 * @param column_pos the line column to place the cursor
 * @returns the locations that were loaded.
 */
export function commands_load_locations(window: Window, locations: Gio.File[], encoding: GtkSource.Encoding | null, line_pos: number, column_pos: number): Document[]
/**
 * Asynchronously save all documents belonging to `window`. The result of the
 * operation is not available, so it's difficult to know whether all the
 * documents are correctly saved.
 * @param window a #GeditWindow.
 */
export function commands_save_all_documents(window: Window): void
/**
 * Asynchronously save `document`. `document` must belong to `window`. If you need
 * the result of the operation, use gedit_commands_save_document_async().
 * @param window a #GeditWindow.
 * @param document the #GeditDocument to save.
 */
export function commands_save_document(window: Window, document: Document): void
/**
 * Asynchronously save the `document`. `document` must belong to `window`. The
 * source object of the async task is `document` (which will be the first
 * parameter of the #GAsyncReadyCallback).
 * 
 * When the operation is finished, `callback` will be called. You can then call
 * gedit_commands_save_document_finish() to get the result of the operation.
 * @param document the #GeditDocument to save.
 * @param window a #GeditWindow.
 * @param cancellable optional #GCancellable object, %NULL to ignore.
 * @param callback a #GAsyncReadyCallback to call when the operation   is finished.
 */
export function commands_save_document_async<Z = unknown>(document: Document, window: Window, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Z> | null): void

// Overloads of commands_save_document_async

/**
 * Promisified version of {@link commands_save_document_async}
 * 
 * Asynchronously save the `document`. `document` must belong to `window`. The
 * source object of the async task is `document` (which will be the first
 * parameter of the #GAsyncReadyCallback).
 * 
 * When the operation is finished, `callback` will be called. You can then call
 * gedit_commands_save_document_finish() to get the result of the operation.
 * @param document the #GeditDocument to save.
 * @param window a #GeditWindow.
 * @param cancellable optional #GCancellable object, %NULL to ignore.
 * @returns A Promise of: %TRUE if the document has been correctly saved, %FALSE otherwise.
 */
export function commands_save_document_async<Z = unknown>(document: Document, window: Window, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
/**
 * Finishes an asynchronous document saving operation started with
 * gedit_commands_save_document_async().
 * 
 * Note that there is no error parameter because the errors are already handled
 * by gedit.
 * @param document a #GeditDocument.
 * @param result a #GAsyncResult.
 * @returns %TRUE if the document has been correctly saved, %FALSE otherwise.
 */
export function commands_save_document_finish(document: Document, result: Gio.AsyncResult): boolean
/**
 * If `section` is enabled, then logs the trace information `file,` `line,` and
 * `function`.
 * @param section debug section.
 * @param file file name.
 * @param line line number.
 * @param function_ name of the function that is calling gedit_debug().
 */
export function debug(section: DebugSection, file: string, line: number, function_: string): void
/**
 * Initializes the debugging subsystem of gedit.
 * 
 * The function checks for the existence of certain environment variables to
 * determine whether to enable output for a debug section. To enable output
 * for a specific debug section, set an environment variable of the same name;
 * e.g. to enable output for the %GEDIT_DEBUG_PLUGINS section, set a
 * <code>GEDIT_DEBUG_PLUGINS</code> environment variable. To enable output
 * for all debug sections, set the <code>GEDIT_DEBUG</code> environment
 * variable.
 * 
 * This function must be called before any of the other debug functions are
 * called. It must only be called once.
 */
export function debug_init(): void
/**
 * If the section %GEDIT_DEBUG_PLUGINS is enabled, then logs the trace
 * information `file,` `line,` and `function` along with `message`.
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
 * It automatically supplies parameters `file,` `line,` and `function,` and it
 * formats <code>format_str</code> with the given format arguments. The syntax
 * of the format string is the usual Python string formatting syntax described
 * by <ulink url="http://docs.python.org/library/stdtypes.html#string-formatting">5.6.2. String Formatting Operations</ulink>.
 * @param file file name.
 * @param line line number.
 * @param function_ name of the function that is calling gedit_debug_plugin_message().
 * @param message a message.
 */
export function debug_plugin_message(file: string, line: number, function_: string, message: string): void
export function utils_basename_for_display(location: Gio.File): string | null
/**
 * Create a list of valid uri's from a uri-list drop.
 * @param selection_data the #GtkSelectionData from drag_data_received
 * @returns a string array which will hold the uris or           %NULL if there were no valid uris. g_strfreev should be used when           the string array is no longer used
 */
export function utils_drop_get_uris(selection_data: Gtk.SelectionData): string[]
export function utils_get_compression_type_from_content_type(content_type: string): GtkSource.CompressionType
export function utils_is_valid_location(location: Gio.File): boolean
/**
 * Returns a string suitable to be displayed in the UI indicating
 * the name of the directory where the file is located.
 * For remote files it may also contain the hostname etc.
 * For local files it tries to replace the home dir with ~.
 * @param location the location
 * @returns a string to display the dirname
 */
export function utils_location_get_dirname_for_display(location: Gio.File): string | null
export function utils_menu_position_under_tree_view(tree_view: Gtk.TreeView, rect: Gdk.Rectangle): boolean
export function utils_newline_type_to_string(newline_type: GtkSource.NewlineType): string
/**
 * This function sets up name and description
 * for a specified gtk widget.
 * @param widget The Gtk widget for which name/description to be set
 * @param name Atk name string
 * @param description Atk description string
 */
export function utils_set_atk_name_description(widget: Gtk.Widget, name: string, description: string): void
export function utils_set_direct_save_filename(context: Gdk.DragContext): string | null
export interface MessageBusForeach {
    (object_path: string, method: string): void
}
/**
 * Callback signature used for connecting callback functions to be called
 * when a message is received (see gedit_message_bus_connect()).
 * @callback 
 * @param bus the #GeditMessageBus on which the message was sent
 * @param message the #GeditMessage which was sent
 */
export interface MessageCallback {
    (bus: MessageBus, message: Message): void
}
export module AppActivatable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gedit-3.0.Gedit.AppActivatable

        /**
         * The app property contains the gedit app for this
         * #GeditAppActivatable instance.
         */
        app?: App | null
    }

}

export interface AppActivatable {

    // Own properties of Gedit-3.0.Gedit.AppActivatable

    /**
     * The app property contains the gedit app for this
     * #GeditAppActivatable instance.
     */
    readonly app: App

    // Owm methods of Gedit-3.0.Gedit.AppActivatable

    /**
     * Activates the extension on the application.
     */
    activate(): void
    /**
     * Deactivates the extension from the application.
     */
    deactivate(): void
    /**
     * Gets the #GeditMenuExtension for the menu `extension_point`. Note that
     * the extension point could be in different menus (gear menu, app menu, etc)
     * depending on the platform.
     * @param extension_point the extension point section of the menu to get.
     * @returns a #GeditMenuExtension for the specific section or %NULL if not found.
     */
    extend_menu(extension_point: string): MenuExtension

    // Own virtual methods of Gedit-3.0.Gedit.AppActivatable

    /**
     * Activates the extension on the application.
     * @virtual 
     */
    vfunc_activate(): void
    /**
     * Deactivates the extension from the application.
     * @virtual 
     */
    vfunc_deactivate(): void

    // Class property signals of Gedit-3.0.Gedit.AppActivatable

    connect(sigName: "notify::app", callback: (($obj: AppActivatable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app", callback: (($obj: AppActivatable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class AppActivatable extends GObject.Object {

    // Own properties of Gedit-3.0.Gedit.AppActivatable

    static name: string
    static $gtype: GObject.GType<AppActivatable>

    // Constructors of Gedit-3.0.Gedit.AppActivatable

    constructor(config?: AppActivatable.ConstructorProperties) 
    _init(config?: AppActivatable.ConstructorProperties): void
}

export module ViewActivatable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gedit-3.0.Gedit.ViewActivatable

        /**
         * The window property contains the gedit window for this
         * #GeditViewActivatable instance.
         */
        view?: View | null
    }

}

export interface ViewActivatable {

    // Own properties of Gedit-3.0.Gedit.ViewActivatable

    /**
     * The window property contains the gedit window for this
     * #GeditViewActivatable instance.
     */
    readonly view: View

    // Owm methods of Gedit-3.0.Gedit.ViewActivatable

    /**
     * Activates the extension on the window property.
     */
    activate(): void
    /**
     * Deactivates the extension on the window property.
     */
    deactivate(): void

    // Own virtual methods of Gedit-3.0.Gedit.ViewActivatable

    /**
     * Activates the extension on the window property.
     * @virtual 
     */
    vfunc_activate(): void
    /**
     * Deactivates the extension on the window property.
     * @virtual 
     */
    vfunc_deactivate(): void

    // Class property signals of Gedit-3.0.Gedit.ViewActivatable

    connect(sigName: "notify::view", callback: (($obj: ViewActivatable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::view", callback: (($obj: ViewActivatable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ViewActivatable extends GObject.Object {

    // Own properties of Gedit-3.0.Gedit.ViewActivatable

    static name: string
    static $gtype: GObject.GType<ViewActivatable>

    // Constructors of Gedit-3.0.Gedit.ViewActivatable

    constructor(config?: ViewActivatable.ConstructorProperties) 
    _init(config?: ViewActivatable.ConstructorProperties): void
}

export module WindowActivatable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gedit-3.0.Gedit.WindowActivatable

        /**
         * The window property contains the gedit window for this
         * #GeditWindowActivatable instance.
         */
        window?: Window | null
    }

}

export interface WindowActivatable {

    // Own properties of Gedit-3.0.Gedit.WindowActivatable

    /**
     * The window property contains the gedit window for this
     * #GeditWindowActivatable instance.
     */
    readonly window: Window

    // Owm methods of Gedit-3.0.Gedit.WindowActivatable

    /**
     * Activates the extension on the window property.
     */
    activate(): void
    /**
     * Deactivates the extension on the window property.
     */
    deactivate(): void
    /**
     * Triggers an update of the extension internal state to take into account
     * state changes in the window, due to some event or user action.
     */
    update_state(): void

    // Own virtual methods of Gedit-3.0.Gedit.WindowActivatable

    /**
     * Activates the extension on the window property.
     * @virtual 
     */
    vfunc_activate(): void
    /**
     * Deactivates the extension on the window property.
     * @virtual 
     */
    vfunc_deactivate(): void
    /**
     * Triggers an update of the extension internal state to take into account
     * state changes in the window, due to some event or user action.
     * @virtual 
     */
    vfunc_update_state(): void

    // Class property signals of Gedit-3.0.Gedit.WindowActivatable

    connect(sigName: "notify::window", callback: (($obj: WindowActivatable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: WindowActivatable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class WindowActivatable extends GObject.Object {

    // Own properties of Gedit-3.0.Gedit.WindowActivatable

    static name: string
    static $gtype: GObject.GType<WindowActivatable>

    // Constructors of Gedit-3.0.Gedit.WindowActivatable

    constructor(config?: WindowActivatable.ConstructorProperties) 
    _init(config?: WindowActivatable.ConstructorProperties): void
}

export module App {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.ActionGroup.ConstructorProperties, Gio.ActionMap.ConstructorProperties, Gtk.Application.ConstructorProperties {
    }

}

export interface App extends Gio.ActionGroup, Gio.ActionMap {

    // Own fields of Gedit-3.0.Gedit.App

    parent_instance: Gtk.Application

    // Owm methods of Gedit-3.0.Gedit.App

    /**
     * Create a new #GeditWindow part of `app`.
     * @param screen 
     * @returns the new #GeditWindow
     */
    create_window(screen: Gdk.Screen | null): Window
    /**
     * Returns all the documents currently open in #GeditApp.
     * @returns  a newly allocated list of #GeditDocument objects
     */
    get_documents(): Document[]
    /**
     * Returns all #GeditWindows currently open in #GeditApp.
     * This differs from gtk_application_get_windows() since it does not
     * include the preferences dialog and other auxiliary windows.
     * @returns  a newly allocated list of #GeditWindow objects
     */
    get_main_windows(): Window[]
    /**
     * Returns all the views currently present in #GeditApp.
     * @returns  a newly allocated list of #GeditView objects
     */
    get_views(): View[]
    process_window_event(window: Window, event: Gdk.Event): boolean
    set_window_title(window: Window, title: string): void
    show_help(parent: Gtk.Window, name: string, link_id: string): boolean

    // Own virtual methods of Gedit-3.0.Gedit.App

    vfunc_help_link_id(name: string, link_id: string): string | null
    vfunc_process_window_event(window: Window, event: Gdk.Event): boolean
    vfunc_set_window_title(window: Window, title: string): void
    vfunc_show_help(parent: Gtk.Window, name: string, link_id: string): boolean

    // Class property signals of Gedit-3.0.Gedit.App

    connect(sigName: "notify::active-window", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-window", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-window", ...args: any[]): void
    connect(sigName: "notify::app-menu", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-menu", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-menu", ...args: any[]): void
    connect(sigName: "notify::menubar", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menubar", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::menubar", ...args: any[]): void
    connect(sigName: "notify::register-session", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::register-session", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::register-session", ...args: any[]): void
    connect(sigName: "notify::screensaver-active", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screensaver-active", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::screensaver-active", ...args: any[]): void
    connect(sigName: "notify::action-group", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-group", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-group", ...args: any[]): void
    connect(sigName: "notify::application-id", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-id", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application-id", ...args: any[]): void
    connect(sigName: "notify::flags", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::inactivity-timeout", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inactivity-timeout", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::inactivity-timeout", ...args: any[]): void
    connect(sigName: "notify::is-busy", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-busy", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-busy", ...args: any[]): void
    connect(sigName: "notify::is-registered", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-registered", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-registered", ...args: any[]): void
    connect(sigName: "notify::is-remote", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-remote", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-remote", ...args: any[]): void
    connect(sigName: "notify::resource-base-path", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resource-base-path", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resource-base-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class App extends Gtk.Application {

    // Own properties of Gedit-3.0.Gedit.App

    static name: string
    static $gtype: GObject.GType<App>

    // Constructors of Gedit-3.0.Gedit.App

    constructor(config?: App.ConstructorProperties) 
    _init(config?: App.ConstructorProperties): void

    // Conflicting static methods

    static new(...args: any[]): any
}

export module Document {

    // Signal callback interfaces

    /**
     * Signal callback interface for `load`
     */
    export interface LoadSignalCallback {
        ($obj: Document): void
    }

    /**
     * Signal callback interface for `loaded`
     */
    export interface LoadedSignalCallback {
        ($obj: Document): void
    }

    /**
     * Signal callback interface for `save`
     */
    export interface SaveSignalCallback {
        ($obj: Document): void
    }

    /**
     * Signal callback interface for `saved`
     */
    export interface SavedSignalCallback {
        ($obj: Document): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GtkSource.Buffer.ConstructorProperties {

        // Own constructor properties of Gedit-3.0.Gedit.Document

        /**
         * The document's content type.
         */
        content_type?: string | null
        /**
         * The document's content type.
         */
        contentType?: string | null
    }

}

export interface Document {

    // Own properties of Gedit-3.0.Gedit.Document

    /**
     * The document's content type.
     */
    content_type: string | null
    /**
     * The document's content type.
     */
    contentType: string | null
    /**
     * <warning>
     * The property is used internally by gedit. It must not be used in a
     * gedit plugin. The property can be modified or removed at any time.
     * </warning>
     */
    readonly empty_search: boolean
    /**
     * <warning>
     * The property is used internally by gedit. It must not be used in a
     * gedit plugin. The property can be modified or removed at any time.
     * </warning>
     */
    readonly emptySearch: boolean
    /**
     * The document's MIME type.
     */
    readonly mime_type: string | null
    /**
     * The document's MIME type.
     */
    readonly mimeType: string | null

    // Conflicting properties

    parent_instance: Gtk.TextBuffer & GObject.Object & GObject.Object
    priv: any & Gtk.TextBufferPrivate

    // Owm methods of Gedit-3.0.Gedit.Document

    get_content_type(): string | null
    /**
     * Gets the associated #GtkSourceFile. You should use it only for reading
     * purposes, not for creating a #GtkSourceFileLoader or #GtkSourceFileSaver,
     * because gedit does some extra work when loading or saving a file and
     * maintains an internal state. If you use in a plugin a file loader or saver on
     * the returned #GtkSourceFile, the internal state of gedit won't be updated.
     * 
     * If you want to save the #GeditDocument to a secondary file, you can create a
     * new #GtkSourceFile and use a #GtkSourceFileSaver.
     * @returns the associated #GtkSourceFile.
     */
    get_file(): GtkSource.File
    get_language(): GtkSource.Language

    // Overloads of get_language

    /**
     * Returns the #GtkSourceLanguage associated with the buffer,
     * see gtk_source_buffer_set_language().  The returned object should not be
     * unreferenced by the user.
     * @returns the #GtkSourceLanguage associated with the buffer, or %NULL.
     */
    get_language(): GtkSource.Language | null
    /**
     * Gets the metadata assigned to `key`.
     * @param key name of the key
     * @returns the value assigned to @key. Free with g_free().
     */
    get_metadata(key: string): string | null
    /**
     * Note: this never returns %NULL.
     */
    get_mime_type(): string | null
    /**
     * Gets the search context. Use this function only if you have used
     * gedit_document_set_search_context() before. You should not alter other search
     * contexts, so you have to verify that the returned search context is yours.
     * One way to verify that is to compare the search settings object, or to mark
     * the search context with g_object_set_data().
     * @returns the current search context of the document, or NULL if there is no current search context.
     */
    get_search_context(): GtkSource.SearchContext
    /**
     * Note: this never returns %NULL.
     */
    get_short_name_for_display(): string | null
    is_untitled(): boolean
    set_language(lang: GtkSource.Language | null): void
    /**
     * Sets the new search context for the document. Use this function only when the
     * search occurrences are highlighted. So this function should not be used for
     * background searches. The purpose is to have only one highlighted search
     * context at a time in the document.
     * 
     * After using this function, you should unref the `search_context`. The `doc`
     * should be the only owner of the `search_context,` so that the Clear Highlight
     * action works. If you need the `search_context` after calling this function,
     * use gedit_document_get_search_context().
     * @param search_context the new #GtkSourceSearchContext
     */
    set_search_context(search_context: GtkSource.SearchContext | null): void

    // Own virtual methods of Gedit-3.0.Gedit.Document

    vfunc_load(): void
    vfunc_loaded(): void
    vfunc_save(): void
    vfunc_saved(): void

    // Own signals of Gedit-3.0.Gedit.Document

    connect(sigName: "load", callback: Document.LoadSignalCallback): number
    connect_after(sigName: "load", callback: Document.LoadSignalCallback): number
    emit(sigName: "load", ...args: any[]): void
    connect(sigName: "loaded", callback: Document.LoadedSignalCallback): number
    connect_after(sigName: "loaded", callback: Document.LoadedSignalCallback): number
    emit(sigName: "loaded", ...args: any[]): void
    connect(sigName: "save", callback: Document.SaveSignalCallback): number
    connect_after(sigName: "save", callback: Document.SaveSignalCallback): number
    emit(sigName: "save", ...args: any[]): void
    connect(sigName: "saved", callback: Document.SavedSignalCallback): number
    connect_after(sigName: "saved", callback: Document.SavedSignalCallback): number
    emit(sigName: "saved", ...args: any[]): void

    // Class property signals of Gedit-3.0.Gedit.Document

    connect(sigName: "notify::content-type", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-type", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::empty-search", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::empty-search", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::empty-search", ...args: any[]): void
    connect(sigName: "notify::mime-type", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mime-type", ...args: any[]): void
    connect(sigName: "notify::can-redo", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-redo", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-redo", ...args: any[]): void
    connect(sigName: "notify::can-undo", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-undo", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-undo", ...args: any[]): void
    connect(sigName: "notify::highlight-matching-brackets", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highlight-matching-brackets", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::highlight-matching-brackets", ...args: any[]): void
    connect(sigName: "notify::highlight-syntax", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::highlight-syntax", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::highlight-syntax", ...args: any[]): void
    connect(sigName: "notify::implicit-trailing-newline", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::implicit-trailing-newline", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::implicit-trailing-newline", ...args: any[]): void
    connect(sigName: "notify::language", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::language", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::language", ...args: any[]): void
    connect(sigName: "notify::max-undo-levels", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-undo-levels", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-undo-levels", ...args: any[]): void
    connect(sigName: "notify::style-scheme", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style-scheme", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style-scheme", ...args: any[]): void
    connect(sigName: "notify::undo-manager", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::undo-manager", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::undo-manager", ...args: any[]): void
    connect(sigName: "notify::copy-target-list", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::copy-target-list", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::copy-target-list", ...args: any[]): void
    connect(sigName: "notify::cursor-position", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-position", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor-position", ...args: any[]): void
    connect(sigName: "notify::has-selection", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-selection", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-selection", ...args: any[]): void
    connect(sigName: "notify::paste-target-list", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::paste-target-list", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::paste-target-list", ...args: any[]): void
    connect(sigName: "notify::tag-table", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag-table", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tag-table", ...args: any[]): void
    connect(sigName: "notify::text", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Document extends GtkSource.Buffer {

    // Own properties of Gedit-3.0.Gedit.Document

    static name: string
    static $gtype: GObject.GType<Document>

    // Constructors of Gedit-3.0.Gedit.Document

    constructor(config?: Document.ConstructorProperties) 
    constructor() 
    static new(): Document

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
    _init(config?: Document.ConstructorProperties): void
}

export module EncodingsComboBox {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.CellEditable.ConstructorProperties, Gtk.CellLayout.ConstructorProperties, Gtk.ComboBox.ConstructorProperties {

        // Own constructor properties of Gedit-3.0.Gedit.EncodingsComboBox

        /**
         * Whether the combo box should be used for saving a content. If
         * %FALSE, the combo box is used for loading a content (e.g. a file)
         * and the row "Automatically Detected" is added.
         */
        save_mode?: boolean | null
        /**
         * Whether the combo box should be used for saving a content. If
         * %FALSE, the combo box is used for loading a content (e.g. a file)
         * and the row "Automatically Detected" is added.
         */
        saveMode?: boolean | null
    }

}

export interface EncodingsComboBox extends Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.CellLayout {

    // Own properties of Gedit-3.0.Gedit.EncodingsComboBox

    /**
     * Whether the combo box should be used for saving a content. If
     * %FALSE, the combo box is used for loading a content (e.g. a file)
     * and the row "Automatically Detected" is added.
     */
    save_mode: boolean
    /**
     * Whether the combo box should be used for saving a content. If
     * %FALSE, the combo box is used for loading a content (e.g. a file)
     * and the row "Automatically Detected" is added.
     */
    saveMode: boolean

    // Conflicting properties

    parent_instance: Gtk.Bin & GObject.InitiallyUnowned & GObject.InitiallyUnowned

    // Owm methods of Gedit-3.0.Gedit.EncodingsComboBox

    get_selected_encoding(): GtkSource.Encoding
    /**
     * Sets the selected encoding.
     * @param encoding the #GtkSourceEncoding.
     */
    set_selected_encoding(encoding: GtkSource.Encoding): void

    // Conflicting methods

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
    child_notify(child_property: string): void
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
    child_notify(child: Gtk.Widget, child_property: string): void

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
    child_notify(child_property: string): void

    // Class property signals of Gedit-3.0.Gedit.EncodingsComboBox

    connect(sigName: "notify::save-mode", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::save-mode", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::save-mode", ...args: any[]): void
    connect(sigName: "notify::active", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::active-id", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active-id", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active-id", ...args: any[]): void
    connect(sigName: "notify::add-tearoffs", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::add-tearoffs", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::add-tearoffs", ...args: any[]): void
    connect(sigName: "notify::button-sensitivity", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::button-sensitivity", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::button-sensitivity", ...args: any[]): void
    connect(sigName: "notify::cell-area", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cell-area", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cell-area", ...args: any[]): void
    connect(sigName: "notify::column-span-column", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::column-span-column", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::column-span-column", ...args: any[]): void
    connect(sigName: "notify::entry-text-column", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::entry-text-column", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::entry-text-column", ...args: any[]): void
    connect(sigName: "notify::has-entry", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-entry", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-entry", ...args: any[]): void
    connect(sigName: "notify::has-frame", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-frame", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-frame", ...args: any[]): void
    connect(sigName: "notify::id-column", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id-column", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id-column", ...args: any[]): void
    connect(sigName: "notify::model", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::popup-fixed-width", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popup-fixed-width", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::popup-fixed-width", ...args: any[]): void
    connect(sigName: "notify::popup-shown", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::popup-shown", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::popup-shown", ...args: any[]): void
    connect(sigName: "notify::row-span-column", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::row-span-column", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::row-span-column", ...args: any[]): void
    connect(sigName: "notify::tearoff-title", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tearoff-title", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tearoff-title", ...args: any[]): void
    connect(sigName: "notify::wrap-width", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wrap-width", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::wrap-width", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::editing-canceled", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editing-canceled", callback: (($obj: EncodingsComboBox, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::editing-canceled", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class EncodingsComboBox extends Gtk.ComboBox {

    // Own properties of Gedit-3.0.Gedit.EncodingsComboBox

    static name: string
    static $gtype: GObject.GType<EncodingsComboBox>

    // Constructors of Gedit-3.0.Gedit.EncodingsComboBox

    constructor(config?: EncodingsComboBox.ConstructorProperties) 
    /**
     * Creates a new encodings combo box object. If `save_mode` is %FALSE, it means
     * that the combo box is used for loading a content (e.g. a file), so the row
     * "Automatically Detected" is added. For saving a content, the encoding must be
     * provided.
     * @constructor 
     * @param save_mode whether the combo box is used for saving a content.
     * @returns a new #GeditEncodingsComboBox object.
     */
    constructor(save_mode: boolean) 
    /**
     * Creates a new encodings combo box object. If `save_mode` is %FALSE, it means
     * that the combo box is used for loading a content (e.g. a file), so the row
     * "Automatically Detected" is added. For saving a content, the encoding must be
     * provided.
     * @constructor 
     * @param save_mode whether the combo box is used for saving a content.
     * @returns a new #GeditEncodingsComboBox object.
     */
    static new(save_mode: boolean): EncodingsComboBox

    // Overloads of new

    /**
     * Creates a new empty #GtkComboBox.
     * @constructor 
     * @returns A new #GtkComboBox.
     */
    static new(): Gtk.ComboBox
    _init(config?: EncodingsComboBox.ConstructorProperties): void
}

export module MenuExtension {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gedit-3.0.Gedit.MenuExtension

        menu?: Gio.Menu | null
    }

}

export interface MenuExtension {

    // Own properties of Gedit-3.0.Gedit.MenuExtension

    readonly menu: Gio.Menu

    // Owm methods of Gedit-3.0.Gedit.MenuExtension

    append_menu_item(item: Gio.MenuItem): void
    prepend_menu_item(item: Gio.MenuItem): void
    remove_items(): void

    // Class property signals of Gedit-3.0.Gedit.MenuExtension

    connect(sigName: "notify::menu", callback: (($obj: MenuExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menu", callback: (($obj: MenuExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::menu", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MenuExtension extends GObject.Object {

    // Own properties of Gedit-3.0.Gedit.MenuExtension

    static name: string
    static $gtype: GObject.GType<MenuExtension>

    // Constructors of Gedit-3.0.Gedit.MenuExtension

    constructor(config?: MenuExtension.ConstructorProperties) 
    constructor(menu: Gio.Menu) 
    static new(menu: Gio.Menu): MenuExtension
    _init(config?: MenuExtension.ConstructorProperties): void
}

export module Message {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gedit-3.0.Gedit.Message

        /**
         * The messages method.
         */
        method?: string | null
        object_path?: string | null
        objectPath?: string | null
    }

}

export interface Message {

    // Own properties of Gedit-3.0.Gedit.Message

    /**
     * The messages method.
     */
    method: string | null
    object_path: string | null
    objectPath: string | null

    // Own fields of Gedit-3.0.Gedit.Message

    parent: GObject.Object
    priv: MessagePrivate

    // Owm methods of Gedit-3.0.Gedit.Message

    /**
     * Get the message method.
     * @returns the message method
     */
    get_method(): string
    /**
     * Get the message object path.
     * @returns the message object path
     */
    get_object_path(): string
    /**
     * Check if a message has a certain property.
     * @param propname the property name
     * @returns %TRUE if message has @propname, %FALSE otherwise
     */
    has(propname: string): boolean

    // Class property signals of Gedit-3.0.Gedit.Message

    connect(sigName: "notify::method", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::method", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::method", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: Message, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Message extends GObject.Object {

    // Own properties of Gedit-3.0.Gedit.Message

    static name: string
    static $gtype: GObject.GType<Message>

    // Constructors of Gedit-3.0.Gedit.Message

    constructor(config?: Message.ConstructorProperties) 
    _init(config?: Message.ConstructorProperties): void
    /**
     * Returns whether `object_path` is a valid object path
     * @param object_path the object path
     * @returns %TRUE if @object_path is a valid object path
     */
    static is_valid_object_path(object_path: string | null): boolean
    static type_check(gtype: GObject.GType, propname: string, value_type: GObject.GType): boolean
    static type_has(gtype: GObject.GType, propname: string): boolean
    /**
     * Get the string identifier for `method` at `object_path`.
     * @param object_path the object path
     * @param method the method
     * @returns the identifier for @method at @object_path
     */
    static type_identifier(object_path: string | null, method: string | null): string | null
}

export module MessageBus {

    // Signal callback interfaces

    /**
     * Signal callback interface for `dispatch`
     */
    export interface DispatchSignalCallback {
        ($obj: MessageBus, message: Message): void
    }

    /**
     * Signal callback interface for `registered`
     */
    export interface RegisteredSignalCallback {
        ($obj: MessageBus, object_path: string | null, method: string | null): void
    }

    /**
     * Signal callback interface for `unregistered`
     */
    export interface UnregisteredSignalCallback {
        ($obj: MessageBus, object_path: string | null, method: string | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface MessageBus {

    // Own fields of Gedit-3.0.Gedit.MessageBus

    parent: GObject.Object
    priv: MessageBusPrivate

    // Owm methods of Gedit-3.0.Gedit.MessageBus

    /**
     * Blocks evoking the callback specified by `id`. Unblock the callback by
     * using gedit_message_bus_unblock().
     * @param id the callback id
     */
    block(id: number): void
    /**
     * Blocks evoking the callback that matches provided `callback` and `user_data`.
     * Unblock the callback using gedit_message_bus_unblock_by_func().
     * @param object_path the object path
     * @param method the method
     * @param callback the callback to block
     */
    block_by_func(object_path: string, method: string, callback: MessageCallback): void
    /**
     * Connect a callback handler to be evoked when message `method` at `object_path`
     * is sent over the bus.
     * @param object_path the object path
     * @param method the method
     * @param callback function to be called when message `method` at `object_path` is sent
     * @returns the callback identifier
     */
    connect(object_path: string, method: string, callback: MessageCallback): number
    /**
     * Disconnects a previously connected message callback.
     * @param id the callback id as returned by gedit_message_bus_connect()
     */
    disconnect(id: number): void
    /**
     * Disconnects a previously connected message callback by matching the
     * provided callback function and user_data. See also
     * gedit_message_bus_disconnect().
     * @param object_path the object path
     * @param method the method
     * @param callback the connected callback
     */
    disconnect_by_func(object_path: string, method: string, callback: MessageCallback): void
    /**
     * Calls `func` for each message type registered on the bus
     * @param func the callback function
     */
    foreach(func: MessageBusForeach): void
    /**
     * Check whether a message type `method` at `object_path` is registered on the
     * bus.
     * @param object_path the object path
     * @param method the method
     * @returns %TRUE if the @method at @object_path is a registered message               type on the bus
     */
    is_registered(object_path: string, method: string): boolean
    /**
     * Get the registered #GeditMessageType for `method` at `object_path`. The
     * returned #GeditMessageType is owned by the bus and should not be unreffed.
     * @param object_path the object path
     * @param method the method
     * @returns the registered #GeditMessageType or %NULL if no message type               is registered for @method at @object_path
     */
    lookup(object_path: string, method: string): GObject.GType
    /**
     * Register a message on the bus. A message must be registered on the bus before
     * it can be send. This function registers the type for `method` at
     * `object_path`.
     * 
     * This function emits a #GeditMessageBus::registered signal.
     * @param message_type the message type
     * @param object_path the object path
     * @param method the method to register
     */
    register(message_type: GObject.GType, object_path: string, method: string): void
    /**
     * This sends the provided `message` asynchronously over the bus. To send
     * a message synchronously, use gedit_message_bus_send_message_sync(). The
     * convenience function gedit_message_bus_send() can be used to easily send
     * a message without constructing the message object explicitly first.
     * @param message the message to send
     */
    send_message(message: Message): void
    /**
     * This sends the provided `message` synchronously over the bus. To send
     * a message asynchronously, use gedit_message_bus_send_message(). The
     * convenience function gedit_message_bus_send_sync() can be used to easily send
     * a message without constructing the message object explicitly first.
     * @param message the message to send
     */
    send_message_sync(message: Message): void
    /**
     * Unblocks the callback specified by `id`.
     * @param id the callback id
     */
    unblock(id: number): void
    /**
     * Unblocks the callback that matches provided `callback` and `user_data`.
     * @param object_path the object path
     * @param method the method
     * @param callback the callback to block
     */
    unblock_by_func(object_path: string, method: string, callback: MessageCallback): void
    /**
     * Unregisters a previously registered message type. This is especially useful
     * for plugins which should unregister message types when they are deactivated.
     * 
     * This function emits the #GeditMessageBus::unregistered signal.
     * @param object_path the object path
     * @param method the method
     */
    unregister(object_path: string, method: string): void
    /**
     * Unregisters all message types for `object_path`. This is especially useful for
     * plugins which should unregister message types when they are deactivated.
     * 
     * This function emits the #GeditMessageBus::unregistered signal for all
     * unregistered message types.
     * @param object_path the object path
     */
    unregister_all(object_path: string): void

    // Own virtual methods of Gedit-3.0.Gedit.MessageBus

    vfunc_dispatch(message: Message): void
    vfunc_registered(object_path: string, method: string): void
    vfunc_unregistered(object_path: string, method: string): void

    // Own signals of Gedit-3.0.Gedit.MessageBus

    connect(sigName: "dispatch", callback: MessageBus.DispatchSignalCallback): number
    connect_after(sigName: "dispatch", callback: MessageBus.DispatchSignalCallback): number
    emit(sigName: "dispatch", message: Message, ...args: any[]): void
    connect(sigName: "registered", callback: MessageBus.RegisteredSignalCallback): number
    connect_after(sigName: "registered", callback: MessageBus.RegisteredSignalCallback): number
    emit(sigName: "registered", object_path: string | null, method: string | null, ...args: any[]): void
    connect(sigName: "unregistered", callback: MessageBus.UnregisteredSignalCallback): number
    connect_after(sigName: "unregistered", callback: MessageBus.UnregisteredSignalCallback): number
    emit(sigName: "unregistered", object_path: string | null, method: string | null, ...args: any[]): void

    // Class property signals of Gedit-3.0.Gedit.MessageBus

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MessageBus extends GObject.Object {

    // Own properties of Gedit-3.0.Gedit.MessageBus

    static name: string
    static $gtype: GObject.GType<MessageBus>

    // Constructors of Gedit-3.0.Gedit.MessageBus

    constructor(config?: MessageBus.ConstructorProperties) 
    /**
     * Create a new message bus. Use gedit_message_bus_get_default() to get the
     * default, application wide, message bus. Creating a new bus is useful for
     * associating a specific bus with for instance a #GeditWindow.
     * @constructor 
     * @returns a new #GeditMessageBus
     */
    constructor() 
    /**
     * Create a new message bus. Use gedit_message_bus_get_default() to get the
     * default, application wide, message bus. Creating a new bus is useful for
     * associating a specific bus with for instance a #GeditWindow.
     * @constructor 
     * @returns a new #GeditMessageBus
     */
    static new(): MessageBus
    _init(config?: MessageBus.ConstructorProperties): void
    /**
     * Get the default application #GeditMessageBus.
     * @returns the default #GeditMessageBus
     */
    static get_default(): MessageBus
}

export module Statusbar {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Statusbar.ConstructorProperties {
    }

}

export interface Statusbar extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Owm methods of Gedit-3.0.Gedit.Statusbar

    clear_overwrite(): void
    /**
     * Sets the overwrite mode on the statusbar.
     * @param overwrite if the overwrite mode is set
     */
    set_overwrite(overwrite: boolean): void
    set_window_state(state: WindowState, num_of_errors: number): void

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
    child_notify(child: Gtk.Widget, child_property: string): void

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
    child_notify(child_property: string): void
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
    child_notify(child_property: string): void

    // Class property signals of Gedit-3.0.Gedit.Statusbar

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

    // Own properties of Gedit-3.0.Gedit.Statusbar

    static name: string
    static $gtype: GObject.GType<Statusbar>

    // Constructors of Gedit-3.0.Gedit.Statusbar

    constructor(config?: Statusbar.ConstructorProperties) 
    /**
     * Creates a new #GeditStatusbar.
     * @constructor 
     * @returns the new #GeditStatusbar object
     */
    constructor() 
    /**
     * Creates a new #GeditStatusbar.
     * @constructor 
     * @returns the new #GeditStatusbar object
     */
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

export module Tab {

    // Signal callback interfaces

    /**
     * Signal callback interface for `drop-uris`
     */
    export interface DropUrisSignalCallback {
        ($obj: Tab, object: string[]): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {

        // Own constructor properties of Gedit-3.0.Gedit.Tab

        autosave?: boolean | null
        autosave_interval?: number | null
        autosaveInterval?: number | null
    }

}

export interface Tab extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gedit-3.0.Gedit.Tab

    autosave: boolean
    autosave_interval: number
    autosaveInterval: number
    readonly can_close: boolean
    readonly canClose: boolean
    readonly name: any
    readonly state: TabState

    // Owm methods of Gedit-3.0.Gedit.Tab

    /**
     * Gets the current state for the autosave feature
     * @returns %TRUE if the autosave is enabled, else %FALSE
     */
    get_auto_save_enabled(): boolean
    /**
     * Gets the current interval for the autosaves
     * @returns the value of the autosave
     */
    get_auto_save_interval(): number
    /**
     * Gets the #GeditDocument associated to `tab`.
     * @returns the #GeditDocument associated to @tab
     */
    get_document(): Document
    /**
     * Gets the #GeditTabState of `tab`.
     * @returns the #GeditTabState of @tab
     */
    get_state(): TabState

    // Overloads of get_state

    /**
     * Returns the widget’s state. See gtk_widget_set_state().
     * @returns the state of @widget.
     */
    get_state(): Gtk.StateType
    /**
     * Gets the #GeditView inside `tab`.
     * @returns the #GeditView inside @tab
     */
    get_view(): View
    /**
     * Enables or disables the autosave feature. It does not install an
     * autosave timeout if the document is new or is read-only
     * @param enable enable (%TRUE) or disable (%FALSE) auto save
     */
    set_auto_save_enabled(enable: boolean): void
    /**
     * Sets the interval for the autosave feature.
     * @param interval the new interval
     */
    set_auto_save_interval(interval: number): void
    set_info_bar(info_bar: Gtk.Widget): void

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
    child_notify(child: Gtk.Widget, child_property: string): void

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
    child_notify(child_property: string): void
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
    child_notify(child_property: string): void

    // Own signals of Gedit-3.0.Gedit.Tab

    connect(sigName: "drop-uris", callback: Tab.DropUrisSignalCallback): number
    connect_after(sigName: "drop-uris", callback: Tab.DropUrisSignalCallback): number
    emit(sigName: "drop-uris", object: string[], ...args: any[]): void

    // Class property signals of Gedit-3.0.Gedit.Tab

    connect(sigName: "notify::autosave", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autosave", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::autosave", ...args: any[]): void
    connect(sigName: "notify::autosave-interval", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autosave-interval", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::autosave-interval", ...args: any[]): void
    connect(sigName: "notify::can-close", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-close", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-close", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::state", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: Tab, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
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

export class Tab extends Gtk.Box {

    // Own properties of Gedit-3.0.Gedit.Tab

    static name: string
    static $gtype: GObject.GType<Tab>

    // Constructors of Gedit-3.0.Gedit.Tab

    constructor(config?: Tab.ConstructorProperties) 
    _init(config?: Tab.ConstructorProperties): void
    /**
     * Gets the #GeditTab associated with `doc`.
     * @param doc a #GeditDocument
     * @returns the #GeditTab associated with @doc
     */
    static get_from_document(doc: Document): Tab
}

export module View {

    // Signal callback interfaces

    /**
     * Signal callback interface for `drop-uris`
     */
    export interface DropUrisSignalCallback {
        ($obj: View, uri_list: string[]): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Scrollable.ConstructorProperties, GtkSource.View.ConstructorProperties {
    }

}

export interface View extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Conflicting properties

    parent: Gtk.TextView & Gtk.Container & Gtk.Container
    parent_instance: Gtk.Container & GObject.InitiallyUnowned & GObject.InitiallyUnowned

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
    child_notify(child: Gtk.Widget, child_property: string): void

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
    child_notify(child_property: string): void
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
    child_notify(child_property: string): void

    // Own virtual methods of Gedit-3.0.Gedit.View

    vfunc_drop_uris(uri_list: string | null): void

    // Own signals of Gedit-3.0.Gedit.View

    connect(sigName: "drop-uris", callback: View.DropUrisSignalCallback): number
    connect_after(sigName: "drop-uris", callback: View.DropUrisSignalCallback): number
    emit(sigName: "drop-uris", uri_list: string[], ...args: any[]): void

    // Class property signals of Gedit-3.0.Gedit.View

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

export class View extends GtkSource.View {

    // Own properties of Gedit-3.0.Gedit.View

    static name: string
    static $gtype: GObject.GType<View>

    // Constructors of Gedit-3.0.Gedit.View

    constructor(config?: View.ConstructorProperties) 
    /**
     * Creates a new #GeditView object displaying the `doc` document.
     * `doc` cannot be %NULL.
     * @constructor 
     * @param doc a #GeditDocument
     * @returns a new #GeditView.
     */
    constructor(doc: Document) 
    /**
     * Creates a new #GeditView object displaying the `doc` document.
     * `doc` cannot be %NULL.
     * @constructor 
     * @param doc a #GeditDocument
     * @returns a new #GeditView.
     */
    static new(doc: Document): View

    // Overloads of new

    /**
     * Creates a new #GtkSourceView.
     * 
     * By default, an empty #GtkSourceBuffer will be lazily created and can be
     * retrieved with gtk_text_view_get_buffer().
     * 
     * If you want to specify your own buffer, either override the
     * #GtkTextViewClass create_buffer factory method, or use
     * gtk_source_view_new_with_buffer().
     * @constructor 
     * @returns a new #GtkSourceView.
     */
    static new(): GtkSource.View
    _init(config?: View.ConstructorProperties): void

    // Conflicting static methods

    static new_with_buffer(...args: any[]): any
}

export module Window {

    // Signal callback interfaces

    /**
     * Signal callback interface for `active-tab-changed`
     */
    export interface ActiveTabChangedSignalCallback {
        ($obj: Window, object: Tab): void
    }

    /**
     * Signal callback interface for `active-tab-state-changed`
     */
    export interface ActiveTabStateChangedSignalCallback {
        ($obj: Window): void
    }

    /**
     * Signal callback interface for `tab-added`
     */
    export interface TabAddedSignalCallback {
        ($obj: Window, object: Tab): void
    }

    /**
     * Signal callback interface for `tab-removed`
     */
    export interface TabRemovedSignalCallback {
        ($obj: Window, object: Tab): void
    }

    /**
     * Signal callback interface for `tabs-reordered`
     */
    export interface TabsReorderedSignalCallback {
        ($obj: Window): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gio.ActionGroup.ConstructorProperties, Gio.ActionMap.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ApplicationWindow.ConstructorProperties {
    }

}

export interface Window extends Atk.ImplementorIface, Gio.ActionGroup, Gio.ActionMap, Gtk.Buildable {

    // Own properties of Gedit-3.0.Gedit.Window

    readonly state: WindowState

    // Conflicting properties

    parent_instance: Gtk.Window & GObject.InitiallyUnowned & GObject.InitiallyUnowned

    // Own fields of Gedit-3.0.Gedit.Window

    readonly window: Gtk.ApplicationWindow & Gdk.Window

    // Owm methods of Gedit-3.0.Gedit.Window

    /**
     * Closes all opened tabs.
     */
    close_all_tabs(): void
    /**
     * Closes the `tab`.
     * @param tab the #GeditTab to close
     */
    close_tab(tab: Tab): void
    /**
     * Closes all tabs specified by `tabs`.
     * @param tabs a list of #GeditTab
     */
    close_tabs(tabs: Tab[]): void
    /**
     * Creates a new #GeditTab and adds the new tab to the #GtkNotebook.
     * In case `jump_to` is %TRUE the #GtkNotebook switches to that new #GeditTab.
     * @param jump_to %TRUE to set the new #GeditTab as active
     * @returns a new #GeditTab
     */
    create_tab(jump_to: boolean): Tab
    /**
     * Creates a new #GeditTab loading the document specified by `uri`.
     * In case `jump_to` is %TRUE the #GtkNotebook swithes to that new #GeditTab.
     * Whether `create` is %TRUE, creates a new empty document if location does
     * not refer to an existing file
     * @param location the location of the document
     * @param encoding a #GtkSourceEncoding, or %NULL
     * @param line_pos the line position to visualize
     * @param column_pos the column position to visualize
     * @param create %TRUE to create a new document in case `uri` does exist
     * @param jump_to %TRUE to set the new #GeditTab as active
     * @returns a new #GeditTab
     */
    create_tab_from_location(location: Gio.File, encoding: GtkSource.Encoding | null, line_pos: number, column_pos: number, create: boolean, jump_to: boolean): Tab
    create_tab_from_stream(stream: Gio.InputStream, encoding: GtkSource.Encoding | null, line_pos: number, column_pos: number, jump_to: boolean): Tab
    /**
     * Gets the active #GeditDocument.
     * @returns the active #GeditDocument
     */
    get_active_document(): Document
    /**
     * Gets the active #GeditTab in the `window`.
     * @returns the active #GeditTab in the @window.
     */
    get_active_tab(): Tab
    /**
     * Gets the active #GeditView.
     * @returns the active #GeditView
     */
    get_active_view(): View
    /**
     * Gets the bottom panel of the `window`.
     * @returns the bottom panel's #GtkStack.
     */
    get_bottom_panel(): Gtk.Widget
    /**
     * Gets a newly allocated list with all the documents in the window.
     * This list must be freed.
     * @returns a newly allocated list with all the documents in the window
     */
    get_documents(): Document[]
    /**
     * Gets the #GtkWindowGroup in which `window` resides.
     * @returns the #GtkWindowGroup
     */
    get_group(): Gtk.WindowGroup
    /**
     * Gets the #GeditMessageBus associated with `window`. The returned reference
     * is owned by the window and should not be unreffed.
     * @returns the #GeditMessageBus associated with @window
     */
    get_message_bus(): MessageBus
    /**
     * Gets the side panel of the `window`.
     * @returns the side panel's #GtkStack.
     */
    get_side_panel(): Gtk.Widget
    /**
     * Retrieves the state of the `window`.
     * @returns the current #GeditWindowState of the @window.
     */
    get_state(): WindowState

    // Overloads of get_state

    /**
     * Returns the widget’s state. See gtk_widget_set_state().
     * @returns the state of @widget.
     */
    get_state(): Gtk.StateType
    /**
     * Gets the #GeditStatusbar of the `window`.
     * @returns the #GeditStatusbar of the @window.
     */
    get_statusbar(): Gtk.Widget
    /**
     * Gets the #GeditTab that matches with the given `location`.
     * @param location a #GFile
     * @returns the #GeditTab that matches with the given @location.
     */
    get_tab_from_location(location: Gio.File): Tab
    /**
     * Gets the list of documents that need to be saved before closing the window.
     * @returns a list of #GeditDocument that need to be saved before closing the window
     */
    get_unsaved_documents(): Document[]
    /**
     * Gets a list with all the views in the window. This list must be freed.
     * @returns a newly allocated list with all the views in the window
     */
    get_views(): View[]
    /**
     * Switches to the tab that matches with `tab`.
     * @param tab a #GeditTab
     */
    set_active_tab(tab: Tab): void

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
    child_notify(child: Gtk.Widget, child_property: string): void

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
    child_notify(child_property: string): void
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
    child_notify(child_property: string): void

    // Own virtual methods of Gedit-3.0.Gedit.Window

    vfunc_active_tab_changed(tab: Tab): void
    vfunc_active_tab_state_changed(): void
    vfunc_tab_added(tab: Tab): void
    vfunc_tab_removed(tab: Tab): void
    vfunc_tabs_reordered(): void

    // Own signals of Gedit-3.0.Gedit.Window

    connect(sigName: "active-tab-changed", callback: Window.ActiveTabChangedSignalCallback): number
    connect_after(sigName: "active-tab-changed", callback: Window.ActiveTabChangedSignalCallback): number
    emit(sigName: "active-tab-changed", object: Tab, ...args: any[]): void
    connect(sigName: "active-tab-state-changed", callback: Window.ActiveTabStateChangedSignalCallback): number
    connect_after(sigName: "active-tab-state-changed", callback: Window.ActiveTabStateChangedSignalCallback): number
    emit(sigName: "active-tab-state-changed", ...args: any[]): void
    connect(sigName: "tab-added", callback: Window.TabAddedSignalCallback): number
    connect_after(sigName: "tab-added", callback: Window.TabAddedSignalCallback): number
    emit(sigName: "tab-added", object: Tab, ...args: any[]): void
    connect(sigName: "tab-removed", callback: Window.TabRemovedSignalCallback): number
    connect_after(sigName: "tab-removed", callback: Window.TabRemovedSignalCallback): number
    emit(sigName: "tab-removed", object: Tab, ...args: any[]): void
    connect(sigName: "tabs-reordered", callback: Window.TabsReorderedSignalCallback): number
    connect_after(sigName: "tabs-reordered", callback: Window.TabsReorderedSignalCallback): number
    emit(sigName: "tabs-reordered", ...args: any[]): void

    // Class property signals of Gedit-3.0.Gedit.Window

    connect(sigName: "notify::state", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
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

    // Own properties of Gedit-3.0.Gedit.Window

    static name: string
    static $gtype: GObject.GType<Window>

    // Constructors of Gedit-3.0.Gedit.Window

    constructor(config?: Window.ConstructorProperties) 
    _init(config?: Window.ConstructorProperties): void

    // Conflicting static methods

    static new(...args: any[]): any
}

export interface AppActivatableInterface {

    // Own fields of Gedit-3.0.Gedit.AppActivatableInterface

    g_iface: GObject.TypeInterface
    activate: (activatable: AppActivatable) => void
    deactivate: (activatable: AppActivatable) => void
}

export abstract class AppActivatableInterface {

    // Own properties of Gedit-3.0.Gedit.AppActivatableInterface

    static name: string
}

export interface AppClass {

    // Own fields of Gedit-3.0.Gedit.AppClass

    parent_class: Gtk.ApplicationClass
    show_help: (app: App, parent: Gtk.Window, name: string, link_id: string) => boolean
    help_link_id: (app: App, name: string, link_id: string) => string | null
    set_window_title: (app: App, window: Window, title: string) => void
    process_window_event: (app: App, window: Window, event: Gdk.Event) => boolean
}

export abstract class AppClass {

    // Own properties of Gedit-3.0.Gedit.AppClass

    static name: string
}

export interface DocumentClass {

    // Own fields of Gedit-3.0.Gedit.DocumentClass

    load: (document: Document) => void
    loaded: (document: Document) => void
    save: (document: Document) => void
    saved: (document: Document) => void
}

export abstract class DocumentClass {

    // Own properties of Gedit-3.0.Gedit.DocumentClass

    static name: string
}

export interface EncodingsComboBoxClass {

    // Own fields of Gedit-3.0.Gedit.EncodingsComboBoxClass

    parent_class: Gtk.ComboBoxClass
}

export abstract class EncodingsComboBoxClass {

    // Own properties of Gedit-3.0.Gedit.EncodingsComboBoxClass

    static name: string
}

export interface MenuExtensionClass {

    // Own fields of Gedit-3.0.Gedit.MenuExtensionClass

    parent_class: GObject.ObjectClass
}

export abstract class MenuExtensionClass {

    // Own properties of Gedit-3.0.Gedit.MenuExtensionClass

    static name: string
}

export interface MessageBusClass {

    // Own fields of Gedit-3.0.Gedit.MessageBusClass

    parent_class: GObject.ObjectClass
    dispatch: (bus: MessageBus, message: Message) => void
    registered: (bus: MessageBus, object_path: string, method: string) => void
    unregistered: (bus: MessageBus, object_path: string, method: string) => void
}

export abstract class MessageBusClass {

    // Own properties of Gedit-3.0.Gedit.MessageBusClass

    static name: string
}

export interface MessageBusPrivate {
}

export class MessageBusPrivate {

    // Own properties of Gedit-3.0.Gedit.MessageBusPrivate

    static name: string
}

export interface MessageClass {

    // Own fields of Gedit-3.0.Gedit.MessageClass

    parent_class: GObject.ObjectClass
}

export abstract class MessageClass {

    // Own properties of Gedit-3.0.Gedit.MessageClass

    static name: string
}

export interface MessagePrivate {
}

export class MessagePrivate {

    // Own properties of Gedit-3.0.Gedit.MessagePrivate

    static name: string
}

export interface StatusbarClass {

    // Own fields of Gedit-3.0.Gedit.StatusbarClass

    parent_class: Gtk.StatusbarClass
}

export abstract class StatusbarClass {

    // Own properties of Gedit-3.0.Gedit.StatusbarClass

    static name: string
}

export interface TabClass {

    // Own fields of Gedit-3.0.Gedit.TabClass

    parent_class: Gtk.BoxClass
}

export abstract class TabClass {

    // Own properties of Gedit-3.0.Gedit.TabClass

    static name: string
}

export interface ViewActivatableInterface {

    // Own fields of Gedit-3.0.Gedit.ViewActivatableInterface

    g_iface: GObject.TypeInterface
    activate: (activatable: ViewActivatable) => void
    deactivate: (activatable: ViewActivatable) => void
}

export abstract class ViewActivatableInterface {

    // Own properties of Gedit-3.0.Gedit.ViewActivatableInterface

    static name: string
}

export interface ViewClass {

    // Own fields of Gedit-3.0.Gedit.ViewClass

    drop_uris: (view: View, uri_list: string | null) => void
    padding: any
}

export abstract class ViewClass {

    // Own properties of Gedit-3.0.Gedit.ViewClass

    static name: string
}

export interface ViewPrivate {
}

export class ViewPrivate {

    // Own properties of Gedit-3.0.Gedit.ViewPrivate

    static name: string
}

export interface WindowActivatableInterface {

    // Own fields of Gedit-3.0.Gedit.WindowActivatableInterface

    g_iface: GObject.TypeInterface
    activate: (activatable: WindowActivatable) => void
    deactivate: (activatable: WindowActivatable) => void
    update_state: (activatable: WindowActivatable) => void
}

export abstract class WindowActivatableInterface {

    // Own properties of Gedit-3.0.Gedit.WindowActivatableInterface

    static name: string
}

export interface WindowClass {

    // Own fields of Gedit-3.0.Gedit.WindowClass

    parent_class: Gtk.ApplicationWindowClass
    tab_added: (window: Window, tab: Tab) => void
    tab_removed: (window: Window, tab: Tab) => void
    tabs_reordered: (window: Window) => void
    active_tab_changed: (window: Window, tab: Tab) => void
    active_tab_state_changed: (window: Window) => void
}

export abstract class WindowClass {

    // Own properties of Gedit-3.0.Gedit.WindowClass

    static name: string
}

export interface WindowPrivate {
}

export class WindowPrivate {

    // Own properties of Gedit-3.0.Gedit.WindowPrivate

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