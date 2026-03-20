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
import type EDataServer from '@girs/edataserver-1.2';
import type libxml2 from '@girs/libxml2-2.0';
import type Soup from '@girs/soup-3.0';
import type Json from '@girs/json-1.0';
import type Camel from '@girs/camel-1.2';

export namespace EBackend {
    /**
     * EBackend-1.2
     */

    /**
     * @gir-type Enum
     */
    export namespace AuthenticationSessionResult {
        export const $gtype: GObject.GType<AuthenticationSessionResult>;
    }

    /**
     * Completion codes used by `EAuthenticationSession`.
     * @gir-type Enum
     * @since 3.6
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
     * @gir-type Enum
     * @since 3.26
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
     * Defines the types of possible errors reported by the {@link EBackend.Cache}
     * @gir-type Enum
     * @since 3.26
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
     * Indicates the type of lock requested in `e_cache_lock()`.
     * @gir-type Enum
     * @since 3.26
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
     * @gir-type Enum
     * @since 3.26
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
     * Indicates what type of action to take while unlocking the cache with `e_cache_unlock()`.
     * @gir-type Enum
     * @since 3.26
     */
    enum CacheUnlockAction {
        /**
         * Just unlock, this is appropriate for locks which were obtained with {@link EBackend.CacheLockType.READ}.
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
     * @gir-type Enum
     */
    export namespace DBusServerExitCode {
        export const $gtype: GObject.GType<DBusServerExitCode>;
    }

    /**
     * Exit codes submitted to `e_dbus_server_quit()` and returned by
     * `e_dbus_server_run()`.
     * @gir-type Enum
     * @since 3.6
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
         *   this exit code and stop the {@link EBackend.DBusServer.SignalSignatures.quit_server | EBackend.DBusServer::quit-server} emission.
         */
        RELOAD,
    }

    /**
     * @gir-type Enum
     */
    export namespace OfflineState {
        export const $gtype: GObject.GType<OfflineState>;
    }

    /**
     * Defines offline state of an object. Locally changed objects require
     * synchronization with their remote storage.
     * @gir-type Enum
     * @since 3.26
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
     * @since 3.6
     */
    const SOURCE_REGISTRY_SERVER_OBJECT_PATH: string;
    /**
     * D-Bus object path of the user prompter.
     * @since 3.8
     */
    const USER_PROMPTER_SERVER_OBJECT_PATH: string;
    /**
     * Frees the `info` structure, previously allocated with `e_cache_column_info_new()`
     * or `e_cache_column_info_copy()`.
     * @param info an {@link EBackend.CacheColumnInfo}
     * @since 3.26
     */
    function cache_column_info_free(info?: any | null): void;
    /**
     * Frees the `change` structure, previously allocated with `e_cache_offline_change_new()`
     * or `e_cache_offline_change_copy()`.
     * @param change an {@link EBackend.CacheOfflineChange}
     * @since 3.26
     */
    function cache_offline_change_free(change?: any | null): void;
    /**
     * @since 3.2
     */
    function sqlite3_vfs_init(): void;
    /**
     * @gir-type Callback
     */
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
    /**
     * @gir-type Callback
     */
    interface CacheKeysForeachFunc {
        (self: CacheKeys, key: string, value: string, ref_count: number): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface CacheSelectFunc {
        (cache: Cache, column_names: string[], column_values: string[]): boolean;
    }
    /**
     * @gir-type Callback
     */
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
     * @gir-type Flags
     */
    export namespace CollectionBackendParts {
        export const $gtype: GObject.GType<CollectionBackendParts>;
    }

    /**
     * Flags to check whether at least one of the asked for parts is enabled.
     * @gir-type Flags
     * @since 3.40
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
     * @gir-type Flags
     */
    export namespace SourcePermissionFlags {
        export const $gtype: GObject.GType<SourcePermissionFlags>;
    }

    /**
     * Initial permissions for a newly-loaded data source key file.
     * @gir-type Flags
     * @since 3.6
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

    namespace Backend {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::connectable': (pspec: GObject.ParamSpec) => void;
            'notify::main-context': (pspec: GObject.ParamSpec) => void;
            'notify::online': (pspec: GObject.ParamSpec) => void;
            'notify::source': (pspec: GObject.ParamSpec) => void;
            'notify::user-prompter': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            connectable: Gio.SocketConnectable;
            main_context: GLib.MainContext;
            mainContext: GLib.MainContext;
            online: boolean;
            source: EDataServer.Source;
            user_prompter: UserPrompter;
            userPrompter: UserPrompter;
        }
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     * @gir-type Class
     * @since 3.4
     */
    abstract class Backend extends GObject.Object {
        static $gtype: GObject.GType<Backend>;

        // Properties

        /**
         * Socket endpoint of a network service
         */
        get connectable(): Gio.SocketConnectable;
        set connectable(val: Gio.SocketConnectable);
        /**
         * The main loop context on which to attach event sources
         * @read-only
         */
        get main_context(): GLib.MainContext;
        /**
         * The main loop context on which to attach event sources
         * @read-only
         */
        get mainContext(): GLib.MainContext;
        /**
         * Whether the backend is online
         */
        get online(): boolean;
        set online(val: boolean);
        /**
         * The data source being acted upon
         * @construct-only
         */
        get source(): EDataServer.Source;
        /**
         * User prompter instance
         * @read-only
         */
        get user_prompter(): UserPrompter;
        /**
         * User prompter instance
         * @read-only
         */
        get userPrompter(): UserPrompter;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Backend.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Backend.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Backend.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Backend.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Backend.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Backend.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Backend.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Backend.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Authenticate synchronously
         * @param credentials
         * @param out_certificate_pem
         * @param out_certificate_errors
         * @param cancellable
         * @virtual
         */
        vfunc_authenticate_sync(
            credentials: EDataServer.NamedParameters,
            out_certificate_pem: string,
            out_certificate_errors: Gio.TlsCertificateFlags,
            cancellable?: Gio.Cancellable | null,
        ): EDataServer.SourceAuthenticationResult;
        /**
         * Provides destination server host name and port to which
         * the backend connects. This is used to determine required
         * connection point for `e_backend_is_destination_reachable()`.
         * The `host` is a newly allocated string, which will be freed
         * with `g_free()`. When `backend` sets both `host` and `port`, then
         * it should return `true`, indicating it's a remote backend.
         * Default implementation returns `false`, which is treated
         * like the backend is local, no checking for server reachability
         * is possible.
         * @virtual
         */
        vfunc_get_destination_address(): [boolean, string, number];
        /**
         * Let's the `backend` know that it'll be shut down shortly, no client connects
         * to it anymore. The `backend` can free any resources which reference it, for
         * example the opened views.
         * @virtual
         */
        vfunc_prepare_shutdown(): void;

        // Methods

        /**
         * Asynchronously calls the `e_backend_credentials_required_sync()` on the `backend`,
         * to inform clients that credentials are required.
         *
         * When the operation is finished, `callback` will be called. You can then
         * call `e_backend_credentials_required_finish()` to get the result of the operation.
         * @param reason an {@link EDataServer.SourceCredentialsReason}, why the credentials are required
         * @param certificate_pem PEM-encoded secure connection certificate, or an empty string
         * @param certificate_errors a bit-or of {@link Gio.TlsCertificateFlags} for secure connection certificate
         * @param op_error a {@link GLib.Error} with a description of the previous credentials error, or `null`
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         */
        credentials_required(
            reason: EDataServer.SourceCredentialsReason | null,
            certificate_pem: string,
            certificate_errors: Gio.TlsCertificateFlags | null,
            op_error?: GLib.Error | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously calls the `e_backend_credentials_required_sync()` on the `backend`,
         * to inform clients that credentials are required.
         *
         * When the operation is finished, `callback` will be called. You can then
         * call `e_backend_credentials_required_finish()` to get the result of the operation.
         * @param reason an {@link EDataServer.SourceCredentialsReason}, why the credentials are required
         * @param certificate_pem PEM-encoded secure connection certificate, or an empty string
         * @param certificate_errors a bit-or of {@link Gio.TlsCertificateFlags} for secure connection certificate
         * @param op_error a {@link GLib.Error} with a description of the previous credentials error, or `null`
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        credentials_required(
            reason: EDataServer.SourceCredentialsReason | null,
            certificate_pem: string,
            certificate_errors: Gio.TlsCertificateFlags | null,
            op_error: GLib.Error | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously calls the `e_backend_credentials_required_sync()` on the `backend`,
         * to inform clients that credentials are required.
         *
         * When the operation is finished, `callback` will be called. You can then
         * call `e_backend_credentials_required_finish()` to get the result of the operation.
         * @param reason an {@link EDataServer.SourceCredentialsReason}, why the credentials are required
         * @param certificate_pem PEM-encoded secure connection certificate, or an empty string
         * @param certificate_errors a bit-or of {@link Gio.TlsCertificateFlags} for secure connection certificate
         * @param op_error a {@link GLib.Error} with a description of the previous credentials error, or `null`
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        credentials_required(
            reason: EDataServer.SourceCredentialsReason | null,
            certificate_pem: string,
            certificate_errors: Gio.TlsCertificateFlags | null,
            op_error?: GLib.Error | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes the operation started with `e_backend_credentials_required()`.
         *
         * If an error occurs, the function sets `error` and returns `false`.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` on success, `false` on error
         */
        credentials_required_finish(result: Gio.AsyncResult): boolean;
        /**
         * Synchronously lets the clients know that the backned requires credentials to be
         * properly opened. It's a proxy function for `e_source_invoke_credentials_required_sync()`,
         * where can be found more information about actual parameters meaning.
         *
         * The provided credentials are received through {@link EBackend.BackendClass}.authenticate_sync()
         * method asynchronously.
         *
         * If an error occurs, the function sets `error` and returns `false`.
         * @param reason an {@link EDataServer.SourceCredentialsReason}, why the credentials are required
         * @param certificate_pem PEM-encoded secure connection certificate, or an empty string
         * @param certificate_errors a bit-or of {@link Gio.TlsCertificateFlags} for secure connection certificate
         * @param op_error a {@link GLib.Error} with a description of the previous credentials error, or `null`
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns `true` on success, `false` on error
         */
        credentials_required_sync(
            reason: EDataServer.SourceCredentialsReason | null,
            certificate_pem: string,
            certificate_errors: Gio.TlsCertificateFlags | null,
            op_error?: GLib.Error | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Makes sure that the "online" property is updated, that is, if there
         * is any destination reachability test pending, it'll be done immediately
         * and the only state will be updated as well.
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         */
        ensure_online_state_updated(cancellable?: Gio.Cancellable | null): void;
        /**
         * Makes sure that the associated ESource::connection-status is connected. This is
         * useful in cases when the backend can connect to the destination without invoking
         * {@link EBackend.BackendClass}.authenticate_sync(), possibly through `e_backend_schedule_authenticate()`.
         */
        ensure_source_status_connected(): void;
        /**
         * Provides destination server host name and port to which
         * the backend connects. This is used to determine required
         * connection point for `e_backend_is_destination_reachable()`.
         * The `host` is a newly allocated string, which will be freed
         * with `g_free()`. When `backend` sets both `host` and `port`, then
         * it should return `true`, indicating it's a remote backend.
         * Default implementation returns `false`, which is treated
         * like the backend is local, no checking for server reachability
         * is possible.
         * @returns `true`, when it's a remote backend and provides both   `host` and `port`; `false` otherwise.
         */
        get_destination_address(): [boolean, string, number];
        /**
         * Returns a {@link Gio.NetworkMonitor} used to check whether the backend can
         * access the remote server. The instance is owned by the `backend`.
         * @returns a {@link Gio.NetworkMonitor} used by the `backend`
         */
        get_network_monitor(): Gio.NetworkMonitor;
        /**
         * Returns the online state of `backend`: `true` if `backend` is online,
         * `false` if offline.
         *
         * If the {@link EBackend.Backend.connectable} property is non-`null`, the `backend` will
         * automatically determine whether the network service should be reachable,
         * and hence whether the `backend` is {@link EBackend.Backend.online}.  But subclasses may
         * override the online state if, for example, a connection attempt fails.
         * @returns the online state
         */
        get_online(): boolean;
        /**
         * Returns the {@link EDataServer.Source} to which `backend` is paired.
         * @returns the {@link EDataServer.Source} to which `backend` is paired
         */
        get_source(): EDataServer.Source;
        /**
         * Gets an instance of {@link EBackend.UserPrompter}, associated with this `backend`.
         *
         * The returned instance is owned by the `backend`.
         * @returns an {@link EBackend.UserPrompter} instance
         */
        get_user_prompter(): any | null;
        /**
         * Checks whether the `backend`<!-- -->'s destination server, as returned
         * by `e_backend_get_destination_address()`, is reachable.
         * If the `e_backend_get_destination_address()` returns `false`, this function
         * returns `true`, meaning the destination is always reachable.
         * This uses {@link Gio.NetworkMonitor}<!-- -->'s `g_network_monitor_can_reach()`
         * for reachability tests.
         * @param cancellable a {@link Gio.Cancellable} instance, or `null`
         * @returns `true`, when destination server address is reachable or    the backend doesn't provide destination address; `false` if    the backend destination server cannot be reached currently.
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
         * is a client, or `null` if `backend` does not use network sockets.
         *
         * The initial value of the {@link EBackend.Backend.connectable} property is derived from
         * the {@link EDataServer.SourceAuthentication} extension of the `backend`'s {@link EBackend.Backend.source}
         * property, if the extension is present.
         *
         * The returned {@link Gio.SocketConnectable} is referenced for thread-safety and
         * must be unreferenced with `g_object_unref()` when finished with it.
         * @returns a {@link Gio.SocketConnectable}, or `null`
         */
        ref_connectable(): Gio.SocketConnectable | null;
        /**
         * Returns the {@link GLib.MainContext} on which event sources for `backend` are to
         * be attached.
         *
         * The returned {@link GLib.MainContext} is referenced for thread-safety and must be
         * unreferenced with `g_main_context_unref()` when finished with it.
         * @returns a {@link GLib.MainContext}
         */
        ref_main_context(): GLib.MainContext;
        /**
         * Schedules a new authenticate session, cancelling any previously run.
         * This is usually done automatically, when an 'authenticate' signal is
         * received for the associated {@link EDataServer.Source}. With `null` `credentials` an attempt
         * without it is run.
         * @param credentials a credentials to use to authenticate, or `null`
         */
        schedule_authenticate(credentials?: EDataServer.NamedParameters | null): void;
        /**
         * Asynchronously invokes `e_backend_credentials_required()`, but installs its
         * own callback which only prints a runtime warning on the console when
         * the call fails. The `who_calls` is a prefix of the console message.
         * This is useful when the caller just wants to start the operation
         * without having actual place where to show the operation result.
         * @param reason an {@link EDataServer.SourceCredentialsReason}, why the credentials are required
         * @param certificate_pem PEM-encoded secure connection certificate, or an empty string
         * @param certificate_errors a bit-or of {@link Gio.TlsCertificateFlags} for secure connection certificate
         * @param op_error a {@link GLib.Error} with a description of the previous credentials error, or `null`
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param who_calls an identification who calls this
         */
        schedule_credentials_required(
            reason: EDataServer.SourceCredentialsReason | null,
            certificate_pem: string,
            certificate_errors: Gio.TlsCertificateFlags | null,
            op_error?: GLib.Error | null,
            cancellable?: Gio.Cancellable | null,
            who_calls?: string | null,
        ): void;
        /**
         * Sets the socket endpoint for the network service to which `backend` is
         * a client.  This can be `null` if `backend` does not use network sockets.
         *
         * The initial value of the {@link EBackend.Backend.connectable} property is derived from
         * the {@link EDataServer.SourceAuthentication} extension of the `backend`'s {@link EBackend.Backend.source}
         * property, if the extension is present.
         * @param connectable a {@link Gio.SocketConnectable}, or `null`
         */
        set_connectable(connectable: Gio.SocketConnectable): void;
        /**
         * Sets the online state of `backend`: `true` if `backend` is online,
         * `FALSE` if offline.
         *
         * If the {@link EBackend.Backend.connectable} property is non-`null`, the `backend` will
         * automatically determine whether the network service should be reachable,
         * and hence whether the `backend` is {@link EBackend.Backend.online}.  But subclasses may
         * override the online state if, for example, a connection attempt fails.
         * @param online the online state
         */
        set_online(online: boolean): void;
        /**
         * Initiates a user trust prompt with given `parameters`.
         *
         * When the operation is finished, `callback` will be called. You can then
         * call `e_backend_trust_prompt_finish()` to get the result of the operation.
         * @param parameters an {@link EDataServer.NamedParameters} with values for the trust prompt
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         */
        trust_prompt(
            parameters: EDataServer.NamedParameters,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<EDataServer.TrustPromptResponse>;
        /**
         * Initiates a user trust prompt with given `parameters`.
         *
         * When the operation is finished, `callback` will be called. You can then
         * call `e_backend_trust_prompt_finish()` to get the result of the operation.
         * @param parameters an {@link EDataServer.NamedParameters} with values for the trust prompt
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        trust_prompt(
            parameters: EDataServer.NamedParameters,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Initiates a user trust prompt with given `parameters`.
         *
         * When the operation is finished, `callback` will be called. You can then
         * call `e_backend_trust_prompt_finish()` to get the result of the operation.
         * @param parameters an {@link EDataServer.NamedParameters} with values for the trust prompt
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        trust_prompt(
            parameters: EDataServer.NamedParameters,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<EDataServer.TrustPromptResponse> | void;
        /**
         * Finishes the operation started with `e_backend_trust_prompt()`.
         * If an error occurred, the function will set `error` and return
         * {@link EDataServer.TrustPromptResponse.UNKNOWN}.
         * @param result a {@link Gio.AsyncResult}
         * @returns an {@link EDataServer.TrustPromptResponse} what user responded Note: The function can return also {@link EDataServer.TrustPromptResponse.UNKNOWN},    it's on error or if user closes the trust prompt dialog with other    than the offered buttons. Usual behaviour in such case is to treat    it as a temporary reject.
         */
        trust_prompt_finish(result: Gio.AsyncResult): EDataServer.TrustPromptResponse;
        /**
         * Asks a user a trust prompt with given `parameters`, and returns what
         * user responded. This blocks until the response is delivered.
         * @param parameters an {@link EDataServer.NamedParameters} with values for the trust prompt
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns an {@link EDataServer.TrustPromptResponse} what user responded Note: The function can return also {@link EDataServer.TrustPromptResponse.UNKNOWN},    it's on error or if user closes the trust prompt dialog with other    than the offered buttons. Usual behaviour in such case is to treat    it as a temporary reject.
         */
        trust_prompt_sync(
            parameters: EDataServer.NamedParameters,
            cancellable?: Gio.Cancellable | null,
        ): EDataServer.TrustPromptResponse;
    }

    namespace BackendFactory {
        // Signal signatures
        interface SignalSignatures extends EDataServer.Extension.SignalSignatures {
            'notify::extensible': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends EDataServer.Extension.ConstructorProps {}
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     * @gir-type Class
     * @since 3.4
     */
    abstract class BackendFactory extends EDataServer.Extension {
        static $gtype: GObject.GType<BackendFactory>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BackendFactory.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<BackendFactory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof BackendFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BackendFactory.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof BackendFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BackendFactory.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof BackendFactory.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BackendFactory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Returns a hash key which uniquely identifies `factory`.
         *
         * Since only one instance of each {@link EBackend.BackendFactory} subclass is ever created,
         * the hash key need only be unique among subclasses, not among instances of
         * each subclass.
         * @virtual
         */
        vfunc_get_hash_key(): string;
        /**
         * Returns a new {@link EBackend.Backend} instance for `source`.
         * @param source an {@link EDataServer.Source}
         * @virtual
         */
        vfunc_new_backend(source: EDataServer.Source): Backend;

        // Methods

        /**
         * Returns a hash key which uniquely identifies `factory`.
         *
         * Since only one instance of each {@link EBackend.BackendFactory} subclass is ever created,
         * the hash key need only be unique among subclasses, not among instances of
         * each subclass.
         * @returns a hash key which uniquely identifies `factory`
         */
        get_hash_key(): string;
        /**
         * Returns the filename of the shared library for the module used
         * to load the backends provided by `factory`.
         * @returns the filename for the module associated to the `factory`
         */
        get_module_filename(): string;
        /**
         * Returns a new {@link EBackend.Backend} instance for `source`.
         * @param source an {@link EDataServer.Source}
         * @returns a new {@link EBackend.Backend} instance for `source`
         */
        new_backend(source: EDataServer.Source): Backend;
        /**
         * Returns TRUE if the `factory` wants to share the subprocess
         * for all backends provided by itself. Otherwise, returns FALSE.
         * @returns TRUE if the `factory` shares the subprocess for all its          backends. Otherwise, FALSE.
         */
        share_subprocess(): boolean;
    }

    namespace Cache {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            'before-put': (
                arg0: string,
                arg1: string,
                arg2: string,
                arg3: CacheColumnValues,
                arg4: boolean,
                arg5: Gio.Cancellable | null,
                arg6: any | null,
            ) => boolean | void;
            /**
             * @signal
             * @run-last
             */
            'before-remove': (arg0: string, arg1: Gio.Cancellable | null, arg2: any | null) => boolean | void;
            /**
             * @signal
             * @run-last
             */
            'revision-changed': () => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     * @gir-type Class
     * @since 3.26
     */
    abstract class Cache extends GObject.Object {
        static $gtype: GObject.GType<Cache>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Cache.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Cache.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Cache.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cache.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Cache.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cache.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Cache.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Cache.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static error_quark(): GLib.Quark;
        /**
         * Frees a statement previously constructed with `e_cache_sqlite_stmt_printf()`.
         * @param stmt a statement to free
         */
        static sqlite_stmt_free(stmt: string): void;

        // Virtual methods

        /**
         * @param uid
         * @param revision
         * @param object
         * @param other_columns
         * @param is_replace
         * @param cancellable
         * @virtual
         */
        vfunc_before_put(
            uid: string,
            revision: string,
            object: string,
            other_columns: CacheColumnValues,
            is_replace: boolean,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * @param uid
         * @param cancellable
         * @virtual
         */
        vfunc_before_remove(uid: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * @param cancellable
         * @virtual
         */
        vfunc_clear_offline_changes_locked(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Erases the cache and all of its content from the disk.
         * The only valid operation after this is to free the `cache`.
         * @virtual
         */
        vfunc_erase(): void;
        /**
         * @param uid
         * @param revision
         * @param object
         * @param other_columns
         * @param offline_state
         * @param is_replace
         * @param cancellable
         * @virtual
         */
        vfunc_put_locked(
            uid: string,
            revision: string,
            object: string,
            other_columns: CacheColumnValues,
            offline_state: OfflineState,
            is_replace: boolean,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * @param uid
         * @param cancellable
         * @virtual
         */
        vfunc_remove_locked(uid: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * @virtual
         */
        vfunc_revision_changed(): void;

        // Methods

        /**
         * Instructs the `cache` to change its revision. In case the revision
         * change is frozen with `e_cache_freeze_revision_change()` it notes to
         * change the revision once the revision change is fully thaw.
         */
        change_revision(): void;
        /**
         * Marks all objects as being fully synchronized with the server and
         * removes those which are marked as locally deleted.
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        clear_offline_changes(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Checkes whether the `cache` contains an object with
         * the given `uid`.
         * @param uid a unique identifier of an object
         * @param deleted_flag one of {@link EBackend.CacheDeletedFlag} enum
         * @returns Whether the object had been found.
         */
        contains(uid: string, deleted_flag: CacheDeletedFlag | null): boolean;
        /**
         * Adds every column value which is not part of the `other_columns` to it,
         * except of E_CACHE_COLUMN_UID, E_CACHE_COLUMN_REVISION, E_CACHE_COLUMN_OBJECT
         * and E_CACHE_COLUMN_STATE columns.
         *
         * This can be used within the callback of `e_cache_foreach_update()`.
         * @param column_names column names
         * @param column_values column values
         * @param other_columns an {@link EBackend.CacheColumnValues} to fill
         */
        copy_missing_to_column_values(
            column_names: string[],
            column_values: string[],
            other_columns: CacheColumnValues,
        ): CacheColumnValues;
        /**
         * @param key a key name
         * @returns a value of the `key`. Free the returned string    with `g_free()`, when no longer needed.
         */
        dup_key(key: string): string;
        /**
         * @returns A revision of the whole `cache`. This is meant to be    used by the descendants. Free the returned pointer with `g_free()`, when no    longer needed.
         */
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
         * @param deleted_flag one of {@link EBackend.CacheDeletedFlag} enum
         * @param where_clause an optional SQLite WHERE clause part, or `null`
         * @param func an {@link EBackend.CacheForeachFunc} function to call for each object
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        foreach(
            deleted_flag: CacheDeletedFlag | null,
            where_clause: string | null,
            func: CacheForeachFunc,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Calls `func` for each found object, which satisfies the criteria for both
         * `deleted_flag` and `where_clause`, letting the caller update values where
         * necessary. The return value of `func` is used to determine whether the call
         * was successful, not whether there are any changes to be saved. If anything
         * fails during the call then the all changes are reverted.
         *
         * When there are requested any changes by the `func`, this function also
         * calls `e_cache_copy_missing_to_column_values()` to ensure no descendant
         * column data is lost.
         * @param deleted_flag one of {@link EBackend.CacheDeletedFlag} enum
         * @param where_clause an optional SQLite WHERE clause part, or `null`
         * @param func an {@link EBackend.CacheUpdateFunc} function to call for each object
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        foreach_update(
            deleted_flag: CacheDeletedFlag | null,
            where_clause: string | null,
            func: CacheUpdateFunc,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Freezes automatic revision change for the `cache`. The function
         * can be called multiple times, but each such call requires its
         * pair function `e_cache_thaw_revision_change()` call. See also
         * `e_cache_change_revision()`.
         */
        freeze_revision_change(): void;
        /**
         * Returns an object with the given `uid`. This function does not consider locally
         * deleted objects. The `out_revision` is set to the object revision, if not `null`.
         * Free it with `g_free()` when no longer needed. Similarly the `out_other_columns`
         * contains a column name to column value strings for additional columns which had
         * been requested when calling `e_cache_initialize_sync()`, if not `null`.
         * Free the returned {@link EBackend.CacheColumnValues} with `e_cache_column_values_free()`, when
         * no longer needed.
         * @param uid a unique identifier of an object
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns An object with the given `uid`. Free it    with `g_free()`, when no longer needed. Returns `null` on error, like when    the object could not be found.
         */
        get(uid: string, cancellable?: Gio.Cancellable | null): [string | null, string, CacheColumnValues | null];
        /**
         * @param deleted_flag one of {@link EBackend.CacheDeletedFlag} enum
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Count of objects stored in the `cache`.
         */
        get_count(deleted_flag: CacheDeletedFlag | null, cancellable?: Gio.Cancellable | null): number;
        /**
         * @returns a filename of the `cache`, with which it had been initialized.
         */
        get_filename(): string;
        /**
         * Reads the user `key` value as an integer.
         * @param key a key name
         * @returns The user `key` value or -1 on error.
         */
        get_key_int(key: string): number;
        /**
         * The same as `e_cache_get()`, only considers also locally deleted objects.
         * @param uid a unique identifier of an object
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns An object with the given `uid`. Free it    with `g_free()`, when no longer needed. Returns `null` on error, like when    the object could not be found.
         */
        get_object_include_deleted(
            uid: string,
            cancellable?: Gio.Cancellable | null,
        ): [string | null, string, CacheColumnValues | null];
        /**
         * Gets a list of objects stored in the `cache`, optionally together with
         * their revisions. The uids are not returned in any particular order,
         * but the position between `out_objects` and `out_revisions` matches
         * the same object.
         *
         * Both `out_objects` and `out_revisions` contain newly allocated {@link GLib.SList}, which
         * should be freed with g_slist_free_full (slist, g_free); when no longer needed.
         * @param deleted_flag one of {@link EBackend.CacheDeletedFlag} enum
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded. It doesn't necessarily mean that there was    any object stored in the `cache`.
         */
        get_objects(
            deleted_flag: CacheDeletedFlag | null,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, string[], string[] | null];
        /**
         * Gathers the list of all offline changes being done so far.
         * The returned {@link GLib.SList} contains {@link EBackend.CacheOfflineChange} structure.
         * Use `e_cache_clear_offline_changes()` to clear all offline
         * changes at once.
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns A newly allocated list of all    offline changes. Free it with g_slist_free_full (slist, e_cache_offline_change_free);    when no longer needed.
         */
        get_offline_changes(cancellable?: Gio.Cancellable | null): CacheOfflineChange[];
        /**
         * @param uid a unique identifier of an object
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Current offline state {@link EBackend.OfflineState} for the given object.    It returns {@link EBackend.OfflineState.UNKNOWN} when the object could not be    found or other error happened.
         */
        get_offline_state(uid: string, cancellable?: Gio.Cancellable | null): OfflineState;
        /**
         * @returns An SQLite3 database pointer. It is owned by the `cache`.
         */
        get_sqlitedb(): any | null;
        /**
         * Gets a list of unique object identifiers stored in the `cache`, optionally
         * together with their revisions. The uids are not returned in any particular
         * order, but the position between `out_uids` and `out_revisions` matches
         * the same object.
         *
         * Both `out_uids` and `out_revisions` contain newly allocated {@link GLib.SList}, which
         * should be freed with g_slist_free_full (slist, g_free); when no longer needed.
         * @param deleted_flag one of {@link EBackend.CacheDeletedFlag} enum
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded. It doesn't necessarily mean that there was    any object stored in the `cache`.
         */
        get_uids(
            deleted_flag: CacheDeletedFlag | null,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, string[], string[] | null];
        /**
         * @returns A cache data version. This is meant to be used by the descendants.
         */
        get_version(): number;
        /**
         * Initializes the `cache` and opens the `filename` database.
         * This should be called by the descendant.
         *
         * The `other_columns` are added to the objects table (`E_CACHE_TABLE_OBJECTS`).
         * Values for these columns are returned by `e_cache_get()`
         * and can be stored with `e_cache_put()`.
         * @param filename a filename of an SQLite database to use
         * @param other_columns an optional    {@link GLib.SList} with additional columns to add to the objects table
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        initialize_sync(
            filename: string,
            other_columns?: CacheColumnInfo[] | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * @returns Whether automatic revision change for the `cache`    is currently frozen.
         */
        is_revision_change_frozen(): boolean;
        /**
         * Locks the `cache` thus other threads cannot use it.
         * This can be called recursively within one thread.
         * Each call should have its pair `e_cache_unlock()`.
         * @param lock_type an {@link EBackend.CacheLockType}
         */
        lock(lock_type: CacheLockType | null): void;
        /**
         * Stores an object into the cache. Depending on `offline_flag`, this update
         * the object's offline state accordingly. When the `offline_flag` is set
         * to {@link EBackend.CacheOfflineFlag.IS_ONLINE}, then it's set to #E_OFFLINE_STATE_SYNCED, like
         * to be fully synchronized with the server, regardless of its previous
         * offline state. Overwriting locally deleted object behaves like an addition
         * of a completely new object.
         * @param uid a unique identifier of an object
         * @param revision a revision of the object
         * @param object the object itself
         * @param other_columns an {@link EBackend.CacheColumnValues} with other columns to set; can be `null`
         * @param offline_flag one of {@link EBackend.CacheOfflineFlag}, whether putting this object in offline
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        put(
            uid: string,
            revision: string | null,
            object: string,
            other_columns: CacheColumnValues | null,
            offline_flag: CacheOfflineFlag | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Removes the object with the given `uid` from the `cache`. Based on the `offline_flag`,
         * it can remove also any information about locally made offline changes. Removing
         * the object with {@link EBackend.CacheOfflineFlag.IS_OFFLINE} will still remember it for later use
         * with `e_cache_get_offline_changes()`.
         * @param uid a unique identifier of an object
         * @param offline_flag one of {@link EBackend.CacheOfflineFlag}, whether removing the object in offline
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        remove(uid: string, offline_flag: CacheOfflineFlag | null, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Removes all objects from the `cache` in one call.
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        remove_all(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Sets a `value` of the user `key`, or deletes it, if the `value` is `null`.
         * @param key a key name
         * @param value a value to set, or `null` to delete the key
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
         * @param state an {@link EBackend.OfflineState} to set
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        set_offline_state(uid: string, state: OfflineState | null, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Sets the `revision` of the whole `cache`. This is not meant to be
         * used by the descendants, because the revision is updated automatically
         * when needed. The descendants can listen to "revision-changed" signal.
         * @param revision a revision to set; use `null` to unset it
         */
        set_revision(revision?: string | null): void;
        /**
         * Sets a cache data version. This is meant to be used by the descendants.
         * The `version` should be greater than zero.
         * @param version a cache data version to set
         */
        set_version(version: number): void;
        /**
         * Executes an SQLite statement. Use `e_cache_sqlite_select()` for
         * SELECT statements.
         * @param sql_stmt an SQLite statement to execute
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        sqlite_exec(sql_stmt: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Runs vacuum (compacts the database file), if needed.
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded. It doesn't mean that the vacuum had been run,    only that no error happened during the call.
         */
        sqlite_maybe_vacuum(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Executes a SELECT statement `sql_stmt` and calls `func` for each row of the result.
         * Use `e_cache_sqlite_exec()` for statements which do not return row sets.
         * @param sql_stmt an SQLite SELECT statement to execute
         * @param func an {@link EBackend.CacheSelectFunc} function to call for each row
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        sqlite_select(sql_stmt: string, func: CacheSelectFunc, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Thaws automatic revision change for the `cache`. It's the pair
         * function of `e_cache_freeze_revision_change()`.
         */
        thaw_revision_change(): void;
        /**
         * Unlocks the cache which was previouly locked with `e_cache_lock()`.
         * The cache locked with #E_CACHE_LOCK_WRITE should use either
         * `action` #E_CACHE_UNLOCK_COMMIT or #E_CACHE_UNLOCK_ROLLBACK,
         * while the #E_CACHE_LOCK_READ should use #E_CACHE_UNLOCK_NONE `action`.
         * @param action an {@link EBackend.CacheUnlockAction}
         */
        unlock(action: CacheUnlockAction | null): void;
    }

    namespace CacheKeys {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * A signal emitted when the stored keys changed, aka when a new
             * key is added or when an existing key is removed. It's not emitted
             * when only a reference count changes for a key.
             * @signal
             * @since 3.48
             * @run-last
             */
            changed: () => void;
            'notify::cache': (pspec: GObject.ParamSpec) => void;
            'notify::key-column-name': (pspec: GObject.ParamSpec) => void;
            'notify::table-name': (pspec: GObject.ParamSpec) => void;
            'notify::value-column-name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            cache: Cache;
            key_column_name: string;
            keyColumnName: string;
            table_name: string;
            tableName: string;
            value_column_name: string;
            valueColumnName: string;
        }
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     * @gir-type Class
     * @since 3.48
     */
    class CacheKeys extends GObject.Object {
        static $gtype: GObject.GType<CacheKeys>;

        // Properties

        /**
         * The {@link EBackend.Cache} being used for this keys table.
         * @since 3.48
         * @construct-only
         */
        get cache(): Cache;
        /**
         * The column name for the keys.
         * @since 3.48
         * @construct-only
         */
        get key_column_name(): string;
        /**
         * The column name for the keys.
         * @since 3.48
         * @construct-only
         */
        get keyColumnName(): string;
        /**
         * The table name of this keys table.
         * @since 3.48
         * @construct-only
         */
        get table_name(): string;
        /**
         * The table name of this keys table.
         * @since 3.48
         * @construct-only
         */
        get tableName(): string;
        /**
         * The column name for the values.
         * @since 3.48
         * @construct-only
         */
        get value_column_name(): string;
        /**
         * The column name for the values.
         * @since 3.48
         * @construct-only
         */
        get valueColumnName(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CacheKeys.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CacheKeys.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](cache: Cache, table_name: string, key_column_name: string, value_column_name: string): CacheKeys;

        // Signals

        /** @signal */
        connect<K extends keyof CacheKeys.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CacheKeys.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CacheKeys.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CacheKeys.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CacheKeys.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CacheKeys.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_changed(): void;

        // Methods

        /**
         * Counts how many keys the `self` stores and set it to the `out_n_stored`.
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        count_keys_sync(cancellable?: Gio.Cancellable | null): [boolean, number];
        /**
         * Calls `func` for each stored key in the `self`, providing
         * information about its value and reference count.
         * @param func an {@link EBackend.CacheKeysForeachFunc}, which is called for each stored key
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        foreach_sync(func: CacheKeysForeachFunc, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Gets an {@link EBackend.Cache}, with which the `self` had been created.
         * @returns an {@link EBackend.Cache}
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
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        get_ref_count_sync(key: string, cancellable?: Gio.Cancellable | null): [boolean, number];
        /**
         * Gets a stored value with given `key`, which had been previously put
         * into the `self` with `e_cache_keys_put_sync()`.
         *
         * The returned string should be freed with `g_free()` when no longer needed.
         * @param key a key to get
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        get_sync(key: string, cancellable?: Gio.Cancellable | null): [boolean, string];
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
         * Initializes table in the corresponding {@link EBackend.Cache}.
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        init_table_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Puts the `key` and `value` into the `self`. The function adds a new or
         * replaces an existing `key`, if any such already exists in the `self`.
         * @param key a key identifier to put
         * @param value a value to put with the `key`
         * @param inc_ref_counts how many refs to add, or 0 to have it stored forever
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        put_sync(key: string, value: string, inc_ref_counts: number, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Removes all stored keys from the `self`.
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
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
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns Whether succeeded.
         */
        remove_sync(key: string, dec_ref_counts: number, cancellable?: Gio.Cancellable | null): boolean;
    }

    namespace CacheReaper {
        // Signal signatures
        interface SignalSignatures extends EDataServer.Extension.SignalSignatures {
            'notify::extensible': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends EDataServer.Extension.ConstructorProps, EDataServer.Extensible.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class CacheReaper extends EDataServer.Extension implements EDataServer.Extensible {
        static $gtype: GObject.GType<CacheReaper>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CacheReaper.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CacheReaper.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof CacheReaper.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CacheReaper.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CacheReaper.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CacheReaper.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CacheReaper.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CacheReaper.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param type_module
         */
        static type_register(type_module: GObject.TypeModule): void;

        // Methods

        /**
         * Let's the `cache_reaper` know about a private directory named `name`,
         * thus it won't delete it from cache or data directories. The `name`
         * is just a directory name, not a path.
         *
         * Since 3.18
         * @param name directory name
         */
        add_private_directory(name: string): void;
        /**
         * Remove private directory named `name` from the list of private
         * directories in the `cache_reaper`, previously added with
         * `e_cache_reaper_add_private_directory()`.
         *
         * Since 3.18
         * @param name directory name
         */
        remove_private_directory(name: string): void;
        /**
         * Returns a list of {@link EDataServer.Extension} objects bound to `extensible` whose
         * types are ancestors of `extension_type`.  For a complete list of
         * extension objects bound to `extensible`, pass `E_TYPE_EXTENSION`.
         *
         * The list itself should be freed with `g_list_free()`.  The extension
         * objects are owned by `extensible` and should not be unreferenced.
         * @param extension_type the type of extensions to list
         * @returns a list of extension objects derived from `extension_type`
         */
        list_extensions(extension_type: GObject.GType): EDataServer.Extension[];
        /**
         * Creates an instance of all instantiable subtypes of {@link EDataServer.Extension} which
         * target the class of `extensible`.  The lifetimes of these newly created
         * {@link EDataServer.Extension} objects are bound to `extensible` such that they are finalized
         * when `extensible` is finalized.
         */
        load_extensions(): void;
        /**
         * Similar to `e_extensible_load_extensions()`, only loads newly discovered
         * extensions again. This can help in case a new module had been loaded
         * to the process, which provides the extensions for the `extensible`.
         */
        reload_extensions(): void;
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

    namespace CollectionBackend {
        // Signal signatures
        interface SignalSignatures extends Backend.SignalSignatures {
            /**
             * Emitted when an {@link EBackend.ServerSideSource} is added to `backend`'s
             * {@link EBackend.CollectionBackend.server} as a child of `backend`'s collection
             * {@link EBackend.Backend.source}.
             *
             * You can think of this as a filtered version of
             * {@link EBackend.SourceRegistryServer}'s {@link EBackend.SourceRegistryServer.SignalSignatures.source_added | EBackend.SourceRegistryServer::source-added}
             * signal which only lets through sources relevant to `backend`.
             * @signal
             * @run-last
             */
            'child-added': (arg0: ServerSideSource) => void;
            /**
             * Emitted when an {@link EBackend.ServerSideSource} that is a child of
             * `backend`'s collection {@link EBackend.Backend.source} is removed from
             * `backend`'s {@link EBackend.CollectionBackend.server}.
             *
             * You can think of this as a filtered version of
             * {@link EBackend.SourceRegistryServer}'s {@link EBackend.SourceRegistryServer.SignalSignatures.source_removed | EBackend.SourceRegistryServer::source-removed}
             * signal which only lets through sources relevant to `backend`.
             * @signal
             * @run-last
             */
            'child-removed': (arg0: ServerSideSource) => void;
            'notify::proxy-resolver': (pspec: GObject.ParamSpec) => void;
            'notify::server': (pspec: GObject.ParamSpec) => void;
            'notify::connectable': (pspec: GObject.ParamSpec) => void;
            'notify::main-context': (pspec: GObject.ParamSpec) => void;
            'notify::online': (pspec: GObject.ParamSpec) => void;
            'notify::source': (pspec: GObject.ParamSpec) => void;
            'notify::user-prompter': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Backend.ConstructorProps {
            proxy_resolver: Gio.ProxyResolver;
            proxyResolver: Gio.ProxyResolver;
            server: SourceRegistryServer;
        }
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     * @gir-type Class
     * @since 3.6
     */
    class CollectionBackend extends Backend {
        static $gtype: GObject.GType<CollectionBackend>;

        // Properties

        /**
         * The proxy resolver for this backend
         * @read-only
         */
        get proxy_resolver(): Gio.ProxyResolver;
        /**
         * The proxy resolver for this backend
         * @read-only
         */
        get proxyResolver(): Gio.ProxyResolver;
        /**
         * The server to which the backend belongs
         * @construct-only
         */
        get server(): SourceRegistryServer;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CollectionBackend.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CollectionBackend.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof CollectionBackend.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CollectionBackend.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CollectionBackend.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CollectionBackend.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CollectionBackend.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CollectionBackend.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param child_source
         * @virtual
         */
        vfunc_child_added(child_source: EDataServer.Source): void;
        /**
         * @param child_source
         * @virtual
         */
        vfunc_child_removed(child_source: EDataServer.Source): void;
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
         * must also add an {@link EDataServer.Source} to `backend`'s {@link EBackend.CollectionBackend.server}.  This
         * can either be done immediately or in response to some "resource created"
         * notification from the server.  The added {@link EDataServer.Source} can be `source` itself
         * or a different {@link EDataServer.Source} instance that describes the new resource.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_collection_backend_create_resource_finish()` to get the result of
         * the operation.
         * @param source an {@link EDataServer.Source}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @virtual
         */
        vfunc_create_resource(
            source: EDataServer.Source,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with `e_collection_backend_create_resource()`.
         *
         * If an error occurred, the function will set `error` and return `false`.
         * @param result a {@link Gio.AsyncResult}
         * @virtual
         */
        vfunc_create_resource_finish(result: Gio.AsyncResult): boolean;
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
         * must also add an {@link EDataServer.Source} to `backend`'s {@link EBackend.CollectionBackend.server}.  This
         * can either be done immediately or in response to some "resource created"
         * notification from the server.  The added {@link EDataServer.Source} can be `source` itself
         * or a different {@link EDataServer.Source} instance that describes the new resource.
         *
         * If an error occurs, the function will set `error` and return `false`.
         * @param source an {@link EDataServer.Source}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @virtual
         */
        vfunc_create_resource_sync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously deletes a server-side resource described by `source`.
         * The `source` must be a child of `backend`'s collection {@link EBackend.Backend.source}.
         *
         * After the server-side resource is successfully deleted, the implementor
         * must also remove `source` from the `backend`'s {@link EBackend.CollectionBackend.server}.
         * This can either be done immediately or in response to some "resource
         * deleted" notification from the server.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_collection_backend_delete_resource_finish()` to get the result of
         * the operation.
         * @param source an {@link EDataServer.Source}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @virtual
         */
        vfunc_delete_resource(
            source: EDataServer.Source,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with `e_collection_backend_delete_resource()`.
         *
         * If an error occurred, the function will set `error` and return `false`.
         * @param result a {@link Gio.AsyncResult}
         * @virtual
         */
        vfunc_delete_resource_finish(result: Gio.AsyncResult): boolean;
        /**
         * Deletes a server-side resource described by `source`.  The `source` must
         * be a child of `backend`'s collection {@link EBackend.Backend.source}.
         *
         * After the server-side resource is successfully deleted, the implementor
         * must also remove `source` from the `backend`'s {@link EBackend.CollectionBackend.server}.
         * This can either be done immediately or in response to some "resource
         * deleted" notification from the server.
         *
         * If an error occurs, the function will set `error` and return `false`.
         * @param source an {@link EDataServer.Source}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @virtual
         */
        vfunc_delete_resource_sync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Extracts the resource ID for `child_source`, which is supposed to be a
         * stable and unique server-assigned identifier for the remote resource
         * described by `child_source`.  If `child_source` is not actually a child
         * of the collection {@link EBackend.Backend.source} owned by `backend`, the function
         * returns `null`.
         *
         * The returned string should be freed with `g_free()` when no longer needed.
         * @param child_source an {@link EDataServer.Source} managed by `backend`
         * @virtual
         */
        vfunc_dup_resource_id(child_source: EDataServer.Source): string | null;
        /**
         * @virtual
         */
        vfunc_populate(): void;

        // Methods

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
         * `e_collection_backend_new_child()` and returns them in a {@link GLib.List}.  Note
         * that previously used sources can only be claimed once, so subsequent
         * calls to this function for `backend` will return `null`.
         *
         * The `backend` is then expected to compare the returned list with a
         * current list of resources from a remote server, create new {@link EDataServer.Source}
         * instances as needed with `e_collection_backend_new_child()`, discard
         * unneeded {@link EDataServer.Source} instances with `e_source_remove()`, and export the
         * remaining instances with `e_source_registry_server_add_source()`.
         *
         * The sources returned in the list are referenced for thread-safety.
         * They must each be unreferenced with `g_object_unref()` when finished
         * with them.  Free the returned {@link GLib.List} itself with `g_list_free()`.
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
         * must also add an {@link EDataServer.Source} to `backend`'s {@link EBackend.CollectionBackend.server}.  This
         * can either be done immediately or in response to some "resource created"
         * notification from the server.  The added {@link EDataServer.Source} can be `source` itself
         * or a different {@link EDataServer.Source} instance that describes the new resource.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_collection_backend_create_resource_finish()` to get the result of
         * the operation.
         * @param source an {@link EDataServer.Source}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         */
        create_resource(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
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
         * must also add an {@link EDataServer.Source} to `backend`'s {@link EBackend.CollectionBackend.server}.  This
         * can either be done immediately or in response to some "resource created"
         * notification from the server.  The added {@link EDataServer.Source} can be `source` itself
         * or a different {@link EDataServer.Source} instance that describes the new resource.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_collection_backend_create_resource_finish()` to get the result of
         * the operation.
         * @param source an {@link EDataServer.Source}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        create_resource(
            source: EDataServer.Source,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
         * must also add an {@link EDataServer.Source} to `backend`'s {@link EBackend.CollectionBackend.server}.  This
         * can either be done immediately or in response to some "resource created"
         * notification from the server.  The added {@link EDataServer.Source} can be `source` itself
         * or a different {@link EDataServer.Source} instance that describes the new resource.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_collection_backend_create_resource_finish()` to get the result of
         * the operation.
         * @param source an {@link EDataServer.Source}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        create_resource(
            source: EDataServer.Source,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes the operation started with `e_collection_backend_create_resource()`.
         *
         * If an error occurred, the function will set `error` and return `false`.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` on success, `false` on failure
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
         * must also add an {@link EDataServer.Source} to `backend`'s {@link EBackend.CollectionBackend.server}.  This
         * can either be done immediately or in response to some "resource created"
         * notification from the server.  The added {@link EDataServer.Source} can be `source` itself
         * or a different {@link EDataServer.Source} instance that describes the new resource.
         *
         * If an error occurs, the function will set `error` and return `false`.
         * @param source an {@link EDataServer.Source}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns `true` on success, `false` on failure
         */
        create_resource_sync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously deletes a server-side resource described by `source`.
         * The `source` must be a child of `backend`'s collection {@link EBackend.Backend.source}.
         *
         * After the server-side resource is successfully deleted, the implementor
         * must also remove `source` from the `backend`'s {@link EBackend.CollectionBackend.server}.
         * This can either be done immediately or in response to some "resource
         * deleted" notification from the server.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_collection_backend_delete_resource_finish()` to get the result of
         * the operation.
         * @param source an {@link EDataServer.Source}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         */
        delete_resource(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously deletes a server-side resource described by `source`.
         * The `source` must be a child of `backend`'s collection {@link EBackend.Backend.source}.
         *
         * After the server-side resource is successfully deleted, the implementor
         * must also remove `source` from the `backend`'s {@link EBackend.CollectionBackend.server}.
         * This can either be done immediately or in response to some "resource
         * deleted" notification from the server.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_collection_backend_delete_resource_finish()` to get the result of
         * the operation.
         * @param source an {@link EDataServer.Source}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        delete_resource(
            source: EDataServer.Source,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously deletes a server-side resource described by `source`.
         * The `source` must be a child of `backend`'s collection {@link EBackend.Backend.source}.
         *
         * After the server-side resource is successfully deleted, the implementor
         * must also remove `source` from the `backend`'s {@link EBackend.CollectionBackend.server}.
         * This can either be done immediately or in response to some "resource
         * deleted" notification from the server.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_collection_backend_delete_resource_finish()` to get the result of
         * the operation.
         * @param source an {@link EDataServer.Source}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        delete_resource(
            source: EDataServer.Source,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes the operation started with `e_collection_backend_delete_resource()`.
         *
         * If an error occurred, the function will set `error` and return `false`.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` on success, `false` on failure
         */
        delete_resource_finish(result: Gio.AsyncResult): boolean;
        /**
         * Deletes a server-side resource described by `source`.  The `source` must
         * be a child of `backend`'s collection {@link EBackend.Backend.source}.
         *
         * After the server-side resource is successfully deleted, the implementor
         * must also remove `source` from the `backend`'s {@link EBackend.CollectionBackend.server}.
         * This can either be done immediately or in response to some "resource
         * deleted" notification from the server.
         *
         * If an error occurs, the function will set `error` and return `false`.
         * @param source an {@link EDataServer.Source}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns `true` on success, `false` on failure
         */
        delete_resource_sync(source: EDataServer.Source, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Extracts the resource ID for `child_source`, which is supposed to be a
         * stable and unique server-assigned identifier for the remote resource
         * described by `child_source`.  If `child_source` is not actually a child
         * of the collection {@link EBackend.Backend.source} owned by `backend`, the function
         * returns `null`.
         *
         * The returned string should be freed with `g_free()` when no longer needed.
         * @param child_source an {@link EDataServer.Source} managed by `backend`
         * @returns a newly-allocated resource ID for `child_source`,    or `null`
         */
        dup_resource_id(child_source: EDataServer.Source): string | null;
        /**
         * Freezes populate of the backend's content. This is used to avoid calling
         * populate multiple times in parallel.
         * Every call to this function should be followed by the call
         * of `e_collection_backend_thaw_populate()` to reverse the effect of this function,
         * regardless of the return value of this function.
         * @returns `true`, when this is the first freeze call
         */
        freeze_populate(): boolean;
        /**
         * Returns the private cache directory path for `backend`, which is named
         * after the {@link EDataServer.Source.uid} of `backend`'s collection {@link EBackend.Backend.source}.
         *
         * The cache directory is meant to store key files for backend-created
         * data sources.  See also: `e_server_side_source_set_write_directory()`
         * @returns the cache directory for `backend`
         */
        get_cache_dir(): string;
        /**
         * Checks whether the `backend` has enabled at least of the `parts`.
         * @param parts a bit-or of {@link EBackend.CollectionBackendParts} with parts to be checked
         * @returns `true`, when at least one of the `parts` is enabled and    the backend's {@link EDataServer.Source} is enabled as well.
         */
        get_part_enabled(parts: CollectionBackendParts | null): boolean;
        /**
         * @returns Whether the backend has currently frozen (disabled) populate of its content.
         */
        get_populate_frozen(): boolean;
        /**
         * Returns whether the `source` is a newly created child or not. New sources
         * are remembered between two populate calls only.
         * @param source a child {@link EDataServer.Source}
         * @returns `true`, when the `source` is a new child; `false` when    it had been known before.
         */
        is_new_source(source: EDataServer.Source): boolean;
        /**
         * Returns a list of calendar sources belonging to the data source
         * collection managed by `backend`.
         *
         * The sources returned in the list are referenced for thread-safety.
         * They must each be unreferenced with `g_object_unref()` when finished
         * with them.  Free the returned {@link GLib.List} itself with `g_list_free()`.
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
         * They must each be unreferenced with `g_object_unref()` when finished
         * with them.  Free the returned {@link GLib.List} itself with `g_list_free()`.
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
         * They must each be unreferenced with `g_object_unref()` when finished
         * with them.  Free the returned {@link GLib.List} itself with `g_list_free()`.
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
         * Creates a new {@link EBackend.ServerSideSource} as a child of the collection
         * {@link EBackend.Backend.source} owned by `backend`.  If possible, the {@link EBackend.ServerSideSource}
         * is drawn from a cache of previously used sources indexed by `resource_id`
         * so that locally cached data from previous sessions can be reused.
         *
         * The returned data source should be passed to
         * `e_source_registry_server_add_source()` to export it over D-Bus.
         * @param resource_id a stable and unique resource ID
         * @returns a newly-created data source
         */
        new_child(resource_id: string): EDataServer.Source;
        /**
         * Returns the {@link Gio.ProxyResolver} for `backend` (if applicable), as indicated
         * by the {@link EDataServer.SourceAuthentication.proxy_uid} of `backend`'s {@link EBackend.Backend.source}
         * or one of its ancestors.
         *
         * The returned {@link Gio.ProxyResolver} is referenced for thread-safety and must
         * be unreferenced with `g_object_unref()` when finished with it.
         * @returns a {@link Gio.ProxyResolver}, or `null`
         */
        ref_proxy_resolver(): Gio.ProxyResolver | null;
        /**
         * Returns the {@link EBackend.SourceRegistryServer} to which `backend` belongs.
         *
         * The returned {@link EBackend.SourceRegistryServer} is referenced for thread-safety.
         * Unreference the {@link EBackend.SourceRegistryServer} with `g_object_unref()` when
         * finished with it.
         * @returns the {@link EBackend.SourceRegistryServer} for `backend`
         */
        ref_server(): SourceRegistryServer;
        /**
         * Schedules a call to `populate()` of the `backend` on idle.
         * The function does nothing in case the `backend` is offline.
         */
        schedule_populate(): void;
        /**
         * Thaws populate of the backend's content. This is a pair function
         * for `e_collection_backend_freeze_populate()`.
         */
        thaw_populate(): void;
    }

    namespace CollectionBackendFactory {
        // Signal signatures
        interface SignalSignatures extends BackendFactory.SignalSignatures {
            'notify::extensible': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends BackendFactory.ConstructorProps {}
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     * @gir-type Class
     * @since 3.6
     */
    class CollectionBackendFactory extends BackendFactory {
        static $gtype: GObject.GType<CollectionBackendFactory>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CollectionBackendFactory.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CollectionBackendFactory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof CollectionBackendFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CollectionBackendFactory.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CollectionBackendFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CollectionBackendFactory.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CollectionBackendFactory.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CollectionBackendFactory.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Convenience function to populate a set of {@link EDataServer.Source} instances with mail
         * account information to be added to an {@link EBackend.CollectionBackend}.  This is mainly
         * used for vendor-specific collection backends like Google or Yahoo! where
         * the host, port, and security details are known ahead of time and only
         * user-specific information needs to be filled in.
         * @param mail_account_source an {@link EDataServer.Source} to hold mail account information
         * @param mail_identity_source an {@link EDataServer.Source} to hold mail identity information
         * @param mail_transport_source an {@link EDataServer.Source} to hold mail transport information
         * @virtual
         */
        vfunc_prepare_mail(
            mail_account_source: EDataServer.Source,
            mail_identity_source: EDataServer.Source,
            mail_transport_source: EDataServer.Source,
        ): void;

        // Methods

        /**
         * Convenience function to populate a set of {@link EDataServer.Source} instances with mail
         * account information to be added to an {@link EBackend.CollectionBackend}.  This is mainly
         * used for vendor-specific collection backends like Google or Yahoo! where
         * the host, port, and security details are known ahead of time and only
         * user-specific information needs to be filled in.
         * @param mail_account_source an {@link EDataServer.Source} to hold mail account information
         * @param mail_identity_source an {@link EDataServer.Source} to hold mail identity information
         * @param mail_transport_source an {@link EDataServer.Source} to hold mail transport information
         */
        prepare_mail(
            mail_account_source: EDataServer.Source,
            mail_identity_source: EDataServer.Source,
            mail_transport_source: EDataServer.Source,
        ): void;
    }

    namespace DBusServer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when `server` acquires a connection to the session bus.
             * @signal
             * @run-last
             */
            'bus-acquired': (arg0: Gio.DBusConnection) => void;
            /**
             * Emitted when `server` acquires its well-known session bus name.
             * @signal
             * @run-last
             */
            'bus-name-acquired': (arg0: Gio.DBusConnection) => void;
            /**
             * Emitted when `server` loses its well-known session bus name
             * or the session bus connection has been closed.
             * @signal
             * @run-last
             */
            'bus-name-lost': (arg0: Gio.DBusConnection) => void;
            /**
             * Emitted to request that `server` quit its main loop.
             * @signal
             * @run-last
             */
            'quit-server': (arg0: DBusServerExitCode) => void;
            /**
             * Emitted to request that `server` start its main loop and
             * attempt to acquire its well-known session bus name.
             * @signal
             * @run-last
             */
            'run-server': () => DBusServerExitCode;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, EDataServer.Extensible.ConstructorProps {}
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     * @gir-type Class
     * @since 3.4
     */
    abstract class DBusServer extends GObject.Object implements EDataServer.Extensible {
        static $gtype: GObject.GType<DBusServer>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DBusServer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DBusServer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DBusServer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DBusServer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DBusServer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DBusServer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DBusServer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DBusServer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param connection
         * @virtual
         */
        vfunc_bus_acquired(connection: Gio.DBusConnection): void;
        /**
         * @param connection
         * @virtual
         */
        vfunc_bus_name_acquired(connection: Gio.DBusConnection): void;
        /**
         * @param connection
         * @virtual
         */
        vfunc_bus_name_lost(connection: Gio.DBusConnection): void;
        /**
         * @param code
         * @virtual
         */
        vfunc_quit_server(code: DBusServerExitCode): void;
        /**
         * @virtual
         */
        vfunc_run_server(): DBusServerExitCode;

        // Methods

        /**
         * Increases the use count of `server`.
         *
         * Use this function to indicate that the server has a reason to continue
         * to run.  To cancel the hold, call `e_dbus_server_release()`.
         */
        hold(): void;
        /**
         * This function should be called once during `server` initialization to
         * load all available library modules to extend the `server`'s functionality.
         */
        load_modules(): void;
        /**
         * Emits the {@link EBackend.DBusServer.SignalSignatures.quit | EBackend.DBusServer::quit} signal with the given `code`.
         *
         * By default the `server` will quit its main loop and cause
         * `e_dbus_server_run()` to return `code`.
         * @param code an {@link EBackend.DBusServerExitCode}
         */
        quit(code: DBusServerExitCode | null): void;
        /**
         * Decreates the use count of `server`.
         *
         * When the use count reaches zero, the server will stop running.
         *
         * Never call this function except to cancel the effect of a previous call
         * to `e_dbus_server_hold()`.
         */
        release(): void;
        /**
         * Emits the {@link EBackend.DBusServer.SignalSignatures.run | EBackend.DBusServer::run} signal.
         *
         * By default the `server` will start its main loop and attempt to acquire
         * its well-known session bus name.  If the `server`'s main loop is already
         * running, the function will immediately return #E_DBUS_SERVER_EXIT_NONE.
         * Otherwise the function blocks until `e_dbus_server_quit()` is called.
         *
         * If `wait_for_client` is `true`, the `server` will continue running until
         * the first client connection is made instead of quitting on its own if
         * no client connection is made within the first few seconds.
         * @param wait_for_client continue running until a client connects
         * @returns the exit code passed to `e_dbus_server_quit()`
         */
        run(wait_for_client: boolean): DBusServerExitCode;
        /**
         * Returns a list of {@link EDataServer.Extension} objects bound to `extensible` whose
         * types are ancestors of `extension_type`.  For a complete list of
         * extension objects bound to `extensible`, pass `E_TYPE_EXTENSION`.
         *
         * The list itself should be freed with `g_list_free()`.  The extension
         * objects are owned by `extensible` and should not be unreferenced.
         * @param extension_type the type of extensions to list
         * @returns a list of extension objects derived from `extension_type`
         */
        list_extensions(extension_type: GObject.GType): EDataServer.Extension[];
        /**
         * Creates an instance of all instantiable subtypes of {@link EDataServer.Extension} which
         * target the class of `extensible`.  The lifetimes of these newly created
         * {@link EDataServer.Extension} objects are bound to `extensible` such that they are finalized
         * when `extensible` is finalized.
         */
        load_extensions(): void;
        /**
         * Similar to `e_extensible_load_extensions()`, only loads newly discovered
         * extensions again. This can help in case a new module had been loaded
         * to the process, which provides the extensions for the `extensible`.
         */
        reload_extensions(): void;
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

    namespace DataFactory {
        // Signal signatures
        interface SignalSignatures extends DBusServer.SignalSignatures {
            'notify::backend-per-process': (pspec: GObject.ParamSpec) => void;
            'notify::registry': (pspec: GObject.ParamSpec) => void;
            'notify::reload-supported': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                DBusServer.ConstructorProps,
                EDataServer.Extensible.ConstructorProps,
                Gio.Initable.ConstructorProps {
            backend_per_process: number;
            backendPerProcess: number;
            registry: EDataServer.SourceRegistry;
            reload_supported: boolean;
            reloadSupported: boolean;
        }
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     * @gir-type Class
     * @since 3.4
     */
    class DataFactory extends DBusServer implements EDataServer.Extensible, Gio.Initable {
        static $gtype: GObject.GType<DataFactory>;

        // Properties

        /**
         * Override backend-per-process compile-time option
         * @construct-only
         */
        get backend_per_process(): number;
        /**
         * Override backend-per-process compile-time option
         * @construct-only
         */
        get backendPerProcess(): number;
        /**
         * Data source registry
         * @read-only
         */
        get registry(): EDataServer.SourceRegistry;
        /**
         * Whether the data factory supports Reload
         * @construct-only
         */
        get reload_supported(): boolean;
        /**
         * Whether the data factory supports Reload
         * @construct-only
         */
        get reloadSupported(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DataFactory.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DataFactory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DataFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DataFactory.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DataFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DataFactory.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DataFactory.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DataFactory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param invocation
         * @param object_path
         * @param bus_name
         * @param extension_name
         * @virtual
         */
        vfunc_complete_open(
            invocation: Gio.DBusMethodInvocation,
            object_path: string,
            bus_name: string,
            extension_name: string,
        ): void;
        /**
         * Used only when backend-per-process is off.
         *
         * Free the returned pointer with `g_object_unref()`, if not NULL and no longer
         * needed.
         * @param backend_factory
         * @param source
         * @virtual
         */
        vfunc_create_backend(backend_factory: BackendFactory, source: EDataServer.Source): Backend | null;
        /**
         * @param backend
         * @param connection
         * @param cancellable
         * @virtual
         */
        vfunc_open_backend(
            backend: Backend,
            connection: Gio.DBusConnection,
            cancellable?: Gio.Cancellable | null,
        ): string;

        // Methods

        /**
         * @param backend
         */
        backend_closed(backend: Backend): void;
        /**
         * @param backend
         * @param sender
         */
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
         * Free the returned pointer with `g_object_unref()`, if not NULL and no longer
         * needed.
         * @param backend_factory
         * @param source
         * @returns a newly-created {@link EBackend.Backend}
         */
        create_backend(backend_factory: BackendFactory, source: EDataServer.Source): Backend | null;
        get_backend_per_process(): number;
        /**
         * Returns the {@link EDataServer.SourceRegistry} owned by `data_factory`.
         * @returns the {@link EDataServer.SourceRegistry}
         */
        get_registry(): EDataServer.SourceRegistry;
        get_reload_supported(): boolean;
        /**
         * Lists the currently opened backends.
         *
         * The sources returned in the list are referenced for thread-safety.
         * They must each be unreferenced with `g_object_unref()` when finished
         * with them.  Free the returned {@link GLib.SList} itself with `g_slist_free()`.
         *
         * An easy way to free the list properly in one step is as follows:
         *
         *
         * ```
         *   g_slist_free_full (list, g_object_unref);
         * ```
         *
         * @returns a {@link GLib.SList} of {@link EBackend.Backend}
         */
        list_opened_backends(): Backend[];
        /**
         * @param backend
         * @param connection
         * @param cancellable
         */
        open_backend(backend: Backend, connection: Gio.DBusConnection, cancellable?: Gio.Cancellable | null): string;
        /**
         * Returns the {@link EBackend.BackendFactory} for "`backend_name`:`extension_name`", or
         * `null` if no such factory is registered.
         *
         * The returned {@link EBackend.BackendFactory} is referenced for thread-safety.
         * Unreference the {@link EBackend.BackendFactory} with `g_object_unref()` when finished
         * with it.
         * @param backend_name a backend name
         * @param extension_name an extension name
         * @returns the {@link EBackend.BackendFactory} for `hash_key`,    or `null`
         */
        ref_backend_factory(backend_name: string, extension_name: string): BackendFactory | null;
        /**
         * Spawns a new subprocess for a backend type and returns the object path
         * of the new subprocess to the client, in the way the client can talk
         * directly to the running backend. If the backend already has a subprocess
         * running, the used object path is returned to the client.
         * @param invocation a {@link Gio.DBusMethodInvocation}
         * @param uid an {@link EDataServer.Source} UID
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
        /**
         * Returns a list of {@link EDataServer.Extension} objects bound to `extensible` whose
         * types are ancestors of `extension_type`.  For a complete list of
         * extension objects bound to `extensible`, pass `E_TYPE_EXTENSION`.
         *
         * The list itself should be freed with `g_list_free()`.  The extension
         * objects are owned by `extensible` and should not be unreferenced.
         * @param extension_type the type of extensions to list
         * @returns a list of extension objects derived from `extension_type`
         */
        list_extensions(extension_type: GObject.GType): EDataServer.Extension[];
        /**
         * Creates an instance of all instantiable subtypes of {@link EDataServer.Extension} which
         * target the class of `extensible`.  The lifetimes of these newly created
         * {@link EDataServer.Extension} objects are bound to `extensible` such that they are finalized
         * when `extensible` is finalized.
         */
        load_extensions(): void;
        /**
         * Similar to `e_extensible_load_extensions()`, only loads newly discovered
         * extensions again. This can help in case a new module had been loaded
         * to the process, which provides the extensions for the `extensible`.
         */
        reload_extensions(): void;
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

    namespace FileCache {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::filename': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            filename: string;
        }
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     * @gir-type Class
     */
    class FileCache extends GObject.Object {
        static $gtype: GObject.GType<FileCache>;

        // Properties

        /**
         * The filename of the cache.
         * @construct-only
         */
        get filename(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FileCache.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<FileCache.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](filename: string): FileCache;

        // Signals

        /** @signal */
        connect<K extends keyof FileCache.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileCache.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof FileCache.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, FileCache.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof FileCache.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<FileCache.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Adds a new `key` / `value` entry to `cache`.  If an object corresponding
         * to `key` already exists in `cache`, the function returns `false`.
         * @param key the hash key of the object to add
         * @param value the object to add
         * @returns `true` if successful, `false` if `key` already exists
         */
        add_object(key: string, value: string): boolean;
        /**
         * Clean up the cache's contents.
         * @returns `true` always
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
         * not be modified or freed.  Free the returned list with `g_slist_free()`.
         * @returns a list of keys
         */
        get_keys(): string[];
        /**
         * Returns the object corresponding to `key`.  If no such object exists
         * in `cache`, the function returns `null`.
         * @param key the hash key of the object to find
         * @returns the object corresponding to `key`
         */
        get_object(key: string): string | null;
        /**
         * Returns a list of objects in `cache`.  The objects are owned by `cache` and
         * must not be modified or freed.  Free the returned list with `g_slist_free()`.
         * @returns a list of objects
         */
        get_objects(): string[];
        /**
         * Remove the cache from disk.
         * @returns `true` if successful, `false` if a file error occurred
         */
        remove(): boolean;
        /**
         * Removes the object corresponding to `key` from `cache`.
         * If no such object exists in `cache`, the function returns `false`.
         * @param key the hash key of the object to remove
         * @returns `true` if successful, `false` if `key` was not found
         */
        remove_object(key: string): boolean;
        /**
         * Replaces the object corresponding to `key` with `new_value`.
         * If no such object exists in `cache`, the function returns `false`.
         * @param key the hash key of the object to replace
         * @param new_value the new object for `key`
         * @returns `true` if successful, `false` if `key` was not found
         */
        replace_object(key: string, new_value: string): boolean;
        /**
         * Reverts the affects of `e_file_cache_freeze_changes()`.
         * Each change to `cache` is once again written to disk.
         */
        thaw_changes(): void;
    }

    namespace ServerSideSource {
        // Signal signatures
        interface SignalSignatures extends EDataServer.Source.SignalSignatures {
            'notify::exported': (pspec: GObject.ParamSpec) => void;
            'notify::file': (pspec: GObject.ParamSpec) => void;
            'notify::oauth2-support': (pspec: GObject.ParamSpec) => void;
            'notify::remote-creatable': (pspec: GObject.ParamSpec) => void;
            'notify::remote-deletable': (pspec: GObject.ParamSpec) => void;
            'notify::removable': (pspec: GObject.ParamSpec) => void;
            'notify::server': (pspec: GObject.ParamSpec) => void;
            'notify::writable': (pspec: GObject.ParamSpec) => void;
            'notify::write-directory': (pspec: GObject.ParamSpec) => void;
            'notify::connection-status': (pspec: GObject.ParamSpec) => void;
            'notify::display-name': (pspec: GObject.ParamSpec) => void;
            'notify::enabled': (pspec: GObject.ParamSpec) => void;
            'notify::main-context': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
            'notify::uid': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                EDataServer.Source.ConstructorProps,
                Gio.Initable.ConstructorProps,
                Gio.ProxyResolver.ConstructorProps {
            exported: boolean;
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
        }
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     * @gir-type Class
     * @since 3.6
     */
    class ServerSideSource extends EDataServer.Source implements Gio.Initable, Gio.ProxyResolver {
        static $gtype: GObject.GType<ServerSideSource>;

        // Properties

        /**
         * Whether the source has been exported over D-Bus
         * @read-only
         */
        get exported(): boolean;
        /**
         * The key file for the data source
         * @construct-only
         */
        get file(): Gio.File;
        /**
         * The object providing OAuth 2.0 support
         */
        get oauth2_support(): OAuth2Support;
        set oauth2_support(val: OAuth2Support);
        /**
         * The object providing OAuth 2.0 support
         */
        get oauth2Support(): OAuth2Support;
        set oauth2Support(val: OAuth2Support);
        /**
         * Whether the data source can create remote resources
         *
         * Note: This overrides the "remote-creatable" property in ESourceClass with a writable
         * version.
         */
        get remote_creatable(): boolean;
        set remote_creatable(val: boolean);
        /**
         * Whether the data source can create remote resources
         *
         * Note: This overrides the "remote-creatable" property in ESourceClass with a writable
         * version.
         */
        get remoteCreatable(): boolean;
        set remoteCreatable(val: boolean);
        /**
         * Whether the data source can delete remote resources
         *
         * Note: This overrides the "remote-deletable" property in ESourceClass with a writable
         * version.
         */
        get remote_deletable(): boolean;
        set remote_deletable(val: boolean);
        /**
         * Whether the data source can delete remote resources
         *
         * Note: This overrides the "remote-deletable" property in ESourceClass with a writable
         * version.
         */
        get remoteDeletable(): boolean;
        set remoteDeletable(val: boolean);
        /**
         * Whether the data source is removable
         *
         * Note: This overrides the "removable" property in ESourceClass with a writable version.
         */
        get removable(): boolean;
        set removable(val: boolean);
        /**
         * The server to which the data source belongs
         * @construct-only
         */
        get server(): SourceRegistryServer;
        /**
         * Whether the data source is writable
         *
         * Note: This overrides the "writable" property in ESourceClass with a writable version.
         */
        get writable(): boolean;
        set writable(val: boolean);
        /**
         * Directory in which to write changes to disk
         *
         * Note: Do not use G_PARAM_CONSTRUCT.  We initialize the property ourselves in
         * `e_server_side_source_init()`.
         */
        get write_directory(): string;
        set write_directory(val: string);
        /**
         * Directory in which to write changes to disk
         *
         * Note: Do not use G_PARAM_CONSTRUCT.  We initialize the property ourselves in
         * `e_server_side_source_init()`.
         */
        get writeDirectory(): string;
        set writeDirectory(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ServerSideSource.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ServerSideSource.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](server: SourceRegistryServer, file?: Gio.File | null): ServerSideSource;
        // Conflicted with EDataServer.Source.new

        static ['new'](...args: never[]): any;

        static new_memory_only(server: SourceRegistryServer, uid?: string | null): ServerSideSource;

        // Signals

        /** @signal */
        connect<K extends keyof ServerSideSource.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServerSideSource.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ServerSideSource.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServerSideSource.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ServerSideSource.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ServerSideSource.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Returns the directory where user-specific data source files are stored.
         */
        static get_user_dir(): string;
        /**
         * Generates a unique file name for a new user-specific data source.
         * If `uid` is non-`null` it will be used in the basename of the file,
         * otherwise a unique basename will be generated using `e_util_generate_uid()`.
         *
         * The returned {@link Gio.File} can then be passed to `e_server_side_source_new()`.
         * Unreference the {@link Gio.File} with `g_object_unref()` when finished with it.
         *
         * Note the data source file itself is not created here, only its name.
         * @param uid unique identifier for a data source, or `null`
         */
        static new_user_file(uid?: string | null): Gio.File;
        /**
         * Extracts a unique identity string from the base name of `file`.
         * If the base name of `file` is missing a '.source' extension, the
         * function sets `error` and returns `null`.
         * @param file a {@link Gio.File} for a data source
         */
        static uid_from_file(file: Gio.File): string | null;

        // Methods

        /**
         * Returns whether `source` has been exported over D-Bus.
         *
         * The function returns `false` after `source` is initially created, `true`
         * after passing `source` uid to `e_source_registry_server_ref_source()` (provided
         * that `source`'s {@link EDataServer.Source.parent} is also exported).
         * @returns whether `source` has been exported
         */
        get_exported(): boolean;
        /**
         * Returns the {@link Gio.File} from which data source content is loaded and to
         * which changes are saved.  Note the `source` may not have a {@link Gio.File}.
         * @returns the {@link Gio.File} for `source`, or `null`
         */
        get_file(): Gio.File | null;
        /**
         * Returns the {@link GLib.Node} representing the `source`'s hierarchical placement,
         * or `null` if `source` has not been placed in the data source hierarchy.
         * The data member of the {@link GLib.Node} points back to `source`.  This is an easy
         * way to traverse ancestor and descendant data sources.
         *
         * Note that accessing other data sources this way is not thread-safe,
         * and this therefore function may be replaced at some later date.
         * @returns a {@link GLib.Node}, or `null`
         */
        get_node(): GLib.Node | null;
        /**
         * Returns the {@link EBackend.SourceRegistryServer} to which `source` belongs.
         * @returns the {@link EBackend.SourceRegistryServer} for `source`
         */
        get_server(): SourceRegistryServer;
        /**
         * Returns the local directory path where changes to `source` are written.
         *
         * By default, changes are written to the local directory path returned by
         * `e_server_side_source_get_user_dir()`, but an {@link EBackend.CollectionBackend} may wish
         * to override this to use its own private cache directory for data sources
         * it creates automatically.
         * @returns the directory where changes are written
         */
        get_write_directory(): string;
        /**
         * Reloads data source content from the file pointed to by the
         * {@link EBackend.ServerSideSource.file} property.
         *
         * If the {@link EBackend.ServerSideSource.file} property is `null` or the file it points
         * to does not exist, the function does nothing and returns `true`.
         *
         * If a read error occurs or the file contains syntax errors, the function
         * sets `error` and returns `false`.
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns `true` on success, `false` on failure
         */
        load(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Returns the object implementing the {@link EBackend.OAuth2SupportInterface},
         * or `null` if `source` does not support OAuth 2.0 authentication.
         *
         * The returned {@link EBackend.OAuth2Support} object is referenced for thread-safety.
         * Unreference the object with `g_object_unref()` when finished with it.
         * @returns an {@link EBackend.OAuth2Support} object, or `null`
         */
        ref_oauth2_support(): OAuth2Support | null;
        /**
         * Indicates whether `source` supports OAuth 2.0 authentication.
         *
         * If `oauth2_support` is non-`null`, the OAuth2Support D-Bus interface is
         * exported at the object path for `source`.  If `oauth2_support` is `null`,
         * the OAuth2Support D-Bus interface is unexported at the object path for
         * `source`, and any attempt by clients to call
         * `e_source_get_oauth2_access_token()` will fail.
         *
         * Requests for OAuth 2.0 access tokens are forwarded to `oauth2_support`,
         * which implements the {@link EBackend.OAuth2SupportInterface}.
         * @param oauth2_support an {@link EBackend.OAuth2Support} object, or `null`
         */
        set_oauth2_support(oauth2_support?: OAuth2Support | null): void;
        /**
         * Indicates whether `source` can be used to create resources on a remote
         * server.  Typically this is only set to `true` for collection sources.
         *
         * If `true`, the RemoteCreatable D-Bus interface is exported at the object
         * path for `source`.  If `false`, the RemoteCreatable D-Bus interface is
         * unexported at the object path for `source`, and any attempt by clients
         * to call `e_source_remote_create()` will fail.
         *
         * Unlike the {@link EDataServer.Source.removable} and {@link EDataServer.Source.writable} properties, this
         * is enforced for both clients of the registry D-Bus service and within
         * the registry D-Bus service itself.
         * @param remote_creatable whether to export the RemoteCreatable interface
         */
        set_remote_creatable(remote_creatable: boolean): void;
        /**
         * Indicates whether `source` can be used to delete resources on a remote
         * server.  Typically this is only set to `true` for sources created by an
         * {@link EBackend.CollectionBackend} to represent a remote resource.
         *
         * If `true`, the RemoteDeletable D-Bus interface is exported at the object
         * path for `source`.  If `false`, the RemoteDeletable D-Bus interface is
         * unexported at the object path for `source`, and any attempt by clients
         * to call `e_source_remote_delete()` will fail.
         *
         * Unlike the {@link EDataServer.Source.removable} and {@link EDataServer.Source.writable} properties, this
         * is enforced for both clients of the registry D-Bus server and within
         * the registry D-Bus service itself.
         * @param remote_deletable whether to export the RemoteDeletable interface
         */
        set_remote_deletable(remote_deletable: boolean): void;
        /**
         * Sets whether to allow registry clients to remove `source` and its
         * descendants.  If `true`, the Removable D-Bus interface is exported at
         * the object path for `source`.  If `false`, the Removable D-Bus interface
         * is unexported at the object path for `source`, and any attempt by clients
         * to call `e_source_remove()` will fail.
         *
         * Note this is only enforced for clients of the registry D-Bus service.
         * The service itself may remove any data source at any time.
         * @param removable whether to export the Removable interface
         */
        set_removable(removable: boolean): void;
        /**
         * Sets whether to allow registry clients to alter the content of `source`.
         * If `true`, the Writable D-Bus interface is exported at the object path
         * for `source`.  If `false`, the Writable D-Bus interface is unexported at
         * the object path for `source`, and any attempt by clients to call
         * `e_source_write()` will fail.
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
         * `e_server_side_source_get_user_dir()`, but an {@link EBackend.CollectionBackend} may wish
         * to override this to use its own private cache directory for data sources
         * it creates automatically.
         * @param write_directory the directory where changes are to be written
         */
        set_write_directory(write_directory: string): void;
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
         * Checks if `resolver` can be used on this system. (This is used
         * internally; `g_proxy_resolver_get_default()` will only return a proxy
         * resolver that returns `true` for this method.)
         * @returns `true` if `resolver` is supported.
         */
        is_supported(): boolean;
        /**
         * Looks into the system proxy configuration to determine what proxy,
         * if any, to use to connect to `uri`. The returned proxy URIs are of
         * the form `<protocol>://[user[:password]@]host[:port]` or
         * `direct://`, where `<protocol>` could be http, rtsp, socks
         * or other proxying protocol.
         *
         * If you don't know what network protocol is being used on the
         * socket, you should use `none` as the URI protocol.
         * In this case, the resolver might still return a generic proxy type
         * (such as SOCKS), but would not return protocol-specific proxy types
         * (such as http).
         *
         * `direct://` is used when no proxy is needed.
         * Direct connection should not be attempted unless it is part of the
         * returned array of proxies.
         * @param uri a URI representing the destination to connect to
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @returns A               NULL-terminated array of proxy URIs. Must be freed               with `g_strfreev()`.
         */
        lookup(uri: string, cancellable?: Gio.Cancellable | null): string[];
        /**
         * Asynchronous lookup of proxy. See `g_proxy_resolver_lookup()` for more
         * details.
         * @param uri a URI representing the destination to connect to
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         */
        lookup_async(uri: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<string[]>;
        /**
         * Asynchronous lookup of proxy. See `g_proxy_resolver_lookup()` for more
         * details.
         * @param uri a URI representing the destination to connect to
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback callback to call after resolution completes
         */
        lookup_async(
            uri: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronous lookup of proxy. See `g_proxy_resolver_lookup()` for more
         * details.
         * @param uri a URI representing the destination to connect to
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback callback to call after resolution completes
         */
        lookup_async(
            uri: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string[]> | void;
        /**
         * Call this function to obtain the array of proxy URIs when
         * `g_proxy_resolver_lookup_async()` is complete. See
         * `g_proxy_resolver_lookup()` for more details.
         * @param result the result passed to your {@link Gio.AsyncReadyCallback}
         * @returns A               NULL-terminated array of proxy URIs. Must be freed               with `g_strfreev()`.
         */
        lookup_finish(result: Gio.AsyncResult): string[];
        /**
         * Checks if `resolver` can be used on this system. (This is used
         * internally; `g_proxy_resolver_get_default()` will only return a proxy
         * resolver that returns `true` for this method.)
         * @virtual
         */
        vfunc_is_supported(): boolean;
        /**
         * Looks into the system proxy configuration to determine what proxy,
         * if any, to use to connect to `uri`. The returned proxy URIs are of
         * the form `<protocol>://[user[:password]@]host[:port]` or
         * `direct://`, where `<protocol>` could be http, rtsp, socks
         * or other proxying protocol.
         *
         * If you don't know what network protocol is being used on the
         * socket, you should use `none` as the URI protocol.
         * In this case, the resolver might still return a generic proxy type
         * (such as SOCKS), but would not return protocol-specific proxy types
         * (such as http).
         *
         * `direct://` is used when no proxy is needed.
         * Direct connection should not be attempted unless it is part of the
         * returned array of proxies.
         * @param uri a URI representing the destination to connect to
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @virtual
         */
        vfunc_lookup(uri: string, cancellable?: Gio.Cancellable | null): string[];
        /**
         * Asynchronous lookup of proxy. See `g_proxy_resolver_lookup()` for more
         * details.
         * @param uri a URI representing the destination to connect to
         * @param cancellable a {@link Gio.Cancellable}, or `null`
         * @param callback callback to call after resolution completes
         * @virtual
         */
        vfunc_lookup_async(
            uri: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Call this function to obtain the array of proxy URIs when
         * `g_proxy_resolver_lookup_async()` is complete. See
         * `g_proxy_resolver_lookup()` for more details.
         * @param result the result passed to your {@link Gio.AsyncReadyCallback}
         * @virtual
         */
        vfunc_lookup_finish(result: Gio.AsyncResult): string[];
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

    namespace ServerSideSourceCredentialsProvider {
        // Signal signatures
        interface SignalSignatures extends EDataServer.SourceCredentialsProvider.SignalSignatures {
            'notify::registry': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends EDataServer.SourceCredentialsProvider.ConstructorProps, EDataServer.Extensible.ConstructorProps {}
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     * @gir-type Class
     * @since 3.16
     */
    class ServerSideSourceCredentialsProvider
        extends EDataServer.SourceCredentialsProvider
        implements EDataServer.Extensible
    {
        static $gtype: GObject.GType<ServerSideSourceCredentialsProvider>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ServerSideSourceCredentialsProvider.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ServerSideSourceCredentialsProvider.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](registry: SourceRegistryServer): ServerSideSourceCredentialsProvider;
        // Conflicted with EDataServer.SourceCredentialsProvider.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof ServerSideSourceCredentialsProvider.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServerSideSourceCredentialsProvider.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ServerSideSourceCredentialsProvider.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ServerSideSourceCredentialsProvider.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ServerSideSourceCredentialsProvider.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ServerSideSourceCredentialsProvider.SignalSignatures[K]> extends [
                any,
                ...infer Q,
            ]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * Returns a list of {@link EDataServer.Extension} objects bound to `extensible` whose
         * types are ancestors of `extension_type`.  For a complete list of
         * extension objects bound to `extensible`, pass `E_TYPE_EXTENSION`.
         *
         * The list itself should be freed with `g_list_free()`.  The extension
         * objects are owned by `extensible` and should not be unreferenced.
         * @param extension_type the type of extensions to list
         * @returns a list of extension objects derived from `extension_type`
         */
        list_extensions(extension_type: GObject.GType): EDataServer.Extension[];
        /**
         * Creates an instance of all instantiable subtypes of {@link EDataServer.Extension} which
         * target the class of `extensible`.  The lifetimes of these newly created
         * {@link EDataServer.Extension} objects are bound to `extensible` such that they are finalized
         * when `extensible` is finalized.
         */
        load_extensions(): void;
        /**
         * Similar to `e_extensible_load_extensions()`, only loads newly discovered
         * extensions again. This can help in case a new module had been loaded
         * to the process, which provides the extensions for the `extensible`.
         */
        reload_extensions(): void;
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

    namespace SourceRegistryServer {
        // Signal signatures
        interface SignalSignatures extends DataFactory.SignalSignatures {
            /**
             * Emitted after all data source key files are loaded on startup.
             * Extensions can connect to this signal to perform any additional
             * work prior to running the main loop.
             * @signal
             * @run-last
             */
            'files-loaded': () => void;
            /**
             * Emitted when an error occurs while loading or parsing a
             * data source key file.
             * @signal
             * @run-last
             */
            'load-error': (arg0: Gio.File, arg1: GLib.Error) => void;
            /**
             * Emitted when an {@link EBackend.ServerSideSource} is added to `server`.
             * @signal
             * @run-last
             */
            'source-added': (arg0: ServerSideSource) => void;
            /**
             * Emitted when an {@link EBackend.ServerSideSource} is removed from `server`.
             * @signal
             * @run-last
             */
            'source-removed': (arg0: ServerSideSource) => void;
            /**
             * Emitted from `e_source_registry_server_load_file()` just prior
             * to instantiating an {@link EBackend.ServerSideSource}.  Signal handlers can
             * tweak the `key_file` content as necessary and return `true` to
             * write the modified content back to disk.
             *
             * For the purposes of tweaking, it's easier to deal with a plain
             * {@link GLib.KeyFile} than an {@link EDataServer.Source} instance.  An {@link EDataServer.Source}, for example,
             * does not allow key file groups to be removed.
             *
             * The return value is cumulative.  If any signal handler returns
             * `true`, the `key_file` content is written back to disk.
             * @signal
             * @since 3.8
             * @run-last
             */
            'tweak-key-file': (arg0: GLib.KeyFile, arg1: string) => boolean | void;
            'notify::backend-per-process': (pspec: GObject.ParamSpec) => void;
            'notify::registry': (pspec: GObject.ParamSpec) => void;
            'notify::reload-supported': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                DataFactory.ConstructorProps,
                OAuth2Support.ConstructorProps,
                EDataServer.Extensible.ConstructorProps,
                Gio.Initable.ConstructorProps {}
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     * @gir-type Class
     * @since 3.6
     */
    class SourceRegistryServer extends DataFactory implements OAuth2Support, EDataServer.Extensible, Gio.Initable {
        static $gtype: GObject.GType<SourceRegistryServer>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SourceRegistryServer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SourceRegistryServer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SourceRegistryServer;

        // Signals

        /** @signal */
        connect<K extends keyof SourceRegistryServer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SourceRegistryServer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SourceRegistryServer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SourceRegistryServer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SourceRegistryServer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SourceRegistryServer.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_files_loaded(): void;
        /**
         * Emits the {@link EBackend.SourceRegistryServer.SignalSignatures.load_error | EBackend.SourceRegistryServer::load-error} signal.
         * @param file the {@link Gio.File} that failed to load
         * @param error a {@link GLib.Error} describing the load error
         * @virtual
         */
        vfunc_load_error(file: Gio.File, error: GLib.Error): void;
        /**
         * @param source
         * @virtual
         */
        vfunc_source_added(source: EDataServer.Source): void;
        /**
         * @param source
         * @virtual
         */
        vfunc_source_removed(source: EDataServer.Source): void;
        /**
         * @param key_file
         * @param uid
         * @virtual
         */
        vfunc_tweak_key_file(key_file: GLib.KeyFile, uid: string): boolean;

        // Methods

        /**
         * Adds `source` to `server`.
         * @param source an {@link EDataServer.Source}
         */
        add_source(source: EDataServer.Source): void;
        /**
         * Examines `source` and its ancestors and returns the "deepest" {@link EDataServer.Source}
         * having an {@link EDataServer.SourceExtension} with the given `extension_name`.  If neither
         * `source` nor any of its ancestors have such an extension, the function
         * returns `null`.
         *
         * This function is useful in cases when an {@link EDataServer.SourceExtension} is meant to
         * apply to both the {@link EDataServer.Source} it belongs to and the {@link EDataServer.Source}'s descendants.
         *
         * A common example is the {@link EDataServer.SourceCollection} extension, where descendants
         * of an {@link EDataServer.Source} having an {@link EDataServer.SourceCollection} extension are implied to be
         * members of that collection.  In that example, this function can be used
         * to test whether `source` is a member of a collection.
         *
         * The returned {@link EDataServer.Source} is referenced for thread-safety and must be
         * unreferenced with `g_object_unref()` when finished with it.
         *
         * Note the function returns the {@link EDataServer.Source} containing the {@link EDataServer.SourceExtension}
         * instead of the {@link EDataServer.SourceExtension} itself because extension instances are
         * not to be referenced directly (see `e_source_get_extension()`).
         * @param source an {@link EDataServer.Source}
         * @param extension_name the extension name to find
         * @returns an {@link EDataServer.Source}, or `null` if no match was found
         */
        find_extension(source: EDataServer.Source, extension_name: string): EDataServer.Source | null;
        /**
         * @returns an {@link EDataServer.OAuth2Services} instance owned by `server`
         */
        get_oauth2_services(): EDataServer.OAuth2Services;
        /**
         * Returns a list of registered sources, sorted by display name.  If
         * `extension_name` is given, restrict the list to sources having that
         * extension name.
         *
         * The sources returned in the list are referenced for thread-safety.
         * They must each be unreferenced with `g_object_unref()` when finished
         * with them.  Free the returned {@link GLib.List} itself with `g_list_free()`.
         *
         * An easy way to free the list properly in one step is as follows:
         *
         *
         * ```
         *   g_list_free_full (list, g_object_unref);
         * ```
         *
         * @param extension_name an extension name, or `null`
         * @returns a sorted list of sources
         */
        list_sources(extension_name?: string | null): EDataServer.Source[];
        /**
         * Loads data source key files in `path`.  Because multiple errors can
         * occur when loading multiple files, `error` is only set if `path` can
         * not be opened.  If a key file fails to load, the error is broadcast
         * through the {@link EBackend.SourceRegistryServer.SignalSignatures.load_error | EBackend.SourceRegistryServer::load-error} signal.
         *
         * If the #E_SOURCE_PERMISSION_REMOVABLE flag is given, then the `server`
         * will emit signals on the D-Bus interface when key files are created or
         * deleted in `path`.
         * @param path the path to the directory to load
         * @param flags permission flags for files loaded from `path`
         * @returns `true` if `path` was successfully opened, but this          does not imply the key files were successfully loaded
         */
        load_directory(path: string, flags: SourcePermissionFlags | null): boolean;
        /**
         * Emits the {@link EBackend.SourceRegistryServer.SignalSignatures.load_error | EBackend.SourceRegistryServer::load-error} signal.
         * @param file the {@link Gio.File} that failed to load
         * @param error a {@link GLib.Error} describing the load error
         */
        load_error(file: Gio.File, error: GLib.Error): void;
        /**
         * Creates an {@link EDataServer.Source} for a native key file and adds it to `server`.
         * If an error occurs, the function returns `null` and sets `error`.
         *
         * The returned {@link EDataServer.Source} is referenced for thread-safety.  Unreference
         * the {@link EDataServer.Source} with `g_object_unref()` when finished with it.
         * @param file the data source key file to load
         * @param flags initial permission flags for the data source
         * @returns the newly-added {@link EDataServer.Source}, or `null` on error
         */
        load_file(file: Gio.File, flags: SourcePermissionFlags | null): EDataServer.Source | null;
        /**
         * Loads data source key files from `resource` by enumerating the children
         * at `path` and calling `e_source_registry_server_load_file()` on each child.
         * Because multiple errors can occur when loading multiple files, `error` is
         * only set if `path` is invalid.  If a key file fails to load, the error is
         * broadcast through the {@link EBackend.SourceRegistryServer.SignalSignatures.load_error | EBackend.SourceRegistryServer::load-error} signal.
         * @param resource a {@link Gio.Resource} containing data source key files
         * @param path the path to the data source key files inside `resource`
         * @param flags permission flags for files loaded from `path`
         * @returns `true` if `path` was successfully located, but this does not          imply the key files were successfully loaded
         */
        load_resource(resource: Gio.Resource, path: string, flags: SourcePermissionFlags | null): boolean;
        /**
         * Returns the {@link EBackend.CollectionBackend} associated with `source`, or `null` if
         * there is no {@link EBackend.CollectionBackend} associated with `source`.
         *
         * An {@link EDataServer.Source} is associated with an {@link EBackend.CollectionBackend} if the {@link EDataServer.Source} has
         * an {@link EDataServer.SourceCollection} extension, or if it is a hierarchical descendant of
         * another {@link EDataServer.Source} which has an {@link EDataServer.SourceCollection} extension.
         *
         * The returned {@link EBackend.CollectionBackend} is referenced for thread-safety.
         * Unreference the {@link EBackend.CollectionBackend} with `g_object_unref()` when finished
         * with it.
         * @param source an {@link EDataServer.Source}
         * @returns the {@link EBackend.CollectionBackend} for `source`, or `null`
         */
        ref_backend(source: EDataServer.Source): CollectionBackend | null;
        /**
         * Returns the {@link EBackend.CollectionBackendFactory} for `source`, if available.
         * If `source` does not have an {@link EDataServer.SourceCollection} extension, or if the
         * {@link EDataServer.SourceCollection} extension names an {@link EDataServer.SourceBackend.backend_name} for
         * which there is no corresponding {@link EBackend.CollectionBackendFactory}, the function
         * returns `null`.
         *
         * The returned {@link EBackend.CollectionBackendFactory} is referenced for thread-safety.
         * Unreference the {@link EBackend.CollectionBackendFactory} with `g_object_unref()` when
         * finished with it.
         * @param source an {@link EDataServer.Source}
         * @returns the {@link EBackend.CollectionBackendFactory} for `source`,    or `null`
         */
        ref_backend_factory(source: EDataServer.Source): CollectionBackendFactory | null;
        /**
         * @param args
         */
        // Conflicted with EBackend.DataFactory.ref_backend_factory
        ref_backend_factory(...args: never[]): any;
        /**
         * Returns a referenced {@link EDataServer.SourceCredentialsProvider}. Unref it with
         * `g_object_unref()`, when no longer needed.
         * @returns A referenced {@link EDataServer.SourceCredentialsProvider}.
         */
        ref_credentials_provider(): EDataServer.SourceCredentialsProvider;
        /**
         * Returns the default {@link EBackend.OAuth2Support} implementation, which can be used when
         * the source doesn't have it overwritten.
         *
         * Free the returned object with `g_object_unref()`, when no longer needed.
         * @returns the default {@link EBackend.OAuth2Support},    or `null`, when none exists
         */
        ref_oauth2_support(): OAuth2Support | null;
        /**
         * Looks up an {@link EDataServer.Source} in `server` by its unique identifier string.
         *
         * The returned {@link EDataServer.Source} is referenced for thread-safety and must be
         * unreferenced with `g_object_unref()` when finished with it.
         * @param uid a unique identifier string
         * @returns an {@link EDataServer.Source}, or `null` if no match was found
         */
        ref_source(uid: string): EDataServer.Source | null;
        /**
         * Removes `source` and all of its descendants from `server`.
         * @param source an {@link EDataServer.Source}
         */
        remove_source(source: EDataServer.Source): void;
        /**
         * Asynchronously obtains the OAuth 2.0 access token for `source` along
         * with its expiry in seconds from the current time (or 0 if unknown).
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_oauth2_support_get_access_token_finish()` to get the result of the
         * operation.
         * @param source an {@link EDataServer.Source}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         */
        get_access_token(
            source: EDataServer.Source,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[string, number]>;
        /**
         * Asynchronously obtains the OAuth 2.0 access token for `source` along
         * with its expiry in seconds from the current time (or 0 if unknown).
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_oauth2_support_get_access_token_finish()` to get the result of the
         * operation.
         * @param source an {@link EDataServer.Source}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_access_token(
            source: EDataServer.Source,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously obtains the OAuth 2.0 access token for `source` along
         * with its expiry in seconds from the current time (or 0 if unknown).
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_oauth2_support_get_access_token_finish()` to get the result of the
         * operation.
         * @param source an {@link EDataServer.Source}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_access_token(
            source: EDataServer.Source,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[string, number]> | void;
        /**
         * Finishes the operation started with `e_oauth2_support_get_access_token()`.
         *
         * Free the returned access token with `g_free()` when finished with it.
         * If an error occurred, the function will set `error` and return `false`.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` on success, `false` on failure
         */
        get_access_token_finish(result: Gio.AsyncResult): [boolean, string, number];
        /**
         * Obtains the OAuth 2.0 access token for `source` along with its expiry
         * in seconds from the current time (or 0 if unknown).
         *
         * Free the returned access token with `g_free()` when finished with it.
         * If an error occurs, the function will set `error` and return `false`.
         * @param source an {@link EDataServer.Source}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns `true` on success, `false` on failure
         */
        get_access_token_sync(
            source: EDataServer.Source,
            cancellable: Gio.Cancellable | null,
        ): [boolean, string, number];
        /**
         * Asynchronously obtains the OAuth 2.0 access token for `source` along
         * with its expiry in seconds from the current time (or 0 if unknown).
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_oauth2_support_get_access_token_finish()` to get the result of the
         * operation.
         * @param source an {@link EDataServer.Source}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @virtual
         */
        vfunc_get_access_token(
            source: EDataServer.Source,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes the operation started with `e_oauth2_support_get_access_token()`.
         *
         * Free the returned access token with `g_free()` when finished with it.
         * If an error occurred, the function will set `error` and return `false`.
         * @param result a {@link Gio.AsyncResult}
         * @virtual
         */
        vfunc_get_access_token_finish(result: Gio.AsyncResult): [boolean, string, number];
        /**
         * Obtains the OAuth 2.0 access token for `source` along with its expiry
         * in seconds from the current time (or 0 if unknown).
         *
         * Free the returned access token with `g_free()` when finished with it.
         * If an error occurs, the function will set `error` and return `false`.
         * @param source an {@link EDataServer.Source}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @virtual
         */
        vfunc_get_access_token_sync(
            source: EDataServer.Source,
            cancellable: Gio.Cancellable | null,
        ): [boolean, string, number];
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

    namespace SubprocessFactory {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::registry': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            registry: EDataServer.SourceRegistry;
        }
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     * @gir-type Class
     * @since 3.16
     */
    class SubprocessFactory extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<SubprocessFactory>;

        // Properties

        /**
         * Data source registry
         * @read-only
         */
        get registry(): EDataServer.SourceRegistry;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SubprocessFactory.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SubprocessFactory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof SubprocessFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SubprocessFactory.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SubprocessFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SubprocessFactory.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SubprocessFactory.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SubprocessFactory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Returns a new and unique object path for a D-Bus interface based
         * in the data object path prefix of the `subprocess_factory`
         */
        static construct_path(): string;

        // Virtual methods

        /**
         * @param backend
         * @virtual
         */
        vfunc_backend_closed(backend: Backend): void;
        /**
         * @param backend
         * @virtual
         */
        vfunc_backend_created(backend: Backend): void;
        /**
         * @param backend
         * @param connection
         * @param data
         * @param cancellable
         * @virtual
         */
        vfunc_open_data(
            backend: Backend,
            connection: Gio.DBusConnection,
            data?: any | null,
            cancellable?: Gio.Cancellable | null,
        ): string;

        // Methods

        /**
         * Calls `e_backend_prepare_shutdown()` for the list of used backends.
         */
        call_backends_prepare_shutdown(): void;
        /**
         * Returns a list of used backends.
         * @returns A {@link GLib.List} that contains a    list of used backends. The list should be freed by the caller using:    g_list_free_full (backends, g_object_unref).
         */
        get_backends_list(): Backend[];
        /**
         * Returns the {@link EDataServer.SourceRegistry} owned by `subprocess_factory`.
         * @returns the {@link EDataServer.SourceRegistry}
         */
        get_registry(): EDataServer.SourceRegistry;
        /**
         * Returns the {@link EBackend.Backend} data D-Bus object path
         * @param connection a {@link Gio.DBusConnection}
         * @param uid UID of an {@link EDataServer.Source} to open
         * @param backend_factory_type_name the name of the backend factory type
         * @param module_filename the name (full-path) of the backend module to be loaded
         * @param proxy a {@link Gio.DBusInterfaceSkeleton}, used to communicate to the subprocess backend
         * @param cancellable a {@link Gio.Cancellable}
         * @returns a newly allocated string that represents the {@link EBackend.Backend}          data D-Bus object path.
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
         * Returns either a newly-created or existing {@link EBackend.Backend} for {@link EDataServer.Source}.
         * The returned {@link EBackend.Backend} is referenced for thread-safety and must be
         * unreferenced with `g_object_unref()` when finished with it.
         *
         * If the newly-created backend implements the {@link Gio.Initable} interface, then
         * `g_initable_init()` is also called on it using `cancellable` and `error`.
         *
         * The `subprocess_factory` retains a strong reference to `backend`.
         *
         * If no suitable {@link EBackend.BackendFactory} exists, or if the {@link EBackend.Backend} fails to
         * initialize, the function sets `error` and returns `null`.
         * @param uid UID of an {@link EDataServer.Source} to open
         * @param backend_factory_type_name the name of the backend factory type
         * @param module_filename the name (full-path) of the backend module to be loaded
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns an {@link EBackend.Backend} for `source`, or `null`
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
         * @param backend an {@link EBackend.Backend}
         * @param proxy a {@link Gio.DBusInterfaceSkeleton}, used to communicate to the subprocess backend
         */
        set_backend_callbacks(backend: Backend, proxy: Gio.DBusInterfaceSkeleton): void;
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

    namespace UserPrompter {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     * @gir-type Class
     * @since 3.8
     */
    class UserPrompter extends GObject.Object {
        static $gtype: GObject.GType<UserPrompter>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UserPrompter.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<UserPrompter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): UserPrompter;

        // Signals

        /** @signal */
        connect<K extends keyof UserPrompter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserPrompter.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof UserPrompter.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserPrompter.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof UserPrompter.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<UserPrompter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Asynchronously prompt a user for a decision on an extension-provided dialog.
         * The caller usually provides an extension for {@link EBackend.UserPrompterServer}, a descendant
         * of {@link EBackend.UserPrompterServerExtension}, which registers itself as a dialog provider.
         * The extension defines `dialog_name`, same as meaning of `in_parameters`;
         * only the extension and the caller know about meaning of these.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_user_prompter_extension_prompt_finish()` to get the result of the operation.
         * If there is no extension providing given dialog name, the operation finishes with
         * a G_IO_ERROR, G_IO_ERROR_NOT_FOUND {@link GLib.Error}.
         * @param dialog_name name of a dialog to invoke
         * @param in_parameters optional parameters to pass to extension; can be `null`
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         */
        extension_prompt(
            dialog_name: string,
            in_parameters?: EDataServer.NamedParameters | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<number>;
        /**
         * Asynchronously prompt a user for a decision on an extension-provided dialog.
         * The caller usually provides an extension for {@link EBackend.UserPrompterServer}, a descendant
         * of {@link EBackend.UserPrompterServerExtension}, which registers itself as a dialog provider.
         * The extension defines `dialog_name`, same as meaning of `in_parameters`;
         * only the extension and the caller know about meaning of these.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_user_prompter_extension_prompt_finish()` to get the result of the operation.
         * If there is no extension providing given dialog name, the operation finishes with
         * a G_IO_ERROR, G_IO_ERROR_NOT_FOUND {@link GLib.Error}.
         * @param dialog_name name of a dialog to invoke
         * @param in_parameters optional parameters to pass to extension; can be `null`
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        extension_prompt(
            dialog_name: string,
            in_parameters: EDataServer.NamedParameters | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously prompt a user for a decision on an extension-provided dialog.
         * The caller usually provides an extension for {@link EBackend.UserPrompterServer}, a descendant
         * of {@link EBackend.UserPrompterServerExtension}, which registers itself as a dialog provider.
         * The extension defines `dialog_name`, same as meaning of `in_parameters`;
         * only the extension and the caller know about meaning of these.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_user_prompter_extension_prompt_finish()` to get the result of the operation.
         * If there is no extension providing given dialog name, the operation finishes with
         * a G_IO_ERROR, G_IO_ERROR_NOT_FOUND {@link GLib.Error}.
         * @param dialog_name name of a dialog to invoke
         * @param in_parameters optional parameters to pass to extension; can be `null`
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        extension_prompt(
            dialog_name: string,
            in_parameters?: EDataServer.NamedParameters | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<number> | void;
        /**
         * Finishes the operation started with `e_user_prompter_extension_prompt()`.
         * Caller can provide `out_values` to get additional values provided by the extension.
         * In case the caller is not interested in additional values, it can pass `null` `out_values`.
         * The `out_values` will be cleared first, then any values will be added there.
         * Only the caller and the extension know about meaning of the result code and
         * additional values.
         *
         * If an error occurred, the function sets `error` and returns -1. If there is
         * no extension providing given dialog name, the operation finishes with
         * a G_IO_ERROR, G_IO_ERROR_NOT_FOUND `error`.
         * @param result a {@link Gio.AsyncResult}
         * @param out_values Where to store values from the extension, or `null`
         * @returns Result code of the prompt, as defined by the extension, or -1 on error.
         */
        extension_prompt_finish(result: Gio.AsyncResult, out_values?: EDataServer.NamedParameters | null): number;
        /**
         * Synchronously prompt a user for a decision on an extension-provided dialog.
         * The caller usually provides an extension for {@link EBackend.UserPrompterServer}, a descendant
         * of {@link EBackend.UserPrompterServerExtension}, which registers itself as a dialog provider.
         * The extension defines `dialog_name`, same as meaning of `in_parameters`;
         * only the extension and the caller know about meaning of these.
         *
         * Caller can provide `out_values` to get additional values provided by the extension.
         * In case the caller is not interested in additional values, it can pass `null` `out_values`.
         * The `out_values` will be cleared first, then any values will be added there.
         * Only the caller and the extension know about meaning of the result code and
         * additional values.
         *
         * If an error occurred, the function sets `error` and returns -1. If there is
         * no extension providing given dialog name, the operation finishes with
         * a G_IO_ERROR, G_IO_ERROR_NOT_FOUND `error`.
         * @param dialog_name name of a dialog to invoke
         * @param in_parameters optional parameters to pass to extension; can be `null`
         * @param out_values Where to store values from the extension, or `null`
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
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
         * If `button_captions` is `null` or empty list, then only one button is shown in
         * the prompt, a "Dismiss" button.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_user_prompter_prompt_finish()` to get the result of the operation.
         * @param type type of the prompt; can be `null`
         * @param title window title of the prompt; can be `null`
         * @param primary_text primary text of the prompt; can be `null`
         * @param secondary_text secondary text of the prompt; can be `null`
         * @param use_markup whether both texts are with markup
         * @param button_captions captions of buttons to    use in the message; can be `null`
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         */
        prompt(
            type: string | null,
            title: string | null,
            primary_text: string | null,
            secondary_text: string | null,
            use_markup: boolean,
            button_captions?: string[] | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<number>;
        /**
         * Asynchronously prompt a user for a decision.
         *
         * The `type` can be one of "info", "warning", "question" or "error", to include
         * an icon in the message prompt; anything else results in no icon in the message.
         *
         * If `button_captions` is `null` or empty list, then only one button is shown in
         * the prompt, a "Dismiss" button.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_user_prompter_prompt_finish()` to get the result of the operation.
         * @param type type of the prompt; can be `null`
         * @param title window title of the prompt; can be `null`
         * @param primary_text primary text of the prompt; can be `null`
         * @param secondary_text secondary text of the prompt; can be `null`
         * @param use_markup whether both texts are with markup
         * @param button_captions captions of buttons to    use in the message; can be `null`
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        prompt(
            type: string | null,
            title: string | null,
            primary_text: string | null,
            secondary_text: string | null,
            use_markup: boolean,
            button_captions: string[] | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously prompt a user for a decision.
         *
         * The `type` can be one of "info", "warning", "question" or "error", to include
         * an icon in the message prompt; anything else results in no icon in the message.
         *
         * If `button_captions` is `null` or empty list, then only one button is shown in
         * the prompt, a "Dismiss" button.
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_user_prompter_prompt_finish()` to get the result of the operation.
         * @param type type of the prompt; can be `null`
         * @param title window title of the prompt; can be `null`
         * @param primary_text primary text of the prompt; can be `null`
         * @param secondary_text secondary text of the prompt; can be `null`
         * @param use_markup whether both texts are with markup
         * @param button_captions captions of buttons to    use in the message; can be `null`
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
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
        ): globalThis.Promise<number> | void;
        /**
         * Finishes the operation started with `e_user_prompter_prompt()`.
         *
         * If an error occurred, the function sets `error` and returns -1.
         * @param result a {@link Gio.AsyncResult}
         * @returns 0-based index of a button being used by a user as a response,   corresponding to 'button_captions' from `e_user_prompter_prompt()` call.
         */
        prompt_finish(result: Gio.AsyncResult): number;
        /**
         * Prompts a user for a decision.
         *
         * The `type` can be one of "info", "warning", "question" or "error", to include
         * an icon in the message prompt; anything else results in no icon in the message.
         *
         * If `button_captions` is `null` or empty list, then only one button is shown in
         * the prompt, a "Dismiss" button.
         *
         * If an error occurred, the function sets `error` and returns -1.
         * @param type type of the prompt; can be `null`
         * @param title window title of the prompt; can be `null`
         * @param primary_text primary text of the prompt; can be `null`
         * @param secondary_text secondary text of the prompt; can be `null`
         * @param use_markup whether both texts are with markup
         * @param button_captions captions of buttons to    use in the message; can be `null`
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns 0-based index of a button being used by a user as a response,   corresponding to `button_captions` list.
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

    namespace UserPrompterServer {
        // Signal signatures
        interface SignalSignatures extends DBusServer.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            prompt: (
                arg0: number,
                arg1: string | null,
                arg2: string | null,
                arg3: string | null,
                arg4: string | null,
                arg5: boolean,
                arg6: string[] | null,
            ) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends DBusServer.ConstructorProps, EDataServer.Extensible.ConstructorProps {}
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     * @gir-type Class
     * @since 3.8
     */
    class UserPrompterServer extends DBusServer implements EDataServer.Extensible {
        static $gtype: GObject.GType<UserPrompterServer>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UserPrompterServer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<UserPrompterServer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): UserPrompterServer;

        // Signals

        /** @signal */
        connect<K extends keyof UserPrompterServer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserPrompterServer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof UserPrompterServer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserPrompterServer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof UserPrompterServer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<UserPrompterServer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Registers `extension` as a provider of `dialog_name` dialog. The names
         * are compared case sensitively and two extensions cannot provide
         * the same dialog. If the function succeeds, then it adds its own
         * reference on the `extension`.
         *
         * Extensions providing multiple dialogs call this function multiple
         * times, for each dialog name separately.
         * @param extension an {@link EBackend.UserPrompterServerExtension} descendant
         * @param dialog_name name of a dialog, which the `extensions` implement
         * @returns Whether properly registered `extension`
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
        /**
         * Returns a list of {@link EDataServer.Extension} objects bound to `extensible` whose
         * types are ancestors of `extension_type`.  For a complete list of
         * extension objects bound to `extensible`, pass `E_TYPE_EXTENSION`.
         *
         * The list itself should be freed with `g_list_free()`.  The extension
         * objects are owned by `extensible` and should not be unreferenced.
         * @param extension_type the type of extensions to list
         * @returns a list of extension objects derived from `extension_type`
         */
        list_extensions(extension_type: GObject.GType): EDataServer.Extension[];
        /**
         * Creates an instance of all instantiable subtypes of {@link EDataServer.Extension} which
         * target the class of `extensible`.  The lifetimes of these newly created
         * {@link EDataServer.Extension} objects are bound to `extensible` such that they are finalized
         * when `extensible` is finalized.
         */
        load_extensions(): void;
        /**
         * Similar to `e_extensible_load_extensions()`, only loads newly discovered
         * extensions again. This can help in case a new module had been loaded
         * to the process, which provides the extensions for the `extensible`.
         */
        reload_extensions(): void;
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

    namespace UserPrompterServerExtension {
        // Signal signatures
        interface SignalSignatures extends EDataServer.Extension.SignalSignatures {
            'notify::extensible': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends EDataServer.Extension.ConstructorProps {}
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     * @gir-type Class
     * @since 3.8
     */
    abstract class UserPrompterServerExtension extends EDataServer.Extension {
        static $gtype: GObject.GType<UserPrompterServerExtension>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UserPrompterServerExtension.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<UserPrompterServerExtension.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof UserPrompterServerExtension.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserPrompterServerExtension.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof UserPrompterServerExtension.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserPrompterServerExtension.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof UserPrompterServerExtension.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<UserPrompterServerExtension.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Instructs extension to show dialog `dialog_name`. If it cannot be found,
         * or any error, then return `false`. The caller can pass optional `parameters`,
         * if `extension` uses any. Meaning of `parameters` is known only to the caller
         * and to the dialog implementor, it's not interpretted nor checked for correctness
         * in any way in {@link EBackend.UserPrompterServer}. The only limitation of `parameters` is that
         * the array elements are strings.
         *
         * The `prompt_id` is used as an identificator of the prompt itself,
         * and is used in `e_user_prompter_server_extension_response()` call,
         * which finishes the prompt.
         *
         * Note: The function call should not block main loop, it should
         * just show dialog and return.
         * @param prompt_id Prompt identificator, which is used in call to `e_user_prompter_server_extension_response()`
         * @param dialog_name Name of a dialog to run
         * @param parameters Optional extension parameters for the dialog, as passed by a caller
         * @virtual
         */
        vfunc_prompt(prompt_id: number, dialog_name: string, parameters?: EDataServer.NamedParameters | null): boolean;

        // Methods

        /**
         * Instructs extension to show dialog `dialog_name`. If it cannot be found,
         * or any error, then return `false`. The caller can pass optional `parameters`,
         * if `extension` uses any. Meaning of `parameters` is known only to the caller
         * and to the dialog implementor, it's not interpretted nor checked for correctness
         * in any way in {@link EBackend.UserPrompterServer}. The only limitation of `parameters` is that
         * the array elements are strings.
         *
         * The `prompt_id` is used as an identificator of the prompt itself,
         * and is used in `e_user_prompter_server_extension_response()` call,
         * which finishes the prompt.
         *
         * Note: The function call should not block main loop, it should
         * just show dialog and return.
         * @param prompt_id Prompt identificator, which is used in call to `e_user_prompter_server_extension_response()`
         * @param dialog_name Name of a dialog to run
         * @param parameters Optional extension parameters for the dialog, as passed by a caller
         * @returns Whether dialog was found and shown.
         */
        prompt(prompt_id: number, dialog_name: string, parameters?: EDataServer.NamedParameters | null): boolean;
        /**
         * A conveniente wrapper function around `e_user_prompter_server_response()`,
         * which ends previous call of `e_user_prompter_server_extension_prompt()`.
         * The `response` and `values` is known only to the caller and to the dialog implementor,
         * it's not interpretted nor checked for correctness in any way in {@link EBackend.UserPrompterServer}.
         * The only limitation of `values` is that the array elements are strings.
         * @param prompt_id Prompt identificator
         * @param response Response of the prompt
         * @param values Additional response values, if extension defines any
         */
        response(prompt_id: number, response: number, values?: EDataServer.NamedParameters | null): void;
    }

    namespace WebDAVCollectionBackend {
        // Signal signatures
        interface SignalSignatures extends CollectionBackend.SignalSignatures {
            'notify::proxy-resolver': (pspec: GObject.ParamSpec) => void;
            'notify::server': (pspec: GObject.ParamSpec) => void;
            'notify::connectable': (pspec: GObject.ParamSpec) => void;
            'notify::main-context': (pspec: GObject.ParamSpec) => void;
            'notify::online': (pspec: GObject.ParamSpec) => void;
            'notify::source': (pspec: GObject.ParamSpec) => void;
            'notify::user-prompter': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends CollectionBackend.ConstructorProps {}
    }

    /**
     * Contains only private data that should be read and manipulated using the
     * functions below.
     * @gir-type Class
     * @since 3.26
     */
    class WebDAVCollectionBackend extends CollectionBackend {
        static $gtype: GObject.GType<WebDAVCollectionBackend>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WebDAVCollectionBackend.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WebDAVCollectionBackend.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof WebDAVCollectionBackend.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebDAVCollectionBackend.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WebDAVCollectionBackend.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebDAVCollectionBackend.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WebDAVCollectionBackend.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WebDAVCollectionBackend.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Verifies that the `source` is expected here and returns its resource ID,
         * which is used in call to `e_collection_backend_new_child()`. It returns `null`,
         * when the `source` is not part of the backend and should be removed instead.
         * The default implementation allows all sources, which has %ESourceResource
         * extension defined.
         * @param source an {@link EDataServer.Source}
         * @virtual
         */
        vfunc_get_resource_id(source: EDataServer.Source): string | null;
        /**
         * @param source an {@link EDataServer.Source}
         * @virtual
         */
        vfunc_is_custom_source(source: EDataServer.Source): boolean;

        // Methods

        /**
         * This function is usually called in EBackend::authenticate_sync() implementation
         * of the descendant, causing discovery of CalDAV and CardDAV sources on given URLs.
         * If either of `calendar_url` and `contacts_url` is `null`, that that part is skipped.
         * The `calendar_url` covers all calendars, memo lists and task lists.
         *
         * The function also takes care of `e_collection_backend_authenticate_children()` on success.
         * @param calendar_url a URL to search calendars at, or `null`
         * @param contacts_url a URL to search contacts at, or `null`
         * @param credentials credentials to use when running the discovery
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns an {@link EDataServer.SourceAuthenticationResult} describing whether discovery on given    addresses succeeded.
         */
        discover_sync(
            calendar_url: string | null,
            contacts_url: string | null,
            credentials: EDataServer.NamedParameters,
            cancellable?: Gio.Cancellable | null,
        ): [EDataServer.SourceAuthenticationResult, string, Gio.TlsCertificateFlags | null];
        /**
         * Verifies that the `source` is expected here and returns its resource ID,
         * which is used in call to `e_collection_backend_new_child()`. It returns `null`,
         * when the `source` is not part of the backend and should be removed instead.
         * The default implementation allows all sources, which has %ESourceResource
         * extension defined.
         * @param source an {@link EDataServer.Source}
         * @returns a resource ID corresponding to `source`,    or `null`, when the `source` should be removed.
         */
        get_resource_id(source: EDataServer.Source): string | null;
        /**
         * @param source an {@link EDataServer.Source}
         * @returns `true`, when the `source` is a custom source, thus it    should not be removed as an obsolete source; `false` to not    force to keep it. It still can be left, when it's one of    the WebDAV-discovered sources.
         */
        is_custom_source(source: EDataServer.Source): boolean;
    }

    /**
     * @gir-type Alias
     */
    type BackendClass = typeof Backend;
    /**
     * @gir-type Alias
     */
    type BackendFactoryClass = typeof BackendFactory;
    /**
     * @gir-type Struct
     */
    abstract class BackendFactoryPrivate {
        static $gtype: GObject.GType<BackendFactoryPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class BackendPrivate {
        static $gtype: GObject.GType<BackendPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type CacheClass = typeof Cache;
    /**
     * @gir-type Struct
     */
    class CacheColumnInfo {
        static $gtype: GObject.GType<CacheColumnInfo>;

        // Fields

        name: string;
        type: string;
        index_name: string;

        // Constructors

        constructor(
            properties?: Partial<{
                name: string;
                type: string;
                index_name: string;
            }>,
        );

        static ['new'](name: string, type: string, index_name?: string | null): CacheColumnInfo;

        // Static methods

        /**
         * Frees the `info` structure, previously allocated with `e_cache_column_info_new()`
         * or `e_cache_column_info_copy()`.
         * @param info an {@link EBackend.CacheColumnInfo}
         */
        static free(info?: any | null): void;

        // Methods

        /**
         * @returns Copy of the given `info`.    Free it with `e_cache_column_info_free()` when no longer needed.    If the `info` is `null`, then returns `null` as well.
         */
        copy(): CacheColumnInfo | null;
    }

    /**
     * @gir-type Struct
     */
    class CacheColumnValues {
        static $gtype: GObject.GType<CacheColumnValues>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): CacheColumnValues;

        // Methods

        /**
         * @param name a column name
         * @returns Whether `other_columns` contains column named `name`.
         */
        contains(name: string): boolean;
        /**
         * @returns Copy of the `other_columns`. Free with    `e_cache_column_values_free()`, when no longer needed.
         */
        copy(): CacheColumnValues;
        /**
         * Frees previously allocated `other_columns` with
         * `e_cache_column_values_new()` or `e_cache_column_values_copy()`.
         */
        free(): void;
        /**
         * @returns How many columns are stored in the `other_columns`.
         */
        get_size(): number;
        /**
         * Initialized the `iter`, thus the `other_columns` can be traversed
         * with `g_hash_table_iter_next()`. The key is a column name and
         * the value is the corresponding column value.
         * @param iter a {@link GLib.HashTableIter}
         */
        init_iter(iter: GLib.HashTableIter): void;
        /**
         * Looks up currently stored value for the column named `name`.
         * As the values can be `null` one cannot distinguish between
         * a column which doesn't have stored any value and a column
         * which has stored `null` value. Use `e_cache_column_values_contains()`
         * to check whether such column exitst in the `other_columns`.
         * The returned pointer is owned by `other_columns` and is valid until
         * the value is overwritten of the `other_columns` freed.
         * @param name a column name
         * @returns Stored value for the column named `name`,    or `null`, if no such column values is stored.
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
         * Removes all values from the `other_columns`, leaving it empty.
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
         * column, then it is replaced. This creates a copy of the `name`, but
         * takes owner ship of the `value`.
         * @param name a column name
         * @param value a column value
         */
        take_value(name: string, value?: string | null): void;
    }

    /**
     * @gir-type Alias
     */
    type CacheKeysClass = typeof CacheKeys;
    /**
     * @gir-type Struct
     */
    abstract class CacheKeysPrivate {
        static $gtype: GObject.GType<CacheKeysPrivate>;
    }

    /**
     * Holds the information about offline change for one object.
     * @gir-type Struct
     * @since 3.26
     */
    class CacheOfflineChange {
        static $gtype: GObject.GType<CacheOfflineChange>;

        // Fields

        uid: string;
        revision: string;
        object: string;
        state: OfflineState;

        // Constructors

        constructor(uid: string, revision: string | null, object: string | null, state: OfflineState);

        static ['new'](
            uid: string,
            revision: string | null,
            object: string | null,
            state: OfflineState,
        ): CacheOfflineChange;

        // Static methods

        /**
         * Frees the `change` structure, previously allocated with `e_cache_offline_change_new()`
         * or `e_cache_offline_change_copy()`.
         * @param change an {@link EBackend.CacheOfflineChange}
         */
        static free(change?: any | null): void;

        // Methods

        /**
         * @returns Copy of the given `change`.    Free it with `e_cache_offline_change_free()` when no longer    needed. If the `change` is `null`, then returns `null` as well.
         */
        copy(): CacheOfflineChange | null;
    }

    /**
     * @gir-type Struct
     */
    abstract class CachePrivate {
        static $gtype: GObject.GType<CachePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type CacheReaperClass = typeof CacheReaper;
    /**
     * @gir-type Alias
     */
    type CollectionBackendClass = typeof CollectionBackend;
    /**
     * @gir-type Alias
     */
    type CollectionBackendFactoryClass = typeof CollectionBackendFactory;
    /**
     * @gir-type Struct
     */
    abstract class CollectionBackendFactoryPrivate {
        static $gtype: GObject.GType<CollectionBackendFactoryPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class CollectionBackendPrivate {
        static $gtype: GObject.GType<CollectionBackendPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DBusServerClass = typeof DBusServer;
    /**
     * @gir-type Struct
     */
    abstract class DBusServerPrivate {
        static $gtype: GObject.GType<DBusServerPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type DataFactoryClass = typeof DataFactory;
    /**
     * @gir-type Struct
     */
    abstract class DataFactoryPrivate {
        static $gtype: GObject.GType<DataFactoryPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type FileCacheClass = typeof FileCache;
    /**
     * @gir-type Struct
     */
    abstract class FileCachePrivate {
        static $gtype: GObject.GType<FileCachePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type OAuth2SupportInterface = typeof OAuth2Support;
    /**
     * @gir-type Alias
     */
    type ServerSideSourceClass = typeof ServerSideSource;
    /**
     * @gir-type Alias
     */
    type ServerSideSourceCredentialsProviderClass = typeof ServerSideSourceCredentialsProvider;
    /**
     * @gir-type Struct
     */
    abstract class ServerSideSourceCredentialsProviderPrivate {
        static $gtype: GObject.GType<ServerSideSourceCredentialsProviderPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class ServerSideSourcePrivate {
        static $gtype: GObject.GType<ServerSideSourcePrivate>;
    }

    /**
     * @gir-type Alias
     */
    type SourceRegistryServerClass = typeof SourceRegistryServer;
    /**
     * @gir-type Struct
     */
    abstract class SourceRegistryServerPrivate {
        static $gtype: GObject.GType<SourceRegistryServerPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type SubprocessFactoryClass = typeof SubprocessFactory;
    /**
     * @gir-type Struct
     */
    abstract class SubprocessFactoryPrivate {
        static $gtype: GObject.GType<SubprocessFactoryPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type UserPrompterClass = typeof UserPrompter;
    /**
     * @gir-type Struct
     */
    abstract class UserPrompterPrivate {
        static $gtype: GObject.GType<UserPrompterPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type UserPrompterServerClass = typeof UserPrompterServer;
    /**
     * @gir-type Alias
     */
    type UserPrompterServerExtensionClass = typeof UserPrompterServerExtension;
    /**
     * @gir-type Struct
     */
    abstract class UserPrompterServerExtensionPrivate {
        static $gtype: GObject.GType<UserPrompterServerExtensionPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class UserPrompterServerPrivate {
        static $gtype: GObject.GType<UserPrompterServerPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type WebDAVCollectionBackendClass = typeof WebDAVCollectionBackend;
    /**
     * @gir-type Struct
     */
    abstract class WebDAVCollectionBackendPrivate {
        static $gtype: GObject.GType<WebDAVCollectionBackendPrivate>;
    }

    namespace OAuth2Support {
        /**
         * Interface for implementing OAuth2Support.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Asynchronously obtains the OAuth 2.0 access token for `source` along
             * with its expiry in seconds from the current time (or 0 if unknown).
             *
             * When the operation is finished, `callback` will be called.  You can then
             * call `e_oauth2_support_get_access_token_finish()` to get the result of the
             * operation.
             * @param source an {@link EDataServer.Source}
             * @param cancellable optional {@link Gio.Cancellable} object, or `null`
             * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
             * @virtual
             */
            vfunc_get_access_token(
                source: EDataServer.Source,
                cancellable?: Gio.Cancellable | null,
                callback?: Gio.AsyncReadyCallback<this> | null,
            ): void;
            /**
             * Finishes the operation started with `e_oauth2_support_get_access_token()`.
             *
             * Free the returned access token with `g_free()` when finished with it.
             * If an error occurred, the function will set `error` and return `false`.
             * @param result a {@link Gio.AsyncResult}
             * @virtual
             */
            vfunc_get_access_token_finish(result: Gio.AsyncResult): [boolean, string, number];
            /**
             * Obtains the OAuth 2.0 access token for `source` along with its expiry
             * in seconds from the current time (or 0 if unknown).
             *
             * Free the returned access token with `g_free()` when finished with it.
             * If an error occurs, the function will set `error` and return `false`.
             * @param source an {@link EDataServer.Source}
             * @param cancellable optional {@link Gio.Cancellable} object, or `null`
             * @virtual
             */
            vfunc_get_access_token_sync(
                source: EDataServer.Source,
                cancellable: Gio.Cancellable | null,
            ): [boolean, string, number];
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface OAuth2SupportNamespace {
        $gtype: GObject.GType<OAuth2Support>;
        prototype: OAuth2Support;
    }
    /**
     * @gir-type Interface
     * @since 3.8
     */
    interface OAuth2Support extends GObject.Object, OAuth2Support.Interface {
        // Methods

        /**
         * Asynchronously obtains the OAuth 2.0 access token for `source` along
         * with its expiry in seconds from the current time (or 0 if unknown).
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_oauth2_support_get_access_token_finish()` to get the result of the
         * operation.
         * @param source an {@link EDataServer.Source}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         */
        get_access_token(
            source: EDataServer.Source,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[string, number]>;
        /**
         * Asynchronously obtains the OAuth 2.0 access token for `source` along
         * with its expiry in seconds from the current time (or 0 if unknown).
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_oauth2_support_get_access_token_finish()` to get the result of the
         * operation.
         * @param source an {@link EDataServer.Source}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_access_token(
            source: EDataServer.Source,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously obtains the OAuth 2.0 access token for `source` along
         * with its expiry in seconds from the current time (or 0 if unknown).
         *
         * When the operation is finished, `callback` will be called.  You can then
         * call `e_oauth2_support_get_access_token_finish()` to get the result of the
         * operation.
         * @param source an {@link EDataServer.Source}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_access_token(
            source: EDataServer.Source,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[string, number]> | void;
        /**
         * Finishes the operation started with `e_oauth2_support_get_access_token()`.
         *
         * Free the returned access token with `g_free()` when finished with it.
         * If an error occurred, the function will set `error` and return `false`.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` on success, `false` on failure
         */
        get_access_token_finish(result: Gio.AsyncResult): [boolean, string, number];
        /**
         * Obtains the OAuth 2.0 access token for `source` along with its expiry
         * in seconds from the current time (or 0 if unknown).
         *
         * Free the returned access token with `g_free()` when finished with it.
         * If an error occurs, the function will set `error` and return `false`.
         * @param source an {@link EDataServer.Source}
         * @param cancellable optional {@link Gio.Cancellable} object, or `null`
         * @returns `true` on success, `false` on failure
         */
        get_access_token_sync(
            source: EDataServer.Source,
            cancellable: Gio.Cancellable | null,
        ): [boolean, string, number];
    }

    export const OAuth2Support: OAuth2SupportNamespace & {
        new (): OAuth2Support; // This allows `obj instanceof OAuth2Support`
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

export default EBackend;

// END
