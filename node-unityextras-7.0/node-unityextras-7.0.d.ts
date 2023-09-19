
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-unityextras-7.0-import.d.ts';
    
/**
 * UnityExtras-7.0
 */

import type GLib from '@girs/node-glib-2.0';
import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type Unity from '@girs/node-unity-7.0';

export namespace UnityExtras {

function showInFolder(uri: string | null, callback?: Gio.AsyncReadyCallback | null): void
function showInFolderFinish(res: Gio.AsyncResult): void
function dbusNameHasOwner(name: string | null): boolean
function dbusOwnName(name: string | null, scopeCreationCb: CreateScopeCallback): Gio.Application | null
interface CreateScopeCallback {
    (): void
}
module PreviewPlayer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `progress`
     */
    interface ProgressSignalCallback {
        (uri: string | null, state: Unity.MusicPreviewTrackState, progress: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface PreviewPlayer {

    // Own properties of UnityExtras-7.0.UnityExtras.PreviewPlayer

    __gtype__: number

    // Owm methods of UnityExtras-7.0.UnityExtras.PreviewPlayer

    play(uri: string | null, callback?: Gio.AsyncReadyCallback | null): void
    playFinish(res: Gio.AsyncResult): void
    pause(callback?: Gio.AsyncReadyCallback | null): void
    pauseFinish(res: Gio.AsyncResult): void
    pauseResume(callback?: Gio.AsyncReadyCallback | null): void
    pauseResumeFinish(res: Gio.AsyncResult): void
    resume(callback?: Gio.AsyncReadyCallback | null): void
    resumeFinish(res: Gio.AsyncResult): void
    stop(callback?: Gio.AsyncReadyCallback | null): void
    stopFinish(res: Gio.AsyncResult): void
    close(callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(res: Gio.AsyncResult): void
    videoProperties(uri: string | null, callback?: Gio.AsyncReadyCallback | null): void
    videoPropertiesFinish(res: Gio.AsyncResult): GLib.HashTable

    // Own signals of UnityExtras-7.0.UnityExtras.PreviewPlayer

    connect(sigName: "progress", callback: PreviewPlayer.ProgressSignalCallback): number
    on(sigName: "progress", callback: PreviewPlayer.ProgressSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress", callback: PreviewPlayer.ProgressSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress", callback: PreviewPlayer.ProgressSignalCallback): NodeJS.EventEmitter
    emit(sigName: "progress", state: Unity.MusicPreviewTrackState, progress: number, ...args: any[]): void

    // Class property signals of UnityExtras-7.0.UnityExtras.PreviewPlayer

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class PreviewPlayer extends GObject.Object {

    // Own properties of UnityExtras-7.0.UnityExtras.PreviewPlayer

    static name: string

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

}

export default UnityExtras;
// END