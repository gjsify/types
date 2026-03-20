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

export namespace GstAnalytics {
    /**
     * GstAnalytics-1.0
     */

    /**
     * @gir-type Enum
     * @since 1.28
     */
    enum ModelInfoTensorDirection {
        /**
         * Tensor location is unknown
         */
        UNKNOWN,
        /**
         * Input tensor
         */
        INPUT,
        /**
         * Output tensor
         */
        OUTPUT,
    }

    /**
     * Enum value describing supported segmentation type
     * @gir-type Enum
     * @since 1.26
     */
    enum SegmentationType {
        /**
         * Segmentation where the belonging of each
         * pixel to a class of objects is identified.
         */
        SEMANTIC,
        /**
         * Segmentation where the belonging of each
         * pixel to instance of an object is identified.
         */
        INSTANCE,
    }

    /**
     * Describe the type of data contain in the tensor.
     * @gir-type Enum
     * @since 1.26
     */
    enum TensorDataType {
        /**
         * signed 4 bit integer tensor data
         */
        INT4,
        /**
         * signed 8 bit integer tensor data
         */
        INT8,
        /**
         * signed 16 bit integer tensor data
         */
        INT16,
        /**
         * signed 32 bit integer tensor data
         */
        INT32,
        /**
         * signed 64 bit integer tensor data
         */
        INT64,
        /**
         * unsigned 4 bit integer tensor data
         */
        UINT4,
        /**
         * unsigned 8 bit integer tensor data
         */
        UINT8,
        /**
         * unsigned 16 bit integer tensor data
         */
        UINT16,
        /**
         * unsigned 32 bit integer tensor data
         */
        UINT32,
        /**
         * unsigned 64 bit integer tensor data
         */
        UINT64,
        /**
         * 16 bit floating point tensor data
         */
        FLOAT16,
        /**
         * 32 bit floating point tensor data
         */
        FLOAT32,
        /**
         * 64 bit floating point tensor data
         */
        FLOAT64,
        /**
         * "brain" 16 bit floating point tensor data
         */
        BFLOAT16,
        /**
         * UTF-8 string
         */
        STRING,
        /**
         * A boolean value stored in 1 byte.
         */
        BOOL,
        /**
         * A 64-bit complex number stored in 2 32-bit values.
         */
        COMPLEX64,
        /**
         * A 128-bit complex number stored in 2 64-bit values.
         */
        COMPLEX128,
        /**
         * A non-IEEE 8-bit floating point format with 4 exponent bits and 3 mantissa bits, with NaN and no infinite values (FN).
         * See [this paper for more details](https://onnx.ai/onnx/technical/float8.html)
         */
        FLOAT8E4M3FN,
        /**
         * A non-IEEE 8-bit floating point format with 4 exponent bits and 3 mantissa bits, with NaN, no infinite values (FN) and no negative zero (UZ).
         * See [this paper for more details](https://onnx.ai/onnx/technical/float8.html)
         */
        FLOAT8E4M3FNUZ,
        /**
         * A non-IEEE 8-bit floating point format with 5 exponent bits and 2 mantissa bits.
         * See [this paper for more details](https://onnx.ai/onnx/technical/float8.html)
         */
        FLOAT8E5M2,
        /**
         * A non-IEEE 8-bit floating point format with 5 exponent bits and 2 mantissa bits, with NaN, no infinite values (FN) and no negative zero (UZ).
         * See [this paper for more details](https://onnx.ai/onnx/technical/float8.html)
         */
        FLOAT8E5M2FNUZ,
    }

    /**
     * Indicate to read tensor from memory in row-major or column-major order.
     * @gir-type Enum
     * @since 1.26
     */
    enum TensorDimOrder {
        /**
         * elements along a row are consecutive in memory
         */
        ROW_MAJOR,
        /**
         * elements along a column are consecutive in memory
         */
        COL_MAJOR,
    }

    /**
     * Indicate tensor storage in memory.
     * @gir-type Enum
     * @since 1.26
     */
    enum TensorLayout {
        /**
         * indicate the tensor is stored in a dense format in memory
         */
        TENSOR_LAYOUT_CONTIGUOUS,
    }

    /**
     * The caps feature to be used on streams that make use of this meta.
     * @since 1.28
     */
    const CAPS_FEATURE_META_GST_ANALYTICS_BATCH_META: string;
    /**
     * Passes to functions asking for a relation span when the span is
     * infinite.
     * @since 1.24
     */
    const INF_RELATION_SPAN: number;
    /**
     * The name of the modelinfo header section
     * @since 1.28
     */
    const MODELINFO_SECTION_NAME: string;
    /**
     * The current major version of the modelinfo format
     * @since 1.28
     */
    const MODELINFO_VERSION_MAJOR: number;
    /**
     * The current minor version of the modelinfo format
     * @since 1.28
     */
    const MODELINFO_VERSION_MINOR: number;
    /**
     * The current version string for the modelinfo format.
     * This MUST be updated whenever the format changes.
     * @since 1.28
     */
    const MODELINFO_VERSION_STR: string;
    /**
     * A wildcard matching any type of analysis
     * @since 1.24
     */
    const MTD_TYPE_ANY: number;
    /**
     * Adds a {@link GstAnalytics.BatchMeta} to a buffer or returns the existing one
     * @param buffer A writable {@link Gst.Buffer}
     * @returns The new {@link GstAnalytics.BatchMeta}
     * @since 1.28
     */
    function buffer_add_analytics_batch_meta(buffer: Gst.Buffer): BatchMeta;
    /**
     * Attach a analysis-results-meta-relation  meta ({@link GstAnalytics.RelationMeta})to `buffer`.
     *
     * A {@link GstAnalytics.RelationMeta} is a metadata describing relation between other
     * analysis meta. It's more efficient to use `gst_buffer_add_analytics_relation_meta_full`
     * and providing the maximum number of analysis meta that will attached to a buffer.
     * @param buffer a {@link Gst.Buffer}
     * @returns Newly attached {@link GstAnalytics.RelationMeta}
     * @since 1.24
     */
    function buffer_add_analytics_relation_meta(buffer: Gst.Buffer): RelationMeta | null;
    /**
     * Attache a analysis-results relation-meta ({@link GstAnalytics.RelationMeta}) to `buffer`.
     *
     * A {@link GstAnalytics.RelationMeta} is a metadata describing relation between other
     * analysis meta.
     * @param buffer a {@link Gst.Buffer}
     * @param init_params Initialization parameters
     * @returns Newly attached {@link GstAnalytics.RelationMeta}
     * @since 1.24
     */
    function buffer_add_analytics_relation_meta_full(
        buffer: Gst.Buffer,
        init_params: RelationMetaInitParams,
    ): RelationMeta | null;
    /**
     * Adds a {@link GstAnalytics.TensorMeta} to a buffer
     * @param buffer A writable {@link Gst.Buffer}
     * @returns The new {@link GstAnalytics.TensorMeta}
     * @since 1.26
     */
    function buffer_add_tensor_meta(buffer: Gst.Buffer): TensorMeta;
    /**
     * Gets the {@link GstAnalytics.BatchMeta} from a buffer
     * @param buffer A {@link Gst.Buffer}
     * @returns The {@link GstAnalytics.BatchMeta} if there is one
     * @since 1.28
     */
    function buffer_get_analytics_batch_meta(buffer: Gst.Buffer): BatchMeta | null;
    /**
     * Retrives the meta or `null` if it doesn't exist
     * @param buffer a {@link Gst.Buffer}
     * @returns The {@link GstAnalytics.RelationMeta} if there is one
     * @since 1.24
     */
    function buffer_get_analytics_relation_meta(buffer: Gst.Buffer): RelationMeta | null;
    /**
     * Gets the {@link GstAnalytics.TensorMeta} from a buffer
     * @param buffer A {@link Gst.Buffer}
     * @returns The {@link GstAnalytics.TensorMeta} if there is wone
     * @since 1.26
     */
    function buffer_get_tensor_meta(buffer: Gst.Buffer): TensorMeta | null;
    /**
     * Get an id identifying {@link GstAnalytics.Mtd} type.
     * @returns opaque id of {@link GstAnalytics.Mtd} type
     * @since 1.24
     */
    function cls_mtd_get_mtd_type(): MtdType;
    /**
     * Calculate the intersection over the union (IoU) of the two areas defined by
     * the bounding box 1 and bounding box 2. IoU is a measure of how much two
     * regions overlap.
     * @param bb1_x Bounding box 1, X coordinate
     * @param bb1_y Bounding box 1, Y coordinate
     * @param bb1_w Bounding box 1, width
     * @param bb1_h Bounding box 1, height
     * @param bb2_x Bounding box 2, X coordinate
     * @param bb2_y Bounding box 2, Y coordinate
     * @param bb2_w Bounding box 2, width
     * @param bb2_h Bounding box 2, height
     * @returns IoU of bb1 and bb2.
     * @since 1.28
     */
    function image_util_iou_float(
        bb1_x: number,
        bb1_y: number,
        bb1_w: number,
        bb1_h: number,
        bb2_x: number,
        bb2_y: number,
        bb2_w: number,
        bb2_h: number,
    ): number;
    /**
     * Calculate the intersection over the union (IoU) of the two areas defined by
     * the bounding box 1 and bounding box 2. IoU is a measure of how much two
     * regions overlap.
     * @param bb1_x Bounding box 1, X coordinate
     * @param bb1_y Bounding box 1, Y coordinate
     * @param bb1_w Bounding box 1, width
     * @param bb1_h Bounding box 1, height
     * @param bb2_x Bounding box 2, X coordinate
     * @param bb2_y Bounding box 2, Y coordinate
     * @param bb2_w Bounding box 2, width
     * @param bb2_h Bounding box 2, height
     * @returns IoU of bb1 and bb2.
     * @since 1.28
     */
    function image_util_iou_int(
        bb1_x: number,
        bb1_y: number,
        bb1_w: number,
        bb1_h: number,
        bb2_x: number,
        bb2_y: number,
        bb2_w: number,
        bb2_h: number,
    ): number;
    /**
     * Load a modelinfo file associated with the given model file.
     *
     * This function attempts to load a `.modelinfo` file in the following order:
     * 1. `{model_filename}.modelinfo`
     * 2. `{model_filename_without_extension}.modelinfo`
     *
     * The modelinfo file contains metadata for the model's input and output tensors,
     * including normalization ranges, dimension ordering, tensor IDs, etc.
     *
     * The loaded modelinfo must be freed with `gst_analytics_modelinfo_free()`
     * when no longer needed.
     * @param model_filename Path to the model file (e.g., "model.onnx", "model.tflite")
     * @returns A new {@link GstAnalytics.ModelInfo} instance,    or `null` if the modelinfo file could not be found or loaded.
     * @since 1.28
     */
    function modelinfo_load(model_filename: string): ModelInfo | null;
    /**
     * Gets the string version of the name of this type of analytics data
     * @param type The type of analytics data
     * @returns the name
     * @since 1.24
     */
    function mtd_type_get_name(type: MtdType): string;
    /**
     * Get an id that represent object-detection metadata type
     * @returns Opaque id of the {@link GstAnalytics.Mtd} type
     * @since 1.24
     */
    function od_mtd_get_mtd_type(): MtdType;
    /**
     * Get number of relatable meta attached to instance
     * @param instance Instance of {@link GstAnalytics.RelationMeta}
     * @returns Number of analysis-meta attached to this  instance.
     * @since 1.24
     */
    function relation_get_length(instance: RelationMeta): number;
    /**
     * @returns GType of GstAnalyticsRelationMeta
     * @since 1.24
     */
    function relation_meta_api_get_type(): GObject.GType;
    /**
     * Get an instance of {@link GstAnalytics.MtdType} that represent segmentation
     * metadata type.
     * @returns A {@link GstAnalytics.MtdType} type
     * @since 1.26
     */
    function segmentation_mtd_get_mtd_type(): MtdType;
    /**
     * Get a string version of the data type
     * @param data_type a {@link GstAnalytics.TensorDataType}
     * @returns a constant string with the name of the data type
     * @since 1.28
     */
    function tensor_data_type_get_name(data_type: TensorDataType | null): string;
    /**
     * Get an id that represent tensor metadata type
     * @returns Opaque id of the {@link GstAnalytics.Mtd} type
     * @since 1.28
     */
    function tensor_mtd_get_mtd_type(): MtdType;
    /**
     * @returns id representing the type of GstAnalyticsRelatableMtd Get the opaque id identifying the relatable type
     * @since 1.24
     */
    function tracking_mtd_get_mtd_type(): MtdType;
    /**
     * @gir-type Flags
     * @since 1.24
     */
    enum RelTypes {
        /**
         * No relation
         */
        NONE,
        /**
         * First analysis-meta is part of second analysis-meta
         */
        IS_PART_OF,
        /**
         * First analysis-meta contain second analysis-meta.
         */
        CONTAIN,
        /**
         * First analysis-meta relate to second analysis-meta.
         */
        RELATE_TO,
        /**
         * Used to express relations between two groups where each group's components
         * correspond to the respective component in the other group.
         */
        N_TO_N,
        /**
         * Only use for criteria.
         */
        ANY,
    }

    /**
     * This meta represents a batch of buffers from one or more streams together
     * with the relevant events to be able to interpret the buffers and to be able
     * to reconstruct the original streams.
     *
     * When used for multiple streams and batching them temporarily, caps of type
     * `multistream/x-analytics-batch(meta:GstAnalyticsBatchMeta)` should be used,
     * with the original caps of each stream in an array-typed `streams` field. The
     * original caps of each stream might be extended by additional fields and the
     * order of the streams in the array corresponds to the order of the `streams`
     * array of the meta. In this case, empty buffers would be used without any
     * {@link Gst.Memory} and
     *
     * When used for a single stream, the original caps might be used together with
     * the `meta:GstAnalyticsBatchMeta` caps feature and potentially extended by
     * additional fields to describe the kind of batching and its configuration,
     * e.g. that each batch is made of 25% overlapping 320x320 slices of the
     * original video frame.
     *
     * The timestamp, duration and other metadata of each batch can be retrieved
     * from the parent buffer of this meta.
     * @gir-type Struct
     * @since 1.28
     */
    class BatchMeta {
        static $gtype: GObject.GType<BatchMeta>;

        // Fields

        n_streams: number;
    }

    /**
     * @gir-type Struct
     * @since 1.28
     */
    class BatchStream {
        static $gtype: GObject.GType<BatchStream>;

        // Fields

        index: number;
        n_sticky_events: number;
        n_objects: number;

        // Methods

        /**
         * Gets the {@link Gst.Caps} from a stream
         * @returns The {@link Gst.Caps} if there are any
         */
        get_caps(): Gst.Caps | null;
        /**
         * Gets the {@link Gst.Segment} from a stream
         * @returns The {@link Gst.Segment} if there is one
         */
        get_segment(): Gst.Segment | null;
        /**
         * Gets the current stream id from a stream
         * @returns The stream id if there is any
         */
        get_stream_id(): string | null;
    }

    /**
     * Handle containing data required to use gst_analytics_cls_mtd APIs. This type
     * is generally expected to be allocated on the stack.
     * @gir-type Struct
     * @since 1.24
     */
    class ClsMtd {
        static $gtype: GObject.GType<ClsMtd>;

        // Fields

        id: number;

        // Static methods

        /**
         * Get an id identifying {@link GstAnalytics.Mtd} type.
         */
        static get_mtd_type(): MtdType;

        // Methods

        /**
         * @param quark Quark of the class Get index of class represented by `quark`
         * @returns index of the class associated with `quarks` ( and label) or     a negative value on failure.
         */
        get_index_by_quark(quark: GLib.Quark): number;
        /**
         * @returns Number of classes in this classification instance
         */
        get_length(): number;
        /**
         * Get confidence level for class at `index`
         * @param index Object class index
         * @returns confidence level for `index`, <0.0 if the call failed.
         */
        get_level(index: number): number;
        /**
         * @param index index of the class Get quark of the class at `index`
         * @returns Quark of this class (label) associated with `index`
         */
        get_quark(index: number): GLib.Quark;
    }

    /**
     * The {@link GstAnalytics.ModelInfo} is an object storing artifical neural network
     * model metadata describing the input and output tensors. These information's
     * are required by inference elements.
     * @gir-type Struct
     * @since 1.28
     */
    abstract class ModelInfo {
        static $gtype: GObject.GType<ModelInfo>;

        // Static methods

        /**
         * Load a modelinfo file associated with the given model file.
         *
         * This function attempts to load a `.modelinfo` file in the following order:
         * 1. `{model_filename}.modelinfo`
         * 2. `{model_filename_without_extension}.modelinfo`
         *
         * The modelinfo file contains metadata for the model's input and output tensors,
         * including normalization ranges, dimension ordering, tensor IDs, etc.
         *
         * The loaded modelinfo must be freed with `gst_analytics_modelinfo_free()`
         * when no longer needed.
         * @param model_filename Path to the model file (e.g., "model.onnx", "model.tflite")
         */
        static load(model_filename: string): ModelInfo | null;

        // Methods

        /**
         * Find the name of a tensor in the modelinfo that matches the given criteria.
         *
         * The function performs the following checks in order:
         * 1. If `in_tensor_name` is provided and exists in modelinfo, validate it matches
         * 2. Search by index for the specified direction and validate
         * 3. Search by dimensions and data type
         * @param dir The tensor direction (input or output)
         * @param index The tensor index within the specified direction
         * @param in_tensor_name An optional tensor name hint to check first
         * @param data_type The tensor data type to match
         * @param dims The dimension sizes. Use -1 for dynamic dimensions.
         * @returns The tensor name if found, or `null` otherwise.    The caller must free this with `g_free()` when done.
         */
        find_tensor_name(
            dir: ModelInfoTensorDirection | null,
            index: number,
            in_tensor_name: string | null,
            data_type: TensorDataType | null,
            dims: number[],
        ): string | null;
        /**
         * Free a modelinfo object allocated by `gst_analytics_modelinfo_load()`.
         *
         * This function should be called when the modelinfo is no longer needed
         * to release the associated resources.
         */
        free(): void;
        /**
         * Retrieve the dimension ordering for a given tensor.
         *
         * The dimension ordering specifies how multi-dimensional tensor data is
         * laid out in memory:
         * - Row-major (C/NumPy style): Last dimension changes fastest in memory
         * - Column-major (Fortran style): First dimension changes fastest in memory
         *
         * If not specified in the modelinfo, defaults to row-major.
         * @param tensor_name The name of the tensor
         * @returns The dimension order as {@link GstAnalytics.TensorDimOrder}
         */
        get_dims_order(tensor_name: string): TensorDimOrder;
        /**
         * Get the group ID that groups related tensors together (e.g., all outputs
         * from the same model).
         *
         * The group ID is stored in the modelinfo section and is global for all
         * tensors in the model.
         * @returns The group ID string, or `null` if not found.    The caller must free this with `g_free()` when done.
         */
        get_group_id(): string | null;
        /**
         * Get the tensor ID from the modelinfo for the specified tensor name.
         *
         * The tensor ID is ideally registered in the [Tensor ID Registry](https://github.com/collabora/tensor-id-registry/blob/main/tensor-id-register.md).
         * @param tensor_name The name of the tensor
         * @returns The tensor ID string, or `null` if not found.    The caller must free this with `g_free()` when done.
         */
        get_id(tensor_name: string): string | null;
        /**
         * Calculate normalization scales and offsets to transform input data to the target range.
         *
         * This function calculates transformation parameters to convert from the actual input data range
         * [input_min, input_max] to the target range expected by the model [target_min, target_max]:
         *   `normalized_value[i] = input[i] * output_scale[i] + output_offset[i]`
         *
         * The target ranges are read from the modelinfo `ranges` field: Semicolon-separated list of
         * comma-separated pairs (min,max) for per-channel target ranges
         * (e.g., "0.0,255.0;-1.0,1.0;0.0,1.0" for RGB channels with different target ranges).
         *
         * Common input ranges:
         * - [0.0, 255.0]: 8-bit unsigned (uint8)
         * - [-128.0, 127.0]: 8-bit signed (int8)
         * - [0.0, 65535.0]: 16-bit unsigned (uint16)
         * - [-32768.0, 32767.0]: 16-bit signed (int16)
         * - [0.0, 1.0]: Normalized float
         * - [-1.0, 1.0]: Normalized signed float
         *
         * The number of input ranges (`num_input_ranges`) must equal the number of target ranges
         * in the modelinfo. The function will return FALSE if they don't match.
         *
         * The caller must free `output_scales` and `output_offsets` with `g_free()` when done.
         * @param tensor_name The name of the tensor
         * @param input_mins The minimum values of the actual input data for each channel
         * @param input_maxs The maximum values of the actual input data for each channel
         * @returns `true` on success, `false` on error, if ranges field is not found, or if `num_input_ranges`          doesn't match the number of target ranges in the modelinfo
         */
        get_input_scales_offsets(
            tensor_name: string,
            input_mins: number[],
            input_maxs: number[],
        ): [boolean, number[], number[]];
        /**
         * Get the group ID as a GQuark for efficient string comparison and storage.
         *
         * Using GQuark is more efficient than string comparison when you need to
         * compare multiple group IDs.
         * @returns The GQuark of the group ID, or 0 if not found
         */
        get_quark_group_id(): GLib.Quark;
        /**
         * Get the tensor ID as a GQuark for efficient string comparison and storage.
         *
         * Using GQuark is more efficient than string comparison when you need to
         * compare multiple IDs.
         * @param tensor_name The name of the tensor
         * @returns The GQuark of the tensor ID, or 0 if not found
         */
        get_quark_id(tensor_name: string): GLib.Quark;
        /**
         * Retrieve all target ranges (min/max pairs) expected by the model for a given tensor.
         *
         * This function retrieves all target ranges from the `ranges` field in the modelinfo.
         * Each range represents the expected input range for a channel or dimension that the
         * model requires.
         *
         * The function reads from the `ranges` field: Semicolon-separated list of
         * comma-separated pairs (min,max) for per-channel target ranges
         * (e.g., "0.0,1.0;-1.0,1.0;0.0,1.0" for RGB channels with different normalization targets).
         *
         * The caller must free `mins` and `maxs` with `g_free()` when done.
         * @param tensor_name The name of the tensor
         * @returns `true` if range information was found and valid, `false` otherwise
         */
        get_target_ranges(tensor_name: string): [boolean, number[], number[]];
        /**
         * Retrieve the version string of the modelinfo file format.
         *
         * The version is in the format "Major.Minor" and is stored in the
         * [modelinfo] section of the modelinfo file.
         * @returns The version string (e.g., "1.0").    The caller must free this with `g_free()` when done.    Defaults to "1.0" if not specified.
         */
        get_version(): string;
    }

    /**
     * Handle containing data required to use gst_analytics_mtd API. This type
     * is generally expected to be allocated on the stack.
     * @gir-type Struct
     * @since 1.24
     */
    class Mtd {
        static $gtype: GObject.GType<Mtd>;

        // Fields

        id: number;

        // Static methods

        /**
         * Gets the string version of the name of this type of analytics data
         * @param type The type of analytics data
         */
        static type_get_name(type: MtdType): string;

        // Methods

        /**
         * Get instance id
         * @returns Id of `instance`
         */
        get_id(): number;
        /**
         * @returns opaque id of the type
         */
        get_mtd_type(): MtdType;
        /**
         * Get instance size
         * @returns Size (in bytes) of this instance or 0 on failure.
         */
        get_size(): number;
    }

    /**
     * This structure must be provided when registering a new type of Mtd. It must
     * have a static lifetime (never be freed).
     * @gir-type Struct
     * @since 1.24
     */
    class MtdImpl {
        static $gtype: GObject.GType<MtdImpl>;

        // Fields

        name: string;

        // Constructors

        constructor(
            properties?: Partial<{
                name: string;
            }>,
        );
    }

    /**
     * Handle containing data required to use gst_analytics_od_mtd APIs. This type
     * is generally expected to be allocated on the stack.
     * @gir-type Struct
     * @since 1.24
     */
    class ODMtd {
        static $gtype: GObject.GType<ODMtd>;

        // Fields

        id: number;

        // Static methods

        /**
         * Get an id that represent object-detection metadata type
         */
        static get_mtd_type(): MtdType;

        // Methods

        /**
         * Retrieve location confidence level.
         * @returns TRUE on success, otherwise FALSE.
         */
        get_confidence_lvl(): [boolean, number];
        /**
         * Retrieve location and location confidence level.
         * @returns TRUE on success, otherwise FALSE.
         */
        get_location(): [boolean, number, number, number, number, number];
        /**
         * Quark of the class of object associated with this location.
         * @returns Quark different from on success and 0 on failure.
         */
        get_obj_type(): GLib.Quark;
        /**
         * Retrieve oriented location and location confidence level.
         * @returns TRUE on success, otherwise FALSE.
         */
        get_oriented_location(): [boolean, number, number, number, number, number, number];
    }

    /**
     * An opaque {@link Gst.Meta} that can be used to hold various types of results
     * from analysis processes.
     *
     * The content should be accessed through the API.
     * @gir-type Struct
     * @since 1.24
     */
    abstract class RelationMeta {
        static $gtype: GObject.GType<RelationMeta>;

        // Methods

        /**
         * Add analytic classification metadata to `instance`.
         * @param confidence_levels confidence levels
         * @param class_quarks labels of this    classification. Order define index, quark, labels relation. This array    need to exist as long has this classification meta exist.
         * @returns Added successfully
         */
        add_cls_mtd(confidence_levels: number[], class_quarks: GLib.Quark[]): [boolean, ClsMtd];
        /**
         * @param type Quark of the object type
         * @param x x component of bounding box upper-left corner
         * @param y y component of bounding box upper-left corner
         * @param w bounding box width
         * @param h bounding box height
         * @param loc_conf_lvl confidence level on the object location
         * @returns Added successfully
         */
        add_od_mtd(
            type: GLib.Quark,
            x: number,
            y: number,
            w: number,
            h: number,
            loc_conf_lvl: number,
        ): [boolean, ODMtd | null];
        /**
         * Add analytic classification metadata to `instance`.
         * @param confidence_level confidence levels
         * @param class_quark labels of this    classification. Order define index, quark, labels relation. This array    need to exist as long has this classification meta exist.
         * @returns Added successfully
         */
        add_one_cls_mtd(confidence_level: number, class_quark: GLib.Quark): [boolean, ClsMtd];
        /**
         * @param type Quark of the object type
         * @param x x component of bounding box upper-left corner (pre-rotation)
         * @param y y component of bounding box upper-left corner (pre-rotation)
         * @param w bounding box width
         * @param h bounding box height
         * @param r bounding box rotation in radians <0, 2xPI>    with respect to the bounding box center    (the rotation value is a clock-wise angle)
         * @param loc_conf_lvl confidence level on the object location
         * @returns Added successfully
         */
        add_oriented_od_mtd(
            type: GLib.Quark,
            x: number,
            y: number,
            w: number,
            h: number,
            r: number,
            loc_conf_lvl: number,
        ): [boolean, ODMtd | null];
        /**
         * Add analytics segmentation metadata to `instance`. The rectangle (`masks_loc_x`,
         * `mask_loc_y`, `mask_loc_w`, `mask_loc_h`) define a area of the image that
         * correspond to the segmentation masks stored in `buffer`. For example if the
         * segmentation masks stored in `buffer` describe the segmented regions for the
         * entire image the rectangular area will be (`masks_loc_x` = 0, `masks_loc_y` = 0,
         * `masks_loc_w` = image_width, `masks_loc_h` = image_height).
         * @param buffer Buffer containing segmentation masks. `buffer` must have a {@link GstVideo.VideoMeta} attached
         * @param segmentation_type Segmentation type
         * @param region_ids Arrays of region ids present in the mask.
         * @param masks_loc_x Left coordinate of the rectangle corresponding to the masks in the image.
         * @param masks_loc_y Top coordinate of the rectangle corresponding to the masks in the image.
         * @param masks_loc_w Width of the rectangle corresponding to the masks in the image.
         * @param masks_loc_h Height of the rectangle corresponding to the masks in the image.
         * @returns TRUE if added successfully, otherwise FALSE
         */
        add_segmentation_mtd(
            buffer: Gst.Buffer,
            segmentation_type: SegmentationType | null,
            region_ids: number[],
            masks_loc_x: number,
            masks_loc_y: number,
            masks_loc_w: number,
            masks_loc_h: number,
        ): [boolean, SegmentationMtd];
        /**
         * Add a new {@link GstAnalytics.TensorMtd} holding a {@link GstAnalytics.Tensor} to `instance`. The
         * {@link GstAnalytics.Tensor} needs to be filled.
         * @param num_dims The number of dimensions in the tensor
         * @returns Added successfully
         */
        add_tensor_mtd(num_dims: number): [boolean, TensorMtd | null];
        /**
         * Add a new {@link GstAnalytics.TensorMtd} holding a {@link GstAnalytics.Tensor} to `instance`.
         * @param id semantically identify the contents of the tensor
         * @param data_type {@link GstAnalytics.TensorDataType} of tensor data
         * @param data {@link Gst.Buffer} holding tensor data
         * @param dims_order Indicate tensor dimension indexing order
         * @param dims size of tensor in each dimension.     A value of 0 means the dimension is dynamic.
         * @returns Added successfully
         */
        add_tensor_mtd_simple(
            id: GLib.Quark,
            data_type: TensorDataType | null,
            data: Gst.Buffer,
            dims_order: TensorDimOrder | null,
            dims: number[],
        ): [boolean, TensorMtd | null];
        /**
         * @param tracking_id Tracking id
         * @param tracking_first_seen Timestamp of first time the object was observed.
         * @returns Added successfully
         */
        add_tracking_mtd(tracking_id: number, tracking_first_seen: Gst.ClockTime): [boolean, TrackingMtd];
        /**
         * Verify existence of relation(s) between `an_meta_first_d` and
         * `an_meta_second_id` according to relation condition `cond_types`. It optionally
         * also return a shortest path of relations ( compliant with `cond_types`)
         * between `an_meta_first_id` and `an_meta_second_id`.
         * @param an_meta_first_id First analysis-meta
         * @param an_meta_second_id Second analysis-meta
         * @param max_relation_span Maximum number of relation between `an_meta_first_id` and    `an_meta_second_id`.    A value of 1 mean only only consider direct relation.
         * @param cond_types condition on relation types.
         * @returns TRUE if a relation between exit between `an_meta_first_id` and  `an_meta_second_id`, otherwise FALSE.
         */
        exist(
            an_meta_first_id: number,
            an_meta_second_id: number,
            max_relation_span: number,
            cond_types: RelTypes | null,
        ): [boolean, number[] | null];
        /**
         * Fill `rlt` if a analytics-meta with id == `an_meta_id` exist in `meta` instance,
         * otherwise this method return FALSE and `rlt` is invalid.
         * @param an_meta_id Id of {@link GstAnalytics.ClsMtd} instance to retrieve
         * @returns TRUE if successful.
         */
        get_cls_mtd(an_meta_id: number): [boolean, ClsMtd];
        /**
         * @param an_meta_id Id of GstAnalyticsMtd involved in relation to query
         * @param relation_type Type of relation to filter on.
         * @param type Type of GstAnalyticsMtd to filter on
         * @param state Opaque data to store state of the query.    If `state` point to NULL, the first analytics-metadata directly related    to `an_meta_id` will be set in `rlt_mtd`. Doesn't need to be free.
         * @returns TRUE if `rlt_mtd` was updated, other wise FALSE
         */
        get_direct_related(
            an_meta_id: number,
            relation_type: RelTypes | null,
            type: MtdType,
            state: any,
        ): [boolean, any, Mtd];
        /**
         * Fill `rlt` if a analytics-meta with id == `an_meta_id` exist in `meta` instance,
         * otherwise this method return FALSE and `rlt` is invalid.
         * @param an_meta_id Id of GstAnalyticsMtd instance to retrieve
         * @param type Filter on a specific type of analysis, use  `GST_ANALYTICS_MTD_TYPE_ANY` to match any type
         * @returns TRUE if successful.
         */
        get_mtd(an_meta_id: number, type: MtdType): [boolean, Mtd];
        /**
         * Fill `rlt` if a analytics-meta with id == `an_meta_id` exist in `meta` instance,
         * otherwise this method return FALSE and `rlt` is invalid.
         * @param an_meta_id Id of {@link GstAnalytics.ODMtd} instance to retrieve
         * @returns TRUE if successful.
         */
        get_od_mtd(an_meta_id: number): [boolean, ODMtd];
        /**
         * Get relations between first and second analysis-meta.
         * Ids (`an_meta_first_id` and `an_meta_second_id`) must be from a call to
         * `gst_analytics_mtd_get_id` (handle).
         * @param an_meta_first_id Id of first analysis-meta
         * @param an_meta_second_id Id of second  analysis-meta
         * @returns relation description between first and second analysis-meta.
         */
        get_relation(an_meta_first_id: number, an_meta_second_id: number): RelTypes;
        /**
         * Fill `rlt` if a analytics-meta with id == `an_meta_id` exist in `meta` instance,
         * otherwise this method return FALSE and `rlt` is invalid.
         * @param an_meta_id Id of {@link GstAnalytics.SegmentationMtd} instance to retrieve
         * @returns TRUE if successful.
         */
        get_segmentation_mtd(an_meta_id: number): [boolean, SegmentationMtd];
        /**
         * Fill `rlt` if a analytics-meta with id == `an_meta_id` exist in `meta` instance,
         * otherwise this method return FALSE and `rlt` is invalid.
         * @param an_meta_id Id of {@link GstAnalytics.TensorMtd} instance to retrieve
         * @returns TRUE if successful.
         */
        get_tensor_mtd(an_meta_id: number): [boolean, TensorMtd];
        /**
         * Fill `rlt` if a analytics-meta with id == `an_meta_id` exist in `meta` instance,
         * otherwise this method return FALSE and `rlt` is invalid.
         * @param an_meta_id Id of GstAnalyticsMtd instance to retrieve
         * @returns TRUE if successful.
         */
        get_tracking_mtd(an_meta_id: number): [boolean, TrackingMtd];
        /**
         * @param state Opaque data to store iteration state, initialize to NULL, no need to    free it.
         * @param type Type of GstAnalyticsMtd to iterate on or use  `GST_ANALYTICS_MTD_TYPE_ANY` for any.
         * @returns FALSE if end was reached and iteration is completed.
         */
        iterate(state: any | null, type: MtdType): [boolean, Mtd];
        /**
         * Sets the relation ({@link GstAnalytics.RelTypes}) between `an_meta_first` and
         *    `an_meta_second`.
         * Ids must have been obtained a call to
         *    `gst_analytics_mtd_get_id`(handle).
         * @param type a {@link GstAnalytics.RelTypes} defining relation between two analysis-meta
         * @param an_meta_first_id first meta id
         * @param an_meta_second_id second meta id
         * @returns TRUE on success and FALSE on failure.
         */
        set_relation(type: RelTypes | null, an_meta_first_id: number, an_meta_second_id: number): boolean;
    }

    /**
     * GstAnalyticsRelationMeta initialization parameters.
     * @gir-type Struct
     * @since 1.24
     */
    class RelationMetaInitParams {
        static $gtype: GObject.GType<RelationMetaInitParams>;

        // Fields

        initial_relation_order: number;
        initial_buf_size: number;

        // Constructors

        constructor(
            properties?: Partial<{
                initial_relation_order: number;
                initial_buf_size: number;
            }>,
        );
    }

    /**
     * This type of metadata holds information on which pixels belongs to
     *  a region of the image representing a type of object.
     *
     *  It supports two types of segmentation, semantic or instance:
     *   * Semantic: All objects of the same type have the same id
     *   * Instance: Each instance of an object has a different id
     *
     *  The results of the segmentation are stored in a {@link Gst.Buffer} that has a
     *  {@link GstVideo.VideoMeta} associated with it. This buffer is stored in the
     *  GstAnalyticsSegmentationMtd using
     *  `gst_analytics_relation_meta_add_segmentation_mtd`(). The {@link Gst.Buffer}
     *  containing the segmentation mask is image-like but the color values are
     *  arbitrary values, referred by region-id in this API, without meaning beyond
     *  specifying that two pixels in the original image with the same values in
     *  their corresponding mask value belong to the same region.
     *
     *  To further describe a region, the {@link GstAnalytics.SegmentationMtd} can be
     *  associated with other {@link GstAnalytics.Mtd}. Since region ids are
     *  generated by the segmentation process itself and are not always sequential,
     *  we use a map of indexes to region ids starting with 0 without discontinuity
     *  which facilitate N-to-N mapping with other {@link GstAnalytics.Mtd}. For
     *  example it can be associated with {@link GstAnalytics.ClsMtd} to describe the class
     *  of object matching the pixels of a segmented region.
     *
     *  Example: Associate Instance Segmentation with Classification
     *
     *  In the following example the segmentation process will fill segmask with
     *  values of 0 for background, 12 for the first region which correspond to a
     *  to a strawberry, 7 for the second region that also correspond to  a
     *  strawberry in the image and 31 for the third region that correspond to a
     *  leaf in the image.
     *  region_ids is fill during segmentation post-processing
     *
     *  region_ids:
     *  |region-index | region-id |
     *  |-------------|-----------|
     *  | 0           | 0         |
     *  | 1           | 12        |
     *  | 2           | 7         |
     *  | 3           | 31        |
     *
     *  region_count = 4
     *
     *  ``` C
     *    GstAnalyticsSegmentationMtd segmtd;
     *    GstAnalyticsClassificationMtd clsmtd;
     *    GstBuffer *segmask, *img;
     *    guint *region_ids;
     *    gsize region_count, class_count;
     *    gfloat *class_confidence;
     *    GQuark *classes;
     *
     *    ... (segmentation filling segmask based on img)
     *
     *    gst_analytics_relation_meta_add_segmentation_mtd (rmeta, segmask,
     *      GST_SEGMENTATION_TYPE_INSTANCE, region_count, region_ids, &segmtd);
     *    class_count = region_count;
     *
     *    ... (class-index must match and correspond to region-index)
     *    classes [0]  = g_quark_from_string ("background");
     *    classes [1]  = g_quark_from_string ("strawberry");
     *    classes [2] = g_quark_from_string ("strawberry");
     *    classes [3] = g_quark_from_string ("leaf");
     *
     *    ... (set confidence level for each class associated with a region
     *    ... where -1.0 mean undefined.)
     *    class_confidence [0] = -1.0;
     *    class_confidence [1] = 0.6;
     *    class_confidence [2] = 0.9;
     *    class_confidence [3] = 0.8;
     *
     *    gst_analytics_relation_meta_add_cls_mtd (rmeta, class_count,
     *      class_confidence, classes, &clsmtd);
     *
     *    gst_analytics_relation_meta_set_relation (rmeta,
     *     GST_ANALYTICS_REL_TYPE_RELATE_TO, segmtd.id, clsmtd.id);
     *  ```
     *
     *  Example: Associate Semantic Segmentation with Classification
     *  Assuming the same context as for Instance Segmentation above but instead
     *  a semantic segmentation is performed, therefore region-id-12 and region-id-7
     *  are now represented by the same region-id-12
     *
     *  region_ids: (here
     *  |region-index | region-id |
     *  |-------------|-----------|
     *  | 0           | 0         |
     *  | 1           | 12        |
     *  | 2           | 31        |
     *
     *  Code remain the same except that we set all confidence level to undefined
     *  (-1.0).
     *
     *  ```
     *    ... (class-index must match and correspond to region-index)
     *    classes [0]  = g_quark_from_string ("background");
     *    classes [1]  = g_quark_from_string ("strawberry");
     *    classes [2] = g_quark_from_string ("leaf");
     *
     *    ... (set confidence level for each class associated with a region
     *    ... where -1.0 mean undefined.)
     *    class_confidence [0] = -1.0;
     *    class_confidence [1] = -1.0;
     *    class_confidence [2] = -1.0;
     *
     *    gst_analytics_relation_meta_add_cls_mtd (rmeta, class_count,
     *      class_confidence, classes, &clsmtd);
     *
     *    gst_analytics_relation_meta_set_relation (rmeta,
     *     GST_ANALYTICS_REL_TYPE_RELATE_TO, segmtd.id, clsmtd.id);
     *  ```
     *
     *  Example: Retrieving class associated with a segmentation region-id-12
     *  This the typical case for an overlay as we visit the segmentation mask we
     *  we find region-id values
     *
     *  ```
     *  gsize idx;
     *  gst_analytics_segmentation_mtd_get_region_index (&segmtd, &idx, 12);
     *  gst_analytics_relation_meta_get_direct_related (rmeta, segmtd.id,
     *    GST_ANALYTICS_REL_TYPE_RELATE_TO, gst_analytics_cls_mtd_get_type (),
     *    NULL, &clsmtd);
     *
     *   GQuark region_class = gst_analytics_cls_mtd_get_quark (&segmtd, idx)
     *   ...
     *  ```
     *
     *  Since: 1.26
     * @gir-type Struct
     * @since 1.26
     */
    class SegmentationMtd {
        static $gtype: GObject.GType<SegmentationMtd>;

        // Fields

        id: number;

        // Static methods

        /**
         * Get an instance of {@link GstAnalytics.MtdType} that represent segmentation
         * metadata type.
         */
        static get_mtd_type(): MtdType;

        // Methods

        /**
         * Get segmentation mask data.
         * @returns Segmentation mask data stored in a {@link Gst.Buffer}
         */
        get_mask(): [Gst.Buffer, number, number, number, number];
        /**
         * Get the regions count.
         * @returns Number of regions segmented
         */
        get_region_count(): number;
        /**
         * Get id of the region corresponding to `index`, which should be
         * smaller than the return value of
         * `gst_analytics_segmentation_mtd_get_region_count()`
         * @param index Region index
         * @returns The region ID
         */
        get_region_id(index: number): number;
        /**
         * Get region index of the region identified by `id`.
         * @param id Region id
         * @returns TRUE if a region with `id` exist, otherwise FALSE
         */
        get_region_index(id: number): [boolean, number];
    }

    /**
     * Hold tensor data
     * @gir-type Struct
     * @since 1.26
     */
    class Tensor {
        static $gtype: GObject.GType<Tensor>;

        // Fields

        id: GLib.Quark;
        layout: TensorLayout;
        data_type: TensorDataType;
        dims_order: TensorDimOrder;
        num_dims: number;
        dims: number[];

        // Constructors

        constructor(num_dims: number);

        static alloc(num_dims: number): Tensor;

        static new_simple(
            id: GLib.Quark,
            data_type: TensorDataType,
            data: Gst.Buffer,
            dims_order: TensorDimOrder,
            dims: number[],
        ): Tensor;

        // Static methods

        /**
         * Get a string version of the data type
         * @param data_type a {@link GstAnalytics.TensorDataType}
         */
        static data_type_get_name(data_type: TensorDataType): string;

        // Methods

        /**
         * Validate the tensor whether it mathces the reading order, dimensions and the data type.
         * Validate whether the {@link Gst.Buffer} has enough size to hold the tensor data.
         * @param data_type The data type of the tensor
         * @param order The order of the tensor to read from the memory
         * @param dims An optional array of dimensions, where G_MAXSIZE means ANY.
         * @returns TRUE if the {@link GstAnalytics.Tensor} has the reading order from the memory matching `order`, dimensions matching `num_dims`, data type matching `data_type` Otherwise FALSE will be returned.
         */
        check_type(data_type: TensorDataType | null, order: TensorDimOrder | null, dims?: number[] | null): boolean;
        /**
         * Create a copy of `tensor`.
         * @returns a new {@link GstAnalytics.Tensor}
         */
        copy(): Tensor | null;
        /**
         * Free tensor
         */
        free(): void;
        /**
         * Gets the dimensions of the tensor.
         * @returns The dims array form the tensor
         */
        get_dims(): number[];
        /**
         * Sets the content of a {@link GstAnalytics.Tensor} of `dims_order` ROW_MAJOR or COLUMN_MAJOR and
         * with an interleaved layout. The {@link GstAnalytics.Tensor} must have exactly num_dims.
         *
         * For example, a two-dimensional tensor with 32 rows and 4 columns, `dims` would
         * be the two element array `[32, 4]`.
         * @param id semantically identify the contents of the tensor
         * @param data_type {@link GstAnalytics.TensorDataType} of tensor data
         * @param data {@link Gst.Buffer} holding tensor data
         * @param dims_order Indicate tensor dimension indexing order
         * @param dims size of tensor in each dimension.     A value of 0 means the dimension is dynamic.
         * @returns TRUE if it coudl be set correctly
         */
        set_simple(
            id: GLib.Quark,
            data_type: TensorDataType | null,
            data: Gst.Buffer,
            dims_order: TensorDimOrder | null,
            dims: number[],
        ): boolean;
    }

    /**
     * @gir-type Struct
     * @since 1.26
     */
    class TensorMeta {
        static $gtype: GObject.GType<TensorMeta>;

        // Fields

        num_tensors: number;

        // Methods

        /**
         * Retrieves a tensor from the {@link GstAnalytics.TensorMeta}, the index must be
         * smaller than {@link GstAnalytics.TensorMeta}.num_tensors
         * @param index The number of the tensor to get
         * @returns a GstTensor
         */
        get(index: number): Tensor;
        /**
         * Get the first tensor from the {@link GstAnalytics.TensorMeta} identified by `id`.
         * @param id A {@link GLib.Quark} identifying tensor-encoding
         * @returns a GstTensor with id matching `id`. Otherwise NULL will be returned.
         */
        get_by_id(id: GLib.Quark): Tensor | null;
        /**
         * Finds the first tensor with the requsted ID in the meta
         * @param id The tensor id to look for
         * @returns The index of the tensor inthe meta, or -1 if  its not found.
         */
        get_index_from_id(id: GLib.Quark): number;
        /**
         * Get the first tensor from the {@link GstAnalytics.TensorMeta} identified by
         * `tensor_id`, matching the reading order, dimensions and the data
         * type and optionally the dimensions.  Validate whether the
         * {@link Gst.Buffer} has enough size to hold the tensor data.
         * @param tensor_id A {@link GLib.Quark} identifying the tensor-encoding
         * @param data_type The data type of the tensor
         * @param order The order of the tensor to read from the memory
         * @param dims An optional array of dimensions, where G_MAXSIZE means ANY.
         * @returns a matching {@link GstAnalytics.Tensor}, otherwise NULL
         */
        get_typed_tensor(
            tensor_id: GLib.Quark,
            data_type: TensorDataType | null,
            order: TensorDimOrder | null,
            dims?: number[] | null,
        ): Tensor | null;
        /**
         * Sets tensors into the {@link GstAnalytics.TensorMeta}
         * @param tensors An array of poiners to {@link GstAnalytics.Tensor}
         */
        set(tensors: Tensor[]): void;
    }

    /**
     * This type of metadata holds a tensor. It can be used to store tensor as
     * analytics-meta for their ability to relate to each others. For example
     * in a multi-model analytics pipeline, we sometime have one model input match
     * the output of the other model. In this context it can be useful to keep the
     * ancestry relation between first tensor, output of first inference, and the
     * second tensor, output from second inference. Another use-case for
     * {@link GstAnalytics.TensorMtd} is to transport tensors from inference element to a
     * post-processing element using a computing graph framework, like ONNX.
     * Essentially {@link GstAnalytics.TensorMtd} is a GstBuffer encapsulated by a
     * analytics-meta with additional parameters describing the tensor.
     *
     * Since 1.28
     * @gir-type Struct
     * @since 1.28
     */
    class TensorMtd {
        static $gtype: GObject.GType<TensorMtd>;

        // Fields

        id: number;

        // Static methods

        /**
         * Get an id that represent tensor metadata type
         */
        static get_mtd_type(): MtdType;

        // Methods

        /**
         * Get tensor
         * @returns a {@link GstAnalytics.Tensor}
         */
        get_tensor(): Tensor;
    }

    /**
     * Store information on results of object tracking
     * @gir-type Struct
     * @since 1.24
     */
    class TrackingMtd {
        static $gtype: GObject.GType<TrackingMtd>;

        // Fields

        id: number;

        // Static methods

        static get_mtd_type(): MtdType;

        // Methods

        /**
         * Retrieve tracking information.
         * @returns Successfully retrieved info.
         */
        get_info(): [boolean, number, Gst.ClockTime, Gst.ClockTime, boolean];
        /**
         * @returns Update successful
         */
        set_lost(): boolean;
        /**
         * @param last_seen Timestamp of last time this object was tracked
         */
        update_last_seen(last_seen: Gst.ClockTime): boolean;
    }

    /**
     * Type of analytics meta data
     * @gir-type Alias
     */
    type MtdType = never;
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

export default GstAnalytics;

// END
