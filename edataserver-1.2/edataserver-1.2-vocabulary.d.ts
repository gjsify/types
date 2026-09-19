/**
 * The GIR-derived widget VOCABULARY for EDataServer-1.2.
 *
 * GENERATED — do not edit. Provenance: EDataServer-1.2 — dropped empty base(s): GObject.TypeModule GObject.TypePlugin Gio.NetworkMonitor
 *
 * 51 instantiable GTypes (of which 0 concrete widgets), 59 declarations, 13 enum nick unions, 0 slot candidates.
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

import type EDataServer from './edataserver-1.2.js';
import type GLib from '@girs/glib-2.0';
import type GObject from '@girs/gobject-2.0';
import type Gio from '@girs/gio-2.0';
import type { GAsyncInitableConstructOnly, GAsyncInitableProps, GInitableConstructOnly, GInitableProps, GProxyResolverConstructOnly, GProxyResolverProps } from '@girs/gio-2.0/vocabulary';
import type { GObjectConstructOnly, GObjectProps } from '@girs/gobject-2.0/vocabulary';
import type { SoupAuthConstructOnly, SoupAuthProps, SoupSessionConstructOnly, SoupSessionProps } from '@girs/soup-3.0/vocabulary';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type EConflictResolutionNick = 'fail' | 'use-newer' | 'keep-server' | 'keep-local' | 'write-copy';
export type EMdnResponsePolicyNick = 'never' | 'always' | 'ask';
export type EProxyMethodNick = 'default' | 'manual' | 'auto' | 'none';
export type ESourceAuthenticationResultNick = 'unknown' | 'error' | 'error-ssl-failed' | 'accepted' | 'rejected' | 'required';
export type ESourceConnectionStatusNick = 'disconnected' | 'awaiting-credentials' | 'ssl-failed' | 'connecting' | 'connected';
export type ESourceCredentialsReasonNick = 'unknown' | 'required' | 'rejected' | 'ssl-failed' | 'error';
export type ESourceLDAPAuthenticationNick = 'none' | 'email' | 'binddn';
export type ESourceLDAPScopeNick = 'onelevel' | 'subtree';
export type ESourceLDAPSecurityNick = 'none' | 'ldaps' | 'starttls';
export type ESourceMailCompositionReplyStyleNick = 'default' | 'quoted' | 'do-not-quote' | 'attach' | 'outlook';
export type ESourceWeatherUnitsNick = 'fahrenheit' | 'centigrade' | 'kelvin';
export type EThreeStateNick = 'off' | 'on' | 'inconsistent';
export type ETrustPromptResponseNick = 'unknown' | 'reject' | 'accept' | 'accept-temporarily' | 'reject-temporarily';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

export interface EExtensibleProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EExtensibleConstructOnly = GObjectConstructOnly;

export interface EExtensionProps extends GObjectProps {
    /** The object being extended */
    extensible?: EDataServer.Extensible;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EExtensionConstructOnly = GObjectConstructOnly | 'extensible';

export interface EGDataSessionProps extends ESoupSessionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EGDataSessionConstructOnly = ESoupSessionConstructOnly;

export interface EModuleProps {
    /**
     * The filename of the module.
     * @default NULL
     */
    filename?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EModuleConstructOnly = 'filename';

export interface EMsOapxbcProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EMsOapxbcConstructOnly = GObjectConstructOnly;

/** the functions below. */
export interface ENetworkMonitorProps extends GObjectProps, GInitableProps {
    /**
     * The GIO name of the underlying #GNetworkMonitor to use.
     * @default NULL
     */
    'gio-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ENetworkMonitorConstructOnly = GObjectConstructOnly | GInitableConstructOnly;

export interface EOAuth2ServiceProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EOAuth2ServiceConstructOnly = GObjectConstructOnly;

export interface EOAuth2ServiceBaseProps extends EExtensionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EOAuth2ServiceBaseConstructOnly = EExtensionConstructOnly;

export interface EOAuth2ServiceGoogleProps extends EOAuth2ServiceBaseProps, EOAuth2ServiceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EOAuth2ServiceGoogleConstructOnly = EOAuth2ServiceBaseConstructOnly | EOAuth2ServiceConstructOnly;

export interface EOAuth2ServiceOutlookProps extends EOAuth2ServiceBaseProps, EOAuth2ServiceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EOAuth2ServiceOutlookConstructOnly = EOAuth2ServiceBaseConstructOnly | EOAuth2ServiceConstructOnly;

export interface EOAuth2ServiceYahooProps extends EOAuth2ServiceBaseProps, EOAuth2ServiceProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EOAuth2ServiceYahooConstructOnly = EOAuth2ServiceBaseConstructOnly | EOAuth2ServiceConstructOnly;

export interface EOAuth2ServicesProps extends GObjectProps, EExtensibleProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EOAuth2ServicesConstructOnly = GObjectConstructOnly | EExtensibleConstructOnly;

export interface ESoupAuthBearerProps extends SoupAuthProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESoupAuthBearerConstructOnly = SoupAuthConstructOnly;

export interface ESoupSessionProps extends SoupSessionProps {
    /**
     * The #ENamedParameters containing login credentials.
     * @since 3.26
     */
    credentials?: EDataServer.NamedParameters;
    /**
     * Whether the messages created by the session should force use of HTTP/1 instead of trying HTTP/2 first and fallback to the HTTP/1 when the newer version failed to connect.
     * @since 3.48
     * @default FALSE
     */
    'force-http1'?: boolean;
    /**
     * Set to %TRUE, which is the default, to automatically handle backoff responses from the server, that is, when the server requests the client to retry later.
     * @since 3.54
     * @default TRUE
     */
    'handle-backoff-responses'?: boolean;
    /**
     * The #ESource being used for this soup session.
     * @since 3.26
     */
    source?: EDataServer.Source | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESoupSessionConstructOnly = SoupSessionConstructOnly | 'source';

export interface ESourceProps extends GObjectProps, GInitableProps, GProxyResolverProps {
    /**
     * The human-readable name of the data source
     * @default Unnamed
     */
    'display-name'?: string;
    /**
     * Whether the data source is enabled
     * @default TRUE
     */
    enabled?: boolean;
    /** The main loop context on which to attach event sources */
    'main-context'?: GLib.MainContext;
    /**
     * The unique identity of the parent data source
     * @default NULL
     */
    parent?: string | null;
    /**
     * The unique identity of the data source
     * @default NULL
     */
    uid?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceConstructOnly = GObjectConstructOnly | GInitableConstructOnly | GProxyResolverConstructOnly | 'main-context' | 'uid';

export interface ESourceAddressBookProps extends ESourceBackendProps {
    /**
     * A sorting order of the source
     * @default 0
     */
    order?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceAddressBookConstructOnly = ESourceBackendConstructOnly;

export interface ESourceAlarmsProps extends ESourceExtensionProps {
    /**
     * Show a notification before every event in this source
     * @default FALSE
     */
    'for-every-event'?: boolean;
    /**
     * Include this source in alarm notifications
     * @default TRUE
     */
    'include-me'?: boolean;
    /**
     * Last alarm notification (in ISO 8601 format)
     * @default NULL
     */
    'last-notified'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceAlarmsConstructOnly = ESourceExtensionConstructOnly;

export interface ESourceAuthenticationProps extends ESourceExtensionProps {
    /**
     * What name to use for the authentication method in credentials for authentication.
     * @default NULL
     */
    'credential-name'?: string | null;
    /** Host name for the remote account */
    host?: string | null;
    /**
     * Whether the authentication is done by another authentication manager (like any Single Sign On daemon)
     * @default FALSE
     */
    'is-external'?: boolean;
    /**
     * Authentication method
     * @default none
     */
    method?: string | null;
    /**
     * Port number for the remote account
     * @default 0
     */
    port?: number;
    /**
     * ESource UID of a proxy profile
     * @default system-proxy
     */
    'proxy-uid'?: string;
    /**
     * Whether to offer to remember the password by default when prompted
     * @default TRUE
     */
    'remember-password'?: boolean;
    /**
     * User name for the remote account
     * @default NULL
     */
    user?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceAuthenticationConstructOnly = ESourceExtensionConstructOnly;

export interface ESourceAutocompleteProps extends ESourceExtensionProps {
    /**
     * Include this source when autocompleting
     * @default TRUE
     */
    'include-me'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceAutocompleteConstructOnly = ESourceExtensionConstructOnly;

export interface ESourceAutoconfigProps extends ESourceExtensionProps {
    /** Identifier to map a particular version of a system-wide source to a user-specific source */
    revision?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceAutoconfigConstructOnly = ESourceExtensionConstructOnly;

export interface ESourceBackendProps extends ESourceExtensionProps {
    /**
     * The name of the backend handling the data source
     * @default NULL
     */
    'backend-name'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceBackendConstructOnly = ESourceExtensionConstructOnly;

export interface ESourceCalendarProps extends ESourceSelectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceCalendarConstructOnly = ESourceSelectableConstructOnly;

export interface ESourceCollectionProps extends ESourceBackendProps {
    /**
     * Set to TRUE when the collection source allows user rename the child sources
     * @default FALSE
     */
    'allow-sources-rename'?: boolean;
    /**
     * Whether calendar resources are enabled
     * @default TRUE
     */
    'calendar-enabled'?: boolean;
    /**
     * Calendar top URL
     * @default NULL
     */
    'calendar-url'?: string | null;
    /**
     * Whether contact resources are enabled
     * @default TRUE
     */
    'contacts-enabled'?: boolean;
    /**
     * Contacts top URL
     * @default NULL
     */
    'contacts-url'?: string | null;
    /**
     * Uniquely identifies the account at the service provider
     * @default NULL
     */
    identity?: string | null;
    /**
     * Whether mail resources are enabled
     * @default TRUE
     */
    'mail-enabled'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceCollectionConstructOnly = ESourceBackendConstructOnly;

export interface ESourceConflictSearchProps extends ESourceExtensionProps {
    /** @default TRUE */
    'include-me'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceConflictSearchConstructOnly = ESourceExtensionConstructOnly;

export interface ESourceContactsProps extends ESourceExtensionProps {
    /**
     * Include this address book in the contacts calendar
     * @default FALSE
     */
    'include-me'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceContactsConstructOnly = ESourceExtensionConstructOnly;

export interface ESourceCredentialsProviderProps extends GObjectProps, EExtensibleProps {
    /** The Source Registry object, which can be either #ESourceregistry or #ESourceRegistryServer. */
    registry?: GObject.Object;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceCredentialsProviderConstructOnly = GObjectConstructOnly | EExtensibleConstructOnly | 'registry';

/** Credentials provider implementation base structure. */
export interface ESourceCredentialsProviderImplProps extends EExtensionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceCredentialsProviderImplConstructOnly = EExtensionConstructOnly;

/** OAuth2 based credentials provider implementation. */
export interface ESourceCredentialsProviderImplOAuth2Props extends ESourceCredentialsProviderImplProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceCredentialsProviderImplOAuth2ConstructOnly = ESourceCredentialsProviderImplConstructOnly;

/** Password based credentials provider implementation. */
export interface ESourceCredentialsProviderImplPasswordProps extends ESourceCredentialsProviderImplProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceCredentialsProviderImplPasswordConstructOnly = ESourceCredentialsProviderImplConstructOnly;

export interface ESourceExtensionProps extends GObjectProps {
    /** The #ESource being extended */
    source?: EDataServer.Source;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceExtensionConstructOnly = GObjectConstructOnly | 'source';

export interface ESourceGoaProps extends ESourceExtensionProps {
    /**
     * GNOME Online Account ID
     * @default NULL
     */
    'account-id'?: string | null;
    /**
     * GNOME Online Account's original Address
     * @default NULL
     */
    address?: string | null;
    /**
     * GNOME Online Calendar URL
     * @default NULL
     */
    'calendar-url'?: string | null;
    /**
     * GNOME Online Contacts URL
     * @default NULL
     */
    'contacts-url'?: string | null;
    /**
     * GNOME Online Account's original Name
     * @default NULL
     */
    name?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceGoaConstructOnly = ESourceExtensionConstructOnly;

export interface ESourceLDAPProps extends ESourceExtensionProps {
    /**
     * LDAP authentication method
     * @default E_SOURCE_LDAP_AUTHENTICATION_NONE
     */
    authentication?: ESourceLDAPAuthenticationNick | EDataServer.SourceLDAPAuthentication;
    /**
     * Allow browsing contacts
     * @default FALSE
     */
    'can-browse'?: boolean;
    /** LDAP search filter */
    filter?: string;
    /**
     * Download limit
     * @default 100
     */
    limit?: number;
    /** LDAP search base */
    'root-dn'?: string;
    /**
     * LDAP search scope
     * @default E_SOURCE_LDAP_SCOPE_ONELEVEL
     */
    scope?: ESourceLDAPScopeNick | EDataServer.SourceLDAPScope;
    /**
     * LDAP security method
     * @default E_SOURCE_LDAP_SECURITY_NONE
     */
    security?: ESourceLDAPSecurityNick | EDataServer.SourceLDAPSecurity;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceLDAPConstructOnly = ESourceExtensionConstructOnly;

export interface ESourceLocalProps extends ESourceExtensionProps {
    /** Custom iCalendar file */
    'custom-file'?: Gio.File | null;
    /**
     * Email address associated with the calendar
     * @default NULL
     */
    'email-address'?: string | null;
    /**
     * Whether the file can be opened in writable mode
     * @default TRUE
     */
    writable?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceLocalConstructOnly = ESourceExtensionConstructOnly;

export interface ESourceMDNProps extends ESourceExtensionProps {
    /**
     * Policy for responding to MDN requests
     * @default E_MDN_RESPONSE_POLICY_ASK
     */
    'response-policy'?: EMdnResponsePolicyNick | EDataServer.MdnResponsePolicy;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceMDNConstructOnly = ESourceExtensionConstructOnly;

export interface ESourceMailAccountProps extends ESourceBackendProps {
    /** Folder to Archive messages in */
    'archive-folder'?: string | null;
    /**
     * Whether the account is builtin
     * @default FALSE
     */
    builtin?: boolean;
    /**
     * ESource UID of a Mail Identity
     * @default self
     */
    'identity-uid'?: string | null;
    /**
     * Three-state option for Mark messages as read after N seconds
     * @default E_THREE_STATE_INCONSISTENT
     */
    'mark-seen'?: EThreeStateNick | EDataServer.ThreeState;
    /**
     * Timeout in milliseconds for Mark messages as read after N seconds
     * @default 1500
     */
    'mark-seen-timeout'?: number;
    /**
     * Whether the account needs to do an initial setup
     * @default TRUE
     */
    'needs-initial-setup'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceMailAccountConstructOnly = ESourceBackendConstructOnly;

export interface ESourceMailCompositionProps extends ESourceExtensionProps {
    /** Recipients to blind carbon-copy */
    bcc?: string[];
    /** Recipients to carbon-copy */
    cc?: string[];
    /**
     * Preferred composer mode for this account, as a string nick.
     * @since 3.62
     * @default NULL
     */
    'composer-mode'?: string | null;
    /**
     * Preferred folder for draft messages
     * @default NULL
     */
    'drafts-folder'?: string | null;
    /**
     * Preferred language
     * @default NULL
     */
    language?: string | null;
    /**
     * What reply style to prefer
     * @default E_SOURCE_MAIL_COMPOSITION_REPLY_STYLE_DEFAULT
     */
    'reply-style'?: ESourceMailCompositionReplyStyleNick | EDataServer.SourceMailCompositionReplyStyle;
    /**
     * Include iMIP messages when signing
     * @default TRUE
     */
    'sign-imip'?: boolean;
    /**
     * Whether start at bottom on reply or forward
     * @default E_THREE_STATE_INCONSISTENT
     */
    'start-bottom'?: EThreeStateNick | EDataServer.ThreeState;
    /**
     * Preferred folder for message templates
     * @default NULL
     */
    'templates-folder'?: string | null;
    /**
     * Whether place signature at the top on reply or forward
     * @default E_THREE_STATE_INCONSISTENT
     */
    'top-signature'?: EThreeStateNick | EDataServer.ThreeState;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceMailCompositionConstructOnly = ESourceExtensionConstructOnly;

export interface ESourceMailIdentityProps extends ESourceExtensionProps {
    /**
     * Sender's email address
     * @default NULL
     */
    address?: string | null;
    /**
     * Sender's email address aliases
     * @default NULL
     */
    aliases?: string | null;
    /**
     * Sender's name
     * @default NULL
     */
    name?: string | null;
    /**
     * Sender's organization
     * @default NULL
     */
    organization?: string | null;
    /**
     * Sender's reply-to address
     * @default NULL
     */
    'reply-to'?: string | null;
    /**
     * ESource UID of the sender's signature
     * @default none
     */
    'signature-uid'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceMailIdentityConstructOnly = ESourceExtensionConstructOnly;

export interface ESourceMailSignatureProps extends ESourceExtensionProps {
    /**
     * MIME type of the signature content
     * @default NULL
     */
    'mime-type'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceMailSignatureConstructOnly = ESourceExtensionConstructOnly;

export interface ESourceMailSubmissionProps extends ESourceExtensionProps {
    /**
     * Whether to save replies to folder of the message being replied to, instead of the Sent folder
     * @default FALSE
     */
    'replies-to-origin-folder'?: boolean;
    /**
     * Preferred folder for sent messages
     * @default NULL
     */
    'sent-folder'?: string | null;
    /**
     * ESource UID of a Mail Transport
     * @default NULL
     */
    'transport-uid'?: string | null;
    /**
     * Whether to save sent messages to sent-folder
     * @default TRUE
     */
    'use-sent-folder'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceMailSubmissionConstructOnly = ESourceExtensionConstructOnly;

export interface ESourceMailTransportProps extends ESourceBackendProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceMailTransportConstructOnly = ESourceBackendConstructOnly;

export interface ESourceMemoListProps extends ESourceSelectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceMemoListConstructOnly = ESourceSelectableConstructOnly;

export interface ESourceOfflineProps extends ESourceExtensionProps {
    /**
     * Keep remote content synchronized locally
     * @default FALSE
     */
    'stay-synchronized'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceOfflineConstructOnly = ESourceExtensionConstructOnly;

export interface ESourceOpenPGPProps extends ESourceExtensionProps {
    /**
     * Always trust keys in my keyring
     * @default FALSE
     */
    'always-trust'?: boolean;
    /**
     * Ask before sending public key in messages
     * @default TRUE
     */
    'ask-send-public-key'?: boolean;
    /**
     * Encrypt outgoing messages by default
     * @default FALSE
     */
    'encrypt-by-default'?: boolean;
    /**
     * Always encrypt to myself
     * @default TRUE
     */
    'encrypt-to-self'?: boolean;
    /**
     * PGP/GPG Key ID
     * @default NULL
     */
    'key-id'?: string;
    /**
     * Locate keys in WKD for encryption
     * @default TRUE
     */
    'locate-keys'?: boolean;
    /**
     * Prefer inline sign/encrypt
     * @default FALSE
     */
    'prefer-inline'?: boolean;
    /**
     * Send whether prefers encryption together with the public key in messages
     * @default TRUE
     */
    'send-prefer-encrypt'?: boolean;
    /**
     * Send public key in messages
     * @default TRUE
     */
    'send-public-key'?: boolean;
    /**
     * Sign outgoing messages by default
     * @default FALSE
     */
    'sign-by-default'?: boolean;
    /**
     * Hash algorithm used to sign messages
     * @default NULL
     */
    'signing-algorithm'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceOpenPGPConstructOnly = ESourceExtensionConstructOnly;

export interface ESourceProxyProps extends ESourceExtensionProps {
    /**
     * Proxy autoconfiguration URL
     * @default NULL
     */
    'autoconfig-url'?: string;
    /**
     * FTP proxy host name
     * @default NULL
     */
    'ftp-host'?: string;
    /**
     * FTP proxy port
     * @default 0
     */
    'ftp-port'?: number;
    /**
     * HTTP proxy password
     * @default NULL
     */
    'http-auth-password'?: string;
    /**
     * HTTP proxy username
     * @default NULL
     */
    'http-auth-user'?: string;
    /**
     * HTTP proxy host name
     * @default NULL
     */
    'http-host'?: string;
    /**
     * HTTP proxy port
     * @default 8080
     */
    'http-port'?: number;
    /**
     * Whether HTTP proxy server connections require authentication
     * @default FALSE
     */
    'http-use-auth'?: boolean;
    /**
     * Secure HTTP proxy host name
     * @default NULL
     */
    'https-host'?: string;
    /**
     * Secure HTTP proxy port
     * @default 0
     */
    'https-port'?: number;
    /** Hosts to connect directly */
    'ignore-hosts'?: string[];
    /**
     * Proxy configuration method
     * @default E_PROXY_METHOD_DEFAULT
     */
    method?: EProxyMethodNick | EDataServer.ProxyMethod;
    /**
     * SOCKS proxy host name
     * @default NULL
     */
    'socks-host'?: string;
    /**
     * SOCKS proxy port
     * @default 0
     */
    'socks-port'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceProxyConstructOnly = ESourceExtensionConstructOnly;

export interface ESourceRefreshProps extends ESourceExtensionProps {
    /**
     * Whether to periodically refresh
     * @default TRUE
     */
    enabled?: boolean;
    /**
     * Whether to enable refresh on metered network
     * @default TRUE
     */
    'enabled-on-metered-network'?: boolean;
    /**
     * Refresh interval in minutes
     * @default 60
     */
    'interval-minutes'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceRefreshConstructOnly = ESourceExtensionConstructOnly;

export interface ESourceRegistryProps extends GObjectProps, GAsyncInitableProps, GInitableProps {
    /** The default address book #ESource. */
    'default-address-book'?: EDataServer.Source;
    /** The default calendar #ESource. */
    'default-calendar'?: EDataServer.Source;
    /** The default mail account #ESource. */
    'default-mail-account'?: EDataServer.Source;
    /** The default mail identity #ESource. */
    'default-mail-identity'?: EDataServer.Source;
    /** The default memo list #ESource. */
    'default-memo-list'?: EDataServer.Source;
    /** The default task list #ESource. */
    'default-task-list'?: EDataServer.Source;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceRegistryConstructOnly = GObjectConstructOnly | GAsyncInitableConstructOnly | GInitableConstructOnly;

export interface ESourceRegistryWatcherProps extends GObjectProps {
    /**
     * Optional extension name, to consider sources with only.
     * @since 3.26
     * @default NULL
     */
    'extension-name'?: string | null;
    /**
     * The #ESourceRegistry manages #ESource instances.
     * @since 3.26
     */
    registry?: EDataServer.SourceRegistry;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceRegistryWatcherConstructOnly = GObjectConstructOnly | 'extension-name' | 'registry';

export interface ESourceResourceProps extends ESourceExtensionProps {
    /**
     * Resource identity
     * @default NULL
     */
    identity?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceResourceConstructOnly = ESourceExtensionConstructOnly;

export interface ESourceRevisionGuardsProps extends ESourceExtensionProps {
    /**
     * Whether to enable or disable the revision guards
     * @default FALSE
     */
    enabled?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceRevisionGuardsConstructOnly = ESourceExtensionConstructOnly;

export interface ESourceSMIMEProps extends ESourceExtensionProps {
    /**
     * Encrypt outgoing messages by default
     * @default FALSE
     */
    'encrypt-by-default'?: boolean;
    /**
     * Always encrypt to myself
     * @default TRUE
     */
    'encrypt-to-self'?: boolean;
    /**
     * S/MIME certificate for encrypting messages
     * @default NULL
     */
    'encryption-certificate'?: string | null;
    /**
     * Sign outgoing messages by default
     * @default FALSE
     */
    'sign-by-default'?: boolean;
    /**
     * Hash algorithm used to sign messages
     * @default NULL
     */
    'signing-algorithm'?: string | null;
    /**
     * S/MIME certificate for signing messages
     * @default NULL
     */
    'signing-certificate'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceSMIMEConstructOnly = ESourceExtensionConstructOnly;

export interface ESourceSecurityProps extends ESourceExtensionProps {
    /**
     * Security method
     * @default none
     */
    method?: string;
    /**
     * Secure the network connection
     * @default FALSE
     */
    secure?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceSecurityConstructOnly = ESourceExtensionConstructOnly;

export interface ESourceSelectableProps extends ESourceBackendProps {
    /**
     * Textual specification of a color
     * @default #62a0ea
     */
    color?: string | null;
    /**
     * Comma-separated list of group names to which the source belongs
     * @since 3.62
     * @default NULL
     */
    groups?: string | null;
    /**
     * Preferred sorting order
     * @default 0
     */
    order?: number;
    /**
     * Whether the data source is selected
     * @default TRUE
     */
    selected?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceSelectableConstructOnly = ESourceBackendConstructOnly;

export interface ESourceTaskListProps extends ESourceSelectableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceTaskListConstructOnly = ESourceSelectableConstructOnly;

export interface ESourceUoaProps extends ESourceExtensionProps {
    /**
     * Ubuntu Online Account ID
     * @default 0
     */
    'account-id'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceUoaConstructOnly = ESourceExtensionConstructOnly;

export interface ESourceWeatherProps extends ESourceExtensionProps {
    /**
     * Weather location code
     * @default NULL
     */
    location?: string;
    /**
     * Fahrenheit, Centigrade or Kelvin units
     * @default E_SOURCE_WEATHER_UNITS_CENTIGRADE
     */
    units?: ESourceWeatherUnitsNick | EDataServer.SourceWeatherUnits;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceWeatherConstructOnly = ESourceExtensionConstructOnly;

export interface ESourceWebDAVNotesProps extends ESourceExtensionProps {
    /**
     * Default file extension for new notes
     * @default .md
     */
    'default-ext'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceWebDAVNotesConstructOnly = ESourceExtensionConstructOnly;

export interface ESourceWebdavProps extends ESourceExtensionProps {
    /**
     * Work around a bug in old Apache servers
     * @default FALSE
     */
    'avoid-ifmatch'?: boolean;
    /**
     * Whether the server handles meeting invitations (CalDAV-only)
     * @default FALSE
     */
    'calendar-auto-schedule'?: boolean;
    /** Color of the WebDAV resource */
    color?: string | null;
    /** Display name of the WebDAV resource */
    'display-name'?: string | null;
    /** The user's email address */
    'email-address'?: string | null;
    /**
     * Limit how many past days can be downloaded.
     * @since 3.60
     * @default 0
     */
    'limit-download-days'?: number;
    /**
     * A sorting order of the resource
     * @default 4294967295
     */
    order?: number;
    /**
     * Absolute path to a WebDAV resource
     * @default NULL
     */
    'resource-path'?: string | null;
    /**
     * Query to access a WebDAV resource
     * @default NULL
     */
    'resource-query'?: string | null;
    /**
     * SSL/TLS certificate trust setting, for invalid server certificates
     * @default NULL
     */
    'ssl-trust'?: string | null;
    /**
     * Connection timeout, in seconds
     * @default 30
     */
    timeout?: number;
    /** WebDAV service as a GUri */
    uri?: GLib.Uri;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ESourceWebdavConstructOnly = ESourceExtensionConstructOnly;

export interface EWebDAVSessionProps extends ESoupSessionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EWebDAVSessionConstructOnly = ESoupSessionConstructOnly;

export interface EXmlDocumentProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type EXmlDocumentConstructOnly = GObjectConstructOnly;

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
