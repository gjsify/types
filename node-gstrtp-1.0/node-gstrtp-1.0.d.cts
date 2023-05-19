
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gstrtp-1.0-import.d.ts';
    
/**
 * GstRtp-1.0
 */

import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

/**
 * Different types of feedback messages.
 */
export enum RTCPFBType {
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
export enum RTCPSDESType {
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
export enum RTCPType {
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
export enum RTCPXRType {
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
export enum RTPPayload {
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
export enum RTPProfile {
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
 * @bitfield 
 */
export enum RTPBufferFlags {
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
 * @bitfield 
 */
export enum RTPBufferMapFlags {
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
 * @bitfield 
 */
export enum RTPHeaderExtensionDirection {
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
 * @bitfield 
 */
export enum RTPHeaderExtensionFlags {
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
export const RTCP_MAX_BYE_SSRC_COUNT: number
/**
 * The maximum amount of Receiver report blocks in RR and SR messages.
 */
export const RTCP_MAX_RB_COUNT: number
/**
 * The maximum text length for an SDES item.
 */
export const RTCP_MAX_SDES: number
/**
 * The maximum amount of SDES items.
 */
export const RTCP_MAX_SDES_ITEM_COUNT: number
/**
 * Mask for version and packet type pair allowing reduced size
 * packets, basically it accepts other types than RR and SR
 */
export const RTCP_REDUCED_SIZE_VALID_MASK: number
/**
 * Mask for version, padding bit and packet type pair
 */
export const RTCP_VALID_MASK: number
/**
 * Valid value for the first two bytes of an RTCP packet after applying
 * #GST_RTCP_VALID_MASK to them.
 */
export const RTCP_VALID_VALUE: number
/**
 * The supported RTCP version 2.
 */
export const RTCP_VERSION: number
export const RTP_HDREXT_BASE: string | null
/**
 * Constant string used in element classification to signal that this element
 * is a RTP header extension.
 */
export const RTP_HDREXT_ELEMENT_CLASS: string | null
export const RTP_HDREXT_NTP_56: string | null
export const RTP_HDREXT_NTP_56_SIZE: number
export const RTP_HDREXT_NTP_64: string | null
export const RTP_HDREXT_NTP_64_SIZE: number
export const RTP_HEADER_EXTENSION_URI_METADATA_KEY: string | null
export const RTP_PAYLOAD_1016_STRING: string | null
export const RTP_PAYLOAD_CELLB_STRING: string | null
export const RTP_PAYLOAD_CN_STRING: string | null
export const RTP_PAYLOAD_DVI4_11025_STRING: string | null
export const RTP_PAYLOAD_DVI4_16000_STRING: string | null
export const RTP_PAYLOAD_DVI4_22050_STRING: string | null
export const RTP_PAYLOAD_DVI4_8000_STRING: string | null
export const RTP_PAYLOAD_DYNAMIC_STRING: string | null
export const RTP_PAYLOAD_G721_STRING: string | null
export const RTP_PAYLOAD_G722_STRING: string | null
export const RTP_PAYLOAD_G723_53: number
export const RTP_PAYLOAD_G723_53_STRING: string | null
export const RTP_PAYLOAD_G723_63: number
export const RTP_PAYLOAD_G723_63_STRING: string | null
export const RTP_PAYLOAD_G723_STRING: string | null
export const RTP_PAYLOAD_G728_STRING: string | null
export const RTP_PAYLOAD_G729_STRING: string | null
export const RTP_PAYLOAD_GSM_STRING: string | null
export const RTP_PAYLOAD_H261_STRING: string | null
export const RTP_PAYLOAD_H263_STRING: string | null
export const RTP_PAYLOAD_JPEG_STRING: string | null
export const RTP_PAYLOAD_L16_MONO_STRING: string | null
export const RTP_PAYLOAD_L16_STEREO_STRING: string | null
export const RTP_PAYLOAD_LPC_STRING: string | null
export const RTP_PAYLOAD_MP2T_STRING: string | null
export const RTP_PAYLOAD_MPA_STRING: string | null
export const RTP_PAYLOAD_MPV_STRING: string | null
export const RTP_PAYLOAD_NV_STRING: string | null
export const RTP_PAYLOAD_PCMA_STRING: string | null
export const RTP_PAYLOAD_PCMU_STRING: string | null
export const RTP_PAYLOAD_QCELP_STRING: string | null
export const RTP_PAYLOAD_TS41: number
export const RTP_PAYLOAD_TS41_STRING: string | null
export const RTP_PAYLOAD_TS48: number
export const RTP_PAYLOAD_TS48_STRING: string | null
export const RTP_SOURCE_META_MAX_CSRC_COUNT: number
/**
 * The supported RTP version 2.
 */
export const RTP_VERSION: number
/**
 * Attaches RTP source information to `buffer`.
 * @param buffer a #GstBuffer
 * @param ssrc pointer to the SSRC
 * @param csrc pointer to the CSRCs
 * @returns the #GstRTPSourceMeta on @buffer.
 */
export function bufferAddRtpSourceMeta(buffer: Gst.Buffer, ssrc: number | null, csrc: number[] | null): RTPSourceMeta
/**
 * Find the #GstRTPSourceMeta on `buffer`.
 * @param buffer a #GstBuffer
 * @returns the #GstRTPSourceMeta or %NULL when there is no such metadata on @buffer.
 */
export function bufferGetRtpSourceMeta(buffer: Gst.Buffer): RTPSourceMeta | null
/**
 * Open `buffer` for reading or writing, depending on `flags`. The resulting RTCP
 * buffer state is stored in `rtcp`.
 * @param buffer a buffer with an RTCP packet
 * @param flags flags for the mapping
 * @param rtcp resulting #GstRTCPBuffer
 */
export function rtcpBufferMap(buffer: Gst.Buffer, flags: Gst.MapFlags, rtcp: RTCPBuffer): boolean
/**
 * Create a new buffer for constructing RTCP packets. The packet will have a
 * maximum size of `mtu`.
 * @param mtu the maximum mtu size.
 * @returns A newly allocated buffer.
 */
export function rtcpBufferNew(mtu: number): Gst.Buffer
/**
 * Create a new buffer and set the data to a copy of `len`
 * bytes of `data` and the size to `len`. The data will be freed when the buffer
 * is freed.
 * @param data data for the new buffer
 * @returns A newly allocated buffer with a copy of @data and of size @len.
 */
export function rtcpBufferNewCopyData(data: Uint8Array): Gst.Buffer
/**
 * Create a new buffer and set the data and size of the buffer to `data` and `len`
 * respectively. `data` will be freed when the buffer is unreffed, so this
 * function transfers ownership of `data` to the new buffer.
 * @param data data for the new buffer
 * @returns A newly allocated buffer with @data and of size @len.
 */
export function rtcpBufferNewTakeData(data: Uint8Array): Gst.Buffer
/**
 * Check if the data pointed to by `buffer` is a valid RTCP packet using
 * gst_rtcp_buffer_validate_data().
 * @param buffer the buffer to validate
 * @returns TRUE if @buffer is a valid RTCP packet.
 */
export function rtcpBufferValidate(buffer: Gst.Buffer): boolean
/**
 * Check if the `data` and `size` point to the data of a valid compound,
 * non-reduced size RTCP packet.
 * Use this function to validate a packet before using the other functions in
 * this module.
 * @param data the data to validate
 * @returns TRUE if the data points to a valid RTCP packet.
 */
export function rtcpBufferValidateData(data: Uint8Array): boolean
/**
 * Check if the `data` and `size` point to the data of a valid RTCP packet.
 * Use this function to validate a packet before using the other functions in
 * this module.
 * 
 * This function is updated to support reduced size rtcp packets according to
 * RFC 5506 and will validate full compound RTCP packets as well as reduced
 * size RTCP packets.
 * @param data the data to validate
 * @returns TRUE if the data points to a valid RTCP packet.
 */
export function rtcpBufferValidateDataReduced(data: Uint8Array): boolean
/**
 * Check if the data pointed to by `buffer` is a valid RTCP packet using
 * gst_rtcp_buffer_validate_reduced().
 * @param buffer the buffer to validate
 * @returns TRUE if @buffer is a valid RTCP packet.
 */
export function rtcpBufferValidateReduced(buffer: Gst.Buffer): boolean
/**
 * Converts an NTP time to UNIX nanoseconds. `ntptime` can typically be
 * the NTP time of an SR RTCP message and contains, in the upper 32 bits, the
 * number of seconds since 1900 and, in the lower 32 bits, the fractional
 * seconds. The resulting value will be the number of nanoseconds since 1970.
 * @param ntptime an NTP timestamp
 * @returns the UNIX time for @ntptime in nanoseconds.
 */
export function rtcpNtpToUnix(ntptime: number): number
/**
 * Convert `name` into a `GstRTCPSDESType`. `name` is typically a key in a
 * #GstStructure containing SDES items.
 * @param name a SDES name
 * @returns the #GstRTCPSDESType for @name or #GST_RTCP_SDES_PRIV when @name is a private sdes item.
 */
export function rtcpSdesNameToType(name: string | null): RTCPSDESType
/**
 * Converts `type` to the string equivalent. The string is typically used as a
 * key in a #GstStructure containing SDES items.
 * @param type a #GstRTCPSDESType
 * @returns the string equivalent of @type
 */
export function rtcpSdesTypeToName(type: RTCPSDESType): string | null
/**
 * Converts a UNIX timestamp in nanoseconds to an NTP time. The caller should
 * pass a value with nanoseconds since 1970. The NTP time will, in the upper
 * 32 bits, contain the number of seconds since 1900 and, in the lower 32
 * bits, the fractional seconds. The resulting value can be used as an ntptime
 * for constructing SR RTCP packets.
 * @param unixtime an UNIX timestamp in nanoseconds
 * @returns the NTP time for @unixtime.
 */
export function rtcpUnixToNtp(unixtime: number): number
/**
 * Allocate enough data in `buffer` to hold an RTP packet with `csrc_count` CSRCs,
 * a payload length of `payload_len` and padding of `pad_len`.
 * `buffer` must be writable and all previous memory in `buffer` will be freed.
 * If `pad_len` is >0, the padding bit will be set. All other RTP header fields
 * will be set to 0/FALSE.
 * @param buffer a #GstBuffer
 * @param payloadLen the length of the payload
 * @param padLen the amount of padding
 * @param csrcCount the number of CSRC entries
 */
export function rtpBufferAllocateData(buffer: Gst.Buffer, payloadLen: number, padLen: number, csrcCount: number): void
/**
 * Calculate the header length of an RTP packet with `csrc_count` CSRC entries.
 * An RTP packet can have at most 15 CSRC entries.
 * @param csrcCount the number of CSRC entries
 * @returns The length of an RTP header with @csrc_count CSRC entries.
 */
export function rtpBufferCalcHeaderLen(csrcCount: number): number
/**
 * Calculate the total length of an RTP packet with a payload size of `payload_len,`
 * a padding of `pad_len` and a `csrc_count` CSRC entries.
 * @param payloadLen the length of the payload
 * @param padLen the amount of padding
 * @param csrcCount the number of CSRC entries
 * @returns The total length of an RTP header with given parameters.
 */
export function rtpBufferCalcPacketLen(payloadLen: number, padLen: number, csrcCount: number): number
/**
 * Calculate the length of the payload of an RTP packet with size `packet_len,`
 * a padding of `pad_len` and a `csrc_count` CSRC entries.
 * @param packetLen the length of the total RTP packet
 * @param padLen the amount of padding
 * @param csrcCount the number of CSRC entries
 * @returns The length of the payload of an RTP packet  with given parameters.
 */
export function rtpBufferCalcPayloadLen(packetLen: number, padLen: number, csrcCount: number): number
/**
 * Compare two sequence numbers, taking care of wraparounds. This function
 * returns the difference between `seqnum1` and `seqnum2`.
 * @param seqnum1 a sequence number
 * @param seqnum2 a sequence number
 * @returns a negative value if @seqnum1 is bigger than @seqnum2, 0 if they are equal or a positive value if @seqnum1 is smaller than @segnum2.
 */
export function rtpBufferCompareSeqnum(seqnum1: number, seqnum2: number): number
/**
 * Get the default clock-rate for the static payload type `payload_type`.
 * @param payloadType the static payload type
 * @returns the default clock rate or -1 if the payload type is not static or the clock-rate is undefined.
 */
export function rtpBufferDefaultClockRate(payloadType: number): number
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
 * @returns The extended timestamp of @timestamp or 0 if the result can't go anywhere backwards.
 */
export function rtpBufferExtTimestamp(exttimestamp: number, timestamp: number): [ /* returnType */ number, /* exttimestamp */ number ]
/**
 * Similar to gst_rtp_buffer_get_extension_onebyte_header, but working
 * on the #GBytes you get from gst_rtp_buffer_get_extension_bytes.
 * Parses RFC 5285 style header extensions with a one byte header. It will
 * return the nth extension with the requested id.
 * @param bytes #GBytes
 * @param bitPattern The bit-pattern. Anything but 0xBEDE is rejected.
 * @param id The ID of the header extension to be read (between 1 and 14).
 * @param nth Read the nth extension packet with the requested ID
 * @returns TRUE if @bytes had the requested header extension
 */
export function rtpBufferGetExtensionOnebyteHeaderFromBytes(bytes: any, bitPattern: number, id: number, nth: number): [ /* returnType */ boolean, /* data */ Uint8Array ]
/**
 * Map the contents of `buffer` into `rtp`.
 * @param buffer a #GstBuffer
 * @param flags #GstMapFlags
 * @returns %TRUE if @buffer could be mapped.
 */
export function rtpBufferMap(buffer: Gst.Buffer, flags: Gst.MapFlags): [ /* returnType */ boolean, /* rtp */ RTPBuffer ]
/**
 * Allocate a new #GstBuffer with enough data to hold an RTP packet with
 * `csrc_count` CSRCs, a payload length of `payload_len` and padding of `pad_len`.
 * All other RTP header fields will be set to 0/FALSE.
 * @param payloadLen the length of the payload
 * @param padLen the amount of padding
 * @param csrcCount the number of CSRC entries
 * @returns A newly allocated buffer that can hold an RTP packet with given parameters.
 */
export function rtpBufferNewAllocate(payloadLen: number, padLen: number, csrcCount: number): Gst.Buffer
/**
 * Create a new #GstBuffer that can hold an RTP packet that is exactly
 * `packet_len` long. The length of the payload depends on `pad_len` and
 * `csrc_count` and can be calculated with gst_rtp_buffer_calc_payload_len().
 * All RTP header fields will be set to 0/FALSE.
 * @param packetLen the total length of the packet
 * @param padLen the amount of padding
 * @param csrcCount the number of CSRC entries
 * @returns A newly allocated buffer that can hold an RTP packet of @packet_len.
 */
export function rtpBufferNewAllocateLen(packetLen: number, padLen: number, csrcCount: number): Gst.Buffer
/**
 * Create a new buffer and set the data to a copy of `len`
 * bytes of `data` and the size to `len`. The data will be freed when the buffer
 * is freed.
 * @param data data for the new   buffer
 * @returns A newly allocated buffer with a copy of @data and of size @len.
 */
export function rtpBufferNewCopyData(data: Uint8Array): Gst.Buffer
/**
 * Create a new buffer and set the data and size of the buffer to `data` and `len`
 * respectively. `data` will be freed when the buffer is unreffed, so this
 * function transfers ownership of `data` to the new buffer.
 * @param data    data for the new buffer
 * @returns A newly allocated buffer with @data and of size @len.
 */
export function rtpBufferNewTakeData(data: Uint8Array): Gst.Buffer
/**
 * Retrieve all the factories of the currently registered RTP header
 * extensions.  Call gst_element_factory_create() with each factory to create
 * the associated #GstRTPHeaderExtension.
 * @returns a #GList of     #GstElementFactory's. Use gst_plugin_feature_list_free() after use
 */
export function rtpGetHeaderExtensionList(): Gst.ElementFactory[]
/**
 * Reads the NTP time from the `size` NTP-56 extension bytes in `data` and store the
 * result in `ntptime`.
 * @param data the data to read from
 * @returns %TRUE on success.
 */
export function rtpHdrextGetNtp56(data: Uint8Array): [ /* returnType */ boolean, /* ntptime */ number ]
/**
 * Reads the NTP time from the `size` NTP-64 extension bytes in `data` and store the
 * result in `ntptime`.
 * @param data the data to read from
 * @returns %TRUE on success.
 */
export function rtpHdrextGetNtp64(data: Uint8Array): [ /* returnType */ boolean, /* ntptime */ number ]
/**
 * Writes the NTP time in `ntptime` to the format required for the NTP-56 header
 * extension. `data` must hold at least #GST_RTP_HDREXT_NTP_56_SIZE bytes.
 * @param data the data to write to
 * @param size the size of `data`
 * @param ntptime the NTP time
 * @returns %TRUE on success.
 */
export function rtpHdrextSetNtp56(data: any | null, size: number, ntptime: number): boolean
/**
 * Writes the NTP time in `ntptime` to the format required for the NTP-64 header
 * extension. `data` must hold at least #GST_RTP_HDREXT_NTP_64_SIZE bytes.
 * @param data the data to write to
 * @param size the size of `data`
 * @param ntptime the NTP time
 * @returns %TRUE on success.
 */
export function rtpHdrextSetNtp64(data: any | null, size: number, ntptime: number): boolean
/**
 * Get the #GstRTPPayloadInfo for `media` and `encoding_name`. This function is
 * mostly used to get the default clock-rate and bandwidth for dynamic payload
 * types specified with `media` and `encoding` name.
 * 
 * The search for `encoding_name` will be performed in a case insensitive way.
 * @param media the media to find
 * @param encodingName the encoding name to find
 * @returns a #GstRTPPayloadInfo or NULL when no info could be found.
 */
export function rtpPayloadInfoForName(media: string | null, encodingName: string | null): RTPPayloadInfo | null
/**
 * Get the #GstRTPPayloadInfo for `payload_type`. This function is
 * mostly used to get the default clock-rate and bandwidth for static payload
 * types specified with `payload_type`.
 * @param payloadType the payload_type to find
 * @returns a #GstRTPPayloadInfo or NULL when no info could be found.
 */
export function rtpPayloadInfoForPt(payloadType: number): RTPPayloadInfo | null
export function rtpSourceMetaApiGetType(): GObject.GType
export function rtpSourceMetaGetInfo(): Gst.MetaInfo
export module RTPBaseAudioPayload {

    // Constructor properties interface

    export interface ConstructorProperties extends RTPBasePayload.ConstructorProperties {

        // Own constructor properties of GstRtp-1.0.GstRtp.RTPBaseAudioPayload

        bufferList?: boolean | null
    }

}

export interface RTPBaseAudioPayload {

    // Own properties of GstRtp-1.0.GstRtp.RTPBaseAudioPayload

    bufferList: boolean
    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstRtp-1.0.GstRtp.RTPBaseAudioPayload

    payload: RTPBasePayload
    priv: RTPBaseAudioPayloadPrivate
    baseTs: Gst.ClockTime
    frameSize: number
    frameDuration: number
    sampleSize: number

    // Owm methods of GstRtp-1.0.GstRtp.RTPBaseAudioPayload

    /**
     * Create an RTP buffer and store `payload_len` bytes of the adapter as the
     * payload. Set the timestamp on the new buffer to `timestamp` before pushing
     * the buffer downstream.
     * 
     * If `payload_len` is -1, all pending bytes will be flushed. If `timestamp` is
     * -1, the timestamp will be calculated automatically.
     * @param payloadLen length of payload
     * @param timestamp a #GstClockTime
     * @returns a #GstFlowReturn
     */
    flush(payloadLen: number, timestamp: Gst.ClockTime): Gst.FlowReturn
    /**
     * Gets the internal adapter used by the depayloader.
     * @returns a #GstAdapter.
     */
    getAdapter(): GstBase.Adapter
    /**
     * Create an RTP buffer and store `payload_len` bytes of `data` as the
     * payload. Set the timestamp on the new buffer to `timestamp` before pushing
     * the buffer downstream.
     * @param data data to set as payload
     * @param timestamp a #GstClockTime
     * @returns a #GstFlowReturn
     */
    push(data: Uint8Array, timestamp: Gst.ClockTime): Gst.FlowReturn

    // Overloads of push

    /**
     * Push `buffer` to the peer element of the payloader. The SSRC, payload type,
     * seqnum and timestamp of the RTP buffer will be updated first.
     * 
     * This function takes ownership of `buffer`.
     * @param buffer a #GstBuffer
     * @returns a #GstFlowReturn.
     */
    push(buffer: Gst.Buffer): Gst.FlowReturn
    /**
     * Tells #GstRTPBaseAudioPayload that the child element is for a frame based
     * audio codec
     */
    setFrameBased(): void
    /**
     * Sets the options for frame based audio codecs.
     * @param frameDuration The duraction of an audio frame in milliseconds.
     * @param frameSize The size of an audio frame in bytes.
     */
    setFrameOptions(frameDuration: number, frameSize: number): void
    /**
     * Tells #GstRTPBaseAudioPayload that the child element is for a sample based
     * audio codec
     */
    setSampleBased(): void
    /**
     * Sets the options for sample based audio codecs.
     * @param sampleSize Size per sample in bytes.
     */
    setSampleOptions(sampleSize: number): void
    /**
     * Sets the options for sample based audio codecs.
     * @param sampleSize Size per sample in bits.
     */
    setSamplebitsOptions(sampleSize: number): void

    // Conflicting methods

    query(pad: Gst.Pad, query: Gst.Query): boolean

    // Overloads of query

    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @virtual 
     * @param query the #GstQuery.
     * @returns %TRUE if the query could be performed. MT safe.
     */
    query(query: Gst.Query): boolean
    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @virtual 
     * @param query the #GstQuery.
     * @returns %TRUE if the query could be performed. MT safe.
     */
    query(query: Gst.Query): boolean
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

    // Class property signals of GstRtp-1.0.GstRtp.RTPBaseAudioPayload

    connect(sigName: "notify::buffer-list", callback: (...args: any[]) => void): number
    on(sigName: "notify::buffer-list", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::buffer-list", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::buffer-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::buffer-list", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::auto-header-extension", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-header-extension", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-header-extension", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-header-extension", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-header-extension", ...args: any[]): void
    connect(sigName: "notify::max-ptime", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-ptime", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-ptime", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-ptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-ptime", ...args: any[]): void
    connect(sigName: "notify::min-ptime", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-ptime", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-ptime", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-ptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-ptime", ...args: any[]): void
    connect(sigName: "notify::mtu", callback: (...args: any[]) => void): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mtu", ...args: any[]): void
    connect(sigName: "notify::onvif-no-rate-control", callback: (...args: any[]) => void): number
    on(sigName: "notify::onvif-no-rate-control", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::onvif-no-rate-control", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::onvif-no-rate-control", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::onvif-no-rate-control", ...args: any[]): void
    connect(sigName: "notify::perfect-rtptime", callback: (...args: any[]) => void): number
    on(sigName: "notify::perfect-rtptime", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::perfect-rtptime", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::perfect-rtptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::perfect-rtptime", ...args: any[]): void
    connect(sigName: "notify::pt", callback: (...args: any[]) => void): number
    on(sigName: "notify::pt", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pt", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pt", ...args: any[]): void
    connect(sigName: "notify::ptime-multiple", callback: (...args: any[]) => void): number
    on(sigName: "notify::ptime-multiple", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ptime-multiple", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ptime-multiple", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ptime-multiple", ...args: any[]): void
    connect(sigName: "notify::scale-rtptime", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-rtptime", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-rtptime", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-rtptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-rtptime", ...args: any[]): void
    connect(sigName: "notify::seqnum", callback: (...args: any[]) => void): number
    on(sigName: "notify::seqnum", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::seqnum", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::seqnum", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::seqnum", ...args: any[]): void
    connect(sigName: "notify::seqnum-offset", callback: (...args: any[]) => void): number
    on(sigName: "notify::seqnum-offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::seqnum-offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::seqnum-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::seqnum-offset", ...args: any[]): void
    connect(sigName: "notify::source-info", callback: (...args: any[]) => void): number
    on(sigName: "notify::source-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::source-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::source-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::source-info", ...args: any[]): void
    connect(sigName: "notify::ssrc", callback: (...args: any[]) => void): number
    on(sigName: "notify::ssrc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ssrc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ssrc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ssrc", ...args: any[]): void
    connect(sigName: "notify::stats", callback: (...args: any[]) => void): number
    on(sigName: "notify::stats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stats", ...args: any[]): void
    connect(sigName: "notify::timestamp", callback: (...args: any[]) => void): number
    on(sigName: "notify::timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::timestamp", ...args: any[]): void
    connect(sigName: "notify::timestamp-offset", callback: (...args: any[]) => void): number
    on(sigName: "notify::timestamp-offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::timestamp-offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::timestamp-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::timestamp-offset", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Provides a base class for audio RTP payloaders for frame or sample based
 * audio codecs (constant bitrate)
 * 
 * This class derives from GstRTPBasePayload. It can be used for payloading
 * audio codecs. It will only work with constant bitrate codecs. It supports
 * both frame based and sample based codecs. It takes care of packing up the
 * audio data into RTP packets and filling up the headers accordingly. The
 * payloading is done based on the maximum MTU (mtu) and the maximum time per
 * packet (max-ptime). The general idea is to divide large data buffers into
 * smaller RTP packets. The RTP packet size is the minimum of either the MTU,
 * max-ptime (if set) or available data. The RTP packet size is always larger or
 * equal to min-ptime (if set). If min-ptime is not set, any residual data is
 * sent in a last RTP packet. In the case of frame based codecs, the resulting
 * RTP packets always contain full frames.
 * 
 * ## Usage
 * 
 * To use this base class, your child element needs to call either
 * gst_rtp_base_audio_payload_set_frame_based() or
 * gst_rtp_base_audio_payload_set_sample_based(). This is usually done in the
 * element's `_init()` function. Then, the child element must call either
 * gst_rtp_base_audio_payload_set_frame_options(),
 * gst_rtp_base_audio_payload_set_sample_options() or
 * gst_rtp_base_audio_payload_set_samplebits_options. Since
 * GstRTPBaseAudioPayload derives from GstRTPBasePayload, the child element
 * must set any variables or call/override any functions required by that base
 * class. The child element does not need to override any other functions
 * specific to GstRTPBaseAudioPayload.
 * @class 
 */
export class RTPBaseAudioPayload extends RTPBasePayload {

    // Own properties of GstRtp-1.0.GstRtp.RTPBaseAudioPayload

    static name: string

    // Constructors of GstRtp-1.0.GstRtp.RTPBaseAudioPayload

    constructor(config?: RTPBaseAudioPayload.ConstructorProperties) 
    _init(config?: RTPBaseAudioPayload.ConstructorProperties): void
}

export module RTPBaseDepayload {

    // Signal callback interfaces

    /**
     * Signal callback interface for `add-extension`
     */
    export interface AddExtensionSignalCallback {
        (ext: RTPHeaderExtension): void
    }

    /**
     * Signal callback interface for `clear-extensions`
     */
    export interface ClearExtensionsSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `request-extension`
     */
    export interface RequestExtensionSignalCallback {
        (extId: number, extUri: string | null): RTPHeaderExtension | null
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Element.ConstructorProperties {

        // Own constructor properties of GstRtp-1.0.GstRtp.RTPBaseDepayload

        /**
         * If enabled, the depayloader will automatically try to enable all the
         * RTP header extensions provided in the sink caps, saving the application
         * the need to handle these extensions manually using the
         * GstRTPBaseDepayload::request-extension: signal.
         */
        autoHeaderExtension?: boolean | null
        /**
         * Max seqnum reorder before the sender is assumed to have restarted.
         * 
         * When max-reorder is set to 0 all reordered/duplicate packets are
         * considered coming from a restarted sender.
         */
        maxReorder?: number | null
        /**
         * Add RTP source information found in RTP header as meta to output buffer.
         */
        sourceInfo?: boolean | null
    }

}

export interface RTPBaseDepayload {

    // Own properties of GstRtp-1.0.GstRtp.RTPBaseDepayload

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
    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstRtp-1.0.GstRtp.RTPBaseDepayload

    parent: Gst.Element & Gst.Object
    sinkpad: Gst.Pad
    srcpad: Gst.Pad
    clockRate: number
    segment: Gst.Segment
    needNewsegment: boolean

    // Owm methods of GstRtp-1.0.GstRtp.RTPBaseDepayload

    /**
     * Queries whether #GstRTPSourceMeta will be added to depayloaded buffers.
     * @returns %TRUE if source-info is enabled.
     */
    isSourceInfoEnabled(): boolean
    /**
     * Push `out_buf` to the peer of `filter`. This function takes ownership of
     * `out_buf`.
     * 
     * This function will by default apply the last incoming timestamp on
     * the outgoing buffer when it didn't have a timestamp already.
     * @param outBuf a #GstBuffer
     * @returns a #GstFlowReturn.
     */
    push(outBuf: Gst.Buffer): Gst.FlowReturn
    /**
     * Push `out_list` to the peer of `filter`. This function takes ownership of
     * `out_list`.
     * @param outList a #GstBufferList
     * @returns a #GstFlowReturn.
     */
    pushList(outList: Gst.BufferList): Gst.FlowReturn
    /**
     * Enable or disable adding #GstRTPSourceMeta to depayloaded buffers.
     * @param enable whether to add meta about RTP sources to buffer
     */
    setSourceInfoEnabled(enable: boolean): void

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

    // Own virtual methods of GstRtp-1.0.GstRtp.RTPBaseDepayload

    handleEvent(event: Gst.Event): boolean
    packetLost(event: Gst.Event): boolean
    process(in_: Gst.Buffer): Gst.Buffer
    processRtpPacket(rtpBuffer: RTPBuffer): Gst.Buffer
    setCaps(caps: Gst.Caps): boolean

    // Own signals of GstRtp-1.0.GstRtp.RTPBaseDepayload

    connect(sigName: "add-extension", callback: RTPBaseDepayload.AddExtensionSignalCallback): number
    on(sigName: "add-extension", callback: RTPBaseDepayload.AddExtensionSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "add-extension", callback: RTPBaseDepayload.AddExtensionSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "add-extension", callback: RTPBaseDepayload.AddExtensionSignalCallback): NodeJS.EventEmitter
    emit(sigName: "add-extension", ...args: any[]): void
    connect(sigName: "clear-extensions", callback: RTPBaseDepayload.ClearExtensionsSignalCallback): number
    on(sigName: "clear-extensions", callback: RTPBaseDepayload.ClearExtensionsSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "clear-extensions", callback: RTPBaseDepayload.ClearExtensionsSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "clear-extensions", callback: RTPBaseDepayload.ClearExtensionsSignalCallback): NodeJS.EventEmitter
    emit(sigName: "clear-extensions", ...args: any[]): void
    connect(sigName: "request-extension", callback: RTPBaseDepayload.RequestExtensionSignalCallback): number
    on(sigName: "request-extension", callback: RTPBaseDepayload.RequestExtensionSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-extension", callback: RTPBaseDepayload.RequestExtensionSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-extension", callback: RTPBaseDepayload.RequestExtensionSignalCallback): NodeJS.EventEmitter
    emit(sigName: "request-extension", extUri: string | null, ...args: any[]): void

    // Class property signals of GstRtp-1.0.GstRtp.RTPBaseDepayload

    connect(sigName: "notify::auto-header-extension", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-header-extension", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-header-extension", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-header-extension", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-header-extension", ...args: any[]): void
    connect(sigName: "notify::max-reorder", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-reorder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-reorder", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-reorder", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-reorder", ...args: any[]): void
    connect(sigName: "notify::source-info", callback: (...args: any[]) => void): number
    on(sigName: "notify::source-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::source-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::source-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::source-info", ...args: any[]): void
    connect(sigName: "notify::stats", callback: (...args: any[]) => void): number
    on(sigName: "notify::stats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stats", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Provides a base class for RTP depayloaders
 * @class 
 */
export class RTPBaseDepayload extends Gst.Element {

    // Own properties of GstRtp-1.0.GstRtp.RTPBaseDepayload

    static name: string

    // Constructors of GstRtp-1.0.GstRtp.RTPBaseDepayload

    constructor(config?: RTPBaseDepayload.ConstructorProperties) 
    _init(config?: RTPBaseDepayload.ConstructorProperties): void
}

export module RTPBasePayload {

    // Signal callback interfaces

    /**
     * Signal callback interface for `add-extension`
     */
    export interface AddExtensionSignalCallback {
        (ext: RTPHeaderExtension): void
    }

    /**
     * Signal callback interface for `clear-extensions`
     */
    export interface ClearExtensionsSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `request-extension`
     */
    export interface RequestExtensionSignalCallback {
        (extId: number, extUri: string | null): RTPHeaderExtension | null
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Element.ConstructorProperties {

        // Own constructor properties of GstRtp-1.0.GstRtp.RTPBasePayload

        /**
         * If enabled, the payloader will automatically try to enable all the
         * RTP header extensions provided in the src caps, saving the application
         * the need to handle these extensions manually using the
         * GstRTPBasePayload::request-extension: signal.
         */
        autoHeaderExtension?: boolean | null
        maxPtime?: number | null
        /**
         * Minimum duration of the packet data in ns (can't go above MTU)
         */
        minPtime?: number | null
        mtu?: number | null
        /**
         * Make the payloader timestamp packets according to the Rate-Control=no
         * behaviour specified in the ONVIF replay spec.
         */
        onvifNoRateControl?: boolean | null
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
        perfectRtptime?: boolean | null
        pt?: number | null
        /**
         * Force buffers to be multiples of this duration in ns (0 disables)
         */
        ptimeMultiple?: number | null
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
        scaleRtptime?: boolean | null
        seqnumOffset?: number | null
        /**
         * Enable writing the CSRC field in allocated RTP header based on RTP source
         * information found in the input buffer's #GstRTPSourceMeta.
         */
        sourceInfo?: boolean | null
        ssrc?: number | null
        timestampOffset?: number | null
    }

}

export interface RTPBasePayload {

    // Own properties of GstRtp-1.0.GstRtp.RTPBasePayload

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
    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstRtp-1.0.GstRtp.RTPBasePayload

    element: Gst.Element

    // Owm methods of GstRtp-1.0.GstRtp.RTPBasePayload

    /**
     * Allocate a new #GstBuffer with enough data to hold an RTP packet with
     * minimum `csrc_count` CSRCs, a payload length of `payload_len` and padding of
     * `pad_len`. If `payload` has #GstRTPBasePayload:source-info %TRUE additional
     * CSRCs may be allocated and filled with RTP source information.
     * @param payloadLen the length of the payload
     * @param padLen the amount of padding
     * @param csrcCount the minimum number of CSRC entries
     * @returns A newly allocated buffer that can hold an RTP packet with given parameters.
     */
    allocateOutputBuffer(payloadLen: number, padLen: number, csrcCount: number): Gst.Buffer
    /**
     * Count the total number of RTP sources found in the meta of `buffer,` which
     * will be automically added by gst_rtp_base_payload_allocate_output_buffer().
     * If #GstRTPBasePayload:source-info is %FALSE the count will be 0.
     * @param buffer a #GstBuffer, typically the buffer to payload
     * @returns The number of sources.
     */
    getSourceCount(buffer: Gst.Buffer): number
    /**
     * Check if the packet with `size` and `duration` would exceed the configured
     * maximum size.
     * @param size the size of the packet
     * @param duration the duration of the packet
     * @returns %TRUE if the packet of @size and @duration would exceed the configured MTU or max_ptime.
     */
    isFilled(size: number, duration: Gst.ClockTime): boolean
    /**
     * Queries whether the payloader will add contributing sources (CSRCs) to the
     * RTP header from #GstRTPSourceMeta.
     * @returns %TRUE if source-info is enabled.
     */
    isSourceInfoEnabled(): boolean
    /**
     * Push `buffer` to the peer element of the payloader. The SSRC, payload type,
     * seqnum and timestamp of the RTP buffer will be updated first.
     * 
     * This function takes ownership of `buffer`.
     * @param buffer a #GstBuffer
     * @returns a #GstFlowReturn.
     */
    push(buffer: Gst.Buffer): Gst.FlowReturn
    /**
     * Push `list` to the peer element of the payloader. The SSRC, payload type,
     * seqnum and timestamp of the RTP buffer will be updated first.
     * 
     * This function takes ownership of `list`.
     * @param list a #GstBufferList
     * @returns a #GstFlowReturn.
     */
    pushList(list: Gst.BufferList): Gst.FlowReturn
    /**
     * Set the rtp options of the payloader. These options will be set in the caps
     * of the payloader. Subclasses must call this method before calling
     * gst_rtp_base_payload_push() or gst_rtp_base_payload_set_outcaps().
     * @param media the media type (typically "audio" or "video")
     * @param dynamic if the payload type is dynamic
     * @param encodingName the encoding name
     * @param clockRate the clock rate of the media
     */
    setOptions(media: string | null, dynamic: boolean, encodingName: string | null, clockRate: number): void
    /**
     * Configure the output caps with the optional fields.
     * @param s a #GstStructure with the caps fields
     * @returns %TRUE if the caps could be set.
     */
    setOutcapsStructure(s: Gst.Structure | null): boolean
    /**
     * Enable or disable adding contributing sources to RTP packets from
     * #GstRTPSourceMeta.
     * @param enable whether to add contributing sources to RTP packets
     */
    setSourceInfoEnabled(enable: boolean): void

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

    // Own virtual methods of GstRtp-1.0.GstRtp.RTPBasePayload

    getCaps(pad: Gst.Pad, filter: Gst.Caps): Gst.Caps
    handleBuffer(buffer: Gst.Buffer): Gst.FlowReturn
    query(pad: Gst.Pad, query: Gst.Query): boolean

    // Overloads of query

    /**
     * Performs a query on the given element.
     * 
     * For elements that don't implement a query handler, this function
     * forwards the query to a random srcpad or to the peer of a
     * random linked sinkpad of this element.
     * 
     * Please note that some queries might need a running pipeline to work.
     * @virtual 
     * @param query the #GstQuery.
     * @returns %TRUE if the query could be performed. MT safe.
     */
    query(query: Gst.Query): boolean
    setCaps(caps: Gst.Caps): boolean
    sinkEvent(event: Gst.Event): boolean
    srcEvent(event: Gst.Event): boolean

    // Own signals of GstRtp-1.0.GstRtp.RTPBasePayload

    connect(sigName: "add-extension", callback: RTPBasePayload.AddExtensionSignalCallback): number
    on(sigName: "add-extension", callback: RTPBasePayload.AddExtensionSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "add-extension", callback: RTPBasePayload.AddExtensionSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "add-extension", callback: RTPBasePayload.AddExtensionSignalCallback): NodeJS.EventEmitter
    emit(sigName: "add-extension", ...args: any[]): void
    connect(sigName: "clear-extensions", callback: RTPBasePayload.ClearExtensionsSignalCallback): number
    on(sigName: "clear-extensions", callback: RTPBasePayload.ClearExtensionsSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "clear-extensions", callback: RTPBasePayload.ClearExtensionsSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "clear-extensions", callback: RTPBasePayload.ClearExtensionsSignalCallback): NodeJS.EventEmitter
    emit(sigName: "clear-extensions", ...args: any[]): void
    connect(sigName: "request-extension", callback: RTPBasePayload.RequestExtensionSignalCallback): number
    on(sigName: "request-extension", callback: RTPBasePayload.RequestExtensionSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "request-extension", callback: RTPBasePayload.RequestExtensionSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "request-extension", callback: RTPBasePayload.RequestExtensionSignalCallback): NodeJS.EventEmitter
    emit(sigName: "request-extension", extUri: string | null, ...args: any[]): void

    // Class property signals of GstRtp-1.0.GstRtp.RTPBasePayload

    connect(sigName: "notify::auto-header-extension", callback: (...args: any[]) => void): number
    on(sigName: "notify::auto-header-extension", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auto-header-extension", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auto-header-extension", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auto-header-extension", ...args: any[]): void
    connect(sigName: "notify::max-ptime", callback: (...args: any[]) => void): number
    on(sigName: "notify::max-ptime", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::max-ptime", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::max-ptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::max-ptime", ...args: any[]): void
    connect(sigName: "notify::min-ptime", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-ptime", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-ptime", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-ptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-ptime", ...args: any[]): void
    connect(sigName: "notify::mtu", callback: (...args: any[]) => void): number
    on(sigName: "notify::mtu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mtu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mtu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mtu", ...args: any[]): void
    connect(sigName: "notify::onvif-no-rate-control", callback: (...args: any[]) => void): number
    on(sigName: "notify::onvif-no-rate-control", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::onvif-no-rate-control", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::onvif-no-rate-control", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::onvif-no-rate-control", ...args: any[]): void
    connect(sigName: "notify::perfect-rtptime", callback: (...args: any[]) => void): number
    on(sigName: "notify::perfect-rtptime", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::perfect-rtptime", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::perfect-rtptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::perfect-rtptime", ...args: any[]): void
    connect(sigName: "notify::pt", callback: (...args: any[]) => void): number
    on(sigName: "notify::pt", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pt", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pt", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pt", ...args: any[]): void
    connect(sigName: "notify::ptime-multiple", callback: (...args: any[]) => void): number
    on(sigName: "notify::ptime-multiple", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ptime-multiple", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ptime-multiple", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ptime-multiple", ...args: any[]): void
    connect(sigName: "notify::scale-rtptime", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-rtptime", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-rtptime", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-rtptime", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-rtptime", ...args: any[]): void
    connect(sigName: "notify::seqnum", callback: (...args: any[]) => void): number
    on(sigName: "notify::seqnum", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::seqnum", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::seqnum", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::seqnum", ...args: any[]): void
    connect(sigName: "notify::seqnum-offset", callback: (...args: any[]) => void): number
    on(sigName: "notify::seqnum-offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::seqnum-offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::seqnum-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::seqnum-offset", ...args: any[]): void
    connect(sigName: "notify::source-info", callback: (...args: any[]) => void): number
    on(sigName: "notify::source-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::source-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::source-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::source-info", ...args: any[]): void
    connect(sigName: "notify::ssrc", callback: (...args: any[]) => void): number
    on(sigName: "notify::ssrc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ssrc", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ssrc", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ssrc", ...args: any[]): void
    connect(sigName: "notify::stats", callback: (...args: any[]) => void): number
    on(sigName: "notify::stats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::stats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::stats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::stats", ...args: any[]): void
    connect(sigName: "notify::timestamp", callback: (...args: any[]) => void): number
    on(sigName: "notify::timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::timestamp", ...args: any[]): void
    connect(sigName: "notify::timestamp-offset", callback: (...args: any[]) => void): number
    on(sigName: "notify::timestamp-offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::timestamp-offset", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::timestamp-offset", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::timestamp-offset", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Provides a base class for RTP payloaders
 * @class 
 */
export class RTPBasePayload extends Gst.Element {

    // Own properties of GstRtp-1.0.GstRtp.RTPBasePayload

    static name: string

    // Constructors of GstRtp-1.0.GstRtp.RTPBasePayload

    constructor(config?: RTPBasePayload.ConstructorProperties) 
    _init(config?: RTPBasePayload.ConstructorProperties): void
}

export module RTPHeaderExtension {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Element.ConstructorProperties {
    }

}

export interface RTPHeaderExtension {

    // Own properties of GstRtp-1.0.GstRtp.RTPHeaderExtension

    __gtype__: number

    // Conflicting properties

    object: any

    // Own fields of GstRtp-1.0.GstRtp.RTPHeaderExtension

    /**
     * the parent #GObject
     * @field 
     */
    parent: Gst.Element & Gst.Object

    // Owm methods of GstRtp-1.0.GstRtp.RTPHeaderExtension

    /**
     * Retrieve the direction
     * @returns The direction
     */
    getDirection(): RTPHeaderExtensionDirection
    getId(): number
    // Has conflict: getMaxSize(inputMeta: Gst.Buffer): number
    getSdpCapsFieldName(): string | null
    // Has conflict: getSupportedFlags(): RTPHeaderExtensionFlags
    getUri(): string | null
    // Has conflict: read(readFlags: RTPHeaderExtensionFlags, data: Uint8Array, buffer: Gst.Buffer): boolean
    /**
     * gst_rtp_header_extension_set_id() must have been called with a valid
     * extension id that is contained in these caps.
     * 
     * The only current known caps format is based on the SDP standard as produced
     * by gst_sdp_media_attributes_to_caps().
     * @param caps the #GstCaps to configure this extension with
     * @returns whether the @caps could be successfully set on @ext.
     */
    setAttributesFromCaps(caps: Gst.Caps): boolean
    // Has conflict: setCapsFromAttributes(caps: Gst.Caps): boolean
    /**
     * Helper implementation for GstRTPExtensionClass::set_caps_from_attributes
     * that sets the `ext` uri on caps with the specified extension id as required
     * for sdp #GstCaps.
     * 
     * Requires that the extension does not have any attributes or direction
     * advertised in `caps`.
     * @param caps #GstCaps to write fields into
     * @param attributes 
     * @returns whether the @ext attributes could be set on @caps.
     */
    setCapsFromAttributesHelper(caps: Gst.Caps, attributes: string | null): boolean
    /**
     * Set the direction that this header extension should be used in.
     * If #GST_RTP_HEADER_EXTENSION_DIRECTION_INHERITED is included, the
     * direction will not be included in the caps (as it shouldn't be in the
     * extmap line in the SDP).
     * @param direction The direction
     */
    setDirection(direction: RTPHeaderExtensionDirection): void
    /**
     * sets the RTP extension id on `ext`
     * @param extId The id of this extension
     */
    setId(extId: number): void
    // Has conflict: setNonRtpSinkCaps(caps: Gst.Caps): boolean
    /**
     * Call this function in a subclass from #GstRTPHeaderExtensionClass::read to
     * tell the depayloader whether the data just parsed from RTP packet require
     * updating its src (non-RTP) caps. If `state` is TRUE, #GstRTPBaseDepayload will
     * eventually invoke gst_rtp_header_extension_update_non_rtp_src_caps() to
     * have the caps update applied. Applying the update also flips the internal
     * "wants update" flag back to FALSE.
     * @param state TRUE if caps update is needed
     */
    setWantsUpdateNonRtpSrcCaps(state: boolean): void
    // Has conflict: updateNonRtpSrcCaps(caps: Gst.Caps): boolean
    /**
     * Call this function after gst_rtp_header_extension_read() to check if
     * the depayloader's src caps need updating with data received in the last RTP
     * packet.
     * @returns Whether @ext wants to update depayloader's src caps.
     */
    wantsUpdateNonRtpSrcCaps(): boolean
    // Has conflict: write(inputMeta: Gst.Buffer, writeFlags: RTPHeaderExtensionFlags, output: Gst.Buffer, data: Uint8Array): number

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

    // Own virtual methods of GstRtp-1.0.GstRtp.RTPHeaderExtension

    /**
     * This is used to know how much data a certain header extension will need for
     * both allocating the resulting data, and deciding how much payload data can
     * be generated.
     * 
     * Implementations should return as accurate a value as is possible using the
     * information given in the input `buffer`.
     * @virtual 
     * @param inputMeta a #GstBuffer
     * @returns the maximum size of the data written by this extension
     */
    getMaxSize(inputMeta: Gst.Buffer): number
    getSupportedFlags(): RTPHeaderExtensionFlags
    /**
     * Read the RTP header extension from `data`.
     * @virtual 
     * @param readFlags #GstRTPHeaderExtensionFlags for how the extension should               be written
     * @param data location to read the rtp header extension from
     * @param buffer a #GstBuffer to modify if necessary
     * @returns whether the extension could be read from @data
     */
    read(readFlags: RTPHeaderExtensionFlags, data: Uint8Array, buffer: Gst.Buffer): boolean
    setAttributes(direction: RTPHeaderExtensionDirection, attributes: string | null): boolean
    /**
     * gst_rtp_header_extension_set_id() must have been called with a valid
     * extension id that is contained in these caps.
     * 
     * The only current known caps format is based on the SDP standard as produced
     * by gst_sdp_media_attributes_to_caps().
     * @virtual 
     * @param caps writable #GstCaps to modify
     * @returns whether the configured attributes on @ext can successfully be set on 	@caps
     */
    setCapsFromAttributes(caps: Gst.Caps): boolean
    /**
     * Passes RTP payloader's sink (i.e. not payloaded) `caps` to the header
     * extension.
     * @virtual 
     * @param caps sink #GstCaps
     * @returns Whether @caps could be read successfully
     */
    setNonRtpSinkCaps(caps: Gst.Caps): boolean
    /**
     * Updates depayloader src caps based on the information received in RTP header.
     * `caps` must be writable as this function may modify them.
     * @virtual 
     * @param caps src #GstCaps to modify
     * @returns whether @caps were modified successfully
     */
    updateNonRtpSrcCaps(caps: Gst.Caps): boolean
    /**
     * Writes the RTP header extension to `data` using information available from
     * the `input_meta`.  `data` will be sized to be at least the value returned
     * from gst_rtp_header_extension_get_max_size().
     * @virtual 
     * @param inputMeta the input #GstBuffer to read information from if necessary
     * @param writeFlags #GstRTPHeaderExtensionFlags for how the extension should               be written
     * @param output output RTP #GstBuffer
     * @param data location to write the rtp header extension into
     * @returns the size of the data written, < 0 on failure
     */
    write(inputMeta: Gst.Buffer, writeFlags: RTPHeaderExtensionFlags, output: Gst.Buffer, data: Uint8Array): number

    // Class property signals of GstRtp-1.0.GstRtp.RTPHeaderExtension

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * Instance struct for a RTP Audio/Video header extension.
 * @class 
 */
export class RTPHeaderExtension extends Gst.Element {

    // Own properties of GstRtp-1.0.GstRtp.RTPHeaderExtension

    static name: string

    // Constructors of GstRtp-1.0.GstRtp.RTPHeaderExtension

    constructor(config?: RTPHeaderExtension.ConstructorProperties) 
    _init(config?: RTPHeaderExtension.ConstructorProperties): void
    static createFromUri(uri: string | null): RTPHeaderExtension | null
    /**
     * Set the URI for this RTP header extension implementation.
     * @param uri the RTP Header extension uri for `klass`
     */
    static setUri(klass: RTPHeaderExtension | Function | GObject.GType, uri: string | null): void
}

export interface RTCPBuffer {

    // Own fields of GstRtp-1.0.GstRtp.RTCPBuffer

    buffer: Gst.Buffer
    map: Gst.MapInfo

    // Owm methods of GstRtp-1.0.GstRtp.RTCPBuffer

    /**
     * Add a new packet of `type` to `rtcp`. `packet` will point to the newly created
     * packet.
     * @param type the #GstRTCPType of the new packet
     * @param packet pointer to new packet
     * @returns %TRUE if the packet could be created. This function returns %FALSE if the max mtu is exceeded for the buffer.
     */
    addPacket(type: RTCPType, packet: RTCPPacket): boolean
    /**
     * Initialize a new #GstRTCPPacket pointer that points to the first packet in
     * `rtcp`.
     * @param packet a #GstRTCPPacket
     * @returns TRUE if the packet existed in @rtcp.
     */
    getFirstPacket(packet: RTCPPacket): boolean
    /**
     * Get the number of RTCP packets in `rtcp`.
     * @returns the number of RTCP packets in @rtcp.
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
}

/**
 * Note: The API in this module is not yet declared stable.
 * 
 * The GstRTPCBuffer helper functions makes it easy to parse and create regular
 * #GstBuffer objects that contain compound RTCP packets. These buffers are typically
 * of 'application/x-rtcp' #GstCaps.
 * 
 * An RTCP buffer consists of 1 or more #GstRTCPPacket structures that you can
 * retrieve with gst_rtcp_buffer_get_first_packet(). #GstRTCPPacket acts as a pointer
 * into the RTCP buffer; you can move to the next packet with
 * gst_rtcp_packet_move_to_next().
 * @record 
 */
export class RTCPBuffer {

    // Own properties of GstRtp-1.0.GstRtp.RTCPBuffer

    static name: string

    // Constructors of GstRtp-1.0.GstRtp.RTCPBuffer

    /**
     * Create a new buffer for constructing RTCP packets. The packet will have a
     * maximum size of `mtu`.
     * @param mtu the maximum mtu size.
     * @returns A newly allocated buffer.
     */
    static new(mtu: number): Gst.Buffer
    /**
     * Create a new buffer and set the data to a copy of `len`
     * bytes of `data` and the size to `len`. The data will be freed when the buffer
     * is freed.
     * @param data data for the new buffer
     * @returns A newly allocated buffer with a copy of @data and of size @len.
     */
    static newCopyData(data: Uint8Array): Gst.Buffer
    /**
     * Create a new buffer and set the data and size of the buffer to `data` and `len`
     * respectively. `data` will be freed when the buffer is unreffed, so this
     * function transfers ownership of `data` to the new buffer.
     * @param data data for the new buffer
     * @returns A newly allocated buffer with @data and of size @len.
     */
    static newTakeData(data: Uint8Array): Gst.Buffer
    /**
     * Open `buffer` for reading or writing, depending on `flags`. The resulting RTCP
     * buffer state is stored in `rtcp`.
     * @param buffer a buffer with an RTCP packet
     * @param flags flags for the mapping
     * @param rtcp resulting #GstRTCPBuffer
     */
    static map(buffer: Gst.Buffer, flags: Gst.MapFlags, rtcp: RTCPBuffer): boolean
    /**
     * Check if the data pointed to by `buffer` is a valid RTCP packet using
     * gst_rtcp_buffer_validate_data().
     * @param buffer the buffer to validate
     * @returns TRUE if @buffer is a valid RTCP packet.
     */
    static validate(buffer: Gst.Buffer): boolean
    /**
     * Check if the `data` and `size` point to the data of a valid compound,
     * non-reduced size RTCP packet.
     * Use this function to validate a packet before using the other functions in
     * this module.
     * @param data the data to validate
     * @returns TRUE if the data points to a valid RTCP packet.
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
     * @param data the data to validate
     * @returns TRUE if the data points to a valid RTCP packet.
     */
    static validateDataReduced(data: Uint8Array): boolean
    /**
     * Check if the data pointed to by `buffer` is a valid RTCP packet using
     * gst_rtcp_buffer_validate_reduced().
     * @param buffer the buffer to validate
     * @returns TRUE if @buffer is a valid RTCP packet.
     */
    static validateReduced(buffer: Gst.Buffer): boolean
}

export interface RTCPPacket {

    // Own fields of GstRtp-1.0.GstRtp.RTCPPacket

    /**
     * pointer to RTCP buffer
     * @field 
     */
    rtcp: RTCPBuffer
    /**
     * offset of packet in buffer data
     * @field 
     */
    offset: number

    // Owm methods of GstRtp-1.0.GstRtp.RTCPPacket

    /**
     * Add profile-specific extension `data` to `packet`. If `packet` already
     * contains profile-specific extension `data` will be appended to the existing
     * extension.
     * @param data profile-specific data
     * @returns %TRUE if the profile specific extension data was added.
     */
    addProfileSpecificExt(data: Uint8Array): boolean
    /**
     * Add a new report block to `packet` with the given values.
     * @param ssrc data source being reported
     * @param fractionlost fraction lost since last SR/RR
     * @param packetslost the cumululative number of packets lost
     * @param exthighestseq the extended last sequence number received
     * @param jitter the interarrival jitter
     * @param lsr the last SR packet from this source
     * @param dlsr the delay since last SR packet
     * @returns %TRUE if the packet was created. This function can return %FALSE if the max MTU is exceeded or the number of report blocks is greater than #GST_RTCP_MAX_RB_COUNT.
     */
    addRb(ssrc: number, fractionlost: number, packetslost: number, exthighestseq: number, jitter: number, lsr: number, dlsr: number): boolean
    /**
     * Get the application-dependent data attached to a RTPFB or PSFB `packet`.
     * @returns A pointer to the data
     */
    appGetData(): number
    /**
     * Get the length of the application-dependent data attached to an APP
     * `packet`.
     * @returns The length of data in 32-bit words.
     */
    appGetDataLength(): number
    /**
     * Get the name field of the APP `packet`.
     * @returns The 4-byte name field, not zero-terminated.
     */
    appGetName(): string | null
    /**
     * Get the SSRC/CSRC field of the APP `packet`.
     * @returns The SSRC/CSRC.
     */
    appGetSsrc(): number
    /**
     * Get the subtype field of the APP `packet`.
     * @returns The subtype.
     */
    appGetSubtype(): number
    /**
     * Set the length of the application-dependent data attached to an APP
     * `packet`.
     * @param wordlen Length of the data in 32-bit words
     * @returns %TRUE if there was enough space in the packet to add this much data.
     */
    appSetDataLength(wordlen: number): boolean
    /**
     * Set the name field of the APP `packet`.
     * @param name 4-byte ASCII name
     */
    appSetName(name: string | null): void
    /**
     * Set the SSRC/CSRC field of the APP `packet`.
     * @param ssrc SSRC/CSRC of the packet
     */
    appSetSsrc(ssrc: number): void
    /**
     * Set the subtype field of the APP `packet`.
     * @param subtype subtype of the packet
     */
    appSetSubtype(subtype: number): void
    /**
     * Add `ssrc` to the BYE `packet`.
     * @param ssrc an SSRC to add
     * @returns %TRUE if the ssrc was added. This function can return %FALSE if the max MTU is exceeded or the number of sources blocks is greater than #GST_RTCP_MAX_BYE_SSRC_COUNT.
     */
    byeAddSsrc(ssrc: number): boolean
    /**
     * Adds `len` SSRCs in `ssrc` to BYE `packet`.
     * @param ssrc an array of SSRCs to add
     * @returns %TRUE if the all the SSRCs were added. This function can return %FALSE if the max MTU is exceeded or the number of sources blocks is greater than #GST_RTCP_MAX_BYE_SSRC_COUNT.
     */
    byeAddSsrcs(ssrc: number[]): boolean
    /**
     * Get the `nth` SSRC of the BYE `packet`.
     * @param nth the nth SSRC to get
     * @returns The @nth SSRC of @packet.
     */
    byeGetNthSsrc(nth: number): number
    /**
     * Get the reason in `packet`.
     * @returns The reason for the BYE @packet or NULL if the packet did not contain a reason string. The string must be freed with g_free() after usage.
     */
    byeGetReason(): string | null
    /**
     * Get the length of the reason string.
     * @returns The length of the reason string or 0 when there is no reason string present.
     */
    byeGetReasonLen(): number
    /**
     * Get the number of SSRC fields in `packet`.
     * @returns The number of SSRC fields in @packet.
     */
    byeGetSsrcCount(): number
    /**
     * Set the reason string to `reason` in `packet`.
     * @param reason a reason string
     * @returns TRUE if the string could be set.
     */
    byeSetReason(reason: string | null): boolean
    /**
     * The profile-specific extension data is copied into a new allocated
     * memory area `data`. This must be freed with g_free() after usage.
     * @returns %TRUE if there was valid data.
     */
    copyProfileSpecificExt(): [ /* returnType */ boolean, /* data */ Uint8Array ]
    /**
     * Get the Feedback Control Information attached to a RTPFB or PSFB `packet`.
     * @returns a pointer to the FCI
     */
    fbGetFci(): number
    /**
     * Get the length of the Feedback Control Information attached to a
     * RTPFB or PSFB `packet`.
     * @returns The length of the FCI in 32-bit words.
     */
    fbGetFciLength(): number
    /**
     * Get the media SSRC field of the RTPFB or PSFB `packet`.
     * @returns the media SSRC.
     */
    fbGetMediaSsrc(): number
    /**
     * Get the sender SSRC field of the RTPFB or PSFB `packet`.
     * @returns the sender SSRC.
     */
    fbGetSenderSsrc(): number
    /**
     * Get the feedback message type of the FB `packet`.
     * @returns The feedback message type.
     */
    fbGetType(): RTCPFBType
    /**
     * Set the length of the Feedback Control Information attached to a
     * RTPFB or PSFB `packet`.
     * @param wordlen Length of the FCI in 32-bit words
     * @returns %TRUE if there was enough space in the packet to add this much FCI
     */
    fbSetFciLength(wordlen: number): boolean
    /**
     * Set the media SSRC field of the RTPFB or PSFB `packet`.
     * @param ssrc a media SSRC
     */
    fbSetMediaSsrc(ssrc: number): void
    /**
     * Set the sender SSRC field of the RTPFB or PSFB `packet`.
     * @param ssrc a sender SSRC
     */
    fbSetSenderSsrc(ssrc: number): void
    /**
     * Set the feedback message type of the FB `packet`.
     * @param type the #GstRTCPFBType to set
     */
    fbSetType(type: RTCPFBType): void
    /**
     * Get the count field in `packet`.
     * @returns The count field in @packet or -1 if @packet does not point to a valid packet.
     */
    getCount(): number
    /**
     * Get the length field of `packet`. This is the length of the packet in
     * 32-bit words minus one.
     * @returns The length field of @packet.
     */
    getLength(): number
    /**
     * Get the packet padding of the packet pointed to by `packet`.
     * @returns If the packet has the padding bit set.
     */
    getPadding(): boolean
    getProfileSpecificExt(): [ /* returnType */ boolean, /* data */ Uint8Array ]
    getProfileSpecificExtLength(): number
    /**
     * Parse the values of the `nth` report block in `packet` and store the result in
     * the values.
     * @param nth the nth report block in `packet`
     */
    getRb(nth: number): [ /* ssrc */ number, /* fractionlost */ number, /* packetslost */ number, /* exthighestseq */ number, /* jitter */ number, /* lsr */ number, /* dlsr */ number ]
    /**
     * Get the number of report blocks in `packet`.
     * @returns The number of report blocks in @packet.
     */
    getRbCount(): number
    /**
     * Get the packet type of the packet pointed to by `packet`.
     * @returns The packet type or GST_RTCP_TYPE_INVALID when @packet is not pointing to a valid packet.
     */
    getType(): RTCPType
    /**
     * Move the packet pointer `packet` to the next packet in the payload.
     * Use gst_rtcp_buffer_get_first_packet() to initialize `packet`.
     * @returns TRUE if @packet is pointing to a valid packet after calling this function.
     */
    moveToNext(): boolean
    /**
     * Removes the packet pointed to by `packet` and moves pointer to the next one
     * @returns TRUE if @packet is pointing to a valid packet after calling this function.
     */
    remove(): boolean
    /**
     * Get the ssrc field of the RR `packet`.
     * @returns the ssrc.
     */
    rrGetSsrc(): number
    /**
     * Set the ssrc field of the RR `packet`.
     * @param ssrc the SSRC to set
     */
    rrSetSsrc(ssrc: number): void
    /**
     * Add a new SDES entry to the current item in `packet`.
     * @param type the #GstRTCPSDESType of the SDES entry
     * @param data the data
     * @returns %TRUE if the item could be added, %FALSE if the MTU has been reached.
     */
    sdesAddEntry(type: RTCPSDESType, data: Uint8Array): boolean
    /**
     * Add a new SDES item for `ssrc` to `packet`.
     * @param ssrc the SSRC of the new item to add
     * @returns %TRUE if the item could be added, %FALSE if the maximum amount of items has been exceeded for the SDES packet or the MTU has been reached.
     */
    sdesAddItem(ssrc: number): boolean
    /**
     * This function is like gst_rtcp_packet_sdes_get_entry() but it returns a
     * null-terminated copy of the data instead. use g_free() after usage.
     * @param type result of the entry type
     * @returns %TRUE if there was valid data.
     */
    sdesCopyEntry(type: RTCPSDESType): [ /* returnType */ boolean, /* data */ Uint8Array ]
    /**
     * Move to the first SDES entry in the current item.
     * @returns %TRUE if there was a first entry.
     */
    sdesFirstEntry(): boolean
    /**
     * Move to the first SDES item in `packet`.
     * @returns TRUE if there was a first item.
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
     * @param type result of the entry type
     * @returns %TRUE if there was valid data.
     */
    sdesGetEntry(type: RTCPSDESType): [ /* returnType */ boolean, /* data */ Uint8Array ]
    /**
     * Get the number of items in the SDES packet `packet`.
     * @returns The number of items in @packet.
     */
    sdesGetItemCount(): number
    /**
     * Get the SSRC of the current SDES item.
     * @returns the SSRC of the current item.
     */
    sdesGetSsrc(): number
    /**
     * Move to the next SDES entry in the current item.
     * @returns %TRUE if there was a next entry.
     */
    sdesNextEntry(): boolean
    /**
     * Move to the next SDES item in `packet`.
     * @returns TRUE if there was a next item.
     */
    sdesNextItem(): boolean
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
    setRb(nth: number, ssrc: number, fractionlost: number, packetslost: number, exthighestseq: number, jitter: number, lsr: number, dlsr: number): void
    /**
     * Parse the SR sender info and store the values.
     */
    srGetSenderInfo(): [ /* ssrc */ number, /* ntptime */ number, /* rtptime */ number, /* packetCount */ number, /* octetCount */ number ]
    /**
     * Set the given values in the SR packet `packet`.
     * @param ssrc the SSRC
     * @param ntptime the NTP time
     * @param rtptime the RTP time
     * @param packetCount the packet count
     * @param octetCount the octet count
     */
    srSetSenderInfo(ssrc: number, ntptime: number, rtptime: number, packetCount: number, octetCount: number): void
    /**
     * Move to the first extended report block in XR `packet`.
     * @returns TRUE if there was a first extended report block.
     */
    xrFirstRb(): boolean
    xrGetBlockLength(): number
    /**
     * Get the extended report block type of the XR `packet`.
     * @returns The extended report block type.
     */
    xrGetBlockType(): RTCPXRType
    /**
     * Parse the extended report block for DLRR report block type.
     * @param nth the index of sub-block to retrieve.
     * @param ssrc the SSRC of the receiver.
     * @param lastRr the last receiver reference timestamp of `ssrc`.
     * @param delay the delay since `last_rr`.
     * @returns %TRUE if the report block is correctly parsed.
     */
    xrGetDlrrBlock(nth: number, ssrc: number, lastRr: number, delay: number): boolean
    /**
     * Retrieve the packet receipt time of `seq` which ranges in [begin_seq, end_seq).
     * @param seq the sequence to retrieve the time.
     * @param receiptTime the packet receipt time of `seq`.
     * @returns %TRUE if the report block returns the receipt time correctly.
     */
    xrGetPrtBySeq(seq: number, receiptTime: number): boolean
    /**
     * Parse the Packet Recept Times Report Block from a XR `packet`
     * @param ssrc the SSRC of the RTP data packet source being reported upon by this report block.
     * @param thinning the amount of thinning performed on the sequence number space.
     * @param beginSeq the first sequence number that this block reports on.
     * @param endSeq the last sequence number that this block reports on plus one.
     * @returns %TRUE if the report block is correctly parsed.
     */
    xrGetPrtInfo(ssrc: number, thinning: number, beginSeq: number, endSeq: number): boolean
    /**
     * Parse the extended report block for Loss RLE and Duplicated LRE block type.
     * @param ssrc the SSRC of the RTP data packet source being reported upon by this report block.
     * @param thinning the amount of thinning performed on the sequence number space.
     * @param beginSeq the first sequence number that this block reports on.
     * @param endSeq the last sequence number that this block reports on plus one.
     * @param chunkCount the number of chunks calculated by block length.
     * @returns %TRUE if the report block is correctly parsed.
     */
    xrGetRleInfo(ssrc: number, thinning: number, beginSeq: number, endSeq: number, chunkCount: number): boolean
    /**
     * Retrieve actual chunk data.
     * @param nth the index of chunk to retrieve.
     * @param chunk the `nth` chunk.
     * @returns %TRUE if the report block returns chunk correctly.
     */
    xrGetRleNthChunk(nth: number, chunk: number): boolean
    xrGetRrt(timestamp: number): boolean
    /**
     * Get the ssrc field of the XR `packet`.
     * @returns the ssrc.
     */
    xrGetSsrc(): number
    /**
     * Extract a basic information from static summary report block of XR `packet`.
     * @param ssrc the SSRC of the source.
     * @param beginSeq the first sequence number that this block reports on.
     * @param endSeq the last sequence number that this block reports on plus one.
     * @returns %TRUE if the report block is correctly parsed.
     */
    xrGetSummaryInfo(ssrc: number, beginSeq: number, endSeq: number): boolean
    /**
     * Extract jitter information from the statistics summary. If the jitter flag in
     * a block header is set as zero, all of jitters will be zero.
     * @param minJitter the minimum relative transit time between two sequences.
     * @param maxJitter the maximum relative transit time between two sequences.
     * @param meanJitter the mean relative transit time between two sequences.
     * @param devJitter the standard deviation of the relative transit time between two sequences.
     * @returns %TRUE if the report block is correctly parsed.
     */
    xrGetSummaryJitter(minJitter: number, maxJitter: number, meanJitter: number, devJitter: number): boolean
    /**
     * Get the number of lost or duplicate packets. If the flag in a block header
     * is set as zero, `lost_packets` or `dup_packets` will be zero.
     * @param lostPackets the number of lost packets between begin_seq and end_seq.
     * @param dupPackets the number of duplicate packets between begin_seq and end_seq.
     * @returns %TRUE if the report block is correctly parsed.
     */
    xrGetSummaryPkt(lostPackets: number, dupPackets: number): boolean
    /**
     * Extract the value of ttl for ipv4, or hop limit for ipv6.
     * @param isIpv4 the flag to indicate that the return values are ipv4 ttl or ipv6 hop limits.
     * @param minTtl the minimum TTL or Hop Limit value of data packets between two sequences.
     * @param maxTtl the maximum TTL or Hop Limit value of data packets between two sequences.
     * @param meanTtl the mean TTL or Hop Limit value of data packets between two sequences.
     * @param devTtl the standard deviation of the TTL or Hop Limit value of data packets between two sequences.
     * @returns %TRUE if the report block is correctly parsed.
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
     * @returns TRUE if there was a next extended report block.
     */
    xrNextRb(): boolean
}

/**
 * Data structure that points to a packet at `offset` in `buffer`.
 * The size of the structure is made public to allow stack allocations.
 * @record 
 */
export class RTCPPacket {

    // Own properties of GstRtp-1.0.GstRtp.RTCPPacket

    static name: string
}

export interface RTPBaseAudioPayloadClass {

    // Own fields of GstRtp-1.0.GstRtp.RTPBaseAudioPayloadClass

    /**
     * the parent class
     * @field 
     */
    parentClass: RTPBasePayloadClass
}

/**
 * Base class for audio RTP payloader.
 * @record 
 */
export abstract class RTPBaseAudioPayloadClass {

    // Own properties of GstRtp-1.0.GstRtp.RTPBaseAudioPayloadClass

    static name: string
}

export interface RTPBaseAudioPayloadPrivate {
}

export class RTPBaseAudioPayloadPrivate {

    // Own properties of GstRtp-1.0.GstRtp.RTPBaseAudioPayloadPrivate

    static name: string
}

export interface RTPBaseDepayloadClass {

    // Own fields of GstRtp-1.0.GstRtp.RTPBaseDepayloadClass

    /**
     * the parent class
     * @field 
     */
    parentClass: Gst.ElementClass
    setCaps: (filter: RTPBaseDepayload, caps: Gst.Caps) => boolean
    process: (base: RTPBaseDepayload, in_: Gst.Buffer) => Gst.Buffer
    packetLost: (filter: RTPBaseDepayload, event: Gst.Event) => boolean
    handleEvent: (filter: RTPBaseDepayload, event: Gst.Event) => boolean
    processRtpPacket: (base: RTPBaseDepayload, rtpBuffer: RTPBuffer) => Gst.Buffer
}

/**
 * Base class for RTP depayloaders.
 * @record 
 */
export abstract class RTPBaseDepayloadClass {

    // Own properties of GstRtp-1.0.GstRtp.RTPBaseDepayloadClass

    static name: string
}

export interface RTPBaseDepayloadPrivate {
}

export class RTPBaseDepayloadPrivate {

    // Own properties of GstRtp-1.0.GstRtp.RTPBaseDepayloadPrivate

    static name: string
}

export interface RTPBasePayloadClass {

    // Own fields of GstRtp-1.0.GstRtp.RTPBasePayloadClass

    /**
     * the parent class
     * @field 
     */
    parentClass: Gst.ElementClass
    getCaps: (payload: RTPBasePayload, pad: Gst.Pad, filter: Gst.Caps) => Gst.Caps
    setCaps: (payload: RTPBasePayload, caps: Gst.Caps) => boolean
    handleBuffer: (payload: RTPBasePayload, buffer: Gst.Buffer) => Gst.FlowReturn
    sinkEvent: (payload: RTPBasePayload, event: Gst.Event) => boolean
    srcEvent: (payload: RTPBasePayload, event: Gst.Event) => boolean
    query: (payload: RTPBasePayload, pad: Gst.Pad, query: Gst.Query) => boolean
}

/**
 * Base class for audio RTP payloader.
 * @record 
 */
export abstract class RTPBasePayloadClass {

    // Own properties of GstRtp-1.0.GstRtp.RTPBasePayloadClass

    static name: string
}

export interface RTPBasePayloadPrivate {
}

export class RTPBasePayloadPrivate {

    // Own properties of GstRtp-1.0.GstRtp.RTPBasePayloadPrivate

    static name: string
}

export interface RTPBuffer {

    // Own fields of GstRtp-1.0.GstRtp.RTPBuffer

    /**
     * pointer to RTP buffer
     * @field 
     */
    buffer: Gst.Buffer
    /**
     * internal state
     * @field 
     */
    state: number
    /**
     * array of data
     * @field 
     */
    data: any[]
    /**
     * array of size
     * @field 
     */
    size: number[]
    /**
     * array of #GstMapInfo
     * @field 
     */
    map: Gst.MapInfo[]

    // Owm methods of GstRtp-1.0.GstRtp.RTPBuffer

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
     * @returns %TRUE if header extension could be added
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
     * @param appbits Application specific bits
     * @param id The ID of the header extension
     * @param data location for data
     * @returns %TRUE if header extension could be added
     */
    addExtensionTwobytesHeader(appbits: number, id: number, data: Uint8Array): boolean
    /**
     * Get the CSRC at index `idx` in `buffer`.
     * @param idx the index of the CSRC to get
     * @returns the CSRC at index @idx in host order.
     */
    getCsrc(idx: number): number
    /**
     * Get the CSRC count of the RTP packet in `buffer`.
     * @returns the CSRC count of @buffer.
     */
    getCsrcCount(): number
    /**
     * Check if the extension bit is set on the RTP packet in `buffer`.
     * @returns TRUE if @buffer has the extension bit set.
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
     * @returns A new #GBytes if an extension header was present and %NULL otherwise.
     */
    getExtensionData(): [ /* returnType */ any | null, /* bits */ number ]
    /**
     * Parses RFC 5285 style header extensions with a one byte header. It will
     * return the nth extension with the requested id.
     * @param id The ID of the header extension to be read (between 1 and 14).
     * @param nth Read the nth extension packet with the requested ID
     * @returns TRUE if @buffer had the requested header extension
     */
    getExtensionOnebyteHeader(id: number, nth: number): [ /* returnType */ boolean, /* data */ Uint8Array ]
    /**
     * Parses RFC 5285 style header extensions with a two bytes header. It will
     * return the nth extension with the requested id.
     * @param id The ID of the header extension to be read (between 1 and 14).
     * @param nth Read the nth extension packet with the requested ID
     * @returns TRUE if @buffer had the requested header extension
     */
    getExtensionTwobytesHeader(id: number, nth: number): [ /* returnType */ boolean, /* appbits */ number, /* data */ Uint8Array ]
    /**
     * Return the total length of the header in `buffer`. This include the length of
     * the fixed header, the CSRC list and the extension header.
     * @returns The total length of the header in @buffer.
     */
    getHeaderLen(): number
    /**
     * Check if the marker bit is set on the RTP packet in `buffer`.
     * @returns TRUE if @buffer has the marker bit set.
     */
    getMarker(): boolean
    /**
     * Return the total length of the packet in `buffer`.
     * @returns The total length of the packet in @buffer.
     */
    getPacketLen(): number
    /**
     * Check if the padding bit is set on the RTP packet in `buffer`.
     * @returns TRUE if @buffer has the padding bit set.
     */
    getPadding(): boolean
    /**
     * Create a buffer of the payload of the RTP packet in `buffer`. This function
     * will internally create a subbuffer of `buffer` so that a memcpy can be
     * avoided.
     * @returns A new buffer with the data of the payload.
     */
    getPayloadBuffer(): Gst.Buffer
    /**
     * Similar to gst_rtp_buffer_get_payload, but more suitable for language
     * bindings usage. The return value is a pointer to a #GBytes structure
     * containing the payload data in `rtp`.
     * @returns A new #GBytes containing the payload data in @rtp.
     */
    getPayload(): any | null
    /**
     * Get the length of the payload of the RTP packet in `buffer`.
     * @returns The length of the payload in @buffer.
     */
    getPayloadLen(): number
    /**
     * Create a subbuffer of the payload of the RTP packet in `buffer`. `offset` bytes
     * are skipped in the payload and the subbuffer will be of size `len`.
     * If `len` is -1 the total payload starting from `offset` is subbuffered.
     * @param offset the offset in the payload
     * @param len the length in the payload
     * @returns A new buffer with the specified data of the payload.
     */
    getPayloadSubbuffer(offset: number, len: number): Gst.Buffer
    /**
     * Get the payload type of the RTP packet in `buffer`.
     * @returns The payload type.
     */
    getPayloadType(): number
    /**
     * Get the sequence number of the RTP packet in `buffer`.
     * @returns The sequence number in host order.
     */
    getSeq(): number
    /**
     * Get the SSRC of the RTP packet in `buffer`.
     * @returns the SSRC of @buffer in host order.
     */
    getSsrc(): number
    /**
     * Get the timestamp of the RTP packet in `buffer`.
     * @returns The timestamp in host order.
     */
    getTimestamp(): number
    /**
     * Get the version number of the RTP packet in `buffer`.
     * @returns The version of @buffer.
     */
    getVersion(): number
    /**
     * Set the amount of padding in the RTP packet in `buffer` to
     * `len`. If `len` is 0, the padding is removed.
     * 
     * NOTE: This function does not work correctly.
     * @param len the new amount of padding
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
     * @param idx the CSRC index to set
     * @param csrc the CSRC in host order to set at `idx`
     */
    setCsrc(idx: number, csrc: number): void
    /**
     * Set the extension bit on the RTP packet in `buffer` to `extension`.
     * @param extension the new extension
     */
    setExtension(extension: boolean): void
    /**
     * Set the extension bit of the rtp buffer and fill in the `bits` and `length` of the
     * extension header. If the existing extension data is not large enough, it will
     * be made larger.
     * 
     * Will also shorten the extension data from 1.20.
     * @param bits the bits specific for the extension
     * @param length the length that counts the number of 32-bit words in the extension, excluding the extension header ( therefore zero is a valid length)
     * @returns True if done.
     */
    setExtensionData(bits: number, length: number): boolean
    /**
     * Set the marker bit on the RTP packet in `buffer` to `marker`.
     * @param marker the new marker
     */
    setMarker(marker: boolean): void
    /**
     * Set the total `rtp` size to `len`. The data in the buffer will be made
     * larger if needed. Any padding will be removed from the packet.
     * @param len the new packet length
     */
    setPacketLen(len: number): void
    /**
     * Set the padding bit on the RTP packet in `buffer` to `padding`.
     * @param padding the new padding
     */
    setPadding(padding: boolean): void
    /**
     * Set the payload type of the RTP packet in `buffer` to `payload_type`.
     * @param payloadType the new type
     */
    setPayloadType(payloadType: number): void
    /**
     * Set the sequence number of the RTP packet in `buffer` to `seq`.
     * @param seq the new sequence number
     */
    setSeq(seq: number): void
    /**
     * Set the SSRC on the RTP packet in `buffer` to `ssrc`.
     * @param ssrc the new SSRC
     */
    setSsrc(ssrc: number): void
    /**
     * Set the timestamp of the RTP packet in `buffer` to `timestamp`.
     * @param timestamp the new timestamp
     */
    setTimestamp(timestamp: number): void
    /**
     * Set the version of the RTP packet in `buffer` to `version`.
     * @param version the new version
     */
    setVersion(version: number): void
    /**
     * Unmap `rtp` previously mapped with gst_rtp_buffer_map().
     */
    unmap(): void
}

/**
 * The GstRTPBuffer helper functions makes it easy to parse and create regular
 * #GstBuffer objects that contain RTP payloads. These buffers are typically of
 * 'application/x-rtp' #GstCaps.
 * @record 
 */
export class RTPBuffer {

    // Own properties of GstRtp-1.0.GstRtp.RTPBuffer

    static name: string

    // Constructors of GstRtp-1.0.GstRtp.RTPBuffer

    /**
     * Allocate a new #GstBuffer with enough data to hold an RTP packet with
     * `csrc_count` CSRCs, a payload length of `payload_len` and padding of `pad_len`.
     * All other RTP header fields will be set to 0/FALSE.
     * @param payloadLen the length of the payload
     * @param padLen the amount of padding
     * @param csrcCount the number of CSRC entries
     * @returns A newly allocated buffer that can hold an RTP packet with given parameters.
     */
    static newAllocate(payloadLen: number, padLen: number, csrcCount: number): Gst.Buffer
    /**
     * Create a new #GstBuffer that can hold an RTP packet that is exactly
     * `packet_len` long. The length of the payload depends on `pad_len` and
     * `csrc_count` and can be calculated with gst_rtp_buffer_calc_payload_len().
     * All RTP header fields will be set to 0/FALSE.
     * @param packetLen the total length of the packet
     * @param padLen the amount of padding
     * @param csrcCount the number of CSRC entries
     * @returns A newly allocated buffer that can hold an RTP packet of @packet_len.
     */
    static newAllocateLen(packetLen: number, padLen: number, csrcCount: number): Gst.Buffer
    /**
     * Create a new buffer and set the data to a copy of `len`
     * bytes of `data` and the size to `len`. The data will be freed when the buffer
     * is freed.
     * @param data data for the new   buffer
     * @returns A newly allocated buffer with a copy of @data and of size @len.
     */
    static newCopyData(data: Uint8Array): Gst.Buffer
    /**
     * Create a new buffer and set the data and size of the buffer to `data` and `len`
     * respectively. `data` will be freed when the buffer is unreffed, so this
     * function transfers ownership of `data` to the new buffer.
     * @param data    data for the new buffer
     * @returns A newly allocated buffer with @data and of size @len.
     */
    static newTakeData(data: Uint8Array): Gst.Buffer
    /**
     * Allocate enough data in `buffer` to hold an RTP packet with `csrc_count` CSRCs,
     * a payload length of `payload_len` and padding of `pad_len`.
     * `buffer` must be writable and all previous memory in `buffer` will be freed.
     * If `pad_len` is >0, the padding bit will be set. All other RTP header fields
     * will be set to 0/FALSE.
     * @param buffer a #GstBuffer
     * @param payloadLen the length of the payload
     * @param padLen the amount of padding
     * @param csrcCount the number of CSRC entries
     */
    static allocateData(buffer: Gst.Buffer, payloadLen: number, padLen: number, csrcCount: number): void
    /**
     * Calculate the header length of an RTP packet with `csrc_count` CSRC entries.
     * An RTP packet can have at most 15 CSRC entries.
     * @param csrcCount the number of CSRC entries
     * @returns The length of an RTP header with @csrc_count CSRC entries.
     */
    static calcHeaderLen(csrcCount: number): number
    /**
     * Calculate the total length of an RTP packet with a payload size of `payload_len,`
     * a padding of `pad_len` and a `csrc_count` CSRC entries.
     * @param payloadLen the length of the payload
     * @param padLen the amount of padding
     * @param csrcCount the number of CSRC entries
     * @returns The total length of an RTP header with given parameters.
     */
    static calcPacketLen(payloadLen: number, padLen: number, csrcCount: number): number
    /**
     * Calculate the length of the payload of an RTP packet with size `packet_len,`
     * a padding of `pad_len` and a `csrc_count` CSRC entries.
     * @param packetLen the length of the total RTP packet
     * @param padLen the amount of padding
     * @param csrcCount the number of CSRC entries
     * @returns The length of the payload of an RTP packet  with given parameters.
     */
    static calcPayloadLen(packetLen: number, padLen: number, csrcCount: number): number
    /**
     * Compare two sequence numbers, taking care of wraparounds. This function
     * returns the difference between `seqnum1` and `seqnum2`.
     * @param seqnum1 a sequence number
     * @param seqnum2 a sequence number
     * @returns a negative value if @seqnum1 is bigger than @seqnum2, 0 if they are equal or a positive value if @seqnum1 is smaller than @segnum2.
     */
    static compareSeqnum(seqnum1: number, seqnum2: number): number
    /**
     * Get the default clock-rate for the static payload type `payload_type`.
     * @param payloadType the static payload type
     * @returns the default clock rate or -1 if the payload type is not static or the clock-rate is undefined.
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
     * @param exttimestamp a previous extended timestamp
     * @param timestamp a new timestamp
     * @returns The extended timestamp of @timestamp or 0 if the result can't go anywhere backwards.
     */
    static extTimestamp(exttimestamp: number, timestamp: number): [ /* returnType */ number, /* exttimestamp */ number ]
    /**
     * Similar to gst_rtp_buffer_get_extension_onebyte_header, but working
     * on the #GBytes you get from gst_rtp_buffer_get_extension_bytes.
     * Parses RFC 5285 style header extensions with a one byte header. It will
     * return the nth extension with the requested id.
     * @param bytes #GBytes
     * @param bitPattern The bit-pattern. Anything but 0xBEDE is rejected.
     * @param id The ID of the header extension to be read (between 1 and 14).
     * @param nth Read the nth extension packet with the requested ID
     * @returns TRUE if @bytes had the requested header extension
     */
    static getExtensionOnebyteHeaderFromBytes(bytes: any, bitPattern: number, id: number, nth: number): [ /* returnType */ boolean, /* data */ Uint8Array ]
    /**
     * Map the contents of `buffer` into `rtp`.
     * @param buffer a #GstBuffer
     * @param flags #GstMapFlags
     * @returns %TRUE if @buffer could be mapped.
     */
    static map(buffer: Gst.Buffer, flags: Gst.MapFlags): [ /* returnType */ boolean, /* rtp */ RTPBuffer ]
}

export interface RTPHeaderExtensionClass {

    // Own fields of GstRtp-1.0.GstRtp.RTPHeaderExtensionClass

    /**
     * the parent class
     * @field 
     */
    parentClass: Gst.ElementClass
    getSupportedFlags: (ext: RTPHeaderExtension) => RTPHeaderExtensionFlags
    getMaxSize: (ext: RTPHeaderExtension, inputMeta: Gst.Buffer) => number
    write: (ext: RTPHeaderExtension, inputMeta: Gst.Buffer, writeFlags: RTPHeaderExtensionFlags, output: Gst.Buffer, data: Uint8Array) => number
    read: (ext: RTPHeaderExtension, readFlags: RTPHeaderExtensionFlags, data: Uint8Array, buffer: Gst.Buffer) => boolean
    setNonRtpSinkCaps: (ext: RTPHeaderExtension, caps: Gst.Caps) => boolean
    updateNonRtpSrcCaps: (ext: RTPHeaderExtension, caps: Gst.Caps) => boolean
    setAttributes: (ext: RTPHeaderExtension, direction: RTPHeaderExtensionDirection, attributes: string | null) => boolean
    setCapsFromAttributes: (ext: RTPHeaderExtension, caps: Gst.Caps) => boolean
}

/**
 * Base class for RTP Header extensions.
 * @record 
 */
export abstract class RTPHeaderExtensionClass {

    // Own properties of GstRtp-1.0.GstRtp.RTPHeaderExtensionClass

    static name: string

    // Owm static methods of GstRtp-1.0.GstRtp.RTPHeaderExtensionClass

    /**
     * Set the URI for this RTP header extension implementation.
     * @param uri the RTP Header extension uri for `klass`
     */
    static setUri(klass: RTPHeaderExtension | Function | GObject.GType, uri: string | null): void
}

export interface RTPPayloadInfo {

    // Own fields of GstRtp-1.0.GstRtp.RTPPayloadInfo

    /**
     * payload type, -1 means dynamic
     * @field 
     */
    payloadType: number
    /**
     * the media type(s), usually "audio", "video", "application", "text",
     * "message".
     * @field 
     */
    media: string | null
    /**
     * the encoding name of `pt`
     * @field 
     */
    encodingName: string | null
    /**
     * default clock rate, 0 = unknown/variable
     * @field 
     */
    clockRate: number
    /**
     * encoding parameters. For audio this is the number of
     * channels. NULL = not applicable.
     * @field 
     */
    encodingParameters: string | null
    /**
     * the bitrate of the media. 0 = unknown/variable.
     * @field 
     */
    bitrate: number
}

/**
 * Structure holding default payload type information.
 * @record 
 */
export class RTPPayloadInfo {

    // Own properties of GstRtp-1.0.GstRtp.RTPPayloadInfo

    static name: string

    // Constructors of GstRtp-1.0.GstRtp.RTPPayloadInfo

    /**
     * Get the #GstRTPPayloadInfo for `media` and `encoding_name`. This function is
     * mostly used to get the default clock-rate and bandwidth for dynamic payload
     * types specified with `media` and `encoding` name.
     * 
     * The search for `encoding_name` will be performed in a case insensitive way.
     * @param media the media to find
     * @param encodingName the encoding name to find
     * @returns a #GstRTPPayloadInfo or NULL when no info could be found.
     */
    static forName(media: string | null, encodingName: string | null): RTPPayloadInfo | null
    /**
     * Get the #GstRTPPayloadInfo for `payload_type`. This function is
     * mostly used to get the default clock-rate and bandwidth for static payload
     * types specified with `payload_type`.
     * @param payloadType the payload_type to find
     * @returns a #GstRTPPayloadInfo or NULL when no info could be found.
     */
    static forPt(payloadType: number): RTPPayloadInfo | null
}

export interface RTPSourceMeta {

    // Own fields of GstRtp-1.0.GstRtp.RTPSourceMeta

    /**
     * parent #GstMeta
     * @field 
     */
    meta: Gst.Meta
    /**
     * the SSRC
     * @field 
     */
    ssrc: number
    /**
     * whether `ssrc` is set and valid
     * @field 
     */
    ssrcValid: boolean
    /**
     * pointer to the CSRCs
     * @field 
     */
    csrc: number[]
    /**
     * number of elements in `csrc`
     * @field 
     */
    csrcCount: number

    // Owm methods of GstRtp-1.0.GstRtp.RTPSourceMeta

    /**
     * Appends `csrc` to the list of contributing sources in `meta`.
     * @param csrc the csrcs to append
     * @returns %TRUE if all elements in @csrc was added, %FALSE otherwise.
     */
    appendCsrc(csrc: number[]): boolean
    /**
     * Count the total number of RTP sources found in `meta,` both SSRC and CSRC.
     * @returns The number of RTP sources
     */
    getSourceCount(): number
    /**
     * Sets `ssrc` in `meta`. If `ssrc` is %NULL the ssrc of `meta` will be unset.
     * @param ssrc pointer to the SSRC
     * @returns %TRUE on success, %FALSE otherwise.
     */
    setSsrc(ssrc: number | null): boolean
}

/**
 * Meta describing the source(s) of the buffer.
 * @record 
 */
export class RTPSourceMeta {

    // Own properties of GstRtp-1.0.GstRtp.RTPSourceMeta

    static name: string

    // Constructors of GstRtp-1.0.GstRtp.RTPSourceMeta

    static getInfo(): Gst.MetaInfo
}

// END