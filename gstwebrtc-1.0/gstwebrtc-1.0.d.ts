
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * GstWebRTC-1.0
 */

import type GstSdp from '@girs/gstsdp-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GstWebRTC {

/**
 * See https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-24#section-4.1.1
 * for more information.
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
/**
 * See <http://w3c.github.io/webrtc-pc/#dom-rtcdatachannelstate>
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
 */
enum WebRTCError {
    /**
     * data-channel-failure
     */
    DATA_CHANNEL_FAILURE,
    /**
     * dtls-failure
     */
    DTLS_FAILURE,
    /**
     * fingerprint-failure
     */
    FINGERPRINT_FAILURE,
    /**
     * sctp-failure
     */
    SCTP_FAILURE,
    /**
     * sdp-syntax-error
     */
    SDP_SYNTAX_ERROR,
    /**
     * hardware-encoder-not-available
     */
    HARDWARE_ENCODER_NOT_AVAILABLE,
    /**
     * encoder-error
     */
    ENCODER_ERROR,
    /**
     * invalid-state (part of WebIDL specification)
     */
    INVALID_STATE,
    /**
     * GStreamer-specific failure, not matching any other value from the specification
     */
    INTERNAL_FAILURE,
    /**
     * invalid-modification (part of WebIDL specification)
     */
    INVALID_MODIFICATION,
    /**
     * type-error (maps to JavaScript TypeError)
     */
    TYPE_ERROR,
}
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
/**
 * See <http://w3c.github.io/webrtc-pc/#dom-rtciceconnectionstate>
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
/**
 * See <http://w3c.github.io/webrtc-pc/#dom-rtcicegatheringstate>
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
/**
 * See https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-24#section-4.1.1
 * for more information.
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
/**
 * https://w3c.github.io/mediacapture-main/#dom-mediastreamtrack-kind
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
/**
 * See <http://w3c.github.io/webrtc-pc/#dom-rtcpeerconnectionstate>
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
/**
 * See <http://w3c.github.io/webrtc-pc/#dom-rtcprioritytype>
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
/**
 * See <http://w3c.github.io/webrtc-pc/#dom-rtcsctptransportstate>
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
/**
 * See <http://w3c.github.io/webrtc-pc/#rtcsdptype>
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
/**
 * See <http://w3c.github.io/webrtc-pc/#dom-rtcsignalingstate>
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
/**
 * See <https://w3c.github.io/webrtc-stats/#dom-rtcstatstype>
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
function webrtc_error_quark(): GLib.Quark
function webrtc_sdp_type_to_string(type: WebRTCSDPType): string | null
/**
 * Callback function to be triggered on discovery of a new candidate
 * @callback 
 * @param ice The #GstWebRTCICE
 * @param stream_id The stream id
 * @param candidate The discovered candidate
 */
interface WebRTCICEOnCandidateFunc {
    (ice: WebRTCICE, stream_id: number, candidate: string | null): void
}
module WebRTCDTLSTransport {

    // Constructor properties interface

    interface ConstructorProperties extends Gst.Object.ConstructorProperties {

        // Own constructor properties of GstWebRTC-1.0.GstWebRTC.WebRTCDTLSTransport

        certificate?: string | null
        client?: boolean | null
        session_id?: number | null
    }

}

interface WebRTCDTLSTransport {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCDTLSTransport

    certificate: string | null
    client: boolean
    readonly remote_certificate: string | null
    readonly session_id: number
    readonly state: WebRTCDTLSTransportState
    readonly transport: WebRTCICETransport | null

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstWebRTC-1.0.GstWebRTC.WebRTCDTLSTransport

    connect(sigName: "notify::certificate", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::certificate", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::certificate", ...args: any[]): void
    connect(sigName: "notify::client", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::client", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::client", ...args: any[]): void
    connect(sigName: "notify::remote-certificate", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::remote-certificate", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::remote-certificate", ...args: any[]): void
    connect(sigName: "notify::session-id", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::session-id", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::session-id", ...args: any[]): void
    connect(sigName: "notify::state", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::transport", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transport", callback: (($obj: WebRTCDTLSTransport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transport", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WebRTCDTLSTransport extends Gst.Object {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCDTLSTransport

    static name: string
    static $gtype: GObject.GType<WebRTCDTLSTransport>

    // Constructors of GstWebRTC-1.0.GstWebRTC.WebRTCDTLSTransport

    constructor(config?: WebRTCDTLSTransport.ConstructorProperties) 
    _init(config?: WebRTCDTLSTransport.ConstructorProperties): void
}

module WebRTCDataChannel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `close`
     */
    interface CloseSignalCallback {
        ($obj: WebRTCDataChannel): void
    }

    /**
     * Signal callback interface for `on-buffered-amount-low`
     */
    interface OnBufferedAmountLowSignalCallback {
        ($obj: WebRTCDataChannel): void
    }

    /**
     * Signal callback interface for `on-close`
     */
    interface OnCloseSignalCallback {
        ($obj: WebRTCDataChannel): void
    }

    /**
     * Signal callback interface for `on-error`
     */
    interface OnErrorSignalCallback {
        ($obj: WebRTCDataChannel, error: GLib.Error): void
    }

    /**
     * Signal callback interface for `on-message-data`
     */
    interface OnMessageDataSignalCallback {
        ($obj: WebRTCDataChannel, data: GLib.Bytes | null): void
    }

    /**
     * Signal callback interface for `on-message-string`
     */
    interface OnMessageStringSignalCallback {
        ($obj: WebRTCDataChannel, data: string | null): void
    }

    /**
     * Signal callback interface for `on-open`
     */
    interface OnOpenSignalCallback {
        ($obj: WebRTCDataChannel): void
    }

    /**
     * Signal callback interface for `send-data`
     */
    interface SendDataSignalCallback {
        ($obj: WebRTCDataChannel, data: GLib.Bytes | null): void
    }

    /**
     * Signal callback interface for `send-string`
     */
    interface SendStringSignalCallback {
        ($obj: WebRTCDataChannel, data: string | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GstWebRTC-1.0.GstWebRTC.WebRTCDataChannel

        buffered_amount_low_threshold?: number | null
        id?: number | null
        label?: string | null
        max_packet_lifetime?: number | null
        max_retransmits?: number | null
        negotiated?: boolean | null
        ordered?: boolean | null
        priority?: WebRTCPriorityType | null
        protocol?: string | null
    }

}

interface WebRTCDataChannel {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCDataChannel

    readonly buffered_amount: number
    buffered_amount_low_threshold: number
    readonly id: number
    readonly label: string | null
    readonly max_packet_lifetime: number
    readonly max_retransmits: number
    readonly negotiated: boolean
    readonly ordered: boolean
    readonly priority: WebRTCPriorityType
    readonly protocol: string | null
    readonly ready_state: WebRTCDataChannelState

    // Owm methods of GstWebRTC-1.0.GstWebRTC.WebRTCDataChannel

    /**
     * Close the `channel`.
     */
    close(): void
    /**
     * Send `data` as a data message over `channel`.
     * @param data a #GBytes or %NULL
     */
    send_data(data: GLib.Bytes | null): void
    /**
     * Send `data` as a data message over `channel`.
     * @param data a #GBytes or %NULL
     * @returns TRUE if @channel is open and data could be queued
     */
    send_data_full(data: GLib.Bytes | null): boolean
    /**
     * Send `str` as a string message over `channel`.
     * @param str a string or %NULL
     */
    send_string(str: string | null): void
    /**
     * Send `str` as a string message over `channel`.
     * @param str a string or %NULL
     * @returns TRUE if @channel is open and data could be queued
     */
    send_string_full(str: string | null): boolean

    // Own signals of GstWebRTC-1.0.GstWebRTC.WebRTCDataChannel

    connect(sigName: "close", callback: WebRTCDataChannel.CloseSignalCallback): number
    connect_after(sigName: "close", callback: WebRTCDataChannel.CloseSignalCallback): number
    emit(sigName: "close", ...args: any[]): void
    connect(sigName: "on-buffered-amount-low", callback: WebRTCDataChannel.OnBufferedAmountLowSignalCallback): number
    connect_after(sigName: "on-buffered-amount-low", callback: WebRTCDataChannel.OnBufferedAmountLowSignalCallback): number
    emit(sigName: "on-buffered-amount-low", ...args: any[]): void
    connect(sigName: "on-close", callback: WebRTCDataChannel.OnCloseSignalCallback): number
    connect_after(sigName: "on-close", callback: WebRTCDataChannel.OnCloseSignalCallback): number
    emit(sigName: "on-close", ...args: any[]): void
    connect(sigName: "on-error", callback: WebRTCDataChannel.OnErrorSignalCallback): number
    connect_after(sigName: "on-error", callback: WebRTCDataChannel.OnErrorSignalCallback): number
    emit(sigName: "on-error", error: GLib.Error, ...args: any[]): void
    connect(sigName: "on-message-data", callback: WebRTCDataChannel.OnMessageDataSignalCallback): number
    connect_after(sigName: "on-message-data", callback: WebRTCDataChannel.OnMessageDataSignalCallback): number
    emit(sigName: "on-message-data", data: GLib.Bytes | null, ...args: any[]): void
    connect(sigName: "on-message-string", callback: WebRTCDataChannel.OnMessageStringSignalCallback): number
    connect_after(sigName: "on-message-string", callback: WebRTCDataChannel.OnMessageStringSignalCallback): number
    emit(sigName: "on-message-string", data: string | null, ...args: any[]): void
    connect(sigName: "on-open", callback: WebRTCDataChannel.OnOpenSignalCallback): number
    connect_after(sigName: "on-open", callback: WebRTCDataChannel.OnOpenSignalCallback): number
    emit(sigName: "on-open", ...args: any[]): void
    connect(sigName: "send-data", callback: WebRTCDataChannel.SendDataSignalCallback): number
    connect_after(sigName: "send-data", callback: WebRTCDataChannel.SendDataSignalCallback): number
    emit(sigName: "send-data", data: GLib.Bytes | null, ...args: any[]): void
    connect(sigName: "send-string", callback: WebRTCDataChannel.SendStringSignalCallback): number
    connect_after(sigName: "send-string", callback: WebRTCDataChannel.SendStringSignalCallback): number
    emit(sigName: "send-string", data: string | null, ...args: any[]): void

    // Class property signals of GstWebRTC-1.0.GstWebRTC.WebRTCDataChannel

    connect(sigName: "notify::buffered-amount", callback: (($obj: WebRTCDataChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffered-amount", callback: (($obj: WebRTCDataChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffered-amount", ...args: any[]): void
    connect(sigName: "notify::buffered-amount-low-threshold", callback: (($obj: WebRTCDataChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffered-amount-low-threshold", callback: (($obj: WebRTCDataChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffered-amount-low-threshold", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: WebRTCDataChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: WebRTCDataChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: WebRTCDataChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: WebRTCDataChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::max-packet-lifetime", callback: (($obj: WebRTCDataChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-packet-lifetime", callback: (($obj: WebRTCDataChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-packet-lifetime", ...args: any[]): void
    connect(sigName: "notify::max-retransmits", callback: (($obj: WebRTCDataChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-retransmits", callback: (($obj: WebRTCDataChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-retransmits", ...args: any[]): void
    connect(sigName: "notify::negotiated", callback: (($obj: WebRTCDataChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::negotiated", callback: (($obj: WebRTCDataChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::negotiated", ...args: any[]): void
    connect(sigName: "notify::ordered", callback: (($obj: WebRTCDataChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ordered", callback: (($obj: WebRTCDataChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ordered", ...args: any[]): void
    connect(sigName: "notify::priority", callback: (($obj: WebRTCDataChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: WebRTCDataChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::priority", ...args: any[]): void
    connect(sigName: "notify::protocol", callback: (($obj: WebRTCDataChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::protocol", callback: (($obj: WebRTCDataChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::protocol", ...args: any[]): void
    connect(sigName: "notify::ready-state", callback: (($obj: WebRTCDataChannel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ready-state", callback: (($obj: WebRTCDataChannel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ready-state", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WebRTCDataChannel extends GObject.Object {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCDataChannel

    static name: string
    static $gtype: GObject.GType<WebRTCDataChannel>

    // Constructors of GstWebRTC-1.0.GstWebRTC.WebRTCDataChannel

    constructor(config?: WebRTCDataChannel.ConstructorProperties) 
    _init(config?: WebRTCDataChannel.ConstructorProperties): void
}

module WebRTCICE {

    // Signal callback interfaces

    /**
     * Signal callback interface for `add-local-ip-address`
     */
    interface AddLocalIpAddressSignalCallback {
        ($obj: WebRTCICE, address: string | null): boolean
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gst.Object.ConstructorProperties {

        // Own constructor properties of GstWebRTC-1.0.GstWebRTC.WebRTCICE

        /**
         * Maximum port for local rtp port range.
         * min-rtp-port must be <= max-rtp-port
         */
        max_rtp_port?: number | null
        /**
         * Minimum port for local rtp port range.
         * min-rtp-port must be <= max-rtp-port
         */
        min_rtp_port?: number | null
    }

}

interface WebRTCICE {

    // Own fields of GstWebRTC-1.0.GstWebRTC.WebRTCICE

    parent: Gst.Object
    ice_gathering_state: WebRTCICEGatheringState
    ice_connection_state: WebRTCICEConnectionState
    min_rtp_port: number
    max_rtp_port: number
    _gst_reserved: any[]

    // Owm methods of GstWebRTC-1.0.GstWebRTC.WebRTCICE

    add_candidate(stream: WebRTCICEStream, candidate: string | null): void
    add_stream(session_id: number): WebRTCICEStream | null
    add_turn_server(uri: string | null): boolean
    find_transport(stream: WebRTCICEStream, component: WebRTCICEComponent): WebRTCICETransport | null
    gather_candidates(stream: WebRTCICEStream): boolean
    get_http_proxy(): string | null
    get_is_controller(): boolean
    get_local_candidates(stream: WebRTCICEStream): WebRTCICECandidateStats[]
    get_remote_candidates(stream: WebRTCICEStream): WebRTCICECandidateStats[]
    get_selected_pair(stream: WebRTCICEStream): [ /* returnType */ boolean, /* local_stats */ WebRTCICECandidateStats, /* remote_stats */ WebRTCICECandidateStats ]
    get_stun_server(): string | null
    get_turn_server(): string | null
    set_force_relay(force_relay: boolean): void
    /**
     * Set HTTP Proxy to be used when connecting to TURN server.
     * @param uri URI of the HTTP proxy of the form   http://[username:password`]`hostname[:port]
     */
    set_http_proxy(uri: string | null): void
    set_is_controller(controller: boolean): void
    set_local_credentials(stream: WebRTCICEStream, ufrag: string | null, pwd: string | null): boolean
    set_on_ice_candidate(func: WebRTCICEOnCandidateFunc): void
    set_remote_credentials(stream: WebRTCICEStream, ufrag: string | null, pwd: string | null): boolean
    set_stun_server(uri: string | null): void
    set_tos(stream: WebRTCICEStream, tos: number): void
    set_turn_server(uri: string | null): void

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Own virtual methods of GstWebRTC-1.0.GstWebRTC.WebRTCICE

    vfunc_add_candidate(stream: WebRTCICEStream, candidate: string | null): void
    vfunc_add_stream(session_id: number): WebRTCICEStream | null
    vfunc_add_turn_server(uri: string | null): boolean
    vfunc_find_transport(stream: WebRTCICEStream, component: WebRTCICEComponent): WebRTCICETransport | null
    vfunc_gather_candidates(stream: WebRTCICEStream): boolean
    /**
     * Get HTTP Proxy to be used when connecting to TURN server.
     * @virtual 
     * @returns URI of the HTTP proxy of the form   http://[username:password@]hostname[:port] Get HTTP Proxy to be used when connecting to TURN server.
     */
    vfunc_get_http_proxy(): string | null
    vfunc_get_is_controller(): boolean
    vfunc_get_local_candidates(stream: WebRTCICEStream): WebRTCICECandidateStats
    vfunc_get_remote_candidates(stream: WebRTCICEStream): WebRTCICECandidateStats
    vfunc_get_selected_pair(stream: WebRTCICEStream): [ /* returnType */ boolean, /* local_stats */ WebRTCICECandidateStats, /* remote_stats */ WebRTCICECandidateStats ]
    vfunc_get_stun_server(): string | null
    vfunc_get_turn_server(): string | null
    vfunc_set_force_relay(force_relay: boolean): void
    /**
     * Set HTTP Proxy to be used when connecting to TURN server.
     * @virtual 
     * @param uri URI of the HTTP proxy of the form   http://[username:password`]`hostname[:port]
     */
    vfunc_set_http_proxy(uri: string | null): void
    vfunc_set_is_controller(controller: boolean): void
    vfunc_set_local_credentials(stream: WebRTCICEStream, ufrag: string | null, pwd: string | null): boolean
    vfunc_set_on_ice_candidate(func: WebRTCICEOnCandidateFunc): void
    vfunc_set_remote_credentials(stream: WebRTCICEStream, ufrag: string | null, pwd: string | null): boolean
    vfunc_set_stun_server(uri: string | null): void
    vfunc_set_tos(stream: WebRTCICEStream, tos: number): void
    vfunc_set_turn_server(uri: string | null): void

    // Own signals of GstWebRTC-1.0.GstWebRTC.WebRTCICE

    connect(sigName: "add-local-ip-address", callback: WebRTCICE.AddLocalIpAddressSignalCallback): number
    connect_after(sigName: "add-local-ip-address", callback: WebRTCICE.AddLocalIpAddressSignalCallback): number
    emit(sigName: "add-local-ip-address", address: string | null, ...args: any[]): void

    // Class property signals of GstWebRTC-1.0.GstWebRTC.WebRTCICE

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WebRTCICE extends Gst.Object {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCICE

    static name: string
    static $gtype: GObject.GType<WebRTCICE>

    // Constructors of GstWebRTC-1.0.GstWebRTC.WebRTCICE

    constructor(config?: WebRTCICE.ConstructorProperties) 
    _init(config?: WebRTCICE.ConstructorProperties): void
}

module WebRTCICEStream {

    // Constructor properties interface

    interface ConstructorProperties extends Gst.Object.ConstructorProperties {

        // Own constructor properties of GstWebRTC-1.0.GstWebRTC.WebRTCICEStream

        stream_id?: number | null
    }

}

interface WebRTCICEStream {

    // Own fields of GstWebRTC-1.0.GstWebRTC.WebRTCICEStream

    parent: Gst.Object
    stream_id: number

    // Owm methods of GstWebRTC-1.0.GstWebRTC.WebRTCICEStream

    find_transport(component: WebRTCICEComponent): WebRTCICETransport | null
    gather_candidates(): boolean

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Own virtual methods of GstWebRTC-1.0.GstWebRTC.WebRTCICEStream

    vfunc_find_transport(component: WebRTCICEComponent): WebRTCICETransport | null
    vfunc_gather_candidates(): boolean

    // Class property signals of GstWebRTC-1.0.GstWebRTC.WebRTCICEStream

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WebRTCICEStream extends Gst.Object {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCICEStream

    static name: string
    static $gtype: GObject.GType<WebRTCICEStream>

    // Constructors of GstWebRTC-1.0.GstWebRTC.WebRTCICEStream

    constructor(config?: WebRTCICEStream.ConstructorProperties) 
    _init(config?: WebRTCICEStream.ConstructorProperties): void
}

module WebRTCICETransport {

    // Signal callback interfaces

    /**
     * Signal callback interface for `on-new-candidate`
     */
    interface OnNewCandidateSignalCallback {
        ($obj: WebRTCICETransport, object: string | null): void
    }

    /**
     * Signal callback interface for `on-selected-candidate-pair-change`
     */
    interface OnSelectedCandidatePairChangeSignalCallback {
        ($obj: WebRTCICETransport): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gst.Object.ConstructorProperties {

        // Own constructor properties of GstWebRTC-1.0.GstWebRTC.WebRTCICETransport

        component?: WebRTCICEComponent | null
    }

}

interface WebRTCICETransport {

    // Own fields of GstWebRTC-1.0.GstWebRTC.WebRTCICETransport

    parent: Gst.Object
    role: WebRTCICERole
    component: WebRTCICEComponent
    state: WebRTCICEConnectionState
    gathering_state: WebRTCICEGatheringState
    src: Gst.Element
    sink: Gst.Element
    _padding: any[]

    // Owm methods of GstWebRTC-1.0.GstWebRTC.WebRTCICETransport

    connection_state_change(new_state: WebRTCICEConnectionState): void
    gathering_state_change(new_state: WebRTCICEGatheringState): void
    new_candidate(stream_id: number, component: WebRTCICEComponent, attr: string | null): void
    selected_pair_change(): void

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Own virtual methods of GstWebRTC-1.0.GstWebRTC.WebRTCICETransport

    vfunc_gather_candidates(): boolean

    // Own signals of GstWebRTC-1.0.GstWebRTC.WebRTCICETransport

    connect(sigName: "on-new-candidate", callback: WebRTCICETransport.OnNewCandidateSignalCallback): number
    connect_after(sigName: "on-new-candidate", callback: WebRTCICETransport.OnNewCandidateSignalCallback): number
    emit(sigName: "on-new-candidate", object: string | null, ...args: any[]): void
    connect(sigName: "on-selected-candidate-pair-change", callback: WebRTCICETransport.OnSelectedCandidatePairChangeSignalCallback): number
    connect_after(sigName: "on-selected-candidate-pair-change", callback: WebRTCICETransport.OnSelectedCandidatePairChangeSignalCallback): number
    emit(sigName: "on-selected-candidate-pair-change", ...args: any[]): void

    // Class property signals of GstWebRTC-1.0.GstWebRTC.WebRTCICETransport

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WebRTCICETransport extends Gst.Object {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCICETransport

    static name: string
    static $gtype: GObject.GType<WebRTCICETransport>

    // Constructors of GstWebRTC-1.0.GstWebRTC.WebRTCICETransport

    constructor(config?: WebRTCICETransport.ConstructorProperties) 
    _init(config?: WebRTCICETransport.ConstructorProperties): void
}

module WebRTCRTPReceiver {

    // Constructor properties interface

    interface ConstructorProperties extends Gst.Object.ConstructorProperties {
    }

}

interface WebRTCRTPReceiver {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCRTPReceiver

    /**
     * The DTLS transport for this receiver
     */
    readonly transport: WebRTCDTLSTransport | null

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstWebRTC-1.0.GstWebRTC.WebRTCRTPReceiver

    connect(sigName: "notify::transport", callback: (($obj: WebRTCRTPReceiver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transport", callback: (($obj: WebRTCRTPReceiver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transport", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object to track the receiving aspect of the stream
 * 
 * Mostly matches the WebRTC RTCRtpReceiver interface.
 * @class 
 */
class WebRTCRTPReceiver extends Gst.Object {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCRTPReceiver

    static name: string
    static $gtype: GObject.GType<WebRTCRTPReceiver>

    // Constructors of GstWebRTC-1.0.GstWebRTC.WebRTCRTPReceiver

    constructor(config?: WebRTCRTPReceiver.ConstructorProperties) 
    _init(config?: WebRTCRTPReceiver.ConstructorProperties): void
}

module WebRTCRTPSender {

    // Constructor properties interface

    interface ConstructorProperties extends Gst.Object.ConstructorProperties {

        // Own constructor properties of GstWebRTC-1.0.GstWebRTC.WebRTCRTPSender

        /**
         * The priority from which to set the DSCP field on packets
         */
        priority?: WebRTCPriorityType | null
    }

}

interface WebRTCRTPSender {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCRTPSender

    /**
     * The priority from which to set the DSCP field on packets
     */
    priority: WebRTCPriorityType
    /**
     * The DTLS transport for this sender
     */
    readonly transport: WebRTCDTLSTransport | null

    // Owm methods of GstWebRTC-1.0.GstWebRTC.WebRTCRTPSender

    /**
     * Sets the content of the IPv4 Type of Service (ToS), also known as DSCP
     * (Differentiated Services Code Point).
     * This also sets the Traffic Class field of IPv6.
     * @param priority The priority of this sender
     */
    set_priority(priority: WebRTCPriorityType): void

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstWebRTC-1.0.GstWebRTC.WebRTCRTPSender

    connect(sigName: "notify::priority", callback: (($obj: WebRTCRTPSender, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::priority", callback: (($obj: WebRTCRTPSender, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::priority", ...args: any[]): void
    connect(sigName: "notify::transport", callback: (($obj: WebRTCRTPSender, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transport", callback: (($obj: WebRTCRTPSender, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transport", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An object to track the sending aspect of the stream
 * 
 * Mostly matches the WebRTC RTCRtpSender interface.
 * @class 
 */
class WebRTCRTPSender extends Gst.Object {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCRTPSender

    static name: string
    static $gtype: GObject.GType<WebRTCRTPSender>

    // Constructors of GstWebRTC-1.0.GstWebRTC.WebRTCRTPSender

    constructor(config?: WebRTCRTPSender.ConstructorProperties) 
    _init(config?: WebRTCRTPSender.ConstructorProperties): void
}

module WebRTCRTPTransceiver {

    // Constructor properties interface

    interface ConstructorProperties extends Gst.Object.ConstructorProperties {

        // Own constructor properties of GstWebRTC-1.0.GstWebRTC.WebRTCRTPTransceiver

        /**
         * Caps representing the codec preferences.
         */
        codec_preferences?: Gst.Caps | null
        /**
         * Direction of the transceiver.
         */
        direction?: WebRTCRTPTransceiverDirection | null
        mlineindex?: number | null
        receiver?: WebRTCRTPReceiver | null
        sender?: WebRTCRTPSender | null
    }

}

interface WebRTCRTPTransceiver {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCRTPTransceiver

    /**
     * Caps representing the codec preferences.
     */
    codec_preferences: Gst.Caps | null
    /**
     * The transceiver's current directionality, or none if the
     * transceiver is stopped or has never participated in an exchange
     * of offers and answers. To change the transceiver's
     * directionality, set the value of the direction property.
     */
    readonly current_direction: WebRTCRTPTransceiverDirection
    /**
     * Direction of the transceiver.
     */
    direction: WebRTCRTPTransceiverDirection
    /**
     * The kind of media this transceiver transports
     */
    readonly kind: WebRTCKind
    /**
     * The media ID of the m-line associated with this transceiver. This
     * association is established, when possible, whenever either a
     * local or remote description is applied. This field is null if
     * neither a local or remote description has been applied, or if its
     * associated m-line is rejected by either a remote offer or any
     * answer.
     */
    readonly mid: string | null
    readonly mlineindex: number
    readonly receiver: WebRTCRTPReceiver | null
    readonly sender: WebRTCRTPSender | null

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstWebRTC-1.0.GstWebRTC.WebRTCRTPTransceiver

    connect(sigName: "notify::codec-preferences", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::codec-preferences", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::codec-preferences", ...args: any[]): void
    connect(sigName: "notify::current-direction", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::current-direction", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::current-direction", ...args: any[]): void
    connect(sigName: "notify::direction", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::direction", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::direction", ...args: any[]): void
    connect(sigName: "notify::kind", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::kind", ...args: any[]): void
    connect(sigName: "notify::mid", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mid", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mid", ...args: any[]): void
    connect(sigName: "notify::mlineindex", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mlineindex", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mlineindex", ...args: any[]): void
    connect(sigName: "notify::receiver", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receiver", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receiver", ...args: any[]): void
    connect(sigName: "notify::sender", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sender", callback: (($obj: WebRTCRTPTransceiver, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sender", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Mostly matches the WebRTC RTCRtpTransceiver interface.
 * @class 
 */
class WebRTCRTPTransceiver extends Gst.Object {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCRTPTransceiver

    static name: string
    static $gtype: GObject.GType<WebRTCRTPTransceiver>

    // Constructors of GstWebRTC-1.0.GstWebRTC.WebRTCRTPTransceiver

    constructor(config?: WebRTCRTPTransceiver.ConstructorProperties) 
    _init(config?: WebRTCRTPTransceiver.ConstructorProperties): void
}

module WebRTCSCTPTransport {

    // Constructor properties interface

    interface ConstructorProperties extends Gst.Object.ConstructorProperties {
    }

}

interface WebRTCSCTPTransport {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCSCTPTransport

    readonly max_channels: number
    readonly max_message_size: number
    readonly state: WebRTCSCTPTransportState
    readonly transport: WebRTCDTLSTransport | null

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     * @returns A pointer to @object
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     * @returns the same @object
     */
    ref(): GObject.Object

    // Class property signals of GstWebRTC-1.0.GstWebRTC.WebRTCSCTPTransport

    connect(sigName: "notify::max-channels", callback: (($obj: WebRTCSCTPTransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-channels", callback: (($obj: WebRTCSCTPTransport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-channels", ...args: any[]): void
    connect(sigName: "notify::max-message-size", callback: (($obj: WebRTCSCTPTransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-message-size", callback: (($obj: WebRTCSCTPTransport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-message-size", ...args: any[]): void
    connect(sigName: "notify::state", callback: (($obj: WebRTCSCTPTransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: WebRTCSCTPTransport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::transport", callback: (($obj: WebRTCSCTPTransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transport", callback: (($obj: WebRTCSCTPTransport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transport", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WebRTCSCTPTransport extends Gst.Object {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCSCTPTransport

    static name: string
    static $gtype: GObject.GType<WebRTCSCTPTransport>

    // Constructors of GstWebRTC-1.0.GstWebRTC.WebRTCSCTPTransport

    constructor(config?: WebRTCSCTPTransport.ConstructorProperties) 
    _init(config?: WebRTCSCTPTransport.ConstructorProperties): void
}

interface WebRTCDTLSTransportClass {
}

abstract class WebRTCDTLSTransportClass {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCDTLSTransportClass

    static name: string
}

interface WebRTCDataChannelClass {
}

abstract class WebRTCDataChannelClass {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCDataChannelClass

    static name: string
}

interface WebRTCICECandidateStats {

    // Own fields of GstWebRTC-1.0.GstWebRTC.WebRTCICECandidateStats

    ipaddr: string | null
    port: number
    stream_id: number
    type: string | null
    proto: string | null
    relay_proto: string | null
    prio: number
    url: string | null
    _gst_reserved: any[]

    // Owm methods of GstWebRTC-1.0.GstWebRTC.WebRTCICECandidateStats

    copy(): WebRTCICECandidateStats
    /**
     * Helper function to free #GstWebRTCICECandidateStats
     */
    free(): void
}

class WebRTCICECandidateStats {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCICECandidateStats

    static name: string
}

interface WebRTCICEClass {

    // Own fields of GstWebRTC-1.0.GstWebRTC.WebRTCICEClass

    parent_class: Gst.ObjectClass
    add_stream: (ice: WebRTCICE, session_id: number) => WebRTCICEStream | null
    find_transport: (ice: WebRTCICE, stream: WebRTCICEStream, component: WebRTCICEComponent) => WebRTCICETransport | null
    gather_candidates: (ice: WebRTCICE, stream: WebRTCICEStream) => boolean
    add_candidate: (ice: WebRTCICE, stream: WebRTCICEStream, candidate: string | null) => void
    set_local_credentials: (ice: WebRTCICE, stream: WebRTCICEStream, ufrag: string | null, pwd: string | null) => boolean
    set_remote_credentials: (ice: WebRTCICE, stream: WebRTCICEStream, ufrag: string | null, pwd: string | null) => boolean
    add_turn_server: (ice: WebRTCICE, uri: string | null) => boolean
    set_is_controller: (ice: WebRTCICE, controller: boolean) => void
    get_is_controller: (ice: WebRTCICE) => boolean
    set_force_relay: (ice: WebRTCICE, force_relay: boolean) => void
    set_stun_server: (ice: WebRTCICE, uri: string | null) => void
    get_stun_server: (ice: WebRTCICE) => string | null
    set_turn_server: (ice: WebRTCICE, uri: string | null) => void
    get_turn_server: (ice: WebRTCICE) => string | null
    set_http_proxy: (ice: WebRTCICE, uri: string | null) => void
    get_http_proxy: (ice: WebRTCICE) => string | null
    set_tos: (ice: WebRTCICE, stream: WebRTCICEStream, tos: number) => void
    set_on_ice_candidate: (ice: WebRTCICE, func: WebRTCICEOnCandidateFunc) => void
    get_local_candidates: (ice: WebRTCICE, stream: WebRTCICEStream) => WebRTCICECandidateStats
    get_remote_candidates: (ice: WebRTCICE, stream: WebRTCICEStream) => WebRTCICECandidateStats
    get_selected_pair: (ice: WebRTCICE, stream: WebRTCICEStream) => [ /* returnType */ boolean, /* local_stats */ WebRTCICECandidateStats, /* remote_stats */ WebRTCICECandidateStats ]
    _gst_reserved: any[]
}

abstract class WebRTCICEClass {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCICEClass

    static name: string
}

interface WebRTCICEStreamClass {

    // Own fields of GstWebRTC-1.0.GstWebRTC.WebRTCICEStreamClass

    parent_class: Gst.ObjectClass
    find_transport: (stream: WebRTCICEStream, component: WebRTCICEComponent) => WebRTCICETransport | null
    gather_candidates: (ice: WebRTCICEStream) => boolean
}

abstract class WebRTCICEStreamClass {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCICEStreamClass

    static name: string
}

interface WebRTCICETransportClass {

    // Own fields of GstWebRTC-1.0.GstWebRTC.WebRTCICETransportClass

    parent_class: Gst.ObjectClass
    gather_candidates: (transport: WebRTCICETransport) => boolean
    _padding: any[]
}

abstract class WebRTCICETransportClass {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCICETransportClass

    static name: string
}

interface WebRTCRTPReceiverClass {
}

abstract class WebRTCRTPReceiverClass {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCRTPReceiverClass

    static name: string
}

interface WebRTCRTPSenderClass {
}

abstract class WebRTCRTPSenderClass {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCRTPSenderClass

    static name: string
}

interface WebRTCRTPTransceiverClass {
}

abstract class WebRTCRTPTransceiverClass {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCRTPTransceiverClass

    static name: string
}

interface WebRTCSCTPTransportClass {
}

abstract class WebRTCSCTPTransportClass {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCSCTPTransportClass

    static name: string
}

interface WebRTCSessionDescription {

    // Own fields of GstWebRTC-1.0.GstWebRTC.WebRTCSessionDescription

    /**
     * the #GstWebRTCSDPType of the description
     * @field 
     */
    type: WebRTCSDPType
    /**
     * the #GstSDPMessage of the description
     * @field 
     */
    sdp: GstSdp.SDPMessage

    // Owm methods of GstWebRTC-1.0.GstWebRTC.WebRTCSessionDescription

    copy(): WebRTCSessionDescription
    /**
     * Free `desc` and all associated resources
     */
    free(): void
}

/**
 * See <https://www.w3.org/TR/webrtc/#rtcsessiondescription-class>
 * @record 
 */
class WebRTCSessionDescription {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCSessionDescription

    static name: string

    // Constructors of GstWebRTC-1.0.GstWebRTC.WebRTCSessionDescription

    constructor(type: WebRTCSDPType, sdp: GstSdp.SDPMessage) 
    static new(type: WebRTCSDPType, sdp: GstSdp.SDPMessage): WebRTCSessionDescription
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default GstWebRTC;
// END