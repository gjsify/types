/**
 * The GIR-derived widget VOCABULARY for Soup-2.4.
 *
 * GENERATED — do not edit. Provenance: Soup-2.4 — library 2.74.3 — prop(s) no TypeScript value satisfies: Soup.Address.sockaddr Soup.AuthDomain.filter-data Soup.AuthDomain.generic-auth-data Soup.AuthDomainBasic.auth-data Soup.AuthDomainDigest.auth-data Soup.Socket.async-context Soup.Socket.ssl-creds Soup.WebsocketConnection.extensions
 *
 * 33 instantiable GTypes (of which 0 concrete widgets), 38 declarations, 22 enum nick unions, 0 slot candidates.
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

import type Gio from '@girs/gio-2.0';
import type Soup from './soup-2.4.js';
import type { GFilterInputStreamConstructOnly, GFilterInputStreamProps, GInitableConstructOnly, GInitableProps, GInputStreamConstructOnly, GInputStreamProps, GPollableInputStreamConstructOnly, GPollableInputStreamProps, GSocketConnectableConstructOnly, GSocketConnectableProps } from '@girs/gio-2.0/vocabulary';
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

export type SoupAddressFamilyNick = 'invalid' | 'ipv4' | 'ipv6';
export type SoupCacheResponseNick = 'fresh' | 'needs-validation' | 'stale';
export type SoupCacheTypeNick = 'single-user' | 'shared';
export type SoupConnectionStateNick = 'new' | 'connecting' | 'idle' | 'in-use' | 'remote-disconnected' | 'disconnected';
export type SoupCookieJarAcceptPolicyNick = 'always' | 'never' | 'no-third-party' | 'grandfathered-third-party';
export type SoupDateFormatNick = 'http' | 'cookie' | 'rfc2822' | 'iso8601-compact' | 'iso8601-full' | 'iso8601' | 'iso8601-xmlrpc';
export type SoupEncodingNick = 'unrecognized' | 'none' | 'content-length' | 'eof' | 'chunked' | 'byteranges';
export type SoupHTTPVersionNick = 'http-1-0' | 'http-1-1';
export type SoupKnownStatusCodeNick = 'none' | 'cancelled' | 'cant-resolve' | 'cant-resolve-proxy' | 'cant-connect' | 'cant-connect-proxy' | 'ssl-failed' | 'io-error' | 'malformed' | 'try-again' | 'too-many-redirects' | 'tls-failed' | 'continue' | 'switching-protocols' | 'processing' | 'ok' | 'created' | 'accepted' | 'non-authoritative' | 'no-content' | 'reset-content' | 'partial-content' | 'multi-status' | 'multiple-choices' | 'moved-permanently' | 'found' | 'moved-temporarily' | 'see-other' | 'not-modified' | 'use-proxy' | 'not-appearing-in-this-protocol' | 'temporary-redirect' | 'bad-request' | 'unauthorized' | 'payment-required' | 'forbidden' | 'not-found' | 'method-not-allowed' | 'not-acceptable' | 'proxy-authentication-required' | 'proxy-unauthorized' | 'request-timeout' | 'conflict' | 'gone' | 'length-required' | 'precondition-failed' | 'request-entity-too-large' | 'request-uri-too-long' | 'unsupported-media-type' | 'requested-range-not-satisfiable' | 'invalid-range' | 'expectation-failed' | 'unprocessable-entity' | 'locked' | 'failed-dependency' | 'internal-server-error' | 'not-implemented' | 'bad-gateway' | 'service-unavailable' | 'gateway-timeout' | 'http-version-not-supported' | 'insufficient-storage' | 'not-extended';
export type SoupLoggerLogLevelNick = 'none' | 'minimal' | 'headers' | 'body';
export type SoupMemoryUseNick = 'static' | 'take' | 'copy' | 'temporary';
export type SoupMessageHeadersTypeNick = 'request' | 'response' | 'multipart';
export type SoupMessagePriorityNick = 'very-low' | 'low' | 'normal' | 'high' | 'very-high';
export type SoupSameSitePolicyNick = 'none' | 'lax' | 'strict';
export type SoupSocketIOStatusNick = 'ok' | 'would-block' | 'eof' | 'error';
export type SoupStatusNick = 'none' | 'cancelled' | 'cant-resolve' | 'cant-resolve-proxy' | 'cant-connect' | 'cant-connect-proxy' | 'ssl-failed' | 'io-error' | 'malformed' | 'try-again' | 'too-many-redirects' | 'tls-failed' | 'continue' | 'switching-protocols' | 'processing' | 'ok' | 'created' | 'accepted' | 'non-authoritative' | 'no-content' | 'reset-content' | 'partial-content' | 'multi-status' | 'multiple-choices' | 'moved-permanently' | 'found' | 'moved-temporarily' | 'see-other' | 'not-modified' | 'use-proxy' | 'not-appearing-in-this-protocol' | 'temporary-redirect' | 'permanent-redirect' | 'bad-request' | 'unauthorized' | 'payment-required' | 'forbidden' | 'not-found' | 'method-not-allowed' | 'not-acceptable' | 'proxy-authentication-required' | 'proxy-unauthorized' | 'request-timeout' | 'conflict' | 'gone' | 'length-required' | 'precondition-failed' | 'request-entity-too-large' | 'request-uri-too-long' | 'unsupported-media-type' | 'requested-range-not-satisfiable' | 'invalid-range' | 'expectation-failed' | 'unprocessable-entity' | 'locked' | 'failed-dependency' | 'internal-server-error' | 'not-implemented' | 'bad-gateway' | 'service-unavailable' | 'gateway-timeout' | 'http-version-not-supported' | 'insufficient-storage' | 'not-extended';
export type SoupWebsocketCloseCodeNick = 'normal' | 'going-away' | 'protocol-error' | 'unsupported-data' | 'no-status' | 'abnormal' | 'bad-data' | 'policy-violation' | 'too-big' | 'no-extension' | 'server-error' | 'tls-handshake';
export type SoupWebsocketConnectionTypeNick = 'unknown' | 'client' | 'server';
export type SoupWebsocketDataTypeNick = 'text' | 'binary';
export type SoupWebsocketErrorNick = 'failed' | 'not-websocket' | 'bad-handshake' | 'bad-origin';
export type SoupWebsocketStateNick = 'open' | 'closing' | 'closed';
export type SoupXMLRPCFaultNick = 'parse-error-not-well-formed' | 'parse-error-unsupported-encoding' | 'parse-error-invalid-character-for-encoding' | 'server-error-invalid-xml-rpc' | 'server-error-requested-method-not-found' | 'server-error-invalid-method-parameters' | 'server-error-internal-xml-rpc-error' | 'application-error' | 'system-error' | 'transport-error';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

export interface SoupAddressProps extends GObjectProps, GSocketConnectableProps {
    /** @default SOUP_ADDRESS_FAMILY_INVALID */
    family?: SoupAddressFamilyNick | Soup.AddressFamily;
    /** @default NULL */
    name?: string | null;
    /** @default -1 */
    port?: number;
    /** @default NULL */
    protocol?: string;
    sockaddr?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupAddressConstructOnly = GObjectConstructOnly | GSocketConnectableConstructOnly | 'family' | 'name' | 'port' | 'protocol' | 'sockaddr';

/** The abstract base class for handling authentication. */
export interface SoupAuthProps extends GObjectProps {
    /** @default NULL */
    host?: string;
    /** @default FALSE */
    'is-for-proxy'?: boolean;
    /** @default NULL */
    realm?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupAuthConstructOnly = GObjectConstructOnly;

export interface SoupAuthBasicProps extends SoupAuthProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupAuthBasicConstructOnly = SoupAuthConstructOnly;

export interface SoupAuthDigestProps extends SoupAuthProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupAuthDigestConstructOnly = SoupAuthConstructOnly;

export interface SoupAuthDomainProps extends GObjectProps {
    /** @default NULL */
    'add-path'?: string;
    /** The #SoupAuthDomainFilter for the domain */
    filter?: Soup.AuthDomainFilter;
    'filter-data'?: never;
    /** The #SoupAuthDomainGenericAuthCallback for the domain */
    'generic-auth-callback'?: Soup.AuthDomainGenericAuthCallback;
    'generic-auth-data'?: never;
    /** @default FALSE */
    proxy?: boolean;
    /** @default NULL */
    realm?: string;
    /** @default NULL */
    'remove-path'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupAuthDomainConstructOnly = GObjectConstructOnly | 'proxy' | 'realm';

export interface SoupAuthDomainBasicProps extends SoupAuthDomainProps {
    /** The #SoupAuthDomainBasicAuthCallback */
    'auth-callback'?: Soup.AuthDomainBasicAuthCallback;
    /** The data to pass to the #SoupAuthDomainBasicAuthCallback */
    'auth-data'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupAuthDomainBasicConstructOnly = SoupAuthDomainConstructOnly;

export interface SoupAuthDomainDigestProps extends SoupAuthDomainProps {
    /** The #SoupAuthDomainDigestAuthCallback */
    'auth-callback'?: Soup.AuthDomainDigestAuthCallback;
    /** The data to pass to the #SoupAuthDomainDigestAuthCallback */
    'auth-data'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupAuthDomainDigestConstructOnly = SoupAuthDomainConstructOnly;

export interface SoupAuthManagerProps extends GObjectProps, SoupSessionFeatureProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupAuthManagerConstructOnly = GObjectConstructOnly | SoupSessionFeatureConstructOnly;

export interface SoupAuthNTLMProps extends SoupAuthProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupAuthNTLMConstructOnly = SoupAuthConstructOnly;

export interface SoupAuthNegotiateProps extends SoupAuthProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupAuthNegotiateConstructOnly = SoupAuthConstructOnly;

export interface SoupCacheProps extends GObjectProps, SoupSessionFeatureProps {
    /** @default NULL */
    'cache-dir'?: string;
    /** @default SOUP_CACHE_SINGLE_USER */
    'cache-type'?: SoupCacheTypeNick | Soup.CacheType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupCacheConstructOnly = GObjectConstructOnly | SoupSessionFeatureConstructOnly | 'cache-dir' | 'cache-type';

export interface SoupContentDecoderProps extends GObjectProps, SoupSessionFeatureProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupContentDecoderConstructOnly = GObjectConstructOnly | SoupSessionFeatureConstructOnly;

export interface SoupContentSnifferProps extends GObjectProps, SoupSessionFeatureProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupContentSnifferConstructOnly = GObjectConstructOnly | SoupSessionFeatureConstructOnly;

export interface SoupCookieJarProps extends GObjectProps, SoupSessionFeatureProps {
    /**
     * The policy the jar should follow to accept or reject cookies
     * @since 2.30
     * @default SOUP_COOKIE_JAR_ACCEPT_ALWAYS
     */
    'accept-policy'?: SoupCookieJarAcceptPolicyNick | Soup.CookieJarAcceptPolicy;
    /** @default FALSE */
    'read-only'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupCookieJarConstructOnly = GObjectConstructOnly | SoupSessionFeatureConstructOnly | 'read-only';

export interface SoupCookieJarDBProps extends SoupCookieJarProps, SoupSessionFeatureProps {
    /** @default NULL */
    filename?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupCookieJarDBConstructOnly = SoupCookieJarConstructOnly | SoupSessionFeatureConstructOnly | 'filename';

export interface SoupCookieJarTextProps extends SoupCookieJarProps, SoupSessionFeatureProps {
    /** @default NULL */
    filename?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupCookieJarTextConstructOnly = SoupCookieJarConstructOnly | SoupSessionFeatureConstructOnly | 'filename';

export interface SoupHSTSEnforcerProps extends GObjectProps, SoupSessionFeatureProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupHSTSEnforcerConstructOnly = GObjectConstructOnly | SoupSessionFeatureConstructOnly;

export interface SoupHSTSEnforcerDBProps extends SoupHSTSEnforcerProps, SoupSessionFeatureProps {
    /**
     * The filename of the SQLite database where HSTS policies are stored.
     * @default NULL
     */
    filename?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupHSTSEnforcerDBConstructOnly = SoupHSTSEnforcerConstructOnly | SoupSessionFeatureConstructOnly | 'filename';

export interface SoupLoggerProps extends GObjectProps, SoupSessionFeatureProps {
    /**
     * The level of logging output
     * @since 2.56
     * @default SOUP_LOGGER_LOG_MINIMAL
     */
    level?: SoupLoggerLogLevelNick | Soup.LoggerLogLevel;
    /**
     * If #SoupLogger:level is %SOUP_LOGGER_LOG_BODY, this gives the maximum number of bytes of the body that will be logged.
     * @since 2.56
     * @default -1
     */
    'max-body-size'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupLoggerConstructOnly = GObjectConstructOnly | SoupSessionFeatureConstructOnly;

/** Represents an HTTP message being sent or received. */
export interface SoupMessageProps extends GObjectProps {
    /**
     * The #SoupURI loaded in the application when the message was queued.
     * @since 2.30
     */
    'first-party'?: Soup.URI;
    /** @default 0 */
    flags?: number;
    /** @default SOUP_HTTP_1_1 */
    'http-version'?: SoupHTTPVersionNick | Soup.HTTPVersion;
    /**
     * Set when the message is navigating between top level domains.
     * @since 2.70
     * @default FALSE
     */
    'is-top-level-navigation'?: boolean;
    /** @default GET */
    method?: string;
    /** @default SOUP_MESSAGE_PRIORITY_NORMAL */
    priority?: SoupMessagePriorityNick | Soup.MessagePriority;
    /** @default NULL */
    'reason-phrase'?: string;
    /** @default FALSE */
    'server-side'?: boolean;
    'site-for-cookies'?: Soup.URI;
    /** @default 0 */
    'status-code'?: number;
    /**
     * The #GTlsCertificate associated with the message
     * @since 2.34
     */
    'tls-certificate'?: Gio.TlsCertificate;
    /**
     * The verification errors on #SoupMessage:tls-certificate
     * @since 2.34
     * @default G_TLS_CERTIFICATE_NO_FLAGS
     */
    'tls-errors'?: number;
    uri?: Soup.URI;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupMessageConstructOnly = GObjectConstructOnly | 'server-side';

export interface SoupMultipartInputStreamProps extends GFilterInputStreamProps, GPollableInputStreamProps {
    message?: Soup.Message;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupMultipartInputStreamConstructOnly = GFilterInputStreamConstructOnly | GPollableInputStreamConstructOnly | 'message';

export interface SoupProxyResolverDefaultProps extends GObjectProps, SoupProxyURIResolverProps, SoupSessionFeatureProps {
    'gproxy-resolver'?: Gio.ProxyResolver;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupProxyResolverDefaultConstructOnly = GObjectConstructOnly | SoupProxyURIResolverConstructOnly | SoupSessionFeatureConstructOnly;

export interface SoupProxyURIResolverProps extends SoupSessionFeatureProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupProxyURIResolverConstructOnly = SoupSessionFeatureConstructOnly;

/** A request to retrieve a particular URI. */
export interface SoupRequestProps extends GObjectProps, GInitableProps {
    /**
     * The request's #SoupSession.
     * @since 2.42
     */
    session?: Soup.Session;
    /**
     * The request URI.
     * @since 2.42
     */
    uri?: Soup.URI;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupRequestConstructOnly = GObjectConstructOnly | GInitableConstructOnly | 'session' | 'uri';

export interface SoupRequestDataProps extends SoupRequestProps, GInitableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupRequestDataConstructOnly = SoupRequestConstructOnly | GInitableConstructOnly;

export interface SoupRequestFileProps extends SoupRequestProps, GInitableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupRequestFileConstructOnly = SoupRequestConstructOnly | GInitableConstructOnly;

export interface SoupRequestHTTPProps extends SoupRequestProps, GInitableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupRequestHTTPConstructOnly = SoupRequestConstructOnly | GInitableConstructOnly;

export interface SoupRequesterProps extends GObjectProps, SoupSessionFeatureProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupRequesterConstructOnly = GObjectConstructOnly | SoupSessionFeatureConstructOnly;

export interface SoupServerProps extends GObjectProps {
    /**
     * The server's #GMainContext, if you are using the old API.
     * @deprecated The new API uses the thread-default #GMainContext rather than having an explicitly-specified one.
     */
    'async-context'?: null;
    /**
     * A %NULL-terminated array of URI schemes that should be considered to be aliases for "http".
     * @since 2.44
     */
    'http-aliases'?: string[];
    /**
     * A comma-delimited list of URI schemes that should be considered to be aliases for "https".
     * @since 2.44
     */
    'https-aliases'?: string[];
    /**
     * The address of the network interface the server is listening on, if you are using the old #SoupServer API.
     * @deprecated #SoupServers can listen on multiple interfaces at once now.
     */
    interface?: Soup.Address;
    /**
     * The port the server is listening on, if you are using the old #SoupServer API.
     * @default 0
     * @deprecated #SoupServers can listen on multiple interfaces at once now.
     */
    port?: number;
    /** @default FALSE */
    'raw-paths'?: boolean;
    /**
     * If non-%NULL, the value to use for the "Server" header on #SoupMessage<!-- -->s processed by this server.
     * @default NULL
     */
    'server-header'?: string;
    /**
     * Path to a file containing a PEM-encoded certificate.
     * @default NULL
     * @deprecated use #SoupServer:tls-certificate or soup_server_set_ssl_certificate().
     */
    'ssl-cert-file'?: string;
    /**
     * Path to a file containing a PEM-encoded private key.
     * @default NULL
     * @deprecated use #SoupServer:tls-certificate or soup_server_set_ssl_certificate().
     */
    'ssl-key-file'?: string;
    /**
     * A #GTlsCertificate that has a #GTlsCertificate:private-key set.
     * @since 2.38
     */
    'tls-certificate'?: Gio.TlsCertificate;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupServerConstructOnly = GObjectConstructOnly | 'async-context' | 'interface' | 'port' | 'raw-paths' | 'ssl-cert-file' | 'ssl-key-file' | 'tls-certificate';

export interface SoupSessionProps extends GObjectProps {
    /**
     * If non-%NULL, the value to use for the "Accept-Language" header on #SoupMessage<!-- -->s sent from this session.
     * @since 2.30
     * @default NULL
     */
    'accept-language'?: string;
    /**
     * If %TRUE, #SoupSession will automatically set the string for the "Accept-Language" header on every #SoupMessage sent, based on the return value of g_get_language_names().
     * @since 2.30
     * @default FALSE
     */
    'accept-language-auto'?: boolean;
    /** The #GMainContext that miscellaneous session-related asynchronous callbacks are invoked on. */
    'async-context'?: null;
    /**
     * A %NULL-terminated array of URI schemes that should be considered to be aliases for "http".
     * @since 2.38
     */
    'http-aliases'?: string[];
    /**
     * A comma-delimited list of URI schemes that should be considered to be aliases for "https".
     * @since 2.38
     */
    'https-aliases'?: string[];
    /**
     * Connection lifetime (in seconds) when idle.
     * @since 2.24
     * @default 60
     */
    'idle-timeout'?: number;
    /**
     * Sets the #SoupAddress to use for the client side of the connection.
     * @since 2.42
     */
    'local-address'?: Soup.Address;
    /** @default 10 */
    'max-conns'?: number;
    /** @default 2 */
    'max-conns-per-host'?: number;
    /**
     * A #GProxyResolver to use with this session.
     * @since 2.42
     */
    'proxy-resolver'?: Gio.ProxyResolver;
    /**
     * A proxy to use for all http and https requests in this session.
     * @deprecated since 2.70: Use SoupSession:proxy-resolver along with #GSimpleProxyResolver.
     */
    'proxy-uri'?: Soup.URI;
    /**
     * File containing SSL CA certificates.
     * @default NULL
     * @deprecated use #SoupSession:ssl-use-system-ca-file, or else #SoupSession:tls-database with a #GTlsFileDatabase (which allows you to do explicit error handling).
     */
    'ssl-ca-file'?: string;
    /**
     * Normally, if #SoupSession:tls-database is set (including if it was set via #SoupSession:ssl-use-system-ca-file or #SoupSession:ssl-ca-file), then libsoup will reject any certificate that is invalid (…
     * @since 2.30
     * @default TRUE
     */
    'ssl-strict'?: boolean;
    /**
     * Setting this to %TRUE is equivalent to setting #SoupSession:tls-database to the default system CA database.
     * @since 2.38
     * @default TRUE
     */
    'ssl-use-system-ca-file'?: boolean;
    /**
     * The timeout (in seconds) for socket I/O operations (including connecting to a server, and waiting for a reply to an HTTP request).
     * @default 0
     */
    timeout?: number;
    /**
     * Sets the #GTlsDatabase to use for validating SSL/TLS certificates.
     * @since 2.38
     */
    'tls-database'?: Gio.TlsDatabase;
    /**
     * A #GTlsInteraction object that will be passed on to any #GTlsConnections created by the session.
     * @since 2.48
     */
    'tls-interaction'?: Gio.TlsInteraction;
    /**
     * Whether or not to use NTLM authentication.
     * @default FALSE
     * @deprecated use soup_session_add_feature_by_type() with #SOUP_TYPE_AUTH_NTLM.
     */
    'use-ntlm'?: boolean;
    /**
     * If %TRUE (which it always is on a plain #SoupSession), asynchronous HTTP requests in this session will run in whatever the thread-default #GMainContext is at the time they are started, rather than al…
     * @since 2.38
     * @default FALSE
     */
    'use-thread-context'?: boolean;
    /**
     * If non-%NULL, the value to use for the "User-Agent" header on #SoupMessage<!-- -->s sent from this session.
     * @default NULL
     */
    'user-agent'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupSessionConstructOnly = GObjectConstructOnly | 'async-context' | 'local-address';

export interface SoupSessionAsyncProps extends SoupSessionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupSessionAsyncConstructOnly = SoupSessionConstructOnly;

/** An object that implement some sort of optional feature for #SoupSession. */
export interface SoupSessionFeatureProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupSessionFeatureConstructOnly = GObjectConstructOnly;

export interface SoupSessionSyncProps extends SoupSessionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupSessionSyncConstructOnly = SoupSessionConstructOnly;

export interface SoupSocketProps extends GObjectProps, GInitableProps {
    'async-context'?: never;
    /** @default -1 */
    fd?: number;
    gsocket?: Gio.Socket;
    iostream?: Gio.IOStream;
    /** @default FALSE */
    'ipv6-only'?: boolean;
    'local-address'?: Soup.Address;
    /**
     * Whether or not the socket uses non-blocking I/O.
     * @default TRUE
     */
    'non-blocking'?: boolean;
    'remote-address'?: Soup.Address;
    'ssl-creds'?: never;
    /** @default FALSE */
    'ssl-fallback'?: boolean;
    /** @default TRUE */
    'ssl-strict'?: boolean;
    /** @default 0 */
    timeout?: number;
    /**
     * Use g_main_context_get_thread_default().
     * @since 2.38
     * @default FALSE
     */
    'use-thread-context'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupSocketConstructOnly = GObjectConstructOnly | GInitableConstructOnly | 'async-context' | 'fd' | 'gsocket' | 'iostream' | 'local-address' | 'remote-address' | 'ssl-fallback' | 'ssl-strict' | 'use-thread-context';

/** A class representing a WebSocket connection. */
export interface SoupWebsocketConnectionProps extends GObjectProps {
    /**
     * The type of connection (client/server).
     * @since 2.50
     * @default SOUP_WEBSOCKET_CONNECTION_UNKNOWN
     */
    'connection-type'?: SoupWebsocketConnectionTypeNick | Soup.WebsocketConnectionType;
    /**
     * List of #SoupWebsocketExtension objects that are active in the connection.
     * @since 2.68
     */
    extensions?: never;
    /**
     * The underlying IO stream the WebSocket is communicating over.
     * @since 2.50
     */
    'io-stream'?: Gio.IOStream;
    /**
     * Interval in seconds on when to send a ping message which will serve as a keepalive message.
     * @since 2.58
     * @default 0
     */
    'keepalive-interval'?: number;
    /**
     * The maximum payload size for incoming packets the protocol expects or 0 to not limit it.
     * @since 2.56
     * @default 131072
     */
    'max-incoming-payload-size'?: bigint | number;
    /**
     * The client's Origin.
     * @since 2.50
     * @default NULL
     */
    origin?: string | null;
    /**
     * The chosen protocol, or %NULL if a protocol was not agreed upon.
     * @since 2.50
     * @default NULL
     */
    protocol?: string | null;
    /**
     * The URI of the WebSocket.
     * @since 2.50
     */
    uri?: Soup.URI;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupWebsocketConnectionConstructOnly = GObjectConstructOnly | 'connection-type' | 'extensions' | 'io-stream' | 'origin' | 'protocol' | 'uri';

export interface SoupWebsocketExtensionProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupWebsocketExtensionConstructOnly = GObjectConstructOnly;

export interface SoupWebsocketExtensionDeflateProps extends SoupWebsocketExtensionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupWebsocketExtensionDeflateConstructOnly = SoupWebsocketExtensionConstructOnly;

export interface SoupWebsocketExtensionManagerProps extends GObjectProps, SoupSessionFeatureProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupWebsocketExtensionManagerConstructOnly = GObjectConstructOnly | SoupSessionFeatureConstructOnly;

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
