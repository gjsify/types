
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

function show_in_folder<Z = unknown>(uri: string | null, _callback_?: Gio.AsyncReadyCallback<Z> | null): void
function show_in_folder_finish(_res_: Gio.AsyncResult): void
function dbus_name_has_owner(name: string | null): boolean
function dbus_own_name(name: string | null, scope_creation_cb: CreateScopeCallback): Gio.Application | null
interface CreateScopeCallback {
    (): void
}
module PreviewPlayer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `progress`
     */
    interface ProgressSignalCallback {
        ($obj: PreviewPlayer, uri: string | null, state: Unity.MusicPreviewTrackState, progress: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface PreviewPlayer {

    // Owm methods of UnityExtras-7.0.UnityExtras.PreviewPlayer

    play(uri: string | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    play_finish(_res_: Gio.AsyncResult): void
    pause(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    pause_finish(_res_: Gio.AsyncResult): void
    pause_resume(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    pause_resume_finish(_res_: Gio.AsyncResult): void
    resume(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    resume_finish(_res_: Gio.AsyncResult): void
    stop(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    stop_finish(_res_: Gio.AsyncResult): void
    close(_callback_?: Gio.AsyncReadyCallback<this> | null): void
    close_finish(_res_: Gio.AsyncResult): void
    video_properties(uri: string | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void
    video_properties_finish(_res_: Gio.AsyncResult): GLib.HashTable

    // Own signals of UnityExtras-7.0.UnityExtras.PreviewPlayer

    connect(sigName: "progress", callback: PreviewPlayer.ProgressSignalCallback): number
    connect_after(sigName: "progress", callback: PreviewPlayer.ProgressSignalCallback): number
    emit(sigName: "progress", uri: string | null, state: Unity.MusicPreviewTrackState, progress: number, ...args: any[]): void

    // Class property signals of UnityExtras-7.0.UnityExtras.PreviewPlayer

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PreviewPlayer extends GObject.Object {

    // Own properties of UnityExtras-7.0.UnityExtras.PreviewPlayer

    static name: string
    static $gtype: GObject.GType<PreviewPlayer>

    // Constructors of UnityExtras-7.0.UnityExtras.PreviewPlayer

    constructor(config?: PreviewPlayer.ConstructorProperties) 
    constructor() 
    static new(): PreviewPlayer
    _init(config?: PreviewPlayer.ConstructorProperties): void
}

interface PreviewPlayerClass {
}

abstract class PreviewPlayerClass {

    // Own properties of UnityExtras-7.0.UnityExtras.PreviewPlayerClass

    static name: string
}

interface PreviewPlayerPrivate {
}

class PreviewPlayerPrivate {

    // Own properties of UnityExtras-7.0.UnityExtras.PreviewPlayerPrivate

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default UnityExtras;
// END