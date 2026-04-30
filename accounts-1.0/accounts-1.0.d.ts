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

export namespace Accounts {
    /**
     * Accounts-1.0
     */

    /**
     * These identify the various errors that can occur with methods in
     * libaccounts-glib that return a {@link GLib.Error}.
     * @gir-type Struct
     */
    class AccountsError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

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
    }

    /**
     * @gir-type Enum
     */
    enum Error {
        DB,
        DISPOSED,
        DELETED,
        DB_LOCKED,
        ACCOUNT_NOT_FOUND,
    }

    /**
     * The source of a setting on a {@link Accounts.Account}.
     * @gir-type Enum
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

    const MANAGER_INTERFACE: string;
    const MANAGER_OBJECT_PATH: string;
    const MANAGER_SERVICE_NAME: string;
    function accounts_error_quark(): GLib.Quark;
    function errors_quark(): GLib.Quark;
    /**
     * Frees the list `list`.
     * @param list a {@link GLib.List} of providers returned by some function of this library.
     */
    function provider_list_free(list: Provider[]): void;
    /**
     * Frees the list `list`.
     * @param list a {@link GLib.List} of services returned by some function of this library.
     */
    function service_list_free(list: Service[]): void;
    /**
     * Frees the list `list`.
     * @param list a {@link GLib.List} of service types returned by some function of this library, such as `ag_manager_list_service_types()`.
     */
    function service_type_list_free(list: ServiceType[]): void;
    /**
     * @gir-type Callback
     */
    interface AccountNotifyCb {
        (account: Account, key: string): void;
    }
    /**
     * @gir-type Callback
     */
    interface AccountStoreCb {
        (account: Account, error: GLib.Error): void;
    }
    namespace Account {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when the account has been deleted.
             * @signal
             * @run-last
             */
            deleted: () => void;
            /**
             * Emitted when the account display name has changed.
             * @signal
             * @run-last
             */
            'display-name-changed': () => void;
            /**
             * Emitted when the account "enabled" status was changed for one of its
             * services, or for the account globally.
             * @signal
             * @run-last
             */
            enabled: (arg0: string, arg1: boolean) => void;
            'notify::display-name': (pspec: GObject.ParamSpec) => void;
            'notify::enabled': (pspec: GObject.ParamSpec) => void;
            'notify::foreign': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::manager': (pspec: GObject.ParamSpec) => void;
            'notify::provider': (pspec: GObject.ParamSpec) => void;
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
     * @gir-type Class
     */
    class Account extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<Account>;

        // Properties

        /**
         * The display name of the account.
         * @since 1.4
         * @read-only
         */
        get display_name(): string;
        /**
         * The display name of the account.
         * @since 1.4
         * @read-only
         */
        get displayName(): string;
        /**
         * Whether the account is currently enabled.
         * @since 1.4
         * @read-only
         */
        get enabled(): boolean;
        /**
         * @construct-only
         */
        set foreign(val: boolean);
        /**
         * The AgAccountId for the account.
         * @construct-only
         */
        get id(): number;
        /**
         * The {@link Accounts.Manager} from which the account was instantiated.
         * @since 1.4
         * @construct-only
         */
        get manager(): Manager;
        /**
         * The ID of the provider for the account.
         * @since 1.4
         * @construct-only
         */
        get provider(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Account.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Account.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Account.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Account.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Account.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Account.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Account.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Account.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Deletes the account. Call `ag_account_store()` in order to record the change
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
         * @returns `true` if the selected service for `account` is enabled, `false` otherwise.
         */
        get_enabled(): boolean;
        /**
         * Get the {@link Accounts.Manager} for `account`.
         * @returns the {@link Accounts.Manager}.
         */
        get_manager(): Manager;
        /**
         * Get the name of the provider of `account`.
         * @returns the name of the provider.
         */
        get_provider_name(): string;
        /**
         * Gets the selected {@link Accounts.Service} for `account`.
         * @returns the selected service, or `null` if no service is selected.
         */
        get_selected_service(): Service;
        /**
         * Creates a new iterator. This method is useful for language bindings only.
         * @param key_prefix enumerate only the settings whose key starts with `key_prefix`.
         * @returns an {@link Accounts.AccountSettingIter}.
         */
        get_settings_iter(key_prefix: string | null): AccountSettingIter;
        /**
         * Gets the value of the configuration setting `key`: `value` must be a
         * {@link GObject.Value} initialized to the type of the setting.
         * @param key the name of the setting to retrieve.
         * @param value an initialized {@link GObject.Value} to receive the setting's value.
         * @returns one of {@link Accounts.SettingSource}: {@link Accounts.SettingSource.NONE} if the setting is not present, {@link Accounts.SettingSource.ACCOUNT} if the setting comes from the account configuration, or {@link Accounts.SettingSource.PROFILE} if the value comes as predefined in the profile.
         */
        get_value(key: string, value: GObject.Value | any): [SettingSource, unknown];
        /**
         * Gets the value of the configuration setting `key`.
         * @param key the name of the setting to retrieve.
         * @returns a {@link GLib.Variant} holding the setting value, or `null`. The returned {@link GLib.Variant} is owned by the account, and no guarantees are made about its lifetime. If the client wishes to keep it, it should call `g_variant_ref()` on it.
         */
        get_variant(key: string): [GLib.Variant, SettingSource | null];
        /**
         * Gets a list of services that are enabled for `account`.
         * @returns a {@link GLib.List} of {@link Accounts.Service} items representing all the services which are enabled. Must be free'd with `ag_service_list_free()`.
         */
        list_enabled_services(): Service[];
        /**
         * Get the list of services for `account`. If the {@link Accounts.Manager} was created with
         * specified service_type this will return only services with this service_type.
         * @returns a {@link GLib.List} of {@link Accounts.Service} items representing all the services supported by this account. Must be free'd with `ag_service_list_free()`.
         */
        list_services(): Service[];
        /**
         * Get the list of services supported by `account`, filtered by `service_type`.
         * @param service_type the service type which all the returned services should provide.
         * @returns a {@link GLib.List} of {@link Accounts.Service} items representing all the services supported by this account which provide `service_type`. Must be free'd with `ag_service_list_free()`.
         */
        list_services_by_type(service_type: string): Service[];
        /**
         * Removes the notification callback identified by `watch`.
         * @param watch the watch to remove.
         */
        remove_watch(watch: AccountWatch): void;
        /**
         * Selects the configuration of service `service`: from now on, all the
         * subsequent calls on the {@link Accounts.Account} configuration will act on the `service`.
         * If `service` is `null`, the global account configuration is selected.
         *
         * Note that if `account` is being shared with other code one must take special
         * care to make sure the desired service is always selected.
         * @param service the {@link Accounts.Service} to select.
         */
        select_service(service: Service | null): void;
        /**
         * Changes the display name for `account` to `display_name`.
         * @param display_name the display name to set.
         */
        set_display_name(display_name: string): void;
        /**
         * Sets the "enabled" flag on the selected service for `account`.
         * @param enabled whether `account` should be enabled.
         */
        set_enabled(enabled: boolean): void;
        /**
         * Sets the value of the configuration setting `key` to the value `value`.
         * If `value` is `null`, then the setting is unset.
         * @param key the name of the setting to change.
         * @param value a {@link GObject.Value} holding the new setting's value.
         */
        set_value(key: string, value: GObject.Value | null): void;
        /**
         * Sets the value of the configuration setting `key` to the value `value`.
         * If `value` has a floating reference, the `account` will take ownership
         * of it.
         * If `value` is `null`, then the setting is unset.
         * @param key the name of the setting to change.
         * @param value a {@link GLib.Variant} holding the new setting's value.
         */
        set_variant(key: string, value: GLib.Variant | null): void;
        /**
         * Initializes `iter` to iterate over the account settings. If `key_prefix` is
         * not `null`, only keys whose names start with `key_prefix` will be iterated
         * over.
         * @param iter an uninitialized {@link Accounts.AccountSettingIter} structure.
         * @param key_prefix enumerate only the settings whose key starts with `key_prefix`.
         */
        settings_iter_init(iter: AccountSettingIter, key_prefix: string | null): void;
        /**
         * Creates signature of the `key` with given `token`. The account must be
         * stored prior to calling this function.
         * @param key the name of the key or prefix of the keys to be signed.
         * @param token a signing token (`null`-terminated string) for creating the signature. The application must possess (request) the token.
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
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        store_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Commit the changed account settings to the account database, and invoke
         * `callback` when the operation has been completed.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback function to be called when the settings have been written.
         */
        store_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Commit the changed account settings to the account database, and invoke
         * `callback` when the operation has been completed.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback function to be called when the settings have been written.
         */
        store_async(
            cancellable: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Commit the changed account settings to the account database, and invoke
         * `callback` when the operation has been completed.
         * @returns `true` on success, `false` on failure.
         */
        store_blocking(): boolean;
        /**
         * Finishes the store operation started by `ag_account_store_async()`.
         * @param res A {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `ag_account_store_async()`.
         * @returns `true` on success, `false` otherwise.
         */
        store_finish(res: Gio.AsyncResult): boolean;
        /**
         * Get whether `service_type` is supported on `account`.
         * @param service_type the name of the service type to check for
         * @returns `true` if `account` supports the service type `service_type`, `false` otherwise.
         */
        supports_service(service_type: string): boolean;
        /**
         * Verify if the key is signed and the signature matches the value
         * and provides the aegis token which was used for signing the `key`.
         * @param key the name of the key or prefix of the keys to be verified.
         * @param token location to receive the pointer to aegis token.
         * @returns `true` if the key is signed and the signature matches the value, `false` otherwise.
         */
        verify(key: string, token: string): boolean;
        /**
         * Verify if the `key` is signed with any of the tokens from the `tokens`
         * and the signature is valid.
         * @param key the name of the key or prefix of the keys to be verified.
         * @param tokens array of aegis tokens.
         * @returns `true` if the key is signed with any of the given tokens and the signature is valid, `false` otherwise.
         */
        verify_with_tokens(key: string, tokens: string): boolean;
        /**
         * Installs a watch on all the keys under `key_prefix`: `callback` will be
         * invoked whenever the value of any of these keys changes (or a key is
         * removed).
         * @param key_prefix the prefix of the keys to watch.
         * @param callback a {@link Accounts.AccountNotifyCb} callback to be called.
         * @returns a {@link Accounts.AccountWatch}, which can then be used to remove this watch.
         */
        watch_dir(key_prefix: string, callback: AccountNotifyCb): AccountWatch;
        /**
         * Installs a watch on `key`: `callback` will be invoked whenever the value of
         * `key` changes (or the key is removed).
         * @param key the name of the key to watch.
         * @param callback a {@link Accounts.AccountNotifyCb} callback to be called.
         * @returns a {@link Accounts.AccountWatch}, which can then be used to remove this watch.
         */
        watch_key(key: string, callback: AccountNotifyCb): AccountWatch;
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
        init(cancellable: Gio.Cancellable | null): boolean;
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
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }

    namespace AccountService {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when some setting has changed on the account service. You can
             * use the `ag_account_service_get_changed_fields()` method to retrieve the
             * list of the settings which have changed.
             * @signal
             * @run-last
             */
            changed: () => void;
            /**
             * Emitted when the service enabled state changes.
             * @signal
             * @run-last
             */
            enabled: (arg0: boolean) => void;
            'notify::account': (pspec: GObject.ParamSpec) => void;
            'notify::enabled': (pspec: GObject.ParamSpec) => void;
            'notify::service': (pspec: GObject.ParamSpec) => void;
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
     * @gir-type Class
     */
    class AccountService extends GObject.Object {
        static $gtype: GObject.GType<AccountService>;

        // Properties

        /**
         * The {@link Accounts.Account} used by the account service.
         * @since 1.4
         * @construct-only
         */
        get account(): Account;
        /**
         * Whether the account service is currently enabled. The value of
         * this property is `true` if and only if the underlying {@link Accounts.Account}
         * is enabled and the selected {@link Accounts.Service} is enabled on it. If this
         * property is `false`, applications should not try to use this
         * object.
         * @since 1.4
         * @read-only
         */
        get enabled(): boolean;
        /**
         * The {@link Accounts.Service} used by the account service.
         * @since 1.4
         * @construct-only
         */
        get service(): Service;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AccountService.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AccountService.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](account: Account, service: Service | null): AccountService;

        // Signals

        /** @signal */
        connect<K extends keyof AccountService.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AccountService.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof AccountService.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AccountService.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof AccountService.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AccountService.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Iterates over the account keys. `iter` must be an iterator previously
         * initialized with `ag_account_service_settings_iter_init()`.
         * @param iter an initialized {@link Accounts.AccountSettingIter} structure.
         */
        static settings_iter_next(iter: AccountSettingIter): [boolean, string, unknown];

        // Methods

        /**
         * Get the {@link Accounts.Account} associated with `self`.
         * @returns the underlying {@link Accounts.Account}. The reference count on it is not incremented, so if you need to use it beyond the lifetime of `self`, you need to call `g_object_ref()` on it yourself.
         */
        get_account(): Account;
        /**
         * Reads the authentication data stored in the account (merging the
         * service-specific settings with the global account settings) and returns an
         * {@link Accounts.AuthData} structure.
         * The method and mechanism are read from the "auth/method" and
         * "auth/mechanism" keys, respectively. The authentication parameters are
         * found under the "auth/&lt;method&gt;/&lt;mechanism&gt;/" group.
         * @returns a newly allocated {@link Accounts.AuthData} structure.
         */
        get_auth_data(): AuthData;
        /**
         * This method should be called only in the context of a handler of the
         * {@link Accounts.AccountService.SignalSignatures.changed | Accounts.AccountService::changed} signal, and can be used to retrieve the set of
         * changes.
         * @returns a newly allocated array of strings describing the keys of the fields which have been altered. It must be free'd with `g_strfreev()`.
         */
        get_changed_fields(): string[];
        /**
         * Checks whether the underlying {@link Accounts.Account} is enabled and the selected
         * {@link Accounts.Service} is enabled on it. If this method returns `false`, applications
         * should not try to use this object.
         * @returns `true` if the service is enabled, `false` otherwise.
         */
        get_enabled(): boolean;
        /**
         * Get the {@link Accounts.Service} associated with `self`.
         * @returns the underlying {@link Accounts.Service}. The reference count on it is not incremented, so if you need to use it beyond the lifetime of `self`, you need to call `ag_service_ref()` on it yourself.
         */
        get_service(): Service;
        /**
         * Creates a new iterator. This method is useful for language bindings only.
         * @param key_prefix enumerate only the settings whose key starts with `key_prefix`.
         * @returns an {@link Accounts.AccountSettingIter}.
         */
        get_settings_iter(key_prefix: string | null): AccountSettingIter;
        /**
         * Gets the value of the configuration setting `key`: `value` must be a
         * {@link GObject.Value} initialized to the type of the setting.
         * @param key the name of the setting to retrieve.
         * @param value an initialized {@link GObject.Value} to receive the setting's value.
         * @returns one of <type>{@link Accounts.SettingSource}</type>: {@link Accounts.SettingSource.NONE} if the setting is not present, {@link Accounts.SettingSource.ACCOUNT} if the setting comes from the account configuration, or {@link Accounts.SettingSource.PROFILE} if the value comes as predefined in the profile.
         */
        get_value(key: string, value: GObject.Value | any): [SettingSource, unknown];
        /**
         * Gets the value of the configuration setting `key`.
         * @param key the name of the setting to retrieve.
         * @returns a {@link GLib.Variant} holding the setting value, or `null`. The returned {@link GLib.Variant} is owned by the account, and no guarantees are made about its lifetime. If the client wishes to keep it, it should call `g_variant_ref()` on it.
         */
        get_variant(key: string): [GLib.Variant, SettingSource | null];
        /**
         * Sets the value of the configuration setting `key` to the value `value`.
         * If `value` is `null`, then the setting is unset.
         * @param key the name of the setting to change.
         * @param value a {@link GObject.Value} holding the new setting's value.
         */
        set_value(key: string, value: GObject.Value | null): void;
        /**
         * Sets the value of the configuration setting `key` to the value `value`.
         * If `value` has a floating reference, the `account` will take ownership
         * of it.
         * If `value` is `null`, then the setting is unset.
         * @param key the name of the setting to change.
         * @param value a {@link GLib.Variant} holding the new setting's value.
         */
        set_variant(key: string, value: GLib.Variant | null): void;
        /**
         * Initializes `iter` to iterate over the account settings. If `key_prefix` is
         * not `null`, only keys whose names start with `key_prefix` will be iterated
         * over.
         * After calling this method, one would typically call
         * `ag_account_settings_iter_get_next()` to read the settings one by one.
         * @param iter an uninitialized {@link Accounts.AccountSettingIter} structure.
         * @param key_prefix enumerate only the settings whose key starts with `key_prefix`.
         */
        settings_iter_init(iter: AccountSettingIter, key_prefix: string | null): void;
    }

    namespace Manager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when a new account has been created; note that the account must
             * have been stored in the database: the signal is not emitted just in
             * response to `ag_manager_create_account()`.
             * @signal
             * @run-last
             */
            'account-created': (arg0: number) => void;
            /**
             * Emitted when an account has been deleted.
             * This signal is redundant with {@link Accounts.Account.SignalSignatures.deleted | Accounts.Account::deleted}, but it is convenient
             * to provide full change notification with {@link Accounts.Manager}.
             * @signal
             * @run-last
             */
            'account-deleted': (arg0: number) => void;
            /**
             * Emitted when particular service of an account has been updated.
             * This signal is redundant with {@link Accounts.Account.SignalSignatures.deleted | Accounts.Account::deleted}, but it is convenient
             * to provide full change notification with {@link Accounts.Manager}.
             * @signal
             * @run-last
             */
            'account-updated': (arg0: number) => void;
            /**
             * If the manager has been created with `ag_manager_new_for_service_type()`,
             * this signal will be emitted when an account (identified by `account_id`)
             * has been modified in such a way that the application might be interested
             * to start or stop using it: the "enabled" flag on the account or in some
             * service supported by the account and matching the
             * {@link Accounts.Manager.service_type} have changed.
             * In practice, this signal might be emitted more often than when strictly
             * needed; applications must call `ag_account_list_enabled_services()` or
             * `ag_manager_list_enabled()` to get the current state.
             * @signal
             * @run-last
             */
            'enabled-event': (arg0: number) => void;
            'notify::abort-on-db-timeout': (pspec: GObject.ParamSpec) => void;
            'notify::db-timeout': (pspec: GObject.ParamSpec) => void;
            'notify::service-type': (pspec: GObject.ParamSpec) => void;
            'notify::use-dbus': (pspec: GObject.ParamSpec) => void;
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
     * @gir-type Class
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
         * If the service type is set, certain operations on the {@link Accounts.Manager}, such
         * as `ag_manager_list()` and `ag_manager_list_services()`, will be restricted
         * to only affect accounts or services with that service type.
         * @construct-only
         */
        get service_type(): string;
        /**
         * If the service type is set, certain operations on the {@link Accounts.Manager}, such
         * as `ag_manager_list()` and `ag_manager_list_services()`, will be restricted
         * to only affect accounts or services with that service type.
         * @construct-only
         */
        get serviceType(): string;
        /**
         * Whether to use D-Bus for inter-process change notification. Setting this
         * property to `false` causes libaccounts not to emit the change
         * notification signals, and also not react to changes made by other
         * processes. Disabling D-Bus is only meant to be used for specific cases,
         * such as maintenance programs.
         * @construct-only
         */
        get use_dbus(): boolean;
        /**
         * Whether to use D-Bus for inter-process change notification. Setting this
         * property to `false` causes libaccounts not to emit the change
         * notification signals, and also not react to changes made by other
         * processes. Disabling D-Bus is only meant to be used for specific cases,
         * such as maintenance programs.
         * @construct-only
         */
        get useDbus(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Manager.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Manager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Manager;

        static new_for_service_type(service_type: string): Manager;

        // Signals

        /** @signal */
        connect<K extends keyof Manager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Manager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Manager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Manager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Manager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Manager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Frees the memory taken by a {@link GLib.List} of {@link Accounts.AccountId} allocated by {@link Accounts.Manager},
         * such as by `ag_manager_list()`, `ag_manager_list_enabled()` or
         * `ag_manager_list_enabled_by_service_type()`.
         * @param list a {@link GLib.List} returned from a {@link Accounts.Manager} method which returns account IDs.
         */
        static list_free(list: AccountId[]): void;

        // Virtual methods

        /**
         * @param id
         * @virtual
         */
        vfunc_account_deleted(id: AccountId): void;

        // Methods

        /**
         * Create a new account. The account is not stored in the database until
         * `ag_account_store()` has successfully returned; the `id` field in the
         * {@link Accounts.Account} structure is also not meant to be valid until the account has
         * been stored.
         * @param provider_name name of the provider of the account.
         * @returns a new {@link Accounts.Account}, or `null`.
         */
        create_account(provider_name: string): Account;
        /**
         * Get whether the library will abort when a timeout error occurs.
         * @returns `true` is the library will abort when a timeout error occurs, `false` otherwise.
         */
        get_abort_on_db_timeout(): boolean;
        /**
         * Instantiates the object representing the account identified by
         * `account_id`.
         * @param account_id the {@link Accounts.AccountId} of the account.
         * @returns an {@link Accounts.Account}, on which the client must call `g_object_unref()` when it is no longer required, or `null` if an error occurs.
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
         *   `ag_manager_load_account()` to first load the the account, and then create
         *   the AgAccountService for that account only.
         *   </para>
         * </note>
         * @returns a list of {@link Accounts.AccountService} objects. When done with it, call `g_object_unref()` on the list elements, and `g_list_free()` on the container.
         */
        get_account_services(): AccountService[];
        /**
         * Search for `application_name` in the list of applications, and return a new
         * {@link Accounts.Application} if a matching application was found.
         * @param application_name the name of an application to search for
         * @returns a new {@link Accounts.Application} if one was found, `null` otherwise
         */
        get_application(application_name: string): Application;
        /**
         * Get the timeout of database operations for `manager`, in milliseconds.
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
         *   `ag_manager_load_account()` to first load the the account, and then create
         *   the AgAccountService for that account only.
         *   </para>
         * </note>
         * @returns a list of {@link Accounts.AccountService} objects. When done with it, call `g_object_unref()` on the list elements, and `g_list_free()` on the container.
         */
        get_enabled_account_services(): AccountService[];
        /**
         * Loads the provider identified by `provider_name`.
         * @param provider_name the name of the provider.
         * @returns an {@link Accounts.Provider}, which must be free'd with `ag_provider_unref()` when no longer required.
         */
        get_provider(provider_name: string): Provider;
        /**
         * Loads the service identified by `service_name`.
         * @param service_name the name of the service.
         * @returns an {@link Accounts.Service}, which must be free'd with `ag_service_unref()` when no longer required.
         */
        get_service(service_name: string): Service;
        /**
         * Get the service type for `manager`.
         * @returns the name of the service type for the supplied `manager`.
         */
        get_service_type(): string;
        /**
         * Lists the accounts. If the {@link Accounts.Manager} is created with a specified
         * {@link Accounts.Manager.service_type}, it will return only the accounts supporting this
         * service type.
         * @returns a {@link GLib.List} of {@link Accounts.AccountId} representing the accounts. Must be free'd with `ag_manager_list_free()` when no longer required.
         */
        list(): AccountId[];
        /**
         * Lists the registered applications which support the given service.
         * @param service the {@link Accounts.Service} for which we want to get the applications list.
         * @returns a {@link GLib.List} of all the applications which have declared support for the given service or for its service type.
         */
        list_applications_by_service(service: Service): Application[];
        /**
         * Lists the accounts supporting the given service type.
         * @param service_type the name of the service type to check for.
         * @returns a {@link GLib.List} of {@link Accounts.AccountId} representing the accounts. Must be free'd with `ag_manager_list_free()` when no longer required.
         */
        list_by_service_type(service_type: string): AccountId[];
        /**
         * Lists the enabled accounts.
         * @returns a {@link GLib.List} of the enabled {@link Accounts.AccountId} representing the accounts. Must be free'd with `ag_manager_list_free()` when no longer required.
         */
        list_enabled(): AccountId[];
        /**
         * Lists the enabled accounts supporting the given service type.
         * @param service_type the name of the service type to check for.
         * @returns a {@link GLib.List} of the enabled {@link Accounts.AccountId} representing the accounts. Must be free'd with `ag_manager_list_free()` when no longer required.
         */
        list_enabled_by_service_type(service_type: string): AccountId[];
        /**
         * Gets a list of all the installed providers.
         * @returns a list of {@link Accounts.Provider}, which must be then free'd with `ag_provider_list_free()`.
         */
        list_providers(): Provider[];
        /**
         * Gets a list of all the installed service types.
         * @returns a list of {@link Accounts.ServiceType}, which must be free'd with `ag_service_type_list_free()` when no longer required.
         */
        list_service_types(): ServiceType[];
        /**
         * Gets a list of all the installed services.
         * If the {@link Accounts.Manager} was created with a specified {@link Accounts.Manager.service_type}
         * it will return only the installed services supporting that service type.
         * @returns a list of {@link Accounts.Service}, which must be free'd with `ag_service_list_free()` when no longer required.
         */
        list_services(): Service[];
        /**
         * Gets a list of all the installed services where the service type name is
         * `service_type`.
         * @param service_type the type of the service.
         * @returns a list of {@link Accounts.Service}, which must be free'd with `ag_service_list_free()` when no longer required.
         */
        list_services_by_type(service_type: string): Service[];
        /**
         * Instantiates the object representing the account identified by
         * `account_id`.
         * @param account_id the {@link Accounts.AccountId} of the account.
         * @returns an {@link Accounts.Account}, on which the client must call `g_object_unref()` when it is no longer required, or `null` if an error occurs.
         */
        load_account(account_id: AccountId): Account;
        /**
         * Instantiate the service type with the name `service_type`.
         * @param service_type the name of the service type.
         * @returns an {@link Accounts.ServiceType}, which must be free'd with `ag_service_type_unref()` when no longer required.
         */
        load_service_type(service_type: string): ServiceType;
        /**
         * Tells libaccounts whether it should make the client application abort when
         * a timeout error occurs. The default is `false`.
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
        init(cancellable: Gio.Cancellable | null): boolean;
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
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }

    /**
     * @gir-type Alias
     */
    type AccountClass = typeof Account;
    /**
     * @gir-type Struct
     */
    abstract class AccountPrivate {
        static $gtype: GObject.GType<AccountPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type AccountServiceClass = typeof AccountService;
    /**
     * @gir-type Struct
     */
    abstract class AccountServicePrivate {
        static $gtype: GObject.GType<AccountServicePrivate>;
    }

    /**
     * Iterator for account settings.
     * @gir-type Struct
     */
    class AccountSettingIter {
        static $gtype: GObject.GType<AccountSettingIter>;

        // Fields

        account: Account;

        // Methods

        /**
         * Frees the memory associated with an {@link Accounts.AccountSettingIter}.
         */
        free(): void;
        /**
         * Iterates over the account keys. `iter` must be an iterator previously
         * initialized with `ag_account_settings_iter_init()`.
         * @returns `true` if `key` and `value` have been set, `false` if we there are no more account settings to iterate over.
         */
        get_next(): [boolean, string, GLib.Variant];
        /**
         * Iterates over the account keys. `iter` must be an iterator previously
         * initialized with `ag_account_settings_iter_init()`.
         * @returns `true` if `key` and `value` have been set, `false` if we there are no more account settings to iterate over.
         */
        next(): [boolean, string, unknown];
    }

    /**
     * An opaque struct returned from `ag_account_watch_dir()` and
     * `ag_account_watch_key()`.
     * @gir-type Struct
     */
    abstract class AccountWatch {
        static $gtype: GObject.GType<AccountWatch>;
    }

    /**
     * Opaque structure. Use related accessor functions.
     * @gir-type Struct
     */
    class Application {
        static $gtype: GObject.GType<Application>;

        // Methods

        /**
         * Get the description of the {@link Accounts.Application}.
         * @returns the description of `self`.
         */
        get_description(): string;
        /**
         * Get the `GDesktopAppInfo` of the application.
         * @returns the `GDesktopAppInfo` for `self`, or `null` if failed.
         */
        get_desktop_app_info(): never;
        /**
         * Get the translation domain of the {@link Accounts.Application}.
         * @returns the translation domain.
         */
        get_i18n_domain(): string;
        /**
         * Get the name of the {@link Accounts.Application}.
         * @returns the name of `self`.
         */
        get_name(): string;
        /**
         * Get the description from the application XML file, for the specified
         * service; if not found, get the service-type description instead.
         * @param service an {@link Accounts.Service}.
         * @returns usage description of the service.
         */
        get_service_usage(service: Service): string;
        /**
         * Increment the reference count of `self`.
         * @returns `self`.
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
     * @gir-type Struct
     */
    class AuthData {
        static $gtype: GObject.GType<AuthData>;

        // Methods

        /**
         * Gets the ID of the credentials associated with this account.
         * @returns the credentials ID.
         */
        get_credentials_id(): number;
        /**
         * Gets the authentication parameters.
         * @param extra_parameters a {@link GLib.Variant} containing client-specific authentication parameters to be added to the returned dictionary.
         * @returns a floating {@link GLib.Variant} of type `G_VARIANT_TYPE_VARDICT` containing all the authentication parameters.
         */
        get_login_parameters(extra_parameters: GLib.Variant | null): GLib.Variant;
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
         * @returns a {@link GLib.HashTable} containing all the authentication parameters.
         */
        get_parameters(): GLib.HashTable<string, GObject.Value>;
        /**
         * Insert the given authentication parameters into the authentication data. If
         * some parameters were already present, the parameters passed with this method
         * take precedence.
         * @param parameters a {@link GLib.HashTable} containing the authentication parameters to be added.
         */
        insert_parameters(parameters: { [key: string]: any } | GLib.HashTable<string, GObject.Value>): void;
        /**
         * Increment the reference count of `self`.
         * @returns `self`.
         */
        ref(): AuthData;
        /**
         * Decrements the reference count of `self`. The item is destroyed when the
         * count gets to 0.
         */
        unref(): void;
    }

    /**
     * @gir-type Alias
     */
    type ManagerClass = typeof Manager;
    /**
     * @gir-type Struct
     */
    abstract class ManagerPrivate {
        static $gtype: GObject.GType<ManagerPrivate>;
    }

    /**
     * Opaque structure. Use related accessor functions.
     * @gir-type Struct
     */
    class Provider {
        static $gtype: GObject.GType<Provider>;

        // Static methods

        /**
         * Frees the list `list`.
         * @param list a {@link GLib.List} of providers returned by some function of this library.
         */
        static list_free(list: Provider[]): void;

        // Methods

        /**
         * Get the description of the {@link Accounts.Provider}.
         * @returns the description of `provider`, or `null` upon failure.
         */
        get_description(): string;
        /**
         * Get the display name of the {@link Accounts.Provider}.
         * @returns the display name of `provider`.
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
         * If some error occurs, `contents` is set to `null`.
         * @param contents location to receive the pointer to the file contents.
         */
        get_file_contents(contents: string): void;
        /**
         * Get the translation domain of the {@link Accounts.Provider}.
         * @returns the translation domain.
         */
        get_i18n_domain(): string;
        /**
         * Get the icon name of the {@link Accounts.Provider}.
         * @returns the icon_name.
         */
        get_icon_name(): string;
        /**
         * Get the name of the {@link Accounts.Provider}.
         * @returns the name of `provider`.
         */
        get_name(): string;
        /**
         * Get the name of the account plugin which manages all accounts created from
         * this {@link Accounts.Provider}.
         * Some platforms might find it useful to store plugin names in the provider
         * XML files, especially when the same plugin can work for different providers.
         * @returns the plugin name for `provider`, or `null` if a plugin name is not defined.
         */
        get_plugin_name(): string;
        /**
         * Tell whether the provider doesn't support creating more than one account.
         * Note that libaccounts itself does not enforce preventing the creation of
         * multiple accounts when this flag is set: the flag is only informative, and
         * its implementation is left to the client.
         * @returns `false` if multiple accounts can be created from this provider, `true` otherwise.
         */
        get_single_account(): boolean;
        /**
         * Check whether `domain` is supported by this provider, by matching it with the
         * regex returned by `ag_provider_get_domains_regex()`.
         * If the provider does not define a regular expression to match the supported
         * domains, this function will return `false`.
         * @param domain a domain name.
         * @returns `true` if the given domain is supported, `false` otherwise.
         */
        match_domain(domain: string): boolean;
        /**
         * Adds a reference to `provider`.
         * @returns `provider`.
         */
        ref(): Provider;
        /**
         * Used to unreference the {@link Accounts.Provider} structure.
         */
        unref(): void;
    }

    /**
     * Opaque structure. Use related accessor functions.
     * @gir-type Struct
     */
    class Service {
        static $gtype: GObject.GType<Service>;

        // Static methods

        /**
         * Frees the list `list`.
         * @param list a {@link GLib.List} of services returned by some function of this library.
         */
        static list_free(list: Service[]): void;

        // Methods

        /**
         * Gets the description of the {@link Accounts.Service}.
         * @returns the description of `service`, or `null` upon failure.
         */
        get_description(): string;
        /**
         * Gets the display name of the {@link Accounts.Service}.
         * @returns the display name of `service`.
         */
        get_display_name(): string;
        /**
         * Gets the contents of the XML service file.  The buffer returned in `contents`
         * should not be modified or freed, and is guaranteed to be valid as long as
         * `service` is referenced. If `data_offset` is not `null`, it is set to the
         * offset where the &lt;type_data&gt; element can be found.
         * If some error occurs, `contents` is set to `null`.
         * @param contents location to receive the pointer to the file contents.
         * @param data_offset pointer to receive the offset of the type data.
         */
        get_file_contents(contents: string, data_offset: bigint | number): void;
        /**
         * Gets the translation domain of the {@link Accounts.Service}.
         * @returns the name of the translation catalog.
         */
        get_i18n_domain(): string;
        /**
         * Gets the icon name of the {@link Accounts.Service}.
         * @returns the name of the icon of `service`.
         */
        get_icon_name(): string;
        /**
         * Gets the name of the {@link Accounts.Service}.
         * @returns the name of `service`.
         */
        get_name(): string;
        /**
         * Gets the provider name of the {@link Accounts.Service}.
         * @returns the name of the provider of `service`.
         */
        get_provider(): string;
        /**
         * Gets the service type of the {@link Accounts.Service}.
         * @returns the type of `service`.
         */
        get_service_type(): string;
        /**
         * Get list of tags specified for the {@link Accounts.Service}. If the service has not
         * defined tags, tags from the service type will be returned.
         * @returns {@link GLib.List} of tags for `service`. The list must be freed with `g_list_free()`. Entries are owned by the {@link Accounts.Service} type and must not be free'd.
         */
        get_tags(): string[];
        /**
         * Checks if the {@link Accounts.Service} has the requested tag.
         * @param tag tag to check for.
         * @returns TRUE if {@link Accounts.Service} has the tag, FALSE otherwise
         */
        has_tag(tag: string): boolean;
        /**
         * Adds a reference to `service`.
         * @returns `service`.
         */
        ref(): Service;
        /**
         * Used to unreference the {@link Accounts.Service} structure.
         */
        unref(): void;
    }

    /**
     * Opaque structure. Use related accessor functions.
     * @gir-type Struct
     */
    class ServiceType {
        static $gtype: GObject.GType<ServiceType>;

        // Static methods

        /**
         * Frees the list `list`.
         * @param list a {@link GLib.List} of service types returned by some function of this library, such as `ag_manager_list_service_types()`.
         */
        static list_free(list: ServiceType[]): void;

        // Methods

        /**
         * Get the description of the {@link Accounts.ServiceType}.
         * @returns the description of `service_type`, or `null` upon failure.
         */
        get_description(): string;
        /**
         * Get the display name of the {@link Accounts.ServiceType}.
         * @returns the display name of `service_type`.
         */
        get_display_name(): string;
        /**
         * Gets the contents of the XML service type file.  The buffer returned in
         * `contents` should not be modified or freed, and is guaranteed to be valid as
         * long as `service_type` is referenced.
         * If some error occurs, `contents` is set to `null`.
         * @param contents location to receive the pointer to the file contents.
         * @param len location to receive the length of the file, in bytes.
         */
        get_file_contents(contents: string, len: bigint | number): void;
        /**
         * Get the translation domain of the {@link Accounts.ServiceType}.
         * @returns the translation domain.
         */
        get_i18n_domain(): string;
        /**
         * Get the icon name of the {@link Accounts.ServiceType}.
         * @returns the name of the icon of `service_type`.
         */
        get_icon_name(): string;
        /**
         * Get the name of the {@link Accounts.ServiceType}.
         * @returns the name of `service_type`.
         */
        get_name(): string;
        /**
         * Get list of tags specified for the {@link Accounts.ServiceType}.
         * @returns {@link GLib.List} of tags for `service_type`. The list must be freed with `g_list_free()`. Entries are owned by the {@link Accounts.ServiceType} type and must not be free'd.
         */
        get_tags(): string[];
        /**
         * Check if the {@link Accounts.ServiceType} has the requested tag.
         * @param tag the tag to check for.
         * @returns TRUE if the {@link Accounts.ServiceType} has the tag, FALSE otherwise
         */
        has_tag(tag: string): boolean;
        /**
         * Adds a reference to `service_type`.
         * @returns `service_type`.
         */
        ref(): ServiceType;
        /**
         * Used to unreference the {@link Accounts.ServiceType} structure.
         */
        unref(): void;
    }

    /**
     * ID of an account. Often used when retrieving lists of accounts from
     * {@link Accounts.Manager}.
     * @gir-type Alias
     */
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
