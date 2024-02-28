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
     * Loads `location`. Ignores non-existing locations.
     * @param window a #GeditWindow
     * @param location a #GFile to load
     * @param encoding the #GtkSourceEncoding of @location
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
     * @param window a #GeditWindow
     * @param locations the locations to load
     * @param encoding the #GtkSourceEncoding
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
     * @param window a #GeditWindow.
     */
    function commands_save_all_documents(window: Window): void;
    /**
     * Asynchronously save `document`. `document` must belong to `window`. If you need
     * the result of the operation, use gedit_commands_save_document_async().
     * @param window a #GeditWindow.
     * @param document the #GeditDocument to save.
     */
    function commands_save_document(window: Window, document: Document): void;
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
    function commands_save_document_async(
        document: Document,
        window: Window,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<Document> | null,
    ): void;
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
    function commands_save_document_finish(document: Document, result: Gio.AsyncResult): boolean;
    /**
     * If `section` is enabled, then logs the trace information `file,` `line,` and
     * `function`.
     * @param section debug section.
     * @param file file name.
     * @param line line number.
     * @param _function name of the function that is calling gedit_debug().
     */
    function debug(section: DebugSection, file: string, line: number, _function: string): void;
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
    function debug_init(): void;
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
     * @param _function name of the function that is calling gedit_debug_plugin_message().
     * @param message a message.
     */
    function debug_plugin_message(file: string, line: number, _function: string, message: string): void;
    function utils_basename_for_display(location: Gio.File): string;
    /**
     * Create a list of valid uri's from a uri-list drop.
     * @param selection_data the #GtkSelectionData from drag_data_received
     * @returns a string array which will hold the uris or           %NULL if there were no valid uris. g_strfreev should be used when           the string array is no longer used
     */
    function utils_drop_get_uris(selection_data: Gtk.SelectionData): string[];
    function utils_get_compression_type_from_content_type(content_type: string): GtkSource.CompressionType;
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
    function utils_menu_position_under_tree_view(tree_view: Gtk.TreeView, rect: Gdk.Rectangle): boolean;
    function utils_newline_type_to_string(newline_type: GtkSource.NewlineType): string;
    /**
     * This function sets up name and description
     * for a specified gtk widget.
     * @param widget The Gtk widget for which name/description to be set
     * @param name Atk name string
     * @param description Atk description string
     */
    function utils_set_atk_name_description(widget: Gtk.Widget, name: string, description: string): void;
    function utils_set_direct_save_filename(context: Gdk.DragContext): string;
    interface MessageBusForeach {
        (object_path: string, method: string): void;
    }
    interface MessageCallback {
        (bus: MessageBus, message: Message): void;
    }
    /**
     * Enumeration of debug sections.
     *
     * Debugging output for a section is enabled by setting an environment variable
     * of the same name. For example, setting the <code>GEDIT_DEBUG_PLUGINS</code>
     * environment variable enables all debugging output for the %GEDIT_DEBUG_PLUGINS
     * section. Setting the special environment variable <code>GEDIT_DEBUG</code>
     * enables output for all sections.
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
    enum WindowState {
        NORMAL,
        SAVING,
        PRINTING,
        LOADING,
        ERROR,
    }
    module App {
        // Constructor properties interface
    }

    class App extends Gtk.Application {
        // Owm methods of Gedit-3.0.App

        /**
         * Create a new #GeditWindow part of `app`.
         * @param screen
         * @returns the new #GeditWindow
         */
        create_window(screen?: Gdk.Screen | null): Window;
        /**
         * Returns all the documents currently open in #GeditApp.
         * @returns a newly allocated list of #GeditDocument objects
         */
        get_documents(): Document[];
        /**
         * Returns all #GeditWindows currently open in #GeditApp.
         * This differs from gtk_application_get_windows() since it does not
         * include the preferences dialog and other auxiliary windows.
         * @returns a newly allocated list of #GeditWindow objects
         */
        get_main_windows(): Window[];
        /**
         * Returns all the views currently present in #GeditApp.
         * @returns a newly allocated list of #GeditView objects
         */
        get_views(): View[];
        process_window_event(window: Window, event: Gdk.Event): boolean;
        set_window_title(window: Window, title: string): void;
        show_help(parent: Gtk.Window, name: string, link_id: string): boolean;
    }

    module Document {
        // Signal callback interfaces

        interface Load {
            (): void;
        }

        interface Loaded {
            (): void;
        }

        interface Save {
            (): void;
        }

        interface Saved {
            (): void;
        }

        // Constructor properties interface
    }

    class Document extends GtkSource.Buffer {
        // Own properties of Gedit-3.0.Document

        /**
         * The document's content type.
         */
        content_type: string;
        /**
         * The document's content type.
         */
        contentType: string;
        /**
         * <warning>
         * The property is used internally by gedit. It must not be used in a
         * gedit plugin. The property can be modified or removed at any time.
         * </warning>
         */
        readonly empty_search: boolean;
        /**
         * <warning>
         * The property is used internally by gedit. It must not be used in a
         * gedit plugin. The property can be modified or removed at any time.
         * </warning>
         */
        readonly emptySearch: boolean;
        /**
         * The document's MIME type.
         */
        readonly mime_type: string;
        /**
         * The document's MIME type.
         */
        readonly mimeType: string;

        // Constructors of Gedit-3.0.Document

        static ['new'](): Document;

        // Owm methods of Gedit-3.0.Document

        get_content_type(): string;
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
        get_file(): GtkSource.File;
        get_language(): GtkSource.Language;
        /**
         * Gets the metadata assigned to `key`.
         * @param key name of the key
         * @returns the value assigned to @key. Free with g_free().
         */
        get_metadata(key: string): string;
        /**
         * Note: this never returns %NULL.
         */
        get_mime_type(): string;
        /**
         * Gets the search context. Use this function only if you have used
         * gedit_document_set_search_context() before. You should not alter other search
         * contexts, so you have to verify that the returned search context is yours.
         * One way to verify that is to compare the search settings object, or to mark
         * the search context with g_object_set_data().
         * @returns the current search context of the document, or NULL if there is no current search context.
         */
        get_search_context(): GtkSource.SearchContext;
        /**
         * Note: this never returns %NULL.
         */
        get_short_name_for_display(): string;
        is_untitled(): boolean;
        set_language(lang?: GtkSource.Language | null): void;
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
        set_search_context(search_context?: GtkSource.SearchContext | null): void;
    }

    module EncodingsComboBox {
        // Constructor properties interface
    }

    class EncodingsComboBox extends Gtk.ComboBox {
        // Own properties of Gedit-3.0.EncodingsComboBox

        /**
         * Whether the combo box should be used for saving a content. If
         * %FALSE, the combo box is used for loading a content (e.g. a file)
         * and the row "Automatically Detected" is added.
         */
        save_mode: boolean;
        /**
         * Whether the combo box should be used for saving a content. If
         * %FALSE, the combo box is used for loading a content (e.g. a file)
         * and the row "Automatically Detected" is added.
         */
        saveMode: boolean;

        // Constructors of Gedit-3.0.EncodingsComboBox

        static ['new'](save_mode: boolean): EncodingsComboBox;

        // Owm methods of Gedit-3.0.EncodingsComboBox

        get_selected_encoding(): GtkSource.Encoding;
        /**
         * Sets the selected encoding.
         * @param encoding the #GtkSourceEncoding.
         */
        set_selected_encoding(encoding: GtkSource.Encoding): void;
    }

    module MenuExtension {
        // Constructor properties interface
    }

    class MenuExtension extends GObject.Object {
        // Own properties of Gedit-3.0.MenuExtension

        menu: Gio.Menu;

        // Constructors of Gedit-3.0.MenuExtension

        static ['new'](menu: Gio.Menu): MenuExtension;

        // Owm methods of Gedit-3.0.MenuExtension

        append_menu_item(item: Gio.MenuItem): void;
        prepend_menu_item(item: Gio.MenuItem): void;
        remove_items(): void;
    }

    module Message {
        // Constructor properties interface
    }

    class Message extends GObject.Object {
        // Own properties of Gedit-3.0.Message

        /**
         * The messages method.
         */
        method: string;
        object_path: string;
        objectPath: string;

        // Owm methods of Gedit-3.0.Message

        /**
         * Returns whether `object_path` is a valid object path
         * @param object_path the object path
         */
        static is_valid_object_path(object_path?: string | null): boolean;
        static type_check(gtype: GObject.GType, propname: string, value_type: GObject.GType): boolean;
        static type_has(gtype: GObject.GType, propname: string): boolean;
        /**
         * Get the string identifier for `method` at `object_path`.
         * @param object_path the object path
         * @param method the method
         */
        static type_identifier(object_path?: string | null, method?: string | null): string;

        // Owm methods of Gedit-3.0.Message

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
         * @returns %TRUE if message has @propname, %FALSE otherwise
         */
        has(propname: string): boolean;
    }

    module MessageBus {
        // Signal callback interfaces

        interface Dispatch {
            (message: Message): void;
        }

        interface Registered {
            (object_path: string, method: string): void;
        }

        interface Unregistered {
            (object_path: string, method: string): void;
        }

        // Constructor properties interface
    }

    class MessageBus extends GObject.Object {
        // Constructors of Gedit-3.0.MessageBus

        static ['new'](): MessageBus;

        // Owm methods of Gedit-3.0.MessageBus

        /**
         * Get the default application #GeditMessageBus.
         */
        static get_default(): MessageBus;

        // Owm methods of Gedit-3.0.MessageBus

        /**
         * Blocks evoking the callback specified by `id`. Unblock the callback by
         * using gedit_message_bus_unblock().
         * @param id the callback id
         */
        block(id: number): void;
        /**
         * Blocks evoking the callback that matches provided `callback` and `user_data`.
         * Unblock the callback using gedit_message_bus_unblock_by_func().
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
         * @param callback function to be called when message @method at @object_path is sent
         * @param destroy_data function to evoke with @user_data as argument when @user_data                needs to be freed
         * @returns the callback identifier
         */
        connect(
            object_path: string,
            method: string,
            callback: MessageCallback,
            destroy_data?: GLib.DestroyNotify | null,
        ): number;
        /**
         * Disconnects a previously connected message callback.
         * @param id the callback id as returned by gedit_message_bus_connect()
         */
        disconnect(id: number): void;
        /**
         * Disconnects a previously connected message callback by matching the
         * provided callback function and user_data. See also
         * gedit_message_bus_disconnect().
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
         * @returns %TRUE if the @method at @object_path is a registered message               type on the bus
         */
        is_registered(object_path: string, method: string): boolean;
        /**
         * Get the registered #GeditMessageType for `method` at `object_path`. The
         * returned #GeditMessageType is owned by the bus and should not be unreffed.
         * @param object_path the object path
         * @param method the method
         * @returns the registered #GeditMessageType or %NULL if no message type               is registered for @method at @object_path
         */
        lookup(object_path: string, method: string): GObject.GType;
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
        register(message_type: GObject.GType, object_path: string, method: string): void;
        /**
         * This sends the provided `message` asynchronously over the bus. To send
         * a message synchronously, use gedit_message_bus_send_message_sync(). The
         * convenience function gedit_message_bus_send() can be used to easily send
         * a message without constructing the message object explicitly first.
         * @param message the message to send
         */
        send_message(message: Message): void;
        /**
         * This sends the provided `message` synchronously over the bus. To send
         * a message asynchronously, use gedit_message_bus_send_message(). The
         * convenience function gedit_message_bus_send_sync() can be used to easily send
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
         * This function emits the #GeditMessageBus::unregistered signal.
         * @param object_path the object path
         * @param method the method
         */
        unregister(object_path: string, method: string): void;
        /**
         * Unregisters all message types for `object_path`. This is especially useful for
         * plugins which should unregister message types when they are deactivated.
         *
         * This function emits the #GeditMessageBus::unregistered signal for all
         * unregistered message types.
         * @param object_path the object path
         */
        unregister_all(object_path: string): void;
    }

    module Statusbar {
        // Constructor properties interface
    }

    class Statusbar extends Gtk.Statusbar {
        // Constructors of Gedit-3.0.Statusbar

        static ['new'](): Statusbar;

        // Owm methods of Gedit-3.0.Statusbar

        clear_overwrite(): void;
        /**
         * Sets the overwrite mode on the statusbar.
         * @param overwrite if the overwrite mode is set
         */
        set_overwrite(overwrite: boolean): void;
        set_window_state(state: WindowState, num_of_errors: number): void;
    }

    module Tab {
        // Signal callback interfaces

        interface DropUris {
            (object: string[]): void;
        }

        // Constructor properties interface
    }

    class Tab extends Gtk.Box {
        // Own properties of Gedit-3.0.Tab

        autosave: boolean;
        autosave_interval: number;
        autosaveInterval: number;
        readonly can_close: boolean;
        readonly canClose: boolean;
        readonly name: string;
        readonly state: TabState;

        // Owm methods of Gedit-3.0.Tab

        /**
         * Gets the #GeditTab associated with `doc`.
         * @param doc a #GeditDocument
         */
        static get_from_document(doc: Document): Tab;

        // Owm methods of Gedit-3.0.Tab

        /**
         * Gets the current state for the autosave feature
         * @returns %TRUE if the autosave is enabled, else %FALSE
         */
        get_auto_save_enabled(): boolean;
        /**
         * Gets the current interval for the autosaves
         * @returns the value of the autosave
         */
        get_auto_save_interval(): number;
        /**
         * Gets the #GeditDocument associated to `tab`.
         * @returns the #GeditDocument associated to @tab
         */
        get_document(): Document;
        /**
         * Gets the #GeditTabState of `tab`.
         * @returns the #GeditTabState of @tab
         */
        get_state(): TabState;
        /**
         * Gets the #GeditView inside `tab`.
         * @returns the #GeditView inside @tab
         */
        get_view(): View;
        /**
         * Enables or disables the autosave feature. It does not install an
         * autosave timeout if the document is new or is read-only
         * @param enable enable (%TRUE) or disable (%FALSE) auto save
         */
        set_auto_save_enabled(enable: boolean): void;
        /**
         * Sets the interval for the autosave feature.
         * @param interval the new interval
         */
        set_auto_save_interval(interval: number): void;
        set_info_bar(info_bar: Gtk.Widget): void;
    }

    module View {
        // Signal callback interfaces

        interface DropUris {
            (uri_list: string[]): void;
        }

        // Constructor properties interface
    }

    class View extends GtkSource.View {
        // Constructors of Gedit-3.0.View

        static ['new'](doc: Document): View;
    }

    module Window {
        // Signal callback interfaces

        interface ActiveTabChanged {
            (object: Tab): void;
        }

        interface ActiveTabStateChanged {
            (): void;
        }

        interface TabAdded {
            (object: Tab): void;
        }

        interface TabRemoved {
            (object: Tab): void;
        }

        interface TabsReordered {
            (): void;
        }

        // Constructor properties interface
    }

    class Window extends Gtk.ApplicationWindow {
        // Own properties of Gedit-3.0.Window

        readonly state: WindowState;

        // Own fields of Gedit-3.0.Window

        window: Gtk.ApplicationWindow;

        // Owm methods of Gedit-3.0.Window

        /**
         * Closes all opened tabs.
         */
        close_all_tabs(): void;
        /**
         * Closes the `tab`.
         * @param tab the #GeditTab to close
         */
        close_tab(tab: Tab): void;
        /**
         * Closes all tabs specified by `tabs`.
         * @param tabs a list of #GeditTab
         */
        close_tabs(tabs: Tab[]): void;
        /**
         * Creates a new #GeditTab and adds the new tab to the #GtkNotebook.
         * In case `jump_to` is %TRUE the #GtkNotebook switches to that new #GeditTab.
         * @param jump_to %TRUE to set the new #GeditTab as active
         * @returns a new #GeditTab
         */
        create_tab(jump_to: boolean): Tab;
        /**
         * Creates a new #GeditTab loading the document specified by `uri`.
         * In case `jump_to` is %TRUE the #GtkNotebook swithes to that new #GeditTab.
         * Whether `create` is %TRUE, creates a new empty document if location does
         * not refer to an existing file
         * @param location the location of the document
         * @param encoding a #GtkSourceEncoding, or %NULL
         * @param line_pos the line position to visualize
         * @param column_pos the column position to visualize
         * @param create %TRUE to create a new document in case @uri does exist
         * @param jump_to %TRUE to set the new #GeditTab as active
         * @returns a new #GeditTab
         */
        create_tab_from_location(
            location: Gio.File,
            encoding: GtkSource.Encoding | null,
            line_pos: number,
            column_pos: number,
            create: boolean,
            jump_to: boolean,
        ): Tab;
        create_tab_from_stream(
            stream: Gio.InputStream,
            encoding: GtkSource.Encoding | null,
            line_pos: number,
            column_pos: number,
            jump_to: boolean,
        ): Tab;
        /**
         * Gets the active #GeditDocument.
         * @returns the active #GeditDocument
         */
        get_active_document(): Document;
        /**
         * Gets the active #GeditTab in the `window`.
         * @returns the active #GeditTab in the @window.
         */
        get_active_tab(): Tab;
        /**
         * Gets the active #GeditView.
         * @returns the active #GeditView
         */
        get_active_view(): View;
        /**
         * Gets the bottom panel of the `window`.
         * @returns the bottom panel's #GtkStack.
         */
        get_bottom_panel(): Gtk.Widget;
        /**
         * Gets a newly allocated list with all the documents in the window.
         * This list must be freed.
         * @returns a newly allocated list with all the documents in the window
         */
        get_documents(): Document[];
        /**
         * Gets the #GtkWindowGroup in which `window` resides.
         * @returns the #GtkWindowGroup
         */
        get_group(): Gtk.WindowGroup;
        /**
         * Gets the #GeditMessageBus associated with `window`. The returned reference
         * is owned by the window and should not be unreffed.
         * @returns the #GeditMessageBus associated with @window
         */
        get_message_bus(): MessageBus;
        /**
         * Gets the side panel of the `window`.
         * @returns the side panel's #GtkStack.
         */
        get_side_panel(): Gtk.Widget;
        /**
         * Retrieves the state of the `window`.
         * @returns the current #GeditWindowState of the @window.
         */
        get_state(): WindowState;
        /**
         * Gets the #GeditStatusbar of the `window`.
         * @returns the #GeditStatusbar of the @window.
         */
        get_statusbar(): Gtk.Widget;
        /**
         * Gets the #GeditTab that matches with the given `location`.
         * @param location a #GFile
         * @returns the #GeditTab that matches with the given @location.
         */
        get_tab_from_location(location: Gio.File): Tab;
        /**
         * Gets the list of documents that need to be saved before closing the window.
         * @returns a list of #GeditDocument that need to be saved before closing the window
         */
        get_unsaved_documents(): Document[];
        /**
         * Gets a list with all the views in the window. This list must be freed.
         * @returns a newly allocated list with all the views in the window
         */
        get_views(): View[];
        /**
         * Switches to the tab that matches with `tab`.
         * @param tab a #GeditTab
         */
        set_active_tab(tab: Tab): void;
    }

    class AppActivatableInterface {}

    class AppClass {}

    class DocumentClass {
        // Constructors of Gedit-3.0.DocumentClass

        constructor(
            properties?: Partial<{
                parent_class: unknown;
            }>,
        );
    }

    class EncodingsComboBoxClass {}

    class MenuExtensionClass {}

    class MessageBusClass {}

    class MessageBusPrivate {}

    class MessageClass {}

    class MessagePrivate {}

    class StatusbarClass {}

    class TabClass {}

    class ViewActivatableInterface {}

    class ViewClass {
        // Own fields of Gedit-3.0.ViewClass

        padding: any;

        // Constructors of Gedit-3.0.ViewClass

        constructor(
            properties?: Partial<{
                parent_class: unknown;
                padding: any;
            }>,
        );
    }

    class ViewPrivate {}

    class WindowActivatableInterface {}

    class WindowClass {}

    class WindowPrivate {}

    interface AppActivatable {
        // Own properties of Gedit-3.0.AppActivatable

        /**
         * The app property contains the gedit app for this
         * #GeditAppActivatable instance.
         */
        app: App;

        // Owm methods of Gedit-3.0.AppActivatable

        /**
         * Activates the extension on the application.
         */
        activate(): void;
        /**
         * Deactivates the extension from the application.
         */
        deactivate(): void;
        /**
         * Gets the #GeditMenuExtension for the menu `extension_point`. Note that
         * the extension point could be in different menus (gear menu, app menu, etc)
         * depending on the platform.
         * @param extension_point the extension point section of the menu to get.
         * @returns a #GeditMenuExtension for the specific section or %NULL if not found.
         */
        extend_menu(extension_point: string): MenuExtension;

        // Own virtual methods of Gedit-3.0.AppActivatable

        /**
         * Activates the extension on the application.
         */
        vfunc_activate(): void;
        /**
         * Deactivates the extension from the application.
         */
        vfunc_deactivate(): void;
    }

    interface ViewActivatable {
        // Own properties of Gedit-3.0.ViewActivatable

        /**
         * The window property contains the gedit window for this
         * #GeditViewActivatable instance.
         */
        view: View;

        // Owm methods of Gedit-3.0.ViewActivatable

        /**
         * Activates the extension on the window property.
         */
        activate(): void;
        /**
         * Deactivates the extension on the window property.
         */
        deactivate(): void;

        // Own virtual methods of Gedit-3.0.ViewActivatable

        /**
         * Activates the extension on the window property.
         */
        vfunc_activate(): void;
        /**
         * Deactivates the extension on the window property.
         */
        vfunc_deactivate(): void;
    }

    interface WindowActivatable {
        // Own properties of Gedit-3.0.WindowActivatable

        /**
         * The window property contains the gedit window for this
         * #GeditWindowActivatable instance.
         */
        window: Window;

        // Owm methods of Gedit-3.0.WindowActivatable

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

        // Own virtual methods of Gedit-3.0.WindowActivatable

        /**
         * Activates the extension on the window property.
         */
        vfunc_activate(): void;
        /**
         * Deactivates the extension on the window property.
         */
        vfunc_deactivate(): void;
        /**
         * Triggers an update of the extension internal state to take into account
         * state changes in the window, due to some event or user action.
         */
        vfunc_update_state(): void;
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

export default Gedit;
// END
