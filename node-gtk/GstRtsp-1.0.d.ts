/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstRtsp-1.0
 */

import type GstSdp from './GstSdp-1.0';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';
import type GstBase from './GstBase-1.0';
import type Gio from './Gio-2.0';

export namespace GstRtsp {

/**
 * Authentication methods, ordered by strength
 */
enum RTSPAuthMethod {
    /**
     * no authentication
     */
    NONE,
    /**
     * basic authentication
     */
    BASIC,
    /**
     * digest authentication
     */
    DIGEST,
}
/**
 * The possible network families.
 */
enum RTSPFamily {
    /**
     * unknown network family
     */
    NONE,
    /**
     * internet
     */
    INET,
    /**
     * internet V6
     */
    INET6,
}
/**
 * Enumeration of rtsp header fields
 */
enum RTSPHeaderField {
    INVALID,
    ACCEPT,
    ACCEPT_ENCODING,
    ACCEPT_LANGUAGE,
    ALLOW,
    AUTHORIZATION,
    BANDWIDTH,
    BLOCKSIZE,
    CACHE_CONTROL,
    CONFERENCE,
    CONNECTION,
    CONTENT_BASE,
    CONTENT_ENCODING,
    CONTENT_LANGUAGE,
    CONTENT_LENGTH,
    CONTENT_LOCATION,
    CONTENT_TYPE,
    CSEQ,
    DATE,
    EXPIRES,
    FROM,
    IF_MODIFIED_SINCE,
    LAST_MODIFIED,
    PROXY_AUTHENTICATE,
    PROXY_REQUIRE,
    PUBLIC,
    RANGE,
    REFERER,
    REQUIRE,
    RETRY_AFTER,
    RTP_INFO,
    SCALE,
    SESSION,
    SERVER,
    SPEED,
    TRANSPORT,
    UNSUPPORTED,
    USER_AGENT,
    VIA,
    WWW_AUTHENTICATE,
    CLIENT_CHALLENGE,
    REAL_CHALLENGE1,
    REAL_CHALLENGE2,
    REAL_CHALLENGE3,
    SUBSCRIBE,
    ALERT,
    CLIENT_ID,
    COMPANY_ID,
    GUID,
    REGION_DATA,
    MAX_ASM_WIDTH,
    LANGUAGE,
    PLAYER_START_TIME,
    LOCATION,
    ETAG,
    IF_MATCH,
    ACCEPT_CHARSET,
    SUPPORTED,
    VARY,
    X_ACCELERATE_STREAMING,
    X_ACCEPT_AUTHENT,
    X_ACCEPT_PROXY_AUTHENT,
    X_BROADCAST_ID,
    X_BURST_STREAMING,
    X_NOTICE,
    X_PLAYER_LAG_TIME,
    X_PLAYLIST,
    X_PLAYLIST_CHANGE_NOTICE,
    X_PLAYLIST_GEN_ID,
    X_PLAYLIST_SEEK_ID,
    X_PROXY_CLIENT_AGENT,
    X_PROXY_CLIENT_VERB,
    X_RECEDING_PLAYLISTCHANGE,
    X_RTP_INFO,
    X_STARTUPPROFILE,
    TIMESTAMP,
    AUTHENTICATION_INFO,
    HOST,
    PRAGMA,
    X_SERVER_IP_ADDRESS,
    X_SESSIONCOOKIE,
    RTCP_INTERVAL,
    KEYMGMT,
    PIPELINED_REQUESTS,
    MEDIA_PROPERTIES,
    SEEK_STYLE,
    ACCEPT_RANGES,
    FRAMES,
    RATE_CONTROL,
    LAST,
}
/**
 * The type of a message.
 */
enum RTSPMsgType {
    /**
     * invalid message type
     */
    INVALID,
    /**
     * RTSP request message
     */
    REQUEST,
    /**
     * RTSP response message
     */
    RESPONSE,
    /**
     * HTTP request message.
     */
    HTTP_REQUEST,
    /**
     * HTTP response message.
     */
    HTTP_RESPONSE,
    /**
     * data message
     */
    DATA,
}
/**
 * Different possible time range units.
 */
enum RTSPRangeUnit {
    /**
     * SMPTE timecode
     */
    SMPTE,
    /**
     * 29.97 frames per second
     */
    SMPTE_30_DROP,
    /**
     * 25 frames per second
     */
    SMPTE_25,
    /**
     * Normal play time
     */
    NPT,
    /**
     * Absolute time expressed as ISO 8601 timestamps
     */
    CLOCK,
}
/**
 * Result codes from the RTSP functions.
 */
enum RTSPResult {
    /**
     * no error
     */
    OK,
    /**
     * some unspecified error occurred
     */
    ERROR,
    /**
     * invalid arguments were provided to a function
     */
    EINVAL,
    /**
     * an operation was canceled
     */
    EINTR,
    /**
     * no memory was available for the operation
     */
    ENOMEM,
    /**
     * a host resolve error occurred
     */
    ERESOLV,
    /**
     * function not implemented
     */
    ENOTIMPL,
    /**
     * a system error occurred, errno contains more details
     */
    ESYS,
    /**
     * a parsing error occurred
     */
    EPARSE,
    /**
     * windows networking could not start
     */
    EWSASTART,
    /**
     * windows networking stack has wrong version
     */
    EWSAVERSION,
    /**
     * end-of-file was reached
     */
    EEOF,
    /**
     * a network problem occurred, h_errno contains more details
     */
    ENET,
    /**
     * the host is not an IP host
     */
    ENOTIP,
    /**
     * a timeout occurred
     */
    ETIMEOUT,
    /**
     * the tunnel GET request has been performed
     */
    ETGET,
    /**
     * the tunnel POST request has been performed
     */
    ETPOST,
    /**
     * last error
     */
    ELAST,
}
/**
 * The different RTSP states.
 */
enum RTSPState {
    /**
     * invalid state
     */
    INVALID,
    /**
     * initializing
     */
    INIT,
    /**
     * ready for operation
     */
    READY,
    /**
     * seeking in progress
     */
    SEEKING,
    /**
     * playing
     */
    PLAYING,
    /**
     * recording
     */
    RECORDING,
}
/**
 * Enumeration of rtsp status codes
 */
enum RTSPStatusCode {
    INVALID,
    CONTINUE,
    OK,
    CREATED,
    LOW_ON_STORAGE,
    MULTIPLE_CHOICES,
    MOVED_PERMANENTLY,
    MOVE_TEMPORARILY,
    SEE_OTHER,
    NOT_MODIFIED,
    USE_PROXY,
    BAD_REQUEST,
    UNAUTHORIZED,
    PAYMENT_REQUIRED,
    FORBIDDEN,
    NOT_FOUND,
    METHOD_NOT_ALLOWED,
    NOT_ACCEPTABLE,
    PROXY_AUTH_REQUIRED,
    REQUEST_TIMEOUT,
    GONE,
    LENGTH_REQUIRED,
    PRECONDITION_FAILED,
    REQUEST_ENTITY_TOO_LARGE,
    REQUEST_URI_TOO_LARGE,
    UNSUPPORTED_MEDIA_TYPE,
    PARAMETER_NOT_UNDERSTOOD,
    CONFERENCE_NOT_FOUND,
    NOT_ENOUGH_BANDWIDTH,
    SESSION_NOT_FOUND,
    METHOD_NOT_VALID_IN_THIS_STATE,
    HEADER_FIELD_NOT_VALID_FOR_RESOURCE,
    INVALID_RANGE,
    PARAMETER_IS_READONLY,
    AGGREGATE_OPERATION_NOT_ALLOWED,
    ONLY_AGGREGATE_OPERATION_ALLOWED,
    UNSUPPORTED_TRANSPORT,
    DESTINATION_UNREACHABLE,
    KEY_MANAGEMENT_FAILURE,
    INTERNAL_SERVER_ERROR,
    NOT_IMPLEMENTED,
    BAD_GATEWAY,
    SERVICE_UNAVAILABLE,
    GATEWAY_TIMEOUT,
    RTSP_VERSION_NOT_SUPPORTED,
    OPTION_NOT_SUPPORTED,
}
/**
 * Possible time types.
 */
enum RTSPTimeType {
    /**
     * seconds
     */
    SECONDS,
    /**
     * now
     */
    NOW,
    /**
     * end
     */
    END,
    /**
     * frames and subframes
     */
    FRAMES,
    /**
     * UTC time
     */
    UTC,
}
/**
 * The supported RTSP versions.
 */
enum RTSPVersion {
    /**
     * unknown/invalid version
     */
    INVALID,
    /**
     * version 1.0
     */
    TODO_1_0,
    /**
     * version 1.1.
     */
    TODO_1_1,
    /**
     * version 2.0.
     */
    TODO_2_0,
}
/**
 * The possible events for the connection.
 */
enum RTSPEvent {
    /**
     * connection is readable
     */
    READ,
    /**
     * connection is writable
     */
    WRITE,
}
/**
 * The different transport methods.
 */
enum RTSPLowerTrans {
    /**
     * invalid transport flag
     */
    UNKNOWN,
    /**
     * stream data over UDP
     */
    UDP,
    /**
     * stream data over UDP multicast
     */
    UDP_MCAST,
    /**
     * stream data over TCP
     */
    TCP,
    /**
     * stream data tunneled over HTTP.
     */
    HTTP,
    /**
     * encrypt TCP and HTTP with TLS
     */
    TLS,
}
/**
 * The different supported RTSP methods.
 */
enum RTSPMethod {
    /**
     * invalid method
     */
    INVALID,
    /**
     * the DESCRIBE method
     */
    DESCRIBE,
    /**
     * the ANNOUNCE method
     */
    ANNOUNCE,
    /**
     * the GET_PARAMETER method
     */
    GET_PARAMETER,
    /**
     * the OPTIONS method
     */
    OPTIONS,
    /**
     * the PAUSE method
     */
    PAUSE,
    /**
     * the PLAY method
     */
    PLAY,
    /**
     * the RECORD method
     */
    RECORD,
    /**
     * the REDIRECT method
     */
    REDIRECT,
    /**
     * the SETUP method
     */
    SETUP,
    /**
     * the SET_PARAMETER method
     */
    SET_PARAMETER,
    /**
     * the TEARDOWN method
     */
    TEARDOWN,
    /**
     * the GET method (HTTP).
     */
    GET,
    /**
     * the POST method (HTTP).
     */
    POST,
}
/**
 * The transfer profile to use.
 */
enum RTSPProfile {
    /**
     * invalid profile
     */
    UNKNOWN,
    /**
     * the Audio/Visual profile (RFC 3551)
     */
    AVP,
    /**
     * the secure Audio/Visual profile (RFC 3711)
     */
    SAVP,
    /**
     * the Audio/Visual profile with feedback (RFC 4585)
     */
    AVPF,
    /**
     * the secure Audio/Visual profile with feedback (RFC 5124)
     */
    SAVPF,
}
/**
 * The transfer mode to use.
 */
enum RTSPTransMode {
    /**
     * invalid tansport mode
     */
    UNKNOWN,
    /**
     * transfer RTP data
     */
    RTP,
    /**
     * transfer RDT (RealMedia) data
     */
    RDT,
}
/**
 * The default RTSP port to connect to.
 */
const RTSP_DEFAULT_PORT: number
function rtspAuthCredentialsFree(credentials: RTSPAuthCredential): void
function rtspConnectionAccept(socket: Gio.Socket, cancellable?: Gio.Cancellable | null): [ /* returnType */ RTSPResult, /* conn */ RTSPConnection ]
function rtspConnectionCreate(url: RTSPUrl): [ /* returnType */ RTSPResult, /* conn */ RTSPConnection ]
function rtspConnectionCreateFromSocket(socket: Gio.Socket, ip: string, port: number, initialBuffer: string): [ /* returnType */ RTSPResult, /* conn */ RTSPConnection ]
function rtspFindHeaderField(header: string): RTSPHeaderField
function rtspFindMethod(method: string): RTSPMethod
function rtspGenerateDigestAuthResponse(algorithm: string | null, method: string, realm: string, username: string, password: string, uri: string, nonce: string): string
function rtspGenerateDigestAuthResponseFromMd5(algorithm: string | null, method: string, md5: string, uri: string, nonce: string): string
function rtspHeaderAllowMultiple(field: RTSPHeaderField): boolean
function rtspHeaderAsText(field: RTSPHeaderField): string
function rtspMessageNew(): [ /* returnType */ RTSPResult, /* msg */ RTSPMessage ]
function rtspMessageNewData(channel: number): [ /* returnType */ RTSPResult, /* msg */ RTSPMessage ]
function rtspMessageNewRequest(method: RTSPMethod, uri: string): [ /* returnType */ RTSPResult, /* msg */ RTSPMessage ]
function rtspMessageNewResponse(code: RTSPStatusCode, reason?: string | null, request?: RTSPMessage | null): [ /* returnType */ RTSPResult, /* msg */ RTSPMessage ]
function rtspMethodAsText(method: RTSPMethod): string
function rtspOptionsAsText(options: RTSPMethod): string
function rtspOptionsFromText(options: string): RTSPMethod
function rtspRangeConvertUnits(range: RTSPTimeRange, unit: RTSPRangeUnit): boolean
function rtspRangeFree(range: RTSPTimeRange): void
function rtspRangeGetTimes(range: RTSPTimeRange): [ /* returnType */ boolean, /* min */ Gst.ClockTime, /* max */ Gst.ClockTime ]
function rtspRangeParse(rangestr: string): [ /* returnType */ RTSPResult, /* range */ RTSPTimeRange ]
function rtspRangeToString(range: RTSPTimeRange): string
function rtspStatusAsText(code: RTSPStatusCode): string
function rtspStrresult(result: RTSPResult): string
function rtspTransportGetManager(trans: RTSPTransMode, option: number): [ /* returnType */ RTSPResult, /* manager */ string | null ]
function rtspTransportGetMime(trans: RTSPTransMode, mime: string): RTSPResult
function rtspTransportNew(transport: RTSPTransport): RTSPResult
function rtspTransportParse(str: string, transport: RTSPTransport): RTSPResult
function rtspUrlParse(urlstr: string): [ /* returnType */ RTSPResult, /* url */ RTSPUrl ]
function rtspVersionAsText(version: RTSPVersion): string
interface RTSPConnectionAcceptCertificateFunc {
    (conn: Gio.TlsConnection, peerCert: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): boolean
}
class RTSPExtension {
    /* Methods of GstRtsp-1.0.GstRtsp.RTSPExtension */
    afterSend(req: RTSPMessage, resp: RTSPMessage): RTSPResult
    beforeSend(req: RTSPMessage): RTSPResult
    configureStream(caps: Gst.Caps): boolean
    detectServer(resp: RTSPMessage): boolean
    getTransports(protocols: RTSPLowerTrans, transport: string): RTSPResult
    parseSdp(sdp: GstSdp.SDPMessage, s: Gst.Structure): RTSPResult
    receiveRequest(req: RTSPMessage): RTSPResult
    send(req: RTSPMessage, resp: RTSPMessage): RTSPResult
    setupMedia(media: GstSdp.SDPMedia): RTSPResult
    streamSelect(url: RTSPUrl): RTSPResult
    /* Signals of GstRtsp-1.0.GstRtsp.RTSPExtension */
    connect(sigName: "send", callback: ((object?: object | null, p0?: object | null) => RTSPResult)): number
    on(sigName: "send", callback: (object?: object | null, p0?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "send", callback: (object?: object | null, p0?: object | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "send", callback: (object?: object | null, p0?: object | null) => void): NodeJS.EventEmitter
    emit(sigName: "send", object?: object | null, p0?: object | null): void
    static name: string
}
class RTSPAuthCredential {
    /* Fields of GstRtsp-1.0.GstRtsp.RTSPAuthCredential */
    /**
     * a #GstRTSPAuthMethod
     */
    readonly scheme: RTSPAuthMethod
    /**
     * A NULL-terminated array of #GstRTSPAuthParam
     */
    readonly params: RTSPAuthParam
    /**
     * The authorization for the basic schem
     */
    readonly authorization: string
    static name: string
}
class RTSPAuthParam {
    /* Fields of GstRtsp-1.0.GstRtsp.RTSPAuthParam */
    /**
     * The name of the parameter
     */
    readonly name: string
    /**
     * The value of the parameter
     */
    readonly value: string
    /* Methods of GstRtsp-1.0.GstRtsp.RTSPAuthParam */
    copy(): RTSPAuthParam
    free(): void
    static name: string
}
class RTSPConnection {
    /* Methods of GstRtsp-1.0.GstRtsp.RTSPConnection */
    /**
     * Clear the list of authentication directives stored in `conn`.
     */
    clearAuthParams(): void
    /**
     * Close the connected `conn`. After this call, the connection is in the same
     * state as when it was first created.
     */
    close(): RTSPResult
    /**
     * Attempt to connect to the url of `conn` made with
     * gst_rtsp_connection_create(). If `timeout` is %NULL this function can block
     * forever. If `timeout` contains a valid timeout, this function will return
     * #GST_RTSP_ETIMEOUT after the timeout expired.
     * 
     * This function can be cancelled with gst_rtsp_connection_flush().
     */
    connect(timeout: GLib.TimeVal): RTSPResult
    /**
     * Attempt to connect to the url of `conn` made with
     * gst_rtsp_connection_create(). If `timeout` is 0 this function can block
     * forever. If `timeout` contains a valid timeout, this function will return
     * #GST_RTSP_ETIMEOUT after the timeout expired.
     * 
     * This function can be cancelled with gst_rtsp_connection_flush().
     */
    connectUsec(timeout: number): RTSPResult
    /**
     * Attempt to connect to the url of `conn` made with
     * gst_rtsp_connection_create(). If `timeout` is %NULL this function can block
     * forever. If `timeout` contains a valid timeout, this function will return
     * #GST_RTSP_ETIMEOUT after the timeout expired.  If `conn` is set to tunneled,
     * `response` will contain a response to the tunneling request messages.
     * 
     * This function can be cancelled with gst_rtsp_connection_flush().
     */
    connectWithResponse(timeout: GLib.TimeVal, response: RTSPMessage): RTSPResult
    /**
     * Attempt to connect to the url of `conn` made with
     * gst_rtsp_connection_create(). If `timeout` is 0 this function can block
     * forever. If `timeout` contains a valid timeout, this function will return
     * #GST_RTSP_ETIMEOUT after the timeout expired.  If `conn` is set to tunneled,
     * `response` will contain a response to the tunneling request messages.
     * 
     * This function can be cancelled with gst_rtsp_connection_flush().
     */
    connectWithResponseUsec(timeout: number, response: RTSPMessage): RTSPResult
    /**
     * If `conn` received the first tunnel connection and `conn2` received
     * the second tunnel connection, link the two connections together so that
     * `conn` manages the tunneled connection.
     * 
     * After this call, `conn2` cannot be used anymore and must be freed with
     * gst_rtsp_connection_free().
     * 
     * If `conn2` is %NULL then only the base64 decoding context will be setup for
     * `conn`.
     */
    doTunnel(conn2: RTSPConnection): RTSPResult
    /**
     * Start or stop the flushing action on `conn`. When flushing, all current
     * and future actions on `conn` will return #GST_RTSP_EINTR until the connection
     * is set to non-flushing mode again.
     */
    flush(flush: boolean): RTSPResult
    /**
     * Close and free `conn`.
     */
    free(): RTSPResult
    /**
     * Get the ignore_x_server_reply value.
     */
    getIgnoreXServerReply(): boolean
    /**
     * Retrieve the IP address of the other end of `conn`.
     */
    getIp(): string
    /**
     * Get the file descriptor for reading.
     */
    getReadSocket(): Gio.Socket
    getRememberSessionId(): boolean
    /**
     * Get the TLS connection of `conn`.
     * 
     * For client side this will return the #GTlsClientConnection when connected
     * over TLS.
     * 
     * For server side connections, this function will create a GTlsServerConnection
     * when called the first time and will return that same connection on subsequent
     * calls. The server is then responsible for configuring the TLS connection.
     */
    getTls(): Gio.TlsConnection
    /**
     * Gets the anchor certificate authorities database that will be used
     * after a server certificate can't be verified with the default
     * certificate database.
     */
    getTlsDatabase(): Gio.TlsDatabase
    /**
     * Gets a #GTlsInteraction object to be used when the connection or certificate
     * database need to interact with the user. This will be used to prompt the
     * user for passwords where necessary.
     */
    getTlsInteraction(): Gio.TlsInteraction
    /**
     * Gets the TLS validation flags used to verify the peer certificate
     * when a TLS connection is established.
     */
    getTlsValidationFlags(): Gio.TlsCertificateFlags
    /**
     * Get the tunnel session id the connection.
     */
    getTunnelid(): string
    /**
     * Retrieve the URL of the other end of `conn`.
     */
    getUrl(): RTSPUrl
    /**
     * Get the file descriptor for writing.
     */
    getWriteSocket(): Gio.Socket
    /**
     * Get the tunneling state of the connection.
     */
    isTunneled(): boolean
    /**
     * Calculate the next timeout for `conn,` storing the result in `timeout`.
     */
    nextTimeout(timeout: GLib.TimeVal): RTSPResult
    /**
     * Calculate the next timeout for `conn`
     */
    nextTimeoutUsec(): number
    /**
     * Wait up to the specified `timeout` for the connection to become available for
     * at least one of the operations specified in `events`. When the function returns
     * with #GST_RTSP_OK, `revents` will contain a bitmask of available operations on
     * `conn`.
     * 
     * `timeout` can be %NULL, in which case this function might block forever.
     * 
     * This function can be cancelled with gst_rtsp_connection_flush().
     */
    poll(events: RTSPEvent, revents: RTSPEvent, timeout: GLib.TimeVal): RTSPResult
    /**
     * Wait up to the specified `timeout` for the connection to become available for
     * at least one of the operations specified in `events`. When the function returns
     * with #GST_RTSP_OK, `revents` will contain a bitmask of available operations on
     * `conn`.
     * 
     * `timeout` can be 0, in which case this function might block forever.
     * 
     * This function can be cancelled with gst_rtsp_connection_flush().
     */
    pollUsec(events: RTSPEvent, revents: RTSPEvent, timeout: number): RTSPResult
    /**
     * Attempt to read `size` bytes into `data` from the connected `conn,` blocking up to
     * the specified `timeout`. `timeout` can be %NULL, in which case this function
     * might block forever.
     * 
     * This function can be cancelled with gst_rtsp_connection_flush().
     */
    read(data: number, size: number, timeout: GLib.TimeVal): RTSPResult
    /**
     * Attempt to read `size` bytes into `data` from the connected `conn,` blocking up to
     * the specified `timeout`. `timeout` can be 0, in which case this function
     * might block forever.
     * 
     * This function can be cancelled with gst_rtsp_connection_flush().
     */
    readUsec(data: number, size: number, timeout: number): RTSPResult
    /**
     * Attempt to read into `message` from the connected `conn,` blocking up to
     * the specified `timeout`. `timeout` can be %NULL, in which case this function
     * might block forever.
     * 
     * This function can be cancelled with gst_rtsp_connection_flush().
     */
    receive(message: RTSPMessage, timeout: GLib.TimeVal): RTSPResult
    /**
     * Attempt to read into `message` from the connected `conn,` blocking up to
     * the specified `timeout`. `timeout` can be 0, in which case this function
     * might block forever.
     * 
     * This function can be cancelled with gst_rtsp_connection_flush().
     */
    receiveUsec(message: RTSPMessage, timeout: number): RTSPResult
    /**
     * Reset the timeout of `conn`.
     */
    resetTimeout(): RTSPResult
    /**
     * Attempt to send `message` to the connected `conn,` blocking up to
     * the specified `timeout`. `timeout` can be %NULL, in which case this function
     * might block forever.
     * 
     * This function can be cancelled with gst_rtsp_connection_flush().
     */
    send(message: RTSPMessage, timeout: GLib.TimeVal): RTSPResult
    /**
     * Attempt to send `messages` to the connected `conn,` blocking up to
     * the specified `timeout`. `timeout` can be %NULL, in which case this function
     * might block forever.
     * 
     * This function can be cancelled with gst_rtsp_connection_flush().
     */
    sendMessages(messages: RTSPMessage[], timeout: GLib.TimeVal): RTSPResult
    /**
     * Attempt to send `messages` to the connected `conn,` blocking up to
     * the specified `timeout`. `timeout` can be 0, in which case this function
     * might block forever.
     * 
     * This function can be cancelled with gst_rtsp_connection_flush().
     */
    sendMessagesUsec(messages: RTSPMessage[], timeout: number): RTSPResult
    /**
     * Attempt to send `message` to the connected `conn,` blocking up to
     * the specified `timeout`. `timeout` can be 0, in which case this function
     * might block forever.
     * 
     * This function can be cancelled with gst_rtsp_connection_flush().
     */
    sendUsec(message: RTSPMessage, timeout: number): RTSPResult
    /**
     * Sets a custom accept-certificate function for checking certificates for
     * validity. This will directly map to #GTlsConnection 's "accept-certificate"
     * signal and be performed after the default checks of #GstRTSPConnection
     * (checking against the #GTlsDatabase with the given #GTlsCertificateFlags)
     * have failed. If no #GTlsDatabase is set on this connection, only `func` will
     * be called.
     */
    setAcceptCertificateFunc(func: RTSPConnectionAcceptCertificateFunc): void
    /**
     * Configure `conn` for authentication mode `method` with `user` and `pass` as the
     * user and password respectively.
     */
    setAuth(method: RTSPAuthMethod, user: string, pass: string): RTSPResult
    /**
     * Setup `conn` with authentication directives. This is not necessary for
     * methods #GST_RTSP_AUTH_NONE and #GST_RTSP_AUTH_BASIC. For
     * #GST_RTSP_AUTH_DIGEST, directives should be taken from the digest challenge
     * in the WWW-Authenticate response header and can include realm, domain,
     * nonce, opaque, stale, algorithm, qop as per RFC2617.
     */
    setAuthParam(param: string, value: string): void
    /**
     * Configure `conn` to use the specified Content-Length limit.
     * Both requests and responses are validated. If content-length is
     * exceeded, ENOMEM error will be returned.
     */
    setContentLengthLimit(limit: number): void
    /**
     * By setting the HTTP mode to %TRUE the message parsing will support HTTP
     * messages in addition to the RTSP messages. It will also disable the
     * automatic handling of setting up an HTTP tunnel.
     */
    setHttpMode(enable: boolean): void
    /**
     * Set whether to ignore the x-server-ip-address header reply or not. If the
     * header is ignored, the original address will be used instead.
     */
    setIgnoreXServerReply(ignore: boolean): void
    /**
     * Set the IP address of the server.
     */
    setIp(ip: string): void
    /**
     * Set the proxy host and port.
     */
    setProxy(host: string, port: number): RTSPResult
    /**
     * Configure `conn` to use the specified DSCP value.
     */
    setQosDscp(qosDscp: number): RTSPResult
    /**
     * Sets if the #GstRTSPConnection should remember the session id from the last
     * response received and force it onto any further requests.
     * 
     * The default value is %TRUE
     */
    setRememberSessionId(remember: boolean): void
    /**
     * Sets the anchor certificate authorities database. This certificate
     * database will be used to verify the server's certificate in case it
     * can't be verified with the default certificate database first.
     */
    setTlsDatabase(database: Gio.TlsDatabase): void
    /**
     * Sets a #GTlsInteraction object to be used when the connection or certificate
     * database need to interact with the user. This will be used to prompt the
     * user for passwords where necessary.
     */
    setTlsInteraction(interaction: Gio.TlsInteraction): void
    /**
     * Sets the TLS validation flags to be used to verify the peer
     * certificate when a TLS connection is established.
     */
    setTlsValidationFlags(flags: Gio.TlsCertificateFlags): boolean
    /**
     * Set the HTTP tunneling state of the connection. This must be configured before
     * the `conn` is connected.
     */
    setTunneled(tunneled: boolean): void
    /**
     * Attempt to write `size` bytes of `data` to the connected `conn,` blocking up to
     * the specified `timeout`. `timeout` can be %NULL, in which case this function
     * might block forever.
     * 
     * This function can be cancelled with gst_rtsp_connection_flush().
     */
    write(data: number, size: number, timeout: GLib.TimeVal): RTSPResult
    /**
     * Attempt to write `size` bytes of `data` to the connected `conn,` blocking up to
     * the specified `timeout`. `timeout` can be 0, in which case this function
     * might block forever.
     * 
     * This function can be cancelled with gst_rtsp_connection_flush().
     */
    writeUsec(data: number, size: number, timeout: number): RTSPResult
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Accept a new connection on `socket` and create a new #GstRTSPConnection for
     * handling communication on new socket.
     */
    static accept(socket: Gio.Socket, cancellable?: Gio.Cancellable | null): [ /* returnType */ RTSPResult, /* conn */ RTSPConnection ]
    /**
     * Create a newly allocated #GstRTSPConnection from `url` and store it in `conn`.
     * The connection will not yet attempt to connect to `url,` use
     * gst_rtsp_connection_connect().
     * 
     * A copy of `url` will be made.
     */
    static create(url: RTSPUrl): [ /* returnType */ RTSPResult, /* conn */ RTSPConnection ]
    /**
     * Create a new #GstRTSPConnection for handling communication on the existing
     * socket `socket`. The `initial_buffer` contains zero terminated data already
     * read from `socket` which should be used before starting to read new data.
     */
    static createFromSocket(socket: Gio.Socket, ip: string, port: number, initialBuffer: string): [ /* returnType */ RTSPResult, /* conn */ RTSPConnection ]
}
abstract class RTSPExtensionInterface {
    /* Fields of GstRtsp-1.0.GstRtsp.RTSPExtensionInterface */
    readonly parent: GObject.TypeInterface
    readonly detectServer: (ext: RTSPExtension, resp: RTSPMessage) => boolean
    readonly beforeSend: (ext: RTSPExtension, req: RTSPMessage) => RTSPResult
    readonly afterSend: (ext: RTSPExtension, req: RTSPMessage, resp: RTSPMessage) => RTSPResult
    readonly parseSdp: (ext: RTSPExtension, sdp: GstSdp.SDPMessage, s: Gst.Structure) => RTSPResult
    readonly setupMedia: (ext: RTSPExtension, media: GstSdp.SDPMedia) => RTSPResult
    readonly configureStream: (ext: RTSPExtension, caps: Gst.Caps) => boolean
    readonly getTransports: (ext: RTSPExtension, protocols: RTSPLowerTrans, transport: string) => RTSPResult
    readonly streamSelect: (ext: RTSPExtension, url: RTSPUrl) => RTSPResult
    readonly send: (ext: RTSPExtension, req: RTSPMessage, resp: RTSPMessage) => RTSPResult
    readonly receiveRequest: (ext: RTSPExtension, req: RTSPMessage) => RTSPResult
    static name: string
}
class RTSPMessage {
    /* Fields of GstRtsp-1.0.GstRtsp.RTSPMessage */
    /**
     * the message type
     */
    readonly type: RTSPMsgType
    /* Methods of GstRtsp-1.0.GstRtsp.RTSPMessage */
    /**
     * Add a header with key `field` and `value` to `msg`. This function takes a copy
     * of `value`.
     */
    addHeader(field: RTSPHeaderField, value: string): RTSPResult
    /**
     * Add a header with key `header` and `value` to `msg`. This function takes a copy
     * of `value`.
     */
    addHeaderByName(header: string, value: string): RTSPResult
    /**
     * Append the currently configured headers in `msg` to the #GString `str` suitable
     * for transmission.
     */
    appendHeaders(str: GLib.String): RTSPResult
    /**
     * Allocate a new copy of `msg` and store the result in `copy`. The value in
     * `copy` should be release with gst_rtsp_message_free function.
     */
    copy(): [ /* returnType */ RTSPResult, /* copy */ RTSPMessage ]
    /**
     * Dump the contents of `msg` to stdout.
     */
    dump(): RTSPResult
    /**
     * Free the memory used by `msg`.
     */
    free(): RTSPResult
    /**
     * Get the body of `msg`. `data` remains valid for as long as `msg` is valid and
     * unchanged.
     * 
     * If the message body was set as a #GstBuffer before this will cause the data
     * to be copied and stored in the message. The #GstBuffer will no longer be
     * kept in the message.
     */
    getBody(): [ /* returnType */ RTSPResult, /* data */ Uint8Array ]
    /**
     * Get the body of `msg`. `buffer` remains valid for as long as `msg` is valid and
     * unchanged.
     * 
     * If body data was set from raw memory instead of a #GstBuffer this function
     * will always return %NULL. The caller can check if there is a body buffer by
     * calling gst_rtsp_message_has_body_buffer().
     */
    getBodyBuffer(): [ /* returnType */ RTSPResult, /* buffer */ Gst.Buffer ]
    /**
     * Get the `indx` header value with key `field` from `msg`. The result in `value`
     * stays valid as long as it remains present in `msg`.
     */
    getHeader(field: RTSPHeaderField, indx: number): [ /* returnType */ RTSPResult, /* value */ string ]
    /**
     * Get the `index` header value with key `header` from `msg`. The result in `value`
     * stays valid as long as it remains present in `msg`.
     */
    getHeaderByName(header: string, index: number): [ /* returnType */ RTSPResult, /* value */ string ]
    /**
     * Get the message type of `msg`.
     */
    getType(): RTSPMsgType
    /**
     * Checks if `msg` has a body and the body is stored as #GstBuffer.
     */
    hasBodyBuffer(): boolean
    /**
     * Initialize `msg`. This function is mostly used when `msg` is allocated on the
     * stack. The reverse operation of this is gst_rtsp_message_unset().
     */
    init(): RTSPResult
    /**
     * Initialize a new data #GstRTSPMessage for `channel`.
     */
    initData(channel: number): RTSPResult
    /**
     * Initialize `msg` as a request message with `method` and `uri`. To clear `msg`
     * again, use gst_rtsp_message_unset().
     */
    initRequest(method: RTSPMethod, uri: string): RTSPResult
    /**
     * Initialize `msg` with `code` and `reason`.
     * 
     * When `reason` is %NULL, the default reason for `code` will be used.
     * 
     * When `request` is not %NULL, the relevant headers will be copied to the new
     * response message.
     */
    initResponse(code: RTSPStatusCode, reason?: string | null, request?: RTSPMessage | null): RTSPResult
    /**
     * Parses the credentials given in a WWW-Authenticate or Authorization header.
     */
    parseAuthCredentials(field: RTSPHeaderField): RTSPAuthCredential[]
    /**
     * Parse the data message `msg` and store the channel in `channel`.
     */
    parseData(): [ /* returnType */ RTSPResult, /* channel */ number ]
    /**
     * Parse the request message `msg` and store the values `method,` `uri` and
     * `version`. The result locations can be %NULL if one is not interested in its
     * value.
     * 
     * `uri` remains valid for as long as `msg` is valid and unchanged.
     */
    parseRequest(): [ /* returnType */ RTSPResult, /* method */ RTSPMethod | null, /* uri */ string | null, /* version */ RTSPVersion | null ]
    /**
     * Parse the response message `msg` and store the values `code,` `reason` and
     * `version`. The result locations can be %NULL if one is not interested in its
     * value.
     * 
     * `reason` remains valid for as long as `msg` is valid and unchanged.
     */
    parseResponse(): [ /* returnType */ RTSPResult, /* code */ RTSPStatusCode | null, /* reason */ string | null, /* version */ RTSPVersion | null ]
    /**
     * Remove the `indx` header with key `field` from `msg`. If `indx` equals -1, all
     * headers will be removed.
     */
    removeHeader(field: RTSPHeaderField, indx: number): RTSPResult
    /**
     * Remove the `index` header with key `header` from `msg`. If `index` equals -1,
     * all matching headers will be removed.
     */
    removeHeaderByName(header: string, index: number): RTSPResult
    /**
     * Set the body of `msg` to a copy of `data`. Any existing body or body buffer
     * will be replaced by the new body.
     */
    setBody(data: Uint8Array): RTSPResult
    /**
     * Set the body of `msg` to `buffer`. Any existing body or body buffer
     * will be replaced by the new body.
     */
    setBodyBuffer(buffer: Gst.Buffer): RTSPResult
    /**
     * Take the body of `msg` and store it in `data` and `size`. After this method,
     * the body and size of `msg` will be set to %NULL and 0 respectively.
     */
    stealBody(): [ /* returnType */ RTSPResult, /* data */ Uint8Array ]
    /**
     * Take the body of `msg` and store it in `buffer`. After this method,
     * the body and size of `msg` will be set to %NULL and 0 respectively.
     * 
     * If body data was set from raw memory instead of a #GstBuffer this function
     * will always return %NULL. The caller can check if there is a body buffer by
     * calling gst_rtsp_message_has_body_buffer().
     */
    stealBodyBuffer(): [ /* returnType */ RTSPResult, /* buffer */ Gst.Buffer ]
    /**
     * Set the body of `msg` to `data` and `size`. This method takes ownership of
     * `data`. Any existing body or body buffer will be replaced by the new body.
     */
    takeBody(data: Uint8Array): RTSPResult
    /**
     * Set the body of `msg` to `buffer`. This method takes ownership of `buffer`.
     * Any existing body or body buffer will be replaced by the new body.
     */
    takeBodyBuffer(buffer: Gst.Buffer): RTSPResult
    /**
     * Add a header with key `field` and `value` to `msg`. This function takes
     * ownership of `value`.
     */
    takeHeader(field: RTSPHeaderField, value: string): RTSPResult
    /**
     * Add a header with key `header` and `value` to `msg`. This function takes
     * ownership of `value,` but not of `header`.
     */
    takeHeaderByName(header: string, value: string): RTSPResult
    /**
     * Unset the contents of `msg` so that it becomes an uninitialized
     * #GstRTSPMessage again. This function is mostly used in combination with
     * gst_rtsp_message_init_request(), gst_rtsp_message_init_response() and
     * gst_rtsp_message_init_data() on stack allocated #GstRTSPMessage structures.
     */
    unset(): RTSPResult
    static name: string
}
class RTSPRange {
    /* Fields of GstRtsp-1.0.GstRtsp.RTSPRange */
    /**
     * minimum value of the range
     */
    readonly min: number
    /**
     * maximum value of the range
     */
    readonly max: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Converts the range in-place between different types of units.
     * Ranges containing the special value #GST_RTSP_TIME_NOW can not be
     * converted as these are only valid for #GST_RTSP_RANGE_NPT.
     */
    static convertUnits(range: RTSPTimeRange, unit: RTSPRangeUnit): boolean
    /**
     * Free the memory allocated by `range`.
     */
    static free(range: RTSPTimeRange): void
    /**
     * Retrieve the minimum and maximum values from `range` converted to
     * #GstClockTime in `min` and `max`.
     * 
     * A value of %GST_CLOCK_TIME_NONE will be used to signal #GST_RTSP_TIME_NOW
     * and #GST_RTSP_TIME_END for `min` and `max` respectively.
     * 
     * UTC times will be converted to nanoseconds since 1900.
     */
    static getTimes(range: RTSPTimeRange): [ /* returnType */ boolean, /* min */ Gst.ClockTime, /* max */ Gst.ClockTime ]
    /**
     * Parse `rangestr` to a #GstRTSPTimeRange.
     */
    static parse(rangestr: string): [ /* returnType */ RTSPResult, /* range */ RTSPTimeRange ]
    /**
     * Convert `range` into a string representation.
     */
    static toString(range: RTSPTimeRange): string
}
class RTSPTime {
    /* Fields of GstRtsp-1.0.GstRtsp.RTSPTime */
    /**
     * the time of the time
     */
    readonly type: RTSPTimeType
    /**
     * seconds when `type` is GST_RTSP_TIME_SECONDS,
     *           GST_RTSP_TIME_UTC and GST_RTSP_TIME_FRAMES
     */
    readonly seconds: number
    static name: string
}
class RTSPTime2 {
    /* Fields of GstRtsp-1.0.GstRtsp.RTSPTime2 */
    /**
     * frames and subframes when type in GstRTSPTime is
     *          GST_RTSP_TIME_FRAMES
     */
    readonly frames: number
    /**
     * year when type is GST_RTSP_TIME_UTC
     */
    readonly year: number
    /**
     * month when type is GST_RTSP_TIME_UTC
     */
    readonly month: number
    /**
     * day when type is GST_RTSP_TIME_UTC
     */
    readonly day: number
    static name: string
}
class RTSPTimeRange {
    /* Fields of GstRtsp-1.0.GstRtsp.RTSPTimeRange */
    /**
     * the time units used
     */
    readonly unit: RTSPRangeUnit
    /**
     * the minimum interval
     */
    readonly min: RTSPTime
    /**
     * the maximum interval
     */
    readonly max: RTSPTime
    /**
     * extra fields in the minimum interval (Since: 1.2)
     */
    readonly min2: RTSPTime2
    /**
     * extra fields in the maximum interval (Since: 1.2)
     */
    readonly max2: RTSPTime2
    static name: string
}
class RTSPTransport {
    /* Fields of GstRtsp-1.0.GstRtsp.RTSPTransport */
    /**
     * the transport mode
     */
    readonly trans: RTSPTransMode
    /**
     * the tansport profile
     */
    readonly profile: RTSPProfile
    /**
     * the lower transport
     */
    readonly lowerTransport: RTSPLowerTrans
    /**
     * the destination ip/hostname
     */
    readonly destination: string
    /**
     * the source ip/hostname
     */
    readonly source: string
    /**
     * the number of layers
     */
    readonly layers: number
    /**
     * if play mode was selected
     */
    readonly modePlay: boolean
    /**
     * if record mode was selected
     */
    readonly modeRecord: boolean
    /**
     * is append mode was selected
     */
    readonly append: boolean
    /**
     * the interleave range
     */
    readonly interleaved: RTSPRange
    /**
     * the time to live for multicast UDP
     */
    readonly ttl: number
    /**
     * the port pair for multicast sessions
     */
    readonly port: RTSPRange
    /**
     * the client port pair for receiving data. For TCP
     *   based transports, applications can use this field to store the
     *   sender and receiver ports of the client.
     */
    readonly clientPort: RTSPRange
    /**
     * the server port pair for receiving data. For TCP
     *   based transports, applications can use this field to store the
     *   sender and receiver ports of the server.
     */
    readonly serverPort: RTSPRange
    /**
     * the ssrc that the sender/receiver will use
     */
    readonly ssrc: number
    /* Methods of GstRtsp-1.0.GstRtsp.RTSPTransport */
    /**
     * Convert `transport` into a string that can be used to signal the transport in
     * an RTSP SETUP response.
     */
    asText(): string
    /**
     * Free the memory used by `transport`.
     */
    free(): RTSPResult
    /**
     * Get the media type of `transport`. This media type is typically
     * used to generate #GstCaps events.
     */
    getMediaType(): [ /* returnType */ RTSPResult, /* mediaType */ string ]
    /**
     * Initialize `transport` so that it can be used.
     */
    init(): RTSPResult
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Get the #GstElement that can handle the buffers transported over `trans`.
     * 
     * It is possible that there are several managers available, use `option` to
     * selected one.
     * 
     * `manager` will contain an element name or %NULL when no manager is
     * needed/available for `trans`.
     */
    static getManager(trans: RTSPTransMode, option: number): [ /* returnType */ RTSPResult, /* manager */ string | null ]
    /**
     * Get the mime type of the transport mode `trans`. This mime type is typically
     * used to generate #GstCaps events.
     */
    static getMime(trans: RTSPTransMode, mime: string): RTSPResult
    /**
     * Parse the RTSP transport string `str` into `transport`.
     */
    static parse(str: string, transport: RTSPTransport): RTSPResult
}
class RTSPUrl {
    /* Fields of GstRtsp-1.0.GstRtsp.RTSPUrl */
    /**
     * the transports allowed
     */
    readonly transports: RTSPLowerTrans
    /**
     * the family
     */
    readonly family: RTSPFamily
    /**
     * the user
     */
    readonly user: string
    /**
     * the password
     */
    readonly passwd: string
    /**
     * the host
     */
    readonly host: string
    /**
     * the port
     */
    readonly port: number
    /**
     * the absolute path
     */
    readonly abspath: string
    /**
     * additional query parameters
     */
    readonly query: string
    /* Methods of GstRtsp-1.0.GstRtsp.RTSPUrl */
    /**
     * Make a copy of `url`.
     */
    copy(): RTSPUrl
    /**
     * Splits the path of `url` on '/' boundaries, decoding the resulting components,
     * 
     * The decoding performed by this routine is "URI decoding", as defined in RFC
     * 3986, commonly known as percent-decoding. For example, a string "foo\%2fbar"
     * will decode to "foo/bar" -- the \%2f being replaced by the corresponding byte
     * with hex value 0x2f. Note that there is no guarantee that the resulting byte
     * sequence is valid in any given encoding. As a special case, \%00 is not
     * unescaped to NUL, as that would prematurely terminate the string.
     * 
     * Also note that since paths usually start with a slash, the first component
     * will usually be the empty string.
     */
    decodePathComponents(): string[]
    /**
     * Free the memory used by `url`.
     */
    free(): void
    /**
     * Get the port number of `url`.
     */
    getPort(): [ /* returnType */ RTSPResult, /* port */ number ]
    /**
     * Get a newly allocated string describing the request URI for `url`.
     */
    getRequestUri(): string
    /**
     * Get a newly allocated string describing the request URI for `url`
     * combined with the control path for `control_path`
     */
    getRequestUriWithControl(controlPath: string): string
    /**
     * Set the port number in `url` to `port`.
     */
    setPort(port: number): RTSPResult
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Parse the RTSP `urlstr` into a newly allocated #GstRTSPUrl. Free after usage
     * with gst_rtsp_url_free().
     */
    static parse(urlstr: string): [ /* returnType */ RTSPResult, /* url */ RTSPUrl ]
}
class RTSPWatch {
    /* Methods of GstRtsp-1.0.GstRtsp.RTSPWatch */
    /**
     * Adds a #GstRTSPWatch to a context so that it will be executed within that context.
     */
    attach(context: GLib.MainContext): number
    /**
     * Get the maximum amount of bytes and messages that will be queued in `watch`.
     * See gst_rtsp_watch_set_send_backlog().
     */
    getSendBacklog(): [ /* bytes */ number | null, /* messages */ number | null ]
    /**
     * Reset `watch,` this is usually called after gst_rtsp_connection_do_tunnel()
     * when the file descriptors of the connection might have changed.
     */
    reset(): void
    /**
     * Send a `message` using the connection of the `watch`. If it cannot be sent
     * immediately, it will be queued for transmission in `watch`. The contents of
     * `message` will then be serialized and transmitted when the connection of the
     * `watch` becomes writable. In case the `message` is queued, the ID returned in
     * `id` will be non-zero and used as the ID argument in the message_sent
     * callback.
     */
    sendMessage(message: RTSPMessage): [ /* returnType */ RTSPResult, /* id */ number | null ]
    /**
     * Sends `messages` using the connection of the `watch`. If they cannot be sent
     * immediately, they will be queued for transmission in `watch`. The contents of
     * `messages` will then be serialized and transmitted when the connection of the
     * `watch` becomes writable. In case the `messages` are queued, the ID returned in
     * `id` will be non-zero and used as the ID argument in the message_sent
     * callback once the last message is sent. The callback will only be called
     * once for the last message.
     */
    sendMessages(messages: RTSPMessage[]): [ /* returnType */ RTSPResult, /* id */ number | null ]
    /**
     * When `flushing` is %TRUE, abort a call to gst_rtsp_watch_wait_backlog()
     * and make sure gst_rtsp_watch_write_data() returns immediately with
     * #GST_RTSP_EINTR. And empty the queue.
     */
    setFlushing(flushing: boolean): void
    /**
     * Set the maximum amount of bytes and messages that will be queued in `watch`.
     * When the maximum amounts are exceeded, gst_rtsp_watch_write_data() and
     * gst_rtsp_watch_send_message() will return #GST_RTSP_ENOMEM.
     * 
     * A value of 0 for `bytes` or `messages` means no limits.
     */
    setSendBacklog(bytes: number, messages: number): void
    /**
     * Decreases the reference count of `watch` by one. If the resulting reference
     * count is zero the watch and associated memory will be destroyed.
     */
    unref(): void
    /**
     * Wait until there is place in the backlog queue, `timeout` is reached
     * or `watch` is set to flushing.
     * 
     * If `timeout` is %NULL this function can block forever. If `timeout`
     * contains a valid timeout, this function will return %GST_RTSP_ETIMEOUT
     * after the timeout expired.
     * 
     * The typically use of this function is when gst_rtsp_watch_write_data
     * returns %GST_RTSP_ENOMEM. The caller then calls this function to wait for
     * free space in the backlog queue and try again.
     */
    waitBacklog(timeout: GLib.TimeVal): RTSPResult
    /**
     * Wait until there is place in the backlog queue, `timeout` is reached
     * or `watch` is set to flushing.
     * 
     * If `timeout` is 0 this function can block forever. If `timeout`
     * contains a valid timeout, this function will return %GST_RTSP_ETIMEOUT
     * after the timeout expired.
     * 
     * The typically use of this function is when gst_rtsp_watch_write_data
     * returns %GST_RTSP_ENOMEM. The caller then calls this function to wait for
     * free space in the backlog queue and try again.
     */
    waitBacklogUsec(timeout: number): RTSPResult
    /**
     * Write `data` using the connection of the `watch`. If it cannot be sent
     * immediately, it will be queued for transmission in `watch`. The contents of
     * `message` will then be serialized and transmitted when the connection of the
     * `watch` becomes writable. In case the `message` is queued, the ID returned in
     * `id` will be non-zero and used as the ID argument in the message_sent
     * callback.
     * 
     * This function will take ownership of `data` and g_free() it after use.
     * 
     * If the amount of queued data exceeds the limits set with
     * gst_rtsp_watch_set_send_backlog(), this function will return
     * #GST_RTSP_ENOMEM.
     */
    writeData(data: Uint8Array): [ /* returnType */ RTSPResult, /* id */ number | null ]
    static name: string
}
class RTSPWatchFuncs {
    /* Fields of GstRtsp-1.0.GstRtsp.RTSPWatchFuncs */
    readonly messageReceived: (watch: RTSPWatch, message: RTSPMessage) => RTSPResult
    readonly messageSent: (watch: RTSPWatch, id: number) => RTSPResult
    readonly closed: (watch: RTSPWatch) => RTSPResult
    readonly error: (watch: RTSPWatch, result: RTSPResult) => RTSPResult
    readonly tunnelStart: (watch: RTSPWatch) => RTSPStatusCode
    readonly tunnelComplete: (watch: RTSPWatch) => RTSPResult
    readonly errorFull: (watch: RTSPWatch, result: RTSPResult, message: RTSPMessage, id: number) => RTSPResult
    readonly tunnelLost: (watch: RTSPWatch) => RTSPResult
    readonly tunnelHttpResponse: (watch: RTSPWatch, request: RTSPMessage, response: RTSPMessage) => RTSPResult
    static name: string
}
}
export default GstRtsp;