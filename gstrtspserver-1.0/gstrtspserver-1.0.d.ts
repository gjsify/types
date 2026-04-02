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
     * @gir-type Enum
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
     * Possible return values for `gst_rtsp_session_pool_filter()`.
     * @gir-type Enum
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
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace RTSPPublishClockMode {
        export const $gtype: GObject.GType<RTSPPublishClockMode>;
    }

    /**
     * Whether the clock and possibly RTP/clock offset should be published according to RFC7273.
     * @gir-type Enum
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
     * @gir-type Enum
     */
    export namespace RTSPSuspendMode {
        export const $gtype: GObject.GType<RTSPSuspendMode>;
    }

    /**
     * The suspend mode of the media pipeline. A media pipeline is suspended right
     * after creating the SDP and when the client performs a PAUSED request.
     * @gir-type Enum
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
     * @gir-type Enum
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
     * Used with `gst_rtsp_address_pool_add_range()` to bind to all
     * IPv4 addresses
     */
    const RTSP_ADDRESS_POOL_ANY_IPV4: string;
    /**
     * Used with `gst_rtsp_address_pool_add_range()` to bind to all
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
     * `false`.
     */
    const RTSP_AUTH_CHECK_TRANSPORT_CLIENT_SETTINGS: string;
    /**
     * Check the URL and methods
     */
    const RTSP_AUTH_CHECK_URL: string;
    const RTSP_ONVIF_BACKCHANNEL_REQUIREMENT: string;
    const RTSP_ONVIF_REPLAY_REQUIREMENT: string;
    /**
     * G_TYPE_BOOLEAN, `true` if the media can be accessed, `false` will
     * return a 404 Not Found error when trying to access the media.
     */
    const RTSP_PERM_MEDIA_FACTORY_ACCESS: string;
    /**
     * G_TYPE_BOOLEAN, `true` if the media can be constructed, `false` will
     * return a 404 Not Found error when trying to access the media.
     */
    const RTSP_PERM_MEDIA_FACTORY_CONSTRUCT: string;
    /**
     * G_TYPE_STRING, the role to use when dealing with media factories
     *
     * The default {@link GstRtspServer.RTSPAuth} object uses this string in the token to find the
     * role of the media factory. It will then retrieve the {@link GstRtspServer.RTSPPermissions} of
     * the media factory and retrieve the role with the same name.
     */
    const RTSP_TOKEN_MEDIA_FACTORY_ROLE: string;
    /**
     * G_TYPE_BOOLEAN, `true` if the client can specify TTL, destination and
     *     port pair in multicast.
     */
    const RTSP_TOKEN_TRANSPORT_CLIENT_SETTINGS: string;
    function rtsp_context_get_type(): GObject.GType;
    /**
     * Get parameters (not implemented yet)
     * @param client a {@link GstRtspServer.RTSPClient}
     * @param ctx a {@link GstRtspServer.RTSPContext}
     * @returns a {@link GstRtsp.RTSPResult}
     */
    function rtsp_params_get(client: RTSPClient, ctx: RTSPContext): GstRtsp.RTSPResult;
    /**
     * Set parameters (not implemented yet)
     * @param client a {@link GstRtspServer.RTSPClient}
     * @param ctx a {@link GstRtspServer.RTSPContext}
     * @returns a {@link GstRtsp.RTSPResult}
     */
    function rtsp_params_set(client: RTSPClient, ctx: RTSPContext): GstRtsp.RTSPResult;
    /**
     * Add `media` specific info to `sdp`. `info` is used to configure the connection
     * information in the SDP.
     * @param sdp a {@link GstSdp.SDPMessage}
     * @param info a {@link GstRtspServer.SDPInfo}
     * @param media a {@link GstRtspServer.RTSPMedia}
     * @returns TRUE on success.
     */
    function rtsp_sdp_from_media(sdp: GstSdp.SDPMessage, info: SDPInfo, media: RTSPMedia): boolean;
    /**
     * Add info from `stream` to `sdp`.
     * @param sdp a {@link GstSdp.SDPMessage}
     * @param info a {@link GstRtspServer.SDPInfo}
     * @param stream a {@link GstRtspServer.RTSPStream}
     * @returns TRUE on success.
     */
    function rtsp_sdp_from_stream(sdp: GstSdp.SDPMessage, info: SDPInfo, stream: RTSPStream): boolean;
    /**
     * Creates a {@link GstSdp.SDPMedia} from the parameters and stores it in `sdp`.
     * @param sdp a {@link GstRtsp.RTSPMessage}
     * @param info a {@link GstRtspServer.SDPInfo}
     * @param stream a {@link GstRtspServer.RTSPStream}
     * @param caps a {@link Gst.Caps}
     * @param profile a {@link GstRtsp.RTSPProfile}
     * @returns `true` on success
     * @since 1.14
     */
    function rtsp_sdp_make_media(
        sdp: GstSdp.SDPMessage,
        info: SDPInfo,
        stream: RTSPStream,
        caps: Gst.Caps,
        profile: GstRtsp.RTSPProfile | null,
    ): boolean;
    /**
     * @gir-type Callback
     */
    interface RTSPClientSendFunc {
        (client: RTSPClient, message: GstRtsp.RTSPMessage, close: boolean): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface RTSPClientSendMessagesFunc {
        (client: RTSPClient, messages: GstRtsp.RTSPMessage, n_messages: number, close: boolean): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface RTSPClientSessionFilterFunc {
        (client: RTSPClient, sess: RTSPSession): RTSPFilterResult;
    }
    /**
     * @gir-type Callback
     */
    interface RTSPKeepAliveFunc {
        (user_data?: any | null): void;
    }
    /**
     * @gir-type Callback
     */
    interface RTSPMessageSentFunc {
        (user_data?: any | null): void;
    }
    /**
     * @gir-type Callback
     */
    interface RTSPMessageSentFuncFull {
        (trans: RTSPStreamTransport): void;
    }
    /**
     * @gir-type Callback
     */
    interface RTSPSendFunc {
        (buffer: Gst.Buffer, channel: number): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface RTSPSendListFunc {
        (buffer_list: Gst.BufferList, channel: number): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface RTSPServerClientFilterFunc {
        (server: RTSPServer, client: RTSPClient): RTSPFilterResult;
    }
    /**
     * @gir-type Callback
     */
    interface RTSPSessionFilterFunc {
        (sess: RTSPSession, media: RTSPSessionMedia): RTSPFilterResult;
    }
    /**
     * @gir-type Callback
     */
    interface RTSPSessionPoolFilterFunc {
        (pool: RTSPSessionPool, session: RTSPSession): RTSPFilterResult;
    }
    /**
     * @gir-type Callback
     */
    interface RTSPSessionPoolFunc {
        (pool: RTSPSessionPool): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface RTSPStreamTransportFilterFunc {
        (stream: RTSPStream, trans: RTSPStreamTransport): RTSPFilterResult;
    }
    /**
     * Flags used to control allocation of addresses
     * @gir-type Flags
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
     * @gir-type Flags
     */
    export namespace RTSPTransportMode {
        export const $gtype: GObject.GType<RTSPTransportMode>;
    }

    /**
     * The supported modes of the media.
     * @gir-type Flags
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

    namespace RTSPAddressPool {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * An address pool, all member are private
     * @gir-type Class
     */
    class RTSPAddressPool extends GObject.Object {
        static $gtype: GObject.GType<RTSPAddressPool>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RTSPAddressPool.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RTSPAddressPool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RTSPAddressPool;

        // Signals

        /** @signal */
        connect<K extends keyof RTSPAddressPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RTSPAddressPool.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RTSPAddressPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RTSPAddressPool.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RTSPAddressPool.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RTSPAddressPool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Take an address and ports from `pool`. `flags` can be used to control the
         * allocation. `n_ports` consecutive ports will be allocated of which the first
         * one can be found in `port`.
         * @param flags flags
         * @param n_ports the amount of ports
         * @returns a {@link GstRtspServer.RTSPAddress} that should be freed with gst_rtsp_address_free after use or `null` when no address could be acquired.
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
         * @returns `true` if the addresses could be added.
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
         * @returns `true` if the pool includes any unicast addresses, `false` otherwise
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
         * @returns #GST_RTSP_ADDRESS_POOL_OK if an address was reserved. The address is returned in `address` and should be freed with gst_rtsp_address_free after use.
         */
        reserve_address(
            ip_address: string,
            port: number,
            n_ports: number,
            ttl: number,
        ): [RTSPAddressPoolResult, RTSPAddress];
    }

    namespace RTSPAuth {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted during the TLS handshake after the client certificate has
             * been received. See also `gst_rtsp_auth_set_tls_authentication_mode()`.
             * @signal
             * @since 1.6
             * @run-last
             */
            'accept-certificate': (
                arg0: Gio.TlsConnection,
                arg1: Gio.TlsCertificate,
                arg2: Gio.TlsCertificateFlags,
            ) => boolean | void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * The authentication structure.
     * @gir-type Class
     */
    class RTSPAuth extends GObject.Object {
        static $gtype: GObject.GType<RTSPAuth>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RTSPAuth.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RTSPAuth.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RTSPAuth;

        // Signals

        /** @signal */
        connect<K extends keyof RTSPAuth.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RTSPAuth.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RTSPAuth.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RTSPAuth.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RTSPAuth.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RTSPAuth.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

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

        /**
         * @param connection
         * @param peer_cert
         * @param errors
         * @virtual
         */
        vfunc_accept_certificate(
            connection: Gio.TlsConnection,
            peer_cert: Gio.TlsCertificate,
            errors: Gio.TlsCertificateFlags,
        ): boolean;
        /**
         * @param ctx
         * @virtual
         */
        vfunc_authenticate(ctx: RTSPContext): boolean;
        /**
         * @param ctx
         * @param check
         * @virtual
         */
        vfunc_check(ctx: RTSPContext, check: string): boolean;
        /**
         * @param ctx
         * @virtual
         */
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
         * @returns the {@link GstRtspServer.RTSPToken} of `auth`. `gst_rtsp_token_unref()` after usage.
         */
        get_default_token(): RTSPToken | null;
        /**
         * @returns the `realm` of `auth`
         */
        get_realm(): string | null;
        /**
         * Gets the supported authentication methods of `auth`.
         * @returns The supported authentication methods
         */
        get_supported_methods(): GstRtsp.RTSPAuthMethod;
        /**
         * Get the {@link Gio.TlsAuthenticationMode}.
         * @returns the {@link Gio.TlsAuthenticationMode}.
         */
        get_tls_authentication_mode(): Gio.TlsAuthenticationMode;
        /**
         * Get the {@link Gio.TlsCertificate} used for negotiating TLS `auth`.
         * @returns the {@link Gio.TlsCertificate} of `auth`. `g_object_unref()` after usage.
         */
        get_tls_certificate(): Gio.TlsCertificate | null;
        /**
         * Get the {@link Gio.TlsDatabase} used for verifying client certificate.
         * @returns the {@link Gio.TlsDatabase} of `auth`. `g_object_unref()` after usage.
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
         * @returns `true` if the file was successfully parsed, `false` otherwise.
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
         * Set the default {@link GstRtspServer.RTSPToken} to `token` in `auth`. The default token will
         * be used for unauthenticated users.
         * @param token a {@link GstRtspServer.RTSPToken}
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
         * The {@link Gio.TlsAuthenticationMode} to set on the underlying GTlsServerConnection.
         * When set to another value than {@link Gio.TlsAuthenticationMode.NONE},
         * {@link GstRtspServer.RTSPAuth.SignalSignatures.accept_certificate | GstRtspServer.RTSPAuth::accept-certificate} signal will be emitted and must be handled.
         * @param mode a {@link Gio.TlsAuthenticationMode}
         */
        set_tls_authentication_mode(mode: Gio.TlsAuthenticationMode | null): void;
        /**
         * Set the TLS certificate for the auth. Client connections will only
         * be accepted when TLS is negotiated.
         * @param cert a {@link Gio.TlsCertificate}
         */
        set_tls_certificate(cert?: Gio.TlsCertificate | null): void;
        /**
         * Sets the certificate database that is used to verify peer certificates.
         * If set to `null` (the default), then peer certificate validation will always
         * set the {@link Gio.TlsCertificateFlags.UNKNOWN_CA} error.
         * @param database a {@link Gio.TlsDatabase}
         */
        set_tls_database(database?: Gio.TlsDatabase | null): void;
    }

    namespace RTSPClient {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            'announce-request': (arg0: RTSPContext) => void;
            /**
             * @signal
             * @since 1.6
             * @run-last
             */
            'check-requirements': (arg0: RTSPContext, arg1: string[]) => string;
            /**
             * @signal
             * @run-last
             */
            closed: () => void;
            /**
             * @signal
             * @run-last
             */
            'describe-request': (arg0: RTSPContext) => void;
            /**
             * @signal
             * @run-last
             */
            'get-parameter-request': (arg0: RTSPContext) => void;
            /**
             * @signal
             * @run-last
             */
            'handle-response': (arg0: RTSPContext) => void;
            /**
             * @signal
             * @run-last
             */
            'new-session': (arg0: RTSPSession) => void;
            /**
             * @signal
             * @run-last
             */
            'options-request': (arg0: RTSPContext) => void;
            /**
             * @signal
             * @run-last
             */
            'pause-request': (arg0: RTSPContext) => void;
            /**
             * @signal
             * @run-last
             */
            'play-request': (arg0: RTSPContext) => void;
            /**
             * @signal
             * @since 1.12
             * @run-last
             */
            'pre-announce-request': (arg0: RTSPContext) => GstRtsp.RTSPStatusCode;
            /**
             * @signal
             * @since 1.12
             * @run-last
             */
            'pre-describe-request': (arg0: RTSPContext) => GstRtsp.RTSPStatusCode;
            /**
             * @signal
             * @since 1.12
             * @run-last
             */
            'pre-get-parameter-request': (arg0: RTSPContext) => GstRtsp.RTSPStatusCode;
            /**
             * @signal
             * @since 1.12
             * @run-last
             */
            'pre-options-request': (arg0: RTSPContext) => GstRtsp.RTSPStatusCode;
            /**
             * @signal
             * @since 1.12
             * @run-last
             */
            'pre-pause-request': (arg0: RTSPContext) => GstRtsp.RTSPStatusCode;
            /**
             * @signal
             * @since 1.12
             * @run-last
             */
            'pre-play-request': (arg0: RTSPContext) => GstRtsp.RTSPStatusCode;
            /**
             * @signal
             * @since 1.12
             * @run-last
             */
            'pre-record-request': (arg0: RTSPContext) => GstRtsp.RTSPStatusCode;
            /**
             * @signal
             * @since 1.12
             * @run-last
             */
            'pre-set-parameter-request': (arg0: RTSPContext) => GstRtsp.RTSPStatusCode;
            /**
             * @signal
             * @since 1.12
             * @run-last
             */
            'pre-setup-request': (arg0: RTSPContext) => GstRtsp.RTSPStatusCode;
            /**
             * @signal
             * @since 1.12
             * @run-last
             */
            'pre-teardown-request': (arg0: RTSPContext) => GstRtsp.RTSPStatusCode;
            /**
             * @signal
             * @run-last
             */
            'record-request': (arg0: RTSPContext) => void;
            /**
             * @signal
             * @run-last
             */
            'send-message': (arg0: RTSPSession, arg1: GstRtsp.RTSPMessage) => void;
            /**
             * @signal
             * @run-last
             */
            'set-parameter-request': (arg0: RTSPContext) => void;
            /**
             * @signal
             * @run-last
             */
            'setup-request': (arg0: RTSPContext) => void;
            /**
             * @signal
             * @run-last
             */
            'teardown-request': (arg0: RTSPContext) => void;
            'notify::drop-backlog': (pspec: GObject.ParamSpec) => void;
            'notify::mount-points': (pspec: GObject.ParamSpec) => void;
            'notify::post-session-timeout': (pspec: GObject.ParamSpec) => void;
            'notify::session-pool': (pspec: GObject.ParamSpec) => void;
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
     * @gir-type Class
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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RTSPClient.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RTSPClient.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RTSPClient;

        // Signals

        /** @signal */
        connect<K extends keyof RTSPClient.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RTSPClient.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RTSPClient.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RTSPClient.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RTSPClient.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RTSPClient.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Called before sending error response to give the application the
         * possibility to adjust the error code.
         * @param ctx a {@link GstRtspServer.RTSPContext}
         * @param code a {@link GstRtsp.RTSPStatusCode}
         * @virtual
         */
        vfunc_adjust_error_code(ctx: RTSPContext, code: GstRtsp.RTSPStatusCode): GstRtsp.RTSPStatusCode;
        /**
         * @param context
         * @param range
         * @param flags
         * @param rate
         * @param trickmode_interval
         * @param enable_rate_control
         * @virtual
         */
        vfunc_adjust_play_mode(
            context: RTSPContext,
            range: GstRtsp.RTSPTimeRange,
            flags: Gst.SeekFlags,
            rate: number,
            trickmode_interval: Gst.ClockTime,
            enable_rate_control: boolean,
        ): GstRtsp.RTSPStatusCode;
        /**
         * @param context
         * @virtual
         */
        vfunc_adjust_play_response(context: RTSPContext): GstRtsp.RTSPStatusCode;
        /**
         * @param ctx
         * @virtual
         */
        vfunc_announce_request(ctx: RTSPContext): void;
        /**
         * @param ctx
         * @param arr
         * @virtual
         */
        vfunc_check_requirements(ctx: RTSPContext, arr: string): string;
        /**
         * @virtual
         */
        vfunc_closed(): void;
        /**
         * @param media
         * @param stream
         * @param ctx
         * @virtual
         */
        vfunc_configure_client_media(media: RTSPMedia, stream: RTSPStream, ctx: RTSPContext): boolean;
        /**
         * @param ctx
         * @param ct
         * @virtual
         */
        vfunc_configure_client_transport(ctx: RTSPContext, ct: GstRtsp.RTSPTransport): boolean;
        /**
         * @param media
         * @virtual
         */
        vfunc_create_sdp(media: RTSPMedia): GstSdp.SDPMessage;
        /**
         * @param ctx
         * @virtual
         */
        vfunc_describe_request(ctx: RTSPContext): void;
        /**
         * @param ctx
         * @virtual
         */
        vfunc_get_parameter_request(ctx: RTSPContext): void;
        /**
         * @param ctx
         * @virtual
         */
        vfunc_handle_response(ctx: RTSPContext): void;
        /**
         * @param ctx
         * @param media
         * @param sdp
         * @virtual
         */
        vfunc_handle_sdp(ctx: RTSPContext, media: RTSPMedia, sdp: GstSdp.SDPMessage): boolean;
        /**
         * @param uri
         * @virtual
         */
        vfunc_make_path_from_uri(uri: GstRtsp.RTSPUrl): string;
        /**
         * @param session
         * @virtual
         */
        vfunc_new_session(session: RTSPSession): void;
        /**
         * @param ctx
         * @virtual
         */
        vfunc_options_request(ctx: RTSPContext): void;
        /**
         * @param ctx
         * @virtual
         */
        vfunc_params_get(ctx: RTSPContext): GstRtsp.RTSPResult;
        /**
         * @param ctx
         * @virtual
         */
        vfunc_params_set(ctx: RTSPContext): GstRtsp.RTSPResult;
        /**
         * @param ctx
         * @virtual
         */
        vfunc_pause_request(ctx: RTSPContext): void;
        /**
         * @param ctx
         * @virtual
         */
        vfunc_play_request(ctx: RTSPContext): void;
        /**
         * @param ctx
         * @virtual
         */
        vfunc_pre_announce_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode;
        /**
         * @param ctx
         * @virtual
         */
        vfunc_pre_describe_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode;
        /**
         * @param ctx
         * @virtual
         */
        vfunc_pre_get_parameter_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode;
        /**
         * @param ctx
         * @virtual
         */
        vfunc_pre_options_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode;
        /**
         * @param ctx
         * @virtual
         */
        vfunc_pre_pause_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode;
        /**
         * @param ctx
         * @virtual
         */
        vfunc_pre_play_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode;
        /**
         * @param ctx
         * @virtual
         */
        vfunc_pre_record_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode;
        /**
         * @param ctx
         * @virtual
         */
        vfunc_pre_set_parameter_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode;
        /**
         * @param ctx
         * @virtual
         */
        vfunc_pre_setup_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode;
        /**
         * @param ctx
         * @virtual
         */
        vfunc_pre_teardown_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode;
        /**
         * @param ctx
         * @virtual
         */
        vfunc_record_request(ctx: RTSPContext): void;
        /**
         * @param ctx
         * @param response
         * @virtual
         */
        vfunc_send_message(ctx: RTSPContext, response: GstRtsp.RTSPMessage): void;
        /**
         * @param ctx
         * @virtual
         */
        vfunc_set_parameter_request(ctx: RTSPContext): void;
        /**
         * @param ctx
         * @virtual
         */
        vfunc_setup_request(ctx: RTSPContext): void;
        /**
         * @param ctx
         * @virtual
         */
        vfunc_teardown_request(ctx: RTSPContext): void;
        /**
         * @param request
         * @param response
         * @virtual
         */
        vfunc_tunnel_http_response(request: GstRtsp.RTSPMessage, response: GstRtsp.RTSPMessage): void;

        // Methods

        /**
         * Attaches `client` to `context`. When the mainloop for `context` is run, the
         * client will be dispatched. When `context` is `null`, the default context will be
         * used).
         *
         * This function should be called when the client properties and urls are fully
         * configured and the client is ready to start.
         * @param context a {@link GLib.MainContext}
         * @returns the ID (greater than 0) for the source within the GMainContext.
         */
        attach(context?: GLib.MainContext | null): number;
        /**
         * Close the connection of `client` and remove all media it was managing.
         */
        close(): void;
        /**
         * Get the {@link GstRtspServer.RTSPAuth} used as the authentication manager of `client`.
         * @returns the {@link GstRtspServer.RTSPAuth} of `client`. `g_object_unref()` after usage.
         */
        get_auth(): RTSPAuth | null;
        /**
         * Get the {@link GstRtsp.RTSPConnection} of `client`.
         * @returns the {@link GstRtsp.RTSPConnection} of `client`. The connection object returned remains valid until the client is freed.
         */
        get_connection(): GstRtsp.RTSPConnection | null;
        /**
         * Get the Content-Length limit of `client`.
         * @returns the Content-Length limit.
         */
        get_content_length_limit(): number;
        /**
         * Get the {@link GstRtspServer.RTSPMountPoints} object that `client` uses to manage its sessions.
         * @returns a {@link GstRtspServer.RTSPMountPoints}, unref after usage.
         */
        get_mount_points(): RTSPMountPoints | null;
        /**
         * Get the {@link GstRtspServer.RTSPSessionPool} object that `client` uses to manage its sessions.
         * @returns a {@link GstRtspServer.RTSPSessionPool}, unref after usage.
         */
        get_session_pool(): RTSPSessionPool | null;
        /**
         * This is useful when providing a send function through
         * `gst_rtsp_client_set_send_func()` when doing RTSP over TCP:
         * the send function must call gst_rtsp_stream_transport_message_sent ()
         * on the appropriate transport when data has been received for streaming
         * to continue.
         * @param channel
         * @returns the {@link GstRtspServer.RTSPStreamTransport} associated with `channel`.
         */
        get_stream_transport(channel: number): RTSPStreamTransport | null;
        /**
         * Get the {@link GstRtspServer.RTSPThreadPool} used as the thread pool of `client`.
         * @returns the {@link GstRtspServer.RTSPThreadPool} of `client`. `g_object_unref()` after usage.
         */
        get_thread_pool(): RTSPThreadPool | null;
        /**
         * Let the client handle `message`.
         * @param message an {@link GstRtsp.RTSPMessage}
         * @returns a {@link GstRtsp.RTSPResult}.
         */
        handle_message(message: GstRtsp.RTSPMessage): GstRtsp.RTSPResult;
        /**
         * Send a message message to the remote end. `message` must be a
         * #GST_RTSP_MESSAGE_REQUEST or a #GST_RTSP_MESSAGE_RESPONSE.
         * @param session a {@link GstRtspServer.RTSPSession} to send   the message to or `null`
         * @param message The {@link GstRtsp.RTSPMessage} to send
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
         * will also be added with an additional ref to the result {@link GLib.List} of this
         * function..
         *
         * When `func` is `null`, #GST_RTSP_FILTER_REF will be assumed for each session.
         * @param func a callback
         * @returns a {@link GLib.List} with all sessions for which `func` returned #GST_RTSP_FILTER_REF. After usage, each element in the {@link GLib.List} should be unreffed before the list is freed.
         */
        session_filter(func?: RTSPClientSessionFilterFunc | null): RTSPSession[];
        /**
         * configure `auth` to be used as the authentication manager of `client`.
         * @param auth a {@link GstRtspServer.RTSPAuth}
         */
        set_auth(auth?: RTSPAuth | null): void;
        /**
         * Set the {@link GstRtsp.RTSPConnection} of `client`. This function takes ownership of
         * `conn`.
         * @param conn a {@link GstRtsp.RTSPConnection}
         * @returns `true` on success.
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
         * @param mounts a {@link GstRtspServer.RTSPMountPoints}
         */
        set_mount_points(mounts?: RTSPMountPoints | null): void;
        /**
         * Set `func` as the callback that will be called when a new message needs to be
         * sent to the client. `user_data` is passed to `func` and `notify` is called when
         * `user_data` is no longer in use.
         *
         * By default, the client will send the messages on the {@link GstRtsp.RTSPConnection} that
         * was configured with `gst_rtsp_client_attach()` was called.
         *
         * It is only allowed to set either a `send_func` or a `send_messages_func`
         * but not both at the same time.
         * @param func a {@link GstRtspServer.RTSPClientSendFunc}
         * @param notify called when `user_data` is no longer in use
         */
        set_send_func(func: RTSPClientSendFunc, notify?: GLib.DestroyNotify | null): void;
        /**
         * Set `func` as the callback that will be called when new messages needs to be
         * sent to the client. `user_data` is passed to `func` and `notify` is called when
         * `user_data` is no longer in use.
         *
         * By default, the client will send the messages on the {@link GstRtsp.RTSPConnection} that
         * was configured with `gst_rtsp_client_attach()` was called.
         *
         * It is only allowed to set either a `send_func` or a `send_messages_func`
         * but not both at the same time.
         * @param func a {@link GstRtspServer.RTSPClientSendMessagesFunc}
         * @param notify called when `user_data` is no longer in use
         */
        set_send_messages_func(func: RTSPClientSendMessagesFunc, notify?: GLib.DestroyNotify | null): void;
        /**
         * Set `pool` as the sessionpool for `client` which it will use to find
         * or allocate sessions. the sessionpool is usually inherited from the server
         * that created the client but can be overridden later.
         * @param pool a {@link GstRtspServer.RTSPSessionPool}
         */
        set_session_pool(pool?: RTSPSessionPool | null): void;
        /**
         * configure `pool` to be used as the thread pool of `client`.
         * @param pool a {@link GstRtspServer.RTSPThreadPool}
         */
        set_thread_pool(pool?: RTSPThreadPool | null): void;
    }

    namespace RTSPMedia {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Will be emitted when a message appears on the pipeline bus.
             * @signal
             * @since 1.22
             * @detailed
             * @run-last
             */
            'handle-message': (arg0: Gst.Message) => boolean | void;
            /**
             * @signal
             * @run-last
             */
            'new-state': (arg0: number) => void;
            /**
             * @signal
             * @run-last
             */
            'new-stream': (arg0: RTSPStream) => void;
            /**
             * @signal
             * @run-last
             */
            prepared: () => void;
            /**
             * @signal
             * @run-last
             */
            'removed-stream': (arg0: RTSPStream) => void;
            /**
             * @signal
             * @run-last
             */
            'target-state': (arg0: number) => void;
            /**
             * @signal
             * @run-last
             */
            unprepared: () => void;
            'notify::bind-mcast-address': (pspec: GObject.ParamSpec) => void;
            'notify::buffer-size': (pspec: GObject.ParamSpec) => void;
            'notify::clock': (pspec: GObject.ParamSpec) => void;
            'notify::dscp-qos': (pspec: GObject.ParamSpec) => void;
            'notify::element': (pspec: GObject.ParamSpec) => void;
            'notify::eos-shutdown': (pspec: GObject.ParamSpec) => void;
            'notify::latency': (pspec: GObject.ParamSpec) => void;
            'notify::max-mcast-ttl': (pspec: GObject.ParamSpec) => void;
            'notify::profiles': (pspec: GObject.ParamSpec) => void;
            'notify::protocols': (pspec: GObject.ParamSpec) => void;
            'notify::reusable': (pspec: GObject.ParamSpec) => void;
            'notify::shared': (pspec: GObject.ParamSpec) => void;
            'notify::stop-on-disconnect': (pspec: GObject.ParamSpec) => void;
            'notify::suspend-mode': (pspec: GObject.ParamSpec) => void;
            'notify::time-provider': (pspec: GObject.ParamSpec) => void;
            'notify::transport-mode': (pspec: GObject.ParamSpec) => void;
            /**
             * Will be emitted when a message appears on the pipeline bus.
             * @signal
             * @since 1.22
             * @detailed
             * @run-last
             */
            'handle-message::bind-mcast-address': (arg0: Gst.Message) => boolean | void;
            /**
             * Will be emitted when a message appears on the pipeline bus.
             * @signal
             * @since 1.22
             * @detailed
             * @run-last
             */
            'handle-message::buffer-size': (arg0: Gst.Message) => boolean | void;
            /**
             * Will be emitted when a message appears on the pipeline bus.
             * @signal
             * @since 1.22
             * @detailed
             * @run-last
             */
            'handle-message::clock': (arg0: Gst.Message) => boolean | void;
            /**
             * Will be emitted when a message appears on the pipeline bus.
             * @signal
             * @since 1.22
             * @detailed
             * @run-last
             */
            'handle-message::dscp-qos': (arg0: Gst.Message) => boolean | void;
            /**
             * Will be emitted when a message appears on the pipeline bus.
             * @signal
             * @since 1.22
             * @detailed
             * @run-last
             */
            'handle-message::element': (arg0: Gst.Message) => boolean | void;
            /**
             * Will be emitted when a message appears on the pipeline bus.
             * @signal
             * @since 1.22
             * @detailed
             * @run-last
             */
            'handle-message::eos-shutdown': (arg0: Gst.Message) => boolean | void;
            /**
             * Will be emitted when a message appears on the pipeline bus.
             * @signal
             * @since 1.22
             * @detailed
             * @run-last
             */
            'handle-message::latency': (arg0: Gst.Message) => boolean | void;
            /**
             * Will be emitted when a message appears on the pipeline bus.
             * @signal
             * @since 1.22
             * @detailed
             * @run-last
             */
            'handle-message::max-mcast-ttl': (arg0: Gst.Message) => boolean | void;
            /**
             * Will be emitted when a message appears on the pipeline bus.
             * @signal
             * @since 1.22
             * @detailed
             * @run-last
             */
            'handle-message::profiles': (arg0: Gst.Message) => boolean | void;
            /**
             * Will be emitted when a message appears on the pipeline bus.
             * @signal
             * @since 1.22
             * @detailed
             * @run-last
             */
            'handle-message::protocols': (arg0: Gst.Message) => boolean | void;
            /**
             * Will be emitted when a message appears on the pipeline bus.
             * @signal
             * @since 1.22
             * @detailed
             * @run-last
             */
            'handle-message::reusable': (arg0: Gst.Message) => boolean | void;
            /**
             * Will be emitted when a message appears on the pipeline bus.
             * @signal
             * @since 1.22
             * @detailed
             * @run-last
             */
            'handle-message::shared': (arg0: Gst.Message) => boolean | void;
            /**
             * Will be emitted when a message appears on the pipeline bus.
             * @signal
             * @since 1.22
             * @detailed
             * @run-last
             */
            'handle-message::stop-on-disconnect': (arg0: Gst.Message) => boolean | void;
            /**
             * Will be emitted when a message appears on the pipeline bus.
             * @signal
             * @since 1.22
             * @detailed
             * @run-last
             */
            'handle-message::suspend-mode': (arg0: Gst.Message) => boolean | void;
            /**
             * Will be emitted when a message appears on the pipeline bus.
             * @signal
             * @since 1.22
             * @detailed
             * @run-last
             */
            'handle-message::time-provider': (arg0: Gst.Message) => boolean | void;
            /**
             * Will be emitted when a message appears on the pipeline bus.
             * @signal
             * @since 1.22
             * @detailed
             * @run-last
             */
            'handle-message::transport-mode': (arg0: Gst.Message) => boolean | void;
            [key: `handle-message::${string}`]: (arg0: Gst.Message) => boolean | void;
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
     * {@link GstRtspServer.RTSPStream} objects that can produce data.
     *
     * This object is usually created from a {@link GstRtspServer.RTSPMediaFactory}.
     * @gir-type Class
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
        /**
         * @construct-only
         */
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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RTSPMedia.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RTSPMedia.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](element: Gst.Element): RTSPMedia;

        // Signals

        /** @signal */
        connect<K extends keyof RTSPMedia.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RTSPMedia.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RTSPMedia.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RTSPMedia.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RTSPMedia.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RTSPMedia.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param range
         * @param unit
         * @virtual
         */
        vfunc_convert_range(range: GstRtsp.RTSPTimeRange, unit: GstRtsp.RTSPRangeUnit): boolean;
        /**
         * @param message
         * @virtual
         */
        vfunc_handle_message(message: Gst.Message): boolean;
        /**
         * Configure an SDP on `media` for receiving streams
         * @param sdp a {@link GstSdp.SDPMessage}
         * @virtual
         */
        vfunc_handle_sdp(sdp: GstSdp.SDPMessage): boolean;
        /**
         * @param state
         * @virtual
         */
        vfunc_new_state(state: Gst.State): void;
        /**
         * @param stream
         * @virtual
         */
        vfunc_new_stream(stream: RTSPStream): void;
        /**
         * Prepare `media` for streaming. This function will create the objects
         * to manage the streaming. A pipeline must have been set on `media` with
         * `gst_rtsp_media_take_pipeline()`.
         *
         * It will preroll the pipeline and collect vital information about the streams
         * such as the duration.
         * @param thread a {@link GstRtspServer.RTSPThread} to run the   bus handler or `null`
         * @virtual
         */
        vfunc_prepare(thread?: RTSPThread | null): boolean;
        /**
         * @virtual
         */
        vfunc_prepared(): void;
        /**
         * @param position
         * @virtual
         */
        vfunc_query_position(position: number): boolean;
        /**
         * @param stop
         * @virtual
         */
        vfunc_query_stop(stop: number): boolean;
        /**
         * @param stream
         * @virtual
         */
        vfunc_removed_stream(stream: RTSPStream): void;
        /**
         * @param rtpbin
         * @virtual
         */
        vfunc_setup_rtpbin(rtpbin: Gst.Element): boolean;
        /**
         * Add `media` specific info to `sdp`. `info` is used to configure the connection
         * information in the SDP.
         * @param sdp a {@link GstSdp.SDPMessage}
         * @param info a {@link GstRtspServer.SDPInfo}
         * @virtual
         */
        vfunc_setup_sdp(sdp: GstSdp.SDPMessage, info: SDPInfo): boolean;
        /**
         * Suspend `media`. The state of the pipeline managed by `media` is set to
         * GST_STATE_NULL but all streams are kept. `media` can be prepared again
         * with `gst_rtsp_media_unsuspend()`
         *
         * `media` must be prepared with `gst_rtsp_media_prepare()`;
         * @virtual
         */
        vfunc_suspend(): boolean;
        /**
         * @param state
         * @virtual
         */
        vfunc_target_state(state: Gst.State): void;
        /**
         * Unprepare `media`. After this call, the media should be prepared again before
         * it can be used again. If the media is set to be non-reusable, a new instance
         * must be created.
         * @virtual
         */
        vfunc_unprepare(): boolean;
        /**
         * @virtual
         */
        vfunc_unprepared(): void;
        /**
         * Unsuspend `media` if it was in a suspended state. This method does nothing
         * when the media was not in the suspended state.
         * @virtual
         */
        vfunc_unsuspend(): boolean;

        // Methods

        /**
         * Check if the pipeline for `media` can be shared between multiple clients.
         *
         * This checks if the media is shareable and whether it is either reusable or
         * was never unprepared before.
         *
         * The function must be called with `gst_rtsp_media_lock()`.
         * @returns `true` if the media can be shared between clients.
         */
        can_be_shared(): boolean;
        /**
         * Find all payloader elements, they should be named pay\%d in the
         * element of `media`, and create `GstRTSPStreams` for them.
         *
         * Collect all dynamic elements, named dynpay\%d, and add them to
         * the list of dynamic elements.
         *
         * Find all depayloader elements, they should be named depay\%d in the
         * element of `media`, and create `GstRTSPStreams` for them.
         */
        collect_streams(): void;
        /**
         * Add a receiver and sender parts to the pipeline based on the transport from
         * SETUP.
         * @param transports a list of {@link GstRtsp.RTSPTransport}
         * @returns `true` if the media pipeline has been sucessfully updated.
         */
        complete_pipeline(transports: GstRtsp.RTSPTransport[]): boolean;
        /**
         * Create a new stream in `media` that provides RTP data on `pad`.
         * `pad` should be a pad of an element inside `media`->element.
         * @param payloader a {@link Gst.Element}
         * @param pad a {@link Gst.Pad}
         * @returns a new {@link GstRtspServer.RTSPStream} that remains valid for as long as `media` exists.
         */
        create_stream(payloader: Gst.Element, pad: Gst.Pad): RTSPStream;
        /**
         * Find a stream in `media` with `control` as the control uri.
         * @param control the control of the stream
         * @returns the {@link GstRtspServer.RTSPStream} with control uri `control` or `null` when a stream with that control did not exist.
         */
        find_stream(control: string): RTSPStream | null;
        /**
         * Get the {@link GstRtspServer.RTSPAddressPool} used as the address pool of `media`.
         * @returns the {@link GstRtspServer.RTSPAddressPool} of `media`. `g_object_unref()` after usage.
         */
        get_address_pool(): RTSPAddressPool | null;
        /**
         * Get the base_time that is used by the pipeline in `media`.
         *
         * `media` must be prepared before this method returns a valid base_time.
         * @returns the base_time used by `media`.
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
         * @returns the {@link Gst.Clock} used by `media`. unref after usage.
         */
        get_clock(): Gst.Clock | null;
        /**
         * @returns Whether retransmission requests will be sent
         */
        get_do_retransmission(): boolean;
        /**
         * Get the configured DSCP QoS of attached media.
         * @returns the DSCP QoS value of attached streams or -1 if disabled.
         */
        get_dscp_qos(): number;
        /**
         * Get the element that was used when constructing `media`.
         * @returns a {@link Gst.Element}. Unref after usage.
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
         * @returns the multicast interface for `media`. `g_free()` after usage.
         */
        get_multicast_iface(): string | null;
        /**
         * Get the permissions object from `media`.
         * @returns a {@link GstRtspServer.RTSPPermissions} object, unref after usage.
         */
        get_permissions(): RTSPPermissions | null;
        /**
         * Get the allowed profiles of `media`.
         * @returns a {@link GstRtsp.RTSPProfile}
         */
        get_profiles(): GstRtsp.RTSPProfile;
        /**
         * Get the allowed protocols of `media`.
         * @returns a {@link GstRtsp.RTSPLowerTrans}
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
         * @returns The range as a string, `g_free()` after usage.
         */
        get_range_string(play: boolean, unit: GstRtsp.RTSPRangeUnit | null): string | null;
        /**
         * @returns whether `media` will follow the Rate-Control=no behaviour as specified in the ONVIF replay spec.
         */
        get_rate_control(): boolean;
        /**
         * Get the rate and applied_rate of the current segment.
         * @returns `false` if looking up the rate and applied rate failed. Otherwise `true` is returned and `rate` and `applied_rate` are set to the rate and applied_rate of the current segment.
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
         * @returns the status of `media`.
         */
        get_status(): RTSPMediaStatus;
        /**
         * Retrieve the stream with index `idx` from `media`.
         * @param idx the stream index
         * @returns the {@link GstRtspServer.RTSPStream} at index `idx` or `null` when a stream with that index did not exist.
         */
        get_stream(idx: number): RTSPStream | null;
        /**
         * Get how `media` will be suspended.
         * @returns {@link GstRtspServer.RTSPSuspendMode}.
         */
        get_suspend_mode(): RTSPSuspendMode;
        /**
         * Get the {@link GstNet.NetTimeProvider} for the clock used by `media`. The time provider
         * will listen on `address` and `port` for client time requests.
         * @param address an address or `null`
         * @param port a port or 0
         * @returns the {@link GstNet.NetTimeProvider} of `media`.
         */
        get_time_provider(address: string | null, port: number): GstNet.NetTimeProvider | null;
        /**
         * Check if the pipeline for `media` can be used for PLAY or RECORD methods.
         * @returns The transport mode.
         */
        get_transport_mode(): RTSPTransportMode;
        /**
         * Configure an SDP on `media` for receiving streams
         * @param sdp a {@link GstSdp.SDPMessage}
         * @returns TRUE on success.
         */
        handle_sdp(sdp: GstSdp.SDPMessage): boolean;
        /**
         * See `gst_rtsp_stream_is_complete()`, `gst_rtsp_stream_is_sender()`.
         * @returns whether `media` has at least one complete sender stream.
         */
        has_completed_sender(): boolean;
        /**
         * Check if multicast sockets are configured to be bound to multicast addresses.
         * @returns `true` if multicast sockets are configured to be bound to multicast addresses.
         */
        is_bind_mcast_address(): boolean;
        /**
         * Check if the pipeline for `media` will send an EOS down the pipeline before
         * unpreparing.
         * @returns `true` if the media will send EOS before unpreparing.
         */
        is_eos_shutdown(): boolean;
        /**
         * @returns `true` if `media` is receive-only, `false` otherwise.
         */
        is_receive_only(): boolean;
        /**
         * Check if the pipeline for `media` can be reused after an unprepare.
         * @returns `true` if the media can be reused
         */
        is_reusable(): boolean;
        /**
         * Check if the pipeline for `media` can be shared between multiple clients in
         * theory. This simply returns the value set via `gst_rtsp_media_set_shared()`.
         *
         * To know if a media can be shared in practice, i.e. if it's shareable and
         * either reusable or was never unprepared before, use
         * `gst_rtsp_media_can_be_shared()`.
         * @returns `true` if the media can be shared between clients.
         */
        is_shared(): boolean;
        /**
         * Check if the pipeline for `media` will be stopped when a client disconnects
         * without sending TEARDOWN.
         * @returns `true` if the media will be stopped when a client disconnects     without sending TEARDOWN.
         */
        is_stop_on_disconnect(): boolean;
        /**
         * Check if `media` can provide a {@link GstNet.NetTimeProvider} for its pipeline clock.
         *
         * Use `gst_rtsp_media_get_time_provider()` to get the network clock.
         * @returns `true` if `media` can provide a {@link GstNet.NetTimeProvider}.
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
         * `gst_rtsp_media_take_pipeline()`.
         *
         * It will preroll the pipeline and collect vital information about the streams
         * such as the duration.
         * @param thread a {@link GstRtspServer.RTSPThread} to run the   bus handler or `null`
         * @returns `true` on success.
         */
        prepare(thread?: RTSPThread | null): boolean;
        /**
         * Seek the pipeline of `media` to `range`. `media` must be prepared with
         * `gst_rtsp_media_prepare()`.
         * @param range a {@link GstRtsp.RTSPTimeRange}
         * @returns `true` on success.
         */
        seek(range: GstRtsp.RTSPTimeRange): boolean;
        /**
         * Seek the pipeline of `media` to `range` with the given `flags`.
         * `media` must be prepared with `gst_rtsp_media_prepare()`.
         * @param range a {@link GstRtsp.RTSPTimeRange}
         * @param flags The minimal set of {@link Gst.SeekFlags} to use
         * @returns `true` on success.
         */
        seek_full(range: GstRtsp.RTSPTimeRange, flags: Gst.SeekFlags | null): boolean;
        /**
         * Seek the pipeline of `media` to `range` with the given `flags` and `rate`,
         * and `trickmode_interval`.
         * `media` must be prepared with `gst_rtsp_media_prepare()`.
         * In order to perform the seek operation, the pipeline must contain all
         * needed transport parts (transport sinks).
         * @param range a {@link GstRtsp.RTSPTimeRange}
         * @param flags The minimal set of {@link Gst.SeekFlags} to use
         * @param rate the rate to use in the seek
         * @param trickmode_interval The trickmode interval to use for KEY_UNITS trick mode
         * @returns `true` on success.
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
         * @returns -1 if the stream is not seekable, 0 if seekable only to the beginning and > 0 to indicate the longest duration between any two random access points. `G_MAXINT64` means any value is possible.
         */
        seekable(): Gst.ClockTimeDiff;
        /**
         * configure `pool` to be used as the address pool of `media`.
         * @param pool a {@link GstRtspServer.RTSPAddressPool}
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
         * @param clock {@link Gst.Clock} to be used
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
         * @returns `true` if the requested ttl has been set successfully.
         */
        set_max_mcast_ttl(ttl: number): boolean;
        /**
         * configure `multicast_iface` to be used for `media`.
         * @param multicast_iface a multicast interface name
         */
        set_multicast_iface(multicast_iface?: string | null): void;
        /**
         * Set `permissions` on `media`.
         * @param permissions a {@link GstRtspServer.RTSPPermissions}
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
         * When `shared` is `true`, client requests for this media will share the media
         * pipeline.
         * @param shared the new value
         */
        set_shared(shared: boolean): void;
        /**
         * Set the state of `media` to `state` and for the transports in `transports`.
         *
         * `media` must be prepared with `gst_rtsp_media_prepare()`;
         * @param state the target state of the media
         * @param transports a {@link GLib.PtrArray} of {@link GstRtspServer.RTSPStreamTransport} pointers
         * @returns `true` on success.
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
         * @param mode the new {@link GstRtspServer.RTSPSuspendMode}
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
         * @param sdp a {@link GstSdp.SDPMessage}
         * @param info a {@link GstRtspServer.SDPInfo}
         * @returns TRUE on success.
         */
        setup_sdp(sdp: GstSdp.SDPMessage, info: SDPInfo): boolean;
        /**
         * Suspend `media`. The state of the pipeline managed by `media` is set to
         * GST_STATE_NULL but all streams are kept. `media` can be prepared again
         * with `gst_rtsp_media_unsuspend()`
         *
         * `media` must be prepared with `gst_rtsp_media_prepare()`;
         * @returns `true` on success.
         */
        suspend(): boolean;
        /**
         * Set `pipeline` as the {@link Gst.Pipeline} for `media`. Ownership is
         * taken of `pipeline`.
         * @param pipeline a {@link Gst.Pipeline}
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
         * @returns `true` on success.
         */
        unprepare(): boolean;
        /**
         * Unsuspend `media` if it was in a suspended state. This method does nothing
         * when the media was not in the suspended state.
         * @returns `true` on success.
         */
        unsuspend(): boolean;
        /**
         * Set `media` to provide a {@link GstNet.NetTimeProvider}.
         * @param time_provider if a {@link GstNet.NetTimeProvider} should be used
         */
        use_time_provider(time_provider: boolean): void;
    }

    namespace RTSPMediaFactory {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            'media-configure': (arg0: RTSPMedia) => void;
            /**
             * @signal
             * @run-last
             */
            'media-constructed': (arg0: RTSPMedia) => void;
            'notify::bind-mcast-address': (pspec: GObject.ParamSpec) => void;
            'notify::buffer-size': (pspec: GObject.ParamSpec) => void;
            'notify::clock': (pspec: GObject.ParamSpec) => void;
            'notify::dscp-qos': (pspec: GObject.ParamSpec) => void;
            'notify::enable-rtcp': (pspec: GObject.ParamSpec) => void;
            'notify::eos-shutdown': (pspec: GObject.ParamSpec) => void;
            'notify::latency': (pspec: GObject.ParamSpec) => void;
            'notify::launch': (pspec: GObject.ParamSpec) => void;
            'notify::max-mcast-ttl': (pspec: GObject.ParamSpec) => void;
            'notify::profiles': (pspec: GObject.ParamSpec) => void;
            'notify::protocols': (pspec: GObject.ParamSpec) => void;
            'notify::shared': (pspec: GObject.ParamSpec) => void;
            'notify::stop-on-disconnect': (pspec: GObject.ParamSpec) => void;
            'notify::suspend-mode': (pspec: GObject.ParamSpec) => void;
            'notify::transport-mode': (pspec: GObject.ParamSpec) => void;
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
     * @gir-type Class
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
         * @since 1.20
         */
        get enable_rtcp(): boolean;
        set enable_rtcp(val: boolean);
        /**
         * Whether the created media should send and receive RTCP
         * @since 1.20
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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RTSPMediaFactory.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RTSPMediaFactory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RTSPMediaFactory;

        // Signals

        /** @signal */
        connect<K extends keyof RTSPMediaFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RTSPMediaFactory.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RTSPMediaFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RTSPMediaFactory.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RTSPMediaFactory.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RTSPMediaFactory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param media
         * @virtual
         */
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
         * @virtual
         */
        vfunc_construct(url: GstRtsp.RTSPUrl): RTSPMedia | null;
        /**
         * Construct and return a {@link Gst.Element} that is a {@link Gst.Bin} containing
         * the elements to use for streaming the media.
         *
         * The bin should contain payloaders pay\%d for each stream. The default
         * implementation of this function returns the bin created from the
         * launch parameter.
         * @param url the url used
         * @virtual
         */
        vfunc_create_element(url: GstRtsp.RTSPUrl): Gst.Element | null;
        /**
         * @param url
         * @virtual
         */
        vfunc_gen_key(url: GstRtsp.RTSPUrl): string;
        /**
         * @param media
         * @virtual
         */
        vfunc_media_configure(media: RTSPMedia): void;
        /**
         * @param media
         * @virtual
         */
        vfunc_media_constructed(media: RTSPMedia): void;

        // Methods

        /**
         * A convenience wrapper around `gst_rtsp_permissions_add_role_from_structure()`.
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
         * @returns a new {@link GstRtspServer.RTSPMedia} if the media could be prepared.
         */
        construct(url: GstRtsp.RTSPUrl): RTSPMedia | null;
        /**
         * Construct and return a {@link Gst.Element} that is a {@link Gst.Bin} containing
         * the elements to use for streaming the media.
         *
         * The bin should contain payloaders pay\%d for each stream. The default
         * implementation of this function returns the bin created from the
         * launch parameter.
         * @param url the url used
         * @returns a new {@link Gst.Element}.
         */
        create_element(url: GstRtsp.RTSPUrl): Gst.Element | null;
        /**
         * Get the {@link GstRtspServer.RTSPAddressPool} used as the address pool of `factory`.
         * @returns the {@link GstRtspServer.RTSPAddressPool} of `factory`. `g_object_unref()` after usage.
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
        /**
         * @returns Whether retransmission requests will be sent for receiving media
         */
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
         * Get the `gst_parse_launch()` pipeline description that will be used in the
         * default prepare vmethod.
         * @returns the configured launch description. `g_free()` after usage.
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
         * @returns the multicast interface for `factory`. `g_free()` after usage.
         */
        get_multicast_iface(): string | null;
        /**
         * Get the permissions object from `factory`.
         * @returns a {@link GstRtspServer.RTSPPermissions} object, unref after usage.
         */
        get_permissions(): RTSPPermissions | null;
        /**
         * Get the allowed profiles of `factory`.
         * @returns a {@link GstRtsp.RTSPProfile}
         */
        get_profiles(): GstRtsp.RTSPProfile;
        /**
         * Get the allowed protocols of `factory`.
         * @returns a {@link GstRtsp.RTSPLowerTrans}
         */
        get_protocols(): GstRtsp.RTSPLowerTrans;
        /**
         * Gets if and how the media clock should be published according to RFC7273.
         * @returns The GstRTSPPublishClockMode
         */
        get_publish_clock_mode(): RTSPPublishClockMode;
        /**
         * Get the time that is stored for retransmission purposes
         * @returns a {@link Gst.ClockTime}
         */
        get_retransmission_time(): Gst.ClockTime;
        /**
         * Get how media created from this factory will be suspended.
         * @returns a {@link GstRtspServer.RTSPSuspendMode}.
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
         * @returns `true` if multicast sockets are configured to be bound to multicast addresses.
         */
        is_bind_mcast_address(): boolean;
        /**
         * Check if created media will send and receive RTCP
         * @returns `true` if created media will send and receive RTCP
         */
        is_enable_rtcp(): boolean;
        /**
         * Get if media created from this factory will have an EOS event sent to the
         * pipeline before shutdown.
         * @returns `true` if the media will receive EOS before shutdown.
         */
        is_eos_shutdown(): boolean;
        /**
         * Get if media created from this factory can be shared between clients.
         * @returns `true` if the media will be shared between clients.
         */
        is_shared(): boolean;
        is_stop_on_disonnect(): boolean;
        /**
         * configure `pool` to be used as the address pool of `factory`.
         * @param pool a {@link GstRtspServer.RTSPAddressPool}
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
         * The `gst_parse_launch()` line to use for constructing the pipeline in the
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
         * @returns `true` if the requested ttl has been set successfully.
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
         * @param permissions a {@link GstRtspServer.RTSPPermissions}
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
         * @param time a {@link Gst.ClockTime}
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
         * @param mode the new {@link GstRtspServer.RTSPSuspendMode}
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
        interface SignalSignatures extends RTSPMediaFactory.SignalSignatures {
            'notify::uri': (pspec: GObject.ParamSpec) => void;
            'notify::use-gstpay': (pspec: GObject.ParamSpec) => void;
            'notify::bind-mcast-address': (pspec: GObject.ParamSpec) => void;
            'notify::buffer-size': (pspec: GObject.ParamSpec) => void;
            'notify::clock': (pspec: GObject.ParamSpec) => void;
            'notify::dscp-qos': (pspec: GObject.ParamSpec) => void;
            'notify::enable-rtcp': (pspec: GObject.ParamSpec) => void;
            'notify::eos-shutdown': (pspec: GObject.ParamSpec) => void;
            'notify::latency': (pspec: GObject.ParamSpec) => void;
            'notify::launch': (pspec: GObject.ParamSpec) => void;
            'notify::max-mcast-ttl': (pspec: GObject.ParamSpec) => void;
            'notify::profiles': (pspec: GObject.ParamSpec) => void;
            'notify::protocols': (pspec: GObject.ParamSpec) => void;
            'notify::shared': (pspec: GObject.ParamSpec) => void;
            'notify::stop-on-disconnect': (pspec: GObject.ParamSpec) => void;
            'notify::suspend-mode': (pspec: GObject.ParamSpec) => void;
            'notify::transport-mode': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends RTSPMediaFactory.ConstructorProps {
            uri: string;
            use_gstpay: boolean;
            useGstpay: boolean;
        }
    }

    /**
     * A media factory that creates a pipeline to play any uri.
     * @gir-type Class
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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RTSPMediaFactoryURI.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RTSPMediaFactoryURI.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RTSPMediaFactoryURI;

        // Signals

        /** @signal */
        connect<K extends keyof RTSPMediaFactoryURI.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RTSPMediaFactoryURI.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RTSPMediaFactoryURI.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RTSPMediaFactoryURI.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RTSPMediaFactoryURI.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RTSPMediaFactoryURI.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the URI that will provide media for this factory.
         * @returns the configured URI. `g_free()` after usage.
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
     * Creates a {@link GstRtspServer.RTSPMediaFactory} object for a given url.
     * @gir-type Class
     */
    class RTSPMountPoints extends GObject.Object {
        static $gtype: GObject.GType<RTSPMountPoints>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RTSPMountPoints.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RTSPMountPoints.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RTSPMountPoints;

        // Signals

        /** @signal */
        connect<K extends keyof RTSPMountPoints.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RTSPMountPoints.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RTSPMountPoints.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RTSPMountPoints.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RTSPMountPoints.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RTSPMountPoints.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Make a path string from `url`.
         * @param url a {@link GstRtsp.RTSPUrl}
         * @virtual
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
         * @param factory a {@link GstRtspServer.RTSPMediaFactory}
         */
        add_factory(path: string, factory: RTSPMediaFactory): void;
        /**
         * Make a path string from `url`.
         * @param url a {@link GstRtsp.RTSPUrl}
         * @returns a path string for `url`, `g_free()` after usage.
         */
        make_path(url: GstRtsp.RTSPUrl): string | null;
        /**
         * Find the factory in `mounts` that has the longest match with `path`.
         *
         * If `matched` is `null`, `path` will match the factory exactly otherwise
         * the amount of characters that matched is returned in `matched`.
         * @param path a mount point
         * @returns the {@link GstRtspServer.RTSPMediaFactory} for `path`. `g_object_unref()` after usage.
         */
        match(path: string): [RTSPMediaFactory, number];
        /**
         * Remove the {@link GstRtspServer.RTSPMediaFactory} associated with `path` in `mounts`.
         * @param path a mount point
         */
        remove_factory(path: string): void;
    }

    namespace RTSPOnvifClient {
        // Signal signatures
        interface SignalSignatures extends RTSPClient.SignalSignatures {
            'notify::drop-backlog': (pspec: GObject.ParamSpec) => void;
            'notify::mount-points': (pspec: GObject.ParamSpec) => void;
            'notify::post-session-timeout': (pspec: GObject.ParamSpec) => void;
            'notify::session-pool': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends RTSPClient.ConstructorProps {}
    }

    /**
     * @gir-type Class
     * @since 1.14
     */
    class RTSPOnvifClient extends RTSPClient {
        static $gtype: GObject.GType<RTSPOnvifClient>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RTSPOnvifClient.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RTSPOnvifClient.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RTSPOnvifClient;

        // Signals

        /** @signal */
        connect<K extends keyof RTSPOnvifClient.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RTSPOnvifClient.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RTSPOnvifClient.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RTSPOnvifClient.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RTSPOnvifClient.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RTSPOnvifClient.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace RTSPOnvifMedia {
        // Signal signatures
        interface SignalSignatures extends RTSPMedia.SignalSignatures {
            'notify::bind-mcast-address': (pspec: GObject.ParamSpec) => void;
            'notify::buffer-size': (pspec: GObject.ParamSpec) => void;
            'notify::clock': (pspec: GObject.ParamSpec) => void;
            'notify::dscp-qos': (pspec: GObject.ParamSpec) => void;
            'notify::element': (pspec: GObject.ParamSpec) => void;
            'notify::eos-shutdown': (pspec: GObject.ParamSpec) => void;
            'notify::latency': (pspec: GObject.ParamSpec) => void;
            'notify::max-mcast-ttl': (pspec: GObject.ParamSpec) => void;
            'notify::profiles': (pspec: GObject.ParamSpec) => void;
            'notify::protocols': (pspec: GObject.ParamSpec) => void;
            'notify::reusable': (pspec: GObject.ParamSpec) => void;
            'notify::shared': (pspec: GObject.ParamSpec) => void;
            'notify::stop-on-disconnect': (pspec: GObject.ParamSpec) => void;
            'notify::suspend-mode': (pspec: GObject.ParamSpec) => void;
            'notify::time-provider': (pspec: GObject.ParamSpec) => void;
            'notify::transport-mode': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends RTSPMedia.ConstructorProps {}
    }

    /**
     * @gir-type Class
     * @since 1.14
     */
    class RTSPOnvifMedia extends RTSPMedia {
        static $gtype: GObject.GType<RTSPOnvifMedia>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RTSPOnvifMedia.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RTSPOnvifMedia.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof RTSPOnvifMedia.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RTSPOnvifMedia.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RTSPOnvifMedia.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RTSPOnvifMedia.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RTSPOnvifMedia.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RTSPOnvifMedia.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Find the ONVIF backchannel depayloader element. It should be named
         * 'depay_backchannel', be placed in a bin called 'onvif-backchannel'
         * and return all supported RTP caps on a caps query. Complete RTP caps with
         * at least the payload type, clock-rate and encoding-name are required.
         *
         * A new {@link GstRtspServer.RTSPStream} is created for the backchannel if found.
         * @returns `true` if a backchannel stream could be found and created
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
        interface SignalSignatures extends RTSPMediaFactory.SignalSignatures {
            'notify::bind-mcast-address': (pspec: GObject.ParamSpec) => void;
            'notify::buffer-size': (pspec: GObject.ParamSpec) => void;
            'notify::clock': (pspec: GObject.ParamSpec) => void;
            'notify::dscp-qos': (pspec: GObject.ParamSpec) => void;
            'notify::enable-rtcp': (pspec: GObject.ParamSpec) => void;
            'notify::eos-shutdown': (pspec: GObject.ParamSpec) => void;
            'notify::latency': (pspec: GObject.ParamSpec) => void;
            'notify::launch': (pspec: GObject.ParamSpec) => void;
            'notify::max-mcast-ttl': (pspec: GObject.ParamSpec) => void;
            'notify::profiles': (pspec: GObject.ParamSpec) => void;
            'notify::protocols': (pspec: GObject.ParamSpec) => void;
            'notify::shared': (pspec: GObject.ParamSpec) => void;
            'notify::stop-on-disconnect': (pspec: GObject.ParamSpec) => void;
            'notify::suspend-mode': (pspec: GObject.ParamSpec) => void;
            'notify::transport-mode': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends RTSPMediaFactory.ConstructorProps {}
    }

    /**
     * @gir-type Class
     * @since 1.14
     */
    class RTSPOnvifMediaFactory extends RTSPMediaFactory {
        static $gtype: GObject.GType<RTSPOnvifMediaFactory>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RTSPOnvifMediaFactory.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RTSPOnvifMediaFactory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RTSPOnvifMediaFactory;

        // Signals

        /** @signal */
        connect<K extends keyof RTSPOnvifMediaFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RTSPOnvifMediaFactory.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RTSPOnvifMediaFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RTSPOnvifMediaFactory.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RTSPOnvifMediaFactory.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RTSPOnvifMediaFactory.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Checks whether the client request requires backchannel.
         * @param factory a {@link GstRtspServer.RTSPMediaFactory}
         * @param ctx
         */
        static requires_backchannel(factory: RTSPMediaFactory, ctx: RTSPContext): boolean;

        // Virtual methods

        /**
         * Returns `true` if an ONVIF backchannel is supported by the media factory.
         * @virtual
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
         * Get the `gst_parse_launch()` pipeline description that will be used in the
         * default prepare vmethod for generating the ONVIF backchannel pipeline.
         * @returns the configured backchannel launch description. `g_free()` after usage.
         */
        get_backchannel_launch(): string | null;
        /**
         * Returns `true` if an ONVIF backchannel is supported by the media factory.
         * @returns `true` if an ONVIF backchannel is supported by the media factory.
         */
        has_backchannel_support(): boolean;
        /**
         * @returns `true` if ONVIF replay is supported by the media factory.
         */
        has_replay_support(): boolean;
        /**
         * Set the configured/supported bandwidth of the ONVIF backchannel pipeline in
         * bits per second.
         * @param bandwidth the bandwidth in bits per second
         */
        set_backchannel_bandwidth(bandwidth: number): void;
        /**
         * The `gst_parse_launch()` line to use for constructing the ONVIF backchannel
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
         * async=false on {@link GstBase.BaseSink}. Otherwise the whole media will not be able to
         * prepare.
         * @param launch the launch description
         */
        set_backchannel_launch(launch?: string | null): void;
        /**
         * Set to `true` if ONVIF replay is supported by the media factory.
         * @param has_replay_support
         */
        set_replay_support(has_replay_support: boolean): void;
    }

    namespace RTSPOnvifServer {
        // Signal signatures
        interface SignalSignatures extends RTSPServer.SignalSignatures {
            'notify::address': (pspec: GObject.ParamSpec) => void;
            'notify::backlog': (pspec: GObject.ParamSpec) => void;
            'notify::bound-port': (pspec: GObject.ParamSpec) => void;
            'notify::content-length-limit': (pspec: GObject.ParamSpec) => void;
            'notify::mount-points': (pspec: GObject.ParamSpec) => void;
            'notify::service': (pspec: GObject.ParamSpec) => void;
            'notify::session-pool': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends RTSPServer.ConstructorProps {}
    }

    /**
     * @gir-type Class
     * @since 1.14
     */
    class RTSPOnvifServer extends RTSPServer {
        static $gtype: GObject.GType<RTSPOnvifServer>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RTSPOnvifServer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RTSPOnvifServer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RTSPOnvifServer;

        // Signals

        /** @signal */
        connect<K extends keyof RTSPOnvifServer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RTSPOnvifServer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RTSPOnvifServer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RTSPOnvifServer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RTSPOnvifServer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RTSPOnvifServer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace RTSPServer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            'client-connected': (arg0: RTSPClient) => void;
            'notify::address': (pspec: GObject.ParamSpec) => void;
            'notify::backlog': (pspec: GObject.ParamSpec) => void;
            'notify::bound-port': (pspec: GObject.ParamSpec) => void;
            'notify::content-length-limit': (pspec: GObject.ParamSpec) => void;
            'notify::mount-points': (pspec: GObject.ParamSpec) => void;
            'notify::service': (pspec: GObject.ParamSpec) => void;
            'notify::session-pool': (pspec: GObject.ParamSpec) => void;
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
     * @gir-type Class
     */
    class RTSPServer extends GObject.Object {
        static $gtype: GObject.GType<RTSPServer>;

        // Properties

        get address(): string;
        set address(val: string);
        get backlog(): number;
        set backlog(val: number);
        /**
         * @read-only
         */
        get bound_port(): number;
        /**
         * @read-only
         */
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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RTSPServer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RTSPServer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RTSPServer;

        // Signals

        /** @signal */
        connect<K extends keyof RTSPServer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RTSPServer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RTSPServer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RTSPServer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RTSPServer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RTSPServer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * A default {@link Gio.SocketSourceFunc} that creates a new {@link GstRtspServer.RTSPClient} to accept and handle a
         * new connection on `socket` or `server`.
         * @param socket a {@link Gio.Socket}
         * @param condition the condition on `source`
         * @param server a {@link GstRtspServer.RTSPServer}
         */
        static io_func(socket: Gio.Socket, condition: GLib.IOCondition, server: RTSPServer): boolean;

        // Virtual methods

        /**
         * @param client
         * @virtual
         */
        vfunc_client_connected(client: RTSPClient): void;

        // Methods

        /**
         * Attaches `server` to `context`. When the mainloop for `context` is run, the
         * server will be dispatched. When `context` is `null`, the default context will be
         * used).
         *
         * This function should be called when the server properties and urls are fully
         * configured and the server is ready to start.
         *
         * This takes a reference on `server` until the source is destroyed. Note that
         * if `context` is not the default main context as returned by
         * `g_main_context_default()` (or `null`), `g_source_remove()` cannot be used to
         * destroy the source. In that case it is recommended to use
         * `gst_rtsp_server_create_source()` and attach it to `context` manually.
         * @param context a {@link GLib.MainContext}
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
         * will also be added with an additional ref to the result {@link GLib.List} of this
         * function..
         *
         * When `func` is `null`, #GST_RTSP_FILTER_REF will be assumed for each client.
         * @param func a callback
         * @returns a {@link GLib.List} with all clients for which `func` returned #GST_RTSP_FILTER_REF. After usage, each element in the {@link GLib.List} should be unreffed before the list is freed.
         */
        client_filter(func?: RTSPServerClientFilterFunc | null): RTSPClient[];
        /**
         * Create a {@link Gio.Socket} for `server`. The socket will listen on the
         * configured service.
         * @param cancellable a {@link Gio.Cancellable}
         * @returns the {@link Gio.Socket} for `server` or `null` when an error occurred.
         */
        create_socket(cancellable?: Gio.Cancellable | null): Gio.Socket;
        /**
         * Create a {@link GLib.Source} for `server`. The new source will have a default
         * {@link Gio.SocketSourceFunc} of `gst_rtsp_server_io_func()`.
         *
         * `cancellable` if not `null` can be used to cancel the source, which will cause
         * the source to trigger, reporting the current condition (which is likely 0
         * unless cancellation happened at the same time as a condition change). You can
         * check for this in the callback using `g_cancellable_is_cancelled()`.
         *
         * This takes a reference on `server` until `source` is destroyed.
         * @param cancellable a {@link Gio.Cancellable} or `null`.
         * @returns the {@link GLib.Source} for `server` or `null` when an error occurred. Free with g_source_unref ()
         */
        create_source(cancellable?: Gio.Cancellable | null): GLib.Source;
        /**
         * Get the address on which the server will accept connections.
         * @returns the server address. `g_free()` after usage.
         */
        get_address(): string | null;
        /**
         * Get the {@link GstRtspServer.RTSPAuth} used as the authentication manager of `server`.
         * @returns the {@link GstRtspServer.RTSPAuth} of `server`. `g_object_unref()` after usage.
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
         * Get the {@link GstRtspServer.RTSPMountPoints} used as the mount points of `server`.
         * @returns the {@link GstRtspServer.RTSPMountPoints} of `server`. `g_object_unref()` after usage.
         */
        get_mount_points(): RTSPMountPoints | null;
        /**
         * Get the service on which the server will accept connections.
         * @returns the service. use `g_free()` after usage.
         */
        get_service(): string;
        /**
         * Get the {@link GstRtspServer.RTSPSessionPool} used as the session pool of `server`.
         * @returns the {@link GstRtspServer.RTSPSessionPool} used for sessions. `g_object_unref()` after usage.
         */
        get_session_pool(): RTSPSessionPool | null;
        /**
         * Get the {@link GstRtspServer.RTSPThreadPool} used as the thread pool of `server`.
         * @returns the {@link GstRtspServer.RTSPThreadPool} of `server`. `g_object_unref()` after usage.
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
         * @param auth a {@link GstRtspServer.RTSPAuth}
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
         * @param mounts a {@link GstRtspServer.RTSPMountPoints}
         */
        set_mount_points(mounts?: RTSPMountPoints | null): void;
        /**
         * Configure `server` to accept connections on the given service.
         * `service` should be a string containing the service name (see services(5)) or
         * a string containing a port number between 1 and 65535.
         *
         * When `service` is set to "0", the server will listen on a random free
         * port. The actual used port can be retrieved with
         * `gst_rtsp_server_get_bound_port()`.
         *
         * This function must be called before the server is bound.
         * @param service the service
         */
        set_service(service: string): void;
        /**
         * configure `pool` to be used as the session pool of `server`.
         * @param pool a {@link GstRtspServer.RTSPSessionPool}
         */
        set_session_pool(pool?: RTSPSessionPool | null): void;
        /**
         * configure `pool` to be used as the thread pool of `server`.
         * @param pool a {@link GstRtspServer.RTSPThreadPool}
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
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::extra-timeout': (pspec: GObject.ParamSpec) => void;
            'notify::sessionid': (pspec: GObject.ParamSpec) => void;
            'notify::timeout': (pspec: GObject.ParamSpec) => void;
            'notify::timeout-always-visible': (pspec: GObject.ParamSpec) => void;
        }

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
     * @gir-type Class
     */
    class RTSPSession extends GObject.Object {
        static $gtype: GObject.GType<RTSPSession>;

        // Properties

        get extra_timeout(): number;
        set extra_timeout(val: number);
        get extraTimeout(): number;
        set extraTimeout(val: number);
        /**
         * @construct-only
         */
        get sessionid(): string;
        get timeout(): number;
        set timeout(val: number);
        get timeout_always_visible(): boolean;
        set timeout_always_visible(val: boolean);
        get timeoutAlwaysVisible(): boolean;
        set timeoutAlwaysVisible(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RTSPSession.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RTSPSession.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](sessionid: string): RTSPSession;

        // Signals

        /** @signal */
        connect<K extends keyof RTSPSession.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RTSPSession.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RTSPSession.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RTSPSession.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RTSPSession.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RTSPSession.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Allow `session` to expire. This method must be called an equal
         * amount of time as `gst_rtsp_session_prevent_expire()`.
         */
        allow_expire(): void;
        /**
         * Gets the session media for `path`, increasing its reference count. `matched`
         * will contain the number of matched characters of `path`.
         * @param path the path for the media
         * @returns the configuration for `path` in `sess`, should be unreferenced when no longer needed.
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
         * will also be added with an additional ref to the result {@link GLib.List} of this
         * function..
         *
         * When `func` is `null`, #GST_RTSP_FILTER_REF will be assumed for all media.
         * @param func a callback
         * @returns a GList with all media for which `func` returned #GST_RTSP_FILTER_REF. After usage, each element in the {@link GLib.List} should be unreffed before the list is freed.
         */
        filter(func?: RTSPSessionFilterFunc | null): RTSPSessionMedia[];
        /**
         * Get the string that can be placed in the Session header field.
         * @returns the Session header of `session`. `g_free()` after usage.
         */
        get_header(): string | null;
        /**
         * Gets the session media for `path`. `matched` will contain the number of matched
         * characters of `path`.
         * @param path the path for the media
         * @returns the configuration for `path` in `sess`.
         */
        get_media(path: string): [RTSPSessionMedia | null, number];
        /**
         * Get the sessionid of `session`.
         * @returns the sessionid of `session`. The value remains valid as long as `session` is alive.
         */
        get_sessionid(): string | null;
        /**
         * Get the timeout value of `session`.
         * @returns the timeout of `session` in seconds.
         */
        get_timeout(): number;
        /**
         * Check if `session` timeout out.
         * @param now the current system time
         * @returns `true` if `session` timed out
         */
        is_expired(now: GLib.TimeVal): boolean;
        /**
         * Check if `session` timeout out.
         * @param now the current monotonic time
         * @returns `true` if `session` timed out
         */
        is_expired_usec(now: number): boolean;
        /**
         * Manage the media object `obj` in `sess`. `path` will be used to retrieve this
         * media from the session with `gst_rtsp_session_get_media()`.
         *
         * Ownership is taken from `media`.
         * @param path the path for the media
         * @param media a {@link GstRtspServer.RTSPMedia}
         * @returns a new `GstRTSPSessionMedia` object.
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
         * Release the managed `media` in `sess`, freeing the memory allocated by it.
         * @param media a {@link GstRtspServer.RTSPMedia}
         * @returns `true` if there are more media session left in `sess`.
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
     * @gir-type Class
     */
    class RTSPSessionMedia extends GObject.Object {
        static $gtype: GObject.GType<RTSPSessionMedia>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RTSPSessionMedia.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RTSPSessionMedia.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](path: string, media: RTSPMedia): RTSPSessionMedia;

        // Signals

        /** @signal */
        connect<K extends keyof RTSPSessionMedia.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RTSPSessionMedia.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RTSPSessionMedia.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RTSPSessionMedia.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RTSPSessionMedia.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RTSPSessionMedia.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Fill `range` with the next available min and max channels for
         * interleaved transport.
         * @returns `true` on success.
         */
        alloc_channels(): [boolean, GstRtsp.RTSPRange];
        /**
         * Get the base_time of the {@link GstRtspServer.RTSPMedia} in `media`
         * @returns the base_time of the media.
         */
        get_base_time(): Gst.ClockTime;
        /**
         * Get the {@link GstRtspServer.RTSPMedia} that was used when constructing `media`
         * @returns the {@link GstRtspServer.RTSPMedia} of `media`. Remains valid as long as `media` is valid.
         */
        get_media(): RTSPMedia | null;
        /**
         * Retrieve the RTP-Info header string for all streams in `media`
         * with configured transports.
         * @returns The RTP-Info as a string or `null` when no RTP-Info could be generated, `g_free()` after usage.
         */
        get_rtpinfo(): string | null;
        /**
         * Get the current RTSP state of `media`.
         * @returns the current RTSP state of `media`.
         */
        get_rtsp_state(): GstRtsp.RTSPState;
        /**
         * Get a previously created {@link GstRtspServer.RTSPStreamTransport} for the stream at `idx`.
         * @param idx the stream index
         * @returns a {@link GstRtspServer.RTSPStreamTransport} that is valid until the session of `media` is unreffed.
         */
        get_transport(idx: number): RTSPStreamTransport | null;
        /**
         * Get a list of all available {@link GstRtspServer.RTSPStreamTransport} in this session.
         * @returns a list of {@link GstRtspServer.RTSPStreamTransport}, g_ptr_array_unref () after usage.
         */
        get_transports(): RTSPStreamTransport[];
        /**
         * Check if the path of `media` matches `path`. It `path` matches, the amount of
         * matched characters is returned in `matched`.
         * @param path a path
         * @returns `true` when `path` matches the path of `media`.
         */
        matches(path: string): [boolean, number];
        /**
         * Set the RTSP state of `media` to `state`.
         * @param state a {@link GstRtsp.RTSPState}
         */
        set_rtsp_state(state: GstRtsp.RTSPState | null): void;
        /**
         * Tell the media object `media` to change to `state`.
         * @param state the new state
         * @returns `true` on success.
         */
        set_state(state: Gst.State | null): boolean;
        /**
         * Configure the transport for `stream` to `tr` in `media`.
         * @param stream a {@link GstRtspServer.RTSPStream}
         * @param tr a {@link GstRtsp.RTSPTransport}
         * @returns the new or updated {@link GstRtspServer.RTSPStreamTransport} for `stream`.
         */
        set_transport(stream: RTSPStream, tr: GstRtsp.RTSPTransport): RTSPStreamTransport;
    }

    namespace RTSPSessionPool {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            'session-removed': (arg0: RTSPSession) => void;
            'notify::max-sessions': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            max_sessions: number;
            maxSessions: number;
        }
    }

    /**
     * An object that keeps track of the active sessions. This object is usually
     * attached to a {@link GstRtspServer.RTSPServer} object to manage the sessions in that server.
     * @gir-type Class
     */
    class RTSPSessionPool extends GObject.Object {
        static $gtype: GObject.GType<RTSPSessionPool>;

        // Properties

        get max_sessions(): number;
        set max_sessions(val: number);
        get maxSessions(): number;
        set maxSessions(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RTSPSessionPool.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RTSPSessionPool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RTSPSessionPool;

        // Signals

        /** @signal */
        connect<K extends keyof RTSPSessionPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RTSPSessionPool.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RTSPSessionPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RTSPSessionPool.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RTSPSessionPool.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RTSPSessionPool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_create_session_id(): string;
        /**
         * @param session
         * @virtual
         */
        vfunc_session_removed(session: RTSPSession): void;

        // Methods

        /**
         * Inspect all the sessions in `pool` and remove the sessions that are inactive
         * for more than their timeout.
         * @returns the amount of sessions that got removed.
         */
        cleanup(): number;
        /**
         * Create a new {@link GstRtspServer.RTSPSession} object in `pool`.
         * @returns a new {@link GstRtspServer.RTSPSession}.
         */
        create(): RTSPSession | null;
        /**
         * Create a {@link GLib.Source} that will be dispatched when the session should be cleaned
         * up.
         * @returns a {@link GLib.Source}
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
         * When `func` is `null`, #GST_RTSP_FILTER_REF will be assumed for all sessions.
         * @param func a callback
         * @returns a GList with all sessions for which `func` returned #GST_RTSP_FILTER_REF. After usage, each element in the GList should be unreffed before the list is freed.
         */
        filter(func?: RTSPSessionPoolFilterFunc | null): RTSPSession[];
        /**
         * Find the session with `sessionid` in `pool`. The access time of the session
         * will be updated with `gst_rtsp_session_touch()`.
         * @param sessionid the session id
         * @returns the {@link GstRtspServer.RTSPSession} with `sessionid` or `null` when the session did not exist. `g_object_unref()` after usage.
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
         * @returns the amount of active sessions in `pool`.
         */
        get_n_sessions(): number;
        /**
         * Remove `sess` from `pool`, releasing the ref that the pool has on `sess`.
         * @param sess a {@link GstRtspServer.RTSPSession}
         * @returns `true` if the session was found and removed.
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
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            'new-rtcp-encoder': (arg0: Gst.Element) => void;
            /**
             * @signal
             * @run-last
             */
            'new-rtp-encoder': (arg0: Gst.Element) => void;
            /**
             * @signal
             * @run-last
             */
            'new-rtp-rtcp-decoder': (arg0: Gst.Element) => void;
            'notify::control': (pspec: GObject.ParamSpec) => void;
            'notify::profiles': (pspec: GObject.ParamSpec) => void;
            'notify::protocols': (pspec: GObject.ParamSpec) => void;
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
     * @gir-type Class
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

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RTSPStream.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RTSPStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](idx: number, payloader: Gst.Element, pad: Gst.Pad): RTSPStream;

        // Signals

        /** @signal */
        connect<K extends keyof RTSPStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RTSPStream.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RTSPStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RTSPStream.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RTSPStream.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RTSPStream.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add multicast client address to stream. At this point, the sockets that
         * will stream RTP and RTCP data to `destination` are supposed to be
         * allocated.
         * @param destination a multicast address to add
         * @param rtp_port RTP port
         * @param rtcp_port RTCP port
         * @param family socket family
         * @returns `true` if `destination` can be addedd and handled by `stream`.
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
         * `trans` must contain a valid {@link GstRtsp.RTSPTransport}.
         * @param trans a {@link GstRtspServer.RTSPStreamTransport}
         * @returns `true` if `trans` was added
         */
        add_transport(trans: RTSPStreamTransport): boolean;
        /**
         * Allocates RTP and RTCP ports.
         * @param family protocol family
         * @param transport transport method
         * @param use_client_settings Whether to use client settings or not
         * @returns `true` if the RTP and RTCP sockets have been succeccully allocated.
         */
        allocate_udp_sockets(
            family: Gio.SocketFamily | null,
            transport: GstRtsp.RTSPTransport,
            use_client_settings: boolean,
        ): boolean;
        /**
         * Add a receiver and sender part to the pipeline based on the transport from
         * SETUP.
         * @param transport a {@link GstRtsp.RTSPTransport}
         * @returns `true` if the stream has been successfully updated.
         */
        complete_stream(transport: GstRtsp.RTSPTransport): boolean;
        /**
         * Get the {@link GstRtspServer.RTSPAddressPool} used as the address pool of `stream`.
         * @returns the {@link GstRtspServer.RTSPAddressPool} of `stream`. `g_object_unref()` after usage.
         */
        get_address_pool(): RTSPAddressPool | null;
        /**
         * Get the size of the UDP transmission buffer (in bytes)
         * @returns the size of the UDP TX buffer
         */
        get_buffer_size(): number;
        /**
         * Retrieve the current caps of `stream`.
         * @returns the {@link Gst.Caps} of `stream`. use `gst_caps_unref()` after usage.
         */
        get_caps(): Gst.Caps | null;
        /**
         * Get the control string to identify this stream.
         * @returns the control string. `g_free()` after usage.
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
         * Get the previous joined bin with `gst_rtsp_stream_join_bin()` or NULL.
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
         * {@link GstRtspServer.RTSPAddress} is cached and copy is returned, so freeing the return value
         * won't release the address from the pool.
         * @param family the {@link Gio.SocketFamily}
         * @returns the {@link GstRtspServer.RTSPAddress} of `stream` or `null` when no address could be allocated. `gst_rtsp_address_free()` after usage.
         */
        get_multicast_address(family: Gio.SocketFamily | null): RTSPAddress | null;
        /**
         * Get all multicast client addresses that RTP data will be sent to
         * @returns A comma separated list of host:port pairs with destinations
         */
        get_multicast_client_addresses(): string;
        /**
         * Get the multicast interface used for `stream`.
         * @returns the multicast interface for `stream`. `g_free()` after usage.
         */
        get_multicast_iface(): string | null;
        /**
         * Get the allowed profiles of `stream`.
         * @returns a {@link GstRtsp.RTSPProfile}
         */
        get_profiles(): GstRtsp.RTSPProfile;
        /**
         * Get the allowed protocols of `stream`.
         * @returns a {@link GstRtsp.RTSPLowerTrans}
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
        /**
         * @returns whether `stream` will follow the Rate-Control=no behaviour as specified in the ONVIF replay spec.
         */
        get_rate_control(): boolean;
        /**
         * Retrieve the current rate and/or applied_rate.
         * @returns `true` if rate and/or applied_rate could be determined.
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
         * @returns the multicast RTCP socket or `null` if no socket could be allocated for `family`. Unref after usage
         */
        get_rtcp_multicast_socket(family: Gio.SocketFamily | null): Gio.Socket | null;
        /**
         * Get the RTCP socket from `stream` for a `family`.
         *
         * `stream` must be joined to a bin.
         * @param family the socket family
         * @returns the RTCP socket or `null` if no socket could be allocated for `family`. Unref after usage
         */
        get_rtcp_socket(family: Gio.SocketFamily | null): Gio.Socket | null;
        /**
         * Get the multicast RTP socket from `stream` for a `family`.
         * @param family the socket family
         * @returns the multicast RTP socket or `null` if no socket could be allocated for `family`. Unref after usage
         */
        get_rtp_multicast_socket(family: Gio.SocketFamily | null): Gio.Socket | null;
        /**
         * Get the RTP socket from `stream` for a `family`.
         *
         * `stream` must be joined to a bin.
         * @param family the socket family
         * @returns the RTP socket or `null` if no socket could be allocated for `family`. Unref after usage
         */
        get_rtp_socket(family: Gio.SocketFamily | null): Gio.Socket | null;
        /**
         * Retrieve the current rtptime, seq and running-time. This is used to
         * construct a RTPInfo reply header.
         * @returns `true` when rtptime, seq and running-time could be determined.
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
        /**
         * @returns the amount of redundancy applied when creating ULPFEC protection packets.
         */
        get_ulpfec_percentage(): number;
        /**
         * @returns the payload type used for ULPFEC protection packets
         */
        get_ulpfec_pt(): number;
        /**
         * Parse and handle a KeyMgmt header.
         * @param keymgmt a keymgmt header
         */
        handle_keymgmt(keymgmt: string): boolean;
        /**
         * Check if `stream` has the control string `control`.
         * @param control a control string
         * @returns `true` is `stream` has `control` as the control string
         */
        has_control(control?: string | null): boolean;
        /**
         * Check if multicast sockets are configured to be bound to multicast addresses.
         * @returns `true` if multicast sockets are configured to be bound to multicast addresses.
         */
        is_bind_mcast_address(): boolean;
        /**
         * Check if `stream` is blocking on a {@link Gst.Buffer}.
         * @returns `true` if `stream` is blocking
         */
        is_blocking(): boolean;
        /**
         * See `gst_rtsp_stream_set_client_side()`
         * @returns TRUE if this {@link GstRtspServer.RTSPStream} is client-side.
         */
        is_client_side(): boolean;
        /**
         * Checks whether the stream is complete, contains the receiver and the sender
         * parts. As the stream contains sink(s) element(s), it's possible to perform
         * seek operations on it.
         * @returns `true` if the stream contains at least one sink element.
         */
        is_complete(): boolean;
        /**
         * Checks whether the stream is a receiver.
         * @returns `true` if the stream is a receiver and `false` otherwise.
         */
        is_receiver(): boolean;
        /**
         * Checks whether the stream is a sender.
         * @returns `true` if the stream is a sender and `false` otherwise.
         */
        is_sender(): boolean;
        /**
         * Check if `transport` can be handled by stream
         * @param transport a {@link GstRtsp.RTSPTransport}
         * @returns `true` if `transport` can be handled by `stream`.
         */
        is_transport_supported(transport: GstRtsp.RTSPTransport): boolean;
        /**
         * Join the {@link Gst.Bin} `bin` that contains the element `rtpbin`.
         *
         * `stream` will link to `rtpbin`, which must be inside `bin`. The elements
         * added to `bin` will be set to the state given in `state`.
         * @param bin a {@link Gst.Bin} to join
         * @param rtpbin a rtpbin element in `bin`
         * @param state the target state of the new elements
         * @returns `true` on success.
         */
        join_bin(bin: Gst.Bin, rtpbin: Gst.Element, state: Gst.State | null): boolean;
        /**
         * Remove the elements of `stream` from `bin`.
         * @param bin a {@link Gst.Bin}
         * @param rtpbin a rtpbin {@link Gst.Element}
         * @returns `true` on success.
         */
        leave_bin(bin: Gst.Bin, rtpbin: Gst.Element): boolean;
        /**
         * Query the position of the stream in {@link Gst.Format.TIME}. This only considers
         * the RTP parts of the pipeline and not the RTCP parts.
         * @returns `true` if the position could be queried
         */
        query_position(): [boolean, number];
        /**
         * Query the stop of the stream in {@link Gst.Format.TIME}. This only considers
         * the RTP parts of the pipeline and not the RTCP parts.
         * @returns `true` if the stop could be queried
         */
        query_stop(): [boolean, number];
        /**
         * Handle an RTCP buffer for the stream. This method is usually called when a
         * message has been received from a client using the TCP transport.
         *
         * This function takes ownership of `buffer`.
         * @param buffer a {@link Gst.Buffer}
         * @returns a GstFlowReturn.
         */
        recv_rtcp(buffer: Gst.Buffer): Gst.FlowReturn;
        /**
         * Handle an RTP buffer for the stream. This method is usually called when a
         * message has been received from a client using the TCP transport.
         *
         * This function takes ownership of `buffer`.
         * @param buffer a {@link Gst.Buffer}
         * @returns a GstFlowReturn.
         */
        recv_rtp(buffer: Gst.Buffer): Gst.FlowReturn;
        /**
         * Remove the transport in `trans` from `stream`. The media of `stream` will
         * not be sent to the values configured in `trans`.
         *
         * `stream` must be joined to a bin.
         *
         * `trans` must contain a valid {@link GstRtsp.RTSPTransport}.
         * @param trans a {@link GstRtspServer.RTSPStreamTransport}
         * @returns `true` if `trans` was removed
         */
        remove_transport(trans: RTSPStreamTransport): boolean;
        /**
         * Creating a rtxreceive bin
         * @param sessid the session id
         * @returns a {@link Gst.Element}.
         */
        request_aux_receiver(sessid: number): Gst.Element | null;
        /**
         * Creating a rtxsend bin
         * @param sessid the session id
         * @returns a {@link Gst.Element}.
         */
        request_aux_sender(sessid: number): Gst.Element | null;
        /**
         * Creating a rtpulpfecdec element
         * @param rtpbin
         * @param sessid
         * @returns a {@link Gst.Element}.
         */
        request_ulpfec_decoder(rtpbin: Gst.Element, sessid: number): Gst.Element | null;
        /**
         * Creating a rtpulpfecenc element
         * @param sessid
         * @returns a {@link Gst.Element}.
         */
        request_ulpfec_encoder(sessid: number): Gst.Element | null;
        /**
         * Reserve `address` and `port` as the address and port of `stream`. The original
         * {@link GstRtspServer.RTSPAddress} is cached and copy is returned, so freeing the return value
         * won't release the address from the pool.
         * @param address an address
         * @param port a port
         * @param n_ports n_ports
         * @param ttl a TTL
         * @returns the {@link GstRtspServer.RTSPAddress} of `stream` or `null` when the address could not be reserved. `gst_rtsp_address_free()` after usage.
         */
        reserve_address(address: string, port: number, n_ports: number, ttl: number): RTSPAddress | null;
        /**
         * Checks whether the individual `stream` is seekable.
         * @returns `true` if `stream` is seekable, else `false`.
         */
        seekable(): boolean;
        /**
         * configure `pool` to be used as the address pool of `stream`.
         * @param pool a {@link GstRtspServer.RTSPAddressPool}
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
         * @returns `true` on success
         */
        set_blocked(blocked: boolean): boolean;
        /**
         * Set the size of the UDP transmission buffer (in bytes)
         * Needs to be set before the stream is joined to a bin.
         * @param size the buffer size
         */
        set_buffer_size(size: number): void;
        /**
         * Sets the {@link GstRtspServer.RTSPStream} as a 'client side' stream - used for sending
         * streams to an RTSP server via RECORD. This has the practical effect
         * of changing which UDP port numbers are used when setting up the local
         * side of the stream sending to be either the 'server' or 'client' pair
         * of a configured UDP transport.
         * @param client_side TRUE if this {@link GstRtspServer.RTSPStream} is running on the 'client' side of an RTSP connection.
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
         * @returns `true` if the requested ttl has been set successfully.
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
         * @param caps a {@link Gst.Caps}
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
         * @param rtx_pt a `guint`
         */
        set_retransmission_pt(rtx_pt: number): void;
        /**
         * Set the amount of time to store retransmission packets.
         * @param time a {@link Gst.ClockTime}
         */
        set_retransmission_time(time: Gst.ClockTime): void;
        /**
         * @param seqnum
         */
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
         * will also be added with an additional ref to the result {@link GLib.List} of this
         * function..
         *
         * When `func` is `null`, #GST_RTSP_FILTER_REF will be assumed for each transport.
         * @param func a callback
         * @returns a {@link GLib.List} with all transports for which `func` returned #GST_RTSP_FILTER_REF. After usage, each element in the {@link GLib.List} should be unreffed before the list is freed.
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
         * for `ssrc` existed, it will be replaced. If `crypto` is `null`, it will
         * be removed from `stream`.
         * @param ssrc the SSRC
         * @param crypto a {@link Gst.Caps} with crypto info
         * @returns `true` if `crypto` could be updated
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
     * @gir-type Class
     */
    class RTSPStreamTransport extends GObject.Object {
        static $gtype: GObject.GType<RTSPStreamTransport>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RTSPStreamTransport.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RTSPStreamTransport.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](stream: RTSPStream, tr: GstRtsp.RTSPTransport): RTSPStreamTransport;

        // Signals

        /** @signal */
        connect<K extends keyof RTSPStreamTransport.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RTSPStreamTransport.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RTSPStreamTransport.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RTSPStreamTransport.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RTSPStreamTransport.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RTSPStreamTransport.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the RTP-Info string for `trans` and `start_time`.
         * @param start_time a star time
         * @returns the RTPInfo string for `trans` and `start_time` or `null` when the RTP-Info could not be determined. `g_free()` after usage.
         */
        get_rtpinfo(start_time: Gst.ClockTime): string | null;
        /**
         * Get the {@link GstRtspServer.RTSPStream} used when constructing `trans`.
         * @returns the stream used when constructing `trans`.
         */
        get_stream(): RTSPStream | null;
        /**
         * Get the transport configured in `trans`.
         * @returns the transport configured in `trans`. It remains valid for as long as `trans` is valid.
         */
        get_transport(): GstRtsp.RTSPTransport | null;
        /**
         * Get the url configured in `trans`.
         * @returns the url configured in `trans`. It remains valid for as long as `trans` is valid.
         */
        get_url(): GstRtsp.RTSPUrl | null;
        /**
         * Check if `trans` is timed out.
         * @returns `true` if `trans` timed out.
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
         * @param buffer a {@link Gst.Buffer}
         * @returns a {@link Gst.FlowReturn}. Returns GST_FLOW_NOT_LINKED when `channel` is not    configured in the transport of `trans`.
         */
        recv_data(channel: number, buffer: Gst.Buffer): Gst.FlowReturn;
        /**
         * Send `buffer` to the installed RTCP callback for `trans`.
         * @param buffer a {@link Gst.Buffer}
         * @returns `true` on success
         */
        send_rtcp(buffer: Gst.Buffer): boolean;
        /**
         * Send `buffer_list` to the installed RTCP callback for `trans`.
         * @param buffer_list a {@link Gst.Buffer}
         * @returns `true` on success
         */
        send_rtcp_list(buffer_list: Gst.BufferList): boolean;
        /**
         * Send `buffer` to the installed RTP callback for `trans`.
         * @param buffer a {@link Gst.Buffer}
         * @returns `true` on success
         */
        send_rtp(buffer: Gst.Buffer): boolean;
        /**
         * Send `buffer_list` to the installed RTP callback for `trans`.
         * @param buffer_list a {@link Gst.BufferList}
         * @returns `true` on success
         */
        send_rtp_list(buffer_list: Gst.BufferList): boolean;
        /**
         * Activate or deactivate datatransfer configured in `trans`.
         * @param active new state of `trans`
         * @returns `true` when the state was changed.
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
         * @param tr a client {@link GstRtsp.RTSPTransport}
         */
        set_transport(tr: GstRtsp.RTSPTransport): void;
        /**
         * Set `url` as the client url.
         * @param url a client {@link GstRtsp.RTSPUrl}
         */
        set_url(url?: GstRtsp.RTSPUrl | null): void;
    }

    namespace RTSPThreadPool {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::max-threads': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            max_threads: number;
            maxThreads: number;
        }
    }

    /**
     * The thread pool structure.
     * @gir-type Class
     */
    class RTSPThreadPool extends GObject.Object {
        static $gtype: GObject.GType<RTSPThreadPool>;

        // Properties

        get max_threads(): number;
        set max_threads(val: number);
        get maxThreads(): number;
        set maxThreads(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RTSPThreadPool.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RTSPThreadPool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RTSPThreadPool;

        // Signals

        /** @signal */
        connect<K extends keyof RTSPThreadPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RTSPThreadPool.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RTSPThreadPool.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RTSPThreadPool.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RTSPThreadPool.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RTSPThreadPool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Wait for all tasks to be stopped and free all allocated resources. This is
         * mainly used in test suites to ensure proper cleanup of internal data
         * structures.
         */
        static cleanup(): void;

        // Virtual methods

        /**
         * @param thread
         * @param ctx
         * @virtual
         */
        vfunc_configure_thread(thread: RTSPThread, ctx: RTSPContext): void;
        /**
         * Get a new {@link GstRtspServer.RTSPThread} for `type` and `ctx`.
         * @param type the {@link GstRtspServer.RTSPThreadType}
         * @param ctx a {@link GstRtspServer.RTSPContext}
         * @virtual
         */
        vfunc_get_thread(type: RTSPThreadType, ctx: RTSPContext): RTSPThread | null;
        /**
         * @param thread
         * @virtual
         */
        vfunc_thread_enter(thread: RTSPThread): void;
        /**
         * @param thread
         * @virtual
         */
        vfunc_thread_leave(thread: RTSPThread): void;

        // Methods

        /**
         * Get the maximum number of threads used for client connections.
         * See `gst_rtsp_thread_pool_set_max_threads()`.
         * @returns the maximum number of threads.
         */
        get_max_threads(): number;
        /**
         * Get a new {@link GstRtspServer.RTSPThread} for `type` and `ctx`.
         * @param type the {@link GstRtspServer.RTSPThreadType}
         * @param ctx a {@link GstRtspServer.RTSPContext}
         * @returns a new {@link GstRtspServer.RTSPThread}, `gst_rtsp_thread_stop()` after usage
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
     * @gir-type Struct
     */
    class RTSPAddress {
        static $gtype: GObject.GType<RTSPAddress>;

        // Fields

        pool: RTSPAddressPool;
        address: string;
        port: number;
        n_ports: number;
        ttl: number;

        // Methods

        /**
         * Make a copy of `addr`.
         * @returns a copy of `addr`.
         */
        copy(): RTSPAddress;
        /**
         * Free `addr` and releasing it back into the pool when owned by a
         * pool.
         */
        free(): void;
    }

    /**
     * @gir-type Alias
     */
    type RTSPAddressPoolClass = typeof RTSPAddressPool;
    /**
     * @gir-type Struct
     */
    abstract class RTSPAddressPoolPrivate {
        static $gtype: GObject.GType<RTSPAddressPoolPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type RTSPAuthClass = typeof RTSPAuth;
    /**
     * @gir-type Struct
     */
    abstract class RTSPAuthPrivate {
        static $gtype: GObject.GType<RTSPAuthPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type RTSPClientClass = typeof RTSPClient;
    /**
     * @gir-type Struct
     */
    abstract class RTSPClientPrivate {
        static $gtype: GObject.GType<RTSPClientPrivate>;
    }

    /**
     * Information passed around containing the context of a request.
     * @gir-type Struct
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

        // Methods

        /**
         * Pops `ctx` off the context stack (verifying that `ctx`
         * is on the top of the stack).
         */
        pop_current(): void;
        /**
         * Pushes `ctx` onto the context stack. The current
         * context can then be received using `gst_rtsp_context_get_current()`.
         */
        push_current(): void;
        /**
         * Set the token for `ctx`.
         * @param token a {@link GstRtspServer.RTSPToken}
         */
        set_token(token: RTSPToken): void;
    }

    /**
     * @gir-type Alias
     */
    type RTSPMediaClass = typeof RTSPMedia;
    /**
     * @gir-type Alias
     */
    type RTSPMediaFactoryClass = typeof RTSPMediaFactory;
    /**
     * @gir-type Struct
     */
    abstract class RTSPMediaFactoryPrivate {
        static $gtype: GObject.GType<RTSPMediaFactoryPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type RTSPMediaFactoryURIClass = typeof RTSPMediaFactoryURI;
    /**
     * @gir-type Struct
     */
    abstract class RTSPMediaFactoryURIPrivate {
        static $gtype: GObject.GType<RTSPMediaFactoryURIPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class RTSPMediaPrivate {
        static $gtype: GObject.GType<RTSPMediaPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type RTSPMountPointsClass = typeof RTSPMountPoints;
    /**
     * @gir-type Struct
     */
    abstract class RTSPMountPointsPrivate {
        static $gtype: GObject.GType<RTSPMountPointsPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type RTSPOnvifClientClass = typeof RTSPOnvifClient;
    /**
     * @gir-type Alias
     */
    type RTSPOnvifMediaClass = typeof RTSPOnvifMedia;
    /**
     * @gir-type Alias
     */
    type RTSPOnvifMediaFactoryClass = typeof RTSPOnvifMediaFactory;
    /**
     * @gir-type Struct
     */
    abstract class RTSPOnvifMediaFactoryPrivate {
        static $gtype: GObject.GType<RTSPOnvifMediaFactoryPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class RTSPOnvifMediaPrivate {
        static $gtype: GObject.GType<RTSPOnvifMediaPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type RTSPOnvifServerClass = typeof RTSPOnvifServer;
    /**
     * The opaque permissions structure. It is used to define the permissions
     * of objects in different roles.
     * @gir-type Struct
     */
    class RTSPPermissions {
        static $gtype: GObject.GType<RTSPPermissions>;

        // Constructors

        constructor(
            properties?: Partial<{
                mini_object: Gst.MiniObject;
            }>,
        );

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
         * permissions for the role with `gst_rtsp_permissions_add_permission_for_role()`.
         * @param role a role
         */
        add_role(role: string): void;
        /**
         * Add a new role to `permissions` based on `structure`, for example
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
         * @returns the structure with permissions for `role`. It remains valid for as long as `permissions` is valid.
         */
        get_role(role: string): Gst.Structure;
        /**
         * Check if `role` in `permissions` is given permission for `permission`.
         * @param role a role
         * @param permission a permission
         * @returns `true` if `role` is allowed `permission`.
         */
        is_allowed(role: string, permission: string): boolean;
        /**
         * Remove all permissions for `role` in `permissions`.
         * @param role a role
         */
        remove_role(role: string): void;
    }

    /**
     * @gir-type Alias
     */
    type RTSPServerClass = typeof RTSPServer;
    /**
     * @gir-type Struct
     */
    abstract class RTSPServerPrivate {
        static $gtype: GObject.GType<RTSPServerPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type RTSPSessionClass = typeof RTSPSession;
    /**
     * @gir-type Alias
     */
    type RTSPSessionMediaClass = typeof RTSPSessionMedia;
    /**
     * @gir-type Struct
     */
    abstract class RTSPSessionMediaPrivate {
        static $gtype: GObject.GType<RTSPSessionMediaPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type RTSPSessionPoolClass = typeof RTSPSessionPool;
    /**
     * @gir-type Struct
     */
    abstract class RTSPSessionPoolPrivate {
        static $gtype: GObject.GType<RTSPSessionPoolPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class RTSPSessionPrivate {
        static $gtype: GObject.GType<RTSPSessionPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type RTSPStreamClass = typeof RTSPStream;
    /**
     * @gir-type Struct
     */
    abstract class RTSPStreamPrivate {
        static $gtype: GObject.GType<RTSPStreamPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type RTSPStreamTransportClass = typeof RTSPStreamTransport;
    /**
     * @gir-type Struct
     */
    abstract class RTSPStreamTransportPrivate {
        static $gtype: GObject.GType<RTSPStreamTransportPrivate>;
    }

    /**
     * Structure holding info about a mainloop running in a thread
     * @gir-type Struct
     */
    class RTSPThread {
        static $gtype: GObject.GType<RTSPThread>;

        // Fields

        type: RTSPThreadType;

        // Constructors

        constructor(type: RTSPThreadType);

        static ['new'](type: RTSPThreadType): RTSPThread;

        // Methods

        /**
         * Reuse the mainloop of `thread`
         * @returns `true` if the mainloop could be reused
         */
        reuse(): boolean;
        /**
         * Stop and unref `thread`. When no threads are using the mainloop, the thread
         * will be stopped and the final ref to `thread` will be released.
         */
        stop(): void;
    }

    /**
     * @gir-type Alias
     */
    type RTSPThreadPoolClass = typeof RTSPThreadPool;
    /**
     * @gir-type Struct
     */
    abstract class RTSPThreadPoolPrivate {
        static $gtype: GObject.GType<RTSPThreadPoolPrivate>;
    }

    /**
     * An opaque object used for checking authorisations.
     * It is generated after successful authentication.
     * @gir-type Struct
     */
    class RTSPToken {
        static $gtype: GObject.GType<RTSPToken>;

        // Constructors

        constructor(
            properties?: Partial<{
                mini_object: Gst.MiniObject;
            }>,
        );

        static ['new'](): RTSPToken;

        // Methods

        /**
         * Get the string value of `field` in `token`.
         * @param field a field name
         * @returns the string value of `field` in `token` or `null` when `field` is not defined in `token`. The string becomes invalid when you free `token`.
         */
        get_string(field: string): string | null;
        /**
         * Access the structure of the token.
         * @returns The structure of the token. The structure is still owned by the token, which means that you should not free it and that the pointer becomes invalid when you free the token. MT safe.
         */
        get_structure(): Gst.Structure;
        /**
         * Check if `token` has a boolean `field` and if it is set to `true`.
         * @param field a field name
         * @returns `true` if `token` has a boolean field named `field` set to `true`.
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
         * @returns The structure of the token. The structure is still owned by the token, which means that you should not free it and that the pointer becomes invalid when you free the token. This function ensures that `token` is writable, and if so, will never return `null`. MT safe.
         */
        writable_structure(): Gst.Structure;
    }

    /**
     * @gir-type Struct
     */
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
