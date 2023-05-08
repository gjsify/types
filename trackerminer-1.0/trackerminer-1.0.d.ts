
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * TrackerMiner-1.0
 */

import type Tracker from '@girs/tracker-1.0';
import type GLib from '@girs/glib-2.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GModule from '@girs/gmodule-2.0';

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
const MINER_DBUS_INTERFACE: string | null
/**
 * D-Bus name prefix to use for all data miners. This allows custom
 * miners to be written using `TRACKER_MINER_DBUS_NAME_PREFIX` + "Files" for
 * example and would show up on D-Bus under
 * &quot;org.freedesktop.Tracker1.Miner.Files&quot;.
 */
const MINER_DBUS_NAME_PREFIX: string | null
/**
 * D-Bus path prefix to use for all data miners. This allows custom
 * miners to be written using `TRACKER_MINER_DBUS_PATH_PREFIX` + "Files" for
 * example and would show up on D-Bus under
 * &quot;/org/freedesktop/Tracker1/Miner/Files&quot;.
 */
const MINER_DBUS_PATH_PREFIX: string | null
/**
 * Used as the domain for any #GErrors reported by `TrackerMiner` objects.
 */
const MINER_ERROR_DOMAIN: string | null
module DataProvider {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface DataProvider {

    // Owm methods of TrackerMiner-1.0.TrackerMiner.DataProvider

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
    begin(url: Gio.File, attributes: string | null, flags: DirectoryFlags, cancellable: Gio.Cancellable | null): Enumerator
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
    begin_async(url: Gio.File, attributes: string | null, flags: DirectoryFlags, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of begin_async

    /**
     * Promisified version of {@link begin_async}
     * 
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
     * @returns A Promise of: a #TrackerEnumerator or %NULL on failure. This must be freed with g_object_unref().
     */
    begin_async(url: Gio.File, attributes: string | null, flags: DirectoryFlags, io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<Enumerator>
    /**
     * Finishes the asynchronous operation started with
     * tracker_data_provider_begin_async().
     * @param result a #GAsyncResult.
     * @returns a #TrackerEnumerator or %NULL on failure. This must be freed with g_object_unref().
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
     * @returns %TRUE on success, otherwise %FALSE and @error is set.
     */
    end(enumerator: Enumerator, cancellable: Gio.Cancellable | null): boolean
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
    end_async(enumerator: Enumerator, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of end_async

    /**
     * Promisified version of {@link end_async}
     * 
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
     * @returns A Promise of: %TRUE on success, otherwise %FALSE and @error is set.
     */
    end_async(enumerator: Enumerator, io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Finishes the asynchronous operation started with
     * tracker_data_provider_end_async().
     * @param result a #GAsyncResult.
     * @returns %TRUE on success, otherwise %FALSE and @error is set.
     */
    end_finish(result: Gio.AsyncResult): boolean

    // Own virtual methods of TrackerMiner-1.0.TrackerMiner.DataProvider

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
     * @virtual 
     * @param url a #GFile to enumerate
     * @param attributes an attribute query string
     * @param flags a set of #TrackerDirectoryFlags
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns a #TrackerEnumerator or %NULL on failure. This must be freed with g_object_unref().
     */
    vfunc_begin(url: Gio.File, attributes: string | null, flags: DirectoryFlags, cancellable: Gio.Cancellable | null): Enumerator
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
     * @virtual 
     * @param url a #GFile to enumerate
     * @param attributes an attribute query string
     * @param flags a set of #TrackerDirectoryFlags
     * @param io_priority the [I/O priority][io-priority] of the request
     * @param cancellable optional #GCancellable object, %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    vfunc_begin_async(url: Gio.File, attributes: string | null, flags: DirectoryFlags, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes the asynchronous operation started with
     * tracker_data_provider_begin_async().
     * @virtual 
     * @param result a #GAsyncResult.
     * @returns a #TrackerEnumerator or %NULL on failure. This must be freed with g_object_unref().
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
     * @virtual 
     * @param enumerator a #TrackerEnumerator originally created by tracker_data_provider_begin().
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns %TRUE on success, otherwise %FALSE and @error is set.
     */
    vfunc_end(enumerator: Enumerator, cancellable: Gio.Cancellable | null): boolean
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
     * @virtual 
     * @param enumerator a #TrackerEnumerator originally created by tracker_data_provider_begin().
     * @param io_priority the [I/O priority][io-priority] of the request
     * @param cancellable optional #GCancellable object, %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    vfunc_end_async(enumerator: Enumerator, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes the asynchronous operation started with
     * tracker_data_provider_end_async().
     * @virtual 
     * @param result a #GAsyncResult.
     * @returns %TRUE on success, otherwise %FALSE and @error is set.
     */
    vfunc_end_finish(result: Gio.AsyncResult): boolean

    // Class property signals of TrackerMiner-1.0.TrackerMiner.DataProvider

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An interface to enumerate URIs and feed the data to Tracker.
 * @interface 
 */
class DataProvider extends GObject.Object {

    // Own properties of TrackerMiner-1.0.TrackerMiner.DataProvider

    static name: string
    static $gtype: GObject.GType<DataProvider>

    // Constructors of TrackerMiner-1.0.TrackerMiner.DataProvider

    constructor(config?: DataProvider.ConstructorProperties) 
    _init(config?: DataProvider.ConstructorProperties): void
}

module Enumerator {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Enumerator {

    // Owm methods of TrackerMiner-1.0.TrackerMiner.Enumerator

    /**
     * Enumerates to the next piece of data according to the `enumerator`
     * implementation.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns Returns a #gpointer with the next item from the @enumerator, or %NULL when @error is set or the operation was cancelled in @cancellable. The data must be freed. The function to free depends on the data returned by the enumerator and the #TrackerDataProvider that created the @enumerator.
     */
    next(cancellable: Gio.Cancellable | null): any | null
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
    next_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of next_async

    /**
     * Promisified version of {@link next_async}
     * 
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
     * @returns A Promise of: Returns a #gpointer with the next item from the @enumerator, or %NULL when @error is set or the operation was cancelled in @cancellable. The data must be freed. The function to free depends on the data returned by the enumerator and the #TrackerDataProvider that created the @enumerator.
     */
    next_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<any | null>
    /**
     * Finishes the asynchronous operation started with
     * tracker_enumerator_next_async().
     * @param result a #GAsyncResult.
     * @returns Returns a #gpointer with the next item from the @enumerator, or %NULL when @error is set or the operation was cancelled in @cancellable. The data must be freed. The function to free depends on the data returned by the enumerator and the #TrackerDataProvider that created the @enumerator.
     */
    next_finish(result: Gio.AsyncResult): any | null

    // Own virtual methods of TrackerMiner-1.0.TrackerMiner.Enumerator

    /**
     * Enumerates to the next piece of data according to the `enumerator`
     * implementation.
     * @virtual 
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns Returns a #gpointer with the next item from the @enumerator, or %NULL when @error is set or the operation was cancelled in @cancellable. The data must be freed. The function to free depends on the data returned by the enumerator and the #TrackerDataProvider that created the @enumerator.
     */
    vfunc_next(cancellable: Gio.Cancellable | null): any | null
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
     * @virtual 
     * @param io_priority the [I/O priority][io-priority] of the request
     * @param cancellable optional #GCancellable object, %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    vfunc_next_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes the asynchronous operation started with
     * tracker_enumerator_next_async().
     * @virtual 
     * @param result a #GAsyncResult.
     * @returns Returns a #gpointer with the next item from the @enumerator, or %NULL when @error is set or the operation was cancelled in @cancellable. The data must be freed. The function to free depends on the data returned by the enumerator and the #TrackerDataProvider that created the @enumerator.
     */
    vfunc_next_finish(result: Gio.AsyncResult): any | null

    // Class property signals of TrackerMiner-1.0.TrackerMiner.Enumerator

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An interface to enumerate URIs and feed the data to Tracker.
 * @interface 
 */
class Enumerator extends GObject.Object {

    // Own properties of TrackerMiner-1.0.TrackerMiner.Enumerator

    static name: string
    static $gtype: GObject.GType<Enumerator>

    // Constructors of TrackerMiner-1.0.TrackerMiner.Enumerator

    constructor(config?: Enumerator.ConstructorProperties) 
    _init(config?: Enumerator.ConstructorProperties): void
}

module Decorator {

    // Signal callback interfaces

    /**
     * Signal callback interface for `finished`
     */
    interface FinishedSignalCallback {
        ($obj: Decorator): void
    }

    /**
     * Signal callback interface for `items-available`
     */
    interface ItemsAvailableSignalCallback {
        ($obj: Decorator): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, Miner.ConstructorProperties {

        // Own constructor properties of TrackerMiner-1.0.TrackerMiner.Decorator

        class_names?: string[] | null
        commit_batch_size?: number | null
        data_source?: string | null
        priority_rdf_types?: string[] | null
    }

}

interface Decorator extends Gio.Initable {

    // Own properties of TrackerMiner-1.0.TrackerMiner.Decorator

    class_names: string[]
    commit_batch_size: number
    readonly data_source: string | null
    priority_rdf_types: string[]

    // Own fields of TrackerMiner-1.0.TrackerMiner.Decorator

    parent_instance: Miner & GObject.Object
    priv: any

    // Owm methods of TrackerMiner-1.0.TrackerMiner.Decorator

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
     * @returns a const gchar** or #NULL.
     */
    get_class_names(): string[]
    /**
     * The unique string identifying this #TrackerDecorator that has
     * extracted the extended metadata. This is essentially an identifier
     * so it's clear WHO has extracted this extended metadata.
     * @returns a const gchar* or #NULL if an error happened.
     */
    get_data_source(): string | null
    /**
     * Get the number of items left in the queue to be processed. This
     * indicates content that may already exist in Tracker but is waiting
     * to be further flurished with metadata with a 2nd pass extraction or
     * index.
     * @returns the number of items queued to be processed, always >= 0.
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
    next(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Should be called in the callback function provided to
     * tracker_decorator_next() to return the result of the task be it an
     * error or not.
     * @param result a #GAsyncResult.
     * @returns a #TrackerDecoratorInfo on success or  #NULL on error. Free with tracker_decorator_info_unref().
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
    set_priority_rdf_types(rdf_types: string | null): void

    // Own virtual methods of TrackerMiner-1.0.TrackerMiner.Decorator

    vfunc_finished(): void
    vfunc_items_available(): void

    // Own signals of TrackerMiner-1.0.TrackerMiner.Decorator

    connect(sigName: "finished", callback: Decorator.FinishedSignalCallback): number
    connect_after(sigName: "finished", callback: Decorator.FinishedSignalCallback): number
    emit(sigName: "finished", ...args: any[]): void
    connect(sigName: "items-available", callback: Decorator.ItemsAvailableSignalCallback): number
    connect_after(sigName: "items-available", callback: Decorator.ItemsAvailableSignalCallback): number
    emit(sigName: "items-available", ...args: any[]): void

    // Class property signals of TrackerMiner-1.0.TrackerMiner.Decorator

    connect(sigName: "notify::class-names", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-names", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-names", ...args: any[]): void
    connect(sigName: "notify::commit-batch-size", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::commit-batch-size", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::commit-batch-size", ...args: any[]): void
    connect(sigName: "notify::data-source", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-source", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-source", ...args: any[]): void
    connect(sigName: "notify::priority-rdf-types", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority-rdf-types", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::priority-rdf-types", ...args: any[]): void
    connect(sigName: "notify::introspection-handler", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-handler", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::introspection-handler", ...args: any[]): void
    connect(sigName: "notify::introspection-xml", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-xml", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::introspection-xml", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::progress", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress", ...args: any[]): void
    connect(sigName: "notify::remaining-time", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-time", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remaining-time", ...args: any[]): void
    connect(sigName: "notify::status", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: Decorator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract miner object for passive extended metadata indexing, i.e.
 * data past the basic information such as file name, size, etc.
 * @class 
 */
class Decorator extends Miner {

    // Own properties of TrackerMiner-1.0.TrackerMiner.Decorator

    static name: string
    static $gtype: GObject.GType<Decorator>

    // Constructors of TrackerMiner-1.0.TrackerMiner.Decorator

    constructor(config?: Decorator.ConstructorProperties) 
    _init(config?: Decorator.ConstructorProperties): void
    /**
     * Gives the caller the #GQuark used to identify #TrackerDecorator errors
     * in #GError structures. The #GQuark is used as the domain for the error.
     * @returns the #GQuark used for the domain of a #GError.
     */
    static error_quark(): GLib.Quark
}

module DecoratorFS {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, Decorator.ConstructorProperties {
    }

}

interface DecoratorFS extends Gio.Initable {

    // Own fields of TrackerMiner-1.0.TrackerMiner.DecoratorFS

    parent_instance: Decorator & Miner & GObject.Object & GObject.Object
    priv: any

    // Owm methods of TrackerMiner-1.0.TrackerMiner.DecoratorFS

    /**
     * Prepends a file for processing.
     * @param file a #GFile to process
     * @returns the tracker:id of the element corresponding to the file
     */
    prepend_file(file: Gio.File): number

    // Class property signals of TrackerMiner-1.0.TrackerMiner.DecoratorFS

    connect(sigName: "notify::class-names", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::class-names", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::class-names", ...args: any[]): void
    connect(sigName: "notify::commit-batch-size", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::commit-batch-size", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::commit-batch-size", ...args: any[]): void
    connect(sigName: "notify::data-source", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-source", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-source", ...args: any[]): void
    connect(sigName: "notify::priority-rdf-types", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority-rdf-types", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::priority-rdf-types", ...args: any[]): void
    connect(sigName: "notify::introspection-handler", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-handler", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::introspection-handler", ...args: any[]): void
    connect(sigName: "notify::introspection-xml", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-xml", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::introspection-xml", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::progress", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress", ...args: any[]): void
    connect(sigName: "notify::remaining-time", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-time", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remaining-time", ...args: any[]): void
    connect(sigName: "notify::status", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: DecoratorFS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A decorator object.
 * @class 
 */
class DecoratorFS extends Decorator {

    // Own properties of TrackerMiner-1.0.TrackerMiner.DecoratorFS

    static name: string
    static $gtype: GObject.GType<DecoratorFS>

    // Constructors of TrackerMiner-1.0.TrackerMiner.DecoratorFS

    constructor(config?: DecoratorFS.ConstructorProperties) 
    _init(config?: DecoratorFS.ConstructorProperties): void
}

module IndexingTree {

    // Signal callback interfaces

    /**
     * Signal callback interface for `child-updated`
     */
    interface ChildUpdatedSignalCallback {
        ($obj: IndexingTree, root: Gio.File, child: Gio.File): void
    }

    /**
     * Signal callback interface for `directory-added`
     */
    interface DirectoryAddedSignalCallback {
        ($obj: IndexingTree, directory: Gio.File): void
    }

    /**
     * Signal callback interface for `directory-removed`
     */
    interface DirectoryRemovedSignalCallback {
        ($obj: IndexingTree, directory: Gio.File): void
    }

    /**
     * Signal callback interface for `directory-updated`
     */
    interface DirectoryUpdatedSignalCallback {
        ($obj: IndexingTree, directory: Gio.File): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of TrackerMiner-1.0.TrackerMiner.IndexingTree

        filter_hidden?: boolean | null
        root?: Gio.File | null
    }

}

interface IndexingTree {

    // Own properties of TrackerMiner-1.0.TrackerMiner.IndexingTree

    filter_hidden: boolean
    readonly root: Gio.File

    // Own fields of TrackerMiner-1.0.TrackerMiner.IndexingTree

    parent_instance: GObject.Object
    priv: any

    // Owm methods of TrackerMiner-1.0.TrackerMiner.IndexingTree

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
    add_filter(filter: FilterType, glob_string: string | null): void
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
     * @returns %TRUE if @file should be indexed.
     */
    file_is_indexable(file: Gio.File, file_type: Gio.FileType): boolean
    /**
     * Evaluates if the URL represented by `file` is the same of that for
     * the root of the `tree`.
     * @param file a #GFile to compare
     * @returns %TRUE if @file matches the URL canonically, otherwise %FALSE.
     */
    file_is_root(file: Gio.File): boolean
    /**
     * Returns %TRUE if `file` matches any filter of the given filter type.
     * @param type filter type
     * @param file a #GFile
     * @returns %TRUE if @file is filtered.
     */
    file_matches_filter(type: FilterType, file: Gio.File): boolean
    /**
     * Get the default filtering policies for `tree` when indexing content.
     * Some content is black listed or white listed and the default policy
     * for that is returned here. The `filter` allows specific type of
     * policies to be returned, for example, the default policy for files
     * (#TRACKER_FILTER_FILE).
     * @param filter a #TrackerFilterType
     * @returns Either #TRACKER_FILTER_POLICY_DENY or #TRACKER_FILTER_POLICY_ALLOW.
     */
    get_default_policy(filter: FilterType): FilterPolicy
    /**
     * Describes if the `tree` should index hidden content. To change this
     * setting, see tracker_indexing_tree_set_filter_hidden().
     * @returns %FALSE if hidden files are indexed, otherwise %TRUE.
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
     * @returns the effective root for all locations, or %NULL on error. The root is owned by @tree and should not be freed. It can be referenced using g_object_ref().
     */
    get_master_root(): Gio.File
    /**
     * Returns the #GFile that was previously added through tracker_indexing_tree_add()
     * and would equal or contain `file,` or %NULL if none applies.
     * 
     * If the return value is non-%NULL, `directory_flags` would contain the
     * #TrackerDirectoryFlags applying to `file`.
     * @param file a #GFile
     * @returns the effective parent in @tree, or %NULL
     */
    get_root(file: Gio.File): [ /* returnType */ Gio.File, /* directory_flags */ DirectoryFlags ]
    /**
     * Returns the list of indexing roots in `tree`
     * @returns The list          of roots, the list itself must be freed with g_list_free(),          the list elements are owned by @tree and should not be          freed.
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
     * @returns #TRUE if a signal is emitted.
     */
    notify_update(file: Gio.File, recursive: boolean): boolean
    /**
     * returns %TRUE if `parent` should be indexed based on its contents.
     * @param parent parent directory
     * @param children children within `parent`
     * @returns %TRUE if @parent should be indexed.
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

    // Own virtual methods of TrackerMiner-1.0.TrackerMiner.IndexingTree

    vfunc_child_updated(root: Gio.File, child: Gio.File): void
    vfunc_directory_added(directory: Gio.File): void
    vfunc_directory_removed(directory: Gio.File): void
    vfunc_directory_updated(directory: Gio.File): void

    // Own signals of TrackerMiner-1.0.TrackerMiner.IndexingTree

    connect(sigName: "child-updated", callback: IndexingTree.ChildUpdatedSignalCallback): number
    connect_after(sigName: "child-updated", callback: IndexingTree.ChildUpdatedSignalCallback): number
    emit(sigName: "child-updated", root: Gio.File, child: Gio.File, ...args: any[]): void
    connect(sigName: "directory-added", callback: IndexingTree.DirectoryAddedSignalCallback): number
    connect_after(sigName: "directory-added", callback: IndexingTree.DirectoryAddedSignalCallback): number
    emit(sigName: "directory-added", directory: Gio.File, ...args: any[]): void
    connect(sigName: "directory-removed", callback: IndexingTree.DirectoryRemovedSignalCallback): number
    connect_after(sigName: "directory-removed", callback: IndexingTree.DirectoryRemovedSignalCallback): number
    emit(sigName: "directory-removed", directory: Gio.File, ...args: any[]): void
    connect(sigName: "directory-updated", callback: IndexingTree.DirectoryUpdatedSignalCallback): number
    connect_after(sigName: "directory-updated", callback: IndexingTree.DirectoryUpdatedSignalCallback): number
    emit(sigName: "directory-updated", directory: Gio.File, ...args: any[]): void

    // Class property signals of TrackerMiner-1.0.TrackerMiner.IndexingTree

    connect(sigName: "notify::filter-hidden", callback: (($obj: IndexingTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-hidden", callback: (($obj: IndexingTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filter-hidden", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: IndexingTree, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: IndexingTree, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Base object used to configure indexing within #TrackerMinerFS items.
 * @class 
 */
class IndexingTree extends GObject.Object {

    // Own properties of TrackerMiner-1.0.TrackerMiner.IndexingTree

    static name: string
    static $gtype: GObject.GType<IndexingTree>

    // Constructors of TrackerMiner-1.0.TrackerMiner.IndexingTree

    constructor(config?: IndexingTree.ConstructorProperties) 
    /**
     * Returns a newly created #TrackerIndexingTree
     * @constructor 
     * @returns a newly allocated #TrackerIndexingTree
     */
    constructor() 
    /**
     * Returns a newly created #TrackerIndexingTree
     * @constructor 
     * @returns a newly allocated #TrackerIndexingTree
     */
    static new(): IndexingTree
    /**
     * If `root` is %NULL, the default value is 'file:///'. Using %NULL
     * here is the equivalent to calling tracker_indexing_tree_new() which
     * takes no `root` argument.
     * @constructor 
     * @param root The top level URL
     * @returns a newly allocated #TrackerIndexingTree
     */
    static new_with_root(root: Gio.File): IndexingTree
    _init(config?: IndexingTree.ConstructorProperties): void
}

module Miner {

    // Signal callback interfaces

    /**
     * Signal callback interface for `ignore-next-update`
     */
    interface IgnoreNextUpdateSignalCallback {
        ($obj: Miner, urls: string[]): void
    }

    /**
     * Signal callback interface for `paused`
     */
    interface PausedSignalCallback {
        ($obj: Miner): void
    }

    /**
     * Signal callback interface for `progress`
     */
    interface ProgressSignalCallback {
        ($obj: Miner, status: string | null, progress: number, remaining_time: number): void
    }

    /**
     * Signal callback interface for `resumed`
     */
    interface ResumedSignalCallback {
        ($obj: Miner): void
    }

    /**
     * Signal callback interface for `started`
     */
    interface StartedSignalCallback {
        ($obj: Miner): void
    }

    /**
     * Signal callback interface for `stopped`
     */
    interface StoppedSignalCallback {
        ($obj: Miner): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of TrackerMiner-1.0.TrackerMiner.Miner

        introspection_handler?: any | null
        introspection_xml?: string | null
        name?: string | null
        progress?: number | null
        remaining_time?: number | null
        status?: string | null
    }

}

interface Miner extends Gio.Initable {

    // Own properties of TrackerMiner-1.0.TrackerMiner.Miner

    introspection_handler: any
    introspection_xml: string | null
    readonly name: string | null
    progress: number
    remaining_time: number
    status: string | null

    // Own fields of TrackerMiner-1.0.TrackerMiner.Miner

    parent_instance: GObject.Object
    priv: MinerPrivate

    // Owm methods of TrackerMiner-1.0.TrackerMiner.Miner

    /**
     * Gets the #TrackerSparqlConnection initialized by `miner`
     * @returns a #TrackerSparqlConnection.
     */
    get_connection(): Tracker.SparqlConnection
    /**
     * Gets the #GDBusConnection initialized by `miner`
     * @returns a #GDBusConnection.
     */
    get_dbus_connection(): Gio.DBusConnection
    /**
     * Gets the DBus name registered by `miner`
     * @returns a constant string which should not be modified by the caller.
     */
    get_dbus_full_name(): string | null
    /**
     * Gets the DBus path registered by `miner`
     * @returns a constant string which should not be modified by the caller.
     */
    get_dbus_full_path(): string | null
    /**
     * Returns the number of pause reasons holding `miner` from
     * indexing contents.
     * @returns The number of current pause reasons
     */
    get_n_pause_reasons(): number
    /**
     * Tells the miner to mark `urls` are to ignore on next update.
     * @param urls the urls to mark as to ignore on next update
     */
    ignore_next_update(urls: string[]): void
    /**
     * Returns #TRUE if the miner is paused.
     * @returns #TRUE if the miner is paused.
     */
    is_paused(): boolean
    /**
     * Returns #TRUE if the miner has been started.
     * @returns #TRUE if the miner is already started.
     */
    is_started(): boolean
    /**
     * Asks `miner` to pause. On success the cookie ID is returned,
     * this is what must be used in tracker_miner_resume() to resume
     * operations. On failure `error` will be set and -1 will be returned.
     * @param reason reason to pause
     * @returns The pause cookie ID.
     */
    pause(reason: string | null): number
    /**
     * Asks the miner to resume processing. The cookie must be something
     * returned by tracker_miner_pause(). The miner won't actually resume
     * operations until all pause requests have been resumed.
     * @param cookie pause cookie
     * @returns #TRUE if the cookie was valid.
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

    // Own virtual methods of TrackerMiner-1.0.TrackerMiner.Miner

    /**
     * Tells the miner to mark `urls` are to ignore on next update.
     * @virtual 
     * @param urls the urls to mark as to ignore on next update
     */
    vfunc_ignore_next_update(urls: string[]): void
    vfunc_paused(): void
    vfunc_progress(status: string | null, progress: number): void
    vfunc_resumed(): void
    vfunc_started(): void
    vfunc_stopped(): void

    // Own signals of TrackerMiner-1.0.TrackerMiner.Miner

    connect(sigName: "ignore-next-update", callback: Miner.IgnoreNextUpdateSignalCallback): number
    connect_after(sigName: "ignore-next-update", callback: Miner.IgnoreNextUpdateSignalCallback): number
    emit(sigName: "ignore-next-update", urls: string[], ...args: any[]): void
    connect(sigName: "paused", callback: Miner.PausedSignalCallback): number
    connect_after(sigName: "paused", callback: Miner.PausedSignalCallback): number
    emit(sigName: "paused", ...args: any[]): void
    connect(sigName: "progress", callback: Miner.ProgressSignalCallback): number
    connect_after(sigName: "progress", callback: Miner.ProgressSignalCallback): number
    emit(sigName: "progress", status: string | null, progress: number, remaining_time: number, ...args: any[]): void
    connect(sigName: "resumed", callback: Miner.ResumedSignalCallback): number
    connect_after(sigName: "resumed", callback: Miner.ResumedSignalCallback): number
    emit(sigName: "resumed", ...args: any[]): void
    connect(sigName: "started", callback: Miner.StartedSignalCallback): number
    connect_after(sigName: "started", callback: Miner.StartedSignalCallback): number
    emit(sigName: "started", ...args: any[]): void
    connect(sigName: "stopped", callback: Miner.StoppedSignalCallback): number
    connect_after(sigName: "stopped", callback: Miner.StoppedSignalCallback): number
    emit(sigName: "stopped", ...args: any[]): void

    // Class property signals of TrackerMiner-1.0.TrackerMiner.Miner

    connect(sigName: "notify::introspection-handler", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-handler", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::introspection-handler", ...args: any[]): void
    connect(sigName: "notify::introspection-xml", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-xml", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::introspection-xml", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::progress", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress", ...args: any[]): void
    connect(sigName: "notify::remaining-time", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-time", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remaining-time", ...args: any[]): void
    connect(sigName: "notify::status", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: Miner, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract miner object.
 * @class 
 */
class Miner extends GObject.Object {

    // Own properties of TrackerMiner-1.0.TrackerMiner.Miner

    static name: string
    static $gtype: GObject.GType<Miner>

    // Constructors of TrackerMiner-1.0.TrackerMiner.Miner

    constructor(config?: Miner.ConstructorProperties) 
    _init(config?: Miner.ConstructorProperties): void
    /**
     * Gives the caller the #GQuark used to identify #TrackerMiner errors
     * in #GError structures. The #GQuark is used as the domain for the error.
     * @returns the #GQuark used for the domain of a #GError.
     */
    static error_quark(): GLib.Quark
}

module MinerFS {

    // Signal callback interfaces

    /**
     * Signal callback interface for `finished`
     */
    interface FinishedSignalCallback {
        ($obj: MinerFS, elapsed: number, directories_found: number, directories_ignored: number, files_found: number, files_ignored: number): void
    }

    /**
     * Signal callback interface for `finished-root`
     */
    interface FinishedRootSignalCallback {
        ($obj: MinerFS, file: Gio.File): void
    }

    /**
     * Signal callback interface for `ignore-next-update-file`
     */
    interface IgnoreNextUpdateFileSignalCallback {
        ($obj: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable: Gio.Cancellable | null): boolean
    }

    /**
     * Signal callback interface for `process-file`
     */
    interface ProcessFileSignalCallback {
        ($obj: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable: Gio.Cancellable | null): boolean
    }

    /**
     * Signal callback interface for `process-file-attributes`
     */
    interface ProcessFileAttributesSignalCallback {
        ($obj: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable: Gio.Cancellable | null): boolean
    }

    /**
     * Signal callback interface for `remove-file`
     */
    interface RemoveFileSignalCallback {
        ($obj: MinerFS, file: Gio.File, children_only: boolean, builder: Tracker.SparqlBuilder): boolean
    }

    /**
     * Signal callback interface for `writeback-file`
     */
    interface WritebackFileSignalCallback {
        ($obj: MinerFS, file: Gio.File, rdf_types: string[], results: any[], cancellable: Gio.Cancellable | null): boolean
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, Miner.ConstructorProperties {

        // Own constructor properties of TrackerMiner-1.0.TrackerMiner.MinerFS

        data_provider?: DataProvider | null
        initial_crawling?: boolean | null
        mtime_checking?: boolean | null
        processing_pool_ready_limit?: number | null
        processing_pool_wait_limit?: number | null
        root?: Gio.File | null
        throttle?: number | null
    }

}

interface MinerFS extends Gio.Initable {

    // Own properties of TrackerMiner-1.0.TrackerMiner.MinerFS

    readonly data_provider: DataProvider
    initial_crawling: boolean
    mtime_checking: boolean
    processing_pool_ready_limit: number
    processing_pool_wait_limit: number
    readonly root: Gio.File
    throttle: number

    // Own fields of TrackerMiner-1.0.TrackerMiner.MinerFS

    parent: Miner
    priv: any

    // Owm methods of TrackerMiner-1.0.TrackerMiner.MinerFS

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
     * @returns %TRUE if the directory was successfully removed.
     */
    directory_remove(file: Gio.File): boolean
    /**
     * Removes a directory from being inspected by `fs,` and removes all
     * associated metadata of the directory (and its contents) from the
     * store.
     * @param file #GFile for the directory to be removed
     * @returns %TRUE if the directory was successfully removed.
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
     * @returns The #TrackerDataProvider supplying content
     */
    get_data_provider(): DataProvider
    /**
     * Returns the #TrackerIndexingTree which determines
     * what files/directories are indexed by `fs`
     * @returns The #TrackerIndexingTree          holding the indexing configuration
     */
    get_indexing_tree(): IndexingTree
    /**
     * Returns a boolean which indicates if the indexing tree is crawled
     * upon start up or not. This may be set to %FALSE if working
     * prodominently with cloud data where you can't perform these checks.
     * By default and for local file systems, this is enabled.
     * @returns %TRUE if a file system structure is crawled for new updates on start up, otherwise %FALSE.
     */
    get_initial_crawling(): boolean
    /**
     * Returns a boolean used to identify if file modification time checks
     * are performed when processing content. This may be set to %FALSE if
     * working prodominently with cloud data where you can't perform these
     * checks. By default and for local file systems, this is enabled.
     * @returns %TRUE if mtime checks for directories against the database are done when @fs crawls the file system, otherwise %FALSE.
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
     * @returns The parent folder URN, or %NULL.
     */
    get_parent_urn(file: Gio.File): string | null
    /**
     * Gets the current throttle value, see
     * tracker_miner_fs_set_throttle() for more details.
     * @returns a double representing a value between 0.0 and 1.0.
     */
    get_throttle(): number
    /**
     * If the item exists in the store, this function retrieves
     * the URN for a #GFile being currently processed.
     * 
     * If `file` is not being currently processed by `fs,` or doesn't
     * exist in the store yet, %NULL will be returned.
     * @param file a #GFile obtained in #TrackerMinerFS::process-file
     * @returns The URN containing the data associated to @file,          or %NULL.
     */
    get_urn(file: Gio.File): string | null
    /**
     * The `fs` keeps many priority queus for content it is processing.
     * This function returns %TRUE if the sum of all (or any) priority
     * queues is more than 0. This includes items deleted, created,
     * updated, moved or being written back.
     * @returns %TRUE if there are items to process in the internal queues, otherwise %FALSE.
     */
    has_items_to_process(): boolean
    /**
     * If the item exists in the store, this function retrieves
     * the URN of the given #GFile
     * 
     * If `file` doesn't exist in the store yet, %NULL will be returned.
     * @param file a #GFile
     * @returns A newly allocated string with the URN containing the data associated          to @file, or %NULL.
     */
    query_urn(file: Gio.File): string | null
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

    // Own virtual methods of TrackerMiner-1.0.TrackerMiner.MinerFS

    vfunc_finished(elapsed: number, directories_found: number, directories_ignored: number, files_found: number, files_ignored: number): void
    vfunc_finished_root(root: Gio.File, directories_found: number, directories_ignored: number, files_found: number, files_ignored: number): void
    vfunc_ignore_next_update_file(file: Gio.File, builder: Tracker.SparqlBuilder, cancellable: Gio.Cancellable | null): boolean
    vfunc_process_file(file: Gio.File, builder: Tracker.SparqlBuilder, cancellable: Gio.Cancellable | null): boolean
    vfunc_process_file_attributes(file: Gio.File, builder: Tracker.SparqlBuilder, cancellable: Gio.Cancellable | null): boolean
    vfunc_remove_file(file: Gio.File, children_only: boolean, builder: Tracker.SparqlBuilder): boolean

    // Own signals of TrackerMiner-1.0.TrackerMiner.MinerFS

    connect(sigName: "finished", callback: MinerFS.FinishedSignalCallback): number
    connect_after(sigName: "finished", callback: MinerFS.FinishedSignalCallback): number
    emit(sigName: "finished", elapsed: number, directories_found: number, directories_ignored: number, files_found: number, files_ignored: number, ...args: any[]): void
    connect(sigName: "finished-root", callback: MinerFS.FinishedRootSignalCallback): number
    connect_after(sigName: "finished-root", callback: MinerFS.FinishedRootSignalCallback): number
    emit(sigName: "finished-root", file: Gio.File, ...args: any[]): void
    connect(sigName: "ignore-next-update-file", callback: MinerFS.IgnoreNextUpdateFileSignalCallback): number
    connect_after(sigName: "ignore-next-update-file", callback: MinerFS.IgnoreNextUpdateFileSignalCallback): number
    emit(sigName: "ignore-next-update-file", file: Gio.File, builder: Tracker.SparqlBuilder, cancellable: Gio.Cancellable | null, ...args: any[]): void
    connect(sigName: "process-file", callback: MinerFS.ProcessFileSignalCallback): number
    connect_after(sigName: "process-file", callback: MinerFS.ProcessFileSignalCallback): number
    emit(sigName: "process-file", file: Gio.File, builder: Tracker.SparqlBuilder, cancellable: Gio.Cancellable | null, ...args: any[]): void
    connect(sigName: "process-file-attributes", callback: MinerFS.ProcessFileAttributesSignalCallback): number
    connect_after(sigName: "process-file-attributes", callback: MinerFS.ProcessFileAttributesSignalCallback): number
    emit(sigName: "process-file-attributes", file: Gio.File, builder: Tracker.SparqlBuilder, cancellable: Gio.Cancellable | null, ...args: any[]): void
    connect(sigName: "remove-file", callback: MinerFS.RemoveFileSignalCallback): number
    connect_after(sigName: "remove-file", callback: MinerFS.RemoveFileSignalCallback): number
    emit(sigName: "remove-file", file: Gio.File, children_only: boolean, builder: Tracker.SparqlBuilder, ...args: any[]): void
    connect(sigName: "writeback-file", callback: MinerFS.WritebackFileSignalCallback): number
    connect_after(sigName: "writeback-file", callback: MinerFS.WritebackFileSignalCallback): number
    emit(sigName: "writeback-file", file: Gio.File, rdf_types: string[], results: any[], cancellable: Gio.Cancellable | null, ...args: any[]): void

    // Class property signals of TrackerMiner-1.0.TrackerMiner.MinerFS

    connect(sigName: "notify::data-provider", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data-provider", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data-provider", ...args: any[]): void
    connect(sigName: "notify::initial-crawling", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::initial-crawling", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::initial-crawling", ...args: any[]): void
    connect(sigName: "notify::mtime-checking", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtime-checking", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mtime-checking", ...args: any[]): void
    connect(sigName: "notify::processing-pool-ready-limit", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::processing-pool-ready-limit", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::processing-pool-ready-limit", ...args: any[]): void
    connect(sigName: "notify::processing-pool-wait-limit", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::processing-pool-wait-limit", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::processing-pool-wait-limit", ...args: any[]): void
    connect(sigName: "notify::root", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::throttle", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::throttle", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::throttle", ...args: any[]): void
    connect(sigName: "notify::introspection-handler", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-handler", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::introspection-handler", ...args: any[]): void
    connect(sigName: "notify::introspection-xml", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-xml", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::introspection-xml", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::progress", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress", ...args: any[]): void
    connect(sigName: "notify::remaining-time", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-time", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remaining-time", ...args: any[]): void
    connect(sigName: "notify::status", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: MinerFS, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract miner implementation to get data from the filesystem.
 * @class 
 */
class MinerFS extends Miner {

    // Own properties of TrackerMiner-1.0.TrackerMiner.MinerFS

    static name: string
    static $gtype: GObject.GType<MinerFS>

    // Constructors of TrackerMiner-1.0.TrackerMiner.MinerFS

    constructor(config?: MinerFS.ConstructorProperties) 
    _init(config?: MinerFS.ConstructorProperties): void
    /**
     * Gives the caller the #GQuark used to identify #TrackerMinerFS errors
     * in #GError structures. The #GQuark is used as the domain for the error.
     * @returns the #GQuark used for the domain of a #GError.
     */
    static error_quark(): GLib.Quark
}

module MinerOnline {

    // Signal callback interfaces

    /**
     * Signal callback interface for `connected`
     */
    interface ConnectedSignalCallback {
        ($obj: MinerOnline, type: NetworkType): boolean
    }

    /**
     * Signal callback interface for `disconnected`
     */
    interface DisconnectedSignalCallback {
        ($obj: MinerOnline): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, Miner.ConstructorProperties {
    }

}

interface MinerOnline extends Gio.Initable {

    // Own properties of TrackerMiner-1.0.TrackerMiner.MinerOnline

    readonly network_type: NetworkType

    // Own fields of TrackerMiner-1.0.TrackerMiner.MinerOnline

    parent_instance: Miner & GObject.Object

    // Owm methods of TrackerMiner-1.0.TrackerMiner.MinerOnline

    /**
     * Get the type of network this data `miner` uses to index content.
     * @returns a #TrackerNetworkType on success or #TRACKER_NETWORK_TYPE_NONE on error.
     */
    get_network_type(): NetworkType

    // Own virtual methods of TrackerMiner-1.0.TrackerMiner.MinerOnline

    vfunc_connected(network: NetworkType): boolean
    vfunc_disconnected(): void

    // Own signals of TrackerMiner-1.0.TrackerMiner.MinerOnline

    connect(sigName: "connected", callback: MinerOnline.ConnectedSignalCallback): number
    connect_after(sigName: "connected", callback: MinerOnline.ConnectedSignalCallback): number
    emit(sigName: "connected", type: NetworkType, ...args: any[]): void
    connect(sigName: "disconnected", callback: MinerOnline.DisconnectedSignalCallback): number
    connect_after(sigName: "disconnected", callback: MinerOnline.DisconnectedSignalCallback): number
    emit(sigName: "disconnected", ...args: any[]): void

    // Class property signals of TrackerMiner-1.0.TrackerMiner.MinerOnline

    connect(sigName: "notify::network-type", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::network-type", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::network-type", ...args: any[]): void
    connect(sigName: "notify::introspection-handler", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-handler", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::introspection-handler", ...args: any[]): void
    connect(sigName: "notify::introspection-xml", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::introspection-xml", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::introspection-xml", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::progress", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress", ...args: any[]): void
    connect(sigName: "notify::remaining-time", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remaining-time", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remaining-time", ...args: any[]): void
    connect(sigName: "notify::status", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: MinerOnline, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract miner object for data requiring connectivity.
 * @class 
 */
class MinerOnline extends Miner {

    // Own properties of TrackerMiner-1.0.TrackerMiner.MinerOnline

    static name: string
    static $gtype: GObject.GType<MinerOnline>

    // Constructors of TrackerMiner-1.0.TrackerMiner.MinerOnline

    constructor(config?: MinerOnline.ConstructorProperties) 
    _init(config?: MinerOnline.ConstructorProperties): void
}

interface DataProviderIface {

    // Own fields of TrackerMiner-1.0.TrackerMiner.DataProviderIface

    /**
     * Parent interface type.
     * @field 
     */
    g_iface: GObject.TypeInterface
    begin: (data_provider: DataProvider, url: Gio.File, attributes: string | null, flags: DirectoryFlags, cancellable: Gio.Cancellable | null) => Enumerator
    begin_async: (data_provider: DataProvider, url: Gio.File, attributes: string | null, flags: DirectoryFlags, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    begin_finish: (data_provider: DataProvider, result: Gio.AsyncResult) => Enumerator
    end: (data_provider: DataProvider, enumerator: Enumerator, cancellable: Gio.Cancellable | null) => boolean
    end_async: (data_provider: DataProvider, enumerator: Enumerator, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    end_finish: (data_provider: DataProvider, result: Gio.AsyncResult) => boolean
}

/**
 * Virtual methods left to implement.
 * @record 
 */
abstract class DataProviderIface {

    // Own properties of TrackerMiner-1.0.TrackerMiner.DataProviderIface

    static name: string
}

interface DecoratorClass {

    // Own fields of TrackerMiner-1.0.TrackerMiner.DecoratorClass

    /**
     * parent object class.
     * @field 
     */
    parent_class: MinerClass
    items_available: (decorator: Decorator) => void
    finished: (decorator: Decorator) => void
    /**
     * Reserved for future API improvements.
     * @field 
     */
    padding: any[]
}

/**
 * An implementation that takes care of extracting extra metadata
 * specific to file types by talking to tracker-extract.
 * 
 * Based on #TrackerMinerClass.
 * @record 
 */
abstract class DecoratorClass {

    // Own properties of TrackerMiner-1.0.TrackerMiner.DecoratorClass

    static name: string
}

interface DecoratorFSClass {

    // Own fields of TrackerMiner-1.0.TrackerMiner.DecoratorFSClass

    /**
     * parent object class.
     * @field 
     */
    parent_class: DecoratorClass
    /**
     * Reserved for future API improvements.
     * @field 
     */
    padding: any[]
}

/**
 * A class that takes care of resources on mount points added or
 * removed, this is based on #TrackerDecoratorClass.
 * @record 
 */
abstract class DecoratorFSClass {

    // Own properties of TrackerMiner-1.0.TrackerMiner.DecoratorFSClass

    static name: string
}

interface DecoratorInfo {

    // Owm methods of TrackerMiner-1.0.TrackerMiner.DecoratorInfo

    /**
     * A MIME¹ type is a way of describing the content type of a file or
     * set of data. An example would be 'text/plain' for a clear text
     * document or file.
     * 
     * ¹: http://en.wikipedia.org/wiki/MIME
     * @returns the MIME type for #TrackerDecoratorInfo on success or #NULL on error.
     */
    get_mimetype(): string | null
    /**
     * A #TrackerSparqlBuilder allows the caller to extract the final
     * SPARQL used to insert the extracted metadata into the database for
     * the resource being processed.
     * 
     * This function calls g_task_get_task_data() on the return value of
     * tracker_decorator_info_get_task().
     * @returns a #TrackerSparqlBuilder on success or #NULL on error.
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
     * @returns the #GTask for #TrackerDecoratorInfo on success or #NULL if there is no existing #GTask.
     */
    get_task(): Gio.Task
    /**
     * A URL is a Uniform Resource Locator and should be a location associated
     * with a resource in the database. For example, 'file:///tmp/foo.txt'.
     * @returns the URL for #TrackerDecoratorInfo on success or #NULL on error.
     */
    get_url(): string | null
    /**
     * A URN is a Uniform Resource Name and should be a unique identifier
     * for a resource in the database.
     * @returns the URN for #TrackerDecoratorInfo on success or #NULL on error.
     */
    get_urn(): string | null
    /**
     * Increases the reference count of `info` by 1.
     * @returns the same @info passed in, or %NULL on error.
     */
    ref(): DecoratorInfo
    /**
     * Decreases the reference count of `info` by 1 and frees it when the
     * reference count reaches 0.
     */
    unref(): void
}

class DecoratorInfo {

    // Own properties of TrackerMiner-1.0.TrackerMiner.DecoratorInfo

    static name: string
}

interface EnumeratorIface {

    // Own fields of TrackerMiner-1.0.TrackerMiner.EnumeratorIface

    /**
     * Parent interface type.
     * @field 
     */
    g_iface: GObject.TypeInterface
    next: (enumerator: Enumerator, cancellable: Gio.Cancellable | null) => any | null
    next_async: (enumerator: Enumerator, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    next_finish: (enumerator: Enumerator, result: Gio.AsyncResult) => any | null
}

/**
 * Virtual methods left to implement.
 * @record 
 */
abstract class EnumeratorIface {

    // Own properties of TrackerMiner-1.0.TrackerMiner.EnumeratorIface

    static name: string
}

interface IndexingTreeClass {

    // Own fields of TrackerMiner-1.0.TrackerMiner.IndexingTreeClass

    /**
     * parent object class
     * @field 
     */
    parent_class: GObject.ObjectClass
    directory_added: (indexing_tree: IndexingTree, directory: Gio.File) => void
    directory_removed: (indexing_tree: IndexingTree, directory: Gio.File) => void
    directory_updated: (indexing_tree: IndexingTree, directory: Gio.File) => void
    child_updated: (indexing_tree: IndexingTree, root: Gio.File, child: Gio.File) => void
    /**
     * Reserved for future API improvements.
     * @field 
     */
    padding: any[]
}

/**
 * Class for the #TrackerIndexingTree.
 * @record 
 */
abstract class IndexingTreeClass {

    // Own properties of TrackerMiner-1.0.TrackerMiner.IndexingTreeClass

    static name: string
}

interface MinerClass {

    // Own fields of TrackerMiner-1.0.TrackerMiner.MinerClass

    /**
     * parent object class.
     * @field 
     */
    parent_class: GObject.ObjectClass
    started: (miner: Miner) => void
    stopped: (miner: Miner) => void
    paused: (miner: Miner) => void
    resumed: (miner: Miner) => void
    progress: (miner: Miner, status: string | null, progress: number) => void
    ignore_next_update: (miner: Miner, urls: string[]) => void
    /**
     * Reserved for future API improvements.
     * @field 
     */
    padding: any[]
}

/**
 * Virtual methods left to implement.
 * @record 
 */
abstract class MinerClass {

    // Own properties of TrackerMiner-1.0.TrackerMiner.MinerClass

    static name: string
}

interface MinerFSClass {

    // Own fields of TrackerMiner-1.0.TrackerMiner.MinerFSClass

    /**
     * parent object class
     * @field 
     */
    parent: MinerClass
    process_file: (fs: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable: Gio.Cancellable | null) => boolean
    ignore_next_update_file: (fs: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable: Gio.Cancellable | null) => boolean
    finished: (fs: MinerFS, elapsed: number, directories_found: number, directories_ignored: number, files_found: number, files_ignored: number) => void
    process_file_attributes: (fs: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable: Gio.Cancellable | null) => boolean
    finished_root: (fs: MinerFS, root: Gio.File, directories_found: number, directories_ignored: number, files_found: number, files_ignored: number) => void
    remove_file: (fs: MinerFS, file: Gio.File, children_only: boolean, builder: Tracker.SparqlBuilder) => boolean
    /**
     * Reserved for future API improvements.
     * @field 
     */
    padding: any[]
}

/**
 * Prototype for the abstract class, `process_file` must be implemented
 * in the deriving class in order to actually extract data.
 * @record 
 */
abstract class MinerFSClass {

    // Own properties of TrackerMiner-1.0.TrackerMiner.MinerFSClass

    static name: string
}

interface MinerFSPrivate {
}

class MinerFSPrivate {

    // Own properties of TrackerMiner-1.0.TrackerMiner.MinerFSPrivate

    static name: string
}

interface MinerOnlineClass {

    // Own fields of TrackerMiner-1.0.TrackerMiner.MinerOnlineClass

    /**
     * a #TrackerMinerClass
     * @field 
     */
    parent_class: MinerClass
    connected: (miner: MinerOnline, network: NetworkType) => boolean
    disconnected: (miner: MinerOnline) => void
    /**
     * Reserved for future API improvements.
     * @field 
     */
    padding: any[]
}

/**
 * Virtual methods that can be overridden.
 * @record 
 */
abstract class MinerOnlineClass {

    // Own properties of TrackerMiner-1.0.TrackerMiner.MinerOnlineClass

    static name: string
}

interface MinerPrivate {
}

class MinerPrivate {

    // Own properties of TrackerMiner-1.0.TrackerMiner.MinerPrivate

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

export default TrackerMiner;
// END