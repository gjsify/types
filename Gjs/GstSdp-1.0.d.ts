/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstSdp-1.0
 */

import type * as Gjs from './Gjs';
import type Gst from './Gst-1.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type GModule from './GModule-2.0';

export namespace GstSdp {

/**
 * The different cache types
 */
enum MIKEYCacheType {
    /**
     * The envelope key MUST NOT be cached
     */
    NONE,
    /**
     * The envelope key MUST be cached
     */
    ALWAYS,
    /**
     * The envelope key MUST be cached, but only
     *                           to be used for the specific CSB.
     */
    FOR_CSB,
}
/**
 * The encryption algorithm used to encrypt the Encr data field
 */
enum MIKEYEncAlg {
    /**
     * no encryption
     */
    NULL,
    /**
     * AES-CM using a 128-bit key
     */
    AES_CM_128,
    /**
     * AES Key Wrap using a 128-bit key
     */
    AES_KW_128,
    /**
     * AES-GCM using a 128-bit key (Since: 1.16)
     */
    AES_GCM_128,
}
/**
 * The key validity type
 */
enum MIKEYKVType {
    /**
     * No specific usage rule
     */
    NULL,
    /**
     * The key is associated with the SPI/MKI
     */
    SPI,
    /**
     * The key has a start and expiration time
     */
    INTERVAL,
}
/**
 * The type of key.
 */
enum MIKEYKeyDataType {
    /**
     * a TEK Generation Key
     */
    TGK,
    /**
     * Traffic-Encrypting Key
     */
    TEK,
}
/**
 * Specifies the authentication algorithm used
 */
enum MIKEYMacAlg {
    /**
     * no authentication
     */
    NULL,
    /**
     * HMAC-SHA-1-160
     */
    HMAC_SHA_1_160,
}
/**
 * Specifies the method of uniquely mapping Crypto Sessions to the security
 * protocol sessions.
 */
enum MIKEYMapType {
    /**
     * SRTP
     */
    MIKEY_MAP_TYPE_SRTP,
}
/**
 * The PRF function that has been/will be used for key derivation
 */
enum MIKEYPRFFunc {
    /**
     * MIKEY-1 PRF function
     */
    MIKEY_PRF_MIKEY_1,
}
/**
 * Different MIKEY Payload types.
 */
enum MIKEYPayloadType {
    /**
     * Last payload
     */
    LAST,
    /**
     * Key data transport payload
     */
    KEMAC,
    /**
     * Envelope data payload
     */
    PKE,
    /**
     * DH data payload
     */
    DH,
    /**
     * Signature payload
     */
    SIGN,
    /**
     * Timestamp payload
     */
    T,
    /**
     * ID payload
     */
    ID,
    /**
     * Certificate Payload
     */
    CERT,
    /**
     * Cert hash payload
     */
    CHASH,
    /**
     * Verification message payload
     */
    V,
    /**
     * Security Policy payload
     */
    SP,
    /**
     * RAND payload
     */
    RAND,
    /**
     * Error payload
     */
    ERR,
    /**
     * Key data sub-payload
     */
    KEY_DATA,
    /**
     * General Extension Payload
     */
    GEN_EXT,
}
/**
 * Specifies the security protocol
 */
enum MIKEYSecProto {
    /**
     * SRTP
     */
    MIKEY_SEC_PROTO_SRTP,
}
/**
 * This policy specifies the parameters for SRTP and SRTCP
 */
enum MIKEYSecSRTP {
    /**
     * Encryption algorithm
     */
    ENC_ALG,
    /**
     * Session Encr. key length
     */
    ENC_KEY_LEN,
    /**
     * Authentication algorithm
     */
    AUTH_ALG,
    /**
     * Session Auth. key length
     */
    AUTH_KEY_LEN,
    /**
     * Session Salt key length
     */
    SALT_KEY_LEN,
    /**
     * SRTP Pseudo Random Function
     */
    PRF,
    /**
     * Key derivation rate
     */
    KEY_DERIV_RATE,
    /**
     * SRTP encryption off/on, 0 if off, 1 if on
     */
    SRTP_ENC,
    /**
     * SRTCP encryption off/on, 0 if off, 1 if on
     */
    SRTCP_ENC,
    /**
     * sender's FEC order
     */
    FEC_ORDER,
    /**
     * SRTP authentication off/on, 0 if off, 1 if on
     */
    SRTP_AUTH,
    /**
     * Authentication tag length
     */
    AUTH_TAG_LEN,
    /**
     * SRTP prefix length
     */
    SRTP_PREFIX_LEN,
    /**
     * AEAD authentication tag length (Since: 1.16)
     */
    AEAD_AUTH_TAG_LEN,
}
/**
 * Specifies the timestamp type.
 */
enum MIKEYTSType {
    /**
     * an NTP time in UTC timezone
     */
    NTP_UTC,
    /**
     * an NTP time
     */
    NTP,
    /**
     * a counter
     */
    COUNTER,
}
/**
 * Different MIKEY data types.
 */
enum MIKEYType {
    /**
     * Invalid type
     */
    INVALID,
    /**
     * Initiator's pre-shared key message
     */
    PSK_INIT,
    /**
     * Verification message of a Pre-shared key message
     */
    PSK_VERIFY,
    /**
     * Initiator's public-key transport message
     */
    PK_INIT,
    /**
     * Verification message of a public-key message
     */
    PK_VERIFY,
    /**
     * Initiator's DH exchange message
     */
    DH_INIT,
    /**
     * Responder's DH exchange message
     */
    DH_RESP,
    /**
     * Error message
     */
    ERROR,
}
/**
 * Return values for the SDP functions.
 */
enum SDPResult {
    /**
     * A successful return value
     */
    OK,
    /**
     * a function was given invalid parameters
     */
    EINVAL,
}
/**
 * The supported MIKEY version 1.
 */
const MIKEY_VERSION: number
/**
 * The Application-Specific Maximum bandwidth modifier.
 */
const SDP_BWTYPE_AS: string
/**
 * The Conference Total bandwidth modifier.
 */
const SDP_BWTYPE_CT: string
/**
 * The extension prefix bandwidth modifier.
 */
const SDP_BWTYPE_EXT_PREFIX: string
/**
 * RTCP bandwidth allocated to data receivers (RFC 3556).
 */
const SDP_BWTYPE_RR: string
/**
 * RTCP bandwidth allocated to active data senders (RFC 3556).
 */
const SDP_BWTYPE_RS: string
/**
 * Transport Independent Application Specific Maximum bandwidth (RFC 3890).
 */
const SDP_BWTYPE_TIAS: string
function sdp_address_is_multicast(nettype: string, addrtype: string, addr: string): boolean
function sdp_make_keymgmt(uri: string, base64: string): string
function sdp_media_new(): [ /* returnType */ SDPResult, /* media */ SDPMedia ]
function sdp_media_set_media_from_caps(caps: Gst.Caps, media: SDPMedia): SDPResult
function sdp_message_as_uri(scheme: string, msg: SDPMessage): string
function sdp_message_new(): [ /* returnType */ SDPResult, /* msg */ SDPMessage ]
function sdp_message_new_from_text(text: string): [ /* returnType */ SDPResult, /* msg */ SDPMessage ]
function sdp_message_parse_buffer(data: Uint8Array, msg: SDPMessage): SDPResult
function sdp_message_parse_uri(uri: string, msg: SDPMessage): SDPResult
class MIKEYDecryptInfo {
    static name: string
}
class MIKEYEncryptInfo {
    static name: string
}
class MIKEYMapSRTP {
    /* Fields of GstSdp-1.0.GstSdp.MIKEYMapSRTP */
    /**
     * The security policy applied for the stream with `ssrc`
     */
    readonly policy: number
    /**
     * the SSRC that must be used for the stream
     */
    readonly ssrc: number
    /**
     * current rollover counter
     */
    readonly roc: number
    static name: string
}
class MIKEYMessage {
    /* Fields of GstSdp-1.0.GstSdp.MIKEYMessage */
    /**
     * the version
     */
    readonly version: number
    /**
     * the #GstMIKEYType message type
     */
    readonly type: MIKEYType
    /**
     * verify flag
     */
    readonly V: boolean
    /**
     * a #GstMIKEYPRFFunc
     */
    readonly prf_func: MIKEYPRFFunc
    /**
     * Identifies the Crypto Session Bundle
     */
    readonly CSB_id: number
    /**
     * a #GstMIKEYMapType
     */
    readonly map_type: MIKEYMapType
    /**
     * map info array of type depending on `map_type`
     */
    readonly map_info: object[]
    /**
     * the payload array of #GstMIKEYPayload
     */
    readonly payloads: object[]
    /* Methods of GstSdp-1.0.GstSdp.MIKEYMessage */
    /**
     * Add a Crypto policy for SRTP to `msg`.
     */
    add_cs_srtp(policy: number, ssrc: number, roc: number): boolean
    /**
     * Add a new payload to `msg`.
     */
    add_payload(payload: MIKEYPayload): boolean
    /**
     * Add a new PKE payload to `msg` with the given parameters.
     */
    add_pke(C: MIKEYCacheType, data: Uint8Array): boolean
    /**
     * Add a new RAND payload to `msg` with the given parameters.
     */
    add_rand(rand: Uint8Array): boolean
    /**
     * Add a new RAND payload to `msg` with `len` random bytes.
     */
    add_rand_len(len: number): boolean
    /**
     * Add a new T payload to `msg` with the given parameters.
     */
    add_t(type: MIKEYTSType, ts_value: Uint8Array): boolean
    /**
     * Add a new T payload to `msg` that contains the current time
     * in NTP-UTC format.
     */
    add_t_now_ntp_utc(): boolean
    base64_encode(): string
    /**
     * Find the `nth` occurrence of the payload with `type` in `msg`.
     */
    find_payload(type: MIKEYPayloadType, nth: number): MIKEYPayload
    /**
     * Get the policy information of `msg` at `idx`.
     */
    get_cs_srtp(idx: number): MIKEYMapSRTP
    /**
     * Get the number of crypto sessions in `msg`.
     */
    get_n_cs(): number
    /**
     * Get the number of payloads in `msg`.
     */
    get_n_payloads(): number
    /**
     * Get the #GstMIKEYPayload at `idx` in `msg`
     */
    get_payload(idx: number): MIKEYPayload
    /**
     * Insert a Crypto Session map for SRTP in `msg` at `idx`
     * 
     * When `idx` is -1, the policy will be appended.
     */
    insert_cs_srtp(idx: number, map: MIKEYMapSRTP): boolean
    /**
     * Insert the `payload` at index `idx` in `msg`. If `idx` is -1, the payload
     * will be appended to `msg`.
     */
    insert_payload(idx: number, payload: MIKEYPayload): boolean
    /**
     * Remove the SRTP policy at `idx`.
     */
    remove_cs_srtp(idx: number): boolean
    /**
     * Remove the payload in `msg` at `idx`
     */
    remove_payload(idx: number): boolean
    /**
     * Replace a Crypto Session map for SRTP in `msg` at `idx` with `map`.
     */
    replace_cs_srtp(idx: number, map: MIKEYMapSRTP): boolean
    /**
     * Replace the payload at `idx` in `msg` with `payload`.
     */
    replace_payload(idx: number, payload: MIKEYPayload): boolean
    /**
     * Set the information in `msg`.
     */
    set_info(version: number, type: MIKEYType, V: boolean, prf_func: MIKEYPRFFunc, CSB_id: number, map_type: MIKEYMapType): boolean
    /**
     * Convert `msg` to a #GBytes.
     */
    to_bytes(info: MIKEYEncryptInfo): GLib.Bytes
    to_caps(caps: Gst.Caps): boolean
    static name: string
    static new(): MIKEYMessage
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MIKEYMessage
    static new_from_bytes(bytes: GLib.Bytes, info: MIKEYDecryptInfo): MIKEYMessage
    static new_from_caps(caps: Gst.Caps): MIKEYMessage
    static new_from_data(data: Uint8Array, info: MIKEYDecryptInfo): MIKEYMessage
}
class MIKEYPayload {
    /* Fields of GstSdp-1.0.GstSdp.MIKEYPayload */
    /**
     * the payload type
     */
    readonly type: MIKEYPayloadType
    /**
     * length of the payload
     */
    readonly len: number
    /* Methods of GstSdp-1.0.GstSdp.MIKEYPayload */
    /**
     * Add a new sub payload to `payload`.
     */
    kemac_add_sub(newpay: MIKEYPayload): boolean
    /**
     * Get the number of sub payloads of `payload`. `payload` should be of type
     * %GST_MIKEY_PT_KEMAC.
     */
    kemac_get_n_sub(): number
    /**
     * Get the sub payload of `payload` at `idx`. `payload` should be of type
     * %GST_MIKEY_PT_KEMAC.
     */
    kemac_get_sub(idx: number): MIKEYPayload
    /**
     * Remove the sub payload at `idx` in `payload`.
     */
    kemac_remove_sub(idx: number): boolean
    /**
     * Set the KEMAC parameters. `payload` should point to a %GST_MIKEY_PT_KEMAC
     * payload.
     */
    kemac_set(enc_alg: MIKEYEncAlg, mac_alg: MIKEYMacAlg): boolean
    /**
     * Set the key validity period in the %GST_MIKEY_PT_KEY_DATA `payload`.
     */
    key_data_set_interval(vf_len: number, vt_data: Uint8Array): boolean
    /**
     * Set `key_len` bytes of `key_data` of type `key_type` as the key for the
     * %GST_MIKEY_PT_KEY_DATA `payload`.
     */
    key_data_set_key(key_type: MIKEYKeyDataType, key_data: Uint8Array): boolean
    /**
     * Set the salt key data. If `salt_len` is 0 and `salt_data` is %NULL, the
     * salt data will be removed.
     */
    key_data_set_salt(salt_data?: Uint8Array | null): boolean
    /**
     * Set the SPI/MKI validity in the %GST_MIKEY_PT_KEY_DATA `payload`.
     */
    key_data_set_spi(spi_data: Uint8Array): boolean
    /**
     * Set the PKE values in `payload`. `payload` must be of type
     * %GST_MIKEY_PT_PKE.
     */
    pke_set(C: MIKEYCacheType, data: Uint8Array): boolean
    /**
     * Set the random values in a %GST_MIKEY_PT_RAND `payload`.
     */
    rand_set(rand: Uint8Array): boolean
    /**
     * Add a new parameter to the %GST_MIKEY_PT_SP `payload` with `type,` `len`
     * and `val`.
     */
    sp_add_param(type: number, val: Uint8Array): boolean
    /**
     * Get the number of security policy parameters in a %GST_MIKEY_PT_SP
     * `payload`.
     */
    sp_get_n_params(): number
    /**
     * Get the Security Policy parameter in a %GST_MIKEY_PT_SP `payload`
     * at `idx`.
     */
    sp_get_param(idx: number): MIKEYPayloadSPParam
    /**
     * Remove the Security Policy parameters from a %GST_MIKEY_PT_SP
     * `payload` at `idx`.
     */
    sp_remove_param(idx: number): boolean
    /**
     * Set the Security Policy parameters for `payload`.
     */
    sp_set(policy: number, proto: MIKEYSecProto): boolean
    /**
     * Set the timestamp in a %GST_MIKEY_PT_T `payload`.
     */
    t_set(type: MIKEYTSType, ts_value: Uint8Array): boolean
    static name: string
    static new(type: MIKEYPayloadType): MIKEYPayload
    constructor(type: MIKEYPayloadType)
    /* Static methods and pseudo-constructors */
    static new(type: MIKEYPayloadType): MIKEYPayload
}
class MIKEYPayloadKEMAC {
    /* Fields of GstSdp-1.0.GstSdp.MIKEYPayloadKEMAC */
    /**
     * the common #GstMIKEYPayload
     */
    readonly pt: MIKEYPayload
    /**
     * the #GstMIKEYEncAlg
     */
    readonly enc_alg: MIKEYEncAlg
    /**
     * the #GstMIKEYMacAlg
     */
    readonly mac_alg: MIKEYMacAlg
    /**
     * the subpayloads
     */
    readonly subpayloads: object[]
    static name: string
}
class MIKEYPayloadKeyData {
    /* Fields of GstSdp-1.0.GstSdp.MIKEYPayloadKeyData */
    /**
     * the payload header
     */
    readonly pt: MIKEYPayload
    /**
     * the #GstMIKEYKeyDataType of `key_data`
     */
    readonly key_type: MIKEYKeyDataType
    /**
     * length of `key_data`
     */
    readonly key_len: number
    /**
     * the key data
     */
    readonly key_data: number
    /**
     * the length of `salt_data,` can be 0
     */
    readonly salt_len: number
    /**
     * salt data
     */
    readonly salt_data: number
    /**
     * the Key Validity type
     */
    readonly kv_type: MIKEYKVType
    /**
     * length of `kv_data`
     */
    readonly kv_len: Uint8Array
    /**
     * key validity data
     */
    readonly kv_data: Uint8Array
    static name: string
}
class MIKEYPayloadPKE {
    /* Fields of GstSdp-1.0.GstSdp.MIKEYPayloadPKE */
    /**
     * the common #GstMIKEYPayload
     */
    readonly pt: MIKEYPayload
    /**
     * envelope key cache indicator
     */
    readonly C: MIKEYCacheType
    /**
     * length of `data`
     */
    readonly data_len: number
    /**
     * the encrypted envelope key
     */
    readonly data: number
    static name: string
}
class MIKEYPayloadRAND {
    /* Fields of GstSdp-1.0.GstSdp.MIKEYPayloadRAND */
    /**
     * the payload header
     */
    readonly pt: MIKEYPayload
    /**
     * the length of `rand`
     */
    readonly len: number
    /**
     * random values
     */
    readonly rand: number
    static name: string
}
class MIKEYPayloadSP {
    /* Fields of GstSdp-1.0.GstSdp.MIKEYPayloadSP */
    /**
     * the payload header
     */
    readonly pt: MIKEYPayload
    /**
     * the policy number
     */
    readonly policy: number
    /**
     * the security protocol
     */
    readonly proto: MIKEYSecProto
    /**
     * array of #GstMIKEYPayloadSPParam
     */
    readonly params: object[]
    static name: string
}
class MIKEYPayloadSPParam {
    /* Fields of GstSdp-1.0.GstSdp.MIKEYPayloadSPParam */
    /**
     * specifies the type of the parameter
     */
    readonly type: number
    /**
     * specifies the length of `val`
     */
    readonly len: number
    /**
     * specifies the value of the parameter
     */
    readonly val: number
    static name: string
}
class MIKEYPayloadT {
    /* Fields of GstSdp-1.0.GstSdp.MIKEYPayloadT */
    /**
     * the payload header
     */
    readonly pt: MIKEYPayload
    /**
     * a #GstMIKEYTSType
     */
    readonly type: MIKEYTSType
    /**
     * the timestamp value
     */
    readonly ts_value: number
    static name: string
}
class SDPAttribute {
    /* Fields of GstSdp-1.0.GstSdp.SDPAttribute */
    /**
     * the attribute key
     */
    readonly key: string
    /**
     * the attribute value or NULL when it was a property attribute
     */
    readonly value: string
    /* Methods of GstSdp-1.0.GstSdp.SDPAttribute */
    /**
     * Clear the attribute.
     */
    clear(): SDPResult
    /**
     * Set the attribute with `key` and `value`.
     */
    set(key: string, value?: string | null): SDPResult
    static name: string
}
class SDPBandwidth {
    /* Fields of GstSdp-1.0.GstSdp.SDPBandwidth */
    /**
     * the bandwidth modifier type
     */
    readonly bwtype: string
    /**
     * the bandwidth in kilobits per second
     */
    readonly bandwidth: number
    /* Methods of GstSdp-1.0.GstSdp.SDPBandwidth */
    /**
     * Reset the bandwidth information in `bw`.
     */
    clear(): SDPResult
    /**
     * Set bandwidth information in `bw`.
     */
    set(bwtype: string, bandwidth: number): SDPResult
    static name: string
}
class SDPConnection {
    /* Fields of GstSdp-1.0.GstSdp.SDPConnection */
    /**
     * the type of network. "IN" is defined to have the meaning
     *    "Internet".
     */
    readonly nettype: string
    /**
     * the type of `address`.
     */
    readonly addrtype: string
    /**
     * the address
     */
    readonly address: string
    /**
     * the time to live of the address
     */
    readonly ttl: number
    /**
     * the number of layers
     */
    readonly addr_number: number
    /* Methods of GstSdp-1.0.GstSdp.SDPConnection */
    /**
     * Clear the connection.
     */
    clear(): SDPResult
    /**
     * Set the connection with the given parameters.
     */
    set(nettype: string, addrtype: string, address: string, ttl: number, addr_number: number): SDPResult
    static name: string
}
class SDPKey {
    /* Fields of GstSdp-1.0.GstSdp.SDPKey */
    /**
     * the encryption type
     */
    readonly type: string
    /**
     * the encryption data
     */
    readonly data: string
    static name: string
}
class SDPMedia {
    /* Fields of GstSdp-1.0.GstSdp.SDPMedia */
    /**
     * the media type
     */
    readonly media: string
    /**
     * the transport port to which the media stream will be sent
     */
    readonly port: number
    /**
     * the number of ports or -1 if only one port was specified
     */
    readonly num_ports: number
    /**
     * the transport protocol
     */
    readonly proto: string
    /**
     * an array of #gchar formats
     */
    readonly fmts: object[]
    /**
     * the media title
     */
    readonly information: string
    /**
     * array of #GstSDPConnection with media connection information
     */
    readonly connections: object[]
    /**
     * array of #GstSDPBandwidth with media bandwidth information
     */
    readonly bandwidths: object[]
    /**
     * the encryption key
     */
    readonly key: SDPKey
    /**
     * array of #GstSDPAttribute with the additional media attributes
     */
    readonly attributes: object[]
    /* Methods of GstSdp-1.0.GstSdp.SDPMedia */
    /**
     * Add the attribute with `key` and `value` to `media`.
     */
    add_attribute(key: string, value?: string | null): SDPResult
    /**
     * Add the bandwidth information with `bwtype` and `bandwidth` to `media`.
     */
    add_bandwidth(bwtype: string, bandwidth: number): SDPResult
    /**
     * Add the given connection parameters to `media`.
     */
    add_connection(nettype: string, addrtype: string, address: string, ttl: number, addr_number: number): SDPResult
    /**
     * Add the format information to `media`.
     */
    add_format(format: string): SDPResult
    /**
     * Convert the contents of `media` to a text string.
     */
    as_text(): string
    /**
     * Get the number of attribute fields in `media`.
     */
    attributes_len(): number
    /**
     * Mapping of attributes of #GstSDPMedia to #GstCaps
     */
    attributes_to_caps(caps: Gst.Caps): SDPResult
    /**
     * Get the number of bandwidth fields in `media`.
     */
    bandwidths_len(): number
    /**
     * Get the number of connection fields in `media`.
     */
    connections_len(): number
    /**
     * Allocate a new copy of `media` and store the result in `copy`. The value in
     * `copy` should be release with gst_sdp_media_free function.
     */
    copy(): [ /* returnType */ SDPResult, /* copy */ SDPMedia ]
    /**
     * Get the number of formats in `media`.
     */
    formats_len(): number
    /**
     * Free all resources allocated by `media`. `media` should not be used anymore after
     * this function. This function should be used when `media` was dynamically
     * allocated with gst_sdp_media_new().
     */
    free(): SDPResult
    /**
     * Get the attribute at position `idx` in `media`.
     */
    get_attribute(idx: number): SDPAttribute
    /**
     * Get the first attribute value for `key` in `media`.
     */
    get_attribute_val(key: string): string
    /**
     * Get the `nth` attribute value for `key` in `media`.
     */
    get_attribute_val_n(key: string, nth: number): string
    /**
     * Get the bandwidth at position `idx` in `media`.
     */
    get_bandwidth(idx: number): SDPBandwidth
    /**
     * Mapping of caps from SDP fields:
     * 
     * a=rtpmap:(payload) (encoding_name)/(clock_rate)[/(encoding_params)]
     * 
     * a=framesize:(payload) (width)-(height)
     * 
     * a=fmtp:(payload) (param)[=(value)];...
     * 
     * Note that the extmap attribute is set only by gst_sdp_media_attributes_to_caps().
     */
    get_caps_from_media(pt: number): Gst.Caps
    /**
     * Get the connection at position `idx` in `media`.
     */
    get_connection(idx: number): SDPConnection
    /**
     * Get the format information at position `idx` in `media`.
     */
    get_format(idx: number): string
    /**
     * Get the information of `media`
     */
    get_information(): string
    /**
     * Get the encryption information from `media`.
     */
    get_key(): SDPKey
    /**
     * Get the media description of `media`.
     */
    get_media(): string
    /**
     * Get the number of ports for `media`.
     */
    get_num_ports(): number
    /**
     * Get the port number for `media`.
     */
    get_port(): number
    /**
     * Get the transport protocol of `media`
     */
    get_proto(): string
    /**
     * Initialize `media` so that its contents are as if it was freshly allocated
     * with gst_sdp_media_new(). This function is mostly used to initialize a media
     * allocated on the stack. gst_sdp_media_uninit() undoes this operation.
     * 
     * When this function is invoked on newly allocated data (with malloc or on the
     * stack), its contents should be set to 0 before calling this function.
     */
    init(): SDPResult
    /**
     * Insert the attribute to `media` at `idx`. When `idx` is -1,
     * the attribute is appended.
     */
    insert_attribute(idx: number, attr: SDPAttribute): SDPResult
    /**
     * Insert the bandwidth information to `media` at `idx`. When `idx` is -1,
     * the bandwidth is appended.
     */
    insert_bandwidth(idx: number, bw: SDPBandwidth): SDPResult
    /**
     * Insert the connection information to `media` at `idx`. When `idx` is -1,
     * the connection is appended.
     */
    insert_connection(idx: number, conn: SDPConnection): SDPResult
    /**
     * Insert the format information to `media` at `idx`. When `idx` is -1,
     * the format is appended.
     */
    insert_format(idx: number, format: string): SDPResult
    /**
     * Creates a new #GstMIKEYMessage after parsing the key-mgmt attribute
     * from a #GstSDPMedia.
     */
    parse_keymgmt(): [ /* returnType */ SDPResult, /* mikey */ MIKEYMessage ]
    /**
     * Remove the attribute in `media` at `idx`.
     */
    remove_attribute(idx: number): SDPResult
    /**
     * Remove the bandwidth information in `media` at `idx`.
     */
    remove_bandwidth(idx: number): SDPResult
    /**
     * Remove the connection information in `media` at `idx`.
     */
    remove_connection(idx: number): SDPResult
    /**
     * Remove the format information in `media` at `idx`.
     */
    remove_format(idx: number): SDPResult
    /**
     * Replace the attribute in `media` at `idx` with `attr`.
     */
    replace_attribute(idx: number, attr: SDPAttribute): SDPResult
    /**
     * Replace the bandwidth information in `media` at `idx` with `bw`.
     */
    replace_bandwidth(idx: number, bw: SDPBandwidth): SDPResult
    /**
     * Replace the connection information in `media` at `idx` with `conn`.
     */
    replace_connection(idx: number, conn: SDPConnection): SDPResult
    /**
     * Replace the format information in `media` at `idx` with `format`.
     */
    replace_format(idx: number, format: string): SDPResult
    /**
     * Set the media information of `media` to `information`.
     */
    set_information(information: string): SDPResult
    /**
     * Adds the encryption information to `media`.
     */
    set_key(type: string, data: string): SDPResult
    /**
     * Set the media description of `media` to `med`.
     */
    set_media(med: string): SDPResult
    /**
     * Set the port information in `media`.
     */
    set_port_info(port: number, num_ports: number): SDPResult
    /**
     * Set the media transport protocol of `media` to `proto`.
     */
    set_proto(proto: string): SDPResult
    /**
     * Free all resources allocated in `media`. `media` should not be used anymore after
     * this function. This function should be used when `media` was allocated on the
     * stack and initialized with gst_sdp_media_init().
     */
    uninit(): SDPResult
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Mapping of caps to SDP fields:
     * 
     * a=rtpmap:(payload) (encoding_name) or (clock_rate)[or (encoding_params)]
     * 
     * a=framesize:(payload) (width)-(height)
     * 
     * a=fmtp:(payload) (param)[=(value)];...
     * 
     * a=rtcp-fb:(payload) (param1) [param2]...
     * 
     * a=extmap:(id)[/direction] (extensionname) (extensionattributes)
     */
    static set_media_from_caps(caps: Gst.Caps, media: SDPMedia): SDPResult
}
class SDPMessage {
    /* Fields of GstSdp-1.0.GstSdp.SDPMessage */
    /**
     * the protocol version
     */
    readonly version: string
    /**
     * owner/creator and session identifier
     */
    readonly origin: SDPOrigin
    /**
     * session name
     */
    readonly session_name: string
    /**
     * session information
     */
    readonly information: string
    /**
     * URI of description
     */
    readonly uri: string
    /**
     * array of #gchar with email addresses
     */
    readonly emails: object[]
    /**
     * array of #gchar with phone numbers
     */
    readonly phones: object[]
    /**
     * connection information for the session
     */
    readonly connection: SDPConnection
    /**
     * array of #GstSDPBandwidth with bandwidth information
     */
    readonly bandwidths: object[]
    /**
     * array of #GstSDPTime with time descriptions
     */
    readonly times: object[]
    /**
     * array of #GstSDPZone with time zone adjustments
     */
    readonly zones: object[]
    /**
     * encryption key
     */
    readonly key: SDPKey
    /**
     * array of #GstSDPAttribute with session attributes
     */
    readonly attributes: object[]
    /**
     * array of #GstSDPMedia with media descriptions
     */
    readonly medias: object[]
    /* Methods of GstSdp-1.0.GstSdp.SDPMessage */
    /**
     * Add the attribute with `key` and `value` to `msg`.
     */
    add_attribute(key: string, value?: string | null): SDPResult
    /**
     * Add the specified bandwidth information to `msg`.
     */
    add_bandwidth(bwtype: string, bandwidth: number): SDPResult
    /**
     * Add `email` to the list of emails in `msg`.
     */
    add_email(email: string): SDPResult
    /**
     * Adds `media` to the array of medias in `msg`. This function takes ownership of
     * the contents of `media` so that `media` will have to be reinitialized with
     * gst_sdp_media_init() before it can be used again.
     */
    add_media(media: SDPMedia): SDPResult
    /**
     * Add `phone` to the list of phones in `msg`.
     */
    add_phone(phone: string): SDPResult
    /**
     * Add time information `start` and `stop` to `msg`.
     */
    add_time(start: string, stop: string, repeat: string[]): SDPResult
    /**
     * Add time zone information to `msg`.
     */
    add_zone(adj_time: string, typed_time: string): SDPResult
    /**
     * Convert the contents of `msg` to a text string.
     */
    as_text(): string
    /**
     * Get the number of attributes in `msg`.
     */
    attributes_len(): number
    /**
     * Mapping of attributes of #GstSDPMessage to #GstCaps
     */
    attributes_to_caps(caps: Gst.Caps): SDPResult
    /**
     * Get the number of bandwidth information in `msg`.
     */
    bandwidths_len(): number
    /**
     * Allocate a new copy of `msg` and store the result in `copy`. The value in
     * `copy` should be release with gst_sdp_message_free function.
     */
    copy(): [ /* returnType */ SDPResult, /* copy */ SDPMessage ]
    /**
     * Dump the parsed contents of `msg` to stdout.
     */
    dump(): SDPResult
    /**
     * Get the number of emails in `msg`.
     */
    emails_len(): number
    /**
     * Free all resources allocated by `msg`. `msg` should not be used anymore after
     * this function. This function should be used when `msg` was dynamically
     * allocated with gst_sdp_message_new().
     */
    free(): SDPResult
    /**
     * Get the attribute at position `idx` in `msg`.
     */
    get_attribute(idx: number): SDPAttribute
    /**
     * Get the first attribute with key `key` in `msg`.
     */
    get_attribute_val(key: string): string
    /**
     * Get the `nth` attribute with key `key` in `msg`.
     */
    get_attribute_val_n(key: string, nth: number): string
    /**
     * Get the bandwidth at index `idx` from `msg`.
     */
    get_bandwidth(idx: number): SDPBandwidth
    /**
     * Get the connection of `msg`.
     */
    get_connection(): SDPConnection
    /**
     * Get the email with number `idx` from `msg`.
     */
    get_email(idx: number): string
    /**
     * Get the information in `msg`.
     */
    get_information(): string
    /**
     * Get the encryption information from `msg`.
     */
    get_key(): SDPKey
    /**
     * Get the media description at index `idx` in `msg`.
     */
    get_media(idx: number): SDPMedia
    /**
     * Get the origin of `msg`.
     */
    get_origin(): SDPOrigin
    /**
     * Get the phone with number `idx` from `msg`.
     */
    get_phone(idx: number): string
    /**
     * Get the session name in `msg`.
     */
    get_session_name(): string
    /**
     * Get time information with index `idx` from `msg`.
     */
    get_time(idx: number): SDPTime
    /**
     * Get the URI in `msg`.
     */
    get_uri(): string
    /**
     * Get the version in `msg`.
     */
    get_version(): string
    /**
     * Get time zone information with index `idx` from `msg`.
     */
    get_zone(idx: number): SDPZone
    /**
     * Initialize `msg` so that its contents are as if it was freshly allocated
     * with gst_sdp_message_new(). This function is mostly used to initialize a message
     * allocated on the stack. gst_sdp_message_uninit() undoes this operation.
     * 
     * When this function is invoked on newly allocated data (with malloc or on the
     * stack), its contents should be set to 0 before calling this function.
     */
    init(): SDPResult
    /**
     * Insert attribute into the array of attributes in `msg`
     * at index `idx`.
     * When -1 is given as `idx,` the attribute is inserted at the end.
     */
    insert_attribute(idx: number, attr: SDPAttribute): SDPResult
    /**
     * Insert bandwidth parameters into the array of bandwidths in `msg`
     * at index `idx`.
     * When -1 is given as `idx,` the bandwidth is inserted at the end.
     */
    insert_bandwidth(idx: number, bw: SDPBandwidth): SDPResult
    /**
     * Insert `email` into the array of emails in `msg` at index `idx`.
     * When -1 is given as `idx,` the email is inserted at the end.
     */
    insert_email(idx: number, email: string): SDPResult
    /**
     * Insert `phone` into the array of phone numbers in `msg` at index `idx`.
     * When -1 is given as `idx,` the phone is inserted at the end.
     */
    insert_phone(idx: number, phone: string): SDPResult
    /**
     * Insert time parameters into the array of times in `msg`
     * at index `idx`.
     * When -1 is given as `idx,` the times are inserted at the end.
     */
    insert_time(idx: number, t: SDPTime): SDPResult
    /**
     * Insert zone parameters into the array of zones in `msg`
     * at index `idx`.
     * When -1 is given as `idx,` the zone is inserted at the end.
     */
    insert_zone(idx: number, zone: SDPZone): SDPResult
    /**
     * Get the number of media descriptions in `msg`.
     */
    medias_len(): number
    /**
     * Creates a new #GstMIKEYMessage after parsing the key-mgmt attribute
     * from a #GstSDPMessage.
     */
    parse_keymgmt(): [ /* returnType */ SDPResult, /* mikey */ MIKEYMessage ]
    /**
     * Get the number of phones in `msg`.
     */
    phones_len(): number
    /**
     * Remove the attribute in `msg` at index `idx`.
     */
    remove_attribute(idx: number): SDPResult
    /**
     * Remove the bandwidth information in `msg` at index `idx`.
     */
    remove_bandwidth(idx: number): SDPResult
    /**
     * Remove the email in `msg` at index `idx`.
     */
    remove_email(idx: number): SDPResult
    /**
     * Remove the phone number in `msg` at index `idx`.
     */
    remove_phone(idx: number): SDPResult
    /**
     * Remove the time information in `msg` at index `idx`.
     */
    remove_time(idx: number): SDPResult
    /**
     * Remove the zone information in `msg` at index `idx`.
     */
    remove_zone(idx: number): SDPResult
    /**
     * Replace the attribute in `msg` at index `idx` with `attr`.
     */
    replace_attribute(idx: number, attr: SDPAttribute): SDPResult
    /**
     * Replace the bandwidth information in `msg` at index `idx` with `bw`.
     */
    replace_bandwidth(idx: number, bw: SDPBandwidth): SDPResult
    /**
     * Replace the email in `msg` at index `idx` with `email`.
     */
    replace_email(idx: number, email: string): SDPResult
    /**
     * Replace the phone number in `msg` at index `idx` with `phone`.
     */
    replace_phone(idx: number, phone: string): SDPResult
    /**
     * Replace the time information in `msg` at index `idx` with `t`.
     */
    replace_time(idx: number, t: SDPTime): SDPResult
    /**
     * Replace the zone information in `msg` at index `idx` with `zone`.
     */
    replace_zone(idx: number, zone: SDPZone): SDPResult
    /**
     * Configure the SDP connection in `msg` with the given parameters.
     */
    set_connection(nettype: string, addrtype: string, address: string, ttl: number, addr_number: number): SDPResult
    /**
     * Set the information in `msg`.
     */
    set_information(information: string): SDPResult
    /**
     * Adds the encryption information to `msg`.
     */
    set_key(type: string, data: string): SDPResult
    /**
     * Configure the SDP origin in `msg` with the given parameters.
     */
    set_origin(username: string, sess_id: string, sess_version: string, nettype: string, addrtype: string, addr: string): SDPResult
    /**
     * Set the session name in `msg`.
     */
    set_session_name(session_name: string): SDPResult
    /**
     * Set the URI in `msg`.
     */
    set_uri(uri: string): SDPResult
    /**
     * Set the version in `msg`.
     */
    set_version(version: string): SDPResult
    /**
     * Get the number of time information entries in `msg`.
     */
    times_len(): number
    /**
     * Free all resources allocated in `msg`. `msg` should not be used anymore after
     * this function. This function should be used when `msg` was allocated on the
     * stack and initialized with gst_sdp_message_init().
     */
    uninit(): SDPResult
    /**
     * Get the number of time zone information entries in `msg`.
     */
    zones_len(): number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Creates a uri from `msg` with the given `scheme`. The uri has the format:
     * 
     *  \`scheme:`///[#type=value *[&type=value]]
     * 
     *  Where each value is url encoded.
     */
    static as_uri(scheme: string, msg: SDPMessage): string
    /**
     * Parse `text` and create a new SDPMessage from these.
     */
    static new_from_text(text: string): [ /* returnType */ SDPResult, /* msg */ SDPMessage ]
    /**
     * Parse the contents of `size` bytes pointed to by `data` and store the result in
     * `msg`.
     */
    static parse_buffer(data: Uint8Array, msg: SDPMessage): SDPResult
    /**
     * Parse the null-terminated `uri` and store the result in `msg`.
     * 
     * The uri should be of the form:
     * 
     *  scheme://[address[:ttl=ttl][:noa=noa]]/[sessionname]
     *               [#type=value *[&type=value]]
     * 
     *  where value is url encoded. This looslely resembles
     *  http://tools.ietf.org/html/draft-fujikawa-sdp-url-01
     */
    static parse_uri(uri: string, msg: SDPMessage): SDPResult
}
class SDPOrigin {
    /* Fields of GstSdp-1.0.GstSdp.SDPOrigin */
    /**
     * the user's login on the originating host, or it is "-"
     *    if the originating host does not support the concept of user ids.
     */
    readonly username: string
    /**
     * is a numeric string such that the tuple of `username,` `sess_id,`
     *    `nettype,` `addrtype` and `addr` form a globally unique identifier for the
     *    session.
     */
    readonly sess_id: string
    /**
     * a version number for this announcement
     */
    readonly sess_version: string
    /**
     * the type of network. "IN" is defined to have the meaning
     *    "Internet".
     */
    readonly nettype: string
    /**
     * the type of `addr`.
     */
    readonly addrtype: string
    /**
     * the globally unique address of the machine from which the session was
     *     created.
     */
    readonly addr: string
    static name: string
}
class SDPTime {
    /* Fields of GstSdp-1.0.GstSdp.SDPTime */
    /**
     * start time for the conference. The value is the decimal
     *     representation of Network Time Protocol (NTP) time values in seconds
     */
    readonly start: string
    /**
     * stop time for the conference. The value is the decimal
     *     representation of Network Time Protocol (NTP) time values in seconds
     */
    readonly stop: string
    /**
     * repeat times for a session
     */
    readonly repeat: object[]
    /* Methods of GstSdp-1.0.GstSdp.SDPTime */
    /**
     * Reset the time information in `t`.
     */
    clear(): SDPResult
    /**
     * Set time information `start,` `stop` and `repeat` in `t`.
     */
    set(start: string, stop: string, repeat: string[]): SDPResult
    static name: string
}
class SDPZone {
    /* Fields of GstSdp-1.0.GstSdp.SDPZone */
    /**
     * the NTP time that a time zone adjustment happens
     */
    readonly time: string
    /**
     * the offset from the time when the session was first scheduled
     */
    readonly typed_time: string
    /* Methods of GstSdp-1.0.GstSdp.SDPZone */
    /**
     * Reset the zone information in `zone`.
     */
    clear(): SDPResult
    /**
     * Set zone information in `zone`.
     */
    set(adj_time: string, typed_time: string): SDPResult
    static name: string
}
}
export default GstSdp;