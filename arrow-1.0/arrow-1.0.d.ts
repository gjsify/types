/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

/**
 * Arrow-1.0
 */

export namespace Arrow {
    /**
     * They are corresponding to `arrow::Compression::type` values.
     */
    enum CompressionType {
        /**
         * Not compressed.
         */
        UNCOMPRESSED,
        /**
         * Snappy compression.
         */
        SNAPPY,
        /**
         * gzip compression.
         */
        GZIP,
        /**
         * Brotli compression.
         */
        BROTLI,
        /**
         * Zstandard compression.
         */
        ZSTD,
        /**
         * LZ4 compression.
         */
        LZ4,
        /**
         * LZO compression.
         */
        LZO,
        /**
         * bzip2 compression.
         */
        BZ2,
    }
    /**
     * They correspond to the values of `arrow::compute::CountOptions::CountMode`.
     */
    enum CountMode {
        /**
         * Only non-null values will be counted.
         */
        ONLY_VALID,
        /**
         * Only null values will be counted.
         */
        ONLY_NULL,
        /**
         * All will be counted.
         */
        ALL,
    }
    /**
     * The error codes are used by all arrow-glib functions.
     *
     * They are corresponding to `arrow::Status` values.
     */
    class Error extends GLib.Error {
        static $gtype: GObject.GType<Error>;

        // Static fields of Arrow.Error

        /**
         * Out of memory error.
         */
        static OUT_OF_MEMORY: number;
        /**
         * Key error.
         */
        static KEY: number;
        /**
         * Type error.
         */
        static TYPE: number;
        /**
         * Invalid value error.
         */
        static INVALID: number;
        /**
         * IO error.
         */
        static IO: number;
        /**
         * Capacity error.
         */
        static CAPACITY: number;
        /**
         * Index error.
         */
        static INDEX: number;
        /**
         * Unknown error.
         */
        static UNKNOWN: number;
        /**
         * The feature is not implemented.
         */
        static NOT_IMPLEMENTED: number;
        /**
         * Serialization error.
         */
        static SERIALIZATION: number;
        /**
         * Error generating code for expression evaluation
         *   in Gandiva.
         */
        static CODE_GENERATION: number;
        /**
         * Validation errors in expression given for code generation.
         */
        static EXPRESSION_VALIDATION: number;
        /**
         * Execution error while evaluating the expression against a record batch.
         */
        static EXECUTION: number;
        /**
         * Item already exists error.
         */
        static ALREADY_EXISTS: number;

        // Constructors of Arrow.Error

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Own static methods of Arrow.Error

        static quark(): GLib.Quark;
    }

    /**
     * They are corresponding to `arrow::io::FileMode::type` values.
     */
    enum FileMode {
        /**
         * For read.
         */
        READ,
        /**
         * For write.
         */
        WRITE,
        /**
         * For read-write.
         */
        READWRITE,
    }
    /**
     * They are corresponding to `arrow::fs::FileType` values.
     */
    enum FileType {
        /**
         * Entry is not found
         */
        NOT_FOUND,
        /**
         * Entry exists but its type is unknown
         */
        UNKNOWN,
        /**
         * Entry is a regular file
         */
        FILE,
        /**
         * Entry is a directory
         */
        DIR,
    }
    /**
     * They are corresponding to
     * `arrow::compute::FilterOptions::NullSelectionBehavior` values.
     */
    enum FilterNullSelectionBehavior {
        /**
         * Filtered value will be removed in the output.
         */
        DROP,
        /**
         * Filtered value will be null in the output.
         */
        EMIT_NULL,
    }
    /**
     * They are corresponding to `arrow::IntervalType::type` values.
     *
     * Since 7.0.0
     */
    enum IntervalType {
        /**
         * A number of months.
         */
        MONTH,
        /**
         * A number of days and
         *   milliseconds (fraction of day).
         */
        DAY_TIME,
        /**
         * A number of months, days and
         *   nanoseconds between two dates.
         */
        MONTH_DAY_NANO,
    }
    /**
     * They are corresponding to `arrow::json::UnexpectedFieldBehavior` values.
     */
    enum JSONReadUnexpectedFieldBehavior {
        /**
         * Ignore other fields.
         */
        IGNORE,
        /**
         * Return error.
         */
        ERROR,
        /**
         * Infer a type.
         */
        INFER_TYPE,
    }
    /**
     * They correspond to the values of `arrow::compute::JoinType`.
     */
    enum JoinType {
        LEFT_SEMI,
        RIGHT_SEMI,
        LEFT_ANTI,
        RIGHT_ANTI,
        INNER,
        LEFT_OUTER,
        RIGHT_OUTER,
        FULL_OUTER,
    }
    /**
     * They are corresponding to `arrow::ipc::MetadataVersion::type`
     * values.
     */
    enum MetadataVersion {
        /**
         * Version 1.
         */
        V1,
        /**
         * Version 2.
         */
        V2,
        /**
         * Version 3.
         */
        V3,
    }
    /**
     * They are corresponding to `arrow::compute::NullPlacement` values.
     */
    enum NullPlacement {
        /**
         * Place nulls and NaNs before any non-null values.
         *   NaNs will come after nulls.
         */
        AT_START,
        /**
         * Place nulls and NaNs after any non-null values.
         *   NaNs will come before nulls.
         */
        AT_END,
    }
    /**
     * They correspond to the values of
     * `arrow::compute::QuantileOptions::Interpolation`.
     */
    enum QuantileInterpolation {
        /**
         * Linear.
         */
        LINEAR,
        /**
         * Lower.
         */
        LOWER,
        /**
         * Higher.
         */
        HIGHER,
        /**
         * Nearest.
         */
        NEAREST,
        /**
         * Midpoint.
         */
        MIDPOINT,
    }
    enum RankTiebreaker {
        MIN,
        MAX,
        FIRST,
        DENSE,
    }
    /**
     * They correspond to the values of `arrow::compute::RoundMode`.
     */
    enum RoundMode {
        DOWN,
        UP,
        /**
         * Get the integral part without fractional digits (aka "trunc")
         * `GARROW_ROUND_TOWARDS_INFINITY,`
         *   Round negative values with `GARROW_ROUND_MODE_DOWN` rule
         *   and positive values with UP rule (aka "away from zero")
         * `GARROW_ROUND_HALF_DOWN,`
         *   Round ties with `GARROW_ROUND_MODE_DOWN` rule
         *   (also called "round half towards negative infinity")
         * `GARROW_ROUND_HALF_UP,`
         *   Round ties with `GARROW_ROUND_MODE_UP` rule
         *   (also called "round half towards positive infinity")
         * `GARROW_ROUND_HALF_TOWARDS_ZERO,`
         *   Round ties with GARROW_ROUND_MODE_TOWARDS_ZERO rule
         *   (also called "round half away from infinity")
         * `GARROW_ROUND_HALF_TOWARDS_INFINITY,`
         *   Round ties with GARROW_ROUND_MODE_TOWARDS_INFINITY rule
         *   (also called "round half away from zero")
         * `GARROW_ROUND_HALF_TO_EVEN,`
         *   Round ties to nearest even integer
         * `GARROW_ROUND_HALF_TO_ODD,`
         *   Round ties to nearest odd integer
         */
        TOWARDS_ZERO,
        TOWARDS_INFINITY,
        HALF_DOWN,
        HALF_UP,
        HALF_TOWARDS_ZERO,
        HALF_TOWARDS_INFINITY,
        HALF_TO_EVEN,
        HALF_TO_ODD,
    }
    /**
     * They are corresponding to `arrow::fs::S3LogLevel` values.
     */
    enum S3LogLevel {
        /**
         * Off.
         */
        OFF,
        /**
         * Fatal. This is the default.
         */
        FATAL,
        /**
         * Error.
         */
        ERROR,
        /**
         * Warn.
         */
        WARN,
        /**
         * Info.
         */
        INFO,
        /**
         * Debug.
         */
        DEBUG,
        /**
         * Trace.
         */
        TRACE,
    }
    /**
     * They are corresponding to `arrow::compute::SortOrder` values.
     */
    enum SortOrder {
        /**
         * Sort in ascending order.
         */
        ASCENDING,
        /**
         * Sort in descending order.
         */
        DESCENDING,
    }
    /**
     * They are corresponding to `arrow::TimeUnit::type` values.
     */
    enum TimeUnit {
        /**
         * Second.
         */
        SECOND,
        /**
         * Millisecond.
         */
        MILLI,
        /**
         * Microsecond.
         */
        MICRO,
        /**
         * Nanosecond.
         */
        NANO,
    }
    /**
     * They are corresponding to `arrow::Type::type` values.
     */
    enum Type {
        /**
         * A degenerate NULL type represented as 0 bytes/bits.
         */
        NA,
        /**
         * A boolean value represented as 1-bit.
         */
        BOOLEAN,
        /**
         * Little-endian 8-bit unsigned integer.
         */
        UINT8,
        /**
         * Little-endian 8-bit signed integer.
         */
        INT8,
        /**
         * Little-endian 16-bit unsigned integer.
         */
        UINT16,
        /**
         * Little-endian 16-bit signed integer.
         */
        INT16,
        /**
         * Little-endian 32-bit unsigned integer.
         */
        UINT32,
        /**
         * Little-endian 32-bit signed integer.
         */
        INT32,
        /**
         * Little-endian 64-bit unsigned integer.
         */
        UINT64,
        /**
         * Little-endian 64-bit signed integer.
         */
        INT64,
        /**
         * 2-byte floating point value.
         */
        HALF_FLOAT,
        /**
         * 4-byte floating point value.
         */
        FLOAT,
        /**
         * 8-byte floating point value.
         */
        DOUBLE,
        /**
         * UTF-8 variable-length string.
         */
        STRING,
        /**
         * Variable-length bytes (no guarantee of UTF-8-ness).
         */
        BINARY,
        /**
         * Fixed-size binary. Each value occupies
         *   the same number of bytes.
         */
        FIXED_SIZE_BINARY,
        /**
         * int32 days since the UNIX epoch.
         */
        DATE32,
        /**
         * int64 milliseconds since the UNIX epoch.
         */
        DATE64,
        /**
         * Exact timestamp encoded with int64 since UNIX epoch.
         *   Default unit millisecond.
         */
        TIMESTAMP,
        /**
         * Exact time encoded with int32, supporting seconds or milliseconds
         */
        TIME32,
        /**
         * Exact time encoded with int64, supporting micro- or nanoseconds
         */
        TIME64,
        /**
         * YEAR_MONTH interval in SQL style.
         */
        MONTH_INTERVAL,
        /**
         * DAY_TIME interval in SQL style.
         */
        DAY_TIME_INTERVAL,
        /**
         * Precision- and scale-based decimal
         *   type with 128-bit. Storage type depends on the parameters.
         */
        DECIMAL128,
        /**
         * Precision- and scale-based decimal
         *   type with 256-bit. Storage type depends on the parameters.
         */
        DECIMAL256,
        /**
         * A list of some logical data type.
         */
        LIST,
        /**
         * Struct of logical types.
         */
        STRUCT,
        /**
         * Sparse unions of logical types.
         */
        SPARSE_UNION,
        /**
         * Dense unions of logical types.
         */
        DENSE_UNION,
        /**
         * Dictionary aka Category type.
         */
        DICTIONARY,
        /**
         * A repeated struct logical type.
         */
        MAP,
        /**
         * Custom data type, implemented by user.
         */
        EXTENSION,
        /**
         * Fixed size list of some logical type.
         */
        FIXED_SIZE_LIST,
        /**
         * Measure of elapsed time in either seconds,
         *   milliseconds, microseconds or nanoseconds.
         */
        DURATION,
        /**
         * 64bit offsets UTF-8 variable-length string.
         */
        LARGE_STRING,
        /**
         * 64bit offsets Variable-length bytes (no guarantee of UTF-8-ness).
         */
        LARGE_BINARY,
        /**
         * A list of some logical data type with 64-bit offsets.
         */
        LARGE_LIST,
        /**
         * MONTH_DAY_NANO interval in SQL style.
         */
        MONTH_DAY_NANO_INTERVAL,
        /**
         * Run-end encoded data.
         */
        RUN_END_ENCODED,
    }
    /**
     * They correspond to the values of `arrow::compute::Utf8NormalizeOptions::Form`.
     */
    enum UTF8NormalizeForm {
        /**
         * Normalization Form Canonical Composition.
         */
        NFC,
        /**
         * Normalization Form Compatibility
         *   Composition.
         */
        NFKC,
        /**
         * Normalization Form Canonical Decomposition.
         */
        NFD,
        /**
         * Normalization Form Compatibility
         *   Decomposition.
         */
        NFKD,
    }
    /**
     * The major version.
     */
    const VERSION_MAJOR: number;
    /**
     * The micro version.
     */
    const VERSION_MICRO: number;
    /**
     * The minor version.
     */
    const VERSION_MINOR: number;
    /**
     * The version tag. Normally, it's an empty string. It's "SNAPSHOT"
     * for snapshot version.
     */
    const VERSION_TAG: string;
    function error_quark(): GLib.Quark;
    /**
     * Finalize the S3 APIs.
     * @returns %TRUE on success, %FALSE on error.
     */
    function s3_finalize(): boolean;
    /**
     * Normally, you don't need to call this function because the S3 APIs
     * are initialized with the default options automatically. If you want
     * to call this function, you must call this function before you use
     * any #GArrowS3FileSystem related APIs.
     * @param options Options to initialize the S3 APIs.
     * @returns %TRUE on success, %FALSE on error.
     */
    function s3_initialize(options?: S3GlobalOptions | null): boolean;
    function s3_is_enabled(): boolean;
    module AggregateNodeOptions {
        // Constructor properties interface

        interface ConstructorProps extends ExecuteNodeOptions.ConstructorProps {}
    }

    class AggregateNodeOptions extends ExecuteNodeOptions {
        static $gtype: GObject.GType<AggregateNodeOptions>;

        // Constructors of Arrow.AggregateNodeOptions

        constructor(properties?: Partial<AggregateNodeOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](aggregations: Aggregation[], keys?: string[] | null): AggregateNodeOptions;
    }

    module Aggregation {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            function: string;
            input: string;
            options: FunctionOptions;
            output: string;
        }
    }

    class Aggregation extends GObject.Object {
        static $gtype: GObject.GType<Aggregation>;

        // Own properties of Arrow.Aggregation

        /**
         * The function name to aggregate.
         */
        get function(): string;
        /**
         * The input field name of aggregate function.
         */
        get input(): string;
        /**
         * The options of aggregate function.
         */
        get options(): FunctionOptions;
        /**
         * The output field name of aggregate function.
         */
        get output(): string;

        // Constructors of Arrow.Aggregation

        constructor(properties?: Partial<Aggregation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](_function: string, options: FunctionOptions | null, input: string, output: string): Aggregation;
    }

    module Array {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            array: any;
            buffer1: Buffer;
            buffer2: Buffer;
            null_bitmap: Buffer;
            nullBitmap: Buffer;
            parent: Array;
            value_data_type: DataType;
            valueDataType: DataType;
        }
    }

    abstract class Array extends GObject.Object {
        static $gtype: GObject.GType<Array>;

        // Own properties of Arrow.Array

        set array(val: any);
        get buffer1(): Buffer;
        get buffer2(): Buffer;
        get null_bitmap(): Buffer;
        get nullBitmap(): Buffer;
        get parent(): Array;
        get value_data_type(): DataType;
        get valueDataType(): DataType;

        // Constructors of Arrow.Array

        constructor(properties?: Partial<Array.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own static methods of Arrow.Array

        static ['import'](c_abi_array: any, data_type: DataType): Array | null;

        // Own methods of Arrow.Array

        cast(target_data_type: DataType, options?: CastOptions | null): Array | null;
        concatenate(other_arrays: Array[]): Array | null;
        count(options?: CountOptions | null): number;
        count_values(): StructArray | null;
        dictionary_encode(): DictionaryArray | null;
        diff_unified(other_array: Array): string | null;
        equal(other_array: Array): boolean;
        equal_approx(other_array: Array): boolean;
        equal_options(other_array: Array, options?: EqualOptions | null): boolean;
        equal_range(
            start_index: number,
            other_array: Array,
            other_start_index: number,
            end_index: number,
            options?: EqualOptions | null,
        ): boolean;
        ['export'](): [boolean, any, any];
        filter(filter: BooleanArray, options?: FilterOptions | null): Array | null;
        get_length(): number;
        get_n_nulls(): number;
        get_null_bitmap(): Buffer | null;
        get_offset(): number;
        get_value_data_type(): DataType;
        get_value_type(): Type;
        is_in(right: Array): BooleanArray | null;
        is_in_chunked_array(right: ChunkedArray): BooleanArray | null;
        is_null(i: number): boolean;
        is_valid(i: number): boolean;
        run_end_encode(options?: RunEndEncodeOptions | null): RunEndEncodedArray | null;
        slice(offset: number, length: number): Array;
        sort_indices(order: SortOrder): UInt64Array | null;
        sort_to_indices(): UInt64Array | null;
        take(indices: Array, options?: TakeOptions | null): Array | null;
        take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null;
        to_string(): string | null;
        unique(): Array | null;
        view(return_type: DataType): Array | null;
    }

    module ArrayBuilder {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            array_builder: any;
            arrayBuilder: any;
        }
    }

    abstract class ArrayBuilder extends GObject.Object {
        static $gtype: GObject.GType<ArrayBuilder>;

        // Own properties of Arrow.ArrayBuilder

        set array_builder(val: any);
        set arrayBuilder(val: any);

        // Constructors of Arrow.ArrayBuilder

        constructor(properties?: Partial<ArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Arrow.ArrayBuilder

        append_empty_value(): boolean;
        /**
         * Append multiple empty values at once. It's more efficient than multiple
         * garrow_array_builder_append_empty_value() calls.
         * @param n The number of null values to be appended.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_empty_values(n: number): boolean;
        append_null(): boolean;
        /**
         * Append multiple nulls at once. It's more efficient than multiple
         * garrow_array_builder_append_null() calls.
         * @param n The number of null values to be appended.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_nulls(n: number): boolean;
        finish(): Array;
        get_capacity(): number;
        get_child(i: number): ArrayBuilder;
        get_children(): ArrayBuilder[];
        get_length(): number;
        get_n_nulls(): number;
        get_value_data_type(): DataType;
        get_value_type(): Type;
        reserve(additional_capacity: number): boolean;
        reset(): void;
        resize(capacity: number): boolean;
    }

    module ArrayDatum {
        // Constructor properties interface

        interface ConstructorProps extends Datum.ConstructorProps {
            value: Array;
        }
    }

    class ArrayDatum extends Datum {
        static $gtype: GObject.GType<ArrayDatum>;

        // Own properties of Arrow.ArrayDatum

        get value(): Array;

        // Constructors of Arrow.ArrayDatum

        constructor(properties?: Partial<ArrayDatum.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: Array): ArrayDatum;
    }

    module ArraySortOptions {
        // Constructor properties interface

        interface ConstructorProps extends FunctionOptions.ConstructorProps {
            order: SortOrder;
        }
    }

    class ArraySortOptions extends FunctionOptions {
        static $gtype: GObject.GType<ArraySortOptions>;

        // Own properties of Arrow.ArraySortOptions

        /**
         * How to order values.
         */
        get order(): SortOrder;
        set order(val: SortOrder);

        // Constructors of Arrow.ArraySortOptions

        constructor(properties?: Partial<ArraySortOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](order: SortOrder): ArraySortOptions;

        // Own methods of Arrow.ArraySortOptions

        equal(other_options: ArraySortOptions): boolean;
        // Conflicted with Arrow.FunctionOptions.equal
        equal(...args: never[]): any;
    }

    module BaseBinaryScalar {
        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {
            value: Buffer;
        }
    }

    abstract class BaseBinaryScalar extends Scalar {
        static $gtype: GObject.GType<BaseBinaryScalar>;

        // Own properties of Arrow.BaseBinaryScalar

        /**
         * The value of the scalar.
         */
        set value(val: Buffer);

        // Constructors of Arrow.BaseBinaryScalar

        constructor(properties?: Partial<BaseBinaryScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Arrow.BaseBinaryScalar

        get_value(): Buffer;
    }

    module BaseListScalar {
        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {
            value: Array;
        }
    }

    abstract class BaseListScalar extends Scalar {
        static $gtype: GObject.GType<BaseListScalar>;

        // Own properties of Arrow.BaseListScalar

        /**
         * The value of the scalar.
         */
        set value(val: Array);

        // Constructors of Arrow.BaseListScalar

        constructor(properties?: Partial<BaseListScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Arrow.BaseListScalar

        get_value(): Array;
    }

    module BinaryArray {
        // Constructor properties interface

        interface ConstructorProps extends Array.ConstructorProps {}
    }

    class BinaryArray extends Array {
        static $gtype: GObject.GType<BinaryArray>;

        // Constructors of Arrow.BinaryArray

        constructor(properties?: Partial<BinaryArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            length: number,
            value_offsets: Buffer,
            value_data: Buffer,
            null_bitmap: Buffer | null,
            n_nulls: number,
        ): BinaryArray;

        // Own methods of Arrow.BinaryArray

        get_buffer(): Buffer;
        get_data_buffer(): Buffer;
        get_offsets_buffer(): Buffer;
        get_value(i: number): GLib.Bytes;
    }

    module BinaryArrayBuilder {
        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class BinaryArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<BinaryArrayBuilder>;

        // Constructors of Arrow.BinaryArrayBuilder

        constructor(properties?: Partial<BinaryArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): BinaryArrayBuilder;

        // Own methods of Arrow.BinaryArrayBuilder

        append(value: Uint8Array | string): boolean;
        append_value(value: Uint8Array | string): boolean;
        append_value_bytes(value: GLib.Bytes | Uint8Array): boolean;
        /**
         * Append multiple values at once. It's more efficient than multiple
         * `append` and `append_null` calls.
         * @param values The array of #GBytes.
         * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth @is_valids is %TRUE, the Nth @values is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_values(values: (GLib.Bytes | Uint8Array)[], is_valids?: boolean[] | null): boolean;
    }

    module BinaryDataType {
        // Constructor properties interface

        interface ConstructorProps extends DataType.ConstructorProps {}
    }

    class BinaryDataType extends DataType {
        static $gtype: GObject.GType<BinaryDataType>;

        // Constructors of Arrow.BinaryDataType

        constructor(properties?: Partial<BinaryDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): BinaryDataType;
    }

    module BinaryDictionaryArrayBuilder {
        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class BinaryDictionaryArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<BinaryDictionaryArrayBuilder>;

        // Constructors of Arrow.BinaryDictionaryArrayBuilder

        constructor(properties?: Partial<BinaryDictionaryArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): BinaryDictionaryArrayBuilder;

        // Own methods of Arrow.BinaryDictionaryArrayBuilder

        append_array(array: BinaryArray): boolean;
        /**
         * Append dictionary indices directly without modifying the internal memo.
         * @param values The array of indices.
         * @param is_valids The array of   %TRUE or %FALSE that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_indices(values: number[], is_valids?: boolean[] | null): boolean;
        append_value(value: Uint8Array | string): boolean;
        append_value_bytes(value: GLib.Bytes | Uint8Array): boolean;
        finish_delta(): [boolean, Array, Array];
        get_dictionary_length(): number;
        insert_memo_values(values: BinaryArray): boolean;
        /**
         * Reset and also clear accumulated dictionary values in memo table.
         */
        reset_full(): void;
    }

    module BinaryScalar {
        // Constructor properties interface

        interface ConstructorProps extends BaseBinaryScalar.ConstructorProps {}
    }

    class BinaryScalar extends BaseBinaryScalar {
        static $gtype: GObject.GType<BinaryScalar>;

        // Constructors of Arrow.BinaryScalar

        constructor(properties?: Partial<BinaryScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: Buffer): BinaryScalar;
    }

    module BooleanArray {
        // Constructor properties interface

        interface ConstructorProps extends PrimitiveArray.ConstructorProps {}
    }

    class BooleanArray extends PrimitiveArray {
        static $gtype: GObject.GType<BooleanArray>;

        // Constructors of Arrow.BooleanArray

        constructor(properties?: Partial<BooleanArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): BooleanArray;

        // Own methods of Arrow.BooleanArray

        and(right: BooleanArray): BooleanArray;
        get_value(i: number): boolean;
        get_values(): boolean[];
        invert(): BooleanArray;
        or(right: BooleanArray): BooleanArray;
        xor(right: BooleanArray): BooleanArray;
    }

    module BooleanArrayBuilder {
        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class BooleanArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<BooleanArrayBuilder>;

        // Constructors of Arrow.BooleanArrayBuilder

        constructor(properties?: Partial<BooleanArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): BooleanArrayBuilder;

        // Own methods of Arrow.BooleanArrayBuilder

        append(value: boolean): boolean;
        append_value(value: boolean): boolean;
        /**
         * Append multiple values at once. It's more efficient than multiple
         * `append` and `append_null` calls.
         * @param values The array of boolean.
         * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_values(values: boolean[], is_valids?: boolean[] | null): boolean;
    }

    module BooleanDataType {
        // Constructor properties interface

        interface ConstructorProps extends FixedWidthDataType.ConstructorProps {}
    }

    class BooleanDataType extends FixedWidthDataType {
        static $gtype: GObject.GType<BooleanDataType>;

        // Constructors of Arrow.BooleanDataType

        constructor(properties?: Partial<BooleanDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): BooleanDataType;
    }

    module BooleanScalar {
        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class BooleanScalar extends Scalar {
        static $gtype: GObject.GType<BooleanScalar>;

        // Constructors of Arrow.BooleanScalar

        constructor(properties?: Partial<BooleanScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: boolean): BooleanScalar;

        // Own methods of Arrow.BooleanScalar

        get_value(): boolean;
    }

    module Buffer {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffer: any;
            data: GLib.Bytes;
            parent: Buffer;
        }
    }

    class Buffer extends GObject.Object {
        static $gtype: GObject.GType<Buffer>;

        // Own properties of Arrow.Buffer

        set buffer(val: any);
        set data(val: GLib.Bytes);
        get parent(): Buffer;

        // Constructors of Arrow.Buffer

        constructor(properties?: Partial<Buffer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data: Uint8Array | string): Buffer;

        static new_bytes(data: GLib.Bytes | Uint8Array): Buffer;

        // Own methods of Arrow.Buffer

        copy(start: number, size: number): Buffer | null;
        equal(other_buffer: Buffer): boolean;
        equal_n_bytes(other_buffer: Buffer, n_bytes: number): boolean;
        get_capacity(): number;
        get_data(): GLib.Bytes;
        // Conflicted with GObject.Object.get_data
        get_data(...args: never[]): any;
        get_mutable_data(): GLib.Bytes | null;
        get_parent(): Buffer | null;
        get_size(): number;
        is_mutable(): boolean;
        slice(offset: number, size: number): Buffer;
    }

    module BufferInputStream {
        // Constructor properties interface

        interface ConstructorProps
            extends SeekableInputStream.ConstructorProps,
                File.ConstructorProps,
                Readable.ConstructorProps {
            buffer: Buffer;
        }
    }

    class BufferInputStream extends SeekableInputStream implements File, Readable {
        static $gtype: GObject.GType<BufferInputStream>;

        // Own properties of Arrow.BufferInputStream

        get buffer(): Buffer;

        // Constructors of Arrow.BufferInputStream

        constructor(properties?: Partial<BufferInputStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](buffer: Buffer): BufferInputStream;

        // Own methods of Arrow.BufferInputStream

        get_buffer(): Buffer;

        // Inherited methods
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module BufferOutputStream {
        // Constructor properties interface

        interface ConstructorProps
            extends OutputStream.ConstructorProps,
                File.ConstructorProps,
                Writable.ConstructorProps {}
    }

    /**
     * It wraps `arrow::io::BufferOutputStream`.
     */
    class BufferOutputStream extends OutputStream implements File, Writable {
        static $gtype: GObject.GType<BufferOutputStream>;

        // Constructors of Arrow.BufferOutputStream

        constructor(properties?: Partial<BufferOutputStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](buffer: ResizableBuffer): BufferOutputStream;

        // Inherited methods
        close(): boolean;
        get_mode(): FileMode;
        is_closed(): boolean;
        tell(): number;
        /**
         * It ensures writing all data on memory to storage.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        flush(): boolean;
        write(data: Uint8Array | string): boolean;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module CSVReadOptions {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            allow_newlines_in_values: boolean;
            allowNewlinesInValues: boolean;
            allow_null_strings: boolean;
            allowNullStrings: boolean;
            block_size: number;
            blockSize: number;
            check_utf8: boolean;
            checkUtf8: boolean;
            delimiter: number;
            escape_character: number;
            escapeCharacter: number;
            generate_column_names: boolean;
            generateColumnNames: boolean;
            ignore_empty_lines: boolean;
            ignoreEmptyLines: boolean;
            is_double_quoted: boolean;
            isDoubleQuoted: boolean;
            is_escaped: boolean;
            isEscaped: boolean;
            is_quoted: boolean;
            isQuoted: boolean;
            n_skip_rows: number;
            nSkipRows: number;
            quote_character: number;
            quoteCharacter: number;
            use_threads: boolean;
            useThreads: boolean;
        }
    }

    class CSVReadOptions extends GObject.Object {
        static $gtype: GObject.GType<CSVReadOptions>;

        // Own properties of Arrow.CSVReadOptions

        /**
         * Whether values are allowed to contain CR (0x0d) and LF (0x0a) characters.
         */
        get allow_newlines_in_values(): boolean;
        set allow_newlines_in_values(val: boolean);
        /**
         * Whether values are allowed to contain CR (0x0d) and LF (0x0a) characters.
         */
        get allowNewlinesInValues(): boolean;
        set allowNewlinesInValues(val: boolean);
        /**
         * Whether string / binary columns can have null values.
         * If %TRUE, then strings in "null_values" are considered null for string columns.
         * If %FALSE, then all strings are valid string values.
         */
        get allow_null_strings(): boolean;
        set allow_null_strings(val: boolean);
        /**
         * Whether string / binary columns can have null values.
         * If %TRUE, then strings in "null_values" are considered null for string columns.
         * If %FALSE, then all strings are valid string values.
         */
        get allowNullStrings(): boolean;
        set allowNullStrings(val: boolean);
        /**
         * Block size we request from the IO layer; also determines the size
         * of chunks when #GArrowCSVReadOptions:use-threads is %TRUE.
         */
        get block_size(): number;
        set block_size(val: number);
        /**
         * Block size we request from the IO layer; also determines the size
         * of chunks when #GArrowCSVReadOptions:use-threads is %TRUE.
         */
        get blockSize(): number;
        set blockSize(val: number);
        /**
         * Whether to check UTF8 validity of string columns.
         */
        get check_utf8(): boolean;
        set check_utf8(val: boolean);
        /**
         * Whether to check UTF8 validity of string columns.
         */
        get checkUtf8(): boolean;
        set checkUtf8(val: boolean);
        /**
         * Field delimiter character.
         */
        get delimiter(): number;
        set delimiter(val: number);
        /**
         * Escaping character. This is used only when
         * #GArrowCSVReadOptions:is-escaped is %TRUE.
         */
        get escape_character(): number;
        set escape_character(val: number);
        /**
         * Escaping character. This is used only when
         * #GArrowCSVReadOptions:is-escaped is %TRUE.
         */
        get escapeCharacter(): number;
        set escapeCharacter(val: number);
        get generate_column_names(): boolean;
        set generate_column_names(val: boolean);
        get generateColumnNames(): boolean;
        set generateColumnNames(val: boolean);
        /**
         * Whether empty lines are ignored. If %FALSE, an empty line
         * represents a simple empty value (assuming a one-column CSV file).
         */
        get ignore_empty_lines(): boolean;
        set ignore_empty_lines(val: boolean);
        /**
         * Whether empty lines are ignored. If %FALSE, an empty line
         * represents a simple empty value (assuming a one-column CSV file).
         */
        get ignoreEmptyLines(): boolean;
        set ignoreEmptyLines(val: boolean);
        /**
         * Whether a quote inside a value is double quoted.
         */
        get is_double_quoted(): boolean;
        set is_double_quoted(val: boolean);
        /**
         * Whether a quote inside a value is double quoted.
         */
        get isDoubleQuoted(): boolean;
        set isDoubleQuoted(val: boolean);
        /**
         * Whether escaping is used.
         */
        get is_escaped(): boolean;
        set is_escaped(val: boolean);
        /**
         * Whether escaping is used.
         */
        get isEscaped(): boolean;
        set isEscaped(val: boolean);
        /**
         * Whether quoting is used.
         */
        get is_quoted(): boolean;
        set is_quoted(val: boolean);
        /**
         * Whether quoting is used.
         */
        get isQuoted(): boolean;
        set isQuoted(val: boolean);
        /**
         * The number of header rows to skip (not including
         * the row of column names, if any)
         */
        get n_skip_rows(): number;
        set n_skip_rows(val: number);
        /**
         * The number of header rows to skip (not including
         * the row of column names, if any)
         */
        get nSkipRows(): number;
        set nSkipRows(val: number);
        /**
         * Quoting character. This is used only when
         * #GArrowCSVReadOptions:is-quoted is %TRUE.
         */
        get quote_character(): number;
        set quote_character(val: number);
        /**
         * Quoting character. This is used only when
         * #GArrowCSVReadOptions:is-quoted is %TRUE.
         */
        get quoteCharacter(): number;
        set quoteCharacter(val: number);
        /**
         * Whether to use the global CPU thread pool.
         */
        get use_threads(): boolean;
        set use_threads(val: boolean);
        /**
         * Whether to use the global CPU thread pool.
         */
        get useThreads(): boolean;
        set useThreads(val: boolean);

        // Constructors of Arrow.CSVReadOptions

        constructor(properties?: Partial<CSVReadOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CSVReadOptions;

        // Own methods of Arrow.CSVReadOptions

        add_column_name(column_name: string): void;
        /**
         * Add value type of a column.
         * @param name The name of the target column.
         * @param data_type The #GArrowDataType for the column.
         */
        add_column_type(name: string, data_type: DataType): void;
        add_false_value(false_value: string): void;
        add_null_value(null_value: string): void;
        /**
         * Add value types for columns in the schema.
         * @param schema The #GArrowSchema that specifies columns and their types.
         */
        add_schema(schema: Schema): void;
        add_true_value(true_value: string): void;
        get_column_names(): string[] | null;
        get_column_types(): GLib.HashTable<string, DataType>;
        get_false_values(): string[] | null;
        get_null_values(): string[] | null;
        get_true_values(): string[] | null;
        set_column_names(column_names: string[]): void;
        set_false_values(false_values: string[]): void;
        set_null_values(null_values: string[]): void;
        set_true_values(true_values: string[]): void;
    }

    module CSVReader {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            csv_table_reader: any;
            csvTableReader: any;
            input: InputStream;
        }
    }

    class CSVReader extends GObject.Object {
        static $gtype: GObject.GType<CSVReader>;

        // Own properties of Arrow.CSVReader

        set csv_table_reader(val: any);
        set csvTableReader(val: any);
        get input(): InputStream;

        // Constructors of Arrow.CSVReader

        constructor(properties?: Partial<CSVReader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](input: InputStream, options?: CSVReadOptions | null): CSVReader;

        // Own methods of Arrow.CSVReader

        read(): Table | null;
    }

    module CallExpression {
        // Constructor properties interface

        interface ConstructorProps extends Expression.ConstructorProps {}
    }

    class CallExpression extends Expression {
        static $gtype: GObject.GType<CallExpression>;

        // Constructors of Arrow.CallExpression

        constructor(properties?: Partial<CallExpression.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](_function: string, _arguments: Expression[], options?: FunctionOptions | null): CallExpression;
    }

    module CastOptions {
        // Constructor properties interface

        interface ConstructorProps extends FunctionOptions.ConstructorProps {
            allow_decimal_truncate: boolean;
            allowDecimalTruncate: boolean;
            allow_float_truncate: boolean;
            allowFloatTruncate: boolean;
            allow_int_overflow: boolean;
            allowIntOverflow: boolean;
            allow_invalid_utf8: boolean;
            allowInvalidUtf8: boolean;
            allow_time_overflow: boolean;
            allowTimeOverflow: boolean;
            allow_time_truncate: boolean;
            allowTimeTruncate: boolean;
            to_data_type: DataType;
            toDataType: DataType;
        }
    }

    class CastOptions extends FunctionOptions {
        static $gtype: GObject.GType<CastOptions>;

        // Own properties of Arrow.CastOptions

        /**
         * Whether truncating decimal value is allowed or not.
         */
        get allow_decimal_truncate(): boolean;
        set allow_decimal_truncate(val: boolean);
        /**
         * Whether truncating decimal value is allowed or not.
         */
        get allowDecimalTruncate(): boolean;
        set allowDecimalTruncate(val: boolean);
        /**
         * Whether truncating float value is allowed or not.
         */
        get allow_float_truncate(): boolean;
        set allow_float_truncate(val: boolean);
        /**
         * Whether truncating float value is allowed or not.
         */
        get allowFloatTruncate(): boolean;
        set allowFloatTruncate(val: boolean);
        /**
         * Whether integer overflow is allowed or not.
         */
        get allow_int_overflow(): boolean;
        set allow_int_overflow(val: boolean);
        /**
         * Whether integer overflow is allowed or not.
         */
        get allowIntOverflow(): boolean;
        set allowIntOverflow(val: boolean);
        /**
         * Whether invalid UTF-8 string value is allowed or not.
         */
        get allow_invalid_utf8(): boolean;
        set allow_invalid_utf8(val: boolean);
        /**
         * Whether invalid UTF-8 string value is allowed or not.
         */
        get allowInvalidUtf8(): boolean;
        set allowInvalidUtf8(val: boolean);
        /**
         * Whether time overflow is allowed or not.
         */
        get allow_time_overflow(): boolean;
        set allow_time_overflow(val: boolean);
        /**
         * Whether time overflow is allowed or not.
         */
        get allowTimeOverflow(): boolean;
        set allowTimeOverflow(val: boolean);
        /**
         * Whether truncating time value is allowed or not.
         */
        get allow_time_truncate(): boolean;
        set allow_time_truncate(val: boolean);
        /**
         * Whether truncating time value is allowed or not.
         */
        get allowTimeTruncate(): boolean;
        set allowTimeTruncate(val: boolean);
        /**
         * The #GArrowDataType being casted to.
         */
        get to_data_type(): DataType;
        set to_data_type(val: DataType);
        /**
         * The #GArrowDataType being casted to.
         */
        get toDataType(): DataType;
        set toDataType(val: DataType);

        // Constructors of Arrow.CastOptions

        constructor(properties?: Partial<CastOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CastOptions;
    }

    module ChunkedArray {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            chunked_array: any;
            chunkedArray: any;
            data_type: DataType;
            dataType: DataType;
        }
    }

    class ChunkedArray extends GObject.Object {
        static $gtype: GObject.GType<ChunkedArray>;

        // Own properties of Arrow.ChunkedArray

        set chunked_array(val: any);
        set chunkedArray(val: any);
        set data_type(val: DataType);
        set dataType(val: DataType);

        // Constructors of Arrow.ChunkedArray

        constructor(properties?: Partial<ChunkedArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](chunks: Array[]): ChunkedArray;

        static new_empty(data_type: DataType): ChunkedArray;

        // Own methods of Arrow.ChunkedArray

        combine(): Array | null;
        equal(other_chunked_array: ChunkedArray): boolean;
        filter(filter: BooleanArray, options?: FilterOptions | null): ChunkedArray | null;
        filter_chunked_array(filter: ChunkedArray, options?: FilterOptions | null): ChunkedArray | null;
        get_chunk(i: number): Array;
        get_chunks(): Array[];
        get_length(): number;
        get_n_chunks(): number;
        get_n_nulls(): number;
        get_n_rows(): number;
        get_value_data_type(): DataType;
        get_value_type(): Type;
        slice(offset: number, length: number): ChunkedArray;
        sort_indices(order: SortOrder): UInt64Array | null;
        take(indices: Array, options?: TakeOptions | null): ChunkedArray | null;
        take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null;
        to_string(): string | null;
    }

    module ChunkedArrayDatum {
        // Constructor properties interface

        interface ConstructorProps extends Datum.ConstructorProps {
            value: ChunkedArray;
        }
    }

    class ChunkedArrayDatum extends Datum {
        static $gtype: GObject.GType<ChunkedArrayDatum>;

        // Own properties of Arrow.ChunkedArrayDatum

        get value(): ChunkedArray;

        // Constructors of Arrow.ChunkedArrayDatum

        constructor(properties?: Partial<ChunkedArrayDatum.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: ChunkedArray): ChunkedArrayDatum;
    }

    module Codec {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            codec: any;
        }
    }

    class Codec extends GObject.Object {
        static $gtype: GObject.GType<Codec>;

        // Own properties of Arrow.Codec

        set codec(val: any);

        // Constructors of Arrow.Codec

        constructor(properties?: Partial<Codec.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](type: CompressionType): Codec;

        // Own methods of Arrow.Codec

        get_compression_level(): number;
        get_compression_type(): CompressionType;
        get_name(): string;
    }

    module CompressedInputStream {
        // Constructor properties interface

        interface ConstructorProps
            extends InputStream.ConstructorProps,
                File.ConstructorProps,
                Readable.ConstructorProps {
            codec: Codec;
            raw: InputStream;
        }
    }

    class CompressedInputStream extends InputStream implements File, Readable {
        static $gtype: GObject.GType<CompressedInputStream>;

        // Own properties of Arrow.CompressedInputStream

        get codec(): Codec;
        get raw(): InputStream;

        // Constructors of Arrow.CompressedInputStream

        constructor(properties?: Partial<CompressedInputStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](codec: Codec, raw: InputStream): CompressedInputStream;

        // Inherited methods
        close(): boolean;
        get_mode(): FileMode;
        is_closed(): boolean;
        tell(): number;
        read(n_bytes: number): Buffer | null;
        // Conflicted with Gio.InputStream.read
        read(...args: never[]): any;
        read_bytes(n_bytes: number): GLib.Bytes | null;
        // Conflicted with Gio.InputStream.read_bytes
        read_bytes(...args: never[]): any;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module CompressedOutputStream {
        // Constructor properties interface

        interface ConstructorProps
            extends OutputStream.ConstructorProps,
                File.ConstructorProps,
                Writable.ConstructorProps {
            codec: Codec;
            raw: OutputStream;
        }
    }

    class CompressedOutputStream extends OutputStream implements File, Writable {
        static $gtype: GObject.GType<CompressedOutputStream>;

        // Own properties of Arrow.CompressedOutputStream

        get codec(): Codec;
        get raw(): OutputStream;

        // Constructors of Arrow.CompressedOutputStream

        constructor(properties?: Partial<CompressedOutputStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](codec: Codec, raw: OutputStream): CompressedOutputStream;

        // Inherited methods
        close(): boolean;
        get_mode(): FileMode;
        is_closed(): boolean;
        tell(): number;
        /**
         * It ensures writing all data on memory to storage.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        flush(): boolean;
        write(data: Uint8Array | string): boolean;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module CountOptions {
        // Constructor properties interface

        interface ConstructorProps extends FunctionOptions.ConstructorProps {
            mode: CountMode;
        }
    }

    class CountOptions extends FunctionOptions {
        static $gtype: GObject.GType<CountOptions>;

        // Own properties of Arrow.CountOptions

        get mode(): CountMode;
        set mode(val: CountMode);

        // Constructors of Arrow.CountOptions

        constructor(properties?: Partial<CountOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CountOptions;
    }

    module DataType {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            data_type: any;
            dataType: any;
        }
    }

    abstract class DataType extends GObject.Object {
        static $gtype: GObject.GType<DataType>;

        // Own properties of Arrow.DataType

        set data_type(val: any);
        set dataType(val: any);

        // Constructors of Arrow.DataType

        constructor(properties?: Partial<DataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own static methods of Arrow.DataType

        static ['import'](c_abi_schema: any): DataType | null;

        // Own methods of Arrow.DataType

        equal(other_data_type: DataType): boolean;
        ['export'](): any | null;
        get_id(): Type;
        get_name(): string;
        to_string(): string;
    }

    module Date32Array {
        // Constructor properties interface

        interface ConstructorProps extends NumericArray.ConstructorProps {}
    }

    class Date32Array extends NumericArray {
        static $gtype: GObject.GType<Date32Array>;

        // Constructors of Arrow.Date32Array

        constructor(properties?: Partial<Date32Array.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): Date32Array;

        // Own methods of Arrow.Date32Array

        get_value(i: number): number;
        get_values(): number[];
    }

    module Date32ArrayBuilder {
        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class Date32ArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<Date32ArrayBuilder>;

        // Constructors of Arrow.Date32ArrayBuilder

        constructor(properties?: Partial<Date32ArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Date32ArrayBuilder;

        // Own methods of Arrow.Date32ArrayBuilder

        append(value: number): boolean;
        append_value(value: number): boolean;
        /**
         * Append multiple values at once. It's more efficient than multiple
         * `append` and `append_null` calls.
         * @param values The array of   the number of days since UNIX epoch in signed 32bit integer.
         * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_values(values: number[], is_valids?: boolean[] | null): boolean;
    }

    module Date32DataType {
        // Constructor properties interface

        interface ConstructorProps extends TemporalDataType.ConstructorProps {}
    }

    class Date32DataType extends TemporalDataType {
        static $gtype: GObject.GType<Date32DataType>;

        // Constructors of Arrow.Date32DataType

        constructor(properties?: Partial<Date32DataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Date32DataType;
    }

    module Date32Scalar {
        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class Date32Scalar extends Scalar {
        static $gtype: GObject.GType<Date32Scalar>;

        // Constructors of Arrow.Date32Scalar

        constructor(properties?: Partial<Date32Scalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): Date32Scalar;

        // Own methods of Arrow.Date32Scalar

        get_value(): number;
    }

    module Date64Array {
        // Constructor properties interface

        interface ConstructorProps extends NumericArray.ConstructorProps {}
    }

    class Date64Array extends NumericArray {
        static $gtype: GObject.GType<Date64Array>;

        // Constructors of Arrow.Date64Array

        constructor(properties?: Partial<Date64Array.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): Date64Array;

        // Own methods of Arrow.Date64Array

        get_value(i: number): number;
        get_values(): number[];
    }

    module Date64ArrayBuilder {
        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class Date64ArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<Date64ArrayBuilder>;

        // Constructors of Arrow.Date64ArrayBuilder

        constructor(properties?: Partial<Date64ArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Date64ArrayBuilder;

        // Own methods of Arrow.Date64ArrayBuilder

        append(value: number): boolean;
        append_value(value: number): boolean;
        /**
         * Append multiple values at once. It's more efficient than multiple
         * `append` and `append_null` calls.
         * @param values The array of   the number of milliseconds since UNIX epoch in signed 64bit integer.
         * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_values(values: number[], is_valids?: boolean[] | null): boolean;
    }

    module Date64DataType {
        // Constructor properties interface

        interface ConstructorProps extends TemporalDataType.ConstructorProps {}
    }

    class Date64DataType extends TemporalDataType {
        static $gtype: GObject.GType<Date64DataType>;

        // Constructors of Arrow.Date64DataType

        constructor(properties?: Partial<Date64DataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Date64DataType;
    }

    module Date64Scalar {
        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class Date64Scalar extends Scalar {
        static $gtype: GObject.GType<Date64Scalar>;

        // Constructors of Arrow.Date64Scalar

        constructor(properties?: Partial<Date64Scalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): Date64Scalar;

        // Own methods of Arrow.Date64Scalar

        get_value(): number;
    }

    module Datum {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            datum: any;
        }
    }

    abstract class Datum extends GObject.Object {
        static $gtype: GObject.GType<Datum>;

        // Own properties of Arrow.Datum

        set datum(val: any);

        // Constructors of Arrow.Datum

        constructor(properties?: Partial<Datum.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Arrow.Datum

        equal(other_datum: Datum): boolean;
        is_array(): boolean;
        is_array_like(): boolean;
        is_scalar(): boolean;
        is_value(): boolean;
        to_string(): string;
    }

    module DayMillisecond {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            day: number;
            millisecond: number;
        }
    }

    class DayMillisecond extends GObject.Object {
        static $gtype: GObject.GType<DayMillisecond>;

        // Own properties of Arrow.DayMillisecond

        /**
         * The day part value.
         */
        get day(): number;
        set day(val: number);
        /**
         * The millisecond part value.
         */
        get millisecond(): number;
        set millisecond(val: number);

        // Constructors of Arrow.DayMillisecond

        constructor(properties?: Partial<DayMillisecond.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](day: number, millisecond: number): DayMillisecond;

        // Own methods of Arrow.DayMillisecond

        equal(other_day_millisecond: DayMillisecond): boolean;
        less_than(other_day_millisecond: DayMillisecond): boolean;
    }

    module DayTimeIntervalArray {
        // Constructor properties interface

        interface ConstructorProps extends PrimitiveArray.ConstructorProps {}
    }

    class DayTimeIntervalArray extends PrimitiveArray {
        static $gtype: GObject.GType<DayTimeIntervalArray>;

        // Constructors of Arrow.DayTimeIntervalArray

        constructor(properties?: Partial<DayTimeIntervalArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): DayTimeIntervalArray;

        // Own methods of Arrow.DayTimeIntervalArray

        get_value(i: number): DayMillisecond;
        get_values(): DayMillisecond[] | null;
    }

    module DayTimeIntervalArrayBuilder {
        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class DayTimeIntervalArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<DayTimeIntervalArrayBuilder>;

        // Constructors of Arrow.DayTimeIntervalArrayBuilder

        constructor(properties?: Partial<DayTimeIntervalArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DayTimeIntervalArrayBuilder;

        // Own methods of Arrow.DayTimeIntervalArrayBuilder

        append_value(value: DayMillisecond): boolean;
        /**
         * Append multiple values at once. It's more efficient than multiple
         * `append` calls.
         * @param values The array of a #GArrowDayMillisecond.
         * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_values(values: DayMillisecond[], is_valids?: boolean[] | null): boolean;
    }

    module DayTimeIntervalDataType {
        // Constructor properties interface

        interface ConstructorProps extends IntervalDataType.ConstructorProps {}
    }

    class DayTimeIntervalDataType extends IntervalDataType {
        static $gtype: GObject.GType<DayTimeIntervalDataType>;

        // Constructors of Arrow.DayTimeIntervalDataType

        constructor(properties?: Partial<DayTimeIntervalDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DayTimeIntervalDataType;
    }

    module DayTimeIntervalScalar {
        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class DayTimeIntervalScalar extends Scalar {
        static $gtype: GObject.GType<DayTimeIntervalScalar>;

        // Constructors of Arrow.DayTimeIntervalScalar

        constructor(properties?: Partial<DayTimeIntervalScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: DayMillisecond): DayTimeIntervalScalar;

        // Own methods of Arrow.DayTimeIntervalScalar

        get_value(): DayMillisecond;
    }

    module Decimal128 {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            decimal128: any;
        }
    }

    class Decimal128 extends GObject.Object {
        static $gtype: GObject.GType<Decimal128>;

        // Own properties of Arrow.Decimal128

        set decimal128(val: any);

        // Constructors of Arrow.Decimal128

        constructor(properties?: Partial<Decimal128.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_integer(data: number): Decimal128;

        static new_string(data: string): Decimal128;

        // Own methods of Arrow.Decimal128

        /**
         * Computes the absolute value of the `decimal` destructively.
         */
        abs(): void;
        copy(): Decimal128;
        divide(right: Decimal128): [Decimal128 | null, Decimal128 | null];
        equal(other_decimal: Decimal128): boolean;
        greater_than(other_decimal: Decimal128): boolean;
        greater_than_or_equal(other_decimal: Decimal128): boolean;
        less_than(other_decimal: Decimal128): boolean;
        less_than_or_equal(other_decimal: Decimal128): boolean;
        minus(right: Decimal128): Decimal128;
        multiply(right: Decimal128): Decimal128;
        /**
         * Negate the current value of the `decimal` destructively.
         */
        negate(): void;
        not_equal(other_decimal: Decimal128): boolean;
        plus(right: Decimal128): Decimal128;
        rescale(original_scale: number, new_scale: number): Decimal128 | null;
        to_bytes(): GLib.Bytes;
        to_integer(): number;
        to_string(): string;
        to_string_scale(scale: number): string;
    }

    module Decimal128Array {
        // Constructor properties interface

        interface ConstructorProps extends FixedSizeBinaryArray.ConstructorProps {}
    }

    class Decimal128Array extends FixedSizeBinaryArray {
        static $gtype: GObject.GType<Decimal128Array>;

        // Constructors of Arrow.Decimal128Array

        constructor(properties?: Partial<Decimal128Array.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Arrow.Decimal128Array

        format_value(i: number): string;
        get_value(i: number): Decimal128;
        // Conflicted with Arrow.FixedSizeBinaryArray.get_value
        get_value(...args: never[]): any;
    }

    module Decimal128ArrayBuilder {
        // Constructor properties interface

        interface ConstructorProps extends FixedSizeBinaryArrayBuilder.ConstructorProps {}
    }

    class Decimal128ArrayBuilder extends FixedSizeBinaryArrayBuilder {
        static $gtype: GObject.GType<Decimal128ArrayBuilder>;

        // Constructors of Arrow.Decimal128ArrayBuilder

        constructor(properties?: Partial<Decimal128ArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type: Decimal128DataType): Decimal128ArrayBuilder;

        // Own methods of Arrow.Decimal128ArrayBuilder

        append(value: Decimal128): boolean;
        append_value(value?: Decimal128 | null): boolean;
        // Conflicted with Arrow.FixedSizeBinaryArrayBuilder.append_value
        append_value(...args: never[]): any;
        /**
         * Append multiple values at once. It's more efficient than multiple
         * `append` and `append_null` calls.
         * @param values The array of #GArrowDecimal128.
         * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth @is_valids is %TRUE, the Nth @values is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_values(values: Decimal128[], is_valids?: boolean[] | null): boolean;
        // Conflicted with Arrow.FixedSizeBinaryArrayBuilder.append_values
        append_values(...args: never[]): any;
    }

    module Decimal128DataType {
        // Constructor properties interface

        interface ConstructorProps extends DecimalDataType.ConstructorProps {}
    }

    class Decimal128DataType extends DecimalDataType {
        static $gtype: GObject.GType<Decimal128DataType>;

        // Constructors of Arrow.Decimal128DataType

        constructor(properties?: Partial<Decimal128DataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](precision: number, scale: number): Decimal128DataType;
        // Conflicted with Arrow.FixedSizeBinaryDataType.new

        static ['new'](...args: never[]): any;

        // Own static methods of Arrow.Decimal128DataType

        static max_precision(): number;
    }

    module Decimal128Scalar {
        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {
            value: Decimal128;
        }
    }

    class Decimal128Scalar extends Scalar {
        static $gtype: GObject.GType<Decimal128Scalar>;

        // Own properties of Arrow.Decimal128Scalar

        /**
         * The value of the scalar.
         */
        set value(val: Decimal128);

        // Constructors of Arrow.Decimal128Scalar

        constructor(properties?: Partial<Decimal128Scalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type: Decimal128DataType, value: Decimal128): Decimal128Scalar;

        // Own methods of Arrow.Decimal128Scalar

        get_value(): Decimal128;
    }

    module Decimal256 {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            decimal256: any;
        }
    }

    class Decimal256 extends GObject.Object {
        static $gtype: GObject.GType<Decimal256>;

        // Own properties of Arrow.Decimal256

        set decimal256(val: any);

        // Constructors of Arrow.Decimal256

        constructor(properties?: Partial<Decimal256.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_integer(data: number): Decimal256;

        static new_string(data: string): Decimal256;

        // Own methods of Arrow.Decimal256

        /**
         * Computes the absolute value of the `decimal` destructively.
         */
        abs(): void;
        copy(): Decimal256;
        divide(right: Decimal256): [Decimal256 | null, Decimal256 | null];
        equal(other_decimal: Decimal256): boolean;
        greater_than(other_decimal: Decimal256): boolean;
        greater_than_or_equal(other_decimal: Decimal256): boolean;
        less_than(other_decimal: Decimal256): boolean;
        less_than_or_equal(other_decimal: Decimal256): boolean;
        multiply(right: Decimal256): Decimal256;
        /**
         * Negate the current value of the `decimal` destructively.
         */
        negate(): void;
        not_equal(other_decimal: Decimal256): boolean;
        plus(right: Decimal256): Decimal256;
        rescale(original_scale: number, new_scale: number): Decimal256 | null;
        to_bytes(): GLib.Bytes;
        to_string(): string;
        to_string_scale(scale: number): string;
    }

    module Decimal256Array {
        // Constructor properties interface

        interface ConstructorProps extends FixedSizeBinaryArray.ConstructorProps {}
    }

    class Decimal256Array extends FixedSizeBinaryArray {
        static $gtype: GObject.GType<Decimal256Array>;

        // Constructors of Arrow.Decimal256Array

        constructor(properties?: Partial<Decimal256Array.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Arrow.Decimal256Array

        format_value(i: number): string;
        get_value(i: number): Decimal256;
        // Conflicted with Arrow.FixedSizeBinaryArray.get_value
        get_value(...args: never[]): any;
    }

    module Decimal256ArrayBuilder {
        // Constructor properties interface

        interface ConstructorProps extends FixedSizeBinaryArrayBuilder.ConstructorProps {}
    }

    class Decimal256ArrayBuilder extends FixedSizeBinaryArrayBuilder {
        static $gtype: GObject.GType<Decimal256ArrayBuilder>;

        // Constructors of Arrow.Decimal256ArrayBuilder

        constructor(properties?: Partial<Decimal256ArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type: Decimal256DataType): Decimal256ArrayBuilder;

        // Own methods of Arrow.Decimal256ArrayBuilder

        append_value(value?: Decimal256 | null): boolean;
        // Conflicted with Arrow.FixedSizeBinaryArrayBuilder.append_value
        append_value(...args: never[]): any;
        /**
         * Append multiple values at once. It's more efficient than multiple
         * `append` and `append_null` calls.
         * @param values The array of #GArrowDecimal256.
         * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth @is_valids is %TRUE, the Nth @values is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_values(values: Decimal256[], is_valids?: boolean[] | null): boolean;
        // Conflicted with Arrow.FixedSizeBinaryArrayBuilder.append_values
        append_values(...args: never[]): any;
    }

    module Decimal256DataType {
        // Constructor properties interface

        interface ConstructorProps extends DecimalDataType.ConstructorProps {}
    }

    class Decimal256DataType extends DecimalDataType {
        static $gtype: GObject.GType<Decimal256DataType>;

        // Constructors of Arrow.Decimal256DataType

        constructor(properties?: Partial<Decimal256DataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](precision: number, scale: number): Decimal256DataType;
        // Conflicted with Arrow.FixedSizeBinaryDataType.new

        static ['new'](...args: never[]): any;

        // Own static methods of Arrow.Decimal256DataType

        static max_precision(): number;
    }

    module Decimal256Scalar {
        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {
            value: Decimal256;
        }
    }

    class Decimal256Scalar extends Scalar {
        static $gtype: GObject.GType<Decimal256Scalar>;

        // Own properties of Arrow.Decimal256Scalar

        /**
         * The value of the scalar.
         */
        set value(val: Decimal256);

        // Constructors of Arrow.Decimal256Scalar

        constructor(properties?: Partial<Decimal256Scalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type: Decimal256DataType, value: Decimal256): Decimal256Scalar;

        // Own methods of Arrow.Decimal256Scalar

        get_value(): Decimal256;
    }

    module DecimalDataType {
        // Constructor properties interface

        interface ConstructorProps extends FixedSizeBinaryDataType.ConstructorProps {}
    }

    abstract class DecimalDataType extends FixedSizeBinaryDataType {
        static $gtype: GObject.GType<DecimalDataType>;

        // Constructors of Arrow.DecimalDataType

        constructor(properties?: Partial<DecimalDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](precision: number, scale: number): DecimalDataType;
        // Conflicted with Arrow.FixedSizeBinaryDataType.new

        static ['new'](...args: never[]): any;

        // Own methods of Arrow.DecimalDataType

        get_precision(): number;
        get_scale(): number;
    }

    module DenseUnionArray {
        // Constructor properties interface

        interface ConstructorProps extends UnionArray.ConstructorProps {
            value_offsets: Int32Array;
            valueOffsets: Int32Array;
        }
    }

    class DenseUnionArray extends UnionArray {
        static $gtype: GObject.GType<DenseUnionArray>;

        // Own properties of Arrow.DenseUnionArray

        get value_offsets(): Int32Array;
        get valueOffsets(): Int32Array;

        // Constructors of Arrow.DenseUnionArray

        constructor(properties?: Partial<DenseUnionArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](type_ids: Int8Array, value_offsets: Int32Array, fields: Array[]): DenseUnionArray;

        static new_data_type(
            data_type: DenseUnionDataType,
            type_ids: Int8Array,
            value_offsets: Int32Array,
            fields: Array[],
        ): DenseUnionArray;

        // Own methods of Arrow.DenseUnionArray

        get_value_offset(i: number): number;
    }

    module DenseUnionArrayBuilder {
        // Constructor properties interface

        interface ConstructorProps extends UnionArrayBuilder.ConstructorProps {}
    }

    class DenseUnionArrayBuilder extends UnionArrayBuilder {
        static $gtype: GObject.GType<DenseUnionArrayBuilder>;

        // Constructors of Arrow.DenseUnionArrayBuilder

        constructor(properties?: Partial<DenseUnionArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type?: DenseUnionDataType | null): DenseUnionArrayBuilder;
    }

    module DenseUnionDataType {
        // Constructor properties interface

        interface ConstructorProps extends UnionDataType.ConstructorProps {}
    }

    class DenseUnionDataType extends UnionDataType {
        static $gtype: GObject.GType<DenseUnionDataType>;

        // Constructors of Arrow.DenseUnionDataType

        constructor(properties?: Partial<DenseUnionDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](fields: Field[], type_codes: Uint8Array | string): DenseUnionDataType;
    }

    module DenseUnionScalar {
        // Constructor properties interface

        interface ConstructorProps extends UnionScalar.ConstructorProps {}
    }

    class DenseUnionScalar extends UnionScalar {
        static $gtype: GObject.GType<DenseUnionScalar>;

        // Constructors of Arrow.DenseUnionScalar

        constructor(properties?: Partial<DenseUnionScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type: DenseUnionDataType, type_code: number, value: Scalar): DenseUnionScalar;
    }

    module DictionaryArray {
        // Constructor properties interface

        interface ConstructorProps extends Array.ConstructorProps {
            dictionary: Array;
            indices: Array;
        }
    }

    class DictionaryArray extends Array {
        static $gtype: GObject.GType<DictionaryArray>;

        // Own properties of Arrow.DictionaryArray

        get dictionary(): Array;
        get indices(): Array;

        // Constructors of Arrow.DictionaryArray

        constructor(properties?: Partial<DictionaryArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type: DataType, indices: Array, dictionary: Array): DictionaryArray;

        // Own methods of Arrow.DictionaryArray

        get_dictionary(): Array;
        get_dictionary_data_type(): DictionaryDataType;
        get_indices(): Array;
    }

    module DictionaryDataType {
        // Constructor properties interface

        interface ConstructorProps extends FixedWidthDataType.ConstructorProps {}
    }

    class DictionaryDataType extends FixedWidthDataType {
        static $gtype: GObject.GType<DictionaryDataType>;

        // Constructors of Arrow.DictionaryDataType

        constructor(properties?: Partial<DictionaryDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](index_data_type: DataType, value_data_type: DataType, ordered: boolean): DictionaryDataType;

        // Own methods of Arrow.DictionaryDataType

        get_index_data_type(): DataType;
        get_value_data_type(): DataType;
        is_ordered(): boolean;
    }

    module DoubleArray {
        // Constructor properties interface

        interface ConstructorProps extends NumericArray.ConstructorProps {}
    }

    class DoubleArray extends NumericArray {
        static $gtype: GObject.GType<DoubleArray>;

        // Constructors of Arrow.DoubleArray

        constructor(properties?: Partial<DoubleArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): DoubleArray;

        // Own methods of Arrow.DoubleArray

        get_value(i: number): number;
        get_values(): number[];
        sum(): number;
    }

    module DoubleArrayBuilder {
        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class DoubleArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<DoubleArrayBuilder>;

        // Constructors of Arrow.DoubleArrayBuilder

        constructor(properties?: Partial<DoubleArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DoubleArrayBuilder;

        // Own methods of Arrow.DoubleArrayBuilder

        append(value: number): boolean;
        append_value(value: number): boolean;
        /**
         * Append multiple values at once. It's more efficient than multiple
         * `append` and `append_null` calls.
         * @param values The array of double.
         * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_values(values: number[], is_valids?: boolean[] | null): boolean;
    }

    module DoubleDataType {
        // Constructor properties interface

        interface ConstructorProps extends FloatingPointDataType.ConstructorProps {}
    }

    class DoubleDataType extends FloatingPointDataType {
        static $gtype: GObject.GType<DoubleDataType>;

        // Constructors of Arrow.DoubleDataType

        constructor(properties?: Partial<DoubleDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DoubleDataType;
    }

    module DoubleScalar {
        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class DoubleScalar extends Scalar {
        static $gtype: GObject.GType<DoubleScalar>;

        // Constructors of Arrow.DoubleScalar

        constructor(properties?: Partial<DoubleScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): DoubleScalar;

        // Own methods of Arrow.DoubleScalar

        get_value(): number;
    }

    module EqualOptions {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            absolute_tolerance: number;
            absoluteTolerance: number;
            approx: boolean;
            nans_equal: boolean;
            nansEqual: boolean;
        }
    }

    class EqualOptions extends GObject.Object {
        static $gtype: GObject.GType<EqualOptions>;

        // Own properties of Arrow.EqualOptions

        /**
         * The absolute tolerance for approximate comparison of
         * floating-point values.
         */
        get absolute_tolerance(): number;
        set absolute_tolerance(val: number);
        /**
         * The absolute tolerance for approximate comparison of
         * floating-point values.
         */
        get absoluteTolerance(): number;
        set absoluteTolerance(val: number);
        /**
         * Whether or not approximate comparison is used.
         */
        get approx(): boolean;
        set approx(val: boolean);
        /**
         * Whether or not NaNs are considered equal.
         */
        get nans_equal(): boolean;
        set nans_equal(val: boolean);
        /**
         * Whether or not NaNs are considered equal.
         */
        get nansEqual(): boolean;
        set nansEqual(val: boolean);

        // Constructors of Arrow.EqualOptions

        constructor(properties?: Partial<EqualOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): EqualOptions;

        // Own methods of Arrow.EqualOptions

        is_approx(): boolean;
    }

    module ExecuteContext {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class ExecuteContext extends GObject.Object {
        static $gtype: GObject.GType<ExecuteContext>;

        // Constructors of Arrow.ExecuteContext

        constructor(properties?: Partial<ExecuteContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ExecuteContext;
    }

    module ExecuteNode {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            node: any;
            options: ExecuteNodeOptions;
        }
    }

    class ExecuteNode extends GObject.Object {
        static $gtype: GObject.GType<ExecuteNode>;

        // Own properties of Arrow.ExecuteNode

        set node(val: any);
        get options(): ExecuteNodeOptions;

        // Constructors of Arrow.ExecuteNode

        constructor(properties?: Partial<ExecuteNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Arrow.ExecuteNode

        get_kind_name(): string;
        get_output_schema(): Schema;
    }

    module ExecuteNodeOptions {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            options: any;
        }
    }

    class ExecuteNodeOptions extends GObject.Object {
        static $gtype: GObject.GType<ExecuteNodeOptions>;

        // Own properties of Arrow.ExecuteNodeOptions

        set options(val: any);

        // Constructors of Arrow.ExecuteNodeOptions

        constructor(properties?: Partial<ExecuteNodeOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module ExecutePlan {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            plan: any;
        }
    }

    class ExecutePlan extends GObject.Object {
        static $gtype: GObject.GType<ExecutePlan>;

        // Own properties of Arrow.ExecutePlan

        set plan(val: any);

        // Constructors of Arrow.ExecutePlan

        constructor(properties?: Partial<ExecutePlan.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ExecutePlan;

        // Own methods of Arrow.ExecutePlan

        /**
         * This is a shortcut of garrow_execute_plan_build_node() for aggregate
         * node.
         * @param input A #GArrowExecuteNode.
         * @param options A #GArrowAggregateNodeOptions.
         * @returns A newly built and added #GArrowExecuteNode   for aggregation on success, %NULL on error.
         */
        build_aggregate_node(input: ExecuteNode, options: AggregateNodeOptions): ExecuteNode;
        /**
         * This is a shortcut of garrow_execute_plan_build_node() for filter
         * node.
         * @param input A #GArrowExecuteNode.
         * @param options A #GArrowFilterNodeOptions.
         * @returns A newly built and added #GArrowExecuteNode   for filter on success, %NULL on error.
         */
        build_filter_node(input: ExecuteNode, options: FilterNodeOptions): ExecuteNode;
        /**
         * This is a shortcut of garrow_execute_plan_build_node() for hash
         * join node.
         * @param left A left #GArrowExecuteNode.
         * @param right A right #GArrowExecuteNode.
         * @param options A #GArrowHashJoinNodeOptions.
         * @returns A newly built and added #GArrowExecuteNode   for hash join on success, %NULL on error.
         */
        build_hash_join_node(left: ExecuteNode, right: ExecuteNode, options: HashJoinNodeOptions): ExecuteNode;
        build_node(factory_name: string, inputs: ExecuteNode[], options: ExecuteNodeOptions): ExecuteNode;
        /**
         * This is a shortcut of garrow_execute_plan_build_node() for project
         * node.
         * @param input A #GArrowExecuteNode.
         * @param options A #GArrowProjectNodeOptions.
         * @returns A newly built and added #GArrowExecuteNode   for project on success, %NULL on error.
         */
        build_project_node(input: ExecuteNode, options: ProjectNodeOptions): ExecuteNode;
        /**
         * This is a shortcut of garrow_execute_plan_build_node() for sink
         * node.
         * @param input A #GArrowExecuteNode.
         * @param options A #GArrowSinkNodeOptions.
         * @returns A newly built and added #GArrowExecuteNode   for sink on success, %NULL on error.
         */
        build_sink_node(input: ExecuteNode, options: SinkNodeOptions): ExecuteNode;
        /**
         * This is a shortcut of garrow_execute_plan_build_node() for source
         * node.
         * @param options A #GArrowSourceNodeOptions.
         * @returns A newly built and added #GArrowExecuteNode   for source on success, %NULL on error.
         */
        build_source_node(options: SourceNodeOptions): ExecuteNode;
        get_nodes(): ExecuteNode[];
        /**
         * Starts this plan.
         */
        start(): void;
        /**
         * Stops this plan.
         */
        stop(): void;
        validate(): boolean;
        /**
         * Waits for finishing this plan.
         * @returns %TRUE on success, %FALSE on error.
         */
        wait(): boolean;
    }

    module Expression {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class Expression extends GObject.Object {
        static $gtype: GObject.GType<Expression>;

        // Constructors of Arrow.Expression

        constructor(properties?: Partial<Expression.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Arrow.Expression

        equal(other_expression: Expression): boolean;
        to_string(): string;
    }

    module ExtensionArray {
        // Constructor properties interface

        interface ConstructorProps extends Array.ConstructorProps {
            storage: Array;
        }
    }

    class ExtensionArray extends Array {
        static $gtype: GObject.GType<ExtensionArray>;

        // Own properties of Arrow.ExtensionArray

        get storage(): Array;

        // Constructors of Arrow.ExtensionArray

        constructor(properties?: Partial<ExtensionArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Arrow.ExtensionArray

        get_storage(): Array;
    }

    module ExtensionDataType {
        // Constructor properties interface

        interface ConstructorProps extends DataType.ConstructorProps {
            storage_data_type: DataType;
            storageDataType: DataType;
        }
    }

    class ExtensionDataType extends DataType {
        static $gtype: GObject.GType<ExtensionDataType>;

        // Own properties of Arrow.ExtensionDataType

        get storage_data_type(): DataType;
        get storageDataType(): DataType;

        // Constructors of Arrow.ExtensionDataType

        constructor(properties?: Partial<ExtensionDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own virtual methods of Arrow.ExtensionDataType

        vfunc_equal(other_data_type: ExtensionDataType): boolean;
        vfunc_get_array_gtype(): GObject.GType;
        vfunc_get_extension_name(): string;
        vfunc_serialize(): GLib.Bytes;

        // Own methods of Arrow.ExtensionDataType

        get_extension_name(): string;
        wrap_array(storage: Array): ExtensionArray;
        wrap_chunked_array(storage: ChunkedArray): ChunkedArray;
    }

    module ExtensionDataTypeRegistry {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            registry: any;
        }
    }

    class ExtensionDataTypeRegistry extends GObject.Object {
        static $gtype: GObject.GType<ExtensionDataTypeRegistry>;

        // Own properties of Arrow.ExtensionDataTypeRegistry

        set registry(val: any);

        // Constructors of Arrow.ExtensionDataTypeRegistry

        constructor(properties?: Partial<ExtensionDataTypeRegistry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own static methods of Arrow.ExtensionDataTypeRegistry

        static ['default'](): ExtensionDataTypeRegistry;

        // Own methods of Arrow.ExtensionDataTypeRegistry

        lookup(name: string): ExtensionDataType;
        /**
         * Register the given `data_type` to the `registry`.
         * @param data_type A #GArrowExtensionDataType to be registered.
         * @returns %TRUE on success, %FALSE on error.
         */
        register(data_type: ExtensionDataType): boolean;
        /**
         * Unregister an extension data type that has the given `name` from the
         * `registry`.
         * @param name An extension data type name to be unregistered.
         * @returns %TRUE on success, %FALSE on error.
         */
        unregister(name: string): boolean;
    }

    module ExtensionScalar {
        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class ExtensionScalar extends Scalar {
        static $gtype: GObject.GType<ExtensionScalar>;

        // Constructors of Arrow.ExtensionScalar

        constructor(properties?: Partial<ExtensionScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module FeatherFileReader {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            feather_reader: any;
            featherReader: any;
        }
    }

    class FeatherFileReader extends GObject.Object {
        static $gtype: GObject.GType<FeatherFileReader>;

        // Own properties of Arrow.FeatherFileReader

        set feather_reader(val: any);
        set featherReader(val: any);

        // Constructors of Arrow.FeatherFileReader

        constructor(properties?: Partial<FeatherFileReader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](file: SeekableInputStream): FeatherFileReader;

        // Own methods of Arrow.FeatherFileReader

        get_version(): number;
        read(): Table;
        read_indices(indices: number[]): Table;
        read_names(names: string[]): Table;
    }

    module FeatherWriteProperties {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            compression: CompressionType;
        }
    }

    class FeatherWriteProperties extends GObject.Object {
        static $gtype: GObject.GType<FeatherWriteProperties>;

        // Own properties of Arrow.FeatherWriteProperties

        /**
         * Compression type to use. Only
         * %GARROW_COMPRESSION_TYPE_UNCOMPRESSED,
         * %GARROW_COMPRESSION_TYPE_LZ4 and %GARROW_COMPRESSION_TYPE_ZSTD
         * are supported. The default compression is
         * %GARROW_COMPRESSION_TYPE_LZ4 if Apache Arrow C++ is built with
         * support for it, otherwise %GARROW_COMPRESSION_TYPE_UNCOMPRESSED.
         * %GARROW_COMPRESSION_TYPE_UNCOMPRESSED is set as the object
         * default here.
         */
        get compression(): CompressionType;
        set compression(val: CompressionType);

        // Constructors of Arrow.FeatherWriteProperties

        constructor(properties?: Partial<FeatherWriteProperties.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FeatherWriteProperties;
    }

    module Field {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            data_type: DataType;
            dataType: DataType;
            field: any;
        }
    }

    class Field extends GObject.Object {
        static $gtype: GObject.GType<Field>;

        // Own properties of Arrow.Field

        set data_type(val: DataType);
        set dataType(val: DataType);
        set field(val: any);

        // Constructors of Arrow.Field

        constructor(properties?: Partial<Field.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, data_type: DataType): Field;

        static new_full(name: string, data_type: DataType, nullable: boolean): Field;

        // Own static methods of Arrow.Field

        static ['import'](c_abi_schema: any): Field | null;

        // Own methods of Arrow.Field

        equal(other_field: Field): boolean;
        ['export'](): any | null;
        get_data_type(): DataType;
        get_metadata(): GLib.HashTable<string, string> | null;
        get_name(): string;
        has_metadata(): boolean;
        is_nullable(): boolean;
        remove_metadata(): Field;
        to_string(): string;
        to_string_metadata(show_metadata: boolean): string;
        with_merged_metadata(metadata: { [key: string]: any } | GLib.HashTable<string, string>): Field;
        with_metadata(metadata: { [key: string]: any } | GLib.HashTable<string, string>): Field;
    }

    module FieldExpression {
        // Constructor properties interface

        interface ConstructorProps extends Expression.ConstructorProps {}
    }

    class FieldExpression extends Expression {
        static $gtype: GObject.GType<FieldExpression>;

        // Constructors of Arrow.FieldExpression

        constructor(properties?: Partial<FieldExpression.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](reference: string): FieldExpression;
    }

    module FileInfo {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            base_name: string;
            baseName: string;
            dir_name: string;
            dirName: string;
            extension: string;
            mtime: number;
            path: string;
            size: number;
            type: FileType;
        }
    }

    class FileInfo extends GObject.Object {
        static $gtype: GObject.GType<FileInfo>;

        // Own properties of Arrow.FileInfo

        /**
         * The file base name (component after the last directory separator).
         */
        get base_name(): string;
        /**
         * The file base name (component after the last directory separator).
         */
        get baseName(): string;
        /**
         * The directory base name (component before the file base name).
         */
        get dir_name(): string;
        /**
         * The directory base name (component before the file base name).
         */
        get dirName(): string;
        /**
         * The file extension (excluding the dot).
         */
        get extension(): string;
        /**
         * The time of last modification, if available.
         */
        get mtime(): number;
        set mtime(val: number);
        /**
         * The full file path in the file system.
         */
        get path(): string;
        set path(val: string);
        /**
         * The size in bytes, if available
         * Only regular files are guaranteed to have a size.
         */
        get size(): number;
        set size(val: number);
        /**
         * The type of the entry.
         */
        get type(): FileType;
        set type(val: FileType);

        // Constructors of Arrow.FileInfo

        constructor(properties?: Partial<FileInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FileInfo;

        // Own methods of Arrow.FileInfo

        equal(other_file_info: FileInfo): boolean;
        is_dir(): boolean;
        is_file(): boolean;
        to_string(): string;
    }

    module FileInputStream {
        // Constructor properties interface

        interface ConstructorProps
            extends SeekableInputStream.ConstructorProps,
                File.ConstructorProps,
                Readable.ConstructorProps {}
    }

    class FileInputStream extends SeekableInputStream implements File, Readable {
        static $gtype: GObject.GType<FileInputStream>;

        // Constructors of Arrow.FileInputStream

        constructor(properties?: Partial<FileInputStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](path: string): FileInputStream;

        static new_file_descriptor(file_descriptor: number): FileInputStream;

        // Own methods of Arrow.FileInputStream

        get_file_descriptor(): number;

        // Inherited methods
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module FileOutputStream {
        // Constructor properties interface

        interface ConstructorProps
            extends OutputStream.ConstructorProps,
                File.ConstructorProps,
                Writable.ConstructorProps {}
    }

    /**
     * It wraps `arrow::io::FileOutputStream`.
     */
    class FileOutputStream extends OutputStream implements File, Writable {
        static $gtype: GObject.GType<FileOutputStream>;

        // Constructors of Arrow.FileOutputStream

        constructor(properties?: Partial<FileOutputStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](path: string, append: boolean): FileOutputStream;

        // Inherited methods
        close(): boolean;
        get_mode(): FileMode;
        is_closed(): boolean;
        tell(): number;
        /**
         * It ensures writing all data on memory to storage.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        flush(): boolean;
        write(data: Uint8Array | string): boolean;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module FileSelector {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            allow_not_found: boolean;
            allowNotFound: boolean;
            base_dir: string;
            baseDir: string;
            max_recursion: number;
            maxRecursion: number;
            recursive: boolean;
        }
    }

    class FileSelector extends GObject.Object {
        static $gtype: GObject.GType<FileSelector>;

        // Own properties of Arrow.FileSelector

        /**
         * The behavior if `base_dir` isn't found in the file system.
         * If false, an error is returned.  If true, an empty selection is returned.
         */
        get allow_not_found(): boolean;
        set allow_not_found(val: boolean);
        /**
         * The behavior if `base_dir` isn't found in the file system.
         * If false, an error is returned.  If true, an empty selection is returned.
         */
        get allowNotFound(): boolean;
        set allowNotFound(val: boolean);
        /**
         * The directory in which to select files.
         * If the path exists but doesn't point to a directory, this should
         * be an error.
         */
        get base_dir(): string;
        set base_dir(val: string);
        /**
         * The directory in which to select files.
         * If the path exists but doesn't point to a directory, this should
         * be an error.
         */
        get baseDir(): string;
        set baseDir(val: string);
        /**
         * The maximum number of subdirectories to recurse into.
         */
        get max_recursion(): number;
        set max_recursion(val: number);
        /**
         * The maximum number of subdirectories to recurse into.
         */
        get maxRecursion(): number;
        set maxRecursion(val: number);
        /**
         * Whether to recurse into subdirectories.
         */
        get recursive(): boolean;
        set recursive(val: boolean);

        // Constructors of Arrow.FileSelector

        constructor(properties?: Partial<FileSelector.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module FileSystem {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            file_system: any;
            fileSystem: any;
        }
    }

    abstract class FileSystem extends GObject.Object {
        static $gtype: GObject.GType<FileSystem>;

        // Own properties of Arrow.FileSystem

        set file_system(val: any);
        set fileSystem(val: any);

        // Constructors of Arrow.FileSystem

        constructor(properties?: Partial<FileSystem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own static methods of Arrow.FileSystem

        /**
         * This is a factory function to create a specific #GArrowFileSystem
         * object.
         * @param uri An URI to specify file system with options. If you only have an   absolute path, g_filename_to_uri() will help you.
         */
        static create(uri: string): FileSystem | null;

        // Own methods of Arrow.FileSystem

        /**
         * Copy a file.
         * If the destination exists and is a directory, an error is returned.
         * Otherwise, it is replaced.
         * @param src The path of the source file.
         * @param dest The path of the destination.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        copy_file(src: string, dest: string): boolean;
        /**
         * Create a directory and subdirectories.
         * This function succeeds if the directory already exists.
         * @param path The paths of the directory.
         * @param recursive Whether creating directory recursively or not.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        create_dir(path: string, recursive: boolean): boolean;
        /**
         * Delete a directory and its contents, recursively.
         * @param path The paths of the directory.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        delete_dir(path: string): boolean;
        /**
         * Delete a directory's contents, recursively. Like
         * garrow_file_system_delete_dir(), but doesn't delete the directory
         * itself. Passing an empty path (`""`) will wipe the entire file
         * system tree.
         * @param path The paths of the directory.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        delete_dir_contents(path: string): boolean;
        /**
         * Delete a file.
         * @param path The paths of the file to be delete.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        delete_file(path: string): boolean;
        /**
         * Delete many files.
         * @param paths The paths of the files to be delete.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        delete_files(paths: string[]): boolean;
        /**
         * Get information for the given target.
         *
         * Any symlink is automatically dereferenced, recursively.
         * A non-existing or unreachable file returns an OK status and has
         * a #GArrowFileType of value %GARROW_FILE_TYPE_NOT_FOUND.
         * An error status indicates a truly exceptional condition
         * (low-level I/O error, etc.).
         * @param path The path of the target.
         * @returns A #GArrowFileInfo.
         */
        get_file_info(path: string): FileInfo | null;
        /**
         * Get information same as garrow_file_system_get_file_info()
         * for the given many targets at once.
         * @param paths The paths of the targets.
         * @returns A list of #GArrowFileInfo.
         */
        get_file_infos_paths(paths: string[]): FileInfo[];
        /**
         * Get information same as garrow_file_system_get_file_info()
         * according to a selector.
         *
         * The selector's base directory will not be part of the results,
         * even if it exists.
         * @param file_selector A #GArrowFileSelector.
         * @returns A list of #GArrowFileInfo.
         */
        get_file_infos_selector(file_selector: FileSelector): FileInfo[];
        get_type_name(): string;
        /**
         * Move / rename a file or a directory.
         * If the destination exists:
         * - if it is a non-empty directory, an error is returned
         * - otherwise, if it has the same type as the source, it is replaced
         * - otherwise, behavior is unspecified (implementation-dependent).
         * @param src The path of the source file.
         * @param dest The path of the destination.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        move(src: string, dest: string): boolean;
        /**
         * Open an output stream for appending.
         * If the target doesn't exist, a new empty file is created.
         * @param path The path of the output stream.
         * @returns A newly created #GArrowOutputStream   for appending.
         */
        open_append_stream(path: string): OutputStream | null;
        /**
         * Open an input file for random access reading.
         * @param path The path of the input file.
         * @returns A newly created   #GArrowSeekableInputStream.
         */
        open_input_file(path: string): SeekableInputStream | null;
        /**
         * Open an input stream for sequential reading.
         * @param path The path of the input stream.
         * @returns A newly created   #GArrowInputStream.
         */
        open_input_stream(path: string): InputStream | null;
        /**
         * Open an output stream for sequential writing.
         * If the target already exists, the existing data is truncated.
         * @param path The path of the output stream.
         * @returns A newly created   #GArrowOutputStream.
         */
        open_output_stream(path: string): OutputStream | null;
    }

    module FilterNodeOptions {
        // Constructor properties interface

        interface ConstructorProps extends ExecuteNodeOptions.ConstructorProps {}
    }

    class FilterNodeOptions extends ExecuteNodeOptions {
        static $gtype: GObject.GType<FilterNodeOptions>;

        // Constructors of Arrow.FilterNodeOptions

        constructor(properties?: Partial<FilterNodeOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](expression: Expression): FilterNodeOptions;
    }

    module FilterOptions {
        // Constructor properties interface

        interface ConstructorProps extends FunctionOptions.ConstructorProps {
            null_selection_behavior: FilterNullSelectionBehavior;
            nullSelectionBehavior: FilterNullSelectionBehavior;
        }
    }

    class FilterOptions extends FunctionOptions {
        static $gtype: GObject.GType<FilterOptions>;

        // Own properties of Arrow.FilterOptions

        /**
         * How to handle filtered values.
         */
        get null_selection_behavior(): FilterNullSelectionBehavior;
        set null_selection_behavior(val: FilterNullSelectionBehavior);
        /**
         * How to handle filtered values.
         */
        get nullSelectionBehavior(): FilterNullSelectionBehavior;
        set nullSelectionBehavior(val: FilterNullSelectionBehavior);

        // Constructors of Arrow.FilterOptions

        constructor(properties?: Partial<FilterOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FilterOptions;
    }

    module FixedSizeBinaryArray {
        // Constructor properties interface

        interface ConstructorProps extends PrimitiveArray.ConstructorProps {}
    }

    class FixedSizeBinaryArray extends PrimitiveArray {
        static $gtype: GObject.GType<FixedSizeBinaryArray>;

        // Constructors of Arrow.FixedSizeBinaryArray

        constructor(properties?: Partial<FixedSizeBinaryArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            data_type: FixedSizeBinaryDataType,
            length: number,
            data: Buffer,
            null_bitmap: Buffer | null,
            n_nulls: number,
        ): FixedSizeBinaryArray;

        // Own methods of Arrow.FixedSizeBinaryArray

        get_byte_width(): number;
        get_value(i: number): GLib.Bytes;
        get_values_bytes(): GLib.Bytes;
    }

    module FixedSizeBinaryArrayBuilder {
        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class FixedSizeBinaryArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<FixedSizeBinaryArrayBuilder>;

        // Constructors of Arrow.FixedSizeBinaryArrayBuilder

        constructor(properties?: Partial<FixedSizeBinaryArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type: FixedSizeBinaryDataType): FixedSizeBinaryArrayBuilder;

        // Own methods of Arrow.FixedSizeBinaryArrayBuilder

        append_value(value?: Uint8Array | null): boolean;
        append_value_bytes(value: GLib.Bytes | Uint8Array): boolean;
        /**
         * Append multiple values at once. It's more efficient than multiple
         * `append` and `append_null` calls.
         * @param values The array of #GBytes.
         * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth @is_valids is %TRUE, the Nth @values is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_values(values: (GLib.Bytes | Uint8Array)[], is_valids?: boolean[] | null): boolean;
        /**
         * Append multiple values at once. It's more efficient than multiple
         * `append` and `append_null` calls.
         *
         * This is more efficient than
         * garrow_fixed_size_binary_array_builder_append_values().
         * @param values A #GBytes that contains multiple values.
         * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth @is_valids is %TRUE, the Nth @values is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_values_packed(values: GLib.Bytes | Uint8Array, is_valids?: boolean[] | null): boolean;
    }

    module FixedSizeBinaryDataType {
        // Constructor properties interface

        interface ConstructorProps extends FixedWidthDataType.ConstructorProps {}
    }

    class FixedSizeBinaryDataType extends FixedWidthDataType {
        static $gtype: GObject.GType<FixedSizeBinaryDataType>;

        // Constructors of Arrow.FixedSizeBinaryDataType

        constructor(properties?: Partial<FixedSizeBinaryDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](byte_width: number): FixedSizeBinaryDataType;

        // Own methods of Arrow.FixedSizeBinaryDataType

        get_byte_width(): number;
    }

    module FixedSizeBinaryScalar {
        // Constructor properties interface

        interface ConstructorProps extends BaseBinaryScalar.ConstructorProps {}
    }

    class FixedSizeBinaryScalar extends BaseBinaryScalar {
        static $gtype: GObject.GType<FixedSizeBinaryScalar>;

        // Constructors of Arrow.FixedSizeBinaryScalar

        constructor(properties?: Partial<FixedSizeBinaryScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type: FixedSizeBinaryDataType, value: Buffer): FixedSizeBinaryScalar;
    }

    module FixedWidthDataType {
        // Constructor properties interface

        interface ConstructorProps extends DataType.ConstructorProps {}
    }

    abstract class FixedWidthDataType extends DataType {
        static $gtype: GObject.GType<FixedWidthDataType>;

        // Constructors of Arrow.FixedWidthDataType

        constructor(properties?: Partial<FixedWidthDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Arrow.FixedWidthDataType

        get_bit_width(): number;
    }

    module FloatArray {
        // Constructor properties interface

        interface ConstructorProps extends NumericArray.ConstructorProps {}
    }

    class FloatArray extends NumericArray {
        static $gtype: GObject.GType<FloatArray>;

        // Constructors of Arrow.FloatArray

        constructor(properties?: Partial<FloatArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): FloatArray;

        // Own methods of Arrow.FloatArray

        get_value(i: number): number;
        get_values(): number[];
        sum(): number;
    }

    module FloatArrayBuilder {
        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class FloatArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<FloatArrayBuilder>;

        // Constructors of Arrow.FloatArrayBuilder

        constructor(properties?: Partial<FloatArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FloatArrayBuilder;

        // Own methods of Arrow.FloatArrayBuilder

        append(value: number): boolean;
        append_value(value: number): boolean;
        /**
         * Append multiple values at once. It's more efficient than multiple
         * `append` and `append_null` calls.
         * @param values The array of float.
         * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_values(values: number[], is_valids?: boolean[] | null): boolean;
    }

    module FloatDataType {
        // Constructor properties interface

        interface ConstructorProps extends FloatingPointDataType.ConstructorProps {}
    }

    class FloatDataType extends FloatingPointDataType {
        static $gtype: GObject.GType<FloatDataType>;

        // Constructors of Arrow.FloatDataType

        constructor(properties?: Partial<FloatDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FloatDataType;
    }

    module FloatScalar {
        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class FloatScalar extends Scalar {
        static $gtype: GObject.GType<FloatScalar>;

        // Constructors of Arrow.FloatScalar

        constructor(properties?: Partial<FloatScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): FloatScalar;

        // Own methods of Arrow.FloatScalar

        get_value(): number;
    }

    module FloatingPointDataType {
        // Constructor properties interface

        interface ConstructorProps extends NumericDataType.ConstructorProps {}
    }

    abstract class FloatingPointDataType extends NumericDataType {
        static $gtype: GObject.GType<FloatingPointDataType>;

        // Constructors of Arrow.FloatingPointDataType

        constructor(properties?: Partial<FloatingPointDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module Function {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            function: any;
        }
    }

    class Function extends GObject.Object {
        static $gtype: GObject.GType<Function>;

        // Own properties of Arrow.Function

        set function(val: any);

        // Constructors of Arrow.Function

        constructor(properties?: Partial<Function.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own static methods of Arrow.Function

        static all(): Function[];
        static find(name: string): Function;

        // Own methods of Arrow.Function

        equal(other_function: Function): boolean;
        execute(args: Datum[], options?: FunctionOptions | null, context?: ExecuteContext | null): Datum | null;
        get_default_options(): FunctionOptions | null;
        get_doc(): FunctionDoc;
        get_name(): string;
        get_options_type(): GObject.GType;
        to_string(): string;
    }

    module FunctionDoc {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            doc: any;
        }
    }

    class FunctionDoc extends GObject.Object {
        static $gtype: GObject.GType<FunctionDoc>;

        // Own properties of Arrow.FunctionDoc

        set doc(val: any);

        // Constructors of Arrow.FunctionDoc

        constructor(properties?: Partial<FunctionDoc.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Arrow.FunctionDoc

        get_arg_names(): string[];
        get_description(): string;
        get_options_class_name(): string;
        get_summary(): string;
    }

    module FunctionOptions {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class FunctionOptions extends GObject.Object {
        static $gtype: GObject.GType<FunctionOptions>;

        // Constructors of Arrow.FunctionOptions

        constructor(properties?: Partial<FunctionOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Arrow.FunctionOptions

        equal(other_options?: FunctionOptions | null): boolean;
        to_string(): string;
    }

    module GCSFileSystem {
        // Constructor properties interface

        interface ConstructorProps extends FileSystem.ConstructorProps {}
    }

    class GCSFileSystem extends FileSystem {
        static $gtype: GObject.GType<GCSFileSystem>;

        // Constructors of Arrow.GCSFileSystem

        constructor(properties?: Partial<GCSFileSystem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module GIOInputStream {
        // Constructor properties interface

        interface ConstructorProps
            extends SeekableInputStream.ConstructorProps,
                File.ConstructorProps,
                Readable.ConstructorProps {
            raw: Gio.InputStream;
        }
    }

    /**
     * It's an input stream for `GInputStream`.
     */
    class GIOInputStream extends SeekableInputStream implements File, Readable {
        static $gtype: GObject.GType<GIOInputStream>;

        // Own properties of Arrow.GIOInputStream

        get raw(): Gio.InputStream;

        // Constructors of Arrow.GIOInputStream

        constructor(properties?: Partial<GIOInputStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](gio_input_stream: Gio.InputStream): GIOInputStream;

        // Own methods of Arrow.GIOInputStream

        get_raw(): Gio.InputStream;

        // Inherited methods
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module GIOOutputStream {
        // Constructor properties interface

        interface ConstructorProps
            extends OutputStream.ConstructorProps,
                File.ConstructorProps,
                Writable.ConstructorProps {
            raw: Gio.OutputStream;
        }
    }

    /**
     * It's an output stream for `GOutputStream`.
     */
    class GIOOutputStream extends OutputStream implements File, Writable {
        static $gtype: GObject.GType<GIOOutputStream>;

        // Own properties of Arrow.GIOOutputStream

        get raw(): Gio.OutputStream;

        // Constructors of Arrow.GIOOutputStream

        constructor(properties?: Partial<GIOOutputStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](gio_output_stream: Gio.OutputStream): GIOOutputStream;

        // Own methods of Arrow.GIOOutputStream

        get_raw(): Gio.OutputStream;

        // Inherited methods
        close(): boolean;
        get_mode(): FileMode;
        is_closed(): boolean;
        tell(): number;
        /**
         * It ensures writing all data on memory to storage.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        flush(): boolean;
        write(data: Uint8Array | string): boolean;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module HDFSFileSystem {
        // Constructor properties interface

        interface ConstructorProps extends FileSystem.ConstructorProps {}
    }

    class HDFSFileSystem extends FileSystem {
        static $gtype: GObject.GType<HDFSFileSystem>;

        // Constructors of Arrow.HDFSFileSystem

        constructor(properties?: Partial<HDFSFileSystem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module HalfFloatArray {
        // Constructor properties interface

        interface ConstructorProps extends NumericArray.ConstructorProps {}
    }

    class HalfFloatArray extends NumericArray {
        static $gtype: GObject.GType<HalfFloatArray>;

        // Constructors of Arrow.HalfFloatArray

        constructor(properties?: Partial<HalfFloatArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): HalfFloatArray;

        // Own methods of Arrow.HalfFloatArray

        get_value(i: number): number;
        get_values(): number[];
    }

    module HalfFloatArrayBuilder {
        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class HalfFloatArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<HalfFloatArrayBuilder>;

        // Constructors of Arrow.HalfFloatArrayBuilder

        constructor(properties?: Partial<HalfFloatArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): HalfFloatArrayBuilder;

        // Own methods of Arrow.HalfFloatArrayBuilder

        append_value(value: number): boolean;
        /**
         * Append multiple values at once. It's more efficient than multiple
         * `append` and `append_null` calls.
         * @param values The array of 16-bit float.
         * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_values(values: number[], is_valids?: boolean[] | null): boolean;
    }

    module HalfFloatDataType {
        // Constructor properties interface

        interface ConstructorProps extends FloatingPointDataType.ConstructorProps {}
    }

    class HalfFloatDataType extends FloatingPointDataType {
        static $gtype: GObject.GType<HalfFloatDataType>;

        // Constructors of Arrow.HalfFloatDataType

        constructor(properties?: Partial<HalfFloatDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): HalfFloatDataType;
    }

    module HalfFloatScalar {
        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class HalfFloatScalar extends Scalar {
        static $gtype: GObject.GType<HalfFloatScalar>;

        // Constructors of Arrow.HalfFloatScalar

        constructor(properties?: Partial<HalfFloatScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): HalfFloatScalar;

        // Own methods of Arrow.HalfFloatScalar

        get_value(): number;
    }

    module HashJoinNodeOptions {
        // Constructor properties interface

        interface ConstructorProps extends ExecuteNodeOptions.ConstructorProps {}
    }

    class HashJoinNodeOptions extends ExecuteNodeOptions {
        static $gtype: GObject.GType<HashJoinNodeOptions>;

        // Constructors of Arrow.HashJoinNodeOptions

        constructor(properties?: Partial<HashJoinNodeOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](type: JoinType, left_keys: string[], right_keys: string[]): HashJoinNodeOptions;

        // Own methods of Arrow.HashJoinNodeOptions

        set_left_outputs(outputs: string[]): boolean;
        set_right_outputs(outputs: string[]): boolean;
    }

    module IndexOptions {
        // Constructor properties interface

        interface ConstructorProps extends FunctionOptions.ConstructorProps {
            value: Scalar;
        }
    }

    class IndexOptions extends FunctionOptions {
        static $gtype: GObject.GType<IndexOptions>;

        // Own properties of Arrow.IndexOptions

        /**
         * The value to be compared.
         */
        get value(): Scalar;
        set value(val: Scalar);

        // Constructors of Arrow.IndexOptions

        constructor(properties?: Partial<IndexOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): IndexOptions;
    }

    module InputStream {
        // Constructor properties interface

        interface ConstructorProps
            extends Gio.InputStream.ConstructorProps,
                File.ConstructorProps,
                Readable.ConstructorProps {
            input_stream: any;
            inputStream: any;
        }
    }

    class InputStream extends Gio.InputStream implements File, Readable {
        static $gtype: GObject.GType<InputStream>;

        // Own properties of Arrow.InputStream

        set input_stream(val: any);
        set inputStream(val: any);

        // Constructors of Arrow.InputStream

        constructor(properties?: Partial<InputStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Arrow.InputStream

        advance(n_bytes: number): boolean;
        align(alignment: number): boolean;
        read_record_batch(schema: Schema, options?: ReadOptions | null): RecordBatch | null;
        read_tensor(): Tensor | null;

        // Inherited methods
        close(): boolean;
        get_mode(): FileMode;
        is_closed(): boolean;
        tell(): number;
        read(n_bytes: number): Buffer | null;
        // Conflicted with Gio.InputStream.read
        read(...args: never[]): any;
        read_bytes(n_bytes: number): GLib.Bytes | null;
        // Conflicted with Gio.InputStream.read_bytes
        read_bytes(...args: never[]): any;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module Int16Array {
        // Constructor properties interface

        interface ConstructorProps extends NumericArray.ConstructorProps {}
    }

    class Int16Array extends NumericArray {
        static $gtype: GObject.GType<Int16Array>;

        // Constructors of Arrow.Int16Array

        constructor(properties?: Partial<Int16Array.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): Int16Array;

        // Own methods of Arrow.Int16Array

        get_value(i: number): number;
        get_values(): number[];
        sum(): number;
    }

    module Int16ArrayBuilder {
        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class Int16ArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<Int16ArrayBuilder>;

        // Constructors of Arrow.Int16ArrayBuilder

        constructor(properties?: Partial<Int16ArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Int16ArrayBuilder;

        // Own methods of Arrow.Int16ArrayBuilder

        append(value: number): boolean;
        append_value(value: number): boolean;
        /**
         * Append multiple values at once. It's more efficient than multiple
         * `append` and `append_null` calls.
         * @param values The array of int16.
         * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_values(values: number[], is_valids?: boolean[] | null): boolean;
    }

    module Int16DataType {
        // Constructor properties interface

        interface ConstructorProps extends IntegerDataType.ConstructorProps {}
    }

    class Int16DataType extends IntegerDataType {
        static $gtype: GObject.GType<Int16DataType>;

        // Constructors of Arrow.Int16DataType

        constructor(properties?: Partial<Int16DataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Int16DataType;
    }

    module Int16Scalar {
        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class Int16Scalar extends Scalar {
        static $gtype: GObject.GType<Int16Scalar>;

        // Constructors of Arrow.Int16Scalar

        constructor(properties?: Partial<Int16Scalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): Int16Scalar;

        // Own methods of Arrow.Int16Scalar

        get_value(): number;
    }

    module Int32Array {
        // Constructor properties interface

        interface ConstructorProps extends NumericArray.ConstructorProps {}
    }

    class Int32Array extends NumericArray {
        static $gtype: GObject.GType<Int32Array>;

        // Constructors of Arrow.Int32Array

        constructor(properties?: Partial<Int32Array.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): Int32Array;

        // Own methods of Arrow.Int32Array

        get_value(i: number): number;
        get_values(): number[];
        sum(): number;
    }

    module Int32ArrayBuilder {
        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class Int32ArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<Int32ArrayBuilder>;

        // Constructors of Arrow.Int32ArrayBuilder

        constructor(properties?: Partial<Int32ArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Int32ArrayBuilder;

        // Own methods of Arrow.Int32ArrayBuilder

        append(value: number): boolean;
        append_value(value: number): boolean;
        /**
         * Append multiple values at once. It's more efficient than multiple
         * `append` and `append_null` calls.
         * @param values The array of int32.
         * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_values(values: number[], is_valids?: boolean[] | null): boolean;
    }

    module Int32DataType {
        // Constructor properties interface

        interface ConstructorProps extends IntegerDataType.ConstructorProps {}
    }

    class Int32DataType extends IntegerDataType {
        static $gtype: GObject.GType<Int32DataType>;

        // Constructors of Arrow.Int32DataType

        constructor(properties?: Partial<Int32DataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Int32DataType;
    }

    module Int32Scalar {
        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class Int32Scalar extends Scalar {
        static $gtype: GObject.GType<Int32Scalar>;

        // Constructors of Arrow.Int32Scalar

        constructor(properties?: Partial<Int32Scalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): Int32Scalar;

        // Own methods of Arrow.Int32Scalar

        get_value(): number;
    }

    module Int64Array {
        // Constructor properties interface

        interface ConstructorProps extends NumericArray.ConstructorProps {}
    }

    class Int64Array extends NumericArray {
        static $gtype: GObject.GType<Int64Array>;

        // Constructors of Arrow.Int64Array

        constructor(properties?: Partial<Int64Array.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): Int64Array;

        // Own methods of Arrow.Int64Array

        get_value(i: number): number;
        get_values(): number[];
        sum(): number;
    }

    module Int64ArrayBuilder {
        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class Int64ArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<Int64ArrayBuilder>;

        // Constructors of Arrow.Int64ArrayBuilder

        constructor(properties?: Partial<Int64ArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Int64ArrayBuilder;

        // Own methods of Arrow.Int64ArrayBuilder

        append(value: number): boolean;
        append_value(value: number): boolean;
        /**
         * Append multiple values at once. It's more efficient than multiple
         * `append` and `append_null` calls.
         * @param values The array of int64.
         * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_values(values: number[], is_valids?: boolean[] | null): boolean;
    }

    module Int64DataType {
        // Constructor properties interface

        interface ConstructorProps extends IntegerDataType.ConstructorProps {}
    }

    class Int64DataType extends IntegerDataType {
        static $gtype: GObject.GType<Int64DataType>;

        // Constructors of Arrow.Int64DataType

        constructor(properties?: Partial<Int64DataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Int64DataType;
    }

    module Int64Scalar {
        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class Int64Scalar extends Scalar {
        static $gtype: GObject.GType<Int64Scalar>;

        // Constructors of Arrow.Int64Scalar

        constructor(properties?: Partial<Int64Scalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): Int64Scalar;

        // Own methods of Arrow.Int64Scalar

        get_value(): number;
    }

    module Int8Array {
        // Constructor properties interface

        interface ConstructorProps extends NumericArray.ConstructorProps {}
    }

    class Int8Array extends NumericArray {
        static $gtype: GObject.GType<Int8Array>;

        // Constructors of Arrow.Int8Array

        constructor(properties?: Partial<Int8Array.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): Int8Array;

        // Own methods of Arrow.Int8Array

        get_value(i: number): number;
        get_values(): Uint8Array;
        sum(): number;
    }

    module Int8ArrayBuilder {
        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class Int8ArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<Int8ArrayBuilder>;

        // Constructors of Arrow.Int8ArrayBuilder

        constructor(properties?: Partial<Int8ArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Int8ArrayBuilder;

        // Own methods of Arrow.Int8ArrayBuilder

        append(value: number): boolean;
        append_value(value: number): boolean;
        /**
         * Append multiple values at once. It's more efficient than multiple
         * `append` and `append_null` calls.
         * @param values The array of int8.
         * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_values(values: Uint8Array | string, is_valids?: boolean[] | null): boolean;
    }

    module Int8DataType {
        // Constructor properties interface

        interface ConstructorProps extends IntegerDataType.ConstructorProps {}
    }

    class Int8DataType extends IntegerDataType {
        static $gtype: GObject.GType<Int8DataType>;

        // Constructors of Arrow.Int8DataType

        constructor(properties?: Partial<Int8DataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Int8DataType;
    }

    module Int8Scalar {
        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class Int8Scalar extends Scalar {
        static $gtype: GObject.GType<Int8Scalar>;

        // Constructors of Arrow.Int8Scalar

        constructor(properties?: Partial<Int8Scalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): Int8Scalar;

        // Own methods of Arrow.Int8Scalar

        get_value(): number;
    }

    module IntArrayBuilder {
        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class IntArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<IntArrayBuilder>;

        // Constructors of Arrow.IntArrayBuilder

        constructor(properties?: Partial<IntArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): IntArrayBuilder;

        // Own methods of Arrow.IntArrayBuilder

        append(value: number): boolean;
        append_value(value: number): boolean;
        /**
         * Append multiple values at once. It's more efficient than multiple
         * `append` and `append_null` calls.
         * @param values The array of int.
         * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_values(values: number[], is_valids?: boolean[] | null): boolean;
    }

    module IntegerDataType {
        // Constructor properties interface

        interface ConstructorProps extends NumericDataType.ConstructorProps {}
    }

    abstract class IntegerDataType extends NumericDataType {
        static $gtype: GObject.GType<IntegerDataType>;

        // Constructors of Arrow.IntegerDataType

        constructor(properties?: Partial<IntegerDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Arrow.IntegerDataType

        is_signed(): boolean;
    }

    module IntervalDataType {
        // Constructor properties interface

        interface ConstructorProps extends TemporalDataType.ConstructorProps {}
    }

    abstract class IntervalDataType extends TemporalDataType {
        static $gtype: GObject.GType<IntervalDataType>;

        // Constructors of Arrow.IntervalDataType

        constructor(properties?: Partial<IntervalDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Arrow.IntervalDataType

        get_interval_type(): IntervalType;
    }

    module JSONReadOptions {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            allow_newlines_in_values: boolean;
            allowNewlinesInValues: boolean;
            block_size: number;
            blockSize: number;
            schema: Schema;
            unexpected_field_behavior: JSONReadUnexpectedFieldBehavior;
            unexpectedFieldBehavior: JSONReadUnexpectedFieldBehavior;
            use_threads: boolean;
            useThreads: boolean;
        }
    }

    class JSONReadOptions extends GObject.Object {
        static $gtype: GObject.GType<JSONReadOptions>;

        // Own properties of Arrow.JSONReadOptions

        /**
         * Whether objects may be printed across multiple lines (for example pretty printed).
         * if %FALSE, input must end with an empty line.
         */
        get allow_newlines_in_values(): boolean;
        set allow_newlines_in_values(val: boolean);
        /**
         * Whether objects may be printed across multiple lines (for example pretty printed).
         * if %FALSE, input must end with an empty line.
         */
        get allowNewlinesInValues(): boolean;
        set allowNewlinesInValues(val: boolean);
        /**
         * Block size we request from the IO layer; also determines the size
         * of chunks when #GArrowJSONReadOptions:use-threads is %TRUE.
         */
        get block_size(): number;
        set block_size(val: number);
        /**
         * Block size we request from the IO layer; also determines the size
         * of chunks when #GArrowJSONReadOptions:use-threads is %TRUE.
         */
        get blockSize(): number;
        set blockSize(val: number);
        /**
         * Schema for passing custom conversion rules.
         */
        get schema(): Schema;
        set schema(val: Schema);
        /**
         * How to parse handle fields outside the explicit schema.
         */
        get unexpected_field_behavior(): JSONReadUnexpectedFieldBehavior;
        set unexpected_field_behavior(val: JSONReadUnexpectedFieldBehavior);
        /**
         * How to parse handle fields outside the explicit schema.
         */
        get unexpectedFieldBehavior(): JSONReadUnexpectedFieldBehavior;
        set unexpectedFieldBehavior(val: JSONReadUnexpectedFieldBehavior);
        /**
         * Whether to use the global CPU thread pool.
         */
        get use_threads(): boolean;
        set use_threads(val: boolean);
        /**
         * Whether to use the global CPU thread pool.
         */
        get useThreads(): boolean;
        set useThreads(val: boolean);

        // Constructors of Arrow.JSONReadOptions

        constructor(properties?: Partial<JSONReadOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): JSONReadOptions;
    }

    module JSONReader {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            input: InputStream;
            json_table_reader: any;
            jsonTableReader: any;
        }
    }

    class JSONReader extends GObject.Object {
        static $gtype: GObject.GType<JSONReader>;

        // Own properties of Arrow.JSONReader

        get input(): InputStream;
        set json_table_reader(val: any);
        set jsonTableReader(val: any);

        // Constructors of Arrow.JSONReader

        constructor(properties?: Partial<JSONReader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](input: InputStream, options?: JSONReadOptions | null): JSONReader;

        // Own methods of Arrow.JSONReader

        read(): Table | null;
    }

    module LargeBinaryArray {
        // Constructor properties interface

        interface ConstructorProps extends Array.ConstructorProps {}
    }

    class LargeBinaryArray extends Array {
        static $gtype: GObject.GType<LargeBinaryArray>;

        // Constructors of Arrow.LargeBinaryArray

        constructor(properties?: Partial<LargeBinaryArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            length: number,
            value_offsets: Buffer,
            value_data: Buffer,
            null_bitmap: Buffer | null,
            n_nulls: number,
        ): LargeBinaryArray;

        // Own methods of Arrow.LargeBinaryArray

        get_buffer(): Buffer;
        get_data_buffer(): Buffer;
        get_offsets_buffer(): Buffer;
        get_value(i: number): GLib.Bytes;
    }

    module LargeBinaryArrayBuilder {
        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class LargeBinaryArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<LargeBinaryArrayBuilder>;

        // Constructors of Arrow.LargeBinaryArrayBuilder

        constructor(properties?: Partial<LargeBinaryArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): LargeBinaryArrayBuilder;

        // Own methods of Arrow.LargeBinaryArrayBuilder

        append_value(value: Uint8Array | string): boolean;
        append_value_bytes(value: GLib.Bytes | Uint8Array): boolean;
        /**
         * Append multiple values at once. It's more efficient than multiple
         * `append` and `append_null` calls.
         * @param values The array of #GBytes.
         * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth @is_valids is %TRUE, the Nth @values is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_values(values: (GLib.Bytes | Uint8Array)[], is_valids?: boolean[] | null): boolean;
    }

    module LargeBinaryDataType {
        // Constructor properties interface

        interface ConstructorProps extends DataType.ConstructorProps {}
    }

    class LargeBinaryDataType extends DataType {
        static $gtype: GObject.GType<LargeBinaryDataType>;

        // Constructors of Arrow.LargeBinaryDataType

        constructor(properties?: Partial<LargeBinaryDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): LargeBinaryDataType;
    }

    module LargeBinaryScalar {
        // Constructor properties interface

        interface ConstructorProps extends BaseBinaryScalar.ConstructorProps {}
    }

    class LargeBinaryScalar extends BaseBinaryScalar {
        static $gtype: GObject.GType<LargeBinaryScalar>;

        // Constructors of Arrow.LargeBinaryScalar

        constructor(properties?: Partial<LargeBinaryScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: Buffer): LargeBinaryScalar;
    }

    module LargeListArray {
        // Constructor properties interface

        interface ConstructorProps extends Array.ConstructorProps {
            raw_values: Array;
            rawValues: Array;
        }
    }

    class LargeListArray extends Array {
        static $gtype: GObject.GType<LargeListArray>;

        // Own properties of Arrow.LargeListArray

        get raw_values(): Array;
        get rawValues(): Array;

        // Constructors of Arrow.LargeListArray

        constructor(properties?: Partial<LargeListArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            data_type: DataType,
            length: number,
            value_offsets: Buffer,
            values: Array,
            null_bitmap: Buffer | null,
            n_nulls: number,
        ): LargeListArray;

        // Own methods of Arrow.LargeListArray

        get_value(i: number): Array;
        get_value_length(i: number): number;
        get_value_offset(i: number): number;
        get_value_offsets(): number[];
        get_value_type(): DataType;
        // Conflicted with Arrow.Array.get_value_type
        get_value_type(...args: never[]): any;
        get_values(): Array;
    }

    module LargeListArrayBuilder {
        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class LargeListArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<LargeListArrayBuilder>;

        // Constructors of Arrow.LargeListArrayBuilder

        constructor(properties?: Partial<LargeListArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type: LargeListDataType): LargeListArrayBuilder;

        // Own methods of Arrow.LargeListArrayBuilder

        append_value(): boolean;
        get_value_builder(): ArrayBuilder;
    }

    module LargeListDataType {
        // Constructor properties interface

        interface ConstructorProps extends DataType.ConstructorProps {}
    }

    class LargeListDataType extends DataType {
        static $gtype: GObject.GType<LargeListDataType>;

        // Constructors of Arrow.LargeListDataType

        constructor(properties?: Partial<LargeListDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](field: Field): LargeListDataType;

        // Own methods of Arrow.LargeListDataType

        get_field(): Field;
    }

    module LargeListScalar {
        // Constructor properties interface

        interface ConstructorProps extends BaseListScalar.ConstructorProps {}
    }

    class LargeListScalar extends BaseListScalar {
        static $gtype: GObject.GType<LargeListScalar>;

        // Constructors of Arrow.LargeListScalar

        constructor(properties?: Partial<LargeListScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: LargeListArray): LargeListScalar;
    }

    module LargeStringArray {
        // Constructor properties interface

        interface ConstructorProps extends LargeBinaryArray.ConstructorProps {}
    }

    class LargeStringArray extends LargeBinaryArray {
        static $gtype: GObject.GType<LargeStringArray>;

        // Constructors of Arrow.LargeStringArray

        constructor(properties?: Partial<LargeStringArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            length: number,
            value_offsets: Buffer,
            value_data: Buffer,
            null_bitmap: Buffer | null,
            n_nulls: number,
        ): LargeStringArray;

        // Own methods of Arrow.LargeStringArray

        get_string(i: number): string;
    }

    module LargeStringArrayBuilder {
        // Constructor properties interface

        interface ConstructorProps extends LargeBinaryArrayBuilder.ConstructorProps {}
    }

    class LargeStringArrayBuilder extends LargeBinaryArrayBuilder {
        static $gtype: GObject.GType<LargeStringArrayBuilder>;

        // Constructors of Arrow.LargeStringArrayBuilder

        constructor(properties?: Partial<LargeStringArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): LargeStringArrayBuilder;

        // Own methods of Arrow.LargeStringArrayBuilder

        append_string(value: string): boolean;
        append_string_len(value: string, length: number): boolean;
        /**
         * Append multiple values at once. It's more efficient than multiple
         * `append` and `append_null` calls.
         * @param values The array of strings.
         * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth @is_valids is %TRUE, the Nth @values is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_strings(values: string[], is_valids?: boolean[] | null): boolean;
    }

    module LargeStringDataType {
        // Constructor properties interface

        interface ConstructorProps extends DataType.ConstructorProps {}
    }

    class LargeStringDataType extends DataType {
        static $gtype: GObject.GType<LargeStringDataType>;

        // Constructors of Arrow.LargeStringDataType

        constructor(properties?: Partial<LargeStringDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): LargeStringDataType;
    }

    module LargeStringScalar {
        // Constructor properties interface

        interface ConstructorProps extends BaseBinaryScalar.ConstructorProps {}
    }

    class LargeStringScalar extends BaseBinaryScalar {
        static $gtype: GObject.GType<LargeStringScalar>;

        // Constructors of Arrow.LargeStringScalar

        constructor(properties?: Partial<LargeStringScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: Buffer): LargeStringScalar;
    }

    module ListArray {
        // Constructor properties interface

        interface ConstructorProps extends Array.ConstructorProps {
            raw_values: Array;
            rawValues: Array;
        }
    }

    class ListArray extends Array {
        static $gtype: GObject.GType<ListArray>;

        // Own properties of Arrow.ListArray

        get raw_values(): Array;
        get rawValues(): Array;

        // Constructors of Arrow.ListArray

        constructor(properties?: Partial<ListArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            data_type: DataType,
            length: number,
            value_offsets: Buffer,
            values: Array,
            null_bitmap: Buffer | null,
            n_nulls: number,
        ): ListArray;

        // Own methods of Arrow.ListArray

        get_value(i: number): Array;
        get_value_length(i: number): number;
        get_value_offset(i: number): number;
        get_value_offsets(): number[];
        get_value_type(): DataType;
        // Conflicted with Arrow.Array.get_value_type
        get_value_type(...args: never[]): any;
        get_values(): Array;
    }

    module ListArrayBuilder {
        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class ListArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<ListArrayBuilder>;

        // Constructors of Arrow.ListArrayBuilder

        constructor(properties?: Partial<ListArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type: ListDataType): ListArrayBuilder;

        // Own methods of Arrow.ListArrayBuilder

        append(): boolean;
        append_value(): boolean;
        get_value_builder(): ArrayBuilder;
    }

    module ListDataType {
        // Constructor properties interface

        interface ConstructorProps extends DataType.ConstructorProps {}
    }

    class ListDataType extends DataType {
        static $gtype: GObject.GType<ListDataType>;

        // Constructors of Arrow.ListDataType

        constructor(properties?: Partial<ListDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](field: Field): ListDataType;

        // Own methods of Arrow.ListDataType

        get_field(): Field;
        get_value_field(): Field;
    }

    module ListScalar {
        // Constructor properties interface

        interface ConstructorProps extends BaseListScalar.ConstructorProps {}
    }

    class ListScalar extends BaseListScalar {
        static $gtype: GObject.GType<ListScalar>;

        // Constructors of Arrow.ListScalar

        constructor(properties?: Partial<ListScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: ListArray): ListScalar;
    }

    module LiteralExpression {
        // Constructor properties interface

        interface ConstructorProps extends Expression.ConstructorProps {}
    }

    class LiteralExpression extends Expression {
        static $gtype: GObject.GType<LiteralExpression>;

        // Constructors of Arrow.LiteralExpression

        constructor(properties?: Partial<LiteralExpression.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](datum: Datum): LiteralExpression;
    }

    module LocalFileSystem {
        // Constructor properties interface

        interface ConstructorProps extends FileSystem.ConstructorProps {}
    }

    class LocalFileSystem extends FileSystem {
        static $gtype: GObject.GType<LocalFileSystem>;

        // Constructors of Arrow.LocalFileSystem

        constructor(properties?: Partial<LocalFileSystem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](options?: LocalFileSystemOptions | null): LocalFileSystem;
    }

    module LocalFileSystemOptions {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            use_mmap: boolean;
            useMmap: boolean;
        }
    }

    class LocalFileSystemOptions extends GObject.Object {
        static $gtype: GObject.GType<LocalFileSystemOptions>;

        // Own properties of Arrow.LocalFileSystemOptions

        /**
         * Whether open_input_stream and open_input_file return a mmap'ed file,
         * or a regular one.
         */
        get use_mmap(): boolean;
        set use_mmap(val: boolean);
        /**
         * Whether open_input_stream and open_input_file return a mmap'ed file,
         * or a regular one.
         */
        get useMmap(): boolean;
        set useMmap(val: boolean);

        // Constructors of Arrow.LocalFileSystemOptions

        constructor(properties?: Partial<LocalFileSystemOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): LocalFileSystemOptions;
    }

    module MapArray {
        // Constructor properties interface

        interface ConstructorProps extends ListArray.ConstructorProps {
            items: Array;
            keys: Array;
            offsets: Array;
        }
    }

    class MapArray extends ListArray {
        static $gtype: GObject.GType<MapArray>;

        // Own properties of Arrow.MapArray

        get items(): Array;
        get keys(): Array;
        get offsets(): Array;

        // Constructors of Arrow.MapArray

        constructor(properties?: Partial<MapArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](offsets: Array, keys: Array, items: Array): MapArray;
        // Conflicted with Arrow.ListArray.new

        static ['new'](...args: never[]): any;

        // Own methods of Arrow.MapArray

        get_items(): Array;
        get_keys(): Array;
    }

    module MapArrayBuilder {
        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class MapArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<MapArrayBuilder>;

        // Constructors of Arrow.MapArrayBuilder

        constructor(properties?: Partial<MapArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type: MapDataType): MapArrayBuilder;

        // Own methods of Arrow.MapArrayBuilder

        append_value(): boolean;
        /**
         * Append multiple values at once. It's more efficient than multiple
         * `append` and `append_null` calls.
         * @param offsets The array of signed int.
         * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_values(offsets: number[], is_valids?: boolean[] | null): boolean;
        get_item_builder(): ArrayBuilder;
        get_key_builder(): ArrayBuilder;
        get_value_builder(): ArrayBuilder;
    }

    module MapDataType {
        // Constructor properties interface

        interface ConstructorProps extends ListDataType.ConstructorProps {}
    }

    class MapDataType extends ListDataType {
        static $gtype: GObject.GType<MapDataType>;

        // Constructors of Arrow.MapDataType

        constructor(properties?: Partial<MapDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](key_type: DataType, item_type: DataType): MapDataType;
        // Conflicted with Arrow.ListDataType.new

        static ['new'](...args: never[]): any;

        // Own methods of Arrow.MapDataType

        get_item_type(): DataType;
        get_key_type(): DataType;
    }

    module MapScalar {
        // Constructor properties interface

        interface ConstructorProps extends BaseListScalar.ConstructorProps {}
    }

    class MapScalar extends BaseListScalar {
        static $gtype: GObject.GType<MapScalar>;

        // Constructors of Arrow.MapScalar

        constructor(properties?: Partial<MapScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: StructArray): MapScalar;
    }

    module MatchSubstringOptions {
        // Constructor properties interface

        interface ConstructorProps extends FunctionOptions.ConstructorProps {
            ignore_case: boolean;
            ignoreCase: boolean;
            pattern: string;
        }
    }

    class MatchSubstringOptions extends FunctionOptions {
        static $gtype: GObject.GType<MatchSubstringOptions>;

        // Own properties of Arrow.MatchSubstringOptions

        /**
         * Whether to perform a case-insensitive match.
         */
        get ignore_case(): boolean;
        set ignore_case(val: boolean);
        /**
         * Whether to perform a case-insensitive match.
         */
        get ignoreCase(): boolean;
        set ignoreCase(val: boolean);
        /**
         * The exact substring (or regex, depending on kernel) to look for
         * inside input values.
         */
        get pattern(): string;
        set pattern(val: string);

        // Constructors of Arrow.MatchSubstringOptions

        constructor(properties?: Partial<MatchSubstringOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MatchSubstringOptions;
    }

    module MemoryMappedInputStream {
        // Constructor properties interface

        interface ConstructorProps
            extends SeekableInputStream.ConstructorProps,
                File.ConstructorProps,
                Readable.ConstructorProps {}
    }

    class MemoryMappedInputStream extends SeekableInputStream implements File, Readable {
        static $gtype: GObject.GType<MemoryMappedInputStream>;

        // Constructors of Arrow.MemoryMappedInputStream

        constructor(properties?: Partial<MemoryMappedInputStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](path: string): MemoryMappedInputStream;

        // Inherited methods
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module MemoryPool {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            memory_pool: any;
            memoryPool: any;
        }
    }

    class MemoryPool extends GObject.Object {
        static $gtype: GObject.GType<MemoryPool>;

        // Own properties of Arrow.MemoryPool

        set memory_pool(val: any);
        set memoryPool(val: any);

        // Constructors of Arrow.MemoryPool

        constructor(properties?: Partial<MemoryPool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own static methods of Arrow.MemoryPool

        static ['default'](): MemoryPool;

        // Own methods of Arrow.MemoryPool

        get_backend_name(): string;
        get_bytes_allocated(): number;
        /**
         * Return peak memory allocation in this memory pool.
         * @returns Maximum bytes allocated. If not known (or not implemented),   returns -1.
         */
        get_max_memory(): number;
    }

    module MockFileSystem {
        // Constructor properties interface

        interface ConstructorProps extends FileSystem.ConstructorProps {}
    }

    class MockFileSystem extends FileSystem {
        static $gtype: GObject.GType<MockFileSystem>;

        // Constructors of Arrow.MockFileSystem

        constructor(properties?: Partial<MockFileSystem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module MonthDayNano {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            day: number;
            month: number;
            nanosecond: number;
        }
    }

    class MonthDayNano extends GObject.Object {
        static $gtype: GObject.GType<MonthDayNano>;

        // Own properties of Arrow.MonthDayNano

        /**
         * The day part value.
         */
        get day(): number;
        set day(val: number);
        /**
         * The month part value.
         */
        get month(): number;
        set month(val: number);
        /**
         * The nanosecond part value.
         */
        get nanosecond(): number;
        set nanosecond(val: number);

        // Constructors of Arrow.MonthDayNano

        constructor(properties?: Partial<MonthDayNano.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](month: number, day: number, nanosecond: number): MonthDayNano;

        // Own methods of Arrow.MonthDayNano

        equal(other_month_nano_day: MonthDayNano): boolean;
    }

    module MonthDayNanoIntervalArray {
        // Constructor properties interface

        interface ConstructorProps extends PrimitiveArray.ConstructorProps {}
    }

    class MonthDayNanoIntervalArray extends PrimitiveArray {
        static $gtype: GObject.GType<MonthDayNanoIntervalArray>;

        // Constructors of Arrow.MonthDayNanoIntervalArray

        constructor(properties?: Partial<MonthDayNanoIntervalArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            length: number,
            data: Buffer,
            null_bitmap: Buffer | null,
            n_nulls: number,
        ): MonthDayNanoIntervalArray;

        // Own methods of Arrow.MonthDayNanoIntervalArray

        get_value(i: number): MonthDayNano;
        get_values(): MonthDayNano[] | null;
    }

    module MonthDayNanoIntervalArrayBuilder {
        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class MonthDayNanoIntervalArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<MonthDayNanoIntervalArrayBuilder>;

        // Constructors of Arrow.MonthDayNanoIntervalArrayBuilder

        constructor(properties?: Partial<MonthDayNanoIntervalArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MonthDayNanoIntervalArrayBuilder;

        // Own methods of Arrow.MonthDayNanoIntervalArrayBuilder

        append_value(value: MonthDayNano): boolean;
        /**
         * Append multiple values at once. It's more efficient than multiple
         * `append` calls.
         * @param values The array of a #GArrowMonthDayNano.
         * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_values(values: MonthDayNano[], is_valids?: boolean[] | null): boolean;
    }

    module MonthDayNanoIntervalDataType {
        // Constructor properties interface

        interface ConstructorProps extends IntervalDataType.ConstructorProps {}
    }

    class MonthDayNanoIntervalDataType extends IntervalDataType {
        static $gtype: GObject.GType<MonthDayNanoIntervalDataType>;

        // Constructors of Arrow.MonthDayNanoIntervalDataType

        constructor(properties?: Partial<MonthDayNanoIntervalDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MonthDayNanoIntervalDataType;
    }

    module MonthDayNanoIntervalScalar {
        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class MonthDayNanoIntervalScalar extends Scalar {
        static $gtype: GObject.GType<MonthDayNanoIntervalScalar>;

        // Constructors of Arrow.MonthDayNanoIntervalScalar

        constructor(properties?: Partial<MonthDayNanoIntervalScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: MonthDayNano): MonthDayNanoIntervalScalar;

        // Own methods of Arrow.MonthDayNanoIntervalScalar

        get_value(): MonthDayNano;
    }

    module MonthIntervalArray {
        // Constructor properties interface

        interface ConstructorProps extends NumericArray.ConstructorProps {}
    }

    class MonthIntervalArray extends NumericArray {
        static $gtype: GObject.GType<MonthIntervalArray>;

        // Constructors of Arrow.MonthIntervalArray

        constructor(properties?: Partial<MonthIntervalArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): MonthIntervalArray;

        // Own methods of Arrow.MonthIntervalArray

        get_value(i: number): number;
        get_values(): number[];
    }

    module MonthIntervalArrayBuilder {
        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class MonthIntervalArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<MonthIntervalArrayBuilder>;

        // Constructors of Arrow.MonthIntervalArrayBuilder

        constructor(properties?: Partial<MonthIntervalArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MonthIntervalArrayBuilder;

        // Own methods of Arrow.MonthIntervalArrayBuilder

        append_value(value: number): boolean;
        /**
         * Append multiple values at once. It's more efficient than multiple
         * `append` calls.
         * @param values The array of the month.
         * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_values(values: number[], is_valids?: boolean[] | null): boolean;
    }

    module MonthIntervalDataType {
        // Constructor properties interface

        interface ConstructorProps extends IntervalDataType.ConstructorProps {}
    }

    class MonthIntervalDataType extends IntervalDataType {
        static $gtype: GObject.GType<MonthIntervalDataType>;

        // Constructors of Arrow.MonthIntervalDataType

        constructor(properties?: Partial<MonthIntervalDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MonthIntervalDataType;
    }

    module MonthIntervalScalar {
        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class MonthIntervalScalar extends Scalar {
        static $gtype: GObject.GType<MonthIntervalScalar>;

        // Constructors of Arrow.MonthIntervalScalar

        constructor(properties?: Partial<MonthIntervalScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): MonthIntervalScalar;

        // Own methods of Arrow.MonthIntervalScalar

        get_value(): number;
    }

    module MutableBuffer {
        // Constructor properties interface

        interface ConstructorProps extends Buffer.ConstructorProps {}
    }

    class MutableBuffer extends Buffer {
        static $gtype: GObject.GType<MutableBuffer>;

        // Constructors of Arrow.MutableBuffer

        constructor(properties?: Partial<MutableBuffer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data: Uint8Array | string): MutableBuffer;

        static new_bytes(data: GLib.Bytes | Uint8Array): MutableBuffer;

        // Own methods of Arrow.MutableBuffer

        set_data(offset: number, data: Uint8Array | string): boolean;
        // Conflicted with GObject.Object.set_data
        set_data(...args: never[]): any;
        slice(offset: number, size: number): MutableBuffer;
    }

    module NullArray {
        // Constructor properties interface

        interface ConstructorProps extends Array.ConstructorProps {}
    }

    class NullArray extends Array {
        static $gtype: GObject.GType<NullArray>;

        // Constructors of Arrow.NullArray

        constructor(properties?: Partial<NullArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](length: number): NullArray;
    }

    module NullArrayBuilder {
        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class NullArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<NullArrayBuilder>;

        // Constructors of Arrow.NullArrayBuilder

        constructor(properties?: Partial<NullArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): NullArrayBuilder;
    }

    module NullDataType {
        // Constructor properties interface

        interface ConstructorProps extends DataType.ConstructorProps {}
    }

    class NullDataType extends DataType {
        static $gtype: GObject.GType<NullDataType>;

        // Constructors of Arrow.NullDataType

        constructor(properties?: Partial<NullDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): NullDataType;
    }

    module NullScalar {
        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class NullScalar extends Scalar {
        static $gtype: GObject.GType<NullScalar>;

        // Constructors of Arrow.NullScalar

        constructor(properties?: Partial<NullScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): NullScalar;
    }

    module NumericArray {
        // Constructor properties interface

        interface ConstructorProps extends PrimitiveArray.ConstructorProps {}
    }

    class NumericArray extends PrimitiveArray {
        static $gtype: GObject.GType<NumericArray>;

        // Constructors of Arrow.NumericArray

        constructor(properties?: Partial<NumericArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Arrow.NumericArray

        mean(): number;
    }

    module NumericDataType {
        // Constructor properties interface

        interface ConstructorProps extends FixedWidthDataType.ConstructorProps {}
    }

    abstract class NumericDataType extends FixedWidthDataType {
        static $gtype: GObject.GType<NumericDataType>;

        // Constructors of Arrow.NumericDataType

        constructor(properties?: Partial<NumericDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module ORCFileReader {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            input: SeekableInputStream;
            orc_file_reader: any;
            orcFileReader: any;
        }
    }

    class ORCFileReader extends GObject.Object {
        static $gtype: GObject.GType<ORCFileReader>;

        // Own properties of Arrow.ORCFileReader

        get input(): SeekableInputStream;
        set orc_file_reader(val: any);
        set orcFileReader(val: any);

        // Constructors of Arrow.ORCFileReader

        constructor(properties?: Partial<ORCFileReader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](file: SeekableInputStream): ORCFileReader;

        // Own methods of Arrow.ORCFileReader

        get_field_indexes(): number[] | null;
        get_field_indices(): number[] | null;
        get_n_rows(): number;
        get_n_stripes(): number;
        read_stripe(i: number): RecordBatch | null;
        read_stripes(): Table | null;
        read_type(): Schema | null;
        set_field_indexes(field_indexes?: number[] | null): void;
        set_field_indices(field_indices?: number[] | null): void;
    }

    module OutputStream {
        // Constructor properties interface

        interface ConstructorProps
            extends GObject.Object.ConstructorProps,
                File.ConstructorProps,
                Writable.ConstructorProps {
            output_stream: any;
            outputStream: any;
        }
    }

    class OutputStream extends GObject.Object implements File, Writable {
        static $gtype: GObject.GType<OutputStream>;

        // Own properties of Arrow.OutputStream

        set output_stream(val: any);
        set outputStream(val: any);

        // Constructors of Arrow.OutputStream

        constructor(properties?: Partial<OutputStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Arrow.OutputStream

        align(alignment: number): boolean;
        write_record_batch(record_batch: RecordBatch, options?: WriteOptions | null): number;
        write_tensor(tensor: Tensor): number;

        // Inherited methods
        close(): boolean;
        get_mode(): FileMode;
        is_closed(): boolean;
        tell(): number;
        /**
         * It ensures writing all data on memory to storage.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        flush(): boolean;
        write(data: Uint8Array | string): boolean;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module PrimitiveArray {
        // Constructor properties interface

        interface ConstructorProps extends Array.ConstructorProps {}
    }

    class PrimitiveArray extends Array {
        static $gtype: GObject.GType<PrimitiveArray>;

        // Constructors of Arrow.PrimitiveArray

        constructor(properties?: Partial<PrimitiveArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Arrow.PrimitiveArray

        get_buffer(): Buffer;
        get_data_buffer(): Buffer;
    }

    module ProjectNodeOptions {
        // Constructor properties interface

        interface ConstructorProps extends ExecuteNodeOptions.ConstructorProps {}
    }

    class ProjectNodeOptions extends ExecuteNodeOptions {
        static $gtype: GObject.GType<ProjectNodeOptions>;

        // Constructors of Arrow.ProjectNodeOptions

        constructor(properties?: Partial<ProjectNodeOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](expressions: Expression[], names?: string[] | null): ProjectNodeOptions;
    }

    module QuantileOptions {
        // Constructor properties interface

        interface ConstructorProps extends FunctionOptions.ConstructorProps {
            interpolation: QuantileInterpolation;
            min_count: number;
            minCount: number;
            skip_nulls: boolean;
            skipNulls: boolean;
        }
    }

    class QuantileOptions extends FunctionOptions {
        static $gtype: GObject.GType<QuantileOptions>;

        // Own properties of Arrow.QuantileOptions

        /**
         * Interpolation method to use when quantile lies between two data
         * points.
         */
        get interpolation(): QuantileInterpolation;
        set interpolation(val: QuantileInterpolation);
        /**
         * If less than this many non-null values are observed, emit null.
         */
        get min_count(): number;
        set min_count(val: number);
        /**
         * If less than this many non-null values are observed, emit null.
         */
        get minCount(): number;
        set minCount(val: number);
        /**
         * If true (the default), null values are ignored. Otherwise, if any
         * value is null, emit null.
         */
        get skip_nulls(): boolean;
        set skip_nulls(val: boolean);
        /**
         * If true (the default), null values are ignored. Otherwise, if any
         * value is null, emit null.
         */
        get skipNulls(): boolean;
        set skipNulls(val: boolean);

        // Constructors of Arrow.QuantileOptions

        constructor(properties?: Partial<QuantileOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): QuantileOptions;

        // Own methods of Arrow.QuantileOptions

        get_qs(): number[];
        set_q(q: number): void;
        set_qs(qs: number[]): void;
    }

    module RankOptions {
        // Constructor properties interface

        interface ConstructorProps extends FunctionOptions.ConstructorProps {
            null_placement: NullPlacement;
            nullPlacement: NullPlacement;
            tiebreaker: RankTiebreaker;
        }
    }

    class RankOptions extends FunctionOptions {
        static $gtype: GObject.GType<RankOptions>;

        // Own properties of Arrow.RankOptions

        /**
         * Whether nulls and NaNs are placed at the start or at the end.
         */
        get null_placement(): NullPlacement;
        set null_placement(val: NullPlacement);
        /**
         * Whether nulls and NaNs are placed at the start or at the end.
         */
        get nullPlacement(): NullPlacement;
        set nullPlacement(val: NullPlacement);
        /**
         * Tiebreaker for dealing with equal values in ranks.
         */
        get tiebreaker(): RankTiebreaker;
        set tiebreaker(val: RankTiebreaker);

        // Constructors of Arrow.RankOptions

        constructor(properties?: Partial<RankOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RankOptions;

        // Own methods of Arrow.RankOptions

        /**
         * Add a sort key to be used.
         * @param sort_key The sort key to be added.
         */
        add_sort_key(sort_key: SortKey): void;
        equal(other_options: RankOptions): boolean;
        // Conflicted with Arrow.FunctionOptions.equal
        equal(...args: never[]): any;
        get_sort_keys(): SortKey[];
        /**
         * Set sort keys to be used.
         * @param sort_keys The sort keys to be used.
         */
        set_sort_keys(sort_keys: SortKey[]): void;
    }

    module ReadOptions {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            max_recursion_depth: number;
            maxRecursionDepth: number;
            use_threads: boolean;
            useThreads: boolean;
        }
    }

    class ReadOptions extends GObject.Object {
        static $gtype: GObject.GType<ReadOptions>;

        // Own properties of Arrow.ReadOptions

        /**
         * The maximum permitted schema nesting depth.
         */
        get max_recursion_depth(): number;
        set max_recursion_depth(val: number);
        /**
         * The maximum permitted schema nesting depth.
         */
        get maxRecursionDepth(): number;
        set maxRecursionDepth(val: number);
        /**
         * Whether to use the global CPU thread pool.
         */
        get use_threads(): boolean;
        set use_threads(val: boolean);
        /**
         * Whether to use the global CPU thread pool.
         */
        get useThreads(): boolean;
        set useThreads(val: boolean);

        // Constructors of Arrow.ReadOptions

        constructor(properties?: Partial<ReadOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ReadOptions;

        // Own methods of Arrow.ReadOptions

        get_included_fields(): number[];
        set_included_fields(fields: number[]): void;
    }

    module RecordBatch {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            record_batch: any;
            recordBatch: any;
        }
    }

    class RecordBatch extends GObject.Object {
        static $gtype: GObject.GType<RecordBatch>;

        // Own properties of Arrow.RecordBatch

        set record_batch(val: any);
        set recordBatch(val: any);

        // Constructors of Arrow.RecordBatch

        constructor(properties?: Partial<RecordBatch.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](schema: Schema, n_rows: number, columns: Array[]): RecordBatch;

        // Own static methods of Arrow.RecordBatch

        static ['import'](c_abi_array: any, schema: Schema): RecordBatch | null;

        // Own methods of Arrow.RecordBatch

        add_column(i: number, field: Field, column: Array): RecordBatch | null;
        equal(other_record_batch: RecordBatch): boolean;
        equal_metadata(other_record_batch: RecordBatch, check_metadata: boolean): boolean;
        ['export'](): [boolean, any, any];
        filter(filter: BooleanArray, options?: FilterOptions | null): RecordBatch | null;
        get_column_data(i: number): Array | null;
        get_column_name(i: number): string | null;
        get_n_columns(): number;
        get_n_rows(): number;
        get_schema(): Schema;
        remove_column(i: number): RecordBatch | null;
        serialize(options?: WriteOptions | null): Buffer | null;
        slice(offset: number, length: number): RecordBatch;
        sort_indices(options: SortOptions): UInt64Array | null;
        take(indices: Array, options?: TakeOptions | null): RecordBatch | null;
        to_string(): string | null;
    }

    module RecordBatchBuilder {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            record_batch_builder: any;
            recordBatchBuilder: any;
        }
    }

    class RecordBatchBuilder extends GObject.Object {
        static $gtype: GObject.GType<RecordBatchBuilder>;

        // Own properties of Arrow.RecordBatchBuilder

        set record_batch_builder(val: any);
        set recordBatchBuilder(val: any);

        // Constructors of Arrow.RecordBatchBuilder

        constructor(properties?: Partial<RecordBatchBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](schema: Schema): RecordBatchBuilder;

        // Own methods of Arrow.RecordBatchBuilder

        flush(): RecordBatch;
        get_column_builder(i: number): ArrayBuilder | null;
        get_field(i: number): ArrayBuilder | null;
        get_initial_capacity(): number;
        get_n_columns(): number;
        get_n_fields(): number;
        get_schema(): Schema;
        set_initial_capacity(capacity: number): void;
    }

    module RecordBatchDatum {
        // Constructor properties interface

        interface ConstructorProps extends Datum.ConstructorProps {
            value: RecordBatch;
        }
    }

    class RecordBatchDatum extends Datum {
        static $gtype: GObject.GType<RecordBatchDatum>;

        // Own properties of Arrow.RecordBatchDatum

        get value(): RecordBatch;

        // Constructors of Arrow.RecordBatchDatum

        constructor(properties?: Partial<RecordBatchDatum.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: RecordBatch): RecordBatchDatum;
    }

    module RecordBatchFileReader {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            record_batch_file_reader: any;
            recordBatchFileReader: any;
        }
    }

    /**
     * It wraps `arrow::ipc::RecordBatchFileReader`.
     */
    class RecordBatchFileReader extends GObject.Object {
        static $gtype: GObject.GType<RecordBatchFileReader>;

        // Own properties of Arrow.RecordBatchFileReader

        set record_batch_file_reader(val: any);
        set recordBatchFileReader(val: any);

        // Constructors of Arrow.RecordBatchFileReader

        constructor(properties?: Partial<RecordBatchFileReader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](file: SeekableInputStream): RecordBatchFileReader;

        // Own methods of Arrow.RecordBatchFileReader

        get_n_record_batches(): number;
        get_record_batch(i: number): RecordBatch | null;
        get_schema(): Schema;
        get_version(): MetadataVersion;
        read_record_batch(i: number): RecordBatch | null;
    }

    module RecordBatchFileWriter {
        // Constructor properties interface

        interface ConstructorProps extends RecordBatchStreamWriter.ConstructorProps {}
    }

    /**
     * It wraps `arrow::ipc::RecordBatchFileWriter`.
     */
    class RecordBatchFileWriter extends RecordBatchStreamWriter {
        static $gtype: GObject.GType<RecordBatchFileWriter>;

        // Constructors of Arrow.RecordBatchFileWriter

        constructor(properties?: Partial<RecordBatchFileWriter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](sink: OutputStream, schema: Schema): RecordBatchFileWriter;
    }

    module RecordBatchIterator {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            iterator: any;
        }
    }

    class RecordBatchIterator extends GObject.Object {
        static $gtype: GObject.GType<RecordBatchIterator>;

        // Own properties of Arrow.RecordBatchIterator

        set iterator(val: any);

        // Constructors of Arrow.RecordBatchIterator

        constructor(properties?: Partial<RecordBatchIterator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](record_batches: RecordBatch[]): RecordBatchIterator;

        // Own methods of Arrow.RecordBatchIterator

        equal(other_iterator: RecordBatchIterator): boolean;
        next(): RecordBatch | null;
        to_list(): RecordBatch[];
    }

    module RecordBatchReader {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            record_batch_reader: any;
            recordBatchReader: any;
            sources: any;
        }
    }

    class RecordBatchReader extends GObject.Object {
        static $gtype: GObject.GType<RecordBatchReader>;

        // Own properties of Arrow.RecordBatchReader

        set record_batch_reader(val: any);
        set recordBatchReader(val: any);
        set sources(val: any);

        // Constructors of Arrow.RecordBatchReader

        constructor(properties?: Partial<RecordBatchReader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](record_batches: RecordBatch[], schema?: Schema | null): RecordBatchReader;

        // Own static methods of Arrow.RecordBatchReader

        static ['import'](c_abi_array_stream: any): RecordBatchReader | null;

        // Own methods of Arrow.RecordBatchReader

        ['export'](): any | null;
        get_next_record_batch(): RecordBatch | null;
        get_schema(): Schema;
        get_sources(): GObject.Object[];
        read_all(): Table | null;
        read_next(): RecordBatch | null;
        read_next_record_batch(): RecordBatch | null;
    }

    module RecordBatchStreamReader {
        // Constructor properties interface

        interface ConstructorProps extends RecordBatchReader.ConstructorProps {}
    }

    /**
     * It wraps `arrow::ipc::RecordBatchStreamReader`.
     */
    class RecordBatchStreamReader extends RecordBatchReader {
        static $gtype: GObject.GType<RecordBatchStreamReader>;

        // Constructors of Arrow.RecordBatchStreamReader

        constructor(properties?: Partial<RecordBatchStreamReader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](stream: InputStream): RecordBatchStreamReader;
        // Conflicted with Arrow.RecordBatchReader.new

        static ['new'](...args: never[]): any;
    }

    module RecordBatchStreamWriter {
        // Constructor properties interface

        interface ConstructorProps extends RecordBatchWriter.ConstructorProps {}
    }

    /**
     * It wraps `arrow::ipc::RecordBatchStreamWriter`.
     */
    class RecordBatchStreamWriter extends RecordBatchWriter {
        static $gtype: GObject.GType<RecordBatchStreamWriter>;

        // Constructors of Arrow.RecordBatchStreamWriter

        constructor(properties?: Partial<RecordBatchStreamWriter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](sink: OutputStream, schema: Schema): RecordBatchStreamWriter;
    }

    module RecordBatchWriter {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            record_batch_writer: any;
            recordBatchWriter: any;
        }
    }

    /**
     * It wraps `arrow::ipc::RecordBatchWriter`.
     */
    class RecordBatchWriter extends GObject.Object {
        static $gtype: GObject.GType<RecordBatchWriter>;

        // Own properties of Arrow.RecordBatchWriter

        set record_batch_writer(val: any);
        set recordBatchWriter(val: any);

        // Constructors of Arrow.RecordBatchWriter

        constructor(properties?: Partial<RecordBatchWriter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Arrow.RecordBatchWriter

        close(): boolean;
        write_record_batch(record_batch: RecordBatch): boolean;
        write_table(table: Table): boolean;
    }

    module ResizableBuffer {
        // Constructor properties interface

        interface ConstructorProps extends MutableBuffer.ConstructorProps {}
    }

    class ResizableBuffer extends MutableBuffer {
        static $gtype: GObject.GType<ResizableBuffer>;

        // Constructors of Arrow.ResizableBuffer

        constructor(properties?: Partial<ResizableBuffer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](initial_size: number): ResizableBuffer;
        // Conflicted with Arrow.MutableBuffer.new

        static ['new'](...args: never[]): any;

        // Own methods of Arrow.ResizableBuffer

        reserve(new_capacity: number): boolean;
        resize(new_size: number): boolean;
    }

    module RoundOptions {
        // Constructor properties interface

        interface ConstructorProps extends FunctionOptions.ConstructorProps {
            mode: RoundMode;
            n_digits: number;
            nDigits: number;
        }
    }

    class RoundOptions extends FunctionOptions {
        static $gtype: GObject.GType<RoundOptions>;

        // Own properties of Arrow.RoundOptions

        /**
         * The rounding and tie-breaking mode.
         */
        get mode(): RoundMode;
        set mode(val: RoundMode);
        /**
         * The rounding precision (number of digits to round to).
         */
        get n_digits(): number;
        set n_digits(val: number);
        /**
         * The rounding precision (number of digits to round to).
         */
        get nDigits(): number;
        set nDigits(val: number);

        // Constructors of Arrow.RoundOptions

        constructor(properties?: Partial<RoundOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RoundOptions;
    }

    module RoundToMultipleOptions {
        // Constructor properties interface

        interface ConstructorProps extends FunctionOptions.ConstructorProps {
            mode: RoundMode;
            multiple: Scalar;
        }
    }

    class RoundToMultipleOptions extends FunctionOptions {
        static $gtype: GObject.GType<RoundToMultipleOptions>;

        // Own properties of Arrow.RoundToMultipleOptions

        /**
         * The rounding and tie-breaking mode.
         */
        get mode(): RoundMode;
        set mode(val: RoundMode);
        /**
         * The rounding scale (multiple to round to).
         *
         * Should be a scalar of a type compatible with the argument to be rounded.
         * For example, rounding a decimal value means a decimal multiple is
         * required. Rounding a floating point or integer value means a floating
         * point scalar is required.
         */
        get multiple(): Scalar;
        set multiple(val: Scalar);

        // Constructors of Arrow.RoundToMultipleOptions

        constructor(properties?: Partial<RoundToMultipleOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RoundToMultipleOptions;
    }

    module RunEndEncodeOptions {
        // Constructor properties interface

        interface ConstructorProps extends FunctionOptions.ConstructorProps {
            run_end_data_type: DataType;
            runEndDataType: DataType;
        }
    }

    class RunEndEncodeOptions extends FunctionOptions {
        static $gtype: GObject.GType<RunEndEncodeOptions>;

        // Own properties of Arrow.RunEndEncodeOptions

        /**
         * The data type for run-end.
         */
        get run_end_data_type(): DataType;
        set run_end_data_type(val: DataType);
        /**
         * The data type for run-end.
         */
        get runEndDataType(): DataType;
        set runEndDataType(val: DataType);

        // Constructors of Arrow.RunEndEncodeOptions

        constructor(properties?: Partial<RunEndEncodeOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](run_end_data_type?: DataType | null): RunEndEncodeOptions;
    }

    module RunEndEncodedArray {
        // Constructor properties interface

        interface ConstructorProps extends Array.ConstructorProps {
            run_ends: Array;
            runEnds: Array;
            values: Array;
        }
    }

    class RunEndEncodedArray extends Array {
        static $gtype: GObject.GType<RunEndEncodedArray>;

        // Own properties of Arrow.RunEndEncodedArray

        get run_ends(): Array;
        get runEnds(): Array;
        get values(): Array;

        // Constructors of Arrow.RunEndEncodedArray

        constructor(properties?: Partial<RunEndEncodedArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            data_type: DataType,
            logical_length: number,
            run_ends: Array,
            values: Array,
            logical_offset: number,
        ): RunEndEncodedArray;

        // Own methods of Arrow.RunEndEncodedArray

        decode(): Array | null;
        find_physical_length(): number;
        find_physical_offset(): number;
        get_logical_run_ends(): Array;
        get_logical_values(): Array;
        get_run_ends(): Array;
        get_values(): Array;
    }

    module RunEndEncodedDataType {
        // Constructor properties interface

        interface ConstructorProps extends FixedWidthDataType.ConstructorProps {}
    }

    class RunEndEncodedDataType extends FixedWidthDataType {
        static $gtype: GObject.GType<RunEndEncodedDataType>;

        // Constructors of Arrow.RunEndEncodedDataType

        constructor(properties?: Partial<RunEndEncodedDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](run_end_data_type: DataType, value_data_type: DataType): RunEndEncodedDataType;

        // Own methods of Arrow.RunEndEncodedDataType

        get_run_end_data_type(): DataType;
        get_value_data_type(): DataType;
    }

    module S3FileSystem {
        // Constructor properties interface

        interface ConstructorProps extends FileSystem.ConstructorProps {}
    }

    class S3FileSystem extends FileSystem {
        static $gtype: GObject.GType<S3FileSystem>;

        // Constructors of Arrow.S3FileSystem

        constructor(properties?: Partial<S3FileSystem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module S3GlobalOptions {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            log_level: S3LogLevel;
            logLevel: S3LogLevel;
        }
    }

    class S3GlobalOptions extends GObject.Object {
        static $gtype: GObject.GType<S3GlobalOptions>;

        // Own properties of Arrow.S3GlobalOptions

        /**
         * The log level of S3 APIs.
         */
        get log_level(): S3LogLevel;
        set log_level(val: S3LogLevel);
        /**
         * The log level of S3 APIs.
         */
        get logLevel(): S3LogLevel;
        set logLevel(val: S3LogLevel);

        // Constructors of Arrow.S3GlobalOptions

        constructor(properties?: Partial<S3GlobalOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): S3GlobalOptions;
    }

    module Scalar {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            data_type: DataType;
            dataType: DataType;
            scalar: any;
        }
    }

    abstract class Scalar extends GObject.Object {
        static $gtype: GObject.GType<Scalar>;

        // Own properties of Arrow.Scalar

        /**
         * The data type of the scalar.
         */
        set data_type(val: DataType);
        /**
         * The data type of the scalar.
         */
        set dataType(val: DataType);
        set scalar(val: any);

        // Constructors of Arrow.Scalar

        constructor(properties?: Partial<Scalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own static methods of Arrow.Scalar

        static parse(data_type: DataType, data: Uint8Array | string): Scalar | null;

        // Own methods of Arrow.Scalar

        cast(data_type: DataType, options?: CastOptions | null): Scalar | null;
        equal(other_scalar: Scalar): boolean;
        equal_options(other_scalar: Scalar, options?: EqualOptions | null): boolean;
        get_data_type(): DataType;
        is_valid(): boolean;
        to_string(): string;
    }

    module ScalarAggregateOptions {
        // Constructor properties interface

        interface ConstructorProps extends FunctionOptions.ConstructorProps {
            min_count: number;
            minCount: number;
            skip_nulls: boolean;
            skipNulls: boolean;
        }
    }

    class ScalarAggregateOptions extends FunctionOptions {
        static $gtype: GObject.GType<ScalarAggregateOptions>;

        // Own properties of Arrow.ScalarAggregateOptions

        /**
         * The minimum required number of values.
         */
        get min_count(): number;
        set min_count(val: number);
        /**
         * The minimum required number of values.
         */
        get minCount(): number;
        set minCount(val: number);
        /**
         * Whether NULLs are skipped or not.
         */
        get skip_nulls(): boolean;
        set skip_nulls(val: boolean);
        /**
         * Whether NULLs are skipped or not.
         */
        get skipNulls(): boolean;
        set skipNulls(val: boolean);

        // Constructors of Arrow.ScalarAggregateOptions

        constructor(properties?: Partial<ScalarAggregateOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ScalarAggregateOptions;
    }

    module ScalarDatum {
        // Constructor properties interface

        interface ConstructorProps extends Datum.ConstructorProps {
            value: Scalar;
        }
    }

    class ScalarDatum extends Datum {
        static $gtype: GObject.GType<ScalarDatum>;

        // Own properties of Arrow.ScalarDatum

        get value(): Scalar;

        // Constructors of Arrow.ScalarDatum

        constructor(properties?: Partial<ScalarDatum.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: Scalar): ScalarDatum;
    }

    module Schema {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            schema: any;
        }
    }

    class Schema extends GObject.Object {
        static $gtype: GObject.GType<Schema>;

        // Own properties of Arrow.Schema

        set schema(val: any);

        // Constructors of Arrow.Schema

        constructor(properties?: Partial<Schema.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](fields: Field[]): Schema;

        // Own static methods of Arrow.Schema

        static ['import'](c_abi_schema: any): Schema | null;

        // Own methods of Arrow.Schema

        add_field(i: number, field: Field): Schema | null;
        equal(other_schema: Schema): boolean;
        ['export'](): any | null;
        get_field(i: number): Field;
        get_field_by_name(name: string): Field;
        get_field_index(name: string): number;
        get_fields(): Field[];
        get_metadata(): GLib.HashTable<string, string> | null;
        has_metadata(): boolean;
        n_fields(): number;
        remove_field(i: number): Schema | null;
        replace_field(i: number, field: Field): Schema | null;
        to_string(): string;
        to_string_metadata(show_metadata: boolean): string;
        with_metadata(metadata: { [key: string]: any } | GLib.HashTable<string, string>): Schema;
    }

    module SeekableInputStream {
        // Constructor properties interface

        interface ConstructorProps
            extends InputStream.ConstructorProps,
                File.ConstructorProps,
                Readable.ConstructorProps {}
    }

    class SeekableInputStream extends InputStream implements File, Readable {
        static $gtype: GObject.GType<SeekableInputStream>;

        // Constructors of Arrow.SeekableInputStream

        constructor(properties?: Partial<SeekableInputStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Arrow.SeekableInputStream

        get_size(): number;
        get_support_zero_copy(): boolean;
        peek(n_bytes: number): GLib.Bytes;
        read_at(position: number, n_bytes: number): Buffer | null;
        read_at_bytes(position: number, n_bytes: number): GLib.Bytes | null;

        // Inherited methods
        close(): boolean;
        get_mode(): FileMode;
        is_closed(): boolean;
        tell(): number;
        read(n_bytes: number): Buffer | null;
        // Conflicted with Gio.InputStream.read
        read(...args: never[]): any;
        read_bytes(n_bytes: number): GLib.Bytes | null;
        // Conflicted with Gio.InputStream.read_bytes
        read_bytes(...args: never[]): any;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module SetLookupOptions {
        // Constructor properties interface

        interface ConstructorProps extends FunctionOptions.ConstructorProps {
            skip_nulls: boolean;
            skipNulls: boolean;
            value_set: Datum;
            valueSet: Datum;
        }
    }

    class SetLookupOptions extends FunctionOptions {
        static $gtype: GObject.GType<SetLookupOptions>;

        // Own properties of Arrow.SetLookupOptions

        /**
         * Whether NULLs are skipped or not.
         */
        get skip_nulls(): boolean;
        set skip_nulls(val: boolean);
        /**
         * Whether NULLs are skipped or not.
         */
        get skipNulls(): boolean;
        set skipNulls(val: boolean);
        /**
         * The set of values to look up input values into.
         */
        get value_set(): Datum;
        set value_set(val: Datum);
        /**
         * The set of values to look up input values into.
         */
        get valueSet(): Datum;
        set valueSet(val: Datum);

        // Constructors of Arrow.SetLookupOptions

        constructor(properties?: Partial<SetLookupOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value_set?: Datum | null): SetLookupOptions;
    }

    module SinkNodeOptions {
        // Constructor properties interface

        interface ConstructorProps extends ExecuteNodeOptions.ConstructorProps {}
    }

    class SinkNodeOptions extends ExecuteNodeOptions {
        static $gtype: GObject.GType<SinkNodeOptions>;

        // Constructors of Arrow.SinkNodeOptions

        constructor(properties?: Partial<SinkNodeOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SinkNodeOptions;

        // Own methods of Arrow.SinkNodeOptions

        get_reader(schema: Schema): RecordBatchReader;
    }

    module SlowFileSystem {
        // Constructor properties interface

        interface ConstructorProps extends FileSystem.ConstructorProps {
            base_file_system: FileSystem;
            baseFileSystem: FileSystem;
        }
    }

    class SlowFileSystem extends FileSystem {
        static $gtype: GObject.GType<SlowFileSystem>;

        // Own properties of Arrow.SlowFileSystem

        get base_file_system(): FileSystem;
        get baseFileSystem(): FileSystem;

        // Constructors of Arrow.SlowFileSystem

        constructor(properties?: Partial<SlowFileSystem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_average_latency(base_file_system: FileSystem, average_latency: number): SlowFileSystem;

        static new_average_latency_and_seed(
            base_file_system: FileSystem,
            average_latency: number,
            seed: number,
        ): SlowFileSystem;
    }

    module SortKey {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            order: SortOrder;
            target: string;
        }
    }

    class SortKey extends GObject.Object {
        static $gtype: GObject.GType<SortKey>;

        // Own properties of Arrow.SortKey

        /**
         * How to order values.
         */
        get order(): SortOrder;
        /**
         * A name or dot path for the sort target.
         *
         *     dot_path = '.' name
         *              | '[' digit+ ']'
         *              | dot_path+
         */
        get target(): string;

        // Constructors of Arrow.SortKey

        constructor(properties?: Partial<SortKey.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](target: string, order: SortOrder): SortKey;

        // Own methods of Arrow.SortKey

        equal(other_sort_key: SortKey): boolean;
    }

    module SortOptions {
        // Constructor properties interface

        interface ConstructorProps extends FunctionOptions.ConstructorProps {}
    }

    class SortOptions extends FunctionOptions {
        static $gtype: GObject.GType<SortOptions>;

        // Constructors of Arrow.SortOptions

        constructor(properties?: Partial<SortOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](sort_keys?: SortKey[] | null): SortOptions;

        // Own methods of Arrow.SortOptions

        /**
         * Add a sort key to be used.
         * @param sort_key The sort key to be added.
         */
        add_sort_key(sort_key: SortKey): void;
        equal(other_options: SortOptions): boolean;
        // Conflicted with Arrow.FunctionOptions.equal
        equal(...args: never[]): any;
        get_sort_keys(): SortKey[];
        /**
         * Set sort keys to be used.
         * @param sort_keys The sort keys to be used.
         */
        set_sort_keys(sort_keys: SortKey[]): void;
    }

    module SourceNodeOptions {
        // Constructor properties interface

        interface ConstructorProps extends ExecuteNodeOptions.ConstructorProps {
            reader: RecordBatchReader;
            record_batch: RecordBatch;
            recordBatch: RecordBatch;
        }
    }

    class SourceNodeOptions extends ExecuteNodeOptions {
        static $gtype: GObject.GType<SourceNodeOptions>;

        // Own properties of Arrow.SourceNodeOptions

        get reader(): RecordBatchReader;
        get record_batch(): RecordBatch;
        get recordBatch(): RecordBatch;

        // Constructors of Arrow.SourceNodeOptions

        constructor(properties?: Partial<SourceNodeOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_record_batch(record_batch: RecordBatch): SourceNodeOptions;

        static new_record_batch_reader(reader: RecordBatchReader): SourceNodeOptions;

        static new_table(table: Table): SourceNodeOptions;
    }

    module SparseUnionArray {
        // Constructor properties interface

        interface ConstructorProps extends UnionArray.ConstructorProps {}
    }

    class SparseUnionArray extends UnionArray {
        static $gtype: GObject.GType<SparseUnionArray>;

        // Constructors of Arrow.SparseUnionArray

        constructor(properties?: Partial<SparseUnionArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](type_ids: Int8Array, fields: Array[]): SparseUnionArray;

        static new_data_type(data_type: SparseUnionDataType, type_ids: Int8Array, fields: Array[]): SparseUnionArray;
    }

    module SparseUnionArrayBuilder {
        // Constructor properties interface

        interface ConstructorProps extends UnionArrayBuilder.ConstructorProps {}
    }

    class SparseUnionArrayBuilder extends UnionArrayBuilder {
        static $gtype: GObject.GType<SparseUnionArrayBuilder>;

        // Constructors of Arrow.SparseUnionArrayBuilder

        constructor(properties?: Partial<SparseUnionArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type?: SparseUnionDataType | null): SparseUnionArrayBuilder;
    }

    module SparseUnionDataType {
        // Constructor properties interface

        interface ConstructorProps extends UnionDataType.ConstructorProps {}
    }

    class SparseUnionDataType extends UnionDataType {
        static $gtype: GObject.GType<SparseUnionDataType>;

        // Constructors of Arrow.SparseUnionDataType

        constructor(properties?: Partial<SparseUnionDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](fields: Field[], type_codes: Uint8Array | string): SparseUnionDataType;
    }

    module SparseUnionScalar {
        // Constructor properties interface

        interface ConstructorProps extends UnionScalar.ConstructorProps {}
    }

    class SparseUnionScalar extends UnionScalar {
        static $gtype: GObject.GType<SparseUnionScalar>;

        // Constructors of Arrow.SparseUnionScalar

        constructor(properties?: Partial<SparseUnionScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type: SparseUnionDataType, type_code: number, value: Scalar): SparseUnionScalar;
    }

    module StringArray {
        // Constructor properties interface

        interface ConstructorProps extends BinaryArray.ConstructorProps {}
    }

    class StringArray extends BinaryArray {
        static $gtype: GObject.GType<StringArray>;

        // Constructors of Arrow.StringArray

        constructor(properties?: Partial<StringArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            length: number,
            value_offsets: Buffer,
            value_data: Buffer,
            null_bitmap: Buffer | null,
            n_nulls: number,
        ): StringArray;

        // Own methods of Arrow.StringArray

        get_string(i: number): string;
    }

    module StringArrayBuilder {
        // Constructor properties interface

        interface ConstructorProps extends BinaryArrayBuilder.ConstructorProps {}
    }

    class StringArrayBuilder extends BinaryArrayBuilder {
        static $gtype: GObject.GType<StringArrayBuilder>;

        // Constructors of Arrow.StringArrayBuilder

        constructor(properties?: Partial<StringArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StringArrayBuilder;

        // Own methods of Arrow.StringArrayBuilder

        append(value: string): boolean;
        // Conflicted with Arrow.BinaryArrayBuilder.append
        append(...args: never[]): any;
        append_string(value: string): boolean;
        append_string_len(value: string, length: number): boolean;
        /**
         * Append multiple values at once. It's more efficient than multiple
         * `append` and `append_null` calls.
         * @param values The array of strings.
         * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth @is_valids is %TRUE, the Nth @values is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_strings(values: string[], is_valids?: boolean[] | null): boolean;
    }

    module StringDataType {
        // Constructor properties interface

        interface ConstructorProps extends DataType.ConstructorProps {}
    }

    class StringDataType extends DataType {
        static $gtype: GObject.GType<StringDataType>;

        // Constructors of Arrow.StringDataType

        constructor(properties?: Partial<StringDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StringDataType;
    }

    module StringDictionaryArrayBuilder {
        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class StringDictionaryArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<StringDictionaryArrayBuilder>;

        // Constructors of Arrow.StringDictionaryArrayBuilder

        constructor(properties?: Partial<StringDictionaryArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StringDictionaryArrayBuilder;

        // Own methods of Arrow.StringDictionaryArrayBuilder

        append_array(array: StringArray): boolean;
        /**
         * Append dictionary indices directly without modifying the internal memo.
         * @param values The array of indices.
         * @param is_valids The array of   %TRUE or %FALSE that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_indices(values: number[], is_valids?: boolean[] | null): boolean;
        append_string(value: string): boolean;
        finish_delta(): [boolean, Array, Array];
        get_dictionary_length(): number;
        insert_memo_values(values: StringArray): boolean;
        /**
         * Reset and also clear accumulated dictionary values in memo table.
         */
        reset_full(): void;
    }

    module StringScalar {
        // Constructor properties interface

        interface ConstructorProps extends BaseBinaryScalar.ConstructorProps {}
    }

    class StringScalar extends BaseBinaryScalar {
        static $gtype: GObject.GType<StringScalar>;

        // Constructors of Arrow.StringScalar

        constructor(properties?: Partial<StringScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: Buffer): StringScalar;
    }

    module StructArray {
        // Constructor properties interface

        interface ConstructorProps extends Array.ConstructorProps {}
    }

    class StructArray extends Array {
        static $gtype: GObject.GType<StructArray>;

        // Constructors of Arrow.StructArray

        constructor(properties?: Partial<StructArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            data_type: DataType,
            length: number,
            fields: Array[],
            null_bitmap: Buffer | null,
            n_nulls: number,
        ): StructArray;

        // Own methods of Arrow.StructArray

        flatten(): Array[];
        get_field(i: number): Array;
        get_fields(): Array[];
    }

    module StructArrayBuilder {
        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class StructArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<StructArrayBuilder>;

        // Constructors of Arrow.StructArrayBuilder

        constructor(properties?: Partial<StructArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type: StructDataType): StructArrayBuilder;

        // Own methods of Arrow.StructArrayBuilder

        append(): boolean;
        append_value(): boolean;
        get_field_builder(i: number): ArrayBuilder;
        get_field_builders(): ArrayBuilder[];
    }

    module StructDataType {
        // Constructor properties interface

        interface ConstructorProps extends DataType.ConstructorProps {}
    }

    class StructDataType extends DataType {
        static $gtype: GObject.GType<StructDataType>;

        // Constructors of Arrow.StructDataType

        constructor(properties?: Partial<StructDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](fields: Field[]): StructDataType;

        // Own methods of Arrow.StructDataType

        get_field(i: number): Field | null;
        get_field_by_name(name: string): Field | null;
        get_field_index(name: string): number;
        get_fields(): Field[];
        get_n_fields(): number;
    }

    module StructScalar {
        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class StructScalar extends Scalar {
        static $gtype: GObject.GType<StructScalar>;

        // Constructors of Arrow.StructScalar

        constructor(properties?: Partial<StructScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type: StructDataType, value: Scalar[]): StructScalar;

        // Own methods of Arrow.StructScalar

        get_value(): Scalar[];
    }

    module SubTreeFileSystem {
        // Constructor properties interface

        interface ConstructorProps extends FileSystem.ConstructorProps {
            base_file_system: FileSystem;
            baseFileSystem: FileSystem;
        }
    }

    class SubTreeFileSystem extends FileSystem {
        static $gtype: GObject.GType<SubTreeFileSystem>;

        // Own properties of Arrow.SubTreeFileSystem

        get base_file_system(): FileSystem;
        get baseFileSystem(): FileSystem;

        // Constructors of Arrow.SubTreeFileSystem

        constructor(properties?: Partial<SubTreeFileSystem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](base_path: string, base_file_system: FileSystem): SubTreeFileSystem;
    }

    module Table {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            table: any;
        }
    }

    class Table extends GObject.Object {
        static $gtype: GObject.GType<Table>;

        // Own properties of Arrow.Table

        set table(val: any);

        // Constructors of Arrow.Table

        constructor(properties?: Partial<Table.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_arrays(schema: Schema, arrays: Array[]): Table;

        static new_chunked_arrays(schema: Schema, chunked_arrays: ChunkedArray[]): Table;

        static new_record_batches(schema: Schema, record_batches: RecordBatch[]): Table;

        // Own methods of Arrow.Table

        add_column(i: number, field: Field, chunked_array: ChunkedArray): Table | null;
        combine_chunks(): Table | null;
        concatenate(other_tables: Table[], options?: TableConcatenateOptions | null): Table | null;
        equal(other_table: Table): boolean;
        equal_metadata(other_table: Table, check_metadata: boolean): boolean;
        filter(filter: BooleanArray, options?: FilterOptions | null): Table | null;
        filter_chunked_array(filter: ChunkedArray, options?: FilterOptions | null): Table | null;
        get_column_data(i: number): ChunkedArray | null;
        get_n_columns(): number;
        get_n_rows(): number;
        get_schema(): Schema;
        remove_column(i: number): Table | null;
        replace_column(i: number, field: Field, chunked_array: ChunkedArray): Table | null;
        slice(offset: number, length: number): Table;
        sort_indices(options: SortOptions): UInt64Array | null;
        take(indices: Array, options?: TakeOptions | null): Table | null;
        take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): Table | null;
        to_string(): string | null;
        /**
         * Writes the `table` as Feather format data to the `sink`.
         * @param sink The output.
         * @param properties The properties for this write.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        write_as_feather(sink: OutputStream, properties?: FeatherWriteProperties | null): boolean;
    }

    module TableBatchReader {
        // Constructor properties interface

        interface ConstructorProps extends RecordBatchReader.ConstructorProps {}
    }

    class TableBatchReader extends RecordBatchReader {
        static $gtype: GObject.GType<TableBatchReader>;

        // Constructors of Arrow.TableBatchReader

        constructor(properties?: Partial<TableBatchReader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](table: Table): TableBatchReader;
        // Conflicted with Arrow.RecordBatchReader.new

        static ['new'](...args: never[]): any;

        // Own methods of Arrow.TableBatchReader

        /**
         * Set the desired maximum chunk size of record batches.
         *
         * The actual chunk size of each record batch may be smaller,
         * depending on actual chunking characteristics of each table column.
         * @param max_chunk_size The maximum chunk size of record batches.
         */
        set_max_chunk_size(max_chunk_size: number): void;
    }

    module TableConcatenateOptions {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            promote_nullability: boolean;
            promoteNullability: boolean;
            unify_schemas: boolean;
            unifySchemas: boolean;
        }
    }

    class TableConcatenateOptions extends GObject.Object {
        static $gtype: GObject.GType<TableConcatenateOptions>;

        // Own properties of Arrow.TableConcatenateOptions

        /**
         * If true, a #GArrowField of #GArrowNullDataType can be unified
         * with a #GArrowField of another type. The unified field will be of
         * the other type and become nullable. Nullability will be promoted
         * to the looser option (nullable if one is not nullable).
         */
        get promote_nullability(): boolean;
        set promote_nullability(val: boolean);
        /**
         * If true, a #GArrowField of #GArrowNullDataType can be unified
         * with a #GArrowField of another type. The unified field will be of
         * the other type and become nullable. Nullability will be promoted
         * to the looser option (nullable if one is not nullable).
         */
        get promoteNullability(): boolean;
        set promoteNullability(val: boolean);
        /**
         * If true, the schemas of the tables will be first unified with
         * fields of the same name being merged, according to
         * #GArrowTableConcatenateOptions:promote-nullability, then each
         * table will be promoted to the unified schema before being
         * concatenated.
         *
         * Otherwise, all tables should have the same schema. Each column in
         * the output table is the result of concatenating the corresponding
         * columns in all input tables.
         */
        get unify_schemas(): boolean;
        set unify_schemas(val: boolean);
        /**
         * If true, the schemas of the tables will be first unified with
         * fields of the same name being merged, according to
         * #GArrowTableConcatenateOptions:promote-nullability, then each
         * table will be promoted to the unified schema before being
         * concatenated.
         *
         * Otherwise, all tables should have the same schema. Each column in
         * the output table is the result of concatenating the corresponding
         * columns in all input tables.
         */
        get unifySchemas(): boolean;
        set unifySchemas(val: boolean);

        // Constructors of Arrow.TableConcatenateOptions

        constructor(properties?: Partial<TableConcatenateOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TableConcatenateOptions;
    }

    module TableDatum {
        // Constructor properties interface

        interface ConstructorProps extends Datum.ConstructorProps {
            value: Table;
        }
    }

    class TableDatum extends Datum {
        static $gtype: GObject.GType<TableDatum>;

        // Own properties of Arrow.TableDatum

        get value(): Table;

        // Constructors of Arrow.TableDatum

        constructor(properties?: Partial<TableDatum.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: Table): TableDatum;
    }

    module TakeOptions {
        // Constructor properties interface

        interface ConstructorProps extends FunctionOptions.ConstructorProps {}
    }

    class TakeOptions extends FunctionOptions {
        static $gtype: GObject.GType<TakeOptions>;

        // Constructors of Arrow.TakeOptions

        constructor(properties?: Partial<TakeOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TakeOptions;
    }

    module TemporalDataType {
        // Constructor properties interface

        interface ConstructorProps extends FixedWidthDataType.ConstructorProps {}
    }

    abstract class TemporalDataType extends FixedWidthDataType {
        static $gtype: GObject.GType<TemporalDataType>;

        // Constructors of Arrow.TemporalDataType

        constructor(properties?: Partial<TemporalDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    module Tensor {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffer: Buffer;
            tensor: any;
        }
    }

    class Tensor extends GObject.Object {
        static $gtype: GObject.GType<Tensor>;

        // Own properties of Arrow.Tensor

        get buffer(): Buffer;
        set tensor(val: any);

        // Constructors of Arrow.Tensor

        constructor(properties?: Partial<Tensor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            data_type: DataType,
            data: Buffer,
            shape: number[],
            strides?: number[] | null,
            dimension_names?: string[] | null,
        ): Tensor;

        // Own methods of Arrow.Tensor

        equal(other_tensor: Tensor): boolean;
        get_buffer(): Buffer;
        get_dimension_name(i: number): string;
        get_n_dimensions(): number;
        get_shape(): number[];
        get_size(): number;
        get_strides(): number[];
        get_value_data_type(): DataType;
        get_value_type(): Type;
        is_column_major(): boolean;
        is_contiguous(): boolean;
        is_mutable(): boolean;
        is_row_major(): boolean;
    }

    module Time32Array {
        // Constructor properties interface

        interface ConstructorProps extends NumericArray.ConstructorProps {}
    }

    class Time32Array extends NumericArray {
        static $gtype: GObject.GType<Time32Array>;

        // Constructors of Arrow.Time32Array

        constructor(properties?: Partial<Time32Array.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            data_type: Time32DataType,
            length: number,
            data: Buffer,
            null_bitmap: Buffer | null,
            n_nulls: number,
        ): Time32Array;

        // Own methods of Arrow.Time32Array

        get_value(i: number): number;
        get_values(): number[];
    }

    module Time32ArrayBuilder {
        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class Time32ArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<Time32ArrayBuilder>;

        // Constructors of Arrow.Time32ArrayBuilder

        constructor(properties?: Partial<Time32ArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type: Time32DataType): Time32ArrayBuilder;

        // Own methods of Arrow.Time32ArrayBuilder

        append(value: number): boolean;
        append_value(value: number): boolean;
        /**
         * Append multiple values at once. It's more efficient than multiple
         * `append` and `append_null` calls.
         * @param values The array of   the number of days since UNIX epoch in signed 32bit integer.
         * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_values(values: number[], is_valids?: boolean[] | null): boolean;
    }

    module Time32DataType {
        // Constructor properties interface

        interface ConstructorProps extends TimeDataType.ConstructorProps {}
    }

    class Time32DataType extends TimeDataType {
        static $gtype: GObject.GType<Time32DataType>;

        // Constructors of Arrow.Time32DataType

        constructor(properties?: Partial<Time32DataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](unit: TimeUnit): Time32DataType;
    }

    module Time32Scalar {
        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class Time32Scalar extends Scalar {
        static $gtype: GObject.GType<Time32Scalar>;

        // Constructors of Arrow.Time32Scalar

        constructor(properties?: Partial<Time32Scalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type: Time32DataType, value: number): Time32Scalar;

        // Own methods of Arrow.Time32Scalar

        get_value(): number;
    }

    module Time64Array {
        // Constructor properties interface

        interface ConstructorProps extends NumericArray.ConstructorProps {}
    }

    class Time64Array extends NumericArray {
        static $gtype: GObject.GType<Time64Array>;

        // Constructors of Arrow.Time64Array

        constructor(properties?: Partial<Time64Array.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            data_type: Time64DataType,
            length: number,
            data: Buffer,
            null_bitmap: Buffer | null,
            n_nulls: number,
        ): Time64Array;

        // Own methods of Arrow.Time64Array

        get_value(i: number): number;
        get_values(): number[];
    }

    module Time64ArrayBuilder {
        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class Time64ArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<Time64ArrayBuilder>;

        // Constructors of Arrow.Time64ArrayBuilder

        constructor(properties?: Partial<Time64ArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type: Time64DataType): Time64ArrayBuilder;

        // Own methods of Arrow.Time64ArrayBuilder

        append(value: number): boolean;
        append_value(value: number): boolean;
        /**
         * Append multiple values at once. It's more efficient than multiple
         * `append` and `append_null` calls.
         * @param values The array of   the number of milliseconds since UNIX epoch in signed 64bit integer.
         * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_values(values: number[], is_valids?: boolean[] | null): boolean;
    }

    module Time64DataType {
        // Constructor properties interface

        interface ConstructorProps extends TimeDataType.ConstructorProps {}
    }

    class Time64DataType extends TimeDataType {
        static $gtype: GObject.GType<Time64DataType>;

        // Constructors of Arrow.Time64DataType

        constructor(properties?: Partial<Time64DataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](unit: TimeUnit): Time64DataType;
    }

    module Time64Scalar {
        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class Time64Scalar extends Scalar {
        static $gtype: GObject.GType<Time64Scalar>;

        // Constructors of Arrow.Time64Scalar

        constructor(properties?: Partial<Time64Scalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type: Time64DataType, value: number): Time64Scalar;

        // Own methods of Arrow.Time64Scalar

        get_value(): number;
    }

    module TimeDataType {
        // Constructor properties interface

        interface ConstructorProps extends TemporalDataType.ConstructorProps {}
    }

    abstract class TimeDataType extends TemporalDataType {
        static $gtype: GObject.GType<TimeDataType>;

        // Constructors of Arrow.TimeDataType

        constructor(properties?: Partial<TimeDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Arrow.TimeDataType

        get_unit(): TimeUnit;
    }

    module TimestampArray {
        // Constructor properties interface

        interface ConstructorProps extends NumericArray.ConstructorProps {}
    }

    class TimestampArray extends NumericArray {
        static $gtype: GObject.GType<TimestampArray>;

        // Constructors of Arrow.TimestampArray

        constructor(properties?: Partial<TimestampArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            data_type: TimestampDataType,
            length: number,
            data: Buffer,
            null_bitmap: Buffer | null,
            n_nulls: number,
        ): TimestampArray;

        // Own methods of Arrow.TimestampArray

        get_value(i: number): number;
        get_values(): number[];
    }

    module TimestampArrayBuilder {
        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class TimestampArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<TimestampArrayBuilder>;

        // Constructors of Arrow.TimestampArrayBuilder

        constructor(properties?: Partial<TimestampArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type: TimestampDataType): TimestampArrayBuilder;

        // Own methods of Arrow.TimestampArrayBuilder

        append(value: number): boolean;
        append_value(value: number): boolean;
        /**
         * Append multiple values at once. It's more efficient than multiple
         * `append` and `append_null` calls.
         * @param values The array of   the number of milliseconds since UNIX epoch in signed 64bit integer.
         * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_values(values: number[], is_valids?: boolean[] | null): boolean;
    }

    module TimestampDataType {
        // Constructor properties interface

        interface ConstructorProps extends TemporalDataType.ConstructorProps {}
    }

    class TimestampDataType extends TemporalDataType {
        static $gtype: GObject.GType<TimestampDataType>;

        // Constructors of Arrow.TimestampDataType

        constructor(properties?: Partial<TimestampDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](unit: TimeUnit): TimestampDataType;

        // Own methods of Arrow.TimestampDataType

        get_unit(): TimeUnit;
    }

    module TimestampScalar {
        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class TimestampScalar extends Scalar {
        static $gtype: GObject.GType<TimestampScalar>;

        // Constructors of Arrow.TimestampScalar

        constructor(properties?: Partial<TimestampScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type: TimestampDataType, value: number): TimestampScalar;

        // Own methods of Arrow.TimestampScalar

        get_value(): number;
    }

    module UInt16Array {
        // Constructor properties interface

        interface ConstructorProps extends NumericArray.ConstructorProps {}
    }

    class UInt16Array extends NumericArray {
        static $gtype: GObject.GType<UInt16Array>;

        // Constructors of Arrow.UInt16Array

        constructor(properties?: Partial<UInt16Array.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): UInt16Array;

        // Own methods of Arrow.UInt16Array

        get_value(i: number): number;
        get_values(): number[];
        sum(): number;
    }

    module UInt16ArrayBuilder {
        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class UInt16ArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<UInt16ArrayBuilder>;

        // Constructors of Arrow.UInt16ArrayBuilder

        constructor(properties?: Partial<UInt16ArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): UInt16ArrayBuilder;

        // Own methods of Arrow.UInt16ArrayBuilder

        append(value: number): boolean;
        append_value(value: number): boolean;
        /**
         * Append multiple values at once. It's more efficient than multiple
         * `append` and `append_null` calls.
         * @param values The array of uint16.
         * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_values(values: number[], is_valids?: boolean[] | null): boolean;
    }

    module UInt16DataType {
        // Constructor properties interface

        interface ConstructorProps extends IntegerDataType.ConstructorProps {}
    }

    class UInt16DataType extends IntegerDataType {
        static $gtype: GObject.GType<UInt16DataType>;

        // Constructors of Arrow.UInt16DataType

        constructor(properties?: Partial<UInt16DataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): UInt16DataType;
    }

    module UInt16Scalar {
        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class UInt16Scalar extends Scalar {
        static $gtype: GObject.GType<UInt16Scalar>;

        // Constructors of Arrow.UInt16Scalar

        constructor(properties?: Partial<UInt16Scalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): UInt16Scalar;

        // Own methods of Arrow.UInt16Scalar

        get_value(): number;
    }

    module UInt32Array {
        // Constructor properties interface

        interface ConstructorProps extends NumericArray.ConstructorProps {}
    }

    class UInt32Array extends NumericArray {
        static $gtype: GObject.GType<UInt32Array>;

        // Constructors of Arrow.UInt32Array

        constructor(properties?: Partial<UInt32Array.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): UInt32Array;

        // Own methods of Arrow.UInt32Array

        get_value(i: number): number;
        get_values(): number[];
        sum(): number;
    }

    module UInt32ArrayBuilder {
        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class UInt32ArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<UInt32ArrayBuilder>;

        // Constructors of Arrow.UInt32ArrayBuilder

        constructor(properties?: Partial<UInt32ArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): UInt32ArrayBuilder;

        // Own methods of Arrow.UInt32ArrayBuilder

        append(value: number): boolean;
        append_value(value: number): boolean;
        /**
         * Append multiple values at once. It's more efficient than multiple
         * `append` and `append_null` calls.
         * @param values The array of uint32.
         * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_values(values: number[], is_valids?: boolean[] | null): boolean;
    }

    module UInt32DataType {
        // Constructor properties interface

        interface ConstructorProps extends IntegerDataType.ConstructorProps {}
    }

    class UInt32DataType extends IntegerDataType {
        static $gtype: GObject.GType<UInt32DataType>;

        // Constructors of Arrow.UInt32DataType

        constructor(properties?: Partial<UInt32DataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): UInt32DataType;
    }

    module UInt32Scalar {
        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class UInt32Scalar extends Scalar {
        static $gtype: GObject.GType<UInt32Scalar>;

        // Constructors of Arrow.UInt32Scalar

        constructor(properties?: Partial<UInt32Scalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): UInt32Scalar;

        // Own methods of Arrow.UInt32Scalar

        get_value(): number;
    }

    module UInt64Array {
        // Constructor properties interface

        interface ConstructorProps extends NumericArray.ConstructorProps {}
    }

    class UInt64Array extends NumericArray {
        static $gtype: GObject.GType<UInt64Array>;

        // Constructors of Arrow.UInt64Array

        constructor(properties?: Partial<UInt64Array.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): UInt64Array;

        // Own methods of Arrow.UInt64Array

        get_value(i: number): number;
        get_values(): number[];
        sum(): number;
    }

    module UInt64ArrayBuilder {
        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class UInt64ArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<UInt64ArrayBuilder>;

        // Constructors of Arrow.UInt64ArrayBuilder

        constructor(properties?: Partial<UInt64ArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): UInt64ArrayBuilder;

        // Own methods of Arrow.UInt64ArrayBuilder

        append(value: number): boolean;
        append_value(value: number): boolean;
        /**
         * Append multiple values at once. It's more efficient than multiple
         * `append` and `append_null` calls.
         * @param values The array of uint64.
         * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_values(values: number[], is_valids?: boolean[] | null): boolean;
    }

    module UInt64DataType {
        // Constructor properties interface

        interface ConstructorProps extends IntegerDataType.ConstructorProps {}
    }

    class UInt64DataType extends IntegerDataType {
        static $gtype: GObject.GType<UInt64DataType>;

        // Constructors of Arrow.UInt64DataType

        constructor(properties?: Partial<UInt64DataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): UInt64DataType;
    }

    module UInt64Scalar {
        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class UInt64Scalar extends Scalar {
        static $gtype: GObject.GType<UInt64Scalar>;

        // Constructors of Arrow.UInt64Scalar

        constructor(properties?: Partial<UInt64Scalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): UInt64Scalar;

        // Own methods of Arrow.UInt64Scalar

        get_value(): number;
    }

    module UInt8Array {
        // Constructor properties interface

        interface ConstructorProps extends NumericArray.ConstructorProps {}
    }

    class UInt8Array extends NumericArray {
        static $gtype: GObject.GType<UInt8Array>;

        // Constructors of Arrow.UInt8Array

        constructor(properties?: Partial<UInt8Array.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): UInt8Array;

        // Own methods of Arrow.UInt8Array

        get_value(i: number): number;
        get_values(): Uint8Array;
        sum(): number;
    }

    module UInt8ArrayBuilder {
        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class UInt8ArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<UInt8ArrayBuilder>;

        // Constructors of Arrow.UInt8ArrayBuilder

        constructor(properties?: Partial<UInt8ArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): UInt8ArrayBuilder;

        // Own methods of Arrow.UInt8ArrayBuilder

        append(value: number): boolean;
        append_value(value: number): boolean;
        /**
         * Append multiple values at once. It's more efficient than multiple
         * `append` and `append_null` calls.
         * @param values The array of uint8.
         * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_values(values: Uint8Array | string, is_valids?: boolean[] | null): boolean;
    }

    module UInt8DataType {
        // Constructor properties interface

        interface ConstructorProps extends IntegerDataType.ConstructorProps {}
    }

    class UInt8DataType extends IntegerDataType {
        static $gtype: GObject.GType<UInt8DataType>;

        // Constructors of Arrow.UInt8DataType

        constructor(properties?: Partial<UInt8DataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): UInt8DataType;
    }

    module UInt8Scalar {
        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class UInt8Scalar extends Scalar {
        static $gtype: GObject.GType<UInt8Scalar>;

        // Constructors of Arrow.UInt8Scalar

        constructor(properties?: Partial<UInt8Scalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): UInt8Scalar;

        // Own methods of Arrow.UInt8Scalar

        get_value(): number;
    }

    module UIntArrayBuilder {
        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class UIntArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<UIntArrayBuilder>;

        // Constructors of Arrow.UIntArrayBuilder

        constructor(properties?: Partial<UIntArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): UIntArrayBuilder;

        // Own methods of Arrow.UIntArrayBuilder

        append(value: number): boolean;
        append_value(value: number): boolean;
        /**
         * Append multiple values at once. It's more efficient than multiple
         * `append` and `append_null` calls.
         * @param values The array of unsigned int.
         * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_values(values: number[], is_valids?: boolean[] | null): boolean;
    }

    module UTF8NormalizeOptions {
        // Constructor properties interface

        interface ConstructorProps extends FunctionOptions.ConstructorProps {
            form: UTF8NormalizeForm;
        }
    }

    class UTF8NormalizeOptions extends FunctionOptions {
        static $gtype: GObject.GType<UTF8NormalizeOptions>;

        // Own properties of Arrow.UTF8NormalizeOptions

        /**
         * The Unicode normalization form to apply.
         */
        get form(): UTF8NormalizeForm;
        set form(val: UTF8NormalizeForm);

        // Constructors of Arrow.UTF8NormalizeOptions

        constructor(properties?: Partial<UTF8NormalizeOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): UTF8NormalizeOptions;
    }

    module UnionArray {
        // Constructor properties interface

        interface ConstructorProps extends Array.ConstructorProps {
            type_ids: Int8Array;
            typeIds: Int8Array;
        }
    }

    class UnionArray extends Array {
        static $gtype: GObject.GType<UnionArray>;

        // Own properties of Arrow.UnionArray

        get type_ids(): Int8Array;
        get typeIds(): Int8Array;

        // Constructors of Arrow.UnionArray

        constructor(properties?: Partial<UnionArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Arrow.UnionArray

        get_child_id(i: number): number;
        get_field(i: number): Array | null;
        get_type_code(i: number): number;
    }

    module UnionArrayBuilder {
        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    abstract class UnionArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<UnionArrayBuilder>;

        // Constructors of Arrow.UnionArrayBuilder

        constructor(properties?: Partial<UnionArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Arrow.UnionArrayBuilder

        append_child(child: ArrayBuilder, filed_name?: string | null): number;
        /**
         * Append an element to the union array.
         *
         * If `builder` is #GArrowDenseUnionArrayBuilder, this must be followed by an
         * append to the appropriate child builder.
         *
         * If `builder` is #GArrowSparseUnionArrayBuilder, this must be
         * followed by appends to all child builders. The corresponding child
         * builder must be appended to independently after this method is
         * called, and all other child builders must have null or empty value
         * appended.
         * @param value A type ID value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_value(value: number): boolean;
    }

    module UnionDataType {
        // Constructor properties interface

        interface ConstructorProps extends DataType.ConstructorProps {}
    }

    abstract class UnionDataType extends DataType {
        static $gtype: GObject.GType<UnionDataType>;

        // Constructors of Arrow.UnionDataType

        constructor(properties?: Partial<UnionDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Arrow.UnionDataType

        get_field(i: number): Field | null;
        get_fields(): Field[];
        get_n_fields(): number;
        get_type_codes(): Uint8Array;
    }

    module UnionScalar {
        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {
            value: Scalar;
        }
    }

    abstract class UnionScalar extends Scalar {
        static $gtype: GObject.GType<UnionScalar>;

        // Own properties of Arrow.UnionScalar

        /**
         * The value of the scalar.
         */
        set value(val: Scalar);

        // Constructors of Arrow.UnionScalar

        constructor(properties?: Partial<UnionScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of Arrow.UnionScalar

        get_type_code(): number;
        get_value(): Scalar;
    }

    module VarianceOptions {
        // Constructor properties interface

        interface ConstructorProps extends FunctionOptions.ConstructorProps {
            ddof: number;
            min_count: number;
            minCount: number;
            skip_nulls: boolean;
            skipNulls: boolean;
        }
    }

    class VarianceOptions extends FunctionOptions {
        static $gtype: GObject.GType<VarianceOptions>;

        // Own properties of Arrow.VarianceOptions

        /**
         * The Delta Degrees of Freedom (ddof) to be used.
         */
        get ddof(): number;
        set ddof(val: number);
        /**
         * If less than this many non-null values are observed, emit null.
         */
        get min_count(): number;
        set min_count(val: number);
        /**
         * If less than this many non-null values are observed, emit null.
         */
        get minCount(): number;
        set minCount(val: number);
        /**
         * Whether NULLs are skipped or not.
         */
        get skip_nulls(): boolean;
        set skip_nulls(val: boolean);
        /**
         * Whether NULLs are skipped or not.
         */
        get skipNulls(): boolean;
        set skipNulls(val: boolean);

        // Constructors of Arrow.VarianceOptions

        constructor(properties?: Partial<VarianceOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): VarianceOptions;
    }

    module WriteOptions {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            alignment: number;
            allow_64bit: boolean;
            allow64bit: boolean;
            codec: Codec;
            max_recursion_depth: number;
            maxRecursionDepth: number;
            use_threads: boolean;
            useThreads: boolean;
            write_legacy_ipc_format: boolean;
            writeLegacyIpcFormat: boolean;
        }
    }

    class WriteOptions extends GObject.Object {
        static $gtype: GObject.GType<WriteOptions>;

        // Own properties of Arrow.WriteOptions

        /**
         * Write padding after memory buffers to this multiple of
         * bytes. Generally 8 or 64.
         */
        get alignment(): number;
        set alignment(val: number);
        /**
         * Whether to allow field lengths that don't fit in a signed 32-bit
         * int. Some implementations may not be able to parse such streams.
         */
        get allow_64bit(): boolean;
        set allow_64bit(val: boolean);
        /**
         * Whether to allow field lengths that don't fit in a signed 32-bit
         * int. Some implementations may not be able to parse such streams.
         */
        get allow64bit(): boolean;
        set allow64bit(val: boolean);
        /**
         * Codec to use for compressing and decompressing record batch body
         * buffers. This is not part of the Arrow IPC protocol and only for
         * internal use (e.g. Feather files).
         *
         * May only be UNCOMPRESSED, LZ4_FRAME and ZSTD.
         */
        get codec(): Codec;
        set codec(val: Codec);
        /**
         * The maximum permitted schema nesting depth.
         */
        get max_recursion_depth(): number;
        set max_recursion_depth(val: number);
        /**
         * The maximum permitted schema nesting depth.
         */
        get maxRecursionDepth(): number;
        set maxRecursionDepth(val: number);
        /**
         * Whether to use the global CPU thread pool.
         */
        get use_threads(): boolean;
        set use_threads(val: boolean);
        /**
         * Whether to use the global CPU thread pool.
         */
        get useThreads(): boolean;
        set useThreads(val: boolean);
        /**
         * Whether to write the pre-0.15.0 encapsulated IPC message format
         * consisting of a 4-byte prefix instead of 8 byte.
         */
        get write_legacy_ipc_format(): boolean;
        set write_legacy_ipc_format(val: boolean);
        /**
         * Whether to write the pre-0.15.0 encapsulated IPC message format
         * consisting of a 4-byte prefix instead of 8 byte.
         */
        get writeLegacyIpcFormat(): boolean;
        set writeLegacyIpcFormat(val: boolean);

        // Constructors of Arrow.WriteOptions

        constructor(properties?: Partial<WriteOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): WriteOptions;
    }

    type AggregateNodeOptionsClass = typeof AggregateNodeOptions;
    type AggregationClass = typeof Aggregation;
    type ArrayBuilderClass = typeof ArrayBuilder;
    type ArrayClass = typeof Array;
    type ArrayDatumClass = typeof ArrayDatum;
    type ArraySortOptionsClass = typeof ArraySortOptions;
    type BaseBinaryScalarClass = typeof BaseBinaryScalar;
    type BaseListScalarClass = typeof BaseListScalar;
    type BinaryArrayBuilderClass = typeof BinaryArrayBuilder;
    type BinaryArrayClass = typeof BinaryArray;
    type BinaryDataTypeClass = typeof BinaryDataType;
    type BinaryDictionaryArrayBuilderClass = typeof BinaryDictionaryArrayBuilder;
    type BinaryScalarClass = typeof BinaryScalar;
    type BooleanArrayBuilderClass = typeof BooleanArrayBuilder;
    type BooleanArrayClass = typeof BooleanArray;
    type BooleanDataTypeClass = typeof BooleanDataType;
    type BooleanScalarClass = typeof BooleanScalar;
    type BufferClass = typeof Buffer;
    type BufferInputStreamClass = typeof BufferInputStream;
    type BufferOutputStreamClass = typeof BufferOutputStream;
    type CSVReadOptionsClass = typeof CSVReadOptions;
    type CSVReaderClass = typeof CSVReader;
    type CallExpressionClass = typeof CallExpression;
    type CastOptionsClass = typeof CastOptions;
    type ChunkedArrayClass = typeof ChunkedArray;
    type ChunkedArrayDatumClass = typeof ChunkedArrayDatum;
    type CodecClass = typeof Codec;
    type CompressedInputStreamClass = typeof CompressedInputStream;
    type CompressedOutputStreamClass = typeof CompressedOutputStream;
    type CountOptionsClass = typeof CountOptions;
    type DataTypeClass = typeof DataType;
    type Date32ArrayBuilderClass = typeof Date32ArrayBuilder;
    type Date32ArrayClass = typeof Date32Array;
    type Date32DataTypeClass = typeof Date32DataType;
    type Date32ScalarClass = typeof Date32Scalar;
    type Date64ArrayBuilderClass = typeof Date64ArrayBuilder;
    type Date64ArrayClass = typeof Date64Array;
    type Date64DataTypeClass = typeof Date64DataType;
    type Date64ScalarClass = typeof Date64Scalar;
    type DatumClass = typeof Datum;
    type DayMillisecondClass = typeof DayMillisecond;
    type DayTimeIntervalArrayBuilderClass = typeof DayTimeIntervalArrayBuilder;
    type DayTimeIntervalArrayClass = typeof DayTimeIntervalArray;
    type DayTimeIntervalDataTypeClass = typeof DayTimeIntervalDataType;
    type DayTimeIntervalScalarClass = typeof DayTimeIntervalScalar;
    type Decimal128ArrayBuilderClass = typeof Decimal128ArrayBuilder;
    type Decimal128ArrayClass = typeof Decimal128Array;
    type Decimal128Class = typeof Decimal128;
    type Decimal128DataTypeClass = typeof Decimal128DataType;
    type Decimal128ScalarClass = typeof Decimal128Scalar;
    type Decimal256ArrayBuilderClass = typeof Decimal256ArrayBuilder;
    type Decimal256ArrayClass = typeof Decimal256Array;
    type Decimal256Class = typeof Decimal256;
    type Decimal256DataTypeClass = typeof Decimal256DataType;
    type Decimal256ScalarClass = typeof Decimal256Scalar;
    type DecimalDataTypeClass = typeof DecimalDataType;
    type DenseUnionArrayBuilderClass = typeof DenseUnionArrayBuilder;
    type DenseUnionArrayClass = typeof DenseUnionArray;
    type DenseUnionDataTypeClass = typeof DenseUnionDataType;
    type DenseUnionScalarClass = typeof DenseUnionScalar;
    type DictionaryArrayClass = typeof DictionaryArray;
    type DictionaryDataTypeClass = typeof DictionaryDataType;
    type DoubleArrayBuilderClass = typeof DoubleArrayBuilder;
    type DoubleArrayClass = typeof DoubleArray;
    type DoubleDataTypeClass = typeof DoubleDataType;
    type DoubleScalarClass = typeof DoubleScalar;
    type EqualOptionsClass = typeof EqualOptions;
    type ExecuteContextClass = typeof ExecuteContext;
    type ExecuteNodeClass = typeof ExecuteNode;
    type ExecuteNodeOptionsClass = typeof ExecuteNodeOptions;
    type ExecutePlanClass = typeof ExecutePlan;
    type ExpressionClass = typeof Expression;
    type ExtensionArrayClass = typeof ExtensionArray;
    type ExtensionDataTypeClass = typeof ExtensionDataType;
    type ExtensionDataTypeRegistryClass = typeof ExtensionDataTypeRegistry;
    type ExtensionScalarClass = typeof ExtensionScalar;
    type FeatherFileReaderClass = typeof FeatherFileReader;
    type FeatherWritePropertiesClass = typeof FeatherWriteProperties;
    type FieldClass = typeof Field;
    type FieldExpressionClass = typeof FieldExpression;
    type FileInfoClass = typeof FileInfo;
    type FileInputStreamClass = typeof FileInputStream;
    type FileInterface = typeof File;
    type FileOutputStreamClass = typeof FileOutputStream;
    type FileSelectorClass = typeof FileSelector;
    type FileSystemClass = typeof FileSystem;
    type FilterNodeOptionsClass = typeof FilterNodeOptions;
    type FilterOptionsClass = typeof FilterOptions;
    type FixedSizeBinaryArrayBuilderClass = typeof FixedSizeBinaryArrayBuilder;
    type FixedSizeBinaryArrayClass = typeof FixedSizeBinaryArray;
    type FixedSizeBinaryDataTypeClass = typeof FixedSizeBinaryDataType;
    type FixedSizeBinaryScalarClass = typeof FixedSizeBinaryScalar;
    type FixedWidthDataTypeClass = typeof FixedWidthDataType;
    type FloatArrayBuilderClass = typeof FloatArrayBuilder;
    type FloatArrayClass = typeof FloatArray;
    type FloatDataTypeClass = typeof FloatDataType;
    type FloatScalarClass = typeof FloatScalar;
    type FloatingPointDataTypeClass = typeof FloatingPointDataType;
    type FunctionClass = typeof Function;
    type FunctionDocClass = typeof FunctionDoc;
    type FunctionOptionsClass = typeof FunctionOptions;
    type GCSFileSystemClass = typeof GCSFileSystem;
    type GIOInputStreamClass = typeof GIOInputStream;
    type GIOOutputStreamClass = typeof GIOOutputStream;
    type HDFSFileSystemClass = typeof HDFSFileSystem;
    type HalfFloatArrayBuilderClass = typeof HalfFloatArrayBuilder;
    type HalfFloatArrayClass = typeof HalfFloatArray;
    type HalfFloatDataTypeClass = typeof HalfFloatDataType;
    type HalfFloatScalarClass = typeof HalfFloatScalar;
    type HashJoinNodeOptionsClass = typeof HashJoinNodeOptions;
    type IndexOptionsClass = typeof IndexOptions;
    type InputStreamClass = typeof InputStream;
    type Int16ArrayBuilderClass = typeof Int16ArrayBuilder;
    type Int16ArrayClass = typeof Int16Array;
    type Int16DataTypeClass = typeof Int16DataType;
    type Int16ScalarClass = typeof Int16Scalar;
    type Int32ArrayBuilderClass = typeof Int32ArrayBuilder;
    type Int32ArrayClass = typeof Int32Array;
    type Int32DataTypeClass = typeof Int32DataType;
    type Int32ScalarClass = typeof Int32Scalar;
    type Int64ArrayBuilderClass = typeof Int64ArrayBuilder;
    type Int64ArrayClass = typeof Int64Array;
    type Int64DataTypeClass = typeof Int64DataType;
    type Int64ScalarClass = typeof Int64Scalar;
    type Int8ArrayBuilderClass = typeof Int8ArrayBuilder;
    type Int8ArrayClass = typeof Int8Array;
    type Int8DataTypeClass = typeof Int8DataType;
    type Int8ScalarClass = typeof Int8Scalar;
    type IntArrayBuilderClass = typeof IntArrayBuilder;
    type IntegerDataTypeClass = typeof IntegerDataType;
    type IntervalDataTypeClass = typeof IntervalDataType;
    type JSONReadOptionsClass = typeof JSONReadOptions;
    type JSONReaderClass = typeof JSONReader;
    type LargeBinaryArrayBuilderClass = typeof LargeBinaryArrayBuilder;
    type LargeBinaryArrayClass = typeof LargeBinaryArray;
    type LargeBinaryDataTypeClass = typeof LargeBinaryDataType;
    type LargeBinaryScalarClass = typeof LargeBinaryScalar;
    type LargeListArrayBuilderClass = typeof LargeListArrayBuilder;
    type LargeListArrayClass = typeof LargeListArray;
    type LargeListDataTypeClass = typeof LargeListDataType;
    type LargeListScalarClass = typeof LargeListScalar;
    type LargeStringArrayBuilderClass = typeof LargeStringArrayBuilder;
    type LargeStringArrayClass = typeof LargeStringArray;
    type LargeStringDataTypeClass = typeof LargeStringDataType;
    type LargeStringScalarClass = typeof LargeStringScalar;
    type ListArrayBuilderClass = typeof ListArrayBuilder;
    type ListArrayClass = typeof ListArray;
    type ListDataTypeClass = typeof ListDataType;
    type ListScalarClass = typeof ListScalar;
    type LiteralExpressionClass = typeof LiteralExpression;
    type LocalFileSystemClass = typeof LocalFileSystem;
    type LocalFileSystemOptionsClass = typeof LocalFileSystemOptions;
    type MapArrayBuilderClass = typeof MapArrayBuilder;
    type MapArrayClass = typeof MapArray;
    type MapDataTypeClass = typeof MapDataType;
    type MapScalarClass = typeof MapScalar;
    type MatchSubstringOptionsClass = typeof MatchSubstringOptions;
    type MemoryMappedInputStreamClass = typeof MemoryMappedInputStream;
    type MemoryPoolClass = typeof MemoryPool;
    type MockFileSystemClass = typeof MockFileSystem;
    type MonthDayNanoClass = typeof MonthDayNano;
    type MonthDayNanoIntervalArrayBuilderClass = typeof MonthDayNanoIntervalArrayBuilder;
    type MonthDayNanoIntervalArrayClass = typeof MonthDayNanoIntervalArray;
    type MonthDayNanoIntervalDataTypeClass = typeof MonthDayNanoIntervalDataType;
    type MonthDayNanoIntervalScalarClass = typeof MonthDayNanoIntervalScalar;
    type MonthIntervalArrayBuilderClass = typeof MonthIntervalArrayBuilder;
    type MonthIntervalArrayClass = typeof MonthIntervalArray;
    type MonthIntervalDataTypeClass = typeof MonthIntervalDataType;
    type MonthIntervalScalarClass = typeof MonthIntervalScalar;
    type MutableBufferClass = typeof MutableBuffer;
    type NullArrayBuilderClass = typeof NullArrayBuilder;
    type NullArrayClass = typeof NullArray;
    type NullDataTypeClass = typeof NullDataType;
    type NullScalarClass = typeof NullScalar;
    type NumericArrayClass = typeof NumericArray;
    type NumericDataTypeClass = typeof NumericDataType;
    type ORCFileReaderClass = typeof ORCFileReader;
    type OutputStreamClass = typeof OutputStream;
    type PrimitiveArrayClass = typeof PrimitiveArray;
    type ProjectNodeOptionsClass = typeof ProjectNodeOptions;
    type QuantileOptionsClass = typeof QuantileOptions;
    type RankOptionsClass = typeof RankOptions;
    type ReadOptionsClass = typeof ReadOptions;
    type ReadableInterface = typeof Readable;
    type RecordBatchBuilderClass = typeof RecordBatchBuilder;
    type RecordBatchClass = typeof RecordBatch;
    type RecordBatchDatumClass = typeof RecordBatchDatum;
    type RecordBatchFileReaderClass = typeof RecordBatchFileReader;
    type RecordBatchFileWriterClass = typeof RecordBatchFileWriter;
    type RecordBatchIteratorClass = typeof RecordBatchIterator;
    type RecordBatchReaderClass = typeof RecordBatchReader;
    type RecordBatchStreamReaderClass = typeof RecordBatchStreamReader;
    type RecordBatchStreamWriterClass = typeof RecordBatchStreamWriter;
    type RecordBatchWriterClass = typeof RecordBatchWriter;
    type ResizableBufferClass = typeof ResizableBuffer;
    type RoundOptionsClass = typeof RoundOptions;
    type RoundToMultipleOptionsClass = typeof RoundToMultipleOptions;
    type RunEndEncodeOptionsClass = typeof RunEndEncodeOptions;
    type RunEndEncodedArrayClass = typeof RunEndEncodedArray;
    type RunEndEncodedDataTypeClass = typeof RunEndEncodedDataType;
    type S3FileSystemClass = typeof S3FileSystem;
    type S3GlobalOptionsClass = typeof S3GlobalOptions;
    type ScalarAggregateOptionsClass = typeof ScalarAggregateOptions;
    type ScalarClass = typeof Scalar;
    type ScalarDatumClass = typeof ScalarDatum;
    type SchemaClass = typeof Schema;
    type SeekableInputStreamClass = typeof SeekableInputStream;
    type SetLookupOptionsClass = typeof SetLookupOptions;
    type SinkNodeOptionsClass = typeof SinkNodeOptions;
    type SlowFileSystemClass = typeof SlowFileSystem;
    type SortKeyClass = typeof SortKey;
    type SortOptionsClass = typeof SortOptions;
    type SourceNodeOptionsClass = typeof SourceNodeOptions;
    type SparseUnionArrayBuilderClass = typeof SparseUnionArrayBuilder;
    type SparseUnionArrayClass = typeof SparseUnionArray;
    type SparseUnionDataTypeClass = typeof SparseUnionDataType;
    type SparseUnionScalarClass = typeof SparseUnionScalar;
    type StringArrayBuilderClass = typeof StringArrayBuilder;
    type StringArrayClass = typeof StringArray;
    type StringDataTypeClass = typeof StringDataType;
    type StringDictionaryArrayBuilderClass = typeof StringDictionaryArrayBuilder;
    type StringScalarClass = typeof StringScalar;
    type StructArrayBuilderClass = typeof StructArrayBuilder;
    type StructArrayClass = typeof StructArray;
    type StructDataTypeClass = typeof StructDataType;
    type StructScalarClass = typeof StructScalar;
    type SubTreeFileSystemClass = typeof SubTreeFileSystem;
    type TableBatchReaderClass = typeof TableBatchReader;
    type TableClass = typeof Table;
    type TableConcatenateOptionsClass = typeof TableConcatenateOptions;
    type TableDatumClass = typeof TableDatum;
    type TakeOptionsClass = typeof TakeOptions;
    type TemporalDataTypeClass = typeof TemporalDataType;
    type TensorClass = typeof Tensor;
    type Time32ArrayBuilderClass = typeof Time32ArrayBuilder;
    type Time32ArrayClass = typeof Time32Array;
    type Time32DataTypeClass = typeof Time32DataType;
    type Time32ScalarClass = typeof Time32Scalar;
    type Time64ArrayBuilderClass = typeof Time64ArrayBuilder;
    type Time64ArrayClass = typeof Time64Array;
    type Time64DataTypeClass = typeof Time64DataType;
    type Time64ScalarClass = typeof Time64Scalar;
    type TimeDataTypeClass = typeof TimeDataType;
    type TimestampArrayBuilderClass = typeof TimestampArrayBuilder;
    type TimestampArrayClass = typeof TimestampArray;
    type TimestampDataTypeClass = typeof TimestampDataType;
    type TimestampScalarClass = typeof TimestampScalar;
    type UInt16ArrayBuilderClass = typeof UInt16ArrayBuilder;
    type UInt16ArrayClass = typeof UInt16Array;
    type UInt16DataTypeClass = typeof UInt16DataType;
    type UInt16ScalarClass = typeof UInt16Scalar;
    type UInt32ArrayBuilderClass = typeof UInt32ArrayBuilder;
    type UInt32ArrayClass = typeof UInt32Array;
    type UInt32DataTypeClass = typeof UInt32DataType;
    type UInt32ScalarClass = typeof UInt32Scalar;
    type UInt64ArrayBuilderClass = typeof UInt64ArrayBuilder;
    type UInt64ArrayClass = typeof UInt64Array;
    type UInt64DataTypeClass = typeof UInt64DataType;
    type UInt64ScalarClass = typeof UInt64Scalar;
    type UInt8ArrayBuilderClass = typeof UInt8ArrayBuilder;
    type UInt8ArrayClass = typeof UInt8Array;
    type UInt8DataTypeClass = typeof UInt8DataType;
    type UInt8ScalarClass = typeof UInt8Scalar;
    type UIntArrayBuilderClass = typeof UIntArrayBuilder;
    type UTF8NormalizeOptionsClass = typeof UTF8NormalizeOptions;
    type UnionArrayBuilderClass = typeof UnionArrayBuilder;
    type UnionArrayClass = typeof UnionArray;
    type UnionDataTypeClass = typeof UnionDataType;
    type UnionScalarClass = typeof UnionScalar;
    type VarianceOptionsClass = typeof VarianceOptions;
    type WritableFileInterface = typeof WritableFile;
    type WritableInterface = typeof Writable;
    type WriteOptionsClass = typeof WriteOptions;
    module File {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface FileNamespace {
        $gtype: GObject.GType<File>;
        prototype: File;
    }
    interface File extends GObject.Object {
        // Own methods of Arrow.File

        close(): boolean;
        get_mode(): FileMode;
        is_closed(): boolean;
        tell(): number;
    }

    export const File: FileNamespace;

    module Readable {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ReadableNamespace {
        $gtype: GObject.GType<Readable>;
        prototype: Readable;
    }
    interface Readable extends GObject.Object {
        // Own methods of Arrow.Readable

        read(n_bytes: number): Buffer | null;
        read_bytes(n_bytes: number): GLib.Bytes | null;
    }

    export const Readable: ReadableNamespace;

    module Writable {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface WritableNamespace {
        $gtype: GObject.GType<Writable>;
        prototype: Writable;
    }
    interface Writable extends GObject.Object {
        // Own methods of Arrow.Writable

        /**
         * It ensures writing all data on memory to storage.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        flush(): boolean;
        write(data: Uint8Array | string): boolean;
    }

    export const Writable: WritableNamespace;

    module WritableFile {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface WritableFileNamespace {
        $gtype: GObject.GType<WritableFile>;
        prototype: WritableFile;
    }
    interface WritableFile extends GObject.Object {
        // Own methods of Arrow.WritableFile

        write_at(position: number, data: Uint8Array | string): boolean;
    }

    export const WritableFile: WritableFileNamespace;

    type TimePoint = number;
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

export default Arrow;
// END
