
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
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GPaste {

    /**
     * GPaste-2
     */


    /**
     * @gir-type Enum
     */
    export namespace ItemKind {
        export const $gtype: GObject.GType<ItemKind>;
    }

    /**
     * @gir-type Enum
     */
    enum ItemKind {
        TEXT,
        URIS,
        IMAGE,
        PASSWORD,
    }


    /**
     * @gir-type Enum
     */
    export namespace UpdateAction {
        export const $gtype: GObject.GType<UpdateAction>;
    }

    /**
     * @gir-type Enum
     */
    enum UpdateAction {
        REPLACE,
        REMOVE,
    }


    /**
     * @gir-type Enum
     */
    export namespace UpdateTarget {
        export const $gtype: GObject.GType<UpdateTarget>;
    }

    /**
     * @gir-type Enum
     */
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
    function util_activate_ui(action: string, arg: GLib.Variant | null): void;

    /**
     * activate an action from GPaste Ui
     * @param action the action to activate
     * @param arg the action argument
     * @returns whether the action was successful
     */
    function util_activate_ui_sync(action: string, arg: GLib.Variant | null): boolean;

    /**
     * Empty a history after confirmation.
     * Confirmation is skipped if GPaste is configured to do so.
     * @param client a {@link GPaste.Client} instance
     * @param settings a {@link GPaste.Settings} instance
     * @param history the name of the history to empty
     */
    function util_empty_with_confirmation(client: Client, settings: Settings, history: string): void;

    /**
     * Empty a history after confirmation.
     * Confirmation is skipped if GPaste is configured to do so.
     * @param client a {@link GPaste.Client} instance
     * @param settings a {@link GPaste.Settings} instance
     * @param history the name of the history to empty
     * @returns whether the action was successful
     */
    function util_empty_with_confirmation_sync(client: Client, settings: Settings, history: string): boolean;

    /**
     * Ensure the history dir exists
     * @param settings a {@link GPaste.Settings} instance
     * @returns where it exists or if there was an error creating it
     */
    function util_ensure_history_dir_exists(settings: Settings): boolean;

    /**
     * @param variant 
     * @param len 
     */
    function util_get_dbus_au_result(variant: GLib.Variant, len: bigint | number): number;

    /**
     * Get the "(ss)" GVariant as an item
     * @param variant a {@link GLib.Variant}
     * @returns The item
     */
    function util_get_dbus_item_result(variant: GLib.Variant): ClientItem;

    /**
     * Get the "a(ss)" GVariant as a list of items
     * @param variant a {@link GLib.Variant}
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
     * @returns `true` if gnome-shell is installed
     */
    function util_has_gnome_shell(): boolean;

    /**
     * Read the pid file
     * @param component The component we're handling
     * @returns the pid
     */
    function util_read_pid_file(component: string): GLib.Pid;

    /**
     * @param text 
     * @param pattern 
     * @param substitution 
     */
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
     * @gir-type Flags
     */
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


    /**
     * @gir-type Flags
     */
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


    namespace Client {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            /**
             * The "delete-history" signal is emitted when we delete
             * a history.
             * @signal
             * @run-last
             */
            "delete-history": (arg0: string) => void;
            /**
             * The "empty-history" signal is emitted when we empty
             * a history.
             * @signal
             * @run-last
             */
            "empty-history": (arg0: string) => void;
            /**
             * The "show-history" signal is emitted when we switch
             * from a history to another.
             * @signal
             * @run-last
             */
            "show-history": () => void;
            /**
             * The "switch-history" signal is emitted when we switch
             * from a history to another.
             * @signal
             * @run-last
             */
            "switch-history": (arg0: string) => void;
            /**
             * @signal
             * @run-last
             */
            tracking: (arg0: boolean) => void;
            /**
             * The "update" signal is emitted whenever anything changed
             * in the history (something was added, removed, selected, replaced...).
             * @signal
             * @run-last
             */
            update: (arg0: UpdateAction, arg1: UpdateTarget, arg2: number) => void;
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Client extends Gio.DBusProxy implements Gio.AsyncInitable<Client>, Gio.DBusInterface, Gio.Initable {
        static $gtype: GObject.GType<Client>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Client.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_finish(result: Gio.AsyncResult): Client;

        // Conflicted with Gio.AsyncInitable.new_finish
        static new_finish(...args: never[]): any;

        static new_sync(): Client;

        // Signals
        /** @signal */
        connect<K extends keyof Client.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Client.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Client.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Client.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Create a new instance of {@link GPaste.Client}
         * @param callback Callback function to invoke when the proxy is ready.
         */
        static ["new"](callback: Gio.AsyncReadyCallback<Client> | null): void;

        /**
         * @param args 
         */
    // Conflicted with Gio.DBusProxy.new
        static ["new"](...args: never[]): any;

        // Methods
        /**
         * Display the about dialog
         */
        about(): globalThis.Promise<void>;

        /**
         * Display the about dialog
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        about(callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Display the about dialog
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        about(callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;

        /**
         * Display the about dialog
         * @param result A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to the async call.
         */
        about_finish(result: Gio.AsyncResult): void;

        /**
         * Display the about dialog
         */
        about_sync(): void;

        /**
         * Add an item to the `GPasteDaemon`
         * @param text the text to add
         */
        add(text: string): globalThis.Promise<void>;

        /**
         * Add an item to the `GPasteDaemon`
         * @param text the text to add
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        add(text: string, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Add an item to the `GPasteDaemon`
         * @param text the text to add
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        add(text: string, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;

        /**
         * Add the file contents to the `GPasteDaemon`
         * @param file the file to add
         */
        add_file(file: string): globalThis.Promise<void>;

        /**
         * Add the file contents to the `GPasteDaemon`
         * @param file the file to add
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        add_file(file: string, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Add the file contents to the `GPasteDaemon`
         * @param file the file to add
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        add_file(file: string, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;

        /**
         * Add the file contents to the `GPasteDaemon`
         * @param result A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to the async call.
         */
        add_file_finish(result: Gio.AsyncResult): void;

        /**
         * Add the file contents to the `GPasteDaemon`
         * @param file the file to add
         */
        add_file_sync(file: string): void;

        /**
         * Add an item to the `GPasteDaemon`
         * @param result A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to the async call.
         */
        add_finish(result: Gio.AsyncResult): void;

        /**
         * Add the password to the `GPasteDaemon`
         * @param name the name to identify the password to add
         * @param password the password to add
         */
        add_password(name: string, password: string): globalThis.Promise<void>;

        /**
         * Add the password to the `GPasteDaemon`
         * @param name the name to identify the password to add
         * @param password the password to add
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        add_password(name: string, password: string, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Add the password to the `GPasteDaemon`
         * @param name the name to identify the password to add
         * @param password the password to add
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        add_password(name: string, password: string, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;

        /**
         * Add the password to the `GPasteDaemon`
         * @param result A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to the async call.
         */
        add_password_finish(result: Gio.AsyncResult): void;

        /**
         * Add the password to the `GPasteDaemon`
         * @param name the name to identify the password to add
         * @param password the password to add
         */
        add_password_sync(name: string, password: string): void;

        /**
         * Add an item to the `GPasteDaemon`
         * @param text the text to add
         */
        add_sync(text: string): void;

        /**
         * Backup the current history
         * @param history the name of the history
         * @param backup the name of the backup
         */
        backup_history(history: string, backup: string): globalThis.Promise<void>;

        /**
         * Backup the current history
         * @param history the name of the history
         * @param backup the name of the backup
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        backup_history(history: string, backup: string, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Backup the current history
         * @param history the name of the history
         * @param backup the name of the backup
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        backup_history(history: string, backup: string, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;

        /**
         * Backup the current history
         * @param result A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to the async call.
         */
        backup_history_finish(result: Gio.AsyncResult): void;

        /**
         * Backup the current history
         * @param history the name of the history
         * @param backup the name of the backup
         */
        backup_history_sync(history: string, backup: string): void;

        /**
         * Delete an item from the `GPasteDaemon`
         * @param uuid the uuid of the element we want to delete
         */
        ["delete"](uuid: string): globalThis.Promise<void>;

        /**
         * Delete an item from the `GPasteDaemon`
         * @param uuid the uuid of the element we want to delete
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        ["delete"](uuid: string, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Delete an item from the `GPasteDaemon`
         * @param uuid the uuid of the element we want to delete
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        ["delete"](uuid: string, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;

        /**
         * Delete an item from the `GPasteDaemon`
         * @param result A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to the async call.
         */
        delete_finish(result: Gio.AsyncResult): void;

        /**
         * Delete a history
         * @param name the name of the history to delete
         */
        delete_history(name: string): globalThis.Promise<void>;

        /**
         * Delete a history
         * @param name the name of the history to delete
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        delete_history(name: string, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Delete a history
         * @param name the name of the history to delete
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        delete_history(name: string, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;

        /**
         * Delete a history
         * @param result A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to the async call.
         */
        delete_history_finish(result: Gio.AsyncResult): void;

        /**
         * Delete a history
         * @param name the name of the history to delete
         */
        delete_history_sync(name: string): void;

        /**
         * Delete the password from the `GPasteDaemon`
         * @param name the name of the password to delete
         */
        delete_password(name: string): globalThis.Promise<void>;

        /**
         * Delete the password from the `GPasteDaemon`
         * @param name the name of the password to delete
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        delete_password(name: string, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Delete the password from the `GPasteDaemon`
         * @param name the name of the password to delete
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        delete_password(name: string, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;

        /**
         * Delete the password from the `GPasteDaemon`
         * @param result A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to the async call.
         */
        delete_password_finish(result: Gio.AsyncResult): void;

        /**
         * Delete the password from the `GPasteDaemon`
         * @param name the name of the password to delete
         */
        delete_password_sync(name: string): void;

        /**
         * Delete an item from the `GPasteDaemon`
         * @param uuid the uuid of the element we want to delete
         */
        delete_sync(uuid: string): void;

        /**
         * Empty the history from the `GPasteDaemon`
         * @param name the name of the history to empty
         */
        empty_history(name: string): globalThis.Promise<void>;

        /**
         * Empty the history from the `GPasteDaemon`
         * @param name the name of the history to empty
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        empty_history(name: string, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Empty the history from the `GPasteDaemon`
         * @param name the name of the history to empty
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        empty_history(name: string, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;

        /**
         * Empty the history from the `GPasteDaemon`
         * @param result A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to the async call.
         */
        empty_history_finish(result: Gio.AsyncResult): void;

        /**
         * Empty the history from the `GPasteDaemon`
         * @param name the name of the history to empty
         */
        empty_history_sync(name: string): void;

        /**
         * Get an item from the `GPasteDaemon`
         * @param uuid the uuid of the element we want to get
         */
        get_element(uuid: string): globalThis.Promise<string>;

        /**
         * Get an item from the `GPasteDaemon`
         * @param uuid the uuid of the element we want to get
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        get_element(uuid: string, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Get an item from the `GPasteDaemon`
         * @param uuid the uuid of the element we want to get
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        get_element(uuid: string, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;

        /**
         * Get an item from the `GPasteDaemon`
         * @param index the index of the element we want to get
         */
        get_element_at_index(index: bigint | number): globalThis.Promise<ClientItem>;

        /**
         * Get an item from the `GPasteDaemon`
         * @param index the index of the element we want to get
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        get_element_at_index(index: bigint | number, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Get an item from the `GPasteDaemon`
         * @param index the index of the element we want to get
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        get_element_at_index(index: bigint | number, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<ClientItem> | void;

        /**
         * Get an item from the `GPasteDaemon`
         * @param result A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to the async call.
         * @returns a new {@link GPaste.ClientItem}
         */
        get_element_at_index_finish(result: Gio.AsyncResult): ClientItem;

        /**
         * Get an item from the `GPasteDaemon`
         * @param index the index of the element we want to get
         * @returns a new {@link GPaste.ClientItem}
         */
        get_element_at_index_sync(index: bigint | number): ClientItem;

        /**
         * Get an item from the `GPasteDaemon`
         * @param result A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to the async call.
         * @returns a newly allocated string
         */
        get_element_finish(result: Gio.AsyncResult): string;

        /**
         * Get the kind of an item from the `GPasteDaemon`
         * @param uuid the uuid of the element we want to get
         */
        get_element_kind(uuid: string): globalThis.Promise<ItemKind>;

        /**
         * Get the kind of an item from the `GPasteDaemon`
         * @param uuid the uuid of the element we want to get
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        get_element_kind(uuid: string, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Get the kind of an item from the `GPasteDaemon`
         * @param uuid the uuid of the element we want to get
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        get_element_kind(uuid: string, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<ItemKind> | void;

        /**
         * Get this kind of an item from the `GPasteDaemon`
         * @param result A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to the async call.
         * @returns The {@link GPaste.ItemKind}
         */
        get_element_kind_finish(result: Gio.AsyncResult): ItemKind;

        /**
         * Get the kind of an item from the `GPasteDaemon`
         * @param uuid the uuid of the element we want to get
         * @returns The {@link GPaste.ItemKind}
         */
        get_element_kind_sync(uuid: string): ItemKind;

        /**
         * Get an item from the `GPasteDaemon`
         * @param uuid the uuid of the element we want to get
         * @returns a newly allocated string
         */
        get_element_sync(uuid: string): string;

        /**
         * Get some items from the `GPasteDaemon`
         * @param uuids the uuids of the elements we want to get
         */
        get_elements(uuids: string[]): globalThis.Promise<ClientItem[]>;

        /**
         * Get some items from the `GPasteDaemon`
         * @param uuids the uuids of the elements we want to get
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        get_elements(uuids: string[], callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Get some items from the `GPasteDaemon`
         * @param uuids the uuids of the elements we want to get
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        get_elements(uuids: string[], callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<ClientItem[]> | void;

        /**
         * Get some items from the `GPasteDaemon`
         * @param result A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to the async call.
         * @returns a newly allocated array of string
         */
        get_elements_finish(result: Gio.AsyncResult): ClientItem[];

        /**
         * Get some items from the `GPasteDaemon`
         * @param uuids the uuids of the elements we want to get
         * @returns a newly allocated array of string
         */
        get_elements_sync(uuids: string[]): ClientItem[];

        /**
         * Get the history from the `GPasteDaemon`
         */
        get_history(): globalThis.Promise<ClientItem[]>;

        /**
         * Get the history from the `GPasteDaemon`
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        get_history(callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Get the history from the `GPasteDaemon`
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        get_history(callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<ClientItem[]> | void;

        /**
         * Get the history from the `GPasteDaemon`
         * @param result A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to the async call.
         * @returns a newly allocated array of string
         */
        get_history_finish(result: Gio.AsyncResult): ClientItem[];

        /**
         * Get the name of the history from the `GPasteDaemon`
         */
        get_history_name(): globalThis.Promise<string>;

        /**
         * Get the name of the history from the `GPasteDaemon`
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        get_history_name(callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Get the name of the history from the `GPasteDaemon`
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        get_history_name(callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;

        /**
         * Get the name of the history from the `GPasteDaemon`
         * @param result A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to the async call.
         * @returns a newly allocated string
         */
        get_history_name_finish(result: Gio.AsyncResult): string;

        /**
         * Get the name of the history from the `GPasteDaemon`
         * @returns a newly allocated string
         */
        get_history_name_sync(): string;

        /**
         * Get the history isize from the `GPasteDaemon`
         * @param name the name of the history
         */
        get_history_size(name: string): globalThis.Promise<number>;

        /**
         * Get the history isize from the `GPasteDaemon`
         * @param name the name of the history
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        get_history_size(name: string, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Get the history isize from the `GPasteDaemon`
         * @param name the name of the history
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        get_history_size(name: string, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<number> | void;

        /**
         * Get the history size from the `GPasteDaemon`
         * @param result A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to the async call.
         * @returns the size of the history
         */
        get_history_size_finish(result: Gio.AsyncResult): number;

        /**
         * Get the history size from the `GPasteDaemon`
         * @param name the name of the history
         * @returns the size of the history
         */
        get_history_size_sync(name: string): number;

        /**
         * Get the history from the `GPasteDaemon`
         * @returns a newly allocated array of string
         */
        get_history_sync(): ClientItem[];

        /**
         * Get an item from the `GPasteDaemon`
         * @param uuid the uuid of the element we want to get
         */
        get_raw_element(uuid: string): globalThis.Promise<string>;

        /**
         * Get an item from the `GPasteDaemon`
         * @param uuid the uuid of the element we want to get
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        get_raw_element(uuid: string, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Get an item from the `GPasteDaemon`
         * @param uuid the uuid of the element we want to get
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        get_raw_element(uuid: string, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;

        /**
         * Get an item from the `GPasteDaemon`
         * @param result A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to the async call.
         * @returns a newly allocated string
         */
        get_raw_element_finish(result: Gio.AsyncResult): string;

        /**
         * Get an item from the `GPasteDaemon`
         * @param uuid the uuid of the element we want to get
         * @returns a newly allocated string
         */
        get_raw_element_sync(uuid: string): string;

        /**
         * Get the history from the `GPasteDaemon`
         */
        get_raw_history(): globalThis.Promise<ClientItem[]>;

        /**
         * Get the history from the `GPasteDaemon`
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        get_raw_history(callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Get the history from the `GPasteDaemon`
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        get_raw_history(callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<ClientItem[]> | void;

        /**
         * Get the history from the `GPasteDaemon`
         * @param result A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to the async call.
         * @returns a newly allocated array of string
         */
        get_raw_history_finish(result: Gio.AsyncResult): ClientItem[];

        /**
         * Get the history from the `GPasteDaemon`
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
         */
        list_histories(): globalThis.Promise<string[]>;

        /**
         * List all available hisotries
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        list_histories(callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * List all available hisotries
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        list_histories(callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string[]> | void;

        /**
         * List all available hisotries
         * @param result A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to the async call.
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
         */
        merge(decoration: string | null, separator: string | null, uuids: string[]): globalThis.Promise<void>;

        /**
         * Merge some history entries
         * 
         * If decoration is " and separator is , and entries are foo bar baz
         * result will be "foo","bar","baz"
         * @param decoration the decoration to apply to each entry
         * @param separator the separator to add between each entry
         * @param uuids the uuids of the elements we want to get
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        merge(decoration: string | null, separator: string | null, uuids: string[], callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Merge some history entries
         * 
         * If decoration is " and separator is , and entries are foo bar baz
         * result will be "foo","bar","baz"
         * @param decoration the decoration to apply to each entry
         * @param separator the separator to add between each entry
         * @param uuids the uuids of the elements we want to get
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        merge(decoration: string | null, separator: string | null, uuids: string[], callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;

        /**
         * Merge some history entries
         * @param result A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to the async call.
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
         */
        on_extension_state_changed(state: boolean): globalThis.Promise<void>;

        /**
         * Call this when the extension changes its state
         * @param state the new state of the extension
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        on_extension_state_changed(state: boolean, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Call this when the extension changes its state
         * @param state the new state of the extension
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        on_extension_state_changed(state: boolean, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;

        /**
         * Call this when the extension changes its state
         * @param result A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to the async call.
         */
        on_extension_state_changed_finish(result: Gio.AsyncResult): void;

        /**
         * Call this when the extension changes its state
         * @param state the new state of the extension
         */
        on_extension_state_changed_sync(state: boolean): void;

        /**
         * Reexecute the `GPasteDaemon`
         */
        reexecute(): globalThis.Promise<void>;

        /**
         * Reexecute the `GPasteDaemon`
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        reexecute(callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Reexecute the `GPasteDaemon`
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        reexecute(callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;

        /**
         * Reexecute the `GPasteDaemon`
         * @param result A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to the async call.
         */
        reexecute_finish(result: Gio.AsyncResult): void;

        /**
         * Reexecute the `GPasteDaemon`
         */
        reexecute_sync(): void;

        /**
         * Rename the password in the `GPasteDaemon`
         * @param old_name the old name of the password to rename
         * @param new_name the new name to give it
         */
        rename_password(old_name: string, new_name: string): globalThis.Promise<void>;

        /**
         * Rename the password in the `GPasteDaemon`
         * @param old_name the old name of the password to rename
         * @param new_name the new name to give it
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        rename_password(old_name: string, new_name: string, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Rename the password in the `GPasteDaemon`
         * @param old_name the old name of the password to rename
         * @param new_name the new name to give it
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        rename_password(old_name: string, new_name: string, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;

        /**
         * Rename the password in the `GPasteDaemon`
         * @param result A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to the async call.
         */
        rename_password_finish(result: Gio.AsyncResult): void;

        /**
         * Rename the password in the `GPasteDaemon`
         * @param old_name the name of the password to rename
         * @param new_name the new name to give it
         */
        rename_password_sync(old_name: string, new_name: string): void;

        /**
         * Replace the contents of an item
         * @param uuid the uuid of the element we want to replace
         * @param contents the replacement contents
         */
        replace(uuid: string, contents: string): globalThis.Promise<void>;

        /**
         * Replace the contents of an item
         * @param uuid the uuid of the element we want to replace
         * @param contents the replacement contents
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        replace(uuid: string, contents: string, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Replace the contents of an item
         * @param uuid the uuid of the element we want to replace
         * @param contents the replacement contents
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        replace(uuid: string, contents: string, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;

        /**
         * Replace the contents of an item
         * @param result A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to the async call.
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
         */
        search(pattern: string): globalThis.Promise<string[]>;

        /**
         * Search for items matching `pattern` in history
         * @param pattern the pattern to look for in history
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        search(pattern: string, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Search for items matching `pattern` in history
         * @param pattern the pattern to look for in history
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        search(pattern: string, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string[]> | void;

        /**
         * Search for items matching `pattern` in history
         * @param result A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to the async call.
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
         * Select an item from the `GPasteDaemon`
         * @param uuid the uuid of the element we want to select
         */
        select(uuid: string): globalThis.Promise<void>;

        /**
         * Select an item from the `GPasteDaemon`
         * @param uuid the uuid of the element we want to select
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        select(uuid: string, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Select an item from the `GPasteDaemon`
         * @param uuid the uuid of the element we want to select
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        select(uuid: string, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;

        /**
         * Select an item from the `GPasteDaemon`
         * @param result A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to the async call.
         */
        select_finish(result: Gio.AsyncResult): void;

        /**
         * Select an item from the `GPasteDaemon`
         * @param uuid the uuid of the element we want to select
         */
        select_sync(uuid: string): void;

        /**
         * Set the item as password
         * @param uuid the uuid of the element we want to set as password
         * @param name the name to identify the password
         */
        set_password(uuid: string, name: string): globalThis.Promise<void>;

        /**
         * Set the item as password
         * @param uuid the uuid of the element we want to set as password
         * @param name the name to identify the password
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        set_password(uuid: string, name: string, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Set the item as password
         * @param uuid the uuid of the element we want to set as password
         * @param name the name to identify the password
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        set_password(uuid: string, name: string, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;

        /**
         * Set the item as password
         * @param result A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to the async call.
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
         */
        show_history(): globalThis.Promise<void>;

        /**
         * Emit the ShowHistory signal
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        show_history(callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Emit the ShowHistory signal
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        show_history(callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;

        /**
         * Emit the ShowHistory signal
         * @param result A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to the async call.
         */
        show_history_finish(result: Gio.AsyncResult): void;

        /**
         * Emit the ShowHistory signal
         */
        show_history_sync(): void;

        /**
         * Switch to another history
         * @param name the name of the history to switch to
         */
        switch_history(name: string): globalThis.Promise<void>;

        /**
         * Switch to another history
         * @param name the name of the history to switch to
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        switch_history(name: string, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Switch to another history
         * @param name the name of the history to switch to
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        switch_history(name: string, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;

        /**
         * Switch to another history
         * @param result A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to the async call.
         */
        switch_history_finish(result: Gio.AsyncResult): void;

        /**
         * Switch to another history
         * @param name the name of the history to switch to
         */
        switch_history_sync(name: string): void;

        /**
         * Change the tracking state of the `GPasteDaemon`
         * @param state the new tracking state of the `GPasteDaemon`
         */
        track(state: boolean): globalThis.Promise<void>;

        /**
         * Change the tracking state of the `GPasteDaemon`
         * @param state the new tracking state of the `GPasteDaemon`
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        track(state: boolean, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Change the tracking state of the `GPasteDaemon`
         * @param state the new tracking state of the `GPasteDaemon`
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        track(state: boolean, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;

        /**
         * Change the tracking state of the `GPasteDaemon`
         * @param result A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to the async call.
         */
        track_finish(result: Gio.AsyncResult): void;

        /**
         * Change the tracking state of the `GPasteDaemon`
         * @param state the new tracking state of the `GPasteDaemon`
         */
        track_sync(state: boolean): void;

        /**
         * Upload an item to a pastebin service
         * @param uuid the uuid of the element we want to upload
         */
        upload(uuid: string): globalThis.Promise<void>;

        /**
         * Upload an item to a pastebin service
         * @param uuid the uuid of the element we want to upload
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        upload(uuid: string, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Upload an item to a pastebin service
         * @param uuid the uuid of the element we want to upload
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        upload(uuid: string, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;

        /**
         * Upload an item to a pastebin service
         * @param result A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to the async call.
         */
        upload_finish(result: Gio.AsyncResult): void;

        /**
         * Upload an item to a pastebin service
         * @param uuid the uuid of the element we want to upload
         */
        upload_sync(uuid: string): void;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns `true` if successful. If an error has occurred, this function will return `false` and set `error` appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or `null` on error.
         * @param res the {@link Gio.AsyncResult} from the callback
         * @returns a newly created {@link GObject.Object},      or `null` on error. Free with `g_object_unref()`.
         */
        new_finish(res: Gio.AsyncResult): Client;

        /**
         * @param args 
         */
        // Conflicted with Gio.DBusProxy.new_finish
        new_finish(...args: never[]): any;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @virtual
         */
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @returns A {@link Gio.DBusObject} or `null`. The returned reference should be freed with `g_object_unref()`.
         */
        get_object(): Gio.DBusObject | null;

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         */
        set_object(object: Gio.DBusObject | null): void;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @virtual
         */
        vfunc_dup_object(): Gio.DBusObject | null;

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         * @virtual
         */
        vfunc_set_object(object: Gio.DBusObject | null): void;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable: Gio.Cancellable | null): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }


    namespace ClientItem {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ClientItem extends GObject.Object {
        static $gtype: GObject.GType<ClientItem>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ClientItem.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ClientItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](uuid: string, value: string): ClientItem;

        // Signals
        /** @signal */
        connect<K extends keyof ClientItem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientItem.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ClientItem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientItem.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ClientItem.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClientItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Returns the uuid of the item
         */
        get_uuid(): string;

        /**
         * Returns the value of the item
         */
        get_value(): string;
    }


    namespace GnomeShellClient {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            /**
             * The "accelerator-activated" signal is emitted when gnome-shell notifies us
             * that an accelerator has been pressed.
             * @signal
             * @run-last
             */
            "accelerator-activated": (arg0: number) => void;
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class GnomeShellClient extends Gio.DBusProxy implements Gio.AsyncInitable<GnomeShellClient>, Gio.DBusInterface, Gio.Initable {
        static $gtype: GObject.GType<GnomeShellClient>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GnomeShellClient.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GnomeShellClient.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_finish(result: Gio.AsyncResult): GnomeShellClient;

        // Conflicted with Gio.AsyncInitable.new_finish
        static new_finish(...args: never[]): any;

        static new_sync(): GnomeShellClient;

        // Signals
        /** @signal */
        connect<K extends keyof GnomeShellClient.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GnomeShellClient.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GnomeShellClient.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GnomeShellClient.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GnomeShellClient.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GnomeShellClient.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Create a new instance of {@link GPaste.GnomeShellClient}
         * @param callback Callback function to invoke when the proxy is ready.
         */
        static ["new"](callback: Gio.AsyncReadyCallback<GnomeShellClient> | null): void;

        /**
         * @param args 
         */
    // Conflicted with Gio.DBusProxy.new
        static ["new"](...args: never[]): any;

        // Methods
        /**
         * Grab a keybinding
         * @param accelerator a {@link GPaste.GnomeShellAccelerator} instance
         */
        grab_accelerator(accelerator: GnomeShellAccelerator): globalThis.Promise<number>;

        /**
         * Grab a keybinding
         * @param accelerator a {@link GPaste.GnomeShellAccelerator} instance
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        grab_accelerator(accelerator: GnomeShellAccelerator, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Grab a keybinding
         * @param accelerator a {@link GPaste.GnomeShellAccelerator} instance
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        grab_accelerator(accelerator: GnomeShellAccelerator, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<number> | void;

        /**
         * Grab a keybinding
         * @param result A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to the async call.
         * @returns the action id corresultponding
         */
        grab_accelerator_finish(result: Gio.AsyncResult): number;

        /**
         * Grab a keybinding
         * @param accelerator a {@link GPaste.GnomeShellAccelerator} instance
         * @returns the action id corresponding
         */
        grab_accelerator_sync(accelerator: GnomeShellAccelerator): number;

        /**
         * Grab some keybindings
         * @param accelerators an array of {@link GPaste.GnomeShellAccelerator} instances
         */
        grab_accelerators(accelerators: GnomeShellAccelerator[]): globalThis.Promise<number>;

        /**
         * Grab some keybindings
         * @param accelerators an array of {@link GPaste.GnomeShellAccelerator} instances
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        grab_accelerators(accelerators: GnomeShellAccelerator[], callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Grab some keybindings
         * @param accelerators an array of {@link GPaste.GnomeShellAccelerator} instances
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        grab_accelerators(accelerators: GnomeShellAccelerator[], callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<number> | void;

        /**
         * Grab some keybindings
         * @param result A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to the async call.
         * @returns the action ids corresultponding
         */
        grab_accelerators_finish(result: Gio.AsyncResult): number;

        /**
         * Grab some keybindings
         * @param accelerators an array of {@link GPaste.GnomeShellAccelerator} instances
         * @returns the action ids corresponding
         */
        grab_accelerators_sync(accelerators: GnomeShellAccelerator[]): number;

        /**
         * Ungrab a keybinding
         * @param action the action id corresponding to the keybinding
         */
        ungrab_accelerator(action: number): globalThis.Promise<boolean>;

        /**
         * Ungrab a keybinding
         * @param action the action id corresponding to the keybinding
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        ungrab_accelerator(action: number, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Ungrab a keybinding
         * @param action the action id corresponding to the keybinding
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null` if you don't care about the result of the method invocation.
         */
        ungrab_accelerator(action: number, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Ungrab a keybinding
         * @param result A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to the async call.
         * @returns whether the ungrab was succesful or not
         */
        ungrab_accelerator_finish(result: Gio.AsyncResult): boolean;

        /**
         * Ungrab a keybinding
         * @param action the action id corresponding to the keybinding
         * @returns whether the ungrab was succesful or not
         */
        ungrab_accelerator_sync(action: number): boolean;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns `true` if successful. If an error has occurred, this function will return `false` and set `error` appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or `null` on error.
         * @param res the {@link Gio.AsyncResult} from the callback
         * @returns a newly created {@link GObject.Object},      or `null` on error. Free with `g_object_unref()`.
         */
        new_finish(res: Gio.AsyncResult): GnomeShellClient;

        /**
         * @param args 
         */
        // Conflicted with Gio.DBusProxy.new_finish
        new_finish(...args: never[]): any;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @virtual
         */
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @returns A {@link Gio.DBusObject} or `null`. The returned reference should be freed with `g_object_unref()`.
         */
        get_object(): Gio.DBusObject | null;

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         */
        set_object(object: Gio.DBusObject | null): void;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @virtual
         */
        vfunc_dup_object(): Gio.DBusObject | null;

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         * @virtual
         */
        vfunc_set_object(object: Gio.DBusObject | null): void;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable: Gio.Cancellable | null): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }


    namespace ScreensaverClient {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            /**
             * The "active-changed" signal is emitted when the screensaver appears or vanishes
             * @signal
             * @run-last
             */
            "active-changed": (arg0: boolean) => void;
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ScreensaverClient extends Gio.DBusProxy implements Gio.AsyncInitable<ScreensaverClient>, Gio.DBusInterface, Gio.Initable {
        static $gtype: GObject.GType<ScreensaverClient>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ScreensaverClient.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ScreensaverClient.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_finish(result: Gio.AsyncResult): ScreensaverClient;

        // Conflicted with Gio.AsyncInitable.new_finish
        static new_finish(...args: never[]): any;

        static new_sync(): ScreensaverClient;

        // Signals
        /** @signal */
        connect<K extends keyof ScreensaverClient.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ScreensaverClient.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ScreensaverClient.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ScreensaverClient.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ScreensaverClient.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ScreensaverClient.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Create a new instance of {@link GPaste.ScreensaverClient}
         * @param callback Callback function to invoke when the proxy is ready.
         */
        static ["new"](callback: Gio.AsyncReadyCallback<ScreensaverClient> | null): void;

        /**
         * @param args 
         */
    // Conflicted with Gio.DBusProxy.new
        static ["new"](...args: never[]): any;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns `true` if successful. If an error has occurred, this function will return `false` and set `error` appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or `null` on error.
         * @param res the {@link Gio.AsyncResult} from the callback
         * @returns a newly created {@link GObject.Object},      or `null` on error. Free with `g_object_unref()`.
         */
        new_finish(res: Gio.AsyncResult): ScreensaverClient;

        /**
         * @param args 
         */
        // Conflicted with Gio.DBusProxy.new_finish
        new_finish(...args: never[]): any;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @virtual
         */
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @returns A {@link Gio.DBusObject} or `null`. The returned reference should be freed with `g_object_unref()`.
         */
        get_object(): Gio.DBusObject | null;

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         */
        set_object(object: Gio.DBusObject | null): void;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @virtual
         */
        vfunc_dup_object(): Gio.DBusObject | null;

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         * @virtual
         */
        vfunc_set_object(object: Gio.DBusObject | null): void;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable: Gio.Cancellable | null): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }


    namespace Settings {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The "changed" signal is emitted when a key has potentially changed.
             * You should call one of the `g_paste_settings_get()` calls to check the new
             * value.
             * 
             * This signal supports detailed connections.  You can connect to the
             * detailed signal "changed::x" in order to only receive callbacks
             * when key "x" changes.
             * @signal
             * @detailed
             * @run-last
             */
            changed: (arg0: string) => void;
            /**
             * The "rebind" signal is emitted when a key has potentially changed.
             * You should call one of the `g_paste_settings_get()` calls to check the new
             * value.
             * 
             * This signal supports detailed connections.  You can connect to the
             * detailed signal "rebind::x" in order to only receive callbacks
             * when key "x" changes.
             * @signal
             * @detailed
             * @run-last
             */
            rebind: (arg0: string) => void;
            /**
             * The "track" signal is emitted when the daemon starts or stops tracking
             * clipboard changes
             * @signal
             * @run-last
             */
            track: (arg0: boolean) => void;
            [key: `changed::${string}`]: (arg0: string) => void;
            [key: `rebind::${string}`]: (arg0: string) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Settings extends GObject.Object {
        static $gtype: GObject.GType<Settings>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Settings.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Settings.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Settings;

        // Signals
        /** @signal */
        connect<K extends keyof Settings.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Settings.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Settings.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Settings.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Settings.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Settings.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
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
        set_element_size(value: bigint | number): void;

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
        set_max_displayed_history_size(value: bigint | number): void;

        /**
         * Change the "max-history-size" setting
         * @param value the maximum number of items the history can contain
         */
        set_max_history_size(value: bigint | number): void;

        /**
         * Change the "max-memory-usage" setting
         * @param value the maximum amount of memory we can use
         */
        set_max_memory_usage(value: bigint | number): void;

        /**
         * Change the "max-text-item-size" setting
         * @param value the maximum size for a textual item to be handled
         */
        set_max_text_item_size(value: bigint | number): void;

        /**
         * Change the "min-text-item-size" setting
         * @param value the minimum size for a textual item to be handled
         */
        set_min_text_item_size(value: bigint | number): void;

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


    /**
     * @gir-type Alias
     */
    type ClientClass = typeof Client;

    /**
     * @gir-type Alias
     */
    type ClientItemClass = typeof ClientItem;

    /**
     * @gir-type Struct
     */
    class GnomeShellAccelerator {
        static $gtype: GObject.GType<GnomeShellAccelerator>;

        // Fields
        accelerator: string;

        mode_flags: MetaKeyBindingFlags;

        grab_flags: GnomeShellActionMode;
    }


    /**
     * @gir-type Alias
     */
    type GnomeShellClientClass = typeof GnomeShellClient;

    /**
     * @gir-type Alias
     */
    type ScreensaverClientClass = typeof ScreensaverClient;

    /**
     * @gir-type Alias
     */
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
