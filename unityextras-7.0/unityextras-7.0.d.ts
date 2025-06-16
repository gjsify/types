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

    function show_in_folder(uri: string): Promise<void>;
    function show_in_folder(uri: string, _callback_: Gio.AsyncReadyCallback<string>): void;
    function show_in_folder(uri: string, _callback_: Gio.AsyncReadyCallback<string>): Promise<void> | void;
    function show_in_folder_finish(_res_: Gio.AsyncResult): void;
    function dbus_name_has_owner(name: string): boolean;
    function dbus_own_name(name: string, scope_creation_cb: CreateScopeCallback): Gio.Application;
    interface CreateScopeCallback {
        (): void;
    }
    namespace PreviewPlayer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            progress: (arg0: string, arg1: Unity.MusicPreviewTrackState, arg2: number) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class PreviewPlayer extends GObject.Object {
        static $gtype: GObject.GType<PreviewPlayer>;
        /**
         * Compile-time signal type information.
         *
         * This static property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        static $signals: PreviewPlayer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PreviewPlayer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): PreviewPlayer;

        // Signals

        connect<K extends keyof PreviewPlayer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PreviewPlayer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PreviewPlayer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PreviewPlayer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PreviewPlayer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PreviewPlayer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        play(uri: string): Promise<void>;
        play(uri: string, _callback_: Gio.AsyncReadyCallback<this>): void;
        play(uri: string, _callback_?: Gio.AsyncReadyCallback<this>): Promise<void> | void;
        play_finish(_res_: Gio.AsyncResult): void;
        pause(): Promise<void>;
        pause(_callback_: Gio.AsyncReadyCallback<this>): void;
        pause(_callback_?: Gio.AsyncReadyCallback<this>): Promise<void> | void;
        pause_finish(_res_: Gio.AsyncResult): void;
        pause_resume(): Promise<void>;
        pause_resume(_callback_: Gio.AsyncReadyCallback<this>): void;
        pause_resume(_callback_?: Gio.AsyncReadyCallback<this>): Promise<void> | void;
        pause_resume_finish(_res_: Gio.AsyncResult): void;
        resume(): Promise<void>;
        resume(_callback_: Gio.AsyncReadyCallback<this>): void;
        resume(_callback_?: Gio.AsyncReadyCallback<this>): Promise<void> | void;
        resume_finish(_res_: Gio.AsyncResult): void;
        stop(): Promise<void>;
        stop(_callback_: Gio.AsyncReadyCallback<this>): void;
        stop(_callback_?: Gio.AsyncReadyCallback<this>): Promise<void> | void;
        stop_finish(_res_: Gio.AsyncResult): void;
        close(): Promise<void>;
        close(_callback_: Gio.AsyncReadyCallback<this>): void;
        close(_callback_?: Gio.AsyncReadyCallback<this>): Promise<void> | void;
        close_finish(_res_: Gio.AsyncResult): void;
        video_properties(uri: string): Promise<GLib.HashTable<string, GLib.Variant>>;
        video_properties(uri: string, _callback_: Gio.AsyncReadyCallback<this>): void;
        video_properties(
            uri: string,
            _callback_?: Gio.AsyncReadyCallback<this>,
        ): Promise<GLib.HashTable<string, GLib.Variant>> | void;
        video_properties_finish(_res_: Gio.AsyncResult): GLib.HashTable<string, GLib.Variant>;
    }

    type PreviewPlayerClass = typeof PreviewPlayer;
    abstract class PreviewPlayerPrivate {
        static $gtype: GObject.GType<PreviewPlayerPrivate>;

        // Constructors

        _init(...args: any[]): void;
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
