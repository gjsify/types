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
import type SugarGestures from '@girs/sugargestures-1.0';
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace SugarExt {
    /**
     * SugarExt-1.0
     */

    export namespace ClientEndStyle {
        export const $gtype: GObject.GType<ClientEndStyle>;
    }

    enum ClientEndStyle {
        END_SESSION_DEFAULT,
        LOGOUT,
        REBOOT,
        SHUTDOWN,
    }

    export namespace ClientMode {
        export const $gtype: GObject.GType<ClientMode>;
    }

    enum ClientMode {
        DISABLED,
        NO_RESTART,
        NORMAL,
    }

    export namespace ClientXSMPState {
        export const $gtype: GObject.GType<ClientXSMPState>;
    }

    enum ClientXSMPState {
        START,
        IDLE,
        SAVE_YOURSELF,
        INTERACT_REQUEST,
        INTERACT,
        SAVE_YOURSELF_DONE,
        SHUTDOWN_CANCELLED,
        CONNECTION_CLOSED,
    }

    export namespace SessionLogoutMode {
        export const $gtype: GObject.GType<SessionLogoutMode>;
    }

    enum SessionLogoutMode {
        NORMAL,
        NO_CONFIRMATION,
        FORCE,
    }

    export namespace SessionLogoutType {
        export const $gtype: GObject.GType<SessionLogoutType>;
    }

    enum SessionLogoutType {
        LOGOUT,
        SHUTDOWN,
    }

    export namespace SessionPhase {
        export const $gtype: GObject.GType<SessionPhase>;
    }

    enum SessionPhase {
        STARTUP,
        INITIALIZATION,
        WINDOW_MANAGER,
        PANEL,
        DESKTOP,
        APPLICATION,
        RUNNING,
        SHUTDOWN,
    }
    /**
     * Virtually sets the contents of the specified clipboard by providing
     * a list of supported formats for the clipboard data and a function
     * to call to get the actual data when it is requested.
     * @param clipboard a #GtkClipboard
     * @param targets array containing information     about the available forms for the clipboard data
     * @param get_func function to call to get the     actual clipboard data
     * @param clear_func when the clipboard     contents are set again, this function will be called, and @get_func     will not be subsequently called.
     * @returns %TRUE if setting the clipboard data succeeded.    If setting the clipboard data failed the provided callback    functions will be ignored.
     */
    function clipboard_set_with_data(
        clipboard: Gtk.Clipboard,
        targets: Gtk.TargetEntry[],
        get_func: Gtk.ClipboardGetFunc,
        clear_func: Gtk.ClipboardClearFunc,
    ): boolean;
    /**
     * `const` char: (file utf8)
     * @param file
     */
    function fat_set_hidden_attrib(file: string): boolean;
    function wm_get_activity_id(window: xlib.Window): string;
    function wm_get_bundle_id(window: xlib.Window): string;
    function wm_set_activity_id(window: xlib.Window, activity_id: string): void;
    function wm_set_bundle_id(window: xlib.Window, bundle_id: string): void;
    /**
     * Generates a new XSMP client ID.
     * @returns an XSMP client ID.
     */
    function xsmp_generate_client_id(): string;
    /**
     * Initializes XSMP. Notably, it creates the XSMP listening socket and
     * sets the SESSION_MANAGER environment variable to point to it.
     */
    function xsmp_init(): string;
    /**
     * Sets the XSMP server to start accepting connections.
     */
    function xsmp_run(): void;
    /**
     * Shuts down the XSMP server and closes the ICE listening socket
     */
    function xsmp_shutdown(): void;
    namespace Client {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            quit: () => void;
            'quit-cancelled': () => void;
            'quit-requested': () => void;
            'save-state': (arg0: any | null) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Client extends GObject.Object {
        static $gtype: GObject.GType<Client>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: Client.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Client.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Client.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Client.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Client.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Client.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static end_session(style: ClientEndStyle, request_confirmation: boolean): boolean;

        // Virtual methods

        vfunc_end_session(style: ClientEndStyle, request_confirmation: boolean): boolean;
        vfunc_quit(): void;
        vfunc_quit_cancelled(): void;
        vfunc_quit_requested(): void;
        vfunc_save_state(state_file: GLib.KeyFile): void;
        /**
         * Sets the command used to restart `client` if it does not have a
         * .desktop file that can be used to find its restart command.
         *
         * This can also be used when handling the ::save_state signal, to
         * save the current state via an updated command line. (Eg, providing
         * a list of filenames to open when the application is resumed.)
         * @param argc the length of @argv
         * @param argv argument vector
         */
        vfunc_set_restart_command(argc: number, argv: string): void;
        vfunc_startup(client_id: string): void;
        /**
         * This MUST be called in response to the ::quit_requested signal, to
         * indicate whether or not the application is willing to quit. The
         * application may call it either directly from the signal handler, or
         * at some later point (eg, after asynchronously interacting with the
         * user).
         *
         * If the application does not connect to ::quit_requested,
         * #EggSMClient will call this method on its behalf (passing %TRUE
         * for `will_quit)`.
         *
         * After calling this method, the application should wait to receive
         * either ::quit_cancelled or ::quit.
         * @param will_quit whether or not the application is willing to quit
         */
        vfunc_will_quit(will_quit: boolean): void;

        // Methods

        /**
         * If the application was resumed by the session manager, this will
         * return the #GKeyFile containing its state from the previous
         * session.
         *
         * Note that other libraries and #EggSMClient itself may also store
         * state in the key file, so if you call egg_sm_client_get_groups(),
         * on it, the return value will likely include groups that you did not
         * put there yourself. (It is also not guaranteed that the first
         * group created by the application will still be the "start group"
         * when it is resumed.)
         * @returns the #GKeyFile containing the application's earlier state, or %NULL on error. You should not free this key file; it is owned by @client.
         */
        get_state_file(): GLib.KeyFile;
        /**
         * Checks whether or not the current session has been resumed from
         * a previous saved session. If so, the application should call
         * egg_sm_client_get_state_file() and restore its state from the
         * returned #GKeyFile.
         * @returns %TRUE if the session has been resumed
         */
        is_resumed(): boolean;
        /**
         * Sets the command used to restart `client` if it does not have a
         * .desktop file that can be used to find its restart command.
         *
         * This can also be used when handling the ::save_state signal, to
         * save the current state via an updated command line. (Eg, providing
         * a list of filenames to open when the application is resumed.)
         * @param argc the length of @argv
         * @param argv argument vector
         */
        set_restart_command(argc: number, argv: string): void;
        startup(): void;
        /**
         * This MUST be called in response to the ::quit_requested signal, to
         * indicate whether or not the application is willing to quit. The
         * application may call it either directly from the signal handler, or
         * at some later point (eg, after asynchronously interacting with the
         * user).
         *
         * If the application does not connect to ::quit_requested,
         * #EggSMClient will call this method on its behalf (passing %TRUE
         * for `will_quit)`.
         *
         * After calling this method, the application should wait to receive
         * either ::quit_cancelled or ::quit.
         * @param will_quit whether or not the application is willing to quit
         */
        will_quit(will_quit: boolean): void;
    }

    namespace ClientXSMP {
        // Signal signatures
        interface SignalSignatures extends Client.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Client.ConstructorProps {}
    }

    class ClientXSMP extends Client {
        static $gtype: GObject.GType<ClientXSMP>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: ClientXSMP.SignalSignatures;

        // Fields

        client_id: string;
        state: ClientXSMPState;
        restart_command: string;

        // This field conflicts with a function in a parent class or interface.
        set_restart_command: boolean | any;
        restart_style: number;
        idle: number;
        expecting_initial_save_yourself: number;
        need_save_state: number;
        need_quit_requested: number;
        interact_errors: number;
        shutting_down: number;
        waiting_to_emit_quit: number;
        waiting_to_emit_quit_cancelled: number;
        waiting_to_save_myself: number;

        // Constructors

        constructor(properties?: Partial<ClientXSMP.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof ClientXSMP.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClientXSMP.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ClientXSMP.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ClientXSMP.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ClientXSMP.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ClientXSMP.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace CursorTracker {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class CursorTracker extends GObject.Object {
        static $gtype: GObject.GType<CursorTracker>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: CursorTracker.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CursorTracker.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CursorTracker;

        // Signals

        connect<K extends keyof CursorTracker.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CursorTracker.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CursorTracker.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CursorTracker.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CursorTracker.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CursorTracker.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace GestureGrabber {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class GestureGrabber extends GObject.Object {
        static $gtype: GObject.GType<GestureGrabber>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: GestureGrabber.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<GestureGrabber.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): GestureGrabber;

        // Signals

        connect<K extends keyof GestureGrabber.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GestureGrabber.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof GestureGrabber.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GestureGrabber.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof GestureGrabber.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GestureGrabber.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        add(controller: SugarGestures.EventController, rect: Gdk.Rectangle): void;
        remove(controller: SugarGestures.EventController): void;
    }

    namespace Grid {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Grid extends GObject.Object {
        static $gtype: GObject.GType<Grid>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: Grid.SignalSignatures;

        // Fields

        base_instance: GObject.Object;
        width: number;
        height: number;
        weights: number;

        // Constructors

        constructor(properties?: Partial<Grid.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Grid.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Grid.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Grid.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Grid.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Grid.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Grid.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        add_weight(rect: Gdk.Rectangle): void;
        compute_weight(rect: Gdk.Rectangle): number;
        remove_weight(rect: Gdk.Rectangle): void;
        setup(width: number, height: number): void;
    }

    namespace KeyGrabber {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'key-pressed': (arg0: number, arg1: number, arg2: number) => boolean | void;
            'key-released': (arg0: number, arg1: number, arg2: number) => boolean | void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class KeyGrabber extends GObject.Object {
        static $gtype: GObject.GType<KeyGrabber>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: KeyGrabber.SignalSignatures;

        // Fields

        base_instance: GObject.Object;
        root: Gdk.Window;
        keys: any[];

        // Constructors

        constructor(properties?: Partial<KeyGrabber.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof KeyGrabber.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, KeyGrabber.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof KeyGrabber.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, KeyGrabber.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof KeyGrabber.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<KeyGrabber.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_key_pressed(keycode: number, state: number): boolean;
        vfunc_key_released(keycode: number, state: number): boolean;

        // Methods

        get_key(keycode: number, state: number): string;
        /**
         * Pass to the key grabber the keys it should listen to.
         * @param keys array of     keys the grabber will listen to
         */
        grab_keys(keys: string[]): void;
        is_modifier(keycode: number, mask: number): boolean;
    }

    namespace Session {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'shutdown-completed': () => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Session extends GObject.Object {
        static $gtype: GObject.GType<Session>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: Session.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Session.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Session.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Session.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Session.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Session.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Session.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Session.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Creates a new GSM_SESSION
         */
        static create_global(): Session;

        // Methods

        cancel_shutdown(): void;
        get_phase(): SessionPhase;
        initiate_shutdown(): void;
        register_client(client: Client, previous_id: string): string;
        /**
         * Sets the name of a running session.
         * @param name name of the session
         */
        set_name(name: string): void;
        start(): void;
    }

    namespace Volume {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Volume extends GObject.Object {
        static $gtype: GObject.GType<Volume>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: Volume.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Volume.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Volume;

        // Signals

        connect<K extends keyof Volume.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Volume.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Volume.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Volume.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Volume.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Volume.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_get_mute(): number;
        vfunc_get_threshold(): number;
        vfunc_get_volume(): number;
        vfunc_set_mute(val: boolean): void;
        vfunc_set_volume(val: number): void;

        // Methods

        get_mute(): boolean;
        get_threshold(): number;
        get_volume(): number;
        mute_toggle(): void;
        set_mute(val: boolean): void;
        set_volume(val: number): void;
    }

    namespace VolumeAlsa {
        // Signal signatures
        interface SignalSignatures extends Volume.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Volume.ConstructorProps {}
    }

    class VolumeAlsa extends Volume {
        static $gtype: GObject.GType<VolumeAlsa>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: VolumeAlsa.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<VolumeAlsa.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](arg0: number): VolumeAlsa;
        // Conflicted with SugarExt.Volume.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof VolumeAlsa.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VolumeAlsa.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof VolumeAlsa.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, VolumeAlsa.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof VolumeAlsa.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<VolumeAlsa.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    type ClientClass = typeof Client;
    abstract class ClientPrivate {
        static $gtype: GObject.GType<ClientPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ClientXSMPClass = typeof ClientXSMP;
    type CursorTrackerClass = typeof CursorTracker;
    class CursorTrackerPrivate {
        static $gtype: GObject.GType<CursorTrackerPrivate>;

        // Fields

        root_window: Gdk.Window;
        cursor_shown: boolean;

        // Constructors

        _init(...args: any[]): void;
    }

    type GestureGrabberClass = typeof GestureGrabber;
    class GestureGrabberPrivate {
        static $gtype: GObject.GType<GestureGrabberPrivate>;

        // Fields

        root_window: Gdk.Window;
        controllers: any[];
        touches: any[];
        cancel_timeout_id: number;

        // Constructors

        _init(...args: any[]): void;
    }

    type GridClass = typeof Grid;
    type KeyGrabberClass = typeof KeyGrabber;
    abstract class KeyGrabberPrivate {
        static $gtype: GObject.GType<KeyGrabberPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SessionClass = typeof Session;
    type VolumeAlsaClass = typeof VolumeAlsa;
    abstract class VolumeAlsaPrivate {
        static $gtype: GObject.GType<VolumeAlsaPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type VolumeClass = typeof Volume;
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

export default SugarExt;

// END
