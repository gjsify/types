
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-cloudproviders-0.3-import.d.ts';
    
/**
 * CloudProviders-0.3
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export enum AccountStatus {
    INVALID,
    IDLE,
    SYNCING,
    ERROR,
}
export const ACCOUNT_DBUS_IFACE: string | null
export const PROVIDER_DBUS_IFACE: string | null
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Account.top_of_page">org.freedesktop.CloudProviders.Account</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
export function dbusAccountInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #CloudProvidersDbusAccount interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
export function dbusAccountOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Provider.top_of_page">org.freedesktop.CloudProviders.Provider</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
export function dbusProviderInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #CloudProvidersDbusProvider interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
export function dbusProviderOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export module DbusAccount {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

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
        statusDetails?: string | null
    }

}

export interface DbusAccount {

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
    statusDetails: string | null
    __gtype__: number

    // Class property signals of CloudProviders-0.3.CloudProviders.DbusAccount

    connect(sigName: "notify::icon", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::path", callback: (...args: any[]) => void): number
    on(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::status", callback: (...args: any[]) => void): number
    on(sigName: "notify::status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: "notify::status-details", callback: (...args: any[]) => void): number
    on(sigName: "notify::status-details", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::status-details", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::status-details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::status-details", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Account.top_of_page">org.freedesktop.CloudProviders.Account</link>.
 * @interface 
 */
export class DbusAccount extends GObject.Object {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusAccount

    static name: string

    // Constructors of CloudProviders-0.3.CloudProviders.DbusAccount

    constructor(config?: DbusAccount.ConstructorProperties) 
    _init(config?: DbusAccount.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Account.top_of_page">org.freedesktop.CloudProviders.Account</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #CloudProvidersDbusAccount interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

export module DbusObject {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.DBusObject.ConstructorProperties, GObject.Object.ConstructorProperties {

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

export interface DbusObject extends Gio.DBusObject {

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
    __gtype__: number

    // Owm methods of CloudProviders-0.3.CloudProviders.DbusObject

    /**
     * Gets the #CloudProvidersDbusAccount instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Account.top_of_page">org.freedesktop.CloudProviders.Account</link> on `object,` if any.
     * @returns A #CloudProvidersDbusAccount that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    getAccount(): DbusAccount | null
    /**
     * Gets the #CloudProvidersDbusProvider instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Provider.top_of_page">org.freedesktop.CloudProviders.Provider</link> on `object,` if any.
     * @returns A #CloudProvidersDbusProvider that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    getProvider(): DbusProvider | null

    // Class property signals of CloudProviders-0.3.CloudProviders.DbusObject

    connect(sigName: "notify::account", callback: (...args: any[]) => void): number
    on(sigName: "notify::account", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::account", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::account", ...args: any[]): void
    connect(sigName: "notify::provider", callback: (...args: any[]) => void): number
    on(sigName: "notify::provider", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::provider", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::provider", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #CloudProvidersDbusObject type is a specialized container of interfaces.
 * @interface 
 */
export class DbusObject extends GObject.Object {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusObject

    static name: string

    // Constructors of CloudProviders-0.3.CloudProviders.DbusObject

    constructor(config?: DbusObject.ConstructorProperties) 
    _init(config?: DbusObject.ConstructorProperties): void
}

export module DbusProvider {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of CloudProviders-0.3.CloudProviders.DbusProvider

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Provider.Name">"Name"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        name?: string | null
    }

}

export interface DbusProvider {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusProvider

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-CloudProviders-Provider.Name">"Name"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    name: string | null
    __gtype__: number

    // Class property signals of CloudProviders-0.3.CloudProviders.DbusProvider

    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Provider.top_of_page">org.freedesktop.CloudProviders.Provider</link>.
 * @interface 
 */
export class DbusProvider extends GObject.Object {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusProvider

    static name: string

    // Constructors of CloudProviders-0.3.CloudProviders.DbusProvider

    constructor(config?: DbusProvider.ConstructorProperties) 
    _init(config?: DbusProvider.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Provider.top_of_page">org.freedesktop.CloudProviders.Provider</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #CloudProvidersDbusProvider interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

export module Account {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Account {

    // Own properties of CloudProviders-0.3.CloudProviders.Account

    readonly actionGroup: Gio.ActionGroup
    readonly icon: Gio.Icon
    readonly menuModel: Gio.MenuModel
    readonly name: string | null
    readonly path: string | null
    readonly statusDetails: string | null
    __gtype__: number

    // Owm methods of CloudProviders-0.3.CloudProviders.Account

    /**
     * Get the action group exported in addition to the #GMenuModel from
     * cloud_providers_account_get_menu_model()
     * @returns The action group exported by the cloud provider account
     */
    getActionGroup(): Gio.ActionGroup
    /**
     * Get the icon of the account
     * @returns The icon of the cloud provider account
     */
    getIcon(): Gio.Icon
    /**
     * Get the menu model exported for the account
     * @returns The menu model exported by the cloud provider account
     */
    getMenuModel(): Gio.MenuModel
    /**
     * Get the name of the account
     * @returns The name of the cloud provider account
     */
    getName(): string | null
    /**
     * Get the directory path of the account
     * @returns The directory path of the cloud provider account
     */
    getPath(): string | null
    /**
     * Get the status of the account
     * @returns The status of the cloud provider account
     */
    getStatus(): AccountStatus
    /**
     * Get the status details of the account
     * @returns The status detail description of the cloud provider account
     */
    getStatusDetails(): string | null

    // Class property signals of CloudProviders-0.3.CloudProviders.Account

    connect(sigName: "notify::action-group", callback: (...args: any[]) => void): number
    on(sigName: "notify::action-group", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::action-group", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::action-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::action-group", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::menu-model", callback: (...args: any[]) => void): number
    on(sigName: "notify::menu-model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::menu-model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::menu-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::menu-model", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::path", callback: (...args: any[]) => void): number
    on(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::status-details", callback: (...args: any[]) => void): number
    on(sigName: "notify::status-details", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::status-details", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::status-details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::status-details", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * #CloudProvidersAccount is the basic object used to construct the integrator UI
 * and actions that a provider will present to the user, from the client side.
 * Integrators of the cloud providers can use this object to poll the
 * #CloudProvider menus, status and actions.
 * @class 
 */
export class Account extends GObject.Object {

    // Own properties of CloudProviders-0.3.CloudProviders.Account

    static name: string

    // Constructors of CloudProviders-0.3.CloudProviders.Account

    constructor(config?: Account.ConstructorProperties) 
    /**
     * A #CloudProvidersAccount object are used to fetch details about cloud providers from DBus.
     * Object are usually fetched from cloud_providers_get_providers() as a list.
     * @constructor 
     * @param proxy DBus proxy
     */
    constructor(proxy: Gio.DBusProxy) 
    /**
     * A #CloudProvidersAccount object are used to fetch details about cloud providers from DBus.
     * Object are usually fetched from cloud_providers_get_providers() as a list.
     * @constructor 
     * @param proxy DBus proxy
     */
    static new(proxy: Gio.DBusProxy): Account
    _init(config?: Account.ConstructorProperties): void
}

export module AccountExporter {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of CloudProviders-0.3.CloudProviders.AccountExporter

        actionGroup?: Gio.ActionGroup | null
        busName?: string | null
        icon?: Gio.Icon | null
        menuModel?: Gio.MenuModel | null
        name?: string | null
        path?: string | null
        provider?: ProviderExporter | null
        statusDetails?: string | null
    }

}

export interface AccountExporter {

    // Own properties of CloudProviders-0.3.CloudProviders.AccountExporter

    actionGroup: Gio.ActionGroup
    readonly busName: string | null
    icon: Gio.Icon
    menuModel: Gio.MenuModel
    name: string | null
    path: string | null
    readonly provider: ProviderExporter
    statusDetails: string | null
    __gtype__: number

    // Owm methods of CloudProviders-0.3.CloudProviders.AccountExporter

    /**
     * In order for a menu exported with cloud_providers_account_exporter_export_menu to receive events
     * that will eventually call your callbacks, it needs the corresponding GAcionGroup.
     * Use this function to export it.
     * @param actionGroup The GActionGroup to be used by the menu exported by cloud_providers_account_exporter_export_menu
     */
    setActionGroup(actionGroup: Gio.ActionGroup): void
    setIcon(icon: Gio.Icon): void
    /**
     * One of the benefits of the integration is to display a menu with available
     * options for an account. Use this function to export a GMenuModel menu to be
     * displayed by the choosen integration by the desktop environment or application.
     * @param menuModel The menu model to export
     */
    setMenuModel(menuModel: Gio.MenuModel): void
    setName(name: string | null): void
    setPath(path: string | null): void
    setStatus(status: AccountStatus): void
    setStatusDetails(statusDetails: string | null): void

    // Class property signals of CloudProviders-0.3.CloudProviders.AccountExporter

    connect(sigName: "notify::action-group", callback: (...args: any[]) => void): number
    on(sigName: "notify::action-group", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::action-group", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::action-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::action-group", ...args: any[]): void
    connect(sigName: "notify::bus-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::bus-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bus-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bus-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bus-name", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::menu-model", callback: (...args: any[]) => void): number
    on(sigName: "notify::menu-model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::menu-model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::menu-model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::menu-model", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::path", callback: (...args: any[]) => void): number
    on(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::provider", callback: (...args: any[]) => void): number
    on(sigName: "notify::provider", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::provider", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::provider", ...args: any[]): void
    connect(sigName: "notify::status-details", callback: (...args: any[]) => void): number
    on(sigName: "notify::status-details", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::status-details", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::status-details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::status-details", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class AccountExporter extends GObject.Object {

    // Own properties of CloudProviders-0.3.CloudProviders.AccountExporter

    static name: string

    // Constructors of CloudProviders-0.3.CloudProviders.AccountExporter

    constructor(config?: AccountExporter.ConstructorProperties) 
    /**
     * Create a new #CloudProvidersAccountExporter object
     * @constructor 
     * @param provider The provider to which it will be associated.
     * @param busName A unique name for the account               must be a valid DBus object name
     */
    constructor(provider: ProviderExporter, busName: string | null) 
    /**
     * Create a new #CloudProvidersAccountExporter object
     * @constructor 
     * @param provider The provider to which it will be associated.
     * @param busName A unique name for the account               must be a valid DBus object name
     */
    static new(provider: ProviderExporter, busName: string | null): AccountExporter
    _init(config?: AccountExporter.ConstructorProperties): void
}

export module Collector {

    // Signal callback interfaces

    /**
     * Signal callback interface for `providers-changed`
     */
    export interface ProvidersChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Collector {

    // Own properties of CloudProviders-0.3.CloudProviders.Collector

    __gtype__: number

    // Owm methods of CloudProviders-0.3.CloudProviders.Collector

    getProviders(): Provider[]
    update(): void

    // Own signals of CloudProviders-0.3.CloudProviders.Collector

    connect(sigName: "providers-changed", callback: Collector.ProvidersChangedSignalCallback): number
    on(sigName: "providers-changed", callback: Collector.ProvidersChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "providers-changed", callback: Collector.ProvidersChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "providers-changed", callback: Collector.ProvidersChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "providers-changed", ...args: any[]): void

    // Class property signals of CloudProviders-0.3.CloudProviders.Collector

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * #CloudProvidersCollector is a singleton to track all the changes in all providers.
 * Using a #CloudProvidersCollector you can implement integration for all of them at once
 * and represent them in the UI, track new providers added or removed and their
 * status.
 * @class 
 */
export class Collector extends GObject.Object {

    // Own properties of CloudProviders-0.3.CloudProviders.Collector

    static name: string

    // Constructors of CloudProviders-0.3.CloudProviders.Collector

    constructor(config?: Collector.ConstructorProperties) 
    _init(config?: Collector.ConstructorProperties): void
    /**
     * Main object to track changes in all providers.
     * @returns A manager singleton
     */
    static dupSingleton(): Collector
}

export module DbusAccountProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends DbusAccount.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

export interface DbusAccountProxy extends DbusAccount, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusAccountProxy

    __gtype__: number

    // Class property signals of CloudProviders-0.3.CloudProviders.DbusAccountProxy

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::path", callback: (...args: any[]) => void): number
    on(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::status", callback: (...args: any[]) => void): number
    on(sigName: "notify::status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: "notify::status-details", callback: (...args: any[]) => void): number
    on(sigName: "notify::status-details", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::status-details", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::status-details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::status-details", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #CloudProvidersDbusAccountProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class DbusAccountProxy extends Gio.DBusProxy {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusAccountProxy

    static name: string

    // Constructors of CloudProviders-0.3.CloudProviders.DbusAccountProxy

    constructor(config?: DbusAccountProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with cloud_providers_dbus_account_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cloud_providers_dbus_account_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newFinish(res: Gio.AsyncResult): DbusAccountProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with cloud_providers_dbus_account_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cloud_providers_dbus_account_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusFinish(res: Gio.AsyncResult): DbusAccountProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like cloud_providers_dbus_account_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See cloud_providers_dbus_account_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): DbusAccountProxy

    // Overloads of newForBusSync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @returns A #GDBusProxy or %NULL if error is set.    Free with g_object_unref().
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string | null, interfaceName: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
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
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): DbusAccountProxy

    // Overloads of newSync

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @returns A #GDBusProxy or %NULL if error is set.    Free with g_object_unref().
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string | null, interfaceName: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
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
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string | null, interfaceName: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Like cloud_providers_dbus_account_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cloud_providers_dbus_account_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See cloud_providers_dbus_account_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

    // Overloads of newForBus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string | null, interfaceName: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
}

export module DbusAccountSkeleton {

    // Constructor properties interface

    export interface ConstructorProperties extends DbusAccount.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

export interface DbusAccountSkeleton extends DbusAccount, Gio.DBusInterface {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusAccountSkeleton

    __gtype__: number

    // Conflicting methods

    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    getInfo(): Gio.DBusInterfaceInfo
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     * @returns A #GDBusInterfaceInfo (never %NULL). Do not free.
     */
    getInfo(): Gio.DBusInterfaceInfo

    // Overloads of getInfo

    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    getInfo(): Gio.DBusInterfaceInfo

    // Class property signals of CloudProviders-0.3.CloudProviders.DbusAccountSkeleton

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::path", callback: (...args: any[]) => void): number
    on(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::status", callback: (...args: any[]) => void): number
    on(sigName: "notify::status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: "notify::status-details", callback: (...args: any[]) => void): number
    on(sigName: "notify::status-details", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::status-details", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::status-details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::status-details", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #CloudProvidersDbusAccountSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class DbusAccountSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusAccountSkeleton

    static name: string

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

export module DbusObjectManagerClient {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusObjectManager.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusObjectManagerClient.ConstructorProperties {
    }

}

export interface DbusObjectManagerClient extends Gio.AsyncInitable, Gio.DBusObjectManager, Gio.Initable {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusObjectManagerClient

    __gtype__: number

    // Class property signals of CloudProviders-0.3.CloudProviders.DbusObjectManagerClient

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::bus-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bus-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bus-type", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::get-proxy-type-destroy-notify", callback: (...args: any[]) => void): number
    on(sigName: "notify::get-proxy-type-destroy-notify", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::get-proxy-type-destroy-notify", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::get-proxy-type-destroy-notify", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::get-proxy-type-destroy-notify", ...args: any[]): void
    connect(sigName: "notify::get-proxy-type-func", callback: (...args: any[]) => void): number
    on(sigName: "notify::get-proxy-type-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::get-proxy-type-func", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::get-proxy-type-func", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::get-proxy-type-func", ...args: any[]): void
    connect(sigName: "notify::get-proxy-type-user-data", callback: (...args: any[]) => void): number
    on(sigName: "notify::get-proxy-type-user-data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::get-proxy-type-user-data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::get-proxy-type-user-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::get-proxy-type-user-data", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::name-owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name-owner", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #CloudProvidersDbusObjectManagerClient structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class DbusObjectManagerClient extends Gio.DBusObjectManagerClient {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusObjectManagerClient

    static name: string

    // Constructors of CloudProviders-0.3.CloudProviders.DbusObjectManagerClient

    constructor(config?: DbusObjectManagerClient.ConstructorProperties) 
    /**
     * Finishes an operation started with cloud_providers_dbus_object_manager_client_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cloud_providers_dbus_object_manager_client_new().
     * @returns The constructed object manager client or %NULL if @error is set.
     */
    static newFinish(res: Gio.AsyncResult): DbusObjectManagerClient

    // Overloads of newFinish

    /**
     * Finishes an operation started with g_dbus_object_manager_client_new().
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to g_dbus_object_manager_client_new().
     * @returns A   #GDBusObjectManagerClient object or %NULL if @error is set. Free   with g_object_unref().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusObjectManagerClient
    /**
     * Finishes an operation started with cloud_providers_dbus_object_manager_client_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cloud_providers_dbus_object_manager_client_new_for_bus().
     * @returns The constructed object manager client or %NULL if @error is set.
     */
    static newForBusFinish(res: Gio.AsyncResult): DbusObjectManagerClient

    // Overloads of newForBusFinish

    /**
     * Finishes an operation started with g_dbus_object_manager_client_new_for_bus().
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to g_dbus_object_manager_client_new_for_bus().
     * @returns A   #GDBusObjectManagerClient object or %NULL if @error is set. Free   with g_object_unref().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusObjectManagerClient
    /**
     * Like cloud_providers_dbus_object_manager_client_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See cloud_providers_dbus_object_manager_client_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusObjectManagerClientFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed object manager client or %NULL if @error is set.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): DbusObjectManagerClient

    // Overloads of newForBusSync

    /**
     * Like g_dbus_object_manager_client_new_sync() but takes a #GBusType instead
     * of a #GDBusConnection.
     * 
     * This is a synchronous failable constructor - the calling thread is
     * blocked until a reply is received. See g_dbus_object_manager_client_new_for_bus()
     * for the asynchronous version.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Zero or more flags from the #GDBusObjectManagerClientFlags enumeration.
     * @param name The owner of the control object (unique or well-known name).
     * @param objectPath The object path of the control object.
     * @param getProxyTypeFunc A #GDBusProxyTypeFunc function or %NULL to always construct #GDBusProxy proxies.
     * @param cancellable A #GCancellable or %NULL
     * @returns A   #GDBusObjectManagerClient object or %NULL if @error is set. Free   with g_object_unref().
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string | null, objectPath: string | null, getProxyTypeFunc: Gio.DBusProxyTypeFunc | null, cancellable: Gio.Cancellable | null): Gio.DBusObjectManagerClient
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
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed object manager client or %NULL if @error is set.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): DbusObjectManagerClient

    // Overloads of newSync

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
     * @param objectPath The object path of the control object.
     * @param getProxyTypeFunc A #GDBusProxyTypeFunc function or %NULL to always construct #GDBusProxy proxies.
     * @param cancellable A #GCancellable or %NULL
     * @returns A   #GDBusObjectManagerClient object or %NULL if @error is set. Free   with g_object_unref().
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, objectPath: string | null, getProxyTypeFunc: Gio.DBusProxyTypeFunc | null, cancellable: Gio.Cancellable | null): Gio.DBusObjectManagerClient
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
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

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
     * @param objectPath The object path of the control object.
     * @param getProxyTypeFunc A #GDBusProxyTypeFunc function or %NULL to always construct #GDBusProxy proxies.
     * @param cancellable A #GCancellable or %NULL
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, objectPath: string | null, getProxyTypeFunc: Gio.DBusProxyTypeFunc | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Like cloud_providers_dbus_object_manager_client_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cloud_providers_dbus_object_manager_client_new_for_bus_finish() to get the result of the operation.
     * 
     * See cloud_providers_dbus_object_manager_client_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusObjectManagerClientFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

    // Overloads of newForBus

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
     * @param busType A #GBusType.
     * @param flags Zero or more flags from the #GDBusObjectManagerClientFlags enumeration.
     * @param name The owner of the control object (unique or well-known name).
     * @param objectPath The object path of the control object.
     * @param getProxyTypeFunc A #GDBusProxyTypeFunc function or %NULL to always construct #GDBusProxy proxies.
     * @param cancellable A #GCancellable or %NULL
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string | null, objectPath: string | null, getProxyTypeFunc: Gio.DBusProxyTypeFunc | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * A #GDBusProxyTypeFunc that maps `interface_name` to the generated #GDBusObjectProxy derived and #GDBusProxy derived types.
     * @param manager A #GDBusObjectManagerClient.
     * @param objectPath The object path of the remote object (unused).
     * @param interfaceName Interface name of the remote object or %NULL to get the object proxy #GType.
     * @param userData User data (unused).
     * @returns A #GDBusProxy derived #GType if @interface_name is not %NULL, otherwise the #GType for #CloudProvidersDbusObjectProxy.
     */
    static getProxyType(manager: Gio.DBusObjectManagerClient, objectPath: string | null, interfaceName: string | null, userData: any | null): GObject.GType
}

export module DbusObjectProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends DbusObject.ConstructorProperties, Gio.DBusObject.ConstructorProperties, Gio.DBusObjectProxy.ConstructorProperties {
    }

}

export interface DbusObjectProxy extends DbusObject, Gio.DBusObject {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusObjectProxy

    __gtype__: number

    // Class property signals of CloudProviders-0.3.CloudProviders.DbusObjectProxy

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::account", callback: (...args: any[]) => void): number
    on(sigName: "notify::account", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::account", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::account", ...args: any[]): void
    connect(sigName: "notify::provider", callback: (...args: any[]) => void): number
    on(sigName: "notify::provider", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::provider", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::provider", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #CloudProvidersDbusObjectProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class DbusObjectProxy extends Gio.DBusObjectProxy {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusObjectProxy

    static name: string

    // Constructors of CloudProviders-0.3.CloudProviders.DbusObjectProxy

    constructor(config?: DbusObjectProxy.ConstructorProperties) 
    /**
     * Creates a new proxy object.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param objectPath An object path.
     * @returns The proxy object.
     */
    constructor(connection: Gio.DBusConnection, objectPath: string | null) 
    /**
     * Creates a new proxy object.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param objectPath An object path.
     * @returns The proxy object.
     */
    static new(connection: Gio.DBusConnection, objectPath: string | null): DbusObjectProxy

    // Overloads of new

    /**
     * Creates a new #GDBusObjectProxy for the given connection and
     * object path.
     * @constructor 
     * @param connection a #GDBusConnection
     * @param objectPath the object path
     * @returns a new #GDBusObjectProxy
     */
    static new(connection: Gio.DBusConnection, objectPath: string | null): Gio.DBusObjectProxy
    _init(config?: DbusObjectProxy.ConstructorProperties): void
}

export module DbusObjectSkeleton {

    // Constructor properties interface

    export interface ConstructorProperties extends DbusObject.ConstructorProperties, Gio.DBusObject.ConstructorProperties, Gio.DBusObjectSkeleton.ConstructorProperties {
    }

}

export interface DbusObjectSkeleton extends DbusObject, Gio.DBusObject {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusObjectSkeleton

    __gtype__: number

    // Owm methods of CloudProviders-0.3.CloudProviders.DbusObjectSkeleton

    /**
     * Sets the #CloudProvidersDbusAccount instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Account.top_of_page">org.freedesktop.CloudProviders.Account</link> on `object`.
     * @param interface A #CloudProvidersDbusAccount or %NULL to clear the interface.
     */
    setAccount(interface: DbusAccount | null): void
    /**
     * Sets the #CloudProvidersDbusProvider instance for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Provider.top_of_page">org.freedesktop.CloudProviders.Provider</link> on `object`.
     * @param interface A #CloudProvidersDbusProvider or %NULL to clear the interface.
     */
    setProvider(interface: DbusProvider | null): void

    // Class property signals of CloudProviders-0.3.CloudProviders.DbusObjectSkeleton

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::account", callback: (...args: any[]) => void): number
    on(sigName: "notify::account", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::account", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::account", ...args: any[]): void
    connect(sigName: "notify::provider", callback: (...args: any[]) => void): number
    on(sigName: "notify::provider", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::provider", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::provider", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #CloudProvidersDbusObjectSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class DbusObjectSkeleton extends Gio.DBusObjectSkeleton {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusObjectSkeleton

    static name: string

    // Constructors of CloudProviders-0.3.CloudProviders.DbusObjectSkeleton

    constructor(config?: DbusObjectSkeleton.ConstructorProperties) 
    /**
     * Creates a new skeleton object.
     * @constructor 
     * @param objectPath An object path.
     * @returns The skeleton object.
     */
    constructor(objectPath: string | null) 
    /**
     * Creates a new skeleton object.
     * @constructor 
     * @param objectPath An object path.
     * @returns The skeleton object.
     */
    static new(objectPath: string | null): DbusObjectSkeleton

    // Overloads of new

    /**
     * Creates a new #GDBusObjectSkeleton.
     * @constructor 
     * @param objectPath An object path.
     * @returns A #GDBusObjectSkeleton. Free with g_object_unref().
     */
    static new(objectPath: string | null): Gio.DBusObjectSkeleton
    _init(config?: DbusObjectSkeleton.ConstructorProperties): void
}

export module DbusProviderProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends DbusProvider.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

export interface DbusProviderProxy extends DbusProvider, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusProviderProxy

    __gtype__: number

    // Class property signals of CloudProviders-0.3.CloudProviders.DbusProviderProxy

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #CloudProvidersDbusProviderProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class DbusProviderProxy extends Gio.DBusProxy {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusProviderProxy

    static name: string

    // Constructors of CloudProviders-0.3.CloudProviders.DbusProviderProxy

    constructor(config?: DbusProviderProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with cloud_providers_dbus_provider_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cloud_providers_dbus_provider_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newFinish(res: Gio.AsyncResult): DbusProviderProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with cloud_providers_dbus_provider_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to cloud_providers_dbus_provider_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusFinish(res: Gio.AsyncResult): DbusProviderProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like cloud_providers_dbus_provider_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See cloud_providers_dbus_provider_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): DbusProviderProxy

    // Overloads of newForBusSync

    /**
     * Like g_dbus_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface        that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @returns A #GDBusProxy or %NULL if error is set.    Free with g_object_unref().
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string | null, interfaceName: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
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
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): DbusProviderProxy

    // Overloads of newSync

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @returns A #GDBusProxy or %NULL if error is set.    Free with g_object_unref().
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string | null, interfaceName: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
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
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string | null, interfaceName: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Like cloud_providers_dbus_provider_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call cloud_providers_dbus_provider_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See cloud_providers_dbus_provider_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

    // Overloads of newForBus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string | null, interfaceName: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
}

export module DbusProviderSkeleton {

    // Constructor properties interface

    export interface ConstructorProperties extends DbusProvider.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

export interface DbusProviderSkeleton extends DbusProvider, Gio.DBusInterface {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusProviderSkeleton

    __gtype__: number

    // Conflicting methods

    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    getInfo(): Gio.DBusInterfaceInfo
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     * @returns A #GDBusInterfaceInfo (never %NULL). Do not free.
     */
    getInfo(): Gio.DBusInterfaceInfo

    // Overloads of getInfo

    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    getInfo(): Gio.DBusInterfaceInfo

    // Class property signals of CloudProviders-0.3.CloudProviders.DbusProviderSkeleton

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #CloudProvidersDbusProviderSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class DbusProviderSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusProviderSkeleton

    static name: string

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

export module Provider {

    // Signal callback interfaces

    /**
     * Signal callback interface for `accounts-changed`
     */
    export interface AccountsChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `removed`
     */
    export interface RemovedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Provider {

    // Own properties of CloudProviders-0.3.CloudProviders.Provider

    readonly name: string | null
    __gtype__: number

    // Owm methods of CloudProviders-0.3.CloudProviders.Provider

    getAccounts(): Account[]
    getName(): string | null

    // Own signals of CloudProviders-0.3.CloudProviders.Provider

    connect(sigName: "accounts-changed", callback: Provider.AccountsChangedSignalCallback): number
    on(sigName: "accounts-changed", callback: Provider.AccountsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "accounts-changed", callback: Provider.AccountsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "accounts-changed", callback: Provider.AccountsChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "accounts-changed", ...args: any[]): void
    connect(sigName: "removed", callback: Provider.RemovedSignalCallback): number
    on(sigName: "removed", callback: Provider.RemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "removed", callback: Provider.RemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "removed", callback: Provider.RemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "removed", ...args: any[]): void

    // Class property signals of CloudProviders-0.3.CloudProviders.Provider

    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * #CloudProvidersProvider is the basic object object for client implementators
 * that contains the properties of the provider such as name, and the accounts
 * associated with it.
 * @class 
 */
export class Provider extends GObject.Object {

    // Own properties of CloudProviders-0.3.CloudProviders.Provider

    static name: string

    // Constructors of CloudProviders-0.3.CloudProviders.Provider

    constructor(config?: Provider.ConstructorProperties) 
    constructor(busName: string | null, objectPath: string | null) 
    static new(busName: string | null, objectPath: string | null): Provider
    _init(config?: Provider.ConstructorProperties): void
}

export module ProviderExporter {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of CloudProviders-0.3.CloudProviders.ProviderExporter

        bus?: Gio.DBusConnection | null
        busName?: string | null
        busPath?: string | null
        name?: string | null
    }

}

export interface ProviderExporter {

    // Own properties of CloudProviders-0.3.CloudProviders.ProviderExporter

    readonly bus: Gio.DBusConnection
    readonly busName: string | null
    readonly busPath: string | null
    name: string | null
    __gtype__: number

    // Owm methods of CloudProviders-0.3.CloudProviders.ProviderExporter

    getName(): string | null
    /**
     * Each cloud provider can have a variety of account associated with it. Use this
     * function to remove the accounts that were added when created by cloud_providers_account_exporter_new().
     * @param account The account object
     */
    removeAccount(account: AccountExporter): void
    setName(name: string | null): void

    // Class property signals of CloudProviders-0.3.CloudProviders.ProviderExporter

    connect(sigName: "notify::bus", callback: (...args: any[]) => void): number
    on(sigName: "notify::bus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bus", ...args: any[]): void
    connect(sigName: "notify::bus-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::bus-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bus-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bus-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bus-name", ...args: any[]): void
    connect(sigName: "notify::bus-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::bus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bus-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bus-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bus-path", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * #CloudProvidersProviderExporter is the base object representing a single cloud provider.
 * Multiple #CloudProvidersAccountExporter objects can be added with cloud_providers_provider_exporter_add_account()
 * After adding the initial set of accounts cloud_providers_provider_exporter_export_objects() must be called.
 * @class 
 */
export class ProviderExporter extends GObject.Object {

    // Own properties of CloudProviders-0.3.CloudProviders.ProviderExporter

    static name: string

    // Constructors of CloudProviders-0.3.CloudProviders.ProviderExporter

    constructor(config?: ProviderExporter.ConstructorProperties) 
    constructor(bus: Gio.DBusConnection, busName: string | null, busPath: string | null) 
    static new(bus: Gio.DBusConnection, busName: string | null, busPath: string | null): ProviderExporter
    _init(config?: ProviderExporter.ConstructorProperties): void
}

export interface AccountClass {

    // Own fields of CloudProviders-0.3.CloudProviders.AccountClass

    parentClass: GObject.ObjectClass
}

export abstract class AccountClass {

    // Own properties of CloudProviders-0.3.CloudProviders.AccountClass

    static name: string
}

export interface AccountExporterClass {

    // Own fields of CloudProviders-0.3.CloudProviders.AccountExporterClass

    parentClass: GObject.ObjectClass
}

export abstract class AccountExporterClass {

    // Own properties of CloudProviders-0.3.CloudProviders.AccountExporterClass

    static name: string
}

export interface CollectorClass {

    // Own fields of CloudProviders-0.3.CloudProviders.CollectorClass

    parentClass: GObject.ObjectClass
}

export abstract class CollectorClass {

    // Own properties of CloudProviders-0.3.CloudProviders.CollectorClass

    static name: string
}

export interface DbusAccountIface {

    // Own fields of CloudProviders-0.3.CloudProviders.DbusAccountIface

    /**
     * The parent interface.
     * @field 
     */
    parentIface: GObject.TypeInterface
    getIcon: (object: DbusAccount) => string | null
    getName: (object: DbusAccount) => string | null
    getPath: (object: DbusAccount) => string | null
    getStatus: (object: DbusAccount) => number
    getStatusDetails: (object: DbusAccount) => string | null
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Account.top_of_page">org.freedesktop.CloudProviders.Account</link>.
 * @record 
 */
export abstract class DbusAccountIface {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusAccountIface

    static name: string
}

export interface DbusAccountProxyClass {

    // Own fields of CloudProviders-0.3.CloudProviders.DbusAccountProxyClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusProxyClass
}

/**
 * Class structure for #CloudProvidersDbusAccountProxy.
 * @record 
 */
export abstract class DbusAccountProxyClass {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusAccountProxyClass

    static name: string
}

export interface DbusAccountProxyPrivate {
}

export class DbusAccountProxyPrivate {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusAccountProxyPrivate

    static name: string
}

export interface DbusAccountSkeletonClass {

    // Own fields of CloudProviders-0.3.CloudProviders.DbusAccountSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #CloudProvidersDbusAccountSkeleton.
 * @record 
 */
export abstract class DbusAccountSkeletonClass {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusAccountSkeletonClass

    static name: string
}

export interface DbusAccountSkeletonPrivate {
}

export class DbusAccountSkeletonPrivate {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusAccountSkeletonPrivate

    static name: string
}

export interface DbusObjectIface {

    // Own fields of CloudProviders-0.3.CloudProviders.DbusObjectIface

    /**
     * The parent interface.
     * @field 
     */
    parentIface: GObject.TypeInterface
}

/**
 * Virtual table for the #CloudProvidersDbusObject interface.
 * @record 
 */
export abstract class DbusObjectIface {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusObjectIface

    static name: string
}

export interface DbusObjectManagerClientClass {

    // Own fields of CloudProviders-0.3.CloudProviders.DbusObjectManagerClientClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusObjectManagerClientClass
}

/**
 * Class structure for #CloudProvidersDbusObjectManagerClient.
 * @record 
 */
export abstract class DbusObjectManagerClientClass {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusObjectManagerClientClass

    static name: string
}

export interface DbusObjectManagerClientPrivate {
}

export class DbusObjectManagerClientPrivate {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusObjectManagerClientPrivate

    static name: string
}

export interface DbusObjectProxyClass {

    // Own fields of CloudProviders-0.3.CloudProviders.DbusObjectProxyClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusObjectProxyClass
}

/**
 * Class structure for #CloudProvidersDbusObjectProxy.
 * @record 
 */
export abstract class DbusObjectProxyClass {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusObjectProxyClass

    static name: string
}

export interface DbusObjectProxyPrivate {
}

export class DbusObjectProxyPrivate {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusObjectProxyPrivate

    static name: string
}

export interface DbusObjectSkeletonClass {

    // Own fields of CloudProviders-0.3.CloudProviders.DbusObjectSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusObjectSkeletonClass
}

/**
 * Class structure for #CloudProvidersDbusObjectSkeleton.
 * @record 
 */
export abstract class DbusObjectSkeletonClass {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusObjectSkeletonClass

    static name: string
}

export interface DbusObjectSkeletonPrivate {
}

export class DbusObjectSkeletonPrivate {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusObjectSkeletonPrivate

    static name: string
}

export interface DbusProviderIface {

    // Own fields of CloudProviders-0.3.CloudProviders.DbusProviderIface

    /**
     * The parent interface.
     * @field 
     */
    parentIface: GObject.TypeInterface
    getName: (object: DbusProvider) => string | null
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-CloudProviders-Provider.top_of_page">org.freedesktop.CloudProviders.Provider</link>.
 * @record 
 */
export abstract class DbusProviderIface {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusProviderIface

    static name: string
}

export interface DbusProviderProxyClass {

    // Own fields of CloudProviders-0.3.CloudProviders.DbusProviderProxyClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusProxyClass
}

/**
 * Class structure for #CloudProvidersDbusProviderProxy.
 * @record 
 */
export abstract class DbusProviderProxyClass {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusProviderProxyClass

    static name: string
}

export interface DbusProviderProxyPrivate {
}

export class DbusProviderProxyPrivate {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusProviderProxyPrivate

    static name: string
}

export interface DbusProviderSkeletonClass {

    // Own fields of CloudProviders-0.3.CloudProviders.DbusProviderSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #CloudProvidersDbusProviderSkeleton.
 * @record 
 */
export abstract class DbusProviderSkeletonClass {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusProviderSkeletonClass

    static name: string
}

export interface DbusProviderSkeletonPrivate {
}

export class DbusProviderSkeletonPrivate {

    // Own properties of CloudProviders-0.3.CloudProviders.DbusProviderSkeletonPrivate

    static name: string
}

export interface ProviderClass {

    // Own fields of CloudProviders-0.3.CloudProviders.ProviderClass

    parentClass: GObject.ObjectClass
}

export abstract class ProviderClass {

    // Own properties of CloudProviders-0.3.CloudProviders.ProviderClass

    static name: string
}

export interface ProviderExporterClass {

    // Own fields of CloudProviders-0.3.CloudProviders.ProviderExporterClass

    parentClass: GObject.ObjectClass
}

export abstract class ProviderExporterClass {

    // Own properties of CloudProviders-0.3.CloudProviders.ProviderExporterClass

    static name: string
}

export interface _AccountClass {

    // Own fields of CloudProviders-0.3.CloudProviders._AccountClass

    parentClass: GObject.ObjectClass
}

export class _AccountClass {

    // Own properties of CloudProviders-0.3.CloudProviders._AccountClass

    static name: string
}

export interface _AccountExporterClass {

    // Own fields of CloudProviders-0.3.CloudProviders._AccountExporterClass

    parentClass: GObject.ObjectClass
}

export class _AccountExporterClass {

    // Own properties of CloudProviders-0.3.CloudProviders._AccountExporterClass

    static name: string
}

export interface _CollectorClass {

    // Own fields of CloudProviders-0.3.CloudProviders._CollectorClass

    parentClass: GObject.ObjectClass
}

export class _CollectorClass {

    // Own properties of CloudProviders-0.3.CloudProviders._CollectorClass

    static name: string
}

export interface _ProviderExporterClass {

    // Own fields of CloudProviders-0.3.CloudProviders._ProviderExporterClass

    parentClass: GObject.ObjectClass
}

export class _ProviderExporterClass {

    // Own properties of CloudProviders-0.3.CloudProviders._ProviderExporterClass

    static name: string
}

// END