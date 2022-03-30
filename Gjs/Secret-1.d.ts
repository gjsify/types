/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Secret-1
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Secret {

/**
 * Flags which determine which parts of the #SecretBackend are initialized.
 */
enum BackendFlags {
    /**
     * no flags for initializing the #SecretBackend
     */
    NONE,
    /**
     * establish a session for transfer of secrets
     *   while initializing the #SecretBackend
     */
    OPEN_SESSION,
    /**
     * load collections while initializing the
     *   #SecretBackend
     */
    LOAD_COLLECTIONS,
}
/**
 * Errors returned by the Secret Service.
 * 
 * None of the errors are appropriate for display to the user. It is up to the
 * application to handle them appropriately.
 */
enum Error {
    /**
     * received an invalid data or message from the Secret
     *   Service
     */
    PROTOCOL,
    /**
     * the item or collection is locked and the operation
     *   cannot be performed
     */
    IS_LOCKED,
    /**
     * no such item or collection found in the Secret
     *   Service
     */
    NO_SUCH_OBJECT,
    /**
     * a relevant item or collection already exists
     */
    ALREADY_EXISTS,
    /**
     * the file format is not valid
     */
    INVALID_FILE_FORMAT,
}
/**
 * The type of an attribute in a [struct`SecretSchema]`.
 * 
 * Attributes are stored as strings in the Secret Service, and the attribute
 * types simply define standard ways to store integer and boolean values as
 * strings.
 */
enum SchemaAttributeType {
    /**
     * a utf-8 string attribute
     */
    STRING,
    /**
     * an integer attribute, stored as a decimal
     */
    INTEGER,
    /**
     * a boolean attribute, stored as 'true' or 'false'
     */
    BOOLEAN,
}
/**
 * Different types of schemas for storing secrets, intended for use with
 * [func`get_schema]`.
 * 
 * ## `SECRET_SCHEMA_NOTE`
 * 
 * A predefined schema for personal passwords stored by the user in the
 * password manager. This schema has no attributes, and the items are not
 * meant to be used automatically by applications.
 * 
 * When used to search for items using this schema, it will only match
 * items that have the same schema. Items stored via libgnome-keyring with the
 * `GNOME_KEYRING_ITEM_NOTE` item type will match.
 * 
 * ## `SECRET_SCHEMA_COMPAT_NETWORK`
 * 
 * A predefined schema that is compatible with items stored via the
 * libgnome-keyring 'network password' functions. This is meant to be used by
 * applications migrating from libgnome-keyring which stored their secrets as
 * 'network passwords'. It is not recommended that new code use this schema.
 * 
 * When used to search for items using this schema, it will only match
 * items that have the same schema. Items stored via libgnome-keyring with the
 * `GNOME_KEYRING_ITEM_NETWORK_PASSWORD` item type will match.
 * 
 * The following attributes exist in the schema:
 * 
 * ### Attributes:
 * 
 * <table>
 *     <tr>
 *         <td><tt>user</tt>:</td>
 *         <td>The user name (string).</td>
 *     </tr>
 *     <tr>
 *         <td><tt>domain</tt>:</td>
 *         <td>The login domain or realm (string).</td></tr>
 *     <tr>
 *         <td><tt>object</tt>:</td>
 *         <td>The object or path (string).</td>
 *     </tr>
 *     <tr>
 *         <td><tt>protocol</tt>:</td>
 *         <td>The protocol (a string like 'http').</td>
 *     </tr>
 *     <tr>
 *         <td><tt>port</tt>:</td>
 *         <td>The network port (integer).</td>
 *     </tr>
 *     <tr>
 *         <td><tt>server</tt>:</td>
 *         <td>The hostname or server (string).</td>
 *     </tr>
 *     <tr>
 *         <td><tt>authtype</tt>:</td>
 *         <td>The authentication type (string).</td>
 *     </tr>
 * </table>
 */
enum SchemaType {
    /**
     * Personal passwords
     */
    NOTE,
    /**
     * Network passwords from older
     *    libgnome-keyring storage
     */
    COMPAT_NETWORK,
}
/**
 * Flags for [func`Collection`.create].
 */
enum CollectionCreateFlags {
    /**
     * no flags
     */
    NONE,
}
/**
 * Flags which determine which parts of the #SecretCollection proxy are initialized.
 */
enum CollectionFlags {
    /**
     * no flags
     */
    NONE,
    /**
     * items have or should be loaded
     */
    LOAD_ITEMS,
}
/**
 * Flags for [func`Item`.create].
 */
enum ItemCreateFlags {
    /**
     * no flags
     */
    NONE,
    /**
     * replace an item with the same attributes.
     */
    REPLACE,
}
/**
 * Flags which determine which parts of the #SecretItem proxy are initialized.
 */
enum ItemFlags {
    /**
     * no flags
     */
    NONE,
    /**
     * a secret has been (or should be) loaded for #SecretItem
     */
    LOAD_SECRET,
}
/**
 * Flags for a #SecretSchema definition.
 */
enum SchemaFlags {
    /**
     * no flags for the schema
     */
    NONE,
    /**
     * don't match the schema name when looking up or
     *   removing passwords
     */
    DONT_MATCH_NAME,
}
/**
 * Various flags to be used with [method`Service`.search] and [method`Service`.search_sync].
 */
enum SearchFlags {
    /**
     * no flags
     */
    NONE,
    /**
     * all the items matching the search will be returned, instead of just the first one
     */
    ALL,
    /**
     * unlock locked items while searching
     */
    UNLOCK,
    /**
     * while searching load secrets for items that are not locked
     */
    LOAD_SECRETS,
}
/**
 * Flags which determine which parts of the #SecretService proxy are initialized
 * during a [func`Service`.get] or [func`Service`.open] operation.
 */
enum ServiceFlags {
    /**
     * no flags for initializing the #SecretService
     */
    NONE,
    /**
     * establish a session for transfer of secrets
     *   while initializing the #SecretService
     */
    OPEN_SESSION,
    /**
     * load collections while initializing the
     *   #SecretService
     */
    LOAD_COLLECTIONS,
}
/**
 * Extension point for the secret backend.
 */
const BACKEND_EXTENSION_POINT_NAME: string
/**
 * An alias to the default collection.
 * 
 * This can be passed to [func`password_store]` [func`Collection`.for_alias].
 */
const COLLECTION_DEFAULT: string
/**
 * An alias to the session collection, which will be cleared when the user ends
 * the session.
 * 
 * This can be passed to [func`password_store]`, [func`Collection`.for_alias] or
 * similar functions.
 */
const COLLECTION_SESSION: string
/**
 * The major version of libsecret.
 */
const MAJOR_VERSION: number
/**
 * The micro version of libsecret.
 */
const MICRO_VERSION: number
/**
 * The minor version of libsecret.
 */
const MINOR_VERSION: number
function backend_get(flags: BackendFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function backend_get_finish(result: Gio.AsyncResult): Backend
function error_get_quark(): GLib.Quark
function get_schema(type: SchemaType): Schema
function password_clear_finish(result: Gio.AsyncResult): boolean
function password_clear(schema: Schema | null, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function password_clear_sync(schema: Schema | null, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null): boolean
function password_lookup_finish(result: Gio.AsyncResult): string
function password_lookup(schema: Schema | null, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function password_lookup_sync(schema: Schema | null, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null): string
function password_search_finish(result: Gio.AsyncResult): Retrievable[]
function password_search(schema: Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function password_search_sync(schema: Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable?: Gio.Cancellable | null): Retrievable[]
function password_store_finish(result: Gio.AsyncResult): boolean
function password_store(schema: Schema | null, attributes: GLib.HashTable, collection: string | null, label: string, password: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function password_store_binary(schema: Schema | null, attributes: GLib.HashTable, collection: string | null, label: string, value: Value, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function password_store_binary_sync(schema: Schema | null, attributes: GLib.HashTable, collection: string | null, label: string, value: Value, cancellable?: Gio.Cancellable | null): boolean
function password_store_sync(schema: Schema | null, attributes: GLib.HashTable, collection: string | null, label: string, password: string, cancellable?: Gio.Cancellable | null): boolean
function password_wipe(password?: string | null): void
class Backend {
    /* Properties of Secret-1.Secret.Backend */
    /**
     * A set of flags describing which parts of the secret backend have
     * been initialized.
     */
    readonly flags: ServiceFlags
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes asynchronous initialization and returns the result.
     * See g_async_initable_init_async().
     * @param res a #GAsyncResult.
     */
    init_finish(res: Gio.AsyncResult): boolean
    /**
     * Finishes the async construction for the various g_async_initable_new
     * calls, returning the created object or %NULL on error.
     * @param res the #GAsyncResult from the callback
     */
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Virtual methods of Secret-1.Secret.Backend */
    vfunc_clear(schema: Schema, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_clear_finish(result: Gio.AsyncResult): boolean
    vfunc_ensure_for_flags(flags: BackendFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_ensure_for_flags_finish(result: Gio.AsyncResult): boolean
    vfunc_lookup(schema: Schema, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_lookup_finish(result: Gio.AsyncResult): Value
    vfunc_search(schema: Schema, attributes: GLib.HashTable, flags: SearchFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_store(schema: Schema, attributes: GLib.HashTable, collection: string, label: string, value: Value, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_store_finish(result: Gio.AsyncResult): boolean
    /* Virtual methods of Gio-2.0.Gio.AsyncInitable */
    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes asynchronous initialization and returns the result.
     * See g_async_initable_init_async().
     * @param res a #GAsyncResult.
     */
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Get a #SecretBackend instance.
     * 
     * If such a backend already exists, then the same backend is returned.
     * 
     * If `flags` contains any flags of which parts of the secret backend to
     * ensure are initialized, then those will be initialized before completing.
     * 
     * This method will return immediately and complete asynchronously.
     * @param flags flags for which service functionality to ensure is initialized
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    static get(flags: BackendFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete an asynchronous operation to get a #SecretBackend.
     * @param result the asynchronous result passed to the callback
     */
    static get_finish(result: Gio.AsyncResult): Backend
}
class Retrievable {
    /* Properties of Secret-1.Secret.Retrievable */
    /**
     * The attributes set on this item.
     * 
     * Attributes are used to locate an item. They are not guaranteed to be
     * stored or transferred securely.
     */
    attributes: GLib.HashTable
    /**
     * The date and time (in seconds since the UNIX epoch) that this
     * item was created.
     */
    created: number
    /**
     * The human readable label for the item.
     */
    label: string
    /**
     * The date and time (in seconds since the UNIX epoch) that this
     * item was last modified.
     */
    modified: number
    /* Methods of Secret-1.Secret.Retrievable */
    /**
     * Get the attributes of this object.
     * 
     * The attributes are a mapping of string keys to string values.
     * Attributes are used to search for items. Attributes are not stored
     * or transferred securely by the secret service.
     * 
     * Do not modify the attribute returned by this method.
     */
    get_attributes(): GLib.HashTable
    /**
     * Get the created date and time of the object.
     * 
     * The return value is the number of seconds since the unix epoch, January 1st
     * 1970.
     */
    get_created(): number
    /**
     * Get the label of this item.
     */
    get_label(): string
    /**
     * Get the modified date and time of the object.
     * 
     * The return value is the number of seconds since the unix epoch, January 1st
     * 1970.
     */
    get_modified(): number
    /**
     * Retrieve the secret value of this object.
     * 
     * Each retrievable object has a single secret which might be a
     * password or some other secret binary value.
     * 
     * This function returns immediately and completes asynchronously.
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    retrieve_secret(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete asynchronous operation to retrieve the secret value of this object.
     * @param result asynchronous result passed to callback
     */
    retrieve_secret_finish(result: Gio.AsyncResult): Value | null
    /**
     * Retrieve the secret value of this object synchronously.
     * 
     * Each retrievable object has a single secret which might be a
     * password or some other secret binary value.
     * 
     * This method may block indefinitely and should not be used in user interface
     * threads.
     * @param cancellable optional cancellation object
     */
    retrieve_secret_sync(cancellable?: Gio.Cancellable | null): Value | null
    /* Virtual methods of Secret-1.Secret.Retrievable */
    /**
     * Retrieve the secret value of this object.
     * 
     * Each retrievable object has a single secret which might be a
     * password or some other secret binary value.
     * 
     * This function returns immediately and completes asynchronously.
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    vfunc_retrieve_secret(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete asynchronous operation to retrieve the secret value of this object.
     * @param result asynchronous result passed to callback
     */
    vfunc_retrieve_secret_finish(result: Gio.AsyncResult): Value | null
    static name: string
}
interface Collection_ConstructProps extends Gio.DBusProxy_ConstructProps {
    /* Constructor properties of Secret-1.Secret.Collection */
    /**
     * The date and time (in seconds since the UNIX epoch) that this
     * collection was created.
     */
    created?: number
    /**
     * A set of flags describing which parts of the secret collection have
     * been initialized.
     */
    flags?: CollectionFlags
    /**
     * The human readable label for the collection.
     * 
     * Setting this property will result in the label of the collection being
     * set asynchronously. To properly track the changing of the label use the
     * [method`Collection`.set_label] function.
     */
    label?: string
    /**
     * The date and time (in seconds since the UNIX epoch) that this
     * collection was last modified.
     */
    modified?: number
    /**
     * The [class`Service]` object that this collection is associated with and
     * uses to interact with the actual D-Bus Secret Service.
     */
    service?: Service
}
class Collection {
    /* Properties of Secret-1.Secret.Collection */
    /**
     * The date and time (in seconds since the UNIX epoch) that this
     * collection was created.
     */
    created: number
    /**
     * A set of flags describing which parts of the secret collection have
     * been initialized.
     */
    readonly flags: CollectionFlags
    /**
     * The human readable label for the collection.
     * 
     * Setting this property will result in the label of the collection being
     * set asynchronously. To properly track the changing of the label use the
     * [method`Collection`.set_label] function.
     */
    label: string
    /**
     * Whether the collection is locked or not.
     * 
     * To lock or unlock a collection use the [method`Service`.lock] or
     * [method`Service`.unlock] functions.
     */
    readonly locked: boolean
    /**
     * The date and time (in seconds since the UNIX epoch) that this
     * collection was last modified.
     */
    modified: number
    /**
     * The [class`Service]` object that this collection is associated with and
     * uses to interact with the actual D-Bus Secret Service.
     */
    readonly service: Service
    /* Properties of Gio-2.0.Gio.DBusProxy */
    /**
     * If this property is not %G_BUS_TYPE_NONE, then
     * #GDBusProxy:g-connection must be %NULL and will be set to the
     * #GDBusConnection obtained by calling g_bus_get() with the value
     * of this property.
     */
    readonly g_bus_type: Gio.BusType
    /**
     * The #GDBusConnection the proxy is for.
     */
    readonly g_connection: Gio.DBusConnection
    /**
     * The timeout to use if -1 (specifying default timeout) is passed
     * as `timeout_msec` in the g_dbus_proxy_call() and
     * g_dbus_proxy_call_sync() functions.
     * 
     * This allows applications to set a proxy-wide timeout for all
     * remote method invocations on the proxy. If this property is -1,
     * the default timeout (typically 25 seconds) is used. If set to
     * %G_MAXINT, then no timeout is used.
     */
    g_default_timeout: number
    /**
     * Flags from the #GDBusProxyFlags enumeration.
     */
    readonly g_flags: Gio.DBusProxyFlags
    /**
     * Ensure that interactions with this proxy conform to the given
     * interface. This is mainly to ensure that malformed data received
     * from the other peer is ignored. The given #GDBusInterfaceInfo is
     * said to be the "expected interface".
     * 
     * The checks performed are:
     * - When completing a method call, if the type signature of
     *   the reply message isn't what's expected, the reply is
     *   discarded and the #GError is set to %G_IO_ERROR_INVALID_ARGUMENT.
     * 
     * - Received signals that have a type signature mismatch are dropped and
     *   a warning is logged via g_warning().
     * 
     * - Properties received via the initial `GetAll()` call or via the
     *   `::PropertiesChanged` signal (on the
     *   [org.freedesktop.DBus.Properties](http://dbus.freedesktop.org/doc/dbus-specification.html#standard-interfaces-properties)
     *   interface) or set using g_dbus_proxy_set_cached_property()
     *   with a type signature mismatch are ignored and a warning is
     *   logged via g_warning().
     * 
     * Note that these checks are never done on methods, signals and
     * properties that are not referenced in the given
     * #GDBusInterfaceInfo, since extending a D-Bus interface on the
     * service-side is not considered an ABI break.
     */
    g_interface_info: Gio.DBusInterfaceInfo
    /**
     * The D-Bus interface name the proxy is for.
     */
    readonly g_interface_name: string
    /**
     * The well-known or unique name that the proxy is for.
     */
    readonly g_name: string
    /**
     * The unique name that owns #GDBusProxy:g-name or %NULL if no-one
     * currently owns that name. You may connect to #GObject::notify signal to
     * track changes to this property.
     */
    readonly g_name_owner: string
    /**
     * The object path the proxy is for.
     */
    readonly g_object_path: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Secret-1.Secret.Collection */
    /**
     * Delete this collection.
     * 
     * This method returns immediately and completes asynchronously. The secret
     * service may prompt the user. [method`Service`.prompt] will be used to handle
     * any prompts that show up.
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    delete(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete operation to delete this collection.
     * @param result asynchronous result passed to the callback
     */
    delete_finish(result: Gio.AsyncResult): boolean
    /**
     * Delete this collection.
     * 
     * This method may block indefinitely and should not be used in user interface
     * threads. The secret service may prompt the user. [method`Service`.prompt] will
     * be used to handle any prompts that show up.
     * @param cancellable optional cancellation object
     */
    delete_sync(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Get the created date and time of the collection.
     * 
     * The return value is the number of seconds since the unix epoch, January 1st
     * 1970.
     */
    get_created(): number
    /**
     * Get the flags representing what features of the #SecretCollection proxy
     * have been initialized.
     * 
     * Use [method`Collection`.load_items] to initialize further features and change
     * the flags.
     */
    get_flags(): CollectionFlags
    /**
     * Get the list of items in this collection.
     */
    get_items(): Item[]
    /**
     * Get the label of this collection.
     */
    get_label(): string
    /**
     * Get whether the collection is locked or not.
     * 
     * Use [method`Service`.lock] or [method`Service`.unlock] to lock or unlock the
     * collection.
     */
    get_locked(): boolean
    /**
     * Get the modified date and time of the collection.
     * 
     * The return value is the number of seconds since the unix epoch, January 1st
     * 1970.
     */
    get_modified(): number
    /**
     * Get the Secret Service object that this collection was created with.
     */
    get_service(): Service
    /**
     * Ensure that the #SecretCollection proxy has loaded all the items present
     * in the Secret Service.
     * 
     * This affects the result of [method`Collection`.get_items].
     * 
     * For collections returned from [method`Service`.get_collections] the items will
     * have already been loaded.
     * 
     * This method will return immediately and complete asynchronously.
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    load_items(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete an asynchronous operation to ensure that the #SecretCollection proxy
     * has loaded all the items present in the Secret Service.
     * @param result the asynchronous result passed to the callback
     */
    load_items_finish(result: Gio.AsyncResult): boolean
    /**
     * Ensure that the #SecretCollection proxy has loaded all the items present
     * in the Secret Service. This affects the result of
     * [method`Collection`.get_items].
     * 
     * For collections returned from [method`Service`.get_collections] the items
     * will have already been loaded.
     * 
     * This method may block indefinitely and should not be used in user interface
     * threads.
     * @param cancellable optional cancellation object
     */
    load_items_sync(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Refresh the properties on this collection. This fires off a request to
     * refresh, and the properties will be updated later.
     * 
     * Calling this method is not normally necessary, as the secret service
     * will notify the client when properties change.
     */
    refresh(): void
    /**
     * Search for items matching the `attributes` in the `collection`.
     * The `attributes` should be a table of string keys and string values.
     * 
     * If %SECRET_SEARCH_ALL is set in `flags,` then all the items matching the
     * search will be returned. Otherwise only the first item will be returned.
     * This is almost always the unlocked item that was most recently stored.
     * 
     * If %SECRET_SEARCH_UNLOCK is set in `flags,` then items will be unlocked
     * if necessary. In either case, locked and unlocked items will match the
     * search and be returned. If the unlock fails, the search does not fail.
     * 
     * If %SECRET_SEARCH_LOAD_SECRETS is set in `flags,` then the items will have
     * their secret values loaded and available via [method`Item`.get_secret].
     * 
     * This function returns immediately and completes asynchronously.
     * @param schema the schema for the attributes
     * @param attributes search for items matching these attributes
     * @param flags search option flags
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    search(schema: Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete asynchronous operation to search for items in a collection.
     * @param result asynchronous result passed to callback
     */
    search_finish(result: Gio.AsyncResult): Item[]
    /**
     * Search for items matching the `attributes` in the `collection`.
     * The `attributes` should be a table of string keys and string values.
     * 
     * If %SECRET_SEARCH_ALL is set in `flags,` then all the items matching the
     * search will be returned. Otherwise only the first item will be returned.
     * This is almost always the unlocked item that was most recently stored.
     * 
     * If %SECRET_SEARCH_UNLOCK is set in `flags,` then items will be unlocked
     * if necessary. In either case, locked and unlocked items will match the
     * search and be returned. If the unlock fails, the search does not fail.
     * 
     * If %SECRET_SEARCH_LOAD_SECRETS is set in `flags,` then the items will have
     * their secret values loaded and available via [method`Item`.get_secret].
     * 
     * This function may block indefinitely. Use the asynchronous version
     * in user interface threads.
     * @param schema the schema for the attributes
     * @param attributes search for items matching these attributes
     * @param flags search option flags
     * @param cancellable optional cancellation object
     */
    search_sync(schema: Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable?: Gio.Cancellable | null): Item[]
    /**
     * Set the label of this collection.
     * 
     * This function returns immediately and completes asynchronously.
     * @param label a new label
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    set_label(label: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete asynchronous operation to set the label of this collection.
     * @param result asynchronous result passed to callback
     */
    set_label_finish(result: Gio.AsyncResult): boolean
    /**
     * Set the label of this collection.
     * 
     * This function may block indefinitely. Use the asynchronous version
     * in user interface threads.
     * @param label a new label
     * @param cancellable optional cancellation object
     */
    set_label_sync(label: string, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Gio-2.0.Gio.DBusProxy */
    /**
     * Asynchronously invokes the `method_name` method on `proxy`.
     * 
     * If `method_name` contains any dots, then `name` is split into interface and
     * method name parts. This allows using `proxy` for invoking methods on
     * other interfaces.
     * 
     * If the #GDBusConnection associated with `proxy` is closed then
     * the operation will fail with %G_IO_ERROR_CLOSED. If
     * `cancellable` is canceled, the operation will fail with
     * %G_IO_ERROR_CANCELLED. If `parameters` contains a value not
     * compatible with the D-Bus protocol, the operation fails with
     * %G_IO_ERROR_INVALID_ARGUMENT.
     * 
     * If the `parameters` #GVariant is floating, it is consumed. This allows
     * convenient 'inline' use of g_variant_new(), e.g.:
     * 
     * ```c
     *  g_dbus_proxy_call (proxy,
     *                     "TwoStrings",
     *                     g_variant_new ("(ss)",
     *                                    "Thing One",
     *                                    "Thing Two"),
     *                     G_DBUS_CALL_FLAGS_NONE,
     *                     -1,
     *                     NULL,
     *                     (GAsyncReadyCallback) two_strings_done,
     *                     &data);
     * ```
     * 
     * 
     * If `proxy` has an expected interface (see
     * #GDBusProxy:g-interface-info) and `method_name` is referenced by it,
     * then the return value is checked against the return type.
     * 
     * This is an asynchronous method. When the operation is finished,
     * `callback` will be invoked in the
     * [thread-default main context][g-main-context-push-thread-default]
     * of the thread you are calling this method from.
     * You can then call g_dbus_proxy_call_finish() to get the result of
     * the operation. See g_dbus_proxy_call_sync() for the synchronous
     * version of this method.
     * 
     * If `callback` is %NULL then the D-Bus method call message will be sent with
     * the %G_DBUS_MESSAGE_FLAGS_NO_REPLY_EXPECTED flag set.
     * @param method_name Name of method to invoke.
     * @param parameters A #GVariant tuple with parameters for the signal or %NULL if not passing parameters.
     * @param flags Flags from the #GDBusCallFlags enumeration.
     * @param timeout_msec The timeout in milliseconds (with %G_MAXINT meaning                "infinite") or -1 to use the proxy default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
     */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with g_dbus_proxy_call().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to g_dbus_proxy_call().
     */
    call_finish(res: Gio.AsyncResult): GLib.Variant
    /**
     * Synchronously invokes the `method_name` method on `proxy`.
     * 
     * If `method_name` contains any dots, then `name` is split into interface and
     * method name parts. This allows using `proxy` for invoking methods on
     * other interfaces.
     * 
     * If the #GDBusConnection associated with `proxy` is disconnected then
     * the operation will fail with %G_IO_ERROR_CLOSED. If
     * `cancellable` is canceled, the operation will fail with
     * %G_IO_ERROR_CANCELLED. If `parameters` contains a value not
     * compatible with the D-Bus protocol, the operation fails with
     * %G_IO_ERROR_INVALID_ARGUMENT.
     * 
     * If the `parameters` #GVariant is floating, it is consumed. This allows
     * convenient 'inline' use of g_variant_new(), e.g.:
     * 
     * ```c
     *  g_dbus_proxy_call_sync (proxy,
     *                          "TwoStrings",
     *                          g_variant_new ("(ss)",
     *                                         "Thing One",
     *                                         "Thing Two"),
     *                          G_DBUS_CALL_FLAGS_NONE,
     *                          -1,
     *                          NULL,
     *                          &error);
     * ```
     * 
     * 
     * The calling thread is blocked until a reply is received. See
     * g_dbus_proxy_call() for the asynchronous version of this
     * method.
     * 
     * If `proxy` has an expected interface (see
     * #GDBusProxy:g-interface-info) and `method_name` is referenced by it,
     * then the return value is checked against the return type.
     * @param method_name Name of method to invoke.
     * @param parameters A #GVariant tuple with parameters for the signal              or %NULL if not passing parameters.
     * @param flags Flags from the #GDBusCallFlags enumeration.
     * @param timeout_msec The timeout in milliseconds (with %G_MAXINT meaning                "infinite") or -1 to use the proxy default timeout.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    /**
     * Like g_dbus_proxy_call() but also takes a #GUnixFDList object.
     * 
     * This method is only available on UNIX.
     * @param method_name Name of method to invoke.
     * @param parameters A #GVariant tuple with parameters for the signal or %NULL if not passing parameters.
     * @param flags Flags from the #GDBusCallFlags enumeration.
     * @param timeout_msec The timeout in milliseconds (with %G_MAXINT meaning                "infinite") or -1 to use the proxy default timeout.
     * @param fd_list A #GUnixFDList or %NULL.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
     */
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with g_dbus_proxy_call_with_unix_fd_list().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to g_dbus_proxy_call_with_unix_fd_list().
     */
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    /**
     * Like g_dbus_proxy_call_sync() but also takes and returns #GUnixFDList objects.
     * 
     * This method is only available on UNIX.
     * @param method_name Name of method to invoke.
     * @param parameters A #GVariant tuple with parameters for the signal              or %NULL if not passing parameters.
     * @param flags Flags from the #GDBusCallFlags enumeration.
     * @param timeout_msec The timeout in milliseconds (with %G_MAXINT meaning                "infinite") or -1 to use the proxy default timeout.
     * @param fd_list A #GUnixFDList or %NULL.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    /**
     * Looks up the value for a property from the cache. This call does no
     * blocking IO.
     * 
     * If `proxy` has an expected interface (see
     * #GDBusProxy:g-interface-info) and `property_name` is referenced by
     * it, then `value` is checked against the type of the property.
     * @param property_name Property name.
     */
    get_cached_property(property_name: string): GLib.Variant | null
    /**
     * Gets the names of all cached properties on `proxy`.
     */
    get_cached_property_names(): string[] | null
    /**
     * Gets the connection `proxy` is for.
     */
    get_connection(): Gio.DBusConnection
    /**
     * Gets the timeout to use if -1 (specifying default timeout) is
     * passed as `timeout_msec` in the g_dbus_proxy_call() and
     * g_dbus_proxy_call_sync() functions.
     * 
     * See the #GDBusProxy:g-default-timeout property for more details.
     */
    get_default_timeout(): number
    /**
     * Gets the flags that `proxy` was constructed with.
     */
    get_flags(): Gio.DBusProxyFlags
    /**
     * Returns the #GDBusInterfaceInfo, if any, specifying the interface
     * that `proxy` conforms to. See the #GDBusProxy:g-interface-info
     * property for more details.
     */
    get_interface_info(): Gio.DBusInterfaceInfo | null
    /**
     * Gets the D-Bus interface name `proxy` is for.
     */
    get_interface_name(): string
    /**
     * Gets the name that `proxy` was constructed for.
     * 
     * When connected to a message bus, this will usually be non-%NULL.
     * However, it may be %NULL for a proxy that communicates using a peer-to-peer
     * pattern.
     */
    get_name(): string | null
    /**
     * The unique name that owns the name that `proxy` is for or %NULL if
     * no-one currently owns that name. You may connect to the
     * #GObject::notify signal to track changes to the
     * #GDBusProxy:g-name-owner property.
     */
    get_name_owner(): string | null
    /**
     * Gets the object path `proxy` is for.
     */
    get_object_path(): string
    /**
     * If `value` is not %NULL, sets the cached value for the property with
     * name `property_name` to the value in `value`.
     * 
     * If `value` is %NULL, then the cached value is removed from the
     * property cache.
     * 
     * If `proxy` has an expected interface (see
     * #GDBusProxy:g-interface-info) and `property_name` is referenced by
     * it, then `value` is checked against the type of the property.
     * 
     * If the `value` #GVariant is floating, it is consumed. This allows
     * convenient 'inline' use of g_variant_new(), e.g.
     * 
     * ```c
     *  g_dbus_proxy_set_cached_property (proxy,
     *                                    "SomeProperty",
     *                                    g_variant_new ("(si)",
     *                                                  "A String",
     *                                                  42));
     * ```
     * 
     * 
     * Normally you will not need to use this method since `proxy`
     * is tracking changes using the
     * `org.freedesktop.DBus.Properties.PropertiesChanged`
     * D-Bus signal. However, for performance reasons an object may
     * decide to not use this signal for some properties and instead
     * use a proprietary out-of-band mechanism to transmit changes.
     * 
     * As a concrete example, consider an object with a property
     * `ChatroomParticipants` which is an array of strings. Instead of
     * transmitting the same (long) array every time the property changes,
     * it is more efficient to only transmit the delta using e.g. signals
     * `ChatroomParticipantJoined(String name)` and
     * `ChatroomParticipantParted(String name)`.
     * @param property_name Property name.
     * @param value Value for the property or %NULL to remove it from the cache.
     */
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    /**
     * Sets the timeout to use if -1 (specifying default timeout) is
     * passed as `timeout_msec` in the g_dbus_proxy_call() and
     * g_dbus_proxy_call_sync() functions.
     * 
     * See the #GDBusProxy:g-default-timeout property for more details.
     * @param timeout_msec Timeout in milliseconds.
     */
    set_default_timeout(timeout_msec: number): void
    /**
     * Ensure that interactions with `proxy` conform to the given
     * interface. See the #GDBusProxy:g-interface-info property for more
     * details.
     * @param info Minimum interface this proxy conforms to    or %NULL to unset.
     */
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes asynchronous initialization and returns the result.
     * See g_async_initable_init_async().
     * @param res a #GAsyncResult.
     */
    init_finish(res: Gio.AsyncResult): boolean
    /**
     * Finishes the async construction for the various g_async_initable_new
     * calls, returning the created object or %NULL on error.
     * @param res the #GAsyncResult from the callback
     */
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    /**
     * Gets the #GDBusObject that `interface_` belongs to, if any.
     */
    get_object(): Gio.DBusObject | null
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     */
    get_info(): Gio.DBusInterfaceInfo
    /**
     * Sets the #GDBusObject for `interface_` to `object`.
     * 
     * Note that `interface_` will hold a weak reference to `object`.
     * @param object A #GDBusObject or %NULL.
     */
    set_object(object?: Gio.DBusObject | null): void
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
    /* Virtual methods of Secret-1.Secret.Collection */
    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes asynchronous initialization and returns the result.
     * See g_async_initable_init_async().
     * @param res a #GAsyncResult.
     */
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    /**
     * Gets the #GDBusObject that `interface_` belongs to, if any.
     */
    vfunc_dup_object(): Gio.DBusObject | null
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     */
    vfunc_get_info(): Gio.DBusInterfaceInfo
    /**
     * Sets the #GDBusObject for `interface_` to `object`.
     * 
     * Note that `interface_` will hold a weak reference to `object`.
     * @param object A #GDBusObject or %NULL.
     */
    vfunc_set_object(object?: Gio.DBusObject | null): void
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
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
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
    /* Signals of Gio-2.0.Gio.DBusProxy */
    /**
     * Emitted when one or more D-Bus properties on `proxy` changes. The
     * local cache has already been updated when this signal fires. Note
     * that both `changed_properties` and `invalidated_properties` are
     * guaranteed to never be %NULL (either may be empty though).
     * 
     * If the proxy has the flag
     * %G_DBUS_PROXY_FLAGS_GET_INVALIDATED_PROPERTIES set, then
     * `invalidated_properties` will always be empty.
     * 
     * This signal corresponds to the
     * `PropertiesChanged` D-Bus signal on the
     * `org.freedesktop.DBus.Properties` interface.
     * @param changed_properties A #GVariant containing the properties that changed (type: `a{sv}`)
     * @param invalidated_properties A %NULL terminated array of properties that was invalidated
     */
    connect(sigName: "g-properties-changed", callback: (($obj: Collection, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: Collection, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    /**
     * Emitted when a signal from the remote object and interface that `proxy` is for, has been received.
     * 
     * Since 2.72 this signal supports detailed connections. You can connect to
     * the detailed signal `g-signal::x` in order to receive callbacks only when
     * signal `x` is received from the remote object.
     * @param sender_name The sender of the signal or %NULL if the connection is not a bus connection.
     * @param signal_name The name of the signal.
     * @param parameters A #GVariant tuple with parameters for the signal.
     */
    connect(sigName: "g-signal", callback: (($obj: Collection, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: Collection, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
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
    connect(sigName: "notify", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::created", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::flags", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::locked", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locked", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modified", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::service", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-bus-type", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-connection", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-default-timeout", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-flags", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-name", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-object-path", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Collection_ConstructProps)
    _init (config?: Collection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Create a new collection in the secret service.
     * 
     * This method returns immediately and completes asynchronously. The secret
     * service may prompt the user. [method`Service`.prompt] will be used to handle
     * any prompts that are required.
     * 
     * An `alias` is a well-known tag for a collection, such as 'default' (ie: the
     * default collection to store items in). This allows other applications to
     * easily identify and share a collection. If you specify an `alias,` and a
     * collection with that alias already exists, then a new collection will not
     * be created. The previous one will be returned instead.
     * 
     * If `service` is %NULL, then [func`Service`.get] will be called to get the
     * default [class`Service]` proxy.
     * @param service a secret service object
     * @param label label for the new collection
     * @param alias alias to assign to the collection
     * @param flags currently unused
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    static create(service: Service | null, label: string, alias: string | null, flags: CollectionCreateFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finish operation to create a new collection in the secret service.
     * @param result the asynchronous result passed to the callback
     */
    static create_finish(result: Gio.AsyncResult): Collection
    /**
     * Create a new collection in the secret service.
     * 
     * This method may block indefinitely and should not be used in user interface
     * threads. The secret service may prompt the user. [method`Service`.prompt]
     * will be used to handle any prompts that are required.
     * 
     * An `alias` is a well-known tag for a collection, such as `default` (ie: the
     * default collection to store items in). This allows other applications to
     * easily identify and share a collection. If you specify an `alias,` and a
     * collection with that alias already exists, then a new collection will not
     * be created. The previous one will be returned instead.
     * 
     * If `service` is %NULL, then [func`Service`.get_sync] will be called to get the
     * default [class`Service]` proxy.
     * @param service a secret service object
     * @param label label for the new collection
     * @param alias alias to assign to the collection
     * @param flags currently unused
     * @param cancellable optional cancellation object
     */
    static create_sync(service: Service | null, label: string, alias: string | null, flags: CollectionCreateFlags, cancellable?: Gio.Cancellable | null): Collection
    /**
     * Lookup which collection is assigned to this alias. Aliases help determine
     * well known collections, such as 'default'.
     * 
     * If `service` is %NULL, then [func`Service`.get] will be called to get the
     * default [class`Service]` proxy.
     * 
     * This method will return immediately and complete asynchronously.
     * @param service a secret service object
     * @param alias the alias to lookup
     * @param flags options for the collection initialization
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    static for_alias(service: Service | null, alias: string, flags: CollectionFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous operation to lookup which collection is assigned
     * to an alias.
     * @param result asynchronous result passed to callback
     */
    static for_alias_finish(result: Gio.AsyncResult): Collection
    /**
     * Lookup which collection is assigned to this alias. Aliases help determine
     * well known collections, such as `default`.
     * 
     * If `service` is %NULL, then [func`Service`.get_sync] will be called to get the
     * default [class`Service]` proxy.
     * 
     * This method may block and should not be used in user interface threads.
     * @param service a secret service object
     * @param alias the alias to lookup
     * @param flags options for the collection initialization
     * @param cancellable optional cancellation object
     */
    static for_alias_sync(service: Service | null, alias: string, flags: CollectionFlags, cancellable?: Gio.Cancellable | null): Collection
    /**
     * Helper function for constructing #GAsyncInitable object. This is
     * similar to g_object_newv() but also initializes the object asynchronously.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_new_finish() to get the new object and check
     * for any errors.
     * @param object_type a #GType supporting #GAsyncInitable.
     * @param n_parameters the number of parameters in `parameters`
     * @param parameters the parameters to use to construct the object
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the initialization is     finished
     */
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
interface Item_ConstructProps extends Gio.DBusProxy_ConstructProps {
    /* Constructor properties of Secret-1.Secret.Item */
    /**
     * A set of flags describing which parts of the secret item have
     * been initialized.
     */
    flags?: ItemFlags
    /**
     * The [class`Service]` object that this item is associated with and
     * uses to interact with the actual D-Bus Secret Service.
     */
    service?: Service
    /* Constructor properties of Secret-1.Secret.Retrievable */
    /**
     * The attributes set on this item.
     * 
     * Attributes are used to locate an item. They are not guaranteed to be
     * stored or transferred securely.
     */
    attributes?: GLib.HashTable
    /**
     * The date and time (in seconds since the UNIX epoch) that this
     * item was created.
     */
    created?: number
    /**
     * The human readable label for the item.
     */
    label?: string
    /**
     * The date and time (in seconds since the UNIX epoch) that this
     * item was last modified.
     */
    modified?: number
}
class Item {
    /* Properties of Secret-1.Secret.Item */
    /**
     * A set of flags describing which parts of the secret item have
     * been initialized.
     */
    readonly flags: ItemFlags
    /**
     * Whether the item is locked or not.
     * 
     * An item may not be independently lockable separate from other items in
     * its collection.
     * 
     * To lock or unlock a item use the [method`Service`.lock] or
     * [method`Service`.unlock] functions.
     */
    readonly locked: boolean
    /**
     * The [class`Service]` object that this item is associated with and
     * uses to interact with the actual D-Bus Secret Service.
     */
    readonly service: Service
    /* Properties of Gio-2.0.Gio.DBusProxy */
    /**
     * If this property is not %G_BUS_TYPE_NONE, then
     * #GDBusProxy:g-connection must be %NULL and will be set to the
     * #GDBusConnection obtained by calling g_bus_get() with the value
     * of this property.
     */
    readonly g_bus_type: Gio.BusType
    /**
     * The #GDBusConnection the proxy is for.
     */
    readonly g_connection: Gio.DBusConnection
    /**
     * The timeout to use if -1 (specifying default timeout) is passed
     * as `timeout_msec` in the g_dbus_proxy_call() and
     * g_dbus_proxy_call_sync() functions.
     * 
     * This allows applications to set a proxy-wide timeout for all
     * remote method invocations on the proxy. If this property is -1,
     * the default timeout (typically 25 seconds) is used. If set to
     * %G_MAXINT, then no timeout is used.
     */
    g_default_timeout: number
    /**
     * Flags from the #GDBusProxyFlags enumeration.
     */
    readonly g_flags: Gio.DBusProxyFlags
    /**
     * Ensure that interactions with this proxy conform to the given
     * interface. This is mainly to ensure that malformed data received
     * from the other peer is ignored. The given #GDBusInterfaceInfo is
     * said to be the "expected interface".
     * 
     * The checks performed are:
     * - When completing a method call, if the type signature of
     *   the reply message isn't what's expected, the reply is
     *   discarded and the #GError is set to %G_IO_ERROR_INVALID_ARGUMENT.
     * 
     * - Received signals that have a type signature mismatch are dropped and
     *   a warning is logged via g_warning().
     * 
     * - Properties received via the initial `GetAll()` call or via the
     *   `::PropertiesChanged` signal (on the
     *   [org.freedesktop.DBus.Properties](http://dbus.freedesktop.org/doc/dbus-specification.html#standard-interfaces-properties)
     *   interface) or set using g_dbus_proxy_set_cached_property()
     *   with a type signature mismatch are ignored and a warning is
     *   logged via g_warning().
     * 
     * Note that these checks are never done on methods, signals and
     * properties that are not referenced in the given
     * #GDBusInterfaceInfo, since extending a D-Bus interface on the
     * service-side is not considered an ABI break.
     */
    g_interface_info: Gio.DBusInterfaceInfo
    /**
     * The D-Bus interface name the proxy is for.
     */
    readonly g_interface_name: string
    /**
     * The well-known or unique name that the proxy is for.
     */
    readonly g_name: string
    /**
     * The unique name that owns #GDBusProxy:g-name or %NULL if no-one
     * currently owns that name. You may connect to #GObject::notify signal to
     * track changes to this property.
     */
    readonly g_name_owner: string
    /**
     * The object path the proxy is for.
     */
    readonly g_object_path: string
    /* Properties of Secret-1.Secret.Retrievable */
    /**
     * The attributes set on this item.
     * 
     * Attributes are used to locate an item. They are not guaranteed to be
     * stored or transferred securely.
     */
    attributes: GLib.HashTable
    /**
     * The date and time (in seconds since the UNIX epoch) that this
     * item was created.
     */
    created: number
    /**
     * The human readable label for the item.
     */
    label: string
    /**
     * The date and time (in seconds since the UNIX epoch) that this
     * item was last modified.
     */
    modified: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Secret-1.Secret.Item */
    /**
     * Delete this item.
     * 
     * This method returns immediately and completes asynchronously. The secret
     * service may prompt the user. [method`Service`.prompt] will be used to handle
     * any prompts that show up.
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    delete(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete asynchronous operation to delete the secret item.
     * @param result asynchronous result passed to the callback
     */
    delete_finish(result: Gio.AsyncResult): boolean
    /**
     * Delete this secret item.
     * 
     * This method may block indefinitely and should not be used in user
     * interface threads. The secret service may prompt the user.
     * [method`Service`.prompt] will be used to handle any prompts that show up.
     * @param cancellable optional cancellation object
     */
    delete_sync(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Set the attributes of this item.
     * 
     * The `attributes` are a mapping of string keys to string values.
     * Attributes are used to search for items. Attributes are not stored
     * or transferred securely by the secret service.
     * 
     * Do not modify the attributes returned by this method. Use
     * [method`Item`.set_attributes] instead.
     */
    get_attributes(): GLib.HashTable
    /**
     * Get the created date and time of the item.
     * 
     * The return value is the number of seconds since the unix epoch, January 1st
     * 1970.
     */
    get_created(): number
    /**
     * Get the flags representing what features of the #SecretItem proxy
     * have been initialized.
     * 
     * Use [method`Item`.load_secret] to initialize further features
     * and change the flags.
     */
    get_flags(): ItemFlags
    /**
     * Get the label of this item.
     */
    get_label(): string
    /**
     * Get whether the item is locked or not.
     * 
     * Depending on the secret service an item may not be able to be locked
     * independently from the collection that it is in.
     */
    get_locked(): boolean
    /**
     * Get the modified date and time of the item.
     * 
     * The return value is the number of seconds since the unix epoch, January 1st
     * 1970.
     */
    get_modified(): number
    /**
     * Gets the name of the schema that this item was stored with. This is also
     * available at the `xdg:schema` attribute.
     */
    get_schema_name(): string | null
    /**
     * Get the secret value of this item.
     * 
     * If this item is locked or the secret has not yet been loaded then this will
     * return %NULL.
     * 
     * To load the secret call the [method`Item`.load_secret] method.
     */
    get_secret(): Value | null
    /**
     * Get the Secret Service object that this item was created with.
     */
    get_service(): Service
    /**
     * Load the secret value of this item.
     * 
     * Each item has a single secret which might be a password or some
     * other secret binary value.
     * 
     * This function will fail if the secret item is locked.
     * 
     * This function returns immediately and completes asynchronously.
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    load_secret(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete asynchronous operation to load the secret value of this item.
     * 
     * The newly loaded secret value can be accessed by calling
     * [method`Item`.get_secret].
     * @param result asynchronous result passed to callback
     */
    load_secret_finish(result: Gio.AsyncResult): boolean
    /**
     * Load the secret value of this item.
     * 
     * Each item has a single secret which might be a password or some
     * other secret binary value.
     * 
     * This function may block indefinitely. Use the asynchronous version
     * in user interface threads.
     * @param cancellable optional cancellation object
     */
    load_secret_sync(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Refresh the properties on this item.
     * 
     * This fires off a request to refresh, and the properties will be updated
     * later.
     * 
     * Calling this method is not normally necessary, as the secret service
     * will notify the client when properties change.
     */
    refresh(): void
    /**
     * Set the attributes of this item.
     * 
     * The `attributes` are a mapping of string keys to string values.
     * Attributes are used to search for items. Attributes are not stored
     * or transferred securely by the secret service.
     * 
     * This function returns immediately and completes asynchronously.
     * @param schema the schema for the attributes
     * @param attributes a new set of attributes
     * @param cancellable optional cancellation object
     * @param callback called when the asynchronous operation completes
     */
    set_attributes(schema: Schema | null, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete operation to set the attributes of this item.
     * @param result asynchronous result passed to the callback
     */
    set_attributes_finish(result: Gio.AsyncResult): boolean
    /**
     * Set the attributes of this item.
     * 
     * The `attributes` are a mapping of string keys to string values.
     * Attributes are used to search for items. Attributes are not stored
     * or transferred securely by the secret service.
     * 
     * This function may block indefinitely. Use the asynchronous version
     * in user interface threads.
     * @param schema the schema for the attributes
     * @param attributes a new set of attributes
     * @param cancellable optional cancellation object
     */
    set_attributes_sync(schema: Schema | null, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Set the label of this item.
     * 
     * This function returns immediately and completes asynchronously.
     * @param label a new label
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    set_label(label: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete asynchronous operation to set the label of this collection.
     * @param result asynchronous result passed to callback
     */
    set_label_finish(result: Gio.AsyncResult): boolean
    /**
     * Set the label of this item.
     * 
     * This function may block indefinitely. Use the asynchronous version
     * in user interface threads.
     * @param label a new label
     * @param cancellable optional cancellation object
     */
    set_label_sync(label: string, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Set the secret value of this item.
     * 
     * Each item has a single secret which might be a password or some
     * other secret binary value.
     * 
     * This function returns immediately and completes asynchronously.
     * @param value a new secret value
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    set_secret(value: Value, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete asynchronous operation to set the secret value of this item.
     * @param result asynchronous result passed to callback
     */
    set_secret_finish(result: Gio.AsyncResult): boolean
    /**
     * Set the secret value of this item.
     * 
     * Each item has a single secret which might be a password or some
     * other secret binary value.
     * 
     * This function may block indefinitely. Use the asynchronous version
     * in user interface threads.
     * @param value a new secret value
     * @param cancellable optional cancellation object
     */
    set_secret_sync(value: Value, cancellable?: Gio.Cancellable | null): boolean
    /* Methods of Gio-2.0.Gio.DBusProxy */
    /**
     * Asynchronously invokes the `method_name` method on `proxy`.
     * 
     * If `method_name` contains any dots, then `name` is split into interface and
     * method name parts. This allows using `proxy` for invoking methods on
     * other interfaces.
     * 
     * If the #GDBusConnection associated with `proxy` is closed then
     * the operation will fail with %G_IO_ERROR_CLOSED. If
     * `cancellable` is canceled, the operation will fail with
     * %G_IO_ERROR_CANCELLED. If `parameters` contains a value not
     * compatible with the D-Bus protocol, the operation fails with
     * %G_IO_ERROR_INVALID_ARGUMENT.
     * 
     * If the `parameters` #GVariant is floating, it is consumed. This allows
     * convenient 'inline' use of g_variant_new(), e.g.:
     * 
     * ```c
     *  g_dbus_proxy_call (proxy,
     *                     "TwoStrings",
     *                     g_variant_new ("(ss)",
     *                                    "Thing One",
     *                                    "Thing Two"),
     *                     G_DBUS_CALL_FLAGS_NONE,
     *                     -1,
     *                     NULL,
     *                     (GAsyncReadyCallback) two_strings_done,
     *                     &data);
     * ```
     * 
     * 
     * If `proxy` has an expected interface (see
     * #GDBusProxy:g-interface-info) and `method_name` is referenced by it,
     * then the return value is checked against the return type.
     * 
     * This is an asynchronous method. When the operation is finished,
     * `callback` will be invoked in the
     * [thread-default main context][g-main-context-push-thread-default]
     * of the thread you are calling this method from.
     * You can then call g_dbus_proxy_call_finish() to get the result of
     * the operation. See g_dbus_proxy_call_sync() for the synchronous
     * version of this method.
     * 
     * If `callback` is %NULL then the D-Bus method call message will be sent with
     * the %G_DBUS_MESSAGE_FLAGS_NO_REPLY_EXPECTED flag set.
     * @param method_name Name of method to invoke.
     * @param parameters A #GVariant tuple with parameters for the signal or %NULL if not passing parameters.
     * @param flags Flags from the #GDBusCallFlags enumeration.
     * @param timeout_msec The timeout in milliseconds (with %G_MAXINT meaning                "infinite") or -1 to use the proxy default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
     */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with g_dbus_proxy_call().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to g_dbus_proxy_call().
     */
    call_finish(res: Gio.AsyncResult): GLib.Variant
    /**
     * Synchronously invokes the `method_name` method on `proxy`.
     * 
     * If `method_name` contains any dots, then `name` is split into interface and
     * method name parts. This allows using `proxy` for invoking methods on
     * other interfaces.
     * 
     * If the #GDBusConnection associated with `proxy` is disconnected then
     * the operation will fail with %G_IO_ERROR_CLOSED. If
     * `cancellable` is canceled, the operation will fail with
     * %G_IO_ERROR_CANCELLED. If `parameters` contains a value not
     * compatible with the D-Bus protocol, the operation fails with
     * %G_IO_ERROR_INVALID_ARGUMENT.
     * 
     * If the `parameters` #GVariant is floating, it is consumed. This allows
     * convenient 'inline' use of g_variant_new(), e.g.:
     * 
     * ```c
     *  g_dbus_proxy_call_sync (proxy,
     *                          "TwoStrings",
     *                          g_variant_new ("(ss)",
     *                                         "Thing One",
     *                                         "Thing Two"),
     *                          G_DBUS_CALL_FLAGS_NONE,
     *                          -1,
     *                          NULL,
     *                          &error);
     * ```
     * 
     * 
     * The calling thread is blocked until a reply is received. See
     * g_dbus_proxy_call() for the asynchronous version of this
     * method.
     * 
     * If `proxy` has an expected interface (see
     * #GDBusProxy:g-interface-info) and `method_name` is referenced by it,
     * then the return value is checked against the return type.
     * @param method_name Name of method to invoke.
     * @param parameters A #GVariant tuple with parameters for the signal              or %NULL if not passing parameters.
     * @param flags Flags from the #GDBusCallFlags enumeration.
     * @param timeout_msec The timeout in milliseconds (with %G_MAXINT meaning                "infinite") or -1 to use the proxy default timeout.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    /**
     * Like g_dbus_proxy_call() but also takes a #GUnixFDList object.
     * 
     * This method is only available on UNIX.
     * @param method_name Name of method to invoke.
     * @param parameters A #GVariant tuple with parameters for the signal or %NULL if not passing parameters.
     * @param flags Flags from the #GDBusCallFlags enumeration.
     * @param timeout_msec The timeout in milliseconds (with %G_MAXINT meaning                "infinite") or -1 to use the proxy default timeout.
     * @param fd_list A #GUnixFDList or %NULL.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
     */
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with g_dbus_proxy_call_with_unix_fd_list().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to g_dbus_proxy_call_with_unix_fd_list().
     */
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    /**
     * Like g_dbus_proxy_call_sync() but also takes and returns #GUnixFDList objects.
     * 
     * This method is only available on UNIX.
     * @param method_name Name of method to invoke.
     * @param parameters A #GVariant tuple with parameters for the signal              or %NULL if not passing parameters.
     * @param flags Flags from the #GDBusCallFlags enumeration.
     * @param timeout_msec The timeout in milliseconds (with %G_MAXINT meaning                "infinite") or -1 to use the proxy default timeout.
     * @param fd_list A #GUnixFDList or %NULL.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    /**
     * Looks up the value for a property from the cache. This call does no
     * blocking IO.
     * 
     * If `proxy` has an expected interface (see
     * #GDBusProxy:g-interface-info) and `property_name` is referenced by
     * it, then `value` is checked against the type of the property.
     * @param property_name Property name.
     */
    get_cached_property(property_name: string): GLib.Variant | null
    /**
     * Gets the names of all cached properties on `proxy`.
     */
    get_cached_property_names(): string[] | null
    /**
     * Gets the connection `proxy` is for.
     */
    get_connection(): Gio.DBusConnection
    /**
     * Gets the timeout to use if -1 (specifying default timeout) is
     * passed as `timeout_msec` in the g_dbus_proxy_call() and
     * g_dbus_proxy_call_sync() functions.
     * 
     * See the #GDBusProxy:g-default-timeout property for more details.
     */
    get_default_timeout(): number
    /**
     * Gets the flags that `proxy` was constructed with.
     */
    get_flags(): Gio.DBusProxyFlags
    /**
     * Returns the #GDBusInterfaceInfo, if any, specifying the interface
     * that `proxy` conforms to. See the #GDBusProxy:g-interface-info
     * property for more details.
     */
    get_interface_info(): Gio.DBusInterfaceInfo | null
    /**
     * Gets the D-Bus interface name `proxy` is for.
     */
    get_interface_name(): string
    /**
     * Gets the name that `proxy` was constructed for.
     * 
     * When connected to a message bus, this will usually be non-%NULL.
     * However, it may be %NULL for a proxy that communicates using a peer-to-peer
     * pattern.
     */
    get_name(): string | null
    /**
     * The unique name that owns the name that `proxy` is for or %NULL if
     * no-one currently owns that name. You may connect to the
     * #GObject::notify signal to track changes to the
     * #GDBusProxy:g-name-owner property.
     */
    get_name_owner(): string | null
    /**
     * Gets the object path `proxy` is for.
     */
    get_object_path(): string
    /**
     * If `value` is not %NULL, sets the cached value for the property with
     * name `property_name` to the value in `value`.
     * 
     * If `value` is %NULL, then the cached value is removed from the
     * property cache.
     * 
     * If `proxy` has an expected interface (see
     * #GDBusProxy:g-interface-info) and `property_name` is referenced by
     * it, then `value` is checked against the type of the property.
     * 
     * If the `value` #GVariant is floating, it is consumed. This allows
     * convenient 'inline' use of g_variant_new(), e.g.
     * 
     * ```c
     *  g_dbus_proxy_set_cached_property (proxy,
     *                                    "SomeProperty",
     *                                    g_variant_new ("(si)",
     *                                                  "A String",
     *                                                  42));
     * ```
     * 
     * 
     * Normally you will not need to use this method since `proxy`
     * is tracking changes using the
     * `org.freedesktop.DBus.Properties.PropertiesChanged`
     * D-Bus signal. However, for performance reasons an object may
     * decide to not use this signal for some properties and instead
     * use a proprietary out-of-band mechanism to transmit changes.
     * 
     * As a concrete example, consider an object with a property
     * `ChatroomParticipants` which is an array of strings. Instead of
     * transmitting the same (long) array every time the property changes,
     * it is more efficient to only transmit the delta using e.g. signals
     * `ChatroomParticipantJoined(String name)` and
     * `ChatroomParticipantParted(String name)`.
     * @param property_name Property name.
     * @param value Value for the property or %NULL to remove it from the cache.
     */
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    /**
     * Sets the timeout to use if -1 (specifying default timeout) is
     * passed as `timeout_msec` in the g_dbus_proxy_call() and
     * g_dbus_proxy_call_sync() functions.
     * 
     * See the #GDBusProxy:g-default-timeout property for more details.
     * @param timeout_msec Timeout in milliseconds.
     */
    set_default_timeout(timeout_msec: number): void
    /**
     * Ensure that interactions with `proxy` conform to the given
     * interface. See the #GDBusProxy:g-interface-info property for more
     * details.
     * @param info Minimum interface this proxy conforms to    or %NULL to unset.
     */
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes asynchronous initialization and returns the result.
     * See g_async_initable_init_async().
     * @param res a #GAsyncResult.
     */
    init_finish(res: Gio.AsyncResult): boolean
    /**
     * Finishes the async construction for the various g_async_initable_new
     * calls, returning the created object or %NULL on error.
     * @param res the #GAsyncResult from the callback
     */
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    /**
     * Gets the #GDBusObject that `interface_` belongs to, if any.
     */
    get_object(): Gio.DBusObject | null
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     */
    get_info(): Gio.DBusInterfaceInfo
    /**
     * Sets the #GDBusObject for `interface_` to `object`.
     * 
     * Note that `interface_` will hold a weak reference to `object`.
     * @param object A #GDBusObject or %NULL.
     */
    set_object(object?: Gio.DBusObject | null): void
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
    /* Methods of Secret-1.Secret.Retrievable */
    /**
     * Retrieve the secret value of this object.
     * 
     * Each retrievable object has a single secret which might be a
     * password or some other secret binary value.
     * 
     * This function returns immediately and completes asynchronously.
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    retrieve_secret(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete asynchronous operation to retrieve the secret value of this object.
     * @param result asynchronous result passed to callback
     */
    retrieve_secret_finish(result: Gio.AsyncResult): Value | null
    /**
     * Retrieve the secret value of this object synchronously.
     * 
     * Each retrievable object has a single secret which might be a
     * password or some other secret binary value.
     * 
     * This method may block indefinitely and should not be used in user interface
     * threads.
     * @param cancellable optional cancellation object
     */
    retrieve_secret_sync(cancellable?: Gio.Cancellable | null): Value | null
    /* Virtual methods of Secret-1.Secret.Item */
    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes asynchronous initialization and returns the result.
     * See g_async_initable_init_async().
     * @param res a #GAsyncResult.
     */
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    /**
     * Gets the #GDBusObject that `interface_` belongs to, if any.
     */
    vfunc_dup_object(): Gio.DBusObject | null
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     */
    vfunc_get_info(): Gio.DBusInterfaceInfo
    /**
     * Sets the #GDBusObject for `interface_` to `object`.
     * 
     * Note that `interface_` will hold a weak reference to `object`.
     * @param object A #GDBusObject or %NULL.
     */
    vfunc_set_object(object?: Gio.DBusObject | null): void
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
    /**
     * Retrieve the secret value of this object.
     * 
     * Each retrievable object has a single secret which might be a
     * password or some other secret binary value.
     * 
     * This function returns immediately and completes asynchronously.
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    vfunc_retrieve_secret(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete asynchronous operation to retrieve the secret value of this object.
     * @param result asynchronous result passed to callback
     */
    vfunc_retrieve_secret_finish(result: Gio.AsyncResult): Value | null
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
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
    /* Signals of Gio-2.0.Gio.DBusProxy */
    /**
     * Emitted when one or more D-Bus properties on `proxy` changes. The
     * local cache has already been updated when this signal fires. Note
     * that both `changed_properties` and `invalidated_properties` are
     * guaranteed to never be %NULL (either may be empty though).
     * 
     * If the proxy has the flag
     * %G_DBUS_PROXY_FLAGS_GET_INVALIDATED_PROPERTIES set, then
     * `invalidated_properties` will always be empty.
     * 
     * This signal corresponds to the
     * `PropertiesChanged` D-Bus signal on the
     * `org.freedesktop.DBus.Properties` interface.
     * @param changed_properties A #GVariant containing the properties that changed (type: `a{sv}`)
     * @param invalidated_properties A %NULL terminated array of properties that was invalidated
     */
    connect(sigName: "g-properties-changed", callback: (($obj: Item, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: Item, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    /**
     * Emitted when a signal from the remote object and interface that `proxy` is for, has been received.
     * 
     * Since 2.72 this signal supports detailed connections. You can connect to
     * the detailed signal `g-signal::x` in order to receive callbacks only when
     * signal `x` is received from the remote object.
     * @param sender_name The sender of the signal or %NULL if the connection is not a bus connection.
     * @param signal_name The name of the signal.
     * @param parameters A #GVariant tuple with parameters for the signal.
     */
    connect(sigName: "g-signal", callback: (($obj: Item, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: Item, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
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
    connect(sigName: "notify", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::flags", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::locked", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locked", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::service", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-bus-type", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-connection", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-default-timeout", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-flags", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-name", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-object-path", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attributes", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::created", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modified", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Item_ConstructProps)
    _init (config?: Item_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Create a new item in the secret service.
     * 
     * If the `flags` contains %SECRET_ITEM_CREATE_REPLACE, then the secret
     * service will search for an item matching the `attributes,` and update that item
     * instead of creating a new one.
     * 
     * This method may block indefinitely and should not be used in user interface
     * threads. The secret service may prompt the user. [method`Service`.prompt]
     * will be used to handle any prompts that are required.
     * @param collection a secret collection to create this item in
     * @param schema the schema for the attributes
     * @param attributes attributes for the new item
     * @param label label for the new item
     * @param value secret value for the new item
     * @param flags flags for the creation of the new item
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    static create(collection: Collection, schema: Schema | null, attributes: GLib.HashTable, label: string, value: Value, flags: ItemCreateFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finish operation to create a new item in the secret service.
     * @param result the asynchronous result passed to the callback
     */
    static create_finish(result: Gio.AsyncResult): Item
    /**
     * Create a new item in the secret service.
     * 
     * If the `flags` contains %SECRET_ITEM_CREATE_REPLACE, then the secret
     * service will search for an item matching the `attributes,` and update that item
     * instead of creating a new one.
     * 
     * This method may block indefinitely and should not be used in user interface
     * threads. The secret service may prompt the user. [method`Service`.prompt]
     * will be used to handle any prompts that are required.
     * @param collection a secret collection to create this item in
     * @param schema the schema for the attributes
     * @param attributes attributes for the new item
     * @param label label for the new item
     * @param value secret value for the new item
     * @param flags flags for the creation of the new item
     * @param cancellable optional cancellation object
     */
    static create_sync(collection: Collection, schema: Schema | null, attributes: GLib.HashTable, label: string, value: Value, flags: ItemCreateFlags, cancellable?: Gio.Cancellable | null): Item
    /**
     * Load the secret values for a secret item stored in the service.
     * 
     * The `items` must all have the same [property`Item:`service] property.
     * 
     * This function returns immediately and completes asynchronously.
     * @param items the items to retrieve secrets for
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    static load_secrets(items: Item[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete asynchronous operation to load the secret values for
     * secret items stored in the service.
     * 
     * Items that are locked will not have their secrets loaded.
     * @param result asynchronous result passed to callback
     */
    static load_secrets_finish(result: Gio.AsyncResult): boolean
    /**
     * Load the secret values for a secret item stored in the service.
     * 
     * The `items` must all have the same [property`Item:`service] property.
     * 
     * This method may block indefinitely and should not be used in user interface
     * threads.
     * 
     * Items that are locked will not have their secrets loaded.
     * @param items the items to retrieve secrets for
     * @param cancellable optional cancellation object
     */
    static load_secrets_sync(items: Item[], cancellable?: Gio.Cancellable | null): boolean
    /**
     * Helper function for constructing #GAsyncInitable object. This is
     * similar to g_object_newv() but also initializes the object asynchronously.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_new_finish() to get the new object and check
     * for any errors.
     * @param object_type a #GType supporting #GAsyncInitable.
     * @param n_parameters the number of parameters in `parameters`
     * @param parameters the parameters to use to construct the object
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the initialization is     finished
     */
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
interface Prompt_ConstructProps extends Gio.DBusProxy_ConstructProps {
}
class Prompt {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    /**
     * If this property is not %G_BUS_TYPE_NONE, then
     * #GDBusProxy:g-connection must be %NULL and will be set to the
     * #GDBusConnection obtained by calling g_bus_get() with the value
     * of this property.
     */
    readonly g_bus_type: Gio.BusType
    /**
     * The #GDBusConnection the proxy is for.
     */
    readonly g_connection: Gio.DBusConnection
    /**
     * The timeout to use if -1 (specifying default timeout) is passed
     * as `timeout_msec` in the g_dbus_proxy_call() and
     * g_dbus_proxy_call_sync() functions.
     * 
     * This allows applications to set a proxy-wide timeout for all
     * remote method invocations on the proxy. If this property is -1,
     * the default timeout (typically 25 seconds) is used. If set to
     * %G_MAXINT, then no timeout is used.
     */
    g_default_timeout: number
    /**
     * Flags from the #GDBusProxyFlags enumeration.
     */
    readonly g_flags: Gio.DBusProxyFlags
    /**
     * Ensure that interactions with this proxy conform to the given
     * interface. This is mainly to ensure that malformed data received
     * from the other peer is ignored. The given #GDBusInterfaceInfo is
     * said to be the "expected interface".
     * 
     * The checks performed are:
     * - When completing a method call, if the type signature of
     *   the reply message isn't what's expected, the reply is
     *   discarded and the #GError is set to %G_IO_ERROR_INVALID_ARGUMENT.
     * 
     * - Received signals that have a type signature mismatch are dropped and
     *   a warning is logged via g_warning().
     * 
     * - Properties received via the initial `GetAll()` call or via the
     *   `::PropertiesChanged` signal (on the
     *   [org.freedesktop.DBus.Properties](http://dbus.freedesktop.org/doc/dbus-specification.html#standard-interfaces-properties)
     *   interface) or set using g_dbus_proxy_set_cached_property()
     *   with a type signature mismatch are ignored and a warning is
     *   logged via g_warning().
     * 
     * Note that these checks are never done on methods, signals and
     * properties that are not referenced in the given
     * #GDBusInterfaceInfo, since extending a D-Bus interface on the
     * service-side is not considered an ABI break.
     */
    g_interface_info: Gio.DBusInterfaceInfo
    /**
     * The D-Bus interface name the proxy is for.
     */
    readonly g_interface_name: string
    /**
     * The well-known or unique name that the proxy is for.
     */
    readonly g_name: string
    /**
     * The unique name that owns #GDBusProxy:g-name or %NULL if no-one
     * currently owns that name. You may connect to #GObject::notify signal to
     * track changes to this property.
     */
    readonly g_name_owner: string
    /**
     * The object path the proxy is for.
     */
    readonly g_object_path: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Secret-1.Secret.Prompt */
    /**
     * Runs a prompt and performs the prompting.
     * 
     * Returns %TRUE if the prompt was completed and not dismissed.
     * 
     * If `window_id` is non-null then it is used as an XWindow id on Linux. The API
     * expects this id to be converted to a string using the `%d` printf format. The
     * Secret Service can make its prompt transient for the window with this id. In
     * some Secret Service implementations this is not possible, so the behavior
     * depending on this should degrade gracefully.
     * 
     * This method will return immediately and complete asynchronously.
     * @param window_id string form of XWindow id for parent window to be transient for
     * @param return_type the variant type of the prompt result
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    perform(window_id: string | null, return_type: GLib.VariantType, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete asynchronous operation to run a prompt and perform the prompting.
     * 
     * Returns a variant result if the prompt was completed and not dismissed. The
     * type of result depends on the action the prompt is completing, and is
     * defined in the Secret Service DBus API specification.
     * @param result the asynchronous result passed to the callback
     */
    perform_finish(result: Gio.AsyncResult): GLib.Variant
    /**
     * Runs a prompt and performs the prompting.
     * 
     * Returns a variant result if the prompt was completed and not dismissed. The
     * type of result depends on the action the prompt is completing, and is defined
     * in the Secret Service DBus API specification.
     * 
     * If `window_id` is non-null then it is used as an XWindow id on Linux. The API
     * expects this id to be converted to a string using the `%d` printf format. The
     * Secret Service can make its prompt transient for the window with this id. In
     * some Secret Service implementations this is not possible, so the behavior
     * depending on this should degrade gracefully.
     * 
     * This method may block indefinitely and should not be used in user interface
     * threads.
     * @param window_id string form of XWindow id for parent window to be transient for
     * @param cancellable optional cancellation object
     * @param return_type the variant type of the prompt result
     */
    perform_sync(window_id: string | null, cancellable: Gio.Cancellable | null, return_type: GLib.VariantType): GLib.Variant
    /**
     * Runs a prompt and performs the prompting.
     * 
     * Returns a variant result if the prompt was completed and not dismissed. The
     * type of result depends on the action the prompt is completing, and is defined
     * in the Secret Service DBus API specification.
     * 
     * If `window_id` is non-null then it is used as an XWindow id on Linux. The API
     * expects this id to be converted to a string using the `%d` printf format. The
     * Secret Service can make its prompt transient for the window with this id. In
     * some Secret Service implementations this is not possible, so the behavior
     * depending on this should degrade gracefully.
     * 
     * This runs the dialog in a recursive mainloop. When run from a user interface
     * thread, this means the user interface will remain responsive. Care should be
     * taken that appropriate user interface actions are disabled while running the
     * prompt.
     * @param window_id string form of XWindow id for parent window to be transient for
     * @param cancellable optional cancellation object
     * @param return_type the variant type of the prompt result
     */
    run(window_id: string | null, cancellable: Gio.Cancellable | null, return_type: GLib.VariantType): GLib.Variant
    /* Methods of Gio-2.0.Gio.DBusProxy */
    /**
     * Asynchronously invokes the `method_name` method on `proxy`.
     * 
     * If `method_name` contains any dots, then `name` is split into interface and
     * method name parts. This allows using `proxy` for invoking methods on
     * other interfaces.
     * 
     * If the #GDBusConnection associated with `proxy` is closed then
     * the operation will fail with %G_IO_ERROR_CLOSED. If
     * `cancellable` is canceled, the operation will fail with
     * %G_IO_ERROR_CANCELLED. If `parameters` contains a value not
     * compatible with the D-Bus protocol, the operation fails with
     * %G_IO_ERROR_INVALID_ARGUMENT.
     * 
     * If the `parameters` #GVariant is floating, it is consumed. This allows
     * convenient 'inline' use of g_variant_new(), e.g.:
     * 
     * ```c
     *  g_dbus_proxy_call (proxy,
     *                     "TwoStrings",
     *                     g_variant_new ("(ss)",
     *                                    "Thing One",
     *                                    "Thing Two"),
     *                     G_DBUS_CALL_FLAGS_NONE,
     *                     -1,
     *                     NULL,
     *                     (GAsyncReadyCallback) two_strings_done,
     *                     &data);
     * ```
     * 
     * 
     * If `proxy` has an expected interface (see
     * #GDBusProxy:g-interface-info) and `method_name` is referenced by it,
     * then the return value is checked against the return type.
     * 
     * This is an asynchronous method. When the operation is finished,
     * `callback` will be invoked in the
     * [thread-default main context][g-main-context-push-thread-default]
     * of the thread you are calling this method from.
     * You can then call g_dbus_proxy_call_finish() to get the result of
     * the operation. See g_dbus_proxy_call_sync() for the synchronous
     * version of this method.
     * 
     * If `callback` is %NULL then the D-Bus method call message will be sent with
     * the %G_DBUS_MESSAGE_FLAGS_NO_REPLY_EXPECTED flag set.
     * @param method_name Name of method to invoke.
     * @param parameters A #GVariant tuple with parameters for the signal or %NULL if not passing parameters.
     * @param flags Flags from the #GDBusCallFlags enumeration.
     * @param timeout_msec The timeout in milliseconds (with %G_MAXINT meaning                "infinite") or -1 to use the proxy default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
     */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with g_dbus_proxy_call().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to g_dbus_proxy_call().
     */
    call_finish(res: Gio.AsyncResult): GLib.Variant
    /**
     * Synchronously invokes the `method_name` method on `proxy`.
     * 
     * If `method_name` contains any dots, then `name` is split into interface and
     * method name parts. This allows using `proxy` for invoking methods on
     * other interfaces.
     * 
     * If the #GDBusConnection associated with `proxy` is disconnected then
     * the operation will fail with %G_IO_ERROR_CLOSED. If
     * `cancellable` is canceled, the operation will fail with
     * %G_IO_ERROR_CANCELLED. If `parameters` contains a value not
     * compatible with the D-Bus protocol, the operation fails with
     * %G_IO_ERROR_INVALID_ARGUMENT.
     * 
     * If the `parameters` #GVariant is floating, it is consumed. This allows
     * convenient 'inline' use of g_variant_new(), e.g.:
     * 
     * ```c
     *  g_dbus_proxy_call_sync (proxy,
     *                          "TwoStrings",
     *                          g_variant_new ("(ss)",
     *                                         "Thing One",
     *                                         "Thing Two"),
     *                          G_DBUS_CALL_FLAGS_NONE,
     *                          -1,
     *                          NULL,
     *                          &error);
     * ```
     * 
     * 
     * The calling thread is blocked until a reply is received. See
     * g_dbus_proxy_call() for the asynchronous version of this
     * method.
     * 
     * If `proxy` has an expected interface (see
     * #GDBusProxy:g-interface-info) and `method_name` is referenced by it,
     * then the return value is checked against the return type.
     * @param method_name Name of method to invoke.
     * @param parameters A #GVariant tuple with parameters for the signal              or %NULL if not passing parameters.
     * @param flags Flags from the #GDBusCallFlags enumeration.
     * @param timeout_msec The timeout in milliseconds (with %G_MAXINT meaning                "infinite") or -1 to use the proxy default timeout.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    /**
     * Like g_dbus_proxy_call() but also takes a #GUnixFDList object.
     * 
     * This method is only available on UNIX.
     * @param method_name Name of method to invoke.
     * @param parameters A #GVariant tuple with parameters for the signal or %NULL if not passing parameters.
     * @param flags Flags from the #GDBusCallFlags enumeration.
     * @param timeout_msec The timeout in milliseconds (with %G_MAXINT meaning                "infinite") or -1 to use the proxy default timeout.
     * @param fd_list A #GUnixFDList or %NULL.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
     */
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with g_dbus_proxy_call_with_unix_fd_list().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to g_dbus_proxy_call_with_unix_fd_list().
     */
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    /**
     * Like g_dbus_proxy_call_sync() but also takes and returns #GUnixFDList objects.
     * 
     * This method is only available on UNIX.
     * @param method_name Name of method to invoke.
     * @param parameters A #GVariant tuple with parameters for the signal              or %NULL if not passing parameters.
     * @param flags Flags from the #GDBusCallFlags enumeration.
     * @param timeout_msec The timeout in milliseconds (with %G_MAXINT meaning                "infinite") or -1 to use the proxy default timeout.
     * @param fd_list A #GUnixFDList or %NULL.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    /**
     * Looks up the value for a property from the cache. This call does no
     * blocking IO.
     * 
     * If `proxy` has an expected interface (see
     * #GDBusProxy:g-interface-info) and `property_name` is referenced by
     * it, then `value` is checked against the type of the property.
     * @param property_name Property name.
     */
    get_cached_property(property_name: string): GLib.Variant | null
    /**
     * Gets the names of all cached properties on `proxy`.
     */
    get_cached_property_names(): string[] | null
    /**
     * Gets the connection `proxy` is for.
     */
    get_connection(): Gio.DBusConnection
    /**
     * Gets the timeout to use if -1 (specifying default timeout) is
     * passed as `timeout_msec` in the g_dbus_proxy_call() and
     * g_dbus_proxy_call_sync() functions.
     * 
     * See the #GDBusProxy:g-default-timeout property for more details.
     */
    get_default_timeout(): number
    /**
     * Gets the flags that `proxy` was constructed with.
     */
    get_flags(): Gio.DBusProxyFlags
    /**
     * Returns the #GDBusInterfaceInfo, if any, specifying the interface
     * that `proxy` conforms to. See the #GDBusProxy:g-interface-info
     * property for more details.
     */
    get_interface_info(): Gio.DBusInterfaceInfo | null
    /**
     * Gets the D-Bus interface name `proxy` is for.
     */
    get_interface_name(): string
    /**
     * Gets the name that `proxy` was constructed for.
     * 
     * When connected to a message bus, this will usually be non-%NULL.
     * However, it may be %NULL for a proxy that communicates using a peer-to-peer
     * pattern.
     */
    get_name(): string | null
    /**
     * The unique name that owns the name that `proxy` is for or %NULL if
     * no-one currently owns that name. You may connect to the
     * #GObject::notify signal to track changes to the
     * #GDBusProxy:g-name-owner property.
     */
    get_name_owner(): string | null
    /**
     * Gets the object path `proxy` is for.
     */
    get_object_path(): string
    /**
     * If `value` is not %NULL, sets the cached value for the property with
     * name `property_name` to the value in `value`.
     * 
     * If `value` is %NULL, then the cached value is removed from the
     * property cache.
     * 
     * If `proxy` has an expected interface (see
     * #GDBusProxy:g-interface-info) and `property_name` is referenced by
     * it, then `value` is checked against the type of the property.
     * 
     * If the `value` #GVariant is floating, it is consumed. This allows
     * convenient 'inline' use of g_variant_new(), e.g.
     * 
     * ```c
     *  g_dbus_proxy_set_cached_property (proxy,
     *                                    "SomeProperty",
     *                                    g_variant_new ("(si)",
     *                                                  "A String",
     *                                                  42));
     * ```
     * 
     * 
     * Normally you will not need to use this method since `proxy`
     * is tracking changes using the
     * `org.freedesktop.DBus.Properties.PropertiesChanged`
     * D-Bus signal. However, for performance reasons an object may
     * decide to not use this signal for some properties and instead
     * use a proprietary out-of-band mechanism to transmit changes.
     * 
     * As a concrete example, consider an object with a property
     * `ChatroomParticipants` which is an array of strings. Instead of
     * transmitting the same (long) array every time the property changes,
     * it is more efficient to only transmit the delta using e.g. signals
     * `ChatroomParticipantJoined(String name)` and
     * `ChatroomParticipantParted(String name)`.
     * @param property_name Property name.
     * @param value Value for the property or %NULL to remove it from the cache.
     */
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    /**
     * Sets the timeout to use if -1 (specifying default timeout) is
     * passed as `timeout_msec` in the g_dbus_proxy_call() and
     * g_dbus_proxy_call_sync() functions.
     * 
     * See the #GDBusProxy:g-default-timeout property for more details.
     * @param timeout_msec Timeout in milliseconds.
     */
    set_default_timeout(timeout_msec: number): void
    /**
     * Ensure that interactions with `proxy` conform to the given
     * interface. See the #GDBusProxy:g-interface-info property for more
     * details.
     * @param info Minimum interface this proxy conforms to    or %NULL to unset.
     */
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes asynchronous initialization and returns the result.
     * See g_async_initable_init_async().
     * @param res a #GAsyncResult.
     */
    init_finish(res: Gio.AsyncResult): boolean
    /**
     * Finishes the async construction for the various g_async_initable_new
     * calls, returning the created object or %NULL on error.
     * @param res the #GAsyncResult from the callback
     */
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    /**
     * Gets the #GDBusObject that `interface_` belongs to, if any.
     */
    get_object(): Gio.DBusObject | null
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     */
    get_info(): Gio.DBusInterfaceInfo
    /**
     * Sets the #GDBusObject for `interface_` to `object`.
     * 
     * Note that `interface_` will hold a weak reference to `object`.
     * @param object A #GDBusObject or %NULL.
     */
    set_object(object?: Gio.DBusObject | null): void
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
    /* Virtual methods of Secret-1.Secret.Prompt */
    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes asynchronous initialization and returns the result.
     * See g_async_initable_init_async().
     * @param res a #GAsyncResult.
     */
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    /**
     * Gets the #GDBusObject that `interface_` belongs to, if any.
     */
    vfunc_dup_object(): Gio.DBusObject | null
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     */
    vfunc_get_info(): Gio.DBusInterfaceInfo
    /**
     * Sets the #GDBusObject for `interface_` to `object`.
     * 
     * Note that `interface_` will hold a weak reference to `object`.
     * @param object A #GDBusObject or %NULL.
     */
    vfunc_set_object(object?: Gio.DBusObject | null): void
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
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
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
    /* Signals of Gio-2.0.Gio.DBusProxy */
    /**
     * Emitted when one or more D-Bus properties on `proxy` changes. The
     * local cache has already been updated when this signal fires. Note
     * that both `changed_properties` and `invalidated_properties` are
     * guaranteed to never be %NULL (either may be empty though).
     * 
     * If the proxy has the flag
     * %G_DBUS_PROXY_FLAGS_GET_INVALIDATED_PROPERTIES set, then
     * `invalidated_properties` will always be empty.
     * 
     * This signal corresponds to the
     * `PropertiesChanged` D-Bus signal on the
     * `org.freedesktop.DBus.Properties` interface.
     * @param changed_properties A #GVariant containing the properties that changed (type: `a{sv}`)
     * @param invalidated_properties A %NULL terminated array of properties that was invalidated
     */
    connect(sigName: "g-properties-changed", callback: (($obj: Prompt, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: Prompt, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    /**
     * Emitted when a signal from the remote object and interface that `proxy` is for, has been received.
     * 
     * Since 2.72 this signal supports detailed connections. You can connect to
     * the detailed signal `g-signal::x` in order to receive callbacks only when
     * signal `x` is received from the remote object.
     * @param sender_name The sender of the signal or %NULL if the connection is not a bus connection.
     * @param signal_name The name of the signal.
     * @param parameters A #GVariant tuple with parameters for the signal.
     */
    connect(sigName: "g-signal", callback: (($obj: Prompt, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: Prompt, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
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
    connect(sigName: "notify", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-bus-type", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-connection", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-default-timeout", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-flags", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-name", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-object-path", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Prompt_ConstructProps)
    _init (config?: Prompt_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Helper function for constructing #GAsyncInitable object. This is
     * similar to g_object_newv() but also initializes the object asynchronously.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_new_finish() to get the new object and check
     * for any errors.
     * @param object_type a #GType supporting #GAsyncInitable.
     * @param n_parameters the number of parameters in `parameters`
     * @param parameters the parameters to use to construct the object
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the initialization is     finished
     */
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
interface Service_ConstructProps extends Gio.DBusProxy_ConstructProps {
    /* Constructor properties of Secret-1.Secret.Backend */
    /**
     * A set of flags describing which parts of the secret backend have
     * been initialized.
     */
    flags?: ServiceFlags
}
class Service {
    /* Properties of Gio-2.0.Gio.DBusProxy */
    /**
     * If this property is not %G_BUS_TYPE_NONE, then
     * #GDBusProxy:g-connection must be %NULL and will be set to the
     * #GDBusConnection obtained by calling g_bus_get() with the value
     * of this property.
     */
    readonly g_bus_type: Gio.BusType
    /**
     * The #GDBusConnection the proxy is for.
     */
    readonly g_connection: Gio.DBusConnection
    /**
     * The timeout to use if -1 (specifying default timeout) is passed
     * as `timeout_msec` in the g_dbus_proxy_call() and
     * g_dbus_proxy_call_sync() functions.
     * 
     * This allows applications to set a proxy-wide timeout for all
     * remote method invocations on the proxy. If this property is -1,
     * the default timeout (typically 25 seconds) is used. If set to
     * %G_MAXINT, then no timeout is used.
     */
    g_default_timeout: number
    /**
     * Flags from the #GDBusProxyFlags enumeration.
     */
    readonly g_flags: Gio.DBusProxyFlags
    /**
     * Ensure that interactions with this proxy conform to the given
     * interface. This is mainly to ensure that malformed data received
     * from the other peer is ignored. The given #GDBusInterfaceInfo is
     * said to be the "expected interface".
     * 
     * The checks performed are:
     * - When completing a method call, if the type signature of
     *   the reply message isn't what's expected, the reply is
     *   discarded and the #GError is set to %G_IO_ERROR_INVALID_ARGUMENT.
     * 
     * - Received signals that have a type signature mismatch are dropped and
     *   a warning is logged via g_warning().
     * 
     * - Properties received via the initial `GetAll()` call or via the
     *   `::PropertiesChanged` signal (on the
     *   [org.freedesktop.DBus.Properties](http://dbus.freedesktop.org/doc/dbus-specification.html#standard-interfaces-properties)
     *   interface) or set using g_dbus_proxy_set_cached_property()
     *   with a type signature mismatch are ignored and a warning is
     *   logged via g_warning().
     * 
     * Note that these checks are never done on methods, signals and
     * properties that are not referenced in the given
     * #GDBusInterfaceInfo, since extending a D-Bus interface on the
     * service-side is not considered an ABI break.
     */
    g_interface_info: Gio.DBusInterfaceInfo
    /**
     * The D-Bus interface name the proxy is for.
     */
    readonly g_interface_name: string
    /**
     * The well-known or unique name that the proxy is for.
     */
    readonly g_name: string
    /**
     * The unique name that owns #GDBusProxy:g-name or %NULL if no-one
     * currently owns that name. You may connect to #GObject::notify signal to
     * track changes to this property.
     */
    readonly g_name_owner: string
    /**
     * The object path the proxy is for.
     */
    readonly g_object_path: string
    /* Properties of Secret-1.Secret.Backend */
    /**
     * A set of flags describing which parts of the secret backend have
     * been initialized.
     */
    readonly flags: ServiceFlags
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Secret-1.Secret.Service */
    /**
     * Remove unlocked items which match the attributes from the secret service.
     * 
     * The `attributes` should be a set of key and value string pairs.
     * 
     * If `service` is %NULL, then [func`Service`.get] will be called to get
     * the default [class`Service]` proxy.
     * 
     * This method will return immediately and complete asynchronously.
     * @param schema the schema for the attributes
     * @param attributes the attribute keys and values
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    clear(schema: Schema | null, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finish asynchronous operation to remove items from the secret
     * service.
     * @param result the asynchronous result passed to the callback
     */
    clear_finish(result: Gio.AsyncResult): boolean
    /**
     * Remove unlocked items which match the attributes from the secret service.
     * 
     * The `attributes` should be a set of key and value string pairs.
     * 
     * If `service` is %NULL, then [func`Service`.get_sync] will be called to get
     * the default [class`Service]` proxy.
     * 
     * This method may block indefinitely and should not be used in user interface
     * threads.
     * @param schema the schema for the attributes
     * @param attributes the attribute keys and values
     * @param cancellable optional cancellation object
     */
    clear_sync(schema: Schema | null, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Create a new item in a secret service collection and return its D-Bus
     * object path.
     * 
     * It is often easier to use [func`password_store_sync]` or [func`Item`.create_sync]
     * rather than using this function. Using this method requires that you setup
     * a correct hash table of D-Bus `properties` for the new collection.
     * 
     * If the `flags` contains %SECRET_ITEM_CREATE_REPLACE, then the secret
     * service will search for an item matching the `attributes,` and update that item
     * instead of creating a new one.
     * 
     * `properties` is a set of properties for the new collection. The keys in the
     * hash table should be interface.property strings like
     * `org.freedesktop.Secret.Item.Label`. The values
     * in the hash table should be [struct`GLib`.Variant] values of the properties.
     * 
     * This method may block indefinitely and should not be used in user interface
     * threads. The secret service may prompt the user. [method`Service`.prompt]
     * will be used to handle any prompts that are required.
     * @param collection_path the D-Bus path of the collection in which to create item
     * @param properties hash table of D-Bus properties   for the new collection
     * @param value the secret value to store in the item
     * @param flags flags for the creation of the new item
     * @param cancellable optional cancellation object
     */
    create_item_dbus_path_sync(collection_path: string, properties: GLib.HashTable, value: Value, flags: ItemCreateFlags, cancellable?: Gio.Cancellable | null): string
    /**
     * Decode a [struct`Value]` into [struct`GLib`.Variant] received with the Secret Service
     * DBus API.
     * 
     * The [struct`GLib`.Variant] should have a `(oayays)` signature.
     * 
     * A session must have already been established by the [class`Service]`, and
     * the encoded secret must be valid for that session.
     * @param value the encoded secret
     */
    decode_dbus_secret(value: GLib.Variant): Value
    /**
     * Encodes a [struct`Value]` into [struct`GLib`.Variant] for use with the Secret
     * Service DBus API.
     * 
     * The resulting [struct`GLib`.Variant] will have a `(oayays)` signature.
     * 
     * A session must have already been established by the [class`Service]`.
     * @param value the secret value
     */
    encode_dbus_secret(value: Value): GLib.Variant
    /**
     * Ensure that the #SecretService proxy has established a session with the
     * Secret Service.
     * 
     * This session is used to transfer secrets.
     * 
     * It is not normally necessary to call this method, as the session is
     * established as necessary. You can also pass the %SECRET_SERVICE_OPEN_SESSION
     * to [func`Service`.get] in order to ensure that a session has been established
     * by the time you get the #SecretService proxy.
     * 
     * This method will return immediately and complete asynchronously.
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    ensure_session(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous operation to ensure that the #SecretService proxy
     * has established a session with the Secret Service.
     * @param result the asynchronous result passed to the callback
     */
    ensure_session_finish(result: Gio.AsyncResult): boolean
    /**
     * Ensure that the #SecretService proxy has established a session with the
     * Secret Service.
     * 
     * This session is used to transfer secrets.
     * 
     * It is not normally necessary to call this method, as the session is
     * established as necessary. You can also pass the %SECRET_SERVICE_OPEN_SESSION
     * to [func`Service`.get_sync] in order to ensure that a session has been
     * established by the time you get the #SecretService proxy.
     * 
     * This method may block indefinitely and should not be used in user interface
     * threads.
     * @param cancellable optional cancellation object
     */
    ensure_session_sync(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Get the GObject type for collections instantiated by this service.
     * 
     * This will always be either [class`Collection]` or derived from it.
     */
    get_collection_gtype(): GObject.Type
    /**
     * Get a list of [class`Collection]` objects representing all the collections
     * in the secret service.
     * 
     * If the %SECRET_SERVICE_LOAD_COLLECTIONS flag was not specified when
     * initializing #SecretService proxy object, then this method will return
     * %NULL. Use [method`Service`.load_collections] to load the collections.
     */
    get_collections(): Collection[] | null
    /**
     * Get the flags representing what features of the #SecretService proxy
     * have been initialized.
     * 
     * Use [method`Service`.ensure_session] or [method`Service`.load_collections]
     * to initialize further features and change the flags.
     */
    get_flags(): ServiceFlags
    /**
     * Get the GObject type for items instantiated by this service.
     * 
     * This will always be either [class`Item]` or derived from it.
     */
    get_item_gtype(): GObject.Type
    /**
     * Get the set of algorithms being used to transfer secrets between this
     * secret service proxy and the Secret Service itself.
     * 
     * This will be %NULL if no session has been established. Use
     * [method`Service`.ensure_session] to establish a session.
     */
    get_session_algorithms(): string | null
    /**
     * Get the D-Bus object path of the session object being used to transfer
     * secrets between this secret service proxy and the Secret Service itself.
     * 
     * This will be %NULL if no session has been established. Use
     * [method`Service`.ensure_session] to establish a session.
     */
    get_session_dbus_path(): string | null
    /**
     * Ensure that the #SecretService proxy has loaded all the collections present
     * in the Secret Service.
     * 
     * This affects the result of [method`Service`.get_collections].
     * 
     * You can also pass the %SECRET_SERVICE_LOAD_COLLECTIONS to
     * [func`Service`.get_sync] in order to ensure that the collections have been
     * loaded by the time you get the #SecretService proxy.
     * 
     * This method will return immediately and complete asynchronously.
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    load_collections(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete an asynchronous operation to ensure that the #SecretService proxy
     * has loaded all the collections present in the Secret Service.
     * @param result the asynchronous result passed to the callback
     */
    load_collections_finish(result: Gio.AsyncResult): boolean
    /**
     * Ensure that the #SecretService proxy has loaded all the collections present
     * in the Secret Service.
     * 
     * This affects the result of [method`Service`.get_collections].
     * 
     * You can also pass the %SECRET_SERVICE_LOAD_COLLECTIONS to
     * [func`Service`.get_sync] in order to ensure that the collections have been
     * loaded by the time you get the #SecretService proxy.
     * 
     * This method may block indefinitely and should not be used in user interface
     * threads.
     * @param cancellable optional cancellation object
     */
    load_collections_sync(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Lock items or collections in the secret service.
     * 
     * The secret service may not be able to lock items individually, and may
     * lock an entire collection instead.
     * 
     * If `service` is %NULL, then [func`Service`.get] will be called to get
     * the default [class`Service]` proxy.
     * 
     * This method returns immediately and completes asynchronously. The secret
     * service may prompt the user. [method`Service`.prompt] will be used to handle
     * any prompts that show up.
     * @param objects the items or collections to lock
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    lock(objects: Gio.DBusProxy[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete asynchronous operation to lock items or collections in the secret
     * service.
     * 
     * The secret service may not be able to lock items individually, and may
     * lock an entire collection instead.
     * @param result asynchronous result passed to the callback
     */
    lock_finish(result: Gio.AsyncResult): [ /* returnType */ number, /* locked */ Gio.DBusProxy[] | null ]
    /**
     * Lock items or collections in the secret service.
     * 
     * The secret service may not be able to lock items individually, and may
     * lock an entire collection instead.
     * 
     * If `service` is %NULL, then [func`Service`.get_sync] will be called to get
     * the default [class`Service]` proxy.
     * 
     * This method may block indefinitely and should not be used in user
     * interface threads. The secret service may prompt the user.
     * [method`Service`.prompt] will be used to handle any prompts that show up.
     * @param objects the items or collections to lock
     * @param cancellable optional cancellation object
     */
    lock_sync(objects: Gio.DBusProxy[], cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* locked */ Gio.DBusProxy[] | null ]
    /**
     * Lookup a secret value in the secret service.
     * 
     * The `attributes` should be a set of key and value string pairs.
     * 
     * If `service` is %NULL, then [func`Service`.get] will be called to get
     * the default [class`Service]` proxy.
     * 
     * This method will return immediately and complete asynchronously.
     * @param schema the schema for the attributes
     * @param attributes the attribute keys and values
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    lookup(schema: Schema | null, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finish asynchronous operation to lookup a secret value in the secret service.
     * 
     * If no secret is found then %NULL is returned.
     * @param result the asynchronous result passed to the callback
     */
    lookup_finish(result: Gio.AsyncResult): Value
    /**
     * Lookup a secret value in the secret service.
     * 
     * The `attributes` should be a set of key and value string pairs.
     * 
     * If `service` is %NULL, then [func`Service`.get_sync] will be called to get
     * the default [class`Service]` proxy.
     * 
     * This method may block indefinitely and should not be used in user interface
     * threads.
     * @param schema the schema for the attributes
     * @param attributes the attribute keys and values
     * @param cancellable optional cancellation object
     */
    lookup_sync(schema: Schema | null, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null): Value
    /**
     * Perform prompting for a [class`Prompt]`.
     * 
     * This function is called by other parts of this library to handle prompts
     * for the various actions that can require prompting.
     * 
     * Override the #SecretServiceClass [vfunc`Service`.prompt_async] virtual method
     * to change the behavior of the prompting. The default behavior is to simply
     * run [method`Prompt`.perform] on the prompt.
     * @param prompt the prompt
     * @param return_type the variant type of the prompt result
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    prompt(prompt: Prompt, return_type?: GLib.VariantType | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete asynchronous operation to perform prompting for a [class`Prompt]`.
     * 
     * Returns a variant result if the prompt was completed and not dismissed. The
     * type of result depends on the action the prompt is completing, and is defined
     * in the Secret Service DBus API specification.
     * @param result the asynchronous result passed to the callback
     */
    prompt_finish(result: Gio.AsyncResult): GLib.Variant
    /**
     * Perform prompting for a [class`Prompt]`.
     * 
     * Runs a prompt and performs the prompting. Returns a variant result if the
     * prompt was completed and not dismissed. The type of result depends on the
     * action the prompt is completing, and is defined in the Secret Service DBus
     * API specification.
     * 
     * This function is called by other parts of this library to handle prompts
     * for the various actions that can require prompting.
     * 
     * Override the #SecretServiceClass [vfunc`Service`.prompt_sync] virtual method
     * to change the behavior of the prompting. The default behavior is to simply
     * run [method`Prompt`.perform_sync] on the prompt with a %NULL `window_id`.
     * @param prompt the prompt
     * @param cancellable optional cancellation object
     * @param return_type the variant type of the prompt result
     */
    prompt_sync(prompt: Prompt, cancellable: Gio.Cancellable | null, return_type: GLib.VariantType): GLib.Variant
    /**
     * Search for items matching the `attributes`.
     * 
     * All collections are searched. The `attributes` should be a table of string
     * keys and string values.
     * 
     * If `service` is %NULL, then [func`Service`.get] will be called to get
     * the default [class`Service]` proxy.
     * 
     * If %SECRET_SEARCH_ALL is set in `flags,` then all the items matching the
     * search will be returned. Otherwise only the first item will be returned.
     * This is almost always the unlocked item that was most recently stored.
     * 
     * If %SECRET_SEARCH_UNLOCK is set in `flags,` then items will be unlocked
     * if necessary. In either case, locked and unlocked items will match the
     * search and be returned. If the unlock fails, the search does not fail.
     * 
     * If %SECRET_SEARCH_LOAD_SECRETS is set in `flags,` then the items will have
     * their secret values loaded and available via [method`Item`.get_secret].
     * 
     * This function returns immediately and completes asynchronously.
     * @param schema the schema for the attributes
     * @param attributes search for items matching these attributes
     * @param flags search option flags
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    search(schema: Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete asynchronous operation to search for items.
     * @param result asynchronous result passed to callback
     */
    search_finish(result: Gio.AsyncResult): Item[]
    /**
     * Search for items matching the `attributes`.
     * 
     * All collections are searched. The `attributes` should be a table of string
     * keys and string values.
     * 
     * If `service` is %NULL, then [func`Service`.get_sync] will be called to get
     * the default [class`Service]` proxy.
     * 
     * If %SECRET_SEARCH_ALL is set in `flags,` then all the items matching the
     * search will be returned. Otherwise only the first item will be returned.
     * This is almost always the unlocked item that was most recently stored.
     * 
     * If %SECRET_SEARCH_UNLOCK is set in `flags,` then items will be unlocked
     * if necessary. In either case, locked and unlocked items will match the
     * search and be returned. If the unlock fails, the search does not fail.
     * 
     * If %SECRET_SEARCH_LOAD_SECRETS is set in `flags,` then the items' secret
     * values will be loaded for any unlocked items. Loaded item secret values
     * are available via [method`Item`.get_secret]. If the load of a secret values
     * fail, then the
     * 
     * This function may block indefinitely. Use the asynchronous version
     * in user interface threads.
     * @param schema the schema for the attributes
     * @param attributes search for items matching these attributes
     * @param flags search option flags
     * @param cancellable optional cancellation object
     */
    search_sync(schema: Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable?: Gio.Cancellable | null): Item[]
    /**
     * Assign a collection to this alias.
     * 
     * Aliases help determine well known collections, such as 'default'.
     * 
     * If `service` is %NULL, then [func`Service`.get] will be called to get
     * the default [class`Service]` proxy.
     * 
     * This method will return immediately and complete asynchronously.
     * @param alias the alias to assign the collection to
     * @param collection the collection to assign to the alias
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    set_alias(alias: string, collection?: Collection | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous operation to assign a collection to an alias.
     * @param result asynchronous result passed to callback
     */
    set_alias_finish(result: Gio.AsyncResult): boolean
    /**
     * Assign a collection to this alias. Aliases help determine
     * well known collections, such as 'default'.
     * 
     * If `service` is %NULL, then [func`Service`.get_sync] will be called to get
     * the default [class`Service]` proxy.
     * 
     * This method may block and should not be used in user interface threads.
     * @param alias the alias to assign the collection to
     * @param collection the collection to assign to the alias
     * @param cancellable optional cancellation object
     */
    set_alias_sync(alias: string, collection?: Collection | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Store a secret value in the secret service.
     * 
     * The `attributes` should be a set of key and value string pairs.
     * 
     * If the attributes match a secret item already stored in the collection, then
     * the item will be updated with these new values.
     * 
     * If `service` is %NULL, then [func`Service`.get] will be called to get
     * the default [class`Service]` proxy.
     * 
     * If `collection` is not specified, then the default collection will be
     * used. Use [const`COLLECTION_SESSION]` to store the password in the session
     * collection, which doesn't get stored across login sessions.
     * 
     * This method will return immediately and complete asynchronously.
     * @param schema the schema to use to check attributes
     * @param attributes the attribute keys and values
     * @param collection a collection alias, or D-Bus object path of the   collection where to store the secret
     * @param label label for the secret
     * @param value the secret value
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    store(schema: Schema | null, attributes: GLib.HashTable, collection: string | null, label: string, value: Value, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finish asynchronous operation to store a secret value in the secret service.
     * @param result the asynchronous result passed to the callback
     */
    store_finish(result: Gio.AsyncResult): boolean
    /**
     * Store a secret value in the secret service.
     * 
     * The `attributes` should be a set of key and value string pairs.
     * 
     * If the attributes match a secret item already stored in the collection, then
     * the item will be updated with these new values.
     * 
     * If `collection` is %NULL, then the default collection will be
     * used. Use [const`COLLECTION_SESSION]` to store the password in the session
     * collection, which doesn't get stored across login sessions.
     * 
     * If `service` is %NULL, then [func`Service`.get_sync] will be called to get
     * the default [class`Service]` proxy.
     * 
     * This method may block indefinitely and should not be used in user interface
     * threads.
     * @param schema the schema for the attributes
     * @param attributes the attribute keys and values
     * @param collection a collection alias, or D-Bus object path of the   collection where to store the secret
     * @param label label for the secret
     * @param value the secret value
     * @param cancellable optional cancellation object
     */
    store_sync(schema: Schema | null, attributes: GLib.HashTable, collection: string | null, label: string, value: Value, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Unlock items or collections in the secret service.
     * 
     * The secret service may not be able to unlock items individually, and may
     * unlock an entire collection instead.
     * 
     * If `service` is %NULL, then [func`Service`.get] will be called to get
     * the default [class`Service]` proxy.
     * 
     * This method may block indefinitely and should not be used in user
     * interface threads. The secret service may prompt the user.
     * [method`Service`.prompt] will be used to handle any prompts that show up.
     * @param objects the items or collections to unlock
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    unlock(objects: Gio.DBusProxy[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete asynchronous operation to unlock items or collections in the secret
     * service.
     * 
     * The secret service may not be able to unlock items individually, and may
     * unlock an entire collection instead.
     * @param result asynchronous result passed to the callback
     */
    unlock_finish(result: Gio.AsyncResult): [ /* returnType */ number, /* unlocked */ Gio.DBusProxy[] | null ]
    /**
     * Unlock items or collections in the secret service.
     * 
     * The secret service may not be able to unlock items individually, and may
     * unlock an entire collection instead.
     * 
     * If `service` is %NULL, then [func`Service`.get_sync] will be called to get
     * the default [class`Service]` proxy.
     * 
     * This method may block indefinitely and should not be used in user
     * interface threads. The secret service may prompt the user.
     * [method`Service`.prompt] will be used to handle any prompts that show up.
     * @param objects the items or collections to unlock
     * @param cancellable optional cancellation object
     */
    unlock_sync(objects: Gio.DBusProxy[], cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* unlocked */ Gio.DBusProxy[] | null ]
    /* Methods of Gio-2.0.Gio.DBusProxy */
    /**
     * Asynchronously invokes the `method_name` method on `proxy`.
     * 
     * If `method_name` contains any dots, then `name` is split into interface and
     * method name parts. This allows using `proxy` for invoking methods on
     * other interfaces.
     * 
     * If the #GDBusConnection associated with `proxy` is closed then
     * the operation will fail with %G_IO_ERROR_CLOSED. If
     * `cancellable` is canceled, the operation will fail with
     * %G_IO_ERROR_CANCELLED. If `parameters` contains a value not
     * compatible with the D-Bus protocol, the operation fails with
     * %G_IO_ERROR_INVALID_ARGUMENT.
     * 
     * If the `parameters` #GVariant is floating, it is consumed. This allows
     * convenient 'inline' use of g_variant_new(), e.g.:
     * 
     * ```c
     *  g_dbus_proxy_call (proxy,
     *                     "TwoStrings",
     *                     g_variant_new ("(ss)",
     *                                    "Thing One",
     *                                    "Thing Two"),
     *                     G_DBUS_CALL_FLAGS_NONE,
     *                     -1,
     *                     NULL,
     *                     (GAsyncReadyCallback) two_strings_done,
     *                     &data);
     * ```
     * 
     * 
     * If `proxy` has an expected interface (see
     * #GDBusProxy:g-interface-info) and `method_name` is referenced by it,
     * then the return value is checked against the return type.
     * 
     * This is an asynchronous method. When the operation is finished,
     * `callback` will be invoked in the
     * [thread-default main context][g-main-context-push-thread-default]
     * of the thread you are calling this method from.
     * You can then call g_dbus_proxy_call_finish() to get the result of
     * the operation. See g_dbus_proxy_call_sync() for the synchronous
     * version of this method.
     * 
     * If `callback` is %NULL then the D-Bus method call message will be sent with
     * the %G_DBUS_MESSAGE_FLAGS_NO_REPLY_EXPECTED flag set.
     * @param method_name Name of method to invoke.
     * @param parameters A #GVariant tuple with parameters for the signal or %NULL if not passing parameters.
     * @param flags Flags from the #GDBusCallFlags enumeration.
     * @param timeout_msec The timeout in milliseconds (with %G_MAXINT meaning                "infinite") or -1 to use the proxy default timeout.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
     */
    call(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with g_dbus_proxy_call().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to g_dbus_proxy_call().
     */
    call_finish(res: Gio.AsyncResult): GLib.Variant
    /**
     * Synchronously invokes the `method_name` method on `proxy`.
     * 
     * If `method_name` contains any dots, then `name` is split into interface and
     * method name parts. This allows using `proxy` for invoking methods on
     * other interfaces.
     * 
     * If the #GDBusConnection associated with `proxy` is disconnected then
     * the operation will fail with %G_IO_ERROR_CLOSED. If
     * `cancellable` is canceled, the operation will fail with
     * %G_IO_ERROR_CANCELLED. If `parameters` contains a value not
     * compatible with the D-Bus protocol, the operation fails with
     * %G_IO_ERROR_INVALID_ARGUMENT.
     * 
     * If the `parameters` #GVariant is floating, it is consumed. This allows
     * convenient 'inline' use of g_variant_new(), e.g.:
     * 
     * ```c
     *  g_dbus_proxy_call_sync (proxy,
     *                          "TwoStrings",
     *                          g_variant_new ("(ss)",
     *                                         "Thing One",
     *                                         "Thing Two"),
     *                          G_DBUS_CALL_FLAGS_NONE,
     *                          -1,
     *                          NULL,
     *                          &error);
     * ```
     * 
     * 
     * The calling thread is blocked until a reply is received. See
     * g_dbus_proxy_call() for the asynchronous version of this
     * method.
     * 
     * If `proxy` has an expected interface (see
     * #GDBusProxy:g-interface-info) and `method_name` is referenced by it,
     * then the return value is checked against the return type.
     * @param method_name Name of method to invoke.
     * @param parameters A #GVariant tuple with parameters for the signal              or %NULL if not passing parameters.
     * @param flags Flags from the #GDBusCallFlags enumeration.
     * @param timeout_msec The timeout in milliseconds (with %G_MAXINT meaning                "infinite") or -1 to use the proxy default timeout.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, cancellable?: Gio.Cancellable | null): GLib.Variant
    /**
     * Like g_dbus_proxy_call() but also takes a #GUnixFDList object.
     * 
     * This method is only available on UNIX.
     * @param method_name Name of method to invoke.
     * @param parameters A #GVariant tuple with parameters for the signal or %NULL if not passing parameters.
     * @param flags Flags from the #GDBusCallFlags enumeration.
     * @param timeout_msec The timeout in milliseconds (with %G_MAXINT meaning                "infinite") or -1 to use the proxy default timeout.
     * @param fd_list A #GUnixFDList or %NULL.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL if you don't care about the result of the method invocation.
     */
    call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with g_dbus_proxy_call_with_unix_fd_list().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to g_dbus_proxy_call_with_unix_fd_list().
     */
    call_with_unix_fd_list_finish(res: Gio.AsyncResult): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    /**
     * Like g_dbus_proxy_call_sync() but also takes and returns #GUnixFDList objects.
     * 
     * This method is only available on UNIX.
     * @param method_name Name of method to invoke.
     * @param parameters A #GVariant tuple with parameters for the signal              or %NULL if not passing parameters.
     * @param flags Flags from the #GDBusCallFlags enumeration.
     * @param timeout_msec The timeout in milliseconds (with %G_MAXINT meaning                "infinite") or -1 to use the proxy default timeout.
     * @param fd_list A #GUnixFDList or %NULL.
     * @param cancellable A #GCancellable or %NULL.
     */
    call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: Gio.DBusCallFlags, timeout_msec: number, fd_list?: Gio.UnixFDList | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ GLib.Variant, /* out_fd_list */ Gio.UnixFDList | null ]
    /**
     * Looks up the value for a property from the cache. This call does no
     * blocking IO.
     * 
     * If `proxy` has an expected interface (see
     * #GDBusProxy:g-interface-info) and `property_name` is referenced by
     * it, then `value` is checked against the type of the property.
     * @param property_name Property name.
     */
    get_cached_property(property_name: string): GLib.Variant | null
    /**
     * Gets the names of all cached properties on `proxy`.
     */
    get_cached_property_names(): string[] | null
    /**
     * Gets the connection `proxy` is for.
     */
    get_connection(): Gio.DBusConnection
    /**
     * Gets the timeout to use if -1 (specifying default timeout) is
     * passed as `timeout_msec` in the g_dbus_proxy_call() and
     * g_dbus_proxy_call_sync() functions.
     * 
     * See the #GDBusProxy:g-default-timeout property for more details.
     */
    get_default_timeout(): number
    /**
     * Gets the flags that `proxy` was constructed with.
     */
    get_flags(): Gio.DBusProxyFlags
    /**
     * Returns the #GDBusInterfaceInfo, if any, specifying the interface
     * that `proxy` conforms to. See the #GDBusProxy:g-interface-info
     * property for more details.
     */
    get_interface_info(): Gio.DBusInterfaceInfo | null
    /**
     * Gets the D-Bus interface name `proxy` is for.
     */
    get_interface_name(): string
    /**
     * Gets the name that `proxy` was constructed for.
     * 
     * When connected to a message bus, this will usually be non-%NULL.
     * However, it may be %NULL for a proxy that communicates using a peer-to-peer
     * pattern.
     */
    get_name(): string | null
    /**
     * The unique name that owns the name that `proxy` is for or %NULL if
     * no-one currently owns that name. You may connect to the
     * #GObject::notify signal to track changes to the
     * #GDBusProxy:g-name-owner property.
     */
    get_name_owner(): string | null
    /**
     * Gets the object path `proxy` is for.
     */
    get_object_path(): string
    /**
     * If `value` is not %NULL, sets the cached value for the property with
     * name `property_name` to the value in `value`.
     * 
     * If `value` is %NULL, then the cached value is removed from the
     * property cache.
     * 
     * If `proxy` has an expected interface (see
     * #GDBusProxy:g-interface-info) and `property_name` is referenced by
     * it, then `value` is checked against the type of the property.
     * 
     * If the `value` #GVariant is floating, it is consumed. This allows
     * convenient 'inline' use of g_variant_new(), e.g.
     * 
     * ```c
     *  g_dbus_proxy_set_cached_property (proxy,
     *                                    "SomeProperty",
     *                                    g_variant_new ("(si)",
     *                                                  "A String",
     *                                                  42));
     * ```
     * 
     * 
     * Normally you will not need to use this method since `proxy`
     * is tracking changes using the
     * `org.freedesktop.DBus.Properties.PropertiesChanged`
     * D-Bus signal. However, for performance reasons an object may
     * decide to not use this signal for some properties and instead
     * use a proprietary out-of-band mechanism to transmit changes.
     * 
     * As a concrete example, consider an object with a property
     * `ChatroomParticipants` which is an array of strings. Instead of
     * transmitting the same (long) array every time the property changes,
     * it is more efficient to only transmit the delta using e.g. signals
     * `ChatroomParticipantJoined(String name)` and
     * `ChatroomParticipantParted(String name)`.
     * @param property_name Property name.
     * @param value Value for the property or %NULL to remove it from the cache.
     */
    set_cached_property(property_name: string, value?: GLib.Variant | null): void
    /**
     * Sets the timeout to use if -1 (specifying default timeout) is
     * passed as `timeout_msec` in the g_dbus_proxy_call() and
     * g_dbus_proxy_call_sync() functions.
     * 
     * See the #GDBusProxy:g-default-timeout property for more details.
     * @param timeout_msec Timeout in milliseconds.
     */
    set_default_timeout(timeout_msec: number): void
    /**
     * Ensure that interactions with `proxy` conform to the given
     * interface. See the #GDBusProxy:g-interface-info property for more
     * details.
     * @param info Minimum interface this proxy conforms to    or %NULL to unset.
     */
    set_interface_info(info?: Gio.DBusInterfaceInfo | null): void
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
    /* Methods of Gio-2.0.Gio.AsyncInitable */
    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes asynchronous initialization and returns the result.
     * See g_async_initable_init_async().
     * @param res a #GAsyncResult.
     */
    init_finish(res: Gio.AsyncResult): boolean
    /**
     * Finishes the async construction for the various g_async_initable_new
     * calls, returning the created object or %NULL on error.
     * @param res the #GAsyncResult from the callback
     */
    new_finish(res: Gio.AsyncResult): GObject.Object
    /* Methods of Gio-2.0.Gio.DBusInterface */
    /**
     * Gets the #GDBusObject that `interface_` belongs to, if any.
     */
    get_object(): Gio.DBusObject | null
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     */
    get_info(): Gio.DBusInterfaceInfo
    /**
     * Sets the #GDBusObject for `interface_` to `object`.
     * 
     * Note that `interface_` will hold a weak reference to `object`.
     * @param object A #GDBusObject or %NULL.
     */
    set_object(object?: Gio.DBusObject | null): void
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
    /* Virtual methods of Secret-1.Secret.Service */
    /**
     * Get the GObject type for collections instantiated by this service.
     * 
     * This will always be either [class`Collection]` or derived from it.
     */
    vfunc_get_collection_gtype(): GObject.Type
    /**
     * Get the GObject type for items instantiated by this service.
     * 
     * This will always be either [class`Item]` or derived from it.
     */
    vfunc_get_item_gtype(): GObject.Type
    vfunc_prompt_async(prompt: Prompt, return_type: GLib.VariantType, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete asynchronous operation to perform prompting for a [class`Prompt]`.
     * 
     * Returns a variant result if the prompt was completed and not dismissed. The
     * type of result depends on the action the prompt is completing, and is defined
     * in the Secret Service DBus API specification.
     * @param result the asynchronous result passed to the callback
     */
    vfunc_prompt_finish(result: Gio.AsyncResult): GLib.Variant
    /**
     * Perform prompting for a [class`Prompt]`.
     * 
     * Runs a prompt and performs the prompting. Returns a variant result if the
     * prompt was completed and not dismissed. The type of result depends on the
     * action the prompt is completing, and is defined in the Secret Service DBus
     * API specification.
     * 
     * This function is called by other parts of this library to handle prompts
     * for the various actions that can require prompting.
     * 
     * Override the #SecretServiceClass [vfunc`Service`.prompt_sync] virtual method
     * to change the behavior of the prompting. The default behavior is to simply
     * run [method`Prompt`.perform_sync] on the prompt with a %NULL `window_id`.
     * @param prompt the prompt
     * @param cancellable optional cancellation object
     * @param return_type the variant type of the prompt result
     */
    vfunc_prompt_sync(prompt: Prompt, cancellable: Gio.Cancellable | null, return_type: GLib.VariantType): GLib.Variant
    /**
     * Starts asynchronous initialization of the object implementing the
     * interface. This must be done before any real use of the object after
     * initial construction. If the object also implements #GInitable you can
     * optionally call g_initable_init() instead.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_async_initable_new_async() should typically be used instead.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_init_finish() to get the result of the
     * initialization.
     * 
     * Implementations may also support cancellation. If `cancellable` is not
     * %NULL, then initialization can be cancelled by triggering the cancellable
     * object from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL, and
     * the object doesn't support cancellable initialization, the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * As with #GInitable, if the object is not initialized, or initialization
     * returns with an error, then all operations on the object except
     * g_object_ref() and g_object_unref() are considered to be invalid, and
     * have undefined behaviour. They will often fail with g_critical() or
     * g_warning(), but this must not be relied on.
     * 
     * Callers should not assume that a class which implements #GAsyncInitable can
     * be initialized multiple times; for more information, see g_initable_init().
     * If a class explicitly supports being initialized multiple times,
     * implementation requires yielding all subsequent calls to init_async() on the
     * results of the first call.
     * 
     * For classes that also support the #GInitable interface, the default
     * implementation of this method will run the g_initable_init() function
     * in a thread, so if you want to support asynchronous initialization via
     * threads, just implement the #GAsyncInitable interface without overriding
     * any interface methods.
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    vfunc_init_async(io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes asynchronous initialization and returns the result.
     * See g_async_initable_init_async().
     * @param res a #GAsyncResult.
     */
    vfunc_init_finish(res: Gio.AsyncResult): boolean
    /**
     * Gets the #GDBusObject that `interface_` belongs to, if any.
     */
    vfunc_dup_object(): Gio.DBusObject | null
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     */
    vfunc_get_info(): Gio.DBusInterfaceInfo
    /**
     * Sets the #GDBusObject for `interface_` to `object`.
     * 
     * Note that `interface_` will hold a weak reference to `object`.
     * @param object A #GDBusObject or %NULL.
     */
    vfunc_set_object(object?: Gio.DBusObject | null): void
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
    vfunc_clear(schema: Schema, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_clear_finish(result: Gio.AsyncResult): boolean
    vfunc_ensure_for_flags(flags: BackendFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_ensure_for_flags_finish(result: Gio.AsyncResult): boolean
    vfunc_lookup(schema: Schema, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_lookup_finish(result: Gio.AsyncResult): Value
    vfunc_search(schema: Schema, attributes: GLib.HashTable, flags: SearchFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_store(schema: Schema, attributes: GLib.HashTable, collection: string, label: string, value: Value, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    vfunc_store_finish(result: Gio.AsyncResult): boolean
    /* Virtual methods of Gio-2.0.Gio.DBusProxy */
    vfunc_g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void
    vfunc_g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void
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
    /* Signals of Gio-2.0.Gio.DBusProxy */
    /**
     * Emitted when one or more D-Bus properties on `proxy` changes. The
     * local cache has already been updated when this signal fires. Note
     * that both `changed_properties` and `invalidated_properties` are
     * guaranteed to never be %NULL (either may be empty though).
     * 
     * If the proxy has the flag
     * %G_DBUS_PROXY_FLAGS_GET_INVALIDATED_PROPERTIES set, then
     * `invalidated_properties` will always be empty.
     * 
     * This signal corresponds to the
     * `PropertiesChanged` D-Bus signal on the
     * `org.freedesktop.DBus.Properties` interface.
     * @param changed_properties A #GVariant containing the properties that changed (type: `a{sv}`)
     * @param invalidated_properties A %NULL terminated array of properties that was invalidated
     */
    connect(sigName: "g-properties-changed", callback: (($obj: Service, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    connect_after(sigName: "g-properties-changed", callback: (($obj: Service, changed_properties: GLib.Variant, invalidated_properties: string[]) => void)): number
    emit(sigName: "g-properties-changed", changed_properties: GLib.Variant, invalidated_properties: string[]): void
    /**
     * Emitted when a signal from the remote object and interface that `proxy` is for, has been received.
     * 
     * Since 2.72 this signal supports detailed connections. You can connect to
     * the detailed signal `g-signal::x` in order to receive callbacks only when
     * signal `x` is received from the remote object.
     * @param sender_name The sender of the signal or %NULL if the connection is not a bus connection.
     * @param signal_name The name of the signal.
     * @param parameters A #GVariant tuple with parameters for the signal.
     */
    connect(sigName: "g-signal", callback: (($obj: Service, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    connect_after(sigName: "g-signal", callback: (($obj: Service, sender_name: string | null, signal_name: string, parameters: GLib.Variant) => void)): number
    emit(sigName: "g-signal", sender_name: string | null, signal_name: string, parameters: GLib.Variant): void
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
    connect(sigName: "notify", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::g-bus-type", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-connection", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-default-timeout", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-flags", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-info", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-interface-name", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-name-owner", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::g-object-path", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::flags", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Service_ConstructProps)
    _init (config?: Service_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Disconnect the default #SecretService proxy returned by [func`Service`.get]
     * and [func`Service`.get_sync].
     * 
     * It is not necessary to call this function, but you may choose to do so at
     * program exit. It is useful for testing that memory is not leaked.
     * 
     * This function is safe to call at any time. But if other objects in this
     * library are still referenced, then this will not result in all memory
     * being freed.
     */
    static disconnect(): void
    /**
     * Get a #SecretService proxy for the Secret Service.
     * 
     * If such a proxy object already exists, then the same proxy is returned.
     * 
     * If `flags` contains any flags of which parts of the secret service to
     * ensure are initialized, then those will be initialized before completing.
     * 
     * This method will return immediately and complete asynchronously.
     * @param flags flags for which service functionality to ensure is initialized
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    static get(flags: ServiceFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /* Function overloads */
    /**
     * Get a #SecretBackend instance.
     * 
     * If such a backend already exists, then the same backend is returned.
     * 
     * If `flags` contains any flags of which parts of the secret backend to
     * ensure are initialized, then those will be initialized before completing.
     * 
     * This method will return immediately and complete asynchronously.
     * @param flags flags for which service functionality to ensure is initialized
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    static get(flags: BackendFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete an asynchronous operation to get a #SecretService proxy for the
     * Secret Service.
     * @param result the asynchronous result passed to the callback
     */
    static get_finish(result: Gio.AsyncResult): Service
    /* Function overloads */
    /**
     * Complete an asynchronous operation to get a #SecretBackend.
     * @param result the asynchronous result passed to the callback
     */
    static get_finish(result: Gio.AsyncResult): Backend
    /**
     * Get a #SecretService proxy for the Secret Service.
     * 
     * If such a proxy object already exists, then the same proxy is returned.
     * 
     * If `flags` contains any flags of which parts of the secret service to
     * ensure are initialized, then those will be initialized before returning.
     * 
     * This method may block indefinitely and should not be used in user interface
     * threads.
     * @param flags flags for which service functionality to ensure is initialized
     * @param cancellable optional cancellation object
     */
    static get_sync(flags: ServiceFlags, cancellable?: Gio.Cancellable | null): Service
    /**
     * Create a new #SecretService proxy for the Secret Service.
     * 
     * This function is rarely used, see [func`Service`.get] instead.
     * 
     * The `service_gtype` argument should be set to %SECRET_TYPE_SERVICE or a the type
     * of a derived class.
     * 
     * If `flags` contains any flags of which parts of the secret service to
     * ensure are initialized, then those will be initialized before returning.
     * 
     * If `service_bus_name` is %NULL then the default is used.
     * 
     * This method will return immediately and complete asynchronously.
     * @param service_gtype the GType of the new secret service
     * @param service_bus_name the D-Bus service name of the secret service
     * @param flags flags for which service functionality to ensure is initialized
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    static open(service_gtype: GObject.Type, service_bus_name: string | null, flags: ServiceFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Complete an asynchronous operation to create a new #SecretService proxy for
     * the Secret Service.
     * @param result the asynchronous result passed to the callback
     */
    static open_finish(result: Gio.AsyncResult): Service
    /**
     * Create a new #SecretService proxy for the Secret Service.
     * 
     * This function is rarely used, see [func`Service`.get_sync] instead.
     * 
     * The `service_gtype` argument should be set to %SECRET_TYPE_SERVICE or a the
     * type of a derived class.
     * 
     * If `flags` contains any flags of which parts of the secret service to
     * ensure are initialized, then those will be initialized before returning.
     * 
     * If `service_bus_name` is %NULL then the default is used.
     * 
     * This method may block indefinitely and should not be used in user interface
     * threads.
     * @param service_gtype the GType of the new secret service
     * @param service_bus_name the D-Bus service name of the secret service
     * @param flags flags for which service functionality to ensure is initialized
     * @param cancellable optional cancellation object
     */
    static open_sync(service_gtype: GObject.Type, service_bus_name: string | null, flags: ServiceFlags, cancellable?: Gio.Cancellable | null): Service
    /**
     * Helper function for constructing #GAsyncInitable object. This is
     * similar to g_object_newv() but also initializes the object asynchronously.
     * 
     * When the initialization is finished, `callback` will be called. You can
     * then call g_async_initable_new_finish() to get the new object and check
     * for any errors.
     * @param object_type a #GType supporting #GAsyncInitable.
     * @param n_parameters the number of parameters in `parameters`
     * @param parameters the parameters to use to construct the object
     * @param io_priority the [I/O priority][io-priority] of the operation
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the initialization is     finished
     */
    static newv_async(object_type: GObject.Type, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
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
abstract class BackendInterface {
    /* Fields of Secret-1.Secret.BackendInterface */
    /**
     * the parent interface
     */
    parent_iface: GObject.TypeInterface
    ensure_for_flags: (self: Backend, flags: BackendFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    ensure_for_flags_finish: (self: Backend, result: Gio.AsyncResult) => boolean
    store: (self: Backend, schema: Schema, attributes: GLib.HashTable, collection: string, label: string, value: Value, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    store_finish: (self: Backend, result: Gio.AsyncResult) => boolean
    lookup: (self: Backend, schema: Schema, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    lookup_finish: (self: Backend, result: Gio.AsyncResult) => Value
    clear: (self: Backend, schema: Schema, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    clear_finish: (self: Backend, result: Gio.AsyncResult) => boolean
    search: (self: Backend, schema: Schema, attributes: GLib.HashTable, flags: SearchFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    static name: string
}
abstract class CollectionClass {
    /* Fields of Secret-1.Secret.CollectionClass */
    /**
     * the parent class
     */
    parent_class: Gio.DBusProxyClass
    static name: string
}
class CollectionPrivate {
    static name: string
}
abstract class ItemClass {
    /* Fields of Secret-1.Secret.ItemClass */
    /**
     * the parent class
     */
    parent_class: Gio.DBusProxyClass
    static name: string
}
class ItemPrivate {
    static name: string
}
abstract class PromptClass {
    /* Fields of Secret-1.Secret.PromptClass */
    /**
     * the parent class
     */
    parent_class: Gio.DBusProxyClass
    static name: string
}
class PromptPrivate {
    static name: string
}
abstract class RetrievableInterface {
    /* Fields of Secret-1.Secret.RetrievableInterface */
    /**
     * the parent interface
     */
    parent_iface: GObject.TypeInterface
    retrieve_secret: (self: Retrievable, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    retrieve_secret_finish: (self: Retrievable, result: Gio.AsyncResult) => Value | null
    static name: string
}
class Schema {
    /* Fields of Secret-1.Secret.Schema */
    /**
     * the dotted name of the schema
     */
    name: string
    /**
     * flags for the schema
     */
    flags: SchemaFlags
    /**
     * the attribute names and types of those attributes
     */
    attributes: SchemaAttribute[]
    /* Methods of Secret-1.Secret.Schema */
    /**
     * Adds a reference to the #SecretSchema.
     * 
     * It is not normally necessary to call this function from C code, and is
     * mainly present for the sake of bindings. If the `schema` was statically
     * allocated, then this function will copy the schema.
     */
    ref(): Schema
    /**
     * Releases a reference to the #SecretSchema.
     * 
     * If the last reference is released then the schema will be freed.
     * 
     * It is not normally necessary to call this function from C code, and is
     * mainly present for the sake of bindings. It is an error to call this for
     * a `schema` that was statically allocated.
     */
    unref(): void
    static name: string
    static new(name: string, flags: SchemaFlags, attribute_names_and_types: GLib.HashTable): Schema
    constructor(name: string, flags: SchemaFlags, attribute_names_and_types: GLib.HashTable)
    /* Static methods and pseudo-constructors */
    static new(name: string, flags: SchemaFlags, attribute_names_and_types: GLib.HashTable): Schema
}
class SchemaAttribute {
    /* Fields of Secret-1.Secret.SchemaAttribute */
    /**
     * name of the attribute
     */
    name: string
    /**
     * the type of the attribute
     */
    type: SchemaAttributeType
    static name: string
}
abstract class ServiceClass {
    /* Fields of Secret-1.Secret.ServiceClass */
    /**
     * the parent class
     */
    parent_class: Gio.DBusProxyClass
    /**
     * the [alias`GLib`.Type] of the [class`Collection]` objects instantiated
     *   by the #SecretService proxy
     */
    collection_gtype: GObject.Type
    /**
     * the [alias`GLib`.Type] of the [class`Item]` objects instantiated by the
     *   #SecretService proxy
     */
    item_gtype: GObject.Type
    prompt_sync: (self: Service, prompt: Prompt, cancellable: Gio.Cancellable | null, return_type: GLib.VariantType) => GLib.Variant
    prompt_async: (self: Service, prompt: Prompt, return_type: GLib.VariantType, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    prompt_finish: (self: Service, result: Gio.AsyncResult) => GLib.Variant
    get_collection_gtype: (self: Service) => GObject.Type
    get_item_gtype: (self: Service) => GObject.Type
    static name: string
}
class ServicePrivate {
    static name: string
}
class Value {
    /* Methods of Secret-1.Secret.Value */
    /**
     * Get the secret data in the #SecretValue.
     * 
     * The value is not necessarily null-terminated unless it was created with
     * [ctor`Value`.new] or a null-terminated string was passed to
     * [ctor`Value`.new_full].
     */
    get(): Uint8Array
    /**
     * Get the content type of the secret value, such as
     * `text/plain`.
     */
    get_content_type(): string
    /**
     * Get the secret data in the #SecretValue if it contains a textual
     * value.
     * 
     * The content type must be `text/plain`.
     */
    get_text(): string | null
    /**
     * Add another reference to the #SecretValue.
     * 
     * For each reference [method`Value`.unref] should be called to unreference the
     * value.
     */
    ref(): Value
    /**
     * Unreference a #SecretValue.
     * 
     * When the last reference is gone, then the value will be freed.
     */
    unref(): void
    /**
     * Unreference a #SecretValue and steal the secret data in
     * #SecretValue as nonpageable memory.
     * @param length the length of the secret
     */
    unref_to_password(length: number): [ /* returnType */ string, /* length */ number ]
    static name: string
    static new(secret: string, length: number, content_type: string): Value
    constructor(secret: string, length: number, content_type: string)
    /* Static methods and pseudo-constructors */
    static new(secret: string, length: number, content_type: string): Value
    static new_full(secret: string, length: number, content_type: string, destroy: GLib.DestroyNotify): Value
}
}
export default Secret;