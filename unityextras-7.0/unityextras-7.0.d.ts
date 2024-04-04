/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './unityextras-7.0-ambient.d.ts';

/**
 * UnityExtras-7.0
 */

import type GLib from '@girs/glib-2.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Unity from '@girs/unity-7.0';

export namespace UnityExtras {
    function show_in_folder(uri: string): Promise<void>;
    function show_in_folder(uri: string, _callback_: Gio.AsyncReadyCallback<string>): void;
    function show_in_folder(uri: string, _callback_: Gio.AsyncReadyCallback<string>): Promise<void> | void;
    function show_in_folder_finish(_res_: Gio.AsyncResult): void;
    function dbus_name_has_owner(name: string): boolean;
    function dbus_own_name(name: string, scope_creation_cb: CreateScopeCallback): Gio.Application;
    interface CreateScopeCallback {
        (): void;
    }
    module PreviewPlayer {
        // Signal callback interfaces

        interface Progress {
            (uri: string, state: Unity.MusicPreviewTrackState, progress: number): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class PreviewPlayer extends GObject.Object {
        static $gtype: GObject.GType<PreviewPlayer>;

        // Constructors of UnityExtras.PreviewPlayer

        constructor(properties?: Partial<PreviewPlayer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): PreviewPlayer;

        // Own signals of UnityExtras.PreviewPlayer

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(
            signal: 'progress',
            callback: (_source: this, uri: string, state: Unity.MusicPreviewTrackState, progress: number) => void,
        ): number;
        connect_after(
            signal: 'progress',
            callback: (_source: this, uri: string, state: Unity.MusicPreviewTrackState, progress: number) => void,
        ): number;
        emit(signal: 'progress', uri: string, state: Unity.MusicPreviewTrackState, progress: number): void;

        // Own methods of UnityExtras.PreviewPlayer

        play(uri: string, _callback_: Gio.AsyncReadyCallback<this>): void;
        play_finish(_res_: Gio.AsyncResult): void;
        pause(_callback_: Gio.AsyncReadyCallback<this>): void;
        pause_finish(_res_: Gio.AsyncResult): void;
        pause_resume(_callback_: Gio.AsyncReadyCallback<this>): void;
        pause_resume_finish(_res_: Gio.AsyncResult): void;
        resume(_callback_: Gio.AsyncReadyCallback<this>): void;
        resume_finish(_res_: Gio.AsyncResult): void;
        stop(_callback_: Gio.AsyncReadyCallback<this>): void;
        stop_finish(_res_: Gio.AsyncResult): void;
        close(_callback_: Gio.AsyncReadyCallback<this>): void;
        close_finish(_res_: Gio.AsyncResult): void;
        video_properties(uri: string, _callback_: Gio.AsyncReadyCallback<this>): void;
        video_properties_finish(_res_: Gio.AsyncResult): GLib.HashTable<string, GLib.Variant>;
    }

    type PreviewPlayerClass = typeof PreviewPlayer;
    abstract class PreviewPlayerPrivate {
        static $gtype: GObject.GType<PreviewPlayerPrivate>;

        // Constructors of UnityExtras.PreviewPlayerPrivate

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
