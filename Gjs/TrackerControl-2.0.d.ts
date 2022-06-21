// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * TrackerControl-2.0
 */

import type * as Gjs from './Gjs';
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

    // Own constructor properties of TrackerControl-2.0.TrackerControl.MinerManager

    auto_start?: boolean | null
    domain_ontology?: string | null
}

/**
 * Signal callback interface for `miner-activated`
 */
interface MinerManager_MinerActivatedSignalCallback {
    ($obj: MinerManager, miner: string): void
}

/**
 * Signal callback interface for `miner-deactivated`
 */
interface MinerManager_MinerDeactivatedSignalCallback {
    ($obj: MinerManager, miner: string): void
}

/**
 * Signal callback interface for `miner-paused`
 */
interface MinerManager_MinerPausedSignalCallback {
    ($obj: MinerManager, miner: string): void
}

/**
 * Signal callback interface for `miner-progress`
 */
interface MinerManager_MinerProgressSignalCallback {
    ($obj: MinerManager, miner: string, status: string, progress: number, remaining_time: number): void
}

/**
 * Signal callback interface for `miner-resumed`
 */
interface MinerManager_MinerResumedSignalCallback {
    ($obj: MinerManager, miner: string): void
}

interface MinerManager extends Gio.Initable {

    // Own properties of TrackerControl-2.0.TrackerControl.MinerManager

    readonly auto_start: boolean
    readonly domain_ontology: string

    // Own fields of TrackerControl-2.0.TrackerControl.MinerManager

    parent_instance: GObject.Object

    // Owm methods of TrackerControl-2.0.TrackerControl.MinerManager

    /**
     * Returns a list of references for all available miners. Available
     * miners are miners which may or may not be running in a process at
     * the current time.
     */
    get_available(): string[] | null
    /**
     * Returns the description for the given `miner`.
     * @param miner miner reference
     */
    get_description(miner: string): string
    /**
     * Returns a translated display name for `miner`.
     * @param miner miner reference
     */
    get_display_name(miner: string): string
    /**
     * Returns a list of references for all active miners. Active miners
     * are miners which are running within a process.
     */
    get_running(): string[] | null
    /**
     * Returns the current status, progress and remaining time for `miner`.
     * `remaining_time` will be 0 if not possible to compute it yet,
     * and less than zero if it is not applicable.
     * @param miner miner reference
     */
    get_status(miner: string): [ /* returnType */ boolean, /* status */ string, /* progress */ number, /* remaining_time */ number ]
    /**
     * Tells the filesystem miner to start indexing the `file`.
     * 
     * On failure `error` will be set.
     * @param file a URL valid in GIO of a file to give to the miner for processing
     * @param cancellable a #GCancellable, or %NULL
     */
    index_file(file: Gio.File, cancellable: Gio.Cancellable | null): boolean
    /**
     * Tells the filesystem miner to start indexing the `file`. Once the message has been sent,
     * `callback` will be called. You can then call tracker_miner_manager_index_file_finish()
     * to get the result.
     * @param file a URL valid in GIO of a file to give to the miner for processing
     * @param cancellable a #GCancellable, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    index_file_async(file: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a request to index a file. See tracker_miner_manager_index_file_async()
     * 
     * On failure `error` will be set.
     * @param result a #GAsyncResult
     */
    index_file_finish(result: Gio.AsyncResult): boolean
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
    index_file_for_process(file: Gio.File, cancellable: Gio.Cancellable | null): boolean
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
    index_file_for_process_async(file: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a request to index a file. See tracker_miner_manager_index_file_for_process_async()
     * 
     * On failure `error` will be set.
     * @param result a #GAsyncResult
     */
    index_file_for_process_finish(result: Gio.AsyncResult): boolean
    /**
     * Returns the miner's current activity.
     * @param miner miner reference
     */
    is_active(miner: string): boolean
    /**
     * This function either returns %FALSE if the miner is not paused,
     * or returns %TRUE and fills in `applications` and `reasons` with
     * the pause reasons and the applications that asked for it. Both
     * arrays will have the same lengh, and will be sorted so the
     * application/pause reason pairs have the same index.
     * @param miner miner reference
     */
    is_paused(miner: string): [ /* returnType */ boolean, /* applications */ string[], /* reasons */ string[] ]
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
    pause_for_process(miner: string, reason: string): [ /* returnType */ boolean, /* cookie */ number ]
    /**
     * Tells the filesystem miner to reindex any file with a mimetype in
     * the `mimetypes` list.
     * 
     * On failure `error` will be set.
     * @param mimetypes an array of mimetypes (E.G. "text/plain"). All items with a mimetype in that list will be reindexed.
     */
    reindex_by_mimetype(mimetypes: string[]): boolean
    /**
     * Tells `miner` to resume activity. The miner won't actually resume
     * operations until all pause requests have been resumed.
     * @param miner miner reference
     * @param cookie pause cookie
     */
    resume(miner: string, cookie: number): boolean

    // Own virtual methods of TrackerControl-2.0.TrackerControl.MinerManager

    vfunc_miner_activated(miner_name: string): void
    vfunc_miner_deactivated(miner_name: string): void
    vfunc_miner_paused(miner_name: string): void
    vfunc_miner_progress(miner_name: string, status: string, progress: number): void
    vfunc_miner_resumed(miner_name: string): void

    // Own signals of TrackerControl-2.0.TrackerControl.MinerManager

    connect(sigName: "miner-activated", callback: MinerManager_MinerActivatedSignalCallback): number
    connect_after(sigName: "miner-activated", callback: MinerManager_MinerActivatedSignalCallback): number
    emit(sigName: "miner-activated", miner: string, ...args: any[]): void
    connect(sigName: "miner-deactivated", callback: MinerManager_MinerDeactivatedSignalCallback): number
    connect_after(sigName: "miner-deactivated", callback: MinerManager_MinerDeactivatedSignalCallback): number
    emit(sigName: "miner-deactivated", miner: string, ...args: any[]): void
    connect(sigName: "miner-paused", callback: MinerManager_MinerPausedSignalCallback): number
    connect_after(sigName: "miner-paused", callback: MinerManager_MinerPausedSignalCallback): number
    emit(sigName: "miner-paused", miner: string, ...args: any[]): void
    connect(sigName: "miner-progress", callback: MinerManager_MinerProgressSignalCallback): number
    connect_after(sigName: "miner-progress", callback: MinerManager_MinerProgressSignalCallback): number
    emit(sigName: "miner-progress", miner: string, status: string, progress: number, remaining_time: number, ...args: any[]): void
    connect(sigName: "miner-resumed", callback: MinerManager_MinerResumedSignalCallback): number
    connect_after(sigName: "miner-resumed", callback: MinerManager_MinerResumedSignalCallback): number
    emit(sigName: "miner-resumed", miner: string, ...args: any[]): void

    // Class property signals of TrackerControl-2.0.TrackerControl.MinerManager

    connect(sigName: "notify::auto-start", callback: (($obj: MinerManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-start", callback: (($obj: MinerManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::auto-start", ...args: any[]): void
    connect(sigName: "notify::domain-ontology", callback: (($obj: MinerManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::domain-ontology", callback: (($obj: MinerManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::domain-ontology", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Object to query and control miners.
 * @class 
 */
class MinerManager extends GObject.Object {

    // Own properties of TrackerControl-2.0.TrackerControl.MinerManager

    static name: string
    static $gtype: GObject.GType<MinerManager>

    // Constructors of TrackerControl-2.0.TrackerControl.MinerManager

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
     * @param auto_start Flag to disable auto-starting the miners when querying status
     */
    static new_full(auto_start: boolean): MinerManager
    _init(config?: MinerManager_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface MinerManagerClass {

    // Own fields of TrackerControl-2.0.TrackerControl.MinerManagerClass

    parent_class: GObject.ObjectClass
    miner_progress: (manager: MinerManager, miner_name: string, status: string, progress: number) => void
    miner_paused: (manager: MinerManager, miner_name: string) => void
    miner_resumed: (manager: MinerManager, miner_name: string) => void
    miner_activated: (manager: MinerManager, miner_name: string) => void
    miner_deactivated: (manager: MinerManager, miner_name: string) => void
}

abstract class MinerManagerClass {

    // Own properties of TrackerControl-2.0.TrackerControl.MinerManagerClass

    static name: string
}

}
export default TrackerControl;