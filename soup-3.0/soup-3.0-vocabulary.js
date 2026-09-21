// The widget vocabulary of Soup-3.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Soup-3.0 — library 3.7.2 — prop(s) no TypeScript value satisfies: Soup.AuthDomain.filter-data Soup.AuthDomain.generic-auth-data Soup.AuthDomainBasic.auth-data Soup.AuthDomainDigest.auth-data Soup.WebsocketConnection.extensions
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Soup',
    version: '3.0',
    libraryVersion: '3.7.2',
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: ['Soup.AuthDomain.filter-data', 'Soup.AuthDomain.generic-auth-data', 'Soup.AuthDomainBasic.auth-data', 'Soup.AuthDomainDigest.auth-data', 'Soup.WebsocketConnection.extensions'],
    unresolvedProps: [],
    identifierPrefixes: ['Soup'],
    requiredVocabularies: ['@girs/gio-2.0/vocabulary', '@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    SoupAuth: ['authority', 'is-for-proxy', 'realm'],
    SoupAuthDomain: ['filter', 'filter-data', 'generic-auth-callback', 'generic-auth-data', 'proxy', 'realm'],
    SoupAuthDomainBasic: ['auth-callback', 'auth-data'],
    SoupAuthDomainDigest: ['auth-callback', 'auth-data'],
    SoupCache: ['cache-dir', 'cache-type'],
    SoupCookieJar: ['accept-policy', 'read-only'],
    SoupCookieJarDB: ['filename', 'max-size'],
    SoupCookieJarText: ['filename'],
    SoupHSTSEnforcerDB: ['filename'],
    SoupLogger: ['level', 'max-body-size'],
    SoupMessage: ['first-party', 'flags', 'is-options-ping', 'is-top-level-navigation', 'method', 'priority', 'site-for-cookies', 'uri'],
    SoupMultipartInputStream: ['message'],
    SoupServer: ['raw-paths', 'server-header', 'tls-auth-mode', 'tls-certificate', 'tls-database'],
    SoupSession: ['accept-language', 'accept-language-auto', 'idle-timeout', 'local-address', 'max-conns', 'max-conns-per-host', 'proxy-resolver', 'remote-connectable', 'timeout', 'tls-database', 'tls-interaction', 'user-agent'],
    SoupWebsocketConnection: ['connection-type', 'extensions', 'io-stream', 'keepalive-interval', 'keepalive-pong-timeout', 'max-incoming-payload-size', 'max-total-message-size', 'origin', 'protocol', 'uri'],
};

export const OWN_SIGNALS = {
    SoupCookieJar: ['changed'],
    SoupHSTSEnforcer: ['changed'],
    SoupMessage: ['accept-certificate', 'authenticate', 'content-sniffed', 'finished', 'got-body', 'got-body-data', 'got-headers', 'got-informational', 'hsts-enforced', 'network-event', 'request-certificate', 'request-certificate-password', 'request-compression-dictionary', 'restarted', 'starting', 'wrote-body', 'wrote-body-data', 'wrote-headers'],
    SoupServer: ['request-aborted', 'request-finished', 'request-read', 'request-started'],
    SoupServerMessage: ['accept-certificate', 'connected', 'disconnected', 'finished', 'got-body', 'got-chunk', 'got-headers', 'wrote-body', 'wrote-body-data', 'wrote-chunk', 'wrote-headers', 'wrote-informational'],
    SoupSession: ['request-queued', 'request-unqueued'],
    SoupWebsocketConnection: ['closed', 'closing', 'error', 'message', 'pong'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    SoupAuthBasic: ['SoupAuthBasic', 'SoupAuth', 'GObject'],
    SoupAuthDigest: ['SoupAuthDigest', 'SoupAuth', 'GObject'],
    SoupAuthDomainBasic: ['SoupAuthDomainBasic', 'SoupAuthDomain', 'GObject'],
    SoupAuthDomainDigest: ['SoupAuthDomainDigest', 'SoupAuthDomain', 'GObject'],
    SoupAuthManager: ['SoupAuthManager', 'GObject', 'SoupSessionFeature'],
    SoupAuthNTLM: ['SoupAuthNTLM', 'SoupAuth', 'GObject'],
    SoupAuthNegotiate: ['SoupAuthNegotiate', 'SoupAuth', 'GObject'],
    SoupCache: ['SoupCache', 'GObject', 'SoupSessionFeature'],
    SoupCompressionDictionaryRequest: ['SoupCompressionDictionaryRequest', 'GObject'],
    SoupContentDecoder: ['SoupContentDecoder', 'GObject', 'SoupSessionFeature'],
    SoupContentSniffer: ['SoupContentSniffer', 'GObject', 'SoupSessionFeature'],
    SoupCookieJar: ['SoupCookieJar', 'GObject', 'SoupSessionFeature'],
    SoupCookieJarDB: ['SoupCookieJarDB', 'SoupCookieJar', 'GObject', 'GInitable', 'SoupSessionFeature'],
    SoupCookieJarText: ['SoupCookieJarText', 'SoupCookieJar', 'GObject', 'SoupSessionFeature'],
    SoupHSTSEnforcer: ['SoupHSTSEnforcer', 'GObject', 'SoupSessionFeature'],
    SoupHSTSEnforcerDB: ['SoupHSTSEnforcerDB', 'SoupHSTSEnforcer', 'GObject', 'SoupSessionFeature'],
    SoupLogger: ['SoupLogger', 'GObject', 'SoupSessionFeature'],
    SoupMessage: ['SoupMessage', 'GObject'],
    SoupMultipartInputStream: ['SoupMultipartInputStream', 'GFilterInputStream', 'GInputStream', 'GObject', 'GPollableInputStream'],
    SoupServer: ['SoupServer', 'GObject'],
    SoupServerMessage: ['SoupServerMessage', 'GObject'],
    SoupSession: ['SoupSession', 'GObject'],
    SoupWebsocketConnection: ['SoupWebsocketConnection', 'GObject'],
    SoupWebsocketExtensionDeflate: ['SoupWebsocketExtensionDeflate', 'SoupWebsocketExtension', 'GObject'],
    SoupWebsocketExtensionManager: ['SoupWebsocketExtensionManager', 'GObject', 'SoupSessionFeature'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GTlsAuthenticationMode: ['none', 'requested', 'required'],
    SoupCacheType: ['single-user', 'shared'],
    SoupCookieJarAcceptPolicy: ['always', 'never', 'no-third-party', 'grandfathered-third-party'],
    SoupDateFormat: ['http', 'cookie'],
    SoupEncoding: ['unrecognized', 'none', 'content-length', 'eof', 'chunked', 'byteranges'],
    SoupHTTPVersion: ['http-1-0', 'http-1-1', 'http-2-0'],
    SoupLoggerLogLevel: ['none', 'minimal', 'headers', 'body'],
    SoupMemoryUse: ['static', 'take', 'copy'],
    SoupMessageHeadersType: ['request', 'response', 'multipart'],
    SoupMessagePriority: ['very-low', 'low', 'normal', 'high', 'very-high'],
    SoupSameSitePolicy: ['none', 'lax', 'strict'],
    SoupStatus: ['none', 'continue', 'switching-protocols', 'processing', 'ok', 'created', 'accepted', 'non-authoritative', 'no-content', 'reset-content', 'partial-content', 'multi-status', 'multiple-choices', 'moved-permanently', 'found', 'moved-temporarily', 'see-other', 'not-modified', 'use-proxy', 'not-appearing-in-this-protocol', 'temporary-redirect', 'permanent-redirect', 'bad-request', 'unauthorized', 'payment-required', 'forbidden', 'not-found', 'method-not-allowed', 'not-acceptable', 'proxy-authentication-required', 'proxy-unauthorized', 'request-timeout', 'conflict', 'gone', 'length-required', 'precondition-failed', 'request-entity-too-large', 'request-uri-too-long', 'unsupported-media-type', 'requested-range-not-satisfiable', 'invalid-range', 'expectation-failed', 'misdirected-request', 'unprocessable-entity', 'locked', 'failed-dependency', 'internal-server-error', 'not-implemented', 'bad-gateway', 'service-unavailable', 'gateway-timeout', 'http-version-not-supported', 'insufficient-storage', 'not-extended'],
    SoupURIComponent: ['none', 'scheme', 'user', 'password', 'auth-params', 'host', 'port', 'path', 'query', 'fragment'],
    SoupWebsocketCloseCode: ['normal', 'going-away', 'protocol-error', 'unsupported-data', 'no-status', 'abnormal', 'bad-data', 'policy-violation', 'too-big', 'no-extension', 'server-error', 'tls-handshake'],
    SoupWebsocketConnectionType: ['unknown', 'client', 'server'],
    SoupWebsocketDataType: ['text', 'binary'],
    SoupWebsocketState: ['open', 'closing', 'closed'],
};

// The number behind each of those nicks, read from GIR's own `value` attribute.
//
// It ships because position in `ENUM_NICKS` is not the value and a consumer with no
// typelib has no other way to learn it: a surface without GI still has to hand GObject an
// integer. The alternative a consumer reaches for first is counting, and counting is wrong
// on 6 of the 137 enums a GTK 4 vocabulary carries (112 in Gtk-4.0, 25 in Adw-1) --
// `GtkResponseType` runs -1 down to
// -11, `GtkTextWindowType` starts at 1, and `GtkConstraintStrength.required` is
// 1001001000 where counting answers 0.
//
// Same provenance as the nicks above, which is the point: a consumer that reads the numbers
// from an INSTALLED library instead gets two provenances for one table, and a member the
// vocabulary describes but the host predates then looks like a missing number rather than a
// version gap.
export const ENUM_VALUES = {
    'GTlsAuthenticationMode.none': 0,
    'GTlsAuthenticationMode.requested': 1,
    'GTlsAuthenticationMode.required': 2,
    'SoupCacheType.shared': 1,
    'SoupCacheType.single-user': 0,
    'SoupCookieJarAcceptPolicy.always': 0,
    'SoupCookieJarAcceptPolicy.grandfathered-third-party': 3,
    'SoupCookieJarAcceptPolicy.never': 1,
    'SoupCookieJarAcceptPolicy.no-third-party': 2,
    'SoupDateFormat.cookie': 2,
    'SoupDateFormat.http': 1,
    'SoupEncoding.byteranges': 5,
    'SoupEncoding.chunked': 4,
    'SoupEncoding.content-length': 2,
    'SoupEncoding.eof': 3,
    'SoupEncoding.none': 1,
    'SoupEncoding.unrecognized': 0,
    'SoupHTTPVersion.http-1-0': 0,
    'SoupHTTPVersion.http-1-1': 1,
    'SoupHTTPVersion.http-2-0': 2,
    'SoupLoggerLogLevel.body': 3,
    'SoupLoggerLogLevel.headers': 2,
    'SoupLoggerLogLevel.minimal': 1,
    'SoupLoggerLogLevel.none': 0,
    'SoupMemoryUse.copy': 2,
    'SoupMemoryUse.static': 0,
    'SoupMemoryUse.take': 1,
    'SoupMessageHeadersType.multipart': 2,
    'SoupMessageHeadersType.request': 0,
    'SoupMessageHeadersType.response': 1,
    'SoupMessagePriority.high': 3,
    'SoupMessagePriority.low': 1,
    'SoupMessagePriority.normal': 2,
    'SoupMessagePriority.very-high': 4,
    'SoupMessagePriority.very-low': 0,
    'SoupSameSitePolicy.lax': 1,
    'SoupSameSitePolicy.none': 0,
    'SoupSameSitePolicy.strict': 2,
    'SoupStatus.accepted': 202,
    'SoupStatus.bad-gateway': 502,
    'SoupStatus.bad-request': 400,
    'SoupStatus.conflict': 409,
    'SoupStatus.continue': 100,
    'SoupStatus.created': 201,
    'SoupStatus.expectation-failed': 417,
    'SoupStatus.failed-dependency': 424,
    'SoupStatus.forbidden': 403,
    'SoupStatus.found': 302,
    'SoupStatus.gateway-timeout': 504,
    'SoupStatus.gone': 410,
    'SoupStatus.http-version-not-supported': 505,
    'SoupStatus.insufficient-storage': 507,
    'SoupStatus.internal-server-error': 500,
    'SoupStatus.invalid-range': 416,
    'SoupStatus.length-required': 411,
    'SoupStatus.locked': 423,
    'SoupStatus.method-not-allowed': 405,
    'SoupStatus.misdirected-request': 421,
    'SoupStatus.moved-permanently': 301,
    'SoupStatus.moved-temporarily': 302,
    'SoupStatus.multi-status': 207,
    'SoupStatus.multiple-choices': 300,
    'SoupStatus.no-content': 204,
    'SoupStatus.non-authoritative': 203,
    'SoupStatus.none': 0,
    'SoupStatus.not-acceptable': 406,
    'SoupStatus.not-appearing-in-this-protocol': 306,
    'SoupStatus.not-extended': 510,
    'SoupStatus.not-found': 404,
    'SoupStatus.not-implemented': 501,
    'SoupStatus.not-modified': 304,
    'SoupStatus.ok': 200,
    'SoupStatus.partial-content': 206,
    'SoupStatus.payment-required': 402,
    'SoupStatus.permanent-redirect': 308,
    'SoupStatus.precondition-failed': 412,
    'SoupStatus.processing': 102,
    'SoupStatus.proxy-authentication-required': 407,
    'SoupStatus.proxy-unauthorized': 407,
    'SoupStatus.request-entity-too-large': 413,
    'SoupStatus.request-timeout': 408,
    'SoupStatus.request-uri-too-long': 414,
    'SoupStatus.requested-range-not-satisfiable': 416,
    'SoupStatus.reset-content': 205,
    'SoupStatus.see-other': 303,
    'SoupStatus.service-unavailable': 503,
    'SoupStatus.switching-protocols': 101,
    'SoupStatus.temporary-redirect': 307,
    'SoupStatus.unauthorized': 401,
    'SoupStatus.unprocessable-entity': 422,
    'SoupStatus.unsupported-media-type': 415,
    'SoupStatus.use-proxy': 305,
    'SoupURIComponent.auth-params': 4,
    'SoupURIComponent.fragment': 9,
    'SoupURIComponent.host': 5,
    'SoupURIComponent.none': 0,
    'SoupURIComponent.password': 3,
    'SoupURIComponent.path': 7,
    'SoupURIComponent.port': 6,
    'SoupURIComponent.query': 8,
    'SoupURIComponent.scheme': 1,
    'SoupURIComponent.user': 2,
    'SoupWebsocketCloseCode.abnormal': 1006,
    'SoupWebsocketCloseCode.bad-data': 1007,
    'SoupWebsocketCloseCode.going-away': 1001,
    'SoupWebsocketCloseCode.no-extension': 1010,
    'SoupWebsocketCloseCode.no-status': 1005,
    'SoupWebsocketCloseCode.normal': 1000,
    'SoupWebsocketCloseCode.policy-violation': 1008,
    'SoupWebsocketCloseCode.protocol-error': 1002,
    'SoupWebsocketCloseCode.server-error': 1011,
    'SoupWebsocketCloseCode.tls-handshake': 1015,
    'SoupWebsocketCloseCode.too-big': 1009,
    'SoupWebsocketCloseCode.unsupported-data': 1003,
    'SoupWebsocketConnectionType.client': 1,
    'SoupWebsocketConnectionType.server': 2,
    'SoupWebsocketConnectionType.unknown': 0,
    'SoupWebsocketDataType.binary': 2,
    'SoupWebsocketDataType.text': 1,
    'SoupWebsocketState.closed': 3,
    'SoupWebsocketState.closing': 2,
    'SoupWebsocketState.open': 1,
};

// The nicks GIR marks `deprecated="1"`.
//
// Two members of one enum may share a value -- that is how GObject spells an alias, and
// `GTK_ALIGN_BASELINE` and `GTK_ALIGN_BASELINE_FILL` are both 4. `ENUM_VALUES` keeps
// both names, so nothing is lost, and this is what says which of the two a number should be
// spelled back as. Stated rather than derived: the pairing is visible in the values, the
// DIRECTION is not.
//
// Read it as evidence, not as a negative: 4 registered-enum members in the 718 GIRs carry
// the attribute at all, and 179 of the 182 value-sharing pairs carry it on neither half.
// A nick missing from here is a nick GIR says nothing about, not a nick GIR calls current.
export const ENUM_DEPRECATED = [];

// The declared remainder: nicks whose GIR `value` is not a number this can carry.
//
// Every nick in `ENUM_NICKS` is in `ENUM_VALUES` or here -- a nick in neither would be a
// silent drop. GIR carries two shapes no integer holds: a symbolic or absent value (Vala
// writes `(null)`, a char enum writes a letter) and an integer past
// `Number.MAX_SAFE_INTEGER`. The value kept here is the raw attribute, so the entry says
// WHAT was unreadable rather than only that something was. Measured over the 718 GIRs in
// ts-for-gir's `girs/`: 32 of 34096 registered-enum members, none in Gtk, Adw, GLib or Gio.
export const ENUM_VALUES_UNREADABLE = {};

// The number behind each member of a registered BITFIELD, keyed the same way.
//
// `ENUM_NICKS` refuses a bitfield because GObject cannot resolve a nick SET, and that
// reason says nothing about one member's number. 23 settable properties in Gtk-4.0 and
// Adw-1 are bitfield-typed -- `GtkEntry:input-hints`, `GtkPopoverMenu:flags`,
// `AdwTabView:shortcuts`, `GtkDropTarget:actions`, ... -- and they are typed bare
// `number`, so a host without GI has nothing to compute one from. Counting is worst
// exactly here: 119 of the 156 Gtk-4.0 bitfield members this vocabulary carries disagree
// with their declaration position, against 29 of 672 enumeration members.
//
// A table of its own rather than more rows in `ENUM_VALUES`, so that "every nick in
// `ENUM_NICKS` has a number or a declared reason" stays a claim about one set.
export const FLAG_VALUES = {
    'SoupCacheability.cacheable': 1,
    'SoupCacheability.invalidates': 4,
    'SoupCacheability.uncacheable': 2,
    'SoupCacheability.validates': 8,
    'SoupExpectation.continue': 2,
    'SoupExpectation.unrecognized': 1,
    'SoupMessageFlags.collect-metrics': 32,
    'SoupMessageFlags.do-not-use-auth-cache': 16,
    'SoupMessageFlags.idempotent': 8,
    'SoupMessageFlags.new-connection': 4,
    'SoupMessageFlags.no-redirect': 2,
    'SoupServerListenOptions.https': 1,
    'SoupServerListenOptions.ipv4-only': 2,
    'SoupServerListenOptions.ipv6-only': 4,
};

// The same declared remainder for the bitfields. Every one of the 13 members in ts-for-gir's
// `girs/` whose value is past `Number.MAX_SAFE_INTEGER` is a bitfield member (Fwupd, Qmi),
// so this is the table that shape actually reaches.
export const FLAG_VALUES_UNREADABLE = {};

// Declaration GType + property name -> the GType of that property's enum or bitfield.
//
// Without it the value tables above are half an answer. A host with no GI knows it must set
// `orientation` to the number behind the nick `vertical`; `ENUM_VALUES` is keyed
// `GtkOrientation.vertical`, and nothing else says that `orientation` is a
// `GtkOrientation`. Deriving it is not available: `never` is a member of several Gtk enums,
// and choosing between them produces a wrong number rather than a missing one.
//
// Only where the property's OWN type is the enum. An array of them and a union that mentions
// one are both entries a consumer would resolve wrongly, so neither is written.
//
// A GType named here has numbers in SOME vocabulary, not necessarily this one: the namespace
// that OWNS an enum publishes it, so 83 of the 909 entries a full run emits want the owner's
// vocabulary loaded too. Owners that emit none (Gdk, Pango) are inlined into the tables above.
export const PROP_ENUMS = {
    'SoupCache.cache-type': 'SoupCacheType',
    'SoupCookieJar.accept-policy': 'SoupCookieJarAcceptPolicy',
    'SoupLogger.level': 'SoupLoggerLogLevel',
    'SoupMessage.flags': 'SoupMessageFlags',
    'SoupMessage.priority': 'SoupMessagePriority',
    'SoupServer.tls-auth-mode': 'GTlsAuthenticationMode',
    'SoupWebsocketConnection.connection-type': 'SoupWebsocketConnectionType',
};

// `<declaration GType>.<property>` -> the GType of that property's own type.
//
// `PROP_ENUMS` one case wider, and a SEPARATE table on purpose. That one is a join with a
// contract — the GType it names has numbers, in this vocabulary or the owner's — and folding a
// plain type table in would mix "resolvable to numbers" with "not" and hand the distinction to
// the consumer. `ARIA_VALUE_ENUMS` beside `ARIA_VALUE_TYPES` is the same split.
//
// A row is ABSENT where no GType can be stated: a fundamental spelling outside the generator's
// closed map, a registered type with no `glib:type-name`, or a property with no `<type>`
// child. Absence therefore reads as "unknown" and never as "scalar".
export const PROP_TYPES = {
    'SoupAuth.authority': 'gchararray',
    'SoupAuth.is-for-proxy': 'gboolean',
    'SoupAuth.realm': 'gchararray',
    'SoupAuthDomain.filter-data': 'gpointer',
    'SoupAuthDomain.generic-auth-data': 'gpointer',
    'SoupAuthDomain.proxy': 'gboolean',
    'SoupAuthDomain.realm': 'gchararray',
    'SoupAuthDomainBasic.auth-data': 'gpointer',
    'SoupAuthDomainDigest.auth-data': 'gpointer',
    'SoupCache.cache-dir': 'gchararray',
    'SoupCache.cache-type': 'SoupCacheType',
    'SoupCookieJar.accept-policy': 'SoupCookieJarAcceptPolicy',
    'SoupCookieJar.read-only': 'gboolean',
    'SoupCookieJarDB.filename': 'gchararray',
    'SoupCookieJarDB.max-size': 'guint64',
    'SoupCookieJarText.filename': 'gchararray',
    'SoupHSTSEnforcerDB.filename': 'gchararray',
    'SoupLogger.level': 'SoupLoggerLogLevel',
    'SoupLogger.max-body-size': 'gint',
    'SoupMessage.flags': 'SoupMessageFlags',
    'SoupMessage.is-options-ping': 'gboolean',
    'SoupMessage.is-top-level-navigation': 'gboolean',
    'SoupMessage.method': 'gchararray',
    'SoupMessage.priority': 'SoupMessagePriority',
    'SoupMultipartInputStream.message': 'SoupMessage',
    'SoupServer.raw-paths': 'gboolean',
    'SoupServer.server-header': 'gchararray',
    'SoupServer.tls-auth-mode': 'GTlsAuthenticationMode',
    'SoupServer.tls-certificate': 'GTlsCertificate',
    'SoupServer.tls-database': 'GTlsDatabase',
    'SoupSession.accept-language': 'gchararray',
    'SoupSession.accept-language-auto': 'gboolean',
    'SoupSession.idle-timeout': 'guint',
    'SoupSession.local-address': 'GInetSocketAddress',
    'SoupSession.max-conns': 'gint',
    'SoupSession.max-conns-per-host': 'gint',
    'SoupSession.proxy-resolver': 'GProxyResolver',
    'SoupSession.remote-connectable': 'GSocketConnectable',
    'SoupSession.timeout': 'guint',
    'SoupSession.tls-database': 'GTlsDatabase',
    'SoupSession.tls-interaction': 'GTlsInteraction',
    'SoupSession.user-agent': 'gchararray',
    'SoupWebsocketConnection.connection-type': 'SoupWebsocketConnectionType',
    'SoupWebsocketConnection.extensions': 'gpointer',
    'SoupWebsocketConnection.io-stream': 'GIOStream',
    'SoupWebsocketConnection.keepalive-interval': 'guint',
    'SoupWebsocketConnection.keepalive-pong-timeout': 'guint',
    'SoupWebsocketConnection.max-incoming-payload-size': 'guint64',
    'SoupWebsocketConnection.max-total-message-size': 'guint64',
    'SoupWebsocketConnection.origin': 'gchararray',
    'SoupWebsocketConnection.protocol': 'gchararray',
};

// `<enum GType>.<nick>` -> the kind of value that ARIA slot takes.
//
// The one table here that is not about a ParamSpec. A GtkBuilder or Blueprint
// `accessibility { … }` block is typed by GTK's ARIA table instead, and the two disagree
// where it matters: `orientation` is settable on a `GtkLabel` that implements no
// `GtkOrientable` and has no such property, and `checked` is a `GtkAccessibleTristate`, so
// `checked: true` means the number 1 and not the boolean. A consumer typing those slots
// from the widget gets both wrong, silently.
//
// Read from each member's own documentation, which is where GTK keeps the table --
// `gtk_accessible_property_init_value()` is the C half and is not introspectable, the
// sentence is. Complete or absent, never partial: a member whose documentation states no
// value type fails generation and names itself, because a missing row is indistinguishable
// from "GTK has no such name" and the plausible fallback emits `true` where GTK means 1.
export const ARIA_VALUE_TYPES = {};

// The same keys, for the `'enum'` rows only -> the GType of the enum.
//
// The join on from a kind to a number, and a table of its own for the reason `PROP_ENUMS`
// is one: folding the GType into `ARIA_VALUE_TYPES` would make its values a mix of six
// reserved words and arbitrary GTypes, and telling them apart would be the consumer's
// problem. With this, `ARIA_VALUE_TYPES[k] === 'enum'` is the whole test, and
// `ENUM_NICKS[ARIA_VALUE_ENUMS[k]]` is the nick list.
export const ARIA_VALUE_ENUMS = {};

export const SLOT_CANDIDATES = {};

export const SINCE = {
    'SoupCompressionDictionaryRequest': '3.8',
    'SoupCookieJarDB.max-size': '3.8',
    'SoupMessage::got-body-data': '3.4',
    'SoupMessage::request-compression-dictionary': '3.8',
    'SoupWebsocketConnection.keepalive-pong-timeout': '3.6',
    'SoupWebsocketConnection.max-total-message-size': '3.8',
};
