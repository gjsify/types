/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './ebackend-1.2-ambient.d.ts';
import './ebackend-1.2-import.d.ts';
/**
 * EBackend-1.2
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type EDataServer from '@girs/edataserver-1.2';
import type libxml2 from '@girs/libxml2-2.0';
import type Soup from '@girs/soup-3.0';
import type Json from '@girs/json-1.0';
import type Camel from '@girs/camel-1.2';

export namespace EBackend {
    /**
     * Completion codes used by #EAuthenticationSession.
     */
    enum AuthenticationSessionResult {
        /**
         * An error occurred while authenticating.
         */
        ERROR,
        /**
         * Client reported successful authentication.
         */
        SUCCESS,
        /**
         * User dismissed the authentication prompt.
         */
        DISMISSED,
    }
    /**
     * Declares whether to exclude or include locally deleted objects.
     */
    enum CacheDeletedFlag {
        /**
         * Do not include locally deleted objects
         */
        EXCLUDE_DELETED,
        /**
         * Include locally deleted objects
         */
        INCLUDE_DELETED,
    }
    /**
     * Defines the types of possible errors reported by the #ECache
     */
    enum CacheError {
        /**
         * An error was reported from the SQLite engine
         */
        ENGINE,
        /**
         * The error occurred due to an explicit constraint, like
         *    when attempting to add two objects with the same UID.
         */
        CONSTRAINT,
        /**
         * An object was not found by UID (this is
         *    different from a query that returns no results, which is not an error).
         */
        NOT_FOUND,
        /**
         * A query was invalid.
         */
        INVALID_QUERY,
        /**
         * A field requested for inclusion in summary is not supported.
         */
        UNSUPPORTED_FIELD,
        /**
         * A query was not supported.
         */
        UNSUPPORTED_QUERY,
        /**
         * An attempt was made to fetch results past the end of a the list.
         */
        END_OF_LIST,
        /**
         * An error occured while loading or creating the database.
         */
        LOAD,
        /**
         * The database file is corrupt. (Since: 3.44)
         */
        CORRUPT,
    }
    /**
     * Indicates the type of lock requested in e_cache_lock().
     */
    enum CacheLockType {
        /**
         * Obtain a lock for reading.
         */
        READ,
        /**
         * Obtain a lock for writing. This also starts a transaction.
         */
        WRITE,
    }
    /**
     * Declares whether the operation is done in online or offline.
     * This influences the offline state of the related objects.
     */
    enum CacheOfflineFlag {
        /**
         * Do not know current online/offline state
         */
        OFFLINE_UNKNOWN,
        /**
         * The operation is done in online
         */
        IS_ONLINE,
        /**
         * The operation is done in offline
         */
        IS_OFFLINE,
    }
    /**
     * Indicates what type of action to take while unlocking the cache with e_cache_unlock().
     */
    enum CacheUnlockAction {
        /**
         * Just unlock, this is appropriate for locks which were obtained with %E_CACHE_LOCK_READ.
         */
        NONE,
        /**
         * Commit any modifications which were made while the lock was held.
         */
        COMMIT,
        /**
         * Rollback any modifications which were made while the lock was held.
         */
        ROLLBACK,
    }
    /**
     * Exit codes submitted to e_dbus_server_quit() and returned by
     * e_dbus_server_run().
     */
    enum DBusServerExitCode {
        /**
         * The server's run state is unchanged.
         */
        NONE,
        /**
         * Normal termination.  The process itself may now terminate.
         */
        NORMAL,
        /**
         * The server should reload its configuration and start again.
         *   Servers that do not support reloading may wish to intercept
         *   this exit code and stop the #EDBusServer::quit-server emission.
         */
        RELOAD,
    }
    /**
     * Defines offline state of an object. Locally changed objects require
     * synchronization with their remote storage.
     */
    enum OfflineState {
        /**
         * Unknown offline state.
         */
        UNKNOWN,
        /**
         * The object if synchnized with no local changes.
         */
        SYNCED,
        /**
         * The object is locally created.
         */
        LOCALLY_CREATED,
        /**
         * The object is locally modified.
         */
        LOCALLY_MODIFIED,
        /**
         * The object is locally deleted.
         */
        LOCALLY_DELETED,
    }
    const CACHE_COLUMN_OBJECT: string;
    const CACHE_COLUMN_REVISION: string;
    const CACHE_COLUMN_STATE: string;
    const CACHE_COLUMN_UID: string;
    const CACHE_TABLE_KEYS: string;
    const CACHE_TABLE_OBJECTS: string;
    /**
     * This environment variable configures where the registry
     * server loads it's backend modules from.
     */
    const EDS_REGISTRY_MODULES: string;
    /**
     * D-Bus object path of the data source server.
     */
    const SOURCE_REGISTRY_SERVER_OBJECT_PATH: string;
    /**
     * D-Bus object path of the user prompter.
     */
    const USER_PROMPTER_SERVER_OBJECT_PATH: string;
    /**
     * Frees the `info` structure, previously allocated with e_cache_column_info_new()
     * or e_cache_column_info_copy().
     * @param info an #ECacheColumnInfo
     */
    function cache_column_info_free(info?: any | null): void;
    /**
     * Frees the `change` structure, previously allocated with e_cache_offline_change_new()
     * or e_cache_offline_change_copy().
     * @param change an #ECacheOfflineChange
     */
    function cache_offline_change_free(change?: any | null): void;
    function sqlite3_vfs_init(): void;
    interface CacheForeachFunc {
        (
            cache: Cache,
            uid: string,
            revision: string,
            object: string,
            offline_state: OfflineState,
            column_names: string[],
            column_values: string[],
        ): boolean;
    }
    interface CacheKeysForeachFunc {
        (self: CacheKeys, key: string, value: string, ref_count: number): boolean;
    }
    interface CacheSelectFunc {
        (cache: Cache, column_names: string[], column_values: string[]): boolean;
    }
    interface CacheUpdateFunc {
        (
            cache: Cache,
            uid: string,
            revision: string,
            object: string,
            offline_state: OfflineState,
            column_names: string[],
            column_values: string[],
        ): boolean;
    }
    /**
     * Flags to check whether at least one of the asked for parts is enabled.
     */
    enum CollectionBackendParts {
        /**
         * None part.
         */
        NONE,
        /**
         * Check the calendar part.
         */
        CALENDAR,
        /**
         * Check the contacts part.
         */
        CONTACTS,
        /**
         * Check the mail part.
         */
        MAIL,
        /**
         * Shortcut to have all parts checked.
         */
        ANY,
    }
    /**
     * Initial permissions for a newly-loaded data source key file.
     */
    enum SourcePermissionFlags {
        /**
         * The data source gets no initial permissions.
         */
        NONE,
        /**
         * The data source is initially writable.
         */
        WRITABLE,
        /**
         * The data source is initially removable.
         */
        REMOVABLE,
    }
    module Backend {
        // Constructor properties interface
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     */
    abstract class Backend extends GObject.Object {
        // Own properties of EBackend-1.2.Backend

        connectable: Gio.SocketConnectable;
        readonly main_context: GLib.MainContext;
        readonly mainContext: GLib.MainContext;
        online: boolean;
        source: EDataServer.Source;
        readonly user_prompter: UserPrompter;
        readonly userPrompter: UserPrompter;

        // Owm methods of EBackend-1.2.Backend

        /**
         * Asynchronously calls the e_backend_credentials_required_sync() on the `backend,`
         * to inform clients that credentials are required.
         *
         * When the operation is finished, `callback` will be called. You can then
         * call e_backend_credentials_required_finish() to get the result of the operation.
         * @param reason an #ESourceCredentialsReason, why the credentials are required
         * @param certificate_pem PEM-encoded secure connection certificate, or an empty string
         * @param certificate_errors a bit-or of #GTlsCertificateFlags for secure connection certificate
         * @param op_error a #GError with a description of the previous credentials error, or %NULL
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        credentials_required(
            reason: EDataServer.SourceCredentialsReason,
            certificate_pem: string,
            certificate_errors: Gio.TlsCertificateFlags,
            op_error?: GLib.Error | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with e_backend_credentials_required().
         *
         * If an error occurs, the function sets `error` and returns %FALSE.
         * @param result a #GAsyncResult
         * @returns %TRUE on success, %FALSE on error
         */
        credentials_required_finish(result: Gio.AsyncResult): boolean;
        /**
         * Synchronously lets the clients know that the backned requires credentials to be
         * properly opened. It's a proxy function for e_source_invoke_credentials_required_sync(),
         * where can be found more information about actual parameters meaning.
         *
         * The provided credentials are received through #EBackendClass.authenticate_sync()
         * method asynchronously.
         *
         * If an error occurs, the function sets `error` and returns %FALSE.
         * @param reason an #ESourceCredentialsReason, why the credentials are required
         * @param certificate_pem PEM-encoded secure connection certificate, or an empty string
         * @param certificate_errors a bit-or of #GTlsCertificateFlags for secure connection certificate
         * @param op_error a #GError with a description of the previous credentials error, or %NULL
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE on success, %FALSE on error
         */
        credentials_required_sync(
            reason: EDataServer.SourceCredentialsReason,
            certificate_pem: string,
            certificate_errors: Gio.TlsCertificateFlags,
            op_error?: GLib.Error | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Makes sure that the "online" property is updated, that is, if there
         * is any destination reachability test pending, it'll be done immediately
         * and the only state will be updated as well.
         * @param cancellable optional #GCancellable object, or %NULL
         */
        ensure_online_state_updated(cancellable?: Gio.Cancellable | null): void;
        /**
         * Makes sure that the associated ESource::connection-status is connected. This is
         * useful in cases when the backend can connect to the destination without invoking
         * #EBackendClass.authenticate_sync(), possibly through e_backend_schedule_authenticate().
         */
        ensure_source_status_connected(): void;
        /**
         * Provides destination server host name and port to which
         * the backend connects. This is used to determine required
         * connection point for e_backend_is_destination_reachable().
         * The `host` is a newly allocated string, which will be freed
         * with g_free(). When `backend` sets both `host` and `port,` then
         * it should return %TRUE, indicating it's a remote backend.
         * Default implementation returns %FALSE, which is treated
         * like the backend is local, no checking for server reachability
         * is possible.
         * @returns %TRUE, when it's a remote backend and provides both   @host and @port; %FALSE otherwise.
         */
        get_destination_address(): boolean;
        /**
         * Returns a #GNetworkMonitor used to check whether the backend can
         * access the remote server. The instance is owned by the `backend`.
         * @returns a #GNetworkMonitor used by the @backend
         */
        get_network_monitor(): Gio.NetworkMonitor;
        /**
         * Returns the online state of `backend:` %TRUE if `backend` is online,
         * %FALSE if offline.
         *
         * If the #EBackend:connectable property is non-%NULL, the `backend` will
         * automatically determine whether the network service should be reachable,
         * and hence whether the `backend` is #EBackend:online.  But subclasses may
         * override the online state if, for example, a connection attempt fails.
         * @returns the online state
         */
        get_online(): boolean;
        /**
         * Returns the #ESource to which `backend` is paired.
         * @returns the #ESource to which @backend is paired
         */
        get_source(): EDataServer.Source;
        /**
         * Gets an instance of #EUserPrompter, associated with this `backend`.
         *
         * The returned instance is owned by the `backend`.
         * @returns an #EUserPrompter instance
         */
        get_user_prompter(): any | null;
        /**
         * Checks whether the `backend<`!-- -->'s destination server, as returned
         * by e_backend_get_destination_address(), is reachable.
         * If the e_backend_get_destination_address() returns %FALSE, this function
         * returns %TRUE, meaning the destination is always reachable.
         * This uses #GNetworkMonitor<!-- -->'s g_network_monitor_can_reach()
         * for reachability tests.
         * @param cancellable a #GCancellable instance, or %NULL
         * @returns %TRUE, when destination server address is reachable or    the backend doesn't provide destination address; %FALSE if    the backend destination server cannot be reached currently.
         */
        is_destination_reachable(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Let's the `backend` know that it'll be shut down shortly, no client connects
         * to it anymore. The `backend` can free any resources which reference it, for
         * example the opened views.
         */
        prepare_shutdown(): void;
        /**
         * Returns the socket endpoint for the network service to which `backend`
         * is a client, or %NULL if `backend` does not use network sockets.
         *
         * The initial value of the #EBackend:connectable property is derived from
         * the #ESourceAuthentication extension of the `backend'`s #EBackend:source
         * property, if the extension is present.
         *
         * The returned #GSocketConnectable is referenced for thread-safety and
         * must be unreferenced with g_object_unref() when finished with it.
         * @returns a #GSocketConnectable, or %NULL
         */
        ref_connectable(): Gio.SocketConnectable | null;
        /**
         * Returns the #GMainContext on which event sources for `backend` are to
         * be attached.
         *
         * The returned #GMainContext is referenced for thread-safety and must be
         * unreferenced with g_main_context_unref() when finished with it.
         * @returns a #GMainContext
         */
        ref_main_context(): GLib.MainContext;
        /**
         * Schedules a new authenticate session, cancelling any previously run.
         * This is usually done automatically, when an 'authenticate' signal is
         * received for the associated #ESource. With %NULL `credentials` an attempt
         * without it is run.
         * @param credentials a credentials to use to authenticate, or %NULL
         */
        schedule_authenticate(credentials?: EDataServer.NamedParameters | null): void;
        /**
         * Asynchronously invokes e_backend_credentials_required(), but installs its
         * own callback which only prints a runtime warning on the console when
         * the call fails. The `who_calls` is a prefix of the console message.
         * This is useful when the caller just wants to start the operation
         * without having actual place where to show the operation result.
         * @param reason an #ESourceCredentialsReason, why the credentials are required
         * @param certificate_pem PEM-encoded secure connection certificate, or an empty string
         * @param certificate_errors a bit-or of #GTlsCertificateFlags for secure connection certificate
         * @param op_error a #GError with a description of the previous credentials error, or %NULL
         * @param cancellable optional #GCancellable object, or %NULL
         * @param who_calls an identification who calls this
         */
        schedule_credentials_required(
            reason: EDataServer.SourceCredentialsReason,
            certificate_pem: string,
            certificate_errors: Gio.TlsCertificateFlags,
            op_error?: GLib.Error | null,
            cancellable?: Gio.Cancellable | null,
            who_calls?: string | null,
        ): void;
        /**
         * Sets the socket endpoint for the network service to which `backend` is
         * a client.  This can be %NULL if `backend` does not use network sockets.
         *
         * The initial value of the #EBackend:connectable property is derived from
         * the #ESourceAuthentication extension of the `backend'`s #EBackend:source
         * property, if the extension is present.
         * @param connectable a #GSocketConnectable, or %NULL
         */
        set_connectable(connectable: Gio.SocketConnectable): void;
        /**
         * Sets the online state of `backend:` %TRUE if `backend` is online,
         * `FALSE` if offline.
         *
         * If the #EBackend:connectable property is non-%NULL, the `backend` will
         * automatically determine whether the network service should be reachable,
         * and hence whether the `backend` is #EBackend:online.  But subclasses may
         * override the online state if, for example, a connection attempt fails.
         * @param online the online state
         */
        set_online(online: boolean): void;
        /**
         * Initiates a user trust prompt with given `parameters`.
         *
         * When the operation is finished, `callback` will be called. You can then
         * call e_backend_trust_prompt_finish() to get the result of the operation.
         * @param parameters an #ENamedParameters with values for the trust prompt
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        trust_prompt(
            parameters: EDataServer.NamedParameters,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with e_backend_trust_prompt().
         * If an error occurred, the function will set `error` and return
         * %E_TRUST_PROMPT_RESPONSE_UNKNOWN.
         * @param result a #GAsyncResult
         * @returns an #ETrustPromptResponse what user responded Note: The function can return also %E_TRUST_PROMPT_RESPONSE_UNKNOWN,    it's on error or if user closes the trust prompt dialog with other    than the offered buttons. Usual behaviour in such case is to treat    it as a temporary reject.
         */
        trust_prompt_finish(result: Gio.AsyncResult): EDataServer.TrustPromptResponse;
        /**
         * Asks a user a trust prompt with given `parameters,` and returns what
         * user responded. This blocks until the response is delivered.
         * @param parameters an #ENamedParameters with values for the trust prompt
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns an #ETrustPromptResponse what user responded Note: The function can return also %E_TRUST_PROMPT_RESPONSE_UNKNOWN,    it's on error or if user closes the trust prompt dialog with other    than the offered buttons. Usual behaviour in such case is to treat    it as a temporary reject.
         */
        trust_prompt_sync(
            parameters: EDataServer.NamedParameters,
            cancellable?: Gio.Cancellable | null,
        ): EDataServer.TrustPromptResponse;
    }

    module BackendFactory {
        // Constructor properties interface
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     */
    abstract class BackendFactory extends EDataServer.Extension {
        // Owm methods of EBackend-1.2.BackendFactory

        /**
         * Returns a hash key which uniquely identifies `factory`.
         *
         * Since only one instance of each #EBackendFactory subclass is ever created,
         * the hash key need only be unique among subclasses, not among instances of
         * each subclass.
         * @returns a hash key which uniquely identifies @factory
         */
        get_hash_key(): string;
        /**
         * Returns the filename of the shared library for the module used
         * to load the backends provided by `factory`.
         * @returns the filename for the module associated to the @factory
         */
        get_module_filename(): string;
        /**
         * Returns a new #EBackend instance for `source`.
         * @param source an #ESource
         * @returns a new #EBackend instance for @source
         */
        new_backend(source: EDataServer.Source): Backend;
        /**
         * Returns TRUE if the `factory` wants to share the subprocess
         * for all backends provided by itself. Otherwise, returns FALSE.
         * @returns TRUE if the @factory shares the subprocess for all its          backends. Otherwise, FALSE.
         */
        share_subprocess(): boolean;
    }

    module Cache {
        // Signal callback interfaces

        interface BeforePut {
            (
                object: string,
                p0: string,
                p1: string,
                p2: CacheColumnValues,
                p3: boolean,
                p4?: Gio.Cancellable | null,
                p5?: any | null,
            ): boolean;
        }

        interface BeforeRemove {
            (object: string, p0?: Gio.Cancellable | null, p1?: any | null): boolean;
        }

        interface RevisionChanged {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     */
    abstract class Cache extends GObject.Object {
        // Owm methods of EBackend-1.2.Cache

        static error_quark(): GLib.Quark;
        /**
         * Frees a statement previously constructed with e_cache_sqlite_stmt_printf().
         * @param stmt a statement to free
         */
        static sqlite_stmt_free(stmt: string): void;

        // Owm methods of EBackend-1.2.Cache

        /**
         * Instructs the `cache` to change its revision. In case the revision
         * change is frozen with e_cache_freeze_revision_change() it notes to
         * change the revision once the revision change is fully thaw.
         */
        change_revision(): void;
        /**
         * Marks all objects as being fully synchronized with the server and
         * removes those which are marked as locally deleted.
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns Whether succeeded.
         */
        clear_offline_changes(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Checkes whether the `cache` contains an object with
         * the given `uid`.
         * @param uid a unique identifier of an object
         * @param deleted_flag one of #ECacheDeletedFlag enum
         * @returns Whether the object had been found.
         */
        contains(uid: string, deleted_flag: CacheDeletedFlag): boolean;
        /**
         * Adds every column value which is not part of the `other_columns` to it,
         * except of E_CACHE_COLUMN_UID, E_CACHE_COLUMN_REVISION, E_CACHE_COLUMN_OBJECT
         * and E_CACHE_COLUMN_STATE columns.
         *
         * This can be used within the callback of e_cache_foreach_update().
         * @param column_names column names
         * @param column_values column values
         * @param other_columns an #ECacheColumnValues to fill
         */
        copy_missing_to_column_values(
            column_names: string[],
            column_values: string[],
            other_columns: CacheColumnValues,
        ): void;
        dup_key(key: string): string;
        dup_revision(): string;
        /**
         * Erases the cache and all of its content from the disk.
         * The only valid operation after this is to free the `cache`.
         */
        erase(): void;
        /**
         * Calls `func` for each found object, which satisfies the criteria
         * for both `deleted_flag` and `where_clause`.
         *
         * Note the `func` should not call any SQLite commands, because it's invoked
         * within a SELECT statement execution.
         * @param deleted_flag one of #ECacheDeletedFlag enum
         * @param where_clause an optional SQLite WHERE clause part, or %NULL
         * @param func an #ECacheForeachFunc function to call for each object
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns Whether succeeded.
         */
        foreach(
            deleted_flag: CacheDeletedFlag,
            where_clause: string | null,
            func: CacheForeachFunc,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Calls `func` for each found object, which satisfies the criteria for both
         * `deleted_flag` and `where_clause,` letting the caller update values where
         * necessary. The return value of `func` is used to determine whether the call
         * was successful, not whether there are any changes to be saved. If anything
         * fails during the call then the all changes are reverted.
         *
         * When there are requested any changes by the `func,` this function also
         * calls e_cache_copy_missing_to_column_values() to ensure no descendant
         * column data is lost.
         * @param deleted_flag one of #ECacheDeletedFlag enum
         * @param where_clause an optional SQLite WHERE clause part, or %NULL
         * @param func an #ECacheUpdateFunc function to call for each object
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns Whether succeeded.
         */
        foreach_update(
            deleted_flag: CacheDeletedFlag,
            where_clause: string | null,
            func: CacheUpdateFunc,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Freezes automatic revision change for the `cache`. The function
         * can be called multiple times, but each such call requires its
         * pair function e_cache_thaw_revision_change() call. See also
         * e_cache_change_revision().
         */
        freeze_revision_change(): void;
        /**
         * Returns an object with the given `uid`. This function does not consider locally
         * deleted objects. The `out_revision` is set to the object revision, if not %NULL.
         * Free it with g_free() when no longer needed. Similarly the `out_other_columns`
         * contains a column name to column value strings for additional columns which had
         * been requested when calling e_cache_initialize_sync(), if not %NULL.
         * Free the returned #ECacheColumnValues with e_cache_column_values_free(), when
         * no longer needed.
         * @param uid a unique identifier of an object
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns An object with the given @uid. Free it    with g_free(), when no longer needed. Returns %NULL on error, like when    the object could not be found.
         */
        get(uid: string, cancellable?: Gio.Cancellable | null): string | null;
        get_count(deleted_flag: CacheDeletedFlag, cancellable?: Gio.Cancellable | null): number;
        get_filename(): string;
        /**
         * Reads the user `key` value as an integer.
         * @param key a key name
         * @returns The user @key value or -1 on error.
         */
        get_key_int(key: string): number;
        /**
         * The same as e_cache_get(), only considers also locally deleted objects.
         * @param uid a unique identifier of an object
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns An object with the given @uid. Free it    with g_free(), when no longer needed. Returns %NULL on error, like when    the object could not be found.
         */
        get_object_include_deleted(uid: string, cancellable?: Gio.Cancellable | null): string | null;
        /**
         * Gets a list of objects stored in the `cache,` optionally together with
         * their revisions. The uids are not returned in any particular order,
         * but the position between `out_objects` and `out_revisions` matches
         * the same object.
         *
         * Both `out_objects` and `out_revisions` contain newly allocated #GSList, which
         * should be freed with g_slist_free_full (slist, g_free); when no longer needed.
         * @param deleted_flag one of #ECacheDeletedFlag enum
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns Whether succeeded. It doesn't necessarily mean that there was    any object stored in the @cache.
         */
        get_objects(deleted_flag: CacheDeletedFlag, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Gathers the list of all offline changes being done so far.
         * The returned #GSList contains #ECacheOfflineChange structure.
         * Use e_cache_clear_offline_changes() to clear all offline
         * changes at once.
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns A newly allocated list of all    offline changes. Free it with g_slist_free_full (slist, e_cache_offline_change_free);    when no longer needed.
         */
        get_offline_changes(cancellable?: Gio.Cancellable | null): CacheOfflineChange[];
        get_offline_state(uid: string, cancellable?: Gio.Cancellable | null): OfflineState;
        get_sqlitedb(): any | null;
        /**
         * Gets a list of unique object identifiers stored in the `cache,` optionally
         * together with their revisions. The uids are not returned in any particular
         * order, but the position between `out_uids` and `out_revisions` matches
         * the same object.
         *
         * Both `out_uids` and `out_revisions` contain newly allocated #GSList, which
         * should be freed with g_slist_free_full (slist, g_free); when no longer needed.
         * @param deleted_flag one of #ECacheDeletedFlag enum
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns Whether succeeded. It doesn't necessarily mean that there was    any object stored in the @cache.
         */
        get_uids(deleted_flag: CacheDeletedFlag, cancellable?: Gio.Cancellable | null): boolean;
        get_version(): number;
        /**
         * Initializes the `cache` and opens the `filename` database.
         * This should be called by the descendant.
         *
         * The `other_columns` are added to the objects table (`E_CACHE_TABLE_OBJECTS)`.
         * Values for these columns are returned by e_cache_get()
         * and can be stored with e_cache_put().
         * @param filename a filename of an SQLite database to use
         * @param other_columns an optional    #GSList with additional columns to add to the objects table
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns Whether succeeded.
         */
        initialize_sync(
            filename: string,
            other_columns?: CacheColumnInfo[] | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        is_revision_change_frozen(): boolean;
        /**
         * Locks the `cache` thus other threads cannot use it.
         * This can be called recursively within one thread.
         * Each call should have its pair e_cache_unlock().
         * @param lock_type an #ECacheLockType
         */
        lock(lock_type: CacheLockType): void;
        /**
         * Stores an object into the cache. Depending on `offline_flag,` this update
         * the object's offline state accordingly. When the `offline_flag` is set
         * to %E_CACHE_IS_ONLINE, then it's set to #E_OFFLINE_STATE_SYNCED, like
         * to be fully synchronized with the server, regardless of its previous
         * offline state. Overwriting locally deleted object behaves like an addition
         * of a completely new object.
         * @param uid a unique identifier of an object
         * @param revision a revision of the object
         * @param object the object itself
         * @param other_columns an #ECacheColumnValues with other columns to set; can be %NULL
         * @param offline_flag one of #ECacheOfflineFlag, whether putting this object in offline
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns Whether succeeded.
         */
        put(
            uid: string,
            revision: string | null,
            object: string,
            other_columns: CacheColumnValues | null,
            offline_flag: CacheOfflineFlag,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Removes the object with the given `uid` from the `cache`. Based on the `offline_flag,`
         * it can remove also any information about locally made offline changes. Removing
         * the object with %E_CACHE_IS_OFFLINE will still remember it for later use
         * with e_cache_get_offline_changes().
         * @param uid a unique identifier of an object
         * @param offline_flag one of #ECacheOfflineFlag, whether removing the object in offline
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns Whether succeeded.
         */
        remove(uid: string, offline_flag: CacheOfflineFlag, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Removes all objects from the `cache` in one call.
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns Whether succeeded.
         */
        remove_all(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Sets a `value` of the user `key,` or deletes it, if the `value` is %NULL.
         * @param key a key name
         * @param value a value to set, or %NULL to delete the key
         * @returns Whether succeeded.
         */
        set_key(key: string, value?: string | null): boolean;
        /**
         * Sets an integer `value` for the user `key`.
         * @param key a key name
         * @param value an integer value to set
         * @returns Whether succeeded.
         */
        set_key_int(key: string, value: number): boolean;
        /**
         * Sets an offline `state` for the object identified by `uid`.
         * @param uid a unique identifier of an object
         * @param state an #EOfflineState to set
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns Whether succeeded.
         */
        set_offline_state(uid: string, state: OfflineState, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Sets the `revision` of the whole `cache`. This is not meant to be
         * used by the descendants, because the revision is updated automatically
         * when needed. The descendants can listen to "revision-changed" signal.
         * @param revision a revision to set; use %NULL to unset it
         */
        set_revision(revision?: string | null): void;
        /**
         * Sets a cache data version. This is meant to be used by the descendants.
         * The `version` should be greater than zero.
         * @param version a cache data version to set
         */
        set_version(version: number): void;
        /**
         * Executes an SQLite statement. Use e_cache_sqlite_select() for
         * SELECT statements.
         * @param sql_stmt an SQLite statement to execute
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns Whether succeeded.
         */
        sqlite_exec(sql_stmt: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Runs vacuum (compacts the database file), if needed.
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns Whether succeeded. It doesn't mean that the vacuum had been run,    only that no error happened during the call.
         */
        sqlite_maybe_vacuum(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Executes a SELECT statement `sql_stmt` and calls `func` for each row of the result.
         * Use e_cache_sqlite_exec() for statements which do not return row sets.
         * @param sql_stmt an SQLite SELECT statement to execute
         * @param func an #ECacheSelectFunc function to call for each row
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns Whether succeeded.
         */
        sqlite_select(sql_stmt: string, func: CacheSelectFunc, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Thaws automatic revision change for the `cache`. It's the pair
         * function of e_cache_freeze_revision_change().
         */
        thaw_revision_change(): void;
        /**
         * Unlocks the cache which was previouly locked with e_cache_lock().
         * The cache locked with #E_CACHE_LOCK_WRITE should use either
         * `action` #E_CACHE_UNLOCK_COMMIT or #E_CACHE_UNLOCK_ROLLBACK,
         * while the #E_CACHE_LOCK_READ should use #E_CACHE_UNLOCK_NONE `action`.
         * @param action an #ECacheUnlockAction
         */
        unlock(action: CacheUnlockAction): void;
    }

    module CacheKeys {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     */
    class CacheKeys extends GObject.Object {
        // Own properties of EBackend-1.2.CacheKeys

        /**
         * The #ECache being used for this keys table.
         */
        cache: Cache;
        /**
         * The column name for the keys.
         */
        key_column_name: string;
        /**
         * The column name for the keys.
         */
        keyColumnName: string;
        /**
         * The table name of this keys table.
         */
        table_name: string;
        /**
         * The table name of this keys table.
         */
        tableName: string;
        /**
         * The column name for the values.
         */
        value_column_name: string;
        /**
         * The column name for the values.
         */
        valueColumnName: string;

        // Constructors of EBackend-1.2.CacheKeys

        static ['new'](cache: Cache, table_name: string, key_column_name: string, value_column_name: string): CacheKeys;

        // Owm methods of EBackend-1.2.CacheKeys

        /**
         * Counts how many keys the `self` stores and set it to the `out_n_stored`.
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns Whether succeeded.
         */
        count_keys_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Calls `func` for each stored key in the `self,` providing
         * information about its value and reference count.
         * @param func an #ECacheKeysForeachFunc, which is called for each stored key
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns Whether succeeded.
         */
        foreach_sync(func: CacheKeysForeachFunc, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Gets an #ECache, with which the `self` had been created.
         * @returns an #ECache
         */
        get_cache(): Cache;
        /**
         * Gets a key column name, with which the `self` had been created.
         * @returns a key column name
         */
        get_key_column_name(): string;
        /**
         * Gets currently stored reference count for the `key`.
         * Note the reference count can be 0, which means the `key`
         * is stored forever.
         * @param key a key to get reference count for
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns Whether succeeded.
         */
        get_ref_count_sync(key: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Gets a stored value with given `key,` which had been previously put
         * into the `self` with e_cache_keys_put_sync().
         *
         * The returned string should be freed with g_free() when no longer needed.
         * @param key a key to get
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns Whether succeeded.
         */
        get_sync(key: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Gets a table name, with which the `self` had been created.
         * @returns a table name
         */
        get_table_name(): string;
        /**
         * Get a value column name, with which the `self` had been created.
         * @returns a value column name
         */
        get_value_column_name(): string;
        /**
         * Initializes table in the corresponding #ECache.
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns Whether succeeded.
         */
        init_table_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Puts the `key` and `value` into the `self`. The function adds a new or
         * replaces an existing `key,` if any such already exists in the `self`.
         * @param key a key identifier to put
         * @param value a value to put with the @key
         * @param inc_ref_counts how many refs to add, or 0 to have it stored forever
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns Whether succeeded.
         */
        put_sync(key: string, value: string, inc_ref_counts: number, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Removes all stored keys from the `self`.
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns Whether succeeded.
         */
        remove_all_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Dereferences use count of the `key` by `dec_ref_counts` and removes it
         * from the cache when the reference count reaches zero. Special case is
         * with `dec_ref_counts` is zero, in which case the key is removed regardless
         * of the current reference count.
         *
         * It's not an error when the key doesn't exist in the cache.
         * @param key a key to remove/dereference
         * @param dec_ref_counts reference counts to drop, 0 to remove it regardless of the current reference count
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns Whether succeeded.
         */
        remove_sync(key: string, dec_ref_counts: number, cancellable?: Gio.Cancellable | null): boolean;
    }

    module CacheReaper {
        // Constructor properties interface
    }

    class CacheReaper extends EDataServer.Extension {
        // Owm methods of EBackend-1.2.CacheReaper

        static type_register(type_module: GObject.TypeModule): void;

        // Owm methods of EBackend-1.2.CacheReaper

        /**
         * Let's the `cache_reaper` know about a private directory named `name,`
         * thus it won't delete it from cache or data directories. The `name`
         * is just a directory name, not a path.
         *
         * Since 3.18
         * @param name directory name
         */
        add_private_directory(name: string): void;
        /**
         * Remove private directory named `name` from the list of private
         * directories in the `cache_reaper,` previously added with
         * e_cache_reaper_add_private_directory().
         *
         * Since 3.18
         * @param name directory name
         */
        remove_private_directory(name: string): void;
    }

    module CollectionBackend {
        // Signal callback interfaces

        interface ChildAdded {
            (child_source: ServerSideSource): void;
        }

        interface ChildRemoved {
            (child_source: ServerSideSource): void;
        }

        // Constructor properties interface
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     */
    class CollectionBackend extends Backend {
        // Own properties of EBackend-1.2.CollectionBackend

        readonly proxy_resolver: Gio.ProxyResolver;
        readonly proxyResolver: Gio.ProxyResolver;
        server: SourceRegistryServer;

        // Owm methods of EBackend-1.2.CollectionBackend

        /**
         * Authenticates all enabled children sources with the given `crendetials`.
         * This is usually called when the collection source successfully used
         * the `credentials` to connect to the (possibly) remote data store, to
         * open the childern too. Already connected child sources are skipped.
         * @param credentials credentials to authenticate with
         */
        authenticate_children(credentials: EDataServer.NamedParameters): void;
        /**
         * Claims all previously used sources that have not yet been claimed by
         * e_collection_backend_new_child() and returns them in a #GList.  Note
         * that previously used sources can only be claimed once, so subsequent
         * calls to this function for `backend` will return %NULL.
         *
         * The `backend` is then expected to compare the returned list with a
         * current list of resources from a remote server, create new #ESource
         * instances as needed with e_collection_backend_new_child(), discard
         * unneeded #ESource instances with e_source_remove(), and export the
         * remaining instances with e_source_registry_server_add_source().
         *
         * The sources returned in the list are referenced for thread-safety.
         * They must each be unreferenced with g_object_unref() when finished
         * with them.  Free the returned #GList itself with g_list_free().
         *
         * An easy way to free the list properly in one step is as follows:
         *
         *
         * ```
         *   g_list_free_full (list, g_object_unref);
         * ```
         *
         * @returns a list    of previously used sources
         */
        claim_all_resources(): EDataServer.Source[] | null;
        /**
         * Asynchronously creates a server-side resource described by `source`.
         * For example, if `source` describes a new calendar, an equivalent calendar
         * is created on the server.
         *
         * It is the implementor's responsibility to examine `source` and determine
         * what the equivalent server-side resource would be.  If this cannot be
         * determined without ambiguity, the function must return an error.
         *
         * After the server-side resource is successfully created, the implementor
         * must also add an #ESource to `backend'`s #ECollectionBackend:server.  This
         * can either be done immediately or in response to some "resource created"
         * notification from the server.  The added #ESource can be `source` itself
         * or a different #ESource instance that describes the new resource.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call e_collection_backend_create_resource_finish() to get the result of
         * the operation.
         * @param source an #ESource
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        create_resource(
            source: EDataServer.Source,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with e_collection_backend_create_resource().
         *
         * If an error occurred, the function will set `error` and return %FALSE.
         * @param result a #GAsyncResult
         * @returns %TRUE on success, %FALSE on failure
         */
        create_resource_finish(result: Gio.AsyncResult): boolean;
        /**
         * Creates a server-side resource described by `source`.  For example, if
         * `source` describes a new calendar, an equivalent calendar is created on
         * the server.
         *
         * It is the implementor's responsibility to examine `source` and determine
         * what the equivalent server-side resource would be.  If this cannot be
         * determined without ambiguity, the function must return an error.
         *
         * After the server-side resource is successfully created, the implementor
         * must also add an #ESource to `backend'`s #ECollectionBackend:server.  This
         * can either be done immediately or in response to some "resource created"
         * notification from the server.  The added #ESource can be `source` itself
         * or a different #ESource instance that describes the new resource.
         *
         * If an error occurs, the function will set `error` and return %FALSE.
         * @param source an #ESource
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE on success, %FALSE on failure
         */
        create_resource_sync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously deletes a server-side resource described by `source`.
         * The `source` must be a child of `backend'`s collection #EBackend:source.
         *
         * After the server-side resource is successfully deleted, the implementor
         * must also remove `source` from the `backend'`s #ECollectionBackend:server.
         * This can either be done immediately or in response to some "resource
         * deleted" notification from the server.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call e_collection_backend_delete_resource_finish() to get the result of
         * the operation.
         * @param source an #ESource
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        delete_resource(
            source: EDataServer.Source,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with e_collection_backend_delete_resource().
         *
         * If an error occurred, the function will set `error` and return %FALSE.
         * @param result a #GAsyncResult
         * @returns %TRUE on success, %FALSE on failure
         */
        delete_resource_finish(result: Gio.AsyncResult): boolean;
        /**
         * Deletes a server-side resource described by `source`.  The `source` must
         * be a child of `backend'`s collection #EBackend:source.
         *
         * After the server-side resource is successfully deleted, the implementor
         * must also remove `source` from the `backend'`s #ECollectionBackend:server.
         * This can either be done immediately or in response to some "resource
         * deleted" notification from the server.
         *
         * If an error occurs, the function will set `error` and return %FALSE.
         * @param source an #ESource
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE on success, %FALSE on failure
         */
        delete_resource_sync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Extracts the resource ID for `child_source,` which is supposed to be a
         * stable and unique server-assigned identifier for the remote resource
         * described by `child_source`.  If `child_source` is not actually a child
         * of the collection #EBackend:source owned by `backend,` the function
         * returns %NULL.
         *
         * The returned string should be freed with g_free() when no longer needed.
         * @param child_source an #ESource managed by @backend
         * @returns a newly-allocated resource ID for @child_source,    or %NULL
         */
        dup_resource_id(child_source: EDataServer.Source): string | null;
        /**
         * Freezes populate of the backend's content. This is used to avoid calling
         * populate multiple times in parallel.
         * Every call to this function should be followed by the call
         * of e_collection_backend_thaw_populate() to reverse the effect of this function,
         * regardless of the return value of this function.
         * @returns %TRUE, when this is the first freeze call
         */
        freeze_populate(): boolean;
        /**
         * Returns the private cache directory path for `backend,` which is named
         * after the #ESource:uid of `backend'`s collection #EBackend:source.
         *
         * The cache directory is meant to store key files for backend-created
         * data sources.  See also: e_server_side_source_set_write_directory()
         * @returns the cache directory for @backend
         */
        get_cache_dir(): string;
        /**
         * Checks whether the `backend` has enabled at least of the `parts`.
         * @param parts a bit-or of #ECollectionBackendParts with parts to be checked
         * @returns %TRUE, when at least one of the @parts is enabled and    the backend's #ESource is enabled as well.
         */
        get_part_enabled(parts: CollectionBackendParts): boolean;
        get_populate_frozen(): boolean;
        /**
         * Returns whether the `source` is a newly created child or not. New sources
         * are remembered between two populate calls only.
         * @param source a child #ESource
         * @returns %TRUE, when the @source is a new child; %FALSE when    it had been known before.
         */
        is_new_source(source: EDataServer.Source): boolean;
        /**
         * Returns a list of calendar sources belonging to the data source
         * collection managed by `backend`.
         *
         * The sources returned in the list are referenced for thread-safety.
         * They must each be unreferenced with g_object_unref() when finished
         * with them.  Free the returned #GList itself with g_list_free().
         *
         * An easy way to free the list properly in one step is as follows:
         *
         *
         * ```
         *   g_list_free_full (list, g_object_unref);
         * ```
         *
         * @returns a list of calendar sources
         */
        list_calendar_sources(): EDataServer.Source[];
        /**
         * Returns a list of address book sources belonging to the data source
         * collection managed by `backend`.
         *
         * The sources returned in the list are referenced for thread-safety.
         * They must each be unreferenced with g_object_unref() when finished
         * with them.  Free the returned #GList itself with g_list_free().
         *
         * An easy way to free the list properly in one step is as follows:
         *
         *
         * ```
         *   g_list_free_full (list, g_object_unref);
         * ```
         *
         * @returns a list of address book sources
         */
        list_contacts_sources(): EDataServer.Source[];
        /**
         * Returns a list of mail sources belonging to the data source collection
         * managed by `backend`.
         *
         * The sources returned in the list are referenced for thread-safety.
         * They must each be unreferenced with g_object_unref() when finished
         * with them.  Free the returned #GList itself with g_list_free().
         *
         * An easy way to free the list properly in one step is as follows:
         *
         *
         * ```
         *   g_list_free_full (list, g_object_unref);
         * ```
         *
         * @returns a list of mail sources
         */
        list_mail_sources(): EDataServer.Source[];
        /**
         * Creates a new #EServerSideSource as a child of the collection
         * #EBackend:source owned by `backend`.  If possible, the #EServerSideSource
         * is drawn from a cache of previously used sources indexed by `resource_id`
         * so that locally cached data from previous sessions can be reused.
         *
         * The returned data source should be passed to
         * e_source_registry_server_add_source() to export it over D-Bus.
         * @param resource_id a stable and unique resource ID
         * @returns a newly-created data source
         */
        new_child(resource_id: string): EDataServer.Source;
        /**
         * Returns the #GProxyResolver for `backend` (if applicable), as indicated
         * by the #ESourceAuthentication:proxy-uid of `backend'`s #EBackend:source
         * or one of its ancestors.
         *
         * The returned #GProxyResolver is referenced for thread-safety and must
         * be unreferenced with g_object_unref() when finished with it.
         * @returns a #GProxyResolver, or %NULL
         */
        ref_proxy_resolver(): Gio.ProxyResolver | null;
        /**
         * Returns the #ESourceRegistryServer to which `backend` belongs.
         *
         * The returned #ESourceRegistryServer is referenced for thread-safety.
         * Unreference the #ESourceRegistryServer with g_object_unref() when
         * finished with it.
         * @returns the #ESourceRegistryServer for @backend
         */
        ref_server(): SourceRegistryServer;
        /**
         * Schedules a call to populate() of the `backend` on idle.
         * The function does nothing in case the `backend` is offline.
         */
        schedule_populate(): void;
        /**
         * Thaws populate of the backend's content. This is a pair function
         * for e_collection_backend_freeze_populate().
         */
        thaw_populate(): void;
    }

    module CollectionBackendFactory {
        // Constructor properties interface
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     */
    class CollectionBackendFactory extends BackendFactory {
        // Owm methods of EBackend-1.2.CollectionBackendFactory

        /**
         * Convenience function to populate a set of #ESource instances with mail
         * account information to be added to an #ECollectionBackend.  This is mainly
         * used for vendor-specific collection backends like Google or Yahoo! where
         * the host, port, and security details are known ahead of time and only
         * user-specific information needs to be filled in.
         * @param mail_account_source an #ESource to hold mail account information
         * @param mail_identity_source an #ESource to hold mail identity information
         * @param mail_transport_source an #ESource to hold mail transport information
         */
        prepare_mail(
            mail_account_source: EDataServer.Source,
            mail_identity_source: EDataServer.Source,
            mail_transport_source: EDataServer.Source,
        ): void;
    }

    module DBusServer {
        // Signal callback interfaces

        interface BusAcquired {
            (connection: Gio.DBusConnection): void;
        }

        interface BusNameAcquired {
            (connection: Gio.DBusConnection): void;
        }

        interface BusNameLost {
            (connection: Gio.DBusConnection): void;
        }

        interface QuitServer {
            (code: DBusServerExitCode): void;
        }

        interface RunServer {
            (): DBusServerExitCode;
        }

        // Constructor properties interface
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     */
    abstract class DBusServer extends GObject.Object {
        // Owm methods of EBackend-1.2.DBusServer

        /**
         * Increases the use count of `server`.
         *
         * Use this function to indicate that the server has a reason to continue
         * to run.  To cancel the hold, call e_dbus_server_release().
         */
        hold(): void;
        /**
         * This function should be called once during `server` initialization to
         * load all available library modules to extend the `server'`s functionality.
         */
        load_modules(): void;
        /**
         * Emits the #EDBusServer::quit signal with the given `code`.
         *
         * By default the `server` will quit its main loop and cause
         * e_dbus_server_run() to return `code`.
         * @param code an #EDBusServerExitCode
         */
        quit(code: DBusServerExitCode): void;
        /**
         * Decreates the use count of `server`.
         *
         * When the use count reaches zero, the server will stop running.
         *
         * Never call this function except to cancel the effect of a previous call
         * to e_dbus_server_hold().
         */
        release(): void;
        /**
         * Emits the #EDBusServer::run signal.
         *
         * By default the `server` will start its main loop and attempt to acquire
         * its well-known session bus name.  If the `server'`s main loop is already
         * running, the function will immediately return #E_DBUS_SERVER_EXIT_NONE.
         * Otherwise the function blocks until e_dbus_server_quit() is called.
         *
         * If `wait_for_client` is %TRUE, the `server` will continue running until
         * the first client connection is made instead of quitting on its own if
         * no client connection is made within the first few seconds.
         * @param wait_for_client continue running until a client connects
         * @returns the exit code passed to e_dbus_server_quit()
         */
        run(wait_for_client: boolean): DBusServerExitCode;
    }

    module DataFactory {
        // Constructor properties interface
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     */
    class DataFactory extends DBusServer {
        // Own properties of EBackend-1.2.DataFactory

        backend_per_process: number;
        backendPerProcess: number;
        readonly registry: EDataServer.SourceRegistry;
        reload_supported: boolean;
        reloadSupported: boolean;

        // Owm methods of EBackend-1.2.DataFactory

        backend_closed(backend: Backend): void;
        backend_closed_by_sender(backend: Backend, sender: string): void;
        /**
         * Returns a new and unique object path for a D-Bus interface based
         * in the data object path prefix of the `data_factory`
         * @returns a newly allocated string, representing the object path for          the D-Bus interface.
         */
        construct_path(): string;
        /**
         * Used only when backend-per-process is off.
         *
         * Free the returned pointer with g_object_unref(), if not NULL and no longer
         * needed.
         * @param backend_factory
         * @param source
         * @returns a newly-created #EBackend
         */
        create_backend(backend_factory: BackendFactory, source: EDataServer.Source): Backend | null;
        get_backend_per_process(): number;
        /**
         * Returns the #ESourceRegistry owned by `data_factory`.
         * @returns the #ESourceRegistry
         */
        get_registry(): EDataServer.SourceRegistry;
        get_reload_supported(): boolean;
        /**
         * Lists the currently opened backends.
         *
         * The sources returned in the list are referenced for thread-safety.
         * They must each be unreferenced with g_object_unref() when finished
         * with them.  Free the returned #GSList itself with g_slist_free().
         *
         * An easy way to free the list properly in one step is as follows:
         *
         *
         * ```
         *   g_slist_free_full (list, g_object_unref);
         * ```
         *
         * @returns a #GSList of #EBackend
         */
        list_opened_backends(): Backend[];
        open_backend(backend: Backend, connection: Gio.DBusConnection, cancellable?: Gio.Cancellable | null): string;
        /**
         * Returns the #EBackendFactory for "`backend_name:``extension_name"`, or
         * %NULL if no such factory is registered.
         *
         * The returned #EBackendFactory is referenced for thread-safety.
         * Unreference the #EBackendFactory with g_object_unref() when finished
         * with it.
         * @param backend_name a backend name
         * @param extension_name an extension name
         * @returns the #EBackendFactory for @hash_key,    or %NULL
         */
        ref_backend_factory(backend_name: string, extension_name: string): BackendFactory | null;
        /**
         * Spawns a new subprocess for a backend type and returns the object path
         * of the new subprocess to the client, in the way the client can talk
         * directly to the running backend. If the backend already has a subprocess
         * running, the used object path is returned to the client.
         * @param invocation a #GDBusMethodInvocation
         * @param uid an #ESource UID
         * @param extension_name an extension name
         * @param subprocess_path a path of an executable responsible for running the subprocess
         */
        spawn_subprocess_backend(
            invocation: Gio.DBusMethodInvocation,
            uid: string,
            extension_name: string,
            subprocess_path: string,
        ): void;
        use_backend_per_process(): boolean;
    }

    module FileCache {
        // Constructor properties interface
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     */
    class FileCache extends GObject.Object {
        // Own properties of EBackend-1.2.FileCache

        /**
         * The filename of the cache.
         */
        filename: string;

        // Constructors of EBackend-1.2.FileCache

        static ['new'](filename: string): FileCache;

        // Owm methods of EBackend-1.2.FileCache

        /**
         * Adds a new `key` / `value` entry to `cache`.  If an object corresponding
         * to `key` already exists in `cache,` the function returns %FALSE.
         * @param key the hash key of the object to add
         * @param value the object to add
         * @returns %TRUE if successful, %FALSE if @key already exists
         */
        add_object(key: string, value: string): boolean;
        /**
         * Clean up the cache's contents.
         * @returns %TRUE always
         */
        clean(): boolean;
        /**
         * Disables temporarily all writes to disk for `cache`.
         */
        freeze_changes(): void;
        /**
         * Gets the name of the file where the cache is being stored.
         * @returns The name of the cache.
         */
        get_filename(): string;
        /**
         * Returns a list of keys in `cache`.  The keys are owned by `cache` and must
         * not be modified or freed.  Free the returned list with g_slist_free().
         * @returns a list of keys
         */
        get_keys(): string[];
        /**
         * Returns the object corresponding to `key`.  If no such object exists
         * in `cache,` the function returns %NULL.
         * @param key the hash key of the object to find
         * @returns the object corresponding to @key
         */
        get_object(key: string): string | null;
        /**
         * Returns a list of objects in `cache`.  The objects are owned by `cache` and
         * must not be modified or freed.  Free the returned list with g_slist_free().
         * @returns a list of objects
         */
        get_objects(): string[];
        /**
         * Remove the cache from disk.
         * @returns %TRUE if successful, %FALSE if a file error occurred
         */
        remove(): boolean;
        /**
         * Removes the object corresponding to `key` from `cache`.
         * If no such object exists in `cache,` the function returns %FALSE.
         * @param key the hash key of the object to remove
         * @returns %TRUE if successful, %FALSE if @key was not found
         */
        remove_object(key: string): boolean;
        /**
         * Replaces the object corresponding to `key` with `new_value`.
         * If no such object exists in `cache,` the function returns %FALSE.
         * @param key the hash key of the object to replace
         * @param new_value the new object for @key
         * @returns %TRUE if successful, %FALSE if @key was not found
         */
        replace_object(key: string, new_value: string): boolean;
        /**
         * Reverts the affects of e_file_cache_freeze_changes().
         * Each change to `cache` is once again written to disk.
         */
        thaw_changes(): void;
    }

    module ServerSideSource {
        // Constructor properties interface
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     */
    class ServerSideSource extends EDataServer.Source {
        // Own properties of EBackend-1.2.ServerSideSource

        readonly exported: boolean;
        file: Gio.File;
        oauth2_support: OAuth2Support;
        oauth2Support: OAuth2Support;
        remote_creatable: boolean;
        remoteCreatable: boolean;
        remote_deletable: boolean;
        remoteDeletable: boolean;
        removable: boolean;
        server: SourceRegistryServer;
        writable: boolean;
        write_directory: string;
        writeDirectory: string;

        // Constructors of EBackend-1.2.ServerSideSource

        static ['new'](server: SourceRegistryServer, file?: Gio.File | null): ServerSideSource;

        static new_memory_only(server: SourceRegistryServer, uid?: string | null): ServerSideSource;

        // Owm methods of EBackend-1.2.ServerSideSource

        /**
         * Returns the directory where user-specific data source files are stored.
         */
        static get_user_dir(): string;
        /**
         * Generates a unique file name for a new user-specific data source.
         * If `uid` is non-%NULL it will be used in the basename of the file,
         * otherwise a unique basename will be generated using e_util_generate_uid().
         *
         * The returned #GFile can then be passed to e_server_side_source_new().
         * Unreference the #GFile with g_object_unref() when finished with it.
         *
         * Note the data source file itself is not created here, only its name.
         * @param uid unique identifier for a data source, or %NULL
         */
        static new_user_file(uid?: string | null): Gio.File;
        /**
         * Extracts a unique identity string from the base name of `file`.
         * If the base name of `file` is missing a '.source' extension, the
         * function sets `error` and returns %NULL.
         * @param file a #GFile for a data source
         */
        static uid_from_file(file: Gio.File): string | null;

        // Owm methods of EBackend-1.2.ServerSideSource

        /**
         * Returns whether `source` has been exported over D-Bus.
         *
         * The function returns %FALSE after `source` is initially created, %TRUE
         * after passing `source` uid to e_source_registry_server_ref_source() (provided
         * that `source'`s #ESource:parent is also exported).
         * @returns whether @source has been exported
         */
        get_exported(): boolean;
        /**
         * Returns the #GFile from which data source content is loaded and to
         * which changes are saved.  Note the `source` may not have a #GFile.
         * @returns the #GFile for @source, or %NULL
         */
        get_file(): Gio.File | null;
        /**
         * Returns the #GNode representing the `source'`s hierarchical placement,
         * or %NULL if `source` has not been placed in the data source hierarchy.
         * The data member of the #GNode points back to `source`.  This is an easy
         * way to traverse ancestor and descendant data sources.
         *
         * Note that accessing other data sources this way is not thread-safe,
         * and this therefore function may be replaced at some later date.
         * @returns a #GNode, or %NULL
         */
        get_node(): GLib.Node | null;
        /**
         * Returns the #ESourceRegistryServer to which `source` belongs.
         * @returns the #ESourceRegistryServer for @source
         */
        get_server(): SourceRegistryServer;
        /**
         * Returns the local directory path where changes to `source` are written.
         *
         * By default, changes are written to the local directory path returned by
         * e_server_side_source_get_user_dir(), but an #ECollectionBackend may wish
         * to override this to use its own private cache directory for data sources
         * it creates automatically.
         * @returns the directory where changes are written
         */
        get_write_directory(): string;
        /**
         * Reloads data source content from the file pointed to by the
         * #EServerSideSource:file property.
         *
         * If the #EServerSideSource:file property is %NULL or the file it points
         * to does not exist, the function does nothing and returns %TRUE.
         *
         * If a read error occurs or the file contains syntax errors, the function
         * sets `error` and returns %FALSE.
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE on success, %FALSE on failure
         */
        load(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Returns the object implementing the #EOAuth2SupportInterface,
         * or %NULL if `source` does not support OAuth 2.0 authentication.
         *
         * The returned #EOAuth2Support object is referenced for thread-safety.
         * Unreference the object with g_object_unref() when finished with it.
         * @returns an #EOAuth2Support object, or %NULL
         */
        ref_oauth2_support(): OAuth2Support | null;
        /**
         * Indicates whether `source` supports OAuth 2.0 authentication.
         *
         * If `oauth2`_support is non-%NULL, the OAuth2Support D-Bus interface is
         * exported at the object path for `source`.  If `oauth2`_support is %NULL,
         * the OAuth2Support D-Bus interface is unexported at the object path for
         * `source,` and any attempt by clients to call
         * e_source_get_oauth2_access_token() will fail.
         *
         * Requests for OAuth 2.0 access tokens are forwarded to `oauth2`_support,
         * which implements the #EOAuth2SupportInterface.
         * @param oauth2_support an #EOAuth2Support object, or %NULL
         */
        set_oauth2_support(oauth2_support?: OAuth2Support | null): void;
        /**
         * Indicates whether `source` can be used to create resources on a remote
         * server.  Typically this is only set to %TRUE for collection sources.
         *
         * If %TRUE, the RemoteCreatable D-Bus interface is exported at the object
         * path for `source`.  If %FALSE, the RemoteCreatable D-Bus interface is
         * unexported at the object path for `source,` and any attempt by clients
         * to call e_source_remote_create() will fail.
         *
         * Unlike the #ESource:removable and #ESource:writable properties, this
         * is enforced for both clients of the registry D-Bus service and within
         * the registry D-Bus service itself.
         * @param remote_creatable whether to export the RemoteCreatable interface
         */
        set_remote_creatable(remote_creatable: boolean): void;
        /**
         * Indicates whether `source` can be used to delete resources on a remote
         * server.  Typically this is only set to %TRUE for sources created by an
         * #ECollectionBackend to represent a remote resource.
         *
         * If %TRUE, the RemoteDeletable D-Bus interface is exported at the object
         * path for `source`.  If %FALSE, the RemoteDeletable D-Bus interface is
         * unexported at the object path for `source,` and any attempt by clients
         * to call e_source_remote_delete() will fail.
         *
         * Unlike the #ESource:removable and #ESource:writable properties, this
         * is enforced for both clients of the registry D-Bus server and within
         * the registry D-Bus service itself.
         * @param remote_deletable whether to export the RemoteDeletable interface
         */
        set_remote_deletable(remote_deletable: boolean): void;
        /**
         * Sets whether to allow registry clients to remove `source` and its
         * descendants.  If %TRUE, the Removable D-Bus interface is exported at
         * the object path for `source`.  If %FALSE, the Removable D-Bus interface
         * is unexported at the object path for `source,` and any attempt by clients
         * to call e_source_remove() will fail.
         *
         * Note this is only enforced for clients of the registry D-Bus service.
         * The service itself may remove any data source at any time.
         * @param removable whether to export the Removable interface
         */
        set_removable(removable: boolean): void;
        /**
         * Sets whether to allow registry clients to alter the content of `source`.
         * If %TRUE, the Writable D-Bus interface is exported at the object path
         * for `source`.  If %FALSE, the Writable D-Bus interface is unexported at
         * the object path for `source,` and any attempt by clients to call
         * e_source_write() will fail.
         *
         * Note this is only enforced for clients of the registry D-Bus service.
         * The service itself can write to any data source at any time.
         * @param writable whether to export the Writable interface
         */
        set_writable(writable: boolean): void;
        /**
         * Sets the local directory path where changes to `source` are to be written.
         *
         * By default, changes are written to the local directory path returned by
         * e_server_side_source_get_user_dir(), but an #ECollectionBackend may wish
         * to override this to use its own private cache directory for data sources
         * it creates automatically.
         * @param write_directory the directory where changes are to be written
         */
        set_write_directory(write_directory: string): void;
    }

    module ServerSideSourceCredentialsProvider {
        // Constructor properties interface
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     */
    class ServerSideSourceCredentialsProvider extends EDataServer.SourceCredentialsProvider {
        // Constructors of EBackend-1.2.ServerSideSourceCredentialsProvider

        static ['new'](registry: SourceRegistryServer): ServerSideSourceCredentialsProvider;
    }

    module SourceRegistryServer {
        // Signal callback interfaces

        interface FilesLoaded {
            (): void;
        }

        interface LoadError {
            (file: Gio.File, error: GLib.Error): void;
        }

        interface SourceAdded {
            (source: ServerSideSource): void;
        }

        interface SourceRemoved {
            (source: ServerSideSource): void;
        }

        interface TweakKeyFile {
            (key_file: GLib.KeyFile, uid: string): boolean;
        }

        // Constructor properties interface
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     */
    class SourceRegistryServer extends DataFactory {
        // Constructors of EBackend-1.2.SourceRegistryServer

        static ['new'](): SourceRegistryServer;

        // Owm methods of EBackend-1.2.SourceRegistryServer

        /**
         * Adds `source` to `server`.
         * @param source an #ESource
         */
        add_source(source: EDataServer.Source): void;
        /**
         * Examines `source` and its ancestors and returns the "deepest" #ESource
         * having an #ESourceExtension with the given `extension_name`.  If neither
         * `source` nor any of its ancestors have such an extension, the function
         * returns %NULL.
         *
         * This function is useful in cases when an #ESourceExtension is meant to
         * apply to both the #ESource it belongs to and the #ESource's descendants.
         *
         * A common example is the #ESourceCollection extension, where descendants
         * of an #ESource having an #ESourceCollection extension are implied to be
         * members of that collection.  In that example, this function can be used
         * to test whether `source` is a member of a collection.
         *
         * The returned #ESource is referenced for thread-safety and must be
         * unreferenced with g_object_unref() when finished with it.
         *
         * Note the function returns the #ESource containing the #ESourceExtension
         * instead of the #ESourceExtension itself because extension instances are
         * not to be referenced directly (see e_source_get_extension()).
         * @param source an #ESource
         * @param extension_name the extension name to find
         * @returns an #ESource, or %NULL if no match was found
         */
        find_extension(source: EDataServer.Source, extension_name: string): EDataServer.Source | null;
        get_oauth2_services(): EDataServer.OAuth2Services;
        /**
         * Returns a list of registered sources, sorted by display name.  If
         * `extension_name` is given, restrict the list to sources having that
         * extension name.
         *
         * The sources returned in the list are referenced for thread-safety.
         * They must each be unreferenced with g_object_unref() when finished
         * with them.  Free the returned #GList itself with g_list_free().
         *
         * An easy way to free the list properly in one step is as follows:
         *
         *
         * ```
         *   g_list_free_full (list, g_object_unref);
         * ```
         *
         * @param extension_name an extension name, or %NULL
         * @returns a sorted list of sources
         */
        list_sources(extension_name?: string | null): EDataServer.Source[];
        /**
         * Loads data source key files in `path`.  Because multiple errors can
         * occur when loading multiple files, `error` is only set if `path` can
         * not be opened.  If a key file fails to load, the error is broadcast
         * through the #ESourceRegistryServer::load-error signal.
         *
         * If the #E_SOURCE_PERMISSION_REMOVABLE flag is given, then the `server`
         * will emit signals on the D-Bus interface when key files are created or
         * deleted in `path`.
         * @param path the path to the directory to load
         * @param flags permission flags for files loaded from @path
         * @returns %TRUE if @path was successfully opened, but this          does not imply the key files were successfully loaded
         */
        load_directory(path: string, flags: SourcePermissionFlags): boolean;
        /**
         * Emits the #ESourceRegistryServer::load-error signal.
         * @param file the #GFile that failed to load
         * @param error a #GError describing the load error
         */
        load_error(file: Gio.File, error: GLib.Error): void;
        /**
         * Creates an #ESource for a native key file and adds it to `server`.
         * If an error occurs, the function returns %NULL and sets `error`.
         *
         * The returned #ESource is referenced for thread-safety.  Unreference
         * the #ESource with g_object_unref() when finished with it.
         * @param file the data source key file to load
         * @param flags initial permission flags for the data source
         * @returns the newly-added #ESource, or %NULL on error
         */
        load_file(file: Gio.File, flags: SourcePermissionFlags): EDataServer.Source | null;
        /**
         * Loads data source key files from `resource` by enumerating the children
         * at `path` and calling e_source_registry_server_load_file() on each child.
         * Because multiple errors can occur when loading multiple files, `error` is
         * only set if `path` is invalid.  If a key file fails to load, the error is
         * broadcast through the #ESourceRegistryServer::load-error signal.
         * @param resource a #GResource containing data source key files
         * @param path the path to the data source key files inside @resource
         * @param flags permission flags for files loaded from @path
         * @returns %TRUE if @path was successfully located, but this does not          imply the key files were successfully loaded
         */
        load_resource(resource: Gio.Resource, path: string, flags: SourcePermissionFlags): boolean;
        /**
         * Returns the #ECollectionBackend associated with `source,` or %NULL if
         * there is no #ECollectionBackend associated with `source`.
         *
         * An #ESource is associated with an #ECollectionBackend if the #ESource has
         * an #ESourceCollection extension, or if it is a hierarchical descendant of
         * another #ESource which has an #ESourceCollection extension.
         *
         * The returned #ECollectionBackend is referenced for thread-safety.
         * Unreference the #ECollectionBackend with g_object_unref() when finished
         * with it.
         * @param source an #ESource
         * @returns the #ECollectionBackend for @source, or %NULL
         */
        ref_backend(source: EDataServer.Source): CollectionBackend | null;
        /**
         * Returns the #ECollectionBackendFactory for `source,` if available.
         * If `source` does not have an #ESourceCollection extension, or if the
         * #ESourceCollection extension names an #ESourceBackend:backend-name for
         * which there is no corresponding #ECollectionBackendFactory, the function
         * returns %NULL.
         *
         * The returned #ECollectionBackendFactory is referenced for thread-safety.
         * Unreference the #ECollectionBackendFactory with g_object_unref() when
         * finished with it.
         * @param source an #ESource
         * @returns the #ECollectionBackendFactory for @source,    or %NULL
         */
        ref_backend_factory(source: EDataServer.Source): CollectionBackendFactory | null;
        /**
         * Returns a referenced #ESourceCredentialsProvider. Unref it with
         * g_object_unref(), when no longer needed.
         * @returns A referenced #ESourceCredentialsProvider.
         */
        ref_credentials_provider(): EDataServer.SourceCredentialsProvider;
        /**
         * Returns the default #EOAuth2Support implementation, which can be used when
         * the source doesn't have it overwritten.
         *
         * Free the returned object with g_object_unref(), when no longer needed.
         * @returns the default #EOAuth2Support,    or %NULL, when none exists
         */
        ref_oauth2_support(): OAuth2Support | null;
        /**
         * Looks up an #ESource in `server` by its unique identifier string.
         *
         * The returned #ESource is referenced for thread-safety and must be
         * unreferenced with g_object_unref() when finished with it.
         * @param uid a unique identifier string
         * @returns an #ESource, or %NULL if no match was found
         */
        ref_source(uid: string): EDataServer.Source | null;
        /**
         * Removes `source` and all of its descendants from `server`.
         * @param source an #ESource
         */
        remove_source(source: EDataServer.Source): void;
    }

    module SubprocessFactory {
        // Constructor properties interface
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     */
    class SubprocessFactory extends GObject.Object {
        // Own properties of EBackend-1.2.SubprocessFactory

        readonly registry: EDataServer.SourceRegistry;

        // Owm methods of EBackend-1.2.SubprocessFactory

        /**
         * Returns a new and unique object path for a D-Bus interface based
         * in the data object path prefix of the `subprocess_factory`
         */
        static construct_path(): string;

        // Owm methods of EBackend-1.2.SubprocessFactory

        /**
         * Calls e_backend_prepare_shutdown() for the list of used backends.
         */
        call_backends_prepare_shutdown(): void;
        /**
         * Returns a list of used backends.
         * @returns A #GList that contains a    list of used backends. The list should be freed by the caller using:    g_list_free_full (backends, g_object_unref).
         */
        get_backends_list(): Backend[];
        /**
         * Returns the #ESourceRegistry owned by `subprocess_factory`.
         * @returns the #ESourceRegistry
         */
        get_registry(): EDataServer.SourceRegistry;
        /**
         * Returns the #EBackend data D-Bus object path
         * @param connection a #GDBusConnection
         * @param uid UID of an #ESource to open
         * @param backend_factory_type_name the name of the backend factory type
         * @param module_filename the name (full-path) of the backend module to be loaded
         * @param proxy a #GDBusInterfaceSkeleton, used to communicate to the subprocess backend
         * @param cancellable a #GCancellable
         * @returns a newly allocated string that represents the #EBackend          data D-Bus object path.
         */
        open_backend(
            connection: Gio.DBusConnection,
            uid: string,
            backend_factory_type_name: string,
            module_filename: string,
            proxy: Gio.DBusInterfaceSkeleton,
            cancellable?: Gio.Cancellable | null,
        ): string;
        /**
         * Returns either a newly-created or existing #EBackend for #ESource.
         * The returned #EBackend is referenced for thread-safety and must be
         * unreferenced with g_object_unref() when finished with it.
         *
         * If the newly-created backend implements the #GInitable interface, then
         * g_initable_init() is also called on it using `cancellable` and `error`.
         *
         * The `subprocess_factory` retains a strong reference to `backend`.
         *
         * If no suitable #EBackendFactory exists, or if the #EBackend fails to
         * initialize, the function sets `error` and returns %NULL.
         * @param uid UID of an #ESource to open
         * @param backend_factory_type_name the name of the backend factory type
         * @param module_filename the name (full-path) of the backend module to be loaded
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns an #EBackend for @source, or %NULL
         */
        ref_initable_backend(
            uid: string,
            backend_factory_type_name: string,
            module_filename: string,
            cancellable?: Gio.Cancellable | null,
        ): Backend | null;
        /**
         * Installs a toggle reference on the backend, that can receive a signal to
         * shutdown once all client connections are closed.
         * @param backend an #EBackend
         * @param proxy a #GDBusInterfaceSkeleton, used to communicate to the subprocess backend
         */
        set_backend_callbacks(backend: Backend, proxy: Gio.DBusInterfaceSkeleton): void;
    }

    module UserPrompter {
        // Constructor properties interface
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     */
    class UserPrompter extends GObject.Object {
        // Constructors of EBackend-1.2.UserPrompter

        static ['new'](): UserPrompter;

        // Owm methods of EBackend-1.2.UserPrompter

        /**
         * Asynchronously prompt a user for a decision on an extension-provided dialog.
         * The caller usually provides an extension for #EUserPrompterServer, a descendant
         * of #EUserPrompterServerExtension, which registers itself as a dialog provider.
         * The extension defines `dialog_name,` same as meaning of `in_parameters;`
         * only the extension and the caller know about meaning of these.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call e_user_prompter_extension_prompt_finish() to get the result of the operation.
         * If there is no extension providing given dialog name, the operation finishes with
         * a G_IO_ERROR, G_IO_ERROR_NOT_FOUND #GError.
         * @param dialog_name name of a dialog to invoke
         * @param in_parameters optional parameters to pass to extension; can be %NULL
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        extension_prompt(
            dialog_name: string,
            in_parameters?: EDataServer.NamedParameters | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with e_user_prompter_extension_prompt().
         * Caller can provide `out_values` to get additional values provided by the extension.
         * In case the caller is not interested in additional values, it can pass %NULL `out_values`.
         * The `out_values` will be cleared first, then any values will be added there.
         * Only the caller and the extension know about meaning of the result code and
         * additional values.
         *
         * If an error occurred, the function sets `error` and returns -1. If there is
         * no extension providing given dialog name, the operation finishes with
         * a G_IO_ERROR, G_IO_ERROR_NOT_FOUND `error`.
         * @param result a #GAsyncResult
         * @param out_values Where to store values from the extension, or %NULL
         * @returns Result code of the prompt, as defined by the extension, or -1 on error.
         */
        extension_prompt_finish(result: Gio.AsyncResult, out_values?: EDataServer.NamedParameters | null): number;
        /**
         * Synchronously prompt a user for a decision on an extension-provided dialog.
         * The caller usually provides an extension for #EUserPrompterServer, a descendant
         * of #EUserPrompterServerExtension, which registers itself as a dialog provider.
         * The extension defines `dialog_name,` same as meaning of `in_parameters;`
         * only the extension and the caller know about meaning of these.
         *
         * Caller can provide `out_values` to get additional values provided by the extension.
         * In case the caller is not interested in additional values, it can pass %NULL `out_values`.
         * The `out_values` will be cleared first, then any values will be added there.
         * Only the caller and the extension know about meaning of the result code and
         * additional values.
         *
         * If an error occurred, the function sets `error` and returns -1. If there is
         * no extension providing given dialog name, the operation finishes with
         * a G_IO_ERROR, G_IO_ERROR_NOT_FOUND `error`.
         * @param dialog_name name of a dialog to invoke
         * @param in_parameters optional parameters to pass to extension; can be %NULL
         * @param out_values Where to store values from the extension, or %NULL
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns Result code of the prompt, as defined by the extension, or -1 on error.
         */
        extension_prompt_sync(
            dialog_name: string,
            in_parameters?: EDataServer.NamedParameters | null,
            out_values?: EDataServer.NamedParameters | null,
            cancellable?: Gio.Cancellable | null,
        ): number;
        /**
         * Asynchronously prompt a user for a decision.
         *
         * The `type` can be one of "info", "warning", "question" or "error", to include
         * an icon in the message prompt; anything else results in no icon in the message.
         *
         * If `button_captions` is %NULL or empty list, then only one button is shown in
         * the prompt, a "Dismiss" button.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call e_user_prompter_prompt_finish() to get the result of the operation.
         * @param type type of the prompt; can be %NULL
         * @param title window title of the prompt; can be %NULL
         * @param primary_text primary text of the prompt; can be %NULL
         * @param secondary_text secondary text of the prompt; can be %NULL
         * @param use_markup whether both texts are with markup
         * @param button_captions captions of buttons to    use in the message; can be %NULL
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        prompt(
            type: string | null,
            title: string | null,
            primary_text: string | null,
            secondary_text: string | null,
            use_markup: boolean,
            button_captions?: string[] | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with e_user_prompter_prompt().
         *
         * If an error occurred, the function sets `error` and returns -1.
         * @param result a #GAsyncResult
         * @returns 0-based index of a button being used by a user as a response,   corresponding to 'button_captions' from e_user_prompter_prompt() call.
         */
        prompt_finish(result: Gio.AsyncResult): number;
        /**
         * Prompts a user for a decision.
         *
         * The `type` can be one of "info", "warning", "question" or "error", to include
         * an icon in the message prompt; anything else results in no icon in the message.
         *
         * If `button_captions` is %NULL or empty list, then only one button is shown in
         * the prompt, a "Dismiss" button.
         *
         * If an error occurred, the function sets `error` and returns -1.
         * @param type type of the prompt; can be %NULL
         * @param title window title of the prompt; can be %NULL
         * @param primary_text primary text of the prompt; can be %NULL
         * @param secondary_text secondary text of the prompt; can be %NULL
         * @param use_markup whether both texts are with markup
         * @param button_captions captions of buttons to    use in the message; can be %NULL
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns 0-based index of a button being used by a user as a response,   corresponding to @button_captions list.
         */
        prompt_sync(
            type: string | null,
            title: string | null,
            primary_text: string | null,
            secondary_text: string | null,
            use_markup: boolean,
            button_captions?: string[] | null,
            cancellable?: Gio.Cancellable | null,
        ): number;
    }

    module UserPrompterServer {
        // Signal callback interfaces

        interface Prompt {
            (
                prompt_id: number,
                type: string | null,
                title: string | null,
                primary_text: string | null,
                secondary_text: string | null,
                use_markup: boolean,
                button_captions?: string[] | null,
            ): void;
        }

        // Constructor properties interface
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     */
    class UserPrompterServer extends DBusServer {
        // Constructors of EBackend-1.2.UserPrompterServer

        static ['new'](): UserPrompterServer;

        // Owm methods of EBackend-1.2.UserPrompterServer

        /**
         * Registers `extension` as a provider of `dialog_name` dialog. The names
         * are compared case sensitively and two extensions cannot provide
         * the same dialog. If the function succeeds, then it adds its own
         * reference on the `extension`.
         *
         * Extensions providing multiple dialogs call this function multiple
         * times, for each dialog name separately.
         * @param extension an #EUserPrompterServerExtension descendant
         * @param dialog_name name of a dialog, which the @extensions implement
         * @returns Whether properly registered @extension
         */
        register(extension: EDataServer.Extension, dialog_name: string): boolean;
        /**
         * Finishes prompt initiated by a "prompt" signal or an extension prompt.
         * The `response` for non-extension prompts is a 0-based index of a button
         * used to close the prompt.
         *
         * The `extension_values` is ignored for non-extension prompts.
         * @param prompt_id Id of a prompt, which was responded
         * @param response Response of the prompt
         * @param extension_values For extension prompts can pass extra return values
         */
        response(prompt_id: number, response: number, extension_values?: EDataServer.NamedParameters | null): void;
    }

    module UserPrompterServerExtension {
        // Constructor properties interface
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     */
    abstract class UserPrompterServerExtension extends EDataServer.Extension {
        // Owm methods of EBackend-1.2.UserPrompterServerExtension

        /**
         * Instructs extension to show dialog `dialog_name`. If it cannot be found,
         * or any error, then return %FALSE. The caller can pass optional `parameters,`
         * if `extension` uses any. Meaning of `parameters` is known only to the caller
         * and to the dialog implementor, it's not interpretted nor checked for correctness
         * in any way in #EUserPrompterServer. The only limitation of `parameters` is that
         * the array elements are strings.
         *
         * The `prompt_id` is used as an identificator of the prompt itself,
         * and is used in e_user_prompter_server_extension_response() call,
         * which finishes the prompt.
         *
         * Note: The function call should not block main loop, it should
         * just show dialog and return.
         * @param prompt_id Prompt identificator, which is used in call to e_user_prompter_server_extension_response()
         * @param dialog_name Name of a dialog to run
         * @param parameters Optional extension parameters for the dialog, as passed by a caller
         * @returns Whether dialog was found and shown.
         */
        prompt(prompt_id: number, dialog_name: string, parameters?: EDataServer.NamedParameters | null): boolean;
        /**
         * A conveniente wrapper function around e_user_prompter_server_response(),
         * which ends previous call of e_user_prompter_server_extension_prompt().
         * The `response` and `values` is known only to the caller and to the dialog implementor,
         * it's not interpretted nor checked for correctness in any way in #EUserPrompterServer.
         * The only limitation of `values` is that the array elements are strings.
         * @param prompt_id Prompt identificator
         * @param response Response of the prompt
         * @param values Additional response values, if extension defines any
         */
        response(prompt_id: number, response: number, values?: EDataServer.NamedParameters | null): void;
    }

    module WebDAVCollectionBackend {
        // Constructor properties interface
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     */
    class WebDAVCollectionBackend extends CollectionBackend {
        // Owm methods of EBackend-1.2.WebDAVCollectionBackend

        /**
         * This function is usually called in EBackend::authenticate_sync() implementation
         * of the descendant, causing discovery of CalDAV and CardDAV sources on given URLs.
         * If either of `calendar_url` and `contacts_url` is %NULL, that that part is skipped.
         * The `calendar_url` covers all calendars, memo lists and task lists.
         *
         * The function also takes care of e_collection_backend_authenticate_children() on success.
         * @param calendar_url a URL to search calendars at, or %NULL
         * @param contacts_url a URL to search contacts at, or %NULL
         * @param credentials credentials to use when running the discovery
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns an #ESourceAuthenticationResult describing whether discovery on given    addresses succeeded.
         */
        discover_sync(
            calendar_url: string | null,
            contacts_url: string | null,
            credentials: EDataServer.NamedParameters,
            cancellable?: Gio.Cancellable | null,
        ): EDataServer.SourceAuthenticationResult;
        /**
         * Verifies that the `source` is expected here and returns its resource ID,
         * which is used in call to e_collection_backend_new_child(). It returns %NULL,
         * when the `source` is not part of the backend and should be removed instead.
         * The default implementation allows all sources, which has %ESourceResource
         * extension defined.
         * @param source an #ESource
         * @returns a resource ID corresponding to @source,    or %NULL, when the @source should be removed.
         */
        get_resource_id(source: EDataServer.Source): string | null;
        is_custom_source(source: EDataServer.Source): boolean;
    }

    /**
     * Base class structure for the #EBackend class
     */
    class BackendClass {}

    /**
     * Base class structure for the #EBackendFactory class
     */
    class BackendFactoryClass {
        // Own fields of EBackend-1.2.BackendFactoryClass

        e_module: any;
        share_subprocess: boolean;
    }

    class BackendFactoryPrivate {}

    class BackendPrivate {}

    class CacheClass {}

    class CacheColumnInfo {
        // Own fields of EBackend-1.2.CacheColumnInfo

        name: string;
        type: string;
        index_name: string;

        // Constructors of EBackend-1.2.CacheColumnInfo

        constructor(
            properties?: Partial<{
                name: string;
                type: string;
                index_name: string;
            }>,
        );

        static ['new'](name: string, type: string, index_name?: string | null): CacheColumnInfo;

        // Owm methods of EBackend-1.2.CacheColumnInfo

        /**
         * Frees the `info` structure, previously allocated with e_cache_column_info_new()
         * or e_cache_column_info_copy().
         * @param info an #ECacheColumnInfo
         */
        static free(info?: any | null): void;

        // Owm methods of EBackend-1.2.CacheColumnInfo

        copy(): CacheColumnInfo | null;
    }

    class CacheColumnValues {
        // Constructors of EBackend-1.2.CacheColumnValues

        constructor(properties?: Partial<{}>);

        static ['new'](): CacheColumnValues;

        // Owm methods of EBackend-1.2.CacheColumnValues

        contains(name: string): boolean;
        copy(): CacheColumnValues;
        /**
         * Frees previously allocated `other_columns` with
         * e_cache_column_values_new() or e_cache_column_values_copy().
         */
        free(): void;
        get_size(): number;
        /**
         * Initialized the `iter,` thus the `other_columns` can be traversed
         * with g_hash_table_iter_next(). The key is a column name and
         * the value is the corresponding column value.
         * @param iter a #GHashTableIter
         */
        init_iter(iter: GLib.HashTableIter): void;
        /**
         * Looks up currently stored value for the column named `name`.
         * As the values can be %NULL one cannot distinguish between
         * a column which doesn't have stored any value and a column
         * which has stored %NULL value. Use e_cache_column_values_contains()
         * to check whether such column exitst in the `other_columns`.
         * The returned pointer is owned by `other_columns` and is valid until
         * the value is overwritten of the `other_columns` freed.
         * @param name a column name
         * @returns Stored value for the column named @name,    or %NULL, if no such column values is stored.
         */
        lookup(name: string): string | null;
        /**
         * Puts the `value` for column `name`. If contains a value for the same
         * column, then it is replaced. This creates a copy of both `name`
         * and `value`.
         * @param name a column name
         * @param value a column value
         */
        put(name: string, value?: string | null): void;
        /**
         * Removes value for the column named `name` from `other_columns`.
         * @param name a column name
         * @returns Whether such column existed and had been removed.
         */
        remove(name: string): boolean;
        /**
         * Removes all values from the `other_columns,` leaving it empty.
         */
        remove_all(): void;
        /**
         * Puts the `value` for column `name`. If contains a value for the same
         * column, then it is replaced. This creates takes ownership of both
         * the `name` and the `value`.
         * @param name a column name
         * @param value a column value
         */
        take(name: string, value?: string | null): void;
        /**
         * Puts the `value` for column `name`. If contains a value for the same
         * column, then it is replaced. This creates a copy of the `name,` but
         * takes owner ship of the `value`.
         * @param name a column name
         * @param value a column value
         */
        take_value(name: string, value?: string | null): void;
    }

    class CacheKeysClass {}

    class CacheKeysPrivate {}

    /**
     * Holds the information about offline change for one object.
     */
    class CacheOfflineChange {
        // Own fields of EBackend-1.2.CacheOfflineChange

        uid: string;
        revision: string;
        object: string;
        state: OfflineState;

        // Constructors of EBackend-1.2.CacheOfflineChange

        constructor(uid: string, revision: string | null, object: string | null, state: OfflineState);

        static ['new'](
            uid: string,
            revision: string | null,
            object: string | null,
            state: OfflineState,
        ): CacheOfflineChange;

        // Owm methods of EBackend-1.2.CacheOfflineChange

        /**
         * Frees the `change` structure, previously allocated with e_cache_offline_change_new()
         * or e_cache_offline_change_copy().
         * @param change an #ECacheOfflineChange
         */
        static free(change?: any | null): void;

        // Owm methods of EBackend-1.2.CacheOfflineChange

        copy(): CacheOfflineChange | null;
    }

    class CachePrivate {}

    class CacheReaperClass {}

    class CollectionBackendClass {}

    class CollectionBackendFactoryClass {}

    class CollectionBackendFactoryPrivate {}

    class CollectionBackendPrivate {}

    class DBusServerClass {
        // Own fields of EBackend-1.2.DBusServerClass

        bus_name: string;
        module_directory: string;
        reserved: any[];
    }

    class DBusServerPrivate {}

    class DataFactoryClass {
        // Own fields of EBackend-1.2.DataFactoryClass

        backend_factory_type: GObject.GType;
        factory_object_path: string;
        data_object_path_prefix: string;
        subprocess_object_path_prefix: string;
        subprocess_bus_name_prefix: string;
        reserved: any[];
    }

    class DataFactoryPrivate {}

    class FileCacheClass {}

    class FileCachePrivate {}

    class OAuth2SupportInterface {}

    class ServerSideSourceClass {}

    class ServerSideSourceCredentialsProviderClass {}

    class ServerSideSourceCredentialsProviderPrivate {}

    class ServerSideSourcePrivate {}

    class SourceRegistryServerClass {
        // Own fields of EBackend-1.2.SourceRegistryServerClass

        reserved: any[];
    }

    class SourceRegistryServerPrivate {}

    class SubprocessFactoryClass {}

    class SubprocessFactoryPrivate {}

    class UserPrompterClass {}

    class UserPrompterPrivate {}

    class UserPrompterServerClass {}

    class UserPrompterServerExtensionClass {}

    class UserPrompterServerExtensionPrivate {}

    class UserPrompterServerPrivate {}

    class WebDAVCollectionBackendClass {}

    class WebDAVCollectionBackendPrivate {}

    interface OAuth2Support {
        // Owm methods of EBackend-1.2.OAuth2Support

        /**
         * Asynchronously obtains the OAuth 2.0 access token for `source` along
         * with its expiry in seconds from the current time (or 0 if unknown).
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call e_oauth2_support_get_access_token_finish() to get the result of the
         * operation.
         * @param source an #ESource
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        get_access_token(
            source: EDataServer.Source,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with e_oauth2_support_get_access_token().
         *
         * Free the returned access token with g_free() when finished with it.
         * If an error occurred, the function will set `error` and return %FALSE.
         * @param result a #GAsyncResult
         * @returns %TRUE on success, %FALSE on failure
         */
        get_access_token_finish(result: Gio.AsyncResult): boolean;
        /**
         * Obtains the OAuth 2.0 access token for `source` along with its expiry
         * in seconds from the current time (or 0 if unknown).
         *
         * Free the returned access token with g_free() when finished with it.
         * If an error occurs, the function will set `error` and return %FALSE.
         * @param source an #ESource
         * @param cancellable optional #GCancellable object, or %NULL
         * @returns %TRUE on success, %FALSE on failure
         */
        get_access_token_sync(source: EDataServer.Source, cancellable: Gio.Cancellable | null): boolean;

        // Own virtual methods of EBackend-1.2.OAuth2Support

        /**
         * Asynchronously obtains the OAuth 2.0 access token for `source` along
         * with its expiry in seconds from the current time (or 0 if unknown).
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call e_oauth2_support_get_access_token_finish() to get the result of the
         * operation.
         * @param source an #ESource
         * @param cancellable optional #GCancellable object, or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        vfunc_get_access_token(
            source: EDataServer.Source,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with e_oauth2_support_get_access_token().
         *
         * Free the returned access token with g_free() when finished with it.
         * If an error occurred, the function will set `error` and return %FALSE.
         * @param result a #GAsyncResult
         */
        vfunc_get_access_token_finish(result: Gio.AsyncResult): boolean;
        /**
         * Obtains the OAuth 2.0 access token for `source` along with its expiry
         * in seconds from the current time (or 0 if unknown).
         *
         * Free the returned access token with g_free() when finished with it.
         * If an error occurs, the function will set `error` and return %FALSE.
         * @param source an #ESource
         * @param cancellable optional #GCancellable object, or %NULL
         */
        vfunc_get_access_token_sync(source: EDataServer.Source, cancellable: Gio.Cancellable | null): boolean;
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

export default EBackend;
// END
