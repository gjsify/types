
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

export namespace TrackerMiner {

    /**
     * TrackerMiner-2.0
     */


    /**
     * Possible errors returned when calling `tracker_decorator_next_finish()`.
     * @gir-type Enum
     */
    enum DecoratorError {
        /**
         * There is no item to be processed
         * next. It is entirely possible to have a ::items_available signal
         * emitted and then have this error when calling
         * `tracker_decorator_next_finish()` because the signal may apply to a
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


    /**
     * Flags used when defining default filter policy in the {@link TrackerMiner.IndexingTree}.
     * @gir-type Enum
     */
    enum FilterPolicy {
        /**
         * Items matching the filter will be skipped.
         */
        DENY,
        /**
         * Items matching the filter will be accepted.
         */
        ACCEPT,
    }


    /**
     * Flags used when adding a new filter in the {@link TrackerMiner.IndexingTree}.
     * @gir-type Enum
     */
    enum FilterType {
        /**
         * All files matching this filter will be filtered out.
         */
        FILE,
        /**
         * All directories matching this filter will be filtered out.
         */
        DIRECTORY,
        /**
         * All files in directories matching this filter will be filtered out.
         */
        PARENT_DIRECTORY,
    }


    /**
     * Possible errors returned when calling {@link TrackerMiner.Miner} APIs or
     * subclassed miners where the error is generic to all miners.
     * @gir-type Enum
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
     * the {@link TrackerMiner.MinerFS} type and other APIs available with this class.
     * @gir-type Enum
     * @since 1.2
     */
    enum MinerFSError {
        /**
         * There was an error during
         * initialization of the object. The specific details are in the
         * message.
         */
        MINER_FS_ERROR_INIT,
    }


    /**
     * @gir-type Enum
     */
    enum MinerFSEventType {
        CREATED,
        UPDATED,
        DELETED,
        MOVED,
    }


    /**
     * Enumerates the different types of connections that the device might
     * use when connected to internet. Note that not all providers might
     * provide this information.
     * @gir-type Enum
     * @since 0.18
     */
    enum NetworkType {
        /**
         * Network is disconnected
         */
        NONE,
        /**
         * Network status is unknown
         */
        UNKNOWN,
        /**
         * Network is connected over a GPRS
         * connection
         */
        GPRS,
        /**
         * Network is connected over an EDGE
         * connection
         */
        EDGE,
        /**
         * Network is connected over a 3G or
         * faster (HSDPA, UMTS, ...) connection
         */
        "3G",
        /**
         * Network is connected over a local
         * network connection. This can be ethernet, wifi, etc.
         */
        LAN,
    }


    /**
     * The name of the D-Bus interface to use for all data miners that
     * inter-operate with Tracker.
     * @since 0.8
     */
    const MINER_DBUS_INTERFACE: string;

    /**
     * D-Bus name prefix to use for all data miners. This allows custom
     * miners to be written using `TRACKER_MINER_DBUS_NAME_PREFIX` + "Files" for
     * example and would show up on D-Bus under
     * &quot;org.freedesktop.Tracker1.Miner.Files&quot;.
     * @since 0.8
     */
    const MINER_DBUS_NAME_PREFIX: string;

    /**
     * D-Bus path prefix to use for all data miners. This allows custom
     * miners to be written using `TRACKER_MINER_DBUS_PATH_PREFIX` + "Files" for
     * example and would show up on D-Bus under
     * &quot;/org/freedesktop/Tracker1/Miner/Files&quot;.
     * @since 0.8
     */
    const MINER_DBUS_PATH_PREFIX: string;

    /**
     * Used as the domain for any `GErrors` reported by `TrackerMiner` objects.
     * @since 0.8
     */
    const MINER_ERROR_DOMAIN: string;

    /**
     * Flags used when adding a new directory to be indexed in the
     * {@link TrackerMiner.IndexingTree} and {@link TrackerMiner.DataProvider}.
     * @gir-type Flags
     */
    enum DirectoryFlags {
        /**
         * No flags.
         */
        NONE,
        /**
         * Should recurse in the directory.
         */
        RECURSE,
        /**
         * Should check mtimes of items
         * in the directory.
         */
        CHECK_MTIME,
        /**
         * Should setup monitors in the items
         * found in the directory.
         */
        MONITOR,
        /**
         * Should ignore the directory
         * contents.
         */
        IGNORE,
        /**
         * Should preserve items in the
         * directory even if the directory gets removed.
         */
        PRESERVE,
        /**
         * Internally a priority queue is
         * used and this flag makes sure the directory is given a priority
         * over other directories queued.
         */
        PRIORITY,
        /**
         * For cases where the content being
         * crawled by the enumerator is not local (e.g. it's on a
         * server somewhere), use the #TRACKER_DIRECTORY_FLAG_NO_STAT flag.
         * The default is to use `stat()` and assume we're mining a local or
         * mounted file system.
         */
        NO_STAT,
        /**
         * Forces checks on deleted
         * contents. This is most usually optimized away unless directory
         * mtime changes indicate there could be deleted content.
         */
        CHECK_DELETED,
    }


    namespace Decorator {
        // Signal signatures
        interface SignalSignatures extends Miner.SignalSignatures {
            /**
             * The ::finished signal will be emitted whenever the
             * {@link TrackerMiner.Decorator} has finished extracted extended metadata
             * for resources in the database.
             * @signal
             * @since 0.18
             * @run-last
             */
            finished: () => void;
            /**
             * The ::items-available signal will be emitted whenever the
             * {@link TrackerMiner.Decorator} sees resources that are available for
             * extended metadata extraction.
             * @signal
             * @since 0.18
             * @run-last
             */
            "items-available": () => void;
            "notify::class-names": (pspec: GObject.ParamSpec) => void;
            "notify::commit-batch-size": (pspec: GObject.ParamSpec) => void;
            "notify::data-source": (pspec: GObject.ParamSpec) => void;
            "notify::priority-rdf-types": (pspec: GObject.ParamSpec) => void;
            "notify::progress": (pspec: GObject.ParamSpec) => void;
            "notify::remaining-time": (pspec: GObject.ParamSpec) => void;
            "notify::status": (pspec: GObject.ParamSpec) => void;
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
     * @gir-type Class
     */
    abstract class Decorator extends Miner implements Gio.Initable {
        static $gtype: GObject.GType<Decorator>;

        // Properties
        get class_names(): string[];
        set class_names(val: string[]);

        get classNames(): string[];
        set classNames(val: string[]);

        /**
         * @default 200
         */
        get commit_batch_size(): number;
        set commit_batch_size(val: number);

        /**
         * @default 200
         */
        get commitBatchSize(): number;
        set commitBatchSize(val: number);

        /**
         * @construct-only
         * @default null
         */
        get data_source(): string;

        /**
         * @construct-only
         * @default null
         */
        get dataSource(): string;

        /**
         * @write-only
         */
        set priority_rdf_types(val: string[]);

        /**
         * @write-only
         */
        set priorityRdfTypes(val: string[]);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Decorator.SignalSignatures;

        // Fields
        priv: any;

        // Constructors
        constructor(properties?: Partial<Decorator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Decorator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Decorator.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Decorator.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Decorator.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Decorator.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Decorator.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Gives the caller the {@link GLib.Quark} used to identify {@link TrackerMiner.Decorator} errors
         * in {@link GLib.Error} structures. The {@link GLib.Quark} is used as the domain for the error.
         */
        static error_quark(): GLib.Quark;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_finished(): void;

        /**
         * @virtual
         */
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
         * @returns a const gchar** or `NULL`.
         */
        get_class_names(): string[];

        /**
         * The unique string identifying this {@link TrackerMiner.Decorator} that has
         * extracted the extended metadata. This is essentially an identifier
         * so it's clear WHO has extracted this extended metadata.
         * @returns a const gchar* or `NULL` if an error happened.
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
         * This function will give a {@link GLib.Error} if the miner is paused at the
         * time it is called.
         * @param cancellable a {@link Gio.Cancellable}.
         */
        next(cancellable: (Gio.Cancellable | null)): globalThis.Promise<DecoratorInfo>;

        /**
         * Processes the next resource in the queue to have extended metadata
         * extracted. If the item in the queue has been completed already, it
         * signals it's completion instead.
         * 
         * This function will give a {@link GLib.Error} if the miner is paused at the
         * time it is called.
         * @param cancellable a {@link Gio.Cancellable}.
         * @param callback a {@link Gio.AsyncReadyCallback}.
         */
        next(cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Processes the next resource in the queue to have extended metadata
         * extracted. If the item in the queue has been completed already, it
         * signals it's completion instead.
         * 
         * This function will give a {@link GLib.Error} if the miner is paused at the
         * time it is called.
         * @param cancellable a {@link Gio.Cancellable}.
         * @param callback a {@link Gio.AsyncReadyCallback}.
         */
        next(cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<DecoratorInfo> | void);

        /**
         * Should be called in the callback function provided to
         * `tracker_decorator_next()` to return the result of the task be it an
         * error or not.
         * @param result a {@link Gio.AsyncResult}.
         * @returns a {@link TrackerMiner.DecoratorInfo} on success or  `NULL` on error. Free with `tracker_decorator_info_unref()`.
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


    namespace DecoratorFS {
        // Signal signatures
        interface SignalSignatures extends Decorator.SignalSignatures {
            "notify::class-names": (pspec: GObject.ParamSpec) => void;
            "notify::commit-batch-size": (pspec: GObject.ParamSpec) => void;
            "notify::data-source": (pspec: GObject.ParamSpec) => void;
            "notify::priority-rdf-types": (pspec: GObject.ParamSpec) => void;
            "notify::progress": (pspec: GObject.ParamSpec) => void;
            "notify::remaining-time": (pspec: GObject.ParamSpec) => void;
            "notify::status": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Decorator.ConstructorProps, Gio.Initable.ConstructorProps {

        }
    }

    /**
     * A decorator object.
     * @gir-type Class
     */
    abstract class DecoratorFS extends Decorator implements Gio.Initable {
        static $gtype: GObject.GType<DecoratorFS>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DecoratorFS.SignalSignatures;

        // Fields
        priv: any;

        // Constructors
        constructor(properties?: Partial<DecoratorFS.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof DecoratorFS.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DecoratorFS.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DecoratorFS.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DecoratorFS.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DecoratorFS.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DecoratorFS.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Prepends a file for processing.
         * @param file a {@link Gio.File} to process
         * @returns the tracker:id of the element corresponding to the file
         */
        prepend_file(file: Gio.File): number;
    }


    namespace IndexingTree {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ::child-updated signal may be emitted to notify
             * about possible changes on children of a root.
             * 
             * {@link TrackerMiner.IndexingTree} does not emit those by itself,
             * those may be triggered through `tracker_indexing_tree_notify_update()`.
             * @signal
             * @since 1.10
             * @run-last
             */
            "child-updated": (arg0: Gio.File, arg1: Gio.File) => void;
            /**
             * the ::directory-added signal is emitted when a new
             * directory is added to the list of other directories which
             * are to be considered for indexing. Typically this is
             * signalled when the `tracker_indexing_tree_add()` API is
             * called.
             * @signal
             * @since 0.14
             * @run-last
             */
            "directory-added": (arg0: Gio.File) => void;
            /**
             * the ::directory-removed signal is emitted when a
             * directory is removed from the list of other directories
             * which are to be considered for indexing. Typically this is
             * signalled when the `tracker_indexing_tree_remove()` API is
             * called.
             * @signal
             * @since 0.14
             * @run-last
             */
            "directory-removed": (arg0: Gio.File) => void;
            /**
             * The ::directory-updated signal is emitted on a root
             * when either its indexing flags change (e.g. due to consecutive
             * calls to `tracker_indexing_tree_add()`), or anytime an update is
             * requested through `tracker_indexing_tree_notify_update()`.
             * @signal
             * @since 0.14
             * @run-last
             */
            "directory-updated": (arg0: Gio.File) => void;
            "notify::filter-hidden": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            filter_hidden: boolean;
            filterHidden: boolean;
            root: Gio.File;
        }
    }

    /**
     * Base object used to configure indexing within {@link TrackerMiner.MinerFS} items.
     * @gir-type Class
     */
    class IndexingTree extends GObject.Object {
        static $gtype: GObject.GType<IndexingTree>;

        // Properties
        /**
         * @default false
         */
        get filter_hidden(): boolean;
        set filter_hidden(val: boolean);

        /**
         * @default false
         */
        get filterHidden(): boolean;
        set filterHidden(val: boolean);

        /**
         * @construct-only
         */
        get root(): Gio.File;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: IndexingTree.SignalSignatures;

        // Fields
        priv: any;

        // Constructors
        constructor(properties?: Partial<IndexingTree.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): IndexingTree;

        static new_with_root(root: Gio.File): IndexingTree;

        // Signals
        /** @signal */
        connect<K extends keyof IndexingTree.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, IndexingTree.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof IndexingTree.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, IndexingTree.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof IndexingTree.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<IndexingTree.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param root 
         * @param child 
         * @virtual
         */
        vfunc_child_updated(root: Gio.File, child: Gio.File): void;

        /**
         * @param directory 
         * @virtual
         */
        vfunc_directory_added(directory: Gio.File): void;

        /**
         * @param directory 
         * @virtual
         */
        vfunc_directory_removed(directory: Gio.File): void;

        /**
         * @param directory 
         * @virtual
         */
        vfunc_directory_updated(directory: Gio.File): void;

        // Methods
        /**
         * Adds a directory to the indexing tree with the
         * given configuration flags.
         * @param directory {@link Gio.File} pointing to a directory
         * @param flags Configuration flags for the directory
         */
        add(directory: Gio.File, flags: DirectoryFlags): void;

        /**
         * Adds a new filter for basenames.
         * @param filter filter type
         * @param glob_string glob-style string for the filter
         */
        add_filter(filter: FilterType, glob_string: string): void;

        /**
         * Clears all filters of a given type.
         * @param type filter type to clear
         */
        clear_filters(type: FilterType): void;

        /**
         * returns `true` if `file` should be indexed according to the
         * parameters given through `tracker_indexing_tree_add()` and
         * `tracker_indexing_tree_add_filter()`.
         * 
         * If `file_type` is #G_FILE_TYPE_UNKNOWN, file type will be queried to the
         * file system.
         * @param file a {@link Gio.File}
         * @param file_type a {@link Gio.FileType}
         * @returns `true` if `file` should be indexed.
         */
        file_is_indexable(file: Gio.File, file_type: Gio.FileType): boolean;

        /**
         * Evaluates if the URL represented by `file` is the same of that for
         * the root of the `tree`.
         * @param file a {@link Gio.File} to compare
         * @returns `true` if `file` matches the URL canonically, otherwise `false`.
         */
        file_is_root(file: Gio.File): boolean;

        /**
         * Returns `true` if `file` matches any filter of the given filter type.
         * @param type filter type
         * @param file a {@link Gio.File}
         * @returns `true` if `file` is filtered.
         */
        file_matches_filter(type: FilterType, file: Gio.File): boolean;

        /**
         * Get the default filtering policies for `tree` when indexing content.
         * Some content is black listed or white listed and the default policy
         * for that is returned here. The `filter` allows specific type of
         * policies to be returned, for example, the default policy for files
         * (#TRACKER_FILTER_FILE).
         * @param filter a {@link TrackerMiner.FilterType}
         * @returns Either #TRACKER_FILTER_POLICY_DENY or #TRACKER_FILTER_POLICY_ACCEPT.
         */
        get_default_policy(filter: FilterType): FilterPolicy;

        /**
         * Describes if the `tree` should index hidden content. To change this
         * setting, see `tracker_indexing_tree_set_filter_hidden()`.
         * @returns `false` if hidden files are indexed, otherwise `true`.
         */
        get_filter_hidden(): boolean;

        /**
         * Returns the {@link Gio.File} that represents the master root location for all
         * indexing locations. For example, if
         * <filename>file:///etc</filename> is an indexed path and so was
         * <filename>file:///home/user</filename>, the master root is
         * <filename>file:///</filename>. Only one scheme per `tree` can be
         * used, so you can not mix <filename>http</filename> and
         * <filename>file</filename> roots in `tree`.
         * 
         * The return value should <emphasis>NEVER</emphasis> be `null`. In
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
         * @returns the effective root for all locations, or `null` on error. The root is owned by `tree` and should not be freed. It can be referenced using `g_object_ref()`.
         */
        get_master_root(): Gio.File;

        /**
         * Returns the {@link Gio.File} that was previously added through `tracker_indexing_tree_add()`
         * and would equal or contain `file`, or `null` if none applies.
         * 
         * If the return value is non-`null`, `directory_flags` would contain the
         * {@link TrackerMiner.DirectoryFlags} applying to `file`.
         * @param file a {@link Gio.File}
         * @returns the effective parent in `tree`, or `null`
         */
        get_root(file: Gio.File): [Gio.File, DirectoryFlags];

        /**
         * Returns the list of indexing roots in `tree`
         * @returns The list          of roots, the list itself must be freed with `g_list_free()`,          the list elements are owned by `tree` and should not be          freed.
         */
        list_roots(): Gio.File[];

        /**
         * Signals either {@link TrackerMiner.IndexingTree.SignalSignatures.directory_updated | TrackerMiner.IndexingTree::directory-updated} or
         * {@link TrackerMiner.IndexingTree.SignalSignatures.child_updated | TrackerMiner.IndexingTree::child-updated} on the given file and
         * returns `TRUE`. If `file` is not indexed according to the
         * {@link TrackerMiner.IndexingTree}, `FALSE` is returned.
         * 
         * If `recursive` is `TRUE`, {@link TrackerMiner.IndexingTree.SignalSignatures.directory_updated | TrackerMiner.IndexingTree::directory-updated}
         * will be emitted on the indexing roots that are contained in `file`.
         * @param file a {@link Gio.File}
         * @param recursive Whether contained indexing roots are affected by the update
         * @returns `TRUE` if a signal is emitted.
         */
        notify_update(file: Gio.File, recursive: boolean): boolean;

        /**
         * returns `true` if `parent` should be indexed based on its contents.
         * @param parent parent directory
         * @param children children within `parent`
         * @returns `true` if `parent` should be indexed.
         */
        parent_is_indexable(parent: Gio.File, children: Gio.File[]): boolean;

        /**
         * Removes `directory` from the indexing tree, note that
         * only directories previously added with `tracker_indexing_tree_add()`
         * can be effectively removed.
         * @param directory {@link Gio.File} pointing to a directory
         */
        remove(directory: Gio.File): void;

        /**
         * Set the default `policy` (to allow or deny) for content in `tree`
         * based on the type - in this case `filter`. Here, `filter` is a file
         * or directory and there are some other options too.
         * 
         * For example, you can (by default), disable indexing all directories
         * using this function.
         * @param filter a {@link TrackerMiner.FilterType}
         * @param policy a {@link TrackerMiner.FilterPolicy}
         */
        set_default_policy(filter: FilterType, policy: FilterPolicy): void;

        /**
         * When indexing content, sometimes it is preferable to ignore hidden
         * content, for example, files prefixed with &quot;.&quot;. This is
         * common for files in a home directory which are usually config
         * files.
         * 
         * Sets the indexing policy for `tree` with hidden files and content.
         * To ignore hidden files, `filter_hidden` should be `true`, otherwise
         * `false`.
         * @param filter_hidden a boolean
         */
        set_filter_hidden(filter_hidden: boolean): void;
    }


    namespace Miner {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * the ::paused signal is emitted whenever
             * there is any reason to pause, either
             * internal (through `tracker_miner_pause()`) or
             * external (through DBus, see `TrackerMinerManager`).
             * @signal
             * @since 0.8
             * @run-last
             */
            paused: () => void;
            /**
             * the ::progress signal will be emitted by TrackerMiner implementations
             * to indicate progress about the data mining process. `status` will
             * contain a translated string with the current miner status and `progress`
             * will indicate how much has been processed so far. `remaining_time` will
             * give the number expected of seconds to finish processing, 0 if the
             * value cannot be estimated, and -1 if its not applicable.
             * @signal
             * @since 0.12
             * @run-last
             */
            progress: (arg0: string, arg1: number, arg2: number) => void;
            /**
             * the ::resumed signal is emitted whenever
             * all reasons to pause have disappeared, see
             * `tracker_miner_resume()` and `TrackerMinerManager`.
             * @signal
             * @since 0.8
             * @run-last
             */
            resumed: () => void;
            /**
             * the ::started signal is emitted in the miner
             * right after it has been started through
             * `tracker_miner_start()`.
             * @signal
             * @since 0.8
             * @run-last
             */
            started: () => void;
            /**
             * the ::stopped signal is emitted in the miner
             * right after it has been stopped through
             * `tracker_miner_stop()`.
             * @signal
             * @since 0.8
             * @run-last
             */
            stopped: () => void;
            "notify::progress": (pspec: GObject.ParamSpec) => void;
            "notify::remaining-time": (pspec: GObject.ParamSpec) => void;
            "notify::status": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            progress: number;
            remaining_time: number;
            remainingTime: number;
            status: string;
        }
    }

    /**
     * Abstract miner object.
     * @gir-type Class
     */
    abstract class Miner extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<Miner>;

        // Properties
        /**
         * @default 0
         */
        get progress(): number;
        set progress(val: number);

        /**
         * @default -1
         */
        get remaining_time(): number;
        set remaining_time(val: number);

        /**
         * @default -1
         */
        get remainingTime(): number;
        set remainingTime(val: number);

        /**
         * @default Idle
         */
        get status(): string;
        set status(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Miner.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Miner.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Miner.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Miner.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Miner.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Miner.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Miner.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Miner.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Gives the caller the {@link GLib.Quark} used to identify {@link TrackerMiner.Miner} errors
         * in {@link GLib.Error} structures. The {@link GLib.Quark} is used as the domain for the error.
         */
        static error_quark(): GLib.Quark;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_paused(): void;

        /**
         * @param status 
         * @param progress 
         * @param remaining_time 
         * @virtual
         */
        vfunc_progress(status: string, progress: number, remaining_time: number): void;

        /**
         * @virtual
         */
        vfunc_resumed(): void;

        /**
         * @virtual
         */
        vfunc_started(): void;

        /**
         * @virtual
         */
        vfunc_stopped(): void;

        // Methods
        /**
         * Returns `TRUE` if the miner is paused.
         * @returns `TRUE` if the miner is paused.
         */
        is_paused(): boolean;

        /**
         * Returns `TRUE` if the miner has been started.
         * @returns `TRUE` if the miner is already started.
         */
        is_started(): boolean;

        /**
         * Asks `miner` to pause. This call may be called multiple times,
         * but {@link TrackerMiner.Miner.SignalSignatures.paused | TrackerMiner.Miner::paused} will only be emitted the first time.
         * The same number of `tracker_miner_resume()` calls are expected
         * in order to resume operations.
         */
        pause(): void;

        /**
         * Asks the miner to resume processing. This needs to be called
         * as many times as `tracker_miner_pause()` calls were done
         * previously. This function will return `TRUE` when the miner
         * is actually resumed.
         * @returns `TRUE` if the miner resumed its operations.
         */
        resume(): boolean;

        /**
         * Tells the miner to start processing data.
         */
        start(): void;

        /**
         * Tells the miner to stop processing data.
         */
        stop(): void;

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


    namespace MinerFS {
        // Signal signatures
        interface SignalSignatures extends Miner.SignalSignatures {
            /**
             * The ::finished signal is emitted when `miner_fs` has finished
             * all pending processing.
             * @signal
             * @since 0.8
             * @run-last
             */
            finished: (arg0: number, arg1: number, arg2: number, arg3: number, arg4: number) => void;
            /**
             * The ::finished-crawl signal is emitted when `miner_fs` has
             * finished finding all resources that need to be indexed
             * with the root location of `file`. At this point, it's likely
             * many are still in the queue to be added to the database,
             * but this gives some indication that a location is
             * processed.
             * @signal
             * @since 1.2
             * @run-last
             */
            "finished-root": (arg0: Gio.File) => void;
            /**
             * @signal
             * @run-last
             */
            "move-file": (arg0: Gio.File, arg1: Gio.File, arg2: boolean) => string;
            /**
             * The ::process-file signal is emitted whenever a file should
             * be processed, and it's metadata extracted.
             * 
             * `builder` is the `TrackerSparqlBuilder` where all sparql updates
             * to be performed for `file` will be appended.
             * 
             * This signal allows both synchronous and asynchronous extraction,
             * in the synchronous case `cancellable` can be safely ignored. In
             * either case, on successful metadata extraction, implementations
             * must call `tracker_miner_fs_notify_finish()` to indicate that
             * processing has finished on `file`, so the miner can execute
             * the SPARQL updates and continue processing other files.
             * @signal
             * @since 0.8
             * @run-last
             */
            "process-file": (arg0: Gio.File, arg1: Gio.Task) => (boolean | void);
            /**
             * The ::process-file-attributes signal is emitted whenever a file should
             * be processed, but only the attribute-related metadata extracted.
             * 
             * `builder` is the `TrackerSparqlBuilder` where all sparql updates
             * to be performed for `file` will be appended. For the properties being
             * updated, the DELETE statements should be included as well.
             * 
             * This signal allows both synchronous and asynchronous extraction,
             * in the synchronous case `cancellable` can be safely ignored. In
             * either case, on successful metadata extraction, implementations
             * must call `tracker_miner_fs_notify_finish()` to indicate that
             * processing has finished on `file`, so the miner can execute
             * the SPARQL updates and continue processing other files.
             * @signal
             * @since 0.10
             * @run-last
             */
            "process-file-attributes": (arg0: Gio.File, arg1: Gio.Task) => (boolean | void);
            /**
             * @signal
             * @run-last
             */
            "remove-children": (arg0: Gio.File) => string;
            /**
             * The ::remove-file signal will be emitted on files that need removal
             * according to the miner configuration (either the files themselves are
             * deleted, or the directory/contents no longer need inspection according
             * to miner configuration and their location.
             * 
             * This operation is always assumed to be recursive, the `children_only`
             * argument will be `true` if for any reason the topmost directory needs
             * to stay (e.g. moved from a recursively indexed directory tree to a
             * non-recursively indexed location).
             * 
             * The `builder` argument can be used to provide additional SPARQL
             * deletes and updates necessary around the deletion of those items. If
             * the return value of this signal is `true`, `builder` is expected to
             * contain all relevant deletes for this operation.
             * 
             * If the return value of this signal is `false`, the miner will apply
             * its default behavior, which is deleting all triples that correspond
             * to the affected URIs.
             * @signal
             * @since 1.8
             * @run-last
             */
            "remove-file": (arg0: Gio.File) => string;
            "notify::data-provider": (pspec: GObject.ParamSpec) => void;
            "notify::processing-pool-ready-limit": (pspec: GObject.ParamSpec) => void;
            "notify::processing-pool-wait-limit": (pspec: GObject.ParamSpec) => void;
            "notify::root": (pspec: GObject.ParamSpec) => void;
            "notify::throttle": (pspec: GObject.ParamSpec) => void;
            "notify::progress": (pspec: GObject.ParamSpec) => void;
            "notify::remaining-time": (pspec: GObject.ParamSpec) => void;
            "notify::status": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Miner.ConstructorProps, Gio.Initable.ConstructorProps {
            data_provider: DataProvider;
            dataProvider: DataProvider;
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
     * @gir-type Class
     */
    abstract class MinerFS extends Miner implements Gio.Initable {
        static $gtype: GObject.GType<MinerFS>;

        // Properties
        /**
         * @construct-only
         */
        get data_provider(): DataProvider;

        /**
         * @construct-only
         */
        get dataProvider(): DataProvider;

        /**
         * @default 1
         */
        get processing_pool_ready_limit(): number;
        set processing_pool_ready_limit(val: number);

        /**
         * @default 1
         */
        get processingPoolReadyLimit(): number;
        set processingPoolReadyLimit(val: number);

        /**
         * @default 1
         */
        get processing_pool_wait_limit(): number;
        set processing_pool_wait_limit(val: number);

        /**
         * @default 1
         */
        get processingPoolWaitLimit(): number;
        set processingPoolWaitLimit(val: number);

        /**
         * @construct-only
         */
        get root(): Gio.File;

        /**
         * @default 0
         */
        get throttle(): number;
        set throttle(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MinerFS.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MinerFS.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof MinerFS.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MinerFS.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MinerFS.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MinerFS.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MinerFS.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MinerFS.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Gives the caller the {@link GLib.Quark} used to identify {@link TrackerMiner.MinerFS} errors
         * in {@link GLib.Error} structures. The {@link GLib.Quark} is used as the domain for the error.
         */
        static error_quark(): GLib.Quark;

        // Virtual methods
        /**
         * @param type 
         * @param file 
         * @param source_file 
         * @virtual
         */
        vfunc_filter_event(type: MinerFSEventType, file: Gio.File, source_file: Gio.File): boolean;

        /**
         * @param elapsed 
         * @param directories_found 
         * @param directories_ignored 
         * @param files_found 
         * @param files_ignored 
         * @virtual
         */
        vfunc_finished(elapsed: number, directories_found: number, directories_ignored: number, files_found: number, files_ignored: number): void;

        /**
         * @param root 
         * @param directories_found 
         * @param directories_ignored 
         * @param files_found 
         * @param files_ignored 
         * @virtual
         */
        vfunc_finished_root(root: Gio.File, directories_found: number, directories_ignored: number, files_found: number, files_ignored: number): void;

        /**
         * @param dest 
         * @param source 
         * @param recursive 
         * @virtual
         */
        vfunc_move_file(dest: Gio.File, source: Gio.File, recursive: boolean): string;

        /**
         * @param file 
         * @param task 
         * @virtual
         */
        vfunc_process_file(file: Gio.File, task: Gio.Task): boolean;

        /**
         * @param file 
         * @param task 
         * @virtual
         */
        vfunc_process_file_attributes(file: Gio.File, task: Gio.Task): boolean;

        /**
         * @param file 
         * @virtual
         */
        vfunc_remove_children(file: Gio.File): string;

        /**
         * @param file 
         * @virtual
         */
        vfunc_remove_file(file: Gio.File): string;

        // Methods
        /**
         * Tells the filesystem miner to check and index a file at
         * a given priority, this file must be part of the usual
         * crawling directories of {@link TrackerMiner.MinerFS}. See
         * `tracker_indexing_tree_add()`.
         * @param file {@link Gio.File} for the file to check
         * @param priority the priority of the check task
         * @param check_parents whether to check parents and eligibility or not
         */
        check_file(file: Gio.File, priority: number, check_parents: boolean): void;

        /**
         * Returns the {@link TrackerMiner.DataProvider} implementation, which is being used
         * to supply {@link Gio.File} and {@link Gio.FileInfo} content to Tracker.
         * @returns The {@link TrackerMiner.DataProvider} supplying content
         */
        get_data_provider(): DataProvider;

        /**
         * Returns the {@link TrackerMiner.IndexingTree} which determines
         * what files/directories are indexed by `fs`
         * @returns The {@link TrackerMiner.IndexingTree}          holding the indexing configuration
         */
        get_indexing_tree(): IndexingTree;

        /**
         * Gets the current throttle value, see
         * `tracker_miner_fs_set_throttle()` for more details.
         * @returns a double representing a value between 0.0 and 1.0.
         */
        get_throttle(): number;

        /**
         * If the item exists in the store, this function retrieves
         * the URN for a {@link Gio.File} being currently processed.
         * 
         * If `file` is not being currently processed by `fs`, or doesn't
         * exist in the store yet, `null` will be returned.
         * @param file a {@link Gio.File} obtained in {@link TrackerMiner.MinerFS.SignalSignatures.process_file | TrackerMiner.MinerFS::process-file}
         * @returns The URN containing the data associated to `file`,          or `null`.
         */
        get_urn(file: Gio.File): (string | null);

        /**
         * The `fs` keeps many priority queus for content it is processing.
         * This function returns `true` if the sum of all (or any) priority
         * queues is more than 0. This includes items deleted, created,
         * updated, moved or being written back.
         * @returns `true` if there are items to process in the internal queues, otherwise `false`.
         */
        has_items_to_process(): boolean;

        /**
         * Notifies `fs` that all processing on `file` has been finished, if any error
         * happened during file data processing, it should be passed in `error`, else
         * `sparql` should contain correct SPARQL representing the operation in
         * particular.
         * 
         * This function is expected to be called in reaction to all {@link TrackerMiner.MinerFS}
         * signals
         * @param task a {@link Gio.Task} obtained in a {@link TrackerMiner.MinerFS} signal/vmethod
         * @param sparql Resulting sparql for the given operation, or `null` if   there is an error
         * @param error a {@link GLib.Error} with the error that happened during processing, or `null`.
         */
        notify_finish(task: Gio.Task, sparql: (string | null), error: GLib.Error): void;

        /**
         * If the item exists in the store, this function retrieves
         * the URN of the given {@link Gio.File}
         * 
         * If `file` doesn't exist in the store yet, `null` will be returned.
         * @param file a {@link Gio.File}
         * @returns A newly allocated string with the URN containing the data associated          to `file`, or `null`.
         */
        query_urn(file: Gio.File): string;

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


    namespace MinerOnline {
        // Signal signatures
        interface SignalSignatures extends Miner.SignalSignatures {
            /**
             * the ::connected signal is emitted when a specific `type` of
             * network becomes connected.
             * 
             * Return values of `TRUE` from this signal indicate whether a
             * {@link TrackerMiner.Miner} should resume indexing or not upon ::connected.
             * @signal
             * @since 0.18
             * @run-last
             */
            connected: (arg0: unknown) => (boolean | void);
            /**
             * the ::disconnected signal is emitted when a specific `type` of
             * network becomes disconnected.
             * @signal
             * @since 0.18
             * @run-last
             */
            disconnected: () => void;
            "notify::progress": (pspec: GObject.ParamSpec) => void;
            "notify::remaining-time": (pspec: GObject.ParamSpec) => void;
            "notify::status": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Miner.ConstructorProps, Gio.Initable.ConstructorProps {

        }
    }

    /**
     * Abstract miner object for data requiring connectivity.
     * @gir-type Class
     */
    abstract class MinerOnline extends Miner implements Gio.Initable {
        static $gtype: GObject.GType<MinerOnline>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MinerOnline.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MinerOnline.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof MinerOnline.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MinerOnline.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MinerOnline.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MinerOnline.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MinerOnline.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MinerOnline.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param network 
         * @virtual
         */
        vfunc_connected(network: NetworkType): boolean;

        /**
         * @virtual
         */
        vfunc_disconnected(): void;

        // Methods
        /**
         * Get the type of network this data `miner` uses to index content.
         * @returns a {@link TrackerMiner.NetworkType} on success or #TRACKER_NETWORK_TYPE_NONE on error.
         */
        get_network_type(): NetworkType;

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


    namespace MinerProxy {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::dbus-connection": (pspec: GObject.ParamSpec) => void;
            "notify::dbus-path": (pspec: GObject.ParamSpec) => void;
            "notify::miner": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            dbus_connection: Gio.DBusConnection;
            dbusConnection: Gio.DBusConnection;
            dbus_path: string;
            dbusPath: string;
            miner: Miner;
        }
    }

    /**
     * @gir-type Class
     */
    class MinerProxy extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<MinerProxy>;

        // Properties
        /**
         * @construct-only
         */
        get dbus_connection(): Gio.DBusConnection;

        /**
         * @construct-only
         */
        get dbusConnection(): Gio.DBusConnection;

        /**
         * @construct-only
         * @default null
         */
        get dbus_path(): string;

        /**
         * @construct-only
         * @default null
         */
        get dbusPath(): string;

        /**
         * @construct-only
         */
        get miner(): Miner;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MinerProxy.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MinerProxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](miner: Miner, connection: Gio.DBusConnection, dbus_path: string, cancellable: (Gio.Cancellable | null)): MinerProxy;

        // Signals
        /** @signal */
        connect<K extends keyof MinerProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MinerProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MinerProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MinerProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MinerProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MinerProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

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
    type DataProviderIface = typeof DataProvider;

    /**
     * @gir-type Alias
     */
    type DecoratorClass = typeof Decorator;

    /**
     * @gir-type Alias
     */
    type DecoratorFSClass = typeof DecoratorFS;

    /**
     * @gir-type Struct
     */
    abstract class DecoratorInfo {
        static $gtype: GObject.GType<DecoratorInfo>;

        // Methods
        /**
         * Completes the task associated to this {@link TrackerMiner.DecoratorInfo}.
         * Takes ownership of `sparql`.
         * @param sparql SPARQL string
         */
        complete(sparql: string): void;

        /**
         * Completes the task associated to this {@link TrackerMiner.DecoratorInfo},
         * returning the given `error` happened during SPARQL generation.
         * @param error An error occurred during SPARQL generation
         */
        complete_error(error: GLib.Error): void;

        /**
         * A MIME¹ type is a way of describing the content type of a file or
         * set of data. An example would be 'text/plain' for a clear text
         * document or file.
         * 
         * ¹: http://en.wikipedia.org/wiki/MIME
         * @returns the MIME type for {@link TrackerMiner.DecoratorInfo} on success or `NULL` on error.
         */
        get_mimetype(): string;

        /**
         * Get the {@link Gio.Task} associated with retrieving extended metadata and
         * information for a URN in Tracker.
         * 
         * The task object's data (accessible with `g_task_get_task_data()`) is the
         * `TrackerSparqlBuilder`. Use `tracker_decorator_info_complete()` to complete
         * the task instead of using this object.
         * @returns the {@link Gio.Task} for {@link TrackerMiner.DecoratorInfo} on success or `NULL` if there is no existing {@link Gio.Task}.
         */
        get_task(): Gio.Task;

        /**
         * A URL is a Uniform Resource Locator and should be a location associated
         * with a resource in the database. For example, 'file:///tmp/foo.txt'.
         * @returns the URL for {@link TrackerMiner.DecoratorInfo} on success or `NULL` on error.
         */
        get_url(): string;

        /**
         * A URN is a Uniform Resource Name and should be a unique identifier
         * for a resource in the database.
         * @returns the URN for {@link TrackerMiner.DecoratorInfo} on success or `NULL` on error.
         */
        get_urn(): string;

        /**
         * Increases the reference count of `info` by 1.
         * @returns the same `info` passed in, or `null` on error.
         */
        ref(): DecoratorInfo;

        /**
         * Decreases the reference count of `info` by 1 and frees it when the
         * reference count reaches 0.
         */
        unref(): void;
    }


    /**
     * @gir-type Alias
     */
    type IndexingTreeClass = typeof IndexingTree;

    /**
     * @gir-type Alias
     */
    type MinerClass = typeof Miner;

    /**
     * @gir-type Alias
     */
    type MinerFSClass = typeof MinerFS;

    /**
     * @gir-type Struct
     */
    abstract class MinerFSPrivate {
        static $gtype: GObject.GType<MinerFSPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type MinerOnlineClass = typeof MinerOnline;

    /**
     * @gir-type Struct
     */
    abstract class MinerPrivate {
        static $gtype: GObject.GType<MinerPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type MinerProxyClass = typeof MinerProxy;

    namespace DataProvider {
        /**
         * Interface for implementing DataProvider.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * Creates a {@link Gio.FileEnumerator} to enumerate children at the URI
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
             * G_FILE_ATTRIBUTE_STANDARD_NAME. See `g_file_enumerate_children()` for
             * more details.
             * @param url a {@link Gio.File} to enumerate
             * @param attributes an attribute query string
             * @param flags a set of {@link TrackerMiner.DirectoryFlags}
             * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
             * @virtual
             */
            vfunc_begin(url: Gio.File, attributes: string, flags: DirectoryFlags, cancellable: (Gio.Cancellable | null)): Gio.FileEnumerator;

            /**
             * Precisely the same operation as `tracker_data_provider_begin()`
             * is performing, but asynchronously.
             * 
             * When all i/o for the operation is finished the `callback` will be
             * called with the requested information.
             * 
             * See the documentation of {@link TrackerMiner.DataProvider} for information about the
             * order of returned files.
             * 
             * In case of a partial error the callback will be called with any
             * succeeding items and no error, and on the next request the error
             * will be reported. If a request is cancelled the callback will be
             * called with {@link Gio.IOErrorEnum.CANCELLED}.
             * 
             * During an async request no other sync and async calls are allowed,
             * and will result in {@link Gio.IOErrorEnum.PENDING} errors.
             * 
             * Any outstanding i/o request with higher priority (lower numerical
             * value) will be executed before an outstanding request with lower
             * priority. Default priority is `G_PRIORITY_DEFAULT`.
             * @param url a {@link Gio.File} to enumerate
             * @param attributes an attribute query string
             * @param flags a set of {@link TrackerMiner.DirectoryFlags}
             * @param io_priority the I/O priority of the request (example: `G_PRIORITY_DEFAULT`)
             * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore
             * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
             * @virtual
             */
            vfunc_begin_async(url: Gio.File, attributes: string, flags: DirectoryFlags, io_priority: number, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

            /**
             * Finishes the asynchronous operation started with
             * `tracker_data_provider_begin_async()`.
             * @param result a {@link Gio.AsyncResult}.
             * @virtual
             */
            vfunc_begin_finish(result: Gio.AsyncResult): Gio.FileEnumerator;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    export interface DataProviderNamespace {
        $gtype: GObject.GType<DataProvider>;
        prototype: DataProvider;
    }
    /**
     * An interface to enumerate URIs and feed the data to Tracker.
     * @gir-type Interface
     */
    interface DataProvider extends GObject.Object, DataProvider.Interface {

        // Methods
        /**
         * Creates a {@link Gio.FileEnumerator} to enumerate children at the URI
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
         * G_FILE_ATTRIBUTE_STANDARD_NAME. See `g_file_enumerate_children()` for
         * more details.
         * @param url a {@link Gio.File} to enumerate
         * @param attributes an attribute query string
         * @param flags a set of {@link TrackerMiner.DirectoryFlags}
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns a {@link Gio.FileEnumerator} or `null` on failure. This must be freed with `g_object_unref()`.
         */
        begin(url: Gio.File, attributes: string, flags: DirectoryFlags, cancellable: (Gio.Cancellable | null)): Gio.FileEnumerator;

        /**
         * Precisely the same operation as `tracker_data_provider_begin()`
         * is performing, but asynchronously.
         * 
         * When all i/o for the operation is finished the `callback` will be
         * called with the requested information.
         * 
         * See the documentation of {@link TrackerMiner.DataProvider} for information about the
         * order of returned files.
         * 
         * In case of a partial error the callback will be called with any
         * succeeding items and no error, and on the next request the error
         * will be reported. If a request is cancelled the callback will be
         * called with {@link Gio.IOErrorEnum.CANCELLED}.
         * 
         * During an async request no other sync and async calls are allowed,
         * and will result in {@link Gio.IOErrorEnum.PENDING} errors.
         * 
         * Any outstanding i/o request with higher priority (lower numerical
         * value) will be executed before an outstanding request with lower
         * priority. Default priority is `G_PRIORITY_DEFAULT`.
         * @param url a {@link Gio.File} to enumerate
         * @param attributes an attribute query string
         * @param flags a set of {@link TrackerMiner.DirectoryFlags}
         * @param io_priority the I/O priority of the request (example: `G_PRIORITY_DEFAULT`)
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore
         */
        begin_async(url: Gio.File, attributes: string, flags: DirectoryFlags, io_priority: number, cancellable: (Gio.Cancellable | null)): globalThis.Promise<Gio.FileEnumerator>;

        /**
         * Precisely the same operation as `tracker_data_provider_begin()`
         * is performing, but asynchronously.
         * 
         * When all i/o for the operation is finished the `callback` will be
         * called with the requested information.
         * 
         * See the documentation of {@link TrackerMiner.DataProvider} for information about the
         * order of returned files.
         * 
         * In case of a partial error the callback will be called with any
         * succeeding items and no error, and on the next request the error
         * will be reported. If a request is cancelled the callback will be
         * called with {@link Gio.IOErrorEnum.CANCELLED}.
         * 
         * During an async request no other sync and async calls are allowed,
         * and will result in {@link Gio.IOErrorEnum.PENDING} errors.
         * 
         * Any outstanding i/o request with higher priority (lower numerical
         * value) will be executed before an outstanding request with lower
         * priority. Default priority is `G_PRIORITY_DEFAULT`.
         * @param url a {@link Gio.File} to enumerate
         * @param attributes an attribute query string
         * @param flags a set of {@link TrackerMiner.DirectoryFlags}
         * @param io_priority the I/O priority of the request (example: `G_PRIORITY_DEFAULT`)
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        begin_async(url: Gio.File, attributes: string, flags: DirectoryFlags, io_priority: number, cancellable: (Gio.Cancellable | null), callback: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * Precisely the same operation as `tracker_data_provider_begin()`
         * is performing, but asynchronously.
         * 
         * When all i/o for the operation is finished the `callback` will be
         * called with the requested information.
         * 
         * See the documentation of {@link TrackerMiner.DataProvider} for information about the
         * order of returned files.
         * 
         * In case of a partial error the callback will be called with any
         * succeeding items and no error, and on the next request the error
         * will be reported. If a request is cancelled the callback will be
         * called with {@link Gio.IOErrorEnum.CANCELLED}.
         * 
         * During an async request no other sync and async calls are allowed,
         * and will result in {@link Gio.IOErrorEnum.PENDING} errors.
         * 
         * Any outstanding i/o request with higher priority (lower numerical
         * value) will be executed before an outstanding request with lower
         * priority. Default priority is `G_PRIORITY_DEFAULT`.
         * @param url a {@link Gio.File} to enumerate
         * @param attributes an attribute query string
         * @param flags a set of {@link TrackerMiner.DirectoryFlags}
         * @param io_priority the I/O priority of the request (example: `G_PRIORITY_DEFAULT`)
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        begin_async(url: Gio.File, attributes: string, flags: DirectoryFlags, io_priority: number, cancellable: (Gio.Cancellable | null), callback?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<Gio.FileEnumerator> | void);

        /**
         * Finishes the asynchronous operation started with
         * `tracker_data_provider_begin_async()`.
         * @param result a {@link Gio.AsyncResult}.
         * @returns a {@link Gio.FileEnumerator} or `null` on failure. This must be freed with `g_object_unref()`.
         */
        begin_finish(result: Gio.AsyncResult): Gio.FileEnumerator;
    }


    export const DataProvider: DataProviderNamespace & {
        new (): DataProvider; // This allows `obj instanceof DataProvider`
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
