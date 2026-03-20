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
     * TrackerControl-1.0
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
            'miner-activated': (arg0: string) => void;
            /**
             * The ::miner-deactivated signal will be emitted whenever a miner
             * (referenced by `miner`) is deactivated (technically, this means
             * the miner has disappeared from the session bus).
             * @signal
             * @since 0.8
             * @run-last
             */
            'miner-deactivated': (arg0: string) => void;
            /**
             * The ::miner-paused signal will be emitted whenever a miner
             * (referenced by `miner`) is paused.
             * @signal
             * @since 0.8
             * @run-last
             */
            'miner-paused': (arg0: string) => void;
            /**
             * The ::miner-progress signal is meant to report status/progress changes
             * in any tracked miner.
             * @signal
             * @since 0.12
             * @run-last
             */
            'miner-progress': (arg0: string, arg1: string, arg2: number, arg3: number) => void;
            /**
             * The ::miner-resumed signal will be emitted whenever a miner
             * (referenced by `miner`) is resumed.
             * @signal
             * @since 0.8
             * @run-last
             */
            'miner-resumed': (arg0: string) => void;
            'notify::auto-start': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            auto_start: boolean;
            autoStart: boolean;
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
         */
        get auto_start(): boolean;
        /**
         * @construct-only
         */
        get autoStart(): boolean;

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

        static ['new'](): MinerManager;

        static new_full(auto_start: boolean): MinerManager;

        // Signals

        /** @signal */
        connect<K extends keyof MinerManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MinerManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MinerManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MinerManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MinerManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MinerManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
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
        get_available(): string[] | null;
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
        get_running(): string[] | null;
        /**
         * Returns the current status, progress and remaining time for `miner`.
         * `remaining_time` will be 0 if not possible to compute it yet,
         * and less than zero if it is not applicable.
         * @param miner miner reference
         * @returns `true` if the status could be retrieved successfully, otherwise `false`
         */
        get_status(miner: string): [boolean, string, number, number];
        /**
         * Tells the `miner` to ignore any events for the next `urls`. This is
         * used for cases where a file is updated by Tracker by the
         * tracker-writeback service. This API is used to avoid signalling up
         * the stack the changes to `urls`.
         * @param miner miner reference
         * @param urls the subjects to ignore the next updates of
         * @returns `true` on success, otherwise `false`.
         */
        ignore_next_update(miner: string, urls: string): boolean;
        /**
         * Tells the filesystem miner to start indexing the `file`.
         *
         * On failure `error` will be set.
         * @param file a URL valid in GIO of a file to give to the miner for processing
         * @returns `true` on success, otherwise `false`.
         */
        index_file(file: Gio.File): boolean;
        /**
         * Tells the filesystem miner to start indexing the `file`. Once the message has been sent,
         * `callback` will be called. You can then call `tracker_miner_manager_index_file_finish()`
         * to get the result.
         * @param file a URL valid in GIO of a file to give to the miner for processing
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        index_file_async(file: Gio.File, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Tells the filesystem miner to start indexing the `file`. Once the message has been sent,
         * `callback` will be called. You can then call `tracker_miner_manager_index_file_finish()`
         * to get the result.
         * @param file a URL valid in GIO of a file to give to the miner for processing
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        index_file_async(
            file: Gio.File,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Tells the filesystem miner to start indexing the `file`. Once the message has been sent,
         * `callback` will be called. You can then call `tracker_miner_manager_index_file_finish()`
         * to get the result.
         * @param file a URL valid in GIO of a file to give to the miner for processing
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        index_file_async(
            file: Gio.File,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
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
        index_file_for_process(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean;
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
        index_file_for_process_async(file: Gio.File, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
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
        index_file_for_process_async(
            file: Gio.File,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        index_file_for_process_async(
            file: Gio.File,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
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
        init(cancellable?: Gio.Cancellable | null): boolean;
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
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating](floating-refs.html) object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating](floating-refs.html) reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
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
