/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gstwebrtc-1.0-ambient.d.ts';
import './gstwebrtc-1.0-import.d.ts';
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
     * See &lt;http://w3c.github.io/webrtc-pc/#dom-rtcdatachannelstate&gt;
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
     * See &lt;https://www.w3.org/TR/webrtc/#dom-rtcerrordetailtype&gt; for more information.
     */
    class WebRTCError extends GLib.Error {
        // Own fields of GstWebRTC-1.0.WebRTCError

        /**
         * data-channel-failure
         */
        DATA_CHANNEL_FAILURE: number;
        /**
         * dtls-failure
         */
        DTLS_FAILURE: number;
        /**
         * fingerprint-failure
         */
        FINGERPRINT_FAILURE: number;
        /**
         * sctp-failure
         */
        SCTP_FAILURE: number;
        /**
         * sdp-syntax-error
         */
        SDP_SYNTAX_ERROR: number;
        /**
         * hardware-encoder-not-available
         */
        HARDWARE_ENCODER_NOT_AVAILABLE: number;
        /**
         * encoder-error
         */
        ENCODER_ERROR: number;
        /**
         * invalid-state (part of WebIDL specification)
         */
        INVALID_STATE: number;
        /**
         * GStreamer-specific failure, not matching any other value from the specification
         */
        INTERNAL_FAILURE: number;
        /**
         * invalid-modification (part of WebIDL specification)
         */
        INVALID_MODIFICATION: number;
        /**
         * type-error (maps to JavaScript TypeError)
         */
        TYPE_ERROR: number;

        // Constructors of GstWebRTC-1.0.WebRTCError

        constructor(options: { message: string; code: number });

        // Owm methods of GstWebRTC-1.0.WebRTCError

        static quark(): GLib.Quark;
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
     * See &lt;http://w3c.github.io/webrtc-pc/#dom-rtciceconnectionstate&gt;
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
     * See &lt;http://w3c.github.io/webrtc-pc/#dom-rtcicegatheringstate&gt;
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
     * See &lt;http://w3c.github.io/webrtc-pc/#dom-rtcpeerconnectionstate&gt;
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
     * See &lt;http://w3c.github.io/webrtc-pc/#dom-rtcprioritytype&gt;
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
     * See &lt;http://w3c.github.io/webrtc-pc/#dom-rtcsctptransportstate&gt;
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
     * See &lt;http://w3c.github.io/webrtc-pc/#rtcsdptype&gt;
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
     * See &lt;http://w3c.github.io/webrtc-pc/#dom-rtcsignalingstate&gt;
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
     * See &lt;https://w3c.github.io/webrtc-stats/#dom-rtcstatstype&gt;
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
    function webrtc_error_quark(): GLib.Quark;
    function webrtc_sdp_type_to_string(type: WebRTCSDPType): string;
    interface WebRTCICEOnCandidateFunc {
        (ice: WebRTCICE, stream_id: number, candidate: string): void;
    }
    module WebRTCDTLSTransport {
        // Constructor properties interface
    }

    class WebRTCDTLSTransport extends Gst.Object {
        // Own properties of GstWebRTC-1.0.WebRTCDTLSTransport

        certificate: string;
        client: boolean;
        readonly remote_certificate: string;
        readonly remoteCertificate: string;
        session_id: number;
        sessionId: number;
        readonly state: WebRTCDTLSTransportState;
        readonly transport: WebRTCICETransport;
    }

    module WebRTCDataChannel {
        // Signal callback interfaces

        interface Close {
            (): void;
        }

        interface OnBufferedAmountLow {
            (): void;
        }

        interface OnClose {
            (): void;
        }

        interface OnError {
            (error: GLib.Error): void;
        }

        interface OnMessageData {
            (data?: GLib.Bytes | null): void;
        }

        interface OnMessageString {
            (data?: string | null): void;
        }

        interface OnOpen {
            (): void;
        }

        interface SendData {
            (data?: GLib.Bytes | null): void;
        }

        interface SendString {
            (data?: string | null): void;
        }

        // Constructor properties interface
    }

    abstract class WebRTCDataChannel extends GObject.Object {
        // Own properties of GstWebRTC-1.0.WebRTCDataChannel

        readonly buffered_amount: number;
        readonly bufferedAmount: number;
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
        readonly ready_state: WebRTCDataChannelState;
        readonly readyState: WebRTCDataChannelState;

        // Owm methods of GstWebRTC-1.0.WebRTCDataChannel

        /**
         * Close the `channel`.
         */
        close(): void;
        /**
         * Send `data` as a data message over `channel`.
         * @param data a #GBytes or %NULL
         */
        send_data(data?: GLib.Bytes | null): void;
        /**
         * Send `data` as a data message over `channel`.
         * @param data a #GBytes or %NULL
         * @returns TRUE if @channel is open and data could be queued
         */
        send_data_full(data?: GLib.Bytes | null): boolean;
        /**
         * Send `str` as a string message over `channel`.
         * @param str a string or %NULL
         */
        send_string(str?: string | null): void;
        /**
         * Send `str` as a string message over `channel`.
         * @param str a string or %NULL
         * @returns TRUE if @channel is open and data could be queued
         */
        send_string_full(str?: string | null): boolean;
    }

    module WebRTCICE {
        // Signal callback interfaces

        interface AddLocalIpAddress {
            (address: string): boolean;
        }

        // Constructor properties interface
    }

    abstract class WebRTCICE extends Gst.Object {
        // Own properties of GstWebRTC-1.0.WebRTCICE

        /**
         * Maximum port for local rtp port range.
         * min-rtp-port must be &lt;= max-rtp-port
         */
        max_rtp_port: number;
        /**
         * Maximum port for local rtp port range.
         * min-rtp-port must be &lt;= max-rtp-port
         */
        maxRtpPort: number;
        /**
         * Minimum port for local rtp port range.
         * min-rtp-port must be &lt;= max-rtp-port
         */
        min_rtp_port: number;
        /**
         * Minimum port for local rtp port range.
         * min-rtp-port must be &lt;= max-rtp-port
         */
        minRtpPort: number;

        // Own fields of GstWebRTC-1.0.WebRTCICE

        ice_gathering_state: WebRTCICEGatheringState;
        ice_connection_state: WebRTCICEConnectionState;

        // Owm methods of GstWebRTC-1.0.WebRTCICE

        add_candidate(stream: WebRTCICEStream, candidate: string): void;
        add_stream(session_id: number): WebRTCICEStream | null;
        add_turn_server(uri: string): boolean;
        find_transport(stream: WebRTCICEStream, component: WebRTCICEComponent): WebRTCICETransport | null;
        gather_candidates(stream: WebRTCICEStream): boolean;
        get_http_proxy(): string;
        get_is_controller(): boolean;
        get_local_candidates(stream: WebRTCICEStream): WebRTCICECandidateStats[];
        get_remote_candidates(stream: WebRTCICEStream): WebRTCICECandidateStats[];
        get_selected_pair(stream: WebRTCICEStream): boolean;
        get_stun_server(): string | null;
        get_turn_server(): string | null;
        set_force_relay(force_relay: boolean): void;
        /**
         * Set HTTP Proxy to be used when connecting to TURN server.
         * @param uri URI of the HTTP proxy of the form   http://[username:password@]hostname[:port]
         */
        set_http_proxy(uri: string): void;
        set_is_controller(controller: boolean): void;
        set_local_credentials(stream: WebRTCICEStream, ufrag: string, pwd: string): boolean;
        set_on_ice_candidate(func: WebRTCICEOnCandidateFunc): void;
        set_remote_credentials(stream: WebRTCICEStream, ufrag: string, pwd: string): boolean;
        set_stun_server(uri?: string | null): void;
        set_tos(stream: WebRTCICEStream, tos: number): void;
        set_turn_server(uri?: string | null): void;
    }

    module WebRTCICEStream {
        // Constructor properties interface
    }

    abstract class WebRTCICEStream extends Gst.Object {
        // Own properties of GstWebRTC-1.0.WebRTCICEStream

        stream_id: number;
        streamId: number;

        // Owm methods of GstWebRTC-1.0.WebRTCICEStream

        find_transport(component: WebRTCICEComponent): WebRTCICETransport | null;
        gather_candidates(): boolean;
    }

    module WebRTCICETransport {
        // Signal callback interfaces

        interface OnNewCandidate {
            (object: string): void;
        }

        interface OnSelectedCandidatePairChange {
            (): void;
        }

        // Constructor properties interface
    }

    abstract class WebRTCICETransport extends Gst.Object {
        // Own properties of GstWebRTC-1.0.WebRTCICETransport

        component: WebRTCICEComponent;
        readonly gathering_state: WebRTCICEGatheringState;
        readonly gatheringState: WebRTCICEGatheringState;
        readonly state: WebRTCICEConnectionState;

        // Own fields of GstWebRTC-1.0.WebRTCICETransport

        role: WebRTCICERole;
        src: Gst.Element;
        sink: Gst.Element;

        // Owm methods of GstWebRTC-1.0.WebRTCICETransport

        connection_state_change(new_state: WebRTCICEConnectionState): void;
        gathering_state_change(new_state: WebRTCICEGatheringState): void;
        new_candidate(stream_id: number, component: WebRTCICEComponent, attr: string): void;
        selected_pair_change(): void;
    }

    module WebRTCRTPReceiver {
        // Constructor properties interface
    }

    /**
     * An object to track the receiving aspect of the stream
     *
     * Mostly matches the WebRTC RTCRtpReceiver interface.
     */
    class WebRTCRTPReceiver extends Gst.Object {
        // Own properties of GstWebRTC-1.0.WebRTCRTPReceiver

        /**
         * The DTLS transport for this receiver
         */
        readonly transport: WebRTCDTLSTransport;
    }

    module WebRTCRTPSender {
        // Constructor properties interface
    }

    /**
     * An object to track the sending aspect of the stream
     *
     * Mostly matches the WebRTC RTCRtpSender interface.
     */
    class WebRTCRTPSender extends Gst.Object {
        // Own properties of GstWebRTC-1.0.WebRTCRTPSender

        /**
         * The priority from which to set the DSCP field on packets
         */
        priority: WebRTCPriorityType;
        /**
         * The DTLS transport for this sender
         */
        readonly transport: WebRTCDTLSTransport;

        // Owm methods of GstWebRTC-1.0.WebRTCRTPSender

        /**
         * Sets the content of the IPv4 Type of Service (ToS), also known as DSCP
         * (Differentiated Services Code Point).
         * This also sets the Traffic Class field of IPv6.
         * @param priority The priority of this sender
         */
        set_priority(priority: WebRTCPriorityType): void;
    }

    module WebRTCRTPTransceiver {
        // Constructor properties interface
    }

    /**
     * Mostly matches the WebRTC RTCRtpTransceiver interface.
     */
    abstract class WebRTCRTPTransceiver extends Gst.Object {
        // Own properties of GstWebRTC-1.0.WebRTCRTPTransceiver

        /**
         * Caps representing the codec preferences.
         */
        codec_preferences: Gst.Caps;
        /**
         * Caps representing the codec preferences.
         */
        codecPreferences: Gst.Caps;
        /**
         * The transceiver's current directionality, or none if the
         * transceiver is stopped or has never participated in an exchange
         * of offers and answers. To change the transceiver's
         * directionality, set the value of the direction property.
         */
        readonly current_direction: WebRTCRTPTransceiverDirection;
        /**
         * The transceiver's current directionality, or none if the
         * transceiver is stopped or has never participated in an exchange
         * of offers and answers. To change the transceiver's
         * directionality, set the value of the direction property.
         */
        readonly currentDirection: WebRTCRTPTransceiverDirection;
        /**
         * Direction of the transceiver.
         */
        direction: WebRTCRTPTransceiverDirection;
        /**
         * The kind of media this transceiver transports
         */
        readonly kind: WebRTCKind;
        /**
         * The media ID of the m-line associated with this transceiver. This
         * association is established, when possible, whenever either a
         * local or remote description is applied. This field is null if
         * neither a local or remote description has been applied, or if its
         * associated m-line is rejected by either a remote offer or any
         * answer.
         */
        readonly mid: string;
        mlineindex: number;
        receiver: WebRTCRTPReceiver;
        sender: WebRTCRTPSender;
    }

    module WebRTCSCTPTransport {
        // Constructor properties interface
    }

    abstract class WebRTCSCTPTransport extends Gst.Object {
        // Own properties of GstWebRTC-1.0.WebRTCSCTPTransport

        readonly max_channels: number;
        readonly maxChannels: number;
        readonly max_message_size: number;
        readonly maxMessageSize: number;
        readonly state: WebRTCSCTPTransportState;
        readonly transport: WebRTCDTLSTransport;
    }

    class WebRTCDTLSTransportClass {}

    class WebRTCDataChannelClass {}

    class WebRTCICECandidateStats {
        // Own fields of GstWebRTC-1.0.WebRTCICECandidateStats

        ipaddr: string;
        port: number;
        stream_id: number;
        type: string;
        proto: string;
        relay_proto: string;
        prio: number;
        url: string;

        // Constructors of GstWebRTC-1.0.WebRTCICECandidateStats

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

        // Owm methods of GstWebRTC-1.0.WebRTCICECandidateStats

        copy(): WebRTCICECandidateStats;
        /**
         * Helper function to free #GstWebRTCICECandidateStats
         */
        free(): void;
    }

    class WebRTCICEClass {}

    class WebRTCICEStreamClass {}

    class WebRTCICETransportClass {}

    class WebRTCRTPReceiverClass {}

    class WebRTCRTPSenderClass {}

    class WebRTCRTPTransceiverClass {}

    class WebRTCSCTPTransportClass {}

    /**
     * See &lt;https://www.w3.org/TR/webrtc/#rtcsessiondescription-class&gt;
     */
    class WebRTCSessionDescription {
        // Own fields of GstWebRTC-1.0.WebRTCSessionDescription

        type: WebRTCSDPType;
        sdp: GstSdp.SDPMessage;

        // Constructors of GstWebRTC-1.0.WebRTCSessionDescription

        constructor(type: WebRTCSDPType, sdp: GstSdp.SDPMessage);

        static ['new'](type: WebRTCSDPType, sdp: GstSdp.SDPMessage): WebRTCSessionDescription;

        // Owm methods of GstWebRTC-1.0.WebRTCSessionDescription

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
