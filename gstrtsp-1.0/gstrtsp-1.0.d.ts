
/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

import '@girs/gjs';

// Module dependencies
import type GstSdp from '@girs/gstsdp-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GstBase from '@girs/gstbase-1.0';
import type Gio from '@girs/gio-2.0';

export namespace GstRtsp {

    /**
     * GstRtsp-1.0
     */


    /**
     * @gir-type Enum
     */
    export namespace RTSPAuthMethod {
        export const $gtype: GObject.GType<RTSPAuthMethod>;
    }

    /**
     * Authentication methods, ordered by strength
     * @gir-type Enum
     */
    enum RTSPAuthMethod {
        /**
         * no authentication
         */
        NONE = 0,
        /**
         * basic authentication
         */
        BASIC = 1,
        /**
         * digest authentication
         */
        DIGEST = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace RTSPFamily {
        export const $gtype: GObject.GType<RTSPFamily>;
    }

    /**
     * The possible network families.
     * @gir-type Enum
     */
    enum RTSPFamily {
        /**
         * unknown network family
         */
        NONE = 0,
        /**
         * internet
         */
        INET = 1,
        /**
         * internet V6
         */
        INET6 = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace RTSPHeaderField {
        export const $gtype: GObject.GType<RTSPHeaderField>;
    }

    /**
     * Enumeration of rtsp header fields
     * @gir-type Enum
     */
    enum RTSPHeaderField {
        INVALID = 0,
        ACCEPT = 1,
        ACCEPT_ENCODING = 2,
        ACCEPT_LANGUAGE = 3,
        ALLOW = 4,
        AUTHORIZATION = 5,
        BANDWIDTH = 6,
        BLOCKSIZE = 7,
        CACHE_CONTROL = 8,
        CONFERENCE = 9,
        CONNECTION = 10,
        CONTENT_BASE = 11,
        CONTENT_ENCODING = 12,
        CONTENT_LANGUAGE = 13,
        CONTENT_LENGTH = 14,
        CONTENT_LOCATION = 15,
        CONTENT_TYPE = 16,
        CSEQ = 17,
        DATE = 18,
        EXPIRES = 19,
        FROM = 20,
        IF_MODIFIED_SINCE = 21,
        LAST_MODIFIED = 22,
        PROXY_AUTHENTICATE = 23,
        PROXY_REQUIRE = 24,
        PUBLIC = 25,
        RANGE = 26,
        REFERER = 27,
        REQUIRE = 28,
        RETRY_AFTER = 29,
        RTP_INFO = 30,
        SCALE = 31,
        SESSION = 32,
        SERVER = 33,
        SPEED = 34,
        TRANSPORT = 35,
        UNSUPPORTED = 36,
        USER_AGENT = 37,
        VIA = 38,
        WWW_AUTHENTICATE = 39,
        CLIENT_CHALLENGE = 40,
        REAL_CHALLENGE1 = 41,
        REAL_CHALLENGE2 = 42,
        REAL_CHALLENGE3 = 43,
        SUBSCRIBE = 44,
        ALERT = 45,
        CLIENT_ID = 46,
        COMPANY_ID = 47,
        GUID = 48,
        REGION_DATA = 49,
        MAX_ASM_WIDTH = 50,
        LANGUAGE = 51,
        PLAYER_START_TIME = 52,
        LOCATION = 53,
        ETAG = 54,
        IF_MATCH = 55,
        ACCEPT_CHARSET = 56,
        SUPPORTED = 57,
        VARY = 58,
        X_ACCELERATE_STREAMING = 59,
        X_ACCEPT_AUTHENT = 60,
        X_ACCEPT_PROXY_AUTHENT = 61,
        X_BROADCAST_ID = 62,
        X_BURST_STREAMING = 63,
        X_NOTICE = 64,
        X_PLAYER_LAG_TIME = 65,
        X_PLAYLIST = 66,
        X_PLAYLIST_CHANGE_NOTICE = 67,
        X_PLAYLIST_GEN_ID = 68,
        X_PLAYLIST_SEEK_ID = 69,
        X_PROXY_CLIENT_AGENT = 70,
        X_PROXY_CLIENT_VERB = 71,
        X_RECEDING_PLAYLISTCHANGE = 72,
        X_RTP_INFO = 73,
        X_STARTUPPROFILE = 74,
        TIMESTAMP = 75,
        AUTHENTICATION_INFO = 76,
        HOST = 77,
        PRAGMA = 78,
        X_SERVER_IP_ADDRESS = 79,
        X_SESSIONCOOKIE = 80,
        RTCP_INTERVAL = 81,
        KEYMGMT = 82,
        PIPELINED_REQUESTS = 83,
        MEDIA_PROPERTIES = 84,
        SEEK_STYLE = 85,
        ACCEPT_RANGES = 86,
        FRAMES = 87,
        RATE_CONTROL = 88,
        LAST = 89,
    }


    /**
     * @gir-type Enum
     */
    export namespace RTSPMsgType {
        export const $gtype: GObject.GType<RTSPMsgType>;
    }

    /**
     * The type of a message.
     * @gir-type Enum
     */
    enum RTSPMsgType {
        /**
         * invalid message type
         */
        INVALID = 0,
        /**
         * RTSP request message
         */
        REQUEST = 1,
        /**
         * RTSP response message
         */
        RESPONSE = 2,
        /**
         * HTTP request message.
         */
        HTTP_REQUEST = 3,
        /**
         * HTTP response message.
         */
        HTTP_RESPONSE = 4,
        /**
         * data message
         */
        DATA = 5,
    }


    /**
     * @gir-type Enum
     */
    export namespace RTSPRangeUnit {
        export const $gtype: GObject.GType<RTSPRangeUnit>;
    }

    /**
     * Different possible time range units.
     * @gir-type Enum
     */
    enum RTSPRangeUnit {
        /**
         * SMPTE timecode
         */
        SMPTE = 0,
        /**
         * 29.97 frames per second
         */
        SMPTE_30_DROP = 1,
        /**
         * 25 frames per second
         */
        SMPTE_25 = 2,
        /**
         * Normal play time
         */
        NPT = 3,
        /**
         * Absolute time expressed as ISO 8601 timestamps
         */
        CLOCK = 4,
    }


    /**
     * @gir-type Enum
     */
    export namespace RTSPResult {
        export const $gtype: GObject.GType<RTSPResult>;
    }

    /**
     * Result codes from the RTSP functions.
     * @gir-type Enum
     */
    enum RTSPResult {
        /**
         * no error
         */
        OK = 0,
        /**
         * RTSP request is successful, but was redirected.
         * @since 1.24
         */
        OK_REDIRECT = 1,
        /**
         * some unspecified error occurred
         */
        ERROR = -1,
        /**
         * invalid arguments were provided to a function
         */
        EINVAL = -2,
        /**
         * an operation was canceled
         */
        EINTR = -3,
        /**
         * no memory was available for the operation
         */
        ENOMEM = -4,
        /**
         * a host resolve error occurred
         */
        ERESOLV = -5,
        /**
         * function not implemented
         */
        ENOTIMPL = -6,
        /**
         * a system error occurred, errno contains more details
         */
        ESYS = -7,
        /**
         * a parsing error occurred
         */
        EPARSE = -8,
        /**
         * windows networking could not start
         */
        EWSASTART = -9,
        /**
         * windows networking stack has wrong version
         */
        EWSAVERSION = -10,
        /**
         * end-of-file was reached
         */
        EEOF = -11,
        /**
         * a network problem occurred, h_errno contains more details
         */
        ENET = -12,
        /**
         * the host is not an IP host
         */
        ENOTIP = -13,
        /**
         * a timeout occurred
         */
        ETIMEOUT = -14,
        /**
         * the tunnel GET request has been performed
         */
        ETGET = -15,
        /**
         * the tunnel POST request has been performed
         */
        ETPOST = -16,
        /**
         * last error
         */
        ELAST = -17,
    }


    /**
     * @gir-type Enum
     */
    export namespace RTSPState {
        export const $gtype: GObject.GType<RTSPState>;
    }

    /**
     * The different RTSP states.
     * @gir-type Enum
     */
    enum RTSPState {
        /**
         * invalid state
         */
        INVALID = 0,
        /**
         * initializing
         */
        INIT = 1,
        /**
         * ready for operation
         */
        READY = 2,
        /**
         * seeking in progress
         */
        SEEKING = 3,
        /**
         * playing
         */
        PLAYING = 4,
        /**
         * recording
         */
        RECORDING = 5,
    }


    /**
     * @gir-type Enum
     */
    export namespace RTSPStatusCode {
        export const $gtype: GObject.GType<RTSPStatusCode>;
    }

    /**
     * Enumeration of rtsp status codes
     * @gir-type Enum
     */
    enum RTSPStatusCode {
        INVALID = 0,
        CONTINUE = 100,
        OK = 200,
        CREATED = 201,
        LOW_ON_STORAGE = 250,
        MULTIPLE_CHOICES = 300,
        MOVED_PERMANENTLY = 301,
        MOVE_TEMPORARILY = 302,
        SEE_OTHER = 303,
        NOT_MODIFIED = 304,
        USE_PROXY = 305,
        /**
         * RTSP request is temporarily redirected
         * @since 1.24
         */
        REDIRECT_TEMPORARILY = 307,
        /**
         * RTSP request is permanently redirected
         * @since 1.24
         */
        REDIRECT_PERMANENTLY = 308,
        BAD_REQUEST = 400,
        UNAUTHORIZED = 401,
        PAYMENT_REQUIRED = 402,
        FORBIDDEN = 403,
        NOT_FOUND = 404,
        METHOD_NOT_ALLOWED = 405,
        NOT_ACCEPTABLE = 406,
        PROXY_AUTH_REQUIRED = 407,
        REQUEST_TIMEOUT = 408,
        GONE = 410,
        LENGTH_REQUIRED = 411,
        PRECONDITION_FAILED = 412,
        REQUEST_ENTITY_TOO_LARGE = 413,
        REQUEST_URI_TOO_LARGE = 414,
        UNSUPPORTED_MEDIA_TYPE = 415,
        PARAMETER_NOT_UNDERSTOOD = 451,
        CONFERENCE_NOT_FOUND = 452,
        NOT_ENOUGH_BANDWIDTH = 453,
        SESSION_NOT_FOUND = 454,
        METHOD_NOT_VALID_IN_THIS_STATE = 455,
        HEADER_FIELD_NOT_VALID_FOR_RESOURCE = 456,
        INVALID_RANGE = 457,
        PARAMETER_IS_READONLY = 458,
        AGGREGATE_OPERATION_NOT_ALLOWED = 459,
        ONLY_AGGREGATE_OPERATION_ALLOWED = 460,
        UNSUPPORTED_TRANSPORT = 461,
        DESTINATION_UNREACHABLE = 462,
        KEY_MANAGEMENT_FAILURE = 463,
        INTERNAL_SERVER_ERROR = 500,
        NOT_IMPLEMENTED = 501,
        BAD_GATEWAY = 502,
        SERVICE_UNAVAILABLE = 503,
        GATEWAY_TIMEOUT = 504,
        RTSP_VERSION_NOT_SUPPORTED = 505,
        OPTION_NOT_SUPPORTED = 551,
    }


    /**
     * @gir-type Enum
     */
    export namespace RTSPTimeType {
        export const $gtype: GObject.GType<RTSPTimeType>;
    }

    /**
     * Possible time types.
     * @gir-type Enum
     */
    enum RTSPTimeType {
        /**
         * seconds
         */
        SECONDS = 0,
        /**
         * now
         */
        NOW = 1,
        /**
         * end
         */
        END = 2,
        /**
         * frames and subframes
         */
        FRAMES = 3,
        /**
         * UTC time
         */
        UTC = 4,
    }


    /**
     * @gir-type Enum
     */
    export namespace RTSPVersion {
        export const $gtype: GObject.GType<RTSPVersion>;
    }

    /**
     * The supported RTSP versions.
     * @gir-type Enum
     */
    enum RTSPVersion {
        /**
         * unknown/invalid version
         */
        INVALID = 0,
        /**
         * version 1.0
         */
        "1_0" = 16,
        /**
         * version 1.1.
         */
        "1_1" = 17,
        /**
         * version 2.0.
         */
        "2_0" = 32,
    }


    /**
     * The default RTSP port to connect to.
     * @default 554
     */
    const RTSP_DEFAULT_PORT: number;

    /**
     * Free a `null`-terminated array of credentials returned from
     * `gst_rtsp_message_parse_auth_credentials()`.
     * @param credentials a `null`-terminated array of {@link GstRtsp.RTSPAuthCredential}
     * @since 1.12
     */
    function rtsp_auth_credentials_free(credentials: RTSPAuthCredential): void;

    /**
     * Accept a new connection on `socket` and create a new {@link GstRtsp.RTSPConnection} for
     * handling communication on new socket.
     * @param socket a socket
     * @param cancellable a {@link Gio.Cancellable} to cancel the operation
     * @returns #GST_RTSP_OK when `conn` contains a valid connection.
     */
    function rtsp_connection_accept(socket: Gio.Socket, cancellable: Gio.Cancellable | null): [RTSPResult, RTSPConnection | null];

    /**
     * Create a newly allocated {@link GstRtsp.RTSPConnection} from `url` and store it in `conn`.
     * The connection will not yet attempt to connect to `url`, use
     * `gst_rtsp_connection_connect()`.
     * 
     * A copy of `url` will be made.
     * @param url a {@link GstRtsp.RTSPUrl}
     * @returns #GST_RTSP_OK when `conn` contains a valid connection.
     */
    function rtsp_connection_create(url: RTSPUrl): [RTSPResult, RTSPConnection];

    /**
     * Create a new {@link GstRtsp.RTSPConnection} for handling communication on the existing
     * socket `socket`. The `initial_buffer` contains zero terminated data already
     * read from `socket` which should be used before starting to read new data.
     * @param socket a {@link Gio.Socket}
     * @param ip the IP address of the other end
     * @param port the port used by the other end
     * @param initial_buffer data already read from `fd`
     * @returns #GST_RTSP_OK when `conn` contains a valid connection.
     */
    function rtsp_connection_create_from_socket(socket: Gio.Socket, ip: string, port: number, initial_buffer: string): [RTSPResult, RTSPConnection | null];

    /**
     * Convert `header` to a {@link GstRtsp.RTSPHeaderField}.
     * @param header a header string
     * @returns a {@link GstRtsp.RTSPHeaderField} for `header` or #GST_RTSP_HDR_INVALID if the header field is unknown.
     */
    function rtsp_find_header_field(header: string): RTSPHeaderField;

    /**
     * Convert `method` to a {@link GstRtsp.RTSPMethod}.
     * @param method a method
     * @returns a {@link GstRtsp.RTSPMethod} for `method` or #GST_RTSP_INVALID if the method is unknown.
     */
    function rtsp_find_method(method: string): RTSPMethod;

    /**
     * Calculates the digest auth response from the values given by the server and
     * the username and password. See RFC2069 for details.
     * 
     * Currently only supported algorithm "md5".
     * @param algorithm Hash algorithm to use, or `null` for MD5
     * @param method Request method, e.g. PLAY
     * @param realm Realm
     * @param username Username
     * @param password Password
     * @param uri Original request URI
     * @param nonce Nonce
     * @returns Authentication response or `null` if unsupported
     * @since 1.12
     */
    function rtsp_generate_digest_auth_response(algorithm: string | null, method: string, realm: string, username: string, password: string, uri: string, nonce: string): string | null;

    /**
     * Calculates the digest auth response from the values given by the server and
     * the md5sum. See RFC2069 for details.
     * 
     * This function is useful when the passwords are not stored in clear text,
     * but instead in the same format as the .htdigest file.
     * 
     * Currently only supported algorithm "md5".
     * @param algorithm Hash algorithm to use, or `null` for MD5
     * @param method Request method, e.g. PLAY
     * @param md5 The md5 sum of username:realm:password
     * @param uri Original request URI
     * @param nonce Nonce
     * @returns Authentication response or `null` if unsupported
     * @since 1.16
     */
    function rtsp_generate_digest_auth_response_from_md5(algorithm: string | null, method: string, md5: string, uri: string, nonce: string): string | null;

    /**
     * Check whether `field` may appear multiple times in a message.
     * @param field a {@link GstRtsp.RTSPHeaderField}
     * @returns `true` if multiple headers are allowed.
     */
    function rtsp_header_allow_multiple(field: RTSPHeaderField): boolean;

    /**
     * Convert `field` to a string.
     * @param field a {@link GstRtsp.RTSPHeaderField}
     * @returns a string representation of `field`.
     */
    function rtsp_header_as_text(field: RTSPHeaderField): string | null;

    /**
     * Create a new initialized {@link GstRtsp.RTSPMessage}. Free with `gst_rtsp_message_free()`.
     * @returns a {@link GstRtsp.RTSPResult}.
     */
    function rtsp_message_new(): [RTSPResult, RTSPMessage];

    /**
     * Create a new data {@link GstRtsp.RTSPMessage} with `channel` and store the
     * result message in `msg`. Free with `gst_rtsp_message_free()`.
     * @param channel the channel
     * @returns a {@link GstRtsp.RTSPResult}.
     */
    function rtsp_message_new_data(channel: number): [RTSPResult, RTSPMessage];

    /**
     * Create a new {@link GstRtsp.RTSPMessage} with `method` and `uri` and store the result
     * request message in `msg`. Free with `gst_rtsp_message_free()`.
     * @param method the request method to use
     * @param uri the uri of the request
     * @returns a {@link GstRtsp.RTSPResult}.
     */
    function rtsp_message_new_request(method: RTSPMethod, uri: string): [RTSPResult, RTSPMessage];

    /**
     * Create a new response {@link GstRtsp.RTSPMessage} with `code` and `reason` and store the
     * result message in `msg`. Free with `gst_rtsp_message_free()`.
     * 
     * When `reason` is `null`, the default reason for `code` will be used.
     * 
     * When `request` is not `null`, the relevant headers will be copied to the new
     * response message.
     * @param code the status code
     * @param reason the status reason or `null`
     * @param request the request that triggered the response or `null`
     * @returns a {@link GstRtsp.RTSPResult}.
     */
    function rtsp_message_new_response(code: RTSPStatusCode, reason: string | null, request: RTSPMessage | null): [RTSPResult, RTSPMessage];

    /**
     * Convert `method` to a string.
     * @param method a {@link GstRtsp.RTSPMethod}
     * @returns a string representation of `method`.
     */
    function rtsp_method_as_text(method: RTSPMethod): string | null;

    /**
     * Convert `options` to a string.
     * @param options one or more {@link GstRtsp.RTSPMethod}
     * @returns a new string of `options`. `g_free()` after usage.
     */
    function rtsp_options_as_text(options: RTSPMethod): string;

    /**
     * Convert the comma separated list `options` to a {@link GstRtsp.RTSPMethod} bitwise or
     * of methods. This functions is the reverse of `gst_rtsp_options_as_text()`.
     * @param options a comma separated list of options
     * @returns a {@link GstRtsp.RTSPMethod}
     * @since 1.2
     */
    function rtsp_options_from_text(options: string): RTSPMethod;

    /**
     * Converts the range in-place between different types of units.
     * Ranges containing the special value #GST_RTSP_TIME_NOW can not be
     * converted as these are only valid for #GST_RTSP_RANGE_NPT.
     * @param range a {@link GstRtsp.RTSPTimeRange}
     * @param unit the unit to convert the range into
     * @returns `true` if the range could be converted
     */
    function rtsp_range_convert_units(range: RTSPTimeRange, unit: RTSPRangeUnit): boolean;

    /**
     * Free the memory allocated by `range`.
     * @param range a {@link GstRtsp.RTSPTimeRange}
     */
    function rtsp_range_free(range: RTSPTimeRange): void;

    /**
     * Retrieve the minimum and maximum values from `range` converted to
     * {@link Gst.ClockTime} in `min` and `max`.
     * 
     * A value of `GST_CLOCK_TIME_NONE` will be used to signal #GST_RTSP_TIME_NOW
     * and #GST_RTSP_TIME_END for `min` and `max` respectively.
     * 
     * UTC times will be converted to nanoseconds since 1900.
     * @param range a {@link GstRtsp.RTSPTimeRange}
     * @returns `true` on success.
     * @since 1.2
     */
    function rtsp_range_get_times(range: RTSPTimeRange): [boolean, Gst.ClockTime, Gst.ClockTime];

    /**
     * Parse `rangestr` to a {@link GstRtsp.RTSPTimeRange}.
     * @param rangestr a range string to parse
     * @returns #GST_RTSP_OK on success.
     */
    function rtsp_range_parse(rangestr: string): [RTSPResult, RTSPTimeRange];

    /**
     * Convert `range` into a string representation.
     * @param range a {@link GstRtsp.RTSPTimeRange}
     * @returns The string representation of `range`. `g_free()` after usage.
     */
    function rtsp_range_to_string(range: RTSPTimeRange): string;

    /**
     * Convert `code` to a string.
     * @param code a {@link GstRtsp.RTSPStatusCode}
     * @returns a string representation of `code`.
     */
    function rtsp_status_as_text(code: RTSPStatusCode): string;

    /**
     * Convert `result` in a human readable string.
     * @param result a {@link GstRtsp.RTSPResult}
     * @returns a newly allocated string. `g_free()` after usage.
     */
    function rtsp_strresult(result: RTSPResult): string;

    /**
     * Get the {@link Gst.Element} that can handle the buffers transported over `trans`.
     * 
     * It is possible that there are several managers available, use `option` to
     * selected one.
     * 
     * `manager` will contain an element name or `null` when no manager is
     * needed/available for `trans`.
     * @param trans a {@link GstRtsp.RTSPTransMode}
     * @param option option index.
     * @returns #GST_RTSP_OK.
     */
    function rtsp_transport_get_manager(trans: RTSPTransMode, option: number): [RTSPResult, string];

    /**
     * Get the mime type of the transport mode `trans`. This mime type is typically
     * used to generate {@link Gst.Caps} events.
     * @param trans a {@link GstRtsp.RTSPTransMode}
     * @returns #GST_RTSP_OK.
     * @deprecated This functions only deals with the GstRTSPTransMode and only    returns the mime type for #GST_RTSP_PROFILE_AVP. Use    `gst_rtsp_transport_get_media_type()` instead.
     */
    function rtsp_transport_get_mime(trans: RTSPTransMode): [RTSPResult, string];

    /**
     * Initialize `transport` so that it can be used.
     * @returns #GST_RTSP_OK.
     */
    function rtsp_transport_init(): [RTSPResult, RTSPTransport];

    /**
     * Allocate a new initialized {@link GstRtsp.RTSPTransport}. Use `gst_rtsp_transport_free()`
     * after usage.
     * @returns a {@link GstRtsp.RTSPResult}.
     */
    function rtsp_transport_new(): [RTSPResult, RTSPTransport];

    /**
     * Parse the RTSP transport string `str` into `transport`.
     * @param str a transport string
     * @returns a {@link GstRtsp.RTSPResult}.
     */
    function rtsp_transport_parse(str: string): [RTSPResult, RTSPTransport];

    /**
     * Parse the RTSP `urlstr` into a newly allocated {@link GstRtsp.RTSPUrl}. Free after usage
     * with `gst_rtsp_url_free()`.
     * @param urlstr the url string to parse
     * @returns a {@link GstRtsp.RTSPResult}.
     */
    function rtsp_url_parse(urlstr: string): [RTSPResult, RTSPUrl | null];

    /**
     * Convert `version` to a string.
     * @param version a {@link GstRtsp.RTSPVersion}
     * @returns a string representation of `version`.
     */
    function rtsp_version_as_text(version: RTSPVersion): string;

    /**
     * @gir-type Callback
     */
    interface RTSPConnectionAcceptCertificateFunc {
        (conn: Gio.TlsConnection, peer_cert: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): boolean;
    }

    /**
     * @gir-type Flags
     */
    export namespace RTSPEvent {
        export const $gtype: GObject.GType<RTSPEvent>;
    }

    /**
     * The possible events for the connection.
     * @gir-type Flags
     */
    enum RTSPEvent {
        /**
         * connection is readable
         */
        READ = 1,
        /**
         * connection is writable
         */
        WRITE = 2,
    }


    /**
     * @gir-type Flags
     */
    export namespace RTSPLowerTrans {
        export const $gtype: GObject.GType<RTSPLowerTrans>;
    }

    /**
     * The different transport methods.
     * @gir-type Flags
     */
    enum RTSPLowerTrans {
        /**
         * invalid transport flag
         */
        UNKNOWN = 0,
        /**
         * stream data over UDP
         */
        UDP = 1,
        /**
         * stream data over UDP multicast
         */
        UDP_MCAST = 2,
        /**
         * stream data over TCP
         */
        TCP = 4,
        /**
         * stream data tunneled over HTTP.
         */
        HTTP = 16,
        /**
         * encrypt TCP and HTTP with TLS
         */
        TLS = 32,
    }


    /**
     * @gir-type Flags
     */
    export namespace RTSPMethod {
        export const $gtype: GObject.GType<RTSPMethod>;
    }

    /**
     * The different supported RTSP methods.
     * @gir-type Flags
     */
    enum RTSPMethod {
        /**
         * invalid method
         */
        INVALID = 0,
        /**
         * the DESCRIBE method
         */
        DESCRIBE = 1,
        /**
         * the ANNOUNCE method
         */
        ANNOUNCE = 2,
        /**
         * the GET_PARAMETER method
         */
        GET_PARAMETER = 4,
        /**
         * the OPTIONS method
         */
        OPTIONS = 8,
        /**
         * the PAUSE method
         */
        PAUSE = 16,
        /**
         * the PLAY method
         */
        PLAY = 32,
        /**
         * the RECORD method
         */
        RECORD = 64,
        /**
         * the REDIRECT method
         */
        REDIRECT = 128,
        /**
         * the SETUP method
         */
        SETUP = 256,
        /**
         * the SET_PARAMETER method
         */
        SET_PARAMETER = 512,
        /**
         * the TEARDOWN method
         */
        TEARDOWN = 1024,
        /**
         * the GET method (HTTP).
         */
        GET = 2048,
        /**
         * the POST method (HTTP).
         */
        POST = 4096,
    }


    /**
     * @gir-type Flags
     */
    export namespace RTSPProfile {
        export const $gtype: GObject.GType<RTSPProfile>;
    }

    /**
     * The transfer profile to use.
     * @gir-type Flags
     */
    enum RTSPProfile {
        /**
         * invalid profile
         */
        UNKNOWN = 0,
        /**
         * the Audio/Visual profile (RFC 3551)
         */
        AVP = 1,
        /**
         * the secure Audio/Visual profile (RFC 3711)
         */
        SAVP = 2,
        /**
         * the Audio/Visual profile with feedback (RFC 4585)
         */
        AVPF = 4,
        /**
         * the secure Audio/Visual profile with feedback (RFC 5124)
         */
        SAVPF = 8,
    }


    /**
     * @gir-type Flags
     */
    export namespace RTSPTransMode {
        export const $gtype: GObject.GType<RTSPTransMode>;
    }

    /**
     * The transfer mode to use.
     * @gir-type Flags
     */
    enum RTSPTransMode {
        /**
         * invalid tansport mode
         */
        UNKNOWN = 0,
        /**
         * transfer RTP data
         */
        RTP = 1,
        /**
         * transfer RDT (RealMedia) data
         */
        RDT = 2,
    }


    /**
     * RTSP Authentication credentials
     * @gir-type Struct
     * @since 1.12
     */
    class RTSPAuthCredential {
        static $gtype: GObject.GType<RTSPAuthCredential>;

        // Fields
        scheme: RTSPAuthMethod;

        params: RTSPAuthParam;

        authorization: string;
    }


    /**
     * RTSP Authentication parameter
     * @gir-type Struct
     * @since 1.12
     */
    class RTSPAuthParam {
        static $gtype: GObject.GType<RTSPAuthParam>;

        // Fields
        name: string;

        value: string;

        // Constructors

        constructor(properties?: Partial<{
            name: string;
            value: string;
        }>);

        // Methods
        copy(): RTSPAuthParam;

        free(): void;
    }


    /**
     * This object manages the RTSP connection to the server. It provides function
     * to receive and send bytes and messages.
     * @gir-type Struct
     */
    abstract class RTSPConnection {
        static $gtype: GObject.GType<RTSPConnection>;

        // Static methods
        /**
         * Accept a new connection on `socket` and create a new {@link GstRtsp.RTSPConnection} for
         * handling communication on new socket.
         * @param socket a socket
         * @param cancellable a {@link Gio.Cancellable} to cancel the operation
         */
        static accept(socket: Gio.Socket, cancellable: Gio.Cancellable | null): [RTSPResult, RTSPConnection | null];

        /**
         * Create a newly allocated {@link GstRtsp.RTSPConnection} from `url` and store it in `conn`.
         * The connection will not yet attempt to connect to `url`, use
         * `gst_rtsp_connection_connect()`.
         * 
         * A copy of `url` will be made.
         * @param url a {@link GstRtsp.RTSPUrl}
         */
        static create(url: RTSPUrl): [RTSPResult, RTSPConnection];

        /**
         * Create a new {@link GstRtsp.RTSPConnection} for handling communication on the existing
         * socket `socket`. The `initial_buffer` contains zero terminated data already
         * read from `socket` which should be used before starting to read new data.
         * @param socket a {@link Gio.Socket}
         * @param ip the IP address of the other end
         * @param port the port used by the other end
         * @param initial_buffer data already read from `fd`
         */
        static create_from_socket(socket: Gio.Socket, ip: string, port: number, initial_buffer: string): [RTSPResult, RTSPConnection | null];

        // Methods
        /**
         * Add header to be appended to any HTTP request made by connection.
         * If the header already exists then the old header is replaced by the new header.
         * 
         * Only applicable in HTTP tunnel mode.
         * @param key HTTP header name
         * @param value HTTP header value
         * @since 1.24
         */
        add_extra_http_request_header(key: string, value: string): void;

        /**
         * Clear the list of authentication directives stored in `conn`.
         */
        clear_auth_params(): void;

        /**
         * Close the connected `conn`. After this call, the connection is in the same
         * state as when it was first created.
         * @returns #GST_RTSP_OK on success.
         */
        close(): RTSPResult;

        /**
         * Attempt to connect to the url of `conn` made with
         * `gst_rtsp_connection_create()`. If `timeout` is `null` this function can block
         * forever. If `timeout` contains a valid timeout, this function will return
         * #GST_RTSP_ETIMEOUT after the timeout expired.
         * 
         * This function can be cancelled with `gst_rtsp_connection_flush()`.
         * @param timeout a GTimeVal timeout
         * @returns #GST_RTSP_OK when a connection could be made.
         * @deprecated since 1.18
         */
        connect(timeout: GLib.TimeVal): RTSPResult;

        /**
         * Attempt to connect to the url of `conn` made with
         * `gst_rtsp_connection_create()`. If `timeout` is 0 this function can block
         * forever. If `timeout` contains a valid timeout, this function will return
         * #GST_RTSP_ETIMEOUT after the timeout expired.
         * 
         * This function can be cancelled with `gst_rtsp_connection_flush()`.
         * @param timeout a timeout in microseconds
         * @returns #GST_RTSP_OK when a connection could be made.
         * @since 1.18
         */
        connect_usec(timeout: bigint | number): RTSPResult;

        /**
         * Attempt to connect to the url of `conn` made with
         * `gst_rtsp_connection_create()`. If `timeout` is `null` this function can block
         * forever. If `timeout` contains a valid timeout, this function will return
         * #GST_RTSP_ETIMEOUT after the timeout expired.  If `conn` is set to tunneled,
         * `response` will contain a response to the tunneling request messages.
         * 
         * This function can be cancelled with `gst_rtsp_connection_flush()`.
         * @param timeout a GTimeVal timeout
         * @param response a {@link GstRtsp.RTSPMessage}
         * @returns #GST_RTSP_OK when a connection could be made.
         * @since 1.8
         * @deprecated since 1.18
         */
        connect_with_response(timeout: GLib.TimeVal, response: RTSPMessage): RTSPResult;

        /**
         * Attempt to connect to the url of `conn` made with
         * `gst_rtsp_connection_create()`. If `timeout` is 0 this function can block
         * forever. If `timeout` contains a valid timeout, this function will return
         * #GST_RTSP_ETIMEOUT after the timeout expired.  If `conn` is set to tunneled,
         * `response` will contain a response to the tunneling request messages.
         * 
         * This function can be cancelled with `gst_rtsp_connection_flush()`.
         * @param timeout a timeout in microseconds
         * @param response a {@link GstRtsp.RTSPMessage}
         * @returns #GST_RTSP_OK when a connection could be made.
         * @since 1.18
         */
        connect_with_response_usec(timeout: bigint | number, response: RTSPMessage): RTSPResult;

        /**
         * If `conn` received the first tunnel connection and `conn2` received
         * the second tunnel connection, link the two connections together so that
         * `conn` manages the tunneled connection.
         * 
         * After this call, `conn2` cannot be used anymore and must be freed with
         * `gst_rtsp_connection_free()`.
         * 
         * If `conn2` is `null` then only the base64 decoding context will be setup for
         * `conn`.
         * @param conn2 a {@link GstRtsp.RTSPConnection} or `null`
         * @returns return GST_RTSP_OK on success.
         */
        do_tunnel(conn2: RTSPConnection | null): RTSPResult;

        /**
         * Start or stop the flushing action on `conn`. When flushing, all current
         * and future actions on `conn` will return #GST_RTSP_EINTR until the connection
         * is set to non-flushing mode again.
         * @param flush start or stop the flush
         * @returns #GST_RTSP_OK.
         */
        flush(flush: boolean): RTSPResult;

        /**
         * Close and free `conn`.
         * @returns #GST_RTSP_OK on success.
         */
        free(): RTSPResult;

        /**
         * Get the ignore_x_server_reply value.
         * @returns returns `true` if the x-server-ip-address header reply will be          ignored, else returns `false`
         * @since 1.20
         */
        get_ignore_x_server_reply(): boolean;

        /**
         * Retrieve the IP address of the other end of `conn`.
         * @returns The IP address as a string. This value remains valid until the connection is closed.
         */
        get_ip(): string | null;

        /**
         * Get the file descriptor for reading.
         * @returns the file descriptor used for reading or `null` on error. The file descriptor remains valid until the connection is closed.
         */
        get_read_socket(): Gio.Socket | null;

        /**
         * @returns `true` if the {@link GstRtsp.RTSPConnection} remembers the session id in the last response to set it on any further request.
         */
        get_remember_session_id(): boolean;

        /**
         * Get the TLS connection of `conn`.
         * 
         * For client side this will return the {@link Gio.TlsClientConnection} when connected
         * over TLS.
         * 
         * For server side connections, this function will create a GTlsServerConnection
         * when called the first time and will return that same connection on subsequent
         * calls. The server is then responsible for configuring the TLS connection.
         * @returns the TLS connection for `conn`.
         * @since 1.2
         * @throws GLib.Error
         */
        get_tls(): Gio.TlsConnection;

        /**
         * Gets the anchor certificate authorities database that will be used
         * after a server certificate can't be verified with the default
         * certificate database.
         * @returns the anchor certificate authorities database, or NULL if no database has been previously set. Use `g_object_unref()` to release the certificate database.
         * @since 1.4
         */
        get_tls_database(): Gio.TlsDatabase | null;

        /**
         * Gets a {@link Gio.TlsInteraction} object to be used when the connection or certificate
         * database need to interact with the user. This will be used to prompt the
         * user for passwords where necessary.
         * @returns a reference on the {@link Gio.TlsInteraction}. Use `g_object_unref()` to release.
         * @since 1.6
         */
        get_tls_interaction(): Gio.TlsInteraction | null;

        /**
         * Gets the TLS validation flags used to verify the peer certificate
         * when a TLS connection is established.
         * 
         * GLib guarantees that if certificate verification fails, at least one error
         * will be set, but it does not guarantee that all possible errors will be
         * set. Accordingly, you may not safely decide to ignore any particular type
         * of error.
         * 
         * For example, it would be incorrect to ignore {@link Gio.TlsCertificateFlags.EXPIRED} if
         * you want to allow expired certificates, because this could potentially be
         * the only error flag set even if other problems exist with the certificate.
         * @returns the validation flags.
         * @since 1.2.1
         */
        get_tls_validation_flags(): Gio.TlsCertificateFlags;

        /**
         * Get the tunnel session id the connection.
         * @returns returns a non-empty string if `conn` is being tunneled over HTTP.
         */
        get_tunnelid(): string | null;

        /**
         * Retrieve the URL of the other end of `conn`.
         * @returns The URL. This value remains valid until the connection is freed.
         */
        get_url(): RTSPUrl;

        /**
         * Get the file descriptor for writing.
         * @returns the file descriptor used for writing or NULL on error. The file descriptor remains valid until the connection is closed.
         */
        get_write_socket(): Gio.Socket | null;

        /**
         * Get the tunneling state of the connection.
         * @returns if `conn` is using HTTP tunneling.
         */
        is_tunneled(): boolean;

        /**
         * Calculate the next timeout for `conn`, storing the result in `timeout`.
         * @param timeout a timeout
         * @returns #GST_RTSP_OK.
         * @deprecated since 1.18
         */
        next_timeout(timeout: GLib.TimeVal): RTSPResult;

        /**
         * Calculate the next timeout for `conn`
         * @returns #the next timeout in microseconds
         * @since 1.18
         */
        next_timeout_usec(): number;

        /**
         * Wait up to the specified `timeout` for the connection to become available for
         * at least one of the operations specified in `events`. When the function returns
         * with #GST_RTSP_OK, `revents` will contain a bitmask of available operations on
         * `conn`.
         * 
         * `timeout` can be `null`, in which case this function might block forever.
         * 
         * This function can be cancelled with `gst_rtsp_connection_flush()`.
         * @param events a bitmask of {@link GstRtsp.RTSPEvent} flags to check
         * @param timeout a timeout
         * @returns #GST_RTSP_OK on success.
         * @deprecated since 1.18
         */
        poll(events: RTSPEvent, timeout: GLib.TimeVal): [RTSPResult, RTSPEvent];

        /**
         * Wait up to the specified `timeout` for the connection to become available for
         * at least one of the operations specified in `events`. When the function returns
         * with #GST_RTSP_OK, `revents` will contain a bitmask of available operations on
         * `conn`.
         * 
         * `timeout` can be 0, in which case this function might block forever.
         * 
         * This function can be cancelled with `gst_rtsp_connection_flush()`.
         * @param events a bitmask of {@link GstRtsp.RTSPEvent} flags to check
         * @param timeout a timeout in microseconds
         * @returns #GST_RTSP_OK on success.
         * @since 1.18
         */
        poll_usec(events: RTSPEvent, timeout: bigint | number): [RTSPResult, RTSPEvent];

        /**
         * Attempt to read `size` bytes into `data` from the connected `conn`, blocking up to
         * the specified `timeout`. `timeout` can be `null`, in which case this function
         * might block forever.
         * 
         * This function can be cancelled with `gst_rtsp_connection_flush()`.
         * @param data the data to read
         * @param timeout a timeout value or `null`
         * @returns #GST_RTSP_OK on success.
         * @deprecated since 1.18
         */
        read(data: Uint8Array | string, timeout: GLib.TimeVal): RTSPResult;

        /**
         * Attempt to read `size` bytes into `data` from the connected `conn`, blocking up to
         * the specified `timeout`. `timeout` can be 0, in which case this function
         * might block forever.
         * 
         * This function can be cancelled with `gst_rtsp_connection_flush()`.
         * @param data the data to read
         * @param timeout a timeout value in microseconds
         * @returns #GST_RTSP_OK on success.
         * @since 1.18
         */
        read_usec(data: Uint8Array | string, timeout: bigint | number): RTSPResult;

        /**
         * Attempt to read into `message` from the connected `conn`, blocking up to
         * the specified `timeout`. `timeout` can be `null`, in which case this function
         * might block forever.
         * 
         * This function can be cancelled with `gst_rtsp_connection_flush()`.
         * @param message the message to read
         * @param timeout a timeout value or `null`
         * @returns #GST_RTSP_OK on success.
         * @deprecated since 1.18
         */
        receive(message: RTSPMessage, timeout: GLib.TimeVal): RTSPResult;

        /**
         * Attempt to read into `message` from the connected `conn`, blocking up to
         * the specified `timeout`. `timeout` can be 0, in which case this function
         * might block forever.
         * 
         * This function can be cancelled with `gst_rtsp_connection_flush()`.
         * @param message the message to read
         * @param timeout a timeout value or 0
         * @returns #GST_RTSP_OK on success.
         * @since 1.18
         */
        receive_usec(message: RTSPMessage, timeout: bigint | number): RTSPResult;

        /**
         * Reset the timeout of `conn`.
         * @returns #GST_RTSP_OK.
         */
        reset_timeout(): RTSPResult;

        /**
         * Attempt to send `message` to the connected `conn`, blocking up to
         * the specified `timeout`. `timeout` can be `null`, in which case this function
         * might block forever.
         * 
         * This function can be cancelled with `gst_rtsp_connection_flush()`.
         * @param message the message to send
         * @param timeout a timeout value or `null`
         * @returns #GST_RTSP_OK on success.
         * @deprecated since 1.18
         */
        send(message: RTSPMessage, timeout: GLib.TimeVal): RTSPResult;

        /**
         * Attempt to send `messages` to the connected `conn`, blocking up to
         * the specified `timeout`. `timeout` can be `null`, in which case this function
         * might block forever.
         * 
         * This function can be cancelled with `gst_rtsp_connection_flush()`.
         * @param messages the messages to send
         * @param timeout a timeout value or `null`
         * @returns #GST_RTSP_OK on success.
         * @since 1.16
         * @deprecated since 1.18
         */
        send_messages(messages: RTSPMessage[], timeout: GLib.TimeVal): RTSPResult;

        /**
         * Attempt to send `messages` to the connected `conn`, blocking up to
         * the specified `timeout`. `timeout` can be 0, in which case this function
         * might block forever.
         * 
         * This function can be cancelled with `gst_rtsp_connection_flush()`.
         * @param messages the messages to send
         * @param timeout a timeout value in microseconds
         * @returns #GST_RTSP_OK on Since.
         * @since 1.18
         */
        send_messages_usec(messages: RTSPMessage[], timeout: bigint | number): RTSPResult;

        /**
         * Attempt to send `message` to the connected `conn`, blocking up to
         * the specified `timeout`. `timeout` can be 0, in which case this function
         * might block forever.
         * 
         * This function can be cancelled with `gst_rtsp_connection_flush()`.
         * @param message the message to send
         * @param timeout a timeout value in microseconds
         * @returns #GST_RTSP_OK on success.
         * @since 1.18
         */
        send_usec(message: RTSPMessage, timeout: bigint | number): RTSPResult;

        /**
         * Sets a custom accept-certificate function for checking certificates for
         * validity. This will directly map to {@link Gio.TlsConnection} 's "accept-certificate"
         * signal and be performed after the default checks of {@link GstRtsp.RTSPConnection}
         * (checking against the {@link Gio.TlsDatabase} with the given {@link Gio.TlsCertificateFlags})
         * have failed. If no {@link Gio.TlsDatabase} is set on this connection, only `func` will
         * be called.
         * @param func a {@link GstRtsp.RTSPConnectionAcceptCertificateFunc} to check certificates
         * @since 1.14
         */
        set_accept_certificate_func(func: RTSPConnectionAcceptCertificateFunc): void;

        /**
         * Configure `conn` for authentication mode `method` with `user` and `pass` as the
         * user and password respectively.
         * @param method authentication method
         * @param user the user
         * @param pass the password
         * @returns #GST_RTSP_OK.
         */
        set_auth(method: RTSPAuthMethod, user: string, pass: string): RTSPResult;

        /**
         * Setup `conn` with authentication directives. This is not necessary for
         * methods #GST_RTSP_AUTH_NONE and #GST_RTSP_AUTH_BASIC. For
         * #GST_RTSP_AUTH_DIGEST, directives should be taken from the digest challenge
         * in the WWW-Authenticate response header and can include realm, domain,
         * nonce, opaque, stale, algorithm, qop as per RFC2617.
         * @param param authentication directive
         * @param value value
         */
        set_auth_param(param: string, value: string): void;

        /**
         * Configure `conn` to use the specified Content-Length limit.
         * Both requests and responses are validated. If content-length is
         * exceeded, ENOMEM error will be returned.
         * @param limit Content-Length limit
         * @since 1.18
         */
        set_content_length_limit(limit: number): void;

        /**
         * By setting the HTTP mode to `true` the message parsing will support HTTP
         * messages in addition to the RTSP messages. It will also disable the
         * automatic handling of setting up an HTTP tunnel.
         * @param enable `true` to enable manual HTTP mode
         */
        set_http_mode(enable: boolean): void;

        /**
         * Set whether to ignore the x-server-ip-address header reply or not. If the
         * header is ignored, the original address will be used instead.
         * @param ignore `true` to ignore the x-server-ip-address header reply or `false` to          comply with it (`false` is the default).
         * @since 1.20
         */
        set_ignore_x_server_reply(ignore: boolean): void;

        /**
         * Set the IP address of the server.
         * @param ip an ip address
         */
        set_ip(ip: string): void;

        /**
         * Set the proxy host and port.
         * @param host the proxy host
         * @param port the proxy port
         * @returns #GST_RTSP_OK.
         */
        set_proxy(host: string, port: number): RTSPResult;

        /**
         * Configure `conn` to use the specified DSCP value.
         * @param qos_dscp DSCP value
         * @returns #GST_RTSP_OK on success.
         */
        set_qos_dscp(qos_dscp: number): RTSPResult;

        /**
         * Sets if the {@link GstRtsp.RTSPConnection} should remember the session id from the last
         * response received and force it onto any further requests.
         * 
         * The default value is `true`
         * @param remember `true` if the connection should remember the session id
         */
        set_remember_session_id(remember: boolean): void;

        /**
         * Sets the anchor certificate authorities database. This certificate
         * database will be used to verify the server's certificate in case it
         * can't be verified with the default certificate database first.
         * @param database a {@link Gio.TlsDatabase}
         * @since 1.4
         */
        set_tls_database(database: Gio.TlsDatabase | null): void;

        /**
         * Sets a {@link Gio.TlsInteraction} object to be used when the connection or certificate
         * database need to interact with the user. This will be used to prompt the
         * user for passwords where necessary.
         * @param interaction a {@link Gio.TlsInteraction}
         * @since 1.6
         */
        set_tls_interaction(interaction: Gio.TlsInteraction | null): void;

        /**
         * Sets the TLS validation flags to be used to verify the peer
         * certificate when a TLS connection is established.
         * 
         * GLib guarantees that if certificate verification fails, at least one error
         * will be set, but it does not guarantee that all possible errors will be
         * set. Accordingly, you may not safely decide to ignore any particular type
         * of error.
         * 
         * For example, it would be incorrect to mask {@link Gio.TlsCertificateFlags.EXPIRED} if
         * you want to allow expired certificates, because this could potentially be
         * the only error flag set even if other problems exist with the certificate.
         * @param flags the validation flags.
         * @returns TRUE if the validation flags are set correctly, or FALSE if `conn` is NULL or is not a TLS connection.
         * @since 1.2.1
         */
        set_tls_validation_flags(flags: Gio.TlsCertificateFlags): boolean;

        /**
         * Set the HTTP tunneling state of the connection. This must be configured before
         * the `conn` is connected.
         * @param tunneled the new state
         */
        set_tunneled(tunneled: boolean): void;

        /**
         * Attempt to write `size` bytes of `data` to the connected `conn`, blocking up to
         * the specified `timeout`. `timeout` can be `null`, in which case this function
         * might block forever.
         * 
         * This function can be cancelled with `gst_rtsp_connection_flush()`.
         * @param data the data to write
         * @param timeout a timeout value or `null`
         * @returns #GST_RTSP_OK on success.
         * @deprecated since 1.18
         */
        write(data: Uint8Array | string, timeout: GLib.TimeVal): RTSPResult;

        /**
         * Attempt to write `size` bytes of `data` to the connected `conn`, blocking up to
         * the specified `timeout`. `timeout` can be 0, in which case this function
         * might block forever.
         * 
         * This function can be cancelled with `gst_rtsp_connection_flush()`.
         * @param data the data to write
         * @param timeout a timeout value or 0
         * @returns #GST_RTSP_OK on success.
         * @since 1.18
         */
        write_usec(data: Uint8Array | string, timeout: bigint | number): RTSPResult;
    }


    /**
     * @gir-type Alias
     */
    type RTSPExtensionInterface = typeof RTSPExtension;

    /**
     * Provides methods for creating and parsing request, response and data messages.
     * @gir-type Struct
     */
    class RTSPMessage {
        static $gtype: GObject.GType<RTSPMessage>;

        // Fields
        type: RTSPMsgType;

        // Methods
        /**
         * Add a header with key `field` and `value` to `msg`. This function takes a copy
         * of `value`.
         * @param field a {@link GstRtsp.RTSPHeaderField}
         * @param value the value of the header
         * @returns a {@link GstRtsp.RTSPResult}.
         */
        add_header(field: RTSPHeaderField, value: string): RTSPResult;

        /**
         * Add a header with key `header` and `value` to `msg`. This function takes a copy
         * of `value`.
         * @param header header string
         * @param value the value of the header
         * @returns a {@link GstRtsp.RTSPResult}.
         * @since 1.6
         */
        add_header_by_name(header: string, value: string): RTSPResult;

        /**
         * Append the currently configured headers in `msg` to the {@link GLib.String} `str` suitable
         * for transmission.
         * @param str a string
         * @returns #GST_RTSP_OK.
         */
        append_headers(str: GLib.String): RTSPResult;

        /**
         * Allocate a new copy of `msg` and store the result in `copy`. The value in
         * `copy` should be release with gst_rtsp_message_free function.
         * @returns a {@link GstRtsp.RTSPResult}
         * @since 1.14
         */
        copy(): [RTSPResult, RTSPMessage | null];

        /**
         * Dump the contents of `msg` to stdout.
         * @returns #GST_RTSP_OK.
         */
        dump(): RTSPResult;

        /**
         * Free the memory used by `msg`.
         * @returns a {@link GstRtsp.RTSPResult}.
         */
        free(): RTSPResult;

        /**
         * Get the body of `msg`. `data` remains valid for as long as `msg` is valid and
         * unchanged.
         * 
         * If the message body was set as a {@link Gst.Buffer} before this will cause the data
         * to be copied and stored in the message. The {@link Gst.Buffer} will no longer be
         * kept in the message.
         * @returns #GST_RTSP_OK.
         */
        get_body(): [RTSPResult, Uint8Array];

        /**
         * Get the body of `msg`. `buffer` remains valid for as long as `msg` is valid and
         * unchanged.
         * 
         * If body data was set from raw memory instead of a {@link Gst.Buffer} this function
         * will always return `null`. The caller can check if there is a body buffer by
         * calling `gst_rtsp_message_has_body_buffer()`.
         * @returns #GST_RTSP_OK.
         * @since 1.16
         */
        get_body_buffer(): [RTSPResult, Gst.Buffer];

        /**
         * Get the `indx` header value with key `field` from `msg`. The result in `value`
         * stays valid as long as it remains present in `msg`.
         * @param field a {@link GstRtsp.RTSPHeaderField}
         * @param indx the index of the header
         * @returns #GST_RTSP_OK when `field` was found, #GST_RTSP_ENOTIMPL if the key was not found.
         */
        get_header(field: RTSPHeaderField, indx: number): [RTSPResult, string];

        /**
         * Get the `index` header value with key `header` from `msg`. The result in `value`
         * stays valid as long as it remains present in `msg`.
         * @param header a {@link GstRtsp.RTSPHeaderField}
         * @param index the index of the header
         * @returns #GST_RTSP_OK when `field` was found, #GST_RTSP_ENOTIMPL if the key was not found.
         * @since 1.6
         */
        get_header_by_name(header: string, index: number): [RTSPResult, string];

        /**
         * Get the message type of `msg`.
         * @returns the message type.
         */
        get_type(): RTSPMsgType;

        /**
         * Checks if `msg` has a body and the body is stored as {@link Gst.Buffer}.
         * @returns `true` if `msg` has a body and it's stored as {@link Gst.Buffer}, `false` otherwise.
         * @since 1.16
         */
        has_body_buffer(): boolean;

        /**
         * Initialize `msg`. This function is mostly used when `msg` is allocated on the
         * stack. The reverse operation of this is `gst_rtsp_message_unset()`.
         * @returns a {@link GstRtsp.RTSPResult}.
         */
        init(): RTSPResult;

        /**
         * Initialize a new data {@link GstRtsp.RTSPMessage} for `channel`.
         * @param channel a channel
         * @returns a {@link GstRtsp.RTSPResult}.
         */
        init_data(channel: number): RTSPResult;

        /**
         * Initialize `msg` as a request message with `method` and `uri`. To clear `msg`
         * again, use `gst_rtsp_message_unset()`.
         * @param method the request method to use
         * @param uri the uri of the request
         * @returns a {@link GstRtsp.RTSPResult}.
         */
        init_request(method: RTSPMethod, uri: string): RTSPResult;

        /**
         * Initialize `msg` with `code` and `reason`.
         * 
         * When `reason` is `null`, the default reason for `code` will be used.
         * 
         * When `request` is not `null`, the relevant headers will be copied to the new
         * response message.
         * @param code the status code
         * @param reason the status reason or `null`
         * @param request the request that triggered the response or `null`
         * @returns a {@link GstRtsp.RTSPResult}.
         */
        init_response(code: RTSPStatusCode, reason: string | null, request: RTSPMessage | null): RTSPResult;

        /**
         * Parses the credentials given in a WWW-Authenticate or Authorization header.
         * @param field a {@link GstRtsp.RTSPHeaderField}
         * @returns `null`-terminated array of GstRTSPAuthCredential or `null`.
         * @since 1.12
         */
        parse_auth_credentials(field: RTSPHeaderField): RTSPAuthCredential[];

        /**
         * Parse the data message `msg` and store the channel in `channel`.
         * @returns a {@link GstRtsp.RTSPResult}.
         */
        parse_data(): [RTSPResult, number];

        /**
         * Parse the request message `msg` and store the values `method`, `uri` and
         * `version`. The result locations can be `null` if one is not interested in its
         * value.
         * 
         * `uri` remains valid for as long as `msg` is valid and unchanged.
         * @returns a {@link GstRtsp.RTSPResult}.
         */
        parse_request(): [RTSPResult, RTSPMethod | null, string, RTSPVersion | null];

        /**
         * Parse the response message `msg` and store the values `code`, `reason` and
         * `version`. The result locations can be `null` if one is not interested in its
         * value.
         * 
         * `reason` remains valid for as long as `msg` is valid and unchanged.
         * @returns a {@link GstRtsp.RTSPResult}.
         */
        parse_response(): [RTSPResult, RTSPStatusCode | null, string, RTSPVersion | null];

        /**
         * Remove the `indx` header with key `field` from `msg`. If `indx` equals -1, all
         * headers will be removed.
         * @param field a {@link GstRtsp.RTSPHeaderField}
         * @param indx the index of the header
         * @returns a {@link GstRtsp.RTSPResult}.
         */
        remove_header(field: RTSPHeaderField, indx: number): RTSPResult;

        /**
         * Remove the `index` header with key `header` from `msg`. If `index` equals -1,
         * all matching headers will be removed.
         * @param header the header string
         * @param index the index of the header
         * @returns a {@link GstRtsp.RTSPResult}
         * @since 1.6
         */
        remove_header_by_name(header: string, index: number): RTSPResult;

        /**
         * Set the body of `msg` to a copy of `data`. Any existing body or body buffer
         * will be replaced by the new body.
         * @param data the data
         * @returns #GST_RTSP_OK.
         */
        set_body(data: Uint8Array | string): RTSPResult;

        /**
         * Set the body of `msg` to `buffer`. Any existing body or body buffer
         * will be replaced by the new body.
         * @param buffer a {@link Gst.Buffer}
         * @returns #GST_RTSP_OK.
         * @since 1.16
         */
        set_body_buffer(buffer: Gst.Buffer): RTSPResult;

        /**
         * Take the body of `msg` and store it in `data` and `size`. After this method,
         * the body and size of `msg` will be set to `null` and 0 respectively.
         * @returns #GST_RTSP_OK.
         */
        steal_body(): [RTSPResult, Uint8Array];

        /**
         * Take the body of `msg` and store it in `buffer`. After this method,
         * the body and size of `msg` will be set to `null` and 0 respectively.
         * 
         * If body data was set from raw memory instead of a {@link Gst.Buffer} this function
         * will always return `null`. The caller can check if there is a body buffer by
         * calling `gst_rtsp_message_has_body_buffer()`.
         * @returns #GST_RTSP_OK.
         * @since 1.16
         */
        steal_body_buffer(): [RTSPResult, Gst.Buffer];

        /**
         * Set the body of `msg` to `data` and `size`. This method takes ownership of
         * `data`. Any existing body or body buffer will be replaced by the new body.
         * @param data the data
         * @returns #GST_RTSP_OK.
         */
        take_body(data: Uint8Array | string): RTSPResult;

        /**
         * Set the body of `msg` to `buffer`. This method takes ownership of `buffer`.
         * Any existing body or body buffer will be replaced by the new body.
         * @param buffer a {@link Gst.Buffer}
         * @returns #GST_RTSP_OK.
         * @since 1.16
         */
        take_body_buffer(buffer: Gst.Buffer): RTSPResult;

        /**
         * Add a header with key `field` and `value` to `msg`. This function takes
         * ownership of `value`.
         * @param field a {@link GstRtsp.RTSPHeaderField}
         * @param value the value of the header
         * @returns a {@link GstRtsp.RTSPResult}.
         */
        take_header(field: RTSPHeaderField, value: string): RTSPResult;

        /**
         * Add a header with key `header` and `value` to `msg`. This function takes
         * ownership of `value`, but not of `header`.
         * @param header a header string
         * @param value the value of the header
         * @returns a {@link GstRtsp.RTSPResult}.
         * @since 1.6
         */
        take_header_by_name(header: string, value: string): RTSPResult;

        /**
         * Unset the contents of `msg` so that it becomes an uninitialized
         * {@link GstRtsp.RTSPMessage} again. This function is mostly used in combination with
         * `gst_rtsp_message_init_request()`, `gst_rtsp_message_init_response()` and
         * `gst_rtsp_message_init_data()` on stack allocated {@link GstRtsp.RTSPMessage} structures.
         * @returns #GST_RTSP_OK.
         */
        unset(): RTSPResult;
    }


    /**
     * Provides helper functions to deal with time ranges.
     * @gir-type Struct
     */
    class RTSPRange {
        static $gtype: GObject.GType<RTSPRange>;

        // Fields
        min: number;

        max: number;

        // Constructors

        constructor(properties?: Partial<{
            min: number;
            max: number;
        }>);

        // Static methods
        /**
         * Converts the range in-place between different types of units.
         * Ranges containing the special value #GST_RTSP_TIME_NOW can not be
         * converted as these are only valid for #GST_RTSP_RANGE_NPT.
         * @param range a {@link GstRtsp.RTSPTimeRange}
         * @param unit the unit to convert the range into
         */
        static convert_units(range: RTSPTimeRange, unit: RTSPRangeUnit): boolean;

        /**
         * Free the memory allocated by `range`.
         * @param range a {@link GstRtsp.RTSPTimeRange}
         */
        static free(range: RTSPTimeRange): void;

        /**
         * Retrieve the minimum and maximum values from `range` converted to
         * {@link Gst.ClockTime} in `min` and `max`.
         * 
         * A value of `GST_CLOCK_TIME_NONE` will be used to signal #GST_RTSP_TIME_NOW
         * and #GST_RTSP_TIME_END for `min` and `max` respectively.
         * 
         * UTC times will be converted to nanoseconds since 1900.
         * @param range a {@link GstRtsp.RTSPTimeRange}
         * @since 1.2
         */
        static get_times(range: RTSPTimeRange): [boolean, Gst.ClockTime, Gst.ClockTime];

        /**
         * Parse `rangestr` to a {@link GstRtsp.RTSPTimeRange}.
         * @param rangestr a range string to parse
         */
        static parse(rangestr: string): [RTSPResult, RTSPTimeRange];

        /**
         * Convert `range` into a string representation.
         * @param range a {@link GstRtsp.RTSPTimeRange}
         */
        static to_string(range: RTSPTimeRange): string;
    }


    /**
     * A time indication.
     * @gir-type Struct
     */
    class RTSPTime {
        static $gtype: GObject.GType<RTSPTime>;

        // Fields
        type: RTSPTimeType;

        seconds: number;
    }


    /**
     * Extra fields for a time indication.
     * @gir-type Struct
     * @since 1.2
     */
    class RTSPTime2 {
        static $gtype: GObject.GType<RTSPTime2>;

        // Fields
        frames: number;

        year: number;

        month: number;

        day: number;

        // Constructors

        constructor(properties?: Partial<{
            frames: number;
            year: number;
            month: number;
            day: number;
        }>);
    }


    /**
     * A time range.
     * @gir-type Struct
     */
    class RTSPTimeRange {
        static $gtype: GObject.GType<RTSPTimeRange>;

        // Fields
        unit: RTSPRangeUnit;

        min2: RTSPTime2;

        max2: RTSPTime2;
    }


    /**
     * Provides helper functions to deal with RTSP transport strings.
     * @gir-type Struct
     */
    class RTSPTransport {
        static $gtype: GObject.GType<RTSPTransport>;

        // Fields
        trans: RTSPTransMode;

        profile: RTSPProfile;

        lower_transport: RTSPLowerTrans;

        destination: string;

        source: string;

        layers: number;

        mode_play: boolean;

        mode_record: boolean;

        append: boolean;

        interleaved: RTSPRange;

        ttl: number;

        port: RTSPRange;

        client_port: RTSPRange;

        server_port: RTSPRange;

        ssrc: number;

        // Static methods
        /**
         * Get the {@link Gst.Element} that can handle the buffers transported over `trans`.
         * 
         * It is possible that there are several managers available, use `option` to
         * selected one.
         * 
         * `manager` will contain an element name or `null` when no manager is
         * needed/available for `trans`.
         * @param trans a {@link GstRtsp.RTSPTransMode}
         * @param option option index.
         */
        static get_manager(trans: RTSPTransMode, option: number): [RTSPResult, string];

        /**
         * Get the mime type of the transport mode `trans`. This mime type is typically
         * used to generate {@link Gst.Caps} events.
         * @param trans a {@link GstRtsp.RTSPTransMode}
         * @deprecated This functions only deals with the GstRTSPTransMode and only    returns the mime type for #GST_RTSP_PROFILE_AVP. Use    `gst_rtsp_transport_get_media_type()` instead.
         */
        static get_mime(trans: RTSPTransMode): [RTSPResult, string];

        /**
         * Initialize `transport` so that it can be used.
         */
        static init(): [RTSPResult, RTSPTransport];

        /**
         * Allocate a new initialized {@link GstRtsp.RTSPTransport}. Use `gst_rtsp_transport_free()`
         * after usage.
         */
        static ["new"](): [RTSPResult, RTSPTransport];

        /**
         * Parse the RTSP transport string `str` into `transport`.
         * @param str a transport string
         */
        static parse(str: string): [RTSPResult, RTSPTransport];

        // Methods
        /**
         * Convert `transport` into a string that can be used to signal the transport in
         * an RTSP SETUP response.
         * @returns a string describing the RTSP transport or `null` when the transport is invalid.
         */
        as_text(): string | null;

        /**
         * Free the memory used by `transport`.
         * @returns #GST_RTSP_OK.
         */
        free(): RTSPResult;

        /**
         * Get the media type of `transport`. This media type is typically
         * used to generate {@link Gst.Caps} events.
         * @returns #GST_RTSP_OK.
         * @since 1.4
         */
        get_media_type(): [RTSPResult, string];
    }


    /**
     * Provides helper functions to handle RTSP urls.
     * @gir-type Struct
     */
    class RTSPUrl {
        static $gtype: GObject.GType<RTSPUrl>;

        // Fields
        transports: RTSPLowerTrans;

        family: RTSPFamily;

        user: string;

        passwd: string;

        host: string;

        port: number;

        abspath: string;

        query: string;

        // Static methods
        /**
         * Parse the RTSP `urlstr` into a newly allocated {@link GstRtsp.RTSPUrl}. Free after usage
         * with `gst_rtsp_url_free()`.
         * @param urlstr the url string to parse
         */
        static parse(urlstr: string): [RTSPResult, RTSPUrl | null];

        // Methods
        /**
         * Make a copy of `url`.
         * @returns a copy of `url`. Free with gst_rtsp_url_free () after usage.
         */
        copy(): RTSPUrl;

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
         * @returns `null`-terminated array of URL components. Free with `g_strfreev()` when no longer needed.
         */
        decode_path_components(): string[];

        /**
         * Free the memory used by `url`.
         */
        free(): void;

        /**
         * Get the port number of `url`.
         * @returns #GST_RTSP_OK.
         */
        get_port(): [RTSPResult, number];

        /**
         * Get a newly allocated string describing the request URI for `url`.
         * @returns a string with the request URI. `g_free()` after usage.
         */
        get_request_uri(): string;

        /**
         * Get a newly allocated string describing the request URI for `url`
         * combined with the control path for `control_path`
         * @param control_path an RTSP aggregate control path
         * @returns a string with the request URI combined with the control path. `g_free()` after usage.
         * @since 1.18
         */
        get_request_uri_with_control(control_path: string): string;

        /**
         * Set the port number in `url` to `port`.
         * @param port the port
         * @returns #GST_RTSP_OK.
         */
        set_port(port: number): RTSPResult;
    }


    /**
     * Opaque RTSP watch object that can be used for asynchronous RTSP
     * operations.
     * @gir-type Struct
     */
    abstract class RTSPWatch {
        static $gtype: GObject.GType<RTSPWatch>;

        // Methods
        /**
         * Adds a {@link GstRtsp.RTSPWatch} to a context so that it will be executed within that context.
         * @param context a GMainContext (if NULL, the default context will be used)
         * @returns the ID (greater than 0) for the watch within the GMainContext.
         */
        attach(context: GLib.MainContext | null): number;

        /**
         * Get the maximum amount of bytes and messages that will be queued in `watch`.
         * See `gst_rtsp_watch_set_send_backlog()`.
         * @since 1.2
         */
        get_send_backlog(): [number, number];

        /**
         * Reset `watch`, this is usually called after `gst_rtsp_connection_do_tunnel()`
         * when the file descriptors of the connection might have changed.
         */
        reset(): void;

        /**
         * Send a `message` using the connection of the `watch`. If it cannot be sent
         * immediately, it will be queued for transmission in `watch`. The contents of
         * `message` will then be serialized and transmitted when the connection of the
         * `watch` becomes writable. In case the `message` is queued, the ID returned in
         * `id` will be non-zero and used as the ID argument in the message_sent
         * callback.
         * @param message a {@link GstRtsp.RTSPMessage}
         * @returns #GST_RTSP_OK on success.
         */
        send_message(message: RTSPMessage): [RTSPResult, number];

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
         * @since 1.16
         */
        send_messages(messages: RTSPMessage[]): [RTSPResult, number];

        /**
         * When `flushing` is `true`, abort a call to `gst_rtsp_watch_wait_backlog()`
         * and make sure `gst_rtsp_watch_write_data()` returns immediately with
         * #GST_RTSP_EINTR. And empty the queue.
         * @param flushing new flushing state
         * @since 1.4
         */
        set_flushing(flushing: boolean): void;

        /**
         * Set the maximum amount of bytes and messages that will be queued in `watch`.
         * When the maximum amounts are exceeded, `gst_rtsp_watch_write_data()` and
         * `gst_rtsp_watch_send_message()` will return #GST_RTSP_ENOMEM.
         * 
         * A value of 0 for `bytes` or `messages` means no limits.
         * @param bytes maximum bytes
         * @param messages maximum messages
         * @since 1.2
         */
        set_send_backlog(bytes: bigint | number, messages: number): void;

        /**
         * Decreases the reference count of `watch` by one. If the resulting reference
         * count is zero the watch and associated memory will be destroyed.
         */
        unref(): void;

        /**
         * Wait until there is place in the backlog queue, `timeout` is reached
         * or `watch` is set to flushing.
         * 
         * If `timeout` is `null` this function can block forever. If `timeout`
         * contains a valid timeout, this function will return {@link GstRtsp.RTSPResult.ETIMEOUT}
         * after the timeout expired.
         * 
         * The typically use of this function is when gst_rtsp_watch_write_data
         * returns {@link GstRtsp.RTSPResult.ENOMEM}. The caller then calls this function to wait for
         * free space in the backlog queue and try again.
         * @param timeout a GTimeVal timeout
         * @returns {@link GstRtsp.RTSPResult.OK} when if there is room in queue.          {@link GstRtsp.RTSPResult.ETIMEOUT} when `timeout` was reached.          {@link GstRtsp.RTSPResult.EINTR} when `watch` is flushing          {@link GstRtsp.RTSPResult.EINVAL} when called with invalid parameters.
         * @since 1.4
         * @deprecated since 1.18
         */
        wait_backlog(timeout: GLib.TimeVal): RTSPResult;

        /**
         * Wait until there is place in the backlog queue, `timeout` is reached
         * or `watch` is set to flushing.
         * 
         * If `timeout` is 0 this function can block forever. If `timeout`
         * contains a valid timeout, this function will return {@link GstRtsp.RTSPResult.ETIMEOUT}
         * after the timeout expired.
         * 
         * The typically use of this function is when gst_rtsp_watch_write_data
         * returns {@link GstRtsp.RTSPResult.ENOMEM}. The caller then calls this function to wait for
         * free space in the backlog queue and try again.
         * @param timeout a timeout in microseconds
         * @returns {@link GstRtsp.RTSPResult.OK} when if there is room in queue.          {@link GstRtsp.RTSPResult.ETIMEOUT} when `timeout` was reached.          {@link GstRtsp.RTSPResult.EINTR} when `watch` is flushing          {@link GstRtsp.RTSPResult.EINVAL} when called with invalid parameters.
         * @since 1.18
         */
        wait_backlog_usec(timeout: bigint | number): RTSPResult;

        /**
         * Write `data` using the connection of the `watch`. If it cannot be sent
         * immediately, it will be queued for transmission in `watch`. The contents of
         * `message` will then be serialized and transmitted when the connection of the
         * `watch` becomes writable. In case the `message` is queued, the ID returned in
         * `id` will be non-zero and used as the ID argument in the message_sent
         * callback.
         * 
         * This function will take ownership of `data` and `g_free()` it after use.
         * 
         * If the amount of queued data exceeds the limits set with
         * `gst_rtsp_watch_set_send_backlog()`, this function will return
         * #GST_RTSP_ENOMEM.
         * @param data the data to queue
         * @returns #GST_RTSP_OK on success. #GST_RTSP_ENOMEM when the backlog limits are reached. #GST_RTSP_EINTR when `watch` was flushing.
         */
        write_data(data: Uint8Array | string): [RTSPResult, number];
    }


    /**
     * Callback functions from a {@link GstRtsp.RTSPWatch}.
     * @gir-type Struct
     */
    class RTSPWatchFuncs {
        static $gtype: GObject.GType<RTSPWatchFuncs>;

        // Constructors
        constructor(properties?: Partial<{}>);
    }


    namespace RTSPExtension {
        // Signal signatures
        interface SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            send: (object: null, p0: null) => RTSPResult;
        }
        /**
         * Interface for implementing RTSPExtension.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param req 
             * @param resp 
             * @virtual
             */
            vfunc_after_send(req: RTSPMessage, resp: RTSPMessage): RTSPResult;

            /**
             * @param req 
             * @virtual
             */
            vfunc_before_send(req: RTSPMessage): RTSPResult;

            /**
             * @param caps 
             * @virtual
             */
            vfunc_configure_stream(caps: Gst.Caps): boolean;

            /**
             * @param resp 
             * @virtual
             */
            vfunc_detect_server(resp: RTSPMessage): boolean;

            /**
             * @param protocols 
             * @param transport 
             * @virtual
             */
            vfunc_get_transports(protocols: RTSPLowerTrans, transport: string): RTSPResult;

            /**
             * @param sdp 
             * @param s 
             * @virtual
             */
            vfunc_parse_sdp(sdp: GstSdp.SDPMessage, s: Gst.Structure): RTSPResult;

            /**
             * @param req 
             * @virtual
             */
            vfunc_receive_request(req: RTSPMessage): RTSPResult;

            /**
             * @param req 
             * @param resp 
             * @virtual
             */
            vfunc_send(req: RTSPMessage, resp: RTSPMessage): RTSPResult;

            /**
             * @param media 
             * @virtual
             */
            vfunc_setup_media(media: GstSdp.SDPMedia): RTSPResult;

            /**
             * @param url 
             * @virtual
             */
            vfunc_stream_select(url: RTSPUrl): RTSPResult;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface RTSPExtensionNamespace {
        $gtype: GObject.GType<RTSPExtension>;
        prototype: RTSPExtension;
    }
    /**
     * This interface is implemented e.g. by the Windows Media Streaming RTSP
     *  exentension (rtspwms) and the RealMedia RTSP extension (rtspreal).
     * @gir-type Interface
     */
    interface RTSPExtension extends GObject.Object, RTSPExtension.Interface {

        // Methods
        /**
         * @param req 
         * @param resp 
         */
        after_send(req: RTSPMessage, resp: RTSPMessage): RTSPResult;

        /**
         * @param req 
         */
        before_send(req: RTSPMessage): RTSPResult;

        /**
         * @param caps 
         */
        configure_stream(caps: Gst.Caps): boolean;

        /**
         * @param resp 
         */
        detect_server(resp: RTSPMessage): boolean;

        /**
         * @param protocols 
         * @param transport 
         */
        get_transports(protocols: RTSPLowerTrans, transport: string): RTSPResult;

        /**
         * @param sdp 
         * @param s 
         */
        parse_sdp(sdp: GstSdp.SDPMessage, s: Gst.Structure): RTSPResult;

        /**
         * @param req 
         */
        receive_request(req: RTSPMessage): RTSPResult;

        /**
         * @param req 
         * @param resp 
         */
        send(req: RTSPMessage, resp: RTSPMessage): RTSPResult;

        /**
         * @param media 
         */
        setup_media(media: GstSdp.SDPMedia): RTSPResult;

        /**
         * @param url 
         */
        stream_select(url: RTSPUrl): RTSPResult;
    }


    export const RTSPExtension: RTSPExtensionNamespace & {
        new (): RTSPExtension; // This allows `obj instanceof RTSPExtension`
    };

    /**
     * Name of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
     */
    const __name__: string;

    /**
     * Version of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
     */
    const __version__: string;
}

export default GstRtsp;

// END
