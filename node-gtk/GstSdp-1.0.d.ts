/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstSdp-1.0
 */

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
function sdpAddressIsMulticast(nettype: string, addrtype: string, addr: string): boolean
function sdpMakeKeymgmt(uri: string, base64: string): string
function sdpMediaNew(): [ /* returnType */ SDPResult, /* media */ SDPMedia ]
function sdpMediaSetMediaFromCaps(caps: Gst.Caps, media: SDPMedia): SDPResult
function sdpMessageAsUri(scheme: string, msg: SDPMessage): string
function sdpMessageNew(): [ /* returnType */ SDPResult, /* msg */ SDPMessage ]
function sdpMessageNewFromText(text: string): [ /* returnType */ SDPResult, /* msg */ SDPMessage ]
function sdpMessageParseBuffer(data: Uint8Array, msg: SDPMessage): SDPResult
function sdpMessageParseUri(uri: string, msg: SDPMessage): SDPResult
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
    readonly v: boolean
    /**
     * a #GstMIKEYPRFFunc
     */
    readonly prfFunc: MIKEYPRFFunc
    /**
     * Identifies the Crypto Session Bundle
     */
    readonly cSBId: number
    /**
     * a #GstMIKEYMapType
     */
    readonly mapType: MIKEYMapType
    /**
     * map info array of type depending on `map_type`
     */
    readonly mapInfo: object[]
    /**
     * the payload array of #GstMIKEYPayload
     */
    readonly payloads: object[]
    /* Methods of GstSdp-1.0.GstSdp.MIKEYMessage */
    /**
     * Add a Crypto policy for SRTP to `msg`.
     */
    addCsSrtp(policy: number, ssrc: number, roc: number): boolean
    /**
     * Add a new payload to `msg`.
     */
    addPayload(payload: MIKEYPayload): boolean
    /**
     * Add a new PKE payload to `msg` with the given parameters.
     */
    addPke(c: MIKEYCacheType, data: Uint8Array): boolean
    /**
     * Add a new RAND payload to `msg` with the given parameters.
     */
    addRand(rand: Uint8Array): boolean
    /**
     * Add a new RAND payload to `msg` with `len` random bytes.
     */
    addRandLen(len: number): boolean
    /**
     * Add a new T payload to `msg` with the given parameters.
     */
    addT(type: MIKEYTSType, tsValue: Uint8Array): boolean
    /**
     * Add a new T payload to `msg` that contains the current time
     * in NTP-UTC format.
     */
    addTNowNtpUtc(): boolean
    base64Encode(): string
    /**
     * Find the `nth` occurrence of the payload with `type` in `msg`.
     */
    findPayload(type: MIKEYPayloadType, nth: number): MIKEYPayload
    /**
     * Get the policy information of `msg` at `idx`.
     */
    getCsSrtp(idx: number): MIKEYMapSRTP
    /**
     * Get the number of crypto sessions in `msg`.
     */
    getNCs(): number
    /**
     * Get the number of payloads in `msg`.
     */
    getNPayloads(): number
    /**
     * Get the #GstMIKEYPayload at `idx` in `msg`
     */
    getPayload(idx: number): MIKEYPayload
    /**
     * Insert a Crypto Session map for SRTP in `msg` at `idx`
     * 
     * When `idx` is -1, the policy will be appended.
     */
    insertCsSrtp(idx: number, map: MIKEYMapSRTP): boolean
    /**
     * Insert the `payload` at index `idx` in `msg`. If `idx` is -1, the payload
     * will be appended to `msg`.
     */
    insertPayload(idx: number, payload: MIKEYPayload): boolean
    /**
     * Remove the SRTP policy at `idx`.
     */
    removeCsSrtp(idx: number): boolean
    /**
     * Remove the payload in `msg` at `idx`
     */
    removePayload(idx: number): boolean
    /**
     * Replace a Crypto Session map for SRTP in `msg` at `idx` with `map`.
     */
    replaceCsSrtp(idx: number, map: MIKEYMapSRTP): boolean
    /**
     * Replace the payload at `idx` in `msg` with `payload`.
     */
    replacePayload(idx: number, payload: MIKEYPayload): boolean
    /**
     * Set the information in `msg`.
     */
    setInfo(version: number, type: MIKEYType, v: boolean, prfFunc: MIKEYPRFFunc, cSBId: number, mapType: MIKEYMapType): boolean
    /**
     * Convert `msg` to a #GBytes.
     */
    toBytes(info: MIKEYEncryptInfo): any
    toCaps(caps: Gst.Caps): boolean
    static name: string
    static new(): MIKEYMessage
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MIKEYMessage
    static newFromBytes(bytes: any, info: MIKEYDecryptInfo): MIKEYMessage
    static newFromCaps(caps: Gst.Caps): MIKEYMessage
    static newFromData(data: Uint8Array, info: MIKEYDecryptInfo): MIKEYMessage
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
    kemacAddSub(newpay: MIKEYPayload): boolean
    /**
     * Get the number of sub payloads of `payload`. `payload` should be of type
     * %GST_MIKEY_PT_KEMAC.
     */
    kemacGetNSub(): number
    /**
     * Get the sub payload of `payload` at `idx`. `payload` should be of type
     * %GST_MIKEY_PT_KEMAC.
     */
    kemacGetSub(idx: number): MIKEYPayload
    /**
     * Remove the sub payload at `idx` in `payload`.
     */
    kemacRemoveSub(idx: number): boolean
    /**
     * Set the KEMAC parameters. `payload` should point to a %GST_MIKEY_PT_KEMAC
     * payload.
     */
    kemacSet(encAlg: MIKEYEncAlg, macAlg: MIKEYMacAlg): boolean
    /**
     * Set the key validity period in the %GST_MIKEY_PT_KEY_DATA `payload`.
     */
    keyDataSetInterval(vfLen: number, vtData: Uint8Array): boolean
    /**
     * Set `key_len` bytes of `key_data` of type `key_type` as the key for the
     * %GST_MIKEY_PT_KEY_DATA `payload`.
     */
    keyDataSetKey(keyType: MIKEYKeyDataType, keyData: Uint8Array): boolean
    /**
     * Set the salt key data. If `salt_len` is 0 and `salt_data` is %NULL, the
     * salt data will be removed.
     */
    keyDataSetSalt(saltData?: Uint8Array | null): boolean
    /**
     * Set the SPI/MKI validity in the %GST_MIKEY_PT_KEY_DATA `payload`.
     */
    keyDataSetSpi(spiData: Uint8Array): boolean
    /**
     * Set the PKE values in `payload`. `payload` must be of type
     * %GST_MIKEY_PT_PKE.
     */
    pkeSet(c: MIKEYCacheType, data: Uint8Array): boolean
    /**
     * Set the random values in a %GST_MIKEY_PT_RAND `payload`.
     */
    randSet(rand: Uint8Array): boolean
    /**
     * Add a new parameter to the %GST_MIKEY_PT_SP `payload` with `type,` `len`
     * and `val`.
     */
    spAddParam(type: number, val: Uint8Array): boolean
    /**
     * Get the number of security policy parameters in a %GST_MIKEY_PT_SP
     * `payload`.
     */
    spGetNParams(): number
    /**
     * Get the Security Policy parameter in a %GST_MIKEY_PT_SP `payload`
     * at `idx`.
     */
    spGetParam(idx: number): MIKEYPayloadSPParam
    /**
     * Remove the Security Policy parameters from a %GST_MIKEY_PT_SP
     * `payload` at `idx`.
     */
    spRemoveParam(idx: number): boolean
    /**
     * Set the Security Policy parameters for `payload`.
     */
    spSet(policy: number, proto: MIKEYSecProto): boolean
    /**
     * Set the timestamp in a %GST_MIKEY_PT_T `payload`.
     */
    tSet(type: MIKEYTSType, tsValue: Uint8Array): boolean
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
    readonly encAlg: MIKEYEncAlg
    /**
     * the #GstMIKEYMacAlg
     */
    readonly macAlg: MIKEYMacAlg
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
    readonly keyType: MIKEYKeyDataType
    /**
     * length of `key_data`
     */
    readonly keyLen: number
    /**
     * the key data
     */
    readonly keyData: number
    /**
     * the length of `salt_data,` can be 0
     */
    readonly saltLen: number
    /**
     * salt data
     */
    readonly saltData: number
    /**
     * the Key Validity type
     */
    readonly kvType: MIKEYKVType
    /**
     * length of `kv_data`
     */
    readonly kvLen: Uint8Array
    /**
     * key validity data
     */
    readonly kvData: Uint8Array
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
    readonly c: MIKEYCacheType
    /**
     * length of `data`
     */
    readonly dataLen: number
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
    readonly tsValue: number
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
    readonly addrNumber: number
    /* Methods of GstSdp-1.0.GstSdp.SDPConnection */
    /**
     * Clear the connection.
     */
    clear(): SDPResult
    /**
     * Set the connection with the given parameters.
     */
    set(nettype: string, addrtype: string, address: string, ttl: number, addrNumber: number): SDPResult
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
    readonly numPorts: number
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
    addAttribute(key: string, value?: string | null): SDPResult
    /**
     * Add the bandwidth information with `bwtype` and `bandwidth` to `media`.
     */
    addBandwidth(bwtype: string, bandwidth: number): SDPResult
    /**
     * Add the given connection parameters to `media`.
     */
    addConnection(nettype: string, addrtype: string, address: string, ttl: number, addrNumber: number): SDPResult
    /**
     * Add the format information to `media`.
     */
    addFormat(format: string): SDPResult
    /**
     * Convert the contents of `media` to a text string.
     */
    asText(): string
    /**
     * Get the number of attribute fields in `media`.
     */
    attributesLen(): number
    /**
     * Mapping of attributes of #GstSDPMedia to #GstCaps
     */
    attributesToCaps(caps: Gst.Caps): SDPResult
    /**
     * Get the number of bandwidth fields in `media`.
     */
    bandwidthsLen(): number
    /**
     * Get the number of connection fields in `media`.
     */
    connectionsLen(): number
    /**
     * Allocate a new copy of `media` and store the result in `copy`. The value in
     * `copy` should be release with gst_sdp_media_free function.
     */
    copy(): [ /* returnType */ SDPResult, /* copy */ SDPMedia ]
    /**
     * Get the number of formats in `media`.
     */
    formatsLen(): number
    /**
     * Free all resources allocated by `media`. `media` should not be used anymore after
     * this function. This function should be used when `media` was dynamically
     * allocated with gst_sdp_media_new().
     */
    free(): SDPResult
    /**
     * Get the attribute at position `idx` in `media`.
     */
    getAttribute(idx: number): SDPAttribute
    /**
     * Get the first attribute value for `key` in `media`.
     */
    getAttributeVal(key: string): string
    /**
     * Get the `nth` attribute value for `key` in `media`.
     */
    getAttributeValN(key: string, nth: number): string
    /**
     * Get the bandwidth at position `idx` in `media`.
     */
    getBandwidth(idx: number): SDPBandwidth
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
    getCapsFromMedia(pt: number): Gst.Caps
    /**
     * Get the connection at position `idx` in `media`.
     */
    getConnection(idx: number): SDPConnection
    /**
     * Get the format information at position `idx` in `media`.
     */
    getFormat(idx: number): string
    /**
     * Get the information of `media`
     */
    getInformation(): string
    /**
     * Get the encryption information from `media`.
     */
    getKey(): SDPKey
    /**
     * Get the media description of `media`.
     */
    getMedia(): string
    /**
     * Get the number of ports for `media`.
     */
    getNumPorts(): number
    /**
     * Get the port number for `media`.
     */
    getPort(): number
    /**
     * Get the transport protocol of `media`
     */
    getProto(): string
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
    insertAttribute(idx: number, attr: SDPAttribute): SDPResult
    /**
     * Insert the bandwidth information to `media` at `idx`. When `idx` is -1,
     * the bandwidth is appended.
     */
    insertBandwidth(idx: number, bw: SDPBandwidth): SDPResult
    /**
     * Insert the connection information to `media` at `idx`. When `idx` is -1,
     * the connection is appended.
     */
    insertConnection(idx: number, conn: SDPConnection): SDPResult
    /**
     * Insert the format information to `media` at `idx`. When `idx` is -1,
     * the format is appended.
     */
    insertFormat(idx: number, format: string): SDPResult
    /**
     * Creates a new #GstMIKEYMessage after parsing the key-mgmt attribute
     * from a #GstSDPMedia.
     */
    parseKeymgmt(): [ /* returnType */ SDPResult, /* mikey */ MIKEYMessage ]
    /**
     * Remove the attribute in `media` at `idx`.
     */
    removeAttribute(idx: number): SDPResult
    /**
     * Remove the bandwidth information in `media` at `idx`.
     */
    removeBandwidth(idx: number): SDPResult
    /**
     * Remove the connection information in `media` at `idx`.
     */
    removeConnection(idx: number): SDPResult
    /**
     * Remove the format information in `media` at `idx`.
     */
    removeFormat(idx: number): SDPResult
    /**
     * Replace the attribute in `media` at `idx` with `attr`.
     */
    replaceAttribute(idx: number, attr: SDPAttribute): SDPResult
    /**
     * Replace the bandwidth information in `media` at `idx` with `bw`.
     */
    replaceBandwidth(idx: number, bw: SDPBandwidth): SDPResult
    /**
     * Replace the connection information in `media` at `idx` with `conn`.
     */
    replaceConnection(idx: number, conn: SDPConnection): SDPResult
    /**
     * Replace the format information in `media` at `idx` with `format`.
     */
    replaceFormat(idx: number, format: string): SDPResult
    /**
     * Set the media information of `media` to `information`.
     */
    setInformation(information: string): SDPResult
    /**
     * Adds the encryption information to `media`.
     */
    setKey(type: string, data: string): SDPResult
    /**
     * Set the media description of `media` to `med`.
     */
    setMedia(med: string): SDPResult
    /**
     * Set the port information in `media`.
     */
    setPortInfo(port: number, numPorts: number): SDPResult
    /**
     * Set the media transport protocol of `media` to `proto`.
     */
    setProto(proto: string): SDPResult
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
    static setMediaFromCaps(caps: Gst.Caps, media: SDPMedia): SDPResult
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
    readonly sessionName: string
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
    addAttribute(key: string, value?: string | null): SDPResult
    /**
     * Add the specified bandwidth information to `msg`.
     */
    addBandwidth(bwtype: string, bandwidth: number): SDPResult
    /**
     * Add `email` to the list of emails in `msg`.
     */
    addEmail(email: string): SDPResult
    /**
     * Adds `media` to the array of medias in `msg`. This function takes ownership of
     * the contents of `media` so that `media` will have to be reinitialized with
     * gst_sdp_media_init() before it can be used again.
     */
    addMedia(media: SDPMedia): SDPResult
    /**
     * Add `phone` to the list of phones in `msg`.
     */
    addPhone(phone: string): SDPResult
    /**
     * Add time information `start` and `stop` to `msg`.
     */
    addTime(start: string, stop: string, repeat: string[]): SDPResult
    /**
     * Add time zone information to `msg`.
     */
    addZone(adjTime: string, typedTime: string): SDPResult
    /**
     * Convert the contents of `msg` to a text string.
     */
    asText(): string
    /**
     * Get the number of attributes in `msg`.
     */
    attributesLen(): number
    /**
     * Mapping of attributes of #GstSDPMessage to #GstCaps
     */
    attributesToCaps(caps: Gst.Caps): SDPResult
    /**
     * Get the number of bandwidth information in `msg`.
     */
    bandwidthsLen(): number
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
    emailsLen(): number
    /**
     * Free all resources allocated by `msg`. `msg` should not be used anymore after
     * this function. This function should be used when `msg` was dynamically
     * allocated with gst_sdp_message_new().
     */
    free(): SDPResult
    /**
     * Get the attribute at position `idx` in `msg`.
     */
    getAttribute(idx: number): SDPAttribute
    /**
     * Get the first attribute with key `key` in `msg`.
     */
    getAttributeVal(key: string): string
    /**
     * Get the `nth` attribute with key `key` in `msg`.
     */
    getAttributeValN(key: string, nth: number): string
    /**
     * Get the bandwidth at index `idx` from `msg`.
     */
    getBandwidth(idx: number): SDPBandwidth
    /**
     * Get the connection of `msg`.
     */
    getConnection(): SDPConnection
    /**
     * Get the email with number `idx` from `msg`.
     */
    getEmail(idx: number): string
    /**
     * Get the information in `msg`.
     */
    getInformation(): string
    /**
     * Get the encryption information from `msg`.
     */
    getKey(): SDPKey
    /**
     * Get the media description at index `idx` in `msg`.
     */
    getMedia(idx: number): SDPMedia
    /**
     * Get the origin of `msg`.
     */
    getOrigin(): SDPOrigin
    /**
     * Get the phone with number `idx` from `msg`.
     */
    getPhone(idx: number): string
    /**
     * Get the session name in `msg`.
     */
    getSessionName(): string
    /**
     * Get time information with index `idx` from `msg`.
     */
    getTime(idx: number): SDPTime
    /**
     * Get the URI in `msg`.
     */
    getUri(): string
    /**
     * Get the version in `msg`.
     */
    getVersion(): string
    /**
     * Get time zone information with index `idx` from `msg`.
     */
    getZone(idx: number): SDPZone
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
    insertAttribute(idx: number, attr: SDPAttribute): SDPResult
    /**
     * Insert bandwidth parameters into the array of bandwidths in `msg`
     * at index `idx`.
     * When -1 is given as `idx,` the bandwidth is inserted at the end.
     */
    insertBandwidth(idx: number, bw: SDPBandwidth): SDPResult
    /**
     * Insert `email` into the array of emails in `msg` at index `idx`.
     * When -1 is given as `idx,` the email is inserted at the end.
     */
    insertEmail(idx: number, email: string): SDPResult
    /**
     * Insert `phone` into the array of phone numbers in `msg` at index `idx`.
     * When -1 is given as `idx,` the phone is inserted at the end.
     */
    insertPhone(idx: number, phone: string): SDPResult
    /**
     * Insert time parameters into the array of times in `msg`
     * at index `idx`.
     * When -1 is given as `idx,` the times are inserted at the end.
     */
    insertTime(idx: number, t: SDPTime): SDPResult
    /**
     * Insert zone parameters into the array of zones in `msg`
     * at index `idx`.
     * When -1 is given as `idx,` the zone is inserted at the end.
     */
    insertZone(idx: number, zone: SDPZone): SDPResult
    /**
     * Get the number of media descriptions in `msg`.
     */
    mediasLen(): number
    /**
     * Creates a new #GstMIKEYMessage after parsing the key-mgmt attribute
     * from a #GstSDPMessage.
     */
    parseKeymgmt(): [ /* returnType */ SDPResult, /* mikey */ MIKEYMessage ]
    /**
     * Get the number of phones in `msg`.
     */
    phonesLen(): number
    /**
     * Remove the attribute in `msg` at index `idx`.
     */
    removeAttribute(idx: number): SDPResult
    /**
     * Remove the bandwidth information in `msg` at index `idx`.
     */
    removeBandwidth(idx: number): SDPResult
    /**
     * Remove the email in `msg` at index `idx`.
     */
    removeEmail(idx: number): SDPResult
    /**
     * Remove the phone number in `msg` at index `idx`.
     */
    removePhone(idx: number): SDPResult
    /**
     * Remove the time information in `msg` at index `idx`.
     */
    removeTime(idx: number): SDPResult
    /**
     * Remove the zone information in `msg` at index `idx`.
     */
    removeZone(idx: number): SDPResult
    /**
     * Replace the attribute in `msg` at index `idx` with `attr`.
     */
    replaceAttribute(idx: number, attr: SDPAttribute): SDPResult
    /**
     * Replace the bandwidth information in `msg` at index `idx` with `bw`.
     */
    replaceBandwidth(idx: number, bw: SDPBandwidth): SDPResult
    /**
     * Replace the email in `msg` at index `idx` with `email`.
     */
    replaceEmail(idx: number, email: string): SDPResult
    /**
     * Replace the phone number in `msg` at index `idx` with `phone`.
     */
    replacePhone(idx: number, phone: string): SDPResult
    /**
     * Replace the time information in `msg` at index `idx` with `t`.
     */
    replaceTime(idx: number, t: SDPTime): SDPResult
    /**
     * Replace the zone information in `msg` at index `idx` with `zone`.
     */
    replaceZone(idx: number, zone: SDPZone): SDPResult
    /**
     * Configure the SDP connection in `msg` with the given parameters.
     */
    setConnection(nettype: string, addrtype: string, address: string, ttl: number, addrNumber: number): SDPResult
    /**
     * Set the information in `msg`.
     */
    setInformation(information: string): SDPResult
    /**
     * Adds the encryption information to `msg`.
     */
    setKey(type: string, data: string): SDPResult
    /**
     * Configure the SDP origin in `msg` with the given parameters.
     */
    setOrigin(username: string, sessId: string, sessVersion: string, nettype: string, addrtype: string, addr: string): SDPResult
    /**
     * Set the session name in `msg`.
     */
    setSessionName(sessionName: string): SDPResult
    /**
     * Set the URI in `msg`.
     */
    setUri(uri: string): SDPResult
    /**
     * Set the version in `msg`.
     */
    setVersion(version: string): SDPResult
    /**
     * Get the number of time information entries in `msg`.
     */
    timesLen(): number
    /**
     * Free all resources allocated in `msg`. `msg` should not be used anymore after
     * this function. This function should be used when `msg` was allocated on the
     * stack and initialized with gst_sdp_message_init().
     */
    uninit(): SDPResult
    /**
     * Get the number of time zone information entries in `msg`.
     */
    zonesLen(): number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Creates a uri from `msg` with the given `scheme`. The uri has the format:
     * 
     *  \`scheme:`///[#type=value *[&type=value]]
     * 
     *  Where each value is url encoded.
     */
    static asUri(scheme: string, msg: SDPMessage): string
    /**
     * Parse `text` and create a new SDPMessage from these.
     */
    static newFromText(text: string): [ /* returnType */ SDPResult, /* msg */ SDPMessage ]
    /**
     * Parse the contents of `size` bytes pointed to by `data` and store the result in
     * `msg`.
     */
    static parseBuffer(data: Uint8Array, msg: SDPMessage): SDPResult
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
    static parseUri(uri: string, msg: SDPMessage): SDPResult
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
    readonly sessId: string
    /**
     * a version number for this announcement
     */
    readonly sessVersion: string
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
    readonly typedTime: string
    /* Methods of GstSdp-1.0.GstSdp.SDPZone */
    /**
     * Reset the zone information in `zone`.
     */
    clear(): SDPResult
    /**
     * Set zone information in `zone`.
     */
    set(adjTime: string, typedTime: string): SDPResult
    static name: string
}
}
export default GstSdp;