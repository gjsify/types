
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

export namespace Goa {

/**
 * Error codes for the #GOA_ERROR error domain and the
 * corresponding D-Bus error names.
 */
enum Error {
    /**
     * The operation failed.
     */
    FAILED,
    /**
     * The operation is not supported.
     */
    NOT_SUPPORTED,
    /**
     * The dialog was dismissed.
     */
    DIALOG_DISMISSED,
    /**
     * Account already exists.
     */
    ACCOUNT_EXISTS,
    /**
     * Not authorized to perform operation.
     */
    NOT_AUTHORIZED,
    /**
     * Invalid SSL certificate.
     */
    SSL,
}
const ERROR_NUM_ENTRIES: number
/**
 * The major version number of the GOA daemon and library.
 * 
 * Like #goa_major_version, but from the headers used at
 * application compile time, rather than from the library
 * linked against at application run time.
 */
const MAJOR_VERSION: number
/**
 * The micro version number of the GOA daemon and library.
 * 
 * Like #goa_micro_version, but from the headers used at
 * application compile time, rather than from the library
 * linked against at application run time.
 */
const MICRO_VERSION: number
/**
 * The minor version number of the GOA daemon and library.
 * 
 * Like #goa_minor_version, but from the headers used at
 * application compile time, rather than from the library
 * linked against at application run time.
 */
const MINOR_VERSION: number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Account.top_of_page">org.gnome.OnlineAccounts.Account</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function account_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaAccount interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function account_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Calendar.top_of_page">org.gnome.OnlineAccounts.Calendar</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function calendar_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaCalendar interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function calendar_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Chat.top_of_page">org.gnome.OnlineAccounts.Chat</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function chat_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaChat interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function chat_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
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
function check_version(required_major: number, required_minor: number, required_micro: number): string | null
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Contacts.top_of_page">org.gnome.OnlineAccounts.Contacts</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function contacts_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaContacts interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function contacts_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Documents.top_of_page">org.gnome.OnlineAccounts.Documents</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function documents_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaDocuments interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function documents_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
function error_quark(): GLib.Quark
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Exchange.top_of_page">org.gnome.OnlineAccounts.Exchange</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function exchange_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaExchange interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function exchange_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Files.top_of_page">org.gnome.OnlineAccounts.Files</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function files_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaFiles interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function files_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Mail.top_of_page">org.gnome.OnlineAccounts.Mail</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function mail_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaMail interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function mail_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Manager.top_of_page">org.gnome.OnlineAccounts.Manager</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function manager_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaManager interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function manager_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Maps.top_of_page">org.gnome.OnlineAccounts.Maps</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function maps_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaMaps interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function maps_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page">org.gnome.OnlineAccounts.MediaServer</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function media_server_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaMediaServer interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function media_server_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Music.top_of_page">org.gnome.OnlineAccounts.Music</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function music_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaMusic interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function music_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page">org.gnome.OnlineAccounts.OAuth2Based</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function oauth2_based_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaOAuth2Based interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function oauth2_based_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page">org.gnome.OnlineAccounts.OAuthBased</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function oauth_based_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaOAuthBased interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function oauth_based_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page">org.gnome.OnlineAccounts.PasswordBased</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function password_based_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaPasswordBased interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function password_based_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Photos.top_of_page">org.gnome.OnlineAccounts.Photos</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function photos_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaPhotos interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function photos_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Printers.top_of_page">org.gnome.OnlineAccounts.Printers</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function printers_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaPrinters interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function printers_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page">org.gnome.OnlineAccounts.ReadLater</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function read_later_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaReadLater interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function read_later_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Ticketing.top_of_page">org.gnome.OnlineAccounts.Ticketing</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function ticketing_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaTicketing interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function ticketing_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Todo.top_of_page">org.gnome.OnlineAccounts.Todo</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function todo_interface_info(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaTodo interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param property_id_begin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function todo_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
module Account {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-ensure-credentials`
     */
    interface HandleEnsureCredentialsSignalCallback {
        ($obj: Account, invocation: Gio.DBusMethodInvocation): boolean
    }

    /**
     * Signal callback interface for `handle-remove`
     */
    interface HandleRemoveSignalCallback {
        ($obj: Account, invocation: Gio.DBusMethodInvocation): boolean
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Goa-1.0.Goa.Account

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.AttentionNeeded">"AttentionNeeded"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        attention_needed?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.CalendarDisabled">"CalendarDisabled"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        calendar_disabled?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ChatDisabled">"ChatDisabled"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        chat_disabled?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ContactsDisabled">"ContactsDisabled"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        contacts_disabled?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.DocumentsDisabled">"DocumentsDisabled"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        documents_disabled?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.FilesDisabled">"FilesDisabled"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        files_disabled?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.Id">"Id"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        id?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.Identity">"Identity"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        identity?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.IsLocked">"IsLocked"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        is_locked?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.IsTemporary">"IsTemporary"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        is_temporary?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.MailDisabled">"MailDisabled"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        mail_disabled?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.MapsDisabled">"MapsDisabled"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        maps_disabled?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.MusicDisabled">"MusicDisabled"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        music_disabled?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.PhotosDisabled">"PhotosDisabled"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        photos_disabled?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.PresentationIdentity">"PresentationIdentity"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        presentation_identity?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.PrintersDisabled">"PrintersDisabled"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        printers_disabled?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ProviderIcon">"ProviderIcon"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        provider_icon?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ProviderName">"ProviderName"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        provider_name?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ProviderType">"ProviderType"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        provider_type?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ReadLaterDisabled">"ReadLaterDisabled"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        read_later_disabled?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.TicketingDisabled">"TicketingDisabled"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        ticketing_disabled?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.TodoDisabled">"TodoDisabled"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        todo_disabled?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.AttentionNeeded">"AttentionNeeded"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        attentionNeeded?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.CalendarDisabled">"CalendarDisabled"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        calendarDisabled?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ChatDisabled">"ChatDisabled"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        chatDisabled?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ContactsDisabled">"ContactsDisabled"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        contactsDisabled?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.DocumentsDisabled">"DocumentsDisabled"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        documentsDisabled?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.FilesDisabled">"FilesDisabled"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        filesDisabled?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.IsLocked">"IsLocked"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        isLocked?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.IsTemporary">"IsTemporary"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        isTemporary?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.MailDisabled">"MailDisabled"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        mailDisabled?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.MapsDisabled">"MapsDisabled"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        mapsDisabled?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.MusicDisabled">"MusicDisabled"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        musicDisabled?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.PhotosDisabled">"PhotosDisabled"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        photosDisabled?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.PresentationIdentity">"PresentationIdentity"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        presentationIdentity?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.PrintersDisabled">"PrintersDisabled"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        printersDisabled?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ProviderIcon">"ProviderIcon"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        providerIcon?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ProviderName">"ProviderName"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        providerName?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ProviderType">"ProviderType"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        providerType?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ReadLaterDisabled">"ReadLaterDisabled"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        readLaterDisabled?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.TicketingDisabled">"TicketingDisabled"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        ticketingDisabled?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.TodoDisabled">"TodoDisabled"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        todoDisabled?: boolean | null
    }

}

interface Account {

    // Own properties of Goa-1.0.Goa.Account

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.AttentionNeeded">"AttentionNeeded"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    attention_needed: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.AttentionNeeded">"AttentionNeeded"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    attentionNeeded: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.CalendarDisabled">"CalendarDisabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    calendar_disabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.CalendarDisabled">"CalendarDisabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    calendarDisabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ChatDisabled">"ChatDisabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    chat_disabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ChatDisabled">"ChatDisabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    chatDisabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ContactsDisabled">"ContactsDisabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    contacts_disabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ContactsDisabled">"ContactsDisabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    contactsDisabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.DocumentsDisabled">"DocumentsDisabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    documents_disabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.DocumentsDisabled">"DocumentsDisabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    documentsDisabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.FilesDisabled">"FilesDisabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    files_disabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.FilesDisabled">"FilesDisabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    filesDisabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.Id">"Id"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    id: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.Identity">"Identity"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    identity: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.IsLocked">"IsLocked"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    is_locked: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.IsLocked">"IsLocked"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    isLocked: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.IsTemporary">"IsTemporary"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    is_temporary: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.IsTemporary">"IsTemporary"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    isTemporary: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.MailDisabled">"MailDisabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    mail_disabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.MailDisabled">"MailDisabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    mailDisabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.MapsDisabled">"MapsDisabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    maps_disabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.MapsDisabled">"MapsDisabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    mapsDisabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.MusicDisabled">"MusicDisabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    music_disabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.MusicDisabled">"MusicDisabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    musicDisabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.PhotosDisabled">"PhotosDisabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    photos_disabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.PhotosDisabled">"PhotosDisabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    photosDisabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.PresentationIdentity">"PresentationIdentity"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    presentation_identity: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.PresentationIdentity">"PresentationIdentity"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    presentationIdentity: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.PrintersDisabled">"PrintersDisabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    printers_disabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.PrintersDisabled">"PrintersDisabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    printersDisabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ProviderIcon">"ProviderIcon"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    provider_icon: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ProviderIcon">"ProviderIcon"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    providerIcon: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ProviderName">"ProviderName"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    provider_name: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ProviderName">"ProviderName"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    providerName: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ProviderType">"ProviderType"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    provider_type: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ProviderType">"ProviderType"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    providerType: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ReadLaterDisabled">"ReadLaterDisabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    read_later_disabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ReadLaterDisabled">"ReadLaterDisabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    readLaterDisabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.TicketingDisabled">"TicketingDisabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    ticketing_disabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.TicketingDisabled">"TicketingDisabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    ticketingDisabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.TodoDisabled">"TodoDisabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    todo_disabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.TodoDisabled">"TodoDisabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    todoDisabled: boolean

    // Owm methods of Goa-1.0.Goa.Account

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Account.EnsureCredentials">EnsureCredentials()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_account_call_ensure_credentials_finish() to get the result of the operation.
     * 
     * See goa_account_call_ensure_credentials_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_ensure_credentials(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with goa_account_call_ensure_credentials().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_account_call_ensure_credentials().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_ensure_credentials_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_expires_in */ number ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Account.EnsureCredentials">EnsureCredentials()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See goa_account_call_ensure_credentials() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_ensure_credentials_sync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_expires_in */ number ]
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Account.Remove">Remove()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_account_call_remove_finish() to get the result of the operation.
     * 
     * See goa_account_call_remove_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_remove(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with goa_account_call_remove().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_account_call_remove().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_remove_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Account.Remove">Remove()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See goa_account_call_remove() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_remove_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Account.EnsureCredentials">EnsureCredentials()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param expires_in Parameter to return.
     */
    complete_ensure_credentials(invocation: Gio.DBusMethodInvocation, expires_in: number): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Account.Remove">Remove()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_remove(invocation: Gio.DBusMethodInvocation): void

    // Own virtual methods of Goa-1.0.Goa.Account

    vfunc_handle_ensure_credentials(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_remove(invocation: Gio.DBusMethodInvocation): boolean

    // Own signals of Goa-1.0.Goa.Account

    connect(sigName: "handle-ensure-credentials", callback: Account.HandleEnsureCredentialsSignalCallback): number
    connect_after(sigName: "handle-ensure-credentials", callback: Account.HandleEnsureCredentialsSignalCallback): number
    emit(sigName: "handle-ensure-credentials", invocation: Gio.DBusMethodInvocation, ...args: any[]): void
    connect(sigName: "handle-remove", callback: Account.HandleRemoveSignalCallback): number
    connect_after(sigName: "handle-remove", callback: Account.HandleRemoveSignalCallback): number
    emit(sigName: "handle-remove", invocation: Gio.DBusMethodInvocation, ...args: any[]): void

    // Class property signals of Goa-1.0.Goa.Account

    connect(sigName: "notify::attention-needed", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attention-needed", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attention-needed", ...args: any[]): void
    connect(sigName: "notify::calendar-disabled", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calendar-disabled", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::calendar-disabled", ...args: any[]): void
    connect(sigName: "notify::chat-disabled", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chat-disabled", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::chat-disabled", ...args: any[]): void
    connect(sigName: "notify::contacts-disabled", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contacts-disabled", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::contacts-disabled", ...args: any[]): void
    connect(sigName: "notify::documents-disabled", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::documents-disabled", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::documents-disabled", ...args: any[]): void
    connect(sigName: "notify::files-disabled", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::files-disabled", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::files-disabled", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::identity", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::identity", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::identity", ...args: any[]): void
    connect(sigName: "notify::is-locked", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-locked", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-locked", ...args: any[]): void
    connect(sigName: "notify::is-temporary", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-temporary", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-temporary", ...args: any[]): void
    connect(sigName: "notify::mail-disabled", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mail-disabled", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mail-disabled", ...args: any[]): void
    connect(sigName: "notify::maps-disabled", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maps-disabled", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::maps-disabled", ...args: any[]): void
    connect(sigName: "notify::music-disabled", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::music-disabled", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::music-disabled", ...args: any[]): void
    connect(sigName: "notify::photos-disabled", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::photos-disabled", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::photos-disabled", ...args: any[]): void
    connect(sigName: "notify::presentation-identity", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presentation-identity", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::presentation-identity", ...args: any[]): void
    connect(sigName: "notify::printers-disabled", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::printers-disabled", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::printers-disabled", ...args: any[]): void
    connect(sigName: "notify::provider-icon", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider-icon", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::provider-icon", ...args: any[]): void
    connect(sigName: "notify::provider-name", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider-name", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::provider-name", ...args: any[]): void
    connect(sigName: "notify::provider-type", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider-type", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::provider-type", ...args: any[]): void
    connect(sigName: "notify::read-later-disabled", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-later-disabled", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-later-disabled", ...args: any[]): void
    connect(sigName: "notify::ticketing-disabled", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ticketing-disabled", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ticketing-disabled", ...args: any[]): void
    connect(sigName: "notify::todo-disabled", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::todo-disabled", callback: (($obj: Account, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::todo-disabled", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Account.top_of_page">org.gnome.OnlineAccounts.Account</link>.
 * @interface 
 */
class Account extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Account

    static name: string
    static $gtype: GObject.GType<Account>

    // Constructors of Goa-1.0.Goa.Account

    constructor(config?: Account.ConstructorProperties) 
    _init(config?: Account.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Account.top_of_page">org.gnome.OnlineAccounts.Account</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaAccount interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module Calendar {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Goa-1.0.Goa.Calendar

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Calendar.AcceptSslErrors">"AcceptSslErrors"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        accept_ssl_errors?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Calendar.Uri">"Uri"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        uri?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Calendar.AcceptSslErrors">"AcceptSslErrors"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        acceptSslErrors?: boolean | null
    }

}

interface Calendar {

    // Own properties of Goa-1.0.Goa.Calendar

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Calendar.AcceptSslErrors">"AcceptSslErrors"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    accept_ssl_errors: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Calendar.AcceptSslErrors">"AcceptSslErrors"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    acceptSslErrors: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Calendar.Uri">"Uri"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    uri: string | null

    // Class property signals of Goa-1.0.Goa.Calendar

    connect(sigName: "notify::accept-ssl-errors", callback: (($obj: Calendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-ssl-errors", callback: (($obj: Calendar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (($obj: Calendar, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: Calendar, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Calendar.top_of_page">org.gnome.OnlineAccounts.Calendar</link>.
 * @interface 
 */
class Calendar extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Calendar

    static name: string
    static $gtype: GObject.GType<Calendar>

    // Constructors of Goa-1.0.Goa.Calendar

    constructor(config?: Calendar.ConstructorProperties) 
    _init(config?: Calendar.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Calendar.top_of_page">org.gnome.OnlineAccounts.Calendar</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaCalendar interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module Chat {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Chat {

    // Class property signals of Goa-1.0.Goa.Chat

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Chat.top_of_page">org.gnome.OnlineAccounts.Chat</link>.
 * @interface 
 */
class Chat extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Chat

    static name: string
    static $gtype: GObject.GType<Chat>

    // Constructors of Goa-1.0.Goa.Chat

    constructor(config?: Chat.ConstructorProperties) 
    _init(config?: Chat.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Chat.top_of_page">org.gnome.OnlineAccounts.Chat</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaChat interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module Contacts {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Goa-1.0.Goa.Contacts

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Contacts.AcceptSslErrors">"AcceptSslErrors"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        accept_ssl_errors?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Contacts.Uri">"Uri"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        uri?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Contacts.AcceptSslErrors">"AcceptSslErrors"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        acceptSslErrors?: boolean | null
    }

}

interface Contacts {

    // Own properties of Goa-1.0.Goa.Contacts

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Contacts.AcceptSslErrors">"AcceptSslErrors"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    accept_ssl_errors: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Contacts.AcceptSslErrors">"AcceptSslErrors"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    acceptSslErrors: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Contacts.Uri">"Uri"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    uri: string | null

    // Class property signals of Goa-1.0.Goa.Contacts

    connect(sigName: "notify::accept-ssl-errors", callback: (($obj: Contacts, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-ssl-errors", callback: (($obj: Contacts, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (($obj: Contacts, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: Contacts, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Contacts.top_of_page">org.gnome.OnlineAccounts.Contacts</link>.
 * @interface 
 */
class Contacts extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Contacts

    static name: string
    static $gtype: GObject.GType<Contacts>

    // Constructors of Goa-1.0.Goa.Contacts

    constructor(config?: Contacts.ConstructorProperties) 
    _init(config?: Contacts.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Contacts.top_of_page">org.gnome.OnlineAccounts.Contacts</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaContacts interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module Documents {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Documents {

    // Class property signals of Goa-1.0.Goa.Documents

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Documents.top_of_page">org.gnome.OnlineAccounts.Documents</link>.
 * @interface 
 */
class Documents extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Documents

    static name: string
    static $gtype: GObject.GType<Documents>

    // Constructors of Goa-1.0.Goa.Documents

    constructor(config?: Documents.ConstructorProperties) 
    _init(config?: Documents.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Documents.top_of_page">org.gnome.OnlineAccounts.Documents</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaDocuments interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module Exchange {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Goa-1.0.Goa.Exchange

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Exchange.AcceptSslErrors">"AcceptSslErrors"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        accept_ssl_errors?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Exchange.Host">"Host"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        host?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Exchange.AcceptSslErrors">"AcceptSslErrors"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        acceptSslErrors?: boolean | null
    }

}

interface Exchange {

    // Own properties of Goa-1.0.Goa.Exchange

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Exchange.AcceptSslErrors">"AcceptSslErrors"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    accept_ssl_errors: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Exchange.AcceptSslErrors">"AcceptSslErrors"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    acceptSslErrors: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Exchange.Host">"Host"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    host: string | null

    // Class property signals of Goa-1.0.Goa.Exchange

    connect(sigName: "notify::accept-ssl-errors", callback: (($obj: Exchange, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-ssl-errors", callback: (($obj: Exchange, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::host", callback: (($obj: Exchange, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host", callback: (($obj: Exchange, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::host", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Exchange.top_of_page">org.gnome.OnlineAccounts.Exchange</link>.
 * @interface 
 */
class Exchange extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Exchange

    static name: string
    static $gtype: GObject.GType<Exchange>

    // Constructors of Goa-1.0.Goa.Exchange

    constructor(config?: Exchange.ConstructorProperties) 
    _init(config?: Exchange.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Exchange.top_of_page">org.gnome.OnlineAccounts.Exchange</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaExchange interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module Files {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Goa-1.0.Goa.Files

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Files.AcceptSslErrors">"AcceptSslErrors"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        accept_ssl_errors?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Files.Uri">"Uri"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        uri?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Files.AcceptSslErrors">"AcceptSslErrors"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        acceptSslErrors?: boolean | null
    }

}

interface Files {

    // Own properties of Goa-1.0.Goa.Files

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Files.AcceptSslErrors">"AcceptSslErrors"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    accept_ssl_errors: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Files.AcceptSslErrors">"AcceptSslErrors"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    acceptSslErrors: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Files.Uri">"Uri"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    uri: string | null

    // Class property signals of Goa-1.0.Goa.Files

    connect(sigName: "notify::accept-ssl-errors", callback: (($obj: Files, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-ssl-errors", callback: (($obj: Files, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (($obj: Files, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: Files, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Files.top_of_page">org.gnome.OnlineAccounts.Files</link>.
 * @interface 
 */
class Files extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Files

    static name: string
    static $gtype: GObject.GType<Files>

    // Constructors of Goa-1.0.Goa.Files

    constructor(config?: Files.ConstructorProperties) 
    _init(config?: Files.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Files.top_of_page">org.gnome.OnlineAccounts.Files</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaFiles interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module Mail {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Goa-1.0.Goa.Mail

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.EmailAddress">"EmailAddress"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        email_address?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapAcceptSslErrors">"ImapAcceptSslErrors"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        imap_accept_ssl_errors?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapHost">"ImapHost"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        imap_host?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapSupported">"ImapSupported"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        imap_supported?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapUseSsl">"ImapUseSsl"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        imap_use_ssl?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapUseTls">"ImapUseTls"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        imap_use_tls?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapUserName">"ImapUserName"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        imap_user_name?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.Name">"Name"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        name?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpAcceptSslErrors">"SmtpAcceptSslErrors"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtp_accept_ssl_errors?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpAuthLogin">"SmtpAuthLogin"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtp_auth_login?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpAuthPlain">"SmtpAuthPlain"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtp_auth_plain?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpAuthXoauth2">"SmtpAuthXoauth2"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtp_auth_xoauth2?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpHost">"SmtpHost"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtp_host?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpSupported">"SmtpSupported"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtp_supported?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpUseAuth">"SmtpUseAuth"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtp_use_auth?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpUseSsl">"SmtpUseSsl"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtp_use_ssl?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpUseTls">"SmtpUseTls"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtp_use_tls?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpUserName">"SmtpUserName"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtp_user_name?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.EmailAddress">"EmailAddress"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        emailAddress?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapAcceptSslErrors">"ImapAcceptSslErrors"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        imapAcceptSslErrors?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapHost">"ImapHost"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        imapHost?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapSupported">"ImapSupported"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        imapSupported?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapUseSsl">"ImapUseSsl"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        imapUseSsl?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapUseTls">"ImapUseTls"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        imapUseTls?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapUserName">"ImapUserName"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        imapUserName?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpAcceptSslErrors">"SmtpAcceptSslErrors"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtpAcceptSslErrors?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpAuthLogin">"SmtpAuthLogin"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtpAuthLogin?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpAuthPlain">"SmtpAuthPlain"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtpAuthPlain?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpAuthXoauth2">"SmtpAuthXoauth2"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtpAuthXoauth2?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpHost">"SmtpHost"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtpHost?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpSupported">"SmtpSupported"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtpSupported?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpUseAuth">"SmtpUseAuth"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtpUseAuth?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpUseSsl">"SmtpUseSsl"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtpUseSsl?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpUseTls">"SmtpUseTls"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtpUseTls?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpUserName">"SmtpUserName"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtpUserName?: string | null
    }

}

interface Mail {

    // Own properties of Goa-1.0.Goa.Mail

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.EmailAddress">"EmailAddress"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    email_address: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.EmailAddress">"EmailAddress"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    emailAddress: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapAcceptSslErrors">"ImapAcceptSslErrors"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    imap_accept_ssl_errors: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapAcceptSslErrors">"ImapAcceptSslErrors"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    imapAcceptSslErrors: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapHost">"ImapHost"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    imap_host: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapHost">"ImapHost"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    imapHost: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapSupported">"ImapSupported"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    imap_supported: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapSupported">"ImapSupported"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    imapSupported: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapUseSsl">"ImapUseSsl"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    imap_use_ssl: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapUseSsl">"ImapUseSsl"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    imapUseSsl: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapUseTls">"ImapUseTls"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    imap_use_tls: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapUseTls">"ImapUseTls"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    imapUseTls: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapUserName">"ImapUserName"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    imap_user_name: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapUserName">"ImapUserName"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    imapUserName: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.Name">"Name"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    name: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpAcceptSslErrors">"SmtpAcceptSslErrors"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smtp_accept_ssl_errors: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpAcceptSslErrors">"SmtpAcceptSslErrors"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smtpAcceptSslErrors: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpAuthLogin">"SmtpAuthLogin"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smtp_auth_login: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpAuthLogin">"SmtpAuthLogin"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smtpAuthLogin: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpAuthPlain">"SmtpAuthPlain"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smtp_auth_plain: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpAuthPlain">"SmtpAuthPlain"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smtpAuthPlain: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpAuthXoauth2">"SmtpAuthXoauth2"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smtp_auth_xoauth2: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpAuthXoauth2">"SmtpAuthXoauth2"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smtpAuthXoauth2: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpHost">"SmtpHost"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smtp_host: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpHost">"SmtpHost"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smtpHost: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpSupported">"SmtpSupported"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smtp_supported: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpSupported">"SmtpSupported"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smtpSupported: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpUseAuth">"SmtpUseAuth"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smtp_use_auth: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpUseAuth">"SmtpUseAuth"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smtpUseAuth: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpUseSsl">"SmtpUseSsl"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smtp_use_ssl: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpUseSsl">"SmtpUseSsl"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smtpUseSsl: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpUseTls">"SmtpUseTls"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smtp_use_tls: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpUseTls">"SmtpUseTls"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smtpUseTls: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpUserName">"SmtpUserName"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smtp_user_name: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpUserName">"SmtpUserName"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smtpUserName: string | null

    // Class property signals of Goa-1.0.Goa.Mail

    connect(sigName: "notify::email-address", callback: (($obj: Mail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-address", callback: (($obj: Mail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::email-address", ...args: any[]): void
    connect(sigName: "notify::imap-accept-ssl-errors", callback: (($obj: Mail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-accept-ssl-errors", callback: (($obj: Mail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::imap-accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::imap-host", callback: (($obj: Mail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-host", callback: (($obj: Mail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::imap-host", ...args: any[]): void
    connect(sigName: "notify::imap-supported", callback: (($obj: Mail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-supported", callback: (($obj: Mail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::imap-supported", ...args: any[]): void
    connect(sigName: "notify::imap-use-ssl", callback: (($obj: Mail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-use-ssl", callback: (($obj: Mail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::imap-use-ssl", ...args: any[]): void
    connect(sigName: "notify::imap-use-tls", callback: (($obj: Mail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-use-tls", callback: (($obj: Mail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::imap-use-tls", ...args: any[]): void
    connect(sigName: "notify::imap-user-name", callback: (($obj: Mail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-user-name", callback: (($obj: Mail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::imap-user-name", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Mail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Mail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::smtp-accept-ssl-errors", callback: (($obj: Mail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-accept-ssl-errors", callback: (($obj: Mail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smtp-accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::smtp-auth-login", callback: (($obj: Mail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-auth-login", callback: (($obj: Mail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smtp-auth-login", ...args: any[]): void
    connect(sigName: "notify::smtp-auth-plain", callback: (($obj: Mail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-auth-plain", callback: (($obj: Mail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smtp-auth-plain", ...args: any[]): void
    connect(sigName: "notify::smtp-auth-xoauth2", callback: (($obj: Mail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-auth-xoauth2", callback: (($obj: Mail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smtp-auth-xoauth2", ...args: any[]): void
    connect(sigName: "notify::smtp-host", callback: (($obj: Mail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-host", callback: (($obj: Mail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smtp-host", ...args: any[]): void
    connect(sigName: "notify::smtp-supported", callback: (($obj: Mail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-supported", callback: (($obj: Mail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smtp-supported", ...args: any[]): void
    connect(sigName: "notify::smtp-use-auth", callback: (($obj: Mail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-use-auth", callback: (($obj: Mail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smtp-use-auth", ...args: any[]): void
    connect(sigName: "notify::smtp-use-ssl", callback: (($obj: Mail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-use-ssl", callback: (($obj: Mail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smtp-use-ssl", ...args: any[]): void
    connect(sigName: "notify::smtp-use-tls", callback: (($obj: Mail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-use-tls", callback: (($obj: Mail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smtp-use-tls", ...args: any[]): void
    connect(sigName: "notify::smtp-user-name", callback: (($obj: Mail, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-user-name", callback: (($obj: Mail, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smtp-user-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Mail.top_of_page">org.gnome.OnlineAccounts.Mail</link>.
 * @interface 
 */
class Mail extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Mail

    static name: string
    static $gtype: GObject.GType<Mail>

    // Constructors of Goa-1.0.Goa.Mail

    constructor(config?: Mail.ConstructorProperties) 
    _init(config?: Mail.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Mail.top_of_page">org.gnome.OnlineAccounts.Mail</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaMail interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module Manager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-add-account`
     */
    interface HandleAddAccountSignalCallback {
        ($obj: Manager, invocation: Gio.DBusMethodInvocation, arg_provider: string | null, arg_identity: string | null, arg_presentation_identity: string | null, arg_credentials: GLib.Variant, arg_details: GLib.Variant): boolean
    }

    /**
     * Signal callback interface for `handle-is-supported-provider`
     */
    interface HandleIsSupportedProviderSignalCallback {
        ($obj: Manager, invocation: Gio.DBusMethodInvocation, arg_provider_type: string | null): boolean
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Manager {

    // Owm methods of Goa-1.0.Goa.Manager

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Manager.AddAccount">AddAccount()</link> D-Bus method on `proxy`.
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
    call_add_account(arg_provider: string | null, arg_identity: string | null, arg_presentation_identity: string | null, arg_credentials: GLib.Variant, arg_details: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with goa_manager_call_add_account().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_manager_call_add_account().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_add_account_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_account_object_path */ string | null ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Manager.AddAccount">AddAccount()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
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
    call_add_account_sync(arg_provider: string | null, arg_identity: string | null, arg_presentation_identity: string | null, arg_credentials: GLib.Variant, arg_details: GLib.Variant, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_account_object_path */ string | null ]
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Manager.IsSupportedProvider">IsSupportedProvider()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_manager_call_is_supported_provider_finish() to get the result of the operation.
     * 
     * See goa_manager_call_is_supported_provider_sync() for the synchronous, blocking version of this method.
     * @param arg_provider_type Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_is_supported_provider(arg_provider_type: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with goa_manager_call_is_supported_provider().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_manager_call_is_supported_provider().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_is_supported_provider_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_is_supported */ boolean ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Manager.IsSupportedProvider">IsSupportedProvider()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See goa_manager_call_is_supported_provider() for the asynchronous version of this method.
     * @param arg_provider_type Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_is_supported_provider_sync(arg_provider_type: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_is_supported */ boolean ]
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Manager.AddAccount">AddAccount()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param account_object_path Parameter to return.
     */
    complete_add_account(invocation: Gio.DBusMethodInvocation, account_object_path: string | null): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Manager.IsSupportedProvider">IsSupportedProvider()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param is_supported Parameter to return.
     */
    complete_is_supported_provider(invocation: Gio.DBusMethodInvocation, is_supported: boolean): void

    // Own virtual methods of Goa-1.0.Goa.Manager

    vfunc_handle_add_account(invocation: Gio.DBusMethodInvocation, arg_provider: string | null, arg_identity: string | null, arg_presentation_identity: string | null, arg_credentials: GLib.Variant, arg_details: GLib.Variant): boolean
    vfunc_handle_is_supported_provider(invocation: Gio.DBusMethodInvocation, arg_provider_type: string | null): boolean

    // Own signals of Goa-1.0.Goa.Manager

    connect(sigName: "handle-add-account", callback: Manager.HandleAddAccountSignalCallback): number
    connect_after(sigName: "handle-add-account", callback: Manager.HandleAddAccountSignalCallback): number
    emit(sigName: "handle-add-account", invocation: Gio.DBusMethodInvocation, arg_provider: string | null, arg_identity: string | null, arg_presentation_identity: string | null, arg_credentials: GLib.Variant, arg_details: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-is-supported-provider", callback: Manager.HandleIsSupportedProviderSignalCallback): number
    connect_after(sigName: "handle-is-supported-provider", callback: Manager.HandleIsSupportedProviderSignalCallback): number
    emit(sigName: "handle-is-supported-provider", invocation: Gio.DBusMethodInvocation, arg_provider_type: string | null, ...args: any[]): void

    // Class property signals of Goa-1.0.Goa.Manager

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Manager.top_of_page">org.gnome.OnlineAccounts.Manager</link>.
 * @interface 
 */
class Manager extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Manager

    static name: string
    static $gtype: GObject.GType<Manager>

    // Constructors of Goa-1.0.Goa.Manager

    constructor(config?: Manager.ConstructorProperties) 
    _init(config?: Manager.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Manager.top_of_page">org.gnome.OnlineAccounts.Manager</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaManager interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module Maps {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Maps {

    // Class property signals of Goa-1.0.Goa.Maps

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Maps.top_of_page">org.gnome.OnlineAccounts.Maps</link>.
 * @interface 
 */
class Maps extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Maps

    static name: string
    static $gtype: GObject.GType<Maps>

    // Constructors of Goa-1.0.Goa.Maps

    constructor(config?: Maps.ConstructorProperties) 
    _init(config?: Maps.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Maps.top_of_page">org.gnome.OnlineAccounts.Maps</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaMaps interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module MediaServer {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Goa-1.0.Goa.MediaServer

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-MediaServer.DlnaSupported">"DlnaSupported"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        dlna_supported?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-MediaServer.Udn">"Udn"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        udn?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-MediaServer.DlnaSupported">"DlnaSupported"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        dlnaSupported?: boolean | null
    }

}

interface MediaServer {

    // Own properties of Goa-1.0.Goa.MediaServer

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-MediaServer.DlnaSupported">"DlnaSupported"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    dlna_supported: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-MediaServer.DlnaSupported">"DlnaSupported"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    dlnaSupported: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-MediaServer.Udn">"Udn"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    udn: string | null

    // Class property signals of Goa-1.0.Goa.MediaServer

    connect(sigName: "notify::dlna-supported", callback: (($obj: MediaServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-supported", callback: (($obj: MediaServer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dlna-supported", ...args: any[]): void
    connect(sigName: "notify::udn", callback: (($obj: MediaServer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udn", callback: (($obj: MediaServer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::udn", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page">org.gnome.OnlineAccounts.MediaServer</link>.
 * @interface 
 */
class MediaServer extends GObject.Object {

    // Own properties of Goa-1.0.Goa.MediaServer

    static name: string
    static $gtype: GObject.GType<MediaServer>

    // Constructors of Goa-1.0.Goa.MediaServer

    constructor(config?: MediaServer.ConstructorProperties) 
    _init(config?: MediaServer.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page">org.gnome.OnlineAccounts.MediaServer</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaMediaServer interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module Music {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Music {

    // Class property signals of Goa-1.0.Goa.Music

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Music.top_of_page">org.gnome.OnlineAccounts.Music</link>.
 * @interface 
 */
class Music extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Music

    static name: string
    static $gtype: GObject.GType<Music>

    // Constructors of Goa-1.0.Goa.Music

    constructor(config?: Music.ConstructorProperties) 
    _init(config?: Music.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Music.top_of_page">org.gnome.OnlineAccounts.Music</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaMusic interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module OAuth2Based {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-get-access-token`
     */
    interface HandleGetAccessTokenSignalCallback {
        ($obj: OAuth2Based, invocation: Gio.DBusMethodInvocation): boolean
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Goa-1.0.Goa.OAuth2Based

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-OAuth2Based.ClientId">"ClientId"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        client_id?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-OAuth2Based.ClientSecret">"ClientSecret"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        client_secret?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-OAuth2Based.ClientId">"ClientId"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        clientId?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-OAuth2Based.ClientSecret">"ClientSecret"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        clientSecret?: string | null
    }

}

interface OAuth2Based {

    // Own properties of Goa-1.0.Goa.OAuth2Based

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-OAuth2Based.ClientId">"ClientId"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    client_id: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-OAuth2Based.ClientId">"ClientId"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    clientId: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-OAuth2Based.ClientSecret">"ClientSecret"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    client_secret: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-OAuth2Based.ClientSecret">"ClientSecret"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    clientSecret: string | null

    // Owm methods of Goa-1.0.Goa.OAuth2Based

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-OAuth2Based.GetAccessToken">GetAccessToken()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_oauth2_based_call_get_access_token_finish() to get the result of the operation.
     * 
     * See goa_oauth2_based_call_get_access_token_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_get_access_token(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with goa_oauth2_based_call_get_access_token().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_oauth2_based_call_get_access_token().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_get_access_token_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_expires_in */ number ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-OAuth2Based.GetAccessToken">GetAccessToken()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See goa_oauth2_based_call_get_access_token() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_get_access_token_sync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_expires_in */ number ]
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-OnlineAccounts-OAuth2Based.GetAccessToken">GetAccessToken()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param access_token Parameter to return.
     * @param expires_in Parameter to return.
     */
    complete_get_access_token(invocation: Gio.DBusMethodInvocation, access_token: string | null, expires_in: number): void

    // Own virtual methods of Goa-1.0.Goa.OAuth2Based

    vfunc_handle_get_access_token(invocation: Gio.DBusMethodInvocation): boolean

    // Own signals of Goa-1.0.Goa.OAuth2Based

    connect(sigName: "handle-get-access-token", callback: OAuth2Based.HandleGetAccessTokenSignalCallback): number
    connect_after(sigName: "handle-get-access-token", callback: OAuth2Based.HandleGetAccessTokenSignalCallback): number
    emit(sigName: "handle-get-access-token", invocation: Gio.DBusMethodInvocation, ...args: any[]): void

    // Class property signals of Goa-1.0.Goa.OAuth2Based

    connect(sigName: "notify::client-id", callback: (($obj: OAuth2Based, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-id", callback: (($obj: OAuth2Based, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::client-id", ...args: any[]): void
    connect(sigName: "notify::client-secret", callback: (($obj: OAuth2Based, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-secret", callback: (($obj: OAuth2Based, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::client-secret", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page">org.gnome.OnlineAccounts.OAuth2Based</link>.
 * @interface 
 */
class OAuth2Based extends GObject.Object {

    // Own properties of Goa-1.0.Goa.OAuth2Based

    static name: string
    static $gtype: GObject.GType<OAuth2Based>

    // Constructors of Goa-1.0.Goa.OAuth2Based

    constructor(config?: OAuth2Based.ConstructorProperties) 
    _init(config?: OAuth2Based.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page">org.gnome.OnlineAccounts.OAuth2Based</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaOAuth2Based interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module OAuthBased {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-get-access-token`
     */
    interface HandleGetAccessTokenSignalCallback {
        ($obj: OAuthBased, invocation: Gio.DBusMethodInvocation): boolean
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Goa-1.0.Goa.OAuthBased

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-OAuthBased.ConsumerKey">"ConsumerKey"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        consumer_key?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-OAuthBased.ConsumerSecret">"ConsumerSecret"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        consumer_secret?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-OAuthBased.ConsumerKey">"ConsumerKey"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        consumerKey?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-OAuthBased.ConsumerSecret">"ConsumerSecret"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        consumerSecret?: string | null
    }

}

interface OAuthBased {

    // Own properties of Goa-1.0.Goa.OAuthBased

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-OAuthBased.ConsumerKey">"ConsumerKey"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    consumer_key: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-OAuthBased.ConsumerKey">"ConsumerKey"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    consumerKey: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-OAuthBased.ConsumerSecret">"ConsumerSecret"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    consumer_secret: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-OAuthBased.ConsumerSecret">"ConsumerSecret"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    consumerSecret: string | null

    // Owm methods of Goa-1.0.Goa.OAuthBased

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-OAuthBased.GetAccessToken">GetAccessToken()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_oauth_based_call_get_access_token_finish() to get the result of the operation.
     * 
     * See goa_oauth_based_call_get_access_token_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_get_access_token(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with goa_oauth_based_call_get_access_token().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_oauth_based_call_get_access_token().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_get_access_token_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_access_token_secret */ string | null, /* out_expires_in */ number ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-OAuthBased.GetAccessToken">GetAccessToken()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See goa_oauth_based_call_get_access_token() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_get_access_token_sync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_access_token */ string | null, /* out_access_token_secret */ string | null, /* out_expires_in */ number ]
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-OnlineAccounts-OAuthBased.GetAccessToken">GetAccessToken()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param access_token Parameter to return.
     * @param access_token_secret Parameter to return.
     * @param expires_in Parameter to return.
     */
    complete_get_access_token(invocation: Gio.DBusMethodInvocation, access_token: string | null, access_token_secret: string | null, expires_in: number): void

    // Own virtual methods of Goa-1.0.Goa.OAuthBased

    vfunc_handle_get_access_token(invocation: Gio.DBusMethodInvocation): boolean

    // Own signals of Goa-1.0.Goa.OAuthBased

    connect(sigName: "handle-get-access-token", callback: OAuthBased.HandleGetAccessTokenSignalCallback): number
    connect_after(sigName: "handle-get-access-token", callback: OAuthBased.HandleGetAccessTokenSignalCallback): number
    emit(sigName: "handle-get-access-token", invocation: Gio.DBusMethodInvocation, ...args: any[]): void

    // Class property signals of Goa-1.0.Goa.OAuthBased

    connect(sigName: "notify::consumer-key", callback: (($obj: OAuthBased, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::consumer-key", callback: (($obj: OAuthBased, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::consumer-key", ...args: any[]): void
    connect(sigName: "notify::consumer-secret", callback: (($obj: OAuthBased, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::consumer-secret", callback: (($obj: OAuthBased, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::consumer-secret", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page">org.gnome.OnlineAccounts.OAuthBased</link>.
 * @interface 
 */
class OAuthBased extends GObject.Object {

    // Own properties of Goa-1.0.Goa.OAuthBased

    static name: string
    static $gtype: GObject.GType<OAuthBased>

    // Constructors of Goa-1.0.Goa.OAuthBased

    constructor(config?: OAuthBased.ConstructorProperties) 
    _init(config?: OAuthBased.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page">org.gnome.OnlineAccounts.OAuthBased</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaOAuthBased interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module Object {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusObject.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Goa-1.0.Goa.Object

        /**
         * The #GoaAccount instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Account.top_of_page">org.gnome.OnlineAccounts.Account</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        account?: Account | null
        /**
         * The #GoaCalendar instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Calendar.top_of_page">org.gnome.OnlineAccounts.Calendar</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        calendar?: Calendar | null
        /**
         * The #GoaChat instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Chat.top_of_page">org.gnome.OnlineAccounts.Chat</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        chat?: Chat | null
        /**
         * The #GoaContacts instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Contacts.top_of_page">org.gnome.OnlineAccounts.Contacts</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        contacts?: Contacts | null
        /**
         * The #GoaDocuments instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Documents.top_of_page">org.gnome.OnlineAccounts.Documents</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        documents?: Documents | null
        /**
         * The #GoaExchange instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Exchange.top_of_page">org.gnome.OnlineAccounts.Exchange</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        exchange?: Exchange | null
        /**
         * The #GoaFiles instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Files.top_of_page">org.gnome.OnlineAccounts.Files</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        files?: Files | null
        /**
         * The #GoaMail instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Mail.top_of_page">org.gnome.OnlineAccounts.Mail</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        mail?: Mail | null
        /**
         * The #GoaManager instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Manager.top_of_page">org.gnome.OnlineAccounts.Manager</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        manager?: Manager | null
        /**
         * The #GoaMaps instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Maps.top_of_page">org.gnome.OnlineAccounts.Maps</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        maps?: Maps | null
        /**
         * The #GoaMediaServer instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page">org.gnome.OnlineAccounts.MediaServer</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        media_server?: MediaServer | null
        /**
         * The #GoaMusic instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Music.top_of_page">org.gnome.OnlineAccounts.Music</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        music?: Music | null
        /**
         * The #GoaOAuthBased instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page">org.gnome.OnlineAccounts.OAuthBased</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        oauth_based?: OAuthBased | null
        /**
         * The #GoaOAuth2Based instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page">org.gnome.OnlineAccounts.OAuth2Based</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        oauth2_based?: OAuth2Based | null
        /**
         * The #GoaPasswordBased instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page">org.gnome.OnlineAccounts.PasswordBased</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        password_based?: PasswordBased | null
        /**
         * The #GoaPhotos instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Photos.top_of_page">org.gnome.OnlineAccounts.Photos</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        photos?: Photos | null
        /**
         * The #GoaPrinters instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Printers.top_of_page">org.gnome.OnlineAccounts.Printers</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        printers?: Printers | null
        /**
         * The #GoaReadLater instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page">org.gnome.OnlineAccounts.ReadLater</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        read_later?: ReadLater | null
        /**
         * The #GoaTicketing instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Ticketing.top_of_page">org.gnome.OnlineAccounts.Ticketing</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        ticketing?: Ticketing | null
        /**
         * The #GoaTodo instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Todo.top_of_page">org.gnome.OnlineAccounts.Todo</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        todo?: Todo | null
        /**
         * The #GoaMediaServer instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page">org.gnome.OnlineAccounts.MediaServer</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        mediaServer?: MediaServer | null
        /**
         * The #GoaOAuthBased instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page">org.gnome.OnlineAccounts.OAuthBased</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        oauthBased?: OAuthBased | null
        /**
         * The #GoaOAuth2Based instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page">org.gnome.OnlineAccounts.OAuth2Based</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        oauth2Based?: OAuth2Based | null
        /**
         * The #GoaPasswordBased instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page">org.gnome.OnlineAccounts.PasswordBased</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        passwordBased?: PasswordBased | null
        /**
         * The #GoaReadLater instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page">org.gnome.OnlineAccounts.ReadLater</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        readLater?: ReadLater | null
    }

}

interface Object extends Gio.DBusObject {

    // Own properties of Goa-1.0.Goa.Object

    /**
     * The #GoaAccount instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Account.top_of_page">org.gnome.OnlineAccounts.Account</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    account: Account
    /**
     * The #GoaCalendar instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Calendar.top_of_page">org.gnome.OnlineAccounts.Calendar</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    calendar: Calendar
    /**
     * The #GoaChat instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Chat.top_of_page">org.gnome.OnlineAccounts.Chat</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    chat: Chat
    /**
     * The #GoaContacts instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Contacts.top_of_page">org.gnome.OnlineAccounts.Contacts</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    contacts: Contacts
    /**
     * The #GoaDocuments instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Documents.top_of_page">org.gnome.OnlineAccounts.Documents</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    documents: Documents
    /**
     * The #GoaExchange instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Exchange.top_of_page">org.gnome.OnlineAccounts.Exchange</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    exchange: Exchange
    /**
     * The #GoaFiles instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Files.top_of_page">org.gnome.OnlineAccounts.Files</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    files: Files
    /**
     * The #GoaMail instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Mail.top_of_page">org.gnome.OnlineAccounts.Mail</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    mail: Mail
    /**
     * The #GoaManager instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Manager.top_of_page">org.gnome.OnlineAccounts.Manager</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    manager: Manager
    /**
     * The #GoaMaps instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Maps.top_of_page">org.gnome.OnlineAccounts.Maps</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    maps: Maps
    /**
     * The #GoaMediaServer instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page">org.gnome.OnlineAccounts.MediaServer</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    media_server: MediaServer
    /**
     * The #GoaMediaServer instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page">org.gnome.OnlineAccounts.MediaServer</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    mediaServer: MediaServer
    /**
     * The #GoaMusic instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Music.top_of_page">org.gnome.OnlineAccounts.Music</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    music: Music
    /**
     * The #GoaOAuthBased instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page">org.gnome.OnlineAccounts.OAuthBased</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    oauth_based: OAuthBased
    /**
     * The #GoaOAuthBased instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page">org.gnome.OnlineAccounts.OAuthBased</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    oauthBased: OAuthBased
    /**
     * The #GoaOAuth2Based instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page">org.gnome.OnlineAccounts.OAuth2Based</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    oauth2_based: OAuth2Based
    /**
     * The #GoaOAuth2Based instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page">org.gnome.OnlineAccounts.OAuth2Based</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    oauth2Based: OAuth2Based
    /**
     * The #GoaPasswordBased instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page">org.gnome.OnlineAccounts.PasswordBased</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    password_based: PasswordBased
    /**
     * The #GoaPasswordBased instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page">org.gnome.OnlineAccounts.PasswordBased</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    passwordBased: PasswordBased
    /**
     * The #GoaPhotos instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Photos.top_of_page">org.gnome.OnlineAccounts.Photos</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    photos: Photos
    /**
     * The #GoaPrinters instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Printers.top_of_page">org.gnome.OnlineAccounts.Printers</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    printers: Printers
    /**
     * The #GoaReadLater instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page">org.gnome.OnlineAccounts.ReadLater</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    read_later: ReadLater
    /**
     * The #GoaReadLater instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page">org.gnome.OnlineAccounts.ReadLater</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    readLater: ReadLater
    /**
     * The #GoaTicketing instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Ticketing.top_of_page">org.gnome.OnlineAccounts.Ticketing</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    ticketing: Ticketing
    /**
     * The #GoaTodo instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Todo.top_of_page">org.gnome.OnlineAccounts.Todo</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    todo: Todo

    // Owm methods of Goa-1.0.Goa.Object

    /**
     * Gets the #GoaAccount instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Account.top_of_page">org.gnome.OnlineAccounts.Account</link> on `object,` if any.
     * @returns A #GoaAccount that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    get_account(): Account | null
    /**
     * Gets the #GoaCalendar instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Calendar.top_of_page">org.gnome.OnlineAccounts.Calendar</link> on `object,` if any.
     * @returns A #GoaCalendar that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    get_calendar(): Calendar | null
    /**
     * Gets the #GoaChat instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Chat.top_of_page">org.gnome.OnlineAccounts.Chat</link> on `object,` if any.
     * @returns A #GoaChat that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    get_chat(): Chat | null
    /**
     * Gets the #GoaContacts instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Contacts.top_of_page">org.gnome.OnlineAccounts.Contacts</link> on `object,` if any.
     * @returns A #GoaContacts that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    get_contacts(): Contacts | null
    /**
     * Gets the #GoaDocuments instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Documents.top_of_page">org.gnome.OnlineAccounts.Documents</link> on `object,` if any.
     * @returns A #GoaDocuments that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    get_documents(): Documents | null
    /**
     * Gets the #GoaExchange instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Exchange.top_of_page">org.gnome.OnlineAccounts.Exchange</link> on `object,` if any.
     * @returns A #GoaExchange that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    get_exchange(): Exchange | null
    /**
     * Gets the #GoaFiles instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Files.top_of_page">org.gnome.OnlineAccounts.Files</link> on `object,` if any.
     * @returns A #GoaFiles that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    get_files(): Files | null
    /**
     * Gets the #GoaMail instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Mail.top_of_page">org.gnome.OnlineAccounts.Mail</link> on `object,` if any.
     * @returns A #GoaMail that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    get_mail(): Mail | null
    /**
     * Gets the #GoaManager instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Manager.top_of_page">org.gnome.OnlineAccounts.Manager</link> on `object,` if any.
     * @returns A #GoaManager that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    get_manager(): Manager | null
    /**
     * Gets the #GoaMaps instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Maps.top_of_page">org.gnome.OnlineAccounts.Maps</link> on `object,` if any.
     * @returns A #GoaMaps that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    get_maps(): Maps | null
    /**
     * Gets the #GoaMediaServer instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page">org.gnome.OnlineAccounts.MediaServer</link> on `object,` if any.
     * @returns A #GoaMediaServer that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    get_media_server(): MediaServer | null
    /**
     * Gets the #GoaMusic instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Music.top_of_page">org.gnome.OnlineAccounts.Music</link> on `object,` if any.
     * @returns A #GoaMusic that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    get_music(): Music | null
    /**
     * Gets the #GoaOAuth2Based instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page">org.gnome.OnlineAccounts.OAuth2Based</link> on `object,` if any.
     * @returns A #GoaOAuth2Based that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    get_oauth2_based(): OAuth2Based | null
    /**
     * Gets the #GoaOAuthBased instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page">org.gnome.OnlineAccounts.OAuthBased</link> on `object,` if any.
     * @returns A #GoaOAuthBased that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    get_oauth_based(): OAuthBased | null
    /**
     * Gets the #GoaPasswordBased instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page">org.gnome.OnlineAccounts.PasswordBased</link> on `object,` if any.
     * @returns A #GoaPasswordBased that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    get_password_based(): PasswordBased | null
    /**
     * Gets the #GoaPhotos instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Photos.top_of_page">org.gnome.OnlineAccounts.Photos</link> on `object,` if any.
     * @returns A #GoaPhotos that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    get_photos(): Photos | null
    /**
     * Gets the #GoaPrinters instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Printers.top_of_page">org.gnome.OnlineAccounts.Printers</link> on `object,` if any.
     * @returns A #GoaPrinters that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    get_printers(): Printers | null
    /**
     * Gets the #GoaReadLater instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page">org.gnome.OnlineAccounts.ReadLater</link> on `object,` if any.
     * @returns A #GoaReadLater that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    get_read_later(): ReadLater | null
    /**
     * Gets the #GoaTicketing instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Ticketing.top_of_page">org.gnome.OnlineAccounts.Ticketing</link> on `object,` if any.
     * @returns A #GoaTicketing that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    get_ticketing(): Ticketing | null
    /**
     * Gets the #GoaTodo instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Todo.top_of_page">org.gnome.OnlineAccounts.Todo</link> on `object,` if any.
     * @returns A #GoaTodo that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    get_todo(): Todo | null

    // Class property signals of Goa-1.0.Goa.Object

    connect(sigName: "notify::account", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::account", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::account", ...args: any[]): void
    connect(sigName: "notify::calendar", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calendar", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::calendar", ...args: any[]): void
    connect(sigName: "notify::chat", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chat", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::chat", ...args: any[]): void
    connect(sigName: "notify::contacts", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contacts", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::contacts", ...args: any[]): void
    connect(sigName: "notify::documents", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::documents", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::documents", ...args: any[]): void
    connect(sigName: "notify::exchange", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exchange", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::exchange", ...args: any[]): void
    connect(sigName: "notify::files", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::files", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::files", ...args: any[]): void
    connect(sigName: "notify::mail", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mail", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mail", ...args: any[]): void
    connect(sigName: "notify::manager", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manager", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::manager", ...args: any[]): void
    connect(sigName: "notify::maps", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maps", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::maps", ...args: any[]): void
    connect(sigName: "notify::media-server", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-server", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::media-server", ...args: any[]): void
    connect(sigName: "notify::music", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::music", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::music", ...args: any[]): void
    connect(sigName: "notify::oauth-based", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::oauth-based", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::oauth-based", ...args: any[]): void
    connect(sigName: "notify::oauth2-based", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::oauth2-based", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::oauth2-based", ...args: any[]): void
    connect(sigName: "notify::password-based", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-based", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::password-based", ...args: any[]): void
    connect(sigName: "notify::photos", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::photos", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::photos", ...args: any[]): void
    connect(sigName: "notify::printers", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::printers", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::printers", ...args: any[]): void
    connect(sigName: "notify::read-later", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-later", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-later", ...args: any[]): void
    connect(sigName: "notify::ticketing", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ticketing", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ticketing", ...args: any[]): void
    connect(sigName: "notify::todo", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::todo", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::todo", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaObject type is a specialized container of interfaces.
 * @interface 
 */
class Object extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Object

    static name: string
    static $gtype: GObject.GType<Object>

    // Constructors of Goa-1.0.Goa.Object

    constructor(config?: Object.ConstructorProperties) 
    _init(config?: Object.ConstructorProperties): void
}

module PasswordBased {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-get-password`
     */
    interface HandleGetPasswordSignalCallback {
        ($obj: PasswordBased, invocation: Gio.DBusMethodInvocation, arg_id: string | null): boolean
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface PasswordBased {

    // Owm methods of Goa-1.0.Goa.PasswordBased

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-PasswordBased.GetPassword">GetPassword()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_password_based_call_get_password_finish() to get the result of the operation.
     * 
     * See goa_password_based_call_get_password_sync() for the synchronous, blocking version of this method.
     * @param arg_id Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_get_password(arg_id: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with goa_password_based_call_get_password().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_password_based_call_get_password().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_get_password_finish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* out_password */ string | null ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-PasswordBased.GetPassword">GetPassword()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See goa_password_based_call_get_password() for the asynchronous version of this method.
     * @param arg_id Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_get_password_sync(arg_id: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* out_password */ string | null ]
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-OnlineAccounts-PasswordBased.GetPassword">GetPassword()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param password Parameter to return.
     */
    complete_get_password(invocation: Gio.DBusMethodInvocation, password: string | null): void

    // Own virtual methods of Goa-1.0.Goa.PasswordBased

    vfunc_handle_get_password(invocation: Gio.DBusMethodInvocation, arg_id: string | null): boolean

    // Own signals of Goa-1.0.Goa.PasswordBased

    connect(sigName: "handle-get-password", callback: PasswordBased.HandleGetPasswordSignalCallback): number
    connect_after(sigName: "handle-get-password", callback: PasswordBased.HandleGetPasswordSignalCallback): number
    emit(sigName: "handle-get-password", invocation: Gio.DBusMethodInvocation, arg_id: string | null, ...args: any[]): void

    // Class property signals of Goa-1.0.Goa.PasswordBased

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page">org.gnome.OnlineAccounts.PasswordBased</link>.
 * @interface 
 */
class PasswordBased extends GObject.Object {

    // Own properties of Goa-1.0.Goa.PasswordBased

    static name: string
    static $gtype: GObject.GType<PasswordBased>

    // Constructors of Goa-1.0.Goa.PasswordBased

    constructor(config?: PasswordBased.ConstructorProperties) 
    _init(config?: PasswordBased.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page">org.gnome.OnlineAccounts.PasswordBased</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaPasswordBased interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module Photos {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Photos {

    // Class property signals of Goa-1.0.Goa.Photos

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Photos.top_of_page">org.gnome.OnlineAccounts.Photos</link>.
 * @interface 
 */
class Photos extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Photos

    static name: string
    static $gtype: GObject.GType<Photos>

    // Constructors of Goa-1.0.Goa.Photos

    constructor(config?: Photos.ConstructorProperties) 
    _init(config?: Photos.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Photos.top_of_page">org.gnome.OnlineAccounts.Photos</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaPhotos interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module Printers {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Printers {

    // Class property signals of Goa-1.0.Goa.Printers

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Printers.top_of_page">org.gnome.OnlineAccounts.Printers</link>.
 * @interface 
 */
class Printers extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Printers

    static name: string
    static $gtype: GObject.GType<Printers>

    // Constructors of Goa-1.0.Goa.Printers

    constructor(config?: Printers.ConstructorProperties) 
    _init(config?: Printers.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Printers.top_of_page">org.gnome.OnlineAccounts.Printers</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaPrinters interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module ReadLater {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ReadLater {

    // Class property signals of Goa-1.0.Goa.ReadLater

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page">org.gnome.OnlineAccounts.ReadLater</link>.
 * @interface 
 */
class ReadLater extends GObject.Object {

    // Own properties of Goa-1.0.Goa.ReadLater

    static name: string
    static $gtype: GObject.GType<ReadLater>

    // Constructors of Goa-1.0.Goa.ReadLater

    constructor(config?: ReadLater.ConstructorProperties) 
    _init(config?: ReadLater.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page">org.gnome.OnlineAccounts.ReadLater</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaReadLater interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module Ticketing {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-get-ticket`
     */
    interface HandleGetTicketSignalCallback {
        ($obj: Ticketing, invocation: Gio.DBusMethodInvocation): boolean
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Goa-1.0.Goa.Ticketing

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Ticketing.Details">"Details"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        details?: GLib.Variant | null
    }

}

interface Ticketing {

    // Own properties of Goa-1.0.Goa.Ticketing

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Ticketing.Details">"Details"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    details: GLib.Variant

    // Owm methods of Goa-1.0.Goa.Ticketing

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Ticketing.GetTicket">GetTicket()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_ticketing_call_get_ticket_finish() to get the result of the operation.
     * 
     * See goa_ticketing_call_get_ticket_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    call_get_ticket(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with goa_ticketing_call_get_ticket().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_ticketing_call_get_ticket().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_get_ticket_finish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Ticketing.GetTicket">GetTicket()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See goa_ticketing_call_get_ticket() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    call_get_ticket_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Ticketing.GetTicket">GetTicket()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    complete_get_ticket(invocation: Gio.DBusMethodInvocation): void

    // Own virtual methods of Goa-1.0.Goa.Ticketing

    vfunc_handle_get_ticket(invocation: Gio.DBusMethodInvocation): boolean

    // Own signals of Goa-1.0.Goa.Ticketing

    connect(sigName: "handle-get-ticket", callback: Ticketing.HandleGetTicketSignalCallback): number
    connect_after(sigName: "handle-get-ticket", callback: Ticketing.HandleGetTicketSignalCallback): number
    emit(sigName: "handle-get-ticket", invocation: Gio.DBusMethodInvocation, ...args: any[]): void

    // Class property signals of Goa-1.0.Goa.Ticketing

    connect(sigName: "notify::details", callback: (($obj: Ticketing, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::details", callback: (($obj: Ticketing, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::details", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Ticketing.top_of_page">org.gnome.OnlineAccounts.Ticketing</link>.
 * @interface 
 */
class Ticketing extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Ticketing

    static name: string
    static $gtype: GObject.GType<Ticketing>

    // Constructors of Goa-1.0.Goa.Ticketing

    constructor(config?: Ticketing.ConstructorProperties) 
    _init(config?: Ticketing.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Ticketing.top_of_page">org.gnome.OnlineAccounts.Ticketing</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaTicketing interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module Todo {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Todo {

    // Class property signals of Goa-1.0.Goa.Todo

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Todo.top_of_page">org.gnome.OnlineAccounts.Todo</link>.
 * @interface 
 */
class Todo extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Todo

    static name: string
    static $gtype: GObject.GType<Todo>

    // Constructors of Goa-1.0.Goa.Todo

    constructor(config?: Todo.ConstructorProperties) 
    _init(config?: Todo.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Todo.top_of_page">org.gnome.OnlineAccounts.Todo</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interface_info(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaTodo interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module AccountProxy {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Account.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface AccountProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Account {

    // Class property signals of Goa-1.0.Goa.AccountProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::attention-needed", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attention-needed", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attention-needed", ...args: any[]): void
    connect(sigName: "notify::calendar-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calendar-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::calendar-disabled", ...args: any[]): void
    connect(sigName: "notify::chat-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chat-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::chat-disabled", ...args: any[]): void
    connect(sigName: "notify::contacts-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contacts-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::contacts-disabled", ...args: any[]): void
    connect(sigName: "notify::documents-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::documents-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::documents-disabled", ...args: any[]): void
    connect(sigName: "notify::files-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::files-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::files-disabled", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::identity", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::identity", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::identity", ...args: any[]): void
    connect(sigName: "notify::is-locked", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-locked", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-locked", ...args: any[]): void
    connect(sigName: "notify::is-temporary", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-temporary", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-temporary", ...args: any[]): void
    connect(sigName: "notify::mail-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mail-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mail-disabled", ...args: any[]): void
    connect(sigName: "notify::maps-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maps-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::maps-disabled", ...args: any[]): void
    connect(sigName: "notify::music-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::music-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::music-disabled", ...args: any[]): void
    connect(sigName: "notify::photos-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::photos-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::photos-disabled", ...args: any[]): void
    connect(sigName: "notify::presentation-identity", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presentation-identity", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::presentation-identity", ...args: any[]): void
    connect(sigName: "notify::printers-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::printers-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::printers-disabled", ...args: any[]): void
    connect(sigName: "notify::provider-icon", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider-icon", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::provider-icon", ...args: any[]): void
    connect(sigName: "notify::provider-name", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider-name", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::provider-name", ...args: any[]): void
    connect(sigName: "notify::provider-type", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider-type", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::provider-type", ...args: any[]): void
    connect(sigName: "notify::read-later-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-later-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-later-disabled", ...args: any[]): void
    connect(sigName: "notify::ticketing-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ticketing-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ticketing-disabled", ...args: any[]): void
    connect(sigName: "notify::todo-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::todo-disabled", callback: (($obj: AccountProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::todo-disabled", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaAccountProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class AccountProxy extends Gio.DBusProxy {

    // Own properties of Goa-1.0.Goa.AccountProxy

    static name: string
    static $gtype: GObject.GType<AccountProxy>

    // Constructors of Goa-1.0.Goa.AccountProxy

    constructor(config?: AccountProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_account_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_account_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_finish(res: Gio.AsyncResult): AccountProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_account_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_account_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_finish(res: Gio.AsyncResult): AccountProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_account_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_account_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): AccountProxy

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
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Account.top_of_page">org.gnome.OnlineAccounts.Account</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_account_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): AccountProxy

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
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: AccountProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Account.top_of_page">org.gnome.OnlineAccounts.Account</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_account_proxy_new_finish() to get the result of the operation.
     * 
     * See goa_account_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<AccountProxy> | null): void

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
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<AccountProxy> | null): void

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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module AccountSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Account.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface AccountSkeleton extends Gio.DBusInterface, Account {

    // Class property signals of Goa-1.0.Goa.AccountSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::attention-needed", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attention-needed", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attention-needed", ...args: any[]): void
    connect(sigName: "notify::calendar-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calendar-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::calendar-disabled", ...args: any[]): void
    connect(sigName: "notify::chat-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chat-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::chat-disabled", ...args: any[]): void
    connect(sigName: "notify::contacts-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contacts-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::contacts-disabled", ...args: any[]): void
    connect(sigName: "notify::documents-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::documents-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::documents-disabled", ...args: any[]): void
    connect(sigName: "notify::files-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::files-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::files-disabled", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::identity", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::identity", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::identity", ...args: any[]): void
    connect(sigName: "notify::is-locked", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-locked", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-locked", ...args: any[]): void
    connect(sigName: "notify::is-temporary", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-temporary", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-temporary", ...args: any[]): void
    connect(sigName: "notify::mail-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mail-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mail-disabled", ...args: any[]): void
    connect(sigName: "notify::maps-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maps-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::maps-disabled", ...args: any[]): void
    connect(sigName: "notify::music-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::music-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::music-disabled", ...args: any[]): void
    connect(sigName: "notify::photos-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::photos-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::photos-disabled", ...args: any[]): void
    connect(sigName: "notify::presentation-identity", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::presentation-identity", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::presentation-identity", ...args: any[]): void
    connect(sigName: "notify::printers-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::printers-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::printers-disabled", ...args: any[]): void
    connect(sigName: "notify::provider-icon", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider-icon", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::provider-icon", ...args: any[]): void
    connect(sigName: "notify::provider-name", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider-name", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::provider-name", ...args: any[]): void
    connect(sigName: "notify::provider-type", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::provider-type", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::provider-type", ...args: any[]): void
    connect(sigName: "notify::read-later-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-later-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-later-disabled", ...args: any[]): void
    connect(sigName: "notify::ticketing-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ticketing-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ticketing-disabled", ...args: any[]): void
    connect(sigName: "notify::todo-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::todo-disabled", callback: (($obj: AccountSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::todo-disabled", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaAccountSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class AccountSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Goa-1.0.Goa.AccountSkeleton

    static name: string
    static $gtype: GObject.GType<AccountSkeleton>

    // Constructors of Goa-1.0.Goa.AccountSkeleton

    constructor(config?: AccountSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Account.top_of_page">org.gnome.OnlineAccounts.Account</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Account.top_of_page">org.gnome.OnlineAccounts.Account</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    static new(): AccountSkeleton
    _init(config?: AccountSkeleton.ConstructorProperties): void
}

module CalendarProxy {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Calendar.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface CalendarProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Calendar {

    // Class property signals of Goa-1.0.Goa.CalendarProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::accept-ssl-errors", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-ssl-errors", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: CalendarProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaCalendarProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class CalendarProxy extends Gio.DBusProxy {

    // Own properties of Goa-1.0.Goa.CalendarProxy

    static name: string
    static $gtype: GObject.GType<CalendarProxy>

    // Constructors of Goa-1.0.Goa.CalendarProxy

    constructor(config?: CalendarProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_calendar_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_calendar_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_finish(res: Gio.AsyncResult): CalendarProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_calendar_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_calendar_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_finish(res: Gio.AsyncResult): CalendarProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_calendar_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_calendar_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): CalendarProxy

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
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Calendar.top_of_page">org.gnome.OnlineAccounts.Calendar</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_calendar_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): CalendarProxy

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
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: CalendarProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Calendar.top_of_page">org.gnome.OnlineAccounts.Calendar</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_calendar_proxy_new_finish() to get the result of the operation.
     * 
     * See goa_calendar_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<CalendarProxy> | null): void

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
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<CalendarProxy> | null): void

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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module CalendarSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Calendar.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface CalendarSkeleton extends Gio.DBusInterface, Calendar {

    // Class property signals of Goa-1.0.Goa.CalendarSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: CalendarSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: CalendarSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::accept-ssl-errors", callback: (($obj: CalendarSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-ssl-errors", callback: (($obj: CalendarSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (($obj: CalendarSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: CalendarSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaCalendarSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class CalendarSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Goa-1.0.Goa.CalendarSkeleton

    static name: string
    static $gtype: GObject.GType<CalendarSkeleton>

    // Constructors of Goa-1.0.Goa.CalendarSkeleton

    constructor(config?: CalendarSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Calendar.top_of_page">org.gnome.OnlineAccounts.Calendar</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Calendar.top_of_page">org.gnome.OnlineAccounts.Calendar</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    static new(): CalendarSkeleton
    _init(config?: CalendarSkeleton.ConstructorProperties): void
}

module ChatProxy {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Chat.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface ChatProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Chat {

    // Class property signals of Goa-1.0.Goa.ChatProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: ChatProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: ChatProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: ChatProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: ChatProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ChatProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ChatProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: ChatProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ChatProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: ChatProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ChatProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: ChatProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: ChatProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: ChatProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: ChatProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: ChatProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ChatProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: ChatProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: ChatProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaChatProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class ChatProxy extends Gio.DBusProxy {

    // Own properties of Goa-1.0.Goa.ChatProxy

    static name: string
    static $gtype: GObject.GType<ChatProxy>

    // Constructors of Goa-1.0.Goa.ChatProxy

    constructor(config?: ChatProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_chat_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_chat_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_finish(res: Gio.AsyncResult): ChatProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_chat_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_chat_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_finish(res: Gio.AsyncResult): ChatProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_chat_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_chat_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): ChatProxy

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
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Chat.top_of_page">org.gnome.OnlineAccounts.Chat</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_chat_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): ChatProxy

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
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: ChatProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Chat.top_of_page">org.gnome.OnlineAccounts.Chat</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_chat_proxy_new_finish() to get the result of the operation.
     * 
     * See goa_chat_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<ChatProxy> | null): void

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
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<ChatProxy> | null): void

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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module ChatSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Chat.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface ChatSkeleton extends Gio.DBusInterface, Chat {

    // Class property signals of Goa-1.0.Goa.ChatSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: ChatSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ChatSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaChatSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class ChatSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Goa-1.0.Goa.ChatSkeleton

    static name: string
    static $gtype: GObject.GType<ChatSkeleton>

    // Constructors of Goa-1.0.Goa.ChatSkeleton

    constructor(config?: ChatSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Chat.top_of_page">org.gnome.OnlineAccounts.Chat</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Chat.top_of_page">org.gnome.OnlineAccounts.Chat</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    static new(): ChatSkeleton
    _init(config?: ChatSkeleton.ConstructorProperties): void
}

module Client {

    // Signal callback interfaces

    /**
     * Signal callback interface for `account-added`
     */
    interface AccountAddedSignalCallback {
        ($obj: Client, object: Object): void
    }

    /**
     * Signal callback interface for `account-changed`
     */
    interface AccountChangedSignalCallback {
        ($obj: Client, object: Object): void
    }

    /**
     * Signal callback interface for `account-removed`
     */
    interface AccountRemovedSignalCallback {
        ($obj: Client, object: Object): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface Client extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of Goa-1.0.Goa.Client

    /**
     * The #GDBusObjectManager used by the #GoaClient instance.
     */
    readonly object_manager: Gio.DBusObjectManager
    /**
     * The #GDBusObjectManager used by the #GoaClient instance.
     */
    readonly objectManager: Gio.DBusObjectManager

    // Owm methods of Goa-1.0.Goa.Client

    /**
     * Gets all accounts that `self` knows about. The result is a list of
     * #GoaObject instances where each object at least has an #GoaAccount
     * interface (that can be obtained via the goa_object_get_account()
     * method) but may also implement other interfaces such as
     * #GoaMail or #GoaFiles.
     * @returns A list of #GoaObject instances that must be freed with g_list_free() after each element has been freed with g_object_unref().
     */
    get_accounts(): Object[]
    /**
     * Gets the #GoaManager for `self,` if any.
     * @returns A #GoaManager or %NULL. Do not free, the returned object belongs to @self.
     */
    get_manager(): Manager | null
    /**
     * Gets the #GDBusObjectManager used by `self`.
     * @returns A #GDBusObjectManager. Do not free, the instance is owned by @self.
     */
    get_object_manager(): Gio.DBusObjectManager
    /**
     * Finds and returns the #GoaObject instance whose
     * <link
     * linkend="gdbus-property-org-gnome-OnlineAccounts-Account.Id">"Id"</link>
     * D-Bus property matches `id`.
     * @param id The ID to look for.
     * @returns A #GoaObject. Free the returned object with g_object_unref().
     */
    lookup_by_id(id: string | null): Object

    // Own signals of Goa-1.0.Goa.Client

    connect(sigName: "account-added", callback: Client.AccountAddedSignalCallback): number
    connect_after(sigName: "account-added", callback: Client.AccountAddedSignalCallback): number
    emit(sigName: "account-added", object: Object, ...args: any[]): void
    connect(sigName: "account-changed", callback: Client.AccountChangedSignalCallback): number
    connect_after(sigName: "account-changed", callback: Client.AccountChangedSignalCallback): number
    emit(sigName: "account-changed", object: Object, ...args: any[]): void
    connect(sigName: "account-removed", callback: Client.AccountRemovedSignalCallback): number
    connect_after(sigName: "account-removed", callback: Client.AccountRemovedSignalCallback): number
    emit(sigName: "account-removed", object: Object, ...args: any[]): void

    // Class property signals of Goa-1.0.Goa.Client

    connect(sigName: "notify::object-manager", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-manager", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-manager", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #GoaClient is used for accessing the GNOME Online Accounts service
 * from a client program.
 * @class 
 */
class Client extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Client

    static name: string
    static $gtype: GObject.GType<Client>

    // Constructors of Goa-1.0.Goa.Client

    constructor(config?: Client.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_client_new().
     * @constructor 
     * @param res A #GAsyncResult.
     * @returns A #GoaClient or %NULL if @error is set. Free with g_object_unref() when done with it.
     */
    static new_finish(res: Gio.AsyncResult): Client
    /**
     * Synchronously gets a #GoaClient for the local system.
     * @constructor 
     * @param cancellable A #GCancellable or %NULL.
     * @returns A #GoaClient or %NULL if @error is set. Free with g_object_unref() when done with it.
     */
    static new_sync(cancellable: Gio.Cancellable | null): Client
    _init(config?: Client.ConstructorProperties): void
    /**
     * Asynchronously gets a #GoaClient. When the operation is
     * finished, `callback` will be invoked in the <link
     * linkend="g-main-context-push-thread-default">thread-default main
     * loop</link> of the thread you are calling this method from.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Function that will be called when the result is ready.
     */
    static new(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Client> | null): void
}

module ContactsProxy {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Contacts.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface ContactsProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Contacts {

    // Class property signals of Goa-1.0.Goa.ContactsProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::accept-ssl-errors", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-ssl-errors", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: ContactsProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaContactsProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class ContactsProxy extends Gio.DBusProxy {

    // Own properties of Goa-1.0.Goa.ContactsProxy

    static name: string
    static $gtype: GObject.GType<ContactsProxy>

    // Constructors of Goa-1.0.Goa.ContactsProxy

    constructor(config?: ContactsProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_contacts_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_contacts_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_finish(res: Gio.AsyncResult): ContactsProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_contacts_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_contacts_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_finish(res: Gio.AsyncResult): ContactsProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_contacts_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_contacts_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): ContactsProxy

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
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Contacts.top_of_page">org.gnome.OnlineAccounts.Contacts</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_contacts_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): ContactsProxy

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
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: ContactsProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Contacts.top_of_page">org.gnome.OnlineAccounts.Contacts</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_contacts_proxy_new_finish() to get the result of the operation.
     * 
     * See goa_contacts_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<ContactsProxy> | null): void

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
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<ContactsProxy> | null): void

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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module ContactsSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Contacts.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface ContactsSkeleton extends Gio.DBusInterface, Contacts {

    // Class property signals of Goa-1.0.Goa.ContactsSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: ContactsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ContactsSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::accept-ssl-errors", callback: (($obj: ContactsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-ssl-errors", callback: (($obj: ContactsSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (($obj: ContactsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: ContactsSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaContactsSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class ContactsSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Goa-1.0.Goa.ContactsSkeleton

    static name: string
    static $gtype: GObject.GType<ContactsSkeleton>

    // Constructors of Goa-1.0.Goa.ContactsSkeleton

    constructor(config?: ContactsSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Contacts.top_of_page">org.gnome.OnlineAccounts.Contacts</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Contacts.top_of_page">org.gnome.OnlineAccounts.Contacts</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    static new(): ContactsSkeleton
    _init(config?: ContactsSkeleton.ConstructorProperties): void
}

module DocumentsProxy {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Documents.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface DocumentsProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Documents {

    // Class property signals of Goa-1.0.Goa.DocumentsProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: DocumentsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: DocumentsProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: DocumentsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: DocumentsProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: DocumentsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: DocumentsProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: DocumentsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: DocumentsProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: DocumentsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: DocumentsProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: DocumentsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: DocumentsProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: DocumentsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: DocumentsProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: DocumentsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: DocumentsProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: DocumentsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: DocumentsProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaDocumentsProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class DocumentsProxy extends Gio.DBusProxy {

    // Own properties of Goa-1.0.Goa.DocumentsProxy

    static name: string
    static $gtype: GObject.GType<DocumentsProxy>

    // Constructors of Goa-1.0.Goa.DocumentsProxy

    constructor(config?: DocumentsProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_documents_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_documents_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_finish(res: Gio.AsyncResult): DocumentsProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_documents_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_documents_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_finish(res: Gio.AsyncResult): DocumentsProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_documents_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_documents_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): DocumentsProxy

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
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Documents.top_of_page">org.gnome.OnlineAccounts.Documents</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_documents_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): DocumentsProxy

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
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: DocumentsProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Documents.top_of_page">org.gnome.OnlineAccounts.Documents</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_documents_proxy_new_finish() to get the result of the operation.
     * 
     * See goa_documents_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<DocumentsProxy> | null): void

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
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<DocumentsProxy> | null): void

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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module DocumentsSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Documents.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface DocumentsSkeleton extends Gio.DBusInterface, Documents {

    // Class property signals of Goa-1.0.Goa.DocumentsSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: DocumentsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: DocumentsSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaDocumentsSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class DocumentsSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Goa-1.0.Goa.DocumentsSkeleton

    static name: string
    static $gtype: GObject.GType<DocumentsSkeleton>

    // Constructors of Goa-1.0.Goa.DocumentsSkeleton

    constructor(config?: DocumentsSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Documents.top_of_page">org.gnome.OnlineAccounts.Documents</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Documents.top_of_page">org.gnome.OnlineAccounts.Documents</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    static new(): DocumentsSkeleton
    _init(config?: DocumentsSkeleton.ConstructorProperties): void
}

module ExchangeProxy {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Exchange.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface ExchangeProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Exchange {

    // Class property signals of Goa-1.0.Goa.ExchangeProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::accept-ssl-errors", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-ssl-errors", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::host", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host", callback: (($obj: ExchangeProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::host", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaExchangeProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class ExchangeProxy extends Gio.DBusProxy {

    // Own properties of Goa-1.0.Goa.ExchangeProxy

    static name: string
    static $gtype: GObject.GType<ExchangeProxy>

    // Constructors of Goa-1.0.Goa.ExchangeProxy

    constructor(config?: ExchangeProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_exchange_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_exchange_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_finish(res: Gio.AsyncResult): ExchangeProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_exchange_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_exchange_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_finish(res: Gio.AsyncResult): ExchangeProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_exchange_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_exchange_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): ExchangeProxy

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
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Exchange.top_of_page">org.gnome.OnlineAccounts.Exchange</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_exchange_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): ExchangeProxy

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
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: ExchangeProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Exchange.top_of_page">org.gnome.OnlineAccounts.Exchange</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_exchange_proxy_new_finish() to get the result of the operation.
     * 
     * See goa_exchange_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<ExchangeProxy> | null): void

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
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<ExchangeProxy> | null): void

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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module ExchangeSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Exchange.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface ExchangeSkeleton extends Gio.DBusInterface, Exchange {

    // Class property signals of Goa-1.0.Goa.ExchangeSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: ExchangeSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ExchangeSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::accept-ssl-errors", callback: (($obj: ExchangeSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-ssl-errors", callback: (($obj: ExchangeSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::host", callback: (($obj: ExchangeSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::host", callback: (($obj: ExchangeSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::host", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaExchangeSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class ExchangeSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Goa-1.0.Goa.ExchangeSkeleton

    static name: string
    static $gtype: GObject.GType<ExchangeSkeleton>

    // Constructors of Goa-1.0.Goa.ExchangeSkeleton

    constructor(config?: ExchangeSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Exchange.top_of_page">org.gnome.OnlineAccounts.Exchange</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Exchange.top_of_page">org.gnome.OnlineAccounts.Exchange</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    static new(): ExchangeSkeleton
    _init(config?: ExchangeSkeleton.ConstructorProperties): void
}

module FilesProxy {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Files.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface FilesProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Files {

    // Class property signals of Goa-1.0.Goa.FilesProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::accept-ssl-errors", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-ssl-errors", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: FilesProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaFilesProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class FilesProxy extends Gio.DBusProxy {

    // Own properties of Goa-1.0.Goa.FilesProxy

    static name: string
    static $gtype: GObject.GType<FilesProxy>

    // Constructors of Goa-1.0.Goa.FilesProxy

    constructor(config?: FilesProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_files_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_files_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_finish(res: Gio.AsyncResult): FilesProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_files_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_files_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_finish(res: Gio.AsyncResult): FilesProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_files_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_files_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): FilesProxy

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
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Files.top_of_page">org.gnome.OnlineAccounts.Files</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_files_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): FilesProxy

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
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: FilesProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Files.top_of_page">org.gnome.OnlineAccounts.Files</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_files_proxy_new_finish() to get the result of the operation.
     * 
     * See goa_files_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<FilesProxy> | null): void

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
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<FilesProxy> | null): void

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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module FilesSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Files.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface FilesSkeleton extends Gio.DBusInterface, Files {

    // Class property signals of Goa-1.0.Goa.FilesSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: FilesSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: FilesSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::accept-ssl-errors", callback: (($obj: FilesSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accept-ssl-errors", callback: (($obj: FilesSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (($obj: FilesSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: FilesSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaFilesSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class FilesSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Goa-1.0.Goa.FilesSkeleton

    static name: string
    static $gtype: GObject.GType<FilesSkeleton>

    // Constructors of Goa-1.0.Goa.FilesSkeleton

    constructor(config?: FilesSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Files.top_of_page">org.gnome.OnlineAccounts.Files</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Files.top_of_page">org.gnome.OnlineAccounts.Files</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    static new(): FilesSkeleton
    _init(config?: FilesSkeleton.ConstructorProperties): void
}

module MailProxy {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Mail.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface MailProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Mail {

    // Class property signals of Goa-1.0.Goa.MailProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::email-address", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-address", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::email-address", ...args: any[]): void
    connect(sigName: "notify::imap-accept-ssl-errors", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-accept-ssl-errors", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::imap-accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::imap-host", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-host", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::imap-host", ...args: any[]): void
    connect(sigName: "notify::imap-supported", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-supported", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::imap-supported", ...args: any[]): void
    connect(sigName: "notify::imap-use-ssl", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-use-ssl", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::imap-use-ssl", ...args: any[]): void
    connect(sigName: "notify::imap-use-tls", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-use-tls", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::imap-use-tls", ...args: any[]): void
    connect(sigName: "notify::imap-user-name", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-user-name", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::imap-user-name", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::smtp-accept-ssl-errors", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-accept-ssl-errors", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smtp-accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::smtp-auth-login", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-auth-login", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smtp-auth-login", ...args: any[]): void
    connect(sigName: "notify::smtp-auth-plain", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-auth-plain", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smtp-auth-plain", ...args: any[]): void
    connect(sigName: "notify::smtp-auth-xoauth2", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-auth-xoauth2", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smtp-auth-xoauth2", ...args: any[]): void
    connect(sigName: "notify::smtp-host", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-host", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smtp-host", ...args: any[]): void
    connect(sigName: "notify::smtp-supported", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-supported", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smtp-supported", ...args: any[]): void
    connect(sigName: "notify::smtp-use-auth", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-use-auth", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smtp-use-auth", ...args: any[]): void
    connect(sigName: "notify::smtp-use-ssl", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-use-ssl", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smtp-use-ssl", ...args: any[]): void
    connect(sigName: "notify::smtp-use-tls", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-use-tls", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smtp-use-tls", ...args: any[]): void
    connect(sigName: "notify::smtp-user-name", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-user-name", callback: (($obj: MailProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smtp-user-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaMailProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class MailProxy extends Gio.DBusProxy {

    // Own properties of Goa-1.0.Goa.MailProxy

    static name: string
    static $gtype: GObject.GType<MailProxy>

    // Constructors of Goa-1.0.Goa.MailProxy

    constructor(config?: MailProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_mail_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_mail_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_finish(res: Gio.AsyncResult): MailProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_mail_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_mail_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_finish(res: Gio.AsyncResult): MailProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_mail_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_mail_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): MailProxy

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
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Mail.top_of_page">org.gnome.OnlineAccounts.Mail</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_mail_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): MailProxy

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
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: MailProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Mail.top_of_page">org.gnome.OnlineAccounts.Mail</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_mail_proxy_new_finish() to get the result of the operation.
     * 
     * See goa_mail_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<MailProxy> | null): void

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
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<MailProxy> | null): void

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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module MailSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Mail.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface MailSkeleton extends Gio.DBusInterface, Mail {

    // Class property signals of Goa-1.0.Goa.MailSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::email-address", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email-address", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::email-address", ...args: any[]): void
    connect(sigName: "notify::imap-accept-ssl-errors", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-accept-ssl-errors", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::imap-accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::imap-host", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-host", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::imap-host", ...args: any[]): void
    connect(sigName: "notify::imap-supported", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-supported", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::imap-supported", ...args: any[]): void
    connect(sigName: "notify::imap-use-ssl", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-use-ssl", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::imap-use-ssl", ...args: any[]): void
    connect(sigName: "notify::imap-use-tls", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-use-tls", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::imap-use-tls", ...args: any[]): void
    connect(sigName: "notify::imap-user-name", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::imap-user-name", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::imap-user-name", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::smtp-accept-ssl-errors", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-accept-ssl-errors", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smtp-accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::smtp-auth-login", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-auth-login", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smtp-auth-login", ...args: any[]): void
    connect(sigName: "notify::smtp-auth-plain", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-auth-plain", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smtp-auth-plain", ...args: any[]): void
    connect(sigName: "notify::smtp-auth-xoauth2", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-auth-xoauth2", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smtp-auth-xoauth2", ...args: any[]): void
    connect(sigName: "notify::smtp-host", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-host", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smtp-host", ...args: any[]): void
    connect(sigName: "notify::smtp-supported", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-supported", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smtp-supported", ...args: any[]): void
    connect(sigName: "notify::smtp-use-auth", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-use-auth", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smtp-use-auth", ...args: any[]): void
    connect(sigName: "notify::smtp-use-ssl", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-use-ssl", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smtp-use-ssl", ...args: any[]): void
    connect(sigName: "notify::smtp-use-tls", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-use-tls", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smtp-use-tls", ...args: any[]): void
    connect(sigName: "notify::smtp-user-name", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::smtp-user-name", callback: (($obj: MailSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::smtp-user-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaMailSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class MailSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Goa-1.0.Goa.MailSkeleton

    static name: string
    static $gtype: GObject.GType<MailSkeleton>

    // Constructors of Goa-1.0.Goa.MailSkeleton

    constructor(config?: MailSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Mail.top_of_page">org.gnome.OnlineAccounts.Mail</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Mail.top_of_page">org.gnome.OnlineAccounts.Mail</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    static new(): MailSkeleton
    _init(config?: MailSkeleton.ConstructorProperties): void
}

module ManagerProxy {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Manager.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface ManagerProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Manager {

    // Class property signals of Goa-1.0.Goa.ManagerProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaManagerProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class ManagerProxy extends Gio.DBusProxy {

    // Own properties of Goa-1.0.Goa.ManagerProxy

    static name: string
    static $gtype: GObject.GType<ManagerProxy>

    // Constructors of Goa-1.0.Goa.ManagerProxy

    constructor(config?: ManagerProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_manager_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_manager_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_finish(res: Gio.AsyncResult): ManagerProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_manager_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_manager_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_finish(res: Gio.AsyncResult): ManagerProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_manager_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_manager_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): ManagerProxy

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
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Manager.top_of_page">org.gnome.OnlineAccounts.Manager</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_manager_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): ManagerProxy

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
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: ManagerProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Manager.top_of_page">org.gnome.OnlineAccounts.Manager</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_manager_proxy_new_finish() to get the result of the operation.
     * 
     * See goa_manager_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<ManagerProxy> | null): void

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
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<ManagerProxy> | null): void

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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module ManagerSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Manager.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface ManagerSkeleton extends Gio.DBusInterface, Manager {

    // Class property signals of Goa-1.0.Goa.ManagerSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaManagerSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class ManagerSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Goa-1.0.Goa.ManagerSkeleton

    static name: string
    static $gtype: GObject.GType<ManagerSkeleton>

    // Constructors of Goa-1.0.Goa.ManagerSkeleton

    constructor(config?: ManagerSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Manager.top_of_page">org.gnome.OnlineAccounts.Manager</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Manager.top_of_page">org.gnome.OnlineAccounts.Manager</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    static new(): ManagerSkeleton
    _init(config?: ManagerSkeleton.ConstructorProperties): void
}

module MapsProxy {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Maps.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface MapsProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Maps {

    // Class property signals of Goa-1.0.Goa.MapsProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: MapsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: MapsProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: MapsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: MapsProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: MapsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: MapsProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: MapsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: MapsProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: MapsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: MapsProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: MapsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: MapsProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: MapsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: MapsProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: MapsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: MapsProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: MapsProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: MapsProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaMapsProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class MapsProxy extends Gio.DBusProxy {

    // Own properties of Goa-1.0.Goa.MapsProxy

    static name: string
    static $gtype: GObject.GType<MapsProxy>

    // Constructors of Goa-1.0.Goa.MapsProxy

    constructor(config?: MapsProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_maps_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_maps_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_finish(res: Gio.AsyncResult): MapsProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_maps_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_maps_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_finish(res: Gio.AsyncResult): MapsProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_maps_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_maps_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): MapsProxy

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
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Maps.top_of_page">org.gnome.OnlineAccounts.Maps</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_maps_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): MapsProxy

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
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: MapsProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Maps.top_of_page">org.gnome.OnlineAccounts.Maps</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_maps_proxy_new_finish() to get the result of the operation.
     * 
     * See goa_maps_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<MapsProxy> | null): void

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
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<MapsProxy> | null): void

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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module MapsSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Maps.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface MapsSkeleton extends Gio.DBusInterface, Maps {

    // Class property signals of Goa-1.0.Goa.MapsSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: MapsSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: MapsSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaMapsSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class MapsSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Goa-1.0.Goa.MapsSkeleton

    static name: string
    static $gtype: GObject.GType<MapsSkeleton>

    // Constructors of Goa-1.0.Goa.MapsSkeleton

    constructor(config?: MapsSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Maps.top_of_page">org.gnome.OnlineAccounts.Maps</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Maps.top_of_page">org.gnome.OnlineAccounts.Maps</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    static new(): MapsSkeleton
    _init(config?: MapsSkeleton.ConstructorProperties): void
}

module MediaServerProxy {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, MediaServer.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface MediaServerProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, MediaServer {

    // Class property signals of Goa-1.0.Goa.MediaServerProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::dlna-supported", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-supported", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dlna-supported", ...args: any[]): void
    connect(sigName: "notify::udn", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udn", callback: (($obj: MediaServerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::udn", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaMediaServerProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class MediaServerProxy extends Gio.DBusProxy {

    // Own properties of Goa-1.0.Goa.MediaServerProxy

    static name: string
    static $gtype: GObject.GType<MediaServerProxy>

    // Constructors of Goa-1.0.Goa.MediaServerProxy

    constructor(config?: MediaServerProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_media_server_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_media_server_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_finish(res: Gio.AsyncResult): MediaServerProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_media_server_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_media_server_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_finish(res: Gio.AsyncResult): MediaServerProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_media_server_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_media_server_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): MediaServerProxy

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
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page">org.gnome.OnlineAccounts.MediaServer</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_media_server_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): MediaServerProxy

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
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: MediaServerProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page">org.gnome.OnlineAccounts.MediaServer</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_media_server_proxy_new_finish() to get the result of the operation.
     * 
     * See goa_media_server_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<MediaServerProxy> | null): void

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
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<MediaServerProxy> | null): void

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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module MediaServerSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, MediaServer.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface MediaServerSkeleton extends Gio.DBusInterface, MediaServer {

    // Class property signals of Goa-1.0.Goa.MediaServerSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: MediaServerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: MediaServerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::dlna-supported", callback: (($obj: MediaServerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dlna-supported", callback: (($obj: MediaServerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::dlna-supported", ...args: any[]): void
    connect(sigName: "notify::udn", callback: (($obj: MediaServerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::udn", callback: (($obj: MediaServerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::udn", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaMediaServerSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class MediaServerSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Goa-1.0.Goa.MediaServerSkeleton

    static name: string
    static $gtype: GObject.GType<MediaServerSkeleton>

    // Constructors of Goa-1.0.Goa.MediaServerSkeleton

    constructor(config?: MediaServerSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page">org.gnome.OnlineAccounts.MediaServer</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page">org.gnome.OnlineAccounts.MediaServer</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    static new(): MediaServerSkeleton
    _init(config?: MediaServerSkeleton.ConstructorProperties): void
}

module MusicProxy {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Music.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface MusicProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Music {

    // Class property signals of Goa-1.0.Goa.MusicProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: MusicProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: MusicProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: MusicProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: MusicProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: MusicProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: MusicProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: MusicProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: MusicProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: MusicProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: MusicProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: MusicProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: MusicProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: MusicProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: MusicProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: MusicProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: MusicProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: MusicProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: MusicProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaMusicProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class MusicProxy extends Gio.DBusProxy {

    // Own properties of Goa-1.0.Goa.MusicProxy

    static name: string
    static $gtype: GObject.GType<MusicProxy>

    // Constructors of Goa-1.0.Goa.MusicProxy

    constructor(config?: MusicProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_music_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_music_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_finish(res: Gio.AsyncResult): MusicProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_music_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_music_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_finish(res: Gio.AsyncResult): MusicProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_music_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_music_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): MusicProxy

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
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Music.top_of_page">org.gnome.OnlineAccounts.Music</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_music_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): MusicProxy

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
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: MusicProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Music.top_of_page">org.gnome.OnlineAccounts.Music</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_music_proxy_new_finish() to get the result of the operation.
     * 
     * See goa_music_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<MusicProxy> | null): void

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
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<MusicProxy> | null): void

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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module MusicSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Music.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface MusicSkeleton extends Gio.DBusInterface, Music {

    // Class property signals of Goa-1.0.Goa.MusicSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: MusicSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: MusicSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaMusicSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class MusicSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Goa-1.0.Goa.MusicSkeleton

    static name: string
    static $gtype: GObject.GType<MusicSkeleton>

    // Constructors of Goa-1.0.Goa.MusicSkeleton

    constructor(config?: MusicSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Music.top_of_page">org.gnome.OnlineAccounts.Music</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Music.top_of_page">org.gnome.OnlineAccounts.Music</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    static new(): MusicSkeleton
    _init(config?: MusicSkeleton.ConstructorProperties): void
}

module OAuth2BasedProxy {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, OAuth2Based.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface OAuth2BasedProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, OAuth2Based {

    // Class property signals of Goa-1.0.Goa.OAuth2BasedProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::client-id", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-id", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::client-id", ...args: any[]): void
    connect(sigName: "notify::client-secret", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-secret", callback: (($obj: OAuth2BasedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::client-secret", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaOAuth2BasedProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class OAuth2BasedProxy extends Gio.DBusProxy {

    // Own properties of Goa-1.0.Goa.OAuth2BasedProxy

    static name: string
    static $gtype: GObject.GType<OAuth2BasedProxy>

    // Constructors of Goa-1.0.Goa.OAuth2BasedProxy

    constructor(config?: OAuth2BasedProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_oauth2_based_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_oauth2_based_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_finish(res: Gio.AsyncResult): OAuth2BasedProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_oauth2_based_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_oauth2_based_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_finish(res: Gio.AsyncResult): OAuth2BasedProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_oauth2_based_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_oauth2_based_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): OAuth2BasedProxy

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
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page">org.gnome.OnlineAccounts.OAuth2Based</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_oauth2_based_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): OAuth2BasedProxy

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
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: OAuth2BasedProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page">org.gnome.OnlineAccounts.OAuth2Based</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_oauth2_based_proxy_new_finish() to get the result of the operation.
     * 
     * See goa_oauth2_based_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<OAuth2BasedProxy> | null): void

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
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<OAuth2BasedProxy> | null): void

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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module OAuth2BasedSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, OAuth2Based.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface OAuth2BasedSkeleton extends Gio.DBusInterface, OAuth2Based {

    // Class property signals of Goa-1.0.Goa.OAuth2BasedSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: OAuth2BasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: OAuth2BasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::client-id", callback: (($obj: OAuth2BasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-id", callback: (($obj: OAuth2BasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::client-id", ...args: any[]): void
    connect(sigName: "notify::client-secret", callback: (($obj: OAuth2BasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client-secret", callback: (($obj: OAuth2BasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::client-secret", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaOAuth2BasedSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class OAuth2BasedSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Goa-1.0.Goa.OAuth2BasedSkeleton

    static name: string
    static $gtype: GObject.GType<OAuth2BasedSkeleton>

    // Constructors of Goa-1.0.Goa.OAuth2BasedSkeleton

    constructor(config?: OAuth2BasedSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page">org.gnome.OnlineAccounts.OAuth2Based</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page">org.gnome.OnlineAccounts.OAuth2Based</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    static new(): OAuth2BasedSkeleton
    _init(config?: OAuth2BasedSkeleton.ConstructorProperties): void
}

module OAuthBasedProxy {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, OAuthBased.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface OAuthBasedProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, OAuthBased {

    // Class property signals of Goa-1.0.Goa.OAuthBasedProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::consumer-key", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::consumer-key", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::consumer-key", ...args: any[]): void
    connect(sigName: "notify::consumer-secret", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::consumer-secret", callback: (($obj: OAuthBasedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::consumer-secret", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaOAuthBasedProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class OAuthBasedProxy extends Gio.DBusProxy {

    // Own properties of Goa-1.0.Goa.OAuthBasedProxy

    static name: string
    static $gtype: GObject.GType<OAuthBasedProxy>

    // Constructors of Goa-1.0.Goa.OAuthBasedProxy

    constructor(config?: OAuthBasedProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_oauth_based_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_oauth_based_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_finish(res: Gio.AsyncResult): OAuthBasedProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_oauth_based_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_oauth_based_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_finish(res: Gio.AsyncResult): OAuthBasedProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_oauth_based_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_oauth_based_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): OAuthBasedProxy

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
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page">org.gnome.OnlineAccounts.OAuthBased</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_oauth_based_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): OAuthBasedProxy

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
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: OAuthBasedProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page">org.gnome.OnlineAccounts.OAuthBased</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_oauth_based_proxy_new_finish() to get the result of the operation.
     * 
     * See goa_oauth_based_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<OAuthBasedProxy> | null): void

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
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<OAuthBasedProxy> | null): void

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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module OAuthBasedSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, OAuthBased.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface OAuthBasedSkeleton extends Gio.DBusInterface, OAuthBased {

    // Class property signals of Goa-1.0.Goa.OAuthBasedSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: OAuthBasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: OAuthBasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::consumer-key", callback: (($obj: OAuthBasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::consumer-key", callback: (($obj: OAuthBasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::consumer-key", ...args: any[]): void
    connect(sigName: "notify::consumer-secret", callback: (($obj: OAuthBasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::consumer-secret", callback: (($obj: OAuthBasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::consumer-secret", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaOAuthBasedSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class OAuthBasedSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Goa-1.0.Goa.OAuthBasedSkeleton

    static name: string
    static $gtype: GObject.GType<OAuthBasedSkeleton>

    // Constructors of Goa-1.0.Goa.OAuthBasedSkeleton

    constructor(config?: OAuthBasedSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page">org.gnome.OnlineAccounts.OAuthBased</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page">org.gnome.OnlineAccounts.OAuthBased</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    static new(): OAuthBasedSkeleton
    _init(config?: OAuthBasedSkeleton.ConstructorProperties): void
}

module ObjectManagerClient {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusObjectManager.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusObjectManagerClient.ConstructorProperties {
    }

}

interface ObjectManagerClient extends Gio.AsyncInitable, Gio.DBusObjectManager, Gio.Initable {

    // Class property signals of Goa-1.0.Goa.ObjectManagerClient

    connect(sigName: "notify::bus-type", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bus-type", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::bus-type", ...args: any[]): void
    connect(sigName: "notify::connection", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::flags", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::get-proxy-type-destroy-notify", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::get-proxy-type-destroy-notify", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::get-proxy-type-destroy-notify", ...args: any[]): void
    connect(sigName: "notify::get-proxy-type-func", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::get-proxy-type-func", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::get-proxy-type-func", ...args: any[]): void
    connect(sigName: "notify::get-proxy-type-user-data", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::get-proxy-type-user-data", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::get-proxy-type-user-data", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::name-owner", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name-owner", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name-owner", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::object-path", callback: (($obj: ObjectManagerClient, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaObjectManagerClient structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class ObjectManagerClient extends Gio.DBusObjectManagerClient {

    // Own properties of Goa-1.0.Goa.ObjectManagerClient

    static name: string
    static $gtype: GObject.GType<ObjectManagerClient>

    // Constructors of Goa-1.0.Goa.ObjectManagerClient

    constructor(config?: ObjectManagerClient.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_object_manager_client_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_object_manager_client_new().
     * @returns The constructed object manager client or %NULL if @error is set.
     */
    static new_finish(res: Gio.AsyncResult): ObjectManagerClient

    // Overloads of new_finish

    /**
     * Finishes an operation started with g_dbus_object_manager_client_new().
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to g_dbus_object_manager_client_new().
     * @returns A   #GDBusObjectManagerClient object or %NULL if @error is set. Free   with g_object_unref().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusObjectManagerClient
    /**
     * Finishes an operation started with goa_object_manager_client_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_object_manager_client_new_for_bus().
     * @returns The constructed object manager client or %NULL if @error is set.
     */
    static new_for_bus_finish(res: Gio.AsyncResult): ObjectManagerClient

    // Overloads of new_for_bus_finish

    /**
     * Finishes an operation started with g_dbus_object_manager_client_new_for_bus().
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to g_dbus_object_manager_client_new_for_bus().
     * @returns A   #GDBusObjectManagerClient object or %NULL if @error is set. Free   with g_object_unref().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusObjectManagerClient
    /**
     * Like goa_object_manager_client_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_object_manager_client_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusObjectManagerClientFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed object manager client or %NULL if @error is set.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): ObjectManagerClient

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
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string | null, object_path: string | null, get_proxy_type_func: Gio.DBusProxyTypeFunc | null, cancellable: Gio.Cancellable | null): Gio.DBusObjectManagerClient
    /**
     * Synchronously creates #GDBusObjectManagerClient using goa_object_manager_client_get_proxy_type() as the #GDBusProxyTypeFunc. See g_dbus_object_manager_client_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_object_manager_client_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusObjectManagerClientFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed object manager client or %NULL if @error is set.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): ObjectManagerClient

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
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, object_path: string | null, get_proxy_type_func: Gio.DBusProxyTypeFunc | null, cancellable: Gio.Cancellable | null): Gio.DBusObjectManagerClient
    _init(config?: ObjectManagerClient.ConstructorProperties): void
    /**
     * Asynchronously creates #GDBusObjectManagerClient using goa_object_manager_client_get_proxy_type() as the #GDBusProxyTypeFunc. See g_dbus_object_manager_client_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_object_manager_client_new_finish() to get the result of the operation.
     * 
     * See goa_object_manager_client_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusObjectManagerClientFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<ObjectManagerClient> | null): void

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
    static new(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, object_path: string | null, get_proxy_type_func: Gio.DBusProxyTypeFunc | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusObjectManagerClient> | null): void
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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<ObjectManagerClient> | null): void

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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string | null, object_path: string | null, get_proxy_type_func: Gio.DBusProxyTypeFunc | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusObjectManagerClient> | null): void
    /**
     * A #GDBusProxyTypeFunc that maps `interface_name` to the generated #GDBusObjectProxy derived and #GDBusProxy derived types.
     * @param manager A #GDBusObjectManagerClient.
     * @param object_path The object path of the remote object (unused).
     * @param interface_name Interface name of the remote object or %NULL to get the object proxy #GType.
     * @param user_data User data (unused).
     * @returns A #GDBusProxy derived #GType if @interface_name is not %NULL, otherwise the #GType for #GoaObjectProxy.
     */
    static get_proxy_type(manager: Gio.DBusObjectManagerClient, object_path: string | null, interface_name: string | null, user_data: any | null): GObject.GType
}

module ObjectProxy {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusObject.ConstructorProperties, Object.ConstructorProperties, Gio.DBusObjectProxy.ConstructorProperties {
    }

}

interface ObjectProxy extends Gio.DBusObject, Object {

    // Class property signals of Goa-1.0.Goa.ObjectProxy

    connect(sigName: "notify::g-connection", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::account", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::account", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::account", ...args: any[]): void
    connect(sigName: "notify::calendar", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calendar", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::calendar", ...args: any[]): void
    connect(sigName: "notify::chat", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chat", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::chat", ...args: any[]): void
    connect(sigName: "notify::contacts", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contacts", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::contacts", ...args: any[]): void
    connect(sigName: "notify::documents", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::documents", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::documents", ...args: any[]): void
    connect(sigName: "notify::exchange", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exchange", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::exchange", ...args: any[]): void
    connect(sigName: "notify::files", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::files", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::files", ...args: any[]): void
    connect(sigName: "notify::mail", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mail", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mail", ...args: any[]): void
    connect(sigName: "notify::manager", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manager", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::manager", ...args: any[]): void
    connect(sigName: "notify::maps", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maps", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::maps", ...args: any[]): void
    connect(sigName: "notify::media-server", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-server", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::media-server", ...args: any[]): void
    connect(sigName: "notify::music", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::music", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::music", ...args: any[]): void
    connect(sigName: "notify::oauth-based", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::oauth-based", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::oauth-based", ...args: any[]): void
    connect(sigName: "notify::oauth2-based", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::oauth2-based", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::oauth2-based", ...args: any[]): void
    connect(sigName: "notify::password-based", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-based", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::password-based", ...args: any[]): void
    connect(sigName: "notify::photos", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::photos", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::photos", ...args: any[]): void
    connect(sigName: "notify::printers", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::printers", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::printers", ...args: any[]): void
    connect(sigName: "notify::read-later", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-later", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-later", ...args: any[]): void
    connect(sigName: "notify::ticketing", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ticketing", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ticketing", ...args: any[]): void
    connect(sigName: "notify::todo", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::todo", callback: (($obj: ObjectProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::todo", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaObjectProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class ObjectProxy extends Gio.DBusObjectProxy {

    // Own properties of Goa-1.0.Goa.ObjectProxy

    static name: string
    static $gtype: GObject.GType<ObjectProxy>

    // Constructors of Goa-1.0.Goa.ObjectProxy

    constructor(config?: ObjectProxy.ConstructorProperties) 
    /**
     * Creates a new proxy object.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param object_path An object path.
     * @returns The proxy object.
     */
    constructor(connection: Gio.DBusConnection, object_path: string | null) 
    /**
     * Creates a new proxy object.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param object_path An object path.
     * @returns The proxy object.
     */
    static new(connection: Gio.DBusConnection, object_path: string | null): ObjectProxy

    // Overloads of new

    /**
     * Creates a new #GDBusObjectProxy for the given connection and
     * object path.
     * @constructor 
     * @param connection a #GDBusConnection
     * @param object_path the object path
     * @returns a new #GDBusObjectProxy
     */
    static new(connection: Gio.DBusConnection, object_path: string | null): Gio.DBusObjectProxy
    _init(config?: ObjectProxy.ConstructorProperties): void
}

module ObjectSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusObject.ConstructorProperties, Object.ConstructorProperties, Gio.DBusObjectSkeleton.ConstructorProperties {
    }

}

interface ObjectSkeleton extends Gio.DBusObject, Object {

    // Owm methods of Goa-1.0.Goa.ObjectSkeleton

    /**
     * Sets the #GoaAccount instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Account.top_of_page">org.gnome.OnlineAccounts.Account</link> on `object`.
     * @param interface_ A #GoaAccount or %NULL to clear the interface.
     */
    set_account(interface_: Account | null): void
    /**
     * Sets the #GoaCalendar instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Calendar.top_of_page">org.gnome.OnlineAccounts.Calendar</link> on `object`.
     * @param interface_ A #GoaCalendar or %NULL to clear the interface.
     */
    set_calendar(interface_: Calendar | null): void
    /**
     * Sets the #GoaChat instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Chat.top_of_page">org.gnome.OnlineAccounts.Chat</link> on `object`.
     * @param interface_ A #GoaChat or %NULL to clear the interface.
     */
    set_chat(interface_: Chat | null): void
    /**
     * Sets the #GoaContacts instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Contacts.top_of_page">org.gnome.OnlineAccounts.Contacts</link> on `object`.
     * @param interface_ A #GoaContacts or %NULL to clear the interface.
     */
    set_contacts(interface_: Contacts | null): void
    /**
     * Sets the #GoaDocuments instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Documents.top_of_page">org.gnome.OnlineAccounts.Documents</link> on `object`.
     * @param interface_ A #GoaDocuments or %NULL to clear the interface.
     */
    set_documents(interface_: Documents | null): void
    /**
     * Sets the #GoaExchange instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Exchange.top_of_page">org.gnome.OnlineAccounts.Exchange</link> on `object`.
     * @param interface_ A #GoaExchange or %NULL to clear the interface.
     */
    set_exchange(interface_: Exchange | null): void
    /**
     * Sets the #GoaFiles instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Files.top_of_page">org.gnome.OnlineAccounts.Files</link> on `object`.
     * @param interface_ A #GoaFiles or %NULL to clear the interface.
     */
    set_files(interface_: Files | null): void
    /**
     * Sets the #GoaMail instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Mail.top_of_page">org.gnome.OnlineAccounts.Mail</link> on `object`.
     * @param interface_ A #GoaMail or %NULL to clear the interface.
     */
    set_mail(interface_: Mail | null): void
    /**
     * Sets the #GoaManager instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Manager.top_of_page">org.gnome.OnlineAccounts.Manager</link> on `object`.
     * @param interface_ A #GoaManager or %NULL to clear the interface.
     */
    set_manager(interface_: Manager | null): void
    /**
     * Sets the #GoaMaps instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Maps.top_of_page">org.gnome.OnlineAccounts.Maps</link> on `object`.
     * @param interface_ A #GoaMaps or %NULL to clear the interface.
     */
    set_maps(interface_: Maps | null): void
    /**
     * Sets the #GoaMediaServer instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page">org.gnome.OnlineAccounts.MediaServer</link> on `object`.
     * @param interface_ A #GoaMediaServer or %NULL to clear the interface.
     */
    set_media_server(interface_: MediaServer | null): void
    /**
     * Sets the #GoaMusic instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Music.top_of_page">org.gnome.OnlineAccounts.Music</link> on `object`.
     * @param interface_ A #GoaMusic or %NULL to clear the interface.
     */
    set_music(interface_: Music | null): void
    /**
     * Sets the #GoaOAuth2Based instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page">org.gnome.OnlineAccounts.OAuth2Based</link> on `object`.
     * @param interface_ A #GoaOAuth2Based or %NULL to clear the interface.
     */
    set_oauth2_based(interface_: OAuth2Based | null): void
    /**
     * Sets the #GoaOAuthBased instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page">org.gnome.OnlineAccounts.OAuthBased</link> on `object`.
     * @param interface_ A #GoaOAuthBased or %NULL to clear the interface.
     */
    set_oauth_based(interface_: OAuthBased | null): void
    /**
     * Sets the #GoaPasswordBased instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page">org.gnome.OnlineAccounts.PasswordBased</link> on `object`.
     * @param interface_ A #GoaPasswordBased or %NULL to clear the interface.
     */
    set_password_based(interface_: PasswordBased | null): void
    /**
     * Sets the #GoaPhotos instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Photos.top_of_page">org.gnome.OnlineAccounts.Photos</link> on `object`.
     * @param interface_ A #GoaPhotos or %NULL to clear the interface.
     */
    set_photos(interface_: Photos | null): void
    /**
     * Sets the #GoaPrinters instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Printers.top_of_page">org.gnome.OnlineAccounts.Printers</link> on `object`.
     * @param interface_ A #GoaPrinters or %NULL to clear the interface.
     */
    set_printers(interface_: Printers | null): void
    /**
     * Sets the #GoaReadLater instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page">org.gnome.OnlineAccounts.ReadLater</link> on `object`.
     * @param interface_ A #GoaReadLater or %NULL to clear the interface.
     */
    set_read_later(interface_: ReadLater | null): void
    /**
     * Sets the #GoaTicketing instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Ticketing.top_of_page">org.gnome.OnlineAccounts.Ticketing</link> on `object`.
     * @param interface_ A #GoaTicketing or %NULL to clear the interface.
     */
    set_ticketing(interface_: Ticketing | null): void
    /**
     * Sets the #GoaTodo instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Todo.top_of_page">org.gnome.OnlineAccounts.Todo</link> on `object`.
     * @param interface_ A #GoaTodo or %NULL to clear the interface.
     */
    set_todo(interface_: Todo | null): void

    // Class property signals of Goa-1.0.Goa.ObjectSkeleton

    connect(sigName: "notify::g-object-path", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::account", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::account", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::account", ...args: any[]): void
    connect(sigName: "notify::calendar", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::calendar", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::calendar", ...args: any[]): void
    connect(sigName: "notify::chat", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::chat", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::chat", ...args: any[]): void
    connect(sigName: "notify::contacts", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contacts", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::contacts", ...args: any[]): void
    connect(sigName: "notify::documents", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::documents", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::documents", ...args: any[]): void
    connect(sigName: "notify::exchange", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::exchange", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::exchange", ...args: any[]): void
    connect(sigName: "notify::files", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::files", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::files", ...args: any[]): void
    connect(sigName: "notify::mail", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mail", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mail", ...args: any[]): void
    connect(sigName: "notify::manager", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manager", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::manager", ...args: any[]): void
    connect(sigName: "notify::maps", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maps", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::maps", ...args: any[]): void
    connect(sigName: "notify::media-server", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-server", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::media-server", ...args: any[]): void
    connect(sigName: "notify::music", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::music", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::music", ...args: any[]): void
    connect(sigName: "notify::oauth-based", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::oauth-based", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::oauth-based", ...args: any[]): void
    connect(sigName: "notify::oauth2-based", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::oauth2-based", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::oauth2-based", ...args: any[]): void
    connect(sigName: "notify::password-based", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::password-based", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::password-based", ...args: any[]): void
    connect(sigName: "notify::photos", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::photos", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::photos", ...args: any[]): void
    connect(sigName: "notify::printers", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::printers", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::printers", ...args: any[]): void
    connect(sigName: "notify::read-later", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::read-later", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::read-later", ...args: any[]): void
    connect(sigName: "notify::ticketing", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ticketing", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ticketing", ...args: any[]): void
    connect(sigName: "notify::todo", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::todo", callback: (($obj: ObjectSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::todo", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaObjectSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class ObjectSkeleton extends Gio.DBusObjectSkeleton {

    // Own properties of Goa-1.0.Goa.ObjectSkeleton

    static name: string
    static $gtype: GObject.GType<ObjectSkeleton>

    // Constructors of Goa-1.0.Goa.ObjectSkeleton

    constructor(config?: ObjectSkeleton.ConstructorProperties) 
    /**
     * Creates a new skeleton object.
     * @constructor 
     * @param object_path An object path.
     * @returns The skeleton object.
     */
    constructor(object_path: string | null) 
    /**
     * Creates a new skeleton object.
     * @constructor 
     * @param object_path An object path.
     * @returns The skeleton object.
     */
    static new(object_path: string | null): ObjectSkeleton

    // Overloads of new

    /**
     * Creates a new #GDBusObjectSkeleton.
     * @constructor 
     * @param object_path An object path.
     * @returns A #GDBusObjectSkeleton. Free with g_object_unref().
     */
    static new(object_path: string | null): Gio.DBusObjectSkeleton
    _init(config?: ObjectSkeleton.ConstructorProperties): void
}

module PasswordBasedProxy {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, PasswordBased.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface PasswordBasedProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, PasswordBased {

    // Class property signals of Goa-1.0.Goa.PasswordBasedProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: PasswordBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: PasswordBasedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: PasswordBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: PasswordBasedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: PasswordBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: PasswordBasedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: PasswordBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: PasswordBasedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: PasswordBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: PasswordBasedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: PasswordBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: PasswordBasedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: PasswordBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: PasswordBasedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: PasswordBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: PasswordBasedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: PasswordBasedProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: PasswordBasedProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaPasswordBasedProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class PasswordBasedProxy extends Gio.DBusProxy {

    // Own properties of Goa-1.0.Goa.PasswordBasedProxy

    static name: string
    static $gtype: GObject.GType<PasswordBasedProxy>

    // Constructors of Goa-1.0.Goa.PasswordBasedProxy

    constructor(config?: PasswordBasedProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_password_based_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_password_based_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_finish(res: Gio.AsyncResult): PasswordBasedProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_password_based_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_password_based_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_finish(res: Gio.AsyncResult): PasswordBasedProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_password_based_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_password_based_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): PasswordBasedProxy

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
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page">org.gnome.OnlineAccounts.PasswordBased</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_password_based_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): PasswordBasedProxy

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
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: PasswordBasedProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page">org.gnome.OnlineAccounts.PasswordBased</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_password_based_proxy_new_finish() to get the result of the operation.
     * 
     * See goa_password_based_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<PasswordBasedProxy> | null): void

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
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<PasswordBasedProxy> | null): void

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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module PasswordBasedSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, PasswordBased.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface PasswordBasedSkeleton extends Gio.DBusInterface, PasswordBased {

    // Class property signals of Goa-1.0.Goa.PasswordBasedSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: PasswordBasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: PasswordBasedSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaPasswordBasedSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class PasswordBasedSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Goa-1.0.Goa.PasswordBasedSkeleton

    static name: string
    static $gtype: GObject.GType<PasswordBasedSkeleton>

    // Constructors of Goa-1.0.Goa.PasswordBasedSkeleton

    constructor(config?: PasswordBasedSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page">org.gnome.OnlineAccounts.PasswordBased</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page">org.gnome.OnlineAccounts.PasswordBased</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    static new(): PasswordBasedSkeleton
    _init(config?: PasswordBasedSkeleton.ConstructorProperties): void
}

module PhotosProxy {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Photos.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface PhotosProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Photos {

    // Class property signals of Goa-1.0.Goa.PhotosProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: PhotosProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: PhotosProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: PhotosProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: PhotosProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: PhotosProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: PhotosProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: PhotosProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: PhotosProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: PhotosProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: PhotosProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: PhotosProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: PhotosProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: PhotosProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: PhotosProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: PhotosProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: PhotosProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: PhotosProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: PhotosProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaPhotosProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class PhotosProxy extends Gio.DBusProxy {

    // Own properties of Goa-1.0.Goa.PhotosProxy

    static name: string
    static $gtype: GObject.GType<PhotosProxy>

    // Constructors of Goa-1.0.Goa.PhotosProxy

    constructor(config?: PhotosProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_photos_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_photos_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_finish(res: Gio.AsyncResult): PhotosProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_photos_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_photos_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_finish(res: Gio.AsyncResult): PhotosProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_photos_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_photos_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): PhotosProxy

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
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Photos.top_of_page">org.gnome.OnlineAccounts.Photos</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_photos_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): PhotosProxy

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
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: PhotosProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Photos.top_of_page">org.gnome.OnlineAccounts.Photos</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_photos_proxy_new_finish() to get the result of the operation.
     * 
     * See goa_photos_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<PhotosProxy> | null): void

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
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<PhotosProxy> | null): void

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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module PhotosSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Photos.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface PhotosSkeleton extends Gio.DBusInterface, Photos {

    // Class property signals of Goa-1.0.Goa.PhotosSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: PhotosSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: PhotosSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaPhotosSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class PhotosSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Goa-1.0.Goa.PhotosSkeleton

    static name: string
    static $gtype: GObject.GType<PhotosSkeleton>

    // Constructors of Goa-1.0.Goa.PhotosSkeleton

    constructor(config?: PhotosSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Photos.top_of_page">org.gnome.OnlineAccounts.Photos</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Photos.top_of_page">org.gnome.OnlineAccounts.Photos</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    static new(): PhotosSkeleton
    _init(config?: PhotosSkeleton.ConstructorProperties): void
}

module PrintersProxy {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Printers.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface PrintersProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Printers {

    // Class property signals of Goa-1.0.Goa.PrintersProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: PrintersProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: PrintersProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: PrintersProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: PrintersProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: PrintersProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: PrintersProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: PrintersProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: PrintersProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: PrintersProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: PrintersProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: PrintersProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: PrintersProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: PrintersProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: PrintersProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: PrintersProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: PrintersProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: PrintersProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: PrintersProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaPrintersProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class PrintersProxy extends Gio.DBusProxy {

    // Own properties of Goa-1.0.Goa.PrintersProxy

    static name: string
    static $gtype: GObject.GType<PrintersProxy>

    // Constructors of Goa-1.0.Goa.PrintersProxy

    constructor(config?: PrintersProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_printers_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_printers_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_finish(res: Gio.AsyncResult): PrintersProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_printers_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_printers_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_finish(res: Gio.AsyncResult): PrintersProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_printers_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_printers_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): PrintersProxy

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
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Printers.top_of_page">org.gnome.OnlineAccounts.Printers</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_printers_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): PrintersProxy

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
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: PrintersProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Printers.top_of_page">org.gnome.OnlineAccounts.Printers</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_printers_proxy_new_finish() to get the result of the operation.
     * 
     * See goa_printers_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<PrintersProxy> | null): void

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
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<PrintersProxy> | null): void

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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module PrintersSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Printers.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface PrintersSkeleton extends Gio.DBusInterface, Printers {

    // Class property signals of Goa-1.0.Goa.PrintersSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: PrintersSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: PrintersSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaPrintersSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class PrintersSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Goa-1.0.Goa.PrintersSkeleton

    static name: string
    static $gtype: GObject.GType<PrintersSkeleton>

    // Constructors of Goa-1.0.Goa.PrintersSkeleton

    constructor(config?: PrintersSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Printers.top_of_page">org.gnome.OnlineAccounts.Printers</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Printers.top_of_page">org.gnome.OnlineAccounts.Printers</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    static new(): PrintersSkeleton
    _init(config?: PrintersSkeleton.ConstructorProperties): void
}

module ReadLaterProxy {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, ReadLater.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface ReadLaterProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, ReadLater {

    // Class property signals of Goa-1.0.Goa.ReadLaterProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: ReadLaterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: ReadLaterProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: ReadLaterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: ReadLaterProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ReadLaterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ReadLaterProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: ReadLaterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ReadLaterProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: ReadLaterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ReadLaterProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: ReadLaterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: ReadLaterProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: ReadLaterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: ReadLaterProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: ReadLaterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ReadLaterProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: ReadLaterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: ReadLaterProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaReadLaterProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class ReadLaterProxy extends Gio.DBusProxy {

    // Own properties of Goa-1.0.Goa.ReadLaterProxy

    static name: string
    static $gtype: GObject.GType<ReadLaterProxy>

    // Constructors of Goa-1.0.Goa.ReadLaterProxy

    constructor(config?: ReadLaterProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_read_later_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_read_later_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_finish(res: Gio.AsyncResult): ReadLaterProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_read_later_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_read_later_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_finish(res: Gio.AsyncResult): ReadLaterProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_read_later_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_read_later_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): ReadLaterProxy

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
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page">org.gnome.OnlineAccounts.ReadLater</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_read_later_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): ReadLaterProxy

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
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: ReadLaterProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page">org.gnome.OnlineAccounts.ReadLater</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_read_later_proxy_new_finish() to get the result of the operation.
     * 
     * See goa_read_later_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<ReadLaterProxy> | null): void

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
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<ReadLaterProxy> | null): void

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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module ReadLaterSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, ReadLater.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface ReadLaterSkeleton extends Gio.DBusInterface, ReadLater {

    // Class property signals of Goa-1.0.Goa.ReadLaterSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: ReadLaterSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ReadLaterSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaReadLaterSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class ReadLaterSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Goa-1.0.Goa.ReadLaterSkeleton

    static name: string
    static $gtype: GObject.GType<ReadLaterSkeleton>

    // Constructors of Goa-1.0.Goa.ReadLaterSkeleton

    constructor(config?: ReadLaterSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page">org.gnome.OnlineAccounts.ReadLater</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page">org.gnome.OnlineAccounts.ReadLater</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    static new(): ReadLaterSkeleton
    _init(config?: ReadLaterSkeleton.ConstructorProperties): void
}

module TicketingProxy {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Ticketing.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface TicketingProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Ticketing {

    // Class property signals of Goa-1.0.Goa.TicketingProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: TicketingProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: TicketingProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: TicketingProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: TicketingProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: TicketingProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: TicketingProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: TicketingProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: TicketingProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: TicketingProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: TicketingProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: TicketingProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: TicketingProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: TicketingProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: TicketingProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: TicketingProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: TicketingProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: TicketingProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: TicketingProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::details", callback: (($obj: TicketingProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::details", callback: (($obj: TicketingProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::details", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaTicketingProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class TicketingProxy extends Gio.DBusProxy {

    // Own properties of Goa-1.0.Goa.TicketingProxy

    static name: string
    static $gtype: GObject.GType<TicketingProxy>

    // Constructors of Goa-1.0.Goa.TicketingProxy

    constructor(config?: TicketingProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_ticketing_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_ticketing_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_finish(res: Gio.AsyncResult): TicketingProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_ticketing_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_ticketing_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_finish(res: Gio.AsyncResult): TicketingProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_ticketing_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_ticketing_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): TicketingProxy

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
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Ticketing.top_of_page">org.gnome.OnlineAccounts.Ticketing</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_ticketing_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): TicketingProxy

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
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: TicketingProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Ticketing.top_of_page">org.gnome.OnlineAccounts.Ticketing</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_ticketing_proxy_new_finish() to get the result of the operation.
     * 
     * See goa_ticketing_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<TicketingProxy> | null): void

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
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<TicketingProxy> | null): void

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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module TicketingSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Ticketing.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface TicketingSkeleton extends Gio.DBusInterface, Ticketing {

    // Class property signals of Goa-1.0.Goa.TicketingSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: TicketingSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: TicketingSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::details", callback: (($obj: TicketingSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::details", callback: (($obj: TicketingSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::details", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaTicketingSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class TicketingSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Goa-1.0.Goa.TicketingSkeleton

    static name: string
    static $gtype: GObject.GType<TicketingSkeleton>

    // Constructors of Goa-1.0.Goa.TicketingSkeleton

    constructor(config?: TicketingSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Ticketing.top_of_page">org.gnome.OnlineAccounts.Ticketing</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Ticketing.top_of_page">org.gnome.OnlineAccounts.Ticketing</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    static new(): TicketingSkeleton
    _init(config?: TicketingSkeleton.ConstructorProperties): void
}

module TodoProxy {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Todo.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface TodoProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Todo {

    // Class property signals of Goa-1.0.Goa.TodoProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: TodoProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: TodoProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: TodoProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: TodoProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: TodoProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: TodoProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: TodoProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: TodoProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: TodoProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: TodoProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: TodoProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: TodoProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: TodoProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: TodoProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: TodoProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: TodoProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: TodoProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: TodoProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaTodoProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class TodoProxy extends Gio.DBusProxy {

    // Own properties of Goa-1.0.Goa.TodoProxy

    static name: string
    static $gtype: GObject.GType<TodoProxy>

    // Constructors of Goa-1.0.Goa.TodoProxy

    constructor(config?: TodoProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_todo_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_todo_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_finish(res: Gio.AsyncResult): TodoProxy

    // Overloads of new_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_todo_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_todo_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_finish(res: Gio.AsyncResult): TodoProxy

    // Overloads of new_for_bus_finish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static new_for_bus_finish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_todo_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_todo_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param bus_type A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): TodoProxy

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
    static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    /**
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Todo.top_of_page">org.gnome.OnlineAccounts.Todo</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_todo_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null): TodoProxy

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
    static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null): Gio.DBusProxy
    _init(config?: TodoProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Todo.top_of_page">org.gnome.OnlineAccounts.Todo</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_todo_proxy_new_finish() to get the result of the operation.
     * 
     * See goa_todo_proxy_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<TodoProxy> | null): void

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
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, object_path: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<TodoProxy> | null): void

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
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string | null, interface_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module TodoSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Todo.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface TodoSkeleton extends Gio.DBusInterface, Todo {

    // Class property signals of Goa-1.0.Goa.TodoSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: TodoSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: TodoSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #GoaTodoSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class TodoSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Goa-1.0.Goa.TodoSkeleton

    static name: string
    static $gtype: GObject.GType<TodoSkeleton>

    // Constructors of Goa-1.0.Goa.TodoSkeleton

    constructor(config?: TodoSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Todo.top_of_page">org.gnome.OnlineAccounts.Todo</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Todo.top_of_page">org.gnome.OnlineAccounts.Todo</link>.
     * @constructor 
     * @returns The skeleton object.
     */
    static new(): TodoSkeleton
    _init(config?: TodoSkeleton.ConstructorProperties): void
}

interface AccountIface {

    // Own fields of Goa-1.0.Goa.AccountIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    handle_ensure_credentials: (object: Account, invocation: Gio.DBusMethodInvocation) => boolean
    handle_remove: (object: Account, invocation: Gio.DBusMethodInvocation) => boolean
    get_attention_needed: (object: Account) => boolean
    get_calendar_disabled: (object: Account) => boolean
    get_chat_disabled: (object: Account) => boolean
    get_contacts_disabled: (object: Account) => boolean
    get_documents_disabled: (object: Account) => boolean
    get_id: (object: Account) => string | null
    get_identity: (object: Account) => string | null
    get_is_temporary: (object: Account) => boolean
    get_mail_disabled: (object: Account) => boolean
    get_presentation_identity: (object: Account) => string | null
    get_provider_icon: (object: Account) => string | null
    get_provider_name: (object: Account) => string | null
    get_provider_type: (object: Account) => string | null
    get_ticketing_disabled: (object: Account) => boolean
    get_files_disabled: (object: Account) => boolean
    get_photos_disabled: (object: Account) => boolean
    get_printers_disabled: (object: Account) => boolean
    get_read_later_disabled: (object: Account) => boolean
    get_maps_disabled: (object: Account) => boolean
    get_is_locked: (object: Account) => boolean
    get_music_disabled: (object: Account) => boolean
    get_todo_disabled: (object: Account) => boolean
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Account.top_of_page">org.gnome.OnlineAccounts.Account</link>.
 * @record 
 */
abstract class AccountIface {

    // Own properties of Goa-1.0.Goa.AccountIface

    static name: string
}

interface AccountProxyClass {

    // Own fields of Goa-1.0.Goa.AccountProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #GoaAccountProxy.
 * @record 
 */
abstract class AccountProxyClass {

    // Own properties of Goa-1.0.Goa.AccountProxyClass

    static name: string
}

interface AccountProxyPrivate {
}

class AccountProxyPrivate {

    // Own properties of Goa-1.0.Goa.AccountProxyPrivate

    static name: string
}

interface AccountSkeletonClass {

    // Own fields of Goa-1.0.Goa.AccountSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GoaAccountSkeleton.
 * @record 
 */
abstract class AccountSkeletonClass {

    // Own properties of Goa-1.0.Goa.AccountSkeletonClass

    static name: string
}

interface AccountSkeletonPrivate {
}

class AccountSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.AccountSkeletonPrivate

    static name: string
}

interface CalendarIface {

    // Own fields of Goa-1.0.Goa.CalendarIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    get_accept_ssl_errors: (object: Calendar) => boolean
    get_uri: (object: Calendar) => string | null
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Calendar.top_of_page">org.gnome.OnlineAccounts.Calendar</link>.
 * @record 
 */
abstract class CalendarIface {

    // Own properties of Goa-1.0.Goa.CalendarIface

    static name: string
}

interface CalendarProxyClass {

    // Own fields of Goa-1.0.Goa.CalendarProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #GoaCalendarProxy.
 * @record 
 */
abstract class CalendarProxyClass {

    // Own properties of Goa-1.0.Goa.CalendarProxyClass

    static name: string
}

interface CalendarProxyPrivate {
}

class CalendarProxyPrivate {

    // Own properties of Goa-1.0.Goa.CalendarProxyPrivate

    static name: string
}

interface CalendarSkeletonClass {

    // Own fields of Goa-1.0.Goa.CalendarSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GoaCalendarSkeleton.
 * @record 
 */
abstract class CalendarSkeletonClass {

    // Own properties of Goa-1.0.Goa.CalendarSkeletonClass

    static name: string
}

interface CalendarSkeletonPrivate {
}

class CalendarSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.CalendarSkeletonPrivate

    static name: string
}

interface ChatIface {

    // Own fields of Goa-1.0.Goa.ChatIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Chat.top_of_page">org.gnome.OnlineAccounts.Chat</link>.
 * @record 
 */
abstract class ChatIface {

    // Own properties of Goa-1.0.Goa.ChatIface

    static name: string
}

interface ChatProxyClass {

    // Own fields of Goa-1.0.Goa.ChatProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #GoaChatProxy.
 * @record 
 */
abstract class ChatProxyClass {

    // Own properties of Goa-1.0.Goa.ChatProxyClass

    static name: string
}

interface ChatProxyPrivate {
}

class ChatProxyPrivate {

    // Own properties of Goa-1.0.Goa.ChatProxyPrivate

    static name: string
}

interface ChatSkeletonClass {

    // Own fields of Goa-1.0.Goa.ChatSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GoaChatSkeleton.
 * @record 
 */
abstract class ChatSkeletonClass {

    // Own properties of Goa-1.0.Goa.ChatSkeletonClass

    static name: string
}

interface ChatSkeletonPrivate {
}

class ChatSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.ChatSkeletonPrivate

    static name: string
}

interface ClientClass {

    // Own fields of Goa-1.0.Goa.ClientClass

    parent_class: GObject.ObjectClass
}

abstract class ClientClass {

    // Own properties of Goa-1.0.Goa.ClientClass

    static name: string
}

interface ContactsIface {

    // Own fields of Goa-1.0.Goa.ContactsIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    get_accept_ssl_errors: (object: Contacts) => boolean
    get_uri: (object: Contacts) => string | null
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Contacts.top_of_page">org.gnome.OnlineAccounts.Contacts</link>.
 * @record 
 */
abstract class ContactsIface {

    // Own properties of Goa-1.0.Goa.ContactsIface

    static name: string
}

interface ContactsProxyClass {

    // Own fields of Goa-1.0.Goa.ContactsProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #GoaContactsProxy.
 * @record 
 */
abstract class ContactsProxyClass {

    // Own properties of Goa-1.0.Goa.ContactsProxyClass

    static name: string
}

interface ContactsProxyPrivate {
}

class ContactsProxyPrivate {

    // Own properties of Goa-1.0.Goa.ContactsProxyPrivate

    static name: string
}

interface ContactsSkeletonClass {

    // Own fields of Goa-1.0.Goa.ContactsSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GoaContactsSkeleton.
 * @record 
 */
abstract class ContactsSkeletonClass {

    // Own properties of Goa-1.0.Goa.ContactsSkeletonClass

    static name: string
}

interface ContactsSkeletonPrivate {
}

class ContactsSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.ContactsSkeletonPrivate

    static name: string
}

interface DocumentsIface {

    // Own fields of Goa-1.0.Goa.DocumentsIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Documents.top_of_page">org.gnome.OnlineAccounts.Documents</link>.
 * @record 
 */
abstract class DocumentsIface {

    // Own properties of Goa-1.0.Goa.DocumentsIface

    static name: string
}

interface DocumentsProxyClass {

    // Own fields of Goa-1.0.Goa.DocumentsProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #GoaDocumentsProxy.
 * @record 
 */
abstract class DocumentsProxyClass {

    // Own properties of Goa-1.0.Goa.DocumentsProxyClass

    static name: string
}

interface DocumentsProxyPrivate {
}

class DocumentsProxyPrivate {

    // Own properties of Goa-1.0.Goa.DocumentsProxyPrivate

    static name: string
}

interface DocumentsSkeletonClass {

    // Own fields of Goa-1.0.Goa.DocumentsSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GoaDocumentsSkeleton.
 * @record 
 */
abstract class DocumentsSkeletonClass {

    // Own properties of Goa-1.0.Goa.DocumentsSkeletonClass

    static name: string
}

interface DocumentsSkeletonPrivate {
}

class DocumentsSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.DocumentsSkeletonPrivate

    static name: string
}

interface ExchangeIface {

    // Own fields of Goa-1.0.Goa.ExchangeIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    get_host: (object: Exchange) => string | null
    get_accept_ssl_errors: (object: Exchange) => boolean
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Exchange.top_of_page">org.gnome.OnlineAccounts.Exchange</link>.
 * @record 
 */
abstract class ExchangeIface {

    // Own properties of Goa-1.0.Goa.ExchangeIface

    static name: string
}

interface ExchangeProxyClass {

    // Own fields of Goa-1.0.Goa.ExchangeProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #GoaExchangeProxy.
 * @record 
 */
abstract class ExchangeProxyClass {

    // Own properties of Goa-1.0.Goa.ExchangeProxyClass

    static name: string
}

interface ExchangeProxyPrivate {
}

class ExchangeProxyPrivate {

    // Own properties of Goa-1.0.Goa.ExchangeProxyPrivate

    static name: string
}

interface ExchangeSkeletonClass {

    // Own fields of Goa-1.0.Goa.ExchangeSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GoaExchangeSkeleton.
 * @record 
 */
abstract class ExchangeSkeletonClass {

    // Own properties of Goa-1.0.Goa.ExchangeSkeletonClass

    static name: string
}

interface ExchangeSkeletonPrivate {
}

class ExchangeSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.ExchangeSkeletonPrivate

    static name: string
}

interface FilesIface {

    // Own fields of Goa-1.0.Goa.FilesIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    get_accept_ssl_errors: (object: Files) => boolean
    get_uri: (object: Files) => string | null
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Files.top_of_page">org.gnome.OnlineAccounts.Files</link>.
 * @record 
 */
abstract class FilesIface {

    // Own properties of Goa-1.0.Goa.FilesIface

    static name: string
}

interface FilesProxyClass {

    // Own fields of Goa-1.0.Goa.FilesProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #GoaFilesProxy.
 * @record 
 */
abstract class FilesProxyClass {

    // Own properties of Goa-1.0.Goa.FilesProxyClass

    static name: string
}

interface FilesProxyPrivate {
}

class FilesProxyPrivate {

    // Own properties of Goa-1.0.Goa.FilesProxyPrivate

    static name: string
}

interface FilesSkeletonClass {

    // Own fields of Goa-1.0.Goa.FilesSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GoaFilesSkeleton.
 * @record 
 */
abstract class FilesSkeletonClass {

    // Own properties of Goa-1.0.Goa.FilesSkeletonClass

    static name: string
}

interface FilesSkeletonPrivate {
}

class FilesSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.FilesSkeletonPrivate

    static name: string
}

interface MailIface {

    // Own fields of Goa-1.0.Goa.MailIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    get_email_address: (object: Mail) => string | null
    get_imap_host: (object: Mail) => string | null
    get_imap_supported: (object: Mail) => boolean
    get_imap_use_tls: (object: Mail) => boolean
    get_imap_user_name: (object: Mail) => string | null
    get_smtp_host: (object: Mail) => string | null
    get_smtp_supported: (object: Mail) => boolean
    get_smtp_use_tls: (object: Mail) => boolean
    get_smtp_user_name: (object: Mail) => string | null
    get_imap_accept_ssl_errors: (object: Mail) => boolean
    get_imap_use_ssl: (object: Mail) => boolean
    get_name: (object: Mail) => string | null
    get_smtp_accept_ssl_errors: (object: Mail) => boolean
    get_smtp_use_auth: (object: Mail) => boolean
    get_smtp_use_ssl: (object: Mail) => boolean
    get_smtp_auth_login: (object: Mail) => boolean
    get_smtp_auth_plain: (object: Mail) => boolean
    get_smtp_auth_xoauth2: (object: Mail) => boolean
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Mail.top_of_page">org.gnome.OnlineAccounts.Mail</link>.
 * @record 
 */
abstract class MailIface {

    // Own properties of Goa-1.0.Goa.MailIface

    static name: string
}

interface MailProxyClass {

    // Own fields of Goa-1.0.Goa.MailProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #GoaMailProxy.
 * @record 
 */
abstract class MailProxyClass {

    // Own properties of Goa-1.0.Goa.MailProxyClass

    static name: string
}

interface MailProxyPrivate {
}

class MailProxyPrivate {

    // Own properties of Goa-1.0.Goa.MailProxyPrivate

    static name: string
}

interface MailSkeletonClass {

    // Own fields of Goa-1.0.Goa.MailSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GoaMailSkeleton.
 * @record 
 */
abstract class MailSkeletonClass {

    // Own properties of Goa-1.0.Goa.MailSkeletonClass

    static name: string
}

interface MailSkeletonPrivate {
}

class MailSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.MailSkeletonPrivate

    static name: string
}

interface ManagerIface {

    // Own fields of Goa-1.0.Goa.ManagerIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    handle_add_account: (object: Manager, invocation: Gio.DBusMethodInvocation, arg_provider: string | null, arg_identity: string | null, arg_presentation_identity: string | null, arg_credentials: GLib.Variant, arg_details: GLib.Variant) => boolean
    handle_is_supported_provider: (object: Manager, invocation: Gio.DBusMethodInvocation, arg_provider_type: string | null) => boolean
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Manager.top_of_page">org.gnome.OnlineAccounts.Manager</link>.
 * @record 
 */
abstract class ManagerIface {

    // Own properties of Goa-1.0.Goa.ManagerIface

    static name: string
}

interface ManagerProxyClass {

    // Own fields of Goa-1.0.Goa.ManagerProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #GoaManagerProxy.
 * @record 
 */
abstract class ManagerProxyClass {

    // Own properties of Goa-1.0.Goa.ManagerProxyClass

    static name: string
}

interface ManagerProxyPrivate {
}

class ManagerProxyPrivate {

    // Own properties of Goa-1.0.Goa.ManagerProxyPrivate

    static name: string
}

interface ManagerSkeletonClass {

    // Own fields of Goa-1.0.Goa.ManagerSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GoaManagerSkeleton.
 * @record 
 */
abstract class ManagerSkeletonClass {

    // Own properties of Goa-1.0.Goa.ManagerSkeletonClass

    static name: string
}

interface ManagerSkeletonPrivate {
}

class ManagerSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.ManagerSkeletonPrivate

    static name: string
}

interface MapsIface {

    // Own fields of Goa-1.0.Goa.MapsIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Maps.top_of_page">org.gnome.OnlineAccounts.Maps</link>.
 * @record 
 */
abstract class MapsIface {

    // Own properties of Goa-1.0.Goa.MapsIface

    static name: string
}

interface MapsProxyClass {

    // Own fields of Goa-1.0.Goa.MapsProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #GoaMapsProxy.
 * @record 
 */
abstract class MapsProxyClass {

    // Own properties of Goa-1.0.Goa.MapsProxyClass

    static name: string
}

interface MapsProxyPrivate {
}

class MapsProxyPrivate {

    // Own properties of Goa-1.0.Goa.MapsProxyPrivate

    static name: string
}

interface MapsSkeletonClass {

    // Own fields of Goa-1.0.Goa.MapsSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GoaMapsSkeleton.
 * @record 
 */
abstract class MapsSkeletonClass {

    // Own properties of Goa-1.0.Goa.MapsSkeletonClass

    static name: string
}

interface MapsSkeletonPrivate {
}

class MapsSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.MapsSkeletonPrivate

    static name: string
}

interface MediaServerIface {

    // Own fields of Goa-1.0.Goa.MediaServerIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    get_dlna_supported: (object: MediaServer) => boolean
    get_udn: (object: MediaServer) => string | null
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page">org.gnome.OnlineAccounts.MediaServer</link>.
 * @record 
 */
abstract class MediaServerIface {

    // Own properties of Goa-1.0.Goa.MediaServerIface

    static name: string
}

interface MediaServerProxyClass {

    // Own fields of Goa-1.0.Goa.MediaServerProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #GoaMediaServerProxy.
 * @record 
 */
abstract class MediaServerProxyClass {

    // Own properties of Goa-1.0.Goa.MediaServerProxyClass

    static name: string
}

interface MediaServerProxyPrivate {
}

class MediaServerProxyPrivate {

    // Own properties of Goa-1.0.Goa.MediaServerProxyPrivate

    static name: string
}

interface MediaServerSkeletonClass {

    // Own fields of Goa-1.0.Goa.MediaServerSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GoaMediaServerSkeleton.
 * @record 
 */
abstract class MediaServerSkeletonClass {

    // Own properties of Goa-1.0.Goa.MediaServerSkeletonClass

    static name: string
}

interface MediaServerSkeletonPrivate {
}

class MediaServerSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.MediaServerSkeletonPrivate

    static name: string
}

interface MusicIface {

    // Own fields of Goa-1.0.Goa.MusicIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Music.top_of_page">org.gnome.OnlineAccounts.Music</link>.
 * @record 
 */
abstract class MusicIface {

    // Own properties of Goa-1.0.Goa.MusicIface

    static name: string
}

interface MusicProxyClass {

    // Own fields of Goa-1.0.Goa.MusicProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #GoaMusicProxy.
 * @record 
 */
abstract class MusicProxyClass {

    // Own properties of Goa-1.0.Goa.MusicProxyClass

    static name: string
}

interface MusicProxyPrivate {
}

class MusicProxyPrivate {

    // Own properties of Goa-1.0.Goa.MusicProxyPrivate

    static name: string
}

interface MusicSkeletonClass {

    // Own fields of Goa-1.0.Goa.MusicSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GoaMusicSkeleton.
 * @record 
 */
abstract class MusicSkeletonClass {

    // Own properties of Goa-1.0.Goa.MusicSkeletonClass

    static name: string
}

interface MusicSkeletonPrivate {
}

class MusicSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.MusicSkeletonPrivate

    static name: string
}

interface OAuth2BasedIface {

    // Own fields of Goa-1.0.Goa.OAuth2BasedIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    handle_get_access_token: (object: OAuth2Based, invocation: Gio.DBusMethodInvocation) => boolean
    get_client_id: (object: OAuth2Based) => string | null
    get_client_secret: (object: OAuth2Based) => string | null
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page">org.gnome.OnlineAccounts.OAuth2Based</link>.
 * @record 
 */
abstract class OAuth2BasedIface {

    // Own properties of Goa-1.0.Goa.OAuth2BasedIface

    static name: string
}

interface OAuth2BasedProxyClass {

    // Own fields of Goa-1.0.Goa.OAuth2BasedProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #GoaOAuth2BasedProxy.
 * @record 
 */
abstract class OAuth2BasedProxyClass {

    // Own properties of Goa-1.0.Goa.OAuth2BasedProxyClass

    static name: string
}

interface OAuth2BasedProxyPrivate {
}

class OAuth2BasedProxyPrivate {

    // Own properties of Goa-1.0.Goa.OAuth2BasedProxyPrivate

    static name: string
}

interface OAuth2BasedSkeletonClass {

    // Own fields of Goa-1.0.Goa.OAuth2BasedSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GoaOAuth2BasedSkeleton.
 * @record 
 */
abstract class OAuth2BasedSkeletonClass {

    // Own properties of Goa-1.0.Goa.OAuth2BasedSkeletonClass

    static name: string
}

interface OAuth2BasedSkeletonPrivate {
}

class OAuth2BasedSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.OAuth2BasedSkeletonPrivate

    static name: string
}

interface OAuthBasedIface {

    // Own fields of Goa-1.0.Goa.OAuthBasedIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    handle_get_access_token: (object: OAuthBased, invocation: Gio.DBusMethodInvocation) => boolean
    get_consumer_key: (object: OAuthBased) => string | null
    get_consumer_secret: (object: OAuthBased) => string | null
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page">org.gnome.OnlineAccounts.OAuthBased</link>.
 * @record 
 */
abstract class OAuthBasedIface {

    // Own properties of Goa-1.0.Goa.OAuthBasedIface

    static name: string
}

interface OAuthBasedProxyClass {

    // Own fields of Goa-1.0.Goa.OAuthBasedProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #GoaOAuthBasedProxy.
 * @record 
 */
abstract class OAuthBasedProxyClass {

    // Own properties of Goa-1.0.Goa.OAuthBasedProxyClass

    static name: string
}

interface OAuthBasedProxyPrivate {
}

class OAuthBasedProxyPrivate {

    // Own properties of Goa-1.0.Goa.OAuthBasedProxyPrivate

    static name: string
}

interface OAuthBasedSkeletonClass {

    // Own fields of Goa-1.0.Goa.OAuthBasedSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GoaOAuthBasedSkeleton.
 * @record 
 */
abstract class OAuthBasedSkeletonClass {

    // Own properties of Goa-1.0.Goa.OAuthBasedSkeletonClass

    static name: string
}

interface OAuthBasedSkeletonPrivate {
}

class OAuthBasedSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.OAuthBasedSkeletonPrivate

    static name: string
}

interface ObjectIface {

    // Own fields of Goa-1.0.Goa.ObjectIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
}

/**
 * Virtual table for the #GoaObject interface.
 * @record 
 */
abstract class ObjectIface {

    // Own properties of Goa-1.0.Goa.ObjectIface

    static name: string
}

interface ObjectManagerClientClass {

    // Own fields of Goa-1.0.Goa.ObjectManagerClientClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusObjectManagerClientClass
}

/**
 * Class structure for #GoaObjectManagerClient.
 * @record 
 */
abstract class ObjectManagerClientClass {

    // Own properties of Goa-1.0.Goa.ObjectManagerClientClass

    static name: string
}

interface ObjectManagerClientPrivate {
}

class ObjectManagerClientPrivate {

    // Own properties of Goa-1.0.Goa.ObjectManagerClientPrivate

    static name: string
}

interface ObjectProxyClass {

    // Own fields of Goa-1.0.Goa.ObjectProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusObjectProxyClass
}

/**
 * Class structure for #GoaObjectProxy.
 * @record 
 */
abstract class ObjectProxyClass {

    // Own properties of Goa-1.0.Goa.ObjectProxyClass

    static name: string
}

interface ObjectProxyPrivate {
}

class ObjectProxyPrivate {

    // Own properties of Goa-1.0.Goa.ObjectProxyPrivate

    static name: string
}

interface ObjectSkeletonClass {

    // Own fields of Goa-1.0.Goa.ObjectSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusObjectSkeletonClass
}

/**
 * Class structure for #GoaObjectSkeleton.
 * @record 
 */
abstract class ObjectSkeletonClass {

    // Own properties of Goa-1.0.Goa.ObjectSkeletonClass

    static name: string
}

interface ObjectSkeletonPrivate {
}

class ObjectSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.ObjectSkeletonPrivate

    static name: string
}

interface PasswordBasedIface {

    // Own fields of Goa-1.0.Goa.PasswordBasedIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    handle_get_password: (object: PasswordBased, invocation: Gio.DBusMethodInvocation, arg_id: string | null) => boolean
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page">org.gnome.OnlineAccounts.PasswordBased</link>.
 * @record 
 */
abstract class PasswordBasedIface {

    // Own properties of Goa-1.0.Goa.PasswordBasedIface

    static name: string
}

interface PasswordBasedProxyClass {

    // Own fields of Goa-1.0.Goa.PasswordBasedProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #GoaPasswordBasedProxy.
 * @record 
 */
abstract class PasswordBasedProxyClass {

    // Own properties of Goa-1.0.Goa.PasswordBasedProxyClass

    static name: string
}

interface PasswordBasedProxyPrivate {
}

class PasswordBasedProxyPrivate {

    // Own properties of Goa-1.0.Goa.PasswordBasedProxyPrivate

    static name: string
}

interface PasswordBasedSkeletonClass {

    // Own fields of Goa-1.0.Goa.PasswordBasedSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GoaPasswordBasedSkeleton.
 * @record 
 */
abstract class PasswordBasedSkeletonClass {

    // Own properties of Goa-1.0.Goa.PasswordBasedSkeletonClass

    static name: string
}

interface PasswordBasedSkeletonPrivate {
}

class PasswordBasedSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.PasswordBasedSkeletonPrivate

    static name: string
}

interface PhotosIface {

    // Own fields of Goa-1.0.Goa.PhotosIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Photos.top_of_page">org.gnome.OnlineAccounts.Photos</link>.
 * @record 
 */
abstract class PhotosIface {

    // Own properties of Goa-1.0.Goa.PhotosIface

    static name: string
}

interface PhotosProxyClass {

    // Own fields of Goa-1.0.Goa.PhotosProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #GoaPhotosProxy.
 * @record 
 */
abstract class PhotosProxyClass {

    // Own properties of Goa-1.0.Goa.PhotosProxyClass

    static name: string
}

interface PhotosProxyPrivate {
}

class PhotosProxyPrivate {

    // Own properties of Goa-1.0.Goa.PhotosProxyPrivate

    static name: string
}

interface PhotosSkeletonClass {

    // Own fields of Goa-1.0.Goa.PhotosSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GoaPhotosSkeleton.
 * @record 
 */
abstract class PhotosSkeletonClass {

    // Own properties of Goa-1.0.Goa.PhotosSkeletonClass

    static name: string
}

interface PhotosSkeletonPrivate {
}

class PhotosSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.PhotosSkeletonPrivate

    static name: string
}

interface PrintersIface {

    // Own fields of Goa-1.0.Goa.PrintersIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Printers.top_of_page">org.gnome.OnlineAccounts.Printers</link>.
 * @record 
 */
abstract class PrintersIface {

    // Own properties of Goa-1.0.Goa.PrintersIface

    static name: string
}

interface PrintersProxyClass {

    // Own fields of Goa-1.0.Goa.PrintersProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #GoaPrintersProxy.
 * @record 
 */
abstract class PrintersProxyClass {

    // Own properties of Goa-1.0.Goa.PrintersProxyClass

    static name: string
}

interface PrintersProxyPrivate {
}

class PrintersProxyPrivate {

    // Own properties of Goa-1.0.Goa.PrintersProxyPrivate

    static name: string
}

interface PrintersSkeletonClass {

    // Own fields of Goa-1.0.Goa.PrintersSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GoaPrintersSkeleton.
 * @record 
 */
abstract class PrintersSkeletonClass {

    // Own properties of Goa-1.0.Goa.PrintersSkeletonClass

    static name: string
}

interface PrintersSkeletonPrivate {
}

class PrintersSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.PrintersSkeletonPrivate

    static name: string
}

interface ReadLaterIface {

    // Own fields of Goa-1.0.Goa.ReadLaterIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page">org.gnome.OnlineAccounts.ReadLater</link>.
 * @record 
 */
abstract class ReadLaterIface {

    // Own properties of Goa-1.0.Goa.ReadLaterIface

    static name: string
}

interface ReadLaterProxyClass {

    // Own fields of Goa-1.0.Goa.ReadLaterProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #GoaReadLaterProxy.
 * @record 
 */
abstract class ReadLaterProxyClass {

    // Own properties of Goa-1.0.Goa.ReadLaterProxyClass

    static name: string
}

interface ReadLaterProxyPrivate {
}

class ReadLaterProxyPrivate {

    // Own properties of Goa-1.0.Goa.ReadLaterProxyPrivate

    static name: string
}

interface ReadLaterSkeletonClass {

    // Own fields of Goa-1.0.Goa.ReadLaterSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GoaReadLaterSkeleton.
 * @record 
 */
abstract class ReadLaterSkeletonClass {

    // Own properties of Goa-1.0.Goa.ReadLaterSkeletonClass

    static name: string
}

interface ReadLaterSkeletonPrivate {
}

class ReadLaterSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.ReadLaterSkeletonPrivate

    static name: string
}

interface TicketingIface {

    // Own fields of Goa-1.0.Goa.TicketingIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
    handle_get_ticket: (object: Ticketing, invocation: Gio.DBusMethodInvocation) => boolean
    get_details: (object: Ticketing) => GLib.Variant | null
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Ticketing.top_of_page">org.gnome.OnlineAccounts.Ticketing</link>.
 * @record 
 */
abstract class TicketingIface {

    // Own properties of Goa-1.0.Goa.TicketingIface

    static name: string
}

interface TicketingProxyClass {

    // Own fields of Goa-1.0.Goa.TicketingProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #GoaTicketingProxy.
 * @record 
 */
abstract class TicketingProxyClass {

    // Own properties of Goa-1.0.Goa.TicketingProxyClass

    static name: string
}

interface TicketingProxyPrivate {
}

class TicketingProxyPrivate {

    // Own properties of Goa-1.0.Goa.TicketingProxyPrivate

    static name: string
}

interface TicketingSkeletonClass {

    // Own fields of Goa-1.0.Goa.TicketingSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GoaTicketingSkeleton.
 * @record 
 */
abstract class TicketingSkeletonClass {

    // Own properties of Goa-1.0.Goa.TicketingSkeletonClass

    static name: string
}

interface TicketingSkeletonPrivate {
}

class TicketingSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.TicketingSkeletonPrivate

    static name: string
}

interface TodoIface {

    // Own fields of Goa-1.0.Goa.TodoIface

    /**
     * The parent interface.
     * @field 
     */
    parent_iface: GObject.TypeInterface
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Todo.top_of_page">org.gnome.OnlineAccounts.Todo</link>.
 * @record 
 */
abstract class TodoIface {

    // Own properties of Goa-1.0.Goa.TodoIface

    static name: string
}

interface TodoProxyClass {

    // Own fields of Goa-1.0.Goa.TodoProxyClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusProxyClass
}

/**
 * Class structure for #GoaTodoProxy.
 * @record 
 */
abstract class TodoProxyClass {

    // Own properties of Goa-1.0.Goa.TodoProxyClass

    static name: string
}

interface TodoProxyPrivate {
}

class TodoProxyPrivate {

    // Own properties of Goa-1.0.Goa.TodoProxyPrivate

    static name: string
}

interface TodoSkeletonClass {

    // Own fields of Goa-1.0.Goa.TodoSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parent_class: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GoaTodoSkeleton.
 * @record 
 */
abstract class TodoSkeletonClass {

    // Own properties of Goa-1.0.Goa.TodoSkeletonClass

    static name: string
}

interface TodoSkeletonPrivate {
}

class TodoSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.TodoSkeletonPrivate

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

export default Goa;
// END