// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * TrackerControl-1.0
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace TrackerControl {

/**
 * Enumeration values used in errors returned by the
 * #TrackerMinerManager API.
 */
enum MinerManagerError {
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
interface MinerManager_ConstructProps extends Gio.Initable_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of TrackerControl-1.0.TrackerControl.MinerManager

    autoStart?: boolean | null
}

/**
 * Signal callback interface for `miner-activated`
 */
interface MinerManager_MinerActivatedSignalCallback {
    (miner: string): void
}

/**
 * Signal callback interface for `miner-deactivated`
 */
interface MinerManager_MinerDeactivatedSignalCallback {
    (miner: string): void
}

/**
 * Signal callback interface for `miner-paused`
 */
interface MinerManager_MinerPausedSignalCallback {
    (miner: string): void
}

/**
 * Signal callback interface for `miner-progress`
 */
interface MinerManager_MinerProgressSignalCallback {
    (miner: string, status: string, progress: number, remainingTime: number): void
}

/**
 * Signal callback interface for `miner-resumed`
 */
interface MinerManager_MinerResumedSignalCallback {
    (miner: string): void
}

interface MinerManager extends Gio.Initable {

    // Own properties of TrackerControl-1.0.TrackerControl.MinerManager

    readonly autoStart: boolean

    // Own fields of TrackerControl-1.0.TrackerControl.MinerManager

    parentInstance: GObject.Object

    // Owm methods of TrackerControl-1.0.TrackerControl.MinerManager

    /**
     * Returns a list of references for all available miners. Available
     * miners are miners which may or may not be running in a process at
     * the current time.
     */
    getAvailable(): string[] | null
    /**
     * Returns the description for the given `miner`.
     * @param miner miner reference
     */
    getDescription(miner: string): string
    /**
     * Returns a translated display name for `miner`.
     * @param miner miner reference
     */
    getDisplayName(miner: string): string
    /**
     * Returns a list of references for all active miners. Active miners
     * are miners which are running within a process.
     */
    getRunning(): string[] | null
    /**
     * Returns the current status, progress and remaining time for `miner`.
     * `remaining_time` will be 0 if not possible to compute it yet,
     * and less than zero if it is not applicable.
     * @param miner miner reference
     */
    getStatus(miner: string): [ /* returnType */ boolean, /* status */ string, /* progress */ number, /* remainingTime */ number ]
    /**
     * Tells the `miner` to ignore any events for the next `urls`. This is
     * used for cases where a file is updated by Tracker by the
     * tracker-writeback service. This API is used to avoid signalling up
     * the stack the changes to `urls`.
     * @param miner miner reference
     * @param urls the subjects to ignore the next updates of
     */
    ignoreNextUpdate(miner: string, urls: string): boolean
    /**
     * Tells the filesystem miner to start indexing the `file`.
     * 
     * On failure `error` will be set.
     * @param file a URL valid in GIO of a file to give to the miner for processing
     */
    indexFile(file: Gio.File): boolean
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
     */
    indexFileForProcessFinish(result: Gio.AsyncResult): boolean
    /**
     * Returns the miner's current activity.
     * @param miner miner reference
     */
    isActive(miner: string): boolean
    /**
     * This function either returns %FALSE if the miner is not paused,
     * or returns %TRUE and fills in `applications` and `reasons` with
     * the pause reasons and the applications that asked for it. Both
     * arrays will have the same lengh, and will be sorted so the
     * application/pause reason pairs have the same index.
     * @param miner miner reference
     */
    isPaused(miner: string): [ /* returnType */ boolean, /* applications */ string[], /* reasons */ string[] ]
    /**
     * Asks `miner` to pause. a miner could be paused by
     * several reasons, and its activity won't be resumed
     * until all pause requests have been resumed.
     * @param miner miner reference
     * @param reason reason to pause
     */
    pause(miner: string, reason: string): [ /* returnType */ boolean, /* cookie */ number ]
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
     */
    pauseForProcess(miner: string, reason: string): [ /* returnType */ boolean, /* cookie */ number ]
    /**
     * Tells the filesystem miner to reindex any file with a mimetype in
     * the `mimetypes` list.
     * 
     * On failure `error` will be set.
     * @param mimetypes an array of mimetypes (E.G. "text/plain"). All items with a mimetype in that list will be reindexed.
     */
    reindexByMimetype(mimetypes: string[]): boolean
    /**
     * Tells `miner` to resume activity. The miner won't actually resume
     * operations until all pause requests have been resumed.
     * @param miner miner reference
     * @param cookie pause cookie
     */
    resume(miner: string, cookie: number): boolean

    // Own signals of TrackerControl-1.0.TrackerControl.MinerManager

    connect(sigName: "miner-activated", callback: MinerManager_MinerActivatedSignalCallback): number
    on(sigName: "miner-activated", callback: MinerManager_MinerActivatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "miner-activated", callback: MinerManager_MinerActivatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "miner-activated", callback: MinerManager_MinerActivatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "miner-activated", ...args: any[]): void
    connect(sigName: "miner-deactivated", callback: MinerManager_MinerDeactivatedSignalCallback): number
    on(sigName: "miner-deactivated", callback: MinerManager_MinerDeactivatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "miner-deactivated", callback: MinerManager_MinerDeactivatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "miner-deactivated", callback: MinerManager_MinerDeactivatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "miner-deactivated", ...args: any[]): void
    connect(sigName: "miner-paused", callback: MinerManager_MinerPausedSignalCallback): number
    on(sigName: "miner-paused", callback: MinerManager_MinerPausedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "miner-paused", callback: MinerManager_MinerPausedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "miner-paused", callback: MinerManager_MinerPausedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "miner-paused", ...args: any[]): void
    connect(sigName: "miner-progress", callback: MinerManager_MinerProgressSignalCallback): number
    on(sigName: "miner-progress", callback: MinerManager_MinerProgressSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "miner-progress", callback: MinerManager_MinerProgressSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "miner-progress", callback: MinerManager_MinerProgressSignalCallback): NodeJS.EventEmitter
    emit(sigName: "miner-progress", status: string, progress: number, remainingTime: number, ...args: any[]): void
    connect(sigName: "miner-resumed", callback: MinerManager_MinerResumedSignalCallback): number
    on(sigName: "miner-resumed", callback: MinerManager_MinerResumedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "miner-resumed", callback: MinerManager_MinerResumedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "miner-resumed", callback: MinerManager_MinerResumedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "miner-resumed", ...args: any[]): void

    // Class property signals of TrackerControl-1.0.TrackerControl.MinerManager

    connect(sigName: "notify::auto-start", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-start", ...args: any[]): void
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
class MinerManager extends GObject.Object {

    // Own properties of TrackerControl-1.0.TrackerControl.MinerManager

    static name: string
    static $gtype: GObject.GType<MinerManager>

    // Constructors of TrackerControl-1.0.TrackerControl.MinerManager

    constructor(config?: MinerManager_ConstructProps) 
    /**
     * Creates a new #TrackerMinerManager instance.
     * 
     * Note: Auto-starting miners when querying status will be enabled.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #TrackerMinerManager instance.
     * 
     * Note: Auto-starting miners when querying status will be enabled.
     * @constructor 
     */
    static new(): MinerManager
    /**
     * Creates a new #TrackerMinerManager.
     * @constructor 
     * @param autoStart Flag to disable auto-starting the miners when querying status
     */
    static newFull(autoStart: boolean): MinerManager
    _init(config?: MinerManager_ConstructProps): void
    static errorQuark(): GLib.Quark
}

interface MinerManagerClass {

    // Own fields of TrackerControl-1.0.TrackerControl.MinerManagerClass

    parentClass: GObject.ObjectClass
    minerProgress: (manager: MinerManager, minerName: string, status: string, progress: number) => void
    minerPaused: (manager: MinerManager, minerName: string) => void
    minerResumed: (manager: MinerManager, minerName: string) => void
    minerActivated: (manager: MinerManager, minerName: string) => void
    minerDeactivated: (manager: MinerManager, minerName: string) => void
}

abstract class MinerManagerClass {

    // Own properties of TrackerControl-1.0.TrackerControl.MinerManagerClass

    static name: string
}

}
export default TrackerControl;