
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
const ACCOUNT_DBUS_IFACE: string
const PROVIDER_DBUS_IFACE: string
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Account.top_of_page">org.freedesktop.CloudProviders.Account</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function dbus_account_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #CloudProvidersDbusAccount interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function dbus_account_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Provider.top_of_page">org.freedesktop.CloudProviders.Provider</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function dbus_provider_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #CloudProvidersDbusProvider interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function dbus_provider_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
module DbusAccount {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of CloudProviders-0.3.CloudProviders.DbusAccount

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Account.Icon">"Icon"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        icon?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Account.Name">"Name"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        name?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Account.Path">"Path"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        path?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Account.Status">"Status"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        status?: number | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Account.StatusDetails">"StatusDetails"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        status_details?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Account.StatusDetails">"StatusDetails"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        statusDetails?: string | null
    }

}

interface DbusAccount {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusAccount

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Account.Icon">"Icon"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    icon: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Account.Name">"Name"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    name: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Account.Path">"Path"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    path: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Account.Status">"Status"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    status: number
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Account.StatusDetails">"StatusDetails"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    status_details: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Account.StatusDetails">"StatusDetails"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    statusDetails: string | null

    // Class property signals of CloudProviders-0.3.CloudProviders.DbusAccount

    connect(sigName: "notify::icon", callback: (($obj: DbusAccount, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: DbusAccount, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: DbusAccount, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DbusAccount, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::path", callback: (($obj: DbusAccount, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: DbusAccount, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::status", callback: (($obj: DbusAccount, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: DbusAccount, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: "notify::status-details", callback: (($obj: DbusAccount, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status-details", callback: (($obj: DbusAccount, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status-details", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Account.top_of_page">org.freedesktop.CloudProviders.Account</link>.
 * @interface 
 */
class DbusAccount extends GObject.Object {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusAccount

    static name: string
    static $gtype: GObject.GType<DbusAccount>

    // Constructors of CloudProviders-0.3.CloudProviders.DbusAccount

    constructor(config?: DbusAccount.ConstructorProperties) 
    _init(config?: DbusAccount.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Account.top_of_page">org.freedesktop.CloudProviders.Account</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #CloudProvidersDbusAccount interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module DbusObject {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusObject.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of CloudProviders-0.3.CloudProviders.DbusObject

        /**
         * The #CloudProvidersDbusAccount instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Account.top_of_page">org.freedesktop.CloudProviders.Account</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        account?: DbusAccount | null
        /**
         * The #CloudProvidersDbusProvider instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Provider.top_of_page">org.freedesktop.CloudProviders.Provider</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        provider?: DbusProvider | null
    }

}

interface DbusObject extends Gio.DBusObject {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusObject

    /**
     * The #CloudProvidersDbusAccount instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Account.top_of_page">org.freedesktop.CloudProviders.Account</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    account: DbusAccount
    /**
     * The #CloudProvidersDbusProvider instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Provider.top_of_page">org.freedesktop.CloudProviders.Provider</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    provider: DbusProvider

    // Owm methods of CloudProviders-0.3.CloudProviders.DbusObject

    /**
     * Gets the #CloudProvidersDbusAccount instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Account.top_of_page">org.freedesktop.CloudProviders.Account</link> on `object,` if any.
     * @returns A #CloudProvidersDbusAccount that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    get_account(): DbusAccount | null
    /**
     * Gets the #CloudProvidersDbusProvider instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Provider.top_of_page">org.freedesktop.CloudProviders.Provider</link> on `object,` if any.
     * @returns A #CloudProvidersDbusProvider that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    get_provider(): DbusProvider | null

    // Class property signals of CloudProviders-0.3.CloudProviders.DbusObject

    connect(sigName: "notify::account", callback: (($obj: DbusObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::account", callback: (($obj: DbusObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::account", ...args: any[]): void
    connect(sigName: "notify::provider", callback: (($obj: DbusObject, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider", callback: (($obj: DbusObject, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::provider", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #CloudProvidersDbusObject type is a specialized container of interfaces.
 * @interface 
 */
class DbusObject extends GObject.Object {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusObject

    static name: string
    static $gtype: GObject.GType<DbusObject>

    // Constructors of CloudProviders-0.3.CloudProviders.DbusObject

    constructor(config?: DbusObject.ConstructorProperties) 
    _init(config?: DbusObject.ConstructorProperties): void
}

module DbusProvider {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of CloudProviders-0.3.CloudProviders.DbusProvider

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Provider.Name">"Name"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        name?: string | null
    }

}

interface DbusProvider {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusProvider

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Provider.Name">"Name"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    name: string | null

    // Class property signals of CloudProviders-0.3.CloudProviders.DbusProvider

    connect(sigName: "notify::name", callback: (($obj: DbusProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DbusProvider, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Provider.top_of_page">org.freedesktop.CloudProviders.Provider</link>.
 * @interface 
 */
class DbusProvider extends GObject.Object {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusProvider

    static name: string
    static $gtype: GObject.GType<DbusProvider>

    // Constructors of CloudProviders-0.3.CloudProviders.DbusProvider

    constructor(config?: DbusProvider.ConstructorProperties) 
    _init(config?: DbusProvider.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Provider.top_of_page">org.freedesktop.CloudProviders.Provider</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #CloudProvidersDbusProvider interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module Account {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Account {

    // Own properties of CloudProviders-0.3.CloudProviders.Account

    readonly action_group: Gio.ActionGroup
    readonly actionGroup: Gio.ActionGroup
    readonly icon: Gio.Icon
    readonly menu_model: Gio.MenuModel
    readonly menuModel: Gio.MenuModel
    readonly name: string | null
    readonly path: string | null
    readonly status_details: string | null
    readonly statusDetails: string | null

    // Owm methods of CloudProviders-0.3.CloudProviders.Account

    /**
     * Get the action group exported in addition to the #GMenuModel from
     * cloud_providers_account_get_menu_model()
     * @returns The action group exported by the cloud provider account
     */
    get_action_group(): Gio.ActionGroup
    /**
     * Get the icon of the account
     * @returns The icon of the cloud provider account
     */
    get_icon(): Gio.Icon
    /**
     * Get the menu model exported for the account
     * @returns The menu model exported by the cloud provider account
     */
    get_menu_model(): Gio.MenuModel
    /**
     * Get the name of the account
     * @returns The name of the cloud provider account
     */
    get_name(): string
    /**
     * Get the directory path of the account
     * @returns The directory path of the cloud provider account
     */
    get_path(): string
    /**
     * Get the status of the account
     * @returns The status of the cloud provider account
     */
    get_status(): AccountStatus
    /**
     * Get the status details of the account
     * @returns The status detail description of the cloud provider account
     */
    get_status_details(): string

    // Class property signals of CloudProviders-0.3.CloudProviders.Account

    connect(sigName: "notify::action-group", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-group", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-group", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::menu-model", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menu-model", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::menu-model", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::path", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::status-details", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status-details", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status-details", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #CloudProvidersAccount is the basic object used to construct the integrator UI
 * and actions that a provider will present to the user, from the client side.
 * Integrators of the cloud providers can use this object to poll the
 * #CloudProvidersProvider menus, status and actions.
 * @class 
 */
class Account extends GObject.Object {

    // Own properties of CloudProviders-0.3.CloudProviders.Account

    static name: string
    static $gtype: GObject.GType<Account>

    // Constructors of CloudProviders-0.3.CloudProviders.Account

    constructor(config?: Account.ConstructorProperties) 
    /**
     * A #CloudProvidersAccount object are used to fetch details about cloud providers from DBus.
     * Object are usually fetched from cloud_providers_provider_get_accounts() as a list.
     * @constructor 
     * @param proxy DBus proxy
     */
    constructor(proxy: Gio.DBusProxy) 
    /**
     * A #CloudProvidersAccount object are used to fetch details about cloud providers from DBus.
     * Object are usually fetched from cloud_providers_provider_get_accounts() as a list.
     * @constructor 
     * @param proxy DBus proxy
     */
    static new(proxy: Gio.DBusProxy): Account
    _init(config?: Account.ConstructorProperties): void
}

module AccountExporter {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of CloudProviders-0.3.CloudProviders.AccountExporter

        action_group?: Gio.ActionGroup | null
        bus_name?: string | null
        icon?: Gio.Icon | null
        menu_model?: Gio.MenuModel | null
        name?: string | null
        path?: string | null
        provider?: ProviderExporter | null
        status_details?: string | null
        actionGroup?: Gio.ActionGroup | null
        busName?: string | null
        menuModel?: Gio.MenuModel | null
        statusDetails?: string | null
    }

}

interface AccountExporter {

    // Own properties of CloudProviders-0.3.CloudProviders.AccountExporter

    action_group: Gio.ActionGroup
    actionGroup: Gio.ActionGroup
    readonly bus_name: string | null
    readonly busName: string | null
    icon: Gio.Icon
    menu_model: Gio.MenuModel
    menuModel: Gio.MenuModel
    name: string | null
    path: string | null
    readonly provider: ProviderExporter
    status_details: string | null
    statusDetails: string | null

    // Owm methods of CloudProviders-0.3.CloudProviders.AccountExporter

    /**
     * In order for a menu exported with cloud_providers_account_exporter_export_menu to receive events
     * that will eventually call your callbacks, it needs the corresponding GActionGroup.
     * Use this function to export it.
     * @param action_group The GActionGroup to be used by the menu exported by cloud_providers_account_exporter_export_menu
     */
    set_action_group(action_group: Gio.ActionGroup): void
    set_icon(icon: Gio.Icon): void
    /**
     * One of the benefits of the integration is to display a menu with available
     * options for an account. Use this function to export a GMenuModel menu to be
     * displayed by the chosen integration by the desktop environment or application.
     * @param menu_model The menu model to export
     */
    set_menu_model(menu_model: Gio.MenuModel): void
    set_name(name: string): void
    set_path(path: string): void
    set_status(status: AccountStatus): void
    set_status_details(status_details: string): void

    // Class property signals of CloudProviders-0.3.CloudProviders.AccountExporter

    connect(sigName: "notify::action-group", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-group", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-group", ...args: any[]): void
    connect(sigName: "notify::bus-name", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bus-name", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bus-name", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::menu-model", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menu-model", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::menu-model", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::path", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::provider", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::provider", ...args: any[]): void
    connect(sigName: "notify::status-details", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status-details", callback: (($obj: AccountExporter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status-details", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class AccountExporter extends GObject.Object {

    // Own properties of CloudProviders-0.3.CloudProviders.AccountExporter

    static name: string
    static $gtype: GObject.GType<AccountExporter>

    // Constructors of CloudProviders-0.3.CloudProviders.AccountExporter

    constructor(config?: AccountExporter.ConstructorProperties) 
    /**
     * Create a new #CloudProvidersAccountExporter object
     * @constructor 
     * @param provider The provider to which it will be associated.
     * @param bus_name A unique name for the account               must be a valid DBus object name
     */
    constructor(provider: ProviderExporter, bus_name: string) 
    /**
     * Create a new #CloudProvidersAccountExporter object
     * @constructor 
     * @param provider The provider to which it will be associated.
     * @param bus_name A unique name for the account               must be a valid DBus object name
     */
    static new(provider: ProviderExporter, bus_name: string): AccountExporter
    _init(config?: AccountExporter.ConstructorProperties): void
}

module Collector {

    // Signal callback interfaces

    /**
     * Signal callback interface for `providers-changed`
     */
    interface ProvidersChangedSignalCallback {
        ($obj: Collector): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Collector {

    // Owm methods of CloudProviders-0.3.CloudProviders.Collector

    get_providers(): Provider[]
    update(): void

    // Own signals of CloudProviders-0.3.CloudProviders.Collector

    connect(sigName: "providers-changed", callback: Collector.ProvidersChangedSignalCallback): number
    connect_after(sigName: "providers-changed", callback: Collector.ProvidersChangedSignalCallback): number
    emit(sigName: "providers-changed", ...args: any[]): void

    // Class property signals of CloudProviders-0.3.CloudProviders.Collector

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #CloudProvidersCollector is a singleton to track all the changes in all providers.
 * Using a #CloudProvidersCollector you can implement integration for all of them at once
 * and represent them in the UI, track new providers added or removed and their
 * status.
 * @class 
 */
class Collector extends GObject.Object {

    // Own properties of CloudProviders-0.3.CloudProviders.Collector

    static name: string
    static $gtype: GObject.GType<Collector>

    // Constructors of CloudProviders-0.3.CloudProviders.Collector

    constructor(config?: Collector.ConstructorProperties) 
    _init(config?: Collector.ConstructorProperties): void
    /**
     * Main object to track changes in all providers.
     * @returns A manager singleton
     */
    static dup_singleton(): Collector
}

module DbusAccountProxy {

    // Constructor properties interface

    interface ConstructorProperties extends DbusAccount.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface DbusAccountProxy extends DbusAccount, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Class property signals of CloudProviders-0.3.CloudProviders.DbusAccountProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::path", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::status", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: "notify::status-details", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status-details", callback: (($obj: DbusAccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status-details", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #CloudProvidersDbusAccountProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class DbusAccountProxy extends Gio.DBusProxy {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusAccountProxy

    static name: string
    static $gtype: GObject.GType<DbusAccountProxy>

    // Constructors of CloudProviders-0.3.CloudProviders.DbusAccountProxy

    constructor(config?: DbusAccountProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with cloud_providers_dbus_account_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cloud_providers_dbus_account_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_finish(res: Gio.AsyncResult): DbusAccountProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with cloud_providers_dbus_account_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cloud_providers_dbus_account_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_finish(res: Gio.AsyncResult): DbusAccountProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like cloud_providers_dbus_account_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See cloud_providers_dbus_account_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): DbusAccountProxy

    // Overloads of new_for_bus_sync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @returns A #GDBusProxy or %NULL if error is set.    Free with g_object_unref().
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Account.top_of_page">org.freedesktop.CloudProviders.Account</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See cloud_providers_dbus_account_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): DbusAccountProxy

    // Overloads of new_sync

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and synchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to return immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a synchronous failable constructor. See g_dbus_proxy_new()
     * and g_dbus_proxy_new_finish() for the asynchronous version.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @returns A #GDBusProxy or %NULL if error is set.    Free with g_object_unref().
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: DbusAccountProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Account.top_of_page">org.freedesktop.CloudProviders.Account</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cloud_providers_dbus_account_proxy_new_finish() to get the result of the operation.
     * 
     * See cloud_providers_dbus_account_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<DbusAccountProxy> | null): void

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<DbusAccountProxy> | null): void

    // Overloads of new_for_bus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module DbusAccountSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends DbusAccount.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface DbusAccountSkeleton extends DbusAccount, Gio.DBusInterface {

    // Class property signals of CloudProviders-0.3.CloudProviders.DbusAccountSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: DbusAccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: DbusAccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: DbusAccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: DbusAccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: DbusAccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DbusAccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::path", callback: (($obj: DbusAccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::path", callback: (($obj: DbusAccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::status", callback: (($obj: DbusAccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: DbusAccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: "notify::status-details", callback: (($obj: DbusAccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status-details", callback: (($obj: DbusAccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status-details", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #CloudProvidersDbusAccountSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class DbusAccountSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusAccountSkeleton

    static name: string
    static $gtype: GObject.GType<DbusAccountSkeleton>

    // Constructors of CloudProviders-0.3.CloudProviders.DbusAccountSkeleton

    constructor(config?: DbusAccountSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Account.top_of_page">org.freedesktop.CloudProviders.Account</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Account.top_of_page">org.freedesktop.CloudProviders.Account</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    static new(): DbusAccountSkeleton
    _init(config?: DbusAccountSkeleton.ConstructorProperties): void
}

module DbusObjectManagerClient {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusObjectManager.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusObjectManagerClient.ConstructorProperties {
    }

}

interface DbusObjectManagerClient extends Gio.AsyncInitable, Gio.DBusObjectManager, Gio.Initable {

    // Class property signals of CloudProviders-0.3.CloudProviders.DbusObjectManagerClient

    connect(sigName: "notify::bus-type", callback: (($obj: DbusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bus-type", callback: (($obj: DbusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bus-type", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: DbusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: DbusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::flags", callback: (($obj: DbusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: DbusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::get-proxy-type-destroy-notify", callback: (($obj: DbusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::get-proxy-type-destroy-notify", callback: (($obj: DbusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::get-proxy-type-destroy-notify", ...args: any[]): void
    connect(sigName: "notify::get-proxy-type-func", callback: (($obj: DbusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::get-proxy-type-func", callback: (($obj: DbusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::get-proxy-type-func", ...args: any[]): void
    connect(sigName: "notify::get-proxy-type-user-data", callback: (($obj: DbusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::get-proxy-type-user-data", callback: (($obj: DbusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::get-proxy-type-user-data", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: DbusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DbusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::name-owner", callback: (($obj: DbusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name-owner", callback: (($obj: DbusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name-owner", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: (($obj: DbusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: DbusObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #CloudProvidersDbusObjectManagerClient structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class DbusObjectManagerClient extends Gio.DBusObjectManagerClient {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusObjectManagerClient

    static name: string
    static $gtype: GObject.GType<DbusObjectManagerClient>

    // Constructors of CloudProviders-0.3.CloudProviders.DbusObjectManagerClient

    constructor(config?: DbusObjectManagerClient.ConstructorProperties) 
    /**
     * Finishes an operation started with cloud_providers_dbus_object_manager_client_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cloud_providers_dbus_object_manager_client_new().
     * @returns The constructed object manager client or %NULL if @error is set.
     */
    static new_finish(res: Gio.AsyncResult): DbusObjectManagerClient

    // Overloads of new_finish

    /**
     * Finishes an operation started with g_dbus_object_manager_client_new().
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to g_dbus_object_manager_client_new().
     * @returns A   #GDBusObjectManagerClient object or %NULL if @error is set. Free   with g_object_unref().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusObjectManagerClient
    /**
     * Finishes an operation started with cloud_providers_dbus_object_manager_client_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cloud_providers_dbus_object_manager_client_new_for_bus().
     * @returns The constructed object manager client or %NULL if @error is set.
     */
    static new_for_bus_finish(res: Gio.AsyncResult): DbusObjectManagerClient

    // Overloads of new_for_bus_finish

    /**
     * Finishes an operation started with g_dbus_object_manager_client_new_for_bus().
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to g_dbus_object_manager_client_new_for_bus().
     * @returns A   #GDBusObjectManagerClient object or %NULL if @error is set. Free   with g_object_unref().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusObjectManagerClient
    /**
     * Like cloud_providers_dbus_object_manager_client_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See cloud_providers_dbus_object_manager_client_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusObjectManagerClientFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed object manager client or %NULL if @error is set.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): DbusObjectManagerClient

    // Overloads of new_for_bus_sync

    /**
     * Like g_dbus_object_manager_client_new_sync() but takes a #GBusType instead
     * of a #GDBusConnection.
     * 
     * This is a synchronous failable constructor - the calling thread is
     * blocked until a reply is received. See g_dbus_object_manager_client_new_for_bus()
     * for the asynchronous version.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Zero or more flags from the #GDBusObjectManagerClientFlags enumeration.
     * @param name The owner of the control object (unique or well-known name).
     * @param object_path The object path of the control object.
     * @param get_proxy_type_func A #GDBusProxyTypeFunc function or %NULL to always construct #GDBusProxy proxies.
     * @param cancellable A #GCancellable or %NULL
     * @returns A   #GDBusObjectManagerClient object or %NULL if @error is set. Free   with g_object_unref().
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, get_proxy_type_func: Gio.DBusProxyTypeFunc | null, cancellable: Gio.Cancellable | null): Gio.DBusObjectManagerClient
    /**
     * Synchronously creates #GDBusObjectManagerClient using cloud_providers_dbus_object_manager_client_get_proxy_type() as the #GDBusProxyTypeFunc. See g_dbus_object_manager_client_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See cloud_providers_dbus_object_manager_client_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusObjectManagerClientFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed object manager client or %NULL if @error is set.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): DbusObjectManagerClient

    // Overloads of new_sync

    /**
     * Creates a new #GDBusObjectManagerClient object.
     * 
     * This is a synchronous failable constructor - the calling thread is
     * blocked until a reply is received. See g_dbus_object_manager_client_new()
     * for the asynchronous version.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Zero or more flags from the #GDBusObjectManagerClientFlags enumeration.
     * @param name The owner of the control object (unique or well-known name), or %NULL when not using a message bus connection.
     * @param object_path The object path of the control object.
     * @param get_proxy_type_func A #GDBusProxyTypeFunc function or %NULL to always construct #GDBusProxy proxies.
     * @param cancellable A #GCancellable or %NULL
     * @returns A   #GDBusObjectManagerClient object or %NULL if @error is set. Free   with g_object_unref().
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, object_path: string, get_proxy_type_func: Gio.DBusProxyTypeFunc | null, cancellable: Gio.Cancellable | null): Gio.DBusObjectManagerClient
    _init(config?: DbusObjectManagerClient.ConstructorProperties): void
    /**
     * Asynchronously creates #GDBusObjectManagerClient using cloud_providers_dbus_object_manager_client_get_proxy_type() as the #GDBusProxyTypeFunc. See g_dbus_object_manager_client_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cloud_providers_dbus_object_manager_client_new_finish() to get the result of the operation.
     * 
     * See cloud_providers_dbus_object_manager_client_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusObjectManagerClientFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<DbusObjectManagerClient> | null): void

    // Overloads of new

    /**
     * Asynchronously creates a new #GDBusObjectManagerClient object.
     * 
     * This is an asynchronous failable constructor. When the result is
     * ready, `callback` will be invoked in the
     * [thread-default main context][g-main-context-push-thread-default]
     * of the thread you are calling this method from. You can
     * then call g_dbus_object_manager_client_new_finish() to get the result. See
     * g_dbus_object_manager_client_new_sync() for the synchronous version.
     * @param connection A #GDBusConnection.
     * @param flags Zero or more flags from the #GDBusObjectManagerClientFlags enumeration.
     * @param name The owner of the control object (unique or well-known name).
     * @param object_path The object path of the control object.
     * @param get_proxy_type_func A #GDBusProxyTypeFunc function or %NULL to always construct #GDBusProxy proxies.
     * @param cancellable A #GCancellable or %NULL
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, get_proxy_type_func: Gio.DBusProxyTypeFunc | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusObjectManagerClient> | null): void
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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<DbusObjectManagerClient> | null): void

    // Overloads of new_for_bus

    /**
     * Like g_dbus_object_manager_client_new() but takes a #GBusType instead of a
     * #GDBusConnection.
     * 
     * This is an asynchronous failable constructor. When the result is
     * ready, `callback` will be invoked in the
     * [thread-default main loop][g-main-context-push-thread-default]
     * of the thread you are calling this method from. You can
     * then call g_dbus_object_manager_client_new_for_bus_finish() to get the result. See
     * g_dbus_object_manager_client_new_for_bus_sync() for the synchronous version.
     * @param bus_type A #GBusType.
     * @param flags Zero or more flags from the #GDBusObjectManagerClientFlags enumeration.
     * @param name The owner of the control object (unique or well-known name).
     * @param object_path The object path of the control object.
     * @param get_proxy_type_func A #GDBusProxyTypeFunc function or %NULL to always construct #GDBusProxy proxies.
     * @param cancellable A #GCancellable or %NULL
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, object_path: string, get_proxy_type_func: Gio.DBusProxyTypeFunc | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusObjectManagerClient> | null): void
    /**
     * A #GDBusProxyTypeFunc that maps `interface_name` to the generated #GDBusObjectProxy derived and #GDBusProxy derived types.
     * @param manager A #GDBusObjectManagerClient.
     * @param object_path The object path of the remote object (unused).
     * @param interface_name Interface name of the remote object or %NULL to get the object proxy #GType.
     * @param user_data User data (unused).
     * @returns A #GDBusProxy derived #GType if @interface_name is not %NULL, otherwise the #GType for #CloudProvidersDbusObjectProxy.
     */
    static get_proxy_type(manager: Gio.DBusObjectManagerClient, object_path: string, interface_name: string | null, user_data: any | null): GObject.GType
}

module DbusObjectProxy {

    // Constructor properties interface

    interface ConstructorProperties extends DbusObject.ConstructorProperties, Gio.DBusObject.ConstructorProperties, Gio.DBusObjectProxy.ConstructorProperties {
    }

}

interface DbusObjectProxy extends DbusObject, Gio.DBusObject {

    // Class property signals of CloudProviders-0.3.CloudProviders.DbusObjectProxy

    connect(sigName: "notify::g-connection", callback: (($obj: DbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: DbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: DbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: DbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::account", callback: (($obj: DbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::account", callback: (($obj: DbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::account", ...args: any[]): void
    connect(sigName: "notify::provider", callback: (($obj: DbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider", callback: (($obj: DbusObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::provider", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #CloudProvidersDbusObjectProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class DbusObjectProxy extends Gio.DBusObjectProxy {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusObjectProxy

    static name: string
    static $gtype: GObject.GType<DbusObjectProxy>

    // Constructors of CloudProviders-0.3.CloudProviders.DbusObjectProxy

    constructor(config?: DbusObjectProxy.ConstructorProperties) 
    /**
     * Creates a new proxy object.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param object_path An object path.
     * @returns The proxy object.
     */
    constructor(connection: Gio.DBusConnection, object_path: string) 
    /**
     * Creates a new proxy object.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param object_path An object path.
     * @returns The proxy object.
     */
    static new(connection: Gio.DBusConnection, object_path: string): DbusObjectProxy

    // Overloads of new

    /**
     * Creates a new #GDBusObjectProxy for the given connection and
     * object path.
     * @constructor 
     * @param connection a #GDBusConnection
     * @param object_path the object path
     * @returns a new #GDBusObjectProxy
     */
    static new(connection: Gio.DBusConnection, object_path: string): Gio.DBusObjectProxy
    _init(config?: DbusObjectProxy.ConstructorProperties): void
}

module DbusObjectSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends DbusObject.ConstructorProperties, Gio.DBusObject.ConstructorProperties, Gio.DBusObjectSkeleton.ConstructorProperties {
    }

}

interface DbusObjectSkeleton extends DbusObject, Gio.DBusObject {

    // Owm methods of CloudProviders-0.3.CloudProviders.DbusObjectSkeleton

    /**
     * Sets the #CloudProvidersDbusAccount instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Account.top_of_page">org.freedesktop.CloudProviders.Account</link> on `object`.
     * @param interface_ A #CloudProvidersDbusAccount or %NULL to clear the interface.
     */
    set_account(interface_: DbusAccount | null): void
    /**
     * Sets the #CloudProvidersDbusProvider instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Provider.top_of_page">org.freedesktop.CloudProviders.Provider</link> on `object`.
     * @param interface_ A #CloudProvidersDbusProvider or %NULL to clear the interface.
     */
    set_provider(interface_: DbusProvider | null): void

    // Class property signals of CloudProviders-0.3.CloudProviders.DbusObjectSkeleton

    connect(sigName: "notify::g-object-path", callback: (($obj: DbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: DbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::account", callback: (($obj: DbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::account", callback: (($obj: DbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::account", ...args: any[]): void
    connect(sigName: "notify::provider", callback: (($obj: DbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider", callback: (($obj: DbusObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::provider", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #CloudProvidersDbusObjectSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class DbusObjectSkeleton extends Gio.DBusObjectSkeleton {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusObjectSkeleton

    static name: string
    static $gtype: GObject.GType<DbusObjectSkeleton>

    // Constructors of CloudProviders-0.3.CloudProviders.DbusObjectSkeleton

    constructor(config?: DbusObjectSkeleton.ConstructorProperties) 
    /**
     * Creates a new skeleton object.
     * @constructor 
     * @param object_path An object path.
     * @returns The skeleton object.
     */
    constructor(object_path: string) 
    /**
     * Creates a new skeleton object.
     * @constructor 
     * @param object_path An object path.
     * @returns The skeleton object.
     */
    static new(object_path: string): DbusObjectSkeleton

    // Overloads of new

    /**
     * Creates a new #GDBusObjectSkeleton.
     * @constructor 
     * @param object_path An object path.
     * @returns A #GDBusObjectSkeleton. Free with g_object_unref().
     */
    static new(object_path: string): Gio.DBusObjectSkeleton
    _init(config?: DbusObjectSkeleton.ConstructorProperties): void
}

module DbusProviderProxy {

    // Constructor properties interface

    interface ConstructorProperties extends DbusProvider.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface DbusProviderProxy extends DbusProvider, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Class property signals of CloudProviders-0.3.CloudProviders.DbusProviderProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: DbusProviderProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: DbusProviderProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: DbusProviderProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: DbusProviderProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: DbusProviderProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: DbusProviderProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: DbusProviderProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: DbusProviderProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: DbusProviderProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: DbusProviderProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: DbusProviderProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: DbusProviderProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: DbusProviderProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: DbusProviderProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: DbusProviderProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: DbusProviderProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: DbusProviderProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: DbusProviderProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: DbusProviderProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DbusProviderProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #CloudProvidersDbusProviderProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class DbusProviderProxy extends Gio.DBusProxy {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusProviderProxy

    static name: string
    static $gtype: GObject.GType<DbusProviderProxy>

    // Constructors of CloudProviders-0.3.CloudProviders.DbusProviderProxy

    constructor(config?: DbusProviderProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with cloud_providers_dbus_provider_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cloud_providers_dbus_provider_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_finish(res: Gio.AsyncResult): DbusProviderProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with cloud_providers_dbus_provider_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cloud_providers_dbus_provider_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_finish(res: Gio.AsyncResult): DbusProviderProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like cloud_providers_dbus_provider_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See cloud_providers_dbus_provider_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): DbusProviderProxy

    // Overloads of new_for_bus_sync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @returns A #GDBusProxy or %NULL if error is set.    Free with g_object_unref().
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Provider.top_of_page">org.freedesktop.CloudProviders.Provider</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See cloud_providers_dbus_provider_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): DbusProviderProxy

    // Overloads of new_sync

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and synchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to return immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a synchronous failable constructor. See g_dbus_proxy_new()
     * and g_dbus_proxy_new_finish() for the asynchronous version.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @returns A #GDBusProxy or %NULL if error is set.    Free with g_object_unref().
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: DbusProviderProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Provider.top_of_page">org.freedesktop.CloudProviders.Provider</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cloud_providers_dbus_provider_proxy_new_finish() to get the result of the operation.
     * 
     * See cloud_providers_dbus_provider_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<DbusProviderProxy> | null): void

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<DbusProviderProxy> | null): void

    // Overloads of new_for_bus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module DbusProviderSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends DbusProvider.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface DbusProviderSkeleton extends DbusProvider, Gio.DBusInterface {

    // Class property signals of CloudProviders-0.3.CloudProviders.DbusProviderSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: DbusProviderSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: DbusProviderSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: DbusProviderSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DbusProviderSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #CloudProvidersDbusProviderSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class DbusProviderSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusProviderSkeleton

    static name: string
    static $gtype: GObject.GType<DbusProviderSkeleton>

    // Constructors of CloudProviders-0.3.CloudProviders.DbusProviderSkeleton

    constructor(config?: DbusProviderSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Provider.top_of_page">org.freedesktop.CloudProviders.Provider</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Provider.top_of_page">org.freedesktop.CloudProviders.Provider</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    static new(): DbusProviderSkeleton
    _init(config?: DbusProviderSkeleton.ConstructorProperties): void
}

module Provider {

    // Signal callback interfaces

    /**
     * Signal callback interface for `accounts-changed`
     */
    interface AccountsChangedSignalCallback {
        ($obj: Provider): void
    }

    /**
     * Signal callback interface for `removed`
     */
    interface RemovedSignalCallback {
        ($obj: Provider): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Provider {

    // Own properties of CloudProviders-0.3.CloudProviders.Provider

    readonly name: string | null

    // Owm methods of CloudProviders-0.3.CloudProviders.Provider

    get_accounts(): Account[]
    get_name(): string

    // Own signals of CloudProviders-0.3.CloudProviders.Provider

    connect(sigName: "accounts-changed", callback: Provider.AccountsChangedSignalCallback): number
    connect_after(sigName: "accounts-changed", callback: Provider.AccountsChangedSignalCallback): number
    emit(sigName: "accounts-changed", ...args: any[]): void
    connect(sigName: "removed", callback: Provider.RemovedSignalCallback): number
    connect_after(sigName: "removed", callback: Provider.RemovedSignalCallback): number
    emit(sigName: "removed", ...args: any[]): void

    // Class property signals of CloudProviders-0.3.CloudProviders.Provider

    connect(sigName: "notify::name", callback: (($obj: Provider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Provider, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #CloudProvidersProvider is the basic object object for client implementers
 * that contains the properties of the provider such as name, and the accounts
 * associated with it.
 * @class 
 */
class Provider extends GObject.Object {

    // Own properties of CloudProviders-0.3.CloudProviders.Provider

    static name: string
    static $gtype: GObject.GType<Provider>

    // Constructors of CloudProviders-0.3.CloudProviders.Provider

    constructor(config?: Provider.ConstructorProperties) 
    constructor(bus_name: string, object_path: string) 
    static new(bus_name: string, object_path: string): Provider
    _init(config?: Provider.ConstructorProperties): void
}

module ProviderExporter {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of CloudProviders-0.3.CloudProviders.ProviderExporter

        bus?: Gio.DBusConnection | null
        bus_name?: string | null
        bus_path?: string | null
        name?: string | null
        busName?: string | null
        busPath?: string | null
    }

}

interface ProviderExporter {

    // Own properties of CloudProviders-0.3.CloudProviders.ProviderExporter

    readonly bus: Gio.DBusConnection
    readonly bus_name: string | null
    readonly busName: string | null
    readonly bus_path: string | null
    readonly busPath: string | null
    name: string | null

    // Owm methods of CloudProviders-0.3.CloudProviders.ProviderExporter

    get_name(): string
    /**
     * Each cloud provider can have a variety of account associated with it. Use this
     * function to remove the accounts that were added when created by cloud_providers_account_exporter_new().
     * @param account The account object
     */
    remove_account(account: AccountExporter): void
    set_name(name: string): void

    // Class property signals of CloudProviders-0.3.CloudProviders.ProviderExporter

    connect(sigName: "notify::bus", callback: (($obj: ProviderExporter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bus", callback: (($obj: ProviderExporter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bus", ...args: any[]): void
    connect(sigName: "notify::bus-name", callback: (($obj: ProviderExporter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bus-name", callback: (($obj: ProviderExporter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bus-name", ...args: any[]): void
    connect(sigName: "notify::bus-path", callback: (($obj: ProviderExporter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bus-path", callback: (($obj: ProviderExporter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bus-path", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ProviderExporter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ProviderExporter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #CloudProvidersProviderExporter is the base object representing a single cloud provider.
 * Multiple #CloudProvidersAccountExporter objects can be added with cloud_providers_provider_exporter_add_account()
 * After adding the initial set of accounts cloud_providers_provider_exporter_export_objects() must be called.
 * @class 
 */
class ProviderExporter extends GObject.Object {

    // Own properties of CloudProviders-0.3.CloudProviders.ProviderExporter

    static name: string
    static $gtype: GObject.GType<ProviderExporter>

    // Constructors of CloudProviders-0.3.CloudProviders.ProviderExporter

    constructor(config?: ProviderExporter.ConstructorProperties) 
    constructor(bus: Gio.DBusConnection, bus_name: string, bus_path: string) 
    static new(bus: Gio.DBusConnection, bus_name: string, bus_path: string): ProviderExporter
    _init(config?: ProviderExporter.ConstructorProperties): void
}

interface AccountClass {

    // Own fields of CloudProviders-0.3.CloudProviders.AccountClass

    parent_class: GObject.ObjectClass
}

abstract class AccountClass {

    // Own properties of CloudProviders-0.3.CloudProviders.AccountClass

    static name: string
}

interface AccountExporterClass {

    // Own fields of CloudProviders-0.3.CloudProviders.AccountExporterClass

    parent_class: GObject.ObjectClass
}

abstract class AccountExporterClass {

    // Own properties of CloudProviders-0.3.CloudProviders.AccountExporterClass

    static name: string
}

interface CollectorClass {

    // Own fields of CloudProviders-0.3.CloudProviders.CollectorClass

    parent_class: GObject.ObjectClass
}

abstract class CollectorClass {

    // Own properties of CloudProviders-0.3.CloudProviders.CollectorClass

    static name: string
}

interface DbusAccountIface {

    // Own fields of CloudProviders-0.3.CloudProviders.DbusAccountIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    get_icon: (object: DbusAccount) => string | null
    get_name: (object: DbusAccount) => string | null
    get_path: (object: DbusAccount) => string | null
    get_status: (object: DbusAccount) => number
    get_status_details: (object: DbusAccount) => string | null
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Account.top_of_page">org.freedesktop.CloudProviders.Account</link>.
 * @record 
 */
abstract class DbusAccountIface {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusAccountIface

    static name: string
}

interface DbusAccountProxyClass {

    // Own fields of CloudProviders-0.3.CloudProviders.DbusAccountProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #CloudProvidersDbusAccountProxy.
 * @record 
 */
abstract class DbusAccountProxyClass {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusAccountProxyClass

    static name: string
}

interface DbusAccountProxyPrivate {
}

class DbusAccountProxyPrivate {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusAccountProxyPrivate

    static name: string
}

interface DbusAccountSkeletonClass {

    // Own fields of CloudProviders-0.3.CloudProviders.DbusAccountSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #CloudProvidersDbusAccountSkeleton.
 * @record 
 */
abstract class DbusAccountSkeletonClass {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusAccountSkeletonClass

    static name: string
}

interface DbusAccountSkeletonPrivate {
}

class DbusAccountSkeletonPrivate {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusAccountSkeletonPrivate

    static name: string
}

interface DbusObjectIface {

    // Own fields of CloudProviders-0.3.CloudProviders.DbusObjectIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
}

/**
 * Virtual table for the #CloudProvidersDbusObject interface.
 * @record 
 */
abstract class DbusObjectIface {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusObjectIface

    static name: string
}

interface DbusObjectManagerClientClass {

    // Own fields of CloudProviders-0.3.CloudProviders.DbusObjectManagerClientClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusObjectManagerClientClass
}

/**
 * Class structure for #CloudProvidersDbusObjectManagerClient.
 * @record 
 */
abstract class DbusObjectManagerClientClass {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusObjectManagerClientClass

    static name: string
}

interface DbusObjectManagerClientPrivate {
}

class DbusObjectManagerClientPrivate {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusObjectManagerClientPrivate

    static name: string
}

interface DbusObjectProxyClass {

    // Own fields of CloudProviders-0.3.CloudProviders.DbusObjectProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusObjectProxyClass
}

/**
 * Class structure for #CloudProvidersDbusObjectProxy.
 * @record 
 */
abstract class DbusObjectProxyClass {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusObjectProxyClass

    static name: string
}

interface DbusObjectProxyPrivate {
}

class DbusObjectProxyPrivate {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusObjectProxyPrivate

    static name: string
}

interface DbusObjectSkeletonClass {

    // Own fields of CloudProviders-0.3.CloudProviders.DbusObjectSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusObjectSkeletonClass
}

/**
 * Class structure for #CloudProvidersDbusObjectSkeleton.
 * @record 
 */
abstract class DbusObjectSkeletonClass {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusObjectSkeletonClass

    static name: string
}

interface DbusObjectSkeletonPrivate {
}

class DbusObjectSkeletonPrivate {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusObjectSkeletonPrivate

    static name: string
}

interface DbusProviderIface {

    // Own fields of CloudProviders-0.3.CloudProviders.DbusProviderIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    get_name: (object: DbusProvider) => string | null
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Provider.top_of_page">org.freedesktop.CloudProviders.Provider</link>.
 * @record 
 */
abstract class DbusProviderIface {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusProviderIface

    static name: string
}

interface DbusProviderProxyClass {

    // Own fields of CloudProviders-0.3.CloudProviders.DbusProviderProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #CloudProvidersDbusProviderProxy.
 * @record 
 */
abstract class DbusProviderProxyClass {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusProviderProxyClass

    static name: string
}

interface DbusProviderProxyPrivate {
}

class DbusProviderProxyPrivate {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusProviderProxyPrivate

    static name: string
}

interface DbusProviderSkeletonClass {

    // Own fields of CloudProviders-0.3.CloudProviders.DbusProviderSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #CloudProvidersDbusProviderSkeleton.
 * @record 
 */
abstract class DbusProviderSkeletonClass {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusProviderSkeletonClass

    static name: string
}

interface DbusProviderSkeletonPrivate {
}

class DbusProviderSkeletonPrivate {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusProviderSkeletonPrivate

    static name: string
}

interface ProviderClass {

    // Own fields of CloudProviders-0.3.CloudProviders.ProviderClass

    parent_class: GObject.ObjectClass
}

abstract class ProviderClass {

    // Own properties of CloudProviders-0.3.CloudProviders.ProviderClass

    static name: string
}

interface ProviderExporterClass {

    // Own fields of CloudProviders-0.3.CloudProviders.ProviderExporterClass

    parent_class: GObject.ObjectClass
}

abstract class ProviderExporterClass {

    // Own properties of CloudProviders-0.3.CloudProviders.ProviderExporterClass

    static name: string
}

interface _AccountClass {

    // Own fields of CloudProviders-0.3.CloudProviders._AccountClass

    parent_class: GObject.ObjectClass
}

class _AccountClass {

    // Own properties of CloudProviders-0.3.CloudProviders._AccountClass

    static name: string
}

interface _AccountExporterClass {

    // Own fields of CloudProviders-0.3.CloudProviders._AccountExporterClass

    parent_class: GObject.ObjectClass
}

class _AccountExporterClass {

    // Own properties of CloudProviders-0.3.CloudProviders._AccountExporterClass

    static name: string
}

interface _CollectorClass {

    // Own fields of CloudProviders-0.3.CloudProviders._CollectorClass

    parent_class: GObject.ObjectClass
}

class _CollectorClass {

    // Own properties of CloudProviders-0.3.CloudProviders._CollectorClass

    static name: string
}

interface _ProviderExporterClass {

    // Own fields of CloudProviders-0.3.CloudProviders._ProviderExporterClass

    parent_class: GObject.ObjectClass
}

class _ProviderExporterClass {

    // Own properties of CloudProviders-0.3.CloudProviders._ProviderExporterClass

    static name: string
}

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

export default CloudProviders;
// END