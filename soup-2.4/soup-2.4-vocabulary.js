// The widget vocabulary of Soup-2.4 as runtime data.
//
// GENERATED — do not edit. Provenance: Soup-2.4 — library 2.74.3 — prop(s) no TypeScript value satisfies: Soup.Address.sockaddr Soup.AuthDomain.filter-data Soup.AuthDomain.generic-auth-data Soup.AuthDomainBasic.auth-data Soup.AuthDomainDigest.auth-data Soup.Socket.async-context Soup.Socket.ssl-creds Soup.WebsocketConnection.extensions
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Soup',
    version: '2.4',
    libraryVersion: '2.74.3',
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: ['Soup.Address.sockaddr', 'Soup.AuthDomain.filter-data', 'Soup.AuthDomain.generic-auth-data', 'Soup.AuthDomainBasic.auth-data', 'Soup.AuthDomainDigest.auth-data', 'Soup.Socket.async-context', 'Soup.Socket.ssl-creds', 'Soup.WebsocketConnection.extensions'],
    unresolvedProps: [],
    identifierPrefixes: ['Soup'],
    requiredVocabularies: ['@girs/gio-2.0/vocabulary', '@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    SoupAddress: ['family', 'name', 'port', 'protocol', 'sockaddr'],
    SoupAuth: ['host', 'is-for-proxy', 'realm'],
    SoupAuthDomain: ['add-path', 'filter', 'filter-data', 'generic-auth-callback', 'generic-auth-data', 'proxy', 'realm', 'remove-path'],
    SoupAuthDomainBasic: ['auth-callback', 'auth-data'],
    SoupAuthDomainDigest: ['auth-callback', 'auth-data'],
    SoupCache: ['cache-dir', 'cache-type'],
    SoupCookieJar: ['accept-policy', 'read-only'],
    SoupCookieJarDB: ['filename'],
    SoupCookieJarText: ['filename'],
    SoupHSTSEnforcerDB: ['filename'],
    SoupLogger: ['level', 'max-body-size'],
    SoupMessage: ['first-party', 'flags', 'http-version', 'is-top-level-navigation', 'method', 'priority', 'reason-phrase', 'server-side', 'site-for-cookies', 'status-code', 'tls-certificate', 'tls-errors', 'uri'],
    SoupMultipartInputStream: ['message'],
    SoupProxyResolverDefault: ['gproxy-resolver'],
    SoupRequest: ['session', 'uri'],
    SoupServer: ['async-context', 'http-aliases', 'https-aliases', 'interface', 'port', 'raw-paths', 'server-header', 'ssl-cert-file', 'ssl-key-file', 'tls-certificate'],
    SoupSession: ['accept-language', 'accept-language-auto', 'async-context', 'http-aliases', 'https-aliases', 'idle-timeout', 'local-address', 'max-conns', 'max-conns-per-host', 'proxy-resolver', 'proxy-uri', 'ssl-ca-file', 'ssl-strict', 'ssl-use-system-ca-file', 'timeout', 'tls-database', 'tls-interaction', 'use-ntlm', 'use-thread-context', 'user-agent'],
    SoupSocket: ['async-context', 'fd', 'gsocket', 'iostream', 'ipv6-only', 'local-address', 'non-blocking', 'remote-address', 'ssl-creds', 'ssl-fallback', 'ssl-strict', 'timeout', 'use-thread-context'],
    SoupWebsocketConnection: ['connection-type', 'extensions', 'io-stream', 'keepalive-interval', 'max-incoming-payload-size', 'origin', 'protocol', 'uri'],
};

export const OWN_SIGNALS = {
    SoupAuthManager: ['authenticate'],
    SoupCookieJar: ['changed'],
    SoupHSTSEnforcer: ['changed', 'hsts-enforced'],
    SoupMessage: ['content-sniffed', 'finished', 'got-body', 'got-chunk', 'got-headers', 'got-informational', 'network-event', 'restarted', 'starting', 'wrote-body', 'wrote-body-data', 'wrote-chunk', 'wrote-headers', 'wrote-informational'],
    SoupServer: ['request-aborted', 'request-finished', 'request-read', 'request-started'],
    SoupSession: ['authenticate', 'connection-created', 'request-queued', 'request-started', 'request-unqueued', 'tunneling'],
    SoupSocket: ['disconnected', 'event', 'new-connection', 'readable', 'writable'],
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
    SoupAddress: ['SoupAddress', 'GObject', 'GSocketConnectable'],
    SoupAuthBasic: ['SoupAuthBasic', 'SoupAuth', 'GObject'],
    SoupAuthDigest: ['SoupAuthDigest', 'SoupAuth', 'GObject'],
    SoupAuthDomainBasic: ['SoupAuthDomainBasic', 'SoupAuthDomain', 'GObject'],
    SoupAuthDomainDigest: ['SoupAuthDomainDigest', 'SoupAuthDomain', 'GObject'],
    SoupAuthManager: ['SoupAuthManager', 'GObject', 'SoupSessionFeature'],
    SoupAuthNTLM: ['SoupAuthNTLM', 'SoupAuth', 'GObject'],
    SoupAuthNegotiate: ['SoupAuthNegotiate', 'SoupAuth', 'GObject'],
    SoupCache: ['SoupCache', 'GObject', 'SoupSessionFeature'],
    SoupContentDecoder: ['SoupContentDecoder', 'GObject', 'SoupSessionFeature'],
    SoupContentSniffer: ['SoupContentSniffer', 'GObject', 'SoupSessionFeature'],
    SoupCookieJar: ['SoupCookieJar', 'GObject', 'SoupSessionFeature'],
    SoupCookieJarDB: ['SoupCookieJarDB', 'SoupCookieJar', 'GObject', 'SoupSessionFeature'],
    SoupCookieJarText: ['SoupCookieJarText', 'SoupCookieJar', 'GObject', 'SoupSessionFeature'],
    SoupHSTSEnforcer: ['SoupHSTSEnforcer', 'GObject', 'SoupSessionFeature'],
    SoupHSTSEnforcerDB: ['SoupHSTSEnforcerDB', 'SoupHSTSEnforcer', 'GObject', 'SoupSessionFeature'],
    SoupLogger: ['SoupLogger', 'GObject', 'SoupSessionFeature'],
    SoupMessage: ['SoupMessage', 'GObject'],
    SoupMultipartInputStream: ['SoupMultipartInputStream', 'GFilterInputStream', 'GInputStream', 'GObject', 'GPollableInputStream'],
    SoupProxyResolverDefault: ['SoupProxyResolverDefault', 'GObject', 'SoupProxyURIResolver', 'SoupSessionFeature'],
    SoupRequest: ['SoupRequest', 'GObject', 'GInitable'],
    SoupRequestData: ['SoupRequestData', 'SoupRequest', 'GObject', 'GInitable'],
    SoupRequestFile: ['SoupRequestFile', 'SoupRequest', 'GObject', 'GInitable'],
    SoupRequestHTTP: ['SoupRequestHTTP', 'SoupRequest', 'GObject', 'GInitable'],
    SoupRequester: ['SoupRequester', 'GObject', 'SoupSessionFeature'],
    SoupServer: ['SoupServer', 'GObject'],
    SoupSession: ['SoupSession', 'GObject'],
    SoupSessionAsync: ['SoupSessionAsync', 'SoupSession', 'GObject'],
    SoupSessionSync: ['SoupSessionSync', 'SoupSession', 'GObject'],
    SoupSocket: ['SoupSocket', 'GObject', 'GInitable'],
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
    SoupAddressFamily: ['invalid', 'ipv4', 'ipv6'],
    SoupCacheResponse: ['fresh', 'needs-validation', 'stale'],
    SoupCacheType: ['single-user', 'shared'],
    SoupConnectionState: ['new', 'connecting', 'idle', 'in-use', 'remote-disconnected', 'disconnected'],
    SoupCookieJarAcceptPolicy: ['always', 'never', 'no-third-party', 'grandfathered-third-party'],
    SoupDateFormat: ['http', 'cookie', 'rfc2822', 'iso8601-compact', 'iso8601-full', 'iso8601', 'iso8601-xmlrpc'],
    SoupEncoding: ['unrecognized', 'none', 'content-length', 'eof', 'chunked', 'byteranges'],
    SoupHTTPVersion: ['http-1-0', 'http-1-1'],
    SoupKnownStatusCode: ['none', 'cancelled', 'cant-resolve', 'cant-resolve-proxy', 'cant-connect', 'cant-connect-proxy', 'ssl-failed', 'io-error', 'malformed', 'try-again', 'too-many-redirects', 'tls-failed', 'continue', 'switching-protocols', 'processing', 'ok', 'created', 'accepted', 'non-authoritative', 'no-content', 'reset-content', 'partial-content', 'multi-status', 'multiple-choices', 'moved-permanently', 'found', 'moved-temporarily', 'see-other', 'not-modified', 'use-proxy', 'not-appearing-in-this-protocol', 'temporary-redirect', 'bad-request', 'unauthorized', 'payment-required', 'forbidden', 'not-found', 'method-not-allowed', 'not-acceptable', 'proxy-authentication-required', 'proxy-unauthorized', 'request-timeout', 'conflict', 'gone', 'length-required', 'precondition-failed', 'request-entity-too-large', 'request-uri-too-long', 'unsupported-media-type', 'requested-range-not-satisfiable', 'invalid-range', 'expectation-failed', 'unprocessable-entity', 'locked', 'failed-dependency', 'internal-server-error', 'not-implemented', 'bad-gateway', 'service-unavailable', 'gateway-timeout', 'http-version-not-supported', 'insufficient-storage', 'not-extended'],
    SoupLoggerLogLevel: ['none', 'minimal', 'headers', 'body'],
    SoupMemoryUse: ['static', 'take', 'copy', 'temporary'],
    SoupMessageHeadersType: ['request', 'response', 'multipart'],
    SoupMessagePriority: ['very-low', 'low', 'normal', 'high', 'very-high'],
    SoupSameSitePolicy: ['none', 'lax', 'strict'],
    SoupSocketIOStatus: ['ok', 'would-block', 'eof', 'error'],
    SoupStatus: ['none', 'cancelled', 'cant-resolve', 'cant-resolve-proxy', 'cant-connect', 'cant-connect-proxy', 'ssl-failed', 'io-error', 'malformed', 'try-again', 'too-many-redirects', 'tls-failed', 'continue', 'switching-protocols', 'processing', 'ok', 'created', 'accepted', 'non-authoritative', 'no-content', 'reset-content', 'partial-content', 'multi-status', 'multiple-choices', 'moved-permanently', 'found', 'moved-temporarily', 'see-other', 'not-modified', 'use-proxy', 'not-appearing-in-this-protocol', 'temporary-redirect', 'permanent-redirect', 'bad-request', 'unauthorized', 'payment-required', 'forbidden', 'not-found', 'method-not-allowed', 'not-acceptable', 'proxy-authentication-required', 'proxy-unauthorized', 'request-timeout', 'conflict', 'gone', 'length-required', 'precondition-failed', 'request-entity-too-large', 'request-uri-too-long', 'unsupported-media-type', 'requested-range-not-satisfiable', 'invalid-range', 'expectation-failed', 'unprocessable-entity', 'locked', 'failed-dependency', 'internal-server-error', 'not-implemented', 'bad-gateway', 'service-unavailable', 'gateway-timeout', 'http-version-not-supported', 'insufficient-storage', 'not-extended'],
    SoupWebsocketCloseCode: ['normal', 'going-away', 'protocol-error', 'unsupported-data', 'no-status', 'abnormal', 'bad-data', 'policy-violation', 'too-big', 'no-extension', 'server-error', 'tls-handshake'],
    SoupWebsocketConnectionType: ['unknown', 'client', 'server'],
    SoupWebsocketDataType: ['text', 'binary'],
    SoupWebsocketError: ['failed', 'not-websocket', 'bad-handshake', 'bad-origin'],
    SoupWebsocketState: ['open', 'closing', 'closed'],
    SoupXMLRPCFault: ['parse-error-not-well-formed', 'parse-error-unsupported-encoding', 'parse-error-invalid-character-for-encoding', 'server-error-invalid-xml-rpc', 'server-error-requested-method-not-found', 'server-error-invalid-method-parameters', 'server-error-internal-xml-rpc-error', 'application-error', 'system-error', 'transport-error'],
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
    'SoupAddressFamily.invalid': -1,
    'SoupAddressFamily.ipv4': 2,
    'SoupAddressFamily.ipv6': 10,
    'SoupCacheResponse.fresh': 0,
    'SoupCacheResponse.needs-validation': 1,
    'SoupCacheResponse.stale': 2,
    'SoupCacheType.shared': 1,
    'SoupCacheType.single-user': 0,
    'SoupConnectionState.connecting': 1,
    'SoupConnectionState.disconnected': 5,
    'SoupConnectionState.idle': 2,
    'SoupConnectionState.in-use': 3,
    'SoupConnectionState.new': 0,
    'SoupConnectionState.remote-disconnected': 4,
    'SoupCookieJarAcceptPolicy.always': 0,
    'SoupCookieJarAcceptPolicy.grandfathered-third-party': 3,
    'SoupCookieJarAcceptPolicy.never': 1,
    'SoupCookieJarAcceptPolicy.no-third-party': 2,
    'SoupDateFormat.cookie': 2,
    'SoupDateFormat.http': 1,
    'SoupDateFormat.iso8601': 5,
    'SoupDateFormat.iso8601-compact': 4,
    'SoupDateFormat.iso8601-full': 5,
    'SoupDateFormat.iso8601-xmlrpc': 6,
    'SoupDateFormat.rfc2822': 3,
    'SoupEncoding.byteranges': 5,
    'SoupEncoding.chunked': 4,
    'SoupEncoding.content-length': 2,
    'SoupEncoding.eof': 3,
    'SoupEncoding.none': 1,
    'SoupEncoding.unrecognized': 0,
    'SoupHTTPVersion.http-1-0': 0,
    'SoupHTTPVersion.http-1-1': 1,
    'SoupKnownStatusCode.accepted': 202,
    'SoupKnownStatusCode.bad-gateway': 502,
    'SoupKnownStatusCode.bad-request': 400,
    'SoupKnownStatusCode.cancelled': 1,
    'SoupKnownStatusCode.cant-connect': 4,
    'SoupKnownStatusCode.cant-connect-proxy': 5,
    'SoupKnownStatusCode.cant-resolve': 2,
    'SoupKnownStatusCode.cant-resolve-proxy': 3,
    'SoupKnownStatusCode.conflict': 409,
    'SoupKnownStatusCode.continue': 100,
    'SoupKnownStatusCode.created': 201,
    'SoupKnownStatusCode.expectation-failed': 417,
    'SoupKnownStatusCode.failed-dependency': 424,
    'SoupKnownStatusCode.forbidden': 403,
    'SoupKnownStatusCode.found': 302,
    'SoupKnownStatusCode.gateway-timeout': 504,
    'SoupKnownStatusCode.gone': 410,
    'SoupKnownStatusCode.http-version-not-supported': 505,
    'SoupKnownStatusCode.insufficient-storage': 507,
    'SoupKnownStatusCode.internal-server-error': 500,
    'SoupKnownStatusCode.invalid-range': 416,
    'SoupKnownStatusCode.io-error': 7,
    'SoupKnownStatusCode.length-required': 411,
    'SoupKnownStatusCode.locked': 423,
    'SoupKnownStatusCode.malformed': 8,
    'SoupKnownStatusCode.method-not-allowed': 405,
    'SoupKnownStatusCode.moved-permanently': 301,
    'SoupKnownStatusCode.moved-temporarily': 302,
    'SoupKnownStatusCode.multi-status': 207,
    'SoupKnownStatusCode.multiple-choices': 300,
    'SoupKnownStatusCode.no-content': 204,
    'SoupKnownStatusCode.non-authoritative': 203,
    'SoupKnownStatusCode.none': 0,
    'SoupKnownStatusCode.not-acceptable': 406,
    'SoupKnownStatusCode.not-appearing-in-this-protocol': 306,
    'SoupKnownStatusCode.not-extended': 510,
    'SoupKnownStatusCode.not-found': 404,
    'SoupKnownStatusCode.not-implemented': 501,
    'SoupKnownStatusCode.not-modified': 304,
    'SoupKnownStatusCode.ok': 200,
    'SoupKnownStatusCode.partial-content': 206,
    'SoupKnownStatusCode.payment-required': 402,
    'SoupKnownStatusCode.precondition-failed': 412,
    'SoupKnownStatusCode.processing': 102,
    'SoupKnownStatusCode.proxy-authentication-required': 407,
    'SoupKnownStatusCode.proxy-unauthorized': 407,
    'SoupKnownStatusCode.request-entity-too-large': 413,
    'SoupKnownStatusCode.request-timeout': 408,
    'SoupKnownStatusCode.request-uri-too-long': 414,
    'SoupKnownStatusCode.requested-range-not-satisfiable': 416,
    'SoupKnownStatusCode.reset-content': 205,
    'SoupKnownStatusCode.see-other': 303,
    'SoupKnownStatusCode.service-unavailable': 503,
    'SoupKnownStatusCode.ssl-failed': 6,
    'SoupKnownStatusCode.switching-protocols': 101,
    'SoupKnownStatusCode.temporary-redirect': 307,
    'SoupKnownStatusCode.tls-failed': 11,
    'SoupKnownStatusCode.too-many-redirects': 10,
    'SoupKnownStatusCode.try-again': 9,
    'SoupKnownStatusCode.unauthorized': 401,
    'SoupKnownStatusCode.unprocessable-entity': 422,
    'SoupKnownStatusCode.unsupported-media-type': 415,
    'SoupKnownStatusCode.use-proxy': 305,
    'SoupLoggerLogLevel.body': 3,
    'SoupLoggerLogLevel.headers': 2,
    'SoupLoggerLogLevel.minimal': 1,
    'SoupLoggerLogLevel.none': 0,
    'SoupMemoryUse.copy': 2,
    'SoupMemoryUse.static': 0,
    'SoupMemoryUse.take': 1,
    'SoupMemoryUse.temporary': 3,
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
    'SoupSocketIOStatus.eof': 2,
    'SoupSocketIOStatus.error': 3,
    'SoupSocketIOStatus.ok': 0,
    'SoupSocketIOStatus.would-block': 1,
    'SoupStatus.accepted': 202,
    'SoupStatus.bad-gateway': 502,
    'SoupStatus.bad-request': 400,
    'SoupStatus.cancelled': 1,
    'SoupStatus.cant-connect': 4,
    'SoupStatus.cant-connect-proxy': 5,
    'SoupStatus.cant-resolve': 2,
    'SoupStatus.cant-resolve-proxy': 3,
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
    'SoupStatus.io-error': 7,
    'SoupStatus.length-required': 411,
    'SoupStatus.locked': 423,
    'SoupStatus.malformed': 8,
    'SoupStatus.method-not-allowed': 405,
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
    'SoupStatus.ssl-failed': 6,
    'SoupStatus.switching-protocols': 101,
    'SoupStatus.temporary-redirect': 307,
    'SoupStatus.tls-failed': 11,
    'SoupStatus.too-many-redirects': 10,
    'SoupStatus.try-again': 9,
    'SoupStatus.unauthorized': 401,
    'SoupStatus.unprocessable-entity': 422,
    'SoupStatus.unsupported-media-type': 415,
    'SoupStatus.use-proxy': 305,
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
    'SoupWebsocketError.bad-handshake': 2,
    'SoupWebsocketError.bad-origin': 3,
    'SoupWebsocketError.failed': 0,
    'SoupWebsocketError.not-websocket': 1,
    'SoupWebsocketState.closed': 3,
    'SoupWebsocketState.closing': 2,
    'SoupWebsocketState.open': 1,
    'SoupXMLRPCFault.application-error': -32500,
    'SoupXMLRPCFault.parse-error-invalid-character-for-encoding': -32702,
    'SoupXMLRPCFault.parse-error-not-well-formed': -32700,
    'SoupXMLRPCFault.parse-error-unsupported-encoding': -32701,
    'SoupXMLRPCFault.server-error-internal-xml-rpc-error': -32603,
    'SoupXMLRPCFault.server-error-invalid-method-parameters': -32602,
    'SoupXMLRPCFault.server-error-invalid-xml-rpc': -32600,
    'SoupXMLRPCFault.server-error-requested-method-not-found': -32601,
    'SoupXMLRPCFault.system-error': -32400,
    'SoupXMLRPCFault.transport-error': -32300,
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
    'GTlsCertificateFlags.bad-identity': 2,
    'GTlsCertificateFlags.expired': 8,
    'GTlsCertificateFlags.generic-error': 64,
    'GTlsCertificateFlags.insecure': 32,
    'GTlsCertificateFlags.no-flags': 0,
    'GTlsCertificateFlags.not-activated': 4,
    'GTlsCertificateFlags.revoked': 16,
    'GTlsCertificateFlags.unknown-ca': 1,
    'GTlsCertificateFlags.validate-all': 127,
    'SoupCacheability.cacheable': 1,
    'SoupCacheability.invalidates': 4,
    'SoupCacheability.uncacheable': 2,
    'SoupCacheability.validates': 8,
    'SoupExpectation.continue': 2,
    'SoupExpectation.unrecognized': 1,
    'SoupMessageFlags.can-rebuild': 4,
    'SoupMessageFlags.certificate-trusted': 32,
    'SoupMessageFlags.content-decoded': 16,
    'SoupMessageFlags.do-not-use-auth-cache': 512,
    'SoupMessageFlags.idempotent': 128,
    'SoupMessageFlags.ignore-connection-limits': 256,
    'SoupMessageFlags.new-connection': 64,
    'SoupMessageFlags.no-redirect': 2,
    'SoupMessageFlags.overwrite-chunks': 8,
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
    'SoupAddress.family': 'SoupAddressFamily',
    'SoupCache.cache-type': 'SoupCacheType',
    'SoupCookieJar.accept-policy': 'SoupCookieJarAcceptPolicy',
    'SoupLogger.level': 'SoupLoggerLogLevel',
    'SoupMessage.flags': 'SoupMessageFlags',
    'SoupMessage.http-version': 'SoupHTTPVersion',
    'SoupMessage.priority': 'SoupMessagePriority',
    'SoupMessage.tls-errors': 'GTlsCertificateFlags',
    'SoupWebsocketConnection.connection-type': 'SoupWebsocketConnectionType',
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
    'SoupCookieJar.accept-policy': '2.30',
    'SoupLogger.level': '2.56',
    'SoupLogger.max-body-size': '2.56',
    'SoupMessage.first-party': '2.30',
    'SoupMessage.is-top-level-navigation': '2.70',
    'SoupMessage.tls-certificate': '2.34',
    'SoupMessage.tls-errors': '2.34',
    'SoupMessage::content-sniffed': '2.28',
    'SoupMessage::network-event': '2.38',
    'SoupMessage::starting': '2.50',
    'SoupMessage::wrote-body-data': '2.24',
    'SoupRequest': '2.42',
    'SoupRequest.session': '2.42',
    'SoupRequest.uri': '2.42',
    'SoupServer.http-aliases': '2.44',
    'SoupServer.https-aliases': '2.44',
    'SoupServer.tls-certificate': '2.38',
    'SoupSession.accept-language': '2.30',
    'SoupSession.accept-language-auto': '2.30',
    'SoupSession.http-aliases': '2.38',
    'SoupSession.https-aliases': '2.38',
    'SoupSession.idle-timeout': '2.24',
    'SoupSession.local-address': '2.42',
    'SoupSession.proxy-resolver': '2.42',
    'SoupSession.ssl-strict': '2.30',
    'SoupSession.ssl-use-system-ca-file': '2.38',
    'SoupSession.tls-database': '2.38',
    'SoupSession.tls-interaction': '2.48',
    'SoupSession.use-thread-context': '2.38',
    'SoupSession::connection-created': '2.30',
    'SoupSession::request-queued': '2.24',
    'SoupSession::request-unqueued': '2.24',
    'SoupSession::tunneling': '2.30',
    'SoupSessionFeature': '2.24',
    'SoupSocket.use-thread-context': '2.38',
    'SoupSocket::event': '2.38',
    'SoupWebsocketConnection': '2.50',
    'SoupWebsocketConnection.connection-type': '2.50',
    'SoupWebsocketConnection.extensions': '2.68',
    'SoupWebsocketConnection.io-stream': '2.50',
    'SoupWebsocketConnection.keepalive-interval': '2.58',
    'SoupWebsocketConnection.max-incoming-payload-size': '2.56',
    'SoupWebsocketConnection.origin': '2.50',
    'SoupWebsocketConnection.protocol': '2.50',
    'SoupWebsocketConnection.uri': '2.50',
    'SoupWebsocketConnection::closed': '2.50',
    'SoupWebsocketConnection::closing': '2.50',
    'SoupWebsocketConnection::error': '2.50',
    'SoupWebsocketConnection::message': '2.50',
    'SoupWebsocketConnection::pong': '2.60',
};
