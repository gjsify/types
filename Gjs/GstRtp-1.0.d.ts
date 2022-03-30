/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstRtp-1.0
 */

import type * as Gjs from './Gjs';
import type GstBase from './GstBase-1.0';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace GstRtp {

/**
 * Different types of feedback messages.
 */
enum RTCPFBType {
    /**
     * Invalid type
     */
    FB_TYPE_INVALID,
    /**
     * Generic NACK
     */
    RTPFB_TYPE_NACK,
    /**
     * Temporary Maximum Media Stream Bit Rate Request
     */
    RTPFB_TYPE_TMMBR,
    /**
     * Temporary Maximum Media Stream Bit Rate
     *    Notification
     */
    RTPFB_TYPE_TMMBN,
    /**
     * Request an SR packet for early
     *    synchronization
     */
    RTPFB_TYPE_RTCP_SR_REQ,
    RTPFB_TYPE_TWCC,
    /**
     * Picture Loss Indication
     */
    PSFB_TYPE_PLI,
    /**
     * Slice Loss Indication
     */
    PSFB_TYPE_SLI,
    /**
     * Reference Picture Selection Indication
     */
    PSFB_TYPE_RPSI,
    /**
     * Application layer Feedback
     */
    PSFB_TYPE_AFB,
    /**
     * Full Intra Request Command
     */
    PSFB_TYPE_FIR,
    /**
     * Temporal-Spatial Trade-off Request
     */
    PSFB_TYPE_TSTR,
    /**
     * Temporal-Spatial Trade-off Notification
     */
    PSFB_TYPE_TSTN,
    /**
     * Video Back Channel Message
     */
    PSFB_TYPE_VBCN,
}
/**
 * Different types of SDES content.
 */
enum RTCPSDESType {
    /**
     * Invalid SDES entry
     */
    INVALID,
    /**
     * End of SDES list
     */
    END,
    /**
     * Canonical name
     */
    CNAME,
    /**
     * User name
     */
    NAME,
    /**
     * User's electronic mail address
     */
    EMAIL,
    /**
     * User's phone number
     */
    PHONE,
    /**
     * Geographic user location
     */
    LOC,
    /**
     * Name of application or tool
     */
    TOOL,
    /**
     * Notice about the source
     */
    NOTE,
    /**
     * Private extensions
     */
    PRIV,
    /**
     * H.323 callable address
     */
    H323_CADDR,
    /**
     * Application Specific Identifier (RFC6776)
     */
    APSI,
    /**
     * Reporting Group Identifier (RFC8861)
     */
    RGRP,
    /**
     * RtpStreamId SDES item (RFC8852).
     */
    RTP_STREAM_ID,
    /**
     * RepairedRtpStreamId SDES item (RFC8852).
     */
    REPAIRED_RTP_STREAM_ID,
    /**
     * CLUE CaptId (RFC8849)
     */
    CCID,
    /**
     * MID SDES item (RFC8843).
     */
    MID,
}
/**
 * Different RTCP packet types.
 */
enum RTCPType {
    /**
     * Invalid type
     */
    INVALID,
    /**
     * Sender report
     */
    SR,
    /**
     * Receiver report
     */
    RR,
    /**
     * Source description
     */
    SDES,
    /**
     * Goodbye
     */
    BYE,
    /**
     * Application defined
     */
    APP,
    /**
     * Transport layer feedback.
     */
    RTPFB,
    /**
     * Payload-specific feedback.
     */
    PSFB,
    /**
     * Extended report.
     */
    XR,
}
/**
 * Types of RTCP Extended Reports, those are defined in RFC 3611 and other RFCs
 * according to the [IANA registry](https://www.iana.org/assignments/rtcp-xr-block-types/rtcp-xr-block-types.xhtml).
 */
enum RTCPXRType {
    /**
     * Invalid XR Report Block
     */
    INVALID,
    /**
     * Loss RLE Report Block
     */
    LRLE,
    /**
     * Duplicate RLE Report Block
     */
    DRLE,
    /**
     * Packet Receipt Times Report Block
     */
    PRT,
    /**
     * Receiver Reference Time Report Block
     */
    RRT,
    /**
     * Delay since the last Receiver Report
     */
    DLRR,
    /**
     * Statistics Summary Report Block
     */
    SSUMM,
    /**
     * VoIP Metrics Report Block
     */
    VOIP_METRICS,
}
/**
 * Standard predefined fixed payload types.
 * 
 * The official list is at:
 * http://www.iana.org/assignments/rtp-parameters
 * 
 * Audio:
 * reserved: 19
 * unassigned: 20-23,
 * 
 * Video:
 * unassigned: 24, 27, 29, 30, 35-71, 77-95
 * Reserved for RTCP conflict avoidance: 72-76
 */
enum RTPPayload {
    /**
     * ITU-T G.711. mu-law audio (RFC 3551)
     */
    PCMU,
    /**
     * RFC 3551 says reserved
     */
    TODO_1016,
    /**
     * RFC 3551 says reserved
     */
    G721,
    /**
     * GSM audio
     */
    GSM,
    /**
     * ITU G.723.1 audio
     */
    G723,
    /**
     * IMA ADPCM wave type (RFC 3551)
     */
    DVI4_8000,
    /**
     * IMA ADPCM wave type (RFC 3551)
     */
    DVI4_16000,
    /**
     * experimental linear predictive encoding
     */
    LPC,
    /**
     * ITU-T G.711 A-law audio (RFC 3551)
     */
    PCMA,
    /**
     * ITU-T G.722 (RFC 3551)
     */
    G722,
    /**
     * stereo PCM
     */
    L16_STEREO,
    /**
     * mono PCM
     */
    L16_MONO,
    /**
     * EIA & TIA standard IS-733
     */
    QCELP,
    /**
     * Comfort Noise (RFC 3389)
     */
    CN,
    /**
     * Audio MPEG 1-3.
     */
    MPA,
    /**
     * ITU-T G.728 Speech coder (RFC 3551)
     */
    G728,
    /**
     * IMA ADPCM wave type (RFC 3551)
     */
    DVI4_11025,
    /**
     * IMA ADPCM wave type (RFC 3551)
     */
    DVI4_22050,
    /**
     * ITU-T G.729 Speech coder (RFC 3551)
     */
    G729,
    /**
     * See RFC 2029
     */
    CELLB,
    /**
     * ISO Standards 10918-1 and 10918-2 (RFC 2435)
     */
    JPEG,
    /**
     * nv encoding by Ron Frederick
     */
    NV,
    /**
     * ITU-T Recommendation H.261 (RFC 2032)
     */
    H261,
    /**
     * Video MPEG 1 & 2 (RFC 2250)
     */
    MPV,
    /**
     * MPEG-2 transport stream (RFC 2250)
     */
    MP2T,
    /**
     * Video H263 (RFC 2190)
     */
    H263,
}
/**
 * The transfer profile to use.
 */
enum RTPProfile {
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
 * Additional RTP buffer flags. These flags can potentially be used on any
 * buffers carrying RTP packets.
 * 
 * Note that these are only valid for #GstCaps of type: application/x-rtp (x-rtcp).
 * They can conflict with other extended buffer flags.
 */
enum RTPBufferFlags {
    /**
     * The #GstBuffer was once wrapped
     *           in a retransmitted packet as specified by RFC 4588.
     */
    RETRANSMISSION,
    /**
     * The packet represents redundant RTP packet.
     *           The flag is used in gstrtpstorage to be able to hold the packetback
     *           and use it only for recovery from packet loss.
     *           Since: 1.14
     */
    REDUNDANT,
    /**
     * Offset to define more flags.
     */
    LAST,
}
/**
 * Additional mapping flags for gst_rtp_buffer_map().
 */
enum RTPBufferMapFlags {
    /**
     * Skip mapping and validation of RTP
     *           padding and RTP pad count when present. Useful for buffers where
     *           the padding may be encrypted.
     */
    SKIP_PADDING,
    /**
     * Offset to define more flags
     */
    LAST,
}
/**
 * Direction to which to apply the RTP Header Extension
 */
enum RTPHeaderExtensionDirection {
    /**
     * Neither send nor
     * receive RTP Header Extensions
     */
    INACTIVE,
    /**
     * Only send RTP Header
     * Extensions `GST_RTP_HEADER_EXTENSION_DIRECTION_RECVONLY:` Only
     * receive RTP Header Extensions
     */
    SENDONLY,
    RECVONLY,
    /**
     * Send and receive RTP
     * Header Extensions ext
     */
    SENDRECV,
    /**
     * RTP header extension
     * direction is inherited from the stream
     */
    INHERITED,
}
/**
 * Flags that apply to a RTP Audio/Video header extension.
 */
enum RTPHeaderExtensionFlags {
    /**
     * The one byte rtp extension header.
     *              1-16 data bytes per extension with a maximum of
     *              14 extension ids in total.
     */
    ONE_BYTE,
    /**
     * The two byte rtp extension header.
     *              256 data bytes per extension with a maximum of 255 (or 256
     *              including appbits) extensions in total.
     */
    TWO_BYTE,
}
/**
 * The maximum amount of SSRCs in a BYE packet.
 */
const RTCP_MAX_BYE_SSRC_COUNT: number
/**
 * The maximum amount of Receiver report blocks in RR and SR messages.
 */
const RTCP_MAX_RB_COUNT: number
/**
 * The maximum text length for an SDES item.
 */
const RTCP_MAX_SDES: number
/**
 * The maximum amount of SDES items.
 */
const RTCP_MAX_SDES_ITEM_COUNT: number
/**
 * Mask for version, padding bit and packet type pair allowing reduced size
 * packets, basically it accepts other types than RR and SR
 */
const RTCP_REDUCED_SIZE_VALID_MASK: number
/**
 * Mask for version, padding bit and packet type pair
 */
const RTCP_VALID_MASK: number
/**
 * Valid value for the first two bytes of an RTCP packet after applying
 * #GST_RTCP_VALID_MASK to them.
 */
const RTCP_VALID_VALUE: number
/**
 * The supported RTCP version 2.
 */
const RTCP_VERSION: number
const RTP_HDREXT_BASE: string
/**
 * Constant string used in element classification to signal that this element
 * is a RTP header extension.
 */
const RTP_HDREXT_ELEMENT_CLASS: string
const RTP_HDREXT_NTP_56: string
const RTP_HDREXT_NTP_56_SIZE: number
const RTP_HDREXT_NTP_64: string
const RTP_HDREXT_NTP_64_SIZE: number
const RTP_HEADER_EXTENSION_URI_METADATA_KEY: string
const RTP_PAYLOAD_1016_STRING: string
const RTP_PAYLOAD_CELLB_STRING: string
const RTP_PAYLOAD_CN_STRING: string
const RTP_PAYLOAD_DVI4_11025_STRING: string
const RTP_PAYLOAD_DVI4_16000_STRING: string
const RTP_PAYLOAD_DVI4_22050_STRING: string
const RTP_PAYLOAD_DVI4_8000_STRING: string
const RTP_PAYLOAD_DYNAMIC_STRING: string
const RTP_PAYLOAD_G721_STRING: string
const RTP_PAYLOAD_G722_STRING: string
const RTP_PAYLOAD_G723_53: number
const RTP_PAYLOAD_G723_53_STRING: string
const RTP_PAYLOAD_G723_63: number
const RTP_PAYLOAD_G723_63_STRING: string
const RTP_PAYLOAD_G723_STRING: string
const RTP_PAYLOAD_G728_STRING: string
const RTP_PAYLOAD_G729_STRING: string
const RTP_PAYLOAD_GSM_STRING: string
const RTP_PAYLOAD_H261_STRING: string
const RTP_PAYLOAD_H263_STRING: string
const RTP_PAYLOAD_JPEG_STRING: string
const RTP_PAYLOAD_L16_MONO_STRING: string
const RTP_PAYLOAD_L16_STEREO_STRING: string
const RTP_PAYLOAD_LPC_STRING: string
const RTP_PAYLOAD_MP2T_STRING: string
const RTP_PAYLOAD_MPA_STRING: string
const RTP_PAYLOAD_MPV_STRING: string
const RTP_PAYLOAD_NV_STRING: string
const RTP_PAYLOAD_PCMA_STRING: string
const RTP_PAYLOAD_PCMU_STRING: string
const RTP_PAYLOAD_QCELP_STRING: string
const RTP_PAYLOAD_TS41: number
const RTP_PAYLOAD_TS41_STRING: string
const RTP_PAYLOAD_TS48: number
const RTP_PAYLOAD_TS48_STRING: string
const RTP_SOURCE_META_MAX_CSRC_COUNT: number
/**
 * The supported RTP version 2.
 */
const RTP_VERSION: number
function buffer_add_rtp_source_meta(buffer: Gst.Buffer, ssrc: number | null, csrc: number | null, csrc_count: number): RTPSourceMeta
function buffer_get_rtp_source_meta(buffer: Gst.Buffer): RTPSourceMeta
function rtcp_buffer_map(buffer: Gst.Buffer, flags: Gst.MapFlags, rtcp: RTCPBuffer): boolean
function rtcp_buffer_new(mtu: number): Gst.Buffer
function rtcp_buffer_new_copy_data(data: Uint8Array): Gst.Buffer
function rtcp_buffer_new_take_data(data: Uint8Array): Gst.Buffer
function rtcp_buffer_validate(buffer: Gst.Buffer): boolean
function rtcp_buffer_validate_data(data: Uint8Array): boolean
function rtcp_buffer_validate_data_reduced(data: Uint8Array): boolean
function rtcp_buffer_validate_reduced(buffer: Gst.Buffer): boolean
function rtcp_ntp_to_unix(ntptime: number): number
function rtcp_sdes_name_to_type(name: string): RTCPSDESType
function rtcp_sdes_type_to_name(type: RTCPSDESType): string
function rtcp_unix_to_ntp(unixtime: number): number
function rtp_buffer_allocate_data(buffer: Gst.Buffer, payload_len: number, pad_len: number, csrc_count: number): void
function rtp_buffer_calc_header_len(csrc_count: number): number
function rtp_buffer_calc_packet_len(payload_len: number, pad_len: number, csrc_count: number): number
function rtp_buffer_calc_payload_len(packet_len: number, pad_len: number, csrc_count: number): number
function rtp_buffer_compare_seqnum(seqnum1: number, seqnum2: number): number
function rtp_buffer_default_clock_rate(payload_type: number): number
function rtp_buffer_ext_timestamp(exttimestamp: number, timestamp: number): [ /* returnType */ number, /* exttimestamp */ number ]
function rtp_buffer_get_extension_onebyte_header_from_bytes(bytes: GLib.Bytes, bit_pattern: number, id: number, nth: number): [ /* returnType */ boolean, /* data */ Uint8Array ]
function rtp_buffer_map(buffer: Gst.Buffer, flags: Gst.MapFlags): [ /* returnType */ boolean, /* rtp */ RTPBuffer ]
function rtp_buffer_new_allocate(payload_len: number, pad_len: number, csrc_count: number): Gst.Buffer
function rtp_buffer_new_allocate_len(packet_len: number, pad_len: number, csrc_count: number): Gst.Buffer
function rtp_buffer_new_copy_data(data: Uint8Array): Gst.Buffer
function rtp_buffer_new_take_data(data: Uint8Array): Gst.Buffer
function rtp_get_header_extension_list(): Gst.ElementFactory[]
function rtp_hdrext_get_ntp_56(data: Uint8Array): [ /* returnType */ boolean, /* ntptime */ number ]
function rtp_hdrext_get_ntp_64(data: Uint8Array): [ /* returnType */ boolean, /* ntptime */ number ]
function rtp_hdrext_set_ntp_56(data: object | null, size: number, ntptime: number): boolean
function rtp_hdrext_set_ntp_64(data: object | null, size: number, ntptime: number): boolean
function rtp_payload_info_for_name(media: string, encoding_name: string): RTPPayloadInfo
function rtp_payload_info_for_pt(payload_type: number): RTPPayloadInfo
function rtp_source_meta_api_get_type(): GObject.Type
function rtp_source_meta_get_info(): Gst.MetaInfo
interface RTPBaseAudioPayload_ConstructProps extends RTPBasePayload_ConstructProps {
    /* Constructor properties of GstRtp-1.0.GstRtp.RTPBaseAudioPayload */
    buffer_list?: boolean
}
class RTPBaseAudioPayload {
    /* Properties of GstRtp-1.0.GstRtp.RTPBaseAudioPayload */
    buffer_list: boolean
    /* Properties of GstRtp-1.0.GstRtp.RTPBasePayload */
    /**
     * If enabled, the payloader will automatically try to enable all the
     * RTP header extensions provided in the src caps, saving the application
     * the need to handle these extensions manually using the
     * GstRTPBasePayload::request-extension: signal.
     */
    auto_header_extension: boolean
    max_ptime: number
    /**
     * Minimum duration of the packet data in ns (can't go above MTU)
     */
    min_ptime: number
    mtu: number
    /**
     * Make the payloader timestamp packets according to the Rate-Control=no
     * behaviour specified in the ONVIF replay spec.
     */
    onvif_no_rate_control: boolean
    /**
     * Try to use the offset fields to generate perfect RTP timestamps. When this
     * option is disabled, RTP timestamps are generated from GST_BUFFER_PTS of
     * each payloaded buffer. The PTSes of buffers may not necessarily increment
     * with the amount of data in each input buffer, consider e.g. the case where
     * the buffer arrives from a network which means that the PTS is unrelated to
     * the amount of data. Because the RTP timestamps are generated from
     * GST_BUFFER_PTS this can result in RTP timestamps that also don't increment
     * with the amount of data in the payloaded packet. To circumvent this it is
     * possible to set the perfect rtptime option enabled. When this option is
     * enabled the payloader will increment the RTP timestamps based on
     * GST_BUFFER_OFFSET which relates to the amount of data in each packet
     * rather than the GST_BUFFER_PTS of each buffer and therefore the RTP
     * timestamps will more closely correlate with the amount of data in each
     * buffer. Currently GstRTPBasePayload is limited to handling perfect RTP
     * timestamps for audio streams.
     */
    perfect_rtptime: boolean
    pt: number
    /**
     * Force buffers to be multiples of this duration in ns (0 disables)
     */
    ptime_multiple: number
    /**
     * Make the RTP packets' timestamps be scaled with the segment's rate
     * (corresponding to RTSP speed parameter). Disabling this property means
     * the timestamps will not be affected by the set delivery speed (RTSP speed).
     * 
     * Example: A server wants to allow streaming a recorded video in double
     * speed but still have the timestamps correspond to the position in the
     * video. This is achieved by the client setting RTSP Speed to 2 while the
     * server has this property disabled.
     */
    scale_rtptime: boolean
    readonly seqnum: number
    seqnum_offset: number
    /**
     * Enable writing the CSRC field in allocated RTP header based on RTP source
     * information found in the input buffer's #GstRTPSourceMeta.
     */
    source_info: boolean
    ssrc: number
    /**
     * Various payloader statistics retrieved atomically (and are therefore
     * synchroized with each other), these can be used e.g. to generate an
     * RTP-Info header. This property return a GstStructure named
     * application/x-rtp-payload-stats containing the following fields relating to
     * the last processed buffer and current state of the stream being payloaded:
     * 
     *   * `clock-rate` :#G_TYPE_UINT, clock-rate of the stream
     *   * `running-time` :#G_TYPE_UINT64, running time
     *   * `seqnum` :#G_TYPE_UINT, sequence number, same as #GstRTPBasePayload:seqnum
     *   * `timestamp` :#G_TYPE_UINT, RTP timestamp, same as #GstRTPBasePayload:timestamp
     *   * `ssrc` :#G_TYPE_UINT, The SSRC in use
     *   * `pt` :#G_TYPE_UINT, The Payload type in use, same as #GstRTPBasePayload:pt
     *   * `seqnum-offset` :#G_TYPE_UINT, The current offset added to the seqnum
     *   * `timestamp-offset` :#G_TYPE_UINT, The current offset added to the timestamp
     */
    readonly stats: Gst.Structure
    readonly timestamp: number
    timestamp_offset: number
    /* Fields of GstRtp-1.0.GstRtp.RTPBasePayload */
    element: Gst.Element
    /* Fields of Gst-1.0.Gst.Element */
    object: Gst.Object
    /**
     * Used to serialize execution of gst_element_set_state()
     */
    state_lock: GLib.RecMutex
    /**
     * Used to signal completion of a state change
     */
    state_cond: GLib.Cond
    /**
     * Used to detect concurrent execution of
     * gst_element_set_state() and gst_element_get_state()
     */
    state_cookie: number
    /**
     * the target state of an element as set by the application
     */
    target_state: Gst.State
    /**
     * the current state of an element
     */
    current_state: Gst.State
    /**
     * the next state of an element, can be #GST_STATE_VOID_PENDING if
     * the element is in the correct state.
     */
    next_state: Gst.State
    /**
     * the final state the element should go to, can be
     * #GST_STATE_VOID_PENDING if the element is in the correct state
     */
    pending_state: Gst.State
    /**
     * the last return value of an element state change
     */
    last_return: Gst.StateChangeReturn
    /**
     * the bus of the element. This bus is provided to the element by the
     * parent element or the application. A #GstPipeline has a bus of its own.
     */
    bus: Gst.Bus
    /**
     * the clock of the element. This clock is usually provided to the
     * element by the toplevel #GstPipeline.
     */
    clock: Gst.Clock
    /**
     * the time of the clock right before the element is set to
     * PLAYING. Subtracting `base_time` from the current clock time in the PLAYING
     * state will yield the running_time against the clock.
     */
    base_time: Gst.ClockTimeDiff
    /**
     * the running_time of the last PAUSED state
     */
    start_time: Gst.ClockTime
    /**
     * number of pads of the element, includes both source and sink pads.
     */
    numpads: number
    /**
     * list of pads
     */
    pads: Gst.Pad[]
    /**
     * number of source pads of the element.
     */
    numsrcpads: number
    /**
     * list of source pads
     */
    srcpads: Gst.Pad[]
    /**
     * number of sink pads of the element.
     */
    numsinkpads: number
    /**
     * list of sink pads
     */
    sinkpads: Gst.Pad[]
    /**
     * updated whenever the a pad is added or removed
     */
    pads_cookie: number
    /**
     * list of contexts
     */
    contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    /**
     * object LOCK
     */
    lock: GLib.Mutex
    /**
     * The name of the object
     */
    name: string
    /**
     * this object's parent, weak ref
     */
    parent: Gst.Object
    /**
     * flags for this object
     */
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstRtp-1.0.GstRtp.RTPBaseAudioPayload */
    /**
     * Create an RTP buffer and store `payload_len` bytes of the adapter as the
     * payload. Set the timestamp on the new buffer to `timestamp` before pushing
     * the buffer downstream.
     * 
     * If `payload_len` is -1, all pending bytes will be flushed. If `timestamp` is
     * -1, the timestamp will be calculated automatically.
     * @param payload_len length of payload
     * @param timestamp a #GstClockTime
     */
    flush(payload_len: number, timestamp: Gst.ClockTime): Gst.FlowReturn
    /**
     * Gets the internal adapter used by the depayloader.
     */
    get_adapter(): GstBase.Adapter
    /**
     * Create an RTP buffer and store `payload_len` bytes of `data` as the
     * payload. Set the timestamp on the new buffer to `timestamp` before pushing
     * the buffer downstream.
     * @param data data to set as payload
     * @param timestamp a #GstClockTime
     */
    push(data: Uint8Array, timestamp: Gst.ClockTime): Gst.FlowReturn
    /**
     * Tells #GstRTPBaseAudioPayload that the child element is for a frame based
     * audio codec
     */
    set_frame_based(): void
    /**
     * Sets the options for frame based audio codecs.
     * @param frame_duration The duraction of an audio frame in milliseconds.
     * @param frame_size The size of an audio frame in bytes.
     */
    set_frame_options(frame_duration: number, frame_size: number): void
    /**
     * Tells #GstRTPBaseAudioPayload that the child element is for a sample based
     * audio codec
     */
    set_sample_based(): void
    /**
     * Sets the options for sample based audio codecs.
     * @param sample_size Size per sample in bytes.
     */
    set_sample_options(sample_size: number): void
    /**
     * Sets the options for sample based audio codecs.
     * @param sample_size Size per sample in bits.
     */
    set_samplebits_options(sample_size: number): void
    /* Methods of GstRtp-1.0.GstRtp.RTPBasePayload */
    /**
     * Allocate a new #GstBuffer with enough data to hold an RTP packet with
     * minimum `csrc_count` CSRCs, a payload length of `payload_len` and padding of
     * `pad_len`. If `payload` has #GstRTPBasePayload:source-info %TRUE additional
     * CSRCs may be allocated and filled with RTP source information.
     * @param payload_len the length of the payload
     * @param pad_len the amount of padding
     * @param csrc_count the minimum number of CSRC entries
     */
    allocate_output_buffer(payload_len: number, pad_len: number, csrc_count: number): Gst.Buffer
    /**
     * Count the total number of RTP sources found in the meta of `buffer,` which
     * will be automically added by gst_rtp_base_payload_allocate_output_buffer().
     * If #GstRTPBasePayload:source-info is %FALSE the count will be 0.
     * @param buffer a #GstBuffer, typically the buffer to payload
     */
    get_source_count(buffer: Gst.Buffer): number
    /**
     * Check if the packet with `size` and `duration` would exceed the configured
     * maximum size.
     * @param size the size of the packet
     * @param duration the duration of the packet
     */
    is_filled(size: number, duration: Gst.ClockTime): boolean
    /**
     * Queries whether the payloader will add contributing sources (CSRCs) to the
     * RTP header from #GstRTPSourceMeta.
     */
    is_source_info_enabled(): boolean
    /**
     * Push `buffer` to the peer element of the payloader. The SSRC, payload type,
     * seqnum and timestamp of the RTP buffer will be updated first.
     * 
     * This function takes ownership of `buffer`.
     * @param buffer a #GstBuffer
     */
    push(buffer: Gst.Buffer): Gst.FlowReturn
    /**
     * Push `list` to the peer element of the payloader. The SSRC, payload type,
     * seqnum and timestamp of the RTP buffer will be updated first.
     * 
     * This function takes ownership of `list`.
     * @param list a #GstBufferList
     */
    push_list(list: Gst.BufferList): Gst.FlowReturn
    /**
     * Set the rtp options of the payloader. These options will be set in the caps
     * of the payloader. Subclasses must call this method before calling
     * gst_rtp_base_payload_push() or gst_rtp_base_payload_set_outcaps().
     * @param media the media type (typically "audio" or "video")
     * @param dynamic if the payload type is dynamic
     * @param encoding_name the encoding name
     * @param clock_rate the clock rate of the media
     */
    set_options(media: string, dynamic: boolean, encoding_name: string, clock_rate: number): void
    /**
     * Configure the output caps with the optional fields.
     * @param s a #GstStructure with the caps fields
     */
    set_outcaps_structure(s?: Gst.Structure | null): boolean
    /**
     * Enable or disable adding contributing sources to RTP packets from
     * #GstRTPSourceMeta.
     * @param enable whether to add contributing sources to RTP packets
     */
    set_source_info_enabled(enable: boolean): void
    /* Methods of Gst-1.0.Gst.Element */
    /**
     * Abort the state change of the element. This function is used
     * by elements that do asynchronous state changes and find out
     * something is wrong.
     * 
     * This function should be called with the STATE_LOCK held.
     * 
     * MT safe.
     */
    abort_state(): void
    /**
     * Adds a pad (link point) to `element`. `pad'`s parent will be set to `element;`
     * see gst_object_set_parent() for refcounting information.
     * 
     * Pads are automatically activated when added in the PAUSED or PLAYING
     * state.
     * 
     * The pad and the element should be unlocked when calling this function.
     * 
     * This function will emit the #GstElement::pad-added signal on the element.
     * @param pad the #GstPad to add to the element.
     */
    add_pad(pad: Gst.Pad): boolean
    add_property_deep_notify_watch(property_name: string | null, include_value: boolean): number
    add_property_notify_watch(property_name: string | null, include_value: boolean): number
    /**
     * Calls `func` from another thread and passes `user_data` to it. This is to be
     * used for cases when a state change has to be performed from a streaming
     * thread, directly via gst_element_set_state() or indirectly e.g. via SEEK
     * events.
     * 
     * Calling those functions directly from the streaming thread will cause
     * deadlocks in many situations, as they might involve waiting for the
     * streaming thread to shut down from this very streaming thread.
     * 
     * MT safe.
     * @param func Function to call asynchronously from another thread
     */
    call_async(func: Gst.ElementCallAsyncFunc): void
    /**
     * Perform `transition` on `element`.
     * 
     * This function must be called with STATE_LOCK held and is mainly used
     * internally.
     * @param transition the requested transition
     */
    change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    /**
     * Commit the state change of the element and proceed to the next
     * pending state if any. This function is used
     * by elements that do asynchronous state changes.
     * The core will normally call this method automatically when an
     * element returned %GST_STATE_CHANGE_SUCCESS from the state change function.
     * 
     * If after calling this method the element still has not reached
     * the pending state, the next state change is performed.
     * 
     * This method is used internally and should normally not be called by plugins
     * or applications.
     * 
     * This function must be called with STATE_LOCK held.
     * @param ret The previous state return value
     */
    continue_state(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    /**
     * Creates a pad for each pad template that is always available.
     * This function is only useful during object initialization of
     * subclasses of #GstElement.
     */
    create_all_pads(): void
    /**
     * Call `func` with `user_data` for each of `element'`s pads. `func` will be called
     * exactly once for each pad that exists at the time of this call, unless
     * one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new pads are added or pads are removed
     * while pads are being iterated, this will not be taken into account until
     * next time this function is used.
     * @param func function to call for each pad
     */
    foreach_pad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s sink pads. `func` will be
     * called exactly once for each sink pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new sink pads are added or sink pads
     * are removed while the sink pads are being iterated, this will not be taken
     * into account until next time this function is used.
     * @param func function to call for each sink pad
     */
    foreach_sink_pad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s source pads. `func` will be
     * called exactly once for each source pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new source pads are added or source pads
     * are removed while the source pads are being iterated, this will not be taken
     * into account until next time this function is used.
     * @param func function to call for each source pad
     */
    foreach_src_pad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Returns the base time of the element. The base time is the
     * absolute time of the clock when this element was last put to
     * PLAYING. Subtracting the base time from the clock time gives
     * the running time of the element.
     */
    get_base_time(): Gst.ClockTime
    /**
     * Returns the bus of the element. Note that only a #GstPipeline will provide a
     * bus for the application.
     */
    get_bus(): Gst.Bus | null
    /**
     * Gets the currently configured clock of the element. This is the clock as was
     * last set with gst_element_set_clock().
     * 
     * Elements in a pipeline will only have their clock set when the
     * pipeline is in the PLAYING state.
     */
    get_clock(): Gst.Clock | null
    /**
     * Looks for an unlinked pad to which the given pad can link. It is not
     * guaranteed that linking the pads will work, though it should work in most
     * cases.
     * 
     * This function will first attempt to find a compatible unlinked ALWAYS pad,
     * and if none can be found, it will request a compatible REQUEST pad by looking
     * at the templates of `element`.
     * @param pad the #GstPad to find a compatible one for.
     * @param caps the #GstCaps to use as a filter.
     */
    get_compatible_pad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Retrieves a pad template from `element` that is compatible with `compattempl`.
     * Pads from compatible templates can be linked together.
     * @param compattempl the #GstPadTemplate to find a compatible     template for
     */
    get_compatible_pad_template(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     * 
     * MT safe.
     * @param context_type a name of a context to retrieve
     */
    get_context(context_type: string): Gst.Context | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     * @param context_type a name of a context to retrieve
     */
    get_context_unlocked(context_type: string): Gst.Context | null
    /**
     * Gets the contexts set on the element.
     * 
     * MT safe.
     */
    get_contexts(): Gst.Context[]
    /**
     * Returns the current clock time of the element, as in, the time of the
     * element's clock, or GST_CLOCK_TIME_NONE if there is no clock.
     */
    get_current_clock_time(): Gst.ClockTime
    /**
     * Returns the running time of the element. The running time is the
     * element's clock time minus its base time. Will return GST_CLOCK_TIME_NONE
     * if the element has no clock, or if its base time has not been set.
     */
    get_current_running_time(): Gst.ClockTime
    /**
     * Retrieves the factory that was used to create this element.
     */
    get_factory(): Gst.ElementFactory | null
    /**
     * Get metadata with `key` in `klass`.
     * @param key the key to get
     */
    get_metadata(key: string): string
    /**
     * Retrieves a padtemplate from `element` with the given name.
     * @param name the name of the #GstPadTemplate to get.
     */
    get_pad_template(name: string): Gst.PadTemplate | null
    /**
     * Retrieves a list of the pad templates associated with `element`. The
     * list must not be modified by the calling code.
     */
    get_pad_template_list(): Gst.PadTemplate[]
    /**
     * The name of this function is confusing to people learning GStreamer.
     * gst_element_request_pad_simple() aims at making it more explicit it is
     * a simplified gst_element_request_pad().
     * @param name the name of the request #GstPad to retrieve.
     */
    get_request_pad(name: string): Gst.Pad | null
    /**
     * Returns the start time of the element. The start time is the
     * running time of the clock when this element was last put to PAUSED.
     * 
     * Usually the start_time is managed by a toplevel element such as
     * #GstPipeline.
     * 
     * MT safe.
     */
    get_start_time(): Gst.ClockTime
    /**
     * Gets the state of the element.
     * 
     * For elements that performed an ASYNC state change, as reported by
     * gst_element_set_state(), this function will block up to the
     * specified timeout value for the state change to complete.
     * If the element completes the state change or goes into
     * an error, this function returns immediately with a return value of
     * %GST_STATE_CHANGE_SUCCESS or %GST_STATE_CHANGE_FAILURE respectively.
     * 
     * For elements that did not return %GST_STATE_CHANGE_ASYNC, this function
     * returns the current and pending state immediately.
     * 
     * This function returns %GST_STATE_CHANGE_NO_PREROLL if the element
     * successfully changed its state but is not able to provide data yet.
     * This mostly happens for live sources that only produce data in
     * %GST_STATE_PLAYING. While the state change return is equivalent to
     * %GST_STATE_CHANGE_SUCCESS, it is returned to the application to signal that
     * some sink elements might not be able to complete their state change because
     * an element is not producing data to complete the preroll. When setting the
     * element to playing, the preroll will complete and playback will start.
     * @param timeout a #GstClockTime to specify the timeout for an async           state change or %GST_CLOCK_TIME_NONE for infinite timeout.
     */
    get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    /**
     * Retrieves a pad from `element` by name. This version only retrieves
     * already-existing (i.e. 'static') pads.
     * @param name the name of the static #GstPad to retrieve.
     */
    get_static_pad(name: string): Gst.Pad | null
    /**
     * Checks if the state of an element is locked.
     * If the state of an element is locked, state changes of the parent don't
     * affect the element.
     * This way you can leave currently unused elements inside bins. Just lock their
     * state before changing the state from #GST_STATE_NULL.
     * 
     * MT safe.
     */
    is_locked_state(): boolean
    /**
     * Retrieves an iterator of `element'`s pads. The iterator should
     * be freed after usage. Also more specialized iterators exists such as
     * gst_element_iterate_src_pads() or gst_element_iterate_sink_pads().
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterate_pads(): Gst.Iterator
    /**
     * Retrieves an iterator of `element'`s sink pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterate_sink_pads(): Gst.Iterator
    /**
     * Retrieves an iterator of `element'`s source pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterate_src_pads(): Gst.Iterator
    /**
     * Links `src` to `dest`. The link must be from source to
     * destination; the other direction will not be tried. The function looks for
     * existing pads that aren't linked yet. It will request new pads if necessary.
     * Such pads need to be released manually when unlinking.
     * If multiple links are possible, only one is established.
     * 
     * Make sure you have added your elements to a bin or pipeline with
     * gst_bin_add() before trying to link them.
     * @param dest the #GstElement containing the destination pad.
     */
    link(dest: Gst.Element): boolean
    /**
     * Links `src` to `dest` using the given caps as filtercaps.
     * The link must be from source to
     * destination; the other direction will not be tried. The function looks for
     * existing pads that aren't linked yet. It will request new pads if necessary.
     * If multiple links are possible, only one is established.
     * 
     * Make sure you have added your elements to a bin or pipeline with
     * gst_bin_add() before trying to link them.
     * @param dest the #GstElement containing the destination pad.
     * @param filter the #GstCaps to filter the link,     or %NULL for no filter.
     */
    link_filtered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    /**
     * Links the two named pads of the source and destination elements.
     * Side effect is that if one of the pads has no parent, it becomes a
     * child of the parent of the other element.  If they have different
     * parents, the link fails.
     * @param srcpadname the name of the #GstPad in source element     or %NULL for any pad.
     * @param dest the #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element, or %NULL for any pad.
     */
    link_pads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    /**
     * Links the two named pads of the source and destination elements. Side effect
     * is that if one of the pads has no parent, it becomes a child of the parent of
     * the other element. If they have different parents, the link fails. If `caps`
     * is not %NULL, makes sure that the caps of the link is a subset of `caps`.
     * @param srcpadname the name of the #GstPad in source element     or %NULL for any pad.
     * @param dest the #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element     or %NULL for any pad.
     * @param filter the #GstCaps to filter the link,     or %NULL for no filter.
     */
    link_pads_filtered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    /**
     * Links the two named pads of the source and destination elements.
     * Side effect is that if one of the pads has no parent, it becomes a
     * child of the parent of the other element.  If they have different
     * parents, the link fails.
     * 
     * Calling gst_element_link_pads_full() with `flags` == %GST_PAD_LINK_CHECK_DEFAULT
     * is the same as calling gst_element_link_pads() and the recommended way of
     * linking pads with safety checks applied.
     * 
     * This is a convenience function for gst_pad_link_full().
     * @param srcpadname the name of the #GstPad in source element     or %NULL for any pad.
     * @param dest the #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element, or %NULL for any pad.
     * @param flags the #GstPadLinkCheck to be performed when linking pads.
     */
    link_pads_full(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    /**
     * Brings the element to the lost state. The current state of the
     * element is copied to the pending state so that any call to
     * gst_element_get_state() will return %GST_STATE_CHANGE_ASYNC.
     * 
     * An ASYNC_START message is posted. If the element was PLAYING, it will
     * go to PAUSED. The element will be restored to its PLAYING state by
     * the parent pipeline when it prerolls again.
     * 
     * This is mostly used for elements that lost their preroll buffer
     * in the %GST_STATE_PAUSED or %GST_STATE_PLAYING state after a flush,
     * they will go to their pending state again when a new preroll buffer is
     * queued. This function can only be called when the element is currently
     * not in error or an async state change.
     * 
     * This function is used internally and should normally not be called from
     * plugins or applications.
     */
    lost_state(): void
    /**
     * Post an error, warning or info message on the bus from inside an element.
     * 
     * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
     * #GST_MESSAGE_INFO.
     * 
     * MT safe.
     * @param type the #GstMessageType
     * @param domain the GStreamer GError domain this message belongs to
     * @param code the GError code belonging to the domain
     * @param text an allocated text string to be used            as a replacement for the default message connected to code,            or %NULL
     * @param debug an allocated debug message to be            used as a replacement for the default debugging information,            or %NULL
     * @param file the source code file where the error was generated
     * @param function_ the source code function where the error was generated
     * @param line the source code line where the error was generated
     */
    message_full(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    /**
     * Post an error, warning or info message on the bus from inside an element.
     * 
     * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
     * #GST_MESSAGE_INFO.
     * @param type the #GstMessageType
     * @param domain the GStreamer GError domain this message belongs to
     * @param code the GError code belonging to the domain
     * @param text an allocated text string to be used            as a replacement for the default message connected to code,            or %NULL
     * @param debug an allocated debug message to be            used as a replacement for the default debugging information,            or %NULL
     * @param file the source code file where the error was generated
     * @param function_ the source code function where the error was generated
     * @param line the source code line where the error was generated
     * @param structure optional details structure
     */
    message_full_with_details(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    /**
     * Use this function to signal that the element does not expect any more pads
     * to show up in the current pipeline. This function should be called whenever
     * pads have been added by the element itself. Elements with #GST_PAD_SOMETIMES
     * pad templates use this in combination with autopluggers to figure out that
     * the element is done initializing its pads.
     * 
     * This function emits the #GstElement::no-more-pads signal.
     * 
     * MT safe.
     */
    no_more_pads(): void
    /**
     * Post a message on the element's #GstBus. This function takes ownership of the
     * message; if you want to access the message after this call, you should add an
     * additional reference before calling.
     * @param message a #GstMessage to post
     */
    post_message(message: Gst.Message): boolean
    /**
     * Get the clock provided by the given element.
     * > An element is only required to provide a clock in the PAUSED
     * > state. Some elements can provide a clock in other states.
     */
    provide_clock(): Gst.Clock | null
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @param query the #GstQuery.
     */
    query(query: Gst.Query): boolean
    /**
     * Queries an element to convert `src_val` in `src_format` to `dest_format`.
     * @param src_format a #GstFormat to convert from.
     * @param src_val a value to convert.
     * @param dest_format the #GstFormat to convert to.
     */
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    /**
     * Queries an element (usually top-level pipeline or playbin element) for the
     * total stream duration in nanoseconds. This query will only work once the
     * pipeline is prerolled (i.e. reached PAUSED or PLAYING state). The application
     * will receive an ASYNC_DONE message on the pipeline bus when that is the case.
     * 
     * If the duration changes for some reason, you will get a DURATION_CHANGED
     * message on the pipeline bus, in which case you should re-query the duration
     * using this function.
     * @param format the #GstFormat requested
     */
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    /**
     * Queries an element (usually top-level pipeline or playbin element) for the
     * stream position in nanoseconds. This will be a value between 0 and the
     * stream duration (if the stream duration is known). This query will usually
     * only work once the pipeline is prerolled (i.e. reached PAUSED or PLAYING
     * state). The application will receive an ASYNC_DONE message on the pipeline
     * bus when that is the case.
     * 
     * If one repeatedly calls this function one can also create a query and reuse
     * it in gst_element_query().
     * @param format the #GstFormat requested
     */
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    /**
     * Makes the element free the previously requested pad as obtained
     * with gst_element_request_pad().
     * 
     * This does not unref the pad. If the pad was created by using
     * gst_element_request_pad(), gst_element_release_request_pad() needs to be
     * followed by gst_object_unref() to free the `pad`.
     * 
     * MT safe.
     * @param pad the #GstPad to release.
     */
    release_request_pad(pad: Gst.Pad): void
    /**
     * Removes `pad` from `element`. `pad` will be destroyed if it has not been
     * referenced elsewhere using gst_object_unparent().
     * 
     * This function is used by plugin developers and should not be used
     * by applications. Pads that were dynamically requested from elements
     * with gst_element_request_pad() should be released with the
     * gst_element_release_request_pad() function instead.
     * 
     * Pads are not automatically deactivated so elements should perform the needed
     * steps to deactivate the pad in case this pad is removed in the PAUSED or
     * PLAYING state. See gst_pad_set_active() for more information about
     * deactivating pads.
     * 
     * The pad and the element should be unlocked when calling this function.
     * 
     * This function will emit the #GstElement::pad-removed signal on the element.
     * @param pad the #GstPad to remove from the element.
     */
    remove_pad(pad: Gst.Pad): boolean
    remove_property_notify_watch(watch_id: number): void
    /**
     * Retrieves a request pad from the element according to the provided template.
     * Pad templates can be looked up using
     * gst_element_factory_get_static_pad_templates().
     * 
     * The pad should be released with gst_element_release_request_pad().
     * @param templ a #GstPadTemplate of which we want a pad of.
     * @param name the name of the request #GstPad to retrieve. Can be %NULL.
     * @param caps the caps of the pad we want to request. Can be %NULL.
     */
    request_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Retrieves a pad from the element by name (e.g. "src_\%d"). This version only
     * retrieves request pads. The pad should be released with
     * gst_element_release_request_pad().
     * 
     * This method is slower than manually getting the pad template and calling
     * gst_element_request_pad() if the pads should have a specific name (e.g.
     * `name` is "src_1" instead of "src_\%u").
     * 
     * Note that this function was introduced in GStreamer 1.20 in order to provide
     * a better name to gst_element_get_request_pad(). Prior to 1.20, users
     * should use gst_element_get_request_pad() which provides the same
     * functionality.
     * @param name the name of the request #GstPad to retrieve.
     */
    request_pad_simple(name: string): Gst.Pad | null
    /**
     * Sends a seek event to an element. See gst_event_new_seek() for the details of
     * the parameters. The seek event is sent to the element using
     * gst_element_send_event().
     * 
     * MT safe.
     * @param rate The new playback rate
     * @param format The format of the seek values
     * @param flags The optional seek flags.
     * @param start_type The type and flags for the new start position
     * @param start The value of the new start position
     * @param stop_type The type and flags for the new stop position
     * @param stop The value of the new stop position
     */
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, start_type: Gst.SeekType, start: number, stop_type: Gst.SeekType, stop: number): boolean
    /**
     * Simple API to perform a seek on the given element, meaning it just seeks
     * to the given position relative to the start of the stream. For more complex
     * operations like segment seeks (e.g. for looping) or changing the playback
     * rate or seeking relative to the last configured playback segment you should
     * use gst_element_seek().
     * 
     * In a completely prerolled PAUSED or PLAYING pipeline, seeking is always
     * guaranteed to return %TRUE on a seekable media type or %FALSE when the media
     * type is certainly not seekable (such as a live stream).
     * 
     * Some elements allow for seeking in the READY state, in this
     * case they will store the seek event and execute it when they are put to
     * PAUSED. If the element supports seek in READY, it will always return %TRUE when
     * it receives the event in the READY state.
     * @param format a #GstFormat to execute the seek in, such as #GST_FORMAT_TIME
     * @param seek_flags seek options; playback applications will usually want to use            GST_SEEK_FLAG_FLUSH | GST_SEEK_FLAG_KEY_UNIT here
     * @param seek_pos position to seek to (relative to the start); if you are doing            a seek in #GST_FORMAT_TIME this value is in nanoseconds -            multiply with #GST_SECOND to convert seconds to nanoseconds or            with #GST_MSECOND to convert milliseconds to nanoseconds.
     */
    seek_simple(format: Gst.Format, seek_flags: Gst.SeekFlags, seek_pos: number): boolean
    /**
     * Sends an event to an element. If the element doesn't implement an
     * event handler, the event will be pushed on a random linked sink pad for
     * downstream events or a random linked source pad for upstream events.
     * 
     * This function takes ownership of the provided event so you should
     * gst_event_ref() it if you want to reuse the event after this call.
     * 
     * MT safe.
     * @param event the #GstEvent to send to the element.
     */
    send_event(event: Gst.Event): boolean
    /**
     * Set the base time of an element. See gst_element_get_base_time().
     * 
     * MT safe.
     * @param time the base time to set.
     */
    set_base_time(time: Gst.ClockTime): void
    /**
     * Sets the bus of the element. Increases the refcount on the bus.
     * For internal use only, unless you're testing elements.
     * 
     * MT safe.
     * @param bus the #GstBus to set.
     */
    set_bus(bus?: Gst.Bus | null): void
    /**
     * Sets the clock for the element. This function increases the
     * refcount on the clock. Any previously set clock on the object
     * is unreffed.
     * @param clock the #GstClock to set for the element.
     */
    set_clock(clock?: Gst.Clock | null): boolean
    /**
     * Sets the context of the element. Increases the refcount of the context.
     * 
     * MT safe.
     * @param context the #GstContext to set.
     */
    set_context(context: Gst.Context): void
    /**
     * Locks the state of an element, so state changes of the parent don't affect
     * this element anymore.
     * 
     * Note that this is racy if the state lock of the parent bin is not taken.
     * The parent bin might've just checked the flag in another thread and as the
     * next step proceed to change the child element's state.
     * 
     * MT safe.
     * @param locked_state %TRUE to lock the element's state
     */
    set_locked_state(locked_state: boolean): boolean
    /**
     * Set the start time of an element. The start time of the element is the
     * running time of the element when it last went to the PAUSED state. In READY
     * or after a flushing seek, it is set to 0.
     * 
     * Toplevel elements like #GstPipeline will manage the start_time and
     * base_time on its children. Setting the start_time to #GST_CLOCK_TIME_NONE
     * on such a toplevel element will disable the distribution of the base_time to
     * the children and can be useful if the application manages the base_time
     * itself, for example if you want to synchronize capture from multiple
     * pipelines, and you can also ensure that the pipelines have the same clock.
     * 
     * MT safe.
     * @param time the base time to set.
     */
    set_start_time(time: Gst.ClockTime): void
    /**
     * Sets the state of the element. This function will try to set the
     * requested state by going through all the intermediary states and calling
     * the class's state change function for each.
     * 
     * This function can return #GST_STATE_CHANGE_ASYNC, in which case the
     * element will perform the remainder of the state change asynchronously in
     * another thread.
     * An application can use gst_element_get_state() to wait for the completion
     * of the state change or it can wait for a %GST_MESSAGE_ASYNC_DONE or
     * %GST_MESSAGE_STATE_CHANGED on the bus.
     * 
     * State changes to %GST_STATE_READY or %GST_STATE_NULL never return
     * #GST_STATE_CHANGE_ASYNC.
     * @param state the element's new #GstState.
     */
    set_state(state: Gst.State): Gst.StateChangeReturn
    /**
     * Tries to change the state of the element to the same as its parent.
     * If this function returns %FALSE, the state of element is undefined.
     */
    sync_state_with_parent(): boolean
    /**
     * Unlinks all source pads of the source element with all sink pads
     * of the sink element to which they are linked.
     * 
     * If the link has been made using gst_element_link(), it could have created an
     * requestpad, which has to be released using gst_element_release_request_pad().
     * @param dest the sink #GstElement to unlink.
     */
    unlink(dest: Gst.Element): void
    /**
     * Unlinks the two named pads of the source and destination elements.
     * 
     * This is a convenience function for gst_pad_unlink().
     * @param srcpadname the name of the #GstPad in source element.
     * @param dest a #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element.
     */
    unlink_pads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    /**
     * Attach the #GstControlBinding to the object. If there already was a
     * #GstControlBinding for this property it will be replaced.
     * 
     * The object's reference count will be incremented, and any floating
     * reference will be removed (see gst_object_ref_sink())
     * @param binding the #GstControlBinding that should be used
     */
    add_control_binding(binding: Gst.ControlBinding): boolean
    /**
     * A default error function that uses g_printerr() to display the error message
     * and the optional debug string..
     * 
     * The default handler will simply print the error string using g_print.
     * @param error the GError.
     * @param debug an additional debug information string, or %NULL
     */
    default_error(error: GLib.Error, debug?: string | null): void
    /**
     * Gets the corresponding #GstControlBinding for the property. This should be
     * unreferenced again after use.
     * @param property_name name of the property
     */
    get_control_binding(property_name: string): Gst.ControlBinding | null
    /**
     * Obtain the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * If the `object` is not under property control, this will return
     * %GST_CLOCK_TIME_NONE. This allows the element to avoid the sub-dividing.
     * 
     * The control-rate is not expected to change if the element is in
     * %GST_STATE_PAUSED or %GST_STATE_PLAYING.
     */
    get_control_rate(): Gst.ClockTime
    /**
     * Gets a number of #GValues for the given controlled property starting at the
     * requested time. The array `values` need to hold enough space for `n_values` of
     * #GValue.
     * 
     * This function is useful if one wants to e.g. draw a graph of the control
     * curve or apply a control curve sample by sample.
     * @param property_name the name of the property to get
     * @param timestamp the time that should be processed
     * @param interval the time spacing between subsequent values
     * @param values array to put control-values in
     */
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    /**
     * Returns a copy of the name of `object`.
     * Caller should g_free() the return value after usage.
     * For a nameless object, this returns %NULL, which you can safely g_free()
     * as well.
     * 
     * Free-function: g_free
     */
    get_name(): string | null
    /**
     * Returns the parent of `object`. This function increases the refcount
     * of the parent object so you should gst_object_unref() it after usage.
     */
    get_parent(): Gst.Object | null
    /**
     * Generates a string describing the path of `object` in
     * the object hierarchy. Only useful (or used) for debugging.
     * 
     * Free-function: g_free
     */
    get_path_string(): string
    /**
     * Gets the value for the given controlled property at the requested time.
     * @param property_name the name of the property to get
     * @param timestamp the time the control-change should be read from
     */
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    /**
     * Check if the `object` has active controlled properties.
     */
    has_active_control_bindings(): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     * @param ancestor a #GstObject to check as ancestor
     */
    has_ancestor(ancestor: Gst.Object): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     * @param ancestor a #GstObject to check as ancestor
     */
    has_as_ancestor(ancestor: Gst.Object): boolean
    /**
     * Check if `parent` is the parent of `object`.
     * E.g. a #GstElement can check if it owns a given #GstPad.
     * @param parent a #GstObject to check as parent
     */
    has_as_parent(parent: Gst.Object): boolean
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     */
    ref(): Gst.Object
    /**
     * Removes the corresponding #GstControlBinding. If it was the
     * last ref of the binding, it will be disposed.
     * @param binding the binding
     */
    remove_control_binding(binding: Gst.ControlBinding): boolean
    /**
     * This function is used to disable the control bindings on a property for
     * some time, i.e. gst_object_sync_values() will do nothing for the
     * property.
     * @param property_name property to disable
     * @param disabled boolean that specifies whether to disable the controller or not.
     */
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    /**
     * This function is used to disable all controlled properties of the `object` for
     * some time, i.e. gst_object_sync_values() will do nothing.
     * @param disabled boolean that specifies whether to disable the controller or not.
     */
    set_control_bindings_disabled(disabled: boolean): void
    /**
     * Change the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * The control-rate should not change if the element is in %GST_STATE_PAUSED or
     * %GST_STATE_PLAYING.
     * @param control_rate the new control-rate in nanoseconds.
     */
    set_control_rate(control_rate: Gst.ClockTime): void
    /**
     * Sets the name of `object,` or gives `object` a guaranteed unique
     * name (if `name` is %NULL).
     * This function makes a copy of the provided name, so the caller
     * retains ownership of the name it sent.
     * @param name new name of object
     */
    set_name(name?: string | null): boolean
    /**
     * Sets the parent of `object` to `parent`. The object's reference count will
     * be incremented, and any floating reference will be removed (see gst_object_ref_sink()).
     * @param parent new parent of object
     */
    set_parent(parent: Gst.Object): boolean
    /**
     * Returns a suggestion for timestamps where buffers should be split
     * to get best controller results.
     */
    suggest_next_sync(): Gst.ClockTime
    /**
     * Sets the properties of the object, according to the #GstControlSources that
     * (maybe) handle them and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     * @param timestamp the time that should be processed
     */
    sync_values(timestamp: Gst.ClockTime): boolean
    /**
     * Clear the parent of `object,` removing the associated reference.
     * This function decreases the refcount of `object`.
     * 
     * MT safe. Grabs and releases `object'`s lock.
     */
    unparent(): void
    /**
     * Decrements the reference count on `object`.  If reference count hits
     * zero, destroy `object`. This function does not take the lock
     * on `object` as it relies on atomic refcounting.
     * 
     * The unref method should never be called with the LOCK held since
     * this might deadlock the dispose function.
     */
    unref(): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GstRtp-1.0.GstRtp.RTPBaseAudioPayload */
    vfunc_query(pad: Gst.Pad, query: Gst.Query): boolean
    /* Function overloads */
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @param query the #GstQuery.
     */
    vfunc_query(query: Gst.Query): boolean
    /* Virtual methods of GstRtp-1.0.GstRtp.RTPBasePayload */
    vfunc_get_caps(pad: Gst.Pad, filter: Gst.Caps): Gst.Caps
    vfunc_handle_buffer(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_query(pad: Gst.Pad, query: Gst.Query): boolean
    /* Function overloads */
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @param query the #GstQuery.
     */
    vfunc_query(query: Gst.Query): boolean
    vfunc_set_caps(caps: Gst.Caps): boolean
    vfunc_sink_event(event: Gst.Event): boolean
    vfunc_src_event(event: Gst.Event): boolean
    /* Virtual methods of Gst-1.0.Gst.Element */
    /**
     * Perform `transition` on `element`.
     * 
     * This function must be called with STATE_LOCK held and is mainly used
     * internally.
     * @param transition the requested transition
     */
    vfunc_change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    /**
     * Gets the state of the element.
     * 
     * For elements that performed an ASYNC state change, as reported by
     * gst_element_set_state(), this function will block up to the
     * specified timeout value for the state change to complete.
     * If the element completes the state change or goes into
     * an error, this function returns immediately with a return value of
     * %GST_STATE_CHANGE_SUCCESS or %GST_STATE_CHANGE_FAILURE respectively.
     * 
     * For elements that did not return %GST_STATE_CHANGE_ASYNC, this function
     * returns the current and pending state immediately.
     * 
     * This function returns %GST_STATE_CHANGE_NO_PREROLL if the element
     * successfully changed its state but is not able to provide data yet.
     * This mostly happens for live sources that only produce data in
     * %GST_STATE_PLAYING. While the state change return is equivalent to
     * %GST_STATE_CHANGE_SUCCESS, it is returned to the application to signal that
     * some sink elements might not be able to complete their state change because
     * an element is not producing data to complete the preroll. When setting the
     * element to playing, the preroll will complete and playback will start.
     * @param timeout a #GstClockTime to specify the timeout for an async           state change or %GST_CLOCK_TIME_NONE for infinite timeout.
     */
    vfunc_get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    /**
     * Use this function to signal that the element does not expect any more pads
     * to show up in the current pipeline. This function should be called whenever
     * pads have been added by the element itself. Elements with #GST_PAD_SOMETIMES
     * pad templates use this in combination with autopluggers to figure out that
     * the element is done initializing its pads.
     * 
     * This function emits the #GstElement::no-more-pads signal.
     * 
     * MT safe.
     */
    vfunc_no_more_pads(): void
    vfunc_pad_added(pad: Gst.Pad): void
    vfunc_pad_removed(pad: Gst.Pad): void
    /**
     * Post a message on the element's #GstBus. This function takes ownership of the
     * message; if you want to access the message after this call, you should add an
     * additional reference before calling.
     * @param message a #GstMessage to post
     */
    vfunc_post_message(message: Gst.Message): boolean
    /**
     * Get the clock provided by the given element.
     * > An element is only required to provide a clock in the PAUSED
     * > state. Some elements can provide a clock in other states.
     */
    vfunc_provide_clock(): Gst.Clock | null
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @param query the #GstQuery.
     */
    vfunc_query(query: Gst.Query): boolean
    vfunc_release_pad(pad: Gst.Pad): void
    /**
     * Retrieves a request pad from the element according to the provided template.
     * Pad templates can be looked up using
     * gst_element_factory_get_static_pad_templates().
     * 
     * The pad should be released with gst_element_release_request_pad().
     * @param templ a #GstPadTemplate of which we want a pad of.
     * @param name the name of the request #GstPad to retrieve. Can be %NULL.
     * @param caps the caps of the pad we want to request. Can be %NULL.
     */
    vfunc_request_new_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Sends an event to an element. If the element doesn't implement an
     * event handler, the event will be pushed on a random linked sink pad for
     * downstream events or a random linked source pad for upstream events.
     * 
     * This function takes ownership of the provided event so you should
     * gst_event_ref() it if you want to reuse the event after this call.
     * 
     * MT safe.
     * @param event the #GstEvent to send to the element.
     */
    vfunc_send_event(event: Gst.Event): boolean
    /**
     * Sets the bus of the element. Increases the refcount on the bus.
     * For internal use only, unless you're testing elements.
     * 
     * MT safe.
     * @param bus the #GstBus to set.
     */
    vfunc_set_bus(bus?: Gst.Bus | null): void
    /**
     * Sets the clock for the element. This function increases the
     * refcount on the clock. Any previously set clock on the object
     * is unreffed.
     * @param clock the #GstClock to set for the element.
     */
    vfunc_set_clock(clock?: Gst.Clock | null): boolean
    /**
     * Sets the context of the element. Increases the refcount of the context.
     * 
     * MT safe.
     * @param context the #GstContext to set.
     */
    vfunc_set_context(context: Gst.Context): void
    /**
     * Sets the state of the element. This function will try to set the
     * requested state by going through all the intermediary states and calling
     * the class's state change function for each.
     * 
     * This function can return #GST_STATE_CHANGE_ASYNC, in which case the
     * element will perform the remainder of the state change asynchronously in
     * another thread.
     * An application can use gst_element_get_state() to wait for the completion
     * of the state change or it can wait for a %GST_MESSAGE_ASYNC_DONE or
     * %GST_MESSAGE_STATE_CHANGED on the bus.
     * 
     * State changes to %GST_STATE_READY or %GST_STATE_NULL never return
     * #GST_STATE_CHANGE_ASYNC.
     * @param state the element's new #GstState.
     */
    vfunc_set_state(state: Gst.State): Gst.StateChangeReturn
    vfunc_state_changed(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GstRtp-1.0.GstRtp.RTPBasePayload */
    /**
     * Add `ext` as an extension for writing part of an RTP header extension onto
     * outgoing RTP packets.
     * @param ext the #GstRTPHeaderExtension
     */
    connect(sigName: "add-extension", callback: (($obj: RTPBaseAudioPayload, ext: RTPHeaderExtension) => void)): number
    connect_after(sigName: "add-extension", callback: (($obj: RTPBaseAudioPayload, ext: RTPHeaderExtension) => void)): number
    emit(sigName: "add-extension", ext: RTPHeaderExtension): void
    /**
     * Clear all RTP header extensions used by this payloader.
     */
    connect(sigName: "clear-extensions", callback: (($obj: RTPBaseAudioPayload) => void)): number
    connect_after(sigName: "clear-extensions", callback: (($obj: RTPBaseAudioPayload) => void)): number
    emit(sigName: "clear-extensions"): void
    /**
     * The returned `ext` must be configured with the correct `ext_id` and with the
     * necessary attributes as required by the extension implementation.
     * @param ext_id the extension id being requested
     * @param ext_uri the extension URI being requested
     */
    connect(sigName: "request-extension", callback: (($obj: RTPBaseAudioPayload, ext_id: number, ext_uri: string) => RTPHeaderExtension)): number
    connect_after(sigName: "request-extension", callback: (($obj: RTPBaseAudioPayload, ext_id: number, ext_uri: string) => RTPHeaderExtension)): number
    emit(sigName: "request-extension", ext_id: number, ext_uri: string): void
    /* Signals of Gst-1.0.Gst.Element */
    /**
     * This signals that the element will not generate more dynamic pads.
     * Note that this signal will usually be emitted from the context of
     * the streaming thread.
     */
    connect(sigName: "no-more-pads", callback: (($obj: RTPBaseAudioPayload) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: RTPBaseAudioPayload) => void)): number
    emit(sigName: "no-more-pads"): void
    /**
     * a new #GstPad has been added to the element. Note that this signal will
     * usually be emitted from the context of the streaming thread. Also keep in
     * mind that if you add new elements to the pipeline in the signal handler
     * you will need to set them to the desired target state with
     * gst_element_set_state() or gst_element_sync_state_with_parent().
     * @param new_pad the pad that has been added
     */
    connect(sigName: "pad-added", callback: (($obj: RTPBaseAudioPayload, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: RTPBaseAudioPayload, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    /**
     * a #GstPad has been removed from the element
     * @param old_pad the pad that has been removed
     */
    connect(sigName: "pad-removed", callback: (($obj: RTPBaseAudioPayload, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: RTPBaseAudioPayload, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    /**
     * The deep notify signal is used to be notified of property changes. It is
     * typically attached to the toplevel bin to receive notifications from all
     * the elements contained in that bin.
     * @param prop_object the object that originated the signal
     * @param prop the property that changed
     */
    connect(sigName: "deep-notify", callback: (($obj: RTPBaseAudioPayload, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: RTPBaseAudioPayload, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::buffer-list", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-list", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::auto-header-extension", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-header-extension", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-ptime", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-ptime", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-ptime", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-ptime", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mtu", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::onvif-no-rate-control", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::onvif-no-rate-control", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::perfect-rtptime", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::perfect-rtptime", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pt", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pt", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ptime-multiple", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ptime-multiple", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-rtptime", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-rtptime", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::seqnum", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seqnum", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::seqnum-offset", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seqnum-offset", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source-info", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-info", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssrc", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssrc", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stats", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timestamp", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timestamp-offset", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp-offset", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RTPBaseAudioPayload_ConstructProps)
    _init (config?: RTPBaseAudioPayload_ConstructProps): void
    static $gtype: GObject.Type
}
interface RTPBaseDepayload_ConstructProps extends Gst.Element_ConstructProps {
    /* Constructor properties of GstRtp-1.0.GstRtp.RTPBaseDepayload */
    /**
     * If enabled, the depayloader will automatically try to enable all the
     * RTP header extensions provided in the sink caps, saving the application
     * the need to handle these extensions manually using the
     * GstRTPBaseDepayload::request-extension: signal.
     */
    auto_header_extension?: boolean
    /**
     * Max seqnum reorder before the sender is assumed to have restarted.
     * 
     * When max-reorder is set to 0 all reordered/duplicate packets are
     * considered coming from a restarted sender.
     */
    max_reorder?: number
    /**
     * Add RTP source information found in RTP header as meta to output buffer.
     */
    source_info?: boolean
}
class RTPBaseDepayload {
    /* Properties of GstRtp-1.0.GstRtp.RTPBaseDepayload */
    /**
     * If enabled, the depayloader will automatically try to enable all the
     * RTP header extensions provided in the sink caps, saving the application
     * the need to handle these extensions manually using the
     * GstRTPBaseDepayload::request-extension: signal.
     */
    auto_header_extension: boolean
    /**
     * Max seqnum reorder before the sender is assumed to have restarted.
     * 
     * When max-reorder is set to 0 all reordered/duplicate packets are
     * considered coming from a restarted sender.
     */
    max_reorder: number
    /**
     * Add RTP source information found in RTP header as meta to output buffer.
     */
    source_info: boolean
    /**
     * Various depayloader statistics retrieved atomically (and are therefore
     * synchroized with each other). This property return a GstStructure named
     * application/x-rtp-depayload-stats containing the following fields relating to
     * the last processed buffer and current state of the stream being depayloaded:
     * 
     *   * `clock-rate`: #G_TYPE_UINT, clock-rate of the stream
     *   * `npt-start`: #G_TYPE_UINT64, time of playback start
     *   * `npt-stop`: #G_TYPE_UINT64, time of playback stop
     *   * `play-speed`: #G_TYPE_DOUBLE, the playback speed
     *   * `play-scale`: #G_TYPE_DOUBLE, the playback scale
     *   * `running-time-dts`: #G_TYPE_UINT64, the last running-time of the
     *      last DTS
     *   * `running-time-pts`: #G_TYPE_UINT64, the last running-time of the
     *      last PTS
     *   * `seqnum`: #G_TYPE_UINT, the last seen seqnum
     *   * `timestamp`: #G_TYPE_UINT, the last seen RTP timestamp
     */
    readonly stats: Gst.Structure
    /* Fields of Gst-1.0.Gst.Element */
    object: Gst.Object
    /**
     * Used to serialize execution of gst_element_set_state()
     */
    state_lock: GLib.RecMutex
    /**
     * Used to signal completion of a state change
     */
    state_cond: GLib.Cond
    /**
     * Used to detect concurrent execution of
     * gst_element_set_state() and gst_element_get_state()
     */
    state_cookie: number
    /**
     * the target state of an element as set by the application
     */
    target_state: Gst.State
    /**
     * the current state of an element
     */
    current_state: Gst.State
    /**
     * the next state of an element, can be #GST_STATE_VOID_PENDING if
     * the element is in the correct state.
     */
    next_state: Gst.State
    /**
     * the final state the element should go to, can be
     * #GST_STATE_VOID_PENDING if the element is in the correct state
     */
    pending_state: Gst.State
    /**
     * the last return value of an element state change
     */
    last_return: Gst.StateChangeReturn
    /**
     * the bus of the element. This bus is provided to the element by the
     * parent element or the application. A #GstPipeline has a bus of its own.
     */
    bus: Gst.Bus
    /**
     * the clock of the element. This clock is usually provided to the
     * element by the toplevel #GstPipeline.
     */
    clock: Gst.Clock
    /**
     * the time of the clock right before the element is set to
     * PLAYING. Subtracting `base_time` from the current clock time in the PLAYING
     * state will yield the running_time against the clock.
     */
    base_time: Gst.ClockTimeDiff
    /**
     * the running_time of the last PAUSED state
     */
    start_time: Gst.ClockTime
    /**
     * number of pads of the element, includes both source and sink pads.
     */
    numpads: number
    /**
     * list of pads
     */
    pads: Gst.Pad[]
    /**
     * number of source pads of the element.
     */
    numsrcpads: number
    /**
     * list of source pads
     */
    srcpads: Gst.Pad[]
    /**
     * number of sink pads of the element.
     */
    numsinkpads: number
    /**
     * list of sink pads
     */
    sinkpads: Gst.Pad[]
    /**
     * updated whenever the a pad is added or removed
     */
    pads_cookie: number
    /**
     * list of contexts
     */
    contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    /**
     * object LOCK
     */
    lock: GLib.Mutex
    /**
     * The name of the object
     */
    name: string
    /**
     * this object's parent, weak ref
     */
    parent: Gst.Object
    /**
     * flags for this object
     */
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstRtp-1.0.GstRtp.RTPBaseDepayload */
    /**
     * Queries whether #GstRTPSourceMeta will be added to depayloaded buffers.
     */
    is_source_info_enabled(): boolean
    /**
     * Push `out_buf` to the peer of `filter`. This function takes ownership of
     * `out_buf`.
     * 
     * This function will by default apply the last incoming timestamp on
     * the outgoing buffer when it didn't have a timestamp already.
     * @param out_buf a #GstBuffer
     */
    push(out_buf: Gst.Buffer): Gst.FlowReturn
    /**
     * Push `out_list` to the peer of `filter`. This function takes ownership of
     * `out_list`.
     * @param out_list a #GstBufferList
     */
    push_list(out_list: Gst.BufferList): Gst.FlowReturn
    /**
     * Enable or disable adding #GstRTPSourceMeta to depayloaded buffers.
     * @param enable whether to add meta about RTP sources to buffer
     */
    set_source_info_enabled(enable: boolean): void
    /* Methods of Gst-1.0.Gst.Element */
    /**
     * Abort the state change of the element. This function is used
     * by elements that do asynchronous state changes and find out
     * something is wrong.
     * 
     * This function should be called with the STATE_LOCK held.
     * 
     * MT safe.
     */
    abort_state(): void
    /**
     * Adds a pad (link point) to `element`. `pad'`s parent will be set to `element;`
     * see gst_object_set_parent() for refcounting information.
     * 
     * Pads are automatically activated when added in the PAUSED or PLAYING
     * state.
     * 
     * The pad and the element should be unlocked when calling this function.
     * 
     * This function will emit the #GstElement::pad-added signal on the element.
     * @param pad the #GstPad to add to the element.
     */
    add_pad(pad: Gst.Pad): boolean
    add_property_deep_notify_watch(property_name: string | null, include_value: boolean): number
    add_property_notify_watch(property_name: string | null, include_value: boolean): number
    /**
     * Calls `func` from another thread and passes `user_data` to it. This is to be
     * used for cases when a state change has to be performed from a streaming
     * thread, directly via gst_element_set_state() or indirectly e.g. via SEEK
     * events.
     * 
     * Calling those functions directly from the streaming thread will cause
     * deadlocks in many situations, as they might involve waiting for the
     * streaming thread to shut down from this very streaming thread.
     * 
     * MT safe.
     * @param func Function to call asynchronously from another thread
     */
    call_async(func: Gst.ElementCallAsyncFunc): void
    /**
     * Perform `transition` on `element`.
     * 
     * This function must be called with STATE_LOCK held and is mainly used
     * internally.
     * @param transition the requested transition
     */
    change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    /**
     * Commit the state change of the element and proceed to the next
     * pending state if any. This function is used
     * by elements that do asynchronous state changes.
     * The core will normally call this method automatically when an
     * element returned %GST_STATE_CHANGE_SUCCESS from the state change function.
     * 
     * If after calling this method the element still has not reached
     * the pending state, the next state change is performed.
     * 
     * This method is used internally and should normally not be called by plugins
     * or applications.
     * 
     * This function must be called with STATE_LOCK held.
     * @param ret The previous state return value
     */
    continue_state(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    /**
     * Creates a pad for each pad template that is always available.
     * This function is only useful during object initialization of
     * subclasses of #GstElement.
     */
    create_all_pads(): void
    /**
     * Call `func` with `user_data` for each of `element'`s pads. `func` will be called
     * exactly once for each pad that exists at the time of this call, unless
     * one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new pads are added or pads are removed
     * while pads are being iterated, this will not be taken into account until
     * next time this function is used.
     * @param func function to call for each pad
     */
    foreach_pad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s sink pads. `func` will be
     * called exactly once for each sink pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new sink pads are added or sink pads
     * are removed while the sink pads are being iterated, this will not be taken
     * into account until next time this function is used.
     * @param func function to call for each sink pad
     */
    foreach_sink_pad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s source pads. `func` will be
     * called exactly once for each source pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new source pads are added or source pads
     * are removed while the source pads are being iterated, this will not be taken
     * into account until next time this function is used.
     * @param func function to call for each source pad
     */
    foreach_src_pad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Returns the base time of the element. The base time is the
     * absolute time of the clock when this element was last put to
     * PLAYING. Subtracting the base time from the clock time gives
     * the running time of the element.
     */
    get_base_time(): Gst.ClockTime
    /**
     * Returns the bus of the element. Note that only a #GstPipeline will provide a
     * bus for the application.
     */
    get_bus(): Gst.Bus | null
    /**
     * Gets the currently configured clock of the element. This is the clock as was
     * last set with gst_element_set_clock().
     * 
     * Elements in a pipeline will only have their clock set when the
     * pipeline is in the PLAYING state.
     */
    get_clock(): Gst.Clock | null
    /**
     * Looks for an unlinked pad to which the given pad can link. It is not
     * guaranteed that linking the pads will work, though it should work in most
     * cases.
     * 
     * This function will first attempt to find a compatible unlinked ALWAYS pad,
     * and if none can be found, it will request a compatible REQUEST pad by looking
     * at the templates of `element`.
     * @param pad the #GstPad to find a compatible one for.
     * @param caps the #GstCaps to use as a filter.
     */
    get_compatible_pad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Retrieves a pad template from `element` that is compatible with `compattempl`.
     * Pads from compatible templates can be linked together.
     * @param compattempl the #GstPadTemplate to find a compatible     template for
     */
    get_compatible_pad_template(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     * 
     * MT safe.
     * @param context_type a name of a context to retrieve
     */
    get_context(context_type: string): Gst.Context | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     * @param context_type a name of a context to retrieve
     */
    get_context_unlocked(context_type: string): Gst.Context | null
    /**
     * Gets the contexts set on the element.
     * 
     * MT safe.
     */
    get_contexts(): Gst.Context[]
    /**
     * Returns the current clock time of the element, as in, the time of the
     * element's clock, or GST_CLOCK_TIME_NONE if there is no clock.
     */
    get_current_clock_time(): Gst.ClockTime
    /**
     * Returns the running time of the element. The running time is the
     * element's clock time minus its base time. Will return GST_CLOCK_TIME_NONE
     * if the element has no clock, or if its base time has not been set.
     */
    get_current_running_time(): Gst.ClockTime
    /**
     * Retrieves the factory that was used to create this element.
     */
    get_factory(): Gst.ElementFactory | null
    /**
     * Get metadata with `key` in `klass`.
     * @param key the key to get
     */
    get_metadata(key: string): string
    /**
     * Retrieves a padtemplate from `element` with the given name.
     * @param name the name of the #GstPadTemplate to get.
     */
    get_pad_template(name: string): Gst.PadTemplate | null
    /**
     * Retrieves a list of the pad templates associated with `element`. The
     * list must not be modified by the calling code.
     */
    get_pad_template_list(): Gst.PadTemplate[]
    /**
     * The name of this function is confusing to people learning GStreamer.
     * gst_element_request_pad_simple() aims at making it more explicit it is
     * a simplified gst_element_request_pad().
     * @param name the name of the request #GstPad to retrieve.
     */
    get_request_pad(name: string): Gst.Pad | null
    /**
     * Returns the start time of the element. The start time is the
     * running time of the clock when this element was last put to PAUSED.
     * 
     * Usually the start_time is managed by a toplevel element such as
     * #GstPipeline.
     * 
     * MT safe.
     */
    get_start_time(): Gst.ClockTime
    /**
     * Gets the state of the element.
     * 
     * For elements that performed an ASYNC state change, as reported by
     * gst_element_set_state(), this function will block up to the
     * specified timeout value for the state change to complete.
     * If the element completes the state change or goes into
     * an error, this function returns immediately with a return value of
     * %GST_STATE_CHANGE_SUCCESS or %GST_STATE_CHANGE_FAILURE respectively.
     * 
     * For elements that did not return %GST_STATE_CHANGE_ASYNC, this function
     * returns the current and pending state immediately.
     * 
     * This function returns %GST_STATE_CHANGE_NO_PREROLL if the element
     * successfully changed its state but is not able to provide data yet.
     * This mostly happens for live sources that only produce data in
     * %GST_STATE_PLAYING. While the state change return is equivalent to
     * %GST_STATE_CHANGE_SUCCESS, it is returned to the application to signal that
     * some sink elements might not be able to complete their state change because
     * an element is not producing data to complete the preroll. When setting the
     * element to playing, the preroll will complete and playback will start.
     * @param timeout a #GstClockTime to specify the timeout for an async           state change or %GST_CLOCK_TIME_NONE for infinite timeout.
     */
    get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    /**
     * Retrieves a pad from `element` by name. This version only retrieves
     * already-existing (i.e. 'static') pads.
     * @param name the name of the static #GstPad to retrieve.
     */
    get_static_pad(name: string): Gst.Pad | null
    /**
     * Checks if the state of an element is locked.
     * If the state of an element is locked, state changes of the parent don't
     * affect the element.
     * This way you can leave currently unused elements inside bins. Just lock their
     * state before changing the state from #GST_STATE_NULL.
     * 
     * MT safe.
     */
    is_locked_state(): boolean
    /**
     * Retrieves an iterator of `element'`s pads. The iterator should
     * be freed after usage. Also more specialized iterators exists such as
     * gst_element_iterate_src_pads() or gst_element_iterate_sink_pads().
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterate_pads(): Gst.Iterator
    /**
     * Retrieves an iterator of `element'`s sink pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterate_sink_pads(): Gst.Iterator
    /**
     * Retrieves an iterator of `element'`s source pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterate_src_pads(): Gst.Iterator
    /**
     * Links `src` to `dest`. The link must be from source to
     * destination; the other direction will not be tried. The function looks for
     * existing pads that aren't linked yet. It will request new pads if necessary.
     * Such pads need to be released manually when unlinking.
     * If multiple links are possible, only one is established.
     * 
     * Make sure you have added your elements to a bin or pipeline with
     * gst_bin_add() before trying to link them.
     * @param dest the #GstElement containing the destination pad.
     */
    link(dest: Gst.Element): boolean
    /**
     * Links `src` to `dest` using the given caps as filtercaps.
     * The link must be from source to
     * destination; the other direction will not be tried. The function looks for
     * existing pads that aren't linked yet. It will request new pads if necessary.
     * If multiple links are possible, only one is established.
     * 
     * Make sure you have added your elements to a bin or pipeline with
     * gst_bin_add() before trying to link them.
     * @param dest the #GstElement containing the destination pad.
     * @param filter the #GstCaps to filter the link,     or %NULL for no filter.
     */
    link_filtered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    /**
     * Links the two named pads of the source and destination elements.
     * Side effect is that if one of the pads has no parent, it becomes a
     * child of the parent of the other element.  If they have different
     * parents, the link fails.
     * @param srcpadname the name of the #GstPad in source element     or %NULL for any pad.
     * @param dest the #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element, or %NULL for any pad.
     */
    link_pads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    /**
     * Links the two named pads of the source and destination elements. Side effect
     * is that if one of the pads has no parent, it becomes a child of the parent of
     * the other element. If they have different parents, the link fails. If `caps`
     * is not %NULL, makes sure that the caps of the link is a subset of `caps`.
     * @param srcpadname the name of the #GstPad in source element     or %NULL for any pad.
     * @param dest the #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element     or %NULL for any pad.
     * @param filter the #GstCaps to filter the link,     or %NULL for no filter.
     */
    link_pads_filtered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    /**
     * Links the two named pads of the source and destination elements.
     * Side effect is that if one of the pads has no parent, it becomes a
     * child of the parent of the other element.  If they have different
     * parents, the link fails.
     * 
     * Calling gst_element_link_pads_full() with `flags` == %GST_PAD_LINK_CHECK_DEFAULT
     * is the same as calling gst_element_link_pads() and the recommended way of
     * linking pads with safety checks applied.
     * 
     * This is a convenience function for gst_pad_link_full().
     * @param srcpadname the name of the #GstPad in source element     or %NULL for any pad.
     * @param dest the #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element, or %NULL for any pad.
     * @param flags the #GstPadLinkCheck to be performed when linking pads.
     */
    link_pads_full(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    /**
     * Brings the element to the lost state. The current state of the
     * element is copied to the pending state so that any call to
     * gst_element_get_state() will return %GST_STATE_CHANGE_ASYNC.
     * 
     * An ASYNC_START message is posted. If the element was PLAYING, it will
     * go to PAUSED. The element will be restored to its PLAYING state by
     * the parent pipeline when it prerolls again.
     * 
     * This is mostly used for elements that lost their preroll buffer
     * in the %GST_STATE_PAUSED or %GST_STATE_PLAYING state after a flush,
     * they will go to their pending state again when a new preroll buffer is
     * queued. This function can only be called when the element is currently
     * not in error or an async state change.
     * 
     * This function is used internally and should normally not be called from
     * plugins or applications.
     */
    lost_state(): void
    /**
     * Post an error, warning or info message on the bus from inside an element.
     * 
     * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
     * #GST_MESSAGE_INFO.
     * 
     * MT safe.
     * @param type the #GstMessageType
     * @param domain the GStreamer GError domain this message belongs to
     * @param code the GError code belonging to the domain
     * @param text an allocated text string to be used            as a replacement for the default message connected to code,            or %NULL
     * @param debug an allocated debug message to be            used as a replacement for the default debugging information,            or %NULL
     * @param file the source code file where the error was generated
     * @param function_ the source code function where the error was generated
     * @param line the source code line where the error was generated
     */
    message_full(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    /**
     * Post an error, warning or info message on the bus from inside an element.
     * 
     * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
     * #GST_MESSAGE_INFO.
     * @param type the #GstMessageType
     * @param domain the GStreamer GError domain this message belongs to
     * @param code the GError code belonging to the domain
     * @param text an allocated text string to be used            as a replacement for the default message connected to code,            or %NULL
     * @param debug an allocated debug message to be            used as a replacement for the default debugging information,            or %NULL
     * @param file the source code file where the error was generated
     * @param function_ the source code function where the error was generated
     * @param line the source code line where the error was generated
     * @param structure optional details structure
     */
    message_full_with_details(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    /**
     * Use this function to signal that the element does not expect any more pads
     * to show up in the current pipeline. This function should be called whenever
     * pads have been added by the element itself. Elements with #GST_PAD_SOMETIMES
     * pad templates use this in combination with autopluggers to figure out that
     * the element is done initializing its pads.
     * 
     * This function emits the #GstElement::no-more-pads signal.
     * 
     * MT safe.
     */
    no_more_pads(): void
    /**
     * Post a message on the element's #GstBus. This function takes ownership of the
     * message; if you want to access the message after this call, you should add an
     * additional reference before calling.
     * @param message a #GstMessage to post
     */
    post_message(message: Gst.Message): boolean
    /**
     * Get the clock provided by the given element.
     * > An element is only required to provide a clock in the PAUSED
     * > state. Some elements can provide a clock in other states.
     */
    provide_clock(): Gst.Clock | null
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @param query the #GstQuery.
     */
    query(query: Gst.Query): boolean
    /**
     * Queries an element to convert `src_val` in `src_format` to `dest_format`.
     * @param src_format a #GstFormat to convert from.
     * @param src_val a value to convert.
     * @param dest_format the #GstFormat to convert to.
     */
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    /**
     * Queries an element (usually top-level pipeline or playbin element) for the
     * total stream duration in nanoseconds. This query will only work once the
     * pipeline is prerolled (i.e. reached PAUSED or PLAYING state). The application
     * will receive an ASYNC_DONE message on the pipeline bus when that is the case.
     * 
     * If the duration changes for some reason, you will get a DURATION_CHANGED
     * message on the pipeline bus, in which case you should re-query the duration
     * using this function.
     * @param format the #GstFormat requested
     */
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    /**
     * Queries an element (usually top-level pipeline or playbin element) for the
     * stream position in nanoseconds. This will be a value between 0 and the
     * stream duration (if the stream duration is known). This query will usually
     * only work once the pipeline is prerolled (i.e. reached PAUSED or PLAYING
     * state). The application will receive an ASYNC_DONE message on the pipeline
     * bus when that is the case.
     * 
     * If one repeatedly calls this function one can also create a query and reuse
     * it in gst_element_query().
     * @param format the #GstFormat requested
     */
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    /**
     * Makes the element free the previously requested pad as obtained
     * with gst_element_request_pad().
     * 
     * This does not unref the pad. If the pad was created by using
     * gst_element_request_pad(), gst_element_release_request_pad() needs to be
     * followed by gst_object_unref() to free the `pad`.
     * 
     * MT safe.
     * @param pad the #GstPad to release.
     */
    release_request_pad(pad: Gst.Pad): void
    /**
     * Removes `pad` from `element`. `pad` will be destroyed if it has not been
     * referenced elsewhere using gst_object_unparent().
     * 
     * This function is used by plugin developers and should not be used
     * by applications. Pads that were dynamically requested from elements
     * with gst_element_request_pad() should be released with the
     * gst_element_release_request_pad() function instead.
     * 
     * Pads are not automatically deactivated so elements should perform the needed
     * steps to deactivate the pad in case this pad is removed in the PAUSED or
     * PLAYING state. See gst_pad_set_active() for more information about
     * deactivating pads.
     * 
     * The pad and the element should be unlocked when calling this function.
     * 
     * This function will emit the #GstElement::pad-removed signal on the element.
     * @param pad the #GstPad to remove from the element.
     */
    remove_pad(pad: Gst.Pad): boolean
    remove_property_notify_watch(watch_id: number): void
    /**
     * Retrieves a request pad from the element according to the provided template.
     * Pad templates can be looked up using
     * gst_element_factory_get_static_pad_templates().
     * 
     * The pad should be released with gst_element_release_request_pad().
     * @param templ a #GstPadTemplate of which we want a pad of.
     * @param name the name of the request #GstPad to retrieve. Can be %NULL.
     * @param caps the caps of the pad we want to request. Can be %NULL.
     */
    request_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Retrieves a pad from the element by name (e.g. "src_\%d"). This version only
     * retrieves request pads. The pad should be released with
     * gst_element_release_request_pad().
     * 
     * This method is slower than manually getting the pad template and calling
     * gst_element_request_pad() if the pads should have a specific name (e.g.
     * `name` is "src_1" instead of "src_\%u").
     * 
     * Note that this function was introduced in GStreamer 1.20 in order to provide
     * a better name to gst_element_get_request_pad(). Prior to 1.20, users
     * should use gst_element_get_request_pad() which provides the same
     * functionality.
     * @param name the name of the request #GstPad to retrieve.
     */
    request_pad_simple(name: string): Gst.Pad | null
    /**
     * Sends a seek event to an element. See gst_event_new_seek() for the details of
     * the parameters. The seek event is sent to the element using
     * gst_element_send_event().
     * 
     * MT safe.
     * @param rate The new playback rate
     * @param format The format of the seek values
     * @param flags The optional seek flags.
     * @param start_type The type and flags for the new start position
     * @param start The value of the new start position
     * @param stop_type The type and flags for the new stop position
     * @param stop The value of the new stop position
     */
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, start_type: Gst.SeekType, start: number, stop_type: Gst.SeekType, stop: number): boolean
    /**
     * Simple API to perform a seek on the given element, meaning it just seeks
     * to the given position relative to the start of the stream. For more complex
     * operations like segment seeks (e.g. for looping) or changing the playback
     * rate or seeking relative to the last configured playback segment you should
     * use gst_element_seek().
     * 
     * In a completely prerolled PAUSED or PLAYING pipeline, seeking is always
     * guaranteed to return %TRUE on a seekable media type or %FALSE when the media
     * type is certainly not seekable (such as a live stream).
     * 
     * Some elements allow for seeking in the READY state, in this
     * case they will store the seek event and execute it when they are put to
     * PAUSED. If the element supports seek in READY, it will always return %TRUE when
     * it receives the event in the READY state.
     * @param format a #GstFormat to execute the seek in, such as #GST_FORMAT_TIME
     * @param seek_flags seek options; playback applications will usually want to use            GST_SEEK_FLAG_FLUSH | GST_SEEK_FLAG_KEY_UNIT here
     * @param seek_pos position to seek to (relative to the start); if you are doing            a seek in #GST_FORMAT_TIME this value is in nanoseconds -            multiply with #GST_SECOND to convert seconds to nanoseconds or            with #GST_MSECOND to convert milliseconds to nanoseconds.
     */
    seek_simple(format: Gst.Format, seek_flags: Gst.SeekFlags, seek_pos: number): boolean
    /**
     * Sends an event to an element. If the element doesn't implement an
     * event handler, the event will be pushed on a random linked sink pad for
     * downstream events or a random linked source pad for upstream events.
     * 
     * This function takes ownership of the provided event so you should
     * gst_event_ref() it if you want to reuse the event after this call.
     * 
     * MT safe.
     * @param event the #GstEvent to send to the element.
     */
    send_event(event: Gst.Event): boolean
    /**
     * Set the base time of an element. See gst_element_get_base_time().
     * 
     * MT safe.
     * @param time the base time to set.
     */
    set_base_time(time: Gst.ClockTime): void
    /**
     * Sets the bus of the element. Increases the refcount on the bus.
     * For internal use only, unless you're testing elements.
     * 
     * MT safe.
     * @param bus the #GstBus to set.
     */
    set_bus(bus?: Gst.Bus | null): void
    /**
     * Sets the clock for the element. This function increases the
     * refcount on the clock. Any previously set clock on the object
     * is unreffed.
     * @param clock the #GstClock to set for the element.
     */
    set_clock(clock?: Gst.Clock | null): boolean
    /**
     * Sets the context of the element. Increases the refcount of the context.
     * 
     * MT safe.
     * @param context the #GstContext to set.
     */
    set_context(context: Gst.Context): void
    /**
     * Locks the state of an element, so state changes of the parent don't affect
     * this element anymore.
     * 
     * Note that this is racy if the state lock of the parent bin is not taken.
     * The parent bin might've just checked the flag in another thread and as the
     * next step proceed to change the child element's state.
     * 
     * MT safe.
     * @param locked_state %TRUE to lock the element's state
     */
    set_locked_state(locked_state: boolean): boolean
    /**
     * Set the start time of an element. The start time of the element is the
     * running time of the element when it last went to the PAUSED state. In READY
     * or after a flushing seek, it is set to 0.
     * 
     * Toplevel elements like #GstPipeline will manage the start_time and
     * base_time on its children. Setting the start_time to #GST_CLOCK_TIME_NONE
     * on such a toplevel element will disable the distribution of the base_time to
     * the children and can be useful if the application manages the base_time
     * itself, for example if you want to synchronize capture from multiple
     * pipelines, and you can also ensure that the pipelines have the same clock.
     * 
     * MT safe.
     * @param time the base time to set.
     */
    set_start_time(time: Gst.ClockTime): void
    /**
     * Sets the state of the element. This function will try to set the
     * requested state by going through all the intermediary states and calling
     * the class's state change function for each.
     * 
     * This function can return #GST_STATE_CHANGE_ASYNC, in which case the
     * element will perform the remainder of the state change asynchronously in
     * another thread.
     * An application can use gst_element_get_state() to wait for the completion
     * of the state change or it can wait for a %GST_MESSAGE_ASYNC_DONE or
     * %GST_MESSAGE_STATE_CHANGED on the bus.
     * 
     * State changes to %GST_STATE_READY or %GST_STATE_NULL never return
     * #GST_STATE_CHANGE_ASYNC.
     * @param state the element's new #GstState.
     */
    set_state(state: Gst.State): Gst.StateChangeReturn
    /**
     * Tries to change the state of the element to the same as its parent.
     * If this function returns %FALSE, the state of element is undefined.
     */
    sync_state_with_parent(): boolean
    /**
     * Unlinks all source pads of the source element with all sink pads
     * of the sink element to which they are linked.
     * 
     * If the link has been made using gst_element_link(), it could have created an
     * requestpad, which has to be released using gst_element_release_request_pad().
     * @param dest the sink #GstElement to unlink.
     */
    unlink(dest: Gst.Element): void
    /**
     * Unlinks the two named pads of the source and destination elements.
     * 
     * This is a convenience function for gst_pad_unlink().
     * @param srcpadname the name of the #GstPad in source element.
     * @param dest a #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element.
     */
    unlink_pads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    /**
     * Attach the #GstControlBinding to the object. If there already was a
     * #GstControlBinding for this property it will be replaced.
     * 
     * The object's reference count will be incremented, and any floating
     * reference will be removed (see gst_object_ref_sink())
     * @param binding the #GstControlBinding that should be used
     */
    add_control_binding(binding: Gst.ControlBinding): boolean
    /**
     * A default error function that uses g_printerr() to display the error message
     * and the optional debug string..
     * 
     * The default handler will simply print the error string using g_print.
     * @param error the GError.
     * @param debug an additional debug information string, or %NULL
     */
    default_error(error: GLib.Error, debug?: string | null): void
    /**
     * Gets the corresponding #GstControlBinding for the property. This should be
     * unreferenced again after use.
     * @param property_name name of the property
     */
    get_control_binding(property_name: string): Gst.ControlBinding | null
    /**
     * Obtain the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * If the `object` is not under property control, this will return
     * %GST_CLOCK_TIME_NONE. This allows the element to avoid the sub-dividing.
     * 
     * The control-rate is not expected to change if the element is in
     * %GST_STATE_PAUSED or %GST_STATE_PLAYING.
     */
    get_control_rate(): Gst.ClockTime
    /**
     * Gets a number of #GValues for the given controlled property starting at the
     * requested time. The array `values` need to hold enough space for `n_values` of
     * #GValue.
     * 
     * This function is useful if one wants to e.g. draw a graph of the control
     * curve or apply a control curve sample by sample.
     * @param property_name the name of the property to get
     * @param timestamp the time that should be processed
     * @param interval the time spacing between subsequent values
     * @param values array to put control-values in
     */
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    /**
     * Returns a copy of the name of `object`.
     * Caller should g_free() the return value after usage.
     * For a nameless object, this returns %NULL, which you can safely g_free()
     * as well.
     * 
     * Free-function: g_free
     */
    get_name(): string | null
    /**
     * Returns the parent of `object`. This function increases the refcount
     * of the parent object so you should gst_object_unref() it after usage.
     */
    get_parent(): Gst.Object | null
    /**
     * Generates a string describing the path of `object` in
     * the object hierarchy. Only useful (or used) for debugging.
     * 
     * Free-function: g_free
     */
    get_path_string(): string
    /**
     * Gets the value for the given controlled property at the requested time.
     * @param property_name the name of the property to get
     * @param timestamp the time the control-change should be read from
     */
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    /**
     * Check if the `object` has active controlled properties.
     */
    has_active_control_bindings(): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     * @param ancestor a #GstObject to check as ancestor
     */
    has_ancestor(ancestor: Gst.Object): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     * @param ancestor a #GstObject to check as ancestor
     */
    has_as_ancestor(ancestor: Gst.Object): boolean
    /**
     * Check if `parent` is the parent of `object`.
     * E.g. a #GstElement can check if it owns a given #GstPad.
     * @param parent a #GstObject to check as parent
     */
    has_as_parent(parent: Gst.Object): boolean
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     */
    ref(): Gst.Object
    /**
     * Removes the corresponding #GstControlBinding. If it was the
     * last ref of the binding, it will be disposed.
     * @param binding the binding
     */
    remove_control_binding(binding: Gst.ControlBinding): boolean
    /**
     * This function is used to disable the control bindings on a property for
     * some time, i.e. gst_object_sync_values() will do nothing for the
     * property.
     * @param property_name property to disable
     * @param disabled boolean that specifies whether to disable the controller or not.
     */
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    /**
     * This function is used to disable all controlled properties of the `object` for
     * some time, i.e. gst_object_sync_values() will do nothing.
     * @param disabled boolean that specifies whether to disable the controller or not.
     */
    set_control_bindings_disabled(disabled: boolean): void
    /**
     * Change the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * The control-rate should not change if the element is in %GST_STATE_PAUSED or
     * %GST_STATE_PLAYING.
     * @param control_rate the new control-rate in nanoseconds.
     */
    set_control_rate(control_rate: Gst.ClockTime): void
    /**
     * Sets the name of `object,` or gives `object` a guaranteed unique
     * name (if `name` is %NULL).
     * This function makes a copy of the provided name, so the caller
     * retains ownership of the name it sent.
     * @param name new name of object
     */
    set_name(name?: string | null): boolean
    /**
     * Sets the parent of `object` to `parent`. The object's reference count will
     * be incremented, and any floating reference will be removed (see gst_object_ref_sink()).
     * @param parent new parent of object
     */
    set_parent(parent: Gst.Object): boolean
    /**
     * Returns a suggestion for timestamps where buffers should be split
     * to get best controller results.
     */
    suggest_next_sync(): Gst.ClockTime
    /**
     * Sets the properties of the object, according to the #GstControlSources that
     * (maybe) handle them and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     * @param timestamp the time that should be processed
     */
    sync_values(timestamp: Gst.ClockTime): boolean
    /**
     * Clear the parent of `object,` removing the associated reference.
     * This function decreases the refcount of `object`.
     * 
     * MT safe. Grabs and releases `object'`s lock.
     */
    unparent(): void
    /**
     * Decrements the reference count on `object`.  If reference count hits
     * zero, destroy `object`. This function does not take the lock
     * on `object` as it relies on atomic refcounting.
     * 
     * The unref method should never be called with the LOCK held since
     * this might deadlock the dispose function.
     */
    unref(): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GstRtp-1.0.GstRtp.RTPBaseDepayload */
    vfunc_handle_event(event: Gst.Event): boolean
    vfunc_packet_lost(event: Gst.Event): boolean
    vfunc_process(in_: Gst.Buffer): Gst.Buffer
    vfunc_process_rtp_packet(rtp_buffer: RTPBuffer): Gst.Buffer
    vfunc_set_caps(caps: Gst.Caps): boolean
    /* Virtual methods of Gst-1.0.Gst.Element */
    /**
     * Perform `transition` on `element`.
     * 
     * This function must be called with STATE_LOCK held and is mainly used
     * internally.
     * @param transition the requested transition
     */
    vfunc_change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    /**
     * Gets the state of the element.
     * 
     * For elements that performed an ASYNC state change, as reported by
     * gst_element_set_state(), this function will block up to the
     * specified timeout value for the state change to complete.
     * If the element completes the state change or goes into
     * an error, this function returns immediately with a return value of
     * %GST_STATE_CHANGE_SUCCESS or %GST_STATE_CHANGE_FAILURE respectively.
     * 
     * For elements that did not return %GST_STATE_CHANGE_ASYNC, this function
     * returns the current and pending state immediately.
     * 
     * This function returns %GST_STATE_CHANGE_NO_PREROLL if the element
     * successfully changed its state but is not able to provide data yet.
     * This mostly happens for live sources that only produce data in
     * %GST_STATE_PLAYING. While the state change return is equivalent to
     * %GST_STATE_CHANGE_SUCCESS, it is returned to the application to signal that
     * some sink elements might not be able to complete their state change because
     * an element is not producing data to complete the preroll. When setting the
     * element to playing, the preroll will complete and playback will start.
     * @param timeout a #GstClockTime to specify the timeout for an async           state change or %GST_CLOCK_TIME_NONE for infinite timeout.
     */
    vfunc_get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    /**
     * Use this function to signal that the element does not expect any more pads
     * to show up in the current pipeline. This function should be called whenever
     * pads have been added by the element itself. Elements with #GST_PAD_SOMETIMES
     * pad templates use this in combination with autopluggers to figure out that
     * the element is done initializing its pads.
     * 
     * This function emits the #GstElement::no-more-pads signal.
     * 
     * MT safe.
     */
    vfunc_no_more_pads(): void
    vfunc_pad_added(pad: Gst.Pad): void
    vfunc_pad_removed(pad: Gst.Pad): void
    /**
     * Post a message on the element's #GstBus. This function takes ownership of the
     * message; if you want to access the message after this call, you should add an
     * additional reference before calling.
     * @param message a #GstMessage to post
     */
    vfunc_post_message(message: Gst.Message): boolean
    /**
     * Get the clock provided by the given element.
     * > An element is only required to provide a clock in the PAUSED
     * > state. Some elements can provide a clock in other states.
     */
    vfunc_provide_clock(): Gst.Clock | null
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @param query the #GstQuery.
     */
    vfunc_query(query: Gst.Query): boolean
    vfunc_release_pad(pad: Gst.Pad): void
    /**
     * Retrieves a request pad from the element according to the provided template.
     * Pad templates can be looked up using
     * gst_element_factory_get_static_pad_templates().
     * 
     * The pad should be released with gst_element_release_request_pad().
     * @param templ a #GstPadTemplate of which we want a pad of.
     * @param name the name of the request #GstPad to retrieve. Can be %NULL.
     * @param caps the caps of the pad we want to request. Can be %NULL.
     */
    vfunc_request_new_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Sends an event to an element. If the element doesn't implement an
     * event handler, the event will be pushed on a random linked sink pad for
     * downstream events or a random linked source pad for upstream events.
     * 
     * This function takes ownership of the provided event so you should
     * gst_event_ref() it if you want to reuse the event after this call.
     * 
     * MT safe.
     * @param event the #GstEvent to send to the element.
     */
    vfunc_send_event(event: Gst.Event): boolean
    /**
     * Sets the bus of the element. Increases the refcount on the bus.
     * For internal use only, unless you're testing elements.
     * 
     * MT safe.
     * @param bus the #GstBus to set.
     */
    vfunc_set_bus(bus?: Gst.Bus | null): void
    /**
     * Sets the clock for the element. This function increases the
     * refcount on the clock. Any previously set clock on the object
     * is unreffed.
     * @param clock the #GstClock to set for the element.
     */
    vfunc_set_clock(clock?: Gst.Clock | null): boolean
    /**
     * Sets the context of the element. Increases the refcount of the context.
     * 
     * MT safe.
     * @param context the #GstContext to set.
     */
    vfunc_set_context(context: Gst.Context): void
    /**
     * Sets the state of the element. This function will try to set the
     * requested state by going through all the intermediary states and calling
     * the class's state change function for each.
     * 
     * This function can return #GST_STATE_CHANGE_ASYNC, in which case the
     * element will perform the remainder of the state change asynchronously in
     * another thread.
     * An application can use gst_element_get_state() to wait for the completion
     * of the state change or it can wait for a %GST_MESSAGE_ASYNC_DONE or
     * %GST_MESSAGE_STATE_CHANGED on the bus.
     * 
     * State changes to %GST_STATE_READY or %GST_STATE_NULL never return
     * #GST_STATE_CHANGE_ASYNC.
     * @param state the element's new #GstState.
     */
    vfunc_set_state(state: Gst.State): Gst.StateChangeReturn
    vfunc_state_changed(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GstRtp-1.0.GstRtp.RTPBaseDepayload */
    /**
     * Add `ext` as an extension for reading part of an RTP header extension from
     * incoming RTP packets.
     * @param ext the #GstRTPHeaderExtension
     */
    connect(sigName: "add-extension", callback: (($obj: RTPBaseDepayload, ext: RTPHeaderExtension) => void)): number
    connect_after(sigName: "add-extension", callback: (($obj: RTPBaseDepayload, ext: RTPHeaderExtension) => void)): number
    emit(sigName: "add-extension", ext: RTPHeaderExtension): void
    /**
     * Clear all RTP header extensions used by this depayloader.
     */
    connect(sigName: "clear-extensions", callback: (($obj: RTPBaseDepayload) => void)): number
    connect_after(sigName: "clear-extensions", callback: (($obj: RTPBaseDepayload) => void)): number
    emit(sigName: "clear-extensions"): void
    /**
     * The returned `ext` must be configured with the correct `ext_id` and with the
     * necessary attributes as required by the extension implementation.
     * @param ext_id the extension id being requested
     * @param ext_uri the extension URI being requested
     */
    connect(sigName: "request-extension", callback: (($obj: RTPBaseDepayload, ext_id: number, ext_uri?: string | null) => RTPHeaderExtension)): number
    connect_after(sigName: "request-extension", callback: (($obj: RTPBaseDepayload, ext_id: number, ext_uri?: string | null) => RTPHeaderExtension)): number
    emit(sigName: "request-extension", ext_id: number, ext_uri?: string | null): void
    /* Signals of Gst-1.0.Gst.Element */
    /**
     * This signals that the element will not generate more dynamic pads.
     * Note that this signal will usually be emitted from the context of
     * the streaming thread.
     */
    connect(sigName: "no-more-pads", callback: (($obj: RTPBaseDepayload) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: RTPBaseDepayload) => void)): number
    emit(sigName: "no-more-pads"): void
    /**
     * a new #GstPad has been added to the element. Note that this signal will
     * usually be emitted from the context of the streaming thread. Also keep in
     * mind that if you add new elements to the pipeline in the signal handler
     * you will need to set them to the desired target state with
     * gst_element_set_state() or gst_element_sync_state_with_parent().
     * @param new_pad the pad that has been added
     */
    connect(sigName: "pad-added", callback: (($obj: RTPBaseDepayload, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: RTPBaseDepayload, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    /**
     * a #GstPad has been removed from the element
     * @param old_pad the pad that has been removed
     */
    connect(sigName: "pad-removed", callback: (($obj: RTPBaseDepayload, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: RTPBaseDepayload, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    /**
     * The deep notify signal is used to be notified of property changes. It is
     * typically attached to the toplevel bin to receive notifications from all
     * the elements contained in that bin.
     * @param prop_object the object that originated the signal
     * @param prop the property that changed
     */
    connect(sigName: "deep-notify", callback: (($obj: RTPBaseDepayload, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: RTPBaseDepayload, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: RTPBaseDepayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTPBaseDepayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auto-header-extension", callback: (($obj: RTPBaseDepayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-header-extension", callback: (($obj: RTPBaseDepayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-reorder", callback: (($obj: RTPBaseDepayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-reorder", callback: (($obj: RTPBaseDepayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source-info", callback: (($obj: RTPBaseDepayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-info", callback: (($obj: RTPBaseDepayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stats", callback: (($obj: RTPBaseDepayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: (($obj: RTPBaseDepayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RTPBaseDepayload_ConstructProps)
    _init (config?: RTPBaseDepayload_ConstructProps): void
    static $gtype: GObject.Type
}
interface RTPBasePayload_ConstructProps extends Gst.Element_ConstructProps {
    /* Constructor properties of GstRtp-1.0.GstRtp.RTPBasePayload */
    /**
     * If enabled, the payloader will automatically try to enable all the
     * RTP header extensions provided in the src caps, saving the application
     * the need to handle these extensions manually using the
     * GstRTPBasePayload::request-extension: signal.
     */
    auto_header_extension?: boolean
    max_ptime?: number
    /**
     * Minimum duration of the packet data in ns (can't go above MTU)
     */
    min_ptime?: number
    mtu?: number
    /**
     * Make the payloader timestamp packets according to the Rate-Control=no
     * behaviour specified in the ONVIF replay spec.
     */
    onvif_no_rate_control?: boolean
    /**
     * Try to use the offset fields to generate perfect RTP timestamps. When this
     * option is disabled, RTP timestamps are generated from GST_BUFFER_PTS of
     * each payloaded buffer. The PTSes of buffers may not necessarily increment
     * with the amount of data in each input buffer, consider e.g. the case where
     * the buffer arrives from a network which means that the PTS is unrelated to
     * the amount of data. Because the RTP timestamps are generated from
     * GST_BUFFER_PTS this can result in RTP timestamps that also don't increment
     * with the amount of data in the payloaded packet. To circumvent this it is
     * possible to set the perfect rtptime option enabled. When this option is
     * enabled the payloader will increment the RTP timestamps based on
     * GST_BUFFER_OFFSET which relates to the amount of data in each packet
     * rather than the GST_BUFFER_PTS of each buffer and therefore the RTP
     * timestamps will more closely correlate with the amount of data in each
     * buffer. Currently GstRTPBasePayload is limited to handling perfect RTP
     * timestamps for audio streams.
     */
    perfect_rtptime?: boolean
    pt?: number
    /**
     * Force buffers to be multiples of this duration in ns (0 disables)
     */
    ptime_multiple?: number
    /**
     * Make the RTP packets' timestamps be scaled with the segment's rate
     * (corresponding to RTSP speed parameter). Disabling this property means
     * the timestamps will not be affected by the set delivery speed (RTSP speed).
     * 
     * Example: A server wants to allow streaming a recorded video in double
     * speed but still have the timestamps correspond to the position in the
     * video. This is achieved by the client setting RTSP Speed to 2 while the
     * server has this property disabled.
     */
    scale_rtptime?: boolean
    seqnum_offset?: number
    /**
     * Enable writing the CSRC field in allocated RTP header based on RTP source
     * information found in the input buffer's #GstRTPSourceMeta.
     */
    source_info?: boolean
    ssrc?: number
    timestamp_offset?: number
}
class RTPBasePayload {
    /* Properties of GstRtp-1.0.GstRtp.RTPBasePayload */
    /**
     * If enabled, the payloader will automatically try to enable all the
     * RTP header extensions provided in the src caps, saving the application
     * the need to handle these extensions manually using the
     * GstRTPBasePayload::request-extension: signal.
     */
    auto_header_extension: boolean
    max_ptime: number
    /**
     * Minimum duration of the packet data in ns (can't go above MTU)
     */
    min_ptime: number
    mtu: number
    /**
     * Make the payloader timestamp packets according to the Rate-Control=no
     * behaviour specified in the ONVIF replay spec.
     */
    onvif_no_rate_control: boolean
    /**
     * Try to use the offset fields to generate perfect RTP timestamps. When this
     * option is disabled, RTP timestamps are generated from GST_BUFFER_PTS of
     * each payloaded buffer. The PTSes of buffers may not necessarily increment
     * with the amount of data in each input buffer, consider e.g. the case where
     * the buffer arrives from a network which means that the PTS is unrelated to
     * the amount of data. Because the RTP timestamps are generated from
     * GST_BUFFER_PTS this can result in RTP timestamps that also don't increment
     * with the amount of data in the payloaded packet. To circumvent this it is
     * possible to set the perfect rtptime option enabled. When this option is
     * enabled the payloader will increment the RTP timestamps based on
     * GST_BUFFER_OFFSET which relates to the amount of data in each packet
     * rather than the GST_BUFFER_PTS of each buffer and therefore the RTP
     * timestamps will more closely correlate with the amount of data in each
     * buffer. Currently GstRTPBasePayload is limited to handling perfect RTP
     * timestamps for audio streams.
     */
    perfect_rtptime: boolean
    pt: number
    /**
     * Force buffers to be multiples of this duration in ns (0 disables)
     */
    ptime_multiple: number
    /**
     * Make the RTP packets' timestamps be scaled with the segment's rate
     * (corresponding to RTSP speed parameter). Disabling this property means
     * the timestamps will not be affected by the set delivery speed (RTSP speed).
     * 
     * Example: A server wants to allow streaming a recorded video in double
     * speed but still have the timestamps correspond to the position in the
     * video. This is achieved by the client setting RTSP Speed to 2 while the
     * server has this property disabled.
     */
    scale_rtptime: boolean
    readonly seqnum: number
    seqnum_offset: number
    /**
     * Enable writing the CSRC field in allocated RTP header based on RTP source
     * information found in the input buffer's #GstRTPSourceMeta.
     */
    source_info: boolean
    ssrc: number
    /**
     * Various payloader statistics retrieved atomically (and are therefore
     * synchroized with each other), these can be used e.g. to generate an
     * RTP-Info header. This property return a GstStructure named
     * application/x-rtp-payload-stats containing the following fields relating to
     * the last processed buffer and current state of the stream being payloaded:
     * 
     *   * `clock-rate` :#G_TYPE_UINT, clock-rate of the stream
     *   * `running-time` :#G_TYPE_UINT64, running time
     *   * `seqnum` :#G_TYPE_UINT, sequence number, same as #GstRTPBasePayload:seqnum
     *   * `timestamp` :#G_TYPE_UINT, RTP timestamp, same as #GstRTPBasePayload:timestamp
     *   * `ssrc` :#G_TYPE_UINT, The SSRC in use
     *   * `pt` :#G_TYPE_UINT, The Payload type in use, same as #GstRTPBasePayload:pt
     *   * `seqnum-offset` :#G_TYPE_UINT, The current offset added to the seqnum
     *   * `timestamp-offset` :#G_TYPE_UINT, The current offset added to the timestamp
     */
    readonly stats: Gst.Structure
    readonly timestamp: number
    timestamp_offset: number
    /* Fields of Gst-1.0.Gst.Element */
    object: Gst.Object
    /**
     * Used to serialize execution of gst_element_set_state()
     */
    state_lock: GLib.RecMutex
    /**
     * Used to signal completion of a state change
     */
    state_cond: GLib.Cond
    /**
     * Used to detect concurrent execution of
     * gst_element_set_state() and gst_element_get_state()
     */
    state_cookie: number
    /**
     * the target state of an element as set by the application
     */
    target_state: Gst.State
    /**
     * the current state of an element
     */
    current_state: Gst.State
    /**
     * the next state of an element, can be #GST_STATE_VOID_PENDING if
     * the element is in the correct state.
     */
    next_state: Gst.State
    /**
     * the final state the element should go to, can be
     * #GST_STATE_VOID_PENDING if the element is in the correct state
     */
    pending_state: Gst.State
    /**
     * the last return value of an element state change
     */
    last_return: Gst.StateChangeReturn
    /**
     * the bus of the element. This bus is provided to the element by the
     * parent element or the application. A #GstPipeline has a bus of its own.
     */
    bus: Gst.Bus
    /**
     * the clock of the element. This clock is usually provided to the
     * element by the toplevel #GstPipeline.
     */
    clock: Gst.Clock
    /**
     * the time of the clock right before the element is set to
     * PLAYING. Subtracting `base_time` from the current clock time in the PLAYING
     * state will yield the running_time against the clock.
     */
    base_time: Gst.ClockTimeDiff
    /**
     * the running_time of the last PAUSED state
     */
    start_time: Gst.ClockTime
    /**
     * number of pads of the element, includes both source and sink pads.
     */
    numpads: number
    /**
     * list of pads
     */
    pads: Gst.Pad[]
    /**
     * number of source pads of the element.
     */
    numsrcpads: number
    /**
     * list of source pads
     */
    srcpads: Gst.Pad[]
    /**
     * number of sink pads of the element.
     */
    numsinkpads: number
    /**
     * list of sink pads
     */
    sinkpads: Gst.Pad[]
    /**
     * updated whenever the a pad is added or removed
     */
    pads_cookie: number
    /**
     * list of contexts
     */
    contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    /**
     * object LOCK
     */
    lock: GLib.Mutex
    /**
     * The name of the object
     */
    name: string
    /**
     * this object's parent, weak ref
     */
    parent: Gst.Object
    /**
     * flags for this object
     */
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstRtp-1.0.GstRtp.RTPBasePayload */
    /**
     * Allocate a new #GstBuffer with enough data to hold an RTP packet with
     * minimum `csrc_count` CSRCs, a payload length of `payload_len` and padding of
     * `pad_len`. If `payload` has #GstRTPBasePayload:source-info %TRUE additional
     * CSRCs may be allocated and filled with RTP source information.
     * @param payload_len the length of the payload
     * @param pad_len the amount of padding
     * @param csrc_count the minimum number of CSRC entries
     */
    allocate_output_buffer(payload_len: number, pad_len: number, csrc_count: number): Gst.Buffer
    /**
     * Count the total number of RTP sources found in the meta of `buffer,` which
     * will be automically added by gst_rtp_base_payload_allocate_output_buffer().
     * If #GstRTPBasePayload:source-info is %FALSE the count will be 0.
     * @param buffer a #GstBuffer, typically the buffer to payload
     */
    get_source_count(buffer: Gst.Buffer): number
    /**
     * Check if the packet with `size` and `duration` would exceed the configured
     * maximum size.
     * @param size the size of the packet
     * @param duration the duration of the packet
     */
    is_filled(size: number, duration: Gst.ClockTime): boolean
    /**
     * Queries whether the payloader will add contributing sources (CSRCs) to the
     * RTP header from #GstRTPSourceMeta.
     */
    is_source_info_enabled(): boolean
    /**
     * Push `buffer` to the peer element of the payloader. The SSRC, payload type,
     * seqnum and timestamp of the RTP buffer will be updated first.
     * 
     * This function takes ownership of `buffer`.
     * @param buffer a #GstBuffer
     */
    push(buffer: Gst.Buffer): Gst.FlowReturn
    /**
     * Push `list` to the peer element of the payloader. The SSRC, payload type,
     * seqnum and timestamp of the RTP buffer will be updated first.
     * 
     * This function takes ownership of `list`.
     * @param list a #GstBufferList
     */
    push_list(list: Gst.BufferList): Gst.FlowReturn
    /**
     * Set the rtp options of the payloader. These options will be set in the caps
     * of the payloader. Subclasses must call this method before calling
     * gst_rtp_base_payload_push() or gst_rtp_base_payload_set_outcaps().
     * @param media the media type (typically "audio" or "video")
     * @param dynamic if the payload type is dynamic
     * @param encoding_name the encoding name
     * @param clock_rate the clock rate of the media
     */
    set_options(media: string, dynamic: boolean, encoding_name: string, clock_rate: number): void
    /**
     * Configure the output caps with the optional fields.
     * @param s a #GstStructure with the caps fields
     */
    set_outcaps_structure(s?: Gst.Structure | null): boolean
    /**
     * Enable or disable adding contributing sources to RTP packets from
     * #GstRTPSourceMeta.
     * @param enable whether to add contributing sources to RTP packets
     */
    set_source_info_enabled(enable: boolean): void
    /* Methods of Gst-1.0.Gst.Element */
    /**
     * Abort the state change of the element. This function is used
     * by elements that do asynchronous state changes and find out
     * something is wrong.
     * 
     * This function should be called with the STATE_LOCK held.
     * 
     * MT safe.
     */
    abort_state(): void
    /**
     * Adds a pad (link point) to `element`. `pad'`s parent will be set to `element;`
     * see gst_object_set_parent() for refcounting information.
     * 
     * Pads are automatically activated when added in the PAUSED or PLAYING
     * state.
     * 
     * The pad and the element should be unlocked when calling this function.
     * 
     * This function will emit the #GstElement::pad-added signal on the element.
     * @param pad the #GstPad to add to the element.
     */
    add_pad(pad: Gst.Pad): boolean
    add_property_deep_notify_watch(property_name: string | null, include_value: boolean): number
    add_property_notify_watch(property_name: string | null, include_value: boolean): number
    /**
     * Calls `func` from another thread and passes `user_data` to it. This is to be
     * used for cases when a state change has to be performed from a streaming
     * thread, directly via gst_element_set_state() or indirectly e.g. via SEEK
     * events.
     * 
     * Calling those functions directly from the streaming thread will cause
     * deadlocks in many situations, as they might involve waiting for the
     * streaming thread to shut down from this very streaming thread.
     * 
     * MT safe.
     * @param func Function to call asynchronously from another thread
     */
    call_async(func: Gst.ElementCallAsyncFunc): void
    /**
     * Perform `transition` on `element`.
     * 
     * This function must be called with STATE_LOCK held and is mainly used
     * internally.
     * @param transition the requested transition
     */
    change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    /**
     * Commit the state change of the element and proceed to the next
     * pending state if any. This function is used
     * by elements that do asynchronous state changes.
     * The core will normally call this method automatically when an
     * element returned %GST_STATE_CHANGE_SUCCESS from the state change function.
     * 
     * If after calling this method the element still has not reached
     * the pending state, the next state change is performed.
     * 
     * This method is used internally and should normally not be called by plugins
     * or applications.
     * 
     * This function must be called with STATE_LOCK held.
     * @param ret The previous state return value
     */
    continue_state(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    /**
     * Creates a pad for each pad template that is always available.
     * This function is only useful during object initialization of
     * subclasses of #GstElement.
     */
    create_all_pads(): void
    /**
     * Call `func` with `user_data` for each of `element'`s pads. `func` will be called
     * exactly once for each pad that exists at the time of this call, unless
     * one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new pads are added or pads are removed
     * while pads are being iterated, this will not be taken into account until
     * next time this function is used.
     * @param func function to call for each pad
     */
    foreach_pad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s sink pads. `func` will be
     * called exactly once for each sink pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new sink pads are added or sink pads
     * are removed while the sink pads are being iterated, this will not be taken
     * into account until next time this function is used.
     * @param func function to call for each sink pad
     */
    foreach_sink_pad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s source pads. `func` will be
     * called exactly once for each source pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new source pads are added or source pads
     * are removed while the source pads are being iterated, this will not be taken
     * into account until next time this function is used.
     * @param func function to call for each source pad
     */
    foreach_src_pad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Returns the base time of the element. The base time is the
     * absolute time of the clock when this element was last put to
     * PLAYING. Subtracting the base time from the clock time gives
     * the running time of the element.
     */
    get_base_time(): Gst.ClockTime
    /**
     * Returns the bus of the element. Note that only a #GstPipeline will provide a
     * bus for the application.
     */
    get_bus(): Gst.Bus | null
    /**
     * Gets the currently configured clock of the element. This is the clock as was
     * last set with gst_element_set_clock().
     * 
     * Elements in a pipeline will only have their clock set when the
     * pipeline is in the PLAYING state.
     */
    get_clock(): Gst.Clock | null
    /**
     * Looks for an unlinked pad to which the given pad can link. It is not
     * guaranteed that linking the pads will work, though it should work in most
     * cases.
     * 
     * This function will first attempt to find a compatible unlinked ALWAYS pad,
     * and if none can be found, it will request a compatible REQUEST pad by looking
     * at the templates of `element`.
     * @param pad the #GstPad to find a compatible one for.
     * @param caps the #GstCaps to use as a filter.
     */
    get_compatible_pad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Retrieves a pad template from `element` that is compatible with `compattempl`.
     * Pads from compatible templates can be linked together.
     * @param compattempl the #GstPadTemplate to find a compatible     template for
     */
    get_compatible_pad_template(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     * 
     * MT safe.
     * @param context_type a name of a context to retrieve
     */
    get_context(context_type: string): Gst.Context | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     * @param context_type a name of a context to retrieve
     */
    get_context_unlocked(context_type: string): Gst.Context | null
    /**
     * Gets the contexts set on the element.
     * 
     * MT safe.
     */
    get_contexts(): Gst.Context[]
    /**
     * Returns the current clock time of the element, as in, the time of the
     * element's clock, or GST_CLOCK_TIME_NONE if there is no clock.
     */
    get_current_clock_time(): Gst.ClockTime
    /**
     * Returns the running time of the element. The running time is the
     * element's clock time minus its base time. Will return GST_CLOCK_TIME_NONE
     * if the element has no clock, or if its base time has not been set.
     */
    get_current_running_time(): Gst.ClockTime
    /**
     * Retrieves the factory that was used to create this element.
     */
    get_factory(): Gst.ElementFactory | null
    /**
     * Get metadata with `key` in `klass`.
     * @param key the key to get
     */
    get_metadata(key: string): string
    /**
     * Retrieves a padtemplate from `element` with the given name.
     * @param name the name of the #GstPadTemplate to get.
     */
    get_pad_template(name: string): Gst.PadTemplate | null
    /**
     * Retrieves a list of the pad templates associated with `element`. The
     * list must not be modified by the calling code.
     */
    get_pad_template_list(): Gst.PadTemplate[]
    /**
     * The name of this function is confusing to people learning GStreamer.
     * gst_element_request_pad_simple() aims at making it more explicit it is
     * a simplified gst_element_request_pad().
     * @param name the name of the request #GstPad to retrieve.
     */
    get_request_pad(name: string): Gst.Pad | null
    /**
     * Returns the start time of the element. The start time is the
     * running time of the clock when this element was last put to PAUSED.
     * 
     * Usually the start_time is managed by a toplevel element such as
     * #GstPipeline.
     * 
     * MT safe.
     */
    get_start_time(): Gst.ClockTime
    /**
     * Gets the state of the element.
     * 
     * For elements that performed an ASYNC state change, as reported by
     * gst_element_set_state(), this function will block up to the
     * specified timeout value for the state change to complete.
     * If the element completes the state change or goes into
     * an error, this function returns immediately with a return value of
     * %GST_STATE_CHANGE_SUCCESS or %GST_STATE_CHANGE_FAILURE respectively.
     * 
     * For elements that did not return %GST_STATE_CHANGE_ASYNC, this function
     * returns the current and pending state immediately.
     * 
     * This function returns %GST_STATE_CHANGE_NO_PREROLL if the element
     * successfully changed its state but is not able to provide data yet.
     * This mostly happens for live sources that only produce data in
     * %GST_STATE_PLAYING. While the state change return is equivalent to
     * %GST_STATE_CHANGE_SUCCESS, it is returned to the application to signal that
     * some sink elements might not be able to complete their state change because
     * an element is not producing data to complete the preroll. When setting the
     * element to playing, the preroll will complete and playback will start.
     * @param timeout a #GstClockTime to specify the timeout for an async           state change or %GST_CLOCK_TIME_NONE for infinite timeout.
     */
    get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    /**
     * Retrieves a pad from `element` by name. This version only retrieves
     * already-existing (i.e. 'static') pads.
     * @param name the name of the static #GstPad to retrieve.
     */
    get_static_pad(name: string): Gst.Pad | null
    /**
     * Checks if the state of an element is locked.
     * If the state of an element is locked, state changes of the parent don't
     * affect the element.
     * This way you can leave currently unused elements inside bins. Just lock their
     * state before changing the state from #GST_STATE_NULL.
     * 
     * MT safe.
     */
    is_locked_state(): boolean
    /**
     * Retrieves an iterator of `element'`s pads. The iterator should
     * be freed after usage. Also more specialized iterators exists such as
     * gst_element_iterate_src_pads() or gst_element_iterate_sink_pads().
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterate_pads(): Gst.Iterator
    /**
     * Retrieves an iterator of `element'`s sink pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterate_sink_pads(): Gst.Iterator
    /**
     * Retrieves an iterator of `element'`s source pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterate_src_pads(): Gst.Iterator
    /**
     * Links `src` to `dest`. The link must be from source to
     * destination; the other direction will not be tried. The function looks for
     * existing pads that aren't linked yet. It will request new pads if necessary.
     * Such pads need to be released manually when unlinking.
     * If multiple links are possible, only one is established.
     * 
     * Make sure you have added your elements to a bin or pipeline with
     * gst_bin_add() before trying to link them.
     * @param dest the #GstElement containing the destination pad.
     */
    link(dest: Gst.Element): boolean
    /**
     * Links `src` to `dest` using the given caps as filtercaps.
     * The link must be from source to
     * destination; the other direction will not be tried. The function looks for
     * existing pads that aren't linked yet. It will request new pads if necessary.
     * If multiple links are possible, only one is established.
     * 
     * Make sure you have added your elements to a bin or pipeline with
     * gst_bin_add() before trying to link them.
     * @param dest the #GstElement containing the destination pad.
     * @param filter the #GstCaps to filter the link,     or %NULL for no filter.
     */
    link_filtered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    /**
     * Links the two named pads of the source and destination elements.
     * Side effect is that if one of the pads has no parent, it becomes a
     * child of the parent of the other element.  If they have different
     * parents, the link fails.
     * @param srcpadname the name of the #GstPad in source element     or %NULL for any pad.
     * @param dest the #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element, or %NULL for any pad.
     */
    link_pads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    /**
     * Links the two named pads of the source and destination elements. Side effect
     * is that if one of the pads has no parent, it becomes a child of the parent of
     * the other element. If they have different parents, the link fails. If `caps`
     * is not %NULL, makes sure that the caps of the link is a subset of `caps`.
     * @param srcpadname the name of the #GstPad in source element     or %NULL for any pad.
     * @param dest the #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element     or %NULL for any pad.
     * @param filter the #GstCaps to filter the link,     or %NULL for no filter.
     */
    link_pads_filtered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    /**
     * Links the two named pads of the source and destination elements.
     * Side effect is that if one of the pads has no parent, it becomes a
     * child of the parent of the other element.  If they have different
     * parents, the link fails.
     * 
     * Calling gst_element_link_pads_full() with `flags` == %GST_PAD_LINK_CHECK_DEFAULT
     * is the same as calling gst_element_link_pads() and the recommended way of
     * linking pads with safety checks applied.
     * 
     * This is a convenience function for gst_pad_link_full().
     * @param srcpadname the name of the #GstPad in source element     or %NULL for any pad.
     * @param dest the #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element, or %NULL for any pad.
     * @param flags the #GstPadLinkCheck to be performed when linking pads.
     */
    link_pads_full(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    /**
     * Brings the element to the lost state. The current state of the
     * element is copied to the pending state so that any call to
     * gst_element_get_state() will return %GST_STATE_CHANGE_ASYNC.
     * 
     * An ASYNC_START message is posted. If the element was PLAYING, it will
     * go to PAUSED. The element will be restored to its PLAYING state by
     * the parent pipeline when it prerolls again.
     * 
     * This is mostly used for elements that lost their preroll buffer
     * in the %GST_STATE_PAUSED or %GST_STATE_PLAYING state after a flush,
     * they will go to their pending state again when a new preroll buffer is
     * queued. This function can only be called when the element is currently
     * not in error or an async state change.
     * 
     * This function is used internally and should normally not be called from
     * plugins or applications.
     */
    lost_state(): void
    /**
     * Post an error, warning or info message on the bus from inside an element.
     * 
     * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
     * #GST_MESSAGE_INFO.
     * 
     * MT safe.
     * @param type the #GstMessageType
     * @param domain the GStreamer GError domain this message belongs to
     * @param code the GError code belonging to the domain
     * @param text an allocated text string to be used            as a replacement for the default message connected to code,            or %NULL
     * @param debug an allocated debug message to be            used as a replacement for the default debugging information,            or %NULL
     * @param file the source code file where the error was generated
     * @param function_ the source code function where the error was generated
     * @param line the source code line where the error was generated
     */
    message_full(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    /**
     * Post an error, warning or info message on the bus from inside an element.
     * 
     * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
     * #GST_MESSAGE_INFO.
     * @param type the #GstMessageType
     * @param domain the GStreamer GError domain this message belongs to
     * @param code the GError code belonging to the domain
     * @param text an allocated text string to be used            as a replacement for the default message connected to code,            or %NULL
     * @param debug an allocated debug message to be            used as a replacement for the default debugging information,            or %NULL
     * @param file the source code file where the error was generated
     * @param function_ the source code function where the error was generated
     * @param line the source code line where the error was generated
     * @param structure optional details structure
     */
    message_full_with_details(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    /**
     * Use this function to signal that the element does not expect any more pads
     * to show up in the current pipeline. This function should be called whenever
     * pads have been added by the element itself. Elements with #GST_PAD_SOMETIMES
     * pad templates use this in combination with autopluggers to figure out that
     * the element is done initializing its pads.
     * 
     * This function emits the #GstElement::no-more-pads signal.
     * 
     * MT safe.
     */
    no_more_pads(): void
    /**
     * Post a message on the element's #GstBus. This function takes ownership of the
     * message; if you want to access the message after this call, you should add an
     * additional reference before calling.
     * @param message a #GstMessage to post
     */
    post_message(message: Gst.Message): boolean
    /**
     * Get the clock provided by the given element.
     * > An element is only required to provide a clock in the PAUSED
     * > state. Some elements can provide a clock in other states.
     */
    provide_clock(): Gst.Clock | null
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @param query the #GstQuery.
     */
    query(query: Gst.Query): boolean
    /**
     * Queries an element to convert `src_val` in `src_format` to `dest_format`.
     * @param src_format a #GstFormat to convert from.
     * @param src_val a value to convert.
     * @param dest_format the #GstFormat to convert to.
     */
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    /**
     * Queries an element (usually top-level pipeline or playbin element) for the
     * total stream duration in nanoseconds. This query will only work once the
     * pipeline is prerolled (i.e. reached PAUSED or PLAYING state). The application
     * will receive an ASYNC_DONE message on the pipeline bus when that is the case.
     * 
     * If the duration changes for some reason, you will get a DURATION_CHANGED
     * message on the pipeline bus, in which case you should re-query the duration
     * using this function.
     * @param format the #GstFormat requested
     */
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    /**
     * Queries an element (usually top-level pipeline or playbin element) for the
     * stream position in nanoseconds. This will be a value between 0 and the
     * stream duration (if the stream duration is known). This query will usually
     * only work once the pipeline is prerolled (i.e. reached PAUSED or PLAYING
     * state). The application will receive an ASYNC_DONE message on the pipeline
     * bus when that is the case.
     * 
     * If one repeatedly calls this function one can also create a query and reuse
     * it in gst_element_query().
     * @param format the #GstFormat requested
     */
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    /**
     * Makes the element free the previously requested pad as obtained
     * with gst_element_request_pad().
     * 
     * This does not unref the pad. If the pad was created by using
     * gst_element_request_pad(), gst_element_release_request_pad() needs to be
     * followed by gst_object_unref() to free the `pad`.
     * 
     * MT safe.
     * @param pad the #GstPad to release.
     */
    release_request_pad(pad: Gst.Pad): void
    /**
     * Removes `pad` from `element`. `pad` will be destroyed if it has not been
     * referenced elsewhere using gst_object_unparent().
     * 
     * This function is used by plugin developers and should not be used
     * by applications. Pads that were dynamically requested from elements
     * with gst_element_request_pad() should be released with the
     * gst_element_release_request_pad() function instead.
     * 
     * Pads are not automatically deactivated so elements should perform the needed
     * steps to deactivate the pad in case this pad is removed in the PAUSED or
     * PLAYING state. See gst_pad_set_active() for more information about
     * deactivating pads.
     * 
     * The pad and the element should be unlocked when calling this function.
     * 
     * This function will emit the #GstElement::pad-removed signal on the element.
     * @param pad the #GstPad to remove from the element.
     */
    remove_pad(pad: Gst.Pad): boolean
    remove_property_notify_watch(watch_id: number): void
    /**
     * Retrieves a request pad from the element according to the provided template.
     * Pad templates can be looked up using
     * gst_element_factory_get_static_pad_templates().
     * 
     * The pad should be released with gst_element_release_request_pad().
     * @param templ a #GstPadTemplate of which we want a pad of.
     * @param name the name of the request #GstPad to retrieve. Can be %NULL.
     * @param caps the caps of the pad we want to request. Can be %NULL.
     */
    request_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Retrieves a pad from the element by name (e.g. "src_\%d"). This version only
     * retrieves request pads. The pad should be released with
     * gst_element_release_request_pad().
     * 
     * This method is slower than manually getting the pad template and calling
     * gst_element_request_pad() if the pads should have a specific name (e.g.
     * `name` is "src_1" instead of "src_\%u").
     * 
     * Note that this function was introduced in GStreamer 1.20 in order to provide
     * a better name to gst_element_get_request_pad(). Prior to 1.20, users
     * should use gst_element_get_request_pad() which provides the same
     * functionality.
     * @param name the name of the request #GstPad to retrieve.
     */
    request_pad_simple(name: string): Gst.Pad | null
    /**
     * Sends a seek event to an element. See gst_event_new_seek() for the details of
     * the parameters. The seek event is sent to the element using
     * gst_element_send_event().
     * 
     * MT safe.
     * @param rate The new playback rate
     * @param format The format of the seek values
     * @param flags The optional seek flags.
     * @param start_type The type and flags for the new start position
     * @param start The value of the new start position
     * @param stop_type The type and flags for the new stop position
     * @param stop The value of the new stop position
     */
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, start_type: Gst.SeekType, start: number, stop_type: Gst.SeekType, stop: number): boolean
    /**
     * Simple API to perform a seek on the given element, meaning it just seeks
     * to the given position relative to the start of the stream. For more complex
     * operations like segment seeks (e.g. for looping) or changing the playback
     * rate or seeking relative to the last configured playback segment you should
     * use gst_element_seek().
     * 
     * In a completely prerolled PAUSED or PLAYING pipeline, seeking is always
     * guaranteed to return %TRUE on a seekable media type or %FALSE when the media
     * type is certainly not seekable (such as a live stream).
     * 
     * Some elements allow for seeking in the READY state, in this
     * case they will store the seek event and execute it when they are put to
     * PAUSED. If the element supports seek in READY, it will always return %TRUE when
     * it receives the event in the READY state.
     * @param format a #GstFormat to execute the seek in, such as #GST_FORMAT_TIME
     * @param seek_flags seek options; playback applications will usually want to use            GST_SEEK_FLAG_FLUSH | GST_SEEK_FLAG_KEY_UNIT here
     * @param seek_pos position to seek to (relative to the start); if you are doing            a seek in #GST_FORMAT_TIME this value is in nanoseconds -            multiply with #GST_SECOND to convert seconds to nanoseconds or            with #GST_MSECOND to convert milliseconds to nanoseconds.
     */
    seek_simple(format: Gst.Format, seek_flags: Gst.SeekFlags, seek_pos: number): boolean
    /**
     * Sends an event to an element. If the element doesn't implement an
     * event handler, the event will be pushed on a random linked sink pad for
     * downstream events or a random linked source pad for upstream events.
     * 
     * This function takes ownership of the provided event so you should
     * gst_event_ref() it if you want to reuse the event after this call.
     * 
     * MT safe.
     * @param event the #GstEvent to send to the element.
     */
    send_event(event: Gst.Event): boolean
    /**
     * Set the base time of an element. See gst_element_get_base_time().
     * 
     * MT safe.
     * @param time the base time to set.
     */
    set_base_time(time: Gst.ClockTime): void
    /**
     * Sets the bus of the element. Increases the refcount on the bus.
     * For internal use only, unless you're testing elements.
     * 
     * MT safe.
     * @param bus the #GstBus to set.
     */
    set_bus(bus?: Gst.Bus | null): void
    /**
     * Sets the clock for the element. This function increases the
     * refcount on the clock. Any previously set clock on the object
     * is unreffed.
     * @param clock the #GstClock to set for the element.
     */
    set_clock(clock?: Gst.Clock | null): boolean
    /**
     * Sets the context of the element. Increases the refcount of the context.
     * 
     * MT safe.
     * @param context the #GstContext to set.
     */
    set_context(context: Gst.Context): void
    /**
     * Locks the state of an element, so state changes of the parent don't affect
     * this element anymore.
     * 
     * Note that this is racy if the state lock of the parent bin is not taken.
     * The parent bin might've just checked the flag in another thread and as the
     * next step proceed to change the child element's state.
     * 
     * MT safe.
     * @param locked_state %TRUE to lock the element's state
     */
    set_locked_state(locked_state: boolean): boolean
    /**
     * Set the start time of an element. The start time of the element is the
     * running time of the element when it last went to the PAUSED state. In READY
     * or after a flushing seek, it is set to 0.
     * 
     * Toplevel elements like #GstPipeline will manage the start_time and
     * base_time on its children. Setting the start_time to #GST_CLOCK_TIME_NONE
     * on such a toplevel element will disable the distribution of the base_time to
     * the children and can be useful if the application manages the base_time
     * itself, for example if you want to synchronize capture from multiple
     * pipelines, and you can also ensure that the pipelines have the same clock.
     * 
     * MT safe.
     * @param time the base time to set.
     */
    set_start_time(time: Gst.ClockTime): void
    /**
     * Sets the state of the element. This function will try to set the
     * requested state by going through all the intermediary states and calling
     * the class's state change function for each.
     * 
     * This function can return #GST_STATE_CHANGE_ASYNC, in which case the
     * element will perform the remainder of the state change asynchronously in
     * another thread.
     * An application can use gst_element_get_state() to wait for the completion
     * of the state change or it can wait for a %GST_MESSAGE_ASYNC_DONE or
     * %GST_MESSAGE_STATE_CHANGED on the bus.
     * 
     * State changes to %GST_STATE_READY or %GST_STATE_NULL never return
     * #GST_STATE_CHANGE_ASYNC.
     * @param state the element's new #GstState.
     */
    set_state(state: Gst.State): Gst.StateChangeReturn
    /**
     * Tries to change the state of the element to the same as its parent.
     * If this function returns %FALSE, the state of element is undefined.
     */
    sync_state_with_parent(): boolean
    /**
     * Unlinks all source pads of the source element with all sink pads
     * of the sink element to which they are linked.
     * 
     * If the link has been made using gst_element_link(), it could have created an
     * requestpad, which has to be released using gst_element_release_request_pad().
     * @param dest the sink #GstElement to unlink.
     */
    unlink(dest: Gst.Element): void
    /**
     * Unlinks the two named pads of the source and destination elements.
     * 
     * This is a convenience function for gst_pad_unlink().
     * @param srcpadname the name of the #GstPad in source element.
     * @param dest a #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element.
     */
    unlink_pads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    /**
     * Attach the #GstControlBinding to the object. If there already was a
     * #GstControlBinding for this property it will be replaced.
     * 
     * The object's reference count will be incremented, and any floating
     * reference will be removed (see gst_object_ref_sink())
     * @param binding the #GstControlBinding that should be used
     */
    add_control_binding(binding: Gst.ControlBinding): boolean
    /**
     * A default error function that uses g_printerr() to display the error message
     * and the optional debug string..
     * 
     * The default handler will simply print the error string using g_print.
     * @param error the GError.
     * @param debug an additional debug information string, or %NULL
     */
    default_error(error: GLib.Error, debug?: string | null): void
    /**
     * Gets the corresponding #GstControlBinding for the property. This should be
     * unreferenced again after use.
     * @param property_name name of the property
     */
    get_control_binding(property_name: string): Gst.ControlBinding | null
    /**
     * Obtain the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * If the `object` is not under property control, this will return
     * %GST_CLOCK_TIME_NONE. This allows the element to avoid the sub-dividing.
     * 
     * The control-rate is not expected to change if the element is in
     * %GST_STATE_PAUSED or %GST_STATE_PLAYING.
     */
    get_control_rate(): Gst.ClockTime
    /**
     * Gets a number of #GValues for the given controlled property starting at the
     * requested time. The array `values` need to hold enough space for `n_values` of
     * #GValue.
     * 
     * This function is useful if one wants to e.g. draw a graph of the control
     * curve or apply a control curve sample by sample.
     * @param property_name the name of the property to get
     * @param timestamp the time that should be processed
     * @param interval the time spacing between subsequent values
     * @param values array to put control-values in
     */
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    /**
     * Returns a copy of the name of `object`.
     * Caller should g_free() the return value after usage.
     * For a nameless object, this returns %NULL, which you can safely g_free()
     * as well.
     * 
     * Free-function: g_free
     */
    get_name(): string | null
    /**
     * Returns the parent of `object`. This function increases the refcount
     * of the parent object so you should gst_object_unref() it after usage.
     */
    get_parent(): Gst.Object | null
    /**
     * Generates a string describing the path of `object` in
     * the object hierarchy. Only useful (or used) for debugging.
     * 
     * Free-function: g_free
     */
    get_path_string(): string
    /**
     * Gets the value for the given controlled property at the requested time.
     * @param property_name the name of the property to get
     * @param timestamp the time the control-change should be read from
     */
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    /**
     * Check if the `object` has active controlled properties.
     */
    has_active_control_bindings(): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     * @param ancestor a #GstObject to check as ancestor
     */
    has_ancestor(ancestor: Gst.Object): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     * @param ancestor a #GstObject to check as ancestor
     */
    has_as_ancestor(ancestor: Gst.Object): boolean
    /**
     * Check if `parent` is the parent of `object`.
     * E.g. a #GstElement can check if it owns a given #GstPad.
     * @param parent a #GstObject to check as parent
     */
    has_as_parent(parent: Gst.Object): boolean
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     */
    ref(): Gst.Object
    /**
     * Removes the corresponding #GstControlBinding. If it was the
     * last ref of the binding, it will be disposed.
     * @param binding the binding
     */
    remove_control_binding(binding: Gst.ControlBinding): boolean
    /**
     * This function is used to disable the control bindings on a property for
     * some time, i.e. gst_object_sync_values() will do nothing for the
     * property.
     * @param property_name property to disable
     * @param disabled boolean that specifies whether to disable the controller or not.
     */
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    /**
     * This function is used to disable all controlled properties of the `object` for
     * some time, i.e. gst_object_sync_values() will do nothing.
     * @param disabled boolean that specifies whether to disable the controller or not.
     */
    set_control_bindings_disabled(disabled: boolean): void
    /**
     * Change the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * The control-rate should not change if the element is in %GST_STATE_PAUSED or
     * %GST_STATE_PLAYING.
     * @param control_rate the new control-rate in nanoseconds.
     */
    set_control_rate(control_rate: Gst.ClockTime): void
    /**
     * Sets the name of `object,` or gives `object` a guaranteed unique
     * name (if `name` is %NULL).
     * This function makes a copy of the provided name, so the caller
     * retains ownership of the name it sent.
     * @param name new name of object
     */
    set_name(name?: string | null): boolean
    /**
     * Sets the parent of `object` to `parent`. The object's reference count will
     * be incremented, and any floating reference will be removed (see gst_object_ref_sink()).
     * @param parent new parent of object
     */
    set_parent(parent: Gst.Object): boolean
    /**
     * Returns a suggestion for timestamps where buffers should be split
     * to get best controller results.
     */
    suggest_next_sync(): Gst.ClockTime
    /**
     * Sets the properties of the object, according to the #GstControlSources that
     * (maybe) handle them and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     * @param timestamp the time that should be processed
     */
    sync_values(timestamp: Gst.ClockTime): boolean
    /**
     * Clear the parent of `object,` removing the associated reference.
     * This function decreases the refcount of `object`.
     * 
     * MT safe. Grabs and releases `object'`s lock.
     */
    unparent(): void
    /**
     * Decrements the reference count on `object`.  If reference count hits
     * zero, destroy `object`. This function does not take the lock
     * on `object` as it relies on atomic refcounting.
     * 
     * The unref method should never be called with the LOCK held since
     * this might deadlock the dispose function.
     */
    unref(): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GstRtp-1.0.GstRtp.RTPBasePayload */
    vfunc_get_caps(pad: Gst.Pad, filter: Gst.Caps): Gst.Caps
    vfunc_handle_buffer(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_query(pad: Gst.Pad, query: Gst.Query): boolean
    /* Function overloads */
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @param query the #GstQuery.
     */
    vfunc_query(query: Gst.Query): boolean
    vfunc_set_caps(caps: Gst.Caps): boolean
    vfunc_sink_event(event: Gst.Event): boolean
    vfunc_src_event(event: Gst.Event): boolean
    /* Virtual methods of Gst-1.0.Gst.Element */
    /**
     * Perform `transition` on `element`.
     * 
     * This function must be called with STATE_LOCK held and is mainly used
     * internally.
     * @param transition the requested transition
     */
    vfunc_change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    /**
     * Gets the state of the element.
     * 
     * For elements that performed an ASYNC state change, as reported by
     * gst_element_set_state(), this function will block up to the
     * specified timeout value for the state change to complete.
     * If the element completes the state change or goes into
     * an error, this function returns immediately with a return value of
     * %GST_STATE_CHANGE_SUCCESS or %GST_STATE_CHANGE_FAILURE respectively.
     * 
     * For elements that did not return %GST_STATE_CHANGE_ASYNC, this function
     * returns the current and pending state immediately.
     * 
     * This function returns %GST_STATE_CHANGE_NO_PREROLL if the element
     * successfully changed its state but is not able to provide data yet.
     * This mostly happens for live sources that only produce data in
     * %GST_STATE_PLAYING. While the state change return is equivalent to
     * %GST_STATE_CHANGE_SUCCESS, it is returned to the application to signal that
     * some sink elements might not be able to complete their state change because
     * an element is not producing data to complete the preroll. When setting the
     * element to playing, the preroll will complete and playback will start.
     * @param timeout a #GstClockTime to specify the timeout for an async           state change or %GST_CLOCK_TIME_NONE for infinite timeout.
     */
    vfunc_get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    /**
     * Use this function to signal that the element does not expect any more pads
     * to show up in the current pipeline. This function should be called whenever
     * pads have been added by the element itself. Elements with #GST_PAD_SOMETIMES
     * pad templates use this in combination with autopluggers to figure out that
     * the element is done initializing its pads.
     * 
     * This function emits the #GstElement::no-more-pads signal.
     * 
     * MT safe.
     */
    vfunc_no_more_pads(): void
    vfunc_pad_added(pad: Gst.Pad): void
    vfunc_pad_removed(pad: Gst.Pad): void
    /**
     * Post a message on the element's #GstBus. This function takes ownership of the
     * message; if you want to access the message after this call, you should add an
     * additional reference before calling.
     * @param message a #GstMessage to post
     */
    vfunc_post_message(message: Gst.Message): boolean
    /**
     * Get the clock provided by the given element.
     * > An element is only required to provide a clock in the PAUSED
     * > state. Some elements can provide a clock in other states.
     */
    vfunc_provide_clock(): Gst.Clock | null
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @param query the #GstQuery.
     */
    vfunc_query(query: Gst.Query): boolean
    vfunc_release_pad(pad: Gst.Pad): void
    /**
     * Retrieves a request pad from the element according to the provided template.
     * Pad templates can be looked up using
     * gst_element_factory_get_static_pad_templates().
     * 
     * The pad should be released with gst_element_release_request_pad().
     * @param templ a #GstPadTemplate of which we want a pad of.
     * @param name the name of the request #GstPad to retrieve. Can be %NULL.
     * @param caps the caps of the pad we want to request. Can be %NULL.
     */
    vfunc_request_new_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Sends an event to an element. If the element doesn't implement an
     * event handler, the event will be pushed on a random linked sink pad for
     * downstream events or a random linked source pad for upstream events.
     * 
     * This function takes ownership of the provided event so you should
     * gst_event_ref() it if you want to reuse the event after this call.
     * 
     * MT safe.
     * @param event the #GstEvent to send to the element.
     */
    vfunc_send_event(event: Gst.Event): boolean
    /**
     * Sets the bus of the element. Increases the refcount on the bus.
     * For internal use only, unless you're testing elements.
     * 
     * MT safe.
     * @param bus the #GstBus to set.
     */
    vfunc_set_bus(bus?: Gst.Bus | null): void
    /**
     * Sets the clock for the element. This function increases the
     * refcount on the clock. Any previously set clock on the object
     * is unreffed.
     * @param clock the #GstClock to set for the element.
     */
    vfunc_set_clock(clock?: Gst.Clock | null): boolean
    /**
     * Sets the context of the element. Increases the refcount of the context.
     * 
     * MT safe.
     * @param context the #GstContext to set.
     */
    vfunc_set_context(context: Gst.Context): void
    /**
     * Sets the state of the element. This function will try to set the
     * requested state by going through all the intermediary states and calling
     * the class's state change function for each.
     * 
     * This function can return #GST_STATE_CHANGE_ASYNC, in which case the
     * element will perform the remainder of the state change asynchronously in
     * another thread.
     * An application can use gst_element_get_state() to wait for the completion
     * of the state change or it can wait for a %GST_MESSAGE_ASYNC_DONE or
     * %GST_MESSAGE_STATE_CHANGED on the bus.
     * 
     * State changes to %GST_STATE_READY or %GST_STATE_NULL never return
     * #GST_STATE_CHANGE_ASYNC.
     * @param state the element's new #GstState.
     */
    vfunc_set_state(state: Gst.State): Gst.StateChangeReturn
    vfunc_state_changed(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GstRtp-1.0.GstRtp.RTPBasePayload */
    /**
     * Add `ext` as an extension for writing part of an RTP header extension onto
     * outgoing RTP packets.
     * @param ext the #GstRTPHeaderExtension
     */
    connect(sigName: "add-extension", callback: (($obj: RTPBasePayload, ext: RTPHeaderExtension) => void)): number
    connect_after(sigName: "add-extension", callback: (($obj: RTPBasePayload, ext: RTPHeaderExtension) => void)): number
    emit(sigName: "add-extension", ext: RTPHeaderExtension): void
    /**
     * Clear all RTP header extensions used by this payloader.
     */
    connect(sigName: "clear-extensions", callback: (($obj: RTPBasePayload) => void)): number
    connect_after(sigName: "clear-extensions", callback: (($obj: RTPBasePayload) => void)): number
    emit(sigName: "clear-extensions"): void
    /**
     * The returned `ext` must be configured with the correct `ext_id` and with the
     * necessary attributes as required by the extension implementation.
     * @param ext_id the extension id being requested
     * @param ext_uri the extension URI being requested
     */
    connect(sigName: "request-extension", callback: (($obj: RTPBasePayload, ext_id: number, ext_uri: string) => RTPHeaderExtension)): number
    connect_after(sigName: "request-extension", callback: (($obj: RTPBasePayload, ext_id: number, ext_uri: string) => RTPHeaderExtension)): number
    emit(sigName: "request-extension", ext_id: number, ext_uri: string): void
    /* Signals of Gst-1.0.Gst.Element */
    /**
     * This signals that the element will not generate more dynamic pads.
     * Note that this signal will usually be emitted from the context of
     * the streaming thread.
     */
    connect(sigName: "no-more-pads", callback: (($obj: RTPBasePayload) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: RTPBasePayload) => void)): number
    emit(sigName: "no-more-pads"): void
    /**
     * a new #GstPad has been added to the element. Note that this signal will
     * usually be emitted from the context of the streaming thread. Also keep in
     * mind that if you add new elements to the pipeline in the signal handler
     * you will need to set them to the desired target state with
     * gst_element_set_state() or gst_element_sync_state_with_parent().
     * @param new_pad the pad that has been added
     */
    connect(sigName: "pad-added", callback: (($obj: RTPBasePayload, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: RTPBasePayload, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    /**
     * a #GstPad has been removed from the element
     * @param old_pad the pad that has been removed
     */
    connect(sigName: "pad-removed", callback: (($obj: RTPBasePayload, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: RTPBasePayload, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    /**
     * The deep notify signal is used to be notified of property changes. It is
     * typically attached to the toplevel bin to receive notifications from all
     * the elements contained in that bin.
     * @param prop_object the object that originated the signal
     * @param prop the property that changed
     */
    connect(sigName: "deep-notify", callback: (($obj: RTPBasePayload, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: RTPBasePayload, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auto-header-extension", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-header-extension", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::max-ptime", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-ptime", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::min-ptime", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-ptime", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mtu", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::onvif-no-rate-control", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::onvif-no-rate-control", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::perfect-rtptime", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::perfect-rtptime", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pt", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pt", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ptime-multiple", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ptime-multiple", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-rtptime", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-rtptime", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::seqnum", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seqnum", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::seqnum-offset", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seqnum-offset", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::source-info", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-info", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ssrc", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssrc", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::stats", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timestamp", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timestamp-offset", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp-offset", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RTPBasePayload_ConstructProps)
    _init (config?: RTPBasePayload_ConstructProps): void
    static $gtype: GObject.Type
}
interface RTPHeaderExtension_ConstructProps extends Gst.Element_ConstructProps {
}
class RTPHeaderExtension {
    /* Fields of Gst-1.0.Gst.Element */
    object: Gst.Object
    /**
     * Used to serialize execution of gst_element_set_state()
     */
    state_lock: GLib.RecMutex
    /**
     * Used to signal completion of a state change
     */
    state_cond: GLib.Cond
    /**
     * Used to detect concurrent execution of
     * gst_element_set_state() and gst_element_get_state()
     */
    state_cookie: number
    /**
     * the target state of an element as set by the application
     */
    target_state: Gst.State
    /**
     * the current state of an element
     */
    current_state: Gst.State
    /**
     * the next state of an element, can be #GST_STATE_VOID_PENDING if
     * the element is in the correct state.
     */
    next_state: Gst.State
    /**
     * the final state the element should go to, can be
     * #GST_STATE_VOID_PENDING if the element is in the correct state
     */
    pending_state: Gst.State
    /**
     * the last return value of an element state change
     */
    last_return: Gst.StateChangeReturn
    /**
     * the bus of the element. This bus is provided to the element by the
     * parent element or the application. A #GstPipeline has a bus of its own.
     */
    bus: Gst.Bus
    /**
     * the clock of the element. This clock is usually provided to the
     * element by the toplevel #GstPipeline.
     */
    clock: Gst.Clock
    /**
     * the time of the clock right before the element is set to
     * PLAYING. Subtracting `base_time` from the current clock time in the PLAYING
     * state will yield the running_time against the clock.
     */
    base_time: Gst.ClockTimeDiff
    /**
     * the running_time of the last PAUSED state
     */
    start_time: Gst.ClockTime
    /**
     * number of pads of the element, includes both source and sink pads.
     */
    numpads: number
    /**
     * list of pads
     */
    pads: Gst.Pad[]
    /**
     * number of source pads of the element.
     */
    numsrcpads: number
    /**
     * list of source pads
     */
    srcpads: Gst.Pad[]
    /**
     * number of sink pads of the element.
     */
    numsinkpads: number
    /**
     * list of sink pads
     */
    sinkpads: Gst.Pad[]
    /**
     * updated whenever the a pad is added or removed
     */
    pads_cookie: number
    /**
     * list of contexts
     */
    contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    /**
     * object LOCK
     */
    lock: GLib.Mutex
    /**
     * The name of the object
     */
    name: string
    /**
     * this object's parent, weak ref
     */
    parent: Gst.Object
    /**
     * flags for this object
     */
    flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of GstRtp-1.0.GstRtp.RTPHeaderExtension */
    /**
     * Retrieve the direction
     */
    get_direction(): RTPHeaderExtensionDirection
    get_id(): number
    /**
     * This is used to know how much data a certain header extension will need for
     * both allocating the resulting data, and deciding how much payload data can
     * be generated.
     * 
     * Implementations should return as accurate a value as is possible using the
     * information given in the input `buffer`.
     * @param input_meta a #GstBuffer
     */
    get_max_size(input_meta: Gst.Buffer): number
    get_sdp_caps_field_name(): string
    get_supported_flags(): RTPHeaderExtensionFlags
    get_uri(): string
    /**
     * Read the RTP header extension from `data`.
     * @param read_flags #GstRTPHeaderExtensionFlags for how the extension should               be written
     * @param data location to read the rtp header extension from
     * @param buffer a #GstBuffer to modify if necessary
     */
    read(read_flags: RTPHeaderExtensionFlags, data: Uint8Array, buffer: Gst.Buffer): boolean
    /**
     * gst_rtp_header_extension_set_id() must have been called with a valid
     * extension id that is contained in these caps.
     * 
     * The only current known caps format is based on the SDP standard as produced
     * by gst_sdp_media_attributes_to_caps().
     * @param caps the #GstCaps to configure this extension with
     */
    set_attributes_from_caps(caps: Gst.Caps): boolean
    /**
     * gst_rtp_header_extension_set_id() must have been called with a valid
     * extension id that is contained in these caps.
     * 
     * The only current known caps format is based on the SDP standard as produced
     * by gst_sdp_media_attributes_to_caps().
     * @param caps writable #GstCaps to modify
     */
    set_caps_from_attributes(caps: Gst.Caps): boolean
    /**
     * Helper implementation for GstRTPExtensionClass::set_caps_from_attributes
     * that sets the `ext` uri on caps with the specified extension id as required
     * for sdp #GstCaps.
     * 
     * Requires that the extension does not have any attributes or direction
     * advertised in `caps`.
     * @param caps #GstCaps to write fields into
     * @param attributes 
     */
    set_caps_from_attributes_helper(caps: Gst.Caps, attributes: string): boolean
    /**
     * Set the direction that this header extension should be used in.
     * If #GST_RTP_HEADER_EXTENSION_DIRECTION_INHERITED is included, the
     * direction will not be included in the caps (as it shouldn't be in the
     * extmap line in the SDP).
     * @param direction The direction
     */
    set_direction(direction: RTPHeaderExtensionDirection): void
    /**
     * sets the RTP extension id on `ext`
     * @param ext_id The id of this extension
     */
    set_id(ext_id: number): void
    /**
     * Passes RTP payloader's sink (i.e. not payloaded) `caps` to the header
     * extension.
     * @param caps sink #GstCaps
     */
    set_non_rtp_sink_caps(caps: Gst.Caps): boolean
    /**
     * Call this function in a subclass from #GstRTPHeaderExtensionClass::read to
     * tell the depayloader whether the data just parsed from RTP packet require
     * updating its src (non-RTP) caps. If `state` is TRUE, #GstRTPBaseDepayload will
     * eventually invoke gst_rtp_header_extension_update_non_rtp_src_caps() to
     * have the caps update applied. Applying the update also flips the internal
     * "wants update" flag back to FALSE.
     * @param state TRUE if caps update is needed
     */
    set_wants_update_non_rtp_src_caps(state: boolean): void
    /**
     * Updates depayloader src caps based on the information received in RTP header.
     * `caps` must be writable as this function may modify them.
     * @param caps src #GstCaps to modify
     */
    update_non_rtp_src_caps(caps: Gst.Caps): boolean
    /**
     * Call this function after gst_rtp_header_extension_read() to check if
     * the depayloader's src caps need updating with data received in the last RTP
     * packet.
     */
    wants_update_non_rtp_src_caps(): boolean
    /**
     * Writes the RTP header extension to `data` using information available from
     * the `input_meta`.  `data` will be sized to be at least the value returned
     * from gst_rtp_header_extension_get_max_size().
     * @param input_meta the input #GstBuffer to read information from if necessary
     * @param write_flags #GstRTPHeaderExtensionFlags for how the extension should               be written
     * @param output output RTP #GstBuffer
     * @param data location to write the rtp header extension into
     */
    write(input_meta: Gst.Buffer, write_flags: RTPHeaderExtensionFlags, output: Gst.Buffer, data: Uint8Array): number
    /* Methods of Gst-1.0.Gst.Element */
    /**
     * Abort the state change of the element. This function is used
     * by elements that do asynchronous state changes and find out
     * something is wrong.
     * 
     * This function should be called with the STATE_LOCK held.
     * 
     * MT safe.
     */
    abort_state(): void
    /**
     * Adds a pad (link point) to `element`. `pad'`s parent will be set to `element;`
     * see gst_object_set_parent() for refcounting information.
     * 
     * Pads are automatically activated when added in the PAUSED or PLAYING
     * state.
     * 
     * The pad and the element should be unlocked when calling this function.
     * 
     * This function will emit the #GstElement::pad-added signal on the element.
     * @param pad the #GstPad to add to the element.
     */
    add_pad(pad: Gst.Pad): boolean
    add_property_deep_notify_watch(property_name: string | null, include_value: boolean): number
    add_property_notify_watch(property_name: string | null, include_value: boolean): number
    /**
     * Calls `func` from another thread and passes `user_data` to it. This is to be
     * used for cases when a state change has to be performed from a streaming
     * thread, directly via gst_element_set_state() or indirectly e.g. via SEEK
     * events.
     * 
     * Calling those functions directly from the streaming thread will cause
     * deadlocks in many situations, as they might involve waiting for the
     * streaming thread to shut down from this very streaming thread.
     * 
     * MT safe.
     * @param func Function to call asynchronously from another thread
     */
    call_async(func: Gst.ElementCallAsyncFunc): void
    /**
     * Perform `transition` on `element`.
     * 
     * This function must be called with STATE_LOCK held and is mainly used
     * internally.
     * @param transition the requested transition
     */
    change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    /**
     * Commit the state change of the element and proceed to the next
     * pending state if any. This function is used
     * by elements that do asynchronous state changes.
     * The core will normally call this method automatically when an
     * element returned %GST_STATE_CHANGE_SUCCESS from the state change function.
     * 
     * If after calling this method the element still has not reached
     * the pending state, the next state change is performed.
     * 
     * This method is used internally and should normally not be called by plugins
     * or applications.
     * 
     * This function must be called with STATE_LOCK held.
     * @param ret The previous state return value
     */
    continue_state(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    /**
     * Creates a pad for each pad template that is always available.
     * This function is only useful during object initialization of
     * subclasses of #GstElement.
     */
    create_all_pads(): void
    /**
     * Call `func` with `user_data` for each of `element'`s pads. `func` will be called
     * exactly once for each pad that exists at the time of this call, unless
     * one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new pads are added or pads are removed
     * while pads are being iterated, this will not be taken into account until
     * next time this function is used.
     * @param func function to call for each pad
     */
    foreach_pad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s sink pads. `func` will be
     * called exactly once for each sink pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new sink pads are added or sink pads
     * are removed while the sink pads are being iterated, this will not be taken
     * into account until next time this function is used.
     * @param func function to call for each sink pad
     */
    foreach_sink_pad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s source pads. `func` will be
     * called exactly once for each source pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new source pads are added or source pads
     * are removed while the source pads are being iterated, this will not be taken
     * into account until next time this function is used.
     * @param func function to call for each source pad
     */
    foreach_src_pad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Returns the base time of the element. The base time is the
     * absolute time of the clock when this element was last put to
     * PLAYING. Subtracting the base time from the clock time gives
     * the running time of the element.
     */
    get_base_time(): Gst.ClockTime
    /**
     * Returns the bus of the element. Note that only a #GstPipeline will provide a
     * bus for the application.
     */
    get_bus(): Gst.Bus | null
    /**
     * Gets the currently configured clock of the element. This is the clock as was
     * last set with gst_element_set_clock().
     * 
     * Elements in a pipeline will only have their clock set when the
     * pipeline is in the PLAYING state.
     */
    get_clock(): Gst.Clock | null
    /**
     * Looks for an unlinked pad to which the given pad can link. It is not
     * guaranteed that linking the pads will work, though it should work in most
     * cases.
     * 
     * This function will first attempt to find a compatible unlinked ALWAYS pad,
     * and if none can be found, it will request a compatible REQUEST pad by looking
     * at the templates of `element`.
     * @param pad the #GstPad to find a compatible one for.
     * @param caps the #GstCaps to use as a filter.
     */
    get_compatible_pad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Retrieves a pad template from `element` that is compatible with `compattempl`.
     * Pads from compatible templates can be linked together.
     * @param compattempl the #GstPadTemplate to find a compatible     template for
     */
    get_compatible_pad_template(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     * 
     * MT safe.
     * @param context_type a name of a context to retrieve
     */
    get_context(context_type: string): Gst.Context | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     * @param context_type a name of a context to retrieve
     */
    get_context_unlocked(context_type: string): Gst.Context | null
    /**
     * Gets the contexts set on the element.
     * 
     * MT safe.
     */
    get_contexts(): Gst.Context[]
    /**
     * Returns the current clock time of the element, as in, the time of the
     * element's clock, or GST_CLOCK_TIME_NONE if there is no clock.
     */
    get_current_clock_time(): Gst.ClockTime
    /**
     * Returns the running time of the element. The running time is the
     * element's clock time minus its base time. Will return GST_CLOCK_TIME_NONE
     * if the element has no clock, or if its base time has not been set.
     */
    get_current_running_time(): Gst.ClockTime
    /**
     * Retrieves the factory that was used to create this element.
     */
    get_factory(): Gst.ElementFactory | null
    /**
     * Get metadata with `key` in `klass`.
     * @param key the key to get
     */
    get_metadata(key: string): string
    /**
     * Retrieves a padtemplate from `element` with the given name.
     * @param name the name of the #GstPadTemplate to get.
     */
    get_pad_template(name: string): Gst.PadTemplate | null
    /**
     * Retrieves a list of the pad templates associated with `element`. The
     * list must not be modified by the calling code.
     */
    get_pad_template_list(): Gst.PadTemplate[]
    /**
     * The name of this function is confusing to people learning GStreamer.
     * gst_element_request_pad_simple() aims at making it more explicit it is
     * a simplified gst_element_request_pad().
     * @param name the name of the request #GstPad to retrieve.
     */
    get_request_pad(name: string): Gst.Pad | null
    /**
     * Returns the start time of the element. The start time is the
     * running time of the clock when this element was last put to PAUSED.
     * 
     * Usually the start_time is managed by a toplevel element such as
     * #GstPipeline.
     * 
     * MT safe.
     */
    get_start_time(): Gst.ClockTime
    /**
     * Gets the state of the element.
     * 
     * For elements that performed an ASYNC state change, as reported by
     * gst_element_set_state(), this function will block up to the
     * specified timeout value for the state change to complete.
     * If the element completes the state change or goes into
     * an error, this function returns immediately with a return value of
     * %GST_STATE_CHANGE_SUCCESS or %GST_STATE_CHANGE_FAILURE respectively.
     * 
     * For elements that did not return %GST_STATE_CHANGE_ASYNC, this function
     * returns the current and pending state immediately.
     * 
     * This function returns %GST_STATE_CHANGE_NO_PREROLL if the element
     * successfully changed its state but is not able to provide data yet.
     * This mostly happens for live sources that only produce data in
     * %GST_STATE_PLAYING. While the state change return is equivalent to
     * %GST_STATE_CHANGE_SUCCESS, it is returned to the application to signal that
     * some sink elements might not be able to complete their state change because
     * an element is not producing data to complete the preroll. When setting the
     * element to playing, the preroll will complete and playback will start.
     * @param timeout a #GstClockTime to specify the timeout for an async           state change or %GST_CLOCK_TIME_NONE for infinite timeout.
     */
    get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    /**
     * Retrieves a pad from `element` by name. This version only retrieves
     * already-existing (i.e. 'static') pads.
     * @param name the name of the static #GstPad to retrieve.
     */
    get_static_pad(name: string): Gst.Pad | null
    /**
     * Checks if the state of an element is locked.
     * If the state of an element is locked, state changes of the parent don't
     * affect the element.
     * This way you can leave currently unused elements inside bins. Just lock their
     * state before changing the state from #GST_STATE_NULL.
     * 
     * MT safe.
     */
    is_locked_state(): boolean
    /**
     * Retrieves an iterator of `element'`s pads. The iterator should
     * be freed after usage. Also more specialized iterators exists such as
     * gst_element_iterate_src_pads() or gst_element_iterate_sink_pads().
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterate_pads(): Gst.Iterator
    /**
     * Retrieves an iterator of `element'`s sink pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterate_sink_pads(): Gst.Iterator
    /**
     * Retrieves an iterator of `element'`s source pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterate_src_pads(): Gst.Iterator
    /**
     * Links `src` to `dest`. The link must be from source to
     * destination; the other direction will not be tried. The function looks for
     * existing pads that aren't linked yet. It will request new pads if necessary.
     * Such pads need to be released manually when unlinking.
     * If multiple links are possible, only one is established.
     * 
     * Make sure you have added your elements to a bin or pipeline with
     * gst_bin_add() before trying to link them.
     * @param dest the #GstElement containing the destination pad.
     */
    link(dest: Gst.Element): boolean
    /**
     * Links `src` to `dest` using the given caps as filtercaps.
     * The link must be from source to
     * destination; the other direction will not be tried. The function looks for
     * existing pads that aren't linked yet. It will request new pads if necessary.
     * If multiple links are possible, only one is established.
     * 
     * Make sure you have added your elements to a bin or pipeline with
     * gst_bin_add() before trying to link them.
     * @param dest the #GstElement containing the destination pad.
     * @param filter the #GstCaps to filter the link,     or %NULL for no filter.
     */
    link_filtered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    /**
     * Links the two named pads of the source and destination elements.
     * Side effect is that if one of the pads has no parent, it becomes a
     * child of the parent of the other element.  If they have different
     * parents, the link fails.
     * @param srcpadname the name of the #GstPad in source element     or %NULL for any pad.
     * @param dest the #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element, or %NULL for any pad.
     */
    link_pads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    /**
     * Links the two named pads of the source and destination elements. Side effect
     * is that if one of the pads has no parent, it becomes a child of the parent of
     * the other element. If they have different parents, the link fails. If `caps`
     * is not %NULL, makes sure that the caps of the link is a subset of `caps`.
     * @param srcpadname the name of the #GstPad in source element     or %NULL for any pad.
     * @param dest the #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element     or %NULL for any pad.
     * @param filter the #GstCaps to filter the link,     or %NULL for no filter.
     */
    link_pads_filtered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
    /**
     * Links the two named pads of the source and destination elements.
     * Side effect is that if one of the pads has no parent, it becomes a
     * child of the parent of the other element.  If they have different
     * parents, the link fails.
     * 
     * Calling gst_element_link_pads_full() with `flags` == %GST_PAD_LINK_CHECK_DEFAULT
     * is the same as calling gst_element_link_pads() and the recommended way of
     * linking pads with safety checks applied.
     * 
     * This is a convenience function for gst_pad_link_full().
     * @param srcpadname the name of the #GstPad in source element     or %NULL for any pad.
     * @param dest the #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element, or %NULL for any pad.
     * @param flags the #GstPadLinkCheck to be performed when linking pads.
     */
    link_pads_full(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
    /**
     * Brings the element to the lost state. The current state of the
     * element is copied to the pending state so that any call to
     * gst_element_get_state() will return %GST_STATE_CHANGE_ASYNC.
     * 
     * An ASYNC_START message is posted. If the element was PLAYING, it will
     * go to PAUSED. The element will be restored to its PLAYING state by
     * the parent pipeline when it prerolls again.
     * 
     * This is mostly used for elements that lost their preroll buffer
     * in the %GST_STATE_PAUSED or %GST_STATE_PLAYING state after a flush,
     * they will go to their pending state again when a new preroll buffer is
     * queued. This function can only be called when the element is currently
     * not in error or an async state change.
     * 
     * This function is used internally and should normally not be called from
     * plugins or applications.
     */
    lost_state(): void
    /**
     * Post an error, warning or info message on the bus from inside an element.
     * 
     * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
     * #GST_MESSAGE_INFO.
     * 
     * MT safe.
     * @param type the #GstMessageType
     * @param domain the GStreamer GError domain this message belongs to
     * @param code the GError code belonging to the domain
     * @param text an allocated text string to be used            as a replacement for the default message connected to code,            or %NULL
     * @param debug an allocated debug message to be            used as a replacement for the default debugging information,            or %NULL
     * @param file the source code file where the error was generated
     * @param function_ the source code function where the error was generated
     * @param line the source code line where the error was generated
     */
    message_full(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    /**
     * Post an error, warning or info message on the bus from inside an element.
     * 
     * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
     * #GST_MESSAGE_INFO.
     * @param type the #GstMessageType
     * @param domain the GStreamer GError domain this message belongs to
     * @param code the GError code belonging to the domain
     * @param text an allocated text string to be used            as a replacement for the default message connected to code,            or %NULL
     * @param debug an allocated debug message to be            used as a replacement for the default debugging information,            or %NULL
     * @param file the source code file where the error was generated
     * @param function_ the source code function where the error was generated
     * @param line the source code line where the error was generated
     * @param structure optional details structure
     */
    message_full_with_details(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
    /**
     * Use this function to signal that the element does not expect any more pads
     * to show up in the current pipeline. This function should be called whenever
     * pads have been added by the element itself. Elements with #GST_PAD_SOMETIMES
     * pad templates use this in combination with autopluggers to figure out that
     * the element is done initializing its pads.
     * 
     * This function emits the #GstElement::no-more-pads signal.
     * 
     * MT safe.
     */
    no_more_pads(): void
    /**
     * Post a message on the element's #GstBus. This function takes ownership of the
     * message; if you want to access the message after this call, you should add an
     * additional reference before calling.
     * @param message a #GstMessage to post
     */
    post_message(message: Gst.Message): boolean
    /**
     * Get the clock provided by the given element.
     * > An element is only required to provide a clock in the PAUSED
     * > state. Some elements can provide a clock in other states.
     */
    provide_clock(): Gst.Clock | null
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @param query the #GstQuery.
     */
    query(query: Gst.Query): boolean
    /**
     * Queries an element to convert `src_val` in `src_format` to `dest_format`.
     * @param src_format a #GstFormat to convert from.
     * @param src_val a value to convert.
     * @param dest_format the #GstFormat to convert to.
     */
    query_convert(src_format: Gst.Format, src_val: number, dest_format: Gst.Format): [ /* returnType */ boolean, /* dest_val */ number ]
    /**
     * Queries an element (usually top-level pipeline or playbin element) for the
     * total stream duration in nanoseconds. This query will only work once the
     * pipeline is prerolled (i.e. reached PAUSED or PLAYING state). The application
     * will receive an ASYNC_DONE message on the pipeline bus when that is the case.
     * 
     * If the duration changes for some reason, you will get a DURATION_CHANGED
     * message on the pipeline bus, in which case you should re-query the duration
     * using this function.
     * @param format the #GstFormat requested
     */
    query_duration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
    /**
     * Queries an element (usually top-level pipeline or playbin element) for the
     * stream position in nanoseconds. This will be a value between 0 and the
     * stream duration (if the stream duration is known). This query will usually
     * only work once the pipeline is prerolled (i.e. reached PAUSED or PLAYING
     * state). The application will receive an ASYNC_DONE message on the pipeline
     * bus when that is the case.
     * 
     * If one repeatedly calls this function one can also create a query and reuse
     * it in gst_element_query().
     * @param format the #GstFormat requested
     */
    query_position(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    /**
     * Makes the element free the previously requested pad as obtained
     * with gst_element_request_pad().
     * 
     * This does not unref the pad. If the pad was created by using
     * gst_element_request_pad(), gst_element_release_request_pad() needs to be
     * followed by gst_object_unref() to free the `pad`.
     * 
     * MT safe.
     * @param pad the #GstPad to release.
     */
    release_request_pad(pad: Gst.Pad): void
    /**
     * Removes `pad` from `element`. `pad` will be destroyed if it has not been
     * referenced elsewhere using gst_object_unparent().
     * 
     * This function is used by plugin developers and should not be used
     * by applications. Pads that were dynamically requested from elements
     * with gst_element_request_pad() should be released with the
     * gst_element_release_request_pad() function instead.
     * 
     * Pads are not automatically deactivated so elements should perform the needed
     * steps to deactivate the pad in case this pad is removed in the PAUSED or
     * PLAYING state. See gst_pad_set_active() for more information about
     * deactivating pads.
     * 
     * The pad and the element should be unlocked when calling this function.
     * 
     * This function will emit the #GstElement::pad-removed signal on the element.
     * @param pad the #GstPad to remove from the element.
     */
    remove_pad(pad: Gst.Pad): boolean
    remove_property_notify_watch(watch_id: number): void
    /**
     * Retrieves a request pad from the element according to the provided template.
     * Pad templates can be looked up using
     * gst_element_factory_get_static_pad_templates().
     * 
     * The pad should be released with gst_element_release_request_pad().
     * @param templ a #GstPadTemplate of which we want a pad of.
     * @param name the name of the request #GstPad to retrieve. Can be %NULL.
     * @param caps the caps of the pad we want to request. Can be %NULL.
     */
    request_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Retrieves a pad from the element by name (e.g. "src_\%d"). This version only
     * retrieves request pads. The pad should be released with
     * gst_element_release_request_pad().
     * 
     * This method is slower than manually getting the pad template and calling
     * gst_element_request_pad() if the pads should have a specific name (e.g.
     * `name` is "src_1" instead of "src_\%u").
     * 
     * Note that this function was introduced in GStreamer 1.20 in order to provide
     * a better name to gst_element_get_request_pad(). Prior to 1.20, users
     * should use gst_element_get_request_pad() which provides the same
     * functionality.
     * @param name the name of the request #GstPad to retrieve.
     */
    request_pad_simple(name: string): Gst.Pad | null
    /**
     * Sends a seek event to an element. See gst_event_new_seek() for the details of
     * the parameters. The seek event is sent to the element using
     * gst_element_send_event().
     * 
     * MT safe.
     * @param rate The new playback rate
     * @param format The format of the seek values
     * @param flags The optional seek flags.
     * @param start_type The type and flags for the new start position
     * @param start The value of the new start position
     * @param stop_type The type and flags for the new stop position
     * @param stop The value of the new stop position
     */
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, start_type: Gst.SeekType, start: number, stop_type: Gst.SeekType, stop: number): boolean
    /**
     * Simple API to perform a seek on the given element, meaning it just seeks
     * to the given position relative to the start of the stream. For more complex
     * operations like segment seeks (e.g. for looping) or changing the playback
     * rate or seeking relative to the last configured playback segment you should
     * use gst_element_seek().
     * 
     * In a completely prerolled PAUSED or PLAYING pipeline, seeking is always
     * guaranteed to return %TRUE on a seekable media type or %FALSE when the media
     * type is certainly not seekable (such as a live stream).
     * 
     * Some elements allow for seeking in the READY state, in this
     * case they will store the seek event and execute it when they are put to
     * PAUSED. If the element supports seek in READY, it will always return %TRUE when
     * it receives the event in the READY state.
     * @param format a #GstFormat to execute the seek in, such as #GST_FORMAT_TIME
     * @param seek_flags seek options; playback applications will usually want to use            GST_SEEK_FLAG_FLUSH | GST_SEEK_FLAG_KEY_UNIT here
     * @param seek_pos position to seek to (relative to the start); if you are doing            a seek in #GST_FORMAT_TIME this value is in nanoseconds -            multiply with #GST_SECOND to convert seconds to nanoseconds or            with #GST_MSECOND to convert milliseconds to nanoseconds.
     */
    seek_simple(format: Gst.Format, seek_flags: Gst.SeekFlags, seek_pos: number): boolean
    /**
     * Sends an event to an element. If the element doesn't implement an
     * event handler, the event will be pushed on a random linked sink pad for
     * downstream events or a random linked source pad for upstream events.
     * 
     * This function takes ownership of the provided event so you should
     * gst_event_ref() it if you want to reuse the event after this call.
     * 
     * MT safe.
     * @param event the #GstEvent to send to the element.
     */
    send_event(event: Gst.Event): boolean
    /**
     * Set the base time of an element. See gst_element_get_base_time().
     * 
     * MT safe.
     * @param time the base time to set.
     */
    set_base_time(time: Gst.ClockTime): void
    /**
     * Sets the bus of the element. Increases the refcount on the bus.
     * For internal use only, unless you're testing elements.
     * 
     * MT safe.
     * @param bus the #GstBus to set.
     */
    set_bus(bus?: Gst.Bus | null): void
    /**
     * Sets the clock for the element. This function increases the
     * refcount on the clock. Any previously set clock on the object
     * is unreffed.
     * @param clock the #GstClock to set for the element.
     */
    set_clock(clock?: Gst.Clock | null): boolean
    /**
     * Sets the context of the element. Increases the refcount of the context.
     * 
     * MT safe.
     * @param context the #GstContext to set.
     */
    set_context(context: Gst.Context): void
    /**
     * Locks the state of an element, so state changes of the parent don't affect
     * this element anymore.
     * 
     * Note that this is racy if the state lock of the parent bin is not taken.
     * The parent bin might've just checked the flag in another thread and as the
     * next step proceed to change the child element's state.
     * 
     * MT safe.
     * @param locked_state %TRUE to lock the element's state
     */
    set_locked_state(locked_state: boolean): boolean
    /**
     * Set the start time of an element. The start time of the element is the
     * running time of the element when it last went to the PAUSED state. In READY
     * or after a flushing seek, it is set to 0.
     * 
     * Toplevel elements like #GstPipeline will manage the start_time and
     * base_time on its children. Setting the start_time to #GST_CLOCK_TIME_NONE
     * on such a toplevel element will disable the distribution of the base_time to
     * the children and can be useful if the application manages the base_time
     * itself, for example if you want to synchronize capture from multiple
     * pipelines, and you can also ensure that the pipelines have the same clock.
     * 
     * MT safe.
     * @param time the base time to set.
     */
    set_start_time(time: Gst.ClockTime): void
    /**
     * Sets the state of the element. This function will try to set the
     * requested state by going through all the intermediary states and calling
     * the class's state change function for each.
     * 
     * This function can return #GST_STATE_CHANGE_ASYNC, in which case the
     * element will perform the remainder of the state change asynchronously in
     * another thread.
     * An application can use gst_element_get_state() to wait for the completion
     * of the state change or it can wait for a %GST_MESSAGE_ASYNC_DONE or
     * %GST_MESSAGE_STATE_CHANGED on the bus.
     * 
     * State changes to %GST_STATE_READY or %GST_STATE_NULL never return
     * #GST_STATE_CHANGE_ASYNC.
     * @param state the element's new #GstState.
     */
    set_state(state: Gst.State): Gst.StateChangeReturn
    /**
     * Tries to change the state of the element to the same as its parent.
     * If this function returns %FALSE, the state of element is undefined.
     */
    sync_state_with_parent(): boolean
    /**
     * Unlinks all source pads of the source element with all sink pads
     * of the sink element to which they are linked.
     * 
     * If the link has been made using gst_element_link(), it could have created an
     * requestpad, which has to be released using gst_element_release_request_pad().
     * @param dest the sink #GstElement to unlink.
     */
    unlink(dest: Gst.Element): void
    /**
     * Unlinks the two named pads of the source and destination elements.
     * 
     * This is a convenience function for gst_pad_unlink().
     * @param srcpadname the name of the #GstPad in source element.
     * @param dest a #GstElement containing the destination pad.
     * @param destpadname the name of the #GstPad in destination element.
     */
    unlink_pads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    /**
     * Attach the #GstControlBinding to the object. If there already was a
     * #GstControlBinding for this property it will be replaced.
     * 
     * The object's reference count will be incremented, and any floating
     * reference will be removed (see gst_object_ref_sink())
     * @param binding the #GstControlBinding that should be used
     */
    add_control_binding(binding: Gst.ControlBinding): boolean
    /**
     * A default error function that uses g_printerr() to display the error message
     * and the optional debug string..
     * 
     * The default handler will simply print the error string using g_print.
     * @param error the GError.
     * @param debug an additional debug information string, or %NULL
     */
    default_error(error: GLib.Error, debug?: string | null): void
    /**
     * Gets the corresponding #GstControlBinding for the property. This should be
     * unreferenced again after use.
     * @param property_name name of the property
     */
    get_control_binding(property_name: string): Gst.ControlBinding | null
    /**
     * Obtain the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * If the `object` is not under property control, this will return
     * %GST_CLOCK_TIME_NONE. This allows the element to avoid the sub-dividing.
     * 
     * The control-rate is not expected to change if the element is in
     * %GST_STATE_PAUSED or %GST_STATE_PLAYING.
     */
    get_control_rate(): Gst.ClockTime
    /**
     * Gets a number of #GValues for the given controlled property starting at the
     * requested time. The array `values` need to hold enough space for `n_values` of
     * #GValue.
     * 
     * This function is useful if one wants to e.g. draw a graph of the control
     * curve or apply a control curve sample by sample.
     * @param property_name the name of the property to get
     * @param timestamp the time that should be processed
     * @param interval the time spacing between subsequent values
     * @param values array to put control-values in
     */
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    /**
     * Returns a copy of the name of `object`.
     * Caller should g_free() the return value after usage.
     * For a nameless object, this returns %NULL, which you can safely g_free()
     * as well.
     * 
     * Free-function: g_free
     */
    get_name(): string | null
    /**
     * Returns the parent of `object`. This function increases the refcount
     * of the parent object so you should gst_object_unref() it after usage.
     */
    get_parent(): Gst.Object | null
    /**
     * Generates a string describing the path of `object` in
     * the object hierarchy. Only useful (or used) for debugging.
     * 
     * Free-function: g_free
     */
    get_path_string(): string
    /**
     * Gets the value for the given controlled property at the requested time.
     * @param property_name the name of the property to get
     * @param timestamp the time the control-change should be read from
     */
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    /**
     * Check if the `object` has active controlled properties.
     */
    has_active_control_bindings(): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     * @param ancestor a #GstObject to check as ancestor
     */
    has_ancestor(ancestor: Gst.Object): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     * @param ancestor a #GstObject to check as ancestor
     */
    has_as_ancestor(ancestor: Gst.Object): boolean
    /**
     * Check if `parent` is the parent of `object`.
     * E.g. a #GstElement can check if it owns a given #GstPad.
     * @param parent a #GstObject to check as parent
     */
    has_as_parent(parent: Gst.Object): boolean
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     */
    ref(): Gst.Object
    /**
     * Removes the corresponding #GstControlBinding. If it was the
     * last ref of the binding, it will be disposed.
     * @param binding the binding
     */
    remove_control_binding(binding: Gst.ControlBinding): boolean
    /**
     * This function is used to disable the control bindings on a property for
     * some time, i.e. gst_object_sync_values() will do nothing for the
     * property.
     * @param property_name property to disable
     * @param disabled boolean that specifies whether to disable the controller or not.
     */
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    /**
     * This function is used to disable all controlled properties of the `object` for
     * some time, i.e. gst_object_sync_values() will do nothing.
     * @param disabled boolean that specifies whether to disable the controller or not.
     */
    set_control_bindings_disabled(disabled: boolean): void
    /**
     * Change the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * The control-rate should not change if the element is in %GST_STATE_PAUSED or
     * %GST_STATE_PLAYING.
     * @param control_rate the new control-rate in nanoseconds.
     */
    set_control_rate(control_rate: Gst.ClockTime): void
    /**
     * Sets the name of `object,` or gives `object` a guaranteed unique
     * name (if `name` is %NULL).
     * This function makes a copy of the provided name, so the caller
     * retains ownership of the name it sent.
     * @param name new name of object
     */
    set_name(name?: string | null): boolean
    /**
     * Sets the parent of `object` to `parent`. The object's reference count will
     * be incremented, and any floating reference will be removed (see gst_object_ref_sink()).
     * @param parent new parent of object
     */
    set_parent(parent: Gst.Object): boolean
    /**
     * Returns a suggestion for timestamps where buffers should be split
     * to get best controller results.
     */
    suggest_next_sync(): Gst.ClockTime
    /**
     * Sets the properties of the object, according to the #GstControlSources that
     * (maybe) handle them and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     * @param timestamp the time that should be processed
     */
    sync_values(timestamp: Gst.ClockTime): boolean
    /**
     * Clear the parent of `object,` removing the associated reference.
     * This function decreases the refcount of `object`.
     * 
     * MT safe. Grabs and releases `object'`s lock.
     */
    unparent(): void
    /**
     * Decrements the reference count on `object`.  If reference count hits
     * zero, destroy `object`. This function does not take the lock
     * on `object` as it relies on atomic refcounting.
     * 
     * The unref method should never be called with the LOCK held since
     * this might deadlock the dispose function.
     */
    unref(): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GstRtp-1.0.GstRtp.RTPHeaderExtension */
    /**
     * This is used to know how much data a certain header extension will need for
     * both allocating the resulting data, and deciding how much payload data can
     * be generated.
     * 
     * Implementations should return as accurate a value as is possible using the
     * information given in the input `buffer`.
     * @param input_meta a #GstBuffer
     */
    vfunc_get_max_size(input_meta: Gst.Buffer): number
    vfunc_get_supported_flags(): RTPHeaderExtensionFlags
    /**
     * Read the RTP header extension from `data`.
     * @param read_flags #GstRTPHeaderExtensionFlags for how the extension should               be written
     * @param data location to read the rtp header extension from
     * @param buffer a #GstBuffer to modify if necessary
     */
    vfunc_read(read_flags: RTPHeaderExtensionFlags, data: Uint8Array, buffer: Gst.Buffer): boolean
    vfunc_set_attributes(direction: RTPHeaderExtensionDirection, attributes: string): boolean
    /**
     * gst_rtp_header_extension_set_id() must have been called with a valid
     * extension id that is contained in these caps.
     * 
     * The only current known caps format is based on the SDP standard as produced
     * by gst_sdp_media_attributes_to_caps().
     * @param caps writable #GstCaps to modify
     */
    vfunc_set_caps_from_attributes(caps: Gst.Caps): boolean
    /**
     * Passes RTP payloader's sink (i.e. not payloaded) `caps` to the header
     * extension.
     * @param caps sink #GstCaps
     */
    vfunc_set_non_rtp_sink_caps(caps: Gst.Caps): boolean
    /**
     * Updates depayloader src caps based on the information received in RTP header.
     * `caps` must be writable as this function may modify them.
     * @param caps src #GstCaps to modify
     */
    vfunc_update_non_rtp_src_caps(caps: Gst.Caps): boolean
    /**
     * Writes the RTP header extension to `data` using information available from
     * the `input_meta`.  `data` will be sized to be at least the value returned
     * from gst_rtp_header_extension_get_max_size().
     * @param input_meta the input #GstBuffer to read information from if necessary
     * @param write_flags #GstRTPHeaderExtensionFlags for how the extension should               be written
     * @param output output RTP #GstBuffer
     * @param data location to write the rtp header extension into
     */
    vfunc_write(input_meta: Gst.Buffer, write_flags: RTPHeaderExtensionFlags, output: Gst.Buffer, data: Uint8Array): number
    /* Virtual methods of Gst-1.0.Gst.Element */
    /**
     * Perform `transition` on `element`.
     * 
     * This function must be called with STATE_LOCK held and is mainly used
     * internally.
     * @param transition the requested transition
     */
    vfunc_change_state(transition: Gst.StateChange): Gst.StateChangeReturn
    /**
     * Gets the state of the element.
     * 
     * For elements that performed an ASYNC state change, as reported by
     * gst_element_set_state(), this function will block up to the
     * specified timeout value for the state change to complete.
     * If the element completes the state change or goes into
     * an error, this function returns immediately with a return value of
     * %GST_STATE_CHANGE_SUCCESS or %GST_STATE_CHANGE_FAILURE respectively.
     * 
     * For elements that did not return %GST_STATE_CHANGE_ASYNC, this function
     * returns the current and pending state immediately.
     * 
     * This function returns %GST_STATE_CHANGE_NO_PREROLL if the element
     * successfully changed its state but is not able to provide data yet.
     * This mostly happens for live sources that only produce data in
     * %GST_STATE_PLAYING. While the state change return is equivalent to
     * %GST_STATE_CHANGE_SUCCESS, it is returned to the application to signal that
     * some sink elements might not be able to complete their state change because
     * an element is not producing data to complete the preroll. When setting the
     * element to playing, the preroll will complete and playback will start.
     * @param timeout a #GstClockTime to specify the timeout for an async           state change or %GST_CLOCK_TIME_NONE for infinite timeout.
     */
    vfunc_get_state(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    /**
     * Use this function to signal that the element does not expect any more pads
     * to show up in the current pipeline. This function should be called whenever
     * pads have been added by the element itself. Elements with #GST_PAD_SOMETIMES
     * pad templates use this in combination with autopluggers to figure out that
     * the element is done initializing its pads.
     * 
     * This function emits the #GstElement::no-more-pads signal.
     * 
     * MT safe.
     */
    vfunc_no_more_pads(): void
    vfunc_pad_added(pad: Gst.Pad): void
    vfunc_pad_removed(pad: Gst.Pad): void
    /**
     * Post a message on the element's #GstBus. This function takes ownership of the
     * message; if you want to access the message after this call, you should add an
     * additional reference before calling.
     * @param message a #GstMessage to post
     */
    vfunc_post_message(message: Gst.Message): boolean
    /**
     * Get the clock provided by the given element.
     * > An element is only required to provide a clock in the PAUSED
     * > state. Some elements can provide a clock in other states.
     */
    vfunc_provide_clock(): Gst.Clock | null
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @param query the #GstQuery.
     */
    vfunc_query(query: Gst.Query): boolean
    vfunc_release_pad(pad: Gst.Pad): void
    /**
     * Retrieves a request pad from the element according to the provided template.
     * Pad templates can be looked up using
     * gst_element_factory_get_static_pad_templates().
     * 
     * The pad should be released with gst_element_release_request_pad().
     * @param templ a #GstPadTemplate of which we want a pad of.
     * @param name the name of the request #GstPad to retrieve. Can be %NULL.
     * @param caps the caps of the pad we want to request. Can be %NULL.
     */
    vfunc_request_new_pad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Sends an event to an element. If the element doesn't implement an
     * event handler, the event will be pushed on a random linked sink pad for
     * downstream events or a random linked source pad for upstream events.
     * 
     * This function takes ownership of the provided event so you should
     * gst_event_ref() it if you want to reuse the event after this call.
     * 
     * MT safe.
     * @param event the #GstEvent to send to the element.
     */
    vfunc_send_event(event: Gst.Event): boolean
    /**
     * Sets the bus of the element. Increases the refcount on the bus.
     * For internal use only, unless you're testing elements.
     * 
     * MT safe.
     * @param bus the #GstBus to set.
     */
    vfunc_set_bus(bus?: Gst.Bus | null): void
    /**
     * Sets the clock for the element. This function increases the
     * refcount on the clock. Any previously set clock on the object
     * is unreffed.
     * @param clock the #GstClock to set for the element.
     */
    vfunc_set_clock(clock?: Gst.Clock | null): boolean
    /**
     * Sets the context of the element. Increases the refcount of the context.
     * 
     * MT safe.
     * @param context the #GstContext to set.
     */
    vfunc_set_context(context: Gst.Context): void
    /**
     * Sets the state of the element. This function will try to set the
     * requested state by going through all the intermediary states and calling
     * the class's state change function for each.
     * 
     * This function can return #GST_STATE_CHANGE_ASYNC, in which case the
     * element will perform the remainder of the state change asynchronously in
     * another thread.
     * An application can use gst_element_get_state() to wait for the completion
     * of the state change or it can wait for a %GST_MESSAGE_ASYNC_DONE or
     * %GST_MESSAGE_STATE_CHANGED on the bus.
     * 
     * State changes to %GST_STATE_READY or %GST_STATE_NULL never return
     * #GST_STATE_CHANGE_ASYNC.
     * @param state the element's new #GstState.
     */
    vfunc_set_state(state: Gst.State): Gst.StateChangeReturn
    vfunc_state_changed(oldstate: Gst.State, newstate: Gst.State, pending: Gst.State): void
    /* Virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gst-1.0.Gst.Element */
    /**
     * This signals that the element will not generate more dynamic pads.
     * Note that this signal will usually be emitted from the context of
     * the streaming thread.
     */
    connect(sigName: "no-more-pads", callback: (($obj: RTPHeaderExtension) => void)): number
    connect_after(sigName: "no-more-pads", callback: (($obj: RTPHeaderExtension) => void)): number
    emit(sigName: "no-more-pads"): void
    /**
     * a new #GstPad has been added to the element. Note that this signal will
     * usually be emitted from the context of the streaming thread. Also keep in
     * mind that if you add new elements to the pipeline in the signal handler
     * you will need to set them to the desired target state with
     * gst_element_set_state() or gst_element_sync_state_with_parent().
     * @param new_pad the pad that has been added
     */
    connect(sigName: "pad-added", callback: (($obj: RTPHeaderExtension, new_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-added", callback: (($obj: RTPHeaderExtension, new_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-added", new_pad: Gst.Pad): void
    /**
     * a #GstPad has been removed from the element
     * @param old_pad the pad that has been removed
     */
    connect(sigName: "pad-removed", callback: (($obj: RTPHeaderExtension, old_pad: Gst.Pad) => void)): number
    connect_after(sigName: "pad-removed", callback: (($obj: RTPHeaderExtension, old_pad: Gst.Pad) => void)): number
    emit(sigName: "pad-removed", old_pad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    /**
     * The deep notify signal is used to be notified of property changes. It is
     * typically attached to the toplevel bin to receive notifications from all
     * the elements contained in that bin.
     * @param prop_object the object that originated the signal
     * @param prop the property that changed
     */
    connect(sigName: "deep-notify", callback: (($obj: RTPHeaderExtension, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: RTPHeaderExtension, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: RTPHeaderExtension, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: RTPHeaderExtension, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: RTPHeaderExtension_ConstructProps)
    _init (config?: RTPHeaderExtension_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static create_from_uri(uri: string): RTPHeaderExtension | null
    /**
     * Set the URI for this RTP header extension implementation.
     * @param uri the RTP Header extension uri for `klass`
     */
    static set_uri(klass: RTPHeaderExtension | Function | GObject.Type, uri: string): void
    static $gtype: GObject.Type
}
class RTCPBuffer {
    /* Fields of GstRtp-1.0.GstRtp.RTCPBuffer */
    buffer: Gst.Buffer
    map: Gst.MapInfo
    /* Methods of GstRtp-1.0.GstRtp.RTCPBuffer */
    /**
     * Add a new packet of `type` to `rtcp`. `packet` will point to the newly created
     * packet.
     * @param type the #GstRTCPType of the new packet
     * @param packet pointer to new packet
     */
    add_packet(type: RTCPType, packet: RTCPPacket): boolean
    /**
     * Initialize a new #GstRTCPPacket pointer that points to the first packet in
     * `rtcp`.
     * @param packet a #GstRTCPPacket
     */
    get_first_packet(packet: RTCPPacket): boolean
    /**
     * Get the number of RTCP packets in `rtcp`.
     */
    get_packet_count(): number
    /**
     * Finish `rtcp` after being constructed. This function is usually called
     * after gst_rtcp_buffer_map() and after adding the RTCP items to the new buffer.
     * 
     * The function adjusts the size of `rtcp` with the total length of all the
     * added packets.
     */
    unmap(): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Open `buffer` for reading or writing, depending on `flags`. The resulting RTCP
     * buffer state is stored in `rtcp`.
     * @param buffer a buffer with an RTCP packet
     * @param flags flags for the mapping
     * @param rtcp resulting #GstRTCPBuffer
     */
    static map(buffer: Gst.Buffer, flags: Gst.MapFlags, rtcp: RTCPBuffer): boolean
    /**
     * Create a new buffer and set the data to a copy of `len`
     * bytes of `data` and the size to `len`. The data will be freed when the buffer
     * is freed.
     * @param data data for the new buffer
     */
    static new_copy_data(data: Uint8Array): Gst.Buffer
    /**
     * Create a new buffer and set the data and size of the buffer to `data` and `len`
     * respectively. `data` will be freed when the buffer is unreffed, so this
     * function transfers ownership of `data` to the new buffer.
     * @param data data for the new buffer
     */
    static new_take_data(data: Uint8Array): Gst.Buffer
    /**
     * Check if the data pointed to by `buffer` is a valid RTCP packet using
     * gst_rtcp_buffer_validate_data().
     * @param buffer the buffer to validate
     */
    static validate(buffer: Gst.Buffer): boolean
    /**
     * Check if the `data` and `size` point to the data of a valid compound,
     * non-reduced size RTCP packet.
     * Use this function to validate a packet before using the other functions in
     * this module.
     * @param data the data to validate
     */
    static validate_data(data: Uint8Array): boolean
    /**
     * Check if the `data` and `size` point to the data of a valid RTCP packet.
     * Use this function to validate a packet before using the other functions in
     * this module.
     * 
     * This function is updated to support reduced size rtcp packets according to
     * RFC 5506 and will validate full compound RTCP packets as well as reduced
     * size RTCP packets.
     * @param data the data to validate
     */
    static validate_data_reduced(data: Uint8Array): boolean
    /**
     * Check if the data pointed to by `buffer` is a valid RTCP packet using
     * gst_rtcp_buffer_validate_reduced().
     * @param buffer the buffer to validate
     */
    static validate_reduced(buffer: Gst.Buffer): boolean
}
class RTCPPacket {
    /* Fields of GstRtp-1.0.GstRtp.RTCPPacket */
    /**
     * pointer to RTCP buffer
     */
    rtcp: RTCPBuffer
    /**
     * offset of packet in buffer data
     */
    offset: number
    /* Methods of GstRtp-1.0.GstRtp.RTCPPacket */
    /**
     * Add profile-specific extension `data` to `packet`. If `packet` already
     * contains profile-specific extension `data` will be appended to the existing
     * extension.
     * @param data profile-specific data
     */
    add_profile_specific_ext(data: Uint8Array): boolean
    /**
     * Add a new report block to `packet` with the given values.
     * @param ssrc data source being reported
     * @param fractionlost fraction lost since last SR/RR
     * @param packetslost the cumululative number of packets lost
     * @param exthighestseq the extended last sequence number received
     * @param jitter the interarrival jitter
     * @param lsr the last SR packet from this source
     * @param dlsr the delay since last SR packet
     */
    add_rb(ssrc: number, fractionlost: number, packetslost: number, exthighestseq: number, jitter: number, lsr: number, dlsr: number): boolean
    /**
     * Get the application-dependent data attached to a RTPFB or PSFB `packet`.
     */
    app_get_data(): number
    /**
     * Get the length of the application-dependent data attached to an APP
     * `packet`.
     */
    app_get_data_length(): number
    /**
     * Get the name field of the APP `packet`.
     */
    app_get_name(): string
    /**
     * Get the SSRC/CSRC field of the APP `packet`.
     */
    app_get_ssrc(): number
    /**
     * Get the subtype field of the APP `packet`.
     */
    app_get_subtype(): number
    /**
     * Set the length of the application-dependent data attached to an APP
     * `packet`.
     * @param wordlen Length of the data in 32-bit words
     */
    app_set_data_length(wordlen: number): boolean
    /**
     * Set the name field of the APP `packet`.
     * @param name 4-byte ASCII name
     */
    app_set_name(name: string): void
    /**
     * Set the SSRC/CSRC field of the APP `packet`.
     * @param ssrc SSRC/CSRC of the packet
     */
    app_set_ssrc(ssrc: number): void
    /**
     * Set the subtype field of the APP `packet`.
     * @param subtype subtype of the packet
     */
    app_set_subtype(subtype: number): void
    /**
     * Add `ssrc` to the BYE `packet`.
     * @param ssrc an SSRC to add
     */
    bye_add_ssrc(ssrc: number): boolean
    /**
     * Adds `len` SSRCs in `ssrc` to BYE `packet`.
     * @param ssrc an array of SSRCs to add
     */
    bye_add_ssrcs(ssrc: number[]): boolean
    /**
     * Get the `nth` SSRC of the BYE `packet`.
     * @param nth the nth SSRC to get
     */
    bye_get_nth_ssrc(nth: number): number
    /**
     * Get the reason in `packet`.
     */
    bye_get_reason(): string
    /**
     * Get the length of the reason string.
     */
    bye_get_reason_len(): number
    /**
     * Get the number of SSRC fields in `packet`.
     */
    bye_get_ssrc_count(): number
    /**
     * Set the reason string to `reason` in `packet`.
     * @param reason a reason string
     */
    bye_set_reason(reason: string): boolean
    /**
     * The profile-specific extension data is copied into a new allocated
     * memory area `data`. This must be freed with g_free() after usage.
     */
    copy_profile_specific_ext(): [ /* returnType */ boolean, /* data */ Uint8Array ]
    /**
     * Get the Feedback Control Information attached to a RTPFB or PSFB `packet`.
     */
    fb_get_fci(): number
    /**
     * Get the length of the Feedback Control Information attached to a
     * RTPFB or PSFB `packet`.
     */
    fb_get_fci_length(): number
    /**
     * Get the media SSRC field of the RTPFB or PSFB `packet`.
     */
    fb_get_media_ssrc(): number
    /**
     * Get the sender SSRC field of the RTPFB or PSFB `packet`.
     */
    fb_get_sender_ssrc(): number
    /**
     * Get the feedback message type of the FB `packet`.
     */
    fb_get_type(): RTCPFBType
    /**
     * Set the length of the Feedback Control Information attached to a
     * RTPFB or PSFB `packet`.
     * @param wordlen Length of the FCI in 32-bit words
     */
    fb_set_fci_length(wordlen: number): boolean
    /**
     * Set the media SSRC field of the RTPFB or PSFB `packet`.
     * @param ssrc a media SSRC
     */
    fb_set_media_ssrc(ssrc: number): void
    /**
     * Set the sender SSRC field of the RTPFB or PSFB `packet`.
     * @param ssrc a sender SSRC
     */
    fb_set_sender_ssrc(ssrc: number): void
    /**
     * Set the feedback message type of the FB `packet`.
     * @param type the #GstRTCPFBType to set
     */
    fb_set_type(type: RTCPFBType): void
    /**
     * Get the count field in `packet`.
     */
    get_count(): number
    /**
     * Get the length field of `packet`. This is the length of the packet in
     * 32-bit words minus one.
     */
    get_length(): number
    /**
     * Get the packet padding of the packet pointed to by `packet`.
     */
    get_padding(): boolean
    get_profile_specific_ext(): [ /* returnType */ boolean, /* data */ Uint8Array ]
    get_profile_specific_ext_length(): number
    /**
     * Parse the values of the `nth` report block in `packet` and store the result in
     * the values.
     * @param nth the nth report block in `packet`
     */
    get_rb(nth: number): [ /* ssrc */ number, /* fractionlost */ number, /* packetslost */ number, /* exthighestseq */ number, /* jitter */ number, /* lsr */ number, /* dlsr */ number ]
    /**
     * Get the number of report blocks in `packet`.
     */
    get_rb_count(): number
    /**
     * Get the packet type of the packet pointed to by `packet`.
     */
    get_type(): RTCPType
    /**
     * Move the packet pointer `packet` to the next packet in the payload.
     * Use gst_rtcp_buffer_get_first_packet() to initialize `packet`.
     */
    move_to_next(): boolean
    /**
     * Removes the packet pointed to by `packet` and moves pointer to the next one
     */
    remove(): boolean
    /**
     * Get the ssrc field of the RR `packet`.
     */
    rr_get_ssrc(): number
    /**
     * Set the ssrc field of the RR `packet`.
     * @param ssrc the SSRC to set
     */
    rr_set_ssrc(ssrc: number): void
    /**
     * Add a new SDES entry to the current item in `packet`.
     * @param type the #GstRTCPSDESType of the SDES entry
     * @param data the data
     */
    sdes_add_entry(type: RTCPSDESType, data: Uint8Array): boolean
    /**
     * Add a new SDES item for `ssrc` to `packet`.
     * @param ssrc the SSRC of the new item to add
     */
    sdes_add_item(ssrc: number): boolean
    /**
     * This function is like gst_rtcp_packet_sdes_get_entry() but it returns a
     * null-terminated copy of the data instead. use g_free() after usage.
     * @param type result of the entry type
     */
    sdes_copy_entry(type: RTCPSDESType): [ /* returnType */ boolean, /* data */ Uint8Array ]
    /**
     * Move to the first SDES entry in the current item.
     */
    sdes_first_entry(): boolean
    /**
     * Move to the first SDES item in `packet`.
     */
    sdes_first_item(): boolean
    /**
     * Get the data of the current SDES item entry. `type` (when not NULL) will
     * contain the type of the entry. `data` (when not NULL) will point to `len`
     * bytes.
     * 
     * When `type` refers to a text item, `data` will point to a UTF8 string. Note
     * that this UTF8 string is NOT null-terminated. Use
     * gst_rtcp_packet_sdes_copy_entry() to get a null-terminated copy of the entry.
     * @param type result of the entry type
     */
    sdes_get_entry(type: RTCPSDESType): [ /* returnType */ boolean, /* data */ Uint8Array ]
    /**
     * Get the number of items in the SDES packet `packet`.
     */
    sdes_get_item_count(): number
    /**
     * Get the SSRC of the current SDES item.
     */
    sdes_get_ssrc(): number
    /**
     * Move to the next SDES entry in the current item.
     */
    sdes_next_entry(): boolean
    /**
     * Move to the next SDES item in `packet`.
     */
    sdes_next_item(): boolean
    /**
     * Set the `nth` new report block in `packet` with the given values.
     * 
     * Note: Not implemented.
     * @param nth the nth report block to set
     * @param ssrc data source being reported
     * @param fractionlost fraction lost since last SR/RR
     * @param packetslost the cumululative number of packets lost
     * @param exthighestseq the extended last sequence number received
     * @param jitter the interarrival jitter
     * @param lsr the last SR packet from this source
     * @param dlsr the delay since last SR packet
     */
    set_rb(nth: number, ssrc: number, fractionlost: number, packetslost: number, exthighestseq: number, jitter: number, lsr: number, dlsr: number): void
    /**
     * Parse the SR sender info and store the values.
     */
    sr_get_sender_info(): [ /* ssrc */ number, /* ntptime */ number, /* rtptime */ number, /* packet_count */ number, /* octet_count */ number ]
    /**
     * Set the given values in the SR packet `packet`.
     * @param ssrc the SSRC
     * @param ntptime the NTP time
     * @param rtptime the RTP time
     * @param packet_count the packet count
     * @param octet_count the octet count
     */
    sr_set_sender_info(ssrc: number, ntptime: number, rtptime: number, packet_count: number, octet_count: number): void
    /**
     * Move to the first extended report block in XR `packet`.
     */
    xr_first_rb(): boolean
    xr_get_block_length(): number
    /**
     * Get the extended report block type of the XR `packet`.
     */
    xr_get_block_type(): RTCPXRType
    /**
     * Parse the extended report block for DLRR report block type.
     * @param nth the index of sub-block to retrieve.
     * @param ssrc the SSRC of the receiver.
     * @param last_rr the last receiver reference timestamp of `ssrc`.
     * @param delay the delay since `last_rr`.
     */
    xr_get_dlrr_block(nth: number, ssrc: number, last_rr: number, delay: number): boolean
    /**
     * Retrieve the packet receipt time of `seq` which ranges in [begin_seq, end_seq).
     * @param seq the sequence to retrieve the time.
     * @param receipt_time the packet receipt time of `seq`.
     */
    xr_get_prt_by_seq(seq: number, receipt_time: number): boolean
    /**
     * Parse the Packet Recept Times Report Block from a XR `packet`
     * @param ssrc the SSRC of the RTP data packet source being reported upon by this report block.
     * @param thinning the amount of thinning performed on the sequence number space.
     * @param begin_seq the first sequence number that this block reports on.
     * @param end_seq the last sequence number that this block reports on plus one.
     */
    xr_get_prt_info(ssrc: number, thinning: number, begin_seq: number, end_seq: number): boolean
    /**
     * Parse the extended report block for Loss RLE and Duplicated LRE block type.
     * @param ssrc the SSRC of the RTP data packet source being reported upon by this report block.
     * @param thinning the amount of thinning performed on the sequence number space.
     * @param begin_seq the first sequence number that this block reports on.
     * @param end_seq the last sequence number that this block reports on plus one.
     * @param chunk_count the number of chunks calculated by block length.
     */
    xr_get_rle_info(ssrc: number, thinning: number, begin_seq: number, end_seq: number, chunk_count: number): boolean
    /**
     * Retrieve actual chunk data.
     * @param nth the index of chunk to retrieve.
     * @param chunk the `nth` chunk.
     */
    xr_get_rle_nth_chunk(nth: number, chunk: number): boolean
    xr_get_rrt(timestamp: number): boolean
    /**
     * Get the ssrc field of the XR `packet`.
     */
    xr_get_ssrc(): number
    /**
     * Extract a basic information from static summary report block of XR `packet`.
     * @param ssrc the SSRC of the source.
     * @param begin_seq the first sequence number that this block reports on.
     * @param end_seq the last sequence number that this block reports on plus one.
     */
    xr_get_summary_info(ssrc: number, begin_seq: number, end_seq: number): boolean
    /**
     * Extract jitter information from the statistics summary. If the jitter flag in
     * a block header is set as zero, all of jitters will be zero.
     * @param min_jitter the minimum relative transit time between two sequences.
     * @param max_jitter the maximum relative transit time between two sequences.
     * @param mean_jitter the mean relative transit time between two sequences.
     * @param dev_jitter the standard deviation of the relative transit time between two sequences.
     */
    xr_get_summary_jitter(min_jitter: number, max_jitter: number, mean_jitter: number, dev_jitter: number): boolean
    /**
     * Get the number of lost or duplicate packets. If the flag in a block header
     * is set as zero, `lost_packets` or `dup_packets` will be zero.
     * @param lost_packets the number of lost packets between begin_seq and end_seq.
     * @param dup_packets the number of duplicate packets between begin_seq and end_seq.
     */
    xr_get_summary_pkt(lost_packets: number, dup_packets: number): boolean
    /**
     * Extract the value of ttl for ipv4, or hop limit for ipv6.
     * @param is_ipv4 the flag to indicate that the return values are ipv4 ttl or ipv6 hop limits.
     * @param min_ttl the minimum TTL or Hop Limit value of data packets between two sequences.
     * @param max_ttl the maximum TTL or Hop Limit value of data packets between two sequences.
     * @param mean_ttl the mean TTL or Hop Limit value of data packets between two sequences.
     * @param dev_ttl the standard deviation of the TTL or Hop Limit value of data packets between two sequences.
     */
    xr_get_summary_ttl(is_ipv4: boolean, min_ttl: number, max_ttl: number, mean_ttl: number, dev_ttl: number): boolean
    xr_get_voip_burst_metrics(burst_density: number, gap_density: number, burst_duration: number, gap_duration: number): boolean
    xr_get_voip_configuration_params(gmin: number, rx_config: number): boolean
    xr_get_voip_delay_metrics(roundtrip_delay: number, end_system_delay: number): boolean
    xr_get_voip_jitter_buffer_params(jb_nominal: number, jb_maximum: number, jb_abs_max: number): boolean
    xr_get_voip_metrics_ssrc(ssrc: number): boolean
    xr_get_voip_packet_metrics(loss_rate: number, discard_rate: number): boolean
    xr_get_voip_quality_metrics(r_factor: number, ext_r_factor: number, mos_lq: number, mos_cq: number): boolean
    xr_get_voip_signal_metrics(signal_level: number, noise_level: number, rerl: number, gmin: number): boolean
    /**
     * Move to the next extended report block in XR `packet`.
     */
    xr_next_rb(): boolean
    static name: string
}
abstract class RTPBaseAudioPayloadClass {
    /* Fields of GstRtp-1.0.GstRtp.RTPBaseAudioPayloadClass */
    /**
     * the parent class
     */
    parent_class: RTPBasePayloadClass
    static name: string
}
class RTPBaseAudioPayloadPrivate {
    static name: string
}
abstract class RTPBaseDepayloadClass {
    /* Fields of GstRtp-1.0.GstRtp.RTPBaseDepayloadClass */
    /**
     * the parent class
     */
    parent_class: Gst.ElementClass
    set_caps: (filter: RTPBaseDepayload, caps: Gst.Caps) => boolean
    process: (base: RTPBaseDepayload, in_: Gst.Buffer) => Gst.Buffer
    packet_lost: (filter: RTPBaseDepayload, event: Gst.Event) => boolean
    handle_event: (filter: RTPBaseDepayload, event: Gst.Event) => boolean
    process_rtp_packet: (base: RTPBaseDepayload, rtp_buffer: RTPBuffer) => Gst.Buffer
    static name: string
}
class RTPBaseDepayloadPrivate {
    static name: string
}
abstract class RTPBasePayloadClass {
    /* Fields of GstRtp-1.0.GstRtp.RTPBasePayloadClass */
    /**
     * the parent class
     */
    parent_class: Gst.ElementClass
    get_caps: (payload: RTPBasePayload, pad: Gst.Pad, filter: Gst.Caps) => Gst.Caps
    set_caps: (payload: RTPBasePayload, caps: Gst.Caps) => boolean
    handle_buffer: (payload: RTPBasePayload, buffer: Gst.Buffer) => Gst.FlowReturn
    sink_event: (payload: RTPBasePayload, event: Gst.Event) => boolean
    src_event: (payload: RTPBasePayload, event: Gst.Event) => boolean
    query: (payload: RTPBasePayload, pad: Gst.Pad, query: Gst.Query) => boolean
    static name: string
}
class RTPBasePayloadPrivate {
    static name: string
}
class RTPBuffer {
    /* Fields of GstRtp-1.0.GstRtp.RTPBuffer */
    /**
     * pointer to RTP buffer
     */
    buffer: Gst.Buffer
    /**
     * internal state
     */
    state: number
    /**
     * array of data
     */
    data: object[]
    /**
     * array of size
     */
    size: number[]
    /**
     * array of #GstMapInfo
     */
    map: Gst.MapInfo[]
    /* Methods of GstRtp-1.0.GstRtp.RTPBuffer */
    /**
     * Adds a RFC 5285 header extension with a one byte header to the end of the
     * RTP header. If there is already a RFC 5285 header extension with a one byte
     * header, the new extension will be appended.
     * It will not work if there is already a header extension that does not follow
     * the mechanism described in RFC 5285 or if there is a header extension with
     * a two bytes header as described in RFC 5285. In that case, use
     * gst_rtp_buffer_add_extension_twobytes_header()
     * @param id The ID of the header extension (between 1 and 14).
     * @param data location for data
     */
    add_extension_onebyte_header(id: number, data: Uint8Array): boolean
    /**
     * Adds a RFC 5285 header extension with a two bytes header to the end of the
     * RTP header. If there is already a RFC 5285 header extension with a two bytes
     * header, the new extension will be appended.
     * It will not work if there is already a header extension that does not follow
     * the mechanism described in RFC 5285 or if there is a header extension with
     * a one byte header as described in RFC 5285. In that case, use
     * gst_rtp_buffer_add_extension_onebyte_header()
     * @param appbits Application specific bits
     * @param id The ID of the header extension
     * @param data location for data
     */
    add_extension_twobytes_header(appbits: number, id: number, data: Uint8Array): boolean
    /**
     * Get the CSRC at index `idx` in `buffer`.
     * @param idx the index of the CSRC to get
     */
    get_csrc(idx: number): number
    /**
     * Get the CSRC count of the RTP packet in `buffer`.
     */
    get_csrc_count(): number
    /**
     * Check if the extension bit is set on the RTP packet in `buffer`.
     */
    get_extension(): boolean
    /**
     * Similar to gst_rtp_buffer_get_extension_data, but more suitable for language
     * bindings usage. `bits` will contain the extension 16 bits of custom data and
     * the extension data (not including the extension header) is placed in a new
     * #GBytes structure.
     * 
     * If `rtp` did not contain an extension, this function will return %NULL, with
     * `bits` unchanged. If there is an extension header but no extension data then
     * an empty #GBytes will be returned.
     */
    get_extension_data(): [ /* returnType */ GLib.Bytes, /* bits */ number ]
    /**
     * Parses RFC 5285 style header extensions with a one byte header. It will
     * return the nth extension with the requested id.
     * @param id The ID of the header extension to be read (between 1 and 14).
     * @param nth Read the nth extension packet with the requested ID
     */
    get_extension_onebyte_header(id: number, nth: number): [ /* returnType */ boolean, /* data */ Uint8Array | null ]
    /**
     * Parses RFC 5285 style header extensions with a two bytes header. It will
     * return the nth extension with the requested id.
     * @param id The ID of the header extension to be read (between 1 and 14).
     * @param nth Read the nth extension packet with the requested ID
     */
    get_extension_twobytes_header(id: number, nth: number): [ /* returnType */ boolean, /* appbits */ number | null, /* data */ Uint8Array | null ]
    /**
     * Return the total length of the header in `buffer`. This include the length of
     * the fixed header, the CSRC list and the extension header.
     */
    get_header_len(): number
    /**
     * Check if the marker bit is set on the RTP packet in `buffer`.
     */
    get_marker(): boolean
    /**
     * Return the total length of the packet in `buffer`.
     */
    get_packet_len(): number
    /**
     * Check if the padding bit is set on the RTP packet in `buffer`.
     */
    get_padding(): boolean
    /**
     * Create a buffer of the payload of the RTP packet in `buffer`. This function
     * will internally create a subbuffer of `buffer` so that a memcpy can be
     * avoided.
     */
    get_payload_buffer(): Gst.Buffer
    /**
     * Similar to gst_rtp_buffer_get_payload, but more suitable for language
     * bindings usage. The return value is a pointer to a #GBytes structure
     * containing the payload data in `rtp`.
     */
    get_payload(): GLib.Bytes
    /**
     * Get the length of the payload of the RTP packet in `buffer`.
     */
    get_payload_len(): number
    /**
     * Create a subbuffer of the payload of the RTP packet in `buffer`. `offset` bytes
     * are skipped in the payload and the subbuffer will be of size `len`.
     * If `len` is -1 the total payload starting from `offset` is subbuffered.
     * @param offset the offset in the payload
     * @param len the length in the payload
     */
    get_payload_subbuffer(offset: number, len: number): Gst.Buffer
    /**
     * Get the payload type of the RTP packet in `buffer`.
     */
    get_payload_type(): number
    /**
     * Get the sequence number of the RTP packet in `buffer`.
     */
    get_seq(): number
    /**
     * Get the SSRC of the RTP packet in `buffer`.
     */
    get_ssrc(): number
    /**
     * Get the timestamp of the RTP packet in `buffer`.
     */
    get_timestamp(): number
    /**
     * Get the version number of the RTP packet in `buffer`.
     */
    get_version(): number
    /**
     * Set the amount of padding in the RTP packet in `buffer` to
     * `len`. If `len` is 0, the padding is removed.
     * 
     * NOTE: This function does not work correctly.
     * @param len the new amount of padding
     */
    pad_to(len: number): void
    /**
     * Unsets the extension bit of the RTP buffer and removes the extension header
     * and data.
     * 
     * If the RTP buffer has no header extension data, the action has no effect.
     * The RTP buffer must be mapped READWRITE only once and the underlying
     * GstBuffer must be writable.
     */
    remove_extension_data(): void
    /**
     * Modify the CSRC at index `idx` in `buffer` to `csrc`.
     * @param idx the CSRC index to set
     * @param csrc the CSRC in host order to set at `idx`
     */
    set_csrc(idx: number, csrc: number): void
    /**
     * Set the extension bit on the RTP packet in `buffer` to `extension`.
     * @param extension the new extension
     */
    set_extension(extension: boolean): void
    /**
     * Set the extension bit of the rtp buffer and fill in the `bits` and `length` of the
     * extension header. If the existing extension data is not large enough, it will
     * be made larger.
     * 
     * Will also shorten the extension data from 1.20.
     * @param bits the bits specific for the extension
     * @param length the length that counts the number of 32-bit words in the extension, excluding the extension header ( therefore zero is a valid length)
     */
    set_extension_data(bits: number, length: number): boolean
    /**
     * Set the marker bit on the RTP packet in `buffer` to `marker`.
     * @param marker the new marker
     */
    set_marker(marker: boolean): void
    /**
     * Set the total `rtp` size to `len`. The data in the buffer will be made
     * larger if needed. Any padding will be removed from the packet.
     * @param len the new packet length
     */
    set_packet_len(len: number): void
    /**
     * Set the padding bit on the RTP packet in `buffer` to `padding`.
     * @param padding the new padding
     */
    set_padding(padding: boolean): void
    /**
     * Set the payload type of the RTP packet in `buffer` to `payload_type`.
     * @param payload_type the new type
     */
    set_payload_type(payload_type: number): void
    /**
     * Set the sequence number of the RTP packet in `buffer` to `seq`.
     * @param seq the new sequence number
     */
    set_seq(seq: number): void
    /**
     * Set the SSRC on the RTP packet in `buffer` to `ssrc`.
     * @param ssrc the new SSRC
     */
    set_ssrc(ssrc: number): void
    /**
     * Set the timestamp of the RTP packet in `buffer` to `timestamp`.
     * @param timestamp the new timestamp
     */
    set_timestamp(timestamp: number): void
    /**
     * Set the version of the RTP packet in `buffer` to `version`.
     * @param version the new version
     */
    set_version(version: number): void
    /**
     * Unmap `rtp` previously mapped with gst_rtp_buffer_map().
     */
    unmap(): void
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Allocate enough data in `buffer` to hold an RTP packet with `csrc_count` CSRCs,
     * a payload length of `payload_len` and padding of `pad_len`.
     * `buffer` must be writable and all previous memory in `buffer` will be freed.
     * If `pad_len` is >0, the padding bit will be set. All other RTP header fields
     * will be set to 0/FALSE.
     * @param buffer a #GstBuffer
     * @param payload_len the length of the payload
     * @param pad_len the amount of padding
     * @param csrc_count the number of CSRC entries
     */
    static allocate_data(buffer: Gst.Buffer, payload_len: number, pad_len: number, csrc_count: number): void
    /**
     * Calculate the header length of an RTP packet with `csrc_count` CSRC entries.
     * An RTP packet can have at most 15 CSRC entries.
     * @param csrc_count the number of CSRC entries
     */
    static calc_header_len(csrc_count: number): number
    /**
     * Calculate the total length of an RTP packet with a payload size of `payload_len,`
     * a padding of `pad_len` and a `csrc_count` CSRC entries.
     * @param payload_len the length of the payload
     * @param pad_len the amount of padding
     * @param csrc_count the number of CSRC entries
     */
    static calc_packet_len(payload_len: number, pad_len: number, csrc_count: number): number
    /**
     * Calculate the length of the payload of an RTP packet with size `packet_len,`
     * a padding of `pad_len` and a `csrc_count` CSRC entries.
     * @param packet_len the length of the total RTP packet
     * @param pad_len the amount of padding
     * @param csrc_count the number of CSRC entries
     */
    static calc_payload_len(packet_len: number, pad_len: number, csrc_count: number): number
    /**
     * Compare two sequence numbers, taking care of wraparounds. This function
     * returns the difference between `seqnum1` and `seqnum2`.
     * @param seqnum1 a sequence number
     * @param seqnum2 a sequence number
     */
    static compare_seqnum(seqnum1: number, seqnum2: number): number
    /**
     * Get the default clock-rate for the static payload type `payload_type`.
     * @param payload_type the static payload type
     */
    static default_clock_rate(payload_type: number): number
    /**
     * Update the `exttimestamp` field with the extended timestamp of `timestamp`
     * For the first call of the method, `exttimestamp` should point to a location
     * with a value of -1.
     * 
     * This function is able to handle both forward and backward timestamps taking
     * into account:
     *   - timestamp wraparound making sure that the returned value is properly increased.
     *   - timestamp unwraparound making sure that the returned value is properly decreased.
     * @param exttimestamp a previous extended timestamp
     * @param timestamp a new timestamp
     */
    static ext_timestamp(exttimestamp: number, timestamp: number): [ /* returnType */ number, /* exttimestamp */ number ]
    /**
     * Similar to gst_rtp_buffer_get_extension_onebyte_header, but working
     * on the #GBytes you get from gst_rtp_buffer_get_extension_bytes.
     * Parses RFC 5285 style header extensions with a one byte header. It will
     * return the nth extension with the requested id.
     * @param bytes #GBytes
     * @param bit_pattern The bit-pattern. Anything but 0xBEDE is rejected.
     * @param id The ID of the header extension to be read (between 1 and 14).
     * @param nth Read the nth extension packet with the requested ID
     */
    static get_extension_onebyte_header_from_bytes(bytes: GLib.Bytes, bit_pattern: number, id: number, nth: number): [ /* returnType */ boolean, /* data */ Uint8Array ]
    /**
     * Map the contents of `buffer` into `rtp`.
     * @param buffer a #GstBuffer
     * @param flags #GstMapFlags
     */
    static map(buffer: Gst.Buffer, flags: Gst.MapFlags): [ /* returnType */ boolean, /* rtp */ RTPBuffer ]
    /**
     * Allocate a new #GstBuffer with enough data to hold an RTP packet with
     * `csrc_count` CSRCs, a payload length of `payload_len` and padding of `pad_len`.
     * All other RTP header fields will be set to 0/FALSE.
     * @param payload_len the length of the payload
     * @param pad_len the amount of padding
     * @param csrc_count the number of CSRC entries
     */
    static new_allocate(payload_len: number, pad_len: number, csrc_count: number): Gst.Buffer
    /**
     * Create a new #GstBuffer that can hold an RTP packet that is exactly
     * `packet_len` long. The length of the payload depends on `pad_len` and
     * `csrc_count` and can be calculated with gst_rtp_buffer_calc_payload_len().
     * All RTP header fields will be set to 0/FALSE.
     * @param packet_len the total length of the packet
     * @param pad_len the amount of padding
     * @param csrc_count the number of CSRC entries
     */
    static new_allocate_len(packet_len: number, pad_len: number, csrc_count: number): Gst.Buffer
    /**
     * Create a new buffer and set the data to a copy of `len`
     * bytes of `data` and the size to `len`. The data will be freed when the buffer
     * is freed.
     * @param data data for the new   buffer
     */
    static new_copy_data(data: Uint8Array): Gst.Buffer
    /**
     * Create a new buffer and set the data and size of the buffer to `data` and `len`
     * respectively. `data` will be freed when the buffer is unreffed, so this
     * function transfers ownership of `data` to the new buffer.
     * @param data    data for the new buffer
     */
    static new_take_data(data: Uint8Array): Gst.Buffer
}
abstract class RTPHeaderExtensionClass {
    /* Fields of GstRtp-1.0.GstRtp.RTPHeaderExtensionClass */
    /**
     * the parent class
     */
    parent_class: Gst.ElementClass
    get_supported_flags: (ext: RTPHeaderExtension) => RTPHeaderExtensionFlags
    get_max_size: (ext: RTPHeaderExtension, input_meta: Gst.Buffer) => number
    write: (ext: RTPHeaderExtension, input_meta: Gst.Buffer, write_flags: RTPHeaderExtensionFlags, output: Gst.Buffer, data: Uint8Array) => number
    read: (ext: RTPHeaderExtension, read_flags: RTPHeaderExtensionFlags, data: Uint8Array, buffer: Gst.Buffer) => boolean
    set_non_rtp_sink_caps: (ext: RTPHeaderExtension, caps: Gst.Caps) => boolean
    update_non_rtp_src_caps: (ext: RTPHeaderExtension, caps: Gst.Caps) => boolean
    set_attributes: (ext: RTPHeaderExtension, direction: RTPHeaderExtensionDirection, attributes: string) => boolean
    set_caps_from_attributes: (ext: RTPHeaderExtension, caps: Gst.Caps) => boolean
    /* Methods of GstRtp-1.0.GstRtp.RTPHeaderExtensionClass */
    /**
     * Set the URI for this RTP header extension implementation.
     * @param uri the RTP Header extension uri for `klass`
     */
    static set_uri(klass: RTPHeaderExtension | Function | GObject.Type, uri: string): void
    static name: string
}
class RTPPayloadInfo {
    /* Fields of GstRtp-1.0.GstRtp.RTPPayloadInfo */
    /**
     * payload type, -1 means dynamic
     */
    payload_type: number
    /**
     * the media type(s), usually "audio", "video", "application", "text",
     * "message".
     */
    media: string
    /**
     * the encoding name of `pt`
     */
    encoding_name: string
    /**
     * default clock rate, 0 = unknown/variable
     */
    clock_rate: number
    /**
     * encoding parameters. For audio this is the number of
     * channels. NULL = not applicable.
     */
    encoding_parameters: string
    /**
     * the bitrate of the media. 0 = unknown/variable.
     */
    bitrate: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Get the #GstRTPPayloadInfo for `media` and `encoding_name`. This function is
     * mostly used to get the default clock-rate and bandwidth for dynamic payload
     * types specified with `media` and `encoding` name.
     * 
     * The search for `encoding_name` will be performed in a case insensitive way.
     * @param media the media to find
     * @param encoding_name the encoding name to find
     */
    static for_name(media: string, encoding_name: string): RTPPayloadInfo
    /**
     * Get the #GstRTPPayloadInfo for `payload_type`. This function is
     * mostly used to get the default clock-rate and bandwidth for static payload
     * types specified with `payload_type`.
     * @param payload_type the payload_type to find
     */
    static for_pt(payload_type: number): RTPPayloadInfo
}
class RTPSourceMeta {
    /* Fields of GstRtp-1.0.GstRtp.RTPSourceMeta */
    /**
     * parent #GstMeta
     */
    meta: Gst.Meta
    /**
     * the SSRC
     */
    ssrc: number
    /**
     * whether `ssrc` is set and valid
     */
    ssrc_valid: boolean
    /**
     * pointer to the CSRCs
     */
    csrc: number[]
    /**
     * number of elements in `csrc`
     */
    csrc_count: number
    /* Methods of GstRtp-1.0.GstRtp.RTPSourceMeta */
    /**
     * Appends `csrc` to the list of contributing sources in `meta`.
     * @param csrc the csrcs to append
     * @param csrc_count number of elements in `csrc`
     */
    append_csrc(csrc: number, csrc_count: number): boolean
    /**
     * Count the total number of RTP sources found in `meta,` both SSRC and CSRC.
     */
    get_source_count(): number
    /**
     * Sets `ssrc` in `meta`. If `ssrc` is %NULL the ssrc of `meta` will be unset.
     * @param ssrc pointer to the SSRC
     */
    set_ssrc(ssrc?: number | null): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static get_info(): Gst.MetaInfo
}
}
export default GstRtp;