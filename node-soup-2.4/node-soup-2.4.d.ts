
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-soup-2.4-import.d.ts';
    
/**
 * Soup-2.4
 */

import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

export namespace Soup {

/**
 * The supported address families.
 */
enum AddressFamily {
    /**
     * an invalid %SoupAddress
     */
    INVALID,
    /**
     * an IPv4 address
     */
    IPV4,
    /**
     * an IPv6 address
     */
    IPV6,
}
enum CacheResponse {
    FRESH,
    NEEDS_VALIDATION,
    STALE,
}
/**
 * The type of cache; this affects what kinds of responses will be
 * saved.
 */
enum CacheType {
    /**
     * a single-user cache
     */
    SINGLE_USER,
    /**
     * a shared cache
     */
    SHARED,
}
enum ConnectionState {
    NEW,
    CONNECTING,
    IDLE,
    IN_USE,
    REMOTE_DISCONNECTED,
    DISCONNECTED,
}
/**
 * The policy for accepting or rejecting cookies returned in
 * responses.
 */
enum CookieJarAcceptPolicy {
    /**
     * accept all cookies unconditionally.
     */
    ALWAYS,
    /**
     * reject all cookies unconditionally.
     */
    NEVER,
    /**
     * accept all cookies set by
     * the main document loaded in the application using libsoup. An
     * example of the most common case, web browsers, would be: If
     * http://www.example.com is the page loaded, accept all cookies set
     * by example.com, but if a resource from http://www.third-party.com
     * is loaded from that page reject any cookie that it could try to
     * set. For libsoup to be able to tell apart first party cookies from
     * the rest, the application must call soup_message_set_first_party()
     * on each outgoing #SoupMessage, setting the #SoupURI of the main
     * document. If no first party is set in a message when this policy is
     * in effect, cookies will be assumed to be third party by default.
     */
    NO_THIRD_PARTY,
    /**
     * accept all cookies
     * set by the main document loaded in the application using libsoup, and
     * from domains that have previously set at least one cookie when loaded
     * as the main document. An example of the most common case, web browsers,
     * would be: if http://www.example.com is the page loaded, accept all
     * cookies set by example.com, but if a resource from http://www.third-party.com
     * is loaded from that page, reject any cookie that it could try to
     * set unless it already has a cookie in the cookie jar. For libsoup to
     * be able to tell apart first party cookies from the rest, the
     * application must call soup_message_set_first_party() on each outgoing
     * #SoupMessage, setting the #SoupURI of the main document. If no first
     * party is set in a message when this policy is in effect, cookies will
     * be assumed to be third party by default. Since 2.72.
     */
    GRANDFATHERED_THIRD_PARTY,
}
/**
 * Date formats that soup_date_to_string() can use.
 * 
 * `SOUP_DATE_HTTP` and `SOUP_DATE_COOKIE` always coerce the time to
 * UTC. `SOUP_DATE_ISO8`601_XMLRPC uses the time as given, ignoring the
 * offset completely. `SOUP_DATE_RFC2`822 and the other ISO 8601
 * variants use the local time, appending the offset information if
 * available.
 * 
 * This enum may be extended with more values in future releases.
 */
enum DateFormat {
    /**
     * RFC 1123 format, used by the HTTP "Date" header. Eg
     * "Sun, 06 Nov 1994 08:49:37 GMT"
     */
    HTTP,
    /**
     * The format for the "Expires" timestamp in the
     * Netscape cookie specification. Eg, "Sun, 06-Nov-1994 08:49:37 GMT".
     */
    COOKIE,
    /**
     * RFC 2822 format, eg "Sun, 6 Nov 1994 09:49:37 -0100"
     */
    RFC2822,
    /**
     * ISO 8601 date/time with no optional
     * punctuation. Eg, "19941106T094937-0100".
     */
    ISO8601_COMPACT,
    /**
     * ISO 8601 date/time with all optional
     * punctuation. Eg, "1994-11-06T09:49:37-01:00".
     */
    ISO8601_FULL,
    /**
     * An alias for `SOUP_DATE_ISO8`601_FULL.
     */
    ISO8601,
    /**
     * ISO 8601 date/time as used by XML-RPC.
     * Eg, "19941106T09:49:37".
     */
    ISO8601_XMLRPC,
}
/**
 * How a message body is encoded for transport
 */
enum Encoding {
    /**
     * unknown / error
     */
    UNRECOGNIZED,
    /**
     * no body is present (which is not the same as a
     * 0-length body, and only occurs in certain places)
     */
    NONE,
    /**
     * Content-Length encoding
     */
    CONTENT_LENGTH,
    /**
     * Response body ends when the connection is closed
     */
    EOF,
    /**
     * chunked encoding (currently only supported
     * for response)
     */
    CHUNKED,
    /**
     * multipart/byteranges (Reserved for future
     * use: NOT CURRENTLY IMPLEMENTED)
     */
    BYTERANGES,
}
/**
 * Indicates the HTTP protocol version being used.
 */
enum HTTPVersion {
    /**
     * HTTP 1.0 (RFC 1945)
     */
    HTTP_1_0,
    /**
     * HTTP 1.1 (RFC 2616)
     */
    HTTP_1_1,
}
enum KnownStatusCode {
    NONE,
    CANCELLED,
    CANT_RESOLVE,
    CANT_RESOLVE_PROXY,
    CANT_CONNECT,
    CANT_CONNECT_PROXY,
    SSL_FAILED,
    IO_ERROR,
    MALFORMED,
    TRY_AGAIN,
    TOO_MANY_REDIRECTS,
    TLS_FAILED,
    CONTINUE,
    SWITCHING_PROTOCOLS,
    PROCESSING,
    OK,
    CREATED,
    ACCEPTED,
    NON_AUTHORITATIVE,
    NO_CONTENT,
    RESET_CONTENT,
    PARTIAL_CONTENT,
    MULTI_STATUS,
    MULTIPLE_CHOICES,
    MOVED_PERMANENTLY,
    FOUND,
    MOVED_TEMPORARILY,
    SEE_OTHER,
    NOT_MODIFIED,
    USE_PROXY,
    NOT_APPEARING_IN_THIS_PROTOCOL,
    TEMPORARY_REDIRECT,
    BAD_REQUEST,
    UNAUTHORIZED,
    PAYMENT_REQUIRED,
    FORBIDDEN,
    NOT_FOUND,
    METHOD_NOT_ALLOWED,
    NOT_ACCEPTABLE,
    PROXY_AUTHENTICATION_REQUIRED,
    PROXY_UNAUTHORIZED,
    REQUEST_TIMEOUT,
    CONFLICT,
    GONE,
    LENGTH_REQUIRED,
    PRECONDITION_FAILED,
    REQUEST_ENTITY_TOO_LARGE,
    REQUEST_URI_TOO_LONG,
    UNSUPPORTED_MEDIA_TYPE,
    REQUESTED_RANGE_NOT_SATISFIABLE,
    INVALID_RANGE,
    EXPECTATION_FAILED,
    UNPROCESSABLE_ENTITY,
    LOCKED,
    FAILED_DEPENDENCY,
    INTERNAL_SERVER_ERROR,
    NOT_IMPLEMENTED,
    BAD_GATEWAY,
    SERVICE_UNAVAILABLE,
    GATEWAY_TIMEOUT,
    HTTP_VERSION_NOT_SUPPORTED,
    INSUFFICIENT_STORAGE,
    NOT_EXTENDED,
}
/**
 * Describes the level of logging output to provide.
 */
enum LoggerLogLevel {
    /**
     * No logging
     */
    NONE,
    /**
     * Log the Request-Line or Status-Line and
     * the Soup-Debug pseudo-headers
     */
    MINIMAL,
    /**
     * Log the full request/response headers
     */
    HEADERS,
    /**
     * Log the full headers and request/response
     * bodies.
     */
    BODY,
}
/**
 * Describes how #SoupBuffer should use the data passed in by the
 * caller.
 * 
 * See also soup_buffer_new_with_owner(), which allows to you create a
 * buffer containing data which is owned by another object.
 */
enum MemoryUse {
    /**
     * The memory is statically allocated and
     * constant; libsoup can use the passed-in buffer directly and not
     * need to worry about it being modified or freed.
     */
    STATIC,
    /**
     * The caller has allocated the memory for the
     * #SoupBuffer's use; libsoup will assume ownership of it and free it
     * (with g_free()) when it is done with it.
     */
    TAKE,
    /**
     * The passed-in data belongs to the caller; the
     * #SoupBuffer will copy it into new memory, leaving the caller free
     * to reuse the original memory.
     */
    COPY,
    /**
     * The passed-in data belongs to the caller,
     * but will remain valid for the lifetime of the #SoupBuffer. The
     * difference between this and `SOUP_MEMORY_STATIC` is that if you copy
     * a `SOUP_MEMORY_TEMPORARY` buffer, it will make a copy of the memory
     * as well, rather than reusing the original memory.
     */
    TEMPORARY,
}
/**
 * Value passed to soup_message_headers_new() to set certain default
 * behaviors.
 */
enum MessageHeadersType {
    /**
     * request headers
     */
    REQUEST,
    /**
     * response headers
     */
    RESPONSE,
    /**
     * multipart body part headers
     */
    MULTIPART,
}
/**
 * Priorities that can be set on a #SoupMessage to instruct the
 * message queue to process it before any other message with lower
 * priority.
 */
enum MessagePriority {
    /**
     * The lowest priority, the messages
     *   with this priority will be the last ones to be attended.
     */
    VERY_LOW,
    /**
     * Use this for low priority messages, a
     *   #SoupMessage with the default priority will be processed first.
     */
    LOW,
    /**
     * The default priotity, this is the
     *   priority assigned to the #SoupMessage by default.
     */
    NORMAL,
    /**
     * High priority, a #SoupMessage with
     *   this priority will be processed before the ones with the default
     *   priority.
     */
    HIGH,
    /**
     * The highest priority, use this
     *   for very urgent #SoupMessage as they will be the first ones to be
     *   attended.
     */
    VERY_HIGH,
}
/**
 * A #SoupRequest error.
 */
enum RequestError {
    /**
     * the URI could not be parsed
     */
    BAD_URI,
    /**
     * the URI scheme is not
     *   supported by this #SoupSession
     */
    UNSUPPORTED_URI_SCHEME,
    /**
     * the server's response could not
     *   be parsed
     */
    PARSING,
    /**
     * the server's response was in an
     *   unsupported format
     */
    ENCODING,
}
enum RequesterError {
    BAD_URI,
    UNSUPPORTED_URI_SCHEME,
}
enum SameSitePolicy {
    /**
     * The cookie is exposed with both cross-site and same-site requests
     */
    NONE,
    /**
     * The cookie is withheld on cross-site requests but exposed on cross-site navigations
     */
    LAX,
    /**
     * The cookie is only exposed for same-site requests
     */
    STRICT,
}
/**
 * Return value from the #SoupSocket IO methods.
 */
enum SocketIOStatus {
    /**
     * Success
     */
    OK,
    /**
     * Cannot read/write any more at this time
     */
    WOULD_BLOCK,
    /**
     * End of file
     */
    EOF,
    /**
     * Other error
     */
    ERROR,
}
/**
 * These represent the known HTTP status code values, plus various
 * network and internal errors.
 * 
 * Note that no libsoup functions take or return this type directly;
 * any function that works with status codes will accept unrecognized
 * status codes as well.
 * 
 * Prior to 2.44 this type was called
 * <literal>SoupKnownStatusCode</literal>, but the individual values
 * have always had the names they have now.
 */
enum Status {
    /**
     * No status available. (Eg, the message has not
     * been sent yet)
     */
    NONE,
    /**
     * Message was cancelled locally
     */
    CANCELLED,
    /**
     * Unable to resolve destination host name
     */
    CANT_RESOLVE,
    /**
     * Unable to resolve proxy host name
     */
    CANT_RESOLVE_PROXY,
    /**
     * Unable to connect to remote host
     */
    CANT_CONNECT,
    /**
     * Unable to connect to proxy
     */
    CANT_CONNECT_PROXY,
    /**
     * SSL/TLS negotiation failed
     */
    SSL_FAILED,
    /**
     * A network error occurred, or the other end
     * closed the connection unexpectedly
     */
    IO_ERROR,
    /**
     * Malformed data (usually a programmer error)
     */
    MALFORMED,
    /**
     * Used internally
     */
    TRY_AGAIN,
    /**
     * There were too many redirections
     */
    TOO_MANY_REDIRECTS,
    /**
     * Used internally
     */
    TLS_FAILED,
    /**
     * 100 Continue (HTTP)
     */
    CONTINUE,
    /**
     * 101 Switching Protocols (HTTP)
     */
    SWITCHING_PROTOCOLS,
    /**
     * 102 Processing (WebDAV)
     */
    PROCESSING,
    /**
     * 200 Success (HTTP). Also used by many lower-level
     * soup routines to indicate success.
     */
    OK,
    /**
     * 201 Created (HTTP)
     */
    CREATED,
    /**
     * 202 Accepted (HTTP)
     */
    ACCEPTED,
    /**
     * 203 Non-Authoritative Information
     * (HTTP)
     */
    NON_AUTHORITATIVE,
    /**
     * 204 No Content (HTTP)
     */
    NO_CONTENT,
    /**
     * 205 Reset Content (HTTP)
     */
    RESET_CONTENT,
    /**
     * 206 Partial Content (HTTP)
     */
    PARTIAL_CONTENT,
    /**
     * 207 Multi-Status (WebDAV)
     */
    MULTI_STATUS,
    /**
     * 300 Multiple Choices (HTTP)
     */
    MULTIPLE_CHOICES,
    /**
     * 301 Moved Permanently (HTTP)
     */
    MOVED_PERMANENTLY,
    /**
     * 302 Found (HTTP)
     */
    FOUND,
    /**
     * 302 Moved Temporarily (old name,
     * RFC 2068)
     */
    MOVED_TEMPORARILY,
    /**
     * 303 See Other (HTTP)
     */
    SEE_OTHER,
    /**
     * 304 Not Modified (HTTP)
     */
    NOT_MODIFIED,
    /**
     * 305 Use Proxy (HTTP)
     */
    USE_PROXY,
    /**
     * 306 [Unused] (HTTP)
     */
    NOT_APPEARING_IN_THIS_PROTOCOL,
    /**
     * 307 Temporary Redirect (HTTP)
     */
    TEMPORARY_REDIRECT,
    PERMANENT_REDIRECT,
    /**
     * 400 Bad Request (HTTP)
     */
    BAD_REQUEST,
    /**
     * 401 Unauthorized (HTTP)
     */
    UNAUTHORIZED,
    /**
     * 402 Payment Required (HTTP)
     */
    PAYMENT_REQUIRED,
    /**
     * 403 Forbidden (HTTP)
     */
    FORBIDDEN,
    /**
     * 404 Not Found (HTTP)
     */
    NOT_FOUND,
    /**
     * 405 Method Not Allowed (HTTP)
     */
    METHOD_NOT_ALLOWED,
    /**
     * 406 Not Acceptable (HTTP)
     */
    NOT_ACCEPTABLE,
    /**
     * 407 Proxy Authentication
     * Required (HTTP)
     */
    PROXY_AUTHENTICATION_REQUIRED,
    /**
     * shorter alias for
     * %SOUP_STATUS_PROXY_AUTHENTICATION_REQUIRED
     */
    PROXY_UNAUTHORIZED,
    /**
     * 408 Request Timeout (HTTP)
     */
    REQUEST_TIMEOUT,
    /**
     * 409 Conflict (HTTP)
     */
    CONFLICT,
    /**
     * 410 Gone (HTTP)
     */
    GONE,
    /**
     * 411 Length Required (HTTP)
     */
    LENGTH_REQUIRED,
    /**
     * 412 Precondition Failed (HTTP)
     */
    PRECONDITION_FAILED,
    /**
     * 413 Request Entity Too Large
     * (HTTP)
     */
    REQUEST_ENTITY_TOO_LARGE,
    /**
     * 414 Request-URI Too Long (HTTP)
     */
    REQUEST_URI_TOO_LONG,
    /**
     * 415 Unsupported Media Type
     * (HTTP)
     */
    UNSUPPORTED_MEDIA_TYPE,
    /**
     * 416 Requested Range
     * Not Satisfiable (HTTP)
     */
    REQUESTED_RANGE_NOT_SATISFIABLE,
    /**
     * shorter alias for
     * %SOUP_STATUS_REQUESTED_RANGE_NOT_SATISFIABLE
     */
    INVALID_RANGE,
    /**
     * 417 Expectation Failed (HTTP)
     */
    EXPECTATION_FAILED,
    /**
     * 422 Unprocessable Entity
     * (WebDAV)
     */
    UNPROCESSABLE_ENTITY,
    /**
     * 423 Locked (WebDAV)
     */
    LOCKED,
    /**
     * 424 Failed Dependency (WebDAV)
     */
    FAILED_DEPENDENCY,
    /**
     * 500 Internal Server Error
     * (HTTP)
     */
    INTERNAL_SERVER_ERROR,
    /**
     * 501 Not Implemented (HTTP)
     */
    NOT_IMPLEMENTED,
    /**
     * 502 Bad Gateway (HTTP)
     */
    BAD_GATEWAY,
    /**
     * 503 Service Unavailable (HTTP)
     */
    SERVICE_UNAVAILABLE,
    /**
     * 504 Gateway Timeout (HTTP)
     */
    GATEWAY_TIMEOUT,
    /**
     * 505 HTTP Version Not
     * Supported (HTTP)
     */
    HTTP_VERSION_NOT_SUPPORTED,
    /**
     * 507 Insufficient Storage
     * (WebDAV)
     */
    INSUFFICIENT_STORAGE,
    /**
     * 510 Not Extended (RFC 2774)
     */
    NOT_EXTENDED,
}
/**
 * Error codes for %SOUP_TLD_ERROR.
 */
enum TLDError {
    /**
     * A hostname was syntactically
     *   invalid.
     */
    INVALID_HOSTNAME,
    /**
     * The passed-in "hostname" was
     *   actually an IP address (and thus has no base domain or
     *   public suffix).
     */
    IS_IP_ADDRESS,
    /**
     * The passed-in hostname
     *   did not have enough components. Eg, calling
     *   soup_tld_get_base_domain() on <literal>"co.uk"</literal>.
     */
    NOT_ENOUGH_DOMAINS,
    /**
     * The passed-in hostname has
     *   no recognized public suffix.
     */
    NO_BASE_DOMAIN,
    NO_PSL_DATA,
}
/**
 * Pre-defined close codes that can be passed to
 * soup_websocket_connection_close() or received from
 * soup_websocket_connection_get_close_code(). (However, other codes
 * are also allowed.)
 */
enum WebsocketCloseCode {
    /**
     * a normal, non-error close
     */
    NORMAL,
    /**
     * the client/server is going away
     */
    GOING_AWAY,
    /**
     * a protocol error occurred
     */
    PROTOCOL_ERROR,
    /**
     * the endpoint received data
     *   of a type that it does not support.
     */
    UNSUPPORTED_DATA,
    /**
     * reserved value indicating that
     *   no close code was present; must not be sent.
     */
    NO_STATUS,
    /**
     * reserved value indicating that
     *   the connection was closed abnormally; must not be sent.
     */
    ABNORMAL,
    /**
     * the endpoint received data that
     *   was invalid (eg, non-UTF-8 data in a text message).
     */
    BAD_DATA,
    /**
     * generic error code
     *   indicating some sort of policy violation.
     */
    POLICY_VIOLATION,
    /**
     * the endpoint received a message
     *   that is too big to process.
     */
    TOO_BIG,
    /**
     * the client is closing the
     *   connection because the server failed to negotiate a required
     *   extension.
     */
    NO_EXTENSION,
    /**
     * the server is closing the
     *   connection because it was unable to fulfill the request.
     */
    SERVER_ERROR,
    /**
     * reserved value indicating that
     *   the TLS handshake failed; must not be sent.
     */
    TLS_HANDSHAKE,
}
/**
 * The type of a #SoupWebsocketConnection.
 */
enum WebsocketConnectionType {
    /**
     * unknown/invalid connection
     */
    UNKNOWN,
    /**
     * a client-side connection
     */
    CLIENT,
    /**
     * a server-side connection
     */
    SERVER,
}
/**
 * The type of data contained in a #SoupWebsocketConnection::message
 * signal.
 */
enum WebsocketDataType {
    /**
     * UTF-8 text
     */
    TEXT,
    /**
     * binary data
     */
    BINARY,
}
/**
 * WebSocket-related errors.
 */
enum WebsocketError {
    /**
     * a generic error
     */
    FAILED,
    /**
     * attempted to handshake with a
     *   server that does not appear to understand WebSockets.
     */
    NOT_WEBSOCKET,
    /**
     * the WebSocket handshake failed
     *   because some detail was invalid (eg, incorrect accept key).
     */
    BAD_HANDSHAKE,
    /**
     * the WebSocket handshake failed
     *   because the "Origin" header was not an allowed value.
     */
    BAD_ORIGIN,
}
/**
 * The state of the WebSocket connection.
 */
enum WebsocketState {
    /**
     * the connection is ready to send messages
     */
    OPEN,
    /**
     * the connection is in the process of
     *   closing down; messages may be received, but not sent
     */
    CLOSING,
    /**
     * the connection is completely closed down
     */
    CLOSED,
}
enum XMLRPCError {
    ARGUMENTS,
    RETVAL,
}
/**
 * Pre-defined XML-RPC fault codes from <ulink
 * url="http://xmlrpc-epi.sourceforge.net/specs/rfc.fault_codes.php">http://xmlrpc-epi.sourceforge.net/specs/rfc.fault_codes.php</ulink>.
 * These are an extension, not part of the XML-RPC spec; you can't
 * assume servers will use them.
 */
enum XMLRPCFault {
    /**
     * request was not
     *   well-formed
     */
    PARSE_ERROR_NOT_WELL_FORMED,
    /**
     * request was in
     *   an unsupported encoding
     */
    PARSE_ERROR_UNSUPPORTED_ENCODING,
    /**
     * request contained an invalid character
     */
    PARSE_ERROR_INVALID_CHARACTER_FOR_ENCODING,
    /**
     * request was not
     *   valid XML-RPC
     */
    SERVER_ERROR_INVALID_XML_RPC,
    /**
     * method
     *   not found
     */
    SERVER_ERROR_REQUESTED_METHOD_NOT_FOUND,
    /**
     * invalid
     *   parameters
     */
    SERVER_ERROR_INVALID_METHOD_PARAMETERS,
    /**
     * internal
     *   error
     */
    SERVER_ERROR_INTERNAL_XML_RPC_ERROR,
    /**
     * start of reserved range for
     *   application error codes
     */
    APPLICATION_ERROR,
    /**
     * start of reserved range for
     *   system error codes
     */
    SYSTEM_ERROR,
    /**
     * start of reserved range for
     *   transport error codes
     */
    TRANSPORT_ERROR,
}
enum Cacheability {
    CACHEABLE,
    UNCACHEABLE,
    INVALIDATES,
    VALIDATES,
}
/**
 * Represents the parsed value of the "Expect" header.
 * @bitfield 
 */
enum Expectation {
    /**
     * any unrecognized expectation
     */
    UNRECOGNIZED,
    /**
     * "100-continue"
     */
    CONTINUE,
}
/**
 * Various flags that can be set on a #SoupMessage to alter its
 * behavior.
 * @bitfield 
 */
enum MessageFlags {
    /**
     * The session should not follow redirect
     *   (3xx) responses received by this message.
     */
    NO_REDIRECT,
    /**
     * The caller will rebuild the request
     *   body if the message is restarted; see
     *   soup_message_body_set_accumulate() for more details.
     */
    CAN_REBUILD,
    /**
     * Deprecated: equivalent to calling
     *   soup_message_body_set_accumulate() on the incoming message body
     *   (ie, #SoupMessage:response_body for a client-side request),
     *   passing %FALSE.
     */
    OVERWRITE_CHUNKS,
    /**
     * Set by #SoupContentDecoder to
     *   indicate that it has removed the Content-Encoding on a message (and
     *   so headers such as Content-Length may no longer accurately describe
     *   the body).
     */
    CONTENT_DECODED,
    /**
     * if set after an https response
     *   has been received, indicates that the server's SSL certificate is
     *   trusted according to the session's CA.
     */
    CERTIFICATE_TRUSTED,
    /**
     * Requests that the message should be
     *   sent on a newly-created connection, not reusing an existing
     *   persistent connection. Note that messages with non-idempotent
     *   #SoupMessage:method<!-- -->s behave this way by default, unless
     *   #SOUP_MESSAGE_IDEMPOTENT is set.
     */
    NEW_CONNECTION,
    /**
     * The message is considered idempotent,
     *   regardless its #SoupMessage:method, and allows reuse of existing
     *   idle connections, instead of always requiring a new one, unless
     *   #SOUP_MESSAGE_NEW_CONNECTION is set.
     */
    IDEMPOTENT,
    /**
     * Request that a new connection is
     *   created for the message if there aren't idle connections available
     *   and it's not possible to create new connections due to any of the
     *   connection limits has been reached. If a dedicated connection is
     *   eventually created for this message, it will be dropped when the
     *   message finishes. Since 2.50
     */
    IGNORE_CONNECTION_LIMITS,
    /**
     * The #SoupAuthManager should not use
     *   the credentials cache for this message, neither to use cached credentials
     *   to automatically authenticate this message nor to cache the credentials
     *   after the message is successfully authenticated. This applies to both server
     *   and proxy authentication. Note that #SoupSession::authenticate signal will
     *   be emitted, if you want to disable authentication for a message use
     *   soup_message_disable_feature() passing #SOUP_TYPE_AUTH_MANAGER instead. Since 2.58
     */
    DO_NOT_USE_AUTH_CACHE,
}
/**
 * Options to pass to soup_server_listen(), etc.
 * 
 * %SOUP_SERVER_LISTEN_IPV4_ONLY and %SOUP_SERVER_LISTEN_IPV6_ONLY
 * only make sense with soup_server_listen_all() and
 * soup_server_listen_local(), not plain soup_server_listen() (which
 * simply listens on whatever kind of socket you give it). And you
 * cannot specify both of them in a single call.
 * @bitfield 
 */
enum ServerListenOptions {
    /**
     * Listen for https connections rather
     *   than plain http.
     */
    HTTPS,
    /**
     * Only listen on IPv4 interfaces.
     */
    IPV4_ONLY,
    /**
     * Only listen on IPv6 interfaces.
     */
    IPV6_ONLY,
}
/**
 * This can be passed to any #SoupAddress method that expects a port,
 * to indicate that you don't care what port is used.
 */
const ADDRESS_ANY_PORT: number
/**
 * Alias for the #SoupAddress:family property. (The
 * #SoupAddressFamily for this address.)
 */
const ADDRESS_FAMILY: string | null
/**
 * Alias for the #SoupAddress:name property. (The hostname for
 * this address.)
 */
const ADDRESS_NAME: string | null
/**
 * An alias for the #SoupAddress:physical property. (The
 * stringified IP address for this address.)
 */
const ADDRESS_PHYSICAL: string | null
/**
 * An alias for the #SoupAddress:port property. (The port for
 * this address.)
 */
const ADDRESS_PORT: string | null
/**
 * Alias for the #SoupAddress:protocol property. (The URI scheme
 * used with this address.)
 */
const ADDRESS_PROTOCOL: string | null
/**
 * An alias for the #SoupAddress:sockaddr property. (A pointer
 * to the struct sockaddr for this address.)
 */
const ADDRESS_SOCKADDR: string | null
/**
 * Alias for the #SoupAuthDomain:add-path property. (Shortcut
 * for calling soup_auth_domain_add_path().)
 */
const AUTH_DOMAIN_ADD_PATH: string | null
/**
 * Alias for the #SoupAuthDomainBasic:auth-callback property.
 * (The #SoupAuthDomainBasicAuthCallback.)
 */
const AUTH_DOMAIN_BASIC_AUTH_CALLBACK: string | null
/**
 * Alias for the #SoupAuthDomainBasic:auth-data property.
 * (The data to pass to the #SoupAuthDomainBasicAuthCallback.)
 */
const AUTH_DOMAIN_BASIC_AUTH_DATA: string | null
/**
 * Alias for the #SoupAuthDomainDigest:auth-callback property.
 * (The #SoupAuthDomainDigestAuthCallback.)
 */
const AUTH_DOMAIN_DIGEST_AUTH_CALLBACK: string | null
/**
 * Alias for the #SoupAuthDomainDigest:auth-callback property.
 * (The #SoupAuthDomainDigestAuthCallback.)
 */
const AUTH_DOMAIN_DIGEST_AUTH_DATA: string | null
/**
 * Alias for the #SoupAuthDomain:filter property. (The
 * #SoupAuthDomainFilter for the domain.)
 */
const AUTH_DOMAIN_FILTER: string | null
/**
 * Alias for the #SoupAuthDomain:filter-data property. (Data
 * to pass to the #SoupAuthDomainFilter.)
 */
const AUTH_DOMAIN_FILTER_DATA: string | null
/**
 * Alias for the #SoupAuthDomain:generic-auth-callback property.
 * (The #SoupAuthDomainGenericAuthCallback.)
 */
const AUTH_DOMAIN_GENERIC_AUTH_CALLBACK: string | null
/**
 * Alias for the #SoupAuthDomain:generic-auth-data property.
 * (The data to pass to the #SoupAuthDomainGenericAuthCallback.)
 */
const AUTH_DOMAIN_GENERIC_AUTH_DATA: string | null
/**
 * Alias for the #SoupAuthDomain:proxy property. (Whether or
 * not this is a proxy auth domain.)
 */
const AUTH_DOMAIN_PROXY: string | null
/**
 * Alias for the #SoupAuthDomain:realm property. (The realm of
 * this auth domain.)
 */
const AUTH_DOMAIN_REALM: string | null
/**
 * Alias for the #SoupAuthDomain:remove-path property.
 * (Shortcut for calling soup_auth_domain_remove_path().)
 */
const AUTH_DOMAIN_REMOVE_PATH: string | null
/**
 * An alias for the #SoupAuth:host property. (The
 * host being authenticated to.)
 */
const AUTH_HOST: string | null
/**
 * An alias for the #SoupAuth:is-authenticated property.
 * (Whether or not the auth has been authenticated.)
 */
const AUTH_IS_AUTHENTICATED: string | null
/**
 * An alias for the #SoupAuth:is-for-proxy property. (Whether
 * or not the auth is for a proxy server.)
 */
const AUTH_IS_FOR_PROXY: string | null
/**
 * An alias for the #SoupAuth:realm property. (The
 * authentication realm.)
 */
const AUTH_REALM: string | null
/**
 * An alias for the #SoupAuth:scheme-name property. (The
 * authentication scheme name.)
 */
const AUTH_SCHEME_NAME: string | null
const CHAR_HTTP_CTL: number
const CHAR_HTTP_SEPARATOR: number
const CHAR_URI_GEN_DELIMS: number
const CHAR_URI_PERCENT_ENCODED: number
const CHAR_URI_SUB_DELIMS: number
/**
 * Alias for the #SoupCookieJar:accept-policy property.
 */
const COOKIE_JAR_ACCEPT_POLICY: string | null
/**
 * Alias for the #SoupCookieJarDB:filename property. (The
 * cookie-storage filename.)
 */
const COOKIE_JAR_DB_FILENAME: string | null
/**
 * Alias for the #SoupCookieJar:read-only property. (Whether
 * or not the cookie jar is read-only.)
 */
const COOKIE_JAR_READ_ONLY: string | null
/**
 * Alias for the #SoupCookieJarText:filename property. (The
 * cookie-storage filename.)
 */
const COOKIE_JAR_TEXT_FILENAME: string | null
/**
 * A constant corresponding to 1 day, for use with soup_cookie_new()
 * and soup_cookie_set_max_age().
 */
const COOKIE_MAX_AGE_ONE_DAY: number
/**
 * A constant corresponding to 1 hour, for use with soup_cookie_new()
 * and soup_cookie_set_max_age().
 */
const COOKIE_MAX_AGE_ONE_HOUR: number
/**
 * A constant corresponding to 1 week, for use with soup_cookie_new()
 * and soup_cookie_set_max_age().
 */
const COOKIE_MAX_AGE_ONE_WEEK: number
/**
 * A constant corresponding to 1 year, for use with soup_cookie_new()
 * and soup_cookie_set_max_age().
 */
const COOKIE_MAX_AGE_ONE_YEAR: number
/**
 * A macro containing the value
 * <literal>"multipart/form-data"</literal>; the MIME type used for
 * posting form data that contains files to be uploaded.
 */
const FORM_MIME_TYPE_MULTIPART: string | null
/**
 * A macro containing the value
 * <literal>"application/x-www-form-urlencoded"</literal>; the default
 * MIME type for POSTing HTML form data.
 */
const FORM_MIME_TYPE_URLENCODED: string | null
const HSTS_ENFORCER_DB_FILENAME: string | null
const HSTS_POLICY_MAX_AGE_PAST: number
/**
 * Alias for the #SoupLogger:level property, qv.
 */
const LOGGER_LEVEL: string | null
/**
 * Alias for the #SoupLogger:max-body-size property, qv.
 */
const LOGGER_MAX_BODY_SIZE: string | null
/**
 * Like soup_get_major_version(), but from the headers used at
 * application compile time, rather than from the library linked
 * against at application run time.
 */
const MAJOR_VERSION: number
/**
 * Alias for the #SoupMessage:first-party property. (The
 * #SoupURI loaded in the application when the message was
 * queued.)
 */
const MESSAGE_FIRST_PARTY: string | null
/**
 * Alias for the #SoupMessage:flags property. (The message's
 * #SoupMessageFlags.)
 */
const MESSAGE_FLAGS: string | null
/**
 * Alias for the #SoupMessage:http-version property. (The
 * message's #SoupHTTPVersion.)
 */
const MESSAGE_HTTP_VERSION: string | null
const MESSAGE_IS_TOP_LEVEL_NAVIGATION: string | null
/**
 * Alias for the #SoupMessage:method property. (The message's
 * HTTP method.)
 */
const MESSAGE_METHOD: string | null
/**
 * Sets the priority of the #SoupMessage. See
 * soup_message_set_priority() for further details.
 */
const MESSAGE_PRIORITY: string | null
/**
 * Alias for the #SoupMessage:reason-phrase property. (The
 * message's HTTP response reason phrase.)
 */
const MESSAGE_REASON_PHRASE: string | null
/**
 * Alias for the #SoupMessage:request-body property. (The
 * message's HTTP request body.)
 */
const MESSAGE_REQUEST_BODY: string | null
/**
 * Alias for the #SoupMessage:request-body-data property. (The
 * message's HTTP request body, as a #GBytes.)
 */
const MESSAGE_REQUEST_BODY_DATA: string | null
/**
 * Alias for the #SoupMessage:request-headers property. (The
 * message's HTTP request headers.)
 */
const MESSAGE_REQUEST_HEADERS: string | null
/**
 * Alias for the #SoupMessage:response-body property. (The
 * message's HTTP response body.)
 */
const MESSAGE_RESPONSE_BODY: string | null
/**
 * Alias for the #SoupMessage:response-body-data property. (The
 * message's HTTP response body, as a #GBytes.)
 */
const MESSAGE_RESPONSE_BODY_DATA: string | null
/**
 * Alias for the #SoupMessage:response-headers property. (The
 * message's HTTP response headers.)
 */
const MESSAGE_RESPONSE_HEADERS: string | null
/**
 * Alias for the #SoupMessage:server-side property. (%TRUE if
 * the message was created by #SoupServer.)
 */
const MESSAGE_SERVER_SIDE: string | null
const MESSAGE_SITE_FOR_COOKIES: string | null
/**
 * Alias for the #SoupMessage:status-code property. (The
 * message's HTTP response status code.)
 */
const MESSAGE_STATUS_CODE: string | null
/**
 * Alias for the #SoupMessage:tls-certificate property. (The
 * TLS certificate associated with the message, if any.)
 */
const MESSAGE_TLS_CERTIFICATE: string | null
/**
 * Alias for the #SoupMessage:tls-errors property. (The
 * verification errors on #SoupMessage:tls-certificate.)
 */
const MESSAGE_TLS_ERRORS: string | null
/**
 * Alias for the #SoupMessage:uri property. (The message's
 * #SoupURI.)
 */
const MESSAGE_URI: string | null
/**
 * Like soup_get_micro_version(), but from the headers used at
 * application compile time, rather than from the library linked
 * against at application run time.
 */
const MICRO_VERSION: number
/**
 * Like soup_get_minor_version(), but from the headers used at
 * application compile time, rather than from the library linked
 * against at application run time.
 */
const MINOR_VERSION: number
/**
 * Alias for the #SoupRequest:session property, qv.
 */
const REQUEST_SESSION: string | null
/**
 * Alias for the #SoupRequest:uri property, qv.
 */
const REQUEST_URI: string | null
/**
 * Alias for the deprecated #SoupServer:async-context
 * property, qv.
 */
const SERVER_ASYNC_CONTEXT: string | null
/**
 * Alias for the #SoupServer:https-aliases property, qv.
 */
const SERVER_HTTPS_ALIASES: string | null
/**
 * Alias for the #SoupServer:http-aliases property, qv.
 */
const SERVER_HTTP_ALIASES: string | null
/**
 * Alias for the #SoupServer:interface property, qv.
 */
const SERVER_INTERFACE: string | null
/**
 * Alias for the deprecated #SoupServer:port property, qv.
 */
const SERVER_PORT: string | null
/**
 * Alias for the #SoupServer:raw-paths property. (If %TRUE,
 * percent-encoding in the Request-URI path will not be
 * automatically decoded.)
 */
const SERVER_RAW_PATHS: string | null
/**
 * Alias for the #SoupServer:server-header property, qv.
 */
const SERVER_SERVER_HEADER: string | null
/**
 * Alias for the #SoupServer:ssl-cert-file property, qv.
 */
const SERVER_SSL_CERT_FILE: string | null
/**
 * Alias for the #SoupServer:ssl-key-file property, qv.
 */
const SERVER_SSL_KEY_FILE: string | null
/**
 * Alias for the #SoupServer:tls-certificate property, qv.
 */
const SERVER_TLS_CERTIFICATE: string | null
/**
 * Alias for the #SoupSession:accept-language property, qv.
 */
const SESSION_ACCEPT_LANGUAGE: string | null
/**
 * Alias for the #SoupSession:accept-language-auto property, qv.
 */
const SESSION_ACCEPT_LANGUAGE_AUTO: string | null
/**
 * Alias for the #SoupSession:async-context property, qv.
 */
const SESSION_ASYNC_CONTEXT: string | null
/**
 * Alias for the #SoupSession:https-aliases property, qv.
 */
const SESSION_HTTPS_ALIASES: string | null
/**
 * Alias for the #SoupSession:http-aliases property, qv.
 */
const SESSION_HTTP_ALIASES: string | null
/**
 * Alias for the #SoupSession:idle-timeout property, qv.
 */
const SESSION_IDLE_TIMEOUT: string | null
/**
 * Alias for the #SoupSession:local-address property, qv.
 */
const SESSION_LOCAL_ADDRESS: string | null
/**
 * Alias for the #SoupSession:max-conns property, qv.
 */
const SESSION_MAX_CONNS: string | null
/**
 * Alias for the #SoupSession:max-conns-per-host property, qv.
 */
const SESSION_MAX_CONNS_PER_HOST: string | null
/**
 * Alias for the #SoupSession:proxy-resolver property, qv.
 */
const SESSION_PROXY_RESOLVER: string | null
/**
 * Alias for the #SoupSession:proxy-uri property, qv.
 */
const SESSION_PROXY_URI: string | null
/**
 * Alias for the #SoupSession:ssl-ca-file property, qv.
 */
const SESSION_SSL_CA_FILE: string | null
/**
 * Alias for the #SoupSession:ssl-strict property, qv.
 */
const SESSION_SSL_STRICT: string | null
/**
 * Alias for the #SoupSession:ssl-use-system-ca-file property,
 * qv.
 */
const SESSION_SSL_USE_SYSTEM_CA_FILE: string | null
/**
 * Alias for the #SoupSession:timeout property, qv.
 */
const SESSION_TIMEOUT: string | null
/**
 * Alias for the #SoupSession:tls-database property, qv.
 */
const SESSION_TLS_DATABASE: string | null
/**
 * Alias for the #SoupSession:tls-interaction property, qv.
 */
const SESSION_TLS_INTERACTION: string | null
/**
 * Alias for the #SoupSession:user-agent property, qv.
 */
const SESSION_USER_AGENT: string | null
/**
 * Alias for the #SoupSession:use-ntlm property, qv.
 */
const SESSION_USE_NTLM: string | null
/**
 * Alias for the #SoupSession:use-thread-context property, qv.
 */
const SESSION_USE_THREAD_CONTEXT: string | null
/**
 * Alias for the #SoupSocket:async-context property. (The
 * socket's #GMainContext.)
 */
const SOCKET_ASYNC_CONTEXT: string | null
/**
 * Alias for the #SoupSocket:non-blocking property. (Whether
 * or not the socket uses non-blocking I/O.)
 */
const SOCKET_FLAG_NONBLOCKING: string | null
/**
 * Alias for the #SoupSocket:is-server property, qv.
 */
const SOCKET_IS_SERVER: string | null
/**
 * Alias for the #SoupSocket:local-address property. (Address
 * of local end of socket.)
 */
const SOCKET_LOCAL_ADDRESS: string | null
/**
 * Alias for the #SoupSocket:remote-address property. (Address
 * of remote end of socket.)
 */
const SOCKET_REMOTE_ADDRESS: string | null
/**
 * Alias for the #SoupSocket:ssl-creds property.
 * (SSL credential information.)
 */
const SOCKET_SSL_CREDENTIALS: string | null
/**
 * Alias for the #SoupSocket:ssl-fallback property.
 */
const SOCKET_SSL_FALLBACK: string | null
/**
 * Alias for the #SoupSocket:ssl-strict property.
 */
const SOCKET_SSL_STRICT: string | null
/**
 * Alias for the #SoupSocket:timeout property. (The timeout
 * in seconds for blocking socket I/O operations.)
 */
const SOCKET_TIMEOUT: string | null
/**
 * Alias for the #SoupSocket:tls-certificate
 * property. Note that this property's value is only useful
 * if the socket is for a TLS connection, and only reliable
 * after some data has been transferred to or from it.
 */
const SOCKET_TLS_CERTIFICATE: string | null
/**
 * Alias for the #SoupSocket:tls-errors
 * property. Note that this property's value is only useful
 * if the socket is for a TLS connection, and only reliable
 * after some data has been transferred to or from it.
 */
const SOCKET_TLS_ERRORS: string | null
/**
 * Alias for the #SoupSocket:trusted-certificate
 * property.
 */
const SOCKET_TRUSTED_CERTIFICATE: string | null
/**
 * Alias for the #SoupSocket:use-thread-context property. (Use
 * g_main_context_get_thread_default())
 */
const SOCKET_USE_THREAD_CONTEXT: string | null
/**
 * A macro that should be defined by the user prior to including
 * libsoup.h. The definition should be one of the predefined libsoup
 * version macros: %SOUP_VERSION_2_24, %SOUP_VERSION_2_26, ...
 * 
 * This macro defines the earliest version of libsoup that the package
 * is required to be able to compile against.
 * 
 * If the compiler is configured to warn about the use of deprecated
 * functions, then using functions that were deprecated in version
 * %SOUP_VERSION_MIN_REQUIRED or earlier will cause warnings (but
 * using functions deprecated in later releases will not).
 */
const VERSION_MIN_REQUIRED: number
/**
 * Like SOUP_CHECK_VERSION, but the check for soup_check_version is
 * at runtime instead of compile time. This is useful for compiling
 * against older versions of libsoup, but using features from newer
 * versions.
 * @param major the major version to check
 * @param minor the minor version to check
 * @param micro the micro version to check
 * @returns %TRUE if the version of the libsoup currently loaded is the same as or newer than the passed-in version.
 */
function checkVersion(major: number, minor: number, micro: number): boolean
/**
 * Parses `header` and returns a #SoupCookie. (If `header` contains
 * multiple cookies, only the first one will be parsed.)
 * 
 * If `header` does not have "path" or "domain" attributes, they will
 * be defaulted from `origin`. If `origin` is %NULL, path will default
 * to "/", but domain will be left as %NULL. Note that this is not a
 * valid state for a #SoupCookie, and you will need to fill in some
 * appropriate string for the domain if you want to actually make use
 * of the cookie.
 * @param header a cookie string (eg, the value of a Set-Cookie header)
 * @param origin origin of the cookie, or %NULL
 * @returns a new #SoupCookie, or %NULL if it could not be parsed, or contained an illegal "domain" attribute for a cookie originating from @origin.
 */
function cookieParse(header: string | null, origin: URI): Cookie | null
/**
 * Parses `msg'`s Cookie request header and returns a #GSList of
 * #SoupCookie<!-- -->s. As the "Cookie" header, unlike "Set-Cookie",
 * only contains cookie names and values, none of the other
 * #SoupCookie fields will be filled in. (Thus, you can't generally
 * pass a cookie returned from this method directly to
 * soup_cookies_to_response().)
 * @param msg a #SoupMessage containing a "Cookie" request header
 * @returns a #GSList of #SoupCookie<!-- -->s, which can be freed with soup_cookies_free().
 */
function cookiesFromRequest(msg: Message): Cookie[]
/**
 * Parses `msg'`s Set-Cookie response headers and returns a #GSList of
 * #SoupCookie<!-- -->s. Cookies that do not specify "path" or
 * "domain" attributes will have their values defaulted from `msg`.
 * @param msg a #SoupMessage containing a "Set-Cookie" response header
 * @returns a #GSList of #SoupCookie<!-- -->s, which can be freed with soup_cookies_free().
 */
function cookiesFromResponse(msg: Message): Cookie[]
/**
 * Serializes a #GSList of #SoupCookie into a string suitable for
 * setting as the value of the "Cookie" header.
 * @param cookies a #GSList of #SoupCookie
 * @returns the serialization of @cookies
 */
function cookiesToCookieHeader(cookies: Cookie[]): string | null
/**
 * Adds the name and value of each cookie in `cookies` to `msg'`s
 * "Cookie" request. (If `msg` already has a "Cookie" request header,
 * these cookies will be appended to the cookies already present. Be
 * careful that you do not append the same cookies twice, eg, when
 * requeuing a message.)
 * @param cookies a #GSList of #SoupCookie
 * @param msg a #SoupMessage
 */
function cookiesToRequest(cookies: Cookie[], msg: Message): void
/**
 * Appends a "Set-Cookie" response header to `msg` for each cookie in
 * `cookies`. (This is in addition to any other "Set-Cookie" headers
 * `msg` may already have.)
 * @param cookies a #GSList of #SoupCookie
 * @param msg a #SoupMessage
 */
function cookiesToResponse(cookies: Cookie[], msg: Message): void
/**
 * Decodes `form,` which is an urlencoded dataset as defined in the
 * HTML 4.01 spec.
 * @param encodedForm data of type "application/x-www-form-urlencoded"
 * @returns a hash table containing the name/value pairs from @encoded_form, which you can free with g_hash_table_destroy().
 */
function formDecode(encodedForm: string | null): GLib.HashTable
/**
 * Decodes the "multipart/form-data" request in `msg;` this is a
 * convenience method for the case when you have a single file upload
 * control in a form. (Or when you don't have any file upload
 * controls, but are still using "multipart/form-data" anyway.) Pass
 * the name of the file upload control in `file_control_name,` and
 * soup_form_decode_multipart() will extract the uploaded file data
 * into `filename,` `content_type,` and `file`. All of the other form
 * control data will be returned (as strings, as with
 * soup_form_decode()) in the returned #GHashTable.
 * 
 * You may pass %NULL for `filename,` `content_type` and/or `file` if you do not
 * care about those fields. soup_form_decode_multipart() may also
 * return %NULL in those fields if the client did not provide that
 * information. You must free the returned filename and content-type
 * with g_free(), and the returned file data with soup_buffer_free().
 * 
 * If you have a form with more than one file upload control, you will
 * need to decode it manually, using soup_multipart_new_from_message()
 * and soup_multipart_get_part().
 * @param msg a #SoupMessage containing a "multipart/form-data" request body
 * @param fileControlName the name of the HTML file upload control, or %NULL
 * @returns  a hash table containing the name/value pairs (other than @file_control_name) from @msg, which you can free with g_hash_table_destroy(). On error, it will return %NULL.
 */
function formDecodeMultipart(msg: Message, fileControlName: string | null): [ /* returnType */ GLib.HashTable | null, /* filename */ string | null, /* contentType */ string | null, /* file */ Buffer ]
/**
 * Encodes `form_data_set` into a value of type
 * "application/x-www-form-urlencoded", as defined in the HTML 4.01
 * spec. Unlike soup_form_encode_hash(), this preserves the ordering
 * of the form elements, which may be required in some situations.
 * @param formDataSet a datalist containing name/value pairs
 * @returns the encoded form
 */
function formEncodeDatalist(formDataSet: GLib.Data): string | null
/**
 * Encodes `form_data_set` into a value of type
 * "application/x-www-form-urlencoded", as defined in the HTML 4.01
 * spec.
 * 
 * Note that the HTML spec states that "The control names/values are
 * listed in the order they appear in the document." Since this method
 * takes a hash table, it cannot enforce that; if you care about the
 * ordering of the form fields, use soup_form_encode_datalist().
 * @param formDataSet a hash table containing name/value pairs (as strings)
 * @returns the encoded form
 */
function formEncodeHash(formDataSet: GLib.HashTable): string | null
/**
 * Creates a new %SoupMessage and sets it up to send `form_data_set` to
 * `uri` via `method,` as with soup_form_request_new().
 * @param method the HTTP method, either "GET" or "POST"
 * @param uri the URI to send the form data to
 * @param formDataSet the data to send to `uri`
 * @returns the new %SoupMessage
 */
function formRequestNewFromDatalist(method: string | null, uri: string | null, formDataSet: GLib.Data): Message
/**
 * Creates a new %SoupMessage and sets it up to send `form_data_set` to
 * `uri` via `method,` as with soup_form_request_new().
 * @param method the HTTP method, either "GET" or "POST"
 * @param uri the URI to send the form data to
 * @param formDataSet the data to send to `uri`
 * @returns the new %SoupMessage
 */
function formRequestNewFromHash(method: string | null, uri: string | null, formDataSet: GLib.HashTable): Message
/**
 * Creates a new %SoupMessage and sets it up to send `multipart` to
 * `uri` via POST.
 * 
 * To send a <literal>"multipart/form-data"</literal> POST, first
 * create a #SoupMultipart, using %SOUP_FORM_MIME_TYPE_MULTIPART as
 * the MIME type. Then use soup_multipart_append_form_string() and
 * soup_multipart_append_form_file() to add the value of each form
 * control to the multipart. (These are just convenience methods, and
 * you can use soup_multipart_append_part() if you need greater
 * control over the part headers.) Finally, call
 * soup_form_request_new_from_multipart() to serialize the multipart
 * structure and create a #SoupMessage.
 * @param uri the URI to send the form data to
 * @param multipart a "multipart/form-data" #SoupMultipart
 * @returns the new %SoupMessage
 */
function formRequestNewFromMultipart(uri: string | null, multipart: Multipart): Message
/**
 * Returns the major version number of the libsoup library.
 * (e.g. in libsoup version 2.42.0 this is 2.)
 * 
 * This function is in the library, so it represents the libsoup library
 * your code is running against. Contrast with the #SOUP_MAJOR_VERSION
 * macro, which represents the major version of the libsoup headers you
 * have included when compiling your code.
 * @returns the major version number of the libsoup library
 */
function getMajorVersion(): number
/**
 * Returns the micro version number of the libsoup library.
 * (e.g. in libsoup version 2.42.0 this is 0.)
 * 
 * This function is in the library, so it represents the libsoup library
 * your code is running against. Contrast with the #SOUP_MICRO_VERSION
 * macro, which represents the micro version of the libsoup headers you
 * have included when compiling your code.
 * @returns the micro version number of the libsoup library
 */
function getMicroVersion(): number
/**
 * Returns the minor version number of the libsoup library.
 * (e.g. in libsoup version 2.42.0 this is 42.)
 * 
 * This function is in the library, so it represents the libsoup library
 * your code is running against. Contrast with the #SOUP_MINOR_VERSION
 * macro, which represents the minor version of the libsoup headers you
 * have included when compiling your code.
 * @returns the minor version number of the libsoup library
 */
function getMinorVersion(): number
function getResource(): Gio.Resource
/**
 * Parses `header` to see if it contains the token `token` (matched
 * case-insensitively). Note that this can't be used with lists
 * that have qvalues.
 * @param header An HTTP header suitable for parsing with soup_header_parse_list()
 * @param token a token
 * @returns whether or not @header contains @token
 */
function headerContains(header: string | null, token: string | null): boolean
/**
 * Frees `param_list`.
 * @param paramList a #GHashTable returned from soup_header_parse_param_list() or soup_header_parse_semi_param_list()
 */
function headerFreeParamList(paramList: GLib.HashTable): void
/**
 * Appends something like <literal>`name=``value<`/literal> to `string,`
 * taking care to quote `value` if needed, and if so, to escape any
 * quotes or backslashes in `value`.
 * 
 * Alternatively, if `value` is a non-ASCII UTF-8 string, it will be
 * appended using RFC5987 syntax. Although in theory this is supposed
 * to work anywhere in HTTP that uses this style of parameter, in
 * reality, it can only be used portably with the Content-Disposition
 * "filename" parameter.
 * 
 * If `value` is %NULL, this will just append `name` to `string`.
 * @param string a #GString being used to construct an HTTP header value
 * @param name a parameter name
 * @param value a parameter value, or %NULL
 */
function headerGStringAppendParam(string: GLib.String, name: string | null, value: string | null): void
/**
 * Appends something like <literal>`name=`"`value"`</literal> to
 * `string,` taking care to escape any quotes or backslashes in `value`.
 * 
 * If `value` is (non-ASCII) UTF-8, this will instead use RFC 5987
 * encoding, just like soup_header_g_string_append_param().
 * @param string a #GString being used to construct an HTTP header value
 * @param name a parameter name
 * @param value a parameter value
 */
function headerGStringAppendParamQuoted(string: GLib.String, name: string | null, value: string | null): void
/**
 * Parses a header whose content is described by RFC2616 as
 * "#something", where "something" does not itself contain commas,
 * except as part of quoted-strings.
 * @param header a header value
 * @returns a #GSList of list elements, as allocated strings
 */
function headerParseList(header: string | null): string[]
/**
 * Parses a header which is a comma-delimited list of something like:
 * <literal>token [ "=" ( token | quoted-string ) ]</literal>.
 * 
 * Tokens that don't have an associated value will still be added to
 * the resulting hash table, but with a %NULL value.
 * 
 * This also handles RFC5987 encoding (which in HTTP is mostly used
 * for giving UTF8-encoded filenames in the Content-Disposition
 * header).
 * @param header a header value
 * @returns a #GHashTable of list elements, which can be freed with soup_header_free_param_list().
 */
function headerParseParamList(header: string | null): GLib.HashTable
/**
 * A strict version of soup_header_parse_param_list()
 * that bails out if there are duplicate parameters.
 * Note that this function will treat RFC5987-encoded
 * parameters as duplicated if an ASCII version is also
 * present. For header fields that might contain
 * RFC5987-encoded parameters, use
 * soup_header_parse_param_list() instead.
 * @param header a header value
 * @returns  a #GHashTable of list elements, which can be freed with soup_header_free_param_list() or %NULL if there are duplicate elements.
 */
function headerParseParamListStrict(header: string | null): GLib.HashTable | null
/**
 * Parses a header whose content is a list of items with optional
 * "qvalue"s (eg, Accept, Accept-Charset, Accept-Encoding,
 * Accept-Language, TE).
 * 
 * If `unacceptable` is not %NULL, then on return, it will contain the
 * items with qvalue 0. Either way, those items will be removed from
 * the main list.
 * @param header a header value
 * @returns a #GSList of acceptable values (as allocated strings), highest-qvalue first.
 */
function headerParseQualityList(header: string | null): [ /* returnType */ string[], /* unacceptable */ string[] ]
/**
 * Parses a header which is a semicolon-delimited list of something
 * like: <literal>token [ "=" ( token | quoted-string ) ]</literal>.
 * 
 * Tokens that don't have an associated value will still be added to
 * the resulting hash table, but with a %NULL value.
 * 
 * This also handles RFC5987 encoding (which in HTTP is mostly used
 * for giving UTF8-encoded filenames in the Content-Disposition
 * header).
 * @param header a header value
 * @returns a #GHashTable of list elements, which can be freed with soup_header_free_param_list().
 */
function headerParseSemiParamList(header: string | null): GLib.HashTable
/**
 * A strict version of soup_header_parse_semi_param_list()
 * that bails out if there are duplicate parameters.
 * Note that this function will treat RFC5987-encoded
 * parameters as duplicated if an ASCII version is also
 * present. For header fields that might contain
 * RFC5987-encoded parameters, use
 * soup_header_parse_semi_param_list() instead.
 * @param header a header value
 * @returns  a #GHashTable of list elements, which can be freed with soup_header_free_param_list() or %NULL if there are duplicate elements.
 */
function headerParseSemiParamListStrict(header: string | null): GLib.HashTable | null
/**
 * Parses the headers of an HTTP request or response in `str` and
 * stores the results in `dest`. Beware that `dest` may be modified even
 * on failure.
 * 
 * This is a low-level method; normally you would use
 * soup_headers_parse_request() or soup_headers_parse_response().
 * @param str the header string (including the Request-Line or Status-Line,   but not the trailing blank line)
 * @param len length of `str`
 * @param dest #SoupMessageHeaders to store the header values in
 * @returns success or failure
 */
function headersParse(str: string | null, len: number, dest: MessageHeaders): boolean
/**
 * Parses the headers of an HTTP request in `str` and stores the
 * results in `req_method,` `req_path,` `ver,` and `req_headers`.
 * 
 * Beware that `req_headers` may be modified even on failure.
 * @param str the headers (up to, but not including, the trailing blank line)
 * @param len length of `str`
 * @param reqHeaders #SoupMessageHeaders to store the header values in
 * @returns %SOUP_STATUS_OK if the headers could be parsed, or an HTTP error to be returned to the client if they could not be.
 */
function headersParseRequest(str: string | null, len: number, reqHeaders: MessageHeaders): [ /* returnType */ number, /* reqMethod */ string | null, /* reqPath */ string | null, /* ver */ HTTPVersion ]
/**
 * Parses the headers of an HTTP response in `str` and stores the
 * results in `ver,` `status_code,` `reason_phrase,` and `headers`.
 * 
 * Beware that `headers` may be modified even on failure.
 * @param str the headers (up to, but not including, the trailing blank line)
 * @param len length of `str`
 * @param headers #SoupMessageHeaders to store the header values in
 * @returns success or failure.
 */
function headersParseResponse(str: string | null, len: number, headers: MessageHeaders): [ /* returnType */ boolean, /* ver */ HTTPVersion, /* statusCode */ number, /* reasonPhrase */ string | null ]
/**
 * Parses the HTTP Status-Line string in `status_line` into `ver,`
 * `status_code,` and `reason_phrase`. `status_line` must be terminated by
 * either "\0" or "\r\n".
 * @param statusLine an HTTP Status-Line
 * @returns %TRUE if @status_line was parsed successfully.
 */
function headersParseStatusLine(statusLine: string | null): [ /* returnType */ boolean, /* ver */ HTTPVersion, /* statusCode */ number, /* reasonPhrase */ string | null ]
function httpErrorQuark(): GLib.Quark
/**
 * Initializes `iter` for iterating `hdrs`.
 * @param hdrs a %SoupMessageHeaders
 */
function messageHeadersIterInit(hdrs: MessageHeaders): /* iter */ MessageHeadersIter
function requestErrorQuark(): GLib.Quark
function requesterErrorQuark(): GLib.Quark
/**
 * Looks up the stock HTTP description of `status_code`. This is used
 * by soup_message_set_status() to get the correct text to go with a
 * given status code.
 * 
 * <emphasis>There is no reason for you to ever use this
 * function.</emphasis> If you wanted the textual description for the
 * #SoupMessage:status_code of a given #SoupMessage, you should just
 * look at the message's #SoupMessage:reason_phrase. However, you
 * should only do that for use in debugging messages; HTTP reason
 * phrases are not localized, and are not generally very descriptive
 * anyway, and so they should never be presented to the user directly.
 * Instead, you should create you own error messages based on the
 * status code, and on what you were trying to do.
 * @param statusCode an HTTP status code
 * @returns the (terse, English) description of @status_code
 */
function statusGetPhrase(statusCode: number): string | null
/**
 * Turns %SOUP_STATUS_CANT_RESOLVE into
 * %SOUP_STATUS_CANT_RESOLVE_PROXY and %SOUP_STATUS_CANT_CONNECT into
 * %SOUP_STATUS_CANT_CONNECT_PROXY. Other status codes are passed
 * through unchanged.
 * @param statusCode a status code
 * @returns the "proxified" equivalent of @status_code.
 */
function statusProxify(statusCode: number): number
/**
 * Compares `v1` and `v2` in a case-insensitive manner
 * @param v1 an ASCII string
 * @param v2 another ASCII string
 * @returns %TRUE if they are equal (modulo case)
 */
function strCaseEqual(v1: any | null, v2: any | null): boolean
/**
 * Hashes `key` in a case-insensitive manner.
 * @param key ASCII string to hash
 * @returns the hash code.
 */
function strCaseHash(key: any | null): number
/**
 * Looks whether the `domain` passed as argument is a public domain
 * suffix (.org, .com, .co.uk, etc) or not.
 * 
 * Prior to libsoup 2.46, this function required that `domain` be in
 * UTF-8 if it was an IDN. From 2.46 on, the name can be in either
 * UTF-8 or ASCII format.
 * @param domain a domain name
 * @returns %TRUE if it is a public domain, %FALSE otherwise.
 */
function tldDomainIsPublicSuffix(domain: string | null): boolean
function tldErrorQuark(): GLib.Quark
/**
 * Finds the base domain for a given `hostname`. The base domain is
 * composed by the top level domain (such as .org, .com, .co.uk, etc)
 * plus the second level domain, for example for myhost.mydomain.com
 * it will return mydomain.com.
 * 
 * Note that %NULL will be returned for private URLs (those not ending
 * with any well known TLD) because choosing a base domain for them
 * would be totally arbitrary.
 * 
 * Prior to libsoup 2.46, this function required that `hostname` be in
 * UTF-8 if it was an IDN. From 2.46 on, the name can be in either
 * UTF-8 or ASCII format (and the return value will be in the same
 * format).
 * @param hostname a hostname
 * @returns a pointer to the start of the base domain in @hostname. If an error occurs, %NULL will be returned and @error set.
 */
function tldGetBaseDomain(hostname: string | null): string | null
/**
 * Fully %<!-- -->-decodes `part`.
 * 
 * In the past, this would return %NULL if `part` contained invalid
 * percent-encoding, but now it just ignores the problem (as
 * soup_uri_new() already did).
 * @param part a URI part
 * @returns the decoded URI part.
 */
function uriDecode(part: string | null): string | null
/**
 * This %<!-- -->-encodes the given URI part and returns the escaped
 * version in allocated memory, which the caller must free when it is
 * done.
 * @param part a URI part
 * @param escapeExtra additional reserved characters to escape (or %NULL)
 * @returns the encoded URI part
 */
function uriEncode(part: string | null, escapeExtra: string | null): string | null
/**
 * %<!-- -->-decodes any "unreserved" characters (or characters in
 * `unescape_extra)` in `part,` and %<!-- -->-encodes any non-ASCII
 * characters, spaces, and non-printing characters in `part`.
 * 
 * "Unreserved" characters are those that are not allowed to be used
 * for punctuation according to the URI spec. For example, letters are
 * unreserved, so soup_uri_normalize() will turn
 * <literal>http://example.com/foo/b%<!-- -->61r</literal> into
 * <literal>http://example.com/foo/bar</literal>, which is guaranteed
 * to mean the same thing. However, "/" is "reserved", so
 * <literal>http://example.com/foo%<!-- -->2Fbar</literal> would not
 * be changed, because it might mean something different to the
 * server.
 * 
 * In the past, this would return %NULL if `part` contained invalid
 * percent-encoding, but now it just ignores the problem (as
 * soup_uri_new() already did).
 * @param part a URI part
 * @param unescapeExtra reserved characters to unescape (or %NULL)
 * @returns the normalized URI part
 */
function uriNormalize(part: string | null, unescapeExtra: string | null): string | null
/**
 * Creates a new %GValueArray. (This is just a wrapper around
 * g_value_array_new(), for naming consistency purposes.)
 * @returns a new %GValueArray
 */
function valueArrayNew(): GObject.ValueArray
/**
 * Inserts `value` into `hash`. (Unlike with g_hash_table_insert(), both
 * the key and the value are copied).
 * @param hash a value hash
 * @param key the key
 * @param value a value
 */
function valueHashInsertValue(hash: GLib.HashTable, key: string | null, value: any): void
/**
 * Creates a #GHashTable whose keys are strings and whose values
 * are #GValue.
 * @returns a new empty #GHashTable
 */
function valueHashNew(): GLib.HashTable
/**
 * Adds the necessary headers to `msg` to request a WebSocket
 * handshake. The message body and non-WebSocket-related headers are
 * not modified.
 * 
 * Use soup_websocket_client_prepare_handshake_with_extensions() if you
 * want to include "Sec-WebSocket-Extensions" header in the request.
 * 
 * This is a low-level function; if you use
 * soup_session_websocket_connect_async() to create a WebSocket
 * connection, it will call this for you.
 * @param msg a #SoupMessage
 * @param origin the "Origin" header to set
 * @param protocols list of   protocols to offer
 */
function websocketClientPrepareHandshake(msg: Message, origin: string | null, protocols: string[] | null): void
/**
 * Adds the necessary headers to `msg` to request a WebSocket
 * handshake including supported WebSocket extensions.
 * The message body and non-WebSocket-related headers are
 * not modified.
 * 
 * This is a low-level function; if you use
 * soup_session_websocket_connect_async() to create a WebSocket
 * connection, it will call this for you.
 * @param msg a #SoupMessage
 * @param origin the "Origin" header to set
 * @param protocols list of   protocols to offer
 * @param supportedExtensions list   of supported extension types
 */
function websocketClientPrepareHandshakeWithExtensions(msg: Message, origin: string | null, protocols: string[] | null, supportedExtensions: GObject.TypeClass[] | null): void
/**
 * Looks at the response status code and headers in `msg` and
 * determines if they contain a valid WebSocket handshake response
 * (given the handshake request in `msg'`s request headers).
 * 
 * If the response contains the "Sec-WebSocket-Extensions" header,
 * the handshake will be considered invalid. You need to use
 * soup_websocket_client_verify_handshake_with_extensions() to handle
 * responses with extensions.
 * 
 * This is a low-level function; if you use
 * soup_session_websocket_connect_async() to create a WebSocket
 * connection, it will call this for you.
 * @param msg #SoupMessage containing both client and server sides of a   WebSocket handshake
 * @returns %TRUE if @msg contains a completed valid WebSocket   handshake, %FALSE and an error if not.
 */
function websocketClientVerifyHandshake(msg: Message): boolean
/**
 * Looks at the response status code and headers in `msg` and
 * determines if they contain a valid WebSocket handshake response
 * (given the handshake request in `msg'`s request headers).
 * 
 * If `supported_extensions` is non-%NULL, extensions included in the
 * response "Sec-WebSocket-Extensions" are verified too. Accepted
 * extensions are returned in `accepted_extensions` parameter if non-%NULL.
 * 
 * This is a low-level function; if you use
 * soup_session_websocket_connect_async() to create a WebSocket
 * connection, it will call this for you.
 * @param msg #SoupMessage containing both client and server sides of a   WebSocket handshake
 * @param supportedExtensions list   of supported extension types
 * @returns %TRUE if @msg contains a completed valid WebSocket   handshake, %FALSE and an error if not.
 */
function websocketClientVerifyHandshakeWithExtensions(msg: Message, supportedExtensions: GObject.TypeClass[] | null): [ /* returnType */ boolean, /* acceptedExtensions */ WebsocketExtension[] ]
function websocketErrorGetQuark(): GLib.Quark
/**
 * Examines the method and request headers in `msg` and determines
 * whether `msg` contains a valid handshake request.
 * 
 * If `origin` is non-%NULL, then only requests containing a matching
 * "Origin" header will be accepted. If `protocols` is non-%NULL, then
 * only requests containing a compatible "Sec-WebSocket-Protocols"
 * header will be accepted.
 * 
 * Requests containing "Sec-WebSocket-Extensions" header will be
 * accepted even if the header is not valid. To check a request
 * with extensions you need to use
 * soup_websocket_server_check_handshake_with_extensions() and provide
 * the list of supported extension types.
 * 
 * Normally soup_websocket_server_process_handshake() will take care
 * of this for you, and if you use soup_server_add_websocket_handler()
 * to handle accepting WebSocket connections, it will call that for
 * you. However, this function may be useful if you need to perform
 * more complicated validation; eg, accepting multiple different Origins,
 * or handling different protocols depending on the path.
 * @param msg #SoupMessage containing the client side of a WebSocket handshake
 * @param origin expected Origin header
 * @param protocols allowed WebSocket   protocols.
 * @returns %TRUE if @msg contained a valid WebSocket handshake,   %FALSE and an error if not.
 */
function websocketServerCheckHandshake(msg: Message, origin: string | null, protocols: string[] | null): boolean
/**
 * Examines the method and request headers in `msg` and determines
 * whether `msg` contains a valid handshake request.
 * 
 * If `origin` is non-%NULL, then only requests containing a matching
 * "Origin" header will be accepted. If `protocols` is non-%NULL, then
 * only requests containing a compatible "Sec-WebSocket-Protocols"
 * header will be accepted. If `supported_extensions` is non-%NULL, then
 * only requests containing valid supported extensions in
 * "Sec-WebSocket-Extensions" header will be accepted.
 * 
 * Normally soup_websocket_server_process_handshake_with_extensioins()
 * will take care of this for you, and if you use
 * soup_server_add_websocket_handler() to handle accepting WebSocket
 * connections, it will call that for you. However, this function may
 * be useful if you need to perform more complicated validation; eg,
 * accepting multiple different Origins, or handling different protocols
 * depending on the path.
 * @param msg #SoupMessage containing the client side of a WebSocket handshake
 * @param origin expected Origin header
 * @param protocols allowed WebSocket   protocols.
 * @param supportedExtensions list   of supported extension types
 * @returns %TRUE if @msg contained a valid WebSocket handshake,   %FALSE and an error if not.
 */
function websocketServerCheckHandshakeWithExtensions(msg: Message, origin: string | null, protocols: string[] | null, supportedExtensions: GObject.TypeClass[] | null): boolean
/**
 * Examines the method and request headers in `msg` and (assuming `msg`
 * contains a valid handshake request), fills in the handshake
 * response.
 * 
 * If `expected_origin` is non-%NULL, then only requests containing a matching
 * "Origin" header will be accepted. If `protocols` is non-%NULL, then
 * only requests containing a compatible "Sec-WebSocket-Protocols"
 * header will be accepted.
 * 
 * Requests containing "Sec-WebSocket-Extensions" header will be
 * accepted even if the header is not valid. To process a request
 * with extensions you need to use
 * soup_websocket_server_process_handshake_with_extensions() and provide
 * the list of supported extension types.
 * 
 * This is a low-level function; if you use
 * soup_server_add_websocket_handler() to handle accepting WebSocket
 * connections, it will call this for you.
 * @param msg #SoupMessage containing the client side of a WebSocket handshake
 * @param expectedOrigin expected Origin header
 * @param protocols allowed WebSocket   protocols.
 * @returns %TRUE if @msg contained a valid WebSocket handshake   request and was updated to contain a handshake response. %FALSE if not.
 */
function websocketServerProcessHandshake(msg: Message, expectedOrigin: string | null, protocols: string[] | null): boolean
/**
 * Examines the method and request headers in `msg` and (assuming `msg`
 * contains a valid handshake request), fills in the handshake
 * response.
 * 
 * If `expected_origin` is non-%NULL, then only requests containing a matching
 * "Origin" header will be accepted. If `protocols` is non-%NULL, then
 * only requests containing a compatible "Sec-WebSocket-Protocols"
 * header will be accepted. If `supported_extensions` is non-%NULL, then
 * only requests containing valid supported extensions in
 * "Sec-WebSocket-Extensions" header will be accepted. The accepted extensions
 * will be returned in `accepted_extensions` parameter if non-%NULL.
 * 
 * This is a low-level function; if you use
 * soup_server_add_websocket_handler() to handle accepting WebSocket
 * connections, it will call this for you.
 * @param msg #SoupMessage containing the client side of a WebSocket handshake
 * @param expectedOrigin expected Origin header
 * @param protocols allowed WebSocket   protocols.
 * @param supportedExtensions list   of supported extension types
 * @returns %TRUE if @msg contained a valid WebSocket handshake   request and was updated to contain a handshake response. %FALSE if not.
 */
function websocketServerProcessHandshakeWithExtensions(msg: Message, expectedOrigin: string | null, protocols: string[] | null, supportedExtensions: GObject.TypeClass[] | null): [ /* returnType */ boolean, /* acceptedExtensions */ WebsocketExtension[] ]
/**
 * This creates an XML-RPC methodCall and returns it as a string.
 * This is the low-level method that soup_xmlrpc_request_new() is
 * built on.
 * 
 * `params` is an array of #GValue representing the parameters to
 * `method`. (It is *not* a #GValueArray, although if you have a
 * #GValueArray, you can just pass its <literal>values</literal>f and
 * <literal>n_values</literal> fields.)
 * 
 * The correspondence between glib types and XML-RPC types is:
 * 
 *   int: #int (%G_TYPE_INT)
 *   boolean: #gboolean (%G_TYPE_BOOLEAN)
 *   string: #char* (%G_TYPE_STRING)
 *   double: #double (%G_TYPE_DOUBLE)
 *   datetime.iso8601: #SoupDate (%SOUP_TYPE_DATE)
 *   base64: #GByteArray (%SOUP_TYPE_BYTE_ARRAY)
 *   struct: #GHashTable (%G_TYPE_HASH_TABLE)
 *   array: #GValueArray (%G_TYPE_VALUE_ARRAY)
 * 
 * For structs, use a #GHashTable that maps strings to #GValue;
 * soup_value_hash_new() and related methods can help with this.
 * @param methodName the name of the XML-RPC method
 * @param params arguments to `method`
 * @returns the text of the methodCall, or %NULL on error
 */
function xmlrpcBuildMethodCall(methodName: string | null, params: any[]): string | null
/**
 * This creates a (successful) XML-RPC methodResponse and returns it
 * as a string. To create a fault response, use
 * soup_xmlrpc_build_fault().
 * 
 * The glib type to XML-RPC type mapping is as with
 * soup_xmlrpc_build_method_call(), qv.
 * @param value the return value
 * @returns the text of the methodResponse, or %NULL on error
 */
function xmlrpcBuildMethodResponse(value: any): string | null
/**
 * This creates an XML-RPC methodCall and returns it as a string.
 * This is the low-level method that soup_xmlrpc_message_new() is
 * built on.
 * 
 * `params` is a #GVariant tuple representing the method parameters.
 * 
 * Serialization details:
 *  - "a{s*}" and "{s*}" are serialized as &lt;struct&gt;
 *  - "ay" is serialized as &lt;base64&gt;
 *  - Other arrays and tuples are serialized as &lt;array&gt;
 *  - booleans are serialized as &lt;boolean&gt;
 *  - byte, int16, uint16 and int32 are serialized as &lt;int&gt;
 *  - uint32 and int64 are serialized as the nonstandard &lt;i8&gt; type
 *  - doubles are serialized as &lt;double&gt;
 *  - Strings are serialized as &lt;string&gt;
 *  - Variants (i.e. "v" type) are unwrapped and their child is serialized.
 *  - #GVariants created by soup_xmlrpc_variant_new_datetime() are serialized as
 *    &lt;dateTime.iso8601&gt;
 *  - Other types are not supported and will return %NULL and set `error`.
 *    This notably includes: object-paths, signatures, uint64, handles, maybes
 *    and dictionaries with non-string keys.
 * 
 * If `params` is floating, it is consumed.
 * @param methodName the name of the XML-RPC method
 * @param params a #GVariant tuple
 * @returns the text of the methodCall, or %NULL on error.
 */
function xmlrpcBuildRequest(methodName: string | null, params: GLib.Variant): string | null
/**
 * This creates a (successful) XML-RPC methodResponse and returns it
 * as a string. To create a fault response, use soup_xmlrpc_build_fault(). This
 * is the low-level method that soup_xmlrpc_message_set_response() is built on.
 * 
 * See soup_xmlrpc_build_request() for serialization details, but note
 * that since a method can only have a single return value, `value`
 * should not be a tuple here (unless the return value is an array).
 * 
 * If `value` is floating, it is consumed.
 * @param value the return value
 * @returns the text of the methodResponse, or %NULL on error.
 */
function xmlrpcBuildResponse(value: GLib.Variant): string | null
function xmlrpcErrorQuark(): GLib.Quark
function xmlrpcFaultQuark(): GLib.Quark
/**
 * Creates an XML-RPC methodCall and returns a #SoupMessage, ready
 * to send, for that method call.
 * 
 * See soup_xmlrpc_build_request() for serialization details.
 * 
 * If `params` is floating, it is consumed.
 * @param uri URI of the XML-RPC service
 * @param methodName the name of the XML-RPC method to invoke at `uri`
 * @param params a #GVariant tuple
 * @returns a #SoupMessage encoding the   indicated XML-RPC request, or %NULL on error.
 */
function xmlrpcMessageNew(uri: string | null, methodName: string | null, params: GLib.Variant): Message
/**
 * Sets the status code and response body of `msg` to indicate a
 * successful XML-RPC call, with a return value given by `value`. To set a
 * fault response, use soup_xmlrpc_message_set_fault().
 * 
 * See soup_xmlrpc_build_request() for serialization details.
 * 
 * If `value` is floating, it is consumed.
 * @param msg an XML-RPC request
 * @param value a #GVariant
 * @returns %TRUE on success, %FALSE otherwise.
 */
function xmlrpcMessageSetResponse(msg: Message, value: GLib.Variant): boolean
/**
 * Parses `method_call` to get the name and parameters, and returns the
 * parameter values in a #GValueArray; see also
 * soup_xmlrpc_extract_method_call(), which is more convenient if you
 * know in advance what the types of the parameters will be.
 * @param methodCall the XML-RPC methodCall string
 * @param length the length of `method_call,` or -1 if it is NUL-terminated
 * @returns success or failure.
 */
function xmlrpcParseMethodCall(methodCall: string | null, length: number): [ /* returnType */ boolean, /* methodName */ string | null, /* params */ GObject.ValueArray ]
/**
 * Parses `method_response` and returns the return value in `value`. If
 * `method_response` is a fault, `value` will be unchanged, and `error`
 * will be set to an error of type %SOUP_XMLRPC_FAULT, with the error
 * #code containing the fault code, and the error #message containing
 * the fault string. (If `method_response` cannot be parsed at all,
 * soup_xmlrpc_parse_method_response() will return %FALSE, but `error`
 * will be unset.)
 * @param methodResponse the XML-RPC methodResponse string
 * @param length the length of `method_response,` or -1 if it is NUL-terminated
 * @returns %TRUE if a return value was parsed, %FALSE if the response could not be parsed, or contained a fault.
 */
function xmlrpcParseMethodResponse(methodResponse: string | null, length: number): [ /* returnType */ boolean, /* value */ any ]
/**
 * Parses `method_call` and return the method name. Method parameters can be
 * parsed later using soup_xmlrpc_params_parse().
 * @param methodCall the XML-RPC methodCall string
 * @param length the length of `method_call,` or -1 if it is NUL-terminated
 * @returns method's name, or %NULL on error.
 */
function xmlrpcParseRequest(methodCall: string | null, length: number): [ /* returnType */ string | null, /* params */ XMLRPCParams ]
/**
 * Parses `method_response` and returns the return value. If
 * `method_response` is a fault, %NULL is returned, and `error`
 * will be set to an error in the %SOUP_XMLRPC_FAULT domain, with the error
 * code containing the fault code, and the error message containing
 * the fault string. If `method_response` cannot be parsed, %NULL is returned,
 * and `error` will be set to an error in the %SOUP_XMLRPC_ERROR domain.
 * 
 * See soup_xmlrpc_params_parse() for deserialization details.
 * @param methodResponse the XML-RPC methodResponse string
 * @param length the length of `method_response,` or -1 if it is NUL-terminated
 * @param signature A valid #GVariant type string, or %NULL
 * @returns a new (non-floating) #GVariant, or %NULL
 */
function xmlrpcParseResponse(methodResponse: string | null, length: number, signature: string | null): GLib.Variant
/**
 * Get the #SoupDate from special #GVariant created by
 * soup_xmlrpc_variant_new_datetime() or by parsing a &lt;dateTime.iso8601&gt;
 * node. See soup_xmlrpc_params_parse().
 * 
 * If `variant` does not contain a datetime it will return an error but it is not
 * considered a programmer error because it generally means parameters received
 * are not in the expected type.
 * @param variant a #GVariant
 * @returns a new #SoupDate, or %NULL on error.
 */
function xmlrpcVariantGetDatetime(variant: GLib.Variant): Date
/**
 * Construct a special #GVariant used to serialize a &lt;dateTime.iso8601&gt;
 * node. See soup_xmlrpc_build_request().
 * 
 * The actual type of the returned #GVariant is unspecified and "v" or "*"
 * should be used in variant format strings. For example:
 * <informalexample><programlisting>
 * args = g_variant_new ("(v)", soup_xmlrpc_variant_new_datetime (date));
 * </programlisting></informalexample>
 * @param date a #SoupDate
 * @returns a floating #GVariant.
 */
function xmlrpcVariantNewDatetime(date: Date): GLib.Variant
/**
 * The callback function passed to soup_address_resolve_async().
 * @callback 
 * @param addr the #SoupAddress that was resolved
 * @param status %SOUP_STATUS_OK, %SOUP_STATUS_CANT_RESOLVE, or %SOUP_STATUS_CANCELLED
 */
interface AddressCallback {
    (addr: Address, status: number): void
}
/**
 * Callback used by #SoupAuthDomainBasic for authentication purposes.
 * The application should verify that `username` and `password` and valid
 * and return %TRUE or %FALSE.
 * 
 * If you are maintaining your own password database (rather than
 * using the password to authenticate against some other system like
 * PAM or a remote server), you should make sure you know what you are
 * doing. In particular, don't store cleartext passwords, or
 * easily-computed hashes of cleartext passwords, even if you don't
 * care that much about the security of your server, because users
 * will frequently use the same password for multiple sites, and so
 * compromising any site with a cleartext (or easily-cracked) password
 * database may give attackers access to other more-interesting sites
 * as well.
 * @callback 
 * @param domain the domain
 * @param msg the message being authenticated
 * @param username the username provided by the client
 * @param password the password provided by the client
 * @returns %TRUE if @username and @password are valid
 */
interface AuthDomainBasicAuthCallback {
    (domain: AuthDomainBasic, msg: Message, username: string | null, password: string | null): boolean
}
/**
 * Callback used by #SoupAuthDomainDigest for authentication purposes.
 * The application should look up `username` in its password database,
 * and return the corresponding encoded password (see
 * soup_auth_domain_digest_encode_password()).
 * @callback 
 * @param domain the domain
 * @param msg the message being authenticated
 * @param username the username provided by the client
 * @returns the encoded password, or %NULL if @username is not a valid user. @domain will free the password when it is done with it.
 */
interface AuthDomainDigestAuthCallback {
    (domain: AuthDomainDigest, msg: Message, username: string | null): string | null
}
/**
 * The prototype for a #SoupAuthDomain filter; see
 * soup_auth_domain_set_filter() for details.
 * @callback 
 * @param domain a #SoupAuthDomain
 * @param msg a #SoupMessage
 * @returns %TRUE if @msg requires authentication, %FALSE if not.
 */
interface AuthDomainFilter {
    (domain: AuthDomain, msg: Message): boolean
}
/**
 * The prototype for a #SoupAuthDomain generic authentication callback.
 * 
 * The callback should look up the user's password, call
 * soup_auth_domain_check_password(), and use the return value from
 * that method as its own return value.
 * 
 * In general, for security reasons, it is preferable to use the
 * auth-domain-specific auth callbacks (eg,
 * #SoupAuthDomainBasicAuthCallback and
 * #SoupAuthDomainDigestAuthCallback), because they don't require
 * keeping a cleartext password database. Most users will use the same
 * password for many different sites, meaning if any site with a
 * cleartext password database is compromised, accounts on other
 * servers might be compromised as well. For many of the cases where
 * #SoupServer is used, this is not really relevant, but it may still
 * be worth considering.
 * @callback 
 * @param domain a #SoupAuthDomain
 * @param msg the #SoupMessage being authenticated
 * @param username the username from `msg`
 * @returns %TRUE if @msg is authenticated, %FALSE if not.
 */
interface AuthDomainGenericAuthCallback {
    (domain: AuthDomain, msg: Message, username: string | null): boolean
}
/**
 * The prototype for a chunk allocation callback. This should allocate
 * a new #SoupBuffer and return it for the I/O layer to read message
 * body data off the network into.
 * 
 * If `max_len` is non-0, it indicates the maximum number of bytes that
 * could be read, based on what is known about the message size. Note
 * that this might be a very large number, and you should not simply
 * try to allocate that many bytes blindly. If `max_len` is 0, that
 * means that libsoup does not know how many bytes remain to be read,
 * and the allocator should return a buffer of a size that it finds
 * convenient.
 * 
 * If the allocator returns %NULL, the message will be paused. It is
 * up to the application to make sure that it gets unpaused when it
 * becomes possible to allocate a new buffer.
 * @callback 
 * @param msg the #SoupMessage the chunk is being allocated for
 * @param maxLen the maximum length that will be read, or 0.
 * @returns the new buffer (or %NULL)
 */
interface ChunkAllocator {
    (msg: Message, maxLen: number): Buffer | null
}
/**
 * The prototype for a logging filter. The filter callback will be
 * invoked for each request or response, and should analyze it and
 * return a #SoupLoggerLogLevel value indicating how much of the
 * message to log. Eg, it might choose between %SOUP_LOGGER_LOG_BODY
 * and %SOUP_LOGGER_LOG_HEADERS depending on the Content-Type.
 * @callback 
 * @param logger the #SoupLogger
 * @param msg the message being logged
 * @returns a #SoupLoggerLogLevel value indicating how much of the message to log
 */
interface LoggerFilter {
    (logger: Logger, msg: Message): LoggerLogLevel
}
/**
 * The prototype for a custom printing callback.
 * 
 * `level` indicates what kind of information is being printed. Eg, it
 * will be %SOUP_LOGGER_LOG_HEADERS if `data` is header data.
 * 
 * `direction` is either '<', '>', or ' ', and `data` is the single line
 * to print; the printer is expected to add a terminating newline.
 * 
 * To get the effect of the default printer, you would do:
 * 
 * <informalexample><programlisting>
 * printf ("%c %s\n", direction, data);
 * </programlisting></informalexample>
 * @callback 
 * @param logger the #SoupLogger
 * @param level the level of the information being printed.
 * @param direction a single-character prefix to `data`
 * @param data data to print
 */
interface LoggerPrinter {
    (logger: Logger, level: LoggerLogLevel, direction: number, data: string | null): void
}
/**
 * The callback passed to soup_message_headers_foreach().
 * @callback 
 * @param name the header name
 * @param value the header value
 */
interface MessageHeadersForeachFunc {
    (name: string | null, value: string | null): void
}
interface PasswordManagerCallback {
    (passwordManager: PasswordManager, msg: Message, auth: Auth, retrying: boolean): void
}
interface ProxyResolverCallback {
    (proxyResolver: ProxyResolver, msg: Message, arg: number, addr: Address): void
}
/**
 * Callback for soup_proxy_uri_resolver_get_proxy_uri_async()
 * @callback 
 * @param resolver the #SoupProxyURIResolver
 * @param status a #SoupStatus
 * @param proxyUri the resolved proxy URI, or %NULL
 */
interface ProxyURIResolverCallback {
    (resolver: ProxyURIResolver, status: number, proxyUri: URI): void
}
/**
 * A callback used to handle requests to a #SoupServer.
 * 
 * `path` and `query` contain the likewise-named components of the
 * Request-URI, subject to certain assumptions. By default,
 * #SoupServer decodes all percent-encoding in the URI path, such that
 * "/foo%<!-- -->2Fbar" is treated the same as "/foo/bar". If your
 * server is serving resources in some non-POSIX-filesystem namespace,
 * you may want to distinguish those as two distinct paths. In that
 * case, you can set the %SOUP_SERVER_RAW_PATHS property when creating
 * the #SoupServer, and it will leave those characters undecoded. (You
 * may want to call soup_uri_normalize() to decode any percent-encoded
 * characters that you aren't handling specially.)
 * 
 * `query` contains the query component of the Request-URI parsed
 * according to the rules for HTML form handling. Although this is the
 * only commonly-used query string format in HTTP, there is nothing
 * that actually requires that HTTP URIs use that format; if your
 * server needs to use some other format, you can just ignore `query,`
 * and call soup_message_get_uri() and parse the URI's query field
 * yourself.
 * 
 * See soup_server_add_handler() and soup_server_add_early_handler()
 * for details of what handlers can/should do.
 * @callback 
 * @param server the #SoupServer
 * @param msg the message being processed
 * @param path the path component of `msg'`s Request-URI
 * @param query the parsed query   component of `msg'`s Request-URI
 * @param client additional contextual information about the client
 */
interface ServerCallback {
    (server: Server, msg: Message, path: string | null, query: GLib.HashTable | null, client: ClientContext): void
}
/**
 * A callback used to handle WebSocket requests to a #SoupServer. The
 * callback will be invoked after sending the handshake response back
 * to the client (and is only invoked if the handshake was
 * successful).
 * 
 * `path` contains the path of the Request-URI, subject to the same
 * rules as #SoupServerCallback (qv).
 * @callback 
 * @param server the #SoupServer
 * @param connection the newly created WebSocket connection
 * @param path the path component of `msg'`s Request-URI
 * @param client additional contextual information about the client
 */
interface ServerWebsocketCallback {
    (server: Server, connection: WebsocketConnection, path: string | null, client: ClientContext): void
}
/**
 * Prototype for the callback passed to soup_session_queue_message(),
 * qv.
 * @callback 
 * @param session the session
 * @param msg the message that has finished
 */
interface SessionCallback {
    (session: Session, msg: Message): void
}
/**
 * Prototype for the progress callback passed to soup_session_connect_async().
 * @callback 
 * @param session the #SoupSession
 * @param event a #GSocketClientEvent
 * @param connection the current state of the network connection
 */
interface SessionConnectProgressCallback {
    (session: Session, event: Gio.SocketClientEvent, connection: Gio.IOStream): void
}
/**
 * The callback function passed to soup_socket_connect_async().
 * @callback 
 * @param sock the #SoupSocket
 * @param status an HTTP status code indicating success or failure
 */
interface SocketCallback {
    (sock: Socket, status: number): void
}
module PasswordManager {

    // Constructor properties interface

    interface ConstructorProperties extends SessionFeature.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface PasswordManager extends SessionFeature {

    // Own properties of Soup-2.4.Soup.PasswordManager

    __gtype__: number

    // Owm methods of Soup-2.4.Soup.PasswordManager

    // Has conflict: getPasswordsAsync(msg: Message, auth: Auth, retrying: boolean, asyncContext: GLib.MainContext, cancellable: Gio.Cancellable | null, callback: PasswordManagerCallback): void
    // Has conflict: getPasswordsSync(msg: Message, auth: Auth, cancellable: Gio.Cancellable | null): void

    // Own virtual methods of Soup-2.4.Soup.PasswordManager

    getPasswordsAsync(msg: Message, auth: Auth, retrying: boolean, asyncContext: GLib.MainContext, cancellable: Gio.Cancellable | null, callback: PasswordManagerCallback): void
    getPasswordsSync(msg: Message, auth: Auth, cancellable: Gio.Cancellable | null): void

    // Class property signals of Soup-2.4.Soup.PasswordManager

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

class PasswordManager extends GObject.Object {

    // Own properties of Soup-2.4.Soup.PasswordManager

    static name: string

    // Constructors of Soup-2.4.Soup.PasswordManager

    constructor(config?: PasswordManager.ConstructorProperties) 
    _init(config?: PasswordManager.ConstructorProperties): void
}

module ProxyResolver {

    // Constructor properties interface

    interface ConstructorProperties extends SessionFeature.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface ProxyResolver extends SessionFeature {

    // Own properties of Soup-2.4.Soup.ProxyResolver

    __gtype__: number

    // Owm methods of Soup-2.4.Soup.ProxyResolver

    // Has conflict: getProxyAsync(msg: Message, asyncContext: GLib.MainContext, cancellable: Gio.Cancellable | null, callback: ProxyResolverCallback): void
    // Has conflict: getProxySync(msg: Message, cancellable: Gio.Cancellable | null): [ /* returnType */ number, /* addr */ Address ]

    // Own virtual methods of Soup-2.4.Soup.ProxyResolver

    getProxyAsync(msg: Message, asyncContext: GLib.MainContext, cancellable: Gio.Cancellable | null, callback: ProxyResolverCallback): void
    getProxySync(msg: Message, cancellable: Gio.Cancellable | null): [ /* returnType */ number, /* addr */ Address ]

    // Class property signals of Soup-2.4.Soup.ProxyResolver

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

class ProxyResolver extends GObject.Object {

    // Own properties of Soup-2.4.Soup.ProxyResolver

    static name: string

    // Constructors of Soup-2.4.Soup.ProxyResolver

    constructor(config?: ProxyResolver.ConstructorProperties) 
    _init(config?: ProxyResolver.ConstructorProperties): void
}

module ProxyURIResolver {

    // Constructor properties interface

    interface ConstructorProperties extends SessionFeature.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface ProxyURIResolver extends SessionFeature {

    // Own properties of Soup-2.4.Soup.ProxyURIResolver

    __gtype__: number

    // Owm methods of Soup-2.4.Soup.ProxyURIResolver

    // Has conflict: getProxyUriAsync(uri: URI, asyncContext: GLib.MainContext | null, cancellable: Gio.Cancellable | null, callback: ProxyURIResolverCallback): void
    // Has conflict: getProxyUriSync(uri: URI, cancellable: Gio.Cancellable | null): [ /* returnType */ number, /* proxyUri */ URI ]

    // Own virtual methods of Soup-2.4.Soup.ProxyURIResolver

    /**
     * Asynchronously determines a proxy URI to use for `msg` and calls
     * `callback`.
     * @virtual 
     * @param uri the #SoupURI you want a proxy for
     * @param asyncContext the #GMainContext to invoke `callback` in
     * @param cancellable a #GCancellable, or %NULL
     * @param callback callback to invoke with the proxy address
     */
    getProxyUriAsync(uri: URI, asyncContext: GLib.MainContext | null, cancellable: Gio.Cancellable | null, callback: ProxyURIResolverCallback): void
    /**
     * Synchronously determines a proxy URI to use for `uri`. If `uri`
     * should be sent via proxy, *`proxy_uri` will be set to the URI of the
     * proxy, else it will be set to %NULL.
     * @virtual 
     * @param uri the #SoupURI you want a proxy for
     * @param cancellable a #GCancellable, or %NULL
     * @returns %SOUP_STATUS_OK if successful, or a transport-level error.
     */
    getProxyUriSync(uri: URI, cancellable: Gio.Cancellable | null): [ /* returnType */ number, /* proxyUri */ URI ]

    // Class property signals of Soup-2.4.Soup.ProxyURIResolver

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

class ProxyURIResolver extends GObject.Object {

    // Own properties of Soup-2.4.Soup.ProxyURIResolver

    static name: string

    // Constructors of Soup-2.4.Soup.ProxyURIResolver

    constructor(config?: ProxyURIResolver.ConstructorProperties) 
    _init(config?: ProxyURIResolver.ConstructorProperties): void
}

module SessionFeature {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface SessionFeature {

    // Own properties of Soup-2.4.Soup.SessionFeature

    __gtype__: number

    // Owm methods of Soup-2.4.Soup.SessionFeature

    // Has conflict: addFeature(type: GObject.GType): boolean
    // Has conflict: attach(session: Session): void
    // Has conflict: detach(session: Session): void
    // Has conflict: hasFeature(type: GObject.GType): boolean
    // Has conflict: removeFeature(type: GObject.GType): boolean

    // Own virtual methods of Soup-2.4.Soup.SessionFeature

    /**
     * Adds a "sub-feature" of type `type` to the base feature `feature`.
     * This is used for features that can be extended with multiple
     * different types. Eg, the authentication manager can be extended
     * with subtypes of #SoupAuth.
     * @virtual 
     * @param type the #GType of a "sub-feature"
     * @returns %TRUE if @feature accepted @type as a subfeature.
     */
    addFeature(type: GObject.GType): boolean
    attach(session: Session): void
    detach(session: Session): void
    /**
     * Tests if `feature` has a "sub-feature" of type `type`. See
     * soup_session_feature_add_feature().
     * @virtual 
     * @param type the #GType of a "sub-feature"
     * @returns %TRUE if @feature has a subfeature of type @type
     */
    hasFeature(type: GObject.GType): boolean
    /**
     * Removes the "sub-feature" of type `type` from the base feature
     * `feature`. See soup_session_feature_add_feature().
     * @virtual 
     * @param type the #GType of a "sub-feature"
     * @returns %TRUE if @type was removed from @feature
     */
    removeFeature(type: GObject.GType): boolean
    requestQueued(session: Session, msg: Message): void
    requestStarted(session: Session, msg: Message, socket: Socket): void
    requestUnqueued(session: Session, msg: Message): void

    // Class property signals of Soup-2.4.Soup.SessionFeature

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
 * An object that implement some sort of optional feature for
 * #SoupSession.
 * @interface 
 */
class SessionFeature extends GObject.Object {

    // Own properties of Soup-2.4.Soup.SessionFeature

    static name: string

    // Constructors of Soup-2.4.Soup.SessionFeature

    constructor(config?: SessionFeature.ConstructorProperties) 
    _init(config?: SessionFeature.ConstructorProperties): void
}

module Address {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.SocketConnectable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Soup-2.4.Soup.Address

        family?: AddressFamily | null
        name?: string | null
        port?: number | null
        protocol?: string | null
        sockaddr?: any | null
    }

}

interface Address extends Gio.SocketConnectable {

    // Own properties of Soup-2.4.Soup.Address

    readonly family: AddressFamily
    readonly name: string | null
    readonly physical: string | null
    readonly port: number
    readonly protocol: string | null
    readonly sockaddr: any
    __gtype__: number

    // Own fields of Soup-2.4.Soup.Address

    parent: GObject.Object

    // Owm methods of Soup-2.4.Soup.Address

    /**
     * Tests if `addr1` and `addr2` have the same IP address. This method
     * can be used with soup_address_hash_by_ip() to create a
     * #GHashTable that hashes on IP address.
     * 
     * This would be used to distinguish hosts in situations where
     * different virtual hosts on the same IP address should be considered
     * the same. Eg, if "www.example.com" and "www.example.net" have the
     * same IP address, then a single connection can be used to talk
     * to either of them.
     * 
     * See also soup_address_equal_by_name(), which compares by name
     * rather than by IP address.
     * @param addr2 another #SoupAddress with a resolved   IP address
     * @returns whether or not @addr1 and @addr2 have the same IP address.
     */
    equalByIp(addr2: Address): boolean
    /**
     * Tests if `addr1` and `addr2` have the same "name". This method can be
     * used with soup_address_hash_by_name() to create a #GHashTable that
     * hashes on address "names".
     * 
     * Comparing by name normally means comparing the addresses by their
     * hostnames. But if the address was originally created using an IP
     * address literal, then it will be compared by that instead.
     * 
     * In particular, if "www.example.com" has the IP address 10.0.0.1,
     * and `addr1` was created with the name "www.example.com" and `addr2`
     * was created with the name "10.0.0.1", then they will compare as
     * unequal for purposes of soup_address_equal_by_name().
     * 
     * This would be used to distinguish hosts in situations where
     * different virtual hosts on the same IP address should be considered
     * different. Eg, for purposes of HTTP authentication or cookies, two
     * hosts with the same IP address but different names are considered
     * to be different hosts.
     * 
     * See also soup_address_equal_by_ip(), which compares by IP address
     * rather than by name.
     * @param addr2 another #SoupAddress with a resolved   name
     * @returns whether or not @addr1 and @addr2 have the same name
     */
    equalByName(addr2: Address): boolean
    /**
     * Creates a new #GSocketAddress corresponding to `addr` (which is assumed
     * to only have one socket address associated with it).
     * @returns a new #GSocketAddress
     */
    getGsockaddr(): Gio.SocketAddress
    /**
     * Returns the hostname associated with `addr`.
     * 
     * This method is not thread-safe; if you call it while `addr` is being
     * resolved in another thread, it may return garbage. You can use
     * soup_address_is_resolved() to safely test whether or not an address
     * is resolved before fetching its name or address.
     * @returns the hostname, or %NULL if it is not known.
     */
    getName(): string | null
    /**
     * Returns the physical address associated with `addr` as a string.
     * (Eg, "127.0.0.1"). If the address is not yet known, returns %NULL.
     * 
     * This method is not thread-safe; if you call it while `addr` is being
     * resolved in another thread, it may return garbage. You can use
     * soup_address_is_resolved() to safely test whether or not an address
     * is resolved before fetching its name or address.
     * @returns the physical address, or %NULL
     */
    getPhysical(): string | null
    /**
     * Returns the port associated with `addr`.
     * @returns the port
     */
    getPort(): number
    /**
     * Returns the sockaddr associated with `addr,` with its length in
     * *`len`. If the sockaddr is not yet known, returns %NULL.
     * 
     * This method is not thread-safe; if you call it while `addr` is being
     * resolved in another thread, it may return garbage. You can use
     * soup_address_is_resolved() to safely test whether or not an address
     * is resolved before fetching its name or address.
     * @returns the sockaddr, or %NULL
     */
    getSockaddr(): [ /* returnType */ any | null, /* len */ number ]
    /**
     * A hash function (for #GHashTable) that corresponds to
     * soup_address_equal_by_ip(), qv
     * @returns the IP-based hash value for @addr.
     */
    hashByIp(): number
    /**
     * A hash function (for #GHashTable) that corresponds to
     * soup_address_equal_by_name(), qv
     * @returns the named-based hash value for @addr.
     */
    hashByName(): number
    /**
     * Tests if `addr` has already been resolved. Unlike the other
     * #SoupAddress "get" methods, this is safe to call when `addr` might
     * be being resolved in another thread.
     * @returns %TRUE if @addr has been resolved.
     */
    isResolved(): boolean
    /**
     * Asynchronously resolves the missing half of `addr` (its IP address
     * if it was created with soup_address_new(), or its hostname if it
     * was created with soup_address_new_from_sockaddr() or
     * soup_address_new_any().)
     * 
     * If `cancellable` is non-%NULL, it can be used to cancel the
     * resolution. `callback` will still be invoked in this case, with a
     * status of %SOUP_STATUS_CANCELLED.
     * 
     * It is safe to call this more than once on a given address, from the
     * same thread, with the same `async_context` (and doing so will not
     * result in redundant DNS queries being made). But it is not safe to
     * call from multiple threads, or with different `async_contexts,` or
     * mixed with calls to soup_address_resolve_sync().
     * @param asyncContext the #GMainContext to call `callback` from
     * @param cancellable a #GCancellable object, or %NULL
     * @param callback callback to call with the result
     */
    resolveAsync(asyncContext: GLib.MainContext | null, cancellable: Gio.Cancellable | null, callback: AddressCallback): void
    /**
     * Synchronously resolves the missing half of `addr,` as with
     * soup_address_resolve_async().
     * 
     * If `cancellable` is non-%NULL, it can be used to cancel the
     * resolution. soup_address_resolve_sync() will then return a status
     * of %SOUP_STATUS_CANCELLED.
     * 
     * It is safe to call this more than once, even from different
     * threads, but it is not safe to mix calls to
     * soup_address_resolve_sync() with calls to
     * soup_address_resolve_async() on the same address.
     * @param cancellable a #GCancellable object, or %NULL
     * @returns %SOUP_STATUS_OK, %SOUP_STATUS_CANT_RESOLVE, or %SOUP_STATUS_CANCELLED.
     */
    resolveSync(cancellable: Gio.Cancellable | null): number

    // Class property signals of Soup-2.4.Soup.Address

    connect(sigName: "notify::family", callback: (...args: any[]) => void): number
    on(sigName: "notify::family", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::family", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::family", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::family", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::physical", callback: (...args: any[]) => void): number
    on(sigName: "notify::physical", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::physical", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::physical", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::physical", ...args: any[]): void
    connect(sigName: "notify::port", callback: (...args: any[]) => void): number
    on(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::port", ...args: any[]): void
    connect(sigName: "notify::protocol", callback: (...args: any[]) => void): number
    on(sigName: "notify::protocol", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::protocol", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::protocol", ...args: any[]): void
    connect(sigName: "notify::sockaddr", callback: (...args: any[]) => void): number
    on(sigName: "notify::sockaddr", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sockaddr", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sockaddr", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sockaddr", ...args: any[]): void
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

class Address extends GObject.Object {

    // Own properties of Soup-2.4.Soup.Address

    static name: string

    // Constructors of Soup-2.4.Soup.Address

    constructor(config?: Address.ConstructorProperties) 
    /**
     * Creates a #SoupAddress from `name` and `port`. The #SoupAddress's IP
     * address may not be available right away; the caller can call
     * soup_address_resolve_async() or soup_address_resolve_sync() to
     * force a DNS resolution.
     * @constructor 
     * @param name a hostname or physical address
     * @param port a port number
     * @returns a #SoupAddress
     */
    constructor(name: string | null, port: number) 
    /**
     * Creates a #SoupAddress from `name` and `port`. The #SoupAddress's IP
     * address may not be available right away; the caller can call
     * soup_address_resolve_async() or soup_address_resolve_sync() to
     * force a DNS resolution.
     * @constructor 
     * @param name a hostname or physical address
     * @param port a port number
     * @returns a #SoupAddress
     */
    static new(name: string | null, port: number): Address
    /**
     * Returns a #SoupAddress corresponding to the "any" address
     * for `family` (or %NULL if `family` isn't supported), suitable for
     * using as a listening #SoupSocket.
     * @constructor 
     * @param family the address family
     * @param port the port number (usually %SOUP_ADDRESS_ANY_PORT)
     * @returns the new #SoupAddress
     */
    static newAny(family: AddressFamily, port: number): Address
    /**
     * Returns a #SoupAddress equivalent to `sa` (or %NULL if `sa'`s
     * address family isn't supported)
     * @constructor 
     * @param sa a pointer to a sockaddr
     * @param len size of `sa`
     * @returns the new #SoupAddress
     */
    static newFromSockaddr(sa: any | null, len: number): Address
    _init(config?: Address.ConstructorProperties): void
}

module Auth {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Soup-2.4.Soup.Auth

        host?: string | null
        isForProxy?: boolean | null
        realm?: string | null
    }

}

interface Auth {

    // Own properties of Soup-2.4.Soup.Auth

    host: string | null
    // Has conflict: readonly isAuthenticated: boolean
    isForProxy: boolean
    readonly schemeName: string | null
    __gtype__: number

    // Own fields of Soup-2.4.Soup.Auth

    parent: GObject.Object
    realm: string | null

    // Owm methods of Soup-2.4.Soup.Auth

    // Has conflict: authenticate(username: string | null, password: string | null): void
    // Has conflict: canAuthenticate(): boolean
    // Has conflict: getAuthorization(msg: Message): string | null
    /**
     * Returns the host that `auth` is associated with.
     * @returns the hostname
     */
    getHost(): string | null
    /**
     * Gets an opaque identifier for `auth,` for use as a hash key or the
     * like. #SoupAuth objects from the same server with the same
     * identifier refer to the same authentication domain (eg, the URLs
     * associated with them take the same usernames and passwords).
     * @returns the identifier
     */
    getInfo(): string | null
    // Has conflict: getProtectionSpace(sourceUri: URI): string[]
    /**
     * Returns `auth'`s realm. This is an identifier that distinguishes
     * separate authentication spaces on a given server, and may be some
     * string that is meaningful to the user. (Although it is probably not
     * localized.)
     * @returns the realm name
     */
    getRealm(): string | null
    getSavedPassword(user: string | null): string | null
    getSavedUsers(): string[]
    /**
     * Returns `auth'`s scheme name. (Eg, "Basic", "Digest", or "NTLM")
     * @returns the scheme name
     */
    getSchemeName(): string | null
    hasSavedPassword(username: string | null, password: string | null): void
    // Has conflict: isReady(msg: Message): boolean
    savePassword(username: string | null, password: string | null): void
    // Has conflict: update(msg: Message, authHeader: string | null): boolean

    // Own virtual methods of Soup-2.4.Soup.Auth

    /**
     * Call this on an auth to authenticate it; normally this will cause
     * the auth's message to be requeued with the new authentication info.
     * @virtual 
     * @param username the username provided by the user or client
     * @param password the password provided by the user or client
     */
    authenticate(username: string | null, password: string | null): void
    /**
     * Tests if `auth` is able to authenticate by providing credentials to the
     * soup_auth_authenticate().
     * @virtual 
     * @returns %TRUE if @auth is able to accept credentials.
     */
    canAuthenticate(): boolean
    /**
     * Generates an appropriate "Authorization" header for `msg`. (The
     * session will only call this if soup_auth_is_authenticated()
     * returned %TRUE.)
     * @virtual 
     * @param msg the #SoupMessage to be authorized
     * @returns the "Authorization" header, which must be freed.
     */
    getAuthorization(msg: Message): string | null
    /**
     * Returns a list of paths on the server which `auth` extends over.
     * (All subdirectories of these paths are also assumed to be part
     * of `auth'`s protection space, unless otherwise discovered not to
     * be.)
     * @virtual 
     * @param sourceUri the URI of the request that `auth` was generated in response to.
     * @returns the list of paths, which can be freed with soup_auth_free_protection_space().
     */
    getProtectionSpace(sourceUri: URI): string[]
    /**
     * Tests if `auth` has been given a username and password
     * @virtual 
     * @returns %TRUE if @auth has been given a username and password
     */
    isAuthenticated(): boolean
    /**
     * Tests if `auth` is ready to make a request for `msg` with. For most
     * auths, this is equivalent to soup_auth_is_authenticated(), but for
     * some auth types (eg, NTLM), the auth may be sendable (eg, as an
     * authentication request) even before it is authenticated.
     * @virtual 
     * @param msg a #SoupMessage
     * @returns %TRUE if @auth is ready to make a request with.
     */
    isReady(msg: Message): boolean
    /**
     * Updates `auth` with the information from `msg` and `auth_header,`
     * possibly un-authenticating it. As with soup_auth_new(), this is
     * normally only used by #SoupSession.
     * @virtual 
     * @param msg the #SoupMessage `auth` is being updated for
     * @param authHeader the WWW-Authenticate/Proxy-Authenticate header
     * @returns %TRUE if @auth is still a valid (but potentially unauthenticated) #SoupAuth. %FALSE if something about @auth_params could not be parsed or incorporated into @auth at all.
     */
    update(msg: Message, authHeader: GLib.HashTable): boolean

    // Class property signals of Soup-2.4.Soup.Auth

    connect(sigName: "notify::host", callback: (...args: any[]) => void): number
    on(sigName: "notify::host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::host", ...args: any[]): void
    connect(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-authenticated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-authenticated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-authenticated", ...args: any[]): void
    connect(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-for-proxy", ...args: any[]): void
    connect(sigName: "notify::scheme-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::scheme-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scheme-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scheme-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scheme-name", ...args: any[]): void
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
 * The abstract base class for handling authentication. Specific HTTP
 * Authentication mechanisms are implemented by its subclasses, but
 * applications never need to be aware of the specific subclasses
 * being used.
 * @class 
 */
class Auth extends GObject.Object {

    // Own properties of Soup-2.4.Soup.Auth

    static name: string

    // Constructors of Soup-2.4.Soup.Auth

    constructor(config?: Auth.ConstructorProperties) 
    /**
     * Creates a new #SoupAuth of type `type` with the information from
     * `msg` and `auth_header`.
     * 
     * This is called by #SoupSession; you will normally not create auths
     * yourself.
     * @constructor 
     * @param type the type of auth to create (a subtype of #SoupAuth)
     * @param msg the #SoupMessage the auth is being created for
     * @param authHeader the WWW-Authenticate/Proxy-Authenticate header
     * @returns the new #SoupAuth, or %NULL if it could not be created
     */
    constructor(type: GObject.GType, msg: Message, authHeader: string | null) 
    /**
     * Creates a new #SoupAuth of type `type` with the information from
     * `msg` and `auth_header`.
     * 
     * This is called by #SoupSession; you will normally not create auths
     * yourself.
     * @constructor 
     * @param type the type of auth to create (a subtype of #SoupAuth)
     * @param msg the #SoupMessage the auth is being created for
     * @param authHeader the WWW-Authenticate/Proxy-Authenticate header
     * @returns the new #SoupAuth, or %NULL if it could not be created
     */
    static new(type: GObject.GType, msg: Message, authHeader: string | null): Auth
    _init(config?: Auth.ConstructorProperties): void
}

module AuthBasic {

    // Constructor properties interface

    interface ConstructorProperties extends Auth.ConstructorProperties {
    }

}

interface AuthBasic {

    // Own properties of Soup-2.4.Soup.AuthBasic

    __gtype__: number

    // Class property signals of Soup-2.4.Soup.AuthBasic

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::host", callback: (...args: any[]) => void): number
    on(sigName: "notify::host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::host", ...args: any[]): void
    connect(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-authenticated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-authenticated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-authenticated", ...args: any[]): void
    connect(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-for-proxy", ...args: any[]): void
    connect(sigName: "notify::scheme-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::scheme-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scheme-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scheme-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scheme-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class AuthBasic extends Auth {

    // Own properties of Soup-2.4.Soup.AuthBasic

    static name: string

    // Constructors of Soup-2.4.Soup.AuthBasic

    constructor(config?: AuthBasic.ConstructorProperties) 
    _init(config?: AuthBasic.ConstructorProperties): void
}

module AuthDigest {

    // Constructor properties interface

    interface ConstructorProperties extends Auth.ConstructorProperties {
    }

}

interface AuthDigest {

    // Own properties of Soup-2.4.Soup.AuthDigest

    __gtype__: number

    // Class property signals of Soup-2.4.Soup.AuthDigest

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::host", callback: (...args: any[]) => void): number
    on(sigName: "notify::host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::host", ...args: any[]): void
    connect(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-authenticated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-authenticated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-authenticated", ...args: any[]): void
    connect(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-for-proxy", ...args: any[]): void
    connect(sigName: "notify::scheme-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::scheme-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scheme-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scheme-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scheme-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class AuthDigest extends Auth {

    // Own properties of Soup-2.4.Soup.AuthDigest

    static name: string

    // Constructors of Soup-2.4.Soup.AuthDigest

    constructor(config?: AuthDigest.ConstructorProperties) 
    _init(config?: AuthDigest.ConstructorProperties): void
}

module AuthDomain {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Soup-2.4.Soup.AuthDomain

        addPath?: string | null
        /**
         * The #SoupAuthDomainFilter for the domain
         */
        filter?: AuthDomainFilter | null
        filterData?: any | null
        /**
         * The #SoupAuthDomainGenericAuthCallback for the domain
         */
        genericAuthCallback?: AuthDomainGenericAuthCallback | null
        genericAuthData?: any | null
        proxy?: boolean | null
        realm?: string | null
        removePath?: string | null
    }

}

interface AuthDomain {

    // Own properties of Soup-2.4.Soup.AuthDomain

    addPath: string | null
    /**
     * The #SoupAuthDomainFilter for the domain
     */
    filter: AuthDomainFilter
    filterData: any
    /**
     * The #SoupAuthDomainGenericAuthCallback for the domain
     */
    genericAuthCallback: AuthDomainGenericAuthCallback
    genericAuthData: any
    readonly proxy: boolean
    readonly realm: string | null
    removePath: string | null
    __gtype__: number

    // Own fields of Soup-2.4.Soup.AuthDomain

    parent: GObject.Object

    // Owm methods of Soup-2.4.Soup.AuthDomain

    // Has conflict: accepts(msg: Message): string | null
    // Has conflict: challenge(msg: Message): void
    // Has conflict: checkPassword(msg: Message, username: string | null, password: string | null): boolean
    /**
     * Checks if `domain` requires `msg` to be authenticated (according to
     * its paths and filter function). This does not actually look at
     * whether `msg` <emphasis>is</emphasis> authenticated, merely whether
     * or not it needs to be.
     * 
     * This is used by #SoupServer internally and is probably of no use to
     * anyone else.
     * @param msg a #SoupMessage
     * @returns %TRUE if @domain requires @msg to be authenticated
     */
    covers(msg: Message): boolean
    /**
     * Gets the realm name associated with `domain`
     * @returns @domain's realm
     */
    getRealm(): string | null
    /**
     * Adds `filter` as an authentication filter to `domain`. The filter
     * gets a chance to bypass authentication for certain requests that
     * would otherwise require it. Eg, it might check the message's path
     * in some way that is too complicated to do via the other methods, or
     * it might check the message's method, and allow GETs but not PUTs.
     * 
     * The filter function returns %TRUE if the request should still
     * require authentication, or %FALSE if authentication is unnecessary
     * for this request.
     * 
     * To help prevent security holes, your filter should return %TRUE by
     * default, and only return %FALSE under specifically-tested
     * circumstances, rather than the other way around. Eg, in the example
     * above, where you want to authenticate PUTs but not GETs, you should
     * check if the method is GET and return %FALSE in that case, and then
     * return %TRUE for all other methods (rather than returning %TRUE for
     * PUT and %FALSE for all other methods). This way if it turned out
     * (now or later) that some paths supported additional methods besides
     * GET and PUT, those methods would default to being NOT allowed for
     * unauthenticated users.
     * 
     * You can also set the filter by setting the %SOUP_AUTH_DOMAIN_FILTER
     * and %SOUP_AUTH_DOMAIN_FILTER_DATA properties, which can also be
     * used to set the filter at construct time.
     * @param filter the auth filter for `domain`
     */
    setFilter(filter: AuthDomainFilter): void
    /**
     * Sets `auth_callback` as an authentication-handling callback for
     * `domain`. Whenever a request comes in to `domain` which cannot be
     * authenticated via a domain-specific auth callback (eg,
     * #SoupAuthDomainDigestAuthCallback), the generic auth callback
     * will be invoked. See #SoupAuthDomainGenericAuthCallback for information
     * on what the callback should do.
     * @param authCallback the auth callback
     */
    setGenericAuthCallback(authCallback: AuthDomainGenericAuthCallback): void
    tryGenericAuthCallback(msg: Message, username: string | null): boolean

    // Own virtual methods of Soup-2.4.Soup.AuthDomain

    accepts(msg: Message, header: string | null): string | null
    /**
     * Adds a "WWW-Authenticate" or "Proxy-Authenticate" header to `msg,`
     * requesting that the client authenticate, and sets `msg'`s status
     * accordingly.
     * 
     * This is used by #SoupServer internally and is probably of no use to
     * anyone else.
     * @virtual 
     * @param msg a #SoupMessage
     */
    challenge(msg: Message): string | null
    /**
     * Checks if `msg` authenticates to `domain` via `username` and
     * `password`. This would normally be called from a
     * #SoupAuthDomainGenericAuthCallback.
     * @virtual 
     * @param msg a #SoupMessage
     * @param username a username
     * @param password a password
     * @returns whether or not the message is authenticated
     */
    checkPassword(msg: Message, username: string | null, password: string | null): boolean

    // Class property signals of Soup-2.4.Soup.AuthDomain

    connect(sigName: "notify::add-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::add-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::add-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::add-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::add-path", ...args: any[]): void
    connect(sigName: "notify::filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filter", ...args: any[]): void
    connect(sigName: "notify::filter-data", callback: (...args: any[]) => void): number
    on(sigName: "notify::filter-data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filter-data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filter-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filter-data", ...args: any[]): void
    connect(sigName: "notify::generic-auth-callback", callback: (...args: any[]) => void): number
    on(sigName: "notify::generic-auth-callback", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::generic-auth-callback", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::generic-auth-callback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::generic-auth-callback", ...args: any[]): void
    connect(sigName: "notify::generic-auth-data", callback: (...args: any[]) => void): number
    on(sigName: "notify::generic-auth-data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::generic-auth-data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::generic-auth-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::generic-auth-data", ...args: any[]): void
    connect(sigName: "notify::proxy", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy", ...args: any[]): void
    connect(sigName: "notify::realm", callback: (...args: any[]) => void): number
    on(sigName: "notify::realm", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::realm", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::realm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::realm", ...args: any[]): void
    connect(sigName: "notify::remove-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::remove-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::remove-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::remove-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::remove-path", ...args: any[]): void
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

class AuthDomain extends GObject.Object {

    // Own properties of Soup-2.4.Soup.AuthDomain

    static name: string

    // Constructors of Soup-2.4.Soup.AuthDomain

    constructor(config?: AuthDomain.ConstructorProperties) 
    _init(config?: AuthDomain.ConstructorProperties): void
}

module AuthDomainBasic {

    // Constructor properties interface

    interface ConstructorProperties extends AuthDomain.ConstructorProperties {

        // Own constructor properties of Soup-2.4.Soup.AuthDomainBasic

        /**
         * The #SoupAuthDomainBasicAuthCallback
         */
        authCallback?: AuthDomainBasicAuthCallback | null
        /**
         * The data to pass to the #SoupAuthDomainBasicAuthCallback
         */
        authData?: any | null
    }

}

interface AuthDomainBasic {

    // Own properties of Soup-2.4.Soup.AuthDomainBasic

    /**
     * The #SoupAuthDomainBasicAuthCallback
     */
    authCallback: AuthDomainBasicAuthCallback
    /**
     * The data to pass to the #SoupAuthDomainBasicAuthCallback
     */
    authData: any
    __gtype__: number

    // Own fields of Soup-2.4.Soup.AuthDomainBasic

    parent: AuthDomain & GObject.Object

    // Owm methods of Soup-2.4.Soup.AuthDomainBasic

    /**
     * Sets the callback that `domain` will use to authenticate incoming
     * requests. For each request containing authorization, `domain` will
     * invoke the callback, and then either accept or reject the request
     * based on `callback'`s return value.
     * 
     * You can also set the auth callback by setting the
     * %SOUP_AUTH_DOMAIN_BASIC_AUTH_CALLBACK and
     * %SOUP_AUTH_DOMAIN_BASIC_AUTH_DATA properties, which can also be
     * used to set the callback at construct time.
     * @param callback the callback
     */
    setAuthCallback(callback: AuthDomainBasicAuthCallback): void

    // Class property signals of Soup-2.4.Soup.AuthDomainBasic

    connect(sigName: "notify::auth-callback", callback: (...args: any[]) => void): number
    on(sigName: "notify::auth-callback", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auth-callback", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auth-callback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auth-callback", ...args: any[]): void
    connect(sigName: "notify::auth-data", callback: (...args: any[]) => void): number
    on(sigName: "notify::auth-data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auth-data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auth-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auth-data", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::add-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::add-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::add-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::add-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::add-path", ...args: any[]): void
    connect(sigName: "notify::filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filter", ...args: any[]): void
    connect(sigName: "notify::filter-data", callback: (...args: any[]) => void): number
    on(sigName: "notify::filter-data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filter-data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filter-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filter-data", ...args: any[]): void
    connect(sigName: "notify::generic-auth-callback", callback: (...args: any[]) => void): number
    on(sigName: "notify::generic-auth-callback", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::generic-auth-callback", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::generic-auth-callback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::generic-auth-callback", ...args: any[]): void
    connect(sigName: "notify::generic-auth-data", callback: (...args: any[]) => void): number
    on(sigName: "notify::generic-auth-data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::generic-auth-data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::generic-auth-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::generic-auth-data", ...args: any[]): void
    connect(sigName: "notify::proxy", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy", ...args: any[]): void
    connect(sigName: "notify::realm", callback: (...args: any[]) => void): number
    on(sigName: "notify::realm", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::realm", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::realm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::realm", ...args: any[]): void
    connect(sigName: "notify::remove-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::remove-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::remove-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::remove-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::remove-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class AuthDomainBasic extends AuthDomain {

    // Own properties of Soup-2.4.Soup.AuthDomainBasic

    static name: string

    // Constructors of Soup-2.4.Soup.AuthDomainBasic

    constructor(config?: AuthDomainBasic.ConstructorProperties) 
    _init(config?: AuthDomainBasic.ConstructorProperties): void
}

module AuthDomainDigest {

    // Constructor properties interface

    interface ConstructorProperties extends AuthDomain.ConstructorProperties {

        // Own constructor properties of Soup-2.4.Soup.AuthDomainDigest

        /**
         * The #SoupAuthDomainDigestAuthCallback
         */
        authCallback?: AuthDomainDigestAuthCallback | null
        /**
         * The data to pass to the #SoupAuthDomainDigestAuthCallback
         */
        authData?: any | null
    }

}

interface AuthDomainDigest {

    // Own properties of Soup-2.4.Soup.AuthDomainDigest

    /**
     * The #SoupAuthDomainDigestAuthCallback
     */
    authCallback: AuthDomainDigestAuthCallback
    /**
     * The data to pass to the #SoupAuthDomainDigestAuthCallback
     */
    authData: any
    __gtype__: number

    // Own fields of Soup-2.4.Soup.AuthDomainDigest

    parent: AuthDomain & GObject.Object

    // Owm methods of Soup-2.4.Soup.AuthDomainDigest

    /**
     * Sets the callback that `domain` will use to authenticate incoming
     * requests. For each request containing authorization, `domain` will
     * invoke the callback, and then either accept or reject the request
     * based on `callback'`s return value.
     * 
     * You can also set the auth callback by setting the
     * %SOUP_AUTH_DOMAIN_DIGEST_AUTH_CALLBACK and
     * %SOUP_AUTH_DOMAIN_DIGEST_AUTH_DATA properties, which can also be
     * used to set the callback at construct time.
     * @param callback the callback
     */
    setAuthCallback(callback: AuthDomainDigestAuthCallback): void

    // Class property signals of Soup-2.4.Soup.AuthDomainDigest

    connect(sigName: "notify::auth-callback", callback: (...args: any[]) => void): number
    on(sigName: "notify::auth-callback", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auth-callback", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auth-callback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auth-callback", ...args: any[]): void
    connect(sigName: "notify::auth-data", callback: (...args: any[]) => void): number
    on(sigName: "notify::auth-data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auth-data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auth-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auth-data", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::add-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::add-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::add-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::add-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::add-path", ...args: any[]): void
    connect(sigName: "notify::filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filter", ...args: any[]): void
    connect(sigName: "notify::filter-data", callback: (...args: any[]) => void): number
    on(sigName: "notify::filter-data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filter-data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filter-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filter-data", ...args: any[]): void
    connect(sigName: "notify::generic-auth-callback", callback: (...args: any[]) => void): number
    on(sigName: "notify::generic-auth-callback", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::generic-auth-callback", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::generic-auth-callback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::generic-auth-callback", ...args: any[]): void
    connect(sigName: "notify::generic-auth-data", callback: (...args: any[]) => void): number
    on(sigName: "notify::generic-auth-data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::generic-auth-data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::generic-auth-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::generic-auth-data", ...args: any[]): void
    connect(sigName: "notify::proxy", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy", ...args: any[]): void
    connect(sigName: "notify::realm", callback: (...args: any[]) => void): number
    on(sigName: "notify::realm", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::realm", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::realm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::realm", ...args: any[]): void
    connect(sigName: "notify::remove-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::remove-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::remove-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::remove-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::remove-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class AuthDomainDigest extends AuthDomain {

    // Own properties of Soup-2.4.Soup.AuthDomainDigest

    static name: string

    // Constructors of Soup-2.4.Soup.AuthDomainDigest

    constructor(config?: AuthDomainDigest.ConstructorProperties) 
    _init(config?: AuthDomainDigest.ConstructorProperties): void
    /**
     * Encodes the username/realm/password triplet for Digest
     * authentication. (That is, it returns a stringified MD5 hash of
     * `username,` `realm,` and `password` concatenated together). This is
     * the form that is needed as the return value of
     * #SoupAuthDomainDigest's auth handler.
     * 
     * For security reasons, you should store the encoded hash, rather
     * than storing the cleartext password itself and calling this method
     * only when you need to verify it. This way, if your server is
     * compromised, the attackers will not gain access to cleartext
     * passwords which might also be usable at other sites. (Note also
     * that the encoded password returned by this method is identical to
     * the encoded password stored in an Apache .htdigest file.)
     * @param username a username
     * @param realm an auth realm name
     * @param password the password for `username` in `realm`
     * @returns the encoded password
     */
    static encodePassword(username: string | null, realm: string | null, password: string | null): string | null
}

module AuthManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `authenticate`
     */
    interface AuthenticateSignalCallback {
        (msg: Message, auth: Auth, retrying: boolean): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends SessionFeature.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface AuthManager extends SessionFeature {

    // Own properties of Soup-2.4.Soup.AuthManager

    __gtype__: number

    // Own fields of Soup-2.4.Soup.AuthManager

    parent: GObject.Object
    priv: AuthManagerPrivate

    // Owm methods of Soup-2.4.Soup.AuthManager

    /**
     * Clear all credentials cached by `manager`
     */
    clearCachedCredentials(): void
    /**
     * Records that `auth` is to be used under `uri,` as though a
     * WWW-Authenticate header had been received at that URI. This can be
     * used to "preload" `manager'`s auth cache, to avoid an extra HTTP
     * round trip in the case where you know ahead of time that a 401
     * response will be returned.
     * 
     * This is only useful for authentication types where the initial
     * Authorization header does not depend on any additional information
     * from the server. (Eg, Basic or NTLM, but not Digest.)
     * @param uri the #SoupURI under which `auth` is to be used
     * @param auth the #SoupAuth to use
     */
    useAuth(uri: URI, auth: Auth): void

    // Own virtual methods of Soup-2.4.Soup.AuthManager

    authenticate(msg: Message, auth: Auth, retrying: boolean): void

    // Own signals of Soup-2.4.Soup.AuthManager

    connect(sigName: "authenticate", callback: AuthManager.AuthenticateSignalCallback): number
    on(sigName: "authenticate", callback: AuthManager.AuthenticateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: AuthManager.AuthenticateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: AuthManager.AuthenticateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "authenticate", auth: Auth, retrying: boolean, ...args: any[]): void

    // Class property signals of Soup-2.4.Soup.AuthManager

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

class AuthManager extends GObject.Object {

    // Own properties of Soup-2.4.Soup.AuthManager

    static name: string

    // Constructors of Soup-2.4.Soup.AuthManager

    constructor(config?: AuthManager.ConstructorProperties) 
    _init(config?: AuthManager.ConstructorProperties): void
}

module AuthNTLM {

    // Constructor properties interface

    interface ConstructorProperties extends Auth.ConstructorProperties {
    }

}

interface AuthNTLM {

    // Own properties of Soup-2.4.Soup.AuthNTLM

    __gtype__: number

    // Class property signals of Soup-2.4.Soup.AuthNTLM

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::host", callback: (...args: any[]) => void): number
    on(sigName: "notify::host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::host", ...args: any[]): void
    connect(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-authenticated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-authenticated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-authenticated", ...args: any[]): void
    connect(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-for-proxy", ...args: any[]): void
    connect(sigName: "notify::scheme-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::scheme-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scheme-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scheme-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scheme-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class AuthNTLM extends Auth {

    // Own properties of Soup-2.4.Soup.AuthNTLM

    static name: string

    // Constructors of Soup-2.4.Soup.AuthNTLM

    constructor(config?: AuthNTLM.ConstructorProperties) 
    _init(config?: AuthNTLM.ConstructorProperties): void
}

module AuthNegotiate {

    // Constructor properties interface

    interface ConstructorProperties extends Auth.ConstructorProperties {
    }

}

interface AuthNegotiate {

    // Own properties of Soup-2.4.Soup.AuthNegotiate

    __gtype__: number

    // Class property signals of Soup-2.4.Soup.AuthNegotiate

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::host", callback: (...args: any[]) => void): number
    on(sigName: "notify::host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::host", ...args: any[]): void
    connect(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-authenticated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-authenticated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-authenticated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-authenticated", ...args: any[]): void
    connect(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-for-proxy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-for-proxy", ...args: any[]): void
    connect(sigName: "notify::scheme-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::scheme-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scheme-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scheme-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scheme-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class AuthNegotiate extends Auth {

    // Own properties of Soup-2.4.Soup.AuthNegotiate

    static name: string

    // Constructors of Soup-2.4.Soup.AuthNegotiate

    constructor(config?: AuthNegotiate.ConstructorProperties) 
    _init(config?: AuthNegotiate.ConstructorProperties): void
    /**
     * Indicates whether libsoup was built with GSSAPI support. If this is
     * %FALSE, %SOUP_TYPE_AUTH_NEGOTIATE will still be defined and can
     * still be added to a #SoupSession, but libsoup will never attempt to
     * actually use this auth type.
     */
    static supported(): boolean
}

module Cache {

    // Constructor properties interface

    interface ConstructorProperties extends SessionFeature.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Soup-2.4.Soup.Cache

        cacheDir?: string | null
        cacheType?: CacheType | null
    }

}

interface Cache extends SessionFeature {

    // Own properties of Soup-2.4.Soup.Cache

    readonly cacheDir: string | null
    readonly cacheType: CacheType
    __gtype__: number

    // Own fields of Soup-2.4.Soup.Cache

    parentInstance: GObject.Object
    priv: CachePrivate

    // Owm methods of Soup-2.4.Soup.Cache

    /**
     * Will remove all entries in the `cache` plus all the cache files.
     */
    clear(): void
    /**
     * Synchronously writes the cache index out to disk. Contrast with
     * soup_cache_flush(), which writes pending cache
     * <emphasis>entries</emphasis> to disk.
     * 
     * You must call this before exiting if you want your cache data to
     * persist between sessions.
     */
    dump(): void
    /**
     * This function will force all pending writes in the `cache` to be
     * committed to disk. For doing so it will iterate the #GMainContext
     * associated with `cache'`s session as long as needed.
     * 
     * Contrast with soup_cache_dump(), which writes out the cache index
     * file.
     */
    flush(): void
    /**
     * Gets the maximum size of the cache.
     * @returns the maximum size of the cache, in bytes.
     */
    getMaxSize(): number
    /**
     * Loads the contents of `cache'`s index into memory.
     */
    load(): void
    /**
     * Sets the maximum size of the cache.
     * @param maxSize the maximum size of the cache, in bytes
     */
    setMaxSize(maxSize: number): void

    // Own virtual methods of Soup-2.4.Soup.Cache

    getCacheability(msg: Message): Cacheability

    // Class property signals of Soup-2.4.Soup.Cache

    connect(sigName: "notify::cache-dir", callback: (...args: any[]) => void): number
    on(sigName: "notify::cache-dir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cache-dir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cache-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cache-dir", ...args: any[]): void
    connect(sigName: "notify::cache-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::cache-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cache-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cache-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cache-type", ...args: any[]): void
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

class Cache extends GObject.Object {

    // Own properties of Soup-2.4.Soup.Cache

    static name: string

    // Constructors of Soup-2.4.Soup.Cache

    constructor(config?: Cache.ConstructorProperties) 
    /**
     * Creates a new #SoupCache.
     * @constructor 
     * @param cacheDir the directory to store the cached data, or %NULL   to use the default one. Note that since the cache isn't safe to access for   multiple processes at once, and the default directory isn't namespaced by   process, clients are strongly discouraged from passing %NULL.
     * @param cacheType the #SoupCacheType of the cache
     * @returns a new #SoupCache
     */
    constructor(cacheDir: string | null, cacheType: CacheType) 
    /**
     * Creates a new #SoupCache.
     * @constructor 
     * @param cacheDir the directory to store the cached data, or %NULL   to use the default one. Note that since the cache isn't safe to access for   multiple processes at once, and the default directory isn't namespaced by   process, clients are strongly discouraged from passing %NULL.
     * @param cacheType the #SoupCacheType of the cache
     * @returns a new #SoupCache
     */
    static new(cacheDir: string | null, cacheType: CacheType): Cache
    _init(config?: Cache.ConstructorProperties): void
}

module ContentDecoder {

    // Constructor properties interface

    interface ConstructorProperties extends SessionFeature.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface ContentDecoder extends SessionFeature {

    // Own properties of Soup-2.4.Soup.ContentDecoder

    __gtype__: number

    // Own fields of Soup-2.4.Soup.ContentDecoder

    parent: GObject.Object
    priv: ContentDecoderPrivate

    // Class property signals of Soup-2.4.Soup.ContentDecoder

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

class ContentDecoder extends GObject.Object {

    // Own properties of Soup-2.4.Soup.ContentDecoder

    static name: string

    // Constructors of Soup-2.4.Soup.ContentDecoder

    constructor(config?: ContentDecoder.ConstructorProperties) 
    _init(config?: ContentDecoder.ConstructorProperties): void
}

module ContentSniffer {

    // Constructor properties interface

    interface ConstructorProperties extends SessionFeature.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface ContentSniffer extends SessionFeature {

    // Own properties of Soup-2.4.Soup.ContentSniffer

    __gtype__: number

    // Own fields of Soup-2.4.Soup.ContentSniffer

    parent: GObject.Object
    priv: ContentSnifferPrivate

    // Owm methods of Soup-2.4.Soup.ContentSniffer

    // Has conflict: getBufferSize(): number
    // Has conflict: sniff(msg: Message, buffer: Buffer): [ /* returnType */ string | null, /* params */ GLib.HashTable ]

    // Own virtual methods of Soup-2.4.Soup.ContentSniffer

    /**
     * Gets the number of bytes `sniffer` needs in order to properly sniff
     * a buffer.
     * @virtual 
     * @returns the number of bytes to sniff
     */
    getBufferSize(): number
    /**
     * Sniffs `buffer` to determine its Content-Type. The result may also
     * be influenced by the Content-Type declared in `msg'`s response
     * headers.
     * @virtual 
     * @param msg the message to sniff
     * @param buffer a buffer containing the start of `msg'`s response body
     * @returns the sniffed Content-Type of @buffer; this will never be %NULL,   but may be "application/octet-stream".
     */
    sniff(msg: Message, buffer: Buffer): [ /* returnType */ string | null, /* params */ GLib.HashTable ]

    // Class property signals of Soup-2.4.Soup.ContentSniffer

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

class ContentSniffer extends GObject.Object {

    // Own properties of Soup-2.4.Soup.ContentSniffer

    static name: string

    // Constructors of Soup-2.4.Soup.ContentSniffer

    constructor(config?: ContentSniffer.ConstructorProperties) 
    /**
     * Creates a new #SoupContentSniffer.
     * @constructor 
     * @returns a new #SoupContentSniffer
     */
    constructor() 
    /**
     * Creates a new #SoupContentSniffer.
     * @constructor 
     * @returns a new #SoupContentSniffer
     */
    static new(): ContentSniffer
    _init(config?: ContentSniffer.ConstructorProperties): void
}

module CookieJar {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    interface ChangedSignalCallback {
        (oldCookie: Cookie, newCookie: Cookie): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends SessionFeature.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Soup-2.4.Soup.CookieJar

        /**
         * The policy the jar should follow to accept or reject cookies
         */
        acceptPolicy?: CookieJarAcceptPolicy | null
        readOnly?: boolean | null
    }

}

interface CookieJar extends SessionFeature {

    // Own properties of Soup-2.4.Soup.CookieJar

    /**
     * The policy the jar should follow to accept or reject cookies
     */
    acceptPolicy: CookieJarAcceptPolicy
    readonly readOnly: boolean
    __gtype__: number

    // Own fields of Soup-2.4.Soup.CookieJar

    parent: GObject.Object

    // Owm methods of Soup-2.4.Soup.CookieJar

    /**
     * Adds `cookie` to `jar,` emitting the 'changed' signal if we are modifying
     * an existing cookie or adding a valid new cookie ('valid' means
     * that the cookie's expire date is not in the past).
     * 
     * `cookie` will be 'stolen' by the jar, so don't free it afterwards.
     * @param cookie a #SoupCookie
     */
    addCookie(cookie: Cookie): void
    /**
     * Adds `cookie` to `jar,` emitting the 'changed' signal if we are modifying
     * an existing cookie or adding a valid new cookie ('valid' means
     * that the cookie's expire date is not in the past).
     * 
     * `first_party` will be used to reject cookies coming from third party
     * resources in case such a security policy is set in the `jar`.
     * 
     * `uri` will be used to reject setting or overwriting secure cookies
     * from insecure origins. %NULL is treated as secure.
     * 
     * `cookie` will be 'stolen' by the jar, so don't free it afterwards.
     * @param cookie a #SoupCookie
     * @param uri the URI setting the cookie
     * @param firstParty the URI for the main document
     */
    addCookieFull(cookie: Cookie, uri: URI | null, firstParty: URI | null): void
    /**
     * Adds `cookie` to `jar,` emitting the 'changed' signal if we are modifying
     * an existing cookie or adding a valid new cookie ('valid' means
     * that the cookie's expire date is not in the past).
     * 
     * `first_party` will be used to reject cookies coming from third party
     * resources in case such a security policy is set in the `jar`.
     * 
     * `cookie` will be 'stolen' by the jar, so don't free it afterwards.
     * 
     * For secure cookies to work properly you may want to use
     * soup_cookie_jar_add_cookie_full().
     * @param firstParty the URI for the main document
     * @param cookie a #SoupCookie
     */
    addCookieWithFirstParty(firstParty: URI, cookie: Cookie): void
    /**
     * Constructs a #GSList with every cookie inside the `jar`.
     * The cookies in the list are a copy of the original, so
     * you have to free them when you are done with them.
     * @returns a #GSList with all the cookies in the @jar.
     */
    allCookies(): Cookie[]
    /**
     * Deletes `cookie` from `jar,` emitting the 'changed' signal.
     * @param cookie a #SoupCookie
     */
    deleteCookie(cookie: Cookie): void
    /**
     * Gets `jar'`s #SoupCookieJarAcceptPolicy
     * @returns the #SoupCookieJarAcceptPolicy set in the @jar
     */
    getAcceptPolicy(): CookieJarAcceptPolicy
    /**
     * Retrieves the list of cookies that would be sent with a request to `uri`
     * as a #GSList of #SoupCookie objects.
     * 
     * If `for_http` is %TRUE, the return value will include cookies marked
     * "HttpOnly" (that is, cookies that the server wishes to keep hidden
     * from client-side scripting operations such as the JavaScript
     * document.cookies property). Since #SoupCookieJar sets the Cookie
     * header itself when making the actual HTTP request, you should
     * almost certainly be setting `for_http` to %FALSE if you are calling
     * this.
     * @param uri a #SoupURI
     * @param forHttp whether or not the return value is being passed directly to an HTTP operation
     * @returns a #GSList with the cookies in the @jar that would be sent with a request to @uri.
     */
    getCookieList(uri: URI, forHttp: boolean): Cookie[]
    /**
     * This is an extended version of soup_cookie_jar_get_cookie_list() that
     * provides more information required to use SameSite cookies. See the
     * [SameSite cookies spec](https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site-00)
     * for more detailed information.
     * @param uri a #SoupURI
     * @param topLevel a #SoupURI for the top level document
     * @param siteForCookies a #SoupURI indicating the origin to get cookies for
     * @param forHttp whether or not the return value is being passed directly to an HTTP operation
     * @param isSafeMethod if the HTTP method is safe, as defined by RFC 7231, ignored when `for_http` is %FALSE
     * @param isTopLevelNavigation whether or not the HTTP request is part of top level navigation
     * @returns a #GSList with the cookies in the @jar that would be sent with a request to @uri.
     */
    getCookieListWithSameSiteInfo(uri: URI, topLevel: URI | null, siteForCookies: URI | null, forHttp: boolean, isSafeMethod: boolean, isTopLevelNavigation: boolean): Cookie[]
    /**
     * Retrieves (in Cookie-header form) the list of cookies that would
     * be sent with a request to `uri`.
     * 
     * If `for_http` is %TRUE, the return value will include cookies marked
     * "HttpOnly" (that is, cookies that the server wishes to keep hidden
     * from client-side scripting operations such as the JavaScript
     * document.cookies property). Since #SoupCookieJar sets the Cookie
     * header itself when making the actual HTTP request, you should
     * almost certainly be setting `for_http` to %FALSE if you are calling
     * this.
     * @param uri a #SoupURI
     * @param forHttp whether or not the return value is being passed directly to an HTTP operation
     * @returns the cookies, in string form, or %NULL if there are no cookies for @uri.
     */
    getCookies(uri: URI, forHttp: boolean): string | null
    // Has conflict: isPersistent(): boolean
    // Has conflict: save(): void
    /**
     * Sets `policy` as the cookie acceptance policy for `jar`.
     * @param policy a #SoupCookieJarAcceptPolicy
     */
    setAcceptPolicy(policy: CookieJarAcceptPolicy): void
    /**
     * Adds `cookie` to `jar,` exactly as though it had appeared in a
     * Set-Cookie header returned from a request to `uri`.
     * 
     * Keep in mind that if the #SoupCookieJarAcceptPolicy set is either
     * %SOUP_COOKIE_JAR_ACCEPT_NO_THIRD_PARTY or
     * %SOUP_COOKIE_JAR_ACCEPT_GRANDFATHERED_THIRD_PARTY you'll need to use
     * soup_cookie_jar_set_cookie_with_first_party(), otherwise the jar
     * will have no way of knowing if the cookie is being set by a third
     * party or not.
     * @param uri the URI setting the cookie
     * @param cookie the stringified cookie to set
     */
    setCookie(uri: URI, cookie: string | null): void
    /**
     * Adds `cookie` to `jar,` exactly as though it had appeared in a
     * Set-Cookie header returned from a request to `uri`. `first_party`
     * will be used to reject cookies coming from third party resources in
     * case such a security policy is set in the `jar`.
     * @param uri the URI setting the cookie
     * @param firstParty the URI for the main document
     * @param cookie the stringified cookie to set
     */
    setCookieWithFirstParty(uri: URI, firstParty: URI, cookie: string | null): void

    // Own virtual methods of Soup-2.4.Soup.CookieJar

    changed(oldCookie: Cookie, newCookie: Cookie): void
    /**
     * Gets whether `jar` stores cookies persistenly.
     * @virtual 
     * @returns %TRUE if @jar storage is persistent or %FALSE otherwise.
     */
    isPersistent(): boolean
    /**
     * This function exists for backward compatibility, but does not do
     * anything any more; cookie jars are saved automatically when they
     * are changed.
     * @virtual 
     */
    save(): void

    // Own signals of Soup-2.4.Soup.CookieJar

    connect(sigName: "changed", callback: CookieJar.ChangedSignalCallback): number
    on(sigName: "changed", callback: CookieJar.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: CookieJar.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: CookieJar.ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", newCookie: Cookie, ...args: any[]): void

    // Class property signals of Soup-2.4.Soup.CookieJar

    connect(sigName: "notify::accept-policy", callback: (...args: any[]) => void): number
    on(sigName: "notify::accept-policy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accept-policy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accept-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accept-policy", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
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

class CookieJar extends GObject.Object {

    // Own properties of Soup-2.4.Soup.CookieJar

    static name: string

    // Constructors of Soup-2.4.Soup.CookieJar

    constructor(config?: CookieJar.ConstructorProperties) 
    /**
     * Creates a new #SoupCookieJar. The base #SoupCookieJar class does
     * not support persistent storage of cookies; use a subclass for that.
     * @constructor 
     * @returns a new #SoupCookieJar
     */
    constructor() 
    /**
     * Creates a new #SoupCookieJar. The base #SoupCookieJar class does
     * not support persistent storage of cookies; use a subclass for that.
     * @constructor 
     * @returns a new #SoupCookieJar
     */
    static new(): CookieJar
    _init(config?: CookieJar.ConstructorProperties): void
}

module CookieJarDB {

    // Constructor properties interface

    interface ConstructorProperties extends SessionFeature.ConstructorProperties, CookieJar.ConstructorProperties {

        // Own constructor properties of Soup-2.4.Soup.CookieJarDB

        filename?: string | null
    }

}

interface CookieJarDB extends SessionFeature {

    // Own properties of Soup-2.4.Soup.CookieJarDB

    readonly filename: string | null
    __gtype__: number

    // Own fields of Soup-2.4.Soup.CookieJarDB

    parent: CookieJar & GObject.Object

    // Class property signals of Soup-2.4.Soup.CookieJarDB

    connect(sigName: "notify::filename", callback: (...args: any[]) => void): number
    on(sigName: "notify::filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filename", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::accept-policy", callback: (...args: any[]) => void): number
    on(sigName: "notify::accept-policy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accept-policy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accept-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accept-policy", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class CookieJarDB extends CookieJar {

    // Own properties of Soup-2.4.Soup.CookieJarDB

    static name: string

    // Constructors of Soup-2.4.Soup.CookieJarDB

    constructor(config?: CookieJarDB.ConstructorProperties) 
    /**
     * Creates a #SoupCookieJarDB.
     * 
     * `filename` will be read in at startup to create an initial set of
     * cookies. If `read_only` is %FALSE, then the non-session cookies will
     * be written to `filename` when the 'changed' signal is emitted from
     * the jar. (If `read_only` is %TRUE, then the cookie jar will only be
     * used for this session, and changes made to it will be lost when the
     * jar is destroyed.)
     * @constructor 
     * @param filename the filename to read to/write from, or %NULL
     * @param readOnly %TRUE if `filename` is read-only
     * @returns the new #SoupCookieJar
     */
    constructor(filename: string | null, readOnly: boolean) 
    /**
     * Creates a #SoupCookieJarDB.
     * 
     * `filename` will be read in at startup to create an initial set of
     * cookies. If `read_only` is %FALSE, then the non-session cookies will
     * be written to `filename` when the 'changed' signal is emitted from
     * the jar. (If `read_only` is %TRUE, then the cookie jar will only be
     * used for this session, and changes made to it will be lost when the
     * jar is destroyed.)
     * @constructor 
     * @param filename the filename to read to/write from, or %NULL
     * @param readOnly %TRUE if `filename` is read-only
     * @returns the new #SoupCookieJar
     */
    static new(filename: string | null, readOnly: boolean): CookieJarDB

    // Overloads of new

    /**
     * Creates a new #SoupCookieJar. The base #SoupCookieJar class does
     * not support persistent storage of cookies; use a subclass for that.
     * @constructor 
     * @returns a new #SoupCookieJar
     */
    static new(): CookieJar
    _init(config?: CookieJarDB.ConstructorProperties): void
}

module CookieJarText {

    // Constructor properties interface

    interface ConstructorProperties extends SessionFeature.ConstructorProperties, CookieJar.ConstructorProperties {

        // Own constructor properties of Soup-2.4.Soup.CookieJarText

        filename?: string | null
    }

}

interface CookieJarText extends SessionFeature {

    // Own properties of Soup-2.4.Soup.CookieJarText

    readonly filename: string | null
    __gtype__: number

    // Own fields of Soup-2.4.Soup.CookieJarText

    parent: CookieJar & GObject.Object

    // Class property signals of Soup-2.4.Soup.CookieJarText

    connect(sigName: "notify::filename", callback: (...args: any[]) => void): number
    on(sigName: "notify::filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filename", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::accept-policy", callback: (...args: any[]) => void): number
    on(sigName: "notify::accept-policy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accept-policy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accept-policy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accept-policy", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::read-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::read-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class CookieJarText extends CookieJar {

    // Own properties of Soup-2.4.Soup.CookieJarText

    static name: string

    // Constructors of Soup-2.4.Soup.CookieJarText

    constructor(config?: CookieJarText.ConstructorProperties) 
    /**
     * Creates a #SoupCookieJarText.
     * 
     * `filename` will be read in at startup to create an initial set of
     * cookies. If `read_only` is %FALSE, then the non-session cookies will
     * be written to `filename` when the 'changed' signal is emitted from
     * the jar. (If `read_only` is %TRUE, then the cookie jar will only be
     * used for this session, and changes made to it will be lost when the
     * jar is destroyed.)
     * @constructor 
     * @param filename the filename to read to/write from
     * @param readOnly %TRUE if `filename` is read-only
     * @returns the new #SoupCookieJar
     */
    constructor(filename: string | null, readOnly: boolean) 
    /**
     * Creates a #SoupCookieJarText.
     * 
     * `filename` will be read in at startup to create an initial set of
     * cookies. If `read_only` is %FALSE, then the non-session cookies will
     * be written to `filename` when the 'changed' signal is emitted from
     * the jar. (If `read_only` is %TRUE, then the cookie jar will only be
     * used for this session, and changes made to it will be lost when the
     * jar is destroyed.)
     * @constructor 
     * @param filename the filename to read to/write from
     * @param readOnly %TRUE if `filename` is read-only
     * @returns the new #SoupCookieJar
     */
    static new(filename: string | null, readOnly: boolean): CookieJarText

    // Overloads of new

    /**
     * Creates a new #SoupCookieJar. The base #SoupCookieJar class does
     * not support persistent storage of cookies; use a subclass for that.
     * @constructor 
     * @returns a new #SoupCookieJar
     */
    static new(): CookieJar
    _init(config?: CookieJarText.ConstructorProperties): void
}

module HSTSEnforcer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    interface ChangedSignalCallback {
        (oldPolicy: HSTSPolicy, newPolicy: HSTSPolicy): void
    }

    /**
     * Signal callback interface for `hsts-enforced`
     */
    interface HstsEnforcedSignalCallback {
        (message: Message): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends SessionFeature.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface HSTSEnforcer extends SessionFeature {

    // Own properties of Soup-2.4.Soup.HSTSEnforcer

    __gtype__: number

    // Own fields of Soup-2.4.Soup.HSTSEnforcer

    parent: GObject.Object
    priv: HSTSEnforcerPrivate

    // Owm methods of Soup-2.4.Soup.HSTSEnforcer

    /**
     * Gets a list of domains for which there are policies in `enforcer`.
     * @param sessionPolicies whether to include session policies
     * @returns a newly allocated list of domains. Use g_list_free_full() and g_free() to free the list.
     */
    getDomains(sessionPolicies: boolean): string[]
    /**
     * Gets a list with the policies in `enforcer`.
     * @param sessionPolicies whether to include session policies
     * @returns a newly allocated list of policies. Use g_list_free_full() and soup_hsts_policy_free() to free the list.
     */
    getPolicies(sessionPolicies: boolean): HSTSPolicy[]
    // Has conflict: hasValidPolicy(domain: string | null): boolean
    // Has conflict: isPersistent(): boolean
    /**
     * Sets `policy` to `hsts_enforcer`. If `policy` is expired, any
     * existing HSTS policy for its host will be removed instead. If a
     * policy existed for this host, it will be replaced. Otherwise, the
     * new policy will be inserted. If the policy is a session policy, that
     * is, one created with soup_hsts_policy_new_session_policy(), the policy
     * will not expire and will be enforced during the lifetime of
     * `hsts_enforcer'`s #SoupSession.
     * @param policy the policy of the HSTS host
     */
    setPolicy(policy: HSTSPolicy): void
    /**
     * Sets a session policy for `domain`. A session policy is a policy
     * that is permanent to the lifetime of `hsts_enforcer'`s #SoupSession
     * and doesn't expire.
     * @param domain policy domain or hostname
     * @param includeSubdomains %TRUE if the policy applies on sub domains
     */
    setSessionPolicy(domain: string | null, includeSubdomains: boolean): void

    // Own virtual methods of Soup-2.4.Soup.HSTSEnforcer

    changed(oldPolicy: HSTSPolicy, newPolicy: HSTSPolicy): void
    /**
     * Gets whether `hsts_enforcer` has a currently valid policy for `domain`.
     * @virtual 
     * @param domain a domain.
     * @returns %TRUE if access to @domain should happen over HTTPS, false otherwise.
     */
    hasValidPolicy(domain: string | null): boolean
    hstsEnforced(message: Message): void
    /**
     * Gets whether `hsts_enforcer` stores policies persistenly.
     * @virtual 
     * @returns %TRUE if @hsts_enforcer storage is persistent or %FALSE otherwise.
     */
    isPersistent(): boolean

    // Own signals of Soup-2.4.Soup.HSTSEnforcer

    connect(sigName: "changed", callback: HSTSEnforcer.ChangedSignalCallback): number
    on(sigName: "changed", callback: HSTSEnforcer.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: HSTSEnforcer.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: HSTSEnforcer.ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", newPolicy: HSTSPolicy, ...args: any[]): void
    connect(sigName: "hsts-enforced", callback: HSTSEnforcer.HstsEnforcedSignalCallback): number
    on(sigName: "hsts-enforced", callback: HSTSEnforcer.HstsEnforcedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hsts-enforced", callback: HSTSEnforcer.HstsEnforcedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hsts-enforced", callback: HSTSEnforcer.HstsEnforcedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "hsts-enforced", ...args: any[]): void

    // Class property signals of Soup-2.4.Soup.HSTSEnforcer

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

class HSTSEnforcer extends GObject.Object {

    // Own properties of Soup-2.4.Soup.HSTSEnforcer

    static name: string

    // Constructors of Soup-2.4.Soup.HSTSEnforcer

    constructor(config?: HSTSEnforcer.ConstructorProperties) 
    /**
     * Creates a new #SoupHSTSEnforcer. The base #SoupHSTSEnforcer class
     * does not support persistent storage of HSTS policies, see
     * #SoupHSTSEnforcerDB for that.
     * @constructor 
     * @returns a new #SoupHSTSEnforcer
     */
    constructor() 
    /**
     * Creates a new #SoupHSTSEnforcer. The base #SoupHSTSEnforcer class
     * does not support persistent storage of HSTS policies, see
     * #SoupHSTSEnforcerDB for that.
     * @constructor 
     * @returns a new #SoupHSTSEnforcer
     */
    static new(): HSTSEnforcer
    _init(config?: HSTSEnforcer.ConstructorProperties): void
}

module HSTSEnforcerDB {

    // Constructor properties interface

    interface ConstructorProperties extends SessionFeature.ConstructorProperties, HSTSEnforcer.ConstructorProperties {

        // Own constructor properties of Soup-2.4.Soup.HSTSEnforcerDB

        /**
         * The filename of the SQLite database where HSTS policies are stored.
         */
        filename?: string | null
    }

}

interface HSTSEnforcerDB extends SessionFeature {

    // Own properties of Soup-2.4.Soup.HSTSEnforcerDB

    /**
     * The filename of the SQLite database where HSTS policies are stored.
     */
    readonly filename: string | null
    __gtype__: number

    // Own fields of Soup-2.4.Soup.HSTSEnforcerDB

    parent: HSTSEnforcer & GObject.Object
    priv: any

    // Class property signals of Soup-2.4.Soup.HSTSEnforcerDB

    connect(sigName: "notify::filename", callback: (...args: any[]) => void): number
    on(sigName: "notify::filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::filename", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::filename", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::filename", ...args: any[]): void
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

class HSTSEnforcerDB extends HSTSEnforcer {

    // Own properties of Soup-2.4.Soup.HSTSEnforcerDB

    static name: string

    // Constructors of Soup-2.4.Soup.HSTSEnforcerDB

    constructor(config?: HSTSEnforcerDB.ConstructorProperties) 
    /**
     * Creates a #SoupHSTSEnforcerDB.
     * 
     * `filename` will be read in during the initialization of a
     * #SoupHSTSEnforcerDB, in order to create an initial set of HSTS
     * policies. If the file doesn't exist, a new database will be created
     * and initialized. Changes to the policies during the lifetime of a
     * #SoupHSTSEnforcerDB will be written to `filename` when
     * #SoupHSTSEnforcer::changed is emitted.
     * @constructor 
     * @param filename the filename of the database to read/write from.
     * @returns the new #SoupHSTSEnforcer
     */
    constructor(filename: string | null) 
    /**
     * Creates a #SoupHSTSEnforcerDB.
     * 
     * `filename` will be read in during the initialization of a
     * #SoupHSTSEnforcerDB, in order to create an initial set of HSTS
     * policies. If the file doesn't exist, a new database will be created
     * and initialized. Changes to the policies during the lifetime of a
     * #SoupHSTSEnforcerDB will be written to `filename` when
     * #SoupHSTSEnforcer::changed is emitted.
     * @constructor 
     * @param filename the filename of the database to read/write from.
     * @returns the new #SoupHSTSEnforcer
     */
    static new(filename: string | null): HSTSEnforcerDB

    // Overloads of new

    /**
     * Creates a new #SoupHSTSEnforcer. The base #SoupHSTSEnforcer class
     * does not support persistent storage of HSTS policies, see
     * #SoupHSTSEnforcerDB for that.
     * @constructor 
     * @returns a new #SoupHSTSEnforcer
     */
    static new(): HSTSEnforcer
    _init(config?: HSTSEnforcerDB.ConstructorProperties): void
}

module Logger {

    // Constructor properties interface

    interface ConstructorProperties extends SessionFeature.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Soup-2.4.Soup.Logger

        /**
         * The level of logging output
         */
        level?: LoggerLogLevel | null
        /**
         * If #SoupLogger:level is %SOUP_LOGGER_LOG_BODY, this gives
         * the maximum number of bytes of the body that will be logged.
         * (-1 means "no limit".)
         */
        maxBodySize?: number | null
    }

}

interface Logger extends SessionFeature {

    // Own properties of Soup-2.4.Soup.Logger

    /**
     * The level of logging output
     */
    level: LoggerLogLevel
    /**
     * If #SoupLogger:level is %SOUP_LOGGER_LOG_BODY, this gives
     * the maximum number of bytes of the body that will be logged.
     * (-1 means "no limit".)
     */
    maxBodySize: number
    __gtype__: number

    // Own fields of Soup-2.4.Soup.Logger

    parent: GObject.Object

    // Owm methods of Soup-2.4.Soup.Logger

    /**
     * Sets `logger` to watch `session` and print debug information for
     * its messages.
     * 
     * (The session will take a reference on `logger,` which will be
     * removed when you call soup_logger_detach(), or when the session is
     * destroyed.)
     * @param session a #SoupSession
     */
    attach(session: Session): void

    // Overloads of attach

    attach(session: Session): void
    /**
     * Stops `logger` from watching `session`.
     * @param session a #SoupSession
     */
    detach(session: Session): void

    // Overloads of detach

    detach(session: Session): void
    /**
     * Sets up an alternate log printing routine, if you don't want
     * the log to go to <literal>stdout</literal>.
     * @param printer the callback for printing logging output
     */
    setPrinter(printer: LoggerPrinter): void
    /**
     * Sets up a filter to determine the log level for a given request.
     * For each HTTP request `logger` will invoke `request_filter` to
     * determine how much (if any) of that request to log. (If you do not
     * set a request filter, `logger` will just always log requests at the
     * level passed to soup_logger_new().)
     * @param requestFilter the callback for request debugging
     */
    setRequestFilter(requestFilter: LoggerFilter): void
    /**
     * Sets up a filter to determine the log level for a given response.
     * For each HTTP response `logger` will invoke `response_filter` to
     * determine how much (if any) of that response to log. (If you do not
     * set a response filter, `logger` will just always log responses at
     * the level passed to soup_logger_new().)
     * @param responseFilter the callback for response debugging
     */
    setResponseFilter(responseFilter: LoggerFilter): void

    // Class property signals of Soup-2.4.Soup.Logger

    connect(sigName: "notify::level", callback: (...args: any[]) => void): number
    on(sigName: "notify::level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::level", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::level", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::level", ...args: any[]): void
    connect(sigName: "notify::max-body-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-body-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-body-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-body-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-body-size", ...args: any[]): void
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

class Logger extends GObject.Object {

    // Own properties of Soup-2.4.Soup.Logger

    static name: string

    // Constructors of Soup-2.4.Soup.Logger

    constructor(config?: Logger.ConstructorProperties) 
    /**
     * Creates a new #SoupLogger with the given debug level. If `level` is
     * %SOUP_LOGGER_LOG_BODY, `max_body_size` gives the maximum number of
     * bytes of the body that will be logged. (-1 means "no limit".)
     * 
     * If you need finer control over what message parts are and aren't
     * logged, use soup_logger_set_request_filter() and
     * soup_logger_set_response_filter().
     * @constructor 
     * @param level the debug level
     * @param maxBodySize the maximum body size to output, or -1
     * @returns a new #SoupLogger
     */
    constructor(level: LoggerLogLevel, maxBodySize: number) 
    /**
     * Creates a new #SoupLogger with the given debug level. If `level` is
     * %SOUP_LOGGER_LOG_BODY, `max_body_size` gives the maximum number of
     * bytes of the body that will be logged. (-1 means "no limit".)
     * 
     * If you need finer control over what message parts are and aren't
     * logged, use soup_logger_set_request_filter() and
     * soup_logger_set_response_filter().
     * @constructor 
     * @param level the debug level
     * @param maxBodySize the maximum body size to output, or -1
     * @returns a new #SoupLogger
     */
    static new(level: LoggerLogLevel, maxBodySize: number): Logger
    _init(config?: Logger.ConstructorProperties): void
}

module Message {

    // Signal callback interfaces

    /**
     * Signal callback interface for `content-sniffed`
     */
    interface ContentSniffedSignalCallback {
        (type: string | null, params: GLib.HashTable): void
    }

    /**
     * Signal callback interface for `finished`
     */
    interface FinishedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `got-body`
     */
    interface GotBodySignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `got-chunk`
     */
    interface GotChunkSignalCallback {
        (chunk: Buffer): void
    }

    /**
     * Signal callback interface for `got-headers`
     */
    interface GotHeadersSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `got-informational`
     */
    interface GotInformationalSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `network-event`
     */
    interface NetworkEventSignalCallback {
        (event: Gio.SocketClientEvent, connection: Gio.IOStream): void
    }

    /**
     * Signal callback interface for `restarted`
     */
    interface RestartedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `starting`
     */
    interface StartingSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `wrote-body`
     */
    interface WroteBodySignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `wrote-body-data`
     */
    interface WroteBodyDataSignalCallback {
        (chunk: Buffer): void
    }

    /**
     * Signal callback interface for `wrote-chunk`
     */
    interface WroteChunkSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `wrote-headers`
     */
    interface WroteHeadersSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `wrote-informational`
     */
    interface WroteInformationalSignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Soup-2.4.Soup.Message

        /**
         * The #SoupURI loaded in the application when the message was
         * queued.
         */
        firstParty?: URI | null
        flags?: MessageFlags | null
        httpVersion?: HTTPVersion | null
        /**
         * Set when the message is navigating between top level domains.
         */
        isTopLevelNavigation?: boolean | null
        method?: string | null
        priority?: MessagePriority | null
        reasonPhrase?: string | null
        serverSide?: boolean | null
        siteForCookies?: URI | null
        statusCode?: number | null
        /**
         * The #GTlsCertificate associated with the message
         */
        tlsCertificate?: Gio.TlsCertificate | null
        /**
         * The verification errors on #SoupMessage:tls-certificate
         */
        tlsErrors?: Gio.TlsCertificateFlags | null
        uri?: URI | null
    }

}

interface Message {

    // Own properties of Soup-2.4.Soup.Message

    /**
     * The #SoupURI loaded in the application when the message was
     * queued.
     */
    firstParty: URI
    flags: MessageFlags
    httpVersion: HTTPVersion
    /**
     * Set when the message is navigating between top level domains.
     */
    isTopLevelNavigation: boolean
    priority: MessagePriority
    /**
     * The message's HTTP request body, as a #GBytes.
     */
    readonly requestBodyData: any
    /**
     * The message's HTTP response body, as a #GBytes.
     */
    readonly responseBodyData: any
    readonly serverSide: boolean
    siteForCookies: URI
    /**
     * The #GTlsCertificate associated with the message
     */
    tlsCertificate: Gio.TlsCertificate
    /**
     * The verification errors on #SoupMessage:tls-certificate
     */
    tlsErrors: Gio.TlsCertificateFlags
    uri: URI
    __gtype__: number

    // Own fields of Soup-2.4.Soup.Message

    parent: GObject.Object
    /**
     * the HTTP method
     * @field 
     */
    method: string | null
    /**
     * the HTTP status code
     * @field 
     */
    statusCode: number
    /**
     * the status phrase associated with `status_code`
     * @field 
     */
    reasonPhrase: string | null
    /**
     * the request body
     * @field 
     */
    requestBody: MessageBody
    /**
     * the request headers
     * @field 
     */
    requestHeaders: MessageHeaders
    /**
     * the response body
     * @field 
     */
    responseBody: MessageBody
    /**
     * the response headers
     * @field 
     */
    responseHeaders: MessageHeaders

    // Owm methods of Soup-2.4.Soup.Message

    contentSniffed(contentType: string | null, params: GLib.HashTable): void
    /**
     * This disables the actions of #SoupSessionFeature<!-- -->s with the
     * given `feature_type` (or a subclass of that type) on `msg,` so that
     * `msg` is processed as though the feature(s) hadn't been added to the
     * session. Eg, passing #SOUP_TYPE_CONTENT_SNIFFER for `feature_type`
     * will disable Content-Type sniffing on the message.
     * 
     * You must call this before queueing `msg` on a session; calling it on
     * a message that has already been queued is undefined. In particular,
     * you cannot call this on a message that is being requeued after a
     * redirect or authentication.
     * @param featureType the #GType of a #SoupSessionFeature
     */
    disableFeature(featureType: GObject.GType): void
    // Has conflict: finished(): void
    /**
     * Gets the address `msg'`s URI points to. After first setting the
     * URI on a message, this will be unresolved, although the message's
     * session will resolve it before sending the message.
     * @returns the address @msg's URI points to
     */
    getAddress(): Address
    /**
     * Gets `msg'`s first-party #SoupURI
     * @returns the @msg's first party #SoupURI
     */
    getFirstParty(): URI
    /**
     * Gets the flags on `msg`
     * @returns the flags
     */
    getFlags(): MessageFlags
    /**
     * Gets the HTTP version of `msg`. This is the minimum of the
     * version from the request and the version from the response.
     * @returns the HTTP version
     */
    getHttpVersion(): HTTPVersion
    /**
     * If `msg` is using https (or attempted to use https but got
     * %SOUP_STATUS_SSL_FAILED), this retrieves the #GTlsCertificate
     * associated with its connection, and the #GTlsCertificateFlags
     * showing what problems, if any, have been found with that
     * certificate.
     * 
     * <note><para>This is only meaningful with messages processed by a #SoupSession and is
     * not useful for messages received by a #SoupServer</para></note>
     * @returns %TRUE if @msg used/attempted https, %FALSE if not
     */
    getHttpsStatus(): [ /* returnType */ boolean, /* certificate */ Gio.TlsCertificate, /* errors */ Gio.TlsCertificateFlags ]
    getIsTopLevelNavigation(): boolean
    /**
     * Retrieves the #SoupMessagePriority. If not set this value defaults
     * to #SOUP_MESSAGE_PRIORITY_NORMAL.
     * @returns the priority of the message.
     */
    getPriority(): MessagePriority
    /**
     * Gets `msg'`s site for cookies #SoupURI
     * @returns the @msg's site for cookies #SoupURI
     */
    getSiteForCookies(): URI
    /**
     * If `msg` is associated with a #SoupRequest, this returns that
     * request. Otherwise it returns %NULL.
     * @returns @msg's associated #SoupRequest
     */
    getSoupRequest(): Request
    /**
     * Gets `msg'`s URI
     * @returns the URI @msg is targeted for.
     */
    getUri(): URI
    // Has conflict: gotBody(): void
    // Has conflict: gotChunk(chunk: Buffer): void
    // Has conflict: gotHeaders(): void
    // Has conflict: gotInformational(): void
    /**
     * Get whether #SoupSessionFeature<!-- -->s of the given `feature_type`
     * (or a subclass of that type) are disabled on `msg`.
     * See soup_message_disable_feature().
     * @param featureType the #GType of a #SoupSessionFeature
     * @returns %TRUE if feature is disabled, or %FALSE otherwise.
     */
    isFeatureDisabled(featureType: GObject.GType): boolean
    /**
     * Determines whether or not `msg'`s connection can be kept alive for
     * further requests after processing `msg,` based on the HTTP version,
     * Connection header, etc.
     * @returns %TRUE or %FALSE.
     */
    isKeepalive(): boolean
    // Has conflict: restarted(): void
    /**
     * Sets an alternate chunk-allocation function to use when reading
     * `msg'`s body when using the traditional (ie,
     * non-#SoupRequest<!-- -->-based) API. Every time data is available
     * to read, libsoup will call `allocator,` which should return a
     * #SoupBuffer. (See #SoupChunkAllocator for additional details.)
     * Libsoup will then read data from the network into that buffer, and
     * update the buffer's <literal>length</literal> to indicate how much
     * data it read.
     * 
     * Generally, a custom chunk allocator would be used in conjunction
     * with soup_message_body_set_accumulate() %FALSE and
     * #SoupMessage::got_chunk, as part of a strategy to avoid unnecessary
     * copying of data. However, you cannot assume that every call to the
     * allocator will be followed by a call to your
     * #SoupMessage::got_chunk handler; if an I/O error occurs, then the
     * buffer will be unreffed without ever having been used. If your
     * buffer-allocation strategy requires special cleanup, use
     * soup_buffer_new_with_owner() rather than doing the cleanup from the
     * #SoupMessage::got_chunk handler.
     * 
     * The other thing to remember when using non-accumulating message
     * bodies is that the buffer passed to the #SoupMessage::got_chunk
     * handler will be unreffed after the handler returns, just as it
     * would be in the non-custom-allocated case. If you want to hand the
     * chunk data off to some other part of your program to use later,
     * you'll need to ref the #SoupBuffer (or its owner, in the
     * soup_buffer_new_with_owner() case) to ensure that the data remains
     * valid.
     * @param allocator the chunk allocator callback
     */
    setChunkAllocator(allocator: ChunkAllocator): void
    /**
     * Sets `first_party` as the main document #SoupURI for `msg`. For
     * details of when and how this is used refer to the documentation for
     * #SoupCookieJarAcceptPolicy.
     * @param firstParty the #SoupURI for the `msg'`s first party
     */
    setFirstParty(firstParty: URI): void
    /**
     * Sets the specified flags on `msg`.
     * @param flags a set of #SoupMessageFlags values
     */
    setFlags(flags: MessageFlags): void
    /**
     * Sets the HTTP version on `msg`. The default version is
     * %SOUP_HTTP_1_1. Setting it to %SOUP_HTTP_1_0 will prevent certain
     * functionality from being used.
     * @param version the HTTP version
     */
    setHttpVersion(version: HTTPVersion): void
    /**
     * See the [same-site spec](https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site-00)
     * for more information.
     * @param isTopLevelNavigation if %TRUE indicate the current request is a top-level navigation
     */
    setIsTopLevelNavigation(isTopLevelNavigation: boolean): void
    /**
     * Sets the priority of a message. Note that this won't have any
     * effect unless used before the message is added to the session's
     * message processing queue.
     * 
     * The message will be placed just before any other previously added
     * message with lower priority (messages with the same priority are
     * processed on a FIFO basis).
     * 
     * Setting priorities does not currently work with #SoupSessionSync
     * (or with synchronous messages on a plain #SoupSession) because in
     * the synchronous/blocking case, priority ends up being determined
     * semi-randomly by thread scheduling.
     * @param priority the #SoupMessagePriority
     */
    setPriority(priority: MessagePriority): void
    /**
     * Sets `msg'`s status_code to `status_code` and adds a Location header
     * pointing to `redirect_uri`. Use this from a #SoupServer when you
     * want to redirect the client to another URI.
     * 
     * `redirect_uri` can be a relative URI, in which case it is
     * interpreted relative to `msg'`s current URI. In particular, if
     * `redirect_uri` is just a path, it will replace the path
     * <emphasis>and query</emphasis> of `msg'`s URI.
     * @param statusCode a 3xx status code
     * @param redirectUri the URI to redirect `msg` to
     */
    setRedirect(statusCode: number, redirectUri: string | null): void
    /**
     * Convenience function to set the request body of a #SoupMessage. If
     * `content_type` is %NULL, the request body must be empty as well.
     * @param contentType MIME Content-Type of the body
     * @param reqUse a #SoupMemoryUse describing how to handle `req_body`
     * @param reqBody    a data buffer containing the body of the message request.
     */
    setRequest(contentType: string | null, reqUse: MemoryUse, reqBody: Uint8Array | null): void
    /**
     * Convenience function to set the response body of a #SoupMessage. If
     * `content_type` is %NULL, the response body must be empty as well.
     * @param contentType MIME Content-Type of the body
     * @param respUse a #SoupMemoryUse describing how to handle `resp_body`
     * @param respBody    a data buffer containing the body of the message response.
     */
    setResponse(contentType: string | null, respUse: MemoryUse, respBody: Uint8Array | null): void
    /**
     * Sets `site_for_cookies` as the policy URL for same-site cookies for `msg`.
     * 
     * It is either the URL of the top-level document or %NULL depending on whether the registrable
     * domain of this document's URL matches the registrable domain of its parent's/opener's
     * URL. For the top-level document it is set to the document's URL.
     * 
     * See the [same-site spec](https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site-00)
     * for more information.
     * @param siteForCookies the #SoupURI for the `msg'`s site for cookies
     */
    setSiteForCookies(siteForCookies: URI | null): void
    /**
     * Sets `msg'`s status code to `status_code`. If `status_code` is a
     * known value, it will also set `msg'`s reason_phrase.
     * @param statusCode an HTTP status code
     */
    setStatus(statusCode: number): void
    /**
     * Sets `msg'`s status code and reason phrase.
     * @param statusCode an HTTP status code
     * @param reasonPhrase a description of the status
     */
    setStatusFull(statusCode: number, reasonPhrase: string | null): void
    /**
     * Sets `msg'`s URI to `uri`. If `msg` has already been sent and you want
     * to re-send it with the new URI, you need to call
     * soup_session_requeue_message().
     * @param uri the new #SoupURI
     */
    setUri(uri: URI): void
    // Has conflict: starting(): void
    // Has conflict: wroteBody(): void
    wroteBodyData(chunk: Buffer): void
    // Has conflict: wroteChunk(): void
    // Has conflict: wroteHeaders(): void
    // Has conflict: wroteInformational(): void

    // Own virtual methods of Soup-2.4.Soup.Message

    finished(): void
    gotBody(): void
    gotChunk(chunk: Buffer): void
    gotHeaders(): void
    gotInformational(): void
    restarted(): void
    starting(): void
    wroteBody(): void
    wroteChunk(): void
    wroteHeaders(): void
    wroteInformational(): void

    // Own signals of Soup-2.4.Soup.Message

    connect(sigName: "content-sniffed", callback: Message.ContentSniffedSignalCallback): number
    on(sigName: "content-sniffed", callback: Message.ContentSniffedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "content-sniffed", callback: Message.ContentSniffedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "content-sniffed", callback: Message.ContentSniffedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "content-sniffed", params: GLib.HashTable, ...args: any[]): void
    connect(sigName: "finished", callback: Message.FinishedSignalCallback): number
    on(sigName: "finished", callback: Message.FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "finished", callback: Message.FinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "finished", callback: Message.FinishedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "finished", ...args: any[]): void
    connect(sigName: "got-body", callback: Message.GotBodySignalCallback): number
    on(sigName: "got-body", callback: Message.GotBodySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "got-body", callback: Message.GotBodySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "got-body", callback: Message.GotBodySignalCallback): NodeJS.EventEmitter
    emit(sigName: "got-body", ...args: any[]): void
    connect(sigName: "got-chunk", callback: Message.GotChunkSignalCallback): number
    on(sigName: "got-chunk", callback: Message.GotChunkSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "got-chunk", callback: Message.GotChunkSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "got-chunk", callback: Message.GotChunkSignalCallback): NodeJS.EventEmitter
    emit(sigName: "got-chunk", ...args: any[]): void
    connect(sigName: "got-headers", callback: Message.GotHeadersSignalCallback): number
    on(sigName: "got-headers", callback: Message.GotHeadersSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "got-headers", callback: Message.GotHeadersSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "got-headers", callback: Message.GotHeadersSignalCallback): NodeJS.EventEmitter
    emit(sigName: "got-headers", ...args: any[]): void
    connect(sigName: "got-informational", callback: Message.GotInformationalSignalCallback): number
    on(sigName: "got-informational", callback: Message.GotInformationalSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "got-informational", callback: Message.GotInformationalSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "got-informational", callback: Message.GotInformationalSignalCallback): NodeJS.EventEmitter
    emit(sigName: "got-informational", ...args: any[]): void
    connect(sigName: "network-event", callback: Message.NetworkEventSignalCallback): number
    on(sigName: "network-event", callback: Message.NetworkEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "network-event", callback: Message.NetworkEventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "network-event", callback: Message.NetworkEventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "network-event", connection: Gio.IOStream, ...args: any[]): void
    connect(sigName: "restarted", callback: Message.RestartedSignalCallback): number
    on(sigName: "restarted", callback: Message.RestartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "restarted", callback: Message.RestartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "restarted", callback: Message.RestartedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "restarted", ...args: any[]): void
    connect(sigName: "starting", callback: Message.StartingSignalCallback): number
    on(sigName: "starting", callback: Message.StartingSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "starting", callback: Message.StartingSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "starting", callback: Message.StartingSignalCallback): NodeJS.EventEmitter
    emit(sigName: "starting", ...args: any[]): void
    connect(sigName: "wrote-body", callback: Message.WroteBodySignalCallback): number
    on(sigName: "wrote-body", callback: Message.WroteBodySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "wrote-body", callback: Message.WroteBodySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "wrote-body", callback: Message.WroteBodySignalCallback): NodeJS.EventEmitter
    emit(sigName: "wrote-body", ...args: any[]): void
    connect(sigName: "wrote-body-data", callback: Message.WroteBodyDataSignalCallback): number
    on(sigName: "wrote-body-data", callback: Message.WroteBodyDataSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "wrote-body-data", callback: Message.WroteBodyDataSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "wrote-body-data", callback: Message.WroteBodyDataSignalCallback): NodeJS.EventEmitter
    emit(sigName: "wrote-body-data", ...args: any[]): void
    connect(sigName: "wrote-chunk", callback: Message.WroteChunkSignalCallback): number
    on(sigName: "wrote-chunk", callback: Message.WroteChunkSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "wrote-chunk", callback: Message.WroteChunkSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "wrote-chunk", callback: Message.WroteChunkSignalCallback): NodeJS.EventEmitter
    emit(sigName: "wrote-chunk", ...args: any[]): void
    connect(sigName: "wrote-headers", callback: Message.WroteHeadersSignalCallback): number
    on(sigName: "wrote-headers", callback: Message.WroteHeadersSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "wrote-headers", callback: Message.WroteHeadersSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "wrote-headers", callback: Message.WroteHeadersSignalCallback): NodeJS.EventEmitter
    emit(sigName: "wrote-headers", ...args: any[]): void
    connect(sigName: "wrote-informational", callback: Message.WroteInformationalSignalCallback): number
    on(sigName: "wrote-informational", callback: Message.WroteInformationalSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "wrote-informational", callback: Message.WroteInformationalSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "wrote-informational", callback: Message.WroteInformationalSignalCallback): NodeJS.EventEmitter
    emit(sigName: "wrote-informational", ...args: any[]): void

    // Class property signals of Soup-2.4.Soup.Message

    connect(sigName: "notify::first-party", callback: (...args: any[]) => void): number
    on(sigName: "notify::first-party", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::first-party", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::first-party", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::first-party", ...args: any[]): void
    connect(sigName: "notify::flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::http-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::http-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::http-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::http-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::http-version", ...args: any[]): void
    connect(sigName: "notify::is-top-level-navigation", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-top-level-navigation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-top-level-navigation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-top-level-navigation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-top-level-navigation", ...args: any[]): void
    connect(sigName: "notify::priority", callback: (...args: any[]) => void): number
    on(sigName: "notify::priority", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::priority", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::priority", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::priority", ...args: any[]): void
    connect(sigName: "notify::request-body-data", callback: (...args: any[]) => void): number
    on(sigName: "notify::request-body-data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::request-body-data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::request-body-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::request-body-data", ...args: any[]): void
    connect(sigName: "notify::response-body-data", callback: (...args: any[]) => void): number
    on(sigName: "notify::response-body-data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::response-body-data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::response-body-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::response-body-data", ...args: any[]): void
    connect(sigName: "notify::server-side", callback: (...args: any[]) => void): number
    on(sigName: "notify::server-side", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::server-side", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::server-side", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::server-side", ...args: any[]): void
    connect(sigName: "notify::site-for-cookies", callback: (...args: any[]) => void): number
    on(sigName: "notify::site-for-cookies", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::site-for-cookies", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::site-for-cookies", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::site-for-cookies", ...args: any[]): void
    connect(sigName: "notify::tls-certificate", callback: (...args: any[]) => void): number
    on(sigName: "notify::tls-certificate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tls-certificate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tls-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tls-certificate", ...args: any[]): void
    connect(sigName: "notify::tls-errors", callback: (...args: any[]) => void): number
    on(sigName: "notify::tls-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tls-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tls-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tls-errors", ...args: any[]): void
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
}

/**
 * Represents an HTTP message being sent or received.
 * 
 * `status_code` will normally be a #SoupStatus value, eg,
 * %SOUP_STATUS_OK, though of course it might actually be an unknown
 * status code. `reason_phrase` is the actual text returned from the
 * server, which may or may not correspond to the "standard"
 * description of `status_code`. At any rate, it is almost certainly
 * not localized, and not very descriptive even if it is in the user's
 * language; you should not use `reason_phrase` in user-visible
 * messages. Rather, you should look at `status_code,` and determine an
 * end-user-appropriate message based on that and on what you were
 * trying to do.
 * 
 * As described in the #SoupMessageBody documentation, the
 * `request_body` and `response_body` <literal>data</literal> fields
 * will not necessarily be filled in at all times. When the body
 * fields are filled in, they will be terminated with a '\0' byte
 * (which is not included in the <literal>length</literal>), so you
 * can use them as ordinary C strings (assuming that you know that the
 * body doesn't have any other '\0' bytes).
 * 
 * For a client-side #SoupMessage, `request_body'`s
 * <literal>data</literal> is usually filled in right before libsoup
 * writes the request to the network, but you should not count on
 * this; use soup_message_body_flatten() if you want to ensure that
 * <literal>data</literal> is filled in. If you are not using
 * #SoupRequest to read the response, then `response_body'`s
 * <literal>data</literal> will be filled in before
 * #SoupMessage::finished is emitted. (If you are using #SoupRequest,
 * then the message body is not accumulated by default, so
 * `response_body'`s <literal>data</literal> will always be %NULL.)
 * 
 * For a server-side #SoupMessage, `request_body'`s %data will be
 * filled in before #SoupMessage::got_body is emitted.
 * 
 * To prevent the %data field from being filled in at all (eg, if you
 * are handling the data from a #SoupMessage::got_chunk, and so don't
 * need to see it all at the end), call
 * soup_message_body_set_accumulate() on `response_body` or
 * `request_body` as appropriate, passing %FALSE.
 * @class 
 */
class Message extends GObject.Object {

    // Own properties of Soup-2.4.Soup.Message

    static name: string

    // Constructors of Soup-2.4.Soup.Message

    constructor(config?: Message.ConstructorProperties) 
    /**
     * Creates a new empty #SoupMessage, which will connect to `uri`
     * @constructor 
     * @param method the HTTP method for the created request
     * @param uriString the destination endpoint (as a string)
     * @returns the new #SoupMessage (or %NULL if @uri could not be parsed).
     */
    constructor(method: string | null, uriString: string | null) 
    /**
     * Creates a new empty #SoupMessage, which will connect to `uri`
     * @constructor 
     * @param method the HTTP method for the created request
     * @param uriString the destination endpoint (as a string)
     * @returns the new #SoupMessage (or %NULL if @uri could not be parsed).
     */
    static new(method: string | null, uriString: string | null): Message
    /**
     * Creates a new empty #SoupMessage, which will connect to `uri`
     * @constructor 
     * @param method the HTTP method for the created request
     * @param uri the destination endpoint (as a #SoupURI)
     * @returns the new #SoupMessage
     */
    static newFromUri(method: string | null, uri: URI): Message
    _init(config?: Message.ConstructorProperties): void
}

module MultipartInputStream {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.PollableInputStream.ConstructorProperties, Gio.FilterInputStream.ConstructorProperties {

        // Own constructor properties of Soup-2.4.Soup.MultipartInputStream

        message?: Message | null
    }

}

interface MultipartInputStream extends Gio.PollableInputStream {

    // Own properties of Soup-2.4.Soup.MultipartInputStream

    readonly message: Message
    __gtype__: number

    // Own fields of Soup-2.4.Soup.MultipartInputStream

    parentInstance: any

    // Owm methods of Soup-2.4.Soup.MultipartInputStream

    /**
     * Obtains the headers for the part currently being processed. Note
     * that the #SoupMessageHeaders that are returned are owned by the
     * #SoupMultipartInputStream and will be replaced when a call is made
     * to soup_multipart_input_stream_next_part() or its async
     * counterpart, so if keeping the headers is required, a copy must be
     * made.
     * 
     * Note that if a part had no headers at all an empty #SoupMessageHeaders
     * will be returned.
     * @returns a #SoupMessageHeaders containing the headers for the part currently being processed or %NULL if the headers failed to parse.
     */
    getHeaders(): MessageHeaders | null
    /**
     * Obtains an input stream for the next part. When dealing with a
     * multipart response the input stream needs to be wrapped in a
     * #SoupMultipartInputStream and this function or its async
     * counterpart need to be called to obtain the first part for
     * reading.
     * 
     * After calling this function,
     * soup_multipart_input_stream_get_headers() can be used to obtain the
     * headers for the first part. A read of 0 bytes indicates the end of
     * the part; a new call to this function should be done at that point,
     * to obtain the next part.
     * @param cancellable a #GCancellable
     * @returns a new #GInputStream, or %NULL if there are no more parts
     */
    nextPart(cancellable: Gio.Cancellable | null): Gio.InputStream | null
    /**
     * Obtains a #GInputStream for the next request. See
     * soup_multipart_input_stream_next_part() for details on the
     * workflow.
     * @param ioPriority the I/O priority for the request.
     * @param cancellable a #GCancellable.
     * @param callback callback to call when request is satisfied.
     */
    nextPartAsync(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous request for the next part.
     * @param result a #GAsyncResult.
     * @returns a newly created #GInputStream for reading the next part or %NULL if there are no more parts.
     */
    nextPartFinish(result: Gio.AsyncResult): Gio.InputStream | null

    // Class property signals of Soup-2.4.Soup.MultipartInputStream

    connect(sigName: "notify::message", callback: (...args: any[]) => void): number
    on(sigName: "notify::message", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::message", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::message", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): number
    on(sigName: "notify::close-base-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::close-base-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::close-base-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::close-base-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class MultipartInputStream extends Gio.FilterInputStream {

    // Own properties of Soup-2.4.Soup.MultipartInputStream

    static name: string

    // Constructors of Soup-2.4.Soup.MultipartInputStream

    constructor(config?: MultipartInputStream.ConstructorProperties) 
    /**
     * Creates a new #SoupMultipartInputStream that wraps the
     * #GInputStream obtained by sending the #SoupRequest. Reads should
     * not be done directly through this object, use the input streams
     * returned by soup_multipart_input_stream_next_part() or its async
     * counterpart instead.
     * @constructor 
     * @param msg the #SoupMessage the response is related to.
     * @param baseStream the #GInputStream returned by sending the request.
     * @returns a new #SoupMultipartInputStream
     */
    constructor(msg: Message, baseStream: Gio.InputStream) 
    /**
     * Creates a new #SoupMultipartInputStream that wraps the
     * #GInputStream obtained by sending the #SoupRequest. Reads should
     * not be done directly through this object, use the input streams
     * returned by soup_multipart_input_stream_next_part() or its async
     * counterpart instead.
     * @constructor 
     * @param msg the #SoupMessage the response is related to.
     * @param baseStream the #GInputStream returned by sending the request.
     * @returns a new #SoupMultipartInputStream
     */
    static new(msg: Message, baseStream: Gio.InputStream): MultipartInputStream
    _init(config?: MultipartInputStream.ConstructorProperties): void
}

module ProxyResolverDefault {

    // Constructor properties interface

    interface ConstructorProperties extends ProxyURIResolver.ConstructorProperties, SessionFeature.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Soup-2.4.Soup.ProxyResolverDefault

        gproxyResolver?: Gio.ProxyResolver | null
    }

}

interface ProxyResolverDefault extends ProxyURIResolver, SessionFeature {

    // Own properties of Soup-2.4.Soup.ProxyResolverDefault

    gproxyResolver: Gio.ProxyResolver
    __gtype__: number

    // Own fields of Soup-2.4.Soup.ProxyResolverDefault

    parent: GObject.Object

    // Class property signals of Soup-2.4.Soup.ProxyResolverDefault

    connect(sigName: "notify::gproxy-resolver", callback: (...args: any[]) => void): number
    on(sigName: "notify::gproxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::gproxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::gproxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::gproxy-resolver", ...args: any[]): void
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

class ProxyResolverDefault extends GObject.Object {

    // Own properties of Soup-2.4.Soup.ProxyResolverDefault

    static name: string

    // Constructors of Soup-2.4.Soup.ProxyResolverDefault

    constructor(config?: ProxyResolverDefault.ConstructorProperties) 
    _init(config?: ProxyResolverDefault.ConstructorProperties): void
}

module Request {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Soup-2.4.Soup.Request

        /**
         * The request's #SoupSession.
         */
        session?: Session | null
        /**
         * The request URI.
         */
        uri?: URI | null
    }

}

interface Request extends Gio.Initable {

    // Own properties of Soup-2.4.Soup.Request

    /**
     * The request's #SoupSession.
     */
    readonly session: Session
    /**
     * The request URI.
     */
    readonly uri: URI
    __gtype__: number

    // Own fields of Soup-2.4.Soup.Request

    parent: GObject.Object
    priv: RequestPrivate

    // Owm methods of Soup-2.4.Soup.Request

    // Has conflict: getContentLength(): number
    // Has conflict: getContentType(): string | null
    /**
     * Gets `request'`s #SoupSession
     * @returns @request's #SoupSession
     */
    getSession(): Session
    /**
     * Gets `request'`s URI
     * @returns @request's URI
     */
    getUri(): URI
    // Has conflict: send(cancellable: Gio.Cancellable | null): Gio.InputStream
    // Has conflict: sendAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: sendFinish(result: Gio.AsyncResult): Gio.InputStream

    // Own virtual methods of Soup-2.4.Soup.Request

    checkUri(uri: URI): boolean
    /**
     * Gets the length of the data represented by `request`. For most
     * request types, this will not be known until after you call
     * soup_request_send() or soup_request_send_finish().
     * @virtual 
     * @returns the length of the data represented by @request,   or -1 if not known.
     */
    getContentLength(): number
    /**
     * Gets the type of the data represented by `request`. For most request
     * types, this will not be known until after you call
     * soup_request_send() or soup_request_send_finish().
     * 
     * As in the HTTP Content-Type header, this may include parameters
     * after the MIME type.
     * @virtual 
     * @returns the type of the data represented by   @request, or %NULL if not known.
     */
    getContentType(): string | null
    /**
     * Synchronously requests the URI pointed to by `request,` and returns
     * a #GInputStream that can be used to read its contents.
     * 
     * Note that you cannot use this method with #SoupRequests attached to
     * a #SoupSessionAsync.
     * @virtual 
     * @param cancellable a #GCancellable or %NULL
     * @returns a #GInputStream that can be used to   read from the URI pointed to by @request.
     */
    send(cancellable: Gio.Cancellable | null): Gio.InputStream
    /**
     * Begins an asynchronously request for the URI pointed to by
     * `request`.
     * 
     * Note that you cannot use this method with #SoupRequests attached to
     * a #SoupSessionSync.
     * @virtual 
     * @param cancellable a #GCancellable or %NULL
     * @param callback a #GAsyncReadyCallback
     */
    sendAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of a soup_request_send_async().
     * @virtual 
     * @param result the #GAsyncResult
     * @returns a #GInputStream that can be used to   read from the URI pointed to by @request.
     */
    sendFinish(result: Gio.AsyncResult): Gio.InputStream

    // Class property signals of Soup-2.4.Soup.Request

    connect(sigName: "notify::session", callback: (...args: any[]) => void): number
    on(sigName: "notify::session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::session", ...args: any[]): void
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
}

/**
 * A request to retrieve a particular URI.
 * @class 
 */
class Request extends GObject.Object {

    // Own properties of Soup-2.4.Soup.Request

    static name: string

    // Constructors of Soup-2.4.Soup.Request

    constructor(config?: Request.ConstructorProperties) 
    _init(config?: Request.ConstructorProperties): void
}

module RequestData {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, Request.ConstructorProperties {
    }

}

interface RequestData extends Gio.Initable {

    // Own properties of Soup-2.4.Soup.RequestData

    __gtype__: number

    // Own fields of Soup-2.4.Soup.RequestData

    parent: Request & GObject.Object
    priv: any

    // Class property signals of Soup-2.4.Soup.RequestData

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::session", callback: (...args: any[]) => void): number
    on(sigName: "notify::session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::session", ...args: any[]): void
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
}

class RequestData extends Request {

    // Own properties of Soup-2.4.Soup.RequestData

    static name: string

    // Constructors of Soup-2.4.Soup.RequestData

    constructor(config?: RequestData.ConstructorProperties) 
    _init(config?: RequestData.ConstructorProperties): void
}

module RequestFile {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, Request.ConstructorProperties {
    }

}

interface RequestFile extends Gio.Initable {

    // Own properties of Soup-2.4.Soup.RequestFile

    __gtype__: number

    // Own fields of Soup-2.4.Soup.RequestFile

    parent: Request & GObject.Object
    priv: any

    // Owm methods of Soup-2.4.Soup.RequestFile

    /**
     * Gets a #GFile corresponding to `file'`s URI
     * @returns a #GFile corresponding to @file
     */
    getFile(): Gio.File

    // Class property signals of Soup-2.4.Soup.RequestFile

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::session", callback: (...args: any[]) => void): number
    on(sigName: "notify::session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::session", ...args: any[]): void
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
}

class RequestFile extends Request {

    // Own properties of Soup-2.4.Soup.RequestFile

    static name: string

    // Constructors of Soup-2.4.Soup.RequestFile

    constructor(config?: RequestFile.ConstructorProperties) 
    _init(config?: RequestFile.ConstructorProperties): void
}

module RequestHTTP {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, Request.ConstructorProperties {
    }

}

interface RequestHTTP extends Gio.Initable {

    // Own properties of Soup-2.4.Soup.RequestHTTP

    __gtype__: number

    // Own fields of Soup-2.4.Soup.RequestHTTP

    parent: Request & GObject.Object
    priv: any

    // Owm methods of Soup-2.4.Soup.RequestHTTP

    /**
     * Gets a new reference to the #SoupMessage associated to this SoupRequest
     * @returns a new reference to the #SoupMessage
     */
    getMessage(): Message

    // Class property signals of Soup-2.4.Soup.RequestHTTP

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::session", callback: (...args: any[]) => void): number
    on(sigName: "notify::session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::session", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::session", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::session", ...args: any[]): void
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
}

class RequestHTTP extends Request {

    // Own properties of Soup-2.4.Soup.RequestHTTP

    static name: string

    // Constructors of Soup-2.4.Soup.RequestHTTP

    constructor(config?: RequestHTTP.ConstructorProperties) 
    _init(config?: RequestHTTP.ConstructorProperties): void
}

module Requester {

    // Constructor properties interface

    interface ConstructorProperties extends SessionFeature.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface Requester extends SessionFeature {

    // Own properties of Soup-2.4.Soup.Requester

    __gtype__: number

    // Own fields of Soup-2.4.Soup.Requester

    parent: GObject.Object
    priv: RequesterPrivate

    // Owm methods of Soup-2.4.Soup.Requester

    request(uriString: string | null): Request
    requestUri(uri: URI): Request

    // Class property signals of Soup-2.4.Soup.Requester

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

class Requester extends GObject.Object {

    // Own properties of Soup-2.4.Soup.Requester

    static name: string

    // Constructors of Soup-2.4.Soup.Requester

    constructor(config?: Requester.ConstructorProperties) 
    constructor() 
    static new(): Requester
    _init(config?: Requester.ConstructorProperties): void
}

module Server {

    // Signal callback interfaces

    /**
     * Signal callback interface for `request-aborted`
     */
    interface RequestAbortedSignalCallback {
        (message: Message, client: ClientContext): void
    }

    /**
     * Signal callback interface for `request-finished`
     */
    interface RequestFinishedSignalCallback {
        (message: Message, client: ClientContext): void
    }

    /**
     * Signal callback interface for `request-read`
     */
    interface RequestReadSignalCallback {
        (message: Message, client: ClientContext): void
    }

    /**
     * Signal callback interface for `request-started`
     */
    interface RequestStartedSignalCallback {
        (message: Message, client: ClientContext): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Soup-2.4.Soup.Server

        /**
         * The server's #GMainContext, if you are using the old API.
         * Servers created using soup_server_listen() will listen on
         * the #GMainContext that was the thread-default context at
         * the time soup_server_listen() was called.
         */
        asyncContext?: any | null
        /**
         * A %NULL-terminated array of URI schemes that should be
         * considered to be aliases for "http". Eg, if this included
         * <literal>"dav"</literal>, than a URI of
         * <literal>dav://example.com/path</literal> would be treated
         * identically to <literal>http://example.com/path</literal>.
         * In particular, this is needed in cases where a client
         * sends requests with absolute URIs, where those URIs do
         * not use "http:".
         * 
         * The default value is an array containing the single element
         * <literal>"*"</literal>, a special value which means that
         * any scheme except "https" is considered to be an alias for
         * "http".
         * 
         * See also #SoupServer:https-aliases.
         */
        httpAliases?: string[] | null
        /**
         * A comma-delimited list of URI schemes that should be
         * considered to be aliases for "https". See
         * #SoupServer:http-aliases for more information.
         * 
         * The default value is %NULL, meaning that no URI schemes
         * are considered aliases for "https".
         */
        httpsAliases?: string[] | null
        /**
         * The address of the network interface the server is
         * listening on, if you are using the old #SoupServer API.
         * (This will not be set if you use soup_server_listen(),
         * etc.)
         */
        interface?: Address | null
        /**
         * The port the server is listening on, if you are using the
         * old #SoupServer API. (This will not be set if you use
         * soup_server_listen(), etc.)
         */
        port?: number | null
        rawPaths?: boolean | null
        /**
         * If non-%NULL, the value to use for the "Server" header on
         * #SoupMessage<!-- -->s processed by this server.
         * 
         * The Server header is the server equivalent of the
         * User-Agent header, and provides information about the
         * server and its components. It contains a list of one or
         * more product tokens, separated by whitespace, with the most
         * significant product token coming first. The tokens must be
         * brief, ASCII, and mostly alphanumeric (although "-", "_",
         * and "." are also allowed), and may optionally include a "/"
         * followed by a version string. You may also put comments,
         * enclosed in parentheses, between or after the tokens.
         * 
         * Some HTTP server implementations intentionally do not use
         * version numbers in their Server header, so that
         * installations running older versions of the server don't
         * end up advertising their vulnerability to specific security
         * holes.
         * 
         * As with #SoupSession:user_agent, if you set a
         * #SoupServer:server_header property that has trailing whitespace,
         * #SoupServer will append its own product token (eg,
         * "<literal>libsoup/2.3.2</literal>") to the end of the
         * header for you.
         */
        serverHeader?: string | null
        /**
         * Path to a file containing a PEM-encoded certificate.
         * 
         * If you set this property and #SoupServer:ssl-key-file at
         * construct time, then soup_server_new() will try to read the
         * files; if it cannot, it will return %NULL, with no explicit
         * indication of what went wrong (and logging a warning with
         * newer versions of glib, since returning %NULL from a
         * constructor is illegal).
         */
        sslCertFile?: string | null
        /**
         * Path to a file containing a PEM-encoded private key. See
         * #SoupServer:ssl-cert-file for more information about how this
         * is used.
         */
        sslKeyFile?: string | null
        /**
         * A #GTlsCertificate that has a #GTlsCertificate:private-key
         * set. If this is set, then the server will be able to speak
         * https in addition to (or instead of) plain http.
         * 
         * Alternatively, you can call soup_server_set_ssl_cert_file()
         * to have #SoupServer read in a a certificate from a file.
         */
        tlsCertificate?: Gio.TlsCertificate | null
    }

}

interface Server {

    // Own properties of Soup-2.4.Soup.Server

    /**
     * The server's #GMainContext, if you are using the old API.
     * Servers created using soup_server_listen() will listen on
     * the #GMainContext that was the thread-default context at
     * the time soup_server_listen() was called.
     */
    readonly asyncContext: any
    /**
     * A %NULL-terminated array of URI schemes that should be
     * considered to be aliases for "http". Eg, if this included
     * <literal>"dav"</literal>, than a URI of
     * <literal>dav://example.com/path</literal> would be treated
     * identically to <literal>http://example.com/path</literal>.
     * In particular, this is needed in cases where a client
     * sends requests with absolute URIs, where those URIs do
     * not use "http:".
     * 
     * The default value is an array containing the single element
     * <literal>"*"</literal>, a special value which means that
     * any scheme except "https" is considered to be an alias for
     * "http".
     * 
     * See also #SoupServer:https-aliases.
     */
    httpAliases: string[]
    /**
     * A comma-delimited list of URI schemes that should be
     * considered to be aliases for "https". See
     * #SoupServer:http-aliases for more information.
     * 
     * The default value is %NULL, meaning that no URI schemes
     * are considered aliases for "https".
     */
    httpsAliases: string[]
    /**
     * The address of the network interface the server is
     * listening on, if you are using the old #SoupServer API.
     * (This will not be set if you use soup_server_listen(),
     * etc.)
     */
    readonly interface: Address
    /**
     * The port the server is listening on, if you are using the
     * old #SoupServer API. (This will not be set if you use
     * soup_server_listen(), etc.)
     */
    readonly port: number
    readonly rawPaths: boolean
    /**
     * If non-%NULL, the value to use for the "Server" header on
     * #SoupMessage<!-- -->s processed by this server.
     * 
     * The Server header is the server equivalent of the
     * User-Agent header, and provides information about the
     * server and its components. It contains a list of one or
     * more product tokens, separated by whitespace, with the most
     * significant product token coming first. The tokens must be
     * brief, ASCII, and mostly alphanumeric (although "-", "_",
     * and "." are also allowed), and may optionally include a "/"
     * followed by a version string. You may also put comments,
     * enclosed in parentheses, between or after the tokens.
     * 
     * Some HTTP server implementations intentionally do not use
     * version numbers in their Server header, so that
     * installations running older versions of the server don't
     * end up advertising their vulnerability to specific security
     * holes.
     * 
     * As with #SoupSession:user_agent, if you set a
     * #SoupServer:server_header property that has trailing whitespace,
     * #SoupServer will append its own product token (eg,
     * "<literal>libsoup/2.3.2</literal>") to the end of the
     * header for you.
     */
    serverHeader: string | null
    /**
     * Path to a file containing a PEM-encoded certificate.
     * 
     * If you set this property and #SoupServer:ssl-key-file at
     * construct time, then soup_server_new() will try to read the
     * files; if it cannot, it will return %NULL, with no explicit
     * indication of what went wrong (and logging a warning with
     * newer versions of glib, since returning %NULL from a
     * constructor is illegal).
     */
    readonly sslCertFile: string | null
    /**
     * Path to a file containing a PEM-encoded private key. See
     * #SoupServer:ssl-cert-file for more information about how this
     * is used.
     */
    readonly sslKeyFile: string | null
    /**
     * A #GTlsCertificate that has a #GTlsCertificate:private-key
     * set. If this is set, then the server will be able to speak
     * https in addition to (or instead of) plain http.
     * 
     * Alternatively, you can call soup_server_set_ssl_cert_file()
     * to have #SoupServer read in a a certificate from a file.
     */
    readonly tlsCertificate: Gio.TlsCertificate
    __gtype__: number

    // Own fields of Soup-2.4.Soup.Server

    parent: GObject.Object

    // Owm methods of Soup-2.4.Soup.Server

    /**
     * Add a new client stream to the `server`.
     * @param stream a #GIOStream
     * @param localAddr the local #GSocketAddress associated with the `stream`
     * @param remoteAddr the remote #GSocketAddress associated with the `stream`
     * @returns %TRUE on success, %FALSE if the stream could not be accepted or any other error occurred (in which case @error will be set).
     */
    acceptIostream(stream: Gio.IOStream, localAddr: Gio.SocketAddress | null, remoteAddr: Gio.SocketAddress | null): boolean
    /**
     * Adds an authentication domain to `server`. Each auth domain will
     * have the chance to require authentication for each request that
     * comes in; normally auth domains will require authentication for
     * requests on certain paths that they have been set up to watch, or
     * that meet other criteria set by the caller. If an auth domain
     * determines that a request requires authentication (and the request
     * doesn't contain authentication), `server` will automatically reject
     * the request with an appropriate status (401 Unauthorized or 407
     * Proxy Authentication Required). If the request used the
     * "100-continue" Expectation, `server` will reject it before the
     * request body is sent.
     * @param authDomain a #SoupAuthDomain
     */
    addAuthDomain(authDomain: AuthDomain): void
    /**
     * Adds an "early" handler to `server` for requests under `path`. Note
     * that "normal" and "early" handlers are matched up together, so if
     * you add a normal handler for "/foo" and an early handler for
     * "/foo/bar", then a request to "/foo/bar" (or any path below it)
     * will run only the early handler. (But if you add both handlers at
     * the same path, then both will get run.)
     * 
     * For requests under `path` (that have not already been assigned a
     * status code by a #SoupAuthDomain or a signal handler), `callback`
     * will be invoked after receiving the request headers, but before
     * receiving the request body; the message's #SoupMessage:method and
     * #SoupMessage:request-headers fields will be filled in.
     * 
     * Early handlers are generally used for processing requests with
     * request bodies in a streaming fashion. If you determine that the
     * request will contain a message body, normally you would call
     * soup_message_body_set_accumulate() on the message's
     * #SoupMessage:request-body to turn off request-body accumulation,
     * and connect to the message's #SoupMessage::got-chunk signal to
     * process each chunk as it comes in.
     * 
     * To complete the message processing after the full message body has
     * been read, you can either also connect to #SoupMessage::got-body,
     * or else you can register a non-early handler for `path` as well. As
     * long as you have not set the #SoupMessage:status-code by the time
     * #SoupMessage::got-body is emitted, the non-early handler will be
     * run as well.
     * @param path the toplevel path for the handler
     * @param callback callback to invoke for requests under `path`
     */
    addEarlyHandler(path: string | null, callback: ServerCallback): void
    /**
     * Adds a handler to `server` for requests under `path`. If `path` is
     * %NULL or "/", then this will be the default handler for all
     * requests that don't have a more specific handler. (Note though that
     * if you want to handle requests to the special "*" URI, you must
     * explicitly register a handler for "*"; the default handler will not
     * be used for that case.)
     * 
     * For requests under `path` (that have not already been assigned a
     * status code by a #SoupAuthDomain, an early #SoupServerHandler, or a
     * signal handler), `callback` will be invoked after receiving the
     * request body; the message's #SoupMessage:method,
     * #SoupMessage:request-headers, and #SoupMessage:request-body fields
     * will be filled in.
     * 
     * After determining what to do with the request, the callback must at
     * a minimum call soup_message_set_status() (or
     * soup_message_set_status_full()) on the message to set the response
     * status code. Additionally, it may set response headers and/or fill
     * in the response body.
     * 
     * If the callback cannot fully fill in the response before returning
     * (eg, if it needs to wait for information from a database, or
     * another network server), it should call soup_server_pause_message()
     * to tell `server` to not send the response right away. When the
     * response is ready, call soup_server_unpause_message() to cause it
     * to be sent.
     * 
     * To send the response body a bit at a time using "chunked" encoding,
     * first call soup_message_headers_set_encoding() to set
     * %SOUP_ENCODING_CHUNKED on the #SoupMessage:response-headers. Then call
     * soup_message_body_append() (or soup_message_body_append_buffer())
     * to append each chunk as it becomes ready, and
     * soup_server_unpause_message() to make sure it's running. (The
     * server will automatically pause the message if it is using chunked
     * encoding but no more chunks are available.) When you are done, call
     * soup_message_body_complete() to indicate that no more chunks are
     * coming.
     * @param path the toplevel path for the handler
     * @param callback callback to invoke for requests under `path`
     */
    addHandler(path: string | null, callback: ServerCallback): void
    /**
     * Add support for a WebSocket extension of the given `extension_type`.
     * When a WebSocket client requests an extension of `extension_type,`
     * a new #SoupWebsocketExtension of type `extension_type` will be created
     * to handle the request.
     * 
     * You can also add support for a WebSocket extension to the server at
     * construct time by using the %SOUP_SERVER_ADD_WEBSOCKET_EXTENSION property.
     * Note that #SoupWebsocketExtensionDeflate is supported by default, use
     * soup_server_remove_websocket_extension() if you want to disable it.
     * @param extensionType a #GType
     */
    addWebsocketExtension(extensionType: GObject.GType): void
    /**
     * Adds a WebSocket handler to `server` for requests under `path`. (If
     * `path` is %NULL or "/", then this will be the default handler for
     * all requests that don't have a more specific handler.)
     * 
     * When a path has a WebSocket handler registered, `server` will check
     * incoming requests for WebSocket handshakes after all other handlers
     * have run (unless some earlier handler has already set a status code
     * on the message), and update the request's status, response headers,
     * and response body accordingly.
     * 
     * If `origin` is non-%NULL, then only requests containing a matching
     * "Origin" header will be accepted. If `protocols` is non-%NULL, then
     * only requests containing a compatible "Sec-WebSocket-Protocols"
     * header will be accepted. More complicated requirements can be
     * handled by adding a normal handler to `path,` and having it perform
     * whatever checks are needed (possibly calling
     * soup_server_check_websocket_handshake() one or more times), and
     * setting a failure status code if the handshake should be rejected.
     * @param path the toplevel path for the handler
     * @param origin the origin of the connection
     * @param protocols the protocols   supported by this handler
     * @param callback callback to invoke for successful WebSocket requests under `path`
     */
    addWebsocketHandler(path: string | null, origin: string | null, protocols: string[] | null, callback: ServerWebsocketCallback): void
    /**
     * Closes and frees `server'`s listening sockets. If you are using the
     * old #SoupServer APIs, this also includes the effect of
     * soup_server_quit().
     * 
     * Note that if there are currently requests in progress on `server,`
     * that they will continue to be processed if `server'`s #GMainContext
     * is still running.
     * 
     * You can call soup_server_listen(), etc, after calling this function
     * if you want to start listening again.
     */
    disconnect(): void
    /**
     * Gets `server'`s async_context, if you are using the old API. (With
     * the new API, the server runs in the thread's thread-default
     * #GMainContext, regardless of what this method returns.)
     * 
     * This does not add a ref to the context, so you will need to ref it
     * yourself if you want it to outlive its server.
     * @returns @server's #GMainContext, which may be %NULL
     */
    getAsyncContext(): GLib.MainContext | null
    /**
     * Gets `server'`s listening socket, if you are using the old API.
     * 
     * You should treat this socket as read-only; writing to it or
     * modifiying it may cause `server` to malfunction.
     * @returns the listening socket.
     */
    getListener(): Socket
    /**
     * Gets `server'`s list of listening sockets.
     * 
     * You should treat these sockets as read-only; writing to or
     * modifiying any of these sockets may cause `server` to malfunction.
     * 
     * (Beware that in contrast to the old soup_server_get_listener(), this
     * function returns #GSockets, not #SoupSockets.)
     * @returns a list of listening sockets.
     */
    getListeners(): Gio.Socket[]
    /**
     * Gets the TCP port that `server` is listening on, if you are using
     * the old API.
     * @returns the port @server is listening on.
     */
    getPort(): number
    /**
     * Gets a list of URIs corresponding to the interfaces `server` is
     * listening on. These will contain IP addresses, not hostnames, and
     * will also indicate whether the given listener is http or https.
     * 
     * Note that if you used soup_server_listen_all(), the returned URIs
     * will use the addresses <literal>0.0.0.0</literal> and
     * <literal>::</literal>, rather than actually returning separate URIs
     * for each interface on the system.
     * @returns a list of #SoupURIs, which you must free when you are done with it.
     */
    getUris(): URI[]
    /**
     * Checks whether `server` is capable of https.
     * 
     * In order for a server to run https, you must call
     * soup_server_set_ssl_cert_file(), or set the
     * #SoupServer:tls-certificate property, to provide it with a
     * certificate to use.
     * 
     * If you are using the deprecated single-listener APIs, then a return
     * value of %TRUE indicates that the #SoupServer serves https
     * exclusively. If you are using soup_server_listen(), etc, then a
     * %TRUE return value merely indicates that the server is
     * <emphasis>able</emphasis> to do https, regardless of whether it
     * actually currently is or not. Use soup_server_get_uris() to see if
     * it currently has any https listeners.
     * @returns %TRUE if @server is configured to serve https.
     */
    isHttps(): boolean
    /**
     * This attempts to set up `server` to listen for connections on
     * `address`.
     * 
     * If `options` includes %SOUP_SERVER_LISTEN_HTTPS, and `server` has
     * been configured for TLS, then `server` will listen for https
     * connections on this port. Otherwise it will listen for plain http.
     * 
     * You may call this method (along with the other "listen" methods)
     * any number of times on a server, if you want to listen on multiple
     * ports, or set up both http and https service.
     * 
     * After calling this method, `server` will begin accepting and
     * processing connections as soon as the appropriate #GMainContext is
     * run.
     * 
     * Note that #SoupServer never makes use of dual IPv4/IPv6 sockets; if
     * `address` is an IPv6 address, it will only accept IPv6 connections.
     * You must configure IPv4 listening separately.
     * @param address the address of the interface to listen on
     * @param options listening options for this server
     * @returns %TRUE on success, %FALSE if @address could not be bound or any other error occurred (in which case @error will be set).
     */
    listen(address: Gio.SocketAddress, options: ServerListenOptions): boolean
    /**
     * This attempts to set up `server` to listen for connections on all
     * interfaces on the system. (That is, it listens on the addresses
     * <literal>0.0.0.0</literal> and/or <literal>::</literal>, depending
     * on whether `options` includes %SOUP_SERVER_LISTEN_IPV4_ONLY,
     * %SOUP_SERVER_LISTEN_IPV6_ONLY, or neither.) If `port` is specified,
     * `server` will listen on that port. If it is 0, `server` will find an
     * unused port to listen on. (In that case, you can use
     * soup_server_get_uris() to find out what port it ended up choosing.)
     * 
     * See soup_server_listen() for more details.
     * @param port the port to listen on, or 0
     * @param options listening options for this server
     * @returns %TRUE on success, %FALSE if @port could not be bound or any other error occurred (in which case @error will be set).
     */
    listenAll(port: number, options: ServerListenOptions): boolean
    /**
     * This attempts to set up `server` to listen for connections on
     * `fd`.
     * 
     * See soup_server_listen() for more details.
     * 
     * Note that `server` will close `fd` when you free it or call
     * soup_server_disconnect().
     * @param fd the file descriptor of a listening socket
     * @param options listening options for this server
     * @returns %TRUE on success, %FALSE if an error occurred (in which case @error will be set).
     */
    listenFd(fd: number, options: ServerListenOptions): boolean
    /**
     * This attempts to set up `server` to listen for connections on
     * "localhost" (that is, <literal>127.0.0.1</literal> and/or
     * <literal>::1</literal>, depending on whether `options` includes
     * %SOUP_SERVER_LISTEN_IPV4_ONLY, %SOUP_SERVER_LISTEN_IPV6_ONLY, or
     * neither). If `port` is specified, `server` will listen on that port.
     * If it is 0, `server` will find an unused port to listen on. (In that
     * case, you can use soup_server_get_uris() to find out what port it
     * ended up choosing.)
     * 
     * See soup_server_listen() for more details.
     * @param port the port to listen on, or 0
     * @param options listening options for this server
     * @returns %TRUE on success, %FALSE if @port could not be bound or any other error occurred (in which case @error will be set).
     */
    listenLocal(port: number, options: ServerListenOptions): boolean
    /**
     * This attempts to set up `server` to listen for connections on
     * `socket`.
     * 
     * See soup_server_listen() for more details.
     * @param socket a listening #GSocket
     * @param options listening options for this server
     * @returns %TRUE on success, %FALSE if an error occurred (in which case @error will be set).
     */
    listenSocket(socket: Gio.Socket, options: ServerListenOptions): boolean
    /**
     * Pauses I/O on `msg`. This can be used when you need to return from
     * the server handler without having the full response ready yet. Use
     * soup_server_unpause_message() to resume I/O.
     * 
     * This must only be called on #SoupMessages which were created by the
     * #SoupServer and are currently doing I/O, such as those passed into a
     * #SoupServerCallback or emitted in a #SoupServer::request-read signal.
     * @param msg a #SoupMessage associated with `server`.
     */
    pauseMessage(msg: Message): void
    /**
     * Stops processing for `server,` if you are using the old API. Call
     * this to clean up after soup_server_run_async(), or to terminate a
     * call to soup_server_run().
     * 
     * Note that messages currently in progress will continue to be
     * handled, if the main loop associated with the server is resumed or
     * kept running.
     * 
     * `server` is still in a working state after this call; you can start
     * and stop a server as many times as you want.
     */
    quit(): void
    /**
     * Removes `auth_domain` from `server`.
     * @param authDomain a #SoupAuthDomain
     */
    removeAuthDomain(authDomain: AuthDomain): void
    /**
     * Removes all handlers (early and normal) registered at `path`.
     * @param path the toplevel path for the handler
     */
    removeHandler(path: string | null): void
    /**
     * Removes support for WebSocket extension of type `extension_type` (or any subclass of
     * `extension_type)` from `server`. You can also remove extensions enabled by default
     * from the server at construct time by using the %SOUP_SERVER_REMOVE_WEBSOCKET_EXTENSION
     * property.
     * @param extensionType a #GType
     */
    removeWebsocketExtension(extensionType: GObject.GType): void
    /**
     * Starts `server,` if you are using the old API, causing it to listen
     * for and process incoming connections. Unlike
     * soup_server_run_async(), this creates a #GMainLoop and runs it, and
     * it will not return until someone calls soup_server_quit() to stop
     * the server.
     */
    run(): void
    /**
     * Starts `server,` if you are using the old API, causing it to listen
     * for and process incoming connections.
     * 
     * The server runs in `server'`s #GMainContext. It will not actually
     * perform any processing unless the appropriate main loop is running.
     * In the simple case where you did not set the server's
     * %SOUP_SERVER_ASYNC_CONTEXT property, this means the server will run
     * whenever the glib main loop is running.
     */
    runAsync(): void
    /**
     * Sets `server` up to do https, using the SSL/TLS certificate
     * specified by `ssl_cert_file` and `ssl_key_file` (which may point to
     * the same file).
     * 
     * Alternatively, you can set the #SoupServer:tls-certificate property
     * at construction time, if you already have a #GTlsCertificate.
     * @param sslCertFile path to a file containing a PEM-encoded SSL/TLS   certificate.
     * @param sslKeyFile path to a file containing a PEM-encoded private key.
     * @returns success or failure.
     */
    setSslCertFile(sslCertFile: string | null, sslKeyFile: string | null): boolean
    /**
     * Resumes I/O on `msg`. Use this to resume after calling
     * soup_server_pause_message(), or after adding a new chunk to a
     * chunked response.
     * 
     * I/O won't actually resume until you return to the main loop.
     * 
     * This must only be called on #SoupMessages which were created by the
     * #SoupServer and are currently doing I/O, such as those passed into a
     * #SoupServerCallback or emitted in a #SoupServer::request-read signal.
     * @param msg a #SoupMessage associated with `server`.
     */
    unpauseMessage(msg: Message): void

    // Own virtual methods of Soup-2.4.Soup.Server

    requestAborted(msg: Message, client: ClientContext): void
    requestFinished(msg: Message, client: ClientContext): void
    requestRead(msg: Message, client: ClientContext): void
    requestStarted(msg: Message, client: ClientContext): void

    // Own signals of Soup-2.4.Soup.Server

    connect(sigName: "request-aborted", callback: Server.RequestAbortedSignalCallback): number
    on(sigName: "request-aborted", callback: Server.RequestAbortedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-aborted", callback: Server.RequestAbortedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-aborted", callback: Server.RequestAbortedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "request-aborted", client: ClientContext, ...args: any[]): void
    connect(sigName: "request-finished", callback: Server.RequestFinishedSignalCallback): number
    on(sigName: "request-finished", callback: Server.RequestFinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-finished", callback: Server.RequestFinishedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-finished", callback: Server.RequestFinishedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "request-finished", client: ClientContext, ...args: any[]): void
    connect(sigName: "request-read", callback: Server.RequestReadSignalCallback): number
    on(sigName: "request-read", callback: Server.RequestReadSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-read", callback: Server.RequestReadSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-read", callback: Server.RequestReadSignalCallback): NodeJS.EventEmitter
    emit(sigName: "request-read", client: ClientContext, ...args: any[]): void
    connect(sigName: "request-started", callback: Server.RequestStartedSignalCallback): number
    on(sigName: "request-started", callback: Server.RequestStartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-started", callback: Server.RequestStartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-started", callback: Server.RequestStartedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "request-started", client: ClientContext, ...args: any[]): void

    // Class property signals of Soup-2.4.Soup.Server

    connect(sigName: "notify::async-context", callback: (...args: any[]) => void): number
    on(sigName: "notify::async-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::async-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::async-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::async-context", ...args: any[]): void
    connect(sigName: "notify::http-aliases", callback: (...args: any[]) => void): number
    on(sigName: "notify::http-aliases", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::http-aliases", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::http-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::http-aliases", ...args: any[]): void
    connect(sigName: "notify::https-aliases", callback: (...args: any[]) => void): number
    on(sigName: "notify::https-aliases", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::https-aliases", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::https-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::https-aliases", ...args: any[]): void
    connect(sigName: "notify::interface", callback: (...args: any[]) => void): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::interface", ...args: any[]): void
    connect(sigName: "notify::port", callback: (...args: any[]) => void): number
    on(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::port", ...args: any[]): void
    connect(sigName: "notify::raw-paths", callback: (...args: any[]) => void): number
    on(sigName: "notify::raw-paths", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::raw-paths", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::raw-paths", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::raw-paths", ...args: any[]): void
    connect(sigName: "notify::server-header", callback: (...args: any[]) => void): number
    on(sigName: "notify::server-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::server-header", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::server-header", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::server-header", ...args: any[]): void
    connect(sigName: "notify::ssl-cert-file", callback: (...args: any[]) => void): number
    on(sigName: "notify::ssl-cert-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ssl-cert-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ssl-cert-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ssl-cert-file", ...args: any[]): void
    connect(sigName: "notify::ssl-key-file", callback: (...args: any[]) => void): number
    on(sigName: "notify::ssl-key-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ssl-key-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ssl-key-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ssl-key-file", ...args: any[]): void
    connect(sigName: "notify::tls-certificate", callback: (...args: any[]) => void): number
    on(sigName: "notify::tls-certificate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tls-certificate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tls-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tls-certificate", ...args: any[]): void
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

class Server extends GObject.Object {

    // Own properties of Soup-2.4.Soup.Server

    static name: string

    // Constructors of Soup-2.4.Soup.Server

    constructor(config?: Server.ConstructorProperties) 
    _init(config?: Server.ConstructorProperties): void
}

module Session {

    // Signal callback interfaces

    /**
     * Signal callback interface for `authenticate`
     */
    interface AuthenticateSignalCallback {
        (msg: Message, auth: Auth, retrying: boolean): void
    }

    /**
     * Signal callback interface for `connection-created`
     */
    interface ConnectionCreatedSignalCallback {
        (connection: GObject.Object): void
    }

    /**
     * Signal callback interface for `request-queued`
     */
    interface RequestQueuedSignalCallback {
        (msg: Message): void
    }

    /**
     * Signal callback interface for `request-started`
     */
    interface RequestStartedSignalCallback {
        (msg: Message, socket: Socket): void
    }

    /**
     * Signal callback interface for `request-unqueued`
     */
    interface RequestUnqueuedSignalCallback {
        (msg: Message): void
    }

    /**
     * Signal callback interface for `tunneling`
     */
    interface TunnelingSignalCallback {
        (connection: GObject.Object): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Soup-2.4.Soup.Session

        /**
         * If non-%NULL, the value to use for the "Accept-Language" header
         * on #SoupMessage<!-- -->s sent from this session.
         * 
         * Setting this will disable
         * #SoupSession:accept-language-auto.
         */
        acceptLanguage?: string | null
        /**
         * If %TRUE, #SoupSession will automatically set the string
         * for the "Accept-Language" header on every #SoupMessage
         * sent, based on the return value of g_get_language_names().
         * 
         * Setting this will override any previous value of
         * #SoupSession:accept-language.
         */
        acceptLanguageAuto?: boolean | null
        /**
         * The #GMainContext that miscellaneous session-related
         * asynchronous callbacks are invoked on. (Eg, setting
         * #SoupSession:idle-timeout will add a timeout source on this
         * context.)
         * 
         * For a plain #SoupSession, this property is always set to
         * the #GMainContext that is the thread-default at the time
         * the session was created, and cannot be overridden. For the
         * deprecated #SoupSession subclasses, the default value is
         * %NULL, meaning to use the global default #GMainContext.
         * 
         * If #SoupSession:use-thread-context is %FALSE, this context
         * will also be used for asynchronous HTTP I/O.
         */
        asyncContext?: any | null
        /**
         * A %NULL-terminated array of URI schemes that should be
         * considered to be aliases for "http". Eg, if this included
         * <literal>"dav"</literal>, than a URI of
         * <literal>dav://example.com/path</literal> would be treated
         * identically to <literal>http://example.com/path</literal>.
         * 
         * In a plain #SoupSession, the default value is %NULL,
         * meaning that only "http" is recognized as meaning "http".
         * In #SoupSessionAsync and #SoupSessionSync, for backward
         * compatibility, the default value is an array containing the
         * single element <literal>"*"</literal>, a special value
         * which means that any scheme except "https" is considered to
         * be an alias for "http".
         * 
         * See also #SoupSession:https-aliases.
         */
        httpAliases?: string[] | null
        /**
         * A comma-delimited list of URI schemes that should be
         * considered to be aliases for "https". See
         * #SoupSession:http-aliases for more information.
         * 
         * The default value is %NULL, meaning that no URI schemes
         * are considered aliases for "https".
         */
        httpsAliases?: string[] | null
        /**
         * Connection lifetime (in seconds) when idle. Any connection
         * left idle longer than this will be closed.
         * 
         * Although you can change this property at any time, it will
         * only affect newly-created connections, not currently-open
         * ones. You can call soup_session_abort() after setting this
         * if you want to ensure that all future connections will have
         * this timeout value.
         * 
         * Note that the default value of 60 seconds only applies to
         * plain #SoupSessions. If you are using #SoupSessionAsync or
         * #SoupSessionSync, the default value is 0 (meaning idle
         * connections will never time out).
         */
        idleTimeout?: number | null
        /**
         * Sets the #SoupAddress to use for the client side of
         * the connection.
         * 
         * Use this property if you want for instance to bind the
         * local socket to a specific IP address.
         */
        localAddress?: Address | null
        maxConns?: number | null
        maxConnsPerHost?: number | null
        /**
         * A #GProxyResolver to use with this session. Setting this
         * will clear the #SoupSession:proxy-uri property, and remove
         * any <type>SoupProxyURIResolver</type> features that have
         * been added to the session.
         * 
         * By default, in a plain #SoupSession, this is set to the
         * default #GProxyResolver, but you can set it to %NULL if you
         * don't want to use proxies, or set it to your own
         * #GProxyResolver if you want to control what proxies get
         * used.
         */
        proxyResolver?: Gio.ProxyResolver | null
        /**
         * A proxy to use for all http and https requests in this
         * session. Setting this will clear the
         * #SoupSession:proxy-resolver property, and remove any
         * <type>SoupProxyURIResolver</type> features that have been
         * added to the session. Setting this property will also
         * cancel all currently pending messages.
         * 
         * Note that #SoupSession will normally handle looking up the
         * user's proxy settings for you; you should only use
         * #SoupSession:proxy-uri if you need to override the user's
         * normal proxy settings.
         * 
         * Also note that this proxy will be used for
         * <emphasis>all</emphasis> requests; even requests to
         * <literal>localhost</literal>. If you need more control over
         * proxies, you can create a #GSimpleProxyResolver and set the
         * #SoupSession:proxy-resolver property.
         */
        proxyUri?: URI | null
        /**
         * File containing SSL CA certificates.
         * 
         * If the specified file does not exist or cannot be read,
         * then libsoup will print a warning, and then behave as
         * though it had read in a empty CA file, meaning that all SSL
         * certificates will be considered invalid.
         */
        sslCaFile?: string | null
        /**
         * Normally, if #SoupSession:tls-database is set (including if
         * it was set via #SoupSession:ssl-use-system-ca-file or
         * #SoupSession:ssl-ca-file), then libsoup will reject any
         * certificate that is invalid (ie, expired) or that is not
         * signed by one of the given CA certificates, and the
         * #SoupMessage will fail with the status
         * %SOUP_STATUS_SSL_FAILED.
         * 
         * If you set #SoupSession:ssl-strict to %FALSE, then all
         * certificates will be accepted, and you will need to call
         * soup_message_get_https_status() to distinguish valid from
         * invalid certificates. (This can be used, eg, if you want to
         * accept invalid certificates after giving some sort of
         * warning.)
         * 
         * For a plain #SoupSession, if the session has no CA file or
         * TLS database, and this property is %TRUE, then all
         * certificates will be rejected. However, beware that the
         * deprecated #SoupSession subclasses (#SoupSessionAsync and
         * #SoupSessionSync) have the opposite behavior: if there is
         * no CA file or TLS database, then all certificates are always
         * accepted, and this property has no effect.
         */
        sslStrict?: boolean | null
        /**
         * Setting this to %TRUE is equivalent to setting
         * #SoupSession:tls-database to the default system CA database.
         * (and likewise, setting #SoupSession:tls-database to the
         * default database by hand will cause this property to
         * become %TRUE).
         * 
         * Setting this to %FALSE (when it was previously %TRUE) will
         * clear the #SoupSession:tls-database field.
         * 
         * See #SoupSession:ssl-strict for more information on how
         * https certificate validation is handled.
         * 
         * If you are using #SoupSessionAsync or
         * #SoupSessionSync, on libsoup older than 2.74.0, the default value
         * is %FALSE, for backward compatibility.
         */
        sslUseSystemCaFile?: boolean | null
        /**
         * The timeout (in seconds) for socket I/O operations
         * (including connecting to a server, and waiting for a reply
         * to an HTTP request).
         * 
         * Although you can change this property at any time, it will
         * only affect newly-created connections, not currently-open
         * ones. You can call soup_session_abort() after setting this
         * if you want to ensure that all future connections will have
         * this timeout value.
         * 
         * Note that the default value of 60 seconds only applies to
         * plain #SoupSessions. If you are using #SoupSessionAsync or
         * #SoupSessionSync, the default value is 0 (meaning socket I/O
         * will not time out).
         * 
         * Not to be confused with #SoupSession:idle-timeout (which is
         * the length of time that idle persistent connections will be
         * kept open).
         */
        timeout?: number | null
        /**
         * Sets the #GTlsDatabase to use for validating SSL/TLS
         * certificates.
         * 
         * Note that setting the #SoupSession:ssl-ca-file or
         * #SoupSession:ssl-use-system-ca-file property will cause
         * this property to be set to a #GTlsDatabase corresponding to
         * the indicated file or system default.
         * 
         * See #SoupSession:ssl-strict for more information on how
         * https certificate validation is handled.
         * 
         * If you are using a plain #SoupSession then
         * #SoupSession:ssl-use-system-ca-file will be %TRUE by
         * default, and so this property will be a copy of the system
         * CA database. If you are using #SoupSessionAsync or
         * #SoupSessionSync, on libsoup older than 2.74.0, this property
         * will be %NULL by default.
         */
        tlsDatabase?: Gio.TlsDatabase | null
        /**
         * A #GTlsInteraction object that will be passed on to any
         * #GTlsConnections created by the session. (This can be used to
         * provide client-side certificates, for example.)
         */
        tlsInteraction?: Gio.TlsInteraction | null
        /**
         * Whether or not to use NTLM authentication.
         */
        useNtlm?: boolean | null
        /**
         * If %TRUE (which it always is on a plain #SoupSession),
         * asynchronous HTTP requests in this session will run in
         * whatever the thread-default #GMainContext is at the time
         * they are started, rather than always occurring in
         * #SoupSession:async-context.
         */
        useThreadContext?: boolean | null
        /**
         * If non-%NULL, the value to use for the "User-Agent" header
         * on #SoupMessage<!-- -->s sent from this session.
         * 
         * RFC 2616 says: "The User-Agent request-header field
         * contains information about the user agent originating the
         * request. This is for statistical purposes, the tracing of
         * protocol violations, and automated recognition of user
         * agents for the sake of tailoring responses to avoid
         * particular user agent limitations. User agents SHOULD
         * include this field with requests."
         * 
         * The User-Agent header contains a list of one or more
         * product tokens, separated by whitespace, with the most
         * significant product token coming first. The tokens must be
         * brief, ASCII, and mostly alphanumeric (although "-", "_",
         * and "." are also allowed), and may optionally include a "/"
         * followed by a version string. You may also put comments,
         * enclosed in parentheses, between or after the tokens.
         * 
         * If you set a #SoupSession:user_agent property that has trailing
         * whitespace, #SoupSession will append its own product token
         * (eg, "<literal>libsoup/2.3.2</literal>") to the end of the
         * header for you.
         */
        userAgent?: string | null
    }

}

interface Session {

    // Own properties of Soup-2.4.Soup.Session

    /**
     * If non-%NULL, the value to use for the "Accept-Language" header
     * on #SoupMessage<!-- -->s sent from this session.
     * 
     * Setting this will disable
     * #SoupSession:accept-language-auto.
     */
    acceptLanguage: string | null
    /**
     * If %TRUE, #SoupSession will automatically set the string
     * for the "Accept-Language" header on every #SoupMessage
     * sent, based on the return value of g_get_language_names().
     * 
     * Setting this will override any previous value of
     * #SoupSession:accept-language.
     */
    acceptLanguageAuto: boolean
    /**
     * The #GMainContext that miscellaneous session-related
     * asynchronous callbacks are invoked on. (Eg, setting
     * #SoupSession:idle-timeout will add a timeout source on this
     * context.)
     * 
     * For a plain #SoupSession, this property is always set to
     * the #GMainContext that is the thread-default at the time
     * the session was created, and cannot be overridden. For the
     * deprecated #SoupSession subclasses, the default value is
     * %NULL, meaning to use the global default #GMainContext.
     * 
     * If #SoupSession:use-thread-context is %FALSE, this context
     * will also be used for asynchronous HTTP I/O.
     */
    readonly asyncContext: any
    /**
     * A %NULL-terminated array of URI schemes that should be
     * considered to be aliases for "http". Eg, if this included
     * <literal>"dav"</literal>, than a URI of
     * <literal>dav://example.com/path</literal> would be treated
     * identically to <literal>http://example.com/path</literal>.
     * 
     * In a plain #SoupSession, the default value is %NULL,
     * meaning that only "http" is recognized as meaning "http".
     * In #SoupSessionAsync and #SoupSessionSync, for backward
     * compatibility, the default value is an array containing the
     * single element <literal>"*"</literal>, a special value
     * which means that any scheme except "https" is considered to
     * be an alias for "http".
     * 
     * See also #SoupSession:https-aliases.
     */
    httpAliases: string[]
    /**
     * A comma-delimited list of URI schemes that should be
     * considered to be aliases for "https". See
     * #SoupSession:http-aliases for more information.
     * 
     * The default value is %NULL, meaning that no URI schemes
     * are considered aliases for "https".
     */
    httpsAliases: string[]
    /**
     * Connection lifetime (in seconds) when idle. Any connection
     * left idle longer than this will be closed.
     * 
     * Although you can change this property at any time, it will
     * only affect newly-created connections, not currently-open
     * ones. You can call soup_session_abort() after setting this
     * if you want to ensure that all future connections will have
     * this timeout value.
     * 
     * Note that the default value of 60 seconds only applies to
     * plain #SoupSessions. If you are using #SoupSessionAsync or
     * #SoupSessionSync, the default value is 0 (meaning idle
     * connections will never time out).
     */
    idleTimeout: number
    /**
     * Sets the #SoupAddress to use for the client side of
     * the connection.
     * 
     * Use this property if you want for instance to bind the
     * local socket to a specific IP address.
     */
    readonly localAddress: Address
    maxConns: number
    maxConnsPerHost: number
    /**
     * A #GProxyResolver to use with this session. Setting this
     * will clear the #SoupSession:proxy-uri property, and remove
     * any <type>SoupProxyURIResolver</type> features that have
     * been added to the session.
     * 
     * By default, in a plain #SoupSession, this is set to the
     * default #GProxyResolver, but you can set it to %NULL if you
     * don't want to use proxies, or set it to your own
     * #GProxyResolver if you want to control what proxies get
     * used.
     */
    proxyResolver: Gio.ProxyResolver
    /**
     * A proxy to use for all http and https requests in this
     * session. Setting this will clear the
     * #SoupSession:proxy-resolver property, and remove any
     * <type>SoupProxyURIResolver</type> features that have been
     * added to the session. Setting this property will also
     * cancel all currently pending messages.
     * 
     * Note that #SoupSession will normally handle looking up the
     * user's proxy settings for you; you should only use
     * #SoupSession:proxy-uri if you need to override the user's
     * normal proxy settings.
     * 
     * Also note that this proxy will be used for
     * <emphasis>all</emphasis> requests; even requests to
     * <literal>localhost</literal>. If you need more control over
     * proxies, you can create a #GSimpleProxyResolver and set the
     * #SoupSession:proxy-resolver property.
     */
    proxyUri: URI
    /**
     * File containing SSL CA certificates.
     * 
     * If the specified file does not exist or cannot be read,
     * then libsoup will print a warning, and then behave as
     * though it had read in a empty CA file, meaning that all SSL
     * certificates will be considered invalid.
     */
    sslCaFile: string | null
    /**
     * Normally, if #SoupSession:tls-database is set (including if
     * it was set via #SoupSession:ssl-use-system-ca-file or
     * #SoupSession:ssl-ca-file), then libsoup will reject any
     * certificate that is invalid (ie, expired) or that is not
     * signed by one of the given CA certificates, and the
     * #SoupMessage will fail with the status
     * %SOUP_STATUS_SSL_FAILED.
     * 
     * If you set #SoupSession:ssl-strict to %FALSE, then all
     * certificates will be accepted, and you will need to call
     * soup_message_get_https_status() to distinguish valid from
     * invalid certificates. (This can be used, eg, if you want to
     * accept invalid certificates after giving some sort of
     * warning.)
     * 
     * For a plain #SoupSession, if the session has no CA file or
     * TLS database, and this property is %TRUE, then all
     * certificates will be rejected. However, beware that the
     * deprecated #SoupSession subclasses (#SoupSessionAsync and
     * #SoupSessionSync) have the opposite behavior: if there is
     * no CA file or TLS database, then all certificates are always
     * accepted, and this property has no effect.
     */
    sslStrict: boolean
    /**
     * Setting this to %TRUE is equivalent to setting
     * #SoupSession:tls-database to the default system CA database.
     * (and likewise, setting #SoupSession:tls-database to the
     * default database by hand will cause this property to
     * become %TRUE).
     * 
     * Setting this to %FALSE (when it was previously %TRUE) will
     * clear the #SoupSession:tls-database field.
     * 
     * See #SoupSession:ssl-strict for more information on how
     * https certificate validation is handled.
     * 
     * If you are using #SoupSessionAsync or
     * #SoupSessionSync, on libsoup older than 2.74.0, the default value
     * is %FALSE, for backward compatibility.
     */
    sslUseSystemCaFile: boolean
    /**
     * The timeout (in seconds) for socket I/O operations
     * (including connecting to a server, and waiting for a reply
     * to an HTTP request).
     * 
     * Although you can change this property at any time, it will
     * only affect newly-created connections, not currently-open
     * ones. You can call soup_session_abort() after setting this
     * if you want to ensure that all future connections will have
     * this timeout value.
     * 
     * Note that the default value of 60 seconds only applies to
     * plain #SoupSessions. If you are using #SoupSessionAsync or
     * #SoupSessionSync, the default value is 0 (meaning socket I/O
     * will not time out).
     * 
     * Not to be confused with #SoupSession:idle-timeout (which is
     * the length of time that idle persistent connections will be
     * kept open).
     */
    timeout: number
    /**
     * Sets the #GTlsDatabase to use for validating SSL/TLS
     * certificates.
     * 
     * Note that setting the #SoupSession:ssl-ca-file or
     * #SoupSession:ssl-use-system-ca-file property will cause
     * this property to be set to a #GTlsDatabase corresponding to
     * the indicated file or system default.
     * 
     * See #SoupSession:ssl-strict for more information on how
     * https certificate validation is handled.
     * 
     * If you are using a plain #SoupSession then
     * #SoupSession:ssl-use-system-ca-file will be %TRUE by
     * default, and so this property will be a copy of the system
     * CA database. If you are using #SoupSessionAsync or
     * #SoupSessionSync, on libsoup older than 2.74.0, this property
     * will be %NULL by default.
     */
    tlsDatabase: Gio.TlsDatabase
    /**
     * A #GTlsInteraction object that will be passed on to any
     * #GTlsConnections created by the session. (This can be used to
     * provide client-side certificates, for example.)
     */
    tlsInteraction: Gio.TlsInteraction
    /**
     * Whether or not to use NTLM authentication.
     */
    useNtlm: boolean
    /**
     * If %TRUE (which it always is on a plain #SoupSession),
     * asynchronous HTTP requests in this session will run in
     * whatever the thread-default #GMainContext is at the time
     * they are started, rather than always occurring in
     * #SoupSession:async-context.
     */
    useThreadContext: boolean
    /**
     * If non-%NULL, the value to use for the "User-Agent" header
     * on #SoupMessage<!-- -->s sent from this session.
     * 
     * RFC 2616 says: "The User-Agent request-header field
     * contains information about the user agent originating the
     * request. This is for statistical purposes, the tracing of
     * protocol violations, and automated recognition of user
     * agents for the sake of tailoring responses to avoid
     * particular user agent limitations. User agents SHOULD
     * include this field with requests."
     * 
     * The User-Agent header contains a list of one or more
     * product tokens, separated by whitespace, with the most
     * significant product token coming first. The tokens must be
     * brief, ASCII, and mostly alphanumeric (although "-", "_",
     * and "." are also allowed), and may optionally include a "/"
     * followed by a version string. You may also put comments,
     * enclosed in parentheses, between or after the tokens.
     * 
     * If you set a #SoupSession:user_agent property that has trailing
     * whitespace, #SoupSession will append its own product token
     * (eg, "<literal>libsoup/2.3.2</literal>") to the end of the
     * header for you.
     */
    userAgent: string | null
    __gtype__: number

    // Own fields of Soup-2.4.Soup.Session

    parent: GObject.Object

    // Owm methods of Soup-2.4.Soup.Session

    /**
     * Cancels all pending requests in `session` and closes all idle
     * persistent connections.
     * 
     * The message cancellation has the same semantics as with
     * soup_session_cancel_message(); asynchronous requests on a
     * #SoupSessionAsync will have their callback called before
     * soup_session_abort() returns. Requests on a plain #SoupSession will
     * not.
     */
    abort(): void
    /**
     * Adds `feature'`s functionality to `session`. You can also add a
     * feature to the session at construct time by using the
     * %SOUP_SESSION_ADD_FEATURE property.
     * 
     * See the main #SoupSession documentation for information on what
     * features are present in sessions by default.
     * @param feature an object that implements #SoupSessionFeature
     */
    addFeature(feature: SessionFeature): void
    /**
     * If `feature_type` is the type of a class that implements
     * #SoupSessionFeature, this creates a new feature of that type and
     * adds it to `session` as with soup_session_add_feature(). You can use
     * this when you don't need to customize the new feature in any way.
     * 
     * If `feature_type` is not a #SoupSessionFeature type, this gives each
     * existing feature on `session` the chance to accept `feature_type` as
     * a "subfeature". This can be used to add new #SoupAuth or
     * #SoupRequest types, for instance.
     * 
     * You can also add a feature to the session at construct time by
     * using the %SOUP_SESSION_ADD_FEATURE_BY_TYPE property.
     * 
     * See the main #SoupSession documentation for information on what
     * features are present in sessions by default.
     * @param featureType a #GType
     */
    addFeatureByType(featureType: GObject.GType): void
    // Has conflict: cancelMessage(msg: Message, statusCode: number): void
    /**
     * Start a connection to `uri`. The operation can be monitored by providing a `progress_callback`
     * and finishes when the connection is done or an error ocurred.
     * 
     * Call soup_session_connect_finish() to get the #GIOStream to communicate with the server.
     * @param uri a #SoupURI to connect to
     * @param cancellable a #GCancellable
     * @param progressCallback a #SoupSessionConnectProgressCallback which will be called for every network event that occurs during the connection.
     * @param callback the callback to invoke when the operation finishes
     */
    connectAsync(uri: URI, cancellable: Gio.Cancellable | null, progressCallback: SessionConnectProgressCallback | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the #GIOStream created for the connection to communicate with the server.
     * @param result the #GAsyncResult passed to your callback
     * @returns a new #GIOStream, or %NULL on error.
     */
    connectFinish(result: Gio.AsyncResult): Gio.IOStream
    /**
     * Gets `session'`s #SoupSession:async-context. This does not add a ref
     * to the context, so you will need to ref it yourself if you want it
     * to outlive its session.
     * 
     * For a modern #SoupSession, this will always just return the
     * thread-default #GMainContext, and so is not especially useful.
     * @returns @session's #GMainContext, which may be %NULL
     */
    getAsyncContext(): GLib.MainContext | null
    /**
     * Gets the first feature in `session` of type `feature_type`. For
     * features where there may be more than one feature of a given type,
     * use soup_session_get_features().
     * @param featureType the #GType of the feature to get
     * @returns a #SoupSessionFeature, or %NULL. The feature is owned by @session.
     */
    getFeature(featureType: GObject.GType): SessionFeature | null
    /**
     * Gets the first feature in `session` of type `feature_type,` provided
     * that it is not disabled for `msg`. As with
     * soup_session_get_feature(), this should only be used for features
     * where `feature_type` is only expected to match a single feature. In
     * particular, if there are two matching features, and the first is
     * disabled on `msg,` and the second is not, then this will return
     * %NULL, not the second feature.
     * @param featureType the #GType of the feature to get
     * @param msg a #SoupMessage
     * @returns a #SoupSessionFeature, or %NULL. The feature is owned by @session.
     */
    getFeatureForMessage(featureType: GObject.GType, msg: Message): SessionFeature | null
    /**
     * Generates a list of `session'`s features of type `feature_type`. (If
     * you want to see all features, you can pass %SOUP_TYPE_SESSION_FEATURE
     * for `feature_type`.)
     * @param featureType the #GType of the class of features to get
     * @returns  a list of features. You must free the list, but not its contents
     */
    getFeatures(featureType: GObject.GType): SessionFeature[]
    /**
     * Tests if `session` has at a feature of type `feature_type` (which can
     * be the type of either a #SoupSessionFeature, or else a subtype of
     * some class managed by another feature, such as #SoupAuth or
     * #SoupRequest).
     * @param featureType the #GType of the class of features to check for
     * @returns %TRUE or %FALSE
     */
    hasFeature(featureType: GObject.GType): boolean
    /**
     * Pauses HTTP I/O on `msg`. Call soup_session_unpause_message() to
     * resume I/O.
     * 
     * This may only be called for asynchronous messages (those sent on a
     * #SoupSessionAsync or using soup_session_queue_message()).
     * @param msg a #SoupMessage currently running on `session`
     */
    pauseMessage(msg: Message): void
    /**
     * Tells `session` that an URI from the given `hostname` may be requested
     * shortly, and so the session can try to prepare by resolving the
     * domain name in advance, in order to work more quickly once the URI
     * is actually requested.
     * 
     * If `cancellable` is non-%NULL, it can be used to cancel the
     * resolution. `callback` will still be invoked in this case, with a
     * status of %SOUP_STATUS_CANCELLED.
     * @param hostname a hostname to be resolved
     * @param cancellable a #GCancellable object, or %NULL
     * @param callback callback to call with the     result, or %NULL
     */
    prefetchDns(hostname: string | null, cancellable: Gio.Cancellable | null, callback: AddressCallback | null): void
    /**
     * Tells `session` that `uri` may be requested shortly, and so the
     * session can try to prepare (resolving the domain name, obtaining
     * proxy address, etc.) in order to work more quickly once the URI is
     * actually requested.
     * @param uri a #SoupURI which may be required
     */
    prepareForUri(uri: URI): void
    // Has conflict: queueMessage(msg: Message, callback: SessionCallback | null): void
    /**
     * Updates `msg'`s URI according to its status code and "Location"
     * header, and requeues it on `session`. Use this when you have set
     * %SOUP_MESSAGE_NO_REDIRECT on a message, but have decided to allow a
     * particular redirection to occur, or if you want to allow a
     * redirection that #SoupSession will not perform automatically (eg,
     * redirecting a non-safe method such as DELETE).
     * 
     * If `msg'`s status code indicates that it should be retried as a GET
     * request, then `msg` will be modified accordingly.
     * 
     * If `msg` has already been redirected too many times, this will
     * cause it to fail with %SOUP_STATUS_TOO_MANY_REDIRECTS.
     * @param msg a #SoupMessage that has received a 3xx response
     * @returns %TRUE if a redirection was applied, %FALSE if not (eg, because there was no Location header, or it could not be parsed).
     */
    redirectMessage(msg: Message): boolean
    /**
     * Removes `feature'`s functionality from `session`.
     * @param feature a feature that has previously been added to `session`
     */
    removeFeature(feature: SessionFeature): void
    /**
     * Removes all features of type `feature_type` (or any subclass of
     * `feature_type)` from `session`. You can also remove standard features
     * from the session at construct time by using the
     * %SOUP_SESSION_REMOVE_FEATURE_BY_TYPE property.
     * @param featureType a #GType
     */
    removeFeatureByType(featureType: GObject.GType): void
    /**
     * Creates a #SoupRequest for retrieving `uri_string`.
     * @param uriString a URI, in string form
     * @returns a new #SoupRequest, or   %NULL on error.
     */
    request(uriString: string | null): Request
    /**
     * Creates a #SoupRequest for retrieving `uri_string,` which must be an
     * "http" or "https" URI (or another protocol listed in `session'`s
     * #SoupSession:http-aliases or #SoupSession:https-aliases).
     * @param method an HTTP method
     * @param uriString a URI, in string form
     * @returns a new #SoupRequestHTTP, or   %NULL on error.
     */
    requestHttp(method: string | null, uriString: string | null): RequestHTTP
    /**
     * Creates a #SoupRequest for retrieving `uri,` which must be an
     * "http" or "https" URI (or another protocol listed in `session'`s
     * #SoupSession:http-aliases or #SoupSession:https-aliases).
     * @param method an HTTP method
     * @param uri a #SoupURI representing the URI to retrieve
     * @returns a new #SoupRequestHTTP, or   %NULL on error.
     */
    requestHttpUri(method: string | null, uri: URI): RequestHTTP
    /**
     * Creates a #SoupRequest for retrieving `uri`.
     * @param uri a #SoupURI representing the URI to retrieve
     * @returns a new #SoupRequest, or   %NULL on error.
     */
    requestUri(uri: URI): Request
    // Has conflict: requeueMessage(msg: Message): void
    /**
     * Synchronously sends `msg` and waits for the beginning of a response.
     * On success, a #GInputStream will be returned which you can use to
     * read the response body. ("Success" here means only that an HTTP
     * response was received and understood; it does not necessarily mean
     * that a 2xx class status code was received.)
     * 
     * If non-%NULL, `cancellable` can be used to cancel the request;
     * soup_session_send() will return a %G_IO_ERROR_CANCELLED error. Note
     * that with requests that have side effects (eg,
     * <literal>POST</literal>, <literal>PUT</literal>,
     * <literal>DELETE</literal>) it is possible that you might cancel the
     * request after the server acts on it, but before it returns a
     * response, leaving the remote resource in an unknown state.
     * 
     * If `msg` is requeued due to a redirect or authentication, the
     * initial (3xx/401/407) response body will be suppressed, and
     * soup_session_send() will only return once a final response has been
     * received.
     * 
     * Contrast this method with soup_session_send_message(), which also
     * synchronously sends a #SoupMessage, but doesn't return until the
     * response has been completely read.
     * 
     * (Note that this method cannot be called on the deprecated
     * #SoupSessionAsync subclass.)
     * @param msg a #SoupMessage
     * @param cancellable a #GCancellable
     * @returns a #GInputStream for reading the   response body, or %NULL on error.
     */
    send(msg: Message, cancellable: Gio.Cancellable | null): Gio.InputStream
    /**
     * Asynchronously sends `msg` and waits for the beginning of a
     * response. When `callback` is called, then either `msg` has been sent,
     * and its response headers received, or else an error has occurred.
     * Call soup_session_send_finish() to get a #GInputStream for reading
     * the response body.
     * 
     * See soup_session_send() for more details on the general semantics.
     * 
     * Contrast this method with soup_session_queue_message(), which also
     * asynchronously sends a #SoupMessage, but doesn't invoke its
     * callback until the response has been completely read.
     * 
     * (Note that this method cannot be called on the deprecated
     * #SoupSessionSync subclass, and can only be called on
     * #SoupSessionAsync if you have set the
     * #SoupSession:use-thread-context property.)
     * @param msg a #SoupMessage
     * @param cancellable a #GCancellable
     * @param callback the callback to invoke
     */
    sendAsync(msg: Message, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the response to a soup_session_send_async() call and (if
     * successful), returns a #GInputStream that can be used to read the
     * response body.
     * @param result the #GAsyncResult passed to your callback
     * @returns a #GInputStream for reading the   response body, or %NULL on error.
     */
    sendFinish(result: Gio.AsyncResult): Gio.InputStream
    // Has conflict: sendMessage(msg: Message): number
    /**
     * "Steals" the HTTP connection associated with `msg` from `session`.
     * This happens immediately, regardless of the current state of the
     * connection, and `msg'`s callback will not be called. You can steal
     * the connection from a #SoupMessage signal handler if you need to
     * wait for part or all of the response to be received first.
     * 
     * Calling this function may cause `msg` to be freed if you are not
     * holding any other reference to it.
     * @param msg the message whose connection is to be stolen
     * @returns the #GIOStream formerly associated   with @msg (or %NULL if @msg was no longer associated with a   connection). No guarantees are made about what kind of #GIOStream   is returned.
     */
    stealConnection(msg: Message): Gio.IOStream
    /**
     * Resumes HTTP I/O on `msg`. Use this to resume after calling
     * soup_session_pause_message().
     * 
     * If `msg` is being sent via blocking I/O, this will resume reading or
     * writing immediately. If `msg` is using non-blocking I/O, then
     * reading or writing won't resume until you return to the main loop.
     * 
     * This may only be called for asynchronous messages (those sent on a
     * #SoupSessionAsync or using soup_session_queue_message()).
     * @param msg a #SoupMessage currently running on `session`
     */
    unpauseMessage(msg: Message): void
    /**
     * Asynchronously creates a #SoupWebsocketConnection to communicate
     * with a remote server.
     * 
     * All necessary WebSocket-related headers will be added to `msg,` and
     * it will then be sent and asynchronously processed normally
     * (including handling of redirection and HTTP authentication).
     * 
     * If the server returns "101 Switching Protocols", then `msg'`s status
     * code and response headers will be updated, and then the WebSocket
     * handshake will be completed. On success,
     * soup_session_websocket_connect_finish() will return a new
     * #SoupWebsocketConnection. On failure it will return a #GError.
     * 
     * If the server returns a status other than "101 Switching
     * Protocols", then `msg` will contain the complete response headers
     * and body from the server's response, and
     * soup_session_websocket_connect_finish() will return
     * %SOUP_WEBSOCKET_ERROR_NOT_WEBSOCKET.
     * @param msg #SoupMessage indicating the WebSocket server to connect to
     * @param origin origin of the connection
     * @param protocols a   %NULL-terminated array of protocols supported
     * @param cancellable a #GCancellable
     * @param callback the callback to invoke
     */
    websocketConnectAsync(msg: Message, origin: string | null, protocols: string[] | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the #SoupWebsocketConnection response to a
     * soup_session_websocket_connect_async() call and (if successful),
     * returns a #SoupWebsocketConnection that can be used to communicate
     * with the server.
     * @param result the #GAsyncResult passed to your callback
     * @returns a new #SoupWebsocketConnection, or   %NULL on error.
     */
    websocketConnectFinish(result: Gio.AsyncResult): WebsocketConnection
    /**
     * Checks if `msg` contains a response that would cause `session` to
     * redirect it to a new URL (ignoring `msg'`s %SOUP_MESSAGE_NO_REDIRECT
     * flag, and the number of times it has already been redirected).
     * @param msg a #SoupMessage that has response headers
     * @returns whether @msg would be redirected
     */
    wouldRedirect(msg: Message): boolean

    // Own virtual methods of Soup-2.4.Soup.Session

    authRequired(msg: Message, auth: Auth, retrying: boolean): void
    authenticate(msg: Message, auth: Auth, retrying: boolean): void
    /**
     * Causes `session` to immediately finish processing `msg` (regardless
     * of its current state) with a final status_code of `status_code`. You
     * may call this at any time after handing `msg` off to `session;` if
     * `session` has started sending the request but has not yet received
     * the complete response, then it will close the request's connection.
     * Note that with requests that have side effects (eg,
     * <literal>POST</literal>, <literal>PUT</literal>,
     * <literal>DELETE</literal>) it is possible that you might cancel the
     * request after the server acts on it, but before it returns a
     * response, leaving the remote resource in an unknown state.
     * 
     * If the message is cancelled while its response body is being read,
     * then the response body in `msg` will be left partially-filled-in.
     * The response headers, on the other hand, will always be either
     * empty or complete.
     * 
     * Beware that with the deprecated #SoupSessionAsync, messages queued
     * with soup_session_queue_message() will have their callbacks invoked
     * before soup_session_cancel_message() returns. The plain
     * #SoupSession does not have this behavior; cancelling an
     * asynchronous message will merely queue its callback to be run after
     * returning to the main loop.
     * @virtual 
     * @param msg the message to cancel
     * @param statusCode status code to set on `msg` (generally %SOUP_STATUS_CANCELLED)
     */
    cancelMessage(msg: Message, statusCode: number): void
    flushQueue(): void
    kick(): void
    /**
     * Queues the message `msg` for asynchronously sending the request and
     * receiving a response in the current thread-default #GMainContext.
     * If `msg` has been processed before, any resources related to the
     * time it was last sent are freed.
     * 
     * Upon message completion, the callback specified in `callback` will
     * be invoked. If after returning from this callback the message has not
     * been requeued, `msg` will be unreffed.
     * 
     * (The behavior above applies to a plain #SoupSession; if you are
     * using #SoupSessionAsync or #SoupSessionSync, then the #GMainContext
     * that is used depends on the settings of #SoupSession:async-context
     * and #SoupSession:use-thread-context, and for #SoupSessionSync, the
     * message will actually be sent and processed in another thread, with
     * only the final callback occurring in the indicated #GMainContext.)
     * 
     * Contrast this method with soup_session_send_async(), which also
     * asynchronously sends a message, but returns before reading the
     * response body, and allows you to read the response via a
     * #GInputStream.
     * @virtual 
     * @param msg the message to queue
     * @param callback a #SoupSessionCallback which will be called after the message completes or when an unrecoverable error occurs.
     */
    queueMessage(msg: Message, callback: SessionCallback | null): void
    requestStarted(msg: Message, socket: Socket): void
    /**
     * This causes `msg` to be placed back on the queue to be attempted
     * again.
     * @virtual 
     * @param msg the message to requeue
     */
    requeueMessage(msg: Message): void
    /**
     * Synchronously send `msg`. This call will not return until the
     * transfer is finished successfully or there is an unrecoverable
     * error.
     * 
     * Unlike with soup_session_queue_message(), `msg` is not freed upon
     * return.
     * 
     * (Note that if you call this method on a #SoupSessionAsync, it will
     * still use asynchronous I/O internally, running the glib main loop
     * to process the message, which may also cause other events to be
     * processed.)
     * 
     * Contrast this method with soup_session_send(), which also
     * synchronously sends a message, but returns before reading the
     * response body, and allows you to read the response via a
     * #GInputStream.
     * @virtual 
     * @param msg the message to send
     * @returns the HTTP status code of the response
     */
    sendMessage(msg: Message): number

    // Own signals of Soup-2.4.Soup.Session

    connect(sigName: "authenticate", callback: Session.AuthenticateSignalCallback): number
    on(sigName: "authenticate", callback: Session.AuthenticateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "authenticate", callback: Session.AuthenticateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "authenticate", callback: Session.AuthenticateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "authenticate", auth: Auth, retrying: boolean, ...args: any[]): void
    connect(sigName: "connection-created", callback: Session.ConnectionCreatedSignalCallback): number
    on(sigName: "connection-created", callback: Session.ConnectionCreatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "connection-created", callback: Session.ConnectionCreatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "connection-created", callback: Session.ConnectionCreatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "connection-created", ...args: any[]): void
    connect(sigName: "request-queued", callback: Session.RequestQueuedSignalCallback): number
    on(sigName: "request-queued", callback: Session.RequestQueuedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-queued", callback: Session.RequestQueuedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-queued", callback: Session.RequestQueuedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "request-queued", ...args: any[]): void
    connect(sigName: "request-started", callback: Session.RequestStartedSignalCallback): number
    on(sigName: "request-started", callback: Session.RequestStartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-started", callback: Session.RequestStartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-started", callback: Session.RequestStartedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "request-started", socket: Socket, ...args: any[]): void
    connect(sigName: "request-unqueued", callback: Session.RequestUnqueuedSignalCallback): number
    on(sigName: "request-unqueued", callback: Session.RequestUnqueuedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-unqueued", callback: Session.RequestUnqueuedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-unqueued", callback: Session.RequestUnqueuedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "request-unqueued", ...args: any[]): void
    connect(sigName: "tunneling", callback: Session.TunnelingSignalCallback): number
    on(sigName: "tunneling", callback: Session.TunnelingSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "tunneling", callback: Session.TunnelingSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "tunneling", callback: Session.TunnelingSignalCallback): NodeJS.EventEmitter
    emit(sigName: "tunneling", ...args: any[]): void

    // Class property signals of Soup-2.4.Soup.Session

    connect(sigName: "notify::accept-language", callback: (...args: any[]) => void): number
    on(sigName: "notify::accept-language", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accept-language", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accept-language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accept-language", ...args: any[]): void
    connect(sigName: "notify::accept-language-auto", callback: (...args: any[]) => void): number
    on(sigName: "notify::accept-language-auto", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accept-language-auto", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accept-language-auto", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accept-language-auto", ...args: any[]): void
    connect(sigName: "notify::async-context", callback: (...args: any[]) => void): number
    on(sigName: "notify::async-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::async-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::async-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::async-context", ...args: any[]): void
    connect(sigName: "notify::http-aliases", callback: (...args: any[]) => void): number
    on(sigName: "notify::http-aliases", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::http-aliases", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::http-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::http-aliases", ...args: any[]): void
    connect(sigName: "notify::https-aliases", callback: (...args: any[]) => void): number
    on(sigName: "notify::https-aliases", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::https-aliases", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::https-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::https-aliases", ...args: any[]): void
    connect(sigName: "notify::idle-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::idle-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::idle-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::idle-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::idle-timeout", ...args: any[]): void
    connect(sigName: "notify::local-address", callback: (...args: any[]) => void): number
    on(sigName: "notify::local-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::local-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::local-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::local-address", ...args: any[]): void
    connect(sigName: "notify::max-conns", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-conns", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-conns", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-conns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-conns", ...args: any[]): void
    connect(sigName: "notify::max-conns-per-host", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-conns-per-host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-conns-per-host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-conns-per-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-conns-per-host", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::proxy-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-uri", ...args: any[]): void
    connect(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void): number
    on(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ssl-ca-file", ...args: any[]): void
    connect(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): number
    on(sigName: "notify::ssl-strict", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ssl-strict", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ssl-strict", ...args: any[]): void
    connect(sigName: "notify::ssl-use-system-ca-file", callback: (...args: any[]) => void): number
    on(sigName: "notify::ssl-use-system-ca-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ssl-use-system-ca-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ssl-use-system-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ssl-use-system-ca-file", ...args: any[]): void
    connect(sigName: "notify::timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::timeout", ...args: any[]): void
    connect(sigName: "notify::tls-database", callback: (...args: any[]) => void): number
    on(sigName: "notify::tls-database", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tls-database", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tls-database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tls-database", ...args: any[]): void
    connect(sigName: "notify::tls-interaction", callback: (...args: any[]) => void): number
    on(sigName: "notify::tls-interaction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tls-interaction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tls-interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tls-interaction", ...args: any[]): void
    connect(sigName: "notify::use-ntlm", callback: (...args: any[]) => void): number
    on(sigName: "notify::use-ntlm", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::use-ntlm", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::use-ntlm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::use-ntlm", ...args: any[]): void
    connect(sigName: "notify::use-thread-context", callback: (...args: any[]) => void): number
    on(sigName: "notify::use-thread-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::use-thread-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::use-thread-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::use-thread-context", ...args: any[]): void
    connect(sigName: "notify::user-agent", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-agent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-agent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-agent", ...args: any[]): void
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

class Session extends GObject.Object {

    // Own properties of Soup-2.4.Soup.Session

    static name: string

    // Constructors of Soup-2.4.Soup.Session

    constructor(config?: Session.ConstructorProperties) 
    /**
     * Creates a #SoupSession with the default options.
     * @constructor 
     * @returns the new session.
     */
    constructor() 
    /**
     * Creates a #SoupSession with the default options.
     * @constructor 
     * @returns the new session.
     */
    static new(): Session
    _init(config?: Session.ConstructorProperties): void
}

module SessionAsync {

    // Constructor properties interface

    interface ConstructorProperties extends Session.ConstructorProperties {
    }

}

interface SessionAsync {

    // Own properties of Soup-2.4.Soup.SessionAsync

    __gtype__: number

    // Own fields of Soup-2.4.Soup.SessionAsync

    parent: Session & GObject.Object

    // Class property signals of Soup-2.4.Soup.SessionAsync

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::accept-language", callback: (...args: any[]) => void): number
    on(sigName: "notify::accept-language", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accept-language", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accept-language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accept-language", ...args: any[]): void
    connect(sigName: "notify::accept-language-auto", callback: (...args: any[]) => void): number
    on(sigName: "notify::accept-language-auto", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accept-language-auto", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accept-language-auto", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accept-language-auto", ...args: any[]): void
    connect(sigName: "notify::async-context", callback: (...args: any[]) => void): number
    on(sigName: "notify::async-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::async-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::async-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::async-context", ...args: any[]): void
    connect(sigName: "notify::http-aliases", callback: (...args: any[]) => void): number
    on(sigName: "notify::http-aliases", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::http-aliases", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::http-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::http-aliases", ...args: any[]): void
    connect(sigName: "notify::https-aliases", callback: (...args: any[]) => void): number
    on(sigName: "notify::https-aliases", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::https-aliases", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::https-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::https-aliases", ...args: any[]): void
    connect(sigName: "notify::idle-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::idle-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::idle-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::idle-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::idle-timeout", ...args: any[]): void
    connect(sigName: "notify::local-address", callback: (...args: any[]) => void): number
    on(sigName: "notify::local-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::local-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::local-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::local-address", ...args: any[]): void
    connect(sigName: "notify::max-conns", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-conns", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-conns", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-conns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-conns", ...args: any[]): void
    connect(sigName: "notify::max-conns-per-host", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-conns-per-host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-conns-per-host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-conns-per-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-conns-per-host", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::proxy-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-uri", ...args: any[]): void
    connect(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void): number
    on(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ssl-ca-file", ...args: any[]): void
    connect(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): number
    on(sigName: "notify::ssl-strict", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ssl-strict", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ssl-strict", ...args: any[]): void
    connect(sigName: "notify::ssl-use-system-ca-file", callback: (...args: any[]) => void): number
    on(sigName: "notify::ssl-use-system-ca-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ssl-use-system-ca-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ssl-use-system-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ssl-use-system-ca-file", ...args: any[]): void
    connect(sigName: "notify::timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::timeout", ...args: any[]): void
    connect(sigName: "notify::tls-database", callback: (...args: any[]) => void): number
    on(sigName: "notify::tls-database", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tls-database", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tls-database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tls-database", ...args: any[]): void
    connect(sigName: "notify::tls-interaction", callback: (...args: any[]) => void): number
    on(sigName: "notify::tls-interaction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tls-interaction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tls-interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tls-interaction", ...args: any[]): void
    connect(sigName: "notify::use-ntlm", callback: (...args: any[]) => void): number
    on(sigName: "notify::use-ntlm", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::use-ntlm", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::use-ntlm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::use-ntlm", ...args: any[]): void
    connect(sigName: "notify::use-thread-context", callback: (...args: any[]) => void): number
    on(sigName: "notify::use-thread-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::use-thread-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::use-thread-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::use-thread-context", ...args: any[]): void
    connect(sigName: "notify::user-agent", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-agent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-agent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-agent", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class SessionAsync extends Session {

    // Own properties of Soup-2.4.Soup.SessionAsync

    static name: string

    // Constructors of Soup-2.4.Soup.SessionAsync

    constructor(config?: SessionAsync.ConstructorProperties) 
    /**
     * Creates an asynchronous #SoupSession with the default options.
     * @constructor 
     * @returns the new session.
     */
    constructor() 
    /**
     * Creates an asynchronous #SoupSession with the default options.
     * @constructor 
     * @returns the new session.
     */
    static new(): SessionAsync
    _init(config?: SessionAsync.ConstructorProperties): void
}

module SessionSync {

    // Constructor properties interface

    interface ConstructorProperties extends Session.ConstructorProperties {
    }

}

interface SessionSync {

    // Own properties of Soup-2.4.Soup.SessionSync

    __gtype__: number

    // Own fields of Soup-2.4.Soup.SessionSync

    parent: Session & GObject.Object

    // Class property signals of Soup-2.4.Soup.SessionSync

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::accept-language", callback: (...args: any[]) => void): number
    on(sigName: "notify::accept-language", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accept-language", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accept-language", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accept-language", ...args: any[]): void
    connect(sigName: "notify::accept-language-auto", callback: (...args: any[]) => void): number
    on(sigName: "notify::accept-language-auto", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accept-language-auto", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accept-language-auto", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accept-language-auto", ...args: any[]): void
    connect(sigName: "notify::async-context", callback: (...args: any[]) => void): number
    on(sigName: "notify::async-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::async-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::async-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::async-context", ...args: any[]): void
    connect(sigName: "notify::http-aliases", callback: (...args: any[]) => void): number
    on(sigName: "notify::http-aliases", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::http-aliases", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::http-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::http-aliases", ...args: any[]): void
    connect(sigName: "notify::https-aliases", callback: (...args: any[]) => void): number
    on(sigName: "notify::https-aliases", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::https-aliases", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::https-aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::https-aliases", ...args: any[]): void
    connect(sigName: "notify::idle-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::idle-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::idle-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::idle-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::idle-timeout", ...args: any[]): void
    connect(sigName: "notify::local-address", callback: (...args: any[]) => void): number
    on(sigName: "notify::local-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::local-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::local-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::local-address", ...args: any[]): void
    connect(sigName: "notify::max-conns", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-conns", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-conns", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-conns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-conns", ...args: any[]): void
    connect(sigName: "notify::max-conns-per-host", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-conns-per-host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-conns-per-host", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-conns-per-host", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-conns-per-host", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-resolver", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::proxy-uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::proxy-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::proxy-uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::proxy-uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::proxy-uri", ...args: any[]): void
    connect(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void): number
    on(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ssl-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ssl-ca-file", ...args: any[]): void
    connect(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): number
    on(sigName: "notify::ssl-strict", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ssl-strict", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ssl-strict", ...args: any[]): void
    connect(sigName: "notify::ssl-use-system-ca-file", callback: (...args: any[]) => void): number
    on(sigName: "notify::ssl-use-system-ca-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ssl-use-system-ca-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ssl-use-system-ca-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ssl-use-system-ca-file", ...args: any[]): void
    connect(sigName: "notify::timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::timeout", ...args: any[]): void
    connect(sigName: "notify::tls-database", callback: (...args: any[]) => void): number
    on(sigName: "notify::tls-database", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tls-database", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tls-database", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tls-database", ...args: any[]): void
    connect(sigName: "notify::tls-interaction", callback: (...args: any[]) => void): number
    on(sigName: "notify::tls-interaction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tls-interaction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tls-interaction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tls-interaction", ...args: any[]): void
    connect(sigName: "notify::use-ntlm", callback: (...args: any[]) => void): number
    on(sigName: "notify::use-ntlm", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::use-ntlm", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::use-ntlm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::use-ntlm", ...args: any[]): void
    connect(sigName: "notify::use-thread-context", callback: (...args: any[]) => void): number
    on(sigName: "notify::use-thread-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::use-thread-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::use-thread-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::use-thread-context", ...args: any[]): void
    connect(sigName: "notify::user-agent", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-agent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-agent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-agent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-agent", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class SessionSync extends Session {

    // Own properties of Soup-2.4.Soup.SessionSync

    static name: string

    // Constructors of Soup-2.4.Soup.SessionSync

    constructor(config?: SessionSync.ConstructorProperties) 
    /**
     * Creates an synchronous #SoupSession with the default options.
     * @constructor 
     * @returns the new session.
     */
    constructor() 
    /**
     * Creates an synchronous #SoupSession with the default options.
     * @constructor 
     * @returns the new session.
     */
    static new(): SessionSync
    _init(config?: SessionSync.ConstructorProperties): void
}

module Socket {

    // Signal callback interfaces

    /**
     * Signal callback interface for `disconnected`
     */
    interface DisconnectedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `event`
     */
    interface EventSignalCallback {
        (event: Gio.SocketClientEvent, connection: Gio.IOStream): void
    }

    /**
     * Signal callback interface for `new-connection`
     */
    interface NewConnectionSignalCallback {
        (new_: Socket): void
    }

    /**
     * Signal callback interface for `readable`
     */
    interface ReadableSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `writable`
     */
    interface WritableSignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Soup-2.4.Soup.Socket

        asyncContext?: any | null
        fd?: number | null
        gsocket?: Gio.Socket | null
        iostream?: Gio.IOStream | null
        ipv6Only?: boolean | null
        localAddress?: Address | null
        /**
         * Whether or not the socket uses non-blocking I/O.
         * 
         * #SoupSocket's I/O methods are designed around the idea of
         * using a single codepath for both synchronous and
         * asynchronous I/O. If you want to read off a #SoupSocket,
         * the "correct" way to do it is to call soup_socket_read() or
         * soup_socket_read_until() repeatedly until you have read
         * everything you want. If it returns %SOUP_SOCKET_WOULD_BLOCK
         * at any point, stop reading and wait for it to emit the
         * #SoupSocket::readable signal. Then go back to the
         * reading-as-much-as-you-can loop. Likewise, for writing to a
         * #SoupSocket, you should call soup_socket_write() either
         * until you have written everything, or it returns
         * %SOUP_SOCKET_WOULD_BLOCK (in which case you wait for
         * #SoupSocket::writable and then go back into the loop).
         * 
         * Code written this way will work correctly with both
         * blocking and non-blocking sockets; blocking sockets will
         * simply never return %SOUP_SOCKET_WOULD_BLOCK, and so the
         * code that handles that case just won't get used for them.
         */
        nonBlocking?: boolean | null
        remoteAddress?: Address | null
        sslCreds?: any | null
        sslFallback?: boolean | null
        sslStrict?: boolean | null
        timeout?: number | null
        /**
         * Use g_main_context_get_thread_default().
         */
        useThreadContext?: boolean | null
    }

}

interface Socket extends Gio.Initable {

    // Own properties of Soup-2.4.Soup.Socket

    readonly asyncContext: any
    readonly fd: number
    readonly gsocket: Gio.Socket
    readonly iostream: Gio.IOStream
    ipv6Only: boolean
    /**
     * Whether or not the socket is a server socket.
     * 
     * Note that for "ordinary" #SoupSockets this will be set for
     * both listening sockets and the sockets emitted by
     * #SoupSocket::new-connection, but for sockets created by
     * setting #SoupSocket:fd, it will only be set for listening
     * sockets.
     */
    readonly isServer: boolean
    readonly localAddress: Address
    /**
     * Whether or not the socket uses non-blocking I/O.
     * 
     * #SoupSocket's I/O methods are designed around the idea of
     * using a single codepath for both synchronous and
     * asynchronous I/O. If you want to read off a #SoupSocket,
     * the "correct" way to do it is to call soup_socket_read() or
     * soup_socket_read_until() repeatedly until you have read
     * everything you want. If it returns %SOUP_SOCKET_WOULD_BLOCK
     * at any point, stop reading and wait for it to emit the
     * #SoupSocket::readable signal. Then go back to the
     * reading-as-much-as-you-can loop. Likewise, for writing to a
     * #SoupSocket, you should call soup_socket_write() either
     * until you have written everything, or it returns
     * %SOUP_SOCKET_WOULD_BLOCK (in which case you wait for
     * #SoupSocket::writable and then go back into the loop).
     * 
     * Code written this way will work correctly with both
     * blocking and non-blocking sockets; blocking sockets will
     * simply never return %SOUP_SOCKET_WOULD_BLOCK, and so the
     * code that handles that case just won't get used for them.
     */
    nonBlocking: boolean
    readonly remoteAddress: Address
    sslCreds: any
    readonly sslFallback: boolean
    readonly sslStrict: boolean
    timeout: number
    readonly tlsCertificate: Gio.TlsCertificate
    readonly tlsErrors: Gio.TlsCertificateFlags
    readonly trustedCertificate: boolean
    /**
     * Use g_main_context_get_thread_default().
     */
    readonly useThreadContext: boolean
    __gtype__: number

    // Own fields of Soup-2.4.Soup.Socket

    parent: GObject.Object

    // Owm methods of Soup-2.4.Soup.Socket

    /**
     * Begins asynchronously connecting to `sock'`s remote address. The
     * socket will call `callback` when it succeeds or fails (but not
     * before returning from this function).
     * 
     * If `cancellable` is non-%NULL, it can be used to cancel the
     * connection. `callback` will still be invoked in this case, with a
     * status of %SOUP_STATUS_CANCELLED.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback callback to call after connecting
     */
    connectAsync(cancellable: Gio.Cancellable | null, callback: SocketCallback): void
    /**
     * Attempt to synchronously connect `sock` to its remote address.
     * 
     * If `cancellable` is non-%NULL, it can be used to cancel the
     * connection, in which case soup_socket_connect_sync() will return
     * %SOUP_STATUS_CANCELLED.
     * @param cancellable a #GCancellable, or %NULL
     * @returns a success or failure code.
     */
    connectSync(cancellable: Gio.Cancellable | null): number
    /**
     * Disconnects `sock`. Any further read or write attempts on it will
     * fail.
     */
    disconnect(): void
    /**
     * Gets `sock'`s underlying file descriptor.
     * 
     * Note that fiddling with the file descriptor may break the
     * #SoupSocket.
     * @returns @sock's file descriptor.
     */
    getFd(): number
    /**
     * Returns the #SoupAddress corresponding to the local end of `sock`.
     * 
     * Calling this method on an unconnected socket is considered to be
     * an error, and produces undefined results.
     * @returns the #SoupAddress
     */
    getLocalAddress(): Address
    /**
     * Returns the #SoupAddress corresponding to the remote end of `sock`.
     * 
     * Calling this method on an unconnected socket is considered to be
     * an error, and produces undefined results.
     * @returns the #SoupAddress
     */
    getRemoteAddress(): Address
    /**
     * Tests if `sock` is connected to another host
     * @returns %TRUE or %FALSE.
     */
    isConnected(): boolean
    /**
     * Tests if `sock` is doing (or has attempted to do) SSL.
     * @returns %TRUE if @sock has SSL credentials set
     */
    isSsl(): boolean
    /**
     * Makes `sock` start listening on its local address. When connections
     * come in, `sock` will emit #SoupSocket::new_connection.
     * @returns whether or not @sock is now listening.
     */
    listen(): boolean
    /**
     * Attempts to read up to `len` bytes from `sock` into `buffer`. If some
     * data is successfully read, soup_socket_read() will return
     * %SOUP_SOCKET_OK, and *`nread` will contain the number of bytes
     * actually read (which may be less than `len)`.
     * 
     * If `sock` is non-blocking, and no data is available, the return
     * value will be %SOUP_SOCKET_WOULD_BLOCK. In this case, the caller
     * can connect to the #SoupSocket::readable signal to know when there
     * is more data to read. (NB: You MUST read all available data off the
     * socket first. #SoupSocket::readable is only emitted after
     * soup_socket_read() returns %SOUP_SOCKET_WOULD_BLOCK, and it is only
     * emitted once. See the documentation for #SoupSocket:non-blocking.)
     * @param buffer buffer to read   into
     * @param cancellable a #GCancellable, or %NULL
     * @returns a #SoupSocketIOStatus, as described above (or %SOUP_SOCKET_EOF if the socket is no longer connected, or %SOUP_SOCKET_ERROR on any other error, in which case @error will also be set).
     */
    read(buffer: Uint8Array, cancellable: Gio.Cancellable | null): [ /* returnType */ SocketIOStatus, /* nread */ number ]
    /**
     * Like soup_socket_read(), but reads no further than the first
     * occurrence of `boundary`. (If the boundary is found, it will be
     * included in the returned data, and *`got_boundary` will be set to
     * %TRUE.) Any data after the boundary will returned in future reads.
     * 
     * soup_socket_read_until() will almost always return fewer than `len`
     * bytes: if the boundary is found, then it will only return the bytes
     * up until the end of the boundary, and if the boundary is not found,
     * then it will leave the last <literal>(boundary_len - 1)</literal>
     * bytes in its internal buffer, in case they form the start of the
     * boundary string. Thus, `len` normally needs to be at least 1 byte
     * longer than `boundary_len` if you want to make any progress at all.
     * @param buffer buffer to read   into
     * @param boundary boundary to read until
     * @param boundaryLen length of `boundary` in bytes
     * @param cancellable a #GCancellable, or %NULL
     * @returns as for soup_socket_read()
     */
    readUntil(buffer: Uint8Array, boundary: any | null, boundaryLen: number, cancellable: Gio.Cancellable | null): [ /* returnType */ SocketIOStatus, /* nread */ number, /* gotBoundary */ boolean ]
    /**
     * Starts using SSL on `socket,` expecting to find a host named
     * `ssl_host`.
     * @param sslHost hostname of the SSL server
     * @param cancellable a #GCancellable
     * @returns success or failure
     */
    startProxySsl(sslHost: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Starts using SSL on `socket`.
     * @param cancellable a #GCancellable
     * @returns success or failure
     */
    startSsl(cancellable: Gio.Cancellable | null): boolean
    /**
     * Attempts to write `len` bytes from `buffer` to `sock`. If some data is
     * successfully written, the return status will be %SOUP_SOCKET_OK,
     * and *`nwrote` will contain the number of bytes actually written
     * (which may be less than `len)`.
     * 
     * If `sock` is non-blocking, and no data could be written right away,
     * the return value will be %SOUP_SOCKET_WOULD_BLOCK. In this case,
     * the caller can connect to the #SoupSocket::writable signal to know
     * when more data can be written. (NB: #SoupSocket::writable is only
     * emitted after soup_socket_write() returns %SOUP_SOCKET_WOULD_BLOCK,
     * and it is only emitted once. See the documentation for
     * #SoupSocket:non-blocking.)
     * @param buffer data to write
     * @param cancellable a #GCancellable, or %NULL
     * @returns a #SoupSocketIOStatus, as described above (or %SOUP_SOCKET_EOF or %SOUP_SOCKET_ERROR. @error will be set if the return value is %SOUP_SOCKET_ERROR.)
     */
    write(buffer: Uint8Array, cancellable: Gio.Cancellable | null): [ /* returnType */ SocketIOStatus, /* nwrote */ number ]

    // Own virtual methods of Soup-2.4.Soup.Socket

    disconnected(): void
    newConnection(newSock: Socket): void
    readable(): void
    writable(): void

    // Own signals of Soup-2.4.Soup.Socket

    connect(sigName: "disconnected", callback: Socket.DisconnectedSignalCallback): number
    on(sigName: "disconnected", callback: Socket.DisconnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "disconnected", callback: Socket.DisconnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "disconnected", callback: Socket.DisconnectedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "disconnected", ...args: any[]): void
    connect(sigName: "event", callback: Socket.EventSignalCallback): number
    on(sigName: "event", callback: Socket.EventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event", callback: Socket.EventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event", callback: Socket.EventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "event", connection: Gio.IOStream, ...args: any[]): void
    connect(sigName: "new-connection", callback: Socket.NewConnectionSignalCallback): number
    on(sigName: "new-connection", callback: Socket.NewConnectionSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-connection", callback: Socket.NewConnectionSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-connection", callback: Socket.NewConnectionSignalCallback): NodeJS.EventEmitter
    emit(sigName: "new-connection", ...args: any[]): void
    connect(sigName: "readable", callback: Socket.ReadableSignalCallback): number
    on(sigName: "readable", callback: Socket.ReadableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "readable", callback: Socket.ReadableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "readable", callback: Socket.ReadableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "readable", ...args: any[]): void
    connect(sigName: "writable", callback: Socket.WritableSignalCallback): number
    on(sigName: "writable", callback: Socket.WritableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "writable", callback: Socket.WritableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "writable", callback: Socket.WritableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "writable", ...args: any[]): void

    // Class property signals of Soup-2.4.Soup.Socket

    connect(sigName: "notify::async-context", callback: (...args: any[]) => void): number
    on(sigName: "notify::async-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::async-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::async-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::async-context", ...args: any[]): void
    connect(sigName: "notify::fd", callback: (...args: any[]) => void): number
    on(sigName: "notify::fd", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fd", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fd", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fd", ...args: any[]): void
    connect(sigName: "notify::gsocket", callback: (...args: any[]) => void): number
    on(sigName: "notify::gsocket", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::gsocket", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::gsocket", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::gsocket", ...args: any[]): void
    connect(sigName: "notify::iostream", callback: (...args: any[]) => void): number
    on(sigName: "notify::iostream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::iostream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::iostream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::iostream", ...args: any[]): void
    connect(sigName: "notify::ipv6-only", callback: (...args: any[]) => void): number
    on(sigName: "notify::ipv6-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ipv6-only", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ipv6-only", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ipv6-only", ...args: any[]): void
    connect(sigName: "notify::is-server", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-server", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-server", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-server", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-server", ...args: any[]): void
    connect(sigName: "notify::local-address", callback: (...args: any[]) => void): number
    on(sigName: "notify::local-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::local-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::local-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::local-address", ...args: any[]): void
    connect(sigName: "notify::non-blocking", callback: (...args: any[]) => void): number
    on(sigName: "notify::non-blocking", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::non-blocking", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::non-blocking", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::non-blocking", ...args: any[]): void
    connect(sigName: "notify::remote-address", callback: (...args: any[]) => void): number
    on(sigName: "notify::remote-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::remote-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::remote-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::remote-address", ...args: any[]): void
    connect(sigName: "notify::ssl-creds", callback: (...args: any[]) => void): number
    on(sigName: "notify::ssl-creds", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ssl-creds", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ssl-creds", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ssl-creds", ...args: any[]): void
    connect(sigName: "notify::ssl-fallback", callback: (...args: any[]) => void): number
    on(sigName: "notify::ssl-fallback", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ssl-fallback", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ssl-fallback", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ssl-fallback", ...args: any[]): void
    connect(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): number
    on(sigName: "notify::ssl-strict", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ssl-strict", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ssl-strict", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ssl-strict", ...args: any[]): void
    connect(sigName: "notify::timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::timeout", ...args: any[]): void
    connect(sigName: "notify::tls-certificate", callback: (...args: any[]) => void): number
    on(sigName: "notify::tls-certificate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tls-certificate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tls-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tls-certificate", ...args: any[]): void
    connect(sigName: "notify::tls-errors", callback: (...args: any[]) => void): number
    on(sigName: "notify::tls-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tls-errors", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tls-errors", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tls-errors", ...args: any[]): void
    connect(sigName: "notify::trusted-certificate", callback: (...args: any[]) => void): number
    on(sigName: "notify::trusted-certificate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::trusted-certificate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::trusted-certificate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::trusted-certificate", ...args: any[]): void
    connect(sigName: "notify::use-thread-context", callback: (...args: any[]) => void): number
    on(sigName: "notify::use-thread-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::use-thread-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::use-thread-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::use-thread-context", ...args: any[]): void
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

class Socket extends GObject.Object {

    // Own properties of Soup-2.4.Soup.Socket

    static name: string

    // Constructors of Soup-2.4.Soup.Socket

    constructor(config?: Socket.ConstructorProperties) 
    _init(config?: Socket.ConstructorProperties): void
}

module WebsocketConnection {

    // Signal callback interfaces

    /**
     * Signal callback interface for `closed`
     */
    interface ClosedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `closing`
     */
    interface ClosingSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `error`
     */
    interface ErrorSignalCallback {
        (error: GLib.Error): void
    }

    /**
     * Signal callback interface for `message`
     */
    interface MessageSignalCallback {
        (type: number, message: any): void
    }

    /**
     * Signal callback interface for `pong`
     */
    interface PongSignalCallback {
        (message: any): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Soup-2.4.Soup.WebsocketConnection

        /**
         * The type of connection (client/server).
         */
        connectionType?: WebsocketConnectionType | null
        /**
         * List of #SoupWebsocketExtension objects that are active in the connection.
         */
        extensions?: any | null
        /**
         * The underlying IO stream the WebSocket is communicating
         * over.
         * 
         * The input and output streams must be pollable streams.
         */
        ioStream?: Gio.IOStream | null
        /**
         * Interval in seconds on when to send a ping message which will
         * serve as a keepalive message. If set to 0 the keepalive message is
         * disabled.
         */
        keepaliveInterval?: number | null
        /**
         * The maximum payload size for incoming packets the protocol expects
         * or 0 to not limit it.
         */
        maxIncomingPayloadSize?: number | null
        /**
         * The client's Origin.
         */
        origin?: string | null
        /**
         * The chosen protocol, or %NULL if a protocol was not agreed
         * upon.
         */
        protocol?: string | null
        /**
         * The URI of the WebSocket.
         * 
         * For servers this represents the address of the WebSocket,
         * and for clients it is the address connected to.
         */
        uri?: URI | null
    }

}

interface WebsocketConnection {

    // Own properties of Soup-2.4.Soup.WebsocketConnection

    /**
     * The type of connection (client/server).
     */
    readonly connectionType: WebsocketConnectionType
    /**
     * List of #SoupWebsocketExtension objects that are active in the connection.
     */
    readonly extensions: any
    /**
     * The underlying IO stream the WebSocket is communicating
     * over.
     * 
     * The input and output streams must be pollable streams.
     */
    readonly ioStream: Gio.IOStream
    /**
     * Interval in seconds on when to send a ping message which will
     * serve as a keepalive message. If set to 0 the keepalive message is
     * disabled.
     */
    keepaliveInterval: number
    /**
     * The maximum payload size for incoming packets the protocol expects
     * or 0 to not limit it.
     */
    maxIncomingPayloadSize: number
    /**
     * The client's Origin.
     */
    readonly origin: string | null
    /**
     * The chosen protocol, or %NULL if a protocol was not agreed
     * upon.
     */
    readonly protocol: string | null
    /**
     * The current state of the WebSocket.
     */
    readonly state: WebsocketState
    /**
     * The URI of the WebSocket.
     * 
     * For servers this represents the address of the WebSocket,
     * and for clients it is the address connected to.
     */
    readonly uri: URI
    __gtype__: number

    // Own fields of Soup-2.4.Soup.WebsocketConnection

    parent: GObject.Object

    // Owm methods of Soup-2.4.Soup.WebsocketConnection

    /**
     * Close the connection in an orderly fashion.
     * 
     * Note that until the #SoupWebsocketConnection::closed signal fires, the connection
     * is not yet completely closed. The close message is not even sent until the
     * main loop runs.
     * 
     * The `code` and `data` are sent to the peer along with the close request.
     * If `code` is %SOUP_WEBSOCKET_CLOSE_NO_STATUS a close message with no body
     * (without code and data) is sent.
     * Note that the `data` must be UTF-8 valid.
     * @param code close code
     * @param data close data
     */
    close(code: number, data: string | null): void
    /**
     * Get the close code received from the WebSocket peer.
     * 
     * This only becomes valid once the WebSocket is in the
     * %SOUP_WEBSOCKET_STATE_CLOSED state. The value will often be in the
     * #SoupWebsocketCloseCode enumeration, but may also be an application
     * defined close code.
     * @returns the close code or zero.
     */
    getCloseCode(): number
    /**
     * Get the close data received from the WebSocket peer.
     * 
     * This only becomes valid once the WebSocket is in the
     * %SOUP_WEBSOCKET_STATE_CLOSED state. The data may be freed once
     * the main loop is run, so copy it if you need to keep it around.
     * @returns the close data or %NULL
     */
    getCloseData(): string | null
    /**
     * Get the connection type (client/server) of the connection.
     * @returns the connection type
     */
    getConnectionType(): WebsocketConnectionType
    /**
     * Get the extensions chosen via negotiation with the peer.
     * @returns a #GList of #SoupWebsocketExtension objects
     */
    getExtensions(): WebsocketExtension[]
    /**
     * Get the I/O stream the WebSocket is communicating over.
     * @returns the WebSocket's I/O stream.
     */
    getIoStream(): Gio.IOStream
    /**
     * Gets the keepalive interval in seconds or 0 if disabled.
     * @returns the keepalive interval.
     */
    getKeepaliveInterval(): number
    /**
     * Gets the maximum payload size allowed for incoming packets.
     * @returns the maximum payload size.
     */
    getMaxIncomingPayloadSize(): number
    /**
     * Get the origin of the WebSocket.
     * @returns the origin, or %NULL
     */
    getOrigin(): string | null
    /**
     * Get the protocol chosen via negotiation with the peer.
     * @returns the chosen protocol, or %NULL
     */
    getProtocol(): string | null
    /**
     * Get the current state of the WebSocket.
     * @returns the state
     */
    getState(): WebsocketState
    /**
     * Get the URI of the WebSocket.
     * 
     * For servers this represents the address of the WebSocket, and
     * for clients it is the address connected to.
     * @returns the URI
     */
    getUri(): URI
    /**
     * Send a binary message to the peer. If `length` is 0, `data` may be %NULL.
     * 
     * The message is queued to be sent and will be sent when the main loop
     * is run.
     * @param data the message contents
     */
    sendBinary(data: Uint8Array | null): void
    /**
     * Send a message of the given `type` to the peer. Note that this method,
     * allows to send text messages containing %NULL characters.
     * 
     * The message is queued to be sent and will be sent when the main loop
     * is run.
     * @param type the type of message contents
     * @param message the message data as #GBytes
     */
    sendMessage(type: WebsocketDataType, message: any): void
    /**
     * Send a %NULL-terminated text (UTF-8) message to the peer. If you need
     * to send text messages containing %NULL characters use
     * soup_websocket_connection_send_message() instead.
     * 
     * The message is queued to be sent and will be sent when the main loop
     * is run.
     * @param text the message contents
     */
    sendText(text: string | null): void
    /**
     * Sets the interval in seconds on when to send a ping message which will serve
     * as a keepalive message. If set to 0 the keepalive message is disabled.
     * @param interval the interval to send a ping message or 0 to disable it
     */
    setKeepaliveInterval(interval: number): void
    /**
     * Sets the maximum payload size allowed for incoming packets. It
     * does not limit the outgoing packet size.
     * @param maxIncomingPayloadSize the maximum payload size
     */
    setMaxIncomingPayloadSize(maxIncomingPayloadSize: number): void

    // Own virtual methods of Soup-2.4.Soup.WebsocketConnection

    closed(): void
    closing(): void
    error(error: GLib.Error): void
    message(type: WebsocketDataType, message: any): void
    pong(message: any): void

    // Own signals of Soup-2.4.Soup.WebsocketConnection

    connect(sigName: "closed", callback: WebsocketConnection.ClosedSignalCallback): number
    on(sigName: "closed", callback: WebsocketConnection.ClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: WebsocketConnection.ClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: WebsocketConnection.ClosedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "closed", ...args: any[]): void
    connect(sigName: "closing", callback: WebsocketConnection.ClosingSignalCallback): number
    on(sigName: "closing", callback: WebsocketConnection.ClosingSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closing", callback: WebsocketConnection.ClosingSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closing", callback: WebsocketConnection.ClosingSignalCallback): NodeJS.EventEmitter
    emit(sigName: "closing", ...args: any[]): void
    connect(sigName: "error", callback: WebsocketConnection.ErrorSignalCallback): number
    on(sigName: "error", callback: WebsocketConnection.ErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "error", callback: WebsocketConnection.ErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "error", callback: WebsocketConnection.ErrorSignalCallback): NodeJS.EventEmitter
    emit(sigName: "error", ...args: any[]): void
    connect(sigName: "message", callback: WebsocketConnection.MessageSignalCallback): number
    on(sigName: "message", callback: WebsocketConnection.MessageSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "message", callback: WebsocketConnection.MessageSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "message", callback: WebsocketConnection.MessageSignalCallback): NodeJS.EventEmitter
    emit(sigName: "message", message: any, ...args: any[]): void
    connect(sigName: "pong", callback: WebsocketConnection.PongSignalCallback): number
    on(sigName: "pong", callback: WebsocketConnection.PongSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pong", callback: WebsocketConnection.PongSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pong", callback: WebsocketConnection.PongSignalCallback): NodeJS.EventEmitter
    emit(sigName: "pong", ...args: any[]): void

    // Class property signals of Soup-2.4.Soup.WebsocketConnection

    connect(sigName: "notify::connection-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::connection-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connection-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connection-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connection-type", ...args: any[]): void
    connect(sigName: "notify::extensions", callback: (...args: any[]) => void): number
    on(sigName: "notify::extensions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::extensions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::extensions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::extensions", ...args: any[]): void
    connect(sigName: "notify::io-stream", callback: (...args: any[]) => void): number
    on(sigName: "notify::io-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::io-stream", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::io-stream", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::io-stream", ...args: any[]): void
    connect(sigName: "notify::keepalive-interval", callback: (...args: any[]) => void): number
    on(sigName: "notify::keepalive-interval", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::keepalive-interval", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::keepalive-interval", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::keepalive-interval", ...args: any[]): void
    connect(sigName: "notify::max-incoming-payload-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-incoming-payload-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-incoming-payload-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-incoming-payload-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-incoming-payload-size", ...args: any[]): void
    connect(sigName: "notify::origin", callback: (...args: any[]) => void): number
    on(sigName: "notify::origin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::origin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::origin", ...args: any[]): void
    connect(sigName: "notify::protocol", callback: (...args: any[]) => void): number
    on(sigName: "notify::protocol", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::protocol", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::protocol", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::protocol", ...args: any[]): void
    connect(sigName: "notify::state", callback: (...args: any[]) => void): number
    on(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::state", ...args: any[]): void
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
}

/**
 * A class representing a WebSocket connection.
 * @class 
 */
class WebsocketConnection extends GObject.Object {

    // Own properties of Soup-2.4.Soup.WebsocketConnection

    static name: string

    // Constructors of Soup-2.4.Soup.WebsocketConnection

    constructor(config?: WebsocketConnection.ConstructorProperties) 
    /**
     * Creates a #SoupWebsocketConnection on `stream`. This should be
     * called after completing the handshake to begin using the WebSocket
     * protocol.
     * @constructor 
     * @param stream a #GIOStream connected to the WebSocket server
     * @param uri the URI of the connection
     * @param type the type of connection (client/side)
     * @param origin the Origin of the client
     * @param protocol the subprotocol in use
     * @returns a new #SoupWebsocketConnection
     */
    constructor(stream: Gio.IOStream, uri: URI, type: WebsocketConnectionType, origin: string | null, protocol: string | null) 
    /**
     * Creates a #SoupWebsocketConnection on `stream`. This should be
     * called after completing the handshake to begin using the WebSocket
     * protocol.
     * @constructor 
     * @param stream a #GIOStream connected to the WebSocket server
     * @param uri the URI of the connection
     * @param type the type of connection (client/side)
     * @param origin the Origin of the client
     * @param protocol the subprotocol in use
     * @returns a new #SoupWebsocketConnection
     */
    static new(stream: Gio.IOStream, uri: URI, type: WebsocketConnectionType, origin: string | null, protocol: string | null): WebsocketConnection
    /**
     * Creates a #SoupWebsocketConnection on `stream` with the given active `extensions`.
     * This should be called after completing the handshake to begin using the WebSocket
     * protocol.
     * @constructor 
     * @param stream a #GIOStream connected to the WebSocket server
     * @param uri the URI of the connection
     * @param type the type of connection (client/side)
     * @param origin the Origin of the client
     * @param protocol the subprotocol in use
     * @param extensions a #GList of #SoupWebsocketExtension objects
     * @returns a new #SoupWebsocketConnection
     */
    static newWithExtensions(stream: Gio.IOStream, uri: URI, type: WebsocketConnectionType, origin: string | null, protocol: string | null, extensions: WebsocketExtension[]): WebsocketConnection
    _init(config?: WebsocketConnection.ConstructorProperties): void
}

module WebsocketExtension {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface WebsocketExtension {

    // Own properties of Soup-2.4.Soup.WebsocketExtension

    __gtype__: number

    // Own fields of Soup-2.4.Soup.WebsocketExtension

    parent: GObject.Object

    // Owm methods of Soup-2.4.Soup.WebsocketExtension

    // Has conflict: configure(connectionType: WebsocketConnectionType, params: GLib.HashTable | null): boolean
    // Has conflict: getRequestParams(): string | null
    // Has conflict: getResponseParams(): string | null
    // Has conflict: processIncomingMessage(header: number, payload: any): [ /* returnType */ any, /* header */ number ]
    // Has conflict: processOutgoingMessage(header: number, payload: any): [ /* returnType */ any, /* header */ number ]

    // Own virtual methods of Soup-2.4.Soup.WebsocketExtension

    /**
     * Configures `extension` with the given `params`
     * @virtual 
     * @param connectionType either %SOUP_WEBSOCKET_CONNECTION_CLIENT or %SOUP_WEBSOCKET_CONNECTION_SERVER
     * @param params the parameters, or %NULL
     * @returns %TRUE if extension could be configured with the given parameters, or %FALSE otherwise
     */
    configure(connectionType: WebsocketConnectionType, params: GLib.HashTable | null): boolean
    /**
     * Get the parameters strings to be included in the request header. If the extension
     * doesn't include any parameter in the request, this function returns %NULL.
     * @virtual 
     * @returns a new allocated string with the parameters
     */
    getRequestParams(): string | null
    /**
     * Get the parameters strings to be included in the response header. If the extension
     * doesn't include any parameter in the response, this function returns %NULL.
     * @virtual 
     * @returns a new allocated string with the parameters
     */
    getResponseParams(): string | null
    /**
     * Process a message after it's received. If the payload isn't changed the given
     * `payload` is just returned, otherwise g_bytes_unref() is called on the given
     * `payload` and a new #GBytes is returned with the new data.
     * 
     * Extensions using reserved bits of the header will reset them in `header`.
     * @virtual 
     * @param header the message header
     * @param payload the payload data
     * @returns the message payload data, or %NULL in case of error
     */
    processIncomingMessage(header: number, payload: any): [ /* returnType */ any, /* header */ number ]
    /**
     * Process a message before it's sent. If the payload isn't changed the given
     * `payload` is just returned, otherwise g_bytes_unref() is called on the given
     * `payload` and a new #GBytes is returned with the new data.
     * 
     * Extensions using reserved bits of the header will change them in `header`.
     * @virtual 
     * @param header the message header
     * @param payload the payload data
     * @returns the message payload data, or %NULL in case of error
     */
    processOutgoingMessage(header: number, payload: any): [ /* returnType */ any, /* header */ number ]

    // Class property signals of Soup-2.4.Soup.WebsocketExtension

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

class WebsocketExtension extends GObject.Object {

    // Own properties of Soup-2.4.Soup.WebsocketExtension

    static name: string

    // Constructors of Soup-2.4.Soup.WebsocketExtension

    constructor(config?: WebsocketExtension.ConstructorProperties) 
    _init(config?: WebsocketExtension.ConstructorProperties): void
}

module WebsocketExtensionDeflate {

    // Constructor properties interface

    interface ConstructorProperties extends WebsocketExtension.ConstructorProperties {
    }

}

interface WebsocketExtensionDeflate {

    // Own properties of Soup-2.4.Soup.WebsocketExtensionDeflate

    __gtype__: number

    // Own fields of Soup-2.4.Soup.WebsocketExtensionDeflate

    parent: WebsocketExtension & GObject.Object

    // Class property signals of Soup-2.4.Soup.WebsocketExtensionDeflate

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

class WebsocketExtensionDeflate extends WebsocketExtension {

    // Own properties of Soup-2.4.Soup.WebsocketExtensionDeflate

    static name: string

    // Constructors of Soup-2.4.Soup.WebsocketExtensionDeflate

    constructor(config?: WebsocketExtensionDeflate.ConstructorProperties) 
    _init(config?: WebsocketExtensionDeflate.ConstructorProperties): void
}

module WebsocketExtensionManager {

    // Constructor properties interface

    interface ConstructorProperties extends SessionFeature.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

interface WebsocketExtensionManager extends SessionFeature {

    // Own properties of Soup-2.4.Soup.WebsocketExtensionManager

    __gtype__: number

    // Own fields of Soup-2.4.Soup.WebsocketExtensionManager

    parent: GObject.Object

    // Class property signals of Soup-2.4.Soup.WebsocketExtensionManager

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

class WebsocketExtensionManager extends GObject.Object {

    // Own properties of Soup-2.4.Soup.WebsocketExtensionManager

    static name: string

    // Constructors of Soup-2.4.Soup.WebsocketExtensionManager

    constructor(config?: WebsocketExtensionManager.ConstructorProperties) 
    _init(config?: WebsocketExtensionManager.ConstructorProperties): void
}

interface AddressClass {

    // Own fields of Soup-2.4.Soup.AddressClass

    parentClass: GObject.ObjectClass
}

abstract class AddressClass {

    // Own properties of Soup-2.4.Soup.AddressClass

    static name: string
}

interface AuthClass {

    // Own fields of Soup-2.4.Soup.AuthClass

    parentClass: GObject.ObjectClass
    schemeName: string | null
    strength: number
    update: (auth: Auth, msg: Message, authHeader: GLib.HashTable) => boolean
    getProtectionSpace: (auth: Auth, sourceUri: URI) => string[]
    authenticate: (auth: Auth, username: string | null, password: string | null) => void
    isAuthenticated: (auth: Auth) => boolean
    getAuthorization: (auth: Auth, msg: Message) => string | null
    isReady: (auth: Auth, msg: Message) => boolean
    canAuthenticate: (auth: Auth) => boolean
}

abstract class AuthClass {

    // Own properties of Soup-2.4.Soup.AuthClass

    static name: string
}

interface AuthDomainBasicClass {

    // Own fields of Soup-2.4.Soup.AuthDomainBasicClass

    parentClass: AuthDomainClass
}

abstract class AuthDomainBasicClass {

    // Own properties of Soup-2.4.Soup.AuthDomainBasicClass

    static name: string
}

interface AuthDomainClass {

    // Own fields of Soup-2.4.Soup.AuthDomainClass

    parentClass: GObject.ObjectClass
    accepts: (domain: AuthDomain, msg: Message, header: string | null) => string | null
    challenge: (domain: AuthDomain, msg: Message) => string | null
    checkPassword: (domain: AuthDomain, msg: Message, username: string | null, password: string | null) => boolean
}

abstract class AuthDomainClass {

    // Own properties of Soup-2.4.Soup.AuthDomainClass

    static name: string
}

interface AuthDomainDigestClass {

    // Own fields of Soup-2.4.Soup.AuthDomainDigestClass

    parentClass: AuthDomainClass
}

abstract class AuthDomainDigestClass {

    // Own properties of Soup-2.4.Soup.AuthDomainDigestClass

    static name: string
}

interface AuthManagerClass {

    // Own fields of Soup-2.4.Soup.AuthManagerClass

    parentClass: GObject.ObjectClass
    authenticate: (manager: AuthManager, msg: Message, auth: Auth, retrying: boolean) => void
}

abstract class AuthManagerClass {

    // Own properties of Soup-2.4.Soup.AuthManagerClass

    static name: string
}

interface AuthManagerPrivate {
}

class AuthManagerPrivate {

    // Own properties of Soup-2.4.Soup.AuthManagerPrivate

    static name: string
}

interface Buffer {

    // Own fields of Soup-2.4.Soup.Buffer

    /**
     * the data
     * @field 
     */
    data: any
    /**
     * length of `data`
     * @field 
     */
    length: number

    // Owm methods of Soup-2.4.Soup.Buffer

    /**
     * Makes a copy of `buffer`. In reality, #SoupBuffer is a refcounted
     * type, and calling soup_buffer_copy() will normally just increment
     * the refcount on `buffer` and return it. However, if `buffer` was
     * created with #SOUP_MEMORY_TEMPORARY memory, then soup_buffer_copy()
     * will actually return a copy of it, so that the data in the copy
     * will remain valid after the temporary buffer is freed.
     * @returns the new (or newly-reffed) buffer
     */
    copy(): Buffer
    /**
     * Frees `buffer`. (In reality, as described in the documentation for
     * soup_buffer_copy(), this is actually an "unref" operation, and may
     * or may not actually free `buffer`.)
     */
    free(): void
    /**
     * Creates a #GBytes pointing to the same memory as `buffer`. The
     * #GBytes will hold a reference on `buffer` to ensure that it is not
     * freed while the #GBytes is still valid.
     * @returns a new #GBytes which has the same content as the #SoupBuffer.
     */
    getAsBytes(): any
    /**
     * This function exists for use by language bindings, because it's not
     * currently possible to get the right effect by annotating the fields
     * of #SoupBuffer.
     */
    getData(): /* data */ Uint8Array
    /**
     * Gets the "owner" object for a buffer created with
     * soup_buffer_new_with_owner().
     * @returns the owner pointer
     */
    getOwner(): any | null
    /**
     * Creates a new #SoupBuffer containing `length` bytes "copied" from
     * `parent` starting at `offset`. (Normally this will not actually copy
     * any data, but will instead simply reference the same data as
     * `parent` does.)
     * @param offset offset within `parent` to start at
     * @param length number of bytes to copy from `parent`
     * @returns the new #SoupBuffer.
     */
    newSubbuffer(offset: number, length: number): Buffer
}

/**
 * A data buffer, generally used to represent a chunk of a
 * #SoupMessageBody.
 * 
 * `data` is a #char because that's generally convenient; in some
 * situations you may need to cast it to #guchar or another type.
 * @record 
 */
class Buffer {

    // Own properties of Soup-2.4.Soup.Buffer

    static name: string

    // Constructors of Soup-2.4.Soup.Buffer

    /**
     * Creates a new #SoupBuffer containing `length` bytes from `data`.
     * 
     * This function is exactly equivalent to soup_buffer_new() with
     * %SOUP_MEMORY_TAKE as first argument; it exists mainly for
     * convenience and simplifying language bindings.
     * @constructor 
     * @param data data
     * @returns the new #SoupBuffer.
     */
    constructor(data: Uint8Array) 
    /**
     * Creates a new #SoupBuffer containing `length` bytes from `data`.
     * 
     * This function is exactly equivalent to soup_buffer_new() with
     * %SOUP_MEMORY_TAKE as first argument; it exists mainly for
     * convenience and simplifying language bindings.
     * @constructor 
     * @param data data
     * @returns the new #SoupBuffer.
     */
    static new(data: Uint8Array): Buffer
    /**
     * Creates a new #SoupBuffer containing `length` bytes from `data`. When
     * the #SoupBuffer is freed, it will call `owner_dnotify,` passing
     * `owner` to it. You must ensure that `data` will remain valid until
     * `owner_dnotify` is called.
     * 
     * For example, you could use this to create a buffer containing data
     * returned from libxml without needing to do an extra copy:
     * 
     * <informalexample><programlisting>
     * xmlDocDumpMemory (doc, &xmlbody, &len);
     * return soup_buffer_new_with_owner (xmlbody, len, xmlbody,
     *                                    (GDestroyNotify)xmlFree);
     * </programlisting></informalexample>
     * 
     * In this example, `data` and `owner` are the same, but in other cases
     * they would be different (eg, `owner` would be a object, and `data`
     * would be a pointer to one of the object's fields).
     * @constructor 
     * @param data data
     * @param owner pointer to an object that owns `data`
     * @param ownerDnotify a function to free/unref `owner` when the buffer is freed
     * @returns the new #SoupBuffer.
     */
    static newWithOwner(data: Uint8Array, owner: any | null, ownerDnotify: GLib.DestroyNotify | null): Buffer
}

interface CacheClass {

    // Own fields of Soup-2.4.Soup.CacheClass

    parentClass: GObject.ObjectClass
    getCacheability: (cache: Cache, msg: Message) => Cacheability
}

abstract class CacheClass {

    // Own properties of Soup-2.4.Soup.CacheClass

    static name: string
}

interface CachePrivate {
}

class CachePrivate {

    // Own properties of Soup-2.4.Soup.CachePrivate

    static name: string
}

interface ClientContext {

    // Owm methods of Soup-2.4.Soup.ClientContext

    /**
     * Retrieves the #SoupAddress associated with the remote end
     * of a connection.
     * @returns the #SoupAddress associated with the remote end of a connection, it may be %NULL if you used soup_server_accept_iostream().
     */
    getAddress(): Address | null
    /**
     * Checks whether the request associated with `client` has been
     * authenticated, and if so returns the #SoupAuthDomain that
     * authenticated it.
     * @returns a #SoupAuthDomain, or %NULL if the request was not authenticated.
     */
    getAuthDomain(): AuthDomain | null
    /**
     * Checks whether the request associated with `client` has been
     * authenticated, and if so returns the username that the client
     * authenticated as.
     * @returns the authenticated-as user, or %NULL if the request was not authenticated.
     */
    getAuthUser(): string | null
    /**
     * Retrieves the #GSocket that `client` is associated with.
     * 
     * If you are using this method to observe when multiple requests are
     * made on the same persistent HTTP connection (eg, as the ntlm-test
     * test program does), you will need to pay attention to socket
     * destruction as well (eg, by using weak references), so that you do
     * not get fooled when the allocator reuses the memory address of a
     * previously-destroyed socket to represent a new socket.
     * @returns the #GSocket that @client is associated with, %NULL if you used soup_server_accept_iostream().
     */
    getGsocket(): Gio.Socket | null
    /**
     * Retrieves the IP address associated with the remote end of a
     * connection.
     * @returns the IP address associated with the remote end of a connection, it may be %NULL if you used soup_server_accept_iostream().
     */
    getHost(): string | null
    /**
     * Retrieves the #GSocketAddress associated with the local end
     * of a connection.
     * @returns the #GSocketAddress associated with the local end of a connection, it may be %NULL if you used soup_server_accept_iostream().
     */
    getLocalAddress(): Gio.SocketAddress | null
    /**
     * Retrieves the #GSocketAddress associated with the remote end
     * of a connection.
     * @returns the #GSocketAddress associated with the remote end of a connection, it may be %NULL if you used soup_server_accept_iostream().
     */
    getRemoteAddress(): Gio.SocketAddress | null
    /**
     * Retrieves the #SoupSocket that `client` is associated with.
     * 
     * If you are using this method to observe when multiple requests are
     * made on the same persistent HTTP connection (eg, as the ntlm-test
     * test program does), you will need to pay attention to socket
     * destruction as well (either by using weak references, or by
     * connecting to the #SoupSocket::disconnected signal), so that you do
     * not get fooled when the allocator reuses the memory address of a
     * previously-destroyed socket to represent a new socket.
     * @returns the #SoupSocket that @client is associated with.
     */
    getSocket(): Socket
    /**
     * "Steals" the HTTP connection associated with `client` from its
     * #SoupServer. This happens immediately, regardless of the current
     * state of the connection; if the response to the current
     * #SoupMessage has not yet finished being sent, then it will be
     * discarded; you can steal the connection from a
     * #SoupMessage:wrote-informational or #SoupMessage:wrote-body signal
     * handler if you need to wait for part or all of the response to be
     * sent.
     * 
     * Note that when calling this function from C, `client` will most
     * likely be freed as a side effect.
     * @returns the #GIOStream formerly associated   with @client (or %NULL if @client was no longer associated with a   connection). No guarantees are made about what kind of #GIOStream   is returned.
     */
    stealConnection(): Gio.IOStream
}

/**
 * A #SoupClientContext provides additional information about the
 * client making a particular request. In particular, you can use
 * soup_client_context_get_auth_domain() and
 * soup_client_context_get_auth_user() to determine if HTTP
 * authentication was used successfully.
 * 
 * soup_client_context_get_remote_address() and/or
 * soup_client_context_get_host() can be used to get information for
 * logging or debugging purposes. soup_client_context_get_gsocket() may
 * also be of use in some situations (eg, tracking when multiple
 * requests are made on the same connection).
 * @record 
 */
class ClientContext {

    // Own properties of Soup-2.4.Soup.ClientContext

    static name: string
}

interface Connection {
}

class Connection {

    // Own properties of Soup-2.4.Soup.Connection

    static name: string
}

interface ContentDecoderClass {

    // Own fields of Soup-2.4.Soup.ContentDecoderClass

    parentClass: GObject.ObjectClass
}

abstract class ContentDecoderClass {

    // Own properties of Soup-2.4.Soup.ContentDecoderClass

    static name: string
}

interface ContentDecoderPrivate {
}

class ContentDecoderPrivate {

    // Own properties of Soup-2.4.Soup.ContentDecoderPrivate

    static name: string
}

interface ContentSnifferClass {

    // Own fields of Soup-2.4.Soup.ContentSnifferClass

    parentClass: GObject.ObjectClass
    sniff: (sniffer: ContentSniffer, msg: Message, buffer: Buffer) => [ /* returnType */ string | null, /* params */ GLib.HashTable ]
    getBufferSize: (sniffer: ContentSniffer) => number
}

abstract class ContentSnifferClass {

    // Own properties of Soup-2.4.Soup.ContentSnifferClass

    static name: string
}

interface ContentSnifferPrivate {
}

class ContentSnifferPrivate {

    // Own properties of Soup-2.4.Soup.ContentSnifferPrivate

    static name: string
}

interface Cookie {

    // Own fields of Soup-2.4.Soup.Cookie

    /**
     * the cookie name
     * @field 
     */
    name: string | null
    /**
     * the cookie value
     * @field 
     */
    value: string | null
    /**
     * the "domain" attribute, or else the hostname that the
     * cookie came from.
     * @field 
     */
    domain: string | null
    /**
     * the "path" attribute, or %NULL
     * @field 
     */
    path: string | null
    /**
     * the cookie expiration time, or %NULL for a session cookie
     * @field 
     */
    expires: Date
    /**
     * %TRUE if the cookie should only be tranferred over SSL
     * @field 
     */
    secure: boolean
    /**
     * %TRUE if the cookie should not be exposed to scripts
     * @field 
     */
    httpOnly: boolean

    // Owm methods of Soup-2.4.Soup.Cookie

    /**
     * Tests if `cookie` should be sent to `uri`.
     * 
     * (At the moment, this does not check that `cookie'`s domain matches
     * `uri,` because it assumes that the caller has already done that.
     * But don't rely on that; it may change in the future.)
     * @param uri a #SoupURI
     * @returns %TRUE if @cookie should be sent to @uri, %FALSE if not
     */
    appliesToUri(uri: URI): boolean
    /**
     * Copies `cookie`.
     * @returns a copy of @cookie
     */
    copy(): Cookie
    /**
     * Checks if the `cookie'`s domain and `host` match in the sense that
     * `cookie` should be sent when making a request to `host,` or that
     * `cookie` should be accepted when receiving a response from `host`.
     * @param host a URI
     * @returns %TRUE if the domains match, %FALSE otherwise
     */
    domainMatches(host: string | null): boolean
    /**
     * Tests if `cookie1` and `cookie2` are equal.
     * 
     * Note that currently, this does not check that the cookie domains
     * match. This may change in the future.
     * @param cookie2 a #SoupCookie
     * @returns whether the cookies are equal.
     */
    equal(cookie2: Cookie): boolean
    /**
     * Frees `cookie`
     */
    free(): void
    /**
     * Gets `cookie'`s domain
     * @returns @cookie's domain
     */
    getDomain(): string | null
    /**
     * Gets `cookie'`s expiration time.
     * @returns @cookie's expiration time, which is owned by @cookie and should not be modified or freed.
     */
    getExpires(): Date | null
    /**
     * Gets `cookie'`s HttpOnly attribute
     * @returns @cookie's HttpOnly attribute
     */
    getHttpOnly(): boolean
    /**
     * Gets `cookie'`s name
     * @returns @cookie's name
     */
    getName(): string | null
    /**
     * Gets `cookie'`s path
     * @returns @cookie's path
     */
    getPath(): string | null
    getSameSitePolicy(): SameSitePolicy
    /**
     * Gets `cookie'`s secure attribute
     * @returns @cookie's secure attribute
     */
    getSecure(): boolean
    /**
     * Gets `cookie'`s value
     * @returns @cookie's value
     */
    getValue(): string | null
    /**
     * Sets `cookie'`s domain to `domain`
     * @param domain the new domain
     */
    setDomain(domain: string | null): void
    /**
     * Sets `cookie'`s expiration time to `expires`. If `expires` is %NULL,
     * `cookie` will be a session cookie and will expire at the end of the
     * client's session.
     * 
     * (This sets the same property as soup_cookie_set_max_age().)
     * @param expires the new expiration time, or %NULL
     */
    setExpires(expires: Date): void
    /**
     * Sets `cookie'`s HttpOnly attribute to `http_only`. If %TRUE, `cookie`
     * will be marked as "http only", meaning it should not be exposed to
     * web page scripts or other untrusted code.
     * @param httpOnly the new value for the HttpOnly attribute
     */
    setHttpOnly(httpOnly: boolean): void
    /**
     * Sets `cookie'`s max age to `max_age`. If `max_age` is -1, the cookie
     * is a session cookie, and will expire at the end of the client's
     * session. Otherwise, it is the number of seconds until the cookie
     * expires. You can use the constants %SOUP_COOKIE_MAX_AGE_ONE_HOUR,
     * %SOUP_COOKIE_MAX_AGE_ONE_DAY, %SOUP_COOKIE_MAX_AGE_ONE_WEEK and
     * %SOUP_COOKIE_MAX_AGE_ONE_YEAR (or multiples thereof) to calculate
     * this value. (A value of 0 indicates that the cookie should be
     * considered already-expired.)
     * 
     * (This sets the same property as soup_cookie_set_expires().)
     * @param maxAge the new max age
     */
    setMaxAge(maxAge: number): void
    /**
     * Sets `cookie'`s name to `name`
     * @param name the new name
     */
    setName(name: string | null): void
    /**
     * Sets `cookie'`s path to `path`
     * @param path the new path
     */
    setPath(path: string | null): void
    /**
     * When used in conjunction with soup_cookie_jar_get_cookie_list_with_same_site_info() this
     * sets the policy of when this cookie should be exposed.
     * @param policy a #SoupSameSitePolicy
     */
    setSameSitePolicy(policy: SameSitePolicy): void
    /**
     * Sets `cookie'`s secure attribute to `secure`. If %TRUE, `cookie` will
     * only be transmitted from the client to the server over secure
     * (https) connections.
     * @param secure the new value for the secure attribute
     */
    setSecure(secure: boolean): void
    /**
     * Sets `cookie'`s value to `value`
     * @param value the new value
     */
    setValue(value: string | null): void
    /**
     * Serializes `cookie` in the format used by the Cookie header (ie, for
     * returning a cookie from a #SoupSession to a server).
     * @returns the header
     */
    toCookieHeader(): string | null
    /**
     * Serializes `cookie` in the format used by the Set-Cookie header
     * (ie, for sending a cookie from a #SoupServer to a client).
     * @returns the header
     */
    toSetCookieHeader(): string | null
}

/**
 * An HTTP cookie.
 * 
 * `name` and `value` will be set for all cookies. If the cookie is
 * generated from a string that appears to have no name, then `name`
 * will be the empty string.
 * 
 * `domain` and `path` give the host or domain, and path within that
 * host/domain, to restrict this cookie to. If `domain` starts with
 * ".", that indicates a domain (which matches the string after the
 * ".", or any hostname that has `domain` as a suffix). Otherwise, it
 * is a hostname and must match exactly.
 * 
 * `expires` will be non-%NULL if the cookie uses either the original
 * "expires" attribute, or the newer "max-age" attribute. If `expires`
 * is %NULL, it indicates that neither "expires" nor "max-age" was
 * specified, and the cookie expires at the end of the session.
 * 
 * If `http_only` is set, the cookie should not be exposed to untrusted
 * code (eg, javascript), so as to minimize the danger posed by
 * cross-site scripting attacks.
 * @record 
 */
class Cookie {

    // Own properties of Soup-2.4.Soup.Cookie

    static name: string

    // Constructors of Soup-2.4.Soup.Cookie

    /**
     * Creates a new #SoupCookie with the given attributes. (Use
     * soup_cookie_set_secure() and soup_cookie_set_http_only() if you
     * need to set those attributes on the returned cookie.)
     * 
     * If `domain` starts with ".", that indicates a domain (which matches
     * the string after the ".", or any hostname that has `domain` as a
     * suffix). Otherwise, it is a hostname and must match exactly.
     * 
     * `max_age` is used to set the "expires" attribute on the cookie; pass
     * -1 to not include the attribute (indicating that the cookie expires
     * with the current session), 0 for an already-expired cookie, or a
     * lifetime in seconds. You can use the constants
     * %SOUP_COOKIE_MAX_AGE_ONE_HOUR, %SOUP_COOKIE_MAX_AGE_ONE_DAY,
     * %SOUP_COOKIE_MAX_AGE_ONE_WEEK and %SOUP_COOKIE_MAX_AGE_ONE_YEAR (or
     * multiples thereof) to calculate this value. (If you really care
     * about setting the exact time that the cookie will expire, use
     * soup_cookie_set_expires().)
     * @constructor 
     * @param name cookie name
     * @param value cookie value
     * @param domain cookie domain or hostname
     * @param path cookie path, or %NULL
     * @param maxAge max age of the cookie, or -1 for a session cookie
     * @returns a new #SoupCookie.
     */
    constructor(name: string | null, value: string | null, domain: string | null, path: string | null, maxAge: number) 
    /**
     * Creates a new #SoupCookie with the given attributes. (Use
     * soup_cookie_set_secure() and soup_cookie_set_http_only() if you
     * need to set those attributes on the returned cookie.)
     * 
     * If `domain` starts with ".", that indicates a domain (which matches
     * the string after the ".", or any hostname that has `domain` as a
     * suffix). Otherwise, it is a hostname and must match exactly.
     * 
     * `max_age` is used to set the "expires" attribute on the cookie; pass
     * -1 to not include the attribute (indicating that the cookie expires
     * with the current session), 0 for an already-expired cookie, or a
     * lifetime in seconds. You can use the constants
     * %SOUP_COOKIE_MAX_AGE_ONE_HOUR, %SOUP_COOKIE_MAX_AGE_ONE_DAY,
     * %SOUP_COOKIE_MAX_AGE_ONE_WEEK and %SOUP_COOKIE_MAX_AGE_ONE_YEAR (or
     * multiples thereof) to calculate this value. (If you really care
     * about setting the exact time that the cookie will expire, use
     * soup_cookie_set_expires().)
     * @constructor 
     * @param name cookie name
     * @param value cookie value
     * @param domain cookie domain or hostname
     * @param path cookie path, or %NULL
     * @param maxAge max age of the cookie, or -1 for a session cookie
     * @returns a new #SoupCookie.
     */
    static new(name: string | null, value: string | null, domain: string | null, path: string | null, maxAge: number): Cookie
    /**
     * Parses `header` and returns a #SoupCookie. (If `header` contains
     * multiple cookies, only the first one will be parsed.)
     * 
     * If `header` does not have "path" or "domain" attributes, they will
     * be defaulted from `origin`. If `origin` is %NULL, path will default
     * to "/", but domain will be left as %NULL. Note that this is not a
     * valid state for a #SoupCookie, and you will need to fill in some
     * appropriate string for the domain if you want to actually make use
     * of the cookie.
     * @param header a cookie string (eg, the value of a Set-Cookie header)
     * @param origin origin of the cookie, or %NULL
     * @returns a new #SoupCookie, or %NULL if it could not be parsed, or contained an illegal "domain" attribute for a cookie originating from @origin.
     */
    static parse(header: string | null, origin: URI): Cookie | null
}

interface CookieJarClass {

    // Own fields of Soup-2.4.Soup.CookieJarClass

    parentClass: GObject.ObjectClass
    save: (jar: CookieJar) => void
    isPersistent: (jar: CookieJar) => boolean
    changed: (jar: CookieJar, oldCookie: Cookie, newCookie: Cookie) => void
}

abstract class CookieJarClass {

    // Own properties of Soup-2.4.Soup.CookieJarClass

    static name: string
}

interface CookieJarDBClass {

    // Own fields of Soup-2.4.Soup.CookieJarDBClass

    parentClass: CookieJarClass
}

abstract class CookieJarDBClass {

    // Own properties of Soup-2.4.Soup.CookieJarDBClass

    static name: string
}

interface CookieJarTextClass {

    // Own fields of Soup-2.4.Soup.CookieJarTextClass

    parentClass: CookieJarClass
}

abstract class CookieJarTextClass {

    // Own properties of Soup-2.4.Soup.CookieJarTextClass

    static name: string
}

interface Date {

    // Own fields of Soup-2.4.Soup.Date

    /**
     * the year, 1 to 9999
     * @field 
     */
    year: number
    /**
     * the month, 1 to 12
     * @field 
     */
    month: number
    /**
     * day of the month, 1 to 31
     * @field 
     */
    day: number
    /**
     * hour of the day, 0 to 23
     * @field 
     */
    hour: number
    /**
     * minute, 0 to 59
     * @field 
     */
    minute: number
    /**
     * second, 0 to 59 (or up to 61 in the case of leap seconds)
     * @field 
     */
    second: number
    /**
     * %TRUE if the date is in UTC
     * @field 
     */
    utc: boolean
    /**
     * offset from UTC
     * @field 
     */
    offset: number

    // Owm methods of Soup-2.4.Soup.Date

    /**
     * Copies `date`.
     */
    copy(): Date
    /**
     * Frees `date`.
     */
    free(): void
    /**
     * Gets `date'`s day.
     * @returns @date's day
     */
    getDay(): number
    /**
     * Gets `date'`s hour.
     * @returns @date's hour
     */
    getHour(): number
    /**
     * Gets `date'`s minute.
     * @returns @date's minute
     */
    getMinute(): number
    /**
     * Gets `date'`s month.
     * @returns @date's month
     */
    getMonth(): number
    /**
     * Gets `date'`s offset from UTC.
     * @returns @date's offset from UTC. If soup_date_get_utc() returns %FALSE but soup_date_get_offset() returns 0, that means the date is a "floating" time with no associated offset information.
     */
    getOffset(): number
    /**
     * Gets `date'`s second.
     * @returns @date's second
     */
    getSecond(): number
    /**
     * Gets `date'`s UTC flag
     * @returns %TRUE if @date is UTC.
     */
    getUtc(): number
    /**
     * Gets `date'`s year.
     * @returns @date's year
     */
    getYear(): number
    /**
     * Determines if `date` is in the past.
     * @returns %TRUE if @date is in the past
     */
    isPast(): boolean
    /**
     * Converts `date` to a string in the format described by `format`.
     * @param format the format to generate the date in
     * @returns @date as a string
     */
    toString(format: DateFormat): string | null
    /**
     * Converts `date` to a <type>time_t</type>, assumming it to be in
     * UTC.
     * 
     * If `date` is not representable as a <type>time_t</type>, it will be
     * clamped into range. (In particular, some HTTP cookies have
     * expiration dates after "Y2.038k" (2038-01-19T03:14:07Z).)
     * @returns @date as a <type>time_t</type>
     */
    toTimeT(): number
    /**
     * Converts `date` to a #GTimeVal.
     */
    toTimeval(): /* time */ GLib.TimeVal
}

/**
 * A date and time. The date is assumed to be in the (proleptic)
 * Gregorian calendar. The time is in UTC if `utc` is %TRUE. Otherwise,
 * the time is a local time, and `offset` gives the offset from UTC in
 * minutes (such that adding `offset` to the time would give the
 * correct UTC time). If `utc` is %FALSE and `offset` is 0, then the
 * %SoupDate represents a "floating" time with no associated timezone
 * information.
 * @record 
 */
class Date {

    // Own properties of Soup-2.4.Soup.Date

    static name: string

    // Constructors of Soup-2.4.Soup.Date

    /**
     * Creates a #SoupDate representing the indicated time, UTC.
     * @constructor 
     * @param year the year (1-9999)
     * @param month the month (1-12)
     * @param day the day of the month (1-31, as appropriate for `month)`
     * @param hour the hour (0-23)
     * @param minute the minute (0-59)
     * @param second the second (0-59, or up to 61 for leap seconds)
     * @returns a new #SoupDate
     */
    constructor(year: number, month: number, day: number, hour: number, minute: number, second: number) 
    /**
     * Creates a #SoupDate representing the indicated time, UTC.
     * @constructor 
     * @param year the year (1-9999)
     * @param month the month (1-12)
     * @param day the day of the month (1-31, as appropriate for `month)`
     * @param hour the hour (0-23)
     * @param minute the minute (0-59)
     * @param second the second (0-59, or up to 61 for leap seconds)
     * @returns a new #SoupDate
     */
    static new(year: number, month: number, day: number, hour: number, minute: number, second: number): Date
    /**
     * Creates a #SoupDate representing a time `offset_seconds` after the
     * current time (or before it, if `offset_seconds` is negative). If
     * offset_seconds is 0, returns the current time.
     * 
     * If `offset_seconds` would indicate a time not expressible as a
     * <type>time_t</type>, the return value will be clamped into range.
     * @constructor 
     * @param offsetSeconds offset from current time
     * @returns a new #SoupDate
     */
    static newFromNow(offsetSeconds: number): Date
    /**
     * Parses `date_string` and tries to extract a date from it. This
     * recognizes all of the "HTTP-date" formats from RFC 2616, all ISO
     * 8601 formats containing both a time and a date, RFC 2822 dates,
     * and reasonable approximations thereof. (Eg, it is lenient about
     * whitespace, leading "0"s, etc.)
     * @constructor 
     * @param dateString the date in some plausible format
     * @returns a new #SoupDate, or %NULL if @date_string could not be parsed.
     */
    static newFromString(dateString: string | null): Date
    /**
     * Creates a #SoupDate corresponding to `when`
     * @constructor 
     * @param when a <type>time_t</type>
     * @returns a new #SoupDate
     */
    static newFromTimeT(when: number): Date
}

interface HSTSEnforcerClass {

    // Own fields of Soup-2.4.Soup.HSTSEnforcerClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: GObject.ObjectClass
    isPersistent: (hstsEnforcer: HSTSEnforcer) => boolean
    hasValidPolicy: (hstsEnforcer: HSTSEnforcer, domain: string | null) => boolean
    changed: (enforcer: HSTSEnforcer, oldPolicy: HSTSPolicy, newPolicy: HSTSPolicy) => void
    hstsEnforced: (enforcer: HSTSEnforcer, message: Message) => void
}

abstract class HSTSEnforcerClass {

    // Own properties of Soup-2.4.Soup.HSTSEnforcerClass

    static name: string
}

interface HSTSEnforcerDBClass {

    // Own fields of Soup-2.4.Soup.HSTSEnforcerDBClass

    parentClass: HSTSEnforcerClass
}

abstract class HSTSEnforcerDBClass {

    // Own properties of Soup-2.4.Soup.HSTSEnforcerDBClass

    static name: string
}

interface HSTSEnforcerDBPrivate {
}

class HSTSEnforcerDBPrivate {

    // Own properties of Soup-2.4.Soup.HSTSEnforcerDBPrivate

    static name: string
}

interface HSTSEnforcerPrivate {
}

class HSTSEnforcerPrivate {

    // Own properties of Soup-2.4.Soup.HSTSEnforcerPrivate

    static name: string
}

interface HSTSPolicy {

    // Own fields of Soup-2.4.Soup.HSTSPolicy

    /**
     * The domain or hostname that the policy applies to
     * @field 
     */
    domain: string | null
    /**
     * The maximum age, in seconds, that the policy is valid
     * @field 
     */
    maxAge: number
    /**
     * the policy expiration time, or %NULL for a permanent session policy
     * @field 
     */
    expires: Date
    /**
     * %TRUE if the policy applies on subdomains
     * @field 
     */
    includeSubdomains: boolean

    // Owm methods of Soup-2.4.Soup.HSTSPolicy

    /**
     * Copies `policy`.
     * @returns a copy of @policy
     */
    copy(): HSTSPolicy
    /**
     * Tests if `policy1` and `policy2` are equal.
     * @param policy2 a #SoupHSTSPolicy
     * @returns whether the policies are equal.
     */
    equal(policy2: HSTSPolicy): boolean
    /**
     * Frees `policy`.
     */
    free(): void
    /**
     * Gets `policy'`s domain.
     * @returns @policy's domain.
     */
    getDomain(): string | null
    /**
     * Gets whether `policy` include its subdomains.
     * @returns %TRUE if @policy includes subdomains, %FALSE otherwise.
     */
    includesSubdomains(): boolean
    /**
     * Gets whether `policy` is expired. Permanent policies never
     * expire.
     * @returns %TRUE if @policy is expired, %FALSE otherwise.
     */
    isExpired(): boolean
    /**
     * Gets whether `policy` is a non-permanent, non-expirable session policy.
     * see soup_hsts_policy_new_session_policy() for details.
     * @returns %TRUE if @policy is permanent, %FALSE otherwise
     */
    isSessionPolicy(): boolean
}

/**
 * An HTTP Strict Transport Security policy.
 * 
 * `domain` represents the host that this policy applies to. The domain
 * must be IDNA-canonicalized. soup_hsts_policy_new() and related methods
 * will do this for you.
 * 
 * `max_age` contains the 'max-age' value from the Strict Transport
 * Security header and indicates the time to live of this policy,
 * in seconds.
 * 
 * `expires` will be non-%NULL if the policy has been set by the host and
 * hence has an expiry time. If `expires` is %NULL, it indicates that the
 * policy is a permanent session policy set by the user agent.
 * 
 * If `include_subdomains` is %TRUE, the Strict Transport Security policy
 * must also be enforced on subdomains of `domain`.
 * @record 
 */
class HSTSPolicy {

    // Own properties of Soup-2.4.Soup.HSTSPolicy

    static name: string

    // Constructors of Soup-2.4.Soup.HSTSPolicy

    /**
     * Creates a new #SoupHSTSPolicy with the given attributes.
     * 
     * `domain` is a domain on which the strict transport security policy
     * represented by this object must be enforced.
     * 
     * `max_age` is used to set the "expires" attribute on the policy; pass
     * SOUP_HSTS_POLICY_MAX_AGE_PAST for an already-expired policy, or a
     * lifetime in seconds.
     * 
     * If `include_subdomains` is %TRUE, the strict transport security policy
     * must also be enforced on all subdomains of `domain`.
     * @constructor 
     * @param domain policy domain or hostname
     * @param maxAge max age of the policy
     * @param includeSubdomains %TRUE if the policy applies on subdomains
     * @returns a new #SoupHSTSPolicy.
     */
    constructor(domain: string | null, maxAge: number, includeSubdomains: boolean) 
    /**
     * Creates a new #SoupHSTSPolicy with the given attributes.
     * 
     * `domain` is a domain on which the strict transport security policy
     * represented by this object must be enforced.
     * 
     * `max_age` is used to set the "expires" attribute on the policy; pass
     * SOUP_HSTS_POLICY_MAX_AGE_PAST for an already-expired policy, or a
     * lifetime in seconds.
     * 
     * If `include_subdomains` is %TRUE, the strict transport security policy
     * must also be enforced on all subdomains of `domain`.
     * @constructor 
     * @param domain policy domain or hostname
     * @param maxAge max age of the policy
     * @param includeSubdomains %TRUE if the policy applies on subdomains
     * @returns a new #SoupHSTSPolicy.
     */
    static new(domain: string | null, maxAge: number, includeSubdomains: boolean): HSTSPolicy
    /**
     * Parses `msg'`s first "Strict-Transport-Security" response header and
     * returns a #SoupHSTSPolicy.
     * @constructor 
     * @param msg a #SoupMessage
     * @returns a new #SoupHSTSPolicy, or %NULL if no valid "Strict-Transport-Security" response header was found.
     */
    static newFromResponse(msg: Message): HSTSPolicy
    /**
     * Full version of #soup_hsts_policy_new(), to use with an existing
     * expiration date. See #soup_hsts_policy_new() for details.
     * @constructor 
     * @param domain policy domain or hostname
     * @param maxAge max age of the policy
     * @param expires the date of expiration of the policy or %NULL for a permanent policy
     * @param includeSubdomains %TRUE if the policy applies on subdomains
     * @returns a new #SoupHSTSPolicy.
     */
    static newFull(domain: string | null, maxAge: number, expires: Date, includeSubdomains: boolean): HSTSPolicy
    /**
     * Creates a new session #SoupHSTSPolicy with the given attributes.
     * A session policy is a policy that is valid during the lifetime of
     * the #SoupHSTSEnforcer it is added to. Contrary to regular policies,
     * it has no expiration date and is not stored in persistent
     * enforcers. These policies are useful for user-agent to load their
     * own or user-defined rules.
     * 
     * `domain` is a domain on which the strict transport security policy
     * represented by this object must be enforced.
     * 
     * If `include_subdomains` is %TRUE, the strict transport security policy
     * must also be enforced on all subdomains of `domain`.
     * @constructor 
     * @param domain policy domain or hostname
     * @param includeSubdomains %TRUE if the policy applies on sub domains
     * @returns a new #SoupHSTSPolicy.
     */
    static newSessionPolicy(domain: string | null, includeSubdomains: boolean): HSTSPolicy
}

interface LoggerClass {

    // Own fields of Soup-2.4.Soup.LoggerClass

    parentClass: GObject.ObjectClass
}

abstract class LoggerClass {

    // Own properties of Soup-2.4.Soup.LoggerClass

    static name: string
}

interface MessageBody {

    // Own fields of Soup-2.4.Soup.MessageBody

    /**
     * the data
     * @field 
     */
    data: string | null
    /**
     * length of `data`
     * @field 
     */
    length: number

    // Owm methods of Soup-2.4.Soup.MessageBody

    /**
     * Appends the data from `buffer` to `body`. (#SoupMessageBody uses
     * #SoupBuffers internally, so this is normally a constant-time
     * operation that doesn't actually require copying the data in
     * `buffer`.)
     * @param buffer a #SoupBuffer
     */
    appendBuffer(buffer: Buffer): void
    /**
     * Appends `length` bytes from `data` to `body`.
     * 
     * This function is exactly equivalent to soup_message_body_append()
     * with %SOUP_MEMORY_TAKE as second argument; it exists mainly for
     * convenience and simplifying language bindings.
     * @param data data to append
     */
    append(data: Uint8Array): void
    /**
     * Tags `body` as being complete; Call this when using chunked encoding
     * after you have appended the last chunk.
     */
    complete(): void
    /**
     * Fills in `body'`s data field with a buffer containing all of the
     * data in `body` (plus an additional '\0' byte not counted by `body'`s
     * length field).
     * @returns a #SoupBuffer containing the same data as @body. (You must free this buffer if you do not want it.)
     */
    flatten(): Buffer
    /**
     * Frees `body`. You will not normally need to use this, as
     * #SoupMessage frees its associated message bodies automatically.
     */
    free(): void
    /**
     * Gets the accumulate flag on `body;` see
     * soup_message_body_set_accumulate() for details.
     * @returns the accumulate flag for @body.
     */
    getAccumulate(): boolean
    /**
     * Gets a #SoupBuffer containing data from `body` starting at `offset`.
     * The size of the returned chunk is unspecified. You can iterate
     * through the entire body by first calling
     * soup_message_body_get_chunk() with an offset of 0, and then on each
     * successive call, increment the offset by the length of the
     * previously-returned chunk.
     * 
     * If `offset` is greater than or equal to the total length of `body,`
     * then the return value depends on whether or not
     * soup_message_body_complete() has been called or not; if it has,
     * then soup_message_body_get_chunk() will return a 0-length chunk
     * (indicating the end of `body)`. If it has not, then
     * soup_message_body_get_chunk() will return %NULL (indicating that
     * `body` may still potentially have more data, but that data is not
     * currently available).
     * @param offset an offset
     * @returns a #SoupBuffer, or %NULL.
     */
    getChunk(offset: number): Buffer | null
    /**
     * Handles the #SoupMessageBody part of receiving a chunk of data from
     * the network. Normally this means appending `chunk` to `body,` exactly
     * as with soup_message_body_append_buffer(), but if you have set
     * `body'`s accumulate flag to %FALSE, then that will not happen.
     * 
     * This is a low-level method which you should not normally need to
     * use.
     * @param chunk a #SoupBuffer received from the network
     */
    gotChunk(chunk: Buffer): void
    /**
     * Sets or clears the accumulate flag on `body`. (The default value is
     * %TRUE.) If set to %FALSE, `body'`s %data field will not be filled in
     * after the body is fully sent/received, and the chunks that make up
     * `body` may be discarded when they are no longer needed.
     * 
     * In particular, if you set this flag to %FALSE on an "incoming"
     * message body (that is, the #SoupMessage:response_body of a
     * client-side message, or #SoupMessage:request_body of a server-side
     * message), this will cause each chunk of the body to be discarded
     * after its corresponding #SoupMessage::got_chunk signal is emitted.
     * (This is equivalent to setting the deprecated
     * %SOUP_MESSAGE_OVERWRITE_CHUNKS flag on the message.)
     * 
     * If you set this flag to %FALSE on the #SoupMessage:response_body of
     * a server-side message, it will cause each chunk of the body to be
     * discarded after its corresponding #SoupMessage::wrote_chunk signal
     * is emitted.
     * 
     * If you set the flag to %FALSE on the #SoupMessage:request_body of a
     * client-side message, it will block the accumulation of chunks into
     * `body'`s %data field, but it will not normally cause the chunks to
     * be discarded after being written like in the server-side
     * #SoupMessage:response_body case, because the request body needs to
     * be kept around in case the request needs to be sent a second time
     * due to redirection or authentication. However, if you set the
     * %SOUP_MESSAGE_CAN_REBUILD flag on the message, then the chunks will
     * be discarded, and you will be responsible for recreating the
     * request body after the #SoupMessage::restarted signal is emitted.
     * @param accumulate whether or not to accumulate body chunks in `body`
     */
    setAccumulate(accumulate: boolean): void
    /**
     * Deletes all of the data in `body`.
     */
    truncate(): void
    /**
     * Handles the #SoupMessageBody part of writing a chunk of data to the
     * network. Normally this is a no-op, but if you have set `body'`s
     * accumulate flag to %FALSE, then this will cause `chunk` to be
     * discarded to free up memory.
     * 
     * This is a low-level method which you should not need to use, and
     * there are further restrictions on its proper use which are not
     * documented here.
     * @param chunk a #SoupBuffer returned from soup_message_body_get_chunk()
     */
    wroteChunk(chunk: Buffer): void
}

/**
 * A #SoupMessage request or response body.
 * 
 * Note that while `length` always reflects the full length of the
 * message body, `data` is normally %NULL, and will only be filled in
 * after soup_message_body_flatten() is called. For client-side
 * messages, this automatically happens for the response body after it
 * has been fully read, unless you set the
 * %SOUP_MESSAGE_OVERWRITE_CHUNKS flags. Likewise, for server-side
 * messages, the request body is automatically filled in after being
 * read.
 * 
 * As an added bonus, when `data` is filled in, it is always terminated
 * with a '\0' byte (which is not reflected in `length)`.
 * @record 
 */
class MessageBody {

    // Own properties of Soup-2.4.Soup.MessageBody

    static name: string

    // Constructors of Soup-2.4.Soup.MessageBody

    /**
     * Creates a new #SoupMessageBody. #SoupMessage uses this internally; you
     * will not normally need to call it yourself.
     * @constructor 
     * @returns a new #SoupMessageBody.
     */
    constructor() 
    /**
     * Creates a new #SoupMessageBody. #SoupMessage uses this internally; you
     * will not normally need to call it yourself.
     * @constructor 
     * @returns a new #SoupMessageBody.
     */
    static new(): MessageBody
}

interface MessageClass {

    // Own fields of Soup-2.4.Soup.MessageClass

    parentClass: GObject.ObjectClass
    wroteInformational: (msg: Message) => void
    wroteHeaders: (msg: Message) => void
    wroteChunk: (msg: Message) => void
    wroteBody: (msg: Message) => void
    gotInformational: (msg: Message) => void
    gotHeaders: (msg: Message) => void
    gotChunk: (msg: Message, chunk: Buffer) => void
    gotBody: (msg: Message) => void
    restarted: (msg: Message) => void
    finished: (msg: Message) => void
    starting: (msg: Message) => void
}

abstract class MessageClass {

    // Own properties of Soup-2.4.Soup.MessageClass

    static name: string
}

interface MessageHeaders {

    // Owm methods of Soup-2.4.Soup.MessageHeaders

    /**
     * Appends a new header with name `name` and value `value` to `hdrs`. (If
     * there is an existing header with name `name,` then this creates a
     * second one, which is only allowed for list-valued headers; see also
     * soup_message_headers_replace().)
     * 
     * The caller is expected to make sure that `name` and `value` are
     * syntactically correct.
     * @param name the header name to add
     * @param value the new value of `name`
     */
    append(name: string | null, value: string | null): void
    /**
     * Removes all the headers listed in the Connection header.
     */
    cleanConnectionHeaders(): void
    /**
     * Clears `hdrs`.
     */
    clear(): void
    /**
     * Calls `func` once for each header value in `hdrs`.
     * 
     * Beware that unlike soup_message_headers_get(), this processes the
     * headers in exactly the way they were added, rather than
     * concatenating multiple same-named headers into a single value.
     * (This is intentional; it ensures that if you call
     * soup_message_headers_append() multiple times with the same name,
     * then the I/O code will output multiple copies of the header when
     * sending the message to the remote implementation, which may be
     * required for interoperability in some cases.)
     * 
     * You may not modify the headers from `func`.
     * @param func callback function to run for each header
     */
    foreach(func: MessageHeadersForeachFunc): void
    /**
     * Frees `hdrs`.
     */
    free(): void
    /**
     * Frees the array of ranges returned from soup_message_headers_get_ranges().
     * @param ranges an array of #SoupRange
     */
    freeRanges(ranges: Range): void
    /**
     * Gets the value of header `name` in `hdrs`.
     * 
     * This method was supposed to work correctly for both single-valued
     * and list-valued headers, but because some HTTP clients/servers
     * mistakenly send multiple copies of headers that are supposed to be
     * single-valued, it sometimes returns incorrect results. To fix this,
     * the methods soup_message_headers_get_one() and
     * soup_message_headers_get_list() were introduced, so callers can
     * explicitly state which behavior they are expecting.
     * @param name header name
     * @returns as with soup_message_headers_get_list().
     */
    get(name: string | null): string | null
    /**
     * Looks up the "Content-Disposition" header in `hdrs,` parses it, and
     * returns its value in *`disposition` and *`params`. `params` can be
     * %NULL if you are only interested in the disposition-type.
     * 
     * In HTTP, the most common use of this header is to set a
     * disposition-type of "attachment", to suggest to the browser that a
     * response should be saved to disk rather than displayed in the
     * browser. If `params` contains a "filename" parameter, this is a
     * suggestion of a filename to use. (If the parameter value in the
     * header contains an absolute or relative path, libsoup will truncate
     * it down to just the final path component, so you do not need to
     * test this yourself.)
     * 
     * Content-Disposition is also used in "multipart/form-data", however
     * this is handled automatically by #SoupMultipart and the associated
     * form methods.
     * @returns %TRUE if @hdrs contains a "Content-Disposition" header, %FALSE if not (in which case *@disposition and *@params will be unchanged).
     */
    getContentDisposition(): [ /* returnType */ boolean, /* disposition */ string | null, /* params */ GLib.HashTable ]
    /**
     * Gets the message body length that `hdrs` declare. This will only
     * be non-0 if soup_message_headers_get_encoding() returns
     * %SOUP_ENCODING_CONTENT_LENGTH.
     * @returns the message body length declared by @hdrs.
     */
    getContentLength(): number
    /**
     * Parses `hdrs'`s Content-Range header and returns it in `start,`
     * `end,` and `total_length`. If the total length field in the header
     * was specified as "*", then `total_length` will be set to -1.
     * @returns %TRUE if @hdrs contained a "Content-Range" header containing a byte range which could be parsed, %FALSE otherwise.
     */
    getContentRange(): [ /* returnType */ boolean, /* start */ number, /* end */ number, /* totalLength */ number ]
    /**
     * Looks up the "Content-Type" header in `hdrs,` parses it, and returns
     * its value in *`content_type` and *`params`. `params` can be %NULL if you
     * are only interested in the content type itself.
     * @returns a string with the value of the "Content-Type" header or %NULL if @hdrs does not contain that header or it cannot be parsed (in which case *@params will be unchanged).
     */
    getContentType(): [ /* returnType */ string | null, /* params */ GLib.HashTable ]
    /**
     * Gets the message body encoding that `hdrs` declare. This may not
     * always correspond to the encoding used on the wire; eg, a HEAD
     * response may declare a Content-Length or Transfer-Encoding, but
     * it will never actually include a body.
     * @returns the encoding declared by @hdrs.
     */
    getEncoding(): Encoding
    /**
     * Gets the expectations declared by `hdrs'`s "Expect" header.
     * Currently this will either be %SOUP_EXPECTATION_CONTINUE or
     * %SOUP_EXPECTATION_UNRECOGNIZED.
     * @returns the contents of @hdrs's "Expect" header
     */
    getExpectations(): Expectation
    /**
     * Gets the type of headers.
     * @returns the header's type.
     */
    getHeadersType(): MessageHeadersType
    /**
     * Gets the value of header `name` in `hdrs`. Use this for headers whose
     * values are comma-delimited lists, and which are therefore allowed
     * to appear multiple times in the headers. For non-list-valued
     * headers, use soup_message_headers_get_one().
     * 
     * If `name` appears multiple times in `hdrs,`
     * soup_message_headers_get_list() will concatenate all of the values
     * together, separated by commas. This is sometimes awkward to parse
     * (eg, WWW-Authenticate, Set-Cookie), but you have to be able to deal
     * with it anyway, because the HTTP spec explicitly states that this
     * transformation is allowed, and so an upstream proxy could do the
     * same thing.
     * @param name header name
     * @returns the header's value or %NULL if not found.
     */
    getList(name: string | null): string | null
    /**
     * Gets the value of header `name` in `hdrs`. Use this for headers whose
     * values are <emphasis>not</emphasis> comma-delimited lists, and
     * which therefore can only appear at most once in the headers. For
     * list-valued headers, use soup_message_headers_get_list().
     * 
     * If `hdrs` does erroneously contain multiple copies of the header, it
     * is not defined which one will be returned. (Ideally, it will return
     * whichever one makes libsoup most compatible with other HTTP
     * implementations.)
     * @param name header name
     * @returns the header's value or %NULL if not found.
     */
    getOne(name: string | null): string | null
    /**
     * Parses `hdrs'`s Range header and returns an array of the requested
     * byte ranges. The returned array must be freed with
     * soup_message_headers_free_ranges().
     * 
     * If `total_length` is non-0, its value will be used to adjust the
     * returned ranges to have explicit start and end values, and the
     * returned ranges will be sorted and non-overlapping. If
     * `total_length` is 0, then some ranges may have an end value of -1,
     * as described under #SoupRange, and some of the ranges may be
     * redundant.
     * 
     * Beware that even if given a `total_length,` this function does not
     * check that the ranges are satisfiable.
     * 
     * <note><para>
     * #SoupServer has built-in handling for range requests. If your
     * server handler returns a %SOUP_STATUS_OK response containing the
     * complete response body (rather than pausing the message and
     * returning some of the response body later), and there is a Range
     * header in the request, then libsoup will automatically convert the
     * response to a %SOUP_STATUS_PARTIAL_CONTENT response containing only
     * the range(s) requested by the client.
     * 
     * The only time you need to process the Range header yourself is if
     * either you need to stream the response body rather than returning
     * it all at once, or you do not already have the complete response
     * body available, and only want to generate the parts that were
     * actually requested by the client.
     * </para></note>
     * @param totalLength the total_length of the response body
     * @returns %TRUE if @hdrs contained a syntactically-valid "Range" header, %FALSE otherwise (in which case @range and @length will not be set).
     */
    getRanges(totalLength: number): [ /* returnType */ boolean, /* ranges */ Range[] ]
    /**
     * Checks whether the list-valued header `name` is present in `hdrs,`
     * and contains a case-insensitive match for `token`.
     * 
     * (If `name` is present in `hdrs,` then this is equivalent to calling
     * soup_header_contains() on its value.)
     * @param name header name
     * @param token token to look for
     * @returns %TRUE if the header is present and contains @token,   %FALSE otherwise.
     */
    headerContains(name: string | null, token: string | null): boolean
    /**
     * Checks whether the header `name` is present in `hdrs` and is
     * (case-insensitively) equal to `value`.
     * @param name header name
     * @param value expected value
     * @returns %TRUE if the header is present and its value is   @value, %FALSE otherwise.
     */
    headerEquals(name: string | null, value: string | null): boolean
    /**
     * Removes `name` from `hdrs`. If there are multiple values for `name,`
     * they are all removed.
     * @param name the header name to remove
     */
    remove(name: string | null): void
    /**
     * Replaces the value of the header `name` in `hdrs` with `value`. (See
     * also soup_message_headers_append().)
     * 
     * The caller is expected to make sure that `name` and `value` are
     * syntactically correct.
     * @param name the header name to replace
     * @param value the new value of `name`
     */
    replace(name: string | null, value: string | null): void
    /**
     * Sets the "Content-Disposition" header in `hdrs` to `disposition,`
     * optionally with additional parameters specified in `params`.
     * 
     * See soup_message_headers_get_content_disposition() for a discussion
     * of how Content-Disposition is used in HTTP.
     * @param disposition the disposition-type
     * @param params additional parameters, or %NULL
     */
    setContentDisposition(disposition: string | null, params: GLib.HashTable | null): void
    /**
     * Sets the message body length that `hdrs` will declare, and sets
     * `hdrs'`s encoding to %SOUP_ENCODING_CONTENT_LENGTH.
     * 
     * You do not normally need to call this; if `hdrs` is set to use
     * Content-Length encoding, libsoup will automatically set its
     * Content-Length header for you immediately before sending the
     * headers. One situation in which this method is useful is when
     * generating the response to a HEAD request; Calling
     * soup_message_headers_set_content_length() allows you to put the
     * correct content length into the response without needing to waste
     * memory by filling in a response body which won't actually be sent.
     * @param contentLength the message body length
     */
    setContentLength(contentLength: number): void
    /**
     * Sets `hdrs'`s Content-Range header according to the given values.
     * (Note that `total_length` is the total length of the entire resource
     * that this is a range of, not simply `end` - `start` + 1.)
     * 
     * <note><para>
     * #SoupServer has built-in handling for range requests, and you do
     * not normally need to call this function youself. See
     * soup_message_headers_get_ranges() for more details.
     * </para></note>
     * @param start the start of the range
     * @param end the end of the range
     * @param totalLength the total length of the resource, or -1 if unknown
     */
    setContentRange(start: number, end: number, totalLength: number): void
    /**
     * Sets the "Content-Type" header in `hdrs` to `content_type,`
     * optionally with additional parameters specified in `params`.
     * @param contentType the MIME type
     * @param params additional parameters, or %NULL
     */
    setContentType(contentType: string | null, params: GLib.HashTable | null): void
    /**
     * Sets the message body encoding that `hdrs` will declare. In particular,
     * you should use this if you are going to send a request or response in
     * chunked encoding.
     * @param encoding a #SoupEncoding
     */
    setEncoding(encoding: Encoding): void
    /**
     * Sets `hdrs'`s "Expect" header according to `expectations`.
     * 
     * Currently %SOUP_EXPECTATION_CONTINUE is the only known expectation
     * value. You should set this value on a request if you are sending a
     * large message body (eg, via POST or PUT), and want to give the
     * server a chance to reject the request after seeing just the headers
     * (eg, because it will require authentication before allowing you to
     * post, or because you're POSTing to a URL that doesn't exist). This
     * saves you from having to transmit the large request body when the
     * server is just going to ignore it anyway.
     * @param expectations the expectations to set
     */
    setExpectations(expectations: Expectation): void
    /**
     * Sets `hdrs'`s Range header to request the indicated range.
     * `start` and `end` are interpreted as in a #SoupRange.
     * 
     * If you need to request multiple ranges, use
     * soup_message_headers_set_ranges().
     * @param start the start of the range to request
     * @param end the end of the range to request
     */
    setRange(start: number, end: number): void
    /**
     * Sets `hdrs'`s Range header to request the indicated ranges. (If you
     * only want to request a single range, you can use
     * soup_message_headers_set_range().)
     * @param ranges an array of #SoupRange
     * @param length the length of `range`
     */
    setRanges(ranges: Range, length: number): void
}

/**
 * The HTTP message headers associated with a request or response.
 * @record 
 */
class MessageHeaders {

    // Own properties of Soup-2.4.Soup.MessageHeaders

    static name: string

    // Constructors of Soup-2.4.Soup.MessageHeaders

    /**
     * Creates a #SoupMessageHeaders. (#SoupMessage does this
     * automatically for its own headers. You would only need to use this
     * method if you are manually parsing or generating message headers.)
     * @constructor 
     * @param type the type of headers
     * @returns a new #SoupMessageHeaders
     */
    constructor(type: MessageHeadersType) 
    /**
     * Creates a #SoupMessageHeaders. (#SoupMessage does this
     * automatically for its own headers. You would only need to use this
     * method if you are manually parsing or generating message headers.)
     * @constructor 
     * @param type the type of headers
     * @returns a new #SoupMessageHeaders
     */
    static new(type: MessageHeadersType): MessageHeaders
}

interface MessageHeadersIter {

    // Owm methods of Soup-2.4.Soup.MessageHeadersIter

    /**
     * Yields the next name/value pair in the %SoupMessageHeaders being
     * iterated by `iter`. If `iter` has already yielded the last header,
     * then soup_message_headers_iter_next() will return %FALSE and `name`
     * and `value` will be unchanged.
     * @returns %TRUE if another name and value were returned, %FALSE if the end of the headers has been reached.
     */
    next(): [ /* returnType */ boolean, /* name */ string | null, /* value */ string | null ]
}

/**
 * An opaque type used to iterate over a %SoupMessageHeaders
 * structure.
 * 
 * After intializing the iterator with
 * soup_message_headers_iter_init(), call
 * soup_message_headers_iter_next() to fetch data from it.
 * 
 * You may not modify the headers while iterating over them.
 * @record 
 */
class MessageHeadersIter {

    // Own properties of Soup-2.4.Soup.MessageHeadersIter

    static name: string

    // Constructors of Soup-2.4.Soup.MessageHeadersIter

    /**
     * Initializes `iter` for iterating `hdrs`.
     * @param hdrs a %SoupMessageHeaders
     */
    static init(hdrs: MessageHeaders): /* iter */ MessageHeadersIter
}

interface MessageQueue {
}

class MessageQueue {

    // Own properties of Soup-2.4.Soup.MessageQueue

    static name: string
}

interface MessageQueueItem {
}

class MessageQueueItem {

    // Own properties of Soup-2.4.Soup.MessageQueueItem

    static name: string
}

interface Multipart {

    // Owm methods of Soup-2.4.Soup.Multipart

    /**
     * Adds a new MIME part containing `body` to `multipart,` using
     * "Content-Disposition: form-data", as per the HTML forms
     * specification. See soup_form_request_new_from_multipart() for more
     * details.
     * @param controlName the name of the control associated with this file
     * @param filename the name of the file, or %NULL if not known
     * @param contentType the MIME type of the file, or %NULL if not known
     * @param body the file data
     */
    appendFormFile(controlName: string | null, filename: string | null, contentType: string | null, body: Buffer): void
    /**
     * Adds a new MIME part containing `data` to `multipart,` using
     * "Content-Disposition: form-data", as per the HTML forms
     * specification. See soup_form_request_new_from_multipart() for more
     * details.
     * @param controlName the name of the control associated with `data`
     * @param data the body data
     */
    appendFormString(controlName: string | null, data: string | null): void
    /**
     * Adds a new MIME part to `multipart` with the given headers and body.
     * (The multipart will make its own copies of `headers` and `body,` so
     * you should free your copies if you are not using them for anything
     * else.)
     * @param headers the MIME part headers
     * @param body the MIME part body
     */
    appendPart(headers: MessageHeaders, body: Buffer): void
    /**
     * Frees `multipart`
     */
    free(): void
    /**
     * Gets the number of body parts in `multipart`
     * @returns the number of body parts in @multipart
     */
    getLength(): number
    /**
     * Gets the indicated body part from `multipart`.
     * @param part the part number to get (counting from 0)
     * @returns %TRUE on success, %FALSE if @part is out of range (in which case @headers and @body won't be set)
     */
    getPart(part: number): [ /* returnType */ boolean, /* headers */ MessageHeaders, /* body */ Buffer ]
    /**
     * Serializes `multipart` to `dest_headers` and `dest_body`.
     * @param destHeaders the headers of the HTTP message to serialize `multipart` to
     * @param destBody the body of the HTTP message to serialize `multipart` to
     */
    toMessage(destHeaders: MessageHeaders, destBody: MessageBody): void
}

/**
 * Represents a multipart HTTP message body, parsed according to the
 * syntax of RFC 2046. Of particular interest to HTTP are
 * <literal>multipart/byte-ranges</literal> and
 * <literal>multipart/form-data</literal>.
 * 
 * Although the headers of a #SoupMultipart body part will contain the
 * full headers from that body part, libsoup does not interpret them
 * according to MIME rules. For example, each body part is assumed to
 * have "binary" Content-Transfer-Encoding, even if its headers
 * explicitly state otherwise. In other words, don't try to use
 * #SoupMultipart for handling real MIME multiparts.
 * @record 
 */
class Multipart {

    // Own properties of Soup-2.4.Soup.Multipart

    static name: string

    // Constructors of Soup-2.4.Soup.Multipart

    /**
     * Creates a new empty #SoupMultipart with a randomly-generated
     * boundary string. Note that `mime_type` must be the full MIME type,
     * including "multipart/".
     * @constructor 
     * @param mimeType the MIME type of the multipart to create.
     * @returns a new empty #SoupMultipart of the given @mime_type
     */
    constructor(mimeType: string | null) 
    /**
     * Creates a new empty #SoupMultipart with a randomly-generated
     * boundary string. Note that `mime_type` must be the full MIME type,
     * including "multipart/".
     * @constructor 
     * @param mimeType the MIME type of the multipart to create.
     * @returns a new empty #SoupMultipart of the given @mime_type
     */
    static new(mimeType: string | null): Multipart
    /**
     * Parses `headers` and `body` to form a new #SoupMultipart
     * @constructor 
     * @param headers the headers of the HTTP message to parse
     * @param body the body of the HTTP message to parse
     * @returns a new #SoupMultipart (or %NULL if the message couldn't be parsed or wasn't multipart).
     */
    static newFromMessage(headers: MessageHeaders, body: MessageBody): Multipart
}

interface MultipartInputStreamClass {

    // Own fields of Soup-2.4.Soup.MultipartInputStreamClass

    parentClass: Gio.FilterInputStreamClass
}

abstract class MultipartInputStreamClass {

    // Own properties of Soup-2.4.Soup.MultipartInputStreamClass

    static name: string
}

interface MultipartInputStreamPrivate {
}

class MultipartInputStreamPrivate {

    // Own properties of Soup-2.4.Soup.MultipartInputStreamPrivate

    static name: string
}

interface PasswordManagerInterface {

    // Own fields of Soup-2.4.Soup.PasswordManagerInterface

    base: GObject.TypeInterface
    getPasswordsAsync: (passwordManager: PasswordManager, msg: Message, auth: Auth, retrying: boolean, asyncContext: GLib.MainContext, cancellable: Gio.Cancellable | null, callback: PasswordManagerCallback) => void
    getPasswordsSync: (passwordManager: PasswordManager, msg: Message, auth: Auth, cancellable: Gio.Cancellable | null) => void
}

abstract class PasswordManagerInterface {

    // Own properties of Soup-2.4.Soup.PasswordManagerInterface

    static name: string
}

interface ProxyResolverDefaultClass {

    // Own fields of Soup-2.4.Soup.ProxyResolverDefaultClass

    parentClass: GObject.ObjectClass
}

abstract class ProxyResolverDefaultClass {

    // Own properties of Soup-2.4.Soup.ProxyResolverDefaultClass

    static name: string
}

interface ProxyResolverInterface {

    // Own fields of Soup-2.4.Soup.ProxyResolverInterface

    base: GObject.TypeInterface
    getProxyAsync: (proxyResolver: ProxyResolver, msg: Message, asyncContext: GLib.MainContext, cancellable: Gio.Cancellable | null, callback: ProxyResolverCallback) => void
    getProxySync: (proxyResolver: ProxyResolver, msg: Message, cancellable: Gio.Cancellable | null) => [ /* returnType */ number, /* addr */ Address ]
}

abstract class ProxyResolverInterface {

    // Own properties of Soup-2.4.Soup.ProxyResolverInterface

    static name: string
}

interface ProxyURIResolverInterface {

    // Own fields of Soup-2.4.Soup.ProxyURIResolverInterface

    base: GObject.TypeInterface
    getProxyUriAsync: (proxyUriResolver: ProxyURIResolver, uri: URI, asyncContext: GLib.MainContext | null, cancellable: Gio.Cancellable | null, callback: ProxyURIResolverCallback) => void
    getProxyUriSync: (proxyUriResolver: ProxyURIResolver, uri: URI, cancellable: Gio.Cancellable | null) => [ /* returnType */ number, /* proxyUri */ URI ]
}

abstract class ProxyURIResolverInterface {

    // Own properties of Soup-2.4.Soup.ProxyURIResolverInterface

    static name: string
}

interface Range {

    // Own fields of Soup-2.4.Soup.Range

    /**
     * the start of the range
     * @field 
     */
    start: number
    /**
     * the end of the range
     * @field 
     */
    end: number
}

/**
 * Represents a byte range as used in the Range header.
 * 
 * If `end` is non-negative, then `start` and `end` represent the bounds
 * of of the range, counting from 0. (Eg, the first 500 bytes would be
 * represented as `start` = 0 and `end` = 499.)
 * 
 * If `end` is -1 and `start` is non-negative, then this represents a
 * range starting at `start` and ending with the last byte of the
 * requested resource body. (Eg, all but the first 500 bytes would be
 * `start` = 500, and `end` = -1.)
 * 
 * If `end` is -1 and `start` is negative, then it represents a "suffix
 * range", referring to the last -`start` bytes of the resource body.
 * (Eg, the last 500 bytes would be `start` = -500 and `end` = -1.)
 * @record 
 */
class Range {

    // Own properties of Soup-2.4.Soup.Range

    static name: string
}

interface RequestClass {

    // Own fields of Soup-2.4.Soup.RequestClass

    parent: GObject.ObjectClass
    schemes: string | null
    checkUri: (reqBase: Request, uri: URI) => boolean
    send: (request: Request, cancellable: Gio.Cancellable | null) => Gio.InputStream
    sendAsync: (request: Request, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    sendFinish: (request: Request, result: Gio.AsyncResult) => Gio.InputStream
    getContentLength: (request: Request) => number
    getContentType: (request: Request) => string | null
}

abstract class RequestClass {

    // Own properties of Soup-2.4.Soup.RequestClass

    static name: string
}

interface RequestDataClass {

    // Own fields of Soup-2.4.Soup.RequestDataClass

    parent: RequestClass
}

abstract class RequestDataClass {

    // Own properties of Soup-2.4.Soup.RequestDataClass

    static name: string
}

interface RequestDataPrivate {
}

class RequestDataPrivate {

    // Own properties of Soup-2.4.Soup.RequestDataPrivate

    static name: string
}

interface RequestFileClass {

    // Own fields of Soup-2.4.Soup.RequestFileClass

    parent: RequestClass
}

abstract class RequestFileClass {

    // Own properties of Soup-2.4.Soup.RequestFileClass

    static name: string
}

interface RequestFilePrivate {
}

class RequestFilePrivate {

    // Own properties of Soup-2.4.Soup.RequestFilePrivate

    static name: string
}

interface RequestHTTPClass {

    // Own fields of Soup-2.4.Soup.RequestHTTPClass

    parent: RequestClass
}

abstract class RequestHTTPClass {

    // Own properties of Soup-2.4.Soup.RequestHTTPClass

    static name: string
}

interface RequestHTTPPrivate {
}

class RequestHTTPPrivate {

    // Own properties of Soup-2.4.Soup.RequestHTTPPrivate

    static name: string
}

interface RequestPrivate {
}

class RequestPrivate {

    // Own properties of Soup-2.4.Soup.RequestPrivate

    static name: string
}

interface RequesterClass {

    // Own fields of Soup-2.4.Soup.RequesterClass

    parentClass: GObject.ObjectClass
}

abstract class RequesterClass {

    // Own properties of Soup-2.4.Soup.RequesterClass

    static name: string
}

interface RequesterPrivate {
}

class RequesterPrivate {

    // Own properties of Soup-2.4.Soup.RequesterPrivate

    static name: string
}

interface ServerClass {

    // Own fields of Soup-2.4.Soup.ServerClass

    parentClass: GObject.ObjectClass
    requestStarted: (server: Server, msg: Message, client: ClientContext) => void
    requestRead: (server: Server, msg: Message, client: ClientContext) => void
    requestFinished: (server: Server, msg: Message, client: ClientContext) => void
    requestAborted: (server: Server, msg: Message, client: ClientContext) => void
}

abstract class ServerClass {

    // Own properties of Soup-2.4.Soup.ServerClass

    static name: string
}

interface SessionAsyncClass {

    // Own fields of Soup-2.4.Soup.SessionAsyncClass

    parentClass: SessionClass
}

abstract class SessionAsyncClass {

    // Own properties of Soup-2.4.Soup.SessionAsyncClass

    static name: string
}

interface SessionClass {

    // Own fields of Soup-2.4.Soup.SessionClass

    parentClass: GObject.ObjectClass
    requestStarted: (session: Session, msg: Message, socket: Socket) => void
    authenticate: (session: Session, msg: Message, auth: Auth, retrying: boolean) => void
    queueMessage: (session: Session, msg: Message, callback: SessionCallback | null) => void
    requeueMessage: (session: Session, msg: Message) => void
    sendMessage: (session: Session, msg: Message) => number
    cancelMessage: (session: Session, msg: Message, statusCode: number) => void
    authRequired: (session: Session, msg: Message, auth: Auth, retrying: boolean) => void
    flushQueue: (session: Session) => void
    kick: (session: Session) => void
}

abstract class SessionClass {

    // Own properties of Soup-2.4.Soup.SessionClass

    static name: string
}

interface SessionFeatureInterface {

    // Own fields of Soup-2.4.Soup.SessionFeatureInterface

    /**
     * The parent interface.
     * @field 
     */
    parent: GObject.TypeInterface
    attach: (feature: SessionFeature, session: Session) => void
    detach: (feature: SessionFeature, session: Session) => void
    requestQueued: (feature: SessionFeature, session: Session, msg: Message) => void
    requestStarted: (feature: SessionFeature, session: Session, msg: Message, socket: Socket) => void
    requestUnqueued: (feature: SessionFeature, session: Session, msg: Message) => void
    addFeature: (feature: SessionFeature, type: GObject.GType) => boolean
    removeFeature: (feature: SessionFeature, type: GObject.GType) => boolean
    hasFeature: (feature: SessionFeature, type: GObject.GType) => boolean
}

/**
 * The interface implemented by #SoupSessionFeature<!-- -->s.
 * @record 
 */
abstract class SessionFeatureInterface {

    // Own properties of Soup-2.4.Soup.SessionFeatureInterface

    static name: string
}

interface SessionSyncClass {

    // Own fields of Soup-2.4.Soup.SessionSyncClass

    parentClass: SessionClass
}

abstract class SessionSyncClass {

    // Own properties of Soup-2.4.Soup.SessionSyncClass

    static name: string
}

interface SocketClass {

    // Own fields of Soup-2.4.Soup.SocketClass

    parentClass: GObject.ObjectClass
    readable: (sock: Socket) => void
    writable: (sock: Socket) => void
    disconnected: (sock: Socket) => void
    newConnection: (listener: Socket, newSock: Socket) => void
}

abstract class SocketClass {

    // Own properties of Soup-2.4.Soup.SocketClass

    static name: string
}

interface URI {

    // Own fields of Soup-2.4.Soup.URI

    /**
     * the URI scheme (eg, "http")
     * @field 
     */
    scheme: string | null
    /**
     * a username, or %NULL
     * @field 
     */
    user: string | null
    /**
     * a password, or %NULL
     * @field 
     */
    password: string | null
    /**
     * the hostname or IP address, or %NULL
     * @field 
     */
    host: string | null
    /**
     * the port number on `host`
     * @field 
     */
    port: number
    /**
     * the path on `host`
     * @field 
     */
    path: string | null
    /**
     * a query for `path,` or %NULL
     * @field 
     */
    query: string | null
    /**
     * a fragment identifier within `path,` or %NULL
     * @field 
     */
    fragment: string | null

    // Owm methods of Soup-2.4.Soup.URI

    /**
     * Copies `uri`
     * @returns a copy of @uri, which must be freed with soup_uri_free()
     */
    copy(): URI
    /**
     * Makes a copy of `uri,` considering only the protocol, host, and port
     * @returns the new #SoupURI
     */
    copyHost(): URI
    /**
     * Tests whether or not `uri1` and `uri2` are equal in all parts
     * @param uri2 another #SoupURI
     * @returns %TRUE or %FALSE
     */
    equal(uri2: URI): boolean
    /**
     * Frees `uri`.
     */
    free(): void
    /**
     * Gets `uri'`s fragment.
     * @returns @uri's fragment.
     */
    getFragment(): string | null
    /**
     * Gets `uri'`s host.
     * @returns @uri's host.
     */
    getHost(): string | null
    /**
     * Gets `uri'`s password.
     * @returns @uri's password.
     */
    getPassword(): string | null
    /**
     * Gets `uri'`s path.
     * @returns @uri's path.
     */
    getPath(): string | null
    /**
     * Gets `uri'`s port.
     * @returns @uri's port.
     */
    getPort(): number
    /**
     * Gets `uri'`s query.
     * @returns @uri's query.
     */
    getQuery(): string | null
    /**
     * Gets `uri'`s scheme.
     * @returns @uri's scheme.
     */
    getScheme(): string | null
    /**
     * Gets `uri'`s user.
     * @returns @uri's user.
     */
    getUser(): string | null
    /**
     * Compares `v1` and `v2`, considering only the scheme, host, and port.
     * @param v2 a #SoupURI with a non-%NULL `host` member
     * @returns whether or not the URIs are equal in scheme, host, and port.
     */
    hostEqual(v2: URI): boolean
    /**
     * Hashes `key,` considering only the scheme, host, and port.
     * @returns a hash
     */
    hostHash(): number
    /**
     * Sets `uri'`s fragment to `fragment`.
     * @param fragment the fragment
     */
    setFragment(fragment: string | null): void
    /**
     * Sets `uri'`s host to `host`.
     * 
     * If `host` is an IPv6 IP address, it should not include the brackets
     * required by the URI syntax; they will be added automatically when
     * converting `uri` to a string.
     * 
     * http and https URIs should not have a %NULL `host`.
     * @param host the hostname or IP address, or %NULL
     */
    setHost(host: string | null): void
    /**
     * Sets `uri'`s password to `password`.
     * @param password the password, or %NULL
     */
    setPassword(password: string | null): void
    /**
     * Sets `uri'`s path to `path`.
     * @param path the non-%NULL path
     */
    setPath(path: string | null): void
    /**
     * Sets `uri'`s port to `port`. If `port` is 0, `uri` will not have an
     * explicitly-specified port.
     * @param port the port, or 0
     */
    setPort(port: number): void
    /**
     * Sets `uri'`s query to `query`.
     * @param query the query
     */
    setQuery(query: string | null): void
    /**
     * Sets `uri'`s query to the result of encoding `form` according to the
     * HTML form rules. See soup_form_encode_hash() for more information.
     * @param form a #GHashTable containing HTML form information
     */
    setQueryFromForm(form: GLib.HashTable): void
    /**
     * Sets `uri'`s scheme to `scheme`. This will also set `uri'`s port to
     * the default port for `scheme,` if known.
     * @param scheme the URI scheme
     */
    setScheme(scheme: string | null): void
    /**
     * Sets `uri'`s user to `user`.
     * @param user the username, or %NULL
     */
    setUser(user: string | null): void
    /**
     * Returns a string representing `uri`.
     * 
     * If `just_path_and_query` is %TRUE, this concatenates the path and query
     * together. That is, it constructs the string that would be needed in
     * the Request-Line of an HTTP request for `uri`.
     * 
     * Note that the output will never contain a password, even if `uri`
     * does.
     * @param justPathAndQuery if %TRUE, output just the path and query portions
     * @returns a string representing @uri, which the caller must free.
     */
    toString(justPathAndQuery: boolean): string | null
    /**
     * Tests if `uri` uses the default port for its scheme. (Eg, 80 for
     * http.) (This only works for http, https and ftp; libsoup does not know
     * the default ports of other protocols.)
     * @returns %TRUE or %FALSE
     */
    usesDefaultPort(): boolean
}

/**
 * A #SoupURI represents a (parsed) URI. #SoupURI supports RFC 3986
 * (URI Generic Syntax), and can parse any valid URI. However, libsoup
 * only uses "http" and "https" URIs internally; You can use
 * SOUP_URI_VALID_FOR_HTTP() to test if a #SoupURI is a valid HTTP
 * URI.
 * 
 * `scheme` will always be set in any URI. It is an interned string and
 * is always all lowercase. (If you parse a URI with a non-lowercase
 * scheme, it will be converted to lowercase.) The macros
 * %SOUP_URI_SCHEME_HTTP and %SOUP_URI_SCHEME_HTTPS provide the
 * interned values for "http" and "https" and can be compared against
 * URI `scheme` values.
 * 
 * `user` and `password` are parsed as defined in the older URI specs
 * (ie, separated by a colon; RFC 3986 only talks about a single
 * "userinfo" field). Note that `password` is not included in the
 * output of soup_uri_to_string(). libsoup does not normally use these
 * fields; authentication is handled via #SoupSession signals.
 * 
 * `host` contains the hostname, and `port` the port specified in the
 * URI. If the URI doesn't contain a hostname, `host` will be %NULL,
 * and if it doesn't specify a port, `port` may be 0. However, for
 * "http" and "https" URIs, `host` is guaranteed to be non-%NULL
 * (trying to parse an http URI with no `host` will return %NULL), and
 * `port` will always be non-0 (because libsoup knows the default value
 * to use when it is not specified in the URI).
 * 
 * `path` is always non-%NULL. For http/https URIs, `path` will never be
 * an empty string either; if the input URI has no path, the parsed
 * #SoupURI will have a `path` of "/".
 * 
 * `query` and `fragment` are optional for all URI types.
 * soup_form_decode() may be useful for parsing `query`.
 * 
 * Note that `path,` `query,` and `fragment` may contain
 * %<!-- -->-encoded characters. soup_uri_new() calls
 * soup_uri_normalize() on them, but not soup_uri_decode(). This is
 * necessary to ensure that soup_uri_to_string() will generate a URI
 * that has exactly the same meaning as the original. (In theory,
 * #SoupURI should leave `user,` `password,` and `host` partially-encoded
 * as well, but this would be more annoying than useful.)
 * @record 
 */
class URI {

    // Own properties of Soup-2.4.Soup.URI

    static name: string

    // Constructors of Soup-2.4.Soup.URI

    /**
     * Parses an absolute URI.
     * 
     * You can also pass %NULL for `uri_string` if you want to get back an
     * "empty" #SoupURI that you can fill in by hand. (You will need to
     * call at least soup_uri_set_scheme() and soup_uri_set_path(), since
     * those fields are required.)
     * @constructor 
     * @param uriString a URI
     * @returns a #SoupURI, or %NULL if the given string  was found to be invalid.
     */
    constructor(uriString: string | null) 
    /**
     * Parses an absolute URI.
     * 
     * You can also pass %NULL for `uri_string` if you want to get back an
     * "empty" #SoupURI that you can fill in by hand. (You will need to
     * call at least soup_uri_set_scheme() and soup_uri_set_path(), since
     * those fields are required.)
     * @constructor 
     * @param uriString a URI
     * @returns a #SoupURI, or %NULL if the given string  was found to be invalid.
     */
    static new(uriString: string | null): URI
    /**
     * Parses `uri_string` relative to `base`.
     * @constructor 
     * @param base a base URI
     * @param uriString the URI
     * @returns a parsed #SoupURI.
     */
    static newWithBase(base: URI, uriString: string | null): URI
    /**
     * Fully %<!-- -->-decodes `part`.
     * 
     * In the past, this would return %NULL if `part` contained invalid
     * percent-encoding, but now it just ignores the problem (as
     * soup_uri_new() already did).
     * @param part a URI part
     * @returns the decoded URI part.
     */
    static decode(part: string | null): string | null
    /**
     * This %<!-- -->-encodes the given URI part and returns the escaped
     * version in allocated memory, which the caller must free when it is
     * done.
     * @param part a URI part
     * @param escapeExtra additional reserved characters to escape (or %NULL)
     * @returns the encoded URI part
     */
    static encode(part: string | null, escapeExtra: string | null): string | null
    /**
     * %<!-- -->-decodes any "unreserved" characters (or characters in
     * `unescape_extra)` in `part,` and %<!-- -->-encodes any non-ASCII
     * characters, spaces, and non-printing characters in `part`.
     * 
     * "Unreserved" characters are those that are not allowed to be used
     * for punctuation according to the URI spec. For example, letters are
     * unreserved, so soup_uri_normalize() will turn
     * <literal>http://example.com/foo/b%<!-- -->61r</literal> into
     * <literal>http://example.com/foo/bar</literal>, which is guaranteed
     * to mean the same thing. However, "/" is "reserved", so
     * <literal>http://example.com/foo%<!-- -->2Fbar</literal> would not
     * be changed, because it might mean something different to the
     * server.
     * 
     * In the past, this would return %NULL if `part` contained invalid
     * percent-encoding, but now it just ignores the problem (as
     * soup_uri_new() already did).
     * @param part a URI part
     * @param unescapeExtra reserved characters to unescape (or %NULL)
     * @returns the normalized URI part
     */
    static normalize(part: string | null, unescapeExtra: string | null): string | null
}

interface WebsocketConnectionClass {

    // Own fields of Soup-2.4.Soup.WebsocketConnectionClass

    parent: GObject.ObjectClass
    message: (self: WebsocketConnection, type: WebsocketDataType, message: any) => void
    error: (self: WebsocketConnection, error: GLib.Error) => void
    closing: (self: WebsocketConnection) => void
    closed: (self: WebsocketConnection) => void
    pong: (self: WebsocketConnection, message: any) => void
}

/**
 * The abstract base class for #SoupWebsocketConnection
 * @record 
 */
abstract class WebsocketConnectionClass {

    // Own properties of Soup-2.4.Soup.WebsocketConnectionClass

    static name: string
}

interface WebsocketConnectionPrivate {
}

class WebsocketConnectionPrivate {

    // Own properties of Soup-2.4.Soup.WebsocketConnectionPrivate

    static name: string
}

interface WebsocketExtensionClass {

    // Own fields of Soup-2.4.Soup.WebsocketExtensionClass

    /**
     * the parent class
     * @field 
     */
    parentClass: GObject.ObjectClass
    name: string | null
    configure: (extension: WebsocketExtension, connectionType: WebsocketConnectionType, params: GLib.HashTable | null) => boolean
    getRequestParams: (extension: WebsocketExtension) => string | null
    getResponseParams: (extension: WebsocketExtension) => string | null
    processOutgoingMessage: (extension: WebsocketExtension, header: number, payload: any) => [ /* returnType */ any, /* header */ number ]
    processIncomingMessage: (extension: WebsocketExtension, header: number, payload: any) => [ /* returnType */ any, /* header */ number ]
}

/**
 * The class structure for the SoupWebsocketExtension.
 * @record 
 */
abstract class WebsocketExtensionClass {

    // Own properties of Soup-2.4.Soup.WebsocketExtensionClass

    static name: string
}

interface WebsocketExtensionDeflateClass {

    // Own fields of Soup-2.4.Soup.WebsocketExtensionDeflateClass

    parentClass: WebsocketExtensionClass
}

abstract class WebsocketExtensionDeflateClass {

    // Own properties of Soup-2.4.Soup.WebsocketExtensionDeflateClass

    static name: string
}

interface WebsocketExtensionManagerClass {

    // Own fields of Soup-2.4.Soup.WebsocketExtensionManagerClass

    parentClass: GObject.ObjectClass
}

abstract class WebsocketExtensionManagerClass {

    // Own properties of Soup-2.4.Soup.WebsocketExtensionManagerClass

    static name: string
}

interface XMLRPCParams {

    // Owm methods of Soup-2.4.Soup.XMLRPCParams

    /**
     * Free a #SoupXMLRPCParams returned by soup_xmlrpc_parse_request().
     */
    free(): void
    /**
     * Parse method parameters returned by soup_xmlrpc_parse_request().
     * 
     * Deserialization details:
     *  - If `signature` is provided, &lt;int&gt; and &lt;i4&gt; can be deserialized
     *    to byte, int16, uint16, int32, uint32, int64 or uint64. Otherwise
     *    it will be deserialized to int32. If the value is out of range
     *    for the target type it will return an error.
     *  - &lt;struct&gt; will be deserialized to "a{sv}". `signature` could define
     *    another value type (e.g. "a{ss}").
     *  - &lt;array&gt; will be deserialized to "av". `signature` could define
     *    another element type (e.g. "as") or could be a tuple (e.g. "(ss)").
     *  - &lt;base64&gt; will be deserialized to "ay".
     *  - &lt;string&gt; will be deserialized to "s".
     *  - &lt;dateTime.iso8601&gt; will be deserialized to an unspecified variant
     *    type. If `signature` is provided it must have the generic "v" type, which
     *    means there is no guarantee that it's actually a datetime that has been
     *    received. soup_xmlrpc_variant_get_datetime() must be used to parse and
     *    type check this special variant.
     *  - `signature` must not have maybes, otherwise an error is returned.
     *  - Dictionaries must have string keys, otherwise an error is returned.
     * @param signature A valid #GVariant type string, or %NULL
     * @returns a new (non-floating) #GVariant, or %NULL
     */
    parse(signature: string | null): GLib.Variant
}

/**
 * Opaque structure containing XML-RPC methodCall parameter values.
 * Can be parsed using soup_xmlrpc_params_parse() and freed with
 * soup_xmlrpc_params_free().
 * @record 
 */
class XMLRPCParams {

    // Own properties of Soup-2.4.Soup.XMLRPCParams

    static name: string
}

}

export default Soup;
// END