/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './cloudproviders-0.3-ambient.d.ts';
import './cloudproviders-0.3-import.d.ts';
/**
 * CloudProviders-0.3
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace CloudProviders {
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
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function dbus_account_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #CloudProvidersDbusAccount interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function dbus_account_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Provider.top_of_page">org.freedesktop.CloudProviders.Provider</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function dbus_provider_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #CloudProvidersDbusProvider interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function dbus_provider_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    module Account {
        // Constructor properties interface
    }

    /**
     * #CloudProvidersAccount is the basic object used to construct the integrator UI
     * and actions that a provider will present to the user, from the client side.
     * Integrators of the cloud providers can use this object to poll the
     * #CloudProvidersProvider menus, status and actions.
     */
    class Account extends GObject.Object {
        // Own properties of CloudProviders-0.3.Account

        readonly action_group: Gio.ActionGroup;
        readonly actionGroup: Gio.ActionGroup;
        readonly icon: Gio.Icon;
        readonly menu_model: Gio.MenuModel;
        readonly menuModel: Gio.MenuModel;
        readonly name: string;
        readonly path: string;
        readonly status_details: string;
        readonly statusDetails: string;

        // Constructors of CloudProviders-0.3.Account

        static ['new'](proxy: Gio.DBusProxy): Account;

        // Owm methods of CloudProviders-0.3.Account

        /**
         * Get the action group exported in addition to the #GMenuModel from
         * cloud_providers_account_get_menu_model()
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

    module AccountExporter {
        // Constructor properties interface
    }

    class AccountExporter extends GObject.Object {
        // Own properties of CloudProviders-0.3.AccountExporter

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

        // Constructors of CloudProviders-0.3.AccountExporter

        static ['new'](provider: ProviderExporter, bus_name: string): AccountExporter;

        // Owm methods of CloudProviders-0.3.AccountExporter

        /**
         * In order for a menu exported with cloud_providers_account_exporter_export_menu to receive events
         * that will eventually call your callbacks, it needs the corresponding GActionGroup.
         * Use this function to export it.
         * @param action_group The GActionGroup to be used by the menu exported by cloud_providers_account_exporter_export_menu
         */
        set_action_group(action_group: Gio.ActionGroup): void;
        set_icon(icon: Gio.Icon): void;
        /**
         * One of the benefits of the integration is to display a menu with available
         * options for an account. Use this function to export a GMenuModel menu to be
         * displayed by the chosen integration by the desktop environment or application.
         * @param menu_model The menu model to export
         */
        set_menu_model(menu_model: Gio.MenuModel): void;
        set_name(name: string): void;
        set_path(path: string): void;
        set_status(status: AccountStatus): void;
        set_status_details(status_details: string): void;
    }

    module Collector {
        // Signal callback interfaces

        interface ProvidersChanged {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * #CloudProvidersCollector is a singleton to track all the changes in all providers.
     * Using a #CloudProvidersCollector you can implement integration for all of them at once
     * and represent them in the UI, track new providers added or removed and their
     * status.
     */
    class Collector extends GObject.Object {
        // Owm methods of CloudProviders-0.3.Collector

        /**
         * Main object to track changes in all providers.
         */
        static dup_singleton(): Collector;

        // Owm methods of CloudProviders-0.3.Collector

        get_providers(): Provider[];
        update(): void;
    }

    module DbusAccountProxy {
        // Constructor properties interface
    }

    /**
     * The #CloudProvidersDbusAccountProxy structure contains only private data and should only be accessed using the provided API.
     */
    class DbusAccountProxy extends Gio.DBusProxy {
        // Constructors of CloudProviders-0.3.DbusAccountProxy

        static new_finish(res: Gio.AsyncResult): DbusAccountProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): DbusAccountProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): DbusAccountProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): DbusAccountProxy;

        // Owm methods of CloudProviders-0.3.DbusAccountProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Account.top_of_page">org.freedesktop.CloudProviders.Account</link>. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call cloud_providers_dbus_account_proxy_new_finish() to get the result of the operation.
         *
         * See cloud_providers_dbus_account_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static ['new'](
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<DbusAccountProxy> | null,
        ): void;
        /**
         * Like cloud_providers_dbus_account_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call cloud_providers_dbus_account_proxy_new_for_bus_finish() to get the result of the operation.
         *
         * See cloud_providers_dbus_account_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
         * @param bus_type A #GBusType.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique).
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<DbusAccountProxy> | null,
        ): void;
    }

    module DbusAccountSkeleton {
        // Constructor properties interface
    }

    /**
     * The #CloudProvidersDbusAccountSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class DbusAccountSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of CloudProviders-0.3.DbusAccountSkeleton

        static ['new'](): DbusAccountSkeleton;
    }

    module DbusObjectManagerClient {
        // Constructor properties interface
    }

    /**
     * The #CloudProvidersDbusObjectManagerClient structure contains only private data and should only be accessed using the provided API.
     */
    class DbusObjectManagerClient extends Gio.DBusObjectManagerClient {
        // Constructors of CloudProviders-0.3.DbusObjectManagerClient

        static new_finish(res: Gio.AsyncResult): DbusObjectManagerClient;

        static new_for_bus_finish(res: Gio.AsyncResult): DbusObjectManagerClient;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusObjectManagerClientFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): DbusObjectManagerClient;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusObjectManagerClientFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): DbusObjectManagerClient;

        // Owm methods of CloudProviders-0.3.DbusObjectManagerClient

        /**
         * A #GDBusProxyTypeFunc that maps `interface_name` to the generated #GDBusObjectProxy derived and #GDBusProxy derived types.
         * @param manager A #GDBusObjectManagerClient.
         * @param object_path The object path of the remote object (unused).
         * @param interface_name Interface name of the remote object or %NULL to get the object proxy #GType.
         * @param user_data User data (unused).
         */
        static get_proxy_type(
            manager: Gio.DBusObjectManagerClient,
            object_path: string,
            interface_name?: string | null,
            user_data?: any | null,
        ): GObject.GType;
        /**
         * Asynchronously creates #GDBusObjectManagerClient using cloud_providers_dbus_object_manager_client_get_proxy_type() as the #GDBusProxyTypeFunc. See g_dbus_object_manager_client_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call cloud_providers_dbus_object_manager_client_new_finish() to get the result of the operation.
         *
         * See cloud_providers_dbus_object_manager_client_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusObjectManagerClientFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static ['new'](
            connection: Gio.DBusConnection,
            flags: Gio.DBusObjectManagerClientFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<DbusObjectManagerClient> | null,
        ): void;
        /**
         * Like cloud_providers_dbus_object_manager_client_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call cloud_providers_dbus_object_manager_client_new_for_bus_finish() to get the result of the operation.
         *
         * See cloud_providers_dbus_object_manager_client_new_for_bus_sync() for the synchronous, blocking version of this constructor.
         * @param bus_type A #GBusType.
         * @param flags Flags from the #GDBusObjectManagerClientFlags enumeration.
         * @param name A bus name (well-known or unique).
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusObjectManagerClientFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<DbusObjectManagerClient> | null,
        ): void;
    }

    module DbusObjectProxy {
        // Constructor properties interface
    }

    /**
     * The #CloudProvidersDbusObjectProxy structure contains only private data and should only be accessed using the provided API.
     */
    class DbusObjectProxy extends Gio.DBusObjectProxy {
        // Constructors of CloudProviders-0.3.DbusObjectProxy

        static ['new'](connection: Gio.DBusConnection, object_path: string): DbusObjectProxy;
    }

    module DbusObjectSkeleton {
        // Constructor properties interface
    }

    /**
     * The #CloudProvidersDbusObjectSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class DbusObjectSkeleton extends Gio.DBusObjectSkeleton {
        // Constructors of CloudProviders-0.3.DbusObjectSkeleton

        static ['new'](object_path: string): DbusObjectSkeleton;

        // Owm methods of CloudProviders-0.3.DbusObjectSkeleton

        /**
         * Sets the #CloudProvidersDbusAccount instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Account.top_of_page">org.freedesktop.CloudProviders.Account</link> on `object`.
         * @param interface_ A #CloudProvidersDbusAccount or %NULL to clear the interface.
         */
        set_account(interface_?: DbusAccount | null): void;
        /**
         * Sets the #CloudProvidersDbusProvider instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Provider.top_of_page">org.freedesktop.CloudProviders.Provider</link> on `object`.
         * @param interface_ A #CloudProvidersDbusProvider or %NULL to clear the interface.
         */
        set_provider(interface_?: DbusProvider | null): void;
    }

    module DbusProviderProxy {
        // Constructor properties interface
    }

    /**
     * The #CloudProvidersDbusProviderProxy structure contains only private data and should only be accessed using the provided API.
     */
    class DbusProviderProxy extends Gio.DBusProxy {
        // Constructors of CloudProviders-0.3.DbusProviderProxy

        static new_finish(res: Gio.AsyncResult): DbusProviderProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): DbusProviderProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): DbusProviderProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): DbusProviderProxy;

        // Owm methods of CloudProviders-0.3.DbusProviderProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Provider.top_of_page">org.freedesktop.CloudProviders.Provider</link>. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call cloud_providers_dbus_provider_proxy_new_finish() to get the result of the operation.
         *
         * See cloud_providers_dbus_provider_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static ['new'](
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<DbusProviderProxy> | null,
        ): void;
        /**
         * Like cloud_providers_dbus_provider_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call cloud_providers_dbus_provider_proxy_new_for_bus_finish() to get the result of the operation.
         *
         * See cloud_providers_dbus_provider_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
         * @param bus_type A #GBusType.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique).
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<DbusProviderProxy> | null,
        ): void;
    }

    module DbusProviderSkeleton {
        // Constructor properties interface
    }

    /**
     * The #CloudProvidersDbusProviderSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class DbusProviderSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of CloudProviders-0.3.DbusProviderSkeleton

        static ['new'](): DbusProviderSkeleton;
    }

    module Provider {
        // Signal callback interfaces

        interface AccountsChanged {
            (): void;
        }

        interface Removed {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * #CloudProvidersProvider is the basic object object for client implementers
     * that contains the properties of the provider such as name, and the accounts
     * associated with it.
     */
    class Provider extends GObject.Object {
        // Own properties of CloudProviders-0.3.Provider

        readonly name: string;

        // Constructors of CloudProviders-0.3.Provider

        static ['new'](bus_name: string, object_path: string): Provider;

        // Owm methods of CloudProviders-0.3.Provider

        get_accounts(): Account[];
        get_name(): string;
    }

    module ProviderExporter {
        // Constructor properties interface
    }

    /**
     * #CloudProvidersProviderExporter is the base object representing a single cloud provider.
     * Multiple #CloudProvidersAccountExporter objects can be added with cloud_providers_provider_exporter_add_account()
     * After adding the initial set of accounts cloud_providers_provider_exporter_export_objects() must be called.
     */
    class ProviderExporter extends GObject.Object {
        // Own properties of CloudProviders-0.3.ProviderExporter

        bus: Gio.DBusConnection;
        bus_name: string;
        busName: string;
        bus_path: string;
        busPath: string;
        name: string;

        // Constructors of CloudProviders-0.3.ProviderExporter

        static ['new'](bus: Gio.DBusConnection, bus_name: string, bus_path: string): ProviderExporter;

        // Owm methods of CloudProviders-0.3.ProviderExporter

        get_name(): string;
        /**
         * Each cloud provider can have a variety of account associated with it. Use this
         * function to remove the accounts that were added when created by cloud_providers_account_exporter_new().
         * @param account The account object
         */
        remove_account(account: AccountExporter): void;
        set_name(name: string): void;
    }

    class AccountClass {}

    class AccountExporterClass {}

    class CollectorClass {}

    /**
     * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Account.top_of_page">org.freedesktop.CloudProviders.Account</link>.
     */
    class DbusAccountIface {}

    /**
     * Class structure for #CloudProvidersDbusAccountProxy.
     */
    class DbusAccountProxyClass {}

    class DbusAccountProxyPrivate {}

    /**
     * Class structure for #CloudProvidersDbusAccountSkeleton.
     */
    class DbusAccountSkeletonClass {}

    class DbusAccountSkeletonPrivate {}

    /**
     * Virtual table for the #CloudProvidersDbusObject interface.
     */
    class DbusObjectIface {}

    /**
     * Class structure for #CloudProvidersDbusObjectManagerClient.
     */
    class DbusObjectManagerClientClass {}

    class DbusObjectManagerClientPrivate {}

    /**
     * Class structure for #CloudProvidersDbusObjectProxy.
     */
    class DbusObjectProxyClass {}

    class DbusObjectProxyPrivate {}

    /**
     * Class structure for #CloudProvidersDbusObjectSkeleton.
     */
    class DbusObjectSkeletonClass {}

    class DbusObjectSkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Provider.top_of_page">org.freedesktop.CloudProviders.Provider</link>.
     */
    class DbusProviderIface {}

    /**
     * Class structure for #CloudProvidersDbusProviderProxy.
     */
    class DbusProviderProxyClass {}

    class DbusProviderProxyPrivate {}

    /**
     * Class structure for #CloudProvidersDbusProviderSkeleton.
     */
    class DbusProviderSkeletonClass {}

    class DbusProviderSkeletonPrivate {}

    class ProviderClass {}

    class ProviderExporterClass {}

    class _AccountClass {}

    class _AccountExporterClass {}

    class _CollectorClass {}

    class _ProviderExporterClass {}

    interface DbusAccount {
        // Own properties of CloudProviders-0.3.DbusAccount

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Account.Icon">"Icon"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        icon: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Account.Name">"Name"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        name: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Account.Path">"Path"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        path: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Account.Status">"Status"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        status: number;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Account.StatusDetails">"StatusDetails"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        status_details: string;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Account.StatusDetails">"StatusDetails"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        statusDetails: string;
    }

    interface DbusObject {
        // Own properties of CloudProviders-0.3.DbusObject

        /**
         * The #CloudProvidersDbusAccount instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Account.top_of_page">org.freedesktop.CloudProviders.Account</link>, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        account: DbusAccount;
        /**
         * The #CloudProvidersDbusProvider instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Provider.top_of_page">org.freedesktop.CloudProviders.Provider</link>, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        provider: DbusProvider;

        // Owm methods of CloudProviders-0.3.DbusObject

        /**
         * Gets the #CloudProvidersDbusAccount instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Account.top_of_page">org.freedesktop.CloudProviders.Account</link> on `object,` if any.
         * @returns A #CloudProvidersDbusAccount that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_account(): DbusAccount | null;
        /**
         * Gets the #CloudProvidersDbusProvider instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Provider.top_of_page">org.freedesktop.CloudProviders.Provider</link> on `object,` if any.
         * @returns A #CloudProvidersDbusProvider that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_provider(): DbusProvider | null;
    }

    interface DbusProvider {
        // Own properties of CloudProviders-0.3.DbusProvider

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Provider.Name">"Name"</link>.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        name: string;
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

export default CloudProviders;
// END
