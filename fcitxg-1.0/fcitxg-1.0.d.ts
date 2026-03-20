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

export namespace FcitxG {
    /**
     * FcitxG-1.0
     */

    namespace Client {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emit when input method commit one string
             * @signal
             * @run-last
             */
            'commit-string': (arg0: string) => void;
            /**
             * Emit when connected to fcitx and created ic
             * @signal
             * @run-last
             */
            connected: () => void;
            /**
             * Emit when input method used in input context changed
             * @signal
             * @run-last
             */
            'current-im': (arg0: string, arg1: string, arg2: string) => void;
            /**
             * Emit when input method need to delete surrounding text
             * @signal
             * @run-last
             */
            'delete-surrounding-text': (arg0: number, arg1: number) => void;
            /**
             * Emit when input method ask for forward a key
             * @signal
             * @run-last
             */
            'forward-key': (arg0: number, arg1: number, arg2: number) => void;
            /**
             * Emit when focus out happens on server side
             * @signal
             * @run-last
             */
            'notify-focus-out': () => void;
            /**
             * Emit when input method needs to update the client-side user interface
             * @signal
             * @run-last
             */
            'update-client-side-ui': (
                arg0: PreeditItem[],
                arg1: number,
                arg2: PreeditItem[],
                arg3: PreeditItem[],
                arg4: CandidateItem[],
                arg5: number,
                arg6: number,
                arg7: boolean,
                arg8: boolean,
            ) => void;
            /**
             * Emit when input method needs to update formatted preedit
             * @signal
             * @run-last
             */
            'update-formatted-preedit': (arg0: PreeditItem[], arg1: number) => void;
            'notify::watcher': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            watcher: Watcher;
        }
    }

    /**
     * A {@link FcitxG.Client} allow to create a input context via DBus
     * @gir-type Class
     */
    class Client extends GObject.Object {
        static $gtype: GObject.GType<Client>;

        // Properties

        /**
         * @construct-only
         */
        set watcher(val: Watcher);

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

        static ['new'](): Client;

        static new_with_watcher(watcher: Watcher): Client;

        // Signals

        /** @signal */
        connect<K extends keyof Client.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Client.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Client.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Client.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * tell fcitx current client has focus
         */
        focus_in(): void;
        /**
         * tell fcitx current client has lost focus
         */
        focus_out(): void;
        /**
         * @returns the current uuid of input context.
         */
        get_uuid(): number;
        /**
         * Check {@link FcitxG.Client} is valid to communicate with Fcitx
         * @returns {@link FcitxG.Client} is valid or not
         */
        is_valid(): boolean;
        next_page(): void;
        prev_page(): void;
        /**
         * use this function with `fcitx_g_client_process_key_finish`
         * @param keyval key value
         * @param keycode hardware key code
         * @param state key state
         * @param isRelease event type is key release
         * @param t timestamp
         * @param timeout_msec timeout in millisecond
         * @param cancellable cancellable
         */
        process_key(
            keyval: number,
            keycode: number,
            state: number,
            isRelease: boolean,
            t: number,
            timeout_msec: number,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * use this function with `fcitx_g_client_process_key_finish`
         * @param keyval key value
         * @param keycode hardware key code
         * @param state key state
         * @param isRelease event type is key release
         * @param t timestamp
         * @param timeout_msec timeout in millisecond
         * @param cancellable cancellable
         * @param callback callback
         */
        process_key(
            keyval: number,
            keycode: number,
            state: number,
            isRelease: boolean,
            t: number,
            timeout_msec: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * use this function with `fcitx_g_client_process_key_finish`
         * @param keyval key value
         * @param keycode hardware key code
         * @param state key state
         * @param isRelease event type is key release
         * @param t timestamp
         * @param timeout_msec timeout in millisecond
         * @param cancellable cancellable
         * @param callback callback
         */
        process_key(
            keyval: number,
            keycode: number,
            state: number,
            isRelease: boolean,
            t: number,
            timeout_msec: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * use this function with `fcitx_g_client_process_key_async`
         * @param res result
         * @returns process key result
         */
        process_key_finish(res: Gio.AsyncResult): boolean;
        /**
         * send a key event to fcitx synchronizely
         * @param keyval key value
         * @param keycode hardware key code
         * @param state key state
         * @param isRelease is key release
         * @param t timestamp
         * @returns the key is processed or not
         */
        process_key_sync(keyval: number, keycode: number, state: number, isRelease: boolean, t: number): boolean;
        /**
         * tell fcitx current client is reset from client side
         */
        reset(): void;
        /**
         * tell fcitx current client to select candidate.
         * @param index Candidate index
         */
        select_candidate(index: number): void;
        /**
         * set client capability of input context.
         * @param flags capability
         */
        set_capability(flags: number): void;
        /**
         * tell fcitx current client's cursor geometry info
         * @param x x of cursor
         * @param y y of cursor
         * @param w width of cursor
         * @param h height of cursor
         */
        set_cursor_rect(x: number, y: number, w: number, h: number): void;
        /**
         * tell fcitx current client's cursor geometry info
         * @param x x of cursor
         * @param y y of cursor
         * @param w width of cursor
         * @param h height of cursor
         * @param scale scale factor of surface
         */
        set_cursor_rect_with_scale_factor(x: number, y: number, w: number, h: number, scale: number): void;
        /**
         * Set the display name
         * @param display display name
         */
        set_display(display: string): void;
        /**
         * Set the program name
         * @param program program name
         */
        set_program(program: string): void;
        /**
         * @param text surroundng text
         * @param cursor cursor position coresponding to text
         * @param anchor anchor position coresponding to text
         */
        set_surrounding_text(text: string | null, cursor: number, anchor: number): void;
        /**
         * Set whether use ProcessKeyEventBatch if supports, default is true.
         * @param batch whether use ProcessKeyEventBatch
         */
        set_use_batch_process_key_event(batch: boolean): void;
    }

    namespace Watcher {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emit when connected to fcitx and created ic
             * @signal
             * @run-last
             */
            'availability-changed': (arg0: boolean) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A FcitxGWatcher allow to create a input context via DBus
     * @gir-type Class
     */
    class Watcher extends GObject.Object {
        static $gtype: GObject.GType<Watcher>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Watcher.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Watcher.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Watcher;

        // Signals

        /** @signal */
        connect<K extends keyof Watcher.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Watcher.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Watcher.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Watcher.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Watcher.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Watcher.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * self: A {@link FcitxG.Watcher}
         * Return the current {@link Gio.DBusConnection}
         * @returns {@link Gio.DBusConnection} for current connection
         */
        get_connection(): Gio.DBusConnection;
        /**
         * @returns an available service name.
         */
        get_service_name(): string;
        is_service_available(): boolean;
        /**
         * self: A {@link FcitxG.Watcher}
         * watch: to monitor the portal service or not.
         * @param watch
         */
        set_watch_portal(watch: boolean): void;
        /**
         * Unwatch for the fcitx serivce, should only be called after
         * calling fcitx_g_watcher_watch.
         */
        unwatch(): void;
        /**
         * Watch for the fcitx serivce.
         */
        watch(): void;
    }

    /**
     * @gir-type Struct
     */
    class CandidateItem {
        static $gtype: GObject.GType<CandidateItem>;

        // Fields

        label: string;
        candidate: string;

        // Constructors

        constructor(
            properties?: Partial<{
                label: string;
                candidate: string;
            }>,
        );
    }

    /**
     * @gir-type Alias
     */
    type ClientClass = typeof Client;
    /**
     * @gir-type Struct
     */
    abstract class ClientPrivate {
        static $gtype: GObject.GType<ClientPrivate>;
    }

    /**
     * @gir-type Struct
     */
    class PreeditItem {
        static $gtype: GObject.GType<PreeditItem>;

        // Fields

        string: string;
        type: number;

        // Constructors

        constructor(
            properties?: Partial<{
                string: string;
                type: number;
            }>,
        );
    }

    /**
     * @gir-type Alias
     */
    type WatcherClass = typeof Watcher;
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

export default FcitxG;

// END
