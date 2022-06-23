// @ts-nocheck

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
interface DataProvider_ConstructProps extends GObject.Object_ConstructProps {
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
     */
    begin(url: Gio.File, attributes: string, flags: DirectoryFlags, cancellable: Gio.Cancellable | null): Enumerator
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
    beginAsync(url: Gio.File, attributes: string, flags: DirectoryFlags, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
     * @param ioPriority the [I/O priority][io-priority] of the request
     * @param cancellable optional #GCancellable object, %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    endAsync(enumerator: Enumerator, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the asynchronous operation started with
     * tracker_data_provider_end_async().
     * @param result a #GAsyncResult.
     */
    endFinish(result: Gio.AsyncResult): boolean

    // Class property signals of TrackerMiner-1.0.TrackerMiner.DataProvider

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    constructor(config?: DataProvider_ConstructProps) 
    _init(config?: DataProvider_ConstructProps): void
}

interface Enumerator_ConstructProps extends GObject.Object_ConstructProps {
}

interface Enumerator {

    // Owm methods of TrackerMiner-1.0.TrackerMiner.Enumerator

    /**
     * Enumerates to the next piece of data according to the `enumerator`
     * implementation.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    next(cancellable: Gio.Cancellable | null): object | null
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
    nextAsync(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the asynchronous operation started with
     * tracker_enumerator_next_async().
     * @param result a #GAsyncResult.
     */
    nextFinish(result: Gio.AsyncResult): object | null

    // Class property signals of TrackerMiner-1.0.TrackerMiner.Enumerator

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    constructor(config?: Enumerator_ConstructProps) 
    _init(config?: Enumerator_ConstructProps): void
}

interface Decorator_ConstructProps extends Gio.Initable_ConstructProps, Miner_ConstructProps {

    // Own constructor properties of TrackerMiner-1.0.TrackerMiner.Decorator

    classNames?: string[] | null
    commitBatchSize?: number | null
    dataSource?: string | null
    priorityRdfTypes?: string[] | null
}

/**
 * Signal callback interface for `finished`
 */
interface Decorator_FinishedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `items-available`
 */
interface Decorator_ItemsAvailableSignalCallback {
    (): void
}

interface Decorator extends Gio.Initable {

    // Own properties of TrackerMiner-1.0.TrackerMiner.Decorator

    classNames: string[]
    commitBatchSize: number
    readonly dataSource: string
    priorityRdfTypes: string[]

    // Own fields of TrackerMiner-1.0.TrackerMiner.Decorator

    parentInstance: Miner
    priv: object

    // Owm methods of TrackerMiner-1.0.TrackerMiner.Decorator

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
    next(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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

    // Own signals of TrackerMiner-1.0.TrackerMiner.Decorator

    connect(sigName: "finished", callback: Decorator_FinishedSignalCallback): number
    on(sigName: "finished", callback: Decorator_FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: Decorator_FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: Decorator_FinishedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "finished", ...args: any[]): void
    connect(sigName: "items-available", callback: Decorator_ItemsAvailableSignalCallback): number
    on(sigName: "items-available", callback: Decorator_ItemsAvailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "items-available", callback: Decorator_ItemsAvailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "items-available", callback: Decorator_ItemsAvailableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "items-available", ...args: any[]): void

    // Class property signals of TrackerMiner-1.0.TrackerMiner.Decorator

    connect(sigName: "notify::class-names", callback: (...args: any[]) => void): number
    on(sigName: "notify::class-names", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::class-names", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::class-names", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::class-names", ...args: any[]): void
    connect(sigName: "notify::commit-batch-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::commit-batch-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::commit-batch-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::commit-batch-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::commit-batch-size", ...args: any[]): void
    connect(sigName: "notify::data-source", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-source", ...args: any[]): void
    connect(sigName: "notify::priority-rdf-types", callback: (...args: any[]) => void): number
    on(sigName: "notify::priority-rdf-types", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::priority-rdf-types", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::priority-rdf-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::priority-rdf-types", ...args: any[]): void
    connect(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): number
    on(sigName: "notify::introspection-handler", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::introspection-handler", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::introspection-handler", ...args: any[]): void
    connect(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): number
    on(sigName: "notify::introspection-xml", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::introspection-xml", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::introspection-xml", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::progress", callback: (...args: any[]) => void): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::progress", ...args: any[]): void
    connect(sigName: "notify::remaining-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::remaining-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::remaining-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::remaining-time", ...args: any[]): void
    connect(sigName: "notify::status", callback: (...args: any[]) => void): number
    on(sigName: "notify::status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    constructor(config?: Decorator_ConstructProps) 
    _init(config?: Decorator_ConstructProps): void
    /**
     * Gives the caller the #GQuark used to identify #TrackerDecorator errors
     * in #GError structures. The #GQuark is used as the domain for the error.
     */
    static errorQuark(): GLib.Quark
}

interface DecoratorFS_ConstructProps extends Gio.Initable_ConstructProps, Decorator_ConstructProps {
}

interface DecoratorFS extends Gio.Initable {

    // Own fields of TrackerMiner-1.0.TrackerMiner.DecoratorFS

    parentInstance: Decorator
    priv: object

    // Owm methods of TrackerMiner-1.0.TrackerMiner.DecoratorFS

    /**
     * Prepends a file for processing.
     * @param file a #GFile to process
     */
    prependFile(file: Gio.File): number

    // Class property signals of TrackerMiner-1.0.TrackerMiner.DecoratorFS

    connect(sigName: "notify::class-names", callback: (...args: any[]) => void): number
    on(sigName: "notify::class-names", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::class-names", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::class-names", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::class-names", ...args: any[]): void
    connect(sigName: "notify::commit-batch-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::commit-batch-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::commit-batch-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::commit-batch-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::commit-batch-size", ...args: any[]): void
    connect(sigName: "notify::data-source", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-source", ...args: any[]): void
    connect(sigName: "notify::priority-rdf-types", callback: (...args: any[]) => void): number
    on(sigName: "notify::priority-rdf-types", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::priority-rdf-types", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::priority-rdf-types", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::priority-rdf-types", ...args: any[]): void
    connect(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): number
    on(sigName: "notify::introspection-handler", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::introspection-handler", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::introspection-handler", ...args: any[]): void
    connect(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): number
    on(sigName: "notify::introspection-xml", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::introspection-xml", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::introspection-xml", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::progress", callback: (...args: any[]) => void): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::progress", ...args: any[]): void
    connect(sigName: "notify::remaining-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::remaining-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::remaining-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::remaining-time", ...args: any[]): void
    connect(sigName: "notify::status", callback: (...args: any[]) => void): number
    on(sigName: "notify::status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    constructor(config?: DecoratorFS_ConstructProps) 
    _init(config?: DecoratorFS_ConstructProps): void
}

interface IndexingTree_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of TrackerMiner-1.0.TrackerMiner.IndexingTree

    filterHidden?: boolean | null
    root?: Gio.File | null
}

/**
 * Signal callback interface for `child-updated`
 */
interface IndexingTree_ChildUpdatedSignalCallback {
    (root: Gio.File, child: Gio.File): void
}

/**
 * Signal callback interface for `directory-added`
 */
interface IndexingTree_DirectoryAddedSignalCallback {
    (directory: Gio.File): void
}

/**
 * Signal callback interface for `directory-removed`
 */
interface IndexingTree_DirectoryRemovedSignalCallback {
    (directory: Gio.File): void
}

/**
 * Signal callback interface for `directory-updated`
 */
interface IndexingTree_DirectoryUpdatedSignalCallback {
    (directory: Gio.File): void
}

interface IndexingTree {

    // Own properties of TrackerMiner-1.0.TrackerMiner.IndexingTree

    filterHidden: boolean
    readonly root: Gio.File

    // Own fields of TrackerMiner-1.0.TrackerMiner.IndexingTree

    parentInstance: GObject.Object
    priv: object

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

    // Own signals of TrackerMiner-1.0.TrackerMiner.IndexingTree

    connect(sigName: "child-updated", callback: IndexingTree_ChildUpdatedSignalCallback): number
    on(sigName: "child-updated", callback: IndexingTree_ChildUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-updated", callback: IndexingTree_ChildUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-updated", callback: IndexingTree_ChildUpdatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "child-updated", child: Gio.File, ...args: any[]): void
    connect(sigName: "directory-added", callback: IndexingTree_DirectoryAddedSignalCallback): number
    on(sigName: "directory-added", callback: IndexingTree_DirectoryAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "directory-added", callback: IndexingTree_DirectoryAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "directory-added", callback: IndexingTree_DirectoryAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "directory-added", ...args: any[]): void
    connect(sigName: "directory-removed", callback: IndexingTree_DirectoryRemovedSignalCallback): number
    on(sigName: "directory-removed", callback: IndexingTree_DirectoryRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "directory-removed", callback: IndexingTree_DirectoryRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "directory-removed", callback: IndexingTree_DirectoryRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "directory-removed", ...args: any[]): void
    connect(sigName: "directory-updated", callback: IndexingTree_DirectoryUpdatedSignalCallback): number
    on(sigName: "directory-updated", callback: IndexingTree_DirectoryUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "directory-updated", callback: IndexingTree_DirectoryUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "directory-updated", callback: IndexingTree_DirectoryUpdatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "directory-updated", ...args: any[]): void

    // Class property signals of TrackerMiner-1.0.TrackerMiner.IndexingTree

    connect(sigName: "notify::filter-hidden", callback: (...args: any[]) => void): number
    on(sigName: "notify::filter-hidden", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filter-hidden", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filter-hidden", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filter-hidden", ...args: any[]): void
    connect(sigName: "notify::root", callback: (...args: any[]) => void): number
    on(sigName: "notify::root", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    constructor(config?: IndexingTree_ConstructProps) 
    /**
     * Returns a newly created #TrackerIndexingTree
     * @constructor 
     */
    constructor() 
    /**
     * Returns a newly created #TrackerIndexingTree
     * @constructor 
     */
    static new(): IndexingTree
    /**
     * If `root` is %NULL, the default value is 'file:///'. Using %NULL
     * here is the equivalent to calling tracker_indexing_tree_new() which
     * takes no `root` argument.
     * @constructor 
     * @param root The top level URL
     */
    static newWithRoot(root: Gio.File): IndexingTree
    _init(config?: IndexingTree_ConstructProps): void
}

interface Miner_ConstructProps extends Gio.Initable_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of TrackerMiner-1.0.TrackerMiner.Miner

    introspectionHandler?: object | null
    introspectionXml?: string | null
    name?: string | null
    progress?: number | null
    remainingTime?: number | null
    status?: string | null
}

/**
 * Signal callback interface for `ignore-next-update`
 */
interface Miner_IgnoreNextUpdateSignalCallback {
    (urls: string[]): void
}

/**
 * Signal callback interface for `paused`
 */
interface Miner_PausedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `progress`
 */
interface Miner_ProgressSignalCallback {
    (status: string, progress: number, remainingTime: number): void
}

/**
 * Signal callback interface for `resumed`
 */
interface Miner_ResumedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `started`
 */
interface Miner_StartedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `stopped`
 */
interface Miner_StoppedSignalCallback {
    (): void
}

interface Miner extends Gio.Initable {

    // Own properties of TrackerMiner-1.0.TrackerMiner.Miner

    introspectionHandler: object
    introspectionXml: string
    readonly name: string
    progress: number
    remainingTime: number
    status: string

    // Own fields of TrackerMiner-1.0.TrackerMiner.Miner

    parentInstance: GObject.Object
    priv: MinerPrivate

    // Owm methods of TrackerMiner-1.0.TrackerMiner.Miner

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

    // Own signals of TrackerMiner-1.0.TrackerMiner.Miner

    connect(sigName: "ignore-next-update", callback: Miner_IgnoreNextUpdateSignalCallback): number
    on(sigName: "ignore-next-update", callback: Miner_IgnoreNextUpdateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "ignore-next-update", callback: Miner_IgnoreNextUpdateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "ignore-next-update", callback: Miner_IgnoreNextUpdateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "ignore-next-update", ...args: any[]): void
    connect(sigName: "paused", callback: Miner_PausedSignalCallback): number
    on(sigName: "paused", callback: Miner_PausedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "paused", callback: Miner_PausedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "paused", callback: Miner_PausedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "paused", ...args: any[]): void
    connect(sigName: "progress", callback: Miner_ProgressSignalCallback): number
    on(sigName: "progress", callback: Miner_ProgressSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "progress", callback: Miner_ProgressSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "progress", callback: Miner_ProgressSignalCallback): NodeJS.EventEmitter
    emit(sigName: "progress", progress: number, remainingTime: number, ...args: any[]): void
    connect(sigName: "resumed", callback: Miner_ResumedSignalCallback): number
    on(sigName: "resumed", callback: Miner_ResumedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resumed", callback: Miner_ResumedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resumed", callback: Miner_ResumedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "resumed", ...args: any[]): void
    connect(sigName: "started", callback: Miner_StartedSignalCallback): number
    on(sigName: "started", callback: Miner_StartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "started", callback: Miner_StartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "started", callback: Miner_StartedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "started", ...args: any[]): void
    connect(sigName: "stopped", callback: Miner_StoppedSignalCallback): number
    on(sigName: "stopped", callback: Miner_StoppedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "stopped", callback: Miner_StoppedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "stopped", callback: Miner_StoppedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "stopped", ...args: any[]): void

    // Class property signals of TrackerMiner-1.0.TrackerMiner.Miner

    connect(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): number
    on(sigName: "notify::introspection-handler", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::introspection-handler", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::introspection-handler", ...args: any[]): void
    connect(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): number
    on(sigName: "notify::introspection-xml", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::introspection-xml", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::introspection-xml", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::progress", callback: (...args: any[]) => void): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::progress", ...args: any[]): void
    connect(sigName: "notify::remaining-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::remaining-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::remaining-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::remaining-time", ...args: any[]): void
    connect(sigName: "notify::status", callback: (...args: any[]) => void): number
    on(sigName: "notify::status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    constructor(config?: Miner_ConstructProps) 
    _init(config?: Miner_ConstructProps): void
    /**
     * Gives the caller the #GQuark used to identify #TrackerMiner errors
     * in #GError structures. The #GQuark is used as the domain for the error.
     */
    static errorQuark(): GLib.Quark
}

interface MinerFS_ConstructProps extends Gio.Initable_ConstructProps, Miner_ConstructProps {

    // Own constructor properties of TrackerMiner-1.0.TrackerMiner.MinerFS

    dataProvider?: DataProvider | null
    initialCrawling?: boolean | null
    mtimeChecking?: boolean | null
    processingPoolReadyLimit?: number | null
    processingPoolWaitLimit?: number | null
    root?: Gio.File | null
    throttle?: number | null
}

/**
 * Signal callback interface for `finished`
 */
interface MinerFS_FinishedSignalCallback {
    (elapsed: number, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number): void
}

/**
 * Signal callback interface for `finished-root`
 */
interface MinerFS_FinishedRootSignalCallback {
    (file: Gio.File): void
}

/**
 * Signal callback interface for `ignore-next-update-file`
 */
interface MinerFS_IgnoreNextUpdateFileSignalCallback {
    (file: Gio.File, builder: Tracker.SparqlBuilder, cancellable: Gio.Cancellable | null): boolean
}

/**
 * Signal callback interface for `process-file`
 */
interface MinerFS_ProcessFileSignalCallback {
    (file: Gio.File, builder: Tracker.SparqlBuilder, cancellable: Gio.Cancellable | null): boolean
}

/**
 * Signal callback interface for `process-file-attributes`
 */
interface MinerFS_ProcessFileAttributesSignalCallback {
    (file: Gio.File, builder: Tracker.SparqlBuilder, cancellable: Gio.Cancellable | null): boolean
}

/**
 * Signal callback interface for `remove-file`
 */
interface MinerFS_RemoveFileSignalCallback {
    (file: Gio.File, childrenOnly: boolean, builder: Tracker.SparqlBuilder): boolean
}

/**
 * Signal callback interface for `writeback-file`
 */
interface MinerFS_WritebackFileSignalCallback {
    (file: Gio.File, rdfTypes: string[], results: any[], cancellable: Gio.Cancellable | null): boolean
}

interface MinerFS extends Gio.Initable {

    // Own properties of TrackerMiner-1.0.TrackerMiner.MinerFS

    readonly dataProvider: DataProvider
    initialCrawling: boolean
    mtimeChecking: boolean
    processingPoolReadyLimit: number
    processingPoolWaitLimit: number
    readonly root: Gio.File
    throttle: number

    // Own fields of TrackerMiner-1.0.TrackerMiner.MinerFS

    parent: Miner
    priv: MinerFSPrivate

    // Owm methods of TrackerMiner-1.0.TrackerMiner.MinerFS

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

    // Own signals of TrackerMiner-1.0.TrackerMiner.MinerFS

    connect(sigName: "finished", callback: MinerFS_FinishedSignalCallback): number
    on(sigName: "finished", callback: MinerFS_FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: MinerFS_FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: MinerFS_FinishedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "finished", directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number, ...args: any[]): void
    connect(sigName: "finished-root", callback: MinerFS_FinishedRootSignalCallback): number
    on(sigName: "finished-root", callback: MinerFS_FinishedRootSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished-root", callback: MinerFS_FinishedRootSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished-root", callback: MinerFS_FinishedRootSignalCallback): NodeJS.EventEmitter
    emit(sigName: "finished-root", ...args: any[]): void
    connect(sigName: "ignore-next-update-file", callback: MinerFS_IgnoreNextUpdateFileSignalCallback): number
    on(sigName: "ignore-next-update-file", callback: MinerFS_IgnoreNextUpdateFileSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "ignore-next-update-file", callback: MinerFS_IgnoreNextUpdateFileSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "ignore-next-update-file", callback: MinerFS_IgnoreNextUpdateFileSignalCallback): NodeJS.EventEmitter
    emit(sigName: "ignore-next-update-file", builder: Tracker.SparqlBuilder, cancellable: Gio.Cancellable | null, ...args: any[]): void
    connect(sigName: "process-file", callback: MinerFS_ProcessFileSignalCallback): number
    on(sigName: "process-file", callback: MinerFS_ProcessFileSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "process-file", callback: MinerFS_ProcessFileSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "process-file", callback: MinerFS_ProcessFileSignalCallback): NodeJS.EventEmitter
    emit(sigName: "process-file", builder: Tracker.SparqlBuilder, cancellable: Gio.Cancellable | null, ...args: any[]): void
    connect(sigName: "process-file-attributes", callback: MinerFS_ProcessFileAttributesSignalCallback): number
    on(sigName: "process-file-attributes", callback: MinerFS_ProcessFileAttributesSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "process-file-attributes", callback: MinerFS_ProcessFileAttributesSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "process-file-attributes", callback: MinerFS_ProcessFileAttributesSignalCallback): NodeJS.EventEmitter
    emit(sigName: "process-file-attributes", builder: Tracker.SparqlBuilder, cancellable: Gio.Cancellable | null, ...args: any[]): void
    connect(sigName: "remove-file", callback: MinerFS_RemoveFileSignalCallback): number
    on(sigName: "remove-file", callback: MinerFS_RemoveFileSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "remove-file", callback: MinerFS_RemoveFileSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "remove-file", callback: MinerFS_RemoveFileSignalCallback): NodeJS.EventEmitter
    emit(sigName: "remove-file", childrenOnly: boolean, builder: Tracker.SparqlBuilder, ...args: any[]): void
    connect(sigName: "writeback-file", callback: MinerFS_WritebackFileSignalCallback): number
    on(sigName: "writeback-file", callback: MinerFS_WritebackFileSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "writeback-file", callback: MinerFS_WritebackFileSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "writeback-file", callback: MinerFS_WritebackFileSignalCallback): NodeJS.EventEmitter
    emit(sigName: "writeback-file", rdfTypes: string[], results: any[], cancellable: Gio.Cancellable | null, ...args: any[]): void

    // Class property signals of TrackerMiner-1.0.TrackerMiner.MinerFS

    connect(sigName: "notify::data-provider", callback: (...args: any[]) => void): number
    on(sigName: "notify::data-provider", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data-provider", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data-provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data-provider", ...args: any[]): void
    connect(sigName: "notify::initial-crawling", callback: (...args: any[]) => void): number
    on(sigName: "notify::initial-crawling", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::initial-crawling", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::initial-crawling", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::initial-crawling", ...args: any[]): void
    connect(sigName: "notify::mtime-checking", callback: (...args: any[]) => void): number
    on(sigName: "notify::mtime-checking", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mtime-checking", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mtime-checking", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mtime-checking", ...args: any[]): void
    connect(sigName: "notify::processing-pool-ready-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::processing-pool-ready-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::processing-pool-ready-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::processing-pool-ready-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::processing-pool-ready-limit", ...args: any[]): void
    connect(sigName: "notify::processing-pool-wait-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::processing-pool-wait-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::processing-pool-wait-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::processing-pool-wait-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::processing-pool-wait-limit", ...args: any[]): void
    connect(sigName: "notify::root", callback: (...args: any[]) => void): number
    on(sigName: "notify::root", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::root", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::root", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::throttle", callback: (...args: any[]) => void): number
    on(sigName: "notify::throttle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::throttle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::throttle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::throttle", ...args: any[]): void
    connect(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): number
    on(sigName: "notify::introspection-handler", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::introspection-handler", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::introspection-handler", ...args: any[]): void
    connect(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): number
    on(sigName: "notify::introspection-xml", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::introspection-xml", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::introspection-xml", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::progress", callback: (...args: any[]) => void): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::progress", ...args: any[]): void
    connect(sigName: "notify::remaining-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::remaining-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::remaining-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::remaining-time", ...args: any[]): void
    connect(sigName: "notify::status", callback: (...args: any[]) => void): number
    on(sigName: "notify::status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    constructor(config?: MinerFS_ConstructProps) 
    _init(config?: MinerFS_ConstructProps): void
    /**
     * Gives the caller the #GQuark used to identify #TrackerMinerFS errors
     * in #GError structures. The #GQuark is used as the domain for the error.
     */
    static errorQuark(): GLib.Quark
}

interface MinerOnline_ConstructProps extends Gio.Initable_ConstructProps, Miner_ConstructProps {
}

/**
 * Signal callback interface for `connected`
 */
interface MinerOnline_ConnectedSignalCallback {
    (type: NetworkType): boolean
}

/**
 * Signal callback interface for `disconnected`
 */
interface MinerOnline_DisconnectedSignalCallback {
    (): void
}

interface MinerOnline extends Gio.Initable {

    // Own properties of TrackerMiner-1.0.TrackerMiner.MinerOnline

    readonly networkType: NetworkType

    // Own fields of TrackerMiner-1.0.TrackerMiner.MinerOnline

    parentInstance: Miner

    // Owm methods of TrackerMiner-1.0.TrackerMiner.MinerOnline

    /**
     * Get the type of network this data `miner` uses to index content.
     */
    getNetworkType(): NetworkType

    // Own signals of TrackerMiner-1.0.TrackerMiner.MinerOnline

    connect(sigName: "connected", callback: MinerOnline_ConnectedSignalCallback): number
    on(sigName: "connected", callback: MinerOnline_ConnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connected", callback: MinerOnline_ConnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connected", callback: MinerOnline_ConnectedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "connected", ...args: any[]): void
    connect(sigName: "disconnected", callback: MinerOnline_DisconnectedSignalCallback): number
    on(sigName: "disconnected", callback: MinerOnline_DisconnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "disconnected", callback: MinerOnline_DisconnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "disconnected", callback: MinerOnline_DisconnectedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "disconnected", ...args: any[]): void

    // Class property signals of TrackerMiner-1.0.TrackerMiner.MinerOnline

    connect(sigName: "notify::network-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::network-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::network-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::network-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::network-type", ...args: any[]): void
    connect(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): number
    on(sigName: "notify::introspection-handler", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::introspection-handler", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::introspection-handler", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::introspection-handler", ...args: any[]): void
    connect(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): number
    on(sigName: "notify::introspection-xml", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::introspection-xml", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::introspection-xml", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::introspection-xml", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::progress", callback: (...args: any[]) => void): number
    on(sigName: "notify::progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::progress", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::progress", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::progress", ...args: any[]): void
    connect(sigName: "notify::remaining-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::remaining-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::remaining-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::remaining-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::remaining-time", ...args: any[]): void
    connect(sigName: "notify::status", callback: (...args: any[]) => void): number
    on(sigName: "notify::status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    constructor(config?: MinerOnline_ConstructProps) 
    _init(config?: MinerOnline_ConstructProps): void
}

interface DataProviderIface {

    // Own fields of TrackerMiner-1.0.TrackerMiner.DataProviderIface

    /**
     * Parent interface type.
     * @field 
     */
    gIface: GObject.TypeInterface
    begin: (dataProvider: DataProvider, url: Gio.File, attributes: string, flags: DirectoryFlags, cancellable: Gio.Cancellable | null) => Enumerator
    beginAsync: (dataProvider: DataProvider, url: Gio.File, attributes: string, flags: DirectoryFlags, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    beginFinish: (dataProvider: DataProvider, result: Gio.AsyncResult) => Enumerator
    end: (dataProvider: DataProvider, enumerator: Enumerator, cancellable: Gio.Cancellable | null) => boolean
    endAsync: (dataProvider: DataProvider, enumerator: Enumerator, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    endFinish: (dataProvider: DataProvider, result: Gio.AsyncResult) => boolean
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
    parentClass: MinerClass
    itemsAvailable: (decorator: Decorator) => void
    finished: (decorator: Decorator) => void
    /**
     * Reserved for future API improvements.
     * @field 
     */
    padding: object[]
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
    parentClass: DecoratorClass
    /**
     * Reserved for future API improvements.
     * @field 
     */
    padding: object[]
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
    gIface: GObject.TypeInterface
    next: (enumerator: Enumerator, cancellable: Gio.Cancellable | null) => object | null
    nextAsync: (enumerator: Enumerator, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    nextFinish: (enumerator: Enumerator, result: Gio.AsyncResult) => object | null
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
    parentClass: GObject.ObjectClass
    directoryAdded: (indexingTree: IndexingTree, directory: Gio.File) => void
    directoryRemoved: (indexingTree: IndexingTree, directory: Gio.File) => void
    directoryUpdated: (indexingTree: IndexingTree, directory: Gio.File) => void
    childUpdated: (indexingTree: IndexingTree, root: Gio.File, child: Gio.File) => void
    /**
     * Reserved for future API improvements.
     * @field 
     */
    padding: object[]
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
    parentClass: GObject.ObjectClass
    started: (miner: Miner) => void
    stopped: (miner: Miner) => void
    paused: (miner: Miner) => void
    resumed: (miner: Miner) => void
    progress: (miner: Miner, status: string, progress: number) => void
    ignoreNextUpdate: (miner: Miner, urls: string[]) => void
    /**
     * Reserved for future API improvements.
     * @field 
     */
    padding: object[]
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
    processFile: (fs: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable: Gio.Cancellable | null) => boolean
    ignoreNextUpdateFile: (fs: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable: Gio.Cancellable | null) => boolean
    finished: (fs: MinerFS, elapsed: number, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number) => void
    processFileAttributes: (fs: MinerFS, file: Gio.File, builder: Tracker.SparqlBuilder, cancellable: Gio.Cancellable | null) => boolean
    finishedRoot: (fs: MinerFS, root: Gio.File, directoriesFound: number, directoriesIgnored: number, filesFound: number, filesIgnored: number) => void
    removeFile: (fs: MinerFS, file: Gio.File, childrenOnly: boolean, builder: Tracker.SparqlBuilder) => boolean
    /**
     * Reserved for future API improvements.
     * @field 
     */
    padding: object[]
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
    parentClass: MinerClass
    connected: (miner: MinerOnline, network: NetworkType) => boolean
    disconnected: (miner: MinerOnline) => void
    /**
     * Reserved for future API improvements.
     * @field 
     */
    padding: object[]
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

}
export default TrackerMiner;