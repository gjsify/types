/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './goa-1.0-ambient.d.ts';
import './goa-1.0-import.d.ts';
/**
 * Goa-1.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Goa {
    /**
     * Error codes for the #GOA_ERROR error domain and the
     * corresponding D-Bus error names.
     */
    class Error extends GLib.Error {
        // Own fields of Goa-1.0.Error

        /**
         * The operation failed.
         */
        FAILED: number;
        /**
         * The operation is not supported.
         */
        NOT_SUPPORTED: number;
        /**
         * The dialog was dismissed.
         */
        DIALOG_DISMISSED: number;
        /**
         * Account already exists.
         */
        ACCOUNT_EXISTS: number;
        /**
         * Not authorized to perform operation.
         */
        NOT_AUTHORIZED: number;
        /**
         * Invalid SSL certificate.
         */
        SSL: number;

        // Constructors of Goa-1.0.Error

        constructor(options: { message: string; code: number });

        // Owm methods of Goa-1.0.Error

        static quark(): GLib.Quark;
    }

    const ERROR_NUM_ENTRIES: number;
    /**
     * The major version number of the GOA daemon and library.
     *
     * Like #goa_major_version, but from the headers used at
     * application compile time, rather than from the library
     * linked against at application run time.
     */
    const MAJOR_VERSION: number;
    /**
     * The micro version number of the GOA daemon and library.
     *
     * Like #goa_micro_version, but from the headers used at
     * application compile time, rather than from the library
     * linked against at application run time.
     */
    const MICRO_VERSION: number;
    /**
     * The minor version number of the GOA daemon and library.
     *
     * Like #goa_minor_version, but from the headers used at
     * application compile time, rather than from the library
     * linked against at application run time.
     */
    const MINOR_VERSION: number;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Account.top_of_page"&gt;org.gnome.OnlineAccounts.Account&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function account_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #GoaAccount interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function account_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Calendar.top_of_page"&gt;org.gnome.OnlineAccounts.Calendar&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function calendar_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #GoaCalendar interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function calendar_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Chat.top_of_page"&gt;org.gnome.OnlineAccounts.Chat&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function chat_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #GoaChat interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function chat_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Checks that the GOA library in use is compatible with the
     * given version. Generally you would pass in the constants
     * #GOA_MAJOR_VERSION, #GOA_MINOR_VERSION, #GOA_MICRO_VERSION
     * as the three arguments to this function; that produces
     * a check that the library in use is compatible with
     * the version of GOA the application or module was compiled
     * against.
     *
     * Compatibility is defined by two things: first the version
     * of the running library is newer than the version
     * `required_major`.`required_minor`.`required_micro`. Second
     * the running library must be binary compatible with the
     * version `required_major`.`required_minor`.`required_micro`
     * (same major and minor version).
     * @param required_major the required major version.
     * @param required_minor the required minor version.
     * @param required_micro the required micro version.
     * @returns %NULL if the GOA library is compatible with the   given version, or a string describing the version mismatch.   The returned string is owned by GOA and must not be modified   or freed.
     */
    function check_version(required_major: number, required_minor: number, required_micro: number): string;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Contacts.top_of_page"&gt;org.gnome.OnlineAccounts.Contacts&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function contacts_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #GoaContacts interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function contacts_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Documents.top_of_page"&gt;org.gnome.OnlineAccounts.Documents&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function documents_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #GoaDocuments interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function documents_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    function error_quark(): GLib.Quark;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Exchange.top_of_page"&gt;org.gnome.OnlineAccounts.Exchange&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function exchange_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #GoaExchange interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function exchange_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Files.top_of_page"&gt;org.gnome.OnlineAccounts.Files&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function files_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #GoaFiles interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function files_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Mail.top_of_page"&gt;org.gnome.OnlineAccounts.Mail&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function mail_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #GoaMail interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function mail_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Manager.top_of_page"&gt;org.gnome.OnlineAccounts.Manager&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function manager_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #GoaManager interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function manager_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Maps.top_of_page"&gt;org.gnome.OnlineAccounts.Maps&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function maps_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #GoaMaps interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function maps_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page"&gt;org.gnome.OnlineAccounts.MediaServer&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function media_server_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #GoaMediaServer interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function media_server_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Music.top_of_page"&gt;org.gnome.OnlineAccounts.Music&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function music_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #GoaMusic interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function music_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page"&gt;org.gnome.OnlineAccounts.OAuth2Based&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function oauth2_based_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #GoaOAuth2Based interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function oauth2_based_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page"&gt;org.gnome.OnlineAccounts.OAuthBased&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function oauth_based_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #GoaOAuthBased interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function oauth_based_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page"&gt;org.gnome.OnlineAccounts.PasswordBased&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function password_based_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #GoaPasswordBased interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function password_based_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Photos.top_of_page"&gt;org.gnome.OnlineAccounts.Photos&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function photos_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #GoaPhotos interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function photos_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Printers.top_of_page"&gt;org.gnome.OnlineAccounts.Printers&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function printers_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #GoaPrinters interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function printers_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page"&gt;org.gnome.OnlineAccounts.ReadLater&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function read_later_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #GoaReadLater interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function read_later_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Ticketing.top_of_page"&gt;org.gnome.OnlineAccounts.Ticketing&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function ticketing_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #GoaTicketing interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function ticketing_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Todo.top_of_page"&gt;org.gnome.OnlineAccounts.Todo&lt;/link&gt; D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    function todo_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all #GObject properties in the #GoaTodo interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function todo_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    module AccountProxy {
        // Constructor properties interface
    }

    /**
     * The #GoaAccountProxy structure contains only private data and should only be accessed using the provided API.
     */
    class AccountProxy extends Gio.DBusProxy {
        // Constructors of Goa-1.0.AccountProxy

        static new_finish(res: Gio.AsyncResult): AccountProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): AccountProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): AccountProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): AccountProxy;

        // Owm methods of Goa-1.0.AccountProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Account.top_of_page"&gt;org.gnome.OnlineAccounts.Account&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_account_proxy_new_finish() to get the result of the operation.
         *
         * See goa_account_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<AccountProxy> | null,
        ): void;
        /**
         * Like goa_account_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_account_proxy_new_for_bus_finish() to get the result of the operation.
         *
         * See goa_account_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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
            callback?: Gio.AsyncReadyCallback<AccountProxy> | null,
        ): void;
    }

    module AccountSkeleton {
        // Constructor properties interface
    }

    /**
     * The #GoaAccountSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class AccountSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of Goa-1.0.AccountSkeleton

        static ['new'](): AccountSkeleton;
    }

    module CalendarProxy {
        // Constructor properties interface
    }

    /**
     * The #GoaCalendarProxy structure contains only private data and should only be accessed using the provided API.
     */
    class CalendarProxy extends Gio.DBusProxy {
        // Constructors of Goa-1.0.CalendarProxy

        static new_finish(res: Gio.AsyncResult): CalendarProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): CalendarProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): CalendarProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): CalendarProxy;

        // Owm methods of Goa-1.0.CalendarProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Calendar.top_of_page"&gt;org.gnome.OnlineAccounts.Calendar&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_calendar_proxy_new_finish() to get the result of the operation.
         *
         * See goa_calendar_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<CalendarProxy> | null,
        ): void;
        /**
         * Like goa_calendar_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_calendar_proxy_new_for_bus_finish() to get the result of the operation.
         *
         * See goa_calendar_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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
            callback?: Gio.AsyncReadyCallback<CalendarProxy> | null,
        ): void;
    }

    module CalendarSkeleton {
        // Constructor properties interface
    }

    /**
     * The #GoaCalendarSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class CalendarSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of Goa-1.0.CalendarSkeleton

        static ['new'](): CalendarSkeleton;
    }

    module ChatProxy {
        // Constructor properties interface
    }

    /**
     * The #GoaChatProxy structure contains only private data and should only be accessed using the provided API.
     */
    class ChatProxy extends Gio.DBusProxy {
        // Constructors of Goa-1.0.ChatProxy

        static new_finish(res: Gio.AsyncResult): ChatProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): ChatProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): ChatProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): ChatProxy;

        // Owm methods of Goa-1.0.ChatProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Chat.top_of_page"&gt;org.gnome.OnlineAccounts.Chat&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_chat_proxy_new_finish() to get the result of the operation.
         *
         * See goa_chat_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<ChatProxy> | null,
        ): void;
        /**
         * Like goa_chat_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_chat_proxy_new_for_bus_finish() to get the result of the operation.
         *
         * See goa_chat_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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
            callback?: Gio.AsyncReadyCallback<ChatProxy> | null,
        ): void;
    }

    module ChatSkeleton {
        // Constructor properties interface
    }

    /**
     * The #GoaChatSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class ChatSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of Goa-1.0.ChatSkeleton

        static ['new'](): ChatSkeleton;
    }

    module Client {
        // Signal callback interfaces

        interface AccountAdded {
            (object: Object): void;
        }

        interface AccountChanged {
            (object: Object): void;
        }

        interface AccountRemoved {
            (object: Object): void;
        }

        // Constructor properties interface
    }

    /**
     * #GoaClient is used for accessing the GNOME Online Accounts service
     * from a client program.
     */
    class Client extends GObject.Object {
        // Own properties of Goa-1.0.Client

        /**
         * The #GDBusObjectManager used by the #GoaClient instance.
         */
        readonly object_manager: Gio.DBusObjectManager;
        /**
         * The #GDBusObjectManager used by the #GoaClient instance.
         */
        readonly objectManager: Gio.DBusObjectManager;

        // Constructors of Goa-1.0.Client

        static new_finish(res: Gio.AsyncResult): Client;

        static new_sync(cancellable?: Gio.Cancellable | null): Client;

        // Owm methods of Goa-1.0.Client

        /**
         * Asynchronously gets a #GoaClient. When the operation is
         * finished, `callback` will be invoked in the &lt;link
         * linkend="g-main-context-push-thread-default"&gt;thread-default main
         * loop&lt;/link&gt; of the thread you are calling this method from.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback Function that will be called when the result is ready.
         */
        static new(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<Client> | null): void;

        // Owm methods of Goa-1.0.Client

        /**
         * Gets all accounts that `self` knows about. The result is a list of
         * #GoaObject instances where each object at least has an #GoaAccount
         * interface (that can be obtained via the goa_object_get_account()
         * method) but may also implement other interfaces such as
         * #GoaMail or #GoaFiles.
         * @returns A list of #GoaObject instances that must be freed with g_list_free() after each element has been freed with g_object_unref().
         */
        get_accounts(): Object[];
        /**
         * Gets the #GoaManager for `self,` if any.
         * @returns A #GoaManager or %NULL. Do not free, the returned object belongs to @self.
         */
        get_manager(): Manager | null;
        /**
         * Gets the #GDBusObjectManager used by `self`.
         * @returns A #GDBusObjectManager. Do not free, the instance is owned by @self.
         */
        get_object_manager(): Gio.DBusObjectManager;
        /**
         * Finds and returns the #GoaObject instance whose
         * &lt;link
         * linkend="gdbus-property-org-gnome-OnlineAccounts-Account.Id"&gt;"Id"&lt;/link&gt;
         * D-Bus property matches `id`.
         * @param id The ID to look for.
         * @returns A #GoaObject. Free the returned object with g_object_unref().
         */
        lookup_by_id(id: string): Object;
    }

    module ContactsProxy {
        // Constructor properties interface
    }

    /**
     * The #GoaContactsProxy structure contains only private data and should only be accessed using the provided API.
     */
    class ContactsProxy extends Gio.DBusProxy {
        // Constructors of Goa-1.0.ContactsProxy

        static new_finish(res: Gio.AsyncResult): ContactsProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): ContactsProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): ContactsProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): ContactsProxy;

        // Owm methods of Goa-1.0.ContactsProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Contacts.top_of_page"&gt;org.gnome.OnlineAccounts.Contacts&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_contacts_proxy_new_finish() to get the result of the operation.
         *
         * See goa_contacts_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<ContactsProxy> | null,
        ): void;
        /**
         * Like goa_contacts_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_contacts_proxy_new_for_bus_finish() to get the result of the operation.
         *
         * See goa_contacts_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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
            callback?: Gio.AsyncReadyCallback<ContactsProxy> | null,
        ): void;
    }

    module ContactsSkeleton {
        // Constructor properties interface
    }

    /**
     * The #GoaContactsSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class ContactsSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of Goa-1.0.ContactsSkeleton

        static ['new'](): ContactsSkeleton;
    }

    module DocumentsProxy {
        // Constructor properties interface
    }

    /**
     * The #GoaDocumentsProxy structure contains only private data and should only be accessed using the provided API.
     */
    class DocumentsProxy extends Gio.DBusProxy {
        // Constructors of Goa-1.0.DocumentsProxy

        static new_finish(res: Gio.AsyncResult): DocumentsProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): DocumentsProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): DocumentsProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): DocumentsProxy;

        // Owm methods of Goa-1.0.DocumentsProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Documents.top_of_page"&gt;org.gnome.OnlineAccounts.Documents&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_documents_proxy_new_finish() to get the result of the operation.
         *
         * See goa_documents_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<DocumentsProxy> | null,
        ): void;
        /**
         * Like goa_documents_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_documents_proxy_new_for_bus_finish() to get the result of the operation.
         *
         * See goa_documents_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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
            callback?: Gio.AsyncReadyCallback<DocumentsProxy> | null,
        ): void;
    }

    module DocumentsSkeleton {
        // Constructor properties interface
    }

    /**
     * The #GoaDocumentsSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class DocumentsSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of Goa-1.0.DocumentsSkeleton

        static ['new'](): DocumentsSkeleton;
    }

    module ExchangeProxy {
        // Constructor properties interface
    }

    /**
     * The #GoaExchangeProxy structure contains only private data and should only be accessed using the provided API.
     */
    class ExchangeProxy extends Gio.DBusProxy {
        // Constructors of Goa-1.0.ExchangeProxy

        static new_finish(res: Gio.AsyncResult): ExchangeProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): ExchangeProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): ExchangeProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): ExchangeProxy;

        // Owm methods of Goa-1.0.ExchangeProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Exchange.top_of_page"&gt;org.gnome.OnlineAccounts.Exchange&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_exchange_proxy_new_finish() to get the result of the operation.
         *
         * See goa_exchange_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<ExchangeProxy> | null,
        ): void;
        /**
         * Like goa_exchange_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_exchange_proxy_new_for_bus_finish() to get the result of the operation.
         *
         * See goa_exchange_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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
            callback?: Gio.AsyncReadyCallback<ExchangeProxy> | null,
        ): void;
    }

    module ExchangeSkeleton {
        // Constructor properties interface
    }

    /**
     * The #GoaExchangeSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class ExchangeSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of Goa-1.0.ExchangeSkeleton

        static ['new'](): ExchangeSkeleton;
    }

    module FilesProxy {
        // Constructor properties interface
    }

    /**
     * The #GoaFilesProxy structure contains only private data and should only be accessed using the provided API.
     */
    class FilesProxy extends Gio.DBusProxy {
        // Constructors of Goa-1.0.FilesProxy

        static new_finish(res: Gio.AsyncResult): FilesProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): FilesProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): FilesProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): FilesProxy;

        // Owm methods of Goa-1.0.FilesProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Files.top_of_page"&gt;org.gnome.OnlineAccounts.Files&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_files_proxy_new_finish() to get the result of the operation.
         *
         * See goa_files_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<FilesProxy> | null,
        ): void;
        /**
         * Like goa_files_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_files_proxy_new_for_bus_finish() to get the result of the operation.
         *
         * See goa_files_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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
            callback?: Gio.AsyncReadyCallback<FilesProxy> | null,
        ): void;
    }

    module FilesSkeleton {
        // Constructor properties interface
    }

    /**
     * The #GoaFilesSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class FilesSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of Goa-1.0.FilesSkeleton

        static ['new'](): FilesSkeleton;
    }

    module MailProxy {
        // Constructor properties interface
    }

    /**
     * The #GoaMailProxy structure contains only private data and should only be accessed using the provided API.
     */
    class MailProxy extends Gio.DBusProxy {
        // Constructors of Goa-1.0.MailProxy

        static new_finish(res: Gio.AsyncResult): MailProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): MailProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): MailProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): MailProxy;

        // Owm methods of Goa-1.0.MailProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Mail.top_of_page"&gt;org.gnome.OnlineAccounts.Mail&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_mail_proxy_new_finish() to get the result of the operation.
         *
         * See goa_mail_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<MailProxy> | null,
        ): void;
        /**
         * Like goa_mail_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_mail_proxy_new_for_bus_finish() to get the result of the operation.
         *
         * See goa_mail_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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
            callback?: Gio.AsyncReadyCallback<MailProxy> | null,
        ): void;
    }

    module MailSkeleton {
        // Constructor properties interface
    }

    /**
     * The #GoaMailSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class MailSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of Goa-1.0.MailSkeleton

        static ['new'](): MailSkeleton;
    }

    module ManagerProxy {
        // Constructor properties interface
    }

    /**
     * The #GoaManagerProxy structure contains only private data and should only be accessed using the provided API.
     */
    class ManagerProxy extends Gio.DBusProxy {
        // Constructors of Goa-1.0.ManagerProxy

        static new_finish(res: Gio.AsyncResult): ManagerProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): ManagerProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): ManagerProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): ManagerProxy;

        // Owm methods of Goa-1.0.ManagerProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Manager.top_of_page"&gt;org.gnome.OnlineAccounts.Manager&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_manager_proxy_new_finish() to get the result of the operation.
         *
         * See goa_manager_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<ManagerProxy> | null,
        ): void;
        /**
         * Like goa_manager_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_manager_proxy_new_for_bus_finish() to get the result of the operation.
         *
         * See goa_manager_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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
            callback?: Gio.AsyncReadyCallback<ManagerProxy> | null,
        ): void;
    }

    module ManagerSkeleton {
        // Constructor properties interface
    }

    /**
     * The #GoaManagerSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class ManagerSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of Goa-1.0.ManagerSkeleton

        static ['new'](): ManagerSkeleton;
    }

    module MapsProxy {
        // Constructor properties interface
    }

    /**
     * The #GoaMapsProxy structure contains only private data and should only be accessed using the provided API.
     */
    class MapsProxy extends Gio.DBusProxy {
        // Constructors of Goa-1.0.MapsProxy

        static new_finish(res: Gio.AsyncResult): MapsProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): MapsProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): MapsProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): MapsProxy;

        // Owm methods of Goa-1.0.MapsProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Maps.top_of_page"&gt;org.gnome.OnlineAccounts.Maps&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_maps_proxy_new_finish() to get the result of the operation.
         *
         * See goa_maps_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<MapsProxy> | null,
        ): void;
        /**
         * Like goa_maps_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_maps_proxy_new_for_bus_finish() to get the result of the operation.
         *
         * See goa_maps_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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
            callback?: Gio.AsyncReadyCallback<MapsProxy> | null,
        ): void;
    }

    module MapsSkeleton {
        // Constructor properties interface
    }

    /**
     * The #GoaMapsSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class MapsSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of Goa-1.0.MapsSkeleton

        static ['new'](): MapsSkeleton;
    }

    module MediaServerProxy {
        // Constructor properties interface
    }

    /**
     * The #GoaMediaServerProxy structure contains only private data and should only be accessed using the provided API.
     */
    class MediaServerProxy extends Gio.DBusProxy {
        // Constructors of Goa-1.0.MediaServerProxy

        static new_finish(res: Gio.AsyncResult): MediaServerProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): MediaServerProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): MediaServerProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): MediaServerProxy;

        // Owm methods of Goa-1.0.MediaServerProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page"&gt;org.gnome.OnlineAccounts.MediaServer&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_media_server_proxy_new_finish() to get the result of the operation.
         *
         * See goa_media_server_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<MediaServerProxy> | null,
        ): void;
        /**
         * Like goa_media_server_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_media_server_proxy_new_for_bus_finish() to get the result of the operation.
         *
         * See goa_media_server_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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
            callback?: Gio.AsyncReadyCallback<MediaServerProxy> | null,
        ): void;
    }

    module MediaServerSkeleton {
        // Constructor properties interface
    }

    /**
     * The #GoaMediaServerSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class MediaServerSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of Goa-1.0.MediaServerSkeleton

        static ['new'](): MediaServerSkeleton;
    }

    module MusicProxy {
        // Constructor properties interface
    }

    /**
     * The #GoaMusicProxy structure contains only private data and should only be accessed using the provided API.
     */
    class MusicProxy extends Gio.DBusProxy {
        // Constructors of Goa-1.0.MusicProxy

        static new_finish(res: Gio.AsyncResult): MusicProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): MusicProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): MusicProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): MusicProxy;

        // Owm methods of Goa-1.0.MusicProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Music.top_of_page"&gt;org.gnome.OnlineAccounts.Music&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_music_proxy_new_finish() to get the result of the operation.
         *
         * See goa_music_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<MusicProxy> | null,
        ): void;
        /**
         * Like goa_music_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_music_proxy_new_for_bus_finish() to get the result of the operation.
         *
         * See goa_music_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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
            callback?: Gio.AsyncReadyCallback<MusicProxy> | null,
        ): void;
    }

    module MusicSkeleton {
        // Constructor properties interface
    }

    /**
     * The #GoaMusicSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class MusicSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of Goa-1.0.MusicSkeleton

        static ['new'](): MusicSkeleton;
    }

    module OAuth2BasedProxy {
        // Constructor properties interface
    }

    /**
     * The #GoaOAuth2BasedProxy structure contains only private data and should only be accessed using the provided API.
     */
    class OAuth2BasedProxy extends Gio.DBusProxy {
        // Constructors of Goa-1.0.OAuth2BasedProxy

        static new_finish(res: Gio.AsyncResult): OAuth2BasedProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): OAuth2BasedProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): OAuth2BasedProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): OAuth2BasedProxy;

        // Owm methods of Goa-1.0.OAuth2BasedProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page"&gt;org.gnome.OnlineAccounts.OAuth2Based&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_oauth2_based_proxy_new_finish() to get the result of the operation.
         *
         * See goa_oauth2_based_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<OAuth2BasedProxy> | null,
        ): void;
        /**
         * Like goa_oauth2_based_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_oauth2_based_proxy_new_for_bus_finish() to get the result of the operation.
         *
         * See goa_oauth2_based_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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
            callback?: Gio.AsyncReadyCallback<OAuth2BasedProxy> | null,
        ): void;
    }

    module OAuth2BasedSkeleton {
        // Constructor properties interface
    }

    /**
     * The #GoaOAuth2BasedSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class OAuth2BasedSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of Goa-1.0.OAuth2BasedSkeleton

        static ['new'](): OAuth2BasedSkeleton;
    }

    module OAuthBasedProxy {
        // Constructor properties interface
    }

    /**
     * The #GoaOAuthBasedProxy structure contains only private data and should only be accessed using the provided API.
     */
    class OAuthBasedProxy extends Gio.DBusProxy {
        // Constructors of Goa-1.0.OAuthBasedProxy

        static new_finish(res: Gio.AsyncResult): OAuthBasedProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): OAuthBasedProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): OAuthBasedProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): OAuthBasedProxy;

        // Owm methods of Goa-1.0.OAuthBasedProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page"&gt;org.gnome.OnlineAccounts.OAuthBased&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_oauth_based_proxy_new_finish() to get the result of the operation.
         *
         * See goa_oauth_based_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<OAuthBasedProxy> | null,
        ): void;
        /**
         * Like goa_oauth_based_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_oauth_based_proxy_new_for_bus_finish() to get the result of the operation.
         *
         * See goa_oauth_based_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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
            callback?: Gio.AsyncReadyCallback<OAuthBasedProxy> | null,
        ): void;
    }

    module OAuthBasedSkeleton {
        // Constructor properties interface
    }

    /**
     * The #GoaOAuthBasedSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class OAuthBasedSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of Goa-1.0.OAuthBasedSkeleton

        static ['new'](): OAuthBasedSkeleton;
    }

    module ObjectManagerClient {
        // Constructor properties interface
    }

    /**
     * The #GoaObjectManagerClient structure contains only private data and should only be accessed using the provided API.
     */
    class ObjectManagerClient extends Gio.DBusObjectManagerClient {
        // Constructors of Goa-1.0.ObjectManagerClient

        static new_finish(res: Gio.AsyncResult): ObjectManagerClient;

        static new_for_bus_finish(res: Gio.AsyncResult): ObjectManagerClient;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusObjectManagerClientFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): ObjectManagerClient;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusObjectManagerClientFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): ObjectManagerClient;

        // Owm methods of Goa-1.0.ObjectManagerClient

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
         * Asynchronously creates #GDBusObjectManagerClient using goa_object_manager_client_get_proxy_type() as the #GDBusProxyTypeFunc. See g_dbus_object_manager_client_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_object_manager_client_new_finish() to get the result of the operation.
         *
         * See goa_object_manager_client_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusObjectManagerClientFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusObjectManagerClientFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<ObjectManagerClient> | null,
        ): void;
        /**
         * Like goa_object_manager_client_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_object_manager_client_new_for_bus_finish() to get the result of the operation.
         *
         * See goa_object_manager_client_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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
            callback?: Gio.AsyncReadyCallback<ObjectManagerClient> | null,
        ): void;
    }

    module ObjectProxy {
        // Constructor properties interface
    }

    /**
     * The #GoaObjectProxy structure contains only private data and should only be accessed using the provided API.
     */
    class ObjectProxy extends Gio.DBusObjectProxy {
        // Constructors of Goa-1.0.ObjectProxy

        static ['new'](connection: Gio.DBusConnection, object_path: string): ObjectProxy;
    }

    module ObjectSkeleton {
        // Constructor properties interface
    }

    /**
     * The #GoaObjectSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class ObjectSkeleton extends Gio.DBusObjectSkeleton {
        // Constructors of Goa-1.0.ObjectSkeleton

        static ['new'](object_path: string): ObjectSkeleton;

        // Owm methods of Goa-1.0.ObjectSkeleton

        /**
         * Sets the #GoaAccount instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Account.top_of_page"&gt;org.gnome.OnlineAccounts.Account&lt;/link&gt; on `object`.
         * @param interface_ A #GoaAccount or %NULL to clear the interface.
         */
        set_account(interface_?: Account | null): void;
        /**
         * Sets the #GoaCalendar instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Calendar.top_of_page"&gt;org.gnome.OnlineAccounts.Calendar&lt;/link&gt; on `object`.
         * @param interface_ A #GoaCalendar or %NULL to clear the interface.
         */
        set_calendar(interface_?: Calendar | null): void;
        /**
         * Sets the #GoaChat instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Chat.top_of_page"&gt;org.gnome.OnlineAccounts.Chat&lt;/link&gt; on `object`.
         * @param interface_ A #GoaChat or %NULL to clear the interface.
         */
        set_chat(interface_?: Chat | null): void;
        /**
         * Sets the #GoaContacts instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Contacts.top_of_page"&gt;org.gnome.OnlineAccounts.Contacts&lt;/link&gt; on `object`.
         * @param interface_ A #GoaContacts or %NULL to clear the interface.
         */
        set_contacts(interface_?: Contacts | null): void;
        /**
         * Sets the #GoaDocuments instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Documents.top_of_page"&gt;org.gnome.OnlineAccounts.Documents&lt;/link&gt; on `object`.
         * @param interface_ A #GoaDocuments or %NULL to clear the interface.
         */
        set_documents(interface_?: Documents | null): void;
        /**
         * Sets the #GoaExchange instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Exchange.top_of_page"&gt;org.gnome.OnlineAccounts.Exchange&lt;/link&gt; on `object`.
         * @param interface_ A #GoaExchange or %NULL to clear the interface.
         */
        set_exchange(interface_?: Exchange | null): void;
        /**
         * Sets the #GoaFiles instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Files.top_of_page"&gt;org.gnome.OnlineAccounts.Files&lt;/link&gt; on `object`.
         * @param interface_ A #GoaFiles or %NULL to clear the interface.
         */
        set_files(interface_?: Files | null): void;
        /**
         * Sets the #GoaMail instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Mail.top_of_page"&gt;org.gnome.OnlineAccounts.Mail&lt;/link&gt; on `object`.
         * @param interface_ A #GoaMail or %NULL to clear the interface.
         */
        set_mail(interface_?: Mail | null): void;
        /**
         * Sets the #GoaManager instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Manager.top_of_page"&gt;org.gnome.OnlineAccounts.Manager&lt;/link&gt; on `object`.
         * @param interface_ A #GoaManager or %NULL to clear the interface.
         */
        set_manager(interface_?: Manager | null): void;
        /**
         * Sets the #GoaMaps instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Maps.top_of_page"&gt;org.gnome.OnlineAccounts.Maps&lt;/link&gt; on `object`.
         * @param interface_ A #GoaMaps or %NULL to clear the interface.
         */
        set_maps(interface_?: Maps | null): void;
        /**
         * Sets the #GoaMediaServer instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page"&gt;org.gnome.OnlineAccounts.MediaServer&lt;/link&gt; on `object`.
         * @param interface_ A #GoaMediaServer or %NULL to clear the interface.
         */
        set_media_server(interface_?: MediaServer | null): void;
        /**
         * Sets the #GoaMusic instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Music.top_of_page"&gt;org.gnome.OnlineAccounts.Music&lt;/link&gt; on `object`.
         * @param interface_ A #GoaMusic or %NULL to clear the interface.
         */
        set_music(interface_?: Music | null): void;
        /**
         * Sets the #GoaOAuth2Based instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page"&gt;org.gnome.OnlineAccounts.OAuth2Based&lt;/link&gt; on `object`.
         * @param interface_ A #GoaOAuth2Based or %NULL to clear the interface.
         */
        set_oauth2_based(interface_?: OAuth2Based | null): void;
        /**
         * Sets the #GoaOAuthBased instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page"&gt;org.gnome.OnlineAccounts.OAuthBased&lt;/link&gt; on `object`.
         * @param interface_ A #GoaOAuthBased or %NULL to clear the interface.
         */
        set_oauth_based(interface_?: OAuthBased | null): void;
        /**
         * Sets the #GoaPasswordBased instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page"&gt;org.gnome.OnlineAccounts.PasswordBased&lt;/link&gt; on `object`.
         * @param interface_ A #GoaPasswordBased or %NULL to clear the interface.
         */
        set_password_based(interface_?: PasswordBased | null): void;
        /**
         * Sets the #GoaPhotos instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Photos.top_of_page"&gt;org.gnome.OnlineAccounts.Photos&lt;/link&gt; on `object`.
         * @param interface_ A #GoaPhotos or %NULL to clear the interface.
         */
        set_photos(interface_?: Photos | null): void;
        /**
         * Sets the #GoaPrinters instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Printers.top_of_page"&gt;org.gnome.OnlineAccounts.Printers&lt;/link&gt; on `object`.
         * @param interface_ A #GoaPrinters or %NULL to clear the interface.
         */
        set_printers(interface_?: Printers | null): void;
        /**
         * Sets the #GoaReadLater instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page"&gt;org.gnome.OnlineAccounts.ReadLater&lt;/link&gt; on `object`.
         * @param interface_ A #GoaReadLater or %NULL to clear the interface.
         */
        set_read_later(interface_?: ReadLater | null): void;
        /**
         * Sets the #GoaTicketing instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Ticketing.top_of_page"&gt;org.gnome.OnlineAccounts.Ticketing&lt;/link&gt; on `object`.
         * @param interface_ A #GoaTicketing or %NULL to clear the interface.
         */
        set_ticketing(interface_?: Ticketing | null): void;
        /**
         * Sets the #GoaTodo instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Todo.top_of_page"&gt;org.gnome.OnlineAccounts.Todo&lt;/link&gt; on `object`.
         * @param interface_ A #GoaTodo or %NULL to clear the interface.
         */
        set_todo(interface_?: Todo | null): void;
    }

    module PasswordBasedProxy {
        // Constructor properties interface
    }

    /**
     * The #GoaPasswordBasedProxy structure contains only private data and should only be accessed using the provided API.
     */
    class PasswordBasedProxy extends Gio.DBusProxy {
        // Constructors of Goa-1.0.PasswordBasedProxy

        static new_finish(res: Gio.AsyncResult): PasswordBasedProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): PasswordBasedProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): PasswordBasedProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): PasswordBasedProxy;

        // Owm methods of Goa-1.0.PasswordBasedProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page"&gt;org.gnome.OnlineAccounts.PasswordBased&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_password_based_proxy_new_finish() to get the result of the operation.
         *
         * See goa_password_based_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<PasswordBasedProxy> | null,
        ): void;
        /**
         * Like goa_password_based_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_password_based_proxy_new_for_bus_finish() to get the result of the operation.
         *
         * See goa_password_based_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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
            callback?: Gio.AsyncReadyCallback<PasswordBasedProxy> | null,
        ): void;
    }

    module PasswordBasedSkeleton {
        // Constructor properties interface
    }

    /**
     * The #GoaPasswordBasedSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class PasswordBasedSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of Goa-1.0.PasswordBasedSkeleton

        static ['new'](): PasswordBasedSkeleton;
    }

    module PhotosProxy {
        // Constructor properties interface
    }

    /**
     * The #GoaPhotosProxy structure contains only private data and should only be accessed using the provided API.
     */
    class PhotosProxy extends Gio.DBusProxy {
        // Constructors of Goa-1.0.PhotosProxy

        static new_finish(res: Gio.AsyncResult): PhotosProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): PhotosProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): PhotosProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): PhotosProxy;

        // Owm methods of Goa-1.0.PhotosProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Photos.top_of_page"&gt;org.gnome.OnlineAccounts.Photos&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_photos_proxy_new_finish() to get the result of the operation.
         *
         * See goa_photos_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<PhotosProxy> | null,
        ): void;
        /**
         * Like goa_photos_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_photos_proxy_new_for_bus_finish() to get the result of the operation.
         *
         * See goa_photos_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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
            callback?: Gio.AsyncReadyCallback<PhotosProxy> | null,
        ): void;
    }

    module PhotosSkeleton {
        // Constructor properties interface
    }

    /**
     * The #GoaPhotosSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class PhotosSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of Goa-1.0.PhotosSkeleton

        static ['new'](): PhotosSkeleton;
    }

    module PrintersProxy {
        // Constructor properties interface
    }

    /**
     * The #GoaPrintersProxy structure contains only private data and should only be accessed using the provided API.
     */
    class PrintersProxy extends Gio.DBusProxy {
        // Constructors of Goa-1.0.PrintersProxy

        static new_finish(res: Gio.AsyncResult): PrintersProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): PrintersProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): PrintersProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): PrintersProxy;

        // Owm methods of Goa-1.0.PrintersProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Printers.top_of_page"&gt;org.gnome.OnlineAccounts.Printers&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_printers_proxy_new_finish() to get the result of the operation.
         *
         * See goa_printers_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<PrintersProxy> | null,
        ): void;
        /**
         * Like goa_printers_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_printers_proxy_new_for_bus_finish() to get the result of the operation.
         *
         * See goa_printers_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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
            callback?: Gio.AsyncReadyCallback<PrintersProxy> | null,
        ): void;
    }

    module PrintersSkeleton {
        // Constructor properties interface
    }

    /**
     * The #GoaPrintersSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class PrintersSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of Goa-1.0.PrintersSkeleton

        static ['new'](): PrintersSkeleton;
    }

    module ReadLaterProxy {
        // Constructor properties interface
    }

    /**
     * The #GoaReadLaterProxy structure contains only private data and should only be accessed using the provided API.
     */
    class ReadLaterProxy extends Gio.DBusProxy {
        // Constructors of Goa-1.0.ReadLaterProxy

        static new_finish(res: Gio.AsyncResult): ReadLaterProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): ReadLaterProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): ReadLaterProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): ReadLaterProxy;

        // Owm methods of Goa-1.0.ReadLaterProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page"&gt;org.gnome.OnlineAccounts.ReadLater&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_read_later_proxy_new_finish() to get the result of the operation.
         *
         * See goa_read_later_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<ReadLaterProxy> | null,
        ): void;
        /**
         * Like goa_read_later_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_read_later_proxy_new_for_bus_finish() to get the result of the operation.
         *
         * See goa_read_later_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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
            callback?: Gio.AsyncReadyCallback<ReadLaterProxy> | null,
        ): void;
    }

    module ReadLaterSkeleton {
        // Constructor properties interface
    }

    /**
     * The #GoaReadLaterSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class ReadLaterSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of Goa-1.0.ReadLaterSkeleton

        static ['new'](): ReadLaterSkeleton;
    }

    module TicketingProxy {
        // Constructor properties interface
    }

    /**
     * The #GoaTicketingProxy structure contains only private data and should only be accessed using the provided API.
     */
    class TicketingProxy extends Gio.DBusProxy {
        // Constructors of Goa-1.0.TicketingProxy

        static new_finish(res: Gio.AsyncResult): TicketingProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): TicketingProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): TicketingProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): TicketingProxy;

        // Owm methods of Goa-1.0.TicketingProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Ticketing.top_of_page"&gt;org.gnome.OnlineAccounts.Ticketing&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_ticketing_proxy_new_finish() to get the result of the operation.
         *
         * See goa_ticketing_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<TicketingProxy> | null,
        ): void;
        /**
         * Like goa_ticketing_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_ticketing_proxy_new_for_bus_finish() to get the result of the operation.
         *
         * See goa_ticketing_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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
            callback?: Gio.AsyncReadyCallback<TicketingProxy> | null,
        ): void;
    }

    module TicketingSkeleton {
        // Constructor properties interface
    }

    /**
     * The #GoaTicketingSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class TicketingSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of Goa-1.0.TicketingSkeleton

        static ['new'](): TicketingSkeleton;
    }

    module TodoProxy {
        // Constructor properties interface
    }

    /**
     * The #GoaTodoProxy structure contains only private data and should only be accessed using the provided API.
     */
    class TodoProxy extends Gio.DBusProxy {
        // Constructors of Goa-1.0.TodoProxy

        static new_finish(res: Gio.AsyncResult): TodoProxy;

        static new_for_bus_finish(res: Gio.AsyncResult): TodoProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): TodoProxy;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): TodoProxy;

        // Owm methods of Goa-1.0.TodoProxy

        /**
         * Asynchronously creates a proxy for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Todo.top_of_page"&gt;org.gnome.OnlineAccounts.Todo&lt;/link&gt;. See g_dbus_proxy_new() for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_todo_proxy_new_finish() to get the result of the operation.
         *
         * See goa_todo_proxy_new_sync() for the synchronous, blocking version of this constructor.
         * @param connection A #GDBusConnection.
         * @param flags Flags from the #GDBusProxyFlags enumeration.
         * @param name A bus name (well-known or unique) or %NULL if @connection is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
         */
        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<TodoProxy> | null,
        ): void;
        /**
         * Like goa_todo_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_todo_proxy_new_for_bus_finish() to get the result of the operation.
         *
         * See goa_todo_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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
            callback?: Gio.AsyncReadyCallback<TodoProxy> | null,
        ): void;
    }

    module TodoSkeleton {
        // Constructor properties interface
    }

    /**
     * The #GoaTodoSkeleton structure contains only private data and should only be accessed using the provided API.
     */
    class TodoSkeleton extends Gio.DBusInterfaceSkeleton {
        // Constructors of Goa-1.0.TodoSkeleton

        static ['new'](): TodoSkeleton;
    }

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Account.top_of_page"&gt;org.gnome.OnlineAccounts.Account&lt;/link&gt;.
     */
    class AccountIface {}

    /**
     * Class structure for #GoaAccountProxy.
     */
    class AccountProxyClass {}

    class AccountProxyPrivate {}

    /**
     * Class structure for #GoaAccountSkeleton.
     */
    class AccountSkeletonClass {}

    class AccountSkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Calendar.top_of_page"&gt;org.gnome.OnlineAccounts.Calendar&lt;/link&gt;.
     */
    class CalendarIface {}

    /**
     * Class structure for #GoaCalendarProxy.
     */
    class CalendarProxyClass {}

    class CalendarProxyPrivate {}

    /**
     * Class structure for #GoaCalendarSkeleton.
     */
    class CalendarSkeletonClass {}

    class CalendarSkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Chat.top_of_page"&gt;org.gnome.OnlineAccounts.Chat&lt;/link&gt;.
     */
    class ChatIface {}

    /**
     * Class structure for #GoaChatProxy.
     */
    class ChatProxyClass {}

    class ChatProxyPrivate {}

    /**
     * Class structure for #GoaChatSkeleton.
     */
    class ChatSkeletonClass {}

    class ChatSkeletonPrivate {}

    class ClientClass {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Contacts.top_of_page"&gt;org.gnome.OnlineAccounts.Contacts&lt;/link&gt;.
     */
    class ContactsIface {}

    /**
     * Class structure for #GoaContactsProxy.
     */
    class ContactsProxyClass {}

    class ContactsProxyPrivate {}

    /**
     * Class structure for #GoaContactsSkeleton.
     */
    class ContactsSkeletonClass {}

    class ContactsSkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Documents.top_of_page"&gt;org.gnome.OnlineAccounts.Documents&lt;/link&gt;.
     */
    class DocumentsIface {}

    /**
     * Class structure for #GoaDocumentsProxy.
     */
    class DocumentsProxyClass {}

    class DocumentsProxyPrivate {}

    /**
     * Class structure for #GoaDocumentsSkeleton.
     */
    class DocumentsSkeletonClass {}

    class DocumentsSkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Exchange.top_of_page"&gt;org.gnome.OnlineAccounts.Exchange&lt;/link&gt;.
     */
    class ExchangeIface {}

    /**
     * Class structure for #GoaExchangeProxy.
     */
    class ExchangeProxyClass {}

    class ExchangeProxyPrivate {}

    /**
     * Class structure for #GoaExchangeSkeleton.
     */
    class ExchangeSkeletonClass {}

    class ExchangeSkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Files.top_of_page"&gt;org.gnome.OnlineAccounts.Files&lt;/link&gt;.
     */
    class FilesIface {}

    /**
     * Class structure for #GoaFilesProxy.
     */
    class FilesProxyClass {}

    class FilesProxyPrivate {}

    /**
     * Class structure for #GoaFilesSkeleton.
     */
    class FilesSkeletonClass {}

    class FilesSkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Mail.top_of_page"&gt;org.gnome.OnlineAccounts.Mail&lt;/link&gt;.
     */
    class MailIface {}

    /**
     * Class structure for #GoaMailProxy.
     */
    class MailProxyClass {}

    class MailProxyPrivate {}

    /**
     * Class structure for #GoaMailSkeleton.
     */
    class MailSkeletonClass {}

    class MailSkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Manager.top_of_page"&gt;org.gnome.OnlineAccounts.Manager&lt;/link&gt;.
     */
    class ManagerIface {}

    /**
     * Class structure for #GoaManagerProxy.
     */
    class ManagerProxyClass {}

    class ManagerProxyPrivate {}

    /**
     * Class structure for #GoaManagerSkeleton.
     */
    class ManagerSkeletonClass {}

    class ManagerSkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Maps.top_of_page"&gt;org.gnome.OnlineAccounts.Maps&lt;/link&gt;.
     */
    class MapsIface {}

    /**
     * Class structure for #GoaMapsProxy.
     */
    class MapsProxyClass {}

    class MapsProxyPrivate {}

    /**
     * Class structure for #GoaMapsSkeleton.
     */
    class MapsSkeletonClass {}

    class MapsSkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page"&gt;org.gnome.OnlineAccounts.MediaServer&lt;/link&gt;.
     */
    class MediaServerIface {}

    /**
     * Class structure for #GoaMediaServerProxy.
     */
    class MediaServerProxyClass {}

    class MediaServerProxyPrivate {}

    /**
     * Class structure for #GoaMediaServerSkeleton.
     */
    class MediaServerSkeletonClass {}

    class MediaServerSkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Music.top_of_page"&gt;org.gnome.OnlineAccounts.Music&lt;/link&gt;.
     */
    class MusicIface {}

    /**
     * Class structure for #GoaMusicProxy.
     */
    class MusicProxyClass {}

    class MusicProxyPrivate {}

    /**
     * Class structure for #GoaMusicSkeleton.
     */
    class MusicSkeletonClass {}

    class MusicSkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page"&gt;org.gnome.OnlineAccounts.OAuth2Based&lt;/link&gt;.
     */
    class OAuth2BasedIface {}

    /**
     * Class structure for #GoaOAuth2BasedProxy.
     */
    class OAuth2BasedProxyClass {}

    class OAuth2BasedProxyPrivate {}

    /**
     * Class structure for #GoaOAuth2BasedSkeleton.
     */
    class OAuth2BasedSkeletonClass {}

    class OAuth2BasedSkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page"&gt;org.gnome.OnlineAccounts.OAuthBased&lt;/link&gt;.
     */
    class OAuthBasedIface {}

    /**
     * Class structure for #GoaOAuthBasedProxy.
     */
    class OAuthBasedProxyClass {}

    class OAuthBasedProxyPrivate {}

    /**
     * Class structure for #GoaOAuthBasedSkeleton.
     */
    class OAuthBasedSkeletonClass {}

    class OAuthBasedSkeletonPrivate {}

    /**
     * Virtual table for the #GoaObject interface.
     */
    class ObjectIface {}

    /**
     * Class structure for #GoaObjectManagerClient.
     */
    class ObjectManagerClientClass {}

    class ObjectManagerClientPrivate {}

    /**
     * Class structure for #GoaObjectProxy.
     */
    class ObjectProxyClass {}

    class ObjectProxyPrivate {}

    /**
     * Class structure for #GoaObjectSkeleton.
     */
    class ObjectSkeletonClass {}

    class ObjectSkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page"&gt;org.gnome.OnlineAccounts.PasswordBased&lt;/link&gt;.
     */
    class PasswordBasedIface {}

    /**
     * Class structure for #GoaPasswordBasedProxy.
     */
    class PasswordBasedProxyClass {}

    class PasswordBasedProxyPrivate {}

    /**
     * Class structure for #GoaPasswordBasedSkeleton.
     */
    class PasswordBasedSkeletonClass {}

    class PasswordBasedSkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Photos.top_of_page"&gt;org.gnome.OnlineAccounts.Photos&lt;/link&gt;.
     */
    class PhotosIface {}

    /**
     * Class structure for #GoaPhotosProxy.
     */
    class PhotosProxyClass {}

    class PhotosProxyPrivate {}

    /**
     * Class structure for #GoaPhotosSkeleton.
     */
    class PhotosSkeletonClass {}

    class PhotosSkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Printers.top_of_page"&gt;org.gnome.OnlineAccounts.Printers&lt;/link&gt;.
     */
    class PrintersIface {}

    /**
     * Class structure for #GoaPrintersProxy.
     */
    class PrintersProxyClass {}

    class PrintersProxyPrivate {}

    /**
     * Class structure for #GoaPrintersSkeleton.
     */
    class PrintersSkeletonClass {}

    class PrintersSkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page"&gt;org.gnome.OnlineAccounts.ReadLater&lt;/link&gt;.
     */
    class ReadLaterIface {}

    /**
     * Class structure for #GoaReadLaterProxy.
     */
    class ReadLaterProxyClass {}

    class ReadLaterProxyPrivate {}

    /**
     * Class structure for #GoaReadLaterSkeleton.
     */
    class ReadLaterSkeletonClass {}

    class ReadLaterSkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Ticketing.top_of_page"&gt;org.gnome.OnlineAccounts.Ticketing&lt;/link&gt;.
     */
    class TicketingIface {}

    /**
     * Class structure for #GoaTicketingProxy.
     */
    class TicketingProxyClass {}

    class TicketingProxyPrivate {}

    /**
     * Class structure for #GoaTicketingSkeleton.
     */
    class TicketingSkeletonClass {}

    class TicketingSkeletonPrivate {}

    /**
     * Virtual table for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Todo.top_of_page"&gt;org.gnome.OnlineAccounts.Todo&lt;/link&gt;.
     */
    class TodoIface {}

    /**
     * Class structure for #GoaTodoProxy.
     */
    class TodoProxyClass {}

    class TodoProxyPrivate {}

    /**
     * Class structure for #GoaTodoSkeleton.
     */
    class TodoSkeletonClass {}

    class TodoSkeletonPrivate {}

    interface Account {
        // Own properties of Goa-1.0.Account

        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.AttentionNeeded"&gt;"AttentionNeeded"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        attention_needed: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.AttentionNeeded"&gt;"AttentionNeeded"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        attentionNeeded: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.CalendarDisabled"&gt;"CalendarDisabled"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        calendar_disabled: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.CalendarDisabled"&gt;"CalendarDisabled"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        calendarDisabled: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ChatDisabled"&gt;"ChatDisabled"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        chat_disabled: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ChatDisabled"&gt;"ChatDisabled"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        chatDisabled: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ContactsDisabled"&gt;"ContactsDisabled"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        contacts_disabled: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ContactsDisabled"&gt;"ContactsDisabled"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        contactsDisabled: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.DocumentsDisabled"&gt;"DocumentsDisabled"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        documents_disabled: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.DocumentsDisabled"&gt;"DocumentsDisabled"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        documentsDisabled: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.FilesDisabled"&gt;"FilesDisabled"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        files_disabled: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.FilesDisabled"&gt;"FilesDisabled"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        filesDisabled: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.Id"&gt;"Id"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        id: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.Identity"&gt;"Identity"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        identity: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.IsLocked"&gt;"IsLocked"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        is_locked: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.IsLocked"&gt;"IsLocked"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        isLocked: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.IsTemporary"&gt;"IsTemporary"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        is_temporary: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.IsTemporary"&gt;"IsTemporary"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        isTemporary: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.MailDisabled"&gt;"MailDisabled"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        mail_disabled: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.MailDisabled"&gt;"MailDisabled"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        mailDisabled: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.MapsDisabled"&gt;"MapsDisabled"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        maps_disabled: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.MapsDisabled"&gt;"MapsDisabled"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        mapsDisabled: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.MusicDisabled"&gt;"MusicDisabled"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        music_disabled: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.MusicDisabled"&gt;"MusicDisabled"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        musicDisabled: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.PhotosDisabled"&gt;"PhotosDisabled"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        photos_disabled: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.PhotosDisabled"&gt;"PhotosDisabled"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        photosDisabled: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.PresentationIdentity"&gt;"PresentationIdentity"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        presentation_identity: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.PresentationIdentity"&gt;"PresentationIdentity"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        presentationIdentity: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.PrintersDisabled"&gt;"PrintersDisabled"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        printers_disabled: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.PrintersDisabled"&gt;"PrintersDisabled"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        printersDisabled: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ProviderIcon"&gt;"ProviderIcon"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        provider_icon: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ProviderIcon"&gt;"ProviderIcon"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        providerIcon: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ProviderName"&gt;"ProviderName"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        provider_name: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ProviderName"&gt;"ProviderName"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        providerName: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ProviderType"&gt;"ProviderType"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        provider_type: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ProviderType"&gt;"ProviderType"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        providerType: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ReadLaterDisabled"&gt;"ReadLaterDisabled"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        read_later_disabled: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ReadLaterDisabled"&gt;"ReadLaterDisabled"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        readLaterDisabled: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.TicketingDisabled"&gt;"TicketingDisabled"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        ticketing_disabled: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.TicketingDisabled"&gt;"TicketingDisabled"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        ticketingDisabled: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.TodoDisabled"&gt;"TodoDisabled"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        todo_disabled: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.TodoDisabled"&gt;"TodoDisabled"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        todoDisabled: boolean;

        // Owm methods of Goa-1.0.Account

        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-gnome-OnlineAccounts-Account.EnsureCredentials"&gt;EnsureCredentials()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_account_call_ensure_credentials_finish() to get the result of the operation.
         *
         * See goa_account_call_ensure_credentials_sync() for the synchronous, blocking version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_ensure_credentials(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with goa_account_call_ensure_credentials().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_account_call_ensure_credentials().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_ensure_credentials_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-gnome-OnlineAccounts-Account.EnsureCredentials"&gt;EnsureCredentials()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See goa_account_call_ensure_credentials() for the asynchronous version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_ensure_credentials_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-gnome-OnlineAccounts-Account.Remove"&gt;Remove()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_account_call_remove_finish() to get the result of the operation.
         *
         * See goa_account_call_remove_sync() for the synchronous, blocking version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_remove(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes an operation started with goa_account_call_remove().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_account_call_remove().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_remove_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-gnome-OnlineAccounts-Account.Remove"&gt;Remove()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See goa_account_call_remove() for the asynchronous version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_remove_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-gnome-OnlineAccounts-Account.EnsureCredentials"&gt;EnsureCredentials()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param expires_in Parameter to return.
         */
        complete_ensure_credentials(invocation: Gio.DBusMethodInvocation, expires_in: number): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-gnome-OnlineAccounts-Account.Remove"&gt;Remove()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_remove(invocation: Gio.DBusMethodInvocation): void;

        // Own virtual methods of Goa-1.0.Account

        vfunc_handle_ensure_credentials(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_remove(invocation: Gio.DBusMethodInvocation): boolean;
    }

    interface Calendar {
        // Own properties of Goa-1.0.Calendar

        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Calendar.AcceptSslErrors"&gt;"AcceptSslErrors"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        accept_ssl_errors: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Calendar.AcceptSslErrors"&gt;"AcceptSslErrors"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        acceptSslErrors: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Calendar.Uri"&gt;"Uri"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        uri: string;
    }

    interface Chat {}

    interface Contacts {
        // Own properties of Goa-1.0.Contacts

        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Contacts.AcceptSslErrors"&gt;"AcceptSslErrors"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        accept_ssl_errors: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Contacts.AcceptSslErrors"&gt;"AcceptSslErrors"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        acceptSslErrors: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Contacts.Uri"&gt;"Uri"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        uri: string;
    }

    interface Documents {}

    interface Exchange {
        // Own properties of Goa-1.0.Exchange

        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Exchange.AcceptSslErrors"&gt;"AcceptSslErrors"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        accept_ssl_errors: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Exchange.AcceptSslErrors"&gt;"AcceptSslErrors"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        acceptSslErrors: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Exchange.Host"&gt;"Host"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        host: string;
    }

    interface Files {
        // Own properties of Goa-1.0.Files

        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Files.AcceptSslErrors"&gt;"AcceptSslErrors"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        accept_ssl_errors: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Files.AcceptSslErrors"&gt;"AcceptSslErrors"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        acceptSslErrors: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Files.Uri"&gt;"Uri"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        uri: string;
    }

    interface Mail {
        // Own properties of Goa-1.0.Mail

        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.EmailAddress"&gt;"EmailAddress"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        email_address: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.EmailAddress"&gt;"EmailAddress"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        emailAddress: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapAcceptSslErrors"&gt;"ImapAcceptSslErrors"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        imap_accept_ssl_errors: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapAcceptSslErrors"&gt;"ImapAcceptSslErrors"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        imapAcceptSslErrors: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapHost"&gt;"ImapHost"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        imap_host: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapHost"&gt;"ImapHost"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        imapHost: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapSupported"&gt;"ImapSupported"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        imap_supported: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapSupported"&gt;"ImapSupported"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        imapSupported: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapUseSsl"&gt;"ImapUseSsl"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        imap_use_ssl: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapUseSsl"&gt;"ImapUseSsl"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        imapUseSsl: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapUseTls"&gt;"ImapUseTls"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        imap_use_tls: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapUseTls"&gt;"ImapUseTls"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        imapUseTls: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapUserName"&gt;"ImapUserName"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        imap_user_name: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapUserName"&gt;"ImapUserName"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        imapUserName: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.Name"&gt;"Name"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        name: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpAcceptSslErrors"&gt;"SmtpAcceptSslErrors"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtp_accept_ssl_errors: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpAcceptSslErrors"&gt;"SmtpAcceptSslErrors"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtpAcceptSslErrors: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpAuthLogin"&gt;"SmtpAuthLogin"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtp_auth_login: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpAuthLogin"&gt;"SmtpAuthLogin"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtpAuthLogin: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpAuthPlain"&gt;"SmtpAuthPlain"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtp_auth_plain: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpAuthPlain"&gt;"SmtpAuthPlain"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtpAuthPlain: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpAuthXoauth2"&gt;"SmtpAuthXoauth2"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtp_auth_xoauth2: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpAuthXoauth2"&gt;"SmtpAuthXoauth2"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtpAuthXoauth2: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpHost"&gt;"SmtpHost"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtp_host: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpHost"&gt;"SmtpHost"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtpHost: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpSupported"&gt;"SmtpSupported"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtp_supported: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpSupported"&gt;"SmtpSupported"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtpSupported: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpUseAuth"&gt;"SmtpUseAuth"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtp_use_auth: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpUseAuth"&gt;"SmtpUseAuth"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtpUseAuth: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpUseSsl"&gt;"SmtpUseSsl"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtp_use_ssl: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpUseSsl"&gt;"SmtpUseSsl"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtpUseSsl: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpUseTls"&gt;"SmtpUseTls"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtp_use_tls: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpUseTls"&gt;"SmtpUseTls"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtpUseTls: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpUserName"&gt;"SmtpUserName"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtp_user_name: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpUserName"&gt;"SmtpUserName"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtpUserName: string;
    }

    interface Manager {
        // Owm methods of Goa-1.0.Manager

        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-gnome-OnlineAccounts-Manager.AddAccount"&gt;AddAccount()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_manager_call_add_account_finish() to get the result of the operation.
         *
         * See goa_manager_call_add_account_sync() for the synchronous, blocking version of this method.
         * @param arg_provider Argument to pass with the method invocation.
         * @param arg_identity Argument to pass with the method invocation.
         * @param arg_presentation_identity Argument to pass with the method invocation.
         * @param arg_credentials Argument to pass with the method invocation.
         * @param arg_details Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_add_account(
            arg_provider: string,
            arg_identity: string,
            arg_presentation_identity: string,
            arg_credentials: GLib.Variant,
            arg_details: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with goa_manager_call_add_account().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_manager_call_add_account().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_add_account_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-gnome-OnlineAccounts-Manager.AddAccount"&gt;AddAccount()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See goa_manager_call_add_account() for the asynchronous version of this method.
         * @param arg_provider Argument to pass with the method invocation.
         * @param arg_identity Argument to pass with the method invocation.
         * @param arg_presentation_identity Argument to pass with the method invocation.
         * @param arg_credentials Argument to pass with the method invocation.
         * @param arg_details Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_add_account_sync(
            arg_provider: string,
            arg_identity: string,
            arg_presentation_identity: string,
            arg_credentials: GLib.Variant,
            arg_details: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-gnome-OnlineAccounts-Manager.IsSupportedProvider"&gt;IsSupportedProvider()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_manager_call_is_supported_provider_finish() to get the result of the operation.
         *
         * See goa_manager_call_is_supported_provider_sync() for the synchronous, blocking version of this method.
         * @param arg_provider_type Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_is_supported_provider(
            arg_provider_type: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with goa_manager_call_is_supported_provider().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_manager_call_is_supported_provider().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_is_supported_provider_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-gnome-OnlineAccounts-Manager.IsSupportedProvider"&gt;IsSupportedProvider()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See goa_manager_call_is_supported_provider() for the asynchronous version of this method.
         * @param arg_provider_type Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_is_supported_provider_sync(arg_provider_type: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-gnome-OnlineAccounts-Manager.AddAccount"&gt;AddAccount()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param account_object_path Parameter to return.
         */
        complete_add_account(invocation: Gio.DBusMethodInvocation, account_object_path: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-gnome-OnlineAccounts-Manager.IsSupportedProvider"&gt;IsSupportedProvider()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param is_supported Parameter to return.
         */
        complete_is_supported_provider(invocation: Gio.DBusMethodInvocation, is_supported: boolean): void;

        // Own virtual methods of Goa-1.0.Manager

        vfunc_handle_add_account(
            invocation: Gio.DBusMethodInvocation,
            arg_provider: string,
            arg_identity: string,
            arg_presentation_identity: string,
            arg_credentials: GLib.Variant,
            arg_details: GLib.Variant,
        ): boolean;
        vfunc_handle_is_supported_provider(invocation: Gio.DBusMethodInvocation, arg_provider_type: string): boolean;
    }

    interface Maps {}

    interface MediaServer {
        // Own properties of Goa-1.0.MediaServer

        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-MediaServer.DlnaSupported"&gt;"DlnaSupported"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        dlna_supported: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-MediaServer.DlnaSupported"&gt;"DlnaSupported"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        dlnaSupported: boolean;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-MediaServer.Udn"&gt;"Udn"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        udn: string;
    }

    interface Music {}

    interface OAuth2Based {
        // Own properties of Goa-1.0.OAuth2Based

        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-OAuth2Based.ClientId"&gt;"ClientId"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        client_id: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-OAuth2Based.ClientId"&gt;"ClientId"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        clientId: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-OAuth2Based.ClientSecret"&gt;"ClientSecret"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        client_secret: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-OAuth2Based.ClientSecret"&gt;"ClientSecret"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        clientSecret: string;

        // Owm methods of Goa-1.0.OAuth2Based

        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-gnome-OnlineAccounts-OAuth2Based.GetAccessToken"&gt;GetAccessToken()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_oauth2_based_call_get_access_token_finish() to get the result of the operation.
         *
         * See goa_oauth2_based_call_get_access_token_sync() for the synchronous, blocking version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_get_access_token(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with goa_oauth2_based_call_get_access_token().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_oauth2_based_call_get_access_token().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_get_access_token_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-gnome-OnlineAccounts-OAuth2Based.GetAccessToken"&gt;GetAccessToken()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See goa_oauth2_based_call_get_access_token() for the asynchronous version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_get_access_token_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-gnome-OnlineAccounts-OAuth2Based.GetAccessToken"&gt;GetAccessToken()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param access_token Parameter to return.
         * @param expires_in Parameter to return.
         */
        complete_get_access_token(invocation: Gio.DBusMethodInvocation, access_token: string, expires_in: number): void;

        // Own virtual methods of Goa-1.0.OAuth2Based

        vfunc_handle_get_access_token(invocation: Gio.DBusMethodInvocation): boolean;
    }

    interface OAuthBased {
        // Own properties of Goa-1.0.OAuthBased

        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-OAuthBased.ConsumerKey"&gt;"ConsumerKey"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        consumer_key: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-OAuthBased.ConsumerKey"&gt;"ConsumerKey"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        consumerKey: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-OAuthBased.ConsumerSecret"&gt;"ConsumerSecret"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        consumer_secret: string;
        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-OAuthBased.ConsumerSecret"&gt;"ConsumerSecret"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        consumerSecret: string;

        // Owm methods of Goa-1.0.OAuthBased

        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-gnome-OnlineAccounts-OAuthBased.GetAccessToken"&gt;GetAccessToken()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_oauth_based_call_get_access_token_finish() to get the result of the operation.
         *
         * See goa_oauth_based_call_get_access_token_sync() for the synchronous, blocking version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_get_access_token(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with goa_oauth_based_call_get_access_token().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_oauth_based_call_get_access_token().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_get_access_token_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-gnome-OnlineAccounts-OAuthBased.GetAccessToken"&gt;GetAccessToken()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See goa_oauth_based_call_get_access_token() for the asynchronous version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_get_access_token_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-gnome-OnlineAccounts-OAuthBased.GetAccessToken"&gt;GetAccessToken()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param access_token Parameter to return.
         * @param access_token_secret Parameter to return.
         * @param expires_in Parameter to return.
         */
        complete_get_access_token(
            invocation: Gio.DBusMethodInvocation,
            access_token: string,
            access_token_secret: string,
            expires_in: number,
        ): void;

        // Own virtual methods of Goa-1.0.OAuthBased

        vfunc_handle_get_access_token(invocation: Gio.DBusMethodInvocation): boolean;
    }

    interface Object {
        // Own properties of Goa-1.0.Object

        /**
         * The #GoaAccount instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Account.top_of_page"&gt;org.gnome.OnlineAccounts.Account&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        account: Account;
        /**
         * The #GoaCalendar instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Calendar.top_of_page"&gt;org.gnome.OnlineAccounts.Calendar&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        calendar: Calendar;
        /**
         * The #GoaChat instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Chat.top_of_page"&gt;org.gnome.OnlineAccounts.Chat&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        chat: Chat;
        /**
         * The #GoaContacts instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Contacts.top_of_page"&gt;org.gnome.OnlineAccounts.Contacts&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        contacts: Contacts;
        /**
         * The #GoaDocuments instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Documents.top_of_page"&gt;org.gnome.OnlineAccounts.Documents&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        documents: Documents;
        /**
         * The #GoaExchange instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Exchange.top_of_page"&gt;org.gnome.OnlineAccounts.Exchange&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        exchange: Exchange;
        /**
         * The #GoaFiles instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Files.top_of_page"&gt;org.gnome.OnlineAccounts.Files&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        files: Files;
        /**
         * The #GoaMail instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Mail.top_of_page"&gt;org.gnome.OnlineAccounts.Mail&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        mail: Mail;
        /**
         * The #GoaManager instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Manager.top_of_page"&gt;org.gnome.OnlineAccounts.Manager&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        manager: Manager;
        /**
         * The #GoaMaps instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Maps.top_of_page"&gt;org.gnome.OnlineAccounts.Maps&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        maps: Maps;
        /**
         * The #GoaMediaServer instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page"&gt;org.gnome.OnlineAccounts.MediaServer&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        media_server: MediaServer;
        /**
         * The #GoaMediaServer instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page"&gt;org.gnome.OnlineAccounts.MediaServer&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        mediaServer: MediaServer;
        /**
         * The #GoaMusic instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Music.top_of_page"&gt;org.gnome.OnlineAccounts.Music&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        music: Music;
        /**
         * The #GoaOAuthBased instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page"&gt;org.gnome.OnlineAccounts.OAuthBased&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        oauth_based: OAuthBased;
        /**
         * The #GoaOAuthBased instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page"&gt;org.gnome.OnlineAccounts.OAuthBased&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        oauthBased: OAuthBased;
        /**
         * The #GoaOAuth2Based instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page"&gt;org.gnome.OnlineAccounts.OAuth2Based&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        oauth2_based: OAuth2Based;
        /**
         * The #GoaOAuth2Based instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page"&gt;org.gnome.OnlineAccounts.OAuth2Based&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        oauth2Based: OAuth2Based;
        /**
         * The #GoaPasswordBased instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page"&gt;org.gnome.OnlineAccounts.PasswordBased&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        password_based: PasswordBased;
        /**
         * The #GoaPasswordBased instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page"&gt;org.gnome.OnlineAccounts.PasswordBased&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        passwordBased: PasswordBased;
        /**
         * The #GoaPhotos instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Photos.top_of_page"&gt;org.gnome.OnlineAccounts.Photos&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        photos: Photos;
        /**
         * The #GoaPrinters instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Printers.top_of_page"&gt;org.gnome.OnlineAccounts.Printers&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        printers: Printers;
        /**
         * The #GoaReadLater instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page"&gt;org.gnome.OnlineAccounts.ReadLater&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        read_later: ReadLater;
        /**
         * The #GoaReadLater instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page"&gt;org.gnome.OnlineAccounts.ReadLater&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        readLater: ReadLater;
        /**
         * The #GoaTicketing instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Ticketing.top_of_page"&gt;org.gnome.OnlineAccounts.Ticketing&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        ticketing: Ticketing;
        /**
         * The #GoaTodo instance corresponding to the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Todo.top_of_page"&gt;org.gnome.OnlineAccounts.Todo&lt;/link&gt;, if any.
         *
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        todo: Todo;

        // Owm methods of Goa-1.0.Object

        /**
         * Gets the #GoaAccount instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Account.top_of_page"&gt;org.gnome.OnlineAccounts.Account&lt;/link&gt; on `object,` if any.
         * @returns A #GoaAccount that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_account(): Account | null;
        /**
         * Gets the #GoaCalendar instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Calendar.top_of_page"&gt;org.gnome.OnlineAccounts.Calendar&lt;/link&gt; on `object,` if any.
         * @returns A #GoaCalendar that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_calendar(): Calendar | null;
        /**
         * Gets the #GoaChat instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Chat.top_of_page"&gt;org.gnome.OnlineAccounts.Chat&lt;/link&gt; on `object,` if any.
         * @returns A #GoaChat that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_chat(): Chat | null;
        /**
         * Gets the #GoaContacts instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Contacts.top_of_page"&gt;org.gnome.OnlineAccounts.Contacts&lt;/link&gt; on `object,` if any.
         * @returns A #GoaContacts that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_contacts(): Contacts | null;
        /**
         * Gets the #GoaDocuments instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Documents.top_of_page"&gt;org.gnome.OnlineAccounts.Documents&lt;/link&gt; on `object,` if any.
         * @returns A #GoaDocuments that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_documents(): Documents | null;
        /**
         * Gets the #GoaExchange instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Exchange.top_of_page"&gt;org.gnome.OnlineAccounts.Exchange&lt;/link&gt; on `object,` if any.
         * @returns A #GoaExchange that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_exchange(): Exchange | null;
        /**
         * Gets the #GoaFiles instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Files.top_of_page"&gt;org.gnome.OnlineAccounts.Files&lt;/link&gt; on `object,` if any.
         * @returns A #GoaFiles that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_files(): Files | null;
        /**
         * Gets the #GoaMail instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Mail.top_of_page"&gt;org.gnome.OnlineAccounts.Mail&lt;/link&gt; on `object,` if any.
         * @returns A #GoaMail that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_mail(): Mail | null;
        /**
         * Gets the #GoaManager instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Manager.top_of_page"&gt;org.gnome.OnlineAccounts.Manager&lt;/link&gt; on `object,` if any.
         * @returns A #GoaManager that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_manager(): Manager | null;
        /**
         * Gets the #GoaMaps instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Maps.top_of_page"&gt;org.gnome.OnlineAccounts.Maps&lt;/link&gt; on `object,` if any.
         * @returns A #GoaMaps that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_maps(): Maps | null;
        /**
         * Gets the #GoaMediaServer instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page"&gt;org.gnome.OnlineAccounts.MediaServer&lt;/link&gt; on `object,` if any.
         * @returns A #GoaMediaServer that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_media_server(): MediaServer | null;
        /**
         * Gets the #GoaMusic instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Music.top_of_page"&gt;org.gnome.OnlineAccounts.Music&lt;/link&gt; on `object,` if any.
         * @returns A #GoaMusic that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_music(): Music | null;
        /**
         * Gets the #GoaOAuth2Based instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page"&gt;org.gnome.OnlineAccounts.OAuth2Based&lt;/link&gt; on `object,` if any.
         * @returns A #GoaOAuth2Based that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_oauth2_based(): OAuth2Based | null;
        /**
         * Gets the #GoaOAuthBased instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page"&gt;org.gnome.OnlineAccounts.OAuthBased&lt;/link&gt; on `object,` if any.
         * @returns A #GoaOAuthBased that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_oauth_based(): OAuthBased | null;
        /**
         * Gets the #GoaPasswordBased instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page"&gt;org.gnome.OnlineAccounts.PasswordBased&lt;/link&gt; on `object,` if any.
         * @returns A #GoaPasswordBased that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_password_based(): PasswordBased | null;
        /**
         * Gets the #GoaPhotos instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Photos.top_of_page"&gt;org.gnome.OnlineAccounts.Photos&lt;/link&gt; on `object,` if any.
         * @returns A #GoaPhotos that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_photos(): Photos | null;
        /**
         * Gets the #GoaPrinters instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Printers.top_of_page"&gt;org.gnome.OnlineAccounts.Printers&lt;/link&gt; on `object,` if any.
         * @returns A #GoaPrinters that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_printers(): Printers | null;
        /**
         * Gets the #GoaReadLater instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page"&gt;org.gnome.OnlineAccounts.ReadLater&lt;/link&gt; on `object,` if any.
         * @returns A #GoaReadLater that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_read_later(): ReadLater | null;
        /**
         * Gets the #GoaTicketing instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Ticketing.top_of_page"&gt;org.gnome.OnlineAccounts.Ticketing&lt;/link&gt; on `object,` if any.
         * @returns A #GoaTicketing that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_ticketing(): Ticketing | null;
        /**
         * Gets the #GoaTodo instance for the D-Bus interface &lt;link linkend="gdbus-interface-org-gnome-OnlineAccounts-Todo.top_of_page"&gt;org.gnome.OnlineAccounts.Todo&lt;/link&gt; on `object,` if any.
         * @returns A #GoaTodo that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
         */
        get_todo(): Todo | null;
    }

    interface PasswordBased {
        // Owm methods of Goa-1.0.PasswordBased

        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-gnome-OnlineAccounts-PasswordBased.GetPassword"&gt;GetPassword()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_password_based_call_get_password_finish() to get the result of the operation.
         *
         * See goa_password_based_call_get_password_sync() for the synchronous, blocking version of this method.
         * @param arg_id Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_get_password(
            arg_id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with goa_password_based_call_get_password().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_password_based_call_get_password().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_get_password_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-gnome-OnlineAccounts-PasswordBased.GetPassword"&gt;GetPassword()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See goa_password_based_call_get_password() for the asynchronous version of this method.
         * @param arg_id Argument to pass with the method invocation.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_get_password_sync(arg_id: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-gnome-OnlineAccounts-PasswordBased.GetPassword"&gt;GetPassword()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         * @param password Parameter to return.
         */
        complete_get_password(invocation: Gio.DBusMethodInvocation, password: string): void;

        // Own virtual methods of Goa-1.0.PasswordBased

        vfunc_handle_get_password(invocation: Gio.DBusMethodInvocation, arg_id: string): boolean;
    }

    interface Photos {}

    interface Printers {}

    interface ReadLater {}

    interface Ticketing {
        // Own properties of Goa-1.0.Ticketing

        /**
         * Represents the D-Bus property &lt;link linkend="gdbus-property-org-gnome-OnlineAccounts-Ticketing.Details"&gt;"Details"&lt;/link&gt;.
         *
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        details: GLib.Variant;

        // Owm methods of Goa-1.0.Ticketing

        /**
         * Asynchronously invokes the &lt;link linkend="gdbus-method-org-gnome-OnlineAccounts-Ticketing.GetTicket"&gt;GetTicket()&lt;/link&gt; D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
         * You can then call goa_ticketing_call_get_ticket_finish() to get the result of the operation.
         *
         * See goa_ticketing_call_get_ticket_sync() for the synchronous, blocking version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
         */
        call_get_ticket(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes an operation started with goa_ticketing_call_get_ticket().
         * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_ticketing_call_get_ticket().
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_get_ticket_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the &lt;link linkend="gdbus-method-org-gnome-OnlineAccounts-Ticketing.GetTicket"&gt;GetTicket()&lt;/link&gt; D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See goa_ticketing_call_get_ticket() for the asynchronous version of this method.
         * @param cancellable A #GCancellable or %NULL.
         * @returns %TRUE if the call succeeded, %FALSE if @error is set.
         */
        call_get_ticket_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the &lt;link linkend="gdbus-method-org-gnome-OnlineAccounts-Ticketing.GetTicket"&gt;GetTicket()&lt;/link&gt; D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
         *
         * This method will free `invocation,` you cannot use it afterwards.
         * @param invocation A #GDBusMethodInvocation.
         */
        complete_get_ticket(invocation: Gio.DBusMethodInvocation): void;

        // Own virtual methods of Goa-1.0.Ticketing

        vfunc_handle_get_ticket(invocation: Gio.DBusMethodInvocation): boolean;
    }

    interface Todo {}

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

export default Goa;
// END
