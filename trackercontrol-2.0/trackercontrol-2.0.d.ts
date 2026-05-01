
/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

import '@girs/gjs';

// Module dependencies
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace TrackerControl {

    /**
     * TrackerControl-2.0
     */


    /**
     * Enumeration values used in errors returned by the
     * {@link TrackerControl.MinerManager} API.
     * @gir-type Enum
     * @since 0.8
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


    namespace MinerManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ::miner-activated signal will be emitted whenever a miner
             * (referenced by `miner`) is activated (technically, this means
             * the miner has appeared in the session bus).
             * @signal
             * @since 0.8
             * @run-last
             */
            "miner-activated": (arg0: string) => void;
            /**
             * The ::miner-deactivated signal will be emitted whenever a miner
             * (referenced by `miner`) is deactivated (technically, this means
             * the miner has disappeared from the session bus).
             * @signal
             * @since 0.8
             * @run-last
             */
            "miner-deactivated": (arg0: string) => void;
            /**
             * The ::miner-paused signal will be emitted whenever a miner
             * (referenced by `miner`) is paused.
             * @signal
             * @since 0.8
             * @run-last
             */
            "miner-paused": (arg0: string) => void;
            /**
             * The ::miner-progress signal is meant to report status/progress changes
             * in any tracked miner.
             * @signal
             * @since 0.12
             * @run-last
             */
            "miner-progress": (arg0: string, arg1: string, arg2: number, arg3: number) => void;
            /**
             * The ::miner-resumed signal will be emitted whenever a miner
             * (referenced by `miner`) is resumed.
             * @signal
             * @since 0.8
             * @run-last
             */
            "miner-resumed": (arg0: string) => void;
            "notify::auto-start": (pspec: GObject.ParamSpec) => void;
            "notify::domain-ontology": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            auto_start: boolean;
            autoStart: boolean;
            domain_ontology: string;
            domainOntology: string;
        }
    }

    /**
     * Object to query and control miners.
     * @gir-type Class
     */
    class MinerManager extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<MinerManager>;

        // Properties
        /**
         * @construct-only
         * @default true
         */
        get auto_start(): boolean;

        /**
         * @construct-only
         * @default true
         */
        get autoStart(): boolean;

        /**
         * @construct-only
         * @default null
         */
        get domain_ontology(): string;

        /**
         * @construct-only
         * @default null
         */
        get domainOntology(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MinerManager.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MinerManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): MinerManager;

        static new_full(auto_start: boolean): MinerManager;

        // Signals
        /** @signal */
        connect<K extends keyof MinerManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MinerManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MinerManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MinerManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MinerManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MinerManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        static error_quark(): GLib.Quark;

        // Virtual methods
        /**
         * @param miner_name 
         * @virtual
         */
        vfunc_miner_activated(miner_name: string): void;

        /**
         * @param miner_name 
         * @virtual
         */
        vfunc_miner_deactivated(miner_name: string): void;

        /**
         * @param miner_name 
         * @virtual
         */
        vfunc_miner_paused(miner_name: string): void;

        /**
         * @param miner_name 
         * @param status 
         * @param progress 
         * @virtual
         */
        vfunc_miner_progress(miner_name: string, status: string, progress: number): void;

        /**
         * @param miner_name 
         * @virtual
         */
        vfunc_miner_resumed(miner_name: string): void;

        // Methods
        /**
         * Returns a list of references for all available miners. Available
         * miners are miners which may or may not be running in a process at
         * the current time.
         * @returns a {@link GLib.SList} which must be freed with `g_slist_free()` and all contained data with `g_free()`. Otherwise `null` is returned if there are no miners.
         */
        get_available(): (string[] | null);

        /**
         * Returns the description for the given `miner`.
         * @param miner miner reference
         * @returns A string which should not be freed or `null` if none is specified.
         */
        get_description(miner: string): string;

        /**
         * Returns a translated display name for `miner`.
         * @param miner miner reference
         * @returns A string which should not be freed or `null`.
         */
        get_display_name(miner: string): string;

        /**
         * Returns a list of references for all active miners. Active miners
         * are miners which are running within a process.
         * @returns a {@link GLib.SList} which must be freed with `g_slist_free()` and all contained data with `g_free()`. Otherwise `null` is returned if there are no miners.
         */
        get_running(): (string[] | null);

        /**
         * Returns the current status, progress and remaining time for `miner`.
         * `remaining_time` will be 0 if not possible to compute it yet,
         * and less than zero if it is not applicable.
         * @param miner miner reference
         * @returns `true` if the status could be retrieved successfully, otherwise `false`
         */
        get_status(miner: string): [boolean, string, number, number];

        /**
         * Tells the filesystem miner to start indexing the `file`.
         * 
         * On failure `error` will be set.
         * @param file a URL valid in GIO of a file to give to the miner for processing
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @returns `true` on success, otherwise `false`.
         */
        index_file(file: Gio.File, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Tells the filesystem miner to start indexing the `file`. Once the message has been sent,
         * `callback` will be called. You can then call `tracker_miner_manager_index_file_finish()`
         * to get the result.
         * @param file a URL valid in GIO of a file to give to the miner for processing
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        index_file_async(file: Gio.File, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * Tells the filesystem miner to start indexing the `file`. Once the message has been sent,
         * `callback` will be called. You can then call `tracker_miner_manager_index_file_finish()`
         * to get the result.
         * @param file a URL valid in GIO of a file to give to the miner for processing
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        index_file_async(file: Gio.File, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Tells the filesystem miner to start indexing the `file`. Once the message has been sent,
         * `callback` will be called. You can then call `tracker_miner_manager_index_file_finish()`
         * to get the result.
         * @param file a URL valid in GIO of a file to give to the miner for processing
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        index_file_async(file: Gio.File, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Finishes a request to index a file. See `tracker_miner_manager_index_file_async()`
         * 
         * On failure `error` will be set.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` on success, otherwise `false`.
         */
        index_file_finish(result: Gio.AsyncResult): boolean;

        /**
         * This function operates exactly the same way as
         * `tracker_miner_manager_index_file()` with the exception that if the
         * calling process dies, the indexing is cancelled. This API is useful
         * for cases where the calling process wants to tie the indexing
         * operation closely to its own lifetime.
         * 
         * On failure `error` will be set.
         * @param file a URL valid in GIO of a file to give to the miner for processing
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @returns `true` on success, otherwise `false`.
         */
        index_file_for_process(file: Gio.File, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * This function operates exactly the same way as
         * `tracker_miner_manager_index_file()` with the exception that if the
         * calling process dies, the indexing is cancelled. This API is useful
         * for cases where the calling process wants to tie the indexing
         * operation closely to its own lifetime.
         * 
         * When the operation is finished, `callback` will be called. You can
         * then call `tracker_miner_manager_index_file_for_process_finish()` to
         * get the result of the operation.
         * @param file a URL valid in GIO of a file to give to the miner for processing
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        index_file_for_process_async(file: Gio.File, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * This function operates exactly the same way as
         * `tracker_miner_manager_index_file()` with the exception that if the
         * calling process dies, the indexing is cancelled. This API is useful
         * for cases where the calling process wants to tie the indexing
         * operation closely to its own lifetime.
         * 
         * When the operation is finished, `callback` will be called. You can
         * then call `tracker_miner_manager_index_file_for_process_finish()` to
         * get the result of the operation.
         * @param file a URL valid in GIO of a file to give to the miner for processing
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        index_file_for_process_async(file: Gio.File, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * This function operates exactly the same way as
         * `tracker_miner_manager_index_file()` with the exception that if the
         * calling process dies, the indexing is cancelled. This API is useful
         * for cases where the calling process wants to tie the indexing
         * operation closely to its own lifetime.
         * 
         * When the operation is finished, `callback` will be called. You can
         * then call `tracker_miner_manager_index_file_for_process_finish()` to
         * get the result of the operation.
         * @param file a URL valid in GIO of a file to give to the miner for processing
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        index_file_for_process_async(file: Gio.File, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * Finishes a request to index a file. See `tracker_miner_manager_index_file_for_process_async()`
         * 
         * On failure `error` will be set.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` on success, otherwise `false`.
         */
        index_file_for_process_finish(result: Gio.AsyncResult): boolean;

        /**
         * Returns the miner's current activity.
         * @param miner miner reference
         * @returns `true` if the `miner` is active, otherwise `false`.
         */
        is_active(miner: string): boolean;

        /**
         * This function either returns `false` if the miner is not paused,
         * or returns `true` and fills in `applications` and `reasons` with
         * the pause reasons and the applications that asked for it. Both
         * arrays will have the same lengh, and will be sorted so the
         * application/pause reason pairs have the same index.
         * @param miner miner reference
         * @returns `true` if `miner` is paused, otherwise `false`.
         */
        is_paused(miner: string): [boolean, string[] | null, string[] | null];

        /**
         * Asks `miner` to pause. a miner could be paused by
         * several reasons, and its activity won't be resumed
         * until all pause requests have been resumed.
         * @param miner miner reference
         * @param reason reason to pause
         * @returns `true` if the miner was paused successfully, otherwise `false`.
         */
        pause(miner: string, reason: string): [boolean, number];

        /**
         * This function operates exactly the same way as
         * `tracker_miner_manager_pause()` with the exception that if the calling
         * process dies, the pause is resumed. This API is useful for cases
         * where the calling process has a risk of crashing without resuming
         * the pause.
         * 
         * NOTE: If you call `g_object_unref()` on the `manager` before you
         * intend to resume the pause and it finalizes, it will automatically
         * resume.
         * @param miner miner reference
         * @param reason reason to pause
         * @returns `true` if the miner was paused successfully, otherwise `false`.
         */
        pause_for_process(miner: string, reason: string): [boolean, number];

        /**
         * Tells the filesystem miner to reindex any file with a mimetype in
         * the `mimetypes` list.
         * 
         * On failure `error` will be set.
         * @param mimetypes an array of mimetypes (E.G. "text/plain"). All items with a mimetype in that list will be reindexed.
         * @returns `true` on success, otherwise `false`.
         */
        reindex_by_mimetype(mimetypes: string[]): boolean;

        /**
         * Tells `miner` to resume activity. The miner won't actually resume
         * operations until all pause requests have been resumed.
         * @param miner miner reference
         * @param cookie pause cookie
         * @returns `true` if the miner was successfully resumed, otherwise `false`.
         */
        resume(miner: string, cookie: number): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * Initializes the object implementing the interface.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         * 
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         * 
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         * 
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         * 
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         * 
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable: (Gio.Cancellable | null)): boolean;
    }


    /**
     * @gir-type Alias
     */
    type MinerManagerClass = typeof MinerManager;

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
