/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

import '@girs/gjs';

// Module dependencies
import type GstVideo from '@girs/gstvideo-1.0';
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GstCodecs {
    /**
     * GstCodecs-1.0
     */

    /**
     * @gir-type Enum
     */
    export namespace H264DecoderCompliance {
        export const $gtype: GObject.GType<H264DecoderCompliance>;
    }

    /**
     * @gir-type Enum
     * @since 1.20
     */
    enum H264DecoderCompliance {
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

    /**
     * @gir-type Enum
     * @since 1.20
     */
    enum H264DpbBumpMode {
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

    /**
     * @gir-type Enum
     */
    enum H264PictureField {
        FRAME,
        TOP_FIELD,
        BOTTOM_FIELD,
    }

    /**
     * @gir-type Enum
     * @since 1.20
     */
    enum H264PictureReference {
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
     * @gir-type Enum
     * @since 1.20
     */
    enum Vp9ReferenceMode {
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
     * @gir-type Enum
     * @since 1.20
     */
    enum Vp9TxMode {
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
     * @gir-type Enum
     * @since 1.20
     */
    enum Vp9TxSize {
        /**
         * 4x4
         */
        '4X4',
        /**
         * 8x8
         */
        '8X8',
        /**
         * 16x16
         */
        '16X16',
        /**
         * 32x32
         */
        '32X32',
    }

    const H264_DPB_MAX_SIZE: number;
    const H265_DPB_MAX_SIZE: number;
    /**
     * Number of contexts when decoding intra_mode
     * @since 1.20
     */
    const VP9_BLOCK_SIZE_GROUPS: number;
    /**
     * Number of values for mv_classO_bit
     * @since 1.20
     */
    const VP9_CLASS0_SIZE: number;
    /**
     * Number of contexts for comp_mode
     * @since 1.20
     */
    const VP9_COMP_MODE_CONTEXTS: number;
    /**
     * Number of contexts for interp_filter
     * @since 1.20
     */
    const VP9_INTERP_FILTER_CONTEXTS: number;
    /**
     * Number of values for inter_mode
     * @since 1.20
     */
    const VP9_INTER_MODES: number;
    /**
     * Number of contexts for inter_mode
     * @since 1.20
     */
    const VP9_INTER_MODE_CONTEXTS: number;
    /**
     * Number of values for intra_mode
     * @since 1.20
     */
    const VP9_INTRA_MODES: number;
    /**
     * Number of contexts for interp_filter
     * @since 1.20
     */
    const VP9_IS_INTER_CONTEXTS: number;
    /**
     * Number of values for mv_class
     * @since 1.20
     */
    const VP9_MV_CLASSES: number;
    /**
     * Number of values that can be decoded for mv_fr
     * @since 1.20
     */
    const VP9_MV_FR_SIZE: number;
    /**
     * Number of values for partition
     * @since 1.20
     */
    const VP9_MV_JOINTS: number;
    /**
     * Maximum number of bits for decoding motion vectors
     * @since 1.20
     */
    const VP9_MV_OFFSET_BITS: number;
    /**
     * Number of contexts when decoding partition
     * @since 1.20
     */
    const VP9_PARTITION_CONTEXTS: number;
    /**
     * Number of values for partition
     * @since 1.20
     */
    const VP9_PARTITION_TYPES: number;
    /**
     * Number of contexts for single_ref and comp_ref
     * @since 1.20
     */
    const VP9_REF_CONTEXTS: number;
    /**
     * Index for loop filter segment feature
     * @since 1.20
     */
    const VP9_SEG_LVL_ALT_L: number;
    /**
     * Index for quantizer segment feature
     * @since 1.20
     */
    const VP9_SEG_LVL_ALT_Q: number;
    /**
     * Number of segment features
     * @since 1.20
     */
    const VP9_SEG_LVL_MAX: number;
    /**
     * Index for reference frame segment feature
     * @since 1.20
     */
    const VP9_SEG_LVL_REF_FRAME: number;
    /**
     * Index for skip segment feature
     * @since 1.20
     */
    const VP9_SEG_SEG_LVL_SKIP: number;
    /**
     * Number of contexts for decoding skip
     * @since 1.20
     */
    const VP9_SKIP_CONTEXTS: number;
    /**
     * Number of contexts for interp_filter
     * @since 1.20
     */
    const VP9_SWITCHABLE_FILTERS: number;
    /**
     * Number of values for tx_mode
     * @since 1.20
     */
    const VP9_TX_MODES: number;
    /**
     * Number of values for tx_size
     * @since 1.20
     */
    const VP9_TX_SIZES: number;
    /**
     * Number of contexts for transform size
     * @since 1.20
     */
    const VP9_TX_SIZE_CONTEXTS: number;
    /**
     * An implementation of "ac_q" function specified in
     * "8.6.1 Dequantization functions"
     * @param qindex the quantizer index
     * @param delta_q_ac a delta_q_ac value
     * @param bit_depth coded bit depth
     * @returns the quantizer value for the ac coefficient
     * @since 1.20
     */
    function vp9_get_ac_quant(qindex: number, delta_q_ac: number, bit_depth: number): number;
    /**
     * An implementation of "dc_q" function specified in
     * "8.6.1 Dequantization functions"
     * @param qindex the quantizer index
     * @param delta_q_dc a delta_q_dc value
     * @param bit_depth coded bit depth
     * @returns the quantizer value for the dc coefficient
     * @since 1.20
     */
    function vp9_get_dc_quant(qindex: number, delta_q_dc: number, bit_depth: number): number;
    /**
     * An implementation of "get_qindex" function specfied in
     * "8.6.1 Dequantization functions"
     * @param segmentation_params a {@link GstCodecs.Vp9SegmentationParams}
     * @param quantization_params a {@link GstCodecs.Vp9QuantizationParams}
     * @param segment_id a segment id
     * @returns the quantizer index
     * @since 1.20
     */
    function vp9_get_qindex(
        segmentation_params: Vp9SegmentationParams,
        quantization_params: Vp9QuantizationParams,
        segment_id: number,
    ): number;
    /**
     * An implementation of "seg_feature_active" function specified in
     * "6.4.9 Segmentation feature active syntax"
     * @param params a {@link GstCodecs.Vp9SegmentationParams}
     * @param segment_id a segment id
     * @param feature a segmentation feature
     * @returns `true` if feature is active
     * @since 1.20
     */
    function vp9_seg_feature_active(params: Vp9SegmentationParams, segment_id: number, feature: number): boolean;
    namespace AV1Decoder {
        // Signal signatures
        interface SignalSignatures extends GstVideo.VideoDecoder.SignalSignatures {
            'notify::automatic-request-sync-point-flags': (pspec: GObject.ParamSpec) => void;
            'notify::automatic-request-sync-points': (pspec: GObject.ParamSpec) => void;
            'notify::discard-corrupted-frames': (pspec: GObject.ParamSpec) => void;
            'notify::max-errors': (pspec: GObject.ParamSpec) => void;
            'notify::min-force-key-unit-interval': (pspec: GObject.ParamSpec) => void;
            'notify::qos': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GstVideo.VideoDecoder.ConstructorProps {}
    }

    /**
     * The opaque {@link GstCodecs.AV1Decoder} data structure.
     * @gir-type Class
     * @since 1.20
     */
    abstract class AV1Decoder extends GstVideo.VideoDecoder {
        static $gtype: GObject.GType<AV1Decoder>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AV1Decoder.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AV1Decoder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof AV1Decoder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AV1Decoder.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof AV1Decoder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AV1Decoder.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof AV1Decoder.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AV1Decoder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Provides the tile data with tile group header and required raw
         * bitstream for subclass to decode it.
         * @param picture a {@link GstCodecs.AV1Picture}
         * @param tile a {@link GstCodecs.AV1Tile}
         * @virtual
         */
        vfunc_decode_tile(picture: AV1Picture, tile: AV1Tile): Gst.FlowReturn;
        /**
         * Called when need to duplicate an existing {@link GstCodecs.AV1Picture}. As
         * duplicated key-frame will populate the DPB, this virtual
         * function is not optional.
         * @param frame the current {@link GstVideo.VideoCodecFrame}
         * @param picture a {@link GstCodecs.AV1Picture}
         * @virtual
         */
        vfunc_duplicate_picture(frame: GstVideo.VideoCodecFrame, picture: AV1Picture): AV1Picture;
        /**
         * Optional. Called per one {@link GstCodecs.AV1Picture} to notify subclass to finish
         * decoding process for the {@link GstCodecs.AV1Picture}
         * @param picture a {@link GstCodecs.AV1Picture}
         * @virtual
         */
        vfunc_end_picture(picture: AV1Picture): Gst.FlowReturn;
        /**
         * Optional. Called by baseclass to query whether delaying output is
         * preferred by subclass or not.
         * @param live whether upstream is live or not
         * @virtual
         */
        vfunc_get_preferred_output_delay(live: boolean): number;
        /**
         * Optional. Called whenever new {@link GstCodecs.AV1Picture} is created.
         * Subclass can set implementation specific user data
         * on the {@link GstCodecs.AV1Picture} via `gst_av1_picture_set_user_data()`
         * @param frame a {@link GstVideo.VideoCodecFrame}
         * @param picture a {@link GstCodecs.AV1Picture}
         * @virtual
         */
        vfunc_new_picture(frame: GstVideo.VideoCodecFrame, picture: AV1Picture): Gst.FlowReturn;
        /**
         * Called with a {@link GstCodecs.AV1Picture} which is required to be outputted.
         * The {@link GstVideo.VideoCodecFrame} must be consumed by subclass.
         * @param frame a {@link GstVideo.VideoCodecFrame}
         * @param picture a {@link GstCodecs.AV1Picture}
         * @virtual
         */
        vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: AV1Picture): Gst.FlowReturn;
        /**
         * Optional. Called per one {@link GstCodecs.AV1Picture} to notify subclass to prepare
         * decoding process for the {@link GstCodecs.AV1Picture}
         * @param picture a {@link GstCodecs.AV1Picture}
         * @param dpb a {@link GstCodecs.AV1Dpb}
         * @virtual
         */
        vfunc_start_picture(picture: AV1Picture, dpb: AV1Dpb): Gst.FlowReturn;
    }

    namespace H264Decoder {
        // Signal signatures
        interface SignalSignatures extends GstVideo.VideoDecoder.SignalSignatures {
            'notify::compliance': (pspec: GObject.ParamSpec) => void;
            'notify::automatic-request-sync-point-flags': (pspec: GObject.ParamSpec) => void;
            'notify::automatic-request-sync-points': (pspec: GObject.ParamSpec) => void;
            'notify::discard-corrupted-frames': (pspec: GObject.ParamSpec) => void;
            'notify::max-errors': (pspec: GObject.ParamSpec) => void;
            'notify::min-force-key-unit-interval': (pspec: GObject.ParamSpec) => void;
            'notify::qos': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GstVideo.VideoDecoder.ConstructorProps {
            compliance: H264DecoderCompliance;
        }
    }

    /**
     * The opaque {@link GstCodecs.H264Decoder} data structure.
     * @gir-type Class
     */
    abstract class H264Decoder extends GstVideo.VideoDecoder {
        static $gtype: GObject.GType<H264Decoder>;

        // Properties

        /**
         * The compliance controls the behavior of the decoder to handle some
         * subtle cases and contexts, such as the low-latency DPB bumping or
         * mapping the baseline profile as the constrained-baseline profile,
         * etc.
         * @since 1.20
         */
        get compliance(): H264DecoderCompliance;
        set compliance(val: H264DecoderCompliance);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: H264Decoder.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<H264Decoder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof H264Decoder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, H264Decoder.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof H264Decoder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, H264Decoder.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof H264Decoder.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<H264Decoder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Provides per slice data with parsed slice header and required raw bitstream
         * for subclass to decode it. If `gst_h264_decoder_set_process_ref_pic_lists()`
         * is called with `true` by the subclass, `ref_pic_list0` and `ref_pic_list1`
         * are non-`null`.
         * In case of interlaced stream, `ref_pic_list0` and `ref_pic_list1` will
         * contain only the first field of complementary reference field pair
         * if currently being decoded picture is a frame picture. Subclasses might
         * need to retrive the other field (i.e., the second field) of the picture
         * if needed.
         * @param picture a {@link GstCodecs.H264Picture}
         * @param slice a {@link GstCodecs.H264Slice}
         * @param ref_pic_list0 an array of {@link GstCodecs.H264Picture} pointers
         * @param ref_pic_list1 an array of {@link GstCodecs.H264Picture} pointers
         * @virtual
         */
        vfunc_decode_slice(
            picture: H264Picture,
            slice: H264Slice,
            ref_pic_list0: H264Picture[],
            ref_pic_list1: H264Picture[],
        ): Gst.FlowReturn;
        /**
         * Optional. Called per one {@link GstCodecs.H264Picture} to notify subclass to finish
         * decoding process for the {@link GstCodecs.H264Picture}
         * @param picture a {@link GstCodecs.H264Picture}
         * @virtual
         */
        vfunc_end_picture(picture: H264Picture): Gst.FlowReturn;
        /**
         * Optional. Called by baseclass to query whether delaying output is
         * preferred by subclass or not.
         * @param live whether upstream is live or not
         * @virtual
         */
        vfunc_get_preferred_output_delay(live: boolean): number;
        /**
         * Called when a new field picture is created for interlaced field picture.
         * Subclass can attach implementation specific user data on `second_field` via
         * `gst_h264_picture_set_user_data()`
         * @param first_field the first field {@link GstCodecs.H264Picture} already decoded
         * @param second_field a {@link GstCodecs.H264Picture} for the second field
         * @virtual
         */
        vfunc_new_field_picture(first_field: H264Picture, second_field: H264Picture): Gst.FlowReturn;
        /**
         * Optional. Called whenever new {@link GstCodecs.H264Picture} is created.
         * Subclass can set implementation specific user data
         * on the {@link GstCodecs.H264Picture} via `gst_h264_picture_set_user_data()`
         * @param frame a {@link GstVideo.VideoCodecFrame}
         * @param picture a {@link GstCodecs.H264Picture}
         * @virtual
         */
        vfunc_new_picture(frame: GstVideo.VideoCodecFrame, picture: H264Picture): Gst.FlowReturn;
        /**
         * Called with a {@link GstCodecs.H264Picture} which is required to be outputted.
         * The {@link GstVideo.VideoCodecFrame} must be consumed by subclass.
         * @param frame a {@link GstVideo.VideoCodecFrame}
         * @param picture a {@link GstCodecs.H264Picture}
         * @virtual
         */
        vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: H264Picture): Gst.FlowReturn;
        /**
         * Optional. Called per one {@link GstCodecs.H264Picture} to notify subclass to prepare
         * decoding process for the {@link GstCodecs.H264Picture}
         * @param picture a {@link GstCodecs.H264Picture}
         * @param slice a {@link GstCodecs.H264Slice}
         * @param dpb a {@link GstCodecs.H264Dpb}
         * @virtual
         */
        vfunc_start_picture(picture: H264Picture, slice: H264Slice, dpb: H264Dpb): Gst.FlowReturn;

        // Methods

        /**
         * Retrive DPB and return a {@link GstCodecs.H264Picture} corresponding to
         * the `system_frame_number`
         * @param system_frame_number a target system frame number of {@link GstCodecs.H264Picture}
         * @returns a {@link GstCodecs.H264Picture} if successful, or `null` otherwise
         */
        get_picture(system_frame_number: number): H264Picture | null;
        /**
         * Called to en/disable reference picture modification process.
         * @param process whether subclass is requiring reference picture modification process
         */
        set_process_ref_pic_lists(process: boolean): void;
    }

    namespace H265Decoder {
        // Signal signatures
        interface SignalSignatures extends GstVideo.VideoDecoder.SignalSignatures {
            'notify::automatic-request-sync-point-flags': (pspec: GObject.ParamSpec) => void;
            'notify::automatic-request-sync-points': (pspec: GObject.ParamSpec) => void;
            'notify::discard-corrupted-frames': (pspec: GObject.ParamSpec) => void;
            'notify::max-errors': (pspec: GObject.ParamSpec) => void;
            'notify::min-force-key-unit-interval': (pspec: GObject.ParamSpec) => void;
            'notify::qos': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GstVideo.VideoDecoder.ConstructorProps {}
    }

    /**
     * The opaque {@link GstCodecs.H265Decoder} data structure.
     * @gir-type Class
     */
    abstract class H265Decoder extends GstVideo.VideoDecoder {
        static $gtype: GObject.GType<H265Decoder>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: H265Decoder.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<H265Decoder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof H265Decoder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, H265Decoder.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof H265Decoder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, H265Decoder.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof H265Decoder.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<H265Decoder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Provides per slice data with parsed slice header and required raw bitstream
         * for subclass to decode it. If `gst_h265_decoder_set_process_ref_pic_lists()`
         * is called with `true` by the subclass, `ref_pic_list0` and `ref_pic_list1`
         * are non-`null`.
         * @param picture a {@link GstCodecs.H265Picture}
         * @param slice a {@link GstCodecs.H265Slice}
         * @param ref_pic_list0 an array of {@link GstCodecs.H265Picture} pointers
         * @param ref_pic_list1 an array of {@link GstCodecs.H265Picture} pointers
         * @virtual
         */
        vfunc_decode_slice(
            picture: H265Picture,
            slice: H265Slice,
            ref_pic_list0: H265Picture[],
            ref_pic_list1: H265Picture[],
        ): Gst.FlowReturn;
        /**
         * Optional. Called per one {@link GstCodecs.H265Picture} to notify subclass to finish
         * decoding process for the {@link GstCodecs.H265Picture}
         * @param picture a {@link GstCodecs.H265Picture}
         * @virtual
         */
        vfunc_end_picture(picture: H265Picture): Gst.FlowReturn;
        /**
         * Optional. Called by baseclass to query whether delaying output is
         * preferred by subclass or not.
         * @param live whether upstream is live or not
         * @virtual
         */
        vfunc_get_preferred_output_delay(live: boolean): number;
        /**
         * Optional. Called whenever new {@link GstCodecs.H265Picture} is created.
         * Subclass can set implementation specific user data
         * on the {@link GstCodecs.H265Picture} via `gst_h265_picture_set_user_data()`
         * @param frame a {@link GstVideo.VideoCodecFrame}
         * @param picture a {@link GstCodecs.H265Picture}
         * @virtual
         */
        vfunc_new_picture(frame: GstVideo.VideoCodecFrame, picture: H265Picture): Gst.FlowReturn;
        /**
         * @param frame
         * @param picture
         * @virtual
         */
        vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: H265Picture): Gst.FlowReturn;
        /**
         * Optional. Called per one {@link GstCodecs.H265Picture} to notify subclass to prepare
         * decoding process for the {@link GstCodecs.H265Picture}
         * @param picture a {@link GstCodecs.H265Picture}
         * @param slice a {@link GstCodecs.H265Slice}
         * @param dpb a {@link GstCodecs.H265Dpb}
         * @virtual
         */
        vfunc_start_picture(picture: H265Picture, slice: H265Slice, dpb: H265Dpb): Gst.FlowReturn;

        // Methods

        /**
         * Retrive DPB and return a {@link GstCodecs.H265Picture} corresponding to
         * the `system_frame_number`
         * @param system_frame_number a target system frame number of {@link GstCodecs.H265Picture}
         * @returns a {@link GstCodecs.H265Picture} if successful, or `null` otherwise
         */
        get_picture(system_frame_number: number): H265Picture | null;
        /**
         * Called to en/disable reference picture modification process.
         * @param process whether subclass is requiring reference picture modification process
         */
        set_process_ref_pic_lists(process: boolean): void;
    }

    namespace Mpeg2Decoder {
        // Signal signatures
        interface SignalSignatures extends GstVideo.VideoDecoder.SignalSignatures {
            'notify::automatic-request-sync-point-flags': (pspec: GObject.ParamSpec) => void;
            'notify::automatic-request-sync-points': (pspec: GObject.ParamSpec) => void;
            'notify::discard-corrupted-frames': (pspec: GObject.ParamSpec) => void;
            'notify::max-errors': (pspec: GObject.ParamSpec) => void;
            'notify::min-force-key-unit-interval': (pspec: GObject.ParamSpec) => void;
            'notify::qos': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GstVideo.VideoDecoder.ConstructorProps {}
    }

    /**
     * The opaque {@link GstCodecs.Mpeg2Decoder} data structure.
     * @gir-type Class
     * @since 1.20
     */
    abstract class Mpeg2Decoder extends GstVideo.VideoDecoder {
        static $gtype: GObject.GType<Mpeg2Decoder>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Mpeg2Decoder.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Mpeg2Decoder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Mpeg2Decoder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Mpeg2Decoder.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Mpeg2Decoder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Mpeg2Decoder.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Mpeg2Decoder.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Mpeg2Decoder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Provides per slice data with parsed slice header and required raw bitstream
         * for subclass to decode it.
         * @param picture a {@link GstCodecs.Mpeg2Picture}
         * @param slice a {@link GstCodecs.Mpeg2Slice}
         * @virtual
         */
        vfunc_decode_slice(picture: Mpeg2Picture, slice: Mpeg2Slice): Gst.FlowReturn;
        /**
         * Optional. Called per one {@link GstCodecs.Mpeg2Picture} to notify subclass to finish
         * decoding process for the {@link GstCodecs.Mpeg2Picture}
         * @param picture a {@link GstCodecs.Mpeg2Picture}
         * @virtual
         */
        vfunc_end_picture(picture: Mpeg2Picture): Gst.FlowReturn;
        /**
         * Optional. Called by baseclass to query whether delaying output is
         * preferred by subclass or not.
         * @param is_live whether upstream is live or not
         * @virtual
         */
        vfunc_get_preferred_output_delay(is_live: boolean): number;
        /**
         * Called when a new field picture is created for interlaced field picture.
         * Subclass can attach implementation specific user data on `second_field` via
         * `gst_mpeg2_picture_set_user_data()`
         * @param first_field the first field {@link GstCodecs.Mpeg2Picture} already decoded
         * @param second_field a {@link GstCodecs.Mpeg2Picture} for the second field
         * @virtual
         */
        vfunc_new_field_picture(first_field: Mpeg2Picture, second_field: Mpeg2Picture): Gst.FlowReturn;
        /**
         * Optional. Called whenever new {@link GstCodecs.Mpeg2Picture} is created.
         * Subclass can set implementation specific user data
         * on the {@link GstCodecs.Mpeg2Picture} via `gst_mpeg2_picture_set_user_data()`
         * @param frame a {@link GstVideo.VideoCodecFrame}
         * @param picture a {@link GstCodecs.Mpeg2Picture}
         * @virtual
         */
        vfunc_new_picture(frame: GstVideo.VideoCodecFrame, picture: Mpeg2Picture): Gst.FlowReturn;
        /**
         * Called with a {@link GstCodecs.Mpeg2Picture} which is required to be outputted.
         * The {@link GstVideo.VideoCodecFrame} must be consumed by subclass.
         * @param frame a {@link GstVideo.VideoCodecFrame}
         * @param picture a {@link GstCodecs.Mpeg2Picture}
         * @virtual
         */
        vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: Mpeg2Picture): Gst.FlowReturn;
        /**
         * Optional. Called per one {@link GstCodecs.Mpeg2Picture} to notify subclass to prepare
         * decoding process for the {@link GstCodecs.Mpeg2Picture}
         * @param picture a {@link GstCodecs.Mpeg2Picture}
         * @param slice a {@link GstCodecs.Mpeg2Slice}
         * @param prev_picture a {@link GstCodecs.Mpeg2Picture}
         * @param next_picture a {@link GstCodecs.Mpeg2Picture}
         * @virtual
         */
        vfunc_start_picture(
            picture: Mpeg2Picture,
            slice: Mpeg2Slice,
            prev_picture: Mpeg2Picture,
            next_picture: Mpeg2Picture,
        ): Gst.FlowReturn;
    }

    namespace Vp8Decoder {
        // Signal signatures
        interface SignalSignatures extends GstVideo.VideoDecoder.SignalSignatures {
            'notify::automatic-request-sync-point-flags': (pspec: GObject.ParamSpec) => void;
            'notify::automatic-request-sync-points': (pspec: GObject.ParamSpec) => void;
            'notify::discard-corrupted-frames': (pspec: GObject.ParamSpec) => void;
            'notify::max-errors': (pspec: GObject.ParamSpec) => void;
            'notify::min-force-key-unit-interval': (pspec: GObject.ParamSpec) => void;
            'notify::qos': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GstVideo.VideoDecoder.ConstructorProps {}
    }

    /**
     * The opaque {@link GstCodecs.Vp8Decoder} data structure.
     * @gir-type Class
     */
    abstract class Vp8Decoder extends GstVideo.VideoDecoder {
        static $gtype: GObject.GType<Vp8Decoder>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Vp8Decoder.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Vp8Decoder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Vp8Decoder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Vp8Decoder.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Vp8Decoder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Vp8Decoder.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Vp8Decoder.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Vp8Decoder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param picture
         * @virtual
         */
        vfunc_end_picture(picture: Vp8Picture): Gst.FlowReturn;
        /**
         * Optional. Called by baseclass to query whether delaying output is
         * preferred by subclass or not.
         * @param is_live whether upstream is live or not
         * @virtual
         */
        vfunc_get_preferred_output_delay(is_live: boolean): number;
        /**
         * @param frame
         * @param picture
         * @virtual
         */
        vfunc_new_picture(frame: GstVideo.VideoCodecFrame, picture: Vp8Picture): Gst.FlowReturn;
        /**
         * @param frame
         * @param picture
         * @virtual
         */
        vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: Vp8Picture): Gst.FlowReturn;
        /**
         * @param picture
         * @virtual
         */
        vfunc_start_picture(picture: Vp8Picture): Gst.FlowReturn;
    }

    namespace Vp9Decoder {
        // Signal signatures
        interface SignalSignatures extends GstVideo.VideoDecoder.SignalSignatures {
            'notify::automatic-request-sync-point-flags': (pspec: GObject.ParamSpec) => void;
            'notify::automatic-request-sync-points': (pspec: GObject.ParamSpec) => void;
            'notify::discard-corrupted-frames': (pspec: GObject.ParamSpec) => void;
            'notify::max-errors': (pspec: GObject.ParamSpec) => void;
            'notify::min-force-key-unit-interval': (pspec: GObject.ParamSpec) => void;
            'notify::qos': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::parent': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GstVideo.VideoDecoder.ConstructorProps {}
    }

    /**
     * The opaque {@link GstCodecs.Vp9Decoder} data structure.
     * @gir-type Class
     */
    abstract class Vp9Decoder extends GstVideo.VideoDecoder {
        static $gtype: GObject.GType<Vp9Decoder>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Vp9Decoder.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Vp9Decoder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Vp9Decoder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Vp9Decoder.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Vp9Decoder.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Vp9Decoder.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Vp9Decoder.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Vp9Decoder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Called to notify decoding for subclass to decoder given `picture` with
         * given `dpb`
         * @param picture a {@link GstCodecs.Vp9Picture} to decoder
         * @param dpb a {@link GstCodecs.Vp9Dpb}
         * @virtual
         */
        vfunc_decode_picture(picture: Vp9Picture, dpb: Vp9Dpb): Gst.FlowReturn;
        /**
         * Optional. Called to duplicate `picture` when show_existing_frame flag is set
         * in the parsed vp9 frame header. Returned {@link GstCodecs.Vp9Picture} from this method
         * should hold already decoded picture data corresponding to the `picture`,
         * since the returned {@link GstCodecs.Vp9Picture} from this method will be passed to
         * the output_picture method immediately without additional decoding process.
         *
         * If this method is not implemented by subclass, baseclass will drop
         * current {@link GstVideo.VideoCodecFrame} without additional processing for the current
         * frame.
         * @param frame a {@link GstVideo.VideoCodecFrame}
         * @param picture a {@link GstCodecs.Vp9Picture} to be duplicated
         * @virtual
         */
        vfunc_duplicate_picture(frame: GstVideo.VideoCodecFrame, picture: Vp9Picture): Vp9Picture | null;
        /**
         * Optional. Called per one {@link GstCodecs.Vp9Picture} to notify subclass to finish
         * decoding process for the {@link GstCodecs.Vp9Picture}
         * @param picture a {@link GstCodecs.Vp9Picture}
         * @virtual
         */
        vfunc_end_picture(picture: Vp9Picture): Gst.FlowReturn;
        /**
         * Optional. Retrieve the preferred output delay from child classes.
         * controls how many frames to delay when calling
         * GstVp9DecoderClass::output_picture
         * @param is_live whether upstream is live or not
         * @virtual
         */
        vfunc_get_preferred_output_delay(is_live: boolean): number;
        /**
         * Optional. Called whenever new {@link GstCodecs.Vp9Picture} is created.
         * Subclass can set implementation specific user data on the {@link GstCodecs.Vp9Picture}
         * via `gst_vp9_picture_set_user_data()`
         * @param frame a {@link GstVideo.VideoCodecFrame}
         * @param picture a {@link GstCodecs.Vp9Picture}
         * @virtual
         */
        vfunc_new_picture(frame: GstVideo.VideoCodecFrame, picture: Vp9Picture): Gst.FlowReturn;
        /**
         * Notifies subclass of video sequence update such as resolution, bitdepth,
         * profile.
         * @param frame_hdr a {@link GstCodecs.Vp9FrameHeader}
         * @param max_dpb_size the size of dpb including preferred output delay   by subclass reported via get_preferred_output_delay method.
         * @virtual
         */
        vfunc_new_sequence(frame_hdr: Vp9FrameHeader, max_dpb_size: number): Gst.FlowReturn;
        /**
         * Called to notify `picture` is ready to be outputted.
         * @param frame a {@link GstVideo.VideoCodecFrame}
         * @param picture a {@link GstCodecs.Vp9Picture}
         * @virtual
         */
        vfunc_output_picture(frame: GstVideo.VideoCodecFrame, picture: Vp9Picture): Gst.FlowReturn;
        /**
         * Optional. Called to notify subclass to prepare decoding process for
         * `picture`
         * @param picture a {@link GstCodecs.Vp9Picture}
         * @virtual
         */
        vfunc_start_picture(picture: Vp9Picture): Gst.FlowReturn;

        // Methods

        /**
         * Called to set non-keyframe format change awareness
         * @param support whether subclass can support non-keyframe format change
         */
        set_non_keyframe_format_change_support(support: boolean): void;
    }

    /**
     * @gir-type Alias
     */
    type AV1DecoderClass = typeof AV1Decoder;
    /**
     * @gir-type Struct
     */
    abstract class AV1DecoderPrivate {
        static $gtype: GObject.GType<AV1DecoderPrivate>;
    }

    /**
     * @gir-type Struct
     * @since 1.20
     */
    class AV1Dpb {
        static $gtype: GObject.GType<AV1Dpb>;

        // Methods

        /**
         * Store the `picture`
         * @param picture a {@link GstCodecs.AV1Picture}
         */
        add(picture: AV1Picture): void;
        /**
         * Clear all stored {@link GstCodecs.AV1Picture}
         */
        clear(): void;
        /**
         * Free the `dpb`
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     * @since 1.20
     */
    class AV1Picture {
        static $gtype: GObject.GType<AV1Picture>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): AV1Picture;

        // Methods

        /**
         * Gets private data set on the picture via
         * `gst_av1_picture_set_user_data()` previously.
         * @returns The previously set user_data
         */
        get_user_data(): any | null;
        /**
         * Sets `user_data` on the picture and the {@link GLib.DestroyNotify} that will be called when
         * the picture is freed.
         *
         * If a `user_data` was previously set, then the previous set `notify` will be called
         * before the `user_data` is replaced.
         * @param user_data private data
         */
        set_user_data(user_data?: any | null): void;
    }

    /**
     * @gir-type Struct
     * @since 1.20
     */
    class AV1Tile {
        static $gtype: GObject.GType<AV1Tile>;

        // Constructors

        constructor(
            properties?: Partial<{
                tile_group: unknown;
                obu: unknown;
            }>,
        );
    }

    /**
     * @gir-type Alias
     */
    type H264DecoderClass = typeof H264Decoder;
    /**
     * @gir-type Struct
     */
    abstract class H264DecoderPrivate {
        static $gtype: GObject.GType<H264DecoderPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class H264Dpb {
        static $gtype: GObject.GType<H264Dpb>;

        // Methods

        /**
         * Store the `picture`
         * @param picture a {@link GstCodecs.H264Picture}
         */
        add(picture: H264Picture): void;
        /**
         * Perform bumping process as defined in C.4.5.3 "Bumping" process.
         * If `drain` is `true`, `dpb` will remove a {@link GstCodecs.H264Picture} from internal array
         * so that returned {@link GstCodecs.H264Picture} could hold the last reference of it
         * @param drain whether draining or not
         * @returns a {@link GstCodecs.H264Picture} which is needed to be outputted
         */
        bump(drain: boolean): H264Picture | null;
        /**
         * Clear all stored {@link GstCodecs.H264Picture}
         */
        clear(): void;
        /**
         * Delete already outputted and not referenced all pictures from dpb
         */
        delete_unused(): void;
        /**
         * Free the `dpb`
         */
        free(): void;
        /**
         * @returns `true` if `dpb` is configured for interlaced stream
         */
        get_interlaced(): boolean;
        /**
         * Find a long term reference picture which has matching long term picture number
         * @param long_term_pic_num a long term picture number
         * @returns a {@link GstCodecs.H264Picture}
         */
        get_long_ref_by_long_term_pic_num(long_term_pic_num: number): H264Picture | null;
        /**
         * Find a short term reference picture which has the lowest frame_num_wrap
         * @returns a {@link GstCodecs.H264Picture}
         */
        get_lowest_frame_num_short_ref(): H264Picture | null;
        /**
         * @returns the number of maximum frames
         */
        get_max_num_frames(): number;
        /**
         * @returns Maximum number of reorder frames
         */
        get_max_num_reorder_frames(): number;
        /**
         * @param system_frame_number
         * @returns the picture identified with the specified `system_frame_number`, or `null` if DPB does not contain a {@link GstCodecs.H264Picture} corresponding to the `system_frame_number`
         */
        get_picture(system_frame_number: number): H264Picture | null;
        /**
         * @returns a {@link GLib.Array} of   {@link GstCodecs.H264Picture} stored in `dpb`
         */
        get_pictures_all(): H264Picture[];
        /**
         * Retrieve all long-term reference pictures from `dpb`. The picture will be
         * appended to the array.
         * @param include_second_field `true` if the second field pictures need to be included
         */
        get_pictures_long_term_ref(include_second_field: boolean): H264Picture[];
        /**
         * Retrieve all short-term reference pictures from `dpb`. The picture will be
         * appended to the array.
         * @param include_non_existing `true` if non-existing pictures need to be included
         * @param include_second_field `true` if the second field pictures need to be included
         */
        get_pictures_short_term_ref(include_non_existing: boolean, include_second_field: boolean): H264Picture[];
        /**
         * Find a short term reference picture which has matching picture number
         * @param pic_num a picture number
         * @returns a {@link GstCodecs.H264Picture}
         */
        get_short_ref_by_pic_num(pic_num: number): H264Picture | null;
        /**
         * @returns the length of stored dpb array
         */
        get_size(): number;
        /**
         * @returns `true` if `dpb` still has empty frame buffers.
         */
        has_empty_frame_buffer(): boolean;
        /**
         * Mark all pictures are not referenced
         */
        mark_all_non_ref(): void;
        /**
         * @param to_insert the current {@link GstCodecs.H264Picture} to insert to dpb.
         * @param latency_mode The required {@link GstCodecs.H264DpbBumpMode} for bumping.
         * @returns `true` if bumping is required
         */
        needs_bump(to_insert: H264Picture, latency_mode: H264DpbBumpMode | null): boolean;
        /**
         * @returns The number of referenced frames
         */
        num_ref_frames(): number;
        /**
         * @param interlaced `true` if interlaced
         */
        set_interlaced(interlaced: boolean): void;
        /**
         * Notify the DPB that `picture` is output directly without storing
         * in the DPB.
         * @param picture a {@link GstCodecs.H264Picture} of the last output.
         */
        set_last_output(picture: H264Picture): void;
        /**
         * Set the number of maximum allowed frames to store
         * @param max_num_frames the maximum number of picture
         */
        set_max_num_frames(max_num_frames: number): void;
        /**
         * @param max_num_reorder_frames the max number of reorder frames, which should not exceed the max size of DPB.
         */
        set_max_num_reorder_frames(max_num_reorder_frames: number): void;
    }

    /**
     * @gir-type Struct
     */
    class H264Picture {
        static $gtype: GObject.GType<H264Picture>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): H264Picture;

        // Methods

        /**
         * Gets private data set on the picture via
         * `gst_h264_picture_set_user_data()` previously.
         * @returns The previously set user_data
         */
        get_user_data(): any | null;
        /**
         * Sets `user_data` on the picture and the {@link GLib.DestroyNotify} that will be called when
         * the picture is freed.
         *
         * If a `user_data` was previously set, then the previous set `notify` will be called
         * before the `user_data` is replaced.
         * @param user_data private data
         */
        set_user_data(user_data?: any | null): void;
    }

    /**
     * @gir-type Struct
     */
    class H264Slice {
        static $gtype: GObject.GType<H264Slice>;

        // Constructors

        constructor(
            properties?: Partial<{
                header: unknown;
                nalu: unknown;
            }>,
        );
    }

    /**
     * @gir-type Alias
     */
    type H265DecoderClass = typeof H265Decoder;
    /**
     * @gir-type Struct
     */
    abstract class H265DecoderPrivate {
        static $gtype: GObject.GType<H265DecoderPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class H265Dpb {
        static $gtype: GObject.GType<H265Dpb>;

        // Methods

        /**
         * Store the `picture` and perform increase pic_latency_cnt as defined in
         * "C.5.2.3 Additional bumping" process
         * @param picture a {@link GstCodecs.H265Picture}
         */
        add(picture: H265Picture): void;
        /**
         * Perform bumping process as defined in C.5.2.4 "Bumping" process.
         * If `drain` is `true`, `dpb` will remove a {@link GstCodecs.H265Picture} from internal array
         * so that returned {@link GstCodecs.H265Picture} could hold the last reference of it
         * @param drain whether draining or not
         * @returns a {@link GstCodecs.H265Picture} which is needed to be outputted
         */
        bump(drain: boolean): H265Picture | null;
        /**
         * Clear all stored {@link GstCodecs.H265Picture}
         */
        clear(): void;
        /**
         * Delete not needed for output and not referenced all pictures from dpb
         */
        delete_unused(): void;
        /**
         * Free the `dpb`
         */
        free(): void;
        /**
         * Find a long term reference picture which has matching poc
         * @param poc a picture order count
         * @returns a {@link GstCodecs.H265Picture}
         */
        get_long_ref_by_poc(poc: number): H265Picture | null;
        /**
         * @returns the number of maximum pictures
         */
        get_max_num_pics(): number;
        /**
         * @param system_frame_number
         * @returns the picture identified with the specified `system_frame_number`, or `null` if DPB does not contain a {@link GstCodecs.H265Picture} corresponding to the `system_frame_number`
         */
        get_picture(system_frame_number: number): H265Picture | null;
        /**
         * @returns a {@link GLib.Array} of   {@link GstCodecs.H265Picture} stored in `dpb`
         */
        get_pictures_all(): H265Picture[];
        /**
         * Find a short or long term reference picture which has matching poc
         * @param poc a picture order count
         * @returns a {@link GstCodecs.H265Picture}
         */
        get_ref_by_poc(poc: number): H265Picture | null;
        /**
         * Find a short or long term reference picture which has matching poc_lsb
         * @param poc_lsb a picture order count lsb
         * @returns a {@link GstCodecs.H265Picture}
         */
        get_ref_by_poc_lsb(poc_lsb: number): H265Picture | null;
        /**
         * Find a short term reference picture which has matching poc
         * @param poc a picture order count
         * @returns a {@link GstCodecs.H265Picture}
         */
        get_short_ref_by_poc(poc: number): H265Picture | null;
        /**
         * @returns the length of stored dpb array
         */
        get_size(): number;
        /**
         * Mark all pictures are not referenced
         */
        mark_all_non_ref(): void;
        /**
         * @param max_num_reorder_pics sps_max_num_reorder_pics[HighestTid]
         * @param max_latency_increase SpsMaxLatencyPictures[HighestTid]
         * @param max_dec_pic_buffering sps_max_dec_pic_buffering_minus1[HighestTid ] + 1   or zero if this shouldn't be used for bumping decision
         * @returns `true` if bumping is required
         */
        needs_bump(max_num_reorder_pics: number, max_latency_increase: number, max_dec_pic_buffering: number): boolean;
        /**
         * @returns The number of referenced pictures
         */
        num_ref_pictures(): number;
        /**
         * Set the number of maximum allowed pictures to store
         * @param max_num_pics the maximum number of picture
         */
        set_max_num_pics(max_num_pics: number): void;
    }

    /**
     * @gir-type Struct
     */
    class H265Picture {
        static $gtype: GObject.GType<H265Picture>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): H265Picture;

        // Methods

        /**
         * Gets private data set on the picture via
         * `gst_h265_picture_set_user_data()` previously.
         * @returns The previously set user_data
         */
        get_user_data(): any | null;
        /**
         * Sets `user_data` on the picture and the {@link GLib.DestroyNotify} that will be called when
         * the picture is freed.
         *
         * If a `user_data` was previously set, then the previous set `notify` will be called
         * before the `user_data` is replaced.
         * @param user_data private data
         */
        set_user_data(user_data?: any | null): void;
    }

    /**
     * @gir-type Struct
     */
    class H265Slice {
        static $gtype: GObject.GType<H265Slice>;

        // Constructors

        constructor(
            properties?: Partial<{
                header: unknown;
                nalu: unknown;
            }>,
        );
    }

    /**
     * @gir-type Alias
     */
    type Mpeg2DecoderClass = typeof Mpeg2Decoder;
    /**
     * @gir-type Struct
     */
    abstract class Mpeg2DecoderPrivate {
        static $gtype: GObject.GType<Mpeg2DecoderPrivate>;
    }

    /**
     * @gir-type Struct
     * @since 1.20
     */
    abstract class Mpeg2Dpb {
        static $gtype: GObject.GType<Mpeg2Dpb>;

        // Methods

        /**
         * Store the `picture`
         * @param picture a {@link GstCodecs.Mpeg2Picture}
         */
        add(picture: Mpeg2Picture): void;
        /**
         * @returns a {@link GstCodecs.Mpeg2Picture} which is needed to be outputted
         */
        bump(): Mpeg2Picture | null;
        /**
         * Clear all stored {@link GstCodecs.Mpeg2Picture}
         */
        clear(): void;
        /**
         * Free the `dpb`
         */
        free(): void;
        /**
         * Gets the neighbours {@link GstCodecs.Mpeg2Picture} of `picture` in `dpb`.
         * @param picture current {@link GstCodecs.Mpeg2Picture}
         */
        get_neighbours(picture: Mpeg2Picture): [Mpeg2Picture | null, Mpeg2Picture | null];
        /**
         * Checks if `dbp` has a new picture.
         * @returns `TRUE` if `dpb` needs to be bumped; otherwise, `FALSE`
         */
        need_bump(): boolean;
    }

    /**
     * @gir-type Struct
     * @since 1.20
     */
    class Mpeg2Picture {
        static $gtype: GObject.GType<Mpeg2Picture>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): Mpeg2Picture;

        // Methods

        /**
         * Gets private data set on the picture via
         * `gst_mpeg2_picture_set_user_data()` previously.
         * @returns The previously set user_data
         */
        get_user_data(): any | null;
        /**
         * Sets `user_data` on the picture and the {@link GLib.DestroyNotify} that will be called when
         * the picture is freed.
         *
         * If a `user_data` was previously set, then the previous set `notify` will be called
         * before the `user_data` is replaced.
         * @param user_data private data
         */
        set_user_data(user_data?: any | null): void;
    }

    /**
     * @gir-type Struct
     * @since 1.20
     */
    class Mpeg2Slice {
        static $gtype: GObject.GType<Mpeg2Slice>;

        // Constructors

        constructor(properties?: Partial<{}>);
    }

    /**
     * @gir-type Alias
     */
    type Vp8DecoderClass = typeof Vp8Decoder;
    /**
     * @gir-type Struct
     */
    abstract class Vp8DecoderPrivate {
        static $gtype: GObject.GType<Vp8DecoderPrivate>;
    }

    /**
     * @gir-type Struct
     */
    class Vp8Picture {
        static $gtype: GObject.GType<Vp8Picture>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): Vp8Picture;

        // Methods

        /**
         * Gets private data set on the picture via
         * `gst_vp8_picture_set_user_data()` previously.
         * @returns The previously set user_data
         */
        get_user_data(): any | null;
        /**
         * Sets `user_data` on the picture and the {@link GLib.DestroyNotify} that will be called when
         * the picture is freed.
         *
         * If a `user_data` was previously set, then the previous set `notify` will be called
         * before the `user_data` is replaced.
         * @param user_data private data
         */
        set_user_data(user_data?: any | null): void;
    }

    /**
     * @gir-type Alias
     */
    type Vp9DecoderClass = typeof Vp9Decoder;
    /**
     * @gir-type Struct
     */
    abstract class Vp9DecoderPrivate {
        static $gtype: GObject.GType<Vp9DecoderPrivate>;
    }

    /**
     * Stores probabilities updates. This is from the spec
     * and can be used as a binary.
     * @gir-type Struct
     * @since 1.20
     */
    class Vp9DeltaProbabilities {
        static $gtype: GObject.GType<Vp9DeltaProbabilities>;

        // Constructors

        constructor(properties?: Partial<{}>);
    }

    /**
     * @gir-type Struct
     */
    class Vp9Dpb {
        static $gtype: GObject.GType<Vp9Dpb>;

        // Methods

        /**
         * Store the `picture`
         * @param picture a {@link GstCodecs.Vp9Picture}
         */
        add(picture: Vp9Picture): void;
        /**
         * Clear all stored {@link GstCodecs.Vp9Picture}
         */
        clear(): void;
        /**
         * Free the `dpb`
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     * @since 1.20
     */
    class Vp9FrameHeader {
        static $gtype: GObject.GType<Vp9FrameHeader>;

        // Fields

        profile: number;
        bit_depth: number;
        subsampling_x: number;
        subsampling_y: number;
        color_space: number;
        color_range: number;
        show_existing_frame: number;
        frame_to_show_map_idx: number;
        frame_type: number;
        show_frame: number;
        error_resilient_mode: number;
        width: number;
        height: number;
        render_and_frame_size_different: number;
        render_width: number;
        render_height: number;
        intra_only: number;
        reset_frame_context: number;
        refresh_frame_flags: number;
        ref_frame_idx: Uint8Array;
        ref_frame_sign_bias: Uint8Array;
        allow_high_precision_mv: number;
        interpolation_filter: number;
        refresh_frame_context: number;
        frame_parallel_decoding_mode: number;
        frame_context_idx: number;
        loop_filter_params: Vp9LoopFilterParams;
        quantization_params: Vp9QuantizationParams;
        segmentation_params: Vp9SegmentationParams;
        tile_cols_log2: number;
        tile_rows_log2: number;
        header_size_in_bytes: number;
        tx_mode: Vp9TxMode;
        reference_mode: Vp9ReferenceMode;
        lossless_flag: number;
        frame_header_length_in_bytes: number;
    }

    /**
     * Loop filter params. See "6.2.8 Loop filter params syntax" and
     * "7.2.8 Loop filter semantics".
     *
     * If syntax elements for `update_ref_delta`
     * and/or `loop_filter_mode_deltas` are not present in bitstream,
     * parser will fill `loop_filter_ref_deltas` and `loop_filter_mode_deltas` values
     * by using previously parsed values.
     * @gir-type Struct
     * @since 1.20
     */
    class Vp9LoopFilterParams {
        static $gtype: GObject.GType<Vp9LoopFilterParams>;

        // Fields

        loop_filter_level: number;
        loop_filter_sharpness: number;
        loop_filter_delta_enabled: number;
        loop_filter_delta_update: number;
        update_ref_delta: Uint8Array;
        loop_filter_ref_deltas: Uint8Array;
        update_mode_delta: Uint8Array;
        loop_filter_mode_deltas: Uint8Array;

        // Constructors

        constructor(
            properties?: Partial<{
                loop_filter_level: number;
                loop_filter_sharpness: number;
                loop_filter_delta_enabled: number;
                loop_filter_delta_update: number;
                update_ref_delta: Uint8Array;
                loop_filter_ref_deltas: Uint8Array;
                update_mode_delta: Uint8Array;
                loop_filter_mode_deltas: Uint8Array;
            }>,
        );
    }

    /**
     * Stores motion vectors probabilities updates. This is from the spec
     * and can be used as a binary.
     * @gir-type Struct
     * @since 1.20
     */
    class Vp9MvDeltaProbs {
        static $gtype: GObject.GType<Vp9MvDeltaProbs>;

        // Constructors

        constructor(properties?: Partial<{}>);
    }

    /**
     * @gir-type Struct
     */
    class Vp9Picture {
        static $gtype: GObject.GType<Vp9Picture>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): Vp9Picture;

        // Methods

        /**
         * Gets private data set on the picture via
         * `gst_vp9_picture_set_user_data()` previously.
         * @returns The previously set user_data
         */
        get_user_data(): any | null;
        /**
         * Sets `user_data` on the picture and the {@link GLib.DestroyNotify} that will be called when
         * the picture is freed.
         *
         * If a `user_data` was previously set, then the previous set `notify` will be called
         * before the `user_data` is replaced.
         * @param user_data private data
         */
        set_user_data(user_data?: any | null): void;
    }

    /**
     * @gir-type Struct
     * @since 1.20
     */
    class Vp9QuantizationParams {
        static $gtype: GObject.GType<Vp9QuantizationParams>;

        // Fields

        base_q_idx: number;
        delta_q_y_dc: number;
        delta_q_uv_dc: number;
        delta_q_uv_ac: number;

        // Constructors

        constructor(
            properties?: Partial<{
                base_q_idx: number;
                delta_q_y_dc: number;
                delta_q_uv_dc: number;
                delta_q_uv_ac: number;
            }>,
        );
    }

    /**
     * See "6.2.11 Segmentation params syntax" and
     * "7.2.10 Segmentation params syntax". When `segmentation_update_data` is equal
     * to zero, parser will fill `feature_enabled` and by `feature_data`
     * using previously parsed values.
     * @gir-type Struct
     * @since 1.20
     */
    class Vp9SegmentationParams {
        static $gtype: GObject.GType<Vp9SegmentationParams>;

        // Fields

        segmentation_enabled: number;
        segmentation_update_map: number;
        segmentation_tree_probs: Uint8Array;
        segmentation_pred_prob: Uint8Array;
        segmentation_temporal_update: number;
        segmentation_update_data: number;
        segmentation_abs_or_delta_update: number;
        feature_enabled: Uint8Array;
        feature_data: number[];

        // Constructors

        constructor(
            properties?: Partial<{
                segmentation_enabled: number;
                segmentation_update_map: number;
                segmentation_tree_probs: Uint8Array;
                segmentation_pred_prob: Uint8Array;
                segmentation_temporal_update: number;
                segmentation_update_data: number;
                segmentation_abs_or_delta_update: number;
                feature_enabled: Uint8Array;
                feature_data: number[];
            }>,
        );
    }

    /**
     * This object is used to parse VP9 bitstream header.
     * @gir-type Struct
     * @since 1.20
     */
    class Vp9StatefulParser {
        static $gtype: GObject.GType<Vp9StatefulParser>;

        // Fields

        reference: any[];

        // Constructors

        constructor(
            properties?: Partial<{
                reference: any[];
            }>,
        );

        // Methods

        /**
         * Frees `parser`.
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

export default GstCodecs;

// END
