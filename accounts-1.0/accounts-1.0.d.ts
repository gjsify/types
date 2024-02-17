
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './accounts-1.0-ambient.d.ts';
import './accounts-1.0-import.d.ts';
/**
 * Accounts-1.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace Accounts {

/**
 * These identify the various errors that can occur with methods in
 * libaccounts-glib that return a #GError.
 */
enum AccountsError {
    /**
     * there was an error accessing the accounts database
     */
    DB,
    /**
     * the account was in the process of being
     * disposed
     */
    DISPOSED,
    /**
     * the account was in the process of being deleted
     */
    DELETED,
    /**
     * the database was locked
     */
    DB_LOCKED,
    /**
     * the requested account was not found
     */
    ACCOUNT_NOT_FOUND,
    /**
     * an asynchronous store operation is
     * already in progress. Since 1.4
     */
    STORE_IN_PROGRESS,
    /**
     * the accounts DB is in read-only mode. Since 1.4
     */
    READONLY,
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
const MANAGER_INTERFACE: string
const MANAGER_OBJECT_PATH: string
const MANAGER_SERVICE_NAME: string
function accounts_error_quark(): GLib.Quark
function errors_quark(): GLib.Quark
/**
 * Frees the list `list`.
 * @param list a #GList of providers returned by some function of this library.
 */
function provider_list_free(list: Provider[]): void
/**
 * Frees the list `list`.
 * @param list a #GList of services returned by some function of this library.
 */
function service_list_free(list: Service[]): void
/**
 * Frees the list `list`.
 * @param list a #GList of service types returned by some function of this library, such as ag_manager_list_service_types().
 */
function service_type_list_free(list: ServiceType[]): void
/**
 * This callback is invoked when the value of an account configuration setting
 * changes. If the callback was installed with ag_account_watch_key() then `key`
 * is the name of the configuration setting which changed; if it was installed
 * with ag_account_watch_dir() then `key` is the same key prefix that was used
 * when installing this callback.
 * @callback 
 * @param account the #AgAccount.
 * @param key the name of the key whose value has changed.
 */
interface AccountNotifyCb {
    (account: Account, key: string): void
}
/**
 * This callback is invoked when storing the account settings is completed. If
 * `error` is not %NULL, then some error occurred and the data has most likely
 * not been written.
 * @callback 
 * @param account the #AgAccount.
 * @param error a #GError, or %NULL.
 */
interface AccountStoreCb {
    (account: Account, error: GLib.Error): void
}
module Account {

    // Signal callback interfaces

    /**
     * Signal callback interface for `deleted`
     */
    interface DeletedSignalCallback {
        ($obj: Account): void
    }

    /**
     * Signal callback interface for `display-name-changed`
     */
    interface DisplayNameChangedSignalCallback {
        ($obj: Account): void
    }

    /**
     * Signal callback interface for `enabled`
     */
    interface EnabledSignalCallback {
        ($obj: Account, service: string | null, enabled: boolean): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Accounts-1.0.Accounts.Account

        foreign?: boolean | null
        /**
         * The AgAccountId for the account.
         */
        id?: number | null
        /**
         * The #AgManager from which the account was instantiated.
         */
        manager?: Manager | null
        /**
         * The ID of the provider for the account.
         */
        provider?: string | null
    }

}

interface Account extends Gio.Initable {

    // Own properties of Accounts-1.0.Accounts.Account

    /**
     * The display name of the account.
     */
    readonly displayName: string | null
    /**
     * Whether the account is currently enabled.
     */
    readonly enabled: boolean
    readonly foreign: boolean
    /**
     * The #AgManager from which the account was instantiated.
     */
    readonly manager: Manager
    /**
     * The ID of the provider for the account.
     */
    readonly provider: string | null

    // Own fields of Accounts-1.0.Accounts.Account

    parent_instance: GObject.Object
    id: AccountId

    // Owm methods of Accounts-1.0.Accounts.Account

    /**
     * Deletes the account. Call ag_account_store() in order to record the change
     * in the storage.
     */
    delete(): void
    /**
     * Get the display name of `account`.
     * @returns the display name.
     */
    get_display_name(): string
    /**
     * Gets whether the selected service is enabled for `account`.
     * @returns %TRUE if the selected service for @account is enabled, %FALSE otherwise.
     */
    get_enabled(): boolean
    /**
     * Get the #AgManager for `account`.
     * @returns the #AgManager.
     */
    get_manager(): Manager
    /**
     * Get the name of the provider of `account`.
     * @returns the name of the provider.
     */
    get_provider_name(): string
    /**
     * Gets the selected #AgService for `account`.
     * @returns the selected service, or %NULL if no service is selected.
     */
    get_selected_service(): Service
    /**
     * Creates a new iterator. This method is useful for language bindings only.
     * @param key_prefix enumerate only the settings whose key starts with `key_prefix`.
     * @returns an #AgAccountSettingIter.
     */
    get_settings_iter(key_prefix: string | null): AccountSettingIter
    /**
     * Gets the value of the configuration setting `key:` `value` must be a
     * #GValue initialized to the type of the setting.
     * @param key the name of the setting to retrieve.
     * @param value an initialized #GValue to receive the setting's value.
     * @returns one of #AgSettingSource: %AG_SETTING_SOURCE_NONE if the setting is not present, %AG_SETTING_SOURCE_ACCOUNT if the setting comes from the account configuration, or %AG_SETTING_SOURCE_PROFILE if the value comes as predefined in the profile.
     */
    get_value(key: string, value: any): [ /* returnType */ SettingSource, /* value */ any ]
    /**
     * Gets the value of the configuration setting `key`.
     * @param key the name of the setting to retrieve.
     * @returns a #GVariant holding the setting value, or %NULL. The returned #GVariant is owned by the account, and no guarantees are made about its lifetime. If the client wishes to keep it, it should call g_variant_ref() on it.
     */
    get_variant(key: string): [ /* returnType */ GLib.Variant, /* source */ SettingSource ]
    /**
     * Gets a list of services that are enabled for `account`.
     * @returns a #GList of #AgService items representing all the services which are enabled. Must be free'd with ag_service_list_free().
     */
    list_enabled_services(): Service[]
    /**
     * Get the list of services for `account`. If the #AgManager was created with
     * specified service_type this will return only services with this service_type.
     * @returns a #GList of #AgService items representing all the services supported by this account. Must be free'd with ag_service_list_free().
     */
    list_services(): Service[]
    /**
     * Get the list of services supported by `account,` filtered by `service_type`.
     * @param service_type the service type which all the returned services should provide.
     * @returns a #GList of #AgService items representing all the services supported by this account which provide @service_type. Must be free'd with ag_service_list_free().
     */
    list_services_by_type(service_type: string): Service[]
    /**
     * Removes the notification callback identified by `watch`.
     * @param watch the watch to remove.
     */
    remove_watch(watch: AccountWatch): void
    /**
     * Selects the configuration of service `service:` from now on, all the
     * subsequent calls on the #AgAccount configuration will act on the `service`.
     * If `service` is %NULL, the global account configuration is selected.
     * 
     * Note that if `account` is being shared with other code one must take special
     * care to make sure the desired service is always selected.
     * @param service the #AgService to select.
     */
    select_service(service: Service | null): void
    /**
     * Changes the display name for `account` to `display_name`.
     * @param display_name the display name to set.
     */
    set_display_name(display_name: string): void
    /**
     * Sets the "enabled" flag on the selected service for `account`.
     * @param enabled whether `account` should be enabled.
     */
    set_enabled(enabled: boolean): void
    /**
     * Sets the value of the configuration setting `key` to the value `value`.
     * If `value` is %NULL, then the setting is unset.
     * @param key the name of the setting to change.
     * @param value a #GValue holding the new setting's value.
     */
    set_value(key: string, value: any | null): void
    /**
     * Sets the value of the configuration setting `key` to the value `value`.
     * If `value` has a floating reference, the `account` will take ownership
     * of it.
     * If `value` is %NULL, then the setting is unset.
     * @param key the name of the setting to change.
     * @param value a #GVariant holding the new setting's value.
     */
    set_variant(key: string, value: GLib.Variant | null): void
    /**
     * Initializes `iter` to iterate over the account settings. If `key_prefix` is
     * not %NULL, only keys whose names start with `key_prefix` will be iterated
     * over.
     * @param iter an uninitialized #AgAccountSettingIter structure.
     * @param key_prefix enumerate only the settings whose key starts with `key_prefix`.
     */
    settings_iter_init(iter: AccountSettingIter, key_prefix: string | null): void
    /**
     * Creates signature of the `key` with given `token`. The account must be
     * stored prior to calling this function.
     * @param key the name of the key or prefix of the keys to be signed.
     * @param token a signing token (%NULL-terminated string) for creating the signature. The application must possess (request) the token.
     */
    sign(key: string, token: string): void
    /**
     * Commit the changed account settings to the account database, and invoke
     * `callback` when the operation has been completed.
     * @param callback function to be called when the settings have been written.
     */
    store(callback: AccountStoreCb): void
    /**
     * Commit the changed account settings to the account database, and invoke
     * `callback` when the operation has been completed.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback function to be called when the settings have been written.
     */
    store_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of store_async

    /**
     * Promisified version of {@link store_async}
     * 
     * Commit the changed account settings to the account database, and invoke
     * `callback` when the operation has been completed.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @returns A Promise of: %TRUE on success, %FALSE otherwise.
     */
    store_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Commit the changed account settings to the account database, and invoke
     * `callback` when the operation has been completed.
     * @returns %TRUE on success, %FALSE on failure.
     */
    store_blocking(): boolean
    /**
     * Finishes the store operation started by ag_account_store_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to ag_account_store_async().
     * @returns %TRUE on success, %FALSE otherwise.
     */
    store_finish(res: Gio.AsyncResult): boolean
    /**
     * Get whether `service_type` is supported on `account`.
     * @param service_type the name of the service type to check for
     * @returns %TRUE if @account supports the service type @service_type, %FALSE otherwise.
     */
    supports_service(service_type: string): boolean
    /**
     * Verify if the key is signed and the signature matches the value
     * and provides the aegis token which was used for signing the `key`.
     * @param key the name of the key or prefix of the keys to be verified.
     * @param token location to receive the pointer to aegis token.
     * @returns %TRUE if the key is signed and the signature matches the value, %FALSE otherwise.
     */
    verify(key: string, token: string): boolean
    /**
     * Verify if the `key` is signed with any of the tokens from the `tokens`
     * and the signature is valid.
     * @param key the name of the key or prefix of the keys to be verified.
     * @param tokens array of aegis tokens.
     * @returns %TRUE if the key is signed with any of the given tokens and the signature is valid, %FALSE otherwise.
     */
    verify_with_tokens(key: string, tokens: string): boolean
    /**
     * Installs a watch on all the keys under `key_prefix:` `callback` will be
     * invoked whenever the value of any of these keys changes (or a key is
     * removed).
     * @param key_prefix the prefix of the keys to watch.
     * @param callback a #AgAccountNotifyCb callback to be called.
     * @returns a #AgAccountWatch, which can then be used to remove this watch.
     */
    watch_dir(key_prefix: string, callback: AccountNotifyCb): AccountWatch
    /**
     * Installs a watch on `key:` `callback` will be invoked whenever the value of
     * `key` changes (or the key is removed).
     * @param key the name of the key to watch.
     * @param callback a #AgAccountNotifyCb callback to be called.
     * @returns a #AgAccountWatch, which can then be used to remove this watch.
     */
    watch_key(key: string, callback: AccountNotifyCb): AccountWatch

    // Own signals of Accounts-1.0.Accounts.Account

    connect(sigName: "deleted", callback: Account.DeletedSignalCallback): number
    connect_after(sigName: "deleted", callback: Account.DeletedSignalCallback): number
    emit(sigName: "deleted", ...args: any[]): void
    connect(sigName: "display-name-changed", callback: Account.DisplayNameChangedSignalCallback): number
    connect_after(sigName: "display-name-changed", callback: Account.DisplayNameChangedSignalCallback): number
    emit(sigName: "display-name-changed", ...args: any[]): void
    connect(sigName: "enabled", callback: Account.EnabledSignalCallback): number
    connect_after(sigName: "enabled", callback: Account.EnabledSignalCallback): number
    emit(sigName: "enabled", service: string | null, enabled: boolean, ...args: any[]): void

    // Class property signals of Accounts-1.0.Accounts.Account

    connect(sigName: "notify::display-name", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-name", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::enabled", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enabled", ...args: any[]): void
    connect(sigName: "notify::foreign", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::foreign", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::foreign", ...args: any[]): void
    connect(sigName: "notify::manager", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manager", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::manager", ...args: any[]): void
    connect(sigName: "notify::provider", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::provider", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Opaque structure. Use related accessor functions.
 * @class 
 */
class Account extends GObject.Object {

    // Own properties of Accounts-1.0.Accounts.Account

    static name: string
    static $gtype: GObject.GType<Account>

    // Constructors of Accounts-1.0.Accounts.Account

    constructor(config?: Account.ConstructorProperties) 
    _init(config?: Account.ConstructorProperties): void
}

module AccountService {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    interface ChangedSignalCallback {
        ($obj: AccountService): void
    }

    /**
     * Signal callback interface for `enabled`
     */
    interface EnabledSignalCallback {
        ($obj: AccountService, enabled: boolean): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Accounts-1.0.Accounts.AccountService

        /**
         * The #AgAccount used by the account service.
         */
        account?: Account | null
        /**
         * The #AgService used by the account service.
         */
        service?: Service | null
    }

}

interface AccountService {

    // Own properties of Accounts-1.0.Accounts.AccountService

    /**
     * The #AgAccount used by the account service.
     */
    readonly account: Account
    /**
     * Whether the account service is currently enabled. The value of
     * this property is %TRUE if and only if the underlying #AgAccount
     * is enabled and the selected #AgService is enabled on it. If this
     * property is %FALSE, applications should not try to use this
     * object.
     */
    readonly enabled: boolean
    /**
     * The #AgService used by the account service.
     */
    readonly service: Service

    // Own fields of Accounts-1.0.Accounts.AccountService

    parent_instance: GObject.Object
    priv: AccountServicePrivate

    // Owm methods of Accounts-1.0.Accounts.AccountService

    /**
     * Get the #AgAccount associated with `self`.
     * @returns the underlying #AgAccount. The reference count on it is not incremented, so if you need to use it beyond the lifetime of @self, you need to call g_object_ref() on it yourself.
     */
    get_account(): Account
    /**
     * Reads the authentication data stored in the account (merging the
     * service-specific settings with the global account settings) and returns an
     * #AgAuthData structure.
     * The method and mechanism are read from the "auth/method" and
     * "auth/mechanism" keys, respectively. The authentication parameters are
     * found under the "auth/&lt;method&gt;/&lt;mechanism&gt;/" group.
     * @returns a newly allocated #AgAuthData structure.
     */
    get_auth_data(): AuthData
    /**
     * This method should be called only in the context of a handler of the
     * #AgAccountService::changed signal, and can be used to retrieve the set of
     * changes.
     * @returns a newly allocated array of strings describing the keys of the fields which have been altered. It must be free'd with g_strfreev().
     */
    get_changed_fields(): string[]
    /**
     * Checks whether the underlying #AgAccount is enabled and the selected
     * #AgService is enabled on it. If this method returns %FALSE, applications
     * should not try to use this object.
     * @returns %TRUE if the service is enabled, %FALSE otherwise.
     */
    get_enabled(): boolean
    /**
     * Get the #AgService associated with `self`.
     * @returns the underlying #AgService. The reference count on it is not incremented, so if you need to use it beyond the lifetime of @self, you need to call ag_service_ref() on it yourself.
     */
    get_service(): Service
    /**
     * Creates a new iterator. This method is useful for language bindings only.
     * @param key_prefix enumerate only the settings whose key starts with `key_prefix`.
     * @returns an #AgAccountSettingIter.
     */
    get_settings_iter(key_prefix: string | null): AccountSettingIter
    /**
     * Gets the value of the configuration setting `key:` `value` must be a
     * #GValue initialized to the type of the setting.
     * @param key the name of the setting to retrieve.
     * @param value an initialized #GValue to receive the setting's value.
     * @returns one of <type>#AgSettingSource</type>: %AG_SETTING_SOURCE_NONE if the setting is not present, %AG_SETTING_SOURCE_ACCOUNT if the setting comes from the account configuration, or %AG_SETTING_SOURCE_PROFILE if the value comes as predefined in the profile.
     */
    get_value(key: string, value: any): [ /* returnType */ SettingSource, /* value */ any ]
    /**
     * Gets the value of the configuration setting `key`.
     * @param key the name of the setting to retrieve.
     * @returns a #GVariant holding the setting value, or %NULL. The returned #GVariant is owned by the account, and no guarantees are made about its lifetime. If the client wishes to keep it, it should call g_variant_ref() on it.
     */
    get_variant(key: string): [ /* returnType */ GLib.Variant, /* source */ SettingSource ]
    /**
     * Sets the value of the configuration setting `key` to the value `value`.
     * If `value` is %NULL, then the setting is unset.
     * @param key the name of the setting to change.
     * @param value a #GValue holding the new setting's value.
     */
    set_value(key: string, value: any | null): void
    /**
     * Sets the value of the configuration setting `key` to the value `value`.
     * If `value` has a floating reference, the `account` will take ownership
     * of it.
     * If `value` is %NULL, then the setting is unset.
     * @param key the name of the setting to change.
     * @param value a #GVariant holding the new setting's value.
     */
    set_variant(key: string, value: GLib.Variant | null): void
    /**
     * Initializes `iter` to iterate over the account settings. If `key_prefix` is
     * not %NULL, only keys whose names start with `key_prefix` will be iterated
     * over.
     * After calling this method, one would typically call
     * ag_account_settings_iter_get_next() to read the settings one by one.
     * @param iter an uninitialized #AgAccountSettingIter structure.
     * @param key_prefix enumerate only the settings whose key starts with `key_prefix`.
     */
    settings_iter_init(iter: AccountSettingIter, key_prefix: string | null): void

    // Own signals of Accounts-1.0.Accounts.AccountService

    connect(sigName: "changed", callback: AccountService.ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: AccountService.ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "enabled", callback: AccountService.EnabledSignalCallback): number
    connect_after(sigName: "enabled", callback: AccountService.EnabledSignalCallback): number
    emit(sigName: "enabled", enabled: boolean, ...args: any[]): void

    // Class property signals of Accounts-1.0.Accounts.AccountService

    connect(sigName: "notify::account", callback: (($obj: AccountService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::account", callback: (($obj: AccountService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::account", ...args: any[]): void
    connect(sigName: "notify::enabled", callback: (($obj: AccountService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: AccountService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enabled", ...args: any[]): void
    connect(sigName: "notify::service", callback: (($obj: AccountService, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service", callback: (($obj: AccountService, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Opaque structure. Use related accessor functions.
 * @class 
 */
class AccountService extends GObject.Object {

    // Own properties of Accounts-1.0.Accounts.AccountService

    static name: string
    static $gtype: GObject.GType<AccountService>

    // Constructors of Accounts-1.0.Accounts.AccountService

    constructor(config?: AccountService.ConstructorProperties) 
    /**
     * Constructor. If `service` is %NULL, the returned object will operate on the
     * global account settings.
     * @constructor 
     * @param account an #AgAccount.
     * @param service an #AgService supported by `account`.
     * @returns a new #AgAccountService; call g_object_unref() when you don't need this object anymore.
     */
    constructor(account: Account, service: Service | null) 
    /**
     * Constructor. If `service` is %NULL, the returned object will operate on the
     * global account settings.
     * @constructor 
     * @param account an #AgAccount.
     * @param service an #AgService supported by `account`.
     * @returns a new #AgAccountService; call g_object_unref() when you don't need this object anymore.
     */
    static new(account: Account, service: Service | null): AccountService
    _init(config?: AccountService.ConstructorProperties): void
    /**
     * Iterates over the account keys. `iter` must be an iterator previously
     * initialized with ag_account_service_settings_iter_init().
     * @param iter an initialized #AgAccountSettingIter structure.
     * @returns %TRUE if @key and @value have been set, %FALSE if we there are no more account settings to iterate over.
     */
    static settings_iter_next(iter: AccountSettingIter): [ /* returnType */ boolean, /* key */ string, /* value */ any ]
}

module Manager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `account-created`
     */
    interface AccountCreatedSignalCallback {
        ($obj: Manager, account_id: number): void
    }

    /**
     * Signal callback interface for `account-deleted`
     */
    interface AccountDeletedSignalCallback {
        ($obj: Manager, account_id: number): void
    }

    /**
     * Signal callback interface for `account-updated`
     */
    interface AccountUpdatedSignalCallback {
        ($obj: Manager, account_id: number): void
    }

    /**
     * Signal callback interface for `enabled-event`
     */
    interface EnabledEventSignalCallback {
        ($obj: Manager, account_id: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Accounts-1.0.Accounts.Manager

        /**
         * Whether to abort the application when a database timeout occurs.
         */
        abortOnDbTimeout?: boolean | null
        /**
         * Timeout for database operations, in milliseconds.
         */
        dbTimeout?: number | null
        /**
         * If the service type is set, certain operations on the #AgManager, such
         * as ag_manager_list() and ag_manager_list_services(), will be restricted
         * to only affect accounts or services with that service type.
         */
        serviceType?: string | null
        /**
         * Whether to use D-Bus for inter-process change notification. Setting this
         * property to %FALSE causes libaccounts not to emit the change
         * notification signals, and also not react to changes made by other
         * processes. Disabling D-Bus is only meant to be used for specific cases,
         * such as maintenance programs.
         */
        useDbus?: boolean | null
    }

}

interface Manager extends Gio.Initable {

    // Own properties of Accounts-1.0.Accounts.Manager

    /**
     * Whether to abort the application when a database timeout occurs.
     */
    abortOnDbTimeout: boolean
    /**
     * Timeout for database operations, in milliseconds.
     */
    dbTimeout: number
    /**
     * If the service type is set, certain operations on the #AgManager, such
     * as ag_manager_list() and ag_manager_list_services(), will be restricted
     * to only affect accounts or services with that service type.
     */
    readonly serviceType: string | null
    /**
     * Whether to use D-Bus for inter-process change notification. Setting this
     * property to %FALSE causes libaccounts not to emit the change
     * notification signals, and also not react to changes made by other
     * processes. Disabling D-Bus is only meant to be used for specific cases,
     * such as maintenance programs.
     */
    readonly useDbus: boolean

    // Own fields of Accounts-1.0.Accounts.Manager

    parent_instance: GObject.Object

    // Owm methods of Accounts-1.0.Accounts.Manager

    /**
     * Create a new account. The account is not stored in the database until
     * ag_account_store() has successfully returned; the `id` field in the
     * #AgAccount structure is also not meant to be valid until the account has
     * been stored.
     * @param provider_name name of the provider of the account.
     * @returns a new #AgAccount, or %NULL.
     */
    create_account(provider_name: string): Account
    /**
     * Get whether the library will abort when a timeout error occurs.
     * @returns %TRUE is the library will abort when a timeout error occurs, %FALSE otherwise.
     */
    get_abort_on_db_timeout(): boolean
    /**
     * Instantiates the object representing the account identified by
     * `account_id`.
     * @param account_id the #AgAccountId of the account.
     * @returns an #AgAccount, on which the client must call g_object_unref() when it is no longer required, or %NULL if an error occurs.
     */
    get_account(account_id: AccountId): Account
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
    get_account_services(): AccountService[]
    /**
     * Search for `application_name` in the list of applications, and return a new
     * #AgApplication if a matching application was found.
     * @param application_name the name of an application to search for
     * @returns a new #AgApplication if one was found, %NULL otherwise
     */
    get_application(application_name: string): Application
    /**
     * Get the timeout of database operations for `manager,` in milliseconds.
     * @returns the timeout (in milliseconds) for database operations.
     */
    get_db_timeout(): number
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
    get_enabled_account_services(): AccountService[]
    /**
     * Loads the provider identified by `provider_name`.
     * @param provider_name the name of the provider.
     * @returns an #AgProvider, which must be free'd with ag_provider_unref() when no longer required.
     */
    get_provider(provider_name: string): Provider
    /**
     * Loads the service identified by `service_name`.
     * @param service_name the name of the service.
     * @returns an #AgService, which must be free'd with ag_service_unref() when no longer required.
     */
    get_service(service_name: string): Service
    /**
     * Get the service type for `manager`.
     * @returns the name of the service type for the supplied @manager.
     */
    get_service_type(): string
    /**
     * Lists the accounts. If the #AgManager is created with a specified
     * #AgManager:service-type, it will return only the accounts supporting this
     * service type.
     * @returns a #GList of #AgAccountId representing the accounts. Must be free'd with ag_manager_list_free() when no longer required.
     */
    list(): AccountId[]
    /**
     * Lists the registered applications which support the given service.
     * @param service the #AgService for which we want to get the applications list.
     * @returns a #GList of all the applications which have declared support for the given service or for its service type.
     */
    list_applications_by_service(service: Service): Application[]
    /**
     * Lists the accounts supporting the given service type.
     * @param service_type the name of the service type to check for.
     * @returns a #GList of #AgAccountId representing the accounts. Must be free'd with ag_manager_list_free() when no longer required.
     */
    list_by_service_type(service_type: string): AccountId[]
    /**
     * Lists the enabled accounts.
     * @returns a #GList of the enabled #AgAccountId representing the accounts. Must be free'd with ag_manager_list_free() when no longer required.
     */
    list_enabled(): AccountId[]
    /**
     * Lists the enabled accounts supporting the given service type.
     * @param service_type the name of the service type to check for.
     * @returns a #GList of the enabled #AgAccountId representing the accounts. Must be free'd with ag_manager_list_free() when no longer required.
     */
    list_enabled_by_service_type(service_type: string): AccountId[]
    /**
     * Gets a list of all the installed providers.
     * @returns a list of #AgProvider, which must be then free'd with ag_provider_list_free().
     */
    list_providers(): Provider[]
    /**
     * Gets a list of all the installed service types.
     * @returns a list of #AgServiceType, which must be free'd with ag_service_type_list_free() when no longer required.
     */
    list_service_types(): ServiceType[]
    /**
     * Gets a list of all the installed services.
     * If the #AgManager was created with a specified #AgManager:service_type
     * it will return only the installed services supporting that service type.
     * @returns a list of #AgService, which must be free'd with ag_service_list_free() when no longer required.
     */
    list_services(): Service[]
    /**
     * Gets a list of all the installed services where the service type name is
     * `service_type`.
     * @param service_type the type of the service.
     * @returns a list of #AgService, which must be free'd with ag_service_list_free() when no longer required.
     */
    list_services_by_type(service_type: string): Service[]
    /**
     * Instantiates the object representing the account identified by
     * `account_id`.
     * @param account_id the #AgAccountId of the account.
     * @returns an #AgAccount, on which the client must call g_object_unref() when it is no longer required, or %NULL if an error occurs.
     */
    load_account(account_id: AccountId): Account
    /**
     * Instantiate the service type with the name `service_type`.
     * @param service_type the name of the service type.
     * @returns an #AgServiceType, which must be free'd with ag_service_type_unref() when no longer required.
     */
    load_service_type(service_type: string): ServiceType
    /**
     * Tells libaccounts whether it should make the client application abort when
     * a timeout error occurs. The default is %FALSE.
     * @param abort whether to abort when a DB timeout occurs.
     */
    set_abort_on_db_timeout(abort: boolean): void
    /**
     * Sets the timeout for database operations. This tells the library how long
     * it is allowed to block while waiting for a locked DB to become accessible.
     * Higher values mean a higher chance of successful reads, but also mean that
     * the execution might be blocked for a longer time.
     * The default is 5 seconds.
     * @param timeout_ms the new timeout, in milliseconds.
     */
    set_db_timeout(timeout_ms: number): void

    // Own virtual methods of Accounts-1.0.Accounts.Manager

    vfunc_account_deleted(id: AccountId): void

    // Own signals of Accounts-1.0.Accounts.Manager

    connect(sigName: "account-created", callback: Manager.AccountCreatedSignalCallback): number
    connect_after(sigName: "account-created", callback: Manager.AccountCreatedSignalCallback): number
    emit(sigName: "account-created", account_id: number, ...args: any[]): void
    connect(sigName: "account-deleted", callback: Manager.AccountDeletedSignalCallback): number
    connect_after(sigName: "account-deleted", callback: Manager.AccountDeletedSignalCallback): number
    emit(sigName: "account-deleted", account_id: number, ...args: any[]): void
    connect(sigName: "account-updated", callback: Manager.AccountUpdatedSignalCallback): number
    connect_after(sigName: "account-updated", callback: Manager.AccountUpdatedSignalCallback): number
    emit(sigName: "account-updated", account_id: number, ...args: any[]): void
    connect(sigName: "enabled-event", callback: Manager.EnabledEventSignalCallback): number
    connect_after(sigName: "enabled-event", callback: Manager.EnabledEventSignalCallback): number
    emit(sigName: "enabled-event", account_id: number, ...args: any[]): void

    // Class property signals of Accounts-1.0.Accounts.Manager

    connect(sigName: "notify::abort-on-db-timeout", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::abort-on-db-timeout", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::abort-on-db-timeout", ...args: any[]): void
    connect(sigName: "notify::db-timeout", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::db-timeout", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::db-timeout", ...args: any[]): void
    connect(sigName: "notify::service-type", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::service-type", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::service-type", ...args: any[]): void
    connect(sigName: "notify::use-dbus", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-dbus", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-dbus", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Opaque structure. Use related accessor functions.
 * @class 
 */
class Manager extends GObject.Object {

    // Own properties of Accounts-1.0.Accounts.Manager

    static name: string
    static $gtype: GObject.GType<Manager>

    // Constructors of Accounts-1.0.Accounts.Manager

    constructor(config?: Manager.ConstructorProperties) 
    /**
     * Create a new #AgManager.
     * @constructor 
     * @returns an instance of an #AgManager.
     */
    constructor() 
    /**
     * Create a new #AgManager.
     * @constructor 
     * @returns an instance of an #AgManager.
     */
    static new(): Manager
    /**
     * Create a new #AgManager with the service type with the name `service_type`.
     * @constructor 
     * @param service_type the name of a service type
     * @returns an #AgManager instance with the specified service type.
     */
    static new_for_service_type(service_type: string): Manager
    _init(config?: Manager.ConstructorProperties): void
    /**
     * Frees the memory taken by a #GList of #AgAccountId allocated by #AgManager,
     * such as by ag_manager_list(), ag_manager_list_enabled() or
     * ag_manager_list_enabled_by_service_type().
     * @param list a #GList returned from a #AgManager method which returns account IDs.
     */
    static list_free(list: AccountId[]): void
}

interface AccountClass {

    // Own fields of Accounts-1.0.Accounts.AccountClass

    parent_class: GObject.ObjectClass
}

/**
 * Use the accessor functions below.
 * @record 
 */
abstract class AccountClass {

    // Own properties of Accounts-1.0.Accounts.AccountClass

    static name: string
}

interface AccountPrivate {
}

class AccountPrivate {

    // Own properties of Accounts-1.0.Accounts.AccountPrivate

    static name: string
}

interface AccountServiceClass {

    // Own fields of Accounts-1.0.Accounts.AccountServiceClass

    parent_class: GObject.ObjectClass
}

/**
 * Use the accessor functions below.
 * @record 
 */
abstract class AccountServiceClass {

    // Own properties of Accounts-1.0.Accounts.AccountServiceClass

    static name: string
}

interface AccountServicePrivate {
}

class AccountServicePrivate {

    // Own properties of Accounts-1.0.Accounts.AccountServicePrivate

    static name: string
}

interface AccountSettingIter {

    // Own fields of Accounts-1.0.Accounts.AccountSettingIter

    /**
     * the AgAccount to iterate over
     * @field 
     */
    account: Account

    // Owm methods of Accounts-1.0.Accounts.AccountSettingIter

    /**
     * Frees the memory associated with an #AgAccountSettingIter.
     */
    free(): void
    /**
     * Iterates over the account keys. `iter` must be an iterator previously
     * initialized with ag_account_settings_iter_init().
     * @returns %TRUE if @key and @value have been set, %FALSE if we there are no more account settings to iterate over.
     */
    get_next(): [ /* returnType */ boolean, /* key */ string, /* value */ GLib.Variant ]
    /**
     * Iterates over the account keys. `iter` must be an iterator previously
     * initialized with ag_account_settings_iter_init().
     * @returns %TRUE if @key and @value have been set, %FALSE if we there are no more account settings to iterate over.
     */
    next(): [ /* returnType */ boolean, /* key */ string, /* value */ any ]
}

/**
 * Iterator for account settings.
 * @record 
 */
class AccountSettingIter {

    // Own properties of Accounts-1.0.Accounts.AccountSettingIter

    static name: string
}

interface AccountWatch {
}

/**
 * An opaque struct returned from ag_account_watch_dir() and
 * ag_account_watch_key().
 * @record 
 */
class AccountWatch {

    // Own properties of Accounts-1.0.Accounts.AccountWatch

    static name: string
}

interface Application {

    // Owm methods of Accounts-1.0.Accounts.Application

    /**
     * Get the description of the #AgApplication.
     * @returns the description of @self.
     */
    get_description(): string
    /**
     * Get the #GDesktopAppInfo of the application.
     * @returns the #GDesktopAppInfo for @self, or %NULL if failed.
     */
    get_desktop_app_info(): Gio.DesktopAppInfo
    /**
     * Get the translation domain of the #AgApplication.
     * @returns the translation domain.
     */
    get_i18n_domain(): string
    /**
     * Get the name of the #AgApplication.
     * @returns the name of @self.
     */
    get_name(): string
    /**
     * Get the description from the application XML file, for the specified
     * service; if not found, get the service-type description instead.
     * @param service an #AgService.
     * @returns usage description of the service.
     */
    get_service_usage(service: Service): string
    /**
     * Increment the reference count of `self`.
     * @returns @self.
     */
    ref(): Application
    /**
     * Decrements the reference count of `self`. The item is destroyed when the
     * count gets to 0.
     */
    unref(): void
}

/**
 * Opaque structure. Use related accessor functions.
 * @record 
 */
class Application {

    // Own properties of Accounts-1.0.Accounts.Application

    static name: string
}

interface AuthData {

    // Owm methods of Accounts-1.0.Accounts.AuthData

    /**
     * Gets the ID of the credentials associated with this account.
     * @returns the credentials ID.
     */
    get_credentials_id(): number
    /**
     * Gets the authentication parameters.
     * @param extra_parameters a #GVariant containing client-specific authentication parameters to be added to the returned dictionary.
     * @returns a floating #GVariant of type %G_VARIANT_TYPE_VARDICT containing all the authentication parameters.
     */
    get_login_parameters(extra_parameters: GLib.Variant | null): GLib.Variant
    /**
     * Gets the authentication mechanism.
     * @returns the authentication mechanism.
     */
    get_mechanism(): string
    /**
     * Gets the authentication method.
     * @returns the authentication method.
     */
    get_method(): string
    /**
     * Gets the authentication parameters.
     * @returns a #GHashTable containing all the authentication parameters.
     */
    get_parameters(): GLib.HashTable
    /**
     * Insert the given authentication parameters into the authentication data. If
     * some parameters were already present, the parameters passed with this method
     * take precedence.
     * @param parameters a #GHashTable containing the authentication parameters to be added.
     */
    insert_parameters(parameters: GLib.HashTable): void
    /**
     * Increment the reference count of `self`.
     * @returns @self.
     */
    ref(): AuthData
    /**
     * Decrements the reference count of `self`. The item is destroyed when the
     * count gets to 0.
     */
    unref(): void
}

/**
 * Opaque structure. Use related accessor functions.
 * @record 
 */
class AuthData {

    // Own properties of Accounts-1.0.Accounts.AuthData

    static name: string
}

interface ManagerClass {

    // Own fields of Accounts-1.0.Accounts.ManagerClass

    parent_class: GObject.ObjectClass
    account_deleted: (manager: Manager, id: AccountId) => void
}

/**
 * Use the accessor functions below.
 * @record 
 */
abstract class ManagerClass {

    // Own properties of Accounts-1.0.Accounts.ManagerClass

    static name: string
}

interface ManagerPrivate {
}

class ManagerPrivate {

    // Own properties of Accounts-1.0.Accounts.ManagerPrivate

    static name: string
}

interface Provider {

    // Owm methods of Accounts-1.0.Accounts.Provider

    /**
     * Get the description of the #AgProvider.
     * @returns the description of @provider, or %NULL upon failure.
     */
    get_description(): string
    /**
     * Get the display name of the #AgProvider.
     * @returns the display name of @provider.
     */
    get_display_name(): string
    /**
     * Get a regular expression matching all domains where this provider's accounts
     * can be used.
     * @returns a regular expression matching the domain names.
     */
    get_domains_regex(): string
    /**
     * Gets the contents of the XML provider file.  The buffer returned in `contents`
     * should not be modified or freed, and is guaranteed to be valid as long as
     * `provider` is referenced.
     * If some error occurs, `contents` is set to %NULL.
     * @param contents location to receive the pointer to the file contents.
     */
    get_file_contents(contents: string): void
    /**
     * Get the translation domain of the #AgProvider.
     * @returns the translation domain.
     */
    get_i18n_domain(): string
    /**
     * Get the icon name of the #AgProvider.
     * @returns the icon_name.
     */
    get_icon_name(): string
    /**
     * Get the name of the #AgProvider.
     * @returns the name of @provider.
     */
    get_name(): string
    /**
     * Get the name of the account plugin which manages all accounts created from
     * this #AgProvider.
     * Some platforms might find it useful to store plugin names in the provider
     * XML files, especially when the same plugin can work for different providers.
     * @returns the plugin name for @provider, or %NULL if a plugin name is not defined.
     */
    get_plugin_name(): string
    /**
     * Tell whether the provider doesn't support creating more than one account.
     * Note that libaccounts itself does not enforce preventing the creation of
     * multiple accounts when this flag is set: the flag is only informative, and
     * its implementation is left to the client.
     * @returns %FALSE if multiple accounts can be created from this provider, %TRUE otherwise.
     */
    get_single_account(): boolean
    /**
     * Check whether `domain` is supported by this provider, by matching it with the
     * regex returned by ag_provider_get_domains_regex().
     * If the provider does not define a regular expression to match the supported
     * domains, this function will return %FALSE.
     * @param domain a domain name.
     * @returns %TRUE if the given domain is supported, %FALSE otherwise.
     */
    match_domain(domain: string): boolean
    /**
     * Adds a reference to `provider`.
     * @returns @provider.
     */
    ref(): Provider
    /**
     * Used to unreference the #AgProvider structure.
     */
    unref(): void
}

/**
 * Opaque structure. Use related accessor functions.
 * @record 
 */
class Provider {

    // Own properties of Accounts-1.0.Accounts.Provider

    static name: string

    // Constructors of Accounts-1.0.Accounts.Provider

    /**
     * Frees the list `list`.
     * @param list a #GList of providers returned by some function of this library.
     */
    static list_free(list: Provider[]): void
}

interface Service {

    // Owm methods of Accounts-1.0.Accounts.Service

    /**
     * Gets the description of the #AgService.
     * @returns the description of @service, or %NULL upon failure.
     */
    get_description(): string
    /**
     * Gets the display name of the #AgService.
     * @returns the display name of @service.
     */
    get_display_name(): string
    /**
     * Gets the contents of the XML service file.  The buffer returned in `contents`
     * should not be modified or freed, and is guaranteed to be valid as long as
     * `service` is referenced. If `data_offset` is not %NULL, it is set to the
     * offset where the &lt;type_data&gt; element can be found.
     * If some error occurs, `contents` is set to %NULL.
     * @param contents location to receive the pointer to the file contents.
     * @param data_offset pointer to receive the offset of the type data.
     */
    get_file_contents(contents: string, data_offset: number): void
    /**
     * Gets the translation domain of the #AgService.
     * @returns the name of the translation catalog.
     */
    get_i18n_domain(): string
    /**
     * Gets the icon name of the #AgService.
     * @returns the name of the icon of @service.
     */
    get_icon_name(): string
    /**
     * Gets the name of the #AgService.
     * @returns the name of @service.
     */
    get_name(): string
    /**
     * Gets the provider name of the #AgService.
     * @returns the name of the provider of @service.
     */
    get_provider(): string
    /**
     * Gets the service type of the #AgService.
     * @returns the type of @service.
     */
    get_service_type(): string
    /**
     * Get list of tags specified for the #AgService. If the service has not
     * defined tags, tags from the service type will be returned.
     * @returns #GList of tags for @service. The list must be freed with g_list_free(). Entries are owned by the #AgService type and must not be free'd.
     */
    get_tags(): string[]
    /**
     * Checks if the #AgService has the requested tag.
     * @param tag tag to check for.
     * @returns TRUE if #AgService has the tag, FALSE otherwise
     */
    has_tag(tag: string): boolean
    /**
     * Adds a reference to `service`.
     * @returns @service.
     */
    ref(): Service
    /**
     * Used to unreference the #AgService structure.
     */
    unref(): void
}

/**
 * Opaque structure. Use related accessor functions.
 * @record 
 */
class Service {

    // Own properties of Accounts-1.0.Accounts.Service

    static name: string

    // Constructors of Accounts-1.0.Accounts.Service

    /**
     * Frees the list `list`.
     * @param list a #GList of services returned by some function of this library.
     */
    static list_free(list: Service[]): void
}

interface ServiceType {

    // Owm methods of Accounts-1.0.Accounts.ServiceType

    /**
     * Get the description of the #AgServiceType.
     * @returns the description of @service_type, or %NULL upon failure.
     */
    get_description(): string
    /**
     * Get the display name of the #AgServiceType.
     * @returns the display name of @service_type.
     */
    get_display_name(): string
    /**
     * Gets the contents of the XML service type file.  The buffer returned in
     * `contents` should not be modified or freed, and is guaranteed to be valid as
     * long as `service_type` is referenced.
     * If some error occurs, `contents` is set to %NULL.
     * @param contents location to receive the pointer to the file contents.
     * @param len location to receive the length of the file, in bytes.
     */
    get_file_contents(contents: string, len: number): void
    /**
     * Get the translation domain of the #AgServiceType.
     * @returns the translation domain.
     */
    get_i18n_domain(): string
    /**
     * Get the icon name of the #AgServiceType.
     * @returns the name of the icon of @service_type.
     */
    get_icon_name(): string
    /**
     * Get the name of the #AgServiceType.
     * @returns the name of @service_type.
     */
    get_name(): string
    /**
     * Get list of tags specified for the #AgServiceType.
     * @returns #GList of tags for @service_type. The list must be freed with g_list_free(). Entries are owned by the #AgServiceType type and must not be free'd.
     */
    get_tags(): string[]
    /**
     * Check if the #AgServiceType has the requested tag.
     * @param tag the tag to check for.
     * @returns TRUE if the #AgServiceType has the tag, FALSE otherwise
     */
    has_tag(tag: string): boolean
    /**
     * Adds a reference to `service_type`.
     * @returns @service_type.
     */
    ref(): ServiceType
    /**
     * Used to unreference the #AgServiceType structure.
     */
    unref(): void
}

/**
 * Opaque structure. Use related accessor functions.
 * @record 
 */
class ServiceType {

    // Own properties of Accounts-1.0.Accounts.ServiceType

    static name: string

    // Constructors of Accounts-1.0.Accounts.ServiceType

    /**
     * Frees the list `list`.
     * @param list a #GList of service types returned by some function of this library, such as ag_manager_list_service_types().
     */
    static list_free(list: ServiceType[]): void
}

    type AccountId = number
/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default Accounts;
// END