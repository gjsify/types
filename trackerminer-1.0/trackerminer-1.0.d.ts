/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type Tracker from '@girs/tracker-1.0';
import type GLib from '@girs/glib-2.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace TrackerMiner {
    /**
     * TrackerMiner-1.0
     */

    /**
     * Possible errors returned when calling tracker_decorator_next_finish().
     */

    /**
     * Possible errors returned when calling tracker_decorator_next_finish().
     */
    export namespace DecoratorError {
        export const $gtype: GObject.GType<DecoratorError>;
    }

    enum DecoratorError {
        /**
         * There is no item to be processed
         * next. It is entirely possible to have a ::items_available signal
         * emitted and then have this error when calling
         * tracker_decorator_next_finish() because the signal may apply to a
         * class which we're not interested in. For example, a new nmo:Email
         * might have been added to Tracker, but we might only be interested
         * in nfo:Document. This case would give this error.
         */
        EMPTY,
        /**
         * No work was done or will be done
         * because the miner is currently paused.
         */
        PAUSED,
    }

    export namespace FilterPolicy {
        export const $gtype: GObject.GType<FilterPolicy>;
    }

    enum FilterPolicy {
        DENY,
        ACCEPT,
    }

    export namespace FilterType {
        export const $gtype: GObject.GType<FilterType>;
    }

    enum FilterType {
        FILE,
        DIRECTORY,
        PARENT_DIRECTORY,
    }
    /**
     * Possible errors returned when calling #TrackerMiner APIs or
     * subclassed miners where the error is generic to all miners.
     */

    /**
     * Possible errors returned when calling #TrackerMiner APIs or
     * subclassed miners where the error is generic to all miners.
     */
    export namespace MinerError {
        export const $gtype: GObject.GType<MinerError>;
    }

    enum MinerError {
        /**
         * No name was given when creating
         * the miner. The name is crucial for D-Bus presence and a host of
         * other things.
         */
        NAME_MISSING,
        /**
         * The name trying to be used
         * for the miner was not available, possibly because the miner is
         * already running with the same name in another process.
         */
        NAME_UNAVAILABLE,
        /**
         * Given by miners when an API is used at
         * the time the miner itself is paused and such actions should be avoided.
         */
        PAUSED,
        /**
         * The pause request has already
         * been given by the same application with the same reason. Duplicate
         * pause calls with the same reason by the same application can not
         * be carried out.
         */
        PAUSED_ALREADY,
        /**
         * When pausing a miner, a cookie
         * (or `gint` based ID) is given. That cookie must be used to resume a
         * previous pause request. If the cookie is unrecognised, this error
         * is given.
         */
        INVALID_COOKIE,
    }
    /**
     * Possible errors returned when calling creating new objects based on
     * the #TrackerMinerFS type and other APIs available with this class.
     */

    /**
     * Possible errors returned when calling creating new objects based on
     * the #TrackerMinerFS type and other APIs available with this class.
     */
    export namespace MinerFSError {
        export const $gtype: GObject.GType<MinerFSError>;
    }

    enum MinerFSError {
        /**
         * There was an error during
         * initialization of the object. The specific details are in the
         * message.
         */
        MINER_FS_ERROR_INIT,
    }

    export namespace NetworkType {
        export const $gtype: GObject.GType<NetworkType>;
    }

    enum NetworkType {
        NONE,
        UNKNOWN,
        GPRS,
        EDGE,
        '3G',
        LAN,
    }
    /**
     * The name of the D-Bus interface to use for all data miners that
     * inter-operate with Tracker.
     */
    const MINER_DBUS_INTERFACE: string;
    /**
     * D-Bus name prefix to use for all data miners. This allows custom
     * miners to be written using `TRACKER_MINER_DBUS_NAME_PREFIX` + "Files" for
     * example and would show up on D-Bus under
     * &quot;org.freedesktop.Tracker1.Miner.Files&quot;.
     */
    const MINER_DBUS_NAME_PREFIX: string;
    /**
     * D-Bus path prefix to use for all data miners. This allows custom
     * miners to be written using `TRACKER_MINER_DBUS_PATH_PREFIX` + "Files" for
     * example and would show up on D-Bus under
     * &quot;/org/freedesktop/Tracker1/Miner/Files&quot;.
     */
    const MINER_DBUS_PATH_PREFIX: string;
    /**
     * Used as the domain for any #GErrors reported by `TrackerMiner` objects.
     */
    const MINER_ERROR_DOMAIN: string;

    export namespace DirectoryFlags {
        export const $gtype: GObject.GType<DirectoryFlags>;
    }

    enum DirectoryFlags {
        NONE,
        RECURSE,
        CHECK_MTIME,
        MONITOR,
        IGNORE,
        PRESERVE,
        PRIORITY,
        NO_STAT,
        CHECK_DELETED,
    }
    namespace Decorator {
        // Signal callback interfaces

        interface Finished {
            (): void;
        }

        interface ItemsAvailable {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Miner.ConstructorProps, Gio.Initable.ConstructorProps {
            class_names: string[];
            classNames: string[];
            commit_batch_size: number;
            commitBatchSize: number;
            data_source: string;
            dataSource: string;
            priority_rdf_types: string[];
            priorityRdfTypes: string[];
        }
    }

    /**
     * Abstract miner object for passive extended metadata indexing, i.e.
     * data past the basic information such as file name, size, etc.
     */
    abstract class Decorator extends Miner implements Gio.Initable {
        static $gtype: GObject.GType<Decorator>;

        // Properties

        get class_names(): string[];
        set class_names(val: string[]);
        get classNames(): string[];
        set classNames(val: string[]);
        get commit_batch_size(): number;
        set commit_batch_size(val: number);
        get commitBatchSize(): number;
        set commitBatchSize(val: number);
        get data_source(): string;
        get dataSource(): string;
        set priority_rdf_types(val: string[]);
        set priorityRdfTypes(val: string[]);

        // Fields

        priv: any;

        // Constructors

        constructor(properties?: Partial<Decorator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'finished', callback: (_source: this) => void): number;
        connect_after(signal: 'finished', callback: (_source: this) => void): number;
        emit(signal: 'finished'): void;
        connect(signal: 'items-available', callback: (_source: this) => void): number;
        connect_after(signal: 'items-available', callback: (_source: this) => void): number;
        emit(signal: 'items-available'): void;

        // Static methods

        /**
         * Gives the caller the #GQuark used to identify #TrackerDecorator errors
         * in #GError structures. The #GQuark is used as the domain for the error.
         */
        static error_quark(): GLib.Quark;

        // Virtual methods

        vfunc_finished(): void;
        vfunc_items_available(): void;

        // Methods

        /**
         * Deletes resource needing extended metadata extraction from the
         * queue. `id` is the same IDs emitted by tracker-store when the database is
         * updated for consistency. For details, see the GraphUpdated signal.
         * @param id an ID.
         */
        delete_id(id: number): void;
        /**
         * This function returns a string list of class names which are being
         * updated with extended metadata. An example would be 'nfo:Document'.
         * @returns a const gchar** or #NULL.
         */
        get_class_names(): string[];
        /**
         * The unique string identifying this #TrackerDecorator that has
         * extracted the extended metadata. This is essentially an identifier
         * so it's clear WHO has extracted this extended metadata.
         * @returns a const gchar* or #NULL if an error happened.
         */
        get_data_source(): string;
        /**
         * Get the number of items left in the queue to be processed. This
         * indicates content that may already exist in Tracker but is waiting
         * to be further flurished with metadata with a 2nd pass extraction or
         * index.
         * @returns the number of items queued to be processed, always >= 0.
         */
        get_n_items(): number;
        /**
         * Processes the next resource in the queue to have extended metadata
         * extracted. If the item in the queue has been completed already, it
         * signals it's completion instead.
         *
         * This function will give a #GError if the miner is paused at the
         * time it is called.
         * @param cancellable a #GCancellable.
         */
        next(cancellable?: Gio.Cancellable | null): Promise<DecoratorInfo>;
        /**
         * Processes the next resource in the queue to have extended metadata
         * extracted. If the item in the queue has been completed already, it
         * signals it's completion instead.
         *
         * This function will give a #GError if the miner is paused at the
         * time it is called.
         * @param cancellable a #GCancellable.
         * @param callback a #GAsyncReadyCallback.
         */
        next(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Processes the next resource in the queue to have extended metadata
         * extracted. If the item in the queue has been completed already, it
         * signals it's completion instead.
         *
         * This function will give a #GError if the miner is paused at the
         * time it is called.
         * @param cancellable a #GCancellable.
         * @param callback a #GAsyncReadyCallback.
         */
        next(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<DecoratorInfo> | void;
        /**
         * Should be called in the callback function provided to
         * tracker_decorator_next() to return the result of the task be it an
         * error or not.
         * @param result a #GAsyncResult.
         * @returns a #TrackerDecoratorInfo on success or  #NULL on error. Free with tracker_decorator_info_unref().
         */
        next_finish(result: Gio.AsyncResult): DecoratorInfo;
        /**
         * Adds resource needing extended metadata extraction to the queue.
         * `id` is the same IDs emitted by tracker-store when the database is updated for
         * consistency. For details, see the GraphUpdated signal.
         * @param id the ID of the resource ID.
         * @param class_name_id the ID of the resource's class.
         */
        prepend_id(id: number, class_name_id: number): void;
        /**
         * Re-evaluate the priority queues internally to ensure that
         * `rdf_types` are handled before all other content. This is useful for
         * applications that need their content available sooner than the
         * standard time it would take to index content.
         * @param rdf_types a string array of rdf types
         */
        set_priority_rdf_types(rdf_types: string): void;

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
            flags: GObject.BindingFlags | null,
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
            flags: GObject.BindingFlags | null,
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
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
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
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    namespace DecoratorFS {
        // Constructor properties interface

        interface ConstructorProps extends Decorator.ConstructorProps, Gio.Initable.ConstructorProps {}
    }

    /**
     * A decorator object.
     */
    abstract class DecoratorFS extends Decorator implements Gio.Initable {
        static $gtype: GObject.GType<DecoratorFS>;

        // Fields

        priv: any;

        // Constructors

        constructor(properties?: Partial<DecoratorFS.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        /**
         * Prepends a file for processing.
         * @param file a #GFile to process
         * @returns the tracker:id of the element corresponding to the file
         */
        prepend_file(file: Gio.File): number;

        // Inherited methods
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
            flags: GObject.BindingFlags | null,
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
            flags: GObject.BindingFlags | null,
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
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
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
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    namespace IndexingTree {
        // Signal callback interfaces

        interface ChildUpdated {
            (root: Gio.File, child: Gio.File): void;
        }

        interface DirectoryAdded {
            (directory: Gio.File): void;
        }

        interface DirectoryRemoved {
            (directory: Gio.File): void;
        }

        interface DirectoryUpdated {
            (directory: Gio.File): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            filter_hidden: boolean;
            filterHidden: boolean;
            root: Gio.File;
        }
    }

    /**
     * Base object used to configure indexing within #TrackerMinerFS items.
     */
    class IndexingTree extends GObject.Object {
        static $gtype: GObject.GType<IndexingTree>;

        // Properties

        get filter_hidden(): boolean;
        set filter_hidden(val: boolean);
        get filterHidden(): boolean;
        set filterHidden(val: boolean);
        get root(): Gio.File;

        // Fields

        priv: any;

        // Constructors

        constructor(properties?: Partial<IndexingTree.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): IndexingTree;

        static new_with_root(root: Gio.File): IndexingTree;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'child-updated', callback: (_source: this, root: Gio.File, child: Gio.File) => void): number;
        connect_after(
            signal: 'child-updated',
            callback: (_source: this, root: Gio.File, child: Gio.File) => void,
        ): number;
        emit(signal: 'child-updated', root: Gio.File, child: Gio.File): void;
        connect(signal: 'directory-added', callback: (_source: this, directory: Gio.File) => void): number;
        connect_after(signal: 'directory-added', callback: (_source: this, directory: Gio.File) => void): number;
        emit(signal: 'directory-added', directory: Gio.File): void;
        connect(signal: 'directory-removed', callback: (_source: this, directory: Gio.File) => void): number;
        connect_after(signal: 'directory-removed', callback: (_source: this, directory: Gio.File) => void): number;
        emit(signal: 'directory-removed', directory: Gio.File): void;
        connect(signal: 'directory-updated', callback: (_source: this, directory: Gio.File) => void): number;
        connect_after(signal: 'directory-updated', callback: (_source: this, directory: Gio.File) => void): number;
        emit(signal: 'directory-updated', directory: Gio.File): void;

        // Virtual methods

        vfunc_child_updated(root: Gio.File, child: Gio.File): void;
        vfunc_directory_added(directory: Gio.File): void;
        vfunc_directory_removed(directory: Gio.File): void;
        vfunc_directory_updated(directory: Gio.File): void;

        // Methods

        /**
         * Adds a directory to the indexing tree with the
         * given configuration flags.
         * @param directory #GFile pointing to a directory
         * @param flags Configuration flags for the directory
         */
        add(directory: Gio.File, flags: DirectoryFlags | null): void;
        /**
         * Adds a new filter for basenames.
         * @param filter filter type
         * @param glob_string glob-style string for the filter
         */
        add_filter(filter: FilterType | null, glob_string: string): void;
        /**
         * Clears all filters of a given type.
         * @param type filter type to clear
         */
        clear_filters(type: FilterType | null): void;
        /**
         * returns %TRUE if `file` should be indexed according to the
         * parameters given through tracker_indexing_tree_add() and
         * tracker_indexing_tree_add_filter().
         *
         * If `file_type` is #G_FILE_TYPE_UNKNOWN, file type will be queried to the
         * file system.
         * @param file a #GFile
         * @param file_type a #GFileType
         * @returns %TRUE if @file should be indexed.
         */
        file_is_indexable(file: Gio.File, file_type: Gio.FileType | null): boolean;
        /**
         * Evaluates if the URL represented by `file` is the same of that for
         * the root of the `tree`.
         * @param file a #GFile to compare
         * @returns %TRUE if @file matches the URL canonically, otherwise %FALSE.
         */
        file_is_root(file: Gio.File): boolean;
        /**
         * Returns %TRUE if `file` matches any filter of the given filter type.
         * @param type filter type
         * @param file a #GFile
         * @returns %TRUE if @file is filtered.
         */
        file_matches_filter(type: FilterType | null, file: Gio.File): boolean;
        /**
         * Get the default filtering policies for `tree` when indexing content.
         * Some content is black listed or white listed and the default policy
         * for that is returned here. The `filter` allows specific type of
         * policies to be returned, for example, the default policy for files
         * (#TRACKER_FILTER_FILE).
         * @param filter a #TrackerFilterType
         * @returns Either #TRACKER_FILTER_POLICY_DENY or #TRACKER_FILTER_POLICY_ALLOW.
         */
        get_default_policy(filter: FilterType | null): FilterPolicy;
        /**
         * Describes if the `tree` should index hidden content. To change this
         * setting, see tracker_indexing_tree_set_filter_hidden().
         * @returns %FALSE if hidden files are indexed, otherwise %TRUE.
         */
        get_filter_hidden(): boolean;
        /**
         * Returns the #GFile that represents the master root location for all
         * indexing locations. For example, if
         * <filename>file:///etc</filename> is an indexed path and so was
         * <filename>file:///home/user</filename>, the master root is
         * <filename>file:///</filename>. Only one scheme per `tree` can be
         * used, so you can not mix <filename>http</filename> and
         * <filename>file</filename> roots in `tree`.
         *
         * The return value should <emphasis>NEVER</emphasis> be %NULL. In
         * cases where no root is given, we fallback to
         * <filename>file:///</filename>.
         *
         * Roots explained:
         *
         * - master root = top most level root node,
         *   e.g. file:///
         *
         * - config root = a root node from GSettings,
         *   e.g. file:///home/martyn/Documents
         *
         * - root = ANY root, normally config root, but it can also apply to
         *   roots added for devices, which technically are not a config root or a
         *   master root.
         * @returns the effective root for all locations, or %NULL on error. The root is owned by @tree and should not be freed. It can be referenced using g_object_ref().
         */
        get_master_root(): Gio.File;
        /**
         * Returns the #GFile that was previously added through tracker_indexing_tree_add()
         * and would equal or contain `file,` or %NULL if none applies.
         *
         * If the return value is non-%NULL, `directory_flags` would contain the
         * #TrackerDirectoryFlags applying to `file`.
         * @param file a #GFile
         * @returns the effective parent in @tree, or %NULL
         */
        get_root(file: Gio.File): [Gio.File, DirectoryFlags];
        /**
         * Returns the list of indexing roots in `tree`
         * @returns The list          of roots, the list itself must be freed with g_list_free(),          the list elements are owned by @tree and should not be          freed.
         */
        list_roots(): Gio.File[];
        /**
         * Signals either #TrackerIndexingTree::directory-updated or
         * #TrackerIndexingTree::child-updated on the given file and
         * returns #TRUE. If `file` is not indexed according to the
         * #TrackerIndexingTree, #FALSE is returned.
         *
         * If `recursive` is #TRUE, #TrackerIndexingTree::directory-updated
         * will be emitted on the indexing roots that are contained in `file`.
         * @param file a #GFile
         * @param recursive Whether contained indexing roots are affected by the update
         * @returns #TRUE if a signal is emitted.
         */
        notify_update(file: Gio.File, recursive: boolean): boolean;
        /**
         * returns %TRUE if `parent` should be indexed based on its contents.
         * @param parent parent directory
         * @param children children within @parent
         * @returns %TRUE if @parent should be indexed.
         */
        parent_is_indexable(parent: Gio.File, children: Gio.File[]): boolean;
        /**
         * Removes `directory` from the indexing tree, note that
         * only directories previously added with tracker_indexing_tree_add()
         * can be effectively removed.
         * @param directory #GFile pointing to a directory
         */
        remove(directory: Gio.File): void;
        /**
         * Set the default `policy` (to allow or deny) for content in `tree`
         * based on the type - in this case `filter`. Here, `filter` is a file
         * or directory and there are some other options too.
         *
         * For example, you can (by default), disable indexing all directories
         * using this function.
         * @param filter a #TrackerFilterType
         * @param policy a #TrackerFilterPolicy
         */
        set_default_policy(filter: FilterType | null, policy: FilterPolicy | null): void;
        /**
         * When indexing content, sometimes it is preferable to ignore hidden
         * content, for example, files prefixed with &quot;.&quot;. This is
         * common for files in a home directory which are usually config
         * files.
         *
         * Sets the indexing policy for `tree` with hidden files and content.
         * To ignore hidden files, `filter_hidden` should be %TRUE, otherwise
         * %FALSE.
         * @param filter_hidden a boolean
         */
        set_filter_hidden(filter_hidden: boolean): void;
    }

    namespace Miner {
        // Signal callback interfaces

        interface IgnoreNextUpdate {
            (urls: string[]): void;
        }

        interface Paused {
            (): void;
        }

        interface Progress {
            (status: string, progress: number, remaining_time: number): void;
        }

        interface Resumed {
            (): void;
        }

        interface Started {
            (): void;
        }

        interface Stopped {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            introspection_handler: any;
            introspectionHandler: any;
            introspection_xml: string;
            introspectionXml: string;
            name: string;
            progress: number;
            remaining_time: number;
            remainingTime: number;
            status: string;
        }
    }

    /**
     * Abstract miner object.
     */
    abstract class Miner extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<Miner>;

        // Properties

        get introspection_handler(): any;
        set introspection_handler(val: any);
        get introspectionHandler(): any;
        set introspectionHandler(val: any);
        get introspection_xml(): string;
        set introspection_xml(val: string);
        get introspectionXml(): string;
        set introspectionXml(val: string);
        get name(): string;
        get progress(): number;
        set progress(val: number);
        get remaining_time(): number;
        set remaining_time(val: number);
        get remainingTime(): number;
        set remainingTime(val: number);
        get status(): string;
        set status(val: string);

        // Constructors

        constructor(properties?: Partial<Miner.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'ignore-next-update', callback: (_source: this, urls: string[]) => void): number;
        connect_after(signal: 'ignore-next-update', callback: (_source: this, urls: string[]) => void): number;
        emit(signal: 'ignore-next-update', urls: string[]): void;
        connect(signal: 'paused', callback: (_source: this) => void): number;
        connect_after(signal: 'paused', callback: (_source: this) => void): number;
        emit(signal: 'paused'): void;
        connect(
            signal: 'progress',
            callback: (_source: this, status: string, progress: number, remaining_time: number) => void,
        ): number;
        connect_after(
            signal: 'progress',
            callback: (_source: this, status: string, progress: number, remaining_time: number) => void,
        ): number;
        emit(signal: 'progress', status: string, progress: number, remaining_time: number): void;
        connect(signal: 'resumed', callback: (_source: this) => void): number;
        connect_after(signal: 'resumed', callback: (_source: this) => void): number;
        emit(signal: 'resumed'): void;
        connect(signal: 'started', callback: (_source: this) => void): number;
        connect_after(signal: 'started', callback: (_source: this) => void): number;
        emit(signal: 'started'): void;
        connect(signal: 'stopped', callback: (_source: this) => void): number;
        connect_after(signal: 'stopped', callback: (_source: this) => void): number;
        emit(signal: 'stopped'): void;

        // Static methods

        /**
         * Gives the caller the #GQuark used to identify #TrackerMiner errors
         * in #GError structures. The #GQuark is used as the domain for the error.
         */
        static error_quark(): GLib.Quark;

        // Virtual methods

        /**
         * Tells the miner to mark `urls` are to ignore on next update.
         * @param urls the urls to mark as to ignore on next update
         */
        vfunc_ignore_next_update(urls: string[]): void;
        vfunc_paused(): void;
        vfunc_progress(status: string, progress: number): void;
        vfunc_resumed(): void;
        vfunc_started(): void;
        vfunc_stopped(): void;

        // Methods

        /**
         * Gets the #TrackerSparqlConnection initialized by `miner`
         * @returns a #TrackerSparqlConnection.
         */
        get_connection(): Tracker.SparqlConnection;
        /**
         * Gets the #GDBusConnection initialized by `miner`
         * @returns a #GDBusConnection.
         */
        get_dbus_connection(): Gio.DBusConnection;
        /**
         * Gets the DBus name registered by `miner`
         * @returns a constant string which should not be modified by the caller.
         */
        get_dbus_full_name(): string;
        /**
         * Gets the DBus path registered by `miner`
         * @returns a constant string which should not be modified by the caller.
         */
        get_dbus_full_path(): string;
        /**
         * Returns the number of pause reasons holding `miner` from
         * indexing contents.
         * @returns The number of current pause reasons
         */
        get_n_pause_reasons(): number;
        /**
         * Tells the miner to mark `urls` are to ignore on next update.
         * @param urls the urls to mark as to ignore on next update
         */
        ignore_next_update(urls: string[]): void;
        /**
         * Returns #TRUE if the miner is paused.
         * @returns #TRUE if the miner is paused.
         */
        is_paused(): boolean;
        /**
         * Returns #TRUE if the miner has been started.
         * @returns #TRUE if the miner is already started.
         */
        is_started(): boolean;
        /**
         * Asks `miner` to pause. On success the cookie ID is returned,
         * this is what must be used in tracker_miner_resume() to resume
         * operations. On failure `error` will be set and -1 will be returned.
         * @param reason reason to pause
         * @returns The pause cookie ID.
         */
        pause(reason: string): number;
        /**
         * Asks the miner to resume processing. The cookie must be something
         * returned by tracker_miner_pause(). The miner won't actually resume
         * operations until all pause requests have been resumed.
         * @param cookie pause cookie
         * @returns #TRUE if the cookie was valid.
         */
        resume(cookie: number): boolean;
        /**
         * Tells the miner to start processing data.
         */
        start(): void;
        /**
         * Tells the miner to stop processing data.
         */
        stop(): void;

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
            flags: GObject.BindingFlags | null,
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
            flags: GObject.BindingFlags | null,
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
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
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
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    namespace MinerFS {
        // Signal callback interfaces

        interface Finished {
            (
                elapsed: number,
                directories_found: number,
                directories_ignored: number,
                files_found: number,
                files_ignored: number,
            ): void;
        }

        interface FinishedRoot {
            (file: Gio.File): void;
        }

        interface IgnoreNextUpdateFile {
            (file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null): boolean;
        }

        interface ProcessFile {
            (file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null): boolean;
        }

        interface ProcessFileAttributes {
            (file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null): boolean;
        }

        interface RemoveFile {
            (file: Gio.File, children_only: boolean, builder: Tracker.SparqlBuilder): boolean;
        }

        interface WritebackFile {
            (file: Gio.File, rdf_types: string[], results: string[][], cancellable?: Gio.Cancellable | null): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends Miner.ConstructorProps, Gio.Initable.ConstructorProps {
            data_provider: DataProvider;
            dataProvider: DataProvider;
            initial_crawling: boolean;
            initialCrawling: boolean;
            mtime_checking: boolean;
            mtimeChecking: boolean;
            processing_pool_ready_limit: number;
            processingPoolReadyLimit: number;
            processing_pool_wait_limit: number;
            processingPoolWaitLimit: number;
            root: Gio.File;
            throttle: number;
        }
    }

    /**
     * Abstract miner implementation to get data from the filesystem.
     */
    abstract class MinerFS extends Miner implements Gio.Initable {
        static $gtype: GObject.GType<MinerFS>;

        // Properties

        get data_provider(): DataProvider;
        get dataProvider(): DataProvider;
        get initial_crawling(): boolean;
        set initial_crawling(val: boolean);
        get initialCrawling(): boolean;
        set initialCrawling(val: boolean);
        get mtime_checking(): boolean;
        set mtime_checking(val: boolean);
        get mtimeChecking(): boolean;
        set mtimeChecking(val: boolean);
        get processing_pool_ready_limit(): number;
        set processing_pool_ready_limit(val: number);
        get processingPoolReadyLimit(): number;
        set processingPoolReadyLimit(val: number);
        get processing_pool_wait_limit(): number;
        set processing_pool_wait_limit(val: number);
        get processingPoolWaitLimit(): number;
        set processingPoolWaitLimit(val: number);
        get root(): Gio.File;
        get throttle(): number;
        set throttle(val: number);

        // Constructors

        constructor(properties?: Partial<MinerFS.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(
            signal: 'finished',
            callback: (
                _source: this,
                elapsed: number,
                directories_found: number,
                directories_ignored: number,
                files_found: number,
                files_ignored: number,
            ) => void,
        ): number;
        connect_after(
            signal: 'finished',
            callback: (
                _source: this,
                elapsed: number,
                directories_found: number,
                directories_ignored: number,
                files_found: number,
                files_ignored: number,
            ) => void,
        ): number;
        emit(
            signal: 'finished',
            elapsed: number,
            directories_found: number,
            directories_ignored: number,
            files_found: number,
            files_ignored: number,
        ): void;
        connect(signal: 'finished-root', callback: (_source: this, file: Gio.File) => void): number;
        connect_after(signal: 'finished-root', callback: (_source: this, file: Gio.File) => void): number;
        emit(signal: 'finished-root', file: Gio.File): void;
        connect(
            signal: 'ignore-next-update-file',
            callback: (
                _source: this,
                file: Gio.File,
                builder: Tracker.SparqlBuilder,
                cancellable: Gio.Cancellable | null,
            ) => boolean,
        ): number;
        connect_after(
            signal: 'ignore-next-update-file',
            callback: (
                _source: this,
                file: Gio.File,
                builder: Tracker.SparqlBuilder,
                cancellable: Gio.Cancellable | null,
            ) => boolean,
        ): number;
        emit(
            signal: 'ignore-next-update-file',
            file: Gio.File,
            builder: Tracker.SparqlBuilder,
            cancellable?: Gio.Cancellable | null,
        ): void;
        connect(
            signal: 'process-file',
            callback: (
                _source: this,
                file: Gio.File,
                builder: Tracker.SparqlBuilder,
                cancellable: Gio.Cancellable | null,
            ) => boolean,
        ): number;
        connect_after(
            signal: 'process-file',
            callback: (
                _source: this,
                file: Gio.File,
                builder: Tracker.SparqlBuilder,
                cancellable: Gio.Cancellable | null,
            ) => boolean,
        ): number;
        emit(
            signal: 'process-file',
            file: Gio.File,
            builder: Tracker.SparqlBuilder,
            cancellable?: Gio.Cancellable | null,
        ): void;
        connect(
            signal: 'process-file-attributes',
            callback: (
                _source: this,
                file: Gio.File,
                builder: Tracker.SparqlBuilder,
                cancellable: Gio.Cancellable | null,
            ) => boolean,
        ): number;
        connect_after(
            signal: 'process-file-attributes',
            callback: (
                _source: this,
                file: Gio.File,
                builder: Tracker.SparqlBuilder,
                cancellable: Gio.Cancellable | null,
            ) => boolean,
        ): number;
        emit(
            signal: 'process-file-attributes',
            file: Gio.File,
            builder: Tracker.SparqlBuilder,
            cancellable?: Gio.Cancellable | null,
        ): void;
        connect(
            signal: 'remove-file',
            callback: (
                _source: this,
                file: Gio.File,
                children_only: boolean,
                builder: Tracker.SparqlBuilder,
            ) => boolean,
        ): number;
        connect_after(
            signal: 'remove-file',
            callback: (
                _source: this,
                file: Gio.File,
                children_only: boolean,
                builder: Tracker.SparqlBuilder,
            ) => boolean,
        ): number;
        emit(signal: 'remove-file', file: Gio.File, children_only: boolean, builder: Tracker.SparqlBuilder): void;
        connect(
            signal: 'writeback-file',
            callback: (
                _source: this,
                file: Gio.File,
                rdf_types: string[],
                results: string[][],
                cancellable: Gio.Cancellable | null,
            ) => boolean,
        ): number;
        connect_after(
            signal: 'writeback-file',
            callback: (
                _source: this,
                file: Gio.File,
                rdf_types: string[],
                results: string[][],
                cancellable: Gio.Cancellable | null,
            ) => boolean,
        ): number;
        emit(
            signal: 'writeback-file',
            file: Gio.File,
            rdf_types: string[],
            results: string[][],
            cancellable?: Gio.Cancellable | null,
        ): void;

        // Static methods

        /**
         * Gives the caller the #GQuark used to identify #TrackerMinerFS errors
         * in #GError structures. The #GQuark is used as the domain for the error.
         */
        static error_quark(): GLib.Quark;

        // Virtual methods

        vfunc_finished(
            elapsed: number,
            directories_found: number,
            directories_ignored: number,
            files_found: number,
            files_ignored: number,
        ): void;
        vfunc_finished_root(
            root: Gio.File,
            directories_found: number,
            directories_ignored: number,
            files_found: number,
            files_ignored: number,
        ): void;
        vfunc_ignore_next_update_file(
            file: Gio.File,
            builder: Tracker.SparqlBuilder,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        vfunc_process_file(
            file: Gio.File,
            builder: Tracker.SparqlBuilder,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        vfunc_process_file_attributes(
            file: Gio.File,
            builder: Tracker.SparqlBuilder,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        vfunc_remove_file(file: Gio.File, children_only: boolean, builder: Tracker.SparqlBuilder): boolean;

        // Methods

        /**
         * Tells the miner-fs that the given #GFile corresponds to a
         * directory which was created in the store without a specific
         * parent object. In this case, when regenerating internal
         * caches, an extra query will be done so that these elements
         * are taken into account.
         * @param file a #GFile
         */
        add_directory_without_parent(file: Gio.File): void;
        /**
         * Tells the filesystem miner to check and index a directory,
         * this file must be part of the usual crawling directories
         * of #TrackerMinerFS. See tracker_miner_fs_directory_add().
         * @param file #GFile for the directory to check
         * @param check_parents whether to check parents and eligibility or not
         */
        check_directory(file: Gio.File, check_parents: boolean): void;
        /**
         * Tells the filesystem miner to check and index a directory at
         * a given priority, this file must be part of the usual crawling
         * directories of #TrackerMinerFS. See tracker_miner_fs_directory_add().
         * @param file #GFile for the directory to check
         * @param priority the priority of the check task
         * @param check_parents whether to check parents and eligibility or not
         */
        check_directory_with_priority(file: Gio.File, priority: number, check_parents: boolean): void;
        /**
         * Tells the filesystem miner to check and index a file,
         * this file must be part of the usual crawling directories
         * of #TrackerMinerFS. See tracker_miner_fs_directory_add().
         * @param file #GFile for the file to check
         * @param check_parents whether to check parents and eligibility or not
         */
        check_file(file: Gio.File, check_parents: boolean): void;
        /**
         * Tells the filesystem miner to check and index a file at
         * a given priority, this file must be part of the usual
         * crawling directories of #TrackerMinerFS. See
         * tracker_miner_fs_directory_add().
         * @param file #GFile for the file to check
         * @param priority the priority of the check task
         * @param check_parents whether to check parents and eligibility or not
         */
        check_file_with_priority(file: Gio.File, priority: number, check_parents: boolean): void;
        /**
         * Tells the filesystem miner to inspect a directory.
         * @param file #GFile for the directory to inspect
         * @param recurse whether the directory should be inspected recursively
         */
        directory_add(file: Gio.File, recurse: boolean): void;
        /**
         * Removes a directory from being inspected by `fs`. Note that only directory
         *  watches are removed.
         * @param file #GFile for the directory to be removed
         * @returns %TRUE if the directory was successfully removed.
         */
        directory_remove(file: Gio.File): boolean;
        /**
         * Removes a directory from being inspected by `fs,` and removes all
         * associated metadata of the directory (and its contents) from the
         * store.
         * @param file #GFile for the directory to be removed
         * @returns %TRUE if the directory was successfully removed.
         */
        directory_remove_full(file: Gio.File): boolean;
        /**
         * Notifies `fs` that all processing on `file` has been finished, if any error
         * happened during file data processing, it should be passed in `error,` else
         * that parameter will contain %NULL to reflect success.
         * @param file a #GFile
         * @param error a #GError with the error that happened during processing, or %NULL.
         */
        file_notify(file: Gio.File, error: GLib.Error): void;
        /**
         * Tells `fs` to force mtime checking (regardless of the global mtime check
         * configuration) on the given `directory`.
         * @param directory a #GFile representing the directory
         */
        force_mtime_checking(directory: Gio.File): void;
        force_recheck(): void;
        /**
         * Returns the #TrackerDataProvider implementation, which is being used
         * to supply #GFile and #GFileInfo content to Tracker.
         * @returns The #TrackerDataProvider supplying content
         */
        get_data_provider(): DataProvider;
        /**
         * Returns the #TrackerIndexingTree which determines
         * what files/directories are indexed by `fs`
         * @returns The #TrackerIndexingTree          holding the indexing configuration
         */
        get_indexing_tree(): IndexingTree;
        /**
         * Returns a boolean which indicates if the indexing tree is crawled
         * upon start up or not. This may be set to %FALSE if working
         * prodominently with cloud data where you can't perform these checks.
         * By default and for local file systems, this is enabled.
         * @returns %TRUE if a file system structure is crawled for new updates on start up, otherwise %FALSE.
         */
        get_initial_crawling(): boolean;
        /**
         * Returns a boolean used to identify if file modification time checks
         * are performed when processing content. This may be set to %FALSE if
         * working prodominently with cloud data where you can't perform these
         * checks. By default and for local file systems, this is enabled.
         * @returns %TRUE if mtime checks for directories against the database are done when @fs crawls the file system, otherwise %FALSE.
         */
        get_mtime_checking(): boolean;
        /**
         * If `file` is currently being processed by `fs,` this function
         * will return the parent folder URN if any. This function is
         * useful to set the nie:belongsToContainer relationship. The
         * processing order of #TrackerMinerFS guarantees that a folder
         * has been already fully processed for indexing before any
         * children is processed, so most usually this function should
         * return non-%NULL.
         * @param file a #GFile obtained in #TrackerMinerFS::process-file
         * @returns The parent folder URN, or %NULL.
         */
        get_parent_urn(file: Gio.File): string | null;
        /**
         * Gets the current throttle value, see
         * tracker_miner_fs_set_throttle() for more details.
         * @returns a double representing a value between 0.0 and 1.0.
         */
        get_throttle(): number;
        /**
         * If the item exists in the store, this function retrieves
         * the URN for a #GFile being currently processed.
         *
         * If `file` is not being currently processed by `fs,` or doesn't
         * exist in the store yet, %NULL will be returned.
         * @param file a #GFile obtained in #TrackerMinerFS::process-file
         * @returns The URN containing the data associated to @file,          or %NULL.
         */
        get_urn(file: Gio.File): string | null;
        /**
         * The `fs` keeps many priority queus for content it is processing.
         * This function returns %TRUE if the sum of all (or any) priority
         * queues is more than 0. This includes items deleted, created,
         * updated, moved or being written back.
         * @returns %TRUE if there are items to process in the internal queues, otherwise %FALSE.
         */
        has_items_to_process(): boolean;
        /**
         * If the item exists in the store, this function retrieves
         * the URN of the given #GFile
         *
         * If `file` doesn't exist in the store yet, %NULL will be returned.
         * @param file a #GFile
         * @returns A newly allocated string with the URN containing the data associated          to @file, or %NULL.
         */
        query_urn(file: Gio.File): string;
        /**
         * Tells the `fs` that crawling the #TrackerIndexingTree should happen
         * initially. This is actually required to set up file system monitor
         * using technologies like inotify, etc.
         *
         * Setting this to #FALSE can dramatically improve the start up the
         * crawling of the `fs`.
         *
         * The down side is that using this consistently means that some files
         * on the disk may be out of date with files in the database.
         *
         * The main purpose of this function is for systems where a `fs` is
         * running the entire time and where it is very unlikely that a file
         * could be changed outside between startup and shutdown of the
         * process using this API.
         *
         * The default if not set directly is that `do_initial_crawling` is %TRUE.
         * @param do_initial_crawling a #gboolean
         */
        set_initial_crawling(do_initial_crawling: boolean): void;
        /**
         * Tells the miner-fs that during the crawling phase, directory mtime
         * checks should or shouldn't be performed against the database to
         * make sure we have the most up to date version of the file being
         * checked at the time. Setting this to #FALSE can dramatically
         * improve the start up the crawling of the `fs`.
         *
         * The down side is that using this consistently means that some files
         * on the disk may be out of date with files in the database.
         *
         * The main purpose of this function is for systems where a `fs` is
         * running the entire time and where it is very unlikely that a file
         * could be changed outside between startup and shutdown of the
         * process using this API.
         *
         * The default if not set directly is that `mtime_checking` is %TRUE.
         * @param mtime_checking a #gboolean
         */
        set_mtime_checking(mtime_checking: boolean): void;
        /**
         * Tells the filesystem miner to throttle its operations. A value of
         * 0.0 means no throttling at all, so the miner will perform
         * operations at full speed, 1.0 is the slowest value. With a value of
         * 1.0, the `fs` is typically waiting one full second before handling
         * the next batch of queued items to be processed.
         * @param throttle a double between 0.0 and 1.0
         */
        set_throttle(throttle: number): void;
        /**
         * Tells the filesystem miner to writeback a file.
         * @param file #GFile for the file to check
         * @param rdf_types A #GStrv with rdf types
         * @param results A array of results from the preparation query
         */
        writeback_file(file: Gio.File, rdf_types: string[], results: string[][]): void;
        /**
         * Notifies `fs` that all writing back on `file` has been finished, if any error
         * happened during file data processing, it should be passed in `error,` else
         * that parameter will contain %NULL to reflect success.
         * @param file a #GFile
         * @param error a #GError with the error that happened during processing, or %NULL.
         */
        writeback_notify(file: Gio.File, error: GLib.Error): void;

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
            flags: GObject.BindingFlags | null,
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
            flags: GObject.BindingFlags | null,
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
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
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
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    namespace MinerOnline {
        // Signal callback interfaces

        interface Connected {
            (type: NetworkType): boolean;
        }

        interface Disconnected {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Miner.ConstructorProps, Gio.Initable.ConstructorProps {
            network_type: NetworkType;
            networkType: NetworkType;
        }
    }

    /**
     * Abstract miner object for data requiring connectivity.
     */
    abstract class MinerOnline extends Miner implements Gio.Initable {
        static $gtype: GObject.GType<MinerOnline>;

        // Properties

        get network_type(): NetworkType;
        get networkType(): NetworkType;

        // Constructors

        constructor(properties?: Partial<MinerOnline.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'connected', callback: (_source: this, type: NetworkType) => boolean): number;
        connect_after(signal: 'connected', callback: (_source: this, type: NetworkType) => boolean): number;
        emit(signal: 'connected', type: NetworkType): void;
        connect(signal: 'disconnected', callback: (_source: this) => void): number;
        connect_after(signal: 'disconnected', callback: (_source: this) => void): number;
        emit(signal: 'disconnected'): void;

        // Virtual methods

        vfunc_connected(network: NetworkType): boolean;
        vfunc_disconnected(): void;

        // Methods

        /**
         * Get the type of network this data `miner` uses to index content.
         * @returns a #TrackerNetworkType on success or #TRACKER_NETWORK_TYPE_NONE on error.
         */
        get_network_type(): NetworkType;

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
            flags: GObject.BindingFlags | null,
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
            flags: GObject.BindingFlags | null,
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
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
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
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    type DataProviderIface = typeof DataProvider;
    type DecoratorClass = typeof Decorator;
    type DecoratorFSClass = typeof DecoratorFS;
    class DecoratorInfo {
        static $gtype: GObject.GType<DecoratorInfo>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * A MIME¹ type is a way of describing the content type of a file or
         * set of data. An example would be 'text/plain' for a clear text
         * document or file.
         *
         * ¹: http://en.wikipedia.org/wiki/MIME
         * @returns the MIME type for #TrackerDecoratorInfo on success or #NULL on error.
         */
        get_mimetype(): string;
        /**
         * A #TrackerSparqlBuilder allows the caller to extract the final
         * SPARQL used to insert the extracted metadata into the database for
         * the resource being processed.
         *
         * This function calls g_task_get_task_data() on the return value of
         * tracker_decorator_info_get_task().
         * @returns a #TrackerSparqlBuilder on success or #NULL on error.
         */
        get_sparql(): Tracker.SparqlBuilder;
        /**
         * Get the #GTask associated with retrieving extended metadata and
         * information for a URN in Tracker.
         *
         * The task object's data (accessible with g_task_get_task_data()) is the
         * #TrackerSparqlBuilder that you must populate with the results of the
         * metadata extraction. This can also be accessed with
         * tracker_decorator_info_get_sparql().
         * @returns the #GTask for #TrackerDecoratorInfo on success or #NULL if there is no existing #GTask.
         */
        get_task(): Gio.Task;
        /**
         * A URL is a Uniform Resource Locator and should be a location associated
         * with a resource in the database. For example, 'file:///tmp/foo.txt'.
         * @returns the URL for #TrackerDecoratorInfo on success or #NULL on error.
         */
        get_url(): string;
        /**
         * A URN is a Uniform Resource Name and should be a unique identifier
         * for a resource in the database.
         * @returns the URN for #TrackerDecoratorInfo on success or #NULL on error.
         */
        get_urn(): string;
        /**
         * Increases the reference count of `info` by 1.
         * @returns the same @info passed in, or %NULL on error.
         */
        ref(): DecoratorInfo;
        /**
         * Decreases the reference count of `info` by 1 and frees it when the
         * reference count reaches 0.
         */
        unref(): void;
    }

    type EnumeratorIface = typeof Enumerator;
    type IndexingTreeClass = typeof IndexingTree;
    type MinerClass = typeof Miner;
    type MinerFSClass = typeof MinerFS;
    abstract class MinerFSPrivate {
        static $gtype: GObject.GType<MinerFSPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type MinerOnlineClass = typeof MinerOnline;
    abstract class MinerPrivate {
        static $gtype: GObject.GType<MinerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    namespace DataProvider {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface DataProviderNamespace {
        $gtype: GObject.GType<DataProvider>;
        prototype: DataProvider;
    }
    interface DataProvider extends GObject.Object {
        // Methods

        /**
         * Creates a #TrackerEnumerator to enumerate children at the URI
         * provided by `url`.
         *
         * The attributes value is a string that specifies the file attributes
         * that should be gathered. It is not an error if it's not possible to
         * read a particular requested attribute from a file - it just won't
         * be set. attributes should be a comma-separated list of attributes
         * or attribute wildcards. The wildcard "*" means all attributes, and
         * a wildcard like "standard::*" means all attributes in the standard
         * namespace. An example attribute query be "standard::*,owner::user".
         * The standard attributes are available as defines, like
         * G_FILE_ATTRIBUTE_STANDARD_NAME. See g_file_enumerate_children() for
         * more details.
         * @param url a #GFile to enumerate
         * @param attributes an attribute query string
         * @param flags a set of #TrackerDirectoryFlags
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns a #TrackerEnumerator or %NULL on failure. This must be freed with g_object_unref().
         */
        begin(
            url: Gio.File,
            attributes: string,
            flags: DirectoryFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): Enumerator;
        /**
         * Precisely the same operation as tracker_data_provider_begin()
         * is performing, but asynchronously.
         *
         * When all i/o for the operation is finished the `callback` will be
         * called with the requested information.
         *
         * See the documentation of #TrackerDataProvider for information about the
         * order of returned files.
         *
         * In case of a partial error the callback will be called with any
         * succeeding items and no error, and on the next request the error
         * will be reported. If a request is cancelled the callback will be
         * called with %G_IO_ERROR_CANCELLED.
         *
         * During an async request no other sync and async calls are allowed,
         * and will result in %G_IO_ERROR_PENDING errors.
         *
         * Any outstanding i/o request with higher priority (lower numerical
         * value) will be executed before an outstanding request with lower
         * priority. Default priority is %G_PRIORITY_DEFAULT.
         * @param url a #GFile to enumerate
         * @param attributes an attribute query string
         * @param flags a set of #TrackerDirectoryFlags
         * @param io_priority the [I/O priority][io-priority] of the request
         * @param cancellable optional #GCancellable object, %NULL to ignore
         */
        begin_async(
            url: Gio.File,
            attributes: string,
            flags: DirectoryFlags | null,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
        ): Promise<Enumerator>;
        /**
         * Precisely the same operation as tracker_data_provider_begin()
         * is performing, but asynchronously.
         *
         * When all i/o for the operation is finished the `callback` will be
         * called with the requested information.
         *
         * See the documentation of #TrackerDataProvider for information about the
         * order of returned files.
         *
         * In case of a partial error the callback will be called with any
         * succeeding items and no error, and on the next request the error
         * will be reported. If a request is cancelled the callback will be
         * called with %G_IO_ERROR_CANCELLED.
         *
         * During an async request no other sync and async calls are allowed,
         * and will result in %G_IO_ERROR_PENDING errors.
         *
         * Any outstanding i/o request with higher priority (lower numerical
         * value) will be executed before an outstanding request with lower
         * priority. Default priority is %G_PRIORITY_DEFAULT.
         * @param url a #GFile to enumerate
         * @param attributes an attribute query string
         * @param flags a set of #TrackerDirectoryFlags
         * @param io_priority the [I/O priority][io-priority] of the request
         * @param cancellable optional #GCancellable object, %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        begin_async(
            url: Gio.File,
            attributes: string,
            flags: DirectoryFlags | null,
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Precisely the same operation as tracker_data_provider_begin()
         * is performing, but asynchronously.
         *
         * When all i/o for the operation is finished the `callback` will be
         * called with the requested information.
         *
         * See the documentation of #TrackerDataProvider for information about the
         * order of returned files.
         *
         * In case of a partial error the callback will be called with any
         * succeeding items and no error, and on the next request the error
         * will be reported. If a request is cancelled the callback will be
         * called with %G_IO_ERROR_CANCELLED.
         *
         * During an async request no other sync and async calls are allowed,
         * and will result in %G_IO_ERROR_PENDING errors.
         *
         * Any outstanding i/o request with higher priority (lower numerical
         * value) will be executed before an outstanding request with lower
         * priority. Default priority is %G_PRIORITY_DEFAULT.
         * @param url a #GFile to enumerate
         * @param attributes an attribute query string
         * @param flags a set of #TrackerDirectoryFlags
         * @param io_priority the [I/O priority][io-priority] of the request
         * @param cancellable optional #GCancellable object, %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        begin_async(
            url: Gio.File,
            attributes: string,
            flags: DirectoryFlags | null,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<Enumerator> | void;
        /**
         * Finishes the asynchronous operation started with
         * tracker_data_provider_begin_async().
         * @param result a #GAsyncResult.
         * @returns a #TrackerEnumerator or %NULL on failure. This must be freed with g_object_unref().
         */
        begin_finish(result: Gio.AsyncResult): Enumerator;
        /**
         * Closes any caches or operations related to creating the
         * #TrackerEnumerator to enumerate data at `url`.
         *
         * The attributes value is a string that specifies the file attributes
         * that should be gathered. It is not an error if it's not possible to
         * read a particular requested attribute from a file - it just won't
         * be set. attributes should be a comma-separated list of attributes
         * or attribute wildcards. The wildcard "*" means all attributes, and
         * a wildcard like "standard::*" means all attributes in the standard
         * namespace. An example attribute query be "standard::*,owner::user".
         * The standard attributes are available as defines, like
         * G_FILE_ATTRIBUTE_STANDARD_NAME. See g_file_enumerate_children() for
         * more details.
         * @param enumerator a #TrackerEnumerator originally created by tracker_data_provider_begin().
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE on success, otherwise %FALSE and @error is set.
         */
        end(enumerator: Enumerator, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Precisely the same operation as tracker_data_provider_end()
         * is performing, but asynchronously.
         *
         * When all i/o for the operation is finished the `callback` will be
         * called with the requested information.
         *
         * See the documentation of #TrackerDataProvider for information about the
         * order of returned files.
         *
         * In case of a partial error the callback will be called with any
         * succeeding items and no error, and on the next request the error
         * will be reported. If a request is cancelled the callback will be
         * called with %G_IO_ERROR_CANCELLED.
         *
         * During an async request no other sync and async calls are allowed,
         * and will result in %G_IO_ERROR_PENDING errors.
         *
         * Any outstanding i/o request with higher priority (lower numerical
         * value) will be executed before an outstanding request with lower
         * priority. Default priority is %G_PRIORITY_DEFAULT.
         * @param enumerator a #TrackerEnumerator originally created by tracker_data_provider_begin().
         * @param io_priority the [I/O priority][io-priority] of the request
         * @param cancellable optional #GCancellable object, %NULL to ignore
         */
        end_async(enumerator: Enumerator, io_priority: number, cancellable?: Gio.Cancellable | null): Promise<boolean>;
        /**
         * Precisely the same operation as tracker_data_provider_end()
         * is performing, but asynchronously.
         *
         * When all i/o for the operation is finished the `callback` will be
         * called with the requested information.
         *
         * See the documentation of #TrackerDataProvider for information about the
         * order of returned files.
         *
         * In case of a partial error the callback will be called with any
         * succeeding items and no error, and on the next request the error
         * will be reported. If a request is cancelled the callback will be
         * called with %G_IO_ERROR_CANCELLED.
         *
         * During an async request no other sync and async calls are allowed,
         * and will result in %G_IO_ERROR_PENDING errors.
         *
         * Any outstanding i/o request with higher priority (lower numerical
         * value) will be executed before an outstanding request with lower
         * priority. Default priority is %G_PRIORITY_DEFAULT.
         * @param enumerator a #TrackerEnumerator originally created by tracker_data_provider_begin().
         * @param io_priority the [I/O priority][io-priority] of the request
         * @param cancellable optional #GCancellable object, %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        end_async(
            enumerator: Enumerator,
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Precisely the same operation as tracker_data_provider_end()
         * is performing, but asynchronously.
         *
         * When all i/o for the operation is finished the `callback` will be
         * called with the requested information.
         *
         * See the documentation of #TrackerDataProvider for information about the
         * order of returned files.
         *
         * In case of a partial error the callback will be called with any
         * succeeding items and no error, and on the next request the error
         * will be reported. If a request is cancelled the callback will be
         * called with %G_IO_ERROR_CANCELLED.
         *
         * During an async request no other sync and async calls are allowed,
         * and will result in %G_IO_ERROR_PENDING errors.
         *
         * Any outstanding i/o request with higher priority (lower numerical
         * value) will be executed before an outstanding request with lower
         * priority. Default priority is %G_PRIORITY_DEFAULT.
         * @param enumerator a #TrackerEnumerator originally created by tracker_data_provider_begin().
         * @param io_priority the [I/O priority][io-priority] of the request
         * @param cancellable optional #GCancellable object, %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        end_async(
            enumerator: Enumerator,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<boolean> | void;
        /**
         * Finishes the asynchronous operation started with
         * tracker_data_provider_end_async().
         * @param result a #GAsyncResult.
         * @returns %TRUE on success, otherwise %FALSE and @error is set.
         */
        end_finish(result: Gio.AsyncResult): boolean;

        // Virtual methods

        /**
         * Creates a #TrackerEnumerator to enumerate children at the URI
         * provided by `url`.
         *
         * The attributes value is a string that specifies the file attributes
         * that should be gathered. It is not an error if it's not possible to
         * read a particular requested attribute from a file - it just won't
         * be set. attributes should be a comma-separated list of attributes
         * or attribute wildcards. The wildcard "*" means all attributes, and
         * a wildcard like "standard::*" means all attributes in the standard
         * namespace. An example attribute query be "standard::*,owner::user".
         * The standard attributes are available as defines, like
         * G_FILE_ATTRIBUTE_STANDARD_NAME. See g_file_enumerate_children() for
         * more details.
         * @param url a #GFile to enumerate
         * @param attributes an attribute query string
         * @param flags a set of #TrackerDirectoryFlags
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_begin(
            url: Gio.File,
            attributes: string,
            flags: DirectoryFlags,
            cancellable?: Gio.Cancellable | null,
        ): Enumerator;
        /**
         * Precisely the same operation as tracker_data_provider_begin()
         * is performing, but asynchronously.
         *
         * When all i/o for the operation is finished the `callback` will be
         * called with the requested information.
         *
         * See the documentation of #TrackerDataProvider for information about the
         * order of returned files.
         *
         * In case of a partial error the callback will be called with any
         * succeeding items and no error, and on the next request the error
         * will be reported. If a request is cancelled the callback will be
         * called with %G_IO_ERROR_CANCELLED.
         *
         * During an async request no other sync and async calls are allowed,
         * and will result in %G_IO_ERROR_PENDING errors.
         *
         * Any outstanding i/o request with higher priority (lower numerical
         * value) will be executed before an outstanding request with lower
         * priority. Default priority is %G_PRIORITY_DEFAULT.
         * @param url a #GFile to enumerate
         * @param attributes an attribute query string
         * @param flags a set of #TrackerDirectoryFlags
         * @param io_priority the [I/O priority][io-priority] of the request
         * @param cancellable optional #GCancellable object, %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        vfunc_begin_async(
            url: Gio.File,
            attributes: string,
            flags: DirectoryFlags,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the asynchronous operation started with
         * tracker_data_provider_begin_async().
         * @param result a #GAsyncResult.
         */
        vfunc_begin_finish(result: Gio.AsyncResult): Enumerator;
        /**
         * Closes any caches or operations related to creating the
         * #TrackerEnumerator to enumerate data at `url`.
         *
         * The attributes value is a string that specifies the file attributes
         * that should be gathered. It is not an error if it's not possible to
         * read a particular requested attribute from a file - it just won't
         * be set. attributes should be a comma-separated list of attributes
         * or attribute wildcards. The wildcard "*" means all attributes, and
         * a wildcard like "standard::*" means all attributes in the standard
         * namespace. An example attribute query be "standard::*,owner::user".
         * The standard attributes are available as defines, like
         * G_FILE_ATTRIBUTE_STANDARD_NAME. See g_file_enumerate_children() for
         * more details.
         * @param enumerator a #TrackerEnumerator originally created by tracker_data_provider_begin().
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_end(enumerator: Enumerator, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Precisely the same operation as tracker_data_provider_end()
         * is performing, but asynchronously.
         *
         * When all i/o for the operation is finished the `callback` will be
         * called with the requested information.
         *
         * See the documentation of #TrackerDataProvider for information about the
         * order of returned files.
         *
         * In case of a partial error the callback will be called with any
         * succeeding items and no error, and on the next request the error
         * will be reported. If a request is cancelled the callback will be
         * called with %G_IO_ERROR_CANCELLED.
         *
         * During an async request no other sync and async calls are allowed,
         * and will result in %G_IO_ERROR_PENDING errors.
         *
         * Any outstanding i/o request with higher priority (lower numerical
         * value) will be executed before an outstanding request with lower
         * priority. Default priority is %G_PRIORITY_DEFAULT.
         * @param enumerator a #TrackerEnumerator originally created by tracker_data_provider_begin().
         * @param io_priority the [I/O priority][io-priority] of the request
         * @param cancellable optional #GCancellable object, %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        vfunc_end_async(
            enumerator: Enumerator,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the asynchronous operation started with
         * tracker_data_provider_end_async().
         * @param result a #GAsyncResult.
         */
        vfunc_end_finish(result: Gio.AsyncResult): boolean;
    }

    export const DataProvider: DataProviderNamespace & {
        new (): DataProvider; // This allows `obj instanceof DataProvider`
    };

    namespace Enumerator {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface EnumeratorNamespace {
        $gtype: GObject.GType<Enumerator>;
        prototype: Enumerator;
    }
    interface Enumerator extends GObject.Object {
        // Methods

        /**
         * Enumerates to the next piece of data according to the `enumerator`
         * implementation.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns Returns a #gpointer with the next item from the @enumerator, or %NULL when @error is set or the operation was cancelled in @cancellable. The data must be freed. The function to free depends on the data returned by the enumerator and the #TrackerDataProvider that created the @enumerator.
         */
        next(cancellable?: Gio.Cancellable | null): any | null;
        /**
         * Precisely the same operation as tracker_enumerator_next()
         * is performing, but asynchronously.
         *
         * When all i/o for the operation is finished the `callback` will be
         * called with the requested information.
         *
         * In case of a partial error the callback will be called with any
         * succeeding items and no error, and on the next request the error
         * will be reported. If a request is cancelled the callback will be
         * called with %G_IO_ERROR_CANCELLED.
         *
         * During an async request no other sync and async calls are allowed,
         * and will result in %G_IO_ERROR_PENDING errors.
         *
         * Any outstanding i/o request with higher priority (lower numerical
         * value) will be executed before an outstanding request with lower
         * priority. Default priority is %G_PRIORITY_DEFAULT.
         * @param io_priority the [I/O priority][io-priority] of the request
         * @param cancellable optional #GCancellable object, %NULL to ignore
         */
        next_async(io_priority: number, cancellable?: Gio.Cancellable | null): Promise<any | null>;
        /**
         * Precisely the same operation as tracker_enumerator_next()
         * is performing, but asynchronously.
         *
         * When all i/o for the operation is finished the `callback` will be
         * called with the requested information.
         *
         * In case of a partial error the callback will be called with any
         * succeeding items and no error, and on the next request the error
         * will be reported. If a request is cancelled the callback will be
         * called with %G_IO_ERROR_CANCELLED.
         *
         * During an async request no other sync and async calls are allowed,
         * and will result in %G_IO_ERROR_PENDING errors.
         *
         * Any outstanding i/o request with higher priority (lower numerical
         * value) will be executed before an outstanding request with lower
         * priority. Default priority is %G_PRIORITY_DEFAULT.
         * @param io_priority the [I/O priority][io-priority] of the request
         * @param cancellable optional #GCancellable object, %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        next_async(
            io_priority: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Precisely the same operation as tracker_enumerator_next()
         * is performing, but asynchronously.
         *
         * When all i/o for the operation is finished the `callback` will be
         * called with the requested information.
         *
         * In case of a partial error the callback will be called with any
         * succeeding items and no error, and on the next request the error
         * will be reported. If a request is cancelled the callback will be
         * called with %G_IO_ERROR_CANCELLED.
         *
         * During an async request no other sync and async calls are allowed,
         * and will result in %G_IO_ERROR_PENDING errors.
         *
         * Any outstanding i/o request with higher priority (lower numerical
         * value) will be executed before an outstanding request with lower
         * priority. Default priority is %G_PRIORITY_DEFAULT.
         * @param io_priority the [I/O priority][io-priority] of the request
         * @param cancellable optional #GCancellable object, %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        next_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<any | null> | void;
        /**
         * Finishes the asynchronous operation started with
         * tracker_enumerator_next_async().
         * @param result a #GAsyncResult.
         * @returns Returns a #gpointer with the next item from the @enumerator, or %NULL when @error is set or the operation was cancelled in @cancellable. The data must be freed. The function to free depends on the data returned by the enumerator and the #TrackerDataProvider that created the @enumerator.
         */
        next_finish(result: Gio.AsyncResult): any | null;

        // Virtual methods

        /**
         * Enumerates to the next piece of data according to the `enumerator`
         * implementation.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        vfunc_next(cancellable?: Gio.Cancellable | null): any | null;
        /**
         * Precisely the same operation as tracker_enumerator_next()
         * is performing, but asynchronously.
         *
         * When all i/o for the operation is finished the `callback` will be
         * called with the requested information.
         *
         * In case of a partial error the callback will be called with any
         * succeeding items and no error, and on the next request the error
         * will be reported. If a request is cancelled the callback will be
         * called with %G_IO_ERROR_CANCELLED.
         *
         * During an async request no other sync and async calls are allowed,
         * and will result in %G_IO_ERROR_PENDING errors.
         *
         * Any outstanding i/o request with higher priority (lower numerical
         * value) will be executed before an outstanding request with lower
         * priority. Default priority is %G_PRIORITY_DEFAULT.
         * @param io_priority the [I/O priority][io-priority] of the request
         * @param cancellable optional #GCancellable object, %NULL to ignore
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        vfunc_next_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the asynchronous operation started with
         * tracker_enumerator_next_async().
         * @param result a #GAsyncResult.
         */
        vfunc_next_finish(result: Gio.AsyncResult): any | null;
    }

    export const Enumerator: EnumeratorNamespace & {
        new (): Enumerator; // This allows `obj instanceof Enumerator`
    };

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

export default TrackerMiner;

// END
