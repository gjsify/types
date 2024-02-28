/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './unityextras-7.0-ambient.d.ts';
import './unityextras-7.0-import.d.ts';
/**
 * UnityExtras-7.0
 */

import type GLib from '@girs/glib-2.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type Unity from '@girs/unity-7.0';

export namespace UnityExtras {
    function show_in_folder(uri: string, _callback_: Gio.AsyncReadyCallback<string>): void;
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
    }

    class PreviewPlayer extends GObject.Object {
        // Constructors of UnityExtras-7.0.PreviewPlayer

        static ['new'](): PreviewPlayer;

        // Owm methods of UnityExtras-7.0.PreviewPlayer

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

    class PreviewPlayerClass {}

    class PreviewPlayerPrivate {}

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
