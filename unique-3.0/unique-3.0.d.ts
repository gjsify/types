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
import type xlib from '@girs/xlib-2.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gtk from '@girs/gtk-3.0';
import type Gdk from '@girs/gdk-3.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace Unique {
    /**
     * Unique-3.0
     */

    /**
     * @gir-type Enum
     */
    export namespace Command {
        export const $gtype: GObject.GType<Command>;
    }

    /**
     * Command to send to a currently active instance. User defined commands
     * should be positive integers, and should be added using the
     * `unique_app_add_command()` function after creating a {@link Unique.App} instance
     * @gir-type Enum
     */
    enum Command {
        INVALID,
        ACTIVATE,
        NEW,
        OPEN,
        CLOSE,
    }

    /**
     * @gir-type Enum
     */
    export namespace Response {
        export const $gtype: GObject.GType<Response>;
    }

    /**
     * Response that a currently active instance of the application should
     * return to the caller which sent a command.
     * @gir-type Enum
     */
    enum Response {
        INVALID,
        OK,
        CANCEL,
        FAIL,
        PASSTHROUGH,
    }

    namespace App {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ::message-received signal is emitted each time a second instance
             * of {@link Unique.App} with the same name as `app` is launched and sends a
             * message using `unique_app_send_message()`. The currently running instance
             * should check `command` for the action to execute and `message_data` for
             * eventual other parameters (see {@link Unique.MessageData}).
             *
             * The signal handler should return a {@link Unique.Response} value depending on
             * whether the command was successfully completed or not. If the
             * {@link Unique.Response.PASSTHROUGH} return value is used, the signal
             * emission chain will continue until another handler will return another
             * response code.
             * @signal
             * @run-last
             */
            'message-received': (arg0: number, arg1: MessageData, arg2: number) => Response;
            'notify::is-running': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::screen': (pspec: GObject.ParamSpec) => void;
            'notify::startup-id': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            is_running: boolean;
            isRunning: boolean;
            name: string;
            screen: Gdk.Screen;
            startup_id: string;
            startupId: string;
        }
    }

    /**
     * The base class for every single instance application. The {@link Unique.App}
     * structure contains only private data and should be manipulated only
     * with the provided functions.
     * @gir-type Class
     */
    class App extends GObject.Object {
        static $gtype: GObject.GType<App>;

        // Properties

        /**
         * Whether another instance of the application is running.
         * @read-only
         */
        get is_running(): boolean;
        /**
         * Whether another instance of the application is running.
         * @read-only
         */
        get isRunning(): boolean;
        /**
         * The unique name of the application. It must be in form of
         * a domain-like string, like <literal>org.gnome.MyApplication</literal>.
         * @construct-only
         */
        get name(): string;
        /**
         * The {@link Gdk.Screen} of the application.
         */
        get screen(): Gdk.Screen;
        set screen(val: Gdk.Screen);
        /**
         * The startup notification id, needed to complete the startup
         * notification sequence. If not set, a default id will be
         * automatically given.
         * @construct-only
         */
        get startup_id(): string;
        /**
         * The startup notification id, needed to complete the startup
         * notification sequence. If not set, a default id will be
         * automatically given.
         * @construct-only
         */
        get startupId(): string;

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

        static ['new'](name: string, startup_id: string): App;

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
         * @param command
         * @param message_data
         * @param time_
         * @virtual
         */
        vfunc_message_received(command: number, message_data: MessageData, time_: number): Response;

        // Methods

        /**
         * Adds `command_name` as a custom command that can be used by `app`. You
         * must call `unique_app_add_command()` before `unique_app_send_message()` in
         * order to use the newly added command.
         *
         * The command name is used internally: you need to use the command's logical
         * id in `unique_app_send_message()` and inside the UniqueApp::message-received
         * signal.
         * @param command_name command name
         * @param command_id command logical id
         */
        add_command(command_name: string, command_id: number): void;
        /**
         * Sends `command` to a running instance of `app`. If you need to pass data
         * to the instance, you should create a {@link Unique.MessageData} object using
         * `unique_message_data_new()` and then fill it with the data you intend to
         * pass.
         *
         * The running application will receive a UniqueApp::message-received signal
         * and will call the various signal handlers attach to it. If any handler
         * returns a {@link Unique.Response} different than {@link Unique.Response.OK}, the emission
         * will stop.
         * @param command_id command to send
         * @param message_data {@link Unique.MessageData}, or `null`
         * @returns The {@link Unique.Response} returned by the running instance
         */
        send_message(command_id: number, message_data: MessageData): Response;
        /**
         * Makes `app` "watch" a window. Every watched window will receive
         * startup notification changes automatically.
         * @param window the {@link Gtk.Window} to watch
         */
        watch_window(window: Gtk.Window): void;
    }

    namespace Backend {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * The {@link Unique.Backend} structure contains only private data and should only
     * be accessed using the provided functions.
     * @gir-type Class
     */
    abstract class Backend extends GObject.Object {
        static $gtype: GObject.GType<Backend>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Backend.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Backend.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Backend.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Backend.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Backend.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Backend.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Backend.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Backend.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Creates a {@link Unique.Backend} using the default backend defined at
         * compile time. You can override the default backend by setting the
         * <literal>UNIQUE_BACKEND</literal> environment variable with the
         * name of the desired backend.
         */
        static create(): Backend;

        // Virtual methods

        /**
         * Requests the name set using `unique_backend_set_name()` using `backend`.
         *
         * already is a registered name
         * @virtual
         */
        vfunc_request_name(): boolean;
        /**
         * Sends `command_id`, and optionally `message_data`, to a running instance
         * using `backend`.
         * @param command_id command to send
         * @param message_data message to send, or `null`
         * @param time_ time of the command emission, or 0 for the current time
         * @virtual
         */
        vfunc_send_message(command_id: number, message_data: MessageData, time_: number): Response;

        // Methods

        /**
         * FIXME
         * @returns FIXME
         */
        get_name(): string;
        /**
         * FIXME
         * @returns FIXME
         */
        get_screen(): Gdk.Screen;
        /**
         * FIXME
         * @returns FIXME
         */
        get_startup_id(): string;
        /**
         * Retrieves the current workspace.
         * @returns a workspace number
         */
        get_workspace(): number;
        /**
         * Requests the name set using `unique_backend_set_name()` using `backend`.
         *
         * already is a registered name
         * @returns `true` if the name was assigned to us, `false` if there
         */
        request_name(): boolean;
        /**
         * Sends `command_id`, and optionally `message_data`, to a running instance
         * using `backend`.
         * @param command_id command to send
         * @param message_data message to send, or `null`
         * @param time_ time of the command emission, or 0 for the current time
         * @returns a {@link Unique.Response} value sent by the running instance
         */
        send_message(command_id: number, message_data: MessageData, time_: number): Response;
        /**
         * FIXME
         * @param name FIXME
         */
        set_name(name: string): void;
        /**
         * FIXME
         * @param screen FIXME
         */
        set_screen(screen: Gdk.Screen): void;
        /**
         * FIXME
         * @param startup_id FIXME
         */
        set_startup_id(startup_id: string): void;
    }

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
    type BackendClass = typeof Backend;
    /**
     * {@link Unique.MessageData} contains the data passed between instances of
     * a {@link Unique.App}. The {@link Unique.MessageData} structure received inside
     * the signal handlers for UniqueApp::message-received is guaranteed
     * to contain the {@link Gdk.Screen}, the workspace and the startup notification
     * id of the instance sending the message.
     * @gir-type Struct
     */
    class MessageData {
        static $gtype: GObject.GType<MessageData>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): MessageData;

        // Methods

        /**
         * Copies `message_data`.
         * @returns a copy of the passed {@link Unique.MessageData}
         */
        copy(): MessageData;
        /**
         * Frees all the resources allocated by `message_data`.
         */
        free(): void;
        /**
         * Retrieves the raw contents of `message_data` set using
         * `unique_messaget_data_set()`.
         *
         * returned string is owned by the {@link Unique.MessageData} and should
         * never be modified or freed
         * @returns the contents of the message data or `null`. The
         */
        get(): [number, number];
        /**
         * Retrieves the filename set with `unique_message_data_set_filename()`.
         *
         * filename. Use `g_free()` to free the resources used by the returned
         * value.
         * @returns a newly allocated string containing the
         */
        get_filename(): string;
        /**
         * Returns a pointer to the screen from where the message came. You
         * can use `gtk_window_set_screen()` to move windows or dialogs to the
         * right screen. This field is always set by the Unique library.
         * @returns a {@link Gdk.Screen}
         */
        get_screen(): Gdk.Screen;
        /**
         * Retrieves the startup notification id set inside `message_data`. This
         * field is always set by the Unique library.
         *
         * owned by the {@link Unique.MessageData} structure and should not be
         * modified or freed
         * @returns the startup notification id. The returned string is
         */
        get_startup_id(): string;
        /**
         * Retrieves the text set using `unique_message_data_set_text()`.
         * @returns a newly-allocated string.
         */
        get_text(): string;
        /**
         * Retrieves a `null`-terminated string vector containing the URIs set with
         * `unique_message_data_set_uris()`.
         *
         * `null`-terminated list of URIs. Use `g_strfreev()` to free it.
         * @returns a newly-allocated,
         */
        get_uris(): string[];
        /**
         * Retrieves the workspace number from where the message came. This
         * field is always set by the Unique library.
         * @returns the workspace number
         */
        get_workspace(): number;
        /**
         * Sets `data` as the payload of `message_data`. Any other data is removed
         * from the message data. If `data` is `null`, a `length` of -1 will unset
         * the payload, while a `length` of 0 will set the payload to an empty
         * string.
         *
         * You can use `unique_message_data_get()` to retrieve the data.
         * @param data binary blob to set, or `null`
         * @param length length of `data`
         */
        set(data: number, length: number): void;
        /**
         * Sets `filename` as the contents of `message_data`.
         * @param filename a filename
         */
        set_filename(filename: string): void;
        /**
         * Sets `str` as the plain text payload of `message_data`, converting it
         * to UTF-8 if needed. If `length` is -1, the length of the string will
         * be used. Use `unique_message_data_get_text()` to retrieve the text.
         * @param str plain text to be set as payload
         * @param length length of the text, or -1
         * @returns `true` if the text was successfully converted to UTF-8
         */
        set_text(str: string, length: number): boolean;
        /**
         * Converts `uris` to a valid URI list and sets it as payload of
         * `message_data`. You can use `unique_message_data_get_uris()` to
         * retrieve the list from a {@link Unique.MessageData}.
         * @param uris a list of URIs in a `null`-terminated string vector
         * @returns `true` if the URIs were successfully converted
         */
        set_uris(uris: string[]): boolean;
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

export default Unique;

// END
