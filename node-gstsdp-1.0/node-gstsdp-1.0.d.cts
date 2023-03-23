
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * GstSdp-1.0
 */

import type Gst from '@girs/node-gst-1.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type GModule from '@girs/node-gmodule-2.0';

/**
 * The different cache types
 */
export enum MIKEYCacheType {
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
export enum MIKEYEncAlg {
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
export enum MIKEYKVType {
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
export enum MIKEYKeyDataType {
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
export enum MIKEYMacAlg {
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
export enum MIKEYMapType {
    /**
     * SRTP
     */
    MIKEY_MAP_TYPE_SRTP,
}
/**
 * The PRF function that has been/will be used for key derivation
 */
export enum MIKEYPRFFunc {
    /**
     * MIKEY-1 PRF function
     */
    MIKEY_PRF_MIKEY_1,
}
/**
 * Different MIKEY Payload types.
 */
export enum MIKEYPayloadType {
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
export enum MIKEYSecProto {
    /**
     * SRTP
     */
    MIKEY_SEC_PROTO_SRTP,
}
/**
 * This policy specifies the parameters for SRTP and SRTCP
 */
export enum MIKEYSecSRTP {
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
export enum MIKEYTSType {
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
export enum MIKEYType {
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
export enum SDPResult {
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
export const MIKEY_VERSION: number
/**
 * The Application-Specific Maximum bandwidth modifier.
 */
export const SDP_BWTYPE_AS: string | null
/**
 * The Conference Total bandwidth modifier.
 */
export const SDP_BWTYPE_CT: string | null
/**
 * The extension prefix bandwidth modifier.
 */
export const SDP_BWTYPE_EXT_PREFIX: string | null
/**
 * RTCP bandwidth allocated to data receivers (RFC 3556).
 */
export const SDP_BWTYPE_RR: string | null
/**
 * RTCP bandwidth allocated to active data senders (RFC 3556).
 */
export const SDP_BWTYPE_RS: string | null
/**
 * Transport Independent Application Specific Maximum bandwidth (RFC 3890).
 */
export const SDP_BWTYPE_TIAS: string | null
/**
 * Check if the given `addr` is a multicast address.
 * @param nettype a network type
 * @param addrtype an address type
 * @param addr an address
 * @returns TRUE when @addr is multicast.
 */
export function sdpAddressIsMulticast(nettype: string | null, addrtype: string | null, addr: string | null): boolean
/**
 * Makes key management data
 * @param uri a #gchar URI
 * @param base64 a #gchar base64-encoded key data
 * @returns a #gchar key-mgmt data,
 */
export function sdpMakeKeymgmt(uri: string | null, base64: string | null): string | null
/**
 * Initialize `media` so that its contents are as if it was freshly allocated
 * with gst_sdp_media_new(). This function is mostly used to initialize a media
 * allocated on the stack. gst_sdp_media_uninit() undoes this operation.
 * 
 * When this function is invoked on newly allocated data (with malloc or on the
 * stack), its contents should be set to 0 before calling this function.
 * @returns a #GstSDPResult.
 */
export function sdpMediaInit(): [ /* returnType */ SDPResult, /* media */ SDPMedia ]
/**
 * Allocate a new GstSDPMedia and store the result in `media`.
 * @returns a #GstSDPResult.
 */
export function sdpMediaNew(): [ /* returnType */ SDPResult, /* media */ SDPMedia ]
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
 * @param caps a #GstCaps
 * @returns a #GstSDPResult.
 */
export function sdpMediaSetMediaFromCaps(caps: Gst.Caps): [ /* returnType */ SDPResult, /* media */ SDPMedia ]
/**
 * Creates a uri from `msg` with the given `scheme`. The uri has the format:
 * 
 *  \`scheme:`///[#type=value *[&type=value]]
 * 
 *  Where each value is url encoded.
 * @param scheme the uri scheme
 * @param msg the #GstSDPMessage
 * @returns a uri for @msg.
 */
export function sdpMessageAsUri(scheme: string | null, msg: SDPMessage): string | null
/**
 * Initialize `msg` so that its contents are as if it was freshly allocated
 * with gst_sdp_message_new(). This function is mostly used to initialize a message
 * allocated on the stack. gst_sdp_message_uninit() undoes this operation.
 * 
 * When this function is invoked on newly allocated data (with malloc or on the
 * stack), its contents should be set to 0 before calling this function.
 * @returns a #GstSDPResult.
 */
export function sdpMessageInit(): [ /* returnType */ SDPResult, /* msg */ SDPMessage ]
/**
 * Allocate a new GstSDPMessage and store the result in `msg`.
 * @returns a #GstSDPResult.
 */
export function sdpMessageNew(): [ /* returnType */ SDPResult, /* msg */ SDPMessage ]
/**
 * Parse `text` and create a new SDPMessage from these.
 * @param text A dynamically allocated string representing the SDP description
 * @returns a #GstSDPResult.
 */
export function sdpMessageNewFromText(text: string | null): [ /* returnType */ SDPResult, /* msg */ SDPMessage ]
/**
 * Parse the contents of `size` bytes pointed to by `data` and store the result in
 * `msg`.
 * @param data the start of the buffer
 * @param msg the result #GstSDPMessage
 * @returns #GST_SDP_OK on success.
 */
export function sdpMessageParseBuffer(data: Uint8Array, msg: SDPMessage): SDPResult
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
 * @param uri the start of the uri
 * @param msg the result #GstSDPMessage
 * @returns #GST_SDP_OK on success.
 */
export function sdpMessageParseUri(uri: string | null, msg: SDPMessage): SDPResult
export interface MIKEYDecryptInfo {
}

export class MIKEYDecryptInfo {

    // Own properties of GstSdp-1.0.GstSdp.MIKEYDecryptInfo

    static name: string
}

export interface MIKEYEncryptInfo {
}

export class MIKEYEncryptInfo {

    // Own properties of GstSdp-1.0.GstSdp.MIKEYEncryptInfo

    static name: string
}

export interface MIKEYMapSRTP {

    // Own fields of GstSdp-1.0.GstSdp.MIKEYMapSRTP

    /**
     * The security policy applied for the stream with `ssrc`
     * @field 
     */
    policy: number
    /**
     * the SSRC that must be used for the stream
     * @field 
     */
    ssrc: number
    /**
     * current rollover counter
     * @field 
     */
    roc: number
}

/**
 * The Security policy Map item for SRTP
 * @record 
 */
export class MIKEYMapSRTP {

    // Own properties of GstSdp-1.0.GstSdp.MIKEYMapSRTP

    static name: string
}

export interface MIKEYMessage {

    // Own fields of GstSdp-1.0.GstSdp.MIKEYMessage

    /**
     * the version
     * @field 
     */
    version: number
    /**
     * the #GstMIKEYType message type
     * @field 
     */
    type: MIKEYType
    /**
     * verify flag
     * @field 
     */
    v: boolean
    /**
     * a #GstMIKEYPRFFunc
     * @field 
     */
    prfFunc: MIKEYPRFFunc
    /**
     * Identifies the Crypto Session Bundle
     * @field 
     */
    cSBId: number
    /**
     * a #GstMIKEYMapType
     * @field 
     */
    mapType: MIKEYMapType
    /**
     * map info array of type depending on `map_type`
     * @field 
     */
    mapInfo: any[]
    /**
     * the payload array of #GstMIKEYPayload
     * @field 
     */
    payloads: any[]

    // Owm methods of GstSdp-1.0.GstSdp.MIKEYMessage

    /**
     * Add a Crypto policy for SRTP to `msg`.
     * @param policy The security policy applied for the stream with `ssrc`
     * @param ssrc the SSRC that must be used for the stream
     * @param roc current rollover counter
     * @returns %TRUE on success
     */
    addCsSrtp(policy: number, ssrc: number, roc: number): boolean
    /**
     * Add a new payload to `msg`.
     * @param payload a #GstMIKEYPayload
     * @returns %TRUE on success
     */
    addPayload(payload: MIKEYPayload): boolean
    /**
     * Add a new PKE payload to `msg` with the given parameters.
     * @param c envelope key cache indicator
     * @param data the encrypted envelope key
     * @returns %TRUE on success
     */
    addPke(c: MIKEYCacheType, data: Uint8Array): boolean
    /**
     * Add a new RAND payload to `msg` with the given parameters.
     * @param rand random data
     * @returns %TRUE on success
     */
    addRand(rand: Uint8Array): boolean
    /**
     * Add a new RAND payload to `msg` with `len` random bytes.
     * @param len length
     * @returns %TRUE on success
     */
    addRandLen(len: number): boolean
    /**
     * Add a new T payload to `msg` with the given parameters.
     * @param type specifies the timestamp type used
     * @param tsValue The timestamp value of the specified `type`
     * @returns %TRUE on success
     */
    addT(type: MIKEYTSType, tsValue: Uint8Array): boolean
    /**
     * Add a new T payload to `msg` that contains the current time
     * in NTP-UTC format.
     * @returns %TRUE on success
     */
    addTNowNtpUtc(): boolean
    base64Encode(): string | null
    /**
     * Find the `nth` occurrence of the payload with `type` in `msg`.
     * @param type a #GstMIKEYPayloadType
     * @param nth payload to find
     * @returns the @nth #GstMIKEYPayload of @type.
     */
    findPayload(type: MIKEYPayloadType, nth: number): MIKEYPayload | null
    /**
     * Get the policy information of `msg` at `idx`.
     * @param idx an index
     * @returns a #GstMIKEYMapSRTP
     */
    getCsSrtp(idx: number): MIKEYMapSRTP | null
    /**
     * Get the number of crypto sessions in `msg`.
     * @returns the number of crypto sessions
     */
    getNCs(): number
    /**
     * Get the number of payloads in `msg`.
     * @returns the number of payloads in @msg
     */
    getNPayloads(): number
    /**
     * Get the #GstMIKEYPayload at `idx` in `msg`
     * @param idx an index
     * @returns the #GstMIKEYPayload at @idx. The payload remains valid for as long as it is part of @msg.
     */
    getPayload(idx: number): MIKEYPayload | null
    /**
     * Insert a Crypto Session map for SRTP in `msg` at `idx`
     * 
     * When `idx` is -1, the policy will be appended.
     * @param idx the index to insert at
     * @param map the map info
     * @returns %TRUE on success
     */
    insertCsSrtp(idx: number, map: MIKEYMapSRTP): boolean
    /**
     * Insert the `payload` at index `idx` in `msg`. If `idx` is -1, the payload
     * will be appended to `msg`.
     * @param idx an index
     * @param payload a #GstMIKEYPayload
     * @returns %TRUE on success
     */
    insertPayload(idx: number, payload: MIKEYPayload): boolean
    /**
     * Remove the SRTP policy at `idx`.
     * @param idx the index to remove
     * @returns %TRUE on success
     */
    removeCsSrtp(idx: number): boolean
    /**
     * Remove the payload in `msg` at `idx`
     * @param idx an index
     * @returns %TRUE on success
     */
    removePayload(idx: number): boolean
    /**
     * Replace a Crypto Session map for SRTP in `msg` at `idx` with `map`.
     * @param idx the index to insert at
     * @param map the map info
     * @returns %TRUE on success
     */
    replaceCsSrtp(idx: number, map: MIKEYMapSRTP): boolean
    /**
     * Replace the payload at `idx` in `msg` with `payload`.
     * @param idx an index
     * @param payload a #GstMIKEYPayload
     * @returns %TRUE on success
     */
    replacePayload(idx: number, payload: MIKEYPayload): boolean
    /**
     * Set the information in `msg`.
     * @param version a version
     * @param type a #GstMIKEYType
     * @param v verify flag
     * @param prfFunc the #GstMIKEYPRFFunc function to use
     * @param cSBId the Crypto Session Bundle id
     * @param mapType the #GstMIKEYMapType
     * @returns %TRUE on success
     */
    setInfo(version: number, type: MIKEYType, v: boolean, prfFunc: MIKEYPRFFunc, cSBId: number, mapType: MIKEYMapType): boolean
    /**
     * Convert `msg` to a #GBytes.
     * @param info a #GstMIKEYEncryptInfo
     * @returns a new #GBytes for @msg.
     */
    toBytes(info: MIKEYEncryptInfo): any
    toCaps(caps: Gst.Caps): boolean
}

/**
 * Structure holding the information of the MIKEY message
 * @record 
 */
export class MIKEYMessage {

    // Own properties of GstSdp-1.0.GstSdp.MIKEYMessage

    static name: string

    // Constructors of GstSdp-1.0.GstSdp.MIKEYMessage

    /**
     * Make a new MIKEY message.
     * @constructor 
     * @returns a new #GstMIKEYMessage on success
     */
    constructor() 
    /**
     * Make a new MIKEY message.
     * @constructor 
     * @returns a new #GstMIKEYMessage on success
     */
    static new(): MIKEYMessage
    /**
     * Make a new #GstMIKEYMessage from `bytes`.
     * @constructor 
     * @param bytes a #GBytes
     * @param info a #GstMIKEYDecryptInfo
     * @returns a new #GstMIKEYMessage
     */
    static newFromBytes(bytes: any, info: MIKEYDecryptInfo): MIKEYMessage
    /**
     * Makes mikey message including:
     *  - Security Policy Payload
     *  - Key Data Transport Payload
     *  - Key Data Sub-Payload
     * @constructor 
     * @param caps a #GstCaps, including SRTP parameters (srtp/srtcp cipher, authorization, key data)
     * @returns a #GstMIKEYMessage, or %NULL if there is no srtp information in the caps.
     */
    static newFromCaps(caps: Gst.Caps): MIKEYMessage
    /**
     * Parse `size` bytes from `data` into a #GstMIKEYMessage. `info` contains the
     * parameters to decrypt and verify the data.
     * @constructor 
     * @param data bytes to read
     * @param info #GstMIKEYDecryptInfo
     * @returns a #GstMIKEYMessage on success or %NULL when parsing failed and @error will be set.
     */
    static newFromData(data: Uint8Array, info: MIKEYDecryptInfo): MIKEYMessage
}

export interface MIKEYPayload {

    // Own fields of GstSdp-1.0.GstSdp.MIKEYPayload

    /**
     * the payload type
     * @field 
     */
    type: MIKEYPayloadType
    /**
     * length of the payload
     * @field 
     */
    len: number

    // Owm methods of GstSdp-1.0.GstSdp.MIKEYPayload

    /**
     * Add a new sub payload to `payload`.
     * @param newpay a #GstMIKEYPayload to add
     * @returns %TRUE on success.
     */
    kemacAddSub(newpay: MIKEYPayload): boolean
    /**
     * Get the number of sub payloads of `payload`. `payload` should be of type
     * %GST_MIKEY_PT_KEMAC.
     * @returns the number of sub payloads in @payload
     */
    kemacGetNSub(): number
    /**
     * Get the sub payload of `payload` at `idx`. `payload` should be of type
     * %GST_MIKEY_PT_KEMAC.
     * @param idx an index
     * @returns the #GstMIKEYPayload at @idx.
     */
    kemacGetSub(idx: number): MIKEYPayload | null
    /**
     * Remove the sub payload at `idx` in `payload`.
     * @param idx the index to remove
     * @returns %TRUE on success.
     */
    kemacRemoveSub(idx: number): boolean
    /**
     * Set the KEMAC parameters. `payload` should point to a %GST_MIKEY_PT_KEMAC
     * payload.
     * @param encAlg the #GstMIKEYEncAlg
     * @param macAlg a #GstMIKEYMacAlg
     * @returns %TRUE on success
     */
    kemacSet(encAlg: MIKEYEncAlg, macAlg: MIKEYMacAlg): boolean
    /**
     * Set the key validity period in the %GST_MIKEY_PT_KEY_DATA `payload`.
     * @param vfData the Valid From data
     * @param vtData the Valid To data
     * @returns %TRUE on success
     */
    keyDataSetInterval(vfData: Uint8Array, vtData: Uint8Array): boolean
    /**
     * Set `key_len` bytes of `key_data` of type `key_type` as the key for the
     * %GST_MIKEY_PT_KEY_DATA `payload`.
     * @param keyType a #GstMIKEYKeyDataType
     * @param keyData the key of type `key_type`
     * @returns %TRUE on success
     */
    keyDataSetKey(keyType: MIKEYKeyDataType, keyData: Uint8Array): boolean
    /**
     * Set the salt key data. If `salt_len` is 0 and `salt_data` is %NULL, the
     * salt data will be removed.
     * @param saltData the salt
     * @returns %TRUE on success
     */
    keyDataSetSalt(saltData: Uint8Array | null): boolean
    /**
     * Set the SPI/MKI validity in the %GST_MIKEY_PT_KEY_DATA `payload`.
     * @param spiData the SPI/MKI data
     * @returns %TRUE on success
     */
    keyDataSetSpi(spiData: Uint8Array): boolean
    /**
     * Set the PKE values in `payload`. `payload` must be of type
     * %GST_MIKEY_PT_PKE.
     * @param c envelope key cache indicator
     * @param data the encrypted envelope key
     * @returns %TRUE on success
     */
    pkeSet(c: MIKEYCacheType, data: Uint8Array): boolean
    /**
     * Set the random values in a %GST_MIKEY_PT_RAND `payload`.
     * @param rand random values
     * @returns %TRUE on success
     */
    randSet(rand: Uint8Array): boolean
    /**
     * Add a new parameter to the %GST_MIKEY_PT_SP `payload` with `type,` `len`
     * and `val`.
     * @param type a type
     * @param val `len` bytes of data
     * @returns %TRUE on success
     */
    spAddParam(type: number, val: Uint8Array): boolean
    /**
     * Get the number of security policy parameters in a %GST_MIKEY_PT_SP
     * `payload`.
     * @returns the number of parameters in @payload
     */
    spGetNParams(): number
    /**
     * Get the Security Policy parameter in a %GST_MIKEY_PT_SP `payload`
     * at `idx`.
     * @param idx an index
     * @returns the #GstMIKEYPayloadSPParam at @idx in @payload
     */
    spGetParam(idx: number): MIKEYPayloadSPParam | null
    /**
     * Remove the Security Policy parameters from a %GST_MIKEY_PT_SP
     * `payload` at `idx`.
     * @param idx an index
     * @returns %TRUE on success
     */
    spRemoveParam(idx: number): boolean
    /**
     * Set the Security Policy parameters for `payload`.
     * @param policy the policy number
     * @param proto a #GstMIKEYSecProto
     * @returns %TRUE on success
     */
    spSet(policy: number, proto: MIKEYSecProto): boolean
    /**
     * Set the timestamp in a %GST_MIKEY_PT_T `payload`.
     * @param type the #GstMIKEYTSType
     * @param tsValue the timestamp value
     * @returns %TRUE on success
     */
    tSet(type: MIKEYTSType, tsValue: Uint8Array): boolean
}

/**
 * Hold the common fields for all payloads
 * @record 
 */
export class MIKEYPayload {

    // Own properties of GstSdp-1.0.GstSdp.MIKEYPayload

    static name: string

    // Constructors of GstSdp-1.0.GstSdp.MIKEYPayload

    /**
     * Make a new #GstMIKEYPayload with `type`.
     * @constructor 
     * @param type a #GstMIKEYPayloadType
     * @returns a new #GstMIKEYPayload or %NULL on failure.
     */
    constructor(type: MIKEYPayloadType) 
    /**
     * Make a new #GstMIKEYPayload with `type`.
     * @constructor 
     * @param type a #GstMIKEYPayloadType
     * @returns a new #GstMIKEYPayload or %NULL on failure.
     */
    static new(type: MIKEYPayloadType): MIKEYPayload
}

export interface MIKEYPayloadKEMAC {

    // Own fields of GstSdp-1.0.GstSdp.MIKEYPayloadKEMAC

    /**
     * the common #GstMIKEYPayload
     * @field 
     */
    pt: MIKEYPayload
    /**
     * the #GstMIKEYEncAlg
     * @field 
     */
    encAlg: MIKEYEncAlg
    /**
     * the #GstMIKEYMacAlg
     * @field 
     */
    macAlg: MIKEYMacAlg
    /**
     * the subpayloads
     * @field 
     */
    subpayloads: any[]
}

/**
 * A structure holding the KEMAC payload
 * @record 
 */
export class MIKEYPayloadKEMAC {

    // Own properties of GstSdp-1.0.GstSdp.MIKEYPayloadKEMAC

    static name: string
}

export interface MIKEYPayloadKeyData {

    // Own fields of GstSdp-1.0.GstSdp.MIKEYPayloadKeyData

    /**
     * the payload header
     * @field 
     */
    pt: MIKEYPayload
    /**
     * the #GstMIKEYKeyDataType of `key_data`
     * @field 
     */
    keyType: MIKEYKeyDataType
    /**
     * length of `key_data`
     * @field 
     */
    keyLen: number
    /**
     * the key data
     * @field 
     */
    keyData: number
    /**
     * the length of `salt_data,` can be 0
     * @field 
     */
    saltLen: number
    /**
     * salt data
     * @field 
     */
    saltData: number
    /**
     * the Key Validity type
     * @field 
     */
    kvType: MIKEYKVType
    /**
     * length of `kv_data`
     * @field 
     */
    kvLen: Uint8Array
    /**
     * key validity data
     * @field 
     */
    kvData: Uint8Array
}

/**
 * The Key data payload contains key material. It should be added as sub
 * payload to the KEMAC.
 * @record 
 */
export class MIKEYPayloadKeyData {

    // Own properties of GstSdp-1.0.GstSdp.MIKEYPayloadKeyData

    static name: string
}

export interface MIKEYPayloadPKE {

    // Own fields of GstSdp-1.0.GstSdp.MIKEYPayloadPKE

    /**
     * the common #GstMIKEYPayload
     * @field 
     */
    pt: MIKEYPayload
    /**
     * envelope key cache indicator
     * @field 
     */
    c: MIKEYCacheType
    /**
     * length of `data`
     * @field 
     */
    dataLen: number
    /**
     * the encrypted envelope key
     * @field 
     */
    data: number
}

/**
 * The Envelope data payload contains the encrypted envelope key that is
 * used in the public-key transport to protect the data in the Key data
 * transport payload.  The encryption algorithm used is implicit from
 * the certificate/public key used.
 * @record 
 */
export class MIKEYPayloadPKE {

    // Own properties of GstSdp-1.0.GstSdp.MIKEYPayloadPKE

    static name: string
}

export interface MIKEYPayloadRAND {

    // Own fields of GstSdp-1.0.GstSdp.MIKEYPayloadRAND

    /**
     * the payload header
     * @field 
     */
    pt: MIKEYPayload
    /**
     * the length of `rand`
     * @field 
     */
    len: number
    /**
     * random values
     * @field 
     */
    rand: number
}

/**
 * The RAND payload consists of a (pseudo-)random bit-string
 * @record 
 */
export class MIKEYPayloadRAND {

    // Own properties of GstSdp-1.0.GstSdp.MIKEYPayloadRAND

    static name: string
}

export interface MIKEYPayloadSP {

    // Own fields of GstSdp-1.0.GstSdp.MIKEYPayloadSP

    /**
     * the payload header
     * @field 
     */
    pt: MIKEYPayload
    /**
     * the policy number
     * @field 
     */
    policy: number
    /**
     * the security protocol
     * @field 
     */
    proto: MIKEYSecProto
    /**
     * array of #GstMIKEYPayloadSPParam
     * @field 
     */
    params: any[]
}

/**
 * The Security Policy payload defines a set of policies that apply to a
 * specific security protocol
 * @record 
 */
export class MIKEYPayloadSP {

    // Own properties of GstSdp-1.0.GstSdp.MIKEYPayloadSP

    static name: string
}

export interface MIKEYPayloadSPParam {

    // Own fields of GstSdp-1.0.GstSdp.MIKEYPayloadSPParam

    /**
     * specifies the type of the parameter
     * @field 
     */
    type: number
    /**
     * specifies the length of `val`
     * @field 
     */
    len: number
    /**
     * specifies the value of the parameter
     * @field 
     */
    val: number
}

/**
 * A Type/Length/Value field for security parameters
 * @record 
 */
export class MIKEYPayloadSPParam {

    // Own properties of GstSdp-1.0.GstSdp.MIKEYPayloadSPParam

    static name: string
}

export interface MIKEYPayloadT {

    // Own fields of GstSdp-1.0.GstSdp.MIKEYPayloadT

    /**
     * the payload header
     * @field 
     */
    pt: MIKEYPayload
    /**
     * a #GstMIKEYTSType
     * @field 
     */
    type: MIKEYTSType
    /**
     * the timestamp value
     * @field 
     */
    tsValue: number
}

/**
 * The timestamp payload carries the timestamp information
 * @record 
 */
export class MIKEYPayloadT {

    // Own properties of GstSdp-1.0.GstSdp.MIKEYPayloadT

    static name: string
}

export interface SDPAttribute {

    // Own fields of GstSdp-1.0.GstSdp.SDPAttribute

    /**
     * the attribute key
     * @field 
     */
    key: string | null
    /**
     * the attribute value or NULL when it was a property attribute
     * @field 
     */
    value: string | null

    // Owm methods of GstSdp-1.0.GstSdp.SDPAttribute

    /**
     * Clear the attribute.
     * @returns @GST_SDP_OK.
     */
    clear(): SDPResult
    /**
     * Set the attribute with `key` and `value`.
     * @param key the key
     * @param value the value
     * @returns @GST_SDP_OK.
     */
    set(key: string | null, value: string | null): SDPResult
}

/**
 * The contents of the SDP "a=" field which contains a key/value pair.
 * @record 
 */
export class SDPAttribute {

    // Own properties of GstSdp-1.0.GstSdp.SDPAttribute

    static name: string
}

export interface SDPBandwidth {

    // Own fields of GstSdp-1.0.GstSdp.SDPBandwidth

    /**
     * the bandwidth modifier type
     * @field 
     */
    bwtype: string | null
    /**
     * the bandwidth in kilobits per second
     * @field 
     */
    bandwidth: number

    // Owm methods of GstSdp-1.0.GstSdp.SDPBandwidth

    /**
     * Reset the bandwidth information in `bw`.
     * @returns a #GstSDPResult.
     */
    clear(): SDPResult
    /**
     * Set bandwidth information in `bw`.
     * @param bwtype the bandwidth modifier type
     * @param bandwidth the bandwidth in kilobits per second
     * @returns a #GstSDPResult.
     */
    set(bwtype: string | null, bandwidth: number): SDPResult
}

/**
 * The contents of the SDP "b=" field which specifies the proposed bandwidth to
 * be used by the session or media.
 * @record 
 */
export class SDPBandwidth {

    // Own properties of GstSdp-1.0.GstSdp.SDPBandwidth

    static name: string
}

export interface SDPConnection {

    // Own fields of GstSdp-1.0.GstSdp.SDPConnection

    /**
     * the type of network. "IN" is defined to have the meaning
     *    "Internet".
     * @field 
     */
    nettype: string | null
    /**
     * the type of `address`.
     * @field 
     */
    addrtype: string | null
    /**
     * the address
     * @field 
     */
    address: string | null
    /**
     * the time to live of the address
     * @field 
     */
    ttl: number
    /**
     * the number of layers
     * @field 
     */
    addrNumber: number

    // Owm methods of GstSdp-1.0.GstSdp.SDPConnection

    /**
     * Clear the connection.
     * @returns @GST_SDP_OK.
     */
    clear(): SDPResult
    /**
     * Set the connection with the given parameters.
     * @param nettype the type of network. "IN" is defined to have the meaning "Internet".
     * @param addrtype the type of address.
     * @param address the address
     * @param ttl the time to live of the address
     * @param addrNumber the number of layers
     * @returns @GST_SDP_OK.
     */
    set(nettype: string | null, addrtype: string | null, address: string | null, ttl: number, addrNumber: number): SDPResult
}

/**
 * The contents of the SDP "c=" field which contains connection data.
 * @record 
 */
export class SDPConnection {

    // Own properties of GstSdp-1.0.GstSdp.SDPConnection

    static name: string
}

export interface SDPKey {

    // Own fields of GstSdp-1.0.GstSdp.SDPKey

    /**
     * the encryption type
     * @field 
     */
    type: string | null
    /**
     * the encryption data
     * @field 
     */
    data: string | null
}

/**
 * The contents of the SDP "k=" field which is used to convey encryption
 * keys.
 * @record 
 */
export class SDPKey {

    // Own properties of GstSdp-1.0.GstSdp.SDPKey

    static name: string
}

export interface SDPMedia {

    // Own fields of GstSdp-1.0.GstSdp.SDPMedia

    /**
     * the media type
     * @field 
     */
    media: string | null
    /**
     * the transport port to which the media stream will be sent
     * @field 
     */
    port: number
    /**
     * the number of ports or -1 if only one port was specified
     * @field 
     */
    numPorts: number
    /**
     * the transport protocol
     * @field 
     */
    proto: string | null
    /**
     * an array of #gchar formats
     * @field 
     */
    fmts: any[]
    /**
     * the media title
     * @field 
     */
    information: string | null
    /**
     * array of #GstSDPConnection with media connection information
     * @field 
     */
    connections: any[]
    /**
     * array of #GstSDPBandwidth with media bandwidth information
     * @field 
     */
    bandwidths: any[]
    /**
     * the encryption key
     * @field 
     */
    key: SDPKey
    /**
     * array of #GstSDPAttribute with the additional media attributes
     * @field 
     */
    attributes: any[]

    // Owm methods of GstSdp-1.0.GstSdp.SDPMedia

    /**
     * Add the attribute with `key` and `value` to `media`.
     * @param key a key
     * @param value a value
     * @returns #GST_SDP_OK.
     */
    addAttribute(key: string | null, value: string | null): SDPResult
    /**
     * Add the bandwidth information with `bwtype` and `bandwidth` to `media`.
     * @param bwtype the bandwidth modifier type
     * @param bandwidth the bandwidth in kilobits per second
     * @returns #GST_SDP_OK.
     */
    addBandwidth(bwtype: string | null, bandwidth: number): SDPResult
    /**
     * Add the given connection parameters to `media`.
     * @param nettype the type of network. "IN" is defined to have the meaning "Internet".
     * @param addrtype the type of address.
     * @param address the address
     * @param ttl the time to live of the address
     * @param addrNumber the number of layers
     * @returns a #GstSDPResult.
     */
    addConnection(nettype: string | null, addrtype: string | null, address: string | null, ttl: number, addrNumber: number): SDPResult
    /**
     * Add the format information to `media`.
     * @param format the format
     * @returns #GST_SDP_OK.
     */
    addFormat(format: string | null): SDPResult
    /**
     * Convert the contents of `media` to a text string.
     * @returns A dynamically allocated string representing the media.
     */
    asText(): string | null
    /**
     * Get the number of attribute fields in `media`.
     * @returns the number of attributes in @media.
     */
    attributesLen(): number
    /**
     * Mapping of attributes of #GstSDPMedia to #GstCaps
     * @param caps a #GstCaps
     * @returns a #GstSDPResult.
     */
    attributesToCaps(caps: Gst.Caps): SDPResult
    /**
     * Get the number of bandwidth fields in `media`.
     * @returns the number of bandwidths in @media.
     */
    bandwidthsLen(): number
    /**
     * Get the number of connection fields in `media`.
     * @returns the number of connections in @media.
     */
    connectionsLen(): number
    /**
     * Allocate a new copy of `media` and store the result in `copy`. The value in
     * `copy` should be release with gst_sdp_media_free function.
     * @returns a #GstSDPResult
     */
    copy(): [ /* returnType */ SDPResult, /* copy */ SDPMedia ]
    /**
     * Get the number of formats in `media`.
     * @returns the number of formats in @media.
     */
    formatsLen(): number
    /**
     * Free all resources allocated by `media`. `media` should not be used anymore after
     * this function. This function should be used when `media` was dynamically
     * allocated with gst_sdp_media_new().
     * @returns a #GstSDPResult.
     */
    free(): SDPResult
    /**
     * Get the attribute at position `idx` in `media`.
     * @param idx an index
     * @returns the #GstSDPAttribute at position @idx.
     */
    getAttribute(idx: number): SDPAttribute
    /**
     * Get the first attribute value for `key` in `media`.
     * @param key a key
     * @returns the first attribute value for @key.
     */
    getAttributeVal(key: string | null): string | null
    /**
     * Get the `nth` attribute value for `key` in `media`.
     * @param key a key
     * @param nth an index
     * @returns the @nth attribute value.
     */
    getAttributeValN(key: string | null, nth: number): string | null
    /**
     * Get the bandwidth at position `idx` in `media`.
     * @param idx an index
     * @returns the #GstSDPBandwidth at position @idx.
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
     * Note that the extmap, ssrc and rid attributes are set only by gst_sdp_media_attributes_to_caps().
     * @param pt a payload type
     * @returns a #GstCaps, or %NULL if an error happened
     */
    getCapsFromMedia(pt: number): Gst.Caps | null
    /**
     * Get the connection at position `idx` in `media`.
     * @param idx an index
     * @returns the #GstSDPConnection at position @idx.
     */
    getConnection(idx: number): SDPConnection
    /**
     * Get the format information at position `idx` in `media`.
     * @param idx an index
     * @returns the format at position @idx.
     */
    getFormat(idx: number): string | null
    /**
     * Get the information of `media`
     * @returns the information of @media.
     */
    getInformation(): string | null
    /**
     * Get the encryption information from `media`.
     * @returns a #GstSDPKey.
     */
    getKey(): SDPKey
    /**
     * Get the media description of `media`.
     * @returns the media description.
     */
    getMedia(): string | null
    /**
     * Get the number of ports for `media`.
     * @returns the number of ports for @media.
     */
    getNumPorts(): number
    /**
     * Get the port number for `media`.
     * @returns the port number of @media.
     */
    getPort(): number
    /**
     * Get the transport protocol of `media`
     * @returns the transport protocol of @media.
     */
    getProto(): string | null
    /**
     * Insert the attribute to `media` at `idx`. When `idx` is -1,
     * the attribute is appended.
     * @param idx an index
     * @param attr a #GstSDPAttribute
     * @returns #GST_SDP_OK.
     */
    insertAttribute(idx: number, attr: SDPAttribute): SDPResult
    /**
     * Insert the bandwidth information to `media` at `idx`. When `idx` is -1,
     * the bandwidth is appended.
     * @param idx an index
     * @param bw a #GstSDPBandwidth
     * @returns #GST_SDP_OK.
     */
    insertBandwidth(idx: number, bw: SDPBandwidth): SDPResult
    /**
     * Insert the connection information to `media` at `idx`. When `idx` is -1,
     * the connection is appended.
     * @param idx an index
     * @param conn a #GstSDPConnection
     * @returns #GST_SDP_OK.
     */
    insertConnection(idx: number, conn: SDPConnection): SDPResult
    /**
     * Insert the format information to `media` at `idx`. When `idx` is -1,
     * the format is appended.
     * @param idx an index
     * @param format the format
     * @returns #GST_SDP_OK.
     */
    insertFormat(idx: number, format: string | null): SDPResult
    /**
     * Creates a new #GstMIKEYMessage after parsing the key-mgmt attribute
     * from a #GstSDPMedia.
     * @returns a #GstSDPResult.
     */
    parseKeymgmt(): [ /* returnType */ SDPResult, /* mikey */ MIKEYMessage ]
    /**
     * Remove the attribute in `media` at `idx`.
     * @param idx an index
     * @returns #GST_SDP_OK.
     */
    removeAttribute(idx: number): SDPResult
    /**
     * Remove the bandwidth information in `media` at `idx`.
     * @param idx an index
     * @returns #GST_SDP_OK.
     */
    removeBandwidth(idx: number): SDPResult
    /**
     * Remove the connection information in `media` at `idx`.
     * @param idx an index
     * @returns #GST_SDP_OK.
     */
    removeConnection(idx: number): SDPResult
    /**
     * Remove the format information in `media` at `idx`.
     * @param idx an index
     * @returns #GST_SDP_OK.
     */
    removeFormat(idx: number): SDPResult
    /**
     * Replace the attribute in `media` at `idx` with `attr`.
     * @param idx an index
     * @param attr a #GstSDPAttribute
     * @returns #GST_SDP_OK.
     */
    replaceAttribute(idx: number, attr: SDPAttribute): SDPResult
    /**
     * Replace the bandwidth information in `media` at `idx` with `bw`.
     * @param idx an index
     * @param bw a #GstSDPBandwidth
     * @returns #GST_SDP_OK.
     */
    replaceBandwidth(idx: number, bw: SDPBandwidth): SDPResult
    /**
     * Replace the connection information in `media` at `idx` with `conn`.
     * @param idx an index
     * @param conn a #GstSDPConnection
     * @returns #GST_SDP_OK.
     */
    replaceConnection(idx: number, conn: SDPConnection): SDPResult
    /**
     * Replace the format information in `media` at `idx` with `format`.
     * @param idx an index
     * @param format the format
     * @returns #GST_SDP_OK.
     */
    replaceFormat(idx: number, format: string | null): SDPResult
    /**
     * Set the media information of `media` to `information`.
     * @param information the media information
     * @returns #GST_SDP_OK.
     */
    setInformation(information: string | null): SDPResult
    /**
     * Adds the encryption information to `media`.
     * @param type the encryption type
     * @param data the encryption data
     * @returns a #GstSDPResult.
     */
    setKey(type: string | null, data: string | null): SDPResult
    /**
     * Set the media description of `media` to `med`.
     * @param med the media description
     * @returns #GST_SDP_OK.
     */
    setMedia(med: string | null): SDPResult
    /**
     * Set the port information in `media`.
     * @param port the port number
     * @param numPorts the number of ports
     * @returns #GST_SDP_OK.
     */
    setPortInfo(port: number, numPorts: number): SDPResult
    /**
     * Set the media transport protocol of `media` to `proto`.
     * @param proto the media transport protocol
     * @returns #GST_SDP_OK.
     */
    setProto(proto: string | null): SDPResult
    /**
     * Free all resources allocated in `media`. `media` should not be used anymore after
     * this function. This function should be used when `media` was allocated on the
     * stack and initialized with gst_sdp_media_init().
     * @returns a #GstSDPResult.
     */
    uninit(): SDPResult
}

/**
 * The contents of the SDP "m=" field with all related fields.
 * @record 
 */
export class SDPMedia {

    // Own properties of GstSdp-1.0.GstSdp.SDPMedia

    static name: string

    // Constructors of GstSdp-1.0.GstSdp.SDPMedia

    /**
     * Allocate a new GstSDPMedia and store the result in `media`.
     * @returns a #GstSDPResult.
     */
    static new(): [ /* returnType */ SDPResult, /* media */ SDPMedia ]
    /**
     * Initialize `media` so that its contents are as if it was freshly allocated
     * with gst_sdp_media_new(). This function is mostly used to initialize a media
     * allocated on the stack. gst_sdp_media_uninit() undoes this operation.
     * 
     * When this function is invoked on newly allocated data (with malloc or on the
     * stack), its contents should be set to 0 before calling this function.
     * @returns a #GstSDPResult.
     */
    static init(): [ /* returnType */ SDPResult, /* media */ SDPMedia ]
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
     * @param caps a #GstCaps
     * @returns a #GstSDPResult.
     */
    static setMediaFromCaps(caps: Gst.Caps): [ /* returnType */ SDPResult, /* media */ SDPMedia ]
}

export interface SDPMessage {

    // Own fields of GstSdp-1.0.GstSdp.SDPMessage

    /**
     * the protocol version
     * @field 
     */
    version: string | null
    /**
     * owner/creator and session identifier
     * @field 
     */
    origin: SDPOrigin
    /**
     * session name
     * @field 
     */
    sessionName: string | null
    /**
     * session information
     * @field 
     */
    information: string | null
    /**
     * URI of description
     * @field 
     */
    uri: string | null
    /**
     * array of #gchar with email addresses
     * @field 
     */
    emails: any[]
    /**
     * array of #gchar with phone numbers
     * @field 
     */
    phones: any[]
    /**
     * connection information for the session
     * @field 
     */
    connection: SDPConnection
    /**
     * array of #GstSDPBandwidth with bandwidth information
     * @field 
     */
    bandwidths: any[]
    /**
     * array of #GstSDPTime with time descriptions
     * @field 
     */
    times: any[]
    /**
     * array of #GstSDPZone with time zone adjustments
     * @field 
     */
    zones: any[]
    /**
     * encryption key
     * @field 
     */
    key: SDPKey
    /**
     * array of #GstSDPAttribute with session attributes
     * @field 
     */
    attributes: any[]
    /**
     * array of #GstSDPMedia with media descriptions
     * @field 
     */
    medias: any[]

    // Owm methods of GstSdp-1.0.GstSdp.SDPMessage

    /**
     * Add the attribute with `key` and `value` to `msg`.
     * @param key the key
     * @param value the value
     * @returns @GST_SDP_OK.
     */
    addAttribute(key: string | null, value: string | null): SDPResult
    /**
     * Add the specified bandwidth information to `msg`.
     * @param bwtype the bandwidth modifier type
     * @param bandwidth the bandwidth in kilobits per second
     * @returns a #GstSDPResult.
     */
    addBandwidth(bwtype: string | null, bandwidth: number): SDPResult
    /**
     * Add `email` to the list of emails in `msg`.
     * @param email an email
     * @returns a #GstSDPResult.
     */
    addEmail(email: string | null): SDPResult
    /**
     * Adds `media` to the array of medias in `msg`. This function takes ownership of
     * the contents of `media` so that `media` will have to be reinitialized with
     * gst_sdp_media_init() before it can be used again.
     * @param media a #GstSDPMedia to add
     * @returns a #GstSDPResult.
     */
    addMedia(media: SDPMedia): SDPResult
    /**
     * Add `phone` to the list of phones in `msg`.
     * @param phone a phone
     * @returns a #GstSDPResult.
     */
    addPhone(phone: string | null): SDPResult
    /**
     * Add time information `start` and `stop` to `msg`.
     * @param start the start time
     * @param stop the stop time
     * @param repeat the repeat times
     * @returns a #GstSDPResult.
     */
    addTime(start: string | null, stop: string | null, repeat: string[]): SDPResult
    /**
     * Add time zone information to `msg`.
     * @param adjTime the NTP time that a time zone adjustment happens
     * @param typedTime the offset from the time when the session was first scheduled
     * @returns a #GstSDPResult.
     */
    addZone(adjTime: string | null, typedTime: string | null): SDPResult
    /**
     * Convert the contents of `msg` to a text string.
     * @returns A dynamically allocated string representing the SDP description.
     */
    asText(): string | null
    /**
     * Get the number of attributes in `msg`.
     * @returns the number of attributes in @msg.
     */
    attributesLen(): number
    /**
     * Mapping of attributes of #GstSDPMessage to #GstCaps
     * @param caps a #GstCaps
     * @returns a #GstSDPResult.
     */
    attributesToCaps(caps: Gst.Caps): SDPResult
    /**
     * Get the number of bandwidth information in `msg`.
     * @returns the number of bandwidth information in @msg.
     */
    bandwidthsLen(): number
    /**
     * Allocate a new copy of `msg` and store the result in `copy`. The value in
     * `copy` should be release with gst_sdp_message_free function.
     * @returns a #GstSDPResult
     */
    copy(): [ /* returnType */ SDPResult, /* copy */ SDPMessage ]
    /**
     * Dump the parsed contents of `msg` to stdout.
     * @returns a #GstSDPResult.
     */
    dump(): SDPResult
    /**
     * Get the number of emails in `msg`.
     * @returns the number of emails in @msg.
     */
    emailsLen(): number
    /**
     * Free all resources allocated by `msg`. `msg` should not be used anymore after
     * this function. This function should be used when `msg` was dynamically
     * allocated with gst_sdp_message_new().
     * @returns a #GstSDPResult.
     */
    free(): SDPResult
    /**
     * Get the attribute at position `idx` in `msg`.
     * @param idx the index
     * @returns the #GstSDPAttribute at position @idx.
     */
    getAttribute(idx: number): SDPAttribute
    /**
     * Get the first attribute with key `key` in `msg`.
     * @param key the key
     * @returns the attribute value of the first attribute with @key.
     */
    getAttributeVal(key: string | null): string | null
    /**
     * Get the `nth` attribute with key `key` in `msg`.
     * @param key the key
     * @param nth the index
     * @returns the attribute value of the @nth attribute with @key.
     */
    getAttributeValN(key: string | null, nth: number): string | null
    /**
     * Get the bandwidth at index `idx` from `msg`.
     * @param idx the bandwidth index
     * @returns a #GstSDPBandwidth.
     */
    getBandwidth(idx: number): SDPBandwidth
    /**
     * Get the connection of `msg`.
     * @returns a #GstSDPConnection. The result remains valid as long as @msg is valid.
     */
    getConnection(): SDPConnection
    /**
     * Get the email with number `idx` from `msg`.
     * @param idx an email index
     * @returns the email at position @idx.
     */
    getEmail(idx: number): string | null
    /**
     * Get the information in `msg`.
     * @returns a #GstSDPResult.
     */
    getInformation(): string | null
    /**
     * Get the encryption information from `msg`.
     * @returns a #GstSDPKey.
     */
    getKey(): SDPKey
    /**
     * Get the media description at index `idx` in `msg`.
     * @param idx the index
     * @returns a #GstSDPMedia.
     */
    getMedia(idx: number): SDPMedia
    /**
     * Get the origin of `msg`.
     * @returns a #GstSDPOrigin. The result remains valid as long as @msg is valid.
     */
    getOrigin(): SDPOrigin
    /**
     * Get the phone with number `idx` from `msg`.
     * @param idx a phone index
     * @returns the phone at position @idx.
     */
    getPhone(idx: number): string | null
    /**
     * Get the session name in `msg`.
     * @returns a #GstSDPResult.
     */
    getSessionName(): string | null
    /**
     * Get time information with index `idx` from `msg`.
     * @param idx the time index
     * @returns a #GstSDPTime.
     */
    getTime(idx: number): SDPTime
    /**
     * Get the URI in `msg`.
     * @returns a #GstSDPResult.
     */
    getUri(): string | null
    /**
     * Get the version in `msg`.
     * @returns a #GstSDPResult.
     */
    getVersion(): string | null
    /**
     * Get time zone information with index `idx` from `msg`.
     * @param idx the zone index
     * @returns a #GstSDPZone.
     */
    getZone(idx: number): SDPZone
    /**
     * Insert attribute into the array of attributes in `msg`
     * at index `idx`.
     * When -1 is given as `idx,` the attribute is inserted at the end.
     * @param idx an index
     * @param attr a #GstSDPAttribute
     * @returns a #GstSDPResult.
     */
    insertAttribute(idx: number, attr: SDPAttribute): SDPResult
    /**
     * Insert bandwidth parameters into the array of bandwidths in `msg`
     * at index `idx`.
     * When -1 is given as `idx,` the bandwidth is inserted at the end.
     * @param idx an index
     * @param bw the bandwidth
     * @returns a #GstSDPResult.
     */
    insertBandwidth(idx: number, bw: SDPBandwidth): SDPResult
    /**
     * Insert `email` into the array of emails in `msg` at index `idx`.
     * When -1 is given as `idx,` the email is inserted at the end.
     * @param idx an index
     * @param email an email
     * @returns a #GstSDPResult.
     */
    insertEmail(idx: number, email: string | null): SDPResult
    /**
     * Insert `phone` into the array of phone numbers in `msg` at index `idx`.
     * When -1 is given as `idx,` the phone is inserted at the end.
     * @param idx a phone index
     * @param phone a phone
     * @returns a #GstSDPResult.
     */
    insertPhone(idx: number, phone: string | null): SDPResult
    /**
     * Insert time parameters into the array of times in `msg`
     * at index `idx`.
     * When -1 is given as `idx,` the times are inserted at the end.
     * @param idx an index
     * @param t a #GstSDPTime
     * @returns a #GstSDPResult.
     */
    insertTime(idx: number, t: SDPTime): SDPResult
    /**
     * Insert zone parameters into the array of zones in `msg`
     * at index `idx`.
     * When -1 is given as `idx,` the zone is inserted at the end.
     * @param idx an index
     * @param zone a #GstSDPZone
     * @returns a #GstSDPResult.
     */
    insertZone(idx: number, zone: SDPZone): SDPResult
    /**
     * Get the number of media descriptions in `msg`.
     * @returns the number of media descriptions in @msg.
     */
    mediasLen(): number
    /**
     * Creates a new #GstMIKEYMessage after parsing the key-mgmt attribute
     * from a #GstSDPMessage.
     * @returns a #GstSDPResult.
     */
    parseKeymgmt(): [ /* returnType */ SDPResult, /* mikey */ MIKEYMessage ]
    /**
     * Get the number of phones in `msg`.
     * @returns the number of phones in @msg.
     */
    phonesLen(): number
    /**
     * Remove the attribute in `msg` at index `idx`.
     * @param idx the index
     * @returns a #GstSDPResult.
     */
    removeAttribute(idx: number): SDPResult
    /**
     * Remove the bandwidth information in `msg` at index `idx`.
     * @param idx the bandwidth index
     * @returns a #GstSDPResult.
     */
    removeBandwidth(idx: number): SDPResult
    /**
     * Remove the email in `msg` at index `idx`.
     * @param idx an email index
     * @returns a #GstSDPResult.
     */
    removeEmail(idx: number): SDPResult
    /**
     * Remove the phone number in `msg` at index `idx`.
     * @param idx a phone index
     * @returns a #GstSDPResult.
     */
    removePhone(idx: number): SDPResult
    /**
     * Remove the time information in `msg` at index `idx`.
     * @param idx the index
     * @returns a #GstSDPResult.
     */
    removeTime(idx: number): SDPResult
    /**
     * Remove the zone information in `msg` at index `idx`.
     * @param idx the index
     * @returns a #GstSDPResult.
     */
    removeZone(idx: number): SDPResult
    /**
     * Replace the attribute in `msg` at index `idx` with `attr`.
     * @param idx the index
     * @param attr a #GstSDPAttribute
     * @returns a #GstSDPResult.
     */
    replaceAttribute(idx: number, attr: SDPAttribute): SDPResult
    /**
     * Replace the bandwidth information in `msg` at index `idx` with `bw`.
     * @param idx the bandwidth index
     * @param bw the bandwidth
     * @returns a #GstSDPResult.
     */
    replaceBandwidth(idx: number, bw: SDPBandwidth): SDPResult
    /**
     * Replace the email in `msg` at index `idx` with `email`.
     * @param idx an email index
     * @param email an email
     * @returns a #GstSDPResult.
     */
    replaceEmail(idx: number, email: string | null): SDPResult
    /**
     * Replace the phone number in `msg` at index `idx` with `phone`.
     * @param idx a phone index
     * @param phone a phone
     * @returns a #GstSDPResult.
     */
    replacePhone(idx: number, phone: string | null): SDPResult
    /**
     * Replace the time information in `msg` at index `idx` with `t`.
     * @param idx the index
     * @param t a #GstSDPTime
     * @returns a #GstSDPResult.
     */
    replaceTime(idx: number, t: SDPTime): SDPResult
    /**
     * Replace the zone information in `msg` at index `idx` with `zone`.
     * @param idx the index
     * @param zone a #GstSDPZone
     * @returns a #GstSDPResult.
     */
    replaceZone(idx: number, zone: SDPZone): SDPResult
    /**
     * Configure the SDP connection in `msg` with the given parameters.
     * @param nettype the type of network. "IN" is defined to have the meaning "Internet".
     * @param addrtype the type of address.
     * @param address the address
     * @param ttl the time to live of the address
     * @param addrNumber the number of layers
     * @returns a #GstSDPResult.
     */
    setConnection(nettype: string | null, addrtype: string | null, address: string | null, ttl: number, addrNumber: number): SDPResult
    /**
     * Set the information in `msg`.
     * @param information the information
     * @returns a #GstSDPResult.
     */
    setInformation(information: string | null): SDPResult
    /**
     * Adds the encryption information to `msg`.
     * @param type the encryption type
     * @param data the encryption data
     * @returns a #GstSDPResult.
     */
    setKey(type: string | null, data: string | null): SDPResult
    /**
     * Configure the SDP origin in `msg` with the given parameters.
     * @param username the user name
     * @param sessId a session id
     * @param sessVersion a session version
     * @param nettype a network type
     * @param addrtype an address type
     * @param addr an address
     * @returns #GST_SDP_OK.
     */
    setOrigin(username: string | null, sessId: string | null, sessVersion: string | null, nettype: string | null, addrtype: string | null, addr: string | null): SDPResult
    /**
     * Set the session name in `msg`.
     * @param sessionName the session name
     * @returns a #GstSDPResult.
     */
    setSessionName(sessionName: string | null): SDPResult
    /**
     * Set the URI in `msg`.
     * @param uri the URI
     * @returns a #GstSDPResult.
     */
    setUri(uri: string | null): SDPResult
    /**
     * Set the version in `msg`.
     * @param version the version
     * @returns a #GstSDPResult.
     */
    setVersion(version: string | null): SDPResult
    /**
     * Get the number of time information entries in `msg`.
     * @returns the number of time information entries in @msg.
     */
    timesLen(): number
    /**
     * Free all resources allocated in `msg`. `msg` should not be used anymore after
     * this function. This function should be used when `msg` was allocated on the
     * stack and initialized with gst_sdp_message_init().
     * @returns a #GstSDPResult.
     */
    uninit(): SDPResult
    /**
     * Get the number of time zone information entries in `msg`.
     * @returns the number of time zone information entries in @msg.
     */
    zonesLen(): number
}

/**
 * The GstSDPMessage helper functions makes it easy to parse and create SDP
 * messages.
 * @record 
 */
export class SDPMessage {

    // Own properties of GstSdp-1.0.GstSdp.SDPMessage

    static name: string

    // Constructors of GstSdp-1.0.GstSdp.SDPMessage

    /**
     * Allocate a new GstSDPMessage and store the result in `msg`.
     * @returns a #GstSDPResult.
     */
    static new(): [ /* returnType */ SDPResult, /* msg */ SDPMessage ]
    /**
     * Parse `text` and create a new SDPMessage from these.
     * @param text A dynamically allocated string representing the SDP description
     * @returns a #GstSDPResult.
     */
    static newFromText(text: string | null): [ /* returnType */ SDPResult, /* msg */ SDPMessage ]
    /**
     * Creates a uri from `msg` with the given `scheme`. The uri has the format:
     * 
     *  \`scheme:`///[#type=value *[&type=value]]
     * 
     *  Where each value is url encoded.
     * @param scheme the uri scheme
     * @param msg the #GstSDPMessage
     * @returns a uri for @msg.
     */
    static asUri(scheme: string | null, msg: SDPMessage): string | null
    /**
     * Initialize `msg` so that its contents are as if it was freshly allocated
     * with gst_sdp_message_new(). This function is mostly used to initialize a message
     * allocated on the stack. gst_sdp_message_uninit() undoes this operation.
     * 
     * When this function is invoked on newly allocated data (with malloc or on the
     * stack), its contents should be set to 0 before calling this function.
     * @returns a #GstSDPResult.
     */
    static init(): [ /* returnType */ SDPResult, /* msg */ SDPMessage ]
    /**
     * Parse the contents of `size` bytes pointed to by `data` and store the result in
     * `msg`.
     * @param data the start of the buffer
     * @param msg the result #GstSDPMessage
     * @returns #GST_SDP_OK on success.
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
     * @param uri the start of the uri
     * @param msg the result #GstSDPMessage
     * @returns #GST_SDP_OK on success.
     */
    static parseUri(uri: string | null, msg: SDPMessage): SDPResult
}

export interface SDPOrigin {

    // Own fields of GstSdp-1.0.GstSdp.SDPOrigin

    /**
     * the user's login on the originating host, or it is "-"
     *    if the originating host does not support the concept of user ids.
     * @field 
     */
    username: string | null
    /**
     * is a numeric string such that the tuple of `username,` `sess_id,`
     *    `nettype,` `addrtype` and `addr` form a globally unique identifier for the
     *    session.
     * @field 
     */
    sessId: string | null
    /**
     * a version number for this announcement
     * @field 
     */
    sessVersion: string | null
    /**
     * the type of network. "IN" is defined to have the meaning
     *    "Internet".
     * @field 
     */
    nettype: string | null
    /**
     * the type of `addr`.
     * @field 
     */
    addrtype: string | null
    /**
     * the globally unique address of the machine from which the session was
     *     created.
     * @field 
     */
    addr: string | null
}

/**
 * The contents of the SDP "o=" field which gives the originator of the session
 * (their username and the address of the user's host) plus a session id and
 * session version number.
 * @record 
 */
export class SDPOrigin {

    // Own properties of GstSdp-1.0.GstSdp.SDPOrigin

    static name: string
}

export interface SDPTime {

    // Own fields of GstSdp-1.0.GstSdp.SDPTime

    /**
     * start time for the conference. The value is the decimal
     *     representation of Network Time Protocol (NTP) time values in seconds
     * @field 
     */
    start: string | null
    /**
     * stop time for the conference. The value is the decimal
     *     representation of Network Time Protocol (NTP) time values in seconds
     * @field 
     */
    stop: string | null
    /**
     * repeat times for a session
     * @field 
     */
    repeat: any[]

    // Owm methods of GstSdp-1.0.GstSdp.SDPTime

    /**
     * Reset the time information in `t`.
     * @returns a #GstSDPResult.
     */
    clear(): SDPResult
    /**
     * Set time information `start,` `stop` and `repeat` in `t`.
     * @param start the start time
     * @param stop the stop time
     * @param repeat the repeat times
     * @returns a #GstSDPResult.
     */
    set(start: string | null, stop: string | null, repeat: string[]): SDPResult
}

/**
 * The contents of the SDP "t=" field which specify the start and stop times for
 * a conference session.
 * @record 
 */
export class SDPTime {

    // Own properties of GstSdp-1.0.GstSdp.SDPTime

    static name: string
}

export interface SDPZone {

    // Own fields of GstSdp-1.0.GstSdp.SDPZone

    /**
     * the NTP time that a time zone adjustment happens
     * @field 
     */
    time: string | null
    /**
     * the offset from the time when the session was first scheduled
     * @field 
     */
    typedTime: string | null

    // Owm methods of GstSdp-1.0.GstSdp.SDPZone

    /**
     * Reset the zone information in `zone`.
     * @returns a #GstSDPResult.
     */
    clear(): SDPResult
    /**
     * Set zone information in `zone`.
     * @param adjTime the NTP time that a time zone adjustment happens
     * @param typedTime the offset from the time when the session was first scheduled
     * @returns a #GstSDPResult.
     */
    set(adjTime: string | null, typedTime: string | null): SDPResult
}

/**
 * The contents of the SDP "z=" field which allows the sender to
 * specify a list of time zone adjustments and offsets from the base
 * time.
 * @record 
 */
export class SDPZone {

    // Own properties of GstSdp-1.0.GstSdp.SDPZone

    static name: string
}
