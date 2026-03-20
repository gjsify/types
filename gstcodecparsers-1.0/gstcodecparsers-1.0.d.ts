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
import type GstBase from '@girs/gstbase-1.0';
import type Gst from '@girs/gst-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GstCodecParsers {
    /**
     * GstCodecParsers-1.0
     */

    /**
     * The result of writing AV1 data into bit stream.
     * @gir-type Enum
     * @since 1.24
     */
    enum AV1BitWriterResult {
        /**
         * The writing succeeded
         */
        OK,
        /**
         * The input data to write is invalid
         */
        INVALID_DATA,
        /**
         * The output does not have enough size
         */
        NO_MORE_SPACE,
        /**
         * An general error occurred when writing
         */
        ERROR,
    }

    /**
     * @gir-type Enum
     */
    enum AV1ChromaSamplePositions {
        /**
         * Unknown (in this case the source video transfer
         *  function must be signaled outside the AV1 bitstream).
         */
        UNKNOWN,
        /**
         * Horizontally co-located with (0, 0) luma sample,
         *  vertical position in the middle between two luma samples.
         */
        VERTICAL,
        /**
         * co-located with (0, 0) luma sample.
         */
        COLOCATED,
        /**
         * For future use.
         */
        RESERVED,
    }

    /**
     * @gir-type Enum
     */
    enum AV1ColorPrimaries {
        /**
         * BT.709
         */
        BT_709,
        /**
         * Unspecified
         */
        UNSPECIFIED,
        /**
         * BT.470 System M (historical)
         */
        BT_470_M,
        /**
         * BT.470 System B, G (historical),
         */
        BT_470_B_G,
        /**
         * BT.601
         */
        BT_601,
        /**
         * SMPTE 240
         */
        SMPTE_240,
        /**
         * Generic film (color filters using illuminant C,
         */
        GENERIC_FILM,
        /**
         * BT.2020, BT.2100,
         */
        BT_2020,
        /**
         * SMPTE 428 (CIE 1921 XYZ),
         */
        XYZ,
        /**
         * SMPTE RP 431-2
         */
        SMPTE_431,
        /**
         * SMPTE EG 432-1
         */
        SMPTE_432,
        /**
         * EBU Tech. 3213-E
         */
        EBU_3213,
    }

    /**
     * @gir-type Enum
     */
    enum AV1FrameRestorationType {
        /**
         * no filtering is applied
         */
        NONE,
        /**
         * Wiener filter process is invoked
         */
        WIENER,
        /**
         * self guided filter proces is invoked
         */
        SGRPROJ,
        /**
         * restoration filter is swichtable
         */
        SWITCHABLE,
    }

    /**
     * @gir-type Enum
     */
    enum AV1FrameType {
        /**
         * Key Frame
         */
        KEY_FRAME,
        /**
         * InterFrame
         */
        INTER_FRAME,
        /**
         * Intra-Only Frame
         */
        INTRA_ONLY_FRAME,
        /**
         * Switch Frame
         */
        SWITCH_FRAME,
    }

    /**
     * @gir-type Enum
     */
    enum AV1InterpolationFilter {
        /**
         * Eighttap
         */
        EIGHTTAP,
        /**
         * Eighttap Smooth
         */
        EIGHTTAP_SMOOTH,
        /**
         * Eighttap Sharp
         */
        EIGHTTAP_SHARP,
        /**
         * Bilinear
         */
        BILINEAR,
        /**
         * Filter is swichtable
         */
        SWITCHABLE,
    }

    /**
     * @gir-type Enum
     */
    enum AV1MatrixCoefficients {
        /**
         * Identity matrix
         */
        IDENTITY,
        /**
         * BT.709
         */
        BT_709,
        /**
         * Unspecified
         */
        UNSPECIFIED,
        /**
         * For future use
         */
        RESERVED_3,
        /**
         * US FCC 73.628
         */
        FCC,
        /**
         * BT.470 System B, G (historical)
         */
        BT_470_B_G,
        /**
         * BT.601
         */
        BT_601,
        /**
         * SMPTE 240 M
         */
        SMPTE_240,
        /**
         * YCgCo
         */
        SMPTE_YCGCO,
        /**
         * BT.2020 non-constant luminance, BT.2100 YCbCr
         */
        BT_2020_NCL,
        /**
         * BT.2020 constant luminance
         */
        BT_2020_CL,
        /**
         * SMPTE ST 2085 YDzDx
         */
        SMPTE_2085,
        /**
         * Chromaticity-derived non-constant luminance
         */
        CHROMAT_NCL,
        /**
         * Chromaticity-derived constant luminancw
         */
        CHROMAT_CL,
        /**
         * BT.2100 ICtCp
         */
        ICTCP,
    }

    /**
     * @gir-type Enum
     */
    enum AV1MetadataType {
        /**
         * Reserved 0
         */
        RESERVED_0,
        /**
         * Metadata high dynamic range content
         *   light level semantics
         */
        HDR_CLL,
        /**
         * Metadata high dynamic range mastering
         *   display color volume semantics
         */
        HDR_MDCV,
        /**
         * Metadata scalability semantics
         */
        SCALABILITY,
        /**
         * Metadata ITUT T35 semantics
         */
        ITUT_T35,
        /**
         * Timecode semantics
         */
        TIMECODE,
    }

    /**
     * Defines all the possible OBU types
     * @gir-type Enum
     */
    enum AV1OBUType {
        /**
         * Reserved 0
         */
        RESERVED_0,
        /**
         * Sequence Header OBU
         */
        SEQUENCE_HEADER,
        /**
         * Temporal Delimiter OBU
         */
        TEMPORAL_DELIMITER,
        /**
         * Frame Header OBU
         */
        FRAME_HEADER,
        /**
         * Tile Group OBU
         */
        TILE_GROUP,
        /**
         * Metadata OBU
         */
        METADATA,
        /**
         * Frame OBU (includes Frame Header and one Tile Group)
         */
        FRAME,
        /**
         * Redundant Frame Header OBU
         */
        REDUNDANT_FRAME_HEADER,
        /**
         * Tile LIst OBU
         */
        TILE_LIST,
        /**
         * Reserved 9
         */
        RESERVED_9,
        /**
         * Reserved 10
         */
        RESERVED_10,
        /**
         * Reserved 11
         */
        RESERVED_11,
        /**
         * Reserved 12
         */
        RESERVED_12,
        /**
         * Reserved 13
         */
        RESERVED_13,
        /**
         * Reserved 14
         */
        RESERVED_14,
        /**
         * Padding
         */
        PADDING,
    }

    /**
     * Defines the result of parser process
     * @gir-type Enum
     */
    enum AV1ParserResult {
        /**
         * successful return
         */
        OK,
        /**
         * the parser needs more data for one OBU
         */
        NO_MORE_DATA,
        /**
         * no need to handle this OBU, skip it
         */
        DROP,
        /**
         * stream error, for example, include invalid bits
         */
        BITSTREAM_ERROR,
        /**
         * no reference, for example, no sequence found
         */
        MISSING_OBU_REFERENCE,
        /**
         * something like invalid parameters
         */
        INVALID_OPERATION,
    }

    /**
     * Defines the AV1 profiles
     * @gir-type Struct
     */
    class AV1Profile {
        static $gtype: GObject.GType<AV1Profile>;

        // Static fields

        /**
         * 8-bit and 10-bit 4:2:0 and 4:0:0 only.
         */
        static '0': number;
        /**
         * 8-bit and 10-bit 4:4:4.
         */
        static '1': number;
        /**
         * 8-bit and 10-bit 4:2:2, 12-bit 4:0:0 4:2:2 and 4:4:4
         */
        static '2': number;
        /**
         * unknow AV1 profile
         * @since 1.20
         */
        static UNDEFINED: number;
    }

    /**
     * @gir-type Enum
     */
    enum AV1ReferenceFrame {
        /**
         * Intra Frame Reference
         */
        REF_INTRA_FRAME,
        /**
         * Last Reference Frame
         */
        REF_LAST_FRAME,
        /**
         * Last2 Reference Frame
         */
        REF_LAST2_FRAME,
        /**
         * Last3 Reference Frame
         */
        REF_LAST3_FRAME,
        /**
         * Golden Reference Frame
         */
        REF_GOLDEN_FRAME,
        /**
         * BWD Reference Frame
         */
        REF_BWDREF_FRAME,
        /**
         * Alternative2 Reference Frame
         */
        REF_ALTREF2_FRAME,
        /**
         * Alternative Reference Frame
         */
        REF_ALTREF_FRAME,
        /**
         * Total Reference Frame Number
         */
        NUM_REF_FRAMES,
    }

    /**
     * @gir-type Enum
     */
    enum AV1ScalabilityModes {
        /**
         * 1 spatial layer, 2 temporal layers
         */
        L1T2,
        /**
         * 1 spatial layer, 3 temporal layers
         */
        L1T3,
        /**
         * 2 spatial layer (ratio 2:1), 1 temporal layer,
         *  inter-layer dependency
         */
        L2T1,
        /**
         * 2 spatial layer (ratio 2:1), 2 temporal layer,
         *  inter-layer dependency
         */
        L2T2,
        /**
         * 2 spatial layer (ratio 2:1), 3 temporal layer,
         *  inter-layer dependency
         */
        L2T3,
        /**
         * 2 spatial layer (ratio 2:1), 1 temporal layer
         */
        S2T1,
        /**
         * 2 spatial layer (ratio 2:1), 2 temporal layer
         */
        S2T2,
        /**
         * 2 spatial layer (ratio 2:1), 3 temporal layer
         */
        S2T3,
        /**
         * 2 spatial layer (ratio 1.5:1), 1 temporal layer,
         *  inter-layer dependency
         */
        L2T1H,
        /**
         * 2 spatial layer (ratio 1.5:1), 2 temporal layer,
         *  inter-layer dependency
         */
        L2T2H,
        /**
         * 2 spatial layer (ratio 1.5:1), 3 temporal layer,
         *  inter-layer dependency
         */
        L2T3H,
        /**
         * 2 spatial layer (ratio 1.5:1), 1 temporal layer
         */
        S2T1H,
        /**
         * 2 spatial layer (ratio 1.5:1), 2 temporal layer
         */
        S2T2H,
        /**
         * 2 spatial layer (ratio 1.5:1), 3 temporal layer
         */
        S2T3H,
        /**
         * Use scalability structure {@link GstCodecParsers.AV1MetadataScalability}
         */
        SS,
    }

    /**
     * Defines all the possible OBU types
     * @gir-type Enum
     */
    enum AV1SeqLevels {
        /**
         * Level 2.0
         */
        LEVEL_2_0,
        /**
         * Level 2.1
         */
        LEVEL_2_1,
        /**
         * Level 2.2
         */
        LEVEL_2_2,
        /**
         * Level 2.3
         */
        LEVEL_2_3,
        /**
         * Level 3.0
         */
        LEVEL_3_0,
        /**
         * Level 3.1
         */
        LEVEL_3_1,
        /**
         * Level 3.2
         */
        LEVEL_3_2,
        /**
         * Level 3.3
         */
        LEVEL_3_3,
        /**
         * Level 4.0
         */
        LEVEL_4_0,
        /**
         * Level 4.1
         */
        LEVEL_4_1,
        /**
         * Level 4.2
         */
        LEVEL_4_2,
        /**
         * Level 4.3
         */
        LEVEL_4_3,
        /**
         * Level 5.0
         */
        LEVEL_5_0,
        /**
         * Level 5.1
         */
        LEVEL_5_1,
        /**
         * Level 5.2
         */
        LEVEL_5_2,
        /**
         * Level 5.3
         */
        LEVEL_5_3,
        /**
         * Level 6.0
         */
        LEVEL_6_0,
        /**
         * Level 6.1
         */
        LEVEL_6_1,
        /**
         * Level 6.2
         */
        LEVEL_6_2,
        /**
         * Level 6.3
         */
        LEVEL_6_3,
        /**
         * Level 7.0
         */
        LEVEL_7_0,
        /**
         * Level 7.1
         */
        LEVEL_7_1,
        /**
         * Level 7.2
         */
        LEVEL_7_2,
        /**
         * Level 7.3
         */
        LEVEL_7_3,
        /**
         * all valid levels
         */
        LEVELS,
        /**
         * Maximum parameters
         */
        LEVEL_MAX,
    }

    /**
     * @gir-type Enum
     */
    enum AV1TXModes {
        /**
         * the inverse transform will use only 4x4 transforms.
         */
        ONLY_4X4,
        /**
         * the inverse transform will use the largest transform
         *   size that fits inside the block.
         */
        LARGEST,
        /**
         * the choice of transform size is specified explicitly
         *   for each block.
         */
        SELECT,
    }

    /**
     * @gir-type Enum
     */
    enum AV1TransferCharacteristics {
        /**
         * For future use
         */
        RESERVED_0,
        /**
         * BT.709
         */
        BT_709,
        /**
         * Unspecified
         */
        UNSPECIFIED,
        /**
         * For future use
         */
        RESERVED_3,
        /**
         * BT.470 System M (historical)
         */
        BT_470_M,
        /**
         * BT.470 System B, G (historical)
         */
        BT_470_B_G,
        /**
         * BT.601
         */
        BT_601,
        /**
         * SMPTE 240 M
         */
        SMPTE_240,
        /**
         * Linear
         */
        LINEAR,
        /**
         * Logarithmic (100 : 1 range)
         */
        LOG_100,
        /**
         * Logarithmic (100 * Sqrt(10) : 1 range)
         */
        LOG_100_SQRT10,
        /**
         * IEC 61966-2-4
         */
        IEC_61966,
        /**
         * BT.1361
         */
        BT_1361,
        /**
         * sRGB or sYCC
         */
        SRGB,
        /**
         * BT.2020 10-bit systems
         */
        BT_2020_10_BIT,
        /**
         * BT.2020 12-bit systems
         */
        BT_2020_12_BIT,
        /**
         * SMPTE ST 2084, ITU BT.2100 PQ
         */
        SMPTE_2084,
        /**
         * SMPTE ST 428
         */
        SMPTE_428,
        /**
         * BT.2100 HLG, ARIB STD-B67
         */
        HLG,
    }

    /**
     * @gir-type Enum
     */
    enum AV1WarpModelType {
        /**
         * Warp model is just an identity transform
         */
        IDENTITY,
        /**
         * Warp model is a pure translation
         */
        TRANSLATION,
        /**
         * Warp model is a rotation + symmetric zoom
         *     + translation
         */
        ROTZOOM,
        /**
         * Warp model is a general affine transform
         */
        AFFINE,
    }

    /**
     * @gir-type Enum
     */
    enum CtType {
        PROGRESSIVE,
        INTERLACED,
        UNKNOWN,
    }

    /**
     * The result of writing H264 data into bit stream.
     * @gir-type Enum
     * @since 1.22
     */
    enum H264BitWriterResult {
        /**
         * The writing succeeded
         */
        OK,
        /**
         * The input data to write is invalid
         */
        INVALID_DATA,
        /**
         * The output does not have enough size
         */
        NO_MORE_SPACE,
        /**
         * An general error occurred when writing
         */
        ERROR,
    }

    /**
     * Frame packing arrangement types.
     * @gir-type Enum
     * @since 1.6
     */
    enum H264FramePackingType {
        /**
         * A complete 2D frame without any frame packing
         */
        FRAME_PACKING_NONE,
        /**
         * Checkerboard
         *   based interleaving
         */
        FRAME_PACKING_CHECKERBOARD_INTERLEAVING,
        /**
         * Column based interleaving
         */
        FRAME_PACKING_COLUMN_INTERLEAVING,
        /**
         * Row based interleaving
         */
        FRAME_PACKING_ROW_INTERLEAVING,
        /**
         * Side-by-side packing
         */
        FRAME_PACKING_SIDE_BY_SIDE,
        /**
         * Deprecated; use GST_H264_FRAME_PACKING_TOP_BOTTOM instead
         */
        FRMAE_PACKING_TOP_BOTTOM,
        /**
         * Top-Bottom packing
         */
        FRAME_PACKING_TOP_BOTTOM,
        /**
         * Temporal interleaving
         */
        FRAME_PACKING_TEMPORAL_INTERLEAVING,
    }

    /**
     * H.264 level
     * @gir-type Enum
     * @since 1.24
     */
    enum H264Level {
        /**
         * Level 1
         */
        L1,
        /**
         * Level 1b
         */
        L1B,
        /**
         * Level 1.1
         */
        L1_1,
        /**
         * Level 1.2
         */
        L1_2,
        /**
         * Level 1.3
         */
        L1_3,
        /**
         * Level 2
         */
        L2,
        /**
         * Level 2.1
         */
        L2_1,
        /**
         * Level 2.2
         */
        L2_2,
        /**
         * Level 3
         */
        L3,
        /**
         * Level 3.1
         */
        L3_1,
        /**
         * Level 3.2
         */
        L3_2,
        /**
         * Level 4
         */
        L4,
        /**
         * Level 4.1
         */
        L4_1,
        /**
         * Level 4.2
         */
        L4_2,
        /**
         * Level 5
         */
        L5,
        /**
         * Level 5.1
         */
        L5_1,
        /**
         * Level 5.2
         */
        L5_2,
        /**
         * Level 6
         */
        L6,
        /**
         * Level 6.1
         */
        L6_1,
        /**
         * Level 6.2
         */
        L6_2,
    }

    /**
     * Indicates the type of H.264 NAL unit extension.
     * @gir-type Enum
     * @since 1.6
     */
    enum H264NalUnitExtensionType {
        /**
         * No NAL unit header extension is available
         */
        NONE,
        /**
         * NAL unit header extension for SVC (Annex G)
         */
        SVC,
        /**
         * NAL unit header extension for MVC (Annex H)
         */
        MVC,
    }

    /**
     * Indicates the type of H264 Nal Units
     * @gir-type Enum
     */
    enum H264NalUnitType {
        /**
         * Unknown nal type
         */
        UNKNOWN,
        /**
         * Slice nal
         */
        SLICE,
        /**
         * DPA slice nal
         */
        SLICE_DPA,
        /**
         * DPB slice nal
         */
        SLICE_DPB,
        /**
         * DPC slice nal
         */
        SLICE_DPC,
        /**
         * DPR slice nal
         */
        SLICE_IDR,
        /**
         * Supplemental enhancement information (SEI) nal unit
         */
        SEI,
        /**
         * Sequence parameter set (SPS) nal unit
         */
        SPS,
        /**
         * Picture parameter set (PPS) nal unit
         */
        PPS,
        /**
         * Access unit (AU) delimiter nal unit
         */
        AU_DELIMITER,
        /**
         * End of sequence nal unit
         */
        SEQ_END,
        /**
         * End of stream nal unit
         */
        STREAM_END,
        /**
         * Filler data nal lunit
         */
        FILLER_DATA,
        /**
         * Sequence parameter set (SPS) extension NAL unit
         */
        SPS_EXT,
        /**
         * Prefix NAL unit
         */
        PREFIX_UNIT,
        /**
         * Subset sequence parameter set (SSPS) NAL unit
         */
        SUBSET_SPS,
        /**
         * Depth parameter set (DPS) NAL unit
         */
        DEPTH_SPS,
        /**
         * First reserved parameter
         */
        RSV_1,
        /**
         * Second reserved parameter
         */
        RSV_2,
        /**
         * Auxiliary coded picture without partitioning NAL unit
         */
        SLICE_AUX,
        /**
         * Coded slice extension NAL unit
         */
        SLICE_EXT,
        /**
         * Coded slice extension for depth or 3D-AVC texture view
         */
        SLICE_DEPTH,
    }

    /**
     * The result of parsing H264 data.
     * @gir-type Enum
     */
    enum H264ParserResult {
        /**
         * The parsing succeeded
         */
        OK,
        /**
         * The data to parse is broken
         */
        BROKEN_DATA,
        /**
         * The link to structure needed for the parsing couldn't be found
         */
        BROKEN_LINK,
        /**
         * An error occurred when parsing
         */
        ERROR,
        /**
         * No NAL unit found during the parsing
         */
        NO_NAL,
        /**
         * Start of the NAL unit found, but not the end.
         *     This will be returned if no start/sync marker for the next NAL unit was
         *     found. In this case the parser will assume that the end of the data is
         *     also the end of the NAL unit. Whether this assumption is correct or not
         *     depends on the context, which only the caller can know, which is why a
         *     special result value is returned in this case. If the data is NAL-aligned
         *     then #GST_H264_PARSER_NO_NAL_END can be treated just like
         *     #GST_H264_PARSER_OK. If the data is not guaranteed to be NAL-aligned,
         *     then the caller probably wants to collect more data until there's another
         *     sync marker or the end of the stream has been reached.
         */
        NO_NAL_END,
    }

    /**
     * H.264 Profiles.
     * @gir-type Enum
     * @since 1.2
     */
    enum H264Profile {
        /**
         * Baseline profile (A.2.1)
         */
        BASELINE,
        /**
         * Main profile (A.2.2)
         */
        MAIN,
        /**
         * Extended profile (A.2.3)
         */
        EXTENDED,
        /**
         * High profile (A.2.4),
         * or Progressive High profile (A.2.4.1), or Constrained High profile (A.2.4.2)
         * depending on constraint_set4_flag and constraint_set5_flag
         */
        HIGH,
        /**
         * High 10 profile (A.2.5) or High 10 Intra
         *   profile (A.2.8), or Progressive High 10 profile (A.2.5.1) depending on
         *   constraint_set3_flag and constraint_set4_flag
         */
        HIGH10,
        /**
         * High 4:2:2 profile (A.2.6) or High
         *   4:2:2 Intra profile (A.2.9), depending on constraint_set3_flag
         */
        HIGH_422,
        /**
         * High 4:4:4 Predictive profile (A.2.7)
         *   or High 4:4:4 Intra profile (A.2.10), depending on the value of
         *   constraint_set3_flag
         */
        HIGH_444,
        /**
         * Multiview High profile (H.10.1.1)
         */
        MULTIVIEW_HIGH,
        /**
         * Stereo High profile (H.10.1.2)
         */
        STEREO_HIGH,
        /**
         * Scalable Baseline profile (G.10.1.1)
         */
        SCALABLE_BASELINE,
        /**
         * Scalable High profile (G.10.1.2)
         *   or Scalable High Intra profile (G.10.1.3), depending on the value
         *   of constraint_set3_flag
         */
        SCALABLE_HIGH,
        /**
         * Invalid H264 profile
         */
        INVALID,
    }

    /**
     * The type of SEI message.
     * @gir-type Enum
     */
    enum H264SEIPayloadType {
        /**
         * Buffering Period SEI Message
         */
        BUF_PERIOD,
        /**
         * Picture Timing SEI Message
         */
        PIC_TIMING,
        /**
         * Registered user data (D.2.5)
         */
        REGISTERED_USER_DATA,
        /**
         * User Data Unregistered (D.2.6)
         */
        USER_DATA_UNREGISTERED,
        /**
         * Recovery Point SEI Message (D.2.7)
         */
        RECOVERY_POINT,
        /**
         * stereo video info SEI message (Since: 1.6)
         */
        STEREO_VIDEO_INFO,
        /**
         * Frame Packing Arrangement (FPA) message that
         *     contains the 3D arrangement for stereoscopic 3D video (Since: 1.6)
         */
        FRAME_PACKING,
        /**
         * Mastering display colour volume information SEI message (D.2.29) (Since: 1.18)
         */
        MASTERING_DISPLAY_COLOUR_VOLUME,
        /**
         * Content light level information SEI message (D.2.31) (Since: 1.18)
         */
        CONTENT_LIGHT_LEVEL,
        /**
         * Unhandled SEI message. This may or may not
         *     be defined by spec (Since 1.18)
         * ...
         */
        UNHANDLED_PAYLOAD,
    }

    /**
     * SEI pic_struct type
     * @gir-type Enum
     */
    enum H264SEIPicStructType {
        /**
         * Picture is a frame
         */
        FRAME,
        /**
         * Top field of frame
         */
        TOP_FIELD,
        /**
         * Bottom field of frame
         */
        BOTTOM_FIELD,
        /**
         * Top bottom field of frame
         */
        TOP_BOTTOM,
        /**
         * bottom top field of frame
         */
        BOTTOM_TOP,
        /**
         * top bottom top field of frame
         */
        TOP_BOTTOM_TOP,
        /**
         * bottom top bottom field of frame
         */
        BOTTOM_TOP_BOTTOM,
        /**
         * indicates that the frame should
         *  be displayed two times consecutively
         */
        FRAME_DOUBLING,
        /**
         * indicates that the frame should be
         *  displayed three times consecutively
         */
        FRAME_TRIPLING,
    }

    /**
     * Type of Picture slice
     * @gir-type Enum
     */
    enum H264SliceType {
        P_SLICE,
        B_SLICE,
        I_SLICE,
        SP_SLICE,
        SI_SLICE,
        S_P_SLICE,
        S_B_SLICE,
        S_I_SLICE,
        S_SP_SLICE,
        S_SI_SLICE,
    }

    /**
     * H.265 level
     * @gir-type Enum
     * @since 1.24
     */
    enum H265Level {
        /**
         * Level 1
         */
        L1,
        /**
         * Level 2
         */
        L2,
        /**
         * Level 2.1
         */
        L2_1,
        /**
         * Level 3
         */
        L3,
        /**
         * Level 3.1
         */
        L3_1,
        /**
         * Level 4
         */
        L4,
        /**
         * Level 4.1
         */
        L4_1,
        /**
         * Level 5
         */
        L5,
        /**
         * Level 5.1
         */
        L5_1,
        /**
         * Level 5.2
         */
        L5_2,
        /**
         * Level 6
         */
        L6,
        /**
         * Level 6.1
         */
        L6_1,
        /**
         * Level 6.2
         */
        L6_2,
    }

    /**
     * Indicates the type of H265 Nal Units
     * @gir-type Enum
     */
    enum H265NalUnitType {
        /**
         * Slice nal of a non-TSA, non-STSA trailing picture
         */
        SLICE_TRAIL_N,
        /**
         * Slice nal of a non-TSA, non-STSA trailing picture
         */
        SLICE_TRAIL_R,
        /**
         * Slice nal of a TSA picture
         */
        SLICE_TSA_N,
        /**
         * Slice nal of a TSA picture
         */
        SLICE_TSA_R,
        /**
         * Slice nal of a STSA picture
         */
        SLICE_STSA_N,
        /**
         * Slice nal of a STSA picture
         */
        SLICE_STSA_R,
        /**
         * Slice nal of a RADL picture
         */
        SLICE_RADL_N,
        /**
         * Slice nal of a RADL piicture
         */
        SLICE_RADL_R,
        /**
         * Slice nal of a RASL picture
         */
        SLICE_RASL_N,
        /**
         * Slice nal of a RASL picture
         */
        SLICE_RASL_R,
        /**
         * Slice nal of a BLA picture
         */
        SLICE_BLA_W_LP,
        /**
         * Slice nal of a BLA picture
         */
        SLICE_BLA_W_RADL,
        /**
         * Slice nal of a BLA picture
         */
        SLICE_BLA_N_LP,
        /**
         * Slice nal of an IDR picture
         */
        SLICE_IDR_W_RADL,
        /**
         * Slice nal of an IDR picture
         */
        SLICE_IDR_N_LP,
        /**
         * Slice nal of a CRA picture
         */
        SLICE_CRA_NUT,
        /**
         * Video parameter set(VPS) nal unit
         */
        VPS,
        /**
         * Sequence parameter set (SPS) nal unit
         */
        SPS,
        /**
         * Picture parameter set (PPS) nal unit
         */
        PPS,
        /**
         * Access unit (AU) delimiter nal unit
         */
        AUD,
        /**
         * End of sequence (EOS) nal unit
         */
        EOS,
        /**
         * End of bitstream (EOB) nal unit
         */
        EOB,
        /**
         * Filler data (FD) nal lunit
         */
        FD,
        /**
         * Supplemental enhancement information prefix nal unit
         */
        PREFIX_SEI,
        /**
         * Suppliemental enhancement information suffix nal unit
         */
        SUFFIX_SEI,
    }

    /**
     * The result of parsing H265 data.
     * @gir-type Enum
     */
    enum H265ParserResult {
        /**
         * The parsing succeeded
         */
        OK,
        /**
         * The data to parse is broken
         */
        BROKEN_DATA,
        /**
         * The link to structure needed for the parsing couldn't be found
         */
        BROKEN_LINK,
        /**
         * An error accured when parsing
         */
        ERROR,
        /**
         * No nal found during the parsing
         */
        NO_NAL,
        /**
         * Start of the nal found, but not the end.
         */
        NO_NAL_END,
    }

    /**
     * H.265 Profiles.
     * @gir-type Enum
     */
    enum H265Profile {
        INVALID,
        /**
         * Main profile (A.3.2)
         */
        MAIN,
        /**
         * Main 10 profile (A.3.3)
         */
        MAIN_10,
        /**
         * Main Still Picture profile (A.3.4)
         */
        MAIN_STILL_PICTURE,
        /**
         * Monochrome profile (A.3.4)
         */
        MONOCHROME,
        /**
         * Monochrome 12-bits profile (A.3.4)
         */
        MONOCHROME_12,
        /**
         * Monochrome 16-bits profile (A.3.4)
         */
        MONOCHROME_16,
        /**
         * Main profile 12-bits (A.3.4)
         */
        MAIN_12,
        /**
         * Main 4:2:2 profile 10-bits (A.3.4)
         */
        MAIN_422_10,
        /**
         * Main 4:2:2 profile 12-bits (A.3.4)
         */
        MAIN_422_12,
        /**
         * Main 4:4:4 profile (A.3.4)
         */
        MAIN_444,
        /**
         * Main 4:4:4 10-bits profile (A.3.4)
         */
        MAIN_444_10,
        /**
         * Main 4:4:4 12-bits profile (A.3.4)
         */
        MAIN_444_12,
        /**
         * Main Intra profile (A.3.4)
         */
        MAIN_INTRA,
        /**
         * Main Intra 10-bits profile (A.3.4)
         */
        MAIN_10_INTRA,
        /**
         * Main Intra 12-bits profile (A.3.4)
         */
        MAIN_12_INTRA,
        /**
         * Main Intra 4:2:2 10-bits profile (A.3.4)
         */
        MAIN_422_10_INTRA,
        /**
         * Main Intra 4:2:2 12-bits profile (A.3.4)
         */
        MAIN_422_12_INTRA,
        /**
         * Main Intra 4:4:4 profile (A.3.4)
         */
        MAIN_444_INTRA,
        /**
         * Main Intra 4:4:4 10-bits profile (A.3.4)
         */
        MAIN_444_10_INTRA,
        /**
         * Main Intra 4:4:4 12-bits profile (A.3.4)
         */
        MAIN_444_12_INTRA,
        /**
         * Main Intra 4:4:4 16-bits profile (A.3.4)
         */
        MAIN_444_16_INTRA,
        /**
         * Main 4:4:4 Still Picture profile (A.3.4)
         */
        MAIN_444_STILL_PICTURE,
        /**
         * Main 4:4:4 16-bits Still Picture profile (A.3.4)
         */
        MAIN_444_16_STILL_PICTURE,
        /**
         * Monochrome 10-bits profile (A.3.5) (Since: 1.18)
         */
        MONOCHROME_10,
        /**
         * High Throughput 4:4:4 profile (A.3.6) (Since: 1.18)
         */
        HIGH_THROUGHPUT_444,
        /**
         * High Throughput 4:4:4 10-bits profile (A.3.6) (Since: 1.18)
         */
        HIGH_THROUGHPUT_444_10,
        /**
         * High Throughput 4:4:4 14-bits profile (A.3.6) (Since: 1.18)
         */
        HIGH_THROUGHPUT_444_14,
        /**
         * High Throughput 4:4:4 16-bits Intra profile (A.3.6) (Since: 1.18)
         */
        HIGH_THROUGHPUT_444_16_INTRA,
        /**
         * Screen-Extended Main profile (A.3.7) (Since: 1.18)
         */
        SCREEN_EXTENDED_MAIN,
        /**
         * Screen-Extended Main 10-bits profile (A.3.7) (Since: 1.18)
         */
        SCREEN_EXTENDED_MAIN_10,
        /**
         * Screen-Extended Main 4:4:4 profile (A.3.7) (Since: 1.18)
         */
        SCREEN_EXTENDED_MAIN_444,
        /**
         * Screen-Extended Main 4:4:4 10-bits profile (A.3.7) (Since: 1.18)
         */
        SCREEN_EXTENDED_MAIN_444_10,
        /**
         * Screen-Extended High Throughput 4:4:4 profile (A.3.7) (Since: 1.18)
         */
        SCREEN_EXTENDED_HIGH_THROUGHPUT_444,
        /**
         * Screen-Extended High Throughput 4:4:4 10-bits profile (A.3.7) (Since: 1.18)
         */
        SCREEN_EXTENDED_HIGH_THROUGHPUT_444_10,
        /**
         * Screen-Extended High Throughput 4:4:4 14-bits profile (A.3.7) (Since: 1.18)
         */
        SCREEN_EXTENDED_HIGH_THROUGHPUT_444_14,
        /**
         * Multiview Main profile (G.11.1) (Since: 1.18)
         */
        MULTIVIEW_MAIN,
        /**
         * Scalable Main profile (H.11.1) (Since: 1.18)
         */
        SCALABLE_MAIN,
        /**
         * Scalable Main 10-bits profile (H.11.1) (Since: 1.18)
         */
        SCALABLE_MAIN_10,
        /**
         * Scalable Monochrome profile (H.11.1) (Since: 1.18)
         */
        SCALABLE_MONOCHROME,
        /**
         * Scalable Monochrome 12-bits profile (H.11.1) (Since: 1.18)
         */
        SCALABLE_MONOCHROME_12,
        /**
         * Scalable Monochrome 16-bits profile (H.11.1) (Since: 1.18)
         */
        SCALABLE_MONOCHROME_16,
        /**
         * Scalable Main 4:4:4 profile (H.11.1) (Since: 1.18)
         */
        SCALABLE_MAIN_444,
        /**
         * 3D Main 4:4:4 profile (I.11.1) (Since: 1.18)
         */
        '3D_MAIN',
        MAX,
    }

    /**
     * Valid values for the profile_idc field. This is different from
     * {@link GstCodecParsers.H265Profile} as an extension idc can be used to encode a whole variety of
     * profiles.
     * @gir-type Enum
     */
    enum H265ProfileIDC {
        /**
         * Main profile (A.3.2)
         */
        MAIN,
        /**
         * Main 10 profile (A.3.3)
         */
        MAIN_10,
        /**
         * Main Still Picture profile (A.3.4)
         */
        MAIN_STILL_PICTURE,
        /**
         * Format range extensions profile (A.3.5)
         */
        FORMAT_RANGE_EXTENSION,
        /**
         * High throughput profiles (A.3.6)
         */
        HIGH_THROUGHPUT,
        /**
         * Multiview Main profiles (G.11.1) (Since: 1.18)
         */
        MULTIVIEW_MAIN,
        /**
         * Scalable Main and Scalable Main 10 profile (H.11.1) (Since: 1.18)
         */
        SCALABLE_MAIN,
        /**
         * 3D Main profile (I.11.1) (Since: 1.18)
         */
        '3D_MAIN',
        /**
         * Screen content coding extensions profiles (A.3.7)
         */
        SCREEN_CONTENT_CODING,
        /**
         * Scalable Format range extensions profiles (H.11.1) (Since: 1.18)
         */
        SCALABLE_FORMAT_RANGE_EXTENSION,
        /**
         * High throughput screen content coding extensions profiles (A.3.8) (Since: 1.18)
         */
        HIGH_THROUGHPUT_SCREEN_CONTENT_CODING_EXTENSION,
    }

    /**
     * @gir-type Enum
     */
    enum H265QuantMatrixSize {
        '4X4',
        '8X8',
        '16X16',
        '32X32',
    }

    /**
     * The type of SEI message.
     * @gir-type Enum
     */
    enum H265SEIPayloadType {
        /**
         * Buffering Period SEI Message
         */
        BUF_PERIOD,
        /**
         * Picture Timing SEI Message
         */
        PIC_TIMING,
        /**
         * Registered user data (D.2.5)
         */
        REGISTERED_USER_DATA,
        /**
         * User data unregistered (D.2.7)
         */
        USER_DATA_UNREGISTERED,
        /**
         * Recovery Point SEI Message (D.3.8)
         */
        RECOVERY_POINT,
        /**
         * Time code SEI message (D.2.27) (Since: 1.16)
         */
        TIME_CODE,
        /**
         * Mastering display colour volume information SEI message (D.2.28) (Since: 1.18)
         */
        MASTERING_DISPLAY_COLOUR_VOLUME,
        /**
         * Content light level information SEI message (D.2.35) (Since: 1.18)
         * ...
         */
        CONTENT_LIGHT_LEVEL,
    }

    /**
     * SEI pic_struct type
     * @gir-type Enum
     */
    enum H265SEIPicStructType {
        /**
         * Picture is a frame
         */
        FRAME,
        /**
         * Top field of frame
         */
        TOP_FIELD,
        /**
         * Botom field of frame
         */
        BOTTOM_FIELD,
        /**
         * Top bottom field of frame
         */
        TOP_BOTTOM,
        /**
         * bottom top field of frame
         */
        BOTTOM_TOP,
        /**
         * top bottom top field of frame
         */
        TOP_BOTTOM_TOP,
        /**
         * bottom top bottom field of frame
         */
        BOTTOM_TOP_BOTTOM,
        /**
         * indicates that the frame should
         *  be displayed two times consecutively
         */
        FRAME_DOUBLING,
        /**
         * indicates that the frame should be
         *  displayed three times consecutively
         */
        FRAME_TRIPLING,
        /**
         * top field paired with
         *  previous bottom field in output order
         */
        TOP_PAIRED_PREVIOUS_BOTTOM,
        /**
         * bottom field paried with
         *  previous top field in output order
         */
        BOTTOM_PAIRED_PREVIOUS_TOP,
        /**
         * top field paired with next
         *  bottom field in output order
         */
        TOP_PAIRED_NEXT_BOTTOM,
        /**
         * bottom field paired with
         *  next top field in output order
         */
        BOTTOM_PAIRED_NEXT_TOP,
    }

    /**
     * Type of Picture slice
     * @gir-type Enum
     */
    enum H265SliceType {
        B_SLICE,
        P_SLICE,
        I_SLICE,
    }

    /**
     * Indicates the types of Adaptation parameter set (APS) as
     * Table 6 - APS parameters type codes and types of APS parameters.
     * @gir-type Enum
     * @since 1.26
     */
    enum H266APSType {
        /**
         * ALF parameters.
         */
        ALF_APS,
        /**
         * LMCS parameters.
         */
        LMCS_APS,
        /**
         * Scaling list parameters.
         */
        SCALING_APS,
        APS_TYPE_MAX,
    }

    /**
     * H.266 level.
     * @gir-type Enum
     * @since 1.26
     */
    enum H266Level {
        L1_0,
        L2_0,
        L2_1,
        L3_0,
        L3_1,
        L4_0,
        L4_1,
        L5_0,
        L5_1,
        L5_2,
        L6_0,
        L6_1,
        L6_2,
        L6_3,
    }

    /**
     * Indicates the types of H266 Nal Units as
     * table 5 - NAL unit type codes and NAL unit type classes.
     * @gir-type Enum
     * @since 1.26
     */
    enum H266NalUnitType {
        /**
         * Coded slice of a trailing picture or subpicture.
         */
        SLICE_TRAIL,
        /**
         * Coded slice of an STSA picture or subpicture.
         */
        SLICE_STSA,
        /**
         * Coded slice of a RADL picture or subpicture.
         */
        SLICE_RADL,
        /**
         * Coded slice of a RASL picture or subpicture.
         */
        SLICE_RASL,
        /**
         * Coded slice of an IDR picture or subpicture.
         */
        SLICE_IDR_W_RADL,
        /**
         * Coded slice of an IDR picture or subpicture.
         */
        SLICE_IDR_N_LP,
        /**
         * Coded slice of a CRA picture or subpicture.
         */
        SLICE_CRA,
        /**
         * Coded slice of a GDR picture or subpicture.
         */
        SLICE_GDR,
        /**
         * Operating point information.
         */
        OPI,
        /**
         * Decoding capability information.
         */
        DCI,
        /**
         * Video parameter set(VPS).
         */
        VPS,
        /**
         * Sequence parameter set (SPS).
         */
        SPS,
        /**
         * Picture parameter set (PPS).
         */
        PPS,
        /**
         * Prefix Adaptation parameter set (APS).
         */
        PREFIX_APS,
        /**
         * Suffix Adaptation parameter set (APS).
         */
        SUFFIX_APS,
        /**
         * Picture header (PH).
         */
        PH,
        /**
         * AU delimiter.
         */
        AUD,
        /**
         * End of sequence (EOS).
         */
        EOS,
        /**
         * End of bitstream (EOB).
         */
        EOB,
        /**
         * Prefix Supplemental enhancement information.
         */
        PREFIX_SEI,
        /**
         * Suffix Suppliemental enhancement information.
         */
        SUFFIX_SEI,
        /**
         * Filler data (FD).
         */
        FD,
    }

    /**
     * The result of parsing H266 data.
     * @gir-type Enum
     * @since 1.26
     */
    enum H266ParserResult {
        /**
         * The parsing succeeded.
         */
        OK,
        /**
         * The data to parse is broken.
         */
        BROKEN_DATA,
        /**
         * The link to structure needed for the parsing
         *  couldn't be found.
         */
        BROKEN_LINK,
        /**
         * An error accured when parsing.
         */
        ERROR,
        /**
         * No nal found during the parsing.
         */
        NO_NAL,
        /**
         * Start of the nal found, but not the end.
         */
        NO_NAL_END,
    }

    /**
     * H.266 Profiles.
     * @gir-type Enum
     * @since 1.26
     */
    enum H266Profile {
        INVALID,
        NONE,
        INTRA,
        STILL_PICTURE,
        /**
         * Main 10 profile (A.3.1).
         */
        MAIN_10,
        /**
         * Main 10 Still Picture profile (A.3.1).
         */
        MAIN_10_STILL_PICTURE,
        /**
         * MultiLayer Main 10 profile (A.3.3).
         */
        MULTILAYER_MAIN_10,
        /**
         * MultiLayer Main 10 Still
         *  Picture profile (A.3.3).
         */
        MULTILAYER_MAIN_10_STILL_PICTURE,
        /**
         * Main 10 4:4:4 profile (A.3.2).
         */
        MAIN_10_444,
        /**
         * Main 10 4:4:4 Still Picture
         *  profile (A.3.2).
         */
        MAIN_10_444_STILL_PICTURE,
        /**
         * MultiLayer Main 10 4:4:4
         *  profile (A.3.4).
         */
        MULTILAYER_MAIN_10_444,
        /**
         * MultiLayer Main 10
         *  4:4:4 Still Picture profile (A.3.4).
         */
        MULTILAYER_MAIN_10_444_STILL_PICTURE,
        /**
         * Main 12 profile (A.3.5).
         */
        MAIN_12,
        /**
         * Main 12 4:4:4 profile (A.3.5).
         */
        MAIN_12_444,
        /**
         * Main 16 4:4:4 profile (A.3.5).
         */
        MAIN_16_444,
        /**
         * Main 12 Intra profile (A.3.5).
         */
        MAIN_12_INTRA,
        /**
         * Main 12 4:4:4 Intra profile (A.3.5).
         */
        MAIN_12_444_INTRA,
        /**
         * Main 16 4:4:4 Intra profile (A.3.5).
         */
        MAIN_16_444_INTRA,
        /**
         * Main 12 Still Picture profile (A.3.5).
         */
        MAIN_12_STILL_PICTURE,
        /**
         * Main 12 4:4:4 Still Picture
         *  profile (A.3.5).
         */
        MAIN_12_444_STILL_PICTURE,
        /**
         * Main 16 4:4:4 Still Picture
         *  profile (A.3.5).
         */
        MAIN_16_444_STILL_PICTURE,
        MAX,
    }

    /**
     * The type of SEI message.
     * More other SEIs are specified in Rec.ITU-T H.274 | ISO/IEC 23002-7.
     * @gir-type Enum
     * @since 1.26
     */
    enum H266SEIPayloadType {
        /**
         * Buffering Period SEI Message.
         */
        BUF_PERIOD,
        /**
         * Picture Timing SEI Message.
         */
        PIC_TIMING,
        /**
         * Registered user data.
         */
        REGISTERED_USER_DATA,
        /**
         * User data Unregistered.
         */
        USER_DATA_UNREGISTERED,
        /**
         * DU Information SEI Message.
         */
        DU_INFO,
        SCALABLE_NESTING,
        /**
         * Frame Field Info SEI Message.
         */
        FRAME_FIELD_INFO,
        /**
         * Subpicture Level Information SEI.
         */
        SUBPIC_LEVEL_INFO,
    }

    /**
     * Types of Picture slice.
     * @gir-type Enum
     * @since 1.26
     */
    enum H266SliceType {
        /**
         * B slice type.
         */
        B_SLICE,
        /**
         * P slice type.
         */
        P_SLICE,
        /**
         * I slice type.
         */
        I_SLICE,
    }

    /**
     * @gir-type Enum
     */
    enum JPEG2000Colorspace {
        /**
         * no color space
         */
        NONE,
        /**
         * standard RGB color space
         */
        RGB,
        /**
         * standard YUV color space
         */
        YUV,
        /**
         * monochrome color space
         */
        GRAY,
    }

    /**
     * Sampling values from RF 5371 for JPEG 2000 over RTP : https://datatracker.ietf.org/doc/rfc5371/C
     * Note: sampling extensions that are not listed in the RFC are signified by an _EXT at the end of the enum
     * @gir-type Enum
     */
    enum JPEG2000Sampling {
        /**
         * no sampling
         */
        NONE,
        /**
         * standard Red, Green, Blue color space.
         */
        RGB,
        /**
         * standard Blue, Green, Red color space.
         */
        BGR,
        /**
         * standard Red, Green, Blue, Alpha color space.
         */
        RGBA,
        /**
         * standard Blue, Green, Red, Alpha color space.
         */
        BGRA,
        /**
         * standard YCbCr color space; no subsampling.
         */
        YBR444,
        /**
         * standard YCbCr color space; Cb and Cr are subsampled horizontally by 1/2.
         */
        YBR422,
        /**
         * standard YCbCr color space; Cb and Cr are subsampled horizontally and vertically by 1/2.
         */
        YBR420,
        /**
         * standard YCbCr color space; Cb and Cr are subsampled vertically by 1/4 alternating the Cb and Cr component.
         */
        YBR410,
        /**
         * basically, a single component image of just multilevels of grey.
         */
        GRAYSCALE,
        /**
         * standard YCbCr color space, alpha channel, no subsampling,
         */
        YBRA4444_EXT,
        /**
         * standard YCbCr color space; Cb and Cr are subsampled vertically by 1/4
         */
        YBR411,
    }

    /**
     * The result of writing JPEG data into bit stream.
     * @gir-type Enum
     * @since 1.24
     */
    enum JpegBitWriterResult {
        /**
         * The writing succeeded
         */
        OK,
        /**
         * The input data to write is invalid
         */
        INVALID_DATA,
        /**
         * The output does not have enough size
         */
        NO_MORE_SPACE,
        /**
         * An general error occurred when writing
         */
        ERROR,
    }

    /**
     * JPEG entropy coding mode.
     * @gir-type Enum
     * @since 1.6
     */
    enum JpegEntropyCodingMode {
        /**
         * Huffman coding
         */
        HUFFMAN,
        /**
         * arithmetic coding
         */
        ARITHMETIC,
    }

    /**
     * Indicates the type of JPEG segment.
     * @gir-type Enum
     * @since 1.6
     */
    enum JpegMarker {
        /**
         * Start of frame marker code (Baseline)
         */
        SOF0,
        /**
         * Start of frame marker code (Extended Sequential, Huffman)
         */
        SOF1,
        /**
         * Start of frame marker code (Progressive, Huffman)
         */
        SOF2,
        /**
         * Start of frame marker code (Lossless, Huffman)
         */
        SOF3,
        /**
         * Start of frame marker code (Differential Sequential, Huffman)
         */
        SOF5,
        /**
         * Start of frame marker code (Differential Progressive, Huffman)
         */
        SOF6,
        /**
         * Start of frame marker code (Differential Lossless, Huffman)
         */
        SOF7,
        /**
         * Start of frame marker code (Extended Sequential, Arithmetic)
         */
        SOF9,
        /**
         * Start of frame marker code (Progressive, Arithmetic)
         */
        SOF10,
        /**
         * Start of frame marker code (Lossless, Arithmetic)
         */
        SOF11,
        /**
         * Start of frame marker code (Differential Sequential, Arithmetic)
         */
        SOF13,
        /**
         * Start of frame marker code (Differential Progressive, Arithmetic)
         */
        SOF14,
        /**
         * Start of frame marker code (Differential Lossless, Arithmetic)
         */
        SOF15,
        /**
         * Huffman table marker code
         */
        DHT,
        /**
         * Arithmetic coding marker code
         */
        DAC,
        RST0,
        RST1,
        RST2,
        RST3,
        RST4,
        RST5,
        RST6,
        RST7,
        /**
         * Start of image marker code
         */
        SOI,
        /**
         * End of image marker code
         */
        EOI,
        /**
         * Start of scan marker code
         */
        SOS,
        /**
         * Define quantization table marker code
         */
        DQT,
        /**
         * Define number of lines marker code
         */
        DNL,
        /**
         * Define restart interval marker code
         */
        DRI,
        /**
         * Application segment 0 marker code
         */
        APP0,
        /**
         * Application segment 1 marker code
         */
        APP1,
        /**
         * Application segment 2 marker code
         */
        APP2,
        /**
         * Application segment 3 marker code
         */
        APP3,
        /**
         * Application segment 4 marker code
         */
        APP4,
        /**
         * Application segment 5 marker code
         */
        APP5,
        /**
         * Application segment 6 marker code
         */
        APP6,
        /**
         * Application segment 7 marker code
         */
        APP7,
        /**
         * Application segment 8 marker code
         */
        APP8,
        /**
         * Application segment 9 marker code
         */
        APP9,
        /**
         * Application segment 10 marker code
         */
        APP10,
        /**
         * Application segment 11 marker code
         */
        APP11,
        /**
         * Application segment 12 marker code
         */
        APP12,
        /**
         * Application segment 13 marker code
         */
        APP13,
        /**
         * Application segment 14 marker code
         */
        APP14,
        /**
         * Application segment 15 marker code
         */
        APP15,
        /**
         * Comment marker code
         */
        COM,
    }

    /**
     * JPEG encoding processes.
     * @gir-type Enum
     * @since 1.6
     */
    enum JpegProfile {
        /**
         * Baseline DCT
         */
        BASELINE,
        /**
         * Extended sequential DCT
         */
        EXTENDED,
        /**
         * Progressive DCT
         */
        PROGRESSIVE,
        /**
         * Lossless (sequential)
         */
        LOSSLESS,
    }

    /**
     * Defines the different pixel aspect ratios as
     * defined in: Table 6-12 -- Meaning of pixel aspect ratio
     * @gir-type Enum
     */
    enum Mpeg4AspectRatioInfo {
        /**
         * 1:1 square
         */
        SQUARE,
        /**
         * 12:11 (625-type for 4:3 picture)
         */
        '625_TYPE_4_3',
        /**
         * 10:11 (525-type for 4:3 picture)
         */
        '525_TYPE_4_3',
        /**
         * 16:11 (625-type stretched for 16:9 picture)
         */
        '625_TYPE_16_9',
        /**
         * 40:33 (525-type stretched for 16:9 picture)
         */
        '525_TYPE_16_9',
        /**
         * Extended par
         */
        EXTENDED_PAR,
    }

    /**
     * The chroma format in use as
     * defined in: Table 6-13 -- Meaning of chroma_format
     * @gir-type Enum
     */
    enum Mpeg4ChromaFormat {
        MPEG4_CHROMA_4_2_0,
    }

    /**
     * Different levels as defined in:
     * 9- Profiles and levels
     *
     * It is computed using:
     * Table G.1 — FLC table for profile_and_level_indication
     * @gir-type Enum
     */
    enum Mpeg4Level {
        LEVEL0,
        LEVEL1,
        LEVEL2,
        LEVEL3,
        LEVEL3B,
        LEVEL4,
        LEVEL5,
        LEVEL_RESERVED,
    }

    /**
     * Result type of any parsing function.
     * @gir-type Enum
     */
    enum Mpeg4ParseResult {
        /**
         * The parsing went well
         */
        OK,
        /**
         * The bitstream was broken
         */
        BROKEN_DATA,
        /**
         * There was no packet in the buffer
         */
        NO_PACKET,
        /**
         * There was no packet end in the buffer
         */
        NO_PACKET_END,
        ERROR,
    }

    /**
     * Different defined profiles as defined in:
     * 9- Profiles and levels
     *
     * It is computed using:
     * Table G.1 — FLC table for profile_and_level_indication
     * @gir-type Enum
     */
    enum Mpeg4Profile {
        CORE,
        MAIN,
        N_BIT,
        SIMPLE,
        HYBRID,
        RESERVED,
        SIMPLE_FBA,
        CORE_STUDIO,
        SIMPLE_STUDIO,
        CORE_SCALABLE,
        ADVANCED_CORE,
        ADVANCED_SIMPLE,
        SIMPLE_SCALABLE,
        SCALABLE_TEXTURE,
        SIMPLE_FACE_ANIMATION,
        BASIC_ANIMATED_TEXTURE,
        ADVANCED_REALTIME_SIMPLE,
        ADVANCED_SCALABLE_TEXTURE,
        FINE_GRANULARITY_SCALABLE,
        ADVANCED_CODING_EFFICIENCY,
    }

    /**
     * Indicates the usage of static sprite coding
     * or global motion compensation (GMC) as defined in:
     * Table V2 - 2 -- Meaning of sprite_enable codewords
     * @gir-type Enum
     */
    enum Mpeg4SpriteEnable {
        UNUSED,
        STATIC,
        GMG,
    }

    /**
     * Defines the different startcodes present in the bitstream as
     * defined in: Table 6-3 — Start code values
     * @gir-type Enum
     */
    enum Mpeg4StartCode {
        VIDEO_OBJ_FIRST,
        VIDEO_OBJ_LAST,
        VIDEO_LAYER_FIRST,
        VIDEO_LAYER_LAST,
        VISUAL_OBJ_SEQ_START,
        VISUAL_OBJ_SEQ_END,
        USER_DATA,
        GROUP_OF_VOP,
        VIDEO_SESSION_ERR,
        VISUAL_OBJ,
        VIDEO_OBJ_PLANE,
        FBA,
        FBA_PLAN,
        MESH,
        MESH_PLAN,
        STILL_TEXTURE_OBJ,
        TEXTURE_SPATIAL,
        TEXTURE_SNR_LAYER,
        TEXTURE_TILE,
        SHAPE_LAYER,
        STUFFING,
        SYSTEM_FIRST,
        SYSTEM_LAST,
        RESYNC,
    }

    /**
     * The vop coding types as defined in:
     * Table 6-20 -- Meaning of vop_coding_type
     * @gir-type Enum
     */
    enum Mpeg4VideoObjectCodingType {
        /**
         * intra-coded (I)
         */
        I_VOP,
        /**
         * predictive-coded (P)
         */
        P_VOP,
        /**
         * bidirectionally-predictive-coded (B)
         */
        B_VOP,
        /**
         * sprite (S)
         */
        S_VOP,
    }

    /**
     * The different video object layer shapes as defined in:
     * Table 6-16 — Video Object Layer shape type
     * @gir-type Enum
     */
    enum Mpeg4VideoObjectLayerShape {
        RECTANGULAR,
        BINARY,
        BINARY_ONLY,
        GRAYSCALE,
    }

    /**
     * Defines the different visual object types as
     * defined in: Table 6-5 -- Meaning of visual object type
     * @gir-type Enum
     */
    enum Mpeg4VisualObjectType {
        VIDEO_ID,
        STILL_TEXTURE_ID,
        STILL_MESH_ID,
        STILL_FBA_ID,
        STILL_3D_MESH_ID,
    }

    /**
     * Chroma subsampling type.
     * @gir-type Struct
     */
    class MpegVideoChromaFormat {
        static $gtype: GObject.GType<MpegVideoChromaFormat>;

        // Static fields

        /**
         * Invalid (reserved for future use)
         */
        static RES: number;
        /**
         * 4:2:0 subsampling
         */
        static '420': number;
        /**
         * 4:2:2 subsampling
         */
        static '422': number;
        /**
         * 4:4:4 (non-subsampled)
         */
        static '444': number;
    }

    /**
     * Mpeg-2 Levels.
     * @gir-type Enum
     */
    enum MpegVideoLevel {
        /**
         * High-P level (HL Progressive)
         */
        HIGH_P,
        /**
         * High level (HL)
         */
        HIGH,
        /**
         * High 1440 level (H-14)
         */
        HIGH_1440,
        /**
         * Main level (ML)
         */
        MAIN,
        /**
         * Low level (LL)
         */
        LOW,
    }

    /**
     * Indicates what type of packets are in this block, some are mutually
     * exclusive though - ie, sequence packs are accumulated separately. GOP &
     * Picture may occur together or separately.
     * @gir-type Enum
     */
    enum MpegVideoPacketExtensionCode {
        /**
         * Sequence extension code
         */
        SEQUENCE,
        /**
         * Sequence Display extension code
         */
        SEQUENCE_DISPLAY,
        /**
         * Quantization Matrix extension code
         */
        QUANT_MATRIX,
        /**
         * Sequence Scalable extension code
         */
        SEQUENCE_SCALABLE,
        /**
         * Picture coding extension
         */
        PICTURE,
    }

    /**
     * Indicates the type of MPEG packet
     * @gir-type Enum
     */
    enum MpegVideoPacketTypeCode {
        /**
         * Picture packet starting code
         */
        PICTURE,
        /**
         * Slice min packet starting code
         */
        SLICE_MIN,
        /**
         * Slice max packet starting code
         */
        SLICE_MAX,
        /**
         * User data packet starting code
         */
        USER_DATA,
        /**
         * Sequence packet starting code
         */
        SEQUENCE,
        /**
         * Extension packet starting code
         */
        EXTENSION,
        /**
         * Sequence end packet code
         */
        SEQUENCE_END,
        /**
         * Group of Picture packet starting code
         */
        GOP,
        /**
         * None packet code
         */
        NONE,
    }

    /**
     * Picture structure type.
     * @gir-type Enum
     */
    enum MpegVideoPictureStructure {
        /**
         * Top field
         */
        TOP_FIELD,
        /**
         * Bottom field
         */
        BOTTOM_FIELD,
        /**
         * Frame picture
         */
        FRAME,
    }

    /**
     * Picture type.
     * @gir-type Enum
     */
    enum MpegVideoPictureType {
        /**
         * Intra-coded (I) frame
         */
        I,
        /**
         * Predictive-codec (P) frame
         */
        P,
        /**
         * Bidirectionally predictive-coded (B) frame
         */
        B,
        /**
         * D frame
         */
        D,
    }

    /**
     * Mpeg-2 Profiles.
     * @gir-type Struct
     */
    class MpegVideoProfile {
        static $gtype: GObject.GType<MpegVideoProfile>;

        // Static fields

        /**
         * 4:2:2 profile (422)
         */
        static '422': number;
        /**
         * High profile (HP)
         */
        static HIGH: number;
        /**
         * Spatially Scalable profile (Spatial)
         */
        static SPATIALLY_SCALABLE: number;
        /**
         * SNR Scalable profile (SNR)
         */
        static SNR_SCALABLE: number;
        /**
         * Main profile (MP)
         */
        static MAIN: number;
        /**
         * Simple profile (SP)
         */
        static SIMPLE: number;
    }

    /**
     * @gir-type Enum
     */
    enum MpegVideoSequenceScalableMode {
        /**
         * Data partitioning
         */
        DATA_PARTITIONING,
        /**
         * Spatial Scalability
         */
        SPATIAL,
        /**
         * SNR Scalability
         */
        SNR,
        /**
         * Temporal Scalability
         */
        TEMPORAL,
    }

    /**
     * @gir-type Enum
     */
    enum VC1Condover {
        NONE,
        ALL,
        SELECT,
    }

    /**
     * @gir-type Enum
     */
    enum VC1DQProfile {
        FOUR_EDGES,
        DOUBLE_EDGES,
        SINGLE_EDGE,
        ALL_MBS,
    }

    /**
     * @gir-type Enum
     */
    enum VC1FrameCodingMode {
        FRAME_PROGRESSIVE,
        FRAME_INTERLACE,
        FIELD_INTERLACE,
    }

    /**
     * @gir-type Enum
     */
    enum VC1Level {
        LOW,
        MEDIUM,
        HIGH,
        L0,
        L1,
        L2,
        L3,
        L4,
        UNKNOWN,
    }

    /**
     * @gir-type Enum
     */
    enum VC1MvMode {
        '1MV_HPEL_BILINEAR',
        '1MV',
        '1MV_HPEL',
        MIXED_MV,
        INTENSITY_COMP,
    }

    /**
     * @gir-type Enum
     */
    enum VC1ParserResult {
        OK,
        BROKEN_DATA,
        NO_BDU,
        NO_BDU_END,
        ERROR,
    }

    /**
     * @gir-type Enum
     */
    enum VC1PictureType {
        P,
        B,
        I,
        BI,
        SKIPPED,
    }

    /**
     * @gir-type Enum
     */
    enum VC1Profile {
        SIMPLE,
        MAIN,
        RESERVED,
        ADVANCED,
    }

    /**
     * @gir-type Enum
     */
    enum VC1QuantizerSpec {
        IMPLICITLY,
        EXPLICITLY,
        NON_UNIFORM,
        UNIFORM,
    }

    /**
     * @gir-type Enum
     */
    enum VC1StartCode {
        END_OF_SEQ,
        SLICE,
        FIELD,
        FRAME,
        ENTRYPOINT,
        SEQUENCE,
        SLICE_USER,
        FIELD_USER,
        FRAME_USER,
        ENTRY_POINT_USER,
        SEQUENCE_USER,
    }

    /**
     * @gir-type Struct
     */
    class VP9Profile {
        static $gtype: GObject.GType<VP9Profile>;

        // Static fields

        static '0': number;
        static '1': number;
        static '2': number;
        static '3': number;
        static UNDEFINED: number;
    }

    /**
     * VP8 frame types
     * @gir-type Enum
     * @since 1.26
     */
    enum Vp8FrameType {
        /**
         * Key frame, only have intra blocks
         */
        KEY_FRAME,
        /**
         * Inter frame, both intra and inter blocks
         */
        INTER_FRAME,
    }

    /**
     * The result of parsing VP8 data.
     * @gir-type Enum
     */
    enum Vp8ParserResult {
        /**
         * The parsing succeeded
         */
        OK,
        /**
         * The data to parse is broken
         */
        BROKEN_DATA,
        /**
         * An error accured when parsing
         */
        ERROR,
    }

    /**
     * Reference Frame types
     * @gir-type Enum
     * @since 1.26
     */
    enum Vp8RefFrameType {
        /**
         * Intra reference frame
         */
        INTRA,
        /**
         * Last Reference frame
         */
        LAST,
        /**
         * Golden Reference frame
         */
        GOLDEN,
        /**
         * Alternate Reference frame
         */
        ALTREF,
        MAX,
    }

    /**
     * Bit depths of encoded frames
     * @gir-type Struct
     */
    class Vp9BitDepth {
        static $gtype: GObject.GType<Vp9BitDepth>;

        // Static fields

        /**
         * Bit depth is 8
         * `GST_VP9_BIT_DEPTH_10` Bit depth is 10
         */
        static '8': number;
        static '10': number;
        /**
         * Bit depth is 12
         */
        static '12': number;
    }

    /**
     * Possible color value ranges
     * @gir-type Enum
     * @since 1.8
     */
    enum Vp9ColorRange {
        /**
         * Y range is [16-235], UV range is [16-240]
         */
        LIMITED,
        /**
         * Full range for Y,U and V [0-255]
         */
        FULL,
    }

    /**
     * Supported ColorSpace standards
     * @gir-type Enum
     * @since 1.8
     */
    enum Vp9ColorSpace {
        /**
         * Unknown color space
         */
        UNKNOWN,
        /**
         * BT.601
         */
        BT_601,
        /**
         * BT.709
         */
        BT_709,
        /**
         * SMPTE.170
         */
        SMPTE_170,
        /**
         * SMPTE.240
         */
        SMPTE_240,
        /**
         * BT.2020
         */
        BT_2020,
        RESERVED_2,
        /**
         * sRGB
         */
        SRGB,
    }

    /**
     * VP9 frame types
     * @gir-type Enum
     * @since 1.8
     */
    enum Vp9FrameType {
        /**
         * Key frame, only have intra blocks
         */
        KEY_FRAME,
        /**
         * Inter frame, both intra and inter blocks
         */
        INTER_FRAME,
    }

    /**
     * Interpolation Filters Types
     * @gir-type Enum
     * @since 1.8
     */
    enum Vp9InterpolationFilter {
        /**
         * EightTap interpolation filter
         */
        EIGHTTAP,
        /**
         * Smooth interpolation filter
         */
        EIGHTTAP_SMOOTH,
        /**
         * Shart interpolation filter
         */
        EIGHTTAP_SHARP,
        /**
         * Bilinear interpolation filter
         */
        BILINEAR,
        /**
         * Selectable interpolation filter
         */
        SWITCHABLE,
    }

    /**
     * @gir-type Enum
     */
    enum Vp9ParserResult {
        OK,
        BROKEN_DATA,
        ERROR,
    }

    /**
     * Reference Frame types
     * @gir-type Enum
     * @since 1.8
     */
    enum Vp9RefFrameType {
        /**
         * Intra reference frame
         */
        INTRA,
        /**
         * Last Reference frame
         */
        LAST,
        /**
         * Golden Reference frame
         */
        GOLDEN,
        /**
         * Alternate Reference frame
         */
        ALTREF,
        MAX,
    }

    const AV1_CDEF_MAX: number;
    const AV1_DIV_LUT_BITS: number;
    const AV1_DIV_LUT_NUM: number;
    const AV1_DIV_LUT_PREC_BITS: number;
    const AV1_GM_ABS_ALPHA_BITS: number;
    const AV1_GM_ABS_TRANS_BITS: number;
    const AV1_GM_ABS_TRANS_ONLY_BITS: number;
    const AV1_GM_ALPHA_PREC_BITS: number;
    const AV1_GM_TRANS_ONLY_PREC_BITS: number;
    const AV1_GM_TRANS_PREC_BITS: number;
    const AV1_MAX_LOOP_FILTER: number;
    const AV1_MAX_NUM_CB_POINTS: number;
    const AV1_MAX_NUM_CR_POINTS: number;
    const AV1_MAX_NUM_PLANES: number;
    const AV1_MAX_NUM_POS_LUMA: number;
    const AV1_MAX_NUM_SPATIAL_LAYERS: number;
    const AV1_MAX_NUM_TEMPORAL_LAYERS: number;
    const AV1_MAX_NUM_Y_POINTS: number;
    const AV1_MAX_OPERATING_POINTS: number;
    const AV1_MAX_SEGMENTS: number;
    const AV1_MAX_TEMPORAL_GROUP_REFERENCES: number;
    const AV1_MAX_TEMPORAL_GROUP_SIZE: number;
    const AV1_MAX_TILE_AREA: number;
    const AV1_MAX_TILE_COLS: number;
    const AV1_MAX_TILE_COUNT: number;
    const AV1_MAX_TILE_ROWS: number;
    const AV1_MAX_TILE_WIDTH: number;
    const AV1_PRIMARY_REF_NONE: number;
    const AV1_REFS_PER_FRAME: number;
    const AV1_RESTORATION_TILESIZE_MAX: number;
    const AV1_SEG_LVL_ALT_Q: number;
    const AV1_SEG_LVL_MAX: number;
    const AV1_SEG_LVL_REF_FRAME: number;
    const AV1_SELECT_INTEGER_MV: number;
    const AV1_SELECT_SCREEN_CONTENT_TOOLS: number;
    const AV1_SUPERRES_DENOM_BITS: number;
    const AV1_SUPERRES_DENOM_MIN: number;
    const AV1_SUPERRES_NUM: number;
    const AV1_TOTAL_REFS_PER_FRAME: number;
    const AV1_WARPEDMODEL_PREC_BITS: number;
    const AV1_WARP_PARAM_REDUCE_BITS: number;
    const CAPS_FEATURE_META_GST_LCEVC_META: string;
    const H264_MAX_PPS_COUNT: number;
    const H264_MAX_SPS_COUNT: number;
    const H264_MAX_VIEW_COUNT: number;
    const H264_MAX_VIEW_ID: number;
    const H265_MAX_PPS_COUNT: number;
    const H265_MAX_SPS_COUNT: number;
    const H265_MAX_SUB_LAYERS: number;
    const H265_MAX_VPS_COUNT: number;
    const H265_RESERVED_IRAP_NAL_TYPE_MAX: number;
    const H265_RESERVED_IRAP_NAL_TYPE_MIN: number;
    const H265_RESERVED_NON_IRAP_NAL_TYPE_MAX: number;
    const H265_RESERVED_NON_IRAP_NAL_TYPE_MIN: number;
    const H265_RESERVED_NON_IRAP_SUBLAYER_NAL_TYPE_MAX: number;
    const H265_RESERVED_NON_IRAP_SUBLAYER_NAL_TYPE_MIN: number;
    const H265_RESERVED_NON_VCL_NAL_TYPE_MAX: number;
    const H265_RESERVED_NON_VCL_NAL_TYPE_MIN: number;
    const H265_UNSPECIFIED_NON_VCL_NAL_TYPE_MAX: number;
    const H265_UNSPECIFIED_NON_VCL_NAL_TYPE_MIN: number;
    const H266_MAX_APS_COUNT: number;
    const H266_MAX_CPB_CNT: number;
    const H266_MAX_CTUS_IN_PICTURE: number;
    const H266_MAX_DECODING_UNITS_IN_PIC_TIMING: number;
    const H266_MAX_DPB_SIZE: number;
    const H266_MAX_ENTRY_POINTS: number;
    const H266_MAX_HEIGHT: number;
    const H266_MAX_LAYERS: number;
    const H266_MAX_LUMA_PS: number;
    const H266_MAX_POINTS_IN_QP_TABLE: number;
    const H266_MAX_PPS_COUNT: number;
    const H266_MAX_REF_ENTRIES: number;
    const H266_MAX_REF_PIC_LISTS: number;
    const H266_MAX_SAMPLE_ARRAYS: number;
    const H266_MAX_SLICES_PER_AU: number;
    const H266_MAX_SLI_REF_LEVELS: number;
    const H266_MAX_SPS_COUNT: number;
    const H266_MAX_SUBLAYERS: number;
    const H266_MAX_SUB_PROFILES: number;
    const H266_MAX_TILES_PER_AU: number;
    const H266_MAX_TILE_COLUMNS: number;
    const H266_MAX_TOTAL_NUM_OLSS: number;
    const H266_MAX_VPS_COUNT: number;
    const H266_MAX_WIDTH: number;
    const H266_NUM_ALF_FILTERS: number;
    const JPEG2000_COLORSPACE_LIST: string;
    const JPEG2000_SAMPLING_LIST: string;
    /**
     * Maximum number of image components in a frame (Nf).
     * @since 1.6
     */
    const JPEG_MAX_FRAME_COMPONENTS: number;
    /**
     * Number of elements in the quantization table.
     * @since 1.6
     */
    const JPEG_MAX_QUANT_ELEMENTS: number;
    /**
     * Maximum number of image components in a scan (Ns).
     * @since 1.6
     */
    const JPEG_MAX_SCAN_COMPONENTS: number;
    /**
     * The `bfraction` variable should be divided
     * by this constant to have the actual value.
     */
    const VC1_BFRACTION_BASIS: number;
    const VC1_BFRACTION_PTYPE_BI: number;
    const VC1_BFRACTION_RESERVED: number;
    const VC1_MAX_HRD_NUM_LEAKY_BUCKETS: number;
    const VP8_MAX_REF_FRAMES: number;
    const VP9_FRAME_CONTEXTS_LOG2: number;
    const VP9_FRAME_MARKER: number;
    const VP9_MAX_FRAMES_IN_SUPERFRAME: number;
    const VP9_MAX_LOOP_FILTER: number;
    const VP9_MAX_MODE_LF_DELTAS: number;
    const VP9_MAX_PROB: number;
    const VP9_MAX_REF_LF_DELTAS: number;
    const VP9_MAX_SEGMENTS: number;
    const VP9_MAX_SHARPNESS: number;
    const VP9_PREDICTION_PROBS: number;
    const VP9_REFS_PER_FRAME: number;
    const VP9_REF_FRAMES: number;
    const VP9_REF_FRAMES_LOG2: number;
    const VP9_SEGMENT_ABSDATA: number;
    const VP9_SEGMENT_DELTADATA: number;
    const VP9_SEG_TREE_PROBS: number;
    const VP9_SUPERFRAME_MARKER: number;
    const VP9_SYNC_CODE: number;
    /**
     * Generating the according AV1 bit stream OBU by providing the frame header.
     * @param frame_hdr the frame header of {@link GstCodecParsers.AV1FrameHeaderOBU} to write
     * @param seq_hdr the sequence header of {@link GstCodecParsers.AV1SequenceHeaderOBU} to refer
     * @param temporal_id specifies the temporal level of the data contained in the OBU.
     * @param spatial_id specifies the spatial level of the data contained in the OBU.
     * @param size_field whether the OBU header contains the OBU size.
     * @param size the size in bytes of the input and output
     * @returns a {@link GstCodecParsers.AV1BitWriterResult}
     * @since 1.22
     */
    function av1_bit_writer_frame_header_obu(
        frame_hdr: AV1FrameHeaderOBU,
        seq_hdr: AV1SequenceHeaderOBU,
        temporal_id: number,
        spatial_id: number,
        size_field: boolean,
        size: number,
    ): [AV1BitWriterResult, number, number];
    /**
     * While Generating the according AV1 bit stream OBU by providing the frame
     * header, this function also return bit offsets of qindex, segmentation and
     * cdef, etc. These offsets can help to change the content of these fields
     * later. This function is useful if the encoder may change the content of
     * the frame header after generating it. For example, some HW needs user to
     * provide a frame header before the real encoding job, and it will change
     * the according fields in the frame header during the real encoding job.
     * @param frame_hdr the frame header of {@link GstCodecParsers.AV1FrameHeaderOBU} to write
     * @param seq_hdr the sequence header of {@link GstCodecParsers.AV1SequenceHeaderOBU} to refer
     * @param temporal_id specifies the temporal level of the data contained in the OBU.
     * @param spatial_id specifies the spatial level of the data contained in the OBU.
     * @param size_field whether the OBU header contains the OBU size.
     * @param size_field_size >0 means a fixed OBU header size field.
     * @param size the size in bytes of the input and output
     * @returns a {@link GstCodecParsers.AV1BitWriterResult}
     * @since 1.22
     */
    function av1_bit_writer_frame_header_obu_with_offsets(
        frame_hdr: AV1FrameHeaderOBU,
        seq_hdr: AV1SequenceHeaderOBU,
        temporal_id: number,
        spatial_id: number,
        size_field: boolean,
        size_field_size: number,
        size: number,
    ): [AV1BitWriterResult, number, number, number, number, number, number, number];
    /**
     * Generating the according AV1 bit stream OBU by providing the meta data.
     * @param metadata the meta data of {@link GstCodecParsers.AV1MetadataOBU} to write
     * @param temporal_id specifies the temporal level of the data contained in the OBU.
     * @param spatial_id specifies the spatial level of the data contained in the OBU.
     * @param size_field whether the header contain size feild
     * @param size the size in bytes of the input and output
     * @returns a {@link GstCodecParsers.AV1BitWriterResult}
     * @since 1.22
     */
    function av1_bit_writer_metadata_obu(
        metadata: AV1MetadataOBU,
        temporal_id: number,
        spatial_id: number,
        size_field: boolean,
        size: number,
    ): [AV1BitWriterResult, number, number];
    /**
     * Generating the according AV1 bit stream OBU by providing the sequence header.
     * @param seq_hdr the sequence header of {@link GstCodecParsers.AV1SequenceHeaderOBU} to write
     * @param size_field whether the header contain size feild
     * @param size the size in bytes of the input and output
     * @returns a {@link GstCodecParsers.AV1BitWriterResult}
     * @since 1.22
     */
    function av1_bit_writer_sequence_header_obu(
        seq_hdr: AV1SequenceHeaderOBU,
        size_field: boolean,
        size: number,
    ): [AV1BitWriterResult, number, number];
    /**
     * Generating the according temporal delimiter AV1 bit stream OBU.
     * @param size_field whether the header contain size feild
     * @param size the size in bytes of the input and output
     * @returns a {@link GstCodecParsers.AV1BitWriterResult}
     * @since 1.22
     */
    function av1_bit_writer_temporal_delimiter_obu(
        size_field: boolean,
        size: number,
    ): [AV1BitWriterResult, number, number];
    /**
     * Attaches GstLcevcMeta metadata to `buffer`.
     * @param buffer a {@link Gst.Buffer}
     * @param enhancement_data the parsed LCEVC enhancement data
     * @returns the {@link GstCodecParsers.LcevcMeta} on `buffer`.
     * @since 1.26
     */
    function buffer_add_lcevc_meta(buffer: Gst.Buffer, enhancement_data: Gst.Buffer): LcevcMeta;
    /**
     * Creates and adds a {@link GstCodecParsers.MpegVideoMeta} to a `buffer`.
     * Provided structures must either be `null` or GSlice-allocated.
     * @param buffer a {@link Gst.Buffer}
     * @param seq_hdr a {@link GstCodecParsers.MpegVideoSequenceHdr}
     * @param seq_ext a {@link GstCodecParsers.MpegVideoSequenceExt}
     * @param disp_ext a {@link GstCodecParsers.MpegVideoSequenceDisplayExt}
     * @param pic_hdr a {@link GstCodecParsers.MpegVideoPictureHdr}
     * @param pic_ext a {@link GstCodecParsers.MpegVideoPictureExt}
     * @param quant_ext a {@link GstCodecParsers.MpegVideoQuantMatrixExt}
     * @returns a newly created {@link GstCodecParsers.MpegVideoMeta}
     * @since 1.2
     */
    function buffer_add_mpeg_video_meta(
        buffer: Gst.Buffer,
        seq_hdr: MpegVideoSequenceHdr,
        seq_ext: MpegVideoSequenceExt,
        disp_ext: MpegVideoSequenceDisplayExt,
        pic_hdr: MpegVideoPictureHdr,
        pic_ext: MpegVideoPictureExt,
        quant_ext: MpegVideoQuantMatrixExt,
    ): MpegVideoMeta;
    /**
     * Find the {@link GstCodecParsers.LcevcMeta} on `buffer` with the lowest `id`.
     *
     * Buffers can contain multiple {@link GstCodecParsers.LcevcMeta} metadata items when dealing with
     * multiview buffers.
     * @param buffer a {@link Gst.Buffer}
     * @returns the {@link GstCodecParsers.LcevcMeta} with lowest id (usually 0) or `null` when there is no such metadata on `buffer`.
     * @since 1.26
     */
    function buffer_get_lcevc_meta(buffer: Gst.Buffer): LcevcMeta | null;
    /**
     * Find the {@link GstCodecParsers.LcevcMeta} on `buffer` with the given `id`.
     *
     * Buffers can contain multiple {@link GstCodecParsers.LcevcMeta} metadata items when dealing with
     * multiview buffers.
     * @param buffer a {@link Gst.Buffer}
     * @param id a metadata id
     * @returns the {@link GstCodecParsers.LcevcMeta} with `id` or `null` when there is no such metadata on `buffer`.
     * @since 1.26
     */
    function buffer_get_lcevc_meta_id(buffer: Gst.Buffer, id: number): LcevcMeta | null;
    /**
     * Parses `data` and fills `packet` with the information of the next packet
     * found.
     *
     * Note that the type of the packet is meaningless in this case.
     * @param packet The {@link GstCodecParsers.Mpeg4Packet} to fill
     * @param data The data to parse
     * @param offset offset from which to start the parsing
     * @param size The size of the `data` to parse
     * @returns a {@link GstCodecParsers.Mpeg4ParseResult}
     */
    function h263_parse(packet: Mpeg4Packet, data: number, offset: number, size: number): Mpeg4ParseResult;
    /**
     * Generating the according h264 bit stream of an aud.
     * @param primary_pic_type indicate the possible slice types list just   as the H264 spec defines
     * @param start_code whether adding the nal start code
     * @param size the size in bytes of the input and output
     * @returns a {@link GstCodecParsers.H264BitWriterResult}
     * @since 1.22
     */
    function h264_bit_writer_aud(
        primary_pic_type: number,
        start_code: boolean,
        size: number,
    ): [H264BitWriterResult, number, number];
    /**
     * Converting a bit stream into a real nal packet. If the bit stream already
     * has a start code, it will be replaced by the new one specified by the
     * `nal_prefix_size` and `packetized`. It is assured that the output aligns to
     * the byte and the all the emulations are inserted.
     * @param nal_prefix_size the size in bytes for the prefix of a nal, may   be 2, 3 or 4
     * @param packetized whether to write the bit stream in packetized format,   which does not have the start code but has a `nal_prefix_size` bytes'   size prepending to the real nal data
     * @param has_startcode whether the input already has a start code
     * @param add_trailings whether to add rbsp trailing bits to make the output   aligned to byte
     * @param raw_data the input bit stream
     * @param raw_size the size in bits of the input bit stream
     * @param nal_size the size in bytes of the output
     * @returns a {@link GstCodecParsers.H264BitWriterResult}
     * @since 1.22
     */
    function h264_bit_writer_convert_to_nal(
        nal_prefix_size: number,
        packetized: boolean,
        has_startcode: boolean,
        add_trailings: boolean,
        raw_data: number,
        raw_size: number,
        nal_size: number,
    ): [H264BitWriterResult, number, number];
    /**
     * Generates the according h264 bit stream nal bitstream of a filler with `size`.
     * @param start_code whether adding the nal start code
     * @param num number of filler codes to add
     * @param data bit stream storage
     * @param size size in bytes of the input and output
     * @returns a {@link GstCodecParsers.H264BitWriterResult}
     * @since 1.26
     */
    function h264_bit_writer_filler(
        start_code: boolean,
        num: number,
        data: number,
        size: number,
    ): [H264BitWriterResult, number, number];
    /**
     * Generating the according h264 bit stream by providing the pps.
     * @param pps the pps of {@link GstCodecParsers.H264PPS} to write
     * @param start_code whether adding the nal start code
     * @param size the size in bytes of the input and output
     * @returns a {@link GstCodecParsers.H264BitWriterResult}
     * @since 1.22
     */
    function h264_bit_writer_pps(
        pps: H264PPS,
        start_code: boolean,
        size: number,
    ): [H264BitWriterResult, number, number];
    /**
     * Generating the according h264 bit stream by providing sei messages.
     * @param sei_messages An array of {@link GstCodecParsers.H264SEIMessage} to write
     * @param start_code whether adding the nal start code
     * @param size the size in bytes of the input and output
     * @returns a {@link GstCodecParsers.H264BitWriterResult}
     * @since 1.22
     */
    function h264_bit_writer_sei(
        sei_messages: H264SEIMessage[],
        start_code: boolean,
        size: number,
    ): [H264BitWriterResult, number, number];
    /**
     * Generating the according h264 bit stream by providing the slice header.
     * @param slice the slice header of {@link GstCodecParsers.H264SliceHdr} to write
     * @param start_code whether adding the nal start code
     * @param nal_type the slice's nal type of {@link GstCodecParsers.H264NalUnitType}
     * @param is_ref whether the slice is a reference
     * @param size the size in bytes of the input and output
     * @returns a {@link GstCodecParsers.H264BitWriterResult}
     * @since 1.22
     */
    function h264_bit_writer_slice_hdr(
        slice: H264SliceHdr,
        start_code: boolean,
        nal_type: H264NalUnitType | null,
        is_ref: boolean,
        size: number,
    ): [H264BitWriterResult, number, number, number];
    /**
     * Generating the according h264 bit stream by providing the sps.
     * @param sps the sps of {@link GstCodecParsers.H264SPS} to write
     * @param start_code whether adding the nal start code
     * @param size the size in bytes of the input and output
     * @returns a {@link GstCodecParsers.H264BitWriterResult}
     * @since 1.22
     */
    function h264_bit_writer_sps(
        sps: H264SPS,
        start_code: boolean,
        size: number,
    ): [H264BitWriterResult, number, number];
    /**
     * Creates raw byte-stream format (a.k.a Annex B type) SEI nal unit data
     * from `messages`
     * @param start_code_prefix_length a length of start code prefix, must be 3 or 4
     * @param messages a GArray of {@link GstCodecParsers.H264SEIMessage}
     * @returns a {@link Gst.Memory} containing a SEI nal unit
     * @since 1.18
     */
    function h264_create_sei_memory(start_code_prefix_length: number, messages: H264SEIMessage[]): Gst.Memory;
    /**
     * Creates raw packetized format SEI nal unit data from `messages`
     * @param nal_length_size a size of nal length field, allowed range is [1, 4]
     * @param messages a GArray of {@link GstCodecParsers.H264SEIMessage}
     * @returns a {@link Gst.Memory} containing a SEI nal unit
     * @since 1.18
     */
    function h264_create_sei_memory_avc(nal_length_size: number, messages: H264SEIMessage[]): Gst.Memory;
    /**
     * Parses `data`, and fills the `pps` structure.
     *
     * The resulting `pps` data structure shall be deallocated with the
     * `gst_h264_pps_clear()` function when it is no longer needed, or prior
     * to parsing a new PPS NAL unit.
     * @param nalparser a {@link GstCodecParsers.H264NalParser}
     * @param nalu The {@link GstCodecParsers.H264NalUnitType.PPS} {@link GstCodecParsers.H264NalUnit} to parse
     * @param pps The {@link GstCodecParsers.H264PPS} to fill.
     * @returns a {@link GstCodecParsers.H264ParserResult}
     */
    function h264_parse_pps(nalparser: H264NalParser, nalu: H264NalUnit, pps: H264PPS): H264ParserResult;
    /**
     * Parses `data`, and fills the `sps` structure.
     * @param nalu The #GST_H264_NAL_SPS {@link GstCodecParsers.H264NalUnit} to parse
     * @param sps The {@link GstCodecParsers.H264SPS} to fill.
     * @returns a {@link GstCodecParsers.H264ParserResult}
     */
    function h264_parse_sps(nalu: H264NalUnit, sps: H264SPS): H264ParserResult;
    /**
     * Parses `data`, and fills in the `sps` structure.
     *
     * This function fully parses `data` and allocates all the necessary
     * data structures needed for MVC extensions. The resulting `sps`
     * structure shall be deallocated with `gst_h264_sps_clear()` when it is
     * no longer needed.
     *
     * Note: if the caller doesn't need any of the MVC-specific data, then
     * `gst_h264_parser_parse_sps()` is more efficient because those extra
     * syntax elements are not parsed and no extra memory is allocated.
     * @param nalu The #GST_H264_NAL_SUBSET_SPS {@link GstCodecParsers.H264NalUnit} to parse
     * @param sps The {@link GstCodecParsers.H264SPS} to fill.
     * @returns a {@link GstCodecParsers.H264ParserResult}
     * @since 1.6
     */
    function h264_parse_subset_sps(nalu: H264NalUnit, sps: H264SPS): H264ParserResult;
    /**
     * Parses `data` for packetized (e.g., avc/avc3) bitstream and
     * sets `nalus`. In addition to nal identifying process,
     * this method scans start-code prefix to split malformed packet into
     * actual nal chunks.
     * @param nalparser a {@link GstCodecParsers.H264NalParser}
     * @param data The data to parse, containing an AVC coded NAL unit
     * @param offset the offset in `data` from which to parse the NAL unit
     * @param size the size of `data`
     * @param nal_length_size the size in bytes of the AVC nal length prefix.
     * @param nalus a caller allocated GArray of {@link GstCodecParsers.H264NalUnit} where to store parsed nal headers
     * @returns a {@link GstCodecParsers.H264ParserResult}
     * @since 1.22.9
     */
    function h264_parser_identify_and_split_nalu_avc(
        nalparser: H264NalParser,
        data: number,
        offset: number,
        size: number,
        nal_length_size: number,
        nalus: H264NalUnit[],
    ): [H264ParserResult, number];
    /**
     * Parses the headers of an Annex B coded NAL unit from `data` and puts the
     * result into `nalu`.
     * @param nalparser a {@link GstCodecParsers.H264NalParser}
     * @param data The data to parse, containing an Annex B coded NAL unit
     * @param offset the offset in `data` from which to parse the NAL unit
     * @param size the size of `data`
     * @param nalu The {@link GstCodecParsers.H264NalUnit} to store the identified NAL unit in
     * @returns a {@link GstCodecParsers.H264ParserResult}
     */
    function h264_parser_identify_nalu(
        nalparser: H264NalParser,
        data: number,
        offset: number,
        size: number,
        nalu: H264NalUnit,
    ): H264ParserResult;
    /**
     * Parses the headers of an AVC coded NAL unit from `data` and puts the result
     * into `nalu`.
     * @param nalparser a {@link GstCodecParsers.H264NalParser}
     * @param data The data to parse, containing an AVC coded NAL unit
     * @param offset the offset in `data` from which to parse the NAL unit
     * @param size the size of `data`
     * @param nal_length_size the size in bytes of the AVC nal length prefix.
     * @param nalu The {@link GstCodecParsers.H264NalUnit} to store the identified NAL unit in
     * @returns a {@link GstCodecParsers.H264ParserResult}
     */
    function h264_parser_identify_nalu_avc(
        nalparser: H264NalParser,
        data: number,
        offset: number,
        size: number,
        nal_length_size: number,
        nalu: H264NalUnit,
    ): H264ParserResult;
    /**
     * Parses `data` and fills `nalu` from the next nalu data from `data`.
     *
     * This differs from `gst_h264_parser_identify_nalu` in that it doesn't
     * check whether the packet is complete or not.
     *
     * Note: Only use this function if you already know the provided `data`
     * is a complete NALU, else use `gst_h264_parser_identify_nalu`.
     * @param nalparser a {@link GstCodecParsers.H264NalParser}
     * @param data The data to parse
     * @param offset the offset from which to parse `data`
     * @param size the size of `data`
     * @param nalu The {@link GstCodecParsers.H264NalUnit} where to store parsed nal headers
     * @returns a {@link GstCodecParsers.H264ParserResult}
     */
    function h264_parser_identify_nalu_unchecked(
        nalparser: H264NalParser,
        data: number,
        offset: number,
        size: number,
        nalu: H264NalUnit,
    ): H264ParserResult;
    /**
     * Copy `au` into new {@link Gst.Buffer} and insert `sei` into the {@link Gst.Buffer}.
     * The validation for completeness of `au` and `sei` is caller's responsibility.
     * Both `au` and `sei` must be byte-stream formatted
     * @param nalparser a {@link GstCodecParsers.H264NalParser}
     * @param au a {@link Gst.Buffer} containing AU data
     * @param sei a {@link Gst.Memory} containing a SEI nal
     * @returns a SEI inserted {@link Gst.Buffer} or `null`   if cannot figure out proper position to insert a `sei`
     * @since 1.18
     */
    function h264_parser_insert_sei(nalparser: H264NalParser, au: Gst.Buffer, sei: Gst.Memory): Gst.Buffer | null;
    /**
     * Copy `au` into new {@link Gst.Buffer} and insert `sei` into the {@link Gst.Buffer}.
     * The validation for completeness of `au` and `sei` is caller's responsibility.
     * Nal prefix type of both `au` and `sei` must be packetized, and
     * also the size of nal length field must be identical to `nal_length_size`
     * @param nalparser a {@link GstCodecParsers.H264NalParser}
     * @param nal_length_size a size of nal length field, allowed range is [1, 4]
     * @param au a {@link Gst.Buffer} containing AU data
     * @param sei a {@link Gst.Memory} containing a SEI nal
     * @returns a SEI inserted {@link Gst.Buffer} or `null`   if cannot figure out proper position to insert a `sei`
     * @since 1.18
     */
    function h264_parser_insert_sei_avc(
        nalparser: H264NalParser,
        nal_length_size: number,
        au: Gst.Buffer,
        sei: Gst.Memory,
    ): Gst.Buffer | null;
    /**
     * Parses AVCDecoderConfigurationRecord data and fill into `config`.
     * The caller must free `config` via `gst_h264_decoder_config_record_free()`
     *
     * This method does not parse SPS and PPS and therefore the caller needs to
     * parse each NAL unit via appropriate parsing method.
     * @param nalparser a {@link GstCodecParsers.H264NalParser}
     * @param data the data to parse
     * @param size the size of `data`
     * @returns a {@link GstCodecParsers.H264ParserResult}
     * @since 1.22
     */
    function h264_parser_parse_decoder_config_record(
        nalparser: H264NalParser,
        data: number,
        size: number,
    ): [H264ParserResult, H264DecoderConfigRecord];
    /**
     * This function should be called in the case one doesn't need to
     * parse a specific structure. It is necessary to do so to make
     * sure `nalparser` is up to date.
     * @param nalparser a {@link GstCodecParsers.H264NalParser}
     * @param nalu The {@link GstCodecParsers.H264NalUnit} to parse
     * @returns a {@link GstCodecParsers.H264ParserResult}
     */
    function h264_parser_parse_nal(nalparser: H264NalParser, nalu: H264NalUnit): H264ParserResult;
    /**
     * Parses `nalu` containing a Picture Parameter Set, and fills `pps`.
     *
     * The resulting `pps` data structure must be deallocated by the caller using
     * `gst_h264_pps_clear()`.
     * @param nalparser a {@link GstCodecParsers.H264NalParser}
     * @param nalu The {@link GstCodecParsers.H264NalUnitType.PPS} {@link GstCodecParsers.H264NalUnit} to parse
     * @param pps The {@link GstCodecParsers.H264PPS} to fill.
     * @returns a {@link GstCodecParsers.H264ParserResult}
     */
    function h264_parser_parse_pps(nalparser: H264NalParser, nalu: H264NalUnit, pps: H264PPS): H264ParserResult;
    /**
     * Parses `nalu` containing one or more Supplementary Enhancement Information messages,
     * and allocates and fills the `messages` array.
     * @param nalparser a {@link GstCodecParsers.H264NalParser}
     * @param nalu The {@link GstCodecParsers.H264NalUnitType.SEI} {@link GstCodecParsers.H264NalUnit} to parse
     * @param messages The GArray of {@link GstCodecParsers.H264SEIMessage} to fill. The caller must free it when done.
     * @returns a {@link GstCodecParsers.H264ParserResult}
     */
    function h264_parser_parse_sei(
        nalparser: H264NalParser,
        nalu: H264NalUnit,
        messages: H264SEIMessage[],
    ): H264ParserResult;
    /**
     * Parses `nalu` containing a coded slice, and fills `slice`.
     * @param nalparser a {@link GstCodecParsers.H264NalParser}
     * @param nalu The {@link GstCodecParsers.H264NalUnitType.SLICE} to {@link GstCodecParsers.H264NalUnitType.SLICE_IDR} {@link GstCodecParsers.H264NalUnit} to parse
     * @param slice The {@link GstCodecParsers.H264SliceHdr} to fill.
     * @param parse_pred_weight_table Whether to parse the pred_weight_table or not
     * @param parse_dec_ref_pic_marking Whether to parse the dec_ref_pic_marking or not
     * @returns a {@link GstCodecParsers.H264ParserResult}
     */
    function h264_parser_parse_slice_hdr(
        nalparser: H264NalParser,
        nalu: H264NalUnit,
        slice: H264SliceHdr,
        parse_pred_weight_table: boolean,
        parse_dec_ref_pic_marking: boolean,
    ): H264ParserResult;
    /**
     * Parses `nalu` containing a Sequence Parameter Set, and fills `sps`.
     * @param nalparser a {@link GstCodecParsers.H264NalParser}
     * @param nalu The #GST_H264_NAL_SPS {@link GstCodecParsers.H264NalUnit} to parse
     * @param sps The {@link GstCodecParsers.H264SPS} to fill.
     * @returns a {@link GstCodecParsers.H264ParserResult}
     */
    function h264_parser_parse_sps(nalparser: H264NalParser, nalu: H264NalUnit, sps: H264SPS): H264ParserResult;
    /**
     * Parses `data`, and fills in the `sps` structure.
     *
     * This function fully parses `data` and allocates all the necessary
     * data structures needed for MVC extensions. The resulting `sps`
     * structure shall be deallocated with `gst_h264_sps_clear()` when it is
     * no longer needed.
     *
     * Note: if the caller doesn't need any of the MVC-specific data, then
     * `gst_h264_parser_parse_sps()` is more efficient because those extra
     * syntax elements are not parsed and no extra memory is allocated.
     * @param nalparser a {@link GstCodecParsers.H264NalParser}
     * @param nalu The #GST_H264_NAL_SUBSET_SPS {@link GstCodecParsers.H264NalUnit} to parse
     * @param sps The {@link GstCodecParsers.H264SPS} to fill.
     * @returns a {@link GstCodecParsers.H264ParserResult}
     * @since 1.6
     */
    function h264_parser_parse_subset_sps(nalparser: H264NalParser, nalu: H264NalUnit, sps: H264SPS): H264ParserResult;
    /**
     * Replace internal Picture Parameter Set struct corresponding to id of `pps`
     * with `pps`. `nalparser` will mark `pps` as last parsed pps.
     * @param nalparser a {@link GstCodecParsers.H264NalParser}
     * @param pps a {@link GstCodecParsers.H264PPS}.
     * @returns a {@link GstCodecParsers.H264ParserResult}
     * @since 1.18
     */
    function h264_parser_update_pps(nalparser: H264NalParser, pps: H264PPS): H264ParserResult;
    /**
     * Replace internal Sequence Parameter Set struct corresponding to id of `sps`
     * with `sps`. `nalparser` will mark `sps` as last parsed sps.
     * @param nalparser a {@link GstCodecParsers.H264NalParser}
     * @param sps a {@link GstCodecParsers.H264SPS}.
     * @returns a {@link GstCodecParsers.H264ParserResult}
     * @since 1.18
     */
    function h264_parser_update_sps(nalparser: H264NalParser, sps: H264SPS): H264ParserResult;
    /**
     * Returns a {@link GstCodecParsers.H264Profile} for the `string`.
     * @param profile the descriptive name for {@link GstCodecParsers.H264Profile}
     * @returns the {@link GstCodecParsers.H264Profile} of `string` or {@link GstCodecParsers.H265Profile.INVALID} on error
     * @since 1.24
     */
    function h264_profile_from_string(profile: string): H264Profile;
    /**
     * Converts quantization matrix `quant` from zigzag scan order to
     * raster scan order and store the resulting factors into `out_quant`.
     *
     * Note: it is an error to pass the same table in both `quant` and
     * `out_quant` arguments.
     * @param quant The source quantization matrix
     * @since 1.4
     */
    function h264_quant_matrix_4x4_get_raster_from_zigzag(quant: number): number;
    /**
     * Converts quantization matrix `quant` from raster scan order to
     * zigzag scan order and store the resulting factors into `out_quant`.
     *
     * Note: it is an error to pass the same table in both `quant` and
     * `out_quant` arguments.
     * @param quant The source quantization matrix
     * @since 1.4
     */
    function h264_quant_matrix_4x4_get_zigzag_from_raster(quant: number): number;
    /**
     * Converts quantization matrix `quant` from zigzag scan order to
     * raster scan order and store the resulting factors into `out_quant`.
     *
     * Note: it is an error to pass the same table in both `quant` and
     * `out_quant` arguments.
     * @param quant The source quantization matrix
     * @since 1.4
     */
    function h264_quant_matrix_8x8_get_raster_from_zigzag(quant: number): number;
    /**
     * Converts quantization matrix `quant` from raster scan order to
     * zigzag scan order and store the resulting factors into `out_quant`.
     *
     * Note: it is an error to pass the same table in both `quant` and
     * `out_quant` arguments.
     * @param quant The source quantization matrix
     * @since 1.4
     */
    function h264_quant_matrix_8x8_get_zigzag_from_raster(quant: number): number;
    /**
     * sei: The {@link GstCodecParsers.H264SEIMessage} to clear
     * Frees allocated data in `sei` if any.
     * @param sei
     * @since 1.18
     */
    function h264_sei_clear(sei: H264SEIMessage): void;
    /**
     * Returns the descriptive name for the {@link GstCodecParsers.H264SliceType}.
     * @param slice_type a {@link GstCodecParsers.H264SliceType}
     * @returns the name for `slice_type` or `null` on error
     * @since 1.24
     */
    function h264_slice_type_to_string(slice_type: H264SliceType | null): string | null;
    /**
     * Calculate framerate of a video sequence using `sps` VUI information,
     * `field_pic_flag` from a slice header and `pic_struct` from {@link GstCodecParsers.H264PicTiming} SEI
     * message.
     *
     * If framerate is variable or can't be determined, `fps_num` will be set to 0
     * and `fps_den` to 1.
     * @param sps Current Sequence Parameter Set
     * @param field_pic_flag Current `field_pic_flag`, obtained from latest slice header
     * @param pic_struct `pic_struct` value if available, 0 otherwise
     */
    function h264_video_calculate_framerate(sps: H264SPS, field_pic_flag: number, pic_struct: number): [number, number];
    /**
     * Creates raw byte-stream format (a.k.a Annex B type) SEI nal unit data
     * from `messages`
     * @param layer_id a nal unit layer id
     * @param temporal_id_plus1 a nal unit temporal identifier
     * @param start_code_prefix_length a length of start code prefix, must be 3 or 4
     * @param messages a GArray of {@link GstCodecParsers.H265SEIMessage}
     * @returns a {@link Gst.Memory} containing a PREFIX SEI nal unit
     * @since 1.18
     */
    function h265_create_sei_memory(
        layer_id: number,
        temporal_id_plus1: number,
        start_code_prefix_length: number,
        messages: H265SEIMessage[],
    ): Gst.Memory;
    /**
     * Creates raw packetized format SEI nal unit data from `messages`
     * @param layer_id a nal unit layer id
     * @param temporal_id_plus1 a nal unit temporal identifier
     * @param nal_length_size a size of nal length field, allowed range is [1, 4]
     * @param messages a GArray of {@link GstCodecParsers.H265SEIMessage}
     * @returns a {@link Gst.Memory} containing a PREFIX SEI nal unit
     * @since 1.18
     */
    function h265_create_sei_memory_hevc(
        layer_id: number,
        temporal_id_plus1: number,
        nal_length_size: number,
        messages: H265SEIMessage[],
    ): Gst.Memory;
    /**
     * Return the H265 profile from `sps`.
     * @param sps a {@link GstCodecParsers.H265SPS}
     * @returns a {@link GstCodecParsers.H265Profile}
     * @since 1.20
     */
    function h265_get_profile_from_sps(sps: H265SPS): H265Profile;
    /**
     * Parses `data`, and fills the `pps` structure.
     * @param parser a {@link GstCodecParsers.H265Parser}
     * @param nalu The {@link GstCodecParsers.H265NalUnitType.PPS} {@link GstCodecParsers.H265NalUnit} to parse
     * @param pps The {@link GstCodecParsers.H265PPS} to fill.
     * @returns a {@link GstCodecParsers.H265ParserResult}
     */
    function h265_parse_pps(parser: H265Parser, nalu: H265NalUnit, pps: H265PPS): H265ParserResult;
    /**
     * parser: The {@link GstCodecParsers.H265Parser}
     * Parses `data`, and fills the `sps` structure.
     * @param parser
     * @param nalu The {@link GstCodecParsers.H265NalUnitType.SPS} {@link GstCodecParsers.H265NalUnit} to parse
     * @param sps The {@link GstCodecParsers.H265SPS} to fill.
     * @param parse_vui_params Whether to parse the vui_params or not
     * @returns a {@link GstCodecParsers.H265ParserResult}
     */
    function h265_parse_sps(
        parser: H265Parser,
        nalu: H265NalUnit,
        sps: H265SPS,
        parse_vui_params: boolean,
    ): H265ParserResult;
    /**
     * parser: The {@link GstCodecParsers.H265Parser}
     * Parses `data`, and fills the `sps` structure.
     * @param parser
     * @param nalu The {@link GstCodecParsers.H265NalUnitType.SPS} {@link GstCodecParsers.H265NalUnit} to parse
     * @param sps The {@link GstCodecParsers.H265SPS} to fill.
     * @param sps_ext The {@link GstCodecParsers.H265SPSEXT} matching the {@link GstCodecParsers.H265SPS} to fill.
     * @param parse_vui_params Whether to parse the vui_params or not
     * @returns a {@link GstCodecParsers.H265ParserResult}
     * @since 1.28
     */
    function h265_parse_sps_ext(
        parser: H265Parser,
        nalu: H265NalUnit,
        sps: H265SPS,
        sps_ext: H265SPSEXT,
        parse_vui_params: boolean,
    ): H265ParserResult;
    /**
     * Parses `data`, and fills the `vps` structure.
     * @param nalu The {@link GstCodecParsers.H265NalUnitType.VPS} {@link GstCodecParsers.H265NalUnit} to parse
     * @param vps The {@link GstCodecParsers.H265VPS} to fill.
     * @returns a {@link GstCodecParsers.H265ParserResult}
     */
    function h265_parse_vps(nalu: H265NalUnit, vps: H265VPS): H265ParserResult;
    /**
     * Returns a {@link GstCodecParsers.H265Profile} for the `string`.
     * @param string the descriptive name for {@link GstCodecParsers.H265Profile}
     * @returns the {@link GstCodecParsers.H265Profile} of `string` or {@link GstCodecParsers.H265Profile.INVALID} on error
     * @since 1.18
     */
    function h265_profile_from_string(string: string): H265Profile;
    /**
     * Returns the descriptive name for the {@link GstCodecParsers.H265Profile}.
     * @param profile a {@link GstCodecParsers.H265Profile}
     * @returns the name for `profile` or `null` on error
     * @since 1.18
     */
    function h265_profile_to_string(profile: H265Profile | null): string | null;
    /**
     * Converts quantization matrix `quant` from uprightdiagonal scan order to
     * raster scan order and store the resulting factors into `out_quant`.
     *
     * Note: it is an error to pass the same table in both `quant` and
     * `out_quant` arguments.
     * @param quant The source quantization matrix
     * @since 1.6
     */
    function h265_quant_matrix_4x4_get_raster_from_uprightdiagonal(quant: number): number;
    /**
     * Converts quantization matrix `quant` from zigzag scan order to
     * raster scan order and store the resulting factors into `out_quant`.
     *
     * Note: it is an error to pass the same table in both `quant` and
     * `out_quant` arguments.
     * @param quant The source quantization matrix
     * @since 1.6
     */
    function h265_quant_matrix_4x4_get_raster_from_zigzag(quant: number): number;
    /**
     * Converts quantization matrix `quant` from raster scan order to
     * uprightdiagonal scan order and store the resulting factors
     * into `out_quant`.
     *
     * Note: it is an error to pass the same table in both `quant` and
     * `out_quant` arguments.
     * @param quant The source quantization matrix
     * @since 1.6
     */
    function h265_quant_matrix_4x4_get_uprightdiagonal_from_raster(quant: number): number;
    /**
     * Converts quantization matrix `quant` from raster scan order to
     * zigzag scan order and store the resulting factors into `out_quant`.
     *
     * Note: it is an error to pass the same table in both `quant` and
     * `out_quant` arguments.
     * @param quant The source quantization matrix
     * @since 1.6
     */
    function h265_quant_matrix_4x4_get_zigzag_from_raster(quant: number): number;
    /**
     * Converts quantization matrix `quant` from uprightdiagonal scan order to
     * raster scan order and store the resulting factors into `out_quant`.
     *
     * Note: it is an error to pass the same table in both `quant` and
     * `out_quant` arguments.
     * @param quant The source quantization matrix
     * @since 1.6
     */
    function h265_quant_matrix_8x8_get_raster_from_uprightdiagonal(quant: number): number;
    /**
     * Converts quantization matrix `quant` from zigzag scan order to
     * raster scan order and store the resulting factors into `out_quant`.
     *
     * Note: it is an error to pass the same table in both `quant` and
     * `out_quant` arguments.
     * @param quant The source quantization matrix
     * @since 1.6
     */
    function h265_quant_matrix_8x8_get_raster_from_zigzag(quant: number): number;
    /**
     * Converts quantization matrix `quant` from raster scan order to
     * uprightdiagonal scan order and store the resulting factors
     * into `out_quant`.
     *
     * Note: it is an error to pass the same table in both `quant` and
     * `out_quant` arguments.
     * @param quant The source quantization matrix
     * @since 1.6
     */
    function h265_quant_matrix_8x8_get_uprightdiagonal_from_raster(quant: number): number;
    /**
     * Converts quantization matrix `quant` from raster scan order to
     * zigzag scan order and store the resulting factors into `out_quant`.
     *
     * Note: it is an error to pass the same table in both `quant` and
     * `out_quant` arguments.
     * @param quant The source quantization matrix
     * @since 1.6
     */
    function h265_quant_matrix_8x8_get_zigzag_from_raster(quant: number): number;
    /**
     * Copies `src_sei` into `dst_sei`
     * @param dest_sei The destination {@link GstCodecParsers.H265SEIMessage} to copy into
     * @param src_sei The source {@link GstCodecParsers.H265SEIMessage} to copy from
     * @returns `true` if everything went fine, `false` otherwise
     */
    function h265_sei_copy(dest_sei: H265SEIMessage, src_sei: H265SEIMessage): boolean;
    /**
     * sei: The {@link GstCodecParsers.H265SEIMessage} to free
     * Frees `sei` fields.
     * @param sei
     */
    function h265_sei_free(sei: H265SEIMessage): void;
    /**
     * Returns the descriptive name for the {@link GstCodecParsers.H265SliceType}.
     * @param slice_type a {@link GstCodecParsers.H265SliceType}
     * @returns the name for `slice_type` or `null` on error
     * @since 1.24
     */
    function h265_slice_type_to_string(slice_type: H265SliceType | null): string | null;
    /**
     * Parses `data`, and fills the `aps` structure.
     * @param parser a {@link GstCodecParsers.H266Parser}
     * @param nalu The APS {@link GstCodecParsers.H266NalUnit} to parse
     * @param aps The {@link GstCodecParsers.H266APS} to fill.
     * @returns a {@link GstCodecParsers.H266ParserResult}
     * @since 1.26
     */
    function h266_parse_aps(parser: H266Parser, nalu: H266NalUnit, aps: H266APS): H266ParserResult;
    /**
     * Parses `data`, and fills the `pps` structure.
     * @param parser a {@link GstCodecParsers.H266Parser}
     * @param nalu The #GST_H266_NAL_PPS {@link GstCodecParsers.H266NalUnit} to parse
     * @param pps The {@link GstCodecParsers.H266PPS} to fill.
     * @returns a {@link GstCodecParsers.H266ParserResult}
     * @since 1.26
     */
    function h266_parse_pps(parser: H266Parser, nalu: H266NalUnit, pps: H266PPS): H266ParserResult;
    /**
     * Parses `data`, and fills the `sps` structure.
     * @param parser The {@link GstCodecParsers.H266Parser}
     * @param nalu The #GST_H266_NAL_SPS {@link GstCodecParsers.H266NalUnit} to parse
     * @param sps The {@link GstCodecParsers.H266SPS} to fill.
     * @returns a {@link GstCodecParsers.H266ParserResult}
     * @since 1.26
     */
    function h266_parse_sps(parser: H266Parser, nalu: H266NalUnit, sps: H266SPS): H266ParserResult;
    /**
     * Parses `data`, and fills the `vps` structure.
     * @param nalu The #GST_H266_NAL_VPS {@link GstCodecParsers.H266NalUnit} to parse
     * @param vps The {@link GstCodecParsers.H266VPS} to fill.
     * @returns a {@link GstCodecParsers.H266ParserResult}
     * @since 1.26
     */
    function h266_parse_vps(nalu: H266NalUnit, vps: H266VPS): H266ParserResult;
    /**
     * Returns a {@link GstCodecParsers.H266Profile} for the `string`.
     * @param string the descriptive name for {@link GstCodecParsers.H266Profile}
     * @returns the {@link GstCodecParsers.H266Profile} of `string` or {@link GstCodecParsers.H266Profile.INVALID} on error
     * @since 1.26
     */
    function h266_profile_from_string(string: string): H266Profile;
    /**
     * Returns the descriptive name for the {@link GstCodecParsers.H266Profile}.
     * @param profile a {@link GstCodecParsers.H266Profile}
     * @returns the name for `profile` or `null` on error
     * @since 1.26
     */
    function h266_profile_to_string(profile: H266Profile | null): string | null;
    /**
     * @param colorspace_string
     */
    function jpeg2000_colorspace_from_string(colorspace_string: string): JPEG2000Colorspace;
    /**
     * @param colorspace
     */
    function jpeg2000_colorspace_to_string(colorspace: JPEG2000Colorspace | null): string;
    /**
     * @param sampling_string
     */
    function jpeg2000_sampling_from_string(sampling_string: string): JPEG2000Sampling;
    /**
     * @param sampling
     */
    function jpeg2000_sampling_is_mono(sampling: JPEG2000Sampling | null): boolean;
    /**
     * @param sampling
     */
    function jpeg2000_sampling_is_rgb(sampling: JPEG2000Sampling | null): boolean;
    /**
     * @param sampling
     */
    function jpeg2000_sampling_is_yuv(sampling: JPEG2000Sampling | null): boolean;
    /**
     * @param sampling
     */
    function jpeg2000_sampling_to_string(sampling: JPEG2000Sampling | null): string;
    /**
     * Generating the according JPEG bit stream by providing the frame header.
     * @param frame_hdr the frame header of {@link GstCodecParsers.JpegFrameHdr} to write
     * @param marker the {@link GstCodecParsers.JpegMarker} id for this segment
     * @param size the size in bytes of the input and output
     * @returns a {@link GstCodecParsers.JpegBitWriterResult}
     * @since 1.26
     */
    function jpeg_bit_writer_frame_header(
        frame_hdr: JpegFrameHdr,
        marker: JpegMarker | null,
        size: number,
    ): [JpegBitWriterResult, number, number];
    /**
     * Generating the according JPEG bit stream by providing the huffman tables.
     * @param huff_tables the huffman tables of {@link GstCodecParsers.JpegHuffmanTables} to write
     * @param size the size in bytes of the input and output
     * @returns a {@link GstCodecParsers.JpegBitWriterResult}
     * @since 1.26
     */
    function jpeg_bit_writer_huffman_table(
        huff_tables: JpegHuffmanTables,
        size: number,
    ): [JpegBitWriterResult, number, number];
    /**
     * Generating the according JPEG bit stream by providing the quantization tables.
     * @param quant_tables the quantization tables of {@link GstCodecParsers.JpegQuantTables} to write
     * @param size the size in bytes of the input and output
     * @returns a {@link GstCodecParsers.JpegBitWriterResult}
     * @since 1.26
     */
    function jpeg_bit_writer_quantization_table(
        quant_tables: JpegQuantTables,
        size: number,
    ): [JpegBitWriterResult, number, number];
    /**
     * Generating the according JPEG bit stream by providing the interval value.
     * @param interval the interval value for restart
     * @param size the size in bytes of the input and output
     * @returns a {@link GstCodecParsers.JpegBitWriterResult}
     * @since 1.26
     */
    function jpeg_bit_writer_restart_interval(interval: number, size: number): [JpegBitWriterResult, number, number];
    /**
     * Generating the according JPEG bit stream by providing the scan header.
     * @param scan_hdr the scan header of {@link GstCodecParsers.JpegScanHdr} to write
     * @param size the size in bytes of the input and output
     * @returns a {@link GstCodecParsers.JpegBitWriterResult}
     * @since 1.26
     */
    function jpeg_bit_writer_scan_header(scan_hdr: JpegScanHdr, size: number): [JpegBitWriterResult, number, number];
    /**
     * Generating the bit stream for a JPEG segment.
     * @param marker the {@link GstCodecParsers.JpegMarker} id for this segment
     * @param seg_data the user provided bit stream data
     * @param seg_size the size of the segment data
     * @param size the size in bytes of the input and output
     * @returns a {@link GstCodecParsers.JpegBitWriterResult}
     * @since 1.26
     */
    function jpeg_bit_writer_segment_with_data(
        marker: JpegMarker | null,
        seg_data: number | null,
        seg_size: number,
        size: number,
    ): [JpegBitWriterResult, number, number];
    /**
     * Fills in `huf_tables` with the default AC/DC Huffman tables, as
     * specified by the JPEG standard.
     * @since 1.6
     */
    function jpeg_get_default_huffman_tables(): JpegHuffmanTables;
    /**
     * @param quant_tables
     */
    function jpeg_get_default_quantization_tables(quant_tables: JpegQuantTables): void;
    /**
     * Parses the JPEG bitstream contained in `data`, and returns the
     * detected segment as a {@link GstCodecParsers.JpegSegment}.
     *
     * Note that a valid segment may be returned with a length that exceeds
     * the available data. It is up to the caller to make sure there's enough
     * data available when parsing the segment.
     * @param data The data to parse
     * @param size The size of `data`
     * @param offset The offset from which to start parsing
     * @returns TRUE if a packet start code was found.
     * @since 1.6
     */
    function jpeg_parse(data: number, size: number, offset: number): [boolean, JpegSegment];
    /**
     * Gets the {@link GObject.GType} of the LCEVC meta API.
     * @returns the {@link GObject.GType} of the LCEVC meta API.
     * @since 1.26
     */
    function lcevc_meta_api_get_type(): GObject.GType;
    /**
     * Gets the {@link Gst.MetaInfo} of the LCEVC meta.
     * @returns the {@link GstCodecParsers.LcevcMeta} of the LCEVC meta.
     * @since 1.26
     */
    function lcevc_meta_get_info(): Gst.MetaInfo;
    /**
     * Parses `data` and fills `packet` with the information of the next packet
     * found.
     * @param packet The {@link GstCodecParsers.Mpeg4Packet} to fill
     * @param skip_user_data `true` to skip user data packet `false` otherwise
     * @param vop The last parsed {@link GstCodecParsers.Mpeg4VideoObjectPlane} or `null` if you do not need to detect the resync codes.
     * @param data The data to parse
     * @param offset offset from which to start the parsing
     * @param size The size of the `data` to parse
     * @returns a {@link GstCodecParsers.Mpeg4ParseResult}
     */
    function mpeg4_parse(
        packet: Mpeg4Packet,
        skip_user_data: boolean,
        vop: Mpeg4VideoObjectPlane,
        data: number,
        offset: number,
        size: number,
    ): Mpeg4ParseResult;
    /**
     * Parses `data` containing the group of video object plane packet, and fills
     * the `gov` structure.
     * @param gov The {@link GstCodecParsers.Mpeg4GroupOfVOP} structure to fill
     * @param data The data to parse
     * @param size The size of the `data` to parse
     * @returns a {@link GstCodecParsers.Mpeg4ParseResult}
     */
    function mpeg4_parse_group_of_vop(gov: Mpeg4GroupOfVOP, data: number, size: number): Mpeg4ParseResult;
    /**
     * Parses `data` containing the video object layer packet, and fills
     * the `vol` structure.
     * @param vol The {@link GstCodecParsers.Mpeg4VideoObjectLayer} structure to fill
     * @param vo The {@link GstCodecParsers.Mpeg4VisualObject} currently being parsed or `null`
     * @param data The data to parse
     * @param size The size of the `data` to parse
     * @returns a {@link GstCodecParsers.Mpeg4ParseResult}
     */
    function mpeg4_parse_video_object_layer(
        vol: Mpeg4VideoObjectLayer,
        vo: Mpeg4VisualObject,
        data: number,
        size: number,
    ): Mpeg4ParseResult;
    /**
     * Parses `data` containing the video object plane packet, and fills the `vol`
     * structure.
     * @param vop The {@link GstCodecParsers.Mpeg4VideoObjectPlane} currently being parsed
     * @param sprite_trajectory A {@link GstCodecParsers.Mpeg4SpriteTrajectory} to fill or `null`
     * @param vol The {@link GstCodecParsers.Mpeg4VideoObjectLayer} structure to fill
     * @param data The data to parse
     * @param size The size of the `data` to parse
     * @returns a {@link GstCodecParsers.Mpeg4ParseResult}
     */
    function mpeg4_parse_video_object_plane(
        vop: Mpeg4VideoObjectPlane,
        sprite_trajectory: Mpeg4SpriteTrajectory,
        vol: Mpeg4VideoObjectLayer,
        data: number,
        size: number,
    ): Mpeg4ParseResult;
    /**
     * Parsers `data` containing the video packet header
     * and fills the `videopackethdr` structure
     * @param videopackethdr The {@link GstCodecParsers.Mpeg4VideoPacketHdr} structure to fill
     * @param vol The last parsed {@link GstCodecParsers.Mpeg4VideoObjectLayer}, will be updated with the information found during the parsing
     * @param vop The last parsed {@link GstCodecParsers.Mpeg4VideoObjectPlane}, will be updated with the information found during the parsing
     * @param sprite_trajectory A {@link GstCodecParsers.Mpeg4SpriteTrajectory} to fill or `null` with the information found during the parsing
     * @param data The data to parse, should be set after the resync marker.
     * @param size The size of the data to parse
     */
    function mpeg4_parse_video_packet_header(
        videopackethdr: Mpeg4VideoPacketHdr,
        vol: Mpeg4VideoObjectLayer,
        vop: Mpeg4VideoObjectPlane,
        sprite_trajectory: Mpeg4SpriteTrajectory,
        data: number,
        size: number,
    ): Mpeg4ParseResult;
    /**
     * @param shorthdr
     * @param data
     * @param size
     */
    function mpeg4_parse_video_plane_short_header(
        shorthdr: Mpeg4VideoPlaneShortHdr,
        data: number,
        size: number,
    ): Mpeg4ParseResult;
    /**
     * Parses `data` containing the visual object packet, and fills
     * the `vo` structure.
     * @param vo The {@link GstCodecParsers.Mpeg4VisualObject} structure to fill
     * @param signal_type The {@link GstCodecParsers.Mpeg4VideoSignalType} to fill or `null`
     * @param data The data to parse, should contain the vo_start_code but not the start code prefix
     * @param size The size of the `data` to parse
     * @returns a {@link GstCodecParsers.Mpeg4ParseResult}
     */
    function mpeg4_parse_visual_object(
        vo: Mpeg4VisualObject,
        signal_type: Mpeg4VideoSignalType,
        data: number,
        size: number,
    ): Mpeg4ParseResult;
    /**
     * Parses `data` containing the visual object sequence packet, and fills
     * the `vos` structure.
     * @param vos The {@link GstCodecParsers.Mpeg4VisualObjectSequence} structure to fill
     * @param data The data to parse, should contain the visual_object_sequence_start_code but not the start code prefix
     * @param size The size of the `data` to parse
     * @returns a {@link GstCodecParsers.Mpeg4ParseResult}
     */
    function mpeg4_parse_visual_object_sequence(
        vos: Mpeg4VisualObjectSequence,
        data: number,
        size: number,
    ): Mpeg4ParseResult;
    /**
     * @param hdr
     * @param seqext
     * @param displayext
     */
    function mpeg_video_finalise_mpeg2_sequence_header(
        hdr: MpegVideoSequenceHdr,
        seqext: MpegVideoSequenceExt,
        displayext: MpegVideoSequenceDisplayExt,
    ): boolean;
    function mpeg_video_meta_api_get_type(): GObject.GType;
    function mpeg_video_meta_get_info(): Gst.MetaInfo;
    /**
     * Parses the MPEG 1/2 video bitstream contained in `data`, and returns the
     * offset, and if known also the size, in `packet`. This function will scan
     * the data to find the next packet if needed.
     * @param packet a {@link GstCodecParsers.MpegVideoPacket} to fill with the data and offset of the     next packet found
     * @param data The data to parse
     * @param size The size of `data`
     * @param offset The offset from which to start parsing
     * @returns TRUE if a packet start code was found, otherwise FALSE.
     */
    function mpeg_video_parse(packet: MpegVideoPacket, data: number, size: number, offset: number): boolean;
    /**
     * Converts quantization matrix `quant` from zigzag scan order to
     * raster scan order and store the resulting factors into `out_quant`.
     *
     * Note: it is an error to pass the same table in both `quant` and
     * `out_quant` arguments.
     * @param quant The source quantization matrix
     * @since 1.2
     */
    function mpeg_video_quant_matrix_get_raster_from_zigzag(quant: number): number;
    /**
     * Converts quantization matrix `quant` from raster scan order to
     * zigzag scan order and store the resulting factors into `out_quant`.
     *
     * Note: it is an error to pass the same table in both `quant` and
     * `out_quant` arguments.
     * @param quant The source quantization matrix
     * @since 1.2
     */
    function mpeg_video_quant_matrix_get_zigzag_from_raster(quant: number): number;
    /**
     * Fills the `bitplanes` structure from `seqhdr`, this function
     * should be called after `gst_vc1_parse_sequence_header` if
     * in simple or main mode, or after `gst_vc1_parse_entry_point_header`
     * if in advanced mode.
     * @param bitplanes The {@link GstCodecParsers.VC1BitPlanes} to reset
     * @param seqhdr The {@link GstCodecParsers.VC1SeqHdr} from which to set `bitplanes`
     * @returns `true` if everything went fine, `false` otherwise
     */
    function vc1_bitplanes_ensure_size(bitplanes: VC1BitPlanes, seqhdr: VC1SeqHdr): boolean;
    /**
     * @param bitplanes
     */
    function vc1_bitplanes_free(bitplanes: VC1BitPlanes): void;
    /**
     * @param bitplanes
     */
    function vc1_bitplanes_free_1(bitplanes: VC1BitPlanes): void;
    /**
     * Parses `data` and fills `bdu` fields
     * @param data The data to parse
     * @param size the size of `data`
     * @returns a {@link GstCodecParsers.VC1ParserResult}
     */
    function vc1_identify_next_bdu(data: number, size: number): [VC1ParserResult, VC1BDU];
    /**
     * Parses `data`, and sets `entrypoint` fields.
     * @param data The data to parse
     * @param size the size of `data`
     * @param seqhdr The {@link GstCodecParsers.VC1SeqHdr} currently being parsed
     * @returns a {@link GstCodecParsers.VC1EntryPointHdr}
     */
    function vc1_parse_entry_point_header(
        data: number,
        size: number,
        seqhdr: VC1SeqHdr,
    ): [VC1ParserResult, VC1EntryPointHdr];
    /**
     * Parses `data`, and fills `fieldhdr` fields.
     * @param data The data to parse
     * @param size the size of `data`
     * @param fieldhdr The {@link GstCodecParsers.VC1FrameHdr} to fill.
     * @param seqhdr The {@link GstCodecParsers.VC1SeqHdr} currently being parsed
     * @param bitplanes The {@link GstCodecParsers.VC1BitPlanes} to store bitplanes in or `null`
     * @returns a {@link GstCodecParsers.VC1ParserResult}
     */
    function vc1_parse_field_header(
        data: number,
        size: number,
        fieldhdr: VC1FrameHdr,
        seqhdr: VC1SeqHdr,
        bitplanes: VC1BitPlanes,
    ): VC1ParserResult;
    /**
     * Parses `data`, and fills `entrypoint` fields.
     * @param data The data to parse
     * @param size the size of `data`
     * @param framehdr The {@link GstCodecParsers.VC1FrameHdr} to fill.
     * @param seqhdr The {@link GstCodecParsers.VC1SeqHdr} currently being parsed
     * @param bitplanes The {@link GstCodecParsers.VC1BitPlanes} to store bitplanes in or `null`
     * @returns a {@link GstCodecParsers.VC1ParserResult}
     */
    function vc1_parse_frame_header(
        data: number,
        size: number,
        framehdr: VC1FrameHdr,
        seqhdr: VC1SeqHdr,
        bitplanes: VC1BitPlanes,
    ): VC1ParserResult;
    /**
     * Parses `data`, and fills `framelayer` fields.
     * @param data The data to parse
     * @param size the size of `data`
     * @param framelayer The {@link GstCodecParsers.VC1FrameLayer} to fill.
     * @returns a {@link GstCodecParsers.VC1ParserResult}
     */
    function vc1_parse_frame_layer(data: number, size: number, framelayer: VC1FrameLayer): VC1ParserResult;
    /**
     * Parses `data`, and fills `seqhdr` fields.
     * @param data The data to parse
     * @param size the size of `data`
     * @param seqhdr The {@link GstCodecParsers.VC1SeqHdr} to set.
     * @returns a {@link GstCodecParsers.VC1ParserResult}
     */
    function vc1_parse_sequence_header(data: number, size: number, seqhdr: VC1SeqHdr): VC1ParserResult;
    /**
     * Parses `data`, and fills `structa` fields.
     * @param data The data to parse
     * @param size the size of `data`
     * @param structa The {@link GstCodecParsers.VC1SeqStructA} to set.
     * @returns a {@link GstCodecParsers.VC1ParserResult}
     */
    function vc1_parse_sequence_header_struct_a(data: number, size: number, structa: VC1SeqStructA): VC1ParserResult;
    /**
     * Parses `data`, and fills `structb` fields.
     * @param data The data to parse
     * @param size the size of `data`
     * @param structb The {@link GstCodecParsers.VC1SeqStructB} to set.
     * @returns a {@link GstCodecParsers.VC1ParserResult}
     */
    function vc1_parse_sequence_header_struct_b(data: number, size: number, structb: VC1SeqStructB): VC1ParserResult;
    /**
     * Parses `data`, and fills `structc` fields.
     * @param data The data to parse
     * @param size the size of `data`
     * @param structc The {@link GstCodecParsers.VC1SeqStructC} to set.
     * @returns a {@link GstCodecParsers.VC1ParserResult}
     */
    function vc1_parse_sequence_header_struct_c(data: number, size: number, structc: VC1SeqStructC): VC1ParserResult;
    /**
     * Parses `data`, and fills `seqlayer` fields.
     * @param data The data to parse
     * @param size the size of `data`
     * @param seqlayer The {@link GstCodecParsers.VC1SeqLayer} to set.
     * @returns a {@link GstCodecParsers.VC1ParserResult}
     */
    function vc1_parse_sequence_layer(data: number, size: number, seqlayer: VC1SeqLayer): VC1ParserResult;
    /**
     * Parses `data`, and fills `slicehdr` fields.
     * @param data The data to parse
     * @param size The size of `data`
     * @param slicehdr The {@link GstCodecParsers.VC1SliceHdr} to fill
     * @param seqhdr The {@link GstCodecParsers.VC1SeqHdr} that was previously parsed
     * @returns a {@link GstCodecParsers.VC1ParserResult}
     * @since 1.2
     */
    function vc1_parse_slice_header(
        data: number,
        size: number,
        slicehdr: VC1SliceHdr,
        seqhdr: VC1SeqHdr,
    ): VC1ParserResult;
    /**
     * Parameters of Constrained Directional Enhancement Filter (CDEF).
     * @gir-type Struct
     */
    class AV1CDEFParams {
        static $gtype: GObject.GType<AV1CDEFParams>;

        // Fields

        cdef_damping: number;
        cdef_bits: number;
        cdef_y_pri_strength: Uint8Array;
        cdef_y_sec_strength: Uint8Array;
        cdef_uv_pri_strength: Uint8Array;
        cdef_uv_sec_strength: Uint8Array;

        // Constructors

        constructor(
            properties?: Partial<{
                cdef_damping: number;
                cdef_bits: number;
                cdef_y_pri_strength: Uint8Array;
                cdef_y_sec_strength: Uint8Array;
                cdef_uv_pri_strength: Uint8Array;
                cdef_uv_sec_strength: Uint8Array;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class AV1ColorConfig {
        static $gtype: GObject.GType<AV1ColorConfig>;

        // Fields

        high_bitdepth: boolean;
        twelve_bit: boolean;
        mono_chrome: boolean;
        color_description_present_flag: boolean;
        color_primaries: AV1ColorPrimaries;
        transfer_characteristics: AV1TransferCharacteristics;
        matrix_coefficients: AV1MatrixCoefficients;
        color_range: boolean;
        subsampling_x: number;
        subsampling_y: number;
        chroma_sample_position: AV1ChromaSamplePositions;
        separate_uv_delta_q: boolean;
    }

    /**
     * @gir-type Struct
     */
    class AV1DecoderModelInfo {
        static $gtype: GObject.GType<AV1DecoderModelInfo>;

        // Fields

        buffer_delay_length_minus_1: number;
        num_units_in_decoding_tick: number;
        buffer_removal_time_length_minus_1: number;
        frame_presentation_time_length_minus_1: number;

        // Constructors

        constructor(
            properties?: Partial<{
                buffer_delay_length_minus_1: number;
                num_units_in_decoding_tick: number;
                buffer_removal_time_length_minus_1: number;
                frame_presentation_time_length_minus_1: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class AV1FilmGrainParams {
        static $gtype: GObject.GType<AV1FilmGrainParams>;

        // Fields

        apply_grain: boolean;
        grain_seed: number;
        update_grain: boolean;
        film_grain_params_ref_idx: number;
        num_y_points: number;
        point_y_value: Uint8Array;
        point_y_scaling: Uint8Array;
        chroma_scaling_from_luma: number;
        num_cb_points: number;
        point_cb_value: Uint8Array;
        point_cb_scaling: Uint8Array;
        num_cr_points: number;
        point_cr_value: Uint8Array;
        point_cr_scaling: Uint8Array;
        grain_scaling_minus_8: number;
        ar_coeff_lag: number;
        ar_coeffs_y_plus_128: Uint8Array;
        ar_coeffs_cb_plus_128: Uint8Array;
        ar_coeffs_cr_plus_128: Uint8Array;
        ar_coeff_shift_minus_6: number;
        grain_scale_shift: number;
        cb_mult: number;
        cb_luma_mult: number;
        cb_offset: number;
        cr_mult: number;
        cr_luma_mult: number;
        cr_offset: number;
        overlap_flag: boolean;
        clip_to_restricted_range: boolean;

        // Constructors

        constructor(
            properties?: Partial<{
                apply_grain: boolean;
                grain_seed: number;
                update_grain: boolean;
                film_grain_params_ref_idx: number;
                num_y_points: number;
                point_y_value: Uint8Array;
                point_y_scaling: Uint8Array;
                chroma_scaling_from_luma: number;
                num_cb_points: number;
                point_cb_value: Uint8Array;
                point_cb_scaling: Uint8Array;
                num_cr_points: number;
                point_cr_value: Uint8Array;
                point_cr_scaling: Uint8Array;
                grain_scaling_minus_8: number;
                ar_coeff_lag: number;
                ar_coeffs_y_plus_128: Uint8Array;
                ar_coeffs_cb_plus_128: Uint8Array;
                ar_coeffs_cr_plus_128: Uint8Array;
                ar_coeff_shift_minus_6: number;
                grain_scale_shift: number;
                cb_mult: number;
                cb_luma_mult: number;
                cb_offset: number;
                cr_mult: number;
                cr_luma_mult: number;
                cr_offset: number;
                overlap_flag: boolean;
                clip_to_restricted_range: boolean;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class AV1FrameHeaderOBU {
        static $gtype: GObject.GType<AV1FrameHeaderOBU>;

        // Fields

        show_existing_frame: boolean;
        frame_to_show_map_idx: number;
        frame_presentation_time: number;
        tu_presentation_delay: number;
        display_frame_id: number;
        frame_type: AV1FrameType;
        show_frame: boolean;
        showable_frame: boolean;
        error_resilient_mode: boolean;
        disable_cdf_update: boolean;
        allow_screen_content_tools: number;
        force_integer_mv: boolean;
        current_frame_id: number;
        frame_size_override_flag: boolean;
        order_hint: number;
        primary_ref_frame: number;
        buffer_removal_time_present_flag: boolean;
        buffer_removal_time: number[];
        refresh_frame_flags: number;
        ref_order_hint: number[];
        allow_intrabc: boolean;
        frame_refs_short_signaling: boolean;
        last_frame_idx: number;
        gold_frame_idx: number;
        ref_frame_idx: Uint8Array;
        allow_high_precision_mv: boolean;
        is_motion_mode_switchable: boolean;
        use_ref_frame_mvs: boolean;
        disable_frame_end_update_cdf: boolean;
        allow_warped_motion: boolean;
        reduced_tx_set: boolean;
        render_and_frame_size_different: boolean;
        use_superres: boolean;
        is_filter_switchable: boolean;
        interpolation_filter: AV1InterpolationFilter;
        loop_filter_params: AV1LoopFilterParams;
        quantization_params: AV1QuantizationParams;
        segmentation_params: AV1SegmentationParams;
        tile_info: AV1TileInfo;
        cdef_params: AV1CDEFParams;
        tx_mode_select: boolean;
        skip_mode_present: boolean;
        reference_select: boolean;
        film_grain_params: AV1FilmGrainParams;
        superres_denom: number;
        frame_is_intra: number;
        order_hints: number[];
        ref_frame_sign_bias: number[];
        coded_lossless: number;
        all_lossless: number;
        lossless_array: Uint8Array;
        seg_qm_Level: Uint8Array;
        upscaled_width: number;
        frame_width: number;
        frame_height: number;
        render_width: number;
        render_height: number;
        tx_mode: AV1TXModes;
        skip_mode_frame: Uint8Array;
        expected_frame_id: number[];
    }

    /**
     * @gir-type Struct
     */
    class AV1FrameOBU {
        static $gtype: GObject.GType<AV1FrameOBU>;

        // Fields

        tile_group: AV1TileGroupOBU;
    }

    /**
     * @gir-type Struct
     */
    class AV1GlobalMotionParams {
        static $gtype: GObject.GType<AV1GlobalMotionParams>;

        // Fields

        is_global: boolean[];
        is_rot_zoom: boolean[];
        is_translation: boolean[];
        gm_params: number[];
        gm_type: AV1WarpModelType[];
        invalid: boolean[];
    }

    /**
     * @gir-type Struct
     */
    class AV1LoopFilterParams {
        static $gtype: GObject.GType<AV1LoopFilterParams>;

        // Fields

        loop_filter_level: Uint8Array;
        loop_filter_sharpness: number;
        loop_filter_delta_enabled: boolean;
        loop_filter_delta_update: boolean;
        loop_filter_ref_deltas: Uint8Array;
        loop_filter_mode_deltas: Uint8Array;
        delta_lf_present: boolean;
        delta_lf_res: number;
        delta_lf_multi: number;

        // Constructors

        constructor(
            properties?: Partial<{
                loop_filter_level: Uint8Array;
                loop_filter_sharpness: number;
                loop_filter_delta_enabled: boolean;
                loop_filter_delta_update: boolean;
                loop_filter_ref_deltas: Uint8Array;
                loop_filter_mode_deltas: Uint8Array;
                delta_lf_present: boolean;
                delta_lf_res: number;
                delta_lf_multi: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class AV1LoopRestorationParams {
        static $gtype: GObject.GType<AV1LoopRestorationParams>;

        // Fields

        lr_unit_shift: number;
        lr_uv_shift: boolean;
        frame_restoration_type: AV1FrameRestorationType[];
        loop_restoration_size: number[];
        uses_lr: number;
    }

    /**
     * High Dynamic Range content light level syntax metadata.
     * @gir-type Struct
     */
    class AV1MetadataHdrCll {
        static $gtype: GObject.GType<AV1MetadataHdrCll>;

        // Fields

        max_cll: number;
        max_fall: number;

        // Constructors

        constructor(
            properties?: Partial<{
                max_cll: number;
                max_fall: number;
            }>,
        );
    }

    /**
     * High Dynamic Range mastering display color volume metadata.
     * @gir-type Struct
     */
    class AV1MetadataHdrMdcv {
        static $gtype: GObject.GType<AV1MetadataHdrMdcv>;

        // Fields

        primary_chromaticity_x: number[];
        primary_chromaticity_y: number[];
        white_point_chromaticity_x: number;
        white_point_chromaticity_y: number;
        luminance_max: number;
        luminance_min: number;

        // Constructors

        constructor(
            properties?: Partial<{
                primary_chromaticity_x: number[];
                primary_chromaticity_y: number[];
                white_point_chromaticity_x: number;
                white_point_chromaticity_y: number;
                luminance_max: number;
                luminance_min: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class AV1MetadataITUT_T35 {
        static $gtype: GObject.GType<AV1MetadataITUT_T35>;

        // Fields

        itu_t_t35_country_code: number;
        itu_t_t35_country_code_extention_byte: number;
        itu_t_t35_payload_bytes: number;

        // Constructors

        constructor(
            properties?: Partial<{
                itu_t_t35_country_code: number;
                itu_t_t35_country_code_extention_byte: number;
                itu_t_t35_payload_bytes: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class AV1MetadataOBU {
        static $gtype: GObject.GType<AV1MetadataOBU>;

        // Fields

        metadata_type: AV1MetadataType;
    }

    /**
     * The scalability metadata OBU is intended for use by intermediate
     * processing entities that may perform selective layer elimination.
     * @gir-type Struct
     */
    class AV1MetadataScalability {
        static $gtype: GObject.GType<AV1MetadataScalability>;

        // Fields

        scalability_mode_idc: AV1ScalabilityModes;
        spatial_layers_cnt_minus_1: number;
        spatial_layer_dimensions_present_flag: boolean;
        spatial_layer_description_present_flag: boolean;
        temporal_group_description_present_flag: boolean;
        spatial_layer_max_width: number[];
        spatial_layer_max_height: number[];
        spatial_layer_ref_id: Uint8Array;
        temporal_group_size: number;
        temporal_group_temporal_id: Uint8Array;
        temporal_group_temporal_switching_up_point_flag: Uint8Array;
        temporal_group_spatial_switching_up_point_flag: Uint8Array;
        temporal_group_ref_cnt: Uint8Array;
        temporal_group_ref_pic_diff: Uint8Array;
    }

    /**
     * @gir-type Struct
     */
    class AV1MetadataTimecode {
        static $gtype: GObject.GType<AV1MetadataTimecode>;

        // Fields

        counting_type: number;
        full_timestamp_flag: boolean;
        discontinuity_flag: boolean;
        cnt_dropped_flag: boolean;
        n_frames: number;
        seconds_flag: boolean;
        seconds_value: number;
        minutes_flag: boolean;
        minutes_value: number;
        hours_flag: boolean;
        hours_value: number;
        time_offset_length: number;
        time_offset_value: number;

        // Constructors

        constructor(
            properties?: Partial<{
                counting_type: number;
                full_timestamp_flag: boolean;
                discontinuity_flag: boolean;
                cnt_dropped_flag: boolean;
                n_frames: number;
                seconds_flag: boolean;
                seconds_value: number;
                minutes_flag: boolean;
                minutes_value: number;
                hours_flag: boolean;
                hours_value: number;
                time_offset_length: number;
                time_offset_value: number;
            }>,
        );
    }

    /**
     * It is the general representation of AV1 OBU (Open Bitstream
     * Unit). One OBU include its header and payload.
     * @gir-type Struct
     */
    class AV1OBU {
        static $gtype: GObject.GType<AV1OBU>;

        // Fields

        obu_type: AV1OBUType;
        data: number;
        obu_size: number;
    }

    /**
     * Collect info for OBU header and OBU extension header if
     * obu_extension_flag == 1.
     * @gir-type Struct
     */
    class AV1OBUHeader {
        static $gtype: GObject.GType<AV1OBUHeader>;

        // Fields

        obu_type: AV1OBUType;
        obu_extention_flag: boolean;
        obu_has_size_field: boolean;
        obu_temporal_id: number;
        obu_spatial_id: number;
    }

    /**
     * @gir-type Struct
     */
    class AV1OperatingPoint {
        static $gtype: GObject.GType<AV1OperatingPoint>;

        // Fields

        seq_level_idx: number;
        seq_tier: number;
        idc: number;
        decoder_model_present_for_this_op: boolean;
        decoder_buffer_delay: number;
        encoder_buffer_delay: number;
        low_delay_mode_flag: boolean;
        initial_display_delay_present_for_this_op: boolean;
        initial_display_delay_minus_1: number;

        // Constructors

        constructor(
            properties?: Partial<{
                seq_level_idx: number;
                seq_tier: number;
                idc: number;
                decoder_model_present_for_this_op: boolean;
                decoder_buffer_delay: number;
                encoder_buffer_delay: number;
                low_delay_mode_flag: boolean;
                initial_display_delay_present_for_this_op: boolean;
                initial_display_delay_minus_1: number;
            }>,
        );
    }

    /**
     * For more details about the structures, you can refer to the AV1 Bitstream &
     * Decoding Process Specification V1.0.0
     * [specification](https://aomediacodec.github.io/av1-spec/av1-spec.pdf)
     *
     * It offers you bitstream parsing of low overhead bistream format (Section 5)
     * or Annex B according to the setting of the parser. By calling the function of
     * `gst_av1_parser_reset()`, user can switch between bistream mode and Annex B mode.
     *
     * To retrieve OBUs and parse its headers, you should firstly call the function of
     * `gst_av1_parser_identify_one_obu()` to get the OBU type if succeeds or just discard
     * the data if fails.
     *
     * Then, depending on the {@link GstCodecParsers.AV1OBUType} of the newly parsed {@link GstCodecParsers.AV1OBU},
     * you should call the differents functions to parse the structure details:
     *
     *   * {@link GstCodecParsers.AV1OBUType.SEQUENCE_HEADER}: `gst_av1_parser_parse_sequence_header_obu()`
     *
     *   * {@link GstCodecParsers.AV1OBUType.TEMPORAL_DELIMITER}: `gst_av1_parser_parse_temporal_delimiter_obu()`
     *
     *   * {@link GstCodecParsers.AV1OBUType.FRAME}: `gst_av1_parser_parse_frame_obu()`
     *
     *   * {@link GstCodecParsers.AV1OBUType.FRAME_HEADER}: `gst_av1_parser_parse_frame_header_obu()`
     *
     *   * {@link GstCodecParsers.AV1OBUType.TILE_GROUP}: `gst_av1_parser_parse_tile_group_obu()`
     *
     *   * {@link GstCodecParsers.AV1OBUType.METADATA}: `gst_av1_parser_parse_metadata_obu()`
     *
     *   * {@link GstCodecParsers.AV1OBUType.REDUNDANT_FRAME_HEADER}: `gst_av1_parser_parse_frame_header_obu()`
     *
     *   * {@link GstCodecParsers.AV1OBUType.TILE_LIST}: `gst_av1_parser_parse_tile_list_obu()`
     *
     * Note: Some parser functions are dependent on information provided in the sequence
     * header and reference frame's information. It maintains a state inside itself, which
     * contains all global vars and reference information during the whole parsing process.
     * Calling `gst_av1_parser_reset()` or a new sequence's arriving can clear and reset this
     * inside state.
     *
     * After successfully handled a frame(for example, decode a frame successfully), you
     * should call `gst_av1_parser_reference_frame_update()` to update the parser's inside
     * state(such as reference information, global segmentation information, etc).
     * @gir-type Struct
     * @since 1.18
     */
    class AV1Parser {
        static $gtype: GObject.GType<AV1Parser>;

        // Methods

        /**
         * If parser is not `null`, frees its allocated memory.
         *
         * It cannot be used afterwards.
         */
        free(): void;
        /**
         * Identify one `obu`'s type from the incoming data stream. This function
         * should be called first to know the type of `obu` before other parse APIs.
         * @param data the data to parse
         * @param size the size of `data`
         * @param obu a {@link GstCodecParsers.AV1OBU} to store the identified result
         * @returns The {@link GstCodecParsers.AV1ParserResult}.
         */
        identify_one_obu(data: number, size: number, obu: AV1OBU): [AV1ParserResult, number];
        /**
         * Parse one frame header `obu` based on the `parser` context, store the result
         * in the `frame`.
         * @param obu a {@link GstCodecParsers.AV1OBU} to be parsed
         * @param frame_header a {@link GstCodecParsers.AV1FrameHeaderOBU} to store the parsed result.
         * @returns The {@link GstCodecParsers.AV1ParserResult}.
         */
        parse_frame_header_obu(obu: AV1OBU, frame_header: AV1FrameHeaderOBU): AV1ParserResult;
        /**
         * Parse one frame `obu` based on the `parser` context, store the result
         * in the `frame`.
         * @param obu a {@link GstCodecParsers.AV1OBU} to be parsed
         * @param frame a {@link GstCodecParsers.AV1FrameOBU} to store the parsed result.
         * @returns The {@link GstCodecParsers.AV1ParserResult}.
         */
        parse_frame_obu(obu: AV1OBU, frame: AV1FrameOBU): AV1ParserResult;
        /**
         * Parse one meta data `obu` based on the `parser` context.
         * @param obu a {@link GstCodecParsers.AV1OBU} to be parsed
         * @param metadata a {@link GstCodecParsers.AV1MetadataOBU} to store the parsed result.
         * @returns The {@link GstCodecParsers.AV1ParserResult}.
         */
        parse_metadata_obu(obu: AV1OBU, metadata: AV1MetadataOBU): AV1ParserResult;
        /**
         * Parse one sequence header `obu` based on the `parser` context, store the
         * result in the `seq_header`.
         * @param obu a {@link GstCodecParsers.AV1OBU} to be parsed
         * @param seq_header a {@link GstCodecParsers.AV1SequenceHeaderOBU} to store the parsed result.
         * @returns The {@link GstCodecParsers.AV1ParserResult}.
         */
        parse_sequence_header_obu(obu: AV1OBU, seq_header: AV1SequenceHeaderOBU): AV1ParserResult;
        /**
         * Parse one temporal delimiter `obu` based on the `parser` context.
         * The temporal delimiter is just delimiter and contains no content.
         * @param obu a {@link GstCodecParsers.AV1OBU} to be parsed
         * @returns The {@link GstCodecParsers.AV1ParserResult}.
         */
        parse_temporal_delimiter_obu(obu: AV1OBU): AV1ParserResult;
        /**
         * Parse one tile group `obu` based on the `parser` context, store the result
         * in the `tile_group`.
         * @param obu a {@link GstCodecParsers.AV1OBU} to be parsed
         * @param tile_group a {@link GstCodecParsers.AV1TileGroupOBU} to store the parsed result.
         * @returns The {@link GstCodecParsers.AV1ParserResult}.
         */
        parse_tile_group_obu(obu: AV1OBU, tile_group: AV1TileGroupOBU): AV1ParserResult;
        /**
         * Parse one tile list `obu` based on the `parser` context, store the result
         * in the `tile_list`. It is for large scale tile coding mode.
         * @param obu a {@link GstCodecParsers.AV1OBU} to be parsed
         * @param tile_list a {@link GstCodecParsers.AV1TileListOBU} to store the parsed result.
         * @returns The {@link GstCodecParsers.AV1ParserResult}.
         */
        parse_tile_list_obu(obu: AV1OBU, tile_list: AV1TileListOBU): AV1ParserResult;
        /**
         * Update the context of `frame_header` to parser's state. This function is
         * used when we finish one frame's decoding/showing, and need to update info
         * such as reference, global parameters.
         * @param frame_header a {@link GstCodecParsers.AV1FrameHeaderOBU} to load
         * @returns The {@link GstCodecParsers.AV1ParserResult}.
         */
        reference_frame_update(frame_header: AV1FrameHeaderOBU): AV1ParserResult;
        /**
         * Reset the current {@link GstCodecParsers.AV1Parser}'s state totally.
         * @param annex_b indicate whether conforms to annex b
         */
        reset(annex_b: boolean): void;
        /**
         * Only reset the current {@link GstCodecParsers.AV1Parser}'s annex b context.
         * The other part of the state is kept.
         */
        reset_annex_b(): void;
        /**
         * Set the operating point to filter OBUs.
         * @param operating_point the operating point to set
         * @returns The {@link GstCodecParsers.AV1ParserResult}.
         */
        set_operating_point(operating_point: number): AV1ParserResult;
    }

    /**
     * @gir-type Struct
     */
    class AV1ParserState {
        static $gtype: GObject.GType<AV1ParserState>;

        // Fields

        operating_point: number;
        seen_frame_header: number;
        operating_point_idc: number;
        sequence_changed: boolean;
        begin_first_frame: boolean;
        upscaled_width: number;
        frame_width: number;
        frame_height: number;
        mi_cols: number;
        mi_rows: number;
        render_width: number;
        render_height: number;
        prev_frame_id: number;
        current_frame_id: number;
        mi_col_starts: number[];
        mi_row_starts: number[];
        tile_cols_log2: number;
        tile_cols: number;
        tile_rows_log2: number;
        tile_rows: number;
        tile_size_bytes: number;
    }

    /**
     * @gir-type Struct
     */
    class AV1QuantizationParams {
        static $gtype: GObject.GType<AV1QuantizationParams>;

        // Fields

        base_q_idx: number;
        diff_uv_delta: boolean;
        using_qmatrix: boolean;
        qm_y: number;
        qm_u: number;
        qm_v: number;
        delta_q_present: boolean;
        delta_q_res: number;
        delta_q_y_dc: number;
        delta_q_u_dc: number;
        delta_q_u_ac: number;
        delta_q_v_dc: number;
        delta_q_v_ac: number;

        // Constructors

        constructor(
            properties?: Partial<{
                base_q_idx: number;
                diff_uv_delta: boolean;
                using_qmatrix: boolean;
                qm_y: number;
                qm_u: number;
                qm_v: number;
                delta_q_present: boolean;
                delta_q_res: number;
                delta_q_y_dc: number;
                delta_q_u_dc: number;
                delta_q_u_ac: number;
                delta_q_v_dc: number;
                delta_q_v_ac: number;
            }>,
        );
    }

    /**
     * All the info related to a reference frames.
     * @gir-type Struct
     */
    class AV1ReferenceFrameInfo {
        static $gtype: GObject.GType<AV1ReferenceFrameInfo>;
    }

    /**
     * @gir-type Struct
     */
    class AV1ReferenceFrameInfoEntry {
        static $gtype: GObject.GType<AV1ReferenceFrameInfoEntry>;

        // Fields

        ref_valid: boolean;
        ref_frame_id: number;
        ref_upscaled_width: number;
        ref_frame_width: number;
        ref_frame_height: number;
        ref_render_width: number;
        ref_render_height: number;
        ref_mi_cols: number;
        ref_mi_rows: number;
        ref_frame_type: AV1FrameType;
        ref_subsampling_x: number;
        ref_subsampling_y: number;
        ref_bit_depth: number;
        ref_order_hint: number;
        ref_segmentation_params: AV1SegmentationParams;
        ref_lf_params: AV1LoopFilterParams;
        ref_film_grain_params: AV1FilmGrainParams;
        ref_tile_info: AV1TileInfo;
    }

    /**
     * @gir-type Struct
     */
    class AV1SegmentationParams {
        static $gtype: GObject.GType<AV1SegmentationParams>;

        // Fields

        segmentation_enabled: boolean;
        segmentation_update_map: number;
        segmentation_temporal_update: number;
        segmentation_update_data: number;
        feature_enabled: Uint8Array;
        feature_data: number[];
        seg_id_pre_skip: number;
        last_active_seg_id: number;

        // Constructors

        constructor(
            properties?: Partial<{
                segmentation_enabled: boolean;
                segmentation_update_map: number;
                segmentation_temporal_update: number;
                segmentation_update_data: number;
                feature_enabled: Uint8Array;
                feature_data: number[];
                seg_id_pre_skip: number;
                last_active_seg_id: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class AV1SequenceHeaderOBU {
        static $gtype: GObject.GType<AV1SequenceHeaderOBU>;

        // Fields

        seq_profile: AV1Profile;
        still_picture: boolean;
        reduced_still_picture_header: number;
        frame_width_bits_minus_1: number;
        frame_height_bits_minus_1: number;
        max_frame_width_minus_1: number;
        max_frame_height_minus_1: number;
        frame_id_numbers_present_flag: boolean;
        delta_frame_id_length_minus_2: number;
        additional_frame_id_length_minus_1: number;
        use_128x128_superblock: boolean;
        enable_filter_intra: boolean;
        enable_intra_edge_filter: boolean;
        enable_interintra_compound: boolean;
        enable_masked_compound: boolean;
        enable_warped_motion: boolean;
        enable_order_hint: boolean;
        enable_dual_filter: boolean;
        enable_jnt_comp: boolean;
        enable_ref_frame_mvs: boolean;
        seq_choose_screen_content_tools: boolean;
        seq_force_screen_content_tools: number;
        seq_choose_integer_mv: boolean;
        seq_force_integer_mv: number;
        order_hint_bits_minus_1: number;
        enable_superres: boolean;
        enable_cdef: boolean;
        enable_restoration: boolean;
        film_grain_params_present: number;
        operating_points_cnt_minus_1: number;
        operating_points: AV1OperatingPoint[];
        decoder_model_info_present_flag: boolean;
        decoder_model_info: AV1DecoderModelInfo;
        initial_display_delay_present_flag: number;
        timing_info_present_flag: boolean;
        timing_info: AV1TimingInfo;
        order_hint_bits: number;
        bit_depth: number;
        num_planes: number;
    }

    /**
     * @gir-type Struct
     */
    class AV1TileGroupOBU {
        static $gtype: GObject.GType<AV1TileGroupOBU>;

        // Fields

        tile_start_and_end_present_flag: boolean;
        tg_start: number;
        tg_end: number;
        entry: AV1TileGroupOBUEntry[];
        num_tiles: number;

        // Constructors

        constructor(
            properties?: Partial<{
                tile_start_and_end_present_flag: boolean;
                tg_start: number;
                tg_end: number;
                entry: AV1TileGroupOBUEntry[];
                num_tiles: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class AV1TileGroupOBUEntry {
        static $gtype: GObject.GType<AV1TileGroupOBUEntry>;

        // Fields

        tile_offset: number;
        tile_size: number;
        tile_row: number;
        tile_col: number;
        mi_row_start: number;
        mi_row_end: number;
        mi_col_start: number;
        mi_col_end: number;

        // Constructors

        constructor(
            properties?: Partial<{
                tile_offset: number;
                tile_size: number;
                tile_row: number;
                tile_col: number;
                mi_row_start: number;
                mi_row_end: number;
                mi_col_start: number;
                mi_col_end: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class AV1TileInfo {
        static $gtype: GObject.GType<AV1TileInfo>;

        // Fields

        uniform_tile_spacing_flag: number;
        increment_tile_rows_log2: number;
        width_in_sbs_minus_1: number[];
        height_in_sbs_minus_1: number[];
        tile_size_bytes_minus_1: number;
        context_update_tile_id: number;
        mi_col_starts: number[];
        mi_row_starts: number[];
        tile_cols_log2: number;
        tile_cols: number;
        tile_rows_log2: number;
        tile_rows: number;
        tile_size_bytes: number;

        // Constructors

        constructor(
            properties?: Partial<{
                uniform_tile_spacing_flag: number;
                increment_tile_rows_log2: number;
                width_in_sbs_minus_1: number[];
                height_in_sbs_minus_1: number[];
                tile_size_bytes_minus_1: number;
                context_update_tile_id: number;
                mi_col_starts: number[];
                mi_row_starts: number[];
                tile_cols_log2: number;
                tile_cols: number;
                tile_rows_log2: number;
                tile_rows: number;
                tile_size_bytes: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class AV1TileListOBU {
        static $gtype: GObject.GType<AV1TileListOBU>;

        // Fields

        output_frame_width_in_tiles_minus_1: number;
        output_frame_height_in_tiles_minus_1: number;
        tile_count_minus_1: number;
        entry: AV1TileListOBUEntry[];

        // Constructors

        constructor(
            properties?: Partial<{
                output_frame_width_in_tiles_minus_1: number;
                output_frame_height_in_tiles_minus_1: number;
                tile_count_minus_1: number;
                entry: AV1TileListOBUEntry[];
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class AV1TileListOBUEntry {
        static $gtype: GObject.GType<AV1TileListOBUEntry>;

        // Fields

        anchor_frame_idx: number;
        anchor_tile_row: number;
        anchor_tile_col: number;
        tile_data_size_minus_1: number;
        coded_tile_data: number;

        // Constructors

        constructor(
            properties?: Partial<{
                anchor_frame_idx: number;
                anchor_tile_row: number;
                anchor_tile_col: number;
                tile_data_size_minus_1: number;
                coded_tile_data: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class AV1TimingInfo {
        static $gtype: GObject.GType<AV1TimingInfo>;

        // Fields

        num_units_in_display_tick: number;
        time_scale: number;
        equal_picture_interval: boolean;
        num_ticks_per_picture_minus_1: number;

        // Constructors

        constructor(
            properties?: Partial<{
                num_units_in_display_tick: number;
                time_scale: number;
                equal_picture_interval: boolean;
                num_ticks_per_picture_minus_1: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class H264BufferingPeriod {
        static $gtype: GObject.GType<H264BufferingPeriod>;

        // Fields

        sps: H264SPS;
        nal_initial_cpb_removal_delay: number[];
        nal_initial_cpb_removal_delay_offset: number[];
        vcl_initial_cpb_removal_delay: number[];
        vcl_initial_cpb_removal_delay_offset: number[];

        // Constructors

        constructor(
            properties?: Partial<{
                nal_initial_cpb_removal_delay: number[];
                nal_initial_cpb_removal_delay_offset: number[];
                vcl_initial_cpb_removal_delay: number[];
                vcl_initial_cpb_removal_delay_offset: number[];
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class H264ClockTimestamp {
        static $gtype: GObject.GType<H264ClockTimestamp>;

        // Fields

        ct_type: number;
        nuit_field_based_flag: number;
        counting_type: number;
        full_timestamp_flag: number;
        discontinuity_flag: number;
        cnt_dropped_flag: number;
        n_frames: number;
        seconds_flag: number;
        seconds_value: number;
        minutes_flag: number;
        minutes_value: number;
        hours_flag: number;
        hours_value: number;
        time_offset: number;

        // Constructors

        constructor(
            properties?: Partial<{
                ct_type: number;
                nuit_field_based_flag: number;
                counting_type: number;
                full_timestamp_flag: number;
                discontinuity_flag: number;
                cnt_dropped_flag: number;
                n_frames: number;
                seconds_flag: number;
                seconds_value: number;
                minutes_flag: number;
                minutes_value: number;
                hours_flag: number;
                hours_value: number;
                time_offset: number;
            }>,
        );
    }

    /**
     * The upper bounds for the nominal target brightness light level
     * as specified in CEA-861.3
     * D.2.31
     * @gir-type Struct
     * @since 1.18
     */
    class H264ContentLightLevel {
        static $gtype: GObject.GType<H264ContentLightLevel>;

        // Fields

        max_content_light_level: number;
        max_pic_average_light_level: number;

        // Constructors

        constructor(
            properties?: Partial<{
                max_content_light_level: number;
                max_pic_average_light_level: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class H264DecRefPicMarking {
        static $gtype: GObject.GType<H264DecRefPicMarking>;

        // Fields

        no_output_of_prior_pics_flag: number;
        long_term_reference_flag: number;
        adaptive_ref_pic_marking_mode_flag: number;
        ref_pic_marking: H264RefPicMarking[];
        n_ref_pic_marking: number;
        bit_size: number;

        // Constructors

        constructor(
            properties?: Partial<{
                no_output_of_prior_pics_flag: number;
                long_term_reference_flag: number;
                adaptive_ref_pic_marking_mode_flag: number;
                ref_pic_marking: H264RefPicMarking[];
                n_ref_pic_marking: number;
                bit_size: number;
            }>,
        );
    }

    /**
     * Contains AVCDecoderConfigurationRecord data as defined in ISO/IEC 14496-15
     * @gir-type Struct
     * @since 1.22
     */
    class H264DecoderConfigRecord {
        static $gtype: GObject.GType<H264DecoderConfigRecord>;

        // Fields

        configuration_version: number;
        profile_indication: number;
        profile_compatibility: number;
        level_indication: number;
        length_size_minus_one: number;
        sps: any[];
        pps: any[];
        chroma_format_present: boolean;
        chroma_format: number;
        bit_depth_luma_minus8: number;
        bit_depth_chroma_minus8: number;
        sps_ext: any[];

        // Constructors

        constructor(
            properties?: Partial<{
                configuration_version: number;
                profile_indication: number;
                profile_compatibility: number;
                level_indication: number;
                length_size_minus_one: number;
                sps: any[];
                pps: any[];
                chroma_format_present: boolean;
                chroma_format: number;
                bit_depth_luma_minus8: number;
                bit_depth_chroma_minus8: number;
                sps_ext: any[];
            }>,
        );

        // Methods

        /**
         * Free `config` data
         */
        free(): void;
    }

    /**
     * @gir-type Struct
     * @since 1.6
     */
    class H264FramePacking {
        static $gtype: GObject.GType<H264FramePacking>;

        // Fields

        frame_packing_id: number;
        frame_packing_cancel_flag: number;
        frame_packing_type: number;
        quincunx_sampling_flag: number;
        content_interpretation_type: number;
        spatial_flipping_flag: number;
        frame0_flipped_flag: number;
        field_views_flag: number;
        current_frame_is_frame0_flag: number;
        frame0_self_contained_flag: number;
        frame1_self_contained_flag: number;
        frame0_grid_position_x: number;
        frame0_grid_position_y: number;
        frame1_grid_position_x: number;
        frame1_grid_position_y: number;
        frame_packing_repetition_period: number;

        // Constructors

        constructor(
            properties?: Partial<{
                frame_packing_id: number;
                frame_packing_cancel_flag: number;
                frame_packing_type: number;
                quincunx_sampling_flag: number;
                content_interpretation_type: number;
                spatial_flipping_flag: number;
                frame0_flipped_flag: number;
                field_views_flag: number;
                current_frame_is_frame0_flag: number;
                frame0_self_contained_flag: number;
                frame1_self_contained_flag: number;
                frame0_grid_position_x: number;
                frame0_grid_position_y: number;
                frame1_grid_position_x: number;
                frame1_grid_position_y: number;
                frame_packing_repetition_period: number;
            }>,
        );
    }

    /**
     * Defines the HRD parameters
     * @gir-type Struct
     */
    class H264HRDParams {
        static $gtype: GObject.GType<H264HRDParams>;

        // Fields

        cpb_cnt_minus1: number;
        bit_rate_scale: number;
        cpb_size_scale: number;
        bit_rate_value_minus1: number[];
        cpb_size_value_minus1: number[];
        cbr_flag: Uint8Array;
        initial_cpb_removal_delay_length_minus1: number;
        cpb_removal_delay_length_minus1: number;
        dpb_output_delay_length_minus1: number;
        time_offset_length: number;

        // Constructors

        constructor(
            properties?: Partial<{
                cpb_cnt_minus1: number;
                bit_rate_scale: number;
                cpb_size_scale: number;
                bit_rate_value_minus1: number[];
                cpb_size_value_minus1: number[];
                cbr_flag: Uint8Array;
                initial_cpb_removal_delay_length_minus1: number;
                cpb_removal_delay_length_minus1: number;
                dpb_output_delay_length_minus1: number;
                time_offset_length: number;
            }>,
        );
    }

    /**
     * The colour volume (primaries, white point and luminance range) of display
     * defined by SMPTE ST 2086.
     * D.2.29
     * @gir-type Struct
     * @since 1.18
     */
    class H264MasteringDisplayColourVolume {
        static $gtype: GObject.GType<H264MasteringDisplayColourVolume>;

        // Fields

        display_primaries_x: number[];
        display_primaries_y: number[];
        white_point_x: number;
        white_point_y: number;
        max_display_mastering_luminance: number;
        min_display_mastering_luminance: number;

        // Constructors

        constructor(
            properties?: Partial<{
                display_primaries_x: number[];
                display_primaries_y: number[];
                white_point_x: number;
                white_point_y: number;
                max_display_mastering_luminance: number;
                min_display_mastering_luminance: number;
            }>,
        );
    }

    /**
     * H264 NAL Parser (opaque structure).
     * @gir-type Struct
     */
    class H264NalParser {
        static $gtype: GObject.GType<H264NalParser>;

        // Constructors

        constructor(properties?: Partial<{}>);

        // Methods

        /**
         * Frees `nalparser`
         */
        free(): void;
    }

    /**
     * Structure defining the NAL unit headers
     * @gir-type Struct
     */
    class H264NalUnit {
        static $gtype: GObject.GType<H264NalUnit>;

        // Fields

        ref_idc: number;
        type: number;
        idr_pic_flag: number;
        size: number;
        offset: number;
        sc_offset: number;
        valid: boolean;
        data: number;
        header_bytes: number;
        extension_type: number;

        // Constructors

        constructor(
            properties?: Partial<{
                ref_idc: number;
                type: number;
                idr_pic_flag: number;
                size: number;
                offset: number;
                sc_offset: number;
                valid: boolean;
                data: number;
                header_bytes: number;
                extension_type: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     * @since 1.6
     */
    class H264NalUnitExtensionMVC {
        static $gtype: GObject.GType<H264NalUnitExtensionMVC>;

        // Fields

        non_idr_flag: number;
        priority_id: number;
        view_id: number;
        temporal_id: number;
        anchor_pic_flag: number;
        inter_view_flag: number;

        // Constructors

        constructor(
            properties?: Partial<{
                non_idr_flag: number;
                priority_id: number;
                view_id: number;
                temporal_id: number;
                anchor_pic_flag: number;
                inter_view_flag: number;
            }>,
        );
    }

    /**
     * H264 Picture Parameter Set
     * @gir-type Struct
     */
    class H264PPS {
        static $gtype: GObject.GType<H264PPS>;

        // Fields

        id: number;
        sequence: H264SPS;
        entropy_coding_mode_flag: number;
        pic_order_present_flag: number;
        num_slice_groups_minus1: number;
        slice_group_map_type: number;
        run_length_minus1: number[];
        top_left: number[];
        bottom_right: number[];
        slice_group_change_direction_flag: number;
        slice_group_change_rate_minus1: number;
        pic_size_in_map_units_minus1: number;
        slice_group_id: number;
        num_ref_idx_l0_active_minus1: number;
        num_ref_idx_l1_active_minus1: number;
        weighted_pred_flag: number;
        weighted_bipred_idc: number;
        pic_init_qp_minus26: number;
        pic_init_qs_minus26: number;
        chroma_qp_index_offset: number;
        deblocking_filter_control_present_flag: number;
        constrained_intra_pred_flag: number;
        redundant_pic_cnt_present_flag: number;
        transform_8x8_mode_flag: number;
        scaling_lists_4x4: Uint8Array;
        scaling_lists_8x8: Uint8Array;
        second_chroma_qp_index_offset: number;
        valid: boolean;
        pic_scaling_matrix_present_flag: number;
        sps_id: number;

        // Constructors

        constructor(
            properties?: Partial<{
                id: number;
                entropy_coding_mode_flag: number;
                pic_order_present_flag: number;
                num_slice_groups_minus1: number;
                slice_group_map_type: number;
                run_length_minus1: number[];
                top_left: number[];
                bottom_right: number[];
                slice_group_change_direction_flag: number;
                slice_group_change_rate_minus1: number;
                pic_size_in_map_units_minus1: number;
                slice_group_id: number;
                num_ref_idx_l0_active_minus1: number;
                num_ref_idx_l1_active_minus1: number;
                weighted_pred_flag: number;
                weighted_bipred_idc: number;
                pic_init_qp_minus26: number;
                pic_init_qs_minus26: number;
                chroma_qp_index_offset: number;
                deblocking_filter_control_present_flag: number;
                constrained_intra_pred_flag: number;
                redundant_pic_cnt_present_flag: number;
                transform_8x8_mode_flag: number;
                scaling_lists_4x4: Uint8Array;
                scaling_lists_8x8: Uint8Array;
                second_chroma_qp_index_offset: number;
                valid: boolean;
                pic_scaling_matrix_present_flag: number;
                sps_id: number;
            }>,
        );

        // Methods

        /**
         * Clears all `pps` internal resources.
         */
        clear(): void;
    }

    /**
     * @gir-type Struct
     */
    class H264PicTiming {
        static $gtype: GObject.GType<H264PicTiming>;

        // Fields

        CpbDpbDelaysPresentFlag: number;
        cpb_removal_delay_length_minus1: number;
        dpb_output_delay_length_minus1: number;
        cpb_removal_delay: number;
        dpb_output_delay: number;
        pic_struct_present_flag: number;
        pic_struct: number;
        clock_timestamp_flag: Uint8Array;
        clock_timestamp: H264ClockTimestamp[];
        time_offset_length: number;

        // Constructors

        constructor(
            properties?: Partial<{
                CpbDpbDelaysPresentFlag: number;
                cpb_removal_delay_length_minus1: number;
                dpb_output_delay_length_minus1: number;
                cpb_removal_delay: number;
                dpb_output_delay: number;
                pic_struct_present_flag: number;
                pic_struct: number;
                clock_timestamp_flag: Uint8Array;
                clock_timestamp: H264ClockTimestamp[];
                time_offset_length: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class H264PredWeightTable {
        static $gtype: GObject.GType<H264PredWeightTable>;

        // Fields

        luma_log2_weight_denom: number;
        chroma_log2_weight_denom: number;
        luma_weight_l0: number[];
        luma_offset_l0: Uint8Array;
        chroma_weight_l0: number[];
        chroma_offset_l0: Uint8Array;
        luma_weight_l1: number[];
        luma_offset_l1: Uint8Array;
        chroma_weight_l1: number[];
        chroma_offset_l1: Uint8Array;

        // Constructors

        constructor(
            properties?: Partial<{
                luma_log2_weight_denom: number;
                chroma_log2_weight_denom: number;
                luma_weight_l0: number[];
                luma_offset_l0: Uint8Array;
                chroma_weight_l0: number[];
                chroma_offset_l0: Uint8Array;
                luma_weight_l1: number[];
                luma_offset_l1: Uint8Array;
                chroma_weight_l1: number[];
                chroma_offset_l1: Uint8Array;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class H264RecoveryPoint {
        static $gtype: GObject.GType<H264RecoveryPoint>;

        // Fields

        recovery_frame_cnt: number;
        exact_match_flag: number;
        broken_link_flag: number;
        changing_slice_group_idc: number;

        // Constructors

        constructor(
            properties?: Partial<{
                recovery_frame_cnt: number;
                exact_match_flag: number;
                broken_link_flag: number;
                changing_slice_group_idc: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class H264RefPicListModification {
        static $gtype: GObject.GType<H264RefPicListModification>;

        // Fields

        modification_of_pic_nums_idc: number;

        // Constructors

        constructor(
            properties?: Partial<{
                modification_of_pic_nums_idc: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class H264RefPicMarking {
        static $gtype: GObject.GType<H264RefPicMarking>;

        // Fields

        memory_management_control_operation: number;
        difference_of_pic_nums_minus1: number;
        long_term_pic_num: number;
        long_term_frame_idx: number;
        max_long_term_frame_idx_plus1: number;

        // Constructors

        constructor(
            properties?: Partial<{
                memory_management_control_operation: number;
                difference_of_pic_nums_minus1: number;
                long_term_pic_num: number;
                long_term_frame_idx: number;
                max_long_term_frame_idx_plus1: number;
            }>,
        );
    }

    /**
     * The User data registered by Rec. ITU-T T.35 SEI messag.
     * @gir-type Struct
     * @since 1.16
     */
    class H264RegisteredUserData {
        static $gtype: GObject.GType<H264RegisteredUserData>;

        // Fields

        country_code: number;
        country_code_extension: number;
        data: number;
        size: number;

        // Constructors

        constructor(
            properties?: Partial<{
                country_code: number;
                country_code_extension: number;
                data: number;
                size: number;
            }>,
        );
    }

    /**
     * Constains information about SEI message. The content depends on the
     * `payloadType`.
     * @gir-type Struct
     */
    class H264SEIMessage {
        static $gtype: GObject.GType<H264SEIMessage>;

        // Fields

        payloadType: H264SEIPayloadType;
    }

    /**
     * Contains unhandled SEI payload data. This SEI may or may not
     * be defined by spec
     * @gir-type Struct
     * @since 1.18
     */
    class H264SEIUnhandledPayload {
        static $gtype: GObject.GType<H264SEIUnhandledPayload>;

        // Fields

        payloadType: number;
        data: number;
        size: number;

        // Constructors

        constructor(
            properties?: Partial<{
                payloadType: number;
                data: number;
                size: number;
            }>,
        );
    }

    /**
     * H264 Sequence Parameter Set (SPS)
     * @gir-type Struct
     */
    class H264SPS {
        static $gtype: GObject.GType<H264SPS>;

        // Fields

        id: number;
        profile_idc: number;
        constraint_set0_flag: number;
        constraint_set1_flag: number;
        constraint_set2_flag: number;
        constraint_set3_flag: number;
        constraint_set4_flag: number;
        constraint_set5_flag: number;
        level_idc: number;
        chroma_format_idc: number;
        separate_colour_plane_flag: number;
        bit_depth_luma_minus8: number;
        bit_depth_chroma_minus8: number;
        qpprime_y_zero_transform_bypass_flag: number;
        scaling_matrix_present_flag: number;
        scaling_lists_4x4: Uint8Array;
        scaling_lists_8x8: Uint8Array;
        log2_max_frame_num_minus4: number;
        pic_order_cnt_type: number;
        log2_max_pic_order_cnt_lsb_minus4: number;
        delta_pic_order_always_zero_flag: number;
        offset_for_non_ref_pic: number;
        offset_for_top_to_bottom_field: number;
        num_ref_frames_in_pic_order_cnt_cycle: number;
        offset_for_ref_frame: number[];
        num_ref_frames: number;
        gaps_in_frame_num_value_allowed_flag: number;
        pic_width_in_mbs_minus1: number;
        pic_height_in_map_units_minus1: number;
        frame_mbs_only_flag: number;
        mb_adaptive_frame_field_flag: number;
        direct_8x8_inference_flag: number;
        frame_cropping_flag: number;
        frame_crop_left_offset: number;
        frame_crop_right_offset: number;
        frame_crop_top_offset: number;
        frame_crop_bottom_offset: number;
        vui_parameters_present_flag: number;
        vui_parameters: H264VUIParams;
        chroma_array_type: number;
        max_frame_num: number;
        width: number;
        height: number;
        crop_rect_width: number;
        crop_rect_height: number;
        crop_rect_x: number;
        crop_rect_y: number;
        fps_num_removed: number;
        fps_den_removed: number;
        valid: boolean;
        extension_type: number;

        // Constructors

        constructor(
            properties?: Partial<{
                id: number;
                profile_idc: number;
                constraint_set0_flag: number;
                constraint_set1_flag: number;
                constraint_set2_flag: number;
                constraint_set3_flag: number;
                constraint_set4_flag: number;
                constraint_set5_flag: number;
                level_idc: number;
                chroma_format_idc: number;
                separate_colour_plane_flag: number;
                bit_depth_luma_minus8: number;
                bit_depth_chroma_minus8: number;
                qpprime_y_zero_transform_bypass_flag: number;
                scaling_matrix_present_flag: number;
                scaling_lists_4x4: Uint8Array;
                scaling_lists_8x8: Uint8Array;
                log2_max_frame_num_minus4: number;
                pic_order_cnt_type: number;
                log2_max_pic_order_cnt_lsb_minus4: number;
                delta_pic_order_always_zero_flag: number;
                offset_for_non_ref_pic: number;
                offset_for_top_to_bottom_field: number;
                num_ref_frames_in_pic_order_cnt_cycle: number;
                offset_for_ref_frame: number[];
                num_ref_frames: number;
                gaps_in_frame_num_value_allowed_flag: number;
                pic_width_in_mbs_minus1: number;
                pic_height_in_map_units_minus1: number;
                frame_mbs_only_flag: number;
                mb_adaptive_frame_field_flag: number;
                direct_8x8_inference_flag: number;
                frame_cropping_flag: number;
                frame_crop_left_offset: number;
                frame_crop_right_offset: number;
                frame_crop_top_offset: number;
                frame_crop_bottom_offset: number;
                vui_parameters_present_flag: number;
                vui_parameters: H264VUIParams;
                chroma_array_type: number;
                max_frame_num: number;
                width: number;
                height: number;
                crop_rect_width: number;
                crop_rect_height: number;
                crop_rect_x: number;
                crop_rect_y: number;
                fps_num_removed: number;
                fps_den_removed: number;
                valid: boolean;
                extension_type: number;
            }>,
        );

        // Methods

        /**
         * Clears all `sps` internal resources.
         */
        clear(): void;
    }

    /**
     * Represents the parsed `seq_parameter_set_mvc_extension()`.
     * @gir-type Struct
     * @since 1.6
     */
    class H264SPSExtMVC {
        static $gtype: GObject.GType<H264SPSExtMVC>;

        // Fields

        num_views_minus1: number;
        view: H264SPSExtMVCView;
        num_level_values_signalled_minus1: number;
        level_value: H264SPSExtMVCLevelValue;

        // Constructors

        constructor(
            properties?: Partial<{
                num_views_minus1: number;
                num_level_values_signalled_minus1: number;
            }>,
        );
    }

    /**
     * Represents level values for a subset of the operation points for
     * the coded video sequence.
     * @gir-type Struct
     * @since 1.6
     */
    class H264SPSExtMVCLevelValue {
        static $gtype: GObject.GType<H264SPSExtMVCLevelValue>;

        // Fields

        level_idc: number;
        num_applicable_ops_minus1: number;
        applicable_op: H264SPSExtMVCLevelValueOp;

        // Constructors

        constructor(
            properties?: Partial<{
                level_idc: number;
                num_applicable_ops_minus1: number;
            }>,
        );
    }

    /**
     * Represents an operation point for the coded video sequence.
     * @gir-type Struct
     * @since 1.6
     */
    class H264SPSExtMVCLevelValueOp {
        static $gtype: GObject.GType<H264SPSExtMVCLevelValueOp>;

        // Fields

        temporal_id: number;
        num_target_views_minus1: number;
        target_view_id: number;
        num_views_minus1: number;

        // Constructors

        constructor(
            properties?: Partial<{
                temporal_id: number;
                num_target_views_minus1: number;
                target_view_id: number;
                num_views_minus1: number;
            }>,
        );
    }

    /**
     * Represents inter-view dependency relationships for the coded video
     * sequence.
     * @gir-type Struct
     * @since 1.6
     */
    class H264SPSExtMVCView {
        static $gtype: GObject.GType<H264SPSExtMVCView>;

        // Fields

        view_id: number;
        num_anchor_refs_l0: number;
        anchor_ref_l0: number[];
        num_anchor_refs_l1: number;
        anchor_ref_l1: number[];
        num_non_anchor_refs_l0: number;
        non_anchor_ref_l0: number[];
        num_non_anchor_refs_l1: number;
        non_anchor_ref_l1: number[];

        // Constructors

        constructor(
            properties?: Partial<{
                view_id: number;
                num_anchor_refs_l0: number;
                anchor_ref_l0: number[];
                num_anchor_refs_l1: number;
                anchor_ref_l1: number[];
                num_non_anchor_refs_l0: number;
                non_anchor_ref_l0: number[];
                num_non_anchor_refs_l1: number;
                non_anchor_ref_l1: number[];
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class H264SliceHdr {
        static $gtype: GObject.GType<H264SliceHdr>;

        // Fields

        first_mb_in_slice: number;
        type: number;
        pps: H264PPS;
        colour_plane_id: number;
        frame_num: number;
        field_pic_flag: number;
        bottom_field_flag: number;
        idr_pic_id: number;
        pic_order_cnt_lsb: number;
        delta_pic_order_cnt_bottom: number;
        delta_pic_order_cnt: number[];
        redundant_pic_cnt: number;
        direct_spatial_mv_pred_flag: number;
        num_ref_idx_l0_active_minus1: number;
        num_ref_idx_l1_active_minus1: number;
        ref_pic_list_modification_flag_l0: number;
        n_ref_pic_list_modification_l0: number;
        ref_pic_list_modification_l0: H264RefPicListModification[];
        ref_pic_list_modification_flag_l1: number;
        n_ref_pic_list_modification_l1: number;
        ref_pic_list_modification_l1: H264RefPicListModification[];
        pred_weight_table: H264PredWeightTable;
        dec_ref_pic_marking: H264DecRefPicMarking;
        cabac_init_idc: number;
        slice_qp_delta: number;
        slice_qs_delta: number;
        disable_deblocking_filter_idc: number;
        slice_alpha_c0_offset_div2: number;
        slice_beta_offset_div2: number;
        slice_group_change_cycle: number;
        max_pic_num: number;
        valid: boolean;
        header_size: number;
        n_emulation_prevention_bytes: number;
        num_ref_idx_active_override_flag: number;
        sp_for_switch_flag: number;
        pic_order_cnt_bit_size: number;
        pps_id: number;

        // Constructors

        constructor(
            properties?: Partial<{
                first_mb_in_slice: number;
                type: number;
                colour_plane_id: number;
                frame_num: number;
                field_pic_flag: number;
                bottom_field_flag: number;
                idr_pic_id: number;
                pic_order_cnt_lsb: number;
                delta_pic_order_cnt_bottom: number;
                delta_pic_order_cnt: number[];
                redundant_pic_cnt: number;
                direct_spatial_mv_pred_flag: number;
                num_ref_idx_l0_active_minus1: number;
                num_ref_idx_l1_active_minus1: number;
                ref_pic_list_modification_flag_l0: number;
                n_ref_pic_list_modification_l0: number;
                ref_pic_list_modification_l0: H264RefPicListModification[];
                ref_pic_list_modification_flag_l1: number;
                n_ref_pic_list_modification_l1: number;
                ref_pic_list_modification_l1: H264RefPicListModification[];
                pred_weight_table: H264PredWeightTable;
                dec_ref_pic_marking: H264DecRefPicMarking;
                cabac_init_idc: number;
                slice_qp_delta: number;
                slice_qs_delta: number;
                disable_deblocking_filter_idc: number;
                slice_alpha_c0_offset_div2: number;
                slice_beta_offset_div2: number;
                slice_group_change_cycle: number;
                max_pic_num: number;
                valid: boolean;
                header_size: number;
                n_emulation_prevention_bytes: number;
                num_ref_idx_active_override_flag: number;
                sp_for_switch_flag: number;
                pic_order_cnt_bit_size: number;
                pps_id: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     * @since 1.6
     */
    class H264StereoVideoInfo {
        static $gtype: GObject.GType<H264StereoVideoInfo>;

        // Fields

        field_views_flag: number;
        top_field_is_left_view_flag: number;
        current_frame_is_left_view_flag: number;
        next_frame_is_second_view_flag: number;
        left_view_self_contained_flag: number;
        right_view_self_contained_flag: number;

        // Constructors

        constructor(
            properties?: Partial<{
                field_views_flag: number;
                top_field_is_left_view_flag: number;
                current_frame_is_left_view_flag: number;
                next_frame_is_second_view_flag: number;
                left_view_self_contained_flag: number;
                right_view_self_contained_flag: number;
            }>,
        );
    }

    /**
     * The User data unregistered SEI message syntax.
     * @gir-type Struct
     * @since 1.22
     */
    class H264UserDataUnregistered {
        static $gtype: GObject.GType<H264UserDataUnregistered>;

        // Fields

        uuid: Uint8Array;
        data: number;
        size: number;

        // Constructors

        constructor(
            properties?: Partial<{
                uuid: Uint8Array;
                data: number;
                size: number;
            }>,
        );
    }

    /**
     * The structure representing the VUI parameters.
     * @gir-type Struct
     */
    class H264VUIParams {
        static $gtype: GObject.GType<H264VUIParams>;

        // Fields

        aspect_ratio_info_present_flag: number;
        aspect_ratio_idc: number;
        sar_width: number;
        sar_height: number;
        overscan_info_present_flag: number;
        overscan_appropriate_flag: number;
        video_signal_type_present_flag: number;
        video_format: number;
        video_full_range_flag: number;
        colour_description_present_flag: number;
        colour_primaries: number;
        transfer_characteristics: number;
        matrix_coefficients: number;
        chroma_loc_info_present_flag: number;
        chroma_sample_loc_type_top_field: number;
        chroma_sample_loc_type_bottom_field: number;
        timing_info_present_flag: number;
        num_units_in_tick: number;
        time_scale: number;
        fixed_frame_rate_flag: number;
        nal_hrd_parameters_present_flag: number;
        nal_hrd_parameters: H264HRDParams;
        vcl_hrd_parameters_present_flag: number;
        vcl_hrd_parameters: H264HRDParams;
        low_delay_hrd_flag: number;
        pic_struct_present_flag: number;
        bitstream_restriction_flag: number;
        motion_vectors_over_pic_boundaries_flag: number;
        max_bytes_per_pic_denom: number;
        max_bits_per_mb_denom: number;
        log2_max_mv_length_horizontal: number;
        log2_max_mv_length_vertical: number;
        num_reorder_frames: number;
        max_dec_frame_buffering: number;
        par_n: number;
        par_d: number;

        // Constructors

        constructor(
            properties?: Partial<{
                aspect_ratio_info_present_flag: number;
                aspect_ratio_idc: number;
                sar_width: number;
                sar_height: number;
                overscan_info_present_flag: number;
                overscan_appropriate_flag: number;
                video_signal_type_present_flag: number;
                video_format: number;
                video_full_range_flag: number;
                colour_description_present_flag: number;
                colour_primaries: number;
                transfer_characteristics: number;
                matrix_coefficients: number;
                chroma_loc_info_present_flag: number;
                chroma_sample_loc_type_top_field: number;
                chroma_sample_loc_type_bottom_field: number;
                timing_info_present_flag: number;
                num_units_in_tick: number;
                time_scale: number;
                fixed_frame_rate_flag: number;
                nal_hrd_parameters_present_flag: number;
                nal_hrd_parameters: H264HRDParams;
                vcl_hrd_parameters_present_flag: number;
                vcl_hrd_parameters: H264HRDParams;
                low_delay_hrd_flag: number;
                pic_struct_present_flag: number;
                bitstream_restriction_flag: number;
                motion_vectors_over_pic_boundaries_flag: number;
                max_bytes_per_pic_denom: number;
                max_bits_per_mb_denom: number;
                log2_max_mv_length_horizontal: number;
                log2_max_mv_length_vertical: number;
                num_reorder_frames: number;
                max_dec_frame_buffering: number;
                par_n: number;
                par_d: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class H265BufferingPeriod {
        static $gtype: GObject.GType<H265BufferingPeriod>;

        // Fields

        sps: H265SPS;
        irap_cpb_params_present_flag: number;
        cpb_delay_offset: number;
        dpb_delay_offset: number;
        concatenation_flag: number;
        au_cpb_removal_delay_delta_minus1: number;
        nal_initial_cpb_removal_delay: Uint8Array;
        nal_initial_cpb_removal_offset: Uint8Array;
        nal_initial_alt_cpb_removal_delay: Uint8Array;
        nal_initial_alt_cpb_removal_offset: Uint8Array;
        vcl_initial_cpb_removal_delay: Uint8Array;
        vcl_initial_cpb_removal_offset: Uint8Array;
        vcl_initial_alt_cpb_removal_delay: Uint8Array;
        vcl_initial_alt_cpb_removal_offset: Uint8Array;

        // Constructors

        constructor(
            properties?: Partial<{
                irap_cpb_params_present_flag: number;
                cpb_delay_offset: number;
                dpb_delay_offset: number;
                concatenation_flag: number;
                au_cpb_removal_delay_delta_minus1: number;
                nal_initial_cpb_removal_delay: Uint8Array;
                nal_initial_cpb_removal_offset: Uint8Array;
                nal_initial_alt_cpb_removal_delay: Uint8Array;
                nal_initial_alt_cpb_removal_offset: Uint8Array;
                vcl_initial_cpb_removal_delay: Uint8Array;
                vcl_initial_cpb_removal_offset: Uint8Array;
                vcl_initial_alt_cpb_removal_delay: Uint8Array;
                vcl_initial_alt_cpb_removal_offset: Uint8Array;
            }>,
        );
    }

    /**
     * The upper bounds for the nominal target brightness light level
     * as specified in CEA-861.3
     * D.2.35
     * @gir-type Struct
     * @since 1.18
     */
    class H265ContentLightLevel {
        static $gtype: GObject.GType<H265ContentLightLevel>;

        // Fields

        max_content_light_level: number;
        max_pic_average_light_level: number;

        // Constructors

        constructor(
            properties?: Partial<{
                max_content_light_level: number;
                max_pic_average_light_level: number;
            }>,
        );
    }

    /**
     * Contains HEVCDecoderConfigurationRecord data as defined in ISO/IEC 14496-15
     * @gir-type Struct
     * @since 1.24
     */
    class H265DecoderConfigRecord {
        static $gtype: GObject.GType<H265DecoderConfigRecord>;

        // Fields

        configuration_version: number;
        general_profile_space: number;
        general_tier_flag: number;
        general_profile_idc: number;
        general_profile_compatibility_flags: Uint8Array;
        general_progressive_source_flag: number;
        general_interlaced_source_flag: number;
        general_non_packed_constraint_flag: number;
        general_frame_only_constraint_flag: number;
        general_max_12bit_constraint_flag: number;
        general_max_10bit_constraint_flag: number;
        general_max_8bit_constraint_flag: number;
        general_max_422chroma_constraint_flag: number;
        general_max_420chroma_constraint_flag: number;
        general_max_monochrome_constraint_flag: number;
        general_intra_constraint_flag: number;
        general_one_picture_only_constraint_flag: number;
        general_lower_bit_rate_constraint_flag: number;
        general_max_14bit_constraint_flag: number;
        general_inbld_flag: number;
        general_level_idc: number;
        min_spatial_segmentation_idc: number;
        parallelism_type: number;
        chroma_format_idc: number;
        bit_depth_luma_minus8: number;
        bit_depth_chroma_minus8: number;
        avg_frame_rate: number;
        constant_frame_rate: number;
        num_temporal_layers: number;
        temporal_id_nested: number;
        length_size_minus_one: number;
        nalu_array: any[];

        // Constructors

        constructor(
            properties?: Partial<{
                configuration_version: number;
                general_profile_space: number;
                general_tier_flag: number;
                general_profile_idc: number;
                general_profile_compatibility_flags: Uint8Array;
                general_progressive_source_flag: number;
                general_interlaced_source_flag: number;
                general_non_packed_constraint_flag: number;
                general_frame_only_constraint_flag: number;
                general_max_12bit_constraint_flag: number;
                general_max_10bit_constraint_flag: number;
                general_max_8bit_constraint_flag: number;
                general_max_422chroma_constraint_flag: number;
                general_max_420chroma_constraint_flag: number;
                general_max_monochrome_constraint_flag: number;
                general_intra_constraint_flag: number;
                general_one_picture_only_constraint_flag: number;
                general_lower_bit_rate_constraint_flag: number;
                general_max_14bit_constraint_flag: number;
                general_inbld_flag: number;
                general_level_idc: number;
                min_spatial_segmentation_idc: number;
                parallelism_type: number;
                chroma_format_idc: number;
                bit_depth_luma_minus8: number;
                bit_depth_chroma_minus8: number;
                avg_frame_rate: number;
                constant_frame_rate: number;
                num_temporal_layers: number;
                temporal_id_nested: number;
                length_size_minus_one: number;
                nalu_array: any[];
            }>,
        );

        // Methods

        /**
         * Free `config` data
         */
        free(): void;
    }

    /**
     * Contains NAL Unit array data as defined in ISO/IEC 14496-15
     * @gir-type Struct
     * @since 1.24
     */
    class H265DecoderConfigRecordNalUnitArray {
        static $gtype: GObject.GType<H265DecoderConfigRecordNalUnitArray>;

        // Fields

        array_completeness: number;
        nal_unit_type: H265NalUnitType;
        nalu: any[];
    }

    /**
     * Defines the HRD parameters
     * @gir-type Struct
     */
    class H265HRDParams {
        static $gtype: GObject.GType<H265HRDParams>;

        // Fields

        nal_hrd_parameters_present_flag: number;
        vcl_hrd_parameters_present_flag: number;
        sub_pic_hrd_params_present_flag: number;
        tick_divisor_minus2: number;
        du_cpb_removal_delay_increment_length_minus1: number;
        sub_pic_cpb_params_in_pic_timing_sei_flag: number;
        dpb_output_delay_du_length_minus1: number;
        bit_rate_scale: number;
        cpb_size_scale: number;
        cpb_size_du_scale: number;
        initial_cpb_removal_delay_length_minus1: number;
        au_cpb_removal_delay_length_minus1: number;
        dpb_output_delay_length_minus1: number;
        fixed_pic_rate_general_flag: Uint8Array;
        fixed_pic_rate_within_cvs_flag: Uint8Array;
        elemental_duration_in_tc_minus1: number[];
        low_delay_hrd_flag: Uint8Array;
        cpb_cnt_minus1: Uint8Array;
        sublayer_hrd_params: H265SubLayerHRDParams[];

        // Constructors

        constructor(
            properties?: Partial<{
                nal_hrd_parameters_present_flag: number;
                vcl_hrd_parameters_present_flag: number;
                sub_pic_hrd_params_present_flag: number;
                tick_divisor_minus2: number;
                du_cpb_removal_delay_increment_length_minus1: number;
                sub_pic_cpb_params_in_pic_timing_sei_flag: number;
                dpb_output_delay_du_length_minus1: number;
                bit_rate_scale: number;
                cpb_size_scale: number;
                cpb_size_du_scale: number;
                initial_cpb_removal_delay_length_minus1: number;
                au_cpb_removal_delay_length_minus1: number;
                dpb_output_delay_length_minus1: number;
                fixed_pic_rate_general_flag: Uint8Array;
                fixed_pic_rate_within_cvs_flag: Uint8Array;
                elemental_duration_in_tc_minus1: number[];
                low_delay_hrd_flag: Uint8Array;
                cpb_cnt_minus1: Uint8Array;
                sublayer_hrd_params: H265SubLayerHRDParams[];
            }>,
        );
    }

    /**
     * The colour volume (primaries, white point and luminance range) of display
     * defined by SMPTE ST 2086.
     * D.2.28
     * @gir-type Struct
     * @since 1.18
     */
    class H265MasteringDisplayColourVolume {
        static $gtype: GObject.GType<H265MasteringDisplayColourVolume>;

        // Fields

        display_primaries_x: number[];
        display_primaries_y: number[];
        white_point_x: number;
        white_point_y: number;
        max_display_mastering_luminance: number;
        min_display_mastering_luminance: number;

        // Constructors

        constructor(
            properties?: Partial<{
                display_primaries_x: number[];
                display_primaries_y: number[];
                white_point_x: number;
                white_point_y: number;
                max_display_mastering_luminance: number;
                min_display_mastering_luminance: number;
            }>,
        );
    }

    /**
     * Structure defining the Nal unit headers
     * @gir-type Struct
     */
    class H265NalUnit {
        static $gtype: GObject.GType<H265NalUnit>;

        // Fields

        type: number;
        layer_id: number;
        temporal_id_plus1: number;
        size: number;
        offset: number;
        sc_offset: number;
        valid: boolean;
        data: number;
        header_bytes: number;

        // Constructors

        constructor(
            properties?: Partial<{
                type: number;
                layer_id: number;
                temporal_id_plus1: number;
                size: number;
                offset: number;
                sc_offset: number;
                valid: boolean;
                data: number;
                header_bytes: number;
            }>,
        );
    }

    /**
     * H265 Picture Parameter Set
     * @gir-type Struct
     */
    class H265PPS {
        static $gtype: GObject.GType<H265PPS>;

        // Fields

        id: number;
        sps_id: number;
        sps: H265SPS;
        dependent_slice_segments_enabled_flag: number;
        output_flag_present_flag: number;
        num_extra_slice_header_bits: number;
        sign_data_hiding_enabled_flag: number;
        cabac_init_present_flag: number;
        num_ref_idx_l0_default_active_minus1: number;
        num_ref_idx_l1_default_active_minus1: number;
        init_qp_minus26: number;
        constrained_intra_pred_flag: number;
        transform_skip_enabled_flag: number;
        cu_qp_delta_enabled_flag: number;
        diff_cu_qp_delta_depth: number;
        cb_qp_offset: number;
        cr_qp_offset: number;
        slice_chroma_qp_offsets_present_flag: number;
        weighted_pred_flag: number;
        weighted_bipred_flag: number;
        transquant_bypass_enabled_flag: number;
        tiles_enabled_flag: number;
        entropy_coding_sync_enabled_flag: number;
        num_tile_columns_minus1: number;
        num_tile_rows_minus1: number;
        uniform_spacing_flag: number;
        column_width_minus1: number[];
        row_height_minus1: number[];
        loop_filter_across_tiles_enabled_flag: number;
        loop_filter_across_slices_enabled_flag: number;
        deblocking_filter_control_present_flag: number;
        deblocking_filter_override_enabled_flag: number;
        deblocking_filter_disabled_flag: number;
        beta_offset_div2: number;
        tc_offset_div2: number;
        scaling_list_data_present_flag: number;
        scaling_list: H265ScalingList;
        lists_modification_present_flag: number;
        log2_parallel_merge_level_minus2: number;
        slice_segment_header_extension_present_flag: number;
        pps_extension_flag: number;
        pps_range_extension_flag: number;
        pps_multilayer_extension_flag: number;
        pps_3d_extension_flag: number;
        pps_scc_extension_flag: number;
        pps_extension_4bits: number;
        pps_extension_params: H265PPSExtensionParams;
        pps_scc_extension_params: H265PPSSccExtensionParams;
        PicWidthInCtbsY: number;
        PicHeightInCtbsY: number;
        valid: boolean;

        // Constructors

        constructor(
            properties?: Partial<{
                id: number;
                sps_id: number;
                dependent_slice_segments_enabled_flag: number;
                output_flag_present_flag: number;
                num_extra_slice_header_bits: number;
                sign_data_hiding_enabled_flag: number;
                cabac_init_present_flag: number;
                num_ref_idx_l0_default_active_minus1: number;
                num_ref_idx_l1_default_active_minus1: number;
                init_qp_minus26: number;
                constrained_intra_pred_flag: number;
                transform_skip_enabled_flag: number;
                cu_qp_delta_enabled_flag: number;
                diff_cu_qp_delta_depth: number;
                cb_qp_offset: number;
                cr_qp_offset: number;
                slice_chroma_qp_offsets_present_flag: number;
                weighted_pred_flag: number;
                weighted_bipred_flag: number;
                transquant_bypass_enabled_flag: number;
                tiles_enabled_flag: number;
                entropy_coding_sync_enabled_flag: number;
                num_tile_columns_minus1: number;
                num_tile_rows_minus1: number;
                uniform_spacing_flag: number;
                column_width_minus1: number[];
                row_height_minus1: number[];
                loop_filter_across_tiles_enabled_flag: number;
                loop_filter_across_slices_enabled_flag: number;
                deblocking_filter_control_present_flag: number;
                deblocking_filter_override_enabled_flag: number;
                deblocking_filter_disabled_flag: number;
                beta_offset_div2: number;
                tc_offset_div2: number;
                scaling_list_data_present_flag: number;
                scaling_list: H265ScalingList;
                lists_modification_present_flag: number;
                log2_parallel_merge_level_minus2: number;
                slice_segment_header_extension_present_flag: number;
                pps_extension_flag: number;
                pps_range_extension_flag: number;
                pps_multilayer_extension_flag: number;
                pps_3d_extension_flag: number;
                pps_scc_extension_flag: number;
                pps_extension_4bits: number;
                pps_extension_params: H265PPSExtensionParams;
                pps_scc_extension_params: H265PPSSccExtensionParams;
                PicWidthInCtbsY: number;
                PicHeightInCtbsY: number;
                valid: boolean;
            }>,
        );
    }

    /**
     * Defines the GstH265SPSExtensionParams
     * @gir-type Struct
     */
    class H265PPSExtensionParams {
        static $gtype: GObject.GType<H265PPSExtensionParams>;

        // Fields

        log2_max_transform_skip_block_size_minus2: number;
        cross_component_prediction_enabled_flag: number;
        chroma_qp_offset_list_enabled_flag: number;
        diff_cu_chroma_qp_offset_depth: number;
        chroma_qp_offset_list_len_minus1: number;
        cb_qp_offset_list: Uint8Array;
        cr_qp_offset_list: Uint8Array;
        log2_sao_offset_scale_luma: number;
        log2_sao_offset_scale_chroma: number;

        // Constructors

        constructor(
            properties?: Partial<{
                log2_max_transform_skip_block_size_minus2: number;
                cross_component_prediction_enabled_flag: number;
                chroma_qp_offset_list_enabled_flag: number;
                diff_cu_chroma_qp_offset_depth: number;
                chroma_qp_offset_list_len_minus1: number;
                cb_qp_offset_list: Uint8Array;
                cr_qp_offset_list: Uint8Array;
                log2_sao_offset_scale_luma: number;
                log2_sao_offset_scale_chroma: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     * @since 1.18
     */
    class H265PPSSccExtensionParams {
        static $gtype: GObject.GType<H265PPSSccExtensionParams>;

        // Fields

        pps_curr_pic_ref_enabled_flag: number;
        residual_adaptive_colour_transform_enabled_flag: number;
        pps_slice_act_qp_offsets_present_flag: number;
        pps_act_y_qp_offset_plus5: number;
        pps_act_cb_qp_offset_plus5: number;
        pps_act_cr_qp_offset_plus3: number;
        pps_palette_predictor_initializers_present_flag: number;
        pps_num_palette_predictor_initializer: number;
        monochrome_palette_flag: number;
        luma_bit_depth_entry_minus8: number;
        chroma_bit_depth_entry_minus8: number;
        pps_palette_predictor_initializer: number[];

        // Constructors

        constructor(
            properties?: Partial<{
                pps_curr_pic_ref_enabled_flag: number;
                residual_adaptive_colour_transform_enabled_flag: number;
                pps_slice_act_qp_offsets_present_flag: number;
                pps_act_y_qp_offset_plus5: number;
                pps_act_cb_qp_offset_plus5: number;
                pps_act_cr_qp_offset_plus3: number;
                pps_palette_predictor_initializers_present_flag: number;
                pps_num_palette_predictor_initializer: number;
                monochrome_palette_flag: number;
                luma_bit_depth_entry_minus8: number;
                chroma_bit_depth_entry_minus8: number;
                pps_palette_predictor_initializer: number[];
            }>,
        );
    }

    /**
     * It offers you bitstream parsing in HEVC mode and non-HEVC mode. To identify
     * Nals in a bitstream and parse its headers, you should call:
     *
     *   * `gst_h265_parser_identify_nalu()` to identify the following nalu in
     *        non-HEVC bitstreams
     *
     *   * `gst_h265_parser_identify_nalu_hevc()` to identify the nalu in
     *        HEVC bitstreams
     *
     * Then, depending on the {@link GstCodecParsers.H265NalUnitType} of the newly parsed {@link GstCodecParsers.H265NalUnit},
     * you should call the differents functions to parse the structure:
     *
     *   * From {@link GstCodecParsers.H265NalUnitType.SLICE_TRAIL_N} to {@link GstCodecParsers.H265NalUnitType.SLICE_CRA_NUT}: `gst_h265_parser_parse_slice_hdr()`
     *
     *   * `GST_H265_NAL_*_SEI`: `gst_h265_parser_parse_sei()`
     *
     *   * {@link GstCodecParsers.H265NalUnitType.VPS}: `gst_h265_parser_parse_vps()`
     *
     *   * {@link GstCodecParsers.H265NalUnitType.SPS}: `gst_h265_parser_parse_sps()`
     *
     *   * {@link GstCodecParsers.H265NalUnitType.PPS}: `gst_h265_parser_parse_pps`()
     *
     *   * Any other: `gst_h265_parser_parse_nal()`
     *
     * Note: You should always call `gst_h265_parser_parse_nal()` if you don't
     * actually need {@link GstCodecParsers.H265NalUnitType} to be parsed for your personal use, in
     * order to guarantee that the {@link GstCodecParsers.H265Parser} is always up to date.
     *
     * For more details about the structures, look at the ITU-T H.265
     * specifications, you can download them from:
     *
     *   * ITU-T H.265: http://www.itu.int/rec/T-REC-H.265
     * @gir-type Struct
     */
    class H265Parser {
        static $gtype: GObject.GType<H265Parser>;

        // Constructors

        constructor(properties?: Partial<{}>);

        // Methods

        /**
         * Frees `parser`
         */
        free(): void;
        /**
         * Parses `data` for packetized (e.g., hvc1/hev1) bitstream and
         * sets `nalus`. In addition to nal identifying process,
         * this method scans start-code prefix to split malformed packet into
         * actual nal chunks.
         * @param data The data to parse, must be the beging of the Nal unit
         * @param offset the offset from which to parse `data`
         * @param size the size of `data`
         * @param nal_length_size the size in bytes of the HEVC nal length prefix.
         * @param nalus a caller allocated GArray of {@link GstCodecParsers.H265NalUnit} where to store parsed nal headers
         * @param consumed the size of consumed bytes
         * @returns a {@link GstCodecParsers.H265ParserResult}
         */
        identify_and_split_nalu_hevc(
            data: number,
            offset: number,
            size: number,
            nal_length_size: number,
            nalus: H265NalUnit[],
            consumed: number,
        ): H265ParserResult;
        /**
         * Parses `data` and fills `nalu` from the next nalu data from `data`
         * @param data The data to parse
         * @param offset the offset from which to parse `data`
         * @param size the size of `data`
         * @param nalu The {@link GstCodecParsers.H265NalUnit} where to store parsed nal headers
         * @returns a {@link GstCodecParsers.H265ParserResult}
         */
        identify_nalu(data: number, offset: number, size: number, nalu: H265NalUnit): H265ParserResult;
        /**
         * Parses `data` and sets `nalu`.
         * @param data The data to parse, must be the beging of the Nal unit
         * @param offset the offset from which to parse `data`
         * @param size the size of `data`
         * @param nal_length_size the size in bytes of the HEVC nal length prefix.
         * @param nalu The {@link GstCodecParsers.H265NalUnit} where to store parsed nal headers
         * @returns a {@link GstCodecParsers.H265ParserResult}
         */
        identify_nalu_hevc(
            data: number,
            offset: number,
            size: number,
            nal_length_size: number,
            nalu: H265NalUnit,
        ): H265ParserResult;
        /**
         * Parses `data` and fills `nalu` from the next nalu data from `data`.
         *
         * This differs from `gst_h265_parser_identify_nalu` in that it doesn't
         * check whether the packet is complete or not.
         *
         * Note: Only use this function if you already know the provided `data`
         * is a complete NALU, else use `gst_h265_parser_identify_nalu`.
         * @param data The data to parse
         * @param offset the offset from which to parse `data`
         * @param size the size of `data`
         * @param nalu The {@link GstCodecParsers.H265NalUnit} where to store parsed nal headers
         * @returns a {@link GstCodecParsers.H265ParserResult}
         */
        identify_nalu_unchecked(data: number, offset: number, size: number, nalu: H265NalUnit): H265ParserResult;
        /**
         * Copy `au` into new {@link Gst.Buffer} and insert `sei` into the {@link Gst.Buffer}.
         * The validation for completeness of `au` and `sei` is caller's responsibility.
         * Both `au` and `sei` must be byte-stream formatted
         * @param au a {@link Gst.Buffer} containing AU data
         * @param sei a {@link Gst.Memory} containing a SEI nal
         * @returns a SEI inserted {@link Gst.Buffer} or `null`   if cannot figure out proper position to insert a `sei`
         */
        insert_sei(au: Gst.Buffer, sei: Gst.Memory): Gst.Buffer | null;
        /**
         * Copy `au` into new {@link Gst.Buffer} and insert `sei` into the {@link Gst.Buffer}.
         * The validation for completeness of `au` and `sei` is caller's responsibility.
         * Nal prefix type of both `au` and `sei` must be packetized, and
         * also the size of nal length field must be identical to `nal_length_size`
         * @param nal_length_size a size of nal length field, allowed range is [1, 4]
         * @param au a {@link Gst.Buffer} containing AU data
         * @param sei a {@link Gst.Memory} containing a SEI nal
         * @returns a SEI inserted {@link Gst.Buffer} or `null`   if cannot figure out proper position to insert a `sei`
         */
        insert_sei_hevc(nal_length_size: number, au: Gst.Buffer, sei: Gst.Memory): Gst.Buffer | null;
        /**
         * Link SPS and PPS of `parser` to `slice`. `slice` must be valid and parsed
         * already by `parser` or other {@link GstCodecParsers.H265Parser}
         * @param slice The {@link GstCodecParsers.H265SliceHdr} to fill.
         * @returns a {@link GstCodecParsers.H265ParserResult}
         */
        link_slice_hdr(slice: H265SliceHdr): H265ParserResult;
        /**
         * Parses HEVCDecoderConfigurationRecord data and fill into `config`.
         * The caller must free `config` via `gst_h265_decoder_config_record_free()`
         *
         * This method does not parse VPS, SPS and PPS and therefore the caller needs to
         * parse each NAL unit via appropriate parsing method.
         * @param data the data to parse
         * @param size the size of `data`
         * @returns a {@link GstCodecParsers.H265ParserResult}
         */
        parse_decoder_config_record(data: number, size: number): [H265ParserResult, H265DecoderConfigRecord];
        /**
         * This function should be called in the case one doesn't need to
         * parse a specific structure. It is necessary to do so to make
         * sure `parser` is up to date.
         * @param nalu The {@link GstCodecParsers.H265NalUnit} to parse
         * @returns a {@link GstCodecParsers.H265ParserResult}
         */
        parse_nal(nalu: H265NalUnit): H265ParserResult;
        /**
         * Parses `data`, and fills the `pps` structure.
         * @param nalu The {@link GstCodecParsers.H265NalUnitType.PPS} {@link GstCodecParsers.H265NalUnit} to parse
         * @param pps The {@link GstCodecParsers.H265PPS} to fill.
         * @returns a {@link GstCodecParsers.H265ParserResult}
         */
        parse_pps(nalu: H265NalUnit, pps: H265PPS): H265ParserResult;
        /**
         * Parses `data`, create and fills the `messages` array.
         * @param nalu The `GST_H265_NAL_*_SEI` {@link GstCodecParsers.H265NalUnit} to parse
         * @param messages The GArray of {@link GstCodecParsers.H265SEIMessage} to fill. The caller must free it when done.
         * @returns a {@link GstCodecParsers.H265ParserResult}
         */
        parse_sei(nalu: H265NalUnit, messages: H265SEIMessage[]): H265ParserResult;
        /**
         * Parses `data`, and fills the `slice` structure.
         * The resulting `slice_hdr` structure shall be deallocated with
         * `gst_h265_slice_hdr_free()` when it is no longer needed
         * @param nalu The `GST_H265_NAL_SLICE` {@link GstCodecParsers.H265NalUnit} to parse
         * @param slice The {@link GstCodecParsers.H265SliceHdr} to fill.
         * @returns a {@link GstCodecParsers.H265ParserResult}
         */
        parse_slice_hdr(nalu: H265NalUnit, slice: H265SliceHdr): H265ParserResult;
        /**
         * Parses `data`, and fills the `slice` structure.
         * The resulting `slice_hdr` structure shall be deallocated with
         * `gst_h265_slice_hdr_free()` when it is no longer needed
         * @param nalu The `GST_H265_NAL_SLICE` {@link GstCodecParsers.H265NalUnit} to parse
         * @param slice The {@link GstCodecParsers.H265SliceHdr} to fill.
         * @param sps_ext The {@link GstCodecParsers.H265SPSEXT} to fill.
         * @returns a {@link GstCodecParsers.H265ParserResult}
         */
        parse_slice_hdr_ext(nalu: H265NalUnit, slice: H265SliceHdr, sps_ext: H265SPSEXT): H265ParserResult;
        /**
         * Parses `data`, and fills the `sps` structure.
         * @param nalu The {@link GstCodecParsers.H265NalUnitType.SPS} {@link GstCodecParsers.H265NalUnit} to parse
         * @param sps The {@link GstCodecParsers.H265SPS} to fill.
         * @param parse_vui_params Whether to parse the vui_params or not
         * @returns a {@link GstCodecParsers.H265ParserResult}
         */
        parse_sps(nalu: H265NalUnit, sps: H265SPS, parse_vui_params: boolean): H265ParserResult;
        /**
         * Parses `data`, and fills the `sps` structure.
         * @param nalu The {@link GstCodecParsers.H265NalUnitType.SPS} {@link GstCodecParsers.H265NalUnit} to parse
         * @param sps The {@link GstCodecParsers.H265SPS} to fill.
         * @param sps_ext The {@link GstCodecParsers.H265SPSEXT} matching the {@link GstCodecParsers.H265SPS} to fill.
         * @param parse_vui_params Whether to parse the vui_params or not
         * @returns a {@link GstCodecParsers.H265ParserResult}
         */
        parse_sps_ext(
            nalu: H265NalUnit,
            sps: H265SPS,
            sps_ext: H265SPSEXT,
            parse_vui_params: boolean,
        ): H265ParserResult;
        /**
         * Parses `data`, and fills the `vps` structure.
         * @param nalu The {@link GstCodecParsers.H265NalUnitType.VPS} {@link GstCodecParsers.H265NalUnit} to parse
         * @param vps The {@link GstCodecParsers.H265VPS} to fill.
         * @returns a {@link GstCodecParsers.H265ParserResult}
         */
        parse_vps(nalu: H265NalUnit, vps: H265VPS): H265ParserResult;
        /**
         * Replace internal Sequence Parameter Set struct corresponding to id of `pps`
         * with `pps`. `nalparser` will mark `pps` as last parsed sps.
         * @param pps a {@link GstCodecParsers.H265PPS}.
         * @returns a {@link GstCodecParsers.H265ParserResult}
         */
        update_pps(pps: H265PPS): H265ParserResult;
        /**
         * Replace internal Sequence Parameter Set struct corresponding to id of `sps`
         * with `sps`. `nalparser` will mark `sps` as last parsed sps.
         * @param sps a {@link GstCodecParsers.H265SPS}.
         * @returns a {@link GstCodecParsers.H265ParserResult}
         */
        update_sps(sps: H265SPS): H265ParserResult;
        /**
         * Replace internal Video Parameter Set struct corresponding to id of `vps`
         * with `vps`. `nalparser` will mark `vps` as last parsed vps.
         * @param vps a {@link GstCodecParsers.H265VPS}.
         * @returns a {@link GstCodecParsers.H265ParserResult}
         */
        update_vps(vps: H265VPS): H265ParserResult;
    }

    /**
     * @gir-type Struct
     */
    class H265PicTiming {
        static $gtype: GObject.GType<H265PicTiming>;

        // Fields

        pic_struct: number;
        source_scan_type: number;
        duplicate_flag: number;
        au_cpb_removal_delay_minus1: number;
        pic_dpb_output_delay: number;
        pic_dpb_output_du_delay: number;
        num_decoding_units_minus1: number;
        du_common_cpb_removal_delay_flag: number;
        du_common_cpb_removal_delay_increment_minus1: number;
        num_nalus_in_du_minus1: number;
        du_cpb_removal_delay_increment_minus1: number;

        // Constructors

        constructor(
            properties?: Partial<{
                pic_struct: number;
                source_scan_type: number;
                duplicate_flag: number;
                au_cpb_removal_delay_minus1: number;
                pic_dpb_output_delay: number;
                pic_dpb_output_du_delay: number;
                num_decoding_units_minus1: number;
                du_common_cpb_removal_delay_flag: number;
                du_common_cpb_removal_delay_increment_minus1: number;
                num_nalus_in_du_minus1: number;
                du_cpb_removal_delay_increment_minus1: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class H265PredWeightTable {
        static $gtype: GObject.GType<H265PredWeightTable>;

        // Fields

        luma_log2_weight_denom: number;
        delta_chroma_log2_weight_denom: number;
        luma_weight_l0_flag: Uint8Array;
        chroma_weight_l0_flag: Uint8Array;
        delta_luma_weight_l0: Uint8Array;
        luma_offset_l0: Uint8Array;
        delta_chroma_weight_l0: Uint8Array;
        delta_chroma_offset_l0: number[];
        luma_weight_l1_flag: Uint8Array;
        chroma_weight_l1_flag: Uint8Array;
        delta_luma_weight_l1: Uint8Array;
        luma_offset_l1: Uint8Array;
        delta_chroma_weight_l1: Uint8Array;
        delta_chroma_offset_l1: number[];

        // Constructors

        constructor(
            properties?: Partial<{
                luma_log2_weight_denom: number;
                delta_chroma_log2_weight_denom: number;
                luma_weight_l0_flag: Uint8Array;
                chroma_weight_l0_flag: Uint8Array;
                delta_luma_weight_l0: Uint8Array;
                luma_offset_l0: Uint8Array;
                delta_chroma_weight_l0: Uint8Array;
                delta_chroma_offset_l0: number[];
                luma_weight_l1_flag: Uint8Array;
                chroma_weight_l1_flag: Uint8Array;
                delta_luma_weight_l1: Uint8Array;
                luma_offset_l1: Uint8Array;
                delta_chroma_weight_l1: Uint8Array;
                delta_chroma_offset_l1: number[];
            }>,
        );
    }

    /**
     * Define ProfileTierLevel parameters
     * @gir-type Struct
     */
    class H265ProfileTierLevel {
        static $gtype: GObject.GType<H265ProfileTierLevel>;

        // Fields

        profile_space: number;
        tier_flag: number;
        profile_idc: number;
        profile_compatibility_flag: Uint8Array;
        progressive_source_flag: number;
        interlaced_source_flag: number;
        non_packed_constraint_flag: number;
        frame_only_constraint_flag: number;
        max_12bit_constraint_flag: number;
        max_10bit_constraint_flag: number;
        max_8bit_constraint_flag: number;
        max_422chroma_constraint_flag: number;
        max_420chroma_constraint_flag: number;
        max_monochrome_constraint_flag: number;
        intra_constraint_flag: number;
        one_picture_only_constraint_flag: number;
        lower_bit_rate_constraint_flag: number;
        max_14bit_constraint_flag: number;
        level_idc: number;
        sub_layer_profile_present_flag: Uint8Array;
        sub_layer_level_present_flag: Uint8Array;
        sub_layer_profile_space: Uint8Array;
        sub_layer_tier_flag: Uint8Array;
        sub_layer_profile_idc: Uint8Array;
        sub_layer_profile_compatibility_flag: Uint8Array;
        sub_layer_progressive_source_flag: Uint8Array;
        sub_layer_interlaced_source_flag: Uint8Array;
        sub_layer_non_packed_constraint_flag: Uint8Array;
        sub_layer_frame_only_constraint_flag: Uint8Array;
        sub_layer_level_idc: Uint8Array;

        // Constructors

        constructor(
            properties?: Partial<{
                profile_space: number;
                tier_flag: number;
                profile_idc: number;
                profile_compatibility_flag: Uint8Array;
                progressive_source_flag: number;
                interlaced_source_flag: number;
                non_packed_constraint_flag: number;
                frame_only_constraint_flag: number;
                max_12bit_constraint_flag: number;
                max_10bit_constraint_flag: number;
                max_8bit_constraint_flag: number;
                max_422chroma_constraint_flag: number;
                max_420chroma_constraint_flag: number;
                max_monochrome_constraint_flag: number;
                intra_constraint_flag: number;
                one_picture_only_constraint_flag: number;
                lower_bit_rate_constraint_flag: number;
                max_14bit_constraint_flag: number;
                level_idc: number;
                sub_layer_profile_present_flag: Uint8Array;
                sub_layer_level_present_flag: Uint8Array;
                sub_layer_profile_space: Uint8Array;
                sub_layer_tier_flag: Uint8Array;
                sub_layer_profile_idc: Uint8Array;
                sub_layer_profile_compatibility_flag: Uint8Array;
                sub_layer_progressive_source_flag: Uint8Array;
                sub_layer_interlaced_source_flag: Uint8Array;
                sub_layer_non_packed_constraint_flag: Uint8Array;
                sub_layer_frame_only_constraint_flag: Uint8Array;
                sub_layer_level_idc: Uint8Array;
            }>,
        );

        // Methods

        /**
         * Return the H265 profile defined in `ptl`.
         * @returns a {@link GstCodecParsers.H265Profile}
         */
        get_profile(): H265Profile;
    }

    /**
     * @gir-type Struct
     */
    class H265RecoveryPoint {
        static $gtype: GObject.GType<H265RecoveryPoint>;

        // Fields

        recovery_poc_cnt: number;
        exact_match_flag: number;
        broken_link_flag: number;

        // Constructors

        constructor(
            properties?: Partial<{
                recovery_poc_cnt: number;
                exact_match_flag: number;
                broken_link_flag: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class H265RefPicListModification {
        static $gtype: GObject.GType<H265RefPicListModification>;

        // Fields

        ref_pic_list_modification_flag_l0: number;
        list_entry_l0: number[];
        ref_pic_list_modification_flag_l1: number;
        list_entry_l1: number[];

        // Constructors

        constructor(
            properties?: Partial<{
                ref_pic_list_modification_flag_l0: number;
                list_entry_l0: number[];
                ref_pic_list_modification_flag_l1: number;
                list_entry_l1: number[];
            }>,
        );
    }

    /**
     * The User data registered by Rec. ITU-T T.35 SEI message.
     * @gir-type Struct
     * @since 1.18
     */
    class H265RegisteredUserData {
        static $gtype: GObject.GType<H265RegisteredUserData>;

        // Fields

        country_code: number;
        country_code_extension: number;
        data: number;
        size: number;

        // Constructors

        constructor(
            properties?: Partial<{
                country_code: number;
                country_code_extension: number;
                data: number;
                size: number;
            }>,
        );
    }

    /**
     * Constains information about SEI message. The content depends on the
     * `payloadType`.
     * @gir-type Struct
     */
    class H265SEIMessage {
        static $gtype: GObject.GType<H265SEIMessage>;

        // Fields

        payloadType: H265SEIPayloadType;
    }

    /**
     * H265 Sequence Parameter Set (SPS)
     * @gir-type Struct
     */
    class H265SPS {
        static $gtype: GObject.GType<H265SPS>;

        // Fields

        id: number;
        vps_id: number;
        vps: H265VPS;
        max_sub_layers_minus1: number;
        temporal_id_nesting_flag: number;
        profile_tier_level: H265ProfileTierLevel;
        chroma_format_idc: number;
        separate_colour_plane_flag: number;
        pic_width_in_luma_samples: number;
        pic_height_in_luma_samples: number;
        conformance_window_flag: number;
        conf_win_left_offset: number;
        conf_win_right_offset: number;
        conf_win_top_offset: number;
        conf_win_bottom_offset: number;
        bit_depth_luma_minus8: number;
        bit_depth_chroma_minus8: number;
        log2_max_pic_order_cnt_lsb_minus4: number;
        sub_layer_ordering_info_present_flag: number;
        max_dec_pic_buffering_minus1: Uint8Array;
        max_num_reorder_pics: Uint8Array;
        max_latency_increase_plus1: Uint8Array;
        log2_min_luma_coding_block_size_minus3: number;
        log2_diff_max_min_luma_coding_block_size: number;
        log2_min_transform_block_size_minus2: number;
        log2_diff_max_min_transform_block_size: number;
        max_transform_hierarchy_depth_inter: number;
        max_transform_hierarchy_depth_intra: number;
        scaling_list_enabled_flag: number;
        scaling_list_data_present_flag: number;
        scaling_list: H265ScalingList;
        amp_enabled_flag: number;
        sample_adaptive_offset_enabled_flag: number;
        pcm_enabled_flag: number;
        pcm_sample_bit_depth_luma_minus1: number;
        pcm_sample_bit_depth_chroma_minus1: number;
        log2_min_pcm_luma_coding_block_size_minus3: number;
        log2_diff_max_min_pcm_luma_coding_block_size: number;
        pcm_loop_filter_disabled_flag: number;
        num_short_term_ref_pic_sets: number;
        short_term_ref_pic_set: H265ShortTermRefPicSet[];
        long_term_ref_pics_present_flag: number;
        num_long_term_ref_pics_sps: number;
        lt_ref_pic_poc_lsb_sps: number[];
        used_by_curr_pic_lt_sps_flag: Uint8Array;
        temporal_mvp_enabled_flag: number;
        strong_intra_smoothing_enabled_flag: number;
        vui_parameters_present_flag: number;
        vui_params: H265VUIParams;
        sps_extension_flag: number;
        sps_range_extension_flag: number;
        sps_multilayer_extension_flag: number;
        sps_3d_extension_flag: number;
        sps_scc_extension_flag: number;
        sps_extension_4bits: number;
        sps_extension_params: H265SPSExtensionParams;
        sps_scc_extension_params: H265SPSSccExtensionParams;
        chroma_array_type: number;
        width: number;
        height: number;
        crop_rect_width: number;
        crop_rect_height: number;
        crop_rect_x: number;
        crop_rect_y: number;
        fps_num: number;
        fps_den: number;
        valid: boolean;

        // Constructors

        constructor(
            properties?: Partial<{
                id: number;
                vps_id: number;
                max_sub_layers_minus1: number;
                temporal_id_nesting_flag: number;
                profile_tier_level: H265ProfileTierLevel;
                chroma_format_idc: number;
                separate_colour_plane_flag: number;
                pic_width_in_luma_samples: number;
                pic_height_in_luma_samples: number;
                conformance_window_flag: number;
                conf_win_left_offset: number;
                conf_win_right_offset: number;
                conf_win_top_offset: number;
                conf_win_bottom_offset: number;
                bit_depth_luma_minus8: number;
                bit_depth_chroma_minus8: number;
                log2_max_pic_order_cnt_lsb_minus4: number;
                sub_layer_ordering_info_present_flag: number;
                max_dec_pic_buffering_minus1: Uint8Array;
                max_num_reorder_pics: Uint8Array;
                max_latency_increase_plus1: Uint8Array;
                log2_min_luma_coding_block_size_minus3: number;
                log2_diff_max_min_luma_coding_block_size: number;
                log2_min_transform_block_size_minus2: number;
                log2_diff_max_min_transform_block_size: number;
                max_transform_hierarchy_depth_inter: number;
                max_transform_hierarchy_depth_intra: number;
                scaling_list_enabled_flag: number;
                scaling_list_data_present_flag: number;
                scaling_list: H265ScalingList;
                amp_enabled_flag: number;
                sample_adaptive_offset_enabled_flag: number;
                pcm_enabled_flag: number;
                pcm_sample_bit_depth_luma_minus1: number;
                pcm_sample_bit_depth_chroma_minus1: number;
                log2_min_pcm_luma_coding_block_size_minus3: number;
                log2_diff_max_min_pcm_luma_coding_block_size: number;
                pcm_loop_filter_disabled_flag: number;
                num_short_term_ref_pic_sets: number;
                short_term_ref_pic_set: H265ShortTermRefPicSet[];
                long_term_ref_pics_present_flag: number;
                num_long_term_ref_pics_sps: number;
                lt_ref_pic_poc_lsb_sps: number[];
                used_by_curr_pic_lt_sps_flag: Uint8Array;
                temporal_mvp_enabled_flag: number;
                strong_intra_smoothing_enabled_flag: number;
                vui_parameters_present_flag: number;
                vui_params: H265VUIParams;
                sps_extension_flag: number;
                sps_range_extension_flag: number;
                sps_multilayer_extension_flag: number;
                sps_3d_extension_flag: number;
                sps_scc_extension_flag: number;
                sps_extension_4bits: number;
                sps_extension_params: H265SPSExtensionParams;
                sps_scc_extension_params: H265SPSSccExtensionParams;
                chroma_array_type: number;
                width: number;
                height: number;
                crop_rect_width: number;
                crop_rect_height: number;
                crop_rect_x: number;
                crop_rect_y: number;
                fps_num: number;
                fps_den: number;
                valid: boolean;
            }>,
        );
    }

    /**
     * H265 Sequence Parameter Set extension
     * @gir-type Struct
     * @since 1.28
     */
    class H265SPSEXT {
        static $gtype: GObject.GType<H265SPSEXT>;

        // Fields

        short_term_ref_pic_set_ext: H265ShortTermRefPicSetExt[];

        // Constructors

        constructor(
            properties?: Partial<{
                short_term_ref_pic_set_ext: H265ShortTermRefPicSetExt[];
            }>,
        );
    }

    /**
     * Defines the GstH265SPSExtensionParams
     * @gir-type Struct
     */
    class H265SPSExtensionParams {
        static $gtype: GObject.GType<H265SPSExtensionParams>;

        // Fields

        transform_skip_rotation_enabled_flag: number;
        transform_skip_context_enabled_flag: number;
        implicit_rdpcm_enabled_flag: number;
        explicit_rdpcm_enabled_flag: number;
        extended_precision_processing_flag: number;
        intra_smoothing_disabled_flag: number;
        high_precision_offsets_enabled_flag: number;
        persistent_rice_adaptation_enabled_flag: number;
        cabac_bypass_alignment_enabled_flag: number;

        // Constructors

        constructor(
            properties?: Partial<{
                transform_skip_rotation_enabled_flag: number;
                transform_skip_context_enabled_flag: number;
                implicit_rdpcm_enabled_flag: number;
                explicit_rdpcm_enabled_flag: number;
                extended_precision_processing_flag: number;
                intra_smoothing_disabled_flag: number;
                high_precision_offsets_enabled_flag: number;
                persistent_rice_adaptation_enabled_flag: number;
                cabac_bypass_alignment_enabled_flag: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     * @since 1.18
     */
    class H265SPSSccExtensionParams {
        static $gtype: GObject.GType<H265SPSSccExtensionParams>;

        // Fields

        sps_curr_pic_ref_enabled_flag: number;
        palette_mode_enabled_flag: number;
        palette_max_size: number;
        delta_palette_max_predictor_size: number;
        sps_palette_predictor_initializers_present_flag: number;
        sps_num_palette_predictor_initializer_minus1: number;
        sps_palette_predictor_initializer: number[];
        motion_vector_resolution_control_idc: number;
        intra_boundary_filtering_disabled_flag: number;

        // Constructors

        constructor(
            properties?: Partial<{
                sps_curr_pic_ref_enabled_flag: number;
                palette_mode_enabled_flag: number;
                palette_max_size: number;
                delta_palette_max_predictor_size: number;
                sps_palette_predictor_initializers_present_flag: number;
                sps_num_palette_predictor_initializer_minus1: number;
                sps_palette_predictor_initializer: number[];
                motion_vector_resolution_control_idc: number;
                intra_boundary_filtering_disabled_flag: number;
            }>,
        );
    }

    /**
     * Defines the GstH265ScalingList
     * @gir-type Struct
     */
    class H265ScalingList {
        static $gtype: GObject.GType<H265ScalingList>;

        // Fields

        scaling_list_dc_coef_minus8_16x16: number[];
        scaling_list_dc_coef_minus8_32x32: number[];
        scaling_lists_4x4: Uint8Array;
        scaling_lists_8x8: Uint8Array;
        scaling_lists_16x16: Uint8Array;
        scaling_lists_32x32: Uint8Array;

        // Constructors

        constructor(
            properties?: Partial<{
                scaling_list_dc_coef_minus8_16x16: number[];
                scaling_list_dc_coef_minus8_32x32: number[];
                scaling_lists_4x4: Uint8Array;
                scaling_lists_8x8: Uint8Array;
                scaling_lists_16x16: Uint8Array;
                scaling_lists_32x32: Uint8Array;
            }>,
        );
    }

    /**
     * Defines the {@link GstCodecParsers.H265ShortTermRefPicSet} params
     * @gir-type Struct
     */
    class H265ShortTermRefPicSet {
        static $gtype: GObject.GType<H265ShortTermRefPicSet>;

        // Fields

        inter_ref_pic_set_prediction_flag: number;
        delta_idx_minus1: number;
        delta_rps_sign: number;
        abs_delta_rps_minus1: number;
        NumDeltaPocs: number;
        NumNegativePics: number;
        NumPositivePics: number;
        UsedByCurrPicS0: Uint8Array;
        UsedByCurrPicS1: Uint8Array;
        DeltaPocS0: number[];
        DeltaPocS1: number[];
        NumDeltaPocsOfRefRpsIdx: number;

        // Constructors

        constructor(
            properties?: Partial<{
                inter_ref_pic_set_prediction_flag: number;
                delta_idx_minus1: number;
                delta_rps_sign: number;
                abs_delta_rps_minus1: number;
                NumDeltaPocs: number;
                NumNegativePics: number;
                NumPositivePics: number;
                UsedByCurrPicS0: Uint8Array;
                UsedByCurrPicS1: Uint8Array;
                DeltaPocS0: number[];
                DeltaPocS1: number[];
                NumDeltaPocsOfRefRpsIdx: number;
            }>,
        );
    }

    /**
     * Defines the extended {@link GstCodecParsers.H265ShortTermRefPicSetExt} params
     * @gir-type Struct
     * @since 1.28
     */
    class H265ShortTermRefPicSetExt {
        static $gtype: GObject.GType<H265ShortTermRefPicSetExt>;

        // Fields

        use_delta_flag: Uint8Array;
        used_by_curr_pic_flag: Uint8Array;
        delta_poc_s0_minus1: number[];
        delta_poc_s1_minus1: number[];

        // Constructors

        constructor(
            properties?: Partial<{
                use_delta_flag: Uint8Array;
                used_by_curr_pic_flag: Uint8Array;
                delta_poc_s0_minus1: number[];
                delta_poc_s1_minus1: number[];
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class H265SliceHdr {
        static $gtype: GObject.GType<H265SliceHdr>;

        // Fields

        first_slice_segment_in_pic_flag: number;
        no_output_of_prior_pics_flag: number;
        pps: H265PPS;
        dependent_slice_segment_flag: number;
        segment_address: number;
        type: number;
        pic_output_flag: number;
        colour_plane_id: number;
        pic_order_cnt_lsb: number;
        short_term_ref_pic_set_sps_flag: number;
        short_term_ref_pic_sets: H265ShortTermRefPicSet;
        short_term_ref_pic_set_idx: number;
        num_long_term_sps: number;
        num_long_term_pics: number;
        lt_idx_sps: Uint8Array;
        poc_lsb_lt: number[];
        used_by_curr_pic_lt_flag: Uint8Array;
        delta_poc_msb_present_flag: Uint8Array;
        delta_poc_msb_cycle_lt: number[];
        temporal_mvp_enabled_flag: number;
        sao_luma_flag: number;
        sao_chroma_flag: number;
        num_ref_idx_active_override_flag: number;
        num_ref_idx_l0_active_minus1: number;
        num_ref_idx_l1_active_minus1: number;
        ref_pic_list_modification: H265RefPicListModification;
        mvd_l1_zero_flag: number;
        cabac_init_flag: number;
        collocated_from_l0_flag: number;
        collocated_ref_idx: number;
        pred_weight_table: H265PredWeightTable;
        five_minus_max_num_merge_cand: number;
        use_integer_mv_flag: number;
        qp_delta: number;
        cb_qp_offset: number;
        cr_qp_offset: number;
        slice_act_y_qp_offset: number;
        slice_act_cb_qp_offset: number;
        slice_act_cr_qp_offset: number;
        cu_chroma_qp_offset_enabled_flag: number;
        deblocking_filter_override_flag: number;
        deblocking_filter_disabled_flag: number;
        beta_offset_div2: number;
        tc_offset_div2: number;
        loop_filter_across_slices_enabled_flag: number;
        num_entry_point_offsets: number;
        offset_len_minus1: number;
        entry_point_offset_minus1: number;
        NumPocTotalCurr: number;
        header_size: number;
        n_emulation_prevention_bytes: number;
        short_term_ref_pic_set_size: number;
        long_term_ref_pic_set_size: number;
        pps_id: number;

        // Constructors

        constructor(
            properties?: Partial<{
                first_slice_segment_in_pic_flag: number;
                no_output_of_prior_pics_flag: number;
                dependent_slice_segment_flag: number;
                segment_address: number;
                type: number;
                pic_output_flag: number;
                colour_plane_id: number;
                pic_order_cnt_lsb: number;
                short_term_ref_pic_set_sps_flag: number;
                short_term_ref_pic_sets: H265ShortTermRefPicSet;
                short_term_ref_pic_set_idx: number;
                num_long_term_sps: number;
                num_long_term_pics: number;
                lt_idx_sps: Uint8Array;
                poc_lsb_lt: number[];
                used_by_curr_pic_lt_flag: Uint8Array;
                delta_poc_msb_present_flag: Uint8Array;
                delta_poc_msb_cycle_lt: number[];
                temporal_mvp_enabled_flag: number;
                sao_luma_flag: number;
                sao_chroma_flag: number;
                num_ref_idx_active_override_flag: number;
                num_ref_idx_l0_active_minus1: number;
                num_ref_idx_l1_active_minus1: number;
                ref_pic_list_modification: H265RefPicListModification;
                mvd_l1_zero_flag: number;
                cabac_init_flag: number;
                collocated_from_l0_flag: number;
                collocated_ref_idx: number;
                pred_weight_table: H265PredWeightTable;
                five_minus_max_num_merge_cand: number;
                use_integer_mv_flag: number;
                qp_delta: number;
                cb_qp_offset: number;
                cr_qp_offset: number;
                slice_act_y_qp_offset: number;
                slice_act_cb_qp_offset: number;
                slice_act_cr_qp_offset: number;
                cu_chroma_qp_offset_enabled_flag: number;
                deblocking_filter_override_flag: number;
                deblocking_filter_disabled_flag: number;
                beta_offset_div2: number;
                tc_offset_div2: number;
                loop_filter_across_slices_enabled_flag: number;
                num_entry_point_offsets: number;
                offset_len_minus1: number;
                entry_point_offset_minus1: number;
                NumPocTotalCurr: number;
                header_size: number;
                n_emulation_prevention_bytes: number;
                short_term_ref_pic_set_size: number;
                long_term_ref_pic_set_size: number;
                pps_id: number;
            }>,
        );

        // Methods

        /**
         * Copies `src_slice` into `dst_slice`
         * @param src_slice The source {@link GstCodecParsers.H265SliceHdr} to copy from
         * @returns `true` if everything went fine, `false` otherwise
         */
        copy(src_slice: H265SliceHdr): boolean;
        /**
         * slice_hdr: The {@link GstCodecParsers.H265SliceHdr} to free
         * Frees `slice_hdr` fields.
         */
        free(): void;
    }

    /**
     * Defines the Sublayer HRD parameters
     * @gir-type Struct
     */
    class H265SubLayerHRDParams {
        static $gtype: GObject.GType<H265SubLayerHRDParams>;

        // Fields

        bit_rate_value_minus1: number[];
        cpb_size_value_minus1: number[];
        cpb_size_du_value_minus1: number[];
        bit_rate_du_value_minus1: number[];
        cbr_flag: Uint8Array;

        // Constructors

        constructor(
            properties?: Partial<{
                bit_rate_value_minus1: number[];
                cpb_size_value_minus1: number[];
                cpb_size_du_value_minus1: number[];
                bit_rate_du_value_minus1: number[];
                cbr_flag: Uint8Array;
            }>,
        );
    }

    /**
     * The time code SEI message provides time code information similar to that
     * defined by SMPTE ST 12-1 (2014) for field(s) or frame(s) of the current
     * picture.
     * D.2.27
     * @gir-type Struct
     * @since 1.16
     */
    class H265TimeCode {
        static $gtype: GObject.GType<H265TimeCode>;

        // Fields

        num_clock_ts: number;
        clock_timestamp_flag: Uint8Array;
        units_field_based_flag: Uint8Array;
        counting_type: Uint8Array;
        full_timestamp_flag: Uint8Array;
        discontinuity_flag: Uint8Array;
        cnt_dropped_flag: Uint8Array;
        n_frames: number[];
        seconds_flag: Uint8Array;
        seconds_value: Uint8Array;
        minutes_flag: Uint8Array;
        minutes_value: Uint8Array;
        hours_flag: Uint8Array;
        hours_value: Uint8Array;
        time_offset_length: Uint8Array;
        time_offset_value: number[];

        // Constructors

        constructor(
            properties?: Partial<{
                num_clock_ts: number;
                clock_timestamp_flag: Uint8Array;
                units_field_based_flag: Uint8Array;
                counting_type: Uint8Array;
                full_timestamp_flag: Uint8Array;
                discontinuity_flag: Uint8Array;
                cnt_dropped_flag: Uint8Array;
                n_frames: number[];
                seconds_flag: Uint8Array;
                seconds_value: Uint8Array;
                minutes_flag: Uint8Array;
                minutes_value: Uint8Array;
                hours_flag: Uint8Array;
                hours_value: Uint8Array;
                time_offset_length: Uint8Array;
                time_offset_value: number[];
            }>,
        );
    }

    /**
     * The User data unregistered SEI message syntax.
     * @gir-type Struct
     * @since 1.24
     */
    class H265UserDataUnregistered {
        static $gtype: GObject.GType<H265UserDataUnregistered>;

        // Fields

        uuid: Uint8Array;
        data: number;
        size: number;

        // Constructors

        constructor(
            properties?: Partial<{
                uuid: Uint8Array;
                data: number;
                size: number;
            }>,
        );
    }

    /**
     * Defines the VPS parameters
     * @gir-type Struct
     */
    class H265VPS {
        static $gtype: GObject.GType<H265VPS>;

        // Fields

        id: number;
        base_layer_internal_flag: number;
        base_layer_available_flag: number;
        max_layers_minus1: number;
        max_sub_layers_minus1: number;
        temporal_id_nesting_flag: number;
        profile_tier_level: H265ProfileTierLevel;
        sub_layer_ordering_info_present_flag: number;
        max_dec_pic_buffering_minus1: Uint8Array;
        max_num_reorder_pics: Uint8Array;
        max_latency_increase_plus1: number[];
        max_layer_id: number;
        num_layer_sets_minus1: number;
        timing_info_present_flag: number;
        num_units_in_tick: number;
        time_scale: number;
        poc_proportional_to_timing_flag: number;
        num_ticks_poc_diff_one_minus1: number;
        num_hrd_parameters: number;
        hrd_layer_set_idx: number;
        cprms_present_flag: number;
        hrd_params: H265HRDParams;
        vps_extension: number;
        valid: boolean;

        // Constructors

        constructor(
            properties?: Partial<{
                id: number;
                base_layer_internal_flag: number;
                base_layer_available_flag: number;
                max_layers_minus1: number;
                max_sub_layers_minus1: number;
                temporal_id_nesting_flag: number;
                profile_tier_level: H265ProfileTierLevel;
                sub_layer_ordering_info_present_flag: number;
                max_dec_pic_buffering_minus1: Uint8Array;
                max_num_reorder_pics: Uint8Array;
                max_latency_increase_plus1: number[];
                max_layer_id: number;
                num_layer_sets_minus1: number;
                timing_info_present_flag: number;
                num_units_in_tick: number;
                time_scale: number;
                poc_proportional_to_timing_flag: number;
                num_ticks_poc_diff_one_minus1: number;
                num_hrd_parameters: number;
                hrd_layer_set_idx: number;
                cprms_present_flag: number;
                hrd_params: H265HRDParams;
                vps_extension: number;
                valid: boolean;
            }>,
        );
    }

    /**
     * The structure representing the VUI parameters.
     * @gir-type Struct
     */
    class H265VUIParams {
        static $gtype: GObject.GType<H265VUIParams>;

        // Fields

        parsed: boolean;
        aspect_ratio_info_present_flag: number;
        aspect_ratio_idc: number;
        sar_width: number;
        sar_height: number;
        overscan_info_present_flag: number;
        overscan_appropriate_flag: number;
        video_signal_type_present_flag: number;
        video_format: number;
        video_full_range_flag: number;
        colour_description_present_flag: number;
        colour_primaries: number;
        transfer_characteristics: number;
        matrix_coefficients: number;
        chroma_loc_info_present_flag: number;
        chroma_sample_loc_type_top_field: number;
        chroma_sample_loc_type_bottom_field: number;
        neutral_chroma_indication_flag: number;
        field_seq_flag: number;
        frame_field_info_present_flag: number;
        default_display_window_flag: number;
        def_disp_win_left_offset: number;
        def_disp_win_right_offset: number;
        def_disp_win_top_offset: number;
        def_disp_win_bottom_offset: number;
        timing_info_present_flag: number;
        num_units_in_tick: number;
        time_scale: number;
        poc_proportional_to_timing_flag: number;
        num_ticks_poc_diff_one_minus1: number;
        hrd_parameters_present_flag: number;
        hrd_params: H265HRDParams;
        bitstream_restriction_flag: number;
        tiles_fixed_structure_flag: number;
        motion_vectors_over_pic_boundaries_flag: number;
        restricted_ref_pic_lists_flag: number;
        min_spatial_segmentation_idc: number;
        max_bytes_per_pic_denom: number;
        max_bits_per_min_cu_denom: number;
        log2_max_mv_length_horizontal: number;
        log2_max_mv_length_vertical: number;
        par_n: number;
        par_d: number;

        // Constructors

        constructor(
            properties?: Partial<{
                parsed: boolean;
                aspect_ratio_info_present_flag: number;
                aspect_ratio_idc: number;
                sar_width: number;
                sar_height: number;
                overscan_info_present_flag: number;
                overscan_appropriate_flag: number;
                video_signal_type_present_flag: number;
                video_format: number;
                video_full_range_flag: number;
                colour_description_present_flag: number;
                colour_primaries: number;
                transfer_characteristics: number;
                matrix_coefficients: number;
                chroma_loc_info_present_flag: number;
                chroma_sample_loc_type_top_field: number;
                chroma_sample_loc_type_bottom_field: number;
                neutral_chroma_indication_flag: number;
                field_seq_flag: number;
                frame_field_info_present_flag: number;
                default_display_window_flag: number;
                def_disp_win_left_offset: number;
                def_disp_win_right_offset: number;
                def_disp_win_top_offset: number;
                def_disp_win_bottom_offset: number;
                timing_info_present_flag: number;
                num_units_in_tick: number;
                time_scale: number;
                poc_proportional_to_timing_flag: number;
                num_ticks_poc_diff_one_minus1: number;
                hrd_parameters_present_flag: number;
                hrd_params: H265HRDParams;
                bitstream_restriction_flag: number;
                tiles_fixed_structure_flag: number;
                motion_vectors_over_pic_boundaries_flag: number;
                restricted_ref_pic_lists_flag: number;
                min_spatial_segmentation_idc: number;
                max_bytes_per_pic_denom: number;
                max_bits_per_min_cu_denom: number;
                log2_max_mv_length_horizontal: number;
                log2_max_mv_length_vertical: number;
                par_n: number;
                par_d: number;
            }>,
        );
    }

    /**
     * Structure defining the H266 ALF parameters.
     * @gir-type Struct
     * @since 1.26
     */
    class H266ALF {
        static $gtype: GObject.GType<H266ALF>;

        // Fields

        luma_filter_signal_flag: number;
        chroma_filter_signal_flag: number;
        cc_cb_filter_signal_flag: number;
        cc_cr_filter_signal_flag: number;
        luma_clip_flag: number;
        luma_num_filters_signalled_minus1: number;
        luma_coeff_delta_idx: Uint8Array;
        luma_coeff_abs: Uint8Array;
        luma_coeff_sign: Uint8Array;
        luma_clip_idx: Uint8Array;
        chroma_clip_flag: number;
        chroma_num_alt_filters_minus1: number;
        chroma_coeff_abs: Uint8Array;
        chroma_coeff_sign: Uint8Array;
        chroma_clip_idx: Uint8Array;
        cc_cb_filters_signalled_minus1: number;
        cc_cb_mapped_coeff_abs: Uint8Array;
        cc_cb_coeff_sign: Uint8Array;
        cc_cr_filters_signalled_minus1: number;
        cc_cr_mapped_coeff_abs: Uint8Array;
        cc_cr_coeff_sign: Uint8Array;

        // Constructors

        constructor(
            properties?: Partial<{
                luma_filter_signal_flag: number;
                chroma_filter_signal_flag: number;
                cc_cb_filter_signal_flag: number;
                cc_cr_filter_signal_flag: number;
                luma_clip_flag: number;
                luma_num_filters_signalled_minus1: number;
                luma_coeff_delta_idx: Uint8Array;
                luma_coeff_abs: Uint8Array;
                luma_coeff_sign: Uint8Array;
                luma_clip_idx: Uint8Array;
                chroma_clip_flag: number;
                chroma_num_alt_filters_minus1: number;
                chroma_coeff_abs: Uint8Array;
                chroma_coeff_sign: Uint8Array;
                chroma_clip_idx: Uint8Array;
                cc_cb_filters_signalled_minus1: number;
                cc_cb_mapped_coeff_abs: Uint8Array;
                cc_cb_coeff_sign: Uint8Array;
                cc_cr_filters_signalled_minus1: number;
                cc_cr_mapped_coeff_abs: Uint8Array;
                cc_cr_coeff_sign: Uint8Array;
            }>,
        );
    }

    /**
     * Structure defining the H266 Adaptation Parameter Set.
     * @gir-type Struct
     * @since 1.26
     */
    class H266APS {
        static $gtype: GObject.GType<H266APS>;

        // Fields

        params_type: H266APSType;
        aps_id: number;
        chroma_present_flag: number;
        extension_flag: number;
        extension_data_flag: number;
        valid: boolean;
    }

    /**
     * Structure defining the H266 AU delimiter.
     * @gir-type Struct
     * @since 1.26
     */
    class H266AUD {
        static $gtype: GObject.GType<H266AUD>;

        // Fields

        irap_or_gdr_flag: number;
        pic_type: number;

        // Constructors

        constructor(
            properties?: Partial<{
                irap_or_gdr_flag: number;
                pic_type: number;
            }>,
        );
    }

    /**
     * Structure defining the H266 buffering period.
     * @gir-type Struct
     * @since 1.26
     */
    class H266BufferingPeriod {
        static $gtype: GObject.GType<H266BufferingPeriod>;

        // Fields

        nal_hrd_params_present_flag: number;
        vcl_hrd_params_present_flag: number;
        cpb_initial_removal_delay_length_minus1: number;
        cpb_removal_delay_length_minus1: number;
        dpb_output_delay_length_minus1: number;
        du_hrd_params_present_flag: number;
        du_cpb_removal_delay_increment_length_minus1: number;
        dpb_output_delay_du_length_minus1: number;
        du_cpb_params_in_pic_timing_sei_flag: number;
        du_dpb_params_in_pic_timing_sei_flag: number;
        concatenation_flag: number;
        additional_concatenation_info_present_flag: number;
        max_initial_removal_delay_for_concatenation: number;
        cpb_removal_delay_delta_minus1: number;
        max_sublayers_minus1: number;
        cpb_removal_delay_deltas_present_flag: number;
        num_cpb_removal_delay_deltas_minus1: number;
        cpb_removal_delay_delta_val: Uint8Array;
        cpb_cnt_minus1: number;
        sublayer_initial_cpb_removal_delay_present_flag: number;
        nal_initial_cpb_removal_delay: Uint8Array;
        nal_initial_cpb_removal_offset: Uint8Array;
        nal_initial_alt_cpb_removal_delay: Uint8Array;
        nal_initial_alt_cpb_removal_offset: Uint8Array;
        vcl_initial_cpb_removal_delay: Uint8Array;
        vcl_initial_cpb_removal_offset: Uint8Array;
        vcl_initial_alt_cpb_removal_delay: Uint8Array;
        vcl_initial_alt_cpb_removal_offset: Uint8Array;
        sublayer_dpb_output_offsets_present_flag: number;
        dpb_output_tid_offset: number[];
        alt_cpb_params_present_flag: number;
        use_alt_cpb_params_flag: number;

        // Constructors

        constructor(
            properties?: Partial<{
                nal_hrd_params_present_flag: number;
                vcl_hrd_params_present_flag: number;
                cpb_initial_removal_delay_length_minus1: number;
                cpb_removal_delay_length_minus1: number;
                dpb_output_delay_length_minus1: number;
                du_hrd_params_present_flag: number;
                du_cpb_removal_delay_increment_length_minus1: number;
                dpb_output_delay_du_length_minus1: number;
                du_cpb_params_in_pic_timing_sei_flag: number;
                du_dpb_params_in_pic_timing_sei_flag: number;
                concatenation_flag: number;
                additional_concatenation_info_present_flag: number;
                max_initial_removal_delay_for_concatenation: number;
                cpb_removal_delay_delta_minus1: number;
                max_sublayers_minus1: number;
                cpb_removal_delay_deltas_present_flag: number;
                num_cpb_removal_delay_deltas_minus1: number;
                cpb_removal_delay_delta_val: Uint8Array;
                cpb_cnt_minus1: number;
                sublayer_initial_cpb_removal_delay_present_flag: number;
                nal_initial_cpb_removal_delay: Uint8Array;
                nal_initial_cpb_removal_offset: Uint8Array;
                nal_initial_alt_cpb_removal_delay: Uint8Array;
                nal_initial_alt_cpb_removal_offset: Uint8Array;
                vcl_initial_cpb_removal_delay: Uint8Array;
                vcl_initial_cpb_removal_offset: Uint8Array;
                vcl_initial_alt_cpb_removal_delay: Uint8Array;
                vcl_initial_alt_cpb_removal_offset: Uint8Array;
                sublayer_dpb_output_offsets_present_flag: number;
                dpb_output_tid_offset: number[];
                alt_cpb_params_present_flag: number;
                use_alt_cpb_params_flag: number;
            }>,
        );
    }

    /**
     * Structure defining the H266 decoding capability information.
     * @gir-type Struct
     * @since 1.26
     */
    class H266DCI {
        static $gtype: GObject.GType<H266DCI>;

        // Fields

        num_ptls_minus1: number;
        extension_flag: number;
        extension_data_flag: number;
    }

    /**
     * Structure defining the H266 DPB parameters.
     * @gir-type Struct
     * @since 1.26
     */
    class H266DPBParameters {
        static $gtype: GObject.GType<H266DPBParameters>;

        // Fields

        max_dec_pic_buffering_minus1: Uint8Array;
        max_num_reorder_pics: Uint8Array;
        max_latency_increase_plus1: Uint8Array;

        // Constructors

        constructor(
            properties?: Partial<{
                max_dec_pic_buffering_minus1: Uint8Array;
                max_num_reorder_pics: Uint8Array;
                max_latency_increase_plus1: Uint8Array;
            }>,
        );
    }

    /**
     * Structure defining the H266 decoding unit info.
     * @gir-type Struct
     * @since 1.26
     */
    class H266DUInfo {
        static $gtype: GObject.GType<H266DUInfo>;

        // Fields

        decoding_unit_idx: number;
        sublayer_delays_present_flag: Uint8Array;
        du_cpb_removal_delay_increment: Uint8Array;
        dpb_output_du_delay_present_flag: number;
        dpb_output_du_delay: number;

        // Constructors

        constructor(
            properties?: Partial<{
                decoding_unit_idx: number;
                sublayer_delays_present_flag: Uint8Array;
                du_cpb_removal_delay_increment: Uint8Array;
                dpb_output_du_delay_present_flag: number;
                dpb_output_du_delay: number;
            }>,
        );
    }

    /**
     * Contains VVCDecoderConfigurationRecord data as defined in ISO/IEC 14496-15
     * @gir-type Struct
     * @since 1.26
     */
    class H266DecoderConfigRecord {
        static $gtype: GObject.GType<H266DecoderConfigRecord>;

        // Fields

        length_size_minus_one: number;
        ptl_present_flag: number;
        ols_idx: number;
        num_sublayers: number;
        constant_frame_rate: number;
        chroma_format_idc: number;
        bit_depth_minus8: number;
        native_ptl: H266PTLRecord;
        max_picture_width: number;
        max_picture_height: number;
        avg_frame_rate: number;
        nalu_array: any[];

        // Constructors

        constructor(
            properties?: Partial<{
                length_size_minus_one: number;
                ptl_present_flag: number;
                ols_idx: number;
                num_sublayers: number;
                constant_frame_rate: number;
                chroma_format_idc: number;
                bit_depth_minus8: number;
                native_ptl: H266PTLRecord;
                max_picture_width: number;
                max_picture_height: number;
                avg_frame_rate: number;
                nalu_array: any[];
            }>,
        );

        // Methods

        /**
         * Free `config` data
         */
        free(): void;
    }

    /**
     * Contains NAL Unit array data as defined in ISO/IEC 14496-15
     * @gir-type Struct
     * @since 1.26
     */
    class H266DecoderConfigRecordNalUnitArray {
        static $gtype: GObject.GType<H266DecoderConfigRecordNalUnitArray>;

        // Fields

        array_completeness: number;
        nal_unit_type: H266NalUnitType;
        nalu: any[];
    }

    /**
     * Structure defining the H266 frame field information.
     * @gir-type Struct
     * @since 1.26
     */
    class H266FrameFieldInfo {
        static $gtype: GObject.GType<H266FrameFieldInfo>;

        // Fields

        field_pic_flag: number;
        bottom_field_flag: number;
        pairing_indicated_flag: number;
        paired_with_next_field_flag: number;
        display_fields_from_frame_flag: number;
        top_field_first_flag: number;
        display_elemental_periods_minus1: number;
        source_scan_type: number;
        duplicate_flag: number;
        valid: boolean;

        // Constructors

        constructor(
            properties?: Partial<{
                field_pic_flag: number;
                bottom_field_flag: number;
                pairing_indicated_flag: number;
                paired_with_next_field_flag: number;
                display_fields_from_frame_flag: number;
                top_field_first_flag: number;
                display_elemental_periods_minus1: number;
                source_scan_type: number;
                duplicate_flag: number;
                valid: boolean;
            }>,
        );
    }

    /**
     * Structure defining the H266 general constraints info.
     * @gir-type Struct
     * @since 1.26
     */
    class H266GeneralConstraintsInfo {
        static $gtype: GObject.GType<H266GeneralConstraintsInfo>;

        // Fields

        present_flag: number;
        intra_only_constraint_flag: number;
        all_layers_independent_constraint_flag: number;
        one_au_only_constraint_flag: number;
        sixteen_minus_max_bitdepth_constraint_idc: number;
        three_minus_max_chroma_format_constraint_idc: number;
        no_mixed_nalu_types_in_pic_constraint_flag: number;
        no_trail_constraint_flag: number;
        no_stsa_constraint_flag: number;
        no_rasl_constraint_flag: number;
        no_radl_constraint_flag: number;
        no_idr_constraint_flag: number;
        no_cra_constraint_flag: number;
        no_gdr_constraint_flag: number;
        no_aps_constraint_flag: number;
        no_idr_rpl_constraint_flag: number;
        one_tile_per_pic_constraint_flag: number;
        pic_header_in_slice_header_constraint_flag: number;
        one_slice_per_pic_constraint_flag: number;
        no_rectangular_slice_constraint_flag: number;
        one_slice_per_subpic_constraint_flag: number;
        no_subpic_info_constraint_flag: number;
        three_minus_max_log2_ctu_size_constraint_idc: number;
        no_partition_constraints_override_constraint_flag: number;
        no_mtt_constraint_flag: number;
        no_qtbtt_dual_tree_intra_constraint_flag: number;
        no_palette_constraint_flag: number;
        no_ibc_constraint_flag: number;
        no_isp_constraint_flag: number;
        no_mrl_constraint_flag: number;
        no_mip_constraint_flag: number;
        no_cclm_constraint_flag: number;
        no_ref_pic_resampling_constraint_flag: number;
        no_res_change_in_clvs_constraint_flag: number;
        no_weighted_prediction_constraint_flag: number;
        no_ref_wraparound_constraint_flag: number;
        no_temporal_mvp_constraint_flag: number;
        no_sbtmvp_constraint_flag: number;
        no_amvr_constraint_flag: number;
        no_bdof_constraint_flag: number;
        no_smvd_constraint_flag: number;
        no_dmvr_constraint_flag: number;
        no_mmvd_constraint_flag: number;
        no_affine_motion_constraint_flag: number;
        no_prof_constraint_flag: number;
        no_bcw_constraint_flag: number;
        no_ciip_constraint_flag: number;
        no_gpm_constraint_flag: number;
        no_luma_transform_size_64_constraint_flag: number;
        no_transform_skip_constraint_flag: number;
        no_bdpcm_constraint_flag: number;
        no_mts_constraint_flag: number;
        no_lfnst_constraint_flag: number;
        no_joint_cbcr_constraint_flag: number;
        no_sbt_constraint_flag: number;
        no_act_constraint_flag: number;
        no_explicit_scaling_list_constraint_flag: number;
        no_dep_quant_constraint_flag: number;
        no_sign_data_hiding_constraint_flag: number;
        no_cu_qp_delta_constraint_flag: number;
        no_chroma_qp_offset_constraint_flag: number;
        no_sao_constraint_flag: number;
        no_alf_constraint_flag: number;
        no_ccalf_constraint_flag: number;
        no_lmcs_constraint_flag: number;
        no_ladf_constraint_flag: number;
        no_virtual_boundaries_constraint_flag: number;
        all_rap_pictures_constraint_flag: number;
        no_extended_precision_processing_constraint_flag: number;
        no_ts_residual_coding_rice_constraint_flag: number;
        no_rrc_rice_extension_constraint_flag: number;
        no_persistent_rice_adaptation_constraint_flag: number;
        no_reverse_last_sig_coeff_constraint_flag: number;
        reserved_zero_bit: Uint8Array;

        // Constructors

        constructor(
            properties?: Partial<{
                present_flag: number;
                intra_only_constraint_flag: number;
                all_layers_independent_constraint_flag: number;
                one_au_only_constraint_flag: number;
                sixteen_minus_max_bitdepth_constraint_idc: number;
                three_minus_max_chroma_format_constraint_idc: number;
                no_mixed_nalu_types_in_pic_constraint_flag: number;
                no_trail_constraint_flag: number;
                no_stsa_constraint_flag: number;
                no_rasl_constraint_flag: number;
                no_radl_constraint_flag: number;
                no_idr_constraint_flag: number;
                no_cra_constraint_flag: number;
                no_gdr_constraint_flag: number;
                no_aps_constraint_flag: number;
                no_idr_rpl_constraint_flag: number;
                one_tile_per_pic_constraint_flag: number;
                pic_header_in_slice_header_constraint_flag: number;
                one_slice_per_pic_constraint_flag: number;
                no_rectangular_slice_constraint_flag: number;
                one_slice_per_subpic_constraint_flag: number;
                no_subpic_info_constraint_flag: number;
                three_minus_max_log2_ctu_size_constraint_idc: number;
                no_partition_constraints_override_constraint_flag: number;
                no_mtt_constraint_flag: number;
                no_qtbtt_dual_tree_intra_constraint_flag: number;
                no_palette_constraint_flag: number;
                no_ibc_constraint_flag: number;
                no_isp_constraint_flag: number;
                no_mrl_constraint_flag: number;
                no_mip_constraint_flag: number;
                no_cclm_constraint_flag: number;
                no_ref_pic_resampling_constraint_flag: number;
                no_res_change_in_clvs_constraint_flag: number;
                no_weighted_prediction_constraint_flag: number;
                no_ref_wraparound_constraint_flag: number;
                no_temporal_mvp_constraint_flag: number;
                no_sbtmvp_constraint_flag: number;
                no_amvr_constraint_flag: number;
                no_bdof_constraint_flag: number;
                no_smvd_constraint_flag: number;
                no_dmvr_constraint_flag: number;
                no_mmvd_constraint_flag: number;
                no_affine_motion_constraint_flag: number;
                no_prof_constraint_flag: number;
                no_bcw_constraint_flag: number;
                no_ciip_constraint_flag: number;
                no_gpm_constraint_flag: number;
                no_luma_transform_size_64_constraint_flag: number;
                no_transform_skip_constraint_flag: number;
                no_bdpcm_constraint_flag: number;
                no_mts_constraint_flag: number;
                no_lfnst_constraint_flag: number;
                no_joint_cbcr_constraint_flag: number;
                no_sbt_constraint_flag: number;
                no_act_constraint_flag: number;
                no_explicit_scaling_list_constraint_flag: number;
                no_dep_quant_constraint_flag: number;
                no_sign_data_hiding_constraint_flag: number;
                no_cu_qp_delta_constraint_flag: number;
                no_chroma_qp_offset_constraint_flag: number;
                no_sao_constraint_flag: number;
                no_alf_constraint_flag: number;
                no_ccalf_constraint_flag: number;
                no_lmcs_constraint_flag: number;
                no_ladf_constraint_flag: number;
                no_virtual_boundaries_constraint_flag: number;
                all_rap_pictures_constraint_flag: number;
                no_extended_precision_processing_constraint_flag: number;
                no_ts_residual_coding_rice_constraint_flag: number;
                no_rrc_rice_extension_constraint_flag: number;
                no_persistent_rice_adaptation_constraint_flag: number;
                no_reverse_last_sig_coeff_constraint_flag: number;
                reserved_zero_bit: Uint8Array;
            }>,
        );
    }

    /**
     * Structure defining the H266 HDR parameters.
     * @gir-type Struct
     * @since 1.26
     */
    class H266GeneralHRDParameters {
        static $gtype: GObject.GType<H266GeneralHRDParameters>;

        // Fields

        num_units_in_tick: number;
        time_scale: number;
        general_nal_hrd_params_present_flag: number;
        general_vcl_hrd_params_present_flag: number;
        general_same_pic_timing_in_all_ols_flag: number;
        general_du_hrd_params_present_flag: number;
        tick_divisor_minus2: number;
        bit_rate_scale: number;
        cpb_size_scale: number;
        cpb_size_du_scale: number;
        hrd_cpb_cnt_minus1: number;

        // Constructors

        constructor(
            properties?: Partial<{
                num_units_in_tick: number;
                time_scale: number;
                general_nal_hrd_params_present_flag: number;
                general_vcl_hrd_params_present_flag: number;
                general_same_pic_timing_in_all_ols_flag: number;
                general_du_hrd_params_present_flag: number;
                tick_divisor_minus2: number;
                bit_rate_scale: number;
                cpb_size_scale: number;
                cpb_size_du_scale: number;
                hrd_cpb_cnt_minus1: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    abstract class H266HRDParams {
        static $gtype: GObject.GType<H266HRDParams>;
    }

    /**
     * Structure defining the H266 LMCS parameters.
     * @gir-type Struct
     * @since 1.26
     */
    class H266LMCS {
        static $gtype: GObject.GType<H266LMCS>;

        // Fields

        min_bin_idx: number;
        delta_max_bin_idx: number;
        delta_cw_prec_minus1: number;
        delta_abs_cw: Uint8Array;
        delta_sign_cw_flag: Uint8Array;
        delta_abs_crs: number;
        delta_sign_crs_flag: number;

        // Constructors

        constructor(
            properties?: Partial<{
                min_bin_idx: number;
                delta_max_bin_idx: number;
                delta_cw_prec_minus1: number;
                delta_abs_cw: Uint8Array;
                delta_sign_cw_flag: Uint8Array;
                delta_abs_crs: number;
                delta_sign_crs_flag: number;
            }>,
        );
    }

    /**
     * Structure defining the H266 Nal unit headers.
     * @gir-type Struct
     * @since 1.26
     */
    class H266NalUnit {
        static $gtype: GObject.GType<H266NalUnit>;

        // Fields

        type: number;
        layer_id: number;
        temporal_id_plus1: number;
        size: number;
        offset: number;
        sc_offset: number;
        valid: boolean;
        data: number;
        header_bytes: number;

        // Constructors

        constructor(
            properties?: Partial<{
                type: number;
                layer_id: number;
                temporal_id_plus1: number;
                size: number;
                offset: number;
                sc_offset: number;
                valid: boolean;
                data: number;
                header_bytes: number;
            }>,
        );
    }

    /**
     * Structure defining the H266 OLS HDR parameters.
     * @gir-type Struct
     * @since 1.26
     */
    class H266OLSHRDParameters {
        static $gtype: GObject.GType<H266OLSHRDParameters>;

        // Fields

        fixed_pic_rate_general_flag: Uint8Array;
        fixed_pic_rate_within_cvs_flag: Uint8Array;
        elemental_duration_in_tc_minus1: number[];
        low_delay_hrd_flag: Uint8Array;
        nal_sub_layer_hrd_parameters: H266SubLayerHRDParameters[];
        vcl_sub_layer_hrd_parameters: H266SubLayerHRDParameters[];

        // Constructors

        constructor(
            properties?: Partial<{
                fixed_pic_rate_general_flag: Uint8Array;
                fixed_pic_rate_within_cvs_flag: Uint8Array;
                elemental_duration_in_tc_minus1: number[];
                low_delay_hrd_flag: Uint8Array;
                nal_sub_layer_hrd_parameters: H266SubLayerHRDParameters[];
                vcl_sub_layer_hrd_parameters: H266SubLayerHRDParameters[];
            }>,
        );
    }

    /**
     * Structure defining the H266 operating point information.
     * @gir-type Struct
     * @since 1.26
     */
    class H266OPI {
        static $gtype: GObject.GType<H266OPI>;

        // Fields

        ols_info_present_flag: number;
        htid_info_present_flag: number;
        ols_idx: number;
        htid_plus1: number;
        extension_flag: number;
        extension_data_flag: number;

        // Constructors

        constructor(
            properties?: Partial<{
                ols_info_present_flag: number;
                htid_info_present_flag: number;
                ols_idx: number;
                htid_plus1: number;
                extension_flag: number;
                extension_data_flag: number;
            }>,
        );
    }

    /**
     * Structure defining the H266 PPS.
     * @gir-type Struct
     * @since 1.26
     */
    class H266PPS {
        static $gtype: GObject.GType<H266PPS>;

        // Fields

        pps_id: number;
        sps_id: number;
        mixed_nalu_types_in_pic_flag: number;
        pic_width_in_luma_samples: number;
        pic_height_in_luma_samples: number;
        conformance_window_flag: number;
        conf_win_left_offset: number;
        conf_win_right_offset: number;
        conf_win_top_offset: number;
        conf_win_bottom_offset: number;
        scaling_window_explicit_signalling_flag: number;
        scaling_win_left_offset: number;
        scaling_win_right_offset: number;
        scaling_win_top_offset: number;
        scaling_win_bottom_offset: number;
        output_flag_present_flag: number;
        no_pic_partition_flag: number;
        subpic_id_mapping_present_flag: number;
        num_subpics_minus1: number;
        subpic_id_len_minus1: number;
        subpic_id: number[];
        log2_ctu_size_minus5: number;
        num_exp_tile_columns_minus1: number;
        num_exp_tile_rows_minus1: number;
        tile_column_width_minus1: number[];
        tile_row_height_minus1: number[];
        loop_filter_across_tiles_enabled_flag: number;
        rect_slice_flag: number;
        single_slice_per_subpic_flag: number;
        num_slices_in_pic_minus1: number;
        tile_idx_delta_present_flag: number;
        slice_width_in_tiles_minus1: number[];
        slice_height_in_tiles_minus1: number[];
        num_exp_slices_in_tile: number[];
        exp_slice_height_in_ctus_minus1: number[];
        tile_idx_delta_val: number[];
        loop_filter_across_slices_enabled_flag: number;
        cabac_init_present_flag: number;
        num_ref_idx_default_active_minus1: Uint8Array;
        rpl1_idx_present_flag: number;
        weighted_pred_flag: number;
        weighted_bipred_flag: number;
        ref_wraparound_enabled_flag: number;
        pic_width_minus_wraparound_offset: number;
        init_qp_minus26: number;
        cu_qp_delta_enabled_flag: number;
        chroma_tool_offsets_present_flag: number;
        cb_qp_offset: number;
        cr_qp_offset: number;
        joint_cbcr_qp_offset_present_flag: number;
        joint_cbcr_qp_offset_value: number;
        slice_chroma_qp_offsets_present_flag: number;
        cu_chroma_qp_offset_list_enabled_flag: number;
        chroma_qp_offset_list_len_minus1: number;
        cb_qp_offset_list: Uint8Array;
        cr_qp_offset_list: Uint8Array;
        joint_cbcr_qp_offset_list: Uint8Array;
        deblocking_filter_control_present_flag: number;
        deblocking_filter_override_enabled_flag: number;
        deblocking_filter_disabled_flag: number;
        dbf_info_in_ph_flag: number;
        luma_beta_offset_div2: number;
        luma_tc_offset_div2: number;
        cb_beta_offset_div2: number;
        cb_tc_offset_div2: number;
        cr_beta_offset_div2: number;
        cr_tc_offset_div2: number;
        rpl_info_in_ph_flag: number;
        sao_info_in_ph_flag: number;
        alf_info_in_ph_flag: number;
        wp_info_in_ph_flag: number;
        qp_delta_info_in_ph_flag: number;
        picture_header_extension_present_flag: number;
        slice_header_extension_present_flag: number;
        extension_flag: number;
        extension_data_flag: number;
        width: number;
        height: number;
        crop_rect_width: number;
        crop_rect_height: number;
        crop_rect_x: number;
        crop_rect_y: number;
        pic_width_in_ctbs_y: number;
        pic_height_in_ctbs_y: number;
        pic_size_in_ctbs_y: number;
        num_tile_columns: number;
        num_tile_rows: number;
        num_tiles_in_pic: number;
        tile_col_bd_val: number[];
        tile_row_bd_val: number[];
        slice_top_left_tile_idx: number[];
        slice_top_left_ctu_x: number[];
        slice_top_left_ctu_y: number[];
        slice_height_in_ctus: number[];
        num_slices_in_subpic: number[];
        valid: boolean;
    }

    /**
     * Contains VvcPTLRecord data as defined in ISO/IEC 14496-15
     * @gir-type Struct
     * @since 1.26
     */
    class H266PTLRecord {
        static $gtype: GObject.GType<H266PTLRecord>;

        // Fields

        num_bytes_constraint_info: number;
        general_profile_idc: number;
        general_tier_flag: number;
        general_level_idc: number;
        ptl_frame_only_constraint_flag: number;
        ptl_multilayer_enabled_flag: number;
        general_constraint_info: Uint8Array;
        ptl_sublayer_level_present_flag: Uint8Array;
        sublayer_level_idc: Uint8Array;
        ptl_num_sub_profiles: number;
        general_sub_profile_idc: number[];

        // Constructors

        constructor(
            properties?: Partial<{
                num_bytes_constraint_info: number;
                general_profile_idc: number;
                general_tier_flag: number;
                general_level_idc: number;
                ptl_frame_only_constraint_flag: number;
                ptl_multilayer_enabled_flag: number;
                general_constraint_info: Uint8Array;
                ptl_sublayer_level_present_flag: Uint8Array;
                sublayer_level_idc: Uint8Array;
                ptl_num_sub_profiles: number;
                general_sub_profile_idc: number[];
            }>,
        );
    }

    /**
     * To identify Nals in a bitstream and parse its headers, you should call:
     *
     *   * `gst_h266_parser_identify_nalu()` to identify the following nalu in
     *        VVC bitstreams
     *
     * Then, depending on the {@link GstCodecParsers.H266NalUnitType} of the newly parsed {@link GstCodecParsers.H266NalUnit},
     * you should call the different functions to parse the structure:
     *
     *   * From #GST_H266_NAL_SLICE_TRAIL to #GST_H266_NAL_SLICE_GDR:
     *     `gst_h266_parser_parse_slice_hdr()`
     *
     *   * `GST_H266_NAL_*_SEI`: `gst_h266_parser_parse_sei()`
     *
     *   * #GST_H266_NAL_VPS: `gst_h266_parser_parse_vps()`
     *
     *   * #GST_H266_NAL_SPS: `gst_h266_parser_parse_sps()`
     *
     *   * #GST_H266_NAL_PPS: `gst_h266_parser_parse_pps`()
     *
     *   * Any other: `gst_h266_parser_parse_nal()`
     *
     * Note: You should always call `gst_h266_parser_parse_nal()` if you don't
     * actually need {@link GstCodecParsers.H266NalUnitType} to be parsed for your personal use, in
     * order to guarantee that the {@link GstCodecParsers.H266Parser} is always up to date.
     *
     * For more details about the structures, look at the ITU-T H.266
     * specifications, you can download them from:
     *
     *   * ITU-T H.266: http://www.itu.int/rec/T-REC-H.266
     * @gir-type Struct
     * @since 1.26
     */
    class H266Parser {
        static $gtype: GObject.GType<H266Parser>;

        // Methods

        /**
         * Frees the `parser`
         */
        free(): void;
        /**
         * Parses `data` for packetized (e.g., vvc1/vvi1) bitstream and
         * sets `nalus`. In addition to nal identifying process,
         * this method scans start-code prefix to split malformed packet into
         * actual nal chunks.
         * @param data The data to parse, must be the beging of the Nal unit
         * @param offset the offset from which to parse `data`
         * @param size the size of `data`
         * @param nal_length_size the size in bytes of the VVC nal length prefix.
         * @param nalus a caller allocated {@link GLib.Array} of {@link GstCodecParsers.H266NalUnit} where to store parsed nal headers
         * @param consumed the size of consumed bytes
         * @returns a {@link GstCodecParsers.H266ParserResult}
         */
        identify_and_split_nalu_vvc(
            data: number,
            offset: number,
            size: number,
            nal_length_size: number,
            nalus: H266NalUnit[],
            consumed: number,
        ): H266ParserResult;
        /**
         * Parses `data` and fills `nalu` from the next nalu data from `data`
         * @param data The data to parse
         * @param offset the offset from which to parse `data`
         * @param size the size of `data`
         * @param nalu The {@link GstCodecParsers.H266NalUnit} where to store parsed nal headers
         * @returns a {@link GstCodecParsers.H266ParserResult}
         */
        identify_nalu(data: number, offset: number, size: number, nalu: H266NalUnit): H266ParserResult;
        /**
         * Parses `data` and fills `nalu` from the next nalu data from `data`.
         *
         * This differs from `gst_h266_parser_identify_nalu` in that it doesn't
         * check whether the packet is complete or not.
         *
         * Note: Only use this function if you already know the provided `data`
         * is a complete NALU, else use `gst_h266_parser_identify_nalu`.
         * @param data The data to parse
         * @param offset the offset from which to parse `data`
         * @param size the size of `data`
         * @param nalu The {@link GstCodecParsers.H266NalUnit} where to store parsed nal headers
         * @returns a {@link GstCodecParsers.H266ParserResult}
         */
        identify_nalu_unchecked(data: number, offset: number, size: number, nalu: H266NalUnit): H266ParserResult;
        /**
         * Parses `data` and sets `nalu`.
         * @param data The data to parse, must be the beging of the Nal unit
         * @param offset the offset from which to parse `data`
         * @param size the size of `data`
         * @param nal_length_size the size in bytes of the VVC nal length prefix.
         * @param nalu The {@link GstCodecParsers.H266NalUnit} where to store parsed nal headers
         * @returns a {@link GstCodecParsers.H266ParserResult}
         */
        identify_nalu_vvc(
            data: number,
            offset: number,
            size: number,
            nal_length_size: number,
            nalu: H266NalUnit,
        ): H266ParserResult;
        /**
         * Parses `data`, and fills the `aps` structure.
         * @param nalu The APS {@link GstCodecParsers.H266NalUnit} to parse
         * @param aps The {@link GstCodecParsers.H266APS} to fill.
         * @returns a {@link GstCodecParsers.H266ParserResult}
         */
        parse_aps(nalu: H266NalUnit, aps: H266APS): H266ParserResult;
        /**
         * Parses `data`, and fills the `aud` structure.
         * @param nalu The AUD {@link GstCodecParsers.H266NalUnit} to parse
         * @param aud The {@link GstCodecParsers.H266AUD} to fill.
         * @returns a {@link GstCodecParsers.H266ParserResult}
         */
        parse_aud(nalu: H266NalUnit, aud: H266AUD): H266ParserResult;
        /**
         * Parses `data`, and fills the `dci` structure.
         * @param nalu The DCI {@link GstCodecParsers.H266NalUnit} to parse
         * @param dci The {@link GstCodecParsers.H266DCI} to fill.
         * @returns a {@link GstCodecParsers.H266ParserResult}
         */
        parse_dci(nalu: H266NalUnit, dci: H266DCI): H266ParserResult;
        /**
         * Parses VVCDecoderConfigurationRecord data and fill into `config`.
         * The caller must free `config` via `gst_h266_decoder_config_record_free()`
         *
         * This method does not parse APS, VPS, SPS and PPS and therefore the caller needs to
         * parse each NAL unit via appropriate parsing method.
         * @param data the data to parse
         * @param size the size of `data`
         * @returns a {@link GstCodecParsers.H266ParserResult}
         */
        parse_decoder_config_record(data: number, size: number): [H266ParserResult, H266DecoderConfigRecord];
        /**
         * This function should be called in the case one doesn't need to
         * parse a specific structure. It is necessary to do so to make
         * sure `parser` is up to date.
         * @param nalu The {@link GstCodecParsers.H266NalUnit} to parse
         * @returns a {@link GstCodecParsers.H266ParserResult}
         */
        parse_nal(nalu: H266NalUnit): H266ParserResult;
        /**
         * Parses `data`, and fills the `opi` structure.
         * @param nalu The OPI {@link GstCodecParsers.H266NalUnit} to parse
         * @param opi The {@link GstCodecParsers.H266OPI} to fill.
         * @returns a {@link GstCodecParsers.H266ParserResult}
         */
        parse_opi(nalu: H266NalUnit, opi: H266OPI): H266ParserResult;
        /**
         * Parses `data`, and fills the `ph` structure.
         * @param nalu The picture header {@link GstCodecParsers.H266NalUnit} to parse
         * @param picture The {@link GstCodecParsers.H266PicHdr} to fill.
         * @returns a {@link GstCodecParsers.H266ParserResult}
         */
        parse_picture_hdr(nalu: H266NalUnit, picture: H266PicHdr): H266ParserResult;
        /**
         * Parses `data`, and fills the `pps` structure.
         * @param nalu The #GST_H266_NAL_PPS {@link GstCodecParsers.H266NalUnit} to parse
         * @param pps The {@link GstCodecParsers.H266PPS} to fill.
         * @returns a {@link GstCodecParsers.H266ParserResult}
         */
        parse_pps(nalu: H266NalUnit, pps: H266PPS): H266ParserResult;
        /**
         * Parses `data`, create and fills the `messages` array.
         * @param nalu The `GST_H266_NAL_*_SEI` {@link GstCodecParsers.H266NalUnit} to parse
         * @param messages The GArray of {@link GstCodecParsers.H266SEIMessage} to fill. The caller must free  it when done.
         * @returns a {@link GstCodecParsers.H266ParserResult}
         */
        parse_sei(nalu: H266NalUnit, messages: H266SEIMessage[]): H266ParserResult;
        /**
         * Parses `data`, and fills the `sh` structure.
         * @param nalu The slice {@link GstCodecParsers.H266NalUnit} to parse
         * @param slice The {@link GstCodecParsers.H266SliceHdr} to fill.
         * @returns a {@link GstCodecParsers.H266ParserResult}
         */
        parse_slice_hdr(nalu: H266NalUnit, slice: H266SliceHdr): H266ParserResult;
        /**
         * Parses `data`, and fills the `sps` structure.
         * @param nalu The #GST_H266_NAL_SPS {@link GstCodecParsers.H266NalUnit} to parse
         * @param sps The {@link GstCodecParsers.H266SPS} to fill.
         * @returns a {@link GstCodecParsers.H266ParserResult}
         */
        parse_sps(nalu: H266NalUnit, sps: H266SPS): H266ParserResult;
        /**
         * Parses `data`, and fills the `vps` structure.
         * @param nalu The #GST_H266_NAL_VPS {@link GstCodecParsers.H266NalUnit} to parse
         * @param vps The {@link GstCodecParsers.H266VPS} to fill.
         * @returns a {@link GstCodecParsers.H266ParserResult}
         */
        parse_vps(nalu: H266NalUnit, vps: H266VPS): H266ParserResult;
    }

    /**
     * Structure defining the H266 picture header.
     * @gir-type Struct
     * @since 1.26
     */
    class H266PicHdr {
        static $gtype: GObject.GType<H266PicHdr>;

        // Fields

        gdr_or_irap_pic_flag: number;
        non_ref_pic_flag: number;
        gdr_pic_flag: number;
        inter_slice_allowed_flag: number;
        intra_slice_allowed_flag: number;
        pps_id: number;
        pic_order_cnt_lsb: number;
        recovery_poc_cnt: number;
        extra_bit: Uint8Array;
        poc_msb_cycle_present_flag: number;
        poc_msb_cycle_val: number;
        alf_enabled_flag: number;
        num_alf_aps_ids_luma: number;
        alf_aps_id_luma: Uint8Array;
        alf_cb_enabled_flag: number;
        alf_cr_enabled_flag: number;
        alf_aps_id_chroma: number;
        alf_cc_cb_enabled_flag: number;
        alf_cc_cb_aps_id: number;
        alf_cc_cr_enabled_flag: number;
        alf_cc_cr_aps_id: number;
        lmcs_enabled_flag: number;
        lmcs_aps_id: number;
        chroma_residual_scale_flag: number;
        explicit_scaling_list_enabled_flag: number;
        scaling_list_aps_id: number;
        virtual_boundaries_present_flag: number;
        num_ver_virtual_boundaries: number;
        virtual_boundary_pos_x_minus1: number[];
        num_hor_virtual_boundaries: number;
        virtual_boundary_pos_y_minus1: number[];
        pic_output_flag: number;
        ref_pic_lists: H266RefPicLists;
        partition_constraints_override_flag: number;
        log2_diff_min_qt_min_cb_intra_slice_luma: number;
        max_mtt_hierarchy_depth_intra_slice_luma: number;
        log2_diff_max_bt_min_qt_intra_slice_luma: number;
        log2_diff_max_tt_min_qt_intra_slice_luma: number;
        log2_diff_min_qt_min_cb_intra_slice_chroma: number;
        max_mtt_hierarchy_depth_intra_slice_chroma: number;
        log2_diff_max_bt_min_qt_intra_slice_chroma: number;
        log2_diff_max_tt_min_qt_intra_slice_chroma: number;
        cu_qp_delta_subdiv_intra_slice: number;
        cu_chroma_qp_offset_subdiv_intra_slice: number;
        log2_diff_min_qt_min_cb_inter_slice: number;
        max_mtt_hierarchy_depth_inter_slice: number;
        log2_diff_max_bt_min_qt_inter_slice: number;
        log2_diff_max_tt_min_qt_inter_slice: number;
        cu_qp_delta_subdiv_inter_slice: number;
        cu_chroma_qp_offset_subdiv_inter_slice: number;
        temporal_mvp_enabled_flag: number;
        collocated_from_l0_flag: number;
        collocated_ref_idx: number;
        mmvd_fullpel_only_flag: number;
        mvd_l1_zero_flag: number;
        bdof_disabled_flag: number;
        dmvr_disabled_flag: number;
        prof_disabled_flag: number;
        pred_weight_table: H266PredWeightTable;
        qp_delta: number;
        joint_cbcr_sign_flag: number;
        sao_luma_enabled_flag: number;
        sao_chroma_enabled_flag: number;
        deblocking_params_present_flag: number;
        deblocking_filter_disabled_flag: number;
        luma_beta_offset_div2: number;
        luma_tc_offset_div2: number;
        cb_beta_offset_div2: number;
        cb_tc_offset_div2: number;
        cr_beta_offset_div2: number;
        cr_tc_offset_div2: number;
        extension_length: number;
        extension_data_byte: Uint8Array;
        valid: boolean;
    }

    /**
     * Structure defining the H266 picture timing.
     * @gir-type Struct
     * @since 1.26
     */
    class H266PicTiming {
        static $gtype: GObject.GType<H266PicTiming>;

        // Fields

        cpb_removal_delay_minus: number;
        sublayer_delays_present_flag: Uint8Array;
        cpb_removal_delay_delta_enabled_flag: Uint8Array;
        cpb_removal_delay_delta_idx: Uint8Array;
        cpb_removal_delay_minus1: Uint8Array;
        dpb_output_delay: number;
        cpb_alt_timing_info_present_flag: number;
        nal_cpb_alt_initial_removal_delay_delta: Uint8Array;
        nal_cpb_alt_initial_removal_offset_delta: Uint8Array;
        nal_cpb_delay_offset: Uint8Array;
        nal_dpb_delay_offset: Uint8Array;
        vcl_cpb_alt_initial_removal_delay_delta: Uint8Array;
        vcl_cpb_alt_initial_removal_offset_delta: Uint8Array;
        vcl_cpb_delay_offset: Uint8Array;
        vcl_dpb_delay_offset: Uint8Array;
        dpb_output_du_delay: number;
        num_decoding_units_minus1: number;
        du_common_cpb_removal_delay_flag: number;
        du_common_cpb_removal_delay_increment_minus1: Uint8Array;
        num_nalus_in_du_minus1: number[];
        du_cpb_removal_delay_increment_minus1: Uint8Array;
        delay_for_concatenation_ensured_flag: number;
        display_elemental_periods_minus1: number;

        // Constructors

        constructor(
            properties?: Partial<{
                cpb_removal_delay_minus: number;
                sublayer_delays_present_flag: Uint8Array;
                cpb_removal_delay_delta_enabled_flag: Uint8Array;
                cpb_removal_delay_delta_idx: Uint8Array;
                cpb_removal_delay_minus1: Uint8Array;
                dpb_output_delay: number;
                cpb_alt_timing_info_present_flag: number;
                nal_cpb_alt_initial_removal_delay_delta: Uint8Array;
                nal_cpb_alt_initial_removal_offset_delta: Uint8Array;
                nal_cpb_delay_offset: Uint8Array;
                nal_dpb_delay_offset: Uint8Array;
                vcl_cpb_alt_initial_removal_delay_delta: Uint8Array;
                vcl_cpb_alt_initial_removal_offset_delta: Uint8Array;
                vcl_cpb_delay_offset: Uint8Array;
                vcl_dpb_delay_offset: Uint8Array;
                dpb_output_du_delay: number;
                num_decoding_units_minus1: number;
                du_common_cpb_removal_delay_flag: number;
                du_common_cpb_removal_delay_increment_minus1: Uint8Array;
                num_nalus_in_du_minus1: number[];
                du_cpb_removal_delay_increment_minus1: Uint8Array;
                delay_for_concatenation_ensured_flag: number;
                display_elemental_periods_minus1: number;
            }>,
        );
    }

    /**
     * Structure defining the H266 weight table parameters.
     * @gir-type Struct
     * @since 1.26
     */
    class H266PredWeightTable {
        static $gtype: GObject.GType<H266PredWeightTable>;

        // Fields

        luma_log2_weight_denom: number;
        delta_chroma_log2_weight_denom: number;
        num_l0_weights: number;
        luma_weight_l0_flag: Uint8Array;
        chroma_weight_l0_flag: Uint8Array;
        delta_luma_weight_l0: Uint8Array;
        luma_offset_l0: Uint8Array;
        delta_chroma_weight_l0: Uint8Array;
        delta_chroma_offset_l0: number[];
        num_l1_weights: number;
        luma_weight_l1_flag: Uint8Array;
        chroma_weight_l1_flag: Uint8Array;
        delta_luma_weight_l1: Uint8Array;
        luma_offset_l1: Uint8Array;
        delta_chroma_weight_l1: Uint8Array;
        delta_chroma_offset_l1: number[];

        // Constructors

        constructor(
            properties?: Partial<{
                luma_log2_weight_denom: number;
                delta_chroma_log2_weight_denom: number;
                num_l0_weights: number;
                luma_weight_l0_flag: Uint8Array;
                chroma_weight_l0_flag: Uint8Array;
                delta_luma_weight_l0: Uint8Array;
                luma_offset_l0: Uint8Array;
                delta_chroma_weight_l0: Uint8Array;
                delta_chroma_offset_l0: number[];
                num_l1_weights: number;
                luma_weight_l1_flag: Uint8Array;
                chroma_weight_l1_flag: Uint8Array;
                delta_luma_weight_l1: Uint8Array;
                luma_offset_l1: Uint8Array;
                delta_chroma_weight_l1: Uint8Array;
                delta_chroma_offset_l1: number[];
            }>,
        );
    }

    /**
     * Structure defining the H266 profile, tier and level.
     * @gir-type Struct
     * @since 1.26
     */
    class H266ProfileTierLevel {
        static $gtype: GObject.GType<H266ProfileTierLevel>;

        // Fields

        profile_idc: H266Profile;
        tier_flag: number;
        level_idc: number;
        frame_only_constraint_flag: number;
        multilayer_enabled_flag: number;
        general_constraints_info: H266GeneralConstraintsInfo;
        sublayer_level_present_flag: Uint8Array;
        sublayer_level_idc: Uint8Array;
        num_sub_profiles: number;
        sub_profile_idc: H266Profile[];
        ptl_reserved_zero_bit: number;
    }

    /**
     * Structure defining the H266 reference picture list.
     * @gir-type Struct
     * @since 1.26
     */
    class H266RefPicListStruct {
        static $gtype: GObject.GType<H266RefPicListStruct>;

        // Fields

        num_ref_entries: number;
        ltrp_in_header_flag: number;
        inter_layer_ref_pic_flag: Uint8Array;
        st_ref_pic_flag: Uint8Array;
        abs_delta_poc_st: number[];
        strp_entry_sign_flag: Uint8Array;
        rpls_poc_lsb_lt: Uint8Array;
        ilrp_idx: Uint8Array;
        num_short_term_pic: number;
        num_long_term_pic: number;
        num_inter_layer_pic: number;
        delta_poc_val_st: number[];

        // Constructors

        constructor(
            properties?: Partial<{
                num_ref_entries: number;
                ltrp_in_header_flag: number;
                inter_layer_ref_pic_flag: Uint8Array;
                st_ref_pic_flag: Uint8Array;
                abs_delta_poc_st: number[];
                strp_entry_sign_flag: Uint8Array;
                rpls_poc_lsb_lt: Uint8Array;
                ilrp_idx: Uint8Array;
                num_short_term_pic: number;
                num_long_term_pic: number;
                num_inter_layer_pic: number;
                delta_poc_val_st: number[];
            }>,
        );
    }

    /**
     * Structure defining the H266 reference picture lists.
     * @gir-type Struct
     * @since 1.26
     */
    class H266RefPicLists {
        static $gtype: GObject.GType<H266RefPicLists>;

        // Fields

        rpl_sps_flag: Uint8Array;
        rpl_idx: Uint8Array;
        rpl_ref_list: H266RefPicListStruct[];
        poc_lsb_lt: number[];
        delta_poc_msb_cycle_present_flag: Uint8Array;
        delta_poc_msb_cycle_lt: number[];

        // Constructors

        constructor(
            properties?: Partial<{
                rpl_sps_flag: Uint8Array;
                rpl_idx: Uint8Array;
                rpl_ref_list: H266RefPicListStruct[];
                poc_lsb_lt: number[];
                delta_poc_msb_cycle_present_flag: Uint8Array;
                delta_poc_msb_cycle_lt: number[];
            }>,
        );
    }

    /**
     * The User data registered by Rec. ITU-T T.35 SEI message.
     * @gir-type Struct
     * @since 1.28
     */
    class H266RegisteredUserData {
        static $gtype: GObject.GType<H266RegisteredUserData>;

        // Fields

        country_code: number;
        country_code_extension: number;
        size: number;
        data: number;

        // Constructors

        constructor(
            properties?: Partial<{
                country_code: number;
                country_code_extension: number;
                size: number;
                data: number;
            }>,
        );
    }

    /**
     * Structure defining the H266 sei message.
     * @gir-type Struct
     * @since 1.26
     */
    class H266SEIMessage {
        static $gtype: GObject.GType<H266SEIMessage>;

        // Fields

        payloadType: H266SEIPayloadType;
    }

    /**
     * Structure defining the H266 SPS.
     * @gir-type Struct
     * @since 1.26
     */
    class H266SPS {
        static $gtype: GObject.GType<H266SPS>;

        // Fields

        nuh_layer_id: number;
        sps_id: number;
        vps_id: number;
        max_sublayers_minus1: number;
        chroma_format_idc: number;
        log2_ctu_size_minus5: number;
        ctu_size: number;
        ptl_dpb_hrd_params_present_flag: number;
        dpb: H266DPBParameters;
        general_hrd_params: H266GeneralHRDParameters;
        ols_hrd_params: H266OLSHRDParameters;
        gdr_enabled_flag: number;
        res_change_in_clvs_allowed_flag: number;
        ref_pic_resampling_enabled_flag: number;
        pic_width_max_in_luma_samples: number;
        pic_height_max_in_luma_samples: number;
        conformance_window_flag: number;
        conf_win_left_offset: number;
        conf_win_right_offset: number;
        conf_win_top_offset: number;
        conf_win_bottom_offset: number;
        subpic_info_present_flag: number;
        num_subpics_minus1: number;
        independent_subpics_flag: number;
        subpic_same_size_flag: number;
        subpic_ctu_top_left_x: number[];
        subpic_ctu_top_left_y: number[];
        subpic_width_minus1: number[];
        subpic_height_minus1: number[];
        subpic_treated_as_pic_flag: Uint8Array;
        loop_filter_across_subpic_enabled_flag: Uint8Array;
        subpic_id: number[];
        subpic_id_len_minus1: number;
        subpic_id_mapping_explicitly_signalled_flag: number;
        subpic_id_mapping_present_flag: number;
        bitdepth_minus8: number;
        entropy_coding_sync_enabled_flag: number;
        entry_point_offsets_present_flag: number;
        log2_max_pic_order_cnt_lsb_minus4: number;
        poc_msb_cycle_flag: number;
        poc_msb_cycle_len_minus1: number;
        num_extra_ph_bytes: number;
        extra_ph_bit_present_flag: Uint8Array;
        num_extra_sh_bytes: number;
        extra_sh_bit_present_flag: Uint8Array;
        sublayer_dpb_params_flag: number;
        log2_min_luma_coding_block_size_minus2: number;
        partition_constraints_override_enabled_flag: number;
        log2_diff_min_qt_min_cb_intra_slice_luma: number;
        max_mtt_hierarchy_depth_intra_slice_luma: number;
        log2_diff_max_bt_min_qt_intra_slice_luma: number;
        log2_diff_max_tt_min_qt_intra_slice_luma: number;
        qtbtt_dual_tree_intra_flag: number;
        log2_diff_min_qt_min_cb_intra_slice_chroma: number;
        max_mtt_hierarchy_depth_intra_slice_chroma: number;
        log2_diff_max_bt_min_qt_intra_slice_chroma: number;
        log2_diff_max_tt_min_qt_intra_slice_chroma: number;
        log2_diff_min_qt_min_cb_inter_slice: number;
        max_mtt_hierarchy_depth_inter_slice: number;
        log2_diff_max_bt_min_qt_inter_slice: number;
        log2_diff_max_tt_min_qt_inter_slice: number;
        max_luma_transform_size_64_flag: number;
        transform_skip_enabled_flag: number;
        log2_transform_skip_max_size_minus2: number;
        bdpcm_enabled_flag: number;
        mts_enabled_flag: number;
        explicit_mts_intra_enabled_flag: number;
        explicit_mts_inter_enabled_flag: number;
        lfnst_enabled_flag: number;
        joint_cbcr_enabled_flag: number;
        same_qp_table_for_chroma_flag: number;
        qp_table_start_minus26: Uint8Array;
        num_points_in_qp_table_minus1: Uint8Array;
        delta_qp_in_val_minus1: Uint8Array;
        delta_qp_diff_val: Uint8Array;
        sao_enabled_flag: number;
        alf_enabled_flag: number;
        ccalf_enabled_flag: number;
        lmcs_enabled_flag: number;
        weighted_pred_flag: number;
        weighted_bipred_flag: number;
        long_term_ref_pics_flag: number;
        inter_layer_prediction_enabled_flag: number;
        idr_rpl_present_flag: number;
        rpl1_same_as_rpl0_flag: number;
        num_ref_pic_lists: Uint8Array;
        ref_pic_list_struct: H266RefPicListStruct[];
        ref_wraparound_enabled_flag: number;
        temporal_mvp_enabled_flag: number;
        sbtmvp_enabled_flag: number;
        amvr_enabled_flag: number;
        bdof_enabled_flag: number;
        bdof_control_present_in_ph_flag: number;
        smvd_enabled_flag: number;
        dmvr_enabled_flag: number;
        dmvr_control_present_in_ph_flag: number;
        mmvd_enabled_flag: number;
        mmvd_fullpel_only_enabled_flag: number;
        six_minus_max_num_merge_cand: number;
        sbt_enabled_flag: number;
        affine_enabled_flag: number;
        five_minus_max_num_subblock_merge_cand: number;
        sps_6param_affine_enabled_flag: number;
        affine_amvr_enabled_flag: number;
        affine_prof_enabled_flag: number;
        prof_control_present_in_ph_flag: number;
        bcw_enabled_flag: number;
        ciip_enabled_flag: number;
        gpm_enabled_flag: number;
        max_num_merge_cand_minus_max_num_gpm_cand: number;
        log2_parallel_merge_level_minus2: number;
        isp_enabled_flag: number;
        mrl_enabled_flag: number;
        mip_enabled_flag: number;
        cclm_enabled_flag: number;
        chroma_horizontal_collocated_flag: number;
        chroma_vertical_collocated_flag: number;
        palette_enabled_flag: number;
        act_enabled_flag: number;
        min_qp_prime_ts: number;
        ibc_enabled_flag: number;
        six_minus_max_num_ibc_merge_cand: number;
        ladf_enabled_flag: number;
        num_ladf_intervals_minus2: number;
        ladf_lowest_interval_qp_offset: number;
        ladf_qp_offset: Uint8Array;
        ladf_delta_threshold_minus1: number[];
        explicit_scaling_list_enabled_flag: number;
        scaling_matrix_for_lfnst_disabled_flag: number;
        scaling_matrix_for_alternative_colour_space_disabled_flag: number;
        scaling_matrix_designated_colour_space_flag: number;
        dep_quant_enabled_flag: number;
        sign_data_hiding_enabled_flag: number;
        virtual_boundaries_enabled_flag: number;
        virtual_boundaries_present_flag: number;
        num_ver_virtual_boundaries: number;
        virtual_boundary_pos_x_minus1: number[];
        num_hor_virtual_boundaries: number;
        virtual_boundary_pos_y_minus1: number[];
        timing_hrd_params_present_flag: number;
        sublayer_cpb_params_present_flag: number;
        field_seq_flag: number;
        vui_parameters_present_flag: number;
        vui_payload_size_minus1: number;
        vui_params: H266VUIParams;
        extension_flag: number;
        range_extension_flag: number;
        extension_7_flags: Uint8Array;
        range_params: H266SPSRangeExtensionParams;
        max_width: number;
        max_height: number;
        crop_rect_width: number;
        crop_rect_height: number;
        crop_rect_x: number;
        crop_rect_y: number;
        fps_num: number;
        fps_den: number;
        chroma_qp_table: number[];
        valid: boolean;
    }

    /**
     * Structure defining the H266 SPS range extension parameters.
     * @gir-type Struct
     * @since 1.26
     */
    class H266SPSRangeExtensionParams {
        static $gtype: GObject.GType<H266SPSRangeExtensionParams>;

        // Fields

        extended_precision_flag: number;
        ts_residual_coding_rice_present_in_sh_flag: number;
        rrc_rice_extension_flag: number;
        persistent_rice_adaptation_enabled_flag: number;
        reverse_last_sig_coeff_enabled_flag: number;

        // Constructors

        constructor(
            properties?: Partial<{
                extended_precision_flag: number;
                ts_residual_coding_rice_present_in_sh_flag: number;
                rrc_rice_extension_flag: number;
                persistent_rice_adaptation_enabled_flag: number;
                reverse_last_sig_coeff_enabled_flag: number;
            }>,
        );
    }

    /**
     * Structure defining the H266 scalable nesting.
     * @gir-type Struct
     * @since 1.26
     */
    class H266ScalableNesting {
        static $gtype: GObject.GType<H266ScalableNesting>;

        // Fields

        ols_flag: number;
        subpic_flag: number;
        num_olss_minus1: number;
        ols_idx_delta_minus1: Uint8Array;
        all_layers_flag: number;
        num_layers_minus1: number;
        layer_id: Uint8Array;
        num_subpics_minus1: number;
        subpic_id_len_minus1: number;
        subpic_id: Uint8Array;
        num_seis_minus1: number;

        // Constructors

        constructor(
            properties?: Partial<{
                ols_flag: number;
                subpic_flag: number;
                num_olss_minus1: number;
                ols_idx_delta_minus1: Uint8Array;
                all_layers_flag: number;
                num_layers_minus1: number;
                layer_id: Uint8Array;
                num_subpics_minus1: number;
                subpic_id_len_minus1: number;
                subpic_id: Uint8Array;
                num_seis_minus1: number;
            }>,
        );
    }

    /**
     * Structure defining the H266 scaling list parameters.
     * @gir-type Struct
     * @since 1.26
     */
    class H266ScalingList {
        static $gtype: GObject.GType<H266ScalingList>;

        // Fields

        copy_mode_flag: Uint8Array;
        pred_mode_flag: Uint8Array;
        pred_id_delta: Uint8Array;
        dc_coef: Uint8Array;
        delta_coef: Uint8Array;
        scaling_list_DC: Uint8Array;
        scaling_list: Uint8Array;

        // Constructors

        constructor(
            properties?: Partial<{
                copy_mode_flag: Uint8Array;
                pred_mode_flag: Uint8Array;
                pred_id_delta: Uint8Array;
                dc_coef: Uint8Array;
                delta_coef: Uint8Array;
                scaling_list_DC: Uint8Array;
                scaling_list: Uint8Array;
            }>,
        );
    }

    /**
     * Structure defining the H266 slice header.
     * @gir-type Struct
     * @since 1.26
     */
    class H266SliceHdr {
        static $gtype: GObject.GType<H266SliceHdr>;

        // Fields

        picture_header_in_slice_header_flag: number;
        subpic_id: number;
        slice_address: number;
        extra_bit: Uint8Array;
        num_tiles_in_slice_minus1: number;
        slice_type: number;
        no_output_of_prior_pics_flag: number;
        alf_enabled_flag: number;
        num_alf_aps_ids_luma: number;
        alf_aps_id_luma: Uint8Array;
        alf_cb_enabled_flag: number;
        alf_cr_enabled_flag: number;
        alf_aps_id_chroma: number;
        alf_cc_cb_enabled_flag: number;
        alf_cc_cb_aps_id: number;
        alf_cc_cr_enabled_flag: number;
        alf_cc_cr_aps_id: number;
        lmcs_used_flag: number;
        explicit_scaling_list_used_flag: number;
        ref_pic_lists: H266RefPicLists;
        num_ref_idx_active_override_flag: number;
        num_ref_idx_active_minus1: Uint8Array;
        num_ref_idx_active: Uint8Array;
        cabac_init_flag: number;
        collocated_from_l0_flag: number;
        collocated_ref_idx: number;
        pred_weight_table: H266PredWeightTable;
        slice_qp_y: number;
        qp_delta: number;
        cb_qp_offset: number;
        cr_qp_offset: number;
        joint_cbcr_qp_offset: number;
        cu_chroma_qp_offset_enabled_flag: number;
        sao_luma_used_flag: number;
        sao_chroma_used_flag: number;
        deblocking_params_present_flag: number;
        deblocking_filter_disabled_flag: number;
        luma_beta_offset_div2: number;
        luma_tc_offset_div2: number;
        cb_beta_offset_div2: number;
        cb_tc_offset_div2: number;
        cr_beta_offset_div2: number;
        cr_tc_offset_div2: number;
        dep_quant_used_flag: number;
        sign_data_hiding_used_flag: number;
        ts_residual_coding_disabled_flag: number;
        ts_residual_coding_rice_idx_minus1: number;
        reverse_last_sig_coeff_flag: number;
        slice_header_extension_length: number;
        slice_header_extension_data_byte: Uint8Array;
        num_entry_points: number;
        entry_point_start_ctu: number[];
        entry_offset_len_minus1: number;
        entry_point_offset_minus1: number[];
        header_size: number;
        n_emulation_prevention_bytes: number;
    }

    /**
     * Structure defining the H266 sub layer HDR parameters.
     * @gir-type Struct
     * @since 1.26
     */
    class H266SubLayerHRDParameters {
        static $gtype: GObject.GType<H266SubLayerHRDParameters>;

        // Fields

        bit_rate_value_minus1: number[];
        cpb_size_value_minus1: number[];
        cpb_size_du_value_minus1: number[];
        bit_rate_du_value_minus1: number[];
        cbr_flag: Uint8Array;
        bit_rate: number[];
        cpb_size: number[];

        // Constructors

        constructor(
            properties?: Partial<{
                bit_rate_value_minus1: number[];
                cpb_size_value_minus1: number[];
                cpb_size_du_value_minus1: number[];
                bit_rate_du_value_minus1: number[];
                cbr_flag: Uint8Array;
                bit_rate: number[];
                cpb_size: number[];
            }>,
        );
    }

    /**
     * Structure defining the H266 subpicture level information.
     * @gir-type Struct
     * @since 1.26
     */
    class H266SubPicLevelInfo {
        static $gtype: GObject.GType<H266SubPicLevelInfo>;

        // Fields

        num_ref_levels_minus1: number;
        cbr_constraint_flag: number;
        explicit_fraction_present_flag: number;
        num_subpics_minus1: number;
        max_sublayers_minus1: number;
        sublayer_info_present_flag: number;
        non_subpic_layers_fraction: Uint8Array;
        ref_level_idc: Uint8Array;
        ref_level_fraction_minus1: Uint8Array;

        // Constructors

        constructor(
            properties?: Partial<{
                num_ref_levels_minus1: number;
                cbr_constraint_flag: number;
                explicit_fraction_present_flag: number;
                num_subpics_minus1: number;
                max_sublayers_minus1: number;
                sublayer_info_present_flag: number;
                non_subpic_layers_fraction: Uint8Array;
                ref_level_idc: Uint8Array;
                ref_level_fraction_minus1: Uint8Array;
            }>,
        );
    }

    /**
     * Structure defining the H266 VPS.
     * @gir-type Struct
     * @since 1.26
     */
    class H266VPS {
        static $gtype: GObject.GType<H266VPS>;

        // Fields

        vps_id: number;
        max_layers_minus1: number;
        max_sublayers_minus1: number;
        default_ptl_dpb_hrd_max_tid_flag: number;
        all_independent_layers_flag: number;
        layer_id: Uint8Array;
        independent_layer_flag: Uint8Array;
        max_tid_ref_present_flag: Uint8Array;
        direct_ref_layer_flag: Uint8Array;
        max_tid_il_ref_pics_plus1: Uint8Array;
        each_layer_is_an_ols_flag: number;
        ols_mode_idc: number;
        total_num_olss: number;
        num_multi_layer_olss: number;
        multi_layer_ols_idx: number[];
        num_layers_in_ols: number[];
        layer_id_in_ols: Uint8Array;
        num_output_layer_sets_minus2: number;
        ols_output_layer_flag: Uint8Array;
        num_output_layers_in_ols: number[];
        output_layer_id_in_ols: Uint8Array;
        num_sub_layers_in_layer_in_ols: Uint8Array;
        num_ptls_minus1: number;
        pt_present_flag: Uint8Array;
        ptl_max_tid: Uint8Array;
        ols_ptl_idx: Uint8Array;
        num_dpb_params_minus1: number;
        sublayer_dpb_params_present_flag: number;
        dpb_max_tid: Uint8Array;
        dpb: H266DPBParameters[];
        ols_dpb_pic_width: number[];
        ols_dpb_pic_height: number[];
        ols_dpb_chroma_format: Uint8Array;
        ols_dpb_bitdepth_minus8: Uint8Array;
        ols_dpb_params_idx: Uint8Array;
        timing_hrd_params_present_flag: number;
        general_hrd_params: H266GeneralHRDParameters;
        sublayer_cpb_params_present_flag: number;
        num_ols_timing_hrd_params_minus1: number;
        hrd_max_tid: Uint8Array;
        ols_hrd_params: H266OLSHRDParameters[];
        ols_timing_hrd_idx: Uint8Array;
        extension_flag: number;
        extension_data: Uint8Array;
        valid: boolean;
    }

    /**
     * Structure defining the H266 VUI parameters.
     * @gir-type Struct
     * @since 1.26
     */
    class H266VUIParams {
        static $gtype: GObject.GType<H266VUIParams>;

        // Fields

        progressive_source_flag: number;
        interlaced_source_flag: number;
        non_packed_constraint_flag: number;
        non_projected_constraint_flag: number;
        aspect_ratio_info_present_flag: number;
        aspect_ratio_constant_flag: number;
        aspect_ratio_idc: number;
        sar_width: number;
        sar_height: number;
        overscan_info_present_flag: number;
        overscan_appropriate_flag: number;
        colour_description_present_flag: number;
        colour_primaries: number;
        transfer_characteristics: number;
        matrix_coeffs: number;
        full_range_flag: number;
        chroma_loc_info_present_flag: number;
        chroma_sample_loc_type_frame: number;
        chroma_sample_loc_type_top_field: number;
        chroma_sample_loc_type_bottom_field: number;
        par_n: number;
        par_d: number;

        // Constructors

        constructor(
            properties?: Partial<{
                progressive_source_flag: number;
                interlaced_source_flag: number;
                non_packed_constraint_flag: number;
                non_projected_constraint_flag: number;
                aspect_ratio_info_present_flag: number;
                aspect_ratio_constant_flag: number;
                aspect_ratio_idc: number;
                sar_width: number;
                sar_height: number;
                overscan_info_present_flag: number;
                overscan_appropriate_flag: number;
                colour_description_present_flag: number;
                colour_primaries: number;
                transfer_characteristics: number;
                matrix_coeffs: number;
                full_range_flag: number;
                chroma_loc_info_present_flag: number;
                chroma_sample_loc_type_frame: number;
                chroma_sample_loc_type_top_field: number;
                chroma_sample_loc_type_bottom_field: number;
                par_n: number;
                par_d: number;
            }>,
        );
    }

    /**
     * Component-specification parameters.
     * @gir-type Struct
     * @since 1.6
     */
    class JpegFrameComponent {
        static $gtype: GObject.GType<JpegFrameComponent>;

        // Fields

        identifier: number;
        horizontal_factor: number;
        vertical_factor: number;
        quant_table_selector: number;

        // Constructors

        constructor(
            properties?: Partial<{
                identifier: number;
                horizontal_factor: number;
                vertical_factor: number;
                quant_table_selector: number;
            }>,
        );
    }

    /**
     * Frame header.
     * @gir-type Struct
     * @since 1.6
     */
    class JpegFrameHdr {
        static $gtype: GObject.GType<JpegFrameHdr>;

        // Fields

        sample_precision: number;
        width: number;
        height: number;
        num_components: number;
        components: JpegFrameComponent[];

        // Constructors

        constructor(
            properties?: Partial<{
                sample_precision: number;
                width: number;
                height: number;
                num_components: number;
                components: JpegFrameComponent[];
            }>,
        );
    }

    /**
     * Huffman table.
     * @gir-type Struct
     * @since 1.6
     */
    class JpegHuffmanTable {
        static $gtype: GObject.GType<JpegHuffmanTable>;

        // Fields

        huf_bits: Uint8Array;
        huf_values: Uint8Array;
        valid: boolean;

        // Constructors

        constructor(
            properties?: Partial<{
                huf_bits: Uint8Array;
                huf_values: Uint8Array;
                valid: boolean;
            }>,
        );
    }

    /**
     * Helper data structure that holds all AC/DC Huffman tables used to
     * decode an image.
     * @gir-type Struct
     * @since 1.6
     */
    class JpegHuffmanTables {
        static $gtype: GObject.GType<JpegHuffmanTables>;

        // Fields

        dc_tables: JpegHuffmanTable[];
        ac_tables: JpegHuffmanTable[];

        // Constructors

        constructor(
            properties?: Partial<{
                dc_tables: JpegHuffmanTable[];
                ac_tables: JpegHuffmanTable[];
            }>,
        );
    }

    /**
     * Quantization table.
     * @gir-type Struct
     * @since 1.6
     */
    class JpegQuantTable {
        static $gtype: GObject.GType<JpegQuantTable>;

        // Fields

        quant_precision: number;
        quant_table: number[];
        valid: boolean;

        // Constructors

        constructor(
            properties?: Partial<{
                quant_precision: number;
                quant_table: number[];
                valid: boolean;
            }>,
        );
    }

    /**
     * Helper data structure that holds all quantization tables used to
     * decode an image.
     * @gir-type Struct
     * @since 1.6
     */
    class JpegQuantTables {
        static $gtype: GObject.GType<JpegQuantTables>;

        // Fields

        quant_tables: JpegQuantTable[];

        // Constructors

        constructor(
            properties?: Partial<{
                quant_tables: JpegQuantTable[];
            }>,
        );
    }

    /**
     * Component-specification parameters.
     * @gir-type Struct
     * @since 1.6
     */
    class JpegScanComponent {
        static $gtype: GObject.GType<JpegScanComponent>;

        // Fields

        component_selector: number;
        dc_selector: number;
        ac_selector: number;

        // Constructors

        constructor(
            properties?: Partial<{
                component_selector: number;
                dc_selector: number;
                ac_selector: number;
            }>,
        );
    }

    /**
     * Scan header.
     * @gir-type Struct
     * @since 1.6
     */
    class JpegScanHdr {
        static $gtype: GObject.GType<JpegScanHdr>;

        // Fields

        num_components: number;
        components: JpegScanComponent[];

        // Constructors

        constructor(
            properties?: Partial<{
                num_components: number;
                components: JpegScanComponent[];
            }>,
        );
    }

    /**
     * A structure that contains the type of a segment, its offset and its size.
     * @gir-type Struct
     * @since 1.6
     */
    class JpegSegment {
        static $gtype: GObject.GType<JpegSegment>;

        // Fields

        marker: JpegMarker;
        data: number;
        offset: number;
        size: number;

        // Methods

        /**
         * Parses the `frame_hdr` JPEG frame header structure members from `segment`.
         *
         * The caller must make sure there is enough data for the whole segment
         * available.
         * @returns TRUE if the frame header was correctly parsed.
         */
        parse_frame_header(): [boolean, JpegFrameHdr];
        /**
         * Parses the JPEG Huffman table structure members from `segment`.
         *
         * The caller must make sure there is enough data for the whole segment
         * available.
         *
         * Note: `huf_tables` represents the complete set of possible Huffman
         * tables. However, the parser will only write to the Huffman table
         * specified by the table destination identifier (Th). While doing so,
         * the `valid` flag of the specified Huffman table will also be set to
         * `true`;
         * @returns TRUE if the Huffman table was correctly parsed.
         */
        parse_huffman_table(): [boolean, JpegHuffmanTables];
        /**
         * Parses the JPEG quantization table structure members from `segment`.
         *
         * The caller must make sure there is enough data for the whole segment
         * available.
         *
         * Note: `quant_tables` represents the complete set of possible
         * quantization tables. However, the parser will only write to the
         * quantization table specified by the table destination identifier
         * (Tq). While doing so, the `valid` flag of the specified quantization
         * table will also be set to `true`.
         * @returns TRUE if the quantization table was correctly parsed.
         */
        parse_quantization_table(): [boolean, JpegQuantTables];
        /**
         * The caller must make sure there is enough data for the whole segment
         * available.
         * @returns TRUE if the restart interval value was correctly parsed.
         */
        parse_restart_interval(): [boolean, number];
        /**
         * Parses the `scan_hdr` JPEG scan header structure members from `segment`.
         *
         * The caller must make sure there is enough data for the whole segment
         * available.
         * @returns TRUE if the scan header was correctly parsed
         */
        parse_scan_header(): [boolean, JpegScanHdr];
    }

    /**
     * LCEVC data for LCEVC codecs
     * @gir-type Struct
     * @since 1.26
     */
    class LcevcMeta {
        static $gtype: GObject.GType<LcevcMeta>;

        // Fields

        id: number;

        // Static methods

        /**
         * Gets the {@link Gst.MetaInfo} of the LCEVC meta.
         */
        static get_info(): Gst.MetaInfo;
    }

    /**
     * The group of video object plane structure as defined in:
     * 6.2.4 Group of Video Object Plane
     * @gir-type Struct
     */
    class Mpeg4GroupOfVOP {
        static $gtype: GObject.GType<Mpeg4GroupOfVOP>;

        // Fields

        hours: number;
        minutes: number;
        seconds: number;
        closed: number;
        broken_link: number;

        // Constructors

        constructor(
            properties?: Partial<{
                hours: number;
                minutes: number;
                seconds: number;
                closed: number;
                broken_link: number;
            }>,
        );
    }

    /**
     * A structure that contains the type of a packet, its offset and its size
     * @gir-type Struct
     */
    class Mpeg4Packet {
        static $gtype: GObject.GType<Mpeg4Packet>;

        // Fields

        data: number;
        offset: number;
        size: number;
        marker_size: number;
        type: Mpeg4StartCode;
    }

    /**
     * The sprite trajectory structure as defined in:
     * 7.8.4 Sprite reference point decoding and
     * 6.2.5.4 Sprite coding
     * @gir-type Struct
     */
    class Mpeg4SpriteTrajectory {
        static $gtype: GObject.GType<Mpeg4SpriteTrajectory>;

        // Fields

        vop_ref_points: number[];
        sprite_ref_points: number[];

        // Constructors

        constructor(
            properties?: Partial<{
                vop_ref_points: number[];
                sprite_ref_points: number[];
            }>,
        );
    }

    /**
     * The video object layer structure as defined in:
     * 6.2.3 Video Object Layer
     * @gir-type Struct
     */
    class Mpeg4VideoObjectLayer {
        static $gtype: GObject.GType<Mpeg4VideoObjectLayer>;

        // Fields

        random_accessible_vol: number;
        video_object_type_indication: number;
        is_object_layer_identifier: number;
        verid: number;
        priority: number;
        aspect_ratio_info: Mpeg4AspectRatioInfo;
        par_width: number;
        par_height: number;
        control_parameters: number;
        chroma_format: Mpeg4ChromaFormat;
        low_delay: number;
        vbv_parameters: number;
        first_half_bitrate: number;
        latter_half_bitrate: number;
        first_half_vbv_buffer_size: number;
        latter_half_vbv_buffer_size: number;
        first_half_vbv_occupancy: number;
        latter_half_vbv_occupancy: number;
        bit_rate: number;
        vbv_buffer_size: number;
        shape: Mpeg4VideoObjectLayerShape;
        shape_extension: number;
        vop_time_increment_resolution: number;
        vop_time_increment_bits: number;
        fixed_vop_rate: number;
        fixed_vop_time_increment: number;
        width: number;
        height: number;
        interlaced: number;
        obmc_disable: number;
        sprite_enable: Mpeg4SpriteEnable;
        sprite_width: number;
        sprite_height: number;
        sprite_left_coordinate: number;
        sprite_top_coordinate: number;
        no_of_sprite_warping_points: number;
        sprite_warping_accuracy: number;
        sprite_brightness_change: number;
        low_latency_sprite_enable: number;
        sadct_disable: number;
        not_8_bit: number;
        quant_precision: number;
        bits_per_pixel: number;
        no_gray_quant_update: number;
        composition_method: number;
        linear_composition: number;
        quant_type: number;
        load_intra_quant_mat: number;
        intra_quant_mat: Uint8Array;
        load_non_intra_quant_mat: number;
        non_intra_quant_mat: Uint8Array;
        quarter_sample: number;
        complexity_estimation_disable: number;
        resync_marker_disable: number;
        data_partitioned: number;
        reversible_vlc: number;
        newpred_enable: number;
        reduced_resolution_vop_enable: number;
        scalability: number;
        enhancement_type: number;
        short_hdr: Mpeg4VideoPlaneShortHdr;
    }

    /**
     * The Video object plane structure as defined in:
     * 6.2.5 Video Object Plane and Video Plane with Short Header
     * @gir-type Struct
     */
    class Mpeg4VideoObjectPlane {
        static $gtype: GObject.GType<Mpeg4VideoObjectPlane>;

        // Fields

        coding_type: Mpeg4VideoObjectCodingType;
        modulo_time_base: number;
        time_increment: number;
        coded: number;
        id: number;
        id_for_prediction_indication: number;
        id_for_prediction: number;
        width: number;
        height: number;
        horizontal_mc_spatial_ref: number;
        vertical_mc_spatial_ref: number;
        rounding_type: number;
        background_composition: number;
        change_conv_ratio_disable: number;
        constant_alpha: number;
        constant_alpha_value: number;
        reduced_resolution: number;
        intra_dc_vlc_thr: number;
        top_field_first: number;
        alternate_vertical_scan_flag: number;
        quant: number;
        fcode_forward: number;
        fcode_backward: number;
        shape_coding_type: number;
        load_backward_shape: number;
        ref_select_code: number;
        mb_height: number;
        mb_width: number;
        mb_num: number;
        size: number;
    }

    /**
     * The video packet header structure as defined in:
     * 6.2.5.2 Video Plane with Short Header
     * @gir-type Struct
     */
    class Mpeg4VideoPacketHdr {
        static $gtype: GObject.GType<Mpeg4VideoPacketHdr>;

        // Fields

        header_extension_code: number;
        macroblock_number: number;
        quant_scale: number;
        size: number;

        // Constructors

        constructor(
            properties?: Partial<{
                header_extension_code: number;
                macroblock_number: number;
                quant_scale: number;
                size: number;
            }>,
        );
    }

    /**
     * The video plane short header structure as defined in:
     * 6.2.5.2 Video Plane with Short Header
     * @gir-type Struct
     */
    class Mpeg4VideoPlaneShortHdr {
        static $gtype: GObject.GType<Mpeg4VideoPlaneShortHdr>;

        // Fields

        temporal_reference: number;
        split_screen_indicator: number;
        document_camera_indicator: number;
        full_picture_freeze_release: number;
        source_format: number;
        picture_coding_type: number;
        vop_quant: number;
        pei: number;
        psupp: number;
        gob_header_empty: number;
        gob_number: number;
        gob_frame_id: number;
        quant_scale: number;
        vop_width: number;
        vop_height: number;
        num_macroblocks_in_gob: number;
        num_gobs_in_vop: number;
        size: number;

        // Constructors

        constructor(
            properties?: Partial<{
                temporal_reference: number;
                split_screen_indicator: number;
                document_camera_indicator: number;
                full_picture_freeze_release: number;
                source_format: number;
                picture_coding_type: number;
                vop_quant: number;
                pei: number;
                psupp: number;
                gob_header_empty: number;
                gob_number: number;
                gob_frame_id: number;
                quant_scale: number;
                vop_width: number;
                vop_height: number;
                num_macroblocks_in_gob: number;
                num_gobs_in_vop: number;
                size: number;
            }>,
        );
    }

    /**
     * The video signal type structure as defined in:
     * 6.2.2 Visual Object Sequence and Visual Object.
     * @gir-type Struct
     */
    class Mpeg4VideoSignalType {
        static $gtype: GObject.GType<Mpeg4VideoSignalType>;

        // Fields

        type: number;
        format: number;
        range: number;
        color_description: number;
        color_primaries: number;
        transfer_characteristics: number;
        matrix_coefficients: number;

        // Constructors

        constructor(
            properties?: Partial<{
                type: number;
                format: number;
                range: number;
                color_description: number;
                color_primaries: number;
                transfer_characteristics: number;
                matrix_coefficients: number;
            }>,
        );
    }

    /**
     * The visual object structure as defined in:
     * 6.2.2 Visual Object Sequence and Visual Object
     * @gir-type Struct
     */
    class Mpeg4VisualObject {
        static $gtype: GObject.GType<Mpeg4VisualObject>;

        // Fields

        is_identifier: number;
        verid: number;
        priority: number;
        type: Mpeg4VisualObjectType;
    }

    /**
     * The visual object sequence structure as defined in:
     * 6.2.2 Visual Object Sequence and Visual Object
     * @gir-type Struct
     */
    class Mpeg4VisualObjectSequence {
        static $gtype: GObject.GType<Mpeg4VisualObjectSequence>;

        // Fields

        profile_and_level_indication: number;
        level: Mpeg4Level;
        profile: Mpeg4Profile;
    }

    /**
     * The Mpeg Video Group of Picture structure.
     * @gir-type Struct
     */
    class MpegVideoGop {
        static $gtype: GObject.GType<MpegVideoGop>;

        // Fields

        drop_frame_flag: number;
        hour: number;
        minute: number;
        second: number;
        frame: number;
        closed_gop: number;
        broken_link: number;

        // Constructors

        constructor(
            properties?: Partial<{
                drop_frame_flag: number;
                hour: number;
                minute: number;
                second: number;
                frame: number;
                closed_gop: number;
                broken_link: number;
            }>,
        );
    }

    /**
     * Extra buffer metadata describing the contents of a MPEG1/2 Video frame
     *
     * Can be used by elements (mainly decoders) to avoid having to parse
     * Mpeg video 1/2 packets if it can be done upstream.
     *
     * The various fields are only valid during the lifetime of the {@link GstCodecParsers.MpegVideoMeta}.
     * If elements wish to use those for longer, they are required to make a copy.
     * @gir-type Struct
     * @since 1.2
     */
    class MpegVideoMeta {
        static $gtype: GObject.GType<MpegVideoMeta>;

        // Fields

        sequencehdr: MpegVideoSequenceHdr;
        sequenceext: MpegVideoSequenceExt;
        sequencedispext: MpegVideoSequenceDisplayExt;
        pichdr: MpegVideoPictureHdr;
        picext: MpegVideoPictureExt;
        quantext: MpegVideoQuantMatrixExt;
        num_slices: number;
        slice_offset: number;

        // Static methods

        static get_info(): Gst.MetaInfo;
    }

    /**
     * A structure that contains the type of a packet, its offset and its size
     * @gir-type Struct
     */
    class MpegVideoPacket {
        static $gtype: GObject.GType<MpegVideoPacket>;

        // Fields

        data: number;
        type: number;
        offset: number;
        size: number;

        // Constructors

        constructor(
            properties?: Partial<{
                data: number;
                type: number;
                offset: number;
                size: number;
            }>,
        );

        // Methods

        /**
         * Parses the `gop` MPEG Video Group of Picture structure members from
         * video `packet`
         * @returns `true` if the gop could be parsed correctly, `false` otherwise.
         */
        parse_gop(): [boolean, MpegVideoGop];
        /**
         * Parse the `ext` MPEG Video Picture Extension structure members from
         * video `packet`
         * @returns `true` if the picture extension could be parsed correctly, `false` otherwise.
         */
        parse_picture_extension(): [boolean, MpegVideoPictureExt];
        /**
         * Parsers the `pichdr` MPEG Video Picture Header structure members
         * from video `packet`
         * @returns `true` if the picture sequence could be parsed correctly, `false` otherwise.
         */
        parse_picture_header(): [boolean, MpegVideoPictureHdr];
        /**
         * Parses the `quant` MPEG Video Quantization Matrix Extension
         * structure members from video `packet`
         * @returns `true` if the quant matrix extension could be parsed correctly, `false` otherwise.
         */
        parse_quant_matrix_extension(): [boolean, MpegVideoQuantMatrixExt];
        /**
         * Parses the `seqext` MPEG Video Sequence Display Extension structure
         * members from video `packet`
         * @returns `true` if the seqext could be parsed correctly, `false` otherwise.
         */
        parse_sequence_display_extension(): [boolean, MpegVideoSequenceDisplayExt];
        /**
         * Parses the `seqext` MPEG Video Sequence Extension structure members
         * from video `packet`
         * @returns `true` if the seqext could be parsed correctly, `false` otherwise.
         */
        parse_sequence_extension(): [boolean, MpegVideoSequenceExt];
        /**
         * Parses the `seqhdr` MPEG Video Sequence Header structure members
         * from video `packet`
         * @returns `true` if the seqhdr could be parsed correctly, `false` otherwise.
         */
        parse_sequence_header(): [boolean, MpegVideoSequenceHdr];
        /**
         * Parses the `seqscaleext` MPEG Video Sequence Scalable Extension structure
         * members from video `packet`
         * @returns `true` if the seqext could be parsed correctly, `false` otherwise.
         */
        parse_sequence_scalable_extension(): [boolean, MpegVideoSequenceScalableExt];
        /**
         * Parses the `GstMpegVideoSliceHdr`  structure members from `data`
         * @param seq_hdr The {@link GstCodecParsers.MpegVideoSequenceHdr} header
         * @param seqscaleext The {@link GstCodecParsers.MpegVideoSequenceScalableExt} header
         * @returns `true` if the slice could be parsed correctly, `false` otherwise.
         */
        parse_slice_header(
            seq_hdr: MpegVideoSequenceHdr,
            seqscaleext: MpegVideoSequenceScalableExt,
        ): [boolean, MpegVideoSliceHdr];
    }

    /**
     * The Mpeg2 Video Picture Extension structure.
     * @gir-type Struct
     */
    class MpegVideoPictureExt {
        static $gtype: GObject.GType<MpegVideoPictureExt>;

        // Fields

        f_code: Uint8Array;
        intra_dc_precision: number;
        picture_structure: number;
        top_field_first: number;
        frame_pred_frame_dct: number;
        concealment_motion_vectors: number;
        q_scale_type: number;
        intra_vlc_format: number;
        alternate_scan: number;
        repeat_first_field: number;
        chroma_420_type: number;
        progressive_frame: number;
        composite_display: number;
        v_axis: number;
        field_sequence: number;
        sub_carrier: number;
        burst_amplitude: number;
        sub_carrier_phase: number;

        // Constructors

        constructor(
            properties?: Partial<{
                f_code: Uint8Array;
                intra_dc_precision: number;
                picture_structure: number;
                top_field_first: number;
                frame_pred_frame_dct: number;
                concealment_motion_vectors: number;
                q_scale_type: number;
                intra_vlc_format: number;
                alternate_scan: number;
                repeat_first_field: number;
                chroma_420_type: number;
                progressive_frame: number;
                composite_display: number;
                v_axis: number;
                field_sequence: number;
                sub_carrier: number;
                burst_amplitude: number;
                sub_carrier_phase: number;
            }>,
        );
    }

    /**
     * The Mpeg2 Video Picture Header structure.
     * @gir-type Struct
     */
    class MpegVideoPictureHdr {
        static $gtype: GObject.GType<MpegVideoPictureHdr>;

        // Fields

        tsn: number;
        pic_type: number;
        vbv_delay: number;
        full_pel_forward_vector: number;
        full_pel_backward_vector: number;
        f_code: Uint8Array;

        // Constructors

        constructor(
            properties?: Partial<{
                tsn: number;
                pic_type: number;
                vbv_delay: number;
                full_pel_forward_vector: number;
                full_pel_backward_vector: number;
                f_code: Uint8Array;
            }>,
        );
    }

    /**
     * The Quant Matrix Extension structure that exposes quantization
     * matrices in zigzag scan order. i.e. the original encoded scan
     * order.
     * @gir-type Struct
     */
    class MpegVideoQuantMatrixExt {
        static $gtype: GObject.GType<MpegVideoQuantMatrixExt>;

        // Fields

        load_intra_quantiser_matrix: number;
        intra_quantiser_matrix: Uint8Array;
        load_non_intra_quantiser_matrix: number;
        non_intra_quantiser_matrix: Uint8Array;
        load_chroma_intra_quantiser_matrix: number;
        chroma_intra_quantiser_matrix: Uint8Array;
        load_chroma_non_intra_quantiser_matrix: number;
        chroma_non_intra_quantiser_matrix: Uint8Array;

        // Constructors

        constructor(
            properties?: Partial<{
                load_intra_quantiser_matrix: number;
                intra_quantiser_matrix: Uint8Array;
                load_non_intra_quantiser_matrix: number;
                non_intra_quantiser_matrix: Uint8Array;
                load_chroma_intra_quantiser_matrix: number;
                chroma_intra_quantiser_matrix: Uint8Array;
                load_chroma_non_intra_quantiser_matrix: number;
                chroma_non_intra_quantiser_matrix: Uint8Array;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class MpegVideoSequenceDisplayExt {
        static $gtype: GObject.GType<MpegVideoSequenceDisplayExt>;

        // Fields

        video_format: number;
        colour_description_flag: number;
        colour_primaries: number;
        transfer_characteristics: number;
        matrix_coefficients: number;
        display_horizontal_size: number;
        display_vertical_size: number;

        // Constructors

        constructor(
            properties?: Partial<{
                video_format: number;
                colour_description_flag: number;
                colour_primaries: number;
                transfer_characteristics: number;
                matrix_coefficients: number;
                display_horizontal_size: number;
                display_vertical_size: number;
            }>,
        );
    }

    /**
     * The Mpeg2 Video Sequence Extension structure.
     * @gir-type Struct
     */
    class MpegVideoSequenceExt {
        static $gtype: GObject.GType<MpegVideoSequenceExt>;

        // Fields

        profile: number;
        level: number;
        progressive: number;
        chroma_format: number;
        horiz_size_ext: number;
        vert_size_ext: number;
        bitrate_ext: number;
        vbv_buffer_size_extension: number;
        low_delay: number;
        fps_n_ext: number;
        fps_d_ext: number;
        profile_level_escape_bit: number;

        // Constructors

        constructor(
            properties?: Partial<{
                profile: number;
                level: number;
                progressive: number;
                chroma_format: number;
                horiz_size_ext: number;
                vert_size_ext: number;
                bitrate_ext: number;
                vbv_buffer_size_extension: number;
                low_delay: number;
                fps_n_ext: number;
                fps_d_ext: number;
                profile_level_escape_bit: number;
            }>,
        );
    }

    /**
     * The Mpeg2 Video Sequence Header structure.
     * @gir-type Struct
     */
    class MpegVideoSequenceHdr {
        static $gtype: GObject.GType<MpegVideoSequenceHdr>;

        // Fields

        width: number;
        height: number;
        aspect_ratio_info: number;
        frame_rate_code: number;
        bitrate_value: number;
        vbv_buffer_size_value: number;
        constrained_parameters_flag: number;
        load_intra_quantiser_matrix: number;
        intra_quantizer_matrix: Uint8Array;
        load_non_intra_quantiser_matrix: number;
        non_intra_quantizer_matrix: Uint8Array;
        par_w: number;
        par_h: number;
        fps_n: number;
        fps_d: number;
        bitrate: number;

        // Constructors

        constructor(
            properties?: Partial<{
                width: number;
                height: number;
                aspect_ratio_info: number;
                frame_rate_code: number;
                bitrate_value: number;
                vbv_buffer_size_value: number;
                constrained_parameters_flag: number;
                load_intra_quantiser_matrix: number;
                intra_quantizer_matrix: Uint8Array;
                load_non_intra_quantiser_matrix: number;
                non_intra_quantizer_matrix: Uint8Array;
                par_w: number;
                par_h: number;
                fps_n: number;
                fps_d: number;
                bitrate: number;
            }>,
        );
    }

    /**
     * The Sequence Scalable Extension structure.
     * @gir-type Struct
     * @since 1.2
     */
    class MpegVideoSequenceScalableExt {
        static $gtype: GObject.GType<MpegVideoSequenceScalableExt>;

        // Fields

        scalable_mode: number;
        layer_id: number;
        lower_layer_prediction_horizontal_size: number;
        lower_layer_prediction_vertical_size: number;
        horizontal_subsampling_factor_m: number;
        horizontal_subsampling_factor_n: number;
        vertical_subsampling_factor_m: number;
        vertical_subsampling_factor_n: number;
        picture_mux_enable: number;
        mux_to_progressive_sequence: number;
        picture_mux_order: number;
        picture_mux_factor: number;

        // Constructors

        constructor(
            properties?: Partial<{
                scalable_mode: number;
                layer_id: number;
                lower_layer_prediction_horizontal_size: number;
                lower_layer_prediction_vertical_size: number;
                horizontal_subsampling_factor_m: number;
                horizontal_subsampling_factor_n: number;
                vertical_subsampling_factor_m: number;
                vertical_subsampling_factor_n: number;
                picture_mux_enable: number;
                mux_to_progressive_sequence: number;
                picture_mux_order: number;
                picture_mux_factor: number;
            }>,
        );
    }

    /**
     * The Mpeg2 Video Slice Header structure.
     * @gir-type Struct
     * @since 1.2
     */
    class MpegVideoSliceHdr {
        static $gtype: GObject.GType<MpegVideoSliceHdr>;

        // Fields

        vertical_position: number;
        vertical_position_ext: number;
        priority_breakpoint: number;
        quantiser_scale_code: number;
        slice_ext_flag: number;
        intra_slice: number;
        slice_picture_id_enable: number;
        slice_picture_id: number;
        header_size: number;
        mb_row: number;
        mb_column: number;

        // Constructors

        constructor(
            properties?: Partial<{
                vertical_position: number;
                vertical_position_ext: number;
                priority_breakpoint: number;
                quantiser_scale_code: number;
                slice_ext_flag: number;
                intra_slice: number;
                slice_picture_id_enable: number;
                slice_picture_id: number;
                header_size: number;
                mb_row: number;
                mb_column: number;
            }>,
        );
    }

    /**
     * Structure for the advanced profile sequence headers specific parameters.
     * @gir-type Struct
     */
    class VC1AdvancedSeqHdr {
        static $gtype: GObject.GType<VC1AdvancedSeqHdr>;

        // Fields

        level: VC1Level;
        frmrtq_postproc: number;
        bitrtq_postproc: number;
        postprocflag: number;
        max_coded_width: number;
        max_coded_height: number;
        pulldown: number;
        interlace: number;
        tfcntrflag: number;
        finterpflag: number;
        psf: number;
        display_ext: number;
        disp_horiz_size: number;
        disp_vert_size: number;
        aspect_ratio_flag: number;
        aspect_ratio: number;
        aspect_horiz_size: number;
        aspect_vert_size: number;
        framerate_flag: number;
        framerateind: number;
        frameratenr: number;
        frameratedr: number;
        framerateexp: number;
        color_format_flag: number;
        color_prim: number;
        transfer_char: number;
        matrix_coef: number;
        hrd_param_flag: number;
        colordiff_format: number;
        hrd_param: VC1HrdParam;
        framerate: number;
        bitrate: number;
        par_n: number;
        par_d: number;
        fps_n: number;
        fps_d: number;
        entrypoint: VC1EntryPointHdr;
    }

    /**
     * Structure that represents a Bitstream Data Unit.
     * @gir-type Struct
     */
    class VC1BDU {
        static $gtype: GObject.GType<VC1BDU>;

        // Fields

        type: VC1StartCode;
        size: number;
        sc_offset: number;
        offset: number;
        data: number;
    }

    /**
     * @gir-type Struct
     */
    class VC1BitPlanes {
        static $gtype: GObject.GType<VC1BitPlanes>;

        // Fields

        acpred: number;
        fieldtx: number;
        overflags: number;
        mvtypemb: number;
        skipmb: number;
        directmb: number;
        forwardmb: number;
        size: number;

        // Constructors

        constructor(
            properties?: Partial<{
                acpred: number;
                fieldtx: number;
                overflags: number;
                mvtypemb: number;
                skipmb: number;
                directmb: number;
                forwardmb: number;
                size: number;
            }>,
        );
    }

    /**
     * Structure for entrypoint header, this will be used only in advanced profiles
     * @gir-type Struct
     */
    class VC1EntryPointHdr {
        static $gtype: GObject.GType<VC1EntryPointHdr>;

        // Fields

        broken_link: number;
        closed_entry: number;
        panscan_flag: number;
        refdist_flag: number;
        loopfilter: number;
        fastuvmc: number;
        extended_mv: number;
        dquant: number;
        vstransform: number;
        overlap: number;
        quantizer: number;
        coded_size_flag: number;
        coded_width: number;
        coded_height: number;
        extended_dmv: number;
        range_mapy_flag: number;
        range_mapy: number;
        range_mapuv_flag: number;
        range_mapuv: number;
        hrd_full: Uint8Array;

        // Constructors

        constructor(
            properties?: Partial<{
                broken_link: number;
                closed_entry: number;
                panscan_flag: number;
                refdist_flag: number;
                loopfilter: number;
                fastuvmc: number;
                extended_mv: number;
                dquant: number;
                vstransform: number;
                overlap: number;
                quantizer: number;
                coded_size_flag: number;
                coded_width: number;
                coded_height: number;
                extended_dmv: number;
                range_mapy_flag: number;
                range_mapy: number;
                range_mapuv_flag: number;
                range_mapuv: number;
                hrd_full: Uint8Array;
            }>,
        );
    }

    /**
     * Structure that represent picture in any profile or mode.
     * You should look at `ptype` and `profile` to know what is currently
     * in use.
     * @gir-type Struct
     */
    class VC1FrameHdr {
        static $gtype: GObject.GType<VC1FrameHdr>;

        // Fields

        ptype: VC1PictureType;
        interpfrm: number;
        halfqp: number;
        transacfrm: number;
        transdctab: number;
        pqindex: number;
        pquantizer: number;
        pquant: number;
        profile: number;
        dquant: number;
        vopdquant: VC1VopDquant;
        header_size: number;
    }

    /**
     * @gir-type Struct
     */
    class VC1FrameLayer {
        static $gtype: GObject.GType<VC1FrameLayer>;

        // Fields

        key: number;
        framesize: number;
        timestamp: number;
        next_framelayer_offset: number;
        skiped_p_frame: number;

        // Constructors

        constructor(
            properties?: Partial<{
                key: number;
                framesize: number;
                timestamp: number;
                next_framelayer_offset: number;
                skiped_p_frame: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class VC1HrdParam {
        static $gtype: GObject.GType<VC1HrdParam>;

        // Fields

        hrd_num_leaky_buckets: number;
        bit_rate_exponent: number;
        buffer_size_exponent: number;
        hrd_rate: number[];
        hrd_buffer: number[];

        // Constructors

        constructor(
            properties?: Partial<{
                hrd_num_leaky_buckets: number;
                bit_rate_exponent: number;
                buffer_size_exponent: number;
                hrd_rate: number[];
                hrd_buffer: number[];
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class VC1PicAdvanced {
        static $gtype: GObject.GType<VC1PicAdvanced>;

        // Fields

        fcm: VC1FrameCodingMode;
        tfcntr: number;
        rptfrm: number;
        tff: number;
        rff: number;
        ps_present: number;
        ps_hoffset: number;
        ps_voffset: number;
        ps_width: number;
        ps_height: number;
        rndctrl: number;
        uvsamp: number;
        postproc: number;
        mvrange: number;
        mvmode: number;
        mvtab: number;
        cbptab: number;
        ttmbf: number;
        ttfrm: number;
        bfraction: number;
        mvmode2: number;
        lumscale: number;
        lumshift: number;
        bf: number;
        condover: number;
        transacfrm2: number;
        acpred: number;
        overflags: number;
        mvtypemb: number;
        skipmb: number;
        directmb: number;
        forwardmb: number;
        fieldtx: number;
        intcomp: number;
        dmvrange: number;
        mbmodetab: number;
        imvtab: number;
        icbptab: number;
        mvbptab2: number;
        mvbptab4: number;
        mvswitch4: number;
        refdist: number;
        fptype: number;
        numref: number;
        reffield: number;
        lumscale2: number;
        lumshift2: number;
        intcompfield: number;
    }

    /**
     * @gir-type Struct
     */
    class VC1PicSimpleMain {
        static $gtype: GObject.GType<VC1PicSimpleMain>;

        // Fields

        frmcnt: number;
        mvrange: number;
        rangeredfrm: number;
        respic: number;
        transacfrm2: number;
        bf: number;
        mvmode: number;
        mvtab: number;
        ttmbf: number;
        mvmode2: number;
        lumscale: number;
        lumshift: number;
        cbptab: number;
        ttfrm: number;
        bfraction: number;
        mvtypemb: number;
        skipmb: number;
        directmb: number;

        // Constructors

        constructor(
            properties?: Partial<{
                frmcnt: number;
                mvrange: number;
                rangeredfrm: number;
                respic: number;
                transacfrm2: number;
                bf: number;
                mvmode: number;
                mvtab: number;
                ttmbf: number;
                mvmode2: number;
                lumscale: number;
                lumshift: number;
                cbptab: number;
                ttfrm: number;
                bfraction: number;
                mvtypemb: number;
                skipmb: number;
                directmb: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    abstract class VC1Picture {
        static $gtype: GObject.GType<VC1Picture>;
    }

    /**
     * Structure for sequence headers in any profile.
     * @gir-type Struct
     */
    class VC1SeqHdr {
        static $gtype: GObject.GType<VC1SeqHdr>;

        // Fields

        profile: VC1Profile;
        mb_height: number;
        mb_width: number;
        mb_stride: number;
    }

    /**
     * @gir-type Struct
     */
    class VC1SeqLayer {
        static $gtype: GObject.GType<VC1SeqLayer>;

        // Fields

        numframes: number;
        struct_a: VC1SeqStructA;
    }

    /**
     * @gir-type Struct
     */
    class VC1SeqStructA {
        static $gtype: GObject.GType<VC1SeqStructA>;

        // Fields

        vert_size: number;
        horiz_size: number;

        // Constructors

        constructor(
            properties?: Partial<{
                vert_size: number;
                horiz_size: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class VC1SeqStructB {
        static $gtype: GObject.GType<VC1SeqStructB>;

        // Fields

        level: VC1Level;
        cbr: number;
        framerate: number;
        hrd_buffer: number;
        hrd_rate: number;
    }

    /**
     * @gir-type Struct
     */
    class VC1SeqStructC {
        static $gtype: GObject.GType<VC1SeqStructC>;

        // Fields

        profile: VC1Profile;
        frmrtq_postproc: number;
        bitrtq_postproc: number;
        res_sprite: number;
        loop_filter: number;
        multires: number;
        fastuvmc: number;
        extended_mv: number;
        dquant: number;
        vstransform: number;
        overlap: number;
        syncmarker: number;
        rangered: number;
        maxbframes: number;
        quantizer: number;
        finterpflag: number;
        framerate: number;
        bitrate: number;
        coded_width: number;
        coded_height: number;
        wmvp: number;
        slice_code: number;
    }

    /**
     * Structure that represents slice layer in advanced profile.
     * @gir-type Struct
     */
    class VC1SliceHdr {
        static $gtype: GObject.GType<VC1SliceHdr>;

        // Fields

        slice_addr: number;
        header_size: number;

        // Constructors

        constructor(
            properties?: Partial<{
                slice_addr: number;
                header_size: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class VC1VopDquant {
        static $gtype: GObject.GType<VC1VopDquant>;

        // Fields

        pqdiff: number;
        abspq: number;
        altpquant: number;
        dquantfrm: number;
        dqprofile: number;
        dqbedge: number;
        unused: number;
        dqbilevel: number;

        // Constructors

        constructor(
            properties?: Partial<{
                pqdiff: number;
                abspq: number;
                altpquant: number;
                dquantfrm: number;
                dqprofile: number;
                dqbedge: number;
                unused: number;
                dqbilevel: number;
            }>,
        );
    }

    /**
     * Frame header.
     * @gir-type Struct
     */
    class Vp8FrameHdr {
        static $gtype: GObject.GType<Vp8FrameHdr>;

        // Fields

        key_frame: number;
        version: number;
        show_frame: number;
        data_chunk_size: number;
        first_part_size: number;
        width: number;
        height: number;
        horiz_scale_code: number;
        vert_scale_code: number;
        color_space: number;
        clamping_type: number;
        filter_type: number;
        loop_filter_level: number;
        sharpness_level: number;
        log2_nbr_of_dct_partitions: number;
        partition_size: number[];
        quant_indices: Vp8QuantIndices;
        token_probs: Vp8TokenProbs;
        mv_probs: Vp8MvProbs;
        mode_probs: Vp8ModeProbs;
        refresh_entropy_probs: number;
        refresh_last: number;
        refresh_golden_frame: number;
        refresh_alternate_frame: number;
        copy_buffer_to_golden: number;
        copy_buffer_to_alternate: number;
        sign_bias_golden: number;
        sign_bias_alternate: number;
        mb_no_skip_coeff: number;
        prob_skip_false: number;
        prob_intra: number;
        prob_last: number;
        prob_gf: number;
        rd_range: number;
        rd_value: number;
        rd_count: number;
        header_size: number;

        // Constructors

        constructor(
            properties?: Partial<{
                key_frame: number;
                version: number;
                show_frame: number;
                data_chunk_size: number;
                first_part_size: number;
                width: number;
                height: number;
                horiz_scale_code: number;
                vert_scale_code: number;
                color_space: number;
                clamping_type: number;
                filter_type: number;
                loop_filter_level: number;
                sharpness_level: number;
                log2_nbr_of_dct_partitions: number;
                partition_size: number[];
                quant_indices: Vp8QuantIndices;
                token_probs: Vp8TokenProbs;
                mv_probs: Vp8MvProbs;
                mode_probs: Vp8ModeProbs;
                refresh_entropy_probs: number;
                refresh_last: number;
                refresh_golden_frame: number;
                refresh_alternate_frame: number;
                copy_buffer_to_golden: number;
                copy_buffer_to_alternate: number;
                sign_bias_golden: number;
                sign_bias_alternate: number;
                mb_no_skip_coeff: number;
                prob_skip_false: number;
                prob_intra: number;
                prob_last: number;
                prob_gf: number;
                rd_range: number;
                rd_value: number;
                rd_count: number;
                header_size: number;
            }>,
        );
    }

    /**
     * MB-level loop filter adjustments.
     * @gir-type Struct
     */
    class Vp8MbLfAdjustments {
        static $gtype: GObject.GType<Vp8MbLfAdjustments>;

        // Fields

        loop_filter_adj_enable: number;
        mode_ref_lf_delta_update: number;
        ref_frame_delta: Uint8Array;
        mb_mode_delta: Uint8Array;

        // Constructors

        constructor(
            properties?: Partial<{
                loop_filter_adj_enable: number;
                mode_ref_lf_delta_update: number;
                ref_frame_delta: Uint8Array;
                mb_mode_delta: Uint8Array;
            }>,
        );
    }

    /**
     * Probabilities used for intra-prediction mode decoding tree.
     *
     * Each probability value in thie structure is live across frames,
     * until they are reset to their default values on key frame.
     * @gir-type Struct
     */
    class Vp8ModeProbs {
        static $gtype: GObject.GType<Vp8ModeProbs>;

        // Fields

        y_prob: Uint8Array;
        uv_prob: Uint8Array;

        // Constructors

        constructor(
            properties?: Partial<{
                y_prob: Uint8Array;
                uv_prob: Uint8Array;
            }>,
        );
    }

    /**
     * Probabilities used for motion vector decoding, with cumulative
     * updates applied.
     *
     * Each probability value in this matrix is live across frames, until
     * they are reset to their default values on key frame.
     * @gir-type Struct
     */
    class Vp8MvProbs {
        static $gtype: GObject.GType<Vp8MvProbs>;

        // Fields

        prob: Uint8Array;

        // Constructors

        constructor(
            properties?: Partial<{
                prob: Uint8Array;
            }>,
        );
    }

    /**
     * For more details about the structures, you can refer to the
     * specifications: VP8-rfc6386.pdf
     * @gir-type Struct
     */
    class Vp8Parser {
        static $gtype: GObject.GType<Vp8Parser>;

        // Fields

        segmentation: Vp8Segmentation;
        mb_lf_adjust: Vp8MbLfAdjustments;
        token_probs: Vp8TokenProbs;
        mv_probs: Vp8MvProbs;
        mode_probs: Vp8ModeProbs;

        // Constructors

        constructor(
            properties?: Partial<{
                segmentation: Vp8Segmentation;
                mb_lf_adjust: Vp8MbLfAdjustments;
                token_probs: Vp8TokenProbs;
                mv_probs: Vp8MvProbs;
                mode_probs: Vp8ModeProbs;
            }>,
        );

        // Methods

        /**
         * Initializes the supplied `parser` structure with its default values.
         */
        init(): void;
        /**
         * Parses the VP8 bitstream contained in `data`, and fills in `frame_hdr`
         * with the information. The supplied `data` shall point to a complete
         * frame since there is no sync code specified for VP8 bitstreams. Thus,
         * the `size` argument shall represent the whole frame size.
         * @param frame_hdr The {@link GstCodecParsers.Vp8FrameHdr} to fill
         * @param data The data to parse
         * @param size The size of the `data` to parse
         * @returns a {@link GstCodecParsers.Vp8ParserResult}
         */
        parse_frame_header(frame_hdr: Vp8FrameHdr, data: number, size: number): Vp8ParserResult;
    }

    /**
     * @gir-type Struct
     */
    class Vp8QuantIndices {
        static $gtype: GObject.GType<Vp8QuantIndices>;

        // Fields

        y_ac_qi: number;
        y_dc_delta: number;
        y2_dc_delta: number;
        y2_ac_delta: number;
        uv_dc_delta: number;
        uv_ac_delta: number;

        // Constructors

        constructor(
            properties?: Partial<{
                y_ac_qi: number;
                y_dc_delta: number;
                y2_dc_delta: number;
                y2_ac_delta: number;
                uv_dc_delta: number;
                uv_ac_delta: number;
            }>,
        );
    }

    /**
     * Range decoder.
     * @gir-type Struct
     */
    class Vp8RangeDecoder {
        static $gtype: GObject.GType<Vp8RangeDecoder>;

        // Fields

        buf: number;
        buf_size: number;

        // Constructors

        constructor(
            properties?: Partial<{
                buf: number;
                buf_size: number;
            }>,
        );

        // Methods

        get_pos(): number;
        /**
         * @param state
         */
        get_state(state: Vp8RangeDecoderState): void;
        /**
         * @param buf
         * @param buf_size
         */
        init(buf: number, buf_size: number): boolean;
        /**
         * @param prob
         */
        read(prob: number): number;
        /**
         * @param bits
         */
        read_literal(bits: number): number;
    }

    /**
     * Range decoder state.
     * @gir-type Struct
     */
    class Vp8RangeDecoderState {
        static $gtype: GObject.GType<Vp8RangeDecoderState>;

        // Fields

        range: number;
        value: number;
        count: number;

        // Constructors

        constructor(
            properties?: Partial<{
                range: number;
                value: number;
                count: number;
            }>,
        );
    }

    /**
     * Segmentation feature data.
     * @gir-type Struct
     */
    class Vp8Segmentation {
        static $gtype: GObject.GType<Vp8Segmentation>;

        // Fields

        segmentation_enabled: number;
        update_mb_segmentation_map: number;
        update_segment_feature_data: number;
        segment_feature_mode: number;
        quantizer_update_value: Uint8Array;
        lf_update_value: Uint8Array;
        segment_prob: Uint8Array;

        // Constructors

        constructor(
            properties?: Partial<{
                segmentation_enabled: number;
                update_mb_segmentation_map: number;
                update_segment_feature_data: number;
                segment_feature_mode: number;
                quantizer_update_value: Uint8Array;
                lf_update_value: Uint8Array;
                segment_prob: Uint8Array;
            }>,
        );
    }

    /**
     * Token probabilities, with cumulative updates applied.
     *
     * Each probability value in this matrix is live across frames, until
     * they are reset to their default values on key frame.
     * @gir-type Struct
     */
    class Vp8TokenProbs {
        static $gtype: GObject.GType<Vp8TokenProbs>;

        // Fields

        prob: Uint8Array;

        // Constructors

        constructor(
            properties?: Partial<{
                prob: Uint8Array;
            }>,
        );
    }

    /**
     * Frame header
     * @gir-type Struct
     * @since 1.8
     */
    class Vp9FrameHdr {
        static $gtype: GObject.GType<Vp9FrameHdr>;

        // Fields

        profile: number;
        show_existing_frame: number;
        frame_to_show: number;
        frame_type: number;
        show_frame: number;
        error_resilient_mode: number;
        width: number;
        height: number;
        display_size_enabled: number;
        display_width: number;
        display_height: number;
        frame_context_idx: number;
        intra_only: number;
        reset_frame_context: number;
        refresh_frame_flags: number;
        ref_frame_indices: number[];
        ref_frame_sign_bias: number[];
        allow_high_precision_mv: number;
        mcomp_filter_type: number;
        refresh_frame_context: number;
        frame_parallel_decoding_mode: number;
        loopfilter: Vp9LoopFilter;
        quant_indices: Vp9QuantIndices;
        segmentation: Vp9SegmentationInfo;
        log2_tile_rows: number;
        log2_tile_columns: number;
        first_partition_size: number;
        lossless_flag: number;
        frame_header_length_in_bytes: number;

        // Constructors

        constructor(
            properties?: Partial<{
                profile: number;
                show_existing_frame: number;
                frame_to_show: number;
                frame_type: number;
                show_frame: number;
                error_resilient_mode: number;
                width: number;
                height: number;
                display_size_enabled: number;
                display_width: number;
                display_height: number;
                frame_context_idx: number;
                intra_only: number;
                reset_frame_context: number;
                refresh_frame_flags: number;
                ref_frame_indices: number[];
                ref_frame_sign_bias: number[];
                allow_high_precision_mv: number;
                mcomp_filter_type: number;
                refresh_frame_context: number;
                frame_parallel_decoding_mode: number;
                loopfilter: Vp9LoopFilter;
                quant_indices: Vp9QuantIndices;
                segmentation: Vp9SegmentationInfo;
                log2_tile_rows: number;
                log2_tile_columns: number;
                first_partition_size: number;
                lossless_flag: number;
                frame_header_length_in_bytes: number;
            }>,
        );
    }

    /**
     * Loop filter values
     * @gir-type Struct
     * @since 1.8
     */
    class Vp9LoopFilter {
        static $gtype: GObject.GType<Vp9LoopFilter>;

        // Fields

        filter_level: number;
        sharpness_level: number;
        mode_ref_delta_enabled: number;
        mode_ref_delta_update: number;
        update_ref_deltas: Uint8Array;
        ref_deltas: Uint8Array;
        update_mode_deltas: Uint8Array;
        mode_deltas: Uint8Array;

        // Constructors

        constructor(
            properties?: Partial<{
                filter_level: number;
                sharpness_level: number;
                mode_ref_delta_enabled: number;
                mode_ref_delta_update: number;
                update_ref_deltas: Uint8Array;
                ref_deltas: Uint8Array;
                update_mode_deltas: Uint8Array;
                mode_deltas: Uint8Array;
            }>,
        );
    }

    /**
     * For more details about the structures, you can refer to the
     * specifications:
     * @gir-type Struct
     * @since 1.8
     */
    class Vp9Parser {
        static $gtype: GObject.GType<Vp9Parser>;

        // Fields

        priv: any;
        subsampling_x: number;
        subsampling_y: number;
        bit_depth: number;
        color_space: number;
        color_range: number;
        mb_segment_tree_probs: Uint8Array;
        segment_pred_probs: Uint8Array;
        segmentation: Vp9Segmentation[];

        // Constructors

        constructor(
            properties?: Partial<{
                priv: any;
                subsampling_x: number;
                subsampling_y: number;
                bit_depth: number;
                color_space: number;
                color_range: number;
                mb_segment_tree_probs: Uint8Array;
                segment_pred_probs: Uint8Array;
                segmentation: Vp9Segmentation[];
            }>,
        );

        // Methods

        /**
         * Frees `parser`.
         */
        free(): void;
        /**
         * Parses the VP9 bitstream contained in `data`, and fills in `frame_hdr`
         * with the information. The `size` argument represent the whole frame size.
         * @param frame_hdr The {@link GstCodecParsers.Vp9FrameHdr} to fill
         * @param data The data to parse
         * @param size The size of the `data` to parse
         * @returns a {@link GstCodecParsers.Vp9ParserResult}
         */
        parse_frame_header(frame_hdr: Vp9FrameHdr, data: number, size: number): Vp9ParserResult;
        /**
         * Parses the VP9 bitstream contained in `data`, and fills in `superframe_info`
         * with the information. The `size` argument represent the whole superframe size.
         * If `data` is not superframe but normal frame, the parser returns
         * GST_VP9_PARSER_OK, frame_size[0] is set to `size` and frames_in_superframe is
         * set to 1. Also this method does not validate vp9frame header and verifying
         * the frame header is caller's responsibility.
         * @param superframe_info The {@link GstCodecParsers.Vp9SuperframeInfo} to fill
         * @param data The data to parse
         * @param size The size of the `data` to parse
         * @returns a {@link GstCodecParsers.Vp9ParserResult}
         */
        parse_superframe_info(superframe_info: Vp9SuperframeInfo, data: number, size: number): Vp9ParserResult;
    }

    /**
     * Dequantization indices.
     * @gir-type Struct
     * @since 1.8
     */
    class Vp9QuantIndices {
        static $gtype: GObject.GType<Vp9QuantIndices>;

        // Fields

        y_ac_qi: number;
        y_dc_delta: number;
        uv_dc_delta: number;
        uv_ac_delta: number;

        // Constructors

        constructor(
            properties?: Partial<{
                y_ac_qi: number;
                y_dc_delta: number;
                uv_dc_delta: number;
                uv_ac_delta: number;
            }>,
        );
    }

    /**
     * Segmentation info kept across multiple frames
     * @gir-type Struct
     * @since 1.8
     */
    class Vp9Segmentation {
        static $gtype: GObject.GType<Vp9Segmentation>;

        // Fields

        filter_level: Uint8Array;
        luma_ac_quant_scale: number;
        luma_dc_quant_scale: number;
        chroma_ac_quant_scale: number;
        chroma_dc_quant_scale: number;
        reference_frame_enabled: number;
        reference_frame: number;
        reference_skip: number;

        // Constructors

        constructor(
            properties?: Partial<{
                filter_level: Uint8Array;
                luma_ac_quant_scale: number;
                luma_dc_quant_scale: number;
                chroma_ac_quant_scale: number;
                chroma_dc_quant_scale: number;
                reference_frame_enabled: number;
                reference_frame: number;
                reference_skip: number;
            }>,
        );
    }

    /**
     * Segmentation info
     * @gir-type Struct
     * @since 1.8
     */
    class Vp9SegmentationInfo {
        static $gtype: GObject.GType<Vp9SegmentationInfo>;

        // Fields

        enabled: number;
        update_map: number;
        update_tree_probs: Uint8Array;
        tree_probs: Uint8Array;
        update_pred_probs: Uint8Array;
        pred_probs: Uint8Array;
        abs_delta: number;
        temporal_update: number;
        update_data: number;
        data: Vp9SegmentationInfoData[];

        // Constructors

        constructor(
            properties?: Partial<{
                enabled: number;
                update_map: number;
                update_tree_probs: Uint8Array;
                tree_probs: Uint8Array;
                update_pred_probs: Uint8Array;
                pred_probs: Uint8Array;
                abs_delta: number;
                temporal_update: number;
                update_data: number;
                data: Vp9SegmentationInfoData[];
            }>,
        );
    }

    /**
     * Segmentation info for each segment
     * @gir-type Struct
     * @since 1.8
     */
    class Vp9SegmentationInfoData {
        static $gtype: GObject.GType<Vp9SegmentationInfoData>;

        // Fields

        alternate_quantizer_enabled: number;
        alternate_quantizer: number;
        alternate_loop_filter_enabled: number;
        alternate_loop_filter: number;
        reference_frame_enabled: number;
        reference_frame: number;
        reference_skip: number;

        // Constructors

        constructor(
            properties?: Partial<{
                alternate_quantizer_enabled: number;
                alternate_quantizer: number;
                alternate_loop_filter_enabled: number;
                alternate_loop_filter: number;
                reference_frame_enabled: number;
                reference_frame: number;
                reference_skip: number;
            }>,
        );
    }

    /**
     * Superframe info
     * @gir-type Struct
     * @since 1.18
     */
    class Vp9SuperframeInfo {
        static $gtype: GObject.GType<Vp9SuperframeInfo>;

        // Fields

        bytes_per_framesize: number;
        frames_in_superframe: number;
        frame_sizes: number[];
        superframe_index_size: number;

        // Constructors

        constructor(
            properties?: Partial<{
                bytes_per_framesize: number;
                frames_in_superframe: number;
                frame_sizes: number[];
                superframe_index_size: number;
            }>,
        );
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

export default GstCodecParsers;

// END
