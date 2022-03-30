/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * TrackerMiner-1.0
 */

import type * as Gjs from './Gjs';
import type Tracker from './Tracker-1.0';
import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GModule from './GModule-2.0';

export namespace TrackerMiner {

/**
 * Possible errors returned when calling tracker_decorator_next_finish().
 */
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
enum FilterPolicy {
    DENY,
    ACCEPT,
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
enum MinerFSError {
    /**
     * There was an error during
     * initialization of the object. The specific details are in the
     * message.
     */
    MINER_FS_ERROR_INIT,
}
enum NetworkType {
    NONE,
    UNKNOWN,
    GPRS,
    EDGE,
    TODO_3G,
    LAN,
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
/**
 * The name of the D-Bus interface to use for all data miners that
 * inter-operate with Tracker.
 */
const MINER_DBUS_INTERFACE: string
/**
 * D-Bus name prefix to use for all data miners. This allows custom
 * miners to be written using `TRACKER_MINER_DBUS_NAME_PREFIX` + "Files" for
 * example and would show up on D-Bus under
 * &quot;org.freedesktop.Tracker1.Miner.Files&quot;.
 */
const MINER_DBUS_NAME_PREFIX: string
/**
 * D-Bus path prefix to use for all data miners. This allows custom
 * miners to be written using `TRACKER_MINER_DBUS_PATH_PREFIX` + "Files" for
 * example and would show up on D-Bus under
 * &quot;/org/freedesktop/Tracker1/Miner/Files&quot;.
 */
const MINER_DBUS_PATH_PREFIX: string
/**
 * Used as the domain for any #GErrors reported by `TrackerMiner` objects.
 */
const MINER_ERROR_DOMAIN: string
class DataProvider {
    /* Methods of TrackerMiner-1.0.TrackerMiner.DataProvider */
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
    begin(url: Gio.File, attributes: string, flags: DirectoryFlags, cancellable?: Gio.Cancellable | null): Enumerator
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
    begin_async(url: Gio.File, attributes: string, flags: DirectoryFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the asynchronous operation started with
     * tracker_data_provider_begin_async().
     * @param result a #GAsyncResult.
     */
    begin_finish(result: Gio.AsyncResult): Enumerator
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
    end(enumerator: Enumerator, cancellable?: Gio.Cancellable | null): boolean
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
    end_async(enumerator: Enumerator, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the asynchronous operation started with
     * tracker_data_provider_end_async().
     * @param result a #GAsyncResult.
     */
    end_finish(result: Gio.AsyncResult): boolean
    /* Virtual methods of TrackerMiner-1.0.TrackerMiner.DataProvider */
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
    vfunc_begin(url: Gio.File, attributes: string, flags: DirectoryFlags, cancellable?: Gio.Cancellable | null): Enumerator
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
    vfunc_begin_async(url: Gio.File, attributes: string, flags: DirectoryFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the asynchronous operation started with
     * tracker_data_provider_begin_async().
     * @param result a #GAsyncResult.
     */
    vfunc_begin_finish(result: Gio.AsyncResult): Enumerator
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
    vfunc_end(enumerator: Enumerator, cancellable?: Gio.Cancellable | null): boolean
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
    vfunc_end_async(enumerator: Enumerator, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the asynchronous operation started with
     * tracker_data_provider_end_async().
     * @param result a #GAsyncResult.
     */
    vfunc_end_finish(result: Gio.AsyncResult): boolean
    static name: string
}
class Enumerator {
    /* Methods of TrackerMiner-1.0.TrackerMiner.Enumerator */
    /**
     * Enumerates to the next piece of data according to the `enumerator`
     * implementation.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    next(cancellable?: Gio.Cancellable | null): object | null
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
    next_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the asynchronous operation started with
     * tracker_enumerator_next_async().
     * @param result a #GAsyncResult.
     */
    next_finish(result: Gio.AsyncResult): object | null
    /* Virtual methods of TrackerMiner-1.0.TrackerMiner.Enumerator */
    /**
     * Enumerates to the next piece of data according to the `enumerator`
     * implementation.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    vfunc_next(cancellable?: Gio.Cancellable | null): object | null
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
    vfunc_next_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the asynchronous operation started with
     * tracker_enumerator_next_async().
     * @param result a #GAsyncResult.
     */
    vfunc_next_finish(result: Gio.AsyncResult): object | null
    static name: string
}
interface Decorator_ConstructProps extends Miner_ConstructProps {
    /* Constructor properties of TrackerMiner-1.0.TrackerMiner.Decorator */
    class_names?: string[]
    commit_batch_size?: number
    data_source?: string
    priority_rdf_types?: string[]
}
class Decorator {
    /* Properties of TrackerMiner-1.0.TrackerMiner.Decorator */
    class_names: string[]
    commit_batch_size: number
    readonly data_source: string
    priority_rdf_types: string[]
    /* Properties of TrackerMiner-1.0.TrackerMiner.Miner */
    introspection_handler: object
    introspection_xml: string
    readonly name: string
    progress: number
    remaining_time: number
    status: string
    /* Fields of TrackerMiner-1.0.TrackerMiner.Miner */
    parent_instance: GObject.Object
    priv: MinerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of TrackerMiner-1.0.TrackerMiner.Decorator */
    /**
     * Deletes resource needing extended metadata extraction from the
     * queue. `id` is the same IDs emitted by tracker-store when the database is
     * updated for consistency. For details, see the GraphUpdated signal.
     * @param id an ID.
     */
    delete_id(id: number): void
    /**
     * This function returns a string list of class names which are being
     * updated with extended metadata. An example would be 'nfo:Document'.
     */
    get_class_names(): string[]
    /**
     * The unique string identifying this #TrackerDecorator that has
     * extracted the extended metadata. This is essentially an identifier
     * so it's clear WHO has extracted this extended metadata.
     */
    get_data_source(): string
    /**
     * Get the number of items left in the queue to be processed. This
     * indicates content that may already exist in Tracker but is waiting
     * to be further flurished with metadata with a 2nd pass extraction or
     * index.
     */
    get_n_items(): number
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
    next(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Should be called in the callback function provided to
     * tracker_decorator_next() to return the result of the task be it an
     * error or not.
     * @param result a #GAsyncResult.
     */
    next_finish(result: Gio.AsyncResult): DecoratorInfo
    /**
     * Adds resource needing extended metadata extraction to the queue.
     * `id` is the same IDs emitted by tracker-store when the database is updated for
     * consistency. For details, see the GraphUpdated signal.
     * @param id the ID of the resource ID.
     * @param class_name_id the ID of the resource's class.
     */
    prepend_id(id: number, class_name_id: number): void
    /**
     * Re-evaluate the priority queues internally to ensure that
     * `rdf_types` are handled before all other content. This is useful for
     * applications that need their content available sooner than the
     * standard time it would take to index content.
     * @param rdf_types a string array of rdf types
     */
    set_priority_rdf_types(rdf_types: string): void
    /* Methods of TrackerMiner-1.0.TrackerMiner.Miner */
    /**
     * Gets the #TrackerSparqlConnection initialized by `miner`
     */
    get_connection(): Tracker.SparqlConnection
    /**
     * Gets the #GDBusConnection initialized by `miner`
     */
    get_dbus_connection(): Gio.DBusConnection
    /**
     * Gets the DBus name registered by `miner`
     */
    get_dbus_full_name(): string
    /**
     * Gets the DBus path registered by `miner`
     */
    get_dbus_full_path(): string
    /**
     * Returns the number of pause reasons holding `miner` from
     * indexing contents.
     */
    get_n_pause_reasons(): number
    /**
     * Tells the miner to mark `urls` are to ignore on next update.
     * @param urls the urls to mark as to ignore on next update
     */
    ignore_next_update(urls: string[]): void
    /**
     * Returns #TRUE if the miner is paused.
     */
    is_paused(): boolean
    /**
     * Returns #TRUE if the miner has been started.
     */
    is_started(): boolean
    /**
     * Asks `miner` to pause. On success the cookie ID is returned,
     * this is what must be used in tracker_miner_resume() to resume
     * operations. On failure `error` will be set and -1 will be returned.
     * @param reason reason to pause
     */
    pause(reason: string): number
    /**
     * Asks the miner to resume processing. The cookie must be something
     * returned by tracker_miner_pause(). The miner won't actually resume
     * operations until all pause requests have been resumed.
     * @param cookie pause cookie
     */
    resume(cookie: number): boolean
    /**
     * Tells the miner to start processing data.
     */
    start(): void
    /**
     * Tells the miner to stop processing data.
     */
    stop(): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
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
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
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
     */
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watch_closure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Initable */
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
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of TrackerMiner-1.0.TrackerMiner.Decorator */
    vfunc_finished(): void
    vfunc_items_available(): void
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
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of TrackerMiner-1.0.TrackerMiner.Miner */
    /**
     * Tells the miner to mark `urls` are to ignore on next update.
     * @param urls the urls to mark as to ignore on next update
     */
    vfunc_ignore_next_update(urls: string[]): void
    vfunc_paused(): void
    vfunc_progress(status: string, progress: number): void
    vfunc_resumed(): void
    vfunc_started(): void
    vfunc_stopped(): void
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
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of TrackerMiner-1.0.TrackerMiner.Decorator */
    /**
     * The ::finished signal will be emitted whenever the
     * #TrackerDecorator has finished extracted extended metadata
     * for resources in the database.
     */
    connect(sigName: "finished", callback: (($obj: Decorator) => void)): number
    connect_after(sigName: "finished", callback: (($obj: Decorator) => void)): number
    emit(sigName: "finished"): void
    /**
     * The ::items-available signal will be emitted whenever the
     * #TrackerDecorator sees resources that are available for
     * extended metadata extraction.
     */
    connect(sigName: "items-available", callback: (($obj: Decorator) => void)): number
    connect_after(sigName: "items-available", callback: (($obj: Decorator) => void)): number
    emit(sigName: "items-available"): void
    /* Signals of TrackerMiner-1.0.TrackerMiner.Miner */
    /**
     * the ::ignore-next-update signal is emitted in the miner
     * right after it has been asked to mark `urls` as to ignore on next update
     * through tracker_miner_ignore_next_update().
     * @param urls the urls to mark as ignore on next update
     */
    connect(sigName: "ignore-next-update", callback: (($obj: Decorator, urls: string[]) => void)): number
    connect_after(sigName: "ignore-next-update", callback: (($obj: Decorator, urls: string[]) => void)): number
    emit(sigName: "ignore-next-update", urls: string[]): void
    /**
     * the ::paused signal is emitted whenever
     * there is any reason to pause, either
     * internal (through tracker_miner_pause()) or
     * external (through DBus, see #TrackerMinerManager).
     */
    connect(sigName: "paused", callback: (($obj: Decorator) => void)): number
    connect_after(sigName: "paused", callback: (($obj: Decorator) => void)): number
    emit(sigName: "paused"): void
    /**
     * the ::progress signal will be emitted by TrackerMiner implementations
     * to indicate progress about the data mining process. `status` will
     * contain a translated string with the current miner status and `progress`
     * will indicate how much has been processed so far. `remaining_time` will
     * give the number expected of seconds to finish processing, 0 if the
     * value cannot be estimated, and -1 if its not applicable.
     * @param status miner status
     * @param progress a #gdouble indicating miner progress, from 0 to 1.
     * @param remaining_time a #gint indicating the reamaining processing time, in seconds.
     */
    connect(sigName: "progress", callback: (($obj: Decorator, status: string, progress: number, remaining_time: number) => void)): number
    connect_after(sigName: "progress", callback: (($obj: Decorator, status: string, progress: number, remaining_time: number) => void)): number
    emit(sigName: "progress", status: string, progress: number, remaining_time: number): void
    /**
     * the ::resumed signal is emitted whenever
     * all reasons to pause have disappeared, see
     * tracker_miner_resume() and #TrackerMinerManager.
     */
    connect(sigName: "resumed", callback: (($obj: Decorator) => void)): number
    connect_after(sigName: "resumed", callback: (($obj: Decorator) => void)): number
    emit(sigName: "resumed"): void
    /**
     * the ::started signal is emitted in the miner
     * right after it has been started through
     * tracker_miner_start().
     */
    connect(sigName: "started", callback: (($obj: Decorator) => void)): number
    connect_after(sigName: "started", callback: (($obj: Decorator) => void)): number
    emit(sigName: "started"): void
    /**
     * the ::stopped signal is emitted in the miner
     * right after it has been stopped through
     * tracker_miner_stop().
     */
    connect(sigName: "stopped", callback: (($obj: Decorator) => void)): number
    connect_after(sigName: "stopped", callback: (($obj: Decorator) => void)): number
    emit(sigName: "stopped"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::class-names", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-names", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::commit-batch-size", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::commit-batch-size", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::data-source", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-source", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority-rdf-types", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority-rdf-types", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::introspection-handler", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-handler", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::introspection-xml", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-xml", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining-time", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-time", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::status", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Decorator_ConstructProps)
    _init (config?: Decorator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Gives the caller the #GQuark used to identify #TrackerDecorator errors
     * in #GError structures. The #GQuark is used as the domain for the error.
     */
    static error_quark(): GLib.Quark
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     * @param object_type a #GType supporting #GInitable.
     * @param parameters the parameters to use to construct the object
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface DecoratorFS_ConstructProps extends Decorator_ConstructProps {
}
class DecoratorFS {
    /* Properties of TrackerMiner-1.0.TrackerMiner.Decorator */
    class_names: string[]
    commit_batch_size: number
    readonly data_source: string
    priority_rdf_types: string[]
    /* Properties of TrackerMiner-1.0.TrackerMiner.Miner */
    introspection_handler: object
    introspection_xml: string
    readonly name: string
    progress: number
    remaining_time: number
    status: string
    /* Fields of TrackerMiner-1.0.TrackerMiner.Decorator */
    parent_instance: Miner
    priv: object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of TrackerMiner-1.0.TrackerMiner.DecoratorFS */
    /**
     * Prepends a file for processing.
     * @param file a #GFile to process
     */
    prepend_file(file: Gio.File): number
    /* Methods of TrackerMiner-1.0.TrackerMiner.Decorator */
    /**
     * Deletes resource needing extended metadata extraction from the
     * queue. `id` is the same IDs emitted by tracker-store when the database is
     * updated for consistency. For details, see the GraphUpdated signal.
     * @param id an ID.
     */
    delete_id(id: number): void
    /**
     * This function returns a string list of class names which are being
     * updated with extended metadata. An example would be 'nfo:Document'.
     */
    get_class_names(): string[]
    /**
     * The unique string identifying this #TrackerDecorator that has
     * extracted the extended metadata. This is essentially an identifier
     * so it's clear WHO has extracted this extended metadata.
     */
    get_data_source(): string
    /**
     * Get the number of items left in the queue to be processed. This
     * indicates content that may already exist in Tracker but is waiting
     * to be further flurished with metadata with a 2nd pass extraction or
     * index.
     */
    get_n_items(): number
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
    next(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Should be called in the callback function provided to
     * tracker_decorator_next() to return the result of the task be it an
     * error or not.
     * @param result a #GAsyncResult.
     */
    next_finish(result: Gio.AsyncResult): DecoratorInfo
    /**
     * Adds resource needing extended metadata extraction to the queue.
     * `id` is the same IDs emitted by tracker-store when the database is updated for
     * consistency. For details, see the GraphUpdated signal.
     * @param id the ID of the resource ID.
     * @param class_name_id the ID of the resource's class.
     */
    prepend_id(id: number, class_name_id: number): void
    /**
     * Re-evaluate the priority queues internally to ensure that
     * `rdf_types` are handled before all other content. This is useful for
     * applications that need their content available sooner than the
     * standard time it would take to index content.
     * @param rdf_types a string array of rdf types
     */
    set_priority_rdf_types(rdf_types: string): void
    /* Methods of TrackerMiner-1.0.TrackerMiner.Miner */
    /**
     * Gets the #TrackerSparqlConnection initialized by `miner`
     */
    get_connection(): Tracker.SparqlConnection
    /**
     * Gets the #GDBusConnection initialized by `miner`
     */
    get_dbus_connection(): Gio.DBusConnection
    /**
     * Gets the DBus name registered by `miner`
     */
    get_dbus_full_name(): string
    /**
     * Gets the DBus path registered by `miner`
     */
    get_dbus_full_path(): string
    /**
     * Returns the number of pause reasons holding `miner` from
     * indexing contents.
     */
    get_n_pause_reasons(): number
    /**
     * Tells the miner to mark `urls` are to ignore on next update.
     * @param urls the urls to mark as to ignore on next update
     */
    ignore_next_update(urls: string[]): void
    /**
     * Returns #TRUE if the miner is paused.
     */
    is_paused(): boolean
    /**
     * Returns #TRUE if the miner has been started.
     */
    is_started(): boolean
    /**
     * Asks `miner` to pause. On success the cookie ID is returned,
     * this is what must be used in tracker_miner_resume() to resume
     * operations. On failure `error` will be set and -1 will be returned.
     * @param reason reason to pause
     */
    pause(reason: string): number
    /**
     * Asks the miner to resume processing. The cookie must be something
     * returned by tracker_miner_pause(). The miner won't actually resume
     * operations until all pause requests have been resumed.
     * @param cookie pause cookie
     */
    resume(cookie: number): boolean
    /**
     * Tells the miner to start processing data.
     */
    start(): void
    /**
     * Tells the miner to stop processing data.
     */
    stop(): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
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
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
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
     */
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watch_closure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Initable */
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
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of TrackerMiner-1.0.TrackerMiner.DecoratorFS */
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
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of TrackerMiner-1.0.TrackerMiner.Decorator */
    vfunc_finished(): void
    vfunc_items_available(): void
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
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of TrackerMiner-1.0.TrackerMiner.Miner */
    /**
     * Tells the miner to mark `urls` are to ignore on next update.
     * @param urls the urls to mark as to ignore on next update
     */
    vfunc_ignore_next_update(urls: string[]): void
    vfunc_paused(): void
    vfunc_progress(status: string, progress: number): void
    vfunc_resumed(): void
    vfunc_started(): void
    vfunc_stopped(): void
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
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of TrackerMiner-1.0.TrackerMiner.Decorator */
    /**
     * The ::finished signal will be emitted whenever the
     * #TrackerDecorator has finished extracted extended metadata
     * for resources in the database.
     */
    connect(sigName: "finished", callback: (($obj: DecoratorFS) => void)): number
    connect_after(sigName: "finished", callback: (($obj: DecoratorFS) => void)): number
    emit(sigName: "finished"): void
    /**
     * The ::items-available signal will be emitted whenever the
     * #TrackerDecorator sees resources that are available for
     * extended metadata extraction.
     */
    connect(sigName: "items-available", callback: (($obj: DecoratorFS) => void)): number
    connect_after(sigName: "items-available", callback: (($obj: DecoratorFS) => void)): number
    emit(sigName: "items-available"): void
    /* Signals of TrackerMiner-1.0.TrackerMiner.Miner */
    /**
     * the ::ignore-next-update signal is emitted in the miner
     * right after it has been asked to mark `urls` as to ignore on next update
     * through tracker_miner_ignore_next_update().
     * @param urls the urls to mark as ignore on next update
     */
    connect(sigName: "ignore-next-update", callback: (($obj: DecoratorFS, urls: string[]) => void)): number
    connect_after(sigName: "ignore-next-update", callback: (($obj: DecoratorFS, urls: string[]) => void)): number
    emit(sigName: "ignore-next-update", urls: string[]): void
    /**
     * the ::paused signal is emitted whenever
     * there is any reason to pause, either
     * internal (through tracker_miner_pause()) or
     * external (through DBus, see #TrackerMinerManager).
     */
    connect(sigName: "paused", callback: (($obj: DecoratorFS) => void)): number
    connect_after(sigName: "paused", callback: (($obj: DecoratorFS) => void)): number
    emit(sigName: "paused"): void
    /**
     * the ::progress signal will be emitted by TrackerMiner implementations
     * to indicate progress about the data mining process. `status` will
     * contain a translated string with the current miner status and `progress`
     * will indicate how much has been processed so far. `remaining_time` will
     * give the number expected of seconds to finish processing, 0 if the
     * value cannot be estimated, and -1 if its not applicable.
     * @param status miner status
     * @param progress a #gdouble indicating miner progress, from 0 to 1.
     * @param remaining_time a #gint indicating the reamaining processing time, in seconds.
     */
    connect(sigName: "progress", callback: (($obj: DecoratorFS, status: string, progress: number, remaining_time: number) => void)): number
    connect_after(sigName: "progress", callback: (($obj: DecoratorFS, status: string, progress: number, remaining_time: number) => void)): number
    emit(sigName: "progress", status: string, progress: number, remaining_time: number): void
    /**
     * the ::resumed signal is emitted whenever
     * all reasons to pause have disappeared, see
     * tracker_miner_resume() and #TrackerMinerManager.
     */
    connect(sigName: "resumed", callback: (($obj: DecoratorFS) => void)): number
    connect_after(sigName: "resumed", callback: (($obj: DecoratorFS) => void)): number
    emit(sigName: "resumed"): void
    /**
     * the ::started signal is emitted in the miner
     * right after it has been started through
     * tracker_miner_start().
     */
    connect(sigName: "started", callback: (($obj: DecoratorFS) => void)): number
    connect_after(sigName: "started", callback: (($obj: DecoratorFS) => void)): number
    emit(sigName: "started"): void
    /**
     * the ::stopped signal is emitted in the miner
     * right after it has been stopped through
     * tracker_miner_stop().
     */
    connect(sigName: "stopped", callback: (($obj: DecoratorFS) => void)): number
    connect_after(sigName: "stopped", callback: (($obj: DecoratorFS) => void)): number
    emit(sigName: "stopped"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::class-names", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-names", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::commit-batch-size", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::commit-batch-size", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::data-source", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-source", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::priority-rdf-types", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority-rdf-types", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::introspection-handler", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-handler", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::introspection-xml", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-xml", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining-time", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-time", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::status", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DecoratorFS_ConstructProps)
    _init (config?: DecoratorFS_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     * @param object_type a #GType supporting #GInitable.
     * @param parameters the parameters to use to construct the object
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface IndexingTree_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of TrackerMiner-1.0.TrackerMiner.IndexingTree */
    filter_hidden?: boolean
    root?: Gio.File
}
class IndexingTree {
    /* Properties of TrackerMiner-1.0.TrackerMiner.IndexingTree */
    filter_hidden: boolean
    readonly root: Gio.File
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of TrackerMiner-1.0.TrackerMiner.IndexingTree */
    /**
     * Adds a directory to the indexing tree with the
     * given configuration flags.
     * @param directory #GFile pointing to a directory
     * @param flags Configuration flags for the directory
     */
    add(directory: Gio.File, flags: DirectoryFlags): void
    /**
     * Adds a new filter for basenames.
     * @param filter filter type
     * @param glob_string glob-style string for the filter
     */
    add_filter(filter: FilterType, glob_string: string): void
    /**
     * Clears all filters of a given type.
     * @param type filter type to clear
     */
    clear_filters(type: FilterType): void
    /**
     * returns %TRUE if `file` should be indexed according to the
     * parameters given through tracker_indexing_tree_add() and
     * tracker_indexing_tree_add_filter().
     * 
     * If `file_type` is #G_FILE_TYPE_UNKNOWN, file type will be queried to the
     * file system.
     * @param file a #GFile
     * @param file_type a #GFileType
     */
    file_is_indexable(file: Gio.File, file_type: Gio.FileType): boolean
    /**
     * Evaluates if the URL represented by `file` is the same of that for
     * the root of the `tree`.
     * @param file a #GFile to compare
     */
    file_is_root(file: Gio.File): boolean
    /**
     * Returns %TRUE if `file` matches any filter of the given filter type.
     * @param type filter type
     * @param file a #GFile
     */
    file_matches_filter(type: FilterType, file: Gio.File): boolean
    /**
     * Get the default filtering policies for `tree` when indexing content.
     * Some content is black listed or white listed and the default policy
     * for that is returned here. The `filter` allows specific type of
     * policies to be returned, for example, the default policy for files
     * (#TRACKER_FILTER_FILE).
     * @param filter a #TrackerFilterType
     */
    get_default_policy(filter: FilterType): FilterPolicy
    /**
     * Describes if the `tree` should index hidden content. To change this
     * setting, see tracker_indexing_tree_set_filter_hidden().
     */
    get_filter_hidden(): boolean
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
     */
    get_master_root(): Gio.File
    /**
     * Returns the #GFile that was previously added through tracker_indexing_tree_add()
     * and would equal or contain `file,` or %NULL if none applies.
     * 
     * If the return value is non-%NULL, `directory_flags` would contain the
     * #TrackerDirectoryFlags applying to `file`.
     * @param file a #GFile
     */
    get_root(file: Gio.File): [ /* returnType */ Gio.File, /* directory_flags */ DirectoryFlags ]
    /**
     * Returns the list of indexing roots in `tree`
     */
    list_roots(): Gio.File[]
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
     */
    notify_update(file: Gio.File, recursive: boolean): boolean
    /**
     * returns %TRUE if `parent` should be indexed based on its contents.
     * @param parent parent directory
     * @param children children within `parent`
     */
    parent_is_indexable(parent: Gio.File, children: Gio.File[]): boolean
    /**
     * Removes `directory` from the indexing tree, note that
     * only directories previously added with tracker_indexing_tree_add()
     * can be effectively removed.
     * @param directory #GFile pointing to a directory
     */
    remove(directory: Gio.File): void
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
    set_default_policy(filter: FilterType, policy: FilterPolicy): void
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
    set_filter_hidden(filter_hidden: boolean): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
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
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
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
     */
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of TrackerMiner-1.0.TrackerMiner.IndexingTree */
    vfunc_child_updated(root: Gio.File, child: Gio.File): void
    vfunc_directory_added(directory: Gio.File): void
    vfunc_directory_removed(directory: Gio.File): void
    vfunc_directory_updated(directory: Gio.File): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of TrackerMiner-1.0.TrackerMiner.IndexingTree */
    /**
     * The ::child-updated signal may be emitted to notify
     * about possible changes on children of a root.
     * 
     * #TrackerIndexingTree does not emit those by itself,
     * those may be triggered through tracker_indexing_tree_notify_update().
     * @param root the root of this child
     * @param child the updated child
     */
    connect(sigName: "child-updated", callback: (($obj: IndexingTree, root: Gio.File, child: Gio.File) => void)): number
    connect_after(sigName: "child-updated", callback: (($obj: IndexingTree, root: Gio.File, child: Gio.File) => void)): number
    emit(sigName: "child-updated", root: Gio.File, child: Gio.File): void
    /**
     * the ::directory-added signal is emitted when a new
     * directory is added to the list of other directories which
     * are to be considered for indexing. Typically this is
     * signalled when the tracker_indexing_tree_add() API is
     * called.
     * @param directory a #GFile
     */
    connect(sigName: "directory-added", callback: (($obj: IndexingTree, directory: Gio.File) => void)): number
    connect_after(sigName: "directory-added", callback: (($obj: IndexingTree, directory: Gio.File) => void)): number
    emit(sigName: "directory-added", directory: Gio.File): void
    /**
     * the ::directory-removed signal is emitted when a
     * directory is removed from the list of other directories
     * which are to be considered for indexing. Typically this is
     * signalled when the tracker_indexing_tree_remove() API is
     * called.
     * @param directory a #GFile
     */
    connect(sigName: "directory-removed", callback: (($obj: IndexingTree, directory: Gio.File) => void)): number
    connect_after(sigName: "directory-removed", callback: (($obj: IndexingTree, directory: Gio.File) => void)): number
    emit(sigName: "directory-removed", directory: Gio.File): void
    /**
     * The ::directory-updated signal is emitted on a root
     * when either its indexing flags change (e.g. due to consecutive
     * calls to tracker_indexing_tree_add()), or anytime an update is
     * requested through tracker_indexing_tree_notify_update().
     * @param directory a #GFile
     */
    connect(sigName: "directory-updated", callback: (($obj: IndexingTree, directory: Gio.File) => void)): number
    connect_after(sigName: "directory-updated", callback: (($obj: IndexingTree, directory: Gio.File) => void)): number
    emit(sigName: "directory-updated", directory: Gio.File): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: IndexingTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: IndexingTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::filter-hidden", callback: (($obj: IndexingTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-hidden", callback: (($obj: IndexingTree, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: IndexingTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: IndexingTree, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: IndexingTree_ConstructProps)
    _init (config?: IndexingTree_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): IndexingTree
    static new_with_root(root: Gio.File): IndexingTree
    static $gtype: GObject.Type
}
interface Miner_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of TrackerMiner-1.0.TrackerMiner.Miner */
    introspection_handler?: object
    introspection_xml?: string
    name?: string
    progress?: number
    remaining_time?: number
    status?: string
}
class Miner {
    /* Properties of TrackerMiner-1.0.TrackerMiner.Miner */
    introspection_handler: object
    introspection_xml: string
    readonly name: string
    progress: number
    remaining_time: number
    status: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of TrackerMiner-1.0.TrackerMiner.Miner */
    /**
     * Gets the #TrackerSparqlConnection initialized by `miner`
     */
    get_connection(): Tracker.SparqlConnection
    /**
     * Gets the #GDBusConnection initialized by `miner`
     */
    get_dbus_connection(): Gio.DBusConnection
    /**
     * Gets the DBus name registered by `miner`
     */
    get_dbus_full_name(): string
    /**
     * Gets the DBus path registered by `miner`
     */
    get_dbus_full_path(): string
    /**
     * Returns the number of pause reasons holding `miner` from
     * indexing contents.
     */
    get_n_pause_reasons(): number
    /**
     * Tells the miner to mark `urls` are to ignore on next update.
     * @param urls the urls to mark as to ignore on next update
     */
    ignore_next_update(urls: string[]): void
    /**
     * Returns #TRUE if the miner is paused.
     */
    is_paused(): boolean
    /**
     * Returns #TRUE if the miner has been started.
     */
    is_started(): boolean
    /**
     * Asks `miner` to pause. On success the cookie ID is returned,
     * this is what must be used in tracker_miner_resume() to resume
     * operations. On failure `error` will be set and -1 will be returned.
     * @param reason reason to pause
     */
    pause(reason: string): number
    /**
     * Asks the miner to resume processing. The cookie must be something
     * returned by tracker_miner_pause(). The miner won't actually resume
     * operations until all pause requests have been resumed.
     * @param cookie pause cookie
     */
    resume(cookie: number): boolean
    /**
     * Tells the miner to start processing data.
     */
    start(): void
    /**
     * Tells the miner to stop processing data.
     */
    stop(): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
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
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
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
     */
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watch_closure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Initable */
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
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of TrackerMiner-1.0.TrackerMiner.Miner */
    /**
     * Tells the miner to mark `urls` are to ignore on next update.
     * @param urls the urls to mark as to ignore on next update
     */
    vfunc_ignore_next_update(urls: string[]): void
    vfunc_paused(): void
    vfunc_progress(status: string, progress: number): void
    vfunc_resumed(): void
    vfunc_started(): void
    vfunc_stopped(): void
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
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of TrackerMiner-1.0.TrackerMiner.Miner */
    /**
     * the ::ignore-next-update signal is emitted in the miner
     * right after it has been asked to mark `urls` as to ignore on next update
     * through tracker_miner_ignore_next_update().
     * @param urls the urls to mark as ignore on next update
     */
    connect(sigName: "ignore-next-update", callback: (($obj: Miner, urls: string[]) => void)): number
    connect_after(sigName: "ignore-next-update", callback: (($obj: Miner, urls: string[]) => void)): number
    emit(sigName: "ignore-next-update", urls: string[]): void
    /**
     * the ::paused signal is emitted whenever
     * there is any reason to pause, either
     * internal (through tracker_miner_pause()) or
     * external (through DBus, see #TrackerMinerManager).
     */
    connect(sigName: "paused", callback: (($obj: Miner) => void)): number
    connect_after(sigName: "paused", callback: (($obj: Miner) => void)): number
    emit(sigName: "paused"): void
    /**
     * the ::progress signal will be emitted by TrackerMiner implementations
     * to indicate progress about the data mining process. `status` will
     * contain a translated string with the current miner status and `progress`
     * will indicate how much has been processed so far. `remaining_time` will
     * give the number expected of seconds to finish processing, 0 if the
     * value cannot be estimated, and -1 if its not applicable.
     * @param status miner status
     * @param progress a #gdouble indicating miner progress, from 0 to 1.
     * @param remaining_time a #gint indicating the reamaining processing time, in seconds.
     */
    connect(sigName: "progress", callback: (($obj: Miner, status: string, progress: number, remaining_time: number) => void)): number
    connect_after(sigName: "progress", callback: (($obj: Miner, status: string, progress: number, remaining_time: number) => void)): number
    emit(sigName: "progress", status: string, progress: number, remaining_time: number): void
    /**
     * the ::resumed signal is emitted whenever
     * all reasons to pause have disappeared, see
     * tracker_miner_resume() and #TrackerMinerManager.
     */
    connect(sigName: "resumed", callback: (($obj: Miner) => void)): number
    connect_after(sigName: "resumed", callback: (($obj: Miner) => void)): number
    emit(sigName: "resumed"): void
    /**
     * the ::started signal is emitted in the miner
     * right after it has been started through
     * tracker_miner_start().
     */
    connect(sigName: "started", callback: (($obj: Miner) => void)): number
    connect_after(sigName: "started", callback: (($obj: Miner) => void)): number
    emit(sigName: "started"): void
    /**
     * the ::stopped signal is emitted in the miner
     * right after it has been stopped through
     * tracker_miner_stop().
     */
    connect(sigName: "stopped", callback: (($obj: Miner) => void)): number
    connect_after(sigName: "stopped", callback: (($obj: Miner) => void)): number
    emit(sigName: "stopped"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::introspection-handler", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-handler", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::introspection-xml", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-xml", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining-time", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-time", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::status", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Miner_ConstructProps)
    _init (config?: Miner_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Gives the caller the #GQuark used to identify #TrackerMiner errors
     * in #GError structures. The #GQuark is used as the domain for the error.
     */
    static error_quark(): GLib.Quark
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     * @param object_type a #GType supporting #GInitable.
     * @param parameters the parameters to use to construct the object
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface MinerFS_ConstructProps extends Miner_ConstructProps {
    /* Constructor properties of TrackerMiner-1.0.TrackerMiner.MinerFS */
    data_provider?: DataProvider
    initial_crawling?: boolean
    mtime_checking?: boolean
    processing_pool_ready_limit?: number
    processing_pool_wait_limit?: number
    root?: Gio.File
    throttle?: number
}
class MinerFS {
    /* Properties of TrackerMiner-1.0.TrackerMiner.MinerFS */
    readonly data_provider: DataProvider
    initial_crawling: boolean
    mtime_checking: boolean
    processing_pool_ready_limit: number
    processing_pool_wait_limit: number
    readonly root: Gio.File
    throttle: number
    /* Properties of TrackerMiner-1.0.TrackerMiner.Miner */
    introspection_handler: object
    introspection_xml: string
    readonly name: string
    progress: number
    remaining_time: number
    status: string
    /* Fields of TrackerMiner-1.0.TrackerMiner.Miner */
    parent_instance: GObject.Object
    priv: MinerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of TrackerMiner-1.0.TrackerMiner.MinerFS */
    /**
     * Tells the miner-fs that the given #GFile corresponds to a
     * directory which was created in the store without a specific
     * parent object. In this case, when regenerating internal
     * caches, an extra query will be done so that these elements
     * are taken into account.
     * @param file a #GFile
     */
    add_directory_without_parent(file: Gio.File): void
    /**
     * Tells the filesystem miner to check and index a directory,
     * this file must be part of the usual crawling directories
     * of #TrackerMinerFS. See tracker_miner_fs_directory_add().
     * @param file #GFile for the directory to check
     * @param check_parents whether to check parents and eligibility or not
     */
    check_directory(file: Gio.File, check_parents: boolean): void
    /**
     * Tells the filesystem miner to check and index a directory at
     * a given priority, this file must be part of the usual crawling
     * directories of #TrackerMinerFS. See tracker_miner_fs_directory_add().
     * @param file #GFile for the directory to check
     * @param priority the priority of the check task
     * @param check_parents whether to check parents and eligibility or not
     */
    check_directory_with_priority(file: Gio.File, priority: number, check_parents: boolean): void
    /**
     * Tells the filesystem miner to check and index a file,
     * this file must be part of the usual crawling directories
     * of #TrackerMinerFS. See tracker_miner_fs_directory_add().
     * @param file #GFile for the file to check
     * @param check_parents whether to check parents and eligibility or not
     */
    check_file(file: Gio.File, check_parents: boolean): void
    /**
     * Tells the filesystem miner to check and index a file at
     * a given priority, this file must be part of the usual
     * crawling directories of #TrackerMinerFS. See
     * tracker_miner_fs_directory_add().
     * @param file #GFile for the file to check
     * @param priority the priority of the check task
     * @param check_parents whether to check parents and eligibility or not
     */
    check_file_with_priority(file: Gio.File, priority: number, check_parents: boolean): void
    /**
     * Tells the filesystem miner to inspect a directory.
     * @param file #GFile for the directory to inspect
     * @param recurse whether the directory should be inspected recursively
     */
    directory_add(file: Gio.File, recurse: boolean): void
    /**
     * Removes a directory from being inspected by `fs`. Note that only directory
     *  watches are removed.
     * @param file #GFile for the directory to be removed
     */
    directory_remove(file: Gio.File): boolean
    /**
     * Removes a directory from being inspected by `fs,` and removes all
     * associated metadata of the directory (and its contents) from the
     * store.
     * @param file #GFile for the directory to be removed
     */
    directory_remove_full(file: Gio.File): boolean
    /**
     * Notifies `fs` that all processing on `file` has been finished, if any error
     * happened during file data processing, it should be passed in `error,` else
     * that parameter will contain %NULL to reflect success.
     * @param file a #GFile
     * @param error a #GError with the error that happened during processing, or %NULL.
     */
    file_notify(file: Gio.File, error: GLib.Error): void
    /**
     * Tells `fs` to force mtime checking (regardless of the global mtime check
     * configuration) on the given `directory`.
     * @param directory a #GFile representing the directory
     */
    force_mtime_checking(directory: Gio.File): void
    force_recheck(): void
    /**
     * Returns the #TrackerDataProvider implementation, which is being used
     * to supply #GFile and #GFileInfo content to Tracker.
     */
    get_data_provider(): DataProvider
    /**
     * Returns the #TrackerIndexingTree which determines
     * what files/directories are indexed by `fs`
     */
    get_indexing_tree(): IndexingTree
    /**
     * Returns a boolean which indicates if the indexing tree is crawled
     * upon start up or not. This may be set to %FALSE if working
     * prodominently with cloud data where you can't perform these checks.
     * By default and for local file systems, this is enabled.
     */
    get_initial_crawling(): boolean
    /**
     * Returns a boolean used to identify if file modification time checks
     * are performed when processing content. This may be set to %FALSE if
     * working prodominently with cloud data where you can't perform these
     * checks. By default and for local file systems, this is enabled.
     */
    get_mtime_checking(): boolean
    /**
     * If `file` is currently being processed by `fs,` this function
     * will return the parent folder URN if any. This function is
     * useful to set the nie:belongsToContainer relationship. The
     * processing order of #TrackerMinerFS guarantees that a folder
     * has been already fully processed for indexing before any
     * children is processed, so most usually this function should
     * return non-%NULL.
     * @param file a #GFile obtained in #TrackerMinerFS::process-file
     */
    get_parent_urn(file: Gio.File): string | null
    /**
     * Gets the current throttle value, see
     * tracker_miner_fs_set_throttle() for more details.
     */
    get_throttle(): number
    /**
     * If the item exists in the store, this function retrieves
     * the URN for a #GFile being currently processed.
     * 
     * If `file` is not being currently processed by `fs,` or doesn't
     * exist in the store yet, %NULL will be returned.
     * @param file a #GFile obtained in #TrackerMinerFS::process-file
     */
    get_urn(file: Gio.File): string | null
    /**
     * The `fs` keeps many priority queus for content it is processing.
     * This function returns %TRUE if the sum of all (or any) priority
     * queues is more than 0. This includes items deleted, created,
     * updated, moved or being written back.
     */
    has_items_to_process(): boolean
    /**
     * If the item exists in the store, this function retrieves
     * the URN of the given #GFile
     * 
     * If `file` doesn't exist in the store yet, %NULL will be returned.
     * @param file a #GFile
     */
    query_urn(file: Gio.File): string
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
    set_initial_crawling(do_initial_crawling: boolean): void
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
    set_mtime_checking(mtime_checking: boolean): void
    /**
     * Tells the filesystem miner to throttle its operations. A value of
     * 0.0 means no throttling at all, so the miner will perform
     * operations at full speed, 1.0 is the slowest value. With a value of
     * 1.0, the `fs` is typically waiting one full second before handling
     * the next batch of queued items to be processed.
     * @param throttle a double between 0.0 and 1.0
     */
    set_throttle(throttle: number): void
    /**
     * Tells the filesystem miner to writeback a file.
     * @param file #GFile for the file to check
     * @param rdf_types A #GStrv with rdf types
     * @param results A array of results from the preparation query
     */
    writeback_file(file: Gio.File, rdf_types: string[], results: any[]): void
    /**
     * Notifies `fs` that all writing back on `file` has been finished, if any error
     * happened during file data processing, it should be passed in `error,` else
     * that parameter will contain %NULL to reflect success.
     * @param file a #GFile
     * @param error a #GError with the error that happened during processing, or %NULL.
     */
    writeback_notify(file: Gio.File, error: GLib.Error): void
    /* Methods of TrackerMiner-1.0.TrackerMiner.Miner */
    /**
     * Gets the #TrackerSparqlConnection initialized by `miner`
     */
    get_connection(): Tracker.SparqlConnection
    /**
     * Gets the #GDBusConnection initialized by `miner`
     */
    get_dbus_connection(): Gio.DBusConnection
    /**
     * Gets the DBus name registered by `miner`
     */
    get_dbus_full_name(): string
    /**
     * Gets the DBus path registered by `miner`
     */
    get_dbus_full_path(): string
    /**
     * Returns the number of pause reasons holding `miner` from
     * indexing contents.
     */
    get_n_pause_reasons(): number
    /**
     * Tells the miner to mark `urls` are to ignore on next update.
     * @param urls the urls to mark as to ignore on next update
     */
    ignore_next_update(urls: string[]): void
    /**
     * Returns #TRUE if the miner is paused.
     */
    is_paused(): boolean
    /**
     * Returns #TRUE if the miner has been started.
     */
    is_started(): boolean
    /**
     * Asks `miner` to pause. On success the cookie ID is returned,
     * this is what must be used in tracker_miner_resume() to resume
     * operations. On failure `error` will be set and -1 will be returned.
     * @param reason reason to pause
     */
    pause(reason: string): number
    /**
     * Asks the miner to resume processing. The cookie must be something
     * returned by tracker_miner_pause(). The miner won't actually resume
     * operations until all pause requests have been resumed.
     * @param cookie pause cookie
     */
    resume(cookie: number): boolean
    /**
     * Tells the miner to start processing data.
     */
    start(): void
    /**
     * Tells the miner to stop processing data.
     */
    stop(): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
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
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
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
     */
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watch_closure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Initable */
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
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of TrackerMiner-1.0.TrackerMiner.MinerFS */
    vfunc_finished(elapsed: number, directories_found: number, directories_ignored: number, files_found: number, files_ignored: number): void
    vfunc_finished_root(root: Gio.File, directories_found: number, directories_ignored: number, files_found: number, files_ignored: number): void
    vfunc_ignore_next_update_file(file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null): boolean
    vfunc_process_file(file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null): boolean
    vfunc_process_file_attributes(file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null): boolean
    vfunc_remove_file(file: Gio.File, children_only: boolean, builder: Tracker.SparqlBuilder): boolean
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
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of TrackerMiner-1.0.TrackerMiner.Miner */
    /**
     * Tells the miner to mark `urls` are to ignore on next update.
     * @param urls the urls to mark as to ignore on next update
     */
    vfunc_ignore_next_update(urls: string[]): void
    vfunc_paused(): void
    vfunc_progress(status: string, progress: number): void
    vfunc_resumed(): void
    vfunc_started(): void
    vfunc_stopped(): void
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
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of TrackerMiner-1.0.TrackerMiner.MinerFS */
    /**
     * The ::finished signal is emitted when `miner_fs` has finished
     * all pending processing.
     * @param elapsed elapsed time since mining was started
     * @param directories_found number of directories found
     * @param directories_ignored number of ignored directories
     * @param files_found number of files found
     * @param files_ignored number of ignored files
     */
    connect(sigName: "finished", callback: (($obj: MinerFS, elapsed: number, directories_found: number, directories_ignored: number, files_found: number, files_ignored: number) => void)): number
    connect_after(sigName: "finished", callback: (($obj: MinerFS, elapsed: number, directories_found: number, directories_ignored: number, files_found: number, files_ignored: number) => void)): number
    emit(sigName: "finished", elapsed: number, directories_found: number, directories_ignored: number, files_found: number, files_ignored: number): void
    /**
     * The ::finished-crawl signal is emitted when `miner_fs` has
     * finished finding all resources that need to be indexed
     * with the root location of `file`. At this point, it's likely
     * many are still in the queue to be added to the database,
     * but this gives some indication that a location is
     * processed.
     * @param file a #GFile
     */
    connect(sigName: "finished-root", callback: (($obj: MinerFS, file: Gio.File) => void)): number
    connect_after(sigName: "finished-root", callback: (($obj: MinerFS, file: Gio.File) => void)): number
    emit(sigName: "finished-root", file: Gio.File): void
    /**
     * The ::ignore-next-update-file signal is emitted whenever a file should
     * be marked as to ignore on next update, and it's metadata prepared for that.
     * 
     * `builder` is the #TrackerSparqlBuilder where all sparql updates
     * to be performed for `file` will be appended.
     * @param file a #GFile
     * @param builder a #TrackerSparqlBuilder
     * @param cancellable a #GCancellable
     */
    connect(sigName: "ignore-next-update-file", callback: (($obj: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean)): number
    connect_after(sigName: "ignore-next-update-file", callback: (($obj: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean)): number
    emit(sigName: "ignore-next-update-file", file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null): void
    /**
     * The ::process-file signal is emitted whenever a file should
     * be processed, and it's metadata extracted.
     * 
     * `builder` is the #TrackerSparqlBuilder where all sparql updates
     * to be performed for `file` will be appended.
     * 
     * This signal allows both synchronous and asynchronous extraction,
     * in the synchronous case `cancellable` can be safely ignored. In
     * either case, on successful metadata extraction, implementations
     * must call tracker_miner_fs_file_notify() to indicate that
     * processing has finished on `file,` so the miner can execute
     * the SPARQL updates and continue processing other files.
     * @param file a #GFile
     * @param builder a #TrackerSparqlBuilder
     * @param cancellable a #GCancellable
     */
    connect(sigName: "process-file", callback: (($obj: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean)): number
    connect_after(sigName: "process-file", callback: (($obj: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean)): number
    emit(sigName: "process-file", file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null): void
    /**
     * The ::process-file-attributes signal is emitted whenever a file should
     * be processed, but only the attribute-related metadata extracted.
     * 
     * `builder` is the #TrackerSparqlBuilder where all sparql updates
     * to be performed for `file` will be appended. For the properties being
     * updated, the DELETE statements should be included as well.
     * 
     * This signal allows both synchronous and asynchronous extraction,
     * in the synchronous case `cancellable` can be safely ignored. In
     * either case, on successful metadata extraction, implementations
     * must call tracker_miner_fs_file_notify() to indicate that
     * processing has finished on `file,` so the miner can execute
     * the SPARQL updates and continue processing other files.
     * @param file a #GFile
     * @param builder a #TrackerSparqlBuilder
     * @param cancellable a #GCancellable
     */
    connect(sigName: "process-file-attributes", callback: (($obj: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean)): number
    connect_after(sigName: "process-file-attributes", callback: (($obj: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean)): number
    emit(sigName: "process-file-attributes", file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null): void
    /**
     * The ::remove-file signal will be emitted on files that need removal
     * according to the miner configuration (either the files themselves are
     * deleted, or the directory/contents no longer need inspection according
     * to miner configuration and their location.
     * 
     * This operation is always assumed to be recursive, the `children_only`
     * argument will be %TRUE if for any reason the topmost directory needs
     * to stay (e.g. moved from a recursively indexed directory tree to a
     * non-recursively indexed location).
     * 
     * The `builder` argument can be used to provide additional SPARQL
     * deletes and updates necessary around the deletion of those items. If
     * the return value of this signal is %TRUE, `builder` is expected to
     * contain all relevant deletes for this operation.
     * 
     * If the return value of this signal is %FALSE, the miner will apply
     * its default behavior, which is deleting all triples that correspond
     * to the affected URIs.
     * @param file a #GFile
     * @param children_only #TRUE if only the children of `file` are to be deleted
     * @param builder a #TrackerSparqlBuilder
     */
    connect(sigName: "remove-file", callback: (($obj: MinerFS, file: Gio.File, children_only: boolean, builder: Tracker.SparqlBuilder) => boolean)): number
    connect_after(sigName: "remove-file", callback: (($obj: MinerFS, file: Gio.File, children_only: boolean, builder: Tracker.SparqlBuilder) => boolean)): number
    emit(sigName: "remove-file", file: Gio.File, children_only: boolean, builder: Tracker.SparqlBuilder): void
    /**
     * The ::writeback-file signal is emitted whenever a file must be written
     * back
     * @param file a #GFile
     * @param rdf_types the set of RDF types
     * @param results a set of results prepared by the preparation query
     * @param cancellable a #GCancellable
     */
    connect(sigName: "writeback-file", callback: (($obj: MinerFS, file: Gio.File, rdf_types: string[], results: any[], cancellable?: Gio.Cancellable | null) => boolean)): number
    connect_after(sigName: "writeback-file", callback: (($obj: MinerFS, file: Gio.File, rdf_types: string[], results: any[], cancellable?: Gio.Cancellable | null) => boolean)): number
    emit(sigName: "writeback-file", file: Gio.File, rdf_types: string[], results: any[], cancellable?: Gio.Cancellable | null): void
    /* Signals of TrackerMiner-1.0.TrackerMiner.Miner */
    /**
     * the ::ignore-next-update signal is emitted in the miner
     * right after it has been asked to mark `urls` as to ignore on next update
     * through tracker_miner_ignore_next_update().
     * @param urls the urls to mark as ignore on next update
     */
    connect(sigName: "ignore-next-update", callback: (($obj: MinerFS, urls: string[]) => void)): number
    connect_after(sigName: "ignore-next-update", callback: (($obj: MinerFS, urls: string[]) => void)): number
    emit(sigName: "ignore-next-update", urls: string[]): void
    /**
     * the ::paused signal is emitted whenever
     * there is any reason to pause, either
     * internal (through tracker_miner_pause()) or
     * external (through DBus, see #TrackerMinerManager).
     */
    connect(sigName: "paused", callback: (($obj: MinerFS) => void)): number
    connect_after(sigName: "paused", callback: (($obj: MinerFS) => void)): number
    emit(sigName: "paused"): void
    /**
     * the ::progress signal will be emitted by TrackerMiner implementations
     * to indicate progress about the data mining process. `status` will
     * contain a translated string with the current miner status and `progress`
     * will indicate how much has been processed so far. `remaining_time` will
     * give the number expected of seconds to finish processing, 0 if the
     * value cannot be estimated, and -1 if its not applicable.
     * @param status miner status
     * @param progress a #gdouble indicating miner progress, from 0 to 1.
     * @param remaining_time a #gint indicating the reamaining processing time, in seconds.
     */
    connect(sigName: "progress", callback: (($obj: MinerFS, status: string, progress: number, remaining_time: number) => void)): number
    connect_after(sigName: "progress", callback: (($obj: MinerFS, status: string, progress: number, remaining_time: number) => void)): number
    emit(sigName: "progress", status: string, progress: number, remaining_time: number): void
    /**
     * the ::resumed signal is emitted whenever
     * all reasons to pause have disappeared, see
     * tracker_miner_resume() and #TrackerMinerManager.
     */
    connect(sigName: "resumed", callback: (($obj: MinerFS) => void)): number
    connect_after(sigName: "resumed", callback: (($obj: MinerFS) => void)): number
    emit(sigName: "resumed"): void
    /**
     * the ::started signal is emitted in the miner
     * right after it has been started through
     * tracker_miner_start().
     */
    connect(sigName: "started", callback: (($obj: MinerFS) => void)): number
    connect_after(sigName: "started", callback: (($obj: MinerFS) => void)): number
    emit(sigName: "started"): void
    /**
     * the ::stopped signal is emitted in the miner
     * right after it has been stopped through
     * tracker_miner_stop().
     */
    connect(sigName: "stopped", callback: (($obj: MinerFS) => void)): number
    connect_after(sigName: "stopped", callback: (($obj: MinerFS) => void)): number
    emit(sigName: "stopped"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::data-provider", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-provider", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::initial-crawling", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::initial-crawling", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mtime-checking", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtime-checking", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::processing-pool-ready-limit", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::processing-pool-ready-limit", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::processing-pool-wait-limit", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::processing-pool-wait-limit", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::throttle", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::throttle", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::introspection-handler", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-handler", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::introspection-xml", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-xml", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining-time", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-time", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::status", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MinerFS_ConstructProps)
    _init (config?: MinerFS_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Gives the caller the #GQuark used to identify #TrackerMinerFS errors
     * in #GError structures. The #GQuark is used as the domain for the error.
     */
    static error_quark(): GLib.Quark
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     * @param object_type a #GType supporting #GInitable.
     * @param parameters the parameters to use to construct the object
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface MinerOnline_ConstructProps extends Miner_ConstructProps {
}
class MinerOnline {
    /* Properties of TrackerMiner-1.0.TrackerMiner.MinerOnline */
    readonly network_type: NetworkType
    /* Properties of TrackerMiner-1.0.TrackerMiner.Miner */
    introspection_handler: object
    introspection_xml: string
    readonly name: string
    progress: number
    remaining_time: number
    status: string
    /* Fields of TrackerMiner-1.0.TrackerMiner.Miner */
    parent_instance: GObject.Object
    priv: MinerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of TrackerMiner-1.0.TrackerMiner.MinerOnline */
    /**
     * Get the type of network this data `miner` uses to index content.
     */
    get_network_type(): NetworkType
    /* Methods of TrackerMiner-1.0.TrackerMiner.Miner */
    /**
     * Gets the #TrackerSparqlConnection initialized by `miner`
     */
    get_connection(): Tracker.SparqlConnection
    /**
     * Gets the #GDBusConnection initialized by `miner`
     */
    get_dbus_connection(): Gio.DBusConnection
    /**
     * Gets the DBus name registered by `miner`
     */
    get_dbus_full_name(): string
    /**
     * Gets the DBus path registered by `miner`
     */
    get_dbus_full_path(): string
    /**
     * Returns the number of pause reasons holding `miner` from
     * indexing contents.
     */
    get_n_pause_reasons(): number
    /**
     * Tells the miner to mark `urls` are to ignore on next update.
     * @param urls the urls to mark as to ignore on next update
     */
    ignore_next_update(urls: string[]): void
    /**
     * Returns #TRUE if the miner is paused.
     */
    is_paused(): boolean
    /**
     * Returns #TRUE if the miner has been started.
     */
    is_started(): boolean
    /**
     * Asks `miner` to pause. On success the cookie ID is returned,
     * this is what must be used in tracker_miner_resume() to resume
     * operations. On failure `error` will be set and -1 will be returned.
     * @param reason reason to pause
     */
    pause(reason: string): number
    /**
     * Asks the miner to resume processing. The cookie must be something
     * returned by tracker_miner_pause(). The miner won't actually resume
     * operations until all pause requests have been resumed.
     * @param cookie pause cookie
     */
    resume(cookie: number): boolean
    /**
     * Tells the miner to start processing data.
     */
    start(): void
    /**
     * Tells the miner to stop processing data.
     */
    stop(): void
    /* Methods of GObject-2.0.GObject.Object */
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
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
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
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
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
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
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
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
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
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
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
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
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
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
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
     */
    steal_qdata(quark: GLib.Quark): object | null
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
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
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
    watch_closure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Initable */
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
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of TrackerMiner-1.0.TrackerMiner.MinerOnline */
    vfunc_connected(network: NetworkType): boolean
    vfunc_disconnected(): void
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
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of TrackerMiner-1.0.TrackerMiner.Miner */
    /**
     * Tells the miner to mark `urls` are to ignore on next update.
     * @param urls the urls to mark as to ignore on next update
     */
    vfunc_ignore_next_update(urls: string[]): void
    vfunc_paused(): void
    vfunc_progress(status: string, progress: number): void
    vfunc_resumed(): void
    vfunc_started(): void
    vfunc_stopped(): void
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
    vfunc_init(cancellable?: Gio.Cancellable | null): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of TrackerMiner-1.0.TrackerMiner.MinerOnline */
    /**
     * the ::connected signal is emitted when a specific `type` of
     * network becomes connected.
     * 
     * Return values of #TRUE from this signal indicate whether a
     * #TrackerMiner should resume indexing or not upon ::connected.
     * @param type a #TrackerNetworkType
     */
    connect(sigName: "connected", callback: (($obj: MinerOnline, type: NetworkType) => boolean)): number
    connect_after(sigName: "connected", callback: (($obj: MinerOnline, type: NetworkType) => boolean)): number
    emit(sigName: "connected", type: NetworkType): void
    /**
     * the ::disconnected signal is emitted when a specific `type` of
     * network becomes disconnected.
     */
    connect(sigName: "disconnected", callback: (($obj: MinerOnline) => void)): number
    connect_after(sigName: "disconnected", callback: (($obj: MinerOnline) => void)): number
    emit(sigName: "disconnected"): void
    /* Signals of TrackerMiner-1.0.TrackerMiner.Miner */
    /**
     * the ::ignore-next-update signal is emitted in the miner
     * right after it has been asked to mark `urls` as to ignore on next update
     * through tracker_miner_ignore_next_update().
     * @param urls the urls to mark as ignore on next update
     */
    connect(sigName: "ignore-next-update", callback: (($obj: MinerOnline, urls: string[]) => void)): number
    connect_after(sigName: "ignore-next-update", callback: (($obj: MinerOnline, urls: string[]) => void)): number
    emit(sigName: "ignore-next-update", urls: string[]): void
    /**
     * the ::paused signal is emitted whenever
     * there is any reason to pause, either
     * internal (through tracker_miner_pause()) or
     * external (through DBus, see #TrackerMinerManager).
     */
    connect(sigName: "paused", callback: (($obj: MinerOnline) => void)): number
    connect_after(sigName: "paused", callback: (($obj: MinerOnline) => void)): number
    emit(sigName: "paused"): void
    /**
     * the ::progress signal will be emitted by TrackerMiner implementations
     * to indicate progress about the data mining process. `status` will
     * contain a translated string with the current miner status and `progress`
     * will indicate how much has been processed so far. `remaining_time` will
     * give the number expected of seconds to finish processing, 0 if the
     * value cannot be estimated, and -1 if its not applicable.
     * @param status miner status
     * @param progress a #gdouble indicating miner progress, from 0 to 1.
     * @param remaining_time a #gint indicating the reamaining processing time, in seconds.
     */
    connect(sigName: "progress", callback: (($obj: MinerOnline, status: string, progress: number, remaining_time: number) => void)): number
    connect_after(sigName: "progress", callback: (($obj: MinerOnline, status: string, progress: number, remaining_time: number) => void)): number
    emit(sigName: "progress", status: string, progress: number, remaining_time: number): void
    /**
     * the ::resumed signal is emitted whenever
     * all reasons to pause have disappeared, see
     * tracker_miner_resume() and #TrackerMinerManager.
     */
    connect(sigName: "resumed", callback: (($obj: MinerOnline) => void)): number
    connect_after(sigName: "resumed", callback: (($obj: MinerOnline) => void)): number
    emit(sigName: "resumed"): void
    /**
     * the ::started signal is emitted in the miner
     * right after it has been started through
     * tracker_miner_start().
     */
    connect(sigName: "started", callback: (($obj: MinerOnline) => void)): number
    connect_after(sigName: "started", callback: (($obj: MinerOnline) => void)): number
    emit(sigName: "started"): void
    /**
     * the ::stopped signal is emitted in the miner
     * right after it has been stopped through
     * tracker_miner_stop().
     */
    connect(sigName: "stopped", callback: (($obj: MinerOnline) => void)): number
    connect_after(sigName: "stopped", callback: (($obj: MinerOnline) => void)): number
    emit(sigName: "stopped"): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::network-type", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-type", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::introspection-handler", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-handler", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::introspection-xml", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-xml", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::progress", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::remaining-time", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-time", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::status", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MinerOnline_ConstructProps)
    _init (config?: MinerOnline_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     * @param object_type a #GType supporting #GInitable.
     * @param parameters the parameters to use to construct the object
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    static newv(object_type: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
abstract class DataProviderIface {
    /* Fields of TrackerMiner-1.0.TrackerMiner.DataProviderIface */
    /**
     * Parent interface type.
     */
    g_iface: GObject.TypeInterface
    begin: (data_provider: DataProvider, url: Gio.File, attributes: string, flags: DirectoryFlags, cancellable?: Gio.Cancellable | null) => Enumerator
    begin_async: (data_provider: DataProvider, url: Gio.File, attributes: string, flags: DirectoryFlags, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    begin_finish: (data_provider: DataProvider, result: Gio.AsyncResult) => Enumerator
    end: (data_provider: DataProvider, enumerator: Enumerator, cancellable?: Gio.Cancellable | null) => boolean
    end_async: (data_provider: DataProvider, enumerator: Enumerator, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    end_finish: (data_provider: DataProvider, result: Gio.AsyncResult) => boolean
    static name: string
}
abstract class DecoratorClass {
    /* Fields of TrackerMiner-1.0.TrackerMiner.DecoratorClass */
    /**
     * parent object class.
     */
    parent_class: MinerClass
    items_available: (decorator: Decorator) => void
    finished: (decorator: Decorator) => void
    /**
     * Reserved for future API improvements.
     */
    padding: object[]
    static name: string
}
abstract class DecoratorFSClass {
    /* Fields of TrackerMiner-1.0.TrackerMiner.DecoratorFSClass */
    /**
     * parent object class.
     */
    parent_class: DecoratorClass
    /**
     * Reserved for future API improvements.
     */
    padding: object[]
    static name: string
}
class DecoratorInfo {
    /* Methods of TrackerMiner-1.0.TrackerMiner.DecoratorInfo */
    /**
     * A MIME¹ type is a way of describing the content type of a file or
     * set of data. An example would be 'text/plain' for a clear text
     * document or file.
     * 
     * ¹: http://en.wikipedia.org/wiki/MIME
     */
    get_mimetype(): string
    /**
     * A #TrackerSparqlBuilder allows the caller to extract the final
     * SPARQL used to insert the extracted metadata into the database for
     * the resource being processed.
     * 
     * This function calls g_task_get_task_data() on the return value of
     * tracker_decorator_info_get_task().
     */
    get_sparql(): Tracker.SparqlBuilder
    /**
     * Get the #GTask associated with retrieving extended metadata and
     * information for a URN in Tracker.
     * 
     * The task object's data (accessible with g_task_get_task_data()) is the
     * #TrackerSparqlBuilder that you must populate with the results of the
     * metadata extraction. This can also be accessed with
     * tracker_decorator_info_get_sparql().
     */
    get_task(): Gio.Task
    /**
     * A URL is a Uniform Resource Locator and should be a location associated
     * with a resource in the database. For example, 'file:///tmp/foo.txt'.
     */
    get_url(): string
    /**
     * A URN is a Uniform Resource Name and should be a unique identifier
     * for a resource in the database.
     */
    get_urn(): string
    /**
     * Increases the reference count of `info` by 1.
     */
    ref(): DecoratorInfo
    /**
     * Decreases the reference count of `info` by 1 and frees it when the
     * reference count reaches 0.
     */
    unref(): void
    static name: string
}
abstract class EnumeratorIface {
    /* Fields of TrackerMiner-1.0.TrackerMiner.EnumeratorIface */
    /**
     * Parent interface type.
     */
    g_iface: GObject.TypeInterface
    next: (enumerator: Enumerator, cancellable?: Gio.Cancellable | null) => object | null
    next_async: (enumerator: Enumerator, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    next_finish: (enumerator: Enumerator, result: Gio.AsyncResult) => object | null
    static name: string
}
abstract class IndexingTreeClass {
    /* Fields of TrackerMiner-1.0.TrackerMiner.IndexingTreeClass */
    /**
     * parent object class
     */
    parent_class: GObject.ObjectClass
    directory_added: (indexing_tree: IndexingTree, directory: Gio.File) => void
    directory_removed: (indexing_tree: IndexingTree, directory: Gio.File) => void
    directory_updated: (indexing_tree: IndexingTree, directory: Gio.File) => void
    child_updated: (indexing_tree: IndexingTree, root: Gio.File, child: Gio.File) => void
    /**
     * Reserved for future API improvements.
     */
    padding: object[]
    static name: string
}
abstract class MinerClass {
    /* Fields of TrackerMiner-1.0.TrackerMiner.MinerClass */
    /**
     * parent object class.
     */
    parent_class: GObject.ObjectClass
    started: (miner: Miner) => void
    stopped: (miner: Miner) => void
    paused: (miner: Miner) => void
    resumed: (miner: Miner) => void
    progress: (miner: Miner, status: string, progress: number) => void
    ignore_next_update: (miner: Miner, urls: string[]) => void
    /**
     * Reserved for future API improvements.
     */
    padding: object[]
    static name: string
}
abstract class MinerFSClass {
    /* Fields of TrackerMiner-1.0.TrackerMiner.MinerFSClass */
    /**
     * parent object class
     */
    parent: MinerClass
    process_file: (fs: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean
    ignore_next_update_file: (fs: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean
    finished: (fs: MinerFS, elapsed: number, directories_found: number, directories_ignored: number, files_found: number, files_ignored: number) => void
    process_file_attributes: (fs: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean
    finished_root: (fs: MinerFS, root: Gio.File, directories_found: number, directories_ignored: number, files_found: number, files_ignored: number) => void
    remove_file: (fs: MinerFS, file: Gio.File, children_only: boolean, builder: Tracker.SparqlBuilder) => boolean
    /**
     * Reserved for future API improvements.
     */
    padding: object[]
    static name: string
}
class MinerFSPrivate {
    static name: string
}
abstract class MinerOnlineClass {
    /* Fields of TrackerMiner-1.0.TrackerMiner.MinerOnlineClass */
    /**
     * a #TrackerMinerClass
     */
    parent_class: MinerClass
    connected: (miner: MinerOnline, network: NetworkType) => boolean
    disconnected: (miner: MinerOnline) => void
    /**
     * Reserved for future API improvements.
     */
    padding: object[]
    static name: string
}
class MinerPrivate {
    static name: string
}
}
export default TrackerMiner;