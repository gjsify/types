// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstWebRTC-1.0
 */

import type * as Gjs from './Gjs';
import type GstSdp from './GstSdp-1.0';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

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
     * new
     */
    NEW,
    /**
     * connection
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
     * peer-connectiion
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
function webrtc_sdp_type_to_string(type: WebRTCSDPType): string
interface WebRTCDTLSTransport_ConstructProps extends Gst.Object_ConstructProps {

    // Own constructor properties of GstWebRTC-1.0.GstWebRTC.WebRTCDTLSTransport

    certificate?: string | null
    client?: boolean | null
    session_id?: number | null
}

interface WebRTCDTLSTransport {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCDTLSTransport

    certificate: string
    client: boolean
    readonly remote_certificate: string
    readonly session_id: number
    readonly state: WebRTCDTLSTransportState
    readonly transport: WebRTCICETransport

    // Conflicting methods

    ref(...args: any[]): any

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

    constructor(config?: WebRTCDTLSTransport_ConstructProps) 
    _init(config?: WebRTCDTLSTransport_ConstructProps): void
}

interface WebRTCDataChannel_ConstructProps extends GObject.Object_ConstructProps {

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

/**
 * Signal callback interface for `close`
 */
interface WebRTCDataChannel_CloseSignalCallback {
    ($obj: WebRTCDataChannel): void
}

/**
 * Signal callback interface for `on-buffered-amount-low`
 */
interface WebRTCDataChannel_OnBufferedAmountLowSignalCallback {
    ($obj: WebRTCDataChannel): void
}

/**
 * Signal callback interface for `on-close`
 */
interface WebRTCDataChannel_OnCloseSignalCallback {
    ($obj: WebRTCDataChannel): void
}

/**
 * Signal callback interface for `on-error`
 */
interface WebRTCDataChannel_OnErrorSignalCallback {
    ($obj: WebRTCDataChannel, error: GLib.Error): void
}

/**
 * Signal callback interface for `on-message-data`
 */
interface WebRTCDataChannel_OnMessageDataSignalCallback {
    ($obj: WebRTCDataChannel, data: GLib.Bytes | null): void
}

/**
 * Signal callback interface for `on-message-string`
 */
interface WebRTCDataChannel_OnMessageStringSignalCallback {
    ($obj: WebRTCDataChannel, data: string | null): void
}

/**
 * Signal callback interface for `on-open`
 */
interface WebRTCDataChannel_OnOpenSignalCallback {
    ($obj: WebRTCDataChannel): void
}

/**
 * Signal callback interface for `send-data`
 */
interface WebRTCDataChannel_SendDataSignalCallback {
    ($obj: WebRTCDataChannel, data: GLib.Bytes | null): void
}

/**
 * Signal callback interface for `send-string`
 */
interface WebRTCDataChannel_SendStringSignalCallback {
    ($obj: WebRTCDataChannel, data: string | null): void
}

interface WebRTCDataChannel {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCDataChannel

    readonly buffered_amount: number
    buffered_amount_low_threshold: number
    readonly id: number
    readonly label: string
    readonly max_packet_lifetime: number
    readonly max_retransmits: number
    readonly negotiated: boolean
    readonly ordered: boolean
    readonly priority: WebRTCPriorityType
    readonly protocol: string
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
     * Send `str` as a string message over `channel`.
     * @param str a string or %NULL
     */
    send_string(str: string | null): void

    // Own signals of GstWebRTC-1.0.GstWebRTC.WebRTCDataChannel

    connect(sigName: "close", callback: WebRTCDataChannel_CloseSignalCallback): number
    connect_after(sigName: "close", callback: WebRTCDataChannel_CloseSignalCallback): number
    emit(sigName: "close", ...args: any[]): void
    connect(sigName: "on-buffered-amount-low", callback: WebRTCDataChannel_OnBufferedAmountLowSignalCallback): number
    connect_after(sigName: "on-buffered-amount-low", callback: WebRTCDataChannel_OnBufferedAmountLowSignalCallback): number
    emit(sigName: "on-buffered-amount-low", ...args: any[]): void
    connect(sigName: "on-close", callback: WebRTCDataChannel_OnCloseSignalCallback): number
    connect_after(sigName: "on-close", callback: WebRTCDataChannel_OnCloseSignalCallback): number
    emit(sigName: "on-close", ...args: any[]): void
    connect(sigName: "on-error", callback: WebRTCDataChannel_OnErrorSignalCallback): number
    connect_after(sigName: "on-error", callback: WebRTCDataChannel_OnErrorSignalCallback): number
    emit(sigName: "on-error", error: GLib.Error, ...args: any[]): void
    connect(sigName: "on-message-data", callback: WebRTCDataChannel_OnMessageDataSignalCallback): number
    connect_after(sigName: "on-message-data", callback: WebRTCDataChannel_OnMessageDataSignalCallback): number
    emit(sigName: "on-message-data", data: GLib.Bytes | null, ...args: any[]): void
    connect(sigName: "on-message-string", callback: WebRTCDataChannel_OnMessageStringSignalCallback): number
    connect_after(sigName: "on-message-string", callback: WebRTCDataChannel_OnMessageStringSignalCallback): number
    emit(sigName: "on-message-string", data: string | null, ...args: any[]): void
    connect(sigName: "on-open", callback: WebRTCDataChannel_OnOpenSignalCallback): number
    connect_after(sigName: "on-open", callback: WebRTCDataChannel_OnOpenSignalCallback): number
    emit(sigName: "on-open", ...args: any[]): void
    connect(sigName: "send-data", callback: WebRTCDataChannel_SendDataSignalCallback): number
    connect_after(sigName: "send-data", callback: WebRTCDataChannel_SendDataSignalCallback): number
    emit(sigName: "send-data", data: GLib.Bytes | null, ...args: any[]): void
    connect(sigName: "send-string", callback: WebRTCDataChannel_SendStringSignalCallback): number
    connect_after(sigName: "send-string", callback: WebRTCDataChannel_SendStringSignalCallback): number
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

    constructor(config?: WebRTCDataChannel_ConstructProps) 
    _init(config?: WebRTCDataChannel_ConstructProps): void
}

interface WebRTCICETransport_ConstructProps extends Gst.Object_ConstructProps {

    // Own constructor properties of GstWebRTC-1.0.GstWebRTC.WebRTCICETransport

    component?: WebRTCICEComponent | null
}

/**
 * Signal callback interface for `on-new-candidate`
 */
interface WebRTCICETransport_OnNewCandidateSignalCallback {
    ($obj: WebRTCICETransport, object: string): void
}

/**
 * Signal callback interface for `on-selected-candidate-pair-change`
 */
interface WebRTCICETransport_OnSelectedCandidatePairChangeSignalCallback {
    ($obj: WebRTCICETransport): void
}

interface WebRTCICETransport {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCICETransport

    readonly component: WebRTCICEComponent
    readonly gathering_state: WebRTCICEGatheringState
    readonly state: WebRTCICEConnectionState

    // Conflicting methods

    ref(...args: any[]): any

    // Own signals of GstWebRTC-1.0.GstWebRTC.WebRTCICETransport

    connect(sigName: "on-new-candidate", callback: WebRTCICETransport_OnNewCandidateSignalCallback): number
    connect_after(sigName: "on-new-candidate", callback: WebRTCICETransport_OnNewCandidateSignalCallback): number
    emit(sigName: "on-new-candidate", object: string, ...args: any[]): void
    connect(sigName: "on-selected-candidate-pair-change", callback: WebRTCICETransport_OnSelectedCandidatePairChangeSignalCallback): number
    connect_after(sigName: "on-selected-candidate-pair-change", callback: WebRTCICETransport_OnSelectedCandidatePairChangeSignalCallback): number
    emit(sigName: "on-selected-candidate-pair-change", ...args: any[]): void

    // Class property signals of GstWebRTC-1.0.GstWebRTC.WebRTCICETransport

    connect(sigName: "notify::component", callback: (($obj: WebRTCICETransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::component", callback: (($obj: WebRTCICETransport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::component", ...args: any[]): void
    connect(sigName: "notify::gathering-state", callback: (($obj: WebRTCICETransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gathering-state", callback: (($obj: WebRTCICETransport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gathering-state", ...args: any[]): void
    connect(sigName: "notify::state", callback: (($obj: WebRTCICETransport, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: WebRTCICETransport, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
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

    constructor(config?: WebRTCICETransport_ConstructProps) 
    _init(config?: WebRTCICETransport_ConstructProps): void
}

interface WebRTCRTPReceiver_ConstructProps extends Gst.Object_ConstructProps {
}

interface WebRTCRTPReceiver {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCRTPReceiver

    /**
     * The DTLS transport for this receiver
     */
    readonly transport: WebRTCDTLSTransport

    // Conflicting methods

    ref(...args: any[]): any

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

    constructor(config?: WebRTCRTPReceiver_ConstructProps) 
    _init(config?: WebRTCRTPReceiver_ConstructProps): void
}

interface WebRTCRTPSender_ConstructProps extends Gst.Object_ConstructProps {

    // Own constructor properties of GstWebRTC-1.0.GstWebRTC.WebRTCRTPSender

    /**
     * The priority from which to set the DSCP field on packets
     */
    priority?: WebRTCPriorityType | null
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
    readonly transport: WebRTCDTLSTransport

    // Owm methods of GstWebRTC-1.0.GstWebRTC.WebRTCRTPSender

    /**
     * Sets the content of the IPv4 Type of Service (ToS), also known as DSCP
     * (Differentiated Services Code Point).
     * This also sets the Traffic Class field of IPv6.
     * @param priority The priority of this sender
     */
    set_priority(priority: WebRTCPriorityType): void

    // Conflicting methods

    ref(...args: any[]): any

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

    constructor(config?: WebRTCRTPSender_ConstructProps) 
    _init(config?: WebRTCRTPSender_ConstructProps): void
}

interface WebRTCRTPTransceiver_ConstructProps extends Gst.Object_ConstructProps {

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

interface WebRTCRTPTransceiver {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCRTPTransceiver

    /**
     * Caps representing the codec preferences.
     */
    codec_preferences: Gst.Caps
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
    readonly mid: string
    readonly mlineindex: number
    readonly receiver: WebRTCRTPReceiver
    readonly sender: WebRTCRTPSender

    // Conflicting methods

    ref(...args: any[]): any

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

    constructor(config?: WebRTCRTPTransceiver_ConstructProps) 
    _init(config?: WebRTCRTPTransceiver_ConstructProps): void
}

interface WebRTCSCTPTransport_ConstructProps extends Gst.Object_ConstructProps {
}

interface WebRTCSCTPTransport {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCSCTPTransport

    readonly max_channels: number
    readonly max_message_size: number
    readonly state: WebRTCSCTPTransportState
    readonly transport: WebRTCDTLSTransport

    // Conflicting methods

    ref(...args: any[]): any

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

    constructor(config?: WebRTCSCTPTransport_ConstructProps) 
    _init(config?: WebRTCSCTPTransport_ConstructProps): void
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

interface WebRTCICETransportClass {
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

}
export default GstWebRTC;