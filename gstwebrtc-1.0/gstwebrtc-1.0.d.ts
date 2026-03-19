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

export namespace GstWebRTC {
    /**
     * GstWebRTC-1.0
     */

    export namespace WebRTCBundlePolicy {
        export const $gtype: GObject.GType<WebRTCBundlePolicy>;
    }

    /**
     * See https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-24#section-4.1.1
     * for more information.
     * @gir-type Enum
     * @since 1.16
     */
    enum WebRTCBundlePolicy {
        /**
         * none
         */
        NONE,
        /**
         * balanced
         */
        BALANCED,
        /**
         * max-compat
         */
        MAX_COMPAT,
        /**
         * max-bundle
         */
        MAX_BUNDLE,
    }

    export namespace WebRTCDTLSSetup {
        export const $gtype: GObject.GType<WebRTCDTLSSetup>;
    }

    /**
     * @gir-type Enum
     */
    enum WebRTCDTLSSetup {
        /**
         * none
         */
        NONE,
        /**
         * actpass
         */
        ACTPASS,
        /**
         * sendonly
         */
        ACTIVE,
        /**
         * recvonly
         */
        PASSIVE,
    }

    export namespace WebRTCDTLSTransportState {
        export const $gtype: GObject.GType<WebRTCDTLSTransportState>;
    }

    /**
     * @gir-type Enum
     */
    enum WebRTCDTLSTransportState {
        /**
         * new
         */
        NEW,
        /**
         * closed
         */
        CLOSED,
        /**
         * failed
         */
        FAILED,
        /**
         * connecting
         */
        CONNECTING,
        /**
         * connected
         */
        CONNECTED,
    }

    export namespace WebRTCDataChannelState {
        export const $gtype: GObject.GType<WebRTCDataChannelState>;
    }

    /**
     * See <http://w3c.github.io/webrtc-pc/#dom-rtcdatachannelstate>
     * @gir-type Enum
     * @since 1.16
     */
    enum WebRTCDataChannelState {
        /**
         * connecting
         */
        CONNECTING,
        /**
         * open
         */
        OPEN,
        /**
         * closing
         */
        CLOSING,
        /**
         * closed
         */
        CLOSED,
    }

    /**
     * See <https://www.w3.org/TR/webrtc/#dom-rtcerrordetailtype> for more information.
     * @gir-type Struct
     */
    class WebRTCError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * data-channel-failure
         */
        static DATA_CHANNEL_FAILURE: number;
        /**
         * dtls-failure
         */
        static DTLS_FAILURE: number;
        /**
         * fingerprint-failure
         */
        static FINGERPRINT_FAILURE: number;
        /**
         * sctp-failure
         */
        static SCTP_FAILURE: number;
        /**
         * sdp-syntax-error
         */
        static SDP_SYNTAX_ERROR: number;
        /**
         * hardware-encoder-not-available
         */
        static HARDWARE_ENCODER_NOT_AVAILABLE: number;
        /**
         * encoder-error
         */
        static ENCODER_ERROR: number;
        /**
         * invalid-state (part of WebIDL specification)
         */
        static INVALID_STATE: number;
        /**
         * GStreamer-specific failure, not matching any other value from the specification
         */
        static INTERNAL_FAILURE: number;
        /**
         * invalid-modification (part of WebIDL specification)
         * @since 1.22
         */
        static INVALID_MODIFICATION: number;
        /**
         * type-error (maps to JavaScript TypeError)
         * @since 1.22
         */
        static TYPE_ERROR: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        static quark(): GLib.Quark;
    }

    export namespace WebRTCFECType {
        export const $gtype: GObject.GType<WebRTCFECType>;
    }

    /**
     * @gir-type Enum
     * @since 1.14.1
     */
    enum WebRTCFECType {
        /**
         * none
         */
        NONE,
        /**
         * ulpfec + red
         */
        ULP_RED,
    }

    export namespace WebRTCICEComponent {
        export const $gtype: GObject.GType<WebRTCICEComponent>;
    }

    /**
     * @gir-type Enum
     */
    enum WebRTCICEComponent {
        /**
         * RTP component
         */
        RTP,
        /**
         * RTCP component
         */
        RTCP,
    }

    export namespace WebRTCICEConnectionState {
        export const $gtype: GObject.GType<WebRTCICEConnectionState>;
    }

    /**
     * See <http://w3c.github.io/webrtc-pc/#dom-rtciceconnectionstate>
     * @gir-type Enum
     */
    enum WebRTCICEConnectionState {
        /**
         * new
         */
        NEW,
        /**
         * checking
         */
        CHECKING,
        /**
         * connected
         */
        CONNECTED,
        /**
         * completed
         */
        COMPLETED,
        /**
         * failed
         */
        FAILED,
        /**
         * disconnected
         */
        DISCONNECTED,
        /**
         * closed
         */
        CLOSED,
    }

    export namespace WebRTCICEGatheringState {
        export const $gtype: GObject.GType<WebRTCICEGatheringState>;
    }

    /**
     * See <http://w3c.github.io/webrtc-pc/#dom-rtcicegatheringstate>
     * @gir-type Enum
     */
    enum WebRTCICEGatheringState {
        /**
         * new
         */
        NEW,
        /**
         * gathering
         */
        GATHERING,
        /**
         * complete
         */
        COMPLETE,
    }

    export namespace WebRTCICERole {
        export const $gtype: GObject.GType<WebRTCICERole>;
    }

    /**
     * @gir-type Enum
     */
    enum WebRTCICERole {
        /**
         * controlled
         */
        CONTROLLED,
        /**
         * controlling
         */
        CONTROLLING,
    }

    export namespace WebRTCICETransportPolicy {
        export const $gtype: GObject.GType<WebRTCICETransportPolicy>;
    }

    /**
     * See https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-24#section-4.1.1
     * for more information.
     * @gir-type Enum
     * @since 1.16
     */
    enum WebRTCICETransportPolicy {
        /**
         * all
         */
        ALL,
        /**
         * relay
         */
        RELAY,
    }

    export namespace WebRTCKind {
        export const $gtype: GObject.GType<WebRTCKind>;
    }

    /**
     * https://w3c.github.io/mediacapture-main/#dom-mediastreamtrack-kind
     * @gir-type Enum
     * @since 1.20
     */
    enum WebRTCKind {
        /**
         * Kind has not yet been set
         */
        UNKNOWN,
        /**
         * Kind is audio
         */
        AUDIO,
        /**
         * Kind is audio
         */
        VIDEO,
    }

    export namespace WebRTCPeerConnectionState {
        export const $gtype: GObject.GType<WebRTCPeerConnectionState>;
    }

    /**
     * See <http://w3c.github.io/webrtc-pc/#dom-rtcpeerconnectionstate>
     * @gir-type Enum
     */
    enum WebRTCPeerConnectionState {
        /**
         * new
         */
        NEW,
        /**
         * connecting
         */
        CONNECTING,
        /**
         * connected
         */
        CONNECTED,
        /**
         * disconnected
         */
        DISCONNECTED,
        /**
         * failed
         */
        FAILED,
        /**
         * closed
         */
        CLOSED,
    }

    export namespace WebRTCPriorityType {
        export const $gtype: GObject.GType<WebRTCPriorityType>;
    }

    /**
     * See <http://w3c.github.io/webrtc-pc/#dom-rtcprioritytype>
     * @gir-type Enum
     * @since 1.16
     */
    enum WebRTCPriorityType {
        /**
         * very-low
         */
        VERY_LOW,
        /**
         * low
         */
        LOW,
        /**
         * medium
         */
        MEDIUM,
        /**
         * high
         */
        HIGH,
    }

    export namespace WebRTCRTPTransceiverDirection {
        export const $gtype: GObject.GType<WebRTCRTPTransceiverDirection>;
    }

    /**
     * @gir-type Enum
     */
    enum WebRTCRTPTransceiverDirection {
        /**
         * none
         */
        NONE,
        /**
         * inactive
         */
        INACTIVE,
        /**
         * sendonly
         */
        SENDONLY,
        /**
         * recvonly
         */
        RECVONLY,
        /**
         * sendrecv
         */
        SENDRECV,
    }

    export namespace WebRTCSCTPTransportState {
        export const $gtype: GObject.GType<WebRTCSCTPTransportState>;
    }

    /**
     * See <http://w3c.github.io/webrtc-pc/#dom-rtcsctptransportstate>
     * @gir-type Enum
     * @since 1.16
     */
    enum WebRTCSCTPTransportState {
        /**
         * new
         */
        NEW,
        /**
         * connecting
         */
        CONNECTING,
        /**
         * connected
         */
        CONNECTED,
        /**
         * closed
         */
        CLOSED,
    }

    export namespace WebRTCSDPType {
        export const $gtype: GObject.GType<WebRTCSDPType>;
    }

    /**
     * See <http://w3c.github.io/webrtc-pc/#rtcsdptype>
     * @gir-type Enum
     */
    enum WebRTCSDPType {
        /**
         * offer
         */
        OFFER,
        /**
         * pranswer
         */
        PRANSWER,
        /**
         * answer
         */
        ANSWER,
        /**
         * rollback
         */
        ROLLBACK,
    }

    export namespace WebRTCSignalingState {
        export const $gtype: GObject.GType<WebRTCSignalingState>;
    }

    /**
     * See <http://w3c.github.io/webrtc-pc/#dom-rtcsignalingstate>
     * @gir-type Enum
     */
    enum WebRTCSignalingState {
        /**
         * stable
         */
        STABLE,
        /**
         * closed
         */
        CLOSED,
        /**
         * have-local-offer
         */
        HAVE_LOCAL_OFFER,
        /**
         * have-remote-offer
         */
        HAVE_REMOTE_OFFER,
        /**
         * have-local-pranswer
         */
        HAVE_LOCAL_PRANSWER,
        /**
         * have-remote-pranswer
         */
        HAVE_REMOTE_PRANSWER,
    }

    export namespace WebRTCStatsType {
        export const $gtype: GObject.GType<WebRTCStatsType>;
    }

    /**
     * See <https://w3c.github.io/webrtc-stats/#dom-rtcstatstype>
     * @gir-type Enum
     */
    enum WebRTCStatsType {
        /**
         * codec
         */
        CODEC,
        /**
         * inbound-rtp
         */
        INBOUND_RTP,
        /**
         * outbound-rtp
         */
        OUTBOUND_RTP,
        /**
         * remote-inbound-rtp
         */
        REMOTE_INBOUND_RTP,
        /**
         * remote-outbound-rtp
         */
        REMOTE_OUTBOUND_RTP,
        /**
         * csrc
         */
        CSRC,
        /**
         * peer-connection
         */
        PEER_CONNECTION,
        /**
         * data-channel
         */
        DATA_CHANNEL,
        /**
         * stream
         */
        STREAM,
        /**
         * transport
         */
        TRANSPORT,
        /**
         * candidate-pair
         */
        CANDIDATE_PAIR,
        /**
         * local-candidate
         */
        LOCAL_CANDIDATE,
        /**
         * remote-candidate
         */
        REMOTE_CANDIDATE,
        /**
         * certificate
         */
        CERTIFICATE,
    }

    /**
     * @since 1.20
     */
    function webrtc_error_quark(): GLib.Quark;
    /**
     * @param type a {@link GstWebRTC.WebRTCSDPType}
     * @returns the string representation of `type` or "unknown" when `type` is not      recognized.
     */
    function webrtc_sdp_type_to_string(type: WebRTCSDPType | null): string;
    /**
     * @gir-type Callback
     */
    interface WebRTCICEOnCandidateFunc {
        (ice: WebRTCICE, stream_id: number, candidate: string): void;
    }
    namespace WebRTCDTLSTransport {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::certificate': (pspec: GObject.ParamSpec) => void;
            'notify::client': (pspec: GObject.ParamSpec) => void;
            'notify::remote-certificate': (pspec: GObject.ParamSpec) => void;
            'notify::session-id': (pspec: GObject.ParamSpec) => void;
            'notify::state': (pspec: GObject.ParamSpec) => void;
            'notify::transport': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {
            certificate: string;
            client: boolean;
            remote_certificate: string;
            remoteCertificate: string;
            session_id: number;
            sessionId: number;
            state: WebRTCDTLSTransportState;
            transport: WebRTCICETransport;
        }
    }

    /**
     * @gir-type Class
     */
    class WebRTCDTLSTransport extends Gst.Object {
        static $gtype: GObject.GType<WebRTCDTLSTransport>;

        // Properties

        get certificate(): string;
        set certificate(val: string);
        get client(): boolean;
        set client(val: boolean);
        get remote_certificate(): string;
        get remoteCertificate(): string;
        get session_id(): number;
        get sessionId(): number;
        get state(): WebRTCDTLSTransportState;
        get transport(): WebRTCICETransport;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WebRTCDTLSTransport.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WebRTCDTLSTransport.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof WebRTCDTLSTransport.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebRTCDTLSTransport.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WebRTCDTLSTransport.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebRTCDTLSTransport.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WebRTCDTLSTransport.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WebRTCDTLSTransport.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace WebRTCDataChannel {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Close the data channel
             * @signal
             */
            close: () => void;
            /**
             * @signal
             */
            'on-buffered-amount-low': () => void;
            /**
             * @signal
             */
            'on-close': () => void;
            /**
             * @signal
             */
            'on-error': (arg0: GLib.Error) => void;
            /**
             * @signal
             */
            'on-message-data': (arg0: GLib.Bytes | null) => void;
            /**
             * @signal
             */
            'on-message-string': (arg0: string | null) => void;
            /**
             * @signal
             */
            'on-open': () => void;
            /**
             * @signal
             */
            'send-data': (arg0: GLib.Bytes | null) => void;
            /**
             * @signal
             */
            'send-string': (arg0: string | null) => void;
            'notify::buffered-amount': (pspec: GObject.ParamSpec) => void;
            'notify::buffered-amount-low-threshold': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::max-packet-lifetime': (pspec: GObject.ParamSpec) => void;
            'notify::max-retransmits': (pspec: GObject.ParamSpec) => void;
            'notify::negotiated': (pspec: GObject.ParamSpec) => void;
            'notify::ordered': (pspec: GObject.ParamSpec) => void;
            'notify::priority': (pspec: GObject.ParamSpec) => void;
            'notify::protocol': (pspec: GObject.ParamSpec) => void;
            'notify::ready-state': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffered_amount: number;
            bufferedAmount: number;
            buffered_amount_low_threshold: number;
            bufferedAmountLowThreshold: number;
            id: number;
            label: string;
            max_packet_lifetime: number;
            maxPacketLifetime: number;
            max_retransmits: number;
            maxRetransmits: number;
            negotiated: boolean;
            ordered: boolean;
            priority: WebRTCPriorityType;
            protocol: string;
            ready_state: WebRTCDataChannelState;
            readyState: WebRTCDataChannelState;
        }
    }

    /**
     * @gir-type Class
     * @since 1.18
     */
    abstract class WebRTCDataChannel extends GObject.Object {
        static $gtype: GObject.GType<WebRTCDataChannel>;

        // Properties

        get buffered_amount(): number;
        get bufferedAmount(): number;
        get buffered_amount_low_threshold(): number;
        set buffered_amount_low_threshold(val: number);
        get bufferedAmountLowThreshold(): number;
        set bufferedAmountLowThreshold(val: number);
        get id(): number;
        get label(): string;
        get max_packet_lifetime(): number;
        get maxPacketLifetime(): number;
        get max_retransmits(): number;
        get maxRetransmits(): number;
        get negotiated(): boolean;
        get ordered(): boolean;
        get priority(): WebRTCPriorityType;
        get protocol(): string;
        get ready_state(): WebRTCDataChannelState;
        get readyState(): WebRTCDataChannelState;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WebRTCDataChannel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WebRTCDataChannel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof WebRTCDataChannel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebRTCDataChannel.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WebRTCDataChannel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebRTCDataChannel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WebRTCDataChannel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WebRTCDataChannel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Close the `channel`.
         */
        close(): void;
        /**
         * Send `data` as a data message over `channel`.
         * @param data a {@link GLib.Bytes} or `null`
         */
        send_data(data?: GLib.Bytes | null): void;
        /**
         * Send `data` as a data message over `channel`.
         * @param data a {@link GLib.Bytes} or `null`
         * @returns TRUE if `channel` is open and data could be queued
         */
        send_data_full(data?: GLib.Bytes | null): boolean;
        /**
         * Send `str` as a string message over `channel`.
         * @param str a string or `null`
         */
        send_string(str?: string | null): void;
        /**
         * Send `str` as a string message over `channel`.
         * @param str a string or `null`
         * @returns TRUE if `channel` is open and data could be queued
         */
        send_string_full(str?: string | null): boolean;
    }

    namespace WebRTCICE {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            /**
             * Add a local IP address to use for ICE candidate gathering.  If none
             * are supplied, they will be discovered automatically. Calling this signal
             * stops automatic ICE gathering.
             * @signal
             */
            'add-local-ip-address': (arg0: string) => boolean | void;
            'notify::max-rtp-port': (pspec: GObject.ParamSpec) => void;
            'notify::min-rtp-port': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {
            max_rtp_port: number;
            maxRtpPort: number;
            min_rtp_port: number;
            minRtpPort: number;
        }
    }

    /**
     * @gir-type Class
     * @since 1.22
     */
    abstract class WebRTCICE extends Gst.Object {
        static $gtype: GObject.GType<WebRTCICE>;

        // Properties

        /**
         * Maximum port for local rtp port range.
         * min-rtp-port must be <= max-rtp-port
         * @since 1.20
         */
        get max_rtp_port(): number;
        set max_rtp_port(val: number);
        /**
         * Maximum port for local rtp port range.
         * min-rtp-port must be <= max-rtp-port
         * @since 1.20
         */
        get maxRtpPort(): number;
        set maxRtpPort(val: number);
        /**
         * Minimum port for local rtp port range.
         * min-rtp-port must be <= max-rtp-port
         * @since 1.20
         */
        get min_rtp_port(): number;
        set min_rtp_port(val: number);
        /**
         * Minimum port for local rtp port range.
         * min-rtp-port must be <= max-rtp-port
         * @since 1.20
         */
        get minRtpPort(): number;
        set minRtpPort(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WebRTCICE.SignalSignatures;

        // Fields

        ice_gathering_state: WebRTCICEGatheringState;
        ice_connection_state: WebRTCICEConnectionState;

        // Constructors

        constructor(properties?: Partial<WebRTCICE.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof WebRTCICE.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebRTCICE.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WebRTCICE.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebRTCICE.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WebRTCICE.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WebRTCICE.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param stream The {@link GstWebRTC.WebRTCICEStream}
         * @param candidate The ICE candidate
         * @param promise A {@link Gst.Promise} for task notifications (Since: 1.24)
         * @virtual
         */
        vfunc_add_candidate(stream: WebRTCICEStream, candidate: string, promise?: Gst.Promise | null): void;
        /**
         * @param session_id The session id
         * @virtual
         */
        vfunc_add_stream(session_id: number): WebRTCICEStream | null;
        /**
         * @param uri URI of the TURN server
         * @virtual
         */
        vfunc_add_turn_server(uri: string): boolean;
        /**
         * @param stream The {@link GstWebRTC.WebRTCICEStream}
         * @param component The {@link GstWebRTC.WebRTCICEComponent}
         * @virtual
         */
        vfunc_find_transport(stream: WebRTCICEStream, component: WebRTCICEComponent): WebRTCICETransport | null;
        /**
         * @param stream The {@link GstWebRTC.WebRTCICEStream}
         * @virtual
         */
        vfunc_gather_candidates(stream: WebRTCICEStream): boolean;
        /**
         * Get HTTP Proxy to be used when connecting to TURN server.
         * @virtual
         */
        vfunc_get_http_proxy(): string;
        /**
         * @virtual
         */
        vfunc_get_is_controller(): boolean;
        /**
         * @param stream
         * @virtual
         */
        vfunc_get_local_candidates(stream: WebRTCICEStream): WebRTCICECandidateStats;
        /**
         * @param stream
         * @virtual
         */
        vfunc_get_remote_candidates(stream: WebRTCICEStream): WebRTCICECandidateStats;
        /**
         * @param stream The {@link GstWebRTC.WebRTCICEStream}
         * @virtual
         */
        vfunc_get_selected_pair(stream: WebRTCICEStream): [boolean, WebRTCICECandidateStats, WebRTCICECandidateStats];
        /**
         * @virtual
         */
        vfunc_get_stun_server(): string | null;
        /**
         * @virtual
         */
        vfunc_get_turn_server(): string | null;
        /**
         * @param force_relay TRUE to enable force relay
         * @virtual
         */
        vfunc_set_force_relay(force_relay: boolean): void;
        /**
         * Set HTTP Proxy to be used when connecting to TURN server.
         * @param uri URI of the HTTP proxy of the form   http://[username:password@]hostname[:port]
         * @virtual
         */
        vfunc_set_http_proxy(uri: string): void;
        /**
         * @param controller TRUE to set as controller
         * @virtual
         */
        vfunc_set_is_controller(controller: boolean): void;
        /**
         * @param stream The {@link GstWebRTC.WebRTCICEStream}
         * @param ufrag ICE username
         * @param pwd ICE password
         * @virtual
         */
        vfunc_set_local_credentials(stream: WebRTCICEStream, ufrag: string, pwd: string): boolean;
        /**
         * @param func The {@link GstWebRTC.WebRTCICEOnCandidateFunc} callback function
         * @virtual
         */
        vfunc_set_on_ice_candidate(func: WebRTCICEOnCandidateFunc): void;
        /**
         * @param stream The {@link GstWebRTC.WebRTCICEStream}
         * @param ufrag ICE username
         * @param pwd ICE password
         * @virtual
         */
        vfunc_set_remote_credentials(stream: WebRTCICEStream, ufrag: string, pwd: string): boolean;
        /**
         * @param uri URI of the STUN server
         * @virtual
         */
        vfunc_set_stun_server(uri?: string | null): void;
        /**
         * @param stream The {@link GstWebRTC.WebRTCICEStream}
         * @param tos ToS to be set
         * @virtual
         */
        vfunc_set_tos(stream: WebRTCICEStream, tos: number): void;
        /**
         * @param uri URI of the TURN sever
         * @virtual
         */
        vfunc_set_turn_server(uri?: string | null): void;

        // Methods

        /**
         * @param stream The {@link GstWebRTC.WebRTCICEStream}
         * @param candidate The ICE candidate
         * @param promise A {@link Gst.Promise} for task notifications (Since: 1.24)
         */
        add_candidate(stream: WebRTCICEStream, candidate: string, promise?: Gst.Promise | null): void;
        /**
         * @param session_id The session id
         * @returns The {@link GstWebRTC.WebRTCICEStream}, or `null`
         */
        add_stream(session_id: number): WebRTCICEStream | null;
        /**
         * @param uri URI of the TURN server
         * @returns FALSE on error, TRUE otherwise
         */
        add_turn_server(uri: string): boolean;
        /**
         * @param stream The {@link GstWebRTC.WebRTCICEStream}
         * @param component The {@link GstWebRTC.WebRTCICEComponent}
         * @returns The {@link GstWebRTC.WebRTCICETransport}, or `null`
         */
        find_transport(stream: WebRTCICEStream, component: WebRTCICEComponent | null): WebRTCICETransport | null;
        /**
         * @param stream The {@link GstWebRTC.WebRTCICEStream}
         * @returns FALSE on error, TRUE otherwise
         */
        gather_candidates(stream: WebRTCICEStream): boolean;
        /**
         * @returns URI of the HTTP proxy of the form   http://[username:password@]hostname[:port] Get HTTP Proxy to be used when connecting to TURN server.
         */
        get_http_proxy(): string;
        /**
         * @returns TRUE if set as controller, FALSE otherwise
         */
        get_is_controller(): boolean;
        /**
         * @param stream The {@link GstWebRTC.WebRTCICEStream}
         * @returns List of local candidates
         */
        get_local_candidates(stream: WebRTCICEStream): WebRTCICECandidateStats[];
        /**
         * @param stream The {@link GstWebRTC.WebRTCICEStream}
         * @returns List of remote candidates
         */
        get_remote_candidates(stream: WebRTCICEStream): WebRTCICECandidateStats[];
        /**
         * @param stream The {@link GstWebRTC.WebRTCICEStream}
         * @returns FALSE on failure, otherwise `local_stats` `remote_stats` will be set
         */
        get_selected_pair(stream: WebRTCICEStream): [boolean, WebRTCICECandidateStats, WebRTCICECandidateStats];
        /**
         * @returns URI of the STUN sever
         */
        get_stun_server(): string | null;
        /**
         * @returns URI of the TURN sever
         */
        get_turn_server(): string | null;
        /**
         * @param force_relay TRUE to enable force relay
         */
        set_force_relay(force_relay: boolean): void;
        /**
         * Set HTTP Proxy to be used when connecting to TURN server.
         * @param uri URI of the HTTP proxy of the form   http://[username:password@]hostname[:port]
         */
        set_http_proxy(uri: string): void;
        /**
         * @param controller TRUE to set as controller
         */
        set_is_controller(controller: boolean): void;
        /**
         * @param stream The {@link GstWebRTC.WebRTCICEStream}
         * @param ufrag ICE username
         * @param pwd ICE password
         * @returns FALSE on error, TRUE otherwise
         */
        set_local_credentials(stream: WebRTCICEStream, ufrag: string, pwd: string): boolean;
        /**
         * @param func The {@link GstWebRTC.WebRTCICEOnCandidateFunc} callback function
         */
        set_on_ice_candidate(func: WebRTCICEOnCandidateFunc): void;
        /**
         * @param stream The {@link GstWebRTC.WebRTCICEStream}
         * @param ufrag ICE username
         * @param pwd ICE password
         * @returns FALSE on error, TRUE otherwise
         */
        set_remote_credentials(stream: WebRTCICEStream, ufrag: string, pwd: string): boolean;
        /**
         * @param uri URI of the STUN server
         */
        set_stun_server(uri?: string | null): void;
        /**
         * @param stream The {@link GstWebRTC.WebRTCICEStream}
         * @param tos ToS to be set
         */
        set_tos(stream: WebRTCICEStream, tos: number): void;
        /**
         * @param uri URI of the TURN sever
         */
        set_turn_server(uri?: string | null): void;
    }

    namespace WebRTCICEStream {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::stream-id': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {
            stream_id: number;
            streamId: number;
        }
    }

    /**
     * @gir-type Class
     * @since 1.22
     */
    abstract class WebRTCICEStream extends Gst.Object {
        static $gtype: GObject.GType<WebRTCICEStream>;

        // Properties

        get stream_id(): number;
        get streamId(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WebRTCICEStream.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WebRTCICEStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof WebRTCICEStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebRTCICEStream.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WebRTCICEStream.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebRTCICEStream.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WebRTCICEStream.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WebRTCICEStream.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param component The {@link GstWebRTC.WebRTCICEComponent}
         * @virtual
         */
        vfunc_find_transport(component: WebRTCICEComponent): WebRTCICETransport | null;
        /**
         * @virtual
         */
        vfunc_gather_candidates(): boolean;

        // Methods

        /**
         * @param component The {@link GstWebRTC.WebRTCICEComponent}
         * @returns the {@link GstWebRTC.WebRTCICETransport}, or `null`
         */
        find_transport(component: WebRTCICEComponent | null): WebRTCICETransport | null;
        /**
         * @returns FALSE on error, TRUE otherwise
         */
        gather_candidates(): boolean;
    }

    namespace WebRTCICETransport {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            /**
             * @signal
             */
            'on-new-candidate': (arg0: string) => void;
            /**
             * @signal
             */
            'on-selected-candidate-pair-change': () => void;
            'notify::component': (pspec: GObject.ParamSpec) => void;
            'notify::gathering-state': (pspec: GObject.ParamSpec) => void;
            'notify::state': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {
            component: WebRTCICEComponent;
            gathering_state: WebRTCICEGatheringState;
            gatheringState: WebRTCICEGatheringState;
            state: WebRTCICEConnectionState;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class WebRTCICETransport extends Gst.Object {
        static $gtype: GObject.GType<WebRTCICETransport>;

        // Properties

        get component(): WebRTCICEComponent;
        get gathering_state(): WebRTCICEGatheringState;
        get gatheringState(): WebRTCICEGatheringState;
        get state(): WebRTCICEConnectionState;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WebRTCICETransport.SignalSignatures;

        // Fields

        role: WebRTCICERole;
        src: Gst.Element;
        sink: Gst.Element;

        // Constructors

        constructor(properties?: Partial<WebRTCICETransport.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof WebRTCICETransport.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebRTCICETransport.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WebRTCICETransport.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebRTCICETransport.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WebRTCICETransport.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WebRTCICETransport.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_gather_candidates(): boolean;

        // Methods

        /**
         * @param new_state
         */
        connection_state_change(new_state: WebRTCICEConnectionState | null): void;
        /**
         * @param new_state
         */
        gathering_state_change(new_state: WebRTCICEGatheringState | null): void;
        /**
         * @param stream_id
         * @param component
         * @param attr
         */
        new_candidate(stream_id: number, component: WebRTCICEComponent | null, attr: string): void;
        selected_pair_change(): void;
    }

    namespace WebRTCRTPReceiver {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::transport': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {
            transport: WebRTCDTLSTransport;
        }
    }

    /**
     * An object to track the receiving aspect of the stream
     *
     * Mostly matches the WebRTC RTCRtpReceiver interface.
     * @gir-type Class
     */
    class WebRTCRTPReceiver extends Gst.Object {
        static $gtype: GObject.GType<WebRTCRTPReceiver>;

        // Properties

        /**
         * The DTLS transport for this receiver
         * @since 1.20
         */
        get transport(): WebRTCDTLSTransport;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WebRTCRTPReceiver.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WebRTCRTPReceiver.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof WebRTCRTPReceiver.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebRTCRTPReceiver.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WebRTCRTPReceiver.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebRTCRTPReceiver.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WebRTCRTPReceiver.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WebRTCRTPReceiver.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace WebRTCRTPSender {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::priority': (pspec: GObject.ParamSpec) => void;
            'notify::transport': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {
            priority: WebRTCPriorityType;
            transport: WebRTCDTLSTransport;
        }
    }

    /**
     * An object to track the sending aspect of the stream
     *
     * Mostly matches the WebRTC RTCRtpSender interface.
     * @gir-type Class
     */
    class WebRTCRTPSender extends Gst.Object {
        static $gtype: GObject.GType<WebRTCRTPSender>;

        // Properties

        /**
         * The priority from which to set the DSCP field on packets
         * @since 1.20
         */
        get priority(): WebRTCPriorityType;
        set priority(val: WebRTCPriorityType);
        /**
         * The DTLS transport for this sender
         * @since 1.20
         */
        get transport(): WebRTCDTLSTransport;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WebRTCRTPSender.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WebRTCRTPSender.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof WebRTCRTPSender.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebRTCRTPSender.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WebRTCRTPSender.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebRTCRTPSender.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WebRTCRTPSender.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WebRTCRTPSender.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Sets the content of the IPv4 Type of Service (ToS), also known as DSCP
         * (Differentiated Services Code Point).
         * This also sets the Traffic Class field of IPv6.
         * @param priority The priority of this sender
         */
        set_priority(priority: WebRTCPriorityType | null): void;
    }

    namespace WebRTCRTPTransceiver {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::codec-preferences': (pspec: GObject.ParamSpec) => void;
            'notify::current-direction': (pspec: GObject.ParamSpec) => void;
            'notify::direction': (pspec: GObject.ParamSpec) => void;
            'notify::kind': (pspec: GObject.ParamSpec) => void;
            'notify::mid': (pspec: GObject.ParamSpec) => void;
            'notify::mlineindex': (pspec: GObject.ParamSpec) => void;
            'notify::receiver': (pspec: GObject.ParamSpec) => void;
            'notify::sender': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {
            codec_preferences: Gst.Caps;
            codecPreferences: Gst.Caps;
            current_direction: WebRTCRTPTransceiverDirection;
            currentDirection: WebRTCRTPTransceiverDirection;
            direction: WebRTCRTPTransceiverDirection;
            kind: WebRTCKind;
            mid: string;
            mlineindex: number;
            receiver: WebRTCRTPReceiver;
            sender: WebRTCRTPSender;
        }
    }

    /**
     * Mostly matches the WebRTC RTCRtpTransceiver interface.
     * @gir-type Class
     */
    abstract class WebRTCRTPTransceiver extends Gst.Object {
        static $gtype: GObject.GType<WebRTCRTPTransceiver>;

        // Properties

        /**
         * Caps representing the codec preferences.
         * @since 1.20
         */
        get codec_preferences(): Gst.Caps;
        set codec_preferences(val: Gst.Caps);
        /**
         * Caps representing the codec preferences.
         * @since 1.20
         */
        get codecPreferences(): Gst.Caps;
        set codecPreferences(val: Gst.Caps);
        /**
         * The transceiver's current directionality, or none if the
         * transceiver is stopped or has never participated in an exchange
         * of offers and answers. To change the transceiver's
         * directionality, set the value of the direction property.
         * @since 1.20
         */
        get current_direction(): WebRTCRTPTransceiverDirection;
        /**
         * The transceiver's current directionality, or none if the
         * transceiver is stopped or has never participated in an exchange
         * of offers and answers. To change the transceiver's
         * directionality, set the value of the direction property.
         * @since 1.20
         */
        get currentDirection(): WebRTCRTPTransceiverDirection;
        /**
         * Direction of the transceiver.
         * @since 1.18
         */
        get direction(): WebRTCRTPTransceiverDirection;
        set direction(val: WebRTCRTPTransceiverDirection);
        /**
         * The kind of media this transceiver transports
         * @since 1.20
         */
        get kind(): WebRTCKind;
        /**
         * The media ID of the m-line associated with this transceiver. This
         * association is established, when possible, whenever either a
         * local or remote description is applied. This field is null if
         * neither a local or remote description has been applied, or if its
         * associated m-line is rejected by either a remote offer or any
         * answer.
         * @since 1.20
         */
        get mid(): string;
        get mlineindex(): number;
        get receiver(): WebRTCRTPReceiver;
        get sender(): WebRTCRTPSender;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WebRTCRTPTransceiver.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WebRTCRTPTransceiver.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof WebRTCRTPTransceiver.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebRTCRTPTransceiver.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WebRTCRTPTransceiver.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebRTCRTPTransceiver.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WebRTCRTPTransceiver.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WebRTCRTPTransceiver.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace WebRTCSCTPTransport {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            'notify::max-channels': (pspec: GObject.ParamSpec) => void;
            'notify::max-message-size': (pspec: GObject.ParamSpec) => void;
            'notify::state': (pspec: GObject.ParamSpec) => void;
            'notify::transport': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gst.Object.ConstructorProps {
            max_channels: number;
            maxChannels: number;
            max_message_size: number;
            maxMessageSize: number;
            state: WebRTCSCTPTransportState;
            transport: WebRTCDTLSTransport;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class WebRTCSCTPTransport extends Gst.Object {
        static $gtype: GObject.GType<WebRTCSCTPTransport>;

        // Properties

        get max_channels(): number;
        get maxChannels(): number;
        get max_message_size(): number;
        get maxMessageSize(): number;
        get state(): WebRTCSCTPTransportState;
        get transport(): WebRTCDTLSTransport;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WebRTCSCTPTransport.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WebRTCSCTPTransport.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof WebRTCSCTPTransport.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebRTCSCTPTransport.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WebRTCSCTPTransport.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WebRTCSCTPTransport.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WebRTCSCTPTransport.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WebRTCSCTPTransport.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    /**
     * @gir-type Alias
     */
    type WebRTCDTLSTransportClass = typeof WebRTCDTLSTransport;
    /**
     * @gir-type Alias
     */
    type WebRTCDataChannelClass = typeof WebRTCDataChannel;
    /**
     * @gir-type Struct
     * @since 1.22
     */
    class WebRTCICECandidateStats {
        static $gtype: GObject.GType<WebRTCICECandidateStats>;

        // Fields

        ipaddr: string;
        port: number;
        stream_id: number;
        type: string;
        proto: string;
        relay_proto: string;
        prio: number;
        url: string;

        // Constructors

        constructor(
            properties?: Partial<{
                ipaddr: string;
                port: number;
                stream_id: number;
                type: string;
                proto: string;
                relay_proto: string;
                prio: number;
                url: string;
                _gst_reserved: any[];
            }>,
        );

        // Methods

        /**
         * @returns A copy of `stats`
         */
        copy(): WebRTCICECandidateStats;
        /**
         * Helper function to free {@link GstWebRTC.WebRTCICECandidateStats}
         */
        free(): void;
    }

    /**
     * @gir-type Alias
     */
    type WebRTCICEClass = typeof WebRTCICE;
    /**
     * @gir-type Alias
     */
    type WebRTCICEStreamClass = typeof WebRTCICEStream;
    /**
     * @gir-type Alias
     */
    type WebRTCICETransportClass = typeof WebRTCICETransport;
    /**
     * @gir-type Alias
     */
    type WebRTCRTPReceiverClass = typeof WebRTCRTPReceiver;
    /**
     * @gir-type Alias
     */
    type WebRTCRTPSenderClass = typeof WebRTCRTPSender;
    /**
     * @gir-type Alias
     */
    type WebRTCRTPTransceiverClass = typeof WebRTCRTPTransceiver;
    /**
     * @gir-type Alias
     */
    type WebRTCSCTPTransportClass = typeof WebRTCSCTPTransport;
    /**
     * See <https://www.w3.org/TR/webrtc/#rtcsessiondescription-class>
     * @gir-type Struct
     */
    class WebRTCSessionDescription {
        static $gtype: GObject.GType<WebRTCSessionDescription>;

        // Fields

        type: WebRTCSDPType;
        sdp: GstSdp.SDPMessage;

        // Constructors

        constructor(type: WebRTCSDPType, sdp: GstSdp.SDPMessage);

        static ['new'](type: WebRTCSDPType, sdp: GstSdp.SDPMessage): WebRTCSessionDescription;

        // Methods

        /**
         * @returns a new copy of `src`
         */
        copy(): WebRTCSessionDescription;
        /**
         * Free `desc` and all associated resources
         */
        free(): void;
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

export default GstWebRTC;

// END
