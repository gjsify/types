
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


    /**
     * @gir-type Enum
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
        NONE = 0,
        /**
         * balanced
         */
        BALANCED = 1,
        /**
         * max-compat
         */
        MAX_COMPAT = 2,
        /**
         * max-bundle
         */
        MAX_BUNDLE = 3,
    }


    /**
     * @gir-type Enum
     */
    export namespace WebRTCDTLSRole {
        export const $gtype: GObject.GType<WebRTCDTLSRole>;
    }

    /**
     * @gir-type Enum
     * @since 1.28
     */
    enum WebRTCDTLSRole {
        /**
         * client
         */
        CLIENT = 0,
        /**
         * server
         */
        SERVER = 1,
        /**
         * unknown
         */
        UNKNOWN = 2,
    }


    /**
     * @gir-type Enum
     */
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
        NONE = 0,
        /**
         * actpass
         */
        ACTPASS = 1,
        /**
         * sendonly
         */
        ACTIVE = 2,
        /**
         * recvonly
         */
        PASSIVE = 3,
    }


    /**
     * @gir-type Enum
     */
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
        NEW = 0,
        /**
         * closed
         */
        CLOSED = 1,
        /**
         * failed
         */
        FAILED = 2,
        /**
         * connecting
         */
        CONNECTING = 3,
        /**
         * connected
         */
        CONNECTED = 4,
    }


    /**
     * @gir-type Enum
     */
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
        CONNECTING = 1,
        /**
         * open
         */
        OPEN = 2,
        /**
         * closing
         */
        CLOSING = 3,
        /**
         * closed
         */
        CLOSED = 4,
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
        /**
         * @since 1.20
         */
        static quark(): GLib.Quark;
    }


    /**
     * @gir-type Enum
     */
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
        NONE = 0,
        /**
         * ulpfec + red
         */
        ULP_RED = 1,
    }


    /**
     * @gir-type Enum
     */
    export namespace WebRTCICECandidateProtocolType {
        export const $gtype: GObject.GType<WebRTCICECandidateProtocolType>;
    }

    /**
     * @gir-type Enum
     * @since 1.28
     */
    enum WebRTCICECandidateProtocolType {
        TCP = 0,
        UDP = 1,
    }


    /**
     * @gir-type Enum
     */
    export namespace WebRTCICECandidateType {
        export const $gtype: GObject.GType<WebRTCICECandidateType>;
    }

    /**
     * @gir-type Enum
     * @since 1.28
     */
    enum WebRTCICECandidateType {
        /**
         * The candidate is a host candidate, whose
         *   IP address as specified in the RTCIceCandidate.address property is in fact the
         *   true address of the remote peer.
         */
        HOST = 0,
        /**
         * The candidate is a server
         *   reflexive candidate; the ip and port are a binding allocated by a NAT for an
         *   agent when it sent a packet through the NAT to a server. They can be learned by
         *   the STUN server and TURN server to represent the candidate's peer anonymously.
         */
        SERVER_REFLEXIVE = 1,
        /**
         * The candidate is a peer
         *   reflexive candidate; the ip and port are a binding allocated by a NAT when it
         *   sent a STUN request to represent the candidate's peer anonymously.
         */
        PEER_REFLEXIVE = 2,
        /**
         * The candidate is a relay candidate,
         *   obtained from a TURN server. The relay candidate's IP address is an address the
         *   TURN server uses to forward the media between the two peers.
         */
        RELAYED = 3,
    }


    /**
     * @gir-type Enum
     */
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
        RTP = 0,
        /**
         * RTCP component
         */
        RTCP = 1,
    }


    /**
     * @gir-type Enum
     */
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
        NEW = 0,
        /**
         * checking
         */
        CHECKING = 1,
        /**
         * connected
         */
        CONNECTED = 2,
        /**
         * completed
         */
        COMPLETED = 3,
        /**
         * failed
         */
        FAILED = 4,
        /**
         * disconnected
         */
        DISCONNECTED = 5,
        /**
         * closed
         */
        CLOSED = 6,
    }


    /**
     * @gir-type Enum
     */
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
        NEW = 0,
        /**
         * gathering
         */
        GATHERING = 1,
        /**
         * complete
         */
        COMPLETE = 2,
    }


    /**
     * @gir-type Enum
     */
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
        CONTROLLED = 0,
        /**
         * controlling
         */
        CONTROLLING = 1,
    }


    /**
     * @gir-type Enum
     */
    export namespace WebRTCICETcpCandidateType {
        export const $gtype: GObject.GType<WebRTCICETcpCandidateType>;
    }

    /**
     * @gir-type Enum
     * @since 1.28
     */
    enum WebRTCICETcpCandidateType {
        /**
         * An "active" TCP candidate is one for which the transport
         *                                            will attempt to open an outbound connection but will not
         *                                            receive incoming connection requests.
         */
        ACTIVE = 0,
        /**
         * A "passive" TCP candidate is one for which the transport
         *                                             will receive incoming connection attempts but not attempt
         *                                             a connection.
         */
        PASSIVE = 1,
        /**
         * An "so" candidate is one for which the transport will attempt
         *                                        to open a connection simultaneously with its peer.
         */
        SO = 2,
        /**
         * Value used for non-TCP candidate type.
         */
        NONE = 3,
    }


    /**
     * @gir-type Enum
     */
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
        ALL = 0,
        /**
         * relay
         */
        RELAY = 1,
    }


    /**
     * @gir-type Enum
     */
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
        UNKNOWN = 0,
        /**
         * Kind is audio
         */
        AUDIO = 1,
        /**
         * Kind is video
         */
        VIDEO = 2,
    }


    /**
     * @gir-type Enum
     */
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
        NEW = 0,
        /**
         * connecting
         */
        CONNECTING = 1,
        /**
         * connected
         */
        CONNECTED = 2,
        /**
         * disconnected
         */
        DISCONNECTED = 3,
        /**
         * failed
         */
        FAILED = 4,
        /**
         * closed
         */
        CLOSED = 5,
    }


    /**
     * @gir-type Enum
     */
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
        VERY_LOW = 1,
        /**
         * low
         */
        LOW = 2,
        /**
         * medium
         */
        MEDIUM = 3,
        /**
         * high
         */
        HIGH = 4,
    }


    /**
     * @gir-type Enum
     */
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
        NONE = 0,
        /**
         * inactive
         */
        INACTIVE = 1,
        /**
         * sendonly
         */
        SENDONLY = 2,
        /**
         * recvonly
         */
        RECVONLY = 3,
        /**
         * sendrecv
         */
        SENDRECV = 4,
    }


    /**
     * @gir-type Enum
     */
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
        NEW = 0,
        /**
         * connecting
         */
        CONNECTING = 1,
        /**
         * connected
         */
        CONNECTED = 2,
        /**
         * closed
         */
        CLOSED = 3,
    }


    /**
     * @gir-type Enum
     */
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
        OFFER = 1,
        /**
         * pranswer
         */
        PRANSWER = 2,
        /**
         * answer
         */
        ANSWER = 3,
        /**
         * rollback
         */
        ROLLBACK = 4,
    }


    /**
     * @gir-type Enum
     */
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
        STABLE = 0,
        /**
         * closed
         */
        CLOSED = 1,
        /**
         * have-local-offer
         */
        HAVE_LOCAL_OFFER = 2,
        /**
         * have-remote-offer
         */
        HAVE_REMOTE_OFFER = 3,
        /**
         * have-local-pranswer
         */
        HAVE_LOCAL_PRANSWER = 4,
        /**
         * have-remote-pranswer
         */
        HAVE_REMOTE_PRANSWER = 5,
    }


    /**
     * @gir-type Enum
     */
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
        CODEC = 1,
        /**
         * inbound-rtp
         */
        INBOUND_RTP = 2,
        /**
         * outbound-rtp
         */
        OUTBOUND_RTP = 3,
        /**
         * remote-inbound-rtp
         */
        REMOTE_INBOUND_RTP = 4,
        /**
         * remote-outbound-rtp
         */
        REMOTE_OUTBOUND_RTP = 5,
        /**
         * csrc
         */
        CSRC = 6,
        /**
         * peer-connection
         */
        PEER_CONNECTION = 7,
        /**
         * data-channel
         */
        DATA_CHANNEL = 8,
        /**
         * stream
         */
        STREAM = 9,
        /**
         * transport
         */
        TRANSPORT = 10,
        /**
         * candidate-pair
         */
        CANDIDATE_PAIR = 11,
        /**
         * local-candidate
         */
        LOCAL_CANDIDATE = 12,
        /**
         * remote-candidate
         */
        REMOTE_CANDIDATE = 13,
        /**
         * certificate
         */
        CERTIFICATE = 14,
    }


    /**
     * @since 1.20
     */
    function webrtc_error_quark(): GLib.Quark;

    /**
     * @param type a {@link GstWebRTC.WebRTCSDPType}
     * @returns the string representation of `type` or "unknown" when `type` is not      recognized.
     */
    function webrtc_sdp_type_to_string(type: WebRTCSDPType): string;

    /**
     * @gir-type Callback
     */
    interface WebRTCICEOnCandidateFunc {
        (ice: WebRTCICE, stream_id: number, candidate: string): void;
    }

    namespace WebRTCDTLSTransport {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::certificate": (pspec: GObject.ParamSpec) => void;
            "notify::client": (pspec: GObject.ParamSpec) => void;
            "notify::remote-certificate": (pspec: GObject.ParamSpec) => void;
            "notify::session-id": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
            "notify::transport": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
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
        /**
         * @default null
         */
        get certificate(): string;
        set certificate(val: string);

        /**
         * @default false
         */
        get client(): boolean;
        set client(val: boolean);

        /**
         * @read-only
         * @default null
         */
        get remote_certificate(): string;

        /**
         * @read-only
         * @default null
         */
        get remoteCertificate(): string;

        /**
         * @construct-only
         * @default 0
         */
        get session_id(): number;

        /**
         * @construct-only
         * @default 0
         */
        get sessionId(): number;

        /**
         * @read-only
         * @default GstWebRTC.WebRTCDTLSTransportState.NEW
         */
        get state(): WebRTCDTLSTransportState;

        /**
         * @read-only
         */
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
        connect<K extends keyof WebRTCDTLSTransport.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebRTCDTLSTransport.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof WebRTCDTLSTransport.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebRTCDTLSTransport.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof WebRTCDTLSTransport.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WebRTCDTLSTransport.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace WebRTCDataChannel {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Close the data channel
             * @signal
             * @action
             * @run-last
             */
            close: () => void;
            /**
             * @signal
             * @run-last
             */
            "on-buffered-amount-low": () => void;
            /**
             * @signal
             * @run-last
             */
            "on-close": () => void;
            /**
             * @signal
             * @run-last
             */
            "on-error": (error: GLib.Error) => void;
            /**
             * @signal
             * @run-last
             */
            "on-message-data": (data: GLib.Bytes | null) => void;
            /**
             * @signal
             * @run-last
             */
            "on-message-string": (data: string | null) => void;
            /**
             * @signal
             * @run-last
             */
            "on-open": () => void;
            /**
             * @signal
             * @deprecated since 1.22: Use `gst_webrtc_data_channel_send_data_full()` instead
             * @action
             * @run-last
             */
            "send-data": (data: GLib.Bytes | null) => void;
            /**
             * @signal
             * @deprecated since 1.22: Use `gst_webrtc_data_channel_send_string_full()` instead
             * @action
             * @run-last
             */
            "send-string": (data: string | null) => void;
            "notify::buffered-amount": (pspec: GObject.ParamSpec) => void;
            "notify::buffered-amount-low-threshold": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::max-packet-lifetime": (pspec: GObject.ParamSpec) => void;
            "notify::max-retransmits": (pspec: GObject.ParamSpec) => void;
            "notify::negotiated": (pspec: GObject.ParamSpec) => void;
            "notify::ordered": (pspec: GObject.ParamSpec) => void;
            "notify::priority": (pspec: GObject.ParamSpec) => void;
            "notify::protocol": (pspec: GObject.ParamSpec) => void;
            "notify::ready-state": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffered_amount: bigint | number;
            bufferedAmount: bigint | number;
            buffered_amount_low_threshold: bigint | number;
            bufferedAmountLowThreshold: bigint | number;
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
        /**
         * @read-only
         * @default 0
         */
        get buffered_amount(): number;

        /**
         * @read-only
         * @default 0
         */
        get bufferedAmount(): number;

        /**
         * @default 0
         */
        get buffered_amount_low_threshold(): number;
        set buffered_amount_low_threshold(val: bigint | number);

        /**
         * @default 0
         */
        get bufferedAmountLowThreshold(): number;
        set bufferedAmountLowThreshold(val: bigint | number);

        /**
         * @construct-only
         * @default -1
         */
        get id(): number;

        /**
         * @construct-only
         * @default null
         */
        get label(): string;

        /**
         * @construct-only
         * @default -1
         */
        get max_packet_lifetime(): number;

        /**
         * @construct-only
         * @default -1
         */
        get maxPacketLifetime(): number;

        /**
         * @construct-only
         * @default 0
         */
        get max_retransmits(): number;

        /**
         * @construct-only
         * @default 0
         */
        get maxRetransmits(): number;

        /**
         * @construct-only
         * @default false
         */
        get negotiated(): boolean;

        /**
         * @construct-only
         * @default false
         */
        get ordered(): boolean;

        /**
         * @construct-only
         * @default GstWebRTC.WebRTCPriorityType.LOW
         */
        get priority(): WebRTCPriorityType;

        /**
         * @construct-only
         */
        get protocol(): string;

        /**
         * @read-only
         * @default GstWebRTC.WebRTCDataChannelState.CONNECTING
         */
        get ready_state(): WebRTCDataChannelState;

        /**
         * @read-only
         * @default GstWebRTC.WebRTCDataChannelState.CONNECTING
         */
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
        connect<K extends keyof WebRTCDataChannel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebRTCDataChannel.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof WebRTCDataChannel.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebRTCDataChannel.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof WebRTCDataChannel.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WebRTCDataChannel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Close the `channel`.
         */
        close(): void;

        /**
         * Send `data` as a data message over `channel`.
         * @param data a {@link GLib.Bytes} or `null`
         * @deprecated since 1.22: Use `gst_webrtc_data_channel_send_data_full()` instead
         */
        send_data(data: GLib.Bytes | Uint8Array | null): void;

        /**
         * Send `data` as a data message over `channel`.
         * @param data a {@link GLib.Bytes} or `null`
         * @returns TRUE if `channel` is open and data could be queued
         * @since 1.22
         * @throws GLib.Error
         */
        send_data_full(data: GLib.Bytes | Uint8Array | null): boolean;

        /**
         * Send `str` as a string message over `channel`.
         * @param str a string or `null`
         * @deprecated since 1.22: Use `gst_webrtc_data_channel_send_string_full()` instead
         */
        send_string(str: string | null): void;

        /**
         * Send `str` as a string message over `channel`.
         * @param str a string or `null`
         * @returns TRUE if `channel` is open and data could be queued
         * @since 1.22
         * @throws GLib.Error
         */
        send_string_full(str: string | null): boolean;
    }


    namespace WebRTCICE {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            /**
             * Add a local IP address to use for ICE candidate gathering.  If none
             * are supplied, they will be discovered automatically. Calling this signal
             * stops automatic ICE gathering.
             * @signal
             * @action
             * @run-last
             */
            "add-local-ip-address": (address: string) => boolean | void;
            "notify::max-rtp-port": (pspec: GObject.ParamSpec) => void;
            "notify::min-rtp-port": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
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
         * @default 65535
         */
        get max_rtp_port(): number;
        set max_rtp_port(val: number);

        /**
         * Maximum port for local rtp port range.
         * min-rtp-port must be <= max-rtp-port
         * @since 1.20
         * @default 65535
         */
        get maxRtpPort(): number;
        set maxRtpPort(val: number);

        /**
         * Minimum port for local rtp port range.
         * min-rtp-port must be <= max-rtp-port
         * @since 1.20
         * @default 0
         */
        get min_rtp_port(): number;
        set min_rtp_port(val: number);

        /**
         * Minimum port for local rtp port range.
         * min-rtp-port must be <= max-rtp-port
         * @since 1.20
         * @default 0
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
        connect<K extends keyof WebRTCICE.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebRTCICE.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof WebRTCICE.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebRTCICE.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof WebRTCICE.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WebRTCICE.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param stream The {@link GstWebRTC.WebRTCICEStream}
         * @param candidate The ICE candidate
         * @param promise A {@link Gst.Promise} for task notifications (Since: 1.24)
         * @since 1.22
         * @virtual
         */
        vfunc_add_candidate(stream: WebRTCICEStream, candidate: string, promise: Gst.Promise | null): void;

        /**
         * @param session_id The session id
         * @since 1.22
         * @virtual
         */
        vfunc_add_stream(session_id: number): WebRTCICEStream | null;

        /**
         * @param uri URI of the TURN server
         * @since 1.22
         * @virtual
         */
        vfunc_add_turn_server(uri: string): boolean;

        /**
         * Invoke the close procedure as specified in
         * https://www.w3.org/TR/webrtc/#dom-rtcpeerconnection-close.
         * @param promise a {@link Gst.Promise} to be notified when the task is complete.
         * @since 1.28
         * @virtual
         */
        vfunc_close(promise: Gst.Promise | null): void;

        /**
         * @param stream The {@link GstWebRTC.WebRTCICEStream}
         * @param component The {@link GstWebRTC.WebRTCICEComponent}
         * @since 1.22
         * @virtual
         */
        vfunc_find_transport(stream: WebRTCICEStream, component: WebRTCICEComponent): WebRTCICETransport | null;

        /**
         * @param stream The {@link GstWebRTC.WebRTCICEStream}
         * @since 1.22
         * @virtual
         */
        vfunc_gather_candidates(stream: WebRTCICEStream): boolean;

        /**
         * Get HTTP Proxy to be used when connecting to TURN server.
         * @since 1.22
         * @virtual
         */
        vfunc_get_http_proxy(): string;

        /**
         * @since 1.22
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
         * @since 1.22
         * @deprecated since 1.28: Use `gst_webrtc_ice_transport_get_selected_candidate_pair()`.
         * @virtual
         */
        vfunc_get_selected_pair(stream: WebRTCICEStream): [boolean, WebRTCICECandidateStats, WebRTCICECandidateStats];

        /**
         * @since 1.22
         * @virtual
         */
        vfunc_get_stun_server(): string | null;

        /**
         * @since 1.22
         * @virtual
         */
        vfunc_get_turn_server(): string | null;

        /**
         * @param force_relay TRUE to enable force relay
         * @since 1.22
         * @virtual
         */
        vfunc_set_force_relay(force_relay: boolean): void;

        /**
         * Set HTTP Proxy to be used when connecting to TURN server.
         * @param uri URI of the HTTP proxy of the form   http://[username:password@]hostname[:port][?alpn=<alpn>]
         * @since 1.22
         * @virtual
         */
        vfunc_set_http_proxy(uri: string): void;

        /**
         * @param controller TRUE to set as controller
         * @since 1.22
         * @virtual
         */
        vfunc_set_is_controller(controller: boolean): void;

        /**
         * @param stream The {@link GstWebRTC.WebRTCICEStream}
         * @param ufrag ICE username
         * @param pwd ICE password
         * @since 1.22
         * @virtual
         */
        vfunc_set_local_credentials(stream: WebRTCICEStream, ufrag: string, pwd: string): boolean;

        /**
         * @param func The {@link GstWebRTC.WebRTCICEOnCandidateFunc} callback function
         * @since 1.22
         * @virtual
         */
        vfunc_set_on_ice_candidate(func: WebRTCICEOnCandidateFunc): void;

        /**
         * @param stream The {@link GstWebRTC.WebRTCICEStream}
         * @param ufrag ICE username
         * @param pwd ICE password
         * @since 1.22
         * @virtual
         */
        vfunc_set_remote_credentials(stream: WebRTCICEStream, ufrag: string, pwd: string): boolean;

        /**
         * @param uri URI of the STUN server
         * @since 1.22
         * @virtual
         */
        vfunc_set_stun_server(uri: string | null): void;

        /**
         * @param stream The {@link GstWebRTC.WebRTCICEStream}
         * @param tos ToS to be set
         * @since 1.22
         * @virtual
         */
        vfunc_set_tos(stream: WebRTCICEStream, tos: number): void;

        /**
         * @param uri URI of the TURN sever
         * @since 1.22
         * @virtual
         */
        vfunc_set_turn_server(uri: string | null): void;

        // Methods
        /**
         * @param stream The {@link GstWebRTC.WebRTCICEStream}
         * @param candidate The ICE candidate
         * @param promise A {@link Gst.Promise} for task notifications (Since: 1.24)
         * @since 1.22
         */
        add_candidate(stream: WebRTCICEStream, candidate: string, promise: Gst.Promise | null): void;

        /**
         * @param session_id The session id
         * @returns The {@link GstWebRTC.WebRTCICEStream}, or `null`
         * @since 1.22
         */
        add_stream(session_id: number): WebRTCICEStream | null;

        /**
         * @param uri URI of the TURN server
         * @returns FALSE on error, TRUE otherwise
         * @since 1.22
         */
        add_turn_server(uri: string): boolean;

        /**
         * Invoke the close procedure as specified in
         * https://www.w3.org/TR/webrtc/#dom-rtcpeerconnection-close.
         * @param promise a {@link Gst.Promise} to be notified when the task is complete.
         * @since 1.28
         */
        close(promise: Gst.Promise | null): void;

        /**
         * @param stream The {@link GstWebRTC.WebRTCICEStream}
         * @param component The {@link GstWebRTC.WebRTCICEComponent}
         * @returns The {@link GstWebRTC.WebRTCICETransport}, or `null`
         * @since 1.22
         */
        find_transport(stream: WebRTCICEStream, component: WebRTCICEComponent): WebRTCICETransport | null;

        /**
         * @param stream The {@link GstWebRTC.WebRTCICEStream}
         * @returns FALSE on error, TRUE otherwise
         * @since 1.22
         */
        gather_candidates(stream: WebRTCICEStream): boolean;

        /**
         * @returns URI of the HTTP proxy of the form   http://[username:password@]hostname[:port][?alpn=<alpn>] Get HTTP Proxy to be used when connecting to TURN server.
         * @since 1.22
         */
        get_http_proxy(): string;

        /**
         * @returns TRUE if set as controller, FALSE otherwise
         * @since 1.22
         */
        get_is_controller(): boolean;

        /**
         * @param stream The {@link GstWebRTC.WebRTCICEStream}
         * @returns List of local candidates
         * @since 1.22
         */
        get_local_candidates(stream: WebRTCICEStream): WebRTCICECandidateStats[];

        /**
         * @param stream The {@link GstWebRTC.WebRTCICEStream}
         * @returns List of remote candidates
         * @since 1.22
         */
        get_remote_candidates(stream: WebRTCICEStream): WebRTCICECandidateStats[];

        /**
         * @param stream The {@link GstWebRTC.WebRTCICEStream}
         * @returns FALSE on failure, otherwise `local_stats` `remote_stats` will be set
         * @since 1.22
         * @deprecated since 1.28: Use `gst_webrtc_ice_transport_get_selected_candidate_pair()`.
         */
        get_selected_pair(stream: WebRTCICEStream): [boolean, WebRTCICECandidateStats, WebRTCICECandidateStats];

        /**
         * @returns URI of the STUN sever
         * @since 1.22
         */
        get_stun_server(): string | null;

        /**
         * @returns URI of the TURN sever
         * @since 1.22
         */
        get_turn_server(): string | null;

        /**
         * @param force_relay TRUE to enable force relay
         * @since 1.22
         */
        set_force_relay(force_relay: boolean): void;

        /**
         * Set HTTP Proxy to be used when connecting to TURN server.
         * @param uri URI of the HTTP proxy of the form   http://[username:password@]hostname[:port][?alpn=<alpn>]
         * @since 1.22
         */
        set_http_proxy(uri: string): void;

        /**
         * @param controller TRUE to set as controller
         * @since 1.22
         */
        set_is_controller(controller: boolean): void;

        /**
         * @param stream The {@link GstWebRTC.WebRTCICEStream}
         * @param ufrag ICE username
         * @param pwd ICE password
         * @returns FALSE on error, TRUE otherwise
         * @since 1.22
         */
        set_local_credentials(stream: WebRTCICEStream, ufrag: string, pwd: string): boolean;

        /**
         * @param func The {@link GstWebRTC.WebRTCICEOnCandidateFunc} callback function
         * @since 1.22
         */
        set_on_ice_candidate(func: WebRTCICEOnCandidateFunc): void;

        /**
         * @param stream The {@link GstWebRTC.WebRTCICEStream}
         * @param ufrag ICE username
         * @param pwd ICE password
         * @returns FALSE on error, TRUE otherwise
         * @since 1.22
         */
        set_remote_credentials(stream: WebRTCICEStream, ufrag: string, pwd: string): boolean;

        /**
         * @param uri URI of the STUN server
         * @since 1.22
         */
        set_stun_server(uri: string | null): void;

        /**
         * @param stream The {@link GstWebRTC.WebRTCICEStream}
         * @param tos ToS to be set
         * @since 1.22
         */
        set_tos(stream: WebRTCICEStream, tos: number): void;

        /**
         * @param uri URI of the TURN sever
         * @since 1.22
         */
        set_turn_server(uri: string | null): void;
    }


    namespace WebRTCICEStream {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::stream-id": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
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
        /**
         * @construct-only
         * @default 0
         */
        get stream_id(): number;

        /**
         * @construct-only
         * @default 0
         */
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
        connect<K extends keyof WebRTCICEStream.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebRTCICEStream.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof WebRTCICEStream.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebRTCICEStream.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof WebRTCICEStream.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WebRTCICEStream.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param component The {@link GstWebRTC.WebRTCICEComponent}
         * @since 1.22
         * @virtual
         */
        vfunc_find_transport(component: WebRTCICEComponent): WebRTCICETransport | null;

        /**
         * @since 1.22
         * @virtual
         */
        vfunc_gather_candidates(): boolean;

        // Methods
        /**
         * @param component The {@link GstWebRTC.WebRTCICEComponent}
         * @returns the {@link GstWebRTC.WebRTCICETransport}, or `null`
         * @since 1.22
         */
        find_transport(component: WebRTCICEComponent): WebRTCICETransport | null;

        /**
         * @returns FALSE on error, TRUE otherwise
         * @since 1.22
         */
        gather_candidates(): boolean;
    }


    namespace WebRTCICETransport {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            "on-new-candidate": (object: string) => void;
            /**
             * @signal
             * @run-last
             */
            "on-selected-candidate-pair-change": () => void;
            "notify::component": (pspec: GObject.ParamSpec) => void;
            "notify::gathering-state": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
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
        /**
         * @construct-only
         * @default GstWebRTC.WebRTCICEComponent.RTP
         */
        get component(): WebRTCICEComponent;

        /**
         * @read-only
         * @default GstWebRTC.WebRTCICEGatheringState.NEW
         */
        get gathering_state(): WebRTCICEGatheringState;

        /**
         * @read-only
         * @default GstWebRTC.WebRTCICEGatheringState.NEW
         */
        get gatheringState(): WebRTCICEGatheringState;

        /**
         * @read-only
         * @default GstWebRTC.WebRTCICEConnectionState.NEW
         */
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
        connect<K extends keyof WebRTCICETransport.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebRTCICETransport.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof WebRTCICETransport.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebRTCICETransport.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof WebRTCICETransport.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WebRTCICETransport.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_gather_candidates(): boolean;

        /**
         * See also
         * https://w3c.github.io/webrtc-pc/#dom-rtcicetransport-getselectedcandidatepair
         * @since 1.28
         * @virtual
         */
        vfunc_get_selected_candidate_pair(): WebRTCICECandidatePair | null;

        // Methods
        /**
         * @param new_state 
         */
        connection_state_change(new_state: WebRTCICEConnectionState): void;

        /**
         * @param new_state 
         */
        gathering_state_change(new_state: WebRTCICEGatheringState): void;

        /**
         * See also
         * https://w3c.github.io/webrtc-pc/#dom-rtcicetransport-getselectedcandidatepair
         * @returns A {@link GstWebRTC.WebRTCICECandidatePair}
         * @since 1.28
         */
        get_selected_candidate_pair(): WebRTCICECandidatePair | null;

        /**
         * @param stream_id 
         * @param component 
         * @param attr 
         */
        new_candidate(stream_id: number, component: WebRTCICEComponent, attr: string): void;

        selected_pair_change(): void;
    }


    namespace WebRTCRTPReceiver {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::transport": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
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
         * @read-only
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
        connect<K extends keyof WebRTCRTPReceiver.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebRTCRTPReceiver.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof WebRTCRTPReceiver.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebRTCRTPReceiver.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof WebRTCRTPReceiver.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WebRTCRTPReceiver.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace WebRTCRTPSender {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::priority": (pspec: GObject.ParamSpec) => void;
            "notify::transport": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
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
         * @default GstWebRTC.WebRTCPriorityType.LOW
         */
        get priority(): WebRTCPriorityType;
        set priority(val: WebRTCPriorityType);

        /**
         * The DTLS transport for this sender
         * @since 1.20
         * @read-only
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
        connect<K extends keyof WebRTCRTPSender.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebRTCRTPSender.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof WebRTCRTPSender.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebRTCRTPSender.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof WebRTCRTPSender.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WebRTCRTPSender.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Sets the content of the IPv4 Type of Service (ToS), also known as DSCP
         * (Differentiated Services Code Point).
         * This also sets the Traffic Class field of IPv6.
         * @param priority The priority of this sender
         * @since 1.20
         */
        set_priority(priority: WebRTCPriorityType): void;
    }


    namespace WebRTCRTPTransceiver {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::codec-preferences": (pspec: GObject.ParamSpec) => void;
            "notify::current-direction": (pspec: GObject.ParamSpec) => void;
            "notify::direction": (pspec: GObject.ParamSpec) => void;
            "notify::kind": (pspec: GObject.ParamSpec) => void;
            "notify::mid": (pspec: GObject.ParamSpec) => void;
            "notify::mlineindex": (pspec: GObject.ParamSpec) => void;
            "notify::receiver": (pspec: GObject.ParamSpec) => void;
            "notify::sender": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
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
         * @read-only
         * @default GstWebRTC.WebRTCRTPTransceiverDirection.NONE
         */
        get current_direction(): WebRTCRTPTransceiverDirection;

        /**
         * The transceiver's current directionality, or none if the
         * transceiver is stopped or has never participated in an exchange
         * of offers and answers. To change the transceiver's
         * directionality, set the value of the direction property.
         * @since 1.20
         * @read-only
         * @default GstWebRTC.WebRTCRTPTransceiverDirection.NONE
         */
        get currentDirection(): WebRTCRTPTransceiverDirection;

        /**
         * Direction of the transceiver.
         * @since 1.18
         * @default GstWebRTC.WebRTCRTPTransceiverDirection.NONE
         */
        get direction(): WebRTCRTPTransceiverDirection;
        set direction(val: WebRTCRTPTransceiverDirection);

        /**
         * The kind of media this transceiver transports
         * @since 1.20
         * @read-only
         * @default GstWebRTC.WebRTCKind.UNKNOWN
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
         * @read-only
         * @default null
         */
        get mid(): string;

        /**
         * @construct-only
         * @default 0
         */
        get mlineindex(): number;

        /**
         * @construct-only
         */
        get receiver(): WebRTCRTPReceiver;

        /**
         * @construct-only
         */
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
        connect<K extends keyof WebRTCRTPTransceiver.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebRTCRTPTransceiver.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof WebRTCRTPTransceiver.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebRTCRTPTransceiver.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof WebRTCRTPTransceiver.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WebRTCRTPTransceiver.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace WebRTCSCTPTransport {
        // Signal signatures
        interface SignalSignatures extends Gst.Object.SignalSignatures {
            "notify::max-channels": (pspec: GObject.ParamSpec) => void;
            "notify::max-message-size": (pspec: GObject.ParamSpec) => void;
            "notify::state": (pspec: GObject.ParamSpec) => void;
            "notify::transport": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gst.Object.ConstructorProps {
            max_channels: number;
            maxChannels: number;
            max_message_size: bigint | number;
            maxMessageSize: bigint | number;
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
        /**
         * @read-only
         * @default 0
         */
        get max_channels(): number;

        /**
         * @read-only
         * @default 0
         */
        get maxChannels(): number;

        /**
         * @read-only
         * @default 0
         */
        get max_message_size(): number;

        /**
         * @read-only
         * @default 0
         */
        get maxMessageSize(): number;

        /**
         * @read-only
         * @default GstWebRTC.WebRTCSCTPTransportState.NEW
         */
        get state(): WebRTCSCTPTransportState;

        /**
         * @read-only
         */
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
        connect<K extends keyof WebRTCSCTPTransport.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebRTCSCTPTransport.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof WebRTCSCTPTransport.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, WebRTCSCTPTransport.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof WebRTCSCTPTransport.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<WebRTCSCTPTransport.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
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
     * @since 1.28
     */
    class WebRTCICECandidate {
        static $gtype: GObject.GType<WebRTCICECandidate>;

        // Fields
        candidate: string;

        component: number;

        sdp_mid: string;

        sdp_mline_index: number;

        stats: WebRTCICECandidateStats;

        // Constructors

        constructor(properties?: Partial<{
            candidate: string;
            component: number;
            sdp_mid: string;
            sdp_mline_index: number;
            _gst_reserved: null[];
        }>);

        // Methods
        /**
         * @returns A copy of `candidate`
         * @since 1.28
         */
        copy(): WebRTCICECandidate;

        /**
         * Helper function to free {@link GstWebRTC.WebRTCICECandidate}
         * @since 1.28
         */
        free(): void;
    }


    /**
     * @gir-type Struct
     * @since 1.28
     */
    class WebRTCICECandidatePair {
        static $gtype: GObject.GType<WebRTCICECandidatePair>;

        // Fields
        local: WebRTCICECandidate;

        remote: WebRTCICECandidate;

        // Constructors
        constructor(properties?: Partial<{}>);

        // Methods
        /**
         * @returns A copy of `pair`
         * @since 1.28
         */
        copy(): WebRTCICECandidatePair;

        /**
         * Helper function to free {@link GstWebRTC.WebRTCICECandidatePair}
         * @since 1.28
         */
        free(): void;
    }


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

        constructor(properties?: Partial<{
            ipaddr: string;
            port: number;
            stream_id: number;
            type: string;
            proto: string;
            relay_proto: string;
            prio: number;
            url: string;
        }>);

        // Methods
        /**
         * @returns A copy of `stats`
         * @since 1.22
         */
        copy(): WebRTCICECandidateStats;

        /**
         * Helper function to free {@link GstWebRTC.WebRTCICECandidateStats}
         * @since 1.22
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

        static ["new"](type: WebRTCSDPType, sdp: GstSdp.SDPMessage): WebRTCSessionDescription;

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
