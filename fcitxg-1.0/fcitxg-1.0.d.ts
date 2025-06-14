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
        // Signal callback interfaces

        interface CommitString {
            (_source: Client, string: string): void;
        }

        interface Connected {
            (_source: Client): void;
        }

        interface CurrentIm {
            (_source: Client, name: string, unique_name: string, lang_code: string): void;
        }

        interface DeleteSurroundingText {
            (_source: Client, cursor: number, len: number): void;
        }

        interface ForwardKey {
            (_source: Client, keyval: number, state: number, type: number): void;
        }

        interface NotifyFocusOut {
            (_source: Client): void;
        }

        interface UpdateClientSideUi {
            (
                _source: Client,
                preedit: PreeditItem[],
                preedit_cursor: number,
                aux_up: PreeditItem[],
                aux_down: PreeditItem[],
                candidate_list: CandidateItem[],
                candidate_cursor: number,
                candidate_layout_hint: number,
                has_prev: boolean,
                has_next: boolean,
            ): void;
        }

        interface UpdateFormattedPreedit {
            (_source: Client, preedit: PreeditItem[], cursor: number): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'commit-string': CommitString;
            connected: Connected;
            'current-im': CurrentIm;
            'delete-surrounding-text': DeleteSurroundingText;
            'forward-key': ForwardKey;
            'notify-focus-out': NotifyFocusOut;
            'update-client-side-ui': UpdateClientSideUi;
            'update-formatted-preedit': UpdateFormattedPreedit;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            watcher: Watcher;
        }
    }

    /**
     * A #FcitxGClient allow to create a input context via DBus
     */
    class Client extends GObject.Object {
        static $gtype: GObject.GType<Client>;

        // Properties

        set watcher(val: Watcher);

        // Constructors

        constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Client;

        static new_with_watcher(watcher: Watcher): Client;

        // Signals

        connect<K extends keyof Client.SignalSignatures>(signal: K, callback: Client.SignalSignatures[K]): number;
        connect_after<K extends keyof Client.SignalSignatures>(signal: K, callback: Client.SignalSignatures[K]): number;
        emit<K extends keyof Client.SignalSignatures>(
            signal: K,
            ...args: Client.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Methods

        /**
         * tell fcitx current client has focus
         */
        focus_in(): void;
        /**
         * tell fcitx current client has lost focus
         */
        focus_out(): void;
        get_uuid(): number;
        /**
         * Check #FcitxGClient is valid to communicate with Fcitx
         * @returns #FcitxGClient is valid or not
         */
        is_valid(): boolean;
        next_page(): void;
        prev_page(): void;
        /**
         * use this function with #fcitx_g_client_process_key_finish
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
        ): Promise<boolean>;
        /**
         * use this function with #fcitx_g_client_process_key_finish
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
         * use this function with #fcitx_g_client_process_key_finish
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
        ): Promise<boolean> | void;
        /**
         * use this function with #fcitx_g_client_process_key_async
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
        set_surrounding_text(text: string | null, cursor: number, anchor: number): void;
        /**
         * Set whether use ProcessKeyEventBatch if supports, default is true.
         * @param batch whether use ProcessKeyEventBatch
         */
        set_use_batch_process_key_event(batch: boolean): void;
    }

    namespace Watcher {
        // Signal callback interfaces

        interface AvailabilityChanged {
            (_source: Watcher, available: boolean): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'availability-changed': AvailabilityChanged;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A FcitxGWatcher allow to create a input context via DBus
     */
    class Watcher extends GObject.Object {
        static $gtype: GObject.GType<Watcher>;

        // Constructors

        constructor(properties?: Partial<Watcher.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Watcher;

        // Signals

        connect<K extends keyof Watcher.SignalSignatures>(signal: K, callback: Watcher.SignalSignatures[K]): number;
        connect_after<K extends keyof Watcher.SignalSignatures>(
            signal: K,
            callback: Watcher.SignalSignatures[K],
        ): number;
        emit<K extends keyof Watcher.SignalSignatures>(
            signal: K,
            ...args: Watcher.SignalSignatures[K] extends (...args: infer P) => any ? P : never
        ): void;

        // Methods

        /**
         * self: A #FcitxGWatcher
         * Return the current #GDBusConnection
         * @returns #GDBusConnection for current connection
         */
        get_connection(): Gio.DBusConnection;
        get_service_name(): string;
        is_service_available(): boolean;
        /**
         * self: A #FcitxGWatcher
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
        _init(...args: any[]): void;
    }

    type ClientClass = typeof Client;
    abstract class ClientPrivate {
        static $gtype: GObject.GType<ClientPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

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
        _init(...args: any[]): void;
    }

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
