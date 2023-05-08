
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * TrackerControl-2.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

/**
 * Enumeration values used in errors returned by the
 * #TrackerMinerManager API.
 */
export enum MinerManagerError {
    /**
     * The miner in question
     * is not active and can so can not be used.
     */
    NOT_AVAILABLE,
    /**
     * The resource that the
     * miner is handling (for example a file or URI) does not exist.
     */
    NOENT,
}
export module MinerManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `miner-activated`
     */
    export interface MinerActivatedSignalCallback {
        (miner: string | null): void
    }

    /**
     * Signal callback interface for `miner-deactivated`
     */
    export interface MinerDeactivatedSignalCallback {
        (miner: string | null): void
    }

    /**
     * Signal callback interface for `miner-paused`
     */
    export interface MinerPausedSignalCallback {
        (miner: string | null): void
    }

    /**
     * Signal callback interface for `miner-progress`
     */
    export interface MinerProgressSignalCallback {
        (miner: string | null, status: string | null, progress: number, remainingTime: number): void
    }

    /**
     * Signal callback interface for `miner-resumed`
     */
    export interface MinerResumedSignalCallback {
        (miner: string | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of TrackerControl-2.0.TrackerControl.MinerManager

        autoStart?: boolean | null
        domainOntology?: string | null
    }

}

export interface MinerManager extends Gio.Initable {

    // Own properties of TrackerControl-2.0.TrackerControl.MinerManager

    readonly autoStart: boolean
    readonly domainOntology: string | null
    __gtype__: number

    // Own fields of TrackerControl-2.0.TrackerControl.MinerManager

    parentInstance: GObject.Object

    // Owm methods of TrackerControl-2.0.TrackerControl.MinerManager

    /**
     * Returns a list of references for all available miners. Available
     * miners are miners which may or may not be running in a process at
     * the current time.
     * @returns a #GSList which must be freed with g_slist_free() and all contained data with g_free(). Otherwise %NULL is returned if there are no miners.
     */
    getAvailable(): string[] | null
    /**
     * Returns the description for the given `miner`.
     * @param miner miner reference
     * @returns A string which should not be freed or %NULL if none is specified.
     */
    getDescription(miner: string | null): string | null
    /**
     * Returns a translated display name for `miner`.
     * @param miner miner reference
     * @returns A string which should not be freed or %NULL.
     */
    getDisplayName(miner: string | null): string | null
    /**
     * Returns a list of references for all active miners. Active miners
     * are miners which are running within a process.
     * @returns a #GSList which must be freed with g_slist_free() and all contained data with g_free(). Otherwise %NULL is returned if there are no miners.
     */
    getRunning(): string[] | null
    /**
     * Returns the current status, progress and remaining time for `miner`.
     * `remaining_time` will be 0 if not possible to compute it yet,
     * and less than zero if it is not applicable.
     * @param miner miner reference
     * @returns %TRUE if the status could be retrieved successfully, otherwise %FALSE
     */
    getStatus(miner: string | null): [ /* returnType */ boolean, /* status */ string | null, /* progress */ number, /* remainingTime */ number ]
    /**
     * Tells the filesystem miner to start indexing the `file`.
     * 
     * On failure `error` will be set.
     * @param file a URL valid in GIO of a file to give to the miner for processing
     * @param cancellable a #GCancellable, or %NULL
     * @returns %TRUE on success, otherwise %FALSE.
     */
    indexFile(file: Gio.File, cancellable: Gio.Cancellable | null): boolean
    /**
     * Tells the filesystem miner to start indexing the `file`. Once the message has been sent,
     * `callback` will be called. You can then call tracker_miner_manager_index_file_finish()
     * to get the result.
     * @param file a URL valid in GIO of a file to give to the miner for processing
     * @param cancellable a #GCancellable, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    indexFileAsync(file: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a request to index a file. See tracker_miner_manager_index_file_async()
     * 
     * On failure `error` will be set.
     * @param result a #GAsyncResult
     * @returns %TRUE on success, otherwise %FALSE.
     */
    indexFileFinish(result: Gio.AsyncResult): boolean
    /**
     * This function operates exactly the same way as
     * tracker_miner_manager_index_file() with the exception that if the
     * calling process dies, the indexing is cancelled. This API is useful
     * for cases where the calling process wants to tie the indexing
     * operation closely to its own lifetime.
     * 
     * On failure `error` will be set.
     * @param file a URL valid in GIO of a file to give to the miner for processing
     * @param cancellable a #GCancellable, or %NULL
     * @returns %TRUE on success, otherwise %FALSE.
     */
    indexFileForProcess(file: Gio.File, cancellable: Gio.Cancellable | null): boolean
    /**
     * This function operates exactly the same way as
     * tracker_miner_manager_index_file() with the exception that if the
     * calling process dies, the indexing is cancelled. This API is useful
     * for cases where the calling process wants to tie the indexing
     * operation closely to its own lifetime.
     * 
     * When the operation is finished, `callback` will be called. You can
     * then call tracker_miner_manager_index_file_for_process_finish() to
     * get the result of the operation.
     * @param file a URL valid in GIO of a file to give to the miner for processing
     * @param cancellable a #GCancellable, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    indexFileForProcessAsync(file: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a request to index a file. See tracker_miner_manager_index_file_for_process_async()
     * 
     * On failure `error` will be set.
     * @param result a #GAsyncResult
     * @returns %TRUE on success, otherwise %FALSE.
     */
    indexFileForProcessFinish(result: Gio.AsyncResult): boolean
    /**
     * Returns the miner's current activity.
     * @param miner miner reference
     * @returns %TRUE if the @miner is active, otherwise %FALSE.
     */
    isActive(miner: string | null): boolean
    /**
     * This function either returns %FALSE if the miner is not paused,
     * or returns %TRUE and fills in `applications` and `reasons` with
     * the pause reasons and the applications that asked for it. Both
     * arrays will have the same lengh, and will be sorted so the
     * application/pause reason pairs have the same index.
     * @param miner miner reference
     * @returns %TRUE if @miner is paused, otherwise %FALSE.
     */
    isPaused(miner: string | null): [ /* returnType */ boolean, /* applications */ string[], /* reasons */ string[] ]
    /**
     * Asks `miner` to pause. a miner could be paused by
     * several reasons, and its activity won't be resumed
     * until all pause requests have been resumed.
     * @param miner miner reference
     * @param reason reason to pause
     * @returns %TRUE if the miner was paused successfully, otherwise %FALSE.
     */
    pause(miner: string | null, reason: string | null): [ /* returnType */ boolean, /* cookie */ number ]
    /**
     * This function operates exactly the same way as
     * tracker_miner_manager_pause() with the exception that if the calling
     * process dies, the pause is resumed. This API is useful for cases
     * where the calling process has a risk of crashing without resuming
     * the pause.
     * 
     * NOTE: If you call g_object_unref() on the `manager` before you
     * intend to resume the pause and it finalizes, it will automatically
     * resume.
     * @param miner miner reference
     * @param reason reason to pause
     * @returns %TRUE if the miner was paused successfully, otherwise %FALSE.
     */
    pauseForProcess(miner: string | null, reason: string | null): [ /* returnType */ boolean, /* cookie */ number ]
    /**
     * Tells the filesystem miner to reindex any file with a mimetype in
     * the `mimetypes` list.
     * 
     * On failure `error` will be set.
     * @param mimetypes an array of mimetypes (E.G. "text/plain"). All items with a mimetype in that list will be reindexed.
     * @returns %TRUE on success, otherwise %FALSE.
     */
    reindexByMimetype(mimetypes: string[]): boolean
    /**
     * Tells `miner` to resume activity. The miner won't actually resume
     * operations until all pause requests have been resumed.
     * @param miner miner reference
     * @param cookie pause cookie
     * @returns %TRUE if the miner was successfully resumed, otherwise %FALSE.
     */
    resume(miner: string | null, cookie: number): boolean

    // Own virtual methods of TrackerControl-2.0.TrackerControl.MinerManager

    minerActivated(minerName: string | null): void
    minerDeactivated(minerName: string | null): void
    minerPaused(minerName: string | null): void
    minerProgress(minerName: string | null, status: string | null, progress: number): void
    minerResumed(minerName: string | null): void

    // Own signals of TrackerControl-2.0.TrackerControl.MinerManager

    connect(sigName: "miner-activated", callback: MinerManager.MinerActivatedSignalCallback): number
    on(sigName: "miner-activated", callback: MinerManager.MinerActivatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "miner-activated", callback: MinerManager.MinerActivatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "miner-activated", callback: MinerManager.MinerActivatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "miner-activated", ...args: any[]): void
    connect(sigName: "miner-deactivated", callback: MinerManager.MinerDeactivatedSignalCallback): number
    on(sigName: "miner-deactivated", callback: MinerManager.MinerDeactivatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "miner-deactivated", callback: MinerManager.MinerDeactivatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "miner-deactivated", callback: MinerManager.MinerDeactivatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "miner-deactivated", ...args: any[]): void
    connect(sigName: "miner-paused", callback: MinerManager.MinerPausedSignalCallback): number
    on(sigName: "miner-paused", callback: MinerManager.MinerPausedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "miner-paused", callback: MinerManager.MinerPausedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "miner-paused", callback: MinerManager.MinerPausedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "miner-paused", ...args: any[]): void
    connect(sigName: "miner-progress", callback: MinerManager.MinerProgressSignalCallback): number
    on(sigName: "miner-progress", callback: MinerManager.MinerProgressSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "miner-progress", callback: MinerManager.MinerProgressSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "miner-progress", callback: MinerManager.MinerProgressSignalCallback): NodeJS.EventEmitter
    emit(sigName: "miner-progress", status: string | null, progress: number, remainingTime: number, ...args: any[]): void
    connect(sigName: "miner-resumed", callback: MinerManager.MinerResumedSignalCallback): number
    on(sigName: "miner-resumed", callback: MinerManager.MinerResumedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "miner-resumed", callback: MinerManager.MinerResumedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "miner-resumed", callback: MinerManager.MinerResumedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "miner-resumed", ...args: any[]): void

    // Class property signals of TrackerControl-2.0.TrackerControl.MinerManager

    connect(sigName: "notify::auto-start", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-start", ...args: any[]): void
    connect(sigName: "notify::domain-ontology", callback: (...args: any[]) => void): number
    on(sigName: "notify::domain-ontology", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::domain-ontology", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::domain-ontology", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::domain-ontology", ...args: any[]): void
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
}

/**
 * Object to query and control miners.
 * @class 
 */
export class MinerManager extends GObject.Object {

    // Own properties of TrackerControl-2.0.TrackerControl.MinerManager

    static name: string

    // Constructors of TrackerControl-2.0.TrackerControl.MinerManager

    constructor(config?: MinerManager.ConstructorProperties) 
    /**
     * Creates a new #TrackerMinerManager instance.
     * 
     * Note: Auto-starting miners when querying status will be enabled.
     * @constructor 
     * @returns a #TrackerMinerManager or #NULL if an error happened.
     */
    constructor() 
    /**
     * Creates a new #TrackerMinerManager instance.
     * 
     * Note: Auto-starting miners when querying status will be enabled.
     * @constructor 
     * @returns a #TrackerMinerManager or #NULL if an error happened.
     */
    static new(): MinerManager
    /**
     * Creates a new #TrackerMinerManager.
     * @constructor 
     * @param autoStart Flag to disable auto-starting the miners when querying status
     * @returns a #TrackerMinerManager. On error, #NULL is returned and @error is set accordingly.
     */
    static newFull(autoStart: boolean): MinerManager
    _init(config?: MinerManager.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export interface MinerManagerClass {

    // Own fields of TrackerControl-2.0.TrackerControl.MinerManagerClass

    parentClass: GObject.ObjectClass
    minerProgress: (manager: MinerManager, minerName: string | null, status: string | null, progress: number) => void
    minerPaused: (manager: MinerManager, minerName: string | null) => void
    minerResumed: (manager: MinerManager, minerName: string | null) => void
    minerActivated: (manager: MinerManager, minerName: string | null) => void
    minerDeactivated: (manager: MinerManager, minerName: string | null) => void
}

export abstract class MinerManagerClass {

    // Own properties of TrackerControl-2.0.TrackerControl.MinerManagerClass

    static name: string
}
