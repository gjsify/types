
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * GstRtp-1.0
 */

import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

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
 * @bitfield 
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
 * @bitfield 
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
 * @bitfield 
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
 * @bitfield 
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
 * Mask for version and packet type pair allowing reduced size
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
const RTP_HDREXT_BASE: string | null
/**
 * Constant string used in element classification to signal that this element
 * is a RTP header extension.
 */
const RTP_HDREXT_ELEMENT_CLASS: string | null
const RTP_HDREXT_NTP_56: string | null
const RTP_HDREXT_NTP_56_SIZE: number
const RTP_HDREXT_NTP_64: string | null
const RTP_HDREXT_NTP_64_SIZE: number
const RTP_HEADER_EXTENSION_URI_METADATA_KEY: string | null
const RTP_PAYLOAD_1016_STRING: string | null
const RTP_PAYLOAD_CELLB_STRING: string | null
const RTP_PAYLOAD_CN_STRING: string | null
const RTP_PAYLOAD_DVI4_11025_STRING: string | null
const RTP_PAYLOAD_DVI4_16000_STRING: string | null
const RTP_PAYLOAD_DVI4_22050_STRING: string | null
const RTP_PAYLOAD_DVI4_8000_STRING: string | null
const RTP_PAYLOAD_DYNAMIC_STRING: string | null
const RTP_PAYLOAD_G721_STRING: string | null
const RTP_PAYLOAD_G722_STRING: string | null
const RTP_PAYLOAD_G723_53: number
const RTP_PAYLOAD_G723_53_STRING: string | null
const RTP_PAYLOAD_G723_63: number
const RTP_PAYLOAD_G723_63_STRING: string | null
const RTP_PAYLOAD_G723_STRING: string | null
const RTP_PAYLOAD_G728_STRING: string | null
const RTP_PAYLOAD_G729_STRING: string | null
const RTP_PAYLOAD_GSM_STRING: string | null
const RTP_PAYLOAD_H261_STRING: string | null
const RTP_PAYLOAD_H263_STRING: string | null
const RTP_PAYLOAD_JPEG_STRING: string | null
const RTP_PAYLOAD_L16_MONO_STRING: string | null
const RTP_PAYLOAD_L16_STEREO_STRING: string | null
const RTP_PAYLOAD_LPC_STRING: string | null
const RTP_PAYLOAD_MP2T_STRING: string | null
const RTP_PAYLOAD_MPA_STRING: string | null
const RTP_PAYLOAD_MPV_STRING: string | null
const RTP_PAYLOAD_NV_STRING: string | null
const RTP_PAYLOAD_PCMA_STRING: string | null
const RTP_PAYLOAD_PCMU_STRING: string | null
const RTP_PAYLOAD_QCELP_STRING: string | null
const RTP_PAYLOAD_TS41: number
const RTP_PAYLOAD_TS41_STRING: string | null
const RTP_PAYLOAD_TS48: number
const RTP_PAYLOAD_TS48_STRING: string | null
const RTP_SOURCE_META_MAX_CSRC_COUNT: number
/**
 * The supported RTP version 2.
 */
const RTP_VERSION: number
/**
 * Attaches RTP source information to `buffer`.
 * @param buffer a #GstBuffer
 * @param ssrc pointer to the SSRC
 * @param csrc pointer to the CSRCs
 * @returns the #GstRTPSourceMeta on @buffer.
 */
function buffer_add_rtp_source_meta(buffer: Gst.Buffer, ssrc: number | null, csrc: number[] | null): RTPSourceMeta
/**
 * Find the #GstRTPSourceMeta on `buffer`.
 * @param buffer a #GstBuffer
 * @returns the #GstRTPSourceMeta or %NULL when there is no such metadata on @buffer.
 */
function buffer_get_rtp_source_meta(buffer: Gst.Buffer): RTPSourceMeta | null
/**
 * Open `buffer` for reading or writing, depending on `flags`. The resulting RTCP
 * buffer state is stored in `rtcp`.
 * @param buffer a buffer with an RTCP packet
 * @param flags flags for the mapping
 * @param rtcp resulting #GstRTCPBuffer
 */
function rtcp_buffer_map(buffer: Gst.Buffer, flags: Gst.MapFlags, rtcp: RTCPBuffer): boolean
/**
 * Create a new buffer for constructing RTCP packets. The packet will have a
 * maximum size of `mtu`.
 * @param mtu the maximum mtu size.
 * @returns A newly allocated buffer.
 */
function rtcp_buffer_new(mtu: number): Gst.Buffer
/**
 * Create a new buffer and set the data to a copy of `len`
 * bytes of `data` and the size to `len`. The data will be freed when the buffer
 * is freed.
 * @param data data for the new buffer
 * @returns A newly allocated buffer with a copy of @data and of size @len.
 */
function rtcp_buffer_new_copy_data(data: Uint8Array): Gst.Buffer
/**
 * Create a new buffer and set the data and size of the buffer to `data` and `len`
 * respectively. `data` will be freed when the buffer is unreffed, so this
 * function transfers ownership of `data` to the new buffer.
 * @param data data for the new buffer
 * @returns A newly allocated buffer with @data and of size @len.
 */
function rtcp_buffer_new_take_data(data: Uint8Array): Gst.Buffer
/**
 * Check if the data pointed to by `buffer` is a valid RTCP packet using
 * gst_rtcp_buffer_validate_data().
 * @param buffer the buffer to validate
 * @returns TRUE if @buffer is a valid RTCP packet.
 */
function rtcp_buffer_validate(buffer: Gst.Buffer): boolean
/**
 * Check if the `data` and `size` point to the data of a valid compound,
 * non-reduced size RTCP packet.
 * Use this function to validate a packet before using the other functions in
 * this module.
 * @param data the data to validate
 * @returns TRUE if the data points to a valid RTCP packet.
 */
function rtcp_buffer_validate_data(data: Uint8Array): boolean
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
function rtcp_buffer_validate_data_reduced(data: Uint8Array): boolean
/**
 * Check if the data pointed to by `buffer` is a valid RTCP packet using
 * gst_rtcp_buffer_validate_reduced().
 * @param buffer the buffer to validate
 * @returns TRUE if @buffer is a valid RTCP packet.
 */
function rtcp_buffer_validate_reduced(buffer: Gst.Buffer): boolean
/**
 * Converts an NTP time to UNIX nanoseconds. `ntptime` can typically be
 * the NTP time of an SR RTCP message and contains, in the upper 32 bits, the
 * number of seconds since 1900 and, in the lower 32 bits, the fractional
 * seconds. The resulting value will be the number of nanoseconds since 1970.
 * @param ntptime an NTP timestamp
 * @returns the UNIX time for @ntptime in nanoseconds.
 */
function rtcp_ntp_to_unix(ntptime: number): number
/**
 * Convert `name` into a `GstRTCPSDESType`. `name` is typically a key in a
 * #GstStructure containing SDES items.
 * @param name a SDES name
 * @returns the #GstRTCPSDESType for @name or #GST_RTCP_SDES_PRIV when @name is a private sdes item.
 */
function rtcp_sdes_name_to_type(name: string | null): RTCPSDESType
/**
 * Converts `type` to the string equivalent. The string is typically used as a
 * key in a #GstStructure containing SDES items.
 * @param type a #GstRTCPSDESType
 * @returns the string equivalent of @type
 */
function rtcp_sdes_type_to_name(type: RTCPSDESType): string | null
/**
 * Converts a UNIX timestamp in nanoseconds to an NTP time. The caller should
 * pass a value with nanoseconds since 1970. The NTP time will, in the upper
 * 32 bits, contain the number of seconds since 1900 and, in the lower 32
 * bits, the fractional seconds. The resulting value can be used as an ntptime
 * for constructing SR RTCP packets.
 * @param unixtime an UNIX timestamp in nanoseconds
 * @returns the NTP time for @unixtime.
 */
function rtcp_unix_to_ntp(unixtime: number): number
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
function rtp_buffer_allocate_data(buffer: Gst.Buffer, payload_len: number, pad_len: number, csrc_count: number): void
/**
 * Calculate the header length of an RTP packet with `csrc_count` CSRC entries.
 * An RTP packet can have at most 15 CSRC entries.
 * @param csrc_count the number of CSRC entries
 * @returns The length of an RTP header with @csrc_count CSRC entries.
 */
function rtp_buffer_calc_header_len(csrc_count: number): number
/**
 * Calculate the total length of an RTP packet with a payload size of `payload_len,`
 * a padding of `pad_len` and a `csrc_count` CSRC entries.
 * @param payload_len the length of the payload
 * @param pad_len the amount of padding
 * @param csrc_count the number of CSRC entries
 * @returns The total length of an RTP header with given parameters.
 */
function rtp_buffer_calc_packet_len(payload_len: number, pad_len: number, csrc_count: number): number
/**
 * Calculate the length of the payload of an RTP packet with size `packet_len,`
 * a padding of `pad_len` and a `csrc_count` CSRC entries.
 * @param packet_len the length of the total RTP packet
 * @param pad_len the amount of padding
 * @param csrc_count the number of CSRC entries
 * @returns The length of the payload of an RTP packet  with given parameters.
 */
function rtp_buffer_calc_payload_len(packet_len: number, pad_len: number, csrc_count: number): number
/**
 * Compare two sequence numbers, taking care of wraparounds. This function
 * returns the difference between `seqnum1` and `seqnum2`.
 * @param seqnum1 a sequence number
 * @param seqnum2 a sequence number
 * @returns a negative value if @seqnum1 is bigger than @seqnum2, 0 if they are equal or a positive value if @seqnum1 is smaller than @segnum2.
 */
function rtp_buffer_compare_seqnum(seqnum1: number, seqnum2: number): number
/**
 * Get the default clock-rate for the static payload type `payload_type`.
 * @param payload_type the static payload type
 * @returns the default clock rate or -1 if the payload type is not static or the clock-rate is undefined.
 */
function rtp_buffer_default_clock_rate(payload_type: number): number
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
function rtp_buffer_ext_timestamp(exttimestamp: number, timestamp: number): [ /* returnType */ number, /* exttimestamp */ number ]
/**
 * Similar to gst_rtp_buffer_get_extension_onebyte_header, but working
 * on the #GBytes you get from gst_rtp_buffer_get_extension_bytes.
 * Parses RFC 5285 style header extensions with a one byte header. It will
 * return the nth extension with the requested id.
 * @param bytes #GBytes
 * @param bit_pattern The bit-pattern. Anything but 0xBEDE is rejected.
 * @param id The ID of the header extension to be read (between 1 and 14).
 * @param nth Read the nth extension packet with the requested ID
 * @returns TRUE if @bytes had the requested header extension
 */
function rtp_buffer_get_extension_onebyte_header_from_bytes(bytes: GLib.Bytes, bit_pattern: number, id: number, nth: number): [ /* returnType */ boolean, /* data */ Uint8Array ]
/**
 * Map the contents of `buffer` into `rtp`.
 * @param buffer a #GstBuffer
 * @param flags #GstMapFlags
 * @returns %TRUE if @buffer could be mapped.
 */
function rtp_buffer_map(buffer: Gst.Buffer, flags: Gst.MapFlags): [ /* returnType */ boolean, /* rtp */ RTPBuffer ]
/**
 * Allocate a new #GstBuffer with enough data to hold an RTP packet with
 * `csrc_count` CSRCs, a payload length of `payload_len` and padding of `pad_len`.
 * All other RTP header fields will be set to 0/FALSE.
 * @param payload_len the length of the payload
 * @param pad_len the amount of padding
 * @param csrc_count the number of CSRC entries
 * @returns A newly allocated buffer that can hold an RTP packet with given parameters.
 */
function rtp_buffer_new_allocate(payload_len: number, pad_len: number, csrc_count: number): Gst.Buffer
/**
 * Create a new #GstBuffer that can hold an RTP packet that is exactly
 * `packet_len` long. The length of the payload depends on `pad_len` and
 * `csrc_count` and can be calculated with gst_rtp_buffer_calc_payload_len().
 * All RTP header fields will be set to 0/FALSE.
 * @param packet_len the total length of the packet
 * @param pad_len the amount of padding
 * @param csrc_count the number of CSRC entries
 * @returns A newly allocated buffer that can hold an RTP packet of @packet_len.
 */
function rtp_buffer_new_allocate_len(packet_len: number, pad_len: number, csrc_count: number): Gst.Buffer
/**
 * Create a new buffer and set the data to a copy of `len`
 * bytes of `data` and the size to `len`. The data will be freed when the buffer
 * is freed.
 * @param data data for the new   buffer
 * @returns A newly allocated buffer with a copy of @data and of size @len.
 */
function rtp_buffer_new_copy_data(data: Uint8Array): Gst.Buffer
/**
 * Create a new buffer and set the data and size of the buffer to `data` and `len`
 * respectively. `data` will be freed when the buffer is unreffed, so this
 * function transfers ownership of `data` to the new buffer.
 * @param data    data for the new buffer
 * @returns A newly allocated buffer with @data and of size @len.
 */
function rtp_buffer_new_take_data(data: Uint8Array): Gst.Buffer
/**
 * Retrieve all the factories of the currently registered RTP header
 * extensions.  Call gst_element_factory_create() with each factory to create
 * the associated #GstRTPHeaderExtension.
 * @returns a #GList of     #GstElementFactory's. Use gst_plugin_feature_list_free() after use
 */
function rtp_get_header_extension_list(): Gst.ElementFactory[]
/**
 * Reads the NTP time from the `size` NTP-56 extension bytes in `data` and store the
 * result in `ntptime`.
 * @param data the data to read from
 * @returns %TRUE on success.
 */
function rtp_hdrext_get_ntp_56(data: Uint8Array): [ /* returnType */ boolean, /* ntptime */ number ]
/**
 * Reads the NTP time from the `size` NTP-64 extension bytes in `data` and store the
 * result in `ntptime`.
 * @param data the data to read from
 * @returns %TRUE on success.
 */
function rtp_hdrext_get_ntp_64(data: Uint8Array): [ /* returnType */ boolean, /* ntptime */ number ]
/**
 * Writes the NTP time in `ntptime` to the format required for the NTP-56 header
 * extension. `data` must hold at least #GST_RTP_HDREXT_NTP_56_SIZE bytes.
 * @param data the data to write to
 * @param size the size of `data`
 * @param ntptime the NTP time
 * @returns %TRUE on success.
 */
function rtp_hdrext_set_ntp_56(data: any | null, size: number, ntptime: number): boolean
/**
 * Writes the NTP time in `ntptime` to the format required for the NTP-64 header
 * extension. `data` must hold at least #GST_RTP_HDREXT_NTP_64_SIZE bytes.
 * @param data the data to write to
 * @param size the size of `data`
 * @param ntptime the NTP time
 * @returns %TRUE on success.
 */
function rtp_hdrext_set_ntp_64(data: any | null, size: number, ntptime: number): boolean
/**
 * Get the #GstRTPPayloadInfo for `media` and `encoding_name`. This function is
 * mostly used to get the default clock-rate and bandwidth for dynamic payload
 * types specified with `media` and `encoding` name.
 * 
 * The search for `encoding_name` will be performed in a case insensitive way.
 * @param media the media to find
 * @param encoding_name the encoding name to find
 * @returns a #GstRTPPayloadInfo or NULL when no info could be found.
 */
function rtp_payload_info_for_name(media: string | null, encoding_name: string | null): RTPPayloadInfo | null
/**
 * Get the #GstRTPPayloadInfo for `payload_type`. This function is
 * mostly used to get the default clock-rate and bandwidth for static payload
 * types specified with `payload_type`.
 * @param payload_type the payload_type to find
 * @returns a #GstRTPPayloadInfo or NULL when no info could be found.
 */
function rtp_payload_info_for_pt(payload_type: number): RTPPayloadInfo | null
function rtp_source_meta_api_get_type(): GObject.GType
function rtp_source_meta_get_info(): Gst.MetaInfo
module RTPBaseAudioPayload {

    // Constructor properties interface

    interface ConstructorProperties extends RTPBasePayload.ConstructorProperties {

        // Own constructor properties of GstRtp-1.0.GstRtp.RTPBaseAudioPayload

        buffer_list?: boolean | null
    }

}

interface RTPBaseAudioPayload {

    // Own properties of GstRtp-1.0.GstRtp.RTPBaseAudioPayload

    buffer_list: boolean

    // Conflicting properties

    object: any

    // Own fields of GstRtp-1.0.GstRtp.RTPBaseAudioPayload

    payload: RTPBasePayload
    priv: RTPBaseAudioPayloadPrivate
    base_ts: Gst.ClockTime
    frame_size: number
    frame_duration: number
    sample_size: number

    // Owm methods of GstRtp-1.0.GstRtp.RTPBaseAudioPayload

    /**
     * Create an RTP buffer and store `payload_len` bytes of the adapter as the
     * payload. Set the timestamp on the new buffer to `timestamp` before pushing
     * the buffer downstream.
     * 
     * If `payload_len` is -1, all pending bytes will be flushed. If `timestamp` is
     * -1, the timestamp will be calculated automatically.
     * @param payload_len length of payload
     * @param timestamp a #GstClockTime
     * @returns a #GstFlowReturn
     */
    flush(payload_len: number, timestamp: Gst.ClockTime): Gst.FlowReturn
    /**
     * Gets the internal adapter used by the depayloader.
     * @returns a #GstAdapter.
     */
    get_adapter(): GstBase.Adapter
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
    vfunc_query(pad: Gst.Pad, query: Gst.Query): boolean

    // Overloads of vfunc_query

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
    vfunc_query(query: Gst.Query): boolean
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
    vfunc_query(query: Gst.Query): boolean

    // Class property signals of GstRtp-1.0.GstRtp.RTPBaseAudioPayload

    connect(sigName: "notify::buffer-list", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::buffer-list", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::buffer-list", ...args: any[]): void
    connect(sigName: "notify::auto-header-extension", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-header-extension", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::auto-header-extension", ...args: any[]): void
    connect(sigName: "notify::max-ptime", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-ptime", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-ptime", ...args: any[]): void
    connect(sigName: "notify::min-ptime", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-ptime", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-ptime", ...args: any[]): void
    connect(sigName: "notify::mtu", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mtu", ...args: any[]): void
    connect(sigName: "notify::onvif-no-rate-control", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::onvif-no-rate-control", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::onvif-no-rate-control", ...args: any[]): void
    connect(sigName: "notify::perfect-rtptime", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::perfect-rtptime", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::perfect-rtptime", ...args: any[]): void
    connect(sigName: "notify::pt", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pt", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pt", ...args: any[]): void
    connect(sigName: "notify::ptime-multiple", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ptime-multiple", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ptime-multiple", ...args: any[]): void
    connect(sigName: "notify::scale-rtptime", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-rtptime", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-rtptime", ...args: any[]): void
    connect(sigName: "notify::seqnum", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seqnum", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::seqnum", ...args: any[]): void
    connect(sigName: "notify::seqnum-offset", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seqnum-offset", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::seqnum-offset", ...args: any[]): void
    connect(sigName: "notify::source-info", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-info", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::source-info", ...args: any[]): void
    connect(sigName: "notify::ssrc", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssrc", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ssrc", ...args: any[]): void
    connect(sigName: "notify::stats", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stats", ...args: any[]): void
    connect(sigName: "notify::timestamp", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::timestamp", ...args: any[]): void
    connect(sigName: "notify::timestamp-offset", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp-offset", callback: (($obj: RTPBaseAudioPayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::timestamp-offset", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
class RTPBaseAudioPayload extends RTPBasePayload {

    // Own properties of GstRtp-1.0.GstRtp.RTPBaseAudioPayload

    static name: string
    static $gtype: GObject.GType<RTPBaseAudioPayload>

    // Constructors of GstRtp-1.0.GstRtp.RTPBaseAudioPayload

    constructor(config?: RTPBaseAudioPayload.ConstructorProperties) 
    _init(config?: RTPBaseAudioPayload.ConstructorProperties): void
}

module RTPBaseDepayload {

    // Signal callback interfaces

    /**
     * Signal callback interface for `add-extension`
     */
    interface AddExtensionSignalCallback {
        ($obj: RTPBaseDepayload, ext: RTPHeaderExtension): void
    }

    /**
     * Signal callback interface for `clear-extensions`
     */
    interface ClearExtensionsSignalCallback {
        ($obj: RTPBaseDepayload): void
    }

    /**
     * Signal callback interface for `request-extension`
     */
    interface RequestExtensionSignalCallback {
        ($obj: RTPBaseDepayload, ext_id: number, ext_uri: string | null): RTPHeaderExtension | null
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gst.Element.ConstructorProperties {

        // Own constructor properties of GstRtp-1.0.GstRtp.RTPBaseDepayload

        /**
         * If enabled, the depayloader will automatically try to enable all the
         * RTP header extensions provided in the sink caps, saving the application
         * the need to handle these extensions manually using the
         * GstRTPBaseDepayload::request-extension: signal.
         */
        auto_header_extension?: boolean | null
        /**
         * Max seqnum reorder before the sender is assumed to have restarted.
         * 
         * When max-reorder is set to 0 all reordered/duplicate packets are
         * considered coming from a restarted sender.
         */
        max_reorder?: number | null
        /**
         * Add RTP source information found in RTP header as meta to output buffer.
         */
        source_info?: boolean | null
    }

}

interface RTPBaseDepayload {

    // Own properties of GstRtp-1.0.GstRtp.RTPBaseDepayload

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

    // Conflicting properties

    object: any

    // Own fields of GstRtp-1.0.GstRtp.RTPBaseDepayload

    parent: Gst.Element & Gst.Object
    sinkpad: Gst.Pad
    srcpad: Gst.Pad
    clock_rate: number
    segment: Gst.Segment
    need_newsegment: boolean

    // Owm methods of GstRtp-1.0.GstRtp.RTPBaseDepayload

    /**
     * Queries whether #GstRTPSourceMeta will be added to depayloaded buffers.
     * @returns %TRUE if source-info is enabled.
     */
    is_source_info_enabled(): boolean
    /**
     * Push `out_buf` to the peer of `filter`. This function takes ownership of
     * `out_buf`.
     * 
     * This function will by default apply the last incoming timestamp on
     * the outgoing buffer when it didn't have a timestamp already.
     * @param out_buf a #GstBuffer
     * @returns a #GstFlowReturn.
     */
    push(out_buf: Gst.Buffer): Gst.FlowReturn
    /**
     * Push `out_list` to the peer of `filter`. This function takes ownership of
     * `out_list`.
     * @param out_list a #GstBufferList
     * @returns a #GstFlowReturn.
     */
    push_list(out_list: Gst.BufferList): Gst.FlowReturn
    /**
     * Enable or disable adding #GstRTPSourceMeta to depayloaded buffers.
     * @param enable whether to add meta about RTP sources to buffer
     */
    set_source_info_enabled(enable: boolean): void

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

    vfunc_handle_event(event: Gst.Event): boolean
    vfunc_packet_lost(event: Gst.Event): boolean
    vfunc_process(in_: Gst.Buffer): Gst.Buffer
    vfunc_process_rtp_packet(rtp_buffer: RTPBuffer): Gst.Buffer
    vfunc_set_caps(caps: Gst.Caps): boolean

    // Own signals of GstRtp-1.0.GstRtp.RTPBaseDepayload

    connect(sigName: "add-extension", callback: RTPBaseDepayload.AddExtensionSignalCallback): number
    connect_after(sigName: "add-extension", callback: RTPBaseDepayload.AddExtensionSignalCallback): number
    emit(sigName: "add-extension", ext: RTPHeaderExtension, ...args: any[]): void
    connect(sigName: "clear-extensions", callback: RTPBaseDepayload.ClearExtensionsSignalCallback): number
    connect_after(sigName: "clear-extensions", callback: RTPBaseDepayload.ClearExtensionsSignalCallback): number
    emit(sigName: "clear-extensions", ...args: any[]): void
    connect(sigName: "request-extension", callback: RTPBaseDepayload.RequestExtensionSignalCallback): number
    connect_after(sigName: "request-extension", callback: RTPBaseDepayload.RequestExtensionSignalCallback): number
    emit(sigName: "request-extension", ext_id: number, ext_uri: string | null, ...args: any[]): void

    // Class property signals of GstRtp-1.0.GstRtp.RTPBaseDepayload

    connect(sigName: "notify::auto-header-extension", callback: (($obj: RTPBaseDepayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-header-extension", callback: (($obj: RTPBaseDepayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::auto-header-extension", ...args: any[]): void
    connect(sigName: "notify::max-reorder", callback: (($obj: RTPBaseDepayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-reorder", callback: (($obj: RTPBaseDepayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-reorder", ...args: any[]): void
    connect(sigName: "notify::source-info", callback: (($obj: RTPBaseDepayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-info", callback: (($obj: RTPBaseDepayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::source-info", ...args: any[]): void
    connect(sigName: "notify::stats", callback: (($obj: RTPBaseDepayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: (($obj: RTPBaseDepayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stats", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Provides a base class for RTP depayloaders
 * @class 
 */
class RTPBaseDepayload extends Gst.Element {

    // Own properties of GstRtp-1.0.GstRtp.RTPBaseDepayload

    static name: string
    static $gtype: GObject.GType<RTPBaseDepayload>

    // Constructors of GstRtp-1.0.GstRtp.RTPBaseDepayload

    constructor(config?: RTPBaseDepayload.ConstructorProperties) 
    _init(config?: RTPBaseDepayload.ConstructorProperties): void
}

module RTPBasePayload {

    // Signal callback interfaces

    /**
     * Signal callback interface for `add-extension`
     */
    interface AddExtensionSignalCallback {
        ($obj: RTPBasePayload, ext: RTPHeaderExtension): void
    }

    /**
     * Signal callback interface for `clear-extensions`
     */
    interface ClearExtensionsSignalCallback {
        ($obj: RTPBasePayload): void
    }

    /**
     * Signal callback interface for `request-extension`
     */
    interface RequestExtensionSignalCallback {
        ($obj: RTPBasePayload, ext_id: number, ext_uri: string | null): RTPHeaderExtension | null
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gst.Element.ConstructorProperties {

        // Own constructor properties of GstRtp-1.0.GstRtp.RTPBasePayload

        /**
         * If enabled, the payloader will automatically try to enable all the
         * RTP header extensions provided in the src caps, saving the application
         * the need to handle these extensions manually using the
         * GstRTPBasePayload::request-extension: signal.
         */
        auto_header_extension?: boolean | null
        max_ptime?: number | null
        /**
         * Minimum duration of the packet data in ns (can't go above MTU)
         */
        min_ptime?: number | null
        mtu?: number | null
        /**
         * Make the payloader timestamp packets according to the Rate-Control=no
         * behaviour specified in the ONVIF replay spec.
         */
        onvif_no_rate_control?: boolean | null
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
        perfect_rtptime?: boolean | null
        pt?: number | null
        /**
         * Force buffers to be multiples of this duration in ns (0 disables)
         */
        ptime_multiple?: number | null
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
        scale_rtptime?: boolean | null
        seqnum_offset?: number | null
        /**
         * Enable writing the CSRC field in allocated RTP header based on RTP source
         * information found in the input buffer's #GstRTPSourceMeta.
         */
        source_info?: boolean | null
        ssrc?: number | null
        timestamp_offset?: number | null
    }

}

interface RTPBasePayload {

    // Own properties of GstRtp-1.0.GstRtp.RTPBasePayload

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
     * @param payload_len the length of the payload
     * @param pad_len the amount of padding
     * @param csrc_count the minimum number of CSRC entries
     * @returns A newly allocated buffer that can hold an RTP packet with given parameters.
     */
    allocate_output_buffer(payload_len: number, pad_len: number, csrc_count: number): Gst.Buffer
    /**
     * Count the total number of RTP sources found in the meta of `buffer,` which
     * will be automically added by gst_rtp_base_payload_allocate_output_buffer().
     * If #GstRTPBasePayload:source-info is %FALSE the count will be 0.
     * @param buffer a #GstBuffer, typically the buffer to payload
     * @returns The number of sources.
     */
    get_source_count(buffer: Gst.Buffer): number
    /**
     * Check if the packet with `size` and `duration` would exceed the configured
     * maximum size.
     * @param size the size of the packet
     * @param duration the duration of the packet
     * @returns %TRUE if the packet of @size and @duration would exceed the configured MTU or max_ptime.
     */
    is_filled(size: number, duration: Gst.ClockTime): boolean
    /**
     * Queries whether the payloader will add contributing sources (CSRCs) to the
     * RTP header from #GstRTPSourceMeta.
     * @returns %TRUE if source-info is enabled.
     */
    is_source_info_enabled(): boolean
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
    set_options(media: string | null, dynamic: boolean, encoding_name: string | null, clock_rate: number): void
    /**
     * Configure the output caps with the optional fields.
     * @param s a #GstStructure with the caps fields
     * @returns %TRUE if the caps could be set.
     */
    set_outcaps_structure(s: Gst.Structure | null): boolean
    /**
     * Enable or disable adding contributing sources to RTP packets from
     * #GstRTPSourceMeta.
     * @param enable whether to add contributing sources to RTP packets
     */
    set_source_info_enabled(enable: boolean): void

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

    vfunc_get_caps(pad: Gst.Pad, filter: Gst.Caps): Gst.Caps
    vfunc_handle_buffer(buffer: Gst.Buffer): Gst.FlowReturn
    vfunc_query(pad: Gst.Pad, query: Gst.Query): boolean

    // Overloads of vfunc_query

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
    vfunc_query(query: Gst.Query): boolean
    vfunc_set_caps(caps: Gst.Caps): boolean
    vfunc_sink_event(event: Gst.Event): boolean
    vfunc_src_event(event: Gst.Event): boolean

    // Own signals of GstRtp-1.0.GstRtp.RTPBasePayload

    connect(sigName: "add-extension", callback: RTPBasePayload.AddExtensionSignalCallback): number
    connect_after(sigName: "add-extension", callback: RTPBasePayload.AddExtensionSignalCallback): number
    emit(sigName: "add-extension", ext: RTPHeaderExtension, ...args: any[]): void
    connect(sigName: "clear-extensions", callback: RTPBasePayload.ClearExtensionsSignalCallback): number
    connect_after(sigName: "clear-extensions", callback: RTPBasePayload.ClearExtensionsSignalCallback): number
    emit(sigName: "clear-extensions", ...args: any[]): void
    connect(sigName: "request-extension", callback: RTPBasePayload.RequestExtensionSignalCallback): number
    connect_after(sigName: "request-extension", callback: RTPBasePayload.RequestExtensionSignalCallback): number
    emit(sigName: "request-extension", ext_id: number, ext_uri: string | null, ...args: any[]): void

    // Class property signals of GstRtp-1.0.GstRtp.RTPBasePayload

    connect(sigName: "notify::auto-header-extension", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-header-extension", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::auto-header-extension", ...args: any[]): void
    connect(sigName: "notify::max-ptime", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-ptime", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-ptime", ...args: any[]): void
    connect(sigName: "notify::min-ptime", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-ptime", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-ptime", ...args: any[]): void
    connect(sigName: "notify::mtu", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mtu", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mtu", ...args: any[]): void
    connect(sigName: "notify::onvif-no-rate-control", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::onvif-no-rate-control", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::onvif-no-rate-control", ...args: any[]): void
    connect(sigName: "notify::perfect-rtptime", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::perfect-rtptime", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::perfect-rtptime", ...args: any[]): void
    connect(sigName: "notify::pt", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pt", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pt", ...args: any[]): void
    connect(sigName: "notify::ptime-multiple", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ptime-multiple", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ptime-multiple", ...args: any[]): void
    connect(sigName: "notify::scale-rtptime", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-rtptime", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-rtptime", ...args: any[]): void
    connect(sigName: "notify::seqnum", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seqnum", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::seqnum", ...args: any[]): void
    connect(sigName: "notify::seqnum-offset", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seqnum-offset", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::seqnum-offset", ...args: any[]): void
    connect(sigName: "notify::source-info", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source-info", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::source-info", ...args: any[]): void
    connect(sigName: "notify::ssrc", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssrc", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ssrc", ...args: any[]): void
    connect(sigName: "notify::stats", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::stats", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::stats", ...args: any[]): void
    connect(sigName: "notify::timestamp", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::timestamp", ...args: any[]): void
    connect(sigName: "notify::timestamp-offset", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp-offset", callback: (($obj: RTPBasePayload, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::timestamp-offset", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Provides a base class for RTP payloaders
 * @class 
 */
class RTPBasePayload extends Gst.Element {

    // Own properties of GstRtp-1.0.GstRtp.RTPBasePayload

    static name: string
    static $gtype: GObject.GType<RTPBasePayload>

    // Constructors of GstRtp-1.0.GstRtp.RTPBasePayload

    constructor(config?: RTPBasePayload.ConstructorProperties) 
    _init(config?: RTPBasePayload.ConstructorProperties): void
}

module RTPHeaderExtension {

    // Constructor properties interface

    interface ConstructorProperties extends Gst.Element.ConstructorProperties {
    }

}

interface RTPHeaderExtension {

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
     * @returns the maximum size of the data written by this extension
     */
    get_max_size(input_meta: Gst.Buffer): number
    get_sdp_caps_field_name(): string | null
    get_supported_flags(): RTPHeaderExtensionFlags
    get_uri(): string | null
    /**
     * Read the RTP header extension from `data`.
     * @param read_flags #GstRTPHeaderExtensionFlags for how the extension should               be written
     * @param data location to read the rtp header extension from
     * @param buffer a #GstBuffer to modify if necessary
     * @returns whether the extension could be read from @data
     */
    read(read_flags: RTPHeaderExtensionFlags, data: Uint8Array, buffer: Gst.Buffer): boolean
    /**
     * gst_rtp_header_extension_set_id() must have been called with a valid
     * extension id that is contained in these caps.
     * 
     * The only current known caps format is based on the SDP standard as produced
     * by gst_sdp_media_attributes_to_caps().
     * @param caps the #GstCaps to configure this extension with
     * @returns whether the @caps could be successfully set on @ext.
     */
    set_attributes_from_caps(caps: Gst.Caps): boolean
    /**
     * gst_rtp_header_extension_set_id() must have been called with a valid
     * extension id that is contained in these caps.
     * 
     * The only current known caps format is based on the SDP standard as produced
     * by gst_sdp_media_attributes_to_caps().
     * @param caps writable #GstCaps to modify
     * @returns whether the configured attributes on @ext can successfully be set on 	@caps
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
     * @returns whether the @ext attributes could be set on @caps.
     */
    set_caps_from_attributes_helper(caps: Gst.Caps, attributes: string | null): boolean
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
     * @returns Whether @caps could be read successfully
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
     * @returns whether @caps were modified successfully
     */
    update_non_rtp_src_caps(caps: Gst.Caps): boolean
    /**
     * Call this function after gst_rtp_header_extension_read() to check if
     * the depayloader's src caps need updating with data received in the last RTP
     * packet.
     * @returns Whether @ext wants to update depayloader's src caps.
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
     * @returns the size of the data written, < 0 on failure
     */
    write(input_meta: Gst.Buffer, write_flags: RTPHeaderExtensionFlags, output: Gst.Buffer, data: Uint8Array): number

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
     * @param input_meta a #GstBuffer
     * @returns the maximum size of the data written by this extension
     */
    vfunc_get_max_size(input_meta: Gst.Buffer): number
    vfunc_get_supported_flags(): RTPHeaderExtensionFlags
    /**
     * Read the RTP header extension from `data`.
     * @virtual 
     * @param read_flags #GstRTPHeaderExtensionFlags for how the extension should               be written
     * @param data location to read the rtp header extension from
     * @param buffer a #GstBuffer to modify if necessary
     * @returns whether the extension could be read from @data
     */
    vfunc_read(read_flags: RTPHeaderExtensionFlags, data: Uint8Array, buffer: Gst.Buffer): boolean
    vfunc_set_attributes(direction: RTPHeaderExtensionDirection, attributes: string | null): boolean
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
    vfunc_set_caps_from_attributes(caps: Gst.Caps): boolean
    /**
     * Passes RTP payloader's sink (i.e. not payloaded) `caps` to the header
     * extension.
     * @virtual 
     * @param caps sink #GstCaps
     * @returns Whether @caps could be read successfully
     */
    vfunc_set_non_rtp_sink_caps(caps: Gst.Caps): boolean
    /**
     * Updates depayloader src caps based on the information received in RTP header.
     * `caps` must be writable as this function may modify them.
     * @virtual 
     * @param caps src #GstCaps to modify
     * @returns whether @caps were modified successfully
     */
    vfunc_update_non_rtp_src_caps(caps: Gst.Caps): boolean
    /**
     * Writes the RTP header extension to `data` using information available from
     * the `input_meta`.  `data` will be sized to be at least the value returned
     * from gst_rtp_header_extension_get_max_size().
     * @virtual 
     * @param input_meta the input #GstBuffer to read information from if necessary
     * @param write_flags #GstRTPHeaderExtensionFlags for how the extension should               be written
     * @param output output RTP #GstBuffer
     * @param data location to write the rtp header extension into
     * @returns the size of the data written, < 0 on failure
     */
    vfunc_write(input_meta: Gst.Buffer, write_flags: RTPHeaderExtensionFlags, output: Gst.Buffer, data: Uint8Array): number

    // Class property signals of GstRtp-1.0.GstRtp.RTPHeaderExtension

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Instance struct for a RTP Audio/Video header extension.
 * @class 
 */
class RTPHeaderExtension extends Gst.Element {

    // Own properties of GstRtp-1.0.GstRtp.RTPHeaderExtension

    static name: string
    static $gtype: GObject.GType<RTPHeaderExtension>

    // Constructors of GstRtp-1.0.GstRtp.RTPHeaderExtension

    constructor(config?: RTPHeaderExtension.ConstructorProperties) 
    _init(config?: RTPHeaderExtension.ConstructorProperties): void
    static create_from_uri(uri: string | null): RTPHeaderExtension | null
    /**
     * Set the URI for this RTP header extension implementation.
     * @param uri the RTP Header extension uri for `klass`
     */
    static set_uri(klass: RTPHeaderExtension | Function | GObject.GType, uri: string | null): void
}

interface RTCPBuffer {

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
    add_packet(type: RTCPType, packet: RTCPPacket): boolean
    /**
     * Initialize a new #GstRTCPPacket pointer that points to the first packet in
     * `rtcp`.
     * @param packet a #GstRTCPPacket
     * @returns TRUE if the packet existed in @rtcp.
     */
    get_first_packet(packet: RTCPPacket): boolean
    /**
     * Get the number of RTCP packets in `rtcp`.
     * @returns the number of RTCP packets in @rtcp.
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
class RTCPBuffer {

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
    static new_copy_data(data: Uint8Array): Gst.Buffer
    /**
     * Create a new buffer and set the data and size of the buffer to `data` and `len`
     * respectively. `data` will be freed when the buffer is unreffed, so this
     * function transfers ownership of `data` to the new buffer.
     * @param data data for the new buffer
     * @returns A newly allocated buffer with @data and of size @len.
     */
    static new_take_data(data: Uint8Array): Gst.Buffer
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
     * @returns TRUE if the data points to a valid RTCP packet.
     */
    static validate_data_reduced(data: Uint8Array): boolean
    /**
     * Check if the data pointed to by `buffer` is a valid RTCP packet using
     * gst_rtcp_buffer_validate_reduced().
     * @param buffer the buffer to validate
     * @returns TRUE if @buffer is a valid RTCP packet.
     */
    static validate_reduced(buffer: Gst.Buffer): boolean
}

interface RTCPPacket {

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
     * @returns %TRUE if the packet was created. This function can return %FALSE if the max MTU is exceeded or the number of report blocks is greater than #GST_RTCP_MAX_RB_COUNT.
     */
    add_rb(ssrc: number, fractionlost: number, packetslost: number, exthighestseq: number, jitter: number, lsr: number, dlsr: number): boolean
    /**
     * Get the application-dependent data attached to a RTPFB or PSFB `packet`.
     * @returns A pointer to the data
     */
    app_get_data(): number
    /**
     * Get the length of the application-dependent data attached to an APP
     * `packet`.
     * @returns The length of data in 32-bit words.
     */
    app_get_data_length(): number
    /**
     * Get the name field of the APP `packet`.
     * @returns The 4-byte name field, not zero-terminated.
     */
    app_get_name(): string | null
    /**
     * Get the SSRC/CSRC field of the APP `packet`.
     * @returns The SSRC/CSRC.
     */
    app_get_ssrc(): number
    /**
     * Get the subtype field of the APP `packet`.
     * @returns The subtype.
     */
    app_get_subtype(): number
    /**
     * Set the length of the application-dependent data attached to an APP
     * `packet`.
     * @param wordlen Length of the data in 32-bit words
     * @returns %TRUE if there was enough space in the packet to add this much data.
     */
    app_set_data_length(wordlen: number): boolean
    /**
     * Set the name field of the APP `packet`.
     * @param name 4-byte ASCII name
     */
    app_set_name(name: string | null): void
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
     * @returns %TRUE if the ssrc was added. This function can return %FALSE if the max MTU is exceeded or the number of sources blocks is greater than #GST_RTCP_MAX_BYE_SSRC_COUNT.
     */
    bye_add_ssrc(ssrc: number): boolean
    /**
     * Adds `len` SSRCs in `ssrc` to BYE `packet`.
     * @param ssrc an array of SSRCs to add
     * @returns %TRUE if the all the SSRCs were added. This function can return %FALSE if the max MTU is exceeded or the number of sources blocks is greater than #GST_RTCP_MAX_BYE_SSRC_COUNT.
     */
    bye_add_ssrcs(ssrc: number[]): boolean
    /**
     * Get the `nth` SSRC of the BYE `packet`.
     * @param nth the nth SSRC to get
     * @returns The @nth SSRC of @packet.
     */
    bye_get_nth_ssrc(nth: number): number
    /**
     * Get the reason in `packet`.
     * @returns The reason for the BYE @packet or NULL if the packet did not contain a reason string. The string must be freed with g_free() after usage.
     */
    bye_get_reason(): string | null
    /**
     * Get the length of the reason string.
     * @returns The length of the reason string or 0 when there is no reason string present.
     */
    bye_get_reason_len(): number
    /**
     * Get the number of SSRC fields in `packet`.
     * @returns The number of SSRC fields in @packet.
     */
    bye_get_ssrc_count(): number
    /**
     * Set the reason string to `reason` in `packet`.
     * @param reason a reason string
     * @returns TRUE if the string could be set.
     */
    bye_set_reason(reason: string | null): boolean
    /**
     * The profile-specific extension data is copied into a new allocated
     * memory area `data`. This must be freed with g_free() after usage.
     * @returns %TRUE if there was valid data.
     */
    copy_profile_specific_ext(): [ /* returnType */ boolean, /* data */ Uint8Array ]
    /**
     * Get the Feedback Control Information attached to a RTPFB or PSFB `packet`.
     * @returns a pointer to the FCI
     */
    fb_get_fci(): number
    /**
     * Get the length of the Feedback Control Information attached to a
     * RTPFB or PSFB `packet`.
     * @returns The length of the FCI in 32-bit words.
     */
    fb_get_fci_length(): number
    /**
     * Get the media SSRC field of the RTPFB or PSFB `packet`.
     * @returns the media SSRC.
     */
    fb_get_media_ssrc(): number
    /**
     * Get the sender SSRC field of the RTPFB or PSFB `packet`.
     * @returns the sender SSRC.
     */
    fb_get_sender_ssrc(): number
    /**
     * Get the feedback message type of the FB `packet`.
     * @returns The feedback message type.
     */
    fb_get_type(): RTCPFBType
    /**
     * Set the length of the Feedback Control Information attached to a
     * RTPFB or PSFB `packet`.
     * @param wordlen Length of the FCI in 32-bit words
     * @returns %TRUE if there was enough space in the packet to add this much FCI
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
     * @returns The count field in @packet or -1 if @packet does not point to a valid packet.
     */
    get_count(): number
    /**
     * Get the length field of `packet`. This is the length of the packet in
     * 32-bit words minus one.
     * @returns The length field of @packet.
     */
    get_length(): number
    /**
     * Get the packet padding of the packet pointed to by `packet`.
     * @returns If the packet has the padding bit set.
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
     * @returns The number of report blocks in @packet.
     */
    get_rb_count(): number
    /**
     * Get the packet type of the packet pointed to by `packet`.
     * @returns The packet type or GST_RTCP_TYPE_INVALID when @packet is not pointing to a valid packet.
     */
    get_type(): RTCPType
    /**
     * Move the packet pointer `packet` to the next packet in the payload.
     * Use gst_rtcp_buffer_get_first_packet() to initialize `packet`.
     * @returns TRUE if @packet is pointing to a valid packet after calling this function.
     */
    move_to_next(): boolean
    /**
     * Removes the packet pointed to by `packet` and moves pointer to the next one
     * @returns TRUE if @packet is pointing to a valid packet after calling this function.
     */
    remove(): boolean
    /**
     * Get the ssrc field of the RR `packet`.
     * @returns the ssrc.
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
     * @returns %TRUE if the item could be added, %FALSE if the MTU has been reached.
     */
    sdes_add_entry(type: RTCPSDESType, data: Uint8Array): boolean
    /**
     * Add a new SDES item for `ssrc` to `packet`.
     * @param ssrc the SSRC of the new item to add
     * @returns %TRUE if the item could be added, %FALSE if the maximum amount of items has been exceeded for the SDES packet or the MTU has been reached.
     */
    sdes_add_item(ssrc: number): boolean
    /**
     * This function is like gst_rtcp_packet_sdes_get_entry() but it returns a
     * null-terminated copy of the data instead. use g_free() after usage.
     * @param type result of the entry type
     * @returns %TRUE if there was valid data.
     */
    sdes_copy_entry(type: RTCPSDESType): [ /* returnType */ boolean, /* data */ Uint8Array ]
    /**
     * Move to the first SDES entry in the current item.
     * @returns %TRUE if there was a first entry.
     */
    sdes_first_entry(): boolean
    /**
     * Move to the first SDES item in `packet`.
     * @returns TRUE if there was a first item.
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
     * @returns %TRUE if there was valid data.
     */
    sdes_get_entry(type: RTCPSDESType): [ /* returnType */ boolean, /* data */ Uint8Array ]
    /**
     * Get the number of items in the SDES packet `packet`.
     * @returns The number of items in @packet.
     */
    sdes_get_item_count(): number
    /**
     * Get the SSRC of the current SDES item.
     * @returns the SSRC of the current item.
     */
    sdes_get_ssrc(): number
    /**
     * Move to the next SDES entry in the current item.
     * @returns %TRUE if there was a next entry.
     */
    sdes_next_entry(): boolean
    /**
     * Move to the next SDES item in `packet`.
     * @returns TRUE if there was a next item.
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
     * @returns TRUE if there was a first extended report block.
     */
    xr_first_rb(): boolean
    xr_get_block_length(): number
    /**
     * Get the extended report block type of the XR `packet`.
     * @returns The extended report block type.
     */
    xr_get_block_type(): RTCPXRType
    /**
     * Parse the extended report block for DLRR report block type.
     * @param nth the index of sub-block to retrieve.
     * @param ssrc the SSRC of the receiver.
     * @param last_rr the last receiver reference timestamp of `ssrc`.
     * @param delay the delay since `last_rr`.
     * @returns %TRUE if the report block is correctly parsed.
     */
    xr_get_dlrr_block(nth: number, ssrc: number, last_rr: number, delay: number): boolean
    /**
     * Retrieve the packet receipt time of `seq` which ranges in [begin_seq, end_seq).
     * @param seq the sequence to retrieve the time.
     * @param receipt_time the packet receipt time of `seq`.
     * @returns %TRUE if the report block returns the receipt time correctly.
     */
    xr_get_prt_by_seq(seq: number, receipt_time: number): boolean
    /**
     * Parse the Packet Recept Times Report Block from a XR `packet`
     * @param ssrc the SSRC of the RTP data packet source being reported upon by this report block.
     * @param thinning the amount of thinning performed on the sequence number space.
     * @param begin_seq the first sequence number that this block reports on.
     * @param end_seq the last sequence number that this block reports on plus one.
     * @returns %TRUE if the report block is correctly parsed.
     */
    xr_get_prt_info(ssrc: number, thinning: number, begin_seq: number, end_seq: number): boolean
    /**
     * Parse the extended report block for Loss RLE and Duplicated LRE block type.
     * @param ssrc the SSRC of the RTP data packet source being reported upon by this report block.
     * @param thinning the amount of thinning performed on the sequence number space.
     * @param begin_seq the first sequence number that this block reports on.
     * @param end_seq the last sequence number that this block reports on plus one.
     * @param chunk_count the number of chunks calculated by block length.
     * @returns %TRUE if the report block is correctly parsed.
     */
    xr_get_rle_info(ssrc: number, thinning: number, begin_seq: number, end_seq: number, chunk_count: number): boolean
    /**
     * Retrieve actual chunk data.
     * @param nth the index of chunk to retrieve.
     * @param chunk the `nth` chunk.
     * @returns %TRUE if the report block returns chunk correctly.
     */
    xr_get_rle_nth_chunk(nth: number, chunk: number): boolean
    xr_get_rrt(timestamp: number): boolean
    /**
     * Get the ssrc field of the XR `packet`.
     * @returns the ssrc.
     */
    xr_get_ssrc(): number
    /**
     * Extract a basic information from static summary report block of XR `packet`.
     * @param ssrc the SSRC of the source.
     * @param begin_seq the first sequence number that this block reports on.
     * @param end_seq the last sequence number that this block reports on plus one.
     * @returns %TRUE if the report block is correctly parsed.
     */
    xr_get_summary_info(ssrc: number, begin_seq: number, end_seq: number): boolean
    /**
     * Extract jitter information from the statistics summary. If the jitter flag in
     * a block header is set as zero, all of jitters will be zero.
     * @param min_jitter the minimum relative transit time between two sequences.
     * @param max_jitter the maximum relative transit time between two sequences.
     * @param mean_jitter the mean relative transit time between two sequences.
     * @param dev_jitter the standard deviation of the relative transit time between two sequences.
     * @returns %TRUE if the report block is correctly parsed.
     */
    xr_get_summary_jitter(min_jitter: number, max_jitter: number, mean_jitter: number, dev_jitter: number): boolean
    /**
     * Get the number of lost or duplicate packets. If the flag in a block header
     * is set as zero, `lost_packets` or `dup_packets` will be zero.
     * @param lost_packets the number of lost packets between begin_seq and end_seq.
     * @param dup_packets the number of duplicate packets between begin_seq and end_seq.
     * @returns %TRUE if the report block is correctly parsed.
     */
    xr_get_summary_pkt(lost_packets: number, dup_packets: number): boolean
    /**
     * Extract the value of ttl for ipv4, or hop limit for ipv6.
     * @param is_ipv4 the flag to indicate that the return values are ipv4 ttl or ipv6 hop limits.
     * @param min_ttl the minimum TTL or Hop Limit value of data packets between two sequences.
     * @param max_ttl the maximum TTL or Hop Limit value of data packets between two sequences.
     * @param mean_ttl the mean TTL or Hop Limit value of data packets between two sequences.
     * @param dev_ttl the standard deviation of the TTL or Hop Limit value of data packets between two sequences.
     * @returns %TRUE if the report block is correctly parsed.
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
     * @returns TRUE if there was a next extended report block.
     */
    xr_next_rb(): boolean
}

/**
 * Data structure that points to a packet at `offset` in `buffer`.
 * The size of the structure is made public to allow stack allocations.
 * @record 
 */
class RTCPPacket {

    // Own properties of GstRtp-1.0.GstRtp.RTCPPacket

    static name: string
}

interface RTPBaseAudioPayloadClass {

    // Own fields of GstRtp-1.0.GstRtp.RTPBaseAudioPayloadClass

    /**
     * the parent class
     * @field 
     */
    parent_class: RTPBasePayloadClass
}

/**
 * Base class for audio RTP payloader.
 * @record 
 */
abstract class RTPBaseAudioPayloadClass {

    // Own properties of GstRtp-1.0.GstRtp.RTPBaseAudioPayloadClass

    static name: string
}

interface RTPBaseAudioPayloadPrivate {
}

class RTPBaseAudioPayloadPrivate {

    // Own properties of GstRtp-1.0.GstRtp.RTPBaseAudioPayloadPrivate

    static name: string
}

interface RTPBaseDepayloadClass {

    // Own fields of GstRtp-1.0.GstRtp.RTPBaseDepayloadClass

    /**
     * the parent class
     * @field 
     */
    parent_class: Gst.ElementClass
    set_caps: (filter: RTPBaseDepayload, caps: Gst.Caps) => boolean
    process: (base: RTPBaseDepayload, in_: Gst.Buffer) => Gst.Buffer
    packet_lost: (filter: RTPBaseDepayload, event: Gst.Event) => boolean
    handle_event: (filter: RTPBaseDepayload, event: Gst.Event) => boolean
    process_rtp_packet: (base: RTPBaseDepayload, rtp_buffer: RTPBuffer) => Gst.Buffer
}

/**
 * Base class for RTP depayloaders.
 * @record 
 */
abstract class RTPBaseDepayloadClass {

    // Own properties of GstRtp-1.0.GstRtp.RTPBaseDepayloadClass

    static name: string
}

interface RTPBaseDepayloadPrivate {
}

class RTPBaseDepayloadPrivate {

    // Own properties of GstRtp-1.0.GstRtp.RTPBaseDepayloadPrivate

    static name: string
}

interface RTPBasePayloadClass {

    // Own fields of GstRtp-1.0.GstRtp.RTPBasePayloadClass

    /**
     * the parent class
     * @field 
     */
    parent_class: Gst.ElementClass
    get_caps: (payload: RTPBasePayload, pad: Gst.Pad, filter: Gst.Caps) => Gst.Caps
    set_caps: (payload: RTPBasePayload, caps: Gst.Caps) => boolean
    handle_buffer: (payload: RTPBasePayload, buffer: Gst.Buffer) => Gst.FlowReturn
    sink_event: (payload: RTPBasePayload, event: Gst.Event) => boolean
    src_event: (payload: RTPBasePayload, event: Gst.Event) => boolean
    query: (payload: RTPBasePayload, pad: Gst.Pad, query: Gst.Query) => boolean
}

/**
 * Base class for audio RTP payloader.
 * @record 
 */
abstract class RTPBasePayloadClass {

    // Own properties of GstRtp-1.0.GstRtp.RTPBasePayloadClass

    static name: string
}

interface RTPBasePayloadPrivate {
}

class RTPBasePayloadPrivate {

    // Own properties of GstRtp-1.0.GstRtp.RTPBasePayloadPrivate

    static name: string
}

interface RTPBuffer {

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
     * @returns %TRUE if header extension could be added
     */
    add_extension_twobytes_header(appbits: number, id: number, data: Uint8Array): boolean
    /**
     * Get the CSRC at index `idx` in `buffer`.
     * @param idx the index of the CSRC to get
     * @returns the CSRC at index @idx in host order.
     */
    get_csrc(idx: number): number
    /**
     * Get the CSRC count of the RTP packet in `buffer`.
     * @returns the CSRC count of @buffer.
     */
    get_csrc_count(): number
    /**
     * Check if the extension bit is set on the RTP packet in `buffer`.
     * @returns TRUE if @buffer has the extension bit set.
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
     * @returns A new #GBytes if an extension header was present and %NULL otherwise.
     */
    get_extension_data(): [ /* returnType */ GLib.Bytes | null, /* bits */ number ]
    /**
     * Parses RFC 5285 style header extensions with a one byte header. It will
     * return the nth extension with the requested id.
     * @param id The ID of the header extension to be read (between 1 and 14).
     * @param nth Read the nth extension packet with the requested ID
     * @returns TRUE if @buffer had the requested header extension
     */
    get_extension_onebyte_header(id: number, nth: number): [ /* returnType */ boolean, /* data */ Uint8Array ]
    /**
     * Parses RFC 5285 style header extensions with a two bytes header. It will
     * return the nth extension with the requested id.
     * @param id The ID of the header extension to be read (between 1 and 14).
     * @param nth Read the nth extension packet with the requested ID
     * @returns TRUE if @buffer had the requested header extension
     */
    get_extension_twobytes_header(id: number, nth: number): [ /* returnType */ boolean, /* appbits */ number, /* data */ Uint8Array ]
    /**
     * Return the total length of the header in `buffer`. This include the length of
     * the fixed header, the CSRC list and the extension header.
     * @returns The total length of the header in @buffer.
     */
    get_header_len(): number
    /**
     * Check if the marker bit is set on the RTP packet in `buffer`.
     * @returns TRUE if @buffer has the marker bit set.
     */
    get_marker(): boolean
    /**
     * Return the total length of the packet in `buffer`.
     * @returns The total length of the packet in @buffer.
     */
    get_packet_len(): number
    /**
     * Check if the padding bit is set on the RTP packet in `buffer`.
     * @returns TRUE if @buffer has the padding bit set.
     */
    get_padding(): boolean
    /**
     * Create a buffer of the payload of the RTP packet in `buffer`. This function
     * will internally create a subbuffer of `buffer` so that a memcpy can be
     * avoided.
     * @returns A new buffer with the data of the payload.
     */
    get_payload_buffer(): Gst.Buffer
    /**
     * Similar to gst_rtp_buffer_get_payload, but more suitable for language
     * bindings usage. The return value is a pointer to a #GBytes structure
     * containing the payload data in `rtp`.
     * @returns A new #GBytes containing the payload data in @rtp.
     */
    get_payload(): GLib.Bytes | null
    /**
     * Get the length of the payload of the RTP packet in `buffer`.
     * @returns The length of the payload in @buffer.
     */
    get_payload_len(): number
    /**
     * Create a subbuffer of the payload of the RTP packet in `buffer`. `offset` bytes
     * are skipped in the payload and the subbuffer will be of size `len`.
     * If `len` is -1 the total payload starting from `offset` is subbuffered.
     * @param offset the offset in the payload
     * @param len the length in the payload
     * @returns A new buffer with the specified data of the payload.
     */
    get_payload_subbuffer(offset: number, len: number): Gst.Buffer
    /**
     * Get the payload type of the RTP packet in `buffer`.
     * @returns The payload type.
     */
    get_payload_type(): number
    /**
     * Get the sequence number of the RTP packet in `buffer`.
     * @returns The sequence number in host order.
     */
    get_seq(): number
    /**
     * Get the SSRC of the RTP packet in `buffer`.
     * @returns the SSRC of @buffer in host order.
     */
    get_ssrc(): number
    /**
     * Get the timestamp of the RTP packet in `buffer`.
     * @returns The timestamp in host order.
     */
    get_timestamp(): number
    /**
     * Get the version number of the RTP packet in `buffer`.
     * @returns The version of @buffer.
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
     * @returns True if done.
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
}

/**
 * The GstRTPBuffer helper functions makes it easy to parse and create regular
 * #GstBuffer objects that contain RTP payloads. These buffers are typically of
 * 'application/x-rtp' #GstCaps.
 * @record 
 */
class RTPBuffer {

    // Own properties of GstRtp-1.0.GstRtp.RTPBuffer

    static name: string

    // Constructors of GstRtp-1.0.GstRtp.RTPBuffer

    /**
     * Allocate a new #GstBuffer with enough data to hold an RTP packet with
     * `csrc_count` CSRCs, a payload length of `payload_len` and padding of `pad_len`.
     * All other RTP header fields will be set to 0/FALSE.
     * @param payload_len the length of the payload
     * @param pad_len the amount of padding
     * @param csrc_count the number of CSRC entries
     * @returns A newly allocated buffer that can hold an RTP packet with given parameters.
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
     * @returns A newly allocated buffer that can hold an RTP packet of @packet_len.
     */
    static new_allocate_len(packet_len: number, pad_len: number, csrc_count: number): Gst.Buffer
    /**
     * Create a new buffer and set the data to a copy of `len`
     * bytes of `data` and the size to `len`. The data will be freed when the buffer
     * is freed.
     * @param data data for the new   buffer
     * @returns A newly allocated buffer with a copy of @data and of size @len.
     */
    static new_copy_data(data: Uint8Array): Gst.Buffer
    /**
     * Create a new buffer and set the data and size of the buffer to `data` and `len`
     * respectively. `data` will be freed when the buffer is unreffed, so this
     * function transfers ownership of `data` to the new buffer.
     * @param data    data for the new buffer
     * @returns A newly allocated buffer with @data and of size @len.
     */
    static new_take_data(data: Uint8Array): Gst.Buffer
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
     * @returns The length of an RTP header with @csrc_count CSRC entries.
     */
    static calc_header_len(csrc_count: number): number
    /**
     * Calculate the total length of an RTP packet with a payload size of `payload_len,`
     * a padding of `pad_len` and a `csrc_count` CSRC entries.
     * @param payload_len the length of the payload
     * @param pad_len the amount of padding
     * @param csrc_count the number of CSRC entries
     * @returns The total length of an RTP header with given parameters.
     */
    static calc_packet_len(payload_len: number, pad_len: number, csrc_count: number): number
    /**
     * Calculate the length of the payload of an RTP packet with size `packet_len,`
     * a padding of `pad_len` and a `csrc_count` CSRC entries.
     * @param packet_len the length of the total RTP packet
     * @param pad_len the amount of padding
     * @param csrc_count the number of CSRC entries
     * @returns The length of the payload of an RTP packet  with given parameters.
     */
    static calc_payload_len(packet_len: number, pad_len: number, csrc_count: number): number
    /**
     * Compare two sequence numbers, taking care of wraparounds. This function
     * returns the difference between `seqnum1` and `seqnum2`.
     * @param seqnum1 a sequence number
     * @param seqnum2 a sequence number
     * @returns a negative value if @seqnum1 is bigger than @seqnum2, 0 if they are equal or a positive value if @seqnum1 is smaller than @segnum2.
     */
    static compare_seqnum(seqnum1: number, seqnum2: number): number
    /**
     * Get the default clock-rate for the static payload type `payload_type`.
     * @param payload_type the static payload type
     * @returns the default clock rate or -1 if the payload type is not static or the clock-rate is undefined.
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
     * @returns The extended timestamp of @timestamp or 0 if the result can't go anywhere backwards.
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
     * @returns TRUE if @bytes had the requested header extension
     */
    static get_extension_onebyte_header_from_bytes(bytes: GLib.Bytes, bit_pattern: number, id: number, nth: number): [ /* returnType */ boolean, /* data */ Uint8Array ]
    /**
     * Map the contents of `buffer` into `rtp`.
     * @param buffer a #GstBuffer
     * @param flags #GstMapFlags
     * @returns %TRUE if @buffer could be mapped.
     */
    static map(buffer: Gst.Buffer, flags: Gst.MapFlags): [ /* returnType */ boolean, /* rtp */ RTPBuffer ]
}

interface RTPHeaderExtensionClass {

    // Own fields of GstRtp-1.0.GstRtp.RTPHeaderExtensionClass

    /**
     * the parent class
     * @field 
     */
    parent_class: Gst.ElementClass
    get_supported_flags: (ext: RTPHeaderExtension) => RTPHeaderExtensionFlags
    get_max_size: (ext: RTPHeaderExtension, input_meta: Gst.Buffer) => number
    write: (ext: RTPHeaderExtension, input_meta: Gst.Buffer, write_flags: RTPHeaderExtensionFlags, output: Gst.Buffer, data: Uint8Array) => number
    read: (ext: RTPHeaderExtension, read_flags: RTPHeaderExtensionFlags, data: Uint8Array, buffer: Gst.Buffer) => boolean
    set_non_rtp_sink_caps: (ext: RTPHeaderExtension, caps: Gst.Caps) => boolean
    update_non_rtp_src_caps: (ext: RTPHeaderExtension, caps: Gst.Caps) => boolean
    set_attributes: (ext: RTPHeaderExtension, direction: RTPHeaderExtensionDirection, attributes: string | null) => boolean
    set_caps_from_attributes: (ext: RTPHeaderExtension, caps: Gst.Caps) => boolean
}

/**
 * Base class for RTP Header extensions.
 * @record 
 */
abstract class RTPHeaderExtensionClass {

    // Own properties of GstRtp-1.0.GstRtp.RTPHeaderExtensionClass

    static name: string

    // Owm static methods of GstRtp-1.0.GstRtp.RTPHeaderExtensionClass

    /**
     * Set the URI for this RTP header extension implementation.
     * @param uri the RTP Header extension uri for `klass`
     */
    static set_uri(klass: RTPHeaderExtension | Function | GObject.GType, uri: string | null): void
}

interface RTPPayloadInfo {

    // Own fields of GstRtp-1.0.GstRtp.RTPPayloadInfo

    /**
     * payload type, -1 means dynamic
     * @field 
     */
    payload_type: number
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
    encoding_name: string | null
    /**
     * default clock rate, 0 = unknown/variable
     * @field 
     */
    clock_rate: number
    /**
     * encoding parameters. For audio this is the number of
     * channels. NULL = not applicable.
     * @field 
     */
    encoding_parameters: string | null
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
class RTPPayloadInfo {

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
     * @param encoding_name the encoding name to find
     * @returns a #GstRTPPayloadInfo or NULL when no info could be found.
     */
    static for_name(media: string | null, encoding_name: string | null): RTPPayloadInfo | null
    /**
     * Get the #GstRTPPayloadInfo for `payload_type`. This function is
     * mostly used to get the default clock-rate and bandwidth for static payload
     * types specified with `payload_type`.
     * @param payload_type the payload_type to find
     * @returns a #GstRTPPayloadInfo or NULL when no info could be found.
     */
    static for_pt(payload_type: number): RTPPayloadInfo | null
}

interface RTPSourceMeta {

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
    ssrc_valid: boolean
    /**
     * pointer to the CSRCs
     * @field 
     */
    csrc: number[]
    /**
     * number of elements in `csrc`
     * @field 
     */
    csrc_count: number

    // Owm methods of GstRtp-1.0.GstRtp.RTPSourceMeta

    /**
     * Appends `csrc` to the list of contributing sources in `meta`.
     * @param csrc the csrcs to append
     * @returns %TRUE if all elements in @csrc was added, %FALSE otherwise.
     */
    append_csrc(csrc: number[]): boolean
    /**
     * Count the total number of RTP sources found in `meta,` both SSRC and CSRC.
     * @returns The number of RTP sources
     */
    get_source_count(): number
    /**
     * Sets `ssrc` in `meta`. If `ssrc` is %NULL the ssrc of `meta` will be unset.
     * @param ssrc pointer to the SSRC
     * @returns %TRUE on success, %FALSE otherwise.
     */
    set_ssrc(ssrc: number | null): boolean
}

/**
 * Meta describing the source(s) of the buffer.
 * @record 
 */
class RTPSourceMeta {

    // Own properties of GstRtp-1.0.GstRtp.RTPSourceMeta

    static name: string

    // Constructors of GstRtp-1.0.GstRtp.RTPSourceMeta

    static get_info(): Gst.MetaInfo
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

export default GstRtp;
// END