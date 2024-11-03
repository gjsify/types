/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Accounts {
    /**
     * Accounts-1.0
     */

    /**
     * These identify the various errors that can occur with methods in
     * libaccounts-glib that return a #GError.
     */
    class AccountsError extends GLib.Error {
        static $gtype: GObject.GType<AccountsError>;

        // Static fields

        /**
         * there was an error accessing the accounts database
         */
        static DB: number;
        /**
         * the account was in the process of being
         * disposed
         */
        static DISPOSED: number;
        /**
         * the account was in the process of being deleted
         */
        static DELETED: number;
        /**
         * the database was locked
         */
        static DB_LOCKED: number;
        /**
         * the requested account was not found
         */
        static ACCOUNT_NOT_FOUND: number;
        /**
         * an asynchronous store operation is
         * already in progress. Since 1.4
         */
        static STORE_IN_PROGRESS: number;
        /**
         * the accounts DB is in read-only mode. Since 1.4
         */
        static READONLY: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;
    }

    export namespace Error {
        export const $gtype: GObject.GType<Error>;
    }

    enum Error {
        DB,
        DISPOSED,
        DELETED,
        DB_LOCKED,
        ACCOUNT_NOT_FOUND,
    }
    /**
     * The source of a setting on a #AgAccount.
     */

    /**
     * The source of a setting on a #AgAccount.
     */
    export namespace SettingSource {
        export const $gtype: GObject.GType<SettingSource>;
    }

    enum SettingSource {
        /**
         * the setting is not present
         */
        NONE,
        /**
         * the setting comes from the current account
         * configuration
         */
        ACCOUNT,
        /**
         * the setting comes from the predefined profile
         */
        PROFILE,
    }
    const MANAGER_INTERFACE: string;
    const MANAGER_OBJECT_PATH: string;
    const MANAGER_SERVICE_NAME: string;
    function accounts_error_quark(): GLib.Quark;
    function errors_quark(): GLib.Quark;
    /**
     * Frees the list `list`.
     * @param list a #GList of providers returned by some function of this library.
     */
    function provider_list_free(list: Provider[]): void;
    /**
     * Frees the list `list`.
     * @param list a #GList of services returned by some function of this library.
     */
    function service_list_free(list: Service[]): void;
    /**
     * Frees the list `list`.
     * @param list a #GList of service types returned by some function of this library, such as ag_manager_list_service_types().
     */
    function service_type_list_free(list: ServiceType[]): void;
    interface AccountNotifyCb {
        (account: Account, key: string): void;
    }
    interface AccountStoreCb {
        (account: Account, error: GLib.Error): void;
    }
    module Account {
        // Signal callback interfaces

        interface Deleted {
            (): void;
        }

        interface DisplayNameChanged {
            (): void;
        }

        interface Enabled {
            (service: string, enabled: boolean): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            display_name: string;
            displayName: string;
            enabled: boolean;
            foreign: boolean;
            id: number;
            manager: Manager;
            provider: string;
        }
    }

    /**
     * Opaque structure. Use related accessor functions.
     */
    class Account extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<Account>;

        // Properties

        /**
         * The display name of the account.
         */
        get display_name(): string;
        /**
         * The display name of the account.
         */
        get displayName(): string;
        /**
         * Whether the account is currently enabled.
         */
        get enabled(): boolean;
        set foreign(val: boolean);
        /**
         * The AgAccountId for the account.
         */
        get id(): number;
        /**
         * The #AgManager from which the account was instantiated.
         */
        get manager(): Manager;
        /**
         * The ID of the provider for the account.
         */
        get provider(): string;

        // Constructors

        constructor(properties?: Partial<Account.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'deleted', callback: (_source: this) => void): number;
        connect_after(signal: 'deleted', callback: (_source: this) => void): number;
        emit(signal: 'deleted'): void;
        connect(signal: 'display-name-changed', callback: (_source: this) => void): number;
        connect_after(signal: 'display-name-changed', callback: (_source: this) => void): number;
        emit(signal: 'display-name-changed'): void;
        connect(signal: 'enabled', callback: (_source: this, service: string, enabled: boolean) => void): number;
        connect_after(signal: 'enabled', callback: (_source: this, service: string, enabled: boolean) => void): number;
        emit(signal: 'enabled', service: string, enabled: boolean): void;

        // Methods

        /**
         * Deletes the account. Call ag_account_store() in order to record the change
         * in the storage.
         */
        ['delete'](): void;
        /**
         * Get the display name of `account`.
         * @returns the display name.
         */
        get_display_name(): string;
        /**
         * Gets whether the selected service is enabled for `account`.
         * @returns %TRUE if the selected service for @account is enabled, %FALSE otherwise.
         */
        get_enabled(): boolean;
        /**
         * Get the #AgManager for `account`.
         * @returns the #AgManager.
         */
        get_manager(): Manager;
        /**
         * Get the name of the provider of `account`.
         * @returns the name of the provider.
         */
        get_provider_name(): string;
        /**
         * Gets the selected #AgService for `account`.
         * @returns the selected service, or %NULL if no service is selected.
         */
        get_selected_service(): Service;
        /**
         * Creates a new iterator. This method is useful for language bindings only.
         * @param key_prefix enumerate only the settings whose key starts with @key_prefix.
         * @returns an #AgAccountSettingIter.
         */
        get_settings_iter(key_prefix?: string | null): AccountSettingIter;
        /**
         * Gets the value of the configuration setting `key:` `value` must be a
         * #GValue initialized to the type of the setting.
         * @param key the name of the setting to retrieve.
         * @param value an initialized #GValue to receive the setting's value.
         * @returns one of #AgSettingSource: %AG_SETTING_SOURCE_NONE if the setting is not present, %AG_SETTING_SOURCE_ACCOUNT if the setting comes from the account configuration, or %AG_SETTING_SOURCE_PROFILE if the value comes as predefined in the profile.
         */
        get_value(key: string, value: GObject.Value | any): [SettingSource, unknown];
        /**
         * Gets the value of the configuration setting `key`.
         * @param key the name of the setting to retrieve.
         * @returns a #GVariant holding the setting value, or %NULL. The returned #GVariant is owned by the account, and no guarantees are made about its lifetime. If the client wishes to keep it, it should call g_variant_ref() on it.
         */
        get_variant(key: string): [GLib.Variant, SettingSource | null];
        /**
         * Gets a list of services that are enabled for `account`.
         * @returns a #GList of #AgService items representing all the services which are enabled. Must be free'd with ag_service_list_free().
         */
        list_enabled_services(): Service[];
        /**
         * Get the list of services for `account`. If the #AgManager was created with
         * specified service_type this will return only services with this service_type.
         * @returns a #GList of #AgService items representing all the services supported by this account. Must be free'd with ag_service_list_free().
         */
        list_services(): Service[];
        /**
         * Get the list of services supported by `account,` filtered by `service_type`.
         * @param service_type the service type which all the returned services should provide.
         * @returns a #GList of #AgService items representing all the services supported by this account which provide @service_type. Must be free'd with ag_service_list_free().
         */
        list_services_by_type(service_type: string): Service[];
        /**
         * Removes the notification callback identified by `watch`.
         * @param watch the watch to remove.
         */
        remove_watch(watch: AccountWatch): void;
        /**
         * Selects the configuration of service `service:` from now on, all the
         * subsequent calls on the #AgAccount configuration will act on the `service`.
         * If `service` is %NULL, the global account configuration is selected.
         *
         * Note that if `account` is being shared with other code one must take special
         * care to make sure the desired service is always selected.
         * @param service the #AgService to select.
         */
        select_service(service?: Service | null): void;
        /**
         * Changes the display name for `account` to `display_name`.
         * @param display_name the display name to set.
         */
        set_display_name(display_name: string): void;
        /**
         * Sets the "enabled" flag on the selected service for `account`.
         * @param enabled whether @account should be enabled.
         */
        set_enabled(enabled: boolean): void;
        /**
         * Sets the value of the configuration setting `key` to the value `value`.
         * If `value` is %NULL, then the setting is unset.
         * @param key the name of the setting to change.
         * @param value a #GValue holding the new setting's value.
         */
        set_value(key: string, value?: GObject.Value | null): void;
        /**
         * Sets the value of the configuration setting `key` to the value `value`.
         * If `value` has a floating reference, the `account` will take ownership
         * of it.
         * If `value` is %NULL, then the setting is unset.
         * @param key the name of the setting to change.
         * @param value a #GVariant holding the new setting's value.
         */
        set_variant(key: string, value?: GLib.Variant | null): void;
        /**
         * Initializes `iter` to iterate over the account settings. If `key_prefix` is
         * not %NULL, only keys whose names start with `key_prefix` will be iterated
         * over.
         * @param iter an uninitialized #AgAccountSettingIter structure.
         * @param key_prefix enumerate only the settings whose key starts with @key_prefix.
         */
        settings_iter_init(iter: AccountSettingIter, key_prefix?: string | null): void;
        /**
         * Creates signature of the `key` with given `token`. The account must be
         * stored prior to calling this function.
         * @param key the name of the key or prefix of the keys to be signed.
         * @param token a signing token (%NULL-terminated string) for creating the signature. The application must possess (request) the token.
         */
        sign(key: string, token: string): void;
        /**
         * Commit the changed account settings to the account database, and invoke
         * `callback` when the operation has been completed.
         * @param callback function to be called when the settings have been written.
         */
        store(callback: AccountStoreCb): void;
        /**
         * Commit the changed account settings to the account database, and invoke
         * `callback` when the operation has been completed.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         */
        store_async(cancellable?: Gio.Cancellable | null): Promise<boolean>;
        /**
         * Commit the changed account settings to the account database, and invoke
         * `callback` when the operation has been completed.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback function to be called when the settings have been written.
         */
        store_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Commit the changed account settings to the account database, and invoke
         * `callback` when the operation has been completed.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @param callback function to be called when the settings have been written.
         */
        store_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): Promise<boolean> | void;
        /**
         * Commit the changed account settings to the account database, and invoke
         * `callback` when the operation has been completed.
         * @returns %TRUE on success, %FALSE on failure.
         */
        store_blocking(): boolean;
        /**
         * Finishes the store operation started by ag_account_store_async().
         * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to ag_account_store_async().
         * @returns %TRUE on success, %FALSE otherwise.
         */
        store_finish(res: Gio.AsyncResult): boolean;
        /**
         * Get whether `service_type` is supported on `account`.
         * @param service_type the name of the service type to check for
         * @returns %TRUE if @account supports the service type @service_type, %FALSE otherwise.
         */
        supports_service(service_type: string): boolean;
        /**
         * Verify if the key is signed and the signature matches the value
         * and provides the aegis token which was used for signing the `key`.
         * @param key the name of the key or prefix of the keys to be verified.
         * @param token location to receive the pointer to aegis token.
         * @returns %TRUE if the key is signed and the signature matches the value, %FALSE otherwise.
         */
        verify(key: string, token: string): boolean;
        /**
         * Verify if the `key` is signed with any of the tokens from the `tokens`
         * and the signature is valid.
         * @param key the name of the key or prefix of the keys to be verified.
         * @param tokens array of aegis tokens.
         * @returns %TRUE if the key is signed with any of the given tokens and the signature is valid, %FALSE otherwise.
         */
        verify_with_tokens(key: string, tokens: string): boolean;
        /**
         * Installs a watch on all the keys under `key_prefix:` `callback` will be
         * invoked whenever the value of any of these keys changes (or a key is
         * removed).
         * @param key_prefix the prefix of the keys to watch.
         * @param callback a #AgAccountNotifyCb callback to be called.
         * @returns a #AgAccountWatch, which can then be used to remove this watch.
         */
        watch_dir(key_prefix: string, callback: AccountNotifyCb): AccountWatch;
        /**
         * Installs a watch on `key:` `callback` will be invoked whenever the value of
         * `key` changes (or the key is removed).
         * @param key the name of the key to watch.
         * @param callback a #AgAccountNotifyCb callback to be called.
         * @returns a #AgAccountWatch, which can then be used to remove this watch.
         */
        watch_key(key: string, callback: AccountNotifyCb): AccountWatch;

        // Inherited methods
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

    module AccountService {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        interface Enabled {
            (enabled: boolean): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            account: Account;
            enabled: boolean;
            service: Service;
        }
    }

    /**
     * Opaque structure. Use related accessor functions.
     */
    class AccountService extends GObject.Object {
        static $gtype: GObject.GType<AccountService>;

        // Properties

        /**
         * The #AgAccount used by the account service.
         */
        get account(): Account;
        /**
         * Whether the account service is currently enabled. The value of
         * this property is %TRUE if and only if the underlying #AgAccount
         * is enabled and the selected #AgService is enabled on it. If this
         * property is %FALSE, applications should not try to use this
         * object.
         */
        get enabled(): boolean;
        /**
         * The #AgService used by the account service.
         */
        get service(): Service;

        // Constructors

        constructor(properties?: Partial<AccountService.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](account: Account, service?: Service | null): AccountService;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'changed', callback: (_source: this) => void): number;
        connect_after(signal: 'changed', callback: (_source: this) => void): number;
        emit(signal: 'changed'): void;
        connect(signal: 'enabled', callback: (_source: this, enabled: boolean) => void): number;
        connect_after(signal: 'enabled', callback: (_source: this, enabled: boolean) => void): number;
        emit(signal: 'enabled', enabled: boolean): void;

        // Static methods

        /**
         * Iterates over the account keys. `iter` must be an iterator previously
         * initialized with ag_account_service_settings_iter_init().
         * @param iter an initialized #AgAccountSettingIter structure.
         */
        static settings_iter_next(iter: AccountSettingIter): [boolean, string, unknown];

        // Methods

        /**
         * Get the #AgAccount associated with `self`.
         * @returns the underlying #AgAccount. The reference count on it is not incremented, so if you need to use it beyond the lifetime of @self, you need to call g_object_ref() on it yourself.
         */
        get_account(): Account;
        /**
         * Reads the authentication data stored in the account (merging the
         * service-specific settings with the global account settings) and returns an
         * #AgAuthData structure.
         * The method and mechanism are read from the "auth/method" and
         * "auth/mechanism" keys, respectively. The authentication parameters are
         * found under the "auth/&lt;method&gt;/&lt;mechanism&gt;/" group.
         * @returns a newly allocated #AgAuthData structure.
         */
        get_auth_data(): AuthData;
        /**
         * This method should be called only in the context of a handler of the
         * #AgAccountService::changed signal, and can be used to retrieve the set of
         * changes.
         * @returns a newly allocated array of strings describing the keys of the fields which have been altered. It must be free'd with g_strfreev().
         */
        get_changed_fields(): string[];
        /**
         * Checks whether the underlying #AgAccount is enabled and the selected
         * #AgService is enabled on it. If this method returns %FALSE, applications
         * should not try to use this object.
         * @returns %TRUE if the service is enabled, %FALSE otherwise.
         */
        get_enabled(): boolean;
        /**
         * Get the #AgService associated with `self`.
         * @returns the underlying #AgService. The reference count on it is not incremented, so if you need to use it beyond the lifetime of @self, you need to call ag_service_ref() on it yourself.
         */
        get_service(): Service;
        /**
         * Creates a new iterator. This method is useful for language bindings only.
         * @param key_prefix enumerate only the settings whose key starts with @key_prefix.
         * @returns an #AgAccountSettingIter.
         */
        get_settings_iter(key_prefix?: string | null): AccountSettingIter;
        /**
         * Gets the value of the configuration setting `key:` `value` must be a
         * #GValue initialized to the type of the setting.
         * @param key the name of the setting to retrieve.
         * @param value an initialized #GValue to receive the setting's value.
         * @returns one of <type>#AgSettingSource</type>: %AG_SETTING_SOURCE_NONE if the setting is not present, %AG_SETTING_SOURCE_ACCOUNT if the setting comes from the account configuration, or %AG_SETTING_SOURCE_PROFILE if the value comes as predefined in the profile.
         */
        get_value(key: string, value: GObject.Value | any): [SettingSource, unknown];
        /**
         * Gets the value of the configuration setting `key`.
         * @param key the name of the setting to retrieve.
         * @returns a #GVariant holding the setting value, or %NULL. The returned #GVariant is owned by the account, and no guarantees are made about its lifetime. If the client wishes to keep it, it should call g_variant_ref() on it.
         */
        get_variant(key: string): [GLib.Variant, SettingSource | null];
        /**
         * Sets the value of the configuration setting `key` to the value `value`.
         * If `value` is %NULL, then the setting is unset.
         * @param key the name of the setting to change.
         * @param value a #GValue holding the new setting's value.
         */
        set_value(key: string, value?: GObject.Value | null): void;
        /**
         * Sets the value of the configuration setting `key` to the value `value`.
         * If `value` has a floating reference, the `account` will take ownership
         * of it.
         * If `value` is %NULL, then the setting is unset.
         * @param key the name of the setting to change.
         * @param value a #GVariant holding the new setting's value.
         */
        set_variant(key: string, value?: GLib.Variant | null): void;
        /**
         * Initializes `iter` to iterate over the account settings. If `key_prefix` is
         * not %NULL, only keys whose names start with `key_prefix` will be iterated
         * over.
         * After calling this method, one would typically call
         * ag_account_settings_iter_get_next() to read the settings one by one.
         * @param iter an uninitialized #AgAccountSettingIter structure.
         * @param key_prefix enumerate only the settings whose key starts with @key_prefix.
         */
        settings_iter_init(iter: AccountSettingIter, key_prefix?: string | null): void;
    }

    module Manager {
        // Signal callback interfaces

        interface AccountCreated {
            (account_id: number): void;
        }

        interface AccountDeleted {
            (account_id: number): void;
        }

        interface AccountUpdated {
            (account_id: number): void;
        }

        interface EnabledEvent {
            (account_id: number): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            abort_on_db_timeout: boolean;
            abortOnDbTimeout: boolean;
            db_timeout: number;
            dbTimeout: number;
            service_type: string;
            serviceType: string;
            use_dbus: boolean;
            useDbus: boolean;
        }
    }

    /**
     * Opaque structure. Use related accessor functions.
     */
    class Manager extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<Manager>;

        // Properties

        /**
         * Whether to abort the application when a database timeout occurs.
         */
        get abort_on_db_timeout(): boolean;
        set abort_on_db_timeout(val: boolean);
        /**
         * Whether to abort the application when a database timeout occurs.
         */
        get abortOnDbTimeout(): boolean;
        set abortOnDbTimeout(val: boolean);
        /**
         * Timeout for database operations, in milliseconds.
         */
        get db_timeout(): number;
        set db_timeout(val: number);
        /**
         * Timeout for database operations, in milliseconds.
         */
        get dbTimeout(): number;
        set dbTimeout(val: number);
        /**
         * If the service type is set, certain operations on the #AgManager, such
         * as ag_manager_list() and ag_manager_list_services(), will be restricted
         * to only affect accounts or services with that service type.
         */
        get service_type(): string;
        /**
         * If the service type is set, certain operations on the #AgManager, such
         * as ag_manager_list() and ag_manager_list_services(), will be restricted
         * to only affect accounts or services with that service type.
         */
        get serviceType(): string;
        /**
         * Whether to use D-Bus for inter-process change notification. Setting this
         * property to %FALSE causes libaccounts not to emit the change
         * notification signals, and also not react to changes made by other
         * processes. Disabling D-Bus is only meant to be used for specific cases,
         * such as maintenance programs.
         */
        get use_dbus(): boolean;
        /**
         * Whether to use D-Bus for inter-process change notification. Setting this
         * property to %FALSE causes libaccounts not to emit the change
         * notification signals, and also not react to changes made by other
         * processes. Disabling D-Bus is only meant to be used for specific cases,
         * such as maintenance programs.
         */
        get useDbus(): boolean;

        // Constructors

        constructor(properties?: Partial<Manager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Manager;

        static new_for_service_type(service_type: string): Manager;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'account-created', callback: (_source: this, account_id: number) => void): number;
        connect_after(signal: 'account-created', callback: (_source: this, account_id: number) => void): number;
        emit(signal: 'account-created', account_id: number): void;
        connect(signal: 'account-deleted', callback: (_source: this, account_id: number) => void): number;
        connect_after(signal: 'account-deleted', callback: (_source: this, account_id: number) => void): number;
        emit(signal: 'account-deleted', account_id: number): void;
        connect(signal: 'account-updated', callback: (_source: this, account_id: number) => void): number;
        connect_after(signal: 'account-updated', callback: (_source: this, account_id: number) => void): number;
        emit(signal: 'account-updated', account_id: number): void;
        connect(signal: 'enabled-event', callback: (_source: this, account_id: number) => void): number;
        connect_after(signal: 'enabled-event', callback: (_source: this, account_id: number) => void): number;
        emit(signal: 'enabled-event', account_id: number): void;

        // Static methods

        /**
         * Frees the memory taken by a #GList of #AgAccountId allocated by #AgManager,
         * such as by ag_manager_list(), ag_manager_list_enabled() or
         * ag_manager_list_enabled_by_service_type().
         * @param list a #GList returned from a #AgManager method which returns account IDs.
         */
        static list_free(list: AccountId[]): void;

        // Virtual methods

        vfunc_account_deleted(id: AccountId): void;

        // Methods

        /**
         * Create a new account. The account is not stored in the database until
         * ag_account_store() has successfully returned; the `id` field in the
         * #AgAccount structure is also not meant to be valid until the account has
         * been stored.
         * @param provider_name name of the provider of the account.
         * @returns a new #AgAccount, or %NULL.
         */
        create_account(provider_name: string): Account;
        /**
         * Get whether the library will abort when a timeout error occurs.
         * @returns %TRUE is the library will abort when a timeout error occurs, %FALSE otherwise.
         */
        get_abort_on_db_timeout(): boolean;
        /**
         * Instantiates the object representing the account identified by
         * `account_id`.
         * @param account_id the #AgAccountId of the account.
         * @returns an #AgAccount, on which the client must call g_object_unref() when it is no longer required, or %NULL if an error occurs.
         */
        get_account(account_id: AccountId): Account;
        /**
         * Gets all the account services. If the `manager` was created for a
         * specific service type, only services with that type will be returned.
         * <note>
         *   <para>
         *   This method causes the loading of all the service settings for all the
         *   returned accounts (unless they have been loaded previously). If you are
         *   interested in a specific account/service, consider using
         *   ag_manager_load_account() to first load the the account, and then create
         *   the AgAccountService for that account only.
         *   </para>
         * </note>
         * @returns a list of #AgAccountService objects. When done with it, call g_object_unref() on the list elements, and g_list_free() on the container.
         */
        get_account_services(): AccountService[];
        /**
         * Search for `application_name` in the list of applications, and return a new
         * #AgApplication if a matching application was found.
         * @param application_name the name of an application to search for
         * @returns a new #AgApplication if one was found, %NULL otherwise
         */
        get_application(application_name: string): Application;
        /**
         * Get the timeout of database operations for `manager,` in milliseconds.
         * @returns the timeout (in milliseconds) for database operations.
         */
        get_db_timeout(): number;
        /**
         * Gets all the enabled account services. If the `manager` was created for a
         * specific service type, only services with that type will be returned.
         * <note>
         *   <para>
         *   This method causes the loading of all the service settings for all the
         *   returned accounts (unless they have been loaded previously). If you are
         *   interested in a specific account/service, consider using
         *   ag_manager_load_account() to first load the the account, and then create
         *   the AgAccountService for that account only.
         *   </para>
         * </note>
         * @returns a list of #AgAccountService objects. When done with it, call g_object_unref() on the list elements, and g_list_free() on the container.
         */
        get_enabled_account_services(): AccountService[];
        /**
         * Loads the provider identified by `provider_name`.
         * @param provider_name the name of the provider.
         * @returns an #AgProvider, which must be free'd with ag_provider_unref() when no longer required.
         */
        get_provider(provider_name: string): Provider;
        /**
         * Loads the service identified by `service_name`.
         * @param service_name the name of the service.
         * @returns an #AgService, which must be free'd with ag_service_unref() when no longer required.
         */
        get_service(service_name: string): Service;
        /**
         * Get the service type for `manager`.
         * @returns the name of the service type for the supplied @manager.
         */
        get_service_type(): string;
        /**
         * Lists the accounts. If the #AgManager is created with a specified
         * #AgManager:service-type, it will return only the accounts supporting this
         * service type.
         * @returns a #GList of #AgAccountId representing the accounts. Must be free'd with ag_manager_list_free() when no longer required.
         */
        list(): AccountId[];
        /**
         * Lists the registered applications which support the given service.
         * @param service the #AgService for which we want to get the applications list.
         * @returns a #GList of all the applications which have declared support for the given service or for its service type.
         */
        list_applications_by_service(service: Service): Application[];
        /**
         * Lists the accounts supporting the given service type.
         * @param service_type the name of the service type to check for.
         * @returns a #GList of #AgAccountId representing the accounts. Must be free'd with ag_manager_list_free() when no longer required.
         */
        list_by_service_type(service_type: string): AccountId[];
        /**
         * Lists the enabled accounts.
         * @returns a #GList of the enabled #AgAccountId representing the accounts. Must be free'd with ag_manager_list_free() when no longer required.
         */
        list_enabled(): AccountId[];
        /**
         * Lists the enabled accounts supporting the given service type.
         * @param service_type the name of the service type to check for.
         * @returns a #GList of the enabled #AgAccountId representing the accounts. Must be free'd with ag_manager_list_free() when no longer required.
         */
        list_enabled_by_service_type(service_type: string): AccountId[];
        /**
         * Gets a list of all the installed providers.
         * @returns a list of #AgProvider, which must be then free'd with ag_provider_list_free().
         */
        list_providers(): Provider[];
        /**
         * Gets a list of all the installed service types.
         * @returns a list of #AgServiceType, which must be free'd with ag_service_type_list_free() when no longer required.
         */
        list_service_types(): ServiceType[];
        /**
         * Gets a list of all the installed services.
         * If the #AgManager was created with a specified #AgManager:service_type
         * it will return only the installed services supporting that service type.
         * @returns a list of #AgService, which must be free'd with ag_service_list_free() when no longer required.
         */
        list_services(): Service[];
        /**
         * Gets a list of all the installed services where the service type name is
         * `service_type`.
         * @param service_type the type of the service.
         * @returns a list of #AgService, which must be free'd with ag_service_list_free() when no longer required.
         */
        list_services_by_type(service_type: string): Service[];
        /**
         * Instantiates the object representing the account identified by
         * `account_id`.
         * @param account_id the #AgAccountId of the account.
         * @returns an #AgAccount, on which the client must call g_object_unref() when it is no longer required, or %NULL if an error occurs.
         */
        load_account(account_id: AccountId): Account;
        /**
         * Instantiate the service type with the name `service_type`.
         * @param service_type the name of the service type.
         * @returns an #AgServiceType, which must be free'd with ag_service_type_unref() when no longer required.
         */
        load_service_type(service_type: string): ServiceType;
        /**
         * Tells libaccounts whether it should make the client application abort when
         * a timeout error occurs. The default is %FALSE.
         * @param abort whether to abort when a DB timeout occurs.
         */
        set_abort_on_db_timeout(abort: boolean): void;
        /**
         * Sets the timeout for database operations. This tells the library how long
         * it is allowed to block while waiting for a locked DB to become accessible.
         * Higher values mean a higher chance of successful reads, but also mean that
         * the execution might be blocked for a longer time.
         * The default is 5 seconds.
         * @param timeout_ms the new timeout, in milliseconds.
         */
        set_db_timeout(timeout_ms: number): void;

        // Inherited methods
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

    type AccountClass = typeof Account;
    abstract class AccountPrivate {
        static $gtype: GObject.GType<AccountPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type AccountServiceClass = typeof AccountService;
    abstract class AccountServicePrivate {
        static $gtype: GObject.GType<AccountServicePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * Iterator for account settings.
     */
    class AccountSettingIter {
        static $gtype: GObject.GType<AccountSettingIter>;

        // Fields

        account: Account;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * Frees the memory associated with an #AgAccountSettingIter.
         */
        free(): void;
        /**
         * Iterates over the account keys. `iter` must be an iterator previously
         * initialized with ag_account_settings_iter_init().
         * @returns %TRUE if @key and @value have been set, %FALSE if we there are no more account settings to iterate over.
         */
        get_next(): [boolean, string, GLib.Variant];
        /**
         * Iterates over the account keys. `iter` must be an iterator previously
         * initialized with ag_account_settings_iter_init().
         * @returns %TRUE if @key and @value have been set, %FALSE if we there are no more account settings to iterate over.
         */
        next(): [boolean, string, unknown];
    }

    /**
     * An opaque struct returned from ag_account_watch_dir() and
     * ag_account_watch_key().
     */
    abstract class AccountWatch {
        static $gtype: GObject.GType<AccountWatch>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * Opaque structure. Use related accessor functions.
     */
    class Application {
        static $gtype: GObject.GType<Application>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * Get the description of the #AgApplication.
         * @returns the description of @self.
         */
        get_description(): string;
        /**
         * Get the #GDesktopAppInfo of the application.
         * @returns the #GDesktopAppInfo for @self, or %NULL if failed.
         */
        get_desktop_app_info(): Gio.DesktopAppInfo;
        /**
         * Get the translation domain of the #AgApplication.
         * @returns the translation domain.
         */
        get_i18n_domain(): string;
        /**
         * Get the name of the #AgApplication.
         * @returns the name of @self.
         */
        get_name(): string;
        /**
         * Get the description from the application XML file, for the specified
         * service; if not found, get the service-type description instead.
         * @param service an #AgService.
         * @returns usage description of the service.
         */
        get_service_usage(service: Service): string;
        /**
         * Increment the reference count of `self`.
         * @returns @self.
         */
        ref(): Application;
        /**
         * Decrements the reference count of `self`. The item is destroyed when the
         * count gets to 0.
         */
        unref(): void;
    }

    /**
     * Opaque structure. Use related accessor functions.
     */
    class AuthData {
        static $gtype: GObject.GType<AuthData>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * Gets the ID of the credentials associated with this account.
         * @returns the credentials ID.
         */
        get_credentials_id(): number;
        /**
         * Gets the authentication parameters.
         * @param extra_parameters a #GVariant containing client-specific authentication parameters to be added to the returned dictionary.
         * @returns a floating #GVariant of type %G_VARIANT_TYPE_VARDICT containing all the authentication parameters.
         */
        get_login_parameters(extra_parameters?: GLib.Variant | null): GLib.Variant;
        /**
         * Gets the authentication mechanism.
         * @returns the authentication mechanism.
         */
        get_mechanism(): string;
        /**
         * Gets the authentication method.
         * @returns the authentication method.
         */
        get_method(): string;
        /**
         * Gets the authentication parameters.
         * @returns a #GHashTable containing all the authentication parameters.
         */
        get_parameters(): GLib.HashTable<string, GObject.Value>;
        /**
         * Insert the given authentication parameters into the authentication data. If
         * some parameters were already present, the parameters passed with this method
         * take precedence.
         * @param parameters a #GHashTable containing the authentication parameters to be added.
         */
        insert_parameters(parameters: { [key: string]: any } | GLib.HashTable<string, GObject.Value>): void;
        /**
         * Increment the reference count of `self`.
         * @returns @self.
         */
        ref(): AuthData;
        /**
         * Decrements the reference count of `self`. The item is destroyed when the
         * count gets to 0.
         */
        unref(): void;
    }

    type ManagerClass = typeof Manager;
    abstract class ManagerPrivate {
        static $gtype: GObject.GType<ManagerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * Opaque structure. Use related accessor functions.
     */
    class Provider {
        static $gtype: GObject.GType<Provider>;

        // Constructors

        _init(...args: any[]): void;

        // Static methods

        /**
         * Frees the list `list`.
         * @param list a #GList of providers returned by some function of this library.
         */
        static list_free(list: Provider[]): void;

        // Methods

        /**
         * Get the description of the #AgProvider.
         * @returns the description of @provider, or %NULL upon failure.
         */
        get_description(): string;
        /**
         * Get the display name of the #AgProvider.
         * @returns the display name of @provider.
         */
        get_display_name(): string;
        /**
         * Get a regular expression matching all domains where this provider's accounts
         * can be used.
         * @returns a regular expression matching the domain names.
         */
        get_domains_regex(): string;
        /**
         * Gets the contents of the XML provider file.  The buffer returned in `contents`
         * should not be modified or freed, and is guaranteed to be valid as long as
         * `provider` is referenced.
         * If some error occurs, `contents` is set to %NULL.
         * @param contents location to receive the pointer to the file contents.
         */
        get_file_contents(contents: string): void;
        /**
         * Get the translation domain of the #AgProvider.
         * @returns the translation domain.
         */
        get_i18n_domain(): string;
        /**
         * Get the icon name of the #AgProvider.
         * @returns the icon_name.
         */
        get_icon_name(): string;
        /**
         * Get the name of the #AgProvider.
         * @returns the name of @provider.
         */
        get_name(): string;
        /**
         * Get the name of the account plugin which manages all accounts created from
         * this #AgProvider.
         * Some platforms might find it useful to store plugin names in the provider
         * XML files, especially when the same plugin can work for different providers.
         * @returns the plugin name for @provider, or %NULL if a plugin name is not defined.
         */
        get_plugin_name(): string;
        /**
         * Tell whether the provider doesn't support creating more than one account.
         * Note that libaccounts itself does not enforce preventing the creation of
         * multiple accounts when this flag is set: the flag is only informative, and
         * its implementation is left to the client.
         * @returns %FALSE if multiple accounts can be created from this provider, %TRUE otherwise.
         */
        get_single_account(): boolean;
        /**
         * Check whether `domain` is supported by this provider, by matching it with the
         * regex returned by ag_provider_get_domains_regex().
         * If the provider does not define a regular expression to match the supported
         * domains, this function will return %FALSE.
         * @param domain a domain name.
         * @returns %TRUE if the given domain is supported, %FALSE otherwise.
         */
        match_domain(domain: string): boolean;
        /**
         * Adds a reference to `provider`.
         * @returns @provider.
         */
        ref(): Provider;
        /**
         * Used to unreference the #AgProvider structure.
         */
        unref(): void;
    }

    /**
     * Opaque structure. Use related accessor functions.
     */
    class Service {
        static $gtype: GObject.GType<Service>;

        // Constructors

        _init(...args: any[]): void;

        // Static methods

        /**
         * Frees the list `list`.
         * @param list a #GList of services returned by some function of this library.
         */
        static list_free(list: Service[]): void;

        // Methods

        /**
         * Gets the description of the #AgService.
         * @returns the description of @service, or %NULL upon failure.
         */
        get_description(): string;
        /**
         * Gets the display name of the #AgService.
         * @returns the display name of @service.
         */
        get_display_name(): string;
        /**
         * Gets the contents of the XML service file.  The buffer returned in `contents`
         * should not be modified or freed, and is guaranteed to be valid as long as
         * `service` is referenced. If `data_offset` is not %NULL, it is set to the
         * offset where the &lt;type_data&gt; element can be found.
         * If some error occurs, `contents` is set to %NULL.
         * @param contents location to receive the pointer to the file contents.
         * @param data_offset pointer to receive the offset of the type data.
         */
        get_file_contents(contents: string, data_offset: number): void;
        /**
         * Gets the translation domain of the #AgService.
         * @returns the name of the translation catalog.
         */
        get_i18n_domain(): string;
        /**
         * Gets the icon name of the #AgService.
         * @returns the name of the icon of @service.
         */
        get_icon_name(): string;
        /**
         * Gets the name of the #AgService.
         * @returns the name of @service.
         */
        get_name(): string;
        /**
         * Gets the provider name of the #AgService.
         * @returns the name of the provider of @service.
         */
        get_provider(): string;
        /**
         * Gets the service type of the #AgService.
         * @returns the type of @service.
         */
        get_service_type(): string;
        /**
         * Get list of tags specified for the #AgService. If the service has not
         * defined tags, tags from the service type will be returned.
         * @returns #GList of tags for @service. The list must be freed with g_list_free(). Entries are owned by the #AgService type and must not be free'd.
         */
        get_tags(): string[];
        /**
         * Checks if the #AgService has the requested tag.
         * @param tag tag to check for.
         * @returns TRUE if #AgService has the tag, FALSE otherwise
         */
        has_tag(tag: string): boolean;
        /**
         * Adds a reference to `service`.
         * @returns @service.
         */
        ref(): Service;
        /**
         * Used to unreference the #AgService structure.
         */
        unref(): void;
    }

    /**
     * Opaque structure. Use related accessor functions.
     */
    class ServiceType {
        static $gtype: GObject.GType<ServiceType>;

        // Constructors

        _init(...args: any[]): void;

        // Static methods

        /**
         * Frees the list `list`.
         * @param list a #GList of service types returned by some function of this library, such as ag_manager_list_service_types().
         */
        static list_free(list: ServiceType[]): void;

        // Methods

        /**
         * Get the description of the #AgServiceType.
         * @returns the description of @service_type, or %NULL upon failure.
         */
        get_description(): string;
        /**
         * Get the display name of the #AgServiceType.
         * @returns the display name of @service_type.
         */
        get_display_name(): string;
        /**
         * Gets the contents of the XML service type file.  The buffer returned in
         * `contents` should not be modified or freed, and is guaranteed to be valid as
         * long as `service_type` is referenced.
         * If some error occurs, `contents` is set to %NULL.
         * @param contents location to receive the pointer to the file contents.
         * @param len location to receive the length of the file, in bytes.
         */
        get_file_contents(contents: string, len: number): void;
        /**
         * Get the translation domain of the #AgServiceType.
         * @returns the translation domain.
         */
        get_i18n_domain(): string;
        /**
         * Get the icon name of the #AgServiceType.
         * @returns the name of the icon of @service_type.
         */
        get_icon_name(): string;
        /**
         * Get the name of the #AgServiceType.
         * @returns the name of @service_type.
         */
        get_name(): string;
        /**
         * Get list of tags specified for the #AgServiceType.
         * @returns #GList of tags for @service_type. The list must be freed with g_list_free(). Entries are owned by the #AgServiceType type and must not be free'd.
         */
        get_tags(): string[];
        /**
         * Check if the #AgServiceType has the requested tag.
         * @param tag the tag to check for.
         * @returns TRUE if the #AgServiceType has the tag, FALSE otherwise
         */
        has_tag(tag: string): boolean;
        /**
         * Adds a reference to `service_type`.
         * @returns @service_type.
         */
        ref(): ServiceType;
        /**
         * Used to unreference the #AgServiceType structure.
         */
        unref(): void;
    }

    type AccountId = number;
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

export default Accounts;

// END
