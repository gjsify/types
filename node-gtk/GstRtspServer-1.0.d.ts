// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstRtspServer-1.0
 */

import type GstRtsp from './GstRtsp-1.0';
import type GstSdp from './GstSdp-1.0';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';
import type GstBase from './GstBase-1.0';
import type Gio from './Gio-2.0';
import type GstNet from './GstNet-1.0';

export namespace GstRtspServer {

/**
 * Result codes from RTSP address pool functions.
 */
enum RTSPAddressPoolResult {
    /**
     * no error
     */
    OK,
    /**
     * invalid arguments were provided to a function
     */
    EINVAL,
    /**
     * the addres has already been reserved
     */
    ERESERVED,
    /**
     * the address is not in the pool
     */
    ERANGE,
    /**
     * last error
     */
    ELAST,
}
/**
 * Possible return values for gst_rtsp_session_pool_filter().
 */
enum RTSPFilterResult {
    /**
     * Remove session
     */
    REMOVE,
    /**
     * Keep session in the pool
     */
    KEEP,
    /**
     * Ref session in the result list
     */
    REF,
}
/**
 * The state of the media pipeline.
 */
enum RTSPMediaStatus {
    /**
     * media pipeline not prerolled
     */
    UNPREPARED,
    /**
     * media pipeline is busy doing a clean
     *                                     shutdown.
     */
    UNPREPARING,
    /**
     * media pipeline is prerolling
     */
    PREPARING,
    /**
     * media pipeline is prerolled
     */
    PREPARED,
    /**
     * media is suspended
     */
    SUSPENDED,
    /**
     * media pipeline is in error
     */
    ERROR,
}
/**
 * Whether the clock and possibly RTP/clock offset should be published according to RFC7273.
 */
enum RTSPPublishClockMode {
    /**
     * Publish nothing
     */
    NONE,
    /**
     * Publish the clock but not the offset
     */
    CLOCK,
    /**
     * Publish the clock and offset
     */
    CLOCK_AND_OFFSET,
}
/**
 * The suspend mode of the media pipeline. A media pipeline is suspended right
 * after creating the SDP and when the client performs a PAUSED request.
 */
enum RTSPSuspendMode {
    /**
     * Media is not suspended
     */
    NONE,
    /**
     * Media is PAUSED in suspend
     */
    PAUSE,
    /**
     * The media is set to NULL when suspended
     */
    RESET,
}
/**
 * Different thread types
 */
enum RTSPThreadType {
    /**
     * a thread to handle the client communication
     */
    CLIENT,
    /**
     * a thread to handle media
     */
    MEDIA,
}
/**
 * Flags used to control allocation of addresses
 * @bitfield 
 */
enum RTSPAddressFlags {
    /**
     * no flags
     */
    NONE,
    /**
     * an IPv4 address
     */
    IPV4,
    /**
     * and IPv6 address
     */
    IPV6,
    /**
     * address with an even port
     */
    EVEN_PORT,
    /**
     * a multicast address
     */
    MULTICAST,
    /**
     * a unicast address
     */
    UNICAST,
}
/**
 * The supported modes of the media.
 * @bitfield 
 */
enum RTSPTransportMode {
    /**
     * Transport supports PLAY mode
     */
    PLAY,
    /**
     * Transport supports RECORD mode
     */
    RECORD,
}
/**
 * Used with gst_rtsp_address_pool_add_range() to bind to all
 * IPv4 addresses
 */
const RTSP_ADDRESS_POOL_ANY_IPV4: string
/**
 * Used with gst_rtsp_address_pool_add_range() to bind to all
 * IPv6 addresses
 */
const RTSP_ADDRESS_POOL_ANY_IPV6: string
/**
 * Check a new connection
 */
const RTSP_AUTH_CHECK_CONNECT: string
/**
 * Check if access is allowed to a factory.
 * When access is not allowed an 404 Not Found is sent in the response.
 */
const RTSP_AUTH_CHECK_MEDIA_FACTORY_ACCESS: string
/**
 * Check if media can be constructed from a media factory
 * A response should be sent on error.
 */
const RTSP_AUTH_CHECK_MEDIA_FACTORY_CONSTRUCT: string
/**
 * Check if the client can specify TTL, destination and
 * port pair in multicast. No response is sent when the check returns
 * %FALSE.
 */
const RTSP_AUTH_CHECK_TRANSPORT_CLIENT_SETTINGS: string
/**
 * Check the URL and methods
 */
const RTSP_AUTH_CHECK_URL: string
const RTSP_ONVIF_BACKCHANNEL_REQUIREMENT: string
const RTSP_ONVIF_REPLAY_REQUIREMENT: string
/**
 * G_TYPE_BOOLEAN, %TRUE if the media can be accessed, %FALSE will
 * return a 404 Not Found error when trying to access the media.
 */
const RTSP_PERM_MEDIA_FACTORY_ACCESS: string
/**
 * G_TYPE_BOOLEAN, %TRUE if the media can be constructed, %FALSE will
 * return a 404 Not Found error when trying to access the media.
 */
const RTSP_PERM_MEDIA_FACTORY_CONSTRUCT: string
/**
 * G_TYPE_STRING, the role to use when dealing with media factories
 * 
 * The default #GstRTSPAuth object uses this string in the token to find the
 * role of the media factory. It will then retrieve the #GstRTSPPermissions of
 * the media factory and retrieve the role with the same name.
 */
const RTSP_TOKEN_MEDIA_FACTORY_ROLE: string
/**
 * G_TYPE_BOOLEAN, %TRUE if the client can specify TTL, destination and
 *     port pair in multicast.
 */
const RTSP_TOKEN_TRANSPORT_CLIENT_SETTINGS: string
function rtspContextGetType(): GObject.GType
/**
 * Get parameters (not implemented yet)
 * @param client a #GstRTSPClient
 * @param ctx a #GstRTSPContext
 */
function rtspParamsGet(client: RTSPClient, ctx: RTSPContext): GstRtsp.RTSPResult
/**
 * Set parameters (not implemented yet)
 * @param client a #GstRTSPClient
 * @param ctx a #GstRTSPContext
 */
function rtspParamsSet(client: RTSPClient, ctx: RTSPContext): GstRtsp.RTSPResult
/**
 * Add `media` specific info to `sdp`. `info` is used to configure the connection
 * information in the SDP.
 * @param sdp a #GstSDPMessage
 * @param info a #GstSDPInfo
 * @param media a #GstRTSPMedia
 */
function rtspSdpFromMedia(sdp: GstSdp.SDPMessage, info: SDPInfo, media: RTSPMedia): boolean
/**
 * Add info from `stream` to `sdp`.
 * @param sdp a #GstSDPMessage
 * @param info a #GstSDPInfo
 * @param stream a #GstRTSPStream
 */
function rtspSdpFromStream(sdp: GstSdp.SDPMessage, info: SDPInfo, stream: RTSPStream): boolean
/**
 * Creates a #GstSDPMedia from the parameters and stores it in `sdp`.
 * @param sdp a #GstRTSPMessage
 * @param info a #GstSDPInfo
 * @param stream a #GstRTSPStream
 * @param caps a #GstCaps
 * @param profile a #GstRTSPProfile
 */
function rtspSdpMakeMedia(sdp: GstSdp.SDPMessage, info: SDPInfo, stream: RTSPStream, caps: Gst.Caps, profile: GstRtsp.RTSPProfile): boolean
/**
 * This callback is called when `client` wants to send `message`. When `close` is
 * %TRUE, the connection should be closed when the message has been sent.
 * @callback 
 * @param client a #GstRTSPClient
 * @param message a #GstRTSPMessage
 * @param close close the connection
 */
interface RTSPClientSendFunc {
    (client: RTSPClient, message: GstRtsp.RTSPMessage, close: boolean): boolean
}
/**
 * This callback is called when `client` wants to send `messages`. When `close` is
 * %TRUE, the connection should be closed when the message has been sent.
 * @callback 
 * @param client a #GstRTSPClient
 * @param messages #GstRTSPMessage
 * @param nMessages number of messages
 * @param close close the connection
 */
interface RTSPClientSendMessagesFunc {
    (client: RTSPClient, messages: GstRtsp.RTSPMessage, nMessages: number, close: boolean): boolean
}
/**
 * This function will be called by the gst_rtsp_client_session_filter(). An
 * implementation should return a value of #GstRTSPFilterResult.
 * 
 * When this function returns #GST_RTSP_FILTER_REMOVE, `sess` will be removed
 * from `client`.
 * 
 * A return value of #GST_RTSP_FILTER_KEEP will leave `sess` untouched in
 * `client`.
 * 
 * A value of #GST_RTSP_FILTER_REF will add `sess` to the result #GList of
 * gst_rtsp_client_session_filter().
 * @callback 
 * @param client a #GstRTSPClient object
 * @param sess a #GstRTSPSession in `client`
 */
interface RTSPClientSessionFilterFunc {
    (client: RTSPClient, sess: RTSPSession): RTSPFilterResult
}
/**
 * Function registered with gst_rtsp_stream_transport_set_keepalive() and called
 * when the stream is active.
 * @callback 
 */
interface RTSPKeepAliveFunc {
    (): void
}
/**
 * Function registered with gst_rtsp_stream_transport_set_message_sent()
 * and called when a message has been sent on the transport.
 * @callback 
 */
interface RTSPMessageSentFunc {
    (): void
}
/**
 * Function registered with gst_rtsp_stream_transport_set_message_sent_full()
 * and called when a message has been sent on the transport.
 * @callback 
 * @param trans 
 */
interface RTSPMessageSentFuncFull {
    (trans: RTSPStreamTransport): void
}
/**
 * Function registered with gst_rtsp_stream_transport_set_callbacks() and
 * called when `buffer` must be sent on `channel`.
 * @callback 
 * @param buffer a #GstBuffer
 * @param channel a channel
 */
interface RTSPSendFunc {
    (buffer: Gst.Buffer, channel: number): boolean
}
/**
 * Function registered with gst_rtsp_stream_transport_set_callbacks() and
 * called when `buffer_list` must be sent on `channel`.
 * @callback 
 * @param bufferList a #GstBufferList
 * @param channel a channel
 */
interface RTSPSendListFunc {
    (bufferList: Gst.BufferList, channel: number): boolean
}
/**
 * This function will be called by the gst_rtsp_server_client_filter(). An
 * implementation should return a value of #GstRTSPFilterResult.
 * 
 * When this function returns #GST_RTSP_FILTER_REMOVE, `client` will be removed
 * from `server`.
 * 
 * A return value of #GST_RTSP_FILTER_KEEP will leave `client` untouched in
 * `server`.
 * 
 * A value of #GST_RTSP_FILTER_REF will add `client` to the result #GList of
 * gst_rtsp_server_client_filter().
 * @callback 
 * @param server a #GstRTSPServer object
 * @param client a #GstRTSPClient in `server`
 */
interface RTSPServerClientFilterFunc {
    (server: RTSPServer, client: RTSPClient): RTSPFilterResult
}
/**
 * This function will be called by the gst_rtsp_session_filter(). An
 * implementation should return a value of #GstRTSPFilterResult.
 * 
 * When this function returns #GST_RTSP_FILTER_REMOVE, `media` will be removed
 * from `sess`.
 * 
 * A return value of #GST_RTSP_FILTER_KEEP will leave `media` untouched in
 * `sess`.
 * 
 * A value of GST_RTSP_FILTER_REF will add `media` to the result #GList of
 * gst_rtsp_session_filter().
 * @callback 
 * @param sess a #GstRTSPSession object
 * @param media a #GstRTSPSessionMedia in `sess`
 */
interface RTSPSessionFilterFunc {
    (sess: RTSPSession, media: RTSPSessionMedia): RTSPFilterResult
}
/**
 * This function will be called by the gst_rtsp_session_pool_filter(). An
 * implementation should return a value of #GstRTSPFilterResult.
 * 
 * When this function returns #GST_RTSP_FILTER_REMOVE, `session` will be removed
 * from `pool`.
 * 
 * A return value of #GST_RTSP_FILTER_KEEP will leave `session` untouched in
 * `pool`.
 * 
 * A value of GST_RTSP_FILTER_REF will add `session` to the result #GList of
 * gst_rtsp_session_pool_filter().
 * @callback 
 * @param pool a #GstRTSPSessionPool object
 * @param session a #GstRTSPSession in `pool`
 */
interface RTSPSessionPoolFilterFunc {
    (pool: RTSPSessionPool, session: RTSPSession): RTSPFilterResult
}
/**
 * The function that will be called from the GSource watch on the session pool.
 * 
 * The function will be called when the pool must be cleaned up because one or
 * more sessions timed out.
 * @callback 
 * @param pool a #GstRTSPSessionPool object
 */
interface RTSPSessionPoolFunc {
    (pool: RTSPSessionPool): boolean
}
/**
 * This function will be called by the gst_rtsp_stream_transport_filter(). An
 * implementation should return a value of #GstRTSPFilterResult.
 * 
 * When this function returns #GST_RTSP_FILTER_REMOVE, `trans` will be removed
 * from `stream`.
 * 
 * A return value of #GST_RTSP_FILTER_KEEP will leave `trans` untouched in
 * `stream`.
 * 
 * A value of #GST_RTSP_FILTER_REF will add `trans` to the result #GList of
 * gst_rtsp_stream_transport_filter().
 * @callback 
 * @param stream a #GstRTSPStream object
 * @param trans a #GstRTSPStreamTransport in `stream`
 */
interface RTSPStreamTransportFilterFunc {
    (stream: RTSPStream, trans: RTSPStreamTransport): RTSPFilterResult
}
interface RTSPAddressPool_ConstructProps extends GObject.Object_ConstructProps {
}

interface RTSPAddressPool {

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPAddressPool

    /**
     * the parent GObject
     * @field 
     */
    parent: GObject.Object

    // Owm methods of GstRtspServer-1.0.GstRtspServer.RTSPAddressPool

    /**
     * Take an address and ports from `pool`. `flags` can be used to control the
     * allocation. `n_ports` consecutive ports will be allocated of which the first
     * one can be found in `port`.
     * @param flags flags
     * @param nPorts the amount of ports
     */
    acquireAddress(flags: RTSPAddressFlags, nPorts: number): RTSPAddress | null
    /**
     * Adds the addresses from `min_addess` to `max_address` (inclusive)
     * to `pool`. The valid port range for the addresses will be from `min_port` to
     * `max_port` inclusive.
     * 
     * When `ttl` is 0, `min_address` and `max_address` should be unicast addresses.
     * `min_address` and `max_address` can be set to
     * #GST_RTSP_ADDRESS_POOL_ANY_IPV4 or #GST_RTSP_ADDRESS_POOL_ANY_IPV6 to bind
     * to all available IPv4 or IPv6 addresses.
     * 
     * When `ttl` > 0, `min_address` and `max_address` should be multicast addresses.
     * @param minAddress a minimum address to add
     * @param maxAddress a maximum address to add
     * @param minPort the minimum port
     * @param maxPort the maximum port
     * @param ttl a TTL or 0 for unicast addresses
     */
    addRange(minAddress: string, maxAddress: string, minPort: number, maxPort: number, ttl: number): boolean
    /**
     * Clear all addresses in `pool`. There should be no outstanding
     * allocations.
     */
    clear(): void
    /**
     * Dump the free and allocated addresses to stdout.
     */
    dump(): void
    /**
     * Used to know if the pool includes any unicast addresses.
     */
    hasUnicastAddresses(): boolean
    /**
     * Take a specific address and ports from `pool`. `n_ports` consecutive
     * ports will be allocated of which the first one can be found in
     * `port`.
     * 
     * If `ttl` is 0, `address` should be a unicast address. If `ttl` > 0, `address`
     * should be a valid multicast address.
     * @param ipAddress The IP address to reserve
     * @param port The first port to reserve
     * @param nPorts The number of ports
     * @param ttl The requested ttl
     */
    reserveAddress(ipAddress: string, port: number, nPorts: number, ttl: number): [ /* returnType */ RTSPAddressPoolResult, /* address */ RTSPAddress ]

    // Class property signals of GstRtspServer-1.0.GstRtspServer.RTSPAddressPool

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * An address pool, all member are private
 * @class 
 */
class RTSPAddressPool extends GObject.Object {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPAddressPool

    static name: string
    static $gtype: GObject.GType<RTSPAddressPool>

    // Constructors of GstRtspServer-1.0.GstRtspServer.RTSPAddressPool

    constructor(config?: RTSPAddressPool_ConstructProps) 
    /**
     * Make a new #GstRTSPAddressPool.
     * @constructor 
     */
    constructor() 
    /**
     * Make a new #GstRTSPAddressPool.
     * @constructor 
     */
    static new(): RTSPAddressPool
    _init(config?: RTSPAddressPool_ConstructProps): void
}

interface RTSPAuth_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `accept-certificate`
 */
interface RTSPAuth_AcceptCertificateSignalCallback {
    (connection: Gio.TlsConnection, peerCert: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): boolean
}

interface RTSPAuth {

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPAuth

    parent: GObject.Object

    // Owm methods of GstRtspServer-1.0.GstRtspServer.RTSPAuth

    /**
     * Add a basic token for the default authentication algorithm that
     * enables the client with privileges listed in `token`.
     * @param basic the basic token
     * @param token authorisation token
     */
    addBasic(basic: string, token: RTSPToken): void
    /**
     * Add a digest `user` and `pass` for the default authentication algorithm that
     * enables the client with privileges listed in `token`.
     * @param user the digest user name
     * @param pass the digest password
     * @param token authorisation token
     */
    addDigest(user: string, pass: string, token: RTSPToken): void
    /**
     * Get the default token for `auth`. This token will be used for unauthenticated
     * users.
     */
    getDefaultToken(): RTSPToken | null
    getRealm(): string
    /**
     * Gets the supported authentication methods of `auth`.
     */
    getSupportedMethods(): GstRtsp.RTSPAuthMethod
    /**
     * Get the #GTlsAuthenticationMode.
     */
    getTlsAuthenticationMode(): Gio.TlsAuthenticationMode
    /**
     * Get the #GTlsCertificate used for negotiating TLS `auth`.
     */
    getTlsCertificate(): Gio.TlsCertificate | null
    /**
     * Get the #GTlsDatabase used for verifying client certificate.
     */
    getTlsDatabase(): Gio.TlsDatabase | null
    /**
     * Parse the contents of the file at `path` and enable the privileges
     * listed in `token` for the users it describes.
     * 
     * The format of the file is expected to match the format described by
     * <https://en.wikipedia.org/wiki/Digest_access_authentication#The_.htdigest_file>,
     * as output by the `htdigest` command.
     * @param path Path to the htdigest file
     * @param token authorisation token
     */
    parseHtdigest(path: string, token: RTSPToken): boolean
    /**
     * Removes `basic` authentication token.
     * @param basic the basic token
     */
    removeBasic(basic: string): void
    /**
     * Removes a digest user.
     * @param user the digest user name
     */
    removeDigest(user: string): void
    /**
     * Set the default #GstRTSPToken to `token` in `auth`. The default token will
     * be used for unauthenticated users.
     * @param token a #GstRTSPToken
     */
    setDefaultToken(token: RTSPToken | null): void
    /**
     * Set the `realm` of `auth`
     * @param realm 
     */
    setRealm(realm: string): void
    /**
     * Sets the supported authentication `methods` for `auth`.
     * @param methods supported methods
     */
    setSupportedMethods(methods: GstRtsp.RTSPAuthMethod): void
    /**
     * The #GTlsAuthenticationMode to set on the underlying GTlsServerConnection.
     * When set to another value than %G_TLS_AUTHENTICATION_NONE,
     * #GstRTSPAuth::accept-certificate signal will be emitted and must be handled.
     * @param mode a #GTlsAuthenticationMode
     */
    setTlsAuthenticationMode(mode: Gio.TlsAuthenticationMode): void
    /**
     * Set the TLS certificate for the auth. Client connections will only
     * be accepted when TLS is negotiated.
     * @param cert a #GTlsCertificate
     */
    setTlsCertificate(cert: Gio.TlsCertificate | null): void
    /**
     * Sets the certificate database that is used to verify peer certificates.
     * If set to %NULL (the default), then peer certificate validation will always
     * set the %G_TLS_CERTIFICATE_UNKNOWN_CA error.
     * @param database a #GTlsDatabase
     */
    setTlsDatabase(database: Gio.TlsDatabase | null): void

    // Own signals of GstRtspServer-1.0.GstRtspServer.RTSPAuth

    connect(sigName: "accept-certificate", callback: RTSPAuth_AcceptCertificateSignalCallback): number
    on(sigName: "accept-certificate", callback: RTSPAuth_AcceptCertificateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "accept-certificate", callback: RTSPAuth_AcceptCertificateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "accept-certificate", callback: RTSPAuth_AcceptCertificateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "accept-certificate", peerCert: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags, ...args: any[]): void

    // Class property signals of GstRtspServer-1.0.GstRtspServer.RTSPAuth

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The authentication structure.
 * @class 
 */
class RTSPAuth extends GObject.Object {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPAuth

    static name: string
    static $gtype: GObject.GType<RTSPAuth>

    // Constructors of GstRtspServer-1.0.GstRtspServer.RTSPAuth

    constructor(config?: RTSPAuth_ConstructProps) 
    /**
     * Create a new #GstRTSPAuth instance.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #GstRTSPAuth instance.
     * @constructor 
     */
    static new(): RTSPAuth
    _init(config?: RTSPAuth_ConstructProps): void
    /**
     * Check if `check` is allowed in the current context.
     * @param check the item to check
     */
    static check(check: string): boolean
    /**
     * Construct a Basic authorisation token from `user` and `pass`.
     * @param user a userid
     * @param pass a password
     */
    static makeBasic(user: string, pass: string): string
}

interface RTSPClient_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GstRtspServer-1.0.GstRtspServer.RTSPClient

    dropBacklog?: boolean | null
    mountPoints?: RTSPMountPoints | null
    postSessionTimeout?: number | null
    sessionPool?: RTSPSessionPool | null
}

/**
 * Signal callback interface for `announce-request`
 */
interface RTSPClient_AnnounceRequestSignalCallback {
    (ctx: RTSPContext): void
}

/**
 * Signal callback interface for `check-requirements`
 */
interface RTSPClient_CheckRequirementsSignalCallback {
    (ctx: RTSPContext, arr: string[]): string
}

/**
 * Signal callback interface for `closed`
 */
interface RTSPClient_ClosedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `describe-request`
 */
interface RTSPClient_DescribeRequestSignalCallback {
    (ctx: RTSPContext): void
}

/**
 * Signal callback interface for `get-parameter-request`
 */
interface RTSPClient_GetParameterRequestSignalCallback {
    (ctx: RTSPContext): void
}

/**
 * Signal callback interface for `handle-response`
 */
interface RTSPClient_HandleResponseSignalCallback {
    (ctx: RTSPContext): void
}

/**
 * Signal callback interface for `new-session`
 */
interface RTSPClient_NewSessionSignalCallback {
    (object: RTSPSession): void
}

/**
 * Signal callback interface for `options-request`
 */
interface RTSPClient_OptionsRequestSignalCallback {
    (ctx: RTSPContext): void
}

/**
 * Signal callback interface for `pause-request`
 */
interface RTSPClient_PauseRequestSignalCallback {
    (ctx: RTSPContext): void
}

/**
 * Signal callback interface for `play-request`
 */
interface RTSPClient_PlayRequestSignalCallback {
    (ctx: RTSPContext): void
}

/**
 * Signal callback interface for `pre-announce-request`
 */
interface RTSPClient_PreAnnounceRequestSignalCallback {
    (ctx: RTSPContext): GstRtsp.RTSPStatusCode
}

/**
 * Signal callback interface for `pre-describe-request`
 */
interface RTSPClient_PreDescribeRequestSignalCallback {
    (ctx: RTSPContext): GstRtsp.RTSPStatusCode
}

/**
 * Signal callback interface for `pre-get-parameter-request`
 */
interface RTSPClient_PreGetParameterRequestSignalCallback {
    (ctx: RTSPContext): GstRtsp.RTSPStatusCode
}

/**
 * Signal callback interface for `pre-options-request`
 */
interface RTSPClient_PreOptionsRequestSignalCallback {
    (ctx: RTSPContext): GstRtsp.RTSPStatusCode
}

/**
 * Signal callback interface for `pre-pause-request`
 */
interface RTSPClient_PrePauseRequestSignalCallback {
    (ctx: RTSPContext): GstRtsp.RTSPStatusCode
}

/**
 * Signal callback interface for `pre-play-request`
 */
interface RTSPClient_PrePlayRequestSignalCallback {
    (ctx: RTSPContext): GstRtsp.RTSPStatusCode
}

/**
 * Signal callback interface for `pre-record-request`
 */
interface RTSPClient_PreRecordRequestSignalCallback {
    (ctx: RTSPContext): GstRtsp.RTSPStatusCode
}

/**
 * Signal callback interface for `pre-set-parameter-request`
 */
interface RTSPClient_PreSetParameterRequestSignalCallback {
    (ctx: RTSPContext): GstRtsp.RTSPStatusCode
}

/**
 * Signal callback interface for `pre-setup-request`
 */
interface RTSPClient_PreSetupRequestSignalCallback {
    (ctx: RTSPContext): GstRtsp.RTSPStatusCode
}

/**
 * Signal callback interface for `pre-teardown-request`
 */
interface RTSPClient_PreTeardownRequestSignalCallback {
    (ctx: RTSPContext): GstRtsp.RTSPStatusCode
}

/**
 * Signal callback interface for `record-request`
 */
interface RTSPClient_RecordRequestSignalCallback {
    (ctx: RTSPContext): void
}

/**
 * Signal callback interface for `send-message`
 */
interface RTSPClient_SendMessageSignalCallback {
    (session: RTSPSession, message: GstRtsp.RTSPMessage): void
}

/**
 * Signal callback interface for `set-parameter-request`
 */
interface RTSPClient_SetParameterRequestSignalCallback {
    (ctx: RTSPContext): void
}

/**
 * Signal callback interface for `setup-request`
 */
interface RTSPClient_SetupRequestSignalCallback {
    (ctx: RTSPContext): void
}

/**
 * Signal callback interface for `teardown-request`
 */
interface RTSPClient_TeardownRequestSignalCallback {
    (ctx: RTSPContext): void
}

interface RTSPClient {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPClient

    dropBacklog: boolean
    mountPoints: RTSPMountPoints
    postSessionTimeout: number
    sessionPool: RTSPSessionPool

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPClient

    parent: GObject.Object

    // Owm methods of GstRtspServer-1.0.GstRtspServer.RTSPClient

    /**
     * Attaches `client` to `context`. When the mainloop for `context` is run, the
     * client will be dispatched. When `context` is %NULL, the default context will be
     * used).
     * 
     * This function should be called when the client properties and urls are fully
     * configured and the client is ready to start.
     * @param context a #GMainContext
     */
    attach(context: GLib.MainContext | null): number
    /**
     * Close the connection of `client` and remove all media it was managing.
     */
    close(): void
    /**
     * Get the #GstRTSPAuth used as the authentication manager of `client`.
     */
    getAuth(): RTSPAuth | null
    /**
     * Get the #GstRTSPConnection of `client`.
     */
    getConnection(): GstRtsp.RTSPConnection | null
    /**
     * Get the Content-Length limit of `client`.
     */
    getContentLengthLimit(): number
    /**
     * Get the #GstRTSPMountPoints object that `client` uses to manage its sessions.
     */
    getMountPoints(): RTSPMountPoints | null
    /**
     * Get the #GstRTSPSessionPool object that `client` uses to manage its sessions.
     */
    getSessionPool(): RTSPSessionPool | null
    /**
     * This is useful when providing a send function through
     * gst_rtsp_client_set_send_func() when doing RTSP over TCP:
     * the send function must call gst_rtsp_stream_transport_message_sent ()
     * on the appropriate transport when data has been received for streaming
     * to continue.
     * @param channel 
     */
    getStreamTransport(channel: number): RTSPStreamTransport | null
    /**
     * Get the #GstRTSPThreadPool used as the thread pool of `client`.
     */
    getThreadPool(): RTSPThreadPool | null
    /**
     * Let the client handle `message`.
     * @param message an #GstRTSPMessage
     */
    handleMessage(message: GstRtsp.RTSPMessage): GstRtsp.RTSPResult
    /**
     * Send a message message to the remote end. `message` must be a
     * #GST_RTSP_MESSAGE_REQUEST or a #GST_RTSP_MESSAGE_RESPONSE.
     * @param session a #GstRTSPSession to send   the message to or %NULL
     * @param message The #GstRTSPMessage to send
     */
    sendMessage(session: RTSPSession | null, message: GstRtsp.RTSPMessage): GstRtsp.RTSPResult
    /**
     * Call `func` for each session managed by `client`. The result value of `func`
     * determines what happens to the session. `func` will be called with `client`
     * locked so no further actions on `client` can be performed from `func`.
     * 
     * If `func` returns #GST_RTSP_FILTER_REMOVE, the session will be removed from
     * `client`.
     * 
     * If `func` returns #GST_RTSP_FILTER_KEEP, the session will remain in `client`.
     * 
     * If `func` returns #GST_RTSP_FILTER_REF, the session will remain in `client` but
     * will also be added with an additional ref to the result #GList of this
     * function..
     * 
     * When `func` is %NULL, #GST_RTSP_FILTER_REF will be assumed for each session.
     * @param func a callback
     */
    sessionFilter(func: RTSPClientSessionFilterFunc | null): RTSPSession[]
    /**
     * configure `auth` to be used as the authentication manager of `client`.
     * @param auth a #GstRTSPAuth
     */
    setAuth(auth: RTSPAuth | null): void
    /**
     * Set the #GstRTSPConnection of `client`. This function takes ownership of
     * `conn`.
     * @param conn a #GstRTSPConnection
     */
    setConnection(conn: GstRtsp.RTSPConnection): boolean
    /**
     * Configure `client` to use the specified Content-Length limit.
     * 
     * Define an appropriate request size limit and reject requests exceeding the
     * limit with response status 413 Request Entity Too Large
     * @param limit Content-Length limit
     */
    setContentLengthLimit(limit: number): void
    /**
     * Set `mounts` as the mount points for `client` which it will use to map urls
     * to media streams. These mount points are usually inherited from the server that
     * created the client but can be overriden later.
     * @param mounts a #GstRTSPMountPoints
     */
    setMountPoints(mounts: RTSPMountPoints | null): void
    /**
     * Set `func` as the callback that will be called when a new message needs to be
     * sent to the client. `user_data` is passed to `func` and `notify` is called when
     * `user_data` is no longer in use.
     * 
     * By default, the client will send the messages on the #GstRTSPConnection that
     * was configured with gst_rtsp_client_attach() was called.
     * 
     * It is only allowed to set either a `send_func` or a `send_messages_func`
     * but not both at the same time.
     * @param func a #GstRTSPClientSendFunc
     */
    setSendFunc(func: RTSPClientSendFunc): void
    /**
     * Set `func` as the callback that will be called when new messages needs to be
     * sent to the client. `user_data` is passed to `func` and `notify` is called when
     * `user_data` is no longer in use.
     * 
     * By default, the client will send the messages on the #GstRTSPConnection that
     * was configured with gst_rtsp_client_attach() was called.
     * 
     * It is only allowed to set either a `send_func` or a `send_messages_func`
     * but not both at the same time.
     * @param func a #GstRTSPClientSendMessagesFunc
     */
    setSendMessagesFunc(func: RTSPClientSendMessagesFunc): void
    /**
     * Set `pool` as the sessionpool for `client` which it will use to find
     * or allocate sessions. the sessionpool is usually inherited from the server
     * that created the client but can be overridden later.
     * @param pool a #GstRTSPSessionPool
     */
    setSessionPool(pool: RTSPSessionPool | null): void
    /**
     * configure `pool` to be used as the thread pool of `client`.
     * @param pool a #GstRTSPThreadPool
     */
    setThreadPool(pool: RTSPThreadPool | null): void

    // Own signals of GstRtspServer-1.0.GstRtspServer.RTSPClient

    connect(sigName: "announce-request", callback: RTSPClient_AnnounceRequestSignalCallback): number
    on(sigName: "announce-request", callback: RTSPClient_AnnounceRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "announce-request", callback: RTSPClient_AnnounceRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "announce-request", callback: RTSPClient_AnnounceRequestSignalCallback): NodeJS.EventEmitter
    emit(sigName: "announce-request", ...args: any[]): void
    connect(sigName: "check-requirements", callback: RTSPClient_CheckRequirementsSignalCallback): number
    on(sigName: "check-requirements", callback: RTSPClient_CheckRequirementsSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "check-requirements", callback: RTSPClient_CheckRequirementsSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "check-requirements", callback: RTSPClient_CheckRequirementsSignalCallback): NodeJS.EventEmitter
    emit(sigName: "check-requirements", arr: string[], ...args: any[]): void
    connect(sigName: "closed", callback: RTSPClient_ClosedSignalCallback): number
    on(sigName: "closed", callback: RTSPClient_ClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: RTSPClient_ClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: RTSPClient_ClosedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "closed", ...args: any[]): void
    connect(sigName: "describe-request", callback: RTSPClient_DescribeRequestSignalCallback): number
    on(sigName: "describe-request", callback: RTSPClient_DescribeRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "describe-request", callback: RTSPClient_DescribeRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "describe-request", callback: RTSPClient_DescribeRequestSignalCallback): NodeJS.EventEmitter
    emit(sigName: "describe-request", ...args: any[]): void
    connect(sigName: "get-parameter-request", callback: RTSPClient_GetParameterRequestSignalCallback): number
    on(sigName: "get-parameter-request", callback: RTSPClient_GetParameterRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "get-parameter-request", callback: RTSPClient_GetParameterRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "get-parameter-request", callback: RTSPClient_GetParameterRequestSignalCallback): NodeJS.EventEmitter
    emit(sigName: "get-parameter-request", ...args: any[]): void
    connect(sigName: "handle-response", callback: RTSPClient_HandleResponseSignalCallback): number
    on(sigName: "handle-response", callback: RTSPClient_HandleResponseSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-response", callback: RTSPClient_HandleResponseSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-response", callback: RTSPClient_HandleResponseSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-response", ...args: any[]): void
    connect(sigName: "new-session", callback: RTSPClient_NewSessionSignalCallback): number
    on(sigName: "new-session", callback: RTSPClient_NewSessionSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-session", callback: RTSPClient_NewSessionSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-session", callback: RTSPClient_NewSessionSignalCallback): NodeJS.EventEmitter
    emit(sigName: "new-session", ...args: any[]): void
    connect(sigName: "options-request", callback: RTSPClient_OptionsRequestSignalCallback): number
    on(sigName: "options-request", callback: RTSPClient_OptionsRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "options-request", callback: RTSPClient_OptionsRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "options-request", callback: RTSPClient_OptionsRequestSignalCallback): NodeJS.EventEmitter
    emit(sigName: "options-request", ...args: any[]): void
    connect(sigName: "pause-request", callback: RTSPClient_PauseRequestSignalCallback): number
    on(sigName: "pause-request", callback: RTSPClient_PauseRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pause-request", callback: RTSPClient_PauseRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pause-request", callback: RTSPClient_PauseRequestSignalCallback): NodeJS.EventEmitter
    emit(sigName: "pause-request", ...args: any[]): void
    connect(sigName: "play-request", callback: RTSPClient_PlayRequestSignalCallback): number
    on(sigName: "play-request", callback: RTSPClient_PlayRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "play-request", callback: RTSPClient_PlayRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "play-request", callback: RTSPClient_PlayRequestSignalCallback): NodeJS.EventEmitter
    emit(sigName: "play-request", ...args: any[]): void
    connect(sigName: "pre-announce-request", callback: RTSPClient_PreAnnounceRequestSignalCallback): number
    on(sigName: "pre-announce-request", callback: RTSPClient_PreAnnounceRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pre-announce-request", callback: RTSPClient_PreAnnounceRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pre-announce-request", callback: RTSPClient_PreAnnounceRequestSignalCallback): NodeJS.EventEmitter
    emit(sigName: "pre-announce-request", ...args: any[]): void
    connect(sigName: "pre-describe-request", callback: RTSPClient_PreDescribeRequestSignalCallback): number
    on(sigName: "pre-describe-request", callback: RTSPClient_PreDescribeRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pre-describe-request", callback: RTSPClient_PreDescribeRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pre-describe-request", callback: RTSPClient_PreDescribeRequestSignalCallback): NodeJS.EventEmitter
    emit(sigName: "pre-describe-request", ...args: any[]): void
    connect(sigName: "pre-get-parameter-request", callback: RTSPClient_PreGetParameterRequestSignalCallback): number
    on(sigName: "pre-get-parameter-request", callback: RTSPClient_PreGetParameterRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pre-get-parameter-request", callback: RTSPClient_PreGetParameterRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pre-get-parameter-request", callback: RTSPClient_PreGetParameterRequestSignalCallback): NodeJS.EventEmitter
    emit(sigName: "pre-get-parameter-request", ...args: any[]): void
    connect(sigName: "pre-options-request", callback: RTSPClient_PreOptionsRequestSignalCallback): number
    on(sigName: "pre-options-request", callback: RTSPClient_PreOptionsRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pre-options-request", callback: RTSPClient_PreOptionsRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pre-options-request", callback: RTSPClient_PreOptionsRequestSignalCallback): NodeJS.EventEmitter
    emit(sigName: "pre-options-request", ...args: any[]): void
    connect(sigName: "pre-pause-request", callback: RTSPClient_PrePauseRequestSignalCallback): number
    on(sigName: "pre-pause-request", callback: RTSPClient_PrePauseRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pre-pause-request", callback: RTSPClient_PrePauseRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pre-pause-request", callback: RTSPClient_PrePauseRequestSignalCallback): NodeJS.EventEmitter
    emit(sigName: "pre-pause-request", ...args: any[]): void
    connect(sigName: "pre-play-request", callback: RTSPClient_PrePlayRequestSignalCallback): number
    on(sigName: "pre-play-request", callback: RTSPClient_PrePlayRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pre-play-request", callback: RTSPClient_PrePlayRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pre-play-request", callback: RTSPClient_PrePlayRequestSignalCallback): NodeJS.EventEmitter
    emit(sigName: "pre-play-request", ...args: any[]): void
    connect(sigName: "pre-record-request", callback: RTSPClient_PreRecordRequestSignalCallback): number
    on(sigName: "pre-record-request", callback: RTSPClient_PreRecordRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pre-record-request", callback: RTSPClient_PreRecordRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pre-record-request", callback: RTSPClient_PreRecordRequestSignalCallback): NodeJS.EventEmitter
    emit(sigName: "pre-record-request", ...args: any[]): void
    connect(sigName: "pre-set-parameter-request", callback: RTSPClient_PreSetParameterRequestSignalCallback): number
    on(sigName: "pre-set-parameter-request", callback: RTSPClient_PreSetParameterRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pre-set-parameter-request", callback: RTSPClient_PreSetParameterRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pre-set-parameter-request", callback: RTSPClient_PreSetParameterRequestSignalCallback): NodeJS.EventEmitter
    emit(sigName: "pre-set-parameter-request", ...args: any[]): void
    connect(sigName: "pre-setup-request", callback: RTSPClient_PreSetupRequestSignalCallback): number
    on(sigName: "pre-setup-request", callback: RTSPClient_PreSetupRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pre-setup-request", callback: RTSPClient_PreSetupRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pre-setup-request", callback: RTSPClient_PreSetupRequestSignalCallback): NodeJS.EventEmitter
    emit(sigName: "pre-setup-request", ...args: any[]): void
    connect(sigName: "pre-teardown-request", callback: RTSPClient_PreTeardownRequestSignalCallback): number
    on(sigName: "pre-teardown-request", callback: RTSPClient_PreTeardownRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pre-teardown-request", callback: RTSPClient_PreTeardownRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pre-teardown-request", callback: RTSPClient_PreTeardownRequestSignalCallback): NodeJS.EventEmitter
    emit(sigName: "pre-teardown-request", ...args: any[]): void
    connect(sigName: "record-request", callback: RTSPClient_RecordRequestSignalCallback): number
    on(sigName: "record-request", callback: RTSPClient_RecordRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "record-request", callback: RTSPClient_RecordRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "record-request", callback: RTSPClient_RecordRequestSignalCallback): NodeJS.EventEmitter
    emit(sigName: "record-request", ...args: any[]): void
    connect(sigName: "send-message", callback: RTSPClient_SendMessageSignalCallback): number
    on(sigName: "send-message", callback: RTSPClient_SendMessageSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "send-message", callback: RTSPClient_SendMessageSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "send-message", callback: RTSPClient_SendMessageSignalCallback): NodeJS.EventEmitter
    emit(sigName: "send-message", message: GstRtsp.RTSPMessage, ...args: any[]): void
    connect(sigName: "set-parameter-request", callback: RTSPClient_SetParameterRequestSignalCallback): number
    on(sigName: "set-parameter-request", callback: RTSPClient_SetParameterRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "set-parameter-request", callback: RTSPClient_SetParameterRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "set-parameter-request", callback: RTSPClient_SetParameterRequestSignalCallback): NodeJS.EventEmitter
    emit(sigName: "set-parameter-request", ...args: any[]): void
    connect(sigName: "setup-request", callback: RTSPClient_SetupRequestSignalCallback): number
    on(sigName: "setup-request", callback: RTSPClient_SetupRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "setup-request", callback: RTSPClient_SetupRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "setup-request", callback: RTSPClient_SetupRequestSignalCallback): NodeJS.EventEmitter
    emit(sigName: "setup-request", ...args: any[]): void
    connect(sigName: "teardown-request", callback: RTSPClient_TeardownRequestSignalCallback): number
    on(sigName: "teardown-request", callback: RTSPClient_TeardownRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "teardown-request", callback: RTSPClient_TeardownRequestSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "teardown-request", callback: RTSPClient_TeardownRequestSignalCallback): NodeJS.EventEmitter
    emit(sigName: "teardown-request", ...args: any[]): void

    // Class property signals of GstRtspServer-1.0.GstRtspServer.RTSPClient

    connect(sigName: "notify::drop-backlog", callback: (...args: any[]) => void): number
    on(sigName: "notify::drop-backlog", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::drop-backlog", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::drop-backlog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::drop-backlog", ...args: any[]): void
    connect(sigName: "notify::mount-points", callback: (...args: any[]) => void): number
    on(sigName: "notify::mount-points", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mount-points", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mount-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mount-points", ...args: any[]): void
    connect(sigName: "notify::post-session-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::post-session-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::post-session-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::post-session-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::post-session-timeout", ...args: any[]): void
    connect(sigName: "notify::session-pool", callback: (...args: any[]) => void): number
    on(sigName: "notify::session-pool", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::session-pool", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::session-pool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::session-pool", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The client object represents the connection and its state with a client.
 * @class 
 */
class RTSPClient extends GObject.Object {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPClient

    static name: string
    static $gtype: GObject.GType<RTSPClient>

    // Constructors of GstRtspServer-1.0.GstRtspServer.RTSPClient

    constructor(config?: RTSPClient_ConstructProps) 
    /**
     * Create a new #GstRTSPClient instance.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #GstRTSPClient instance.
     * @constructor 
     */
    static new(): RTSPClient
    _init(config?: RTSPClient_ConstructProps): void
}

interface RTSPMedia_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GstRtspServer-1.0.GstRtspServer.RTSPMedia

    bindMcastAddress?: boolean | null
    bufferSize?: number | null
    clock?: Gst.Clock | null
    dscpQos?: number | null
    element?: Gst.Element | null
    eosShutdown?: boolean | null
    latency?: number | null
    maxMcastTtl?: number | null
    profiles?: GstRtsp.RTSPProfile | null
    protocols?: GstRtsp.RTSPLowerTrans | null
    reusable?: boolean | null
    shared?: boolean | null
    stopOnDisconnect?: boolean | null
    suspendMode?: RTSPSuspendMode | null
    timeProvider?: boolean | null
    transportMode?: RTSPTransportMode | null
}

/**
 * Signal callback interface for `new-state`
 */
interface RTSPMedia_NewStateSignalCallback {
    (object: number): void
}

/**
 * Signal callback interface for `new-stream`
 */
interface RTSPMedia_NewStreamSignalCallback {
    (object: RTSPStream): void
}

/**
 * Signal callback interface for `prepared`
 */
interface RTSPMedia_PreparedSignalCallback {
    (): void
}

/**
 * Signal callback interface for `removed-stream`
 */
interface RTSPMedia_RemovedStreamSignalCallback {
    (object: RTSPStream): void
}

/**
 * Signal callback interface for `target-state`
 */
interface RTSPMedia_TargetStateSignalCallback {
    (object: number): void
}

/**
 * Signal callback interface for `unprepared`
 */
interface RTSPMedia_UnpreparedSignalCallback {
    (): void
}

interface RTSPMedia {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPMedia

    bindMcastAddress: boolean
    bufferSize: number
    clock: Gst.Clock
    dscpQos: number
    readonly element: Gst.Element
    eosShutdown: boolean
    latency: number
    maxMcastTtl: number
    profiles: GstRtsp.RTSPProfile
    protocols: GstRtsp.RTSPLowerTrans
    reusable: boolean
    shared: boolean
    stopOnDisconnect: boolean
    suspendMode: RTSPSuspendMode
    timeProvider: boolean
    transportMode: RTSPTransportMode

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPMedia

    parent: GObject.Object

    // Owm methods of GstRtspServer-1.0.GstRtspServer.RTSPMedia

    /**
     * Find all payloader elements, they should be named pay\%d in the
     * element of `media,` and create #GstRTSPStreams for them.
     * 
     * Collect all dynamic elements, named dynpay\%d, and add them to
     * the list of dynamic elements.
     * 
     * Find all depayloader elements, they should be named depay\%d in the
     * element of `media,` and create #GstRTSPStreams for them.
     */
    collectStreams(): void
    /**
     * Add a receiver and sender parts to the pipeline based on the transport from
     * SETUP.
     * @param transports a list of #GstRTSPTransport
     */
    completePipeline(transports: GstRtsp.RTSPTransport[]): boolean
    /**
     * Create a new stream in `media` that provides RTP data on `pad`.
     * `pad` should be a pad of an element inside `media->`element.
     * @param payloader a #GstElement
     * @param pad a #GstPad
     */
    createStream(payloader: Gst.Element, pad: Gst.Pad): RTSPStream
    /**
     * Find a stream in `media` with `control` as the control uri.
     * @param control the control of the stream
     */
    findStream(control: string): RTSPStream | null
    /**
     * Get the #GstRTSPAddressPool used as the address pool of `media`.
     */
    getAddressPool(): RTSPAddressPool | null
    /**
     * Get the base_time that is used by the pipeline in `media`.
     * 
     * `media` must be prepared before this method returns a valid base_time.
     */
    getBaseTime(): Gst.ClockTime
    /**
     * Get the kernel UDP buffer size.
     */
    getBufferSize(): number
    /**
     * Get the clock that is used by the pipeline in `media`.
     * 
     * `media` must be prepared before this method returns a valid clock object.
     */
    getClock(): Gst.Clock | null
    getDoRetransmission(): boolean
    /**
     * Get the configured DSCP QoS of attached media.
     */
    getDscpQos(): number
    /**
     * Get the element that was used when constructing `media`.
     */
    getElement(): Gst.Element
    /**
     * Get the latency that is used for receiving media.
     */
    getLatency(): number
    /**
     * Get the the maximum time-to-live value of outgoing multicast packets.
     */
    getMaxMcastTtl(): number
    /**
     * Get the multicast interface used for `media`.
     */
    getMulticastIface(): string | null
    /**
     * Get the permissions object from `media`.
     */
    getPermissions(): RTSPPermissions | null
    /**
     * Get the allowed profiles of `media`.
     */
    getProfiles(): GstRtsp.RTSPProfile
    /**
     * Get the allowed protocols of `media`.
     */
    getProtocols(): GstRtsp.RTSPLowerTrans
    /**
     * Gets if and how the media clock should be published according to RFC7273.
     */
    getPublishClockMode(): RTSPPublishClockMode
    /**
     * Get the current range as a string. `media` must be prepared with
     * gst_rtsp_media_prepare ().
     * @param play for the PLAY request
     * @param unit the unit to use for the string
     */
    getRangeString(play: boolean, unit: GstRtsp.RTSPRangeUnit): string | null
    getRateControl(): boolean
    /**
     * Get the rate and applied_rate of the current segment.
     */
    getRates(): [ /* returnType */ boolean, /* rate */ number, /* appliedRate */ number ]
    /**
     * Get the amount of time to store retransmission data.
     */
    getRetransmissionTime(): Gst.ClockTime
    /**
     * Get the status of `media`. When `media` is busy preparing, this function waits
     * until `media` is prepared or in error.
     */
    getStatus(): RTSPMediaStatus
    /**
     * Retrieve the stream with index `idx` from `media`.
     * @param idx the stream index
     */
    getStream(idx: number): RTSPStream | null
    /**
     * Get how `media` will be suspended.
     */
    getSuspendMode(): RTSPSuspendMode
    /**
     * Get the #GstNetTimeProvider for the clock used by `media`. The time provider
     * will listen on `address` and `port` for client time requests.
     * @param address an address or %NULL
     * @param port a port or 0
     */
    getTimeProvider(address: string | null, port: number): GstNet.NetTimeProvider
    /**
     * Check if the pipeline for `media` can be used for PLAY or RECORD methods.
     */
    getTransportMode(): RTSPTransportMode
    /**
     * Configure an SDP on `media` for receiving streams
     * @param sdp a #GstSDPMessage
     */
    handleSdp(sdp: GstSdp.SDPMessage): boolean
    /**
     * See gst_rtsp_stream_is_complete(), gst_rtsp_stream_is_sender().
     */
    hasCompletedSender(): boolean
    /**
     * Check if multicast sockets are configured to be bound to multicast addresses.
     */
    isBindMcastAddress(): boolean
    /**
     * Check if the pipeline for `media` will send an EOS down the pipeline before
     * unpreparing.
     */
    isEosShutdown(): boolean
    isReceiveOnly(): boolean
    /**
     * Check if the pipeline for `media` can be reused after an unprepare.
     */
    isReusable(): boolean
    /**
     * Check if the pipeline for `media` can be shared between multiple clients.
     */
    isShared(): boolean
    /**
     * Check if the pipeline for `media` will be stopped when a client disconnects
     * without sending TEARDOWN.
     */
    isStopOnDisconnect(): boolean
    /**
     * Check if `media` can provide a #GstNetTimeProvider for its pipeline clock.
     * 
     * Use gst_rtsp_media_get_time_provider() to get the network clock.
     */
    isTimeProvider(): boolean
    /**
     * Lock the entire media. This is needed by callers such as rtsp_client to
     * protect the media when it is shared by many clients.
     * The lock prevents that concurrent clients alters the shared media,
     * while one client already is working with it.
     * Typically the lock is taken in external RTSP API calls that uses shared media
     * such as DESCRIBE, SETUP, ANNOUNCE, TEARDOWN, PLAY, PAUSE.
     * 
     * As best practice take the lock as soon as the function get hold of a shared
     * media object. Release the lock right before the function returns.
     */
    lock(): void
    /**
     * Get the number of streams in this media.
     */
    nStreams(): number
    /**
     * Prepare `media` for streaming. This function will create the objects
     * to manage the streaming. A pipeline must have been set on `media` with
     * gst_rtsp_media_take_pipeline().
     * 
     * It will preroll the pipeline and collect vital information about the streams
     * such as the duration.
     * @param thread a #GstRTSPThread to run the   bus handler or %NULL
     */
    prepare(thread: RTSPThread | null): boolean
    /**
     * Seek the pipeline of `media` to `range`. `media` must be prepared with
     * gst_rtsp_media_prepare().
     * @param range a #GstRTSPTimeRange
     */
    seek(range: GstRtsp.RTSPTimeRange): boolean
    /**
     * Seek the pipeline of `media` to `range` with the given `flags`.
     * `media` must be prepared with gst_rtsp_media_prepare().
     * @param range a #GstRTSPTimeRange
     * @param flags The minimal set of #GstSeekFlags to use
     */
    seekFull(range: GstRtsp.RTSPTimeRange, flags: Gst.SeekFlags): boolean
    /**
     * Seek the pipeline of `media` to `range` with the given `flags` and `rate,`
     * and `trickmode_interval`.
     * `media` must be prepared with gst_rtsp_media_prepare().
     * In order to perform the seek operation, the pipeline must contain all
     * needed transport parts (transport sinks).
     * @param range a #GstRTSPTimeRange
     * @param flags The minimal set of #GstSeekFlags to use
     * @param rate the rate to use in the seek
     * @param trickmodeInterval The trickmode interval to use for KEY_UNITS trick mode
     */
    seekTrickmode(range: GstRtsp.RTSPTimeRange, flags: Gst.SeekFlags, rate: number, trickmodeInterval: Gst.ClockTime): boolean
    /**
     * Check if the pipeline for `media` seek and up to what point in time,
     * it can seek.
     */
    seekable(): Gst.ClockTimeDiff
    /**
     * configure `pool` to be used as the address pool of `media`.
     * @param pool a #GstRTSPAddressPool
     */
    setAddressPool(pool: RTSPAddressPool | null): void
    /**
     * Decide whether the multicast socket should be bound to a multicast address or
     * INADDR_ANY.
     * @param bindMcastAddr the new value
     */
    setBindMcastAddress(bindMcastAddr: boolean): void
    /**
     * Set the kernel UDP buffer size.
     * @param size the new value
     */
    setBufferSize(size: number): void
    /**
     * Configure the clock used for the media.
     * @param clock #GstClock to be used
     */
    setClock(clock: Gst.Clock | null): void
    /**
     * Set whether retransmission requests will be sent
     * @param doRetransmission 
     */
    setDoRetransmission(doRetransmission: boolean): void
    /**
     * Configure the dscp qos of attached streams to `dscp_qos`.
     * @param dscpQos a new dscp qos value (0-63, or -1 to disable)
     */
    setDscpQos(dscpQos: number): void
    /**
     * Set or unset if an EOS event will be sent to the pipeline for `media` before
     * it is unprepared.
     * @param eosShutdown the new value
     */
    setEosShutdown(eosShutdown: boolean): void
    /**
     * Configure the latency used for receiving media.
     * @param latency latency in milliseconds
     */
    setLatency(latency: number): void
    /**
     * Set the maximum time-to-live value of outgoing multicast packets.
     * @param ttl the new multicast ttl value
     */
    setMaxMcastTtl(ttl: number): boolean
    /**
     * configure `multicast_iface` to be used for `media`.
     * @param multicastIface a multicast interface name
     */
    setMulticastIface(multicastIface: string | null): void
    /**
     * Set `permissions` on `media`.
     * @param permissions a #GstRTSPPermissions
     */
    setPermissions(permissions: RTSPPermissions | null): void
    /**
     * Set the state of the pipeline managed by `media` to `state`
     * @param state the target state of the pipeline
     */
    setPipelineState(state: Gst.State): void
    /**
     * Configure the allowed lower transport for `media`.
     * @param profiles the new flags
     */
    setProfiles(profiles: GstRtsp.RTSPProfile): void
    /**
     * Configure the allowed lower transport for `media`.
     * @param protocols the new flags
     */
    setProtocols(protocols: GstRtsp.RTSPLowerTrans): void
    /**
     * Sets if and how the media clock should be published according to RFC7273.
     * @param mode the clock publish mode
     */
    setPublishClockMode(mode: RTSPPublishClockMode): void
    /**
     * Define whether `media` will follow the Rate-Control=no behaviour as specified
     * in the ONVIF replay spec.
     * @param enabled 
     */
    setRateControl(enabled: boolean): void
    /**
     * Set the amount of time to store retransmission packets.
     * @param time the new value
     */
    setRetransmissionTime(time: Gst.ClockTime): void
    /**
     * Set or unset if the pipeline for `media` can be reused after the pipeline has
     * been unprepared.
     * @param reusable the new value
     */
    setReusable(reusable: boolean): void
    /**
     * Set or unset if the pipeline for `media` can be shared will multiple clients.
     * When `shared` is %TRUE, client requests for this media will share the media
     * pipeline.
     * @param shared the new value
     */
    setShared(shared: boolean): void
    /**
     * Set the state of `media` to `state` and for the transports in `transports`.
     * 
     * `media` must be prepared with gst_rtsp_media_prepare();
     * @param state the target state of the media
     * @param transports  a #GPtrArray of #GstRTSPStreamTransport pointers
     */
    setState(state: Gst.State, transports: RTSPStreamTransport[]): boolean
    /**
     * Set or unset if the pipeline for `media` should be stopped when a
     * client disconnects without sending TEARDOWN.
     * @param stopOnDisconnect the new value
     */
    setStopOnDisconnect(stopOnDisconnect: boolean): void
    /**
     * Control how @ media will be suspended after the SDP has been generated and
     * after a PAUSE request has been performed.
     * 
     * Media must be unprepared when setting the suspend mode.
     * @param mode the new #GstRTSPSuspendMode
     */
    setSuspendMode(mode: RTSPSuspendMode): void
    /**
     * Sets if the media pipeline can work in PLAY or RECORD mode
     * @param mode the new value
     */
    setTransportMode(mode: RTSPTransportMode): void
    /**
     * Add `media` specific info to `sdp`. `info` is used to configure the connection
     * information in the SDP.
     * @param sdp a #GstSDPMessage
     * @param info a #GstSDPInfo
     */
    setupSdp(sdp: GstSdp.SDPMessage, info: SDPInfo): boolean
    /**
     * Suspend `media`. The state of the pipeline managed by `media` is set to
     * GST_STATE_NULL but all streams are kept. `media` can be prepared again
     * with gst_rtsp_media_unsuspend()
     * 
     * `media` must be prepared with gst_rtsp_media_prepare();
     */
    suspend(): boolean
    /**
     * Set `pipeline` as the #GstPipeline for `media`. Ownership is
     * taken of `pipeline`.
     * @param pipeline a #GstPipeline
     */
    takePipeline(pipeline: Gst.Pipeline): void
    /**
     * Unlock the media.
     */
    unlock(): void
    /**
     * Unprepare `media`. After this call, the media should be prepared again before
     * it can be used again. If the media is set to be non-reusable, a new instance
     * must be created.
     */
    unprepare(): boolean
    /**
     * Unsuspend `media` if it was in a suspended state. This method does nothing
     * when the media was not in the suspended state.
     */
    unsuspend(): boolean
    /**
     * Set `media` to provide a #GstNetTimeProvider.
     * @param timeProvider if a #GstNetTimeProvider should be used
     */
    useTimeProvider(timeProvider: boolean): void

    // Own signals of GstRtspServer-1.0.GstRtspServer.RTSPMedia

    connect(sigName: "new-state", callback: RTSPMedia_NewStateSignalCallback): number
    on(sigName: "new-state", callback: RTSPMedia_NewStateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-state", callback: RTSPMedia_NewStateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-state", callback: RTSPMedia_NewStateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "new-state", ...args: any[]): void
    connect(sigName: "new-stream", callback: RTSPMedia_NewStreamSignalCallback): number
    on(sigName: "new-stream", callback: RTSPMedia_NewStreamSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-stream", callback: RTSPMedia_NewStreamSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-stream", callback: RTSPMedia_NewStreamSignalCallback): NodeJS.EventEmitter
    emit(sigName: "new-stream", ...args: any[]): void
    connect(sigName: "prepared", callback: RTSPMedia_PreparedSignalCallback): number
    on(sigName: "prepared", callback: RTSPMedia_PreparedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "prepared", callback: RTSPMedia_PreparedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "prepared", callback: RTSPMedia_PreparedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "prepared", ...args: any[]): void
    connect(sigName: "removed-stream", callback: RTSPMedia_RemovedStreamSignalCallback): number
    on(sigName: "removed-stream", callback: RTSPMedia_RemovedStreamSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "removed-stream", callback: RTSPMedia_RemovedStreamSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "removed-stream", callback: RTSPMedia_RemovedStreamSignalCallback): NodeJS.EventEmitter
    emit(sigName: "removed-stream", ...args: any[]): void
    connect(sigName: "target-state", callback: RTSPMedia_TargetStateSignalCallback): number
    on(sigName: "target-state", callback: RTSPMedia_TargetStateSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "target-state", callback: RTSPMedia_TargetStateSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "target-state", callback: RTSPMedia_TargetStateSignalCallback): NodeJS.EventEmitter
    emit(sigName: "target-state", ...args: any[]): void
    connect(sigName: "unprepared", callback: RTSPMedia_UnpreparedSignalCallback): number
    on(sigName: "unprepared", callback: RTSPMedia_UnpreparedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unprepared", callback: RTSPMedia_UnpreparedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unprepared", callback: RTSPMedia_UnpreparedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "unprepared", ...args: any[]): void

    // Class property signals of GstRtspServer-1.0.GstRtspServer.RTSPMedia

    connect(sigName: "notify::bind-mcast-address", callback: (...args: any[]) => void): number
    on(sigName: "notify::bind-mcast-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bind-mcast-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bind-mcast-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bind-mcast-address", ...args: any[]): void
    connect(sigName: "notify::buffer-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer-size", ...args: any[]): void
    connect(sigName: "notify::clock", callback: (...args: any[]) => void): number
    on(sigName: "notify::clock", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clock", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clock", ...args: any[]): void
    connect(sigName: "notify::dscp-qos", callback: (...args: any[]) => void): number
    on(sigName: "notify::dscp-qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dscp-qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dscp-qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dscp-qos", ...args: any[]): void
    connect(sigName: "notify::element", callback: (...args: any[]) => void): number
    on(sigName: "notify::element", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::element", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::eos-shutdown", callback: (...args: any[]) => void): number
    on(sigName: "notify::eos-shutdown", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::eos-shutdown", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::eos-shutdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::eos-shutdown", ...args: any[]): void
    connect(sigName: "notify::latency", callback: (...args: any[]) => void): number
    on(sigName: "notify::latency", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::latency", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::latency", ...args: any[]): void
    connect(sigName: "notify::max-mcast-ttl", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-mcast-ttl", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-mcast-ttl", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-mcast-ttl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-mcast-ttl", ...args: any[]): void
    connect(sigName: "notify::profiles", callback: (...args: any[]) => void): number
    on(sigName: "notify::profiles", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::profiles", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::profiles", ...args: any[]): void
    connect(sigName: "notify::protocols", callback: (...args: any[]) => void): number
    on(sigName: "notify::protocols", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::protocols", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::protocols", ...args: any[]): void
    connect(sigName: "notify::reusable", callback: (...args: any[]) => void): number
    on(sigName: "notify::reusable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reusable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reusable", ...args: any[]): void
    connect(sigName: "notify::shared", callback: (...args: any[]) => void): number
    on(sigName: "notify::shared", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::shared", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::shared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::shared", ...args: any[]): void
    connect(sigName: "notify::stop-on-disconnect", callback: (...args: any[]) => void): number
    on(sigName: "notify::stop-on-disconnect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stop-on-disconnect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stop-on-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stop-on-disconnect", ...args: any[]): void
    connect(sigName: "notify::suspend-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::suspend-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::suspend-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::suspend-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::suspend-mode", ...args: any[]): void
    connect(sigName: "notify::time-provider", callback: (...args: any[]) => void): number
    on(sigName: "notify::time-provider", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::time-provider", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::time-provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::time-provider", ...args: any[]): void
    connect(sigName: "notify::transport-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::transport-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transport-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transport-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transport-mode", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * A class that contains the GStreamer element along with a list of
 * #GstRTSPStream objects that can produce data.
 * 
 * This object is usually created from a #GstRTSPMediaFactory.
 * @class 
 */
class RTSPMedia extends GObject.Object {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPMedia

    static name: string
    static $gtype: GObject.GType<RTSPMedia>

    // Constructors of GstRtspServer-1.0.GstRtspServer.RTSPMedia

    constructor(config?: RTSPMedia_ConstructProps) 
    /**
     * Create a new #GstRTSPMedia instance. `element` is the bin element that
     * provides the different streams. The #GstRTSPMedia object contains the
     * element to produce RTP data for one or more related (audio/video/..)
     * streams.
     * 
     * Ownership is taken of `element`.
     * @constructor 
     * @param element a #GstElement
     */
    constructor(element: Gst.Element) 
    /**
     * Create a new #GstRTSPMedia instance. `element` is the bin element that
     * provides the different streams. The #GstRTSPMedia object contains the
     * element to produce RTP data for one or more related (audio/video/..)
     * streams.
     * 
     * Ownership is taken of `element`.
     * @constructor 
     * @param element a #GstElement
     */
    static new(element: Gst.Element): RTSPMedia
    _init(config?: RTSPMedia_ConstructProps): void
}

interface RTSPMediaFactory_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactory

    bindMcastAddress?: boolean | null
    bufferSize?: number | null
    clock?: Gst.Clock | null
    dscpQos?: number | null
    /**
     * Whether the created media should send and receive RTCP
     */
    enableRtcp?: boolean | null
    eosShutdown?: boolean | null
    latency?: number | null
    launch?: string | null
    maxMcastTtl?: number | null
    profiles?: GstRtsp.RTSPProfile | null
    protocols?: GstRtsp.RTSPLowerTrans | null
    shared?: boolean | null
    stopOnDisconnect?: boolean | null
    suspendMode?: RTSPSuspendMode | null
    transportMode?: RTSPTransportMode | null
}

/**
 * Signal callback interface for `media-configure`
 */
interface RTSPMediaFactory_MediaConfigureSignalCallback {
    (object: RTSPMedia): void
}

/**
 * Signal callback interface for `media-constructed`
 */
interface RTSPMediaFactory_MediaConstructedSignalCallback {
    (object: RTSPMedia): void
}

interface RTSPMediaFactory {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactory

    bindMcastAddress: boolean
    bufferSize: number
    clock: Gst.Clock
    dscpQos: number
    /**
     * Whether the created media should send and receive RTCP
     */
    enableRtcp: boolean
    eosShutdown: boolean
    latency: number
    launch: string
    maxMcastTtl: number
    profiles: GstRtsp.RTSPProfile
    protocols: GstRtsp.RTSPLowerTrans
    shared: boolean
    stopOnDisconnect: boolean
    suspendMode: RTSPSuspendMode
    transportMode: RTSPTransportMode

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactory

    parent: GObject.Object

    // Owm methods of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactory

    /**
     * A convenience wrapper around gst_rtsp_permissions_add_role_from_structure().
     * If `factory` had no permissions, new permissions will be created and the
     * role will be added to it.
     * @param structure 
     */
    addRoleFromStructure(structure: Gst.Structure): void
    /**
     * Construct the media object and create its streams. Implementations
     * should create the needed gstreamer elements and add them to the result
     * object. No state changes should be performed on them yet.
     * 
     * One or more GstRTSPStream objects should be created from the result
     * with gst_rtsp_media_create_stream ().
     * 
     * After the media is constructed, it can be configured and then prepared
     * with gst_rtsp_media_prepare ().
     * @param url the url used
     */
    construct(url: GstRtsp.RTSPUrl): RTSPMedia
    /**
     * Construct and return a #GstElement that is a #GstBin containing
     * the elements to use for streaming the media.
     * 
     * The bin should contain payloaders pay\%d for each stream. The default
     * implementation of this function returns the bin created from the
     * launch parameter.
     * @param url the url used
     */
    createElement(url: GstRtsp.RTSPUrl): Gst.Element
    /**
     * Get the #GstRTSPAddressPool used as the address pool of `factory`.
     */
    getAddressPool(): RTSPAddressPool | null
    /**
     * Get the kernel UDP buffer size.
     */
    getBufferSize(): number
    /**
     * Returns the clock that is going to be used by the pipelines
     * of all medias created from this factory.
     */
    getClock(): Gst.Clock
    getDoRetransmission(): boolean
    /**
     * Get the configured media DSCP QoS.
     */
    getDscpQos(): number
    /**
     * Get the latency that is used for receiving media
     */
    getLatency(): number
    /**
     * Get the gst_parse_launch() pipeline description that will be used in the
     * default prepare vmethod.
     */
    getLaunch(): string | null
    /**
     * Get the the maximum time-to-live value of outgoing multicast packets.
     */
    getMaxMcastTtl(): number
    /**
     * Return the GType of the GstRTSPMedia subclass this
     * factory will create.
     */
    getMediaGtype(): GObject.GType
    /**
     * Get the multicast interface used for `factory`.
     */
    getMulticastIface(): string | null
    /**
     * Get the permissions object from `factory`.
     */
    getPermissions(): RTSPPermissions | null
    /**
     * Get the allowed profiles of `factory`.
     */
    getProfiles(): GstRtsp.RTSPProfile
    /**
     * Get the allowed protocols of `factory`.
     */
    getProtocols(): GstRtsp.RTSPLowerTrans
    /**
     * Gets if and how the media clock should be published according to RFC7273.
     */
    getPublishClockMode(): RTSPPublishClockMode
    /**
     * Get the time that is stored for retransmission purposes
     */
    getRetransmissionTime(): Gst.ClockTime
    /**
     * Get how media created from this factory will be suspended.
     */
    getSuspendMode(): RTSPSuspendMode
    /**
     * Get if media created from this factory can be used for PLAY or RECORD
     * methods.
     */
    getTransportMode(): RTSPTransportMode
    /**
     * Check if multicast sockets are configured to be bound to multicast addresses.
     */
    isBindMcastAddress(): boolean
    /**
     * Check if created media will send and receive RTCP
     */
    isEnableRtcp(): boolean
    /**
     * Get if media created from this factory will have an EOS event sent to the
     * pipeline before shutdown.
     */
    isEosShutdown(): boolean
    /**
     * Get if media created from this factory can be shared between clients.
     */
    isShared(): boolean
    isStopOnDisonnect(): boolean
    /**
     * configure `pool` to be used as the address pool of `factory`.
     * @param pool a #GstRTSPAddressPool
     */
    setAddressPool(pool: RTSPAddressPool | null): void
    /**
     * Decide whether the multicast socket should be bound to a multicast address or
     * INADDR_ANY.
     * @param bindMcastAddr the new value
     */
    setBindMcastAddress(bindMcastAddr: boolean): void
    /**
     * Set the kernel UDP buffer size.
     * @param size the new value
     */
    setBufferSize(size: number): void
    /**
     * Configures a specific clock to be used by the pipelines
     * of all medias created from this factory.
     * @param clock the clock to be used by the media factory
     */
    setClock(clock: Gst.Clock | null): void
    /**
     * Set whether retransmission requests will be sent for
     * receiving media
     * @param doRetransmission 
     */
    setDoRetransmission(doRetransmission: boolean): void
    /**
     * Configure the media dscp qos to `dscp_qos`.
     * @param dscpQos a new dscp qos value (0-63, or -1 to disable)
     */
    setDscpQos(dscpQos: number): void
    /**
     * Decide whether the created media should send and receive RTCP
     * @param enable the new value
     */
    setEnableRtcp(enable: boolean): void
    /**
     * Configure if media created from this factory will have an EOS sent to the
     * pipeline before shutdown.
     * @param eosShutdown the new value
     */
    setEosShutdown(eosShutdown: boolean): void
    /**
     * Configure the latency used for receiving media
     * @param latency latency in milliseconds
     */
    setLatency(latency: number): void
    /**
     * The gst_parse_launch() line to use for constructing the pipeline in the
     * default prepare vmethod.
     * 
     * The pipeline description should return a GstBin as the toplevel element
     * which can be accomplished by enclosing the description with brackets '('
     * ')'.
     * 
     * The description should return a pipeline with payloaders named pay0, pay1,
     * etc.. Each of the payloaders will result in a stream.
     * @param launch the launch description
     */
    setLaunch(launch: string): void
    /**
     * Set the maximum time-to-live value of outgoing multicast packets.
     * @param ttl the new multicast ttl value
     */
    setMaxMcastTtl(ttl: number): boolean
    /**
     * Configure the GType of the GstRTSPMedia subclass to
     * create (by default, overridden construct vmethods
     * may of course do something different)
     * @param mediaGtype the GType of the class to create
     */
    setMediaGtype(mediaGtype: GObject.GType): void
    /**
     * configure `multicast_iface` to be used for `factory`.
     * @param multicastIface a multicast interface name
     */
    setMulticastIface(multicastIface: string | null): void
    /**
     * Set `permissions` on `factory`.
     * @param permissions a #GstRTSPPermissions
     */
    setPermissions(permissions: RTSPPermissions | null): void
    /**
     * Configure the allowed profiles for `factory`.
     * @param profiles the new flags
     */
    setProfiles(profiles: GstRtsp.RTSPProfile): void
    /**
     * Configure the allowed lower transport for `factory`.
     * @param protocols the new flags
     */
    setProtocols(protocols: GstRtsp.RTSPLowerTrans): void
    /**
     * Sets if and how the media clock should be published according to RFC7273.
     * @param mode the clock publish mode
     */
    setPublishClockMode(mode: RTSPPublishClockMode): void
    /**
     * Configure the time to store for possible retransmission
     * @param time a #GstClockTime
     */
    setRetransmissionTime(time: Gst.ClockTime): void
    /**
     * Configure if media created from this factory can be shared between clients.
     * @param shared the new value
     */
    setShared(shared: boolean): void
    /**
     * Configure if media created from this factory should be stopped
     * when a client disconnects without sending TEARDOWN.
     * @param stopOnDisconnect the new value
     */
    setStopOnDisconnect(stopOnDisconnect: boolean): void
    /**
     * Configure how media created from this factory will be suspended.
     * @param mode the new #GstRTSPSuspendMode
     */
    setSuspendMode(mode: RTSPSuspendMode): void
    /**
     * Configure if this factory creates media for PLAY or RECORD modes.
     * @param mode the new value
     */
    setTransportMode(mode: RTSPTransportMode): void

    // Own signals of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactory

    connect(sigName: "media-configure", callback: RTSPMediaFactory_MediaConfigureSignalCallback): number
    on(sigName: "media-configure", callback: RTSPMediaFactory_MediaConfigureSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "media-configure", callback: RTSPMediaFactory_MediaConfigureSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "media-configure", callback: RTSPMediaFactory_MediaConfigureSignalCallback): NodeJS.EventEmitter
    emit(sigName: "media-configure", ...args: any[]): void
    connect(sigName: "media-constructed", callback: RTSPMediaFactory_MediaConstructedSignalCallback): number
    on(sigName: "media-constructed", callback: RTSPMediaFactory_MediaConstructedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "media-constructed", callback: RTSPMediaFactory_MediaConstructedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "media-constructed", callback: RTSPMediaFactory_MediaConstructedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "media-constructed", ...args: any[]): void

    // Class property signals of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactory

    connect(sigName: "notify::bind-mcast-address", callback: (...args: any[]) => void): number
    on(sigName: "notify::bind-mcast-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bind-mcast-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bind-mcast-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bind-mcast-address", ...args: any[]): void
    connect(sigName: "notify::buffer-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer-size", ...args: any[]): void
    connect(sigName: "notify::clock", callback: (...args: any[]) => void): number
    on(sigName: "notify::clock", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clock", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clock", ...args: any[]): void
    connect(sigName: "notify::dscp-qos", callback: (...args: any[]) => void): number
    on(sigName: "notify::dscp-qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dscp-qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dscp-qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dscp-qos", ...args: any[]): void
    connect(sigName: "notify::enable-rtcp", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-rtcp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-rtcp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-rtcp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-rtcp", ...args: any[]): void
    connect(sigName: "notify::eos-shutdown", callback: (...args: any[]) => void): number
    on(sigName: "notify::eos-shutdown", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::eos-shutdown", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::eos-shutdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::eos-shutdown", ...args: any[]): void
    connect(sigName: "notify::latency", callback: (...args: any[]) => void): number
    on(sigName: "notify::latency", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::latency", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::latency", ...args: any[]): void
    connect(sigName: "notify::launch", callback: (...args: any[]) => void): number
    on(sigName: "notify::launch", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::launch", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::launch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::launch", ...args: any[]): void
    connect(sigName: "notify::max-mcast-ttl", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-mcast-ttl", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-mcast-ttl", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-mcast-ttl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-mcast-ttl", ...args: any[]): void
    connect(sigName: "notify::profiles", callback: (...args: any[]) => void): number
    on(sigName: "notify::profiles", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::profiles", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::profiles", ...args: any[]): void
    connect(sigName: "notify::protocols", callback: (...args: any[]) => void): number
    on(sigName: "notify::protocols", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::protocols", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::protocols", ...args: any[]): void
    connect(sigName: "notify::shared", callback: (...args: any[]) => void): number
    on(sigName: "notify::shared", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::shared", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::shared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::shared", ...args: any[]): void
    connect(sigName: "notify::stop-on-disconnect", callback: (...args: any[]) => void): number
    on(sigName: "notify::stop-on-disconnect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stop-on-disconnect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stop-on-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stop-on-disconnect", ...args: any[]): void
    connect(sigName: "notify::suspend-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::suspend-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::suspend-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::suspend-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::suspend-mode", ...args: any[]): void
    connect(sigName: "notify::transport-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::transport-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transport-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transport-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transport-mode", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The definition and logic for constructing the pipeline for a media. The media
 * can contain multiple streams like audio and video.
 * @class 
 */
class RTSPMediaFactory extends GObject.Object {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactory

    static name: string
    static $gtype: GObject.GType<RTSPMediaFactory>

    // Constructors of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactory

    constructor(config?: RTSPMediaFactory_ConstructProps) 
    /**
     * Create a new #GstRTSPMediaFactory instance.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #GstRTSPMediaFactory instance.
     * @constructor 
     */
    static new(): RTSPMediaFactory
    _init(config?: RTSPMediaFactory_ConstructProps): void
}

interface RTSPMediaFactoryURI_ConstructProps extends RTSPMediaFactory_ConstructProps {

    // Own constructor properties of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactoryURI

    uri?: string | null
    useGstpay?: boolean | null
}

interface RTSPMediaFactoryURI {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactoryURI

    uri: string
    useGstpay: boolean

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactoryURI

    parent: RTSPMediaFactory

    // Owm methods of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactoryURI

    /**
     * Get the URI that will provide media for this factory.
     */
    getUri(): string
    /**
     * Set the URI of the resource that will be streamed by this factory.
     * @param uri the uri the stream
     */
    setUri(uri: string): void

    // Class property signals of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactoryURI

    connect(sigName: "notify::uri", callback: (...args: any[]) => void): number
    on(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::uri", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::uri", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::use-gstpay", callback: (...args: any[]) => void): number
    on(sigName: "notify::use-gstpay", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::use-gstpay", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::use-gstpay", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::use-gstpay", ...args: any[]): void
    connect(sigName: "notify::bind-mcast-address", callback: (...args: any[]) => void): number
    on(sigName: "notify::bind-mcast-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bind-mcast-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bind-mcast-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bind-mcast-address", ...args: any[]): void
    connect(sigName: "notify::buffer-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer-size", ...args: any[]): void
    connect(sigName: "notify::clock", callback: (...args: any[]) => void): number
    on(sigName: "notify::clock", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clock", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clock", ...args: any[]): void
    connect(sigName: "notify::dscp-qos", callback: (...args: any[]) => void): number
    on(sigName: "notify::dscp-qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dscp-qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dscp-qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dscp-qos", ...args: any[]): void
    connect(sigName: "notify::enable-rtcp", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-rtcp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-rtcp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-rtcp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-rtcp", ...args: any[]): void
    connect(sigName: "notify::eos-shutdown", callback: (...args: any[]) => void): number
    on(sigName: "notify::eos-shutdown", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::eos-shutdown", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::eos-shutdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::eos-shutdown", ...args: any[]): void
    connect(sigName: "notify::latency", callback: (...args: any[]) => void): number
    on(sigName: "notify::latency", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::latency", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::latency", ...args: any[]): void
    connect(sigName: "notify::launch", callback: (...args: any[]) => void): number
    on(sigName: "notify::launch", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::launch", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::launch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::launch", ...args: any[]): void
    connect(sigName: "notify::max-mcast-ttl", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-mcast-ttl", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-mcast-ttl", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-mcast-ttl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-mcast-ttl", ...args: any[]): void
    connect(sigName: "notify::profiles", callback: (...args: any[]) => void): number
    on(sigName: "notify::profiles", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::profiles", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::profiles", ...args: any[]): void
    connect(sigName: "notify::protocols", callback: (...args: any[]) => void): number
    on(sigName: "notify::protocols", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::protocols", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::protocols", ...args: any[]): void
    connect(sigName: "notify::shared", callback: (...args: any[]) => void): number
    on(sigName: "notify::shared", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::shared", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::shared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::shared", ...args: any[]): void
    connect(sigName: "notify::stop-on-disconnect", callback: (...args: any[]) => void): number
    on(sigName: "notify::stop-on-disconnect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stop-on-disconnect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stop-on-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stop-on-disconnect", ...args: any[]): void
    connect(sigName: "notify::suspend-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::suspend-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::suspend-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::suspend-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::suspend-mode", ...args: any[]): void
    connect(sigName: "notify::transport-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::transport-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transport-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transport-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transport-mode", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * A media factory that creates a pipeline to play any uri.
 * @class 
 */
class RTSPMediaFactoryURI extends RTSPMediaFactory {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactoryURI

    static name: string
    static $gtype: GObject.GType<RTSPMediaFactoryURI>

    // Constructors of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactoryURI

    constructor(config?: RTSPMediaFactoryURI_ConstructProps) 
    /**
     * Create a new #GstRTSPMediaFactoryURI instance.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #GstRTSPMediaFactoryURI instance.
     * @constructor 
     */
    static new(): RTSPMediaFactoryURI

    // Overloads of new

    /**
     * Create a new #GstRTSPMediaFactory instance.
     * @constructor 
     */
    static new(): RTSPMediaFactory
    _init(config?: RTSPMediaFactoryURI_ConstructProps): void
}

interface RTSPMountPoints_ConstructProps extends GObject.Object_ConstructProps {
}

interface RTSPMountPoints {

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPMountPoints

    parent: GObject.Object

    // Owm methods of GstRtspServer-1.0.GstRtspServer.RTSPMountPoints

    /**
     * Attach `factory` to the mount point `path` in `mounts`.
     * 
     * `path` is either of the form (/node)+ or the root path '/'. (An empty path is
     * not allowed.) Any previous mount point will be freed.
     * 
     * Ownership is taken of the reference on `factory` so that `factory` should not be
     * used after calling this function.
     * @param path a mount point
     * @param factory a #GstRTSPMediaFactory
     */
    addFactory(path: string, factory: RTSPMediaFactory): void
    /**
     * Make a path string from `url`.
     * @param url a #GstRTSPUrl
     */
    makePath(url: GstRtsp.RTSPUrl): string | null
    /**
     * Find the factory in `mounts` that has the longest match with `path`.
     * 
     * If `matched` is %NULL, `path` will match the factory exactly otherwise
     * the amount of characters that matched is returned in `matched`.
     * @param path a mount point
     */
    match(path: string): [ /* returnType */ RTSPMediaFactory, /* matched */ number ]
    /**
     * Remove the #GstRTSPMediaFactory associated with `path` in `mounts`.
     * @param path a mount point
     */
    removeFactory(path: string): void

    // Class property signals of GstRtspServer-1.0.GstRtspServer.RTSPMountPoints

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Creates a #GstRTSPMediaFactory object for a given url.
 * @class 
 */
class RTSPMountPoints extends GObject.Object {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPMountPoints

    static name: string
    static $gtype: GObject.GType<RTSPMountPoints>

    // Constructors of GstRtspServer-1.0.GstRtspServer.RTSPMountPoints

    constructor(config?: RTSPMountPoints_ConstructProps) 
    /**
     * Make a new mount points object.
     * @constructor 
     */
    constructor() 
    /**
     * Make a new mount points object.
     * @constructor 
     */
    static new(): RTSPMountPoints
    _init(config?: RTSPMountPoints_ConstructProps): void
}

interface RTSPOnvifClient_ConstructProps extends RTSPClient_ConstructProps {
}

interface RTSPOnvifClient {

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPOnvifClient

    parent: RTSPClient

    // Class property signals of GstRtspServer-1.0.GstRtspServer.RTSPOnvifClient

    connect(sigName: "notify::drop-backlog", callback: (...args: any[]) => void): number
    on(sigName: "notify::drop-backlog", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::drop-backlog", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::drop-backlog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::drop-backlog", ...args: any[]): void
    connect(sigName: "notify::mount-points", callback: (...args: any[]) => void): number
    on(sigName: "notify::mount-points", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mount-points", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mount-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mount-points", ...args: any[]): void
    connect(sigName: "notify::post-session-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::post-session-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::post-session-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::post-session-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::post-session-timeout", ...args: any[]): void
    connect(sigName: "notify::session-pool", callback: (...args: any[]) => void): number
    on(sigName: "notify::session-pool", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::session-pool", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::session-pool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::session-pool", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class RTSPOnvifClient extends RTSPClient {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPOnvifClient

    static name: string
    static $gtype: GObject.GType<RTSPOnvifClient>

    // Constructors of GstRtspServer-1.0.GstRtspServer.RTSPOnvifClient

    constructor(config?: RTSPOnvifClient_ConstructProps) 
    /**
     * Create a new #GstRTSPOnvifClient instance.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #GstRTSPOnvifClient instance.
     * @constructor 
     */
    static new(): RTSPOnvifClient
    _init(config?: RTSPOnvifClient_ConstructProps): void
}

interface RTSPOnvifMedia_ConstructProps extends RTSPMedia_ConstructProps {
}

interface RTSPOnvifMedia {

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPOnvifMedia

    parent: RTSPMedia
    priv: RTSPOnvifMediaPrivate

    // Owm methods of GstRtspServer-1.0.GstRtspServer.RTSPOnvifMedia

    /**
     * Find the ONVIF backchannel depayloader element. It should be named
     * 'depay_backchannel', be placed in a bin called 'onvif-backchannel'
     * and return all supported RTP caps on a caps query. Complete RTP caps with
     * at least the payload type, clock-rate and encoding-name are required.
     * 
     * A new #GstRTSPStream is created for the backchannel if found.
     */
    collectBackchannel(): boolean
    /**
     * Get the configured/supported bandwidth of the ONVIF backchannel pipeline in
     * bits per second.
     */
    getBackchannelBandwidth(): number
    /**
     * Set the configured/supported bandwidth of the ONVIF backchannel pipeline in
     * bits per second.
     * @param bandwidth the bandwidth in bits per second
     */
    setBackchannelBandwidth(bandwidth: number): void

    // Class property signals of GstRtspServer-1.0.GstRtspServer.RTSPOnvifMedia

    connect(sigName: "notify::bind-mcast-address", callback: (...args: any[]) => void): number
    on(sigName: "notify::bind-mcast-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bind-mcast-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bind-mcast-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bind-mcast-address", ...args: any[]): void
    connect(sigName: "notify::buffer-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer-size", ...args: any[]): void
    connect(sigName: "notify::clock", callback: (...args: any[]) => void): number
    on(sigName: "notify::clock", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clock", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clock", ...args: any[]): void
    connect(sigName: "notify::dscp-qos", callback: (...args: any[]) => void): number
    on(sigName: "notify::dscp-qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dscp-qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dscp-qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dscp-qos", ...args: any[]): void
    connect(sigName: "notify::element", callback: (...args: any[]) => void): number
    on(sigName: "notify::element", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::element", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::element", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::eos-shutdown", callback: (...args: any[]) => void): number
    on(sigName: "notify::eos-shutdown", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::eos-shutdown", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::eos-shutdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::eos-shutdown", ...args: any[]): void
    connect(sigName: "notify::latency", callback: (...args: any[]) => void): number
    on(sigName: "notify::latency", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::latency", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::latency", ...args: any[]): void
    connect(sigName: "notify::max-mcast-ttl", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-mcast-ttl", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-mcast-ttl", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-mcast-ttl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-mcast-ttl", ...args: any[]): void
    connect(sigName: "notify::profiles", callback: (...args: any[]) => void): number
    on(sigName: "notify::profiles", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::profiles", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::profiles", ...args: any[]): void
    connect(sigName: "notify::protocols", callback: (...args: any[]) => void): number
    on(sigName: "notify::protocols", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::protocols", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::protocols", ...args: any[]): void
    connect(sigName: "notify::reusable", callback: (...args: any[]) => void): number
    on(sigName: "notify::reusable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reusable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reusable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reusable", ...args: any[]): void
    connect(sigName: "notify::shared", callback: (...args: any[]) => void): number
    on(sigName: "notify::shared", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::shared", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::shared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::shared", ...args: any[]): void
    connect(sigName: "notify::stop-on-disconnect", callback: (...args: any[]) => void): number
    on(sigName: "notify::stop-on-disconnect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stop-on-disconnect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stop-on-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stop-on-disconnect", ...args: any[]): void
    connect(sigName: "notify::suspend-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::suspend-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::suspend-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::suspend-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::suspend-mode", ...args: any[]): void
    connect(sigName: "notify::time-provider", callback: (...args: any[]) => void): number
    on(sigName: "notify::time-provider", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::time-provider", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::time-provider", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::time-provider", ...args: any[]): void
    connect(sigName: "notify::transport-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::transport-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transport-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transport-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transport-mode", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class RTSPOnvifMedia extends RTSPMedia {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPOnvifMedia

    static name: string
    static $gtype: GObject.GType<RTSPOnvifMedia>

    // Constructors of GstRtspServer-1.0.GstRtspServer.RTSPOnvifMedia

    constructor(config?: RTSPOnvifMedia_ConstructProps) 
    _init(config?: RTSPOnvifMedia_ConstructProps): void
}

interface RTSPOnvifMediaFactory_ConstructProps extends RTSPMediaFactory_ConstructProps {
}

interface RTSPOnvifMediaFactory {

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPOnvifMediaFactory

    parent: RTSPMediaFactory
    priv: RTSPOnvifMediaFactoryPrivate

    // Owm methods of GstRtspServer-1.0.GstRtspServer.RTSPOnvifMediaFactory

    /**
     * Get the configured/supported bandwidth of the ONVIF backchannel pipeline in
     * bits per second.
     */
    getBackchannelBandwidth(): number
    /**
     * Get the gst_parse_launch() pipeline description that will be used in the
     * default prepare vmethod for generating the ONVIF backchannel pipeline.
     */
    getBackchannelLaunch(): string
    /**
     * Returns %TRUE if an ONVIF backchannel is supported by the media factory.
     */
    hasBackchannelSupport(): boolean
    hasReplaySupport(): boolean
    /**
     * Set the configured/supported bandwidth of the ONVIF backchannel pipeline in
     * bits per second.
     * @param bandwidth the bandwidth in bits per second
     */
    setBackchannelBandwidth(bandwidth: number): void
    /**
     * The gst_parse_launch() line to use for constructing the ONVIF backchannel
     * pipeline in the default prepare vmethod if requested by the client.
     * 
     * The pipeline description should return a GstBin as the toplevel element
     * which can be accomplished by enclosing the description with brackets '('
     * ')'.
     * 
     * The description should return a pipeline with a single depayloader named
     * depay_backchannel. A caps query on the depayloader's sinkpad should return
     * all possible, complete RTP caps that are going to be supported. At least
     * the payload type, clock-rate and encoding-name need to be specified.
     * 
     * Note: The pipeline part passed here must end in sinks that are not waiting
     * until pre-rolling before reaching the PAUSED state, i.e. setting
     * async=false on #GstBaseSink. Otherwise the whole media will not be able to
     * prepare.
     * @param launch the launch description
     */
    setBackchannelLaunch(launch: string): void
    /**
     * Set to %TRUE if ONVIF replay is supported by the media factory.
     * @param hasReplaySupport 
     */
    setReplaySupport(hasReplaySupport: boolean): void

    // Class property signals of GstRtspServer-1.0.GstRtspServer.RTSPOnvifMediaFactory

    connect(sigName: "notify::bind-mcast-address", callback: (...args: any[]) => void): number
    on(sigName: "notify::bind-mcast-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bind-mcast-address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bind-mcast-address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bind-mcast-address", ...args: any[]): void
    connect(sigName: "notify::buffer-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer-size", ...args: any[]): void
    connect(sigName: "notify::clock", callback: (...args: any[]) => void): number
    on(sigName: "notify::clock", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clock", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clock", ...args: any[]): void
    connect(sigName: "notify::dscp-qos", callback: (...args: any[]) => void): number
    on(sigName: "notify::dscp-qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::dscp-qos", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::dscp-qos", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::dscp-qos", ...args: any[]): void
    connect(sigName: "notify::enable-rtcp", callback: (...args: any[]) => void): number
    on(sigName: "notify::enable-rtcp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enable-rtcp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enable-rtcp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enable-rtcp", ...args: any[]): void
    connect(sigName: "notify::eos-shutdown", callback: (...args: any[]) => void): number
    on(sigName: "notify::eos-shutdown", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::eos-shutdown", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::eos-shutdown", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::eos-shutdown", ...args: any[]): void
    connect(sigName: "notify::latency", callback: (...args: any[]) => void): number
    on(sigName: "notify::latency", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::latency", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::latency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::latency", ...args: any[]): void
    connect(sigName: "notify::launch", callback: (...args: any[]) => void): number
    on(sigName: "notify::launch", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::launch", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::launch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::launch", ...args: any[]): void
    connect(sigName: "notify::max-mcast-ttl", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-mcast-ttl", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-mcast-ttl", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-mcast-ttl", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-mcast-ttl", ...args: any[]): void
    connect(sigName: "notify::profiles", callback: (...args: any[]) => void): number
    on(sigName: "notify::profiles", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::profiles", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::profiles", ...args: any[]): void
    connect(sigName: "notify::protocols", callback: (...args: any[]) => void): number
    on(sigName: "notify::protocols", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::protocols", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::protocols", ...args: any[]): void
    connect(sigName: "notify::shared", callback: (...args: any[]) => void): number
    on(sigName: "notify::shared", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::shared", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::shared", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::shared", ...args: any[]): void
    connect(sigName: "notify::stop-on-disconnect", callback: (...args: any[]) => void): number
    on(sigName: "notify::stop-on-disconnect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stop-on-disconnect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stop-on-disconnect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stop-on-disconnect", ...args: any[]): void
    connect(sigName: "notify::suspend-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::suspend-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::suspend-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::suspend-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::suspend-mode", ...args: any[]): void
    connect(sigName: "notify::transport-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::transport-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transport-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transport-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transport-mode", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class RTSPOnvifMediaFactory extends RTSPMediaFactory {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPOnvifMediaFactory

    static name: string
    static $gtype: GObject.GType<RTSPOnvifMediaFactory>

    // Constructors of GstRtspServer-1.0.GstRtspServer.RTSPOnvifMediaFactory

    constructor(config?: RTSPOnvifMediaFactory_ConstructProps) 
    /**
     * Create a new #GstRTSPOnvifMediaFactory
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #GstRTSPOnvifMediaFactory
     * @constructor 
     */
    static new(): RTSPOnvifMediaFactory
    _init(config?: RTSPOnvifMediaFactory_ConstructProps): void
    /**
     * Checks whether the client request requires backchannel.
     * @param factory a #GstRTSPMediaFactory
     * @param ctx 
     */
    static requiresBackchannel(factory: RTSPMediaFactory, ctx: RTSPContext): boolean
}

interface RTSPOnvifServer_ConstructProps extends RTSPServer_ConstructProps {
}

interface RTSPOnvifServer {

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPOnvifServer

    parent: RTSPServer

    // Class property signals of GstRtspServer-1.0.GstRtspServer.RTSPOnvifServer

    connect(sigName: "notify::address", callback: (...args: any[]) => void): number
    on(sigName: "notify::address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::address", ...args: any[]): void
    connect(sigName: "notify::backlog", callback: (...args: any[]) => void): number
    on(sigName: "notify::backlog", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::backlog", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::backlog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::backlog", ...args: any[]): void
    connect(sigName: "notify::bound-port", callback: (...args: any[]) => void): number
    on(sigName: "notify::bound-port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bound-port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bound-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bound-port", ...args: any[]): void
    connect(sigName: "notify::content-length-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-length-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-length-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-length-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-length-limit", ...args: any[]): void
    connect(sigName: "notify::mount-points", callback: (...args: any[]) => void): number
    on(sigName: "notify::mount-points", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mount-points", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mount-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mount-points", ...args: any[]): void
    connect(sigName: "notify::service", callback: (...args: any[]) => void): number
    on(sigName: "notify::service", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: "notify::session-pool", callback: (...args: any[]) => void): number
    on(sigName: "notify::session-pool", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::session-pool", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::session-pool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::session-pool", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class RTSPOnvifServer extends RTSPServer {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPOnvifServer

    static name: string
    static $gtype: GObject.GType<RTSPOnvifServer>

    // Constructors of GstRtspServer-1.0.GstRtspServer.RTSPOnvifServer

    constructor(config?: RTSPOnvifServer_ConstructProps) 
    /**
     * Create a new #GstRTSPOnvifServer instance.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #GstRTSPOnvifServer instance.
     * @constructor 
     */
    static new(): RTSPOnvifServer
    _init(config?: RTSPOnvifServer_ConstructProps): void
}

interface RTSPServer_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GstRtspServer-1.0.GstRtspServer.RTSPServer

    address?: string | null
    backlog?: number | null
    contentLengthLimit?: number | null
    mountPoints?: RTSPMountPoints | null
    service?: string | null
    sessionPool?: RTSPSessionPool | null
}

/**
 * Signal callback interface for `client-connected`
 */
interface RTSPServer_ClientConnectedSignalCallback {
    (object: RTSPClient): void
}

interface RTSPServer {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPServer

    address: string
    backlog: number
    readonly boundPort: number
    contentLengthLimit: number
    mountPoints: RTSPMountPoints
    service: string
    sessionPool: RTSPSessionPool

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPServer

    parent: GObject.Object

    // Owm methods of GstRtspServer-1.0.GstRtspServer.RTSPServer

    /**
     * Attaches `server` to `context`. When the mainloop for `context` is run, the
     * server will be dispatched. When `context` is %NULL, the default context will be
     * used).
     * 
     * This function should be called when the server properties and urls are fully
     * configured and the server is ready to start.
     * 
     * This takes a reference on `server` until the source is destroyed. Note that
     * if `context` is not the default main context as returned by
     * g_main_context_default() (or %NULL), g_source_remove() cannot be used to
     * destroy the source. In that case it is recommended to use
     * gst_rtsp_server_create_source() and attach it to `context` manually.
     * @param context a #GMainContext
     */
    attach(context: GLib.MainContext | null): number
    /**
     * Call `func` for each client managed by `server`. The result value of `func`
     * determines what happens to the client. `func` will be called with `server`
     * locked so no further actions on `server` can be performed from `func`.
     * 
     * If `func` returns #GST_RTSP_FILTER_REMOVE, the client will be removed from
     * `server`.
     * 
     * If `func` returns #GST_RTSP_FILTER_KEEP, the client will remain in `server`.
     * 
     * If `func` returns #GST_RTSP_FILTER_REF, the client will remain in `server` but
     * will also be added with an additional ref to the result #GList of this
     * function..
     * 
     * When `func` is %NULL, #GST_RTSP_FILTER_REF will be assumed for each client.
     * @param func a callback
     */
    clientFilter(func: RTSPServerClientFilterFunc | null): RTSPClient[]
    /**
     * Create a #GSocket for `server`. The socket will listen on the
     * configured service.
     * @param cancellable a #GCancellable
     */
    createSocket(cancellable: Gio.Cancellable | null): Gio.Socket
    /**
     * Create a #GSource for `server`. The new source will have a default
     * #GSocketSourceFunc of gst_rtsp_server_io_func().
     * 
     * `cancellable` if not %NULL can be used to cancel the source, which will cause
     * the source to trigger, reporting the current condition (which is likely 0
     * unless cancellation happened at the same time as a condition change). You can
     * check for this in the callback using g_cancellable_is_cancelled().
     * 
     * This takes a reference on `server` until `source` is destroyed.
     * @param cancellable a #GCancellable or %NULL.
     */
    createSource(cancellable: Gio.Cancellable | null): GLib.Source
    /**
     * Get the address on which the server will accept connections.
     */
    getAddress(): string | null
    /**
     * Get the #GstRTSPAuth used as the authentication manager of `server`.
     */
    getAuth(): RTSPAuth | null
    /**
     * The maximum amount of queued requests for the server.
     */
    getBacklog(): number
    /**
     * Get the port number where the server was bound to.
     */
    getBoundPort(): number
    /**
     * Get the Content-Length limit of `server`.
     */
    getContentLengthLimit(): number
    /**
     * Get the #GstRTSPMountPoints used as the mount points of `server`.
     */
    getMountPoints(): RTSPMountPoints | null
    /**
     * Get the service on which the server will accept connections.
     */
    getService(): string | null
    /**
     * Get the #GstRTSPSessionPool used as the session pool of `server`.
     */
    getSessionPool(): RTSPSessionPool | null
    /**
     * Get the #GstRTSPThreadPool used as the thread pool of `server`.
     */
    getThreadPool(): RTSPThreadPool | null
    /**
     * Configure `server` to accept connections on the given address.
     * 
     * This function must be called before the server is bound.
     * @param address the address
     */
    setAddress(address: string): void
    /**
     * configure `auth` to be used as the authentication manager of `server`.
     * @param auth a #GstRTSPAuth
     */
    setAuth(auth: RTSPAuth | null): void
    /**
     * configure the maximum amount of requests that may be queued for the
     * server.
     * 
     * This function must be called before the server is bound.
     * @param backlog the backlog
     */
    setBacklog(backlog: number): void
    /**
     * Define an appropriate request size limit and reject requests exceeding the
     * limit.
     * @param limit 
     */
    setContentLengthLimit(limit: number): void
    /**
     * configure `mounts` to be used as the mount points of `server`.
     * @param mounts a #GstRTSPMountPoints
     */
    setMountPoints(mounts: RTSPMountPoints | null): void
    /**
     * Configure `server` to accept connections on the given service.
     * `service` should be a string containing the service name (see services(5)) or
     * a string containing a port number between 1 and 65535.
     * 
     * When `service` is set to "0", the server will listen on a random free
     * port. The actual used port can be retrieved with
     * gst_rtsp_server_get_bound_port().
     * 
     * This function must be called before the server is bound.
     * @param service the service
     */
    setService(service: string): void
    /**
     * configure `pool` to be used as the session pool of `server`.
     * @param pool a #GstRTSPSessionPool
     */
    setSessionPool(pool: RTSPSessionPool | null): void
    /**
     * configure `pool` to be used as the thread pool of `server`.
     * @param pool a #GstRTSPThreadPool
     */
    setThreadPool(pool: RTSPThreadPool | null): void
    /**
     * Take an existing network socket and use it for an RTSP connection. This
     * is used when transferring a socket from an HTTP server which should be used
     * as an RTSP over HTTP tunnel. The `initial_buffer` contains any remaining data
     * that the HTTP server read from the socket while parsing the HTTP header.
     * @param socket a network socket
     * @param ip the IP address of the remote client
     * @param port the port used by the other end
     * @param initialBuffer any initial data that was already read from the socket
     */
    transferConnection(socket: Gio.Socket, ip: string, port: number, initialBuffer: string | null): boolean

    // Own signals of GstRtspServer-1.0.GstRtspServer.RTSPServer

    connect(sigName: "client-connected", callback: RTSPServer_ClientConnectedSignalCallback): number
    on(sigName: "client-connected", callback: RTSPServer_ClientConnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "client-connected", callback: RTSPServer_ClientConnectedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "client-connected", callback: RTSPServer_ClientConnectedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "client-connected", ...args: any[]): void

    // Class property signals of GstRtspServer-1.0.GstRtspServer.RTSPServer

    connect(sigName: "notify::address", callback: (...args: any[]) => void): number
    on(sigName: "notify::address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::address", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::address", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::address", ...args: any[]): void
    connect(sigName: "notify::backlog", callback: (...args: any[]) => void): number
    on(sigName: "notify::backlog", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::backlog", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::backlog", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::backlog", ...args: any[]): void
    connect(sigName: "notify::bound-port", callback: (...args: any[]) => void): number
    on(sigName: "notify::bound-port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::bound-port", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::bound-port", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::bound-port", ...args: any[]): void
    connect(sigName: "notify::content-length-limit", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-length-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-length-limit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-length-limit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-length-limit", ...args: any[]): void
    connect(sigName: "notify::mount-points", callback: (...args: any[]) => void): number
    on(sigName: "notify::mount-points", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mount-points", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mount-points", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mount-points", ...args: any[]): void
    connect(sigName: "notify::service", callback: (...args: any[]) => void): number
    on(sigName: "notify::service", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::service", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::service", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: "notify::session-pool", callback: (...args: any[]) => void): number
    on(sigName: "notify::session-pool", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::session-pool", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::session-pool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::session-pool", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * This object listens on a port, creates and manages the clients connected to
 * it.
 * @class 
 */
class RTSPServer extends GObject.Object {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPServer

    static name: string
    static $gtype: GObject.GType<RTSPServer>

    // Constructors of GstRtspServer-1.0.GstRtspServer.RTSPServer

    constructor(config?: RTSPServer_ConstructProps) 
    /**
     * Create a new #GstRTSPServer instance.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #GstRTSPServer instance.
     * @constructor 
     */
    static new(): RTSPServer
    _init(config?: RTSPServer_ConstructProps): void
    /**
     * A default #GSocketSourceFunc that creates a new #GstRTSPClient to accept and handle a
     * new connection on `socket` or `server`.
     * @param socket a #GSocket
     * @param condition the condition on `source`
     * @param server a #GstRTSPServer
     */
    static ioFunc(socket: Gio.Socket, condition: GLib.IOCondition, server: RTSPServer): boolean
}

interface RTSPSession_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GstRtspServer-1.0.GstRtspServer.RTSPSession

    extraTimeout?: number | null
    sessionid?: string | null
    timeout?: number | null
    timeoutAlwaysVisible?: boolean | null
}

interface RTSPSession {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPSession

    extraTimeout: number
    readonly sessionid: string
    timeout: number
    timeoutAlwaysVisible: boolean

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPSession

    parent: GObject.Object

    // Owm methods of GstRtspServer-1.0.GstRtspServer.RTSPSession

    /**
     * Allow `session` to expire. This method must be called an equal
     * amount of time as gst_rtsp_session_prevent_expire().
     */
    allowExpire(): void
    /**
     * Gets the session media for `path,` increasing its reference count. `matched`
     * will contain the number of matched characters of `path`.
     * @param path the path for the media
     */
    dupMedia(path: string): [ /* returnType */ RTSPSessionMedia | null, /* matched */ number ]
    /**
     * Call `func` for each media in `sess`. The result value of `func` determines
     * what happens to the media. `func` will be called with `sess`
     * locked so no further actions on `sess` can be performed from `func`.
     * 
     * If `func` returns #GST_RTSP_FILTER_REMOVE, the media will be removed from
     * `sess`.
     * 
     * If `func` returns #GST_RTSP_FILTER_KEEP, the media will remain in `sess`.
     * 
     * If `func` returns #GST_RTSP_FILTER_REF, the media will remain in `sess` but
     * will also be added with an additional ref to the result #GList of this
     * function..
     * 
     * When `func` is %NULL, #GST_RTSP_FILTER_REF will be assumed for all media.
     * @param func a callback
     */
    filter(func: RTSPSessionFilterFunc | null): RTSPSessionMedia[]
    /**
     * Get the string that can be placed in the Session header field.
     */
    getHeader(): string | null
    /**
     * Gets the session media for `path`. `matched` will contain the number of matched
     * characters of `path`.
     * @param path the path for the media
     */
    getMedia(path: string): [ /* returnType */ RTSPSessionMedia | null, /* matched */ number ]
    /**
     * Get the sessionid of `session`.
     */
    getSessionid(): string | null
    /**
     * Get the timeout value of `session`.
     */
    getTimeout(): number
    /**
     * Check if `session` timeout out.
     * @param now the current system time
     */
    isExpired(now: GLib.TimeVal): boolean
    /**
     * Check if `session` timeout out.
     * @param now the current monotonic time
     */
    isExpiredUsec(now: number): boolean
    /**
     * Manage the media object `obj` in `sess`. `path` will be used to retrieve this
     * media from the session with gst_rtsp_session_get_media().
     * 
     * Ownership is taken from `media`.
     * @param path the path for the media
     * @param media a #GstRTSPMedia
     */
    manageMedia(path: string, media: RTSPMedia): RTSPSessionMedia
    /**
     * Get the amount of milliseconds till the session will expire.
     * @param now the current system time
     */
    nextTimeout(now: GLib.TimeVal): number
    /**
     * Get the amount of milliseconds till the session will expire.
     * @param now the current monotonic time
     */
    nextTimeoutUsec(now: number): number
    /**
     * Prevent `session` from expiring.
     */
    preventExpire(): void
    /**
     * Release the managed `media` in `sess,` freeing the memory allocated by it.
     * @param media a #GstRTSPMedia
     */
    releaseMedia(media: RTSPSessionMedia): boolean
    /**
     * Configure `session` for a timeout of `timeout` seconds. The session will be
     * cleaned up when there is no activity for `timeout` seconds.
     * @param timeout the new timeout
     */
    setTimeout(timeout: number): void
    /**
     * Update the last_access time of the session to the current time.
     */
    touch(): void

    // Class property signals of GstRtspServer-1.0.GstRtspServer.RTSPSession

    connect(sigName: "notify::extra-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::extra-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::extra-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::extra-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::extra-timeout", ...args: any[]): void
    connect(sigName: "notify::sessionid", callback: (...args: any[]) => void): number
    on(sigName: "notify::sessionid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sessionid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sessionid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sessionid", ...args: any[]): void
    connect(sigName: "notify::timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::timeout", ...args: any[]): void
    connect(sigName: "notify::timeout-always-visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::timeout-always-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::timeout-always-visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::timeout-always-visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::timeout-always-visible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Session information kept by the server for a specific client.
 * One client session, identified with a session id, can handle multiple medias
 * identified with the url of a media.
 * @class 
 */
class RTSPSession extends GObject.Object {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPSession

    static name: string
    static $gtype: GObject.GType<RTSPSession>

    // Constructors of GstRtspServer-1.0.GstRtspServer.RTSPSession

    constructor(config?: RTSPSession_ConstructProps) 
    /**
     * Create a new #GstRTSPSession instance with `sessionid`.
     * @constructor 
     * @param sessionid a session id
     */
    constructor(sessionid: string) 
    /**
     * Create a new #GstRTSPSession instance with `sessionid`.
     * @constructor 
     * @param sessionid a session id
     */
    static new(sessionid: string): RTSPSession
    _init(config?: RTSPSession_ConstructProps): void
}

interface RTSPSessionMedia_ConstructProps extends GObject.Object_ConstructProps {
}

interface RTSPSessionMedia {

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPSessionMedia

    parent: GObject.Object

    // Owm methods of GstRtspServer-1.0.GstRtspServer.RTSPSessionMedia

    /**
     * Fill `range` with the next available min and max channels for
     * interleaved transport.
     */
    allocChannels(): [ /* returnType */ boolean, /* range */ GstRtsp.RTSPRange ]
    /**
     * Get the base_time of the #GstRTSPMedia in `media`
     */
    getBaseTime(): Gst.ClockTime
    /**
     * Get the #GstRTSPMedia that was used when constructing `media`
     */
    getMedia(): RTSPMedia | null
    /**
     * Retrieve the RTP-Info header string for all streams in `media`
     * with configured transports.
     */
    getRtpinfo(): string | null
    /**
     * Get the current RTSP state of `media`.
     */
    getRtspState(): GstRtsp.RTSPState
    /**
     * Get a previously created #GstRTSPStreamTransport for the stream at `idx`.
     * @param idx the stream index
     */
    getTransport(idx: number): RTSPStreamTransport | null
    /**
     * Get a list of all available #GstRTSPStreamTransport in this session.
     */
    getTransports(): RTSPStreamTransport[]
    /**
     * Check if the path of `media` matches `path`. It `path` matches, the amount of
     * matched characters is returned in `matched`.
     * @param path a path
     */
    matches(path: string): [ /* returnType */ boolean, /* matched */ number ]
    /**
     * Set the RTSP state of `media` to `state`.
     * @param state a #GstRTSPState
     */
    setRtspState(state: GstRtsp.RTSPState): void
    /**
     * Tell the media object `media` to change to `state`.
     * @param state the new state
     */
    setState(state: Gst.State): boolean
    /**
     * Configure the transport for `stream` to `tr` in `media`.
     * @param stream a #GstRTSPStream
     * @param tr a #GstRTSPTransport
     */
    setTransport(stream: RTSPStream, tr: GstRtsp.RTSPTransport): RTSPStreamTransport

    // Class property signals of GstRtspServer-1.0.GstRtspServer.RTSPSessionMedia

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * State of a client session regarding a specific media identified by path.
 * @class 
 */
class RTSPSessionMedia extends GObject.Object {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPSessionMedia

    static name: string
    static $gtype: GObject.GType<RTSPSessionMedia>

    // Constructors of GstRtspServer-1.0.GstRtspServer.RTSPSessionMedia

    constructor(config?: RTSPSessionMedia_ConstructProps) 
    /**
     * Create a new #GstRTSPSessionMedia that manages the streams
     * in `media` for `path`. `media` should be prepared.
     * 
     * Ownership is taken of `media`.
     * @constructor 
     * @param path the path
     * @param media the #GstRTSPMedia
     */
    constructor(path: string, media: RTSPMedia) 
    /**
     * Create a new #GstRTSPSessionMedia that manages the streams
     * in `media` for `path`. `media` should be prepared.
     * 
     * Ownership is taken of `media`.
     * @constructor 
     * @param path the path
     * @param media the #GstRTSPMedia
     */
    static new(path: string, media: RTSPMedia): RTSPSessionMedia
    _init(config?: RTSPSessionMedia_ConstructProps): void
}

interface RTSPSessionPool_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GstRtspServer-1.0.GstRtspServer.RTSPSessionPool

    maxSessions?: number | null
}

/**
 * Signal callback interface for `session-removed`
 */
interface RTSPSessionPool_SessionRemovedSignalCallback {
    (object: RTSPSession): void
}

interface RTSPSessionPool {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPSessionPool

    maxSessions: number

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPSessionPool

    parent: GObject.Object

    // Owm methods of GstRtspServer-1.0.GstRtspServer.RTSPSessionPool

    /**
     * Inspect all the sessions in `pool` and remove the sessions that are inactive
     * for more than their timeout.
     */
    cleanup(): number
    /**
     * Create a new #GstRTSPSession object in `pool`.
     */
    create(): RTSPSession | null
    /**
     * Create a #GSource that will be dispatched when the session should be cleaned
     * up.
     */
    createWatch(): GLib.Source
    /**
     * Call `func` for each session in `pool`. The result value of `func` determines
     * what happens to the session. `func` will be called with the session pool
     * locked so no further actions on `pool` can be performed from `func`.
     * 
     * If `func` returns #GST_RTSP_FILTER_REMOVE, the session will be set to the
     * expired state and removed from `pool`.
     * 
     * If `func` returns #GST_RTSP_FILTER_KEEP, the session will remain in `pool`.
     * 
     * If `func` returns #GST_RTSP_FILTER_REF, the session will remain in `pool` but
     * will also be added with an additional ref to the result GList of this
     * function..
     * 
     * When `func` is %NULL, #GST_RTSP_FILTER_REF will be assumed for all sessions.
     * @param func a callback
     */
    filter(func: RTSPSessionPoolFilterFunc | null): RTSPSession[]
    /**
     * Find the session with `sessionid` in `pool`. The access time of the session
     * will be updated with gst_rtsp_session_touch().
     * @param sessionid the session id
     */
    find(sessionid: string): RTSPSession | null
    /**
     * Get the maximum allowed number of sessions in `pool`. 0 means an unlimited
     * amount of sessions.
     */
    getMaxSessions(): number
    /**
     * Get the amount of active sessions in `pool`.
     */
    getNSessions(): number
    /**
     * Remove `sess` from `pool,` releasing the ref that the pool has on `sess`.
     * @param sess a #GstRTSPSession
     */
    remove(sess: RTSPSession): boolean
    /**
     * Configure the maximum allowed number of sessions in `pool` to `max`.
     * A value of 0 means an unlimited amount of sessions.
     * @param max the maximum number of sessions
     */
    setMaxSessions(max: number): void

    // Own signals of GstRtspServer-1.0.GstRtspServer.RTSPSessionPool

    connect(sigName: "session-removed", callback: RTSPSessionPool_SessionRemovedSignalCallback): number
    on(sigName: "session-removed", callback: RTSPSessionPool_SessionRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "session-removed", callback: RTSPSessionPool_SessionRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "session-removed", callback: RTSPSessionPool_SessionRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "session-removed", ...args: any[]): void

    // Class property signals of GstRtspServer-1.0.GstRtspServer.RTSPSessionPool

    connect(sigName: "notify::max-sessions", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-sessions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-sessions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-sessions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-sessions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * An object that keeps track of the active sessions. This object is usually
 * attached to a #GstRTSPServer object to manage the sessions in that server.
 * @class 
 */
class RTSPSessionPool extends GObject.Object {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPSessionPool

    static name: string
    static $gtype: GObject.GType<RTSPSessionPool>

    // Constructors of GstRtspServer-1.0.GstRtspServer.RTSPSessionPool

    constructor(config?: RTSPSessionPool_ConstructProps) 
    /**
     * Create a new #GstRTSPSessionPool instance.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #GstRTSPSessionPool instance.
     * @constructor 
     */
    static new(): RTSPSessionPool
    _init(config?: RTSPSessionPool_ConstructProps): void
}

interface RTSPStream_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GstRtspServer-1.0.GstRtspServer.RTSPStream

    control?: string | null
    profiles?: GstRtsp.RTSPProfile | null
    protocols?: GstRtsp.RTSPLowerTrans | null
}

/**
 * Signal callback interface for `new-rtcp-encoder`
 */
interface RTSPStream_NewRtcpEncoderSignalCallback {
    (object: Gst.Element): void
}

/**
 * Signal callback interface for `new-rtp-encoder`
 */
interface RTSPStream_NewRtpEncoderSignalCallback {
    (object: Gst.Element): void
}

/**
 * Signal callback interface for `new-rtp-rtcp-decoder`
 */
interface RTSPStream_NewRtpRtcpDecoderSignalCallback {
    (object: Gst.Element): void
}

interface RTSPStream {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPStream

    control: string
    profiles: GstRtsp.RTSPProfile
    protocols: GstRtsp.RTSPLowerTrans

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPStream

    parent: GObject.Object

    // Owm methods of GstRtspServer-1.0.GstRtspServer.RTSPStream

    /**
     * Add multicast client address to stream. At this point, the sockets that
     * will stream RTP and RTCP data to `destination` are supposed to be
     * allocated.
     * @param destination a multicast address to add
     * @param rtpPort RTP port
     * @param rtcpPort RTCP port
     * @param family socket family
     */
    addMulticastClientAddress(destination: string, rtpPort: number, rtcpPort: number, family: Gio.SocketFamily): boolean
    /**
     * Add the transport in `trans` to `stream`. The media of `stream` will
     * then also be send to the values configured in `trans`. Adding the
     * same transport twice will not add it a second time.
     * 
     * `stream` must be joined to a bin.
     * 
     * `trans` must contain a valid #GstRTSPTransport.
     * @param trans a #GstRTSPStreamTransport
     */
    addTransport(trans: RTSPStreamTransport): boolean
    /**
     * Allocates RTP and RTCP ports.
     * @param family protocol family
     * @param transport transport method
     * @param useClientSettings Whether to use client settings or not
     */
    allocateUdpSockets(family: Gio.SocketFamily, transport: GstRtsp.RTSPTransport, useClientSettings: boolean): boolean
    /**
     * Add a receiver and sender part to the pipeline based on the transport from
     * SETUP.
     * @param transport a #GstRTSPTransport
     */
    completeStream(transport: GstRtsp.RTSPTransport): boolean
    /**
     * Get the #GstRTSPAddressPool used as the address pool of `stream`.
     */
    getAddressPool(): RTSPAddressPool | null
    /**
     * Get the size of the UDP transmission buffer (in bytes)
     */
    getBufferSize(): number
    /**
     * Retrieve the current caps of `stream`.
     */
    getCaps(): Gst.Caps | null
    /**
     * Get the control string to identify this stream.
     */
    getControl(): string | null
    getCurrentSeqnum(): number
    /**
     * Get the configured DSCP QoS in of the outgoing sockets.
     */
    getDscpQos(): number
    /**
     * Get the stream index.
     */
    getIndex(): number
    /**
     * Get the previous joined bin with gst_rtsp_stream_join_bin() or NULL.
     */
    getJoinedBin(): Gst.Bin | null
    /**
     * Get the the maximum time-to-live value of outgoing multicast packets.
     */
    getMaxMcastTtl(): number
    /**
     * Get the configured MTU in the payloader of `stream`.
     */
    getMtu(): number
    /**
     * Get the multicast address of `stream` for `family`. The original
     * #GstRTSPAddress is cached and copy is returned, so freeing the return value
     * won't release the address from the pool.
     * @param family the #GSocketFamily
     */
    getMulticastAddress(family: Gio.SocketFamily): RTSPAddress | null
    /**
     * Get all multicast client addresses that RTP data will be sent to
     */
    getMulticastClientAddresses(): string
    /**
     * Get the multicast interface used for `stream`.
     */
    getMulticastIface(): string | null
    /**
     * Get the allowed profiles of `stream`.
     */
    getProfiles(): GstRtsp.RTSPProfile
    /**
     * Get the allowed protocols of `stream`.
     */
    getProtocols(): GstRtsp.RTSPLowerTrans
    /**
     * Get the stream payload type.
     */
    getPt(): number
    /**
     * Gets if and how the stream clock should be published according to RFC7273.
     */
    getPublishClockMode(): RTSPPublishClockMode
    getRateControl(): boolean
    /**
     * Retrieve the current rate and/or applied_rate.
     */
    getRates(): [ /* returnType */ boolean, /* rate */ number, /* appliedRate */ number ]
    /**
     * Get the payload-type used for retransmission of this stream
     */
    getRetransmissionPt(): number
    /**
     * Get the amount of time to store retransmission data.
     */
    getRetransmissionTime(): Gst.ClockTime
    /**
     * Get the multicast RTCP socket from `stream` for a `family`.
     * @param family the socket family
     */
    getRtcpMulticastSocket(family: Gio.SocketFamily): Gio.Socket | null
    /**
     * Get the RTCP socket from `stream` for a `family`.
     * 
     * `stream` must be joined to a bin.
     * @param family the socket family
     */
    getRtcpSocket(family: Gio.SocketFamily): Gio.Socket | null
    /**
     * Get the multicast RTP socket from `stream` for a `family`.
     * @param family the socket family
     */
    getRtpMulticastSocket(family: Gio.SocketFamily): Gio.Socket | null
    /**
     * Get the RTP socket from `stream` for a `family`.
     * 
     * `stream` must be joined to a bin.
     * @param family the socket family
     */
    getRtpSocket(family: Gio.SocketFamily): Gio.Socket | null
    /**
     * Retrieve the current rtptime, seq and running-time. This is used to
     * construct a RTPInfo reply header.
     */
    getRtpinfo(): [ /* returnType */ boolean, /* rtptime */ number, /* seq */ number, /* clockRate */ number, /* runningTime */ Gst.ClockTime ]
    /**
     * Get the RTP session of this stream.
     */
    getRtpsession(): GObject.Object
    /**
     * Fill `server_port` with the port pair used by the server. This function can
     * only be called when `stream` has been joined.
     * @param family the port family to get
     */
    getServerPort(family: Gio.SocketFamily): /* serverPort */ GstRtsp.RTSPRange
    /**
     * Get the sinkpad associated with `stream`.
     */
    getSinkpad(): Gst.Pad | null
    /**
     * Get the srcpad associated with `stream`.
     */
    getSrcpad(): Gst.Pad | null
    /**
     * Get the SRTP encoder for this stream.
     */
    getSrtpEncoder(): Gst.Element
    /**
     * Get the SSRC used by the RTP session of this stream. This function can only
     * be called when `stream` has been joined.
     */
    getSsrc(): /* ssrc */ number
    getUlpfecEnabled(): boolean
    getUlpfecPercentage(): number
    getUlpfecPt(): number
    /**
     * Parse and handle a KeyMgmt header.
     * @param keymgmt a keymgmt header
     */
    handleKeymgmt(keymgmt: string): boolean
    /**
     * Check if `stream` has the control string `control`.
     * @param control a control string
     */
    hasControl(control: string | null): boolean
    /**
     * Check if multicast sockets are configured to be bound to multicast addresses.
     */
    isBindMcastAddress(): boolean
    /**
     * Check if `stream` is blocking on a #GstBuffer.
     */
    isBlocking(): boolean
    /**
     * See gst_rtsp_stream_set_client_side()
     */
    isClientSide(): boolean
    /**
     * Checks whether the stream is complete, contains the receiver and the sender
     * parts. As the stream contains sink(s) element(s), it's possible to perform
     * seek operations on it.
     */
    isComplete(): boolean
    /**
     * Checks whether the stream is a receiver.
     */
    isReceiver(): boolean
    /**
     * Checks whether the stream is a sender.
     */
    isSender(): boolean
    /**
     * Check if `transport` can be handled by stream
     * @param transport a #GstRTSPTransport
     */
    isTransportSupported(transport: GstRtsp.RTSPTransport): boolean
    /**
     * Join the #GstBin `bin` that contains the element `rtpbin`.
     * 
     * `stream` will link to `rtpbin,` which must be inside `bin`. The elements
     * added to `bin` will be set to the state given in `state`.
     * @param bin a #GstBin to join
     * @param rtpbin a rtpbin element in `bin`
     * @param state the target state of the new elements
     */
    joinBin(bin: Gst.Bin, rtpbin: Gst.Element, state: Gst.State): boolean
    /**
     * Remove the elements of `stream` from `bin`.
     * @param bin a #GstBin
     * @param rtpbin a rtpbin #GstElement
     */
    leaveBin(bin: Gst.Bin, rtpbin: Gst.Element): boolean
    /**
     * Query the position of the stream in %GST_FORMAT_TIME. This only considers
     * the RTP parts of the pipeline and not the RTCP parts.
     */
    queryPosition(): [ /* returnType */ boolean, /* position */ number ]
    /**
     * Query the stop of the stream in %GST_FORMAT_TIME. This only considers
     * the RTP parts of the pipeline and not the RTCP parts.
     */
    queryStop(): [ /* returnType */ boolean, /* stop */ number ]
    /**
     * Handle an RTCP buffer for the stream. This method is usually called when a
     * message has been received from a client using the TCP transport.
     * 
     * This function takes ownership of `buffer`.
     * @param buffer a #GstBuffer
     */
    recvRtcp(buffer: Gst.Buffer): Gst.FlowReturn
    /**
     * Handle an RTP buffer for the stream. This method is usually called when a
     * message has been received from a client using the TCP transport.
     * 
     * This function takes ownership of `buffer`.
     * @param buffer a #GstBuffer
     */
    recvRtp(buffer: Gst.Buffer): Gst.FlowReturn
    /**
     * Remove the transport in `trans` from `stream`. The media of `stream` will
     * not be sent to the values configured in `trans`.
     * 
     * `stream` must be joined to a bin.
     * 
     * `trans` must contain a valid #GstRTSPTransport.
     * @param trans a #GstRTSPStreamTransport
     */
    removeTransport(trans: RTSPStreamTransport): boolean
    /**
     * Creating a rtxreceive bin
     * @param sessid the session id
     */
    requestAuxReceiver(sessid: number): Gst.Element | null
    /**
     * Creating a rtxsend bin
     * @param sessid the session id
     */
    requestAuxSender(sessid: number): Gst.Element | null
    /**
     * Creating a rtpulpfecdec element
     * @param rtpbin 
     * @param sessid 
     */
    requestUlpfecDecoder(rtpbin: Gst.Element, sessid: number): Gst.Element | null
    /**
     * Creating a rtpulpfecenc element
     * @param sessid 
     */
    requestUlpfecEncoder(sessid: number): Gst.Element | null
    /**
     * Reserve `address` and `port` as the address and port of `stream`. The original
     * #GstRTSPAddress is cached and copy is returned, so freeing the return value
     * won't release the address from the pool.
     * @param address an address
     * @param port a port
     * @param nPorts n_ports
     * @param ttl a TTL
     */
    reserveAddress(address: string, port: number, nPorts: number, ttl: number): RTSPAddress | null
    /**
     * Checks whether the individual `stream` is seekable.
     */
    seekable(): boolean
    /**
     * configure `pool` to be used as the address pool of `stream`.
     * @param pool a #GstRTSPAddressPool
     */
    setAddressPool(pool: RTSPAddressPool | null): void
    /**
     * Decide whether the multicast socket should be bound to a multicast address or
     * INADDR_ANY.
     * @param bindMcastAddr the new value
     */
    setBindMcastAddress(bindMcastAddr: boolean): void
    /**
     * Blocks or unblocks the dataflow on `stream`.
     * @param blocked boolean indicating we should block or unblock
     */
    setBlocked(blocked: boolean): boolean
    /**
     * Set the size of the UDP transmission buffer (in bytes)
     * Needs to be set before the stream is joined to a bin.
     * @param size the buffer size
     */
    setBufferSize(size: number): void
    /**
     * Sets the #GstRTSPStream as a 'client side' stream - used for sending
     * streams to an RTSP server via RECORD. This has the practical effect
     * of changing which UDP port numbers are used when setting up the local
     * side of the stream sending to be either the 'server' or 'client' pair
     * of a configured UDP transport.
     * @param clientSide TRUE if this #GstRTSPStream is running on the 'client' side of an RTSP connection.
     */
    setClientSide(clientSide: boolean): void
    /**
     * Set the control string in `stream`.
     * @param control a control string
     */
    setControl(control: string | null): void
    /**
     * Configure the dscp qos of the outgoing sockets to `dscp_qos`.
     * @param dscpQos a new dscp qos value (0-63, or -1 to disable)
     */
    setDscpQos(dscpQos: number): void
    /**
     * Set the maximum time-to-live value of outgoing multicast packets.
     * @param ttl the new multicast ttl value
     */
    setMaxMcastTtl(ttl: number): boolean
    /**
     * Configure the mtu in the payloader of `stream` to `mtu`.
     * @param mtu a new MTU
     */
    setMtu(mtu: number): void
    /**
     * configure `multicast_iface` to be used for `stream`.
     * @param multicastIface a multicast interface name
     */
    setMulticastIface(multicastIface: string | null): void
    /**
     * Configure the allowed profiles for `stream`.
     * @param profiles the new profiles
     */
    setProfiles(profiles: GstRtsp.RTSPProfile): void
    /**
     * Configure the allowed lower transport for `stream`.
     * @param protocols the new flags
     */
    setProtocols(protocols: GstRtsp.RTSPLowerTrans): void
    /**
     * Configure a pt map between `pt` and `caps`.
     * @param pt the pt
     * @param caps a #GstCaps
     */
    setPtMap(pt: number, caps: Gst.Caps): void
    /**
     * Sets if and how the stream clock should be published according to RFC7273.
     * @param mode the clock publish mode
     */
    setPublishClockMode(mode: RTSPPublishClockMode): void
    /**
     * Define whether `stream` will follow the Rate-Control=no behaviour as specified
     * in the ONVIF replay spec.
     * @param enabled 
     */
    setRateControl(enabled: boolean): void
    /**
     * Set the payload type (pt) for retransmission of this stream.
     * @param rtxPt a #guint
     */
    setRetransmissionPt(rtxPt: number): void
    /**
     * Set the amount of time to store retransmission packets.
     * @param time a #GstClockTime
     */
    setRetransmissionTime(time: Gst.ClockTime): void
    setSeqnumOffset(seqnum: number): void
    /**
     * Sets the amount of redundancy to apply when creating ULPFEC
     * protection packets.
     * @param percentage 
     */
    setUlpfecPercentage(percentage: number): void
    /**
     * Set the payload type to be used for ULPFEC protection packets
     * @param pt 
     */
    setUlpfecPt(pt: number): void
    /**
     * Call `func` for each transport managed by `stream`. The result value of `func`
     * determines what happens to the transport. `func` will be called with `stream`
     * locked so no further actions on `stream` can be performed from `func`.
     * 
     * If `func` returns #GST_RTSP_FILTER_REMOVE, the transport will be removed from
     * `stream`.
     * 
     * If `func` returns #GST_RTSP_FILTER_KEEP, the transport will remain in `stream`.
     * 
     * If `func` returns #GST_RTSP_FILTER_REF, the transport will remain in `stream` but
     * will also be added with an additional ref to the result #GList of this
     * function..
     * 
     * When `func` is %NULL, #GST_RTSP_FILTER_REF will be assumed for each transport.
     * @param func a callback
     */
    transportFilter(func: RTSPStreamTransportFilterFunc | null): RTSPStreamTransport[]
    unblockLinked(): boolean
    /**
     * Remove blocking probe from the RTCP source. When creating an UDP source for
     * RTCP it is initially blocked until this function is called.
     * This functions should be called once the pipeline is ready for handling RTCP
     * packets.
     */
    unblockRtcp(): void
    /**
     * Update the new crypto information for `ssrc` in `stream`. If information
     * for `ssrc` did not exist, it will be added. If information
     * for `ssrc` existed, it will be replaced. If `crypto` is %NULL, it will
     * be removed from `stream`.
     * @param ssrc the SSRC
     * @param crypto a #GstCaps with crypto info
     */
    updateCrypto(ssrc: number, crypto: Gst.Caps | null): boolean
    /**
     * Check if the requested multicast ttl value is allowed.
     * @param ttl a requested multicast ttl
     */
    verifyMcastTtl(ttl: number): boolean

    // Own signals of GstRtspServer-1.0.GstRtspServer.RTSPStream

    connect(sigName: "new-rtcp-encoder", callback: RTSPStream_NewRtcpEncoderSignalCallback): number
    on(sigName: "new-rtcp-encoder", callback: RTSPStream_NewRtcpEncoderSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-rtcp-encoder", callback: RTSPStream_NewRtcpEncoderSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-rtcp-encoder", callback: RTSPStream_NewRtcpEncoderSignalCallback): NodeJS.EventEmitter
    emit(sigName: "new-rtcp-encoder", ...args: any[]): void
    connect(sigName: "new-rtp-encoder", callback: RTSPStream_NewRtpEncoderSignalCallback): number
    on(sigName: "new-rtp-encoder", callback: RTSPStream_NewRtpEncoderSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-rtp-encoder", callback: RTSPStream_NewRtpEncoderSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-rtp-encoder", callback: RTSPStream_NewRtpEncoderSignalCallback): NodeJS.EventEmitter
    emit(sigName: "new-rtp-encoder", ...args: any[]): void
    connect(sigName: "new-rtp-rtcp-decoder", callback: RTSPStream_NewRtpRtcpDecoderSignalCallback): number
    on(sigName: "new-rtp-rtcp-decoder", callback: RTSPStream_NewRtpRtcpDecoderSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-rtp-rtcp-decoder", callback: RTSPStream_NewRtpRtcpDecoderSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-rtp-rtcp-decoder", callback: RTSPStream_NewRtpRtcpDecoderSignalCallback): NodeJS.EventEmitter
    emit(sigName: "new-rtp-rtcp-decoder", ...args: any[]): void

    // Class property signals of GstRtspServer-1.0.GstRtspServer.RTSPStream

    connect(sigName: "notify::control", callback: (...args: any[]) => void): number
    on(sigName: "notify::control", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::control", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::control", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::control", ...args: any[]): void
    connect(sigName: "notify::profiles", callback: (...args: any[]) => void): number
    on(sigName: "notify::profiles", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::profiles", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::profiles", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::profiles", ...args: any[]): void
    connect(sigName: "notify::protocols", callback: (...args: any[]) => void): number
    on(sigName: "notify::protocols", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::protocols", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::protocols", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::protocols", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The definition of a media stream.
 * @class 
 */
class RTSPStream extends GObject.Object {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPStream

    static name: string
    static $gtype: GObject.GType<RTSPStream>

    // Constructors of GstRtspServer-1.0.GstRtspServer.RTSPStream

    constructor(config?: RTSPStream_ConstructProps) 
    /**
     * Create a new media stream with index `idx` that handles RTP data on
     * `pad` and has a payloader element `payloader` if `pad` is a source pad
     * or a depayloader element `payloader` if `pad` is a sink pad.
     * @constructor 
     * @param idx an index
     * @param payloader a #GstElement
     * @param pad a #GstPad
     */
    constructor(idx: number, payloader: Gst.Element, pad: Gst.Pad) 
    /**
     * Create a new media stream with index `idx` that handles RTP data on
     * `pad` and has a payloader element `payloader` if `pad` is a source pad
     * or a depayloader element `payloader` if `pad` is a sink pad.
     * @constructor 
     * @param idx an index
     * @param payloader a #GstElement
     * @param pad a #GstPad
     */
    static new(idx: number, payloader: Gst.Element, pad: Gst.Pad): RTSPStream
    _init(config?: RTSPStream_ConstructProps): void
}

interface RTSPStreamTransport_ConstructProps extends GObject.Object_ConstructProps {
}

interface RTSPStreamTransport {

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPStreamTransport

    /**
     * parent instance
     * @field 
     */
    parent: GObject.Object

    // Owm methods of GstRtspServer-1.0.GstRtspServer.RTSPStreamTransport

    /**
     * Get the RTP-Info string for `trans` and `start_time`.
     * @param startTime a star time
     */
    getRtpinfo(startTime: Gst.ClockTime): string | null
    /**
     * Get the #GstRTSPStream used when constructing `trans`.
     */
    getStream(): RTSPStream | null
    /**
     * Get the transport configured in `trans`.
     */
    getTransport(): GstRtsp.RTSPTransport | null
    /**
     * Get the url configured in `trans`.
     */
    getUrl(): GstRtsp.RTSPUrl | null
    /**
     * Check if `trans` is timed out.
     */
    isTimedOut(): boolean
    /**
     * Signal the installed keep_alive callback for `trans`.
     */
    keepAlive(): void
    /**
     * Signal the installed message_sent / message_sent_full callback for `trans`.
     */
    messageSent(): void
    /**
     * Receive `buffer` on `channel` `trans`.
     * @param channel a channel
     * @param buffer a #GstBuffer
     */
    recvData(channel: number, buffer: Gst.Buffer): Gst.FlowReturn
    /**
     * Send `buffer` to the installed RTCP callback for `trans`.
     * @param buffer a #GstBuffer
     */
    sendRtcp(buffer: Gst.Buffer): boolean
    /**
     * Send `buffer_list` to the installed RTCP callback for `trans`.
     * @param bufferList a #GstBuffer
     */
    sendRtcpList(bufferList: Gst.BufferList): boolean
    /**
     * Send `buffer` to the installed RTP callback for `trans`.
     * @param buffer a #GstBuffer
     */
    sendRtp(buffer: Gst.Buffer): boolean
    /**
     * Send `buffer_list` to the installed RTP callback for `trans`.
     * @param bufferList a #GstBufferList
     */
    sendRtpList(bufferList: Gst.BufferList): boolean
    /**
     * Activate or deactivate datatransfer configured in `trans`.
     * @param active new state of `trans`
     */
    setActive(active: boolean): boolean
    /**
     * Install callbacks that will be called when data for a stream should be sent
     * to a client. This is usually used when sending RTP/RTCP over TCP.
     * @param sendRtp a callback called when RTP should be sent
     * @param sendRtcp a callback called when RTCP should be sent
     */
    setCallbacks(sendRtp: RTSPSendFunc, sendRtcp: RTSPSendFunc): void
    /**
     * Install callbacks that will be called when RTCP packets are received from the
     * receiver of `trans`.
     * @param keepAlive a callback called when the receiver is active
     */
    setKeepalive(keepAlive: RTSPKeepAliveFunc): void
    /**
     * Install callbacks that will be called when data for a stream should be sent
     * to a client. This is usually used when sending RTP/RTCP over TCP.
     * @param sendRtpList a callback called when RTP should be sent
     * @param sendRtcpList a callback called when RTCP should be sent
     */
    setListCallbacks(sendRtpList: RTSPSendListFunc, sendRtcpList: RTSPSendListFunc): void
    /**
     * Install a callback that will be called when a message has been sent on `trans`.
     * @param messageSent a callback called when a message has been sent
     */
    setMessageSent(messageSent: RTSPMessageSentFunc): void
    /**
     * Install a callback that will be called when a message has been sent on `trans`.
     * @param messageSent a callback called when a message has been sent
     */
    setMessageSentFull(messageSent: RTSPMessageSentFuncFull): void
    /**
     * Set the timed out state of `trans` to `timedout`
     * @param timedout timed out value
     */
    setTimedOut(timedout: boolean): void
    /**
     * Set `tr` as the client transport. This function takes ownership of the
     * passed `tr`.
     * @param tr a client #GstRTSPTransport
     */
    setTransport(tr: GstRtsp.RTSPTransport): void
    /**
     * Set `url` as the client url.
     * @param url a client #GstRTSPUrl
     */
    setUrl(url: GstRtsp.RTSPUrl | null): void

    // Class property signals of GstRtspServer-1.0.GstRtspServer.RTSPStreamTransport

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * A Transport description for a stream
 * @class 
 */
class RTSPStreamTransport extends GObject.Object {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPStreamTransport

    static name: string
    static $gtype: GObject.GType<RTSPStreamTransport>

    // Constructors of GstRtspServer-1.0.GstRtspServer.RTSPStreamTransport

    constructor(config?: RTSPStreamTransport_ConstructProps) 
    /**
     * Create a new #GstRTSPStreamTransport that can be used to manage
     * `stream` with transport `tr`.
     * @constructor 
     * @param stream a #GstRTSPStream
     * @param tr a GstRTSPTransport
     */
    constructor(stream: RTSPStream, tr: GstRtsp.RTSPTransport) 
    /**
     * Create a new #GstRTSPStreamTransport that can be used to manage
     * `stream` with transport `tr`.
     * @constructor 
     * @param stream a #GstRTSPStream
     * @param tr a GstRTSPTransport
     */
    static new(stream: RTSPStream, tr: GstRtsp.RTSPTransport): RTSPStreamTransport
    _init(config?: RTSPStreamTransport_ConstructProps): void
}

interface RTSPThreadPool_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GstRtspServer-1.0.GstRtspServer.RTSPThreadPool

    maxThreads?: number | null
}

interface RTSPThreadPool {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPThreadPool

    maxThreads: number

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPThreadPool

    parent: GObject.Object

    // Owm methods of GstRtspServer-1.0.GstRtspServer.RTSPThreadPool

    /**
     * Get the maximum number of threads used for client connections.
     * See gst_rtsp_thread_pool_set_max_threads().
     */
    getMaxThreads(): number
    /**
     * Get a new #GstRTSPThread for `type` and `ctx`.
     * @param type the #GstRTSPThreadType
     * @param ctx a #GstRTSPContext
     */
    getThread(type: RTSPThreadType, ctx: RTSPContext): RTSPThread | null
    /**
     * Set the maximum threads used by the pool to handle client requests.
     * A value of 0 will use the pool mainloop, a value of -1 will use an
     * unlimited number of threads.
     * @param maxThreads maximum threads
     */
    setMaxThreads(maxThreads: number): void

    // Class property signals of GstRtspServer-1.0.GstRtspServer.RTSPThreadPool

    connect(sigName: "notify::max-threads", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-threads", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-threads", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-threads", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-threads", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The thread pool structure.
 * @class 
 */
class RTSPThreadPool extends GObject.Object {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPThreadPool

    static name: string
    static $gtype: GObject.GType<RTSPThreadPool>

    // Constructors of GstRtspServer-1.0.GstRtspServer.RTSPThreadPool

    constructor(config?: RTSPThreadPool_ConstructProps) 
    /**
     * Create a new #GstRTSPThreadPool instance.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #GstRTSPThreadPool instance.
     * @constructor 
     */
    static new(): RTSPThreadPool
    _init(config?: RTSPThreadPool_ConstructProps): void
    /**
     * Wait for all tasks to be stopped and free all allocated resources. This is
     * mainly used in test suites to ensure proper cleanup of internal data
     * structures.
     */
    static cleanup(): void
}

interface RTSPAddress {

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPAddress

    /**
     * the #GstRTSPAddressPool owner of this address
     * @field 
     */
    pool: RTSPAddressPool
    /**
     * the address
     * @field 
     */
    address: string
    /**
     * the port number
     * @field 
     */
    port: number
    /**
     * number of ports
     * @field 
     */
    nPorts: number
    /**
     * TTL or 0 for unicast addresses
     * @field 
     */
    ttl: number

    // Owm methods of GstRtspServer-1.0.GstRtspServer.RTSPAddress

    /**
     * Make a copy of `addr`.
     */
    copy(): RTSPAddress
    /**
     * Free `addr` and releasing it back into the pool when owned by a
     * pool.
     */
    free(): void
}

/**
 * An address
 * @record 
 */
class RTSPAddress {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPAddress

    static name: string
}

interface RTSPAddressPoolClass {

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPAddressPoolClass

    parentClass: GObject.ObjectClass
}

/**
 * Opaque Address pool class.
 * @record 
 */
abstract class RTSPAddressPoolClass {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPAddressPoolClass

    static name: string
}

interface RTSPAddressPoolPrivate {
}

class RTSPAddressPoolPrivate {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPAddressPoolPrivate

    static name: string
}

interface RTSPAuthClass {

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPAuthClass

    parentClass: GObject.ObjectClass
    authenticate: (auth: RTSPAuth, ctx: RTSPContext) => boolean
    check: (auth: RTSPAuth, ctx: RTSPContext, check: string) => boolean
    generateAuthenticateHeader: (auth: RTSPAuth, ctx: RTSPContext) => void
    acceptCertificate: (auth: RTSPAuth, connection: Gio.TlsConnection, peerCert: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => boolean
}

/**
 * The authentication class.
 * @record 
 */
abstract class RTSPAuthClass {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPAuthClass

    static name: string
}

interface RTSPAuthPrivate {
}

class RTSPAuthPrivate {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPAuthPrivate

    static name: string
}

interface RTSPClientClass {

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPClientClass

    parentClass: GObject.ObjectClass
    createSdp: (client: RTSPClient, media: RTSPMedia) => GstSdp.SDPMessage
    configureClientMedia: (client: RTSPClient, media: RTSPMedia, stream: RTSPStream, ctx: RTSPContext) => boolean
    configureClientTransport: (client: RTSPClient, ctx: RTSPContext, ct: GstRtsp.RTSPTransport) => boolean
    paramsSet: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPResult
    paramsGet: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPResult
    makePathFromUri: (client: RTSPClient, uri: GstRtsp.RTSPUrl) => string
    adjustPlayMode: (client: RTSPClient, context: RTSPContext, range: GstRtsp.RTSPTimeRange, flags: Gst.SeekFlags, rate: number, trickmodeInterval: Gst.ClockTime, enableRateControl: boolean) => GstRtsp.RTSPStatusCode
    adjustPlayResponse: (client: RTSPClient, context: RTSPContext) => GstRtsp.RTSPStatusCode
    closed: (client: RTSPClient) => void
    newSession: (client: RTSPClient, session: RTSPSession) => void
    optionsRequest: (client: RTSPClient, ctx: RTSPContext) => void
    describeRequest: (client: RTSPClient, ctx: RTSPContext) => void
    setupRequest: (client: RTSPClient, ctx: RTSPContext) => void
    playRequest: (client: RTSPClient, ctx: RTSPContext) => void
    pauseRequest: (client: RTSPClient, ctx: RTSPContext) => void
    teardownRequest: (client: RTSPClient, ctx: RTSPContext) => void
    setParameterRequest: (client: RTSPClient, ctx: RTSPContext) => void
    getParameterRequest: (client: RTSPClient, ctx: RTSPContext) => void
    handleResponse: (client: RTSPClient, ctx: RTSPContext) => void
    tunnelHttpResponse: (client: RTSPClient, request: GstRtsp.RTSPMessage, response: GstRtsp.RTSPMessage) => void
    sendMessage: (client: RTSPClient, ctx: RTSPContext, response: GstRtsp.RTSPMessage) => void
    handleSdp: (client: RTSPClient, ctx: RTSPContext, media: RTSPMedia, sdp: GstSdp.SDPMessage) => boolean
    announceRequest: (client: RTSPClient, ctx: RTSPContext) => void
    recordRequest: (client: RTSPClient, ctx: RTSPContext) => void
    checkRequirements: (client: RTSPClient, ctx: RTSPContext, arr: string) => string
    preOptionsRequest: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    preDescribeRequest: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    preSetupRequest: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    prePlayRequest: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    prePauseRequest: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    preTeardownRequest: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    preSetParameterRequest: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    preGetParameterRequest: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    preAnnounceRequest: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    preRecordRequest: (client: RTSPClient, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
}

/**
 * The client class structure.
 * @record 
 */
abstract class RTSPClientClass {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPClientClass

    static name: string
}

interface RTSPClientPrivate {
}

class RTSPClientPrivate {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPClientPrivate

    static name: string
}

interface RTSPContext {

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPContext

    /**
     * the server
     * @field 
     */
    server: RTSPServer
    /**
     * the connection
     * @field 
     */
    conn: GstRtsp.RTSPConnection
    /**
     * the client
     * @field 
     */
    client: RTSPClient
    /**
     * the complete request
     * @field 
     */
    request: GstRtsp.RTSPMessage
    /**
     * the complete url parsed from `request`
     * @field 
     */
    uri: GstRtsp.RTSPUrl
    /**
     * the parsed method of `uri`
     * @field 
     */
    method: GstRtsp.RTSPMethod
    /**
     * the current auth object or %NULL
     * @field 
     */
    auth: RTSPAuth
    /**
     * authorisation token
     * @field 
     */
    token: RTSPToken
    /**
     * the session, can be %NULL
     * @field 
     */
    session: RTSPSession
    /**
     * the session media for the url can be %NULL
     * @field 
     */
    sessmedia: RTSPSessionMedia
    /**
     * the media factory for the url, can be %NULL
     * @field 
     */
    factory: RTSPMediaFactory
    /**
     * the media for the url can be %NULL
     * @field 
     */
    media: RTSPMedia
    /**
     * the stream for the url can be %NULL
     * @field 
     */
    stream: RTSPStream
    /**
     * the response
     * @field 
     */
    response: GstRtsp.RTSPMessage
    /**
     * the stream transport, can be %NULL
     * @field 
     */
    trans: RTSPStreamTransport

    // Owm methods of GstRtspServer-1.0.GstRtspServer.RTSPContext

    /**
     * Pops `ctx` off the context stack (verifying that `ctx`
     * is on the top of the stack).
     */
    popCurrent(): void
    /**
     * Pushes `ctx` onto the context stack. The current
     * context can then be received using gst_rtsp_context_get_current().
     */
    pushCurrent(): void
}

/**
 * Information passed around containing the context of a request.
 * @record 
 */
class RTSPContext {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPContext

    static name: string
}

interface RTSPMediaClass {

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPMediaClass

    parentClass: GObject.ObjectClass
    handleMessage: (media: RTSPMedia, message: Gst.Message) => boolean
    prepare: (media: RTSPMedia, thread: RTSPThread | null) => boolean
    unprepare: (media: RTSPMedia) => boolean
    suspend: (media: RTSPMedia) => boolean
    unsuspend: (media: RTSPMedia) => boolean
    convertRange: (media: RTSPMedia, range: GstRtsp.RTSPTimeRange, unit: GstRtsp.RTSPRangeUnit) => boolean
    queryPosition: (media: RTSPMedia, position: number) => boolean
    queryStop: (media: RTSPMedia, stop: number) => boolean
    setupRtpbin: (media: RTSPMedia, rtpbin: Gst.Element) => boolean
    setupSdp: (media: RTSPMedia, sdp: GstSdp.SDPMessage, info: SDPInfo) => boolean
    newStream: (media: RTSPMedia, stream: RTSPStream) => void
    removedStream: (media: RTSPMedia, stream: RTSPStream) => void
    prepared: (media: RTSPMedia) => void
    unprepared: (media: RTSPMedia) => void
    targetState: (media: RTSPMedia, state: Gst.State) => void
    newState: (media: RTSPMedia, state: Gst.State) => void
    handleSdp: (media: RTSPMedia, sdp: GstSdp.SDPMessage) => boolean
}

/**
 * The RTSP media class
 * @record 
 */
abstract class RTSPMediaClass {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPMediaClass

    static name: string
}

interface RTSPMediaFactoryClass {

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactoryClass

    parentClass: GObject.ObjectClass
    genKey: (factory: RTSPMediaFactory, url: GstRtsp.RTSPUrl) => string
    createElement: (factory: RTSPMediaFactory, url: GstRtsp.RTSPUrl) => Gst.Element
    construct: (factory: RTSPMediaFactory, url: GstRtsp.RTSPUrl) => RTSPMedia
    configure: (factory: RTSPMediaFactory, media: RTSPMedia) => void
    mediaConstructed: (factory: RTSPMediaFactory, media: RTSPMedia) => void
    mediaConfigure: (factory: RTSPMediaFactory, media: RTSPMedia) => void
}

/**
 * The #GstRTSPMediaFactory class structure.
 * @record 
 */
abstract class RTSPMediaFactoryClass {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactoryClass

    static name: string
}

interface RTSPMediaFactoryPrivate {
}

class RTSPMediaFactoryPrivate {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactoryPrivate

    static name: string
}

interface RTSPMediaFactoryURIClass {

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactoryURIClass

    parentClass: RTSPMediaFactoryClass
}

/**
 * The #GstRTSPMediaFactoryURI class structure.
 * @record 
 */
abstract class RTSPMediaFactoryURIClass {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactoryURIClass

    static name: string
}

interface RTSPMediaFactoryURIPrivate {
}

class RTSPMediaFactoryURIPrivate {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPMediaFactoryURIPrivate

    static name: string
}

interface RTSPMediaPrivate {
}

class RTSPMediaPrivate {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPMediaPrivate

    static name: string
}

interface RTSPMountPointsClass {

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPMountPointsClass

    parentClass: GObject.ObjectClass
    makePath: (mounts: RTSPMountPoints, url: GstRtsp.RTSPUrl) => string | null
}

/**
 * The class for the media mounts object.
 * @record 
 */
abstract class RTSPMountPointsClass {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPMountPointsClass

    static name: string
}

interface RTSPMountPointsPrivate {
}

class RTSPMountPointsPrivate {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPMountPointsPrivate

    static name: string
}

interface RTSPOnvifClientClass {

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPOnvifClientClass

    parent: RTSPClientClass
}

abstract class RTSPOnvifClientClass {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPOnvifClientClass

    static name: string
}

interface RTSPOnvifMediaClass {

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPOnvifMediaClass

    parent: RTSPMediaClass
}

abstract class RTSPOnvifMediaClass {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPOnvifMediaClass

    static name: string
}

interface RTSPOnvifMediaFactoryClass {

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPOnvifMediaFactoryClass

    parent: RTSPMediaFactoryClass
    hasBackchannelSupport: (factory: RTSPOnvifMediaFactory) => boolean
}

abstract class RTSPOnvifMediaFactoryClass {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPOnvifMediaFactoryClass

    static name: string
}

interface RTSPOnvifMediaFactoryPrivate {
}

class RTSPOnvifMediaFactoryPrivate {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPOnvifMediaFactoryPrivate

    static name: string
}

interface RTSPOnvifMediaPrivate {
}

class RTSPOnvifMediaPrivate {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPOnvifMediaPrivate

    static name: string
}

interface RTSPOnvifServerClass {

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPOnvifServerClass

    parent: RTSPServerClass
}

abstract class RTSPOnvifServerClass {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPOnvifServerClass

    static name: string
}

interface RTSPPermissions {

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPPermissions

    miniObject: Gst.MiniObject

    // Owm methods of GstRtspServer-1.0.GstRtspServer.RTSPPermissions

    /**
     * Add a new `permission` for `role` to `permissions` with the access in `allowed`.
     * @param role a role
     * @param permission the permission
     * @param allowed whether the role has this permission or not
     */
    addPermissionForRole(role: string, permission: string, allowed: boolean): void
    /**
     * Add a new `role` to `permissions` without any permissions. You can add
     * permissions for the role with gst_rtsp_permissions_add_permission_for_role().
     * @param role a role
     */
    addRole(role: string): void
    /**
     * Add a new role to `permissions` based on `structure,` for example
     * given a role named `tester`, which should be granted a permission named
     * `permission1`, the structure could be created with:
     * 
     * ```
     * gst_structure_new ("tester", "permission1", G_TYPE_BOOLEAN, TRUE, NULL);
     * ```
     * @param structure 
     */
    addRoleFromStructure(structure: Gst.Structure): void
    /**
     * Get all permissions for `role` in `permissions`.
     * @param role a role
     */
    getRole(role: string): Gst.Structure
    /**
     * Check if `role` in `permissions` is given permission for `permission`.
     * @param role a role
     * @param permission a permission
     */
    isAllowed(role: string, permission: string): boolean
    /**
     * Remove all permissions for `role` in `permissions`.
     * @param role a role
     */
    removeRole(role: string): void
}

/**
 * The opaque permissions structure. It is used to define the permissions
 * of objects in different roles.
 * @record 
 */
class RTSPPermissions {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPPermissions

    static name: string

    // Constructors of GstRtspServer-1.0.GstRtspServer.RTSPPermissions

    /**
     * Create a new empty Authorization permissions.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new empty Authorization permissions.
     * @constructor 
     */
    static new(): RTSPPermissions
}

interface RTSPServerClass {

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPServerClass

    parentClass: GObject.ObjectClass
    clientConnected: (server: RTSPServer, client: RTSPClient) => void
}

/**
 * The RTSP server class structure
 * @record 
 */
abstract class RTSPServerClass {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPServerClass

    static name: string
}

interface RTSPServerPrivate {
}

class RTSPServerPrivate {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPServerPrivate

    static name: string
}

interface RTSPSessionClass {

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPSessionClass

    parentClass: GObject.ObjectClass
}

abstract class RTSPSessionClass {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPSessionClass

    static name: string
}

interface RTSPSessionMediaClass {

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPSessionMediaClass

    parentClass: GObject.ObjectClass
}

abstract class RTSPSessionMediaClass {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPSessionMediaClass

    static name: string
}

interface RTSPSessionMediaPrivate {
}

class RTSPSessionMediaPrivate {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPSessionMediaPrivate

    static name: string
}

interface RTSPSessionPoolClass {

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPSessionPoolClass

    parentClass: GObject.ObjectClass
    createSessionId: (pool: RTSPSessionPool) => string
    sessionRemoved: (pool: RTSPSessionPool, session: RTSPSession) => void
}

abstract class RTSPSessionPoolClass {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPSessionPoolClass

    static name: string
}

interface RTSPSessionPoolPrivate {
}

class RTSPSessionPoolPrivate {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPSessionPoolPrivate

    static name: string
}

interface RTSPSessionPrivate {
}

class RTSPSessionPrivate {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPSessionPrivate

    static name: string
}

interface RTSPStreamClass {

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPStreamClass

    parentClass: GObject.ObjectClass
}

abstract class RTSPStreamClass {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPStreamClass

    static name: string
}

interface RTSPStreamPrivate {
}

class RTSPStreamPrivate {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPStreamPrivate

    static name: string
}

interface RTSPStreamTransportClass {

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPStreamTransportClass

    parentClass: GObject.ObjectClass
}

abstract class RTSPStreamTransportClass {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPStreamTransportClass

    static name: string
}

interface RTSPStreamTransportPrivate {
}

class RTSPStreamTransportPrivate {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPStreamTransportPrivate

    static name: string
}

interface RTSPThread {

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPThread

    /**
     * parent #GstMiniObject
     * @field 
     */
    miniObject: Gst.MiniObject
    /**
     * the thread type
     * @field 
     */
    type: RTSPThreadType
    /**
     * a #GMainContext
     * @field 
     */
    context: GLib.MainContext
    /**
     * a #GMainLoop
     * @field 
     */
    loop: GLib.MainLoop

    // Owm methods of GstRtspServer-1.0.GstRtspServer.RTSPThread

    /**
     * Reuse the mainloop of `thread`
     */
    reuse(): boolean
    /**
     * Stop and unref `thread`. When no threads are using the mainloop, the thread
     * will be stopped and the final ref to `thread` will be released.
     */
    stop(): void
}

/**
 * Structure holding info about a mainloop running in a thread
 * @record 
 */
class RTSPThread {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPThread

    static name: string

    // Constructors of GstRtspServer-1.0.GstRtspServer.RTSPThread

    /**
     * Create a new thread object that can run a mainloop.
     * @constructor 
     * @param type the thread type
     */
    constructor(type: RTSPThreadType) 
    /**
     * Create a new thread object that can run a mainloop.
     * @constructor 
     * @param type the thread type
     */
    static new(type: RTSPThreadType): RTSPThread
}

interface RTSPThreadPoolClass {

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPThreadPoolClass

    parentClass: GObject.ObjectClass
    /**
     * a #GThreadPool used internally
     * @field 
     */
    pool: GLib.ThreadPool
    getThread: (pool: RTSPThreadPool, type: RTSPThreadType, ctx: RTSPContext) => RTSPThread | null
    configureThread: (pool: RTSPThreadPool, thread: RTSPThread, ctx: RTSPContext) => void
    threadEnter: (pool: RTSPThreadPool, thread: RTSPThread) => void
    threadLeave: (pool: RTSPThreadPool, thread: RTSPThread) => void
}

/**
 * Class for managing threads.
 * @record 
 */
abstract class RTSPThreadPoolClass {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPThreadPoolClass

    static name: string
}

interface RTSPThreadPoolPrivate {
}

class RTSPThreadPoolPrivate {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPThreadPoolPrivate

    static name: string
}

interface RTSPToken {

    // Own fields of GstRtspServer-1.0.GstRtspServer.RTSPToken

    miniObject: Gst.MiniObject

    // Owm methods of GstRtspServer-1.0.GstRtspServer.RTSPToken

    /**
     * Get the string value of `field` in `token`.
     * @param field a field name
     */
    getString(field: string): string | null
    /**
     * Access the structure of the token.
     */
    getStructure(): Gst.Structure
    /**
     * Check if `token` has a boolean `field` and if it is set to %TRUE.
     * @param field a field name
     */
    isAllowed(field: string): boolean
    /**
     * Sets a boolean value on `token`.
     * @param field field to set
     * @param boolValue boolean value to set
     */
    setBool(field: string, boolValue: boolean): void
    /**
     * Sets a string value on `token`.
     * @param field field to set
     * @param stringValue string value to set
     */
    setString(field: string, stringValue: string): void
    /**
     * Get a writable version of the structure.
     */
    writableStructure(): Gst.Structure
}

/**
 * An opaque object used for checking authorisations.
 * It is generated after successful authentication.
 * @record 
 */
class RTSPToken {

    // Own properties of GstRtspServer-1.0.GstRtspServer.RTSPToken

    static name: string

    // Constructors of GstRtspServer-1.0.GstRtspServer.RTSPToken

    /**
     * Create a new empty Authorization token.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new empty Authorization token.
     * @constructor 
     */
    static new(): RTSPToken
}

interface SDPInfo {

    // Own fields of GstRtspServer-1.0.GstRtspServer.SDPInfo

    isIpv6: boolean
    serverIp: string
}

class SDPInfo {

    // Own properties of GstRtspServer-1.0.GstRtspServer.SDPInfo

    static name: string
}

}
export default GstRtspServer;