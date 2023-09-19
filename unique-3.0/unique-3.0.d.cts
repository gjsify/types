
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './unique-3.0-ambient.d.ts';
import './unique-3.0-import.d.ts';
/**
 * Unique-3.0
 */

import type xlib from '@girs/xlib-2.0';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type Gtk from '@girs/gtk-3.0';
import type Gdk from '@girs/gdk-3.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Atk from '@girs/atk-1.0';

/**
 * Command to send to a currently active instance. User defined commands
 * should be positive integers, and should be added using the
 * unique_app_add_command() function after creating a #UniqueApp instance
 */
export enum Command {
    INVALID,
    ACTIVATE,
    NEW,
    OPEN,
    CLOSE,
}
/**
 * Response that a currently active instance of the application should
 * return to the caller which sent a command.
 */
export enum Response {
    INVALID,
    OK,
    CANCEL,
    FAIL,
    PASSTHROUGH,
}
export module App {

    // Signal callback interfaces

    /**
     * Signal callback interface for `message-received`
     */
    export interface MessageReceivedSignalCallback {
        ($obj: App, command: number, message_data: MessageData, time_: number): Response
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Unique-3.0.Unique.App

        /**
         * The unique name of the application. It must be in form of
         * a domain-like string, like <literal>org.gnome.MyApplication</literal>.
         */
        name?: string | null
        /**
         * The #GdkScreen of the application.
         */
        screen?: Gdk.Screen | null
        /**
         * The startup notification id, needed to complete the startup
         * notification sequence. If not set, a default id will be
         * automatically given.
         */
        startup_id?: string | null
    }

}

export interface App {

    // Own properties of Unique-3.0.Unique.App

    /**
     * Whether another instance of the application is running.
     */
    readonly is_running: boolean
    /**
     * The unique name of the application. It must be in form of
     * a domain-like string, like <literal>org.gnome.MyApplication</literal>.
     */
    readonly name: string
    /**
     * The #GdkScreen of the application.
     */
    screen: Gdk.Screen
    /**
     * The startup notification id, needed to complete the startup
     * notification sequence. If not set, a default id will be
     * automatically given.
     */
    readonly startup_id: string

    // Owm methods of Unique-3.0.Unique.App

    /**
     * Adds `command_name` as a custom command that can be used by `app`. You
     * must call unique_app_add_command() before unique_app_send_message() in
     * order to use the newly added command.
     * 
     * The command name is used internally: you need to use the command's logical
     * id in unique_app_send_message() and inside the UniqueApp::message-received
     * signal.
     * @param command_name command name
     * @param command_id command logical id
     */
    add_command(command_name: string | null, command_id: number): void
    /**
     * Sends `command` to a running instance of `app`. If you need to pass data
     * to the instance, you should create a #UniqueMessageData object using
     * unique_message_data_new() and then fill it with the data you intend to
     * pass.
     * 
     * The running application will receive a UniqueApp::message-received signal
     * and will call the various signal handlers attach to it. If any handler
     * returns a #UniqueResponse different than %UNIQUE_RESPONSE_OK, the emission
     * will stop.
     * @param command_id command to send
     * @param message_data #UniqueMessageData, or %NULL
     * @returns The #UniqueResponse returned by the running instance
     */
    send_message(command_id: number, message_data?: MessageData | null): Response
    /**
     * Makes `app` "watch" a window. Every watched window will receive
     * startup notification changes automatically.
     * @param window the #GtkWindow to watch
     */
    watch_window(window: Gtk.Window): void

    // Own virtual methods of Unique-3.0.Unique.App

    vfunc_message_received(command: number, message_data: MessageData, time_: number): Response

    // Own signals of Unique-3.0.Unique.App

    connect(sigName: "message-received", callback: App.MessageReceivedSignalCallback): number
    connect_after(sigName: "message-received", callback: App.MessageReceivedSignalCallback): number
    emit(sigName: "message-received", command: number, message_data: MessageData, time_: number, ...args: any[]): void

    // Class property signals of Unique-3.0.Unique.App

    connect(sigName: "notify::is-running", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-running", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-running", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::screen", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::startup-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The base class for every single instance application. The #UniqueApp
 * structure contains only private data and should be manipulated only
 * with the provided functions.
 * @class 
 */
export class App extends GObject.Object {

    // Own properties of Unique-3.0.Unique.App

    static name: string
    static $gtype: GObject.GType<App>

    // Constructors of Unique-3.0.Unique.App

    constructor(config?: App.ConstructorProperties) 
    /**
     * Creates a new #UniqueApp instance for `name` passing a start-up notification
     * id `startup_id`.  The name must be a unique identifier for the application,
     * and it must be in form of a domain name, like
     * <literal>org.gnome.YourApplication</literal>.
     * 
     * If `startup_id` is %NULL the <literal>DESKTOP_STARTUP_ID</literal>
     * environment variable will be check, and if that fails a "fake" startup
     * notification id will be created.
     * 
     * Once you have created a #UniqueApp instance, you should check if
     * any other instance is running, using unique_app_is_running().
     * If another instance is running you can send a command to it, using
     * the unique_app_send_message() function; after that, the second instance
     * should quit. If no other instance is running, the usual logic for
     * creating the application can follow.
     * @constructor 
     * @param name the name of the application's instance
     * @param startup_id the startup notification id, or %NULL
     * @returns the newly created #UniqueApp instance.
     */
    constructor(name: string | null, startup_id?: string | null) 
    /**
     * Creates a new #UniqueApp instance for `name` passing a start-up notification
     * id `startup_id`.  The name must be a unique identifier for the application,
     * and it must be in form of a domain name, like
     * <literal>org.gnome.YourApplication</literal>.
     * 
     * If `startup_id` is %NULL the <literal>DESKTOP_STARTUP_ID</literal>
     * environment variable will be check, and if that fails a "fake" startup
     * notification id will be created.
     * 
     * Once you have created a #UniqueApp instance, you should check if
     * any other instance is running, using unique_app_is_running().
     * If another instance is running you can send a command to it, using
     * the unique_app_send_message() function; after that, the second instance
     * should quit. If no other instance is running, the usual logic for
     * creating the application can follow.
     * @constructor 
     * @param name the name of the application's instance
     * @param startup_id the startup notification id, or %NULL
     * @returns the newly created #UniqueApp instance.
     */
    static new(name: string | null, startup_id?: string | null): App
    _init(config?: App.ConstructorProperties): void
}

export module Backend {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Backend {

    // Own fields of Unique-3.0.Unique.Backend

    parent_instance: GObject.Object

    // Owm methods of Unique-3.0.Unique.Backend

    /**
     * FIXME
     * @returns FIXME
     */
    get_name(): string | null
    /**
     * FIXME
     * @returns FIXME
     */
    get_screen(): Gdk.Screen
    /**
     * FIXME
     * @returns FIXME
     */
    get_startup_id(): string | null
    /**
     * Retrieves the current workspace.
     * @returns a workspace number
     */
    get_workspace(): number
    /**
     * Requests the name set using unique_backend_set_name() using `backend`.
     * 
     * already is a registered name
     * @returns %TRUE if the name was assigned to us, %FALSE if there
     */
    request_name(): boolean
    /**
     * Sends `command_id,` and optionally `message_data,` to a running instance
     * using `backend`.
     * @param command_id command to send
     * @param message_data message to send, or %NULL
     * @param time_ time of the command emission, or 0 for the current time
     * @returns a #UniqueResponse value sent by the running instance
     */
    send_message(command_id: number, message_data: MessageData, time_: number): Response
    /**
     * FIXME
     * @param name FIXME
     */
    set_name(name: string | null): void
    /**
     * FIXME
     * @param screen FIXME
     */
    set_screen(screen: Gdk.Screen): void
    /**
     * FIXME
     * @param startup_id FIXME
     */
    set_startup_id(startup_id: string | null): void

    // Own virtual methods of Unique-3.0.Unique.Backend

    /**
     * Requests the name set using unique_backend_set_name() using `backend`.
     * 
     * already is a registered name
     * @virtual 
     * @returns %TRUE if the name was assigned to us, %FALSE if there
     */
    vfunc_request_name(): boolean
    /**
     * Sends `command_id,` and optionally `message_data,` to a running instance
     * using `backend`.
     * @virtual 
     * @param command_id command to send
     * @param message_data message to send, or %NULL
     * @param time_ time of the command emission, or 0 for the current time
     * @returns a #UniqueResponse value sent by the running instance
     */
    vfunc_send_message(command_id: number, message_data: MessageData, time_: number): Response

    // Class property signals of Unique-3.0.Unique.Backend

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #UniqueBackend structure contains only private data and should only
 * be accessed using the provided functions.
 * @class 
 */
export class Backend extends GObject.Object {

    // Own properties of Unique-3.0.Unique.Backend

    static name: string
    static $gtype: GObject.GType<Backend>

    // Constructors of Unique-3.0.Unique.Backend

    constructor(config?: Backend.ConstructorProperties) 
    _init(config?: Backend.ConstructorProperties): void
    /**
     * Creates a #UniqueBackend using the default backend defined at
     * compile time. You can override the default backend by setting the
     * <literal>UNIQUE_BACKEND</literal> environment variable with the
     * name of the desired backend.
     * @returns the newly created #UniqueBackend instance
     */
    static create(): Backend
}

export interface AppClass {

    // Own fields of Unique-3.0.Unique.AppClass

    message_received: (app: App, command: number, message_data: MessageData, time_: number) => Response
}

/**
 * Base class for every single instance application.
 * @record 
 */
export abstract class AppClass {

    // Own properties of Unique-3.0.Unique.AppClass

    static name: string
}

export interface AppPrivate {
}

export class AppPrivate {

    // Own properties of Unique-3.0.Unique.AppPrivate

    static name: string
}

export interface BackendClass {

    // Own fields of Unique-3.0.Unique.BackendClass

    request_name: (backend: Backend) => boolean
    send_message: (backend: Backend, command_id: number, message_data: MessageData, time_: number) => Response
}

/**
 * The class that should be implemented by every backend for #UniqueApp.
 * @record 
 */
export abstract class BackendClass {

    // Own properties of Unique-3.0.Unique.BackendClass

    static name: string
}

export interface MessageData {

    // Owm methods of Unique-3.0.Unique.MessageData

    /**
     * Copies `message_data`.
     * @returns a copy of the passed #UniqueMessageData
     */
    copy(): MessageData
    /**
     * Frees all the resources allocated by `message_data`.
     */
    free(): void
    /**
     * Retrieves the raw contents of `message_data` set using
     * unique_messaget_data_set().
     * 
     * returned string is owned by the #UniqueMessageData and should
     * never be modified or freed
     * @returns the contents of the message data or %NULL. The
     */
    get(): [ /* returnType */ number, /* length */ number ]
    /**
     * Retrieves the filename set with unique_message_data_set_filename().
     * 
     * filename. Use g_free() to free the resources used by the returned
     * value.
     * @returns a newly allocated string containing the
     */
    get_filename(): string | null
    /**
     * Returns a pointer to the screen from where the message came. You
     * can use gtk_window_set_screen() to move windows or dialogs to the
     * right screen. This field is always set by the Unique library.
     * @returns a #GdkScreen
     */
    get_screen(): Gdk.Screen
    /**
     * Retrieves the startup notification id set inside `message_data`. This
     * field is always set by the Unique library.
     * 
     * owned by the #UniqueMessageData structure and should not be
     * modified or freed
     * @returns the startup notification id. The returned string is
     */
    get_startup_id(): string | null
    /**
     * Retrieves the text set using unique_message_data_set_text().
     * @returns a newly-allocated string.
     */
    get_text(): string | null
    /**
     * Retrieves a %NULL-terminated string vector containing the URIs set with
     * unique_message_data_set_uris().
     * 
     * %NULL-terminated list of URIs. Use g_strfreev() to free it.
     * @returns a newly-allocated,
     */
    get_uris(): string[]
    /**
     * Retrieves the workspace number from where the message came. This
     * field is always set by the Unique library.
     * @returns the workspace number
     */
    get_workspace(): number
    /**
     * Sets `data` as the payload of `message_data`. Any other data is removed
     * from the message data. If `data` is %NULL, a `length` of -1 will unset
     * the payload, while a `length` of 0 will set the payload to an empty
     * string.
     * 
     * You can use unique_message_data_get() to retrieve the data.
     * @param data binary blob to set, or %NULL
     * @param length length of `data`
     */
    set(data: number | null, length: number): void
    /**
     * Sets `filename` as the contents of `message_data`.
     * @param filename a filename
     */
    set_filename(filename: string | null): void
    /**
     * Sets `str` as the plain text payload of `message_data,` converting it
     * to UTF-8 if needed. If `length` is -1, the length of the string will
     * be used. Use unique_message_data_get_text() to retrieve the text.
     * @param str plain text to be set as payload
     * @param length length of the text, or -1
     * @returns %TRUE if the text was successfully converted to UTF-8
     */
    set_text(str: string | null, length: number): boolean
    /**
     * Converts `uris` to a valid URI list and sets it as payload of
     * `message_data`. You can use unique_message_data_get_uris() to
     * retrieve the list from a #UniqueMessageData.
     * @param uris a list of URIs in a %NULL-terminated string vector
     * @returns %TRUE if the URIs were successfully converted
     */
    set_uris(uris: string[]): boolean
}

/**
 * #UniqueMessageData contains the data passed between instances of
 * a #UniqueApp. The #UniqueMessageData structure received inside
 * the signal handlers for UniqueApp::message-received is guaranteed
 * to contain the #GdkScreen, the workspace and the startup notification
 * id of the instance sending the message.
 * @record 
 */
export class MessageData {

    // Own properties of Unique-3.0.Unique.MessageData

    static name: string

    // Constructors of Unique-3.0.Unique.MessageData

    /**
     * Creates a new #UniqueMessageData structure. This structure holds the
     * message data passed between running instances with
     * unique_app_send_message().
     * @constructor 
     * @returns the newly created #UniqueMessageData
     */
    constructor() 
    /**
     * Creates a new #UniqueMessageData structure. This structure holds the
     * message data passed between running instances with
     * unique_app_send_message().
     * @constructor 
     * @returns the newly created #UniqueMessageData
     */
    static new(): MessageData
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