/**
 * The GIR-derived widget VOCABULARY for Goa-1.0.
 *
 * GENERATED — do not edit. Provenance: Goa-1.0 — library 3.58.1 — inlined base(s) their owner's vocabulary does not emit: Gio.DBusInterfaceSkeleton
 *
 * 44 instantiable GTypes (of which 0 concrete widgets), 66 declarations (1 inlined from a namespace whose vocabulary does not emit them), 0 enum nick unions, 0 slot candidates.
 *
 * Module-scoped exports only. There is no `JSX` namespace here, no tag spelling and
 * no `on<Signal>` prop name: those are DIALECT, and every framework answers them
 * differently. The shape to avoid is the GLOBAL AUGMENT — a `declare global` on
 * `React.JSX` collides with every other library on a shared tag — while a
 * module-scoped `JSX` behind a `jsxImportSource` does not. This package is used by
 * projects that want nothing to do with JSX, so it emits neither; a consumer declaring
 * a module-scoped namespace over these names is doing it right.
 *
 * Three things this is and `ConstructorProps` is not: WRITABLE-only (measured on
 * Gtk-4.0, `ConstructorProps` offers 150 read-only properties across 68 classes as
 * settable, and GTK's failure mode for writing one is exit 0), OPTIONAL, and keyed
 * by the name GObject actually REGISTERED — the dashed spelling `g_object_set`,
 * GtkBuilder XML and Blueprint all use.
 *
 * Signal handler types are not re-derived: `X.SignalSignatures`, which this package
 * already emits for every class with the parent chain, every implemented interface
 * and the `notify::` keys folded in, is what `Widgets[G]['signals']` points at.
 */

import type GLib from '@girs/glib-2.0';
import type Goa from './goa-1.0.js';
import type { GAsyncInitableConstructOnly, GAsyncInitableProps, GDBusInterfaceConstructOnly, GDBusInterfaceProps, GDBusObjectConstructOnly, GDBusObjectManagerClientConstructOnly, GDBusObjectManagerClientProps, GDBusObjectManagerConstructOnly, GDBusObjectManagerProps, GDBusObjectProps, GDBusObjectProxyConstructOnly, GDBusObjectProxyProps, GDBusObjectSkeletonConstructOnly, GDBusObjectSkeletonProps, GDBusProxyConstructOnly, GDBusProxyProps, GInitableConstructOnly, GInitableProps } from '@girs/gio-2.0/vocabulary';
import type { GObjectConstructOnly, GObjectProps } from '@girs/gobject-2.0/vocabulary';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------



// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

/** Abstract base class for D-Bus interfaces on the service side. */
export interface GDBusInterfaceSkeletonProps extends GObjectProps, GDBusInterfaceProps {
    /**
     * Flags from the #GDBusInterfaceSkeletonFlags enumeration.
     * @since 2.30
     * @default G_DBUS_INTERFACE_SKELETON_FLAGS_NONE
     */
    'g-flags'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GDBusInterfaceSkeletonConstructOnly = GObjectConstructOnly | GDBusInterfaceConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Account.top_of_page">org.gnome.OnlineAccounts.Account</link>. */
export interface GoaAccountProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.AttentionNeeded">"AttentionNeeded"</link>.
     * @default FALSE
     */
    'attention-needed'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.CalendarDisabled">"CalendarDisabled"</link>.
     * @default FALSE
     */
    'calendar-disabled'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ChatDisabled">"ChatDisabled"</link>.
     * @default FALSE
     */
    'chat-disabled'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ContactsDisabled">"ContactsDisabled"</link>.
     * @default FALSE
     */
    'contacts-disabled'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.DocumentsDisabled">"DocumentsDisabled"</link>.
     * @default FALSE
     * @deprecated The D-Bus property has been deprecated.
     */
    'documents-disabled'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.FilesDisabled">"FilesDisabled"</link>.
     * @default FALSE
     */
    'files-disabled'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.Id">"Id"</link>.
     * @default NULL
     */
    id?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.Identity">"Identity"</link>.
     * @default NULL
     */
    identity?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.IsLocked">"IsLocked"</link>.
     * @default FALSE
     */
    'is-locked'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.IsTemporary">"IsTemporary"</link>.
     * @default FALSE
     */
    'is-temporary'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.MailDisabled">"MailDisabled"</link>.
     * @default FALSE
     */
    'mail-disabled'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.MapsDisabled">"MapsDisabled"</link>.
     * @default FALSE
     * @deprecated The D-Bus property has been deprecated.
     */
    'maps-disabled'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.MusicDisabled">"MusicDisabled"</link>.
     * @default FALSE
     */
    'music-disabled'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.PhotosDisabled">"PhotosDisabled"</link>.
     * @default FALSE
     */
    'photos-disabled'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.PresentationIdentity">"PresentationIdentity"</link>.
     * @default NULL
     */
    'presentation-identity'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.PrintersDisabled">"PrintersDisabled"</link>.
     * @default FALSE
     * @deprecated The D-Bus property has been deprecated.
     */
    'printers-disabled'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ProviderIcon">"ProviderIcon"</link>.
     * @default NULL
     */
    'provider-icon'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ProviderName">"ProviderName"</link>.
     * @default NULL
     */
    'provider-name'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ProviderType">"ProviderType"</link>.
     * @default NULL
     */
    'provider-type'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ReadLaterDisabled">"ReadLaterDisabled"</link>.
     * @default FALSE
     * @deprecated The D-Bus property has been deprecated.
     */
    'read-later-disabled'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.TicketingDisabled">"TicketingDisabled"</link>.
     * @default FALSE
     */
    'ticketing-disabled'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.TodoDisabled">"TodoDisabled"</link>.
     * @default FALSE
     * @deprecated The D-Bus property has been deprecated.
     */
    'todo-disabled'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaAccountConstructOnly = GObjectConstructOnly;

/** The #GoaAccountProxy structure contains only private data and should only be accessed using the provided API. */
export interface GoaAccountProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, GoaAccountProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaAccountProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | GoaAccountConstructOnly;

/** The #GoaAccountSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface GoaAccountSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, GoaAccountProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaAccountSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | GoaAccountConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Calendar.top_of_page">org.gnome.OnlineAccounts.Calendar</link>. */
export interface GoaCalendarProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Calendar.AcceptSslErrors">"AcceptSslErrors"</link>.
     * @default FALSE
     */
    'accept-ssl-errors'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Calendar.Uri">"Uri"</link>.
     * @default NULL
     */
    uri?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaCalendarConstructOnly = GObjectConstructOnly;

/** The #GoaCalendarProxy structure contains only private data and should only be accessed using the provided API. */
export interface GoaCalendarProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, GoaCalendarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaCalendarProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | GoaCalendarConstructOnly;

/** The #GoaCalendarSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface GoaCalendarSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, GoaCalendarProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaCalendarSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | GoaCalendarConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Chat.top_of_page">org.gnome.OnlineAccounts.Chat</link>. */
export interface GoaChatProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaChatConstructOnly = GObjectConstructOnly;

/** The #GoaChatProxy structure contains only private data and should only be accessed using the provided API. */
export interface GoaChatProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, GoaChatProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaChatProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | GoaChatConstructOnly;

/** The #GoaChatSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface GoaChatSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, GoaChatProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaChatSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | GoaChatConstructOnly;

/** [class@Goa.Client] is used for accessing the GNOME Online Accounts service from a client program. */
export interface GoaClientProps extends GObjectProps, GAsyncInitableProps, GInitableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaClientConstructOnly = GObjectConstructOnly | GAsyncInitableConstructOnly | GInitableConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Contacts.top_of_page">org.gnome.OnlineAccounts.Contacts</link>. */
export interface GoaContactsProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Contacts.AcceptSslErrors">"AcceptSslErrors"</link>.
     * @default FALSE
     */
    'accept-ssl-errors'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Contacts.Uri">"Uri"</link>.
     * @default NULL
     */
    uri?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaContactsConstructOnly = GObjectConstructOnly;

/** The #GoaContactsProxy structure contains only private data and should only be accessed using the provided API. */
export interface GoaContactsProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, GoaContactsProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaContactsProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | GoaContactsConstructOnly;

/** The #GoaContactsSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface GoaContactsSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, GoaContactsProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaContactsSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | GoaContactsConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Documents.top_of_page">org.gnome.OnlineAccounts.Documents</link>. */
export interface GoaDocumentsProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaDocumentsConstructOnly = GObjectConstructOnly;

/** The #GoaDocumentsProxy structure contains only private data and should only be accessed using the provided API. */
export interface GoaDocumentsProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, GoaDocumentsProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaDocumentsProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | GoaDocumentsConstructOnly;

/** The #GoaDocumentsSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface GoaDocumentsSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, GoaDocumentsProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaDocumentsSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | GoaDocumentsConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Exchange.top_of_page">org.gnome.OnlineAccounts.Exchange</link>. */
export interface GoaExchangeProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Exchange.AcceptSslErrors">"AcceptSslErrors"</link>.
     * @since 3.6.0
     * @default FALSE
     */
    'accept-ssl-errors'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Exchange.Host">"Host"</link>.
     * @since 3.6.0
     * @default NULL
     */
    host?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaExchangeConstructOnly = GObjectConstructOnly;

/** The #GoaExchangeProxy structure contains only private data and should only be accessed using the provided API. */
export interface GoaExchangeProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, GoaExchangeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaExchangeProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | GoaExchangeConstructOnly;

/** The #GoaExchangeSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface GoaExchangeSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, GoaExchangeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaExchangeSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | GoaExchangeConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Files.top_of_page">org.gnome.OnlineAccounts.Files</link>. */
export interface GoaFilesProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Files.AcceptSslErrors">"AcceptSslErrors"</link>.
     * @since 3.8.0
     * @default FALSE
     */
    'accept-ssl-errors'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Files.Uri">"Uri"</link>.
     * @since 3.8.0
     * @default NULL
     */
    uri?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaFilesConstructOnly = GObjectConstructOnly;

/** The #GoaFilesProxy structure contains only private data and should only be accessed using the provided API. */
export interface GoaFilesProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, GoaFilesProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaFilesProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | GoaFilesConstructOnly;

/** The #GoaFilesSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface GoaFilesSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, GoaFilesProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaFilesSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | GoaFilesConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Mail.top_of_page">org.gnome.OnlineAccounts.Mail</link>. */
export interface GoaMailProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.EmailAddress">"EmailAddress"</link>.
     * @default NULL
     */
    'email-address'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapAcceptSslErrors">"ImapAcceptSslErrors"</link>.
     * @default FALSE
     */
    'imap-accept-ssl-errors'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapHost">"ImapHost"</link>.
     * @default NULL
     */
    'imap-host'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapSupported">"ImapSupported"</link>.
     * @default FALSE
     */
    'imap-supported'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapUseSsl">"ImapUseSsl"</link>.
     * @default FALSE
     */
    'imap-use-ssl'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapUseTls">"ImapUseTls"</link>.
     * @default FALSE
     */
    'imap-use-tls'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapUserName">"ImapUserName"</link>.
     * @default NULL
     */
    'imap-user-name'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.Name">"Name"</link>.
     * @default NULL
     */
    name?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpAcceptSslErrors">"SmtpAcceptSslErrors"</link>.
     * @default FALSE
     */
    'smtp-accept-ssl-errors'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpAuthLogin">"SmtpAuthLogin"</link>.
     * @default FALSE
     */
    'smtp-auth-login'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpAuthPlain">"SmtpAuthPlain"</link>.
     * @default FALSE
     */
    'smtp-auth-plain'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpAuthXoauth2">"SmtpAuthXoauth2"</link>.
     * @default FALSE
     */
    'smtp-auth-xoauth2'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpHost">"SmtpHost"</link>.
     * @default NULL
     */
    'smtp-host'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpSupported">"SmtpSupported"</link>.
     * @default FALSE
     */
    'smtp-supported'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpUseAuth">"SmtpUseAuth"</link>.
     * @default FALSE
     */
    'smtp-use-auth'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpUseSsl">"SmtpUseSsl"</link>.
     * @default FALSE
     */
    'smtp-use-ssl'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpUseTls">"SmtpUseTls"</link>.
     * @default FALSE
     */
    'smtp-use-tls'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpUserName">"SmtpUserName"</link>.
     * @default NULL
     */
    'smtp-user-name'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaMailConstructOnly = GObjectConstructOnly;

/** The #GoaMailProxy structure contains only private data and should only be accessed using the provided API. */
export interface GoaMailProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, GoaMailProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaMailProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | GoaMailConstructOnly;

/** The #GoaMailSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface GoaMailSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, GoaMailProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaMailSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | GoaMailConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Manager.top_of_page">org.gnome.OnlineAccounts.Manager</link>. */
export interface GoaManagerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaManagerConstructOnly = GObjectConstructOnly;

/** The #GoaManagerProxy structure contains only private data and should only be accessed using the provided API. */
export interface GoaManagerProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, GoaManagerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaManagerProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | GoaManagerConstructOnly;

/** The #GoaManagerSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface GoaManagerSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, GoaManagerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaManagerSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | GoaManagerConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Maps.top_of_page">org.gnome.OnlineAccounts.Maps</link>. */
export interface GoaMapsProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaMapsConstructOnly = GObjectConstructOnly;

/** The #GoaMapsProxy structure contains only private data and should only be accessed using the provided API. */
export interface GoaMapsProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, GoaMapsProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaMapsProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | GoaMapsConstructOnly;

/** The #GoaMapsSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface GoaMapsSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, GoaMapsProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaMapsSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | GoaMapsConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page">org.gnome.OnlineAccounts.MediaServer</link>. */
export interface GoaMediaServerProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-MediaServer.DlnaSupported">"DlnaSupported"</link>.
     * @since 3.14
     * @default FALSE
     * @deprecated The D-Bus property has been deprecated.
     */
    'dlna-supported'?: boolean;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-MediaServer.Udn">"Udn"</link>.
     * @since 3.14
     * @default NULL
     * @deprecated The D-Bus property has been deprecated.
     */
    udn?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaMediaServerConstructOnly = GObjectConstructOnly;

/** The #GoaMediaServerProxy structure contains only private data and should only be accessed using the provided API. */
export interface GoaMediaServerProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, GoaMediaServerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaMediaServerProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | GoaMediaServerConstructOnly;

/** The #GoaMediaServerSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface GoaMediaServerSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, GoaMediaServerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaMediaServerSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | GoaMediaServerConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Music.top_of_page">org.gnome.OnlineAccounts.Music</link>. */
export interface GoaMusicProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaMusicConstructOnly = GObjectConstructOnly;

/** The #GoaMusicProxy structure contains only private data and should only be accessed using the provided API. */
export interface GoaMusicProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, GoaMusicProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaMusicProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | GoaMusicConstructOnly;

/** The #GoaMusicSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface GoaMusicSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, GoaMusicProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaMusicSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | GoaMusicConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page">org.gnome.OnlineAccounts.OAuth2Based</link>. */
export interface GoaOAuth2BasedProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-OAuth2Based.ClientId">"ClientId"</link>.
     * @default NULL
     */
    'client-id'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-OAuth2Based.ClientSecret">"ClientSecret"</link>.
     * @default NULL
     */
    'client-secret'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaOAuth2BasedConstructOnly = GObjectConstructOnly;

/** The #GoaOAuth2BasedProxy structure contains only private data and should only be accessed using the provided API. */
export interface GoaOAuth2BasedProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, GoaOAuth2BasedProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaOAuth2BasedProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | GoaOAuth2BasedConstructOnly;

/** The #GoaOAuth2BasedSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface GoaOAuth2BasedSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, GoaOAuth2BasedProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaOAuth2BasedSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | GoaOAuth2BasedConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page">org.gnome.OnlineAccounts.OAuthBased</link>. */
export interface GoaOAuthBasedProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-OAuthBased.ConsumerKey">"ConsumerKey"</link>.
     * @default NULL
     */
    'consumer-key'?: string | null;
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-OAuthBased.ConsumerSecret">"ConsumerSecret"</link>.
     * @default NULL
     */
    'consumer-secret'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaOAuthBasedConstructOnly = GObjectConstructOnly;

/** The #GoaOAuthBasedProxy structure contains only private data and should only be accessed using the provided API. */
export interface GoaOAuthBasedProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, GoaOAuthBasedProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaOAuthBasedProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | GoaOAuthBasedConstructOnly;

/** The #GoaOAuthBasedSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface GoaOAuthBasedSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, GoaOAuthBasedProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaOAuthBasedSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | GoaOAuthBasedConstructOnly;

/** The #GoaObject type is a specialized container of interfaces. */
export interface GoaObjectProps extends GDBusObjectProps {
    /** The #GoaAccount instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Account.top_of_page">org.gnome.OnlineAccounts.Account</link>, if any. */
    account?: Goa.Account | null;
    /** The #GoaCalendar instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Calendar.top_of_page">org.gnome.OnlineAccounts.Calendar</link>, if any. */
    calendar?: Goa.Calendar | null;
    /** The #GoaChat instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Chat.top_of_page">org.gnome.OnlineAccounts.Chat</link>, if any. */
    chat?: Goa.Chat | null;
    /** The #GoaContacts instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Contacts.top_of_page">org.gnome.OnlineAccounts.Contacts</link>, if any. */
    contacts?: Goa.Contacts | null;
    /**
     * The #GoaDocuments instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Documents.top_of_page">org.gnome.OnlineAccounts.Documents</link>, if any.
     * @deprecated The D-Bus interface has been deprecated.
     */
    documents?: Goa.Documents | null;
    /**
     * The #GoaExchange instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Exchange.top_of_page">org.gnome.OnlineAccounts.Exchange</link>, if any.
     * @since 3.6.0
     */
    exchange?: Goa.Exchange | null;
    /**
     * The #GoaFiles instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Files.top_of_page">org.gnome.OnlineAccounts.Files</link>, if any.
     * @since 3.8.0
     */
    files?: Goa.Files | null;
    /** The #GoaMail instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Mail.top_of_page">org.gnome.OnlineAccounts.Mail</link>, if any. */
    mail?: Goa.Mail | null;
    /** The #GoaManager instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Manager.top_of_page">org.gnome.OnlineAccounts.Manager</link>, if any. */
    manager?: Goa.Manager | null;
    /**
     * The #GoaMaps instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Maps.top_of_page">org.gnome.OnlineAccounts.Maps</link>, if any.
     * @since 3.14.0
     * @deprecated The D-Bus interface has been deprecated.
     */
    maps?: Goa.Maps | null;
    /**
     * The #GoaMediaServer instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page">org.gnome.OnlineAccounts.MediaServer</link>, if any.
     * @since 3.14
     * @deprecated The D-Bus interface has been deprecated.
     */
    'media-server'?: Goa.MediaServer | null;
    /**
     * The #GoaMusic instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Music.top_of_page">org.gnome.OnlineAccounts.Music</link>, if any.
     * @since 3.18.0
     */
    music?: Goa.Music | null;
    /** The #GoaOAuthBased instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page">org.gnome.OnlineAccounts.OAuthBased</link>, if any. */
    'oauth-based'?: Goa.OAuthBased | null;
    /** The #GoaOAuth2Based instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page">org.gnome.OnlineAccounts.OAuth2Based</link>, if any. */
    'oauth2-based'?: Goa.OAuth2Based | null;
    /**
     * The #GoaPasswordBased instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page">org.gnome.OnlineAccounts.PasswordBased</link>, i…
     * @since 3.6.0
     */
    'password-based'?: Goa.PasswordBased | null;
    /**
     * The #GoaPhotos instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Photos.top_of_page">org.gnome.OnlineAccounts.Photos</link>, if any.
     * @since 3.8.0
     */
    photos?: Goa.Photos | null;
    /**
     * The #GoaPrinters instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Printers.top_of_page">org.gnome.OnlineAccounts.Printers</link>, if any.
     * @since 3.12.0
     * @deprecated The D-Bus interface has been deprecated.
     */
    printers?: Goa.Printers | null;
    /**
     * The #GoaReadLater instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page">org.gnome.OnlineAccounts.ReadLater</link>, if any.
     * @since 3.12.0
     * @deprecated The D-Bus interface has been deprecated.
     */
    'read-later'?: Goa.ReadLater | null;
    /**
     * The #GoaTicketing instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Ticketing.top_of_page">org.gnome.OnlineAccounts.Ticketing</link>, if any.
     * @since 3.6.0
     */
    ticketing?: Goa.Ticketing | null;
    /**
     * The #GoaTodo instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Todo.top_of_page">org.gnome.OnlineAccounts.Todo</link>, if any.
     * @since 3.26.0
     * @deprecated The D-Bus interface has been deprecated.
     */
    todo?: Goa.Todo | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaObjectConstructOnly = GDBusObjectConstructOnly;

/** The #GoaObjectManagerClient structure contains only private data and should only be accessed using the provided API. */
export interface GoaObjectManagerClientProps extends GDBusObjectManagerClientProps, GAsyncInitableProps, GDBusObjectManagerProps, GInitableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaObjectManagerClientConstructOnly = GDBusObjectManagerClientConstructOnly | GAsyncInitableConstructOnly | GDBusObjectManagerConstructOnly | GInitableConstructOnly;

/** The #GoaObjectProxy structure contains only private data and should only be accessed using the provided API. */
export interface GoaObjectProxyProps extends GDBusObjectProxyProps, GDBusObjectProps, GoaObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaObjectProxyConstructOnly = GDBusObjectProxyConstructOnly | GDBusObjectConstructOnly | GoaObjectConstructOnly;

/** The #GoaObjectSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface GoaObjectSkeletonProps extends GDBusObjectSkeletonProps, GDBusObjectProps, GoaObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaObjectSkeletonConstructOnly = GDBusObjectSkeletonConstructOnly | GDBusObjectConstructOnly | GoaObjectConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page">org.gnome.OnlineAccounts.PasswordBased</link>. */
export interface GoaPasswordBasedProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaPasswordBasedConstructOnly = GObjectConstructOnly;

/** The #GoaPasswordBasedProxy structure contains only private data and should only be accessed using the provided API. */
export interface GoaPasswordBasedProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, GoaPasswordBasedProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaPasswordBasedProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | GoaPasswordBasedConstructOnly;

/** The #GoaPasswordBasedSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface GoaPasswordBasedSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, GoaPasswordBasedProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaPasswordBasedSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | GoaPasswordBasedConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Photos.top_of_page">org.gnome.OnlineAccounts.Photos</link>. */
export interface GoaPhotosProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaPhotosConstructOnly = GObjectConstructOnly;

/** The #GoaPhotosProxy structure contains only private data and should only be accessed using the provided API. */
export interface GoaPhotosProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, GoaPhotosProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaPhotosProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | GoaPhotosConstructOnly;

/** The #GoaPhotosSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface GoaPhotosSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, GoaPhotosProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaPhotosSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | GoaPhotosConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Printers.top_of_page">org.gnome.OnlineAccounts.Printers</link>. */
export interface GoaPrintersProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaPrintersConstructOnly = GObjectConstructOnly;

/** The #GoaPrintersProxy structure contains only private data and should only be accessed using the provided API. */
export interface GoaPrintersProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, GoaPrintersProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaPrintersProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | GoaPrintersConstructOnly;

/** The #GoaPrintersSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface GoaPrintersSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, GoaPrintersProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaPrintersSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | GoaPrintersConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page">org.gnome.OnlineAccounts.ReadLater</link>. */
export interface GoaReadLaterProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaReadLaterConstructOnly = GObjectConstructOnly;

/** The #GoaReadLaterProxy structure contains only private data and should only be accessed using the provided API. */
export interface GoaReadLaterProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, GoaReadLaterProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaReadLaterProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | GoaReadLaterConstructOnly;

/** The #GoaReadLaterSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface GoaReadLaterSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, GoaReadLaterProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaReadLaterSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | GoaReadLaterConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Ticketing.top_of_page">org.gnome.OnlineAccounts.Ticketing</link>. */
export interface GoaTicketingProps extends GObjectProps {
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Ticketing.Details">"Details"</link>.
     * @since 3.18
     */
    details?: GLib.Variant | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaTicketingConstructOnly = GObjectConstructOnly;

/** The #GoaTicketingProxy structure contains only private data and should only be accessed using the provided API. */
export interface GoaTicketingProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, GoaTicketingProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaTicketingProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | GoaTicketingConstructOnly;

/** The #GoaTicketingSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface GoaTicketingSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, GoaTicketingProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaTicketingSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | GoaTicketingConstructOnly;

/** Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Todo.top_of_page">org.gnome.OnlineAccounts.Todo</link>. */
export interface GoaTodoProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaTodoConstructOnly = GObjectConstructOnly;

/** The #GoaTodoProxy structure contains only private data and should only be accessed using the provided API. */
export interface GoaTodoProxyProps extends GDBusProxyProps, GAsyncInitableProps, GDBusInterfaceProps, GInitableProps, GoaTodoProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaTodoProxyConstructOnly = GDBusProxyConstructOnly | GAsyncInitableConstructOnly | GDBusInterfaceConstructOnly | GInitableConstructOnly | GoaTodoConstructOnly;

/** The #GoaTodoSkeleton structure contains only private data and should only be accessed using the provided API. */
export interface GoaTodoSkeletonProps extends GDBusInterfaceSkeletonProps, GDBusInterfaceProps, GoaTodoProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GoaTodoSkeletonConstructOnly = GDBusInterfaceSkeletonConstructOnly | GDBusInterfaceConstructOnly | GoaTodoConstructOnly;

// ---------------------------------------------------------------------------
// The GType-keyed widget map.
//
// Keyed by GType because that is also the GtkBuilder XML key and the typelib key. A
// consumer maps GTypes to tags in ITS convention — kebab for JSX intrinsics, Pascal
// for a Vue `GlobalComponents`, the class itself for a renderer whose element type
// is the class. None of those is baked in here.
//
// `slotCandidates` is a candidate list and never an answer: derived from methods
// taking exactly one widget argument. The GIR cannot tell adoption from reference —
// `set_title_widget` parents its argument and `set_activatable_widget` does not, and
// both are `void f(GtkWidget*)` at `transfer-ownership="none"`. Curation decides;
// this is what notices when a release adds a candidate.
// ---------------------------------------------------------------------------

export interface Widgets {

}

/**
 * Every GType this namespace can create AND put on screen. A consumer derives its own
 * tag map. For everything a UI file can instantiate — layout managers, event
 * controllers, cell renderers, `GtkSizeGroup` — read `DECLS` below.
 */
export type WidgetGType = keyof Widgets;

// ---------------------------------------------------------------------------
// Child holders — the same shape, for objects that CARRY a widget without being one.
//
// `GtkListItem`, `GtkListHeader`, `GtkColumnViewCell` and `AdwToggle` descend from
// `GObject.Object` and hold a widget through `set_child`/`get_child`. A renderer places
// them exactly like a container, so they belong in the vocabulary; a check asking "is
// this a widget" must still be able to say no. Hence a sibling table rather than four
// more rows in `Widgets`: concatenate them when you mean both.
// ---------------------------------------------------------------------------

export interface ChildHolders {

}

/** Every GType this namespace holds a child in without it being a widget. */
export type ChildHolderGType = keyof ChildHolders;

/** The writable, optional, GObject-keyed property surface of one GType. */
export type PropsOf<G extends WidgetGType> = Widgets[G]['props'];

/** The signal table this package already emits, reached by GType. */
export type SignalsOf<G extends WidgetGType> = Widgets[G]['signals'];

/** The instance type — what a `ref`-shaped prop should infer. */
export type InstanceOf<G extends WidgetGType> = Widgets[G]['class'];

/** Property names that can only be set at construction. */
export type ConstructOnlyOf<G extends WidgetGType> = Widgets[G]['constructOnly'];

/** Candidate child slots — see the note above; curation decides. */
export type SlotCandidatesOf<G extends WidgetGType> = keyof Widgets[G]['slotCandidates'];

/**
 * The same facts as runtime data, for a consumer that CHECKS them.
 *
 * Types are erased, so a spec that asks the installed GTK whether every property
 * here is a writable ParamSpec, every signal resolvable by `GObject.signal_lookup`
 * and every nick resolvable through an enum lookup cannot read the interfaces
 * above. Emitted headlessly with no GTK present, which is exactly why the checking
 * belongs to the consumer and the DATA belongs here.
 */
export const PROVENANCE: {
    readonly namespace: string;
    readonly version: string;
    /** The version the LIBRARY states, or null where it states none. Never the namespace's. */
    readonly libraryVersion: string | null;
    readonly childHolders: number;
    readonly droppedBases: readonly string[];
    readonly inlinedBases: readonly string[];
    /** `<decl>.<prop>` for every property printed `never` because TypeScript has no value for it. */
    readonly unsettableProps: readonly string[];
    /**
     * `<decl>.<prop>: <Ns>.<Name>` for every property printed `never` because the model
     * could not resolve its type across a namespace boundary — two independently released
     * GIRs disagreeing, which is what the main emitter answers `never` for as well.
     */
    readonly unresolvedProps: readonly string[];
    /**
     * `c:identifier-prefixes` from the GIR, verbatim and in order — `['G']` for Gio.
     *
     * The C prefix a type REFERENCE needs: resolving `Gio.Icon` means producing `GIcon`,
     * and nothing else in this package states that `Gio` spells itself `G`. Carried rather
     * than derived because GIR carries it, and a derivation over the `DECLS` keys is wrong
     * wherever the C prefix is not a prefix of the type NAMES: gdkx11-4.0 and gdkwayland-4.0
     * both state `Gdk` while every key they declare begins `GdkX11`/`GdkWayland`.
     *
     * Empty where the GIR states none — 17 of the 627 emitting namespaces — because
     * inventing the namespace name there is a confident wrong answer in place of a missing
     * one. A LIST because 20 of them state more than one, which no single string expresses.
     */
    readonly identifierPrefixes: readonly string[];
    /**
     * Sibling vocabularies this one's DECLARATIONS come from, as import specifiers.
     *
     * A chain link with no `OWN_PROPS` row is ambiguous on its own — `GtkSeparator` has no
     * settable property, `GApplication` has its properties in another package — and this
     * list is what tells the two apart. Enum and bitfield NUMBERS are not here: those are
     * carried in this file, because a `PROP_ENUMS` row naming a foreign GType gives a
     * consumer nothing to load and a `.ui` file using the property never names its owner.
     */
    readonly requiredVocabularies: readonly string[];
};

/** Declaration GType -> its own settable properties, as GObject registered them. */
export const OWN_PROPS: Readonly<Record<string, readonly string[]>>;

/**
 * Declaration GType -> the signals it registers itself, never its parents'.
 *
 * Keyed like `OWN_PROPS`, so both are read at every link of a `DECLS` chain. An
 * abstract base has no `Widgets` row and still owns signals — `GtkWidget` owns 13.
 */
export const OWN_SIGNALS: Readonly<Record<string, readonly string[]>>;

/**
 * Instantiable GType -> every declaration its members come from, self first.
 *
 * The key set is what a UI description file can NAME: every registered, non-abstract
 * class this namespace declares. GtkBuilder resolves a `<object class="…">` through
 * `g_type_from_name`, which knows nothing about widgets, so this is wider than
 * `Widgets` by design — `GtkSizeGroup`, `GtkTextTag`, every `GtkEventController`
 * and every `GtkCellRenderer` are here and are not widgets.
 *
 * `Widgets` and `CHILD_HOLDERS` are the narrower questions and answer them unchanged.
 */
export const DECLS: Readonly<Record<string, readonly string[]>>;

/** The GTypes in `DECLS` that hold a widget without being one — see `ChildHolders`. */
export const CHILD_HOLDERS: readonly string[];

/** Enum GType -> the nicks this surface offers. */
export const ENUM_NICKS: Readonly<Record<string, readonly string[]>>;

/**
 * `<enum GType>.<nick>` -> the integer GObject registers for it, from GIR's `value`.
 *
 * Position in `ENUM_NICKS` is NOT this number. Counting is wrong on 6 of the 137 enums a
 * GTK 4 vocabulary carries -- 112 in Gtk-4.0 and 25 in Adw-1: `GtkResponseType` runs -1 to -11, `GtkTextWindowType` starts
 * at 1, `GtkOrdering` and `GtkConstraintRelation` are -1/0/1, `GtkAlign` has two names
 * on one value, and `GtkConstraintStrength.required` is 1001001000 where counting says 0.
 *
 * Read from the same GIR as the nicks, deliberately. A consumer reading the numbers off an
 * installed typelib instead has two provenances for one table, and then cannot tell a
 * missing number from a host older than the vocabulary.
 */
export const ENUM_VALUES: Readonly<Record<string, number>>;

/**
 * The `<enum GType>.<nick>` entries GIR marks `deprecated="1"`.
 *
 * Two names on one value is how GObject spells an alias -- `GTK_ALIGN_BASELINE` and
 * `GTK_ALIGN_BASELINE_FILL` are both 4, and both keep a `ENUM_VALUES` entry. The pairing
 * is visible in the numbers; which name is the old one is not, and this is that fact --
 * where GIR states it. It usually does not: 4 registered-enum members across the 718 GIRs
 * carry the attribute, and 179 of the 182 value-sharing pairs carry it on neither half, so
 * absence from this list means GIR is silent, not that the nick is the current one.
 */
export const ENUM_DEPRECATED: readonly string[];

/**
 * `<enum GType>.<nick>` -> the raw GIR `value` no number could be read from.
 *
 * The declared remainder, so that every nick in `ENUM_NICKS` is in `ENUM_VALUES` or in
 * here and a drop cannot be silent. Two shapes reach it: a symbolic or absent value (Vala
 * writes `(null)`, a char enum writes a letter) and an integer past
 * `Number.MAX_SAFE_INTEGER`, where a literal would lose precision and stop being the
 * GIR's number. Empty for Gtk, Adw, GLib and Gio.
 */
export const ENUM_VALUES_UNREADABLE: Readonly<Record<string, string>>;

/**
 * `<bitfield GType>.<nick>` -> the integer GObject registers for that one member.
 *
 * `ENUM_NICKS` carries no bitfield, because GObject cannot resolve a nick SET; that says
 * nothing about a single member's number, and the number is what a host without GI needs.
 * 23 settable properties in Gtk-4.0 and Adw-1 are bitfield-typed and are declared bare
 * `number` -- `GtkEntry:input-hints`, `GtkPopoverMenu:flags`, `AdwTabView:shortcuts`,
 * `GtkDropTarget:actions` among them. Counting is worst here: 119 of the 156 Gtk-4.0
 * bitfield members this vocabulary carries disagree with their declaration position,
 * against 29 of 672 enumeration members.
 *
 * Combine with `|` as GObject does. There is no nick table to pair this with, so a name
 * here is resolvable and a SET still is not.
 */
export const FLAG_VALUES: Readonly<Record<string, number>>;

/** `<bitfield GType>.<nick>` -> the raw GIR `value` no number could be read from. */
export const FLAG_VALUES_UNREADABLE: Readonly<Record<string, string>>;

/**
 * `<declaration GType>.<property>` -> the GType of that property's enum or bitfield.
 *
 * The join the value tables need and nothing else here carries. A host with no GI has a
 * property name and a nick and needs a number; `ENUM_VALUES` is keyed by ENUM GType, and
 * only this says which enum a property is. Keyed by DECLARATION like `OWN_PROPS`, so it is
 * read at every link of a `DECLS` chain — `orientation` belongs to `GtkOrientable`, not
 * to the `GtkBox` a caller starts from.
 *
 * Present only where the property's OWN type is the enum: an array of them, or a union that
 * merely mentions one, would be an entry a consumer resolves wrongly.
 *
 * The GType named here is not always one THIS module gives numbers for. A nick vocabulary is
 * emitted once, by the namespace that owns the enum, so `AdwComboRow.search-match-mode` names
 * `GtkStringFilterMatchMode` and its rows are in `@girs/gtk-4.0/vocabulary` — 83 of the 909
 * entries in a full run resolve only with the owner's vocabulary loaded beside this one. An
 * owner with no vocabulary of its own (Gdk, Pango) is inlined here instead, so every entry
 * resolves against SOME module.
 */
export const PROP_ENUMS: Readonly<Record<string, string>>;

/**
 * `<declaration GType>.<property>` -> the GType of that property's own type.
 *
 * `PROP_ENUMS` one case wider, and separate on purpose: that table promises the GType it names
 * has NUMBERS, and this one promises only that the GType is the property's. A host inferring a
 * type from a property — the middle of an uncast lookup chain, an uncast closure's return type —
 * reads this one; a host resolving a nick to a number reads that one.
 *
 * Absent means no GType can be stated, not that the property is scalar: `gchararray` is carried
 * like any other, so absence is readable as "unknown".
 */
export const PROP_TYPES: Readonly<Record<string, string>>;

/**
 * The kinds of value a GTK accessible property, relation or state takes.
 *
 * `enum` is the one that needs a second lookup: `ARIA_VALUE_ENUMS` names the enum GType,
 * and `ENUM_NICKS` and `ENUM_VALUES` answer from there.
 */
export type AriaValueType = 'string' | 'integer' | 'double' | 'boolean' | 'reference' | 'enum';

/**
 * `<enum GType>.<nick>` -> the kind of value that ARIA slot takes.
 *
 * The one table in this file that is not a fact about a ParamSpec. A GtkBuilder or
 * Blueprint `accessibility { … }` block is typed by GTK's ARIA table, not by the widget,
 * and the two disagree where it costs most: `orientation` is settable on a `GtkLabel`
 * that implements no `GtkOrientable`, and `checked` is a `GtkAccessibleTristate`, so
 * `checked: true` is the number 1 rather than a boolean. Typing those slots from the
 * widget's properties gets both wrong and raises nothing.
 *
 * Keyed like `ENUM_VALUES` because the ARIA names ARE enum members — of
 * `GtkAccessibleProperty`, `GtkAccessibleRelation` and `GtkAccessibleState` — so
 * `ENUM_NICKS` already lists them and one key parser reads both.
 *
 * Read from each member's own GIR documentation. `gtk_accessible_property_init_value()`
 * is the C half of this table and is not introspectable; the doc sentence is, and states
 * the type for 52 of the 53 members in gtk4 4.23.3. Complete or absent, never partial: a
 * member the generator cannot answer for fails the build and names itself.
 */
export const ARIA_VALUE_TYPES: Readonly<Record<string, AriaValueType>>;

/**
 * The same keys, for the `'enum'` rows only -> the GType of that enum.
 *
 * A table of its own for the reason `PROP_ENUMS` is one: folded in, the values of
 * `ARIA_VALUE_TYPES` would be six reserved words mixed with arbitrary GTypes and telling
 * them apart would be the consumer's problem. Apart, `ARIA_VALUE_TYPES[k] === 'enum'` is
 * the whole test and `ENUM_NICKS[ARIA_VALUE_ENUMS[k]]` is the nick list.
 */
export const ARIA_VALUE_ENUMS: Readonly<Record<string, string>>;

/** Widget GType -> slot name -> the method that may adopt a child there. */
export const SLOT_CANDIDATES: Readonly<Record<string, Readonly<Record<string, string>>>>;

/**
 * `Type`, `Type.property` and `Type::signal` -> the release that introduced it.
 *
 * What keeps a runtime cross-check honest across a version gap without an
 * allowlist: a name the installed library lacks is a defect UNLESS the version
 * here is newer than the one running.
 *
 * ALL THREE key shapes, because that test only works for the names it covers. A
 * property-only map leaves a consumer no way to explain a missing SIGNAL, which is
 * a correct vocabulary reported as 18 defects; a member-only map leaves it no way to
 * explain a missing CLASS, and that one fails as a bare
 * `TypeError: can't access property "$gtype", ctor() is undefined` that does not
 * even name the GType.
 *
 * A key is present only where the GIR states a version — sparse by nature (`version`
 * sits on 29 of the 301 classes and interfaces in Gtk-4.0), never inferred.
 */
export const SINCE: Readonly<Record<string, string>>;
