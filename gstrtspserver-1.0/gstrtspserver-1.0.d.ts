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
import type GstRtsp from '@girs/gstrtsp-1.0';
import type GstSdp from '@girs/gstsdp-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GstBase from '@girs/gstbase-1.0';
import type Gio from '@girs/gio-2.0';
import type GstNet from '@girs/gstnet-1.0';

export namespace GstRtspServer {
    /**
     * GstRtspServer-1.0
     */

    /**
     * Result codes from RTSP address pool functions.
     */

    /**
     * Result codes from RTSP address pool functions.
     */
    export namespace RTSPAddressPoolResult {
        export const $gtype: GObject.GType<RTSPAddressPoolResult>;
    }

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

    /**
     * Possible return values for gst_rtsp_session_pool_filter().
     */
    export namespace RTSPFilterResult {
        export const $gtype: GObject.GType<RTSPFilterResult>;
    }

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

    /**
     * The state of the media pipeline.
     */
    export namespace RTSPMediaStatus {
        export const $gtype: GObject.GType<RTSPMediaStatus>;
    }

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

    /**
     * Whether the clock and possibly RTP/clock offset should be published according to RFC7273.
     */
    export namespace RTSPPublishClockMode {
        export const $gtype: GObject.GType<RTSPPublishClockMode>;
    }

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

    /**
     * The suspend mode of the media pipeline. A media pipeline is suspended right
     * after creating the SDP and when the client performs a PAUSED request.
     */
    export namespace RTSPSuspendMode {
        export const $gtype: GObject.GType<RTSPSuspendMode>;
    }

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

    /**
     * Different thread types
     */
    export namespace RTSPThreadType {
        export const $gtype: GObject.GType<RTSPThreadType>;
    }

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
     * Used with gst_rtsp_address_pool_add_range() to bind to all
     * IPv4 addresses
     */
    const RTSP_ADDRESS_POOL_ANY_IPV4: string;
    /**
     * Used with gst_rtsp_address_pool_add_range() to bind to all
     * IPv6 addresses
     */
    const RTSP_ADDRESS_POOL_ANY_IPV6: string;
    /**
     * Check a new connection
     */
    const RTSP_AUTH_CHECK_CONNECT: string;
    /**
     * Check if access is allowed to a factory.
     * When access is not allowed an 404 Not Found is sent in the response.
     */
    const RTSP_AUTH_CHECK_MEDIA_FACTORY_ACCESS: string;
    /**
     * Check if media can be constructed from a media factory
     * A response should be sent on error.
     */
    const RTSP_AUTH_CHECK_MEDIA_FACTORY_CONSTRUCT: string;
    /**
     * Check if the client can specify TTL, destination and
     * port pair in multicast. No response is sent when the check returns
     * %FALSE.
     */
    const RTSP_AUTH_CHECK_TRANSPORT_CLIENT_SETTINGS: string;
    /**
     * Check the URL and methods
     */
    const RTSP_AUTH_CHECK_URL: string;
    const RTSP_ONVIF_BACKCHANNEL_REQUIREMENT: string;
    const RTSP_ONVIF_REPLAY_REQUIREMENT: string;
    /**
     * G_TYPE_BOOLEAN, %TRUE if the media can be accessed, %FALSE will
     * return a 404 Not Found error when trying to access the media.
     */
    const RTSP_PERM_MEDIA_FACTORY_ACCESS: string;
    /**
     * G_TYPE_BOOLEAN, %TRUE if the media can be constructed, %FALSE will
     * return a 404 Not Found error when trying to access the media.
     */
    const RTSP_PERM_MEDIA_FACTORY_CONSTRUCT: string;
    /**
     * G_TYPE_STRING, the role to use when dealing with media factories
     *
     * The default #GstRTSPAuth object uses this string in the token to find the
     * role of the media factory. It will then retrieve the #GstRTSPPermissions of
     * the media factory and retrieve the role with the same name.
     */
    const RTSP_TOKEN_MEDIA_FACTORY_ROLE: string;
    /**
     * G_TYPE_BOOLEAN, %TRUE if the client can specify TTL, destination and
     *     port pair in multicast.
     */
    const RTSP_TOKEN_TRANSPORT_CLIENT_SETTINGS: string;
    function rtsp_context_get_type(): GObject.GType;
    /**
     * Get parameters (not implemented yet)
     * @param client a #GstRTSPClient
     * @param ctx a #GstRTSPContext
     * @returns a #GstRTSPResult
     */
    function rtsp_params_get(client: RTSPClient, ctx: RTSPContext): GstRtsp.RTSPResult;
    /**
     * Set parameters (not implemented yet)
     * @param client a #GstRTSPClient
     * @param ctx a #GstRTSPContext
     * @returns a #GstRTSPResult
     */
    function rtsp_params_set(client: RTSPClient, ctx: RTSPContext): GstRtsp.RTSPResult;
    /**
     * Add `media` specific info to `sdp`. `info` is used to configure the connection
     * information in the SDP.
     * @param sdp a #GstSDPMessage
     * @param info a #GstSDPInfo
     * @param media a #GstRTSPMedia
     * @returns TRUE on success.
     */
    function rtsp_sdp_from_media(sdp: GstSdp.SDPMessage, info: SDPInfo, media: RTSPMedia): boolean;
    /**
     * Add info from `stream` to `sdp`.
     * @param sdp a #GstSDPMessage
     * @param info a #GstSDPInfo
     * @param stream a #GstRTSPStream
     * @returns TRUE on success.
     */
    function rtsp_sdp_from_stream(sdp: GstSdp.SDPMessage, info: SDPInfo, stream: RTSPStream): boolean;
    /**
     * Creates a #GstSDPMedia from the parameters and stores it in `sdp`.
     * @param sdp a #GstRTSPMessage
     * @param info a #GstSDPInfo
     * @param stream a #GstRTSPStream
     * @param caps a #GstCaps
     * @param profile a #GstRTSPProfile
     * @returns %TRUE on success
     */
    function rtsp_sdp_make_media(
        sdp: GstSdp.SDPMessage,
        info: SDPInfo,
        stream: RTSPStream,
        caps: Gst.Caps,
        profile: GstRtsp.RTSPProfile | null,
    ): boolean;
    interface RTSPClientSendFunc {
        (client: RTSPClient, message: GstRtsp.RTSPMessage, close: boolean): boolean;
    }
    interface RTSPClientSendMessagesFunc {
        (client: RTSPClient, messages: GstRtsp.RTSPMessage, n_messages: number, close: boolean): boolean;
    }
    interface RTSPClientSessionFilterFunc {
        (client: RTSPClient, sess: RTSPSession): RTSPFilterResult;
    }
    interface RTSPKeepAliveFunc {
        (): void;
    }
    interface RTSPMessageSentFunc {
        (): void;
    }
    interface RTSPMessageSentFuncFull {
        (trans: RTSPStreamTransport): void;
    }
    interface RTSPSendFunc {
        (buffer: Gst.Buffer, channel: number): boolean;
    }
    interface RTSPSendListFunc {
        (buffer_list: Gst.BufferList, channel: number): boolean;
    }
    interface RTSPServerClientFilterFunc {
        (server: RTSPServer, client: RTSPClient): RTSPFilterResult;
    }
    interface RTSPSessionFilterFunc {
        (sess: RTSPSession, media: RTSPSessionMedia): RTSPFilterResult;
    }
    interface RTSPSessionPoolFilterFunc {
        (pool: RTSPSessionPool, session: RTSPSession): RTSPFilterResult;
    }
    interface RTSPSessionPoolFunc {
        (pool: RTSPSessionPool): boolean;
    }
    interface RTSPStreamTransportFilterFunc {
        (stream: RTSPStream, trans: RTSPStreamTransport): RTSPFilterResult;
    }
    /**
     * Flags used to control allocation of addresses
     */

    /**
     * Flags used to control allocation of addresses
     */
    export namespace RTSPAddressFlags {
        export const $gtype: GObject.GType<RTSPAddressFlags>;
    }

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
     */

    /**
     * The supported modes of the media.
     */
    export namespace RTSPTransportMode {
        export const $gtype: GObject.GType<RTSPTransportMode>;
    }

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
    namespace RTSPAddressPool {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * An address pool, all member are private
     */
    class RTSPAddressPool extends GObject.Object {
        static $gtype: GObject.GType<RTSPAddressPool>;

        // Constructors

        constructor(properties?: Partial<RTSPAddressPool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RTSPAddressPool;

        // Signals

        connect<K extends keyof RTSPAddressPool.SignalSignatures>(
            signal: K,
            callback: RTSPAddressPool.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof RTSPAddressPool.SignalSignatures>(
            signal: K,
            callback: RTSPAddressPool.SignalSignatures[K],
        ): number;
        emit<K extends keyof RTSPAddressPool.SignalSignatures>(
            signal: K,
            ...args: Parameters<RTSPAddressPool.SignalSignatures[K]>
        ): void;

        // Methods

        /**
         * Take an address and ports from `pool`. `flags` can be used to control the
         * allocation. `n_ports` consecutive ports will be allocated of which the first
         * one can be found in `port`.
         * @param flags flags
         * @param n_ports the amount of ports
         * @returns a #GstRTSPAddress that should be freed with gst_rtsp_address_free after use or %NULL when no address could be acquired.
         */
        acquire_address(flags: RTSPAddressFlags | null, n_ports: number): RTSPAddress | null;
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
         * @param min_address a minimum address to add
         * @param max_address a maximum address to add
         * @param min_port the minimum port
         * @param max_port the maximum port
         * @param ttl a TTL or 0 for unicast addresses
         * @returns %TRUE if the addresses could be added.
         */
        add_range(min_address: string, max_address: string, min_port: number, max_port: number, ttl: number): boolean;
        /**
         * Clear all addresses in `pool`. There should be no outstanding
         * allocations.
         */
        clear(): void;
        /**
         * Dump the free and allocated addresses to stdout.
         */
        dump(): void;
        /**
         * Used to know if the pool includes any unicast addresses.
         * @returns %TRUE if the pool includes any unicast addresses, %FALSE otherwise
         */
        has_unicast_addresses(): boolean;
        /**
         * Take a specific address and ports from `pool`. `n_ports` consecutive
         * ports will be allocated of which the first one can be found in
         * `port`.
         *
         * If `ttl` is 0, `address` should be a unicast address. If `ttl` > 0, `address`
         * should be a valid multicast address.
         * @param ip_address The IP address to reserve
         * @param port The first port to reserve
         * @param n_ports The number of ports
         * @param ttl The requested ttl
         * @returns #GST_RTSP_ADDRESS_POOL_OK if an address was reserved. The address is returned in @address and should be freed with gst_rtsp_address_free after use.
         */
        reserve_address(
            ip_address: string,
            port: number,
            n_ports: number,
            ttl: number,
        ): [RTSPAddressPoolResult, RTSPAddress];
    }

    namespace RTSPAuth {
        // Signal callback interfaces

        interface AcceptCertificate {
            (
                _source: RTSPAuth,
                connection: Gio.TlsConnection,
                peer_cert: Gio.TlsCertificate,
                errors: Gio.TlsCertificateFlags,
            ): boolean;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'accept-certificate': AcceptCertificate;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * The authentication structure.
     */
    class RTSPAuth extends GObject.Object {
        static $gtype: GObject.GType<RTSPAuth>;

        // Constructors

        constructor(properties?: Partial<RTSPAuth.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RTSPAuth;

        // Signals

        connect<K extends keyof RTSPAuth.SignalSignatures>(signal: K, callback: RTSPAuth.SignalSignatures[K]): number;
        connect_after<K extends keyof RTSPAuth.SignalSignatures>(
            signal: K,
            callback: RTSPAuth.SignalSignatures[K],
        ): number;
        emit<K extends keyof RTSPAuth.SignalSignatures>(
            signal: K,
            ...args: Parameters<RTSPAuth.SignalSignatures[K]>
        ): void;

        // Static methods

        /**
         * Check if `check` is allowed in the current context.
         * @param check the item to check
         */
        static check(check: string): boolean;
        /**
         * Construct a Basic authorisation token from `user` and `pass`.
         * @param user a userid
         * @param pass a password
         */
        static make_basic(user: string, pass: string): string;

        // Virtual methods

        vfunc_accept_certificate(
            connection: Gio.TlsConnection,
            peer_cert: Gio.TlsCertificate,
            errors: Gio.TlsCertificateFlags,
        ): boolean;
        vfunc_authenticate(ctx: RTSPContext): boolean;
        vfunc_check(ctx: RTSPContext, check: string): boolean;
        vfunc_generate_authenticate_header(ctx: RTSPContext): void;

        // Methods

        /**
         * Add a basic token for the default authentication algorithm that
         * enables the client with privileges listed in `token`.
         * @param basic the basic token
         * @param token authorisation token
         */
        add_basic(basic: string, token: RTSPToken): void;
        /**
         * Add a digest `user` and `pass` for the default authentication algorithm that
         * enables the client with privileges listed in `token`.
         * @param user the digest user name
         * @param pass the digest password
         * @param token authorisation token
         */
        add_digest(user: string, pass: string, token: RTSPToken): void;
        /**
         * Get the default token for `auth`. This token will be used for unauthenticated
         * users.
         * @returns the #GstRTSPToken of @auth. gst_rtsp_token_unref() after usage.
         */
        get_default_token(): RTSPToken | null;
        get_realm(): string | null;
        /**
         * Gets the supported authentication methods of `auth`.
         * @returns The supported authentication methods
         */
        get_supported_methods(): GstRtsp.RTSPAuthMethod;
        /**
         * Get the #GTlsAuthenticationMode.
         * @returns the #GTlsAuthenticationMode.
         */
        get_tls_authentication_mode(): Gio.TlsAuthenticationMode;
        /**
         * Get the #GTlsCertificate used for negotiating TLS `auth`.
         * @returns the #GTlsCertificate of @auth. g_object_unref() after usage.
         */
        get_tls_certificate(): Gio.TlsCertificate | null;
        /**
         * Get the #GTlsDatabase used for verifying client certificate.
         * @returns the #GTlsDatabase of @auth. g_object_unref() after usage.
         */
        get_tls_database(): Gio.TlsDatabase | null;
        /**
         * Parse the contents of the file at `path` and enable the privileges
         * listed in `token` for the users it describes.
         *
         * The format of the file is expected to match the format described by
         * <https://en.wikipedia.org/wiki/Digest_access_authentication#The_.htdigest_file>,
         * as output by the `htdigest` command.
         * @param path Path to the htdigest file
         * @param token authorisation token
         * @returns %TRUE if the file was successfully parsed, %FALSE otherwise.
         */
        parse_htdigest(path: string, token: RTSPToken): boolean;
        /**
         * Removes `basic` authentication token.
         * @param basic the basic token
         */
        remove_basic(basic: string): void;
        /**
         * Removes a digest user.
         * @param user the digest user name
         */
        remove_digest(user: string): void;
        /**
         * Set the default #GstRTSPToken to `token` in `auth`. The default token will
         * be used for unauthenticated users.
         * @param token a #GstRTSPToken
         */
        set_default_token(token?: RTSPToken | null): void;
        /**
         * Set the `realm` of `auth`
         * @param realm The realm to set
         */
        set_realm(realm?: string | null): void;
        /**
         * Sets the supported authentication `methods` for `auth`.
         * @param methods supported methods
         */
        set_supported_methods(methods: GstRtsp.RTSPAuthMethod | null): void;
        /**
         * The #GTlsAuthenticationMode to set on the underlying GTlsServerConnection.
         * When set to another value than %G_TLS_AUTHENTICATION_NONE,
         * #GstRTSPAuth::accept-certificate signal will be emitted and must be handled.
         * @param mode a #GTlsAuthenticationMode
         */
        set_tls_authentication_mode(mode: Gio.TlsAuthenticationMode | null): void;
        /**
         * Set the TLS certificate for the auth. Client connections will only
         * be accepted when TLS is negotiated.
         * @param cert a #GTlsCertificate
         */
        set_tls_certificate(cert?: Gio.TlsCertificate | null): void;
        /**
         * Sets the certificate database that is used to verify peer certificates.
         * If set to %NULL (the default), then peer certificate validation will always
         * set the %G_TLS_CERTIFICATE_UNKNOWN_CA error.
         * @param database a #GTlsDatabase
         */
        set_tls_database(database?: Gio.TlsDatabase | null): void;
    }

    namespace RTSPClient {
        // Signal callback interfaces

        interface AnnounceRequest {
            (_source: RTSPClient, ctx: RTSPContext): void;
        }

        interface CheckRequirements {
            (_source: RTSPClient, ctx: RTSPContext, arr: string[]): string;
        }

        interface Closed {
            (_source: RTSPClient): void;
        }

        interface DescribeRequest {
            (_source: RTSPClient, ctx: RTSPContext): void;
        }

        interface GetParameterRequest {
            (_source: RTSPClient, ctx: RTSPContext): void;
        }

        interface HandleResponse {
            (_source: RTSPClient, ctx: RTSPContext): void;
        }

        interface NewSession {
            (_source: RTSPClient, object: RTSPSession): void;
        }

        interface OptionsRequest {
            (_source: RTSPClient, ctx: RTSPContext): void;
        }

        interface PauseRequest {
            (_source: RTSPClient, ctx: RTSPContext): void;
        }

        interface PlayRequest {
            (_source: RTSPClient, ctx: RTSPContext): void;
        }

        interface PreAnnounceRequest {
            (_source: RTSPClient, ctx: RTSPContext): GstRtsp.RTSPStatusCode;
        }

        interface PreDescribeRequest {
            (_source: RTSPClient, ctx: RTSPContext): GstRtsp.RTSPStatusCode;
        }

        interface PreGetParameterRequest {
            (_source: RTSPClient, ctx: RTSPContext): GstRtsp.RTSPStatusCode;
        }

        interface PreOptionsRequest {
            (_source: RTSPClient, ctx: RTSPContext): GstRtsp.RTSPStatusCode;
        }

        interface PrePauseRequest {
            (_source: RTSPClient, ctx: RTSPContext): GstRtsp.RTSPStatusCode;
        }

        interface PrePlayRequest {
            (_source: RTSPClient, ctx: RTSPContext): GstRtsp.RTSPStatusCode;
        }

        interface PreRecordRequest {
            (_source: RTSPClient, ctx: RTSPContext): GstRtsp.RTSPStatusCode;
        }

        interface PreSetParameterRequest {
            (_source: RTSPClient, ctx: RTSPContext): GstRtsp.RTSPStatusCode;
        }

        interface PreSetupRequest {
            (_source: RTSPClient, ctx: RTSPContext): GstRtsp.RTSPStatusCode;
        }

        interface PreTeardownRequest {
            (_source: RTSPClient, ctx: RTSPContext): GstRtsp.RTSPStatusCode;
        }

        interface RecordRequest {
            (_source: RTSPClient, ctx: RTSPContext): void;
        }

        interface SendMessage {
            (_source: RTSPClient, session: RTSPSession, message: GstRtsp.RTSPMessage): void;
        }

        interface SetParameterRequest {
            (_source: RTSPClient, ctx: RTSPContext): void;
        }

        interface SetupRequest {
            (_source: RTSPClient, ctx: RTSPContext): void;
        }

        interface TeardownRequest {
            (_source: RTSPClient, ctx: RTSPContext): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'announce-request': AnnounceRequest;
            'check-requirements': CheckRequirements;
            closed: Closed;
            'describe-request': DescribeRequest;
            'get-parameter-request': GetParameterRequest;
            'handle-response': HandleResponse;
            'new-session': NewSession;
            'options-request': OptionsRequest;
            'pause-request': PauseRequest;
            'play-request': PlayRequest;
            'pre-announce-request': PreAnnounceRequest;
            'pre-describe-request': PreDescribeRequest;
            'pre-get-parameter-request': PreGetParameterRequest;
            'pre-options-request': PreOptionsRequest;
            'pre-pause-request': PrePauseRequest;
            'pre-play-request': PrePlayRequest;
            'pre-record-request': PreRecordRequest;
            'pre-set-parameter-request': PreSetParameterRequest;
            'pre-setup-request': PreSetupRequest;
            'pre-teardown-request': PreTeardownRequest;
            'record-request': RecordRequest;
            'send-message': SendMessage;
            'set-parameter-request': SetParameterRequest;
            'setup-request': SetupRequest;
            'teardown-request': TeardownRequest;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            drop_backlog: boolean;
            dropBacklog: boolean;
            mount_points: RTSPMountPoints;
            mountPoints: RTSPMountPoints;
            post_session_timeout: number;
            postSessionTimeout: number;
            session_pool: RTSPSessionPool;
            sessionPool: RTSPSessionPool;
        }
    }

    /**
     * The client object represents the connection and its state with a client.
     */
    class RTSPClient extends GObject.Object {
        static $gtype: GObject.GType<RTSPClient>;

        // Properties

        get drop_backlog(): boolean;
        set drop_backlog(val: boolean);
        get dropBacklog(): boolean;
        set dropBacklog(val: boolean);
        get mount_points(): RTSPMountPoints;
        set mount_points(val: RTSPMountPoints);
        get mountPoints(): RTSPMountPoints;
        set mountPoints(val: RTSPMountPoints);
        get post_session_timeout(): number;
        set post_session_timeout(val: number);
        get postSessionTimeout(): number;
        set postSessionTimeout(val: number);
        get session_pool(): RTSPSessionPool;
        set session_pool(val: RTSPSessionPool);
        get sessionPool(): RTSPSessionPool;
        set sessionPool(val: RTSPSessionPool);

        // Constructors

        constructor(properties?: Partial<RTSPClient.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RTSPClient;

        // Signals

        connect<K extends keyof RTSPClient.SignalSignatures>(
            signal: K,
            callback: RTSPClient.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof RTSPClient.SignalSignatures>(
            signal: K,
            callback: RTSPClient.SignalSignatures[K],
        ): number;
        emit<K extends keyof RTSPClient.SignalSignatures>(
            signal: K,
            ...args: Parameters<RTSPClient.SignalSignatures[K]>
        ): void;

        // Virtual methods

        /**
         * Called before sending error response to give the application the
         * possibility to adjust the error code.
         * @param ctx a #GstRTSPContext
         * @param code a #GstRTSPStatusCode
         */
        vfunc_adjust_error_code(ctx: RTSPContext, code: GstRtsp.RTSPStatusCode): GstRtsp.RTSPStatusCode;
        vfunc_adjust_play_mode(
            context: RTSPContext,
            range: GstRtsp.RTSPTimeRange,
            flags: Gst.SeekFlags,
            rate: number,
            trickmode_interval: Gst.ClockTime,
            enable_rate_control: boolean,
        ): GstRtsp.RTSPStatusCode;
        vfunc_adjust_play_response(context: RTSPContext): GstRtsp.RTSPStatusCode;
        vfunc_announce_request(ctx: RTSPContext): void;
        vfunc_check_requirements(ctx: RTSPContext, arr: string): string;
        vfunc_closed(): void;
        vfunc_configure_client_media(media: RTSPMedia, stream: RTSPStream, ctx: RTSPContext): boolean;
        vfunc_configure_client_transport(ctx: RTSPContext, ct: GstRtsp.RTSPTransport): boolean;
        vfunc_create_sdp(media: RTSPMedia): GstSdp.SDPMessage;
        vfunc_describe_request(ctx: RTSPContext): void;
        vfunc_get_parameter_request(ctx: RTSPContext): void;
        vfunc_handle_response(ctx: RTSPContext): void;
        vfunc_handle_sdp(ctx: RTSPContext, media: RTSPMedia, sdp: GstSdp.SDPMessage): boolean;
        vfunc_make_path_from_uri(uri: GstRtsp.RTSPUrl): string;
        vfunc_new_session(session: RTSPSession): void;
        vfunc_options_request(ctx: RTSPContext): void;
        vfunc_params_get(ctx: RTSPContext): GstRtsp.RTSPResult;
        vfunc_params_set(ctx: RTSPContext): GstRtsp.RTSPResult;
        vfunc_pause_request(ctx: RTSPContext): void;
        vfunc_play_request(ctx: RTSPContext): void;
        vfunc_pre_announce_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode;
        vfunc_pre_describe_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode;
        vfunc_pre_get_parameter_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode;
        vfunc_pre_options_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode;
        vfunc_pre_pause_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode;
        vfunc_pre_play_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode;
        vfunc_pre_record_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode;
        vfunc_pre_set_parameter_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode;
        vfunc_pre_setup_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode;
        vfunc_pre_teardown_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode;
        vfunc_record_request(ctx: RTSPContext): void;
        vfunc_send_message(ctx: RTSPContext, response: GstRtsp.RTSPMessage): void;
        vfunc_set_parameter_request(ctx: RTSPContext): void;
        vfunc_setup_request(ctx: RTSPContext): void;
        vfunc_teardown_request(ctx: RTSPContext): void;
        vfunc_tunnel_http_response(request: GstRtsp.RTSPMessage, response: GstRtsp.RTSPMessage): void;

        // Methods

        /**
         * Attaches `client` to `context`. When the mainloop for `context` is run, the
         * client will be dispatched. When `context` is %NULL, the default context will be
         * used).
         *
         * This function should be called when the client properties and urls are fully
         * configured and the client is ready to start.
         * @param context a #GMainContext
         * @returns the ID (greater than 0) for the source within the GMainContext.
         */
        attach(context?: GLib.MainContext | null): number;
        /**
         * Close the connection of `client` and remove all media it was managing.
         */
        close(): void;
        /**
         * Get the #GstRTSPAuth used as the authentication manager of `client`.
         * @returns the #GstRTSPAuth of @client. g_object_unref() after usage.
         */
        get_auth(): RTSPAuth | null;
        /**
         * Get the #GstRTSPConnection of `client`.
         * @returns the #GstRTSPConnection of @client. The connection object returned remains valid until the client is freed.
         */
        get_connection(): GstRtsp.RTSPConnection | null;
        /**
         * Get the Content-Length limit of `client`.
         * @returns the Content-Length limit.
         */
        get_content_length_limit(): number;
        /**
         * Get the #GstRTSPMountPoints object that `client` uses to manage its sessions.
         * @returns a #GstRTSPMountPoints, unref after usage.
         */
        get_mount_points(): RTSPMountPoints | null;
        /**
         * Get the #GstRTSPSessionPool object that `client` uses to manage its sessions.
         * @returns a #GstRTSPSessionPool, unref after usage.
         */
        get_session_pool(): RTSPSessionPool | null;
        /**
         * This is useful when providing a send function through
         * gst_rtsp_client_set_send_func() when doing RTSP over TCP:
         * the send function must call gst_rtsp_stream_transport_message_sent ()
         * on the appropriate transport when data has been received for streaming
         * to continue.
         * @param channel
         * @returns the #GstRTSPStreamTransport associated with @channel.
         */
        get_stream_transport(channel: number): RTSPStreamTransport | null;
        /**
         * Get the #GstRTSPThreadPool used as the thread pool of `client`.
         * @returns the #GstRTSPThreadPool of @client. g_object_unref() after usage.
         */
        get_thread_pool(): RTSPThreadPool | null;
        /**
         * Let the client handle `message`.
         * @param message an #GstRTSPMessage
         * @returns a #GstRTSPResult.
         */
        handle_message(message: GstRtsp.RTSPMessage): GstRtsp.RTSPResult;
        /**
         * Send a message message to the remote end. `message` must be a
         * #GST_RTSP_MESSAGE_REQUEST or a #GST_RTSP_MESSAGE_RESPONSE.
         * @param session a #GstRTSPSession to send   the message to or %NULL
         * @param message The #GstRTSPMessage to send
         */
        send_message(session: RTSPSession | null, message: GstRtsp.RTSPMessage): GstRtsp.RTSPResult;
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
         * @returns a #GList with all sessions for which @func returned #GST_RTSP_FILTER_REF. After usage, each element in the #GList should be unreffed before the list is freed.
         */
        session_filter(func?: RTSPClientSessionFilterFunc | null): RTSPSession[];
        /**
         * configure `auth` to be used as the authentication manager of `client`.
         * @param auth a #GstRTSPAuth
         */
        set_auth(auth?: RTSPAuth | null): void;
        /**
         * Set the #GstRTSPConnection of `client`. This function takes ownership of
         * `conn`.
         * @param conn a #GstRTSPConnection
         * @returns %TRUE on success.
         */
        set_connection(conn: GstRtsp.RTSPConnection): boolean;
        /**
         * Configure `client` to use the specified Content-Length limit.
         *
         * Define an appropriate request size limit and reject requests exceeding the
         * limit with response status 413 Request Entity Too Large
         * @param limit Content-Length limit
         */
        set_content_length_limit(limit: number): void;
        /**
         * Set `mounts` as the mount points for `client` which it will use to map urls
         * to media streams. These mount points are usually inherited from the server that
         * created the client but can be overriden later.
         * @param mounts a #GstRTSPMountPoints
         */
        set_mount_points(mounts?: RTSPMountPoints | null): void;
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
         * @param notify called when @user_data is no longer in use
         */
        set_send_func(func: RTSPClientSendFunc, notify?: GLib.DestroyNotify | null): void;
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
         * @param notify called when @user_data is no longer in use
         */
        set_send_messages_func(func: RTSPClientSendMessagesFunc, notify?: GLib.DestroyNotify | null): void;
        /**
         * Set `pool` as the sessionpool for `client` which it will use to find
         * or allocate sessions. the sessionpool is usually inherited from the server
         * that created the client but can be overridden later.
         * @param pool a #GstRTSPSessionPool
         */
        set_session_pool(pool?: RTSPSessionPool | null): void;
        /**
         * configure `pool` to be used as the thread pool of `client`.
         * @param pool a #GstRTSPThreadPool
         */
        set_thread_pool(pool?: RTSPThreadPool | null): void;
    }

    namespace RTSPMedia {
        // Signal callback interfaces

        interface HandleMessage {
            (_source: RTSPMedia, message: Gst.Message): boolean;
        }

        interface NewState {
            (_source: RTSPMedia, object: number): void;
        }

        interface NewStream {
            (_source: RTSPMedia, object: RTSPStream): void;
        }

        interface Prepared {
            (_source: RTSPMedia): void;
        }

        interface RemovedStream {
            (_source: RTSPMedia, object: RTSPStream): void;
        }

        interface TargetState {
            (_source: RTSPMedia, object: number): void;
        }

        interface Unprepared {
            (_source: RTSPMedia): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'handle-message': HandleMessage;
            'new-state': NewState;
            'new-stream': NewStream;
            prepared: Prepared;
            'removed-stream': RemovedStream;
            'target-state': TargetState;
            unprepared: Unprepared;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            bind_mcast_address: boolean;
            bindMcastAddress: boolean;
            buffer_size: number;
            bufferSize: number;
            clock: Gst.Clock;
            dscp_qos: number;
            dscpQos: number;
            element: Gst.Element;
            eos_shutdown: boolean;
            eosShutdown: boolean;
            latency: number;
            max_mcast_ttl: number;
            maxMcastTtl: number;
            profiles: GstRtsp.RTSPProfile;
            protocols: GstRtsp.RTSPLowerTrans;
            reusable: boolean;
            shared: boolean;
            stop_on_disconnect: boolean;
            stopOnDisconnect: boolean;
            suspend_mode: RTSPSuspendMode;
            suspendMode: RTSPSuspendMode;
            time_provider: boolean;
            timeProvider: boolean;
            transport_mode: RTSPTransportMode;
            transportMode: RTSPTransportMode;
        }
    }

    /**
     * A class that contains the GStreamer element along with a list of
     * #GstRTSPStream objects that can produce data.
     *
     * This object is usually created from a #GstRTSPMediaFactory.
     */
    class RTSPMedia extends GObject.Object {
        static $gtype: GObject.GType<RTSPMedia>;

        // Properties

        get bind_mcast_address(): boolean;
        set bind_mcast_address(val: boolean);
        get bindMcastAddress(): boolean;
        set bindMcastAddress(val: boolean);
        get buffer_size(): number;
        set buffer_size(val: number);
        get bufferSize(): number;
        set bufferSize(val: number);
        get clock(): Gst.Clock;
        set clock(val: Gst.Clock);
        get dscp_qos(): number;
        set dscp_qos(val: number);
        get dscpQos(): number;
        set dscpQos(val: number);
        get element(): Gst.Element;
        get eos_shutdown(): boolean;
        set eos_shutdown(val: boolean);
        get eosShutdown(): boolean;
        set eosShutdown(val: boolean);
        get latency(): number;
        set latency(val: number);
        get max_mcast_ttl(): number;
        set max_mcast_ttl(val: number);
        get maxMcastTtl(): number;
        set maxMcastTtl(val: number);
        get profiles(): GstRtsp.RTSPProfile;
        set profiles(val: GstRtsp.RTSPProfile);
        get protocols(): GstRtsp.RTSPLowerTrans;
        set protocols(val: GstRtsp.RTSPLowerTrans);
        get reusable(): boolean;
        set reusable(val: boolean);
        get shared(): boolean;
        set shared(val: boolean);
        get stop_on_disconnect(): boolean;
        set stop_on_disconnect(val: boolean);
        get stopOnDisconnect(): boolean;
        set stopOnDisconnect(val: boolean);
        get suspend_mode(): RTSPSuspendMode;
        set suspend_mode(val: RTSPSuspendMode);
        get suspendMode(): RTSPSuspendMode;
        set suspendMode(val: RTSPSuspendMode);
        get time_provider(): boolean;
        set time_provider(val: boolean);
        get timeProvider(): boolean;
        set timeProvider(val: boolean);
        get transport_mode(): RTSPTransportMode;
        set transport_mode(val: RTSPTransportMode);
        get transportMode(): RTSPTransportMode;
        set transportMode(val: RTSPTransportMode);

        // Constructors

        constructor(properties?: Partial<RTSPMedia.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](element: Gst.Element): RTSPMedia;

        // Signals

        connect<K extends keyof RTSPMedia.SignalSignatures>(signal: K, callback: RTSPMedia.SignalSignatures[K]): number;
        connect_after<K extends keyof RTSPMedia.SignalSignatures>(
            signal: K,
            callback: RTSPMedia.SignalSignatures[K],
        ): number;
        emit<K extends keyof RTSPMedia.SignalSignatures>(
            signal: K,
            ...args: Parameters<RTSPMedia.SignalSignatures[K]>
        ): void;

        // Virtual methods

        vfunc_convert_range(range: GstRtsp.RTSPTimeRange, unit: GstRtsp.RTSPRangeUnit): boolean;
        vfunc_handle_message(message: Gst.Message): boolean;
        /**
         * Configure an SDP on `media` for receiving streams
         * @param sdp a #GstSDPMessage
         */
        vfunc_handle_sdp(sdp: GstSdp.SDPMessage): boolean;
        vfunc_new_state(state: Gst.State): void;
        vfunc_new_stream(stream: RTSPStream): void;
        /**
         * Prepare `media` for streaming. This function will create the objects
         * to manage the streaming. A pipeline must have been set on `media` with
         * gst_rtsp_media_take_pipeline().
         *
         * It will preroll the pipeline and collect vital information about the streams
         * such as the duration.
         * @param thread a #GstRTSPThread to run the   bus handler or %NULL
         */
        vfunc_prepare(thread?: RTSPThread | null): boolean;
        vfunc_prepared(): void;
        vfunc_query_position(position: number): boolean;
        vfunc_query_stop(stop: number): boolean;
        vfunc_removed_stream(stream: RTSPStream): void;
        vfunc_setup_rtpbin(rtpbin: Gst.Element): boolean;
        /**
         * Add `media` specific info to `sdp`. `info` is used to configure the connection
         * information in the SDP.
         * @param sdp a #GstSDPMessage
         * @param info a #GstSDPInfo
         */
        vfunc_setup_sdp(sdp: GstSdp.SDPMessage, info: SDPInfo): boolean;
        /**
         * Suspend `media`. The state of the pipeline managed by `media` is set to
         * GST_STATE_NULL but all streams are kept. `media` can be prepared again
         * with gst_rtsp_media_unsuspend()
         *
         * `media` must be prepared with gst_rtsp_media_prepare();
         */
        vfunc_suspend(): boolean;
        vfunc_target_state(state: Gst.State): void;
        /**
         * Unprepare `media`. After this call, the media should be prepared again before
         * it can be used again. If the media is set to be non-reusable, a new instance
         * must be created.
         */
        vfunc_unprepare(): boolean;
        vfunc_unprepared(): void;
        /**
         * Unsuspend `media` if it was in a suspended state. This method does nothing
         * when the media was not in the suspended state.
         */
        vfunc_unsuspend(): boolean;

        // Methods

        /**
         * Check if the pipeline for `media` can be shared between multiple clients.
         *
         * This checks if the media is shareable and whether it is either reusable or
         * was never unprepared before.
         *
         * The function must be called with gst_rtsp_media_lock().
         * @returns %TRUE if the media can be shared between clients.
         */
        can_be_shared(): boolean;
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
        collect_streams(): void;
        /**
         * Add a receiver and sender parts to the pipeline based on the transport from
         * SETUP.
         * @param transports a list of #GstRTSPTransport
         * @returns %TRUE if the media pipeline has been sucessfully updated.
         */
        complete_pipeline(transports: GstRtsp.RTSPTransport[]): boolean;
        /**
         * Create a new stream in `media` that provides RTP data on `pad`.
         * `pad` should be a pad of an element inside `media->`element.
         * @param payloader a #GstElement
         * @param pad a #GstPad
         * @returns a new #GstRTSPStream that remains valid for as long as @media exists.
         */
        create_stream(payloader: Gst.Element, pad: Gst.Pad): RTSPStream;
        /**
         * Find a stream in `media` with `control` as the control uri.
         * @param control the control of the stream
         * @returns the #GstRTSPStream with control uri @control or %NULL when a stream with that control did not exist.
         */
        find_stream(control: string): RTSPStream | null;
        /**
         * Get the #GstRTSPAddressPool used as the address pool of `media`.
         * @returns the #GstRTSPAddressPool of @media. g_object_unref() after usage.
         */
        get_address_pool(): RTSPAddressPool | null;
        /**
         * Get the base_time that is used by the pipeline in `media`.
         *
         * `media` must be prepared before this method returns a valid base_time.
         * @returns the base_time used by @media.
         */
        get_base_time(): Gst.ClockTime;
        /**
         * Get the kernel UDP buffer size.
         * @returns the kernel UDP buffer size.
         */
        get_buffer_size(): number;
        /**
         * Get the clock that is used by the pipeline in `media`.
         *
         * `media` must be prepared before this method returns a valid clock object.
         * @returns the #GstClock used by @media. unref after usage.
         */
        get_clock(): Gst.Clock | null;
        get_do_retransmission(): boolean;
        /**
         * Get the configured DSCP QoS of attached media.
         * @returns the DSCP QoS value of attached streams or -1 if disabled.
         */
        get_dscp_qos(): number;
        /**
         * Get the element that was used when constructing `media`.
         * @returns a #GstElement. Unref after usage.
         */
        get_element(): Gst.Element;
        /**
         * Get the latency that is used for receiving media.
         * @returns latency in milliseconds
         */
        get_latency(): number;
        /**
         * Get the the maximum time-to-live value of outgoing multicast packets.
         * @returns the maximum time-to-live value of outgoing multicast packets.
         */
        get_max_mcast_ttl(): number;
        /**
         * Get the multicast interface used for `media`.
         * @returns the multicast interface for @media. g_free() after usage.
         */
        get_multicast_iface(): string | null;
        /**
         * Get the permissions object from `media`.
         * @returns a #GstRTSPPermissions object, unref after usage.
         */
        get_permissions(): RTSPPermissions | null;
        /**
         * Get the allowed profiles of `media`.
         * @returns a #GstRTSPProfile
         */
        get_profiles(): GstRtsp.RTSPProfile;
        /**
         * Get the allowed protocols of `media`.
         * @returns a #GstRTSPLowerTrans
         */
        get_protocols(): GstRtsp.RTSPLowerTrans;
        /**
         * Gets if and how the media clock should be published according to RFC7273.
         * @returns The GstRTSPPublishClockMode
         */
        get_publish_clock_mode(): RTSPPublishClockMode;
        /**
         * Get the current range as a string. `media` must be prepared with
         * gst_rtsp_media_prepare ().
         * @param play for the PLAY request
         * @param unit the unit to use for the string
         * @returns The range as a string, g_free() after usage.
         */
        get_range_string(play: boolean, unit: GstRtsp.RTSPRangeUnit | null): string | null;
        get_rate_control(): boolean;
        /**
         * Get the rate and applied_rate of the current segment.
         * @returns %FALSE if looking up the rate and applied rate failed. Otherwise %TRUE is returned and @rate and @applied_rate are set to the rate and applied_rate of the current segment.
         */
        get_rates(): [boolean, number, number];
        /**
         * Get the amount of time to store retransmission data.
         * @returns the amount of time to store retransmission data.
         */
        get_retransmission_time(): Gst.ClockTime;
        /**
         * Get the status of `media`. When `media` is busy preparing, this function waits
         * until `media` is prepared or in error.
         * @returns the status of @media.
         */
        get_status(): RTSPMediaStatus;
        /**
         * Retrieve the stream with index `idx` from `media`.
         * @param idx the stream index
         * @returns the #GstRTSPStream at index @idx or %NULL when a stream with that index did not exist.
         */
        get_stream(idx: number): RTSPStream | null;
        /**
         * Get how `media` will be suspended.
         * @returns #GstRTSPSuspendMode.
         */
        get_suspend_mode(): RTSPSuspendMode;
        /**
         * Get the #GstNetTimeProvider for the clock used by `media`. The time provider
         * will listen on `address` and `port` for client time requests.
         * @param address an address or %NULL
         * @param port a port or 0
         * @returns the #GstNetTimeProvider of @media.
         */
        get_time_provider(address: string | null, port: number): GstNet.NetTimeProvider | null;
        /**
         * Check if the pipeline for `media` can be used for PLAY or RECORD methods.
         * @returns The transport mode.
         */
        get_transport_mode(): RTSPTransportMode;
        /**
         * Configure an SDP on `media` for receiving streams
         * @param sdp a #GstSDPMessage
         * @returns TRUE on success.
         */
        handle_sdp(sdp: GstSdp.SDPMessage): boolean;
        /**
         * See gst_rtsp_stream_is_complete(), gst_rtsp_stream_is_sender().
         * @returns whether @media has at least one complete sender stream.
         */
        has_completed_sender(): boolean;
        /**
         * Check if multicast sockets are configured to be bound to multicast addresses.
         * @returns %TRUE if multicast sockets are configured to be bound to multicast addresses.
         */
        is_bind_mcast_address(): boolean;
        /**
         * Check if the pipeline for `media` will send an EOS down the pipeline before
         * unpreparing.
         * @returns %TRUE if the media will send EOS before unpreparing.
         */
        is_eos_shutdown(): boolean;
        is_receive_only(): boolean;
        /**
         * Check if the pipeline for `media` can be reused after an unprepare.
         * @returns %TRUE if the media can be reused
         */
        is_reusable(): boolean;
        /**
         * Check if the pipeline for `media` can be shared between multiple clients in
         * theory. This simply returns the value set via gst_rtsp_media_set_shared().
         *
         * To know if a media can be shared in practice, i.e. if it's shareable and
         * either reusable or was never unprepared before, use
         * gst_rtsp_media_can_be_shared().
         * @returns %TRUE if the media can be shared between clients.
         */
        is_shared(): boolean;
        /**
         * Check if the pipeline for `media` will be stopped when a client disconnects
         * without sending TEARDOWN.
         * @returns %TRUE if the media will be stopped when a client disconnects     without sending TEARDOWN.
         */
        is_stop_on_disconnect(): boolean;
        /**
         * Check if `media` can provide a #GstNetTimeProvider for its pipeline clock.
         *
         * Use gst_rtsp_media_get_time_provider() to get the network clock.
         * @returns %TRUE if @media can provide a #GstNetTimeProvider.
         */
        is_time_provider(): boolean;
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
        lock(): void;
        /**
         * Get the number of streams in this media.
         * @returns The number of streams.
         */
        n_streams(): number;
        /**
         * Prepare `media` for streaming. This function will create the objects
         * to manage the streaming. A pipeline must have been set on `media` with
         * gst_rtsp_media_take_pipeline().
         *
         * It will preroll the pipeline and collect vital information about the streams
         * such as the duration.
         * @param thread a #GstRTSPThread to run the   bus handler or %NULL
         * @returns %TRUE on success.
         */
        prepare(thread?: RTSPThread | null): boolean;
        /**
         * Seek the pipeline of `media` to `range`. `media` must be prepared with
         * gst_rtsp_media_prepare().
         * @param range a #GstRTSPTimeRange
         * @returns %TRUE on success.
         */
        seek(range: GstRtsp.RTSPTimeRange): boolean;
        /**
         * Seek the pipeline of `media` to `range` with the given `flags`.
         * `media` must be prepared with gst_rtsp_media_prepare().
         * @param range a #GstRTSPTimeRange
         * @param flags The minimal set of #GstSeekFlags to use
         * @returns %TRUE on success.
         */
        seek_full(range: GstRtsp.RTSPTimeRange, flags: Gst.SeekFlags | null): boolean;
        /**
         * Seek the pipeline of `media` to `range` with the given `flags` and `rate,`
         * and `trickmode_interval`.
         * `media` must be prepared with gst_rtsp_media_prepare().
         * In order to perform the seek operation, the pipeline must contain all
         * needed transport parts (transport sinks).
         * @param range a #GstRTSPTimeRange
         * @param flags The minimal set of #GstSeekFlags to use
         * @param rate the rate to use in the seek
         * @param trickmode_interval The trickmode interval to use for KEY_UNITS trick mode
         * @returns %TRUE on success.
         */
        seek_trickmode(
            range: GstRtsp.RTSPTimeRange,
            flags: Gst.SeekFlags | null,
            rate: number,
            trickmode_interval: Gst.ClockTime,
        ): boolean;
        /**
         * Check if the pipeline for `media` seek and up to what point in time,
         * it can seek.
         * @returns -1 if the stream is not seekable, 0 if seekable only to the beginning and > 0 to indicate the longest duration between any two random access points. %G_MAXINT64 means any value is possible.
         */
        seekable(): Gst.ClockTimeDiff;
        /**
         * configure `pool` to be used as the address pool of `media`.
         * @param pool a #GstRTSPAddressPool
         */
        set_address_pool(pool?: RTSPAddressPool | null): void;
        /**
         * Decide whether the multicast socket should be bound to a multicast address or
         * INADDR_ANY.
         * @param bind_mcast_addr the new value
         */
        set_bind_mcast_address(bind_mcast_addr: boolean): void;
        /**
         * Set the kernel UDP buffer size.
         * @param size the new value
         */
        set_buffer_size(size: number): void;
        /**
         * Configure the clock used for the media.
         * @param clock #GstClock to be used
         */
        set_clock(clock?: Gst.Clock | null): void;
        /**
         * Set whether retransmission requests will be sent
         * @param do_retransmission
         */
        set_do_retransmission(do_retransmission: boolean): void;
        /**
         * Configure the dscp qos of attached streams to `dscp_qos`.
         * @param dscp_qos a new dscp qos value (0-63, or -1 to disable)
         */
        set_dscp_qos(dscp_qos: number): void;
        /**
         * Set or unset if an EOS event will be sent to the pipeline for `media` before
         * it is unprepared.
         * @param eos_shutdown the new value
         */
        set_eos_shutdown(eos_shutdown: boolean): void;
        /**
         * Configure the latency used for receiving media.
         * @param latency latency in milliseconds
         */
        set_latency(latency: number): void;
        /**
         * Set the maximum time-to-live value of outgoing multicast packets.
         * @param ttl the new multicast ttl value
         * @returns %TRUE if the requested ttl has been set successfully.
         */
        set_max_mcast_ttl(ttl: number): boolean;
        /**
         * configure `multicast_iface` to be used for `media`.
         * @param multicast_iface a multicast interface name
         */
        set_multicast_iface(multicast_iface?: string | null): void;
        /**
         * Set `permissions` on `media`.
         * @param permissions a #GstRTSPPermissions
         */
        set_permissions(permissions?: RTSPPermissions | null): void;
        /**
         * Set the state of the pipeline managed by `media` to `state`
         * @param state the target state of the pipeline
         */
        set_pipeline_state(state: Gst.State | null): void;
        /**
         * Configure the allowed lower transport for `media`.
         * @param profiles the new flags
         */
        set_profiles(profiles: GstRtsp.RTSPProfile | null): void;
        /**
         * Configure the allowed lower transport for `media`.
         * @param protocols the new flags
         */
        set_protocols(protocols: GstRtsp.RTSPLowerTrans | null): void;
        /**
         * Sets if and how the media clock should be published according to RFC7273.
         * @param mode the clock publish mode
         */
        set_publish_clock_mode(mode: RTSPPublishClockMode | null): void;
        /**
         * Define whether `media` will follow the Rate-Control=no behaviour as specified
         * in the ONVIF replay spec.
         * @param enabled
         */
        set_rate_control(enabled: boolean): void;
        /**
         * Set the amount of time to store retransmission packets.
         * @param time the new value
         */
        set_retransmission_time(time: Gst.ClockTime): void;
        /**
         * Set or unset if the pipeline for `media` can be reused after the pipeline has
         * been unprepared.
         * @param reusable the new value
         */
        set_reusable(reusable: boolean): void;
        /**
         * Set or unset if the pipeline for `media` can be shared will multiple clients.
         * When `shared` is %TRUE, client requests for this media will share the media
         * pipeline.
         * @param shared the new value
         */
        set_shared(shared: boolean): void;
        /**
         * Set the state of `media` to `state` and for the transports in `transports`.
         *
         * `media` must be prepared with gst_rtsp_media_prepare();
         * @param state the target state of the media
         * @param transports a #GPtrArray of #GstRTSPStreamTransport pointers
         * @returns %TRUE on success.
         */
        set_state(state: Gst.State | null, transports: RTSPStreamTransport[]): boolean;
        /**
         * Set or unset if the pipeline for `media` should be stopped when a
         * client disconnects without sending TEARDOWN.
         * @param stop_on_disconnect the new value
         */
        set_stop_on_disconnect(stop_on_disconnect: boolean): void;
        /**
         * Control how @ media will be suspended after the SDP has been generated and
         * after a PAUSE request has been performed.
         *
         * Media must be unprepared when setting the suspend mode.
         * @param mode the new #GstRTSPSuspendMode
         */
        set_suspend_mode(mode: RTSPSuspendMode | null): void;
        /**
         * Sets if the media pipeline can work in PLAY or RECORD mode
         * @param mode the new value
         */
        set_transport_mode(mode: RTSPTransportMode | null): void;
        /**
         * Add `media` specific info to `sdp`. `info` is used to configure the connection
         * information in the SDP.
         * @param sdp a #GstSDPMessage
         * @param info a #GstSDPInfo
         * @returns TRUE on success.
         */
        setup_sdp(sdp: GstSdp.SDPMessage, info: SDPInfo): boolean;
        /**
         * Suspend `media`. The state of the pipeline managed by `media` is set to
         * GST_STATE_NULL but all streams are kept. `media` can be prepared again
         * with gst_rtsp_media_unsuspend()
         *
         * `media` must be prepared with gst_rtsp_media_prepare();
         * @returns %TRUE on success.
         */
        suspend(): boolean;
        /**
         * Set `pipeline` as the #GstPipeline for `media`. Ownership is
         * taken of `pipeline`.
         * @param pipeline a #GstPipeline
         */
        take_pipeline(pipeline: Gst.Pipeline): void;
        /**
         * Unlock the media.
         */
        unlock(): void;
        /**
         * Unprepare `media`. After this call, the media should be prepared again before
         * it can be used again. If the media is set to be non-reusable, a new instance
         * must be created.
         * @returns %TRUE on success.
         */
        unprepare(): boolean;
        /**
         * Unsuspend `media` if it was in a suspended state. This method does nothing
         * when the media was not in the suspended state.
         * @returns %TRUE on success.
         */
        unsuspend(): boolean;
        /**
         * Set `media` to provide a #GstNetTimeProvider.
         * @param time_provider if a #GstNetTimeProvider should be used
         */
        use_time_provider(time_provider: boolean): void;
    }

    namespace RTSPMediaFactory {
        // Signal callback interfaces

        interface MediaConfigure {
            (_source: RTSPMediaFactory, object: RTSPMedia): void;
        }

        interface MediaConstructed {
            (_source: RTSPMediaFactory, object: RTSPMedia): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'media-configure': MediaConfigure;
            'media-constructed': MediaConstructed;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            bind_mcast_address: boolean;
            bindMcastAddress: boolean;
            buffer_size: number;
            bufferSize: number;
            clock: Gst.Clock;
            dscp_qos: number;
            dscpQos: number;
            enable_rtcp: boolean;
            enableRtcp: boolean;
            eos_shutdown: boolean;
            eosShutdown: boolean;
            latency: number;
            launch: string;
            max_mcast_ttl: number;
            maxMcastTtl: number;
            profiles: GstRtsp.RTSPProfile;
            protocols: GstRtsp.RTSPLowerTrans;
            shared: boolean;
            stop_on_disconnect: boolean;
            stopOnDisconnect: boolean;
            suspend_mode: RTSPSuspendMode;
            suspendMode: RTSPSuspendMode;
            transport_mode: RTSPTransportMode;
            transportMode: RTSPTransportMode;
        }
    }

    /**
     * The definition and logic for constructing the pipeline for a media. The media
     * can contain multiple streams like audio and video.
     */
    class RTSPMediaFactory extends GObject.Object {
        static $gtype: GObject.GType<RTSPMediaFactory>;

        // Properties

        get bind_mcast_address(): boolean;
        set bind_mcast_address(val: boolean);
        get bindMcastAddress(): boolean;
        set bindMcastAddress(val: boolean);
        get buffer_size(): number;
        set buffer_size(val: number);
        get bufferSize(): number;
        set bufferSize(val: number);
        get clock(): Gst.Clock;
        set clock(val: Gst.Clock);
        get dscp_qos(): number;
        set dscp_qos(val: number);
        get dscpQos(): number;
        set dscpQos(val: number);
        /**
         * Whether the created media should send and receive RTCP
         */
        get enable_rtcp(): boolean;
        set enable_rtcp(val: boolean);
        /**
         * Whether the created media should send and receive RTCP
         */
        get enableRtcp(): boolean;
        set enableRtcp(val: boolean);
        get eos_shutdown(): boolean;
        set eos_shutdown(val: boolean);
        get eosShutdown(): boolean;
        set eosShutdown(val: boolean);
        get latency(): number;
        set latency(val: number);
        get launch(): string;
        set launch(val: string);
        get max_mcast_ttl(): number;
        set max_mcast_ttl(val: number);
        get maxMcastTtl(): number;
        set maxMcastTtl(val: number);
        get profiles(): GstRtsp.RTSPProfile;
        set profiles(val: GstRtsp.RTSPProfile);
        get protocols(): GstRtsp.RTSPLowerTrans;
        set protocols(val: GstRtsp.RTSPLowerTrans);
        get shared(): boolean;
        set shared(val: boolean);
        get stop_on_disconnect(): boolean;
        set stop_on_disconnect(val: boolean);
        get stopOnDisconnect(): boolean;
        set stopOnDisconnect(val: boolean);
        get suspend_mode(): RTSPSuspendMode;
        set suspend_mode(val: RTSPSuspendMode);
        get suspendMode(): RTSPSuspendMode;
        set suspendMode(val: RTSPSuspendMode);
        get transport_mode(): RTSPTransportMode;
        set transport_mode(val: RTSPTransportMode);
        get transportMode(): RTSPTransportMode;
        set transportMode(val: RTSPTransportMode);

        // Constructors

        constructor(properties?: Partial<RTSPMediaFactory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RTSPMediaFactory;

        // Signals

        connect<K extends keyof RTSPMediaFactory.SignalSignatures>(
            signal: K,
            callback: RTSPMediaFactory.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof RTSPMediaFactory.SignalSignatures>(
            signal: K,
            callback: RTSPMediaFactory.SignalSignatures[K],
        ): number;
        emit<K extends keyof RTSPMediaFactory.SignalSignatures>(
            signal: K,
            ...args: Parameters<RTSPMediaFactory.SignalSignatures[K]>
        ): void;

        // Virtual methods

        vfunc_configure(media: RTSPMedia): void;
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
         *
         * The returned media will be locked and must be unlocked afterwards.
         * @param url the url used
         */
        vfunc_construct(url: GstRtsp.RTSPUrl): RTSPMedia | null;
        /**
         * Construct and return a #GstElement that is a #GstBin containing
         * the elements to use for streaming the media.
         *
         * The bin should contain payloaders pay\%d for each stream. The default
         * implementation of this function returns the bin created from the
         * launch parameter.
         * @param url the url used
         */
        vfunc_create_element(url: GstRtsp.RTSPUrl): Gst.Element | null;
        vfunc_gen_key(url: GstRtsp.RTSPUrl): string;
        vfunc_media_configure(media: RTSPMedia): void;
        vfunc_media_constructed(media: RTSPMedia): void;

        // Methods

        /**
         * A convenience wrapper around gst_rtsp_permissions_add_role_from_structure().
         * If `factory` had no permissions, new permissions will be created and the
         * role will be added to it.
         * @param structure
         */
        add_role_from_structure(structure: Gst.Structure): void;
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
         *
         * The returned media will be locked and must be unlocked afterwards.
         * @param url the url used
         * @returns a new #GstRTSPMedia if the media could be prepared.
         */
        construct(url: GstRtsp.RTSPUrl): RTSPMedia | null;
        /**
         * Construct and return a #GstElement that is a #GstBin containing
         * the elements to use for streaming the media.
         *
         * The bin should contain payloaders pay\%d for each stream. The default
         * implementation of this function returns the bin created from the
         * launch parameter.
         * @param url the url used
         * @returns a new #GstElement.
         */
        create_element(url: GstRtsp.RTSPUrl): Gst.Element | null;
        /**
         * Get the #GstRTSPAddressPool used as the address pool of `factory`.
         * @returns the #GstRTSPAddressPool of @factory. g_object_unref() after usage.
         */
        get_address_pool(): RTSPAddressPool | null;
        /**
         * Get the kernel UDP buffer size.
         * @returns the kernel UDP buffer size.
         */
        get_buffer_size(): number;
        /**
         * Returns the clock that is going to be used by the pipelines
         * of all medias created from this factory.
         * @returns The GstClock
         */
        get_clock(): Gst.Clock | null;
        get_do_retransmission(): boolean;
        /**
         * Get the configured media DSCP QoS.
         * @returns the media DSCP QoS value or -1 if disabled.
         */
        get_dscp_qos(): number;
        /**
         * Get the latency that is used for receiving media
         * @returns latency in milliseconds
         */
        get_latency(): number;
        /**
         * Get the gst_parse_launch() pipeline description that will be used in the
         * default prepare vmethod.
         * @returns the configured launch description. g_free() after usage.
         */
        get_launch(): string | null;
        /**
         * Get the the maximum time-to-live value of outgoing multicast packets.
         * @returns the maximum time-to-live value of outgoing multicast packets.
         */
        get_max_mcast_ttl(): number;
        /**
         * Return the GType of the GstRTSPMedia subclass this
         * factory will create.
         */
        get_media_gtype(): GObject.GType;
        /**
         * Get the multicast interface used for `factory`.
         * @returns the multicast interface for @factory. g_free() after usage.
         */
        get_multicast_iface(): string | null;
        /**
         * Get the permissions object from `factory`.
         * @returns a #GstRTSPPermissions object, unref after usage.
         */
        get_permissions(): RTSPPermissions | null;
        /**
         * Get the allowed profiles of `factory`.
         * @returns a #GstRTSPProfile
         */
        get_profiles(): GstRtsp.RTSPProfile;
        /**
         * Get the allowed protocols of `factory`.
         * @returns a #GstRTSPLowerTrans
         */
        get_protocols(): GstRtsp.RTSPLowerTrans;
        /**
         * Gets if and how the media clock should be published according to RFC7273.
         * @returns The GstRTSPPublishClockMode
         */
        get_publish_clock_mode(): RTSPPublishClockMode;
        /**
         * Get the time that is stored for retransmission purposes
         * @returns a #GstClockTime
         */
        get_retransmission_time(): Gst.ClockTime;
        /**
         * Get how media created from this factory will be suspended.
         * @returns a #GstRTSPSuspendMode.
         */
        get_suspend_mode(): RTSPSuspendMode;
        /**
         * Get if media created from this factory can be used for PLAY or RECORD
         * methods.
         * @returns The transport mode.
         */
        get_transport_mode(): RTSPTransportMode;
        /**
         * Check if multicast sockets are configured to be bound to multicast addresses.
         * @returns %TRUE if multicast sockets are configured to be bound to multicast addresses.
         */
        is_bind_mcast_address(): boolean;
        /**
         * Check if created media will send and receive RTCP
         * @returns %TRUE if created media will send and receive RTCP
         */
        is_enable_rtcp(): boolean;
        /**
         * Get if media created from this factory will have an EOS event sent to the
         * pipeline before shutdown.
         * @returns %TRUE if the media will receive EOS before shutdown.
         */
        is_eos_shutdown(): boolean;
        /**
         * Get if media created from this factory can be shared between clients.
         * @returns %TRUE if the media will be shared between clients.
         */
        is_shared(): boolean;
        is_stop_on_disonnect(): boolean;
        /**
         * configure `pool` to be used as the address pool of `factory`.
         * @param pool a #GstRTSPAddressPool
         */
        set_address_pool(pool?: RTSPAddressPool | null): void;
        /**
         * Decide whether the multicast socket should be bound to a multicast address or
         * INADDR_ANY.
         * @param bind_mcast_addr the new value
         */
        set_bind_mcast_address(bind_mcast_addr: boolean): void;
        /**
         * Set the kernel UDP buffer size.
         * @param size the new value
         */
        set_buffer_size(size: number): void;
        /**
         * Configures a specific clock to be used by the pipelines
         * of all medias created from this factory.
         * @param clock the clock to be used by the media factory
         */
        set_clock(clock?: Gst.Clock | null): void;
        /**
         * Set whether retransmission requests will be sent for
         * receiving media
         * @param do_retransmission
         */
        set_do_retransmission(do_retransmission: boolean): void;
        /**
         * Configure the media dscp qos to `dscp_qos`.
         * @param dscp_qos a new dscp qos value (0-63, or -1 to disable)
         */
        set_dscp_qos(dscp_qos: number): void;
        /**
         * Decide whether the created media should send and receive RTCP
         * @param enable the new value
         */
        set_enable_rtcp(enable: boolean): void;
        /**
         * Configure if media created from this factory will have an EOS sent to the
         * pipeline before shutdown.
         * @param eos_shutdown the new value
         */
        set_eos_shutdown(eos_shutdown: boolean): void;
        /**
         * Configure the latency used for receiving media
         * @param latency latency in milliseconds
         */
        set_latency(latency: number): void;
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
        set_launch(launch: string): void;
        /**
         * Set the maximum time-to-live value of outgoing multicast packets.
         * @param ttl the new multicast ttl value
         * @returns %TRUE if the requested ttl has been set successfully.
         */
        set_max_mcast_ttl(ttl: number): boolean;
        /**
         * Configure the GType of the GstRTSPMedia subclass to
         * create (by default, overridden construct vmethods
         * may of course do something different)
         * @param media_gtype the GType of the class to create
         */
        set_media_gtype(media_gtype: GObject.GType): void;
        /**
         * configure `multicast_iface` to be used for `factory`.
         * @param multicast_iface a multicast interface name
         */
        set_multicast_iface(multicast_iface?: string | null): void;
        /**
         * Set `permissions` on `factory`.
         * @param permissions a #GstRTSPPermissions
         */
        set_permissions(permissions?: RTSPPermissions | null): void;
        /**
         * Configure the allowed profiles for `factory`.
         * @param profiles the new flags
         */
        set_profiles(profiles: GstRtsp.RTSPProfile | null): void;
        /**
         * Configure the allowed lower transport for `factory`.
         * @param protocols the new flags
         */
        set_protocols(protocols: GstRtsp.RTSPLowerTrans | null): void;
        /**
         * Sets if and how the media clock should be published according to RFC7273.
         * @param mode the clock publish mode
         */
        set_publish_clock_mode(mode: RTSPPublishClockMode | null): void;
        /**
         * Configure the time to store for possible retransmission
         * @param time a #GstClockTime
         */
        set_retransmission_time(time: Gst.ClockTime): void;
        /**
         * Configure if media created from this factory can be shared between clients.
         * @param shared the new value
         */
        set_shared(shared: boolean): void;
        /**
         * Configure if media created from this factory should be stopped
         * when a client disconnects without sending TEARDOWN.
         * @param stop_on_disconnect the new value
         */
        set_stop_on_disconnect(stop_on_disconnect: boolean): void;
        /**
         * Configure how media created from this factory will be suspended.
         * @param mode the new #GstRTSPSuspendMode
         */
        set_suspend_mode(mode: RTSPSuspendMode | null): void;
        /**
         * Configure if this factory creates media for PLAY or RECORD modes.
         * @param mode the new value
         */
        set_transport_mode(mode: RTSPTransportMode | null): void;
    }

    namespace RTSPMediaFactoryURI {
        // Signal signatures
        interface SignalSignatures extends RTSPMediaFactory.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends RTSPMediaFactory.ConstructorProps {
            uri: string;
            use_gstpay: boolean;
            useGstpay: boolean;
        }
    }

    /**
     * A media factory that creates a pipeline to play any uri.
     */
    class RTSPMediaFactoryURI extends RTSPMediaFactory {
        static $gtype: GObject.GType<RTSPMediaFactoryURI>;

        // Properties

        get uri(): string;
        set uri(val: string);
        get use_gstpay(): boolean;
        set use_gstpay(val: boolean);
        get useGstpay(): boolean;
        set useGstpay(val: boolean);

        // Constructors

        constructor(properties?: Partial<RTSPMediaFactoryURI.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RTSPMediaFactoryURI;

        // Signals

        connect<K extends keyof RTSPMediaFactoryURI.SignalSignatures>(
            signal: K,
            callback: RTSPMediaFactoryURI.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof RTSPMediaFactoryURI.SignalSignatures>(
            signal: K,
            callback: RTSPMediaFactoryURI.SignalSignatures[K],
        ): number;
        emit<K extends keyof RTSPMediaFactoryURI.SignalSignatures>(
            signal: K,
            ...args: Parameters<RTSPMediaFactoryURI.SignalSignatures[K]>
        ): void;

        // Methods

        /**
         * Get the URI that will provide media for this factory.
         * @returns the configured URI. g_free() after usage.
         */
        get_uri(): string;
        /**
         * Set the URI of the resource that will be streamed by this factory.
         * @param uri the uri the stream
         */
        set_uri(uri: string): void;
    }

    namespace RTSPMountPoints {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Creates a #GstRTSPMediaFactory object for a given url.
     */
    class RTSPMountPoints extends GObject.Object {
        static $gtype: GObject.GType<RTSPMountPoints>;

        // Constructors

        constructor(properties?: Partial<RTSPMountPoints.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RTSPMountPoints;

        // Signals

        connect<K extends keyof RTSPMountPoints.SignalSignatures>(
            signal: K,
            callback: RTSPMountPoints.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof RTSPMountPoints.SignalSignatures>(
            signal: K,
            callback: RTSPMountPoints.SignalSignatures[K],
        ): number;
        emit<K extends keyof RTSPMountPoints.SignalSignatures>(
            signal: K,
            ...args: Parameters<RTSPMountPoints.SignalSignatures[K]>
        ): void;

        // Virtual methods

        /**
         * Make a path string from `url`.
         * @param url a #GstRTSPUrl
         */
        vfunc_make_path(url: GstRtsp.RTSPUrl): string | null;

        // Methods

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
        add_factory(path: string, factory: RTSPMediaFactory): void;
        /**
         * Make a path string from `url`.
         * @param url a #GstRTSPUrl
         * @returns a path string for @url, g_free() after usage.
         */
        make_path(url: GstRtsp.RTSPUrl): string | null;
        /**
         * Find the factory in `mounts` that has the longest match with `path`.
         *
         * If `matched` is %NULL, `path` will match the factory exactly otherwise
         * the amount of characters that matched is returned in `matched`.
         * @param path a mount point
         * @returns the #GstRTSPMediaFactory for @path. g_object_unref() after usage.
         */
        match(path: string): [RTSPMediaFactory, number];
        /**
         * Remove the #GstRTSPMediaFactory associated with `path` in `mounts`.
         * @param path a mount point
         */
        remove_factory(path: string): void;
    }

    namespace RTSPOnvifClient {
        // Signal signatures
        interface SignalSignatures extends RTSPClient.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends RTSPClient.ConstructorProps {}
    }

    class RTSPOnvifClient extends RTSPClient {
        static $gtype: GObject.GType<RTSPOnvifClient>;

        // Constructors

        constructor(properties?: Partial<RTSPOnvifClient.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RTSPOnvifClient;

        // Signals

        connect<K extends keyof RTSPOnvifClient.SignalSignatures>(
            signal: K,
            callback: RTSPOnvifClient.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof RTSPOnvifClient.SignalSignatures>(
            signal: K,
            callback: RTSPOnvifClient.SignalSignatures[K],
        ): number;
        emit<K extends keyof RTSPOnvifClient.SignalSignatures>(
            signal: K,
            ...args: Parameters<RTSPOnvifClient.SignalSignatures[K]>
        ): void;
    }

    namespace RTSPOnvifMedia {
        // Signal signatures
        interface SignalSignatures extends RTSPMedia.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends RTSPMedia.ConstructorProps {}
    }

    class RTSPOnvifMedia extends RTSPMedia {
        static $gtype: GObject.GType<RTSPOnvifMedia>;

        // Constructors

        constructor(properties?: Partial<RTSPOnvifMedia.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof RTSPOnvifMedia.SignalSignatures>(
            signal: K,
            callback: RTSPOnvifMedia.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof RTSPOnvifMedia.SignalSignatures>(
            signal: K,
            callback: RTSPOnvifMedia.SignalSignatures[K],
        ): number;
        emit<K extends keyof RTSPOnvifMedia.SignalSignatures>(
            signal: K,
            ...args: Parameters<RTSPOnvifMedia.SignalSignatures[K]>
        ): void;

        // Methods

        /**
         * Find the ONVIF backchannel depayloader element. It should be named
         * 'depay_backchannel', be placed in a bin called 'onvif-backchannel'
         * and return all supported RTP caps on a caps query. Complete RTP caps with
         * at least the payload type, clock-rate and encoding-name are required.
         *
         * A new #GstRTSPStream is created for the backchannel if found.
         * @returns %TRUE if a backchannel stream could be found and created
         */
        collect_backchannel(): boolean;
        /**
         * Get the configured/supported bandwidth of the ONVIF backchannel pipeline in
         * bits per second.
         * @returns the configured/supported backchannel bandwidth.
         */
        get_backchannel_bandwidth(): number;
        /**
         * Set the configured/supported bandwidth of the ONVIF backchannel pipeline in
         * bits per second.
         * @param bandwidth the bandwidth in bits per second
         */
        set_backchannel_bandwidth(bandwidth: number): void;
    }

    namespace RTSPOnvifMediaFactory {
        // Signal signatures
        interface SignalSignatures extends RTSPMediaFactory.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends RTSPMediaFactory.ConstructorProps {}
    }

    class RTSPOnvifMediaFactory extends RTSPMediaFactory {
        static $gtype: GObject.GType<RTSPOnvifMediaFactory>;

        // Constructors

        constructor(properties?: Partial<RTSPOnvifMediaFactory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RTSPOnvifMediaFactory;

        // Signals

        connect<K extends keyof RTSPOnvifMediaFactory.SignalSignatures>(
            signal: K,
            callback: RTSPOnvifMediaFactory.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof RTSPOnvifMediaFactory.SignalSignatures>(
            signal: K,
            callback: RTSPOnvifMediaFactory.SignalSignatures[K],
        ): number;
        emit<K extends keyof RTSPOnvifMediaFactory.SignalSignatures>(
            signal: K,
            ...args: Parameters<RTSPOnvifMediaFactory.SignalSignatures[K]>
        ): void;

        // Static methods

        /**
         * Checks whether the client request requires backchannel.
         * @param factory a #GstRTSPMediaFactory
         * @param ctx
         */
        static requires_backchannel(factory: RTSPMediaFactory, ctx: RTSPContext): boolean;

        // Virtual methods

        /**
         * Returns %TRUE if an ONVIF backchannel is supported by the media factory.
         */
        vfunc_has_backchannel_support(): boolean;

        // Methods

        /**
         * Get the configured/supported bandwidth of the ONVIF backchannel pipeline in
         * bits per second.
         * @returns the configured/supported backchannel bandwidth.
         */
        get_backchannel_bandwidth(): number;
        /**
         * Get the gst_parse_launch() pipeline description that will be used in the
         * default prepare vmethod for generating the ONVIF backchannel pipeline.
         * @returns the configured backchannel launch description. g_free() after usage.
         */
        get_backchannel_launch(): string | null;
        /**
         * Returns %TRUE if an ONVIF backchannel is supported by the media factory.
         * @returns %TRUE if an ONVIF backchannel is supported by the media factory.
         */
        has_backchannel_support(): boolean;
        has_replay_support(): boolean;
        /**
         * Set the configured/supported bandwidth of the ONVIF backchannel pipeline in
         * bits per second.
         * @param bandwidth the bandwidth in bits per second
         */
        set_backchannel_bandwidth(bandwidth: number): void;
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
        set_backchannel_launch(launch?: string | null): void;
        /**
         * Set to %TRUE if ONVIF replay is supported by the media factory.
         * @param has_replay_support
         */
        set_replay_support(has_replay_support: boolean): void;
    }

    namespace RTSPOnvifServer {
        // Signal signatures
        interface SignalSignatures extends RTSPServer.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends RTSPServer.ConstructorProps {}
    }

    class RTSPOnvifServer extends RTSPServer {
        static $gtype: GObject.GType<RTSPOnvifServer>;

        // Constructors

        constructor(properties?: Partial<RTSPOnvifServer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RTSPOnvifServer;

        // Signals

        connect<K extends keyof RTSPOnvifServer.SignalSignatures>(
            signal: K,
            callback: RTSPOnvifServer.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof RTSPOnvifServer.SignalSignatures>(
            signal: K,
            callback: RTSPOnvifServer.SignalSignatures[K],
        ): number;
        emit<K extends keyof RTSPOnvifServer.SignalSignatures>(
            signal: K,
            ...args: Parameters<RTSPOnvifServer.SignalSignatures[K]>
        ): void;
    }

    namespace RTSPServer {
        // Signal callback interfaces

        interface ClientConnected {
            (_source: RTSPServer, object: RTSPClient): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'client-connected': ClientConnected;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            address: string;
            backlog: number;
            bound_port: number;
            boundPort: number;
            content_length_limit: number;
            contentLengthLimit: number;
            mount_points: RTSPMountPoints;
            mountPoints: RTSPMountPoints;
            service: string;
            session_pool: RTSPSessionPool;
            sessionPool: RTSPSessionPool;
        }
    }

    /**
     * This object listens on a port, creates and manages the clients connected to
     * it.
     */
    class RTSPServer extends GObject.Object {
        static $gtype: GObject.GType<RTSPServer>;

        // Properties

        get address(): string;
        set address(val: string);
        get backlog(): number;
        set backlog(val: number);
        get bound_port(): number;
        get boundPort(): number;
        get content_length_limit(): number;
        set content_length_limit(val: number);
        get contentLengthLimit(): number;
        set contentLengthLimit(val: number);
        get mount_points(): RTSPMountPoints;
        set mount_points(val: RTSPMountPoints);
        get mountPoints(): RTSPMountPoints;
        set mountPoints(val: RTSPMountPoints);
        get service(): string;
        set service(val: string);
        get session_pool(): RTSPSessionPool;
        set session_pool(val: RTSPSessionPool);
        get sessionPool(): RTSPSessionPool;
        set sessionPool(val: RTSPSessionPool);

        // Constructors

        constructor(properties?: Partial<RTSPServer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RTSPServer;

        // Signals

        connect<K extends keyof RTSPServer.SignalSignatures>(
            signal: K,
            callback: RTSPServer.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof RTSPServer.SignalSignatures>(
            signal: K,
            callback: RTSPServer.SignalSignatures[K],
        ): number;
        emit<K extends keyof RTSPServer.SignalSignatures>(
            signal: K,
            ...args: Parameters<RTSPServer.SignalSignatures[K]>
        ): void;

        // Static methods

        /**
         * A default #GSocketSourceFunc that creates a new #GstRTSPClient to accept and handle a
         * new connection on `socket` or `server`.
         * @param socket a #GSocket
         * @param condition the condition on @source
         * @param server a #GstRTSPServer
         */
        static io_func(socket: Gio.Socket, condition: GLib.IOCondition, server: RTSPServer): boolean;

        // Virtual methods

        vfunc_client_connected(client: RTSPClient): void;

        // Methods

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
         * @returns the ID (greater than 0) for the source within the GMainContext.
         */
        attach(context?: GLib.MainContext | null): number;
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
         * @returns a #GList with all clients for which @func returned #GST_RTSP_FILTER_REF. After usage, each element in the #GList should be unreffed before the list is freed.
         */
        client_filter(func?: RTSPServerClientFilterFunc | null): RTSPClient[];
        /**
         * Create a #GSocket for `server`. The socket will listen on the
         * configured service.
         * @param cancellable a #GCancellable
         * @returns the #GSocket for @server or %NULL when an error occurred.
         */
        create_socket(cancellable?: Gio.Cancellable | null): Gio.Socket;
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
         * @returns the #GSource for @server or %NULL when an error occurred. Free with g_source_unref ()
         */
        create_source(cancellable?: Gio.Cancellable | null): GLib.Source;
        /**
         * Get the address on which the server will accept connections.
         * @returns the server address. g_free() after usage.
         */
        get_address(): string | null;
        /**
         * Get the #GstRTSPAuth used as the authentication manager of `server`.
         * @returns the #GstRTSPAuth of @server. g_object_unref() after usage.
         */
        get_auth(): RTSPAuth | null;
        /**
         * The maximum amount of queued requests for the server.
         * @returns the server backlog.
         */
        get_backlog(): number;
        /**
         * Get the port number where the server was bound to.
         * @returns the port number
         */
        get_bound_port(): number;
        /**
         * Get the Content-Length limit of `server`.
         * @returns the Content-Length limit.
         */
        get_content_length_limit(): number;
        /**
         * Get the #GstRTSPMountPoints used as the mount points of `server`.
         * @returns the #GstRTSPMountPoints of @server. g_object_unref() after usage.
         */
        get_mount_points(): RTSPMountPoints | null;
        /**
         * Get the service on which the server will accept connections.
         * @returns the service. use g_free() after usage.
         */
        get_service(): string;
        /**
         * Get the #GstRTSPSessionPool used as the session pool of `server`.
         * @returns the #GstRTSPSessionPool used for sessions. g_object_unref() after usage.
         */
        get_session_pool(): RTSPSessionPool | null;
        /**
         * Get the #GstRTSPThreadPool used as the thread pool of `server`.
         * @returns the #GstRTSPThreadPool of @server. g_object_unref() after usage.
         */
        get_thread_pool(): RTSPThreadPool | null;
        /**
         * Configure `server` to accept connections on the given address.
         *
         * This function must be called before the server is bound.
         * @param address the address
         */
        set_address(address: string): void;
        /**
         * configure `auth` to be used as the authentication manager of `server`.
         * @param auth a #GstRTSPAuth
         */
        set_auth(auth?: RTSPAuth | null): void;
        /**
         * configure the maximum amount of requests that may be queued for the
         * server.
         *
         * This function must be called before the server is bound.
         * @param backlog the backlog
         */
        set_backlog(backlog: number): void;
        /**
         * Define an appropriate request size limit and reject requests exceeding the
         * limit.
         * @param limit
         */
        set_content_length_limit(limit: number): void;
        /**
         * configure `mounts` to be used as the mount points of `server`.
         * @param mounts a #GstRTSPMountPoints
         */
        set_mount_points(mounts?: RTSPMountPoints | null): void;
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
        set_service(service: string): void;
        /**
         * configure `pool` to be used as the session pool of `server`.
         * @param pool a #GstRTSPSessionPool
         */
        set_session_pool(pool?: RTSPSessionPool | null): void;
        /**
         * configure `pool` to be used as the thread pool of `server`.
         * @param pool a #GstRTSPThreadPool
         */
        set_thread_pool(pool?: RTSPThreadPool | null): void;
        /**
         * Take an existing network socket and use it for an RTSP connection. This
         * is used when transferring a socket from an HTTP server which should be used
         * as an RTSP over HTTP tunnel. The `initial_buffer` contains any remaining data
         * that the HTTP server read from the socket while parsing the HTTP header.
         * @param socket a network socket
         * @param ip the IP address of the remote client
         * @param port the port used by the other end
         * @param initial_buffer any initial data that was already read from the socket
         * @returns TRUE if all was ok, FALSE if an error occurred.
         */
        transfer_connection(socket: Gio.Socket, ip: string, port: number, initial_buffer?: string | null): boolean;
    }

    namespace RTSPSession {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            extra_timeout: number;
            extraTimeout: number;
            sessionid: string;
            timeout: number;
            timeout_always_visible: boolean;
            timeoutAlwaysVisible: boolean;
        }
    }

    /**
     * Session information kept by the server for a specific client.
     * One client session, identified with a session id, can handle multiple medias
     * identified with the url of a media.
     */
    class RTSPSession extends GObject.Object {
        static $gtype: GObject.GType<RTSPSession>;

        // Properties

        get extra_timeout(): number;
        set extra_timeout(val: number);
        get extraTimeout(): number;
        set extraTimeout(val: number);
        get sessionid(): string;
        get timeout(): number;
        set timeout(val: number);
        get timeout_always_visible(): boolean;
        set timeout_always_visible(val: boolean);
        get timeoutAlwaysVisible(): boolean;
        set timeoutAlwaysVisible(val: boolean);

        // Constructors

        constructor(properties?: Partial<RTSPSession.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](sessionid: string): RTSPSession;

        // Signals

        connect<K extends keyof RTSPSession.SignalSignatures>(
            signal: K,
            callback: RTSPSession.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof RTSPSession.SignalSignatures>(
            signal: K,
            callback: RTSPSession.SignalSignatures[K],
        ): number;
        emit<K extends keyof RTSPSession.SignalSignatures>(
            signal: K,
            ...args: Parameters<RTSPSession.SignalSignatures[K]>
        ): void;

        // Methods

        /**
         * Allow `session` to expire. This method must be called an equal
         * amount of time as gst_rtsp_session_prevent_expire().
         */
        allow_expire(): void;
        /**
         * Gets the session media for `path,` increasing its reference count. `matched`
         * will contain the number of matched characters of `path`.
         * @param path the path for the media
         * @returns the configuration for @path in @sess, should be unreferenced when no longer needed.
         */
        dup_media(path: string): [RTSPSessionMedia | null, number];
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
         * @returns a GList with all media for which @func returned #GST_RTSP_FILTER_REF. After usage, each element in the #GList should be unreffed before the list is freed.
         */
        filter(func?: RTSPSessionFilterFunc | null): RTSPSessionMedia[];
        /**
         * Get the string that can be placed in the Session header field.
         * @returns the Session header of @session. g_free() after usage.
         */
        get_header(): string | null;
        /**
         * Gets the session media for `path`. `matched` will contain the number of matched
         * characters of `path`.
         * @param path the path for the media
         * @returns the configuration for @path in @sess.
         */
        get_media(path: string): [RTSPSessionMedia | null, number];
        /**
         * Get the sessionid of `session`.
         * @returns the sessionid of @session. The value remains valid as long as @session is alive.
         */
        get_sessionid(): string | null;
        /**
         * Get the timeout value of `session`.
         * @returns the timeout of @session in seconds.
         */
        get_timeout(): number;
        /**
         * Check if `session` timeout out.
         * @param now the current system time
         * @returns %TRUE if @session timed out
         */
        is_expired(now: GLib.TimeVal): boolean;
        /**
         * Check if `session` timeout out.
         * @param now the current monotonic time
         * @returns %TRUE if @session timed out
         */
        is_expired_usec(now: number): boolean;
        /**
         * Manage the media object `obj` in `sess`. `path` will be used to retrieve this
         * media from the session with gst_rtsp_session_get_media().
         *
         * Ownership is taken from `media`.
         * @param path the path for the media
         * @param media a #GstRTSPMedia
         * @returns a new @GstRTSPSessionMedia object.
         */
        manage_media(path: string, media: RTSPMedia): RTSPSessionMedia;
        /**
         * Get the amount of milliseconds till the session will expire.
         * @param now the current system time
         * @returns the amount of milliseconds since the session will time out.
         */
        next_timeout(now: GLib.TimeVal): number;
        /**
         * Get the amount of milliseconds till the session will expire.
         * @param now the current monotonic time
         * @returns the amount of milliseconds since the session will time out.
         */
        next_timeout_usec(now: number): number;
        /**
         * Prevent `session` from expiring.
         */
        prevent_expire(): void;
        /**
         * Release the managed `media` in `sess,` freeing the memory allocated by it.
         * @param media a #GstRTSPMedia
         * @returns %TRUE if there are more media session left in @sess.
         */
        release_media(media: RTSPSessionMedia): boolean;
        /**
         * Configure `session` for a timeout of `timeout` seconds. The session will be
         * cleaned up when there is no activity for `timeout` seconds.
         * @param timeout the new timeout
         */
        set_timeout(timeout: number): void;
        /**
         * Update the last_access time of the session to the current time.
         */
        touch(): void;
    }

    namespace RTSPSessionMedia {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * State of a client session regarding a specific media identified by path.
     */
    class RTSPSessionMedia extends GObject.Object {
        static $gtype: GObject.GType<RTSPSessionMedia>;

        // Constructors

        constructor(properties?: Partial<RTSPSessionMedia.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](path: string, media: RTSPMedia): RTSPSessionMedia;

        // Signals

        connect<K extends keyof RTSPSessionMedia.SignalSignatures>(
            signal: K,
            callback: RTSPSessionMedia.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof RTSPSessionMedia.SignalSignatures>(
            signal: K,
            callback: RTSPSessionMedia.SignalSignatures[K],
        ): number;
        emit<K extends keyof RTSPSessionMedia.SignalSignatures>(
            signal: K,
            ...args: Parameters<RTSPSessionMedia.SignalSignatures[K]>
        ): void;

        // Methods

        /**
         * Fill `range` with the next available min and max channels for
         * interleaved transport.
         * @returns %TRUE on success.
         */
        alloc_channels(): [boolean, GstRtsp.RTSPRange];
        /**
         * Get the base_time of the #GstRTSPMedia in `media`
         * @returns the base_time of the media.
         */
        get_base_time(): Gst.ClockTime;
        /**
         * Get the #GstRTSPMedia that was used when constructing `media`
         * @returns the #GstRTSPMedia of @media. Remains valid as long as @media is valid.
         */
        get_media(): RTSPMedia | null;
        /**
         * Retrieve the RTP-Info header string for all streams in `media`
         * with configured transports.
         * @returns The RTP-Info as a string or %NULL when no RTP-Info could be generated, g_free() after usage.
         */
        get_rtpinfo(): string | null;
        /**
         * Get the current RTSP state of `media`.
         * @returns the current RTSP state of @media.
         */
        get_rtsp_state(): GstRtsp.RTSPState;
        /**
         * Get a previously created #GstRTSPStreamTransport for the stream at `idx`.
         * @param idx the stream index
         * @returns a #GstRTSPStreamTransport that is valid until the session of @media is unreffed.
         */
        get_transport(idx: number): RTSPStreamTransport | null;
        /**
         * Get a list of all available #GstRTSPStreamTransport in this session.
         * @returns a list of #GstRTSPStreamTransport, g_ptr_array_unref () after usage.
         */
        get_transports(): RTSPStreamTransport[];
        /**
         * Check if the path of `media` matches `path`. It `path` matches, the amount of
         * matched characters is returned in `matched`.
         * @param path a path
         * @returns %TRUE when @path matches the path of @media.
         */
        matches(path: string): [boolean, number];
        /**
         * Set the RTSP state of `media` to `state`.
         * @param state a #GstRTSPState
         */
        set_rtsp_state(state: GstRtsp.RTSPState | null): void;
        /**
         * Tell the media object `media` to change to `state`.
         * @param state the new state
         * @returns %TRUE on success.
         */
        set_state(state: Gst.State | null): boolean;
        /**
         * Configure the transport for `stream` to `tr` in `media`.
         * @param stream a #GstRTSPStream
         * @param tr a #GstRTSPTransport
         * @returns the new or updated #GstRTSPStreamTransport for @stream.
         */
        set_transport(stream: RTSPStream, tr: GstRtsp.RTSPTransport): RTSPStreamTransport;
    }

    namespace RTSPSessionPool {
        // Signal callback interfaces

        interface SessionRemoved {
            (_source: RTSPSessionPool, object: RTSPSession): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'session-removed': SessionRemoved;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            max_sessions: number;
            maxSessions: number;
        }
    }

    /**
     * An object that keeps track of the active sessions. This object is usually
     * attached to a #GstRTSPServer object to manage the sessions in that server.
     */
    class RTSPSessionPool extends GObject.Object {
        static $gtype: GObject.GType<RTSPSessionPool>;

        // Properties

        get max_sessions(): number;
        set max_sessions(val: number);
        get maxSessions(): number;
        set maxSessions(val: number);

        // Constructors

        constructor(properties?: Partial<RTSPSessionPool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RTSPSessionPool;

        // Signals

        connect<K extends keyof RTSPSessionPool.SignalSignatures>(
            signal: K,
            callback: RTSPSessionPool.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof RTSPSessionPool.SignalSignatures>(
            signal: K,
            callback: RTSPSessionPool.SignalSignatures[K],
        ): number;
        emit<K extends keyof RTSPSessionPool.SignalSignatures>(
            signal: K,
            ...args: Parameters<RTSPSessionPool.SignalSignatures[K]>
        ): void;

        // Virtual methods

        vfunc_create_session_id(): string;
        vfunc_session_removed(session: RTSPSession): void;

        // Methods

        /**
         * Inspect all the sessions in `pool` and remove the sessions that are inactive
         * for more than their timeout.
         * @returns the amount of sessions that got removed.
         */
        cleanup(): number;
        /**
         * Create a new #GstRTSPSession object in `pool`.
         * @returns a new #GstRTSPSession.
         */
        create(): RTSPSession | null;
        /**
         * Create a #GSource that will be dispatched when the session should be cleaned
         * up.
         * @returns a #GSource
         */
        create_watch(): GLib.Source;
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
         * @returns a GList with all sessions for which @func returned #GST_RTSP_FILTER_REF. After usage, each element in the GList should be unreffed before the list is freed.
         */
        filter(func?: RTSPSessionPoolFilterFunc | null): RTSPSession[];
        /**
         * Find the session with `sessionid` in `pool`. The access time of the session
         * will be updated with gst_rtsp_session_touch().
         * @param sessionid the session id
         * @returns the #GstRTSPSession with @sessionid or %NULL when the session did not exist. g_object_unref() after usage.
         */
        find(sessionid: string): RTSPSession | null;
        /**
         * Get the maximum allowed number of sessions in `pool`. 0 means an unlimited
         * amount of sessions.
         * @returns the maximum allowed number of sessions.
         */
        get_max_sessions(): number;
        /**
         * Get the amount of active sessions in `pool`.
         * @returns the amount of active sessions in @pool.
         */
        get_n_sessions(): number;
        /**
         * Remove `sess` from `pool,` releasing the ref that the pool has on `sess`.
         * @param sess a #GstRTSPSession
         * @returns %TRUE if the session was found and removed.
         */
        remove(sess: RTSPSession): boolean;
        /**
         * Configure the maximum allowed number of sessions in `pool` to `max`.
         * A value of 0 means an unlimited amount of sessions.
         * @param max the maximum number of sessions
         */
        set_max_sessions(max: number): void;
    }

    namespace RTSPStream {
        // Signal callback interfaces

        interface NewRtcpEncoder {
            (_source: RTSPStream, object: Gst.Element): void;
        }

        interface NewRtpEncoder {
            (_source: RTSPStream, object: Gst.Element): void;
        }

        interface NewRtpRtcpDecoder {
            (_source: RTSPStream, object: Gst.Element): void;
        }

        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'new-rtcp-encoder': NewRtcpEncoder;
            'new-rtp-encoder': NewRtpEncoder;
            'new-rtp-rtcp-decoder': NewRtpRtcpDecoder;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            control: string;
            profiles: GstRtsp.RTSPProfile;
            protocols: GstRtsp.RTSPLowerTrans;
        }
    }

    /**
     * The definition of a media stream.
     */
    class RTSPStream extends GObject.Object {
        static $gtype: GObject.GType<RTSPStream>;

        // Properties

        get control(): string;
        set control(val: string);
        get profiles(): GstRtsp.RTSPProfile;
        set profiles(val: GstRtsp.RTSPProfile);
        get protocols(): GstRtsp.RTSPLowerTrans;
        set protocols(val: GstRtsp.RTSPLowerTrans);

        // Constructors

        constructor(properties?: Partial<RTSPStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](idx: number, payloader: Gst.Element, pad: Gst.Pad): RTSPStream;

        // Signals

        connect<K extends keyof RTSPStream.SignalSignatures>(
            signal: K,
            callback: RTSPStream.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof RTSPStream.SignalSignatures>(
            signal: K,
            callback: RTSPStream.SignalSignatures[K],
        ): number;
        emit<K extends keyof RTSPStream.SignalSignatures>(
            signal: K,
            ...args: Parameters<RTSPStream.SignalSignatures[K]>
        ): void;

        // Methods

        /**
         * Add multicast client address to stream. At this point, the sockets that
         * will stream RTP and RTCP data to `destination` are supposed to be
         * allocated.
         * @param destination a multicast address to add
         * @param rtp_port RTP port
         * @param rtcp_port RTCP port
         * @param family socket family
         * @returns %TRUE if @destination can be addedd and handled by @stream.
         */
        add_multicast_client_address(
            destination: string,
            rtp_port: number,
            rtcp_port: number,
            family: Gio.SocketFamily | null,
        ): boolean;
        /**
         * Add the transport in `trans` to `stream`. The media of `stream` will
         * then also be send to the values configured in `trans`. Adding the
         * same transport twice will not add it a second time.
         *
         * `stream` must be joined to a bin.
         *
         * `trans` must contain a valid #GstRTSPTransport.
         * @param trans a #GstRTSPStreamTransport
         * @returns %TRUE if @trans was added
         */
        add_transport(trans: RTSPStreamTransport): boolean;
        /**
         * Allocates RTP and RTCP ports.
         * @param family protocol family
         * @param transport transport method
         * @param use_client_settings Whether to use client settings or not
         * @returns %TRUE if the RTP and RTCP sockets have been succeccully allocated.
         */
        allocate_udp_sockets(
            family: Gio.SocketFamily | null,
            transport: GstRtsp.RTSPTransport,
            use_client_settings: boolean,
        ): boolean;
        /**
         * Add a receiver and sender part to the pipeline based on the transport from
         * SETUP.
         * @param transport a #GstRTSPTransport
         * @returns %TRUE if the stream has been successfully updated.
         */
        complete_stream(transport: GstRtsp.RTSPTransport): boolean;
        /**
         * Get the #GstRTSPAddressPool used as the address pool of `stream`.
         * @returns the #GstRTSPAddressPool of @stream. g_object_unref() after usage.
         */
        get_address_pool(): RTSPAddressPool | null;
        /**
         * Get the size of the UDP transmission buffer (in bytes)
         * @returns the size of the UDP TX buffer
         */
        get_buffer_size(): number;
        /**
         * Retrieve the current caps of `stream`.
         * @returns the #GstCaps of @stream. use gst_caps_unref() after usage.
         */
        get_caps(): Gst.Caps | null;
        /**
         * Get the control string to identify this stream.
         * @returns the control string. g_free() after usage.
         */
        get_control(): string | null;
        get_current_seqnum(): number;
        /**
         * Get the configured DSCP QoS in of the outgoing sockets.
         * @returns the DSCP QoS value of the outgoing sockets, or -1 if disbled.
         */
        get_dscp_qos(): number;
        /**
         * Get the stream index.
         * @returns the stream index.
         */
        get_index(): number;
        /**
         * Get the previous joined bin with gst_rtsp_stream_join_bin() or NULL.
         * @returns the joined bin or NULL.
         */
        get_joined_bin(): Gst.Bin | null;
        /**
         * Get the the maximum time-to-live value of outgoing multicast packets.
         * @returns the maximum time-to-live value of outgoing multicast packets.
         */
        get_max_mcast_ttl(): number;
        /**
         * Get the configured MTU in the payloader of `stream`.
         * @returns the MTU of the payloader.
         */
        get_mtu(): number;
        /**
         * Get the multicast address of `stream` for `family`. The original
         * #GstRTSPAddress is cached and copy is returned, so freeing the return value
         * won't release the address from the pool.
         * @param family the #GSocketFamily
         * @returns the #GstRTSPAddress of @stream or %NULL when no address could be allocated. gst_rtsp_address_free() after usage.
         */
        get_multicast_address(family: Gio.SocketFamily | null): RTSPAddress | null;
        /**
         * Get all multicast client addresses that RTP data will be sent to
         * @returns A comma separated list of host:port pairs with destinations
         */
        get_multicast_client_addresses(): string;
        /**
         * Get the multicast interface used for `stream`.
         * @returns the multicast interface for @stream. g_free() after usage.
         */
        get_multicast_iface(): string | null;
        /**
         * Get the allowed profiles of `stream`.
         * @returns a #GstRTSPProfile
         */
        get_profiles(): GstRtsp.RTSPProfile;
        /**
         * Get the allowed protocols of `stream`.
         * @returns a #GstRTSPLowerTrans
         */
        get_protocols(): GstRtsp.RTSPLowerTrans;
        /**
         * Get the stream payload type.
         * @returns the stream payload type.
         */
        get_pt(): number;
        /**
         * Gets if and how the stream clock should be published according to RFC7273.
         * @returns The GstRTSPPublishClockMode
         */
        get_publish_clock_mode(): RTSPPublishClockMode;
        get_rate_control(): boolean;
        /**
         * Retrieve the current rate and/or applied_rate.
         * @returns %TRUE if rate and/or applied_rate could be determined.
         */
        get_rates(): [boolean, number, number];
        /**
         * Get the payload-type used for retransmission of this stream
         * @returns The retransmission PT.
         */
        get_retransmission_pt(): number;
        /**
         * Get the amount of time to store retransmission data.
         * @returns the amount of time to store retransmission data.
         */
        get_retransmission_time(): Gst.ClockTime;
        /**
         * Get the multicast RTCP socket from `stream` for a `family`.
         * @param family the socket family
         * @returns the multicast RTCP socket or %NULL if no socket could be allocated for @family. Unref after usage
         */
        get_rtcp_multicast_socket(family: Gio.SocketFamily | null): Gio.Socket | null;
        /**
         * Get the RTCP socket from `stream` for a `family`.
         *
         * `stream` must be joined to a bin.
         * @param family the socket family
         * @returns the RTCP socket or %NULL if no socket could be allocated for @family. Unref after usage
         */
        get_rtcp_socket(family: Gio.SocketFamily | null): Gio.Socket | null;
        /**
         * Get the multicast RTP socket from `stream` for a `family`.
         * @param family the socket family
         * @returns the multicast RTP socket or %NULL if no socket could be allocated for @family. Unref after usage
         */
        get_rtp_multicast_socket(family: Gio.SocketFamily | null): Gio.Socket | null;
        /**
         * Get the RTP socket from `stream` for a `family`.
         *
         * `stream` must be joined to a bin.
         * @param family the socket family
         * @returns the RTP socket or %NULL if no socket could be allocated for @family. Unref after usage
         */
        get_rtp_socket(family: Gio.SocketFamily | null): Gio.Socket | null;
        /**
         * Retrieve the current rtptime, seq and running-time. This is used to
         * construct a RTPInfo reply header.
         * @returns %TRUE when rtptime, seq and running-time could be determined.
         */
        get_rtpinfo(): [boolean, number, number, number, Gst.ClockTime];
        /**
         * Get the RTP session of this stream.
         * @returns The RTP session of this stream. Unref after usage.
         */
        get_rtpsession<T = GObject.Object>(): T;
        /**
         * Fill `server_port` with the port pair used by the server. This function can
         * only be called when `stream` has been joined.
         * @param family the port family to get
         */
        get_server_port(family: Gio.SocketFamily | null): GstRtsp.RTSPRange;
        /**
         * Get the sinkpad associated with `stream`.
         * @returns the sinkpad. Unref after usage.
         */
        get_sinkpad(): Gst.Pad | null;
        /**
         * Get the srcpad associated with `stream`.
         * @returns the srcpad. Unref after usage.
         */
        get_srcpad(): Gst.Pad | null;
        /**
         * Get the SRTP encoder for this stream.
         * @returns The SRTP encoder for this stream. Unref after usage.
         */
        get_srtp_encoder(): Gst.Element | null;
        /**
         * Get the SSRC used by the RTP session of this stream. This function can only
         * be called when `stream` has been joined.
         */
        get_ssrc(): number;
        get_ulpfec_enabled(): boolean;
        get_ulpfec_percentage(): number;
        get_ulpfec_pt(): number;
        /**
         * Parse and handle a KeyMgmt header.
         * @param keymgmt a keymgmt header
         */
        handle_keymgmt(keymgmt: string): boolean;
        /**
         * Check if `stream` has the control string `control`.
         * @param control a control string
         * @returns %TRUE is @stream has @control as the control string
         */
        has_control(control?: string | null): boolean;
        /**
         * Check if multicast sockets are configured to be bound to multicast addresses.
         * @returns %TRUE if multicast sockets are configured to be bound to multicast addresses.
         */
        is_bind_mcast_address(): boolean;
        /**
         * Check if `stream` is blocking on a #GstBuffer.
         * @returns %TRUE if @stream is blocking
         */
        is_blocking(): boolean;
        /**
         * See gst_rtsp_stream_set_client_side()
         * @returns TRUE if this #GstRTSPStream is client-side.
         */
        is_client_side(): boolean;
        /**
         * Checks whether the stream is complete, contains the receiver and the sender
         * parts. As the stream contains sink(s) element(s), it's possible to perform
         * seek operations on it.
         * @returns %TRUE if the stream contains at least one sink element.
         */
        is_complete(): boolean;
        /**
         * Checks whether the stream is a receiver.
         * @returns %TRUE if the stream is a receiver and %FALSE otherwise.
         */
        is_receiver(): boolean;
        /**
         * Checks whether the stream is a sender.
         * @returns %TRUE if the stream is a sender and %FALSE otherwise.
         */
        is_sender(): boolean;
        /**
         * Check if `transport` can be handled by stream
         * @param transport a #GstRTSPTransport
         * @returns %TRUE if @transport can be handled by @stream.
         */
        is_transport_supported(transport: GstRtsp.RTSPTransport): boolean;
        /**
         * Join the #GstBin `bin` that contains the element `rtpbin`.
         *
         * `stream` will link to `rtpbin,` which must be inside `bin`. The elements
         * added to `bin` will be set to the state given in `state`.
         * @param bin a #GstBin to join
         * @param rtpbin a rtpbin element in @bin
         * @param state the target state of the new elements
         * @returns %TRUE on success.
         */
        join_bin(bin: Gst.Bin, rtpbin: Gst.Element, state: Gst.State | null): boolean;
        /**
         * Remove the elements of `stream` from `bin`.
         * @param bin a #GstBin
         * @param rtpbin a rtpbin #GstElement
         * @returns %TRUE on success.
         */
        leave_bin(bin: Gst.Bin, rtpbin: Gst.Element): boolean;
        /**
         * Query the position of the stream in %GST_FORMAT_TIME. This only considers
         * the RTP parts of the pipeline and not the RTCP parts.
         * @returns %TRUE if the position could be queried
         */
        query_position(): [boolean, number];
        /**
         * Query the stop of the stream in %GST_FORMAT_TIME. This only considers
         * the RTP parts of the pipeline and not the RTCP parts.
         * @returns %TRUE if the stop could be queried
         */
        query_stop(): [boolean, number];
        /**
         * Handle an RTCP buffer for the stream. This method is usually called when a
         * message has been received from a client using the TCP transport.
         *
         * This function takes ownership of `buffer`.
         * @param buffer a #GstBuffer
         * @returns a GstFlowReturn.
         */
        recv_rtcp(buffer: Gst.Buffer): Gst.FlowReturn;
        /**
         * Handle an RTP buffer for the stream. This method is usually called when a
         * message has been received from a client using the TCP transport.
         *
         * This function takes ownership of `buffer`.
         * @param buffer a #GstBuffer
         * @returns a GstFlowReturn.
         */
        recv_rtp(buffer: Gst.Buffer): Gst.FlowReturn;
        /**
         * Remove the transport in `trans` from `stream`. The media of `stream` will
         * not be sent to the values configured in `trans`.
         *
         * `stream` must be joined to a bin.
         *
         * `trans` must contain a valid #GstRTSPTransport.
         * @param trans a #GstRTSPStreamTransport
         * @returns %TRUE if @trans was removed
         */
        remove_transport(trans: RTSPStreamTransport): boolean;
        /**
         * Creating a rtxreceive bin
         * @param sessid the session id
         * @returns a #GstElement.
         */
        request_aux_receiver(sessid: number): Gst.Element | null;
        /**
         * Creating a rtxsend bin
         * @param sessid the session id
         * @returns a #GstElement.
         */
        request_aux_sender(sessid: number): Gst.Element | null;
        /**
         * Creating a rtpulpfecdec element
         * @param rtpbin
         * @param sessid
         * @returns a #GstElement.
         */
        request_ulpfec_decoder(rtpbin: Gst.Element, sessid: number): Gst.Element | null;
        /**
         * Creating a rtpulpfecenc element
         * @param sessid
         * @returns a #GstElement.
         */
        request_ulpfec_encoder(sessid: number): Gst.Element | null;
        /**
         * Reserve `address` and `port` as the address and port of `stream`. The original
         * #GstRTSPAddress is cached and copy is returned, so freeing the return value
         * won't release the address from the pool.
         * @param address an address
         * @param port a port
         * @param n_ports n_ports
         * @param ttl a TTL
         * @returns the #GstRTSPAddress of @stream or %NULL when the address could not be reserved. gst_rtsp_address_free() after usage.
         */
        reserve_address(address: string, port: number, n_ports: number, ttl: number): RTSPAddress | null;
        /**
         * Checks whether the individual `stream` is seekable.
         * @returns %TRUE if @stream is seekable, else %FALSE.
         */
        seekable(): boolean;
        /**
         * configure `pool` to be used as the address pool of `stream`.
         * @param pool a #GstRTSPAddressPool
         */
        set_address_pool(pool?: RTSPAddressPool | null): void;
        /**
         * Decide whether the multicast socket should be bound to a multicast address or
         * INADDR_ANY.
         * @param bind_mcast_addr the new value
         */
        set_bind_mcast_address(bind_mcast_addr: boolean): void;
        /**
         * Blocks or unblocks the dataflow on `stream`.
         * @param blocked boolean indicating we should block or unblock
         * @returns %TRUE on success
         */
        set_blocked(blocked: boolean): boolean;
        /**
         * Set the size of the UDP transmission buffer (in bytes)
         * Needs to be set before the stream is joined to a bin.
         * @param size the buffer size
         */
        set_buffer_size(size: number): void;
        /**
         * Sets the #GstRTSPStream as a 'client side' stream - used for sending
         * streams to an RTSP server via RECORD. This has the practical effect
         * of changing which UDP port numbers are used when setting up the local
         * side of the stream sending to be either the 'server' or 'client' pair
         * of a configured UDP transport.
         * @param client_side TRUE if this #GstRTSPStream is running on the 'client' side of an RTSP connection.
         */
        set_client_side(client_side: boolean): void;
        /**
         * Set the control string in `stream`.
         * @param control a control string
         */
        set_control(control?: string | null): void;
        /**
         * Configure the dscp qos of the outgoing sockets to `dscp_qos`.
         * @param dscp_qos a new dscp qos value (0-63, or -1 to disable)
         */
        set_dscp_qos(dscp_qos: number): void;
        /**
         * Set the maximum time-to-live value of outgoing multicast packets.
         * @param ttl the new multicast ttl value
         * @returns %TRUE if the requested ttl has been set successfully.
         */
        set_max_mcast_ttl(ttl: number): boolean;
        /**
         * Configure the mtu in the payloader of `stream` to `mtu`.
         * @param mtu a new MTU
         */
        set_mtu(mtu: number): void;
        /**
         * configure `multicast_iface` to be used for `stream`.
         * @param multicast_iface a multicast interface name
         */
        set_multicast_iface(multicast_iface?: string | null): void;
        /**
         * Configure the allowed profiles for `stream`.
         * @param profiles the new profiles
         */
        set_profiles(profiles: GstRtsp.RTSPProfile | null): void;
        /**
         * Configure the allowed lower transport for `stream`.
         * @param protocols the new flags
         */
        set_protocols(protocols: GstRtsp.RTSPLowerTrans | null): void;
        /**
         * Configure a pt map between `pt` and `caps`.
         * @param pt the pt
         * @param caps a #GstCaps
         */
        set_pt_map(pt: number, caps: Gst.Caps): void;
        /**
         * Sets if and how the stream clock should be published according to RFC7273.
         * @param mode the clock publish mode
         */
        set_publish_clock_mode(mode: RTSPPublishClockMode | null): void;
        /**
         * Define whether `stream` will follow the Rate-Control=no behaviour as specified
         * in the ONVIF replay spec.
         * @param enabled
         */
        set_rate_control(enabled: boolean): void;
        /**
         * Set the payload type (pt) for retransmission of this stream.
         * @param rtx_pt a #guint
         */
        set_retransmission_pt(rtx_pt: number): void;
        /**
         * Set the amount of time to store retransmission packets.
         * @param time a #GstClockTime
         */
        set_retransmission_time(time: Gst.ClockTime): void;
        set_seqnum_offset(seqnum: number): void;
        /**
         * Sets the amount of redundancy to apply when creating ULPFEC
         * protection packets.
         * @param percentage
         */
        set_ulpfec_percentage(percentage: number): void;
        /**
         * Set the payload type to be used for ULPFEC protection packets
         * @param pt
         */
        set_ulpfec_pt(pt: number): void;
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
         * @returns a #GList with all transports for which @func returned #GST_RTSP_FILTER_REF. After usage, each element in the #GList should be unreffed before the list is freed.
         */
        transport_filter(func?: RTSPStreamTransportFilterFunc | null): RTSPStreamTransport[];
        unblock_linked(): boolean;
        /**
         * Remove blocking probe from the RTCP source. When creating an UDP source for
         * RTCP it is initially blocked until this function is called.
         * This functions should be called once the pipeline is ready for handling RTCP
         * packets.
         */
        unblock_rtcp(): void;
        /**
         * Update the new crypto information for `ssrc` in `stream`. If information
         * for `ssrc` did not exist, it will be added. If information
         * for `ssrc` existed, it will be replaced. If `crypto` is %NULL, it will
         * be removed from `stream`.
         * @param ssrc the SSRC
         * @param crypto a #GstCaps with crypto info
         * @returns %TRUE if @crypto could be updated
         */
        update_crypto(ssrc: number, crypto?: Gst.Caps | null): boolean;
        /**
         * Check if the requested multicast ttl value is allowed.
         * @param ttl a requested multicast ttl
         * @returns TRUE if the requested ttl value is allowed.
         */
        verify_mcast_ttl(ttl: number): boolean;
    }

    namespace RTSPStreamTransport {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A Transport description for a stream
     */
    class RTSPStreamTransport extends GObject.Object {
        static $gtype: GObject.GType<RTSPStreamTransport>;

        // Constructors

        constructor(properties?: Partial<RTSPStreamTransport.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](stream: RTSPStream, tr: GstRtsp.RTSPTransport): RTSPStreamTransport;

        // Signals

        connect<K extends keyof RTSPStreamTransport.SignalSignatures>(
            signal: K,
            callback: RTSPStreamTransport.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof RTSPStreamTransport.SignalSignatures>(
            signal: K,
            callback: RTSPStreamTransport.SignalSignatures[K],
        ): number;
        emit<K extends keyof RTSPStreamTransport.SignalSignatures>(
            signal: K,
            ...args: Parameters<RTSPStreamTransport.SignalSignatures[K]>
        ): void;

        // Methods

        /**
         * Get the RTP-Info string for `trans` and `start_time`.
         * @param start_time a star time
         * @returns the RTPInfo string for @trans and @start_time or %NULL when the RTP-Info could not be determined. g_free() after usage.
         */
        get_rtpinfo(start_time: Gst.ClockTime): string | null;
        /**
         * Get the #GstRTSPStream used when constructing `trans`.
         * @returns the stream used when constructing @trans.
         */
        get_stream(): RTSPStream | null;
        /**
         * Get the transport configured in `trans`.
         * @returns the transport configured in @trans. It remains valid for as long as @trans is valid.
         */
        get_transport(): GstRtsp.RTSPTransport | null;
        /**
         * Get the url configured in `trans`.
         * @returns the url configured in @trans. It remains valid for as long as @trans is valid.
         */
        get_url(): GstRtsp.RTSPUrl | null;
        /**
         * Check if `trans` is timed out.
         * @returns %TRUE if @trans timed out.
         */
        is_timed_out(): boolean;
        /**
         * Signal the installed keep_alive callback for `trans`.
         */
        keep_alive(): void;
        /**
         * Signal the installed message_sent / message_sent_full callback for `trans`.
         */
        message_sent(): void;
        /**
         * Receive `buffer` on `channel` `trans`.
         * @param channel a channel
         * @param buffer a #GstBuffer
         * @returns a #GstFlowReturn. Returns GST_FLOW_NOT_LINKED when @channel is not    configured in the transport of @trans.
         */
        recv_data(channel: number, buffer: Gst.Buffer): Gst.FlowReturn;
        /**
         * Send `buffer` to the installed RTCP callback for `trans`.
         * @param buffer a #GstBuffer
         * @returns %TRUE on success
         */
        send_rtcp(buffer: Gst.Buffer): boolean;
        /**
         * Send `buffer_list` to the installed RTCP callback for `trans`.
         * @param buffer_list a #GstBuffer
         * @returns %TRUE on success
         */
        send_rtcp_list(buffer_list: Gst.BufferList): boolean;
        /**
         * Send `buffer` to the installed RTP callback for `trans`.
         * @param buffer a #GstBuffer
         * @returns %TRUE on success
         */
        send_rtp(buffer: Gst.Buffer): boolean;
        /**
         * Send `buffer_list` to the installed RTP callback for `trans`.
         * @param buffer_list a #GstBufferList
         * @returns %TRUE on success
         */
        send_rtp_list(buffer_list: Gst.BufferList): boolean;
        /**
         * Activate or deactivate datatransfer configured in `trans`.
         * @param active new state of @trans
         * @returns %TRUE when the state was changed.
         */
        set_active(active: boolean): boolean;
        /**
         * Install callbacks that will be called when data for a stream should be sent
         * to a client. This is usually used when sending RTP/RTCP over TCP.
         * @param send_rtp a callback called when RTP should be sent
         * @param send_rtcp a callback called when RTCP should be sent
         * @param notify called with the user_data when no longer needed.
         */
        set_callbacks(send_rtp: RTSPSendFunc, send_rtcp: RTSPSendFunc, notify?: GLib.DestroyNotify | null): void;
        /**
         * Install callbacks that will be called when RTCP packets are received from the
         * receiver of `trans`.
         * @param keep_alive a callback called when the receiver is active
         * @param notify called with the user_data when no longer needed.
         */
        set_keepalive(keep_alive: RTSPKeepAliveFunc, notify?: GLib.DestroyNotify | null): void;
        /**
         * Install callbacks that will be called when data for a stream should be sent
         * to a client. This is usually used when sending RTP/RTCP over TCP.
         * @param send_rtp_list a callback called when RTP should be sent
         * @param send_rtcp_list a callback called when RTCP should be sent
         * @param notify called with the user_data when no longer needed.
         */
        set_list_callbacks(
            send_rtp_list: RTSPSendListFunc,
            send_rtcp_list: RTSPSendListFunc,
            notify?: GLib.DestroyNotify | null,
        ): void;
        /**
         * Install a callback that will be called when a message has been sent on `trans`.
         * @param message_sent a callback called when a message has been sent
         * @param notify called with the user_data when no longer needed
         */
        set_message_sent(message_sent: RTSPMessageSentFunc, notify?: GLib.DestroyNotify | null): void;
        /**
         * Install a callback that will be called when a message has been sent on `trans`.
         * @param message_sent a callback called when a message has been sent
         * @param notify called with the user_data when no longer needed
         */
        set_message_sent_full(message_sent: RTSPMessageSentFuncFull, notify?: GLib.DestroyNotify | null): void;
        /**
         * Set the timed out state of `trans` to `timedout`
         * @param timedout timed out value
         */
        set_timed_out(timedout: boolean): void;
        /**
         * Set `tr` as the client transport. This function takes ownership of the
         * passed `tr`.
         * @param tr a client #GstRTSPTransport
         */
        set_transport(tr: GstRtsp.RTSPTransport): void;
        /**
         * Set `url` as the client url.
         * @param url a client #GstRTSPUrl
         */
        set_url(url?: GstRtsp.RTSPUrl | null): void;
    }

    namespace RTSPThreadPool {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            max_threads: number;
            maxThreads: number;
        }
    }

    /**
     * The thread pool structure.
     */
    class RTSPThreadPool extends GObject.Object {
        static $gtype: GObject.GType<RTSPThreadPool>;

        // Properties

        get max_threads(): number;
        set max_threads(val: number);
        get maxThreads(): number;
        set maxThreads(val: number);

        // Constructors

        constructor(properties?: Partial<RTSPThreadPool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RTSPThreadPool;

        // Signals

        connect<K extends keyof RTSPThreadPool.SignalSignatures>(
            signal: K,
            callback: RTSPThreadPool.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof RTSPThreadPool.SignalSignatures>(
            signal: K,
            callback: RTSPThreadPool.SignalSignatures[K],
        ): number;
        emit<K extends keyof RTSPThreadPool.SignalSignatures>(
            signal: K,
            ...args: Parameters<RTSPThreadPool.SignalSignatures[K]>
        ): void;

        // Static methods

        /**
         * Wait for all tasks to be stopped and free all allocated resources. This is
         * mainly used in test suites to ensure proper cleanup of internal data
         * structures.
         */
        static cleanup(): void;

        // Virtual methods

        vfunc_configure_thread(thread: RTSPThread, ctx: RTSPContext): void;
        /**
         * Get a new #GstRTSPThread for `type` and `ctx`.
         * @param type the #GstRTSPThreadType
         * @param ctx a #GstRTSPContext
         */
        vfunc_get_thread(type: RTSPThreadType, ctx: RTSPContext): RTSPThread | null;
        vfunc_thread_enter(thread: RTSPThread): void;
        vfunc_thread_leave(thread: RTSPThread): void;

        // Methods

        /**
         * Get the maximum number of threads used for client connections.
         * See gst_rtsp_thread_pool_set_max_threads().
         * @returns the maximum number of threads.
         */
        get_max_threads(): number;
        /**
         * Get a new #GstRTSPThread for `type` and `ctx`.
         * @param type the #GstRTSPThreadType
         * @param ctx a #GstRTSPContext
         * @returns a new #GstRTSPThread, gst_rtsp_thread_stop() after usage
         */
        get_thread(type: RTSPThreadType | null, ctx: RTSPContext): RTSPThread | null;
        /**
         * Set the maximum threads used by the pool to handle client requests.
         * A value of 0 will use the pool mainloop, a value of -1 will use an
         * unlimited number of threads.
         * @param max_threads maximum threads
         */
        set_max_threads(max_threads: number): void;
    }

    /**
     * An address
     */
    class RTSPAddress {
        static $gtype: GObject.GType<RTSPAddress>;

        // Fields

        pool: RTSPAddressPool;
        address: string;
        port: number;
        n_ports: number;
        ttl: number;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * Make a copy of `addr`.
         * @returns a copy of @addr.
         */
        copy(): RTSPAddress;
        /**
         * Free `addr` and releasing it back into the pool when owned by a
         * pool.
         */
        free(): void;
    }

    type RTSPAddressPoolClass = typeof RTSPAddressPool;
    abstract class RTSPAddressPoolPrivate {
        static $gtype: GObject.GType<RTSPAddressPoolPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type RTSPAuthClass = typeof RTSPAuth;
    abstract class RTSPAuthPrivate {
        static $gtype: GObject.GType<RTSPAuthPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type RTSPClientClass = typeof RTSPClient;
    abstract class RTSPClientPrivate {
        static $gtype: GObject.GType<RTSPClientPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * Information passed around containing the context of a request.
     */
    class RTSPContext {
        static $gtype: GObject.GType<RTSPContext>;

        // Fields

        server: RTSPServer;
        client: RTSPClient;
        method: GstRtsp.RTSPMethod;
        auth: RTSPAuth;
        session: RTSPSession;
        sessmedia: RTSPSessionMedia;
        factory: RTSPMediaFactory;
        media: RTSPMedia;
        stream: RTSPStream;
        trans: RTSPStreamTransport;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * Pops `ctx` off the context stack (verifying that `ctx`
         * is on the top of the stack).
         */
        pop_current(): void;
        /**
         * Pushes `ctx` onto the context stack. The current
         * context can then be received using gst_rtsp_context_get_current().
         */
        push_current(): void;
        /**
         * Set the token for `ctx`.
         * @param token a #GstRTSPToken
         */
        set_token(token: RTSPToken): void;
    }

    type RTSPMediaClass = typeof RTSPMedia;
    type RTSPMediaFactoryClass = typeof RTSPMediaFactory;
    abstract class RTSPMediaFactoryPrivate {
        static $gtype: GObject.GType<RTSPMediaFactoryPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type RTSPMediaFactoryURIClass = typeof RTSPMediaFactoryURI;
    abstract class RTSPMediaFactoryURIPrivate {
        static $gtype: GObject.GType<RTSPMediaFactoryURIPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class RTSPMediaPrivate {
        static $gtype: GObject.GType<RTSPMediaPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type RTSPMountPointsClass = typeof RTSPMountPoints;
    abstract class RTSPMountPointsPrivate {
        static $gtype: GObject.GType<RTSPMountPointsPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type RTSPOnvifClientClass = typeof RTSPOnvifClient;
    type RTSPOnvifMediaClass = typeof RTSPOnvifMedia;
    type RTSPOnvifMediaFactoryClass = typeof RTSPOnvifMediaFactory;
    abstract class RTSPOnvifMediaFactoryPrivate {
        static $gtype: GObject.GType<RTSPOnvifMediaFactoryPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class RTSPOnvifMediaPrivate {
        static $gtype: GObject.GType<RTSPOnvifMediaPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type RTSPOnvifServerClass = typeof RTSPOnvifServer;
    /**
     * The opaque permissions structure. It is used to define the permissions
     * of objects in different roles.
     */
    class RTSPPermissions {
        static $gtype: GObject.GType<RTSPPermissions>;

        // Constructors

        constructor(
            properties?: Partial<{
                mini_object: Gst.MiniObject;
            }>,
        );
        _init(...args: any[]): void;

        static ['new'](): RTSPPermissions;

        // Methods

        /**
         * Add a new `permission` for `role` to `permissions` with the access in `allowed`.
         * @param role a role
         * @param permission the permission
         * @param allowed whether the role has this permission or not
         */
        add_permission_for_role(role: string, permission: string, allowed: boolean): void;
        /**
         * Add a new `role` to `permissions` without any permissions. You can add
         * permissions for the role with gst_rtsp_permissions_add_permission_for_role().
         * @param role a role
         */
        add_role(role: string): void;
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
        add_role_from_structure(structure: Gst.Structure): void;
        /**
         * Get all permissions for `role` in `permissions`.
         * @param role a role
         * @returns the structure with permissions for @role. It remains valid for as long as @permissions is valid.
         */
        get_role(role: string): Gst.Structure;
        /**
         * Check if `role` in `permissions` is given permission for `permission`.
         * @param role a role
         * @param permission a permission
         * @returns %TRUE if @role is allowed @permission.
         */
        is_allowed(role: string, permission: string): boolean;
        /**
         * Remove all permissions for `role` in `permissions`.
         * @param role a role
         */
        remove_role(role: string): void;
    }

    type RTSPServerClass = typeof RTSPServer;
    abstract class RTSPServerPrivate {
        static $gtype: GObject.GType<RTSPServerPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type RTSPSessionClass = typeof RTSPSession;
    type RTSPSessionMediaClass = typeof RTSPSessionMedia;
    abstract class RTSPSessionMediaPrivate {
        static $gtype: GObject.GType<RTSPSessionMediaPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type RTSPSessionPoolClass = typeof RTSPSessionPool;
    abstract class RTSPSessionPoolPrivate {
        static $gtype: GObject.GType<RTSPSessionPoolPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class RTSPSessionPrivate {
        static $gtype: GObject.GType<RTSPSessionPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type RTSPStreamClass = typeof RTSPStream;
    abstract class RTSPStreamPrivate {
        static $gtype: GObject.GType<RTSPStreamPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type RTSPStreamTransportClass = typeof RTSPStreamTransport;
    abstract class RTSPStreamTransportPrivate {
        static $gtype: GObject.GType<RTSPStreamTransportPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * Structure holding info about a mainloop running in a thread
     */
    class RTSPThread {
        static $gtype: GObject.GType<RTSPThread>;

        // Fields

        type: RTSPThreadType;

        // Constructors

        constructor(type: RTSPThreadType);
        _init(...args: any[]): void;

        static ['new'](type: RTSPThreadType): RTSPThread;

        // Methods

        /**
         * Reuse the mainloop of `thread`
         * @returns %TRUE if the mainloop could be reused
         */
        reuse(): boolean;
        /**
         * Stop and unref `thread`. When no threads are using the mainloop, the thread
         * will be stopped and the final ref to `thread` will be released.
         */
        stop(): void;
    }

    type RTSPThreadPoolClass = typeof RTSPThreadPool;
    abstract class RTSPThreadPoolPrivate {
        static $gtype: GObject.GType<RTSPThreadPoolPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * An opaque object used for checking authorisations.
     * It is generated after successful authentication.
     */
    class RTSPToken {
        static $gtype: GObject.GType<RTSPToken>;

        // Constructors

        constructor(
            properties?: Partial<{
                mini_object: Gst.MiniObject;
            }>,
        );
        _init(...args: any[]): void;

        static ['new'](): RTSPToken;

        // Methods

        /**
         * Get the string value of `field` in `token`.
         * @param field a field name
         * @returns the string value of @field in @token or %NULL when @field is not defined in @token. The string becomes invalid when you free @token.
         */
        get_string(field: string): string | null;
        /**
         * Access the structure of the token.
         * @returns The structure of the token. The structure is still owned by the token, which means that you should not free it and that the pointer becomes invalid when you free the token. MT safe.
         */
        get_structure(): Gst.Structure;
        /**
         * Check if `token` has a boolean `field` and if it is set to %TRUE.
         * @param field a field name
         * @returns %TRUE if @token has a boolean field named @field set to %TRUE.
         */
        is_allowed(field: string): boolean;
        /**
         * Sets a boolean value on `token`.
         * @param field field to set
         * @param bool_value boolean value to set
         */
        set_bool(field: string, bool_value: boolean): void;
        /**
         * Sets a string value on `token`.
         * @param field field to set
         * @param string_value string value to set
         */
        set_string(field: string, string_value: string): void;
        /**
         * Get a writable version of the structure.
         * @returns The structure of the token. The structure is still owned by the token, which means that you should not free it and that the pointer becomes invalid when you free the token. This function ensures that @token is writable, and if so, will never return %NULL. MT safe.
         */
        writable_structure(): Gst.Structure;
    }

    class SDPInfo {
        static $gtype: GObject.GType<SDPInfo>;

        // Fields

        is_ipv6: boolean;
        server_ip: string;

        // Constructors

        constructor(
            properties?: Partial<{
                is_ipv6: boolean;
                server_ip: string;
            }>,
        );
        _init(...args: any[]): void;
    }

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

export default GstRtspServer;

// END
