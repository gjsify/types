// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Unique-3.0
 */

import type xlib from './xlib-2.0';
import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gtk from './Gtk-3.0';
import type Gdk from './Gdk-3.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Atk from './Atk-1.0';

export namespace Unique {

/**
 * Command to send to a currently active instance. User defined commands
 * should be positive integers, and should be added using the
 * unique_app_add_command() function after creating a #UniqueApp instance
 */
enum Command {
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
enum Response {
    INVALID,
    OK,
    CANCEL,
    FAIL,
    PASSTHROUGH,
}
interface App_ConstructProps extends GObject.Object_ConstructProps {

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
    startupId?: string | null
}

/**
 * Signal callback interface for `message-received`
 */
interface App_MessageReceivedSignalCallback {
    (command: number, messageData: MessageData, time: number): Response
}

interface App {

    // Own properties of Unique-3.0.Unique.App

    /**
     * Whether another instance of the application is running.
     */
    readonly isRunning: boolean
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
    readonly startupId: string

    // Owm methods of Unique-3.0.Unique.App

    /**
     * Adds `command_name` as a custom command that can be used by `app`. You
     * must call unique_app_add_command() before unique_app_send_message() in
     * order to use the newly added command.
     * 
     * The command name is used internally: you need to use the command's logical
     * id in unique_app_send_message() and inside the UniqueApp::message-received
     * signal.
     * @param commandName command name
     * @param commandId command logical id
     */
    addCommand(commandName: string, commandId: number): void
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
     * @param commandId command to send
     * @param messageData #UniqueMessageData, or %NULL
     */
    sendMessage(commandId: number, messageData?: MessageData | null): Response
    /**
     * Makes `app` "watch" a window. Every watched window will receive
     * startup notification changes automatically.
     * @param window the #GtkWindow to watch
     */
    watchWindow(window: Gtk.Window): void

    // Own signals of Unique-3.0.Unique.App

    connect(sigName: "message-received", callback: App_MessageReceivedSignalCallback): number
    on(sigName: "message-received", callback: App_MessageReceivedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "message-received", callback: App_MessageReceivedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "message-received", callback: App_MessageReceivedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "message-received", messageData: MessageData, time: number, ...args: any[]): void

    // Class property signals of Unique-3.0.Unique.App

    connect(sigName: "notify::is-running", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-running", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-running", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-running", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-running", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::screen", callback: (...args: any[]) => void): number
    on(sigName: "notify::screen", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::screen", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::screen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::startup-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::startup-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::startup-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::startup-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The base class for every single instance application. The #UniqueApp
 * structure contains only private data and should be manipulated only
 * with the provided functions.
 * @class 
 */
class App extends GObject.Object {

    // Own properties of Unique-3.0.Unique.App

    static name: string
    static $gtype: GObject.GType<App>

    // Constructors of Unique-3.0.Unique.App

    constructor(config?: App_ConstructProps) 
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
     * @param startupId the startup notification id, or %NULL
     */
    constructor(name: string, startupId?: string | null) 
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
     * @param startupId the startup notification id, or %NULL
     */
    static new(name: string, startupId?: string | null): App
    _init(config?: App_ConstructProps): void
}

interface Backend_ConstructProps extends GObject.Object_ConstructProps {
}

interface Backend {

    // Own fields of Unique-3.0.Unique.Backend

    parentInstance: GObject.Object

    // Owm methods of Unique-3.0.Unique.Backend

    /**
     * FIXME
     */
    getName(): string
    /**
     * FIXME
     */
    getScreen(): Gdk.Screen
    /**
     * FIXME
     */
    getStartupId(): string
    /**
     * Retrieves the current workspace.
     */
    getWorkspace(): number
    /**
     * Requests the name set using unique_backend_set_name() using `backend`.
     * 
     * already is a registered name
     */
    requestName(): boolean
    /**
     * Sends `command_id,` and optionally `message_data,` to a running instance
     * using `backend`.
     * @param commandId command to send
     * @param messageData message to send, or %NULL
     * @param time time of the command emission, or 0 for the current time
     */
    sendMessage(commandId: number, messageData: MessageData, time: number): Response
    /**
     * FIXME
     * @param name FIXME
     */
    setName(name: string): void
    /**
     * FIXME
     * @param screen FIXME
     */
    setScreen(screen: Gdk.Screen): void
    /**
     * FIXME
     * @param startupId FIXME
     */
    setStartupId(startupId: string): void

    // Class property signals of Unique-3.0.Unique.Backend

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #UniqueBackend structure contains only private data and should only
 * be accessed using the provided functions.
 * @class 
 */
class Backend extends GObject.Object {

    // Own properties of Unique-3.0.Unique.Backend

    static name: string
    static $gtype: GObject.GType<Backend>

    // Constructors of Unique-3.0.Unique.Backend

    constructor(config?: Backend_ConstructProps) 
    _init(config?: Backend_ConstructProps): void
    /**
     * Creates a #UniqueBackend using the default backend defined at
     * compile time. You can override the default backend by setting the
     * <literal>UNIQUE_BACKEND</literal> environment variable with the
     * name of the desired backend.
     */
    static create(): Backend
}

interface AppClass {

    // Own fields of Unique-3.0.Unique.AppClass

    messageReceived: (app: App, command: number, messageData: MessageData, time: number) => Response
}

/**
 * Base class for every single instance application.
 * @record 
 */
abstract class AppClass {

    // Own properties of Unique-3.0.Unique.AppClass

    static name: string
}

interface AppPrivate {
}

class AppPrivate {

    // Own properties of Unique-3.0.Unique.AppPrivate

    static name: string
}

interface BackendClass {

    // Own fields of Unique-3.0.Unique.BackendClass

    requestName: (backend: Backend) => boolean
    sendMessage: (backend: Backend, commandId: number, messageData: MessageData, time: number) => Response
}

/**
 * The class that should be implemented by every backend for #UniqueApp.
 * @record 
 */
abstract class BackendClass {

    // Own properties of Unique-3.0.Unique.BackendClass

    static name: string
}

interface MessageData {

    // Owm methods of Unique-3.0.Unique.MessageData

    /**
     * Copies `message_data`.
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
     */
    get(): [ /* returnType */ number, /* length */ number ]
    /**
     * Retrieves the filename set with unique_message_data_set_filename().
     * 
     * filename. Use g_free() to free the resources used by the returned
     * value.
     */
    getFilename(): string
    /**
     * Returns a pointer to the screen from where the message came. You
     * can use gtk_window_set_screen() to move windows or dialogs to the
     * right screen. This field is always set by the Unique library.
     */
    getScreen(): Gdk.Screen
    /**
     * Retrieves the startup notification id set inside `message_data`. This
     * field is always set by the Unique library.
     * 
     * owned by the #UniqueMessageData structure and should not be
     * modified or freed
     */
    getStartupId(): string
    /**
     * Retrieves the text set using unique_message_data_set_text().
     */
    getText(): string
    /**
     * Retrieves a %NULL-terminated string vector containing the URIs set with
     * unique_message_data_set_uris().
     * 
     * %NULL-terminated list of URIs. Use g_strfreev() to free it.
     */
    getUris(): string[]
    /**
     * Retrieves the workspace number from where the message came. This
     * field is always set by the Unique library.
     */
    getWorkspace(): number
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
    setFilename(filename: string): void
    /**
     * Sets `str` as the plain text payload of `message_data,` converting it
     * to UTF-8 if needed. If `length` is -1, the length of the string will
     * be used. Use unique_message_data_get_text() to retrieve the text.
     * @param str plain text to be set as payload
     * @param length length of the text, or -1
     */
    setText(str: string, length: number): boolean
    /**
     * Converts `uris` to a valid URI list and sets it as payload of
     * `message_data`. You can use unique_message_data_get_uris() to
     * retrieve the list from a #UniqueMessageData.
     * @param uris a list of URIs in a %NULL-terminated string vector
     */
    setUris(uris: string[]): boolean
}

/**
 * #UniqueMessageData contains the data passed between instances of
 * a #UniqueApp. The #UniqueMessageData structure received inside
 * the signal handlers for UniqueApp::message-received is guaranteed
 * to contain the #GdkScreen, the workspace and the startup notification
 * id of the instance sending the message.
 * @record 
 */
class MessageData {

    // Own properties of Unique-3.0.Unique.MessageData

    static name: string

    // Constructors of Unique-3.0.Unique.MessageData

    /**
     * Creates a new #UniqueMessageData structure. This structure holds the
     * message data passed between running instances with
     * unique_app_send_message().
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #UniqueMessageData structure. This structure holds the
     * message data passed between running instances with
     * unique_app_send_message().
     * @constructor 
     */
    static new(): MessageData
}

}
export default Unique;