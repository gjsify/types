/**
 * The GIR-derived widget VOCABULARY for Soup-3.0.
 *
 * GENERATED — do not edit. Provenance: Soup-3.0 — library 3.7.2 — prop(s) no TypeScript value satisfies: Soup.AuthDomain.filter-data Soup.AuthDomain.generic-auth-data Soup.AuthDomainBasic.auth-data Soup.AuthDomainDigest.auth-data Soup.WebsocketConnection.extensions
 *
 * 25 instantiable GTypes (of which 0 concrete widgets), 29 declarations, 16 enum nick unions, 0 slot candidates.
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
import type Gio from '@girs/gio-2.0';
import type Soup from './soup-3.0.js';
import type { GFilterInputStreamConstructOnly, GFilterInputStreamProps, GInitableConstructOnly, GInitableProps, GInputStreamConstructOnly, GInputStreamProps, GPollableInputStreamConstructOnly, GPollableInputStreamProps, GTlsAuthenticationModeNick } from '@girs/gio-2.0/vocabulary';
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

export type SoupCacheTypeNick = 'single-user' | 'shared';
export type SoupCookieJarAcceptPolicyNick = 'always' | 'never' | 'no-third-party' | 'grandfathered-third-party';
export type SoupDateFormatNick = 'http' | 'cookie';
export type SoupEncodingNick = 'unrecognized' | 'none' | 'content-length' | 'eof' | 'chunked' | 'byteranges';
export type SoupHTTPVersionNick = 'http-1-0' | 'http-1-1' | 'http-2-0';
export type SoupLoggerLogLevelNick = 'none' | 'minimal' | 'headers' | 'body';
export type SoupMemoryUseNick = 'static' | 'take' | 'copy';
export type SoupMessageHeadersTypeNick = 'request' | 'response' | 'multipart';
export type SoupMessagePriorityNick = 'very-low' | 'low' | 'normal' | 'high' | 'very-high';
export type SoupSameSitePolicyNick = 'none' | 'lax' | 'strict';
export type SoupStatusNick = 'none' | 'continue' | 'switching-protocols' | 'processing' | 'ok' | 'created' | 'accepted' | 'non-authoritative' | 'no-content' | 'reset-content' | 'partial-content' | 'multi-status' | 'multiple-choices' | 'moved-permanently' | 'found' | 'moved-temporarily' | 'see-other' | 'not-modified' | 'use-proxy' | 'not-appearing-in-this-protocol' | 'temporary-redirect' | 'permanent-redirect' | 'bad-request' | 'unauthorized' | 'payment-required' | 'forbidden' | 'not-found' | 'method-not-allowed' | 'not-acceptable' | 'proxy-authentication-required' | 'proxy-unauthorized' | 'request-timeout' | 'conflict' | 'gone' | 'length-required' | 'precondition-failed' | 'request-entity-too-large' | 'request-uri-too-long' | 'unsupported-media-type' | 'requested-range-not-satisfiable' | 'invalid-range' | 'expectation-failed' | 'misdirected-request' | 'unprocessable-entity' | 'locked' | 'failed-dependency' | 'internal-server-error' | 'not-implemented' | 'bad-gateway' | 'service-unavailable' | 'gateway-timeout' | 'http-version-not-supported' | 'insufficient-storage' | 'not-extended';
export type SoupURIComponentNick = 'none' | 'scheme' | 'user' | 'password' | 'auth-params' | 'host' | 'port' | 'path' | 'query' | 'fragment';
export type SoupWebsocketCloseCodeNick = 'normal' | 'going-away' | 'protocol-error' | 'unsupported-data' | 'no-status' | 'abnormal' | 'bad-data' | 'policy-violation' | 'too-big' | 'no-extension' | 'server-error' | 'tls-handshake';
export type SoupWebsocketConnectionTypeNick = 'unknown' | 'client' | 'server';
export type SoupWebsocketDataTypeNick = 'text' | 'binary';
export type SoupWebsocketStateNick = 'open' | 'closing' | 'closed';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

/** The abstract base class for handling authentication. */
export interface SoupAuthProps extends GObjectProps {
    /**
     * The authority (host:port) being authenticated to.
     * @default NULL
     */
    authority?: string;
    /**
     * Whether or not the auth is for a proxy server.
     * @default FALSE
     */
    'is-for-proxy'?: boolean;
    /**
     * The authentication realm.
     * @default NULL
     */
    realm?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupAuthConstructOnly = GObjectConstructOnly;

/** HTTP "Basic" authentication. */
export interface SoupAuthBasicProps extends SoupAuthProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupAuthBasicConstructOnly = SoupAuthConstructOnly;

/** HTTP "Digest" authentication. */
export interface SoupAuthDigestProps extends SoupAuthProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupAuthDigestConstructOnly = SoupAuthConstructOnly;

/** Server-side authentication. */
export interface SoupAuthDomainProps extends GObjectProps {
    /** The [callback@AuthDomainFilter] for the domain. */
    filter?: Soup.AuthDomainFilter;
    /** Data to pass to the [callback@AuthDomainFilter]. */
    'filter-data'?: never;
    /** The [callback@AuthDomainGenericAuthCallback]. */
    'generic-auth-callback'?: Soup.AuthDomainGenericAuthCallback;
    /** The data to pass to the [callback@AuthDomainGenericAuthCallback]. */
    'generic-auth-data'?: never;
    /**
     * Whether or not this is a proxy auth domain.
     * @default FALSE
     */
    proxy?: boolean;
    /**
     * The realm of this auth domain.
     * @default NULL
     */
    realm?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupAuthDomainConstructOnly = GObjectConstructOnly | 'proxy' | 'realm';

/** Server-side "Basic" authentication. */
export interface SoupAuthDomainBasicProps extends SoupAuthDomainProps {
    /** The [callback@AuthDomainBasicAuthCallback]. */
    'auth-callback'?: Soup.AuthDomainBasicAuthCallback;
    /** The data to pass to the [callback@AuthDomainBasicAuthCallback]. */
    'auth-data'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupAuthDomainBasicConstructOnly = SoupAuthDomainConstructOnly;

/** Server-side "Digest" authentication. */
export interface SoupAuthDomainDigestProps extends SoupAuthDomainProps {
    /** The [callback@AuthDomainDigestAuthCallback]. */
    'auth-callback'?: Soup.AuthDomainDigestAuthCallback;
    /** The data to pass to the [callback@AuthDomainDigestAuthCallback]. */
    'auth-data'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupAuthDomainDigestConstructOnly = SoupAuthDomainConstructOnly;

/** HTTP client-side authentication handler. */
export interface SoupAuthManagerProps extends GObjectProps, SoupSessionFeatureProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupAuthManagerConstructOnly = GObjectConstructOnly | SoupSessionFeatureConstructOnly;

/** HTTP-based NTLM authentication. */
export interface SoupAuthNTLMProps extends SoupAuthProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupAuthNTLMConstructOnly = SoupAuthConstructOnly;

/** HTTP-based GSS-Negotiate authentication, as defined by [RFC 4559](https://datatracker.ietf.org/doc/html/rfc4559). */
export interface SoupAuthNegotiateProps extends SoupAuthProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupAuthNegotiateConstructOnly = SoupAuthConstructOnly;

/** File-based cache for HTTP resources. */
export interface SoupCacheProps extends GObjectProps, SoupSessionFeatureProps {
    /**
     * The directory to store the cache files.
     * @default NULL
     */
    'cache-dir'?: string;
    /**
     * Whether the cache is private or shared.
     * @default SOUP_CACHE_SINGLE_USER
     */
    'cache-type'?: SoupCacheTypeNick | Soup.CacheType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupCacheConstructOnly = GObjectConstructOnly | SoupSessionFeatureConstructOnly | 'cache-dir' | 'cache-type';

/** Represents a pending request for a compression dictionary. */
export interface SoupCompressionDictionaryRequestProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupCompressionDictionaryRequestConstructOnly = GObjectConstructOnly;

/** Handles decoding of HTTP messages. */
export interface SoupContentDecoderProps extends GObjectProps, SoupSessionFeatureProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupContentDecoderConstructOnly = GObjectConstructOnly | SoupSessionFeatureConstructOnly;

/** Sniffs the mime type of messages. */
export interface SoupContentSnifferProps extends GObjectProps, SoupSessionFeatureProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupContentSnifferConstructOnly = GObjectConstructOnly | SoupSessionFeatureConstructOnly;

/** Automatic cookie handling for SoupSession. */
export interface SoupCookieJarProps extends GObjectProps, SoupSessionFeatureProps {
    /**
     * The policy the jar should follow to accept or reject cookies.
     * @default SOUP_COOKIE_JAR_ACCEPT_ALWAYS
     */
    'accept-policy'?: SoupCookieJarAcceptPolicyNick | Soup.CookieJarAcceptPolicy;
    /**
     * Whether or not the cookie jar is read-only.
     * @default FALSE
     */
    'read-only'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupCookieJarConstructOnly = GObjectConstructOnly | SoupSessionFeatureConstructOnly | 'read-only';

/** Database-based Cookie Jar. */
export interface SoupCookieJarDBProps extends SoupCookieJarProps, GInitableProps, SoupSessionFeatureProps {
    /**
     * Cookie-storage filename.
     * @default NULL
     */
    filename?: string;
    /**
     * Cookie-storage maximum database size.
     * @since 3.8
     * @default 0
     */
    'max-size'?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupCookieJarDBConstructOnly = SoupCookieJarConstructOnly | GInitableConstructOnly | SoupSessionFeatureConstructOnly | 'filename' | 'max-size';

/** Text-file-based ("cookies.txt") Cookie Jar [class@CookieJarText] is a [class@CookieJar] that reads cookies from and writes them to a text file in format similar to Mozilla's "cookies.txt". */
export interface SoupCookieJarTextProps extends SoupCookieJarProps, SoupSessionFeatureProps {
    /**
     * Cookie-storage filename.
     * @default NULL
     */
    filename?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupCookieJarTextConstructOnly = SoupCookieJarConstructOnly | SoupSessionFeatureConstructOnly | 'filename';

/** Automatic HTTP Strict Transport Security enforcing for [class@Session]. */
export interface SoupHSTSEnforcerProps extends GObjectProps, SoupSessionFeatureProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupHSTSEnforcerConstructOnly = GObjectConstructOnly | SoupSessionFeatureConstructOnly;

/** Persistent HTTP Strict Transport Security enforcer. */
export interface SoupHSTSEnforcerDBProps extends SoupHSTSEnforcerProps, SoupSessionFeatureProps {
    /**
     * The filename of the SQLite database where HSTS policies are stored.
     * @default NULL
     */
    filename?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupHSTSEnforcerDBConstructOnly = SoupHSTSEnforcerConstructOnly | SoupSessionFeatureConstructOnly | 'filename';

/** Debug logging support [class@Logger] watches a [class@Session] and logs the HTTP traffic that it generates, for debugging purposes. */
export interface SoupLoggerProps extends GObjectProps, SoupSessionFeatureProps {
    /**
     * The level of logging output.
     * @default SOUP_LOGGER_LOG_MINIMAL
     */
    level?: SoupLoggerLogLevelNick | Soup.LoggerLogLevel;
    /**
     * If [property@Logger:level] is %SOUP_LOGGER_LOG_BODY, this gives the maximum number of bytes of the body that will be logged.
     * @default -1
     */
    'max-body-size'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupLoggerConstructOnly = GObjectConstructOnly | SoupSessionFeatureConstructOnly;

/** Represents an HTTP message being sent or received. */
export interface SoupMessageProps extends GObjectProps {
    /** The [struct@GLib.Uri] loaded in the application when the message was queued. */
    'first-party'?: GLib.Uri;
    /**
     * Various message options.
     * @default 0
     */
    flags?: number;
    /**
     * Whether the message is an OPTIONS ping.
     * @default FALSE
     */
    'is-options-ping'?: boolean;
    /**
     * Set when the message is navigating between top level domains.
     * @default FALSE
     */
    'is-top-level-navigation'?: boolean;
    /**
     * The message's HTTP method.
     * @default GET
     */
    method?: string;
    /**
     * Sets the priority of the [class@Message].
     * @default SOUP_MESSAGE_PRIORITY_NORMAL
     */
    priority?: SoupMessagePriorityNick | Soup.MessagePriority;
    /** Site used to compare cookies against. */
    'site-for-cookies'?: GLib.Uri;
    /** The message's Request-URI. */
    uri?: GLib.Uri;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupMessageConstructOnly = GObjectConstructOnly;

/** Handles streams of multipart messages. */
export interface SoupMultipartInputStreamProps extends GFilterInputStreamProps, GPollableInputStreamProps {
    /** The [class@Message]. */
    message?: Soup.Message;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupMultipartInputStreamConstructOnly = GFilterInputStreamConstructOnly | GPollableInputStreamConstructOnly | 'message';

/** [class@Server] provides a basic implementation of an HTTP server. */
export interface SoupServerProps extends GObjectProps {
    /**
     * If %TRUE, percent-encoding in the Request-URI path will not be automatically decoded.
     * @default FALSE
     */
    'raw-paths'?: boolean;
    /**
     * Server header.
     * @default NULL
     */
    'server-header'?: string;
    /**
     * A [enum@Gio.TlsAuthenticationMode] for SSL/TLS client authentication.
     * @default G_TLS_AUTHENTICATION_NONE
     */
    'tls-auth-mode'?: GTlsAuthenticationModeNick | Gio.TlsAuthenticationMode;
    /** A [class@Gio.TlsCertificate[] that has a [property@Gio.TlsCertificate:private-key] set. */
    'tls-certificate'?: Gio.TlsCertificate | null;
    /** A [class@Gio.TlsDatabase] to use for validating SSL/TLS client certificates. */
    'tls-database'?: Gio.TlsDatabase | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupServerConstructOnly = GObjectConstructOnly | 'raw-paths';

/** An HTTP server request and response pair. */
export interface SoupServerMessageProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupServerMessageConstructOnly = GObjectConstructOnly;

/** Soup session state object. */
export interface SoupSessionProps extends GObjectProps {
    /**
     * If non-%NULL, the value to use for the "Accept-Language" header on [class@Message]s sent from this session.
     * @default NULL
     */
    'accept-language'?: string | null;
    /**
     * If %TRUE, [class@Session] will automatically set the string for the "Accept-Language" header on every [class@Message] sent, based on the return value of [func@GLib.get_language_names].
     * @default FALSE
     */
    'accept-language-auto'?: boolean;
    /**
     * Connection lifetime (in seconds) when idle.
     * @default 60
     */
    'idle-timeout'?: number;
    /** Sets the [class@Gio.InetSocketAddress] to use for the client side of the connection. */
    'local-address'?: Gio.InetSocketAddress | null;
    /**
     * The maximum number of connections that the session can open at once.
     * @default 10
     */
    'max-conns'?: number;
    /**
     * The maximum number of connections that the session can open at once to a given host.
     * @default 2
     */
    'max-conns-per-host'?: number;
    /** A [iface@Gio.ProxyResolver] to use with this session. */
    'proxy-resolver'?: Gio.ProxyResolver | null;
    /** Sets a socket to make outgoing connections on. */
    'remote-connectable'?: Gio.SocketConnectable | null;
    /**
     * The timeout (in seconds) for socket I/O operations (including connecting to a server, and waiting for a reply to an HTTP request).
     * @default 0
     */
    timeout?: number;
    /** Sets the [class@Gio.TlsDatabase] to use for validating SSL/TLS certificates. */
    'tls-database'?: Gio.TlsDatabase | null;
    /** A [class@Gio.TlsInteraction] object that will be passed on to any [class@Gio.TlsConnection]s created by the session. */
    'tls-interaction'?: Gio.TlsInteraction | null;
    /**
     * User-Agent string.
     * @default NULL
     */
    'user-agent'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupSessionConstructOnly = GObjectConstructOnly | 'local-address' | 'max-conns' | 'max-conns-per-host' | 'remote-connectable';

/** Interface for miscellaneous [class@Session] features. */
export interface SoupSessionFeatureProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupSessionFeatureConstructOnly = GObjectConstructOnly;

/** The WebSocket Protocol Provides support for the [WebSocket](http://tools.ietf.org/html/rfc6455) protocol. */
export interface SoupWebsocketConnectionProps extends GObjectProps {
    /**
     * The type of connection (client/server).
     * @default SOUP_WEBSOCKET_CONNECTION_UNKNOWN
     */
    'connection-type'?: SoupWebsocketConnectionTypeNick | Soup.WebsocketConnectionType;
    /** List of [class@WebsocketExtension] objects that are active in the connection. */
    extensions?: never;
    /** The underlying IO stream the WebSocket is communicating over. */
    'io-stream'?: Gio.IOStream;
    /**
     * Interval in seconds on when to send a ping message which will serve as a keepalive message.
     * @default 0
     */
    'keepalive-interval'?: number;
    /**
     * Timeout in seconds for when the absence of a pong from a keepalive ping is assumed to be caused by a faulty connection.
     * @since 3.6
     * @default 0
     */
    'keepalive-pong-timeout'?: number;
    /**
     * The maximum payload size for incoming packets, or 0 to not limit it.
     * @default 131072
     */
    'max-incoming-payload-size'?: bigint | number;
    /**
     * The maximum size for incoming messages.
     * @since 3.8
     * @default 0
     */
    'max-total-message-size'?: bigint | number;
    /**
     * The client's Origin.
     * @default NULL
     */
    origin?: string | null;
    /**
     * The chosen protocol, or %NULL if a protocol was not agreed upon.
     * @default NULL
     */
    protocol?: string | null;
    /** The URI of the WebSocket. */
    uri?: GLib.Uri;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupWebsocketConnectionConstructOnly = GObjectConstructOnly | 'connection-type' | 'extensions' | 'io-stream' | 'origin' | 'protocol' | 'uri';

/** A WebSocket extension [class@WebsocketExtension] is the base class for WebSocket extension objects. */
export interface SoupWebsocketExtensionProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupWebsocketExtensionConstructOnly = GObjectConstructOnly;

/** A SoupWebsocketExtensionDeflate is a [class@WebsocketExtension] implementing permessage-deflate (RFC 7692). */
export interface SoupWebsocketExtensionDeflateProps extends SoupWebsocketExtensionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type SoupWebsocketExtensionDeflateConstructOnly = SoupWebsocketExtensionConstructOnly;

/** SoupWebsocketExtensionManager is the [iface@SessionFeature] that handles WebSockets extensions for a [class@Session]. */
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
