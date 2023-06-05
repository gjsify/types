
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-goa-1.0-import.d.ts';
    
/**
 * Goa-1.0
 */

import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

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
function accountInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaAccount interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function accountOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Calendar.top_of_page">org.gnome.OnlineAccounts.Calendar</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function calendarInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaCalendar interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function calendarOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Chat.top_of_page">org.gnome.OnlineAccounts.Chat</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function chatInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaChat interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function chatOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
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
 * @param requiredMajor the required major version.
 * @param requiredMinor the required minor version.
 * @param requiredMicro the required micro version.
 * @returns %NULL if the GOA library is compatible with the   given version, or a string describing the version mismatch.   The returned string is owned by GOA and must not be modified   or freed.
 */
function checkVersion(requiredMajor: number, requiredMinor: number, requiredMicro: number): string | null
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Contacts.top_of_page">org.gnome.OnlineAccounts.Contacts</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function contactsInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaContacts interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function contactsOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Documents.top_of_page">org.gnome.OnlineAccounts.Documents</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function documentsInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaDocuments interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function documentsOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
function errorQuark(): GLib.Quark
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Exchange.top_of_page">org.gnome.OnlineAccounts.Exchange</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function exchangeInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaExchange interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function exchangeOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Files.top_of_page">org.gnome.OnlineAccounts.Files</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function filesInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaFiles interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function filesOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Mail.top_of_page">org.gnome.OnlineAccounts.Mail</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function mailInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaMail interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function mailOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Manager.top_of_page">org.gnome.OnlineAccounts.Manager</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function managerInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaManager interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function managerOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Maps.top_of_page">org.gnome.OnlineAccounts.Maps</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function mapsInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaMaps interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function mapsOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page">org.gnome.OnlineAccounts.MediaServer</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function mediaServerInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaMediaServer interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function mediaServerOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Music.top_of_page">org.gnome.OnlineAccounts.Music</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function musicInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaMusic interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function musicOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page">org.gnome.OnlineAccounts.OAuth2Based</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function oauth2BasedInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaOAuth2Based interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function oauth2BasedOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page">org.gnome.OnlineAccounts.OAuthBased</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function oauthBasedInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaOAuthBased interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function oauthBasedOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page">org.gnome.OnlineAccounts.PasswordBased</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function passwordBasedInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaPasswordBased interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function passwordBasedOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Photos.top_of_page">org.gnome.OnlineAccounts.Photos</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function photosInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaPhotos interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function photosOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Printers.top_of_page">org.gnome.OnlineAccounts.Printers</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function printersInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaPrinters interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function printersOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page">org.gnome.OnlineAccounts.ReadLater</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function readLaterInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaReadLater interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function readLaterOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Ticketing.top_of_page">org.gnome.OnlineAccounts.Ticketing</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function ticketingInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaTicketing interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function ticketingOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Todo.top_of_page">org.gnome.OnlineAccounts.Todo</link> D-Bus interface.
 * @returns A #GDBusInterfaceInfo. Do not free.
 */
function todoInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaTodo interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 * @returns The last property id.
 */
function todoOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
module Account {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-ensure-credentials`
     */
    interface HandleEnsureCredentialsSignalCallback {
        (invocation: Gio.DBusMethodInvocation): boolean
    }

    /**
     * Signal callback interface for `handle-remove`
     */
    interface HandleRemoveSignalCallback {
        (invocation: Gio.DBusMethodInvocation): boolean
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Goa-1.0.Goa.Account

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
    attentionNeeded: boolean
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
    chatDisabled: boolean
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
    documentsDisabled: boolean
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
    isLocked: boolean
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
    mailDisabled: boolean
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
    musicDisabled: boolean
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
    presentationIdentity: string | null
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
    providerIcon: string | null
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
    providerType: string | null
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
    ticketingDisabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.TodoDisabled">"TodoDisabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    todoDisabled: boolean
    __gtype__: number

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
    callEnsureCredentials(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with goa_account_call_ensure_credentials().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_account_call_ensure_credentials().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    callEnsureCredentialsFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outExpiresIn */ number ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Account.EnsureCredentials">EnsureCredentials()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See goa_account_call_ensure_credentials() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    callEnsureCredentialsSync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outExpiresIn */ number ]
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Account.Remove">Remove()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_account_call_remove_finish() to get the result of the operation.
     * 
     * See goa_account_call_remove_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callRemove(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with goa_account_call_remove().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_account_call_remove().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    callRemoveFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Account.Remove">Remove()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See goa_account_call_remove() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    callRemoveSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Account.EnsureCredentials">EnsureCredentials()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param expiresIn Parameter to return.
     */
    completeEnsureCredentials(invocation: Gio.DBusMethodInvocation, expiresIn: number): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Account.Remove">Remove()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeRemove(invocation: Gio.DBusMethodInvocation): void

    // Own virtual methods of Goa-1.0.Goa.Account

    handleEnsureCredentials(invocation: Gio.DBusMethodInvocation): boolean
    handleRemove(invocation: Gio.DBusMethodInvocation): boolean

    // Own signals of Goa-1.0.Goa.Account

    connect(sigName: "handle-ensure-credentials", callback: Account.HandleEnsureCredentialsSignalCallback): number
    on(sigName: "handle-ensure-credentials", callback: Account.HandleEnsureCredentialsSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-ensure-credentials", callback: Account.HandleEnsureCredentialsSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-ensure-credentials", callback: Account.HandleEnsureCredentialsSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-ensure-credentials", ...args: any[]): void
    connect(sigName: "handle-remove", callback: Account.HandleRemoveSignalCallback): number
    on(sigName: "handle-remove", callback: Account.HandleRemoveSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-remove", callback: Account.HandleRemoveSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-remove", callback: Account.HandleRemoveSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-remove", ...args: any[]): void

    // Class property signals of Goa-1.0.Goa.Account

    connect(sigName: "notify::attention-needed", callback: (...args: any[]) => void): number
    on(sigName: "notify::attention-needed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::attention-needed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::attention-needed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::attention-needed", ...args: any[]): void
    connect(sigName: "notify::calendar-disabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::calendar-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::calendar-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::calendar-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::calendar-disabled", ...args: any[]): void
    connect(sigName: "notify::chat-disabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::chat-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::chat-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::chat-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::chat-disabled", ...args: any[]): void
    connect(sigName: "notify::contacts-disabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::contacts-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::contacts-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::contacts-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::contacts-disabled", ...args: any[]): void
    connect(sigName: "notify::documents-disabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::documents-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::documents-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::documents-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::documents-disabled", ...args: any[]): void
    connect(sigName: "notify::files-disabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::files-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::files-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::files-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::files-disabled", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::identity", callback: (...args: any[]) => void): number
    on(sigName: "notify::identity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::identity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::identity", ...args: any[]): void
    connect(sigName: "notify::is-locked", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-locked", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-locked", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-locked", ...args: any[]): void
    connect(sigName: "notify::is-temporary", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-temporary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-temporary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-temporary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-temporary", ...args: any[]): void
    connect(sigName: "notify::mail-disabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::mail-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mail-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mail-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mail-disabled", ...args: any[]): void
    connect(sigName: "notify::maps-disabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::maps-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::maps-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::maps-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::maps-disabled", ...args: any[]): void
    connect(sigName: "notify::music-disabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::music-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::music-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::music-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::music-disabled", ...args: any[]): void
    connect(sigName: "notify::photos-disabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::photos-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::photos-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::photos-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::photos-disabled", ...args: any[]): void
    connect(sigName: "notify::presentation-identity", callback: (...args: any[]) => void): number
    on(sigName: "notify::presentation-identity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::presentation-identity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::presentation-identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::presentation-identity", ...args: any[]): void
    connect(sigName: "notify::printers-disabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::printers-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::printers-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::printers-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::printers-disabled", ...args: any[]): void
    connect(sigName: "notify::provider-icon", callback: (...args: any[]) => void): number
    on(sigName: "notify::provider-icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::provider-icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::provider-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::provider-icon", ...args: any[]): void
    connect(sigName: "notify::provider-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::provider-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::provider-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::provider-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::provider-name", ...args: any[]): void
    connect(sigName: "notify::provider-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::provider-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::provider-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::provider-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::provider-type", ...args: any[]): void
    connect(sigName: "notify::read-later-disabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-later-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-later-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-later-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-later-disabled", ...args: any[]): void
    connect(sigName: "notify::ticketing-disabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::ticketing-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ticketing-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ticketing-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ticketing-disabled", ...args: any[]): void
    connect(sigName: "notify::todo-disabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::todo-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::todo-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::todo-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::todo-disabled", ...args: any[]): void
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
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Account.top_of_page">org.gnome.OnlineAccounts.Account</link>.
 * @interface 
 */
class Account extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Account

    static name: string

    // Constructors of Goa-1.0.Goa.Account

    constructor(config?: Account.ConstructorProperties) 
    _init(config?: Account.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Account.top_of_page">org.gnome.OnlineAccounts.Account</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaAccount interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
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
        acceptSslErrors?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Calendar.Uri">"Uri"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        uri?: string | null
    }

}

interface Calendar {

    // Own properties of Goa-1.0.Goa.Calendar

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
    __gtype__: number

    // Class property signals of Goa-1.0.Goa.Calendar

    connect(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): number
    on(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri", ...args: any[]): void
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
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Calendar.top_of_page">org.gnome.OnlineAccounts.Calendar</link>.
 * @interface 
 */
class Calendar extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Calendar

    static name: string

    // Constructors of Goa-1.0.Goa.Calendar

    constructor(config?: Calendar.ConstructorProperties) 
    _init(config?: Calendar.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Calendar.top_of_page">org.gnome.OnlineAccounts.Calendar</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaCalendar interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

module Chat {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Chat {

    // Own properties of Goa-1.0.Goa.Chat

    __gtype__: number

    // Class property signals of Goa-1.0.Goa.Chat

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
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Chat.top_of_page">org.gnome.OnlineAccounts.Chat</link>.
 * @interface 
 */
class Chat extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Chat

    static name: string

    // Constructors of Goa-1.0.Goa.Chat

    constructor(config?: Chat.ConstructorProperties) 
    _init(config?: Chat.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Chat.top_of_page">org.gnome.OnlineAccounts.Chat</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaChat interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
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
        acceptSslErrors?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Contacts.Uri">"Uri"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        uri?: string | null
    }

}

interface Contacts {

    // Own properties of Goa-1.0.Goa.Contacts

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
    __gtype__: number

    // Class property signals of Goa-1.0.Goa.Contacts

    connect(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): number
    on(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri", ...args: any[]): void
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
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Contacts.top_of_page">org.gnome.OnlineAccounts.Contacts</link>.
 * @interface 
 */
class Contacts extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Contacts

    static name: string

    // Constructors of Goa-1.0.Goa.Contacts

    constructor(config?: Contacts.ConstructorProperties) 
    _init(config?: Contacts.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Contacts.top_of_page">org.gnome.OnlineAccounts.Contacts</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaContacts interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

module Documents {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Documents {

    // Own properties of Goa-1.0.Goa.Documents

    __gtype__: number

    // Class property signals of Goa-1.0.Goa.Documents

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
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Documents.top_of_page">org.gnome.OnlineAccounts.Documents</link>.
 * @interface 
 */
class Documents extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Documents

    static name: string

    // Constructors of Goa-1.0.Goa.Documents

    constructor(config?: Documents.ConstructorProperties) 
    _init(config?: Documents.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Documents.top_of_page">org.gnome.OnlineAccounts.Documents</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaDocuments interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
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
        acceptSslErrors?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Exchange.Host">"Host"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        host?: string | null
    }

}

interface Exchange {

    // Own properties of Goa-1.0.Goa.Exchange

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
    __gtype__: number

    // Class property signals of Goa-1.0.Goa.Exchange

    connect(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): number
    on(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::host", callback: (...args: any[]) => void): number
    on(sigName: "notify::host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::host", ...args: any[]): void
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
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Exchange.top_of_page">org.gnome.OnlineAccounts.Exchange</link>.
 * @interface 
 */
class Exchange extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Exchange

    static name: string

    // Constructors of Goa-1.0.Goa.Exchange

    constructor(config?: Exchange.ConstructorProperties) 
    _init(config?: Exchange.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Exchange.top_of_page">org.gnome.OnlineAccounts.Exchange</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaExchange interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
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
        acceptSslErrors?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Files.Uri">"Uri"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        uri?: string | null
    }

}

interface Files {

    // Own properties of Goa-1.0.Goa.Files

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
    __gtype__: number

    // Class property signals of Goa-1.0.Goa.Files

    connect(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): number
    on(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri", ...args: any[]): void
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
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Files.top_of_page">org.gnome.OnlineAccounts.Files</link>.
 * @interface 
 */
class Files extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Files

    static name: string

    // Constructors of Goa-1.0.Goa.Files

    constructor(config?: Files.ConstructorProperties) 
    _init(config?: Files.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Files.top_of_page">org.gnome.OnlineAccounts.Files</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaFiles interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
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
    emailAddress: string | null
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
    imapHost: string | null
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
    imapUseSsl: boolean
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
    smtpAcceptSslErrors: boolean
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
    smtpAuthPlain: boolean
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
    smtpHost: string | null
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
    smtpUseAuth: boolean
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
    smtpUseTls: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpUserName">"SmtpUserName"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smtpUserName: string | null
    __gtype__: number

    // Class property signals of Goa-1.0.Goa.Mail

    connect(sigName: "notify::email-address", callback: (...args: any[]) => void): number
    on(sigName: "notify::email-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::email-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::email-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::email-address", ...args: any[]): void
    connect(sigName: "notify::imap-accept-ssl-errors", callback: (...args: any[]) => void): number
    on(sigName: "notify::imap-accept-ssl-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::imap-accept-ssl-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::imap-accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::imap-accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::imap-host", callback: (...args: any[]) => void): number
    on(sigName: "notify::imap-host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::imap-host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::imap-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::imap-host", ...args: any[]): void
    connect(sigName: "notify::imap-supported", callback: (...args: any[]) => void): number
    on(sigName: "notify::imap-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::imap-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::imap-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::imap-supported", ...args: any[]): void
    connect(sigName: "notify::imap-use-ssl", callback: (...args: any[]) => void): number
    on(sigName: "notify::imap-use-ssl", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::imap-use-ssl", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::imap-use-ssl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::imap-use-ssl", ...args: any[]): void
    connect(sigName: "notify::imap-use-tls", callback: (...args: any[]) => void): number
    on(sigName: "notify::imap-use-tls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::imap-use-tls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::imap-use-tls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::imap-use-tls", ...args: any[]): void
    connect(sigName: "notify::imap-user-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::imap-user-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::imap-user-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::imap-user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::imap-user-name", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::smtp-accept-ssl-errors", callback: (...args: any[]) => void): number
    on(sigName: "notify::smtp-accept-ssl-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smtp-accept-ssl-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smtp-accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smtp-accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::smtp-auth-login", callback: (...args: any[]) => void): number
    on(sigName: "notify::smtp-auth-login", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smtp-auth-login", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smtp-auth-login", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smtp-auth-login", ...args: any[]): void
    connect(sigName: "notify::smtp-auth-plain", callback: (...args: any[]) => void): number
    on(sigName: "notify::smtp-auth-plain", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smtp-auth-plain", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smtp-auth-plain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smtp-auth-plain", ...args: any[]): void
    connect(sigName: "notify::smtp-auth-xoauth2", callback: (...args: any[]) => void): number
    on(sigName: "notify::smtp-auth-xoauth2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smtp-auth-xoauth2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smtp-auth-xoauth2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smtp-auth-xoauth2", ...args: any[]): void
    connect(sigName: "notify::smtp-host", callback: (...args: any[]) => void): number
    on(sigName: "notify::smtp-host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smtp-host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smtp-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smtp-host", ...args: any[]): void
    connect(sigName: "notify::smtp-supported", callback: (...args: any[]) => void): number
    on(sigName: "notify::smtp-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smtp-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smtp-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smtp-supported", ...args: any[]): void
    connect(sigName: "notify::smtp-use-auth", callback: (...args: any[]) => void): number
    on(sigName: "notify::smtp-use-auth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smtp-use-auth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smtp-use-auth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smtp-use-auth", ...args: any[]): void
    connect(sigName: "notify::smtp-use-ssl", callback: (...args: any[]) => void): number
    on(sigName: "notify::smtp-use-ssl", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smtp-use-ssl", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smtp-use-ssl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smtp-use-ssl", ...args: any[]): void
    connect(sigName: "notify::smtp-use-tls", callback: (...args: any[]) => void): number
    on(sigName: "notify::smtp-use-tls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smtp-use-tls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smtp-use-tls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smtp-use-tls", ...args: any[]): void
    connect(sigName: "notify::smtp-user-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::smtp-user-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smtp-user-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smtp-user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smtp-user-name", ...args: any[]): void
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
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Mail.top_of_page">org.gnome.OnlineAccounts.Mail</link>.
 * @interface 
 */
class Mail extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Mail

    static name: string

    // Constructors of Goa-1.0.Goa.Mail

    constructor(config?: Mail.ConstructorProperties) 
    _init(config?: Mail.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Mail.top_of_page">org.gnome.OnlineAccounts.Mail</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaMail interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

module Manager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-add-account`
     */
    interface HandleAddAccountSignalCallback {
        (invocation: Gio.DBusMethodInvocation, argProvider: string | null, argIdentity: string | null, argPresentationIdentity: string | null, argCredentials: GLib.Variant, argDetails: GLib.Variant): boolean
    }

    /**
     * Signal callback interface for `handle-is-supported-provider`
     */
    interface HandleIsSupportedProviderSignalCallback {
        (invocation: Gio.DBusMethodInvocation, argProviderType: string | null): boolean
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Manager {

    // Own properties of Goa-1.0.Goa.Manager

    __gtype__: number

    // Owm methods of Goa-1.0.Goa.Manager

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Manager.AddAccount">AddAccount()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_manager_call_add_account_finish() to get the result of the operation.
     * 
     * See goa_manager_call_add_account_sync() for the synchronous, blocking version of this method.
     * @param argProvider Argument to pass with the method invocation.
     * @param argIdentity Argument to pass with the method invocation.
     * @param argPresentationIdentity Argument to pass with the method invocation.
     * @param argCredentials Argument to pass with the method invocation.
     * @param argDetails Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callAddAccount(argProvider: string | null, argIdentity: string | null, argPresentationIdentity: string | null, argCredentials: GLib.Variant, argDetails: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with goa_manager_call_add_account().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_manager_call_add_account().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    callAddAccountFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outAccountObjectPath */ string | null ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Manager.AddAccount">AddAccount()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See goa_manager_call_add_account() for the asynchronous version of this method.
     * @param argProvider Argument to pass with the method invocation.
     * @param argIdentity Argument to pass with the method invocation.
     * @param argPresentationIdentity Argument to pass with the method invocation.
     * @param argCredentials Argument to pass with the method invocation.
     * @param argDetails Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    callAddAccountSync(argProvider: string | null, argIdentity: string | null, argPresentationIdentity: string | null, argCredentials: GLib.Variant, argDetails: GLib.Variant, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccountObjectPath */ string | null ]
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Manager.IsSupportedProvider">IsSupportedProvider()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_manager_call_is_supported_provider_finish() to get the result of the operation.
     * 
     * See goa_manager_call_is_supported_provider_sync() for the synchronous, blocking version of this method.
     * @param argProviderType Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callIsSupportedProvider(argProviderType: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with goa_manager_call_is_supported_provider().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_manager_call_is_supported_provider().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    callIsSupportedProviderFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outIsSupported */ boolean ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Manager.IsSupportedProvider">IsSupportedProvider()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See goa_manager_call_is_supported_provider() for the asynchronous version of this method.
     * @param argProviderType Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    callIsSupportedProviderSync(argProviderType: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIsSupported */ boolean ]
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Manager.AddAccount">AddAccount()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param accountObjectPath Parameter to return.
     */
    completeAddAccount(invocation: Gio.DBusMethodInvocation, accountObjectPath: string | null): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Manager.IsSupportedProvider">IsSupportedProvider()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param isSupported Parameter to return.
     */
    completeIsSupportedProvider(invocation: Gio.DBusMethodInvocation, isSupported: boolean): void

    // Own virtual methods of Goa-1.0.Goa.Manager

    handleAddAccount(invocation: Gio.DBusMethodInvocation, argProvider: string | null, argIdentity: string | null, argPresentationIdentity: string | null, argCredentials: GLib.Variant, argDetails: GLib.Variant): boolean
    handleIsSupportedProvider(invocation: Gio.DBusMethodInvocation, argProviderType: string | null): boolean

    // Own signals of Goa-1.0.Goa.Manager

    connect(sigName: "handle-add-account", callback: Manager.HandleAddAccountSignalCallback): number
    on(sigName: "handle-add-account", callback: Manager.HandleAddAccountSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-add-account", callback: Manager.HandleAddAccountSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-add-account", callback: Manager.HandleAddAccountSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-add-account", argProvider: string | null, argIdentity: string | null, argPresentationIdentity: string | null, argCredentials: GLib.Variant, argDetails: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-is-supported-provider", callback: Manager.HandleIsSupportedProviderSignalCallback): number
    on(sigName: "handle-is-supported-provider", callback: Manager.HandleIsSupportedProviderSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-is-supported-provider", callback: Manager.HandleIsSupportedProviderSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-is-supported-provider", callback: Manager.HandleIsSupportedProviderSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-is-supported-provider", argProviderType: string | null, ...args: any[]): void

    // Class property signals of Goa-1.0.Goa.Manager

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
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Manager.top_of_page">org.gnome.OnlineAccounts.Manager</link>.
 * @interface 
 */
class Manager extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Manager

    static name: string

    // Constructors of Goa-1.0.Goa.Manager

    constructor(config?: Manager.ConstructorProperties) 
    _init(config?: Manager.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Manager.top_of_page">org.gnome.OnlineAccounts.Manager</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaManager interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

module Maps {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Maps {

    // Own properties of Goa-1.0.Goa.Maps

    __gtype__: number

    // Class property signals of Goa-1.0.Goa.Maps

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
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Maps.top_of_page">org.gnome.OnlineAccounts.Maps</link>.
 * @interface 
 */
class Maps extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Maps

    static name: string

    // Constructors of Goa-1.0.Goa.Maps

    constructor(config?: Maps.ConstructorProperties) 
    _init(config?: Maps.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Maps.top_of_page">org.gnome.OnlineAccounts.Maps</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaMaps interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
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
        dlnaSupported?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-MediaServer.Udn">"Udn"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        udn?: string | null
    }

}

interface MediaServer {

    // Own properties of Goa-1.0.Goa.MediaServer

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
    __gtype__: number

    // Class property signals of Goa-1.0.Goa.MediaServer

    connect(sigName: "notify::dlna-supported", callback: (...args: any[]) => void): number
    on(sigName: "notify::dlna-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dlna-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dlna-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dlna-supported", ...args: any[]): void
    connect(sigName: "notify::udn", callback: (...args: any[]) => void): number
    on(sigName: "notify::udn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::udn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::udn", ...args: any[]): void
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
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page">org.gnome.OnlineAccounts.MediaServer</link>.
 * @interface 
 */
class MediaServer extends GObject.Object {

    // Own properties of Goa-1.0.Goa.MediaServer

    static name: string

    // Constructors of Goa-1.0.Goa.MediaServer

    constructor(config?: MediaServer.ConstructorProperties) 
    _init(config?: MediaServer.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page">org.gnome.OnlineAccounts.MediaServer</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaMediaServer interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

module Music {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Music {

    // Own properties of Goa-1.0.Goa.Music

    __gtype__: number

    // Class property signals of Goa-1.0.Goa.Music

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
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Music.top_of_page">org.gnome.OnlineAccounts.Music</link>.
 * @interface 
 */
class Music extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Music

    static name: string

    // Constructors of Goa-1.0.Goa.Music

    constructor(config?: Music.ConstructorProperties) 
    _init(config?: Music.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Music.top_of_page">org.gnome.OnlineAccounts.Music</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaMusic interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

module OAuth2Based {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-get-access-token`
     */
    interface HandleGetAccessTokenSignalCallback {
        (invocation: Gio.DBusMethodInvocation): boolean
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Goa-1.0.Goa.OAuth2Based

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
    clientId: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-OAuth2Based.ClientSecret">"ClientSecret"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    clientSecret: string | null
    __gtype__: number

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
    callGetAccessToken(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with goa_oauth2_based_call_get_access_token().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_oauth2_based_call_get_access_token().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    callGetAccessTokenFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-OAuth2Based.GetAccessToken">GetAccessToken()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See goa_oauth2_based_call_get_access_token() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    callGetAccessTokenSync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outExpiresIn */ number ]
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-OnlineAccounts-OAuth2Based.GetAccessToken">GetAccessToken()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param accessToken Parameter to return.
     * @param expiresIn Parameter to return.
     */
    completeGetAccessToken(invocation: Gio.DBusMethodInvocation, accessToken: string | null, expiresIn: number): void

    // Own virtual methods of Goa-1.0.Goa.OAuth2Based

    handleGetAccessToken(invocation: Gio.DBusMethodInvocation): boolean

    // Own signals of Goa-1.0.Goa.OAuth2Based

    connect(sigName: "handle-get-access-token", callback: OAuth2Based.HandleGetAccessTokenSignalCallback): number
    on(sigName: "handle-get-access-token", callback: OAuth2Based.HandleGetAccessTokenSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-access-token", callback: OAuth2Based.HandleGetAccessTokenSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-access-token", callback: OAuth2Based.HandleGetAccessTokenSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-get-access-token", ...args: any[]): void

    // Class property signals of Goa-1.0.Goa.OAuth2Based

    connect(sigName: "notify::client-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::client-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::client-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::client-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::client-id", ...args: any[]): void
    connect(sigName: "notify::client-secret", callback: (...args: any[]) => void): number
    on(sigName: "notify::client-secret", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::client-secret", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::client-secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::client-secret", ...args: any[]): void
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
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page">org.gnome.OnlineAccounts.OAuth2Based</link>.
 * @interface 
 */
class OAuth2Based extends GObject.Object {

    // Own properties of Goa-1.0.Goa.OAuth2Based

    static name: string

    // Constructors of Goa-1.0.Goa.OAuth2Based

    constructor(config?: OAuth2Based.ConstructorProperties) 
    _init(config?: OAuth2Based.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page">org.gnome.OnlineAccounts.OAuth2Based</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaOAuth2Based interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

module OAuthBased {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-get-access-token`
     */
    interface HandleGetAccessTokenSignalCallback {
        (invocation: Gio.DBusMethodInvocation): boolean
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Goa-1.0.Goa.OAuthBased

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
    consumerKey: string | null
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-OAuthBased.ConsumerSecret">"ConsumerSecret"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    consumerSecret: string | null
    __gtype__: number

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
    callGetAccessToken(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with goa_oauth_based_call_get_access_token().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_oauth_based_call_get_access_token().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    callGetAccessTokenFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outAccessTokenSecret */ string | null, /* outExpiresIn */ number ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-OAuthBased.GetAccessToken">GetAccessToken()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See goa_oauth_based_call_get_access_token() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    callGetAccessTokenSync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccessToken */ string | null, /* outAccessTokenSecret */ string | null, /* outExpiresIn */ number ]
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-OnlineAccounts-OAuthBased.GetAccessToken">GetAccessToken()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param accessToken Parameter to return.
     * @param accessTokenSecret Parameter to return.
     * @param expiresIn Parameter to return.
     */
    completeGetAccessToken(invocation: Gio.DBusMethodInvocation, accessToken: string | null, accessTokenSecret: string | null, expiresIn: number): void

    // Own virtual methods of Goa-1.0.Goa.OAuthBased

    handleGetAccessToken(invocation: Gio.DBusMethodInvocation): boolean

    // Own signals of Goa-1.0.Goa.OAuthBased

    connect(sigName: "handle-get-access-token", callback: OAuthBased.HandleGetAccessTokenSignalCallback): number
    on(sigName: "handle-get-access-token", callback: OAuthBased.HandleGetAccessTokenSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-access-token", callback: OAuthBased.HandleGetAccessTokenSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-access-token", callback: OAuthBased.HandleGetAccessTokenSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-get-access-token", ...args: any[]): void

    // Class property signals of Goa-1.0.Goa.OAuthBased

    connect(sigName: "notify::consumer-key", callback: (...args: any[]) => void): number
    on(sigName: "notify::consumer-key", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::consumer-key", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::consumer-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::consumer-key", ...args: any[]): void
    connect(sigName: "notify::consumer-secret", callback: (...args: any[]) => void): number
    on(sigName: "notify::consumer-secret", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::consumer-secret", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::consumer-secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::consumer-secret", ...args: any[]): void
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
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page">org.gnome.OnlineAccounts.OAuthBased</link>.
 * @interface 
 */
class OAuthBased extends GObject.Object {

    // Own properties of Goa-1.0.Goa.OAuthBased

    static name: string

    // Constructors of Goa-1.0.Goa.OAuthBased

    constructor(config?: OAuthBased.ConstructorProperties) 
    _init(config?: OAuthBased.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page">org.gnome.OnlineAccounts.OAuthBased</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaOAuthBased interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
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
        mediaServer?: MediaServer | null
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
        readLater?: ReadLater | null
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
    oauthBased: OAuthBased
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
    __gtype__: number

    // Owm methods of Goa-1.0.Goa.Object

    /**
     * Gets the #GoaAccount instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Account.top_of_page">org.gnome.OnlineAccounts.Account</link> on `object,` if any.
     * @returns A #GoaAccount that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    getAccount(): Account | null
    /**
     * Gets the #GoaCalendar instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Calendar.top_of_page">org.gnome.OnlineAccounts.Calendar</link> on `object,` if any.
     * @returns A #GoaCalendar that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    getCalendar(): Calendar | null
    /**
     * Gets the #GoaChat instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Chat.top_of_page">org.gnome.OnlineAccounts.Chat</link> on `object,` if any.
     * @returns A #GoaChat that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    getChat(): Chat | null
    /**
     * Gets the #GoaContacts instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Contacts.top_of_page">org.gnome.OnlineAccounts.Contacts</link> on `object,` if any.
     * @returns A #GoaContacts that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    getContacts(): Contacts | null
    /**
     * Gets the #GoaDocuments instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Documents.top_of_page">org.gnome.OnlineAccounts.Documents</link> on `object,` if any.
     * @returns A #GoaDocuments that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    getDocuments(): Documents | null
    /**
     * Gets the #GoaExchange instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Exchange.top_of_page">org.gnome.OnlineAccounts.Exchange</link> on `object,` if any.
     * @returns A #GoaExchange that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    getExchange(): Exchange | null
    /**
     * Gets the #GoaFiles instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Files.top_of_page">org.gnome.OnlineAccounts.Files</link> on `object,` if any.
     * @returns A #GoaFiles that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    getFiles(): Files | null
    /**
     * Gets the #GoaMail instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Mail.top_of_page">org.gnome.OnlineAccounts.Mail</link> on `object,` if any.
     * @returns A #GoaMail that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    getMail(): Mail | null
    /**
     * Gets the #GoaManager instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Manager.top_of_page">org.gnome.OnlineAccounts.Manager</link> on `object,` if any.
     * @returns A #GoaManager that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    getManager(): Manager | null
    /**
     * Gets the #GoaMaps instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Maps.top_of_page">org.gnome.OnlineAccounts.Maps</link> on `object,` if any.
     * @returns A #GoaMaps that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    getMaps(): Maps | null
    /**
     * Gets the #GoaMediaServer instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page">org.gnome.OnlineAccounts.MediaServer</link> on `object,` if any.
     * @returns A #GoaMediaServer that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    getMediaServer(): MediaServer | null
    /**
     * Gets the #GoaMusic instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Music.top_of_page">org.gnome.OnlineAccounts.Music</link> on `object,` if any.
     * @returns A #GoaMusic that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    getMusic(): Music | null
    /**
     * Gets the #GoaOAuth2Based instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page">org.gnome.OnlineAccounts.OAuth2Based</link> on `object,` if any.
     * @returns A #GoaOAuth2Based that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    getOauth2Based(): OAuth2Based | null
    /**
     * Gets the #GoaOAuthBased instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page">org.gnome.OnlineAccounts.OAuthBased</link> on `object,` if any.
     * @returns A #GoaOAuthBased that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    getOauthBased(): OAuthBased | null
    /**
     * Gets the #GoaPasswordBased instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page">org.gnome.OnlineAccounts.PasswordBased</link> on `object,` if any.
     * @returns A #GoaPasswordBased that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    getPasswordBased(): PasswordBased | null
    /**
     * Gets the #GoaPhotos instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Photos.top_of_page">org.gnome.OnlineAccounts.Photos</link> on `object,` if any.
     * @returns A #GoaPhotos that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    getPhotos(): Photos | null
    /**
     * Gets the #GoaPrinters instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Printers.top_of_page">org.gnome.OnlineAccounts.Printers</link> on `object,` if any.
     * @returns A #GoaPrinters that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    getPrinters(): Printers | null
    /**
     * Gets the #GoaReadLater instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page">org.gnome.OnlineAccounts.ReadLater</link> on `object,` if any.
     * @returns A #GoaReadLater that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    getReadLater(): ReadLater | null
    /**
     * Gets the #GoaTicketing instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Ticketing.top_of_page">org.gnome.OnlineAccounts.Ticketing</link> on `object,` if any.
     * @returns A #GoaTicketing that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    getTicketing(): Ticketing | null
    /**
     * Gets the #GoaTodo instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Todo.top_of_page">org.gnome.OnlineAccounts.Todo</link> on `object,` if any.
     * @returns A #GoaTodo that must be freed with g_object_unref() or %NULL if @object does not implement the interface.
     */
    getTodo(): Todo | null

    // Class property signals of Goa-1.0.Goa.Object

    connect(sigName: "notify::account", callback: (...args: any[]) => void): number
    on(sigName: "notify::account", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::account", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::account", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::account", ...args: any[]): void
    connect(sigName: "notify::calendar", callback: (...args: any[]) => void): number
    on(sigName: "notify::calendar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::calendar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::calendar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::calendar", ...args: any[]): void
    connect(sigName: "notify::chat", callback: (...args: any[]) => void): number
    on(sigName: "notify::chat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::chat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::chat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::chat", ...args: any[]): void
    connect(sigName: "notify::contacts", callback: (...args: any[]) => void): number
    on(sigName: "notify::contacts", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::contacts", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::contacts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::contacts", ...args: any[]): void
    connect(sigName: "notify::documents", callback: (...args: any[]) => void): number
    on(sigName: "notify::documents", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::documents", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::documents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::documents", ...args: any[]): void
    connect(sigName: "notify::exchange", callback: (...args: any[]) => void): number
    on(sigName: "notify::exchange", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::exchange", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::exchange", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::exchange", ...args: any[]): void
    connect(sigName: "notify::files", callback: (...args: any[]) => void): number
    on(sigName: "notify::files", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::files", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::files", ...args: any[]): void
    connect(sigName: "notify::mail", callback: (...args: any[]) => void): number
    on(sigName: "notify::mail", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mail", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mail", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mail", ...args: any[]): void
    connect(sigName: "notify::manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::manager", ...args: any[]): void
    connect(sigName: "notify::maps", callback: (...args: any[]) => void): number
    on(sigName: "notify::maps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::maps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::maps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::maps", ...args: any[]): void
    connect(sigName: "notify::media-server", callback: (...args: any[]) => void): number
    on(sigName: "notify::media-server", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::media-server", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::media-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::media-server", ...args: any[]): void
    connect(sigName: "notify::music", callback: (...args: any[]) => void): number
    on(sigName: "notify::music", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::music", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::music", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::music", ...args: any[]): void
    connect(sigName: "notify::oauth-based", callback: (...args: any[]) => void): number
    on(sigName: "notify::oauth-based", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::oauth-based", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::oauth-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::oauth-based", ...args: any[]): void
    connect(sigName: "notify::oauth2-based", callback: (...args: any[]) => void): number
    on(sigName: "notify::oauth2-based", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::oauth2-based", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::oauth2-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::oauth2-based", ...args: any[]): void
    connect(sigName: "notify::password-based", callback: (...args: any[]) => void): number
    on(sigName: "notify::password-based", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::password-based", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::password-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::password-based", ...args: any[]): void
    connect(sigName: "notify::photos", callback: (...args: any[]) => void): number
    on(sigName: "notify::photos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::photos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::photos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::photos", ...args: any[]): void
    connect(sigName: "notify::printers", callback: (...args: any[]) => void): number
    on(sigName: "notify::printers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::printers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::printers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::printers", ...args: any[]): void
    connect(sigName: "notify::read-later", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-later", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-later", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-later", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-later", ...args: any[]): void
    connect(sigName: "notify::ticketing", callback: (...args: any[]) => void): number
    on(sigName: "notify::ticketing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ticketing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ticketing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ticketing", ...args: any[]): void
    connect(sigName: "notify::todo", callback: (...args: any[]) => void): number
    on(sigName: "notify::todo", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::todo", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::todo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::todo", ...args: any[]): void
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
    disconnect(id: number): void
}

/**
 * The #GoaObject type is a specialized container of interfaces.
 * @interface 
 */
class Object extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Object

    static name: string

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
        (invocation: Gio.DBusMethodInvocation, argId: string | null): boolean
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface PasswordBased {

    // Own properties of Goa-1.0.Goa.PasswordBased

    __gtype__: number

    // Owm methods of Goa-1.0.Goa.PasswordBased

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-PasswordBased.GetPassword">GetPassword()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_password_based_call_get_password_finish() to get the result of the operation.
     * 
     * See goa_password_based_call_get_password_sync() for the synchronous, blocking version of this method.
     * @param argId Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callGetPassword(argId: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with goa_password_based_call_get_password().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_password_based_call_get_password().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    callGetPasswordFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outPassword */ string | null ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-PasswordBased.GetPassword">GetPassword()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See goa_password_based_call_get_password() for the asynchronous version of this method.
     * @param argId Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    callGetPasswordSync(argId: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outPassword */ string | null ]
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-OnlineAccounts-PasswordBased.GetPassword">GetPassword()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param password Parameter to return.
     */
    completeGetPassword(invocation: Gio.DBusMethodInvocation, password: string | null): void

    // Own virtual methods of Goa-1.0.Goa.PasswordBased

    handleGetPassword(invocation: Gio.DBusMethodInvocation, argId: string | null): boolean

    // Own signals of Goa-1.0.Goa.PasswordBased

    connect(sigName: "handle-get-password", callback: PasswordBased.HandleGetPasswordSignalCallback): number
    on(sigName: "handle-get-password", callback: PasswordBased.HandleGetPasswordSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-password", callback: PasswordBased.HandleGetPasswordSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-password", callback: PasswordBased.HandleGetPasswordSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-get-password", argId: string | null, ...args: any[]): void

    // Class property signals of Goa-1.0.Goa.PasswordBased

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
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page">org.gnome.OnlineAccounts.PasswordBased</link>.
 * @interface 
 */
class PasswordBased extends GObject.Object {

    // Own properties of Goa-1.0.Goa.PasswordBased

    static name: string

    // Constructors of Goa-1.0.Goa.PasswordBased

    constructor(config?: PasswordBased.ConstructorProperties) 
    _init(config?: PasswordBased.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page">org.gnome.OnlineAccounts.PasswordBased</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaPasswordBased interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

module Photos {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Photos {

    // Own properties of Goa-1.0.Goa.Photos

    __gtype__: number

    // Class property signals of Goa-1.0.Goa.Photos

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
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Photos.top_of_page">org.gnome.OnlineAccounts.Photos</link>.
 * @interface 
 */
class Photos extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Photos

    static name: string

    // Constructors of Goa-1.0.Goa.Photos

    constructor(config?: Photos.ConstructorProperties) 
    _init(config?: Photos.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Photos.top_of_page">org.gnome.OnlineAccounts.Photos</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaPhotos interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

module Printers {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Printers {

    // Own properties of Goa-1.0.Goa.Printers

    __gtype__: number

    // Class property signals of Goa-1.0.Goa.Printers

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
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Printers.top_of_page">org.gnome.OnlineAccounts.Printers</link>.
 * @interface 
 */
class Printers extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Printers

    static name: string

    // Constructors of Goa-1.0.Goa.Printers

    constructor(config?: Printers.ConstructorProperties) 
    _init(config?: Printers.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Printers.top_of_page">org.gnome.OnlineAccounts.Printers</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaPrinters interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

module ReadLater {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ReadLater {

    // Own properties of Goa-1.0.Goa.ReadLater

    __gtype__: number

    // Class property signals of Goa-1.0.Goa.ReadLater

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
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page">org.gnome.OnlineAccounts.ReadLater</link>.
 * @interface 
 */
class ReadLater extends GObject.Object {

    // Own properties of Goa-1.0.Goa.ReadLater

    static name: string

    // Constructors of Goa-1.0.Goa.ReadLater

    constructor(config?: ReadLater.ConstructorProperties) 
    _init(config?: ReadLater.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page">org.gnome.OnlineAccounts.ReadLater</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaReadLater interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

module Ticketing {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-get-ticket`
     */
    interface HandleGetTicketSignalCallback {
        (invocation: Gio.DBusMethodInvocation): boolean
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
    __gtype__: number

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
    callGetTicket(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with goa_ticketing_call_get_ticket().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_ticketing_call_get_ticket().
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    callGetTicketFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Ticketing.GetTicket">GetTicket()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See goa_ticketing_call_get_ticket() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @returns %TRUE if the call succeeded, %FALSE if @error is set.
     */
    callGetTicketSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Ticketing.GetTicket">GetTicket()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeGetTicket(invocation: Gio.DBusMethodInvocation): void

    // Own virtual methods of Goa-1.0.Goa.Ticketing

    handleGetTicket(invocation: Gio.DBusMethodInvocation): boolean

    // Own signals of Goa-1.0.Goa.Ticketing

    connect(sigName: "handle-get-ticket", callback: Ticketing.HandleGetTicketSignalCallback): number
    on(sigName: "handle-get-ticket", callback: Ticketing.HandleGetTicketSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-ticket", callback: Ticketing.HandleGetTicketSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-ticket", callback: Ticketing.HandleGetTicketSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-get-ticket", ...args: any[]): void

    // Class property signals of Goa-1.0.Goa.Ticketing

    connect(sigName: "notify::details", callback: (...args: any[]) => void): number
    on(sigName: "notify::details", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::details", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::details", ...args: any[]): void
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
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Ticketing.top_of_page">org.gnome.OnlineAccounts.Ticketing</link>.
 * @interface 
 */
class Ticketing extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Ticketing

    static name: string

    // Constructors of Goa-1.0.Goa.Ticketing

    constructor(config?: Ticketing.ConstructorProperties) 
    _init(config?: Ticketing.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Ticketing.top_of_page">org.gnome.OnlineAccounts.Ticketing</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaTicketing interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

module Todo {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Todo {

    // Own properties of Goa-1.0.Goa.Todo

    __gtype__: number

    // Class property signals of Goa-1.0.Goa.Todo

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
    disconnect(id: number): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Todo.top_of_page">org.gnome.OnlineAccounts.Todo</link>.
 * @interface 
 */
class Todo extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Todo

    static name: string

    // Constructors of Goa-1.0.Goa.Todo

    constructor(config?: Todo.ConstructorProperties) 
    _init(config?: Todo.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Todo.top_of_page">org.gnome.OnlineAccounts.Todo</link> D-Bus interface.
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaTodo interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

module AccountProxy {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Account.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface AccountProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Account {

    // Own properties of Goa-1.0.Goa.AccountProxy

    __gtype__: number

    // Class property signals of Goa-1.0.Goa.AccountProxy

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
    connect(sigName: "notify::attention-needed", callback: (...args: any[]) => void): number
    on(sigName: "notify::attention-needed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::attention-needed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::attention-needed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::attention-needed", ...args: any[]): void
    connect(sigName: "notify::calendar-disabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::calendar-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::calendar-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::calendar-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::calendar-disabled", ...args: any[]): void
    connect(sigName: "notify::chat-disabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::chat-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::chat-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::chat-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::chat-disabled", ...args: any[]): void
    connect(sigName: "notify::contacts-disabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::contacts-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::contacts-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::contacts-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::contacts-disabled", ...args: any[]): void
    connect(sigName: "notify::documents-disabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::documents-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::documents-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::documents-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::documents-disabled", ...args: any[]): void
    connect(sigName: "notify::files-disabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::files-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::files-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::files-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::files-disabled", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::identity", callback: (...args: any[]) => void): number
    on(sigName: "notify::identity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::identity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::identity", ...args: any[]): void
    connect(sigName: "notify::is-locked", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-locked", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-locked", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-locked", ...args: any[]): void
    connect(sigName: "notify::is-temporary", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-temporary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-temporary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-temporary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-temporary", ...args: any[]): void
    connect(sigName: "notify::mail-disabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::mail-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mail-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mail-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mail-disabled", ...args: any[]): void
    connect(sigName: "notify::maps-disabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::maps-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::maps-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::maps-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::maps-disabled", ...args: any[]): void
    connect(sigName: "notify::music-disabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::music-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::music-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::music-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::music-disabled", ...args: any[]): void
    connect(sigName: "notify::photos-disabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::photos-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::photos-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::photos-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::photos-disabled", ...args: any[]): void
    connect(sigName: "notify::presentation-identity", callback: (...args: any[]) => void): number
    on(sigName: "notify::presentation-identity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::presentation-identity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::presentation-identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::presentation-identity", ...args: any[]): void
    connect(sigName: "notify::printers-disabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::printers-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::printers-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::printers-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::printers-disabled", ...args: any[]): void
    connect(sigName: "notify::provider-icon", callback: (...args: any[]) => void): number
    on(sigName: "notify::provider-icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::provider-icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::provider-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::provider-icon", ...args: any[]): void
    connect(sigName: "notify::provider-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::provider-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::provider-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::provider-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::provider-name", ...args: any[]): void
    connect(sigName: "notify::provider-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::provider-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::provider-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::provider-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::provider-type", ...args: any[]): void
    connect(sigName: "notify::read-later-disabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-later-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-later-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-later-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-later-disabled", ...args: any[]): void
    connect(sigName: "notify::ticketing-disabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::ticketing-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ticketing-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ticketing-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ticketing-disabled", ...args: any[]): void
    connect(sigName: "notify::todo-disabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::todo-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::todo-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::todo-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::todo-disabled", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Constructors of Goa-1.0.Goa.AccountProxy

    constructor(config?: AccountProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_account_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_account_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newFinish(res: Gio.AsyncResult): AccountProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_account_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_account_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusFinish(res: Gio.AsyncResult): AccountProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_account_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_account_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): AccountProxy

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
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Account.top_of_page">org.gnome.OnlineAccounts.Account</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_account_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): AccountProxy

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
     * Like goa_account_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_account_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_account_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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

module AccountSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Account.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface AccountSkeleton extends Gio.DBusInterface, Account {

    // Own properties of Goa-1.0.Goa.AccountSkeleton

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

    // Class property signals of Goa-1.0.Goa.AccountSkeleton

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
    connect(sigName: "notify::attention-needed", callback: (...args: any[]) => void): number
    on(sigName: "notify::attention-needed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::attention-needed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::attention-needed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::attention-needed", ...args: any[]): void
    connect(sigName: "notify::calendar-disabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::calendar-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::calendar-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::calendar-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::calendar-disabled", ...args: any[]): void
    connect(sigName: "notify::chat-disabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::chat-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::chat-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::chat-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::chat-disabled", ...args: any[]): void
    connect(sigName: "notify::contacts-disabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::contacts-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::contacts-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::contacts-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::contacts-disabled", ...args: any[]): void
    connect(sigName: "notify::documents-disabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::documents-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::documents-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::documents-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::documents-disabled", ...args: any[]): void
    connect(sigName: "notify::files-disabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::files-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::files-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::files-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::files-disabled", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::identity", callback: (...args: any[]) => void): number
    on(sigName: "notify::identity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::identity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::identity", ...args: any[]): void
    connect(sigName: "notify::is-locked", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-locked", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-locked", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-locked", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-locked", ...args: any[]): void
    connect(sigName: "notify::is-temporary", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-temporary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-temporary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-temporary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-temporary", ...args: any[]): void
    connect(sigName: "notify::mail-disabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::mail-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mail-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mail-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mail-disabled", ...args: any[]): void
    connect(sigName: "notify::maps-disabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::maps-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::maps-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::maps-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::maps-disabled", ...args: any[]): void
    connect(sigName: "notify::music-disabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::music-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::music-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::music-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::music-disabled", ...args: any[]): void
    connect(sigName: "notify::photos-disabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::photos-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::photos-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::photos-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::photos-disabled", ...args: any[]): void
    connect(sigName: "notify::presentation-identity", callback: (...args: any[]) => void): number
    on(sigName: "notify::presentation-identity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::presentation-identity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::presentation-identity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::presentation-identity", ...args: any[]): void
    connect(sigName: "notify::printers-disabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::printers-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::printers-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::printers-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::printers-disabled", ...args: any[]): void
    connect(sigName: "notify::provider-icon", callback: (...args: any[]) => void): number
    on(sigName: "notify::provider-icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::provider-icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::provider-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::provider-icon", ...args: any[]): void
    connect(sigName: "notify::provider-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::provider-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::provider-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::provider-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::provider-name", ...args: any[]): void
    connect(sigName: "notify::provider-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::provider-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::provider-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::provider-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::provider-type", ...args: any[]): void
    connect(sigName: "notify::read-later-disabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-later-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-later-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-later-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-later-disabled", ...args: any[]): void
    connect(sigName: "notify::ticketing-disabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::ticketing-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ticketing-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ticketing-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ticketing-disabled", ...args: any[]): void
    connect(sigName: "notify::todo-disabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::todo-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::todo-disabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::todo-disabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::todo-disabled", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Own properties of Goa-1.0.Goa.CalendarProxy

    __gtype__: number

    // Class property signals of Goa-1.0.Goa.CalendarProxy

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
    connect(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): number
    on(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Constructors of Goa-1.0.Goa.CalendarProxy

    constructor(config?: CalendarProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_calendar_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_calendar_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newFinish(res: Gio.AsyncResult): CalendarProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_calendar_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_calendar_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusFinish(res: Gio.AsyncResult): CalendarProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_calendar_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_calendar_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): CalendarProxy

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
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Calendar.top_of_page">org.gnome.OnlineAccounts.Calendar</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_calendar_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): CalendarProxy

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
     * Like goa_calendar_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_calendar_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_calendar_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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

module CalendarSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Calendar.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface CalendarSkeleton extends Gio.DBusInterface, Calendar {

    // Own properties of Goa-1.0.Goa.CalendarSkeleton

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

    // Class property signals of Goa-1.0.Goa.CalendarSkeleton

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
    connect(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): number
    on(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Own properties of Goa-1.0.Goa.ChatProxy

    __gtype__: number

    // Class property signals of Goa-1.0.Goa.ChatProxy

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Constructors of Goa-1.0.Goa.ChatProxy

    constructor(config?: ChatProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_chat_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_chat_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newFinish(res: Gio.AsyncResult): ChatProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_chat_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_chat_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusFinish(res: Gio.AsyncResult): ChatProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_chat_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_chat_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): ChatProxy

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
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Chat.top_of_page">org.gnome.OnlineAccounts.Chat</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_chat_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): ChatProxy

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
     * Like goa_chat_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_chat_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_chat_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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

module ChatSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Chat.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface ChatSkeleton extends Gio.DBusInterface, Chat {

    // Own properties of Goa-1.0.Goa.ChatSkeleton

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

    // Class property signals of Goa-1.0.Goa.ChatSkeleton

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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
        (object: Object): void
    }

    /**
     * Signal callback interface for `account-changed`
     */
    interface AccountChangedSignalCallback {
        (object: Object): void
    }

    /**
     * Signal callback interface for `account-removed`
     */
    interface AccountRemovedSignalCallback {
        (object: Object): void
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
    readonly objectManager: Gio.DBusObjectManager
    __gtype__: number

    // Owm methods of Goa-1.0.Goa.Client

    /**
     * Gets all accounts that `self` knows about. The result is a list of
     * #GoaObject instances where each object at least has an #GoaAccount
     * interface (that can be obtained via the goa_object_get_account()
     * method) but may also implement other interfaces such as
     * #GoaMail or #GoaFiles.
     * @returns A list of #GoaObject instances that must be freed with g_list_free() after each element has been freed with g_object_unref().
     */
    getAccounts(): Object[]
    /**
     * Gets the #GoaManager for `self,` if any.
     * @returns A #GoaManager or %NULL. Do not free, the returned object belongs to @self.
     */
    getManager(): Manager | null
    /**
     * Gets the #GDBusObjectManager used by `self`.
     * @returns A #GDBusObjectManager. Do not free, the instance is owned by @self.
     */
    getObjectManager(): Gio.DBusObjectManager
    /**
     * Finds and returns the #GoaObject instance whose
     * <link
     * linkend="gdbus-property-org-gnome-OnlineAccounts-Account.Id">"Id"</link>
     * D-Bus property matches `id`.
     * @param id The ID to look for.
     * @returns A #GoaObject. Free the returned object with g_object_unref().
     */
    lookupById(id: string | null): Object

    // Own signals of Goa-1.0.Goa.Client

    connect(sigName: "account-added", callback: Client.AccountAddedSignalCallback): number
    on(sigName: "account-added", callback: Client.AccountAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "account-added", callback: Client.AccountAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "account-added", callback: Client.AccountAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "account-added", ...args: any[]): void
    connect(sigName: "account-changed", callback: Client.AccountChangedSignalCallback): number
    on(sigName: "account-changed", callback: Client.AccountChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "account-changed", callback: Client.AccountChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "account-changed", callback: Client.AccountChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "account-changed", ...args: any[]): void
    connect(sigName: "account-removed", callback: Client.AccountRemovedSignalCallback): number
    on(sigName: "account-removed", callback: Client.AccountRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "account-removed", callback: Client.AccountRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "account-removed", callback: Client.AccountRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "account-removed", ...args: any[]): void

    // Class property signals of Goa-1.0.Goa.Client

    connect(sigName: "notify::object-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::object-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::object-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::object-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::object-manager", ...args: any[]): void
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

    // Constructors of Goa-1.0.Goa.Client

    constructor(config?: Client.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_client_new().
     * @constructor 
     * @param res A #GAsyncResult.
     * @returns A #GoaClient or %NULL if @error is set. Free with g_object_unref() when done with it.
     */
    static newFinish(res: Gio.AsyncResult): Client
    /**
     * Synchronously gets a #GoaClient for the local system.
     * @constructor 
     * @param cancellable A #GCancellable or %NULL.
     * @returns A #GoaClient or %NULL if @error is set. Free with g_object_unref() when done with it.
     */
    static newSync(cancellable: Gio.Cancellable | null): Client
    _init(config?: Client.ConstructorProperties): void
    /**
     * Asynchronously gets a #GoaClient. When the operation is
     * finished, `callback` will be invoked in the <link
     * linkend="g-main-context-push-thread-default">thread-default main
     * loop</link> of the thread you are calling this method from.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Function that will be called when the result is ready.
     */
    static new(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
}

module ContactsProxy {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Contacts.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface ContactsProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Contacts {

    // Own properties of Goa-1.0.Goa.ContactsProxy

    __gtype__: number

    // Class property signals of Goa-1.0.Goa.ContactsProxy

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
    connect(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): number
    on(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Constructors of Goa-1.0.Goa.ContactsProxy

    constructor(config?: ContactsProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_contacts_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_contacts_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newFinish(res: Gio.AsyncResult): ContactsProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_contacts_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_contacts_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusFinish(res: Gio.AsyncResult): ContactsProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_contacts_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_contacts_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): ContactsProxy

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
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Contacts.top_of_page">org.gnome.OnlineAccounts.Contacts</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_contacts_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): ContactsProxy

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
     * Like goa_contacts_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_contacts_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_contacts_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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

module ContactsSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Contacts.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface ContactsSkeleton extends Gio.DBusInterface, Contacts {

    // Own properties of Goa-1.0.Goa.ContactsSkeleton

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

    // Class property signals of Goa-1.0.Goa.ContactsSkeleton

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
    connect(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): number
    on(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Own properties of Goa-1.0.Goa.DocumentsProxy

    __gtype__: number

    // Class property signals of Goa-1.0.Goa.DocumentsProxy

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Constructors of Goa-1.0.Goa.DocumentsProxy

    constructor(config?: DocumentsProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_documents_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_documents_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newFinish(res: Gio.AsyncResult): DocumentsProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_documents_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_documents_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusFinish(res: Gio.AsyncResult): DocumentsProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_documents_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_documents_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): DocumentsProxy

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
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Documents.top_of_page">org.gnome.OnlineAccounts.Documents</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_documents_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): DocumentsProxy

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
     * Like goa_documents_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_documents_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_documents_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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

module DocumentsSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Documents.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface DocumentsSkeleton extends Gio.DBusInterface, Documents {

    // Own properties of Goa-1.0.Goa.DocumentsSkeleton

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

    // Class property signals of Goa-1.0.Goa.DocumentsSkeleton

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Own properties of Goa-1.0.Goa.ExchangeProxy

    __gtype__: number

    // Class property signals of Goa-1.0.Goa.ExchangeProxy

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
    connect(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): number
    on(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::host", callback: (...args: any[]) => void): number
    on(sigName: "notify::host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::host", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Constructors of Goa-1.0.Goa.ExchangeProxy

    constructor(config?: ExchangeProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_exchange_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_exchange_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newFinish(res: Gio.AsyncResult): ExchangeProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_exchange_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_exchange_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusFinish(res: Gio.AsyncResult): ExchangeProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_exchange_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_exchange_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): ExchangeProxy

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
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Exchange.top_of_page">org.gnome.OnlineAccounts.Exchange</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_exchange_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): ExchangeProxy

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
     * Like goa_exchange_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_exchange_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_exchange_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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

module ExchangeSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Exchange.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface ExchangeSkeleton extends Gio.DBusInterface, Exchange {

    // Own properties of Goa-1.0.Goa.ExchangeSkeleton

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

    // Class property signals of Goa-1.0.Goa.ExchangeSkeleton

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
    connect(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): number
    on(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::host", callback: (...args: any[]) => void): number
    on(sigName: "notify::host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::host", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Own properties of Goa-1.0.Goa.FilesProxy

    __gtype__: number

    // Class property signals of Goa-1.0.Goa.FilesProxy

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
    connect(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): number
    on(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Constructors of Goa-1.0.Goa.FilesProxy

    constructor(config?: FilesProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_files_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_files_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newFinish(res: Gio.AsyncResult): FilesProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_files_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_files_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusFinish(res: Gio.AsyncResult): FilesProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_files_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_files_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): FilesProxy

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
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Files.top_of_page">org.gnome.OnlineAccounts.Files</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_files_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): FilesProxy

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
     * Like goa_files_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_files_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_files_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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

module FilesSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Files.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface FilesSkeleton extends Gio.DBusInterface, Files {

    // Own properties of Goa-1.0.Goa.FilesSkeleton

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

    // Class property signals of Goa-1.0.Goa.FilesSkeleton

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
    connect(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): number
    on(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Own properties of Goa-1.0.Goa.MailProxy

    __gtype__: number

    // Class property signals of Goa-1.0.Goa.MailProxy

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
    connect(sigName: "notify::email-address", callback: (...args: any[]) => void): number
    on(sigName: "notify::email-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::email-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::email-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::email-address", ...args: any[]): void
    connect(sigName: "notify::imap-accept-ssl-errors", callback: (...args: any[]) => void): number
    on(sigName: "notify::imap-accept-ssl-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::imap-accept-ssl-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::imap-accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::imap-accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::imap-host", callback: (...args: any[]) => void): number
    on(sigName: "notify::imap-host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::imap-host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::imap-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::imap-host", ...args: any[]): void
    connect(sigName: "notify::imap-supported", callback: (...args: any[]) => void): number
    on(sigName: "notify::imap-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::imap-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::imap-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::imap-supported", ...args: any[]): void
    connect(sigName: "notify::imap-use-ssl", callback: (...args: any[]) => void): number
    on(sigName: "notify::imap-use-ssl", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::imap-use-ssl", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::imap-use-ssl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::imap-use-ssl", ...args: any[]): void
    connect(sigName: "notify::imap-use-tls", callback: (...args: any[]) => void): number
    on(sigName: "notify::imap-use-tls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::imap-use-tls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::imap-use-tls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::imap-use-tls", ...args: any[]): void
    connect(sigName: "notify::imap-user-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::imap-user-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::imap-user-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::imap-user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::imap-user-name", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::smtp-accept-ssl-errors", callback: (...args: any[]) => void): number
    on(sigName: "notify::smtp-accept-ssl-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smtp-accept-ssl-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smtp-accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smtp-accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::smtp-auth-login", callback: (...args: any[]) => void): number
    on(sigName: "notify::smtp-auth-login", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smtp-auth-login", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smtp-auth-login", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smtp-auth-login", ...args: any[]): void
    connect(sigName: "notify::smtp-auth-plain", callback: (...args: any[]) => void): number
    on(sigName: "notify::smtp-auth-plain", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smtp-auth-plain", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smtp-auth-plain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smtp-auth-plain", ...args: any[]): void
    connect(sigName: "notify::smtp-auth-xoauth2", callback: (...args: any[]) => void): number
    on(sigName: "notify::smtp-auth-xoauth2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smtp-auth-xoauth2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smtp-auth-xoauth2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smtp-auth-xoauth2", ...args: any[]): void
    connect(sigName: "notify::smtp-host", callback: (...args: any[]) => void): number
    on(sigName: "notify::smtp-host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smtp-host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smtp-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smtp-host", ...args: any[]): void
    connect(sigName: "notify::smtp-supported", callback: (...args: any[]) => void): number
    on(sigName: "notify::smtp-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smtp-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smtp-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smtp-supported", ...args: any[]): void
    connect(sigName: "notify::smtp-use-auth", callback: (...args: any[]) => void): number
    on(sigName: "notify::smtp-use-auth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smtp-use-auth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smtp-use-auth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smtp-use-auth", ...args: any[]): void
    connect(sigName: "notify::smtp-use-ssl", callback: (...args: any[]) => void): number
    on(sigName: "notify::smtp-use-ssl", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smtp-use-ssl", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smtp-use-ssl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smtp-use-ssl", ...args: any[]): void
    connect(sigName: "notify::smtp-use-tls", callback: (...args: any[]) => void): number
    on(sigName: "notify::smtp-use-tls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smtp-use-tls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smtp-use-tls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smtp-use-tls", ...args: any[]): void
    connect(sigName: "notify::smtp-user-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::smtp-user-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smtp-user-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smtp-user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smtp-user-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Constructors of Goa-1.0.Goa.MailProxy

    constructor(config?: MailProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_mail_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_mail_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newFinish(res: Gio.AsyncResult): MailProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_mail_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_mail_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusFinish(res: Gio.AsyncResult): MailProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_mail_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_mail_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): MailProxy

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
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Mail.top_of_page">org.gnome.OnlineAccounts.Mail</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_mail_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): MailProxy

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
     * Like goa_mail_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_mail_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_mail_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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

module MailSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Mail.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface MailSkeleton extends Gio.DBusInterface, Mail {

    // Own properties of Goa-1.0.Goa.MailSkeleton

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

    // Class property signals of Goa-1.0.Goa.MailSkeleton

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
    connect(sigName: "notify::email-address", callback: (...args: any[]) => void): number
    on(sigName: "notify::email-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::email-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::email-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::email-address", ...args: any[]): void
    connect(sigName: "notify::imap-accept-ssl-errors", callback: (...args: any[]) => void): number
    on(sigName: "notify::imap-accept-ssl-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::imap-accept-ssl-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::imap-accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::imap-accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::imap-host", callback: (...args: any[]) => void): number
    on(sigName: "notify::imap-host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::imap-host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::imap-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::imap-host", ...args: any[]): void
    connect(sigName: "notify::imap-supported", callback: (...args: any[]) => void): number
    on(sigName: "notify::imap-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::imap-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::imap-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::imap-supported", ...args: any[]): void
    connect(sigName: "notify::imap-use-ssl", callback: (...args: any[]) => void): number
    on(sigName: "notify::imap-use-ssl", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::imap-use-ssl", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::imap-use-ssl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::imap-use-ssl", ...args: any[]): void
    connect(sigName: "notify::imap-use-tls", callback: (...args: any[]) => void): number
    on(sigName: "notify::imap-use-tls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::imap-use-tls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::imap-use-tls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::imap-use-tls", ...args: any[]): void
    connect(sigName: "notify::imap-user-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::imap-user-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::imap-user-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::imap-user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::imap-user-name", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::smtp-accept-ssl-errors", callback: (...args: any[]) => void): number
    on(sigName: "notify::smtp-accept-ssl-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smtp-accept-ssl-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smtp-accept-ssl-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smtp-accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::smtp-auth-login", callback: (...args: any[]) => void): number
    on(sigName: "notify::smtp-auth-login", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smtp-auth-login", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smtp-auth-login", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smtp-auth-login", ...args: any[]): void
    connect(sigName: "notify::smtp-auth-plain", callback: (...args: any[]) => void): number
    on(sigName: "notify::smtp-auth-plain", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smtp-auth-plain", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smtp-auth-plain", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smtp-auth-plain", ...args: any[]): void
    connect(sigName: "notify::smtp-auth-xoauth2", callback: (...args: any[]) => void): number
    on(sigName: "notify::smtp-auth-xoauth2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smtp-auth-xoauth2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smtp-auth-xoauth2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smtp-auth-xoauth2", ...args: any[]): void
    connect(sigName: "notify::smtp-host", callback: (...args: any[]) => void): number
    on(sigName: "notify::smtp-host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smtp-host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smtp-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smtp-host", ...args: any[]): void
    connect(sigName: "notify::smtp-supported", callback: (...args: any[]) => void): number
    on(sigName: "notify::smtp-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smtp-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smtp-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smtp-supported", ...args: any[]): void
    connect(sigName: "notify::smtp-use-auth", callback: (...args: any[]) => void): number
    on(sigName: "notify::smtp-use-auth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smtp-use-auth", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smtp-use-auth", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smtp-use-auth", ...args: any[]): void
    connect(sigName: "notify::smtp-use-ssl", callback: (...args: any[]) => void): number
    on(sigName: "notify::smtp-use-ssl", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smtp-use-ssl", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smtp-use-ssl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smtp-use-ssl", ...args: any[]): void
    connect(sigName: "notify::smtp-use-tls", callback: (...args: any[]) => void): number
    on(sigName: "notify::smtp-use-tls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smtp-use-tls", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smtp-use-tls", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smtp-use-tls", ...args: any[]): void
    connect(sigName: "notify::smtp-user-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::smtp-user-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::smtp-user-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::smtp-user-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::smtp-user-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Own properties of Goa-1.0.Goa.ManagerProxy

    __gtype__: number

    // Class property signals of Goa-1.0.Goa.ManagerProxy

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Constructors of Goa-1.0.Goa.ManagerProxy

    constructor(config?: ManagerProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_manager_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_manager_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newFinish(res: Gio.AsyncResult): ManagerProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_manager_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_manager_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusFinish(res: Gio.AsyncResult): ManagerProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_manager_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_manager_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): ManagerProxy

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
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Manager.top_of_page">org.gnome.OnlineAccounts.Manager</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_manager_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): ManagerProxy

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
     * Like goa_manager_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_manager_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_manager_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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

module ManagerSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Manager.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface ManagerSkeleton extends Gio.DBusInterface, Manager {

    // Own properties of Goa-1.0.Goa.ManagerSkeleton

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

    // Class property signals of Goa-1.0.Goa.ManagerSkeleton

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Own properties of Goa-1.0.Goa.MapsProxy

    __gtype__: number

    // Class property signals of Goa-1.0.Goa.MapsProxy

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Constructors of Goa-1.0.Goa.MapsProxy

    constructor(config?: MapsProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_maps_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_maps_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newFinish(res: Gio.AsyncResult): MapsProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_maps_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_maps_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusFinish(res: Gio.AsyncResult): MapsProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_maps_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_maps_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): MapsProxy

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
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Maps.top_of_page">org.gnome.OnlineAccounts.Maps</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_maps_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): MapsProxy

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
     * Like goa_maps_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_maps_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_maps_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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

module MapsSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Maps.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface MapsSkeleton extends Gio.DBusInterface, Maps {

    // Own properties of Goa-1.0.Goa.MapsSkeleton

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

    // Class property signals of Goa-1.0.Goa.MapsSkeleton

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Own properties of Goa-1.0.Goa.MediaServerProxy

    __gtype__: number

    // Class property signals of Goa-1.0.Goa.MediaServerProxy

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
    connect(sigName: "notify::dlna-supported", callback: (...args: any[]) => void): number
    on(sigName: "notify::dlna-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dlna-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dlna-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dlna-supported", ...args: any[]): void
    connect(sigName: "notify::udn", callback: (...args: any[]) => void): number
    on(sigName: "notify::udn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::udn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::udn", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Constructors of Goa-1.0.Goa.MediaServerProxy

    constructor(config?: MediaServerProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_media_server_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_media_server_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newFinish(res: Gio.AsyncResult): MediaServerProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_media_server_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_media_server_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusFinish(res: Gio.AsyncResult): MediaServerProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_media_server_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_media_server_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): MediaServerProxy

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
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page">org.gnome.OnlineAccounts.MediaServer</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_media_server_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): MediaServerProxy

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
     * Like goa_media_server_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_media_server_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_media_server_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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

module MediaServerSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, MediaServer.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface MediaServerSkeleton extends Gio.DBusInterface, MediaServer {

    // Own properties of Goa-1.0.Goa.MediaServerSkeleton

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

    // Class property signals of Goa-1.0.Goa.MediaServerSkeleton

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
    connect(sigName: "notify::dlna-supported", callback: (...args: any[]) => void): number
    on(sigName: "notify::dlna-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dlna-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dlna-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dlna-supported", ...args: any[]): void
    connect(sigName: "notify::udn", callback: (...args: any[]) => void): number
    on(sigName: "notify::udn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::udn", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::udn", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::udn", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Own properties of Goa-1.0.Goa.MusicProxy

    __gtype__: number

    // Class property signals of Goa-1.0.Goa.MusicProxy

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Constructors of Goa-1.0.Goa.MusicProxy

    constructor(config?: MusicProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_music_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_music_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newFinish(res: Gio.AsyncResult): MusicProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_music_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_music_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusFinish(res: Gio.AsyncResult): MusicProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_music_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_music_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): MusicProxy

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
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Music.top_of_page">org.gnome.OnlineAccounts.Music</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_music_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): MusicProxy

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
     * Like goa_music_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_music_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_music_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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

module MusicSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Music.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface MusicSkeleton extends Gio.DBusInterface, Music {

    // Own properties of Goa-1.0.Goa.MusicSkeleton

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

    // Class property signals of Goa-1.0.Goa.MusicSkeleton

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Own properties of Goa-1.0.Goa.OAuth2BasedProxy

    __gtype__: number

    // Class property signals of Goa-1.0.Goa.OAuth2BasedProxy

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
    connect(sigName: "notify::client-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::client-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::client-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::client-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::client-id", ...args: any[]): void
    connect(sigName: "notify::client-secret", callback: (...args: any[]) => void): number
    on(sigName: "notify::client-secret", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::client-secret", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::client-secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::client-secret", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Constructors of Goa-1.0.Goa.OAuth2BasedProxy

    constructor(config?: OAuth2BasedProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_oauth2_based_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_oauth2_based_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newFinish(res: Gio.AsyncResult): OAuth2BasedProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_oauth2_based_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_oauth2_based_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusFinish(res: Gio.AsyncResult): OAuth2BasedProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_oauth2_based_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_oauth2_based_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): OAuth2BasedProxy

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
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page">org.gnome.OnlineAccounts.OAuth2Based</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_oauth2_based_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): OAuth2BasedProxy

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
     * Like goa_oauth2_based_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_oauth2_based_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_oauth2_based_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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

module OAuth2BasedSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, OAuth2Based.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface OAuth2BasedSkeleton extends Gio.DBusInterface, OAuth2Based {

    // Own properties of Goa-1.0.Goa.OAuth2BasedSkeleton

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

    // Class property signals of Goa-1.0.Goa.OAuth2BasedSkeleton

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
    connect(sigName: "notify::client-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::client-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::client-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::client-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::client-id", ...args: any[]): void
    connect(sigName: "notify::client-secret", callback: (...args: any[]) => void): number
    on(sigName: "notify::client-secret", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::client-secret", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::client-secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::client-secret", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Own properties of Goa-1.0.Goa.OAuthBasedProxy

    __gtype__: number

    // Class property signals of Goa-1.0.Goa.OAuthBasedProxy

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
    connect(sigName: "notify::consumer-key", callback: (...args: any[]) => void): number
    on(sigName: "notify::consumer-key", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::consumer-key", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::consumer-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::consumer-key", ...args: any[]): void
    connect(sigName: "notify::consumer-secret", callback: (...args: any[]) => void): number
    on(sigName: "notify::consumer-secret", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::consumer-secret", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::consumer-secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::consumer-secret", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Constructors of Goa-1.0.Goa.OAuthBasedProxy

    constructor(config?: OAuthBasedProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_oauth_based_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_oauth_based_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newFinish(res: Gio.AsyncResult): OAuthBasedProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_oauth_based_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_oauth_based_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusFinish(res: Gio.AsyncResult): OAuthBasedProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_oauth_based_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_oauth_based_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): OAuthBasedProxy

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
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page">org.gnome.OnlineAccounts.OAuthBased</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_oauth_based_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): OAuthBasedProxy

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
     * Like goa_oauth_based_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_oauth_based_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_oauth_based_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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

module OAuthBasedSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, OAuthBased.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface OAuthBasedSkeleton extends Gio.DBusInterface, OAuthBased {

    // Own properties of Goa-1.0.Goa.OAuthBasedSkeleton

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

    // Class property signals of Goa-1.0.Goa.OAuthBasedSkeleton

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
    connect(sigName: "notify::consumer-key", callback: (...args: any[]) => void): number
    on(sigName: "notify::consumer-key", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::consumer-key", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::consumer-key", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::consumer-key", ...args: any[]): void
    connect(sigName: "notify::consumer-secret", callback: (...args: any[]) => void): number
    on(sigName: "notify::consumer-secret", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::consumer-secret", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::consumer-secret", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::consumer-secret", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Own properties of Goa-1.0.Goa.ObjectManagerClient

    __gtype__: number

    // Class property signals of Goa-1.0.Goa.ObjectManagerClient

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
    disconnect(id: number): void
}

/**
 * The #GoaObjectManagerClient structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
class ObjectManagerClient extends Gio.DBusObjectManagerClient {

    // Own properties of Goa-1.0.Goa.ObjectManagerClient

    static name: string

    // Constructors of Goa-1.0.Goa.ObjectManagerClient

    constructor(config?: ObjectManagerClient.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_object_manager_client_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_object_manager_client_new().
     * @returns The constructed object manager client or %NULL if @error is set.
     */
    static newFinish(res: Gio.AsyncResult): ObjectManagerClient

    // Overloads of newFinish

    /**
     * Finishes an operation started with g_dbus_object_manager_client_new().
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to g_dbus_object_manager_client_new().
     * @returns A   #GDBusObjectManagerClient object or %NULL if @error is set. Free   with g_object_unref().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusObjectManagerClient
    /**
     * Finishes an operation started with goa_object_manager_client_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_object_manager_client_new_for_bus().
     * @returns The constructed object manager client or %NULL if @error is set.
     */
    static newForBusFinish(res: Gio.AsyncResult): ObjectManagerClient

    // Overloads of newForBusFinish

    /**
     * Finishes an operation started with g_dbus_object_manager_client_new_for_bus().
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to g_dbus_object_manager_client_new_for_bus().
     * @returns A   #GDBusObjectManagerClient object or %NULL if @error is set. Free   with g_object_unref().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusObjectManagerClient
    /**
     * Like goa_object_manager_client_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_object_manager_client_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusObjectManagerClientFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed object manager client or %NULL if @error is set.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): ObjectManagerClient

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
     * Synchronously creates #GDBusObjectManagerClient using goa_object_manager_client_get_proxy_type() as the #GDBusProxyTypeFunc. See g_dbus_object_manager_client_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_object_manager_client_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusObjectManagerClientFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed object manager client or %NULL if @error is set.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): ObjectManagerClient

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
     * Like goa_object_manager_client_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_object_manager_client_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_object_manager_client_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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
     * @returns A #GDBusProxy derived #GType if @interface_name is not %NULL, otherwise the #GType for #GoaObjectProxy.
     */
    static getProxyType(manager: Gio.DBusObjectManagerClient, objectPath: string | null, interfaceName: string | null, userData: any | null): GObject.GType
}

module ObjectProxy {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusObject.ConstructorProperties, Object.ConstructorProperties, Gio.DBusObjectProxy.ConstructorProperties {
    }

}

interface ObjectProxy extends Gio.DBusObject, Object {

    // Own properties of Goa-1.0.Goa.ObjectProxy

    __gtype__: number

    // Class property signals of Goa-1.0.Goa.ObjectProxy

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
    connect(sigName: "notify::calendar", callback: (...args: any[]) => void): number
    on(sigName: "notify::calendar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::calendar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::calendar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::calendar", ...args: any[]): void
    connect(sigName: "notify::chat", callback: (...args: any[]) => void): number
    on(sigName: "notify::chat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::chat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::chat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::chat", ...args: any[]): void
    connect(sigName: "notify::contacts", callback: (...args: any[]) => void): number
    on(sigName: "notify::contacts", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::contacts", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::contacts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::contacts", ...args: any[]): void
    connect(sigName: "notify::documents", callback: (...args: any[]) => void): number
    on(sigName: "notify::documents", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::documents", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::documents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::documents", ...args: any[]): void
    connect(sigName: "notify::exchange", callback: (...args: any[]) => void): number
    on(sigName: "notify::exchange", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::exchange", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::exchange", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::exchange", ...args: any[]): void
    connect(sigName: "notify::files", callback: (...args: any[]) => void): number
    on(sigName: "notify::files", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::files", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::files", ...args: any[]): void
    connect(sigName: "notify::mail", callback: (...args: any[]) => void): number
    on(sigName: "notify::mail", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mail", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mail", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mail", ...args: any[]): void
    connect(sigName: "notify::manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::manager", ...args: any[]): void
    connect(sigName: "notify::maps", callback: (...args: any[]) => void): number
    on(sigName: "notify::maps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::maps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::maps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::maps", ...args: any[]): void
    connect(sigName: "notify::media-server", callback: (...args: any[]) => void): number
    on(sigName: "notify::media-server", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::media-server", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::media-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::media-server", ...args: any[]): void
    connect(sigName: "notify::music", callback: (...args: any[]) => void): number
    on(sigName: "notify::music", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::music", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::music", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::music", ...args: any[]): void
    connect(sigName: "notify::oauth-based", callback: (...args: any[]) => void): number
    on(sigName: "notify::oauth-based", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::oauth-based", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::oauth-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::oauth-based", ...args: any[]): void
    connect(sigName: "notify::oauth2-based", callback: (...args: any[]) => void): number
    on(sigName: "notify::oauth2-based", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::oauth2-based", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::oauth2-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::oauth2-based", ...args: any[]): void
    connect(sigName: "notify::password-based", callback: (...args: any[]) => void): number
    on(sigName: "notify::password-based", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::password-based", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::password-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::password-based", ...args: any[]): void
    connect(sigName: "notify::photos", callback: (...args: any[]) => void): number
    on(sigName: "notify::photos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::photos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::photos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::photos", ...args: any[]): void
    connect(sigName: "notify::printers", callback: (...args: any[]) => void): number
    on(sigName: "notify::printers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::printers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::printers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::printers", ...args: any[]): void
    connect(sigName: "notify::read-later", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-later", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-later", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-later", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-later", ...args: any[]): void
    connect(sigName: "notify::ticketing", callback: (...args: any[]) => void): number
    on(sigName: "notify::ticketing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ticketing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ticketing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ticketing", ...args: any[]): void
    connect(sigName: "notify::todo", callback: (...args: any[]) => void): number
    on(sigName: "notify::todo", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::todo", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::todo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::todo", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Constructors of Goa-1.0.Goa.ObjectProxy

    constructor(config?: ObjectProxy.ConstructorProperties) 
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
    static new(connection: Gio.DBusConnection, objectPath: string | null): ObjectProxy

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
    _init(config?: ObjectProxy.ConstructorProperties): void
}

module ObjectSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusObject.ConstructorProperties, Object.ConstructorProperties, Gio.DBusObjectSkeleton.ConstructorProperties {
    }

}

interface ObjectSkeleton extends Gio.DBusObject, Object {

    // Own properties of Goa-1.0.Goa.ObjectSkeleton

    __gtype__: number

    // Owm methods of Goa-1.0.Goa.ObjectSkeleton

    /**
     * Sets the #GoaAccount instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Account.top_of_page">org.gnome.OnlineAccounts.Account</link> on `object`.
     * @param interface A #GoaAccount or %NULL to clear the interface.
     */
    setAccount(interface: Account | null): void
    /**
     * Sets the #GoaCalendar instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Calendar.top_of_page">org.gnome.OnlineAccounts.Calendar</link> on `object`.
     * @param interface A #GoaCalendar or %NULL to clear the interface.
     */
    setCalendar(interface: Calendar | null): void
    /**
     * Sets the #GoaChat instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Chat.top_of_page">org.gnome.OnlineAccounts.Chat</link> on `object`.
     * @param interface A #GoaChat or %NULL to clear the interface.
     */
    setChat(interface: Chat | null): void
    /**
     * Sets the #GoaContacts instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Contacts.top_of_page">org.gnome.OnlineAccounts.Contacts</link> on `object`.
     * @param interface A #GoaContacts or %NULL to clear the interface.
     */
    setContacts(interface: Contacts | null): void
    /**
     * Sets the #GoaDocuments instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Documents.top_of_page">org.gnome.OnlineAccounts.Documents</link> on `object`.
     * @param interface A #GoaDocuments or %NULL to clear the interface.
     */
    setDocuments(interface: Documents | null): void
    /**
     * Sets the #GoaExchange instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Exchange.top_of_page">org.gnome.OnlineAccounts.Exchange</link> on `object`.
     * @param interface A #GoaExchange or %NULL to clear the interface.
     */
    setExchange(interface: Exchange | null): void
    /**
     * Sets the #GoaFiles instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Files.top_of_page">org.gnome.OnlineAccounts.Files</link> on `object`.
     * @param interface A #GoaFiles or %NULL to clear the interface.
     */
    setFiles(interface: Files | null): void
    /**
     * Sets the #GoaMail instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Mail.top_of_page">org.gnome.OnlineAccounts.Mail</link> on `object`.
     * @param interface A #GoaMail or %NULL to clear the interface.
     */
    setMail(interface: Mail | null): void
    /**
     * Sets the #GoaManager instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Manager.top_of_page">org.gnome.OnlineAccounts.Manager</link> on `object`.
     * @param interface A #GoaManager or %NULL to clear the interface.
     */
    setManager(interface: Manager | null): void
    /**
     * Sets the #GoaMaps instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Maps.top_of_page">org.gnome.OnlineAccounts.Maps</link> on `object`.
     * @param interface A #GoaMaps or %NULL to clear the interface.
     */
    setMaps(interface: Maps | null): void
    /**
     * Sets the #GoaMediaServer instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page">org.gnome.OnlineAccounts.MediaServer</link> on `object`.
     * @param interface A #GoaMediaServer or %NULL to clear the interface.
     */
    setMediaServer(interface: MediaServer | null): void
    /**
     * Sets the #GoaMusic instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Music.top_of_page">org.gnome.OnlineAccounts.Music</link> on `object`.
     * @param interface A #GoaMusic or %NULL to clear the interface.
     */
    setMusic(interface: Music | null): void
    /**
     * Sets the #GoaOAuth2Based instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page">org.gnome.OnlineAccounts.OAuth2Based</link> on `object`.
     * @param interface A #GoaOAuth2Based or %NULL to clear the interface.
     */
    setOauth2Based(interface: OAuth2Based | null): void
    /**
     * Sets the #GoaOAuthBased instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page">org.gnome.OnlineAccounts.OAuthBased</link> on `object`.
     * @param interface A #GoaOAuthBased or %NULL to clear the interface.
     */
    setOauthBased(interface: OAuthBased | null): void
    /**
     * Sets the #GoaPasswordBased instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page">org.gnome.OnlineAccounts.PasswordBased</link> on `object`.
     * @param interface A #GoaPasswordBased or %NULL to clear the interface.
     */
    setPasswordBased(interface: PasswordBased | null): void
    /**
     * Sets the #GoaPhotos instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Photos.top_of_page">org.gnome.OnlineAccounts.Photos</link> on `object`.
     * @param interface A #GoaPhotos or %NULL to clear the interface.
     */
    setPhotos(interface: Photos | null): void
    /**
     * Sets the #GoaPrinters instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Printers.top_of_page">org.gnome.OnlineAccounts.Printers</link> on `object`.
     * @param interface A #GoaPrinters or %NULL to clear the interface.
     */
    setPrinters(interface: Printers | null): void
    /**
     * Sets the #GoaReadLater instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page">org.gnome.OnlineAccounts.ReadLater</link> on `object`.
     * @param interface A #GoaReadLater or %NULL to clear the interface.
     */
    setReadLater(interface: ReadLater | null): void
    /**
     * Sets the #GoaTicketing instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Ticketing.top_of_page">org.gnome.OnlineAccounts.Ticketing</link> on `object`.
     * @param interface A #GoaTicketing or %NULL to clear the interface.
     */
    setTicketing(interface: Ticketing | null): void
    /**
     * Sets the #GoaTodo instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Todo.top_of_page">org.gnome.OnlineAccounts.Todo</link> on `object`.
     * @param interface A #GoaTodo or %NULL to clear the interface.
     */
    setTodo(interface: Todo | null): void

    // Class property signals of Goa-1.0.Goa.ObjectSkeleton

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
    connect(sigName: "notify::calendar", callback: (...args: any[]) => void): number
    on(sigName: "notify::calendar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::calendar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::calendar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::calendar", ...args: any[]): void
    connect(sigName: "notify::chat", callback: (...args: any[]) => void): number
    on(sigName: "notify::chat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::chat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::chat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::chat", ...args: any[]): void
    connect(sigName: "notify::contacts", callback: (...args: any[]) => void): number
    on(sigName: "notify::contacts", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::contacts", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::contacts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::contacts", ...args: any[]): void
    connect(sigName: "notify::documents", callback: (...args: any[]) => void): number
    on(sigName: "notify::documents", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::documents", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::documents", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::documents", ...args: any[]): void
    connect(sigName: "notify::exchange", callback: (...args: any[]) => void): number
    on(sigName: "notify::exchange", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::exchange", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::exchange", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::exchange", ...args: any[]): void
    connect(sigName: "notify::files", callback: (...args: any[]) => void): number
    on(sigName: "notify::files", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::files", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::files", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::files", ...args: any[]): void
    connect(sigName: "notify::mail", callback: (...args: any[]) => void): number
    on(sigName: "notify::mail", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mail", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mail", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mail", ...args: any[]): void
    connect(sigName: "notify::manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::manager", ...args: any[]): void
    connect(sigName: "notify::maps", callback: (...args: any[]) => void): number
    on(sigName: "notify::maps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::maps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::maps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::maps", ...args: any[]): void
    connect(sigName: "notify::media-server", callback: (...args: any[]) => void): number
    on(sigName: "notify::media-server", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::media-server", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::media-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::media-server", ...args: any[]): void
    connect(sigName: "notify::music", callback: (...args: any[]) => void): number
    on(sigName: "notify::music", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::music", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::music", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::music", ...args: any[]): void
    connect(sigName: "notify::oauth-based", callback: (...args: any[]) => void): number
    on(sigName: "notify::oauth-based", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::oauth-based", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::oauth-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::oauth-based", ...args: any[]): void
    connect(sigName: "notify::oauth2-based", callback: (...args: any[]) => void): number
    on(sigName: "notify::oauth2-based", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::oauth2-based", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::oauth2-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::oauth2-based", ...args: any[]): void
    connect(sigName: "notify::password-based", callback: (...args: any[]) => void): number
    on(sigName: "notify::password-based", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::password-based", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::password-based", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::password-based", ...args: any[]): void
    connect(sigName: "notify::photos", callback: (...args: any[]) => void): number
    on(sigName: "notify::photos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::photos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::photos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::photos", ...args: any[]): void
    connect(sigName: "notify::printers", callback: (...args: any[]) => void): number
    on(sigName: "notify::printers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::printers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::printers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::printers", ...args: any[]): void
    connect(sigName: "notify::read-later", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-later", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-later", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-later", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-later", ...args: any[]): void
    connect(sigName: "notify::ticketing", callback: (...args: any[]) => void): number
    on(sigName: "notify::ticketing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ticketing", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ticketing", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ticketing", ...args: any[]): void
    connect(sigName: "notify::todo", callback: (...args: any[]) => void): number
    on(sigName: "notify::todo", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::todo", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::todo", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::todo", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Constructors of Goa-1.0.Goa.ObjectSkeleton

    constructor(config?: ObjectSkeleton.ConstructorProperties) 
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
    static new(objectPath: string | null): ObjectSkeleton

    // Overloads of new

    /**
     * Creates a new #GDBusObjectSkeleton.
     * @constructor 
     * @param objectPath An object path.
     * @returns A #GDBusObjectSkeleton. Free with g_object_unref().
     */
    static new(objectPath: string | null): Gio.DBusObjectSkeleton
    _init(config?: ObjectSkeleton.ConstructorProperties): void
}

module PasswordBasedProxy {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, PasswordBased.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface PasswordBasedProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, PasswordBased {

    // Own properties of Goa-1.0.Goa.PasswordBasedProxy

    __gtype__: number

    // Class property signals of Goa-1.0.Goa.PasswordBasedProxy

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Constructors of Goa-1.0.Goa.PasswordBasedProxy

    constructor(config?: PasswordBasedProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_password_based_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_password_based_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newFinish(res: Gio.AsyncResult): PasswordBasedProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_password_based_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_password_based_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusFinish(res: Gio.AsyncResult): PasswordBasedProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_password_based_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_password_based_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): PasswordBasedProxy

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
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page">org.gnome.OnlineAccounts.PasswordBased</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_password_based_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): PasswordBasedProxy

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
     * Like goa_password_based_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_password_based_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_password_based_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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

module PasswordBasedSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, PasswordBased.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface PasswordBasedSkeleton extends Gio.DBusInterface, PasswordBased {

    // Own properties of Goa-1.0.Goa.PasswordBasedSkeleton

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

    // Class property signals of Goa-1.0.Goa.PasswordBasedSkeleton

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Own properties of Goa-1.0.Goa.PhotosProxy

    __gtype__: number

    // Class property signals of Goa-1.0.Goa.PhotosProxy

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Constructors of Goa-1.0.Goa.PhotosProxy

    constructor(config?: PhotosProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_photos_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_photos_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newFinish(res: Gio.AsyncResult): PhotosProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_photos_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_photos_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusFinish(res: Gio.AsyncResult): PhotosProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_photos_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_photos_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): PhotosProxy

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
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Photos.top_of_page">org.gnome.OnlineAccounts.Photos</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_photos_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): PhotosProxy

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
     * Like goa_photos_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_photos_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_photos_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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

module PhotosSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Photos.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface PhotosSkeleton extends Gio.DBusInterface, Photos {

    // Own properties of Goa-1.0.Goa.PhotosSkeleton

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

    // Class property signals of Goa-1.0.Goa.PhotosSkeleton

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Own properties of Goa-1.0.Goa.PrintersProxy

    __gtype__: number

    // Class property signals of Goa-1.0.Goa.PrintersProxy

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Constructors of Goa-1.0.Goa.PrintersProxy

    constructor(config?: PrintersProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_printers_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_printers_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newFinish(res: Gio.AsyncResult): PrintersProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_printers_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_printers_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusFinish(res: Gio.AsyncResult): PrintersProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_printers_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_printers_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): PrintersProxy

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
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Printers.top_of_page">org.gnome.OnlineAccounts.Printers</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_printers_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): PrintersProxy

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
     * Like goa_printers_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_printers_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_printers_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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

module PrintersSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Printers.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface PrintersSkeleton extends Gio.DBusInterface, Printers {

    // Own properties of Goa-1.0.Goa.PrintersSkeleton

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

    // Class property signals of Goa-1.0.Goa.PrintersSkeleton

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Own properties of Goa-1.0.Goa.ReadLaterProxy

    __gtype__: number

    // Class property signals of Goa-1.0.Goa.ReadLaterProxy

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Constructors of Goa-1.0.Goa.ReadLaterProxy

    constructor(config?: ReadLaterProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_read_later_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_read_later_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newFinish(res: Gio.AsyncResult): ReadLaterProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_read_later_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_read_later_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusFinish(res: Gio.AsyncResult): ReadLaterProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_read_later_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_read_later_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): ReadLaterProxy

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
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page">org.gnome.OnlineAccounts.ReadLater</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_read_later_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): ReadLaterProxy

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
     * Like goa_read_later_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_read_later_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_read_later_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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

module ReadLaterSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, ReadLater.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface ReadLaterSkeleton extends Gio.DBusInterface, ReadLater {

    // Own properties of Goa-1.0.Goa.ReadLaterSkeleton

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

    // Class property signals of Goa-1.0.Goa.ReadLaterSkeleton

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Own properties of Goa-1.0.Goa.TicketingProxy

    __gtype__: number

    // Class property signals of Goa-1.0.Goa.TicketingProxy

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
    connect(sigName: "notify::details", callback: (...args: any[]) => void): number
    on(sigName: "notify::details", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::details", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::details", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Constructors of Goa-1.0.Goa.TicketingProxy

    constructor(config?: TicketingProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_ticketing_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_ticketing_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newFinish(res: Gio.AsyncResult): TicketingProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_ticketing_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_ticketing_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusFinish(res: Gio.AsyncResult): TicketingProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_ticketing_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_ticketing_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): TicketingProxy

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
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Ticketing.top_of_page">org.gnome.OnlineAccounts.Ticketing</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_ticketing_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): TicketingProxy

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
     * Like goa_ticketing_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_ticketing_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_ticketing_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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

module TicketingSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Ticketing.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface TicketingSkeleton extends Gio.DBusInterface, Ticketing {

    // Own properties of Goa-1.0.Goa.TicketingSkeleton

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

    // Class property signals of Goa-1.0.Goa.TicketingSkeleton

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
    connect(sigName: "notify::details", callback: (...args: any[]) => void): number
    on(sigName: "notify::details", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::details", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::details", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::details", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Own properties of Goa-1.0.Goa.TodoProxy

    __gtype__: number

    // Class property signals of Goa-1.0.Goa.TodoProxy

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Constructors of Goa-1.0.Goa.TodoProxy

    constructor(config?: TodoProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_todo_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_todo_proxy_new().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newFinish(res: Gio.AsyncResult): TodoProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_todo_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_todo_proxy_new_for_bus().
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusFinish(res: Gio.AsyncResult): TodoProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     * @returns A #GDBusProxy or %NULL if @error is set.    Free with g_object_unref().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_todo_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_todo_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): TodoProxy

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
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Todo.top_of_page">org.gnome.OnlineAccounts.Todo</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_todo_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @returns The constructed proxy object or %NULL if @error is set.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null): TodoProxy

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
     * Like goa_todo_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_todo_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_todo_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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

module TodoSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Todo.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface TodoSkeleton extends Gio.DBusInterface, Todo {

    // Own properties of Goa-1.0.Goa.TodoSkeleton

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

    // Class property signals of Goa-1.0.Goa.TodoSkeleton

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    parentIface: GObject.TypeInterface
    handleEnsureCredentials: (object: Account, invocation: Gio.DBusMethodInvocation) => boolean
    handleRemove: (object: Account, invocation: Gio.DBusMethodInvocation) => boolean
    getAttentionNeeded: (object: Account) => boolean
    getCalendarDisabled: (object: Account) => boolean
    getChatDisabled: (object: Account) => boolean
    getContactsDisabled: (object: Account) => boolean
    getDocumentsDisabled: (object: Account) => boolean
    getId: (object: Account) => string | null
    getIdentity: (object: Account) => string | null
    getIsTemporary: (object: Account) => boolean
    getMailDisabled: (object: Account) => boolean
    getPresentationIdentity: (object: Account) => string | null
    getProviderIcon: (object: Account) => string | null
    getProviderName: (object: Account) => string | null
    getProviderType: (object: Account) => string | null
    getTicketingDisabled: (object: Account) => boolean
    getFilesDisabled: (object: Account) => boolean
    getPhotosDisabled: (object: Account) => boolean
    getPrintersDisabled: (object: Account) => boolean
    getReadLaterDisabled: (object: Account) => boolean
    getMapsDisabled: (object: Account) => boolean
    getIsLocked: (object: Account) => boolean
    getMusicDisabled: (object: Account) => boolean
    getTodoDisabled: (object: Account) => boolean
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
    parentClass: Gio.DBusProxyClass
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
    parentClass: Gio.DBusInterfaceSkeletonClass
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
    parentIface: GObject.TypeInterface
    getAcceptSslErrors: (object: Calendar) => boolean
    getUri: (object: Calendar) => string | null
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
    parentClass: Gio.DBusProxyClass
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
    parentClass: Gio.DBusInterfaceSkeletonClass
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
    parentIface: GObject.TypeInterface
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
    parentClass: Gio.DBusProxyClass
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
    parentClass: Gio.DBusInterfaceSkeletonClass
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

    parentClass: GObject.ObjectClass
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
    parentIface: GObject.TypeInterface
    getAcceptSslErrors: (object: Contacts) => boolean
    getUri: (object: Contacts) => string | null
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
    parentClass: Gio.DBusProxyClass
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
    parentClass: Gio.DBusInterfaceSkeletonClass
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
    parentIface: GObject.TypeInterface
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
    parentClass: Gio.DBusProxyClass
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
    parentClass: Gio.DBusInterfaceSkeletonClass
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
    parentIface: GObject.TypeInterface
    getHost: (object: Exchange) => string | null
    getAcceptSslErrors: (object: Exchange) => boolean
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
    parentClass: Gio.DBusProxyClass
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
    parentClass: Gio.DBusInterfaceSkeletonClass
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
    parentIface: GObject.TypeInterface
    getAcceptSslErrors: (object: Files) => boolean
    getUri: (object: Files) => string | null
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
    parentClass: Gio.DBusProxyClass
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
    parentClass: Gio.DBusInterfaceSkeletonClass
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
    parentIface: GObject.TypeInterface
    getEmailAddress: (object: Mail) => string | null
    getImapHost: (object: Mail) => string | null
    getImapSupported: (object: Mail) => boolean
    getImapUseTls: (object: Mail) => boolean
    getImapUserName: (object: Mail) => string | null
    getSmtpHost: (object: Mail) => string | null
    getSmtpSupported: (object: Mail) => boolean
    getSmtpUseTls: (object: Mail) => boolean
    getSmtpUserName: (object: Mail) => string | null
    getImapAcceptSslErrors: (object: Mail) => boolean
    getImapUseSsl: (object: Mail) => boolean
    getName: (object: Mail) => string | null
    getSmtpAcceptSslErrors: (object: Mail) => boolean
    getSmtpUseAuth: (object: Mail) => boolean
    getSmtpUseSsl: (object: Mail) => boolean
    getSmtpAuthLogin: (object: Mail) => boolean
    getSmtpAuthPlain: (object: Mail) => boolean
    getSmtpAuthXoauth2: (object: Mail) => boolean
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
    parentClass: Gio.DBusProxyClass
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
    parentClass: Gio.DBusInterfaceSkeletonClass
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
    parentIface: GObject.TypeInterface
    handleAddAccount: (object: Manager, invocation: Gio.DBusMethodInvocation, argProvider: string | null, argIdentity: string | null, argPresentationIdentity: string | null, argCredentials: GLib.Variant, argDetails: GLib.Variant) => boolean
    handleIsSupportedProvider: (object: Manager, invocation: Gio.DBusMethodInvocation, argProviderType: string | null) => boolean
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
    parentClass: Gio.DBusProxyClass
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
    parentClass: Gio.DBusInterfaceSkeletonClass
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
    parentIface: GObject.TypeInterface
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
    parentClass: Gio.DBusProxyClass
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
    parentClass: Gio.DBusInterfaceSkeletonClass
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
    parentIface: GObject.TypeInterface
    getDlnaSupported: (object: MediaServer) => boolean
    getUdn: (object: MediaServer) => string | null
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
    parentClass: Gio.DBusProxyClass
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
    parentClass: Gio.DBusInterfaceSkeletonClass
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
    parentIface: GObject.TypeInterface
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
    parentClass: Gio.DBusProxyClass
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
    parentClass: Gio.DBusInterfaceSkeletonClass
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
    parentIface: GObject.TypeInterface
    handleGetAccessToken: (object: OAuth2Based, invocation: Gio.DBusMethodInvocation) => boolean
    getClientId: (object: OAuth2Based) => string | null
    getClientSecret: (object: OAuth2Based) => string | null
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
    parentClass: Gio.DBusProxyClass
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
    parentClass: Gio.DBusInterfaceSkeletonClass
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
    parentIface: GObject.TypeInterface
    handleGetAccessToken: (object: OAuthBased, invocation: Gio.DBusMethodInvocation) => boolean
    getConsumerKey: (object: OAuthBased) => string | null
    getConsumerSecret: (object: OAuthBased) => string | null
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
    parentClass: Gio.DBusProxyClass
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
    parentClass: Gio.DBusInterfaceSkeletonClass
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
    parentIface: GObject.TypeInterface
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
    parentClass: Gio.DBusObjectManagerClientClass
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
    parentClass: Gio.DBusObjectProxyClass
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
    parentClass: Gio.DBusObjectSkeletonClass
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
    parentIface: GObject.TypeInterface
    handleGetPassword: (object: PasswordBased, invocation: Gio.DBusMethodInvocation, argId: string | null) => boolean
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
    parentClass: Gio.DBusProxyClass
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
    parentClass: Gio.DBusInterfaceSkeletonClass
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
    parentIface: GObject.TypeInterface
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
    parentClass: Gio.DBusProxyClass
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
    parentClass: Gio.DBusInterfaceSkeletonClass
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
    parentIface: GObject.TypeInterface
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
    parentClass: Gio.DBusProxyClass
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
    parentClass: Gio.DBusInterfaceSkeletonClass
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
    parentIface: GObject.TypeInterface
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
    parentClass: Gio.DBusProxyClass
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
    parentClass: Gio.DBusInterfaceSkeletonClass
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
    parentIface: GObject.TypeInterface
    handleGetTicket: (object: Ticketing, invocation: Gio.DBusMethodInvocation) => boolean
    getDetails: (object: Ticketing) => GLib.Variant | null
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
    parentClass: Gio.DBusProxyClass
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
    parentClass: Gio.DBusInterfaceSkeletonClass
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
    parentIface: GObject.TypeInterface
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
    parentClass: Gio.DBusProxyClass
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
    parentClass: Gio.DBusInterfaceSkeletonClass
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

}

export default Goa;
// END