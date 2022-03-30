/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * TrackerMiner-1.0
 */

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
     * @param ioPriority the [I/O priority][io-priority] of the request
     * @param cancellable optional #GCancellable object, %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    beginAsync(url: Gio.File, attributes: string, flags: DirectoryFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the asynchronous operation started with
     * tracker_data_provider_begin_async().
     * @param result a #GAsyncResult.
     */
    beginFinish(result: Gio.AsyncResult): Enumerator
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
     * @param ioPriority the [I/O priority][io-priority] of the request
     * @param cancellable optional #GCancellable object, %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    endAsync(enumerator: Enumerator, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the asynchronous operation started with
     * tracker_data_provider_end_async().
     * @param result a #GAsyncResult.
     */
    endFinish(result: Gio.AsyncResult): boolean
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
     * @param ioPriority the [I/O priority][io-priority] of the request
     * @param cancellable optional #GCancellable object, %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    nextAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the asynchronous operation started with
     * tracker_enumerator_next_async().
     * @param result a #GAsyncResult.
     */
    nextFinish(result: Gio.AsyncResult): object | null
    static name: string
}
interface Decorator_ConstructProps extends Miner_ConstructProps {
    /* Constructor properties of TrackerMiner-1.0.TrackerMiner.Decorator */
    classNames?: string[]
    commitBatchSize?: number
    dataSource?: string
    priorityRdfTypes?: string[]
}
class Decorator {
    /* Properties of TrackerMiner-1.0.TrackerMiner.Decorator */
    classNames: string[]
    commitBatchSize: number
    readonly dataSource: string
    priorityRdfTypes: string[]
    /* Properties of TrackerMiner-1.0.TrackerMiner.Miner */
    introspectionHandler: object
    introspectionXml: string
    readonly name: string
    progress: number
    remainingTime: number
    status: string
    /* Fields of TrackerMiner-1.0.TrackerMiner.Miner */
    parentInstance: GObject.Object
    priv: MinerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of TrackerMiner-1.0.TrackerMiner.Decorator */
    /**
     * Deletes resource needing extended metadata extraction from the
     * queue. `id` is the same IDs emitted by tracker-store when the database is
     * updated for consistency. For details, see the GraphUpdated signal.
     * @param id an ID.
     */
    deleteId(id: number): void
    /**
     * This function returns a string list of class names which are being
     * updated with extended metadata. An example would be 'nfo:Document'.
     */
    getClassNames(): string[]
    /**
     * The unique string identifying this #TrackerDecorator that has
     * extracted the extended metadata. This is essentially an identifier
     * so it's clear WHO has extracted this extended metadata.
     */
    getDataSource(): string
    /**
     * Get the number of items left in the queue to be processed. This
     * indicates content that may already exist in Tracker but is waiting
     * to be further flurished with metadata with a 2nd pass extraction or
     * index.
     */
    getNItems(): number
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
    nextFinish(result: Gio.AsyncResult): DecoratorInfo
    /**
     * Adds resource needing extended metadata extraction to the queue.
     * `id` is the same IDs emitted by tracker-store when the database is updated for
     * consistency. For details, see the GraphUpdated signal.
     * @param id the ID of the resource ID.
     * @param classNameId the ID of the resource's class.
     */
    prependId(id: number, classNameId: number): void
    /**
     * Re-evaluate the priority queues internally to ensure that
     * `rdf_types` are handled before all other content. This is useful for
     * applications that need their content available sooner than the
     * standard time it would take to index content.
     * @param rdfTypes a string array of rdf types
     */
    setPriorityRdfTypes(rdfTypes: string): void
    /* Methods of TrackerMiner-1.0.TrackerMiner.Miner */
    /**
     * Gets the #TrackerSparqlConnection initialized by `miner`
     */
    getConnection(): Tracker.SparqlConnection
    /**
     * Gets the #GDBusConnection initialized by `miner`
     */
    getDbusConnection(): Gio.DBusConnection
    /**
     * Gets the DBus name registered by `miner`
     */
    getDbusFullName(): string
    /**
     * Gets the DBus path registered by `miner`
     */
    getDbusFullPath(): string
    /**
     * Returns the number of pause reasons holding `miner` from
     * indexing contents.
     */
    getNPauseReasons(): number
    /**
     * Tells the miner to mark `urls` are to ignore on next update.
     * @param urls the urls to mark as to ignore on next update
     */
    ignoreNextUpdate(urls: string[]): void
    /**
     * Returns #TRUE if the miner is paused.
     */
    isPaused(): boolean
    /**
     * Returns #TRUE if the miner has been started.
     */
    isStarted(): boolean
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
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
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
    watchClosure(closure: Function): void
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
    /* Signals of TrackerMiner-1.0.TrackerMiner.Decorator */
    /**
     * The ::finished signal will be emitted whenever the
     * #TrackerDecorator has finished extracted extended metadata
     * for resources in the database.
     */
    connect(sigName: "finished", callback: (() => void)): number
    on(sigName: "finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "finished"): void
    /**
     * The ::items-available signal will be emitted whenever the
     * #TrackerDecorator sees resources that are available for
     * extended metadata extraction.
     */
    connect(sigName: "items-available", callback: (() => void)): number
    on(sigName: "items-available", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "items-available", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "items-available", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "items-available"): void
    /* Signals of TrackerMiner-1.0.TrackerMiner.Miner */
    /**
     * the ::ignore-next-update signal is emitted in the miner
     * right after it has been asked to mark `urls` as to ignore on next update
     * through tracker_miner_ignore_next_update().
     * @param urls the urls to mark as ignore on next update
     */
    connect(sigName: "ignore-next-update", callback: ((urls: string[]) => void)): number
    on(sigName: "ignore-next-update", callback: (urls: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "ignore-next-update", callback: (urls: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "ignore-next-update", callback: (urls: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "ignore-next-update", urls: string[]): void
    /**
     * the ::paused signal is emitted whenever
     * there is any reason to pause, either
     * internal (through tracker_miner_pause()) or
     * external (through DBus, see #TrackerMinerManager).
     */
    connect(sigName: "paused", callback: (() => void)): number
    on(sigName: "paused", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "paused", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "paused", callback: () => void): NodeJS.EventEmitter
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
     * @param remainingTime a #gint indicating the reamaining processing time, in seconds.
     */
    connect(sigName: "progress", callback: ((status: string, progress: number, remainingTime: number) => void)): number
    on(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void): NodeJS.EventEmitter
    emit(sigName: "progress", status: string, progress: number, remainingTime: number): void
    /**
     * the ::resumed signal is emitted whenever
     * all reasons to pause have disappeared, see
     * tracker_miner_resume() and #TrackerMinerManager.
     */
    connect(sigName: "resumed", callback: (() => void)): number
    on(sigName: "resumed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resumed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resumed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "resumed"): void
    /**
     * the ::started signal is emitted in the miner
     * right after it has been started through
     * tracker_miner_start().
     */
    connect(sigName: "started", callback: (() => void)): number
    on(sigName: "started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "started"): void
    /**
     * the ::stopped signal is emitted in the miner
     * right after it has been stopped through
     * tracker_miner_stop().
     */
    connect(sigName: "stopped", callback: (() => void)): number
    on(sigName: "stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "stopped", callback: () => void): NodeJS.EventEmitter
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
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::class-names", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-names", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::class-names", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::class-names", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::class-names", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::commit-batch-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::commit-batch-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::commit-batch-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::commit-batch-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::commit-batch-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::data-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::data-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::data-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::data-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority-rdf-types", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority-rdf-types", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority-rdf-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority-rdf-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority-rdf-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::introspection-handler", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-handler", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::introspection-xml", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-xml", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::status", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Decorator_ConstructProps)
    _init (config?: Decorator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Gives the caller the #GQuark used to identify #TrackerDecorator errors
     * in #GError structures. The #GQuark is used as the domain for the error.
     */
    static errorQuark(): GLib.Quark
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     * @param objectType a #GType supporting #GInitable.
     * @param parameters the parameters to use to construct the object
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface DecoratorFS_ConstructProps extends Decorator_ConstructProps {
}
class DecoratorFS {
    /* Properties of TrackerMiner-1.0.TrackerMiner.Decorator */
    classNames: string[]
    commitBatchSize: number
    readonly dataSource: string
    priorityRdfTypes: string[]
    /* Properties of TrackerMiner-1.0.TrackerMiner.Miner */
    introspectionHandler: object
    introspectionXml: string
    readonly name: string
    progress: number
    remainingTime: number
    status: string
    /* Fields of TrackerMiner-1.0.TrackerMiner.Decorator */
    parentInstance: Miner
    priv: object
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of TrackerMiner-1.0.TrackerMiner.DecoratorFS */
    /**
     * Prepends a file for processing.
     * @param file a #GFile to process
     */
    prependFile(file: Gio.File): number
    /* Methods of TrackerMiner-1.0.TrackerMiner.Decorator */
    /**
     * Deletes resource needing extended metadata extraction from the
     * queue. `id` is the same IDs emitted by tracker-store when the database is
     * updated for consistency. For details, see the GraphUpdated signal.
     * @param id an ID.
     */
    deleteId(id: number): void
    /**
     * This function returns a string list of class names which are being
     * updated with extended metadata. An example would be 'nfo:Document'.
     */
    getClassNames(): string[]
    /**
     * The unique string identifying this #TrackerDecorator that has
     * extracted the extended metadata. This is essentially an identifier
     * so it's clear WHO has extracted this extended metadata.
     */
    getDataSource(): string
    /**
     * Get the number of items left in the queue to be processed. This
     * indicates content that may already exist in Tracker but is waiting
     * to be further flurished with metadata with a 2nd pass extraction or
     * index.
     */
    getNItems(): number
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
    nextFinish(result: Gio.AsyncResult): DecoratorInfo
    /**
     * Adds resource needing extended metadata extraction to the queue.
     * `id` is the same IDs emitted by tracker-store when the database is updated for
     * consistency. For details, see the GraphUpdated signal.
     * @param id the ID of the resource ID.
     * @param classNameId the ID of the resource's class.
     */
    prependId(id: number, classNameId: number): void
    /**
     * Re-evaluate the priority queues internally to ensure that
     * `rdf_types` are handled before all other content. This is useful for
     * applications that need their content available sooner than the
     * standard time it would take to index content.
     * @param rdfTypes a string array of rdf types
     */
    setPriorityRdfTypes(rdfTypes: string): void
    /* Methods of TrackerMiner-1.0.TrackerMiner.Miner */
    /**
     * Gets the #TrackerSparqlConnection initialized by `miner`
     */
    getConnection(): Tracker.SparqlConnection
    /**
     * Gets the #GDBusConnection initialized by `miner`
     */
    getDbusConnection(): Gio.DBusConnection
    /**
     * Gets the DBus name registered by `miner`
     */
    getDbusFullName(): string
    /**
     * Gets the DBus path registered by `miner`
     */
    getDbusFullPath(): string
    /**
     * Returns the number of pause reasons holding `miner` from
     * indexing contents.
     */
    getNPauseReasons(): number
    /**
     * Tells the miner to mark `urls` are to ignore on next update.
     * @param urls the urls to mark as to ignore on next update
     */
    ignoreNextUpdate(urls: string[]): void
    /**
     * Returns #TRUE if the miner is paused.
     */
    isPaused(): boolean
    /**
     * Returns #TRUE if the miner has been started.
     */
    isStarted(): boolean
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
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
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
    watchClosure(closure: Function): void
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
    /* Signals of TrackerMiner-1.0.TrackerMiner.Decorator */
    /**
     * The ::finished signal will be emitted whenever the
     * #TrackerDecorator has finished extracted extended metadata
     * for resources in the database.
     */
    connect(sigName: "finished", callback: (() => void)): number
    on(sigName: "finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "finished"): void
    /**
     * The ::items-available signal will be emitted whenever the
     * #TrackerDecorator sees resources that are available for
     * extended metadata extraction.
     */
    connect(sigName: "items-available", callback: (() => void)): number
    on(sigName: "items-available", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "items-available", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "items-available", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "items-available"): void
    /* Signals of TrackerMiner-1.0.TrackerMiner.Miner */
    /**
     * the ::ignore-next-update signal is emitted in the miner
     * right after it has been asked to mark `urls` as to ignore on next update
     * through tracker_miner_ignore_next_update().
     * @param urls the urls to mark as ignore on next update
     */
    connect(sigName: "ignore-next-update", callback: ((urls: string[]) => void)): number
    on(sigName: "ignore-next-update", callback: (urls: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "ignore-next-update", callback: (urls: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "ignore-next-update", callback: (urls: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "ignore-next-update", urls: string[]): void
    /**
     * the ::paused signal is emitted whenever
     * there is any reason to pause, either
     * internal (through tracker_miner_pause()) or
     * external (through DBus, see #TrackerMinerManager).
     */
    connect(sigName: "paused", callback: (() => void)): number
    on(sigName: "paused", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "paused", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "paused", callback: () => void): NodeJS.EventEmitter
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
     * @param remainingTime a #gint indicating the reamaining processing time, in seconds.
     */
    connect(sigName: "progress", callback: ((status: string, progress: number, remainingTime: number) => void)): number
    on(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void): NodeJS.EventEmitter
    emit(sigName: "progress", status: string, progress: number, remainingTime: number): void
    /**
     * the ::resumed signal is emitted whenever
     * all reasons to pause have disappeared, see
     * tracker_miner_resume() and #TrackerMinerManager.
     */
    connect(sigName: "resumed", callback: (() => void)): number
    on(sigName: "resumed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resumed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resumed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "resumed"): void
    /**
     * the ::started signal is emitted in the miner
     * right after it has been started through
     * tracker_miner_start().
     */
    connect(sigName: "started", callback: (() => void)): number
    on(sigName: "started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "started"): void
    /**
     * the ::stopped signal is emitted in the miner
     * right after it has been stopped through
     * tracker_miner_stop().
     */
    connect(sigName: "stopped", callback: (() => void)): number
    on(sigName: "stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "stopped", callback: () => void): NodeJS.EventEmitter
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
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::class-names", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-names", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::class-names", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::class-names", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::class-names", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::commit-batch-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::commit-batch-size", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::commit-batch-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::commit-batch-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::commit-batch-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::data-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-source", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::data-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::data-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::data-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::priority-rdf-types", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority-rdf-types", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::priority-rdf-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::priority-rdf-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::priority-rdf-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::introspection-handler", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-handler", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::introspection-xml", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-xml", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::status", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DecoratorFS_ConstructProps)
    _init (config?: DecoratorFS_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     * @param objectType a #GType supporting #GInitable.
     * @param parameters the parameters to use to construct the object
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface IndexingTree_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of TrackerMiner-1.0.TrackerMiner.IndexingTree */
    filterHidden?: boolean
    root?: Gio.File
}
class IndexingTree {
    /* Properties of TrackerMiner-1.0.TrackerMiner.IndexingTree */
    filterHidden: boolean
    readonly root: Gio.File
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
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
     * @param globString glob-style string for the filter
     */
    addFilter(filter: FilterType, globString: string): void
    /**
     * Clears all filters of a given type.
     * @param type filter type to clear
     */
    clearFilters(type: FilterType): void
    /**
     * returns %TRUE if `file` should be indexed according to the
     * parameters given through tracker_indexing_tree_add() and
     * tracker_indexing_tree_add_filter().
     * 
     * If `file_type` is #G_FILE_TYPE_UNKNOWN, file type will be queried to the
     * file system.
     * @param file a #GFile
     * @param fileType a #GFileType
     */
    fileIsIndexable(file: Gio.File, fileType: Gio.FileType): boolean
    /**
     * Evaluates if the URL represented by `file` is the same of that for
     * the root of the `tree`.
     * @param file a #GFile to compare
     */
    fileIsRoot(file: Gio.File): boolean
    /**
     * Returns %TRUE if `file` matches any filter of the given filter type.
     * @param type filter type
     * @param file a #GFile
     */
    fileMatchesFilter(type: FilterType, file: Gio.File): boolean
    /**
     * Get the default filtering policies for `tree` when indexing content.
     * Some content is black listed or white listed and the default policy
     * for that is returned here. The `filter` allows specific type of
     * policies to be returned, for example, the default policy for files
     * (#TRACKER_FILTER_FILE).
     * @param filter a #TrackerFilterType
     */
    getDefaultPolicy(filter: FilterType): FilterPolicy
    /**
     * Describes if the `tree` should index hidden content. To change this
     * setting, see tracker_indexing_tree_set_filter_hidden().
     */
    getFilterHidden(): boolean
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
    getMasterRoot(): Gio.File
    /**
     * Returns the #GFile that was previously added through tracker_indexing_tree_add()
     * and would equal or contain `file,` or %NULL if none applies.
     * 
     * If the return value is non-%NULL, `directory_flags` would contain the
     * #TrackerDirectoryFlags applying to `file`.
     * @param file a #GFile
     */
    getRoot(file: Gio.File): [ /* returnType */ Gio.File, /* directoryFlags */ DirectoryFlags ]
    /**
     * Returns the list of indexing roots in `tree`
     */
    listRoots(): Gio.File[]
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
    notifyUpdate(file: Gio.File, recursive: boolean): boolean
    /**
     * returns %TRUE if `parent` should be indexed based on its contents.
     * @param parent parent directory
     * @param children children within `parent`
     */
    parentIsIndexable(parent: Gio.File, children: Gio.File[]): boolean
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
    setDefaultPolicy(filter: FilterType, policy: FilterPolicy): void
    /**
     * When indexing content, sometimes it is preferable to ignore hidden
     * content, for example, files prefixed with &quot;.&quot;. This is
     * common for files in a home directory which are usually config
     * files.
     * 
     * Sets the indexing policy for `tree` with hidden files and content.
     * To ignore hidden files, `filter_hidden` should be %TRUE, otherwise
     * %FALSE.
     * @param filterHidden a boolean
     */
    setFilterHidden(filterHidden: boolean): void
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
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
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
    watchClosure(closure: Function): void
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
    connect(sigName: "child-updated", callback: ((root: Gio.File, child: Gio.File) => void)): number
    on(sigName: "child-updated", callback: (root: Gio.File, child: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-updated", callback: (root: Gio.File, child: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-updated", callback: (root: Gio.File, child: Gio.File) => void): NodeJS.EventEmitter
    emit(sigName: "child-updated", root: Gio.File, child: Gio.File): void
    /**
     * the ::directory-added signal is emitted when a new
     * directory is added to the list of other directories which
     * are to be considered for indexing. Typically this is
     * signalled when the tracker_indexing_tree_add() API is
     * called.
     * @param directory a #GFile
     */
    connect(sigName: "directory-added", callback: ((directory: Gio.File) => void)): number
    on(sigName: "directory-added", callback: (directory: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "directory-added", callback: (directory: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "directory-added", callback: (directory: Gio.File) => void): NodeJS.EventEmitter
    emit(sigName: "directory-added", directory: Gio.File): void
    /**
     * the ::directory-removed signal is emitted when a
     * directory is removed from the list of other directories
     * which are to be considered for indexing. Typically this is
     * signalled when the tracker_indexing_tree_remove() API is
     * called.
     * @param directory a #GFile
     */
    connect(sigName: "directory-removed", callback: ((directory: Gio.File) => void)): number
    on(sigName: "directory-removed", callback: (directory: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "directory-removed", callback: (directory: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "directory-removed", callback: (directory: Gio.File) => void): NodeJS.EventEmitter
    emit(sigName: "directory-removed", directory: Gio.File): void
    /**
     * The ::directory-updated signal is emitted on a root
     * when either its indexing flags change (e.g. due to consecutive
     * calls to tracker_indexing_tree_add()), or anytime an update is
     * requested through tracker_indexing_tree_notify_update().
     * @param directory a #GFile
     */
    connect(sigName: "directory-updated", callback: ((directory: Gio.File) => void)): number
    on(sigName: "directory-updated", callback: (directory: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "directory-updated", callback: (directory: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "directory-updated", callback: (directory: Gio.File) => void): NodeJS.EventEmitter
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
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::filter-hidden", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-hidden", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::filter-hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::filter-hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::filter-hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: IndexingTree_ConstructProps)
    _init (config?: IndexingTree_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): IndexingTree
    static newWithRoot(root: Gio.File): IndexingTree
    static $gtype: GObject.Type
}
interface Miner_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of TrackerMiner-1.0.TrackerMiner.Miner */
    introspectionHandler?: object
    introspectionXml?: string
    name?: string
    progress?: number
    remainingTime?: number
    status?: string
}
class Miner {
    /* Properties of TrackerMiner-1.0.TrackerMiner.Miner */
    introspectionHandler: object
    introspectionXml: string
    readonly name: string
    progress: number
    remainingTime: number
    status: string
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of TrackerMiner-1.0.TrackerMiner.Miner */
    /**
     * Gets the #TrackerSparqlConnection initialized by `miner`
     */
    getConnection(): Tracker.SparqlConnection
    /**
     * Gets the #GDBusConnection initialized by `miner`
     */
    getDbusConnection(): Gio.DBusConnection
    /**
     * Gets the DBus name registered by `miner`
     */
    getDbusFullName(): string
    /**
     * Gets the DBus path registered by `miner`
     */
    getDbusFullPath(): string
    /**
     * Returns the number of pause reasons holding `miner` from
     * indexing contents.
     */
    getNPauseReasons(): number
    /**
     * Tells the miner to mark `urls` are to ignore on next update.
     * @param urls the urls to mark as to ignore on next update
     */
    ignoreNextUpdate(urls: string[]): void
    /**
     * Returns #TRUE if the miner is paused.
     */
    isPaused(): boolean
    /**
     * Returns #TRUE if the miner has been started.
     */
    isStarted(): boolean
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
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
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
    watchClosure(closure: Function): void
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
    /* Signals of TrackerMiner-1.0.TrackerMiner.Miner */
    /**
     * the ::ignore-next-update signal is emitted in the miner
     * right after it has been asked to mark `urls` as to ignore on next update
     * through tracker_miner_ignore_next_update().
     * @param urls the urls to mark as ignore on next update
     */
    connect(sigName: "ignore-next-update", callback: ((urls: string[]) => void)): number
    on(sigName: "ignore-next-update", callback: (urls: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "ignore-next-update", callback: (urls: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "ignore-next-update", callback: (urls: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "ignore-next-update", urls: string[]): void
    /**
     * the ::paused signal is emitted whenever
     * there is any reason to pause, either
     * internal (through tracker_miner_pause()) or
     * external (through DBus, see #TrackerMinerManager).
     */
    connect(sigName: "paused", callback: (() => void)): number
    on(sigName: "paused", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "paused", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "paused", callback: () => void): NodeJS.EventEmitter
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
     * @param remainingTime a #gint indicating the reamaining processing time, in seconds.
     */
    connect(sigName: "progress", callback: ((status: string, progress: number, remainingTime: number) => void)): number
    on(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void): NodeJS.EventEmitter
    emit(sigName: "progress", status: string, progress: number, remainingTime: number): void
    /**
     * the ::resumed signal is emitted whenever
     * all reasons to pause have disappeared, see
     * tracker_miner_resume() and #TrackerMinerManager.
     */
    connect(sigName: "resumed", callback: (() => void)): number
    on(sigName: "resumed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resumed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resumed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "resumed"): void
    /**
     * the ::started signal is emitted in the miner
     * right after it has been started through
     * tracker_miner_start().
     */
    connect(sigName: "started", callback: (() => void)): number
    on(sigName: "started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "started"): void
    /**
     * the ::stopped signal is emitted in the miner
     * right after it has been stopped through
     * tracker_miner_stop().
     */
    connect(sigName: "stopped", callback: (() => void)): number
    on(sigName: "stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "stopped", callback: () => void): NodeJS.EventEmitter
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
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::introspection-handler", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-handler", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::introspection-xml", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-xml", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::status", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Miner_ConstructProps)
    _init (config?: Miner_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Gives the caller the #GQuark used to identify #TrackerMiner errors
     * in #GError structures. The #GQuark is used as the domain for the error.
     */
    static errorQuark(): GLib.Quark
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     * @param objectType a #GType supporting #GInitable.
     * @param parameters the parameters to use to construct the object
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface MinerFS_ConstructProps extends Miner_ConstructProps {
    /* Constructor properties of TrackerMiner-1.0.TrackerMiner.MinerFS */
    dataProvider?: DataProvider
    initialCrawling?: boolean
    mtimeChecking?: boolean
    processingPoolReadyLimit?: number
    processingPoolWaitLimit?: number
    root?: Gio.File
    throttle?: number
}
class MinerFS {
    /* Properties of TrackerMiner-1.0.TrackerMiner.MinerFS */
    readonly dataProvider: DataProvider
    initialCrawling: boolean
    mtimeChecking: boolean
    processingPoolReadyLimit: number
    processingPoolWaitLimit: number
    readonly root: Gio.File
    throttle: number
    /* Properties of TrackerMiner-1.0.TrackerMiner.Miner */
    introspectionHandler: object
    introspectionXml: string
    readonly name: string
    progress: number
    remainingTime: number
    status: string
    /* Fields of TrackerMiner-1.0.TrackerMiner.Miner */
    parentInstance: GObject.Object
    priv: MinerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of TrackerMiner-1.0.TrackerMiner.MinerFS */
    /**
     * Tells the miner-fs that the given #GFile corresponds to a
     * directory which was created in the store without a specific
     * parent object. In this case, when regenerating internal
     * caches, an extra query will be done so that these elements
     * are taken into account.
     * @param file a #GFile
     */
    addDirectoryWithoutParent(file: Gio.File): void
    /**
     * Tells the filesystem miner to check and index a directory,
     * this file must be part of the usual crawling directories
     * of #TrackerMinerFS. See tracker_miner_fs_directory_add().
     * @param file #GFile for the directory to check
     * @param checkParents whether to check parents and eligibility or not
     */
    checkDirectory(file: Gio.File, checkParents: boolean): void
    /**
     * Tells the filesystem miner to check and index a directory at
     * a given priority, this file must be part of the usual crawling
     * directories of #TrackerMinerFS. See tracker_miner_fs_directory_add().
     * @param file #GFile for the directory to check
     * @param priority the priority of the check task
     * @param checkParents whether to check parents and eligibility or not
     */
    checkDirectoryWithPriority(file: Gio.File, priority: number, checkParents: boolean): void
    /**
     * Tells the filesystem miner to check and index a file,
     * this file must be part of the usual crawling directories
     * of #TrackerMinerFS. See tracker_miner_fs_directory_add().
     * @param file #GFile for the file to check
     * @param checkParents whether to check parents and eligibility or not
     */
    checkFile(file: Gio.File, checkParents: boolean): void
    /**
     * Tells the filesystem miner to check and index a file at
     * a given priority, this file must be part of the usual
     * crawling directories of #TrackerMinerFS. See
     * tracker_miner_fs_directory_add().
     * @param file #GFile for the file to check
     * @param priority the priority of the check task
     * @param checkParents whether to check parents and eligibility or not
     */
    checkFileWithPriority(file: Gio.File, priority: number, checkParents: boolean): void
    /**
     * Tells the filesystem miner to inspect a directory.
     * @param file #GFile for the directory to inspect
     * @param recurse whether the directory should be inspected recursively
     */
    directoryAdd(file: Gio.File, recurse: boolean): void
    /**
     * Removes a directory from being inspected by `fs`. Note that only directory
     *  watches are removed.
     * @param file #GFile for the directory to be removed
     */
    directoryRemove(file: Gio.File): boolean
    /**
     * Removes a directory from being inspected by `fs,` and removes all
     * associated metadata of the directory (and its contents) from the
     * store.
     * @param file #GFile for the directory to be removed
     */
    directoryRemoveFull(file: Gio.File): boolean
    /**
     * Notifies `fs` that all processing on `file` has been finished, if any error
     * happened during file data processing, it should be passed in `error,` else
     * that parameter will contain %NULL to reflect success.
     * @param file a #GFile
     * @param error a #GError with the error that happened during processing, or %NULL.
     */
    fileNotify(file: Gio.File, error: GLib.Error): void
    /**
     * Tells `fs` to force mtime checking (regardless of the global mtime check
     * configuration) on the given `directory`.
     * @param directory a #GFile representing the directory
     */
    forceMtimeChecking(directory: Gio.File): void
    forceRecheck(): void
    /**
     * Returns the #TrackerDataProvider implementation, which is being used
     * to supply #GFile and #GFileInfo content to Tracker.
     */
    getDataProvider(): DataProvider
    /**
     * Returns the #TrackerIndexingTree which determines
     * what files/directories are indexed by `fs`
     */
    getIndexingTree(): IndexingTree
    /**
     * Returns a boolean which indicates if the indexing tree is crawled
     * upon start up or not. This may be set to %FALSE if working
     * prodominently with cloud data where you can't perform these checks.
     * By default and for local file systems, this is enabled.
     */
    getInitialCrawling(): boolean
    /**
     * Returns a boolean used to identify if file modification time checks
     * are performed when processing content. This may be set to %FALSE if
     * working prodominently with cloud data where you can't perform these
     * checks. By default and for local file systems, this is enabled.
     */
    getMtimeChecking(): boolean
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
    getParentUrn(file: Gio.File): string | null
    /**
     * Gets the current throttle value, see
     * tracker_miner_fs_set_throttle() for more details.
     */
    getThrottle(): number
    /**
     * If the item exists in the store, this function retrieves
     * the URN for a #GFile being currently processed.
     * 
     * If `file` is not being currently processed by `fs,` or doesn't
     * exist in the store yet, %NULL will be returned.
     * @param file a #GFile obtained in #TrackerMinerFS::process-file
     */
    getUrn(file: Gio.File): string | null
    /**
     * The `fs` keeps many priority queus for content it is processing.
     * This function returns %TRUE if the sum of all (or any) priority
     * queues is more than 0. This includes items deleted, created,
     * updated, moved or being written back.
     */
    hasItemsToProcess(): boolean
    /**
     * If the item exists in the store, this function retrieves
     * the URN of the given #GFile
     * 
     * If `file` doesn't exist in the store yet, %NULL will be returned.
     * @param file a #GFile
     */
    queryUrn(file: Gio.File): string
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
     * @param doInitialCrawling a #gboolean
     */
    setInitialCrawling(doInitialCrawling: boolean): void
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
     * @param mtimeChecking a #gboolean
     */
    setMtimeChecking(mtimeChecking: boolean): void
    /**
     * Tells the filesystem miner to throttle its operations. A value of
     * 0.0 means no throttling at all, so the miner will perform
     * operations at full speed, 1.0 is the slowest value. With a value of
     * 1.0, the `fs` is typically waiting one full second before handling
     * the next batch of queued items to be processed.
     * @param throttle a double between 0.0 and 1.0
     */
    setThrottle(throttle: number): void
    /**
     * Tells the filesystem miner to writeback a file.
     * @param file #GFile for the file to check
     * @param rdfTypes A #GStrv with rdf types
     * @param results A array of results from the preparation query
     */
    writebackFile(file: Gio.File, rdfTypes: string[], results: any[]): void
    /**
     * Notifies `fs` that all writing back on `file` has been finished, if any error
     * happened during file data processing, it should be passed in `error,` else
     * that parameter will contain %NULL to reflect success.
     * @param file a #GFile
     * @param error a #GError with the error that happened during processing, or %NULL.
     */
    writebackNotify(file: Gio.File, error: GLib.Error): void
    /* Methods of TrackerMiner-1.0.TrackerMiner.Miner */
    /**
     * Gets the #TrackerSparqlConnection initialized by `miner`
     */
    getConnection(): Tracker.SparqlConnection
    /**
     * Gets the #GDBusConnection initialized by `miner`
     */
    getDbusConnection(): Gio.DBusConnection
    /**
     * Gets the DBus name registered by `miner`
     */
    getDbusFullName(): string
    /**
     * Gets the DBus path registered by `miner`
     */
    getDbusFullPath(): string
    /**
     * Returns the number of pause reasons holding `miner` from
     * indexing contents.
     */
    getNPauseReasons(): number
    /**
     * Tells the miner to mark `urls` are to ignore on next update.
     * @param urls the urls to mark as to ignore on next update
     */
    ignoreNextUpdate(urls: string[]): void
    /**
     * Returns #TRUE if the miner is paused.
     */
    isPaused(): boolean
    /**
     * Returns #TRUE if the miner has been started.
     */
    isStarted(): boolean
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
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
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
    watchClosure(closure: Function): void
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
    /* Signals of TrackerMiner-1.0.TrackerMiner.MinerFS */
    /**
     * The ::finished signal is emitted when `miner_fs` has finished
     * all pending processing.
     * @param elapsed elapsed time since mining was started
     * @param directoriesFound number of directories found
     * @param directoriesIgnored number of ignored directories
     * @param filesFound number of files found
     * @param filesIgnored number of ignored files
     */
    connect(sigName: "finished", callback: ((elapsed: number, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number) => void)): number
    on(sigName: "finished", callback: (elapsed: number, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: (elapsed: number, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: (elapsed: number, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number) => void): NodeJS.EventEmitter
    emit(sigName: "finished", elapsed: number, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number): void
    /**
     * The ::finished-crawl signal is emitted when `miner_fs` has
     * finished finding all resources that need to be indexed
     * with the root location of `file`. At this point, it's likely
     * many are still in the queue to be added to the database,
     * but this gives some indication that a location is
     * processed.
     * @param file a #GFile
     */
    connect(sigName: "finished-root", callback: ((file: Gio.File) => void)): number
    on(sigName: "finished-root", callback: (file: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished-root", callback: (file: Gio.File) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished-root", callback: (file: Gio.File) => void): NodeJS.EventEmitter
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
    connect(sigName: "ignore-next-update-file", callback: ((file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean)): number
    on(sigName: "ignore-next-update-file", callback: (file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "ignore-next-update-file", callback: (file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "ignore-next-update-file", callback: (file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => void): NodeJS.EventEmitter
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
    connect(sigName: "process-file", callback: ((file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean)): number
    on(sigName: "process-file", callback: (file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "process-file", callback: (file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "process-file", callback: (file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => void): NodeJS.EventEmitter
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
    connect(sigName: "process-file-attributes", callback: ((file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean)): number
    on(sigName: "process-file-attributes", callback: (file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "process-file-attributes", callback: (file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "process-file-attributes", callback: (file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => void): NodeJS.EventEmitter
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
     * @param childrenOnly #TRUE if only the children of `file` are to be deleted
     * @param builder a #TrackerSparqlBuilder
     */
    connect(sigName: "remove-file", callback: ((file: Gio.File, childrenOnly: boolean, builder: Tracker.SparqlBuilder) => boolean)): number
    on(sigName: "remove-file", callback: (file: Gio.File, childrenOnly: boolean, builder: Tracker.SparqlBuilder) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "remove-file", callback: (file: Gio.File, childrenOnly: boolean, builder: Tracker.SparqlBuilder) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "remove-file", callback: (file: Gio.File, childrenOnly: boolean, builder: Tracker.SparqlBuilder) => void): NodeJS.EventEmitter
    emit(sigName: "remove-file", file: Gio.File, childrenOnly: boolean, builder: Tracker.SparqlBuilder): void
    /**
     * The ::writeback-file signal is emitted whenever a file must be written
     * back
     * @param file a #GFile
     * @param rdfTypes the set of RDF types
     * @param results a set of results prepared by the preparation query
     * @param cancellable a #GCancellable
     */
    connect(sigName: "writeback-file", callback: ((file: Gio.File, rdfTypes: string[], results: any[], cancellable?: Gio.Cancellable | null) => boolean)): number
    on(sigName: "writeback-file", callback: (file: Gio.File, rdfTypes: string[], results: any[], cancellable?: Gio.Cancellable | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "writeback-file", callback: (file: Gio.File, rdfTypes: string[], results: any[], cancellable?: Gio.Cancellable | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "writeback-file", callback: (file: Gio.File, rdfTypes: string[], results: any[], cancellable?: Gio.Cancellable | null) => void): NodeJS.EventEmitter
    emit(sigName: "writeback-file", file: Gio.File, rdfTypes: string[], results: any[], cancellable?: Gio.Cancellable | null): void
    /* Signals of TrackerMiner-1.0.TrackerMiner.Miner */
    /**
     * the ::ignore-next-update signal is emitted in the miner
     * right after it has been asked to mark `urls` as to ignore on next update
     * through tracker_miner_ignore_next_update().
     * @param urls the urls to mark as ignore on next update
     */
    connect(sigName: "ignore-next-update", callback: ((urls: string[]) => void)): number
    on(sigName: "ignore-next-update", callback: (urls: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "ignore-next-update", callback: (urls: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "ignore-next-update", callback: (urls: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "ignore-next-update", urls: string[]): void
    /**
     * the ::paused signal is emitted whenever
     * there is any reason to pause, either
     * internal (through tracker_miner_pause()) or
     * external (through DBus, see #TrackerMinerManager).
     */
    connect(sigName: "paused", callback: (() => void)): number
    on(sigName: "paused", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "paused", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "paused", callback: () => void): NodeJS.EventEmitter
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
     * @param remainingTime a #gint indicating the reamaining processing time, in seconds.
     */
    connect(sigName: "progress", callback: ((status: string, progress: number, remainingTime: number) => void)): number
    on(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void): NodeJS.EventEmitter
    emit(sigName: "progress", status: string, progress: number, remainingTime: number): void
    /**
     * the ::resumed signal is emitted whenever
     * all reasons to pause have disappeared, see
     * tracker_miner_resume() and #TrackerMinerManager.
     */
    connect(sigName: "resumed", callback: (() => void)): number
    on(sigName: "resumed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resumed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resumed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "resumed"): void
    /**
     * the ::started signal is emitted in the miner
     * right after it has been started through
     * tracker_miner_start().
     */
    connect(sigName: "started", callback: (() => void)): number
    on(sigName: "started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "started"): void
    /**
     * the ::stopped signal is emitted in the miner
     * right after it has been stopped through
     * tracker_miner_stop().
     */
    connect(sigName: "stopped", callback: (() => void)): number
    on(sigName: "stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "stopped", callback: () => void): NodeJS.EventEmitter
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
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::data-provider", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-provider", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::data-provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::data-provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::data-provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::initial-crawling", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::initial-crawling", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::initial-crawling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::initial-crawling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::initial-crawling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtime-checking", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtime-checking", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtime-checking", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtime-checking", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtime-checking", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::processing-pool-ready-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::processing-pool-ready-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::processing-pool-ready-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::processing-pool-ready-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::processing-pool-ready-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::processing-pool-wait-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::processing-pool-wait-limit", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::processing-pool-wait-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::processing-pool-wait-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::processing-pool-wait-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::root", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::throttle", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::throttle", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::throttle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::throttle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::throttle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::introspection-handler", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-handler", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::introspection-xml", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-xml", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::status", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MinerFS_ConstructProps)
    _init (config?: MinerFS_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Gives the caller the #GQuark used to identify #TrackerMinerFS errors
     * in #GError structures. The #GQuark is used as the domain for the error.
     */
    static errorQuark(): GLib.Quark
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     * @param objectType a #GType supporting #GInitable.
     * @param parameters the parameters to use to construct the object
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
interface MinerOnline_ConstructProps extends Miner_ConstructProps {
}
class MinerOnline {
    /* Properties of TrackerMiner-1.0.TrackerMiner.MinerOnline */
    readonly networkType: NetworkType
    /* Properties of TrackerMiner-1.0.TrackerMiner.Miner */
    introspectionHandler: object
    introspectionXml: string
    readonly name: string
    progress: number
    remainingTime: number
    status: string
    /* Fields of TrackerMiner-1.0.TrackerMiner.Miner */
    parentInstance: GObject.Object
    priv: MinerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    gTypeInstance: GObject.TypeInstance
    /* Methods of TrackerMiner-1.0.TrackerMiner.MinerOnline */
    /**
     * Get the type of network this data `miner` uses to index content.
     */
    getNetworkType(): NetworkType
    /* Methods of TrackerMiner-1.0.TrackerMiner.Miner */
    /**
     * Gets the #TrackerSparqlConnection initialized by `miner`
     */
    getConnection(): Tracker.SparqlConnection
    /**
     * Gets the #GDBusConnection initialized by `miner`
     */
    getDbusConnection(): Gio.DBusConnection
    /**
     * Gets the DBus name registered by `miner`
     */
    getDbusFullName(): string
    /**
     * Gets the DBus path registered by `miner`
     */
    getDbusFullPath(): string
    /**
     * Returns the number of pause reasons holding `miner` from
     * indexing contents.
     */
    getNPauseReasons(): number
    /**
     * Tells the miner to mark `urls` are to ignore on next update.
     * @param urls the urls to mark as to ignore on next update
     */
    ignoreNextUpdate(urls: string[]): void
    /**
     * Returns #TRUE if the miner is paused.
     */
    isPaused(): boolean
    /**
     * Returns #TRUE if the miner has been started.
     */
    isStarted(): boolean
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
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param sourceProperty the property on `source` to bind
     * @param target the target #GObject
     * @param targetProperty the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transformTo a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transformFrom a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
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
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    getQdata(quark: GLib.Quark): object | null
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
    isFloating(): boolean
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
     * @param propertyName the name of a property installed on the class of `object`.
     */
    notify(propertyName: string): void
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
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    stealData(key: string): object | null
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
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
    watchClosure(closure: Function): void
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
    /* Signals of TrackerMiner-1.0.TrackerMiner.MinerOnline */
    /**
     * the ::connected signal is emitted when a specific `type` of
     * network becomes connected.
     * 
     * Return values of #TRUE from this signal indicate whether a
     * #TrackerMiner should resume indexing or not upon ::connected.
     * @param type a #TrackerNetworkType
     */
    connect(sigName: "connected", callback: ((type: NetworkType) => boolean)): number
    on(sigName: "connected", callback: (type: NetworkType) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connected", callback: (type: NetworkType) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connected", callback: (type: NetworkType) => void): NodeJS.EventEmitter
    emit(sigName: "connected", type: NetworkType): void
    /**
     * the ::disconnected signal is emitted when a specific `type` of
     * network becomes disconnected.
     */
    connect(sigName: "disconnected", callback: (() => void)): number
    on(sigName: "disconnected", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "disconnected", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "disconnected", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "disconnected"): void
    /* Signals of TrackerMiner-1.0.TrackerMiner.Miner */
    /**
     * the ::ignore-next-update signal is emitted in the miner
     * right after it has been asked to mark `urls` as to ignore on next update
     * through tracker_miner_ignore_next_update().
     * @param urls the urls to mark as ignore on next update
     */
    connect(sigName: "ignore-next-update", callback: ((urls: string[]) => void)): number
    on(sigName: "ignore-next-update", callback: (urls: string[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "ignore-next-update", callback: (urls: string[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "ignore-next-update", callback: (urls: string[]) => void): NodeJS.EventEmitter
    emit(sigName: "ignore-next-update", urls: string[]): void
    /**
     * the ::paused signal is emitted whenever
     * there is any reason to pause, either
     * internal (through tracker_miner_pause()) or
     * external (through DBus, see #TrackerMinerManager).
     */
    connect(sigName: "paused", callback: (() => void)): number
    on(sigName: "paused", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "paused", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "paused", callback: () => void): NodeJS.EventEmitter
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
     * @param remainingTime a #gint indicating the reamaining processing time, in seconds.
     */
    connect(sigName: "progress", callback: ((status: string, progress: number, remainingTime: number) => void)): number
    on(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress", callback: (status: string, progress: number, remainingTime: number) => void): NodeJS.EventEmitter
    emit(sigName: "progress", status: string, progress: number, remainingTime: number): void
    /**
     * the ::resumed signal is emitted whenever
     * all reasons to pause have disappeared, see
     * tracker_miner_resume() and #TrackerMinerManager.
     */
    connect(sigName: "resumed", callback: (() => void)): number
    on(sigName: "resumed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resumed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resumed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "resumed"): void
    /**
     * the ::started signal is emitted in the miner
     * right after it has been started through
     * tracker_miner_start().
     */
    connect(sigName: "started", callback: (() => void)): number
    on(sigName: "started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "started", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "started", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "started"): void
    /**
     * the ::stopped signal is emitted in the miner
     * right after it has been stopped through
     * tracker_miner_stop().
     */
    connect(sigName: "stopped", callback: (() => void)): number
    on(sigName: "stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "stopped", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "stopped", callback: () => void): NodeJS.EventEmitter
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
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::network-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-type", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::network-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::network-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::network-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::introspection-handler", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-handler", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::introspection-xml", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-xml", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::remaining-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-time", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::status", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MinerOnline_ConstructProps)
    _init (config?: MinerOnline_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     * @param objectType a #GType supporting #GInitable.
     * @param parameters the parameters to use to construct the object
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
abstract class DataProviderIface {
    /* Fields of TrackerMiner-1.0.TrackerMiner.DataProviderIface */
    /**
     * Parent interface type.
     */
    gIface: GObject.TypeInterface
    begin: (dataProvider: DataProvider, url: Gio.File, attributes: string, flags: DirectoryFlags, cancellable?: Gio.Cancellable | null) => Enumerator
    beginAsync: (dataProvider: DataProvider, url: Gio.File, attributes: string, flags: DirectoryFlags, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    beginFinish: (dataProvider: DataProvider, result: Gio.AsyncResult) => Enumerator
    end: (dataProvider: DataProvider, enumerator: Enumerator, cancellable?: Gio.Cancellable | null) => boolean
    endAsync: (dataProvider: DataProvider, enumerator: Enumerator, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    endFinish: (dataProvider: DataProvider, result: Gio.AsyncResult) => boolean
    static name: string
}
abstract class DecoratorClass {
    /* Fields of TrackerMiner-1.0.TrackerMiner.DecoratorClass */
    /**
     * parent object class.
     */
    parentClass: MinerClass
    itemsAvailable: (decorator: Decorator) => void
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
    parentClass: DecoratorClass
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
    getMimetype(): string
    /**
     * A #TrackerSparqlBuilder allows the caller to extract the final
     * SPARQL used to insert the extracted metadata into the database for
     * the resource being processed.
     * 
     * This function calls g_task_get_task_data() on the return value of
     * tracker_decorator_info_get_task().
     */
    getSparql(): Tracker.SparqlBuilder
    /**
     * Get the #GTask associated with retrieving extended metadata and
     * information for a URN in Tracker.
     * 
     * The task object's data (accessible with g_task_get_task_data()) is the
     * #TrackerSparqlBuilder that you must populate with the results of the
     * metadata extraction. This can also be accessed with
     * tracker_decorator_info_get_sparql().
     */
    getTask(): Gio.Task
    /**
     * A URL is a Uniform Resource Locator and should be a location associated
     * with a resource in the database. For example, 'file:///tmp/foo.txt'.
     */
    getUrl(): string
    /**
     * A URN is a Uniform Resource Name and should be a unique identifier
     * for a resource in the database.
     */
    getUrn(): string
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
    gIface: GObject.TypeInterface
    next: (enumerator: Enumerator, cancellable?: Gio.Cancellable | null) => object | null
    nextAsync: (enumerator: Enumerator, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    nextFinish: (enumerator: Enumerator, result: Gio.AsyncResult) => object | null
    static name: string
}
abstract class IndexingTreeClass {
    /* Fields of TrackerMiner-1.0.TrackerMiner.IndexingTreeClass */
    /**
     * parent object class
     */
    parentClass: GObject.ObjectClass
    directoryAdded: (indexingTree: IndexingTree, directory: Gio.File) => void
    directoryRemoved: (indexingTree: IndexingTree, directory: Gio.File) => void
    directoryUpdated: (indexingTree: IndexingTree, directory: Gio.File) => void
    childUpdated: (indexingTree: IndexingTree, root: Gio.File, child: Gio.File) => void
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
    parentClass: GObject.ObjectClass
    started: (miner: Miner) => void
    stopped: (miner: Miner) => void
    paused: (miner: Miner) => void
    resumed: (miner: Miner) => void
    progress: (miner: Miner, status: string, progress: number) => void
    ignoreNextUpdate: (miner: Miner, urls: string[]) => void
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
    processFile: (fs: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean
    ignoreNextUpdateFile: (fs: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean
    finished: (fs: MinerFS, elapsed: number, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number) => void
    processFileAttributes: (fs: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable?: Gio.Cancellable | null) => boolean
    finishedRoot: (fs: MinerFS, root: Gio.File, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number) => void
    removeFile: (fs: MinerFS, file: Gio.File, childrenOnly: boolean, builder: Tracker.SparqlBuilder) => boolean
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
    parentClass: MinerClass
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