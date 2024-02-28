/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './trackercontrol-1.0-ambient.d.ts';
import './trackercontrol-1.0-import.d.ts';
/**
 * TrackerControl-1.0
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

        interface MinerActivated {
            (miner: string): void;
        }

        interface MinerDeactivated {
            (miner: string): void;
        }

        interface MinerPaused {
            (miner: string): void;
        }

        interface MinerProgress {
            (miner: string, status: string, progress: number, remaining_time: number): void;
        }

        interface MinerResumed {
            (miner: string): void;
        }

        // Constructor properties interface
    }

    /**
     * Object to query and control miners.
     */
    class MinerManager extends GObject.Object {
        // Own properties of TrackerControl-1.0.MinerManager

        auto_start: boolean;
        autoStart: boolean;

        // Constructors of TrackerControl-1.0.MinerManager

        static ['new'](): MinerManager;

        static new_full(auto_start: boolean): MinerManager;

        // Owm methods of TrackerControl-1.0.MinerManager

        static error_quark(): GLib.Quark;

        // Owm methods of TrackerControl-1.0.MinerManager

        /**
         * Returns a list of references for all available miners. Available
         * miners are miners which may or may not be running in a process at
         * the current time.
         * @returns a #GSList which must be freed with g_slist_free() and all contained data with g_free(). Otherwise %NULL is returned if there are no miners.
         */
        get_available(): string[] | null;
        /**
         * Returns the description for the given `miner`.
         * @param miner miner reference
         * @returns A string which should not be freed or %NULL if none is specified.
         */
        get_description(miner: string): string;
        /**
         * Returns a translated display name for `miner`.
         * @param miner miner reference
         * @returns A string which should not be freed or %NULL.
         */
        get_display_name(miner: string): string;
        /**
         * Returns a list of references for all active miners. Active miners
         * are miners which are running within a process.
         * @returns a #GSList which must be freed with g_slist_free() and all contained data with g_free(). Otherwise %NULL is returned if there are no miners.
         */
        get_running(): string[] | null;
        /**
         * Returns the current status, progress and remaining time for `miner`.
         * `remaining_time` will be 0 if not possible to compute it yet,
         * and less than zero if it is not applicable.
         * @param miner miner reference
         * @returns %TRUE if the status could be retrieved successfully, otherwise %FALSE
         */
        get_status(miner: string): boolean;
        /**
         * Tells the `miner` to ignore any events for the next `urls`. This is
         * used for cases where a file is updated by Tracker by the
         * tracker-writeback service. This API is used to avoid signalling up
         * the stack the changes to `urls`.
         * @param miner miner reference
         * @param urls the subjects to ignore the next updates of
         * @returns %TRUE on success, otherwise %FALSE.
         */
        ignore_next_update(miner: string, urls: string): boolean;
        /**
         * Tells the filesystem miner to start indexing the `file`.
         *
         * On failure `error` will be set.
         * @param file a URL valid in GIO of a file to give to the miner for processing
         * @returns %TRUE on success, otherwise %FALSE.
         */
        index_file(file: Gio.File): boolean;
        /**
         * Tells the filesystem miner to start indexing the `file`. Once the message has been sent,
         * `callback` will be called. You can then call tracker_miner_manager_index_file_finish()
         * to get the result.
         * @param file a URL valid in GIO of a file to give to the miner for processing
         * @param cancellable a #GCancellable, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        index_file_async(
            file: Gio.File,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes a request to index a file. See tracker_miner_manager_index_file_async()
         *
         * On failure `error` will be set.
         * @param result a #GAsyncResult
         * @returns %TRUE on success, otherwise %FALSE.
         */
        index_file_finish(result: Gio.AsyncResult): boolean;
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
        index_file_for_process(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean;
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
        index_file_for_process_async(
            file: Gio.File,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes a request to index a file. See tracker_miner_manager_index_file_for_process_async()
         *
         * On failure `error` will be set.
         * @param result a #GAsyncResult
         * @returns %TRUE on success, otherwise %FALSE.
         */
        index_file_for_process_finish(result: Gio.AsyncResult): boolean;
        /**
         * Returns the miner's current activity.
         * @param miner miner reference
         * @returns %TRUE if the @miner is active, otherwise %FALSE.
         */
        is_active(miner: string): boolean;
        /**
         * This function either returns %FALSE if the miner is not paused,
         * or returns %TRUE and fills in `applications` and `reasons` with
         * the pause reasons and the applications that asked for it. Both
         * arrays will have the same lengh, and will be sorted so the
         * application/pause reason pairs have the same index.
         * @param miner miner reference
         * @returns %TRUE if @miner is paused, otherwise %FALSE.
         */
        is_paused(miner: string): boolean;
        /**
         * Asks `miner` to pause. a miner could be paused by
         * several reasons, and its activity won't be resumed
         * until all pause requests have been resumed.
         * @param miner miner reference
         * @param reason reason to pause
         * @returns %TRUE if the miner was paused successfully, otherwise %FALSE.
         */
        pause(miner: string, reason: string): boolean;
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
        pause_for_process(miner: string, reason: string): boolean;
        /**
         * Tells the filesystem miner to reindex any file with a mimetype in
         * the `mimetypes` list.
         *
         * On failure `error` will be set.
         * @param mimetypes an array of mimetypes (E.G. "text/plain"). All items with a mimetype in that list will be reindexed.
         * @returns %TRUE on success, otherwise %FALSE.
         */
        reindex_by_mimetype(mimetypes: string[]): boolean;
        /**
         * Tells `miner` to resume activity. The miner won't actually resume
         * operations until all pause requests have been resumed.
         * @param miner miner reference
         * @param cookie pause cookie
         * @returns %TRUE if the miner was successfully resumed, otherwise %FALSE.
         */
        resume(miner: string, cookie: number): boolean;
    }

    class MinerManagerClass {}

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

export default TrackerControl;
// END
