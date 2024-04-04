/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './trackercontrol-2.0-ambient.d.ts';

/**
 * TrackerControl-2.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

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

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            auto_start: boolean;
            autoStart: boolean;
            domain_ontology: string;
            domainOntology: string;
        }
    }

    /**
     * Object to query and control miners.
     */
    class MinerManager extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<MinerManager>;

        // Own properties of TrackerControl.MinerManager

        get auto_start(): boolean;
        get autoStart(): boolean;
        get domain_ontology(): string;
        get domainOntology(): string;

        // Constructors of TrackerControl.MinerManager

        constructor(properties?: Partial<MinerManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MinerManager;

        static new_full(auto_start: boolean): MinerManager;

        // Own signals of TrackerControl.MinerManager

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'miner-activated', callback: (_source: this, miner: string) => void): number;
        connect_after(signal: 'miner-activated', callback: (_source: this, miner: string) => void): number;
        emit(signal: 'miner-activated', miner: string): void;
        connect(signal: 'miner-deactivated', callback: (_source: this, miner: string) => void): number;
        connect_after(signal: 'miner-deactivated', callback: (_source: this, miner: string) => void): number;
        emit(signal: 'miner-deactivated', miner: string): void;
        connect(signal: 'miner-paused', callback: (_source: this, miner: string) => void): number;
        connect_after(signal: 'miner-paused', callback: (_source: this, miner: string) => void): number;
        emit(signal: 'miner-paused', miner: string): void;
        connect(
            signal: 'miner-progress',
            callback: (_source: this, miner: string, status: string, progress: number, remaining_time: number) => void,
        ): number;
        connect_after(
            signal: 'miner-progress',
            callback: (_source: this, miner: string, status: string, progress: number, remaining_time: number) => void,
        ): number;
        emit(signal: 'miner-progress', miner: string, status: string, progress: number, remaining_time: number): void;
        connect(signal: 'miner-resumed', callback: (_source: this, miner: string) => void): number;
        connect_after(signal: 'miner-resumed', callback: (_source: this, miner: string) => void): number;
        emit(signal: 'miner-resumed', miner: string): void;

        // Own static methods of TrackerControl.MinerManager

        static error_quark(): GLib.Quark;

        // Own virtual methods of TrackerControl.MinerManager

        vfunc_miner_activated(miner_name: string): void;
        vfunc_miner_deactivated(miner_name: string): void;
        vfunc_miner_paused(miner_name: string): void;
        vfunc_miner_progress(miner_name: string, status: string, progress: number): void;
        vfunc_miner_resumed(miner_name: string): void;

        // Own methods of TrackerControl.MinerManager

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
        get_status(miner: string): [boolean, string, number, number];
        /**
         * Tells the filesystem miner to start indexing the `file`.
         *
         * On failure `error` will be set.
         * @param file a URL valid in GIO of a file to give to the miner for processing
         * @param cancellable a #GCancellable, or %NULL
         * @returns %TRUE on success, otherwise %FALSE.
         */
        index_file(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean;
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
        is_paused(miner: string): [boolean, string[] | null, string[] | null];
        /**
         * Asks `miner` to pause. a miner could be paused by
         * several reasons, and its activity won't be resumed
         * until all pause requests have been resumed.
         * @param miner miner reference
         * @param reason reason to pause
         * @returns %TRUE if the miner was paused successfully, otherwise %FALSE.
         */
        pause(miner: string, reason: string): [boolean, number];
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
        pause_for_process(miner: string, reason: string): [boolean, number];
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

        // Inherited methods
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [introduction][ginitable] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [introduction][ginitable] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        vfunc_constructed(): void;
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        vfunc_dispose(): void;
        vfunc_finalize(): void;
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

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
