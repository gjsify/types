// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * UnityExtras-7.0
 */

import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type Unity from './Unity-7.0';

export namespace UnityExtras {

function showInFolder(uri: string, callback?: Gio.AsyncReadyCallback | null): void
function showInFolderFinish(res: Gio.AsyncResult): void
function dbusNameHasOwner(name: string): boolean
function dbusOwnName(name: string, scopeCreationCb: CreateScopeCallback): Gio.Application | null
interface CreateScopeCallback {
    (): void
}
interface PreviewPlayer_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `progress`
 */
interface PreviewPlayer_ProgressSignalCallback {
    (uri: string, state: Unity.MusicPreviewTrackState, progress: number): void
}

interface PreviewPlayer {

    // Owm methods of UnityExtras-7.0.UnityExtras.PreviewPlayer

    play(uri: string, callback?: Gio.AsyncReadyCallback | null): void
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
    videoProperties(uri: string, callback?: Gio.AsyncReadyCallback | null): void
    videoPropertiesFinish(res: Gio.AsyncResult): GLib.HashTable

    // Own signals of UnityExtras-7.0.UnityExtras.PreviewPlayer

    connect(sigName: "progress", callback: PreviewPlayer_ProgressSignalCallback): number
    on(sigName: "progress", callback: PreviewPlayer_ProgressSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress", callback: PreviewPlayer_ProgressSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress", callback: PreviewPlayer_ProgressSignalCallback): NodeJS.EventEmitter
    emit(sigName: "progress", state: Unity.MusicPreviewTrackState, progress: number, ...args: any[]): void

    // Class property signals of UnityExtras-7.0.UnityExtras.PreviewPlayer

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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