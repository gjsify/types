/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type xlib from '@girs/xlib-2.0';
import type cairo from '@girs/cairo-1.0';
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
    module App {
        // Signal callback interfaces

        interface MessageReceived {
            (command: number, message_data: MessageData, time_: number): Response;
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
     * The base class for every single instance application. The #UniqueApp
     * structure contains only private data and should be manipulated only
     * with the provided functions.
     */
    class App extends GObject.Object {
        static $gtype: GObject.GType<App>;

        // Own properties of Unique.App

        /**
         * Whether another instance of the application is running.
         */
        get is_running(): boolean;
        /**
         * Whether another instance of the application is running.
         */
        get isRunning(): boolean;
        /**
         * The unique name of the application. It must be in form of
         * a domain-like string, like <literal>org.gnome.MyApplication</literal>.
         */
        get name(): string;
        /**
         * The #GdkScreen of the application.
         */
        get screen(): Gdk.Screen;
        set screen(val: Gdk.Screen);
        /**
         * The startup notification id, needed to complete the startup
         * notification sequence. If not set, a default id will be
         * automatically given.
         */
        get startup_id(): string;
        /**
         * The startup notification id, needed to complete the startup
         * notification sequence. If not set, a default id will be
         * automatically given.
         */
        get startupId(): string;

        // Constructors of Unique.App

        constructor(properties?: Partial<App.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, startup_id: string): App;

        // Own signals of Unique.App

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(
            signal: 'message-received',
            callback: (_source: this, command: number, message_data: MessageData, time_: number) => Response,
        ): number;
        connect_after(
            signal: 'message-received',
            callback: (_source: this, command: number, message_data: MessageData, time_: number) => Response,
        ): number;
        emit(signal: 'message-received', command: number, message_data: MessageData, time_: number): void;

        // Own virtual methods of Unique.App

        vfunc_message_received(command: number, message_data: MessageData, time_: number): Response;

        // Own methods of Unique.App

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
        add_command(command_name: string, command_id: number): void;
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
        send_message(command_id: number, message_data: MessageData): Response;
        /**
         * Makes `app` "watch" a window. Every watched window will receive
         * startup notification changes automatically.
         * @param window the #GtkWindow to watch
         */
        watch_window(window: Gtk.Window): void;
    }

    module Backend {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * The #UniqueBackend structure contains only private data and should only
     * be accessed using the provided functions.
     */
    abstract class Backend extends GObject.Object {
        static $gtype: GObject.GType<Backend>;

        // Constructors of Unique.Backend

        constructor(properties?: Partial<Backend.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own static methods of Unique.Backend

        /**
         * Creates a #UniqueBackend using the default backend defined at
         * compile time. You can override the default backend by setting the
         * <literal>UNIQUE_BACKEND</literal> environment variable with the
         * name of the desired backend.
         */
        static create(): Backend;

        // Own virtual methods of Unique.Backend

        /**
         * Requests the name set using unique_backend_set_name() using `backend`.
         *
         * already is a registered name
         */
        vfunc_request_name(): boolean;
        /**
         * Sends `command_id,` and optionally `message_data,` to a running instance
         * using `backend`.
         * @param command_id command to send
         * @param message_data message to send, or %NULL
         * @param time_ time of the command emission, or 0 for the current time
         */
        vfunc_send_message(command_id: number, message_data: MessageData, time_: number): Response;

        // Own methods of Unique.Backend

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
         * Requests the name set using unique_backend_set_name() using `backend`.
         *
         * already is a registered name
         * @returns %TRUE if the name was assigned to us, %FALSE if there
         */
        request_name(): boolean;
        /**
         * Sends `command_id,` and optionally `message_data,` to a running instance
         * using `backend`.
         * @param command_id command to send
         * @param message_data message to send, or %NULL
         * @param time_ time of the command emission, or 0 for the current time
         * @returns a #UniqueResponse value sent by the running instance
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

    type AppClass = typeof App;
    abstract class AppPrivate {
        static $gtype: GObject.GType<AppPrivate>;

        // Constructors of Unique.AppPrivate

        _init(...args: any[]): void;
    }

    type BackendClass = typeof Backend;
    /**
     * #UniqueMessageData contains the data passed between instances of
     * a #UniqueApp. The #UniqueMessageData structure received inside
     * the signal handlers for UniqueApp::message-received is guaranteed
     * to contain the #GdkScreen, the workspace and the startup notification
     * id of the instance sending the message.
     */
    class MessageData {
        static $gtype: GObject.GType<MessageData>;

        // Constructors of Unique.MessageData

        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;

        static ['new'](): MessageData;

        // Own methods of Unique.MessageData

        /**
         * Copies `message_data`.
         * @returns a copy of the passed #UniqueMessageData
         */
        copy(): MessageData;
        /**
         * Frees all the resources allocated by `message_data`.
         */
        free(): void;
        /**
         * Retrieves the raw contents of `message_data` set using
         * unique_messaget_data_set().
         *
         * returned string is owned by the #UniqueMessageData and should
         * never be modified or freed
         * @returns the contents of the message data or %NULL. The
         */
        get(): [number, number];
        /**
         * Retrieves the filename set with unique_message_data_set_filename().
         *
         * filename. Use g_free() to free the resources used by the returned
         * value.
         * @returns a newly allocated string containing the
         */
        get_filename(): string;
        /**
         * Returns a pointer to the screen from where the message came. You
         * can use gtk_window_set_screen() to move windows or dialogs to the
         * right screen. This field is always set by the Unique library.
         * @returns a #GdkScreen
         */
        get_screen(): Gdk.Screen;
        /**
         * Retrieves the startup notification id set inside `message_data`. This
         * field is always set by the Unique library.
         *
         * owned by the #UniqueMessageData structure and should not be
         * modified or freed
         * @returns the startup notification id. The returned string is
         */
        get_startup_id(): string;
        /**
         * Retrieves the text set using unique_message_data_set_text().
         * @returns a newly-allocated string.
         */
        get_text(): string;
        /**
         * Retrieves a %NULL-terminated string vector containing the URIs set with
         * unique_message_data_set_uris().
         *
         * %NULL-terminated list of URIs. Use g_strfreev() to free it.
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
         * from the message data. If `data` is %NULL, a `length` of -1 will unset
         * the payload, while a `length` of 0 will set the payload to an empty
         * string.
         *
         * You can use unique_message_data_get() to retrieve the data.
         * @param data binary blob to set, or %NULL
         * @param length length of @data
         */
        set(data: number, length: number): void;
        /**
         * Sets `filename` as the contents of `message_data`.
         * @param filename a filename
         */
        set_filename(filename: string): void;
        /**
         * Sets `str` as the plain text payload of `message_data,` converting it
         * to UTF-8 if needed. If `length` is -1, the length of the string will
         * be used. Use unique_message_data_get_text() to retrieve the text.
         * @param str plain text to be set as payload
         * @param length length of the text, or -1
         * @returns %TRUE if the text was successfully converted to UTF-8
         */
        set_text(str: string, length: number): boolean;
        /**
         * Converts `uris` to a valid URI list and sets it as payload of
         * `message_data`. You can use unique_message_data_get_uris() to
         * retrieve the list from a #UniqueMessageData.
         * @param uris a list of URIs in a %NULL-terminated string vector
         * @returns %TRUE if the URIs were successfully converted
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
