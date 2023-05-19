
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './secretunstable-0-ambient.d.ts';
import './secretunstable-0-import.d.ts';
/**
 * SecretUnstable-0
 */

import type Secret from '@girs/secret-1';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

/**
 * Flags for secret_collection_create().
 * @bitfield 
 */
export enum CollectionCreateFlags {
    /**
     * no flags
     */
    COLLECTION_CREATE_NONE,
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
 * Flags for secret_item_create().
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
 * Various flags to be used with secret_service_search() and secret_service_search_sync().
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
 * during a secret_service_get() or secret_service_open() operation.
 * @bitfield 
 */
export enum ServiceFlags {
    /**
     * no flags for initializing the #SecretService
     */
    NONE,
    /**
     * establish a session for transfer of secrets while initializing the #SecretService
     */
    OPEN_SESSION,
    /**
     * load collections while initializing the #SecretService
     */
    LOAD_COLLECTIONS,
}
export module Collection {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {

        // Own constructor properties of SecretUnstable-0.SecretUnstable.Collection

        /**
         * The date and time (in seconds since the UNIX epoch) that this
         * collection was created.
         */
        created?: number | null
        /**
         * The human readable label for the collection.
         * 
         * Setting this property will result in the label of the collection being
         * set asynchronously. To properly track the changing of the label use the
         * secret_collection_set_label() function.
         */
        label?: string | null
        /**
         * The date and time (in seconds since the UNIX epoch) that this
         * collection was last modified.
         */
        modified?: number | null
        /**
         * The #SecretService object that this collection is associated with and
         * uses to interact with the actual D-Bus Secret Service.
         */
        service?: Service | null
    }

}

export interface Collection extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Own properties of SecretUnstable-0.SecretUnstable.Collection

    /**
     * The date and time (in seconds since the UNIX epoch) that this
     * collection was created.
     */
    created: number
    /**
     * The human readable label for the collection.
     * 
     * Setting this property will result in the label of the collection being
     * set asynchronously. To properly track the changing of the label use the
     * secret_collection_set_label() function.
     */
    label: string | null
    /**
     * Whether the collection is locked or not.
     * 
     * To lock or unlock a collection use the secret_service_lock() or
     * secret_service_unlock() functions.
     */
    readonly locked: boolean
    /**
     * The date and time (in seconds since the UNIX epoch) that this
     * collection was last modified.
     */
    modified: number
    /**
     * The #SecretService object that this collection is associated with and
     * uses to interact with the actual D-Bus Secret Service.
     */
    readonly service: Service

    // Own fields of SecretUnstable-0.SecretUnstable.Collection

    parent: Gio.DBusProxy

    // Owm methods of SecretUnstable-0.SecretUnstable.Collection

    /**
     * Delete this collection.
     * 
     * This method returns immediately and completes asynchronously. The secret
     * service may prompt the user. secret_service_prompt() will be used to handle
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
     * This method may block indefinitely and should not be used in user
     * interface threads. The secret service may prompt the user.
     * secret_service_prompt() will be used to handle any prompts that show up.
     * @param cancellable optional cancellation object
     * @returns whether the collection was successfully deleted or not
     */
    delete_sync(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Get the created date and time of the collection. The return value is
     * the number of seconds since the unix epoch, January 1st 1970.
     * @returns the created date and time
     */
    get_created(): number
    /**
     * Get the flags representing what features of the #SecretCollection proxy
     * have been initialized.
     * 
     * Use secret_collection_load_items()  to initialize further features
     * and change the flags.
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
     * @returns a list of items, when done, the list should be freed with g_list_free, and each item should be released with g_object_unref()
     */
    get_items(): Item[]
    /**
     * Get the label of this collection.
     * @returns the label, which should be freed with g_free()
     */
    get_label(): string | null
    /**
     * Get whether the collection is locked or not.
     * 
     * Use secret_service_lock() or secret_service_unlock() to lock or unlock the
     * collection.
     * @returns whether the collection is locked or not
     */
    get_locked(): boolean
    /**
     * Get the modified date and time of the collection. The return value is
     * the number of seconds since the unix epoch, January 1st 1970.
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
     * in the Secret Service. This affects the result of
     * secret_collection_get_items().
     * 
     * For collections returned from secret_service_get_collections() the items
     * will have already been loaded.
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
     * secret_collection_get_items().
     * 
     * For collections returned from secret_service_get_collections() the items
     * will have already been loaded.
     * 
     * This method may block indefinitely and should not be used in user interface
     * threads.
     * @param cancellable optional cancellation object
     * @returns whether the load was successful or not
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
     * their secret values loaded and available via secret_item_get_secret().
     * 
     * This function returns immediately and completes asynchronously.
     * @param schema the schema for the attributes
     * @param attributes search for items matching these attributes
     * @param flags search option flags
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    search(schema: Secret.Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Complete asynchronous operation to search for items in a collection.
     * @param result asynchronous result passed to callback
     * @returns a list of items that matched the search
     */
    search_finish(result: Gio.AsyncResult): Item[]
    /**
     * Search for items in `collection` matching the `attributes,` and return their
     * DBus object paths. Only the specified collection is searched. The `attributes`
     * should be a table of string keys and string values.
     * 
     * This function returns immediately and completes asynchronously.
     * 
     * When your callback is called use secret_collection_search_for_dbus_paths_finish()
     * to get the results of this function. Only the DBus object paths of the
     * items will be returned. If you would like #SecretItem objects to be returned
     * instead, then use the secret_collection_search() function.
     * @param schema the schema for the attributes
     * @param attributes search for items matching these attributes
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    search_for_dbus_paths(schema: Secret.Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Complete asynchronous operation to search for items in a collection.
     * 
     * DBus object paths of the items will be returned. If you would to have
     * #SecretItem objects to be returned instead, then use the
     * secret_collection_search() and secret_collection_search_finish() functions.
     * @param result asynchronous result passed to callback
     * @returns an array of DBus object paths for matching items.
     */
    search_for_dbus_paths_finish(result: Gio.AsyncResult): string[]
    /**
     * Search for items matching the `attributes` in `collection,` and return their
     * DBus object paths. The `attributes` should be a table of string keys and
     * string values.
     * 
     * This function may block indefinetely. Use the asynchronous version
     * in user interface threads.
     * 
     * DBus object paths of the items will be returned. If you would to have
     * #SecretItem objects to be returned instead, then use the
     * secret_collection_search_sync() function.
     * @param schema the schema for the attributes
     * @param attributes search for items matching these attributes
     * @param cancellable optional cancellation object
     * @returns an array of DBus object paths for matching items.
     */
    search_for_dbus_paths_sync(schema: Secret.Schema | null, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null): string[]
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
     * their secret values loaded and available via secret_item_get_secret().
     * 
     * This function may block indefinetely. Use the asynchronous version
     * in user interface threads.
     * @param schema the schema for the attributes
     * @param attributes search for items matching these attributes
     * @param flags search option flags
     * @param cancellable optional cancellation object
     * @returns a list of items that matched the search
     */
    search_sync(schema: Secret.Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable?: Gio.Cancellable | null): Item[]
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
     * This function may block indefinetely. Use the asynchronous version
     * in user interface threads.
     * @param label a new label
     * @param cancellable optional cancellation object
     * @returns whether the change was successful or not
     */
    set_label_sync(label: string | null, cancellable?: Gio.Cancellable | null): boolean

    // Class property signals of SecretUnstable-0.SecretUnstable.Collection

    connect(sigName: "notify::created", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::created", ...args: any[]): void
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
 * @class 
 */
export class Collection extends Gio.DBusProxy {

    // Own properties of SecretUnstable-0.SecretUnstable.Collection

    static name: string
    static $gtype: GObject.GType<Collection>

    // Constructors of SecretUnstable-0.SecretUnstable.Collection

    constructor(config?: Collection.ConstructorProperties) 
    /**
     * Finish asynchronous operation to get a new collection proxy for a
     * collection in the secret service.
     * @constructor 
     * @param result the asynchronous result passed to the callback
     * @returns the new collection, which should be unreferenced with g_object_unref()
     */
    static new_for_dbus_path_finish(result: Gio.AsyncResult): Collection
    /**
     * Get a new collection proxy for a collection in the secret service.
     * 
     * If `service` is NULL, then secret_service_get_sync() will be called to get
     * the default #SecretService proxy.
     * 
     * This method may block indefinitely and should not be used in user interface
     * threads.
     * @constructor 
     * @param service a secret service object
     * @param collection_path the D-Bus path of the collection
     * @param flags options for the collection initialization
     * @param cancellable optional cancellation object
     * @returns the new collection, which should be unreferenced with g_object_unref()
     */
    static new_for_dbus_path_sync(service: Service | null, collection_path: string | null, flags: CollectionFlags, cancellable?: Gio.Cancellable | null): Collection
    _init(config?: Collection.ConstructorProperties): void
    /**
     * Get a new collection proxy for a collection in the secret service.
     * 
     * If `service` is NULL, then secret_service_get() will be called to get
     * the default #SecretService proxy.
     * 
     * This method will return immediately and complete asynchronously.
     * @param service a secret service object
     * @param collection_path the D-Bus path of the collection
     * @param flags options for the collection initialization
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    static new_for_dbus_path(service: Service | null, collection_path: string | null, flags: CollectionFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Collection> | null): void
    /**
     * Create a new collection in the secret service.
     * 
     * This method returns immediately and completes asynchronously. The secret
     * service may prompt the user. secret_service_prompt() will be used to handle
     * any prompts that are required.
     * 
     * An `alias` is a well-known tag for a collection, such as 'default' (ie: the
     * default collection to store items in). This allows other applications to
     * easily identify and share a collection. If you specify an `alias,` and a
     * collection with that alias already exists, then a new collection will not
     * be created. The previous one will be returned instead.
     * 
     * If `service` is NULL, then secret_service_get() will be called to get
     * the default #SecretService proxy.
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
     * @returns the new collection, which should be unreferenced with g_object_unref()
     */
    static create_finish(result: Gio.AsyncResult): Collection
    /**
     * Create a new collection in the secret service.
     * 
     * This method may block indefinitely and should not be used in user interface
     * threads. The secret service may prompt the user. secret_service_prompt()
     * will be used to handle any prompts that are required.
     * 
     * An `alias` is a well-known tag for a collection, such as 'default' (ie: the
     * default collection to store items in). This allows other applications to
     * easily identify and share a collection. If you specify an `alias,` and a
     * collection with that alias already exists, then a new collection will not
     * be created. The previous one will be returned instead.
     * 
     * If `service` is NULL, then secret_service_get_sync() will be called to get
     * the default #SecretService proxy.
     * @param service a secret service object
     * @param label label for the new collection
     * @param alias alias to assign to the collection
     * @param flags currently unused
     * @param cancellable optional cancellation object
     * @returns the new collection, which should be unreferenced with g_object_unref()
     */
    static create_sync(service: Service | null, label: string | null, alias: string | null, flags: CollectionCreateFlags, cancellable?: Gio.Cancellable | null): Collection
    /**
     * Lookup which collection is assigned to this alias. Aliases help determine
     * well known collections, such as 'default'.
     * 
     * If `service` is NULL, then secret_service_get() will be called to get
     * the default #SecretService proxy.
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
    static for_alias_finish(result: Gio.AsyncResult): Collection
    /**
     * Lookup which collection is assigned to this alias. Aliases help determine
     * well known collections, such as 'default'.
     * 
     * If `service` is NULL, then secret_service_get_sync() will be called to get
     * the default #SecretService proxy.
     * 
     * This method may block and should not be used in user interface threads.
     * @param service a secret service object
     * @param alias the alias to lookup
     * @param flags options for the collection initialization
     * @param cancellable optional cancellation object
     * @returns the collection, or %NULL if none assigned to the alias
     */
    static for_alias_sync(service: Service | null, alias: string | null, flags: CollectionFlags, cancellable?: Gio.Cancellable | null): Collection
}

export module Item {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {

        // Own constructor properties of SecretUnstable-0.SecretUnstable.Item

        /**
         * The attributes set on this item. Attributes are used to locate an
         * item. They are not guaranteed to be stored or transferred securely.
         */
        attributes?: GLib.HashTable | null
        /**
         * The date and time (in seconds since the UNIX epoch) that this
         * item was created.
         */
        created?: number | null
        /**
         * The human readable label for the item.
         * 
         * Setting this property will result in the label of the item being
         * set asynchronously. To properly track the changing of the label use the
         * secret_item_set_label() function.
         */
        label?: string | null
        /**
         * The date and time (in seconds since the UNIX epoch) that this
         * item was last modified.
         */
        modified?: number | null
        /**
         * The #SecretService object that this item is associated with and
         * uses to interact with the actual D-Bus Secret Service.
         */
        service?: Service | null
    }

}

export interface Item extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Own properties of SecretUnstable-0.SecretUnstable.Item

    /**
     * The attributes set on this item. Attributes are used to locate an
     * item. They are not guaranteed to be stored or transferred securely.
     */
    attributes: GLib.HashTable
    /**
     * The date and time (in seconds since the UNIX epoch) that this
     * item was created.
     */
    created: number
    /**
     * The human readable label for the item.
     * 
     * Setting this property will result in the label of the item being
     * set asynchronously. To properly track the changing of the label use the
     * secret_item_set_label() function.
     */
    label: string | null
    /**
     * Whether the item is locked or not. An item may not be independently
     * lockable separate from other items in its collection.
     * 
     * To lock or unlock a item use the secret_service_lock() or
     * secret_service_unlock() functions.
     */
    readonly locked: boolean
    /**
     * The date and time (in seconds since the UNIX epoch) that this
     * item was last modified.
     */
    modified: number
    /**
     * The #SecretService object that this item is associated with and
     * uses to interact with the actual D-Bus Secret Service.
     */
    readonly service: Service

    // Own fields of SecretUnstable-0.SecretUnstable.Item

    parent_instance: Gio.DBusProxy

    // Owm methods of SecretUnstable-0.SecretUnstable.Item

    /**
     * Delete this item.
     * 
     * This method returns immediately and completes asynchronously. The secret
     * service may prompt the user. secret_service_prompt() will be used to handle
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
     * secret_service_prompt() will be used to handle any prompts that show up.
     * @param cancellable optional cancellation object
     * @returns whether the item was successfully deleted or not
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
     * secret_item_set_attributes() instead.
     * @returns a new reference to the attributes, which should not be modified, and released with g_hash_table_unref()
     */
    get_attributes(): GLib.HashTable
    /**
     * Get the created date and time of the item. The return value is
     * the number of seconds since the unix epoch, January 1st 1970.
     * @returns the created date and time
     */
    get_created(): number
    /**
     * Get the flags representing what features of the #SecretItem proxy
     * have been initialized.
     * 
     * Use secret_item_load_secret() to initialize further features
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
     * @returns the label, which should be freed with g_free()
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
     * Get the modified date and time of the item. The return value is
     * the number of seconds since the unix epoch, January 1st 1970.
     * @returns the modified date and time
     */
    get_modified(): number
    /**
     * Gets the name of the schema that this item was stored with. This is also
     * available at the <literal>xdg:schema</literal> attribute.
     * @returns the schema name
     */
    get_schema_name(): string | null
    /**
     * Get the secret value of this item. If this item is locked or the secret
     * has not yet been loaded then this will return %NULL.
     * 
     * To load the secret call the secret_item_load_secret() method.
     * @returns the secret value which should be released with secret_value_unref(), or %NULL
     */
    get_secret(): Value
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
     * secret_item_get_secret().
     * @param result asynchronous result passed to callback
     * @returns whether the secret item succesfully loaded or not
     */
    load_secret_finish(result: Gio.AsyncResult): boolean
    /**
     * Load the secret value of this item.
     * 
     * Each item has a single secret which might be a password or some
     * other secret binary value.
     * 
     * This function may block indefinetely. Use the asynchronous version
     * in user interface threads.
     * @param cancellable optional cancellation object
     * @returns whether the secret item succesfully loaded or not
     */
    load_secret_sync(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Refresh the properties on this item. This fires off a request to
     * refresh, and the properties will be updated later.
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
    set_attributes(schema: Secret.Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
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
     * This function may block indefinetely. Use the asynchronous version
     * in user interface threads.
     * @param schema the schema for the attributes
     * @param attributes a new set of attributes
     * @param cancellable optional cancellation object
     * @returns whether the change was successful or not
     */
    set_attributes_sync(schema: Secret.Schema | null, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null): boolean
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
     * This function may block indefinetely. Use the asynchronous version
     * in user interface threads.
     * @param label a new label
     * @param cancellable optional cancellation object
     * @returns whether the change was successful or not
     */
    set_label_sync(label: string | null, cancellable?: Gio.Cancellable | null): boolean
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
     * This function may block indefinetely. Use the asynchronous version
     * in user interface threads.
     * @param value a new secret value
     * @param cancellable optional cancellation object
     * @returns whether the change was successful or not
     */
    set_secret_sync(value: Value, cancellable?: Gio.Cancellable | null): boolean

    // Class property signals of SecretUnstable-0.SecretUnstable.Item

    connect(sigName: "notify::attributes", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::created", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::created", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::created", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::locked", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::locked", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::locked", ...args: any[]): void
    connect(sigName: "notify::modified", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modified", callback: (($obj: Item, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modified", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A proxy object representing a secret item in the Secret Service.
 * @class 
 */
export class Item extends Gio.DBusProxy {

    // Own properties of SecretUnstable-0.SecretUnstable.Item

    static name: string
    static $gtype: GObject.GType<Item>

    // Constructors of SecretUnstable-0.SecretUnstable.Item

    constructor(config?: Item.ConstructorProperties) 
    /**
     * Finish asynchronous operation to get a new item proxy for an secret
     * item in the secret service.
     * @constructor 
     * @param result the asynchronous result passed to the callback
     * @returns the new item, which should be unreferenced with g_object_unref()
     */
    static new_for_dbus_path_finish(result: Gio.AsyncResult): Item
    static new_for_dbus_path_sync(service: Service, item_path: string | null, flags: ItemFlags, cancellable?: Gio.Cancellable | null): Item
    _init(config?: Item.ConstructorProperties): void
    /**
     * Get a new item proxy for a secret item in the secret service.
     * 
     * If `service` is NULL, then secret_service_get() will be called to get
     * the default #SecretService proxy.
     * 
     * This method will return immediately and complete asynchronously.
     * @param service a secret service object
     * @param item_path the D-Bus path of the collection
     * @param flags initialization flags for the new item
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    static new_for_dbus_path(service: Service | null, item_path: string | null, flags: ItemFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Item> | null): void
    /**
     * Create a new item in the secret service.
     * 
     * If the `flags` contains %SECRET_ITEM_CREATE_REPLACE, then the secret
     * service will search for an item matching the `attributes,` and update that item
     * instead of creating a new one.
     * 
     * This method may block indefinitely and should not be used in user interface
     * threads. The secret service may prompt the user. secret_service_prompt()
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
    static create(collection: Collection, schema: Secret.Schema | null, attributes: GLib.HashTable, label: string | null, value: Value, flags: ItemCreateFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Item> | null): void
    /**
     * Finish operation to create a new item in the secret service.
     * @param result the asynchronous result passed to the callback
     * @returns the new item, which should be unreferenced with g_object_unref()
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
     * threads. The secret service may prompt the user. secret_service_prompt()
     * will be used to handle any prompts that are required.
     * @param collection a secret collection to create this item in
     * @param schema the schema for the attributes
     * @param attributes attributes for the new item
     * @param label label for the new item
     * @param value secret value for the new item
     * @param flags flags for the creation of the new item
     * @param cancellable optional cancellation object
     * @returns the new item, which should be unreferenced with g_object_unref()
     */
    static create_sync(collection: Collection, schema: Secret.Schema | null, attributes: GLib.HashTable, label: string | null, value: Value, flags: ItemCreateFlags, cancellable?: Gio.Cancellable | null): Item
    /**
     * Load the secret values for an secret items stored in the service.
     * 
     * The `items` must all have the same SecretItem::service property.
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
     * @returns whether the operation succeded or not
     */
    static load_secrets_finish(result: Gio.AsyncResult): boolean
    /**
     * Load the secret values for an secret items stored in the service.
     * 
     * The `items` must all have the same SecretItem::service property.
     * 
     * This method may block indefinitely and should not be used in user interface
     * threads.
     * 
     * Items that are locked will not have their secrets loaded.
     * @param items the items to retrieve secrets for
     * @param cancellable optional cancellation object
     * @returns whether the operation succeded or not
     */
    static load_secrets_sync(items: Item[], cancellable?: Gio.Cancellable | null): boolean
}

export module Prompt {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

export interface Prompt extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Own fields of SecretUnstable-0.SecretUnstable.Prompt

    parent_instance: Gio.DBusProxy

    // Owm methods of SecretUnstable-0.SecretUnstable.Prompt

    /**
     * Runs a prompt and performs the prompting. Returns %TRUE if the prompt
     * was completed and not dismissed.
     * 
     * If `window_id` is non-zero then it is used as an XWindow id. The Secret
     * Service can make its prompt transient for the window with this id. In some
     * Secret Service implementations this is not possible, so the behavior
     * depending on this should degrade gracefully.
     * 
     * This method will return immediately and complete asynchronously.
     * @param window_id XWindow id for parent window to be transient for
     * @param return_type the variant type of the prompt result
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    perform(window_id: number, return_type: GLib.VariantType, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Complete asynchronous operation to run a prompt and perform the prompting.
     * 
     * Returns a variant result if the prompt was completed and not dismissed. The
     * type of result depends on the action the prompt is completing, and is
     * defined in the Secret Service DBus API specification.
     * @param result the asynchronous result passed to the callback
     * @returns %NULL if the prompt was dismissed or an error occurred, a variant result if the prompt was successful
     */
    perform_finish(result: Gio.AsyncResult): GLib.Variant
    /**
     * Runs a prompt and performs the prompting. Returns a variant result if the
     * prompt was completed and not dismissed. The type of result depends on the
     * action the prompt is completing, and is defined in the Secret Service DBus
     * API specification.
     * 
     * If `window_id` is non-zero then it is used as an XWindow id. The Secret
     * Service can make its prompt transient for the window with this id. In some
     * Secret Service implementations this is not possible, so the behavior
     * depending on this should degrade gracefully.
     * 
     * This method may block indefinitely and should not be used in user interface
     * threads.
     * @param window_id XWindow id for parent window to be transient for
     * @param cancellable optional cancellation object
     * @param return_type the variant type of the prompt result
     * @returns %NULL if the prompt was dismissed or an error occurred
     */
    perform_sync(window_id: number, cancellable: Gio.Cancellable | null, return_type: GLib.VariantType): GLib.Variant
    /**
     * Runs a prompt and performs the prompting. Returns a variant result if the
     * prompt was completed and not dismissed. The type of result depends on the
     * action the prompt is completing, and is defined in the Secret Service DBus
     * API specification.
     * 
     * If `window_id` is non-zero then it is used as an XWindow id. The Secret
     * Service can make its prompt transient for the window with this id. In some
     * Secret Service implementations this is not possible, so the behavior
     * depending on this should degrade gracefully.
     * 
     * This runs the dialog in a recursive mainloop. When run from a user interface
     * thread, this means the user interface will remain responsive. Care should be
     * taken that appropriate user interface actions are disabled while running the
     * prompt.
     * @param window_id XWindow id for parent window to be transient for
     * @param cancellable optional cancellation object
     * @param return_type the variant type of the prompt result
     * @returns %NULL if the prompt was dismissed or an error occurred
     */
    run(window_id: number, cancellable: Gio.Cancellable | null, return_type: GLib.VariantType): GLib.Variant

    // Class property signals of SecretUnstable-0.SecretUnstable.Prompt

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
 * A proxy object representing a prompt that the Secret Service will display
 * to the user.
 * @class 
 */
export class Prompt extends Gio.DBusProxy {

    // Own properties of SecretUnstable-0.SecretUnstable.Prompt

    static name: string
    static $gtype: GObject.GType<Prompt>

    // Constructors of SecretUnstable-0.SecretUnstable.Prompt

    constructor(config?: Prompt.ConstructorProperties) 
    _init(config?: Prompt.ConstructorProperties): void
}

export module Service {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

export interface Service extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Own fields of SecretUnstable-0.SecretUnstable.Service

    parent: Gio.DBusProxy

    // Owm methods of SecretUnstable-0.SecretUnstable.Service

    /**
     * Remove unlocked items which match the attributes from the secret service.
     * 
     * The `attributes` should be a set of key and value string pairs.
     * 
     * If `service` is NULL, then secret_service_get() will be called to get
     * the default #SecretService proxy.
     * 
     * This method will return immediately and complete asynchronously.
     * @param schema the schema for the attributes
     * @param attributes the attribute keys and values
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    clear(schema: Secret.Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
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
     * If `service` is NULL, then secret_service_get_sync() will be called to get
     * the default #SecretService proxy.
     * 
     * This method may block indefinitely and should not be used in user interface
     * threads.
     * @param schema the schema for the attributes
     * @param attributes the attribute keys and values
     * @param cancellable optional cancellation object
     * @returns whether items were removed or not
     */
    clear_sync(schema: Secret.Schema | null, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Create a new collection in the secret service, and return its path.
     * 
     * Using this method requires that you setup a correct hash table of D-Bus
     * properties for the new collection. You may prefer to use
     * secret_collection_create() which does handles this for you.
     * 
     * An `alias` is a well-known tag for a collection, such as 'default' (ie: the
     * default collection to store items in). This allows other applications to
     * easily identify and share a collection. If a collection with the `alias`
     * already exists, then instead of creating a new collection, the existing
     * collection will be returned. If no collection with this alias exists, then a
     * new collection will be created and this alias will be assigned to it.
     * 
     * `properties` is a set of properties for the new collection. The keys in the
     * hash table should be interface.property strings like
     * <literal>org.freedesktop.Secret.Collection.Label</literal>. The values
     * in the hash table should be #GVariant values of the properties.
     * 
     * If you wish to have a
     * 
     * This method will return immediately and complete asynchronously. The secret
     * service may prompt the user. secret_service_prompt() will be used to handle
     * any prompts that are required.
     * @param properties hash table of properties for the new collection
     * @param alias an alias to check for before creating the new collection, or to assign to the new collection
     * @param flags not currently used
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    create_collection_dbus_path(properties: GLib.HashTable, alias: string | null, flags: CollectionCreateFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finish asynchronous operation to create a new collection in the secret
     * service.
     * @param result the asynchronous result passed to the callback
     * @returns a new string containing the D-Bus object path of the collection
     */
    create_collection_dbus_path_finish(result: Gio.AsyncResult): string | null
    /**
     * Create a new collection in the secret service and return its path.
     * 
     * Using this method requires that you setup a correct hash table of D-Bus
     * properties for the new collection. You may prefer to use
     * secret_collection_create() which does handles this for you.
     * 
     * An `alias` is a well-known tag for a collection, such as 'default' (ie: the
     * default collection to store items in). This allows other applications to
     * easily identify and share a collection. If a collection with the `alias`
     * already exists, then instead of creating a new collection, the existing
     * collection will be returned. If no collection with this alias exists, then
     * a new collection will be created and this alias will be assigned to it.
     * 
     * `properties` is a set of properties for the new collection. The keys in the
     * hash table should be interface.property strings like
     * <literal>org.freedesktop.Secret.Collection.Label</literal>. The values
     * in the hash table should be #GVariant values of the properties.
     * 
     * This method may block indefinitely and should not be used in user interface
     * threads. The secret service may prompt the user. secret_service_prompt()
     * will be used to handle any prompts that are required.
     * @param properties hash table of D-Bus properties for the new collection
     * @param alias an alias to check for before creating the new collection, or to assign to the new collection
     * @param flags not currently used
     * @param cancellable optional cancellation object
     * @returns a new string containing the D-Bus object path of the collection
     */
    create_collection_dbus_path_sync(properties: GLib.HashTable, alias: string | null, flags: CollectionCreateFlags, cancellable?: Gio.Cancellable | null): string | null
    /**
     * Create a new item in a secret service collection and return its D-Bus
     * object path.
     * 
     * It is often easier to use secret_password_store() or secret_item_create()
     * rather than using this function. Using this method requires that you setup
     * a correct hash table of D-Bus `properties` for the new collection.
     * 
     * If the `flags` contains %SECRET_ITEM_CREATE_REPLACE, then the secret
     * service will search for an item matching the `attributes,` and update that item
     * instead of creating a new one.
     * 
     * `properties` is a set of properties for the new collection. The keys in the
     * hash table should be interface.property strings like
     * <literal>org.freedesktop.Secret.Item.Label</literal>. The values
     * in the hash table should be #GVariant values of the properties.
     * 
     * This method will return immediately and complete asynchronously. The secret
     * service may prompt the user. secret_service_prompt() will be used to handle
     * any prompts that are required.
     * @param collection_path the D-Bus object path of the collection in which to create item
     * @param properties hash table of D-Bus properties for the new collection
     * @param value the secret value to store in the item
     * @param flags flags for the creation of the new item
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    create_item_dbus_path(collection_path: string | null, properties: GLib.HashTable, value: Value, flags: ItemCreateFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finish asynchronous operation to create a new item in the secret
     * service.
     * @param result the asynchronous result passed to the callback
     * @returns a new string containing the D-Bus object path of the item
     */
    create_item_dbus_path_finish(result: Gio.AsyncResult): string | null
    /**
     * Create a new item in a secret service collection and return its D-Bus
     * object path.
     * 
     * It is often easier to use secret_password_store_sync() or secret_item_create_sync()
     * rather than using this function. Using this method requires that you setup
     * a correct hash table of D-Bus `properties` for the new collection.
     * 
     * If the `flags` contains %SECRET_ITEM_CREATE_REPLACE, then the secret
     * service will search for an item matching the `attributes,` and update that item
     * instead of creating a new one.
     * 
     * `properties` is a set of properties for the new collection. The keys in the
     * hash table should be interface.property strings like
     * <literal>org.freedesktop.Secret.Item.Label</literal>. The values
     * in the hash table should be #GVariant values of the properties.
     * 
     * This method may block indefinitely and should not be used in user interface
     * threads. The secret service may prompt the user. secret_service_prompt()
     * will be used to handle any prompts that are required.
     * @param collection_path the D-Bus path of the collection in which to create item
     * @param properties hash table of D-Bus properties for the new collection
     * @param value the secret value to store in the item
     * @param flags flags for the creation of the new item
     * @param cancellable optional cancellation object
     * @returns a new string containing the D-Bus object path of the item
     */
    create_item_dbus_path_sync(collection_path: string | null, properties: GLib.HashTable, value: Value, flags: ItemCreateFlags, cancellable?: Gio.Cancellable | null): string | null
    /**
     * Delete a secret item from the secret service.
     * 
     * The item is represented by its D-Bus object path. If you already have a
     * #SecretItem proxy objects, use use secret_item_delete() instead.
     * 
     * This method will return immediately and complete asynchronously.
     * @param item_path the D-Bus path of item to delete
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    delete_item_dbus_path(item_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Complete an asynchronous operation to delete a secret item from the secret
     * service.
     * @param result the asynchronous result passed to the callback
     * @returns whether the deletion was successful or not
     */
    delete_item_dbus_path_finish(result: Gio.AsyncResult): boolean
    /**
     * Delete a secret item from the secret service.
     * 
     * The item is represented by its D-Bus object path. If you already have a
     * #SecretItem proxy objects, use use secret_item_delete_sync() instead.
     * 
     * This method may block indefinitely and should not be used in user interface
     * threads.
     * @param item_path the D-Bus path of item to delete
     * @param cancellable optional cancellation object
     * @returns whether the deletion was successful or not
     */
    delete_item_dbus_path_sync(item_path: string | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Ensure that the #SecretService proxy has established a session with the
     * Secret Service. This session is used to transfer secrets.
     * 
     * It is not normally necessary to call this method, as the session is
     * established as necessary. You can also pass the %SECRET_SERVICE_OPEN_SESSION
     * to secret_service_get() in order to ensure that a session has been established
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
     * Secret Service. This session is used to transfer secrets.
     * 
     * It is not normally necessary to call this method, as the session is
     * established as necessary. You can also pass the %SECRET_SERVICE_OPEN_SESSION
     * to secret_service_get_sync() in order to ensure that a session has been
     * established by the time you get the #SecretService proxy.
     * 
     * This method may block indefinitely and should not be used in user interface
     * threads.
     * @param cancellable optional cancellation object
     * @returns whether a session is established or not
     */
    ensure_session_sync(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Get the GObject type for collections instantiated by this service.
     * This will always be either #SecretCollection or derived from it.
     * @returns the gobject type for collections
     */
    get_collection_gtype(): GObject.GType
    /**
     * Get a list of #SecretCollection objects representing all the collections
     * in the secret service.
     * 
     * If the %SECRET_SERVICE_LOAD_COLLECTIONS flag was not specified when
     * initializing #SecretService proxy object, then this method will return
     * %NULL. Use secret_service_load_collections() to load the collections.
     * @returns a list of the collections in the secret service
     */
    get_collections(): Collection[]
    /**
     * Get the flags representing what features of the #SecretService proxy
     * have been initialized.
     * 
     * Use secret_service_ensure_session() or secret_service_load_collections()
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
     * Get the GObject type for items instantiated by this collection.
     * This will always be either #SecretItem or derived from it.
     * @returns the gobject type for items
     */
    get_item_gtype(): GObject.GType
    /**
     * Get the secret value for an secret item stored in the service.
     * 
     * The item is represented by its D-Bus object path. If you already have a
     * #SecretItem proxy object, use use secret_item_get_secret() to more simply
     * get its secret value.
     * 
     * This function returns immediately and completes asynchronously.
     * @param item_path the D-Bus path to item to retrieve secret for
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    get_secret_for_dbus_path(item_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Complete asynchronous operation to get the secret value for an
     * secret item stored in the service.
     * 
     * Will return %NULL if the item is locked.
     * @param result asynchronous result passed to callback
     * @returns the newly allocated secret value for the item, which should be released with secret_value_unref()
     */
    get_secret_for_dbus_path_finish(result: Gio.AsyncResult): Value
    /**
     * Get the secret value for an secret item stored in the service.
     * 
     * The item is represented by its D-Bus object path. If you already have a
     * #SecretItem proxy object, use use secret_item_load_secret_sync() to more simply
     * get its secret value.
     * 
     * This method may block indefinitely and should not be used in user interface
     * threads.
     * 
     * Will return %NULL if the item is locked.
     * @param item_path the D-Bus path to item to retrieve secret for
     * @param cancellable optional cancellation object
     * @returns the newly allocated secret value for the item, which should be released with secret_value_unref()
     */
    get_secret_for_dbus_path_sync(item_path: string | null, cancellable?: Gio.Cancellable | null): Value
    /**
     * Get the secret values for an secret items stored in the service.
     * 
     * The items are represented by their D-Bus object paths. If you already have
     * #SecretItem proxy objects, use use secret_item_load_secrets() to more simply
     * get their secret values.
     * 
     * This function returns immediately and completes asynchronously.
     * @param item_paths the D-Bus paths to items to retrieve secrets for
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    get_secrets_for_dbus_paths(item_paths: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Complete asynchronous operation to get the secret values for an
     * secret items stored in the service.
     * 
     * Items that are locked will not be included the results.
     * @param result asynchronous result passed to callback
     * @returns a newly allocated hash table of item_path keys to #SecretValue values.
     */
    get_secrets_for_dbus_paths_finish(result: Gio.AsyncResult): GLib.HashTable
    /**
     * Get the secret values for an secret items stored in the service.
     * 
     * The items are represented by their D-Bus object paths. If you already have
     * #SecretItem proxy objects, use use secret_item_load_secrets_sync() to more
     * simply get their secret values.
     * 
     * This method may block indefinitely and should not be used in user interface
     * threads.
     * 
     * Items that are locked will not be included the results.
     * @param item_paths the D-Bus paths to items to retrieve secrets for
     * @param cancellable optional cancellation object
     * @returns a newly allocated hash table of item_path keys to #SecretValue values.
     */
    get_secrets_for_dbus_paths_sync(item_paths: string | null, cancellable?: Gio.Cancellable | null): GLib.HashTable
    /**
     * Get the set of algorithms being used to transfer secrets between this
     * secret service proxy and the Secret Service itself.
     * 
     * This will be %NULL if no session has been established. Use
     * secret_service_ensure_session() to establish a session.
     * @returns a string representing the algorithms for transferring secrets
     */
    get_session_algorithms(): string | null
    /**
     * Get the D-Bus object path of the session object being used to transfer
     * secrets between this secret service proxy and the Secret Service itself.
     * 
     * This will be %NULL if no session has been established. Use
     * secret_service_ensure_session() to establish a session.
     * @returns a string representing the D-Bus object path of the session
     */
    get_session_dbus_path(): string | null
    /**
     * Ensure that the #SecretService proxy has loaded all the collections present
     * in the Secret Service. This affects the result of
     * secret_service_get_collections().
     * 
     * You can also pass the %SECRET_SERVICE_LOAD_COLLECTIONS to
     * secret_service_get_sync() in order to ensure that the collections have been
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
     * in the Secret Service. This affects the result of
     * secret_service_get_collections().
     * 
     * You can also pass the %SECRET_SERVICE_LOAD_COLLECTIONS to
     * secret_service_get_sync() in order to ensure that the collections have been
     * loaded by the time you get the #SecretService proxy.
     * 
     * This method may block indefinitely and should not be used in user interface
     * threads.
     * @param cancellable optional cancellation object
     * @returns whether the load was successful or not
     */
    load_collections_sync(cancellable?: Gio.Cancellable | null): boolean
    /**
     * Lock items or collections in the secret service.
     * 
     * The secret service may not be able to lock items individually, and may
     * lock an entire collection instead.
     * 
     * If `service` is NULL, then secret_service_get() will be called to get
     * the default #SecretService proxy.
     * 
     * This method returns immediately and completes asynchronously. The secret
     * service may prompt the user. secret_service_prompt() will be used to handle
     * any prompts that show up.
     * @param objects the items or collections to lock
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    lock(objects: Gio.DBusProxy[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Lock items or collections in the secret service.
     * 
     * The items or collections are represented by their D-Bus object paths. If you
     * already have #SecretItem and #SecretCollection proxy objects, use use
     * secret_service_lock() instead.
     * 
     * The secret service may not be able to lock items individually, and may
     * lock an entire collection instead.
     * 
     * This method returns immediately and completes asynchronously. The secret
     * service may prompt the user. secret_service_prompt() will be used to handle
     * any prompts that show up.
     * @param paths the D-Bus paths for items or collections to lock
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    lock_dbus_paths(paths: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Complete asynchronous operation to lock items or collections in the secret
     * service.
     * 
     * The secret service may not be able to lock items individually, and may
     * lock an entire collection instead.
     * @param result asynchronous result passed to the callback
     * @returns the number of items or collections that were locked
     */
    lock_dbus_paths_finish(result: Gio.AsyncResult): [ /* returnType */ number, /* locked */ string[] | null ]
    /**
     * Lock items or collections in the secret service.
     * 
     * The items or collections are represented by their D-Bus object paths. If you
     * already have #SecretItem and #SecretCollection proxy objects, use use
     * secret_service_lock_sync() instead.
     * 
     * The secret service may not be able to lock items individually, and may
     * lock an entire collection instead.
     * 
     * This method may block indefinitely and should not be used in user
     * interface threads. The secret service may prompt the user.
     * secret_service_prompt() will be used to handle any prompts that show up.
     * @param paths the D-Bus object paths of the items or collections to lock
     * @param cancellable optional cancellation object
     * @returns the number of items or collections that were locked
     */
    lock_dbus_paths_sync(paths: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* locked */ string[] | null ]
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
     * If `service` is NULL, then secret_service_get_sync() will be called to get
     * the default #SecretService proxy.
     * 
     * This method may block indefinitely and should not be used in user
     * interface threads. The secret service may prompt the user.
     * secret_service_prompt() will be used to handle any prompts that show up.
     * @param objects the items or collections to lock
     * @param cancellable optional cancellation object
     * @returns the number of items or collections that were locked
     */
    lock_sync(objects: Gio.DBusProxy[], cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* locked */ Gio.DBusProxy[] | null ]
    /**
     * Lookup a secret value in the secret service.
     * 
     * The `attributes` should be a set of key and value string pairs.
     * 
     * If `service` is NULL, then secret_service_get() will be called to get
     * the default #SecretService proxy.
     * 
     * This method will return immediately and complete asynchronously.
     * @param schema the schema for the attributes
     * @param attributes the attribute keys and values
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    lookup(schema: Secret.Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finish asynchronous operation to lookup a secret value in the secret service.
     * 
     * If no secret is found then %NULL is returned.
     * @param result the asynchronous result passed to the callback
     * @returns a newly allocated #SecretValue, which should be released with secret_value_unref(), or %NULL if no secret found
     */
    lookup_finish(result: Gio.AsyncResult): Value
    /**
     * Lookup a secret value in the secret service.
     * 
     * The `attributes` should be a set of key and value string pairs.
     * 
     * If `service` is NULL, then secret_service_get_sync() will be called to get
     * the default #SecretService proxy.
     * 
     * This method may block indefinitely and should not be used in user interface
     * threads.
     * @param schema the schema for the attributes
     * @param attributes the attribute keys and values
     * @param cancellable optional cancellation object
     * @returns a newly allocated #SecretValue, which should be released with secret_value_unref(), or %NULL if no secret found
     */
    lookup_sync(schema: Secret.Schema | null, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null): Value
    /**
     * Perform prompting for a #SecretPrompt.
     * 
     * This function is called by other parts of this library to handle prompts
     * for the various actions that can require prompting.
     * 
     * Override the #SecretServiceClass <literal>prompt_async</literal> virtual method
     * to change the behavior of the propmting. The default behavior is to simply
     * run secret_prompt_perform() on the prompt.
     * @param prompt the prompt
     * @param return_type the variant type of the prompt result
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    prompt(prompt: Prompt, return_type: GLib.VariantType | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Perform prompting for a #SecretPrompt.
     * 
     * This function is called by other parts of this library to handle prompts
     * for the various actions that can require prompting.
     * 
     * Override the #SecretServiceClass <literal>prompt_async</literal> virtual method
     * to change the behavior of the propmting. The default behavior is to simply
     * run secret_prompt_perform() on the prompt.
     * @param prompt_path the D-Bus object path of the prompt
     * @param return_type the variant type of the prompt result
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    prompt_at_dbus_path(prompt_path: string | null, return_type: GLib.VariantType | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Complete asynchronous operation to perform prompting for a #SecretPrompt.
     * 
     * Returns a variant result if the prompt was completed and not dismissed. The
     * type of result depends on the action the prompt is completing, and is defined
     * in the Secret Service DBus API specification.
     * @param result the asynchronous result passed to the callback
     * @returns %NULL if the prompt was dismissed or an error occurred, a variant result if the prompt was successful
     */
    prompt_at_dbus_path_finish(result: Gio.AsyncResult): GLib.Variant
    prompt_at_dbus_path_sync(prompt_path: string | null, cancellable: Gio.Cancellable | null, return_type: GLib.VariantType): GLib.Variant
    /**
     * Complete asynchronous operation to perform prompting for a #SecretPrompt.
     * 
     * Returns a variant result if the prompt was completed and not dismissed. The
     * type of result depends on the action the prompt is completing, and is defined
     * in the Secret Service DBus API specification.
     * @param result the asynchronous result passed to the callback
     * @returns %NULL if the prompt was dismissed or an error occurred, a variant result if the prompt was successful
     */
    prompt_finish(result: Gio.AsyncResult): GLib.Variant
    /**
     * Perform prompting for a #SecretPrompt.
     * 
     * Runs a prompt and performs the prompting. Returns a variant result if the
     * prompt was completed and not dismissed. The type of result depends on the
     * action the prompt is completing, and is defined in the Secret Service DBus
     * API specification.
     * 
     * This function is called by other parts of this library to handle prompts
     * for the various actions that can require prompting.
     * 
     * Override the #SecretServiceClass <literal>prompt_sync</literal> virtual method
     * to change the behavior of the propmting. The default behavior is to simply
     * run secret_prompt_perform_sync() on the prompt.
     * @param prompt the prompt
     * @param cancellable optional cancellation object
     * @param return_type the variant type of the prompt result
     * @returns %NULL if the prompt was dismissed or an error occurred, a variant result if the prompt was successful
     */
    prompt_sync(prompt: Prompt, cancellable: Gio.Cancellable | null, return_type: GLib.VariantType): GLib.Variant
    /**
     * Lookup which collection is assigned to this alias. Aliases help determine
     * well known collections, such as 'default'. This method looks up the
     * dbus object path of the well known collection.
     * 
     * This method will return immediately and complete asynchronously.
     * @param alias the alias to lookup
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    read_alias_dbus_path(alias: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finish an asynchronous operation to lookup which collection is assigned
     * to an alias. This method returns the DBus object path of the collection
     * @param result asynchronous result passed to callback
     * @returns the collection dbus object path, or %NULL if none assigned to the alias
     */
    read_alias_dbus_path_finish(result: Gio.AsyncResult): string | null
    /**
     * Lookup which collection is assigned to this alias. Aliases help determine
     * well known collections, such as 'default'. This method returns the dbus
     * object path of the collection.
     * 
     * This method may block and should not be used in user interface threads.
     * @param alias the alias to lookup
     * @param cancellable optional cancellation object
     * @returns the collection dbus object path, or %NULL if none assigned to the alias
     */
    read_alias_dbus_path_sync(alias: string | null, cancellable?: Gio.Cancellable | null): string | null
    /**
     * Search for items matching the `attributes`. All collections are searched.
     * The `attributes` should be a table of string keys and string values.
     * 
     * If `service` is NULL, then secret_service_get() will be called to get
     * the default #SecretService proxy.
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
     * their secret values loaded and available via secret_item_get_secret().
     * 
     * This function returns immediately and completes asynchronously.
     * @param schema the schema for the attributes
     * @param attributes search for items matching these attributes
     * @param flags search option flags
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    search(schema: Secret.Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Complete asynchronous operation to search for items.
     * @param result asynchronous result passed to callback
     * @returns a list of items that matched the search
     */
    search_finish(result: Gio.AsyncResult): Item[]
    /**
     * Search for items matching the `attributes,` and return their D-Bus object paths.
     * All collections are searched. The `attributes` should be a table of string keys
     * and string values.
     * 
     * This function returns immediately and completes asynchronously.
     * 
     * When your callback is called use secret_service_search_for_dbus_paths_finish()
     * to get the results of this function. Only the D-Bus object paths of the
     * items will be returned. If you would like #SecretItem objects to be returned
     * instead, then use the secret_service_search() function.
     * @param schema the schema for the attributes
     * @param attributes search for items matching these attributes
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    search_for_dbus_paths(schema: Secret.Schema | null, attributes: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Complete asynchronous operation to search for items, and return their
     * D-Bus object paths.
     * 
     * Matching items that are locked or unlocked, have their D-Bus paths placed
     * in the `locked` or `unlocked` arrays respectively.
     * 
     * D-Bus object paths of the items will be returned in the `unlocked` or
     * `locked` arrays. If you would to have #SecretItem objects to be returned
     * instead, then us the secret_service_search() and
     * secret_service_search_finish() functions.
     * @param result asynchronous result passed to callback
     * @returns whether the search was successful or not
     */
    search_for_dbus_paths_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* unlocked */ string[] | null, /* locked */ string[] | null ]
    /**
     * Search for items matching the `attributes,` and return their D-Bus object
     * paths. All collections are searched. The `attributes` should be a table of
     * string keys and string values.
     * 
     * This function may block indefinetely. Use the asynchronous version
     * in user interface threads.
     * 
     * Matching items that are locked or unlocked, have their D-Bus paths placed
     * in the `locked` or `unlocked` arrays respectively.
     * 
     * D-Bus object paths of the items will be returned in the `unlocked` or
     * `locked` arrays. If you would to have #SecretItem objects to be returned
     * instead, then use the secret_service_search_sync() function.
     * @param schema the schema for the attributes
     * @param attributes search for items matching these attributes
     * @param cancellable optional cancellation object
     * @returns whether the search was successful or not
     */
    search_for_dbus_paths_sync(schema: Secret.Schema | null, attributes: GLib.HashTable, cancellable?: Gio.Cancellable | null): [ /* returnType */ boolean, /* unlocked */ string[] | null, /* locked */ string[] | null ]
    /**
     * Search for items matching the `attributes`. All collections are searched.
     * The `attributes` should be a table of string keys and string values.
     * 
     * If `service` is NULL, then secret_service_get_sync() will be called to get
     * the default #SecretService proxy.
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
     * are available via secret_item_get_secret(). If the load of a secret values
     * fail, then the
     * 
     * This function may block indefinetely. Use the asynchronous version
     * in user interface threads.
     * @param schema the schema for the attributes
     * @param attributes search for items matching these attributes
     * @param flags search option flags
     * @param cancellable optional cancellation object
     * @returns a list of items that matched the search
     */
    search_sync(schema: Secret.Schema | null, attributes: GLib.HashTable, flags: SearchFlags, cancellable?: Gio.Cancellable | null): Item[]
    /**
     * Assign a collection to this alias. Aliases help determine
     * well known collections, such as 'default'.
     * 
     * If `service` is NULL, then secret_service_get() will be called to get
     * the default #SecretService proxy.
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
     * If `service` is NULL, then secret_service_get_sync() will be called to get
     * the default #SecretService proxy.
     * 
     * This method may block and should not be used in user interface threads.
     * @param alias the alias to assign the collection to
     * @param collection the collection to assign to the alias
     * @param cancellable optional cancellation object
     * @returns %TRUE if successful
     */
    set_alias_sync(alias: string | null, collection?: Collection | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Assign a collection to this alias. Aliases help determine
     * well known collections, such as 'default'. This method takes the dbus object
     * path of the collection to assign to the alias.
     * 
     * This method will return immediately and complete asynchronously.
     * @param alias the alias to assign the collection to
     * @param collection_path the dbus object path of the collection to assign to the alias
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    set_alias_to_dbus_path(alias: string | null, collection_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finish an asynchronous operation to assign a collection to an alias.
     * @param result asynchronous result passed to callback
     * @returns %TRUE if successful
     */
    set_alias_to_dbus_path_finish(result: Gio.AsyncResult): boolean
    /**
     * Assign a collection to this alias. Aliases help determine
     * well known collections, such as 'default'. This method takes the dbus object
     * path of the collection to assign to the alias.
     * 
     * This method may block and should not be used in user interface threads.
     * @param alias the alias to assign the collection to
     * @param collection_path the dbus object path of the collection to assign to the alias
     * @param cancellable optional cancellation object
     * @returns %TRUE if successful
     */
    set_alias_to_dbus_path_sync(alias: string | null, collection_path?: string | null, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Store a secret value in the secret service.
     * 
     * The `attributes` should be a set of key and value string pairs.
     * 
     * If the attributes match a secret item already stored in the collection, then
     * the item will be updated with these new values.
     * 
     * If `service` is NULL, then secret_service_get() will be called to get
     * the default #SecretService proxy.
     * 
     * If `collection` is not specified, then the default collection will be
     * used. Use #SECRET_COLLECTION_SESSION to store the password in the session
     * collection, which doesn't get stored across login sessions.
     * 
     * This method will return immediately and complete asynchronously.
     * @param schema the schema to use to check attributes
     * @param attributes the attribute keys and values
     * @param collection a collection alias, or D-Bus object path of the collection where to store the secret
     * @param label label for the secret
     * @param value the secret value
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    store(schema: Secret.Schema | null, attributes: GLib.HashTable, collection: string | null, label: string | null, value: Value, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
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
     * used. Use #SECRET_COLLECTION_SESSION to store the password in the session
     * collection, which doesn't get stored across login sessions.
     * 
     * If `service` is NULL, then secret_service_get_sync() will be called to get
     * the default #SecretService proxy.
     * 
     * This method may block indefinitely and should not be used in user interface
     * threads.
     * @param schema the schema for the attributes
     * @param attributes the attribute keys and values
     * @param collection a collection alias, or D-Bus object path of the collection where to store the secret
     * @param label label for the secret
     * @param value the secret value
     * @param cancellable optional cancellation object
     * @returns whether the storage was successful or not
     */
    store_sync(schema: Secret.Schema | null, attributes: GLib.HashTable, collection: string | null, label: string | null, value: Value, cancellable?: Gio.Cancellable | null): boolean
    /**
     * Unlock items or collections in the secret service.
     * 
     * The secret service may not be able to unlock items individually, and may
     * unlock an entire collection instead.
     * 
     * If `service` is NULL, then secret_service_get() will be called to get
     * the default #SecretService proxy.
     * 
     * This method may block indefinitely and should not be used in user
     * interface threads. The secret service may prompt the user.
     * secret_service_prompt() will be used to handle any prompts that show up.
     * @param objects the items or collections to unlock
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    unlock(objects: Gio.DBusProxy[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Unlock items or collections in the secret service.
     * 
     * The items or collections are represented by their D-Bus object paths. If you
     * already have #SecretItem and #SecretCollection proxy objects, use use
     * secret_service_unlock() instead.
     * 
     * The secret service may not be able to unlock items individually, and may
     * unlock an entire collection instead.
     * 
     * This method returns immediately and completes asynchronously. The secret
     * service may prompt the user. secret_service_prompt() will be used to handle
     * any prompts that show up.
     * @param paths the D-Bus paths for items or collections to unlock
     * @param cancellable optional cancellation object
     * @param callback called when the operation completes
     */
    unlock_dbus_paths(paths: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Complete asynchronous operation to unlock items or collections in the secret
     * service.
     * 
     * The secret service may not be able to unlock items individually, and may
     * unlock an entire collection instead.
     * @param result asynchronous result passed to the callback
     * @returns the number of items or collections that were unlocked
     */
    unlock_dbus_paths_finish(result: Gio.AsyncResult): [ /* returnType */ number, /* unlocked */ string[] | null ]
    /**
     * Unlock items or collections in the secret service.
     * 
     * The items or collections are represented by their D-Bus object paths. If you
     * already have #SecretItem and #SecretCollection proxy objects, use use
     * secret_service_unlock_sync() instead.
     * 
     * The secret service may not be able to unlock items individually, and may
     * unlock an entire collection instead.
     * 
     * This method may block indefinitely and should not be used in user
     * interface threads. The secret service may prompt the user.
     * secret_service_prompt() will be used to handle any prompts that show up.
     * @param paths the D-Bus object paths of the items or collections to unlock
     * @param cancellable optional cancellation object
     * @returns the number of items or collections that were unlocked
     */
    unlock_dbus_paths_sync(paths: string | null, cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* unlocked */ string[] | null ]
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
     * If `service` is NULL, then secret_service_get_sync() will be called to get
     * the default #SecretService proxy.
     * 
     * This method may block indefinitely and should not be used in user
     * interface threads. The secret service may prompt the user.
     * secret_service_prompt() will be used to handle any prompts that show up.
     * @param objects the items or collections to unlock
     * @param cancellable optional cancellation object
     * @returns the number of items or collections that were unlocked
     */
    unlock_sync(objects: Gio.DBusProxy[], cancellable?: Gio.Cancellable | null): [ /* returnType */ number, /* unlocked */ Gio.DBusProxy[] | null ]

    // Own virtual methods of SecretUnstable-0.SecretUnstable.Service

    /**
     * Get the GObject type for collections instantiated by this service.
     * This will always be either #SecretCollection or derived from it.
     * @virtual 
     * @returns the gobject type for collections
     */
    vfunc_get_collection_gtype(): GObject.GType
    /**
     * Get the GObject type for items instantiated by this collection.
     * This will always be either #SecretItem or derived from it.
     * @virtual 
     * @returns the gobject type for items
     */
    vfunc_get_item_gtype(): GObject.GType
    vfunc_prompt_async(prompt: Prompt, return_type: GLib.VariantType, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Complete asynchronous operation to perform prompting for a #SecretPrompt.
     * 
     * Returns a variant result if the prompt was completed and not dismissed. The
     * type of result depends on the action the prompt is completing, and is defined
     * in the Secret Service DBus API specification.
     * @virtual 
     * @param result the asynchronous result passed to the callback
     * @returns %NULL if the prompt was dismissed or an error occurred, a variant result if the prompt was successful
     */
    vfunc_prompt_finish(result: Gio.AsyncResult): GLib.Variant
    /**
     * Perform prompting for a #SecretPrompt.
     * 
     * Runs a prompt and performs the prompting. Returns a variant result if the
     * prompt was completed and not dismissed. The type of result depends on the
     * action the prompt is completing, and is defined in the Secret Service DBus
     * API specification.
     * 
     * This function is called by other parts of this library to handle prompts
     * for the various actions that can require prompting.
     * 
     * Override the #SecretServiceClass <literal>prompt_sync</literal> virtual method
     * to change the behavior of the propmting. The default behavior is to simply
     * run secret_prompt_perform_sync() on the prompt.
     * @virtual 
     * @param prompt the prompt
     * @param cancellable optional cancellation object
     * @param return_type the variant type of the prompt result
     * @returns %NULL if the prompt was dismissed or an error occurred, a variant result if the prompt was successful
     */
    vfunc_prompt_sync(prompt: Prompt, cancellable: Gio.Cancellable | null, return_type: GLib.VariantType): GLib.Variant

    // Class property signals of SecretUnstable-0.SecretUnstable.Service

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A proxy object representing the Secret Service.
 * @class 
 */
export class Service extends Gio.DBusProxy {

    // Own properties of SecretUnstable-0.SecretUnstable.Service

    static name: string
    static $gtype: GObject.GType<Service>

    // Constructors of SecretUnstable-0.SecretUnstable.Service

    constructor(config?: Service.ConstructorProperties) 
    _init(config?: Service.ConstructorProperties): void
    /**
     * Disconnect the default #SecretService proxy returned by secret_service_get()
     * and secret_service_get_sync().
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
     * Get a #SecretService proxy for the Secret Service. If such a proxy object
     * already exists, then the same proxy is returned.
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
    /**
     * Complete an asynchronous operation to get a #SecretService proxy for the
     * Secret Service.
     * @param result the asynchronous result passed to the callback
     * @returns a new reference to a #SecretService proxy, which should be released with g_object_unref().
     */
    static get_finish(result: Gio.AsyncResult): Service
    /**
     * Get a #SecretService proxy for the Secret Service. If such a proxy object
     * already exists, then the same proxy is returned.
     * 
     * If `flags` contains any flags of which parts of the secret service to
     * ensure are initialized, then those will be initialized before returning.
     * 
     * This method may block indefinitely and should not be used in user interface
     * threads.
     * @param flags flags for which service functionality to ensure is initialized
     * @param cancellable optional cancellation object
     * @returns a new reference to a #SecretService proxy, which should be released with g_object_unref().
     */
    static get_sync(flags: ServiceFlags, cancellable?: Gio.Cancellable | null): Service
    /**
     * Create a new #SecretService proxy for the Secret Service.
     * 
     * This function is rarely used, see secret_service_get() instead.
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
     * @returns a new reference to a #SecretService proxy, which should be released with g_object_unref().
     */
    static open_finish(result: Gio.AsyncResult): Service
    /**
     * Create a new #SecretService proxy for the Secret Service.
     * 
     * This function is rarely used, see secret_service_get_sync() instead.
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
     * @returns a new reference to a #SecretService proxy, which should be released with g_object_unref().
     */
    static open_sync(service_gtype: GObject.GType, service_bus_name: string | null, flags: ServiceFlags, cancellable?: Gio.Cancellable | null): Service
}

export interface CollectionClass {

    // Own fields of SecretUnstable-0.SecretUnstable.CollectionClass

    parent_class: Gio.DBusProxyClass
}

/**
 * The class for #SecretCollection.
 * @record 
 */
export abstract class CollectionClass {

    // Own properties of SecretUnstable-0.SecretUnstable.CollectionClass

    static name: string
}

export interface CollectionPrivate {
}

export class CollectionPrivate {

    // Own properties of SecretUnstable-0.SecretUnstable.CollectionPrivate

    static name: string
}

export interface ItemClass {

    // Own fields of SecretUnstable-0.SecretUnstable.ItemClass

    parent_class: Gio.DBusProxyClass
}

/**
 * The class for #SecretItem.
 * @record 
 */
export abstract class ItemClass {

    // Own properties of SecretUnstable-0.SecretUnstable.ItemClass

    static name: string
}

export interface ItemPrivate {
}

export class ItemPrivate {

    // Own properties of SecretUnstable-0.SecretUnstable.ItemPrivate

    static name: string
}

export interface PromptClass {

    // Own fields of SecretUnstable-0.SecretUnstable.PromptClass

    parent_class: Gio.DBusProxyClass
}

/**
 * The class for #SecretPrompt.
 * @record 
 */
export abstract class PromptClass {

    // Own properties of SecretUnstable-0.SecretUnstable.PromptClass

    static name: string
}

export interface PromptPrivate {
}

export class PromptPrivate {

    // Own properties of SecretUnstable-0.SecretUnstable.PromptPrivate

    static name: string
}

export interface ServiceClass {

    // Own fields of SecretUnstable-0.SecretUnstable.ServiceClass

    parent_class: Gio.DBusProxyClass
    collection_gtype: GObject.GType
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

    // Own properties of SecretUnstable-0.SecretUnstable.ServiceClass

    static name: string
}

export interface ServicePrivate {
}

export class ServicePrivate {

    // Own properties of SecretUnstable-0.SecretUnstable.ServicePrivate

    static name: string
}

export interface Value {

    // Owm methods of SecretUnstable-0.SecretUnstable.Value

    /**
     * Get the secret data in the #SecretValue. The value is not necessarily
     * null-terminated unless it was created with secret_value_new() or a
     * null-terminated string was passed to secret_value_new_full().
     * @returns the secret data
     */
    get(): Uint8Array
    /**
     * Get the content type of the secret value, such as
     * <literal>text/plain</literal>.
     * @returns the content type
     */
    get_content_type(): string | null
    /**
     * Get the secret data in the #SecretValue if it contains a textual
     * value. The content type must be <literal>text/plain</literal>.
     * @returns the content type
     */
    get_text(): string | null
    /**
     * Add another reference to the #SecretValue. For each reference
     * secret_value_unref() should be called to unreference the value.
     * @returns the value
     */
    ref(): Value
    /**
     * Unreference a #SecretValue. When the last reference is gone, then
     * the value will be freed.
     */
    unref(): void
}

/**
 * A secret value, like a password or other binary secret.
 * @record 
 */
export class Value {

    // Own properties of SecretUnstable-0.SecretUnstable.Value

    static name: string

    // Constructors of SecretUnstable-0.SecretUnstable.Value

    /**
     * Create a #SecretValue for the secret data passed in. The secret data is
     * copied into non-pageable 'secure' memory.
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
     * Create a #SecretValue for the secret data passed in. The secret data is
     * copied into non-pageable 'secure' memory.
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
     * Create a #SecretValue for the secret data passed in. The secret data is
     * not copied, and will later be freed with the `destroy` function.
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