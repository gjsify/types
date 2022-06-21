// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * UnityExtras-7.0
 */

import type * as Gjs from './Gjs';
import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type Unity from './Unity-7.0';

export namespace UnityExtras {

function show_in_folder(uri: string, _callback_?: Gio.AsyncReadyCallback | null): void
function show_in_folder_finish(_res_: Gio.AsyncResult): void
function dbus_name_has_owner(name: string): boolean
function dbus_own_name(name: string, scope_creation_cb: CreateScopeCallback): Gio.Application | null
interface CreateScopeCallback {
    (): void
}
interface PreviewPlayer_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `progress`
 */
interface PreviewPlayer_ProgressSignalCallback {
    ($obj: PreviewPlayer, uri: string, state: Unity.MusicPreviewTrackState, progress: number): void
}

interface PreviewPlayer {

    // Owm methods of UnityExtras-7.0.UnityExtras.PreviewPlayer

    play(uri: string, _callback_?: Gio.AsyncReadyCallback | null): void
    play_finish(_res_: Gio.AsyncResult): void
    pause(_callback_?: Gio.AsyncReadyCallback | null): void
    pause_finish(_res_: Gio.AsyncResult): void
    pause_resume(_callback_?: Gio.AsyncReadyCallback | null): void
    pause_resume_finish(_res_: Gio.AsyncResult): void
    resume(_callback_?: Gio.AsyncReadyCallback | null): void
    resume_finish(_res_: Gio.AsyncResult): void
    stop(_callback_?: Gio.AsyncReadyCallback | null): void
    stop_finish(_res_: Gio.AsyncResult): void
    close(_callback_?: Gio.AsyncReadyCallback | null): void
    close_finish(_res_: Gio.AsyncResult): void
    video_properties(uri: string, _callback_?: Gio.AsyncReadyCallback | null): void
    video_properties_finish(_res_: Gio.AsyncResult): GLib.HashTable

    // Own signals of UnityExtras-7.0.UnityExtras.PreviewPlayer

    connect(sigName: "progress", callback: PreviewPlayer_ProgressSignalCallback): number
    connect_after(sigName: "progress", callback: PreviewPlayer_ProgressSignalCallback): number
    emit(sigName: "progress", uri: string, state: Unity.MusicPreviewTrackState, progress: number, ...args: any[]): void

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

    constructor(config?: PreviewPlayer_ConstructProps) 
    constructor() 
    static new(): PreviewPlayer
    _init(config?: PreviewPlayer_ConstructProps): void
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

}
export default UnityExtras;