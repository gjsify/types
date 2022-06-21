// @ts-nocheck

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
 * @bitfield 
 */
enum CollectionCreateFlags {
    /**
     * no flags
     */
    NONE,
}
/**
 * Flags which determine which parts of the #SecretCollection proxy are initialized.
 * @bitfield 
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
 * @bitfield 
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
 * @bitfield 
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
 * @bitfield 
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
 * @bitfield 
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
 * @bitfield 
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
function backend_get(flags: BackendFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
/**
 * Complete an asynchronous operation to get a #SecretBackend.
 * @param result the asynchronous result passed to the callback
 */
function backend_get_finish(result: Gio.AsyncResult): Backend
/**
 * Get the error quark.
 */
function error_get_quark(): GLib.Quark
/**
 * Get a secret storage schema of the given `type`.
 * 
 * C code may access the schemas (such as %SECRET_SCHEMA_NOTE) directly, but
 * language bindings cannot, and must use this accessor.
 * @param type type of schema to get
 */
function get_schema(type: SchemaType): Schema
/**
 * Finish an asynchronous operation to remove passwords from the secret
 * service.
 * @param result the asynchronous result passed to the callback
 */
function password_clear_finish(result: Gio.AsyncResult): boolean
/**
 * Remove unlocked matching passwords from the secret service.
 * 
 * The `attributes` should be a set of key and value string pairs.
 * 
 * All unlocked items that match the attributes will be deleted.
 * 
 * This method will return immediately and complete asynchronously.
 * @param schema the schema for the attributes
 * @param attributes the attribute keys and values
 * @param cancellable optional cancellation object
 * @param callback called when the operation completes
 */
function password_clear(schema: Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
/**
 * Remove unlocked matching passwords from the secret service.
 * 
 * The `attributes` should be a set of key and value string pairs.
 * 
 * All unlocked items that match the attributes will be deleted.
 * 
 * This method may block indefinitely and should not be used in user interface
 * threads.
 * @param schema the schema for the attributes
 * @param attributes the attribute keys and values
 * @param cancellable optional cancellation object
 */
function password_clear_sync(schema: Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null): boolean
/**
 * Finish an asynchronous operation to lookup a password in the secret service.
 * @param result the asynchronous result passed to the callback
 */
function password_lookup_finish(result: Gio.AsyncResult): string
/**
 * Lookup a password in the secret service.
 * 
 * The `attributes` should be a set of key and value string pairs.
 * 
 * If no secret is found then %NULL is returned.
 * 
 * This method will return immediately and complete asynchronously.
 * @param schema the schema for attributes
 * @param attributes the attribute keys and values
 * @param cancellable optional cancellation object
 * @param callback called when the operation completes
 */
function password_lookup(schema: Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
/**
 * Lookup a password in the secret service.
 * 
 * The `attributes` should be a set of key and value string pairs.
 * 
 * If no secret is found then %NULL is returned.
 * 
 * This method may block indefinitely and should not be used in user interface
 * threads.
 * @param schema the schema for attributes
 * @param attributes the attribute keys and values
 * @param cancellable optional cancellation object
 */
function password_lookup_sync(schema: Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null): string
/**
 * Finish an asynchronous operation to search for items in the secret service.
 * @param result the asynchronous result passed to the callback
 */
function password_search_finish(result: Gio.AsyncResult): Retrievable[]
/**
 * Search for items in the secret service.
 * 
 * The `attributes` should be a set of key and value string pairs.
 * 
 * This method will return immediately and complete asynchronously.
 * @param schema the schema for attributes
 * @param attributes the attribute keys and values
 * @param flags search option flags
 * @param cancellable optional cancellation object
 * @param callback called when the operation completes
 */
function password_search(schema: Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
/**
 * Search for items in the secret service.
 * 
 * The `attributes` should be a set of key and value string pairs.
 * 
 * If no secret is found then %NULL is returned.
 * 
 * This method may block indefinitely and should not be used in user interface
 * threads.
 * @param schema the schema for attributes
 * @param attributes the attribute keys and values
 * @param flags search option flags
 * @param cancellable optional cancellation object
 */
function password_search_sync(schema: Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable: Gio.Cancellable | null): Retrievable[]
/**
 * Finish asynchronous operation to store a password in the secret service.
 * @param result the asynchronous result passed to the callback
 */
function password_store_finish(result: Gio.AsyncResult): boolean
/**
 * Store a password in the secret service.
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
 * This method will return immediately and complete asynchronously.
 * @param schema the schema for attributes
 * @param attributes the attribute keys and values
 * @param collection a collection alias, or D-Bus object path of the   collection where to store the secret
 * @param label label for the secret
 * @param password the null-terminated password to store
 * @param cancellable optional cancellation object
 * @param callback called when the operation completes
 */
function password_store(schema: Schema | null, attributes: GLib.HashTable, collection: string | null, label: string, password: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
/**
 * Store a password in the secret service.
 * 
 * This is similar to [func`password_storev]`, but takes a
 * [struct`Value]` as the argument instead of a null-terminated password.
 * 
 * This method will return immediately and complete asynchronously.
 * @param schema the schema for attributes
 * @param attributes the attribute keys and values
 * @param collection a collection alias, or D-Bus object path of the   collection where to store the secret
 * @param label label for the secret
 * @param value a [struct`Value]`
 * @param cancellable optional cancellation object
 * @param callback called when the operation completes
 */
function password_store_binary(schema: Schema | null, attributes: GLib.HashTable, collection: string | null, label: string, value: Value, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
/**
 * Store a password in the secret service.
 * 
 * This is similar to [func`password_storev_sync]`, but takes a [struct`Value]` as
 * the argument instead of a null-terminated passwords.
 * 
 * This method may block indefinitely and should not be used in user interface
 * threads.
 * @param schema the schema for attributes
 * @param attributes the attribute keys and values
 * @param collection a collection alias, or D-Bus object path of the   collection where to store the secret
 * @param label label for the secret
 * @param value a [struct`Value]`
 * @param cancellable optional cancellation object
 */
function password_store_binary_sync(schema: Schema | null, attributes: GLib.HashTable, collection: string | null, label: string, value: Value, cancellable: Gio.Cancellable | null): boolean
/**
 * Store a password in the secret service.
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
 * This method may block indefinitely and should not be used in user interface
 * threads.
 * @param schema the schema for attributes
 * @param attributes the attribute keys and values
 * @param collection a collection alias, or D-Bus object path of the   collection where to store the secret
 * @param label label for the secret
 * @param password the null-terminated password to store
 * @param cancellable optional cancellation object
 */
function password_store_sync(schema: Schema | null, attributes: GLib.HashTable, collection: string | null, label: string, password: string, cancellable: Gio.Cancellable | null): boolean
/**
 * Clear the memory used by a password.
 * @param password password to clear
 */
function password_wipe(password: string | null): void
interface Backend_ConstructProps extends Gio.AsyncInitable_ConstructProps, GObject.Object_ConstructProps {

    // Own constructor properties of Secret-1.Secret.Backend

    /**
     * A set of flags describing which parts of the secret backend have
     * been initialized.
     */
    flags?: ServiceFlags | null
}

interface Backend extends Gio.AsyncInitable {

    // Own properties of Secret-1.Secret.Backend

    /**
     * A set of flags describing which parts of the secret backend have
     * been initialized.
     */
    readonly flags: ServiceFlags

    // Own virtual methods of Secret-1.Secret.Backend

    vfunc_clear(schema: Schema, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    vfunc_clear_finish(result: Gio.AsyncResult): boolean
    vfunc_ensure_for_flags(flags: BackendFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    vfunc_ensure_for_flags_finish(result: Gio.AsyncResult): boolean
    vfunc_lookup(schema: Schema, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    vfunc_lookup_finish(result: Gio.AsyncResult): Value
    vfunc_search(schema: Schema, attributes: GLib.HashTable, flags: SearchFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    vfunc_store(schema: Schema, attributes: GLib.HashTable, collection: string, label: string, value: Value, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    vfunc_store_finish(result: Gio.AsyncResult): boolean

    // Class property signals of Secret-1.Secret.Backend

    connect(sigName: "notify::flags", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #SecretBackend represents a backend implementation of password
 * storage.
 * @interface 
 */
class Backend extends GObject.Object {

    // Own properties of Secret-1.Secret.Backend

    static name: string
    static $gtype: GObject.GType<Backend>

    // Constructors of Secret-1.Secret.Backend

    constructor(config?: Backend_ConstructProps) 
    _init(config?: Backend_ConstructProps): void
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

interface Retrievable_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Secret-1.Secret.Retrievable

    /**
     * The attributes set on this item.
     * 
     * Attributes are used to locate an item. They are not guaranteed to be
     * stored or transferred securely.
     */
    attributes?: GLib.HashTable | null
    /**
     * The date and time (in seconds since the UNIX epoch) that this
     * item was created.
     */
    created?: number | null
    /**
     * The human readable label for the item.
     */
    label?: string | null
    /**
     * The date and time (in seconds since the UNIX epoch) that this
     * item was last modified.
     */
    modified?: number | null
}

interface Retrievable {

    // Own properties of Secret-1.Secret.Retrievable

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

    // Owm methods of Secret-1.Secret.Retrievable

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
    retrieve_secret(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    retrieve_secret_sync(cancellable: Gio.Cancellable | null): Value | null

    // Own virtual methods of Secret-1.Secret.Retrievable

    /**
     * Retrieve the secret value of this object.
     * 
     * Each retrievable object has a single secret which might be a
     * password or some other secret binary value.
     * 
     * This function returns immediately and completes asynchronously.
     * @virtual 
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    vfunc_retrieve_secret(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete asynchronous operation to retrieve the secret value of this object.
     * @virtual 
     * @param result asynchronous result passed to callback
     */
    vfunc_retrieve_secret_finish(result: Gio.AsyncResult): Value | null

    // Class property signals of Secret-1.Secret.Retrievable

    connect(sigName: "notify::attributes", callback: (($obj: Retrievable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: Retrievable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::created", callback: (($obj: Retrievable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created", callback: (($obj: Retrievable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::created", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: Retrievable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Retrievable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (($obj: Retrievable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: Retrievable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A read-only view of a secret item in the Secret Service.
 * 
 * #SecretRetrievable provides a read-only view of a secret item
 * stored in the Secret Service.
 * 
 * Each item has a value, represented by a [struct`Value]`, which can be
 * retrieved by [method`Retrievable`.retrieve_secret] and
 * [method`Retrievable`.retrieve_secret_finish].
 * @interface 
 */
class Retrievable extends GObject.Object {

    // Own properties of Secret-1.Secret.Retrievable

    static name: string
    static $gtype: GObject.GType<Retrievable>

    // Constructors of Secret-1.Secret.Retrievable

    constructor(config?: Retrievable_ConstructProps) 
    _init(config?: Retrievable_ConstructProps): void
}

interface Collection_ConstructProps extends Gio.AsyncInitable_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.Initable_ConstructProps, Gio.DBusProxy_ConstructProps {

    // Own constructor properties of Secret-1.Secret.Collection

    /**
     * The date and time (in seconds since the UNIX epoch) that this
     * collection was created.
     */
    created?: number | null
    /**
     * A set of flags describing which parts of the secret collection have
     * been initialized.
     */
    flags?: CollectionFlags | null
    /**
     * The human readable label for the collection.
     * 
     * Setting this property will result in the label of the collection being
     * set asynchronously. To properly track the changing of the label use the
     * [method`Collection`.set_label] function.
     */
    label?: string | null
    /**
     * The date and time (in seconds since the UNIX epoch) that this
     * collection was last modified.
     */
    modified?: number | null
    /**
     * The [class`Service]` object that this collection is associated with and
     * uses to interact with the actual D-Bus Secret Service.
     */
    service?: Service | null
}

interface Collection extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Own properties of Secret-1.Secret.Collection

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

    // Own fields of Secret-1.Secret.Collection

    parent: Gio.DBusProxy

    // Owm methods of Secret-1.Secret.Collection

    /**
     * Delete this collection.
     * 
     * This method returns immediately and completes asynchronously. The secret
     * service may prompt the user. [method`Service`.prompt] will be used to handle
     * any prompts that show up.
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    delete(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    delete_sync(cancellable: Gio.Cancellable | null): boolean
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

    // Overloads of get_flags

    /**
     * Gets the flags that `proxy` was constructed with.
     */
    get_flags(): Gio.DBusProxyFlags
    get_flags(...args: any[]): any
    get_flags(...args: any[]): CollectionFlags | Gio.DBusProxyFlags | any
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
    load_items(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    load_items_sync(cancellable: Gio.Cancellable | null): boolean
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
    search(schema: Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    search_sync(schema: Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable: Gio.Cancellable | null): Item[]
    /**
     * Set the label of this collection.
     * 
     * This function returns immediately and completes asynchronously.
     * @param label a new label
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    set_label(label: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    set_label_sync(label: string, cancellable: Gio.Cancellable | null): boolean

    // Class property signals of Secret-1.Secret.Collection

    connect(sigName: "notify::created", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::created", ...args: any[]): void
    connect(sigName: "notify::flags", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::locked", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locked", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::locked", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::service", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: "notify::g-bus-type", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A proxy object representing a collection of secrets in the Secret Service.
 * 
 * #SecretCollection represents a collection of secret items stored in the
 * Secret Service.
 * 
 * A collection can be in a locked or unlocked state. Use
 * [method`SecretService`.lock] or [method`SecretService`.unlock] to lock or
 * unlock the collection.
 * 
 * Use the [property`SecretCollection:`items] property or
 * [method`SecretCollection`.get_items] to lookup the items in the collection.
 * There may not be any items exposed when the collection is locked.
 * @class 
 */
class Collection extends Gio.DBusProxy {

    // Own properties of Secret-1.Secret.Collection

    static name: string
    static $gtype: GObject.GType<Collection>

    // Constructors of Secret-1.Secret.Collection

    constructor(config?: Collection_ConstructProps) 
    _init(config?: Collection_ConstructProps): void
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
    static create(service: Service | null, label: string, alias: string | null, flags: CollectionCreateFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    static create_sync(service: Service | null, label: string, alias: string | null, flags: CollectionCreateFlags, cancellable: Gio.Cancellable | null): Collection
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
    static for_alias(service: Service | null, alias: string, flags: CollectionFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    static for_alias_sync(service: Service | null, alias: string, flags: CollectionFlags, cancellable: Gio.Cancellable | null): Collection
}

interface Item_ConstructProps extends Gio.AsyncInitable_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.Initable_ConstructProps, Retrievable_ConstructProps, Gio.DBusProxy_ConstructProps {

    // Own constructor properties of Secret-1.Secret.Item

    /**
     * A set of flags describing which parts of the secret item have
     * been initialized.
     */
    flags?: ItemFlags | null
    /**
     * The [class`Service]` object that this item is associated with and
     * uses to interact with the actual D-Bus Secret Service.
     */
    service?: Service | null
}

interface Item extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Retrievable {

    // Own properties of Secret-1.Secret.Item

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

    // Own fields of Secret-1.Secret.Item

    parent_instance: Gio.DBusProxy

    // Owm methods of Secret-1.Secret.Item

    /**
     * Delete this item.
     * 
     * This method returns immediately and completes asynchronously. The secret
     * service may prompt the user. [method`Service`.prompt] will be used to handle
     * any prompts that show up.
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    delete(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    delete_sync(cancellable: Gio.Cancellable | null): boolean
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

    // Overloads of get_flags

    /**
     * Gets the flags that `proxy` was constructed with.
     */
    get_flags(): Gio.DBusProxyFlags
    get_flags(...args: any[]): any
    get_flags(...args: any[]): ItemFlags | Gio.DBusProxyFlags | any
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
    load_secret(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    load_secret_sync(cancellable: Gio.Cancellable | null): boolean
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
    set_attributes(schema: Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    set_attributes_sync(schema: Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null): boolean
    /**
     * Set the label of this item.
     * 
     * This function returns immediately and completes asynchronously.
     * @param label a new label
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    set_label(label: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    set_label_sync(label: string, cancellable: Gio.Cancellable | null): boolean
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
    set_secret(value: Value, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    set_secret_sync(value: Value, cancellable: Gio.Cancellable | null): boolean

    // Class property signals of Secret-1.Secret.Item

    connect(sigName: "notify::flags", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::locked", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locked", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::locked", ...args: any[]): void
    connect(sigName: "notify::service", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: "notify::g-bus-type", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::created", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::created", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A secret item
 * 
 * #SecretItem represents a secret item stored in the Secret Service.
 * 
 * Each item has a value, represented by a [struct`Value]`, which can be
 * retrieved by [method`Item`.get_secret] or set by [method`Item`.set_secret].
 * The item is only available when the item is not locked.
 * 
 * Items can be locked or unlocked using the [method`Service`.lock] or
 * [method`Service`.unlock] functions. The Secret Service may not be able to
 * unlock individual items, and may unlock an entire collection when a single
 * item is unlocked.
 * 
 * Each item has a set of attributes, which are used to locate the item later.
 * These are not stored or transferred in a secure manner. Each attribute has
 * a string name and a string value. Use [method`Service`.search] to search for
 * items based on their attributes, and [method`Item`.set_attributes] to change
 * the attributes associated with an item.
 * 
 * Items can be created with [func`Item`.create] or [method`Service`.store].
 * @class 
 */
class Item extends Gio.DBusProxy {

    // Own properties of Secret-1.Secret.Item

    static name: string
    static $gtype: GObject.GType<Item>

    // Constructors of Secret-1.Secret.Item

    constructor(config?: Item_ConstructProps) 
    _init(config?: Item_ConstructProps): void
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
    static create(collection: Collection, schema: Schema | null, attributes: GLib.HashTable, label: string, value: Value, flags: ItemCreateFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    static create_sync(collection: Collection, schema: Schema | null, attributes: GLib.HashTable, label: string, value: Value, flags: ItemCreateFlags, cancellable: Gio.Cancellable | null): Item
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
    static load_secrets(items: Item[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    static load_secrets_sync(items: Item[], cancellable: Gio.Cancellable | null): boolean
}

interface Prompt_ConstructProps extends Gio.AsyncInitable_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.Initable_ConstructProps, Gio.DBusProxy_ConstructProps {
}

interface Prompt extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Own fields of Secret-1.Secret.Prompt

    parent_instance: Gio.DBusProxy

    // Owm methods of Secret-1.Secret.Prompt

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
    perform(window_id: string | null, return_type: GLib.VariantType, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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

    // Class property signals of Secret-1.Secret.Prompt

    connect(sigName: "notify::g-bus-type", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: Prompt, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A prompt in the Service
 * 
 * A proxy object representing a prompt that the Secret Service will display
 * to the user.
 * 
 * Certain actions on the Secret Service require user prompting to complete,
 * such as creating a collection, or unlocking a collection. When such a prompt
 * is necessary, then a #SecretPrompt object is created by this library, and
 * passed to the [method`Service`.prompt] method. In this way it is handled
 * automatically.
 * 
 * In order to customize prompt handling, override the
 * [vfunc`Service`.prompt_async] and [vfunc`Service`.prompt_finish] virtual
 * methods of the [class`Service]` class.
 * @class 
 */
class Prompt extends Gio.DBusProxy {

    // Own properties of Secret-1.Secret.Prompt

    static name: string
    static $gtype: GObject.GType<Prompt>

    // Constructors of Secret-1.Secret.Prompt

    constructor(config?: Prompt_ConstructProps) 
    _init(config?: Prompt_ConstructProps): void
}

interface Service_ConstructProps extends Gio.AsyncInitable_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.Initable_ConstructProps, Backend_ConstructProps, Gio.DBusProxy_ConstructProps {
}

interface Service extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Backend {

    // Own fields of Secret-1.Secret.Service

    parent: Gio.DBusProxy

    // Owm methods of Secret-1.Secret.Service

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
    clear(schema: Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    clear_sync(schema: Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null): boolean
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
    create_item_dbus_path_sync(collection_path: string, properties: GLib.HashTable, value: Value, flags: ItemCreateFlags, cancellable: Gio.Cancellable | null): string
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
    ensure_session(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    ensure_session_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Get the GObject type for collections instantiated by this service.
     * 
     * This will always be either [class`Collection]` or derived from it.
     */
    get_collection_gtype(): GObject.GType
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

    // Overloads of get_flags

    /**
     * Gets the flags that `proxy` was constructed with.
     */
    get_flags(): Gio.DBusProxyFlags
    get_flags(...args: any[]): any
    get_flags(...args: any[]): ServiceFlags | Gio.DBusProxyFlags | any
    /**
     * Get the GObject type for items instantiated by this service.
     * 
     * This will always be either [class`Item]` or derived from it.
     */
    get_item_gtype(): GObject.GType
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
    load_collections(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    load_collections_sync(cancellable: Gio.Cancellable | null): boolean
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
    lock(objects: Gio.DBusProxy[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    lock_sync(objects: Gio.DBusProxy[], cancellable: Gio.Cancellable | null): [ /* returnType */ number, /* locked */ Gio.DBusProxy[] | null ]
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
    lookup(schema: Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    lookup_sync(schema: Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null): Value
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
    prompt(prompt: Prompt, return_type: GLib.VariantType | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    search(schema: Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    search_sync(schema: Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable: Gio.Cancellable | null): Item[]
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
    set_alias(alias: string, collection: Collection | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    set_alias_sync(alias: string, collection: Collection | null, cancellable: Gio.Cancellable | null): boolean
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
    store(schema: Schema | null, attributes: GLib.HashTable, collection: string | null, label: string, value: Value, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    store_sync(schema: Schema | null, attributes: GLib.HashTable, collection: string | null, label: string, value: Value, cancellable: Gio.Cancellable | null): boolean
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
    unlock(objects: Gio.DBusProxy[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    unlock_sync(objects: Gio.DBusProxy[], cancellable: Gio.Cancellable | null): [ /* returnType */ number, /* unlocked */ Gio.DBusProxy[] | null ]

    // Own virtual methods of Secret-1.Secret.Service

    /**
     * Get the GObject type for collections instantiated by this service.
     * 
     * This will always be either [class`Collection]` or derived from it.
     * @virtual 
     */
    vfunc_get_collection_gtype(): GObject.GType
    /**
     * Get the GObject type for items instantiated by this service.
     * 
     * This will always be either [class`Item]` or derived from it.
     * @virtual 
     */
    vfunc_get_item_gtype(): GObject.GType
    vfunc_prompt_async(prompt: Prompt, return_type: GLib.VariantType, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete asynchronous operation to perform prompting for a [class`Prompt]`.
     * 
     * Returns a variant result if the prompt was completed and not dismissed. The
     * type of result depends on the action the prompt is completing, and is defined
     * in the Secret Service DBus API specification.
     * @virtual 
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
     * @virtual 
     * @param prompt the prompt
     * @param cancellable optional cancellation object
     * @param return_type the variant type of the prompt result
     */
    vfunc_prompt_sync(prompt: Prompt, cancellable: Gio.Cancellable | null, return_type: GLib.VariantType): GLib.Variant

    // Class property signals of Secret-1.Secret.Service

    connect(sigName: "notify::g-bus-type", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::flags", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: Service, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A proxy object representing the Secret Service.
 * 
 * A #SecretService object represents the Secret Service implementation which
 * runs as a D-Bus service.
 * 
 * Normally a single #SecretService object can be shared between multiple
 * callers. The [func`Service`.get] method is used to access this #SecretService
 * object. If a new independent #SecretService object is required, use
 * [func`Service`.open].
 * 
 * In order to securely transfer secrets to the Sercret Service, a session
 * is established. This session can be established while initializing a
 * #SecretService object by passing the %SECRET_SERVICE_OPEN_SESSION flag
 * to the [func`Service`.get] or [func`Service`.open] functions. In order to
 * establish a session on an already existing #SecretService, use the
 * [method`Service`.ensure_session] function.
 * 
 * To search for items, use the [method`Service`.search] method.
 * 
 * Multiple collections can exist in the Secret Service, each of which contains
 * secret items. In order to instantiate [class`Collection]` objects which
 * represent those collections while initializing a #SecretService then pass
 * the %SECRET_SERVICE_LOAD_COLLECTIONS flag to the [func`Service`.get] or
 * [func`Service`.open] functions. In order to establish a session on an already
 * existing #SecretService, use the [method`Service`.load_collections] function.
 * To access the list of collections use [method`Service`.get_collections].
 * 
 * Certain actions on the Secret Service require user prompting to complete,
 * such as creating a collection, or unlocking a collection. When such a prompt
 * is necessary, then a [class`Prompt]` object is created by this library, and
 * passed to the [method`Service`.prompt] method. In this way it is handled
 * automatically.
 * 
 * In order to customize prompt handling, override the
 * [vfunc`Service`.prompt_async] and [vfunc`Service`.prompt_finish] virtual
 * methods of the #SecretService class.
 * @class 
 */
class Service extends Gio.DBusProxy {

    // Own properties of Secret-1.Secret.Service

    static name: string
    static $gtype: GObject.GType<Service>

    // Constructors of Secret-1.Secret.Service

    constructor(config?: Service_ConstructProps) 
    _init(config?: Service_ConstructProps): void
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

    // Overloads of get

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
    static get(...args: any[]): any
    static get(args_or_flags: any[] | BackendFlags, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    /**
     * Complete an asynchronous operation to get a #SecretService proxy for the
     * Secret Service.
     * @param result the asynchronous result passed to the callback
     */
    static get_finish(result: Gio.AsyncResult): Service

    // Overloads of get_finish

    /**
     * Complete an asynchronous operation to get a #SecretBackend.
     * @param result the asynchronous result passed to the callback
     */
    static get_finish(result: Gio.AsyncResult): Backend
    static get_finish(...args: any[]): any
    static get_finish(args_or_result: any[] | Gio.AsyncResult): Service | Backend | any
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
    static get_sync(flags: ServiceFlags, cancellable: Gio.Cancellable | null): Service
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
    static open(service_gtype: GObject.GType, service_bus_name: string | null, flags: ServiceFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    static open_sync(service_gtype: GObject.GType, service_bus_name: string | null, flags: ServiceFlags, cancellable: Gio.Cancellable | null): Service
}

interface BackendInterface {

    // Own fields of Secret-1.Secret.BackendInterface

    /**
     * the parent interface
     * @field 
     */
    parent_iface: GObject.TypeInterface
    ensure_for_flags: (self: Backend, flags: BackendFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    ensure_for_flags_finish: (self: Backend, result: Gio.AsyncResult) => boolean
    store: (self: Backend, schema: Schema, attributes: GLib.HashTable, collection: string, label: string, value: Value, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    store_finish: (self: Backend, result: Gio.AsyncResult) => boolean
    lookup: (self: Backend, schema: Schema, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    lookup_finish: (self: Backend, result: Gio.AsyncResult) => Value
    clear: (self: Backend, schema: Schema, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    clear_finish: (self: Backend, result: Gio.AsyncResult) => boolean
    search: (self: Backend, schema: Schema, attributes: GLib.HashTable, flags: SearchFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
}

/**
 * The interface for #SecretBackend.
 * @record 
 */
abstract class BackendInterface {

    // Own properties of Secret-1.Secret.BackendInterface

    static name: string
}

interface CollectionClass {

    // Own fields of Secret-1.Secret.CollectionClass

    /**
     * the parent class
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * The class for #SecretCollection.
 * @record 
 */
abstract class CollectionClass {

    // Own properties of Secret-1.Secret.CollectionClass

    static name: string
}

interface CollectionPrivate {
}

class CollectionPrivate {

    // Own properties of Secret-1.Secret.CollectionPrivate

    static name: string
}

interface ItemClass {

    // Own fields of Secret-1.Secret.ItemClass

    /**
     * the parent class
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * The class for #SecretItem.
 * @record 
 */
abstract class ItemClass {

    // Own properties of Secret-1.Secret.ItemClass

    static name: string
}

interface ItemPrivate {
}

class ItemPrivate {

    // Own properties of Secret-1.Secret.ItemPrivate

    static name: string
}

interface PromptClass {

    // Own fields of Secret-1.Secret.PromptClass

    /**
     * the parent class
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * The class for #SecretPrompt.
 * @record 
 */
abstract class PromptClass {

    // Own properties of Secret-1.Secret.PromptClass

    static name: string
}

interface PromptPrivate {
}

class PromptPrivate {

    // Own properties of Secret-1.Secret.PromptPrivate

    static name: string
}

interface RetrievableInterface {

    // Own fields of Secret-1.Secret.RetrievableInterface

    /**
     * the parent interface
     * @field 
     */
    parent_iface: GObject.TypeInterface
    retrieve_secret: (self: Retrievable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    retrieve_secret_finish: (self: Retrievable, result: Gio.AsyncResult) => Value | null
}

/**
 * The interface for #SecretRetrievable.
 * @record 
 */
abstract class RetrievableInterface {

    // Own properties of Secret-1.Secret.RetrievableInterface

    static name: string
}

interface Schema {

    // Own fields of Secret-1.Secret.Schema

    /**
     * the dotted name of the schema
     * @field 
     */
    name: string
    /**
     * flags for the schema
     * @field 
     */
    flags: SchemaFlags
    /**
     * the attribute names and types of those attributes
     * @field 
     */
    attributes: SchemaAttribute[]

    // Owm methods of Secret-1.Secret.Schema

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
}

/**
 * Represents a set of attributes that are stored with an item.
 * 
 * These schemas are used for interoperability between various services storing
 * the same types of items.
 * 
 * Each schema has a name like `org.gnome.keyring.NetworkPassword`, and defines a
 * set of attributes, and types (string, integer, boolean) for those attributes.
 * 
 * Attributes are stored as strings in the Secret Service, and the attribute types
 * simply define standard ways to store integer and boolean values as strings.
 * Attributes are represented in libsecret via a [struct`GLib`.HashTable] with
 * string keys and values. Even for values that defined as an integer or boolean in
 * the schema, the attribute values in the [struct`GLib`.HashTable] are strings.
 * Boolean values are stored as the strings 'true' and 'false'. Integer values are
 * stored in decimal, with a preceding negative sign for negative integers.
 * 
 * Schemas are handled entirely on the client side by this library. The name of the
 * schema is automatically stored as an attribute on the item.
 * 
 * Normally when looking up passwords only those with matching schema names are
 * returned. If the schema `flags` contain the `SECRET_SCHEMA_DONT_MATCH_NAME` flag,
 * then lookups will not check that the schema name matches that on the item, only
 * the schema's attributes are matched. This is useful when you are looking up
 * items that are not stored by the libsecret library. Other libraries such as
 * libgnome-keyring don't store the schema name.
 * 
 * Additional schemas can be defined via the %SecretSchema structure like this:
 * 
 * ```c
 * // in a header:
 * 
 * const SecretSchema * example_get_schema (void) G_GNUC_CONST;
 * 
 * #define EXAMPLE_SCHEMA  example_get_schema ()
 * 
 * 
 * // in a .c file
 * 
 * const SecretSchema *
 * example_get_schema (void)
 * {
 *     static const SecretSchema the_schema = {
 *         "org.example.Password", SECRET_SCHEMA_NONE,
 *         {
 *             {  "number", SECRET_SCHEMA_ATTRIBUTE_INTEGER },
 *             {  "string", SECRET_SCHEMA_ATTRIBUTE_STRING },
 *             {  "even", SECRET_SCHEMA_ATTRIBUTE_BOOLEAN },
 *             {  NULL, 0 },
 *         }
 *     };
 *     return &the_schema;
 * }
 * ```
 * @record 
 */
class Schema {

    // Own properties of Secret-1.Secret.Schema

    static name: string

    // Constructors of Secret-1.Secret.Schema

    /**
     * Using this function is not normally necessary from C code. This is useful
     * for constructing #SecretSchema structures in bindings.
     * 
     * A schema represents a set of attributes that are stored with an item. These
     * schemas are used for interoperability between various services storing the
     * same types of items.
     * 
     * Each schema has an `name` like `org.gnome.keyring.NetworkPassword`, and
     * defines a set of attributes names, and types (string, integer, boolean) for
     * those attributes.
     * 
     * Each key in the `attributes` table should be a attribute name strings, and
     * the values in the table should be integers from the [enum`SchemaAttributeType]`
     * enumeration, representing the attribute type for each attribute name.
     * 
     * Normally when looking up passwords only those with matching schema names are
     * returned. If the schema `flags` contain the %SECRET_SCHEMA_DONT_MATCH_NAME flag,
     * then lookups will not check that the schema name matches that on the item, only
     * the schema's attributes are matched. This is useful when you are looking up items
     * that are not stored by the libsecret library. Other libraries such as libgnome-keyring
     * don't store the schema name.
     * @constructor 
     * @param name the dotted name of the schema
     * @param flags the flags for the schema
     * @param attribute_names_and_types the attribute names and types of those attributes
     */
    constructor(name: string, flags: SchemaFlags, attribute_names_and_types: GLib.HashTable) 
    /**
     * Using this function is not normally necessary from C code. This is useful
     * for constructing #SecretSchema structures in bindings.
     * 
     * A schema represents a set of attributes that are stored with an item. These
     * schemas are used for interoperability between various services storing the
     * same types of items.
     * 
     * Each schema has an `name` like `org.gnome.keyring.NetworkPassword`, and
     * defines a set of attributes names, and types (string, integer, boolean) for
     * those attributes.
     * 
     * Each key in the `attributes` table should be a attribute name strings, and
     * the values in the table should be integers from the [enum`SchemaAttributeType]`
     * enumeration, representing the attribute type for each attribute name.
     * 
     * Normally when looking up passwords only those with matching schema names are
     * returned. If the schema `flags` contain the %SECRET_SCHEMA_DONT_MATCH_NAME flag,
     * then lookups will not check that the schema name matches that on the item, only
     * the schema's attributes are matched. This is useful when you are looking up items
     * that are not stored by the libsecret library. Other libraries such as libgnome-keyring
     * don't store the schema name.
     * @constructor 
     * @param name the dotted name of the schema
     * @param flags the flags for the schema
     * @param attribute_names_and_types the attribute names and types of those attributes
     */
    static new(name: string, flags: SchemaFlags, attribute_names_and_types: GLib.HashTable): Schema
}

interface SchemaAttribute {

    // Own fields of Secret-1.Secret.SchemaAttribute

    /**
     * name of the attribute
     * @field 
     */
    name: string
    /**
     * the type of the attribute
     * @field 
     */
    type: SchemaAttributeType
}

/**
 * An attribute in a #SecretSchema.
 * @record 
 */
class SchemaAttribute {

    // Own properties of Secret-1.Secret.SchemaAttribute

    static name: string
}

interface ServiceClass {

    // Own fields of Secret-1.Secret.ServiceClass

    /**
     * the parent class
     * @field 
     */
    parent_class: Gio.DBusProxyClass
    /**
     * the [alias`GLib`.Type] of the [class`Collection]` objects instantiated
     *   by the #SecretService proxy
     * @field 
     */
    collection_gtype: GObject.GType
    /**
     * the [alias`GLib`.Type] of the [class`Item]` objects instantiated by the
     *   #SecretService proxy
     * @field 
     */
    item_gtype: GObject.GType
    prompt_sync: (self: Service, prompt: Prompt, cancellable: Gio.Cancellable | null, return_type: GLib.VariantType) => GLib.Variant
    prompt_async: (self: Service, prompt: Prompt, return_type: GLib.VariantType, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    prompt_finish: (self: Service, result: Gio.AsyncResult) => GLib.Variant
    get_collection_gtype: (self: Service) => GObject.GType
    get_item_gtype: (self: Service) => GObject.GType
}

/**
 * The class for #SecretService.
 * @record 
 */
abstract class ServiceClass {

    // Own properties of Secret-1.Secret.ServiceClass

    static name: string
}

interface ServicePrivate {
}

class ServicePrivate {

    // Own properties of Secret-1.Secret.ServicePrivate

    static name: string
}

interface Value {

    // Owm methods of Secret-1.Secret.Value

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
}

/**
 * A value containing a secret
 * 
 * A #SecretValue contains a password or other secret value.
 * 
 * Use [method`Value`.get] to get the actual secret data, such as a password.
 * The secret data is not necessarily null-terminated, unless the content type
 * is "text/plain".
 * 
 * Each #SecretValue has a content type. For passwords, this is `text/plain`.
 * Use [method`Value`.get_content_type] to look at the content type.
 * 
 * #SecretValue is reference counted and immutable. The secret data is only
 * freed when all references have been released via [method`Value`.unref].
 * @record 
 */
class Value {

    // Own properties of Secret-1.Secret.Value

    static name: string

    // Constructors of Secret-1.Secret.Value

    /**
     * Create a #SecretValue for the secret data passed in.
     * 
     * The secret data is copied into non-pageable 'secure' memory.
     * 
     * If the length is less than zero, then `secret` is assumed to be
     * null-terminated.
     * @constructor 
     * @param secret the secret data
     * @param length the length of the data
     * @param content_type the content type of the data
     */
    constructor(secret: string, length: number, content_type: string) 
    /**
     * Create a #SecretValue for the secret data passed in.
     * 
     * The secret data is copied into non-pageable 'secure' memory.
     * 
     * If the length is less than zero, then `secret` is assumed to be
     * null-terminated.
     * @constructor 
     * @param secret the secret data
     * @param length the length of the data
     * @param content_type the content type of the data
     */
    static new(secret: string, length: number, content_type: string): Value
    /**
     * Create a #SecretValue for the secret data passed in.
     * 
     * The secret data is not copied, and will later be freed with the `destroy`
     * function.
     * 
     * If the length is less than zero, then `secret` is assumed to be
     * null-terminated.
     * @constructor 
     * @param secret the secret data
     * @param length the length of the data
     * @param content_type the content type of the data
     * @param destroy function to call to free the secret data
     */
    static new_full(secret: string, length: number, content_type: string, destroy: GLib.DestroyNotify): Value
}

}
export default Secret;