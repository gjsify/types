
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * TrackerControl-2.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

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
module MinerManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `miner-activated`
     */
    interface MinerActivatedSignalCallback {
        ($obj: MinerManager, miner: string | null): void
    }

    /**
     * Signal callback interface for `miner-deactivated`
     */
    interface MinerDeactivatedSignalCallback {
        ($obj: MinerManager, miner: string | null): void
    }

    /**
     * Signal callback interface for `miner-paused`
     */
    interface MinerPausedSignalCallback {
        ($obj: MinerManager, miner: string | null): void
    }

    /**
     * Signal callback interface for `miner-progress`
     */
    interface MinerProgressSignalCallback {
        ($obj: MinerManager, miner: string | null, status: string | null, progress: number, remaining_time: number): void
    }

    /**
     * Signal callback interface for `miner-resumed`
     */
    interface MinerResumedSignalCallback {
        ($obj: MinerManager, miner: string | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of TrackerControl-2.0.TrackerControl.MinerManager

        auto_start?: boolean | null
        domain_ontology?: string | null
    }

}

interface MinerManager extends Gio.Initable {

    // Own properties of TrackerControl-2.0.TrackerControl.MinerManager

    readonly auto_start: boolean
    readonly domain_ontology: string | null

    // Own fields of TrackerControl-2.0.TrackerControl.MinerManager

    parent_instance: GObject.Object

    // Owm methods of TrackerControl-2.0.TrackerControl.MinerManager

    /**
     * Returns a list of references for all available miners. Available
     * miners are miners which may or may not be running in a process at
     * the current time.
     * @returns a #GSList which must be freed with g_slist_free() and all contained data with g_free(). Otherwise %NULL is returned if there are no miners.
     */
    get_available(): string[] | null
    /**
     * Returns the description for the given `miner`.
     * @param miner miner reference
     * @returns A string which should not be freed or %NULL if none is specified.
     */
    get_description(miner: string | null): string | null
    /**
     * Returns a translated display name for `miner`.
     * @param miner miner reference
     * @returns A string which should not be freed or %NULL.
     */
    get_display_name(miner: string | null): string | null
    /**
     * Returns a list of references for all active miners. Active miners
     * are miners which are running within a process.
     * @returns a #GSList which must be freed with g_slist_free() and all contained data with g_free(). Otherwise %NULL is returned if there are no miners.
     */
    get_running(): string[] | null
    /**
     * Returns the current status, progress and remaining time for `miner`.
     * `remaining_time` will be 0 if not possible to compute it yet,
     * and less than zero if it is not applicable.
     * @param miner miner reference
     * @returns %TRUE if the status could be retrieved successfully, otherwise %FALSE
     */
    get_status(miner: string | null): [ /* returnType */ boolean, /* status */ string | null, /* progress */ number, /* remaining_time */ number ]
    /**
     * Tells the filesystem miner to start indexing the `file`.
     * 
     * On failure `error` will be set.
     * @param file a URL valid in GIO of a file to give to the miner for processing
     * @param cancellable a #GCancellable, or %NULL
     * @returns %TRUE on success, otherwise %FALSE.
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
    index_file_async(file: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes a request to index a file. See tracker_miner_manager_index_file_async()
     * 
     * On failure `error` will be set.
     * @param result a #GAsyncResult
     * @returns %TRUE on success, otherwise %FALSE.
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
     * @returns %TRUE on success, otherwise %FALSE.
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
    index_file_for_process_async(file: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes a request to index a file. See tracker_miner_manager_index_file_for_process_async()
     * 
     * On failure `error` will be set.
     * @param result a #GAsyncResult
     * @returns %TRUE on success, otherwise %FALSE.
     */
    index_file_for_process_finish(result: Gio.AsyncResult): boolean
    /**
     * Returns the miner's current activity.
     * @param miner miner reference
     * @returns %TRUE if the @miner is active, otherwise %FALSE.
     */
    is_active(miner: string | null): boolean
    /**
     * This function either returns %FALSE if the miner is not paused,
     * or returns %TRUE and fills in `applications` and `reasons` with
     * the pause reasons and the applications that asked for it. Both
     * arrays will have the same lengh, and will be sorted so the
     * application/pause reason pairs have the same index.
     * @param miner miner reference
     * @returns %TRUE if @miner is paused, otherwise %FALSE.
     */
    is_paused(miner: string | null): [ /* returnType */ boolean, /* applications */ string[], /* reasons */ string[] ]
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
    pause_for_process(miner: string | null, reason: string | null): [ /* returnType */ boolean, /* cookie */ number ]
    /**
     * Tells the filesystem miner to reindex any file with a mimetype in
     * the `mimetypes` list.
     * 
     * On failure `error` will be set.
     * @param mimetypes an array of mimetypes (E.G. "text/plain"). All items with a mimetype in that list will be reindexed.
     * @returns %TRUE on success, otherwise %FALSE.
     */
    reindex_by_mimetype(mimetypes: string[]): boolean
    /**
     * Tells `miner` to resume activity. The miner won't actually resume
     * operations until all pause requests have been resumed.
     * @param miner miner reference
     * @param cookie pause cookie
     * @returns %TRUE if the miner was successfully resumed, otherwise %FALSE.
     */
    resume(miner: string | null, cookie: number): boolean

    // Own virtual methods of TrackerControl-2.0.TrackerControl.MinerManager

    vfunc_miner_activated(miner_name: string | null): void
    vfunc_miner_deactivated(miner_name: string | null): void
    vfunc_miner_paused(miner_name: string | null): void
    vfunc_miner_progress(miner_name: string | null, status: string | null, progress: number): void
    vfunc_miner_resumed(miner_name: string | null): void

    // Own signals of TrackerControl-2.0.TrackerControl.MinerManager

    connect(sigName: "miner-activated", callback: MinerManager.MinerActivatedSignalCallback): number
    connect_after(sigName: "miner-activated", callback: MinerManager.MinerActivatedSignalCallback): number
    emit(sigName: "miner-activated", miner: string | null, ...args: any[]): void
    connect(sigName: "miner-deactivated", callback: MinerManager.MinerDeactivatedSignalCallback): number
    connect_after(sigName: "miner-deactivated", callback: MinerManager.MinerDeactivatedSignalCallback): number
    emit(sigName: "miner-deactivated", miner: string | null, ...args: any[]): void
    connect(sigName: "miner-paused", callback: MinerManager.MinerPausedSignalCallback): number
    connect_after(sigName: "miner-paused", callback: MinerManager.MinerPausedSignalCallback): number
    emit(sigName: "miner-paused", miner: string | null, ...args: any[]): void
    connect(sigName: "miner-progress", callback: MinerManager.MinerProgressSignalCallback): number
    connect_after(sigName: "miner-progress", callback: MinerManager.MinerProgressSignalCallback): number
    emit(sigName: "miner-progress", miner: string | null, status: string | null, progress: number, remaining_time: number, ...args: any[]): void
    connect(sigName: "miner-resumed", callback: MinerManager.MinerResumedSignalCallback): number
    connect_after(sigName: "miner-resumed", callback: MinerManager.MinerResumedSignalCallback): number
    emit(sigName: "miner-resumed", miner: string | null, ...args: any[]): void

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
     * @param auto_start Flag to disable auto-starting the miners when querying status
     * @returns a #TrackerMinerManager. On error, #NULL is returned and @error is set accordingly.
     */
    static new_full(auto_start: boolean): MinerManager
    _init(config?: MinerManager.ConstructorProperties): void
    static error_quark(): GLib.Quark
}

interface MinerManagerClass {

    // Own fields of TrackerControl-2.0.TrackerControl.MinerManagerClass

    parent_class: GObject.ObjectClass
    miner_progress: (manager: MinerManager, miner_name: string | null, status: string | null, progress: number) => void
    miner_paused: (manager: MinerManager, miner_name: string | null) => void
    miner_resumed: (manager: MinerManager, miner_name: string | null) => void
    miner_activated: (manager: MinerManager, miner_name: string | null) => void
    miner_deactivated: (manager: MinerManager, miner_name: string | null) => void
}

abstract class MinerManagerClass {

    // Own properties of TrackerControl-2.0.TrackerControl.MinerManagerClass

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

export default TrackerControl;
// END