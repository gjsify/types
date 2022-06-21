// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gedit-3.0
 */

import type * as Gjs from './Gjs';
import type GtkSource from './GtkSource-4';
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

export namespace Gedit {

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
 * Enumeration of debug sections.
 * 
 * Debugging output for a section is enabled by setting an environment variable
 * of the same name. For example, setting the <code>GEDIT_DEBUG_PLUGINS</code>
 * environment variable enables all debugging output for the %GEDIT_DEBUG_PLUGINS
 * section. Setting the special environment variable <code>GEDIT_DEBUG</code>
 * enables output for all sections.
 * @bitfield 
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
    DEBUG_METADATA,
}
enum WindowState {
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
function commands_load_location(window: Window, location: Gio.File, encoding: GtkSource.Encoding | null, line_pos: number, column_pos: number): void
/**
 * Loads `locations`. Ignore non-existing locations.
 * @param window a #GeditWindow
 * @param locations the locations to load
 * @param encoding the #GtkSourceEncoding
 * @param line_pos the line position to place the cursor
 * @param column_pos the line column to place the cursor
 */
function commands_load_locations(window: Window, locations: Gio.File[], encoding: GtkSource.Encoding | null, line_pos: number, column_pos: number): Document[]
/**
 * Asynchronously save all documents belonging to `window`. The result of the
 * operation is not available, so it's difficult to know whether all the
 * documents are correctly saved.
 * @param window a #GeditWindow.
 */
function commands_save_all_documents(window: Window): void
/**
 * Asynchronously save `document`. `document` must belong to `window`. If you need
 * the result of the operation, use gedit_commands_save_document_async().
 * @param window a #GeditWindow.
 * @param document the #GeditDocument to save.
 */
function commands_save_document(window: Window, document: Document): void
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
function commands_save_document_async(document: Document, window: Window, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
/**
 * Finishes an asynchronous document saving operation started with
 * gedit_commands_save_document_async().
 * 
 * Note that there is no error parameter because the errors are already handled
 * by gedit.
 * @param document a #GeditDocument.
 * @param result a #GAsyncResult.
 */
function commands_save_document_finish(document: Document, result: Gio.AsyncResult): boolean
/**
 * If `section` is enabled, then logs the trace information `file,` `line,` and
 * `function`.
 * @param section debug section.
 * @param file file name.
 * @param line line number.
 * @param function_ name of the function that is calling gedit_debug().
 */
function debug(section: DebugSection, file: string, line: number, function_: string): void
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
function debug_init(): void
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
function debug_plugin_message(file: string, line: number, function_: string, message: string): void
function utils_basename_for_display(location: Gio.File): string
/**
 * Parse and break an uri apart in its individual components like the uri
 * scheme, user info, port, host and path. The return value pointer can be
 * %NULL to ignore certain parts of the uri. If the function returns %TRUE, then
 * all return value pointers should be freed using g_free
 * @param uri the uri to decode
 */
function utils_decode_uri(uri: string): [ /* returnType */ boolean, /* scheme */ string, /* user */ string, /* host */ string, /* port */ string, /* path */ string ]
/**
 * Create a list of valid uri's from a uri-list drop.
 * @param selection_data the #GtkSelectionData from drag_data_received
 */
function utils_drop_get_uris(selection_data: Gtk.SelectionData): string[]
function utils_get_compression_type_from_content_type(content_type: string): GtkSource.CompressionType
function utils_is_valid_location(location: Gio.File): boolean
/**
 * Returns a string suitable to be displayed in the UI indicating
 * the name of the directory where the file is located.
 * For remote files it may also contain the hostname etc.
 * For local files it tries to replace the home dir with ~.
 * @param location the location
 */
function utils_location_get_dirname_for_display(location: Gio.File): string
function utils_menu_position_under_tree_view(tree_view: Gtk.TreeView, rect: Gdk.Rectangle): boolean
function utils_newline_type_to_string(newline_type: GtkSource.NewlineType): string
function utils_replace_home_dir_with_tilde(uri: string): string
/**
 * This function sets up name and description
 * for a specified gtk widget.
 * @param widget The Gtk widget for which name/description to be set
 * @param name Atk name string
 * @param description Atk description string
 */
function utils_set_atk_name_description(widget: Gtk.Widget, name: string, description: string): void
function utils_set_direct_save_filename(context: Gdk.DragContext): string
function utils_str_end_truncate(string: string, truncate_length: number): string
function utils_str_middle_truncate(string: string, truncate_length: number): string
interface MessageBusForeach {
    (object_path: string, method: string): void
}
/**
 * Callback signature used for connecting callback functions to be called
 * when a message is received (see gedit_message_bus_connect()).
 * @callback 
 * @param bus the #GeditMessageBus on which the message was sent
 * @param message the #GeditMessage which was sent
 */
interface MessageCallback {
    (bus: MessageBus, message: Message): void
}
interface AppActivatable_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gedit-3.0.Gedit.AppActivatable

    /**
     * The app property contains the gedit app for this
     * #GeditAppActivatable instance.
     */
    app?: App | null
}

interface AppActivatable {

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

class AppActivatable extends GObject.Object {

    // Own properties of Gedit-3.0.Gedit.AppActivatable

    static name: string
    static $gtype: GObject.GType<AppActivatable>

    // Constructors of Gedit-3.0.Gedit.AppActivatable

    constructor(config?: AppActivatable_ConstructProps) 
    _init(config?: AppActivatable_ConstructProps): void
}

interface ViewActivatable_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gedit-3.0.Gedit.ViewActivatable

    /**
     * The window property contains the gedit window for this
     * #GeditViewActivatable instance.
     */
    view?: View | null
}

interface ViewActivatable {

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

class ViewActivatable extends GObject.Object {

    // Own properties of Gedit-3.0.Gedit.ViewActivatable

    static name: string
    static $gtype: GObject.GType<ViewActivatable>

    // Constructors of Gedit-3.0.Gedit.ViewActivatable

    constructor(config?: ViewActivatable_ConstructProps) 
    _init(config?: ViewActivatable_ConstructProps): void
}

interface WindowActivatable_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gedit-3.0.Gedit.WindowActivatable

    /**
     * The window property contains the gedit window for this
     * #GeditWindowActivatable instance.
     */
    window?: Window | null
}

interface WindowActivatable {

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

class WindowActivatable extends GObject.Object {

    // Own properties of Gedit-3.0.Gedit.WindowActivatable

    static name: string
    static $gtype: GObject.GType<WindowActivatable>

    // Constructors of Gedit-3.0.Gedit.WindowActivatable

    constructor(config?: WindowActivatable_ConstructProps) 
    _init(config?: WindowActivatable_ConstructProps): void
}

interface App_ConstructProps extends Gio.ActionGroup_ConstructProps, Gio.ActionMap_ConstructProps, Gtk.Application_ConstructProps {
}

interface App extends Gio.ActionGroup, Gio.ActionMap {

    // Own fields of Gedit-3.0.Gedit.App

    parent_instance: Gtk.Application

    // Owm methods of Gedit-3.0.Gedit.App

    /**
     * Create a new #GeditWindow part of `app`.
     * @param screen 
     */
    create_window(screen: Gdk.Screen | null): Window
    /**
     * Returns all the documents currently open in #GeditApp.
     */
    get_documents(): Document[]
    /**
     * Returns all #GeditWindows currently open in #GeditApp.
     * This differs from gtk_application_get_windows() since it does not
     * include the preferences dialog and other auxiliary windows.
     */
    get_main_windows(): Window[]
    /**
     * Returns all the views currently present in #GeditApp.
     */
    get_views(): View[]
    process_window_event(window: Window, event: Gdk.Event): boolean
    set_window_title(window: Window, title: string): void
    show_help(parent: Gtk.Window, name: string, link_id: string): boolean

    // Own virtual methods of Gedit-3.0.Gedit.App

    vfunc_help_link_id(name: string, link_id: string): string
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

class App extends Gtk.Application {

    // Own properties of Gedit-3.0.Gedit.App

    static name: string
    static $gtype: GObject.GType<App>

    // Constructors of Gedit-3.0.Gedit.App

    constructor(config?: App_ConstructProps) 
    _init(config?: App_ConstructProps): void

    // Conflicting static methods

    static new(...args: any[]): any
}

interface Document_ConstructProps extends GtkSource.Buffer_ConstructProps {

    // Own constructor properties of Gedit-3.0.Gedit.Document

    /**
     * The document's content type.
     */
    content_type?: string | null
    /**
     * Whether to use GVFS metadata. If %FALSE, use the gedit metadata
     * manager that stores the metadata in an XML file in the user cache
     * directory.
     * 
     * <warning>
     * The property is used internally by gedit. It must not be used in a
     * gedit plugin. The property can be modified or removed at any time.
     * </warning>
     */
    use_gvfs_metadata?: boolean | null
}

/**
 * Signal callback interface for `cursor-moved`
 */
interface Document_CursorMovedSignalCallback {
    ($obj: Document): void
}

/**
 * Signal callback interface for `load`
 */
interface Document_LoadSignalCallback {
    ($obj: Document): void
}

/**
 * Signal callback interface for `loaded`
 */
interface Document_LoadedSignalCallback {
    ($obj: Document): void
}

/**
 * Signal callback interface for `save`
 */
interface Document_SaveSignalCallback {
    ($obj: Document): void
}

/**
 * Signal callback interface for `saved`
 */
interface Document_SavedSignalCallback {
    ($obj: Document): void
}

interface Document {

    // Own properties of Gedit-3.0.Gedit.Document

    /**
     * The document's content type.
     */
    content_type: string
    /**
     * <warning>
     * The property is used internally by gedit. It must not be used in a
     * gedit plugin. The property can be modified or removed at any time.
     * </warning>
     */
    readonly empty_search: boolean
    /**
     * The document's MIME type.
     */
    readonly mime_type: string
    /**
     * The document's short name.
     */
    readonly shortname: string
    /**
     * Whether to use GVFS metadata. If %FALSE, use the gedit metadata
     * manager that stores the metadata in an XML file in the user cache
     * directory.
     * 
     * <warning>
     * The property is used internally by gedit. It must not be used in a
     * gedit plugin. The property can be modified or removed at any time.
     * </warning>
     */
    readonly use_gvfs_metadata: boolean

    // Conflicting properties

    priv: any

    // Own fields of Gedit-3.0.Gedit.Document

    parent_instance: GtkSource.Buffer

    // Owm methods of Gedit-3.0.Gedit.Document

    get_content_type(): string
    /**
     * Gets the associated #GtkSourceFile. You should use it only for reading
     * purposes, not for creating a #GtkSourceFileLoader or #GtkSourceFileSaver,
     * because gedit does some extra work when loading or saving a file and
     * maintains an internal state. If you use in a plugin a file loader or saver on
     * the returned #GtkSourceFile, the internal state of gedit won't be updated.
     * 
     * If you want to save the #GeditDocument to a secondary file, you can create a
     * new #GtkSourceFile and use a #GtkSourceFileSaver.
     */
    get_file(): GtkSource.File
    get_language(): GtkSource.Language

    // Overloads of get_language

    /**
     * Returns the #GtkSourceLanguage associated with the buffer,
     * see gtk_source_buffer_set_language().  The returned object should not be
     * unreferenced by the user.
     */
    get_language(): GtkSource.Language | null
    get_language(...args: any[]): any
    get_language(...args: any[]): GtkSource.Language | GtkSource.Language | null | any
    /**
     * Gets the metadata assigned to `key`.
     * @param key name of the key
     */
    get_metadata(key: string): string
    /**
     * Note: this never returns %NULL.
     */
    get_mime_type(): string
    /**
     * Gets the search context. Use this function only if you have used
     * gedit_document_set_search_context() before. You should not alter other search
     * contexts, so you have to verify that the returned search context is yours.
     * One way to verify that is to compare the search settings object, or to mark
     * the search context with g_object_set_data().
     */
    get_search_context(): GtkSource.SearchContext
    /**
     * Note: this never returns %NULL.
     */
    get_short_name_for_display(): string
    goto_line(line: number): boolean
    goto_line_offset(line: number, line_offset: number): boolean
    is_untitled(): boolean
    is_untouched(): boolean
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

    vfunc_cursor_moved(): void
    vfunc_load(): void
    vfunc_loaded(): void
    vfunc_save(): void
    vfunc_saved(): void

    // Own signals of Gedit-3.0.Gedit.Document

    connect(sigName: "cursor-moved", callback: Document_CursorMovedSignalCallback): number
    connect_after(sigName: "cursor-moved", callback: Document_CursorMovedSignalCallback): number
    emit(sigName: "cursor-moved", ...args: any[]): void
    connect(sigName: "load", callback: Document_LoadSignalCallback): number
    connect_after(sigName: "load", callback: Document_LoadSignalCallback): number
    emit(sigName: "load", ...args: any[]): void
    connect(sigName: "loaded", callback: Document_LoadedSignalCallback): number
    connect_after(sigName: "loaded", callback: Document_LoadedSignalCallback): number
    emit(sigName: "loaded", ...args: any[]): void
    connect(sigName: "save", callback: Document_SaveSignalCallback): number
    connect_after(sigName: "save", callback: Document_SaveSignalCallback): number
    emit(sigName: "save", ...args: any[]): void
    connect(sigName: "saved", callback: Document_SavedSignalCallback): number
    connect_after(sigName: "saved", callback: Document_SavedSignalCallback): number
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
    connect(sigName: "notify::shortname", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shortname", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shortname", ...args: any[]): void
    connect(sigName: "notify::use-gvfs-metadata", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-gvfs-metadata", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-gvfs-metadata", ...args: any[]): void
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

class Document extends GtkSource.Buffer {

    // Own properties of Gedit-3.0.Gedit.Document

    static name: string
    static $gtype: GObject.GType<Document>

    // Constructors of Gedit-3.0.Gedit.Document

    constructor(config?: Document_ConstructProps) 
    constructor() 
    static new(): Document

    // Overloads of new

    /**
     * Creates a new source buffer.
     * @constructor 
     * @param table a #GtkTextTagTable, or %NULL to create a new one.
     */
    static new(table: Gtk.TextTagTable | null): GtkSource.Buffer
    /**
     * Creates a new text buffer.
     * @constructor 
     * @param table a tag table, or %NULL to create a new one
     */
    static new(table: Gtk.TextTagTable | null): Gtk.TextBuffer
    _init(config?: Document_ConstructProps): void
}

interface EncodingsComboBox_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.CellEditable_ConstructProps, Gtk.CellLayout_ConstructProps, Gtk.ComboBox_ConstructProps {

    // Own constructor properties of Gedit-3.0.Gedit.EncodingsComboBox

    /**
     * Whether the combo box should be used for saving a content. If
     * %FALSE, the combo box is used for loading a content (e.g. a file)
     * and the row "Automatically Detected" is added.
     */
    save_mode?: boolean | null
}

interface EncodingsComboBox extends Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.CellLayout {

    // Own properties of Gedit-3.0.Gedit.EncodingsComboBox

    /**
     * Whether the combo box should be used for saving a content. If
     * %FALSE, the combo box is used for loading a content (e.g. a file)
     * and the row "Automatically Detected" is added.
     */
    save_mode: boolean

    // Conflicting properties

    parent_instance: any

    // Owm methods of Gedit-3.0.Gedit.EncodingsComboBox

    get_selected_encoding(): GtkSource.Encoding
    /**
     * Sets the selected encoding.
     * @param encoding the #GtkSourceEncoding.
     */
    set_selected_encoding(encoding: GtkSource.Encoding): void

    // Conflicting methods

    child_notify(...args: any[]): any

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

class EncodingsComboBox extends Gtk.ComboBox {

    // Own properties of Gedit-3.0.Gedit.EncodingsComboBox

    static name: string
    static $gtype: GObject.GType<EncodingsComboBox>

    // Constructors of Gedit-3.0.Gedit.EncodingsComboBox

    constructor(config?: EncodingsComboBox_ConstructProps) 
    /**
     * Creates a new encodings combo box object. If `save_mode` is %FALSE, it means
     * that the combo box is used for loading a content (e.g. a file), so the row
     * "Automatically Detected" is added. For saving a content, the encoding must be
     * provided.
     * @constructor 
     * @param save_mode whether the combo box is used for saving a content.
     */
    constructor(save_mode: boolean) 
    /**
     * Creates a new encodings combo box object. If `save_mode` is %FALSE, it means
     * that the combo box is used for loading a content (e.g. a file), so the row
     * "Automatically Detected" is added. For saving a content, the encoding must be
     * provided.
     * @constructor 
     * @param save_mode whether the combo box is used for saving a content.
     */
    static new(save_mode: boolean): EncodingsComboBox

    // Overloads of new

    /**
     * Creates a new empty #GtkComboBox.
     * @constructor 
     */
    static new(): Gtk.ComboBox
    _init(config?: EncodingsComboBox_ConstructProps): void
}

interface MenuExtension_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gedit-3.0.Gedit.MenuExtension

    menu?: Gio.Menu | null
}

interface MenuExtension {

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

class MenuExtension extends GObject.Object {

    // Own properties of Gedit-3.0.Gedit.MenuExtension

    static name: string
    static $gtype: GObject.GType<MenuExtension>

    // Constructors of Gedit-3.0.Gedit.MenuExtension

    constructor(config?: MenuExtension_ConstructProps) 
    constructor(menu: Gio.Menu) 
    static new(menu: Gio.Menu): MenuExtension
    _init(config?: MenuExtension_ConstructProps): void
}

interface Message_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gedit-3.0.Gedit.Message

    /**
     * The messages method.
     */
    method?: string | null
    object_path?: string | null
}

interface Message {

    // Own properties of Gedit-3.0.Gedit.Message

    /**
     * The messages method.
     */
    method: string
    object_path: string

    // Own fields of Gedit-3.0.Gedit.Message

    parent: GObject.Object
    priv: MessagePrivate

    // Owm methods of Gedit-3.0.Gedit.Message

    /**
     * Get the message method.
     */
    get_method(): string
    /**
     * Get the message object path.
     */
    get_object_path(): string
    /**
     * Check if a message has a certain property.
     * @param propname the property name
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

class Message extends GObject.Object {

    // Own properties of Gedit-3.0.Gedit.Message

    static name: string
    static $gtype: GObject.GType<Message>

    // Constructors of Gedit-3.0.Gedit.Message

    constructor(config?: Message_ConstructProps) 
    _init(config?: Message_ConstructProps): void
    /**
     * Returns whether `object_path` is a valid object path
     * @param object_path the object path
     */
    static is_valid_object_path(object_path: string | null): boolean
    static type_check(gtype: GObject.GType, propname: string, value_type: GObject.GType): boolean
    static type_has(gtype: GObject.GType, propname: string): boolean
    /**
     * Get the string identifier for `method` at `object_path`.
     * @param object_path the object path
     * @param method the method
     */
    static type_identifier(object_path: string | null, method: string | null): string
}

interface MessageBus_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `dispatch`
 */
interface MessageBus_DispatchSignalCallback {
    ($obj: MessageBus, message: Message): void
}

/**
 * Signal callback interface for `registered`
 */
interface MessageBus_RegisteredSignalCallback {
    ($obj: MessageBus, object_path: string, method: string): void
}

/**
 * Signal callback interface for `unregistered`
 */
interface MessageBus_UnregisteredSignalCallback {
    ($obj: MessageBus, object_path: string, method: string): void
}

interface MessageBus {

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
     */
    // TODO fix conflict: connect(object_path: string, method: string, callback: MessageCallback): number
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
     */
    is_registered(object_path: string, method: string): boolean
    /**
     * Get the registered #GeditMessageType for `method` at `object_path`. The
     * returned #GeditMessageType is owned by the bus and should not be unreffed.
     * @param object_path the object path
     * @param method the method
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

    connect(sigName: "dispatch", callback: MessageBus_DispatchSignalCallback): number
    connect_after(sigName: "dispatch", callback: MessageBus_DispatchSignalCallback): number
    emit(sigName: "dispatch", message: Message, ...args: any[]): void
    connect(sigName: "registered", callback: MessageBus_RegisteredSignalCallback): number
    connect_after(sigName: "registered", callback: MessageBus_RegisteredSignalCallback): number
    emit(sigName: "registered", object_path: string, method: string, ...args: any[]): void
    connect(sigName: "unregistered", callback: MessageBus_UnregisteredSignalCallback): number
    connect_after(sigName: "unregistered", callback: MessageBus_UnregisteredSignalCallback): number
    emit(sigName: "unregistered", object_path: string, method: string, ...args: any[]): void

    // Class property signals of Gedit-3.0.Gedit.MessageBus

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class MessageBus extends GObject.Object {

    // Own properties of Gedit-3.0.Gedit.MessageBus

    static name: string
    static $gtype: GObject.GType<MessageBus>

    // Constructors of Gedit-3.0.Gedit.MessageBus

    constructor(config?: MessageBus_ConstructProps) 
    /**
     * Create a new message bus. Use gedit_message_bus_get_default() to get the
     * default, application wide, message bus. Creating a new bus is useful for
     * associating a specific bus with for instance a #GeditWindow.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new message bus. Use gedit_message_bus_get_default() to get the
     * default, application wide, message bus. Creating a new bus is useful for
     * associating a specific bus with for instance a #GeditWindow.
     * @constructor 
     */
    static new(): MessageBus
    _init(config?: MessageBus_ConstructProps): void
    /**
     * Get the default application #GeditMessageBus.
     */
    static get_default(): MessageBus
}

interface ProgressInfoBar_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Orientable_ConstructProps, Gtk.InfoBar_ConstructProps {

    // Own constructor properties of Gedit-3.0.Gedit.ProgressInfoBar

    has_cancel_button?: boolean | null
}

interface ProgressInfoBar extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gedit-3.0.Gedit.ProgressInfoBar

    readonly has_cancel_button: boolean

    // Conflicting properties

    parent: any

    // Owm methods of Gedit-3.0.Gedit.ProgressInfoBar

    pulse(): void
    set_fraction(fraction: number): void
    set_icon_name(icon_name: string): void
    set_markup(markup: string): void
    set_text(text: string): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Gedit-3.0.Gedit.ProgressInfoBar

    connect(sigName: "notify::has-cancel-button", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-cancel-button", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-cancel-button", ...args: any[]): void
    connect(sigName: "notify::message-type", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message-type", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::message-type", ...args: any[]): void
    connect(sigName: "notify::revealed", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::revealed", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::revealed", ...args: any[]): void
    connect(sigName: "notify::show-close-button", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-close-button", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-close-button", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::baseline-position", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::homogeneous", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spacing", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::orientation", callback: (($obj: ProgressInfoBar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ProgressInfoBar extends Gtk.InfoBar {

    // Own properties of Gedit-3.0.Gedit.ProgressInfoBar

    static name: string
    static $gtype: GObject.GType<ProgressInfoBar>

    // Constructors of Gedit-3.0.Gedit.ProgressInfoBar

    constructor(config?: ProgressInfoBar_ConstructProps) 
    constructor(icon_name: string, markup: string, has_cancel: boolean) 
    static new(icon_name: string, markup: string, has_cancel: boolean): ProgressInfoBar

    // Overloads of new

    /**
     * Creates a new #GtkInfoBar object.
     * @constructor 
     */
    static new(): Gtk.InfoBar
    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: ProgressInfoBar_ConstructProps): void
}

interface Statusbar_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Orientable_ConstructProps, Gtk.Statusbar_ConstructProps {
}

interface Statusbar extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Owm methods of Gedit-3.0.Gedit.Statusbar

    clear_overwrite(): void
    /**
     * Sets the overwrite mode on the statusbar.
     * @param overwrite if the overwrite mode is set
     */
    set_overwrite(overwrite: boolean): void
    set_window_state(state: WindowState, num_of_errors: number): void

    // Conflicting methods

    remove(...args: any[]): any
    child_notify(...args: any[]): any

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

class Statusbar extends Gtk.Statusbar {

    // Own properties of Gedit-3.0.Gedit.Statusbar

    static name: string
    static $gtype: GObject.GType<Statusbar>

    // Constructors of Gedit-3.0.Gedit.Statusbar

    constructor(config?: Statusbar_ConstructProps) 
    /**
     * Creates a new #GeditStatusbar.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GeditStatusbar.
     * @constructor 
     */
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

interface Tab_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Orientable_ConstructProps, Gtk.Box_ConstructProps {

    // Own constructor properties of Gedit-3.0.Gedit.Tab

    autosave?: boolean | null
    autosave_interval?: number | null
}

/**
 * Signal callback interface for `drop-uris`
 */
interface Tab_DropUrisSignalCallback {
    ($obj: Tab, object: string[]): void
}

interface Tab extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gedit-3.0.Gedit.Tab

    autosave: boolean
    autosave_interval: number
    readonly can_close: boolean
    readonly name: string
    readonly state: TabState

    // Owm methods of Gedit-3.0.Gedit.Tab

    /**
     * Gets the current state for the autosave feature
     */
    get_auto_save_enabled(): boolean
    /**
     * Gets the current interval for the autosaves
     */
    get_auto_save_interval(): number
    /**
     * Gets the #GeditDocument associated to `tab`.
     */
    get_document(): Document
    /**
     * Gets the #GeditTabState of `tab`.
     */
    get_state(): TabState

    // Overloads of get_state

    /**
     * Returns the widget’s state. See gtk_widget_set_state().
     */
    get_state(): Gtk.StateType
    get_state(...args: any[]): any
    get_state(...args: any[]): TabState | Gtk.StateType | any
    /**
     * Gets the #GeditView inside `tab`.
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

    child_notify(...args: any[]): any

    // Own signals of Gedit-3.0.Gedit.Tab

    connect(sigName: "drop-uris", callback: Tab_DropUrisSignalCallback): number
    connect_after(sigName: "drop-uris", callback: Tab_DropUrisSignalCallback): number
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

class Tab extends Gtk.Box {

    // Own properties of Gedit-3.0.Gedit.Tab

    static name: string
    static $gtype: GObject.GType<Tab>

    // Constructors of Gedit-3.0.Gedit.Tab

    constructor(config?: Tab_ConstructProps) 
    _init(config?: Tab_ConstructProps): void
    /**
     * Gets the #GeditTab associated with `doc`.
     * @param doc a #GeditDocument
     */
    static get_from_document(doc: Document): Tab
}

interface View_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Scrollable_ConstructProps, GtkSource.View_ConstructProps {
}

/**
 * Signal callback interface for `drop-uris`
 */
interface View_DropUrisSignalCallback {
    ($obj: View, uri_list: string[]): void
}

interface View extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Conflicting properties

    parent: any
    parent_instance: any

    // Own fields of Gedit-3.0.Gedit.View

    view: GtkSource.View

    // Owm methods of Gedit-3.0.Gedit.View

    copy_clipboard(): void
    cut_clipboard(): void
    /**
     * Deletes the text currently selected in the #GtkTextBuffer associated
     * to the view and scroll to the cursor position.
     */
    delete_selection(): void
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
     * If `default_font` is #TRUE, resets the font of the `view` to the default font.
     * Otherwise sets it to `font_name`.
     * @param default_font whether to reset to the default font
     * @param font_name the name of the font to use
     */
    set_font(default_font: boolean, font_name: string): void

    // Conflicting methods

    get_window(...args: any[]): any
    child_notify(...args: any[]): any

    // Own virtual methods of Gedit-3.0.Gedit.View

    vfunc_drop_uris(uri_list: string): void

    // Own signals of Gedit-3.0.Gedit.View

    connect(sigName: "drop-uris", callback: View_DropUrisSignalCallback): number
    connect_after(sigName: "drop-uris", callback: View_DropUrisSignalCallback): number
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

class View extends GtkSource.View {

    // Own properties of Gedit-3.0.Gedit.View

    static name: string
    static $gtype: GObject.GType<View>

    // Constructors of Gedit-3.0.Gedit.View

    constructor(config?: View_ConstructProps) 
    /**
     * Creates a new #GeditView object displaying the `doc` document.
     * `doc` cannot be %NULL.
     * @constructor 
     * @param doc a #GeditDocument
     */
    constructor(doc: Document) 
    /**
     * Creates a new #GeditView object displaying the `doc` document.
     * `doc` cannot be %NULL.
     * @constructor 
     * @param doc a #GeditDocument
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
     */
    static new(): GtkSource.View
    _init(config?: View_ConstructProps): void

    // Conflicting static methods

    static new_with_buffer(...args: any[]): any
}

interface Window_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gio.ActionGroup_ConstructProps, Gio.ActionMap_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.ApplicationWindow_ConstructProps {
}

/**
 * Signal callback interface for `active-tab-changed`
 */
interface Window_ActiveTabChangedSignalCallback {
    ($obj: Window, object: Tab): void
}

/**
 * Signal callback interface for `active-tab-state-changed`
 */
interface Window_ActiveTabStateChangedSignalCallback {
    ($obj: Window): void
}

/**
 * Signal callback interface for `tab-added`
 */
interface Window_TabAddedSignalCallback {
    ($obj: Window, object: Tab): void
}

/**
 * Signal callback interface for `tab-removed`
 */
interface Window_TabRemovedSignalCallback {
    ($obj: Window, object: Tab): void
}

/**
 * Signal callback interface for `tabs-reordered`
 */
interface Window_TabsReorderedSignalCallback {
    ($obj: Window): void
}

interface Window extends Atk.ImplementorIface, Gio.ActionGroup, Gio.ActionMap, Gtk.Buildable {

    // Own properties of Gedit-3.0.Gedit.Window

    readonly state: WindowState

    // Conflicting properties

    parent_instance: any

    // Own fields of Gedit-3.0.Gedit.Window

    window: Gtk.ApplicationWindow

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
     */
    create_tab_from_location(location: Gio.File, encoding: GtkSource.Encoding | null, line_pos: number, column_pos: number, create: boolean, jump_to: boolean): Tab
    create_tab_from_stream(stream: Gio.InputStream, encoding: GtkSource.Encoding | null, line_pos: number, column_pos: number, jump_to: boolean): Tab
    /**
     * Gets the active #GeditDocument.
     */
    get_active_document(): Document
    /**
     * Gets the active #GeditTab in the `window`.
     */
    get_active_tab(): Tab
    /**
     * Gets the active #GeditView.
     */
    get_active_view(): View
    /**
     * Gets the bottom panel of the `window`.
     */
    get_bottom_panel(): Gtk.Widget
    /**
     * Gets a newly allocated list with all the documents in the window.
     * This list must be freed.
     */
    get_documents(): Document[]
    /**
     * Gets the #GtkWindowGroup in which `window` resides.
     */
    get_group(): Gtk.WindowGroup
    /**
     * Gets the #GeditMessageBus associated with `window`. The returned reference
     * is owned by the window and should not be unreffed.
     */
    get_message_bus(): MessageBus
    /**
     * Gets the side panel of the `window`.
     */
    get_side_panel(): Gtk.Widget
    /**
     * Retrieves the state of the `window`.
     */
    get_state(): WindowState

    // Overloads of get_state

    /**
     * Returns the widget’s state. See gtk_widget_set_state().
     */
    get_state(): Gtk.StateType
    get_state(...args: any[]): any
    get_state(...args: any[]): WindowState | Gtk.StateType | any
    /**
     * Gets the #GeditStatusbar of the `window`.
     */
    get_statusbar(): Gtk.Widget
    /**
     * Gets the #GeditTab that matches with the given `location`.
     * @param location a #GFile
     */
    get_tab_from_location(location: Gio.File): Tab
    /**
     * Gets the list of documents that need to be saved before closing the window.
     */
    get_unsaved_documents(): Document[]
    /**
     * Gets a list with all the views in the window. This list must be freed.
     */
    get_views(): View[]
    /**
     * Switches to the tab that matches with `tab`.
     * @param tab a #GeditTab
     */
    set_active_tab(tab: Tab): void

    // Conflicting methods

    mnemonic_activate(...args: any[]): any
    child_notify(...args: any[]): any

    // Own virtual methods of Gedit-3.0.Gedit.Window

    vfunc_active_tab_changed(tab: Tab): void
    vfunc_active_tab_state_changed(): void
    vfunc_tab_added(tab: Tab): void
    vfunc_tab_removed(tab: Tab): void
    vfunc_tabs_reordered(): void

    // Own signals of Gedit-3.0.Gedit.Window

    connect(sigName: "active-tab-changed", callback: Window_ActiveTabChangedSignalCallback): number
    connect_after(sigName: "active-tab-changed", callback: Window_ActiveTabChangedSignalCallback): number
    emit(sigName: "active-tab-changed", object: Tab, ...args: any[]): void
    connect(sigName: "active-tab-state-changed", callback: Window_ActiveTabStateChangedSignalCallback): number
    connect_after(sigName: "active-tab-state-changed", callback: Window_ActiveTabStateChangedSignalCallback): number
    emit(sigName: "active-tab-state-changed", ...args: any[]): void
    connect(sigName: "tab-added", callback: Window_TabAddedSignalCallback): number
    connect_after(sigName: "tab-added", callback: Window_TabAddedSignalCallback): number
    emit(sigName: "tab-added", object: Tab, ...args: any[]): void
    connect(sigName: "tab-removed", callback: Window_TabRemovedSignalCallback): number
    connect_after(sigName: "tab-removed", callback: Window_TabRemovedSignalCallback): number
    emit(sigName: "tab-removed", object: Tab, ...args: any[]): void
    connect(sigName: "tabs-reordered", callback: Window_TabsReorderedSignalCallback): number
    connect_after(sigName: "tabs-reordered", callback: Window_TabsReorderedSignalCallback): number
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

class Window extends Gtk.ApplicationWindow {

    // Own properties of Gedit-3.0.Gedit.Window

    static name: string
    static $gtype: GObject.GType<Window>

    // Constructors of Gedit-3.0.Gedit.Window

    constructor(config?: Window_ConstructProps) 
    _init(config?: Window_ConstructProps): void

    // Conflicting static methods

    static new(...args: any[]): any
}

interface AppActivatableInterface {

    // Own fields of Gedit-3.0.Gedit.AppActivatableInterface

    g_iface: GObject.TypeInterface
    activate: (activatable: AppActivatable) => void
    deactivate: (activatable: AppActivatable) => void
}

abstract class AppActivatableInterface {

    // Own properties of Gedit-3.0.Gedit.AppActivatableInterface

    static name: string
}

interface AppClass {

    // Own fields of Gedit-3.0.Gedit.AppClass

    parent_class: Gtk.ApplicationClass
    show_help: (app: App, parent: Gtk.Window, name: string, link_id: string) => boolean
    help_link_id: (app: App, name: string, link_id: string) => string
    set_window_title: (app: App, window: Window, title: string) => void
    process_window_event: (app: App, window: Window, event: Gdk.Event) => boolean
}

abstract class AppClass {

    // Own properties of Gedit-3.0.Gedit.AppClass

    static name: string
}

interface DocumentClass {

    // Own fields of Gedit-3.0.Gedit.DocumentClass

    parent_class: GtkSource.BufferClass
    cursor_moved: (document: Document) => void
    load: (document: Document) => void
    loaded: (document: Document) => void
    save: (document: Document) => void
    saved: (document: Document) => void
}

abstract class DocumentClass {

    // Own properties of Gedit-3.0.Gedit.DocumentClass

    static name: string
}

interface EncodingsComboBoxClass {

    // Own fields of Gedit-3.0.Gedit.EncodingsComboBoxClass

    parent_class: Gtk.ComboBoxClass
}

abstract class EncodingsComboBoxClass {

    // Own properties of Gedit-3.0.Gedit.EncodingsComboBoxClass

    static name: string
}

interface MenuExtensionClass {

    // Own fields of Gedit-3.0.Gedit.MenuExtensionClass

    parent_class: GObject.ObjectClass
}

abstract class MenuExtensionClass {

    // Own properties of Gedit-3.0.Gedit.MenuExtensionClass

    static name: string
}

interface MessageBusClass {

    // Own fields of Gedit-3.0.Gedit.MessageBusClass

    parent_class: GObject.ObjectClass
    dispatch: (bus: MessageBus, message: Message) => void
    registered: (bus: MessageBus, object_path: string, method: string) => void
    unregistered: (bus: MessageBus, object_path: string, method: string) => void
}

abstract class MessageBusClass {

    // Own properties of Gedit-3.0.Gedit.MessageBusClass

    static name: string
}

interface MessageBusPrivate {
}

class MessageBusPrivate {

    // Own properties of Gedit-3.0.Gedit.MessageBusPrivate

    static name: string
}

interface MessageClass {

    // Own fields of Gedit-3.0.Gedit.MessageClass

    parent_class: GObject.ObjectClass
}

abstract class MessageClass {

    // Own properties of Gedit-3.0.Gedit.MessageClass

    static name: string
}

interface MessagePrivate {
}

class MessagePrivate {

    // Own properties of Gedit-3.0.Gedit.MessagePrivate

    static name: string
}

interface ProgressInfoBarClass {

    // Own fields of Gedit-3.0.Gedit.ProgressInfoBarClass

    parent_class: Gtk.InfoBarClass
}

abstract class ProgressInfoBarClass {

    // Own properties of Gedit-3.0.Gedit.ProgressInfoBarClass

    static name: string
}

interface StatusbarClass {

    // Own fields of Gedit-3.0.Gedit.StatusbarClass

    parent_class: Gtk.StatusbarClass
}

abstract class StatusbarClass {

    // Own properties of Gedit-3.0.Gedit.StatusbarClass

    static name: string
}

interface TabClass {

    // Own fields of Gedit-3.0.Gedit.TabClass

    parent_class: Gtk.BoxClass
}

abstract class TabClass {

    // Own properties of Gedit-3.0.Gedit.TabClass

    static name: string
}

interface ViewActivatableInterface {

    // Own fields of Gedit-3.0.Gedit.ViewActivatableInterface

    g_iface: GObject.TypeInterface
    activate: (activatable: ViewActivatable) => void
    deactivate: (activatable: ViewActivatable) => void
}

abstract class ViewActivatableInterface {

    // Own properties of Gedit-3.0.Gedit.ViewActivatableInterface

    static name: string
}

interface ViewClass {

    // Own fields of Gedit-3.0.Gedit.ViewClass

    parent_class: GtkSource.ViewClass
    drop_uris: (view: View, uri_list: string) => void
    padding: object
}

abstract class ViewClass {

    // Own properties of Gedit-3.0.Gedit.ViewClass

    static name: string
}

interface ViewPrivate {
}

class ViewPrivate {

    // Own properties of Gedit-3.0.Gedit.ViewPrivate

    static name: string
}

interface WindowActivatableInterface {

    // Own fields of Gedit-3.0.Gedit.WindowActivatableInterface

    g_iface: GObject.TypeInterface
    activate: (activatable: WindowActivatable) => void
    deactivate: (activatable: WindowActivatable) => void
    update_state: (activatable: WindowActivatable) => void
}

abstract class WindowActivatableInterface {

    // Own properties of Gedit-3.0.Gedit.WindowActivatableInterface

    static name: string
}

interface WindowClass {

    // Own fields of Gedit-3.0.Gedit.WindowClass

    parent_class: Gtk.ApplicationWindowClass
    tab_added: (window: Window, tab: Tab) => void
    tab_removed: (window: Window, tab: Tab) => void
    tabs_reordered: (window: Window) => void
    active_tab_changed: (window: Window, tab: Tab) => void
    active_tab_state_changed: (window: Window) => void
}

abstract class WindowClass {

    // Own properties of Gedit-3.0.Gedit.WindowClass

    static name: string
}

interface WindowPrivate {
}

class WindowPrivate {

    // Own properties of Gedit-3.0.Gedit.WindowPrivate

    static name: string
}

}
export default Gedit;