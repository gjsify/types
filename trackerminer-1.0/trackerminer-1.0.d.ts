/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './trackerminer-1.0-ambient.d.ts';
import './trackerminer-1.0-import.d.ts';
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
    module Decorator {
        // Signal callback interfaces

        interface Finished {
            (): void;
        }

        interface ItemsAvailable {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * Abstract miner object for passive extended metadata indexing, i.e.
     * data past the basic information such as file name, size, etc.
     */
    abstract class Decorator extends Miner {
        // Own properties of TrackerMiner-1.0.Decorator

        class_names: string[];
        classNames: string[];
        commit_batch_size: number;
        commitBatchSize: number;
        data_source: string;
        dataSource: string;
        priority_rdf_types: string[];
        priorityRdfTypes: string[];

        // Own fields of TrackerMiner-1.0.Decorator

        priv: any;

        // Owm methods of TrackerMiner-1.0.Decorator

        /**
         * Gives the caller the #GQuark used to identify #TrackerDecorator errors
         * in #GError structures. The #GQuark is used as the domain for the error.
         */
        static error_quark(): GLib.Quark;

        // Owm methods of TrackerMiner-1.0.Decorator

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
         * @param callback a #GAsyncReadyCallback.
         */
        next(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
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
    }

    module DecoratorFS {
        // Constructor properties interface
    }

    /**
     * A decorator object.
     */
    abstract class DecoratorFS extends Decorator {
        // Own fields of TrackerMiner-1.0.DecoratorFS

        priv: any;

        // Owm methods of TrackerMiner-1.0.DecoratorFS

        /**
         * Prepends a file for processing.
         * @param file a #GFile to process
         * @returns the tracker:id of the element corresponding to the file
         */
        prepend_file(file: Gio.File): number;
    }

    module IndexingTree {
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
    }

    /**
     * Base object used to configure indexing within #TrackerMinerFS items.
     */
    class IndexingTree extends GObject.Object {
        // Own properties of TrackerMiner-1.0.IndexingTree

        filter_hidden: boolean;
        filterHidden: boolean;
        root: Gio.File;

        // Own fields of TrackerMiner-1.0.IndexingTree

        priv: any;

        // Constructors of TrackerMiner-1.0.IndexingTree

        static ['new'](): IndexingTree;

        static new_with_root(root: Gio.File): IndexingTree;

        // Owm methods of TrackerMiner-1.0.IndexingTree

        /**
         * Adds a directory to the indexing tree with the
         * given configuration flags.
         * @param directory #GFile pointing to a directory
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
        file_is_indexable(file: Gio.File, file_type: Gio.FileType): boolean;
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
        file_matches_filter(type: FilterType, file: Gio.File): boolean;
        /**
         * Get the default filtering policies for `tree` when indexing content.
         * Some content is black listed or white listed and the default policy
         * for that is returned here. The `filter` allows specific type of
         * policies to be returned, for example, the default policy for files
         * (#TRACKER_FILTER_FILE).
         * @param filter a #TrackerFilterType
         * @returns Either #TRACKER_FILTER_POLICY_DENY or #TRACKER_FILTER_POLICY_ALLOW.
         */
        get_default_policy(filter: FilterType): FilterPolicy;
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
        get_root(file: Gio.File): Gio.File;
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
        set_default_policy(filter: FilterType, policy: FilterPolicy): void;
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

    module Miner {
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
    }

    /**
     * Abstract miner object.
     */
    abstract class Miner extends GObject.Object {
        // Own properties of TrackerMiner-1.0.Miner

        introspection_handler: any;
        introspectionHandler: any;
        introspection_xml: string;
        introspectionXml: string;
        name: string;
        progress: number;
        remaining_time: number;
        remainingTime: number;
        status: string;

        // Owm methods of TrackerMiner-1.0.Miner

        /**
         * Gives the caller the #GQuark used to identify #TrackerMiner errors
         * in #GError structures. The #GQuark is used as the domain for the error.
         */
        static error_quark(): GLib.Quark;

        // Owm methods of TrackerMiner-1.0.Miner

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
    }

    module MinerFS {
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
    }

    /**
     * Abstract miner implementation to get data from the filesystem.
     */
    abstract class MinerFS extends Miner {
        // Own properties of TrackerMiner-1.0.MinerFS

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

        // Owm methods of TrackerMiner-1.0.MinerFS

        /**
         * Gives the caller the #GQuark used to identify #TrackerMinerFS errors
         * in #GError structures. The #GQuark is used as the domain for the error.
         */
        static error_quark(): GLib.Quark;

        // Owm methods of TrackerMiner-1.0.MinerFS

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
    }

    module MinerOnline {
        // Signal callback interfaces

        interface Connected {
            (type: NetworkType): boolean;
        }

        interface Disconnected {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * Abstract miner object for data requiring connectivity.
     */
    abstract class MinerOnline extends Miner {
        // Own properties of TrackerMiner-1.0.MinerOnline

        readonly network_type: NetworkType;
        readonly networkType: NetworkType;

        // Owm methods of TrackerMiner-1.0.MinerOnline

        /**
         * Get the type of network this data `miner` uses to index content.
         * @returns a #TrackerNetworkType on success or #TRACKER_NETWORK_TYPE_NONE on error.
         */
        get_network_type(): NetworkType;
    }

    /**
     * Virtual methods left to implement.
     */
    class DataProviderIface {}

    /**
     * An implementation that takes care of extracting extra metadata
     * specific to file types by talking to tracker-extract.
     *
     * Based on #TrackerMinerClass.
     */
    class DecoratorClass {
        // Own fields of TrackerMiner-1.0.DecoratorClass

        padding: any[];
    }

    /**
     * A class that takes care of resources on mount points added or
     * removed, this is based on #TrackerDecoratorClass.
     */
    class DecoratorFSClass {
        // Own fields of TrackerMiner-1.0.DecoratorFSClass

        padding: any[];
    }

    class DecoratorInfo {
        // Owm methods of TrackerMiner-1.0.DecoratorInfo

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

    /**
     * Virtual methods left to implement.
     */
    class EnumeratorIface {}

    /**
     * Class for the #TrackerIndexingTree.
     */
    class IndexingTreeClass {
        // Own fields of TrackerMiner-1.0.IndexingTreeClass

        padding: any[];
    }

    /**
     * Virtual methods left to implement.
     */
    class MinerClass {
        // Own fields of TrackerMiner-1.0.MinerClass

        padding: any[];
    }

    /**
     * Prototype for the abstract class, `process_file` must be implemented
     * in the deriving class in order to actually extract data.
     */
    class MinerFSClass {
        // Own fields of TrackerMiner-1.0.MinerFSClass

        padding: any[];
    }

    class MinerFSPrivate {}

    /**
     * Virtual methods that can be overridden.
     */
    class MinerOnlineClass {
        // Own fields of TrackerMiner-1.0.MinerOnlineClass

        padding: any[];
    }

    class MinerPrivate {}

    interface DataProvider {
        // Owm methods of TrackerMiner-1.0.DataProvider

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
        begin_async(
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
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        end_async(
            enumerator: Enumerator,
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the asynchronous operation started with
         * tracker_data_provider_end_async().
         * @param result a #GAsyncResult.
         * @returns %TRUE on success, otherwise %FALSE and @error is set.
         */
        end_finish(result: Gio.AsyncResult): boolean;

        // Own virtual methods of TrackerMiner-1.0.DataProvider

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

    interface Enumerator {
        // Owm methods of TrackerMiner-1.0.Enumerator

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
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        next_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the asynchronous operation started with
         * tracker_enumerator_next_async().
         * @param result a #GAsyncResult.
         * @returns Returns a #gpointer with the next item from the @enumerator, or %NULL when @error is set or the operation was cancelled in @cancellable. The data must be freed. The function to free depends on the data returned by the enumerator and the #TrackerDataProvider that created the @enumerator.
         */
        next_finish(result: Gio.AsyncResult): any | null;

        // Own virtual methods of TrackerMiner-1.0.Enumerator

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
