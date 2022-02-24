/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstRtp-1.0
 */

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
function bufferAddRtpSourceMeta(buffer: Gst.Buffer, ssrc: number | null, csrc: number | null, csrcCount: number): RTPSourceMeta
function bufferGetRtpSourceMeta(buffer: Gst.Buffer): RTPSourceMeta
function rtcpBufferMap(buffer: Gst.Buffer, flags: Gst.MapFlags, rtcp: RTCPBuffer): boolean
function rtcpBufferNew(mtu: number): Gst.Buffer
function rtcpBufferNewCopyData(data: Uint8Array): Gst.Buffer
function rtcpBufferNewTakeData(data: Uint8Array): Gst.Buffer
function rtcpBufferValidate(buffer: Gst.Buffer): boolean
function rtcpBufferValidateData(data: Uint8Array): boolean
function rtcpBufferValidateDataReduced(data: Uint8Array): boolean
function rtcpBufferValidateReduced(buffer: Gst.Buffer): boolean
function rtcpNtpToUnix(ntptime: number): number
function rtcpSdesNameToType(name: string): RTCPSDESType
function rtcpSdesTypeToName(type: RTCPSDESType): string
function rtcpUnixToNtp(unixtime: number): number
function rtpBufferAllocateData(buffer: Gst.Buffer, payloadLen: number, padLen: number, csrcCount: number): void
function rtpBufferCalcHeaderLen(csrcCount: number): number
function rtpBufferCalcPacketLen(payloadLen: number, padLen: number, csrcCount: number): number
function rtpBufferCalcPayloadLen(packetLen: number, padLen: number, csrcCount: number): number
function rtpBufferCompareSeqnum(seqnum1: number, seqnum2: number): number
function rtpBufferDefaultClockRate(payloadType: number): number
function rtpBufferExtTimestamp(exttimestamp: number, timestamp: number): [ /* returnType */ number, /* exttimestamp */ number ]
function rtpBufferGetExtensionOnebyteHeaderFromBytes(bytes: any, bitPattern: number, id: number, nth: number): [ /* returnType */ boolean, /* data */ Uint8Array ]
function rtpBufferMap(buffer: Gst.Buffer, flags: Gst.MapFlags): [ /* returnType */ boolean, /* rtp */ RTPBuffer ]
function rtpBufferNewAllocate(payloadLen: number, padLen: number, csrcCount: number): Gst.Buffer
function rtpBufferNewAllocateLen(packetLen: number, padLen: number, csrcCount: number): Gst.Buffer
function rtpBufferNewCopyData(data: Uint8Array): Gst.Buffer
function rtpBufferNewTakeData(data: Uint8Array): Gst.Buffer
function rtpGetHeaderExtensionList(): Gst.ElementFactory[]
function rtpHdrextGetNtp56(data: Uint8Array): [ /* returnType */ boolean, /* ntptime */ number ]
function rtpHdrextGetNtp64(data: Uint8Array): [ /* returnType */ boolean, /* ntptime */ number ]
function rtpHdrextSetNtp56(data: object | null, size: number, ntptime: number): boolean
function rtpHdrextSetNtp64(data: object | null, size: number, ntptime: number): boolean
function rtpPayloadInfoForName(media: string, encodingName: string): RTPPayloadInfo
function rtpPayloadInfoForPt(payloadType: number): RTPPayloadInfo
function rtpSourceMetaApiGetType(): GObject.Type
function rtpSourceMetaGetInfo(): Gst.MetaInfo
interface RTPBaseAudioPayload_ConstructProps extends RTPBasePayload_ConstructProps {
    /* Constructor properties of GstRtp-1.0.GstRtp.RTPBaseAudioPayload */
    bufferList?: boolean
}
class RTPBaseAudioPayload {
    /* Properties of GstRtp-1.0.GstRtp.RTPBaseAudioPayload */
    bufferList: boolean
    /* Properties of GstRtp-1.0.GstRtp.RTPBasePayload */
    /**
     * If enabled, the payloader will automatically try to enable all the
     * RTP header extensions provided in the src caps, saving the application
     * the need to handle these extensions manually using the
     * GstRTPBasePayload::request-extension: signal.
     */
    autoHeaderExtension: boolean
    maxPtime: number
    /**
     * Minimum duration of the packet data in ns (can't go above MTU)
     */
    minPtime: number
    mtu: number
    /**
     * Make the payloader timestamp packets according to the Rate-Control=no
     * behaviour specified in the ONVIF replay spec.
     */
    onvifNoRateControl: boolean
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
    perfectRtptime: boolean
    pt: number
    /**
     * Force buffers to be multiples of this duration in ns (0 disables)
     */
    ptimeMultiple: number
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
    scaleRtptime: boolean
    readonly seqnum: number
    seqnumOffset: number
    /**
     * Enable writing the CSRC field in allocated RTP header based on RTP source
     * information found in the input buffer's #GstRTPSourceMeta.
     */
    sourceInfo: boolean
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
    timestampOffset: number
    /* Fields of GstRtp-1.0.GstRtp.RTPBasePayload */
    readonly element: Gst.Element
    /* Fields of Gst-1.0.Gst.Element */
    readonly object: Gst.Object
    /**
     * Used to serialize execution of gst_element_set_state()
     */
    readonly stateLock: GLib.RecMutex
    /**
     * Used to signal completion of a state change
     */
    readonly stateCond: GLib.Cond
    /**
     * Used to detect concurrent execution of
     * gst_element_set_state() and gst_element_get_state()
     */
    readonly stateCookie: number
    /**
     * the target state of an element as set by the application
     */
    readonly targetState: Gst.State
    /**
     * the current state of an element
     */
    readonly currentState: Gst.State
    /**
     * the next state of an element, can be #GST_STATE_VOID_PENDING if
     * the element is in the correct state.
     */
    readonly nextState: Gst.State
    /**
     * the final state the element should go to, can be
     * #GST_STATE_VOID_PENDING if the element is in the correct state
     */
    readonly pendingState: Gst.State
    /**
     * the last return value of an element state change
     */
    readonly lastReturn: Gst.StateChangeReturn
    /**
     * the bus of the element. This bus is provided to the element by the
     * parent element or the application. A #GstPipeline has a bus of its own.
     */
    readonly bus: Gst.Bus
    /**
     * the clock of the element. This clock is usually provided to the
     * element by the toplevel #GstPipeline.
     */
    readonly clock: Gst.Clock
    /**
     * the time of the clock right before the element is set to
     * PLAYING. Subtracting `base_time` from the current clock time in the PLAYING
     * state will yield the running_time against the clock.
     */
    readonly baseTime: Gst.ClockTimeDiff
    /**
     * the running_time of the last PAUSED state
     */
    readonly startTime: Gst.ClockTime
    /**
     * number of pads of the element, includes both source and sink pads.
     */
    readonly numpads: number
    /**
     * list of pads
     */
    readonly pads: Gst.Pad[]
    /**
     * number of source pads of the element.
     */
    readonly numsrcpads: number
    /**
     * list of source pads
     */
    readonly srcpads: Gst.Pad[]
    /**
     * number of sink pads of the element.
     */
    readonly numsinkpads: number
    /**
     * list of sink pads
     */
    readonly sinkpads: Gst.Pad[]
    /**
     * updated whenever the a pad is added or removed
     */
    readonly padsCookie: number
    /**
     * list of contexts
     */
    readonly contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    /**
     * object LOCK
     */
    readonly lock: GLib.Mutex
    /**
     * The name of the object
     */
    readonly name: string
    /**
     * this object's parent, weak ref
     */
    readonly parent: Gst.Object
    /**
     * flags for this object
     */
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstRtp-1.0.GstRtp.RTPBaseAudioPayload */
    /**
     * Create an RTP buffer and store `payload_len` bytes of the adapter as the
     * payload. Set the timestamp on the new buffer to `timestamp` before pushing
     * the buffer downstream.
     * 
     * If `payload_len` is -1, all pending bytes will be flushed. If `timestamp` is
     * -1, the timestamp will be calculated automatically.
     */
    flush(payloadLen: number, timestamp: Gst.ClockTime): Gst.FlowReturn
    /**
     * Gets the internal adapter used by the depayloader.
     */
    getAdapter(): GstBase.Adapter
    /**
     * Create an RTP buffer and store `payload_len` bytes of `data` as the
     * payload. Set the timestamp on the new buffer to `timestamp` before pushing
     * the buffer downstream.
     */
    push(data: Uint8Array, timestamp: Gst.ClockTime): Gst.FlowReturn
    /**
     * Tells #GstRTPBaseAudioPayload that the child element is for a frame based
     * audio codec
     */
    setFrameBased(): void
    /**
     * Sets the options for frame based audio codecs.
     */
    setFrameOptions(frameDuration: number, frameSize: number): void
    /**
     * Tells #GstRTPBaseAudioPayload that the child element is for a sample based
     * audio codec
     */
    setSampleBased(): void
    /**
     * Sets the options for sample based audio codecs.
     */
    setSampleOptions(sampleSize: number): void
    /**
     * Sets the options for sample based audio codecs.
     */
    setSamplebitsOptions(sampleSize: number): void
    /* Methods of GstRtp-1.0.GstRtp.RTPBasePayload */
    /**
     * Allocate a new #GstBuffer with enough data to hold an RTP packet with
     * minimum `csrc_count` CSRCs, a payload length of `payload_len` and padding of
     * `pad_len`. If `payload` has #GstRTPBasePayload:source-info %TRUE additional
     * CSRCs may be allocated and filled with RTP source information.
     */
    allocateOutputBuffer(payloadLen: number, padLen: number, csrcCount: number): Gst.Buffer
    /**
     * Count the total number of RTP sources found in the meta of `buffer,` which
     * will be automically added by gst_rtp_base_payload_allocate_output_buffer().
     * If #GstRTPBasePayload:source-info is %FALSE the count will be 0.
     */
    getSourceCount(buffer: Gst.Buffer): number
    /**
     * Check if the packet with `size` and `duration` would exceed the configured
     * maximum size.
     */
    isFilled(size: number, duration: Gst.ClockTime): boolean
    /**
     * Queries whether the payloader will add contributing sources (CSRCs) to the
     * RTP header from #GstRTPSourceMeta.
     */
    isSourceInfoEnabled(): boolean
    /**
     * Push `buffer` to the peer element of the payloader. The SSRC, payload type,
     * seqnum and timestamp of the RTP buffer will be updated first.
     * 
     * This function takes ownership of `buffer`.
     */
    push(buffer: Gst.Buffer): Gst.FlowReturn
    /**
     * Push `list` to the peer element of the payloader. The SSRC, payload type,
     * seqnum and timestamp of the RTP buffer will be updated first.
     * 
     * This function takes ownership of `list`.
     */
    pushList(list: Gst.BufferList): Gst.FlowReturn
    /**
     * Set the rtp options of the payloader. These options will be set in the caps
     * of the payloader. Subclasses must call this method before calling
     * gst_rtp_base_payload_push() or gst_rtp_base_payload_set_outcaps().
     */
    setOptions(media: string, dynamic: boolean, encodingName: string, clockRate: number): void
    /**
     * Configure the output caps with the optional fields.
     */
    setOutcapsStructure(s?: Gst.Structure | null): boolean
    /**
     * Enable or disable adding contributing sources to RTP packets from
     * #GstRTPSourceMeta.
     */
    setSourceInfoEnabled(enable: boolean): void
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
    abortState(): void
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
     */
    addPad(pad: Gst.Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
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
     */
    callAsync(func: Gst.ElementCallAsyncFunc): void
    /**
     * Perform `transition` on `element`.
     * 
     * This function must be called with STATE_LOCK held and is mainly used
     * internally.
     */
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
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
     */
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    /**
     * Creates a pad for each pad template that is always available.
     * This function is only useful during object initialization of
     * subclasses of #GstElement.
     */
    createAllPads(): void
    /**
     * Call `func` with `user_data` for each of `element'`s pads. `func` will be called
     * exactly once for each pad that exists at the time of this call, unless
     * one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new pads are added or pads are removed
     * while pads are being iterated, this will not be taken into account until
     * next time this function is used.
     */
    foreachPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s sink pads. `func` will be
     * called exactly once for each sink pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new sink pads are added or sink pads
     * are removed while the sink pads are being iterated, this will not be taken
     * into account until next time this function is used.
     */
    foreachSinkPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s source pads. `func` will be
     * called exactly once for each source pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new source pads are added or source pads
     * are removed while the source pads are being iterated, this will not be taken
     * into account until next time this function is used.
     */
    foreachSrcPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Returns the base time of the element. The base time is the
     * absolute time of the clock when this element was last put to
     * PLAYING. Subtracting the base time from the clock time gives
     * the running time of the element.
     */
    getBaseTime(): Gst.ClockTime
    /**
     * Returns the bus of the element. Note that only a #GstPipeline will provide a
     * bus for the application.
     */
    getBus(): Gst.Bus | null
    /**
     * Gets the currently configured clock of the element. This is the clock as was
     * last set with gst_element_set_clock().
     * 
     * Elements in a pipeline will only have their clock set when the
     * pipeline is in the PLAYING state.
     */
    getClock(): Gst.Clock | null
    /**
     * Looks for an unlinked pad to which the given pad can link. It is not
     * guaranteed that linking the pads will work, though it should work in most
     * cases.
     * 
     * This function will first attempt to find a compatible unlinked ALWAYS pad,
     * and if none can be found, it will request a compatible REQUEST pad by looking
     * at the templates of `element`.
     */
    getCompatiblePad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Retrieves a pad template from `element` that is compatible with `compattempl`.
     * Pads from compatible templates can be linked together.
     */
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     * 
     * MT safe.
     */
    getContext(contextType: string): Gst.Context | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     */
    getContextUnlocked(contextType: string): Gst.Context | null
    /**
     * Gets the contexts set on the element.
     * 
     * MT safe.
     */
    getContexts(): Gst.Context[]
    /**
     * Returns the current clock time of the element, as in, the time of the
     * element's clock, or GST_CLOCK_TIME_NONE if there is no clock.
     */
    getCurrentClockTime(): Gst.ClockTime
    /**
     * Returns the running time of the element. The running time is the
     * element's clock time minus its base time. Will return GST_CLOCK_TIME_NONE
     * if the element has no clock, or if its base time has not been set.
     */
    getCurrentRunningTime(): Gst.ClockTime
    /**
     * Retrieves the factory that was used to create this element.
     */
    getFactory(): Gst.ElementFactory | null
    /**
     * Get metadata with `key` in `klass`.
     */
    getMetadata(key: string): string
    /**
     * Retrieves a padtemplate from `element` with the given name.
     */
    getPadTemplate(name: string): Gst.PadTemplate | null
    /**
     * Retrieves a list of the pad templates associated with `element`. The
     * list must not be modified by the calling code.
     */
    getPadTemplateList(): Gst.PadTemplate[]
    /**
     * The name of this function is confusing to people learning GStreamer.
     * gst_element_request_pad_simple() aims at making it more explicit it is
     * a simplified gst_element_request_pad().
     */
    getRequestPad(name: string): Gst.Pad | null
    /**
     * Returns the start time of the element. The start time is the
     * running time of the clock when this element was last put to PAUSED.
     * 
     * Usually the start_time is managed by a toplevel element such as
     * #GstPipeline.
     * 
     * MT safe.
     */
    getStartTime(): Gst.ClockTime
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
     */
    getState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    /**
     * Retrieves a pad from `element` by name. This version only retrieves
     * already-existing (i.e. 'static') pads.
     */
    getStaticPad(name: string): Gst.Pad | null
    /**
     * Checks if the state of an element is locked.
     * If the state of an element is locked, state changes of the parent don't
     * affect the element.
     * This way you can leave currently unused elements inside bins. Just lock their
     * state before changing the state from #GST_STATE_NULL.
     * 
     * MT safe.
     */
    isLockedState(): boolean
    /**
     * Retrieves an iterator of `element'`s pads. The iterator should
     * be freed after usage. Also more specialized iterators exists such as
     * gst_element_iterate_src_pads() or gst_element_iterate_sink_pads().
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iteratePads(): Gst.Iterator
    /**
     * Retrieves an iterator of `element'`s sink pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterateSinkPads(): Gst.Iterator
    /**
     * Retrieves an iterator of `element'`s source pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterateSrcPads(): Gst.Iterator
    /**
     * Links `src` to `dest`. The link must be from source to
     * destination; the other direction will not be tried. The function looks for
     * existing pads that aren't linked yet. It will request new pads if necessary.
     * Such pads need to be released manually when unlinking.
     * If multiple links are possible, only one is established.
     * 
     * Make sure you have added your elements to a bin or pipeline with
     * gst_bin_add() before trying to link them.
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
     */
    linkFiltered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    /**
     * Links the two named pads of the source and destination elements.
     * Side effect is that if one of the pads has no parent, it becomes a
     * child of the parent of the other element.  If they have different
     * parents, the link fails.
     */
    linkPads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    /**
     * Links the two named pads of the source and destination elements. Side effect
     * is that if one of the pads has no parent, it becomes a child of the parent of
     * the other element. If they have different parents, the link fails. If `caps`
     * is not %NULL, makes sure that the caps of the link is a subset of `caps`.
     */
    linkPadsFiltered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
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
     */
    linkPadsFull(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
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
    lostState(): void
    /**
     * Post an error, warning or info message on the bus from inside an element.
     * 
     * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
     * #GST_MESSAGE_INFO.
     * 
     * MT safe.
     */
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    /**
     * Post an error, warning or info message on the bus from inside an element.
     * 
     * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
     * #GST_MESSAGE_INFO.
     */
    messageFullWithDetails(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
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
    noMorePads(): void
    /**
     * Post a message on the element's #GstBus. This function takes ownership of the
     * message; if you want to access the message after this call, you should add an
     * additional reference before calling.
     */
    postMessage(message: Gst.Message): boolean
    /**
     * Get the clock provided by the given element.
     * > An element is only required to provide a clock in the PAUSED
     * > state. Some elements can provide a clock in other states.
     */
    provideClock(): Gst.Clock | null
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     */
    query(query: Gst.Query): boolean
    /**
     * Queries an element to convert `src_val` in `src_format` to `dest_format`.
     */
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    /**
     * Queries an element (usually top-level pipeline or playbin element) for the
     * total stream duration in nanoseconds. This query will only work once the
     * pipeline is prerolled (i.e. reached PAUSED or PLAYING state). The application
     * will receive an ASYNC_DONE message on the pipeline bus when that is the case.
     * 
     * If the duration changes for some reason, you will get a DURATION_CHANGED
     * message on the pipeline bus, in which case you should re-query the duration
     * using this function.
     */
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
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
     */
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    /**
     * Makes the element free the previously requested pad as obtained
     * with gst_element_request_pad().
     * 
     * This does not unref the pad. If the pad was created by using
     * gst_element_request_pad(), gst_element_release_request_pad() needs to be
     * followed by gst_object_unref() to free the `pad`.
     * 
     * MT safe.
     */
    releaseRequestPad(pad: Gst.Pad): void
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
     */
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    /**
     * Retrieves a request pad from the element according to the provided template.
     * Pad templates can be looked up using
     * gst_element_factory_get_static_pad_templates().
     * 
     * The pad should be released with gst_element_release_request_pad().
     */
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
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
     */
    requestPadSimple(name: string): Gst.Pad | null
    /**
     * Sends a seek event to an element. See gst_event_new_seek() for the details of
     * the parameters. The seek event is sent to the element using
     * gst_element_send_event().
     * 
     * MT safe.
     */
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, startType: Gst.SeekType, start: number, stopType: Gst.SeekType, stop: number): boolean
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
     */
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: number): boolean
    /**
     * Sends an event to an element. If the element doesn't implement an
     * event handler, the event will be pushed on a random linked sink pad for
     * downstream events or a random linked source pad for upstream events.
     * 
     * This function takes ownership of the provided event so you should
     * gst_event_ref() it if you want to reuse the event after this call.
     * 
     * MT safe.
     */
    sendEvent(event: Gst.Event): boolean
    /**
     * Set the base time of an element. See gst_element_get_base_time().
     * 
     * MT safe.
     */
    setBaseTime(time: Gst.ClockTime): void
    /**
     * Sets the bus of the element. Increases the refcount on the bus.
     * For internal use only, unless you're testing elements.
     * 
     * MT safe.
     */
    setBus(bus?: Gst.Bus | null): void
    /**
     * Sets the clock for the element. This function increases the
     * refcount on the clock. Any previously set clock on the object
     * is unreffed.
     */
    setClock(clock?: Gst.Clock | null): boolean
    /**
     * Sets the context of the element. Increases the refcount of the context.
     * 
     * MT safe.
     */
    setContext(context: Gst.Context): void
    /**
     * Locks the state of an element, so state changes of the parent don't affect
     * this element anymore.
     * 
     * Note that this is racy if the state lock of the parent bin is not taken.
     * The parent bin might've just checked the flag in another thread and as the
     * next step proceed to change the child element's state.
     * 
     * MT safe.
     */
    setLockedState(lockedState: boolean): boolean
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
     */
    setStartTime(time: Gst.ClockTime): void
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
     */
    setState(state: Gst.State): Gst.StateChangeReturn
    /**
     * Tries to change the state of the element to the same as its parent.
     * If this function returns %FALSE, the state of element is undefined.
     */
    syncStateWithParent(): boolean
    /**
     * Unlinks all source pads of the source element with all sink pads
     * of the sink element to which they are linked.
     * 
     * If the link has been made using gst_element_link(), it could have created an
     * requestpad, which has to be released using gst_element_release_request_pad().
     */
    unlink(dest: Gst.Element): void
    /**
     * Unlinks the two named pads of the source and destination elements.
     * 
     * This is a convenience function for gst_pad_unlink().
     */
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    /**
     * Attach the #GstControlBinding to the object. If there already was a
     * #GstControlBinding for this property it will be replaced.
     * 
     * The object's reference count will be incremented, and any floating
     * reference will be removed (see gst_object_ref_sink())
     */
    addControlBinding(binding: Gst.ControlBinding): boolean
    /**
     * A default error function that uses g_printerr() to display the error message
     * and the optional debug string..
     * 
     * The default handler will simply print the error string using g_print.
     */
    defaultError(error: GLib.Error, debug?: string | null): void
    /**
     * Gets the corresponding #GstControlBinding for the property. This should be
     * unreferenced again after use.
     */
    getControlBinding(propertyName: string): Gst.ControlBinding | null
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
    getControlRate(): Gst.ClockTime
    /**
     * Gets a number of #GValues for the given controlled property starting at the
     * requested time. The array `values` need to hold enough space for `n_values` of
     * #GValue.
     * 
     * This function is useful if one wants to e.g. draw a graph of the control
     * curve or apply a control curve sample by sample.
     */
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    /**
     * Returns a copy of the name of `object`.
     * Caller should g_free() the return value after usage.
     * For a nameless object, this returns %NULL, which you can safely g_free()
     * as well.
     * 
     * Free-function: g_free
     */
    getName(): string | null
    /**
     * Returns the parent of `object`. This function increases the refcount
     * of the parent object so you should gst_object_unref() it after usage.
     */
    getParent(): Gst.Object | null
    /**
     * Generates a string describing the path of `object` in
     * the object hierarchy. Only useful (or used) for debugging.
     * 
     * Free-function: g_free
     */
    getPathString(): string
    /**
     * Gets the value for the given controlled property at the requested time.
     */
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
    /**
     * Check if the `object` has active controlled properties.
     */
    hasActiveControlBindings(): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     */
    hasAncestor(ancestor: Gst.Object): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     */
    hasAsAncestor(ancestor: Gst.Object): boolean
    /**
     * Check if `parent` is the parent of `object`.
     * E.g. a #GstElement can check if it owns a given #GstPad.
     */
    hasAsParent(parent: Gst.Object): boolean
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
     */
    removeControlBinding(binding: Gst.ControlBinding): boolean
    /**
     * This function is used to disable the control bindings on a property for
     * some time, i.e. gst_object_sync_values() will do nothing for the
     * property.
     */
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    /**
     * This function is used to disable all controlled properties of the `object` for
     * some time, i.e. gst_object_sync_values() will do nothing.
     */
    setControlBindingsDisabled(disabled: boolean): void
    /**
     * Change the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * The control-rate should not change if the element is in %GST_STATE_PAUSED or
     * %GST_STATE_PLAYING.
     */
    setControlRate(controlRate: Gst.ClockTime): void
    /**
     * Sets the name of `object,` or gives `object` a guaranteed unique
     * name (if `name` is %NULL).
     * This function makes a copy of the provided name, so the caller
     * retains ownership of the name it sent.
     */
    setName(name?: string | null): boolean
    /**
     * Sets the parent of `object` to `parent`. The object's reference count will
     * be incremented, and any floating reference will be removed (see gst_object_ref_sink()).
     */
    setParent(parent: Gst.Object): boolean
    /**
     * Returns a suggestion for timestamps where buffers should be split
     * to get best controller results.
     */
    suggestNextSync(): Gst.ClockTime
    /**
     * Sets the properties of the object, according to the #GstControlSources that
     * (maybe) handle them and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     */
    syncValues(timestamp: Gst.ClockTime): boolean
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     */
    watchClosure(closure: Function): void
    /* Signals of GstRtp-1.0.GstRtp.RTPBasePayload */
    /**
     * Add `ext` as an extension for writing part of an RTP header extension onto
     * outgoing RTP packets.
     */
    connect(sigName: "add-extension", callback: ((ext: RTPHeaderExtension) => void)): number
    on(sigName: "add-extension", callback: (ext: RTPHeaderExtension) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "add-extension", callback: (ext: RTPHeaderExtension) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "add-extension", callback: (ext: RTPHeaderExtension) => void): NodeJS.EventEmitter
    emit(sigName: "add-extension", ext: RTPHeaderExtension): void
    /**
     * Clear all RTP header extensions used by this payloader.
     */
    connect(sigName: "clear-extensions", callback: (() => void)): number
    on(sigName: "clear-extensions", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "clear-extensions", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "clear-extensions", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "clear-extensions"): void
    /**
     * The returned `ext` must be configured with the correct `ext_id` and with the
     * necessary attributes as required by the extension implementation.
     */
    connect(sigName: "request-extension", callback: ((extId: number, extUri: string) => RTPHeaderExtension)): number
    on(sigName: "request-extension", callback: (extId: number, extUri: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-extension", callback: (extId: number, extUri: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-extension", callback: (extId: number, extUri: string) => void): NodeJS.EventEmitter
    emit(sigName: "request-extension", extId: number, extUri: string): void
    /* Signals of Gst-1.0.Gst.Element */
    /**
     * This signals that the element will not generate more dynamic pads.
     * Note that this signal will usually be emitted from the context of
     * the streaming thread.
     */
    connect(sigName: "no-more-pads", callback: (() => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    /**
     * a new #GstPad has been added to the element. Note that this signal will
     * usually be emitted from the context of the streaming thread. Also keep in
     * mind that if you add new elements to the pipeline in the signal handler
     * you will need to set them to the desired target state with
     * gst_element_set_state() or gst_element_sync_state_with_parent().
     */
    connect(sigName: "pad-added", callback: ((newPad: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (newPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    /**
     * a #GstPad has been removed from the element
     */
    connect(sigName: "pad-removed", callback: ((oldPad: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    /**
     * The deep notify signal is used to be notified of property changes. It is
     * typically attached to the toplevel bin to receive notifications from all
     * the elements contained in that bin.
     */
    connect(sigName: "deep-notify", callback: ((propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::buffer-list", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-list", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::buffer-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::buffer-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::buffer-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::auto-header-extension", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-header-extension", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-header-extension", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-header-extension", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-header-extension", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-ptime", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-ptime", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-ptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-ptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-ptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-ptime", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-ptime", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-ptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-ptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-ptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::onvif-no-rate-control", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::onvif-no-rate-control", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::onvif-no-rate-control", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::onvif-no-rate-control", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::onvif-no-rate-control", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::perfect-rtptime", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::perfect-rtptime", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::perfect-rtptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::perfect-rtptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::perfect-rtptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pt", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pt", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ptime-multiple", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ptime-multiple", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ptime-multiple", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ptime-multiple", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ptime-multiple", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-rtptime", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-rtptime", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-rtptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-rtptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-rtptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::seqnum", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seqnum", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::seqnum", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::seqnum", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::seqnum", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::seqnum-offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seqnum-offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::seqnum-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::seqnum-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::seqnum-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::source-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ssrc", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssrc", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ssrc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ssrc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ssrc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stats", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timestamp-offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp-offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timestamp-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timestamp-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timestamp-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    autoHeaderExtension?: boolean
    /**
     * Max seqnum reorder before the sender is assumed to have restarted.
     * 
     * When max-reorder is set to 0 all reordered/duplicate packets are
     * considered coming from a restarted sender.
     */
    maxReorder?: number
    /**
     * Add RTP source information found in RTP header as meta to output buffer.
     */
    sourceInfo?: boolean
}
class RTPBaseDepayload {
    /* Properties of GstRtp-1.0.GstRtp.RTPBaseDepayload */
    /**
     * If enabled, the depayloader will automatically try to enable all the
     * RTP header extensions provided in the sink caps, saving the application
     * the need to handle these extensions manually using the
     * GstRTPBaseDepayload::request-extension: signal.
     */
    autoHeaderExtension: boolean
    /**
     * Max seqnum reorder before the sender is assumed to have restarted.
     * 
     * When max-reorder is set to 0 all reordered/duplicate packets are
     * considered coming from a restarted sender.
     */
    maxReorder: number
    /**
     * Add RTP source information found in RTP header as meta to output buffer.
     */
    sourceInfo: boolean
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
    readonly object: Gst.Object
    /**
     * Used to serialize execution of gst_element_set_state()
     */
    readonly stateLock: GLib.RecMutex
    /**
     * Used to signal completion of a state change
     */
    readonly stateCond: GLib.Cond
    /**
     * Used to detect concurrent execution of
     * gst_element_set_state() and gst_element_get_state()
     */
    readonly stateCookie: number
    /**
     * the target state of an element as set by the application
     */
    readonly targetState: Gst.State
    /**
     * the current state of an element
     */
    readonly currentState: Gst.State
    /**
     * the next state of an element, can be #GST_STATE_VOID_PENDING if
     * the element is in the correct state.
     */
    readonly nextState: Gst.State
    /**
     * the final state the element should go to, can be
     * #GST_STATE_VOID_PENDING if the element is in the correct state
     */
    readonly pendingState: Gst.State
    /**
     * the last return value of an element state change
     */
    readonly lastReturn: Gst.StateChangeReturn
    /**
     * the bus of the element. This bus is provided to the element by the
     * parent element or the application. A #GstPipeline has a bus of its own.
     */
    readonly bus: Gst.Bus
    /**
     * the clock of the element. This clock is usually provided to the
     * element by the toplevel #GstPipeline.
     */
    readonly clock: Gst.Clock
    /**
     * the time of the clock right before the element is set to
     * PLAYING. Subtracting `base_time` from the current clock time in the PLAYING
     * state will yield the running_time against the clock.
     */
    readonly baseTime: Gst.ClockTimeDiff
    /**
     * the running_time of the last PAUSED state
     */
    readonly startTime: Gst.ClockTime
    /**
     * number of pads of the element, includes both source and sink pads.
     */
    readonly numpads: number
    /**
     * list of pads
     */
    readonly pads: Gst.Pad[]
    /**
     * number of source pads of the element.
     */
    readonly numsrcpads: number
    /**
     * list of source pads
     */
    readonly srcpads: Gst.Pad[]
    /**
     * number of sink pads of the element.
     */
    readonly numsinkpads: number
    /**
     * list of sink pads
     */
    readonly sinkpads: Gst.Pad[]
    /**
     * updated whenever the a pad is added or removed
     */
    readonly padsCookie: number
    /**
     * list of contexts
     */
    readonly contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    /**
     * object LOCK
     */
    readonly lock: GLib.Mutex
    /**
     * The name of the object
     */
    readonly name: string
    /**
     * this object's parent, weak ref
     */
    readonly parent: Gst.Object
    /**
     * flags for this object
     */
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstRtp-1.0.GstRtp.RTPBaseDepayload */
    /**
     * Queries whether #GstRTPSourceMeta will be added to depayloaded buffers.
     */
    isSourceInfoEnabled(): boolean
    /**
     * Push `out_buf` to the peer of `filter`. This function takes ownership of
     * `out_buf`.
     * 
     * This function will by default apply the last incoming timestamp on
     * the outgoing buffer when it didn't have a timestamp already.
     */
    push(outBuf: Gst.Buffer): Gst.FlowReturn
    /**
     * Push `out_list` to the peer of `filter`. This function takes ownership of
     * `out_list`.
     */
    pushList(outList: Gst.BufferList): Gst.FlowReturn
    /**
     * Enable or disable adding #GstRTPSourceMeta to depayloaded buffers.
     */
    setSourceInfoEnabled(enable: boolean): void
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
    abortState(): void
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
     */
    addPad(pad: Gst.Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
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
     */
    callAsync(func: Gst.ElementCallAsyncFunc): void
    /**
     * Perform `transition` on `element`.
     * 
     * This function must be called with STATE_LOCK held and is mainly used
     * internally.
     */
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
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
     */
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    /**
     * Creates a pad for each pad template that is always available.
     * This function is only useful during object initialization of
     * subclasses of #GstElement.
     */
    createAllPads(): void
    /**
     * Call `func` with `user_data` for each of `element'`s pads. `func` will be called
     * exactly once for each pad that exists at the time of this call, unless
     * one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new pads are added or pads are removed
     * while pads are being iterated, this will not be taken into account until
     * next time this function is used.
     */
    foreachPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s sink pads. `func` will be
     * called exactly once for each sink pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new sink pads are added or sink pads
     * are removed while the sink pads are being iterated, this will not be taken
     * into account until next time this function is used.
     */
    foreachSinkPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s source pads. `func` will be
     * called exactly once for each source pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new source pads are added or source pads
     * are removed while the source pads are being iterated, this will not be taken
     * into account until next time this function is used.
     */
    foreachSrcPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Returns the base time of the element. The base time is the
     * absolute time of the clock when this element was last put to
     * PLAYING. Subtracting the base time from the clock time gives
     * the running time of the element.
     */
    getBaseTime(): Gst.ClockTime
    /**
     * Returns the bus of the element. Note that only a #GstPipeline will provide a
     * bus for the application.
     */
    getBus(): Gst.Bus | null
    /**
     * Gets the currently configured clock of the element. This is the clock as was
     * last set with gst_element_set_clock().
     * 
     * Elements in a pipeline will only have their clock set when the
     * pipeline is in the PLAYING state.
     */
    getClock(): Gst.Clock | null
    /**
     * Looks for an unlinked pad to which the given pad can link. It is not
     * guaranteed that linking the pads will work, though it should work in most
     * cases.
     * 
     * This function will first attempt to find a compatible unlinked ALWAYS pad,
     * and if none can be found, it will request a compatible REQUEST pad by looking
     * at the templates of `element`.
     */
    getCompatiblePad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Retrieves a pad template from `element` that is compatible with `compattempl`.
     * Pads from compatible templates can be linked together.
     */
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     * 
     * MT safe.
     */
    getContext(contextType: string): Gst.Context | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     */
    getContextUnlocked(contextType: string): Gst.Context | null
    /**
     * Gets the contexts set on the element.
     * 
     * MT safe.
     */
    getContexts(): Gst.Context[]
    /**
     * Returns the current clock time of the element, as in, the time of the
     * element's clock, or GST_CLOCK_TIME_NONE if there is no clock.
     */
    getCurrentClockTime(): Gst.ClockTime
    /**
     * Returns the running time of the element. The running time is the
     * element's clock time minus its base time. Will return GST_CLOCK_TIME_NONE
     * if the element has no clock, or if its base time has not been set.
     */
    getCurrentRunningTime(): Gst.ClockTime
    /**
     * Retrieves the factory that was used to create this element.
     */
    getFactory(): Gst.ElementFactory | null
    /**
     * Get metadata with `key` in `klass`.
     */
    getMetadata(key: string): string
    /**
     * Retrieves a padtemplate from `element` with the given name.
     */
    getPadTemplate(name: string): Gst.PadTemplate | null
    /**
     * Retrieves a list of the pad templates associated with `element`. The
     * list must not be modified by the calling code.
     */
    getPadTemplateList(): Gst.PadTemplate[]
    /**
     * The name of this function is confusing to people learning GStreamer.
     * gst_element_request_pad_simple() aims at making it more explicit it is
     * a simplified gst_element_request_pad().
     */
    getRequestPad(name: string): Gst.Pad | null
    /**
     * Returns the start time of the element. The start time is the
     * running time of the clock when this element was last put to PAUSED.
     * 
     * Usually the start_time is managed by a toplevel element such as
     * #GstPipeline.
     * 
     * MT safe.
     */
    getStartTime(): Gst.ClockTime
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
     */
    getState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    /**
     * Retrieves a pad from `element` by name. This version only retrieves
     * already-existing (i.e. 'static') pads.
     */
    getStaticPad(name: string): Gst.Pad | null
    /**
     * Checks if the state of an element is locked.
     * If the state of an element is locked, state changes of the parent don't
     * affect the element.
     * This way you can leave currently unused elements inside bins. Just lock their
     * state before changing the state from #GST_STATE_NULL.
     * 
     * MT safe.
     */
    isLockedState(): boolean
    /**
     * Retrieves an iterator of `element'`s pads. The iterator should
     * be freed after usage. Also more specialized iterators exists such as
     * gst_element_iterate_src_pads() or gst_element_iterate_sink_pads().
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iteratePads(): Gst.Iterator
    /**
     * Retrieves an iterator of `element'`s sink pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterateSinkPads(): Gst.Iterator
    /**
     * Retrieves an iterator of `element'`s source pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterateSrcPads(): Gst.Iterator
    /**
     * Links `src` to `dest`. The link must be from source to
     * destination; the other direction will not be tried. The function looks for
     * existing pads that aren't linked yet. It will request new pads if necessary.
     * Such pads need to be released manually when unlinking.
     * If multiple links are possible, only one is established.
     * 
     * Make sure you have added your elements to a bin or pipeline with
     * gst_bin_add() before trying to link them.
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
     */
    linkFiltered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    /**
     * Links the two named pads of the source and destination elements.
     * Side effect is that if one of the pads has no parent, it becomes a
     * child of the parent of the other element.  If they have different
     * parents, the link fails.
     */
    linkPads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    /**
     * Links the two named pads of the source and destination elements. Side effect
     * is that if one of the pads has no parent, it becomes a child of the parent of
     * the other element. If they have different parents, the link fails. If `caps`
     * is not %NULL, makes sure that the caps of the link is a subset of `caps`.
     */
    linkPadsFiltered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
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
     */
    linkPadsFull(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
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
    lostState(): void
    /**
     * Post an error, warning or info message on the bus from inside an element.
     * 
     * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
     * #GST_MESSAGE_INFO.
     * 
     * MT safe.
     */
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    /**
     * Post an error, warning or info message on the bus from inside an element.
     * 
     * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
     * #GST_MESSAGE_INFO.
     */
    messageFullWithDetails(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
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
    noMorePads(): void
    /**
     * Post a message on the element's #GstBus. This function takes ownership of the
     * message; if you want to access the message after this call, you should add an
     * additional reference before calling.
     */
    postMessage(message: Gst.Message): boolean
    /**
     * Get the clock provided by the given element.
     * > An element is only required to provide a clock in the PAUSED
     * > state. Some elements can provide a clock in other states.
     */
    provideClock(): Gst.Clock | null
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     */
    query(query: Gst.Query): boolean
    /**
     * Queries an element to convert `src_val` in `src_format` to `dest_format`.
     */
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    /**
     * Queries an element (usually top-level pipeline or playbin element) for the
     * total stream duration in nanoseconds. This query will only work once the
     * pipeline is prerolled (i.e. reached PAUSED or PLAYING state). The application
     * will receive an ASYNC_DONE message on the pipeline bus when that is the case.
     * 
     * If the duration changes for some reason, you will get a DURATION_CHANGED
     * message on the pipeline bus, in which case you should re-query the duration
     * using this function.
     */
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
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
     */
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    /**
     * Makes the element free the previously requested pad as obtained
     * with gst_element_request_pad().
     * 
     * This does not unref the pad. If the pad was created by using
     * gst_element_request_pad(), gst_element_release_request_pad() needs to be
     * followed by gst_object_unref() to free the `pad`.
     * 
     * MT safe.
     */
    releaseRequestPad(pad: Gst.Pad): void
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
     */
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    /**
     * Retrieves a request pad from the element according to the provided template.
     * Pad templates can be looked up using
     * gst_element_factory_get_static_pad_templates().
     * 
     * The pad should be released with gst_element_release_request_pad().
     */
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
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
     */
    requestPadSimple(name: string): Gst.Pad | null
    /**
     * Sends a seek event to an element. See gst_event_new_seek() for the details of
     * the parameters. The seek event is sent to the element using
     * gst_element_send_event().
     * 
     * MT safe.
     */
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, startType: Gst.SeekType, start: number, stopType: Gst.SeekType, stop: number): boolean
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
     */
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: number): boolean
    /**
     * Sends an event to an element. If the element doesn't implement an
     * event handler, the event will be pushed on a random linked sink pad for
     * downstream events or a random linked source pad for upstream events.
     * 
     * This function takes ownership of the provided event so you should
     * gst_event_ref() it if you want to reuse the event after this call.
     * 
     * MT safe.
     */
    sendEvent(event: Gst.Event): boolean
    /**
     * Set the base time of an element. See gst_element_get_base_time().
     * 
     * MT safe.
     */
    setBaseTime(time: Gst.ClockTime): void
    /**
     * Sets the bus of the element. Increases the refcount on the bus.
     * For internal use only, unless you're testing elements.
     * 
     * MT safe.
     */
    setBus(bus?: Gst.Bus | null): void
    /**
     * Sets the clock for the element. This function increases the
     * refcount on the clock. Any previously set clock on the object
     * is unreffed.
     */
    setClock(clock?: Gst.Clock | null): boolean
    /**
     * Sets the context of the element. Increases the refcount of the context.
     * 
     * MT safe.
     */
    setContext(context: Gst.Context): void
    /**
     * Locks the state of an element, so state changes of the parent don't affect
     * this element anymore.
     * 
     * Note that this is racy if the state lock of the parent bin is not taken.
     * The parent bin might've just checked the flag in another thread and as the
     * next step proceed to change the child element's state.
     * 
     * MT safe.
     */
    setLockedState(lockedState: boolean): boolean
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
     */
    setStartTime(time: Gst.ClockTime): void
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
     */
    setState(state: Gst.State): Gst.StateChangeReturn
    /**
     * Tries to change the state of the element to the same as its parent.
     * If this function returns %FALSE, the state of element is undefined.
     */
    syncStateWithParent(): boolean
    /**
     * Unlinks all source pads of the source element with all sink pads
     * of the sink element to which they are linked.
     * 
     * If the link has been made using gst_element_link(), it could have created an
     * requestpad, which has to be released using gst_element_release_request_pad().
     */
    unlink(dest: Gst.Element): void
    /**
     * Unlinks the two named pads of the source and destination elements.
     * 
     * This is a convenience function for gst_pad_unlink().
     */
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    /**
     * Attach the #GstControlBinding to the object. If there already was a
     * #GstControlBinding for this property it will be replaced.
     * 
     * The object's reference count will be incremented, and any floating
     * reference will be removed (see gst_object_ref_sink())
     */
    addControlBinding(binding: Gst.ControlBinding): boolean
    /**
     * A default error function that uses g_printerr() to display the error message
     * and the optional debug string..
     * 
     * The default handler will simply print the error string using g_print.
     */
    defaultError(error: GLib.Error, debug?: string | null): void
    /**
     * Gets the corresponding #GstControlBinding for the property. This should be
     * unreferenced again after use.
     */
    getControlBinding(propertyName: string): Gst.ControlBinding | null
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
    getControlRate(): Gst.ClockTime
    /**
     * Gets a number of #GValues for the given controlled property starting at the
     * requested time. The array `values` need to hold enough space for `n_values` of
     * #GValue.
     * 
     * This function is useful if one wants to e.g. draw a graph of the control
     * curve or apply a control curve sample by sample.
     */
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    /**
     * Returns a copy of the name of `object`.
     * Caller should g_free() the return value after usage.
     * For a nameless object, this returns %NULL, which you can safely g_free()
     * as well.
     * 
     * Free-function: g_free
     */
    getName(): string | null
    /**
     * Returns the parent of `object`. This function increases the refcount
     * of the parent object so you should gst_object_unref() it after usage.
     */
    getParent(): Gst.Object | null
    /**
     * Generates a string describing the path of `object` in
     * the object hierarchy. Only useful (or used) for debugging.
     * 
     * Free-function: g_free
     */
    getPathString(): string
    /**
     * Gets the value for the given controlled property at the requested time.
     */
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
    /**
     * Check if the `object` has active controlled properties.
     */
    hasActiveControlBindings(): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     */
    hasAncestor(ancestor: Gst.Object): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     */
    hasAsAncestor(ancestor: Gst.Object): boolean
    /**
     * Check if `parent` is the parent of `object`.
     * E.g. a #GstElement can check if it owns a given #GstPad.
     */
    hasAsParent(parent: Gst.Object): boolean
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
     */
    removeControlBinding(binding: Gst.ControlBinding): boolean
    /**
     * This function is used to disable the control bindings on a property for
     * some time, i.e. gst_object_sync_values() will do nothing for the
     * property.
     */
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    /**
     * This function is used to disable all controlled properties of the `object` for
     * some time, i.e. gst_object_sync_values() will do nothing.
     */
    setControlBindingsDisabled(disabled: boolean): void
    /**
     * Change the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * The control-rate should not change if the element is in %GST_STATE_PAUSED or
     * %GST_STATE_PLAYING.
     */
    setControlRate(controlRate: Gst.ClockTime): void
    /**
     * Sets the name of `object,` or gives `object` a guaranteed unique
     * name (if `name` is %NULL).
     * This function makes a copy of the provided name, so the caller
     * retains ownership of the name it sent.
     */
    setName(name?: string | null): boolean
    /**
     * Sets the parent of `object` to `parent`. The object's reference count will
     * be incremented, and any floating reference will be removed (see gst_object_ref_sink()).
     */
    setParent(parent: Gst.Object): boolean
    /**
     * Returns a suggestion for timestamps where buffers should be split
     * to get best controller results.
     */
    suggestNextSync(): Gst.ClockTime
    /**
     * Sets the properties of the object, according to the #GstControlSources that
     * (maybe) handle them and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     */
    syncValues(timestamp: Gst.ClockTime): boolean
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     */
    watchClosure(closure: Function): void
    /* Signals of GstRtp-1.0.GstRtp.RTPBaseDepayload */
    /**
     * Add `ext` as an extension for reading part of an RTP header extension from
     * incoming RTP packets.
     */
    connect(sigName: "add-extension", callback: ((ext: RTPHeaderExtension) => void)): number
    on(sigName: "add-extension", callback: (ext: RTPHeaderExtension) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "add-extension", callback: (ext: RTPHeaderExtension) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "add-extension", callback: (ext: RTPHeaderExtension) => void): NodeJS.EventEmitter
    emit(sigName: "add-extension", ext: RTPHeaderExtension): void
    /**
     * Clear all RTP header extensions used by this depayloader.
     */
    connect(sigName: "clear-extensions", callback: (() => void)): number
    on(sigName: "clear-extensions", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "clear-extensions", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "clear-extensions", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "clear-extensions"): void
    /**
     * The returned `ext` must be configured with the correct `ext_id` and with the
     * necessary attributes as required by the extension implementation.
     */
    connect(sigName: "request-extension", callback: ((extId: number, extUri?: string | null) => RTPHeaderExtension)): number
    on(sigName: "request-extension", callback: (extId: number, extUri?: string | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-extension", callback: (extId: number, extUri?: string | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-extension", callback: (extId: number, extUri?: string | null) => void): NodeJS.EventEmitter
    emit(sigName: "request-extension", extId: number, extUri?: string | null): void
    /* Signals of Gst-1.0.Gst.Element */
    /**
     * This signals that the element will not generate more dynamic pads.
     * Note that this signal will usually be emitted from the context of
     * the streaming thread.
     */
    connect(sigName: "no-more-pads", callback: (() => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    /**
     * a new #GstPad has been added to the element. Note that this signal will
     * usually be emitted from the context of the streaming thread. Also keep in
     * mind that if you add new elements to the pipeline in the signal handler
     * you will need to set them to the desired target state with
     * gst_element_set_state() or gst_element_sync_state_with_parent().
     */
    connect(sigName: "pad-added", callback: ((newPad: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (newPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    /**
     * a #GstPad has been removed from the element
     */
    connect(sigName: "pad-removed", callback: ((oldPad: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    /**
     * The deep notify signal is used to be notified of property changes. It is
     * typically attached to the toplevel bin to receive notifications from all
     * the elements contained in that bin.
     */
    connect(sigName: "deep-notify", callback: ((propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auto-header-extension", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-header-extension", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-header-extension", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-header-extension", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-header-extension", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-reorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-reorder", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-reorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-reorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-reorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::source-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stats", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
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
    autoHeaderExtension?: boolean
    maxPtime?: number
    /**
     * Minimum duration of the packet data in ns (can't go above MTU)
     */
    minPtime?: number
    mtu?: number
    /**
     * Make the payloader timestamp packets according to the Rate-Control=no
     * behaviour specified in the ONVIF replay spec.
     */
    onvifNoRateControl?: boolean
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
    perfectRtptime?: boolean
    pt?: number
    /**
     * Force buffers to be multiples of this duration in ns (0 disables)
     */
    ptimeMultiple?: number
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
    scaleRtptime?: boolean
    seqnumOffset?: number
    /**
     * Enable writing the CSRC field in allocated RTP header based on RTP source
     * information found in the input buffer's #GstRTPSourceMeta.
     */
    sourceInfo?: boolean
    ssrc?: number
    timestampOffset?: number
}
class RTPBasePayload {
    /* Properties of GstRtp-1.0.GstRtp.RTPBasePayload */
    /**
     * If enabled, the payloader will automatically try to enable all the
     * RTP header extensions provided in the src caps, saving the application
     * the need to handle these extensions manually using the
     * GstRTPBasePayload::request-extension: signal.
     */
    autoHeaderExtension: boolean
    maxPtime: number
    /**
     * Minimum duration of the packet data in ns (can't go above MTU)
     */
    minPtime: number
    mtu: number
    /**
     * Make the payloader timestamp packets according to the Rate-Control=no
     * behaviour specified in the ONVIF replay spec.
     */
    onvifNoRateControl: boolean
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
    perfectRtptime: boolean
    pt: number
    /**
     * Force buffers to be multiples of this duration in ns (0 disables)
     */
    ptimeMultiple: number
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
    scaleRtptime: boolean
    readonly seqnum: number
    seqnumOffset: number
    /**
     * Enable writing the CSRC field in allocated RTP header based on RTP source
     * information found in the input buffer's #GstRTPSourceMeta.
     */
    sourceInfo: boolean
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
    timestampOffset: number
    /* Fields of Gst-1.0.Gst.Element */
    readonly object: Gst.Object
    /**
     * Used to serialize execution of gst_element_set_state()
     */
    readonly stateLock: GLib.RecMutex
    /**
     * Used to signal completion of a state change
     */
    readonly stateCond: GLib.Cond
    /**
     * Used to detect concurrent execution of
     * gst_element_set_state() and gst_element_get_state()
     */
    readonly stateCookie: number
    /**
     * the target state of an element as set by the application
     */
    readonly targetState: Gst.State
    /**
     * the current state of an element
     */
    readonly currentState: Gst.State
    /**
     * the next state of an element, can be #GST_STATE_VOID_PENDING if
     * the element is in the correct state.
     */
    readonly nextState: Gst.State
    /**
     * the final state the element should go to, can be
     * #GST_STATE_VOID_PENDING if the element is in the correct state
     */
    readonly pendingState: Gst.State
    /**
     * the last return value of an element state change
     */
    readonly lastReturn: Gst.StateChangeReturn
    /**
     * the bus of the element. This bus is provided to the element by the
     * parent element or the application. A #GstPipeline has a bus of its own.
     */
    readonly bus: Gst.Bus
    /**
     * the clock of the element. This clock is usually provided to the
     * element by the toplevel #GstPipeline.
     */
    readonly clock: Gst.Clock
    /**
     * the time of the clock right before the element is set to
     * PLAYING. Subtracting `base_time` from the current clock time in the PLAYING
     * state will yield the running_time against the clock.
     */
    readonly baseTime: Gst.ClockTimeDiff
    /**
     * the running_time of the last PAUSED state
     */
    readonly startTime: Gst.ClockTime
    /**
     * number of pads of the element, includes both source and sink pads.
     */
    readonly numpads: number
    /**
     * list of pads
     */
    readonly pads: Gst.Pad[]
    /**
     * number of source pads of the element.
     */
    readonly numsrcpads: number
    /**
     * list of source pads
     */
    readonly srcpads: Gst.Pad[]
    /**
     * number of sink pads of the element.
     */
    readonly numsinkpads: number
    /**
     * list of sink pads
     */
    readonly sinkpads: Gst.Pad[]
    /**
     * updated whenever the a pad is added or removed
     */
    readonly padsCookie: number
    /**
     * list of contexts
     */
    readonly contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    /**
     * object LOCK
     */
    readonly lock: GLib.Mutex
    /**
     * The name of the object
     */
    readonly name: string
    /**
     * this object's parent, weak ref
     */
    readonly parent: Gst.Object
    /**
     * flags for this object
     */
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstRtp-1.0.GstRtp.RTPBasePayload */
    /**
     * Allocate a new #GstBuffer with enough data to hold an RTP packet with
     * minimum `csrc_count` CSRCs, a payload length of `payload_len` and padding of
     * `pad_len`. If `payload` has #GstRTPBasePayload:source-info %TRUE additional
     * CSRCs may be allocated and filled with RTP source information.
     */
    allocateOutputBuffer(payloadLen: number, padLen: number, csrcCount: number): Gst.Buffer
    /**
     * Count the total number of RTP sources found in the meta of `buffer,` which
     * will be automically added by gst_rtp_base_payload_allocate_output_buffer().
     * If #GstRTPBasePayload:source-info is %FALSE the count will be 0.
     */
    getSourceCount(buffer: Gst.Buffer): number
    /**
     * Check if the packet with `size` and `duration` would exceed the configured
     * maximum size.
     */
    isFilled(size: number, duration: Gst.ClockTime): boolean
    /**
     * Queries whether the payloader will add contributing sources (CSRCs) to the
     * RTP header from #GstRTPSourceMeta.
     */
    isSourceInfoEnabled(): boolean
    /**
     * Push `buffer` to the peer element of the payloader. The SSRC, payload type,
     * seqnum and timestamp of the RTP buffer will be updated first.
     * 
     * This function takes ownership of `buffer`.
     */
    push(buffer: Gst.Buffer): Gst.FlowReturn
    /**
     * Push `list` to the peer element of the payloader. The SSRC, payload type,
     * seqnum and timestamp of the RTP buffer will be updated first.
     * 
     * This function takes ownership of `list`.
     */
    pushList(list: Gst.BufferList): Gst.FlowReturn
    /**
     * Set the rtp options of the payloader. These options will be set in the caps
     * of the payloader. Subclasses must call this method before calling
     * gst_rtp_base_payload_push() or gst_rtp_base_payload_set_outcaps().
     */
    setOptions(media: string, dynamic: boolean, encodingName: string, clockRate: number): void
    /**
     * Configure the output caps with the optional fields.
     */
    setOutcapsStructure(s?: Gst.Structure | null): boolean
    /**
     * Enable or disable adding contributing sources to RTP packets from
     * #GstRTPSourceMeta.
     */
    setSourceInfoEnabled(enable: boolean): void
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
    abortState(): void
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
     */
    addPad(pad: Gst.Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
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
     */
    callAsync(func: Gst.ElementCallAsyncFunc): void
    /**
     * Perform `transition` on `element`.
     * 
     * This function must be called with STATE_LOCK held and is mainly used
     * internally.
     */
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
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
     */
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    /**
     * Creates a pad for each pad template that is always available.
     * This function is only useful during object initialization of
     * subclasses of #GstElement.
     */
    createAllPads(): void
    /**
     * Call `func` with `user_data` for each of `element'`s pads. `func` will be called
     * exactly once for each pad that exists at the time of this call, unless
     * one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new pads are added or pads are removed
     * while pads are being iterated, this will not be taken into account until
     * next time this function is used.
     */
    foreachPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s sink pads. `func` will be
     * called exactly once for each sink pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new sink pads are added or sink pads
     * are removed while the sink pads are being iterated, this will not be taken
     * into account until next time this function is used.
     */
    foreachSinkPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s source pads. `func` will be
     * called exactly once for each source pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new source pads are added or source pads
     * are removed while the source pads are being iterated, this will not be taken
     * into account until next time this function is used.
     */
    foreachSrcPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Returns the base time of the element. The base time is the
     * absolute time of the clock when this element was last put to
     * PLAYING. Subtracting the base time from the clock time gives
     * the running time of the element.
     */
    getBaseTime(): Gst.ClockTime
    /**
     * Returns the bus of the element. Note that only a #GstPipeline will provide a
     * bus for the application.
     */
    getBus(): Gst.Bus | null
    /**
     * Gets the currently configured clock of the element. This is the clock as was
     * last set with gst_element_set_clock().
     * 
     * Elements in a pipeline will only have their clock set when the
     * pipeline is in the PLAYING state.
     */
    getClock(): Gst.Clock | null
    /**
     * Looks for an unlinked pad to which the given pad can link. It is not
     * guaranteed that linking the pads will work, though it should work in most
     * cases.
     * 
     * This function will first attempt to find a compatible unlinked ALWAYS pad,
     * and if none can be found, it will request a compatible REQUEST pad by looking
     * at the templates of `element`.
     */
    getCompatiblePad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Retrieves a pad template from `element` that is compatible with `compattempl`.
     * Pads from compatible templates can be linked together.
     */
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     * 
     * MT safe.
     */
    getContext(contextType: string): Gst.Context | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     */
    getContextUnlocked(contextType: string): Gst.Context | null
    /**
     * Gets the contexts set on the element.
     * 
     * MT safe.
     */
    getContexts(): Gst.Context[]
    /**
     * Returns the current clock time of the element, as in, the time of the
     * element's clock, or GST_CLOCK_TIME_NONE if there is no clock.
     */
    getCurrentClockTime(): Gst.ClockTime
    /**
     * Returns the running time of the element. The running time is the
     * element's clock time minus its base time. Will return GST_CLOCK_TIME_NONE
     * if the element has no clock, or if its base time has not been set.
     */
    getCurrentRunningTime(): Gst.ClockTime
    /**
     * Retrieves the factory that was used to create this element.
     */
    getFactory(): Gst.ElementFactory | null
    /**
     * Get metadata with `key` in `klass`.
     */
    getMetadata(key: string): string
    /**
     * Retrieves a padtemplate from `element` with the given name.
     */
    getPadTemplate(name: string): Gst.PadTemplate | null
    /**
     * Retrieves a list of the pad templates associated with `element`. The
     * list must not be modified by the calling code.
     */
    getPadTemplateList(): Gst.PadTemplate[]
    /**
     * The name of this function is confusing to people learning GStreamer.
     * gst_element_request_pad_simple() aims at making it more explicit it is
     * a simplified gst_element_request_pad().
     */
    getRequestPad(name: string): Gst.Pad | null
    /**
     * Returns the start time of the element. The start time is the
     * running time of the clock when this element was last put to PAUSED.
     * 
     * Usually the start_time is managed by a toplevel element such as
     * #GstPipeline.
     * 
     * MT safe.
     */
    getStartTime(): Gst.ClockTime
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
     */
    getState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    /**
     * Retrieves a pad from `element` by name. This version only retrieves
     * already-existing (i.e. 'static') pads.
     */
    getStaticPad(name: string): Gst.Pad | null
    /**
     * Checks if the state of an element is locked.
     * If the state of an element is locked, state changes of the parent don't
     * affect the element.
     * This way you can leave currently unused elements inside bins. Just lock their
     * state before changing the state from #GST_STATE_NULL.
     * 
     * MT safe.
     */
    isLockedState(): boolean
    /**
     * Retrieves an iterator of `element'`s pads. The iterator should
     * be freed after usage. Also more specialized iterators exists such as
     * gst_element_iterate_src_pads() or gst_element_iterate_sink_pads().
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iteratePads(): Gst.Iterator
    /**
     * Retrieves an iterator of `element'`s sink pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterateSinkPads(): Gst.Iterator
    /**
     * Retrieves an iterator of `element'`s source pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterateSrcPads(): Gst.Iterator
    /**
     * Links `src` to `dest`. The link must be from source to
     * destination; the other direction will not be tried. The function looks for
     * existing pads that aren't linked yet. It will request new pads if necessary.
     * Such pads need to be released manually when unlinking.
     * If multiple links are possible, only one is established.
     * 
     * Make sure you have added your elements to a bin or pipeline with
     * gst_bin_add() before trying to link them.
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
     */
    linkFiltered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    /**
     * Links the two named pads of the source and destination elements.
     * Side effect is that if one of the pads has no parent, it becomes a
     * child of the parent of the other element.  If they have different
     * parents, the link fails.
     */
    linkPads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    /**
     * Links the two named pads of the source and destination elements. Side effect
     * is that if one of the pads has no parent, it becomes a child of the parent of
     * the other element. If they have different parents, the link fails. If `caps`
     * is not %NULL, makes sure that the caps of the link is a subset of `caps`.
     */
    linkPadsFiltered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
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
     */
    linkPadsFull(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
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
    lostState(): void
    /**
     * Post an error, warning or info message on the bus from inside an element.
     * 
     * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
     * #GST_MESSAGE_INFO.
     * 
     * MT safe.
     */
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    /**
     * Post an error, warning or info message on the bus from inside an element.
     * 
     * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
     * #GST_MESSAGE_INFO.
     */
    messageFullWithDetails(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
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
    noMorePads(): void
    /**
     * Post a message on the element's #GstBus. This function takes ownership of the
     * message; if you want to access the message after this call, you should add an
     * additional reference before calling.
     */
    postMessage(message: Gst.Message): boolean
    /**
     * Get the clock provided by the given element.
     * > An element is only required to provide a clock in the PAUSED
     * > state. Some elements can provide a clock in other states.
     */
    provideClock(): Gst.Clock | null
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     */
    query(query: Gst.Query): boolean
    /**
     * Queries an element to convert `src_val` in `src_format` to `dest_format`.
     */
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    /**
     * Queries an element (usually top-level pipeline or playbin element) for the
     * total stream duration in nanoseconds. This query will only work once the
     * pipeline is prerolled (i.e. reached PAUSED or PLAYING state). The application
     * will receive an ASYNC_DONE message on the pipeline bus when that is the case.
     * 
     * If the duration changes for some reason, you will get a DURATION_CHANGED
     * message on the pipeline bus, in which case you should re-query the duration
     * using this function.
     */
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
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
     */
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    /**
     * Makes the element free the previously requested pad as obtained
     * with gst_element_request_pad().
     * 
     * This does not unref the pad. If the pad was created by using
     * gst_element_request_pad(), gst_element_release_request_pad() needs to be
     * followed by gst_object_unref() to free the `pad`.
     * 
     * MT safe.
     */
    releaseRequestPad(pad: Gst.Pad): void
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
     */
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    /**
     * Retrieves a request pad from the element according to the provided template.
     * Pad templates can be looked up using
     * gst_element_factory_get_static_pad_templates().
     * 
     * The pad should be released with gst_element_release_request_pad().
     */
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
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
     */
    requestPadSimple(name: string): Gst.Pad | null
    /**
     * Sends a seek event to an element. See gst_event_new_seek() for the details of
     * the parameters. The seek event is sent to the element using
     * gst_element_send_event().
     * 
     * MT safe.
     */
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, startType: Gst.SeekType, start: number, stopType: Gst.SeekType, stop: number): boolean
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
     */
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: number): boolean
    /**
     * Sends an event to an element. If the element doesn't implement an
     * event handler, the event will be pushed on a random linked sink pad for
     * downstream events or a random linked source pad for upstream events.
     * 
     * This function takes ownership of the provided event so you should
     * gst_event_ref() it if you want to reuse the event after this call.
     * 
     * MT safe.
     */
    sendEvent(event: Gst.Event): boolean
    /**
     * Set the base time of an element. See gst_element_get_base_time().
     * 
     * MT safe.
     */
    setBaseTime(time: Gst.ClockTime): void
    /**
     * Sets the bus of the element. Increases the refcount on the bus.
     * For internal use only, unless you're testing elements.
     * 
     * MT safe.
     */
    setBus(bus?: Gst.Bus | null): void
    /**
     * Sets the clock for the element. This function increases the
     * refcount on the clock. Any previously set clock on the object
     * is unreffed.
     */
    setClock(clock?: Gst.Clock | null): boolean
    /**
     * Sets the context of the element. Increases the refcount of the context.
     * 
     * MT safe.
     */
    setContext(context: Gst.Context): void
    /**
     * Locks the state of an element, so state changes of the parent don't affect
     * this element anymore.
     * 
     * Note that this is racy if the state lock of the parent bin is not taken.
     * The parent bin might've just checked the flag in another thread and as the
     * next step proceed to change the child element's state.
     * 
     * MT safe.
     */
    setLockedState(lockedState: boolean): boolean
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
     */
    setStartTime(time: Gst.ClockTime): void
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
     */
    setState(state: Gst.State): Gst.StateChangeReturn
    /**
     * Tries to change the state of the element to the same as its parent.
     * If this function returns %FALSE, the state of element is undefined.
     */
    syncStateWithParent(): boolean
    /**
     * Unlinks all source pads of the source element with all sink pads
     * of the sink element to which they are linked.
     * 
     * If the link has been made using gst_element_link(), it could have created an
     * requestpad, which has to be released using gst_element_release_request_pad().
     */
    unlink(dest: Gst.Element): void
    /**
     * Unlinks the two named pads of the source and destination elements.
     * 
     * This is a convenience function for gst_pad_unlink().
     */
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    /**
     * Attach the #GstControlBinding to the object. If there already was a
     * #GstControlBinding for this property it will be replaced.
     * 
     * The object's reference count will be incremented, and any floating
     * reference will be removed (see gst_object_ref_sink())
     */
    addControlBinding(binding: Gst.ControlBinding): boolean
    /**
     * A default error function that uses g_printerr() to display the error message
     * and the optional debug string..
     * 
     * The default handler will simply print the error string using g_print.
     */
    defaultError(error: GLib.Error, debug?: string | null): void
    /**
     * Gets the corresponding #GstControlBinding for the property. This should be
     * unreferenced again after use.
     */
    getControlBinding(propertyName: string): Gst.ControlBinding | null
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
    getControlRate(): Gst.ClockTime
    /**
     * Gets a number of #GValues for the given controlled property starting at the
     * requested time. The array `values` need to hold enough space for `n_values` of
     * #GValue.
     * 
     * This function is useful if one wants to e.g. draw a graph of the control
     * curve or apply a control curve sample by sample.
     */
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    /**
     * Returns a copy of the name of `object`.
     * Caller should g_free() the return value after usage.
     * For a nameless object, this returns %NULL, which you can safely g_free()
     * as well.
     * 
     * Free-function: g_free
     */
    getName(): string | null
    /**
     * Returns the parent of `object`. This function increases the refcount
     * of the parent object so you should gst_object_unref() it after usage.
     */
    getParent(): Gst.Object | null
    /**
     * Generates a string describing the path of `object` in
     * the object hierarchy. Only useful (or used) for debugging.
     * 
     * Free-function: g_free
     */
    getPathString(): string
    /**
     * Gets the value for the given controlled property at the requested time.
     */
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
    /**
     * Check if the `object` has active controlled properties.
     */
    hasActiveControlBindings(): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     */
    hasAncestor(ancestor: Gst.Object): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     */
    hasAsAncestor(ancestor: Gst.Object): boolean
    /**
     * Check if `parent` is the parent of `object`.
     * E.g. a #GstElement can check if it owns a given #GstPad.
     */
    hasAsParent(parent: Gst.Object): boolean
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
     */
    removeControlBinding(binding: Gst.ControlBinding): boolean
    /**
     * This function is used to disable the control bindings on a property for
     * some time, i.e. gst_object_sync_values() will do nothing for the
     * property.
     */
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    /**
     * This function is used to disable all controlled properties of the `object` for
     * some time, i.e. gst_object_sync_values() will do nothing.
     */
    setControlBindingsDisabled(disabled: boolean): void
    /**
     * Change the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * The control-rate should not change if the element is in %GST_STATE_PAUSED or
     * %GST_STATE_PLAYING.
     */
    setControlRate(controlRate: Gst.ClockTime): void
    /**
     * Sets the name of `object,` or gives `object` a guaranteed unique
     * name (if `name` is %NULL).
     * This function makes a copy of the provided name, so the caller
     * retains ownership of the name it sent.
     */
    setName(name?: string | null): boolean
    /**
     * Sets the parent of `object` to `parent`. The object's reference count will
     * be incremented, and any floating reference will be removed (see gst_object_ref_sink()).
     */
    setParent(parent: Gst.Object): boolean
    /**
     * Returns a suggestion for timestamps where buffers should be split
     * to get best controller results.
     */
    suggestNextSync(): Gst.ClockTime
    /**
     * Sets the properties of the object, according to the #GstControlSources that
     * (maybe) handle them and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     */
    syncValues(timestamp: Gst.ClockTime): boolean
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     */
    watchClosure(closure: Function): void
    /* Signals of GstRtp-1.0.GstRtp.RTPBasePayload */
    /**
     * Add `ext` as an extension for writing part of an RTP header extension onto
     * outgoing RTP packets.
     */
    connect(sigName: "add-extension", callback: ((ext: RTPHeaderExtension) => void)): number
    on(sigName: "add-extension", callback: (ext: RTPHeaderExtension) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "add-extension", callback: (ext: RTPHeaderExtension) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "add-extension", callback: (ext: RTPHeaderExtension) => void): NodeJS.EventEmitter
    emit(sigName: "add-extension", ext: RTPHeaderExtension): void
    /**
     * Clear all RTP header extensions used by this payloader.
     */
    connect(sigName: "clear-extensions", callback: (() => void)): number
    on(sigName: "clear-extensions", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "clear-extensions", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "clear-extensions", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "clear-extensions"): void
    /**
     * The returned `ext` must be configured with the correct `ext_id` and with the
     * necessary attributes as required by the extension implementation.
     */
    connect(sigName: "request-extension", callback: ((extId: number, extUri: string) => RTPHeaderExtension)): number
    on(sigName: "request-extension", callback: (extId: number, extUri: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-extension", callback: (extId: number, extUri: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-extension", callback: (extId: number, extUri: string) => void): NodeJS.EventEmitter
    emit(sigName: "request-extension", extId: number, extUri: string): void
    /* Signals of Gst-1.0.Gst.Element */
    /**
     * This signals that the element will not generate more dynamic pads.
     * Note that this signal will usually be emitted from the context of
     * the streaming thread.
     */
    connect(sigName: "no-more-pads", callback: (() => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    /**
     * a new #GstPad has been added to the element. Note that this signal will
     * usually be emitted from the context of the streaming thread. Also keep in
     * mind that if you add new elements to the pipeline in the signal handler
     * you will need to set them to the desired target state with
     * gst_element_set_state() or gst_element_sync_state_with_parent().
     */
    connect(sigName: "pad-added", callback: ((newPad: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (newPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    /**
     * a #GstPad has been removed from the element
     */
    connect(sigName: "pad-removed", callback: ((oldPad: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    /**
     * The deep notify signal is used to be notified of property changes. It is
     * typically attached to the toplevel bin to receive notifications from all
     * the elements contained in that bin.
     */
    connect(sigName: "deep-notify", callback: ((propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::auto-header-extension", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-header-extension", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::auto-header-extension", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::auto-header-extension", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::auto-header-extension", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::max-ptime", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-ptime", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::max-ptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::max-ptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::max-ptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::min-ptime", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-ptime", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::min-ptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::min-ptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::min-ptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::onvif-no-rate-control", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::onvif-no-rate-control", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::onvif-no-rate-control", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::onvif-no-rate-control", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::onvif-no-rate-control", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::perfect-rtptime", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::perfect-rtptime", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::perfect-rtptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::perfect-rtptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::perfect-rtptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::pt", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pt", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::pt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::pt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::pt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ptime-multiple", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ptime-multiple", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ptime-multiple", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ptime-multiple", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ptime-multiple", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-rtptime", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-rtptime", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-rtptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-rtptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-rtptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::seqnum", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seqnum", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::seqnum", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::seqnum", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::seqnum", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::seqnum-offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seqnum-offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::seqnum-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::seqnum-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::seqnum-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::source-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-info", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::source-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::source-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::source-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::ssrc", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssrc", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::ssrc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::ssrc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::ssrc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::stats", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::timestamp-offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp-offset", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::timestamp-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::timestamp-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::timestamp-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RTPBasePayload_ConstructProps)
    _init (config?: RTPBasePayload_ConstructProps): void
    static $gtype: GObject.Type
}
interface RTPHeaderExtension_ConstructProps extends Gst.Element_ConstructProps {
}
class RTPHeaderExtension {
    /* Fields of Gst-1.0.Gst.Element */
    readonly object: Gst.Object
    /**
     * Used to serialize execution of gst_element_set_state()
     */
    readonly stateLock: GLib.RecMutex
    /**
     * Used to signal completion of a state change
     */
    readonly stateCond: GLib.Cond
    /**
     * Used to detect concurrent execution of
     * gst_element_set_state() and gst_element_get_state()
     */
    readonly stateCookie: number
    /**
     * the target state of an element as set by the application
     */
    readonly targetState: Gst.State
    /**
     * the current state of an element
     */
    readonly currentState: Gst.State
    /**
     * the next state of an element, can be #GST_STATE_VOID_PENDING if
     * the element is in the correct state.
     */
    readonly nextState: Gst.State
    /**
     * the final state the element should go to, can be
     * #GST_STATE_VOID_PENDING if the element is in the correct state
     */
    readonly pendingState: Gst.State
    /**
     * the last return value of an element state change
     */
    readonly lastReturn: Gst.StateChangeReturn
    /**
     * the bus of the element. This bus is provided to the element by the
     * parent element or the application. A #GstPipeline has a bus of its own.
     */
    readonly bus: Gst.Bus
    /**
     * the clock of the element. This clock is usually provided to the
     * element by the toplevel #GstPipeline.
     */
    readonly clock: Gst.Clock
    /**
     * the time of the clock right before the element is set to
     * PLAYING. Subtracting `base_time` from the current clock time in the PLAYING
     * state will yield the running_time against the clock.
     */
    readonly baseTime: Gst.ClockTimeDiff
    /**
     * the running_time of the last PAUSED state
     */
    readonly startTime: Gst.ClockTime
    /**
     * number of pads of the element, includes both source and sink pads.
     */
    readonly numpads: number
    /**
     * list of pads
     */
    readonly pads: Gst.Pad[]
    /**
     * number of source pads of the element.
     */
    readonly numsrcpads: number
    /**
     * list of source pads
     */
    readonly srcpads: Gst.Pad[]
    /**
     * number of sink pads of the element.
     */
    readonly numsinkpads: number
    /**
     * list of sink pads
     */
    readonly sinkpads: Gst.Pad[]
    /**
     * updated whenever the a pad is added or removed
     */
    readonly padsCookie: number
    /**
     * list of contexts
     */
    readonly contexts: Gst.Context[]
    /* Fields of Gst-1.0.Gst.Object */
    /**
     * object LOCK
     */
    readonly lock: GLib.Mutex
    /**
     * The name of the object
     */
    readonly name: string
    /**
     * this object's parent, weak ref
     */
    readonly parent: Gst.Object
    /**
     * flags for this object
     */
    readonly flags: number
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of GstRtp-1.0.GstRtp.RTPHeaderExtension */
    /**
     * Retrieve the direction
     */
    getDirection(): RTPHeaderExtensionDirection
    getId(): number
    /**
     * This is used to know how much data a certain header extension will need for
     * both allocating the resulting data, and deciding how much payload data can
     * be generated.
     * 
     * Implementations should return as accurate a value as is possible using the
     * information given in the input `buffer`.
     */
    getMaxSize(inputMeta: Gst.Buffer): number
    getSdpCapsFieldName(): string
    getSupportedFlags(): RTPHeaderExtensionFlags
    getUri(): string
    /**
     * Read the RTP header extension from `data`.
     */
    read(readFlags: RTPHeaderExtensionFlags, data: Uint8Array, buffer: Gst.Buffer): boolean
    /**
     * gst_rtp_header_extension_set_id() must have been called with a valid
     * extension id that is contained in these caps.
     * 
     * The only current known caps format is based on the SDP standard as produced
     * by gst_sdp_media_attributes_to_caps().
     */
    setAttributesFromCaps(caps: Gst.Caps): boolean
    /**
     * gst_rtp_header_extension_set_id() must have been called with a valid
     * extension id that is contained in these caps.
     * 
     * The only current known caps format is based on the SDP standard as produced
     * by gst_sdp_media_attributes_to_caps().
     */
    setCapsFromAttributes(caps: Gst.Caps): boolean
    /**
     * Helper implementation for GstRTPExtensionClass::set_caps_from_attributes
     * that sets the `ext` uri on caps with the specified extension id as required
     * for sdp #GstCaps.
     * 
     * Requires that the extension does not have any attributes or direction
     * advertised in `caps`.
     */
    setCapsFromAttributesHelper(caps: Gst.Caps, attributes: string): boolean
    /**
     * Set the direction that this header extension should be used in.
     * If #GST_RTP_HEADER_EXTENSION_DIRECTION_INHERITED is included, the
     * direction will not be included in the caps (as it shouldn't be in the
     * extmap line in the SDP).
     */
    setDirection(direction: RTPHeaderExtensionDirection): void
    /**
     * sets the RTP extension id on `ext`
     */
    setId(extId: number): void
    /**
     * Passes RTP payloader's sink (i.e. not payloaded) `caps` to the header
     * extension.
     */
    setNonRtpSinkCaps(caps: Gst.Caps): boolean
    /**
     * Call this function in a subclass from #GstRTPHeaderExtensionClass::read to
     * tell the depayloader whether the data just parsed from RTP packet require
     * updating its src (non-RTP) caps. If `state` is TRUE, #GstRTPBaseDepayload will
     * eventually invoke gst_rtp_header_extension_update_non_rtp_src_caps() to
     * have the caps update applied. Applying the update also flips the internal
     * "wants update" flag back to FALSE.
     */
    setWantsUpdateNonRtpSrcCaps(state: boolean): void
    /**
     * Updates depayloader src caps based on the information received in RTP header.
     * `caps` must be writable as this function may modify them.
     */
    updateNonRtpSrcCaps(caps: Gst.Caps): boolean
    /**
     * Call this function after gst_rtp_header_extension_read() to check if
     * the depayloader's src caps need updating with data received in the last RTP
     * packet.
     */
    wantsUpdateNonRtpSrcCaps(): boolean
    /**
     * Writes the RTP header extension to `data` using information available from
     * the `input_meta`.  `data` will be sized to be at least the value returned
     * from gst_rtp_header_extension_get_max_size().
     */
    write(inputMeta: Gst.Buffer, writeFlags: RTPHeaderExtensionFlags, output: Gst.Buffer, data: Uint8Array): number
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
    abortState(): void
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
     */
    addPad(pad: Gst.Pad): boolean
    addPropertyDeepNotifyWatch(propertyName: string | null, includeValue: boolean): number
    addPropertyNotifyWatch(propertyName: string | null, includeValue: boolean): number
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
     */
    callAsync(func: Gst.ElementCallAsyncFunc): void
    /**
     * Perform `transition` on `element`.
     * 
     * This function must be called with STATE_LOCK held and is mainly used
     * internally.
     */
    changeState(transition: Gst.StateChange): Gst.StateChangeReturn
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
     */
    continueState(ret: Gst.StateChangeReturn): Gst.StateChangeReturn
    /**
     * Creates a pad for each pad template that is always available.
     * This function is only useful during object initialization of
     * subclasses of #GstElement.
     */
    createAllPads(): void
    /**
     * Call `func` with `user_data` for each of `element'`s pads. `func` will be called
     * exactly once for each pad that exists at the time of this call, unless
     * one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new pads are added or pads are removed
     * while pads are being iterated, this will not be taken into account until
     * next time this function is used.
     */
    foreachPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s sink pads. `func` will be
     * called exactly once for each sink pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new sink pads are added or sink pads
     * are removed while the sink pads are being iterated, this will not be taken
     * into account until next time this function is used.
     */
    foreachSinkPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Call `func` with `user_data` for each of `element'`s source pads. `func` will be
     * called exactly once for each source pad that exists at the time of this call,
     * unless one of the calls to `func` returns %FALSE in which case we will stop
     * iterating pads and return early. If new source pads are added or source pads
     * are removed while the source pads are being iterated, this will not be taken
     * into account until next time this function is used.
     */
    foreachSrcPad(func: Gst.ElementForeachPadFunc): boolean
    /**
     * Returns the base time of the element. The base time is the
     * absolute time of the clock when this element was last put to
     * PLAYING. Subtracting the base time from the clock time gives
     * the running time of the element.
     */
    getBaseTime(): Gst.ClockTime
    /**
     * Returns the bus of the element. Note that only a #GstPipeline will provide a
     * bus for the application.
     */
    getBus(): Gst.Bus | null
    /**
     * Gets the currently configured clock of the element. This is the clock as was
     * last set with gst_element_set_clock().
     * 
     * Elements in a pipeline will only have their clock set when the
     * pipeline is in the PLAYING state.
     */
    getClock(): Gst.Clock | null
    /**
     * Looks for an unlinked pad to which the given pad can link. It is not
     * guaranteed that linking the pads will work, though it should work in most
     * cases.
     * 
     * This function will first attempt to find a compatible unlinked ALWAYS pad,
     * and if none can be found, it will request a compatible REQUEST pad by looking
     * at the templates of `element`.
     */
    getCompatiblePad(pad: Gst.Pad, caps?: Gst.Caps | null): Gst.Pad | null
    /**
     * Retrieves a pad template from `element` that is compatible with `compattempl`.
     * Pads from compatible templates can be linked together.
     */
    getCompatiblePadTemplate(compattempl: Gst.PadTemplate): Gst.PadTemplate | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     * 
     * MT safe.
     */
    getContext(contextType: string): Gst.Context | null
    /**
     * Gets the context with `context_type` set on the element or NULL.
     */
    getContextUnlocked(contextType: string): Gst.Context | null
    /**
     * Gets the contexts set on the element.
     * 
     * MT safe.
     */
    getContexts(): Gst.Context[]
    /**
     * Returns the current clock time of the element, as in, the time of the
     * element's clock, or GST_CLOCK_TIME_NONE if there is no clock.
     */
    getCurrentClockTime(): Gst.ClockTime
    /**
     * Returns the running time of the element. The running time is the
     * element's clock time minus its base time. Will return GST_CLOCK_TIME_NONE
     * if the element has no clock, or if its base time has not been set.
     */
    getCurrentRunningTime(): Gst.ClockTime
    /**
     * Retrieves the factory that was used to create this element.
     */
    getFactory(): Gst.ElementFactory | null
    /**
     * Get metadata with `key` in `klass`.
     */
    getMetadata(key: string): string
    /**
     * Retrieves a padtemplate from `element` with the given name.
     */
    getPadTemplate(name: string): Gst.PadTemplate | null
    /**
     * Retrieves a list of the pad templates associated with `element`. The
     * list must not be modified by the calling code.
     */
    getPadTemplateList(): Gst.PadTemplate[]
    /**
     * The name of this function is confusing to people learning GStreamer.
     * gst_element_request_pad_simple() aims at making it more explicit it is
     * a simplified gst_element_request_pad().
     */
    getRequestPad(name: string): Gst.Pad | null
    /**
     * Returns the start time of the element. The start time is the
     * running time of the clock when this element was last put to PAUSED.
     * 
     * Usually the start_time is managed by a toplevel element such as
     * #GstPipeline.
     * 
     * MT safe.
     */
    getStartTime(): Gst.ClockTime
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
     */
    getState(timeout: Gst.ClockTime): [ /* returnType */ Gst.StateChangeReturn, /* state */ Gst.State | null, /* pending */ Gst.State | null ]
    /**
     * Retrieves a pad from `element` by name. This version only retrieves
     * already-existing (i.e. 'static') pads.
     */
    getStaticPad(name: string): Gst.Pad | null
    /**
     * Checks if the state of an element is locked.
     * If the state of an element is locked, state changes of the parent don't
     * affect the element.
     * This way you can leave currently unused elements inside bins. Just lock their
     * state before changing the state from #GST_STATE_NULL.
     * 
     * MT safe.
     */
    isLockedState(): boolean
    /**
     * Retrieves an iterator of `element'`s pads. The iterator should
     * be freed after usage. Also more specialized iterators exists such as
     * gst_element_iterate_src_pads() or gst_element_iterate_sink_pads().
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iteratePads(): Gst.Iterator
    /**
     * Retrieves an iterator of `element'`s sink pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterateSinkPads(): Gst.Iterator
    /**
     * Retrieves an iterator of `element'`s source pads.
     * 
     * The order of pads returned by the iterator will be the order in which
     * the pads were added to the element.
     */
    iterateSrcPads(): Gst.Iterator
    /**
     * Links `src` to `dest`. The link must be from source to
     * destination; the other direction will not be tried. The function looks for
     * existing pads that aren't linked yet. It will request new pads if necessary.
     * Such pads need to be released manually when unlinking.
     * If multiple links are possible, only one is established.
     * 
     * Make sure you have added your elements to a bin or pipeline with
     * gst_bin_add() before trying to link them.
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
     */
    linkFiltered(dest: Gst.Element, filter?: Gst.Caps | null): boolean
    /**
     * Links the two named pads of the source and destination elements.
     * Side effect is that if one of the pads has no parent, it becomes a
     * child of the parent of the other element.  If they have different
     * parents, the link fails.
     */
    linkPads(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null): boolean
    /**
     * Links the two named pads of the source and destination elements. Side effect
     * is that if one of the pads has no parent, it becomes a child of the parent of
     * the other element. If they have different parents, the link fails. If `caps`
     * is not %NULL, makes sure that the caps of the link is a subset of `caps`.
     */
    linkPadsFiltered(srcpadname: string | null, dest: Gst.Element, destpadname?: string | null, filter?: Gst.Caps | null): boolean
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
     */
    linkPadsFull(srcpadname: string | null, dest: Gst.Element, destpadname: string | null, flags: Gst.PadLinkCheck): boolean
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
    lostState(): void
    /**
     * Post an error, warning or info message on the bus from inside an element.
     * 
     * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
     * #GST_MESSAGE_INFO.
     * 
     * MT safe.
     */
    messageFull(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number): void
    /**
     * Post an error, warning or info message on the bus from inside an element.
     * 
     * `type` must be of #GST_MESSAGE_ERROR, #GST_MESSAGE_WARNING or
     * #GST_MESSAGE_INFO.
     */
    messageFullWithDetails(type: Gst.MessageType, domain: GLib.Quark, code: number, text: string | null, debug: string | null, file: string, function_: string, line: number, structure: Gst.Structure): void
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
    noMorePads(): void
    /**
     * Post a message on the element's #GstBus. This function takes ownership of the
     * message; if you want to access the message after this call, you should add an
     * additional reference before calling.
     */
    postMessage(message: Gst.Message): boolean
    /**
     * Get the clock provided by the given element.
     * > An element is only required to provide a clock in the PAUSED
     * > state. Some elements can provide a clock in other states.
     */
    provideClock(): Gst.Clock | null
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     */
    query(query: Gst.Query): boolean
    /**
     * Queries an element to convert `src_val` in `src_format` to `dest_format`.
     */
    queryConvert(srcFormat: Gst.Format, srcVal: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destVal */ number ]
    /**
     * Queries an element (usually top-level pipeline or playbin element) for the
     * total stream duration in nanoseconds. This query will only work once the
     * pipeline is prerolled (i.e. reached PAUSED or PLAYING state). The application
     * will receive an ASYNC_DONE message on the pipeline bus when that is the case.
     * 
     * If the duration changes for some reason, you will get a DURATION_CHANGED
     * message on the pipeline bus, in which case you should re-query the duration
     * using this function.
     */
    queryDuration(format: Gst.Format): [ /* returnType */ boolean, /* duration */ number | null ]
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
     */
    queryPosition(format: Gst.Format): [ /* returnType */ boolean, /* cur */ number | null ]
    /**
     * Makes the element free the previously requested pad as obtained
     * with gst_element_request_pad().
     * 
     * This does not unref the pad. If the pad was created by using
     * gst_element_request_pad(), gst_element_release_request_pad() needs to be
     * followed by gst_object_unref() to free the `pad`.
     * 
     * MT safe.
     */
    releaseRequestPad(pad: Gst.Pad): void
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
     */
    removePad(pad: Gst.Pad): boolean
    removePropertyNotifyWatch(watchId: number): void
    /**
     * Retrieves a request pad from the element according to the provided template.
     * Pad templates can be looked up using
     * gst_element_factory_get_static_pad_templates().
     * 
     * The pad should be released with gst_element_release_request_pad().
     */
    requestPad(templ: Gst.PadTemplate, name?: string | null, caps?: Gst.Caps | null): Gst.Pad | null
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
     */
    requestPadSimple(name: string): Gst.Pad | null
    /**
     * Sends a seek event to an element. See gst_event_new_seek() for the details of
     * the parameters. The seek event is sent to the element using
     * gst_element_send_event().
     * 
     * MT safe.
     */
    seek(rate: number, format: Gst.Format, flags: Gst.SeekFlags, startType: Gst.SeekType, start: number, stopType: Gst.SeekType, stop: number): boolean
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
     */
    seekSimple(format: Gst.Format, seekFlags: Gst.SeekFlags, seekPos: number): boolean
    /**
     * Sends an event to an element. If the element doesn't implement an
     * event handler, the event will be pushed on a random linked sink pad for
     * downstream events or a random linked source pad for upstream events.
     * 
     * This function takes ownership of the provided event so you should
     * gst_event_ref() it if you want to reuse the event after this call.
     * 
     * MT safe.
     */
    sendEvent(event: Gst.Event): boolean
    /**
     * Set the base time of an element. See gst_element_get_base_time().
     * 
     * MT safe.
     */
    setBaseTime(time: Gst.ClockTime): void
    /**
     * Sets the bus of the element. Increases the refcount on the bus.
     * For internal use only, unless you're testing elements.
     * 
     * MT safe.
     */
    setBus(bus?: Gst.Bus | null): void
    /**
     * Sets the clock for the element. This function increases the
     * refcount on the clock. Any previously set clock on the object
     * is unreffed.
     */
    setClock(clock?: Gst.Clock | null): boolean
    /**
     * Sets the context of the element. Increases the refcount of the context.
     * 
     * MT safe.
     */
    setContext(context: Gst.Context): void
    /**
     * Locks the state of an element, so state changes of the parent don't affect
     * this element anymore.
     * 
     * Note that this is racy if the state lock of the parent bin is not taken.
     * The parent bin might've just checked the flag in another thread and as the
     * next step proceed to change the child element's state.
     * 
     * MT safe.
     */
    setLockedState(lockedState: boolean): boolean
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
     */
    setStartTime(time: Gst.ClockTime): void
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
     */
    setState(state: Gst.State): Gst.StateChangeReturn
    /**
     * Tries to change the state of the element to the same as its parent.
     * If this function returns %FALSE, the state of element is undefined.
     */
    syncStateWithParent(): boolean
    /**
     * Unlinks all source pads of the source element with all sink pads
     * of the sink element to which they are linked.
     * 
     * If the link has been made using gst_element_link(), it could have created an
     * requestpad, which has to be released using gst_element_release_request_pad().
     */
    unlink(dest: Gst.Element): void
    /**
     * Unlinks the two named pads of the source and destination elements.
     * 
     * This is a convenience function for gst_pad_unlink().
     */
    unlinkPads(srcpadname: string, dest: Gst.Element, destpadname: string): void
    /* Methods of Gst-1.0.Gst.Object */
    /**
     * Attach the #GstControlBinding to the object. If there already was a
     * #GstControlBinding for this property it will be replaced.
     * 
     * The object's reference count will be incremented, and any floating
     * reference will be removed (see gst_object_ref_sink())
     */
    addControlBinding(binding: Gst.ControlBinding): boolean
    /**
     * A default error function that uses g_printerr() to display the error message
     * and the optional debug string..
     * 
     * The default handler will simply print the error string using g_print.
     */
    defaultError(error: GLib.Error, debug?: string | null): void
    /**
     * Gets the corresponding #GstControlBinding for the property. This should be
     * unreferenced again after use.
     */
    getControlBinding(propertyName: string): Gst.ControlBinding | null
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
    getControlRate(): Gst.ClockTime
    /**
     * Gets a number of #GValues for the given controlled property starting at the
     * requested time. The array `values` need to hold enough space for `n_values` of
     * #GValue.
     * 
     * This function is useful if one wants to e.g. draw a graph of the control
     * curve or apply a control curve sample by sample.
     */
    getGValueArray(propertyName: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    /**
     * Returns a copy of the name of `object`.
     * Caller should g_free() the return value after usage.
     * For a nameless object, this returns %NULL, which you can safely g_free()
     * as well.
     * 
     * Free-function: g_free
     */
    getName(): string | null
    /**
     * Returns the parent of `object`. This function increases the refcount
     * of the parent object so you should gst_object_unref() it after usage.
     */
    getParent(): Gst.Object | null
    /**
     * Generates a string describing the path of `object` in
     * the object hierarchy. Only useful (or used) for debugging.
     * 
     * Free-function: g_free
     */
    getPathString(): string
    /**
     * Gets the value for the given controlled property at the requested time.
     */
    getValue(propertyName: string, timestamp: Gst.ClockTime): any | null
    /**
     * Check if the `object` has active controlled properties.
     */
    hasActiveControlBindings(): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     */
    hasAncestor(ancestor: Gst.Object): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     */
    hasAsAncestor(ancestor: Gst.Object): boolean
    /**
     * Check if `parent` is the parent of `object`.
     * E.g. a #GstElement can check if it owns a given #GstPad.
     */
    hasAsParent(parent: Gst.Object): boolean
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
     */
    removeControlBinding(binding: Gst.ControlBinding): boolean
    /**
     * This function is used to disable the control bindings on a property for
     * some time, i.e. gst_object_sync_values() will do nothing for the
     * property.
     */
    setControlBindingDisabled(propertyName: string, disabled: boolean): void
    /**
     * This function is used to disable all controlled properties of the `object` for
     * some time, i.e. gst_object_sync_values() will do nothing.
     */
    setControlBindingsDisabled(disabled: boolean): void
    /**
     * Change the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * The control-rate should not change if the element is in %GST_STATE_PAUSED or
     * %GST_STATE_PLAYING.
     */
    setControlRate(controlRate: Gst.ClockTime): void
    /**
     * Sets the name of `object,` or gives `object` a guaranteed unique
     * name (if `name` is %NULL).
     * This function makes a copy of the provided name, so the caller
     * retains ownership of the name it sent.
     */
    setName(name?: string | null): boolean
    /**
     * Sets the parent of `object` to `parent`. The object's reference count will
     * be incremented, and any floating reference will be removed (see gst_object_ref_sink()).
     */
    setParent(parent: Gst.Object): boolean
    /**
     * Returns a suggestion for timestamps where buffers should be split
     * to get best controller results.
     */
    suggestNextSync(): Gst.ClockTime
    /**
     * Sets the properties of the object, according to the #GstControlSources that
     * (maybe) handle them and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     */
    syncValues(timestamp: Gst.ClockTime): boolean
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
     */
    bindProperty(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bindPropertyFull(sourceProperty: string, target: GObject.Object, targetProperty: string, flags: GObject.BindingFlags, transformTo: Function, transformFrom: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    forceFloating(): void
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
    freezeNotify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    getData(key: string): object | null
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
     */
    getProperty(propertyName: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    getQdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    isFloating(): boolean
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
     */
    notify(propertyName: string): void
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
     */
    notifyByPspec(pspec: GObject.ParamSpec): void
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
    refSink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    runDispose(): void
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
     */
    setData(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    setProperty(propertyName: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    stealData(key: string): object | null
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
     */
    stealQdata(quark: GLib.Quark): object | null
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
    thawNotify(): void
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
     */
    watchClosure(closure: Function): void
    /* Signals of Gst-1.0.Gst.Element */
    /**
     * This signals that the element will not generate more dynamic pads.
     * Note that this signal will usually be emitted from the context of
     * the streaming thread.
     */
    connect(sigName: "no-more-pads", callback: (() => void)): number
    on(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "no-more-pads", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "no-more-pads", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "no-more-pads"): void
    /**
     * a new #GstPad has been added to the element. Note that this signal will
     * usually be emitted from the context of the streaming thread. Also keep in
     * mind that if you add new elements to the pipeline in the signal handler
     * you will need to set them to the desired target state with
     * gst_element_set_state() or gst_element_sync_state_with_parent().
     */
    connect(sigName: "pad-added", callback: ((newPad: Gst.Pad) => void)): number
    on(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-added", callback: (newPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-added", callback: (newPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-added", newPad: Gst.Pad): void
    /**
     * a #GstPad has been removed from the element
     */
    connect(sigName: "pad-removed", callback: ((oldPad: Gst.Pad) => void)): number
    on(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-removed", callback: (oldPad: Gst.Pad) => void): NodeJS.EventEmitter
    emit(sigName: "pad-removed", oldPad: Gst.Pad): void
    /* Signals of Gst-1.0.Gst.Object */
    /**
     * The deep notify signal is used to be notified of property changes. It is
     * typically attached to the toplevel bin to receive notifications from all
     * the elements contained in that bin.
     */
    connect(sigName: "deep-notify", callback: ((propObject: Gst.Object, prop: GObject.ParamSpec) => void)): number
    on(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deep-notify", callback: (propObject: Gst.Object, prop: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "deep-notify", propObject: Gst.Object, prop: GObject.ParamSpec): void
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
     */
    connect(sigName: "notify", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify", callback: (pspec: GObject.ParamSpec) => void): NodeJS.EventEmitter
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: RTPHeaderExtension_ConstructProps)
    _init (config?: RTPHeaderExtension_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static createFromUri(uri: string): RTPHeaderExtension | null
    /**
     * Set the URI for this RTP header extension implementation.
     */
    static setUri(klass: RTPHeaderExtension | Function | GObject.Type, uri: string): void
    static $gtype: GObject.Type
}
class RTCPBuffer {
    /* Fields of GstRtp-1.0.GstRtp.RTCPBuffer */
    readonly buffer: Gst.Buffer
    readonly map: Gst.MapInfo
    /* Methods of GstRtp-1.0.GstRtp.RTCPBuffer */
    /**
     * Add a new packet of `type` to `rtcp`. `packet` will point to the newly created
     * packet.
     */
    addPacket(type: RTCPType, packet: RTCPPacket): boolean
    /**
     * Initialize a new #GstRTCPPacket pointer that points to the first packet in
     * `rtcp`.
     */
    getFirstPacket(packet: RTCPPacket): boolean
    /**
     * Get the number of RTCP packets in `rtcp`.
     */
    getPacketCount(): number
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
     */
    static map(buffer: Gst.Buffer, flags: Gst.MapFlags, rtcp: RTCPBuffer): boolean
    /**
     * Create a new buffer and set the data to a copy of `len`
     * bytes of `data` and the size to `len`. The data will be freed when the buffer
     * is freed.
     */
    static newCopyData(data: Uint8Array): Gst.Buffer
    /**
     * Create a new buffer and set the data and size of the buffer to `data` and `len`
     * respectively. `data` will be freed when the buffer is unreffed, so this
     * function transfers ownership of `data` to the new buffer.
     */
    static newTakeData(data: Uint8Array): Gst.Buffer
    /**
     * Check if the data pointed to by `buffer` is a valid RTCP packet using
     * gst_rtcp_buffer_validate_data().
     */
    static validate(buffer: Gst.Buffer): boolean
    /**
     * Check if the `data` and `size` point to the data of a valid compound,
     * non-reduced size RTCP packet.
     * Use this function to validate a packet before using the other functions in
     * this module.
     */
    static validateData(data: Uint8Array): boolean
    /**
     * Check if the `data` and `size` point to the data of a valid RTCP packet.
     * Use this function to validate a packet before using the other functions in
     * this module.
     * 
     * This function is updated to support reduced size rtcp packets according to
     * RFC 5506 and will validate full compound RTCP packets as well as reduced
     * size RTCP packets.
     */
    static validateDataReduced(data: Uint8Array): boolean
    /**
     * Check if the data pointed to by `buffer` is a valid RTCP packet using
     * gst_rtcp_buffer_validate_reduced().
     */
    static validateReduced(buffer: Gst.Buffer): boolean
}
class RTCPPacket {
    /* Fields of GstRtp-1.0.GstRtp.RTCPPacket */
    /**
     * pointer to RTCP buffer
     */
    readonly rtcp: RTCPBuffer
    /**
     * offset of packet in buffer data
     */
    readonly offset: number
    /* Methods of GstRtp-1.0.GstRtp.RTCPPacket */
    /**
     * Add profile-specific extension `data` to `packet`. If `packet` already
     * contains profile-specific extension `data` will be appended to the existing
     * extension.
     */
    addProfileSpecificExt(data: Uint8Array): boolean
    /**
     * Add a new report block to `packet` with the given values.
     */
    addRb(ssrc: number, fractionlost: number, packetslost: number, exthighestseq: number, jitter: number, lsr: number, dlsr: number): boolean
    /**
     * Get the application-dependent data attached to a RTPFB or PSFB `packet`.
     */
    appGetData(): number
    /**
     * Get the length of the application-dependent data attached to an APP
     * `packet`.
     */
    appGetDataLength(): number
    /**
     * Get the name field of the APP `packet`.
     */
    appGetName(): string
    /**
     * Get the SSRC/CSRC field of the APP `packet`.
     */
    appGetSsrc(): number
    /**
     * Get the subtype field of the APP `packet`.
     */
    appGetSubtype(): number
    /**
     * Set the length of the application-dependent data attached to an APP
     * `packet`.
     */
    appSetDataLength(wordlen: number): boolean
    /**
     * Set the name field of the APP `packet`.
     */
    appSetName(name: string): void
    /**
     * Set the SSRC/CSRC field of the APP `packet`.
     */
    appSetSsrc(ssrc: number): void
    /**
     * Set the subtype field of the APP `packet`.
     */
    appSetSubtype(subtype: number): void
    /**
     * Add `ssrc` to the BYE `packet`.
     */
    byeAddSsrc(ssrc: number): boolean
    /**
     * Adds `len` SSRCs in `ssrc` to BYE `packet`.
     */
    byeAddSsrcs(ssrc: number[]): boolean
    /**
     * Get the `nth` SSRC of the BYE `packet`.
     */
    byeGetNthSsrc(nth: number): number
    /**
     * Get the reason in `packet`.
     */
    byeGetReason(): string
    /**
     * Get the length of the reason string.
     */
    byeGetReasonLen(): number
    /**
     * Get the number of SSRC fields in `packet`.
     */
    byeGetSsrcCount(): number
    /**
     * Set the reason string to `reason` in `packet`.
     */
    byeSetReason(reason: string): boolean
    /**
     * The profile-specific extension data is copied into a new allocated
     * memory area `data`. This must be freed with g_free() after usage.
     */
    copyProfileSpecificExt(): [ /* returnType */ boolean, /* data */ Uint8Array ]
    /**
     * Get the Feedback Control Information attached to a RTPFB or PSFB `packet`.
     */
    fbGetFci(): number
    /**
     * Get the length of the Feedback Control Information attached to a
     * RTPFB or PSFB `packet`.
     */
    fbGetFciLength(): number
    /**
     * Get the media SSRC field of the RTPFB or PSFB `packet`.
     */
    fbGetMediaSsrc(): number
    /**
     * Get the sender SSRC field of the RTPFB or PSFB `packet`.
     */
    fbGetSenderSsrc(): number
    /**
     * Get the feedback message type of the FB `packet`.
     */
    fbGetType(): RTCPFBType
    /**
     * Set the length of the Feedback Control Information attached to a
     * RTPFB or PSFB `packet`.
     */
    fbSetFciLength(wordlen: number): boolean
    /**
     * Set the media SSRC field of the RTPFB or PSFB `packet`.
     */
    fbSetMediaSsrc(ssrc: number): void
    /**
     * Set the sender SSRC field of the RTPFB or PSFB `packet`.
     */
    fbSetSenderSsrc(ssrc: number): void
    /**
     * Set the feedback message type of the FB `packet`.
     */
    fbSetType(type: RTCPFBType): void
    /**
     * Get the count field in `packet`.
     */
    getCount(): number
    /**
     * Get the length field of `packet`. This is the length of the packet in
     * 32-bit words minus one.
     */
    getLength(): number
    /**
     * Get the packet padding of the packet pointed to by `packet`.
     */
    getPadding(): boolean
    getProfileSpecificExt(): [ /* returnType */ boolean, /* data */ Uint8Array ]
    getProfileSpecificExtLength(): number
    /**
     * Parse the values of the `nth` report block in `packet` and store the result in
     * the values.
     */
    getRb(nth: number): [ /* ssrc */ number, /* fractionlost */ number, /* packetslost */ number, /* exthighestseq */ number, /* jitter */ number, /* lsr */ number, /* dlsr */ number ]
    /**
     * Get the number of report blocks in `packet`.
     */
    getRbCount(): number
    /**
     * Get the packet type of the packet pointed to by `packet`.
     */
    getType(): RTCPType
    /**
     * Move the packet pointer `packet` to the next packet in the payload.
     * Use gst_rtcp_buffer_get_first_packet() to initialize `packet`.
     */
    moveToNext(): boolean
    /**
     * Removes the packet pointed to by `packet` and moves pointer to the next one
     */
    remove(): boolean
    /**
     * Get the ssrc field of the RR `packet`.
     */
    rrGetSsrc(): number
    /**
     * Set the ssrc field of the RR `packet`.
     */
    rrSetSsrc(ssrc: number): void
    /**
     * Add a new SDES entry to the current item in `packet`.
     */
    sdesAddEntry(type: RTCPSDESType, data: Uint8Array): boolean
    /**
     * Add a new SDES item for `ssrc` to `packet`.
     */
    sdesAddItem(ssrc: number): boolean
    /**
     * This function is like gst_rtcp_packet_sdes_get_entry() but it returns a
     * null-terminated copy of the data instead. use g_free() after usage.
     */
    sdesCopyEntry(type: RTCPSDESType): [ /* returnType */ boolean, /* data */ Uint8Array ]
    /**
     * Move to the first SDES entry in the current item.
     */
    sdesFirstEntry(): boolean
    /**
     * Move to the first SDES item in `packet`.
     */
    sdesFirstItem(): boolean
    /**
     * Get the data of the current SDES item entry. `type` (when not NULL) will
     * contain the type of the entry. `data` (when not NULL) will point to `len`
     * bytes.
     * 
     * When `type` refers to a text item, `data` will point to a UTF8 string. Note
     * that this UTF8 string is NOT null-terminated. Use
     * gst_rtcp_packet_sdes_copy_entry() to get a null-terminated copy of the entry.
     */
    sdesGetEntry(type: RTCPSDESType): [ /* returnType */ boolean, /* data */ Uint8Array ]
    /**
     * Get the number of items in the SDES packet `packet`.
     */
    sdesGetItemCount(): number
    /**
     * Get the SSRC of the current SDES item.
     */
    sdesGetSsrc(): number
    /**
     * Move to the next SDES entry in the current item.
     */
    sdesNextEntry(): boolean
    /**
     * Move to the next SDES item in `packet`.
     */
    sdesNextItem(): boolean
    /**
     * Set the `nth` new report block in `packet` with the given values.
     * 
     * Note: Not implemented.
     */
    setRb(nth: number, ssrc: number, fractionlost: number, packetslost: number, exthighestseq: number, jitter: number, lsr: number, dlsr: number): void
    /**
     * Parse the SR sender info and store the values.
     */
    srGetSenderInfo(): [ /* ssrc */ number, /* ntptime */ number, /* rtptime */ number, /* packetCount */ number, /* octetCount */ number ]
    /**
     * Set the given values in the SR packet `packet`.
     */
    srSetSenderInfo(ssrc: number, ntptime: number, rtptime: number, packetCount: number, octetCount: number): void
    /**
     * Move to the first extended report block in XR `packet`.
     */
    xrFirstRb(): boolean
    xrGetBlockLength(): number
    /**
     * Get the extended report block type of the XR `packet`.
     */
    xrGetBlockType(): RTCPXRType
    /**
     * Parse the extended report block for DLRR report block type.
     */
    xrGetDlrrBlock(nth: number, ssrc: number, lastRr: number, delay: number): boolean
    /**
     * Retrieve the packet receipt time of `seq` which ranges in [begin_seq, end_seq).
     */
    xrGetPrtBySeq(seq: number, receiptTime: number): boolean
    /**
     * Parse the Packet Recept Times Report Block from a XR `packet`
     */
    xrGetPrtInfo(ssrc: number, thinning: number, beginSeq: number, endSeq: number): boolean
    /**
     * Parse the extended report block for Loss RLE and Duplicated LRE block type.
     */
    xrGetRleInfo(ssrc: number, thinning: number, beginSeq: number, endSeq: number, chunkCount: number): boolean
    /**
     * Retrieve actual chunk data.
     */
    xrGetRleNthChunk(nth: number, chunk: number): boolean
    xrGetRrt(timestamp: number): boolean
    /**
     * Get the ssrc field of the XR `packet`.
     */
    xrGetSsrc(): number
    /**
     * Extract a basic information from static summary report block of XR `packet`.
     */
    xrGetSummaryInfo(ssrc: number, beginSeq: number, endSeq: number): boolean
    /**
     * Extract jitter information from the statistics summary. If the jitter flag in
     * a block header is set as zero, all of jitters will be zero.
     */
    xrGetSummaryJitter(minJitter: number, maxJitter: number, meanJitter: number, devJitter: number): boolean
    /**
     * Get the number of lost or duplicate packets. If the flag in a block header
     * is set as zero, `lost_packets` or `dup_packets` will be zero.
     */
    xrGetSummaryPkt(lostPackets: number, dupPackets: number): boolean
    /**
     * Extract the value of ttl for ipv4, or hop limit for ipv6.
     */
    xrGetSummaryTtl(isIpv4: boolean, minTtl: number, maxTtl: number, meanTtl: number, devTtl: number): boolean
    xrGetVoipBurstMetrics(burstDensity: number, gapDensity: number, burstDuration: number, gapDuration: number): boolean
    xrGetVoipConfigurationParams(gmin: number, rxConfig: number): boolean
    xrGetVoipDelayMetrics(roundtripDelay: number, endSystemDelay: number): boolean
    xrGetVoipJitterBufferParams(jbNominal: number, jbMaximum: number, jbAbsMax: number): boolean
    xrGetVoipMetricsSsrc(ssrc: number): boolean
    xrGetVoipPacketMetrics(lossRate: number, discardRate: number): boolean
    xrGetVoipQualityMetrics(rFactor: number, extRFactor: number, mosLq: number, mosCq: number): boolean
    xrGetVoipSignalMetrics(signalLevel: number, noiseLevel: number, rerl: number, gmin: number): boolean
    /**
     * Move to the next extended report block in XR `packet`.
     */
    xrNextRb(): boolean
    static name: string
}
abstract class RTPBaseAudioPayloadClass {
    /* Fields of GstRtp-1.0.GstRtp.RTPBaseAudioPayloadClass */
    /**
     * the parent class
     */
    readonly parentClass: RTPBasePayloadClass
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
    readonly parentClass: Gst.ElementClass
    readonly setCaps: (filter: RTPBaseDepayload, caps: Gst.Caps) => boolean
    readonly process: (base: RTPBaseDepayload, in_: Gst.Buffer) => Gst.Buffer
    readonly packetLost: (filter: RTPBaseDepayload, event: Gst.Event) => boolean
    readonly handleEvent: (filter: RTPBaseDepayload, event: Gst.Event) => boolean
    readonly processRtpPacket: (base: RTPBaseDepayload, rtpBuffer: RTPBuffer) => Gst.Buffer
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
    readonly parentClass: Gst.ElementClass
    readonly getCaps: (payload: RTPBasePayload, pad: Gst.Pad, filter: Gst.Caps) => Gst.Caps
    readonly setCaps: (payload: RTPBasePayload, caps: Gst.Caps) => boolean
    readonly handleBuffer: (payload: RTPBasePayload, buffer: Gst.Buffer) => Gst.FlowReturn
    readonly sinkEvent: (payload: RTPBasePayload, event: Gst.Event) => boolean
    readonly srcEvent: (payload: RTPBasePayload, event: Gst.Event) => boolean
    readonly query: (payload: RTPBasePayload, pad: Gst.Pad, query: Gst.Query) => boolean
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
    readonly buffer: Gst.Buffer
    /**
     * internal state
     */
    readonly state: number
    /**
     * array of data
     */
    readonly data: object[]
    /**
     * array of size
     */
    readonly size: number[]
    /**
     * array of #GstMapInfo
     */
    readonly map: Gst.MapInfo[]
    /* Methods of GstRtp-1.0.GstRtp.RTPBuffer */
    /**
     * Adds a RFC 5285 header extension with a one byte header to the end of the
     * RTP header. If there is already a RFC 5285 header extension with a one byte
     * header, the new extension will be appended.
     * It will not work if there is already a header extension that does not follow
     * the mechanism described in RFC 5285 or if there is a header extension with
     * a two bytes header as described in RFC 5285. In that case, use
     * gst_rtp_buffer_add_extension_twobytes_header()
     */
    addExtensionOnebyteHeader(id: number, data: Uint8Array): boolean
    /**
     * Adds a RFC 5285 header extension with a two bytes header to the end of the
     * RTP header. If there is already a RFC 5285 header extension with a two bytes
     * header, the new extension will be appended.
     * It will not work if there is already a header extension that does not follow
     * the mechanism described in RFC 5285 or if there is a header extension with
     * a one byte header as described in RFC 5285. In that case, use
     * gst_rtp_buffer_add_extension_onebyte_header()
     */
    addExtensionTwobytesHeader(appbits: number, id: number, data: Uint8Array): boolean
    /**
     * Get the CSRC at index `idx` in `buffer`.
     */
    getCsrc(idx: number): number
    /**
     * Get the CSRC count of the RTP packet in `buffer`.
     */
    getCsrcCount(): number
    /**
     * Check if the extension bit is set on the RTP packet in `buffer`.
     */
    getExtension(): boolean
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
    getExtensionData(): [ /* returnType */ any, /* bits */ number ]
    /**
     * Parses RFC 5285 style header extensions with a one byte header. It will
     * return the nth extension with the requested id.
     */
    getExtensionOnebyteHeader(id: number, nth: number): [ /* returnType */ boolean, /* data */ Uint8Array ]
    /**
     * Parses RFC 5285 style header extensions with a two bytes header. It will
     * return the nth extension with the requested id.
     */
    getExtensionTwobytesHeader(id: number, nth: number): [ /* returnType */ boolean, /* appbits */ number, /* data */ Uint8Array ]
    /**
     * Return the total length of the header in `buffer`. This include the length of
     * the fixed header, the CSRC list and the extension header.
     */
    getHeaderLen(): number
    /**
     * Check if the marker bit is set on the RTP packet in `buffer`.
     */
    getMarker(): boolean
    /**
     * Return the total length of the packet in `buffer`.
     */
    getPacketLen(): number
    /**
     * Check if the padding bit is set on the RTP packet in `buffer`.
     */
    getPadding(): boolean
    /**
     * Create a buffer of the payload of the RTP packet in `buffer`. This function
     * will internally create a subbuffer of `buffer` so that a memcpy can be
     * avoided.
     */
    getPayloadBuffer(): Gst.Buffer
    /**
     * Similar to gst_rtp_buffer_get_payload, but more suitable for language
     * bindings usage. The return value is a pointer to a #GBytes structure
     * containing the payload data in `rtp`.
     */
    getPayload(): any
    /**
     * Get the length of the payload of the RTP packet in `buffer`.
     */
    getPayloadLen(): number
    /**
     * Create a subbuffer of the payload of the RTP packet in `buffer`. `offset` bytes
     * are skipped in the payload and the subbuffer will be of size `len`.
     * If `len` is -1 the total payload starting from `offset` is subbuffered.
     */
    getPayloadSubbuffer(offset: number, len: number): Gst.Buffer
    /**
     * Get the payload type of the RTP packet in `buffer`.
     */
    getPayloadType(): number
    /**
     * Get the sequence number of the RTP packet in `buffer`.
     */
    getSeq(): number
    /**
     * Get the SSRC of the RTP packet in `buffer`.
     */
    getSsrc(): number
    /**
     * Get the timestamp of the RTP packet in `buffer`.
     */
    getTimestamp(): number
    /**
     * Get the version number of the RTP packet in `buffer`.
     */
    getVersion(): number
    /**
     * Set the amount of padding in the RTP packet in `buffer` to
     * `len`. If `len` is 0, the padding is removed.
     * 
     * NOTE: This function does not work correctly.
     */
    padTo(len: number): void
    /**
     * Unsets the extension bit of the RTP buffer and removes the extension header
     * and data.
     * 
     * If the RTP buffer has no header extension data, the action has no effect.
     * The RTP buffer must be mapped READWRITE only once and the underlying
     * GstBuffer must be writable.
     */
    removeExtensionData(): void
    /**
     * Modify the CSRC at index `idx` in `buffer` to `csrc`.
     */
    setCsrc(idx: number, csrc: number): void
    /**
     * Set the extension bit on the RTP packet in `buffer` to `extension`.
     */
    setExtension(extension: boolean): void
    /**
     * Set the extension bit of the rtp buffer and fill in the `bits` and `length` of the
     * extension header. If the existing extension data is not large enough, it will
     * be made larger.
     * 
     * Will also shorten the extension data from 1.20.
     */
    setExtensionData(bits: number, length: number): boolean
    /**
     * Set the marker bit on the RTP packet in `buffer` to `marker`.
     */
    setMarker(marker: boolean): void
    /**
     * Set the total `rtp` size to `len`. The data in the buffer will be made
     * larger if needed. Any padding will be removed from the packet.
     */
    setPacketLen(len: number): void
    /**
     * Set the padding bit on the RTP packet in `buffer` to `padding`.
     */
    setPadding(padding: boolean): void
    /**
     * Set the payload type of the RTP packet in `buffer` to `payload_type`.
     */
    setPayloadType(payloadType: number): void
    /**
     * Set the sequence number of the RTP packet in `buffer` to `seq`.
     */
    setSeq(seq: number): void
    /**
     * Set the SSRC on the RTP packet in `buffer` to `ssrc`.
     */
    setSsrc(ssrc: number): void
    /**
     * Set the timestamp of the RTP packet in `buffer` to `timestamp`.
     */
    setTimestamp(timestamp: number): void
    /**
     * Set the version of the RTP packet in `buffer` to `version`.
     */
    setVersion(version: number): void
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
     */
    static allocateData(buffer: Gst.Buffer, payloadLen: number, padLen: number, csrcCount: number): void
    /**
     * Calculate the header length of an RTP packet with `csrc_count` CSRC entries.
     * An RTP packet can have at most 15 CSRC entries.
     */
    static calcHeaderLen(csrcCount: number): number
    /**
     * Calculate the total length of an RTP packet with a payload size of `payload_len,`
     * a padding of `pad_len` and a `csrc_count` CSRC entries.
     */
    static calcPacketLen(payloadLen: number, padLen: number, csrcCount: number): number
    /**
     * Calculate the length of the payload of an RTP packet with size `packet_len,`
     * a padding of `pad_len` and a `csrc_count` CSRC entries.
     */
    static calcPayloadLen(packetLen: number, padLen: number, csrcCount: number): number
    /**
     * Compare two sequence numbers, taking care of wraparounds. This function
     * returns the difference between `seqnum1` and `seqnum2`.
     */
    static compareSeqnum(seqnum1: number, seqnum2: number): number
    /**
     * Get the default clock-rate for the static payload type `payload_type`.
     */
    static defaultClockRate(payloadType: number): number
    /**
     * Update the `exttimestamp` field with the extended timestamp of `timestamp`
     * For the first call of the method, `exttimestamp` should point to a location
     * with a value of -1.
     * 
     * This function is able to handle both forward and backward timestamps taking
     * into account:
     *   - timestamp wraparound making sure that the returned value is properly increased.
     *   - timestamp unwraparound making sure that the returned value is properly decreased.
     */
    static extTimestamp(exttimestamp: number, timestamp: number): [ /* returnType */ number, /* exttimestamp */ number ]
    /**
     * Similar to gst_rtp_buffer_get_extension_onebyte_header, but working
     * on the #GBytes you get from gst_rtp_buffer_get_extension_bytes.
     * Parses RFC 5285 style header extensions with a one byte header. It will
     * return the nth extension with the requested id.
     */
    static getExtensionOnebyteHeaderFromBytes(bytes: any, bitPattern: number, id: number, nth: number): [ /* returnType */ boolean, /* data */ Uint8Array ]
    /**
     * Map the contents of `buffer` into `rtp`.
     */
    static map(buffer: Gst.Buffer, flags: Gst.MapFlags): [ /* returnType */ boolean, /* rtp */ RTPBuffer ]
    /**
     * Allocate a new #GstBuffer with enough data to hold an RTP packet with
     * `csrc_count` CSRCs, a payload length of `payload_len` and padding of `pad_len`.
     * All other RTP header fields will be set to 0/FALSE.
     */
    static newAllocate(payloadLen: number, padLen: number, csrcCount: number): Gst.Buffer
    /**
     * Create a new #GstBuffer that can hold an RTP packet that is exactly
     * `packet_len` long. The length of the payload depends on `pad_len` and
     * `csrc_count` and can be calculated with gst_rtp_buffer_calc_payload_len().
     * All RTP header fields will be set to 0/FALSE.
     */
    static newAllocateLen(packetLen: number, padLen: number, csrcCount: number): Gst.Buffer
    /**
     * Create a new buffer and set the data to a copy of `len`
     * bytes of `data` and the size to `len`. The data will be freed when the buffer
     * is freed.
     */
    static newCopyData(data: Uint8Array): Gst.Buffer
    /**
     * Create a new buffer and set the data and size of the buffer to `data` and `len`
     * respectively. `data` will be freed when the buffer is unreffed, so this
     * function transfers ownership of `data` to the new buffer.
     */
    static newTakeData(data: Uint8Array): Gst.Buffer
}
abstract class RTPHeaderExtensionClass {
    /* Fields of GstRtp-1.0.GstRtp.RTPHeaderExtensionClass */
    /**
     * the parent class
     */
    readonly parentClass: Gst.ElementClass
    readonly getSupportedFlags: (ext: RTPHeaderExtension) => RTPHeaderExtensionFlags
    readonly getMaxSize: (ext: RTPHeaderExtension, inputMeta: Gst.Buffer) => number
    readonly write: (ext: RTPHeaderExtension, inputMeta: Gst.Buffer, writeFlags: RTPHeaderExtensionFlags, output: Gst.Buffer, data: Uint8Array) => number
    readonly read: (ext: RTPHeaderExtension, readFlags: RTPHeaderExtensionFlags, data: Uint8Array, buffer: Gst.Buffer) => boolean
    readonly setNonRtpSinkCaps: (ext: RTPHeaderExtension, caps: Gst.Caps) => boolean
    readonly updateNonRtpSrcCaps: (ext: RTPHeaderExtension, caps: Gst.Caps) => boolean
    readonly setAttributes: (ext: RTPHeaderExtension, direction: RTPHeaderExtensionDirection, attributes: string) => boolean
    readonly setCapsFromAttributes: (ext: RTPHeaderExtension, caps: Gst.Caps) => boolean
    /* Methods of GstRtp-1.0.GstRtp.RTPHeaderExtensionClass */
    /**
     * Set the URI for this RTP header extension implementation.
     */
    static setUri(klass: RTPHeaderExtension | Function | GObject.Type, uri: string): void
    static name: string
}
class RTPPayloadInfo {
    /* Fields of GstRtp-1.0.GstRtp.RTPPayloadInfo */
    /**
     * payload type, -1 means dynamic
     */
    readonly payloadType: number
    /**
     * the media type(s), usually "audio", "video", "application", "text",
     * "message".
     */
    readonly media: string
    /**
     * the encoding name of `pt`
     */
    readonly encodingName: string
    /**
     * default clock rate, 0 = unknown/variable
     */
    readonly clockRate: number
    /**
     * encoding parameters. For audio this is the number of
     * channels. NULL = not applicable.
     */
    readonly encodingParameters: string
    /**
     * the bitrate of the media. 0 = unknown/variable.
     */
    readonly bitrate: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Get the #GstRTPPayloadInfo for `media` and `encoding_name`. This function is
     * mostly used to get the default clock-rate and bandwidth for dynamic payload
     * types specified with `media` and `encoding` name.
     * 
     * The search for `encoding_name` will be performed in a case insensitive way.
     */
    static forName(media: string, encodingName: string): RTPPayloadInfo
    /**
     * Get the #GstRTPPayloadInfo for `payload_type`. This function is
     * mostly used to get the default clock-rate and bandwidth for static payload
     * types specified with `payload_type`.
     */
    static forPt(payloadType: number): RTPPayloadInfo
}
class RTPSourceMeta {
    /* Fields of GstRtp-1.0.GstRtp.RTPSourceMeta */
    /**
     * parent #GstMeta
     */
    readonly meta: Gst.Meta
    /**
     * the SSRC
     */
    readonly ssrc: number
    /**
     * whether `ssrc` is set and valid
     */
    readonly ssrcValid: boolean
    /**
     * pointer to the CSRCs
     */
    readonly csrc: number[]
    /**
     * number of elements in `csrc`
     */
    readonly csrcCount: number
    /* Methods of GstRtp-1.0.GstRtp.RTPSourceMeta */
    /**
     * Appends `csrc` to the list of contributing sources in `meta`.
     */
    appendCsrc(csrc: number, csrcCount: number): boolean
    /**
     * Count the total number of RTP sources found in `meta,` both SSRC and CSRC.
     */
    getSourceCount(): number
    /**
     * Sets `ssrc` in `meta`. If `ssrc` is %NULL the ssrc of `meta` will be unset.
     */
    setSsrc(ssrc?: number | null): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    static getInfo(): Gst.MetaInfo
}
}
export default GstRtp;