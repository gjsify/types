/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type Secret from '@girs/secret-1';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace SecretUnstable {
    /**
     * SecretUnstable-0
     */

    /**
     * Flags for secret_collection_create().
     */

    /**
     * Flags for secret_collection_create().
     */
    export namespace CollectionCreateFlags {
        export const $gtype: GObject.GType<CollectionCreateFlags>;
    }

    enum CollectionCreateFlags {
        /**
         * no flags
         */
        COLLECTION_CREATE_NONE,
    }
    /**
     * Flags which determine which parts of the #SecretCollection proxy are initialized.
     */

    /**
     * Flags which determine which parts of the #SecretCollection proxy are initialized.
     */
    export namespace CollectionFlags {
        export const $gtype: GObject.GType<CollectionFlags>;
    }

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
     * Flags for secret_item_create().
     */

    /**
     * Flags for secret_item_create().
     */
    export namespace ItemCreateFlags {
        export const $gtype: GObject.GType<ItemCreateFlags>;
    }

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

    /**
     * Flags which determine which parts of the #SecretItem proxy are initialized.
     */
    export namespace ItemFlags {
        export const $gtype: GObject.GType<ItemFlags>;
    }

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
     * Various flags to be used with secret_service_search() and secret_service_search_sync().
     */

    /**
     * Various flags to be used with secret_service_search() and secret_service_search_sync().
     */
    export namespace SearchFlags {
        export const $gtype: GObject.GType<SearchFlags>;
    }

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
     * during a secret_service_get() or secret_service_open() operation.
     */

    /**
     * Flags which determine which parts of the #SecretService proxy are initialized
     * during a secret_service_get() or secret_service_open() operation.
     */
    export namespace ServiceFlags {
        export const $gtype: GObject.GType<ServiceFlags>;
    }

    enum ServiceFlags {
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
    module Collection {
        // Constructor properties interface

        interface ConstructorProps
            extends Gio.DBusProxy.ConstructorProps,
                Gio.AsyncInitable.ConstructorProps,
                Gio.DBusInterface.ConstructorProps,
                Gio.Initable.ConstructorProps {
            created: number;
            label: string;
            locked: boolean;
            modified: number;
            service: Service;
        }
    }

    /**
     * A proxy object representing a collection of secrets in the Secret Service.
     */
    class Collection extends Gio.DBusProxy implements Gio.AsyncInitable<Collection>, Gio.DBusInterface, Gio.Initable {
        static $gtype: GObject.GType<Collection>;

        // Own properties of SecretUnstable.Collection

        /**
         * The date and time (in seconds since the UNIX epoch) that this
         * collection was created.
         */
        get created(): number;
        set created(val: number);
        /**
         * The human readable label for the collection.
         *
         * Setting this property will result in the label of the collection being
         * set asynchronously. To properly track the changing of the label use the
         * secret_collection_set_label() function.
         */
        get label(): string;
        set label(val: string);
        /**
         * Whether the collection is locked or not.
         *
         * To lock or unlock a collection use the secret_service_lock() or
         * secret_service_unlock() functions.
         */
        get locked(): boolean;
        /**
         * The date and time (in seconds since the UNIX epoch) that this
         * collection was last modified.
         */
        get modified(): number;
        set modified(val: number);
        /**
         * The #SecretService object that this collection is associated with and
         * uses to interact with the actual D-Bus Secret Service.
         */
        get service(): Service;

        // Constructors of SecretUnstable.Collection

        constructor(properties?: Partial<Collection.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_for_dbus_path_finish(result: Gio.AsyncResult): Collection;

        static new_for_dbus_path_sync(
            service: Service,
            collection_path: string,
            flags: CollectionFlags,
            cancellable: Gio.Cancellable,
        ): Collection;

        // Own static methods of SecretUnstable.Collection

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
        static create(
            service: Service,
            label: string,
            alias: string,
            flags: CollectionCreateFlags,
            cancellable: Gio.Cancellable,
            callback: Gio.AsyncReadyCallback<Collection>,
        ): void;
        /**
         * Finish operation to create a new collection in the secret service.
         * @param result the asynchronous result passed to the callback
         */
        static create_finish(result: Gio.AsyncResult): Collection;
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
         */
        static create_sync(
            service: Service,
            label: string,
            alias: string,
            flags: CollectionCreateFlags,
            cancellable: Gio.Cancellable,
        ): Collection;
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
        static for_alias(
            service: Service,
            alias: string,
            flags: CollectionFlags,
            cancellable: Gio.Cancellable,
            callback: Gio.AsyncReadyCallback<Collection>,
        ): void;
        /**
         * Finish an asynchronous operation to lookup which collection is assigned
         * to an alias.
         * @param result asynchronous result passed to callback
         */
        static for_alias_finish(result: Gio.AsyncResult): Collection;
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
         */
        static for_alias_sync(
            service: Service,
            alias: string,
            flags: CollectionFlags,
            cancellable: Gio.Cancellable,
        ): Collection;
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
        static new_for_dbus_path(
            service: Service,
            collection_path: string,
            flags: CollectionFlags,
            cancellable: Gio.Cancellable,
            callback: Gio.AsyncReadyCallback<Collection>,
        ): void;

        // Own methods of SecretUnstable.Collection

        /**
         * Delete this collection.
         *
         * This method returns immediately and completes asynchronously. The secret
         * service may prompt the user. secret_service_prompt() will be used to handle
         * any prompts that show up.
         * @param cancellable optional cancellation object
         * @param callback called when the operation completes
         */
        ['delete'](cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback<this>): void;
        /**
         * Complete operation to delete this collection.
         * @param result asynchronous result passed to the callback
         * @returns whether the collection was successfully deleted or not
         */
        delete_finish(result: Gio.AsyncResult): boolean;
        /**
         * Delete this collection.
         *
         * This method may block indefinitely and should not be used in user
         * interface threads. The secret service may prompt the user.
         * secret_service_prompt() will be used to handle any prompts that show up.
         * @param cancellable optional cancellation object
         * @returns whether the collection was successfully deleted or not
         */
        delete_sync(cancellable: Gio.Cancellable): boolean;
        /**
         * Get the created date and time of the collection. The return value is
         * the number of seconds since the unix epoch, January 1st 1970.
         * @returns the created date and time
         */
        get_created(): number;
        /**
         * Get the flags representing what features of the #SecretCollection proxy
         * have been initialized.
         *
         * Use secret_collection_load_items()  to initialize further features
         * and change the flags.
         * @returns the flags for features initialized
         */
        get_flags(): CollectionFlags;
        // Conflicted with Gio.DBusProxy.get_flags
        get_flags(...args: never[]): any;
        /**
         * Get the list of items in this collection.
         * @returns a list of items, when done, the list should be freed with g_list_free, and each item should be released with g_object_unref()
         */
        get_items(): Item[];
        /**
         * Get the label of this collection.
         * @returns the label, which should be freed with g_free()
         */
        get_label(): string;
        /**
         * Get whether the collection is locked or not.
         *
         * Use secret_service_lock() or secret_service_unlock() to lock or unlock the
         * collection.
         * @returns whether the collection is locked or not
         */
        get_locked(): boolean;
        /**
         * Get the modified date and time of the collection. The return value is
         * the number of seconds since the unix epoch, January 1st 1970.
         * @returns the modified date and time
         */
        get_modified(): number;
        /**
         * Get the Secret Service object that this collection was created with.
         * @returns the Secret Service object
         */
        get_service(): Service;
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
        load_items(cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback<this>): void;
        /**
         * Complete an asynchronous operation to ensure that the #SecretCollection proxy
         * has loaded all the items present in the Secret Service.
         * @param result the asynchronous result passed to the callback
         * @returns whether the load was successful or not
         */
        load_items_finish(result: Gio.AsyncResult): boolean;
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
        load_items_sync(cancellable: Gio.Cancellable): boolean;
        /**
         * Refresh the properties on this collection. This fires off a request to
         * refresh, and the properties will be updated later.
         *
         * Calling this method is not normally necessary, as the secret service
         * will notify the client when properties change.
         */
        refresh(): void;
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
        search(
            schema: Secret.Schema,
            attributes: { [key: string]: any } | GLib.HashTable<string, string>,
            flags: SearchFlags,
            cancellable: Gio.Cancellable,
            callback: Gio.AsyncReadyCallback<this>,
        ): void;
        /**
         * Complete asynchronous operation to search for items in a collection.
         * @param result asynchronous result passed to callback
         * @returns a list of items that matched the search
         */
        search_finish(result: Gio.AsyncResult): Item[];
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
        search_for_dbus_paths(
            schema: Secret.Schema,
            attributes: { [key: string]: any } | GLib.HashTable<string, string>,
            cancellable: Gio.Cancellable,
            callback: Gio.AsyncReadyCallback<this>,
        ): void;
        /**
         * Complete asynchronous operation to search for items in a collection.
         *
         * DBus object paths of the items will be returned. If you would to have
         * #SecretItem objects to be returned instead, then use the
         * secret_collection_search() and secret_collection_search_finish() functions.
         * @param result asynchronous result passed to callback
         * @returns an array of DBus object paths for matching items.
         */
        search_for_dbus_paths_finish(result: Gio.AsyncResult): string[];
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
        search_for_dbus_paths_sync(
            schema: Secret.Schema,
            attributes: { [key: string]: any } | GLib.HashTable<string, string>,
            cancellable: Gio.Cancellable,
        ): string[];
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
        search_sync(
            schema: Secret.Schema,
            attributes: { [key: string]: any } | GLib.HashTable<string, string>,
            flags: SearchFlags,
            cancellable: Gio.Cancellable,
        ): Item[];
        /**
         * Set the label of this collection.
         *
         * This function returns immediately and completes asynchronously.
         * @param label a new label
         * @param cancellable optional cancellation object
         * @param callback called when the operation completes
         */
        set_label(label: string, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback<this>): void;
        /**
         * Complete asynchronous operation to set the label of this collection.
         * @param result asynchronous result passed to callback
         * @returns whether the change was successful or not
         */
        set_label_finish(result: Gio.AsyncResult): boolean;
        /**
         * Set the label of this collection.
         *
         * This function may block indefinetely. Use the asynchronous version
         * in user interface threads.
         * @param label a new label
         * @param cancellable optional cancellation object
         * @returns whether the change was successful or not
         */
        set_label_sync(label: string, cancellable: Gio.Cancellable): boolean;

        // Inherited methods
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
        init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See g_async_initable_init_async().
         * @param res a #GAsyncResult.
         * @returns %TRUE if successful. If an error has occurred, this function will return %FALSE and set @error appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;
        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or %NULL on error.
         * @param res the #GAsyncResult from the callback
         * @returns a newly created #GObject,      or %NULL on error. Free with g_object_unref().
         */
        new_finish(res: Gio.AsyncResult): Collection;
        // Conflicted with Gio.DBusProxy.new_finish
        new_finish(...args: never[]): any;
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
        vfunc_init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See g_async_initable_init_async().
         * @param res a #GAsyncResult.
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        /**
         * Gets the #GDBusObject that `interface_` belongs to, if any.
         * @returns A #GDBusObject or %NULL. The returned reference should be freed with g_object_unref().
         */
        get_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A #GDBusInterfaceInfo. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the #GDBusObject for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A #GDBusObject or %NULL.
         */
        set_object(object?: Gio.DBusObject | null): void;
        /**
         * Gets the #GDBusObject that `interface_` belongs to, if any.
         */
        vfunc_dup_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the #GDBusObject for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A #GDBusObject or %NULL.
         */
        vfunc_set_object(object?: Gio.DBusObject | null): void;
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
         * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
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
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
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
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
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
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
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
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
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
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
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
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
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
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module Item {
        // Constructor properties interface

        interface ConstructorProps
            extends Gio.DBusProxy.ConstructorProps,
                Gio.AsyncInitable.ConstructorProps,
                Gio.DBusInterface.ConstructorProps,
                Gio.Initable.ConstructorProps {
            attributes: GLib.HashTable<string, string>;
            created: number;
            label: string;
            locked: boolean;
            modified: number;
            service: Service;
        }
    }

    /**
     * A proxy object representing a secret item in the Secret Service.
     */
    class Item extends Gio.DBusProxy implements Gio.AsyncInitable<Item>, Gio.DBusInterface, Gio.Initable {
        static $gtype: GObject.GType<Item>;

        // Own properties of SecretUnstable.Item

        /**
         * The attributes set on this item. Attributes are used to locate an
         * item. They are not guaranteed to be stored or transferred securely.
         */
        get attributes(): GLib.HashTable<string, string>;
        set attributes(val: GLib.HashTable<string, string>);
        /**
         * The date and time (in seconds since the UNIX epoch) that this
         * item was created.
         */
        get created(): number;
        set created(val: number);
        /**
         * The human readable label for the item.
         *
         * Setting this property will result in the label of the item being
         * set asynchronously. To properly track the changing of the label use the
         * secret_item_set_label() function.
         */
        get label(): string;
        set label(val: string);
        /**
         * Whether the item is locked or not. An item may not be independently
         * lockable separate from other items in its collection.
         *
         * To lock or unlock a item use the secret_service_lock() or
         * secret_service_unlock() functions.
         */
        get locked(): boolean;
        /**
         * The date and time (in seconds since the UNIX epoch) that this
         * item was last modified.
         */
        get modified(): number;
        set modified(val: number);
        /**
         * The #SecretService object that this item is associated with and
         * uses to interact with the actual D-Bus Secret Service.
         */
        get service(): Service;

        // Constructors of SecretUnstable.Item

        constructor(properties?: Partial<Item.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_for_dbus_path_finish(result: Gio.AsyncResult): Item;

        static new_for_dbus_path_sync(
            service: Service,
            item_path: string,
            flags: ItemFlags,
            cancellable: Gio.Cancellable,
        ): Item;

        // Own static methods of SecretUnstable.Item

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
        static create(
            collection: Collection,
            schema: Secret.Schema,
            attributes: { [key: string]: any } | GLib.HashTable<string, string>,
            label: string,
            value: Value,
            flags: ItemCreateFlags,
            cancellable: Gio.Cancellable,
            callback: Gio.AsyncReadyCallback<Item>,
        ): void;
        /**
         * Finish operation to create a new item in the secret service.
         * @param result the asynchronous result passed to the callback
         */
        static create_finish(result: Gio.AsyncResult): Item;
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
         */
        static create_sync(
            collection: Collection,
            schema: Secret.Schema,
            attributes: { [key: string]: any } | GLib.HashTable<string, string>,
            label: string,
            value: Value,
            flags: ItemCreateFlags,
            cancellable: Gio.Cancellable,
        ): Item;
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
        static load_secrets(items: Item[], cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback<Item>): void;
        /**
         * Complete asynchronous operation to load the secret values for
         * secret items stored in the service.
         *
         * Items that are locked will not have their secrets loaded.
         * @param result asynchronous result passed to callback
         */
        static load_secrets_finish(result: Gio.AsyncResult): boolean;
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
         */
        static load_secrets_sync(items: Item[], cancellable: Gio.Cancellable): boolean;
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
        static new_for_dbus_path(
            service: Service,
            item_path: string,
            flags: ItemFlags,
            cancellable: Gio.Cancellable,
            callback: Gio.AsyncReadyCallback<Item>,
        ): void;

        // Own methods of SecretUnstable.Item

        /**
         * Delete this item.
         *
         * This method returns immediately and completes asynchronously. The secret
         * service may prompt the user. secret_service_prompt() will be used to handle
         * any prompts that show up.
         * @param cancellable optional cancellation object
         * @param callback called when the operation completes
         */
        ['delete'](cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback<this>): void;
        /**
         * Complete asynchronous operation to delete the secret item.
         * @param result asynchronous result passed to the callback
         * @returns whether the item was successfully deleted or not
         */
        delete_finish(result: Gio.AsyncResult): boolean;
        /**
         * Delete this secret item.
         *
         * This method may block indefinitely and should not be used in user
         * interface threads. The secret service may prompt the user.
         * secret_service_prompt() will be used to handle any prompts that show up.
         * @param cancellable optional cancellation object
         * @returns whether the item was successfully deleted or not
         */
        delete_sync(cancellable: Gio.Cancellable): boolean;
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
        get_attributes(): GLib.HashTable<string, string>;
        /**
         * Get the created date and time of the item. The return value is
         * the number of seconds since the unix epoch, January 1st 1970.
         * @returns the created date and time
         */
        get_created(): number;
        /**
         * Get the flags representing what features of the #SecretItem proxy
         * have been initialized.
         *
         * Use secret_item_load_secret() to initialize further features
         * and change the flags.
         * @returns the flags for features initialized
         */
        get_flags(): ItemFlags;
        // Conflicted with Gio.DBusProxy.get_flags
        get_flags(...args: never[]): any;
        /**
         * Get the label of this item.
         * @returns the label, which should be freed with g_free()
         */
        get_label(): string;
        /**
         * Get whether the item is locked or not.
         *
         * Depending on the secret service an item may not be able to be locked
         * independently from the collection that it is in.
         * @returns whether the item is locked or not
         */
        get_locked(): boolean;
        /**
         * Get the modified date and time of the item. The return value is
         * the number of seconds since the unix epoch, January 1st 1970.
         * @returns the modified date and time
         */
        get_modified(): number;
        /**
         * Gets the name of the schema that this item was stored with. This is also
         * available at the <literal>xdg:schema</literal> attribute.
         * @returns the schema name
         */
        get_schema_name(): string;
        /**
         * Get the secret value of this item. If this item is locked or the secret
         * has not yet been loaded then this will return %NULL.
         *
         * To load the secret call the secret_item_load_secret() method.
         * @returns the secret value which should be released with secret_value_unref(), or %NULL
         */
        get_secret(): Value;
        /**
         * Get the Secret Service object that this item was created with.
         * @returns the Secret Service object
         */
        get_service(): Service;
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
        load_secret(cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback<this>): void;
        /**
         * Complete asynchronous operation to load the secret value of this item.
         *
         * The newly loaded secret value can be accessed by calling
         * secret_item_get_secret().
         * @param result asynchronous result passed to callback
         * @returns whether the secret item succesfully loaded or not
         */
        load_secret_finish(result: Gio.AsyncResult): boolean;
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
        load_secret_sync(cancellable: Gio.Cancellable): boolean;
        /**
         * Refresh the properties on this item. This fires off a request to
         * refresh, and the properties will be updated later.
         *
         * Calling this method is not normally necessary, as the secret service
         * will notify the client when properties change.
         */
        refresh(): void;
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
        set_attributes(
            schema: Secret.Schema,
            attributes: { [key: string]: any } | GLib.HashTable<string, string>,
            cancellable: Gio.Cancellable,
            callback: Gio.AsyncReadyCallback<this>,
        ): void;
        /**
         * Complete operation to set the attributes of this item.
         * @param result asynchronous result passed to the callback
         * @returns whether the change was successful or not
         */
        set_attributes_finish(result: Gio.AsyncResult): boolean;
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
        set_attributes_sync(
            schema: Secret.Schema,
            attributes: { [key: string]: any } | GLib.HashTable<string, string>,
            cancellable: Gio.Cancellable,
        ): boolean;
        /**
         * Set the label of this item.
         *
         * This function returns immediately and completes asynchronously.
         * @param label a new label
         * @param cancellable optional cancellation object
         * @param callback called when the operation completes
         */
        set_label(label: string, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback<this>): void;
        /**
         * Complete asynchronous operation to set the label of this collection.
         * @param result asynchronous result passed to callback
         * @returns whether the change was successful or not
         */
        set_label_finish(result: Gio.AsyncResult): boolean;
        /**
         * Set the label of this item.
         *
         * This function may block indefinetely. Use the asynchronous version
         * in user interface threads.
         * @param label a new label
         * @param cancellable optional cancellation object
         * @returns whether the change was successful or not
         */
        set_label_sync(label: string, cancellable: Gio.Cancellable): boolean;
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
        set_secret(value: Value, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback<this>): void;
        /**
         * Complete asynchronous operation to set the secret value of this item.
         * @param result asynchronous result passed to callback
         * @returns whether the change was successful or not
         */
        set_secret_finish(result: Gio.AsyncResult): boolean;
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
        set_secret_sync(value: Value, cancellable: Gio.Cancellable): boolean;

        // Inherited methods
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
        init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See g_async_initable_init_async().
         * @param res a #GAsyncResult.
         * @returns %TRUE if successful. If an error has occurred, this function will return %FALSE and set @error appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;
        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or %NULL on error.
         * @param res the #GAsyncResult from the callback
         * @returns a newly created #GObject,      or %NULL on error. Free with g_object_unref().
         */
        new_finish(res: Gio.AsyncResult): Item;
        // Conflicted with Gio.DBusProxy.new_finish
        new_finish(...args: never[]): any;
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
        vfunc_init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See g_async_initable_init_async().
         * @param res a #GAsyncResult.
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        /**
         * Gets the #GDBusObject that `interface_` belongs to, if any.
         * @returns A #GDBusObject or %NULL. The returned reference should be freed with g_object_unref().
         */
        get_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A #GDBusInterfaceInfo. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the #GDBusObject for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A #GDBusObject or %NULL.
         */
        set_object(object?: Gio.DBusObject | null): void;
        /**
         * Gets the #GDBusObject that `interface_` belongs to, if any.
         */
        vfunc_dup_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the #GDBusObject for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A #GDBusObject or %NULL.
         */
        vfunc_set_object(object?: Gio.DBusObject | null): void;
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
         * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
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
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
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
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
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
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
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
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
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
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
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
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
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
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module Prompt {
        // Constructor properties interface

        interface ConstructorProps
            extends Gio.DBusProxy.ConstructorProps,
                Gio.AsyncInitable.ConstructorProps,
                Gio.DBusInterface.ConstructorProps,
                Gio.Initable.ConstructorProps {}
    }

    /**
     * A proxy object representing a prompt that the Secret Service will display
     * to the user.
     */
    class Prompt extends Gio.DBusProxy implements Gio.AsyncInitable<Prompt>, Gio.DBusInterface, Gio.Initable {
        static $gtype: GObject.GType<Prompt>;

        // Constructors of SecretUnstable.Prompt

        constructor(properties?: Partial<Prompt.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of SecretUnstable.Prompt

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
        perform(
            window_id: number,
            return_type: GLib.VariantType,
            cancellable: Gio.Cancellable,
            callback: Gio.AsyncReadyCallback<this>,
        ): void;
        /**
         * Complete asynchronous operation to run a prompt and perform the prompting.
         *
         * Returns a variant result if the prompt was completed and not dismissed. The
         * type of result depends on the action the prompt is completing, and is
         * defined in the Secret Service DBus API specification.
         * @param result the asynchronous result passed to the callback
         * @returns %NULL if the prompt was dismissed or an error occurred, a variant result if the prompt was successful
         */
        perform_finish(result: Gio.AsyncResult): GLib.Variant;
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
        perform_sync(window_id: number, cancellable: Gio.Cancellable, return_type: GLib.VariantType): GLib.Variant;
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
        run(window_id: number, cancellable: Gio.Cancellable, return_type: GLib.VariantType): GLib.Variant;

        // Inherited methods
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
        init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See g_async_initable_init_async().
         * @param res a #GAsyncResult.
         * @returns %TRUE if successful. If an error has occurred, this function will return %FALSE and set @error appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;
        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or %NULL on error.
         * @param res the #GAsyncResult from the callback
         * @returns a newly created #GObject,      or %NULL on error. Free with g_object_unref().
         */
        new_finish(res: Gio.AsyncResult): Prompt;
        // Conflicted with Gio.DBusProxy.new_finish
        new_finish(...args: never[]): any;
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
        vfunc_init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See g_async_initable_init_async().
         * @param res a #GAsyncResult.
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        /**
         * Gets the #GDBusObject that `interface_` belongs to, if any.
         * @returns A #GDBusObject or %NULL. The returned reference should be freed with g_object_unref().
         */
        get_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A #GDBusInterfaceInfo. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the #GDBusObject for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A #GDBusObject or %NULL.
         */
        set_object(object?: Gio.DBusObject | null): void;
        /**
         * Gets the #GDBusObject that `interface_` belongs to, if any.
         */
        vfunc_dup_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the #GDBusObject for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A #GDBusObject or %NULL.
         */
        vfunc_set_object(object?: Gio.DBusObject | null): void;
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
         * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
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
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
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
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
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
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
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
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
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
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
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
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
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
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module Service {
        // Constructor properties interface

        interface ConstructorProps
            extends Gio.DBusProxy.ConstructorProps,
                Gio.AsyncInitable.ConstructorProps,
                Gio.DBusInterface.ConstructorProps,
                Gio.Initable.ConstructorProps {}
    }

    /**
     * A proxy object representing the Secret Service.
     */
    class Service extends Gio.DBusProxy implements Gio.AsyncInitable<Service>, Gio.DBusInterface, Gio.Initable {
        static $gtype: GObject.GType<Service>;

        // Constructors of SecretUnstable.Service

        constructor(properties?: Partial<Service.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own static methods of SecretUnstable.Service

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
        static disconnect(): void;
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
        static get(flags: ServiceFlags, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback<Service>): void;
        /**
         * Complete an asynchronous operation to get a #SecretService proxy for the
         * Secret Service.
         * @param result the asynchronous result passed to the callback
         */
        static get_finish(result: Gio.AsyncResult): Service;
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
         */
        static get_sync(flags: ServiceFlags, cancellable: Gio.Cancellable): Service;
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
        static open(
            service_gtype: GObject.GType,
            service_bus_name: string,
            flags: ServiceFlags,
            cancellable: Gio.Cancellable,
            callback: Gio.AsyncReadyCallback<Service>,
        ): void;
        /**
         * Complete an asynchronous operation to create a new #SecretService proxy for
         * the Secret Service.
         * @param result the asynchronous result passed to the callback
         */
        static open_finish(result: Gio.AsyncResult): Service;
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
         */
        static open_sync(
            service_gtype: GObject.GType,
            service_bus_name: string,
            flags: ServiceFlags,
            cancellable: Gio.Cancellable,
        ): Service;

        // Own virtual methods of SecretUnstable.Service

        /**
         * Get the GObject type for collections instantiated by this service.
         * This will always be either #SecretCollection or derived from it.
         */
        vfunc_get_collection_gtype(): GObject.GType;
        /**
         * Get the GObject type for items instantiated by this collection.
         * This will always be either #SecretItem or derived from it.
         */
        vfunc_get_item_gtype(): GObject.GType;
        vfunc_prompt_async(
            prompt: Prompt,
            return_type: GLib.VariantType,
            cancellable: Gio.Cancellable,
            callback: Gio.AsyncReadyCallback<this>,
        ): void;
        /**
         * Complete asynchronous operation to perform prompting for a #SecretPrompt.
         *
         * Returns a variant result if the prompt was completed and not dismissed. The
         * type of result depends on the action the prompt is completing, and is defined
         * in the Secret Service DBus API specification.
         * @param result the asynchronous result passed to the callback
         */
        vfunc_prompt_finish(result: Gio.AsyncResult): GLib.Variant;
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
         */
        vfunc_prompt_sync(prompt: Prompt, cancellable: Gio.Cancellable, return_type: GLib.VariantType): GLib.Variant;

        // Own methods of SecretUnstable.Service

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
        clear(
            schema: Secret.Schema,
            attributes: { [key: string]: any } | GLib.HashTable<string, string>,
            cancellable: Gio.Cancellable,
            callback: Gio.AsyncReadyCallback<this>,
        ): void;
        /**
         * Finish asynchronous operation to remove items from the secret
         * service.
         * @param result the asynchronous result passed to the callback
         * @returns whether items were removed or not
         */
        clear_finish(result: Gio.AsyncResult): boolean;
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
        clear_sync(
            schema: Secret.Schema,
            attributes: { [key: string]: any } | GLib.HashTable<string, string>,
            cancellable: Gio.Cancellable,
        ): boolean;
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
        create_collection_dbus_path(
            properties: { [key: string]: any } | GLib.HashTable<string, GLib.Variant>,
            alias: string,
            flags: CollectionCreateFlags,
            cancellable: Gio.Cancellable,
            callback: Gio.AsyncReadyCallback<this>,
        ): void;
        /**
         * Finish asynchronous operation to create a new collection in the secret
         * service.
         * @param result the asynchronous result passed to the callback
         * @returns a new string containing the D-Bus object path of the collection
         */
        create_collection_dbus_path_finish(result: Gio.AsyncResult): string;
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
        create_collection_dbus_path_sync(
            properties: { [key: string]: any } | GLib.HashTable<string, GLib.Variant>,
            alias: string,
            flags: CollectionCreateFlags,
            cancellable: Gio.Cancellable,
        ): string;
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
        create_item_dbus_path(
            collection_path: string,
            properties: { [key: string]: any } | GLib.HashTable<string, GLib.Variant>,
            value: Value,
            flags: ItemCreateFlags,
            cancellable: Gio.Cancellable,
            callback: Gio.AsyncReadyCallback<this>,
        ): void;
        /**
         * Finish asynchronous operation to create a new item in the secret
         * service.
         * @param result the asynchronous result passed to the callback
         * @returns a new string containing the D-Bus object path of the item
         */
        create_item_dbus_path_finish(result: Gio.AsyncResult): string;
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
        create_item_dbus_path_sync(
            collection_path: string,
            properties: { [key: string]: any } | GLib.HashTable<string, GLib.Variant>,
            value: Value,
            flags: ItemCreateFlags,
            cancellable: Gio.Cancellable,
        ): string;
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
        delete_item_dbus_path(
            item_path: string,
            cancellable: Gio.Cancellable,
            callback: Gio.AsyncReadyCallback<this>,
        ): void;
        /**
         * Complete an asynchronous operation to delete a secret item from the secret
         * service.
         * @param result the asynchronous result passed to the callback
         * @returns whether the deletion was successful or not
         */
        delete_item_dbus_path_finish(result: Gio.AsyncResult): boolean;
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
        delete_item_dbus_path_sync(item_path: string, cancellable: Gio.Cancellable): boolean;
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
        ensure_session(cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback<this>): void;
        /**
         * Finish an asynchronous operation to ensure that the #SecretService proxy
         * has established a session with the Secret Service.
         * @param result the asynchronous result passed to the callback
         * @returns whether a session is established or not
         */
        ensure_session_finish(result: Gio.AsyncResult): boolean;
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
        ensure_session_sync(cancellable: Gio.Cancellable): boolean;
        /**
         * Get the GObject type for collections instantiated by this service.
         * This will always be either #SecretCollection or derived from it.
         * @returns the gobject type for collections
         */
        get_collection_gtype(): GObject.GType;
        /**
         * Get a list of #SecretCollection objects representing all the collections
         * in the secret service.
         *
         * If the %SECRET_SERVICE_LOAD_COLLECTIONS flag was not specified when
         * initializing #SecretService proxy object, then this method will return
         * %NULL. Use secret_service_load_collections() to load the collections.
         * @returns a list of the collections in the secret service
         */
        get_collections(): Collection[];
        /**
         * Get the flags representing what features of the #SecretService proxy
         * have been initialized.
         *
         * Use secret_service_ensure_session() or secret_service_load_collections()
         * to initialize further features and change the flags.
         * @returns the flags for features initialized
         */
        get_flags(): ServiceFlags;
        // Conflicted with Gio.DBusProxy.get_flags
        get_flags(...args: never[]): any;
        /**
         * Get the GObject type for items instantiated by this collection.
         * This will always be either #SecretItem or derived from it.
         * @returns the gobject type for items
         */
        get_item_gtype(): GObject.GType;
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
        get_secret_for_dbus_path(
            item_path: string,
            cancellable: Gio.Cancellable,
            callback: Gio.AsyncReadyCallback<this>,
        ): void;
        /**
         * Complete asynchronous operation to get the secret value for an
         * secret item stored in the service.
         *
         * Will return %NULL if the item is locked.
         * @param result asynchronous result passed to callback
         * @returns the newly allocated secret value for the item, which should be released with secret_value_unref()
         */
        get_secret_for_dbus_path_finish(result: Gio.AsyncResult): Value;
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
        get_secret_for_dbus_path_sync(item_path: string, cancellable: Gio.Cancellable): Value;
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
        get_secrets_for_dbus_paths(
            item_paths: string,
            cancellable: Gio.Cancellable,
            callback: Gio.AsyncReadyCallback<this>,
        ): void;
        /**
         * Complete asynchronous operation to get the secret values for an
         * secret items stored in the service.
         *
         * Items that are locked will not be included the results.
         * @param result asynchronous result passed to callback
         * @returns a newly allocated hash table of item_path keys to #SecretValue values.
         */
        get_secrets_for_dbus_paths_finish(result: Gio.AsyncResult): GLib.HashTable<string, Value>;
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
        get_secrets_for_dbus_paths_sync(
            item_paths: string,
            cancellable: Gio.Cancellable,
        ): GLib.HashTable<string, Value>;
        /**
         * Get the set of algorithms being used to transfer secrets between this
         * secret service proxy and the Secret Service itself.
         *
         * This will be %NULL if no session has been established. Use
         * secret_service_ensure_session() to establish a session.
         * @returns a string representing the algorithms for transferring secrets
         */
        get_session_algorithms(): string;
        /**
         * Get the D-Bus object path of the session object being used to transfer
         * secrets between this secret service proxy and the Secret Service itself.
         *
         * This will be %NULL if no session has been established. Use
         * secret_service_ensure_session() to establish a session.
         * @returns a string representing the D-Bus object path of the session
         */
        get_session_dbus_path(): string;
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
        load_collections(cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback<this>): void;
        /**
         * Complete an asynchronous operation to ensure that the #SecretService proxy
         * has loaded all the collections present in the Secret Service.
         * @param result the asynchronous result passed to the callback
         * @returns whether the load was successful or not
         */
        load_collections_finish(result: Gio.AsyncResult): boolean;
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
        load_collections_sync(cancellable: Gio.Cancellable): boolean;
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
        lock(objects: Gio.DBusProxy[], cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback<this>): void;
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
        lock_dbus_paths(paths: string, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback<this>): void;
        /**
         * Complete asynchronous operation to lock items or collections in the secret
         * service.
         *
         * The secret service may not be able to lock items individually, and may
         * lock an entire collection instead.
         * @param result asynchronous result passed to the callback
         * @returns the number of items or collections that were locked
         */
        lock_dbus_paths_finish(result: Gio.AsyncResult): [number, string[] | null];
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
        lock_dbus_paths_sync(paths: string, cancellable: Gio.Cancellable): [number, string[] | null];
        /**
         * Complete asynchronous operation to lock items or collections in the secret
         * service.
         *
         * The secret service may not be able to lock items individually, and may
         * lock an entire collection instead.
         * @param result asynchronous result passed to the callback
         * @returns the number of items or collections that were locked
         */
        lock_finish(result: Gio.AsyncResult): [number, Gio.DBusProxy[] | null];
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
        lock_sync(objects: Gio.DBusProxy[], cancellable: Gio.Cancellable): [number, Gio.DBusProxy[] | null];
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
        lookup(
            schema: Secret.Schema,
            attributes: { [key: string]: any } | GLib.HashTable<string, string>,
            cancellable: Gio.Cancellable,
            callback: Gio.AsyncReadyCallback<this>,
        ): void;
        /**
         * Finish asynchronous operation to lookup a secret value in the secret service.
         *
         * If no secret is found then %NULL is returned.
         * @param result the asynchronous result passed to the callback
         * @returns a newly allocated #SecretValue, which should be released with secret_value_unref(), or %NULL if no secret found
         */
        lookup_finish(result: Gio.AsyncResult): Value;
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
        lookup_sync(
            schema: Secret.Schema,
            attributes: { [key: string]: any } | GLib.HashTable<string, string>,
            cancellable: Gio.Cancellable,
        ): Value;
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
        prompt(
            prompt: Prompt,
            return_type: GLib.VariantType,
            cancellable: Gio.Cancellable,
            callback: Gio.AsyncReadyCallback<this>,
        ): void;
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
        prompt_at_dbus_path(
            prompt_path: string,
            return_type: GLib.VariantType,
            cancellable: Gio.Cancellable,
            callback: Gio.AsyncReadyCallback<this>,
        ): void;
        /**
         * Complete asynchronous operation to perform prompting for a #SecretPrompt.
         *
         * Returns a variant result if the prompt was completed and not dismissed. The
         * type of result depends on the action the prompt is completing, and is defined
         * in the Secret Service DBus API specification.
         * @param result the asynchronous result passed to the callback
         * @returns %NULL if the prompt was dismissed or an error occurred, a variant result if the prompt was successful
         */
        prompt_at_dbus_path_finish(result: Gio.AsyncResult): GLib.Variant;
        prompt_at_dbus_path_sync(
            prompt_path: string,
            cancellable: Gio.Cancellable,
            return_type: GLib.VariantType,
        ): GLib.Variant;
        /**
         * Complete asynchronous operation to perform prompting for a #SecretPrompt.
         *
         * Returns a variant result if the prompt was completed and not dismissed. The
         * type of result depends on the action the prompt is completing, and is defined
         * in the Secret Service DBus API specification.
         * @param result the asynchronous result passed to the callback
         * @returns %NULL if the prompt was dismissed or an error occurred, a variant result if the prompt was successful
         */
        prompt_finish(result: Gio.AsyncResult): GLib.Variant;
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
        prompt_sync(prompt: Prompt, cancellable: Gio.Cancellable, return_type: GLib.VariantType): GLib.Variant;
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
        read_alias_dbus_path(alias: string, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback<this>): void;
        /**
         * Finish an asynchronous operation to lookup which collection is assigned
         * to an alias. This method returns the DBus object path of the collection
         * @param result asynchronous result passed to callback
         * @returns the collection dbus object path, or %NULL if none assigned to the alias
         */
        read_alias_dbus_path_finish(result: Gio.AsyncResult): string;
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
        read_alias_dbus_path_sync(alias: string, cancellable: Gio.Cancellable): string;
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
        search(
            schema: Secret.Schema,
            attributes: { [key: string]: any } | GLib.HashTable<string, string>,
            flags: SearchFlags,
            cancellable: Gio.Cancellable,
            callback: Gio.AsyncReadyCallback<this>,
        ): void;
        /**
         * Complete asynchronous operation to search for items.
         * @param result asynchronous result passed to callback
         * @returns a list of items that matched the search
         */
        search_finish(result: Gio.AsyncResult): Item[];
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
        search_for_dbus_paths(
            schema: Secret.Schema,
            attributes: { [key: string]: any } | GLib.HashTable<string, string>,
            cancellable: Gio.Cancellable,
            callback: Gio.AsyncReadyCallback<this>,
        ): void;
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
        search_for_dbus_paths_finish(result: Gio.AsyncResult): [boolean, string[] | null, string[] | null];
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
        search_for_dbus_paths_sync(
            schema: Secret.Schema,
            attributes: { [key: string]: any } | GLib.HashTable<string, string>,
            cancellable: Gio.Cancellable,
        ): [boolean, string[] | null, string[] | null];
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
        search_sync(
            schema: Secret.Schema,
            attributes: { [key: string]: any } | GLib.HashTable<string, string>,
            flags: SearchFlags,
            cancellable: Gio.Cancellable,
        ): Item[];
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
        set_alias(
            alias: string,
            collection: Collection,
            cancellable: Gio.Cancellable,
            callback: Gio.AsyncReadyCallback<this>,
        ): void;
        /**
         * Finish an asynchronous operation to assign a collection to an alias.
         * @param result asynchronous result passed to callback
         * @returns %TRUE if successful
         */
        set_alias_finish(result: Gio.AsyncResult): boolean;
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
        set_alias_sync(alias: string, collection: Collection, cancellable: Gio.Cancellable): boolean;
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
        set_alias_to_dbus_path(
            alias: string,
            collection_path: string,
            cancellable: Gio.Cancellable,
            callback: Gio.AsyncReadyCallback<this>,
        ): void;
        /**
         * Finish an asynchronous operation to assign a collection to an alias.
         * @param result asynchronous result passed to callback
         * @returns %TRUE if successful
         */
        set_alias_to_dbus_path_finish(result: Gio.AsyncResult): boolean;
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
        set_alias_to_dbus_path_sync(alias: string, collection_path: string, cancellable: Gio.Cancellable): boolean;
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
        store(
            schema: Secret.Schema,
            attributes: { [key: string]: any } | GLib.HashTable<string, string>,
            collection: string,
            label: string,
            value: Value,
            cancellable: Gio.Cancellable,
            callback: Gio.AsyncReadyCallback<this>,
        ): void;
        /**
         * Finish asynchronous operation to store a secret value in the secret service.
         * @param result the asynchronous result passed to the callback
         * @returns whether the storage was successful or not
         */
        store_finish(result: Gio.AsyncResult): boolean;
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
        store_sync(
            schema: Secret.Schema,
            attributes: { [key: string]: any } | GLib.HashTable<string, string>,
            collection: string,
            label: string,
            value: Value,
            cancellable: Gio.Cancellable,
        ): boolean;
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
        unlock(objects: Gio.DBusProxy[], cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback<this>): void;
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
        unlock_dbus_paths(paths: string, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback<this>): void;
        /**
         * Complete asynchronous operation to unlock items or collections in the secret
         * service.
         *
         * The secret service may not be able to unlock items individually, and may
         * unlock an entire collection instead.
         * @param result asynchronous result passed to the callback
         * @returns the number of items or collections that were unlocked
         */
        unlock_dbus_paths_finish(result: Gio.AsyncResult): [number, string[] | null];
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
        unlock_dbus_paths_sync(paths: string, cancellable: Gio.Cancellable): [number, string[] | null];
        /**
         * Complete asynchronous operation to unlock items or collections in the secret
         * service.
         *
         * The secret service may not be able to unlock items individually, and may
         * unlock an entire collection instead.
         * @param result asynchronous result passed to the callback
         * @returns the number of items or collections that were unlocked
         */
        unlock_finish(result: Gio.AsyncResult): [number, Gio.DBusProxy[] | null];
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
        unlock_sync(objects: Gio.DBusProxy[], cancellable: Gio.Cancellable): [number, Gio.DBusProxy[] | null];

        // Inherited methods
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
        init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See g_async_initable_init_async().
         * @param res a #GAsyncResult.
         * @returns %TRUE if successful. If an error has occurred, this function will return %FALSE and set @error appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;
        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or %NULL on error.
         * @param res the #GAsyncResult from the callback
         * @returns a newly created #GObject,      or %NULL on error. Free with g_object_unref().
         */
        new_finish(res: Gio.AsyncResult): Service;
        // Conflicted with Gio.DBusProxy.new_finish
        new_finish(...args: never[]): any;
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
        vfunc_init_async(
            io_priority: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes asynchronous initialization and returns the result.
         * See g_async_initable_init_async().
         * @param res a #GAsyncResult.
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
        /**
         * Gets the #GDBusObject that `interface_` belongs to, if any.
         * @returns A #GDBusObject or %NULL. The returned reference should be freed with g_object_unref().
         */
        get_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A #GDBusInterfaceInfo. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the #GDBusObject for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A #GDBusObject or %NULL.
         */
        set_object(object?: Gio.DBusObject | null): void;
        /**
         * Gets the #GDBusObject that `interface_` belongs to, if any.
         */
        vfunc_dup_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the #GDBusObject for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A #GDBusObject or %NULL.
         */
        vfunc_set_object(object?: Gio.DBusObject | null): void;
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
         * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
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
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
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
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
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
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
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
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
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
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
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
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
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
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
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
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    type CollectionClass = typeof Collection;
    abstract class CollectionPrivate {
        static $gtype: GObject.GType<CollectionPrivate>;

        // Constructors of SecretUnstable.CollectionPrivate

        _init(...args: any[]): void;
    }

    type ItemClass = typeof Item;
    abstract class ItemPrivate {
        static $gtype: GObject.GType<ItemPrivate>;

        // Constructors of SecretUnstable.ItemPrivate

        _init(...args: any[]): void;
    }

    type PromptClass = typeof Prompt;
    abstract class PromptPrivate {
        static $gtype: GObject.GType<PromptPrivate>;

        // Constructors of SecretUnstable.PromptPrivate

        _init(...args: any[]): void;
    }

    type ServiceClass = typeof Service;
    abstract class ServicePrivate {
        static $gtype: GObject.GType<ServicePrivate>;

        // Constructors of SecretUnstable.ServicePrivate

        _init(...args: any[]): void;
    }

    /**
     * A secret value, like a password or other binary secret.
     */
    class Value {
        static $gtype: GObject.GType<Value>;

        // Constructors of SecretUnstable.Value

        constructor(secret: string, length: number, content_type: string);
        _init(...args: any[]): void;

        static ['new'](secret: string, length: number, content_type: string): Value;

        static new_full(secret: string, length: number, content_type: string): Value;

        // Own methods of SecretUnstable.Value

        /**
         * Get the secret data in the #SecretValue. The value is not necessarily
         * null-terminated unless it was created with secret_value_new() or a
         * null-terminated string was passed to secret_value_new_full().
         * @returns the secret data
         */
        get(): Uint8Array;
        /**
         * Get the content type of the secret value, such as
         * <literal>text/plain</literal>.
         * @returns the content type
         */
        get_content_type(): string;
        /**
         * Get the secret data in the #SecretValue if it contains a textual
         * value. The content type must be <literal>text/plain</literal>.
         * @returns the content type
         */
        get_text(): string;
        /**
         * Add another reference to the #SecretValue. For each reference
         * secret_value_unref() should be called to unreference the value.
         * @returns the value
         */
        ref(): Value;
        /**
         * Unreference a #SecretValue. When the last reference is gone, then
         * the value will be freed.
         */
        unref(): void;
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

export default SecretUnstable;

// END
