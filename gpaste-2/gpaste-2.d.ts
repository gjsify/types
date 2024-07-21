/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GPaste {
    /**
     * GPaste-2
     */

    export namespace ItemKind {
        export const $gtype: GObject.GType<ItemKind>;
    }

    enum ItemKind {
        TEXT,
        URIS,
        IMAGE,
        PASSWORD,
    }

    export namespace UpdateAction {
        export const $gtype: GObject.GType<UpdateAction>;
    }

    enum UpdateAction {
        REPLACE,
        REMOVE,
    }

    export namespace UpdateTarget {
        export const $gtype: GObject.GType<UpdateTarget>;
    }

    enum UpdateTarget {
        ALL,
        POSITION,
    }
    const BUS_NAME: string;
    const CLOSE_ON_SELECT_SETTING: string;
    const DAEMON_ABOUT: string;
    const DAEMON_ADD: string;
    const DAEMON_ADD_FILE: string;
    const DAEMON_ADD_PASSWORD: string;
    const DAEMON_BACKUP_HISTORY: string;
    const DAEMON_DELETE: string;
    const DAEMON_DELETE_HISTORY: string;
    const DAEMON_DELETE_PASSWORD: string;
    const DAEMON_EMPTY_HISTORY: string;
    const DAEMON_GET_ELEMENT: string;
    const DAEMON_GET_ELEMENTS: string;
    const DAEMON_GET_ELEMENT_AT_INDEX: string;
    const DAEMON_GET_ELEMENT_KIND: string;
    const DAEMON_GET_HISTORY: string;
    const DAEMON_GET_HISTORY_NAME: string;
    const DAEMON_GET_HISTORY_SIZE: string;
    const DAEMON_GET_RAW_ELEMENT: string;
    const DAEMON_GET_RAW_HISTORY: string;
    const DAEMON_INTERFACE: string;
    const DAEMON_INTERFACE_NAME: string;
    const DAEMON_LIST_HISTORIES: string;
    const DAEMON_MERGE: string;
    const DAEMON_OBJECT_PATH: string;
    const DAEMON_ON_EXTENSION_STATE_CHANGED: string;
    const DAEMON_PROP_ACTIVE: string;
    const DAEMON_PROP_VERSION: string;
    const DAEMON_REEXECUTE: string;
    const DAEMON_RENAME_PASSWORD: string;
    const DAEMON_REPLACE: string;
    const DAEMON_SEARCH: string;
    const DAEMON_SELECT: string;
    const DAEMON_SET_PASSWORD: string;
    const DAEMON_SHOW_HISTORY: string;
    const DAEMON_SIG_DELETE_HISTORY: string;
    const DAEMON_SIG_EMPTY_HISTORY: string;
    const DAEMON_SIG_SHOW_HISTORY: string;
    const DAEMON_SIG_SWITCH_HISTORY: string;
    const DAEMON_SIG_UPDATE: string;
    const DAEMON_SWITCH_HISTORY: string;
    const DAEMON_TRACK: string;
    const DAEMON_UPLOAD: string;
    const ELEMENT_SIZE_SETTING: string;
    const EMPTY_HISTORY_CONFIRMATION_SETTING: string;
    const EXTENSION_ENABLED_SETTING: string;
    const GNOME_SHELL_BUS_NAME: string;
    const GROWING_LINES_SETTING: string;
    const HISTORY_NAME_SETTING: string;
    const IMAGES_SUPPORT_SETTING: string;
    const LAUNCH_UI_SETTING: string;
    const MAKE_PASSWORD_SETTING: string;
    const MAX_DISPLAYED_HISTORY_SIZE_SETTING: string;
    const MAX_HISTORY_SIZE_SETTING: string;
    const MAX_MEMORY_USAGE_SETTING: string;
    const MAX_TEXT_ITEM_SIZE_SETTING: string;
    const MIN_TEXT_ITEM_SIZE_SETTING: string;
    const OPEN_CENTERED_SETTING: string;
    const POP_SETTING: string;
    const PRIMARY_TO_HISTORY_SETTING: string;
    const RICH_TEXT_SUPPORT_SETTING: string;
    const SAVE_HISTORY_SETTING: string;
    const SCREENSAVER_BUS_NAME: string;
    const SEARCH_PROVIDER_ACTIVATE_RESULT: string;
    const SEARCH_PROVIDER_GET_INITIAL_RESULT_SET: string;
    const SEARCH_PROVIDER_GET_RESULT_METAS: string;
    const SEARCH_PROVIDER_GET_SUBSEARCH_RESULT_SET: string;
    const SEARCH_PROVIDER_INTERFACE: string;
    const SEARCH_PROVIDER_INTERFACE_NAME: string;
    const SEARCH_PROVIDER_LAUNCH_SEARCH: string;
    const SEARCH_PROVIDER_OBJECT_PATH: string;
    const SETTINGS_NAME: string;
    const SETTINGS_PATH: string;
    const SHELL_ENABLED_EXTENSIONS_SETTING: string;
    const SHELL_SETTINGS_NAME: string;
    const SHOW_HISTORY_SETTING: string;
    const SYNCHRONIZE_CLIPBOARDS_SETTING: string;
    const SYNC_CLIPBOARD_TO_PRIMARY_SETTING: string;
    const SYNC_PRIMARY_TO_CLIPBOARD_SETTING: string;
    const TRACK_CHANGES_SETTING: string;
    const TRACK_EXTENSION_STATE_SETTING: string;
    const TRIM_ITEMS_SETTING: string;
    const UPLOAD_SETTING: string;
    /**
     * Activate an action on a GPaste app
     * @param action the action to activate
     * @param arg the action argument
     */
    function util_activate_ui(action: string, arg?: GLib.Variant | null): void;
    /**
     * activate an action from GPaste Ui
     * @param action the action to activate
     * @param arg the action argument
     * @returns whether the action was successful
     */
    function util_activate_ui_sync(action: string, arg?: GLib.Variant | null): boolean;
    /**
     * Empty a history after confirmation.
     * Confirmation is skipped if GPaste is configured to do so.
     * @param client a #GPasteClient instance
     * @param settings a #GPasteSettings instance
     * @param history the name of the history to empty
     */
    function util_empty_with_confirmation(client: Client, settings: Settings, history: string): void;
    /**
     * Empty a history after confirmation.
     * Confirmation is skipped if GPaste is configured to do so.
     * @param client a #GPasteClient instance
     * @param settings a #GPasteSettings instance
     * @param history the name of the history to empty
     * @returns whether the action was successful
     */
    function util_empty_with_confirmation_sync(client: Client, settings: Settings, history: string): boolean;
    /**
     * Ensure the history dir exists
     * @param settings a #GPasteSettings instance
     * @returns where it exists or if there was an error creating it
     */
    function util_ensure_history_dir_exists(settings: Settings): boolean;
    function util_get_dbus_au_result(variant: GLib.Variant, len: number): number;
    /**
     * Get the "(ss)" GVariant as an item
     * @param variant a #GVariant
     * @returns The item
     */
    function util_get_dbus_item_result(variant: GLib.Variant): ClientItem;
    /**
     * Get the "a(ss)" GVariant as a list of items
     * @param variant a #GVariant
     * @returns The items
     */
    function util_get_dbus_items_result(variant: GLib.Variant): ClientItem[];
    /**
     * Get the directory where we store the history
     * @returns the directory
     */
    function util_get_history_dir(): Gio.File;
    /**
     * Get the path to the directory where we store the history
     * @returns the directory path
     */
    function util_get_history_dir_path(): string;
    /**
     * Get the file in which we store the history
     * @param name the name of the history
     * @param extension the file extension
     * @returns the file
     */
    function util_get_history_file(name: string, extension: string): Gio.File;
    /**
     * Get the path to the file in which we store the history
     * @param name the name of the history
     * @param extension the file extension
     * @returns the file path
     */
    function util_get_history_file_path(name: string, extension: string): string;
    /**
     * Check whether gnome-shell is installed or not
     * @returns %TRUE if gnome-shell is installed
     */
    function util_has_gnome_shell(): boolean;
    /**
     * Read the pid file
     * @param component The component we're handling
     * @returns the pid
     */
    function util_read_pid_file(component: string): GLib.Pid;
    function util_replace(text: string, pattern: string, substitution: string): string;
    /**
     * spawn a GPaste app
     * @param app the GPaste app to spawn
     */
    function util_spawn(app: string): void;
    /**
     * spawn a GPaste app
     * @param app the GPaste app to spawn
     * @returns whether the spawn was successful
     */
    function util_spawn_sync(app: string): boolean;
    /**
     * Write the pid file
     * @param component The component we're handling
     */
    function util_write_pid_file(component: string): void;
    /**
     * Decode the text to its original pre-xml form
     * @param text The text to decode
     * @returns the decoded text
     */
    function util_xml_decode(text: string): string;
    /**
     * Encode the text into its xml form
     * @param text The text to encode
     * @returns the encoded text
     */
    function util_xml_encode(text: string): string;
    /**
     * Controls in which GNOME Shell states an action (like keybindings and gestures)
     * should be handled.
     */

    /**
     * Controls in which GNOME Shell states an action (like keybindings and gestures)
     * should be handled.
     */
    export namespace GnomeShellActionMode {
        export const $gtype: GObject.GType<GnomeShellActionMode>;
    }

    enum GnomeShellActionMode {
        /**
         * block action
         */
        NONE,
        /**
         * allow action when in window mode,
         *     e.g. when the focus is in an application window
         */
        NORMAL,
        /**
         * allow action while the overview
         *     is active
         */
        OVERVIEW,
        /**
         * allow action when the screen
         *     is locked, e.g. when the screen shield is shown
         */
        LOCK_SCREEN,
        /**
         * allow action in the unlock
         *     dialog
         */
        UNLOCK_SCREEN,
        /**
         * allow action in the login screen
         */
        LOGIN_SCREEN,
        /**
         * allow action when a system modal
         *     dialog (e.g. authentification or session dialogs) is open
         */
        SYSTEM_MODAL,
        /**
         * allow action in looking glass
         */
        LOOKING_GLASS,
        /**
         * allow action while a shell menu is open
         */
        POPUP,
        /**
         * always allow action
         */
        ALL,
    }

    export namespace MetaKeyBindingFlags {
        export const $gtype: GObject.GType<MetaKeyBindingFlags>;
    }

    enum MetaKeyBindingFlags {
        /**
         * none
         */
        NONE,
        /**
         * per-window
         */
        PER_WINDOW,
        /**
         * built-in
         */
        BUILTIN,
        /**
         * is reversed
         */
        IS_REVERSED,
        /**
         * always active
         */
        NON_MASKABLE,
        IGNORE_AUTOREPEAT,
    }
    module Client {
        // Signal callback interfaces

        interface DeleteHistory {
            (history: string): void;
        }

        interface EmptyHistory {
            (history: string): void;
        }

        interface ShowHistory {
            (): void;
        }

        interface SwitchHistory {
            (history: string): void;
        }

        interface Tracking {
            (object: boolean): void;
        }

        interface Update {
            (action: UpdateAction, target: UpdateTarget, index: number): void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gio.DBusProxy.ConstructorProps,
                Gio.AsyncInitable.ConstructorProps,
                Gio.DBusInterface.ConstructorProps,
                Gio.Initable.ConstructorProps {}
    }

    class Client extends Gio.DBusProxy implements Gio.AsyncInitable<Client>, Gio.DBusInterface, Gio.Initable {
        static $gtype: GObject.GType<Client>;

        // Constructors of GPaste.Client

        constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_finish(result: Gio.AsyncResult): Client;
        // Conflicted with Gio.AsyncInitable.new_finish

        static new_finish(...args: never[]): any;

        static new_sync(): Client;

        // Own signals of GPaste.Client

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'delete-history', callback: (_source: this, history: string) => void): number;
        connect_after(signal: 'delete-history', callback: (_source: this, history: string) => void): number;
        emit(signal: 'delete-history', history: string): void;
        connect(signal: 'empty-history', callback: (_source: this, history: string) => void): number;
        connect_after(signal: 'empty-history', callback: (_source: this, history: string) => void): number;
        emit(signal: 'empty-history', history: string): void;
        connect(signal: 'show-history', callback: (_source: this) => void): number;
        connect_after(signal: 'show-history', callback: (_source: this) => void): number;
        emit(signal: 'show-history'): void;
        connect(signal: 'switch-history', callback: (_source: this, history: string) => void): number;
        connect_after(signal: 'switch-history', callback: (_source: this, history: string) => void): number;
        emit(signal: 'switch-history', history: string): void;
        connect(signal: 'tracking', callback: (_source: this, object: boolean) => void): number;
        connect_after(signal: 'tracking', callback: (_source: this, object: boolean) => void): number;
        emit(signal: 'tracking', object: boolean): void;
        connect(
            signal: 'update',
            callback: (_source: this, action: UpdateAction, target: UpdateTarget, index: number) => void,
        ): number;
        connect_after(
            signal: 'update',
            callback: (_source: this, action: UpdateAction, target: UpdateTarget, index: number) => void,
        ): number;
        emit(signal: 'update', action: UpdateAction, target: UpdateTarget, index: number): void;

        // Own static methods of GPaste.Client

        /**
         * Create a new instance of #GPasteClient
         * @param callback Callback function to invoke when the proxy is ready.
         */
        static ['new'](callback?: Gio.AsyncReadyCallback<Client> | null): void;
        // Conflicted with Gio.DBusProxy.new
        static ['new'](...args: never[]): any;

        // Own methods of GPaste.Client

        /**
         * Display the about dialog
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
         */
        about(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Display the about dialog
         * @param result A #GAsyncResult obtained from the #GAsyncReadyCallback passed to the async call.
         */
        about_finish(result: Gio.AsyncResult): void;
        /**
         * Display the about dialog
         */
        about_sync(): void;
        /**
         * Add an item to the #GPasteDaemon
         * @param text the text to add
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
         */
        add(text: string, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Add the file contents to the #GPasteDaemon
         * @param file the file to add
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
         */
        add_file(file: string, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Add the file contents to the #GPasteDaemon
         * @param result A #GAsyncResult obtained from the #GAsyncReadyCallback passed to the async call.
         */
        add_file_finish(result: Gio.AsyncResult): void;
        /**
         * Add the file contents to the #GPasteDaemon
         * @param file the file to add
         */
        add_file_sync(file: string): void;
        /**
         * Add an item to the #GPasteDaemon
         * @param result A #GAsyncResult obtained from the #GAsyncReadyCallback passed to the async call.
         */
        add_finish(result: Gio.AsyncResult): void;
        /**
         * Add the password to the #GPasteDaemon
         * @param name the name to identify the password to add
         * @param password the password to add
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
         */
        add_password(name: string, password: string, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Add the password to the #GPasteDaemon
         * @param result A #GAsyncResult obtained from the #GAsyncReadyCallback passed to the async call.
         */
        add_password_finish(result: Gio.AsyncResult): void;
        /**
         * Add the password to the #GPasteDaemon
         * @param name the name to identify the password to add
         * @param password the password to add
         */
        add_password_sync(name: string, password: string): void;
        /**
         * Add an item to the #GPasteDaemon
         * @param text the text to add
         */
        add_sync(text: string): void;
        /**
         * Backup the current history
         * @param history the name of the history
         * @param backup the name of the backup
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
         */
        backup_history(history: string, backup: string, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Backup the current history
         * @param result A #GAsyncResult obtained from the #GAsyncReadyCallback passed to the async call.
         */
        backup_history_finish(result: Gio.AsyncResult): void;
        /**
         * Backup the current history
         * @param history the name of the history
         * @param backup the name of the backup
         */
        backup_history_sync(history: string, backup: string): void;
        /**
         * Delete an item from the #GPasteDaemon
         * @param uuid the uuid of the element we want to delete
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
         */
        ['delete'](uuid: string, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Delete an item from the #GPasteDaemon
         * @param result A #GAsyncResult obtained from the #GAsyncReadyCallback passed to the async call.
         */
        delete_finish(result: Gio.AsyncResult): void;
        /**
         * Delete a history
         * @param name the name of the history to delete
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
         */
        delete_history(name: string, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Delete a history
         * @param result A #GAsyncResult obtained from the #GAsyncReadyCallback passed to the async call.
         */
        delete_history_finish(result: Gio.AsyncResult): void;
        /**
         * Delete a history
         * @param name the name of the history to delete
         */
        delete_history_sync(name: string): void;
        /**
         * Delete the password from the #GPasteDaemon
         * @param name the name of the password to delete
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
         */
        delete_password(name: string, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Delete the password from the #GPasteDaemon
         * @param result A #GAsyncResult obtained from the #GAsyncReadyCallback passed to the async call.
         */
        delete_password_finish(result: Gio.AsyncResult): void;
        /**
         * Delete the password from the #GPasteDaemon
         * @param name the name of the password to delete
         */
        delete_password_sync(name: string): void;
        /**
         * Delete an item from the #GPasteDaemon
         * @param uuid the uuid of the element we want to delete
         */
        delete_sync(uuid: string): void;
        /**
         * Empty the history from the #GPasteDaemon
         * @param name the name of the history to empty
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
         */
        empty_history(name: string, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Empty the history from the #GPasteDaemon
         * @param result A #GAsyncResult obtained from the #GAsyncReadyCallback passed to the async call.
         */
        empty_history_finish(result: Gio.AsyncResult): void;
        /**
         * Empty the history from the #GPasteDaemon
         * @param name the name of the history to empty
         */
        empty_history_sync(name: string): void;
        /**
         * Get an item from the #GPasteDaemon
         * @param uuid the uuid of the element we want to get
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
         */
        get_element(uuid: string, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Get an item from the #GPasteDaemon
         * @param index the index of the element we want to get
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
         */
        get_element_at_index(index: number, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Get an item from the #GPasteDaemon
         * @param result A #GAsyncResult obtained from the #GAsyncReadyCallback passed to the async call.
         * @returns a new #GPasteClientItem
         */
        get_element_at_index_finish(result: Gio.AsyncResult): ClientItem;
        /**
         * Get an item from the #GPasteDaemon
         * @param index the index of the element we want to get
         * @returns a new #GPasteClientItem
         */
        get_element_at_index_sync(index: number): ClientItem;
        /**
         * Get an item from the #GPasteDaemon
         * @param result A #GAsyncResult obtained from the #GAsyncReadyCallback passed to the async call.
         * @returns a newly allocated string
         */
        get_element_finish(result: Gio.AsyncResult): string;
        /**
         * Get the kind of an item from the #GPasteDaemon
         * @param uuid the uuid of the element we want to get
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
         */
        get_element_kind(uuid: string, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Get this kind of an item from the #GPasteDaemon
         * @param result A #GAsyncResult obtained from the #GAsyncReadyCallback passed to the async call.
         * @returns The #GPasteItemKind
         */
        get_element_kind_finish(result: Gio.AsyncResult): ItemKind;
        /**
         * Get the kind of an item from the #GPasteDaemon
         * @param uuid the uuid of the element we want to get
         * @returns The #GPasteItemKind
         */
        get_element_kind_sync(uuid: string): ItemKind;
        /**
         * Get an item from the #GPasteDaemon
         * @param uuid the uuid of the element we want to get
         * @returns a newly allocated string
         */
        get_element_sync(uuid: string): string;
        /**
         * Get some items from the #GPasteDaemon
         * @param uuids the uuids of the elements we want to get
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
         */
        get_elements(uuids: string[], callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Get some items from the #GPasteDaemon
         * @param result A #GAsyncResult obtained from the #GAsyncReadyCallback passed to the async call.
         * @returns a newly allocated array of string
         */
        get_elements_finish(result: Gio.AsyncResult): ClientItem[];
        /**
         * Get some items from the #GPasteDaemon
         * @param uuids the uuids of the elements we want to get
         * @returns a newly allocated array of string
         */
        get_elements_sync(uuids: string[]): ClientItem[];
        /**
         * Get the history from the #GPasteDaemon
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
         */
        get_history(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Get the history from the #GPasteDaemon
         * @param result A #GAsyncResult obtained from the #GAsyncReadyCallback passed to the async call.
         * @returns a newly allocated array of string
         */
        get_history_finish(result: Gio.AsyncResult): ClientItem[];
        /**
         * Get the name of the history from the #GPasteDaemon
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
         */
        get_history_name(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Get the name of the history from the #GPasteDaemon
         * @param result A #GAsyncResult obtained from the #GAsyncReadyCallback passed to the async call.
         * @returns a newly allocated string
         */
        get_history_name_finish(result: Gio.AsyncResult): string;
        /**
         * Get the name of the history from the #GPasteDaemon
         * @returns a newly allocated string
         */
        get_history_name_sync(): string;
        /**
         * Get the history isize from the #GPasteDaemon
         * @param name the name of the history
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
         */
        get_history_size(name: string, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Get the history size from the #GPasteDaemon
         * @param result A #GAsyncResult obtained from the #GAsyncReadyCallback passed to the async call.
         * @returns the size of the history
         */
        get_history_size_finish(result: Gio.AsyncResult): number;
        /**
         * Get the history size from the #GPasteDaemon
         * @param name the name of the history
         * @returns the size of the history
         */
        get_history_size_sync(name: string): number;
        /**
         * Get the history from the #GPasteDaemon
         * @returns a newly allocated array of string
         */
        get_history_sync(): ClientItem[];
        /**
         * Get an item from the #GPasteDaemon
         * @param uuid the uuid of the element we want to get
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
         */
        get_raw_element(uuid: string, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Get an item from the #GPasteDaemon
         * @param result A #GAsyncResult obtained from the #GAsyncReadyCallback passed to the async call.
         * @returns a newly allocated string
         */
        get_raw_element_finish(result: Gio.AsyncResult): string;
        /**
         * Get an item from the #GPasteDaemon
         * @param uuid the uuid of the element we want to get
         * @returns a newly allocated string
         */
        get_raw_element_sync(uuid: string): string;
        /**
         * Get the history from the #GPasteDaemon
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
         */
        get_raw_history(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Get the history from the #GPasteDaemon
         * @param result A #GAsyncResult obtained from the #GAsyncReadyCallback passed to the async call.
         * @returns a newly allocated array of string
         */
        get_raw_history_finish(result: Gio.AsyncResult): ClientItem[];
        /**
         * Get the history from the #GPasteDaemon
         * @returns a newly allocated array of string
         */
        get_raw_history_sync(): ClientItem[];
        /**
         * Get the version of the running gpaste daemon
         * @returns the version of the daemon
         */
        get_version(): string;
        /**
         * Check if the daemon is active
         * @returns whether the daemon is active or not
         */
        is_active(): boolean;
        /**
         * List all available hisotries
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
         */
        list_histories(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * List all available hisotries
         * @param result A #GAsyncResult obtained from the #GAsyncReadyCallback passed to the async call.
         * @returns a newly allocated array of string
         */
        list_histories_finish(result: Gio.AsyncResult): string[];
        /**
         * List all available hisotries
         * @returns a newly allocated array of string
         */
        list_histories_sync(): string[];
        /**
         * Merge some history entries
         *
         * If decoration is " and separator is , and entries are foo bar baz
         * result will be "foo","bar","baz"
         * @param decoration the decoration to apply to each entry
         * @param separator the separator to add between each entry
         * @param uuids the uuids of the elements we want to get
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
         */
        merge(
            decoration: string | null,
            separator: string | null,
            uuids: string[],
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Merge some history entries
         * @param result A #GAsyncResult obtained from the #GAsyncReadyCallback passed to the async call.
         */
        merge_finish(result: Gio.AsyncResult): void;
        /**
         * Merge some history entries
         *
         * If decoration is " and separator is , and entries are foo bar baz
         * result will be "foo","bar","baz"
         * @param decoration the decoration to apply to each entry
         * @param separator the separator to add between each entry
         * @param uuids the uuids of the elements we want to get
         */
        merge_sync(decoration: string | null, separator: string | null, uuids: string[]): void;
        /**
         * Call this when the extension changes its state
         * @param state the new state of the extension
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
         */
        on_extension_state_changed(state: boolean, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Call this when the extension changes its state
         * @param result A #GAsyncResult obtained from the #GAsyncReadyCallback passed to the async call.
         */
        on_extension_state_changed_finish(result: Gio.AsyncResult): void;
        /**
         * Call this when the extension changes its state
         * @param state the new state of the extension
         */
        on_extension_state_changed_sync(state: boolean): void;
        /**
         * Reexecute the #GPasteDaemon
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
         */
        reexecute(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Reexecute the #GPasteDaemon
         * @param result A #GAsyncResult obtained from the #GAsyncReadyCallback passed to the async call.
         */
        reexecute_finish(result: Gio.AsyncResult): void;
        /**
         * Reexecute the #GPasteDaemon
         */
        reexecute_sync(): void;
        /**
         * Rename the password in the #GPasteDaemon
         * @param old_name the old name of the password to rename
         * @param new_name the new name to give it
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
         */
        rename_password(old_name: string, new_name: string, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Rename the password in the #GPasteDaemon
         * @param result A #GAsyncResult obtained from the #GAsyncReadyCallback passed to the async call.
         */
        rename_password_finish(result: Gio.AsyncResult): void;
        /**
         * Rename the password in the #GPasteDaemon
         * @param old_name the name of the password to rename
         * @param new_name the new name to give it
         */
        rename_password_sync(old_name: string, new_name: string): void;
        /**
         * Replace the contents of an item
         * @param uuid the uuid of the element we want to replace
         * @param contents the replacement contents
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
         */
        replace(uuid: string, contents: string, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Replace the contents of an item
         * @param result A #GAsyncResult obtained from the #GAsyncReadyCallback passed to the async call.
         */
        replace_finish(result: Gio.AsyncResult): void;
        /**
         * Replace the contents of an item
         * @param uuid the uuid of the element we want to replace
         * @param contents the replacement contents
         */
        replace_sync(uuid: string, contents: string): void;
        /**
         * Search for items matching `pattern` in history
         * @param pattern the pattern to look for in history
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
         */
        search(pattern: string, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Search for items matching `pattern` in history
         * @param result A #GAsyncResult obtained from the #GAsyncReadyCallback passed to the async call.
         * @returns The indexes of the matching items
         */
        search_finish(result: Gio.AsyncResult): string[];
        /**
         * Search for items matching `pattern` in history
         * @param pattern the pattern to look for in history
         * @returns The uuids of the matching items
         */
        search_sync(pattern: string): string[];
        /**
         * Select an item from the #GPasteDaemon
         * @param uuid the uuid of the element we want to select
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
         */
        select(uuid: string, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Select an item from the #GPasteDaemon
         * @param result A #GAsyncResult obtained from the #GAsyncReadyCallback passed to the async call.
         */
        select_finish(result: Gio.AsyncResult): void;
        /**
         * Select an item from the #GPasteDaemon
         * @param uuid the uuid of the element we want to select
         */
        select_sync(uuid: string): void;
        /**
         * Set the item as password
         * @param uuid the uuid of the element we want to set as password
         * @param name the name to identify the password
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
         */
        set_password(uuid: string, name: string, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Set the item as password
         * @param result A #GAsyncResult obtained from the #GAsyncReadyCallback passed to the async call.
         */
        set_password_finish(result: Gio.AsyncResult): void;
        /**
         * Set the item as password
         * @param uuid the uuid of the element we want to set as password
         * @param name the name to identify the password
         */
        set_password_sync(uuid: string, name: string): void;
        /**
         * Emit the ShowHistory signal
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
         */
        show_history(callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Emit the ShowHistory signal
         * @param result A #GAsyncResult obtained from the #GAsyncReadyCallback passed to the async call.
         */
        show_history_finish(result: Gio.AsyncResult): void;
        /**
         * Emit the ShowHistory signal
         */
        show_history_sync(): void;
        /**
         * Switch to another history
         * @param name the name of the history to switch to
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
         */
        switch_history(name: string, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Switch to another history
         * @param result A #GAsyncResult obtained from the #GAsyncReadyCallback passed to the async call.
         */
        switch_history_finish(result: Gio.AsyncResult): void;
        /**
         * Switch to another history
         * @param name the name of the history to switch to
         */
        switch_history_sync(name: string): void;
        /**
         * Change the tracking state of the #GPasteDaemon
         * @param state the new tracking state of the #GPasteDaemon
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
         */
        track(state: boolean, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Change the tracking state of the #GPasteDaemon
         * @param result A #GAsyncResult obtained from the #GAsyncReadyCallback passed to the async call.
         */
        track_finish(result: Gio.AsyncResult): void;
        /**
         * Change the tracking state of the #GPasteDaemon
         * @param state the new tracking state of the #GPasteDaemon
         */
        track_sync(state: boolean): void;
        /**
         * Upload an item to a pastebin service
         * @param uuid the uuid of the element we want to upload
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
         */
        upload(uuid: string, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Upload an item to a pastebin service
         * @param result A #GAsyncResult obtained from the #GAsyncReadyCallback passed to the async call.
         */
        upload_finish(result: Gio.AsyncResult): void;
        /**
         * Upload an item to a pastebin service
         * @param uuid the uuid of the element we want to upload
         */
        upload_sync(uuid: string): void;

        // Inherited methods
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority][io-priority] of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See g_async_initable_init_async().
         * @param res a #GAsyncResult.
         * @returns %TRUE if successful. If an error has occurred, this function will return %FALSE and set @error appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;
        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or %NULL on error.
         * @param res the #GAsyncResult from the callback
         * @returns a newly created #GObject,      or %NULL on error. Free with g_object_unref().
         */
        new_finish(res: Gio.AsyncResult): Client;
        // Conflicted with Gio.DBusProxy.new_finish
        new_finish(...args: never[]): any;
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority][io-priority] of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        vfunc_init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See g_async_initable_init_async().
         * @param res a #GAsyncResult.
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        /**
         * Gets the #GDBusObject that `interface_` belongs to, if any.
         * @returns A #GDBusObject or %NULL. The returned reference should be freed with g_object_unref().
         */
        get_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A #GDBusInterfaceInfo. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the #GDBusObject for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A #GDBusObject or %NULL.
         */
        set_object(object?: Gio.DBusObject | null): void;
        /**
         * Gets the #GDBusObject that `interface_` belongs to, if any.
         */
        vfunc_dup_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the #GDBusObject for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A #GDBusObject or %NULL.
         */
        vfunc_set_object(object?: Gio.DBusObject | null): void;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [introduction][ginitable] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [introduction][ginitable] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
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
            flags: GObject.BindingFlags,
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
            flags: GObject.BindingFlags,
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
        get_property(property_name: string): any;
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
        set_property(property_name: string, value: any): void;
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
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module ClientItem {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class ClientItem extends GObject.Object {
        static $gtype: GObject.GType<ClientItem>;

        // Constructors of GPaste.ClientItem

        constructor(properties?: Partial<ClientItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](uuid: string, value: string): ClientItem;

        // Own methods of GPaste.ClientItem

        /**
         * Returns the uuid of the item
         */
        get_uuid(): string;
        /**
         * Returns the value of the item
         */
        get_value(): string;
    }

    module GnomeShellClient {
        // Signal callback interfaces

        interface AcceleratorActivated {
            (id: number): void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gio.DBusProxy.ConstructorProps,
                Gio.AsyncInitable.ConstructorProps,
                Gio.DBusInterface.ConstructorProps,
                Gio.Initable.ConstructorProps {}
    }

    class GnomeShellClient
        extends Gio.DBusProxy
        implements Gio.AsyncInitable<GnomeShellClient>, Gio.DBusInterface, Gio.Initable
    {
        static $gtype: GObject.GType<GnomeShellClient>;

        // Constructors of GPaste.GnomeShellClient

        constructor(properties?: Partial<GnomeShellClient.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_finish(result: Gio.AsyncResult): GnomeShellClient;
        // Conflicted with Gio.AsyncInitable.new_finish

        static new_finish(...args: never[]): any;

        static new_sync(): GnomeShellClient;

        // Own signals of GPaste.GnomeShellClient

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'accelerator-activated', callback: (_source: this, id: number) => void): number;
        connect_after(signal: 'accelerator-activated', callback: (_source: this, id: number) => void): number;
        emit(signal: 'accelerator-activated', id: number): void;

        // Own static methods of GPaste.GnomeShellClient

        /**
         * Create a new instance of #GPasteGnomeShellClient
         * @param callback Callback function to invoke when the proxy is ready.
         */
        static ['new'](callback?: Gio.AsyncReadyCallback<GnomeShellClient> | null): void;
        // Conflicted with Gio.DBusProxy.new
        static ['new'](...args: never[]): any;

        // Own methods of GPaste.GnomeShellClient

        /**
         * Grab a keybinding
         * @param accelerator a #GPasteGnomeShellAccelerator instance
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
         */
        grab_accelerator(accelerator: GnomeShellAccelerator, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Grab a keybinding
         * @param result A #GAsyncResult obtained from the #GAsyncReadyCallback passed to the async call.
         * @returns the action id corresultponding
         */
        grab_accelerator_finish(result: Gio.AsyncResult): number;
        /**
         * Grab a keybinding
         * @param accelerator a #GPasteGnomeShellAccelerator instance
         * @returns the action id corresponding
         */
        grab_accelerator_sync(accelerator: GnomeShellAccelerator): number;
        /**
         * Grab some keybindings
         * @param accelerators an array of #GPasteGnomeShellAccelerator instances
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
         */
        grab_accelerators(accelerators: GnomeShellAccelerator[], callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Grab some keybindings
         * @param result A #GAsyncResult obtained from the #GAsyncReadyCallback passed to the async call.
         * @returns the action ids corresultponding
         */
        grab_accelerators_finish(result: Gio.AsyncResult): number;
        /**
         * Grab some keybindings
         * @param accelerators an array of #GPasteGnomeShellAccelerator instances
         * @returns the action ids corresponding
         */
        grab_accelerators_sync(accelerators: GnomeShellAccelerator[]): number;
        /**
         * Ungrab a keybinding
         * @param action the action id corresponding to the keybinding
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
         */
        ungrab_accelerator(action: number, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Ungrab a keybinding
         * @param result A #GAsyncResult obtained from the #GAsyncReadyCallback passed to the async call.
         * @returns whether the ungrab was succesful or not
         */
        ungrab_accelerator_finish(result: Gio.AsyncResult): boolean;
        /**
         * Ungrab a keybinding
         * @param action the action id corresponding to the keybinding
         * @returns whether the ungrab was succesful or not
         */
        ungrab_accelerator_sync(action: number): boolean;

        // Inherited methods
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority][io-priority] of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See g_async_initable_init_async().
         * @param res a #GAsyncResult.
         * @returns %TRUE if successful. If an error has occurred, this function will return %FALSE and set @error appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;
        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or %NULL on error.
         * @param res the #GAsyncResult from the callback
         * @returns a newly created #GObject,      or %NULL on error. Free with g_object_unref().
         */
        new_finish(res: Gio.AsyncResult): GnomeShellClient;
        // Conflicted with Gio.DBusProxy.new_finish
        new_finish(...args: never[]): any;
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority][io-priority] of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        vfunc_init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See g_async_initable_init_async().
         * @param res a #GAsyncResult.
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        /**
         * Gets the #GDBusObject that `interface_` belongs to, if any.
         * @returns A #GDBusObject or %NULL. The returned reference should be freed with g_object_unref().
         */
        get_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A #GDBusInterfaceInfo. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the #GDBusObject for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A #GDBusObject or %NULL.
         */
        set_object(object?: Gio.DBusObject | null): void;
        /**
         * Gets the #GDBusObject that `interface_` belongs to, if any.
         */
        vfunc_dup_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the #GDBusObject for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A #GDBusObject or %NULL.
         */
        vfunc_set_object(object?: Gio.DBusObject | null): void;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [introduction][ginitable] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [introduction][ginitable] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
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
            flags: GObject.BindingFlags,
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
            flags: GObject.BindingFlags,
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
        get_property(property_name: string): any;
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
        set_property(property_name: string, value: any): void;
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
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module ScreensaverClient {
        // Signal callback interfaces

        interface ActiveChanged {
            (active: boolean): void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gio.DBusProxy.ConstructorProps,
                Gio.AsyncInitable.ConstructorProps,
                Gio.DBusInterface.ConstructorProps,
                Gio.Initable.ConstructorProps {}
    }

    class ScreensaverClient
        extends Gio.DBusProxy
        implements Gio.AsyncInitable<ScreensaverClient>, Gio.DBusInterface, Gio.Initable
    {
        static $gtype: GObject.GType<ScreensaverClient>;

        // Constructors of GPaste.ScreensaverClient

        constructor(properties?: Partial<ScreensaverClient.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_finish(result: Gio.AsyncResult): ScreensaverClient;
        // Conflicted with Gio.AsyncInitable.new_finish

        static new_finish(...args: never[]): any;

        static new_sync(): ScreensaverClient;

        // Own signals of GPaste.ScreensaverClient

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'active-changed', callback: (_source: this, active: boolean) => void): number;
        connect_after(signal: 'active-changed', callback: (_source: this, active: boolean) => void): number;
        emit(signal: 'active-changed', active: boolean): void;

        // Own static methods of GPaste.ScreensaverClient

        /**
         * Create a new instance of #GPasteScreensaverClient
         * @param callback Callback function to invoke when the proxy is ready.
         */
        static ['new'](callback?: Gio.AsyncReadyCallback<ScreensaverClient> | null): void;
        // Conflicted with Gio.DBusProxy.new
        static ['new'](...args: never[]): any;

        // Inherited methods
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority][io-priority] of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See g_async_initable_init_async().
         * @param res a #GAsyncResult.
         * @returns %TRUE if successful. If an error has occurred, this function will return %FALSE and set @error appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;
        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or %NULL on error.
         * @param res the #GAsyncResult from the callback
         * @returns a newly created #GObject,      or %NULL on error. Free with g_object_unref().
         */
        new_finish(res: Gio.AsyncResult): ScreensaverClient;
        // Conflicted with Gio.DBusProxy.new_finish
        new_finish(...args: never[]): any;
        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements #GInitable you can
         * optionally call g_initable_init() instead.
         *
         * This method is intended for language bindings. If writing in C,
         * g_async_initable_new_async() should typically be used instead.
         *
         * When the initialization is finished, `callback` will be called. You can
         * then call g_async_initable_init_finish() to get the result of the
         * initialization.
         *
         * Implementations may also support cancellation. If `cancellable` is not
         * %NULL, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
         * the object doesn't support cancellable initialization, the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * As with #GInitable, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * g_object_ref() and g_object_unref() are considered to be invalid, and
         * have undefined behaviour. They will often fail with g_critical() or
         * g_warning(), but this must not be relied on.
         *
         * Callers should not assume that a class which implements #GAsyncInitable can
         * be initialized multiple times; for more information, see g_initable_init().
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to init_async() on the
         * results of the first call.
         *
         * For classes that also support the #GInitable interface, the default
         * implementation of this method will run the g_initable_init() function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the #GAsyncInitable interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority][io-priority] of the operation
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        vfunc_init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See g_async_initable_init_async().
         * @param res a #GAsyncResult.
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        /**
         * Gets the #GDBusObject that `interface_` belongs to, if any.
         * @returns A #GDBusObject or %NULL. The returned reference should be freed with g_object_unref().
         */
        get_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A #GDBusInterfaceInfo. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the #GDBusObject for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A #GDBusObject or %NULL.
         */
        set_object(object?: Gio.DBusObject | null): void;
        /**
         * Gets the #GDBusObject that `interface_` belongs to, if any.
         */
        vfunc_dup_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the #GDBusObject for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A #GDBusObject or %NULL.
         */
        vfunc_set_object(object?: Gio.DBusObject | null): void;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [introduction][ginitable] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [introduction][ginitable] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
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
            flags: GObject.BindingFlags,
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
            flags: GObject.BindingFlags,
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
        get_property(property_name: string): any;
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
        set_property(property_name: string, value: any): void;
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
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module Settings {
        // Signal callback interfaces

        interface Changed {
            (key: string): void;
        }

        interface Rebind {
            (key: string): void;
        }

        interface Track {
            (tracking_state: boolean): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Settings extends GObject.Object {
        static $gtype: GObject.GType<Settings>;

        // Constructors of GPaste.Settings

        constructor(properties?: Partial<Settings.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Settings;

        // Own signals of GPaste.Settings

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'changed', callback: (_source: this, key: string) => void): number;
        connect_after(signal: 'changed', callback: (_source: this, key: string) => void): number;
        emit(signal: 'changed', key: string): void;
        connect(signal: 'rebind', callback: (_source: this, key: string) => void): number;
        connect_after(signal: 'rebind', callback: (_source: this, key: string) => void): number;
        emit(signal: 'rebind', key: string): void;
        connect(signal: 'track', callback: (_source: this, tracking_state: boolean) => void): number;
        connect_after(signal: 'track', callback: (_source: this, tracking_state: boolean) => void): number;
        emit(signal: 'track', tracking_state: boolean): void;

        // Own methods of GPaste.Settings

        /**
         * Get the "close-on-select" setting
         * @returns the value of the "close-on-select" setting
         */
        get_close_on_select(): boolean;
        /**
         * Get the "element-size" setting
         * @returns the value of the "element-size" setting
         */
        get_element_size(): number;
        /**
         * Get the "empty-history-confirmation" setting
         * @returns the value of the "empty-history-confirmation" setting
         */
        get_empty_history_confirmation(): boolean;
        /**
         * Get the "extension-enabled" special setting
         * @returns Whether the gnome-shell extension is enabled or not
         */
        get_extension_enabled(): boolean;
        /**
         * Get the "growing-lines" setting
         * @returns the value of the "growing-lines" setting
         */
        get_growing_lines(): boolean;
        /**
         * Get the "history-name" setting
         * @returns the value of the "history-name" setting
         */
        get_history_name(): string;
        /**
         * Get the "images-support" setting
         * @returns the value of the "images-support" setting
         */
        get_images_support(): boolean;
        /**
         * Get the "launch-ui" setting
         * @returns the value of the "launch-ui" setting
         */
        get_launch_ui(): string;
        /**
         * Get the "make-password" setting
         * @returns the value of the "make-password" setting
         */
        get_make_password(): string;
        /**
         * Get the "max-displayed-history-size" setting
         * @returns the value of the "max-displayed-history-size" setting
         */
        get_max_displayed_history_size(): number;
        /**
         * Get the "max-history-size" setting
         * @returns the value of the "max-history-size" setting
         */
        get_max_history_size(): number;
        /**
         * Get the "max-memory-usage" setting
         * @returns the value of the "max-memory-usage" setting
         */
        get_max_memory_usage(): number;
        /**
         * Get the "max-text-item-size" setting
         * @returns the value of the "max-text-item-size" setting
         */
        get_max_text_item_size(): number;
        /**
         * Get the "min-text-item-size" setting
         * @returns the value of the "min-text-item-size" setting
         */
        get_min_text_item_size(): number;
        /**
         * Get the "open-centered" setting
         * @returns the value of the "open-centered" setting
         */
        get_open_centered(): boolean;
        /**
         * Get the "pop" setting
         * @returns the value of the "pop" setting
         */
        get_pop(): string;
        /**
         * Get the "primary-to-history" setting
         * @returns the value of the "primary-to-history" setting
         */
        get_primary_to_history(): boolean;
        /**
         * Get the "rich-text-support" setting
         * @returns the value of the "rich-text-support" setting
         */
        get_rich_text_support(): boolean;
        /**
         * Get the "save-history" setting
         * @returns the value of the "save-history" setting
         */
        get_save_history(): boolean;
        /**
         * Get the "show-history" setting
         * @returns the value of the "show-history" setting
         */
        get_show_history(): string;
        /**
         * Get the "sync-clipboard-to-primary" setting
         * @returns the value of the "sync-clipboard-to-primary" setting
         */
        get_sync_clipboard_to_primary(): string;
        /**
         * Get the "sync-primary-to-clipboard" setting
         * @returns the value of the "sync-primary-to-clipboard" setting
         */
        get_sync_primary_to_clipboard(): string;
        /**
         * Get the "synchronize-clipboards" setting
         * @returns the value of the "synchronize-clipboards" setting
         */
        get_synchronize_clipboards(): boolean;
        /**
         * Get the "track-changes" setting
         * @returns the value of the "track-changes" setting
         */
        get_track_changes(): boolean;
        /**
         * Get the "track-extension-state" setting
         * @returns the value of the "track-extension-state" setting
         */
        get_track_extension_state(): boolean;
        /**
         * Get the "trim-items" setting
         * @returns the value of the "trim-items" setting
         */
        get_trim_items(): boolean;
        /**
         * Get the "upload" setting
         * @returns the value of the "upload" setting
         */
        get_upload(): string;
        /**
         * Reset the "close-on-select" setting
         */
        reset_close_on_select(): void;
        /**
         * Reset the "element-size" setting
         */
        reset_element_size(): void;
        /**
         * Reset the "empty-history-confirmation" setting
         */
        reset_empty_history_confirmation(): void;
        /**
         * Reset the "growing-lines" setting
         */
        reset_growing_lines(): void;
        /**
         * Reset the "history-name" setting
         */
        reset_history_name(): void;
        /**
         * Reset the "images-support" setting
         */
        reset_images_support(): void;
        /**
         * Reset the "launch-ui" setting
         */
        reset_launch_ui(): void;
        /**
         * Reset the "make-password" setting
         */
        reset_make_password(): void;
        /**
         * Reset the "max-displayed-history-size" setting
         */
        reset_max_displayed_history_size(): void;
        /**
         * Reset the "max-history-size" setting
         */
        reset_max_history_size(): void;
        /**
         * Reset the "max-memory-usage" setting
         */
        reset_max_memory_usage(): void;
        /**
         * Reset the "max-text-item-size" setting
         */
        reset_max_text_item_size(): void;
        /**
         * Reset the "min-text-item-size" setting
         */
        reset_min_text_item_size(): void;
        /**
         * Reset the "open-centered" setting
         */
        reset_open_centered(): void;
        /**
         * Reset the "pop" setting
         */
        reset_pop(): void;
        /**
         * Reset the "primary-to-history" setting
         */
        reset_primary_to_history(): void;
        /**
         * Reset the "rich-text-support" setting
         */
        reset_rich_text_support(): void;
        /**
         * Reset the "save-history" setting
         */
        reset_save_history(): void;
        /**
         * Reset the "show-history" setting
         */
        reset_show_history(): void;
        /**
         * Reset the "sync-clipboard-to-primary" setting
         */
        reset_sync_clipboard_to_primary(): void;
        /**
         * Reset the "sync-primary-to-clipboard" setting
         */
        reset_sync_primary_to_clipboard(): void;
        /**
         * Reset the "synchronize-clipboards" setting
         */
        reset_synchronize_clipboards(): void;
        /**
         * Reset the "track-changes" setting
         */
        reset_track_changes(): void;
        /**
         * Reset the "track-extension-state" setting
         */
        reset_track_extension_state(): void;
        /**
         * Reset the "trim-items" setting
         */
        reset_trim_items(): void;
        /**
         * Reset the "upload" setting
         */
        reset_upload(): void;
        /**
         * Change the "close-on-select" setting
         * @param value the new history name
         */
        set_close_on_select(value: boolean): void;
        /**
         * Change the "element-size" setting
         * @param value the maximum displayed size of an item
         */
        set_element_size(value: number): void;
        /**
         * Change the "empty-history-confirmation" setting
         * @param value whether to prompt for confirmation when emptying a history
         */
        set_empty_history_confirmation(value: boolean): void;
        /**
         * Change the "extension-enabled" special setting
         * @param value whether to enable or not the gnome-shell extension
         */
        set_extension_enabled(value: boolean): void;
        /**
         * Change the "growing-lines" setting
         * @param value whether to detect or not growing lines
         */
        set_growing_lines(value: boolean): void;
        /**
         * Change the "history-name" setting
         * @param value the new history name
         */
        set_history_name(value: string): void;
        /**
         * Change the "images-support" setting
         * @param value the new history name
         */
        set_images_support(value: boolean): void;
        /**
         * Change the "launch-ui" setting
         * @param value the new keyboard shortcut
         */
        set_launch_ui(value: string): void;
        /**
         * Change the "make-password" setting
         * @param value the new keyboard shortcut
         */
        set_make_password(value: string): void;
        /**
         * Change the "max-displayed-history-size" setting
         * @param value the maximum number of items to display
         */
        set_max_displayed_history_size(value: number): void;
        /**
         * Change the "max-history-size" setting
         * @param value the maximum number of items the history can contain
         */
        set_max_history_size(value: number): void;
        /**
         * Change the "max-memory-usage" setting
         * @param value the maximum amount of memory we can use
         */
        set_max_memory_usage(value: number): void;
        /**
         * Change the "max-text-item-size" setting
         * @param value the maximum size for a textual item to be handled
         */
        set_max_text_item_size(value: number): void;
        /**
         * Change the "min-text-item-size" setting
         * @param value the minimum size for a textual item to be handled
         */
        set_min_text_item_size(value: number): void;
        /**
         * Change the "open-centered" setting
         * @param value the new history name
         */
        set_open_centered(value: boolean): void;
        /**
         * Change the "pop" setting
         * @param value the new keyboard shortcut
         */
        set_pop(value: string): void;
        /**
         * Change the "primary-to-history" setting
         * @param value whether to track or not the primary selection changes as clipboard ones
         */
        set_primary_to_history(value: boolean): void;
        /**
         * Change the "rich-text-support" setting
         * @param value the new history name
         */
        set_rich_text_support(value: boolean): void;
        /**
         * Change the "save-history" setting
         * @param value whether to save or not the history
         */
        set_save_history(value: boolean): void;
        /**
         * Change the "show-history" setting
         * @param value the new keyboard shortcut
         */
        set_show_history(value: string): void;
        /**
         * Change the "sync-clipboard-to-primary" setting
         * @param value the new keyboard shortcut
         */
        set_sync_clipboard_to_primary(value: string): void;
        /**
         * Change the "sync-primary-to-clipboard" setting
         * @param value the new keyboard shortcut
         */
        set_sync_primary_to_clipboard(value: string): void;
        /**
         * Change the "synchronize-clipboards" setting
         * @param value whether to synchronize the clipboard and the primary selection or not
         */
        set_synchronize_clipboards(value: boolean): void;
        /**
         * Change the "track-changes" setting
         * @param value whether to track or not the clipboard changes
         */
        set_track_changes(value: boolean): void;
        /**
         * Change the "track-extension-state" setting
         * @param value whether to stop tracking or not the clipboard changes when an applet exits
         */
        set_track_extension_state(value: boolean): void;
        /**
         * Change the "trim-items" setting
         * @param value whether to trim or not textual items
         */
        set_trim_items(value: boolean): void;
        /**
         * Change the "upload" setting
         * @param value the new keyboard shortcut
         */
        set_upload(value: string): void;
    }

    type ClientClass = typeof Client;
    type ClientItemClass = typeof ClientItem;
    class GnomeShellAccelerator {
        static $gtype: GObject.GType<GnomeShellAccelerator>;

        // Own fields of GPaste.GnomeShellAccelerator

        accelerator: string;
        mode_flags: MetaKeyBindingFlags;
        grab_flags: GnomeShellActionMode;

        // Constructors of GPaste.GnomeShellAccelerator

        _init(...args: any[]): void;
    }

    type GnomeShellClientClass = typeof GnomeShellClient;
    type ScreensaverClientClass = typeof ScreensaverClient;
    type SettingsClass = typeof Settings;
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

export default GPaste;

// END
