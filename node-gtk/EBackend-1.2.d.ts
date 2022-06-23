// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * EBackend-1.2
 */

import type libxml2 from './libxml2-2.0';
import type Soup from './Soup-2.4';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type EDataServer from './EDataServer-1.2';
import type GData from './GData-0.0';
import type Json from './Json-1.0';
import type Goa from './Goa-1.0';
import type Camel from './Camel-1.2';

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
/**
 * Flags to check whether at least one of the asked for parts is enabled.
 * @bitfield 
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
 * @bitfield 
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
const CACHE_COLUMN_OBJECT: string
const CACHE_COLUMN_REVISION: string
const CACHE_COLUMN_STATE: string
const CACHE_COLUMN_UID: string
const CACHE_TABLE_KEYS: string
const CACHE_TABLE_OBJECTS: string
/**
 * This environment variable configures where the registry
 * server loads it's backend modules from.
 */
const EDS_REGISTRY_MODULES: string
/**
 * D-Bus object path of the data source server.
 */
const SOURCE_REGISTRY_SERVER_OBJECT_PATH: string
/**
 * D-Bus object path of the user prompter.
 */
const USER_PROMPTER_SERVER_OBJECT_PATH: string
/**
 * Frees the `info` structure, previously allocated with e_cache_column_info_new()
 * or e_cache_column_info_copy().
 * @param info an #ECacheColumnInfo
 */
function cacheColumnInfoFree(info: object | null): void
/**
 * Frees the `change` structure, previously allocated with e_cache_offline_change_new()
 * or e_cache_offline_change_copy().
 * @param change an #ECacheOfflineChange
 */
function cacheOfflineChangeFree(change: object | null): void
function sqlite3VfsInit(): void
/**
 * A callback called for each object row when using e_cache_foreach() function.
 * @callback 
 * @param cache an #ECache
 * @param uid a unique object identifier
 * @param revision the object revision
 * @param object the object itself
 * @param offlineState objects offline state, one of #EOfflineState
 * @param columnNames column names
 * @param columnValues column values
 */
interface CacheForeachFunc {
    (cache: Cache, uid: string, revision: string, object: string, offlineState: OfflineState, columnNames: string[], columnValues: string[]): boolean
}
/**
 * A callback called for each row of a SELECT statement executed
 * with e_cache_sqlite_select() function.
 * @callback 
 * @param cache an #ECache
 * @param columnNames column names
 * @param columnValues column values
 */
interface CacheSelectFunc {
    (cache: Cache, columnNames: string[], columnValues: string[]): boolean
}
/**
 * A callback called for each object row when using e_cache_foreach_update() function.
 * When all out parameters are left untouched, then the row is not changed.
 * @callback 
 * @param cache an #ECache
 * @param uid a unique object identifier
 * @param revision the object revision
 * @param object the object itself
 * @param offlineState objects offline state, one of #EOfflineState
 * @param columnNames column names
 * @param columnValues column values
 */
interface CacheUpdateFunc {
    (cache: Cache, uid: string, revision: string, object: string, offlineState: OfflineState, columnNames: string[], columnValues: string[]): boolean
}
interface OAuth2Support_ConstructProps extends GObject.Object_ConstructProps {
}

interface OAuth2Support {

    // Owm methods of EBackend-1.2.EBackend.OAuth2Support

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
    getAccessToken(source: EDataServer.Source, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_oauth2_support_get_access_token().
     * 
     * Free the returned access token with g_free() when finished with it.
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     */
    getAccessTokenFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outAccessToken */ string, /* outExpiresIn */ number ]
    /**
     * Obtains the OAuth 2.0 access token for `source` along with its expiry
     * in seconds from the current time (or 0 if unknown).
     * 
     * Free the returned access token with g_free() when finished with it.
     * If an error occurs, the function will set `error` and return %FALSE.
     * @param source an #ESource
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getAccessTokenSync(source: EDataServer.Source, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccessToken */ string, /* outExpiresIn */ number ]

    // Class property signals of EBackend-1.2.EBackend.OAuth2Support

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class OAuth2Support extends GObject.Object {

    // Own properties of EBackend-1.2.EBackend.OAuth2Support

    static name: string
    static $gtype: GObject.GType<OAuth2Support>

    // Constructors of EBackend-1.2.EBackend.OAuth2Support

    constructor(config?: OAuth2Support_ConstructProps) 
    _init(config?: OAuth2Support_ConstructProps): void
}

interface Backend_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of EBackend-1.2.EBackend.Backend

    connectable?: Gio.SocketConnectable | null
    online?: boolean | null
    source?: EDataServer.Source | null
}

interface Backend {

    // Own properties of EBackend-1.2.EBackend.Backend

    connectable: Gio.SocketConnectable
    readonly mainContext: GLib.MainContext
    online: boolean
    readonly source: EDataServer.Source
    readonly userPrompter: UserPrompter

    // Owm methods of EBackend-1.2.EBackend.Backend

    /**
     * Asynchronously calls the e_backend_credentials_required_sync() on the `backend,`
     * to inform clients that credentials are required.
     * 
     * When the operation is finished, `callback` will be called. You can then
     * call e_backend_credentials_required_finish() to get the result of the operation.
     * @param reason an #ESourceCredentialsReason, why the credentials are required
     * @param certificatePem PEM-encoded secure connection certificate, or an empty string
     * @param certificateErrors a bit-or of #GTlsCertificateFlags for secure connection certificate
     * @param opError a #GError with a description of the previous credentials error, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    credentialsRequired(reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError: GLib.Error | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_backend_credentials_required().
     * 
     * If an error occurs, the function sets `error` and returns %FALSE.
     * @param result a #GAsyncResult
     */
    credentialsRequiredFinish(result: Gio.AsyncResult): boolean
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
     * @param certificatePem PEM-encoded secure connection certificate, or an empty string
     * @param certificateErrors a bit-or of #GTlsCertificateFlags for secure connection certificate
     * @param opError a #GError with a description of the previous credentials error, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     */
    credentialsRequiredSync(reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError: GLib.Error | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Makes sure that the "online" property is updated, that is, if there
     * is any destination reachability test pending, it'll be done immediately
     * and the only state will be updated as well.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    ensureOnlineStateUpdated(cancellable: Gio.Cancellable | null): void
    /**
     * Makes sure that the associated ESource::connection-status is connected. This is
     * useful in cases when the backend can connect to the destination without invoking
     * #EBackendClass.authenticate_sync(), possibly through e_backend_schedule_authenticate().
     */
    ensureSourceStatusConnected(): void
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
     */
    getDestinationAddress(): [ /* returnType */ boolean, /* host */ string, /* port */ number ]
    /**
     * Returns the online state of `backend:` %TRUE if `backend` is online,
     * %FALSE if offline.
     * 
     * If the #EBackend:connectable property is non-%NULL, the `backend` will
     * automatically determine whether the network service should be reachable,
     * and hence whether the `backend` is #EBackend:online.  But subclasses may
     * override the online state if, for example, a connection attempt fails.
     */
    getOnline(): boolean
    /**
     * Returns the #ESource to which `backend` is paired.
     */
    getSource(): EDataServer.Source
    /**
     * Gets an instance of #EUserPrompter, associated with this `backend`.
     * 
     * The returned instance is owned by the `backend`.
     */
    getUserPrompter(): object | null
    /**
     * Checks whether the `backend<`!-- -->'s destination server, as returned
     * by e_backend_get_destination_address(), is reachable.
     * If the e_backend_get_destination_address() returns %FALSE, this function
     * returns %TRUE, meaning the destination is always reachable.
     * This uses #GNetworkMonitor<!-- -->'s g_network_monitor_can_reach()
     * for reachability tests.
     * @param cancellable a #GCancellable instance, or %NULL
     */
    isDestinationReachable(cancellable: Gio.Cancellable | null): boolean
    /**
     * Let's the `backend` know that it'll be shut down shortly, no client connects
     * to it anymore. The `backend` can free any resources which reference it, for
     * example the opened views.
     */
    prepareShutdown(): void
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
     */
    refConnectable(): Gio.SocketConnectable | null
    /**
     * Returns the #GMainContext on which event sources for `backend` are to
     * be attached.
     * 
     * The returned #GMainContext is referenced for thread-safety and must be
     * unreferenced with g_main_context_unref() when finished with it.
     */
    refMainContext(): GLib.MainContext
    /**
     * Schedules a new authenticate session, cancelling any previously run.
     * This is usually done automatically, when an 'authenticate' signal is
     * received for the associated #ESource. With %NULL `credentials` an attempt
     * without it is run.
     * @param credentials a credentials to use to authenticate, or %NULL
     */
    scheduleAuthenticate(credentials: EDataServer.NamedParameters | null): void
    /**
     * Asynchronously invokes e_backend_credentials_required(), but installs its
     * own callback which only prints a runtime warning on the console when
     * the call fails. The `who_calls` is a prefix of the console message.
     * This is useful when the caller just wants to start the operation
     * without having actual place where to show the operation result.
     * @param reason an #ESourceCredentialsReason, why the credentials are required
     * @param certificatePem PEM-encoded secure connection certificate, or an empty string
     * @param certificateErrors a bit-or of #GTlsCertificateFlags for secure connection certificate
     * @param opError a #GError with a description of the previous credentials error, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param whoCalls an identification who calls this
     */
    scheduleCredentialsRequired(reason: EDataServer.SourceCredentialsReason, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, opError: GLib.Error | null, cancellable: Gio.Cancellable | null, whoCalls: string | null): void
    /**
     * Sets the socket endpoint for the network service to which `backend` is
     * a client.  This can be %NULL if `backend` does not use network sockets.
     * 
     * The initial value of the #EBackend:connectable property is derived from
     * the #ESourceAuthentication extension of the `backend'`s #EBackend:source
     * property, if the extension is present.
     * @param connectable a #GSocketConnectable, or %NULL
     */
    setConnectable(connectable: Gio.SocketConnectable): void
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
    setOnline(online: boolean): void
    /**
     * Initiates a user trust prompt with given `parameters`.
     * 
     * When the operation is finished, `callback` will be called. You can then
     * call e_backend_trust_prompt_finish() to get the result of the operation.
     * @param parameters an #ENamedParameters with values for the trust prompt
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    trustPrompt(parameters: EDataServer.NamedParameters, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_backend_trust_prompt().
     * If an error occurred, the function will set `error` and return
     * %E_TRUST_PROMPT_RESPONSE_UNKNOWN.
     * @param result a #GAsyncResult
     */
    trustPromptFinish(result: Gio.AsyncResult): EDataServer.TrustPromptResponse
    /**
     * Asks a user a trust prompt with given `parameters,` and returns what
     * user responded. This blocks until the response is delivered.
     * @param parameters an #ENamedParameters with values for the trust prompt
     * @param cancellable optional #GCancellable object, or %NULL
     */
    trustPromptSync(parameters: EDataServer.NamedParameters, cancellable: Gio.Cancellable | null): EDataServer.TrustPromptResponse

    // Class property signals of EBackend-1.2.EBackend.Backend

    connect(sigName: "notify::connectable", callback: (...args: any[]) => void): number
    on(sigName: "notify::connectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connectable", ...args: any[]): void
    connect(sigName: "notify::main-context", callback: (...args: any[]) => void): number
    on(sigName: "notify::main-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::main-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::main-context", ...args: any[]): void
    connect(sigName: "notify::online", callback: (...args: any[]) => void): number
    on(sigName: "notify::online", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::online", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::online", ...args: any[]): void
    connect(sigName: "notify::source", callback: (...args: any[]) => void): number
    on(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::user-prompter", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-prompter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-prompter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-prompter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-prompter", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class Backend extends GObject.Object {

    // Own properties of EBackend-1.2.EBackend.Backend

    static name: string
    static $gtype: GObject.GType<Backend>

    // Constructors of EBackend-1.2.EBackend.Backend

    constructor(config?: Backend_ConstructProps) 
    _init(config?: Backend_ConstructProps): void
}

interface BackendFactory_ConstructProps extends EDataServer.Extension_ConstructProps {
}

interface BackendFactory {

    // Owm methods of EBackend-1.2.EBackend.BackendFactory

    /**
     * Returns a hash key which uniquely identifies `factory`.
     * 
     * Since only one instance of each #EBackendFactory subclass is ever created,
     * the hash key need only be unique among subclasses, not among instances of
     * each subclass.
     */
    getHashKey(): string
    /**
     * Returns the filename of the shared library for the module used
     * to load the backends provided by `factory`.
     */
    getModuleFilename(): string
    /**
     * Returns a new #EBackend instance for `source`.
     * @param source an #ESource
     */
    newBackend(source: EDataServer.Source): Backend
    /**
     * Returns TRUE if the `factory` wants to share the subprocess
     * for all backends provided by itself. Otherwise, returns FALSE.
     */
    shareSubprocess(): boolean

    // Class property signals of EBackend-1.2.EBackend.BackendFactory

    connect(sigName: "notify::extensible", callback: (...args: any[]) => void): number
    on(sigName: "notify::extensible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::extensible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::extensible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::extensible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class BackendFactory extends EDataServer.Extension {

    // Own properties of EBackend-1.2.EBackend.BackendFactory

    static name: string
    static $gtype: GObject.GType<BackendFactory>

    // Constructors of EBackend-1.2.EBackend.BackendFactory

    constructor(config?: BackendFactory_ConstructProps) 
    _init(config?: BackendFactory_ConstructProps): void
}

interface Cache_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `before-put`
 */
interface Cache_BeforePutSignalCallback {
    (object: string, p0: string, p1: string, p2: CacheColumnValues, p3: boolean, p4: Gio.Cancellable | null, p5: object | null): boolean
}

/**
 * Signal callback interface for `before-remove`
 */
interface Cache_BeforeRemoveSignalCallback {
    (object: string, p0: Gio.Cancellable | null, p1: object | null): boolean
}

/**
 * Signal callback interface for `revision-changed`
 */
interface Cache_RevisionChangedSignalCallback {
    (): void
}

interface Cache {

    // Owm methods of EBackend-1.2.EBackend.Cache

    /**
     * Instructs the `cache` to change its revision. In case the revision
     * change is frozen with e_cache_freeze_revision_change() it notes to
     * change the revision once the revision change is fully thaw.
     */
    changeRevision(): void
    /**
     * Marks all objects as being fully synchronized with the server and
     * removes those which are marked as locally deleted.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    clearOfflineChanges(cancellable: Gio.Cancellable | null): boolean
    /**
     * Checkes whether the `cache` contains an object with
     * the given `uid`.
     * @param uid a unique identifier of an object
     * @param deletedFlag one of #ECacheDeletedFlag enum
     */
    contains(uid: string, deletedFlag?: CacheDeletedFlag): boolean
    /**
     * Adds every column value which is not part of the `other_columns` to it,
     * except of E_CACHE_COLUMN_UID, E_CACHE_COLUMN_REVISION, E_CACHE_COLUMN_OBJECT
     * and E_CACHE_COLUMN_STATE columns.
     * 
     * This can be used within the callback of e_cache_foreach_update().
     * @param columnNames column names
     * @param columnValues column values
     * @param otherColumns an #ECacheColumnValues to fill
     */
    copyMissingToColumnValues(columnNames: string[], columnValues: string[], otherColumns: CacheColumnValues): /* otherColumns */ CacheColumnValues
    dupKey(key: string): string
    dupRevision(): string
    /**
     * Erases the cache and all of its content from the disk.
     * The only valid operation after this is to free the `cache`.
     */
    erase(): void
    /**
     * Calls `func` for each found object, which satisfies the criteria
     * for both `deleted_flag` and `where_clause`.
     * 
     * Note the `func` should not call any SQLite commands, because it's invoked
     * within a SELECT statement execution.
     * @param deletedFlag one of #ECacheDeletedFlag enum
     * @param whereClause an optional SQLite WHERE clause part, or %NULL
     * @param func an #ECacheForeachFunc function to call for each object
     * @param cancellable optional #GCancellable object, or %NULL
     */
    foreach(deletedFlag: CacheDeletedFlag, whereClause: string | null, func: CacheForeachFunc, cancellable: Gio.Cancellable | null): boolean
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
     * @param deletedFlag one of #ECacheDeletedFlag enum
     * @param whereClause an optional SQLite WHERE clause part, or %NULL
     * @param func an #ECacheUpdateFunc function to call for each object
     * @param cancellable optional #GCancellable object, or %NULL
     */
    foreachUpdate(deletedFlag: CacheDeletedFlag, whereClause: string | null, func: CacheUpdateFunc, cancellable: Gio.Cancellable | null): boolean
    /**
     * Freezes automatic revision change for the `cache`. The function
     * can be called multiple times, but each such call requires its
     * pair function e_cache_thaw_revision_change() call. See also
     * e_cache_change_revision().
     */
    freezeRevisionChange(): void
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
     */
    get(uid: string, cancellable: Gio.Cancellable | null): [ /* returnType */ string | null, /* outRevision */ string | null, /* outOtherColumns */ CacheColumnValues | null ]
    getCount(deletedFlag: CacheDeletedFlag, cancellable: Gio.Cancellable | null): number
    getFilename(): string
    /**
     * Reads the user `key` value as an integer.
     * @param key a key name
     */
    getKeyInt(key: string): number
    /**
     * The same as e_cache_get(), only considers also locally deleted objects.
     * @param uid a unique identifier of an object
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getObjectIncludeDeleted(uid: string, cancellable: Gio.Cancellable | null): [ /* returnType */ string | null, /* outRevision */ string | null, /* outOtherColumns */ CacheColumnValues | null ]
    /**
     * Gets a list of objects stored in the `cache,` optionally together with
     * their revisions. The uids are not returned in any particular order,
     * but the position between `out_objects` and `out_revisions` matches
     * the same object.
     * 
     * Both `out_objects` and `out_revisions` contain newly allocated #GSList, which
     * should be freed with g_slist_free_full (slist, g_free); when no longer needed.
     * @param deletedFlag one of #ECacheDeletedFlag enum
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getObjects(deletedFlag: CacheDeletedFlag, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outObjects */ string[], /* outRevisions */ string[] | null ]
    /**
     * Gathers the list of all offline changes being done so far.
     * The returned #GSList contains #ECacheOfflineChange structure.
     * Use e_cache_clear_offline_changes() to clear all offline
     * changes at once.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getOfflineChanges(cancellable: Gio.Cancellable | null): CacheOfflineChange[]
    getOfflineState(uid: string, cancellable?: Gio.Cancellable | null): OfflineState
    getSqlitedb(): object | null
    /**
     * Gets a list of unique object identifiers stored in the `cache,` optionally
     * together with their revisions. The uids are not returned in any particular
     * order, but the position between `out_uids` and `out_revisions` matches
     * the same object.
     * 
     * Both `out_uids` and `out_revisions` contain newly allocated #GSList, which
     * should be freed with g_slist_free_full (slist, g_free); when no longer needed.
     * @param deletedFlag one of #ECacheDeletedFlag enum
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getUids(deletedFlag: CacheDeletedFlag, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outUids */ string[], /* outRevisions */ string[] | null ]
    getVersion(): number
    /**
     * Initializes the `cache` and opens the `filename` database.
     * This should be called by the descendant.
     * 
     * The `other_columns` are added to the objects table (`E_CACHE_TABLE_OBJECTS)`.
     * Values for these columns are returned by e_cache_get()
     * and can be stored with e_cache_put().
     * @param filename a filename of an SQLite database to use
     * @param otherColumns an optional    #GSList with additional columns to add to the objects table
     * @param cancellable optional #GCancellable object, or %NULL
     */
    initializeSync(filename: string, otherColumns: CacheColumnInfo[] | null, cancellable: Gio.Cancellable | null): boolean
    isRevisionChangeFrozen(): boolean
    /**
     * Locks the `cache` thus other threads cannot use it.
     * This can be called recursively within one thread.
     * Each call should have its pair e_cache_unlock().
     * @param lockType an #ECacheLockType
     */
    lock(lockType: CacheLockType): void
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
     * @param otherColumns an #ECacheColumnValues with other columns to set; can be %NULL
     * @param offlineFlag one of #ECacheOfflineFlag, whether putting this object in offline
     * @param cancellable optional #GCancellable object, or %NULL
     */
    put(uid: string, revision: string | null, object: string, otherColumns: CacheColumnValues | null, offlineFlag: CacheOfflineFlag, cancellable: Gio.Cancellable | null): boolean
    /**
     * Removes the object with the given `uid` from the `cache`. Based on the `offline_flag,`
     * it can remove also any information about locally made offline changes. Removing
     * the object with %E_CACHE_IS_OFFLINE will still remember it for later use
     * with e_cache_get_offline_changes().
     * @param uid a unique identifier of an object
     * @param offlineFlag one of #ECacheOfflineFlag, whether removing the object in offline
     * @param cancellable optional #GCancellable object, or %NULL
     */
    remove(uid: string, offlineFlag: CacheOfflineFlag, cancellable: Gio.Cancellable | null): boolean
    /**
     * Removes all objects from the `cache` in one call.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    removeAll(cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets a `value` of the user `key,` or deletes it, if the `value` is %NULL.
     * @param key a key name
     * @param value a value to set, or %NULL to delete the key
     */
    setKey(key: string, value: string | null): boolean
    /**
     * Sets an integer `value` for the user `key`.
     * @param key a key name
     * @param value an integer value to set
     */
    setKeyInt(key: string, value: number): boolean
    /**
     * Sets an offline `state` for the object identified by `uid`.
     * @param uid a unique identifier of an object
     * @param state an #EOfflineState to set
     * @param cancellable optional #GCancellable object, or %NULL
     */
    setOfflineState(uid: string, state: OfflineState, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets the `revision` of the whole `cache`. This is not meant to be
     * used by the descendants, because the revision is updated automatically
     * when needed. The descendants can listen to "revision-changed" signal.
     * @param revision a revision to set; use %NULL to unset it
     */
    setRevision(revision: string | null): void
    /**
     * Sets a cache data version. This is meant to be used by the descendants.
     * The `version` should be greater than zero.
     * @param version a cache data version to set
     */
    setVersion(version: number): void
    /**
     * Executes an SQLite statement. Use e_cache_sqlite_select() for
     * SELECT statements.
     * @param sqlStmt an SQLite statement to execute
     * @param cancellable optional #GCancellable object, or %NULL
     */
    sqliteExec(sqlStmt: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Runs vacuum (compacts the database file), if needed.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    sqliteMaybeVacuum(cancellable: Gio.Cancellable | null): boolean
    /**
     * Executes a SELECT statement `sql_stmt` and calls `func` for each row of the result.
     * Use e_cache_sqlite_exec() for statements which do not return row sets.
     * @param sqlStmt an SQLite SELECT statement to execute
     * @param func an #ECacheSelectFunc function to call for each row
     * @param cancellable optional #GCancellable object, or %NULL
     */
    sqliteSelect(sqlStmt: string, func: CacheSelectFunc, cancellable: Gio.Cancellable | null): boolean
    /**
     * Thaws automatic revision change for the `cache`. It's the pair
     * function of e_cache_freeze_revision_change().
     */
    thawRevisionChange(): void
    /**
     * Unlocks the cache which was previouly locked with e_cache_lock().
     * The cache locked with #E_CACHE_LOCK_WRITE should use either
     * `action` #E_CACHE_UNLOCK_COMMIT or #E_CACHE_UNLOCK_ROLLBACK,
     * while the #E_CACHE_LOCK_READ should use #E_CACHE_UNLOCK_NONE `action`.
     * @param action an #ECacheUnlockAction
     */
    unlock(action: CacheUnlockAction): void

    // Own signals of EBackend-1.2.EBackend.Cache

    connect(sigName: "before-put", callback: Cache_BeforePutSignalCallback): number
    on(sigName: "before-put", callback: Cache_BeforePutSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "before-put", callback: Cache_BeforePutSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "before-put", callback: Cache_BeforePutSignalCallback): NodeJS.EventEmitter
    emit(sigName: "before-put", p0: string, p1: string, p2: CacheColumnValues, p3: boolean, p4: Gio.Cancellable | null, p5: object | null, ...args: any[]): void
    connect(sigName: "before-remove", callback: Cache_BeforeRemoveSignalCallback): number
    on(sigName: "before-remove", callback: Cache_BeforeRemoveSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "before-remove", callback: Cache_BeforeRemoveSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "before-remove", callback: Cache_BeforeRemoveSignalCallback): NodeJS.EventEmitter
    emit(sigName: "before-remove", p0: Gio.Cancellable | null, p1: object | null, ...args: any[]): void
    connect(sigName: "revision-changed", callback: Cache_RevisionChangedSignalCallback): number
    on(sigName: "revision-changed", callback: Cache_RevisionChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "revision-changed", callback: Cache_RevisionChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "revision-changed", callback: Cache_RevisionChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "revision-changed", ...args: any[]): void

    // Class property signals of EBackend-1.2.EBackend.Cache

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class Cache extends GObject.Object {

    // Own properties of EBackend-1.2.EBackend.Cache

    static name: string
    static $gtype: GObject.GType<Cache>

    // Constructors of EBackend-1.2.EBackend.Cache

    constructor(config?: Cache_ConstructProps) 
    _init(config?: Cache_ConstructProps): void
    static errorQuark(): GLib.Quark
    /**
     * Frees a statement previously constructed with e_cache_sqlite_stmt_printf().
     * @param stmt a statement to free
     */
    static sqliteStmtFree(stmt: string): void
}

interface CacheReaper_ConstructProps extends EDataServer.Extensible_ConstructProps, EDataServer.Extension_ConstructProps {
}

interface CacheReaper extends EDataServer.Extensible {

    // Owm methods of EBackend-1.2.EBackend.CacheReaper

    /**
     * Let's the `cache_reaper` know about a private directory named `name,`
     * thus it won't delete it from cache or data directories. The `name`
     * is just a directory name, not a path.
     * 
     * Since 3.18
     * @param name directory name
     */
    addPrivateDirectory(name: string): void
    /**
     * Remove private directory named `name` from the list of private
     * directories in the `cache_reaper,` previously added with
     * e_cache_reaper_add_private_directory().
     * 
     * Since 3.18
     * @param name directory name
     */
    removePrivateDirectory(name: string): void

    // Class property signals of EBackend-1.2.EBackend.CacheReaper

    connect(sigName: "notify::extensible", callback: (...args: any[]) => void): number
    on(sigName: "notify::extensible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::extensible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::extensible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::extensible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class CacheReaper extends EDataServer.Extension {

    // Own properties of EBackend-1.2.EBackend.CacheReaper

    static name: string
    static $gtype: GObject.GType<CacheReaper>

    // Constructors of EBackend-1.2.EBackend.CacheReaper

    constructor(config?: CacheReaper_ConstructProps) 
    _init(config?: CacheReaper_ConstructProps): void
    static typeRegister(typeModule: GObject.TypeModule): void
}

interface CollectionBackend_ConstructProps extends Backend_ConstructProps {

    // Own constructor properties of EBackend-1.2.EBackend.CollectionBackend

    server?: SourceRegistryServer | null
}

/**
 * Signal callback interface for `child-added`
 */
interface CollectionBackend_ChildAddedSignalCallback {
    (childSource: ServerSideSource): void
}

/**
 * Signal callback interface for `child-removed`
 */
interface CollectionBackend_ChildRemovedSignalCallback {
    (childSource: ServerSideSource): void
}

interface CollectionBackend {

    // Own properties of EBackend-1.2.EBackend.CollectionBackend

    readonly proxyResolver: Gio.ProxyResolver
    readonly server: SourceRegistryServer

    // Owm methods of EBackend-1.2.EBackend.CollectionBackend

    /**
     * Authenticates all enabled children sources with the given `crendetials`.
     * This is usually called when the collection source successfully used
     * the `credentials` to connect to the (possibly) remote data store, to
     * open the childern too. Already connected child sources are skipped.
     * @param credentials credentials to authenticate with
     */
    authenticateChildren(credentials: EDataServer.NamedParameters): void
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
     * |[
     *   g_list_free_full (list, g_object_unref);
     * ```
     * 
     */
    claimAllResources(): EDataServer.Source[] | null
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
    createResource(source: EDataServer.Source, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_collection_backend_create_resource().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     */
    createResourceFinish(result: Gio.AsyncResult): boolean
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
     */
    createResourceSync(source: EDataServer.Source, cancellable: Gio.Cancellable | null): boolean
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
    deleteResource(source: EDataServer.Source, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_collection_backend_delete_resource().
     * 
     * If an error occurred, the function will set `error` and return %FALSE.
     * @param result a #GAsyncResult
     */
    deleteResourceFinish(result: Gio.AsyncResult): boolean
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
     */
    deleteResourceSync(source: EDataServer.Source, cancellable: Gio.Cancellable | null): boolean
    /**
     * Extracts the resource ID for `child_source,` which is supposed to be a
     * stable and unique server-assigned identifier for the remote resource
     * described by `child_source`.  If `child_source` is not actually a child
     * of the collection #EBackend:source owned by `backend,` the function
     * returns %NULL.
     * 
     * The returned string should be freed with g_free() when no longer needed.
     * @param childSource an #ESource managed by `backend`
     */
    dupResourceId(childSource: EDataServer.Source): string | null
    /**
     * Freezes populate of the backend's content. This is used to avoid calling
     * populate multiple times in parallel.
     * Every call to this function should be followed by the call
     * of e_collection_backend_thaw_populate() to reverse the effect of this function,
     * regardless of the return value of this function.
     */
    freezePopulate(): boolean
    /**
     * Returns the private cache directory path for `backend,` which is named
     * after the #ESource:uid of `backend'`s collection #EBackend:source.
     * 
     * The cache directory is meant to store key files for backend-created
     * data sources.  See also: e_server_side_source_set_write_directory()
     */
    getCacheDir(): string
    /**
     * Checks whether the `backend` has enabled at least of the `parts`.
     * @param parts a bit-or of #ECollectionBackendParts with parts to be checked
     */
    getPartEnabled(parts: CollectionBackendParts): boolean
    getPopulateFrozen(): boolean
    /**
     * Returns whether the `source` is a newly created child or not. New sources
     * are remembered between two populate calls only.
     * @param source a child #ESource
     */
    isNewSource(source: EDataServer.Source): boolean
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
     * |[
     *   g_list_free_full (list, g_object_unref);
     * ```
     * 
     */
    listCalendarSources(): EDataServer.Source[]
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
     * |[
     *   g_list_free_full (list, g_object_unref);
     * ```
     * 
     */
    listContactsSources(): EDataServer.Source[]
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
     * |[
     *   g_list_free_full (list, g_object_unref);
     * ```
     * 
     */
    listMailSources(): EDataServer.Source[]
    /**
     * Creates a new #EServerSideSource as a child of the collection
     * #EBackend:source owned by `backend`.  If possible, the #EServerSideSource
     * is drawn from a cache of previously used sources indexed by `resource_id`
     * so that locally cached data from previous sessions can be reused.
     * 
     * The returned data source should be passed to
     * e_source_registry_server_add_source() to export it over D-Bus.
     * @param resourceId a stable and unique resource ID
     */
    newChild(resourceId: string): EDataServer.Source
    /**
     * Returns the #GProxyResolver for `backend` (if applicable), as indicated
     * by the #ESourceAuthentication:proxy-uid of `backend'`s #EBackend:source
     * or one of its ancestors.
     * 
     * The returned #GProxyResolver is referenced for thread-safety and must
     * be unreferenced with g_object_unref() when finished with it.
     */
    refProxyResolver(): Gio.ProxyResolver | null
    /**
     * Returns the #ESourceRegistryServer to which `backend` belongs.
     * 
     * The returned #ESourceRegistryServer is referenced for thread-safety.
     * Unreference the #ESourceRegistryServer with g_object_unref() when
     * finished with it.
     */
    refServer(): SourceRegistryServer
    /**
     * Schedules a call to populate() of the `backend` on idle.
     * The function does nothing in case the `backend` is offline.
     */
    schedulePopulate(): void
    /**
     * Thaws populate of the backend's content. This is a pair function
     * for e_collection_backend_freeze_populate().
     */
    thawPopulate(): void

    // Own signals of EBackend-1.2.EBackend.CollectionBackend

    connect(sigName: "child-added", callback: CollectionBackend_ChildAddedSignalCallback): number
    on(sigName: "child-added", callback: CollectionBackend_ChildAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-added", callback: CollectionBackend_ChildAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-added", callback: CollectionBackend_ChildAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "child-added", ...args: any[]): void
    connect(sigName: "child-removed", callback: CollectionBackend_ChildRemovedSignalCallback): number
    on(sigName: "child-removed", callback: CollectionBackend_ChildRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "child-removed", callback: CollectionBackend_ChildRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "child-removed", callback: CollectionBackend_ChildRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "child-removed", ...args: any[]): void

    // Class property signals of EBackend-1.2.EBackend.CollectionBackend

    connect(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::server", callback: (...args: any[]) => void): number
    on(sigName: "notify::server", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::server", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::server", ...args: any[]): void
    connect(sigName: "notify::connectable", callback: (...args: any[]) => void): number
    on(sigName: "notify::connectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connectable", ...args: any[]): void
    connect(sigName: "notify::main-context", callback: (...args: any[]) => void): number
    on(sigName: "notify::main-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::main-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::main-context", ...args: any[]): void
    connect(sigName: "notify::online", callback: (...args: any[]) => void): number
    on(sigName: "notify::online", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::online", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::online", ...args: any[]): void
    connect(sigName: "notify::source", callback: (...args: any[]) => void): number
    on(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::user-prompter", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-prompter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-prompter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-prompter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-prompter", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class CollectionBackend extends Backend {

    // Own properties of EBackend-1.2.EBackend.CollectionBackend

    static name: string
    static $gtype: GObject.GType<CollectionBackend>

    // Constructors of EBackend-1.2.EBackend.CollectionBackend

    constructor(config?: CollectionBackend_ConstructProps) 
    _init(config?: CollectionBackend_ConstructProps): void
}

interface CollectionBackendFactory_ConstructProps extends BackendFactory_ConstructProps {
}

interface CollectionBackendFactory {

    // Owm methods of EBackend-1.2.EBackend.CollectionBackendFactory

    /**
     * Convenience function to populate a set of #ESource instances with mail
     * account information to be added to an #ECollectionBackend.  This is mainly
     * used for vendor-specific collection backends like Google or Yahoo! where
     * the host, port, and security details are known ahead of time and only
     * user-specific information needs to be filled in.
     * @param mailAccountSource an #ESource to hold mail account information
     * @param mailIdentitySource an #ESource to hold mail identity information
     * @param mailTransportSource an #ESource to hold mail transport information
     */
    prepareMail(mailAccountSource: EDataServer.Source, mailIdentitySource: EDataServer.Source, mailTransportSource: EDataServer.Source): void

    // Class property signals of EBackend-1.2.EBackend.CollectionBackendFactory

    connect(sigName: "notify::extensible", callback: (...args: any[]) => void): number
    on(sigName: "notify::extensible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::extensible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::extensible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::extensible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class CollectionBackendFactory extends BackendFactory {

    // Own properties of EBackend-1.2.EBackend.CollectionBackendFactory

    static name: string
    static $gtype: GObject.GType<CollectionBackendFactory>

    // Constructors of EBackend-1.2.EBackend.CollectionBackendFactory

    constructor(config?: CollectionBackendFactory_ConstructProps) 
    _init(config?: CollectionBackendFactory_ConstructProps): void
}

interface DBusServer_ConstructProps extends EDataServer.Extensible_ConstructProps, GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `bus-acquired`
 */
interface DBusServer_BusAcquiredSignalCallback {
    (connection: Gio.DBusConnection): void
}

/**
 * Signal callback interface for `bus-name-acquired`
 */
interface DBusServer_BusNameAcquiredSignalCallback {
    (connection: Gio.DBusConnection): void
}

/**
 * Signal callback interface for `bus-name-lost`
 */
interface DBusServer_BusNameLostSignalCallback {
    (connection: Gio.DBusConnection): void
}

/**
 * Signal callback interface for `quit-server`
 */
interface DBusServer_QuitServerSignalCallback {
    (code: DBusServerExitCode): void
}

/**
 * Signal callback interface for `run-server`
 */
interface DBusServer_RunServerSignalCallback {
    (): DBusServerExitCode
}

interface DBusServer extends EDataServer.Extensible {

    // Owm methods of EBackend-1.2.EBackend.DBusServer

    /**
     * Increases the use count of `server`.
     * 
     * Use this function to indicate that the server has a reason to continue
     * to run.  To cancel the hold, call e_dbus_server_release().
     */
    hold(): void
    /**
     * This function should be called once during `server` initialization to
     * load all available library modules to extend the `server'`s functionality.
     */
    loadModules(): void
    /**
     * Emits the #EDBusServer::quit signal with the given `code`.
     * 
     * By default the `server` will quit its main loop and cause
     * e_dbus_server_run() to return `code`.
     * @param code an #EDBusServerExitCode
     */
    quit(code: DBusServerExitCode): void
    /**
     * Decreates the use count of `server`.
     * 
     * When the use count reaches zero, the server will stop running.
     * 
     * Never call this function except to cancel the effect of a previous call
     * to e_dbus_server_hold().
     */
    release(): void
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
     * @param waitForClient continue running until a client connects
     */
    run(waitForClient: boolean): DBusServerExitCode

    // Own signals of EBackend-1.2.EBackend.DBusServer

    connect(sigName: "bus-acquired", callback: DBusServer_BusAcquiredSignalCallback): number
    on(sigName: "bus-acquired", callback: DBusServer_BusAcquiredSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "bus-acquired", callback: DBusServer_BusAcquiredSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "bus-acquired", callback: DBusServer_BusAcquiredSignalCallback): NodeJS.EventEmitter
    emit(sigName: "bus-acquired", ...args: any[]): void
    connect(sigName: "bus-name-acquired", callback: DBusServer_BusNameAcquiredSignalCallback): number
    on(sigName: "bus-name-acquired", callback: DBusServer_BusNameAcquiredSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "bus-name-acquired", callback: DBusServer_BusNameAcquiredSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "bus-name-acquired", callback: DBusServer_BusNameAcquiredSignalCallback): NodeJS.EventEmitter
    emit(sigName: "bus-name-acquired", ...args: any[]): void
    connect(sigName: "bus-name-lost", callback: DBusServer_BusNameLostSignalCallback): number
    on(sigName: "bus-name-lost", callback: DBusServer_BusNameLostSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "bus-name-lost", callback: DBusServer_BusNameLostSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "bus-name-lost", callback: DBusServer_BusNameLostSignalCallback): NodeJS.EventEmitter
    emit(sigName: "bus-name-lost", ...args: any[]): void
    connect(sigName: "quit-server", callback: DBusServer_QuitServerSignalCallback): number
    on(sigName: "quit-server", callback: DBusServer_QuitServerSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "quit-server", callback: DBusServer_QuitServerSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "quit-server", callback: DBusServer_QuitServerSignalCallback): NodeJS.EventEmitter
    emit(sigName: "quit-server", ...args: any[]): void
    connect(sigName: "run-server", callback: DBusServer_RunServerSignalCallback): number
    on(sigName: "run-server", callback: DBusServer_RunServerSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "run-server", callback: DBusServer_RunServerSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "run-server", callback: DBusServer_RunServerSignalCallback): NodeJS.EventEmitter
    emit(sigName: "run-server", ...args: any[]): void

    // Class property signals of EBackend-1.2.EBackend.DBusServer

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class DBusServer extends GObject.Object {

    // Own properties of EBackend-1.2.EBackend.DBusServer

    static name: string
    static $gtype: GObject.GType<DBusServer>

    // Constructors of EBackend-1.2.EBackend.DBusServer

    constructor(config?: DBusServer_ConstructProps) 
    _init(config?: DBusServer_ConstructProps): void
}

interface DataFactory_ConstructProps extends EDataServer.Extensible_ConstructProps, Gio.Initable_ConstructProps, DBusServer_ConstructProps {

    // Own constructor properties of EBackend-1.2.EBackend.DataFactory

    backendPerProcess?: number | null
    reloadSupported?: boolean | null
}

interface DataFactory extends EDataServer.Extensible, Gio.Initable {

    // Own properties of EBackend-1.2.EBackend.DataFactory

    readonly backendPerProcess: number
    readonly registry: EDataServer.SourceRegistry
    readonly reloadSupported: boolean

    // Owm methods of EBackend-1.2.EBackend.DataFactory

    backendClosed(backend: Backend): void
    backendClosedBySender(backend: Backend, sender: string): void
    /**
     * Returns a new and unique object path for a D-Bus interface based
     * in the data object path prefix of the `data_factory`
     */
    constructPath(): string
    /**
     * Used only when backend-per-process is off.
     * 
     * Free the returned pointer with g_object_unref(), if not NULL and no longer
     * needed.
     * @param backendFactory 
     * @param source 
     */
    createBackend(backendFactory: BackendFactory, source: EDataServer.Source): Backend | null
    getBackendPerProcess(): number
    /**
     * Returns the #ESourceRegistry owned by `data_factory`.
     */
    getRegistry(): EDataServer.SourceRegistry
    getReloadSupported(): boolean
    /**
     * Lists the currently opened backends.
     * 
     * The sources returned in the list are referenced for thread-safety.
     * They must each be unreferenced with g_object_unref() when finished
     * with them.  Free the returned #GSList itself with g_slist_free().
     * 
     * An easy way to free the list properly in one step is as follows:
     * 
     * |[
     *   g_slist_free_full (list, g_object_unref);
     * ```
     * 
     */
    listOpenedBackends(): Backend[]
    openBackend(backend: Backend, connection: Gio.DBusConnection, cancellable: Gio.Cancellable | null): string
    /**
     * Returns the #EBackendFactory for "`backend_name:``extension_name"`, or
     * %NULL if no such factory is registered.
     * 
     * The returned #EBackendFactory is referenced for thread-safety.
     * Unreference the #EBackendFactory with g_object_unref() when finished
     * with it.
     * @param backendName a backend name
     * @param extensionName an extension name
     */
    refBackendFactory(backendName: string, extensionName?: string): BackendFactory | null
    /**
     * Spawns a new subprocess for a backend type and returns the object path
     * of the new subprocess to the client, in the way the client can talk
     * directly to the running backend. If the backend already has a subprocess
     * running, the used object path is returned to the client.
     * @param invocation a #GDBusMethodInvocation
     * @param uid an #ESource UID
     * @param extensionName an extension name
     * @param subprocessPath a path of an executable responsible for running the subprocess
     */
    spawnSubprocessBackend(invocation: Gio.DBusMethodInvocation, uid: string, extensionName: string, subprocessPath: string): void
    useBackendPerProcess(): boolean

    // Class property signals of EBackend-1.2.EBackend.DataFactory

    connect(sigName: "notify::backend-per-process", callback: (...args: any[]) => void): number
    on(sigName: "notify::backend-per-process", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::backend-per-process", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::backend-per-process", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::backend-per-process", ...args: any[]): void
    connect(sigName: "notify::registry", callback: (...args: any[]) => void): number
    on(sigName: "notify::registry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::registry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::registry", ...args: any[]): void
    connect(sigName: "notify::reload-supported", callback: (...args: any[]) => void): number
    on(sigName: "notify::reload-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reload-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reload-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reload-supported", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class DataFactory extends DBusServer {

    // Own properties of EBackend-1.2.EBackend.DataFactory

    static name: string
    static $gtype: GObject.GType<DataFactory>

    // Constructors of EBackend-1.2.EBackend.DataFactory

    constructor(config?: DataFactory_ConstructProps) 
    _init(config?: DataFactory_ConstructProps): void
}

interface FileCache_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of EBackend-1.2.EBackend.FileCache

    /**
     * The filename of the cache.
     */
    filename?: string | null
}

interface FileCache {

    // Own properties of EBackend-1.2.EBackend.FileCache

    /**
     * The filename of the cache.
     */
    readonly filename: string

    // Owm methods of EBackend-1.2.EBackend.FileCache

    /**
     * Adds a new `key` / `value` entry to `cache`.  If an object corresponding
     * to `key` already exists in `cache,` the function returns %FALSE.
     * @param key the hash key of the object to add
     * @param value the object to add
     */
    addObject(key: string, value: string): boolean
    /**
     * Clean up the cache's contents.
     */
    clean(): boolean
    /**
     * Disables temporarily all writes to disk for `cache`.
     */
    freezeChanges(): void
    /**
     * Gets the name of the file where the cache is being stored.
     */
    getFilename(): string
    /**
     * Returns a list of keys in `cache`.  The keys are owned by `cache` and must
     * not be modified or freed.  Free the returned list with g_slist_free().
     */
    getKeys(): string[]
    /**
     * Returns the object corresponding to `key`.  If no such object exists
     * in `cache,` the function returns %NULL.
     * @param key the hash key of the object to find
     */
    getObject(key: string): string | null
    /**
     * Returns a list of objects in `cache`.  The objects are owned by `cache` and
     * must not be modified or freed.  Free the returned list with g_slist_free().
     */
    getObjects(): string[]
    /**
     * Remove the cache from disk.
     */
    remove(): boolean
    /**
     * Removes the object corresponding to `key` from `cache`.
     * If no such object exists in `cache,` the function returns %FALSE.
     * @param key the hash key of the object to remove
     */
    removeObject(key: string): boolean
    /**
     * Replaces the object corresponding to `key` with `new_value`.
     * If no such object exists in `cache,` the function returns %FALSE.
     * @param key the hash key of the object to replace
     * @param newValue the new object for `key`
     */
    replaceObject(key: string, newValue: string): boolean
    /**
     * Reverts the affects of e_file_cache_freeze_changes().
     * Each change to `cache` is once again written to disk.
     */
    thawChanges(): void

    // Class property signals of EBackend-1.2.EBackend.FileCache

    connect(sigName: "notify::filename", callback: (...args: any[]) => void): number
    on(sigName: "notify::filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filename", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class FileCache extends GObject.Object {

    // Own properties of EBackend-1.2.EBackend.FileCache

    static name: string
    static $gtype: GObject.GType<FileCache>

    // Constructors of EBackend-1.2.EBackend.FileCache

    constructor(config?: FileCache_ConstructProps) 
    /**
     * Creates a new #EFileCache object, which implements a cache of
     * objects.  Useful for remote backends.
     * @constructor 
     * @param filename filename where the cache is kept
     */
    constructor(filename: string) 
    /**
     * Creates a new #EFileCache object, which implements a cache of
     * objects.  Useful for remote backends.
     * @constructor 
     * @param filename filename where the cache is kept
     */
    static new(filename: string): FileCache
    _init(config?: FileCache_ConstructProps): void
}

interface ServerSideSource_ConstructProps extends Gio.Initable_ConstructProps, Gio.ProxyResolver_ConstructProps, EDataServer.Source_ConstructProps {

    // Own constructor properties of EBackend-1.2.EBackend.ServerSideSource

    file?: Gio.File | null
    oauth2Support?: OAuth2Support | null
    remoteCreatable?: boolean | null
    remoteDeletable?: boolean | null
    removable?: boolean | null
    server?: SourceRegistryServer | null
    writable?: boolean | null
    writeDirectory?: string | null
}

interface ServerSideSource extends Gio.Initable, Gio.ProxyResolver {

    // Own properties of EBackend-1.2.EBackend.ServerSideSource

    readonly exported: boolean
    readonly file: Gio.File
    oauth2Support: OAuth2Support
    remoteCreatable: boolean
    remoteDeletable: boolean
    removable: boolean
    readonly server: SourceRegistryServer
    writable: boolean
    writeDirectory: string

    // Owm methods of EBackend-1.2.EBackend.ServerSideSource

    /**
     * Returns whether `source` has been exported over D-Bus.
     * 
     * The function returns %FALSE after `source` is initially created, %TRUE
     * after passing `source` uid to e_source_registry_server_ref_source() (provided
     * that `source'`s #ESource:parent is also exported).
     */
    getExported(): boolean
    /**
     * Returns the #GFile from which data source content is loaded and to
     * which changes are saved.  Note the `source` may not have a #GFile.
     */
    getFile(): Gio.File | null
    /**
     * Returns the #GNode representing the `source'`s hierarchical placement,
     * or %NULL if `source` has not been placed in the data source hierarchy.
     * The data member of the #GNode points back to `source`.  This is an easy
     * way to traverse ancestor and descendant data sources.
     * 
     * Note that accessing other data sources this way is not thread-safe,
     * and this therefore function may be replaced at some later date.
     */
    getNode(): GLib.Node | null
    /**
     * Returns the #ESourceRegistryServer to which `source` belongs.
     */
    getServer(): SourceRegistryServer
    /**
     * Returns the local directory path where changes to `source` are written.
     * 
     * By default, changes are written to the local directory path returned by
     * e_server_side_source_get_user_dir(), but an #ECollectionBackend may wish
     * to override this to use its own private cache directory for data sources
     * it creates automatically.
     */
    getWriteDirectory(): string
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
     */
    load(cancellable: Gio.Cancellable | null): boolean
    /**
     * Returns the object implementing the #EOAuth2SupportInterface,
     * or %NULL if `source` does not support OAuth 2.0 authentication.
     * 
     * The returned #EOAuth2Support object is referenced for thread-safety.
     * Unreference the object with g_object_unref() when finished with it.
     */
    refOauth2Support(): OAuth2Support | null
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
     * @param oauth2Support an #EOAuth2Support object, or %NULL
     */
    setOauth2Support(oauth2Support: OAuth2Support | null): void
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
     * @param remoteCreatable whether to export the RemoteCreatable interface
     */
    setRemoteCreatable(remoteCreatable: boolean): void
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
     * @param remoteDeletable whether to export the RemoteDeletable interface
     */
    setRemoteDeletable(remoteDeletable: boolean): void
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
    setRemovable(removable: boolean): void
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
    setWritable(writable: boolean): void
    /**
     * Sets the local directory path where changes to `source` are to be written.
     * 
     * By default, changes are written to the local directory path returned by
     * e_server_side_source_get_user_dir(), but an #ECollectionBackend may wish
     * to override this to use its own private cache directory for data sources
     * it creates automatically.
     * @param writeDirectory the directory where changes are to be written
     */
    setWriteDirectory(writeDirectory: string): void

    // Class property signals of EBackend-1.2.EBackend.ServerSideSource

    connect(sigName: "notify::exported", callback: (...args: any[]) => void): number
    on(sigName: "notify::exported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::exported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::exported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::exported", ...args: any[]): void
    connect(sigName: "notify::file", callback: (...args: any[]) => void): number
    on(sigName: "notify::file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: "notify::oauth2-support", callback: (...args: any[]) => void): number
    on(sigName: "notify::oauth2-support", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::oauth2-support", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::oauth2-support", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::oauth2-support", ...args: any[]): void
    connect(sigName: "notify::remote-creatable", callback: (...args: any[]) => void): number
    on(sigName: "notify::remote-creatable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::remote-creatable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::remote-creatable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::remote-creatable", ...args: any[]): void
    connect(sigName: "notify::remote-deletable", callback: (...args: any[]) => void): number
    on(sigName: "notify::remote-deletable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::remote-deletable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::remote-deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::remote-deletable", ...args: any[]): void
    connect(sigName: "notify::removable", callback: (...args: any[]) => void): number
    on(sigName: "notify::removable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::removable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::removable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::removable", ...args: any[]): void
    connect(sigName: "notify::server", callback: (...args: any[]) => void): number
    on(sigName: "notify::server", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::server", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::server", ...args: any[]): void
    connect(sigName: "notify::writable", callback: (...args: any[]) => void): number
    on(sigName: "notify::writable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::writable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::writable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::writable", ...args: any[]): void
    connect(sigName: "notify::write-directory", callback: (...args: any[]) => void): number
    on(sigName: "notify::write-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::write-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::write-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::write-directory", ...args: any[]): void
    connect(sigName: "notify::connection-status", callback: (...args: any[]) => void): number
    on(sigName: "notify::connection-status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection-status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection-status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection-status", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enabled", ...args: any[]): void
    connect(sigName: "notify::main-context", callback: (...args: any[]) => void): number
    on(sigName: "notify::main-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::main-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::main-context", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::uid", callback: (...args: any[]) => void): number
    on(sigName: "notify::uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class ServerSideSource extends EDataServer.Source {

    // Own properties of EBackend-1.2.EBackend.ServerSideSource

    static name: string
    static $gtype: GObject.GType<ServerSideSource>

    // Constructors of EBackend-1.2.EBackend.ServerSideSource

    constructor(config?: ServerSideSource_ConstructProps) 
    /**
     * Creates a new #EServerSideSource which belongs to `server`.  If `file`
     * is non-%NULL and points to an existing file, the #EServerSideSource is
     * initialized from the file content.  If a read error occurs or the file
     * contains syntax errors, the function sets `error` and returns %NULL.
     * @constructor 
     * @param server an #ESourceRegistryServer
     * @param file a #GFile, or %NULL
     */
    constructor(server: SourceRegistryServer, file: Gio.File | null) 
    /**
     * Creates a new #EServerSideSource which belongs to `server`.  If `file`
     * is non-%NULL and points to an existing file, the #EServerSideSource is
     * initialized from the file content.  If a read error occurs or the file
     * contains syntax errors, the function sets `error` and returns %NULL.
     * @constructor 
     * @param server an #ESourceRegistryServer
     * @param file a #GFile, or %NULL
     */
    static new(server: SourceRegistryServer, file: Gio.File | null): ServerSideSource

    // Overloads of new

    /**
     * Creates a new #ESource instance.
     * 
     * The #ESource::changed signal will be emitted from `main_context` if given,
     * or else from the thread-default #GMainContext at the time this function is
     * called.
     * 
     * The only time the function should be called outside of #ESourceRegistry
     * is to create a so-called "scratch" #ESource for editing in a Properties
     * window or an account setup assistant.
     * 
     * FIXME: Elaborate on scratch sources.
     * @constructor 
     * @param dbusObject a #GDBusObject or %NULL
     * @param mainContext a #GMainContext or %NULL
     */
    static new(dbusObject: Gio.DBusObject | null, mainContext: GLib.MainContext | null): EDataServer.Source
    /**
     * Creates a memory-only #EServerSideSource which belongs to `server`.
     * No on-disk key file is created for this data source, so it will not
     * be remembered across sessions.
     * 
     * Data source collections are often populated with memory-only data
     * sources to serve as proxies for resources discovered on a remote server.
     * These data sources are usually neither #EServerSideSource:writable nor
     * #EServerSideSource:removable by clients, at least not directly.
     * 
     * If an error occurs while instantiating the #EServerSideSource, the
     * function sets `error` and returns %NULL.  Although at this time there
     * are no known error conditions for memory-only data sources.
     * @constructor 
     * @param server an #ESourceRegistryServer
     * @param uid a unique identifier, or %NULL
     */
    static newMemoryOnly(server: SourceRegistryServer, uid: string | null): ServerSideSource
    _init(config?: ServerSideSource_ConstructProps): void
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
    static newUserFile(uid: string | null): Gio.File
    /**
     * Returns the directory where user-specific data source files are stored.
     */
    static getUserDir(): string
    /**
     * Extracts a unique identity string from the base name of `file`.
     * If the base name of `file` is missing a '.source' extension, the
     * function sets `error` and returns %NULL.
     * @param file a #GFile for a data source
     */
    static uidFromFile(file: Gio.File): string | null
}

interface ServerSideSourceCredentialsProvider_ConstructProps extends EDataServer.Extensible_ConstructProps, EDataServer.SourceCredentialsProvider_ConstructProps {
}

interface ServerSideSourceCredentialsProvider extends EDataServer.Extensible {

    // Class property signals of EBackend-1.2.EBackend.ServerSideSourceCredentialsProvider

    connect(sigName: "notify::registry", callback: (...args: any[]) => void): number
    on(sigName: "notify::registry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::registry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::registry", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class ServerSideSourceCredentialsProvider extends EDataServer.SourceCredentialsProvider {

    // Own properties of EBackend-1.2.EBackend.ServerSideSourceCredentialsProvider

    static name: string
    static $gtype: GObject.GType<ServerSideSourceCredentialsProvider>

    // Constructors of EBackend-1.2.EBackend.ServerSideSourceCredentialsProvider

    constructor(config?: ServerSideSourceCredentialsProvider_ConstructProps) 
    /**
     * Creates a new #EServerSideSourceCredentialsProvider, which is meant to abstract
     * credential management for #ESource<!-- -->-s.
     * @constructor 
     * @param registry an #ESourceRegistryServer
     */
    constructor(registry: SourceRegistryServer) 
    /**
     * Creates a new #EServerSideSourceCredentialsProvider, which is meant to abstract
     * credential management for #ESource<!-- -->-s.
     * @constructor 
     * @param registry an #ESourceRegistryServer
     */
    static new(registry: SourceRegistryServer): ServerSideSourceCredentialsProvider

    // Overloads of new

    /**
     * Creates a new #ESourceCredentialsProvider, which is meant to abstract
     * credential management for #ESource<!-- -->-s.
     * @constructor 
     * @param registry an #ESourceRegistry
     */
    static new(registry: EDataServer.SourceRegistry): EDataServer.SourceCredentialsProvider
    _init(config?: ServerSideSourceCredentialsProvider_ConstructProps): void
}

interface SourceRegistryServer_ConstructProps extends OAuth2Support_ConstructProps, EDataServer.Extensible_ConstructProps, Gio.Initable_ConstructProps, DataFactory_ConstructProps {
}

/**
 * Signal callback interface for `files-loaded`
 */
interface SourceRegistryServer_FilesLoadedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `load-error`
 */
interface SourceRegistryServer_LoadErrorSignalCallback {
    (file: Gio.File, error: GLib.Error): void
}

/**
 * Signal callback interface for `source-added`
 */
interface SourceRegistryServer_SourceAddedSignalCallback {
    (source: ServerSideSource): void
}

/**
 * Signal callback interface for `source-removed`
 */
interface SourceRegistryServer_SourceRemovedSignalCallback {
    (source: ServerSideSource): void
}

/**
 * Signal callback interface for `tweak-key-file`
 */
interface SourceRegistryServer_TweakKeyFileSignalCallback {
    (keyFile: GLib.KeyFile, uid: string): boolean
}

interface SourceRegistryServer extends OAuth2Support, EDataServer.Extensible, Gio.Initable {

    // Owm methods of EBackend-1.2.EBackend.SourceRegistryServer

    /**
     * Adds `source` to `server`.
     * @param source an #ESource
     */
    addSource(source: EDataServer.Source): void
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
     * @param extensionName the extension name to find
     */
    findExtension(source: EDataServer.Source, extensionName: string): EDataServer.Source | null
    getOauth2Services(): EDataServer.OAuth2Services
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
     * |[
     *   g_list_free_full (list, g_object_unref);
     * ```
     * 
     * @param extensionName an extension name, or %NULL
     */
    listSources(extensionName: string | null): EDataServer.Source[]
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
     * @param flags permission flags for files loaded from `path`
     */
    loadDirectory(path: string, flags: SourcePermissionFlags): boolean
    /**
     * Emits the #ESourceRegistryServer::load-error signal.
     * @param file the #GFile that failed to load
     * @param error a #GError describing the load error
     */
    loadError(file: Gio.File, error: GLib.Error): void
    /**
     * Creates an #ESource for a native key file and adds it to `server`.
     * If an error occurs, the function returns %NULL and sets `error`.
     * 
     * The returned #ESource is referenced for thread-safety.  Unreference
     * the #ESource with g_object_unref() when finished with it.
     * @param file the data source key file to load
     * @param flags initial permission flags for the data source
     */
    loadFile(file: Gio.File, flags: SourcePermissionFlags): EDataServer.Source | null
    /**
     * Loads data source key files from `resource` by enumerating the children
     * at `path` and calling e_source_registry_server_load_file() on each child.
     * Because multiple errors can occur when loading multiple files, `error` is
     * only set if `path` is invalid.  If a key file fails to load, the error is
     * broadcast through the #ESourceRegistryServer::load-error signal.
     * @param resource a #GResource containing data source key files
     * @param path the path to the data source key files inside `resource`
     * @param flags permission flags for files loaded from `path`
     */
    loadResource(resource: Gio.Resource, path: string, flags: SourcePermissionFlags): boolean
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
     */
    refBackend(source: EDataServer.Source): CollectionBackend | null
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
     */
    refBackendFactory(source: EDataServer.Source): CollectionBackendFactory | null

    // Overloads of refBackendFactory

    /**
     * Returns the #EBackendFactory for "`backend_name:``extension_name"`, or
     * %NULL if no such factory is registered.
     * 
     * The returned #EBackendFactory is referenced for thread-safety.
     * Unreference the #EBackendFactory with g_object_unref() when finished
     * with it.
     * @param backendName a backend name
     * @param extensionName an extension name
     */
    refBackendFactory(backendName: string, extensionName?: string): BackendFactory | null
    refBackendFactory(...args: any[]): any
    refBackendFactory(args_or_backendName: any[] | string, extensionName?: string): CollectionBackendFactory | null | BackendFactory | null | any
    /**
     * Returns a referenced #ESourceCredentialsProvider. Unref it with
     * g_object_unref(), when no longer needed.
     */
    refCredentialsProvider(): EDataServer.SourceCredentialsProvider
    /**
     * Returns the default #EOAuth2Support implementation, which can be used when
     * the source doesn't have it overwritten.
     * 
     * Free the returned object with g_object_unref(), when no longer needed.
     */
    refOauth2Support(): OAuth2Support | null
    /**
     * Looks up an #ESource in `server` by its unique identifier string.
     * 
     * The returned #ESource is referenced for thread-safety and must be
     * unreferenced with g_object_unref() when finished with it.
     * @param uid a unique identifier string
     */
    refSource(uid: string): EDataServer.Source | null
    /**
     * Removes `source` and all of its descendants from `server`.
     * @param source an #ESource
     */
    removeSource(source: EDataServer.Source): void

    // Own signals of EBackend-1.2.EBackend.SourceRegistryServer

    connect(sigName: "files-loaded", callback: SourceRegistryServer_FilesLoadedSignalCallback): number
    on(sigName: "files-loaded", callback: SourceRegistryServer_FilesLoadedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "files-loaded", callback: SourceRegistryServer_FilesLoadedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "files-loaded", callback: SourceRegistryServer_FilesLoadedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "files-loaded", ...args: any[]): void
    connect(sigName: "load-error", callback: SourceRegistryServer_LoadErrorSignalCallback): number
    on(sigName: "load-error", callback: SourceRegistryServer_LoadErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "load-error", callback: SourceRegistryServer_LoadErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "load-error", callback: SourceRegistryServer_LoadErrorSignalCallback): NodeJS.EventEmitter
    emit(sigName: "load-error", error: GLib.Error, ...args: any[]): void
    connect(sigName: "source-added", callback: SourceRegistryServer_SourceAddedSignalCallback): number
    on(sigName: "source-added", callback: SourceRegistryServer_SourceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-added", callback: SourceRegistryServer_SourceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-added", callback: SourceRegistryServer_SourceAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "source-added", ...args: any[]): void
    connect(sigName: "source-removed", callback: SourceRegistryServer_SourceRemovedSignalCallback): number
    on(sigName: "source-removed", callback: SourceRegistryServer_SourceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "source-removed", callback: SourceRegistryServer_SourceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "source-removed", callback: SourceRegistryServer_SourceRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "source-removed", ...args: any[]): void
    connect(sigName: "tweak-key-file", callback: SourceRegistryServer_TweakKeyFileSignalCallback): number
    on(sigName: "tweak-key-file", callback: SourceRegistryServer_TweakKeyFileSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "tweak-key-file", callback: SourceRegistryServer_TweakKeyFileSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "tweak-key-file", callback: SourceRegistryServer_TweakKeyFileSignalCallback): NodeJS.EventEmitter
    emit(sigName: "tweak-key-file", uid: string, ...args: any[]): void

    // Class property signals of EBackend-1.2.EBackend.SourceRegistryServer

    connect(sigName: "notify::backend-per-process", callback: (...args: any[]) => void): number
    on(sigName: "notify::backend-per-process", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::backend-per-process", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::backend-per-process", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::backend-per-process", ...args: any[]): void
    connect(sigName: "notify::registry", callback: (...args: any[]) => void): number
    on(sigName: "notify::registry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::registry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::registry", ...args: any[]): void
    connect(sigName: "notify::reload-supported", callback: (...args: any[]) => void): number
    on(sigName: "notify::reload-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reload-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reload-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reload-supported", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class SourceRegistryServer extends DataFactory {

    // Own properties of EBackend-1.2.EBackend.SourceRegistryServer

    static name: string
    static $gtype: GObject.GType<SourceRegistryServer>

    // Constructors of EBackend-1.2.EBackend.SourceRegistryServer

    constructor(config?: SourceRegistryServer_ConstructProps) 
    /**
     * Creates a new instance of #ESourceRegistryServer.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new instance of #ESourceRegistryServer.
     * @constructor 
     */
    static new(): SourceRegistryServer
    _init(config?: SourceRegistryServer_ConstructProps): void
}

interface SubprocessFactory_ConstructProps extends Gio.Initable_ConstructProps, GObject.Object_ConstructProps {
}

interface SubprocessFactory extends Gio.Initable {

    // Own properties of EBackend-1.2.EBackend.SubprocessFactory

    readonly registry: EDataServer.SourceRegistry

    // Owm methods of EBackend-1.2.EBackend.SubprocessFactory

    /**
     * Calls e_backend_prepare_shutdown() for the list of used backends.
     */
    callBackendsPrepareShutdown(): void
    /**
     * Returns a list of used backends.
     */
    getBackendsList(): Backend[]
    /**
     * Returns the #ESourceRegistry owned by `subprocess_factory`.
     */
    getRegistry(): EDataServer.SourceRegistry
    /**
     * Returns the #EBackend data D-Bus object path
     * @param connection a #GDBusConnection
     * @param uid UID of an #ESource to open
     * @param backendFactoryTypeName the name of the backend factory type
     * @param moduleFilename the name (full-path) of the backend module to be loaded
     * @param proxy a #GDBusInterfaceSkeleton, used to communicate to the subprocess backend
     * @param cancellable a #GCancellable
     */
    openBackend(connection: Gio.DBusConnection, uid: string, backendFactoryTypeName: string, moduleFilename: string, proxy: Gio.DBusInterfaceSkeleton, cancellable: Gio.Cancellable | null): string
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
     * @param backendFactoryTypeName the name of the backend factory type
     * @param moduleFilename the name (full-path) of the backend module to be loaded
     * @param cancellable optional #GCancellable object, or %NULL
     */
    refInitableBackend(uid: string, backendFactoryTypeName: string, moduleFilename: string, cancellable: Gio.Cancellable | null): Backend | null
    /**
     * Installs a toggle reference on the backend, that can receive a signal to
     * shutdown once all client connections are closed.
     * @param backend an #EBackend
     * @param proxy a #GDBusInterfaceSkeleton, used to communicate to the subprocess backend
     */
    setBackendCallbacks(backend: Backend, proxy: Gio.DBusInterfaceSkeleton): void

    // Class property signals of EBackend-1.2.EBackend.SubprocessFactory

    connect(sigName: "notify::registry", callback: (...args: any[]) => void): number
    on(sigName: "notify::registry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::registry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::registry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::registry", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class SubprocessFactory extends GObject.Object {

    // Own properties of EBackend-1.2.EBackend.SubprocessFactory

    static name: string
    static $gtype: GObject.GType<SubprocessFactory>

    // Constructors of EBackend-1.2.EBackend.SubprocessFactory

    constructor(config?: SubprocessFactory_ConstructProps) 
    _init(config?: SubprocessFactory_ConstructProps): void
    /**
     * Returns a new and unique object path for a D-Bus interface based
     * in the data object path prefix of the `subprocess_factory`
     */
    static constructPath(): string
}

interface UserPrompter_ConstructProps extends GObject.Object_ConstructProps {
}

interface UserPrompter {

    // Owm methods of EBackend-1.2.EBackend.UserPrompter

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
     * @param dialogName name of a dialog to invoke
     * @param inParameters optional parameters to pass to extension; can be %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    extensionPrompt(dialogName: string, inParameters: EDataServer.NamedParameters | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
     * @param outValues Where to store values from the extension, or %NULL
     */
    extensionPromptFinish(result: Gio.AsyncResult, outValues: EDataServer.NamedParameters | null): number
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
     * @param dialogName name of a dialog to invoke
     * @param inParameters optional parameters to pass to extension; can be %NULL
     * @param outValues Where to store values from the extension, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     */
    extensionPromptSync(dialogName: string, inParameters: EDataServer.NamedParameters | null, outValues: EDataServer.NamedParameters | null, cancellable: Gio.Cancellable | null): number
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
     * @param primaryText primary text of the prompt; can be %NULL
     * @param secondaryText secondary text of the prompt; can be %NULL
     * @param useMarkup whether both texts are with markup
     * @param buttonCaptions captions of buttons to    use in the message; can be %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    prompt(type: string | null, title: string | null, primaryText: string | null, secondaryText: string | null, useMarkup: boolean, buttonCaptions: string[] | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_user_prompter_prompt().
     * 
     * If an error occurred, the function sets `error` and returns -1.
     * @param result a #GAsyncResult
     */
    promptFinish(result: Gio.AsyncResult): number
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
     * @param primaryText primary text of the prompt; can be %NULL
     * @param secondaryText secondary text of the prompt; can be %NULL
     * @param useMarkup whether both texts are with markup
     * @param buttonCaptions captions of buttons to    use in the message; can be %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     */
    promptSync(type: string | null, title: string | null, primaryText: string | null, secondaryText: string | null, useMarkup: boolean, buttonCaptions: string[] | null, cancellable: Gio.Cancellable | null): number

    // Class property signals of EBackend-1.2.EBackend.UserPrompter

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class UserPrompter extends GObject.Object {

    // Own properties of EBackend-1.2.EBackend.UserPrompter

    static name: string
    static $gtype: GObject.GType<UserPrompter>

    // Constructors of EBackend-1.2.EBackend.UserPrompter

    constructor(config?: UserPrompter_ConstructProps) 
    /**
     * Creates a new instance of #EUserPrompter.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new instance of #EUserPrompter.
     * @constructor 
     */
    static new(): UserPrompter
    _init(config?: UserPrompter_ConstructProps): void
}

interface UserPrompterServer_ConstructProps extends EDataServer.Extensible_ConstructProps, DBusServer_ConstructProps {
}

/**
 * Signal callback interface for `prompt`
 */
interface UserPrompterServer_PromptSignalCallback {
    (promptId: number, type: string | null, title: string | null, primaryText: string | null, secondaryText: string | null, useMarkup: boolean, buttonCaptions: string[] | null): void
}

interface UserPrompterServer extends EDataServer.Extensible {

    // Owm methods of EBackend-1.2.EBackend.UserPrompterServer

    /**
     * Registers `extension` as a provider of `dialog_name` dialog. The names
     * are compared case sensitively and two extensions cannot provide
     * the same dialog. If the function succeeds, then it adds its own
     * reference on the `extension`.
     * 
     * Extensions providing multiple dialogs call this function multiple
     * times, for each dialog name separately.
     * @param extension an #EUserPrompterServerExtension descendant
     * @param dialogName name of a dialog, which the `extensions` implement
     */
    register(extension: EDataServer.Extension, dialogName: string): boolean
    /**
     * Finishes prompt initiated by a "prompt" signal or an extension prompt.
     * The `response` for non-extension prompts is a 0-based index of a button
     * used to close the prompt.
     * 
     * The `extension_values` is ignored for non-extension prompts.
     * @param promptId Id of a prompt, which was responded
     * @param response Response of the prompt
     * @param extensionValues For extension prompts can pass extra return values
     */
    response(promptId: number, response: number, extensionValues: EDataServer.NamedParameters | null): void

    // Own signals of EBackend-1.2.EBackend.UserPrompterServer

    connect(sigName: "prompt", callback: UserPrompterServer_PromptSignalCallback): number
    on(sigName: "prompt", callback: UserPrompterServer_PromptSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "prompt", callback: UserPrompterServer_PromptSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "prompt", callback: UserPrompterServer_PromptSignalCallback): NodeJS.EventEmitter
    emit(sigName: "prompt", type: string | null, title: string | null, primaryText: string | null, secondaryText: string | null, useMarkup: boolean, buttonCaptions: string[] | null, ...args: any[]): void

    // Class property signals of EBackend-1.2.EBackend.UserPrompterServer

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class UserPrompterServer extends DBusServer {

    // Own properties of EBackend-1.2.EBackend.UserPrompterServer

    static name: string
    static $gtype: GObject.GType<UserPrompterServer>

    // Constructors of EBackend-1.2.EBackend.UserPrompterServer

    constructor(config?: UserPrompterServer_ConstructProps) 
    /**
     * Creates a new instance of #EUserPrompterServer.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new instance of #EUserPrompterServer.
     * @constructor 
     */
    static new(): UserPrompterServer
    _init(config?: UserPrompterServer_ConstructProps): void
}

interface UserPrompterServerExtension_ConstructProps extends EDataServer.Extension_ConstructProps {
}

interface UserPrompterServerExtension {

    // Owm methods of EBackend-1.2.EBackend.UserPrompterServerExtension

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
     * @param promptId Prompt identificator, which is used in call to e_user_prompter_server_extension_response()
     * @param dialogName Name of a dialog to run
     * @param parameters Optional extension parameters for the dialog, as passed by a caller
     */
    prompt(promptId: number, dialogName: string, parameters: EDataServer.NamedParameters | null): boolean
    /**
     * A conveniente wrapper function around e_user_prompter_server_response(),
     * which ends previous call of e_user_prompter_server_extension_prompt().
     * The `response` and `values` is known only to the caller and to the dialog implementor,
     * it's not interpretted nor checked for correctness in any way in #EUserPrompterServer.
     * The only limitation of `values` is that the array elements are strings.
     * @param promptId Prompt identificator
     * @param response Response of the prompt
     * @param values Additional response values, if extension defines any
     */
    response(promptId: number, response: number, values: EDataServer.NamedParameters | null): void

    // Class property signals of EBackend-1.2.EBackend.UserPrompterServerExtension

    connect(sigName: "notify::extensible", callback: (...args: any[]) => void): number
    on(sigName: "notify::extensible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::extensible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::extensible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::extensible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class UserPrompterServerExtension extends EDataServer.Extension {

    // Own properties of EBackend-1.2.EBackend.UserPrompterServerExtension

    static name: string
    static $gtype: GObject.GType<UserPrompterServerExtension>

    // Constructors of EBackend-1.2.EBackend.UserPrompterServerExtension

    constructor(config?: UserPrompterServerExtension_ConstructProps) 
    _init(config?: UserPrompterServerExtension_ConstructProps): void
}

interface WebDAVCollectionBackend_ConstructProps extends CollectionBackend_ConstructProps {
}

interface WebDAVCollectionBackend {

    // Owm methods of EBackend-1.2.EBackend.WebDAVCollectionBackend

    /**
     * This function is usually called in EBackend::authenticate_sync() implementation
     * of the descendant, causing discovery of CalDAV and CardDAV sources on given URLs.
     * If either of `calendar_url` and `contacts_url` is %NULL, that that part is skipped.
     * The `calendar_url` covers all calendars, memo lists and task lists.
     * 
     * The function also takes care of e_collection_backend_authenticate_children() on success.
     * @param calendarUrl a URL to search calendars at, or %NULL
     * @param contactsUrl a URL to search contacts at, or %NULL
     * @param credentials credentials to use when running the discovery
     * @param cancellable optional #GCancellable object, or %NULL
     */
    discoverSync(calendarUrl: string | null, contactsUrl: string | null, credentials: EDataServer.NamedParameters, cancellable: Gio.Cancellable | null): [ /* returnType */ EDataServer.SourceAuthenticationResult, /* outCertificatePem */ string | null, /* outCertificateErrors */ Gio.TlsCertificateFlags | null ]
    /**
     * Verifies that the `source` is expected here and returns its resource ID,
     * which is used in call to e_collection_backend_new_child(). It returns %NULL,
     * when the `source` is not part of the backend and should be removed instead.
     * The default implementation allows all sources, which has %ESourceResource
     * extension defined.
     * @param source an #ESource
     */
    getResourceId(source: EDataServer.Source): string | null
    isCustomSource(source: EDataServer.Source): boolean

    // Class property signals of EBackend-1.2.EBackend.WebDAVCollectionBackend

    connect(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::server", callback: (...args: any[]) => void): number
    on(sigName: "notify::server", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::server", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::server", ...args: any[]): void
    connect(sigName: "notify::connectable", callback: (...args: any[]) => void): number
    on(sigName: "notify::connectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connectable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connectable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connectable", ...args: any[]): void
    connect(sigName: "notify::main-context", callback: (...args: any[]) => void): number
    on(sigName: "notify::main-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::main-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::main-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::main-context", ...args: any[]): void
    connect(sigName: "notify::online", callback: (...args: any[]) => void): number
    on(sigName: "notify::online", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::online", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::online", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::online", ...args: any[]): void
    connect(sigName: "notify::source", callback: (...args: any[]) => void): number
    on(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::user-prompter", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-prompter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-prompter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-prompter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-prompter", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
class WebDAVCollectionBackend extends CollectionBackend {

    // Own properties of EBackend-1.2.EBackend.WebDAVCollectionBackend

    static name: string
    static $gtype: GObject.GType<WebDAVCollectionBackend>

    // Constructors of EBackend-1.2.EBackend.WebDAVCollectionBackend

    constructor(config?: WebDAVCollectionBackend_ConstructProps) 
    _init(config?: WebDAVCollectionBackend_ConstructProps): void
}

interface BackendClass {

    // Own fields of EBackend-1.2.EBackend.BackendClass

    getDestinationAddress: (backend: Backend) => [ /* returnType */ boolean, /* host */ string, /* port */ number ]
    prepareShutdown: (backend: Backend) => void
    authenticateSync: (backend: Backend, credentials: EDataServer.NamedParameters, outCertificatePem: string, outCertificateErrors: Gio.TlsCertificateFlags, cancellable: Gio.Cancellable | null) => EDataServer.SourceAuthenticationResult
}

/**
 * Base class structure for the #EBackend class
 * @record 
 */
abstract class BackendClass {

    // Own properties of EBackend-1.2.EBackend.BackendClass

    static name: string
}

interface BackendFactoryClass {

    // Own fields of EBackend-1.2.EBackend.BackendFactoryClass

    getHashKey: (factory: BackendFactory) => string
    newBackend: (factory: BackendFactory, source: EDataServer.Source) => Backend
    /**
     * An #EModule associated with this backend factory
     * @field 
     */
    eModule: object
    /**
     * Whether subporcesses for this backend factory should share one process
     * @field 
     */
    shareSubprocess: boolean
}

/**
 * Base class structure for the #EBackendFactory class
 * @record 
 */
abstract class BackendFactoryClass {

    // Own properties of EBackend-1.2.EBackend.BackendFactoryClass

    static name: string
}

interface BackendFactoryPrivate {
}

class BackendFactoryPrivate {

    // Own properties of EBackend-1.2.EBackend.BackendFactoryPrivate

    static name: string
}

interface BackendPrivate {
}

class BackendPrivate {

    // Own properties of EBackend-1.2.EBackend.BackendPrivate

    static name: string
}

interface CacheClass {

    // Own fields of EBackend-1.2.EBackend.CacheClass

    putLocked: (cache: Cache, uid: string, revision: string, object: string, otherColumns: CacheColumnValues, offlineState: OfflineState, isReplace: boolean, cancellable: Gio.Cancellable | null) => boolean
    removeLocked: (cache: Cache, uid: string, cancellable: Gio.Cancellable | null) => boolean
    clearOfflineChangesLocked: (cache: Cache, cancellable: Gio.Cancellable | null) => boolean
    erase: (cache: Cache) => void
    beforePut: (cache: Cache, uid: string, revision: string, object: string, otherColumns: CacheColumnValues, isReplace: boolean, cancellable: Gio.Cancellable | null) => boolean
    beforeRemove: (cache: Cache, uid: string, cancellable: Gio.Cancellable | null) => boolean
    revisionChanged: (cache: Cache) => void
}

abstract class CacheClass {

    // Own properties of EBackend-1.2.EBackend.CacheClass

    static name: string
}

interface CacheColumnInfo {

    // Own fields of EBackend-1.2.EBackend.CacheColumnInfo

    name: string
    type: string
    indexName: string

    // Owm methods of EBackend-1.2.EBackend.CacheColumnInfo

    copy(): CacheColumnInfo | null
}

class CacheColumnInfo {

    // Own properties of EBackend-1.2.EBackend.CacheColumnInfo

    static name: string

    // Constructors of EBackend-1.2.EBackend.CacheColumnInfo

    constructor(name: string, type: string, indexName: string | null) 
    static new(name: string, type: string, indexName: string | null): CacheColumnInfo
    /**
     * Frees the `info` structure, previously allocated with e_cache_column_info_new()
     * or e_cache_column_info_copy().
     * @param info an #ECacheColumnInfo
     */
    static free(info: object | null): void
}

interface CacheColumnValues {

    // Owm methods of EBackend-1.2.EBackend.CacheColumnValues

    contains(name: string): boolean
    copy(): CacheColumnValues
    /**
     * Frees previously allocated `other_columns` with
     * e_cache_column_values_new() or e_cache_column_values_copy().
     */
    free(): void
    getSize(): number
    /**
     * Initialized the `iter,` thus the `other_columns` can be traversed
     * with g_hash_table_iter_next(). The key is a column name and
     * the value is the corresponding column value.
     * @param iter a #GHashTableIter
     */
    initIter(iter: GLib.HashTableIter): void
    /**
     * Looks up currently stored value for the column named `name`.
     * As the values can be %NULL one cannot distinguish between
     * a column which doesn't have stored any value and a column
     * which has stored %NULL value. Use e_cache_column_values_contains()
     * to check whether such column exitst in the `other_columns`.
     * The returned pointer is owned by `other_columns` and is valid until
     * the value is overwritten of the `other_columns` freed.
     * @param name a column name
     */
    lookup(name: string): string | null
    /**
     * Puts the `value` for column `name`. If contains a value for the same
     * column, then it is replaced. This creates a copy of both `name`
     * and `value`.
     * @param name a column name
     * @param value a column value
     */
    put(name: string, value: string | null): void
    /**
     * Removes value for the column named `name` from `other_columns`.
     * @param name a column name
     */
    remove(name: string): boolean
    /**
     * Removes all values from the `other_columns,` leaving it empty.
     */
    removeAll(): void
    /**
     * Puts the `value` for column `name`. If contains a value for the same
     * column, then it is replaced. This creates takes ownership of both
     * the `name` and the `value`.
     * @param name a column name
     * @param value a column value
     */
    take(name: string, value: string | null): void
    /**
     * Puts the `value` for column `name`. If contains a value for the same
     * column, then it is replaced. This creates a copy of the `name,` but
     * takes owner ship of the `value`.
     * @param name a column name
     * @param value a column value
     */
    takeValue(name: string, value: string | null): void
}

class CacheColumnValues {

    // Own properties of EBackend-1.2.EBackend.CacheColumnValues

    static name: string

    // Constructors of EBackend-1.2.EBackend.CacheColumnValues

    /**
     * Creates a new #ECacheColumnValues to store values for additional columns.
     * The column names are compared case insensitively.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #ECacheColumnValues to store values for additional columns.
     * The column names are compared case insensitively.
     * @constructor 
     */
    static new(): CacheColumnValues
}

interface CacheOfflineChange {

    // Own fields of EBackend-1.2.EBackend.CacheOfflineChange

    /**
     * UID of the object
     * @field 
     */
    uid: string
    /**
     * stored revision of the object
     * @field 
     */
    revision: string
    /**
     * the object itself
     * @field 
     */
    object: string
    /**
     * an #EOfflineState of the object
     * @field 
     */
    state: OfflineState

    // Owm methods of EBackend-1.2.EBackend.CacheOfflineChange

    copy(): CacheOfflineChange | null
}

/**
 * Holds the information about offline change for one object.
 * @record 
 */
class CacheOfflineChange {

    // Own properties of EBackend-1.2.EBackend.CacheOfflineChange

    static name: string

    // Constructors of EBackend-1.2.EBackend.CacheOfflineChange

    /**
     * Creates a new #ECacheOfflineChange with the offline `state`
     * information for the given `uid`.
     * @constructor 
     * @param uid a unique object identifier
     * @param revision a revision of the object
     * @param object object itself
     * @param state an #EOfflineState
     */
    constructor(uid: string, revision: string | null, object: string | null, state: OfflineState) 
    /**
     * Creates a new #ECacheOfflineChange with the offline `state`
     * information for the given `uid`.
     * @constructor 
     * @param uid a unique object identifier
     * @param revision a revision of the object
     * @param object object itself
     * @param state an #EOfflineState
     */
    static new(uid: string, revision: string | null, object: string | null, state: OfflineState): CacheOfflineChange
    /**
     * Frees the `change` structure, previously allocated with e_cache_offline_change_new()
     * or e_cache_offline_change_copy().
     * @param change an #ECacheOfflineChange
     */
    static free(change: object | null): void
}

interface CachePrivate {
}

class CachePrivate {

    // Own properties of EBackend-1.2.EBackend.CachePrivate

    static name: string
}

interface CacheReaperClass {
}

abstract class CacheReaperClass {

    // Own properties of EBackend-1.2.EBackend.CacheReaperClass

    static name: string
}

interface CollectionBackendClass {

    // Own fields of EBackend-1.2.EBackend.CollectionBackendClass

    populate: (backend: CollectionBackend) => void
    dupResourceId: (backend: CollectionBackend, childSource: EDataServer.Source) => string | null
    childAdded: (backend: CollectionBackend, childSource: EDataServer.Source) => void
    childRemoved: (backend: CollectionBackend, childSource: EDataServer.Source) => void
    createResourceSync: (backend: CollectionBackend, source: EDataServer.Source, cancellable: Gio.Cancellable | null) => boolean
    createResource: (backend: CollectionBackend, source: EDataServer.Source, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    createResourceFinish: (backend: CollectionBackend, result: Gio.AsyncResult) => boolean
    deleteResourceSync: (backend: CollectionBackend, source: EDataServer.Source, cancellable: Gio.Cancellable | null) => boolean
    deleteResource: (backend: CollectionBackend, source: EDataServer.Source, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    deleteResourceFinish: (backend: CollectionBackend, result: Gio.AsyncResult) => boolean
}

abstract class CollectionBackendClass {

    // Own properties of EBackend-1.2.EBackend.CollectionBackendClass

    static name: string
}

interface CollectionBackendFactoryClass {

    // Own fields of EBackend-1.2.EBackend.CollectionBackendFactoryClass

    prepareMail: (factory: CollectionBackendFactory, mailAccountSource: EDataServer.Source, mailIdentitySource: EDataServer.Source, mailTransportSource: EDataServer.Source) => void
}

abstract class CollectionBackendFactoryClass {

    // Own properties of EBackend-1.2.EBackend.CollectionBackendFactoryClass

    static name: string
}

interface CollectionBackendFactoryPrivate {
}

class CollectionBackendFactoryPrivate {

    // Own properties of EBackend-1.2.EBackend.CollectionBackendFactoryPrivate

    static name: string
}

interface CollectionBackendPrivate {
}

class CollectionBackendPrivate {

    // Own properties of EBackend-1.2.EBackend.CollectionBackendPrivate

    static name: string
}

interface DBusServerClass {

    // Own fields of EBackend-1.2.EBackend.DBusServerClass

    parentClass: GObject.ObjectClass
    busName: string
    moduleDirectory: string
    busAcquired: (server: DBusServer, connection: Gio.DBusConnection) => void
    busNameAcquired: (server: DBusServer, connection: Gio.DBusConnection) => void
    busNameLost: (server: DBusServer, connection: Gio.DBusConnection) => void
    runServer: (server: DBusServer) => DBusServerExitCode
    quitServer: (server: DBusServer, code: DBusServerExitCode) => void
    reserved: object[]
}

abstract class DBusServerClass {

    // Own properties of EBackend-1.2.EBackend.DBusServerClass

    static name: string
}

interface DBusServerPrivate {
}

class DBusServerPrivate {

    // Own properties of EBackend-1.2.EBackend.DBusServerPrivate

    static name: string
}

interface DataFactoryClass {

    // Own fields of EBackend-1.2.EBackend.DataFactoryClass

    parentClass: DBusServerClass
    backendFactoryType: GObject.GType
    factoryObjectPath: string
    dataObjectPathPrefix: string
    subprocessObjectPathPrefix: string
    subprocessBusNamePrefix: string
    getFactoryName: (backendFactory: BackendFactory) => string
    completeOpen: (dataFactory: DataFactory, invocation: Gio.DBusMethodInvocation, objectPath: string, busName: string, extensionName: string) => void
    createBackend: (dataFactory: DataFactory, backendFactory: BackendFactory, source: EDataServer.Source) => Backend | null
    openBackend: (dataFactory: DataFactory, backend: Backend, connection: Gio.DBusConnection, cancellable: Gio.Cancellable | null) => string
    reserved: object[]
}

abstract class DataFactoryClass {

    // Own properties of EBackend-1.2.EBackend.DataFactoryClass

    static name: string
}

interface DataFactoryPrivate {
}

class DataFactoryPrivate {

    // Own properties of EBackend-1.2.EBackend.DataFactoryPrivate

    static name: string
}

interface FileCacheClass {

    // Own fields of EBackend-1.2.EBackend.FileCacheClass

    parentClass: GObject.ObjectClass
}

abstract class FileCacheClass {

    // Own properties of EBackend-1.2.EBackend.FileCacheClass

    static name: string
}

interface FileCachePrivate {
}

class FileCachePrivate {

    // Own properties of EBackend-1.2.EBackend.FileCachePrivate

    static name: string
}

interface OAuth2SupportInterface {

    // Own fields of EBackend-1.2.EBackend.OAuth2SupportInterface

    getAccessTokenSync: (support: OAuth2Support, source: EDataServer.Source, cancellable: Gio.Cancellable | null) => [ /* returnType */ boolean, /* outAccessToken */ string, /* outExpiresIn */ number ]
    getAccessToken: (support: OAuth2Support, source: EDataServer.Source, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    getAccessTokenFinish: (support: OAuth2Support, result: Gio.AsyncResult) => [ /* returnType */ boolean, /* outAccessToken */ string, /* outExpiresIn */ number ]
}

abstract class OAuth2SupportInterface {

    // Own properties of EBackend-1.2.EBackend.OAuth2SupportInterface

    static name: string
}

interface ServerSideSourceClass {

    // Own fields of EBackend-1.2.EBackend.ServerSideSourceClass

    parentClass: EDataServer.SourceClass
}

abstract class ServerSideSourceClass {

    // Own properties of EBackend-1.2.EBackend.ServerSideSourceClass

    static name: string
}

interface ServerSideSourceCredentialsProviderClass {

    // Own fields of EBackend-1.2.EBackend.ServerSideSourceCredentialsProviderClass

    parentClass: EDataServer.SourceCredentialsProviderClass
}

abstract class ServerSideSourceCredentialsProviderClass {

    // Own properties of EBackend-1.2.EBackend.ServerSideSourceCredentialsProviderClass

    static name: string
}

interface ServerSideSourceCredentialsProviderPrivate {
}

class ServerSideSourceCredentialsProviderPrivate {

    // Own properties of EBackend-1.2.EBackend.ServerSideSourceCredentialsProviderPrivate

    static name: string
}

interface ServerSideSourcePrivate {
}

class ServerSideSourcePrivate {

    // Own properties of EBackend-1.2.EBackend.ServerSideSourcePrivate

    static name: string
}

interface SourceRegistryServerClass {

    // Own fields of EBackend-1.2.EBackend.SourceRegistryServerClass

    parentClass: DataFactoryClass
    loadError: (server: SourceRegistryServer, file: Gio.File, error: GLib.Error) => void
    filesLoaded: (server: SourceRegistryServer) => void
    sourceAdded: (server: SourceRegistryServer, source: EDataServer.Source) => void
    sourceRemoved: (server: SourceRegistryServer, source: EDataServer.Source) => void
    tweakKeyFile: (server: SourceRegistryServer, keyFile: GLib.KeyFile, uid: string) => boolean
    reserved: object[]
}

abstract class SourceRegistryServerClass {

    // Own properties of EBackend-1.2.EBackend.SourceRegistryServerClass

    static name: string
}

interface SourceRegistryServerPrivate {
}

class SourceRegistryServerPrivate {

    // Own properties of EBackend-1.2.EBackend.SourceRegistryServerPrivate

    static name: string
}

interface SubprocessFactoryClass {

    // Own fields of EBackend-1.2.EBackend.SubprocessFactoryClass

    parentClass: GObject.ObjectClass
    openData: (subprocessFactory: SubprocessFactory, backend: Backend, connection: Gio.DBusConnection, data: object | null, cancellable: Gio.Cancellable | null) => string
    backendCreated: (subprocessFactory: SubprocessFactory, backend: Backend) => void
    backendClosed: (subprocessFactory: SubprocessFactory, backend: Backend) => void
}

abstract class SubprocessFactoryClass {

    // Own properties of EBackend-1.2.EBackend.SubprocessFactoryClass

    static name: string
}

interface SubprocessFactoryPrivate {
}

class SubprocessFactoryPrivate {

    // Own properties of EBackend-1.2.EBackend.SubprocessFactoryPrivate

    static name: string
}

interface UserPrompterClass {

    // Own fields of EBackend-1.2.EBackend.UserPrompterClass

    parent: GObject.ObjectClass
}

abstract class UserPrompterClass {

    // Own properties of EBackend-1.2.EBackend.UserPrompterClass

    static name: string
}

interface UserPrompterPrivate {
}

class UserPrompterPrivate {

    // Own properties of EBackend-1.2.EBackend.UserPrompterPrivate

    static name: string
}

interface UserPrompterServerClass {

    // Own fields of EBackend-1.2.EBackend.UserPrompterServerClass

    parentClass: DBusServerClass
}

abstract class UserPrompterServerClass {

    // Own properties of EBackend-1.2.EBackend.UserPrompterServerClass

    static name: string
}

interface UserPrompterServerExtensionClass {

    // Own fields of EBackend-1.2.EBackend.UserPrompterServerExtensionClass

    parentClass: EDataServer.ExtensionClass
    registerDialogs: (extension: EDataServer.Extension, server: object) => void
    prompt: (extension: UserPrompterServerExtension, promptId: number, dialogName: string, parameters: EDataServer.NamedParameters | null) => boolean
}

abstract class UserPrompterServerExtensionClass {

    // Own properties of EBackend-1.2.EBackend.UserPrompterServerExtensionClass

    static name: string
}

interface UserPrompterServerExtensionPrivate {
}

class UserPrompterServerExtensionPrivate {

    // Own properties of EBackend-1.2.EBackend.UserPrompterServerExtensionPrivate

    static name: string
}

interface UserPrompterServerPrivate {
}

class UserPrompterServerPrivate {

    // Own properties of EBackend-1.2.EBackend.UserPrompterServerPrivate

    static name: string
}

interface WebDAVCollectionBackendClass {

    // Own fields of EBackend-1.2.EBackend.WebDAVCollectionBackendClass

    parentClass: CollectionBackendClass
    getResourceId: (webdavBackend: WebDAVCollectionBackend, source: EDataServer.Source) => string | null
    isCustomSource: (webdavBackend: WebDAVCollectionBackend, source: EDataServer.Source) => boolean
}

abstract class WebDAVCollectionBackendClass {

    // Own properties of EBackend-1.2.EBackend.WebDAVCollectionBackendClass

    static name: string
}

interface WebDAVCollectionBackendPrivate {
}

class WebDAVCollectionBackendPrivate {

    // Own properties of EBackend-1.2.EBackend.WebDAVCollectionBackendPrivate

    static name: string
}

}
export default EBackend;