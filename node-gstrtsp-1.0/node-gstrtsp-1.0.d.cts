
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * GstRtsp-1.0
 */

import type GstSdp from '@girs/gstsdp-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GstBase from '@girs/gstbase-1.0';
import type Gio from '@girs/gio-2.0';

/**
 * Authentication methods, ordered by strength
 */
export enum RTSPAuthMethod {
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
export enum RTSPFamily {
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
export enum RTSPHeaderField {
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
export enum RTSPMsgType {
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
export enum RTSPRangeUnit {
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
export enum RTSPResult {
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
export enum RTSPState {
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
export enum RTSPStatusCode {
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
export enum RTSPTimeType {
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
export enum RTSPVersion {
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
 * @bitfield 
 */
export enum RTSPEvent {
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
 * @bitfield 
 */
export enum RTSPLowerTrans {
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
 * @bitfield 
 */
export enum RTSPMethod {
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
 * @bitfield 
 */
export enum RTSPProfile {
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
 * @bitfield 
 */
export enum RTSPTransMode {
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
export const RTSP_DEFAULT_PORT: number
/**
 * Free a %NULL-terminated array of credentials returned from
 * gst_rtsp_message_parse_auth_credentials().
 * @param credentials a %NULL-terminated array of #GstRTSPAuthCredential
 */
export function rtspAuthCredentialsFree(credentials: RTSPAuthCredential): void
/**
 * Accept a new connection on `socket` and create a new #GstRTSPConnection for
 * handling communication on new socket.
 * @param socket a socket
 * @param cancellable a #GCancellable to cancel the operation
 * @returns #GST_RTSP_OK when @conn contains a valid connection.
 */
export function rtspConnectionAccept(socket: Gio.Socket, cancellable: Gio.Cancellable | null): [ /* returnType */ RTSPResult, /* conn */ RTSPConnection | null ]
/**
 * Create a newly allocated #GstRTSPConnection from `url` and store it in `conn`.
 * The connection will not yet attempt to connect to `url,` use
 * gst_rtsp_connection_connect().
 * 
 * A copy of `url` will be made.
 * @param url a #GstRTSPUrl
 * @returns #GST_RTSP_OK when @conn contains a valid connection.
 */
export function rtspConnectionCreate(url: RTSPUrl): [ /* returnType */ RTSPResult, /* conn */ RTSPConnection ]
/**
 * Create a new #GstRTSPConnection for handling communication on the existing
 * socket `socket`. The `initial_buffer` contains zero terminated data already
 * read from `socket` which should be used before starting to read new data.
 * @param socket a #GSocket
 * @param ip the IP address of the other end
 * @param port the port used by the other end
 * @param initialBuffer data already read from `fd`
 * @returns #GST_RTSP_OK when @conn contains a valid connection.
 */
export function rtspConnectionCreateFromSocket(socket: Gio.Socket, ip: string | null, port: number, initialBuffer: string | null): [ /* returnType */ RTSPResult, /* conn */ RTSPConnection | null ]
/**
 * Convert `header` to a #GstRTSPHeaderField.
 * @param header a header string
 * @returns a #GstRTSPHeaderField for @header or #GST_RTSP_HDR_INVALID if the header field is unknown.
 */
export function rtspFindHeaderField(header: string | null): RTSPHeaderField
/**
 * Convert `method` to a #GstRTSPMethod.
 * @param method a method
 * @returns a #GstRTSPMethod for @method or #GST_RTSP_INVALID if the method is unknown.
 */
export function rtspFindMethod(method: string | null): RTSPMethod
/**
 * Calculates the digest auth response from the values given by the server and
 * the username and password. See RFC2069 for details.
 * 
 * Currently only supported algorithm "md5".
 * @param algorithm Hash algorithm to use, or %NULL for MD5
 * @param method Request method, e.g. PLAY
 * @param realm Realm
 * @param username Username
 * @param password Password
 * @param uri Original request URI
 * @param nonce Nonce
 * @returns Authentication response or %NULL if unsupported
 */
export function rtspGenerateDigestAuthResponse(algorithm: string | null, method: string | null, realm: string | null, username: string | null, password: string | null, uri: string | null, nonce: string | null): string | null
/**
 * Calculates the digest auth response from the values given by the server and
 * the md5sum. See RFC2069 for details.
 * 
 * This function is useful when the passwords are not stored in clear text,
 * but instead in the same format as the .htdigest file.
 * 
 * Currently only supported algorithm "md5".
 * @param algorithm Hash algorithm to use, or %NULL for MD5
 * @param method Request method, e.g. PLAY
 * @param md5 The md5 sum of username:realm:password
 * @param uri Original request URI
 * @param nonce Nonce
 * @returns Authentication response or %NULL if unsupported
 */
export function rtspGenerateDigestAuthResponseFromMd5(algorithm: string | null, method: string | null, md5: string | null, uri: string | null, nonce: string | null): string | null
/**
 * Check whether `field` may appear multiple times in a message.
 * @param field a #GstRTSPHeaderField
 * @returns %TRUE if multiple headers are allowed.
 */
export function rtspHeaderAllowMultiple(field: RTSPHeaderField): boolean
/**
 * Convert `field` to a string.
 * @param field a #GstRTSPHeaderField
 * @returns a string representation of @field.
 */
export function rtspHeaderAsText(field: RTSPHeaderField): string | null
/**
 * Initialize `msg`. This function is mostly used when `msg` is allocated on the
 * stack. The reverse operation of this is gst_rtsp_message_unset().
 * @returns a #GstRTSPResult.
 */
export function rtspMessageInit(): [ /* returnType */ RTSPResult, /* msg */ RTSPMessage ]
/**
 * Initialize a new data #GstRTSPMessage for `channel`.
 * @param channel a channel
 * @returns a #GstRTSPResult.
 */
export function rtspMessageInitData(channel: number): [ /* returnType */ RTSPResult, /* msg */ RTSPMessage ]
/**
 * Initialize `msg` as a request message with `method` and `uri`. To clear `msg`
 * again, use gst_rtsp_message_unset().
 * @param method the request method to use
 * @param uri the uri of the request
 * @returns a #GstRTSPResult.
 */
export function rtspMessageInitRequest(method: RTSPMethod, uri: string | null): [ /* returnType */ RTSPResult, /* msg */ RTSPMessage ]
/**
 * Initialize `msg` with `code` and `reason`.
 * 
 * When `reason` is %NULL, the default reason for `code` will be used.
 * 
 * When `request` is not %NULL, the relevant headers will be copied to the new
 * response message.
 * @param code the status code
 * @param reason the status reason or %NULL
 * @param request the request that triggered the response or %NULL
 * @returns a #GstRTSPResult.
 */
export function rtspMessageInitResponse(code: RTSPStatusCode, reason: string | null, request: RTSPMessage | null): [ /* returnType */ RTSPResult, /* msg */ RTSPMessage ]
/**
 * Create a new initialized #GstRTSPMessage. Free with gst_rtsp_message_free().
 * @returns a #GstRTSPResult.
 */
export function rtspMessageNew(): [ /* returnType */ RTSPResult, /* msg */ RTSPMessage ]
/**
 * Create a new data #GstRTSPMessage with `channel` and store the
 * result message in `msg`. Free with gst_rtsp_message_free().
 * @param channel the channel
 * @returns a #GstRTSPResult.
 */
export function rtspMessageNewData(channel: number): [ /* returnType */ RTSPResult, /* msg */ RTSPMessage ]
/**
 * Create a new #GstRTSPMessage with `method` and `uri` and store the result
 * request message in `msg`. Free with gst_rtsp_message_free().
 * @param method the request method to use
 * @param uri the uri of the request
 * @returns a #GstRTSPResult.
 */
export function rtspMessageNewRequest(method: RTSPMethod, uri: string | null): [ /* returnType */ RTSPResult, /* msg */ RTSPMessage ]
/**
 * Create a new response #GstRTSPMessage with `code` and `reason` and store the
 * result message in `msg`. Free with gst_rtsp_message_free().
 * 
 * When `reason` is %NULL, the default reason for `code` will be used.
 * 
 * When `request` is not %NULL, the relevant headers will be copied to the new
 * response message.
 * @param code the status code
 * @param reason the status reason or %NULL
 * @param request the request that triggered the response or %NULL
 * @returns a #GstRTSPResult.
 */
export function rtspMessageNewResponse(code: RTSPStatusCode, reason: string | null, request: RTSPMessage | null): [ /* returnType */ RTSPResult, /* msg */ RTSPMessage ]
/**
 * Convert `method` to a string.
 * @param method a #GstRTSPMethod
 * @returns a string representation of @method.
 */
export function rtspMethodAsText(method: RTSPMethod): string | null
/**
 * Convert `options` to a string.
 * @param options one or more #GstRTSPMethod
 * @returns a new string of @options. g_free() after usage.
 */
export function rtspOptionsAsText(options: RTSPMethod): string | null
/**
 * Convert the comma separated list `options` to a #GstRTSPMethod bitwise or
 * of methods. This functions is the reverse of gst_rtsp_options_as_text().
 * @param options a comma separated list of options
 * @returns a #GstRTSPMethod
 */
export function rtspOptionsFromText(options: string | null): RTSPMethod
/**
 * Converts the range in-place between different types of units.
 * Ranges containing the special value #GST_RTSP_TIME_NOW can not be
 * converted as these are only valid for #GST_RTSP_RANGE_NPT.
 * @param range a #GstRTSPTimeRange
 * @param unit the unit to convert the range into
 * @returns %TRUE if the range could be converted
 */
export function rtspRangeConvertUnits(range: RTSPTimeRange, unit: RTSPRangeUnit): boolean
/**
 * Free the memory allocated by `range`.
 * @param range a #GstRTSPTimeRange
 */
export function rtspRangeFree(range: RTSPTimeRange): void
/**
 * Retrieve the minimum and maximum values from `range` converted to
 * #GstClockTime in `min` and `max`.
 * 
 * A value of %GST_CLOCK_TIME_NONE will be used to signal #GST_RTSP_TIME_NOW
 * and #GST_RTSP_TIME_END for `min` and `max` respectively.
 * 
 * UTC times will be converted to nanoseconds since 1900.
 * @param range a #GstRTSPTimeRange
 * @returns %TRUE on success.
 */
export function rtspRangeGetTimes(range: RTSPTimeRange): [ /* returnType */ boolean, /* min */ Gst.ClockTime, /* max */ Gst.ClockTime ]
/**
 * Parse `rangestr` to a #GstRTSPTimeRange.
 * @param rangestr a range string to parse
 * @returns #GST_RTSP_OK on success.
 */
export function rtspRangeParse(rangestr: string | null): [ /* returnType */ RTSPResult, /* range */ RTSPTimeRange ]
/**
 * Convert `range` into a string representation.
 * @param range a #GstRTSPTimeRange
 * @returns The string representation of @range. g_free() after usage.
 */
export function rtspRangeToString(range: RTSPTimeRange): string | null
/**
 * Convert `code` to a string.
 * @param code a #GstRTSPStatusCode
 * @returns a string representation of @code.
 */
export function rtspStatusAsText(code: RTSPStatusCode): string | null
/**
 * Convert `result` in a human readable string.
 * @param result a #GstRTSPResult
 * @returns a newly allocated string. g_free() after usage.
 */
export function rtspStrresult(result: RTSPResult): string | null
/**
 * Get the #GstElement that can handle the buffers transported over `trans`.
 * 
 * It is possible that there are several managers available, use `option` to
 * selected one.
 * 
 * `manager` will contain an element name or %NULL when no manager is
 * needed/available for `trans`.
 * @param trans a #GstRTSPTransMode
 * @param option option index.
 * @returns #GST_RTSP_OK.
 */
export function rtspTransportGetManager(trans: RTSPTransMode, option: number): [ /* returnType */ RTSPResult, /* manager */ string | null ]
/**
 * Get the mime type of the transport mode `trans`. This mime type is typically
 * used to generate #GstCaps events.
 * @param trans a #GstRTSPTransMode
 * @returns #GST_RTSP_OK.
 */
export function rtspTransportGetMime(trans: RTSPTransMode): [ /* returnType */ RTSPResult, /* mime */ string | null ]
/**
 * Initialize `transport` so that it can be used.
 * @returns #GST_RTSP_OK.
 */
export function rtspTransportInit(): [ /* returnType */ RTSPResult, /* transport */ RTSPTransport ]
/**
 * Allocate a new initialized #GstRTSPTransport. Use gst_rtsp_transport_free()
 * after usage.
 * @returns a #GstRTSPResult.
 */
export function rtspTransportNew(): [ /* returnType */ RTSPResult, /* transport */ RTSPTransport ]
/**
 * Parse the RTSP transport string `str` into `transport`.
 * @param str a transport string
 * @returns a #GstRTSPResult.
 */
export function rtspTransportParse(str: string | null): [ /* returnType */ RTSPResult, /* transport */ RTSPTransport ]
/**
 * Parse the RTSP `urlstr` into a newly allocated #GstRTSPUrl. Free after usage
 * with gst_rtsp_url_free().
 * @param urlstr the url string to parse
 * @returns a #GstRTSPResult.
 */
export function rtspUrlParse(urlstr: string | null): [ /* returnType */ RTSPResult, /* url */ RTSPUrl | null ]
/**
 * Convert `version` to a string.
 * @param version a #GstRTSPVersion
 * @returns a string representation of @version.
 */
export function rtspVersionAsText(version: RTSPVersion): string | null
export interface RTSPConnectionAcceptCertificateFunc {
    (conn: Gio.TlsConnection, peerCert: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): boolean
}
export module RTSPExtension {

    // Signal callback interfaces

    /**
     * Signal callback interface for `send`
     */
    export interface SendSignalCallback {
        (object: any | null, p0: any | null): RTSPResult
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface RTSPExtension {

    // Own properties of GstRtsp-1.0.GstRtsp.RTSPExtension

    __gtype__: number

    // Owm methods of GstRtsp-1.0.GstRtsp.RTSPExtension

    // Has conflict: afterSend(req: RTSPMessage, resp: RTSPMessage): RTSPResult
    // Has conflict: beforeSend(req: RTSPMessage): RTSPResult
    // Has conflict: configureStream(caps: Gst.Caps): boolean
    // Has conflict: detectServer(resp: RTSPMessage): boolean
    // Has conflict: getTransports(protocols: RTSPLowerTrans, transport: string | null): RTSPResult
    // Has conflict: parseSdp(sdp: GstSdp.SDPMessage, s: Gst.Structure): RTSPResult
    // Has conflict: receiveRequest(req: RTSPMessage): RTSPResult
    // Has conflict: send(req: RTSPMessage, resp: RTSPMessage): RTSPResult
    // Has conflict: setupMedia(media: GstSdp.SDPMedia): RTSPResult
    // Has conflict: streamSelect(url: RTSPUrl): RTSPResult

    // Own virtual methods of GstRtsp-1.0.GstRtsp.RTSPExtension

    afterSend(req: RTSPMessage, resp: RTSPMessage): RTSPResult
    beforeSend(req: RTSPMessage): RTSPResult
    configureStream(caps: Gst.Caps): boolean
    detectServer(resp: RTSPMessage): boolean
    getTransports(protocols: RTSPLowerTrans, transport: string | null): RTSPResult
    parseSdp(sdp: GstSdp.SDPMessage, s: Gst.Structure): RTSPResult
    receiveRequest(req: RTSPMessage): RTSPResult
    send(req: RTSPMessage, resp: RTSPMessage): RTSPResult
    setupMedia(media: GstSdp.SDPMedia): RTSPResult
    streamSelect(url: RTSPUrl): RTSPResult

    // Own signals of GstRtsp-1.0.GstRtsp.RTSPExtension

    connect(sigName: "send", callback: RTSPExtension.SendSignalCallback): number
    on(sigName: "send", callback: RTSPExtension.SendSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "send", callback: RTSPExtension.SendSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "send", callback: RTSPExtension.SendSignalCallback): NodeJS.EventEmitter
    emit(sigName: "send", p0: any | null, ...args: any[]): void

    // Class property signals of GstRtsp-1.0.GstRtsp.RTSPExtension

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
 * This interface is implemented e.g. by the Windows Media Streaming RTSP
 *  exentension (rtspwms) and the RealMedia RTSP extension (rtspreal).
 * @interface 
 */
export class RTSPExtension extends GObject.Object {

    // Own properties of GstRtsp-1.0.GstRtsp.RTSPExtension

    static name: string

    // Constructors of GstRtsp-1.0.GstRtsp.RTSPExtension

    constructor(config?: RTSPExtension.ConstructorProperties) 
    _init(config?: RTSPExtension.ConstructorProperties): void
}

export interface RTSPAuthCredential {

    // Own fields of GstRtsp-1.0.GstRtsp.RTSPAuthCredential

    /**
     * a #GstRTSPAuthMethod
     * @field 
     */
    scheme: RTSPAuthMethod
    /**
     * A NULL-terminated array of #GstRTSPAuthParam
     * @field 
     */
    params: RTSPAuthParam
    /**
     * The authorization for the basic schem
     * @field 
     */
    authorization: string | null
}

/**
 * RTSP Authentication credentials
 * @record 
 */
export class RTSPAuthCredential {

    // Own properties of GstRtsp-1.0.GstRtsp.RTSPAuthCredential

    static name: string
}

export interface RTSPAuthParam {

    // Own fields of GstRtsp-1.0.GstRtsp.RTSPAuthParam

    /**
     * The name of the parameter
     * @field 
     */
    name: string | null
    /**
     * The value of the parameter
     * @field 
     */
    value: string | null

    // Owm methods of GstRtsp-1.0.GstRtsp.RTSPAuthParam

    copy(): RTSPAuthParam
    free(): void
}

/**
 * RTSP Authentication parameter
 * @record 
 */
export class RTSPAuthParam {

    // Own properties of GstRtsp-1.0.GstRtsp.RTSPAuthParam

    static name: string
}

export interface RTSPConnection {

    // Owm methods of GstRtsp-1.0.GstRtsp.RTSPConnection

    /**
     * Clear the list of authentication directives stored in `conn`.
     */
    clearAuthParams(): void
    /**
     * Close the connected `conn`. After this call, the connection is in the same
     * state as when it was first created.
     * @returns #GST_RTSP_OK on success.
     */
    close(): RTSPResult
    /**
     * Attempt to connect to the url of `conn` made with
     * gst_rtsp_connection_create(). If `timeout` is %NULL this function can block
     * forever. If `timeout` contains a valid timeout, this function will return
     * #GST_RTSP_ETIMEOUT after the timeout expired.
     * 
     * This function can be cancelled with gst_rtsp_connection_flush().
     * @param timeout a GTimeVal timeout
     * @returns #GST_RTSP_OK when a connection could be made.
     */
    connect(timeout: GLib.TimeVal): RTSPResult
    /**
     * Attempt to connect to the url of `conn` made with
     * gst_rtsp_connection_create(). If `timeout` is 0 this function can block
     * forever. If `timeout` contains a valid timeout, this function will return
     * #GST_RTSP_ETIMEOUT after the timeout expired.
     * 
     * This function can be cancelled with gst_rtsp_connection_flush().
     * @param timeout a timeout in microseconds
     * @returns #GST_RTSP_OK when a connection could be made.
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
     * @param timeout a GTimeVal timeout
     * @param response a #GstRTSPMessage
     * @returns #GST_RTSP_OK when a connection could be made.
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
     * @param timeout a timeout in microseconds
     * @param response a #GstRTSPMessage
     * @returns #GST_RTSP_OK when a connection could be made.
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
     * @param conn2 a #GstRTSPConnection or %NULL
     * @returns return GST_RTSP_OK on success.
     */
    doTunnel(conn2: RTSPConnection | null): RTSPResult
    /**
     * Start or stop the flushing action on `conn`. When flushing, all current
     * and future actions on `conn` will return #GST_RTSP_EINTR until the connection
     * is set to non-flushing mode again.
     * @param flush start or stop the flush
     * @returns #GST_RTSP_OK.
     */
    flush(flush: boolean): RTSPResult
    /**
     * Close and free `conn`.
     * @returns #GST_RTSP_OK on success.
     */
    free(): RTSPResult
    /**
     * Get the ignore_x_server_reply value.
     * @returns returns %TRUE if the x-server-ip-address header reply will be          ignored, else returns %FALSE
     */
    getIgnoreXServerReply(): boolean
    /**
     * Retrieve the IP address of the other end of `conn`.
     * @returns The IP address as a string. this value remains valid until the connection is closed.
     */
    getIp(): string | null
    /**
     * Get the file descriptor for reading.
     * @returns the file descriptor used for reading or %NULL on error. The file descriptor remains valid until the connection is closed.
     */
    getReadSocket(): Gio.Socket | null
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
     * @returns the TLS connection for @conn.
     */
    getTls(): Gio.TlsConnection
    /**
     * Gets the anchor certificate authorities database that will be used
     * after a server certificate can't be verified with the default
     * certificate database.
     * @returns the anchor certificate authorities database, or NULL if no database has been previously set. Use g_object_unref() to release the certificate database.
     */
    getTlsDatabase(): Gio.TlsDatabase | null
    /**
     * Gets a #GTlsInteraction object to be used when the connection or certificate
     * database need to interact with the user. This will be used to prompt the
     * user for passwords where necessary.
     * @returns a reference on the #GTlsInteraction. Use g_object_unref() to release.
     */
    getTlsInteraction(): Gio.TlsInteraction | null
    /**
     * Gets the TLS validation flags used to verify the peer certificate
     * when a TLS connection is established.
     * 
     * GLib guarantees that if certificate verification fails, at least one error
     * will be set, but it does not guarantee that all possible errors will be
     * set. Accordingly, you may not safely decide to ignore any particular type
     * of error.
     * 
     * For example, it would be incorrect to ignore %G_TLS_CERTIFICATE_EXPIRED if
     * you want to allow expired certificates, because this could potentially be
     * the only error flag set even if other problems exist with the certificate.
     * @returns the validation flags.
     */
    getTlsValidationFlags(): Gio.TlsCertificateFlags
    /**
     * Get the tunnel session id the connection.
     * @returns returns a non-empty string if @conn is being tunneled over HTTP.
     */
    getTunnelid(): string | null
    /**
     * Retrieve the URL of the other end of `conn`.
     * @returns The URL. This value remains valid until the connection is freed.
     */
    getUrl(): RTSPUrl
    /**
     * Get the file descriptor for writing.
     * @returns the file descriptor used for writing or NULL on error. The file descriptor remains valid until the connection is closed.
     */
    getWriteSocket(): Gio.Socket | null
    /**
     * Get the tunneling state of the connection.
     * @returns if @conn is using HTTP tunneling.
     */
    isTunneled(): boolean
    /**
     * Calculate the next timeout for `conn,` storing the result in `timeout`.
     * @param timeout a timeout
     * @returns #GST_RTSP_OK.
     */
    nextTimeout(timeout: GLib.TimeVal): RTSPResult
    /**
     * Calculate the next timeout for `conn`
     * @returns #the next timeout in microseconds
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
     * @param events a bitmask of #GstRTSPEvent flags to check
     * @param timeout a timeout
     * @returns #GST_RTSP_OK on success.
     */
    poll(events: RTSPEvent, timeout: GLib.TimeVal): [ /* returnType */ RTSPResult, /* revents */ RTSPEvent ]
    /**
     * Wait up to the specified `timeout` for the connection to become available for
     * at least one of the operations specified in `events`. When the function returns
     * with #GST_RTSP_OK, `revents` will contain a bitmask of available operations on
     * `conn`.
     * 
     * `timeout` can be 0, in which case this function might block forever.
     * 
     * This function can be cancelled with gst_rtsp_connection_flush().
     * @param events a bitmask of #GstRTSPEvent flags to check
     * @param timeout a timeout in microseconds
     * @returns #GST_RTSP_OK on success.
     */
    pollUsec(events: RTSPEvent, timeout: number): [ /* returnType */ RTSPResult, /* revents */ RTSPEvent ]
    /**
     * Attempt to read `size` bytes into `data` from the connected `conn,` blocking up to
     * the specified `timeout`. `timeout` can be %NULL, in which case this function
     * might block forever.
     * 
     * This function can be cancelled with gst_rtsp_connection_flush().
     * @param data the data to read
     * @param timeout a timeout value or %NULL
     * @returns #GST_RTSP_OK on success.
     */
    read(data: Uint8Array, timeout: GLib.TimeVal): RTSPResult
    /**
     * Attempt to read `size` bytes into `data` from the connected `conn,` blocking up to
     * the specified `timeout`. `timeout` can be 0, in which case this function
     * might block forever.
     * 
     * This function can be cancelled with gst_rtsp_connection_flush().
     * @param data the data to read
     * @param timeout a timeout value in microseconds
     * @returns #GST_RTSP_OK on success.
     */
    readUsec(data: Uint8Array, timeout: number): RTSPResult
    /**
     * Attempt to read into `message` from the connected `conn,` blocking up to
     * the specified `timeout`. `timeout` can be %NULL, in which case this function
     * might block forever.
     * 
     * This function can be cancelled with gst_rtsp_connection_flush().
     * @param timeout a timeout value or %NULL
     * @returns #GST_RTSP_OK on success.
     */
    receive(timeout: GLib.TimeVal): [ /* returnType */ RTSPResult, /* message */ RTSPMessage ]
    /**
     * Attempt to read into `message` from the connected `conn,` blocking up to
     * the specified `timeout`. `timeout` can be 0, in which case this function
     * might block forever.
     * 
     * This function can be cancelled with gst_rtsp_connection_flush().
     * @param timeout a timeout value or 0
     * @returns #GST_RTSP_OK on success.
     */
    receiveUsec(timeout: number): [ /* returnType */ RTSPResult, /* message */ RTSPMessage ]
    /**
     * Reset the timeout of `conn`.
     * @returns #GST_RTSP_OK.
     */
    resetTimeout(): RTSPResult
    /**
     * Attempt to send `message` to the connected `conn,` blocking up to
     * the specified `timeout`. `timeout` can be %NULL, in which case this function
     * might block forever.
     * 
     * This function can be cancelled with gst_rtsp_connection_flush().
     * @param message the message to send
     * @param timeout a timeout value or %NULL
     * @returns #GST_RTSP_OK on success.
     */
    send(message: RTSPMessage, timeout: GLib.TimeVal): RTSPResult
    /**
     * Attempt to send `messages` to the connected `conn,` blocking up to
     * the specified `timeout`. `timeout` can be %NULL, in which case this function
     * might block forever.
     * 
     * This function can be cancelled with gst_rtsp_connection_flush().
     * @param messages the messages to send
     * @param timeout a timeout value or %NULL
     * @returns #GST_RTSP_OK on success.
     */
    sendMessages(messages: RTSPMessage[], timeout: GLib.TimeVal): RTSPResult
    /**
     * Attempt to send `messages` to the connected `conn,` blocking up to
     * the specified `timeout`. `timeout` can be 0, in which case this function
     * might block forever.
     * 
     * This function can be cancelled with gst_rtsp_connection_flush().
     * @param messages the messages to send
     * @param timeout a timeout value in microseconds
     * @returns #GST_RTSP_OK on Since.
     */
    sendMessagesUsec(messages: RTSPMessage[], timeout: number): RTSPResult
    /**
     * Attempt to send `message` to the connected `conn,` blocking up to
     * the specified `timeout`. `timeout` can be 0, in which case this function
     * might block forever.
     * 
     * This function can be cancelled with gst_rtsp_connection_flush().
     * @param message the message to send
     * @param timeout a timeout value in microseconds
     * @returns #GST_RTSP_OK on success.
     */
    sendUsec(message: RTSPMessage, timeout: number): RTSPResult
    /**
     * Sets a custom accept-certificate function for checking certificates for
     * validity. This will directly map to #GTlsConnection 's "accept-certificate"
     * signal and be performed after the default checks of #GstRTSPConnection
     * (checking against the #GTlsDatabase with the given #GTlsCertificateFlags)
     * have failed. If no #GTlsDatabase is set on this connection, only `func` will
     * be called.
     * @param func a #GstRTSPConnectionAcceptCertificateFunc to check certificates
     */
    setAcceptCertificateFunc(func: RTSPConnectionAcceptCertificateFunc): void
    /**
     * Configure `conn` for authentication mode `method` with `user` and `pass` as the
     * user and password respectively.
     * @param method authentication method
     * @param user the user
     * @param pass the password
     * @returns #GST_RTSP_OK.
     */
    setAuth(method: RTSPAuthMethod, user: string | null, pass: string | null): RTSPResult
    /**
     * Setup `conn` with authentication directives. This is not necessary for
     * methods #GST_RTSP_AUTH_NONE and #GST_RTSP_AUTH_BASIC. For
     * #GST_RTSP_AUTH_DIGEST, directives should be taken from the digest challenge
     * in the WWW-Authenticate response header and can include realm, domain,
     * nonce, opaque, stale, algorithm, qop as per RFC2617.
     * @param param authentication directive
     * @param value value
     */
    setAuthParam(param: string | null, value: string | null): void
    /**
     * Configure `conn` to use the specified Content-Length limit.
     * Both requests and responses are validated. If content-length is
     * exceeded, ENOMEM error will be returned.
     * @param limit Content-Length limit
     */
    setContentLengthLimit(limit: number): void
    /**
     * By setting the HTTP mode to %TRUE the message parsing will support HTTP
     * messages in addition to the RTSP messages. It will also disable the
     * automatic handling of setting up an HTTP tunnel.
     * @param enable %TRUE to enable manual HTTP mode
     */
    setHttpMode(enable: boolean): void
    /**
     * Set whether to ignore the x-server-ip-address header reply or not. If the
     * header is ignored, the original address will be used instead.
     * @param ignore %TRUE to ignore the x-server-ip-address header reply or %FALSE to          comply with it (%FALSE is the default).
     */
    setIgnoreXServerReply(ignore: boolean): void
    /**
     * Set the IP address of the server.
     * @param ip an ip address
     */
    setIp(ip: string | null): void
    /**
     * Set the proxy host and port.
     * @param host the proxy host
     * @param port the proxy port
     * @returns #GST_RTSP_OK.
     */
    setProxy(host: string | null, port: number): RTSPResult
    /**
     * Configure `conn` to use the specified DSCP value.
     * @param qosDscp DSCP value
     * @returns #GST_RTSP_OK on success.
     */
    setQosDscp(qosDscp: number): RTSPResult
    /**
     * Sets if the #GstRTSPConnection should remember the session id from the last
     * response received and force it onto any further requests.
     * 
     * The default value is %TRUE
     * @param remember %TRUE if the connection should remember the session id
     */
    setRememberSessionId(remember: boolean): void
    /**
     * Sets the anchor certificate authorities database. This certificate
     * database will be used to verify the server's certificate in case it
     * can't be verified with the default certificate database first.
     * @param database a #GTlsDatabase
     */
    setTlsDatabase(database: Gio.TlsDatabase | null): void
    /**
     * Sets a #GTlsInteraction object to be used when the connection or certificate
     * database need to interact with the user. This will be used to prompt the
     * user for passwords where necessary.
     * @param interaction a #GTlsInteraction
     */
    setTlsInteraction(interaction: Gio.TlsInteraction | null): void
    /**
     * Sets the TLS validation flags to be used to verify the peer
     * certificate when a TLS connection is established.
     * 
     * GLib guarantees that if certificate verification fails, at least one error
     * will be set, but it does not guarantee that all possible errors will be
     * set. Accordingly, you may not safely decide to ignore any particular type
     * of error.
     * 
     * For example, it would be incorrect to mask %G_TLS_CERTIFICATE_EXPIRED if
     * you want to allow expired certificates, because this could potentially be
     * the only error flag set even if other problems exist with the certificate.
     * @param flags the validation flags.
     * @returns TRUE if the validation flags are set correctly, or FALSE if @conn is NULL or is not a TLS connection.
     */
    setTlsValidationFlags(flags: Gio.TlsCertificateFlags): boolean
    /**
     * Set the HTTP tunneling state of the connection. This must be configured before
     * the `conn` is connected.
     * @param tunneled the new state
     */
    setTunneled(tunneled: boolean): void
    /**
     * Attempt to write `size` bytes of `data` to the connected `conn,` blocking up to
     * the specified `timeout`. `timeout` can be %NULL, in which case this function
     * might block forever.
     * 
     * This function can be cancelled with gst_rtsp_connection_flush().
     * @param data the data to write
     * @param timeout a timeout value or %NULL
     * @returns #GST_RTSP_OK on success.
     */
    write(data: Uint8Array, timeout: GLib.TimeVal): RTSPResult
    /**
     * Attempt to write `size` bytes of `data` to the connected `conn,` blocking up to
     * the specified `timeout`. `timeout` can be 0, in which case this function
     * might block forever.
     * 
     * This function can be cancelled with gst_rtsp_connection_flush().
     * @param data the data to write
     * @param timeout a timeout value or 0
     * @returns #GST_RTSP_OK on success.
     */
    writeUsec(data: Uint8Array, timeout: number): RTSPResult
}

/**
 * This object manages the RTSP connection to the server. It provides function
 * to receive and send bytes and messages.
 * @record 
 */
export class RTSPConnection {

    // Own properties of GstRtsp-1.0.GstRtsp.RTSPConnection

    static name: string

    // Constructors of GstRtsp-1.0.GstRtsp.RTSPConnection

    /**
     * Accept a new connection on `socket` and create a new #GstRTSPConnection for
     * handling communication on new socket.
     * @param socket a socket
     * @param cancellable a #GCancellable to cancel the operation
     * @returns #GST_RTSP_OK when @conn contains a valid connection.
     */
    static accept(socket: Gio.Socket, cancellable: Gio.Cancellable | null): [ /* returnType */ RTSPResult, /* conn */ RTSPConnection | null ]
    /**
     * Create a newly allocated #GstRTSPConnection from `url` and store it in `conn`.
     * The connection will not yet attempt to connect to `url,` use
     * gst_rtsp_connection_connect().
     * 
     * A copy of `url` will be made.
     * @param url a #GstRTSPUrl
     * @returns #GST_RTSP_OK when @conn contains a valid connection.
     */
    static create(url: RTSPUrl): [ /* returnType */ RTSPResult, /* conn */ RTSPConnection ]
    /**
     * Create a new #GstRTSPConnection for handling communication on the existing
     * socket `socket`. The `initial_buffer` contains zero terminated data already
     * read from `socket` which should be used before starting to read new data.
     * @param socket a #GSocket
     * @param ip the IP address of the other end
     * @param port the port used by the other end
     * @param initialBuffer data already read from `fd`
     * @returns #GST_RTSP_OK when @conn contains a valid connection.
     */
    static createFromSocket(socket: Gio.Socket, ip: string | null, port: number, initialBuffer: string | null): [ /* returnType */ RTSPResult, /* conn */ RTSPConnection | null ]
}

export interface RTSPExtensionInterface {

    // Own fields of GstRtsp-1.0.GstRtsp.RTSPExtensionInterface

    parent: GObject.TypeInterface
    detectServer: (ext: RTSPExtension, resp: RTSPMessage) => boolean
    beforeSend: (ext: RTSPExtension, req: RTSPMessage) => RTSPResult
    afterSend: (ext: RTSPExtension, req: RTSPMessage, resp: RTSPMessage) => RTSPResult
    parseSdp: (ext: RTSPExtension, sdp: GstSdp.SDPMessage, s: Gst.Structure) => RTSPResult
    setupMedia: (ext: RTSPExtension, media: GstSdp.SDPMedia) => RTSPResult
    configureStream: (ext: RTSPExtension, caps: Gst.Caps) => boolean
    getTransports: (ext: RTSPExtension, protocols: RTSPLowerTrans, transport: string | null) => RTSPResult
    streamSelect: (ext: RTSPExtension, url: RTSPUrl) => RTSPResult
    send: (ext: RTSPExtension, req: RTSPMessage, resp: RTSPMessage) => RTSPResult
    receiveRequest: (ext: RTSPExtension, req: RTSPMessage) => RTSPResult
}

/**
 * An interface representing RTSP extensions.
 * @record 
 */
export abstract class RTSPExtensionInterface {

    // Own properties of GstRtsp-1.0.GstRtsp.RTSPExtensionInterface

    static name: string
}

export interface RTSPMessage {

    // Own fields of GstRtsp-1.0.GstRtsp.RTSPMessage

    /**
     * the message type
     * @field 
     */
    type: RTSPMsgType

    // Owm methods of GstRtsp-1.0.GstRtsp.RTSPMessage

    /**
     * Add a header with key `field` and `value` to `msg`. This function takes a copy
     * of `value`.
     * @param field a #GstRTSPHeaderField
     * @param value the value of the header
     * @returns a #GstRTSPResult.
     */
    addHeader(field: RTSPHeaderField, value: string | null): RTSPResult
    /**
     * Add a header with key `header` and `value` to `msg`. This function takes a copy
     * of `value`.
     * @param header header string
     * @param value the value of the header
     * @returns a #GstRTSPResult.
     */
    addHeaderByName(header: string | null, value: string | null): RTSPResult
    /**
     * Append the currently configured headers in `msg` to the #GString `str` suitable
     * for transmission.
     * @param str a string
     * @returns #GST_RTSP_OK.
     */
    appendHeaders(str: GLib.String): RTSPResult
    /**
     * Allocate a new copy of `msg` and store the result in `copy`. The value in
     * `copy` should be release with gst_rtsp_message_free function.
     * @returns a #GstRTSPResult
     */
    copy(): [ /* returnType */ RTSPResult, /* copy */ RTSPMessage | null ]
    /**
     * Dump the contents of `msg` to stdout.
     * @returns #GST_RTSP_OK.
     */
    dump(): RTSPResult
    /**
     * Free the memory used by `msg`.
     * @returns a #GstRTSPResult.
     */
    free(): RTSPResult
    /**
     * Get the body of `msg`. `data` remains valid for as long as `msg` is valid and
     * unchanged.
     * 
     * If the message body was set as a #GstBuffer before this will cause the data
     * to be copied and stored in the message. The #GstBuffer will no longer be
     * kept in the message.
     * @returns #GST_RTSP_OK.
     */
    getBody(): [ /* returnType */ RTSPResult, /* data */ Uint8Array ]
    /**
     * Get the body of `msg`. `buffer` remains valid for as long as `msg` is valid and
     * unchanged.
     * 
     * If body data was set from raw memory instead of a #GstBuffer this function
     * will always return %NULL. The caller can check if there is a body buffer by
     * calling gst_rtsp_message_has_body_buffer().
     * @returns #GST_RTSP_OK.
     */
    getBodyBuffer(): [ /* returnType */ RTSPResult, /* buffer */ Gst.Buffer ]
    /**
     * Get the `indx` header value with key `field` from `msg`. The result in `value`
     * stays valid as long as it remains present in `msg`.
     * @param field a #GstRTSPHeaderField
     * @param indx the index of the header
     * @returns #GST_RTSP_OK when @field was found, #GST_RTSP_ENOTIMPL if the key was not found.
     */
    getHeader(field: RTSPHeaderField, indx: number): [ /* returnType */ RTSPResult, /* value */ string | null ]
    /**
     * Get the `index` header value with key `header` from `msg`. The result in `value`
     * stays valid as long as it remains present in `msg`.
     * @param header a #GstRTSPHeaderField
     * @param index the index of the header
     * @returns #GST_RTSP_OK when @field was found, #GST_RTSP_ENOTIMPL if the key was not found.
     */
    getHeaderByName(header: string | null, index: number): [ /* returnType */ RTSPResult, /* value */ string | null ]
    /**
     * Get the message type of `msg`.
     * @returns the message type.
     */
    getType(): RTSPMsgType
    /**
     * Checks if `msg` has a body and the body is stored as #GstBuffer.
     * @returns %TRUE if @msg has a body and it's stored as #GstBuffer, %FALSE otherwise.
     */
    hasBodyBuffer(): boolean
    /**
     * Parses the credentials given in a WWW-Authenticate or Authorization header.
     * @param field a #GstRTSPHeaderField
     * @returns      %NULL-terminated array of GstRTSPAuthCredential or %NULL.
     */
    parseAuthCredentials(field: RTSPHeaderField): RTSPAuthCredential[]
    /**
     * Parse the data message `msg` and store the channel in `channel`.
     * @returns a #GstRTSPResult.
     */
    parseData(): [ /* returnType */ RTSPResult, /* channel */ number ]
    /**
     * Parse the request message `msg` and store the values `method,` `uri` and
     * `version`. The result locations can be %NULL if one is not interested in its
     * value.
     * 
     * `uri` remains valid for as long as `msg` is valid and unchanged.
     * @returns a #GstRTSPResult.
     */
    parseRequest(): [ /* returnType */ RTSPResult, /* method */ RTSPMethod, /* uri */ string | null, /* version */ RTSPVersion ]
    /**
     * Parse the response message `msg` and store the values `code,` `reason` and
     * `version`. The result locations can be %NULL if one is not interested in its
     * value.
     * 
     * `reason` remains valid for as long as `msg` is valid and unchanged.
     * @returns a #GstRTSPResult.
     */
    parseResponse(): [ /* returnType */ RTSPResult, /* code */ RTSPStatusCode, /* reason */ string | null, /* version */ RTSPVersion ]
    /**
     * Remove the `indx` header with key `field` from `msg`. If `indx` equals -1, all
     * headers will be removed.
     * @param field a #GstRTSPHeaderField
     * @param indx the index of the header
     * @returns a #GstRTSPResult.
     */
    removeHeader(field: RTSPHeaderField, indx: number): RTSPResult
    /**
     * Remove the `index` header with key `header` from `msg`. If `index` equals -1,
     * all matching headers will be removed.
     * @param header the header string
     * @param index the index of the header
     * @returns a #GstRTSPResult
     */
    removeHeaderByName(header: string | null, index: number): RTSPResult
    /**
     * Set the body of `msg` to a copy of `data`. Any existing body or body buffer
     * will be replaced by the new body.
     * @param data the data
     * @returns #GST_RTSP_OK.
     */
    setBody(data: Uint8Array): RTSPResult
    /**
     * Set the body of `msg` to `buffer`. Any existing body or body buffer
     * will be replaced by the new body.
     * @param buffer a #GstBuffer
     * @returns #GST_RTSP_OK.
     */
    setBodyBuffer(buffer: Gst.Buffer): RTSPResult
    /**
     * Take the body of `msg` and store it in `data` and `size`. After this method,
     * the body and size of `msg` will be set to %NULL and 0 respectively.
     * @returns #GST_RTSP_OK.
     */
    stealBody(): [ /* returnType */ RTSPResult, /* data */ Uint8Array ]
    /**
     * Take the body of `msg` and store it in `buffer`. After this method,
     * the body and size of `msg` will be set to %NULL and 0 respectively.
     * 
     * If body data was set from raw memory instead of a #GstBuffer this function
     * will always return %NULL. The caller can check if there is a body buffer by
     * calling gst_rtsp_message_has_body_buffer().
     * @returns #GST_RTSP_OK.
     */
    stealBodyBuffer(): [ /* returnType */ RTSPResult, /* buffer */ Gst.Buffer ]
    /**
     * Set the body of `msg` to `data` and `size`. This method takes ownership of
     * `data`. Any existing body or body buffer will be replaced by the new body.
     * @param data the data
     * @returns #GST_RTSP_OK.
     */
    takeBody(data: Uint8Array): RTSPResult
    /**
     * Set the body of `msg` to `buffer`. This method takes ownership of `buffer`.
     * Any existing body or body buffer will be replaced by the new body.
     * @param buffer a #GstBuffer
     * @returns #GST_RTSP_OK.
     */
    takeBodyBuffer(buffer: Gst.Buffer): RTSPResult
    /**
     * Add a header with key `field` and `value` to `msg`. This function takes
     * ownership of `value`.
     * @param field a #GstRTSPHeaderField
     * @param value the value of the header
     * @returns a #GstRTSPResult.
     */
    takeHeader(field: RTSPHeaderField, value: string | null): RTSPResult
    /**
     * Add a header with key `header` and `value` to `msg`. This function takes
     * ownership of `value,` but not of `header`.
     * @param header a header string
     * @param value the value of the header
     * @returns a #GstRTSPResult.
     */
    takeHeaderByName(header: string | null, value: string | null): RTSPResult
    /**
     * Unset the contents of `msg` so that it becomes an uninitialized
     * #GstRTSPMessage again. This function is mostly used in combination with
     * gst_rtsp_message_init_request(), gst_rtsp_message_init_response() and
     * gst_rtsp_message_init_data() on stack allocated #GstRTSPMessage structures.
     * @returns #GST_RTSP_OK.
     */
    unset(): RTSPResult
}

/**
 * Provides methods for creating and parsing request, response and data messages.
 * @record 
 */
export class RTSPMessage {

    // Own properties of GstRtsp-1.0.GstRtsp.RTSPMessage

    static name: string
}

export interface RTSPRange {

    // Own fields of GstRtsp-1.0.GstRtsp.RTSPRange

    /**
     * minimum value of the range
     * @field 
     */
    min: number
    /**
     * maximum value of the range
     * @field 
     */
    max: number
}

/**
 * Provides helper functions to deal with time ranges.
 * @record 
 */
export class RTSPRange {

    // Own properties of GstRtsp-1.0.GstRtsp.RTSPRange

    static name: string

    // Constructors of GstRtsp-1.0.GstRtsp.RTSPRange

    /**
     * Converts the range in-place between different types of units.
     * Ranges containing the special value #GST_RTSP_TIME_NOW can not be
     * converted as these are only valid for #GST_RTSP_RANGE_NPT.
     * @param range a #GstRTSPTimeRange
     * @param unit the unit to convert the range into
     * @returns %TRUE if the range could be converted
     */
    static convertUnits(range: RTSPTimeRange, unit: RTSPRangeUnit): boolean
    /**
     * Free the memory allocated by `range`.
     * @param range a #GstRTSPTimeRange
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
     * @param range a #GstRTSPTimeRange
     * @returns %TRUE on success.
     */
    static getTimes(range: RTSPTimeRange): [ /* returnType */ boolean, /* min */ Gst.ClockTime, /* max */ Gst.ClockTime ]
    /**
     * Parse `rangestr` to a #GstRTSPTimeRange.
     * @param rangestr a range string to parse
     * @returns #GST_RTSP_OK on success.
     */
    static parse(rangestr: string | null): [ /* returnType */ RTSPResult, /* range */ RTSPTimeRange ]
    /**
     * Convert `range` into a string representation.
     * @param range a #GstRTSPTimeRange
     * @returns The string representation of @range. g_free() after usage.
     */
    static toString(range: RTSPTimeRange): string | null
}

export interface RTSPTime {

    // Own fields of GstRtsp-1.0.GstRtsp.RTSPTime

    /**
     * the time of the time
     * @field 
     */
    type: RTSPTimeType
    /**
     * seconds when `type` is GST_RTSP_TIME_SECONDS,
     *           GST_RTSP_TIME_UTC and GST_RTSP_TIME_FRAMES
     * @field 
     */
    seconds: number
}

/**
 * A time indication.
 * @record 
 */
export class RTSPTime {

    // Own properties of GstRtsp-1.0.GstRtsp.RTSPTime

    static name: string
}

export interface RTSPTime2 {

    // Own fields of GstRtsp-1.0.GstRtsp.RTSPTime2

    /**
     * frames and subframes when type in GstRTSPTime is
     *          GST_RTSP_TIME_FRAMES
     * @field 
     */
    frames: number
    /**
     * year when type is GST_RTSP_TIME_UTC
     * @field 
     */
    year: number
    /**
     * month when type is GST_RTSP_TIME_UTC
     * @field 
     */
    month: number
    /**
     * day when type is GST_RTSP_TIME_UTC
     * @field 
     */
    day: number
}

/**
 * Extra fields for a time indication.
 * @record 
 */
export class RTSPTime2 {

    // Own properties of GstRtsp-1.0.GstRtsp.RTSPTime2

    static name: string
}

export interface RTSPTimeRange {

    // Own fields of GstRtsp-1.0.GstRtsp.RTSPTimeRange

    /**
     * the time units used
     * @field 
     */
    unit: RTSPRangeUnit
    /**
     * the minimum interval
     * @field 
     */
    min: RTSPTime
    /**
     * the maximum interval
     * @field 
     */
    max: RTSPTime
    /**
     * extra fields in the minimum interval (Since: 1.2)
     * @field 
     */
    min2: RTSPTime2
    /**
     * extra fields in the maximum interval (Since: 1.2)
     * @field 
     */
    max2: RTSPTime2
}

/**
 * A time range.
 * @record 
 */
export class RTSPTimeRange {

    // Own properties of GstRtsp-1.0.GstRtsp.RTSPTimeRange

    static name: string
}

export interface RTSPTransport {

    // Own fields of GstRtsp-1.0.GstRtsp.RTSPTransport

    /**
     * the transport mode
     * @field 
     */
    trans: RTSPTransMode
    /**
     * the tansport profile
     * @field 
     */
    profile: RTSPProfile
    /**
     * the lower transport
     * @field 
     */
    lowerTransport: RTSPLowerTrans
    /**
     * the destination ip/hostname
     * @field 
     */
    destination: string | null
    /**
     * the source ip/hostname
     * @field 
     */
    source: string | null
    /**
     * the number of layers
     * @field 
     */
    layers: number
    /**
     * if play mode was selected
     * @field 
     */
    modePlay: boolean
    /**
     * if record mode was selected
     * @field 
     */
    modeRecord: boolean
    /**
     * is append mode was selected
     * @field 
     */
    append: boolean
    /**
     * the interleave range
     * @field 
     */
    interleaved: RTSPRange
    /**
     * the time to live for multicast UDP
     * @field 
     */
    ttl: number
    /**
     * the port pair for multicast sessions
     * @field 
     */
    port: RTSPRange
    /**
     * the client port pair for receiving data. For TCP
     *   based transports, applications can use this field to store the
     *   sender and receiver ports of the client.
     * @field 
     */
    clientPort: RTSPRange
    /**
     * the server port pair for receiving data. For TCP
     *   based transports, applications can use this field to store the
     *   sender and receiver ports of the server.
     * @field 
     */
    serverPort: RTSPRange
    /**
     * the ssrc that the sender/receiver will use
     * @field 
     */
    ssrc: number

    // Owm methods of GstRtsp-1.0.GstRtsp.RTSPTransport

    /**
     * Convert `transport` into a string that can be used to signal the transport in
     * an RTSP SETUP response.
     * @returns a string describing the RTSP transport or %NULL when the transport is invalid.
     */
    asText(): string | null
    /**
     * Free the memory used by `transport`.
     * @returns #GST_RTSP_OK.
     */
    free(): RTSPResult
    /**
     * Get the media type of `transport`. This media type is typically
     * used to generate #GstCaps events.
     * @returns #GST_RTSP_OK.
     */
    getMediaType(): [ /* returnType */ RTSPResult, /* mediaType */ string | null ]
}

/**
 * Provides helper functions to deal with RTSP transport strings.
 * @record 
 */
export class RTSPTransport {

    // Own properties of GstRtsp-1.0.GstRtsp.RTSPTransport

    static name: string

    // Constructors of GstRtsp-1.0.GstRtsp.RTSPTransport

    /**
     * Allocate a new initialized #GstRTSPTransport. Use gst_rtsp_transport_free()
     * after usage.
     * @returns a #GstRTSPResult.
     */
    static new(): [ /* returnType */ RTSPResult, /* transport */ RTSPTransport ]
    /**
     * Get the #GstElement that can handle the buffers transported over `trans`.
     * 
     * It is possible that there are several managers available, use `option` to
     * selected one.
     * 
     * `manager` will contain an element name or %NULL when no manager is
     * needed/available for `trans`.
     * @param trans a #GstRTSPTransMode
     * @param option option index.
     * @returns #GST_RTSP_OK.
     */
    static getManager(trans: RTSPTransMode, option: number): [ /* returnType */ RTSPResult, /* manager */ string | null ]
    /**
     * Get the mime type of the transport mode `trans`. This mime type is typically
     * used to generate #GstCaps events.
     * @param trans a #GstRTSPTransMode
     * @returns #GST_RTSP_OK.
     */
    static getMime(trans: RTSPTransMode): [ /* returnType */ RTSPResult, /* mime */ string | null ]
    /**
     * Initialize `transport` so that it can be used.
     * @returns #GST_RTSP_OK.
     */
    static init(): [ /* returnType */ RTSPResult, /* transport */ RTSPTransport ]
    /**
     * Parse the RTSP transport string `str` into `transport`.
     * @param str a transport string
     * @returns a #GstRTSPResult.
     */
    static parse(str: string | null): [ /* returnType */ RTSPResult, /* transport */ RTSPTransport ]
}

export interface RTSPUrl {

    // Own fields of GstRtsp-1.0.GstRtsp.RTSPUrl

    /**
     * the transports allowed
     * @field 
     */
    transports: RTSPLowerTrans
    /**
     * the family
     * @field 
     */
    family: RTSPFamily
    /**
     * the user
     * @field 
     */
    user: string | null
    /**
     * the password
     * @field 
     */
    passwd: string | null
    /**
     * the host
     * @field 
     */
    host: string | null
    /**
     * the port
     * @field 
     */
    port: number
    /**
     * the absolute path
     * @field 
     */
    abspath: string | null
    /**
     * additional query parameters
     * @field 
     */
    query: string | null

    // Owm methods of GstRtsp-1.0.GstRtsp.RTSPUrl

    /**
     * Make a copy of `url`.
     * @returns a copy of @url. Free with gst_rtsp_url_free () after usage.
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
     * @returns %NULL-terminated array of URL components. Free with g_strfreev() when no longer needed.
     */
    decodePathComponents(): string[]
    /**
     * Free the memory used by `url`.
     */
    free(): void
    /**
     * Get the port number of `url`.
     * @returns #GST_RTSP_OK.
     */
    getPort(): [ /* returnType */ RTSPResult, /* port */ number ]
    /**
     * Get a newly allocated string describing the request URI for `url`.
     * @returns a string with the request URI. g_free() after usage.
     */
    getRequestUri(): string | null
    /**
     * Get a newly allocated string describing the request URI for `url`
     * combined with the control path for `control_path`
     * @param controlPath an RTSP aggregate control path
     * @returns a string with the request URI combined with the control path. g_free() after usage.
     */
    getRequestUriWithControl(controlPath: string | null): string | null
    /**
     * Set the port number in `url` to `port`.
     * @param port the port
     * @returns #GST_RTSP_OK.
     */
    setPort(port: number): RTSPResult
}

/**
 * Provides helper functions to handle RTSP urls.
 * @record 
 */
export class RTSPUrl {

    // Own properties of GstRtsp-1.0.GstRtsp.RTSPUrl

    static name: string

    // Constructors of GstRtsp-1.0.GstRtsp.RTSPUrl

    /**
     * Parse the RTSP `urlstr` into a newly allocated #GstRTSPUrl. Free after usage
     * with gst_rtsp_url_free().
     * @param urlstr the url string to parse
     * @returns a #GstRTSPResult.
     */
    static parse(urlstr: string | null): [ /* returnType */ RTSPResult, /* url */ RTSPUrl | null ]
}

export interface RTSPWatch {

    // Owm methods of GstRtsp-1.0.GstRtsp.RTSPWatch

    /**
     * Adds a #GstRTSPWatch to a context so that it will be executed within that context.
     * @param context a GMainContext (if NULL, the default context will be used)
     * @returns the ID (greater than 0) for the watch within the GMainContext.
     */
    attach(context: GLib.MainContext | null): number
    /**
     * Get the maximum amount of bytes and messages that will be queued in `watch`.
     * See gst_rtsp_watch_set_send_backlog().
     */
    getSendBacklog(): [ /* bytes */ number, /* messages */ number ]
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
     * @param message a #GstRTSPMessage
     * @returns #GST_RTSP_OK on success.
     */
    sendMessage(message: RTSPMessage): [ /* returnType */ RTSPResult, /* id */ number ]
    /**
     * Sends `messages` using the connection of the `watch`. If they cannot be sent
     * immediately, they will be queued for transmission in `watch`. The contents of
     * `messages` will then be serialized and transmitted when the connection of the
     * `watch` becomes writable. In case the `messages` are queued, the ID returned in
     * `id` will be non-zero and used as the ID argument in the message_sent
     * callback once the last message is sent. The callback will only be called
     * once for the last message.
     * @param messages the messages to send
     * @returns #GST_RTSP_OK on success.
     */
    sendMessages(messages: RTSPMessage[]): [ /* returnType */ RTSPResult, /* id */ number ]
    /**
     * When `flushing` is %TRUE, abort a call to gst_rtsp_watch_wait_backlog()
     * and make sure gst_rtsp_watch_write_data() returns immediately with
     * #GST_RTSP_EINTR. And empty the queue.
     * @param flushing new flushing state
     */
    setFlushing(flushing: boolean): void
    /**
     * Set the maximum amount of bytes and messages that will be queued in `watch`.
     * When the maximum amounts are exceeded, gst_rtsp_watch_write_data() and
     * gst_rtsp_watch_send_message() will return #GST_RTSP_ENOMEM.
     * 
     * A value of 0 for `bytes` or `messages` means no limits.
     * @param bytes maximum bytes
     * @param messages maximum messages
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
     * @param timeout a GTimeVal timeout
     * @returns %GST_RTSP_OK when if there is room in queue.          %GST_RTSP_ETIMEOUT when @timeout was reached.          %GST_RTSP_EINTR when @watch is flushing          %GST_RTSP_EINVAL when called with invalid parameters.
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
     * @param timeout a timeout in microseconds
     * @returns %GST_RTSP_OK when if there is room in queue.          %GST_RTSP_ETIMEOUT when @timeout was reached.          %GST_RTSP_EINTR when @watch is flushing          %GST_RTSP_EINVAL when called with invalid parameters.
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
     * @param data the data to queue
     * @returns #GST_RTSP_OK on success. #GST_RTSP_ENOMEM when the backlog limits are reached. #GST_RTSP_EINTR when @watch was flushing.
     */
    writeData(data: Uint8Array): [ /* returnType */ RTSPResult, /* id */ number ]
}

/**
 * Opaque RTSP watch object that can be used for asynchronous RTSP
 * operations.
 * @record 
 */
export class RTSPWatch {

    // Own properties of GstRtsp-1.0.GstRtsp.RTSPWatch

    static name: string
}

export interface RTSPWatchFuncs {

    // Own fields of GstRtsp-1.0.GstRtsp.RTSPWatchFuncs

    messageReceived: (watch: RTSPWatch, message: RTSPMessage) => RTSPResult
    messageSent: (watch: RTSPWatch, id: number) => RTSPResult
    closed: (watch: RTSPWatch) => RTSPResult
    error: (watch: RTSPWatch, result: RTSPResult) => RTSPResult
    tunnelStart: (watch: RTSPWatch) => RTSPStatusCode
    tunnelComplete: (watch: RTSPWatch) => RTSPResult
    errorFull: (watch: RTSPWatch, result: RTSPResult, message: RTSPMessage, id: number) => RTSPResult
    tunnelLost: (watch: RTSPWatch) => RTSPResult
    tunnelHttpResponse: (watch: RTSPWatch, request: RTSPMessage, response: RTSPMessage) => RTSPResult
}

/**
 * Callback functions from a #GstRTSPWatch.
 * @record 
 */
export class RTSPWatchFuncs {

    // Own properties of GstRtsp-1.0.GstRtsp.RTSPWatchFuncs

    static name: string
}
