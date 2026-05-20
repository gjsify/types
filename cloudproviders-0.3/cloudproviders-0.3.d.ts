
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

export namespace CloudProviders {

    /**
     * CloudProviders-0.3
     */


    /**
     * @gir-type Enum
     */
    enum AccountStatus {
        INVALID,
        IDLE,
        SYNCING,
        ERROR,
    }


    const ACCOUNT_DBUS_IFACE: string;

    const PROVIDER_DBUS_IFACE: string;

    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Account.top_of_page">org.freedesktop.CloudProviders.Account</link> D-Bus interface.
     * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
     */
    function dbus_account_interface_info(): Gio.DBusInterfaceInfo;

    /**
     * Overrides all {@link GObject.Object} properties in the {@link CloudProviders.DbusAccount} interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a {@link GObject.Object} derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function dbus_account_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;

    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Provider.top_of_page">org.freedesktop.CloudProviders.Provider</link> D-Bus interface.
     * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
     */
    function dbus_provider_interface_info(): Gio.DBusInterfaceInfo;

    /**
     * Overrides all {@link GObject.Object} properties in the {@link CloudProviders.DbusProvider} interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a {@link GObject.Object} derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function dbus_provider_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;

    namespace Account {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::action-group": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::menu-model": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::path": (pspec: GObject.ParamSpec) => void;
            "notify::status-details": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            action_group: Gio.ActionGroup;
            actionGroup: Gio.ActionGroup;
            icon: Gio.Icon;
            menu_model: Gio.MenuModel;
            menuModel: Gio.MenuModel;
            name: string;
            path: string;
            status_details: string;
            statusDetails: string;
        }
    }

    /**
     * {@link CloudProviders.Account} is the basic object used to construct the integrator UI
     * and actions that a provider will present to the user, from the client side.
     * Integrators of the cloud providers can use this object to poll the
     * {@link CloudProviders.Provider} menus, status and actions.
     * @gir-type Class
     */
    class Account extends GObject.Object {
        static $gtype: GObject.GType<Account>;

        // Properties
        /**
         * @read-only
         */
        get action_group(): Gio.ActionGroup;

        /**
         * @read-only
         */
        get actionGroup(): Gio.ActionGroup;

        /**
         * @read-only
         */
        get icon(): Gio.Icon;

        /**
         * @read-only
         */
        get menu_model(): Gio.MenuModel;

        /**
         * @read-only
         */
        get menuModel(): Gio.MenuModel;

        /**
         * @read-only
         * @default null
         */
        get name(): string;

        /**
         * @read-only
         * @default null
         */
        get path(): string;

        /**
         * @read-only
         * @default null
         */
        get status_details(): string;

        /**
         * @read-only
         * @default null
         */
        get statusDetails(): string;

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

        static ["new"](proxy: Gio.DBusProxy): Account;

        // Signals
        /** @signal */
        connect<K extends keyof Account.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Account.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Account.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Account.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Account.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Account.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Get the action group exported in addition to the {@link Gio.MenuModel} from
         * `cloud_providers_account_get_menu_model()`
         * @returns The action group exported by the cloud provider account
         */
        get_action_group(): Gio.ActionGroup;

        /**
         * Get the icon of the account
         * @returns The icon of the cloud provider account
         */
        get_icon(): Gio.Icon;

        /**
         * Get the menu model exported for the account
         * @returns The menu model exported by the cloud provider account
         */
        get_menu_model(): Gio.MenuModel;

        /**
         * Get the name of the account
         * @returns The name of the cloud provider account
         */
        get_name(): string;

        /**
         * Get the directory path of the account
         * @returns The directory path of the cloud provider account
         */
        get_path(): string;

        /**
         * Get the status of the account
         * @returns The status of the cloud provider account
         */
        get_status(): AccountStatus;

        /**
         * Get the status details of the account
         * @returns The status detail description of the cloud provider account
         */
        get_status_details(): string;
    }


    namespace AccountExporter {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::action-group": (pspec: GObject.ParamSpec) => void;
            "notify::bus-name": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::menu-model": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::path": (pspec: GObject.ParamSpec) => void;
            "notify::provider": (pspec: GObject.ParamSpec) => void;
            "notify::status-details": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            action_group: Gio.ActionGroup;
            actionGroup: Gio.ActionGroup;
            bus_name: string;
            busName: string;
            icon: Gio.Icon;
            menu_model: Gio.MenuModel;
            menuModel: Gio.MenuModel;
            name: string;
            path: string;
            provider: ProviderExporter;
            status_details: string;
            statusDetails: string;
        }
    }

    /**
     * @gir-type Class
     */
    class AccountExporter extends GObject.Object {
        static $gtype: GObject.GType<AccountExporter>;

        // Properties
        get action_group(): Gio.ActionGroup;
        set action_group(val: Gio.ActionGroup);

        get actionGroup(): Gio.ActionGroup;
        set actionGroup(val: Gio.ActionGroup);

        /**
         * @construct-only
         * @default null
         */
        get bus_name(): string;

        /**
         * @construct-only
         * @default null
         */
        get busName(): string;

        get icon(): Gio.Icon;
        set icon(val: Gio.Icon);

        get menu_model(): Gio.MenuModel;
        set menu_model(val: Gio.MenuModel);

        get menuModel(): Gio.MenuModel;
        set menuModel(val: Gio.MenuModel);

        /**
         * @default null
         */
        get name(): string;
        set name(val: string);

        /**
         * @default null
         */
        get path(): string;
        set path(val: string);

        /**
         * @construct-only
         */
        get provider(): ProviderExporter;

        /**
         * @default null
         */
        get status_details(): string;
        set status_details(val: string);

        /**
         * @default null
         */
        get statusDetails(): string;
        set statusDetails(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AccountExporter.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AccountExporter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](provider: ProviderExporter, bus_name: string): AccountExporter;

        // Signals
        /** @signal */
        connect<K extends keyof AccountExporter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AccountExporter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AccountExporter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AccountExporter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AccountExporter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AccountExporter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * In order for a menu exported with cloud_providers_account_exporter_export_menu to receive events
         * that will eventually call your callbacks, it needs the corresponding GActionGroup.
         * Use this function to export it.
         * @param action_group The GActionGroup to be used by the menu exported by cloud_providers_account_exporter_export_menu
         */
        set_action_group(action_group: Gio.ActionGroup): void;

        /**
         * @param icon 
         */
        set_icon(icon: Gio.Icon): void;

        /**
         * One of the benefits of the integration is to display a menu with available
         * options for an account. Use this function to export a GMenuModel menu to be
         * displayed by the chosen integration by the desktop environment or application.
         * @param menu_model The menu model to export
         */
        set_menu_model(menu_model: Gio.MenuModel): void;

        /**
         * @param name 
         */
        set_name(name: string): void;

        /**
         * @param path 
         */
        set_path(path: string): void;

        /**
         * @param status 
         */
        set_status(status: AccountStatus): void;

        /**
         * @param status_details 
         */
        set_status_details(status_details: string): void;
    }


    namespace Collector {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            "providers-changed": () => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * {@link CloudProviders.Collector} is a singleton to track all the changes in all providers.
     * Using a {@link CloudProviders.Collector} you can implement integration for all of them at once
     * and represent them in the UI, track new providers added or removed and their
     * status.
     * @gir-type Class
     */
    class Collector extends GObject.Object {
        static $gtype: GObject.GType<Collector>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Collector.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Collector.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Collector.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Collector.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Collector.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Collector.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Collector.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Collector.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Main object to track changes in all providers.
         */
        static dup_singleton(): Collector;

        // Methods
        /**
         * @returns A GList* of {@link CloudProviders.Provider} objects.
         */
        get_providers(): Provider[];

        update(): void;
    }


    namespace DbusAccountProxy {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::path": (pspec: GObject.ParamSpec) => void;
            "notify::status": (pspec: GObject.ParamSpec) => void;
            "notify::status-details": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, DbusAccount.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps {}
    }

    /**
     * The {@link CloudProviders.DbusAccountProxy} structure contains only private data and should only be accessed using the provided API.
     * @gir-type Class
     */
    class DbusAccountProxy extends Gio.DBusProxy implements DbusAccount, Gio.AsyncInitable<DbusAccountProxy>, Gio.DBusInterface, Gio.Initable {
        static $gtype: GObject.GType<DbusAccountProxy>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DbusAccountProxy.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DbusAccountProxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_finish(res: Gio.AsyncResult): DbusAccountProxy;

        // Conflicted with Gio.AsyncInitable.new_finish
        static new_finish(...args: never[]): any;

        static new_for_bus_finish(res: Gio.AsyncResult): DbusAccountProxy;

        static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): DbusAccountProxy;

        // Conflicted with Gio.DBusProxy.new_for_bus_sync
        static new_for_bus_sync(...args: never[]): any;

        static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): DbusAccountProxy;

        // Conflicted with Gio.DBusProxy.new_sync
        static new_sync(...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof DbusAccountProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DbusAccountProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DbusAccountProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DbusAccountProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DbusAccountProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DbusAccountProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Account.top_of_page">org.freedesktop.CloudProviders.Account</link>. See `g_dbus_proxy_new()` for more details.
         * 
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `cloud_providers_dbus_account_proxy_new_finish()` to get the result of the operation.
         * 
         * See `cloud_providers_dbus_account_proxy_new_sync()` for the synchronous, blocking version of this constructor.
         * @param connection A {@link Gio.DBusConnection}.
         * @param flags Flags from the {@link Gio.DBusProxyFlags} enumeration.
         * @param name A bus name (well-known or unique) or `null` if `connection` is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<DbusAccountProxy> | null): void;

        /**
         * @param args 
         */
    // Conflicted with Gio.DBusProxy.new
        static ["new"](...args: never[]): any;

        /**
         * Like `cloud_providers_dbus_account_proxy_new()` but takes a {@link Gio.BusType} instead of a {@link Gio.DBusConnection}.
         * 
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `cloud_providers_dbus_account_proxy_new_for_bus_finish()` to get the result of the operation.
         * 
         * See `cloud_providers_dbus_account_proxy_new_for_bus_sync()` for the synchronous, blocking version of this constructor.
         * @param bus_type A {@link Gio.BusType}.
         * @param flags Flags from the {@link Gio.DBusProxyFlags} enumeration.
         * @param name A bus name (well-known or unique).
         * @param object_path An object path.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<DbusAccountProxy> | null): void;

        /**
         * @param args 
         */
    // Conflicted with Gio.DBusProxy.new_for_bus
        static new_for_bus(...args: never[]): any;

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Account.Icon">"Icon"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
          * @category Inherited from CloudProviders.DbusAccount
         */
        get icon(): string | null;
        set icon(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Account.Name">"Name"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
          * @category Inherited from CloudProviders.DbusAccount
         */
        get name(): string | null;
        set name(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Account.Path">"Path"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
          * @category Inherited from CloudProviders.DbusAccount
         */
        get path(): string | null;
        set path(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Account.Status">"Status"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default 0
          * @category Inherited from CloudProviders.DbusAccount
         */
        get status(): number;
        set status(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Account.StatusDetails">"StatusDetails"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
          * @category Inherited from CloudProviders.DbusAccount
         */
        get status_details(): string | null;
        set status_details(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Account.StatusDetails">"StatusDetails"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
          * @category Inherited from CloudProviders.DbusAccount
         */
        get statusDetails(): string | null;
        set statusDetails(val: string | null);

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns `true` if successful. If an error has occurred, this function will return `false` and set `error` appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or `null` on error.
         * @param res the {@link Gio.AsyncResult} from the callback
         * @returns a newly created {@link GObject.Object},      or `null` on error. Free with `g_object_unref()`.
         */
        new_finish(res: Gio.AsyncResult): DbusAccountProxy;

        /**
         * @param args 
         */
        // Conflicted with Gio.DBusProxy.new_finish
        new_finish(...args: never[]): any;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @virtual
         */
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @returns A {@link Gio.DBusObject} or `null`. The returned reference should be freed with `g_object_unref()`.
         */
        get_object(): Gio.DBusObject | null;

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         */
        set_object(object: Gio.DBusObject | null): void;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @virtual
         */
        vfunc_dup_object(): Gio.DBusObject | null;

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         * @virtual
         */
        vfunc_set_object(object: Gio.DBusObject | null): void;

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


    namespace DbusAccountSkeleton {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::path": (pspec: GObject.ParamSpec) => void;
            "notify::status": (pspec: GObject.ParamSpec) => void;
            "notify::status-details": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusInterfaceSkeleton.ConstructorProps, DbusAccount.ConstructorProps, Gio.DBusInterface.ConstructorProps {}
    }

    /**
     * The {@link CloudProviders.DbusAccountSkeleton} structure contains only private data and should only be accessed using the provided API.
     * @gir-type Class
     */
    class DbusAccountSkeleton extends Gio.DBusInterfaceSkeleton implements DbusAccount, Gio.DBusInterface {
        static $gtype: GObject.GType<DbusAccountSkeleton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DbusAccountSkeleton.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DbusAccountSkeleton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): DbusAccountSkeleton;

        // Signals
        /** @signal */
        connect<K extends keyof DbusAccountSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DbusAccountSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DbusAccountSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DbusAccountSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DbusAccountSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DbusAccountSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Account.Icon">"Icon"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
          * @category Inherited from CloudProviders.DbusAccount
         */
        get icon(): string | null;
        set icon(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Account.Name">"Name"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
          * @category Inherited from CloudProviders.DbusAccount
         */
        get name(): string | null;
        set name(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Account.Path">"Path"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
          * @category Inherited from CloudProviders.DbusAccount
         */
        get path(): string | null;
        set path(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Account.Status">"Status"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default 0
          * @category Inherited from CloudProviders.DbusAccount
         */
        get status(): number;
        set status(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Account.StatusDetails">"StatusDetails"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
          * @category Inherited from CloudProviders.DbusAccount
         */
        get status_details(): string | null;
        set status_details(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Account.StatusDetails">"StatusDetails"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
          * @category Inherited from CloudProviders.DbusAccount
         */
        get statusDetails(): string | null;
        set statusDetails(val: string | null);

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @returns A {@link Gio.DBusObject} or `null`. The returned reference should be freed with `g_object_unref()`.
         */
        get_object(): Gio.DBusObject | null;

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         */
        set_object(object: Gio.DBusObject | null): void;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @virtual
         */
        vfunc_dup_object(): Gio.DBusObject | null;

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         * @virtual
         */
        vfunc_set_object(object: Gio.DBusObject | null): void;
    }


    namespace DbusObjectManagerClient {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusObjectManagerClient.SignalSignatures {
            "notify::bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::connection": (pspec: GObject.ParamSpec) => void;
            "notify::flags": (pspec: GObject.ParamSpec) => void;
            "notify::get-proxy-type-destroy-notify": (pspec: GObject.ParamSpec) => void;
            "notify::get-proxy-type-func": (pspec: GObject.ParamSpec) => void;
            "notify::get-proxy-type-user-data": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::object-path": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusObjectManagerClient.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusObjectManager.ConstructorProps, Gio.Initable.ConstructorProps {}
    }

    /**
     * The {@link CloudProviders.DbusObjectManagerClient} structure contains only private data and should only be accessed using the provided API.
     * @gir-type Class
     */
    class DbusObjectManagerClient extends Gio.DBusObjectManagerClient implements Gio.AsyncInitable<DbusObjectManagerClient>, Gio.DBusObjectManager, Gio.Initable {
        static $gtype: GObject.GType<DbusObjectManagerClient>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DbusObjectManagerClient.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DbusObjectManagerClient.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_finish(res: Gio.AsyncResult): DbusObjectManagerClient;

        // Conflicted with Gio.AsyncInitable.new_finish
        static new_finish(...args: never[]): any;

        static new_for_bus_finish(res: Gio.AsyncResult): DbusObjectManagerClient;

        static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): DbusObjectManagerClient;

        // Conflicted with Gio.DBusObjectManagerClient.new_for_bus_sync
        static new_for_bus_sync(...args: never[]): any;

        static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): DbusObjectManagerClient;

        // Conflicted with Gio.DBusObjectManagerClient.new_sync
        static new_sync(...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof DbusObjectManagerClient.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DbusObjectManagerClient.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DbusObjectManagerClient.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DbusObjectManagerClient.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DbusObjectManagerClient.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DbusObjectManagerClient.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * A {@link Gio.DBusProxyTypeFunc} that maps `interface_name` to the generated {@link Gio.DBusObjectProxy} derived and {@link Gio.DBusProxy} derived types.
         * @param manager A {@link Gio.DBusObjectManagerClient}.
         * @param object_path The object path of the remote object (unused).
         * @param interface_name Interface name of the remote object or `null` to get the object proxy {@link GObject.GType}.
         * @param user_data User data (unused).
         */
        static get_proxy_type(manager: Gio.DBusObjectManagerClient, object_path: string, interface_name: string | null, user_data: null): GObject.GType;

        /**
         * Asynchronously creates {@link Gio.DBusObjectManagerClient} using `cloud_providers_dbus_object_manager_client_get_proxy_type()` as the {@link Gio.DBusProxyTypeFunc}. See `g_dbus_object_manager_client_new()` for more details.
         * 
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `cloud_providers_dbus_object_manager_client_new_finish()` to get the result of the operation.
         * 
         * See `cloud_providers_dbus_object_manager_client_new_sync()` for the synchronous, blocking version of this constructor.
         * @param connection A {@link Gio.DBusConnection}.
         * @param flags Flags from the {@link Gio.DBusObjectManagerClientFlags} enumeration.
         * @param name A bus name (well-known or unique) or `null` if `connection` is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<DbusObjectManagerClient> | null): void;

        /**
         * @param args 
         */
    // Conflicted with Gio.DBusObjectManagerClient.new
        static ["new"](...args: never[]): any;

        /**
         * Like `cloud_providers_dbus_object_manager_client_new()` but takes a {@link Gio.BusType} instead of a {@link Gio.DBusConnection}.
         * 
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `cloud_providers_dbus_object_manager_client_new_for_bus_finish()` to get the result of the operation.
         * 
         * See `cloud_providers_dbus_object_manager_client_new_for_bus_sync()` for the synchronous, blocking version of this constructor.
         * @param bus_type A {@link Gio.BusType}.
         * @param flags Flags from the {@link Gio.DBusObjectManagerClientFlags} enumeration.
         * @param name A bus name (well-known or unique).
         * @param object_path An object path.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<DbusObjectManagerClient> | null): void;

        /**
         * @param args 
         */
    // Conflicted with Gio.DBusObjectManagerClient.new_for_bus
        static new_for_bus(...args: never[]): any;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns `true` if successful. If an error has occurred, this function will return `false` and set `error` appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or `null` on error.
         * @param res the {@link Gio.AsyncResult} from the callback
         * @returns a newly created {@link GObject.Object},      or `null` on error. Free with `g_object_unref()`.
         */
        new_finish(res: Gio.AsyncResult): DbusObjectManagerClient;

        /**
         * @param args 
         */
        // Conflicted with Gio.DBusObjectManagerClient.new_finish
        new_finish(...args: never[]): any;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @virtual
         */
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Gets the interface proxy for `interface_name` at `object_path`, if
         * any.
         * @param object_path Object path to look up.
         * @param interface_name D-Bus interface name to look up.
         * @returns A {@link Gio.DBusInterface} instance or `null`. Free   with `g_object_unref()`.
         */
        get_interface(object_path: string, interface_name: string): Gio.DBusInterface | null;

        /**
         * Gets the {@link Gio.DBusObject} at `object_path`, if any.
         * @param object_path Object path to look up.
         * @returns A {@link Gio.DBusObject} or `null`. Free with   `g_object_unref()`.
         */
        get_object(object_path: string): Gio.DBusObject | null;

        /**
         * Gets the object path that `manager` is for.
         * @returns A string owned by `manager`. Do not free.
         */
        get_object_path(): string;

        /**
         * Gets all {@link Gio.DBusObject} objects known to `manager`.
         * @returns A list of   {@link Gio.DBusObject} objects. The returned list should be freed with   `g_list_free()` after each element has been freed with   `g_object_unref()`.
         */
        get_objects(): Gio.DBusObject[];

        /**
         * Gets the interface proxy for `interface_name` at `object_path`, if
         * any.
         * @param object_path Object path to look up.
         * @param interface_name D-Bus interface name to look up.
         * @virtual
         */
        vfunc_get_interface(object_path: string, interface_name: string): Gio.DBusInterface | null;

        /**
         * Gets the {@link Gio.DBusObject} at `object_path`, if any.
         * @param object_path Object path to look up.
         * @virtual
         */
        vfunc_get_object(object_path: string): Gio.DBusObject | null;

        /**
         * Gets the object path that `manager` is for.
         * @virtual
         */
        vfunc_get_object_path(): string;

        /**
         * Gets all {@link Gio.DBusObject} objects known to `manager`.
         * @virtual
         */
        vfunc_get_objects(): Gio.DBusObject[];

        /**
         * Signal handler for the {@link Gio.DBusObjectManager.SignalSignatures.interface_added | Gio.DBusObjectManager::interface-added} signal.
         * @param object 
         * @param interface_ 
         * @virtual
         */
        vfunc_interface_added(object: Gio.DBusObject, interface_: Gio.DBusInterface): void;

        /**
         * Signal handler for the {@link Gio.DBusObjectManager.SignalSignatures.interface_removed | Gio.DBusObjectManager::interface-removed} signal.
         * @param object 
         * @param interface_ 
         * @virtual
         */
        vfunc_interface_removed(object: Gio.DBusObject, interface_: Gio.DBusInterface): void;

        /**
         * Signal handler for the {@link Gio.DBusObjectManager.SignalSignatures.object_added | Gio.DBusObjectManager::object-added} signal.
         * @param object 
         * @virtual
         */
        vfunc_object_added(object: Gio.DBusObject): void;

        /**
         * Signal handler for the {@link Gio.DBusObjectManager.SignalSignatures.object_removed | Gio.DBusObjectManager::object-removed} signal.
         * @param object 
         * @virtual
         */
        vfunc_object_removed(object: Gio.DBusObject): void;

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


    namespace DbusObjectProxy {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusObjectProxy.SignalSignatures {
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::account": (pspec: GObject.ParamSpec) => void;
            "notify::provider": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusObjectProxy.ConstructorProps, DbusObject.ConstructorProps, Gio.DBusObject.ConstructorProps {}
    }

    /**
     * The {@link CloudProviders.DbusObjectProxy} structure contains only private data and should only be accessed using the provided API.
     * @gir-type Class
     */
    class DbusObjectProxy extends Gio.DBusObjectProxy implements DbusObject, Gio.DBusObject {
        static $gtype: GObject.GType<DbusObjectProxy>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DbusObjectProxy.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DbusObjectProxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](connection: Gio.DBusConnection, object_path: string): DbusObjectProxy;

        // Signals
        /** @signal */
        connect<K extends keyof DbusObjectProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DbusObjectProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DbusObjectProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DbusObjectProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DbusObjectProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DbusObjectProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * The {@link CloudProviders.DbusAccount} instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Account.top_of_page">org.freedesktop.CloudProviders.Account</link>, if any.
         * 
         * Connect to the {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal to get informed of property changes.
          * @category Inherited from CloudProviders.DbusObject
         */
        get account(): DbusAccount | null;
        set account(val: DbusAccount | null);

        /**
         * The {@link CloudProviders.DbusProvider} instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Provider.top_of_page">org.freedesktop.CloudProviders.Provider</link>, if any.
         * 
         * Connect to the {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal to get informed of property changes.
          * @category Inherited from CloudProviders.DbusObject
         */
        get provider(): DbusProvider | null;
        set provider(val: DbusProvider | null);

        /**
         * Gets the {@link CloudProviders.DbusAccount} instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Account.top_of_page">org.freedesktop.CloudProviders.Account</link> on `object`, if any.
         * @returns A {@link CloudProviders.DbusAccount} that must be freed with `g_object_unref()` or `null` if `object` does not implement the interface.
         */
        get_account(): DbusAccount | null;

        /**
         * Gets the {@link CloudProviders.DbusProvider} instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Provider.top_of_page">org.freedesktop.CloudProviders.Provider</link> on `object`, if any.
         * @returns A {@link CloudProviders.DbusProvider} that must be freed with `g_object_unref()` or `null` if `object` does not implement the interface.
         */
        get_provider(): DbusProvider | null;

        /**
         * Gets the D-Bus interface with name `interface_name` associated with
         * `object`, if any.
         * @param interface_name A D-Bus interface name.
         * @returns `null` if not found, otherwise a   {@link Gio.DBusInterface} that must be freed with `g_object_unref()`.
         */
        get_interface(interface_name: string): Gio.DBusInterface | null;

        /**
         * Gets the D-Bus interfaces associated with `object`.
         * @returns A list of {@link Gio.DBusInterface} instances.   The returned list must be freed by `g_list_free()` after each element has been freed   with `g_object_unref()`.
         */
        get_interfaces(): Gio.DBusInterface[];

        /**
         * Gets the object path for `object`.
         * @returns A string owned by `object`. Do not free.
         */
        get_object_path(): string;

        /**
         * Gets the D-Bus interface with name `interface_name` associated with
         * `object`, if any.
         * @param interface_name A D-Bus interface name.
         * @virtual
         */
        vfunc_get_interface(interface_name: string): Gio.DBusInterface | null;

        /**
         * Gets the D-Bus interfaces associated with `object`.
         * @virtual
         */
        vfunc_get_interfaces(): Gio.DBusInterface[];

        /**
         * Gets the object path for `object`.
         * @virtual
         */
        vfunc_get_object_path(): string;

        /**
         * Signal handler for the {@link Gio.DBusObject.SignalSignatures.interface_added | Gio.DBusObject::interface-added} signal.
         * @param interface_ 
         * @virtual
         */
        vfunc_interface_added(interface_: Gio.DBusInterface): void;

        /**
         * Signal handler for the {@link Gio.DBusObject.SignalSignatures.interface_removed | Gio.DBusObject::interface-removed} signal.
         * @param interface_ 
         * @virtual
         */
        vfunc_interface_removed(interface_: Gio.DBusInterface): void;
    }


    namespace DbusObjectSkeleton {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusObjectSkeleton.SignalSignatures {
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::account": (pspec: GObject.ParamSpec) => void;
            "notify::provider": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusObjectSkeleton.ConstructorProps, DbusObject.ConstructorProps, Gio.DBusObject.ConstructorProps {}
    }

    /**
     * The {@link CloudProviders.DbusObjectSkeleton} structure contains only private data and should only be accessed using the provided API.
     * @gir-type Class
     */
    class DbusObjectSkeleton extends Gio.DBusObjectSkeleton implements DbusObject, Gio.DBusObject {
        static $gtype: GObject.GType<DbusObjectSkeleton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DbusObjectSkeleton.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DbusObjectSkeleton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](object_path: string): DbusObjectSkeleton;

        // Signals
        /** @signal */
        connect<K extends keyof DbusObjectSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DbusObjectSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DbusObjectSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DbusObjectSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DbusObjectSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DbusObjectSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Sets the {@link CloudProviders.DbusAccount} instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Account.top_of_page">org.freedesktop.CloudProviders.Account</link> on `object`.
         * @param interface_ A {@link CloudProviders.DbusAccount} or `null` to clear the interface.
         */
        set_account(interface_: DbusAccount | null): void;

        /**
         * Sets the {@link CloudProviders.DbusProvider} instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Provider.top_of_page">org.freedesktop.CloudProviders.Provider</link> on `object`.
         * @param interface_ A {@link CloudProviders.DbusProvider} or `null` to clear the interface.
         */
        set_provider(interface_: DbusProvider | null): void;

        /**
         * The {@link CloudProviders.DbusAccount} instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Account.top_of_page">org.freedesktop.CloudProviders.Account</link>, if any.
         * 
         * Connect to the {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal to get informed of property changes.
          * @category Inherited from CloudProviders.DbusObject
         */
        get account(): DbusAccount | null;
        set account(val: DbusAccount | null);

        /**
         * The {@link CloudProviders.DbusProvider} instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Provider.top_of_page">org.freedesktop.CloudProviders.Provider</link>, if any.
         * 
         * Connect to the {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal to get informed of property changes.
          * @category Inherited from CloudProviders.DbusObject
         */
        get provider(): DbusProvider | null;
        set provider(val: DbusProvider | null);

        /**
         * Gets the {@link CloudProviders.DbusAccount} instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Account.top_of_page">org.freedesktop.CloudProviders.Account</link> on `object`, if any.
         * @returns A {@link CloudProviders.DbusAccount} that must be freed with `g_object_unref()` or `null` if `object` does not implement the interface.
         */
        get_account(): DbusAccount | null;

        /**
         * Gets the {@link CloudProviders.DbusProvider} instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Provider.top_of_page">org.freedesktop.CloudProviders.Provider</link> on `object`, if any.
         * @returns A {@link CloudProviders.DbusProvider} that must be freed with `g_object_unref()` or `null` if `object` does not implement the interface.
         */
        get_provider(): DbusProvider | null;

        /**
         * Gets the D-Bus interface with name `interface_name` associated with
         * `object`, if any.
         * @param interface_name A D-Bus interface name.
         * @returns `null` if not found, otherwise a   {@link Gio.DBusInterface} that must be freed with `g_object_unref()`.
         */
        get_interface(interface_name: string): Gio.DBusInterface | null;

        /**
         * Gets the D-Bus interfaces associated with `object`.
         * @returns A list of {@link Gio.DBusInterface} instances.   The returned list must be freed by `g_list_free()` after each element has been freed   with `g_object_unref()`.
         */
        get_interfaces(): Gio.DBusInterface[];

        /**
         * Gets the object path for `object`.
         * @returns A string owned by `object`. Do not free.
         */
        get_object_path(): string;

        /**
         * Gets the D-Bus interface with name `interface_name` associated with
         * `object`, if any.
         * @param interface_name A D-Bus interface name.
         * @virtual
         */
        vfunc_get_interface(interface_name: string): Gio.DBusInterface | null;

        /**
         * Gets the D-Bus interfaces associated with `object`.
         * @virtual
         */
        vfunc_get_interfaces(): Gio.DBusInterface[];

        /**
         * Gets the object path for `object`.
         * @virtual
         */
        vfunc_get_object_path(): string;

        /**
         * Signal handler for the {@link Gio.DBusObject.SignalSignatures.interface_added | Gio.DBusObject::interface-added} signal.
         * @param interface_ 
         * @virtual
         */
        vfunc_interface_added(interface_: Gio.DBusInterface): void;

        /**
         * Signal handler for the {@link Gio.DBusObject.SignalSignatures.interface_removed | Gio.DBusObject::interface-removed} signal.
         * @param interface_ 
         * @virtual
         */
        vfunc_interface_removed(interface_: Gio.DBusInterface): void;
    }


    namespace DbusProviderProxy {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusProxy.SignalSignatures {
            "notify::g-bus-type": (pspec: GObject.ParamSpec) => void;
            "notify::g-connection": (pspec: GObject.ParamSpec) => void;
            "notify::g-default-timeout": (pspec: GObject.ParamSpec) => void;
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-info": (pspec: GObject.ParamSpec) => void;
            "notify::g-interface-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name": (pspec: GObject.ParamSpec) => void;
            "notify::g-name-owner": (pspec: GObject.ParamSpec) => void;
            "notify::g-object-path": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, DbusProvider.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps {}
    }

    /**
     * The {@link CloudProviders.DbusProviderProxy} structure contains only private data and should only be accessed using the provided API.
     * @gir-type Class
     */
    class DbusProviderProxy extends Gio.DBusProxy implements DbusProvider, Gio.AsyncInitable<DbusProviderProxy>, Gio.DBusInterface, Gio.Initable {
        static $gtype: GObject.GType<DbusProviderProxy>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DbusProviderProxy.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DbusProviderProxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_finish(res: Gio.AsyncResult): DbusProviderProxy;

        // Conflicted with Gio.AsyncInitable.new_finish
        static new_finish(...args: never[]): any;

        static new_for_bus_finish(res: Gio.AsyncResult): DbusProviderProxy;

        static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): DbusProviderProxy;

        // Conflicted with Gio.DBusProxy.new_for_bus_sync
        static new_for_bus_sync(...args: never[]): any;

        static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): DbusProviderProxy;

        // Conflicted with Gio.DBusProxy.new_sync
        static new_sync(...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof DbusProviderProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DbusProviderProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DbusProviderProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DbusProviderProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DbusProviderProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DbusProviderProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Provider.top_of_page">org.freedesktop.CloudProviders.Provider</link>. See `g_dbus_proxy_new()` for more details.
         * 
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `cloud_providers_dbus_provider_proxy_new_finish()` to get the result of the operation.
         * 
         * See `cloud_providers_dbus_provider_proxy_new_sync()` for the synchronous, blocking version of this constructor.
         * @param connection A {@link Gio.DBusConnection}.
         * @param flags Flags from the {@link Gio.DBusProxyFlags} enumeration.
         * @param name A bus name (well-known or unique) or `null` if `connection` is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<DbusProviderProxy> | null): void;

        /**
         * @param args 
         */
    // Conflicted with Gio.DBusProxy.new
        static ["new"](...args: never[]): any;

        /**
         * Like `cloud_providers_dbus_provider_proxy_new()` but takes a {@link Gio.BusType} instead of a {@link Gio.DBusConnection}.
         * 
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `cloud_providers_dbus_provider_proxy_new_for_bus_finish()` to get the result of the operation.
         * 
         * See `cloud_providers_dbus_provider_proxy_new_for_bus_sync()` for the synchronous, blocking version of this constructor.
         * @param bus_type A {@link Gio.BusType}.
         * @param flags Flags from the {@link Gio.DBusProxyFlags} enumeration.
         * @param name A bus name (well-known or unique).
         * @param object_path An object path.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<DbusProviderProxy> | null): void;

        /**
         * @param args 
         */
    // Conflicted with Gio.DBusProxy.new_for_bus
        static new_for_bus(...args: never[]): any;

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Provider.Name">"Name"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
          * @category Inherited from CloudProviders.DbusProvider
         */
        get name(): string | null;
        set name(val: string | null);

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns `true` if successful. If an error has occurred, this function will return `false` and set `error` appropriately if present.
         */
        init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Finishes the async construction for the various g_async_initable_new
         * calls, returning the created object or `null` on error.
         * @param res the {@link Gio.AsyncResult} from the callback
         * @returns a newly created {@link GObject.Object},      or `null` on error. Free with `g_object_unref()`.
         */
        new_finish(res: Gio.AsyncResult): DbusProviderProxy;

        /**
         * @param args 
         */
        // Conflicted with Gio.DBusProxy.new_finish
        new_finish(...args: never[]): any;

        /**
         * Starts asynchronous initialization of the object implementing the
         * interface. This must be done before any real use of the object after
         * initial construction. If the object also implements {@link Gio.Initable} you can
         * optionally call `g_initable_init()` instead.
         * 
         * This method is intended for language bindings. If writing in C,
         * `g_async_initable_new_async()` should typically be used instead.
         * 
         * When the initialization is finished, `callback` will be called. You can
         * then call `g_async_initable_init_finish()` to get the result of the
         * initialization.
         * 
         * Implementations may also support cancellation. If `cancellable` is not
         * `null`, then initialization can be cancelled by triggering the cancellable
         * object from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null`, and
         * the object doesn't support cancellable initialization, the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         * 
         * As with {@link Gio.Initable}, if the object is not initialized, or initialization
         * returns with an error, then all operations on the object except
         * `g_object_ref()` and `g_object_unref()` are considered to be invalid, and
         * have undefined behaviour. They will often fail with `g_critical()` or
         * `g_warning()`, but this must not be relied on.
         * 
         * Callers should not assume that a class which implements {@link Gio.AsyncInitable} can
         * be initialized multiple times; for more information, see `g_initable_init()`.
         * If a class explicitly supports being initialized multiple times,
         * implementation requires yielding all subsequent calls to `init_async()` on the
         * results of the first call.
         * 
         * For classes that also support the {@link Gio.Initable} interface, the default
         * implementation of this method will run the `g_initable_init()` function
         * in a thread, so if you want to support asynchronous initialization via
         * threads, just implement the {@link Gio.AsyncInitable} interface without overriding
         * any interface methods.
         * @param io_priority the [I/O priority](iface.AsyncResult.html#io-priority) of the operation
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         * @virtual
         */
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @returns A {@link Gio.DBusObject} or `null`. The returned reference should be freed with `g_object_unref()`.
         */
        get_object(): Gio.DBusObject | null;

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         */
        set_object(object: Gio.DBusObject | null): void;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @virtual
         */
        vfunc_dup_object(): Gio.DBusObject | null;

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         * @virtual
         */
        vfunc_set_object(object: Gio.DBusObject | null): void;

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


    namespace DbusProviderSkeleton {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusInterfaceSkeleton.ConstructorProps, DbusProvider.ConstructorProps, Gio.DBusInterface.ConstructorProps {}
    }

    /**
     * The {@link CloudProviders.DbusProviderSkeleton} structure contains only private data and should only be accessed using the provided API.
     * @gir-type Class
     */
    class DbusProviderSkeleton extends Gio.DBusInterfaceSkeleton implements DbusProvider, Gio.DBusInterface {
        static $gtype: GObject.GType<DbusProviderSkeleton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DbusProviderSkeleton.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DbusProviderSkeleton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): DbusProviderSkeleton;

        // Signals
        /** @signal */
        connect<K extends keyof DbusProviderSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DbusProviderSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DbusProviderSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DbusProviderSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DbusProviderSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DbusProviderSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Provider.Name">"Name"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
          * @category Inherited from CloudProviders.DbusProvider
         */
        get name(): string | null;
        set name(val: string | null);

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @returns A {@link Gio.DBusObject} or `null`. The returned reference should be freed with `g_object_unref()`.
         */
        get_object(): Gio.DBusObject | null;

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         */
        set_object(object: Gio.DBusObject | null): void;

        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @virtual
         */
        vfunc_dup_object(): Gio.DBusObject | null;

        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;

        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         * 
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         * @virtual
         */
        vfunc_set_object(object: Gio.DBusObject | null): void;
    }


    namespace Provider {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            "accounts-changed": () => void;
            /**
             * @signal
             * @run-last
             */
            removed: () => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string;
        }
    }

    /**
     * {@link CloudProviders.Provider} is the basic object object for client implementers
     * that contains the properties of the provider such as name, and the accounts
     * associated with it.
     * @gir-type Class
     */
    class Provider extends GObject.Object {
        static $gtype: GObject.GType<Provider>;

        // Properties
        /**
         * @read-only
         * @default null
         */
        get name(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Provider.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Provider.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](bus_name: string, object_path: string): Provider;

        // Signals
        /** @signal */
        connect<K extends keyof Provider.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Provider.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Provider.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Provider.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Provider.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Provider.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns A GList* of {@link CloudProviders.Provider} objects.
         */
        get_accounts(): Account[];

        get_name(): string;
    }


    namespace ProviderExporter {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::bus": (pspec: GObject.ParamSpec) => void;
            "notify::bus-name": (pspec: GObject.ParamSpec) => void;
            "notify::bus-path": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            bus: Gio.DBusConnection;
            bus_name: string;
            busName: string;
            bus_path: string;
            busPath: string;
            name: string;
        }
    }

    /**
     * {@link CloudProviders.ProviderExporter} is the base object representing a single cloud provider.
     * Multiple {@link CloudProviders.AccountExporter} objects can be added with `cloud_providers_provider_exporter_add_account()`
     * After adding the initial set of accounts `cloud_providers_provider_exporter_export_objects()` must be called.
     * @gir-type Class
     */
    class ProviderExporter extends GObject.Object {
        static $gtype: GObject.GType<ProviderExporter>;

        // Properties
        /**
         * @construct-only
         */
        get bus(): Gio.DBusConnection;

        /**
         * @construct-only
         * @default null
         */
        get bus_name(): string;

        /**
         * @construct-only
         * @default null
         */
        get busName(): string;

        /**
         * @construct-only
         * @default null
         */
        get bus_path(): string;

        /**
         * @construct-only
         * @default null
         */
        get busPath(): string;

        /**
         * @default null
         */
        get name(): string;
        set name(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ProviderExporter.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ProviderExporter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](bus: Gio.DBusConnection, bus_name: string, bus_path: string): ProviderExporter;

        // Signals
        /** @signal */
        connect<K extends keyof ProviderExporter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProviderExporter.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ProviderExporter.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProviderExporter.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ProviderExporter.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ProviderExporter.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_name(): string;

        /**
         * Each cloud provider can have a variety of account associated with it. Use this
         * function to remove the accounts that were added when created by `cloud_providers_account_exporter_new()`.
         * @param account The account object
         */
        remove_account(account: AccountExporter): void;

        /**
         * @param name 
         */
        set_name(name: string): void;
    }


    /**
     * @gir-type Alias
     */
    type AccountClass = typeof Account;

    /**
     * @gir-type Alias
     */
    type AccountExporterClass = typeof AccountExporter;

    /**
     * @gir-type Alias
     */
    type CollectorClass = typeof Collector;

    /**
     * @gir-type Alias
     */
    type DbusAccountIface = typeof DbusAccount;

    /**
     * @gir-type Alias
     */
    type DbusAccountProxyClass = typeof DbusAccountProxy;

    /**
     * @gir-type Struct
     */
    abstract class DbusAccountProxyPrivate {
        static $gtype: GObject.GType<DbusAccountProxyPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type DbusAccountSkeletonClass = typeof DbusAccountSkeleton;

    /**
     * @gir-type Struct
     */
    abstract class DbusAccountSkeletonPrivate {
        static $gtype: GObject.GType<DbusAccountSkeletonPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type DbusObjectIface = typeof DbusObject;

    /**
     * @gir-type Alias
     */
    type DbusObjectManagerClientClass = typeof DbusObjectManagerClient;

    /**
     * @gir-type Struct
     */
    abstract class DbusObjectManagerClientPrivate {
        static $gtype: GObject.GType<DbusObjectManagerClientPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type DbusObjectProxyClass = typeof DbusObjectProxy;

    /**
     * @gir-type Struct
     */
    abstract class DbusObjectProxyPrivate {
        static $gtype: GObject.GType<DbusObjectProxyPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type DbusObjectSkeletonClass = typeof DbusObjectSkeleton;

    /**
     * @gir-type Struct
     */
    abstract class DbusObjectSkeletonPrivate {
        static $gtype: GObject.GType<DbusObjectSkeletonPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type DbusProviderIface = typeof DbusProvider;

    /**
     * @gir-type Alias
     */
    type DbusProviderProxyClass = typeof DbusProviderProxy;

    /**
     * @gir-type Struct
     */
    abstract class DbusProviderProxyPrivate {
        static $gtype: GObject.GType<DbusProviderProxyPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type DbusProviderSkeletonClass = typeof DbusProviderSkeleton;

    /**
     * @gir-type Struct
     */
    abstract class DbusProviderSkeletonPrivate {
        static $gtype: GObject.GType<DbusProviderSkeletonPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ProviderClass = typeof Provider;

    /**
     * @gir-type Alias
     */
    type ProviderExporterClass = typeof ProviderExporter;

    /**
     * @gir-type Struct
     */
    abstract class _AccountClass {
        static $gtype: GObject.GType<_AccountClass>;
    }


    /**
     * @gir-type Struct
     */
    abstract class _AccountExporterClass {
        static $gtype: GObject.GType<_AccountExporterClass>;
    }


    /**
     * @gir-type Struct
     */
    abstract class _CollectorClass {
        static $gtype: GObject.GType<_CollectorClass>;
    }


    /**
     * @gir-type Struct
     */
    abstract class _ProviderExporterClass {
        static $gtype: GObject.GType<_ProviderExporterClass>;
    }


    namespace DbusAccount {

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            icon: string | null;
            name: string | null;
            path: string | null;
            status: number;
            status_details: string | null;
            statusDetails: string | null;
        }
    }

    export interface DbusAccountNamespace {
        $gtype: GObject.GType<DbusAccount>;
        prototype: DbusAccount;
        /**
        * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Account.top_of_page">org.freedesktop.CloudProviders.Account</link> D-Bus interface.
        */
        interface_info(): Gio.DBusInterfaceInfo;
        /**
        * Overrides all {@link GObject.Object} properties in the {@link CloudProviders.DbusAccount} interface for a concrete class.
        * The properties are overridden in the order they are defined.
        * @param klass The class structure for a {@link GObject.Object} derived class.
        * @param property_id_begin The property id to assign to the first overridden property.
        */
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    /**
     * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Account.top_of_page">org.freedesktop.CloudProviders.Account</link>.
     * @gir-type Interface
     */
    interface DbusAccount extends GObject.Object {

        // Properties
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Account.Icon">"Icon"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
         */
        get icon(): string | null;
        set icon(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Account.Name">"Name"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
         */
        get name(): string | null;
        set name(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Account.Path">"Path"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
         */
        get path(): string | null;
        set path(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Account.Status">"Status"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default 0
         */
        get status(): number;
        set status(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Account.StatusDetails">"StatusDetails"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
         */
        get status_details(): string | null;
        set status_details(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Account.StatusDetails">"StatusDetails"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
         */
        get statusDetails(): string | null;
        set statusDetails(val: string | null);
    }


    export const DbusAccount: DbusAccountNamespace & {
        new (): DbusAccount; // This allows `obj instanceof DbusAccount`
    };

    namespace DbusObject {

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusObject.ConstructorProps {
            account: DbusAccount | null;
            provider: DbusProvider | null;
        }
    }

    export interface DbusObjectNamespace {
        $gtype: GObject.GType<DbusObject>;
        prototype: DbusObject;
    }
    /**
     * The {@link CloudProviders.DbusObject} type is a specialized container of interfaces.
     * @gir-type Interface
     */
    interface DbusObject extends Gio.DBusObject {

        // Properties
        /**
         * The {@link CloudProviders.DbusAccount} instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Account.top_of_page">org.freedesktop.CloudProviders.Account</link>, if any.
         * 
         * Connect to the {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal to get informed of property changes.
         */
        get account(): DbusAccount | null;
        set account(val: DbusAccount | null);

        /**
         * The {@link CloudProviders.DbusProvider} instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Provider.top_of_page">org.freedesktop.CloudProviders.Provider</link>, if any.
         * 
         * Connect to the {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal to get informed of property changes.
         */
        get provider(): DbusProvider | null;
        set provider(val: DbusProvider | null);

        // Methods
        /**
         * Gets the {@link CloudProviders.DbusAccount} instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Account.top_of_page">org.freedesktop.CloudProviders.Account</link> on `object`, if any.
         * @returns A {@link CloudProviders.DbusAccount} that must be freed with `g_object_unref()` or `null` if `object` does not implement the interface.
         */
        get_account(): DbusAccount | null;

        /**
         * Gets the {@link CloudProviders.DbusProvider} instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Provider.top_of_page">org.freedesktop.CloudProviders.Provider</link> on `object`, if any.
         * @returns A {@link CloudProviders.DbusProvider} that must be freed with `g_object_unref()` or `null` if `object` does not implement the interface.
         */
        get_provider(): DbusProvider | null;
    }


    export const DbusObject: DbusObjectNamespace & {
        new (): DbusObject; // This allows `obj instanceof DbusObject`
    };

    namespace DbusProvider {

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string | null;
        }
    }

    export interface DbusProviderNamespace {
        $gtype: GObject.GType<DbusProvider>;
        prototype: DbusProvider;
        /**
        * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Provider.top_of_page">org.freedesktop.CloudProviders.Provider</link> D-Bus interface.
        */
        interface_info(): Gio.DBusInterfaceInfo;
        /**
        * Overrides all {@link GObject.Object} properties in the {@link CloudProviders.DbusProvider} interface for a concrete class.
        * The properties are overridden in the order they are defined.
        * @param klass The class structure for a {@link GObject.Object} derived class.
        * @param property_id_begin The property id to assign to the first overridden property.
        */
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    /**
     * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Provider.top_of_page">org.freedesktop.CloudProviders.Provider</link>.
     * @gir-type Interface
     */
    interface DbusProvider extends GObject.Object {

        // Properties
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Provider.Name">"Name"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
         */
        get name(): string | null;
        set name(val: string | null);
    }


    export const DbusProvider: DbusProviderNamespace & {
        new (): DbusProvider; // This allows `obj instanceof DbusProvider`
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

export default CloudProviders;

// END
