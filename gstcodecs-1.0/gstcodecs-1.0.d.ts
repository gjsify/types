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

export namespace GstCodecs {
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
    enum H264PictureField {
        FRAME,
        TOP_FIELD,
        BOTTOM_FIELD,
    }
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
     */
    const VP9_BLOCK_SIZE_GROUPS: number;
    /**
     * Number of values for mv_classO_bit
     */
    const VP9_CLASS0_SIZE: number;
    /**
     * Number of contexts for comp_mode
     */
    const VP9_COMP_MODE_CONTEXTS: number;
    /**
     * Number of contexts for interp_filter
     */
    const VP9_INTERP_FILTER_CONTEXTS: number;
    /**
     * Number of values for inter_mode
     */
    const VP9_INTER_MODES: number;
    /**
     * Number of contexts for inter_mode
     */
    const VP9_INTER_MODE_CONTEXTS: number;
    /**
     * Number of values for intra_mode
     */
    const VP9_INTRA_MODES: number;
    /**
     * Number of contexts for interp_filter
     */
    const VP9_IS_INTER_CONTEXTS: number;
    /**
     * Number of values for mv_class
     */
    const VP9_MV_CLASSES: number;
    /**
     * Number of values that can be decoded for mv_fr
     */
    const VP9_MV_FR_SIZE: number;
    /**
     * Number of values for partition
     */
    const VP9_MV_JOINTS: number;
    /**
     * Maximum number of bits for decoding motion vectors
     */
    const VP9_MV_OFFSET_BITS: number;
    /**
     * Number of contexts when decoding partition
     */
    const VP9_PARTITION_CONTEXTS: number;
    /**
     * Number of values for partition
     */
    const VP9_PARTITION_TYPES: number;
    /**
     * Number of contexts for single_ref and comp_ref
     */
    const VP9_REF_CONTEXTS: number;
    /**
     * Index for loop filter segment feature
     */
    const VP9_SEG_LVL_ALT_L: number;
    /**
     * Index for quantizer segment feature
     */
    const VP9_SEG_LVL_ALT_Q: number;
    /**
     * Number of segment features
     */
    const VP9_SEG_LVL_MAX: number;
    /**
     * Index for reference frame segment feature
     */
    const VP9_SEG_LVL_REF_FRAME: number;
    /**
     * Index for skip segment feature
     */
    const VP9_SEG_SEG_LVL_SKIP: number;
    /**
     * Number of contexts for decoding skip
     */
    const VP9_SKIP_CONTEXTS: number;
    /**
     * Number of contexts for interp_filter
     */
    const VP9_SWITCHABLE_FILTERS: number;
    /**
     * Number of values for tx_mode
     */
    const VP9_TX_MODES: number;
    /**
     * Number of values for tx_size
     */
    const VP9_TX_SIZES: number;
    /**
     * Number of contexts for transform size
     */
    const VP9_TX_SIZE_CONTEXTS: number;
    /**
     * An implementation of "ac_q" function specified in
     * "8.6.1 Dequantization functions"
     * @param qindex the quantizer index
     * @param delta_q_ac a delta_q_ac value
     * @param bit_depth coded bit depth
     * @returns the quantizer value for the ac coefficient
     */
    function vp9_get_ac_quant(qindex: number, delta_q_ac: number, bit_depth: number): number;
    /**
     * An implementation of "dc_q" function specified in
     * "8.6.1 Dequantization functions"
     * @param qindex the quantizer index
     * @param delta_q_dc a delta_q_dc value
     * @param bit_depth coded bit depth
     * @returns the quantizer value for the dc coefficient
     */
    function vp9_get_dc_quant(qindex: number, delta_q_dc: number, bit_depth: number): number;
    /**
     * An implementation of "get_qindex" function specfied in
     * "8.6.1 Dequantization functions"
     * @param segmentation_params a #GstVp9SegmentationParams
     * @param quantization_params a #GstVp9QuantizationParams
     * @param segment_id a segment id
     * @returns the quantizer index
     */
    function vp9_get_qindex(
        segmentation_params: Vp9SegmentationParams,
        quantization_params: Vp9QuantizationParams,
        segment_id: number,
    ): number;
    /**
     * An implementation of "seg_feature_active" function specified in
     * "6.4.9 Segmentation feature active syntax"
     * @param params a #GstVp9SegmentationParams
     * @param segment_id a segment id
     * @param feature a segmentation feature
     * @returns %TRUE if feature is active
     */
    function vp9_seg_feature_active(params: Vp9SegmentationParams, segment_id: number, feature: number): boolean;
    module AV1Decoder {
        // Constructor properties interface
    }

    /**
     * The opaque #GstAV1Decoder data structure.
     */
    abstract class AV1Decoder extends GstVideo.VideoDecoder {}

    module H264Decoder {
        // Constructor properties interface
    }

    /**
     * The opaque #GstH264Decoder data structure.
     */
    abstract class H264Decoder extends GstVideo.VideoDecoder {
        // Own properties of GstCodecs-1.0.H264Decoder

        /**
         * The compliance controls the behavior of the decoder to handle some
         * subtle cases and contexts, such as the low-latency DPB bumping or
         * mapping the baseline profile as the constrained-baseline profile,
         * etc.
         */
        compliance: H264DecoderCompliance;

        // Owm methods of GstCodecs-1.0.H264Decoder

        /**
         * Retrive DPB and return a #GstH264Picture corresponding to
         * the `system_frame_number`
         * @param system_frame_number a target system frame number of #GstH264Picture
         * @returns a #GstH264Picture if successful, or %NULL otherwise
         */
        get_picture(system_frame_number: number): H264Picture | null;
        /**
         * Called to en/disable reference picture modification process.
         * @param process whether subclass is requiring reference picture modification process
         */
        set_process_ref_pic_lists(process: boolean): void;
    }

    module H265Decoder {
        // Constructor properties interface
    }

    /**
     * The opaque #GstH265Decoder data structure.
     */
    abstract class H265Decoder extends GstVideo.VideoDecoder {
        // Owm methods of GstCodecs-1.0.H265Decoder

        /**
         * Retrive DPB and return a #GstH265Picture corresponding to
         * the `system_frame_number`
         * @param system_frame_number a target system frame number of #GstH265Picture
         * @returns a #GstH265Picture if successful, or %NULL otherwise
         */
        get_picture(system_frame_number: number): H265Picture | null;
        /**
         * Called to en/disable reference picture modification process.
         * @param process whether subclass is requiring reference picture modification process
         */
        set_process_ref_pic_lists(process: boolean): void;
    }

    module Mpeg2Decoder {
        // Constructor properties interface
    }

    /**
     * The opaque #GstMpeg2Decoder data structure.
     */
    abstract class Mpeg2Decoder extends GstVideo.VideoDecoder {}

    module Vp8Decoder {
        // Constructor properties interface
    }

    /**
     * The opaque #GstVp8Decoder data structure.
     */
    abstract class Vp8Decoder extends GstVideo.VideoDecoder {}

    module Vp9Decoder {
        // Constructor properties interface
    }

    /**
     * The opaque #GstVp9Decoder data structure.
     */
    abstract class Vp9Decoder extends GstVideo.VideoDecoder {
        // Owm methods of GstCodecs-1.0.Vp9Decoder

        /**
         * Called to set non-keyframe format change awareness
         * @param support whether subclass can support non-keyframe format change
         */
        set_non_keyframe_format_change_support(support: boolean): void;
    }

    class AV1DecoderClass {}

    class AV1DecoderPrivate {}

    class AV1Dpb {
        // Owm methods of GstCodecs-1.0.AV1Dpb

        /**
         * Store the `picture`
         * @param picture a #GstAV1Picture
         */
        add(picture: AV1Picture): void;
        /**
         * Clear all stored #GstAV1Picture
         */
        clear(): void;
        /**
         * Free the `dpb`
         */
        free(): void;
    }

    class AV1Picture {
        // Constructors of GstCodecs-1.0.AV1Picture

        constructor(properties?: Partial<{}>);

        static ['new'](): AV1Picture;

        // Owm methods of GstCodecs-1.0.AV1Picture

        /**
         * Gets private data set on the picture via
         * gst_av1_picture_set_user_data() previously.
         * @returns The previously set user_data
         */
        get_user_data(): any | null;
        /**
         * Sets `user_data` on the picture and the #GDestroyNotify that will be called when
         * the picture is freed.
         *
         * If a `user_data` was previously set, then the previous set `notify` will be called
         * before the `user_data` is replaced.
         * @param notify a #GDestroyNotify
         */
        set_user_data(notify: GLib.DestroyNotify): void;
    }

    class AV1Tile {
        // Constructors of GstCodecs-1.0.AV1Tile

        constructor(
            properties?: Partial<{
                tile_group: unknown;
                obu: unknown;
            }>,
        );
    }

    /**
     * The opaque #GstH264DecoderClass data structure.
     */
    class H264DecoderClass {}

    class H264DecoderPrivate {}

    class H264Dpb {
        // Owm methods of GstCodecs-1.0.H264Dpb

        /**
         * Store the `picture`
         * @param picture a #GstH264Picture
         */
        add(picture: H264Picture): void;
        /**
         * Perform bumping process as defined in C.4.5.3 "Bumping" process.
         * If `drain` is %TRUE, `dpb` will remove a #GstH264Picture from internal array
         * so that returned #GstH264Picture could hold the last reference of it
         * @param drain whether draining or not
         * @returns a #GstH264Picture which is needed to be outputted
         */
        bump(drain: boolean): H264Picture | null;
        /**
         * Clear all stored #GstH264Picture
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
        get_interlaced(): boolean;
        /**
         * Find a long term reference picture which has matching long term picture number
         * @param long_term_pic_num a long term picture number
         * @returns a #GstH264Picture
         */
        get_long_ref_by_long_term_pic_num(long_term_pic_num: number): H264Picture | null;
        /**
         * Find a short term reference picture which has the lowest frame_num_wrap
         * @returns a #GstH264Picture
         */
        get_lowest_frame_num_short_ref(): H264Picture | null;
        get_max_num_frames(): number;
        get_max_num_reorder_frames(): number;
        get_picture(system_frame_number: number): H264Picture | null;
        get_pictures_all(): H264Picture[];
        /**
         * Retrieve all long-term reference pictures from `dpb`. The picture will be
         * appended to the array.
         * @param include_second_field %TRUE if the second field pictures need to be included
         */
        get_pictures_long_term_ref(include_second_field: boolean): void;
        /**
         * Retrieve all short-term reference pictures from `dpb`. The picture will be
         * appended to the array.
         * @param include_non_existing %TRUE if non-existing pictures need to be included
         * @param include_second_field %TRUE if the second field pictures need to be included
         */
        get_pictures_short_term_ref(include_non_existing: boolean, include_second_field: boolean): void;
        /**
         * Find a short term reference picture which has matching picture number
         * @param pic_num a picture number
         * @returns a #GstH264Picture
         */
        get_short_ref_by_pic_num(pic_num: number): H264Picture | null;
        get_size(): number;
        has_empty_frame_buffer(): boolean;
        /**
         * Mark all pictures are not referenced
         */
        mark_all_non_ref(): void;
        needs_bump(to_insert: H264Picture, latency_mode: H264DpbBumpMode): boolean;
        num_ref_frames(): number;
        set_interlaced(interlaced: boolean): void;
        /**
         * Notify the DPB that `picture` is output directly without storing
         * in the DPB.
         * @param picture a #GstH264Picture of the last output.
         */
        set_last_output(picture: H264Picture): void;
        /**
         * Set the number of maximum allowed frames to store
         * @param max_num_frames the maximum number of picture
         */
        set_max_num_frames(max_num_frames: number): void;
        set_max_num_reorder_frames(max_num_reorder_frames: number): void;
    }

    class H264Picture {
        // Constructors of GstCodecs-1.0.H264Picture

        constructor(properties?: Partial<{}>);

        static ['new'](): H264Picture;

        // Owm methods of GstCodecs-1.0.H264Picture

        /**
         * Gets private data set on the picture via
         * gst_h264_picture_set_user_data() previously.
         * @returns The previously set user_data
         */
        get_user_data(): any | null;
        /**
         * Update reference picture type of `picture` with `reference`
         * @param reference a GstH264PictureReference
         * @param other_field %TRUE if @reference needs to be applied to the other field if any
         */
        set_reference(reference: H264PictureReference, other_field: boolean): void;
        /**
         * Sets `user_data` on the picture and the #GDestroyNotify that will be called when
         * the picture is freed.
         *
         * If a `user_data` was previously set, then the previous set `notify` will be called
         * before the `user_data` is replaced.
         * @param notify a #GDestroyNotify
         */
        set_user_data(notify: GLib.DestroyNotify): void;
    }

    class H264Slice {
        // Constructors of GstCodecs-1.0.H264Slice

        constructor(
            properties?: Partial<{
                header: unknown;
                nalu: unknown;
            }>,
        );
    }

    /**
     * The opaque #GstH265DecoderClass data structure.
     */
    class H265DecoderClass {}

    class H265DecoderPrivate {}

    class H265Dpb {
        // Owm methods of GstCodecs-1.0.H265Dpb

        /**
         * Store the `picture` and perform increase pic_latency_cnt as defined in
         * "C.5.2.3 Additional bumping" process
         * @param picture a #GstH265Picture
         */
        add(picture: H265Picture): void;
        /**
         * Perform bumping process as defined in C.5.2.4 "Bumping" process.
         * If `drain` is %TRUE, `dpb` will remove a #GstH265Picture from internal array
         * so that returned #GstH265Picture could hold the last reference of it
         * @param drain whether draining or not
         * @returns a #GstH265Picture which is needed to be outputted
         */
        bump(drain: boolean): H265Picture | null;
        /**
         * Clear all stored #GstH265Picture
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
         * @returns a #GstH265Picture
         */
        get_long_ref_by_poc(poc: number): H265Picture | null;
        get_max_num_pics(): number;
        get_picture(system_frame_number: number): H265Picture | null;
        get_pictures_all(): H265Picture[];
        /**
         * Find a short or long term reference picture which has matching poc
         * @param poc a picture order count
         * @returns a #GstH265Picture
         */
        get_ref_by_poc(poc: number): H265Picture | null;
        /**
         * Find a short or long term reference picture which has matching poc_lsb
         * @param poc_lsb a picture order count lsb
         * @returns a #GstH265Picture
         */
        get_ref_by_poc_lsb(poc_lsb: number): H265Picture | null;
        /**
         * Find a short term reference picture which has matching poc
         * @param poc a picture order count
         * @returns a #GstH265Picture
         */
        get_short_ref_by_poc(poc: number): H265Picture | null;
        get_size(): number;
        /**
         * Mark all pictures are not referenced
         */
        mark_all_non_ref(): void;
        needs_bump(max_num_reorder_pics: number, max_latency_increase: number, max_dec_pic_buffering: number): boolean;
        num_ref_pictures(): number;
        /**
         * Set the number of maximum allowed pictures to store
         * @param max_num_pics the maximum number of picture
         */
        set_max_num_pics(max_num_pics: number): void;
    }

    class H265Picture {
        // Constructors of GstCodecs-1.0.H265Picture

        constructor(properties?: Partial<{}>);

        static ['new'](): H265Picture;

        // Owm methods of GstCodecs-1.0.H265Picture

        /**
         * Gets private data set on the picture via
         * gst_h265_picture_set_user_data() previously.
         * @returns The previously set user_data
         */
        get_user_data(): any | null;
        /**
         * Sets `user_data` on the picture and the #GDestroyNotify that will be called when
         * the picture is freed.
         *
         * If a `user_data` was previously set, then the previous set `notify` will be called
         * before the `user_data` is replaced.
         * @param notify a #GDestroyNotify
         */
        set_user_data(notify: GLib.DestroyNotify): void;
    }

    class H265Slice {
        // Constructors of GstCodecs-1.0.H265Slice

        constructor(
            properties?: Partial<{
                header: unknown;
                nalu: unknown;
            }>,
        );
    }

    class Mpeg2DecoderClass {}

    class Mpeg2DecoderPrivate {}

    class Mpeg2Dpb {
        // Owm methods of GstCodecs-1.0.Mpeg2Dpb

        /**
         * Store the `picture`
         * @param picture a #GstMpeg2Picture
         */
        add(picture: Mpeg2Picture): void;
        bump(): Mpeg2Picture | null;
        /**
         * Clear all stored #GstMpeg2Picture
         */
        clear(): void;
        /**
         * Free the `dpb`
         */
        free(): void;
        /**
         * Gets the neighbours #GstMpeg2Picture of `picture` in `dpb`.
         * @param picture current #GstMpeg2Picture
         */
        get_neighbours(picture: Mpeg2Picture): void;
        /**
         * Checks if `dbp` has a new picture.
         * @returns #TRUE if @dpb needs to be bumped; otherwise, #FALSE
         */
        need_bump(): boolean;
    }

    class Mpeg2Picture {
        // Constructors of GstCodecs-1.0.Mpeg2Picture

        constructor(properties?: Partial<{}>);

        static ['new'](): Mpeg2Picture;

        // Owm methods of GstCodecs-1.0.Mpeg2Picture

        /**
         * Gets private data set on the picture via
         * gst_mpeg2_picture_set_user_data() previously.
         * @returns The previously set user_data
         */
        get_user_data(): any | null;
        /**
         * Sets `user_data` on the picture and the #GDestroyNotify that will be called when
         * the picture is freed.
         *
         * If a `user_data` was previously set, then the previous set `notify` will be called
         * before the `user_data` is replaced.
         * @param notify a #GDestroyNotify
         */
        set_user_data(notify: GLib.DestroyNotify): void;
    }

    class Mpeg2Slice {
        // Constructors of GstCodecs-1.0.Mpeg2Slice

        constructor(properties?: Partial<{}>);
    }

    class Vp8DecoderClass {}

    class Vp8DecoderPrivate {}

    class Vp8Picture {
        // Constructors of GstCodecs-1.0.Vp8Picture

        constructor(properties?: Partial<{}>);

        static ['new'](): Vp8Picture;

        // Owm methods of GstCodecs-1.0.Vp8Picture

        /**
         * Gets private data set on the picture via
         * gst_vp8_picture_set_user_data() previously.
         * @returns The previously set user_data
         */
        get_user_data(): any | null;
        /**
         * Sets `user_data` on the picture and the #GDestroyNotify that will be called when
         * the picture is freed.
         *
         * If a `user_data` was previously set, then the previous set `notify` will be called
         * before the `user_data` is replaced.
         * @param notify a #GDestroyNotify
         */
        set_user_data(notify: GLib.DestroyNotify): void;
    }

    class Vp9DecoderClass {}

    class Vp9DecoderPrivate {}

    /**
     * Stores probabilities updates. This is from the spec
     * and can be used as a binary.
     */
    class Vp9DeltaProbabilities {
        // Constructors of GstCodecs-1.0.Vp9DeltaProbabilities

        constructor(properties?: Partial<{}>);
    }

    class Vp9Dpb {
        // Owm methods of GstCodecs-1.0.Vp9Dpb

        /**
         * Store the `picture`
         * @param picture a #GstVp9Picture
         */
        add(picture: Vp9Picture): void;
        /**
         * Clear all stored #GstVp9Picture
         */
        clear(): void;
        /**
         * Free the `dpb`
         */
        free(): void;
    }

    class Vp9FrameHeader {
        // Own fields of GstCodecs-1.0.Vp9FrameHeader

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
     */
    class Vp9LoopFilterParams {
        // Own fields of GstCodecs-1.0.Vp9LoopFilterParams

        loop_filter_level: number;
        loop_filter_sharpness: number;
        loop_filter_delta_enabled: number;
        loop_filter_delta_update: number;
        update_ref_delta: Uint8Array;
        loop_filter_ref_deltas: Uint8Array;
        update_mode_delta: Uint8Array;
        loop_filter_mode_deltas: Uint8Array;

        // Constructors of GstCodecs-1.0.Vp9LoopFilterParams

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
     */
    class Vp9MvDeltaProbs {
        // Constructors of GstCodecs-1.0.Vp9MvDeltaProbs

        constructor(properties?: Partial<{}>);
    }

    class Vp9Picture {
        // Constructors of GstCodecs-1.0.Vp9Picture

        constructor(properties?: Partial<{}>);

        static ['new'](): Vp9Picture;

        // Owm methods of GstCodecs-1.0.Vp9Picture

        /**
         * Gets private data set on the picture via
         * gst_vp9_picture_set_user_data() previously.
         * @returns The previously set user_data
         */
        get_user_data(): any | null;
        /**
         * Sets `user_data` on the picture and the #GDestroyNotify that will be called when
         * the picture is freed.
         *
         * If a `user_data` was previously set, then the previous set `notify` will be called
         * before the `user_data` is replaced.
         * @param notify a #GDestroyNotify
         */
        set_user_data(notify: GLib.DestroyNotify): void;
    }

    class Vp9QuantizationParams {
        // Own fields of GstCodecs-1.0.Vp9QuantizationParams

        base_q_idx: number;
        delta_q_y_dc: number;
        delta_q_uv_dc: number;
        delta_q_uv_ac: number;

        // Constructors of GstCodecs-1.0.Vp9QuantizationParams

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
     */
    class Vp9SegmentationParams {
        // Own fields of GstCodecs-1.0.Vp9SegmentationParams

        segmentation_enabled: number;
        segmentation_update_map: number;
        segmentation_tree_probs: Uint8Array;
        segmentation_pred_prob: Uint8Array;
        segmentation_temporal_update: number;
        segmentation_update_data: number;
        segmentation_abs_or_delta_update: number;
        feature_enabled: Uint8Array;
        feature_data: number[];

        // Constructors of GstCodecs-1.0.Vp9SegmentationParams

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
     */
    class Vp9StatefulParser {
        // Own fields of GstCodecs-1.0.Vp9StatefulParser

        reference: any[];

        // Constructors of GstCodecs-1.0.Vp9StatefulParser

        constructor(
            properties?: Partial<{
                reference: any[];
            }>,
        );

        // Owm methods of GstCodecs-1.0.Vp9StatefulParser

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
