
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * Secret-1
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

/**
 * Flags which determine which parts of the #SecretBackend are initialized.
 */
export enum BackendFlags {
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
export enum Error {
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
export enum SchemaAttributeType {
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
export enum SchemaType {
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
export enum CollectionCreateFlags {
    /**
     * no flags
     */
    NONE,
}
/**
 * Flags which determine which parts of the #SecretCollection proxy are initialized.
 * @bitfield 
 */
export enum CollectionFlags {
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
export enum ItemCreateFlags {
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
export enum ItemFlags {
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
export enum SchemaFlags {
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
export enum SearchFlags {
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
export enum ServiceFlags {
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
export const BACKEND_EXTENSION_POINT_NAME: string | null
/**
 * An alias to the default collection.
 * 
 * This can be passed to [func`password_store]` [func`Collection`.for_alias].
 */
export const COLLECTION_DEFAULT: string | null
/**
 * An alias to the session collection, which will be cleared when the user ends
 * the session.
 * 
 * This can be passed to [func`password_store]`, [func`Collection`.for_alias] or
 * similar functions.
 */
export const COLLECTION_SESSION: string | null
/**
 * The major version of libsecret.
 */
export const MAJOR_VERSION: number
/**
 * The micro version of libsecret.
 */
export const MICRO_VERSION: number
/**
 * The minor version of libsecret.
 */
export const MINOR_VERSION: number
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
export function backend_get<Z = unknown>(flags: BackendFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Z> | null): void
/**
 * Complete an asynchronous operation to get a #SecretBackend.
 * @param result the asynchronous result passed to the callback
 * @returns a new reference to a #SecretBackend proxy, which   should be released with [method@GObject.Object.unref].
 */
export function backend_get_finish(result: Gio.AsyncResult): Backend
/**
 * Get the error quark.
 * @returns the quark
 */
export function error_get_quark(): GLib.Quark
/**
 * Get a secret storage schema of the given `type`.
 * 
 * C code may access the schemas (such as %SECRET_SCHEMA_NOTE) directly, but
 * language bindings cannot, and must use this accessor.
 * @param type type of schema to get
 * @returns schema type
 */
export function get_schema(type: SchemaType): Schema
/**
 * Finish an asynchronous operation to remove passwords from the secret
 * service.
 * @param result the asynchronous result passed to the callback
 * @returns whether any passwords were removed
 */
export function password_clear_finish(result: Gio.AsyncResult): boolean
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
export function password_clear<Z = unknown>(schema: Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Z> | null): void
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
 * @returns whether any passwords were removed
 */
export function password_clear_sync(schema: Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null): boolean
/**
 * Finish an asynchronous operation to lookup a password in the secret service.
 * @param result the asynchronous result passed to the callback
 * @returns a new password string which should be freed with   [func@password_free] or may be freed with [func@GLib.free] when done
 */
export function password_lookup_finish(result: Gio.AsyncResult): string | null
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
export function password_lookup<Z = unknown>(schema: Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Z> | null): void
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
 * @returns a new password string which should be freed with   [func@password_free] or may be freed with [func@GLib.free] when done
 */
export function password_lookup_sync(schema: Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null): string | null
/**
 * Finish an asynchronous operation to search for items in the secret service.
 * @param result the asynchronous result passed to the callback
 * @returns a list of   [iface@Retrievable] containing attributes of the matched items
 */
export function password_search_finish(result: Gio.AsyncResult): Retrievable[]
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
export function password_search<Z = unknown>(schema: Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Z> | null): void
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
 * @returns a list of   [iface@Retrievable] containing attributes of the matched items
 */
export function password_search_sync(schema: Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable: Gio.Cancellable | null): Retrievable[]
/**
 * Finish asynchronous operation to store a password in the secret service.
 * @param result the asynchronous result passed to the callback
 * @returns whether the storage was successful or not
 */
export function password_store_finish(result: Gio.AsyncResult): boolean
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
export function password_store<Z = unknown>(schema: Schema | null, attributes: GLib.HashTable, collection: string | null, label: string | null, password: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Z> | null): void
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
export function password_store_binary<Z = unknown>(schema: Schema | null, attributes: GLib.HashTable, collection: string | null, label: string | null, value: Value, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Z> | null): void
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
 * @returns whether the storage was successful or not
 */
export function password_store_binary_sync(schema: Schema | null, attributes: GLib.HashTable, collection: string | null, label: string | null, value: Value, cancellable: Gio.Cancellable | null): boolean
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
 * @returns whether the storage was successful or not
 */
export function password_store_sync(schema: Schema | null, attributes: GLib.HashTable, collection: string | null, label: string | null, password: string | null, cancellable: Gio.Cancellable | null): boolean
/**
 * Clear the memory used by a password.
 * @param password password to clear
 */
export function password_wipe(password: string | null): void
export module Backend {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Secret-1.Secret.Backend

        /**
         * A set of flags describing which parts of the secret backend have
         * been initialized.
         */
        flags?: ServiceFlags | null
    }

}

export interface Backend extends Gio.AsyncInitable {

    // Own properties of Secret-1.Secret.Backend

    /**
     * A set of flags describing which parts of the secret backend have
     * been initialized.
     */
    readonly flags: ServiceFlags

    // Own virtual methods of Secret-1.Secret.Backend

    vfunc_clear(schema: Schema, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    vfunc_clear_finish(result: Gio.AsyncResult): boolean
    vfunc_ensure_for_flags(flags: BackendFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    vfunc_ensure_for_flags_finish(result: Gio.AsyncResult): boolean
    vfunc_lookup(schema: Schema, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    vfunc_lookup_finish(result: Gio.AsyncResult): Value
    vfunc_search(schema: Schema, attributes: GLib.HashTable, flags: SearchFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    vfunc_store(schema: Schema, attributes: GLib.HashTable, collection: string | null, label: string | null, value: Value, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
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
export class Backend extends GObject.Object {

    // Own properties of Secret-1.Secret.Backend

    static name: string
    static $gtype: GObject.GType<Backend>

    // Constructors of Secret-1.Secret.Backend

    constructor(config?: Backend.ConstructorProperties) 
    _init(config?: Backend.ConstructorProperties): void
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
    static get(flags: BackendFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Backend> | null): void
    /**
     * Complete an asynchronous operation to get a #SecretBackend.
     * @param result the asynchronous result passed to the callback
     * @returns a new reference to a #SecretBackend proxy, which   should be released with [method@GObject.Object.unref].
     */
    static get_finish(result: Gio.AsyncResult): Backend
}

export module Retrievable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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

}

export interface Retrievable {

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
    label: string | null
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
     * @returns a new reference   to the attributes, which should not be modified, and   released with [func@GLib.HashTable.unref]
     */
    get_attributes(): GLib.HashTable
    /**
     * Get the created date and time of the object.
     * 
     * The return value is the number of seconds since the unix epoch, January 1st
     * 1970.
     * @returns the created date and time
     */
    get_created(): number
    /**
     * Get the label of this item.
     * @returns the label, which should be freed with [func@GLib.free]
     */
    get_label(): string | null
    /**
     * Get the modified date and time of the object.
     * 
     * The return value is the number of seconds since the unix epoch, January 1st
     * 1970.
     * @returns the modified date and time
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
    retrieve_secret(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Complete asynchronous operation to retrieve the secret value of this object.
     * @param result asynchronous result passed to callback
     * @returns the secret value which should be   released with [method@Value.unref], or %NULL
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
     * @returns the secret value which should be   released with [method@Value.unref], or %NULL
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
    vfunc_retrieve_secret(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Complete asynchronous operation to retrieve the secret value of this object.
     * @virtual 
     * @param result asynchronous result passed to callback
     * @returns the secret value which should be   released with [method@Value.unref], or %NULL
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
export class Retrievable extends GObject.Object {

    // Own properties of Secret-1.Secret.Retrievable

    static name: string
    static $gtype: GObject.GType<Retrievable>

    // Constructors of Secret-1.Secret.Retrievable

    constructor(config?: Retrievable.ConstructorProperties) 
    _init(config?: Retrievable.ConstructorProperties): void
}

export module Collection {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {

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

}

export interface Collection extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

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
    label: string | null
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
    delete(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Complete operation to delete this collection.
     * @param result asynchronous result passed to the callback
     * @returns whether the collection was successfully deleted or not
     */
    delete_finish(result: Gio.AsyncResult): boolean
    /**
     * Delete this collection.
     * 
     * This method may block indefinitely and should not be used in user interface
     * threads. The secret service may prompt the user. [method`Service`.prompt] will
     * be used to handle any prompts that show up.
     * @param cancellable optional cancellation object
     * @returns whether the collection was successfully deleted or not
     */
    delete_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Get the created date and time of the collection.
     * 
     * The return value is the number of seconds since the unix epoch, January 1st
     * 1970.
     * @returns the created date and time
     */
    get_created(): number
    /**
     * Get the flags representing what features of the #SecretCollection proxy
     * have been initialized.
     * 
     * Use [method`Collection`.load_items] to initialize further features and change
     * the flags.
     * @returns the flags for features initialized
     */
    get_flags(): CollectionFlags

    // Overloads of get_flags

    /**
     * Gets the flags that `proxy` was constructed with.
     * @returns Flags from the #GDBusProxyFlags enumeration.
     */
    get_flags(): Gio.DBusProxyFlags
    /**
     * Get the list of items in this collection.
     * @returns a list of items, when   done, the list should be freed with [func@GLib.List.free], and each item   should be released with [method@GObject.Object.unref]
     */
    get_items(): Item[]
    /**
     * Get the label of this collection.
     * @returns the label, which should be freed with   [func@GLib.free]
     */
    get_label(): string | null
    /**
     * Get whether the collection is locked or not.
     * 
     * Use [method`Service`.lock] or [method`Service`.unlock] to lock or unlock the
     * collection.
     * @returns whether the collection is locked or not
     */
    get_locked(): boolean
    /**
     * Get the modified date and time of the collection.
     * 
     * The return value is the number of seconds since the unix epoch, January 1st
     * 1970.
     * @returns the modified date and time
     */
    get_modified(): number
    /**
     * Get the Secret Service object that this collection was created with.
     * @returns the Secret Service object
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
    load_items(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Complete an asynchronous operation to ensure that the #SecretCollection proxy
     * has loaded all the items present in the Secret Service.
     * @param result the asynchronous result passed to the callback
     * @returns whether the load was successful or not
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
     * @returns whether the load was successful or not
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
    search(schema: Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Complete asynchronous operation to search for items in a collection.
     * @param result asynchronous result passed to callback
     * @returns    a list of items that matched the search
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
     * @returns    a list of items that matched the search
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
    set_label(label: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Complete asynchronous operation to set the label of this collection.
     * @param result asynchronous result passed to callback
     * @returns whether the change was successful or not
     */
    set_label_finish(result: Gio.AsyncResult): boolean
    /**
     * Set the label of this collection.
     * 
     * This function may block indefinitely. Use the asynchronous version
     * in user interface threads.
     * @param label a new label
     * @param cancellable optional cancellation object
     * @returns whether the change was successful or not
     */
    set_label_sync(label: string | null, cancellable: Gio.Cancellable | null): boolean

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
export class Collection extends Gio.DBusProxy {

    // Own properties of Secret-1.Secret.Collection

    static name: string
    static $gtype: GObject.GType<Collection>

    // Constructors of Secret-1.Secret.Collection

    constructor(config?: Collection.ConstructorProperties) 
    _init(config?: Collection.ConstructorProperties): void
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
    static create(service: Service | null, label: string | null, alias: string | null, flags: CollectionCreateFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Collection> | null): void
    /**
     * Finish operation to create a new collection in the secret service.
     * @param result the asynchronous result passed to the callback
     * @returns the new collection, which should be unreferenced   with [method@GObject.Object.unref]
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
     * @returns the new collection, which should be unreferenced   with [method@GObject.Object.unref]
     */
    static create_sync(service: Service | null, label: string | null, alias: string | null, flags: CollectionCreateFlags, cancellable: Gio.Cancellable | null): Collection
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
    static for_alias(service: Service | null, alias: string | null, flags: CollectionFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Collection> | null): void
    /**
     * Finish an asynchronous operation to lookup which collection is assigned
     * to an alias.
     * @param result asynchronous result passed to callback
     * @returns the collection, or %NULL if none assigned to the alias
     */
    static for_alias_finish(result: Gio.AsyncResult): Collection | null
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
     * @returns the collection, or %NULL if none assigned to the alias
     */
    static for_alias_sync(service: Service | null, alias: string | null, flags: CollectionFlags, cancellable: Gio.Cancellable | null): Collection | null
}

export module Item {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Retrievable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {

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

}

export interface Item extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Retrievable {

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
    delete(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Complete asynchronous operation to delete the secret item.
     * @param result asynchronous result passed to the callback
     * @returns whether the item was successfully deleted or not
     */
    delete_finish(result: Gio.AsyncResult): boolean
    /**
     * Delete this secret item.
     * 
     * This method may block indefinitely and should not be used in user
     * interface threads. The secret service may prompt the user.
     * [method`Service`.prompt] will be used to handle any prompts that show up.
     * @param cancellable optional cancellation object
     * @returns whether the item was successfully deleted or not
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
     * @returns a new reference   to the attributes, which should not be modified, and   released with [func@GLib.HashTable.unref]
     */
    get_attributes(): GLib.HashTable
    /**
     * Get the created date and time of the item.
     * 
     * The return value is the number of seconds since the unix epoch, January 1st
     * 1970.
     * @returns the created date and time
     */
    get_created(): number
    /**
     * Get the flags representing what features of the #SecretItem proxy
     * have been initialized.
     * 
     * Use [method`Item`.load_secret] to initialize further features
     * and change the flags.
     * @returns the flags for features initialized
     */
    get_flags(): ItemFlags

    // Overloads of get_flags

    /**
     * Gets the flags that `proxy` was constructed with.
     * @returns Flags from the #GDBusProxyFlags enumeration.
     */
    get_flags(): Gio.DBusProxyFlags
    /**
     * Get the label of this item.
     * @returns the label, which should be freed with [func@GLib.free]
     */
    get_label(): string | null
    /**
     * Get whether the item is locked or not.
     * 
     * Depending on the secret service an item may not be able to be locked
     * independently from the collection that it is in.
     * @returns whether the item is locked or not
     */
    get_locked(): boolean
    /**
     * Get the modified date and time of the item.
     * 
     * The return value is the number of seconds since the unix epoch, January 1st
     * 1970.
     * @returns the modified date and time
     */
    get_modified(): number
    /**
     * Gets the name of the schema that this item was stored with. This is also
     * available at the `xdg:schema` attribute.
     * @returns the schema name
     */
    get_schema_name(): string | null
    /**
     * Get the secret value of this item.
     * 
     * If this item is locked or the secret has not yet been loaded then this will
     * return %NULL.
     * 
     * To load the secret call the [method`Item`.load_secret] method.
     * @returns the secret value which should be   released with [method@Value.unref], or %NULL
     */
    get_secret(): Value | null
    /**
     * Get the Secret Service object that this item was created with.
     * @returns the Secret Service object
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
    load_secret(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Complete asynchronous operation to load the secret value of this item.
     * 
     * The newly loaded secret value can be accessed by calling
     * [method`Item`.get_secret].
     * @param result asynchronous result passed to callback
     * @returns whether the secret item successfully loaded or not
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
     * @returns whether the secret item successfully loaded or not
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
    set_attributes(schema: Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Complete operation to set the attributes of this item.
     * @param result asynchronous result passed to the callback
     * @returns whether the change was successful or not
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
     * @returns whether the change was successful or not
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
    set_label(label: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Complete asynchronous operation to set the label of this collection.
     * @param result asynchronous result passed to callback
     * @returns whether the change was successful or not
     */
    set_label_finish(result: Gio.AsyncResult): boolean
    /**
     * Set the label of this item.
     * 
     * This function may block indefinitely. Use the asynchronous version
     * in user interface threads.
     * @param label a new label
     * @param cancellable optional cancellation object
     * @returns whether the change was successful or not
     */
    set_label_sync(label: string | null, cancellable: Gio.Cancellable | null): boolean
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
    set_secret(value: Value, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Complete asynchronous operation to set the secret value of this item.
     * @param result asynchronous result passed to callback
     * @returns whether the change was successful or not
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
     * @returns whether the change was successful or not
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
export class Item extends Gio.DBusProxy {

    // Own properties of Secret-1.Secret.Item

    static name: string
    static $gtype: GObject.GType<Item>

    // Constructors of Secret-1.Secret.Item

    constructor(config?: Item.ConstructorProperties) 
    _init(config?: Item.ConstructorProperties): void
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
    static create(collection: Collection, schema: Schema | null, attributes: GLib.HashTable, label: string | null, value: Value, flags: ItemCreateFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Item> | null): void
    /**
     * Finish operation to create a new item in the secret service.
     * @param result the asynchronous result passed to the callback
     * @returns the new item, which should be unreferenced   with [method@GObject.Object.unref]
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
     * @returns the new item, which should be unreferenced   with [method@GObject.Object.unref]
     */
    static create_sync(collection: Collection, schema: Schema | null, attributes: GLib.HashTable, label: string | null, value: Value, flags: ItemCreateFlags, cancellable: Gio.Cancellable | null): Item
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
    static load_secrets(items: Item[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Item> | null): void
    /**
     * Complete asynchronous operation to load the secret values for
     * secret items stored in the service.
     * 
     * Items that are locked will not have their secrets loaded.
     * @param result asynchronous result passed to callback
     * @returns whether the operation succeeded or not
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
     * @returns whether the operation succeeded or not
     */
    static load_secrets_sync(items: Item[], cancellable: Gio.Cancellable | null): boolean
}

export module Prompt {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

export interface Prompt extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

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
    perform(window_id: string | null, return_type: GLib.VariantType, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Complete asynchronous operation to run a prompt and perform the prompting.
     * 
     * Returns a variant result if the prompt was completed and not dismissed. The
     * type of result depends on the action the prompt is completing, and is
     * defined in the Secret Service DBus API specification.
     * @param result the asynchronous result passed to the callback
     * @returns %NULL if the prompt was dismissed or an error occurred,   a variant result if the prompt was successful
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
     * @returns %NULL if the prompt was dismissed or an error occurred
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
     * @returns %NULL if the prompt was dismissed or an error occurred
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
export class Prompt extends Gio.DBusProxy {

    // Own properties of Secret-1.Secret.Prompt

    static name: string
    static $gtype: GObject.GType<Prompt>

    // Constructors of Secret-1.Secret.Prompt

    constructor(config?: Prompt.ConstructorProperties) 
    _init(config?: Prompt.ConstructorProperties): void
}

export module Service {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Backend.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

export interface Service extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Backend {

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
    clear(schema: Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finish asynchronous operation to remove items from the secret
     * service.
     * @param result the asynchronous result passed to the callback
     * @returns whether items were removed or not
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
     * @returns whether items were removed or not
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
     * @returns a new string containing the D-Bus object path   of the item
     */
    create_item_dbus_path_sync(collection_path: string | null, properties: GLib.HashTable, value: Value, flags: ItemCreateFlags, cancellable: Gio.Cancellable | null): string | null
    /**
     * Decode a [struct`Value]` into [struct`GLib`.Variant] received with the Secret Service
     * DBus API.
     * 
     * The [struct`GLib`.Variant] should have a `(oayays)` signature.
     * 
     * A session must have already been established by the [class`Service]`, and
     * the encoded secret must be valid for that session.
     * @param value the encoded secret
     * @returns the decoded secret value
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
     * @returns the encoded secret
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
    ensure_session(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finish an asynchronous operation to ensure that the #SecretService proxy
     * has established a session with the Secret Service.
     * @param result the asynchronous result passed to the callback
     * @returns whether a session is established or not
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
     * @returns whether a session is established or not
     */
    ensure_session_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Get the GObject type for collections instantiated by this service.
     * 
     * This will always be either [class`Collection]` or derived from it.
     * @returns the gobject type for collections
     */
    get_collection_gtype(): GObject.GType
    /**
     * Get a list of [class`Collection]` objects representing all the collections
     * in the secret service.
     * 
     * If the %SECRET_SERVICE_LOAD_COLLECTIONS flag was not specified when
     * initializing #SecretService proxy object, then this method will return
     * %NULL. Use [method`Service`.load_collections] to load the collections.
     * @returns a   list of the collections in the secret service
     */
    get_collections(): Collection[] | null
    /**
     * Get the flags representing what features of the #SecretService proxy
     * have been initialized.
     * 
     * Use [method`Service`.ensure_session] or [method`Service`.load_collections]
     * to initialize further features and change the flags.
     * @returns the flags for features initialized
     */
    get_flags(): ServiceFlags

    // Overloads of get_flags

    /**
     * Gets the flags that `proxy` was constructed with.
     * @returns Flags from the #GDBusProxyFlags enumeration.
     */
    get_flags(): Gio.DBusProxyFlags
    /**
     * Get the GObject type for items instantiated by this service.
     * 
     * This will always be either [class`Item]` or derived from it.
     * @returns the gobject type for items
     */
    get_item_gtype(): GObject.GType
    /**
     * Get the set of algorithms being used to transfer secrets between this
     * secret service proxy and the Secret Service itself.
     * 
     * This will be %NULL if no session has been established. Use
     * [method`Service`.ensure_session] to establish a session.
     * @returns a string representing the algorithms for transferring   secrets
     */
    get_session_algorithms(): string | null
    /**
     * Get the D-Bus object path of the session object being used to transfer
     * secrets between this secret service proxy and the Secret Service itself.
     * 
     * This will be %NULL if no session has been established. Use
     * [method`Service`.ensure_session] to establish a session.
     * @returns a string representing the D-Bus object path of the   session
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
    load_collections(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Complete an asynchronous operation to ensure that the #SecretService proxy
     * has loaded all the collections present in the Secret Service.
     * @param result the asynchronous result passed to the callback
     * @returns whether the load was successful or not
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
     * @returns whether the load was successful or not
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
    lock(objects: Gio.DBusProxy[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Complete asynchronous operation to lock items or collections in the secret
     * service.
     * 
     * The secret service may not be able to lock items individually, and may
     * lock an entire collection instead.
     * @param result asynchronous result passed to the callback
     * @returns the number of items or collections that were locked
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
     * @returns the number of items or collections that were locked
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
    lookup(schema: Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finish asynchronous operation to lookup a secret value in the secret service.
     * 
     * If no secret is found then %NULL is returned.
     * @param result the asynchronous result passed to the callback
     * @returns a newly allocated [struct@Value], which should be   released with [method@Value.unref], or %NULL if no secret found
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
     * @returns a newly allocated [struct@Value], which should be   released with [method@Value.unref], or %NULL if no secret found
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
    prompt(prompt: Prompt, return_type: GLib.VariantType | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Complete asynchronous operation to perform prompting for a [class`Prompt]`.
     * 
     * Returns a variant result if the prompt was completed and not dismissed. The
     * type of result depends on the action the prompt is completing, and is defined
     * in the Secret Service DBus API specification.
     * @param result the asynchronous result passed to the callback
     * @returns %NULL if the prompt was dismissed or an error occurred,   a variant result if the prompt was successful
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
     * @returns %NULL if the prompt was dismissed or an error occurred,   a variant result if the prompt was successful
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
    search(schema: Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Complete asynchronous operation to search for items.
     * @param result asynchronous result passed to callback
     * @returns    a list of items that matched the search
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
     * @returns    a list of items that matched the search
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
    set_alias(alias: string | null, collection: Collection | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finish an asynchronous operation to assign a collection to an alias.
     * @param result asynchronous result passed to callback
     * @returns %TRUE if successful
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
     * @returns %TRUE if successful
     */
    set_alias_sync(alias: string | null, collection: Collection | null, cancellable: Gio.Cancellable | null): boolean
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
    store(schema: Schema | null, attributes: GLib.HashTable, collection: string | null, label: string | null, value: Value, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finish asynchronous operation to store a secret value in the secret service.
     * @param result the asynchronous result passed to the callback
     * @returns whether the storage was successful or not
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
     * @returns whether the storage was successful or not
     */
    store_sync(schema: Schema | null, attributes: GLib.HashTable, collection: string | null, label: string | null, value: Value, cancellable: Gio.Cancellable | null): boolean
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
    unlock(objects: Gio.DBusProxy[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Complete asynchronous operation to unlock items or collections in the secret
     * service.
     * 
     * The secret service may not be able to unlock items individually, and may
     * unlock an entire collection instead.
     * @param result asynchronous result passed to the callback
     * @returns the number of items or collections that were unlocked
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
     * @returns the number of items or collections that were unlocked
     */
    unlock_sync(objects: Gio.DBusProxy[], cancellable: Gio.Cancellable | null): [ /* returnType */ number, /* unlocked */ Gio.DBusProxy[] | null ]

    // Own virtual methods of Secret-1.Secret.Service

    /**
     * Get the GObject type for collections instantiated by this service.
     * 
     * This will always be either [class`Collection]` or derived from it.
     * @virtual 
     * @returns the gobject type for collections
     */
    vfunc_get_collection_gtype(): GObject.GType
    /**
     * Get the GObject type for items instantiated by this service.
     * 
     * This will always be either [class`Item]` or derived from it.
     * @virtual 
     * @returns the gobject type for items
     */
    vfunc_get_item_gtype(): GObject.GType
    vfunc_prompt_async(prompt: Prompt, return_type: GLib.VariantType, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Complete asynchronous operation to perform prompting for a [class`Prompt]`.
     * 
     * Returns a variant result if the prompt was completed and not dismissed. The
     * type of result depends on the action the prompt is completing, and is defined
     * in the Secret Service DBus API specification.
     * @virtual 
     * @param result the asynchronous result passed to the callback
     * @returns %NULL if the prompt was dismissed or an error occurred,   a variant result if the prompt was successful
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
     * @returns %NULL if the prompt was dismissed or an error occurred,   a variant result if the prompt was successful
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
export class Service extends Gio.DBusProxy {

    // Own properties of Secret-1.Secret.Service

    static name: string
    static $gtype: GObject.GType<Service>

    // Constructors of Secret-1.Secret.Service

    constructor(config?: Service.ConstructorProperties) 
    _init(config?: Service.ConstructorProperties): void
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
    static get(flags: ServiceFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Service> | null): void

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
    static get(flags: BackendFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Backend> | null): void
    /**
     * Complete an asynchronous operation to get a #SecretService proxy for the
     * Secret Service.
     * @param result the asynchronous result passed to the callback
     * @returns a new reference to a #SecretService proxy, which   should be released with [method@GObject.Object.unref].
     */
    static get_finish(result: Gio.AsyncResult): Service

    // Overloads of get_finish

    /**
     * Complete an asynchronous operation to get a #SecretBackend.
     * @param result the asynchronous result passed to the callback
     * @returns a new reference to a #SecretBackend proxy, which   should be released with [method@GObject.Object.unref].
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
     * @returns a new reference to a #SecretService proxy, which   should be released with [method@GObject.Object.unref].
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
    static open(service_gtype: GObject.GType, service_bus_name: string | null, flags: ServiceFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Service> | null): void
    /**
     * Complete an asynchronous operation to create a new #SecretService proxy for
     * the Secret Service.
     * @param result the asynchronous result passed to the callback
     * @returns a new reference to a #SecretService proxy, which   should be released with [method@GObject.Object.unref].
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
     * @returns a new reference to a #SecretService proxy, which   should be released with [method@GObject.Object.unref].
     */
    static open_sync(service_gtype: GObject.GType, service_bus_name: string | null, flags: ServiceFlags, cancellable: Gio.Cancellable | null): Service
}

export interface BackendInterface {

    // Own fields of Secret-1.Secret.BackendInterface

    /**
     * the parent interface
     * @field 
     */
    parent_iface: GObject.TypeInterface
    ensure_for_flags: (self: Backend, flags: BackendFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    ensure_for_flags_finish: (self: Backend, result: Gio.AsyncResult) => boolean
    store: (self: Backend, schema: Schema, attributes: GLib.HashTable, collection: string | null, label: string | null, value: Value, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
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
export abstract class BackendInterface {

    // Own properties of Secret-1.Secret.BackendInterface

    static name: string
}

export interface CollectionClass {

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
export abstract class CollectionClass {

    // Own properties of Secret-1.Secret.CollectionClass

    static name: string
}

export interface CollectionPrivate {
}

export class CollectionPrivate {

    // Own properties of Secret-1.Secret.CollectionPrivate

    static name: string
}

export interface ItemClass {

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
export abstract class ItemClass {

    // Own properties of Secret-1.Secret.ItemClass

    static name: string
}

export interface ItemPrivate {
}

export class ItemPrivate {

    // Own properties of Secret-1.Secret.ItemPrivate

    static name: string
}

export interface PromptClass {

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
export abstract class PromptClass {

    // Own properties of Secret-1.Secret.PromptClass

    static name: string
}

export interface PromptPrivate {
}

export class PromptPrivate {

    // Own properties of Secret-1.Secret.PromptPrivate

    static name: string
}

export interface RetrievableInterface {

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
export abstract class RetrievableInterface {

    // Own properties of Secret-1.Secret.RetrievableInterface

    static name: string
}

export interface Schema {

    // Own fields of Secret-1.Secret.Schema

    /**
     * the dotted name of the schema
     * @field 
     */
    name: string | null
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
     * @returns the referenced schema, which should be later   unreferenced with [method@Schema.unref]
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
export class Schema {

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
     * @returns the new schema, which should be unreferenced with   [method@Schema.unref] when done
     */
    constructor(name: string | null, flags: SchemaFlags, attribute_names_and_types: GLib.HashTable) 
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
     * @returns the new schema, which should be unreferenced with   [method@Schema.unref] when done
     */
    static new(name: string | null, flags: SchemaFlags, attribute_names_and_types: GLib.HashTable): Schema
}

export interface SchemaAttribute {

    // Own fields of Secret-1.Secret.SchemaAttribute

    /**
     * name of the attribute
     * @field 
     */
    name: string | null
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
export class SchemaAttribute {

    // Own properties of Secret-1.Secret.SchemaAttribute

    static name: string
}

export interface ServiceClass {

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
export abstract class ServiceClass {

    // Own properties of Secret-1.Secret.ServiceClass

    static name: string
}

export interface ServicePrivate {
}

export class ServicePrivate {

    // Own properties of Secret-1.Secret.ServicePrivate

    static name: string
}

export interface Value {

    // Owm methods of Secret-1.Secret.Value

    /**
     * Get the secret data in the #SecretValue.
     * 
     * The value is not necessarily null-terminated unless it was created with
     * [ctor`Value`.new] or a null-terminated string was passed to
     * [ctor`Value`.new_full].
     * @returns the secret data
     */
    get(): Uint8Array
    /**
     * Get the content type of the secret value, such as
     * `text/plain`.
     * @returns the content type
     */
    get_content_type(): string | null
    /**
     * Get the secret data in the #SecretValue if it contains a textual
     * value.
     * 
     * The content type must be `text/plain`.
     * @returns the content type
     */
    get_text(): string | null
    /**
     * Add another reference to the #SecretValue.
     * 
     * For each reference [method`Value`.unref] should be called to unreference the
     * value.
     * @returns the value
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
     * @returns a new password string stored in nonpageable memory   which must be freed with [func@password_free] when done
     */
    unref_to_password(length: number): [ /* returnType */ string | null, /* length */ number ]
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
export class Value {

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
     * @returns the new #SecretValue
     */
    constructor(secret: string | null, length: number, content_type: string | null) 
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
     * @returns the new #SecretValue
     */
    static new(secret: string | null, length: number, content_type: string | null): Value
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
     * @returns the new #SecretValue
     */
    static new_full(secret: string | null, length: number, content_type: string | null, destroy: GLib.DestroyNotify): Value
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END