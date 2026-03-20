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
import type GLib from '@girs/glib-2.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Unity from '@girs/unity-7.0';

export namespace UnityExtras {
    /**
     * UnityExtras-7.0
     */

    /**
     * @param uri
     */
    function show_in_folder(uri: string): globalThis.Promise<void>;
    /**
     * @param uri
     * @param _callback_
     */
    function show_in_folder(uri: string, _callback_: Gio.AsyncReadyCallback<string> | null): void;
    /**
     * @param uri
     * @param _callback_
     */
    function show_in_folder(
        uri: string,
        _callback_?: Gio.AsyncReadyCallback<string> | null,
    ): globalThis.Promise<void> | void;
    /**
     * @param _res_
     */
    function show_in_folder_finish(_res_: Gio.AsyncResult): void;
    /**
     * @param name
     */
    function dbus_name_has_owner(name: string): boolean;
    /**
     * @param name
     * @param scope_creation_cb
     */
    function dbus_own_name(name: string, scope_creation_cb: CreateScopeCallback): Gio.Application | null;
    /**
     * @gir-type Callback
     */
    interface CreateScopeCallback {
        (): void;
    }
    namespace PreviewPlayer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            progress: (arg0: string, arg1: never, arg2: number) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class PreviewPlayer extends GObject.Object {
        static $gtype: GObject.GType<PreviewPlayer>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PreviewPlayer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PreviewPlayer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): PreviewPlayer;

        // Signals

        /** @signal */
        connect<K extends keyof PreviewPlayer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PreviewPlayer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PreviewPlayer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PreviewPlayer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PreviewPlayer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PreviewPlayer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param uri
         */
        play(uri: string): globalThis.Promise<void>;
        /**
         * @param uri
         * @param _callback_
         */
        play(uri: string, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param uri
         * @param _callback_
         */
        play(uri: string, _callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;
        /**
         * @param _res_
         */
        play_finish(_res_: Gio.AsyncResult): void;
        pause(): globalThis.Promise<void>;
        /**
         * @param _callback_
         */
        pause(_callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param _callback_
         */
        pause(_callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;
        /**
         * @param _res_
         */
        pause_finish(_res_: Gio.AsyncResult): void;
        pause_resume(): globalThis.Promise<void>;
        /**
         * @param _callback_
         */
        pause_resume(_callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param _callback_
         */
        pause_resume(_callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;
        /**
         * @param _res_
         */
        pause_resume_finish(_res_: Gio.AsyncResult): void;
        resume(): globalThis.Promise<void>;
        /**
         * @param _callback_
         */
        resume(_callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param _callback_
         */
        resume(_callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;
        /**
         * @param _res_
         */
        resume_finish(_res_: Gio.AsyncResult): void;
        stop(): globalThis.Promise<void>;
        /**
         * @param _callback_
         */
        stop(_callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param _callback_
         */
        stop(_callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;
        /**
         * @param _res_
         */
        stop_finish(_res_: Gio.AsyncResult): void;
        close(): globalThis.Promise<void>;
        /**
         * @param _callback_
         */
        close(_callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param _callback_
         */
        close(_callback_?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<void> | void;
        /**
         * @param _res_
         */
        close_finish(_res_: Gio.AsyncResult): void;
        /**
         * @param uri
         */
        video_properties(uri: string): globalThis.Promise<GLib.HashTable<string, GLib.Variant>>;
        /**
         * @param uri
         * @param _callback_
         */
        video_properties(uri: string, _callback_: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * @param uri
         * @param _callback_
         */
        video_properties(
            uri: string,
            _callback_?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<GLib.HashTable<string, GLib.Variant>> | void;
        /**
         * @param _res_
         */
        video_properties_finish(_res_: Gio.AsyncResult): GLib.HashTable<string, GLib.Variant>;
    }

    /**
     * @gir-type Alias
     */
    type PreviewPlayerClass = typeof PreviewPlayer;
    /**
     * @gir-type Struct
     */
    abstract class PreviewPlayerPrivate {
        static $gtype: GObject.GType<PreviewPlayerPrivate>;
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

export default UnityExtras;

// END
