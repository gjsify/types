
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gstcodecs-1.0-ambient.d.ts';
import './gstcodecs-1.0-import.d.ts';
/**
 * GstCodecs-1.0
 */

import type GstVideo from '@girs/gstvideo-1.0';
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export enum H264DecoderCompliance {
    /**
     * The decoder behavior is
     *     automatically choosen.
     */
    AUTO,
    /**
     * The decoder behavior strictly
     *     conforms to the SPEC. All the decoder behaviors conform to the
     *     SPEC, not including any nonstandard behavior which is not
     *     mentioned in the SPEC.
     */
    STRICT,
    /**
     * The decoder behavior normally
     *     conforms to the SPEC. Most behaviors conform to the SPEC but
     *     including some nonstandard features which are widely used or
     *     often used in the industry practice. This meets the request of
     *     real streams and usages, but may not 100% conform to the
     *     SPEC. It has very low risk. E.g., we will output pictures
     *     without waiting DPB being full for the lower latency, which may
     *     cause B frame disorder when there are reference frames with
     *     smaller POC after it in decoder order. And the baseline profile
     *     may be mapped to the constrained-baseline profile, but it may
     *     have problems when a real baseline stream comes with FMO or
     *     ASO.
     */
    NORMAL,
    /**
     * The decoder behavior
     *     flexibly conforms to the SPEC. It uses the nonstandard features
     *     more aggressively in order to get better performance(for
     *     example, lower latency). It may change the result of the
     *     decoder and should be used carefully. Besides including all
     *     risks in *normal* mode, it has more risks, such as frames
     *     disorder when reference frames POC decrease in decoder order.
     */
    FLEXIBLE,
}
export enum H264DpbBumpMode {
    /**
     * No latency requirement for DBP bumping.
     */
    NORMAL_LATENCY,
    /**
     * Low-latency requirement for DBP bumping.
     */
    LOW_LATENCY,
    /**
     * Very low-latency requirement for DBP bumping.
     */
    VERY_LOW_LATENCY,
}
export enum H264PictureField {
    FRAME,
    TOP_FIELD,
    BOTTOM_FIELD,
}
export enum H264PictureReference {
    /**
     * Not used for reference picture
     */
    NONE,
    /**
     * Used for short-term reference picture
     */
    SHORT_TERM,
    /**
     * Used for long-term reference picture
     */
    LONG_TERM,
}
/**
 * Reference modes: Specify the type of inter prediction to be used
 */
export enum Vp9ReferenceMode {
    /**
     * Indicates that all the inter blocks use only a single reference frame
     */
    SINGLE_REFERENCE,
    /**
     * Requires all the inter blocks to use compound mode
     */
    COMPOUND_REFERENCE,
    /**
     * Allows each individual inter block to select between single and compound prediction modes
     */
    SELECT,
}
/**
 * TxMode: Specifies how the transform size is determined
 */
export enum Vp9TxMode {
    /**
     * Only 4x4
     */
    ONLY_4X4,
    /**
     * Allow 8x8
     */
    ALLOW_8X8,
    /**
     * Allow 16x16
     */
    ALLOW_16X16,
    /**
     * Allow 32x32
     */
    ALLOW_32X32,
    /**
     * The choice is specified explicitly for each block
     */
    SELECT,
}
/**
 * TxSize: Specifies the transform size
 */
export enum Vp9TxSize {
    /**
     * 4x4
     */
    TODO_4X4,
    /**
     * 8x8
     */
    TODO_8X8,
    /**
     * 16x16
     */
    TODO_16X16,
    /**
     * 32x32
     */
    TODO_32X32,
}
export const H264_DPB_MAX_SIZE: number
export const H265_DPB_MAX_SIZE: number
/**
 * Number of contexts when decoding intra_mode
 */
export const VP9_BLOCK_SIZE_GROUPS: number
/**
 * Number of values for mv_classO_bit
 */
export const VP9_CLASS0_SIZE: number
/**
 * Number of contexts for comp_mode
 */
export const VP9_COMP_MODE_CONTEXTS: number
/**
 * Number of contexts for interp_filter
 */
export const VP9_INTERP_FILTER_CONTEXTS: number
/**
 * Number of values for inter_mode
 */
export const VP9_INTER_MODES: number
/**
 * Number of contexts for inter_mode
 */
export const VP9_INTER_MODE_CONTEXTS: number
/**
 * Number of values for intra_mode
 */
export const VP9_INTRA_MODES: number
/**
 * Number of contexts for interp_filter
 */
export const VP9_IS_INTER_CONTEXTS: number
/**
 * Number of values for mv_class
 */
export const VP9_MV_CLASSES: number
/**
 * Number of values that can be decoded for mv_fr
 */
export const VP9_MV_FR_SIZE: number
/**
 * Number of values for partition
 */
export const VP9_MV_JOINTS: number
/**
 * Maximum number of bits for decoding motion vectors
 */
export const VP9_MV_OFFSET_BITS: number
/**
 * Number of contexts when decoding partition
 */
export const VP9_PARTITION_CONTEXTS: number
/**
 * Number of values for partition
 */
export const VP9_PARTITION_TYPES: number
/**
 * Number of contexts for single_ref and comp_ref
 */
export const VP9_REF_CONTEXTS: number
/**
 * Index for loop filter segment feature
 */
export const VP9_SEG_LVL_ALT_L: number
/**
 * Index for quantizer segment feature
 */
export const VP9_SEG_LVL_ALT_Q: number
/**
 * Number of segment features
 */
export const VP9_SEG_LVL_MAX: number
/**
 * Index for reference frame segment feature
 */
export const VP9_SEG_LVL_REF_FRAME: number
/**
 * Index for skip segment feature
 */
export const VP9_SEG_SEG_LVL_SKIP: number
/**
 * Number of contexts for decoding skip
 */
export const VP9_SKIP_CONTEXTS: number
/**
 * Number of contexts for interp_filter
 */
export const VP9_SWITCHABLE_FILTERS: number
/**
 * Number of values for tx_mode
 */
export const VP9_TX_MODES: number
/**
 * Number of values for tx_size
 */
export const VP9_TX_SIZES: number
/**
 * Number of contexts for transform size
 */
export const VP9_TX_SIZE_CONTEXTS: number
/**
 * An implementation of "ac_q" function specified in
 * "8.6.1 Dequantization functions"
 * @param qindex the quantizer index
 * @param delta_q_ac a delta_q_ac value
 * @param bit_depth coded bit depth
 * @returns the quantizer value for the ac coefficient
 */
export function vp9_get_ac_quant(qindex: number, delta_q_ac: number, bit_depth: number): number
/**
 * An implementation of "dc_q" function specified in
 * "8.6.1 Dequantization functions"
 * @param qindex the quantizer index
 * @param delta_q_dc a delta_q_dc value
 * @param bit_depth coded bit depth
 * @returns the quantizer value for the dc coefficient
 */
export function vp9_get_dc_quant(qindex: number, delta_q_dc: number, bit_depth: number): number
/**
 * An implementation of "get_qindex" function specfied in
 * "8.6.1 Dequantization functions"
 * @param segmentation_params a #GstVp9SegmentationParams
 * @param quantization_params a #GstVp9QuantizationParams
 * @param segment_id a segment id
 * @returns the quantizer index
 */
export function vp9_get_qindex(segmentation_params: Vp9SegmentationParams, quantization_params: Vp9QuantizationParams, segment_id: number): number
/**
 * An implementation of "seg_feature_active" function specified in
 * "6.4.9 Segmentation feature active syntax"
 * @param params a #GstVp9SegmentationParams
 * @param segment_id a segment id
 * @param feature a segmentation feature
 * @returns %TRUE if feature is active
 */
export function vp9_seg_feature_active(params: Vp9SegmentationParams, segment_id: number, feature: number): boolean
export module AV1Decoder {

    // Constructor properties interface

    export interface ConstructorProperties extends GstVideo.VideoDecoder.ConstructorProperties {
    }

}

export interface AV1Decoder {

    // Conflicting properties

    object: any

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

    // Own virtual methods of GstCodecs-1.0.GstCodecs.AV1Decoder

    /**
     * Provides the tile data with tile group header and required raw
     * bitstream for subclass to decode it.
     * @virtual 
     * @param picture a #GstAV1Picture
     * @param tile a #GstAV1Tile
     */
    vfunc_decode_tile(picture: AV1Picture, tile: AV1Tile): Gst.FlowReturn
    /**
     * Called when need to duplicate an existing #GstAV1Picture. As
     * duplicated key-frame will populate the DPB, this virtual
     * function is not optional.
     * @virtual 
     * @param frame the current #GstVideoCodecFrame
     * @param picture a #GstAV1Picture
     */
    vfunc_duplicate_picture(frame: GstVideo.VideoCodecFrame, picture: AV1Picture): AV1Picture
    /**
     * Optional. Called per one #GstAV1Picture to notify subclass to finish
     * decoding process for the #GstAV1Picture
     * @virtual 
     * @param picture a #GstAV1Picture
     */
    vfunc_end_picture(picture: AV1Picture): Gst.FlowReturn
    /**
     * Optional. Called by baseclass to query whether delaying output is
     * preferred by subclass or not.
     * @virtual 
     * @param live whether upstream is live or not
     * @returns the number of perferred delayed output frame
     */
    vfunc_get_preferred_output_delay(live: boolean): number
    /**
     * Optional. Called whenever new #GstAV1Picture is created.
     * Subclass can set implementation specific user data
     * on the #GstAV1Picture via gst_av1_picture_set_user_data()
     * @virtual 
     * @param frame a #GstVideoCodecFrame
     * @param picture a #GstAV1Picture
     */
    vfunc_new_picture(frame: GstVideo.VideoCodecFrame, picture: AV1Picture): Gst.FlowReturn
    /**
     * Called with a #GstAV1Picture which is required to be outputted.
     * The #GstVideoCodecFrame must be consumed by subclass.
     * @virtual 
     * @param frame a #GstVideoCodecFrame
     * @param picture a #GstAV1Picture
     */
    vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: AV1Picture): Gst.FlowReturn
    /**
     * Optional. Called per one #GstAV1Picture to notify subclass to prepare
     * decoding process for the #GstAV1Picture
     * @virtual 
     * @param picture a #GstAV1Picture
     * @param dpb a #GstAV1Dpb
     */
    vfunc_start_picture(picture: AV1Picture, dpb: AV1Dpb): Gst.FlowReturn

    // Class property signals of GstCodecs-1.0.GstCodecs.AV1Decoder

    connect(sigName: "notify::automatic-request-sync-point-flags", callback: (($obj: AV1Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-request-sync-point-flags", callback: (($obj: AV1Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::automatic-request-sync-point-flags", ...args: any[]): void
    connect(sigName: "notify::automatic-request-sync-points", callback: (($obj: AV1Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-request-sync-points", callback: (($obj: AV1Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::automatic-request-sync-points", ...args: any[]): void
    connect(sigName: "notify::discard-corrupted-frames", callback: (($obj: AV1Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard-corrupted-frames", callback: (($obj: AV1Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::discard-corrupted-frames", ...args: any[]): void
    connect(sigName: "notify::max-errors", callback: (($obj: AV1Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-errors", callback: (($obj: AV1Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-errors", ...args: any[]): void
    connect(sigName: "notify::min-force-key-unit-interval", callback: (($obj: AV1Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-force-key-unit-interval", callback: (($obj: AV1Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-force-key-unit-interval", ...args: any[]): void
    connect(sigName: "notify::qos", callback: (($obj: AV1Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: AV1Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The opaque #GstAV1Decoder data structure.
 * @class 
 */
export class AV1Decoder extends GstVideo.VideoDecoder {

    // Own properties of GstCodecs-1.0.GstCodecs.AV1Decoder

    static name: string
    static $gtype: GObject.GType<AV1Decoder>

    // Constructors of GstCodecs-1.0.GstCodecs.AV1Decoder

    constructor(config?: AV1Decoder.ConstructorProperties) 
    _init(config?: AV1Decoder.ConstructorProperties): void
}

export module H264Decoder {

    // Constructor properties interface

    export interface ConstructorProperties extends GstVideo.VideoDecoder.ConstructorProperties {

        // Own constructor properties of GstCodecs-1.0.GstCodecs.H264Decoder

        /**
         * The compliance controls the behavior of the decoder to handle some
         * subtle cases and contexts, such as the low-latency DPB bumping or
         * mapping the baseline profile as the constrained-baseline profile,
         * etc.
         */
        compliance?: H264DecoderCompliance | null
    }

}

export interface H264Decoder {

    // Own properties of GstCodecs-1.0.GstCodecs.H264Decoder

    /**
     * The compliance controls the behavior of the decoder to handle some
     * subtle cases and contexts, such as the low-latency DPB bumping or
     * mapping the baseline profile as the constrained-baseline profile,
     * etc.
     */
    compliance: H264DecoderCompliance

    // Conflicting properties

    object: any

    // Owm methods of GstCodecs-1.0.GstCodecs.H264Decoder

    /**
     * Retrive DPB and return a #GstH264Picture corresponding to
     * the `system_frame_number`
     * @param system_frame_number a target system frame number of #GstH264Picture
     * @returns a #GstH264Picture if successful, or %NULL otherwise
     */
    get_picture(system_frame_number: number): H264Picture | null
    /**
     * Called to en/disable reference picture modification process.
     * @param process whether subclass is requiring reference picture modification process
     */
    set_process_ref_pic_lists(process: boolean): void

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

    // Own virtual methods of GstCodecs-1.0.GstCodecs.H264Decoder

    /**
     * Provides per slice data with parsed slice header and required raw bitstream
     * for subclass to decode it. If gst_h264_decoder_set_process_ref_pic_lists()
     * is called with %TRUE by the subclass, `ref_pic_list0` and `ref_pic_list1`
     * are non-%NULL.
     * In case of interlaced stream, `ref_pic_list0` and `ref_pic_list1` will
     * contain only the first field of complementary reference field pair
     * if currently being decoded picture is a frame picture. Subclasses might
     * need to retrive the other field (i.e., the second field) of the picture
     * if needed.
     * @virtual 
     * @param picture a #GstH264Picture
     * @param slice a #GstH264Slice
     * @param ref_pic_list0     an array of #GstH264Picture pointers
     * @param ref_pic_list1     an array of #GstH264Picture pointers
     */
    vfunc_decode_slice(picture: H264Picture, slice: H264Slice, ref_pic_list0: H264Picture[], ref_pic_list1: H264Picture[]): Gst.FlowReturn
    /**
     * Optional. Called per one #GstH264Picture to notify subclass to finish
     * decoding process for the #GstH264Picture
     * @virtual 
     * @param picture a #GstH264Picture
     */
    vfunc_end_picture(picture: H264Picture): Gst.FlowReturn
    /**
     * Optional. Called by baseclass to query whether delaying output is
     * preferred by subclass or not.
     * @virtual 
     * @param live whether upstream is live or not
     * @returns the number of perferred delayed output frame
     */
    vfunc_get_preferred_output_delay(live: boolean): number
    /**
     * Called when a new field picture is created for interlaced field picture.
     * Subclass can attach implementation specific user data on `second_field` via
     * gst_h264_picture_set_user_data()
     * @virtual 
     * @param first_field the first field #GstH264Picture already decoded
     * @param second_field a #GstH264Picture for the second field
     */
    vfunc_new_field_picture(first_field: H264Picture, second_field: H264Picture): Gst.FlowReturn
    /**
     * Optional. Called whenever new #GstH264Picture is created.
     * Subclass can set implementation specific user data
     * on the #GstH264Picture via gst_h264_picture_set_user_data()
     * @virtual 
     * @param frame a #GstVideoCodecFrame
     * @param picture a #GstH264Picture
     */
    vfunc_new_picture(frame: GstVideo.VideoCodecFrame, picture: H264Picture): Gst.FlowReturn
    /**
     * Called with a #GstH264Picture which is required to be outputted.
     * The #GstVideoCodecFrame must be consumed by subclass.
     * @virtual 
     * @param frame a #GstVideoCodecFrame
     * @param picture a #GstH264Picture
     */
    vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: H264Picture): Gst.FlowReturn
    /**
     * Optional. Called per one #GstH264Picture to notify subclass to prepare
     * decoding process for the #GstH264Picture
     * @virtual 
     * @param picture a #GstH264Picture
     * @param slice a #GstH264Slice
     * @param dpb a #GstH264Dpb
     */
    vfunc_start_picture(picture: H264Picture, slice: H264Slice, dpb: H264Dpb): Gst.FlowReturn

    // Class property signals of GstCodecs-1.0.GstCodecs.H264Decoder

    connect(sigName: "notify::compliance", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compliance", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::compliance", ...args: any[]): void
    connect(sigName: "notify::automatic-request-sync-point-flags", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-request-sync-point-flags", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::automatic-request-sync-point-flags", ...args: any[]): void
    connect(sigName: "notify::automatic-request-sync-points", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-request-sync-points", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::automatic-request-sync-points", ...args: any[]): void
    connect(sigName: "notify::discard-corrupted-frames", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard-corrupted-frames", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::discard-corrupted-frames", ...args: any[]): void
    connect(sigName: "notify::max-errors", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-errors", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-errors", ...args: any[]): void
    connect(sigName: "notify::min-force-key-unit-interval", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-force-key-unit-interval", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-force-key-unit-interval", ...args: any[]): void
    connect(sigName: "notify::qos", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: H264Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The opaque #GstH264Decoder data structure.
 * @class 
 */
export class H264Decoder extends GstVideo.VideoDecoder {

    // Own properties of GstCodecs-1.0.GstCodecs.H264Decoder

    static name: string
    static $gtype: GObject.GType<H264Decoder>

    // Constructors of GstCodecs-1.0.GstCodecs.H264Decoder

    constructor(config?: H264Decoder.ConstructorProperties) 
    _init(config?: H264Decoder.ConstructorProperties): void
}

export module H265Decoder {

    // Constructor properties interface

    export interface ConstructorProperties extends GstVideo.VideoDecoder.ConstructorProperties {
    }

}

export interface H265Decoder {

    // Conflicting properties

    object: any

    // Owm methods of GstCodecs-1.0.GstCodecs.H265Decoder

    /**
     * Retrive DPB and return a #GstH265Picture corresponding to
     * the `system_frame_number`
     * @param system_frame_number a target system frame number of #GstH265Picture
     * @returns a #GstH265Picture if successful, or %NULL otherwise
     */
    get_picture(system_frame_number: number): H265Picture | null
    /**
     * Called to en/disable reference picture modification process.
     * @param process whether subclass is requiring reference picture modification process
     */
    set_process_ref_pic_lists(process: boolean): void

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

    // Own virtual methods of GstCodecs-1.0.GstCodecs.H265Decoder

    /**
     * Provides per slice data with parsed slice header and required raw bitstream
     * for subclass to decode it. If gst_h265_decoder_set_process_ref_pic_lists()
     * is called with %TRUE by the subclass, `ref_pic_list0` and `ref_pic_list1`
     * are non-%NULL.
     * @virtual 
     * @param picture a #GstH265Picture
     * @param slice a #GstH265Slice
     * @param ref_pic_list0     an array of #GstH265Picture pointers
     * @param ref_pic_list1     an array of #GstH265Picture pointers
     */
    vfunc_decode_slice(picture: H265Picture, slice: H265Slice, ref_pic_list0: H265Picture[], ref_pic_list1: H265Picture[]): Gst.FlowReturn
    /**
     * Optional. Called per one #GstH265Picture to notify subclass to finish
     * decoding process for the #GstH265Picture
     * @virtual 
     * @param picture a #GstH265Picture
     */
    vfunc_end_picture(picture: H265Picture): Gst.FlowReturn
    /**
     * Optional. Called by baseclass to query whether delaying output is
     * preferred by subclass or not.
     * @virtual 
     * @param live whether upstream is live or not
     * @returns the number of perferred delayed output frame
     */
    vfunc_get_preferred_output_delay(live: boolean): number
    /**
     * Optional. Called whenever new #GstH265Picture is created.
     * Subclass can set implementation specific user data
     * on the #GstH265Picture via gst_h265_picture_set_user_data()
     * @virtual 
     * @param frame a #GstVideoCodecFrame
     * @param picture a #GstH265Picture
     */
    vfunc_new_picture(frame: GstVideo.VideoCodecFrame, picture: H265Picture): Gst.FlowReturn
    vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: H265Picture): Gst.FlowReturn
    /**
     * Optional. Called per one #GstH265Picture to notify subclass to prepare
     * decoding process for the #GstH265Picture
     * @virtual 
     * @param picture a #GstH265Picture
     * @param slice a #GstH265Slice
     * @param dpb a #GstH265Dpb
     */
    vfunc_start_picture(picture: H265Picture, slice: H265Slice, dpb: H265Dpb): Gst.FlowReturn

    // Class property signals of GstCodecs-1.0.GstCodecs.H265Decoder

    connect(sigName: "notify::automatic-request-sync-point-flags", callback: (($obj: H265Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-request-sync-point-flags", callback: (($obj: H265Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::automatic-request-sync-point-flags", ...args: any[]): void
    connect(sigName: "notify::automatic-request-sync-points", callback: (($obj: H265Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-request-sync-points", callback: (($obj: H265Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::automatic-request-sync-points", ...args: any[]): void
    connect(sigName: "notify::discard-corrupted-frames", callback: (($obj: H265Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard-corrupted-frames", callback: (($obj: H265Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::discard-corrupted-frames", ...args: any[]): void
    connect(sigName: "notify::max-errors", callback: (($obj: H265Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-errors", callback: (($obj: H265Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-errors", ...args: any[]): void
    connect(sigName: "notify::min-force-key-unit-interval", callback: (($obj: H265Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-force-key-unit-interval", callback: (($obj: H265Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-force-key-unit-interval", ...args: any[]): void
    connect(sigName: "notify::qos", callback: (($obj: H265Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: H265Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The opaque #GstH265Decoder data structure.
 * @class 
 */
export class H265Decoder extends GstVideo.VideoDecoder {

    // Own properties of GstCodecs-1.0.GstCodecs.H265Decoder

    static name: string
    static $gtype: GObject.GType<H265Decoder>

    // Constructors of GstCodecs-1.0.GstCodecs.H265Decoder

    constructor(config?: H265Decoder.ConstructorProperties) 
    _init(config?: H265Decoder.ConstructorProperties): void
}

export module Mpeg2Decoder {

    // Constructor properties interface

    export interface ConstructorProperties extends GstVideo.VideoDecoder.ConstructorProperties {
    }

}

export interface Mpeg2Decoder {

    // Conflicting properties

    object: any

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

    // Own virtual methods of GstCodecs-1.0.GstCodecs.Mpeg2Decoder

    /**
     * Provides per slice data with parsed slice header and required raw bitstream
     * for subclass to decode it.
     * @virtual 
     * @param picture a #GstMpeg2Picture
     * @param slice a #GstMpeg2Slice
     */
    vfunc_decode_slice(picture: Mpeg2Picture, slice: Mpeg2Slice): Gst.FlowReturn
    /**
     * Optional. Called per one #GstMpeg2Picture to notify subclass to finish
     * decoding process for the #GstMpeg2Picture
     * @virtual 
     * @param picture a #GstMpeg2Picture
     */
    vfunc_end_picture(picture: Mpeg2Picture): Gst.FlowReturn
    /**
     * Optional. Called by baseclass to query whether delaying output is
     * preferred by subclass or not.
     * @virtual 
     * @param is_live whether upstream is live or not
     * @returns the number of perferred delayed output frames
     */
    vfunc_get_preferred_output_delay(is_live: boolean): number
    /**
     * Called when a new field picture is created for interlaced field picture.
     * Subclass can attach implementation specific user data on `second_field` via
     * gst_mpeg2_picture_set_user_data()
     * @virtual 
     * @param first_field the first field #GstMpeg2Picture already decoded
     * @param second_field a #GstMpeg2Picture for the second field
     */
    vfunc_new_field_picture(first_field: Mpeg2Picture, second_field: Mpeg2Picture): Gst.FlowReturn
    /**
     * Optional. Called whenever new #GstMpeg2Picture is created.
     * Subclass can set implementation specific user data
     * on the #GstMpeg2Picture via gst_mpeg2_picture_set_user_data()
     * @virtual 
     * @param frame a #GstVideoCodecFrame
     * @param picture a #GstMpeg2Picture
     */
    vfunc_new_picture(frame: GstVideo.VideoCodecFrame, picture: Mpeg2Picture): Gst.FlowReturn
    /**
     * Called with a #GstMpeg2Picture which is required to be outputted.
     * The #GstVideoCodecFrame must be consumed by subclass.
     * @virtual 
     * @param frame a #GstVideoCodecFrame
     * @param picture a #GstMpeg2Picture
     */
    vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: Mpeg2Picture): Gst.FlowReturn
    /**
     * Optional. Called per one #GstMpeg2Picture to notify subclass to prepare
     * decoding process for the #GstMpeg2Picture
     * @virtual 
     * @param picture a #GstMpeg2Picture
     * @param slice a #GstMpeg2Slice
     * @param prev_picture a #GstMpeg2Picture
     * @param next_picture a #GstMpeg2Picture
     */
    vfunc_start_picture(picture: Mpeg2Picture, slice: Mpeg2Slice, prev_picture: Mpeg2Picture, next_picture: Mpeg2Picture): Gst.FlowReturn

    // Class property signals of GstCodecs-1.0.GstCodecs.Mpeg2Decoder

    connect(sigName: "notify::automatic-request-sync-point-flags", callback: (($obj: Mpeg2Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-request-sync-point-flags", callback: (($obj: Mpeg2Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::automatic-request-sync-point-flags", ...args: any[]): void
    connect(sigName: "notify::automatic-request-sync-points", callback: (($obj: Mpeg2Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-request-sync-points", callback: (($obj: Mpeg2Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::automatic-request-sync-points", ...args: any[]): void
    connect(sigName: "notify::discard-corrupted-frames", callback: (($obj: Mpeg2Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard-corrupted-frames", callback: (($obj: Mpeg2Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::discard-corrupted-frames", ...args: any[]): void
    connect(sigName: "notify::max-errors", callback: (($obj: Mpeg2Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-errors", callback: (($obj: Mpeg2Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-errors", ...args: any[]): void
    connect(sigName: "notify::min-force-key-unit-interval", callback: (($obj: Mpeg2Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-force-key-unit-interval", callback: (($obj: Mpeg2Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-force-key-unit-interval", ...args: any[]): void
    connect(sigName: "notify::qos", callback: (($obj: Mpeg2Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: Mpeg2Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The opaque #GstMpeg2Decoder data structure.
 * @class 
 */
export class Mpeg2Decoder extends GstVideo.VideoDecoder {

    // Own properties of GstCodecs-1.0.GstCodecs.Mpeg2Decoder

    static name: string
    static $gtype: GObject.GType<Mpeg2Decoder>

    // Constructors of GstCodecs-1.0.GstCodecs.Mpeg2Decoder

    constructor(config?: Mpeg2Decoder.ConstructorProperties) 
    _init(config?: Mpeg2Decoder.ConstructorProperties): void
}

export module Vp8Decoder {

    // Constructor properties interface

    export interface ConstructorProperties extends GstVideo.VideoDecoder.ConstructorProperties {
    }

}

export interface Vp8Decoder {

    // Conflicting properties

    object: any

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

    // Own virtual methods of GstCodecs-1.0.GstCodecs.Vp8Decoder

    vfunc_end_picture(picture: Vp8Picture): Gst.FlowReturn
    /**
     * Optional. Called by baseclass to query whether delaying output is
     * preferred by subclass or not.
     * @virtual 
     * @param is_live whether upstream is live or not
     * @returns the number of perferred delayed output frame
     */
    vfunc_get_preferred_output_delay(is_live: boolean): number
    vfunc_new_picture(frame: GstVideo.VideoCodecFrame, picture: Vp8Picture): Gst.FlowReturn
    vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: Vp8Picture): Gst.FlowReturn
    vfunc_start_picture(picture: Vp8Picture): Gst.FlowReturn

    // Class property signals of GstCodecs-1.0.GstCodecs.Vp8Decoder

    connect(sigName: "notify::automatic-request-sync-point-flags", callback: (($obj: Vp8Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-request-sync-point-flags", callback: (($obj: Vp8Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::automatic-request-sync-point-flags", ...args: any[]): void
    connect(sigName: "notify::automatic-request-sync-points", callback: (($obj: Vp8Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-request-sync-points", callback: (($obj: Vp8Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::automatic-request-sync-points", ...args: any[]): void
    connect(sigName: "notify::discard-corrupted-frames", callback: (($obj: Vp8Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard-corrupted-frames", callback: (($obj: Vp8Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::discard-corrupted-frames", ...args: any[]): void
    connect(sigName: "notify::max-errors", callback: (($obj: Vp8Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-errors", callback: (($obj: Vp8Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-errors", ...args: any[]): void
    connect(sigName: "notify::min-force-key-unit-interval", callback: (($obj: Vp8Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-force-key-unit-interval", callback: (($obj: Vp8Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-force-key-unit-interval", ...args: any[]): void
    connect(sigName: "notify::qos", callback: (($obj: Vp8Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: Vp8Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The opaque #GstVp8Decoder data structure.
 * @class 
 */
export class Vp8Decoder extends GstVideo.VideoDecoder {

    // Own properties of GstCodecs-1.0.GstCodecs.Vp8Decoder

    static name: string
    static $gtype: GObject.GType<Vp8Decoder>

    // Constructors of GstCodecs-1.0.GstCodecs.Vp8Decoder

    constructor(config?: Vp8Decoder.ConstructorProperties) 
    _init(config?: Vp8Decoder.ConstructorProperties): void
}

export module Vp9Decoder {

    // Constructor properties interface

    export interface ConstructorProperties extends GstVideo.VideoDecoder.ConstructorProperties {
    }

}

export interface Vp9Decoder {

    // Conflicting properties

    object: any

    // Owm methods of GstCodecs-1.0.GstCodecs.Vp9Decoder

    /**
     * Called to set non-keyframe format change awareness
     * @param support whether subclass can support non-keyframe format change
     */
    set_non_keyframe_format_change_support(support: boolean): void

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

    // Own virtual methods of GstCodecs-1.0.GstCodecs.Vp9Decoder

    /**
     * Called to notify decoding for subclass to decoder given `picture` with
     * given `dpb`
     * @virtual 
     * @param picture a #GstVp9Picture to decoder
     * @param dpb a #GstVp9Dpb
     */
    vfunc_decode_picture(picture: Vp9Picture, dpb: Vp9Dpb): Gst.FlowReturn
    /**
     * Optional. Called to duplicate `picture` when show_existing_frame flag is set
     * in the parsed vp9 frame header. Returned #GstVp9Picture from this method
     * should hold already decoded picture data corresponding to the `picture,`
     * since the returned #GstVp9Picture from this method will be passed to
     * the output_picture method immediately without additional decoding process.
     * 
     * If this method is not implemented by subclass, baseclass will drop
     * current #GstVideoCodecFrame without additional processing for the current
     * frame.
     * @virtual 
     * @param frame a #GstVideoCodecFrame
     * @param picture a #GstVp9Picture to be duplicated
     * @returns a #GstVp9Picture or %NULL if failed to duplicate @picture.
     */
    vfunc_duplicate_picture(frame: GstVideo.VideoCodecFrame, picture: Vp9Picture): Vp9Picture | null
    /**
     * Optional. Called per one #GstVp9Picture to notify subclass to finish
     * decoding process for the #GstVp9Picture
     * @virtual 
     * @param picture a #GstVp9Picture
     */
    vfunc_end_picture(picture: Vp9Picture): Gst.FlowReturn
    /**
     * Optional. Retrieve the preferred output delay from child classes.
     * controls how many frames to delay when calling
     * GstVp9DecoderClass::output_picture
     * @virtual 
     * @param is_live whether upstream is live or not
     * @returns the number of perferred delayed output frame
     */
    vfunc_get_preferred_output_delay(is_live: boolean): number
    /**
     * Optional. Called whenever new #GstVp9Picture is created.
     * Subclass can set implementation specific user data on the #GstVp9Picture
     * via gst_vp9_picture_set_user_data()
     * @virtual 
     * @param frame a #GstVideoCodecFrame
     * @param picture a #GstVp9Picture
     */
    vfunc_new_picture(frame: GstVideo.VideoCodecFrame, picture: Vp9Picture): Gst.FlowReturn
    /**
     * Notifies subclass of video sequence update such as resolution, bitdepth,
     * profile.
     * @virtual 
     * @param frame_hdr a #GstVp9FrameHeader
     * @param max_dpb_size the size of dpb including preferred output delay   by subclass reported via get_preferred_output_delay method.
     */
    vfunc_new_sequence(frame_hdr: Vp9FrameHeader, max_dpb_size: number): Gst.FlowReturn
    /**
     * Called to notify `picture` is ready to be outputted.
     * @virtual 
     * @param frame a #GstVideoCodecFrame
     * @param picture a #GstVp9Picture
     */
    vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: Vp9Picture): Gst.FlowReturn
    /**
     * Optional. Called to notify subclass to prepare decoding process for
     * `picture`
     * @virtual 
     * @param picture a #GstVp9Picture
     */
    vfunc_start_picture(picture: Vp9Picture): Gst.FlowReturn

    // Class property signals of GstCodecs-1.0.GstCodecs.Vp9Decoder

    connect(sigName: "notify::automatic-request-sync-point-flags", callback: (($obj: Vp9Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-request-sync-point-flags", callback: (($obj: Vp9Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::automatic-request-sync-point-flags", ...args: any[]): void
    connect(sigName: "notify::automatic-request-sync-points", callback: (($obj: Vp9Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-request-sync-points", callback: (($obj: Vp9Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::automatic-request-sync-points", ...args: any[]): void
    connect(sigName: "notify::discard-corrupted-frames", callback: (($obj: Vp9Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discard-corrupted-frames", callback: (($obj: Vp9Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::discard-corrupted-frames", ...args: any[]): void
    connect(sigName: "notify::max-errors", callback: (($obj: Vp9Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-errors", callback: (($obj: Vp9Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::max-errors", ...args: any[]): void
    connect(sigName: "notify::min-force-key-unit-interval", callback: (($obj: Vp9Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-force-key-unit-interval", callback: (($obj: Vp9Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-force-key-unit-interval", ...args: any[]): void
    connect(sigName: "notify::qos", callback: (($obj: Vp9Decoder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos", callback: (($obj: Vp9Decoder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The opaque #GstVp9Decoder data structure.
 * @class 
 */
export class Vp9Decoder extends GstVideo.VideoDecoder {

    // Own properties of GstCodecs-1.0.GstCodecs.Vp9Decoder

    static name: string
    static $gtype: GObject.GType<Vp9Decoder>

    // Constructors of GstCodecs-1.0.GstCodecs.Vp9Decoder

    constructor(config?: Vp9Decoder.ConstructorProperties) 
    _init(config?: Vp9Decoder.ConstructorProperties): void
}

export interface AV1DecoderClass {

    // Own fields of GstCodecs-1.0.GstCodecs.AV1DecoderClass

    parent_class: GstVideo.VideoDecoderClass
    new_picture: (decoder: AV1Decoder, frame: GstVideo.VideoCodecFrame, picture: AV1Picture) => Gst.FlowReturn
    duplicate_picture: (decoder: AV1Decoder, frame: GstVideo.VideoCodecFrame, picture: AV1Picture) => AV1Picture
    start_picture: (decoder: AV1Decoder, picture: AV1Picture, dpb: AV1Dpb) => Gst.FlowReturn
    decode_tile: (decoder: AV1Decoder, picture: AV1Picture, tile: AV1Tile) => Gst.FlowReturn
    end_picture: (decoder: AV1Decoder, picture: AV1Picture) => Gst.FlowReturn
    output_picture: (decoder: AV1Decoder, frame: GstVideo.VideoCodecFrame, picture: AV1Picture) => Gst.FlowReturn
    get_preferred_output_delay: (decoder: AV1Decoder, live: boolean) => number
}

export abstract class AV1DecoderClass {

    // Own properties of GstCodecs-1.0.GstCodecs.AV1DecoderClass

    static name: string
}

export interface AV1DecoderPrivate {
}

export class AV1DecoderPrivate {

    // Own properties of GstCodecs-1.0.GstCodecs.AV1DecoderPrivate

    static name: string
}

export interface AV1Dpb {

    // Own fields of GstCodecs-1.0.GstCodecs.AV1Dpb

    pic_list: AV1Picture[]

    // Owm methods of GstCodecs-1.0.GstCodecs.AV1Dpb

    /**
     * Store the `picture`
     * @param picture a #GstAV1Picture
     */
    add(picture: AV1Picture): void
    /**
     * Clear all stored #GstAV1Picture
     */
    clear(): void
    /**
     * Free the `dpb`
     */
    free(): void
}

export class AV1Dpb {

    // Own properties of GstCodecs-1.0.GstCodecs.AV1Dpb

    static name: string
}

export interface AV1Picture {

    // Owm methods of GstCodecs-1.0.GstCodecs.AV1Picture

    /**
     * Gets private data set on the picture via
     * gst_av1_picture_set_user_data() previously.
     * @returns The previously set user_data
     */
    get_user_data(): any | null
    /**
     * Sets `user_data` on the picture and the #GDestroyNotify that will be called when
     * the picture is freed.
     * 
     * If a `user_data` was previously set, then the previous set `notify` will be called
     * before the `user_data` is replaced.
     * @param notify a #GDestroyNotify
     */
    set_user_data(notify: GLib.DestroyNotify): void
}

export class AV1Picture {

    // Own properties of GstCodecs-1.0.GstCodecs.AV1Picture

    static name: string

    // Constructors of GstCodecs-1.0.GstCodecs.AV1Picture

    /**
     * Create new #GstAV1Picture
     * @constructor 
     * @returns a new #GstAV1Picture
     */
    constructor() 
    /**
     * Create new #GstAV1Picture
     * @constructor 
     * @returns a new #GstAV1Picture
     */
    static new(): AV1Picture
}

export interface AV1Tile {
}

export class AV1Tile {

    // Own properties of GstCodecs-1.0.GstCodecs.AV1Tile

    static name: string
}

export interface H264DecoderClass {

    // Own fields of GstCodecs-1.0.GstCodecs.H264DecoderClass

    new_picture: (decoder: H264Decoder, frame: GstVideo.VideoCodecFrame, picture: H264Picture) => Gst.FlowReturn
    new_field_picture: (decoder: H264Decoder, first_field: H264Picture, second_field: H264Picture) => Gst.FlowReturn
    start_picture: (decoder: H264Decoder, picture: H264Picture, slice: H264Slice, dpb: H264Dpb) => Gst.FlowReturn
    decode_slice: (decoder: H264Decoder, picture: H264Picture, slice: H264Slice, ref_pic_list0: H264Picture[], ref_pic_list1: H264Picture[]) => Gst.FlowReturn
    end_picture: (decoder: H264Decoder, picture: H264Picture) => Gst.FlowReturn
    output_picture: (decoder: H264Decoder, frame: GstVideo.VideoCodecFrame, picture: H264Picture) => Gst.FlowReturn
    get_preferred_output_delay: (decoder: H264Decoder, live: boolean) => number
}

/**
 * The opaque #GstH264DecoderClass data structure.
 * @record 
 */
export abstract class H264DecoderClass {

    // Own properties of GstCodecs-1.0.GstCodecs.H264DecoderClass

    static name: string
}

export interface H264DecoderPrivate {
}

export class H264DecoderPrivate {

    // Own properties of GstCodecs-1.0.GstCodecs.H264DecoderPrivate

    static name: string
}

export interface H264Dpb {

    // Owm methods of GstCodecs-1.0.GstCodecs.H264Dpb

    /**
     * Store the `picture`
     * @param picture a #GstH264Picture
     */
    add(picture: H264Picture): void
    /**
     * Perform bumping process as defined in C.4.5.3 "Bumping" process.
     * If `drain` is %TRUE, `dpb` will remove a #GstH264Picture from internal array
     * so that returned #GstH264Picture could hold the last reference of it
     * @param drain whether draining or not
     * @returns a #GstH264Picture which is needed to be outputted
     */
    bump(drain: boolean): H264Picture | null
    /**
     * Clear all stored #GstH264Picture
     */
    clear(): void
    /**
     * Delete already outputted and not referenced all pictures from dpb
     */
    delete_unused(): void
    /**
     * Free the `dpb`
     */
    free(): void
    get_interlaced(): boolean
    /**
     * Find a long term reference picture which has matching long term picture number
     * @param long_term_pic_num a long term picture number
     * @returns a #GstH264Picture
     */
    get_long_ref_by_long_term_pic_num(long_term_pic_num: number): H264Picture | null
    /**
     * Find a short term reference picture which has the lowest frame_num_wrap
     * @returns a #GstH264Picture
     */
    get_lowest_frame_num_short_ref(): H264Picture | null
    get_max_num_frames(): number
    get_max_num_reorder_frames(): number
    get_picture(system_frame_number: number): H264Picture | null
    get_pictures_all(): H264Picture[]
    /**
     * Retrieve all long-term reference pictures from `dpb`. The picture will be
     * appended to the array.
     * @param include_second_field %TRUE if the second field pictures need to be included
     */
    get_pictures_long_term_ref(include_second_field: boolean): /* out */ H264Picture[]
    /**
     * Retrieve all short-term reference pictures from `dpb`. The picture will be
     * appended to the array.
     * @param include_non_existing %TRUE if non-existing pictures need to be included
     * @param include_second_field %TRUE if the second field pictures need to be included
     */
    get_pictures_short_term_ref(include_non_existing: boolean, include_second_field: boolean): /* out */ H264Picture[]
    /**
     * Find a short term reference picture which has matching picture number
     * @param pic_num a picture number
     * @returns a #GstH264Picture
     */
    get_short_ref_by_pic_num(pic_num: number): H264Picture | null
    get_size(): number
    has_empty_frame_buffer(): boolean
    /**
     * Mark all pictures are not referenced
     */
    mark_all_non_ref(): void
    needs_bump(to_insert: H264Picture, latency_mode: H264DpbBumpMode): boolean
    num_ref_frames(): number
    set_interlaced(interlaced: boolean): void
    /**
     * Notify the DPB that `picture` is output directly without storing
     * in the DPB.
     * @param picture a #GstH264Picture of the last output.
     */
    set_last_output(picture: H264Picture): void
    /**
     * Set the number of maximum allowed frames to store
     * @param max_num_frames the maximum number of picture
     */
    set_max_num_frames(max_num_frames: number): void
    set_max_num_reorder_frames(max_num_reorder_frames: number): void
}

export class H264Dpb {

    // Own properties of GstCodecs-1.0.GstCodecs.H264Dpb

    static name: string
}

export interface H264Picture {

    // Owm methods of GstCodecs-1.0.GstCodecs.H264Picture

    /**
     * Gets private data set on the picture via
     * gst_h264_picture_set_user_data() previously.
     * @returns The previously set user_data
     */
    get_user_data(): any | null
    /**
     * Sets `user_data` on the picture and the #GDestroyNotify that will be called when
     * the picture is freed.
     * 
     * If a `user_data` was previously set, then the previous set `notify` will be called
     * before the `user_data` is replaced.
     * @param notify a #GDestroyNotify
     */
    set_user_data(notify: GLib.DestroyNotify): void
}

export class H264Picture {

    // Own properties of GstCodecs-1.0.GstCodecs.H264Picture

    static name: string

    // Constructors of GstCodecs-1.0.GstCodecs.H264Picture

    /**
     * Create new #GstH264Picture
     * @constructor 
     * @returns a new #GstH264Picture
     */
    constructor() 
    /**
     * Create new #GstH264Picture
     * @constructor 
     * @returns a new #GstH264Picture
     */
    static new(): H264Picture
}

export interface H264Slice {
}

export class H264Slice {

    // Own properties of GstCodecs-1.0.GstCodecs.H264Slice

    static name: string
}

export interface H265DecoderClass {

    // Own fields of GstCodecs-1.0.GstCodecs.H265DecoderClass

    parent_class: GstVideo.VideoDecoderClass
    new_picture: (decoder: H265Decoder, frame: GstVideo.VideoCodecFrame, picture: H265Picture) => Gst.FlowReturn
    start_picture: (decoder: H265Decoder, picture: H265Picture, slice: H265Slice, dpb: H265Dpb) => Gst.FlowReturn
    decode_slice: (decoder: H265Decoder, picture: H265Picture, slice: H265Slice, ref_pic_list0: H265Picture[], ref_pic_list1: H265Picture[]) => Gst.FlowReturn
    end_picture: (decoder: H265Decoder, picture: H265Picture) => Gst.FlowReturn
    output_picture: (decoder: H265Decoder, frame: GstVideo.VideoCodecFrame, picture: H265Picture) => Gst.FlowReturn
    get_preferred_output_delay: (decoder: H265Decoder, live: boolean) => number
}

/**
 * The opaque #GstH265DecoderClass data structure.
 * @record 
 */
export abstract class H265DecoderClass {

    // Own properties of GstCodecs-1.0.GstCodecs.H265DecoderClass

    static name: string
}

export interface H265DecoderPrivate {
}

export class H265DecoderPrivate {

    // Own properties of GstCodecs-1.0.GstCodecs.H265DecoderPrivate

    static name: string
}

export interface H265Dpb {

    // Owm methods of GstCodecs-1.0.GstCodecs.H265Dpb

    /**
     * Store the `picture` and perform increase pic_latency_cnt as defined in
     * "C.5.2.3 Additional bumping" process
     * @param picture a #GstH265Picture
     */
    add(picture: H265Picture): void
    /**
     * Perform bumping process as defined in C.5.2.4 "Bumping" process.
     * If `drain` is %TRUE, `dpb` will remove a #GstH265Picture from internal array
     * so that returned #GstH265Picture could hold the last reference of it
     * @param drain whether draining or not
     * @returns a #GstH265Picture which is needed to be outputted
     */
    bump(drain: boolean): H265Picture | null
    /**
     * Clear all stored #GstH265Picture
     */
    clear(): void
    /**
     * Delete not needed for output and not referenced all pictures from dpb
     */
    delete_unused(): void
    /**
     * Free the `dpb`
     */
    free(): void
    /**
     * Find a long term reference picture which has matching poc
     * @param poc a picture order count
     * @returns a #GstH265Picture
     */
    get_long_ref_by_poc(poc: number): H265Picture | null
    get_max_num_pics(): number
    get_picture(system_frame_number: number): H265Picture | null
    get_pictures_all(): H265Picture[]
    /**
     * Find a short or long term reference picture which has matching poc
     * @param poc a picture order count
     * @returns a #GstH265Picture
     */
    get_ref_by_poc(poc: number): H265Picture | null
    /**
     * Find a short or long term reference picture which has matching poc_lsb
     * @param poc_lsb a picture order count lsb
     * @returns a #GstH265Picture
     */
    get_ref_by_poc_lsb(poc_lsb: number): H265Picture | null
    /**
     * Find a short term reference picture which has matching poc
     * @param poc a picture order count
     * @returns a #GstH265Picture
     */
    get_short_ref_by_poc(poc: number): H265Picture | null
    get_size(): number
    /**
     * Mark all pictures are not referenced
     */
    mark_all_non_ref(): void
    needs_bump(max_num_reorder_pics: number, max_latency_increase: number, max_dec_pic_buffering: number): boolean
    num_ref_pictures(): number
    /**
     * Set the number of maximum allowed pictures to store
     * @param max_num_pics the maximum number of picture
     */
    set_max_num_pics(max_num_pics: number): void
}

export class H265Dpb {

    // Own properties of GstCodecs-1.0.GstCodecs.H265Dpb

    static name: string
}

export interface H265Picture {

    // Owm methods of GstCodecs-1.0.GstCodecs.H265Picture

    /**
     * Gets private data set on the picture via
     * gst_h265_picture_set_user_data() previously.
     * @returns The previously set user_data
     */
    get_user_data(): any | null
    /**
     * Sets `user_data` on the picture and the #GDestroyNotify that will be called when
     * the picture is freed.
     * 
     * If a `user_data` was previously set, then the previous set `notify` will be called
     * before the `user_data` is replaced.
     * @param notify a #GDestroyNotify
     */
    set_user_data(notify: GLib.DestroyNotify): void
}

export class H265Picture {

    // Own properties of GstCodecs-1.0.GstCodecs.H265Picture

    static name: string

    // Constructors of GstCodecs-1.0.GstCodecs.H265Picture

    /**
     * Create new #GstH265Picture
     * @constructor 
     * @returns a new #GstH265Picture
     */
    constructor() 
    /**
     * Create new #GstH265Picture
     * @constructor 
     * @returns a new #GstH265Picture
     */
    static new(): H265Picture
}

export interface H265Slice {
}

export class H265Slice {

    // Own properties of GstCodecs-1.0.GstCodecs.H265Slice

    static name: string
}

export interface Mpeg2DecoderClass {

    // Own fields of GstCodecs-1.0.GstCodecs.Mpeg2DecoderClass

    parent_class: GstVideo.VideoDecoderClass
    new_picture: (decoder: Mpeg2Decoder, frame: GstVideo.VideoCodecFrame, picture: Mpeg2Picture) => Gst.FlowReturn
    new_field_picture: (decoder: Mpeg2Decoder, first_field: Mpeg2Picture, second_field: Mpeg2Picture) => Gst.FlowReturn
    start_picture: (decoder: Mpeg2Decoder, picture: Mpeg2Picture, slice: Mpeg2Slice, prev_picture: Mpeg2Picture, next_picture: Mpeg2Picture) => Gst.FlowReturn
    decode_slice: (decoder: Mpeg2Decoder, picture: Mpeg2Picture, slice: Mpeg2Slice) => Gst.FlowReturn
    end_picture: (decoder: Mpeg2Decoder, picture: Mpeg2Picture) => Gst.FlowReturn
    output_picture: (decoder: Mpeg2Decoder, frame: GstVideo.VideoCodecFrame, picture: Mpeg2Picture) => Gst.FlowReturn
    get_preferred_output_delay: (decoder: Mpeg2Decoder, is_live: boolean) => number
}

export abstract class Mpeg2DecoderClass {

    // Own properties of GstCodecs-1.0.GstCodecs.Mpeg2DecoderClass

    static name: string
}

export interface Mpeg2DecoderPrivate {
}

export class Mpeg2DecoderPrivate {

    // Own properties of GstCodecs-1.0.GstCodecs.Mpeg2DecoderPrivate

    static name: string
}

export interface Mpeg2Dpb {

    // Owm methods of GstCodecs-1.0.GstCodecs.Mpeg2Dpb

    /**
     * Store the `picture`
     * @param picture a #GstMpeg2Picture
     */
    add(picture: Mpeg2Picture): void
    bump(): Mpeg2Picture | null
    /**
     * Clear all stored #GstMpeg2Picture
     */
    clear(): void
    /**
     * Free the `dpb`
     */
    free(): void
    /**
     * Gets the neighbours #GstMpeg2Picture of `picture` in `dpb`.
     * @param picture current #GstMpeg2Picture
     */
    get_neighbours(picture: Mpeg2Picture): [ /* prev_picture_ptr */ Mpeg2Picture | null, /* next_picture_ptr */ Mpeg2Picture | null ]
    /**
     * Checks if `dbp` has a new picture.
     * @returns #TRUE if @dpb needs to be bumped; otherwise, #FALSE
     */
    need_bump(): boolean
}

export class Mpeg2Dpb {

    // Own properties of GstCodecs-1.0.GstCodecs.Mpeg2Dpb

    static name: string
}

export interface Mpeg2Picture {

    // Owm methods of GstCodecs-1.0.GstCodecs.Mpeg2Picture

    /**
     * Gets private data set on the picture via
     * gst_mpeg2_picture_set_user_data() previously.
     * @returns The previously set user_data
     */
    get_user_data(): any | null
    /**
     * Sets `user_data` on the picture and the #GDestroyNotify that will be called when
     * the picture is freed.
     * 
     * If a `user_data` was previously set, then the previous set `notify` will be called
     * before the `user_data` is replaced.
     * @param notify a #GDestroyNotify
     */
    set_user_data(notify: GLib.DestroyNotify): void
}

export class Mpeg2Picture {

    // Own properties of GstCodecs-1.0.GstCodecs.Mpeg2Picture

    static name: string

    // Constructors of GstCodecs-1.0.GstCodecs.Mpeg2Picture

    /**
     * Create new #GstMpeg2Picture
     * @constructor 
     * @returns a new #GstMpeg2Picture
     */
    constructor() 
    /**
     * Create new #GstMpeg2Picture
     * @constructor 
     * @returns a new #GstMpeg2Picture
     */
    static new(): Mpeg2Picture
}

export interface Mpeg2Slice {
}

export class Mpeg2Slice {

    // Own properties of GstCodecs-1.0.GstCodecs.Mpeg2Slice

    static name: string
}

export interface Vp8DecoderClass {

    // Own fields of GstCodecs-1.0.GstCodecs.Vp8DecoderClass

    parent_class: GstVideo.VideoDecoderClass
    new_picture: (decoder: Vp8Decoder, frame: GstVideo.VideoCodecFrame, picture: Vp8Picture) => Gst.FlowReturn
    start_picture: (decoder: Vp8Decoder, picture: Vp8Picture) => Gst.FlowReturn
    end_picture: (decoder: Vp8Decoder, picture: Vp8Picture) => Gst.FlowReturn
    output_picture: (decoder: Vp8Decoder, frame: GstVideo.VideoCodecFrame, picture: Vp8Picture) => Gst.FlowReturn
    get_preferred_output_delay: (decoder: Vp8Decoder, is_live: boolean) => number
}

export abstract class Vp8DecoderClass {

    // Own properties of GstCodecs-1.0.GstCodecs.Vp8DecoderClass

    static name: string
}

export interface Vp8DecoderPrivate {
}

export class Vp8DecoderPrivate {

    // Own properties of GstCodecs-1.0.GstCodecs.Vp8DecoderPrivate

    static name: string
}

export interface Vp8Picture {

    // Owm methods of GstCodecs-1.0.GstCodecs.Vp8Picture

    /**
     * Gets private data set on the picture via
     * gst_vp8_picture_set_user_data() previously.
     * @returns The previously set user_data
     */
    get_user_data(): any | null
    /**
     * Sets `user_data` on the picture and the #GDestroyNotify that will be called when
     * the picture is freed.
     * 
     * If a `user_data` was previously set, then the previous set `notify` will be called
     * before the `user_data` is replaced.
     * @param notify a #GDestroyNotify
     */
    set_user_data(notify: GLib.DestroyNotify): void
}

export class Vp8Picture {

    // Own properties of GstCodecs-1.0.GstCodecs.Vp8Picture

    static name: string

    // Constructors of GstCodecs-1.0.GstCodecs.Vp8Picture

    /**
     * Create new #GstVp8Picture
     * @constructor 
     * @returns a new #GstVp8Picture
     */
    constructor() 
    /**
     * Create new #GstVp8Picture
     * @constructor 
     * @returns a new #GstVp8Picture
     */
    static new(): Vp8Picture
}

export interface Vp9DecoderClass {

    // Own fields of GstCodecs-1.0.GstCodecs.Vp9DecoderClass

    parent_class: GstVideo.VideoDecoderClass
    new_sequence: (decoder: Vp9Decoder, frame_hdr: Vp9FrameHeader, max_dpb_size: number) => Gst.FlowReturn
    new_picture: (decoder: Vp9Decoder, frame: GstVideo.VideoCodecFrame, picture: Vp9Picture) => Gst.FlowReturn
    duplicate_picture: (decoder: Vp9Decoder, frame: GstVideo.VideoCodecFrame, picture: Vp9Picture) => Vp9Picture | null
    start_picture: (decoder: Vp9Decoder, picture: Vp9Picture) => Gst.FlowReturn
    decode_picture: (decoder: Vp9Decoder, picture: Vp9Picture, dpb: Vp9Dpb) => Gst.FlowReturn
    end_picture: (decoder: Vp9Decoder, picture: Vp9Picture) => Gst.FlowReturn
    output_picture: (decoder: Vp9Decoder, frame: GstVideo.VideoCodecFrame, picture: Vp9Picture) => Gst.FlowReturn
    get_preferred_output_delay: (decoder: Vp9Decoder, is_live: boolean) => number
}

export abstract class Vp9DecoderClass {

    // Own properties of GstCodecs-1.0.GstCodecs.Vp9DecoderClass

    static name: string
}

export interface Vp9DecoderPrivate {
}

export class Vp9DecoderPrivate {

    // Own properties of GstCodecs-1.0.GstCodecs.Vp9DecoderPrivate

    static name: string
}

export interface Vp9DeltaProbabilities {
}

/**
 * Stores probabilities updates. This is from the spec
 * and can be used as a binary.
 * @record 
 */
export class Vp9DeltaProbabilities {

    // Own properties of GstCodecs-1.0.GstCodecs.Vp9DeltaProbabilities

    static name: string
}

export interface Vp9Dpb {

    // Own fields of GstCodecs-1.0.GstCodecs.Vp9Dpb

    pic_list: Vp9Picture[]

    // Owm methods of GstCodecs-1.0.GstCodecs.Vp9Dpb

    /**
     * Store the `picture`
     * @param picture a #GstVp9Picture
     */
    add(picture: Vp9Picture): void
    /**
     * Clear all stored #GstVp9Picture
     */
    clear(): void
    /**
     * Free the `dpb`
     */
    free(): void
}

export class Vp9Dpb {

    // Own properties of GstCodecs-1.0.GstCodecs.Vp9Dpb

    static name: string
}

export interface Vp9FrameHeader {

    // Own fields of GstCodecs-1.0.GstCodecs.Vp9FrameHeader

    /**
     * encoded profile
     * @field 
     */
    profile: number
    /**
     * encoded bit depth
     * @field 
     */
    bit_depth: number
    /**
     * specify the chroma subsampling format for x coordinate
     * @field 
     */
    subsampling_x: number
    /**
     * specify the chroma subsampling format for y coordinate
     * @field 
     */
    subsampling_y: number
    /**
     * specifies the color space of the stream
     * @field 
     */
    color_space: number
    /**
     * specifies the black level and range of the luma and chroma
     *   signals
     * @field 
     */
    color_range: number
    /**
     * equal to 1, indicates the frame indexed by
     *   frame_to_show_map_idx is to be displayed
     * @field 
     */
    show_existing_frame: number
    /**
     * specifies the frame to be displayed.
     *   It is only available if show_existing_frame is 1
     * @field 
     */
    frame_to_show_map_idx: number
    /**
     * equal to 0 indicates that the current frame is a key frame
     * @field 
     */
    frame_type: number
    /**
     * indicate whether it is a displayable frame or not
     * @field 
     */
    show_frame: number
    /**
     * equal to 1 indicates that error resilient mode is
     *   enabled
     * @field 
     */
    error_resilient_mode: number
    /**
     * coded frame width
     * @field 
     */
    width: number
    /**
     * coded frame height
     * @field 
     */
    height: number
    /**
     * equal to 0 means that the render width and
     *   height are inferred from the frame width and height
     * @field 
     */
    render_and_frame_size_different: number
    /**
     * render width of the frame
     * @field 
     */
    render_width: number
    /**
     * render width of the frame
     * @field 
     */
    render_height: number
    /**
     * equal to 1 indicates that the frame is an intra-only frame
     * @field 
     */
    intra_only: number
    /**
     * specifies whether the frame context should be reset to
     *   default values
     * @field 
     */
    reset_frame_context: number
    /**
     * contains a bitmask that specifies which reference frame
     *   slots will be updated with the current frame after it is decoded
     * @field 
     */
    refresh_frame_flags: number
    /**
     * specifies which reference frames are used by inter frames
     * @field 
     */
    ref_frame_idx: Uint8Array
    /**
     * specifies the intended direction of the motion vector
     *   in time for each reference frame. A sign bias equal to 0 indicates that
     *   the reference frame is a backwards reference
     * @field 
     */
    ref_frame_sign_bias: Uint8Array
    /**
     * equal to 0 specifies that motion vectors are
     *   specified to quarter pel precision
     * @field 
     */
    allow_high_precision_mv: number
    /**
     * specifies the filter selection used for performing
     *   inter prediction
     * @field 
     */
    interpolation_filter: number
    /**
     * equal to 1 indicates that the probabilities computed
     *   for this frame
     * @field 
     */
    refresh_frame_context: number
    /**
     * equal to 1 indicates that parallel decoding
     *   mode is enabled
     * @field 
     */
    frame_parallel_decoding_mode: number
    /**
     * indicates the frame context to use
     * @field 
     */
    frame_context_idx: number
    /**
     * a #GstVp9LoopFilterParams
     * @field 
     */
    loop_filter_params: Vp9LoopFilterParams
    /**
     * a #GstVp9QuantizationParams
     * @field 
     */
    quantization_params: Vp9QuantizationParams
    /**
     * a #GstVp9SegmentationParams
     * @field 
     */
    segmentation_params: Vp9SegmentationParams
    /**
     * specifies the base 2 logarithm of the width of each tile
     * @field 
     */
    tile_cols_log2: number
    /**
     * specifies the base 2 logarithm of the height of each tile
     * @field 
     */
    tile_rows_log2: number
    header_size_in_bytes: number
    /**
     * Specifies how the transform size is determined.
     * @field 
     */
    tx_mode: Vp9TxMode
    /**
     * Is a derived syntax element that specifies the type of
     * inter prediction to be used.
     * @field 
     */
    reference_mode: Vp9ReferenceMode
    /**
     * Modification to the probabilities encoded in the bitstream.
     * @field 
     */
    delta_probabilities: Vp9DeltaProbabilities
    /**
     * lossless mode decode
     * @field 
     */
    lossless_flag: number
    /**
     * length of uncompressed header
     * @field 
     */
    frame_header_length_in_bytes: number
}

export class Vp9FrameHeader {

    // Own properties of GstCodecs-1.0.GstCodecs.Vp9FrameHeader

    static name: string
}

export interface Vp9LoopFilterParams {

    // Own fields of GstCodecs-1.0.GstCodecs.Vp9LoopFilterParams

    /**
     * indicates the loop filter strength
     * @field 
     */
    loop_filter_level: number
    /**
     * indicates the sharpness level
     * @field 
     */
    loop_filter_sharpness: number
    /**
     * equal to 1 means that the filter level depends
     *   on the mode and reference frame used to predict a block
     * @field 
     */
    loop_filter_delta_enabled: number
    /**
     * equal to 1 means that the bitstream contains
     *   additional syntax elements that specify which mode and reference frame
     *   deltas are to be updated
     * @field 
     */
    loop_filter_delta_update: number
    /**
     * equal to 1 means that the bitstream contains the syntax
     *   element loop_filter_ref_delta
     * @field 
     */
    update_ref_delta: Uint8Array
    /**
     * contains the adjustment needed for the filter level
     *   based on the chosen reference frame
     * @field 
     */
    loop_filter_ref_deltas: Uint8Array
    /**
     * equal to 1 means that the bitstream contains the syntax
     *   element loop_filter_mode_deltas
     * @field 
     */
    update_mode_delta: Uint8Array
    /**
     * contains the adjustment needed for the filter level
     *   based on the chosen mode
     * @field 
     */
    loop_filter_mode_deltas: Uint8Array
}

/**
 * Loop filter params. See "6.2.8 Loop filter params syntax" and
 * "7.2.8 Loop filter semantics".
 * 
 * If syntax elements for `update_ref_delta`
 * and/or `loop_filter_mode_deltas` are not present in bitstream,
 * parser will fill `loop_filter_ref_deltas` and `loop_filter_mode_deltas` values
 * by using previously parsed values.
 * @record 
 */
export class Vp9LoopFilterParams {

    // Own properties of GstCodecs-1.0.GstCodecs.Vp9LoopFilterParams

    static name: string
}

export interface Vp9MvDeltaProbs {
}

/**
 * Stores motion vectors probabilities updates. This is from the spec
 * and can be used as a binary.
 * @record 
 */
export class Vp9MvDeltaProbs {

    // Own properties of GstCodecs-1.0.GstCodecs.Vp9MvDeltaProbs

    static name: string
}

export interface Vp9Picture {

    // Owm methods of GstCodecs-1.0.GstCodecs.Vp9Picture

    /**
     * Gets private data set on the picture via
     * gst_vp9_picture_set_user_data() previously.
     * @returns The previously set user_data
     */
    get_user_data(): any | null
    /**
     * Sets `user_data` on the picture and the #GDestroyNotify that will be called when
     * the picture is freed.
     * 
     * If a `user_data` was previously set, then the previous set `notify` will be called
     * before the `user_data` is replaced.
     * @param notify a #GDestroyNotify
     */
    set_user_data(notify: GLib.DestroyNotify): void
}

export class Vp9Picture {

    // Own properties of GstCodecs-1.0.GstCodecs.Vp9Picture

    static name: string

    // Constructors of GstCodecs-1.0.GstCodecs.Vp9Picture

    /**
     * Create new #GstVp9Picture
     * @constructor 
     * @returns a new #GstVp9Picture
     */
    constructor() 
    /**
     * Create new #GstVp9Picture
     * @constructor 
     * @returns a new #GstVp9Picture
     */
    static new(): Vp9Picture
}

export interface Vp9QuantizationParams {

    // Own fields of GstCodecs-1.0.GstCodecs.Vp9QuantizationParams

    /**
     * indicates the base frame qindex. This is used for Y AC
     *   coefficients and as the base value for the other quantizers
     * @field 
     */
    base_q_idx: number
    /**
     * indicates the Y DC quantizer relative to base_q_idx
     * @field 
     */
    delta_q_y_dc: number
    /**
     * indicates the UV DC quantizer relative to base_q_idx
     * @field 
     */
    delta_q_uv_dc: number
    /**
     * indicates the UV AC quantizer relative to base_q_idx
     * @field 
     */
    delta_q_uv_ac: number
}

export class Vp9QuantizationParams {

    // Own properties of GstCodecs-1.0.GstCodecs.Vp9QuantizationParams

    static name: string
}

export interface Vp9SegmentationParams {

    // Own fields of GstCodecs-1.0.GstCodecs.Vp9SegmentationParams

    /**
     * equal to 1 indicates that this frame makes use of the
     *   segmentation tool
     * @field 
     */
    segmentation_enabled: number
    /**
     * equal to 1 indicates that the segmentation map
     *   should be updated during the decoding of this frame
     * @field 
     */
    segmentation_update_map: number
    /**
     * specify the probability values to be used when
     *   decoding segment_id
     * @field 
     */
    segmentation_tree_probs: Uint8Array
    /**
     * specify the probability values to be used when
     *    decoding seg_id_predicted
     * @field 
     */
    segmentation_pred_prob: Uint8Array
    /**
     * equal to 1 indicates that the updates to
     *   the segmentation map are coded relative to the existing segmentation map
     * @field 
     */
    segmentation_temporal_update: number
    /**
     * equal to 1 indicates that new parameters are
     *   about to be specified for each segment
     * @field 
     */
    segmentation_update_data: number
    /**
     * equal to 0 indicates that the segmentation
     *   parameters represent adjustments relative to the standard values.
     *   equal to 1 indicates that the segmentation parameters represent the actual
     *   values to be used
     * @field 
     */
    segmentation_abs_or_delta_update: number
    /**
     * indicates whether feature is enabled or not
     * @field 
     */
    feature_enabled: Uint8Array
    /**
     * segmentation feature data
     * @field 
     */
    feature_data: number[]
}

/**
 * See "6.2.11 Segmentation params syntax" and
 * "7.2.10 Segmentation params syntax". When `segmentation_update_data` is equal
 * to zero, parser will fill `feature_enabled` and by `feature_data`
 * using previously parsed values.
 * @record 
 */
export class Vp9SegmentationParams {

    // Own properties of GstCodecs-1.0.GstCodecs.Vp9SegmentationParams

    static name: string
}

export interface Vp9StatefulParser {

    // Own fields of GstCodecs-1.0.GstCodecs.Vp9StatefulParser

    reference: any[]

    // Owm methods of GstCodecs-1.0.GstCodecs.Vp9StatefulParser

    /**
     * Frees `parser`.
     */
    free(): void
}

/**
 * This object is used to parse VP9 bitstream header.
 * @record 
 */
export class Vp9StatefulParser {

    // Own properties of GstCodecs-1.0.GstCodecs.Vp9StatefulParser

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END