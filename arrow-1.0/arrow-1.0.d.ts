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
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Arrow {
    /**
     * Arrow-1.0
     */

    /**
     * They are corresponding to `arrow::Compression::type` values.
     */

    /**
     * They are corresponding to `arrow::Compression::type` values.
     */
    export namespace CompressionType {
        export const $gtype: GObject.GType<CompressionType>;
    }

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

    /**
     * They correspond to the values of `arrow::compute::CountOptions::CountMode`.
     */
    export namespace CountMode {
        export const $gtype: GObject.GType<CountMode>;
    }

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

        // Static fields

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
         * Validation errors in expression given for code
         * generation.
         */
        static EXPRESSION_VALIDATION: number;
        /**
         * Execution error while evaluating the expression against a
         * record batch.
         */
        static EXECUTION: number;
        /**
         * Item already exists error.
         */
        static ALREADY_EXISTS: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * They are corresponding to `arrow::io::FileMode::type` values.
     */

    /**
     * They are corresponding to `arrow::io::FileMode::type` values.
     */
    export namespace FileMode {
        export const $gtype: GObject.GType<FileMode>;
    }

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

    /**
     * They are corresponding to `arrow::fs::FileType` values.
     */
    export namespace FileType {
        export const $gtype: GObject.GType<FileType>;
    }

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

    /**
     * They are corresponding to
     * `arrow::compute::FilterOptions::NullSelectionBehavior` values.
     */
    export namespace FilterNullSelectionBehavior {
        export const $gtype: GObject.GType<FilterNullSelectionBehavior>;
    }

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

    /**
     * They are corresponding to `arrow::IntervalType::type` values.
     *
     * Since 7.0.0
     */
    export namespace IntervalType {
        export const $gtype: GObject.GType<IntervalType>;
    }

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

    /**
     * They are corresponding to `arrow::json::UnexpectedFieldBehavior` values.
     */
    export namespace JSONReadUnexpectedFieldBehavior {
        export const $gtype: GObject.GType<JSONReadUnexpectedFieldBehavior>;
    }

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

    /**
     * They correspond to the values of `arrow::compute::JoinType`.
     */
    export namespace JoinType {
        export const $gtype: GObject.GType<JoinType>;
    }

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

    /**
     * They are corresponding to `arrow::ipc::MetadataVersion::type`
     * values.
     */
    export namespace MetadataVersion {
        export const $gtype: GObject.GType<MetadataVersion>;
    }

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

    /**
     * They are corresponding to `arrow::compute::NullPlacement` values.
     */
    export namespace NullPlacement {
        export const $gtype: GObject.GType<NullPlacement>;
    }

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

    /**
     * They correspond to the values of
     * `arrow::compute::QuantileOptions::Interpolation`.
     */
    export namespace QuantileInterpolation {
        export const $gtype: GObject.GType<QuantileInterpolation>;
    }

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

    export namespace RankTiebreaker {
        export const $gtype: GObject.GType<RankTiebreaker>;
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

    /**
     * They correspond to the values of `arrow::compute::RoundMode`.
     */
    export namespace RoundMode {
        export const $gtype: GObject.GType<RoundMode>;
    }

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

    /**
     * They are corresponding to `arrow::fs::S3LogLevel` values.
     */
    export namespace S3LogLevel {
        export const $gtype: GObject.GType<S3LogLevel>;
    }

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

    /**
     * They are corresponding to `arrow::compute::SortOrder` values.
     */
    export namespace SortOrder {
        export const $gtype: GObject.GType<SortOrder>;
    }

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

    /**
     * They are corresponding to `arrow::TimeUnit::type` values.
     */
    export namespace TimeUnit {
        export const $gtype: GObject.GType<TimeUnit>;
    }

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

    /**
     * They are corresponding to `arrow::Type::type` values.
     */
    export namespace Type {
        export const $gtype: GObject.GType<Type>;
    }

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
         * 64bit offsets Variable-length bytes (no guarantee of
         * UTF-8-ness).
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

    /**
     * They correspond to the values of `arrow::compute::Utf8NormalizeOptions::Form`.
     */
    export namespace UTF8NormalizeForm {
        export const $gtype: GObject.GType<UTF8NormalizeForm>;
    }

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
    namespace AggregateNodeOptions {
        // Signal signatures
        interface SignalSignatures extends ExecuteNodeOptions.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ExecuteNodeOptions.ConstructorProps {}
    }

    class AggregateNodeOptions extends ExecuteNodeOptions {
        static $gtype: GObject.GType<AggregateNodeOptions>;

        // Constructors

        constructor(properties?: Partial<AggregateNodeOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](aggregations: Aggregation[], keys?: string[] | null): AggregateNodeOptions;

        // Signals

        connect<K extends keyof AggregateNodeOptions.SignalSignatures>(
            signal: K,
            callback: AggregateNodeOptions.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof AggregateNodeOptions.SignalSignatures>(
            signal: K,
            callback: AggregateNodeOptions.SignalSignatures[K],
        ): number;
        emit<K extends keyof AggregateNodeOptions.SignalSignatures>(
            signal: K,
            ...args: Parameters<AggregateNodeOptions.SignalSignatures[K]>
        ): void;
    }

    namespace Aggregation {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

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

        // Properties

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

        // Constructors

        constructor(properties?: Partial<Aggregation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](_function: string, options: FunctionOptions | null, input: string, output: string): Aggregation;

        // Signals

        connect<K extends keyof Aggregation.SignalSignatures>(
            signal: K,
            callback: Aggregation.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Aggregation.SignalSignatures>(
            signal: K,
            callback: Aggregation.SignalSignatures[K],
        ): number;
        emit<K extends keyof Aggregation.SignalSignatures>(
            signal: K,
            ...args: Parameters<Aggregation.SignalSignatures[K]>
        ): void;
    }

    namespace Array {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

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

        // Properties

        set array(val: any);
        get buffer1(): Buffer;
        get buffer2(): Buffer;
        get null_bitmap(): Buffer;
        get nullBitmap(): Buffer;
        get parent(): Array;
        get value_data_type(): DataType;
        get valueDataType(): DataType;

        // Constructors

        constructor(properties?: Partial<Array.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Array.SignalSignatures>(signal: K, callback: Array.SignalSignatures[K]): number;
        connect_after<K extends keyof Array.SignalSignatures>(signal: K, callback: Array.SignalSignatures[K]): number;
        emit<K extends keyof Array.SignalSignatures>(signal: K, ...args: Parameters<Array.SignalSignatures[K]>): void;

        // Static methods

        static ['import'](c_abi_array: any, data_type: DataType): Array | null;

        // Methods

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
        sort_indices(order: SortOrder | null): UInt64Array | null;
        sort_to_indices(): UInt64Array | null;
        take(indices: Array, options?: TakeOptions | null): Array | null;
        take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null;
        to_string(): string | null;
        unique(): Array | null;
        view(return_type: DataType): Array | null;
    }

    namespace ArrayBuilder {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            array_builder: any;
            arrayBuilder: any;
        }
    }

    abstract class ArrayBuilder extends GObject.Object {
        static $gtype: GObject.GType<ArrayBuilder>;

        // Properties

        set array_builder(val: any);
        set arrayBuilder(val: any);

        // Constructors

        constructor(properties?: Partial<ArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof ArrayBuilder.SignalSignatures>(
            signal: K,
            callback: ArrayBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ArrayBuilder.SignalSignatures>(
            signal: K,
            callback: ArrayBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof ArrayBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<ArrayBuilder.SignalSignatures[K]>
        ): void;

        // Methods

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

    namespace ArrayDatum {
        // Signal signatures
        interface SignalSignatures extends Datum.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Datum.ConstructorProps {
            value: Array;
        }
    }

    class ArrayDatum extends Datum {
        static $gtype: GObject.GType<ArrayDatum>;

        // Properties

        get value(): Array;

        // Constructors

        constructor(properties?: Partial<ArrayDatum.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: Array): ArrayDatum;

        // Signals

        connect<K extends keyof ArrayDatum.SignalSignatures>(
            signal: K,
            callback: ArrayDatum.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ArrayDatum.SignalSignatures>(
            signal: K,
            callback: ArrayDatum.SignalSignatures[K],
        ): number;
        emit<K extends keyof ArrayDatum.SignalSignatures>(
            signal: K,
            ...args: Parameters<ArrayDatum.SignalSignatures[K]>
        ): void;
    }

    namespace ArraySortOptions {
        // Signal signatures
        interface SignalSignatures extends FunctionOptions.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends FunctionOptions.ConstructorProps {
            order: SortOrder;
        }
    }

    class ArraySortOptions extends FunctionOptions {
        static $gtype: GObject.GType<ArraySortOptions>;

        // Properties

        /**
         * How to order values.
         */
        get order(): SortOrder;
        set order(val: SortOrder);

        // Constructors

        constructor(properties?: Partial<ArraySortOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](order: SortOrder): ArraySortOptions;

        // Signals

        connect<K extends keyof ArraySortOptions.SignalSignatures>(
            signal: K,
            callback: ArraySortOptions.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ArraySortOptions.SignalSignatures>(
            signal: K,
            callback: ArraySortOptions.SignalSignatures[K],
        ): number;
        emit<K extends keyof ArraySortOptions.SignalSignatures>(
            signal: K,
            ...args: Parameters<ArraySortOptions.SignalSignatures[K]>
        ): void;

        // Methods

        equal(other_options: ArraySortOptions): boolean;
        // Conflicted with Arrow.FunctionOptions.equal
        equal(...args: never[]): any;
    }

    namespace BaseBinaryScalar {
        // Signal signatures
        interface SignalSignatures extends Scalar.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {
            value: Buffer;
        }
    }

    abstract class BaseBinaryScalar extends Scalar {
        static $gtype: GObject.GType<BaseBinaryScalar>;

        // Properties

        /**
         * The value of the scalar.
         */
        set value(val: Buffer);

        // Constructors

        constructor(properties?: Partial<BaseBinaryScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof BaseBinaryScalar.SignalSignatures>(
            signal: K,
            callback: BaseBinaryScalar.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof BaseBinaryScalar.SignalSignatures>(
            signal: K,
            callback: BaseBinaryScalar.SignalSignatures[K],
        ): number;
        emit<K extends keyof BaseBinaryScalar.SignalSignatures>(
            signal: K,
            ...args: Parameters<BaseBinaryScalar.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(): Buffer;
    }

    namespace BaseListScalar {
        // Signal signatures
        interface SignalSignatures extends Scalar.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {
            value: Array;
        }
    }

    abstract class BaseListScalar extends Scalar {
        static $gtype: GObject.GType<BaseListScalar>;

        // Properties

        /**
         * The value of the scalar.
         */
        set value(val: Array);

        // Constructors

        constructor(properties?: Partial<BaseListScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof BaseListScalar.SignalSignatures>(
            signal: K,
            callback: BaseListScalar.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof BaseListScalar.SignalSignatures>(
            signal: K,
            callback: BaseListScalar.SignalSignatures[K],
        ): number;
        emit<K extends keyof BaseListScalar.SignalSignatures>(
            signal: K,
            ...args: Parameters<BaseListScalar.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(): Array;
    }

    namespace BinaryArray {
        // Signal signatures
        interface SignalSignatures extends Array.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Array.ConstructorProps {}
    }

    class BinaryArray extends Array {
        static $gtype: GObject.GType<BinaryArray>;

        // Constructors

        constructor(properties?: Partial<BinaryArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            length: number,
            value_offsets: Buffer,
            value_data: Buffer,
            null_bitmap: Buffer | null,
            n_nulls: number,
        ): BinaryArray;

        // Signals

        connect<K extends keyof BinaryArray.SignalSignatures>(
            signal: K,
            callback: BinaryArray.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof BinaryArray.SignalSignatures>(
            signal: K,
            callback: BinaryArray.SignalSignatures[K],
        ): number;
        emit<K extends keyof BinaryArray.SignalSignatures>(
            signal: K,
            ...args: Parameters<BinaryArray.SignalSignatures[K]>
        ): void;

        // Methods

        get_buffer(): Buffer;
        get_data_buffer(): Buffer;
        get_offsets_buffer(): Buffer;
        get_value(i: number): GLib.Bytes;
    }

    namespace BinaryArrayBuilder {
        // Signal signatures
        interface SignalSignatures extends ArrayBuilder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class BinaryArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<BinaryArrayBuilder>;

        // Constructors

        constructor(properties?: Partial<BinaryArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): BinaryArrayBuilder;

        // Signals

        connect<K extends keyof BinaryArrayBuilder.SignalSignatures>(
            signal: K,
            callback: BinaryArrayBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof BinaryArrayBuilder.SignalSignatures>(
            signal: K,
            callback: BinaryArrayBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof BinaryArrayBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<BinaryArrayBuilder.SignalSignatures[K]>
        ): void;

        // Methods

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

    namespace BinaryDataType {
        // Signal signatures
        interface SignalSignatures extends DataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends DataType.ConstructorProps {}
    }

    class BinaryDataType extends DataType {
        static $gtype: GObject.GType<BinaryDataType>;

        // Constructors

        constructor(properties?: Partial<BinaryDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): BinaryDataType;

        // Signals

        connect<K extends keyof BinaryDataType.SignalSignatures>(
            signal: K,
            callback: BinaryDataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof BinaryDataType.SignalSignatures>(
            signal: K,
            callback: BinaryDataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof BinaryDataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<BinaryDataType.SignalSignatures[K]>
        ): void;
    }

    namespace BinaryDictionaryArrayBuilder {
        // Signal signatures
        interface SignalSignatures extends ArrayBuilder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class BinaryDictionaryArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<BinaryDictionaryArrayBuilder>;

        // Constructors

        constructor(properties?: Partial<BinaryDictionaryArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): BinaryDictionaryArrayBuilder;

        // Signals

        connect<K extends keyof BinaryDictionaryArrayBuilder.SignalSignatures>(
            signal: K,
            callback: BinaryDictionaryArrayBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof BinaryDictionaryArrayBuilder.SignalSignatures>(
            signal: K,
            callback: BinaryDictionaryArrayBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof BinaryDictionaryArrayBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<BinaryDictionaryArrayBuilder.SignalSignatures[K]>
        ): void;

        // Methods

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

    namespace BinaryScalar {
        // Signal signatures
        interface SignalSignatures extends BaseBinaryScalar.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends BaseBinaryScalar.ConstructorProps {}
    }

    class BinaryScalar extends BaseBinaryScalar {
        static $gtype: GObject.GType<BinaryScalar>;

        // Constructors

        constructor(properties?: Partial<BinaryScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: Buffer): BinaryScalar;

        // Signals

        connect<K extends keyof BinaryScalar.SignalSignatures>(
            signal: K,
            callback: BinaryScalar.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof BinaryScalar.SignalSignatures>(
            signal: K,
            callback: BinaryScalar.SignalSignatures[K],
        ): number;
        emit<K extends keyof BinaryScalar.SignalSignatures>(
            signal: K,
            ...args: Parameters<BinaryScalar.SignalSignatures[K]>
        ): void;
    }

    namespace BooleanArray {
        // Signal signatures
        interface SignalSignatures extends PrimitiveArray.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends PrimitiveArray.ConstructorProps {}
    }

    class BooleanArray extends PrimitiveArray {
        static $gtype: GObject.GType<BooleanArray>;

        // Constructors

        constructor(properties?: Partial<BooleanArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): BooleanArray;

        // Signals

        connect<K extends keyof BooleanArray.SignalSignatures>(
            signal: K,
            callback: BooleanArray.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof BooleanArray.SignalSignatures>(
            signal: K,
            callback: BooleanArray.SignalSignatures[K],
        ): number;
        emit<K extends keyof BooleanArray.SignalSignatures>(
            signal: K,
            ...args: Parameters<BooleanArray.SignalSignatures[K]>
        ): void;

        // Methods

        and(right: BooleanArray): BooleanArray;
        get_value(i: number): boolean;
        get_values(): boolean[];
        invert(): BooleanArray;
        or(right: BooleanArray): BooleanArray;
        xor(right: BooleanArray): BooleanArray;
    }

    namespace BooleanArrayBuilder {
        // Signal signatures
        interface SignalSignatures extends ArrayBuilder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class BooleanArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<BooleanArrayBuilder>;

        // Constructors

        constructor(properties?: Partial<BooleanArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): BooleanArrayBuilder;

        // Signals

        connect<K extends keyof BooleanArrayBuilder.SignalSignatures>(
            signal: K,
            callback: BooleanArrayBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof BooleanArrayBuilder.SignalSignatures>(
            signal: K,
            callback: BooleanArrayBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof BooleanArrayBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<BooleanArrayBuilder.SignalSignatures[K]>
        ): void;

        // Methods

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

    namespace BooleanDataType {
        // Signal signatures
        interface SignalSignatures extends FixedWidthDataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends FixedWidthDataType.ConstructorProps {}
    }

    class BooleanDataType extends FixedWidthDataType {
        static $gtype: GObject.GType<BooleanDataType>;

        // Constructors

        constructor(properties?: Partial<BooleanDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): BooleanDataType;

        // Signals

        connect<K extends keyof BooleanDataType.SignalSignatures>(
            signal: K,
            callback: BooleanDataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof BooleanDataType.SignalSignatures>(
            signal: K,
            callback: BooleanDataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof BooleanDataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<BooleanDataType.SignalSignatures[K]>
        ): void;
    }

    namespace BooleanScalar {
        // Signal signatures
        interface SignalSignatures extends Scalar.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class BooleanScalar extends Scalar {
        static $gtype: GObject.GType<BooleanScalar>;

        // Constructors

        constructor(properties?: Partial<BooleanScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: boolean): BooleanScalar;

        // Signals

        connect<K extends keyof BooleanScalar.SignalSignatures>(
            signal: K,
            callback: BooleanScalar.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof BooleanScalar.SignalSignatures>(
            signal: K,
            callback: BooleanScalar.SignalSignatures[K],
        ): number;
        emit<K extends keyof BooleanScalar.SignalSignatures>(
            signal: K,
            ...args: Parameters<BooleanScalar.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(): boolean;
    }

    namespace Buffer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffer: any;
            data: GLib.Bytes;
            parent: Buffer;
        }
    }

    class Buffer extends GObject.Object {
        static $gtype: GObject.GType<Buffer>;

        // Properties

        set buffer(val: any);
        set data(val: GLib.Bytes);
        get parent(): Buffer;

        // Constructors

        constructor(properties?: Partial<Buffer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data: Uint8Array | string): Buffer;

        static new_bytes(data: GLib.Bytes | Uint8Array): Buffer;

        // Signals

        connect<K extends keyof Buffer.SignalSignatures>(signal: K, callback: Buffer.SignalSignatures[K]): number;
        connect_after<K extends keyof Buffer.SignalSignatures>(signal: K, callback: Buffer.SignalSignatures[K]): number;
        emit<K extends keyof Buffer.SignalSignatures>(signal: K, ...args: Parameters<Buffer.SignalSignatures[K]>): void;

        // Methods

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

    namespace BufferInputStream {
        // Signal signatures
        interface SignalSignatures extends SeekableInputStream.SignalSignatures {}

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

        // Properties

        get buffer(): Buffer;

        // Constructors

        constructor(properties?: Partial<BufferInputStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](buffer: Buffer): BufferInputStream;

        // Signals

        connect<K extends keyof BufferInputStream.SignalSignatures>(
            signal: K,
            callback: BufferInputStream.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof BufferInputStream.SignalSignatures>(
            signal: K,
            callback: BufferInputStream.SignalSignatures[K],
        ): number;
        emit<K extends keyof BufferInputStream.SignalSignatures>(
            signal: K,
            ...args: Parameters<BufferInputStream.SignalSignatures[K]>
        ): void;

        // Methods

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
            flags: GObject.BindingFlags | null,
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
            flags: GObject.BindingFlags | null,
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
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
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
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
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
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace BufferOutputStream {
        // Signal signatures
        interface SignalSignatures extends OutputStream.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps
            extends OutputStream.ConstructorProps,
                File.ConstructorProps,
                Writable.ConstructorProps {}
    }

    class BufferOutputStream extends OutputStream implements File, Writable {
        static $gtype: GObject.GType<BufferOutputStream>;

        // Constructors

        constructor(properties?: Partial<BufferOutputStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](buffer: ResizableBuffer): BufferOutputStream;

        // Signals

        connect<K extends keyof BufferOutputStream.SignalSignatures>(
            signal: K,
            callback: BufferOutputStream.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof BufferOutputStream.SignalSignatures>(
            signal: K,
            callback: BufferOutputStream.SignalSignatures[K],
        ): number;
        emit<K extends keyof BufferOutputStream.SignalSignatures>(
            signal: K,
            ...args: Parameters<BufferOutputStream.SignalSignatures[K]>
        ): void;

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
            flags: GObject.BindingFlags | null,
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
            flags: GObject.BindingFlags | null,
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
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
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
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
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
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace CSVReadOptions {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

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

        // Properties

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

        // Constructors

        constructor(properties?: Partial<CSVReadOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CSVReadOptions;

        // Signals

        connect<K extends keyof CSVReadOptions.SignalSignatures>(
            signal: K,
            callback: CSVReadOptions.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof CSVReadOptions.SignalSignatures>(
            signal: K,
            callback: CSVReadOptions.SignalSignatures[K],
        ): number;
        emit<K extends keyof CSVReadOptions.SignalSignatures>(
            signal: K,
            ...args: Parameters<CSVReadOptions.SignalSignatures[K]>
        ): void;

        // Methods

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
        add_timestamp_parser(parser: TimestampParser): void;
        add_true_value(true_value: string): void;
        get_column_names(): string[] | null;
        get_column_types(): GLib.HashTable<string, DataType>;
        get_false_values(): string[] | null;
        get_null_values(): string[] | null;
        get_timestamp_parsers(): TimestampParser[];
        get_true_values(): string[] | null;
        set_column_names(column_names: string[]): void;
        set_false_values(false_values: string[]): void;
        set_null_values(null_values: string[]): void;
        set_timestamp_parsers(parsers: TimestampParser[]): void;
        set_true_values(true_values: string[]): void;
    }

    namespace CSVReader {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            csv_table_reader: any;
            csvTableReader: any;
            input: InputStream;
        }
    }

    class CSVReader extends GObject.Object {
        static $gtype: GObject.GType<CSVReader>;

        // Properties

        set csv_table_reader(val: any);
        set csvTableReader(val: any);
        get input(): InputStream;

        // Constructors

        constructor(properties?: Partial<CSVReader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](input: InputStream, options?: CSVReadOptions | null): CSVReader;

        // Signals

        connect<K extends keyof CSVReader.SignalSignatures>(signal: K, callback: CSVReader.SignalSignatures[K]): number;
        connect_after<K extends keyof CSVReader.SignalSignatures>(
            signal: K,
            callback: CSVReader.SignalSignatures[K],
        ): number;
        emit<K extends keyof CSVReader.SignalSignatures>(
            signal: K,
            ...args: Parameters<CSVReader.SignalSignatures[K]>
        ): void;

        // Methods

        read(): Table | null;
    }

    namespace CallExpression {
        // Signal signatures
        interface SignalSignatures extends Expression.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Expression.ConstructorProps {}
    }

    class CallExpression extends Expression {
        static $gtype: GObject.GType<CallExpression>;

        // Constructors

        constructor(properties?: Partial<CallExpression.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](_function: string, _arguments: Expression[], options?: FunctionOptions | null): CallExpression;

        // Signals

        connect<K extends keyof CallExpression.SignalSignatures>(
            signal: K,
            callback: CallExpression.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof CallExpression.SignalSignatures>(
            signal: K,
            callback: CallExpression.SignalSignatures[K],
        ): number;
        emit<K extends keyof CallExpression.SignalSignatures>(
            signal: K,
            ...args: Parameters<CallExpression.SignalSignatures[K]>
        ): void;
    }

    namespace CastOptions {
        // Signal signatures
        interface SignalSignatures extends FunctionOptions.SignalSignatures {}

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

        // Properties

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

        // Constructors

        constructor(properties?: Partial<CastOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CastOptions;

        // Signals

        connect<K extends keyof CastOptions.SignalSignatures>(
            signal: K,
            callback: CastOptions.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof CastOptions.SignalSignatures>(
            signal: K,
            callback: CastOptions.SignalSignatures[K],
        ): number;
        emit<K extends keyof CastOptions.SignalSignatures>(
            signal: K,
            ...args: Parameters<CastOptions.SignalSignatures[K]>
        ): void;
    }

    namespace ChunkedArray {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

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

        // Properties

        set chunked_array(val: any);
        set chunkedArray(val: any);
        set data_type(val: DataType);
        set dataType(val: DataType);

        // Constructors

        constructor(properties?: Partial<ChunkedArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](chunks: Array[]): ChunkedArray;

        static new_empty(data_type: DataType): ChunkedArray;

        // Signals

        connect<K extends keyof ChunkedArray.SignalSignatures>(
            signal: K,
            callback: ChunkedArray.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ChunkedArray.SignalSignatures>(
            signal: K,
            callback: ChunkedArray.SignalSignatures[K],
        ): number;
        emit<K extends keyof ChunkedArray.SignalSignatures>(
            signal: K,
            ...args: Parameters<ChunkedArray.SignalSignatures[K]>
        ): void;

        // Methods

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
        sort_indices(order: SortOrder | null): UInt64Array | null;
        take(indices: Array, options?: TakeOptions | null): ChunkedArray | null;
        take_chunked_array(indices: ChunkedArray, options?: TakeOptions | null): ChunkedArray | null;
        to_string(): string | null;
    }

    namespace ChunkedArrayDatum {
        // Signal signatures
        interface SignalSignatures extends Datum.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Datum.ConstructorProps {
            value: ChunkedArray;
        }
    }

    class ChunkedArrayDatum extends Datum {
        static $gtype: GObject.GType<ChunkedArrayDatum>;

        // Properties

        get value(): ChunkedArray;

        // Constructors

        constructor(properties?: Partial<ChunkedArrayDatum.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: ChunkedArray): ChunkedArrayDatum;

        // Signals

        connect<K extends keyof ChunkedArrayDatum.SignalSignatures>(
            signal: K,
            callback: ChunkedArrayDatum.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ChunkedArrayDatum.SignalSignatures>(
            signal: K,
            callback: ChunkedArrayDatum.SignalSignatures[K],
        ): number;
        emit<K extends keyof ChunkedArrayDatum.SignalSignatures>(
            signal: K,
            ...args: Parameters<ChunkedArrayDatum.SignalSignatures[K]>
        ): void;
    }

    namespace Codec {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            codec: any;
        }
    }

    class Codec extends GObject.Object {
        static $gtype: GObject.GType<Codec>;

        // Properties

        set codec(val: any);

        // Constructors

        constructor(properties?: Partial<Codec.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](type: CompressionType): Codec;

        // Signals

        connect<K extends keyof Codec.SignalSignatures>(signal: K, callback: Codec.SignalSignatures[K]): number;
        connect_after<K extends keyof Codec.SignalSignatures>(signal: K, callback: Codec.SignalSignatures[K]): number;
        emit<K extends keyof Codec.SignalSignatures>(signal: K, ...args: Parameters<Codec.SignalSignatures[K]>): void;

        // Methods

        get_compression_level(): number;
        get_compression_type(): CompressionType;
        get_name(): string;
    }

    namespace CompressedInputStream {
        // Signal signatures
        interface SignalSignatures extends InputStream.SignalSignatures {}

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

        // Properties

        get codec(): Codec;
        get raw(): InputStream;

        // Constructors

        constructor(properties?: Partial<CompressedInputStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](codec: Codec, raw: InputStream): CompressedInputStream;

        // Signals

        connect<K extends keyof CompressedInputStream.SignalSignatures>(
            signal: K,
            callback: CompressedInputStream.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof CompressedInputStream.SignalSignatures>(
            signal: K,
            callback: CompressedInputStream.SignalSignatures[K],
        ): number;
        emit<K extends keyof CompressedInputStream.SignalSignatures>(
            signal: K,
            ...args: Parameters<CompressedInputStream.SignalSignatures[K]>
        ): void;

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
            flags: GObject.BindingFlags | null,
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
            flags: GObject.BindingFlags | null,
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
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
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
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
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
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace CompressedOutputStream {
        // Signal signatures
        interface SignalSignatures extends OutputStream.SignalSignatures {}

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

        // Properties

        get codec(): Codec;
        get raw(): OutputStream;

        // Constructors

        constructor(properties?: Partial<CompressedOutputStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](codec: Codec, raw: OutputStream): CompressedOutputStream;

        // Signals

        connect<K extends keyof CompressedOutputStream.SignalSignatures>(
            signal: K,
            callback: CompressedOutputStream.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof CompressedOutputStream.SignalSignatures>(
            signal: K,
            callback: CompressedOutputStream.SignalSignatures[K],
        ): number;
        emit<K extends keyof CompressedOutputStream.SignalSignatures>(
            signal: K,
            ...args: Parameters<CompressedOutputStream.SignalSignatures[K]>
        ): void;

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
            flags: GObject.BindingFlags | null,
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
            flags: GObject.BindingFlags | null,
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
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
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
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
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
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace CountOptions {
        // Signal signatures
        interface SignalSignatures extends FunctionOptions.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends FunctionOptions.ConstructorProps {
            mode: CountMode;
        }
    }

    class CountOptions extends FunctionOptions {
        static $gtype: GObject.GType<CountOptions>;

        // Properties

        get mode(): CountMode;
        set mode(val: CountMode);

        // Constructors

        constructor(properties?: Partial<CountOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): CountOptions;

        // Signals

        connect<K extends keyof CountOptions.SignalSignatures>(
            signal: K,
            callback: CountOptions.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof CountOptions.SignalSignatures>(
            signal: K,
            callback: CountOptions.SignalSignatures[K],
        ): number;
        emit<K extends keyof CountOptions.SignalSignatures>(
            signal: K,
            ...args: Parameters<CountOptions.SignalSignatures[K]>
        ): void;
    }

    namespace DataType {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            data_type: any;
            dataType: any;
        }
    }

    abstract class DataType extends GObject.Object {
        static $gtype: GObject.GType<DataType>;

        // Properties

        set data_type(val: any);
        set dataType(val: any);

        // Constructors

        constructor(properties?: Partial<DataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof DataType.SignalSignatures>(signal: K, callback: DataType.SignalSignatures[K]): number;
        connect_after<K extends keyof DataType.SignalSignatures>(
            signal: K,
            callback: DataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof DataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<DataType.SignalSignatures[K]>
        ): void;

        // Static methods

        static ['import'](c_abi_schema: any): DataType | null;

        // Methods

        equal(other_data_type: DataType): boolean;
        ['export'](): any | null;
        get_id(): Type;
        get_name(): string;
        to_string(): string;
    }

    namespace Date32Array {
        // Signal signatures
        interface SignalSignatures extends NumericArray.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends NumericArray.ConstructorProps {}
    }

    class Date32Array extends NumericArray {
        static $gtype: GObject.GType<Date32Array>;

        // Constructors

        constructor(properties?: Partial<Date32Array.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): Date32Array;

        // Signals

        connect<K extends keyof Date32Array.SignalSignatures>(
            signal: K,
            callback: Date32Array.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Date32Array.SignalSignatures>(
            signal: K,
            callback: Date32Array.SignalSignatures[K],
        ): number;
        emit<K extends keyof Date32Array.SignalSignatures>(
            signal: K,
            ...args: Parameters<Date32Array.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(i: number): number;
        get_values(): number[];
    }

    namespace Date32ArrayBuilder {
        // Signal signatures
        interface SignalSignatures extends ArrayBuilder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class Date32ArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<Date32ArrayBuilder>;

        // Constructors

        constructor(properties?: Partial<Date32ArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Date32ArrayBuilder;

        // Signals

        connect<K extends keyof Date32ArrayBuilder.SignalSignatures>(
            signal: K,
            callback: Date32ArrayBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Date32ArrayBuilder.SignalSignatures>(
            signal: K,
            callback: Date32ArrayBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof Date32ArrayBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<Date32ArrayBuilder.SignalSignatures[K]>
        ): void;

        // Methods

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

    namespace Date32DataType {
        // Signal signatures
        interface SignalSignatures extends TemporalDataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends TemporalDataType.ConstructorProps {}
    }

    class Date32DataType extends TemporalDataType {
        static $gtype: GObject.GType<Date32DataType>;

        // Constructors

        constructor(properties?: Partial<Date32DataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Date32DataType;

        // Signals

        connect<K extends keyof Date32DataType.SignalSignatures>(
            signal: K,
            callback: Date32DataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Date32DataType.SignalSignatures>(
            signal: K,
            callback: Date32DataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof Date32DataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<Date32DataType.SignalSignatures[K]>
        ): void;
    }

    namespace Date32Scalar {
        // Signal signatures
        interface SignalSignatures extends Scalar.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class Date32Scalar extends Scalar {
        static $gtype: GObject.GType<Date32Scalar>;

        // Constructors

        constructor(properties?: Partial<Date32Scalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): Date32Scalar;

        // Signals

        connect<K extends keyof Date32Scalar.SignalSignatures>(
            signal: K,
            callback: Date32Scalar.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Date32Scalar.SignalSignatures>(
            signal: K,
            callback: Date32Scalar.SignalSignatures[K],
        ): number;
        emit<K extends keyof Date32Scalar.SignalSignatures>(
            signal: K,
            ...args: Parameters<Date32Scalar.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(): number;
    }

    namespace Date64Array {
        // Signal signatures
        interface SignalSignatures extends NumericArray.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends NumericArray.ConstructorProps {}
    }

    class Date64Array extends NumericArray {
        static $gtype: GObject.GType<Date64Array>;

        // Constructors

        constructor(properties?: Partial<Date64Array.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): Date64Array;

        // Signals

        connect<K extends keyof Date64Array.SignalSignatures>(
            signal: K,
            callback: Date64Array.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Date64Array.SignalSignatures>(
            signal: K,
            callback: Date64Array.SignalSignatures[K],
        ): number;
        emit<K extends keyof Date64Array.SignalSignatures>(
            signal: K,
            ...args: Parameters<Date64Array.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(i: number): number;
        get_values(): number[];
    }

    namespace Date64ArrayBuilder {
        // Signal signatures
        interface SignalSignatures extends ArrayBuilder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class Date64ArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<Date64ArrayBuilder>;

        // Constructors

        constructor(properties?: Partial<Date64ArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Date64ArrayBuilder;

        // Signals

        connect<K extends keyof Date64ArrayBuilder.SignalSignatures>(
            signal: K,
            callback: Date64ArrayBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Date64ArrayBuilder.SignalSignatures>(
            signal: K,
            callback: Date64ArrayBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof Date64ArrayBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<Date64ArrayBuilder.SignalSignatures[K]>
        ): void;

        // Methods

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

    namespace Date64DataType {
        // Signal signatures
        interface SignalSignatures extends TemporalDataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends TemporalDataType.ConstructorProps {}
    }

    class Date64DataType extends TemporalDataType {
        static $gtype: GObject.GType<Date64DataType>;

        // Constructors

        constructor(properties?: Partial<Date64DataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Date64DataType;

        // Signals

        connect<K extends keyof Date64DataType.SignalSignatures>(
            signal: K,
            callback: Date64DataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Date64DataType.SignalSignatures>(
            signal: K,
            callback: Date64DataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof Date64DataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<Date64DataType.SignalSignatures[K]>
        ): void;
    }

    namespace Date64Scalar {
        // Signal signatures
        interface SignalSignatures extends Scalar.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class Date64Scalar extends Scalar {
        static $gtype: GObject.GType<Date64Scalar>;

        // Constructors

        constructor(properties?: Partial<Date64Scalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): Date64Scalar;

        // Signals

        connect<K extends keyof Date64Scalar.SignalSignatures>(
            signal: K,
            callback: Date64Scalar.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Date64Scalar.SignalSignatures>(
            signal: K,
            callback: Date64Scalar.SignalSignatures[K],
        ): number;
        emit<K extends keyof Date64Scalar.SignalSignatures>(
            signal: K,
            ...args: Parameters<Date64Scalar.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(): number;
    }

    namespace Datum {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            datum: any;
        }
    }

    abstract class Datum extends GObject.Object {
        static $gtype: GObject.GType<Datum>;

        // Properties

        set datum(val: any);

        // Constructors

        constructor(properties?: Partial<Datum.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Datum.SignalSignatures>(signal: K, callback: Datum.SignalSignatures[K]): number;
        connect_after<K extends keyof Datum.SignalSignatures>(signal: K, callback: Datum.SignalSignatures[K]): number;
        emit<K extends keyof Datum.SignalSignatures>(signal: K, ...args: Parameters<Datum.SignalSignatures[K]>): void;

        // Methods

        equal(other_datum: Datum): boolean;
        is_array(): boolean;
        is_array_like(): boolean;
        is_scalar(): boolean;
        is_value(): boolean;
        to_string(): string;
    }

    namespace DayMillisecond {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            day: number;
            millisecond: number;
        }
    }

    class DayMillisecond extends GObject.Object {
        static $gtype: GObject.GType<DayMillisecond>;

        // Properties

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

        // Constructors

        constructor(properties?: Partial<DayMillisecond.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](day: number, millisecond: number): DayMillisecond;

        // Signals

        connect<K extends keyof DayMillisecond.SignalSignatures>(
            signal: K,
            callback: DayMillisecond.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof DayMillisecond.SignalSignatures>(
            signal: K,
            callback: DayMillisecond.SignalSignatures[K],
        ): number;
        emit<K extends keyof DayMillisecond.SignalSignatures>(
            signal: K,
            ...args: Parameters<DayMillisecond.SignalSignatures[K]>
        ): void;

        // Methods

        equal(other_day_millisecond: DayMillisecond): boolean;
        less_than(other_day_millisecond: DayMillisecond): boolean;
    }

    namespace DayTimeIntervalArray {
        // Signal signatures
        interface SignalSignatures extends PrimitiveArray.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends PrimitiveArray.ConstructorProps {}
    }

    class DayTimeIntervalArray extends PrimitiveArray {
        static $gtype: GObject.GType<DayTimeIntervalArray>;

        // Constructors

        constructor(properties?: Partial<DayTimeIntervalArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): DayTimeIntervalArray;

        // Signals

        connect<K extends keyof DayTimeIntervalArray.SignalSignatures>(
            signal: K,
            callback: DayTimeIntervalArray.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof DayTimeIntervalArray.SignalSignatures>(
            signal: K,
            callback: DayTimeIntervalArray.SignalSignatures[K],
        ): number;
        emit<K extends keyof DayTimeIntervalArray.SignalSignatures>(
            signal: K,
            ...args: Parameters<DayTimeIntervalArray.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(i: number): DayMillisecond;
        get_values(): DayMillisecond[] | null;
    }

    namespace DayTimeIntervalArrayBuilder {
        // Signal signatures
        interface SignalSignatures extends ArrayBuilder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class DayTimeIntervalArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<DayTimeIntervalArrayBuilder>;

        // Constructors

        constructor(properties?: Partial<DayTimeIntervalArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DayTimeIntervalArrayBuilder;

        // Signals

        connect<K extends keyof DayTimeIntervalArrayBuilder.SignalSignatures>(
            signal: K,
            callback: DayTimeIntervalArrayBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof DayTimeIntervalArrayBuilder.SignalSignatures>(
            signal: K,
            callback: DayTimeIntervalArrayBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof DayTimeIntervalArrayBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<DayTimeIntervalArrayBuilder.SignalSignatures[K]>
        ): void;

        // Methods

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

    namespace DayTimeIntervalDataType {
        // Signal signatures
        interface SignalSignatures extends IntervalDataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends IntervalDataType.ConstructorProps {}
    }

    class DayTimeIntervalDataType extends IntervalDataType {
        static $gtype: GObject.GType<DayTimeIntervalDataType>;

        // Constructors

        constructor(properties?: Partial<DayTimeIntervalDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DayTimeIntervalDataType;

        // Signals

        connect<K extends keyof DayTimeIntervalDataType.SignalSignatures>(
            signal: K,
            callback: DayTimeIntervalDataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof DayTimeIntervalDataType.SignalSignatures>(
            signal: K,
            callback: DayTimeIntervalDataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof DayTimeIntervalDataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<DayTimeIntervalDataType.SignalSignatures[K]>
        ): void;
    }

    namespace DayTimeIntervalScalar {
        // Signal signatures
        interface SignalSignatures extends Scalar.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class DayTimeIntervalScalar extends Scalar {
        static $gtype: GObject.GType<DayTimeIntervalScalar>;

        // Constructors

        constructor(properties?: Partial<DayTimeIntervalScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: DayMillisecond): DayTimeIntervalScalar;

        // Signals

        connect<K extends keyof DayTimeIntervalScalar.SignalSignatures>(
            signal: K,
            callback: DayTimeIntervalScalar.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof DayTimeIntervalScalar.SignalSignatures>(
            signal: K,
            callback: DayTimeIntervalScalar.SignalSignatures[K],
        ): number;
        emit<K extends keyof DayTimeIntervalScalar.SignalSignatures>(
            signal: K,
            ...args: Parameters<DayTimeIntervalScalar.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(): DayMillisecond;
    }

    namespace Decimal128 {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            decimal128: any;
        }
    }

    class Decimal128 extends GObject.Object {
        static $gtype: GObject.GType<Decimal128>;

        // Properties

        set decimal128(val: any);

        // Constructors

        constructor(properties?: Partial<Decimal128.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_integer(data: number): Decimal128;

        static new_string(data: string): Decimal128;

        // Signals

        connect<K extends keyof Decimal128.SignalSignatures>(
            signal: K,
            callback: Decimal128.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Decimal128.SignalSignatures>(
            signal: K,
            callback: Decimal128.SignalSignatures[K],
        ): number;
        emit<K extends keyof Decimal128.SignalSignatures>(
            signal: K,
            ...args: Parameters<Decimal128.SignalSignatures[K]>
        ): void;

        // Methods

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

    namespace Decimal128Array {
        // Signal signatures
        interface SignalSignatures extends FixedSizeBinaryArray.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends FixedSizeBinaryArray.ConstructorProps {}
    }

    class Decimal128Array extends FixedSizeBinaryArray {
        static $gtype: GObject.GType<Decimal128Array>;

        // Constructors

        constructor(properties?: Partial<Decimal128Array.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Decimal128Array.SignalSignatures>(
            signal: K,
            callback: Decimal128Array.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Decimal128Array.SignalSignatures>(
            signal: K,
            callback: Decimal128Array.SignalSignatures[K],
        ): number;
        emit<K extends keyof Decimal128Array.SignalSignatures>(
            signal: K,
            ...args: Parameters<Decimal128Array.SignalSignatures[K]>
        ): void;

        // Methods

        format_value(i: number): string;
        get_value(i: number): Decimal128;
        // Conflicted with Arrow.FixedSizeBinaryArray.get_value
        get_value(...args: never[]): any;
    }

    namespace Decimal128ArrayBuilder {
        // Signal signatures
        interface SignalSignatures extends FixedSizeBinaryArrayBuilder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends FixedSizeBinaryArrayBuilder.ConstructorProps {}
    }

    class Decimal128ArrayBuilder extends FixedSizeBinaryArrayBuilder {
        static $gtype: GObject.GType<Decimal128ArrayBuilder>;

        // Constructors

        constructor(properties?: Partial<Decimal128ArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type: Decimal128DataType): Decimal128ArrayBuilder;

        // Signals

        connect<K extends keyof Decimal128ArrayBuilder.SignalSignatures>(
            signal: K,
            callback: Decimal128ArrayBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Decimal128ArrayBuilder.SignalSignatures>(
            signal: K,
            callback: Decimal128ArrayBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof Decimal128ArrayBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<Decimal128ArrayBuilder.SignalSignatures[K]>
        ): void;

        // Methods

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

    namespace Decimal128DataType {
        // Signal signatures
        interface SignalSignatures extends DecimalDataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends DecimalDataType.ConstructorProps {}
    }

    class Decimal128DataType extends DecimalDataType {
        static $gtype: GObject.GType<Decimal128DataType>;

        // Constructors

        constructor(properties?: Partial<Decimal128DataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](precision: number, scale: number): Decimal128DataType;
        // Conflicted with Arrow.FixedSizeBinaryDataType.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof Decimal128DataType.SignalSignatures>(
            signal: K,
            callback: Decimal128DataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Decimal128DataType.SignalSignatures>(
            signal: K,
            callback: Decimal128DataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof Decimal128DataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<Decimal128DataType.SignalSignatures[K]>
        ): void;

        // Static methods

        static max_precision(): number;
    }

    namespace Decimal128Scalar {
        // Signal signatures
        interface SignalSignatures extends Scalar.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {
            value: Decimal128;
        }
    }

    class Decimal128Scalar extends Scalar {
        static $gtype: GObject.GType<Decimal128Scalar>;

        // Properties

        /**
         * The value of the scalar.
         */
        set value(val: Decimal128);

        // Constructors

        constructor(properties?: Partial<Decimal128Scalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type: Decimal128DataType, value: Decimal128): Decimal128Scalar;

        // Signals

        connect<K extends keyof Decimal128Scalar.SignalSignatures>(
            signal: K,
            callback: Decimal128Scalar.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Decimal128Scalar.SignalSignatures>(
            signal: K,
            callback: Decimal128Scalar.SignalSignatures[K],
        ): number;
        emit<K extends keyof Decimal128Scalar.SignalSignatures>(
            signal: K,
            ...args: Parameters<Decimal128Scalar.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(): Decimal128;
    }

    namespace Decimal256 {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            decimal256: any;
        }
    }

    class Decimal256 extends GObject.Object {
        static $gtype: GObject.GType<Decimal256>;

        // Properties

        set decimal256(val: any);

        // Constructors

        constructor(properties?: Partial<Decimal256.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_integer(data: number): Decimal256;

        static new_string(data: string): Decimal256;

        // Signals

        connect<K extends keyof Decimal256.SignalSignatures>(
            signal: K,
            callback: Decimal256.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Decimal256.SignalSignatures>(
            signal: K,
            callback: Decimal256.SignalSignatures[K],
        ): number;
        emit<K extends keyof Decimal256.SignalSignatures>(
            signal: K,
            ...args: Parameters<Decimal256.SignalSignatures[K]>
        ): void;

        // Methods

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

    namespace Decimal256Array {
        // Signal signatures
        interface SignalSignatures extends FixedSizeBinaryArray.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends FixedSizeBinaryArray.ConstructorProps {}
    }

    class Decimal256Array extends FixedSizeBinaryArray {
        static $gtype: GObject.GType<Decimal256Array>;

        // Constructors

        constructor(properties?: Partial<Decimal256Array.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Decimal256Array.SignalSignatures>(
            signal: K,
            callback: Decimal256Array.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Decimal256Array.SignalSignatures>(
            signal: K,
            callback: Decimal256Array.SignalSignatures[K],
        ): number;
        emit<K extends keyof Decimal256Array.SignalSignatures>(
            signal: K,
            ...args: Parameters<Decimal256Array.SignalSignatures[K]>
        ): void;

        // Methods

        format_value(i: number): string;
        get_value(i: number): Decimal256;
        // Conflicted with Arrow.FixedSizeBinaryArray.get_value
        get_value(...args: never[]): any;
    }

    namespace Decimal256ArrayBuilder {
        // Signal signatures
        interface SignalSignatures extends FixedSizeBinaryArrayBuilder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends FixedSizeBinaryArrayBuilder.ConstructorProps {}
    }

    class Decimal256ArrayBuilder extends FixedSizeBinaryArrayBuilder {
        static $gtype: GObject.GType<Decimal256ArrayBuilder>;

        // Constructors

        constructor(properties?: Partial<Decimal256ArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type: Decimal256DataType): Decimal256ArrayBuilder;

        // Signals

        connect<K extends keyof Decimal256ArrayBuilder.SignalSignatures>(
            signal: K,
            callback: Decimal256ArrayBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Decimal256ArrayBuilder.SignalSignatures>(
            signal: K,
            callback: Decimal256ArrayBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof Decimal256ArrayBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<Decimal256ArrayBuilder.SignalSignatures[K]>
        ): void;

        // Methods

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

    namespace Decimal256DataType {
        // Signal signatures
        interface SignalSignatures extends DecimalDataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends DecimalDataType.ConstructorProps {}
    }

    class Decimal256DataType extends DecimalDataType {
        static $gtype: GObject.GType<Decimal256DataType>;

        // Constructors

        constructor(properties?: Partial<Decimal256DataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](precision: number, scale: number): Decimal256DataType;
        // Conflicted with Arrow.FixedSizeBinaryDataType.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof Decimal256DataType.SignalSignatures>(
            signal: K,
            callback: Decimal256DataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Decimal256DataType.SignalSignatures>(
            signal: K,
            callback: Decimal256DataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof Decimal256DataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<Decimal256DataType.SignalSignatures[K]>
        ): void;

        // Static methods

        static max_precision(): number;
    }

    namespace Decimal256Scalar {
        // Signal signatures
        interface SignalSignatures extends Scalar.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {
            value: Decimal256;
        }
    }

    class Decimal256Scalar extends Scalar {
        static $gtype: GObject.GType<Decimal256Scalar>;

        // Properties

        /**
         * The value of the scalar.
         */
        set value(val: Decimal256);

        // Constructors

        constructor(properties?: Partial<Decimal256Scalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type: Decimal256DataType, value: Decimal256): Decimal256Scalar;

        // Signals

        connect<K extends keyof Decimal256Scalar.SignalSignatures>(
            signal: K,
            callback: Decimal256Scalar.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Decimal256Scalar.SignalSignatures>(
            signal: K,
            callback: Decimal256Scalar.SignalSignatures[K],
        ): number;
        emit<K extends keyof Decimal256Scalar.SignalSignatures>(
            signal: K,
            ...args: Parameters<Decimal256Scalar.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(): Decimal256;
    }

    namespace DecimalDataType {
        // Signal signatures
        interface SignalSignatures extends FixedSizeBinaryDataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends FixedSizeBinaryDataType.ConstructorProps {}
    }

    abstract class DecimalDataType extends FixedSizeBinaryDataType {
        static $gtype: GObject.GType<DecimalDataType>;

        // Constructors

        constructor(properties?: Partial<DecimalDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](precision: number, scale: number): DecimalDataType;
        // Conflicted with Arrow.FixedSizeBinaryDataType.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof DecimalDataType.SignalSignatures>(
            signal: K,
            callback: DecimalDataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof DecimalDataType.SignalSignatures>(
            signal: K,
            callback: DecimalDataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof DecimalDataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<DecimalDataType.SignalSignatures[K]>
        ): void;

        // Methods

        get_precision(): number;
        get_scale(): number;
    }

    namespace DenseUnionArray {
        // Signal signatures
        interface SignalSignatures extends UnionArray.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends UnionArray.ConstructorProps {
            value_offsets: Int32Array;
            valueOffsets: Int32Array;
        }
    }

    class DenseUnionArray extends UnionArray {
        static $gtype: GObject.GType<DenseUnionArray>;

        // Properties

        get value_offsets(): Int32Array;
        get valueOffsets(): Int32Array;

        // Constructors

        constructor(properties?: Partial<DenseUnionArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](type_ids: Int8Array, value_offsets: Int32Array, fields: Array[]): DenseUnionArray;

        static new_data_type(
            data_type: DenseUnionDataType,
            type_ids: Int8Array,
            value_offsets: Int32Array,
            fields: Array[],
        ): DenseUnionArray;

        // Signals

        connect<K extends keyof DenseUnionArray.SignalSignatures>(
            signal: K,
            callback: DenseUnionArray.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof DenseUnionArray.SignalSignatures>(
            signal: K,
            callback: DenseUnionArray.SignalSignatures[K],
        ): number;
        emit<K extends keyof DenseUnionArray.SignalSignatures>(
            signal: K,
            ...args: Parameters<DenseUnionArray.SignalSignatures[K]>
        ): void;

        // Methods

        get_value_offset(i: number): number;
    }

    namespace DenseUnionArrayBuilder {
        // Signal signatures
        interface SignalSignatures extends UnionArrayBuilder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends UnionArrayBuilder.ConstructorProps {}
    }

    class DenseUnionArrayBuilder extends UnionArrayBuilder {
        static $gtype: GObject.GType<DenseUnionArrayBuilder>;

        // Constructors

        constructor(properties?: Partial<DenseUnionArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type?: DenseUnionDataType | null): DenseUnionArrayBuilder;

        // Signals

        connect<K extends keyof DenseUnionArrayBuilder.SignalSignatures>(
            signal: K,
            callback: DenseUnionArrayBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof DenseUnionArrayBuilder.SignalSignatures>(
            signal: K,
            callback: DenseUnionArrayBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof DenseUnionArrayBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<DenseUnionArrayBuilder.SignalSignatures[K]>
        ): void;
    }

    namespace DenseUnionDataType {
        // Signal signatures
        interface SignalSignatures extends UnionDataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends UnionDataType.ConstructorProps {}
    }

    class DenseUnionDataType extends UnionDataType {
        static $gtype: GObject.GType<DenseUnionDataType>;

        // Constructors

        constructor(properties?: Partial<DenseUnionDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](fields: Field[], type_codes: Uint8Array | string): DenseUnionDataType;

        // Signals

        connect<K extends keyof DenseUnionDataType.SignalSignatures>(
            signal: K,
            callback: DenseUnionDataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof DenseUnionDataType.SignalSignatures>(
            signal: K,
            callback: DenseUnionDataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof DenseUnionDataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<DenseUnionDataType.SignalSignatures[K]>
        ): void;
    }

    namespace DenseUnionScalar {
        // Signal signatures
        interface SignalSignatures extends UnionScalar.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends UnionScalar.ConstructorProps {}
    }

    class DenseUnionScalar extends UnionScalar {
        static $gtype: GObject.GType<DenseUnionScalar>;

        // Constructors

        constructor(properties?: Partial<DenseUnionScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type: DenseUnionDataType, type_code: number, value: Scalar): DenseUnionScalar;

        // Signals

        connect<K extends keyof DenseUnionScalar.SignalSignatures>(
            signal: K,
            callback: DenseUnionScalar.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof DenseUnionScalar.SignalSignatures>(
            signal: K,
            callback: DenseUnionScalar.SignalSignatures[K],
        ): number;
        emit<K extends keyof DenseUnionScalar.SignalSignatures>(
            signal: K,
            ...args: Parameters<DenseUnionScalar.SignalSignatures[K]>
        ): void;
    }

    namespace DictionaryArray {
        // Signal signatures
        interface SignalSignatures extends Array.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Array.ConstructorProps {
            dictionary: Array;
            indices: Array;
        }
    }

    class DictionaryArray extends Array {
        static $gtype: GObject.GType<DictionaryArray>;

        // Properties

        get dictionary(): Array;
        get indices(): Array;

        // Constructors

        constructor(properties?: Partial<DictionaryArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type: DataType, indices: Array, dictionary: Array): DictionaryArray;

        // Signals

        connect<K extends keyof DictionaryArray.SignalSignatures>(
            signal: K,
            callback: DictionaryArray.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof DictionaryArray.SignalSignatures>(
            signal: K,
            callback: DictionaryArray.SignalSignatures[K],
        ): number;
        emit<K extends keyof DictionaryArray.SignalSignatures>(
            signal: K,
            ...args: Parameters<DictionaryArray.SignalSignatures[K]>
        ): void;

        // Methods

        get_dictionary(): Array;
        get_dictionary_data_type(): DictionaryDataType;
        get_indices(): Array;
    }

    namespace DictionaryDataType {
        // Signal signatures
        interface SignalSignatures extends FixedWidthDataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends FixedWidthDataType.ConstructorProps {}
    }

    class DictionaryDataType extends FixedWidthDataType {
        static $gtype: GObject.GType<DictionaryDataType>;

        // Constructors

        constructor(properties?: Partial<DictionaryDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](index_data_type: DataType, value_data_type: DataType, ordered: boolean): DictionaryDataType;

        // Signals

        connect<K extends keyof DictionaryDataType.SignalSignatures>(
            signal: K,
            callback: DictionaryDataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof DictionaryDataType.SignalSignatures>(
            signal: K,
            callback: DictionaryDataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof DictionaryDataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<DictionaryDataType.SignalSignatures[K]>
        ): void;

        // Methods

        get_index_data_type(): DataType;
        get_value_data_type(): DataType;
        is_ordered(): boolean;
    }

    namespace DoubleArray {
        // Signal signatures
        interface SignalSignatures extends NumericArray.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends NumericArray.ConstructorProps {}
    }

    class DoubleArray extends NumericArray {
        static $gtype: GObject.GType<DoubleArray>;

        // Constructors

        constructor(properties?: Partial<DoubleArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): DoubleArray;

        // Signals

        connect<K extends keyof DoubleArray.SignalSignatures>(
            signal: K,
            callback: DoubleArray.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof DoubleArray.SignalSignatures>(
            signal: K,
            callback: DoubleArray.SignalSignatures[K],
        ): number;
        emit<K extends keyof DoubleArray.SignalSignatures>(
            signal: K,
            ...args: Parameters<DoubleArray.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(i: number): number;
        get_values(): number[];
        sum(): number;
    }

    namespace DoubleArrayBuilder {
        // Signal signatures
        interface SignalSignatures extends ArrayBuilder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class DoubleArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<DoubleArrayBuilder>;

        // Constructors

        constructor(properties?: Partial<DoubleArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DoubleArrayBuilder;

        // Signals

        connect<K extends keyof DoubleArrayBuilder.SignalSignatures>(
            signal: K,
            callback: DoubleArrayBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof DoubleArrayBuilder.SignalSignatures>(
            signal: K,
            callback: DoubleArrayBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof DoubleArrayBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<DoubleArrayBuilder.SignalSignatures[K]>
        ): void;

        // Methods

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

    namespace DoubleDataType {
        // Signal signatures
        interface SignalSignatures extends FloatingPointDataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends FloatingPointDataType.ConstructorProps {}
    }

    class DoubleDataType extends FloatingPointDataType {
        static $gtype: GObject.GType<DoubleDataType>;

        // Constructors

        constructor(properties?: Partial<DoubleDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): DoubleDataType;

        // Signals

        connect<K extends keyof DoubleDataType.SignalSignatures>(
            signal: K,
            callback: DoubleDataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof DoubleDataType.SignalSignatures>(
            signal: K,
            callback: DoubleDataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof DoubleDataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<DoubleDataType.SignalSignatures[K]>
        ): void;
    }

    namespace DoubleScalar {
        // Signal signatures
        interface SignalSignatures extends Scalar.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class DoubleScalar extends Scalar {
        static $gtype: GObject.GType<DoubleScalar>;

        // Constructors

        constructor(properties?: Partial<DoubleScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): DoubleScalar;

        // Signals

        connect<K extends keyof DoubleScalar.SignalSignatures>(
            signal: K,
            callback: DoubleScalar.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof DoubleScalar.SignalSignatures>(
            signal: K,
            callback: DoubleScalar.SignalSignatures[K],
        ): number;
        emit<K extends keyof DoubleScalar.SignalSignatures>(
            signal: K,
            ...args: Parameters<DoubleScalar.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(): number;
    }

    namespace EqualOptions {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

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

        // Properties

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

        // Constructors

        constructor(properties?: Partial<EqualOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): EqualOptions;

        // Signals

        connect<K extends keyof EqualOptions.SignalSignatures>(
            signal: K,
            callback: EqualOptions.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof EqualOptions.SignalSignatures>(
            signal: K,
            callback: EqualOptions.SignalSignatures[K],
        ): number;
        emit<K extends keyof EqualOptions.SignalSignatures>(
            signal: K,
            ...args: Parameters<EqualOptions.SignalSignatures[K]>
        ): void;

        // Methods

        is_approx(): boolean;
    }

    namespace ExecuteContext {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class ExecuteContext extends GObject.Object {
        static $gtype: GObject.GType<ExecuteContext>;

        // Constructors

        constructor(properties?: Partial<ExecuteContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ExecuteContext;

        // Signals

        connect<K extends keyof ExecuteContext.SignalSignatures>(
            signal: K,
            callback: ExecuteContext.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ExecuteContext.SignalSignatures>(
            signal: K,
            callback: ExecuteContext.SignalSignatures[K],
        ): number;
        emit<K extends keyof ExecuteContext.SignalSignatures>(
            signal: K,
            ...args: Parameters<ExecuteContext.SignalSignatures[K]>
        ): void;
    }

    namespace ExecuteNode {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            node: any;
            options: ExecuteNodeOptions;
        }
    }

    class ExecuteNode extends GObject.Object {
        static $gtype: GObject.GType<ExecuteNode>;

        // Properties

        set node(val: any);
        get options(): ExecuteNodeOptions;

        // Constructors

        constructor(properties?: Partial<ExecuteNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof ExecuteNode.SignalSignatures>(
            signal: K,
            callback: ExecuteNode.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ExecuteNode.SignalSignatures>(
            signal: K,
            callback: ExecuteNode.SignalSignatures[K],
        ): number;
        emit<K extends keyof ExecuteNode.SignalSignatures>(
            signal: K,
            ...args: Parameters<ExecuteNode.SignalSignatures[K]>
        ): void;

        // Methods

        get_kind_name(): string;
        get_output_schema(): Schema;
    }

    namespace ExecuteNodeOptions {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            options: any;
        }
    }

    class ExecuteNodeOptions extends GObject.Object {
        static $gtype: GObject.GType<ExecuteNodeOptions>;

        // Properties

        set options(val: any);

        // Constructors

        constructor(properties?: Partial<ExecuteNodeOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof ExecuteNodeOptions.SignalSignatures>(
            signal: K,
            callback: ExecuteNodeOptions.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ExecuteNodeOptions.SignalSignatures>(
            signal: K,
            callback: ExecuteNodeOptions.SignalSignatures[K],
        ): number;
        emit<K extends keyof ExecuteNodeOptions.SignalSignatures>(
            signal: K,
            ...args: Parameters<ExecuteNodeOptions.SignalSignatures[K]>
        ): void;
    }

    namespace ExecutePlan {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            plan: any;
        }
    }

    class ExecutePlan extends GObject.Object {
        static $gtype: GObject.GType<ExecutePlan>;

        // Properties

        set plan(val: any);

        // Constructors

        constructor(properties?: Partial<ExecutePlan.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ExecutePlan;

        // Signals

        connect<K extends keyof ExecutePlan.SignalSignatures>(
            signal: K,
            callback: ExecutePlan.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ExecutePlan.SignalSignatures>(
            signal: K,
            callback: ExecutePlan.SignalSignatures[K],
        ): number;
        emit<K extends keyof ExecutePlan.SignalSignatures>(
            signal: K,
            ...args: Parameters<ExecutePlan.SignalSignatures[K]>
        ): void;

        // Methods

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

    namespace Expression {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class Expression extends GObject.Object {
        static $gtype: GObject.GType<Expression>;

        // Constructors

        constructor(properties?: Partial<Expression.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Expression.SignalSignatures>(
            signal: K,
            callback: Expression.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Expression.SignalSignatures>(
            signal: K,
            callback: Expression.SignalSignatures[K],
        ): number;
        emit<K extends keyof Expression.SignalSignatures>(
            signal: K,
            ...args: Parameters<Expression.SignalSignatures[K]>
        ): void;

        // Methods

        equal(other_expression: Expression): boolean;
        to_string(): string;
    }

    namespace ExtensionArray {
        // Signal signatures
        interface SignalSignatures extends Array.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Array.ConstructorProps {
            storage: Array;
        }
    }

    class ExtensionArray extends Array {
        static $gtype: GObject.GType<ExtensionArray>;

        // Properties

        get storage(): Array;

        // Constructors

        constructor(properties?: Partial<ExtensionArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof ExtensionArray.SignalSignatures>(
            signal: K,
            callback: ExtensionArray.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ExtensionArray.SignalSignatures>(
            signal: K,
            callback: ExtensionArray.SignalSignatures[K],
        ): number;
        emit<K extends keyof ExtensionArray.SignalSignatures>(
            signal: K,
            ...args: Parameters<ExtensionArray.SignalSignatures[K]>
        ): void;

        // Methods

        get_storage(): Array;
    }

    namespace ExtensionDataType {
        // Signal signatures
        interface SignalSignatures extends DataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends DataType.ConstructorProps {
            storage_data_type: DataType;
            storageDataType: DataType;
        }
    }

    class ExtensionDataType extends DataType {
        static $gtype: GObject.GType<ExtensionDataType>;

        // Properties

        get storage_data_type(): DataType;
        get storageDataType(): DataType;

        // Constructors

        constructor(properties?: Partial<ExtensionDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof ExtensionDataType.SignalSignatures>(
            signal: K,
            callback: ExtensionDataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ExtensionDataType.SignalSignatures>(
            signal: K,
            callback: ExtensionDataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof ExtensionDataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<ExtensionDataType.SignalSignatures[K]>
        ): void;

        // Virtual methods

        /**
         * It must returns %TRUE only when the both data types equal, %FALSE
         *   otherwise.
         * @param other_data_type
         */
        vfunc_equal(other_data_type: ExtensionDataType): boolean;
        /**
         * It must returns #GType for corresponding extension array
         *   class.
         */
        vfunc_get_array_gtype(): GObject.GType;
        /**
         * It must returns the name of this extension data type.
         */
        vfunc_get_extension_name(): string;
        /**
         * It must returns a serialized data of this extension data type
         *   to deserialize later.
         */
        vfunc_serialize(): GLib.Bytes;

        // Methods

        get_extension_name(): string;
        wrap_array(storage: Array): ExtensionArray;
        wrap_chunked_array(storage: ChunkedArray): ChunkedArray;
    }

    namespace ExtensionDataTypeRegistry {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            registry: any;
        }
    }

    class ExtensionDataTypeRegistry extends GObject.Object {
        static $gtype: GObject.GType<ExtensionDataTypeRegistry>;

        // Properties

        set registry(val: any);

        // Constructors

        constructor(properties?: Partial<ExtensionDataTypeRegistry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof ExtensionDataTypeRegistry.SignalSignatures>(
            signal: K,
            callback: ExtensionDataTypeRegistry.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ExtensionDataTypeRegistry.SignalSignatures>(
            signal: K,
            callback: ExtensionDataTypeRegistry.SignalSignatures[K],
        ): number;
        emit<K extends keyof ExtensionDataTypeRegistry.SignalSignatures>(
            signal: K,
            ...args: Parameters<ExtensionDataTypeRegistry.SignalSignatures[K]>
        ): void;

        // Static methods

        static ['default'](): ExtensionDataTypeRegistry;

        // Methods

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

    namespace ExtensionScalar {
        // Signal signatures
        interface SignalSignatures extends Scalar.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class ExtensionScalar extends Scalar {
        static $gtype: GObject.GType<ExtensionScalar>;

        // Constructors

        constructor(properties?: Partial<ExtensionScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof ExtensionScalar.SignalSignatures>(
            signal: K,
            callback: ExtensionScalar.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ExtensionScalar.SignalSignatures>(
            signal: K,
            callback: ExtensionScalar.SignalSignatures[K],
        ): number;
        emit<K extends keyof ExtensionScalar.SignalSignatures>(
            signal: K,
            ...args: Parameters<ExtensionScalar.SignalSignatures[K]>
        ): void;
    }

    namespace FeatherFileReader {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            feather_reader: any;
            featherReader: any;
        }
    }

    class FeatherFileReader extends GObject.Object {
        static $gtype: GObject.GType<FeatherFileReader>;

        // Properties

        set feather_reader(val: any);
        set featherReader(val: any);

        // Constructors

        constructor(properties?: Partial<FeatherFileReader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](file: SeekableInputStream): FeatherFileReader;

        // Signals

        connect<K extends keyof FeatherFileReader.SignalSignatures>(
            signal: K,
            callback: FeatherFileReader.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof FeatherFileReader.SignalSignatures>(
            signal: K,
            callback: FeatherFileReader.SignalSignatures[K],
        ): number;
        emit<K extends keyof FeatherFileReader.SignalSignatures>(
            signal: K,
            ...args: Parameters<FeatherFileReader.SignalSignatures[K]>
        ): void;

        // Methods

        get_version(): number;
        read(): Table;
        read_indices(indices: number[]): Table;
        read_names(names: string[]): Table;
    }

    namespace FeatherWriteProperties {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            compression: CompressionType;
        }
    }

    class FeatherWriteProperties extends GObject.Object {
        static $gtype: GObject.GType<FeatherWriteProperties>;

        // Properties

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

        // Constructors

        constructor(properties?: Partial<FeatherWriteProperties.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FeatherWriteProperties;

        // Signals

        connect<K extends keyof FeatherWriteProperties.SignalSignatures>(
            signal: K,
            callback: FeatherWriteProperties.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof FeatherWriteProperties.SignalSignatures>(
            signal: K,
            callback: FeatherWriteProperties.SignalSignatures[K],
        ): number;
        emit<K extends keyof FeatherWriteProperties.SignalSignatures>(
            signal: K,
            ...args: Parameters<FeatherWriteProperties.SignalSignatures[K]>
        ): void;
    }

    namespace Field {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            data_type: DataType;
            dataType: DataType;
            field: any;
        }
    }

    class Field extends GObject.Object {
        static $gtype: GObject.GType<Field>;

        // Properties

        set data_type(val: DataType);
        set dataType(val: DataType);
        set field(val: any);

        // Constructors

        constructor(properties?: Partial<Field.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string, data_type: DataType): Field;

        static new_full(name: string, data_type: DataType, nullable: boolean): Field;

        // Signals

        connect<K extends keyof Field.SignalSignatures>(signal: K, callback: Field.SignalSignatures[K]): number;
        connect_after<K extends keyof Field.SignalSignatures>(signal: K, callback: Field.SignalSignatures[K]): number;
        emit<K extends keyof Field.SignalSignatures>(signal: K, ...args: Parameters<Field.SignalSignatures[K]>): void;

        // Static methods

        static ['import'](c_abi_schema: any): Field | null;

        // Methods

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

    namespace FieldExpression {
        // Signal signatures
        interface SignalSignatures extends Expression.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Expression.ConstructorProps {}
    }

    class FieldExpression extends Expression {
        static $gtype: GObject.GType<FieldExpression>;

        // Constructors

        constructor(properties?: Partial<FieldExpression.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](reference: string): FieldExpression;

        // Signals

        connect<K extends keyof FieldExpression.SignalSignatures>(
            signal: K,
            callback: FieldExpression.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof FieldExpression.SignalSignatures>(
            signal: K,
            callback: FieldExpression.SignalSignatures[K],
        ): number;
        emit<K extends keyof FieldExpression.SignalSignatures>(
            signal: K,
            ...args: Parameters<FieldExpression.SignalSignatures[K]>
        ): void;
    }

    namespace FileInfo {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

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

        // Properties

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

        // Constructors

        constructor(properties?: Partial<FileInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FileInfo;

        // Signals

        connect<K extends keyof FileInfo.SignalSignatures>(signal: K, callback: FileInfo.SignalSignatures[K]): number;
        connect_after<K extends keyof FileInfo.SignalSignatures>(
            signal: K,
            callback: FileInfo.SignalSignatures[K],
        ): number;
        emit<K extends keyof FileInfo.SignalSignatures>(
            signal: K,
            ...args: Parameters<FileInfo.SignalSignatures[K]>
        ): void;

        // Methods

        equal(other_file_info: FileInfo): boolean;
        is_dir(): boolean;
        is_file(): boolean;
        to_string(): string;
    }

    namespace FileInputStream {
        // Signal signatures
        interface SignalSignatures extends SeekableInputStream.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps
            extends SeekableInputStream.ConstructorProps,
                File.ConstructorProps,
                Readable.ConstructorProps {}
    }

    class FileInputStream extends SeekableInputStream implements File, Readable {
        static $gtype: GObject.GType<FileInputStream>;

        // Constructors

        constructor(properties?: Partial<FileInputStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](path: string): FileInputStream;

        static new_file_descriptor(file_descriptor: number): FileInputStream;

        // Signals

        connect<K extends keyof FileInputStream.SignalSignatures>(
            signal: K,
            callback: FileInputStream.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof FileInputStream.SignalSignatures>(
            signal: K,
            callback: FileInputStream.SignalSignatures[K],
        ): number;
        emit<K extends keyof FileInputStream.SignalSignatures>(
            signal: K,
            ...args: Parameters<FileInputStream.SignalSignatures[K]>
        ): void;

        // Methods

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
            flags: GObject.BindingFlags | null,
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
            flags: GObject.BindingFlags | null,
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
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
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
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
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
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace FileOutputStream {
        // Signal signatures
        interface SignalSignatures extends OutputStream.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps
            extends OutputStream.ConstructorProps,
                File.ConstructorProps,
                Writable.ConstructorProps {}
    }

    class FileOutputStream extends OutputStream implements File, Writable {
        static $gtype: GObject.GType<FileOutputStream>;

        // Constructors

        constructor(properties?: Partial<FileOutputStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](path: string, append: boolean): FileOutputStream;

        // Signals

        connect<K extends keyof FileOutputStream.SignalSignatures>(
            signal: K,
            callback: FileOutputStream.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof FileOutputStream.SignalSignatures>(
            signal: K,
            callback: FileOutputStream.SignalSignatures[K],
        ): number;
        emit<K extends keyof FileOutputStream.SignalSignatures>(
            signal: K,
            ...args: Parameters<FileOutputStream.SignalSignatures[K]>
        ): void;

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
            flags: GObject.BindingFlags | null,
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
            flags: GObject.BindingFlags | null,
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
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
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
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
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
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace FileSelector {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

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

        // Properties

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

        // Constructors

        constructor(properties?: Partial<FileSelector.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof FileSelector.SignalSignatures>(
            signal: K,
            callback: FileSelector.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof FileSelector.SignalSignatures>(
            signal: K,
            callback: FileSelector.SignalSignatures[K],
        ): number;
        emit<K extends keyof FileSelector.SignalSignatures>(
            signal: K,
            ...args: Parameters<FileSelector.SignalSignatures[K]>
        ): void;
    }

    namespace FileSystem {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            file_system: any;
            fileSystem: any;
        }
    }

    abstract class FileSystem extends GObject.Object {
        static $gtype: GObject.GType<FileSystem>;

        // Properties

        set file_system(val: any);
        set fileSystem(val: any);

        // Constructors

        constructor(properties?: Partial<FileSystem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof FileSystem.SignalSignatures>(
            signal: K,
            callback: FileSystem.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof FileSystem.SignalSignatures>(
            signal: K,
            callback: FileSystem.SignalSignatures[K],
        ): number;
        emit<K extends keyof FileSystem.SignalSignatures>(
            signal: K,
            ...args: Parameters<FileSystem.SignalSignatures[K]>
        ): void;

        // Static methods

        /**
         * This is a factory function to create a specific #GArrowFileSystem
         * object.
         * @param uri An URI to specify file system with options. If you only have an   absolute path, g_filename_to_uri() will help you.
         */
        static create(uri: string): FileSystem | null;

        // Methods

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

    namespace FilterNodeOptions {
        // Signal signatures
        interface SignalSignatures extends ExecuteNodeOptions.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ExecuteNodeOptions.ConstructorProps {}
    }

    class FilterNodeOptions extends ExecuteNodeOptions {
        static $gtype: GObject.GType<FilterNodeOptions>;

        // Constructors

        constructor(properties?: Partial<FilterNodeOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](expression: Expression): FilterNodeOptions;

        // Signals

        connect<K extends keyof FilterNodeOptions.SignalSignatures>(
            signal: K,
            callback: FilterNodeOptions.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof FilterNodeOptions.SignalSignatures>(
            signal: K,
            callback: FilterNodeOptions.SignalSignatures[K],
        ): number;
        emit<K extends keyof FilterNodeOptions.SignalSignatures>(
            signal: K,
            ...args: Parameters<FilterNodeOptions.SignalSignatures[K]>
        ): void;
    }

    namespace FilterOptions {
        // Signal signatures
        interface SignalSignatures extends FunctionOptions.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends FunctionOptions.ConstructorProps {
            null_selection_behavior: FilterNullSelectionBehavior;
            nullSelectionBehavior: FilterNullSelectionBehavior;
        }
    }

    class FilterOptions extends FunctionOptions {
        static $gtype: GObject.GType<FilterOptions>;

        // Properties

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

        // Constructors

        constructor(properties?: Partial<FilterOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FilterOptions;

        // Signals

        connect<K extends keyof FilterOptions.SignalSignatures>(
            signal: K,
            callback: FilterOptions.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof FilterOptions.SignalSignatures>(
            signal: K,
            callback: FilterOptions.SignalSignatures[K],
        ): number;
        emit<K extends keyof FilterOptions.SignalSignatures>(
            signal: K,
            ...args: Parameters<FilterOptions.SignalSignatures[K]>
        ): void;
    }

    namespace FixedSizeBinaryArray {
        // Signal signatures
        interface SignalSignatures extends PrimitiveArray.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends PrimitiveArray.ConstructorProps {}
    }

    class FixedSizeBinaryArray extends PrimitiveArray {
        static $gtype: GObject.GType<FixedSizeBinaryArray>;

        // Constructors

        constructor(properties?: Partial<FixedSizeBinaryArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            data_type: FixedSizeBinaryDataType,
            length: number,
            data: Buffer,
            null_bitmap: Buffer | null,
            n_nulls: number,
        ): FixedSizeBinaryArray;

        // Signals

        connect<K extends keyof FixedSizeBinaryArray.SignalSignatures>(
            signal: K,
            callback: FixedSizeBinaryArray.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof FixedSizeBinaryArray.SignalSignatures>(
            signal: K,
            callback: FixedSizeBinaryArray.SignalSignatures[K],
        ): number;
        emit<K extends keyof FixedSizeBinaryArray.SignalSignatures>(
            signal: K,
            ...args: Parameters<FixedSizeBinaryArray.SignalSignatures[K]>
        ): void;

        // Methods

        get_byte_width(): number;
        get_value(i: number): GLib.Bytes;
        get_values_bytes(): GLib.Bytes;
    }

    namespace FixedSizeBinaryArrayBuilder {
        // Signal signatures
        interface SignalSignatures extends ArrayBuilder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class FixedSizeBinaryArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<FixedSizeBinaryArrayBuilder>;

        // Constructors

        constructor(properties?: Partial<FixedSizeBinaryArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type: FixedSizeBinaryDataType): FixedSizeBinaryArrayBuilder;

        // Signals

        connect<K extends keyof FixedSizeBinaryArrayBuilder.SignalSignatures>(
            signal: K,
            callback: FixedSizeBinaryArrayBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof FixedSizeBinaryArrayBuilder.SignalSignatures>(
            signal: K,
            callback: FixedSizeBinaryArrayBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof FixedSizeBinaryArrayBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<FixedSizeBinaryArrayBuilder.SignalSignatures[K]>
        ): void;

        // Methods

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

    namespace FixedSizeBinaryDataType {
        // Signal signatures
        interface SignalSignatures extends FixedWidthDataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends FixedWidthDataType.ConstructorProps {}
    }

    class FixedSizeBinaryDataType extends FixedWidthDataType {
        static $gtype: GObject.GType<FixedSizeBinaryDataType>;

        // Constructors

        constructor(properties?: Partial<FixedSizeBinaryDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](byte_width: number): FixedSizeBinaryDataType;

        // Signals

        connect<K extends keyof FixedSizeBinaryDataType.SignalSignatures>(
            signal: K,
            callback: FixedSizeBinaryDataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof FixedSizeBinaryDataType.SignalSignatures>(
            signal: K,
            callback: FixedSizeBinaryDataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof FixedSizeBinaryDataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<FixedSizeBinaryDataType.SignalSignatures[K]>
        ): void;

        // Methods

        get_byte_width(): number;
    }

    namespace FixedSizeBinaryScalar {
        // Signal signatures
        interface SignalSignatures extends BaseBinaryScalar.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends BaseBinaryScalar.ConstructorProps {}
    }

    class FixedSizeBinaryScalar extends BaseBinaryScalar {
        static $gtype: GObject.GType<FixedSizeBinaryScalar>;

        // Constructors

        constructor(properties?: Partial<FixedSizeBinaryScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type: FixedSizeBinaryDataType, value: Buffer): FixedSizeBinaryScalar;

        // Signals

        connect<K extends keyof FixedSizeBinaryScalar.SignalSignatures>(
            signal: K,
            callback: FixedSizeBinaryScalar.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof FixedSizeBinaryScalar.SignalSignatures>(
            signal: K,
            callback: FixedSizeBinaryScalar.SignalSignatures[K],
        ): number;
        emit<K extends keyof FixedSizeBinaryScalar.SignalSignatures>(
            signal: K,
            ...args: Parameters<FixedSizeBinaryScalar.SignalSignatures[K]>
        ): void;
    }

    namespace FixedWidthDataType {
        // Signal signatures
        interface SignalSignatures extends DataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends DataType.ConstructorProps {}
    }

    abstract class FixedWidthDataType extends DataType {
        static $gtype: GObject.GType<FixedWidthDataType>;

        // Constructors

        constructor(properties?: Partial<FixedWidthDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof FixedWidthDataType.SignalSignatures>(
            signal: K,
            callback: FixedWidthDataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof FixedWidthDataType.SignalSignatures>(
            signal: K,
            callback: FixedWidthDataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof FixedWidthDataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<FixedWidthDataType.SignalSignatures[K]>
        ): void;

        // Methods

        get_bit_width(): number;
    }

    namespace FloatArray {
        // Signal signatures
        interface SignalSignatures extends NumericArray.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends NumericArray.ConstructorProps {}
    }

    class FloatArray extends NumericArray {
        static $gtype: GObject.GType<FloatArray>;

        // Constructors

        constructor(properties?: Partial<FloatArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): FloatArray;

        // Signals

        connect<K extends keyof FloatArray.SignalSignatures>(
            signal: K,
            callback: FloatArray.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof FloatArray.SignalSignatures>(
            signal: K,
            callback: FloatArray.SignalSignatures[K],
        ): number;
        emit<K extends keyof FloatArray.SignalSignatures>(
            signal: K,
            ...args: Parameters<FloatArray.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(i: number): number;
        get_values(): number[];
        sum(): number;
    }

    namespace FloatArrayBuilder {
        // Signal signatures
        interface SignalSignatures extends ArrayBuilder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class FloatArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<FloatArrayBuilder>;

        // Constructors

        constructor(properties?: Partial<FloatArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FloatArrayBuilder;

        // Signals

        connect<K extends keyof FloatArrayBuilder.SignalSignatures>(
            signal: K,
            callback: FloatArrayBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof FloatArrayBuilder.SignalSignatures>(
            signal: K,
            callback: FloatArrayBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof FloatArrayBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<FloatArrayBuilder.SignalSignatures[K]>
        ): void;

        // Methods

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

    namespace FloatDataType {
        // Signal signatures
        interface SignalSignatures extends FloatingPointDataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends FloatingPointDataType.ConstructorProps {}
    }

    class FloatDataType extends FloatingPointDataType {
        static $gtype: GObject.GType<FloatDataType>;

        // Constructors

        constructor(properties?: Partial<FloatDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FloatDataType;

        // Signals

        connect<K extends keyof FloatDataType.SignalSignatures>(
            signal: K,
            callback: FloatDataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof FloatDataType.SignalSignatures>(
            signal: K,
            callback: FloatDataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof FloatDataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<FloatDataType.SignalSignatures[K]>
        ): void;
    }

    namespace FloatScalar {
        // Signal signatures
        interface SignalSignatures extends Scalar.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class FloatScalar extends Scalar {
        static $gtype: GObject.GType<FloatScalar>;

        // Constructors

        constructor(properties?: Partial<FloatScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): FloatScalar;

        // Signals

        connect<K extends keyof FloatScalar.SignalSignatures>(
            signal: K,
            callback: FloatScalar.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof FloatScalar.SignalSignatures>(
            signal: K,
            callback: FloatScalar.SignalSignatures[K],
        ): number;
        emit<K extends keyof FloatScalar.SignalSignatures>(
            signal: K,
            ...args: Parameters<FloatScalar.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(): number;
    }

    namespace FloatingPointDataType {
        // Signal signatures
        interface SignalSignatures extends NumericDataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends NumericDataType.ConstructorProps {}
    }

    abstract class FloatingPointDataType extends NumericDataType {
        static $gtype: GObject.GType<FloatingPointDataType>;

        // Constructors

        constructor(properties?: Partial<FloatingPointDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof FloatingPointDataType.SignalSignatures>(
            signal: K,
            callback: FloatingPointDataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof FloatingPointDataType.SignalSignatures>(
            signal: K,
            callback: FloatingPointDataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof FloatingPointDataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<FloatingPointDataType.SignalSignatures[K]>
        ): void;
    }

    namespace Function {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            function: any;
        }
    }

    class Function extends GObject.Object {
        static $gtype: GObject.GType<Function>;

        // Properties

        set function(val: any);

        // Constructors

        constructor(properties?: Partial<Function.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Function.SignalSignatures>(signal: K, callback: Function.SignalSignatures[K]): number;
        connect_after<K extends keyof Function.SignalSignatures>(
            signal: K,
            callback: Function.SignalSignatures[K],
        ): number;
        emit<K extends keyof Function.SignalSignatures>(
            signal: K,
            ...args: Parameters<Function.SignalSignatures[K]>
        ): void;

        // Static methods

        static all(): Function[];
        static find(name: string): Function;

        // Methods

        equal(other_function: Function): boolean;
        execute(args: Datum[], options?: FunctionOptions | null, context?: ExecuteContext | null): Datum | null;
        get_default_options(): FunctionOptions | null;
        get_doc(): FunctionDoc;
        get_name(): string;
        get_options_type(): GObject.GType;
        to_string(): string;
    }

    namespace FunctionDoc {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            doc: any;
        }
    }

    class FunctionDoc extends GObject.Object {
        static $gtype: GObject.GType<FunctionDoc>;

        // Properties

        set doc(val: any);

        // Constructors

        constructor(properties?: Partial<FunctionDoc.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof FunctionDoc.SignalSignatures>(
            signal: K,
            callback: FunctionDoc.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof FunctionDoc.SignalSignatures>(
            signal: K,
            callback: FunctionDoc.SignalSignatures[K],
        ): number;
        emit<K extends keyof FunctionDoc.SignalSignatures>(
            signal: K,
            ...args: Parameters<FunctionDoc.SignalSignatures[K]>
        ): void;

        // Methods

        get_arg_names(): string[];
        get_description(): string;
        get_options_class_name(): string;
        get_summary(): string;
    }

    namespace FunctionOptions {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class FunctionOptions extends GObject.Object {
        static $gtype: GObject.GType<FunctionOptions>;

        // Constructors

        constructor(properties?: Partial<FunctionOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof FunctionOptions.SignalSignatures>(
            signal: K,
            callback: FunctionOptions.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof FunctionOptions.SignalSignatures>(
            signal: K,
            callback: FunctionOptions.SignalSignatures[K],
        ): number;
        emit<K extends keyof FunctionOptions.SignalSignatures>(
            signal: K,
            ...args: Parameters<FunctionOptions.SignalSignatures[K]>
        ): void;

        // Methods

        equal(other_options?: FunctionOptions | null): boolean;
        to_string(): string;
    }

    namespace GCSFileSystem {
        // Signal signatures
        interface SignalSignatures extends FileSystem.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends FileSystem.ConstructorProps {}
    }

    class GCSFileSystem extends FileSystem {
        static $gtype: GObject.GType<GCSFileSystem>;

        // Constructors

        constructor(properties?: Partial<GCSFileSystem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof GCSFileSystem.SignalSignatures>(
            signal: K,
            callback: GCSFileSystem.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof GCSFileSystem.SignalSignatures>(
            signal: K,
            callback: GCSFileSystem.SignalSignatures[K],
        ): number;
        emit<K extends keyof GCSFileSystem.SignalSignatures>(
            signal: K,
            ...args: Parameters<GCSFileSystem.SignalSignatures[K]>
        ): void;
    }

    namespace GIOInputStream {
        // Signal signatures
        interface SignalSignatures extends SeekableInputStream.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps
            extends SeekableInputStream.ConstructorProps,
                File.ConstructorProps,
                Readable.ConstructorProps {
            raw: Gio.InputStream;
        }
    }

    class GIOInputStream extends SeekableInputStream implements File, Readable {
        static $gtype: GObject.GType<GIOInputStream>;

        // Properties

        get raw(): Gio.InputStream;

        // Constructors

        constructor(properties?: Partial<GIOInputStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](gio_input_stream: Gio.InputStream): GIOInputStream;

        // Signals

        connect<K extends keyof GIOInputStream.SignalSignatures>(
            signal: K,
            callback: GIOInputStream.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof GIOInputStream.SignalSignatures>(
            signal: K,
            callback: GIOInputStream.SignalSignatures[K],
        ): number;
        emit<K extends keyof GIOInputStream.SignalSignatures>(
            signal: K,
            ...args: Parameters<GIOInputStream.SignalSignatures[K]>
        ): void;

        // Methods

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
            flags: GObject.BindingFlags | null,
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
            flags: GObject.BindingFlags | null,
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
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
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
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
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
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace GIOOutputStream {
        // Signal signatures
        interface SignalSignatures extends OutputStream.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps
            extends OutputStream.ConstructorProps,
                File.ConstructorProps,
                Writable.ConstructorProps {
            raw: Gio.OutputStream;
        }
    }

    class GIOOutputStream extends OutputStream implements File, Writable {
        static $gtype: GObject.GType<GIOOutputStream>;

        // Properties

        get raw(): Gio.OutputStream;

        // Constructors

        constructor(properties?: Partial<GIOOutputStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](gio_output_stream: Gio.OutputStream): GIOOutputStream;

        // Signals

        connect<K extends keyof GIOOutputStream.SignalSignatures>(
            signal: K,
            callback: GIOOutputStream.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof GIOOutputStream.SignalSignatures>(
            signal: K,
            callback: GIOOutputStream.SignalSignatures[K],
        ): number;
        emit<K extends keyof GIOOutputStream.SignalSignatures>(
            signal: K,
            ...args: Parameters<GIOOutputStream.SignalSignatures[K]>
        ): void;

        // Methods

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
            flags: GObject.BindingFlags | null,
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
            flags: GObject.BindingFlags | null,
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
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
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
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
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
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace HDFSFileSystem {
        // Signal signatures
        interface SignalSignatures extends FileSystem.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends FileSystem.ConstructorProps {}
    }

    class HDFSFileSystem extends FileSystem {
        static $gtype: GObject.GType<HDFSFileSystem>;

        // Constructors

        constructor(properties?: Partial<HDFSFileSystem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof HDFSFileSystem.SignalSignatures>(
            signal: K,
            callback: HDFSFileSystem.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof HDFSFileSystem.SignalSignatures>(
            signal: K,
            callback: HDFSFileSystem.SignalSignatures[K],
        ): number;
        emit<K extends keyof HDFSFileSystem.SignalSignatures>(
            signal: K,
            ...args: Parameters<HDFSFileSystem.SignalSignatures[K]>
        ): void;
    }

    namespace HalfFloatArray {
        // Signal signatures
        interface SignalSignatures extends NumericArray.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends NumericArray.ConstructorProps {}
    }

    class HalfFloatArray extends NumericArray {
        static $gtype: GObject.GType<HalfFloatArray>;

        // Constructors

        constructor(properties?: Partial<HalfFloatArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): HalfFloatArray;

        // Signals

        connect<K extends keyof HalfFloatArray.SignalSignatures>(
            signal: K,
            callback: HalfFloatArray.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof HalfFloatArray.SignalSignatures>(
            signal: K,
            callback: HalfFloatArray.SignalSignatures[K],
        ): number;
        emit<K extends keyof HalfFloatArray.SignalSignatures>(
            signal: K,
            ...args: Parameters<HalfFloatArray.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(i: number): number;
        get_values(): number[];
    }

    namespace HalfFloatArrayBuilder {
        // Signal signatures
        interface SignalSignatures extends ArrayBuilder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class HalfFloatArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<HalfFloatArrayBuilder>;

        // Constructors

        constructor(properties?: Partial<HalfFloatArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): HalfFloatArrayBuilder;

        // Signals

        connect<K extends keyof HalfFloatArrayBuilder.SignalSignatures>(
            signal: K,
            callback: HalfFloatArrayBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof HalfFloatArrayBuilder.SignalSignatures>(
            signal: K,
            callback: HalfFloatArrayBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof HalfFloatArrayBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<HalfFloatArrayBuilder.SignalSignatures[K]>
        ): void;

        // Methods

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

    namespace HalfFloatDataType {
        // Signal signatures
        interface SignalSignatures extends FloatingPointDataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends FloatingPointDataType.ConstructorProps {}
    }

    class HalfFloatDataType extends FloatingPointDataType {
        static $gtype: GObject.GType<HalfFloatDataType>;

        // Constructors

        constructor(properties?: Partial<HalfFloatDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): HalfFloatDataType;

        // Signals

        connect<K extends keyof HalfFloatDataType.SignalSignatures>(
            signal: K,
            callback: HalfFloatDataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof HalfFloatDataType.SignalSignatures>(
            signal: K,
            callback: HalfFloatDataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof HalfFloatDataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<HalfFloatDataType.SignalSignatures[K]>
        ): void;
    }

    namespace HalfFloatScalar {
        // Signal signatures
        interface SignalSignatures extends Scalar.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class HalfFloatScalar extends Scalar {
        static $gtype: GObject.GType<HalfFloatScalar>;

        // Constructors

        constructor(properties?: Partial<HalfFloatScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): HalfFloatScalar;

        // Signals

        connect<K extends keyof HalfFloatScalar.SignalSignatures>(
            signal: K,
            callback: HalfFloatScalar.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof HalfFloatScalar.SignalSignatures>(
            signal: K,
            callback: HalfFloatScalar.SignalSignatures[K],
        ): number;
        emit<K extends keyof HalfFloatScalar.SignalSignatures>(
            signal: K,
            ...args: Parameters<HalfFloatScalar.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(): number;
    }

    namespace HashJoinNodeOptions {
        // Signal signatures
        interface SignalSignatures extends ExecuteNodeOptions.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ExecuteNodeOptions.ConstructorProps {}
    }

    class HashJoinNodeOptions extends ExecuteNodeOptions {
        static $gtype: GObject.GType<HashJoinNodeOptions>;

        // Constructors

        constructor(properties?: Partial<HashJoinNodeOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](type: JoinType, left_keys: string[], right_keys: string[]): HashJoinNodeOptions;

        // Signals

        connect<K extends keyof HashJoinNodeOptions.SignalSignatures>(
            signal: K,
            callback: HashJoinNodeOptions.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof HashJoinNodeOptions.SignalSignatures>(
            signal: K,
            callback: HashJoinNodeOptions.SignalSignatures[K],
        ): number;
        emit<K extends keyof HashJoinNodeOptions.SignalSignatures>(
            signal: K,
            ...args: Parameters<HashJoinNodeOptions.SignalSignatures[K]>
        ): void;

        // Methods

        set_left_outputs(outputs: string[]): boolean;
        set_right_outputs(outputs: string[]): boolean;
    }

    namespace ISO8601TimestampParser {
        // Signal signatures
        interface SignalSignatures extends TimestampParser.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends TimestampParser.ConstructorProps {}
    }

    class ISO8601TimestampParser extends TimestampParser {
        static $gtype: GObject.GType<ISO8601TimestampParser>;

        // Constructors

        constructor(properties?: Partial<ISO8601TimestampParser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ISO8601TimestampParser;

        // Signals

        connect<K extends keyof ISO8601TimestampParser.SignalSignatures>(
            signal: K,
            callback: ISO8601TimestampParser.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ISO8601TimestampParser.SignalSignatures>(
            signal: K,
            callback: ISO8601TimestampParser.SignalSignatures[K],
        ): number;
        emit<K extends keyof ISO8601TimestampParser.SignalSignatures>(
            signal: K,
            ...args: Parameters<ISO8601TimestampParser.SignalSignatures[K]>
        ): void;
    }

    namespace IndexOptions {
        // Signal signatures
        interface SignalSignatures extends FunctionOptions.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends FunctionOptions.ConstructorProps {
            value: Scalar;
        }
    }

    class IndexOptions extends FunctionOptions {
        static $gtype: GObject.GType<IndexOptions>;

        // Properties

        /**
         * The value to be compared.
         */
        get value(): Scalar;
        set value(val: Scalar);

        // Constructors

        constructor(properties?: Partial<IndexOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): IndexOptions;

        // Signals

        connect<K extends keyof IndexOptions.SignalSignatures>(
            signal: K,
            callback: IndexOptions.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof IndexOptions.SignalSignatures>(
            signal: K,
            callback: IndexOptions.SignalSignatures[K],
        ): number;
        emit<K extends keyof IndexOptions.SignalSignatures>(
            signal: K,
            ...args: Parameters<IndexOptions.SignalSignatures[K]>
        ): void;
    }

    namespace InputStream {
        // Signal signatures
        interface SignalSignatures extends Gio.InputStream.SignalSignatures {}

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

        // Properties

        set input_stream(val: any);
        set inputStream(val: any);

        // Constructors

        constructor(properties?: Partial<InputStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof InputStream.SignalSignatures>(
            signal: K,
            callback: InputStream.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof InputStream.SignalSignatures>(
            signal: K,
            callback: InputStream.SignalSignatures[K],
        ): number;
        emit<K extends keyof InputStream.SignalSignatures>(
            signal: K,
            ...args: Parameters<InputStream.SignalSignatures[K]>
        ): void;

        // Methods

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
            flags: GObject.BindingFlags | null,
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
            flags: GObject.BindingFlags | null,
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
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
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
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
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
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Int16Array {
        // Signal signatures
        interface SignalSignatures extends NumericArray.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends NumericArray.ConstructorProps {}
    }

    class Int16Array extends NumericArray {
        static $gtype: GObject.GType<Int16Array>;

        // Constructors

        constructor(properties?: Partial<Int16Array.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): Int16Array;

        // Signals

        connect<K extends keyof Int16Array.SignalSignatures>(
            signal: K,
            callback: Int16Array.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Int16Array.SignalSignatures>(
            signal: K,
            callback: Int16Array.SignalSignatures[K],
        ): number;
        emit<K extends keyof Int16Array.SignalSignatures>(
            signal: K,
            ...args: Parameters<Int16Array.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(i: number): number;
        get_values(): number[];
        sum(): number;
    }

    namespace Int16ArrayBuilder {
        // Signal signatures
        interface SignalSignatures extends ArrayBuilder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class Int16ArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<Int16ArrayBuilder>;

        // Constructors

        constructor(properties?: Partial<Int16ArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Int16ArrayBuilder;

        // Signals

        connect<K extends keyof Int16ArrayBuilder.SignalSignatures>(
            signal: K,
            callback: Int16ArrayBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Int16ArrayBuilder.SignalSignatures>(
            signal: K,
            callback: Int16ArrayBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof Int16ArrayBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<Int16ArrayBuilder.SignalSignatures[K]>
        ): void;

        // Methods

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

    namespace Int16DataType {
        // Signal signatures
        interface SignalSignatures extends IntegerDataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends IntegerDataType.ConstructorProps {}
    }

    class Int16DataType extends IntegerDataType {
        static $gtype: GObject.GType<Int16DataType>;

        // Constructors

        constructor(properties?: Partial<Int16DataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Int16DataType;

        // Signals

        connect<K extends keyof Int16DataType.SignalSignatures>(
            signal: K,
            callback: Int16DataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Int16DataType.SignalSignatures>(
            signal: K,
            callback: Int16DataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof Int16DataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<Int16DataType.SignalSignatures[K]>
        ): void;
    }

    namespace Int16Scalar {
        // Signal signatures
        interface SignalSignatures extends Scalar.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class Int16Scalar extends Scalar {
        static $gtype: GObject.GType<Int16Scalar>;

        // Constructors

        constructor(properties?: Partial<Int16Scalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): Int16Scalar;

        // Signals

        connect<K extends keyof Int16Scalar.SignalSignatures>(
            signal: K,
            callback: Int16Scalar.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Int16Scalar.SignalSignatures>(
            signal: K,
            callback: Int16Scalar.SignalSignatures[K],
        ): number;
        emit<K extends keyof Int16Scalar.SignalSignatures>(
            signal: K,
            ...args: Parameters<Int16Scalar.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(): number;
    }

    namespace Int32Array {
        // Signal signatures
        interface SignalSignatures extends NumericArray.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends NumericArray.ConstructorProps {}
    }

    class Int32Array extends NumericArray {
        static $gtype: GObject.GType<Int32Array>;

        // Constructors

        constructor(properties?: Partial<Int32Array.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): Int32Array;

        // Signals

        connect<K extends keyof Int32Array.SignalSignatures>(
            signal: K,
            callback: Int32Array.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Int32Array.SignalSignatures>(
            signal: K,
            callback: Int32Array.SignalSignatures[K],
        ): number;
        emit<K extends keyof Int32Array.SignalSignatures>(
            signal: K,
            ...args: Parameters<Int32Array.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(i: number): number;
        get_values(): number[];
        sum(): number;
    }

    namespace Int32ArrayBuilder {
        // Signal signatures
        interface SignalSignatures extends ArrayBuilder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class Int32ArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<Int32ArrayBuilder>;

        // Constructors

        constructor(properties?: Partial<Int32ArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Int32ArrayBuilder;

        // Signals

        connect<K extends keyof Int32ArrayBuilder.SignalSignatures>(
            signal: K,
            callback: Int32ArrayBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Int32ArrayBuilder.SignalSignatures>(
            signal: K,
            callback: Int32ArrayBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof Int32ArrayBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<Int32ArrayBuilder.SignalSignatures[K]>
        ): void;

        // Methods

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

    namespace Int32DataType {
        // Signal signatures
        interface SignalSignatures extends IntegerDataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends IntegerDataType.ConstructorProps {}
    }

    class Int32DataType extends IntegerDataType {
        static $gtype: GObject.GType<Int32DataType>;

        // Constructors

        constructor(properties?: Partial<Int32DataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Int32DataType;

        // Signals

        connect<K extends keyof Int32DataType.SignalSignatures>(
            signal: K,
            callback: Int32DataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Int32DataType.SignalSignatures>(
            signal: K,
            callback: Int32DataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof Int32DataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<Int32DataType.SignalSignatures[K]>
        ): void;
    }

    namespace Int32Scalar {
        // Signal signatures
        interface SignalSignatures extends Scalar.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class Int32Scalar extends Scalar {
        static $gtype: GObject.GType<Int32Scalar>;

        // Constructors

        constructor(properties?: Partial<Int32Scalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): Int32Scalar;

        // Signals

        connect<K extends keyof Int32Scalar.SignalSignatures>(
            signal: K,
            callback: Int32Scalar.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Int32Scalar.SignalSignatures>(
            signal: K,
            callback: Int32Scalar.SignalSignatures[K],
        ): number;
        emit<K extends keyof Int32Scalar.SignalSignatures>(
            signal: K,
            ...args: Parameters<Int32Scalar.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(): number;
    }

    namespace Int64Array {
        // Signal signatures
        interface SignalSignatures extends NumericArray.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends NumericArray.ConstructorProps {}
    }

    class Int64Array extends NumericArray {
        static $gtype: GObject.GType<Int64Array>;

        // Constructors

        constructor(properties?: Partial<Int64Array.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): Int64Array;

        // Signals

        connect<K extends keyof Int64Array.SignalSignatures>(
            signal: K,
            callback: Int64Array.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Int64Array.SignalSignatures>(
            signal: K,
            callback: Int64Array.SignalSignatures[K],
        ): number;
        emit<K extends keyof Int64Array.SignalSignatures>(
            signal: K,
            ...args: Parameters<Int64Array.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(i: number): number;
        get_values(): number[];
        sum(): number;
    }

    namespace Int64ArrayBuilder {
        // Signal signatures
        interface SignalSignatures extends ArrayBuilder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class Int64ArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<Int64ArrayBuilder>;

        // Constructors

        constructor(properties?: Partial<Int64ArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Int64ArrayBuilder;

        // Signals

        connect<K extends keyof Int64ArrayBuilder.SignalSignatures>(
            signal: K,
            callback: Int64ArrayBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Int64ArrayBuilder.SignalSignatures>(
            signal: K,
            callback: Int64ArrayBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof Int64ArrayBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<Int64ArrayBuilder.SignalSignatures[K]>
        ): void;

        // Methods

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

    namespace Int64DataType {
        // Signal signatures
        interface SignalSignatures extends IntegerDataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends IntegerDataType.ConstructorProps {}
    }

    class Int64DataType extends IntegerDataType {
        static $gtype: GObject.GType<Int64DataType>;

        // Constructors

        constructor(properties?: Partial<Int64DataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Int64DataType;

        // Signals

        connect<K extends keyof Int64DataType.SignalSignatures>(
            signal: K,
            callback: Int64DataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Int64DataType.SignalSignatures>(
            signal: K,
            callback: Int64DataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof Int64DataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<Int64DataType.SignalSignatures[K]>
        ): void;
    }

    namespace Int64Scalar {
        // Signal signatures
        interface SignalSignatures extends Scalar.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class Int64Scalar extends Scalar {
        static $gtype: GObject.GType<Int64Scalar>;

        // Constructors

        constructor(properties?: Partial<Int64Scalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): Int64Scalar;

        // Signals

        connect<K extends keyof Int64Scalar.SignalSignatures>(
            signal: K,
            callback: Int64Scalar.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Int64Scalar.SignalSignatures>(
            signal: K,
            callback: Int64Scalar.SignalSignatures[K],
        ): number;
        emit<K extends keyof Int64Scalar.SignalSignatures>(
            signal: K,
            ...args: Parameters<Int64Scalar.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(): number;
    }

    namespace Int8Array {
        // Signal signatures
        interface SignalSignatures extends NumericArray.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends NumericArray.ConstructorProps {}
    }

    class Int8Array extends NumericArray {
        static $gtype: GObject.GType<Int8Array>;

        // Constructors

        constructor(properties?: Partial<Int8Array.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): Int8Array;

        // Signals

        connect<K extends keyof Int8Array.SignalSignatures>(signal: K, callback: Int8Array.SignalSignatures[K]): number;
        connect_after<K extends keyof Int8Array.SignalSignatures>(
            signal: K,
            callback: Int8Array.SignalSignatures[K],
        ): number;
        emit<K extends keyof Int8Array.SignalSignatures>(
            signal: K,
            ...args: Parameters<Int8Array.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(i: number): number;
        get_values(): Uint8Array;
        sum(): number;
    }

    namespace Int8ArrayBuilder {
        // Signal signatures
        interface SignalSignatures extends ArrayBuilder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class Int8ArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<Int8ArrayBuilder>;

        // Constructors

        constructor(properties?: Partial<Int8ArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Int8ArrayBuilder;

        // Signals

        connect<K extends keyof Int8ArrayBuilder.SignalSignatures>(
            signal: K,
            callback: Int8ArrayBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Int8ArrayBuilder.SignalSignatures>(
            signal: K,
            callback: Int8ArrayBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof Int8ArrayBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<Int8ArrayBuilder.SignalSignatures[K]>
        ): void;

        // Methods

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

    namespace Int8DataType {
        // Signal signatures
        interface SignalSignatures extends IntegerDataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends IntegerDataType.ConstructorProps {}
    }

    class Int8DataType extends IntegerDataType {
        static $gtype: GObject.GType<Int8DataType>;

        // Constructors

        constructor(properties?: Partial<Int8DataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Int8DataType;

        // Signals

        connect<K extends keyof Int8DataType.SignalSignatures>(
            signal: K,
            callback: Int8DataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Int8DataType.SignalSignatures>(
            signal: K,
            callback: Int8DataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof Int8DataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<Int8DataType.SignalSignatures[K]>
        ): void;
    }

    namespace Int8Scalar {
        // Signal signatures
        interface SignalSignatures extends Scalar.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class Int8Scalar extends Scalar {
        static $gtype: GObject.GType<Int8Scalar>;

        // Constructors

        constructor(properties?: Partial<Int8Scalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): Int8Scalar;

        // Signals

        connect<K extends keyof Int8Scalar.SignalSignatures>(
            signal: K,
            callback: Int8Scalar.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Int8Scalar.SignalSignatures>(
            signal: K,
            callback: Int8Scalar.SignalSignatures[K],
        ): number;
        emit<K extends keyof Int8Scalar.SignalSignatures>(
            signal: K,
            ...args: Parameters<Int8Scalar.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(): number;
    }

    namespace IntArrayBuilder {
        // Signal signatures
        interface SignalSignatures extends ArrayBuilder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class IntArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<IntArrayBuilder>;

        // Constructors

        constructor(properties?: Partial<IntArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): IntArrayBuilder;

        // Signals

        connect<K extends keyof IntArrayBuilder.SignalSignatures>(
            signal: K,
            callback: IntArrayBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof IntArrayBuilder.SignalSignatures>(
            signal: K,
            callback: IntArrayBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof IntArrayBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<IntArrayBuilder.SignalSignatures[K]>
        ): void;

        // Methods

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

    namespace IntegerDataType {
        // Signal signatures
        interface SignalSignatures extends NumericDataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends NumericDataType.ConstructorProps {}
    }

    abstract class IntegerDataType extends NumericDataType {
        static $gtype: GObject.GType<IntegerDataType>;

        // Constructors

        constructor(properties?: Partial<IntegerDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof IntegerDataType.SignalSignatures>(
            signal: K,
            callback: IntegerDataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof IntegerDataType.SignalSignatures>(
            signal: K,
            callback: IntegerDataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof IntegerDataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<IntegerDataType.SignalSignatures[K]>
        ): void;

        // Methods

        is_signed(): boolean;
    }

    namespace IntervalDataType {
        // Signal signatures
        interface SignalSignatures extends TemporalDataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends TemporalDataType.ConstructorProps {}
    }

    abstract class IntervalDataType extends TemporalDataType {
        static $gtype: GObject.GType<IntervalDataType>;

        // Constructors

        constructor(properties?: Partial<IntervalDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof IntervalDataType.SignalSignatures>(
            signal: K,
            callback: IntervalDataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof IntervalDataType.SignalSignatures>(
            signal: K,
            callback: IntervalDataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof IntervalDataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<IntervalDataType.SignalSignatures[K]>
        ): void;

        // Methods

        get_interval_type(): IntervalType;
    }

    namespace JSONReadOptions {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

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

        // Properties

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

        // Constructors

        constructor(properties?: Partial<JSONReadOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): JSONReadOptions;

        // Signals

        connect<K extends keyof JSONReadOptions.SignalSignatures>(
            signal: K,
            callback: JSONReadOptions.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof JSONReadOptions.SignalSignatures>(
            signal: K,
            callback: JSONReadOptions.SignalSignatures[K],
        ): number;
        emit<K extends keyof JSONReadOptions.SignalSignatures>(
            signal: K,
            ...args: Parameters<JSONReadOptions.SignalSignatures[K]>
        ): void;
    }

    namespace JSONReader {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            input: InputStream;
            json_table_reader: any;
            jsonTableReader: any;
        }
    }

    class JSONReader extends GObject.Object {
        static $gtype: GObject.GType<JSONReader>;

        // Properties

        get input(): InputStream;
        set json_table_reader(val: any);
        set jsonTableReader(val: any);

        // Constructors

        constructor(properties?: Partial<JSONReader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](input: InputStream, options?: JSONReadOptions | null): JSONReader;

        // Signals

        connect<K extends keyof JSONReader.SignalSignatures>(
            signal: K,
            callback: JSONReader.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof JSONReader.SignalSignatures>(
            signal: K,
            callback: JSONReader.SignalSignatures[K],
        ): number;
        emit<K extends keyof JSONReader.SignalSignatures>(
            signal: K,
            ...args: Parameters<JSONReader.SignalSignatures[K]>
        ): void;

        // Methods

        read(): Table | null;
    }

    namespace LargeBinaryArray {
        // Signal signatures
        interface SignalSignatures extends Array.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Array.ConstructorProps {}
    }

    class LargeBinaryArray extends Array {
        static $gtype: GObject.GType<LargeBinaryArray>;

        // Constructors

        constructor(properties?: Partial<LargeBinaryArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            length: number,
            value_offsets: Buffer,
            value_data: Buffer,
            null_bitmap: Buffer | null,
            n_nulls: number,
        ): LargeBinaryArray;

        // Signals

        connect<K extends keyof LargeBinaryArray.SignalSignatures>(
            signal: K,
            callback: LargeBinaryArray.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof LargeBinaryArray.SignalSignatures>(
            signal: K,
            callback: LargeBinaryArray.SignalSignatures[K],
        ): number;
        emit<K extends keyof LargeBinaryArray.SignalSignatures>(
            signal: K,
            ...args: Parameters<LargeBinaryArray.SignalSignatures[K]>
        ): void;

        // Methods

        get_buffer(): Buffer;
        get_data_buffer(): Buffer;
        get_offsets_buffer(): Buffer;
        get_value(i: number): GLib.Bytes;
    }

    namespace LargeBinaryArrayBuilder {
        // Signal signatures
        interface SignalSignatures extends ArrayBuilder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class LargeBinaryArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<LargeBinaryArrayBuilder>;

        // Constructors

        constructor(properties?: Partial<LargeBinaryArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): LargeBinaryArrayBuilder;

        // Signals

        connect<K extends keyof LargeBinaryArrayBuilder.SignalSignatures>(
            signal: K,
            callback: LargeBinaryArrayBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof LargeBinaryArrayBuilder.SignalSignatures>(
            signal: K,
            callback: LargeBinaryArrayBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof LargeBinaryArrayBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<LargeBinaryArrayBuilder.SignalSignatures[K]>
        ): void;

        // Methods

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

    namespace LargeBinaryDataType {
        // Signal signatures
        interface SignalSignatures extends DataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends DataType.ConstructorProps {}
    }

    class LargeBinaryDataType extends DataType {
        static $gtype: GObject.GType<LargeBinaryDataType>;

        // Constructors

        constructor(properties?: Partial<LargeBinaryDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): LargeBinaryDataType;

        // Signals

        connect<K extends keyof LargeBinaryDataType.SignalSignatures>(
            signal: K,
            callback: LargeBinaryDataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof LargeBinaryDataType.SignalSignatures>(
            signal: K,
            callback: LargeBinaryDataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof LargeBinaryDataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<LargeBinaryDataType.SignalSignatures[K]>
        ): void;
    }

    namespace LargeBinaryScalar {
        // Signal signatures
        interface SignalSignatures extends BaseBinaryScalar.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends BaseBinaryScalar.ConstructorProps {}
    }

    class LargeBinaryScalar extends BaseBinaryScalar {
        static $gtype: GObject.GType<LargeBinaryScalar>;

        // Constructors

        constructor(properties?: Partial<LargeBinaryScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: Buffer): LargeBinaryScalar;

        // Signals

        connect<K extends keyof LargeBinaryScalar.SignalSignatures>(
            signal: K,
            callback: LargeBinaryScalar.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof LargeBinaryScalar.SignalSignatures>(
            signal: K,
            callback: LargeBinaryScalar.SignalSignatures[K],
        ): number;
        emit<K extends keyof LargeBinaryScalar.SignalSignatures>(
            signal: K,
            ...args: Parameters<LargeBinaryScalar.SignalSignatures[K]>
        ): void;
    }

    namespace LargeListArray {
        // Signal signatures
        interface SignalSignatures extends Array.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Array.ConstructorProps {
            raw_values: Array;
            rawValues: Array;
        }
    }

    class LargeListArray extends Array {
        static $gtype: GObject.GType<LargeListArray>;

        // Properties

        get raw_values(): Array;
        get rawValues(): Array;

        // Constructors

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

        // Signals

        connect<K extends keyof LargeListArray.SignalSignatures>(
            signal: K,
            callback: LargeListArray.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof LargeListArray.SignalSignatures>(
            signal: K,
            callback: LargeListArray.SignalSignatures[K],
        ): number;
        emit<K extends keyof LargeListArray.SignalSignatures>(
            signal: K,
            ...args: Parameters<LargeListArray.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(i: number): Array;
        get_value_length(i: number): number;
        get_value_offset(i: number): number;
        get_value_offsets(): number[];
        get_value_type(): DataType;
        // Conflicted with Arrow.Array.get_value_type
        get_value_type(...args: never[]): any;
        get_values(): Array;
    }

    namespace LargeListArrayBuilder {
        // Signal signatures
        interface SignalSignatures extends ArrayBuilder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class LargeListArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<LargeListArrayBuilder>;

        // Constructors

        constructor(properties?: Partial<LargeListArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type: LargeListDataType): LargeListArrayBuilder;

        // Signals

        connect<K extends keyof LargeListArrayBuilder.SignalSignatures>(
            signal: K,
            callback: LargeListArrayBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof LargeListArrayBuilder.SignalSignatures>(
            signal: K,
            callback: LargeListArrayBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof LargeListArrayBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<LargeListArrayBuilder.SignalSignatures[K]>
        ): void;

        // Methods

        append_value(): boolean;
        get_value_builder(): ArrayBuilder;
    }

    namespace LargeListDataType {
        // Signal signatures
        interface SignalSignatures extends DataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends DataType.ConstructorProps {}
    }

    class LargeListDataType extends DataType {
        static $gtype: GObject.GType<LargeListDataType>;

        // Constructors

        constructor(properties?: Partial<LargeListDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](field: Field): LargeListDataType;

        // Signals

        connect<K extends keyof LargeListDataType.SignalSignatures>(
            signal: K,
            callback: LargeListDataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof LargeListDataType.SignalSignatures>(
            signal: K,
            callback: LargeListDataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof LargeListDataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<LargeListDataType.SignalSignatures[K]>
        ): void;

        // Methods

        get_field(): Field;
    }

    namespace LargeListScalar {
        // Signal signatures
        interface SignalSignatures extends BaseListScalar.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends BaseListScalar.ConstructorProps {}
    }

    class LargeListScalar extends BaseListScalar {
        static $gtype: GObject.GType<LargeListScalar>;

        // Constructors

        constructor(properties?: Partial<LargeListScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: LargeListArray): LargeListScalar;

        // Signals

        connect<K extends keyof LargeListScalar.SignalSignatures>(
            signal: K,
            callback: LargeListScalar.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof LargeListScalar.SignalSignatures>(
            signal: K,
            callback: LargeListScalar.SignalSignatures[K],
        ): number;
        emit<K extends keyof LargeListScalar.SignalSignatures>(
            signal: K,
            ...args: Parameters<LargeListScalar.SignalSignatures[K]>
        ): void;
    }

    namespace LargeStringArray {
        // Signal signatures
        interface SignalSignatures extends LargeBinaryArray.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends LargeBinaryArray.ConstructorProps {}
    }

    class LargeStringArray extends LargeBinaryArray {
        static $gtype: GObject.GType<LargeStringArray>;

        // Constructors

        constructor(properties?: Partial<LargeStringArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            length: number,
            value_offsets: Buffer,
            value_data: Buffer,
            null_bitmap: Buffer | null,
            n_nulls: number,
        ): LargeStringArray;

        // Signals

        connect<K extends keyof LargeStringArray.SignalSignatures>(
            signal: K,
            callback: LargeStringArray.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof LargeStringArray.SignalSignatures>(
            signal: K,
            callback: LargeStringArray.SignalSignatures[K],
        ): number;
        emit<K extends keyof LargeStringArray.SignalSignatures>(
            signal: K,
            ...args: Parameters<LargeStringArray.SignalSignatures[K]>
        ): void;

        // Methods

        get_string(i: number): string;
    }

    namespace LargeStringArrayBuilder {
        // Signal signatures
        interface SignalSignatures extends LargeBinaryArrayBuilder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends LargeBinaryArrayBuilder.ConstructorProps {}
    }

    class LargeStringArrayBuilder extends LargeBinaryArrayBuilder {
        static $gtype: GObject.GType<LargeStringArrayBuilder>;

        // Constructors

        constructor(properties?: Partial<LargeStringArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): LargeStringArrayBuilder;

        // Signals

        connect<K extends keyof LargeStringArrayBuilder.SignalSignatures>(
            signal: K,
            callback: LargeStringArrayBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof LargeStringArrayBuilder.SignalSignatures>(
            signal: K,
            callback: LargeStringArrayBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof LargeStringArrayBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<LargeStringArrayBuilder.SignalSignatures[K]>
        ): void;

        // Methods

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

    namespace LargeStringDataType {
        // Signal signatures
        interface SignalSignatures extends DataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends DataType.ConstructorProps {}
    }

    class LargeStringDataType extends DataType {
        static $gtype: GObject.GType<LargeStringDataType>;

        // Constructors

        constructor(properties?: Partial<LargeStringDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): LargeStringDataType;

        // Signals

        connect<K extends keyof LargeStringDataType.SignalSignatures>(
            signal: K,
            callback: LargeStringDataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof LargeStringDataType.SignalSignatures>(
            signal: K,
            callback: LargeStringDataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof LargeStringDataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<LargeStringDataType.SignalSignatures[K]>
        ): void;
    }

    namespace LargeStringScalar {
        // Signal signatures
        interface SignalSignatures extends BaseBinaryScalar.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends BaseBinaryScalar.ConstructorProps {}
    }

    class LargeStringScalar extends BaseBinaryScalar {
        static $gtype: GObject.GType<LargeStringScalar>;

        // Constructors

        constructor(properties?: Partial<LargeStringScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: Buffer): LargeStringScalar;

        // Signals

        connect<K extends keyof LargeStringScalar.SignalSignatures>(
            signal: K,
            callback: LargeStringScalar.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof LargeStringScalar.SignalSignatures>(
            signal: K,
            callback: LargeStringScalar.SignalSignatures[K],
        ): number;
        emit<K extends keyof LargeStringScalar.SignalSignatures>(
            signal: K,
            ...args: Parameters<LargeStringScalar.SignalSignatures[K]>
        ): void;
    }

    namespace ListArray {
        // Signal signatures
        interface SignalSignatures extends Array.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Array.ConstructorProps {
            raw_values: Array;
            rawValues: Array;
        }
    }

    class ListArray extends Array {
        static $gtype: GObject.GType<ListArray>;

        // Properties

        get raw_values(): Array;
        get rawValues(): Array;

        // Constructors

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

        // Signals

        connect<K extends keyof ListArray.SignalSignatures>(signal: K, callback: ListArray.SignalSignatures[K]): number;
        connect_after<K extends keyof ListArray.SignalSignatures>(
            signal: K,
            callback: ListArray.SignalSignatures[K],
        ): number;
        emit<K extends keyof ListArray.SignalSignatures>(
            signal: K,
            ...args: Parameters<ListArray.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(i: number): Array;
        get_value_length(i: number): number;
        get_value_offset(i: number): number;
        get_value_offsets(): number[];
        get_value_type(): DataType;
        // Conflicted with Arrow.Array.get_value_type
        get_value_type(...args: never[]): any;
        get_values(): Array;
    }

    namespace ListArrayBuilder {
        // Signal signatures
        interface SignalSignatures extends ArrayBuilder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class ListArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<ListArrayBuilder>;

        // Constructors

        constructor(properties?: Partial<ListArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type: ListDataType): ListArrayBuilder;

        // Signals

        connect<K extends keyof ListArrayBuilder.SignalSignatures>(
            signal: K,
            callback: ListArrayBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ListArrayBuilder.SignalSignatures>(
            signal: K,
            callback: ListArrayBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof ListArrayBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<ListArrayBuilder.SignalSignatures[K]>
        ): void;

        // Methods

        append(): boolean;
        append_value(): boolean;
        get_value_builder(): ArrayBuilder;
    }

    namespace ListDataType {
        // Signal signatures
        interface SignalSignatures extends DataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends DataType.ConstructorProps {}
    }

    class ListDataType extends DataType {
        static $gtype: GObject.GType<ListDataType>;

        // Constructors

        constructor(properties?: Partial<ListDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](field: Field): ListDataType;

        // Signals

        connect<K extends keyof ListDataType.SignalSignatures>(
            signal: K,
            callback: ListDataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ListDataType.SignalSignatures>(
            signal: K,
            callback: ListDataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof ListDataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<ListDataType.SignalSignatures[K]>
        ): void;

        // Methods

        get_field(): Field;
        get_value_field(): Field;
    }

    namespace ListScalar {
        // Signal signatures
        interface SignalSignatures extends BaseListScalar.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends BaseListScalar.ConstructorProps {}
    }

    class ListScalar extends BaseListScalar {
        static $gtype: GObject.GType<ListScalar>;

        // Constructors

        constructor(properties?: Partial<ListScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: ListArray): ListScalar;

        // Signals

        connect<K extends keyof ListScalar.SignalSignatures>(
            signal: K,
            callback: ListScalar.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ListScalar.SignalSignatures>(
            signal: K,
            callback: ListScalar.SignalSignatures[K],
        ): number;
        emit<K extends keyof ListScalar.SignalSignatures>(
            signal: K,
            ...args: Parameters<ListScalar.SignalSignatures[K]>
        ): void;
    }

    namespace LiteralExpression {
        // Signal signatures
        interface SignalSignatures extends Expression.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Expression.ConstructorProps {}
    }

    class LiteralExpression extends Expression {
        static $gtype: GObject.GType<LiteralExpression>;

        // Constructors

        constructor(properties?: Partial<LiteralExpression.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](datum: Datum): LiteralExpression;

        // Signals

        connect<K extends keyof LiteralExpression.SignalSignatures>(
            signal: K,
            callback: LiteralExpression.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof LiteralExpression.SignalSignatures>(
            signal: K,
            callback: LiteralExpression.SignalSignatures[K],
        ): number;
        emit<K extends keyof LiteralExpression.SignalSignatures>(
            signal: K,
            ...args: Parameters<LiteralExpression.SignalSignatures[K]>
        ): void;
    }

    namespace LocalFileSystem {
        // Signal signatures
        interface SignalSignatures extends FileSystem.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends FileSystem.ConstructorProps {}
    }

    class LocalFileSystem extends FileSystem {
        static $gtype: GObject.GType<LocalFileSystem>;

        // Constructors

        constructor(properties?: Partial<LocalFileSystem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](options?: LocalFileSystemOptions | null): LocalFileSystem;

        // Signals

        connect<K extends keyof LocalFileSystem.SignalSignatures>(
            signal: K,
            callback: LocalFileSystem.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof LocalFileSystem.SignalSignatures>(
            signal: K,
            callback: LocalFileSystem.SignalSignatures[K],
        ): number;
        emit<K extends keyof LocalFileSystem.SignalSignatures>(
            signal: K,
            ...args: Parameters<LocalFileSystem.SignalSignatures[K]>
        ): void;
    }

    namespace LocalFileSystemOptions {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            use_mmap: boolean;
            useMmap: boolean;
        }
    }

    class LocalFileSystemOptions extends GObject.Object {
        static $gtype: GObject.GType<LocalFileSystemOptions>;

        // Properties

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

        // Constructors

        constructor(properties?: Partial<LocalFileSystemOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): LocalFileSystemOptions;

        // Signals

        connect<K extends keyof LocalFileSystemOptions.SignalSignatures>(
            signal: K,
            callback: LocalFileSystemOptions.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof LocalFileSystemOptions.SignalSignatures>(
            signal: K,
            callback: LocalFileSystemOptions.SignalSignatures[K],
        ): number;
        emit<K extends keyof LocalFileSystemOptions.SignalSignatures>(
            signal: K,
            ...args: Parameters<LocalFileSystemOptions.SignalSignatures[K]>
        ): void;
    }

    namespace MapArray {
        // Signal signatures
        interface SignalSignatures extends ListArray.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ListArray.ConstructorProps {
            items: Array;
            keys: Array;
            offsets: Array;
        }
    }

    class MapArray extends ListArray {
        static $gtype: GObject.GType<MapArray>;

        // Properties

        get items(): Array;
        get keys(): Array;
        get offsets(): Array;

        // Constructors

        constructor(properties?: Partial<MapArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](offsets: Array, keys: Array, items: Array): MapArray;
        // Conflicted with Arrow.ListArray.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof MapArray.SignalSignatures>(signal: K, callback: MapArray.SignalSignatures[K]): number;
        connect_after<K extends keyof MapArray.SignalSignatures>(
            signal: K,
            callback: MapArray.SignalSignatures[K],
        ): number;
        emit<K extends keyof MapArray.SignalSignatures>(
            signal: K,
            ...args: Parameters<MapArray.SignalSignatures[K]>
        ): void;

        // Methods

        get_items(): Array;
        get_keys(): Array;
    }

    namespace MapArrayBuilder {
        // Signal signatures
        interface SignalSignatures extends ArrayBuilder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class MapArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<MapArrayBuilder>;

        // Constructors

        constructor(properties?: Partial<MapArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type: MapDataType): MapArrayBuilder;

        // Signals

        connect<K extends keyof MapArrayBuilder.SignalSignatures>(
            signal: K,
            callback: MapArrayBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof MapArrayBuilder.SignalSignatures>(
            signal: K,
            callback: MapArrayBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof MapArrayBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<MapArrayBuilder.SignalSignatures[K]>
        ): void;

        // Methods

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

    namespace MapDataType {
        // Signal signatures
        interface SignalSignatures extends ListDataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ListDataType.ConstructorProps {}
    }

    class MapDataType extends ListDataType {
        static $gtype: GObject.GType<MapDataType>;

        // Constructors

        constructor(properties?: Partial<MapDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](key_type: DataType, item_type: DataType): MapDataType;
        // Conflicted with Arrow.ListDataType.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof MapDataType.SignalSignatures>(
            signal: K,
            callback: MapDataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof MapDataType.SignalSignatures>(
            signal: K,
            callback: MapDataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof MapDataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<MapDataType.SignalSignatures[K]>
        ): void;

        // Methods

        get_item_type(): DataType;
        get_key_type(): DataType;
    }

    namespace MapScalar {
        // Signal signatures
        interface SignalSignatures extends BaseListScalar.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends BaseListScalar.ConstructorProps {}
    }

    class MapScalar extends BaseListScalar {
        static $gtype: GObject.GType<MapScalar>;

        // Constructors

        constructor(properties?: Partial<MapScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: StructArray): MapScalar;

        // Signals

        connect<K extends keyof MapScalar.SignalSignatures>(signal: K, callback: MapScalar.SignalSignatures[K]): number;
        connect_after<K extends keyof MapScalar.SignalSignatures>(
            signal: K,
            callback: MapScalar.SignalSignatures[K],
        ): number;
        emit<K extends keyof MapScalar.SignalSignatures>(
            signal: K,
            ...args: Parameters<MapScalar.SignalSignatures[K]>
        ): void;
    }

    namespace MatchSubstringOptions {
        // Signal signatures
        interface SignalSignatures extends FunctionOptions.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends FunctionOptions.ConstructorProps {
            ignore_case: boolean;
            ignoreCase: boolean;
            pattern: string;
        }
    }

    class MatchSubstringOptions extends FunctionOptions {
        static $gtype: GObject.GType<MatchSubstringOptions>;

        // Properties

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

        // Constructors

        constructor(properties?: Partial<MatchSubstringOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MatchSubstringOptions;

        // Signals

        connect<K extends keyof MatchSubstringOptions.SignalSignatures>(
            signal: K,
            callback: MatchSubstringOptions.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof MatchSubstringOptions.SignalSignatures>(
            signal: K,
            callback: MatchSubstringOptions.SignalSignatures[K],
        ): number;
        emit<K extends keyof MatchSubstringOptions.SignalSignatures>(
            signal: K,
            ...args: Parameters<MatchSubstringOptions.SignalSignatures[K]>
        ): void;
    }

    namespace MemoryMappedInputStream {
        // Signal signatures
        interface SignalSignatures extends SeekableInputStream.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps
            extends SeekableInputStream.ConstructorProps,
                File.ConstructorProps,
                Readable.ConstructorProps {}
    }

    class MemoryMappedInputStream extends SeekableInputStream implements File, Readable {
        static $gtype: GObject.GType<MemoryMappedInputStream>;

        // Constructors

        constructor(properties?: Partial<MemoryMappedInputStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](path: string): MemoryMappedInputStream;

        // Signals

        connect<K extends keyof MemoryMappedInputStream.SignalSignatures>(
            signal: K,
            callback: MemoryMappedInputStream.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof MemoryMappedInputStream.SignalSignatures>(
            signal: K,
            callback: MemoryMappedInputStream.SignalSignatures[K],
        ): number;
        emit<K extends keyof MemoryMappedInputStream.SignalSignatures>(
            signal: K,
            ...args: Parameters<MemoryMappedInputStream.SignalSignatures[K]>
        ): void;

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
            flags: GObject.BindingFlags | null,
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
            flags: GObject.BindingFlags | null,
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
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
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
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
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
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace MemoryPool {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            memory_pool: any;
            memoryPool: any;
        }
    }

    class MemoryPool extends GObject.Object {
        static $gtype: GObject.GType<MemoryPool>;

        // Properties

        set memory_pool(val: any);
        set memoryPool(val: any);

        // Constructors

        constructor(properties?: Partial<MemoryPool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof MemoryPool.SignalSignatures>(
            signal: K,
            callback: MemoryPool.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof MemoryPool.SignalSignatures>(
            signal: K,
            callback: MemoryPool.SignalSignatures[K],
        ): number;
        emit<K extends keyof MemoryPool.SignalSignatures>(
            signal: K,
            ...args: Parameters<MemoryPool.SignalSignatures[K]>
        ): void;

        // Static methods

        static ['default'](): MemoryPool;

        // Methods

        get_backend_name(): string;
        get_bytes_allocated(): number;
        /**
         * Return peak memory allocation in this memory pool.
         * @returns Maximum bytes allocated. If not known (or not implemented),   returns -1.
         */
        get_max_memory(): number;
    }

    namespace MockFileSystem {
        // Signal signatures
        interface SignalSignatures extends FileSystem.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends FileSystem.ConstructorProps {}
    }

    class MockFileSystem extends FileSystem {
        static $gtype: GObject.GType<MockFileSystem>;

        // Constructors

        constructor(properties?: Partial<MockFileSystem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof MockFileSystem.SignalSignatures>(
            signal: K,
            callback: MockFileSystem.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof MockFileSystem.SignalSignatures>(
            signal: K,
            callback: MockFileSystem.SignalSignatures[K],
        ): number;
        emit<K extends keyof MockFileSystem.SignalSignatures>(
            signal: K,
            ...args: Parameters<MockFileSystem.SignalSignatures[K]>
        ): void;
    }

    namespace MonthDayNano {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            day: number;
            month: number;
            nanosecond: number;
        }
    }

    class MonthDayNano extends GObject.Object {
        static $gtype: GObject.GType<MonthDayNano>;

        // Properties

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

        // Constructors

        constructor(properties?: Partial<MonthDayNano.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](month: number, day: number, nanosecond: number): MonthDayNano;

        // Signals

        connect<K extends keyof MonthDayNano.SignalSignatures>(
            signal: K,
            callback: MonthDayNano.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof MonthDayNano.SignalSignatures>(
            signal: K,
            callback: MonthDayNano.SignalSignatures[K],
        ): number;
        emit<K extends keyof MonthDayNano.SignalSignatures>(
            signal: K,
            ...args: Parameters<MonthDayNano.SignalSignatures[K]>
        ): void;

        // Methods

        equal(other_month_nano_day: MonthDayNano): boolean;
    }

    namespace MonthDayNanoIntervalArray {
        // Signal signatures
        interface SignalSignatures extends PrimitiveArray.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends PrimitiveArray.ConstructorProps {}
    }

    class MonthDayNanoIntervalArray extends PrimitiveArray {
        static $gtype: GObject.GType<MonthDayNanoIntervalArray>;

        // Constructors

        constructor(properties?: Partial<MonthDayNanoIntervalArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            length: number,
            data: Buffer,
            null_bitmap: Buffer | null,
            n_nulls: number,
        ): MonthDayNanoIntervalArray;

        // Signals

        connect<K extends keyof MonthDayNanoIntervalArray.SignalSignatures>(
            signal: K,
            callback: MonthDayNanoIntervalArray.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof MonthDayNanoIntervalArray.SignalSignatures>(
            signal: K,
            callback: MonthDayNanoIntervalArray.SignalSignatures[K],
        ): number;
        emit<K extends keyof MonthDayNanoIntervalArray.SignalSignatures>(
            signal: K,
            ...args: Parameters<MonthDayNanoIntervalArray.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(i: number): MonthDayNano;
        get_values(): MonthDayNano[] | null;
    }

    namespace MonthDayNanoIntervalArrayBuilder {
        // Signal signatures
        interface SignalSignatures extends ArrayBuilder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class MonthDayNanoIntervalArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<MonthDayNanoIntervalArrayBuilder>;

        // Constructors

        constructor(properties?: Partial<MonthDayNanoIntervalArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MonthDayNanoIntervalArrayBuilder;

        // Signals

        connect<K extends keyof MonthDayNanoIntervalArrayBuilder.SignalSignatures>(
            signal: K,
            callback: MonthDayNanoIntervalArrayBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof MonthDayNanoIntervalArrayBuilder.SignalSignatures>(
            signal: K,
            callback: MonthDayNanoIntervalArrayBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof MonthDayNanoIntervalArrayBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<MonthDayNanoIntervalArrayBuilder.SignalSignatures[K]>
        ): void;

        // Methods

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

    namespace MonthDayNanoIntervalDataType {
        // Signal signatures
        interface SignalSignatures extends IntervalDataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends IntervalDataType.ConstructorProps {}
    }

    class MonthDayNanoIntervalDataType extends IntervalDataType {
        static $gtype: GObject.GType<MonthDayNanoIntervalDataType>;

        // Constructors

        constructor(properties?: Partial<MonthDayNanoIntervalDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MonthDayNanoIntervalDataType;

        // Signals

        connect<K extends keyof MonthDayNanoIntervalDataType.SignalSignatures>(
            signal: K,
            callback: MonthDayNanoIntervalDataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof MonthDayNanoIntervalDataType.SignalSignatures>(
            signal: K,
            callback: MonthDayNanoIntervalDataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof MonthDayNanoIntervalDataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<MonthDayNanoIntervalDataType.SignalSignatures[K]>
        ): void;
    }

    namespace MonthDayNanoIntervalScalar {
        // Signal signatures
        interface SignalSignatures extends Scalar.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class MonthDayNanoIntervalScalar extends Scalar {
        static $gtype: GObject.GType<MonthDayNanoIntervalScalar>;

        // Constructors

        constructor(properties?: Partial<MonthDayNanoIntervalScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: MonthDayNano): MonthDayNanoIntervalScalar;

        // Signals

        connect<K extends keyof MonthDayNanoIntervalScalar.SignalSignatures>(
            signal: K,
            callback: MonthDayNanoIntervalScalar.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof MonthDayNanoIntervalScalar.SignalSignatures>(
            signal: K,
            callback: MonthDayNanoIntervalScalar.SignalSignatures[K],
        ): number;
        emit<K extends keyof MonthDayNanoIntervalScalar.SignalSignatures>(
            signal: K,
            ...args: Parameters<MonthDayNanoIntervalScalar.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(): MonthDayNano;
    }

    namespace MonthIntervalArray {
        // Signal signatures
        interface SignalSignatures extends NumericArray.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends NumericArray.ConstructorProps {}
    }

    class MonthIntervalArray extends NumericArray {
        static $gtype: GObject.GType<MonthIntervalArray>;

        // Constructors

        constructor(properties?: Partial<MonthIntervalArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): MonthIntervalArray;

        // Signals

        connect<K extends keyof MonthIntervalArray.SignalSignatures>(
            signal: K,
            callback: MonthIntervalArray.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof MonthIntervalArray.SignalSignatures>(
            signal: K,
            callback: MonthIntervalArray.SignalSignatures[K],
        ): number;
        emit<K extends keyof MonthIntervalArray.SignalSignatures>(
            signal: K,
            ...args: Parameters<MonthIntervalArray.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(i: number): number;
        get_values(): number[];
    }

    namespace MonthIntervalArrayBuilder {
        // Signal signatures
        interface SignalSignatures extends ArrayBuilder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class MonthIntervalArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<MonthIntervalArrayBuilder>;

        // Constructors

        constructor(properties?: Partial<MonthIntervalArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MonthIntervalArrayBuilder;

        // Signals

        connect<K extends keyof MonthIntervalArrayBuilder.SignalSignatures>(
            signal: K,
            callback: MonthIntervalArrayBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof MonthIntervalArrayBuilder.SignalSignatures>(
            signal: K,
            callback: MonthIntervalArrayBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof MonthIntervalArrayBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<MonthIntervalArrayBuilder.SignalSignatures[K]>
        ): void;

        // Methods

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

    namespace MonthIntervalDataType {
        // Signal signatures
        interface SignalSignatures extends IntervalDataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends IntervalDataType.ConstructorProps {}
    }

    class MonthIntervalDataType extends IntervalDataType {
        static $gtype: GObject.GType<MonthIntervalDataType>;

        // Constructors

        constructor(properties?: Partial<MonthIntervalDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): MonthIntervalDataType;

        // Signals

        connect<K extends keyof MonthIntervalDataType.SignalSignatures>(
            signal: K,
            callback: MonthIntervalDataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof MonthIntervalDataType.SignalSignatures>(
            signal: K,
            callback: MonthIntervalDataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof MonthIntervalDataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<MonthIntervalDataType.SignalSignatures[K]>
        ): void;
    }

    namespace MonthIntervalScalar {
        // Signal signatures
        interface SignalSignatures extends Scalar.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class MonthIntervalScalar extends Scalar {
        static $gtype: GObject.GType<MonthIntervalScalar>;

        // Constructors

        constructor(properties?: Partial<MonthIntervalScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): MonthIntervalScalar;

        // Signals

        connect<K extends keyof MonthIntervalScalar.SignalSignatures>(
            signal: K,
            callback: MonthIntervalScalar.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof MonthIntervalScalar.SignalSignatures>(
            signal: K,
            callback: MonthIntervalScalar.SignalSignatures[K],
        ): number;
        emit<K extends keyof MonthIntervalScalar.SignalSignatures>(
            signal: K,
            ...args: Parameters<MonthIntervalScalar.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(): number;
    }

    namespace MutableBuffer {
        // Signal signatures
        interface SignalSignatures extends Buffer.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Buffer.ConstructorProps {}
    }

    class MutableBuffer extends Buffer {
        static $gtype: GObject.GType<MutableBuffer>;

        // Constructors

        constructor(properties?: Partial<MutableBuffer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data: Uint8Array | string): MutableBuffer;

        static new_bytes(data: GLib.Bytes | Uint8Array): MutableBuffer;

        // Signals

        connect<K extends keyof MutableBuffer.SignalSignatures>(
            signal: K,
            callback: MutableBuffer.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof MutableBuffer.SignalSignatures>(
            signal: K,
            callback: MutableBuffer.SignalSignatures[K],
        ): number;
        emit<K extends keyof MutableBuffer.SignalSignatures>(
            signal: K,
            ...args: Parameters<MutableBuffer.SignalSignatures[K]>
        ): void;

        // Methods

        set_data(offset: number, data: Uint8Array | string): boolean;
        // Conflicted with GObject.Object.set_data
        set_data(...args: never[]): any;
        slice(offset: number, size: number): MutableBuffer;
    }

    namespace NullArray {
        // Signal signatures
        interface SignalSignatures extends Array.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Array.ConstructorProps {}
    }

    class NullArray extends Array {
        static $gtype: GObject.GType<NullArray>;

        // Constructors

        constructor(properties?: Partial<NullArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](length: number): NullArray;

        // Signals

        connect<K extends keyof NullArray.SignalSignatures>(signal: K, callback: NullArray.SignalSignatures[K]): number;
        connect_after<K extends keyof NullArray.SignalSignatures>(
            signal: K,
            callback: NullArray.SignalSignatures[K],
        ): number;
        emit<K extends keyof NullArray.SignalSignatures>(
            signal: K,
            ...args: Parameters<NullArray.SignalSignatures[K]>
        ): void;
    }

    namespace NullArrayBuilder {
        // Signal signatures
        interface SignalSignatures extends ArrayBuilder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class NullArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<NullArrayBuilder>;

        // Constructors

        constructor(properties?: Partial<NullArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): NullArrayBuilder;

        // Signals

        connect<K extends keyof NullArrayBuilder.SignalSignatures>(
            signal: K,
            callback: NullArrayBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof NullArrayBuilder.SignalSignatures>(
            signal: K,
            callback: NullArrayBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof NullArrayBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<NullArrayBuilder.SignalSignatures[K]>
        ): void;
    }

    namespace NullDataType {
        // Signal signatures
        interface SignalSignatures extends DataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends DataType.ConstructorProps {}
    }

    class NullDataType extends DataType {
        static $gtype: GObject.GType<NullDataType>;

        // Constructors

        constructor(properties?: Partial<NullDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): NullDataType;

        // Signals

        connect<K extends keyof NullDataType.SignalSignatures>(
            signal: K,
            callback: NullDataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof NullDataType.SignalSignatures>(
            signal: K,
            callback: NullDataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof NullDataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<NullDataType.SignalSignatures[K]>
        ): void;
    }

    namespace NullScalar {
        // Signal signatures
        interface SignalSignatures extends Scalar.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class NullScalar extends Scalar {
        static $gtype: GObject.GType<NullScalar>;

        // Constructors

        constructor(properties?: Partial<NullScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): NullScalar;

        // Signals

        connect<K extends keyof NullScalar.SignalSignatures>(
            signal: K,
            callback: NullScalar.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof NullScalar.SignalSignatures>(
            signal: K,
            callback: NullScalar.SignalSignatures[K],
        ): number;
        emit<K extends keyof NullScalar.SignalSignatures>(
            signal: K,
            ...args: Parameters<NullScalar.SignalSignatures[K]>
        ): void;
    }

    namespace NumericArray {
        // Signal signatures
        interface SignalSignatures extends PrimitiveArray.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends PrimitiveArray.ConstructorProps {}
    }

    class NumericArray extends PrimitiveArray {
        static $gtype: GObject.GType<NumericArray>;

        // Constructors

        constructor(properties?: Partial<NumericArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof NumericArray.SignalSignatures>(
            signal: K,
            callback: NumericArray.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof NumericArray.SignalSignatures>(
            signal: K,
            callback: NumericArray.SignalSignatures[K],
        ): number;
        emit<K extends keyof NumericArray.SignalSignatures>(
            signal: K,
            ...args: Parameters<NumericArray.SignalSignatures[K]>
        ): void;

        // Methods

        mean(): number;
    }

    namespace NumericDataType {
        // Signal signatures
        interface SignalSignatures extends FixedWidthDataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends FixedWidthDataType.ConstructorProps {}
    }

    abstract class NumericDataType extends FixedWidthDataType {
        static $gtype: GObject.GType<NumericDataType>;

        // Constructors

        constructor(properties?: Partial<NumericDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof NumericDataType.SignalSignatures>(
            signal: K,
            callback: NumericDataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof NumericDataType.SignalSignatures>(
            signal: K,
            callback: NumericDataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof NumericDataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<NumericDataType.SignalSignatures[K]>
        ): void;
    }

    namespace ORCFileReader {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            input: SeekableInputStream;
            orc_file_reader: any;
            orcFileReader: any;
        }
    }

    class ORCFileReader extends GObject.Object {
        static $gtype: GObject.GType<ORCFileReader>;

        // Properties

        get input(): SeekableInputStream;
        set orc_file_reader(val: any);
        set orcFileReader(val: any);

        // Constructors

        constructor(properties?: Partial<ORCFileReader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](file: SeekableInputStream): ORCFileReader;

        // Signals

        connect<K extends keyof ORCFileReader.SignalSignatures>(
            signal: K,
            callback: ORCFileReader.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ORCFileReader.SignalSignatures>(
            signal: K,
            callback: ORCFileReader.SignalSignatures[K],
        ): number;
        emit<K extends keyof ORCFileReader.SignalSignatures>(
            signal: K,
            ...args: Parameters<ORCFileReader.SignalSignatures[K]>
        ): void;

        // Methods

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

    namespace OutputStream {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

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

        // Properties

        set output_stream(val: any);
        set outputStream(val: any);

        // Constructors

        constructor(properties?: Partial<OutputStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof OutputStream.SignalSignatures>(
            signal: K,
            callback: OutputStream.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof OutputStream.SignalSignatures>(
            signal: K,
            callback: OutputStream.SignalSignatures[K],
        ): number;
        emit<K extends keyof OutputStream.SignalSignatures>(
            signal: K,
            ...args: Parameters<OutputStream.SignalSignatures[K]>
        ): void;

        // Methods

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
            flags: GObject.BindingFlags | null,
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
            flags: GObject.BindingFlags | null,
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
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
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
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
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
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace PrimitiveArray {
        // Signal signatures
        interface SignalSignatures extends Array.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Array.ConstructorProps {}
    }

    class PrimitiveArray extends Array {
        static $gtype: GObject.GType<PrimitiveArray>;

        // Constructors

        constructor(properties?: Partial<PrimitiveArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof PrimitiveArray.SignalSignatures>(
            signal: K,
            callback: PrimitiveArray.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof PrimitiveArray.SignalSignatures>(
            signal: K,
            callback: PrimitiveArray.SignalSignatures[K],
        ): number;
        emit<K extends keyof PrimitiveArray.SignalSignatures>(
            signal: K,
            ...args: Parameters<PrimitiveArray.SignalSignatures[K]>
        ): void;

        // Methods

        get_buffer(): Buffer;
        get_data_buffer(): Buffer;
    }

    namespace ProjectNodeOptions {
        // Signal signatures
        interface SignalSignatures extends ExecuteNodeOptions.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ExecuteNodeOptions.ConstructorProps {}
    }

    class ProjectNodeOptions extends ExecuteNodeOptions {
        static $gtype: GObject.GType<ProjectNodeOptions>;

        // Constructors

        constructor(properties?: Partial<ProjectNodeOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](expressions: Expression[], names?: string[] | null): ProjectNodeOptions;

        // Signals

        connect<K extends keyof ProjectNodeOptions.SignalSignatures>(
            signal: K,
            callback: ProjectNodeOptions.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ProjectNodeOptions.SignalSignatures>(
            signal: K,
            callback: ProjectNodeOptions.SignalSignatures[K],
        ): number;
        emit<K extends keyof ProjectNodeOptions.SignalSignatures>(
            signal: K,
            ...args: Parameters<ProjectNodeOptions.SignalSignatures[K]>
        ): void;
    }

    namespace QuantileOptions {
        // Signal signatures
        interface SignalSignatures extends FunctionOptions.SignalSignatures {}

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

        // Properties

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

        // Constructors

        constructor(properties?: Partial<QuantileOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): QuantileOptions;

        // Signals

        connect<K extends keyof QuantileOptions.SignalSignatures>(
            signal: K,
            callback: QuantileOptions.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof QuantileOptions.SignalSignatures>(
            signal: K,
            callback: QuantileOptions.SignalSignatures[K],
        ): number;
        emit<K extends keyof QuantileOptions.SignalSignatures>(
            signal: K,
            ...args: Parameters<QuantileOptions.SignalSignatures[K]>
        ): void;

        // Methods

        get_qs(): number[];
        set_q(q: number): void;
        set_qs(qs: number[]): void;
    }

    namespace RankOptions {
        // Signal signatures
        interface SignalSignatures extends FunctionOptions.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends FunctionOptions.ConstructorProps {
            null_placement: NullPlacement;
            nullPlacement: NullPlacement;
            tiebreaker: RankTiebreaker;
        }
    }

    class RankOptions extends FunctionOptions {
        static $gtype: GObject.GType<RankOptions>;

        // Properties

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

        // Constructors

        constructor(properties?: Partial<RankOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RankOptions;

        // Signals

        connect<K extends keyof RankOptions.SignalSignatures>(
            signal: K,
            callback: RankOptions.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof RankOptions.SignalSignatures>(
            signal: K,
            callback: RankOptions.SignalSignatures[K],
        ): number;
        emit<K extends keyof RankOptions.SignalSignatures>(
            signal: K,
            ...args: Parameters<RankOptions.SignalSignatures[K]>
        ): void;

        // Methods

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

    namespace ReadOptions {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

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

        // Properties

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

        // Constructors

        constructor(properties?: Partial<ReadOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ReadOptions;

        // Signals

        connect<K extends keyof ReadOptions.SignalSignatures>(
            signal: K,
            callback: ReadOptions.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ReadOptions.SignalSignatures>(
            signal: K,
            callback: ReadOptions.SignalSignatures[K],
        ): number;
        emit<K extends keyof ReadOptions.SignalSignatures>(
            signal: K,
            ...args: Parameters<ReadOptions.SignalSignatures[K]>
        ): void;

        // Methods

        get_included_fields(): number[];
        set_included_fields(fields: number[]): void;
    }

    namespace RecordBatch {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            record_batch: any;
            recordBatch: any;
        }
    }

    class RecordBatch extends GObject.Object {
        static $gtype: GObject.GType<RecordBatch>;

        // Properties

        set record_batch(val: any);
        set recordBatch(val: any);

        // Constructors

        constructor(properties?: Partial<RecordBatch.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](schema: Schema, n_rows: number, columns: Array[]): RecordBatch;

        // Signals

        connect<K extends keyof RecordBatch.SignalSignatures>(
            signal: K,
            callback: RecordBatch.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof RecordBatch.SignalSignatures>(
            signal: K,
            callback: RecordBatch.SignalSignatures[K],
        ): number;
        emit<K extends keyof RecordBatch.SignalSignatures>(
            signal: K,
            ...args: Parameters<RecordBatch.SignalSignatures[K]>
        ): void;

        // Static methods

        static ['import'](c_abi_array: any, schema: Schema): RecordBatch | null;

        // Methods

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

    namespace RecordBatchBuilder {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            record_batch_builder: any;
            recordBatchBuilder: any;
        }
    }

    class RecordBatchBuilder extends GObject.Object {
        static $gtype: GObject.GType<RecordBatchBuilder>;

        // Properties

        set record_batch_builder(val: any);
        set recordBatchBuilder(val: any);

        // Constructors

        constructor(properties?: Partial<RecordBatchBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](schema: Schema): RecordBatchBuilder;

        // Signals

        connect<K extends keyof RecordBatchBuilder.SignalSignatures>(
            signal: K,
            callback: RecordBatchBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof RecordBatchBuilder.SignalSignatures>(
            signal: K,
            callback: RecordBatchBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof RecordBatchBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<RecordBatchBuilder.SignalSignatures[K]>
        ): void;

        // Methods

        flush(): RecordBatch;
        get_column_builder(i: number): ArrayBuilder | null;
        get_field(i: number): ArrayBuilder | null;
        get_initial_capacity(): number;
        get_n_columns(): number;
        get_n_fields(): number;
        get_schema(): Schema;
        set_initial_capacity(capacity: number): void;
    }

    namespace RecordBatchDatum {
        // Signal signatures
        interface SignalSignatures extends Datum.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Datum.ConstructorProps {
            value: RecordBatch;
        }
    }

    class RecordBatchDatum extends Datum {
        static $gtype: GObject.GType<RecordBatchDatum>;

        // Properties

        get value(): RecordBatch;

        // Constructors

        constructor(properties?: Partial<RecordBatchDatum.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: RecordBatch): RecordBatchDatum;

        // Signals

        connect<K extends keyof RecordBatchDatum.SignalSignatures>(
            signal: K,
            callback: RecordBatchDatum.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof RecordBatchDatum.SignalSignatures>(
            signal: K,
            callback: RecordBatchDatum.SignalSignatures[K],
        ): number;
        emit<K extends keyof RecordBatchDatum.SignalSignatures>(
            signal: K,
            ...args: Parameters<RecordBatchDatum.SignalSignatures[K]>
        ): void;
    }

    namespace RecordBatchFileReader {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            record_batch_file_reader: any;
            recordBatchFileReader: any;
        }
    }

    class RecordBatchFileReader extends GObject.Object {
        static $gtype: GObject.GType<RecordBatchFileReader>;

        // Properties

        set record_batch_file_reader(val: any);
        set recordBatchFileReader(val: any);

        // Constructors

        constructor(properties?: Partial<RecordBatchFileReader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](file: SeekableInputStream): RecordBatchFileReader;

        // Signals

        connect<K extends keyof RecordBatchFileReader.SignalSignatures>(
            signal: K,
            callback: RecordBatchFileReader.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof RecordBatchFileReader.SignalSignatures>(
            signal: K,
            callback: RecordBatchFileReader.SignalSignatures[K],
        ): number;
        emit<K extends keyof RecordBatchFileReader.SignalSignatures>(
            signal: K,
            ...args: Parameters<RecordBatchFileReader.SignalSignatures[K]>
        ): void;

        // Methods

        get_n_record_batches(): number;
        get_record_batch(i: number): RecordBatch | null;
        get_schema(): Schema;
        get_version(): MetadataVersion;
        read_record_batch(i: number): RecordBatch | null;
    }

    namespace RecordBatchFileWriter {
        // Signal signatures
        interface SignalSignatures extends RecordBatchStreamWriter.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends RecordBatchStreamWriter.ConstructorProps {}
    }

    class RecordBatchFileWriter extends RecordBatchStreamWriter {
        static $gtype: GObject.GType<RecordBatchFileWriter>;

        // Constructors

        constructor(properties?: Partial<RecordBatchFileWriter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](sink: OutputStream, schema: Schema): RecordBatchFileWriter;

        // Signals

        connect<K extends keyof RecordBatchFileWriter.SignalSignatures>(
            signal: K,
            callback: RecordBatchFileWriter.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof RecordBatchFileWriter.SignalSignatures>(
            signal: K,
            callback: RecordBatchFileWriter.SignalSignatures[K],
        ): number;
        emit<K extends keyof RecordBatchFileWriter.SignalSignatures>(
            signal: K,
            ...args: Parameters<RecordBatchFileWriter.SignalSignatures[K]>
        ): void;
    }

    namespace RecordBatchIterator {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            iterator: any;
        }
    }

    class RecordBatchIterator extends GObject.Object {
        static $gtype: GObject.GType<RecordBatchIterator>;

        // Properties

        set iterator(val: any);

        // Constructors

        constructor(properties?: Partial<RecordBatchIterator.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](record_batches: RecordBatch[]): RecordBatchIterator;

        // Signals

        connect<K extends keyof RecordBatchIterator.SignalSignatures>(
            signal: K,
            callback: RecordBatchIterator.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof RecordBatchIterator.SignalSignatures>(
            signal: K,
            callback: RecordBatchIterator.SignalSignatures[K],
        ): number;
        emit<K extends keyof RecordBatchIterator.SignalSignatures>(
            signal: K,
            ...args: Parameters<RecordBatchIterator.SignalSignatures[K]>
        ): void;

        // Methods

        equal(other_iterator: RecordBatchIterator): boolean;
        next(): RecordBatch | null;
        to_list(): RecordBatch[];
    }

    namespace RecordBatchReader {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            record_batch_reader: any;
            recordBatchReader: any;
            sources: any;
        }
    }

    class RecordBatchReader extends GObject.Object {
        static $gtype: GObject.GType<RecordBatchReader>;

        // Properties

        set record_batch_reader(val: any);
        set recordBatchReader(val: any);
        set sources(val: any);

        // Constructors

        constructor(properties?: Partial<RecordBatchReader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](record_batches: RecordBatch[], schema?: Schema | null): RecordBatchReader;

        // Signals

        connect<K extends keyof RecordBatchReader.SignalSignatures>(
            signal: K,
            callback: RecordBatchReader.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof RecordBatchReader.SignalSignatures>(
            signal: K,
            callback: RecordBatchReader.SignalSignatures[K],
        ): number;
        emit<K extends keyof RecordBatchReader.SignalSignatures>(
            signal: K,
            ...args: Parameters<RecordBatchReader.SignalSignatures[K]>
        ): void;

        // Static methods

        static ['import'](c_abi_array_stream: any): RecordBatchReader | null;

        // Methods

        ['export'](): any | null;
        get_next_record_batch(): RecordBatch | null;
        get_schema(): Schema;
        get_sources(): GObject.Object[];
        read_all(): Table | null;
        read_next(): RecordBatch | null;
        read_next_record_batch(): RecordBatch | null;
    }

    namespace RecordBatchStreamReader {
        // Signal signatures
        interface SignalSignatures extends RecordBatchReader.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends RecordBatchReader.ConstructorProps {}
    }

    class RecordBatchStreamReader extends RecordBatchReader {
        static $gtype: GObject.GType<RecordBatchStreamReader>;

        // Constructors

        constructor(properties?: Partial<RecordBatchStreamReader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](stream: InputStream): RecordBatchStreamReader;
        // Conflicted with Arrow.RecordBatchReader.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof RecordBatchStreamReader.SignalSignatures>(
            signal: K,
            callback: RecordBatchStreamReader.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof RecordBatchStreamReader.SignalSignatures>(
            signal: K,
            callback: RecordBatchStreamReader.SignalSignatures[K],
        ): number;
        emit<K extends keyof RecordBatchStreamReader.SignalSignatures>(
            signal: K,
            ...args: Parameters<RecordBatchStreamReader.SignalSignatures[K]>
        ): void;
    }

    namespace RecordBatchStreamWriter {
        // Signal signatures
        interface SignalSignatures extends RecordBatchWriter.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends RecordBatchWriter.ConstructorProps {}
    }

    class RecordBatchStreamWriter extends RecordBatchWriter {
        static $gtype: GObject.GType<RecordBatchStreamWriter>;

        // Constructors

        constructor(properties?: Partial<RecordBatchStreamWriter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](sink: OutputStream, schema: Schema): RecordBatchStreamWriter;

        // Signals

        connect<K extends keyof RecordBatchStreamWriter.SignalSignatures>(
            signal: K,
            callback: RecordBatchStreamWriter.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof RecordBatchStreamWriter.SignalSignatures>(
            signal: K,
            callback: RecordBatchStreamWriter.SignalSignatures[K],
        ): number;
        emit<K extends keyof RecordBatchStreamWriter.SignalSignatures>(
            signal: K,
            ...args: Parameters<RecordBatchStreamWriter.SignalSignatures[K]>
        ): void;
    }

    namespace RecordBatchWriter {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            record_batch_writer: any;
            recordBatchWriter: any;
        }
    }

    class RecordBatchWriter extends GObject.Object {
        static $gtype: GObject.GType<RecordBatchWriter>;

        // Properties

        set record_batch_writer(val: any);
        set recordBatchWriter(val: any);

        // Constructors

        constructor(properties?: Partial<RecordBatchWriter.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof RecordBatchWriter.SignalSignatures>(
            signal: K,
            callback: RecordBatchWriter.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof RecordBatchWriter.SignalSignatures>(
            signal: K,
            callback: RecordBatchWriter.SignalSignatures[K],
        ): number;
        emit<K extends keyof RecordBatchWriter.SignalSignatures>(
            signal: K,
            ...args: Parameters<RecordBatchWriter.SignalSignatures[K]>
        ): void;

        // Methods

        close(): boolean;
        write_record_batch(record_batch: RecordBatch): boolean;
        write_table(table: Table): boolean;
    }

    namespace ResizableBuffer {
        // Signal signatures
        interface SignalSignatures extends MutableBuffer.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends MutableBuffer.ConstructorProps {}
    }

    class ResizableBuffer extends MutableBuffer {
        static $gtype: GObject.GType<ResizableBuffer>;

        // Constructors

        constructor(properties?: Partial<ResizableBuffer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](initial_size: number): ResizableBuffer;
        // Conflicted with Arrow.MutableBuffer.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof ResizableBuffer.SignalSignatures>(
            signal: K,
            callback: ResizableBuffer.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ResizableBuffer.SignalSignatures>(
            signal: K,
            callback: ResizableBuffer.SignalSignatures[K],
        ): number;
        emit<K extends keyof ResizableBuffer.SignalSignatures>(
            signal: K,
            ...args: Parameters<ResizableBuffer.SignalSignatures[K]>
        ): void;

        // Methods

        reserve(new_capacity: number): boolean;
        resize(new_size: number): boolean;
    }

    namespace RoundOptions {
        // Signal signatures
        interface SignalSignatures extends FunctionOptions.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends FunctionOptions.ConstructorProps {
            mode: RoundMode;
            n_digits: number;
            nDigits: number;
        }
    }

    class RoundOptions extends FunctionOptions {
        static $gtype: GObject.GType<RoundOptions>;

        // Properties

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

        // Constructors

        constructor(properties?: Partial<RoundOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RoundOptions;

        // Signals

        connect<K extends keyof RoundOptions.SignalSignatures>(
            signal: K,
            callback: RoundOptions.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof RoundOptions.SignalSignatures>(
            signal: K,
            callback: RoundOptions.SignalSignatures[K],
        ): number;
        emit<K extends keyof RoundOptions.SignalSignatures>(
            signal: K,
            ...args: Parameters<RoundOptions.SignalSignatures[K]>
        ): void;
    }

    namespace RoundToMultipleOptions {
        // Signal signatures
        interface SignalSignatures extends FunctionOptions.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends FunctionOptions.ConstructorProps {
            mode: RoundMode;
            multiple: Scalar;
        }
    }

    class RoundToMultipleOptions extends FunctionOptions {
        static $gtype: GObject.GType<RoundToMultipleOptions>;

        // Properties

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

        // Constructors

        constructor(properties?: Partial<RoundToMultipleOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RoundToMultipleOptions;

        // Signals

        connect<K extends keyof RoundToMultipleOptions.SignalSignatures>(
            signal: K,
            callback: RoundToMultipleOptions.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof RoundToMultipleOptions.SignalSignatures>(
            signal: K,
            callback: RoundToMultipleOptions.SignalSignatures[K],
        ): number;
        emit<K extends keyof RoundToMultipleOptions.SignalSignatures>(
            signal: K,
            ...args: Parameters<RoundToMultipleOptions.SignalSignatures[K]>
        ): void;
    }

    namespace RunEndEncodeOptions {
        // Signal signatures
        interface SignalSignatures extends FunctionOptions.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends FunctionOptions.ConstructorProps {
            run_end_data_type: DataType;
            runEndDataType: DataType;
        }
    }

    class RunEndEncodeOptions extends FunctionOptions {
        static $gtype: GObject.GType<RunEndEncodeOptions>;

        // Properties

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

        // Constructors

        constructor(properties?: Partial<RunEndEncodeOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](run_end_data_type?: DataType | null): RunEndEncodeOptions;

        // Signals

        connect<K extends keyof RunEndEncodeOptions.SignalSignatures>(
            signal: K,
            callback: RunEndEncodeOptions.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof RunEndEncodeOptions.SignalSignatures>(
            signal: K,
            callback: RunEndEncodeOptions.SignalSignatures[K],
        ): number;
        emit<K extends keyof RunEndEncodeOptions.SignalSignatures>(
            signal: K,
            ...args: Parameters<RunEndEncodeOptions.SignalSignatures[K]>
        ): void;
    }

    namespace RunEndEncodedArray {
        // Signal signatures
        interface SignalSignatures extends Array.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Array.ConstructorProps {
            run_ends: Array;
            runEnds: Array;
            values: Array;
        }
    }

    class RunEndEncodedArray extends Array {
        static $gtype: GObject.GType<RunEndEncodedArray>;

        // Properties

        get run_ends(): Array;
        get runEnds(): Array;
        get values(): Array;

        // Constructors

        constructor(properties?: Partial<RunEndEncodedArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            data_type: DataType,
            logical_length: number,
            run_ends: Array,
            values: Array,
            logical_offset: number,
        ): RunEndEncodedArray;

        // Signals

        connect<K extends keyof RunEndEncodedArray.SignalSignatures>(
            signal: K,
            callback: RunEndEncodedArray.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof RunEndEncodedArray.SignalSignatures>(
            signal: K,
            callback: RunEndEncodedArray.SignalSignatures[K],
        ): number;
        emit<K extends keyof RunEndEncodedArray.SignalSignatures>(
            signal: K,
            ...args: Parameters<RunEndEncodedArray.SignalSignatures[K]>
        ): void;

        // Methods

        decode(): Array | null;
        find_physical_length(): number;
        find_physical_offset(): number;
        get_logical_run_ends(): Array;
        get_logical_values(): Array;
        get_run_ends(): Array;
        get_values(): Array;
    }

    namespace RunEndEncodedDataType {
        // Signal signatures
        interface SignalSignatures extends FixedWidthDataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends FixedWidthDataType.ConstructorProps {}
    }

    class RunEndEncodedDataType extends FixedWidthDataType {
        static $gtype: GObject.GType<RunEndEncodedDataType>;

        // Constructors

        constructor(properties?: Partial<RunEndEncodedDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](run_end_data_type: DataType, value_data_type: DataType): RunEndEncodedDataType;

        // Signals

        connect<K extends keyof RunEndEncodedDataType.SignalSignatures>(
            signal: K,
            callback: RunEndEncodedDataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof RunEndEncodedDataType.SignalSignatures>(
            signal: K,
            callback: RunEndEncodedDataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof RunEndEncodedDataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<RunEndEncodedDataType.SignalSignatures[K]>
        ): void;

        // Methods

        get_run_end_data_type(): DataType;
        get_value_data_type(): DataType;
    }

    namespace S3FileSystem {
        // Signal signatures
        interface SignalSignatures extends FileSystem.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends FileSystem.ConstructorProps {}
    }

    class S3FileSystem extends FileSystem {
        static $gtype: GObject.GType<S3FileSystem>;

        // Constructors

        constructor(properties?: Partial<S3FileSystem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof S3FileSystem.SignalSignatures>(
            signal: K,
            callback: S3FileSystem.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof S3FileSystem.SignalSignatures>(
            signal: K,
            callback: S3FileSystem.SignalSignatures[K],
        ): number;
        emit<K extends keyof S3FileSystem.SignalSignatures>(
            signal: K,
            ...args: Parameters<S3FileSystem.SignalSignatures[K]>
        ): void;
    }

    namespace S3GlobalOptions {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            log_level: S3LogLevel;
            logLevel: S3LogLevel;
        }
    }

    class S3GlobalOptions extends GObject.Object {
        static $gtype: GObject.GType<S3GlobalOptions>;

        // Properties

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

        // Constructors

        constructor(properties?: Partial<S3GlobalOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): S3GlobalOptions;

        // Signals

        connect<K extends keyof S3GlobalOptions.SignalSignatures>(
            signal: K,
            callback: S3GlobalOptions.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof S3GlobalOptions.SignalSignatures>(
            signal: K,
            callback: S3GlobalOptions.SignalSignatures[K],
        ): number;
        emit<K extends keyof S3GlobalOptions.SignalSignatures>(
            signal: K,
            ...args: Parameters<S3GlobalOptions.SignalSignatures[K]>
        ): void;
    }

    namespace Scalar {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            data_type: DataType;
            dataType: DataType;
            scalar: any;
        }
    }

    abstract class Scalar extends GObject.Object {
        static $gtype: GObject.GType<Scalar>;

        // Properties

        /**
         * The data type of the scalar.
         */
        set data_type(val: DataType);
        /**
         * The data type of the scalar.
         */
        set dataType(val: DataType);
        set scalar(val: any);

        // Constructors

        constructor(properties?: Partial<Scalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Scalar.SignalSignatures>(signal: K, callback: Scalar.SignalSignatures[K]): number;
        connect_after<K extends keyof Scalar.SignalSignatures>(signal: K, callback: Scalar.SignalSignatures[K]): number;
        emit<K extends keyof Scalar.SignalSignatures>(signal: K, ...args: Parameters<Scalar.SignalSignatures[K]>): void;

        // Static methods

        static parse(data_type: DataType, data: Uint8Array | string): Scalar | null;

        // Methods

        cast(data_type: DataType, options?: CastOptions | null): Scalar | null;
        equal(other_scalar: Scalar): boolean;
        equal_options(other_scalar: Scalar, options?: EqualOptions | null): boolean;
        get_data_type(): DataType;
        is_valid(): boolean;
        to_string(): string;
    }

    namespace ScalarAggregateOptions {
        // Signal signatures
        interface SignalSignatures extends FunctionOptions.SignalSignatures {}

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

        // Properties

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

        // Constructors

        constructor(properties?: Partial<ScalarAggregateOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ScalarAggregateOptions;

        // Signals

        connect<K extends keyof ScalarAggregateOptions.SignalSignatures>(
            signal: K,
            callback: ScalarAggregateOptions.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ScalarAggregateOptions.SignalSignatures>(
            signal: K,
            callback: ScalarAggregateOptions.SignalSignatures[K],
        ): number;
        emit<K extends keyof ScalarAggregateOptions.SignalSignatures>(
            signal: K,
            ...args: Parameters<ScalarAggregateOptions.SignalSignatures[K]>
        ): void;
    }

    namespace ScalarDatum {
        // Signal signatures
        interface SignalSignatures extends Datum.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Datum.ConstructorProps {
            value: Scalar;
        }
    }

    class ScalarDatum extends Datum {
        static $gtype: GObject.GType<ScalarDatum>;

        // Properties

        get value(): Scalar;

        // Constructors

        constructor(properties?: Partial<ScalarDatum.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: Scalar): ScalarDatum;

        // Signals

        connect<K extends keyof ScalarDatum.SignalSignatures>(
            signal: K,
            callback: ScalarDatum.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof ScalarDatum.SignalSignatures>(
            signal: K,
            callback: ScalarDatum.SignalSignatures[K],
        ): number;
        emit<K extends keyof ScalarDatum.SignalSignatures>(
            signal: K,
            ...args: Parameters<ScalarDatum.SignalSignatures[K]>
        ): void;
    }

    namespace Schema {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            schema: any;
        }
    }

    class Schema extends GObject.Object {
        static $gtype: GObject.GType<Schema>;

        // Properties

        set schema(val: any);

        // Constructors

        constructor(properties?: Partial<Schema.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](fields: Field[]): Schema;

        // Signals

        connect<K extends keyof Schema.SignalSignatures>(signal: K, callback: Schema.SignalSignatures[K]): number;
        connect_after<K extends keyof Schema.SignalSignatures>(signal: K, callback: Schema.SignalSignatures[K]): number;
        emit<K extends keyof Schema.SignalSignatures>(signal: K, ...args: Parameters<Schema.SignalSignatures[K]>): void;

        // Static methods

        static ['import'](c_abi_schema: any): Schema | null;

        // Methods

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

    namespace SeekableInputStream {
        // Signal signatures
        interface SignalSignatures extends InputStream.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps
            extends InputStream.ConstructorProps,
                File.ConstructorProps,
                Readable.ConstructorProps {}
    }

    class SeekableInputStream extends InputStream implements File, Readable {
        static $gtype: GObject.GType<SeekableInputStream>;

        // Constructors

        constructor(properties?: Partial<SeekableInputStream.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof SeekableInputStream.SignalSignatures>(
            signal: K,
            callback: SeekableInputStream.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof SeekableInputStream.SignalSignatures>(
            signal: K,
            callback: SeekableInputStream.SignalSignatures[K],
        ): number;
        emit<K extends keyof SeekableInputStream.SignalSignatures>(
            signal: K,
            ...args: Parameters<SeekableInputStream.SignalSignatures[K]>
        ): void;

        // Methods

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
            flags: GObject.BindingFlags | null,
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
            flags: GObject.BindingFlags | null,
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
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
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
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
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
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace SetLookupOptions {
        // Signal signatures
        interface SignalSignatures extends FunctionOptions.SignalSignatures {}

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

        // Properties

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

        // Constructors

        constructor(properties?: Partial<SetLookupOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value_set?: Datum | null): SetLookupOptions;

        // Signals

        connect<K extends keyof SetLookupOptions.SignalSignatures>(
            signal: K,
            callback: SetLookupOptions.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof SetLookupOptions.SignalSignatures>(
            signal: K,
            callback: SetLookupOptions.SignalSignatures[K],
        ): number;
        emit<K extends keyof SetLookupOptions.SignalSignatures>(
            signal: K,
            ...args: Parameters<SetLookupOptions.SignalSignatures[K]>
        ): void;
    }

    namespace SinkNodeOptions {
        // Signal signatures
        interface SignalSignatures extends ExecuteNodeOptions.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ExecuteNodeOptions.ConstructorProps {}
    }

    class SinkNodeOptions extends ExecuteNodeOptions {
        static $gtype: GObject.GType<SinkNodeOptions>;

        // Constructors

        constructor(properties?: Partial<SinkNodeOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SinkNodeOptions;

        // Signals

        connect<K extends keyof SinkNodeOptions.SignalSignatures>(
            signal: K,
            callback: SinkNodeOptions.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof SinkNodeOptions.SignalSignatures>(
            signal: K,
            callback: SinkNodeOptions.SignalSignatures[K],
        ): number;
        emit<K extends keyof SinkNodeOptions.SignalSignatures>(
            signal: K,
            ...args: Parameters<SinkNodeOptions.SignalSignatures[K]>
        ): void;

        // Methods

        get_reader(schema: Schema): RecordBatchReader;
    }

    namespace SlowFileSystem {
        // Signal signatures
        interface SignalSignatures extends FileSystem.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends FileSystem.ConstructorProps {
            base_file_system: FileSystem;
            baseFileSystem: FileSystem;
        }
    }

    class SlowFileSystem extends FileSystem {
        static $gtype: GObject.GType<SlowFileSystem>;

        // Properties

        get base_file_system(): FileSystem;
        get baseFileSystem(): FileSystem;

        // Constructors

        constructor(properties?: Partial<SlowFileSystem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_average_latency(base_file_system: FileSystem, average_latency: number): SlowFileSystem;

        static new_average_latency_and_seed(
            base_file_system: FileSystem,
            average_latency: number,
            seed: number,
        ): SlowFileSystem;

        // Signals

        connect<K extends keyof SlowFileSystem.SignalSignatures>(
            signal: K,
            callback: SlowFileSystem.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof SlowFileSystem.SignalSignatures>(
            signal: K,
            callback: SlowFileSystem.SignalSignatures[K],
        ): number;
        emit<K extends keyof SlowFileSystem.SignalSignatures>(
            signal: K,
            ...args: Parameters<SlowFileSystem.SignalSignatures[K]>
        ): void;
    }

    namespace SortKey {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            order: SortOrder;
            target: string;
        }
    }

    class SortKey extends GObject.Object {
        static $gtype: GObject.GType<SortKey>;

        // Properties

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

        // Constructors

        constructor(properties?: Partial<SortKey.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](target: string, order: SortOrder): SortKey;

        // Signals

        connect<K extends keyof SortKey.SignalSignatures>(signal: K, callback: SortKey.SignalSignatures[K]): number;
        connect_after<K extends keyof SortKey.SignalSignatures>(
            signal: K,
            callback: SortKey.SignalSignatures[K],
        ): number;
        emit<K extends keyof SortKey.SignalSignatures>(
            signal: K,
            ...args: Parameters<SortKey.SignalSignatures[K]>
        ): void;

        // Methods

        equal(other_sort_key: SortKey): boolean;
    }

    namespace SortOptions {
        // Signal signatures
        interface SignalSignatures extends FunctionOptions.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends FunctionOptions.ConstructorProps {}
    }

    class SortOptions extends FunctionOptions {
        static $gtype: GObject.GType<SortOptions>;

        // Constructors

        constructor(properties?: Partial<SortOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](sort_keys?: SortKey[] | null): SortOptions;

        // Signals

        connect<K extends keyof SortOptions.SignalSignatures>(
            signal: K,
            callback: SortOptions.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof SortOptions.SignalSignatures>(
            signal: K,
            callback: SortOptions.SignalSignatures[K],
        ): number;
        emit<K extends keyof SortOptions.SignalSignatures>(
            signal: K,
            ...args: Parameters<SortOptions.SignalSignatures[K]>
        ): void;

        // Methods

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

    namespace SourceNodeOptions {
        // Signal signatures
        interface SignalSignatures extends ExecuteNodeOptions.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ExecuteNodeOptions.ConstructorProps {
            reader: RecordBatchReader;
            record_batch: RecordBatch;
            recordBatch: RecordBatch;
        }
    }

    class SourceNodeOptions extends ExecuteNodeOptions {
        static $gtype: GObject.GType<SourceNodeOptions>;

        // Properties

        get reader(): RecordBatchReader;
        get record_batch(): RecordBatch;
        get recordBatch(): RecordBatch;

        // Constructors

        constructor(properties?: Partial<SourceNodeOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_record_batch(record_batch: RecordBatch): SourceNodeOptions;

        static new_record_batch_reader(reader: RecordBatchReader): SourceNodeOptions;

        static new_table(table: Table): SourceNodeOptions;

        // Signals

        connect<K extends keyof SourceNodeOptions.SignalSignatures>(
            signal: K,
            callback: SourceNodeOptions.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof SourceNodeOptions.SignalSignatures>(
            signal: K,
            callback: SourceNodeOptions.SignalSignatures[K],
        ): number;
        emit<K extends keyof SourceNodeOptions.SignalSignatures>(
            signal: K,
            ...args: Parameters<SourceNodeOptions.SignalSignatures[K]>
        ): void;
    }

    namespace SparseUnionArray {
        // Signal signatures
        interface SignalSignatures extends UnionArray.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends UnionArray.ConstructorProps {}
    }

    class SparseUnionArray extends UnionArray {
        static $gtype: GObject.GType<SparseUnionArray>;

        // Constructors

        constructor(properties?: Partial<SparseUnionArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](type_ids: Int8Array, fields: Array[]): SparseUnionArray;

        static new_data_type(data_type: SparseUnionDataType, type_ids: Int8Array, fields: Array[]): SparseUnionArray;

        // Signals

        connect<K extends keyof SparseUnionArray.SignalSignatures>(
            signal: K,
            callback: SparseUnionArray.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof SparseUnionArray.SignalSignatures>(
            signal: K,
            callback: SparseUnionArray.SignalSignatures[K],
        ): number;
        emit<K extends keyof SparseUnionArray.SignalSignatures>(
            signal: K,
            ...args: Parameters<SparseUnionArray.SignalSignatures[K]>
        ): void;
    }

    namespace SparseUnionArrayBuilder {
        // Signal signatures
        interface SignalSignatures extends UnionArrayBuilder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends UnionArrayBuilder.ConstructorProps {}
    }

    class SparseUnionArrayBuilder extends UnionArrayBuilder {
        static $gtype: GObject.GType<SparseUnionArrayBuilder>;

        // Constructors

        constructor(properties?: Partial<SparseUnionArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type?: SparseUnionDataType | null): SparseUnionArrayBuilder;

        // Signals

        connect<K extends keyof SparseUnionArrayBuilder.SignalSignatures>(
            signal: K,
            callback: SparseUnionArrayBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof SparseUnionArrayBuilder.SignalSignatures>(
            signal: K,
            callback: SparseUnionArrayBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof SparseUnionArrayBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<SparseUnionArrayBuilder.SignalSignatures[K]>
        ): void;
    }

    namespace SparseUnionDataType {
        // Signal signatures
        interface SignalSignatures extends UnionDataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends UnionDataType.ConstructorProps {}
    }

    class SparseUnionDataType extends UnionDataType {
        static $gtype: GObject.GType<SparseUnionDataType>;

        // Constructors

        constructor(properties?: Partial<SparseUnionDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](fields: Field[], type_codes: Uint8Array | string): SparseUnionDataType;

        // Signals

        connect<K extends keyof SparseUnionDataType.SignalSignatures>(
            signal: K,
            callback: SparseUnionDataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof SparseUnionDataType.SignalSignatures>(
            signal: K,
            callback: SparseUnionDataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof SparseUnionDataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<SparseUnionDataType.SignalSignatures[K]>
        ): void;
    }

    namespace SparseUnionScalar {
        // Signal signatures
        interface SignalSignatures extends UnionScalar.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends UnionScalar.ConstructorProps {}
    }

    class SparseUnionScalar extends UnionScalar {
        static $gtype: GObject.GType<SparseUnionScalar>;

        // Constructors

        constructor(properties?: Partial<SparseUnionScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type: SparseUnionDataType, type_code: number, value: Scalar): SparseUnionScalar;

        // Signals

        connect<K extends keyof SparseUnionScalar.SignalSignatures>(
            signal: K,
            callback: SparseUnionScalar.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof SparseUnionScalar.SignalSignatures>(
            signal: K,
            callback: SparseUnionScalar.SignalSignatures[K],
        ): number;
        emit<K extends keyof SparseUnionScalar.SignalSignatures>(
            signal: K,
            ...args: Parameters<SparseUnionScalar.SignalSignatures[K]>
        ): void;
    }

    namespace SplitPatternOptions {
        // Signal signatures
        interface SignalSignatures extends FunctionOptions.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends FunctionOptions.ConstructorProps {
            max_splits: number;
            maxSplits: number;
            pattern: string;
            reverse: boolean;
        }
    }

    class SplitPatternOptions extends FunctionOptions {
        static $gtype: GObject.GType<SplitPatternOptions>;

        // Properties

        get max_splits(): number;
        set max_splits(val: number);
        get maxSplits(): number;
        set maxSplits(val: number);
        /**
         * The exact substring to split on.
         */
        get pattern(): string;
        set pattern(val: string);
        /**
         * Start splitting from the end of the string (only relevant when
         * max_splits != -1)
         */
        get reverse(): boolean;
        set reverse(val: boolean);

        // Constructors

        constructor(properties?: Partial<SplitPatternOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SplitPatternOptions;

        // Signals

        connect<K extends keyof SplitPatternOptions.SignalSignatures>(
            signal: K,
            callback: SplitPatternOptions.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof SplitPatternOptions.SignalSignatures>(
            signal: K,
            callback: SplitPatternOptions.SignalSignatures[K],
        ): number;
        emit<K extends keyof SplitPatternOptions.SignalSignatures>(
            signal: K,
            ...args: Parameters<SplitPatternOptions.SignalSignatures[K]>
        ): void;
    }

    namespace StrftimeOptions {
        // Signal signatures
        interface SignalSignatures extends FunctionOptions.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends FunctionOptions.ConstructorProps {
            format: string;
            locale: string;
        }
    }

    class StrftimeOptions extends FunctionOptions {
        static $gtype: GObject.GType<StrftimeOptions>;

        // Properties

        /**
         * The desired format string.
         */
        get format(): string;
        set format(val: string);
        /**
         * The desired output locale string.
         */
        get locale(): string;
        set locale(val: string);

        // Constructors

        constructor(properties?: Partial<StrftimeOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StrftimeOptions;

        // Signals

        connect<K extends keyof StrftimeOptions.SignalSignatures>(
            signal: K,
            callback: StrftimeOptions.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof StrftimeOptions.SignalSignatures>(
            signal: K,
            callback: StrftimeOptions.SignalSignatures[K],
        ): number;
        emit<K extends keyof StrftimeOptions.SignalSignatures>(
            signal: K,
            ...args: Parameters<StrftimeOptions.SignalSignatures[K]>
        ): void;
    }

    namespace StringArray {
        // Signal signatures
        interface SignalSignatures extends BinaryArray.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends BinaryArray.ConstructorProps {}
    }

    class StringArray extends BinaryArray {
        static $gtype: GObject.GType<StringArray>;

        // Constructors

        constructor(properties?: Partial<StringArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            length: number,
            value_offsets: Buffer,
            value_data: Buffer,
            null_bitmap: Buffer | null,
            n_nulls: number,
        ): StringArray;

        // Signals

        connect<K extends keyof StringArray.SignalSignatures>(
            signal: K,
            callback: StringArray.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof StringArray.SignalSignatures>(
            signal: K,
            callback: StringArray.SignalSignatures[K],
        ): number;
        emit<K extends keyof StringArray.SignalSignatures>(
            signal: K,
            ...args: Parameters<StringArray.SignalSignatures[K]>
        ): void;

        // Methods

        get_string(i: number): string;
    }

    namespace StringArrayBuilder {
        // Signal signatures
        interface SignalSignatures extends BinaryArrayBuilder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends BinaryArrayBuilder.ConstructorProps {}
    }

    class StringArrayBuilder extends BinaryArrayBuilder {
        static $gtype: GObject.GType<StringArrayBuilder>;

        // Constructors

        constructor(properties?: Partial<StringArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StringArrayBuilder;

        // Signals

        connect<K extends keyof StringArrayBuilder.SignalSignatures>(
            signal: K,
            callback: StringArrayBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof StringArrayBuilder.SignalSignatures>(
            signal: K,
            callback: StringArrayBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof StringArrayBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<StringArrayBuilder.SignalSignatures[K]>
        ): void;

        // Methods

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

    namespace StringDataType {
        // Signal signatures
        interface SignalSignatures extends DataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends DataType.ConstructorProps {}
    }

    class StringDataType extends DataType {
        static $gtype: GObject.GType<StringDataType>;

        // Constructors

        constructor(properties?: Partial<StringDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StringDataType;

        // Signals

        connect<K extends keyof StringDataType.SignalSignatures>(
            signal: K,
            callback: StringDataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof StringDataType.SignalSignatures>(
            signal: K,
            callback: StringDataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof StringDataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<StringDataType.SignalSignatures[K]>
        ): void;
    }

    namespace StringDictionaryArrayBuilder {
        // Signal signatures
        interface SignalSignatures extends ArrayBuilder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class StringDictionaryArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<StringDictionaryArrayBuilder>;

        // Constructors

        constructor(properties?: Partial<StringDictionaryArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StringDictionaryArrayBuilder;

        // Signals

        connect<K extends keyof StringDictionaryArrayBuilder.SignalSignatures>(
            signal: K,
            callback: StringDictionaryArrayBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof StringDictionaryArrayBuilder.SignalSignatures>(
            signal: K,
            callback: StringDictionaryArrayBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof StringDictionaryArrayBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<StringDictionaryArrayBuilder.SignalSignatures[K]>
        ): void;

        // Methods

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

    namespace StringScalar {
        // Signal signatures
        interface SignalSignatures extends BaseBinaryScalar.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends BaseBinaryScalar.ConstructorProps {}
    }

    class StringScalar extends BaseBinaryScalar {
        static $gtype: GObject.GType<StringScalar>;

        // Constructors

        constructor(properties?: Partial<StringScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: Buffer): StringScalar;

        // Signals

        connect<K extends keyof StringScalar.SignalSignatures>(
            signal: K,
            callback: StringScalar.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof StringScalar.SignalSignatures>(
            signal: K,
            callback: StringScalar.SignalSignatures[K],
        ): number;
        emit<K extends keyof StringScalar.SignalSignatures>(
            signal: K,
            ...args: Parameters<StringScalar.SignalSignatures[K]>
        ): void;
    }

    namespace StrptimeOptions {
        // Signal signatures
        interface SignalSignatures extends FunctionOptions.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends FunctionOptions.ConstructorProps {
            error_is_null: boolean;
            errorIsNull: boolean;
            format: string;
            unit: TimeUnit;
        }
    }

    class StrptimeOptions extends FunctionOptions {
        static $gtype: GObject.GType<StrptimeOptions>;

        // Properties

        /**
         * Return null on parsing errors if true or raise if false.
         */
        get error_is_null(): boolean;
        set error_is_null(val: boolean);
        /**
         * Return null on parsing errors if true or raise if false.
         */
        get errorIsNull(): boolean;
        set errorIsNull(val: boolean);
        /**
         * The desired format string.
         */
        get format(): string;
        set format(val: string);
        /**
         * The desired time resolution.
         */
        get unit(): TimeUnit;
        set unit(val: TimeUnit);

        // Constructors

        constructor(properties?: Partial<StrptimeOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StrptimeOptions;

        // Signals

        connect<K extends keyof StrptimeOptions.SignalSignatures>(
            signal: K,
            callback: StrptimeOptions.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof StrptimeOptions.SignalSignatures>(
            signal: K,
            callback: StrptimeOptions.SignalSignatures[K],
        ): number;
        emit<K extends keyof StrptimeOptions.SignalSignatures>(
            signal: K,
            ...args: Parameters<StrptimeOptions.SignalSignatures[K]>
        ): void;
    }

    namespace StrptimeTimestampParser {
        // Signal signatures
        interface SignalSignatures extends TimestampParser.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends TimestampParser.ConstructorProps {}
    }

    class StrptimeTimestampParser extends TimestampParser {
        static $gtype: GObject.GType<StrptimeTimestampParser>;

        // Constructors

        constructor(properties?: Partial<StrptimeTimestampParser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](format: string): StrptimeTimestampParser;

        // Signals

        connect<K extends keyof StrptimeTimestampParser.SignalSignatures>(
            signal: K,
            callback: StrptimeTimestampParser.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof StrptimeTimestampParser.SignalSignatures>(
            signal: K,
            callback: StrptimeTimestampParser.SignalSignatures[K],
        ): number;
        emit<K extends keyof StrptimeTimestampParser.SignalSignatures>(
            signal: K,
            ...args: Parameters<StrptimeTimestampParser.SignalSignatures[K]>
        ): void;

        // Methods

        get_format(): string;
    }

    namespace StructArray {
        // Signal signatures
        interface SignalSignatures extends Array.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Array.ConstructorProps {}
    }

    class StructArray extends Array {
        static $gtype: GObject.GType<StructArray>;

        // Constructors

        constructor(properties?: Partial<StructArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            data_type: DataType,
            length: number,
            fields: Array[],
            null_bitmap: Buffer | null,
            n_nulls: number,
        ): StructArray;

        // Signals

        connect<K extends keyof StructArray.SignalSignatures>(
            signal: K,
            callback: StructArray.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof StructArray.SignalSignatures>(
            signal: K,
            callback: StructArray.SignalSignatures[K],
        ): number;
        emit<K extends keyof StructArray.SignalSignatures>(
            signal: K,
            ...args: Parameters<StructArray.SignalSignatures[K]>
        ): void;

        // Methods

        flatten(): Array[];
        get_field(i: number): Array;
        get_fields(): Array[];
    }

    namespace StructArrayBuilder {
        // Signal signatures
        interface SignalSignatures extends ArrayBuilder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class StructArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<StructArrayBuilder>;

        // Constructors

        constructor(properties?: Partial<StructArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type: StructDataType): StructArrayBuilder;

        // Signals

        connect<K extends keyof StructArrayBuilder.SignalSignatures>(
            signal: K,
            callback: StructArrayBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof StructArrayBuilder.SignalSignatures>(
            signal: K,
            callback: StructArrayBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof StructArrayBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<StructArrayBuilder.SignalSignatures[K]>
        ): void;

        // Methods

        append(): boolean;
        append_value(): boolean;
        get_field_builder(i: number): ArrayBuilder;
        get_field_builders(): ArrayBuilder[];
    }

    namespace StructDataType {
        // Signal signatures
        interface SignalSignatures extends DataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends DataType.ConstructorProps {}
    }

    class StructDataType extends DataType {
        static $gtype: GObject.GType<StructDataType>;

        // Constructors

        constructor(properties?: Partial<StructDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](fields: Field[]): StructDataType;

        // Signals

        connect<K extends keyof StructDataType.SignalSignatures>(
            signal: K,
            callback: StructDataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof StructDataType.SignalSignatures>(
            signal: K,
            callback: StructDataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof StructDataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<StructDataType.SignalSignatures[K]>
        ): void;

        // Methods

        get_field(i: number): Field | null;
        get_field_by_name(name: string): Field | null;
        get_field_index(name: string): number;
        get_fields(): Field[];
        get_n_fields(): number;
    }

    namespace StructFieldOptions {
        // Signal signatures
        interface SignalSignatures extends FunctionOptions.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends FunctionOptions.ConstructorProps {
            field_ref: string;
            fieldRef: string;
        }
    }

    class StructFieldOptions extends FunctionOptions {
        static $gtype: GObject.GType<StructFieldOptions>;

        // Properties

        get field_ref(): string;
        get fieldRef(): string;

        // Constructors

        constructor(properties?: Partial<StructFieldOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): StructFieldOptions;

        // Signals

        connect<K extends keyof StructFieldOptions.SignalSignatures>(
            signal: K,
            callback: StructFieldOptions.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof StructFieldOptions.SignalSignatures>(
            signal: K,
            callback: StructFieldOptions.SignalSignatures[K],
        ): number;
        emit<K extends keyof StructFieldOptions.SignalSignatures>(
            signal: K,
            ...args: Parameters<StructFieldOptions.SignalSignatures[K]>
        ): void;

        // Methods

        set_field_ref(field_ref: string): void;
    }

    namespace StructScalar {
        // Signal signatures
        interface SignalSignatures extends Scalar.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class StructScalar extends Scalar {
        static $gtype: GObject.GType<StructScalar>;

        // Constructors

        constructor(properties?: Partial<StructScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type: StructDataType, value: Scalar[]): StructScalar;

        // Signals

        connect<K extends keyof StructScalar.SignalSignatures>(
            signal: K,
            callback: StructScalar.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof StructScalar.SignalSignatures>(
            signal: K,
            callback: StructScalar.SignalSignatures[K],
        ): number;
        emit<K extends keyof StructScalar.SignalSignatures>(
            signal: K,
            ...args: Parameters<StructScalar.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(): Scalar[];
    }

    namespace SubTreeFileSystem {
        // Signal signatures
        interface SignalSignatures extends FileSystem.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends FileSystem.ConstructorProps {
            base_file_system: FileSystem;
            baseFileSystem: FileSystem;
        }
    }

    class SubTreeFileSystem extends FileSystem {
        static $gtype: GObject.GType<SubTreeFileSystem>;

        // Properties

        get base_file_system(): FileSystem;
        get baseFileSystem(): FileSystem;

        // Constructors

        constructor(properties?: Partial<SubTreeFileSystem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](base_path: string, base_file_system: FileSystem): SubTreeFileSystem;

        // Signals

        connect<K extends keyof SubTreeFileSystem.SignalSignatures>(
            signal: K,
            callback: SubTreeFileSystem.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof SubTreeFileSystem.SignalSignatures>(
            signal: K,
            callback: SubTreeFileSystem.SignalSignatures[K],
        ): number;
        emit<K extends keyof SubTreeFileSystem.SignalSignatures>(
            signal: K,
            ...args: Parameters<SubTreeFileSystem.SignalSignatures[K]>
        ): void;
    }

    namespace Table {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            table: any;
        }
    }

    class Table extends GObject.Object {
        static $gtype: GObject.GType<Table>;

        // Properties

        set table(val: any);

        // Constructors

        constructor(properties?: Partial<Table.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_arrays(schema: Schema, arrays: Array[]): Table;

        static new_chunked_arrays(schema: Schema, chunked_arrays: ChunkedArray[]): Table;

        static new_record_batches(schema: Schema, record_batches: RecordBatch[]): Table;

        // Signals

        connect<K extends keyof Table.SignalSignatures>(signal: K, callback: Table.SignalSignatures[K]): number;
        connect_after<K extends keyof Table.SignalSignatures>(signal: K, callback: Table.SignalSignatures[K]): number;
        emit<K extends keyof Table.SignalSignatures>(signal: K, ...args: Parameters<Table.SignalSignatures[K]>): void;

        // Methods

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

    namespace TableBatchReader {
        // Signal signatures
        interface SignalSignatures extends RecordBatchReader.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends RecordBatchReader.ConstructorProps {}
    }

    class TableBatchReader extends RecordBatchReader {
        static $gtype: GObject.GType<TableBatchReader>;

        // Constructors

        constructor(properties?: Partial<TableBatchReader.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](table: Table): TableBatchReader;
        // Conflicted with Arrow.RecordBatchReader.new

        static ['new'](...args: never[]): any;

        // Signals

        connect<K extends keyof TableBatchReader.SignalSignatures>(
            signal: K,
            callback: TableBatchReader.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof TableBatchReader.SignalSignatures>(
            signal: K,
            callback: TableBatchReader.SignalSignatures[K],
        ): number;
        emit<K extends keyof TableBatchReader.SignalSignatures>(
            signal: K,
            ...args: Parameters<TableBatchReader.SignalSignatures[K]>
        ): void;

        // Methods

        /**
         * Set the desired maximum chunk size of record batches.
         *
         * The actual chunk size of each record batch may be smaller,
         * depending on actual chunking characteristics of each table column.
         * @param max_chunk_size The maximum chunk size of record batches.
         */
        set_max_chunk_size(max_chunk_size: number): void;
    }

    namespace TableConcatenateOptions {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

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

        // Properties

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

        // Constructors

        constructor(properties?: Partial<TableConcatenateOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TableConcatenateOptions;

        // Signals

        connect<K extends keyof TableConcatenateOptions.SignalSignatures>(
            signal: K,
            callback: TableConcatenateOptions.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof TableConcatenateOptions.SignalSignatures>(
            signal: K,
            callback: TableConcatenateOptions.SignalSignatures[K],
        ): number;
        emit<K extends keyof TableConcatenateOptions.SignalSignatures>(
            signal: K,
            ...args: Parameters<TableConcatenateOptions.SignalSignatures[K]>
        ): void;
    }

    namespace TableDatum {
        // Signal signatures
        interface SignalSignatures extends Datum.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Datum.ConstructorProps {
            value: Table;
        }
    }

    class TableDatum extends Datum {
        static $gtype: GObject.GType<TableDatum>;

        // Properties

        get value(): Table;

        // Constructors

        constructor(properties?: Partial<TableDatum.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: Table): TableDatum;

        // Signals

        connect<K extends keyof TableDatum.SignalSignatures>(
            signal: K,
            callback: TableDatum.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof TableDatum.SignalSignatures>(
            signal: K,
            callback: TableDatum.SignalSignatures[K],
        ): number;
        emit<K extends keyof TableDatum.SignalSignatures>(
            signal: K,
            ...args: Parameters<TableDatum.SignalSignatures[K]>
        ): void;
    }

    namespace TakeOptions {
        // Signal signatures
        interface SignalSignatures extends FunctionOptions.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends FunctionOptions.ConstructorProps {}
    }

    class TakeOptions extends FunctionOptions {
        static $gtype: GObject.GType<TakeOptions>;

        // Constructors

        constructor(properties?: Partial<TakeOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TakeOptions;

        // Signals

        connect<K extends keyof TakeOptions.SignalSignatures>(
            signal: K,
            callback: TakeOptions.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof TakeOptions.SignalSignatures>(
            signal: K,
            callback: TakeOptions.SignalSignatures[K],
        ): number;
        emit<K extends keyof TakeOptions.SignalSignatures>(
            signal: K,
            ...args: Parameters<TakeOptions.SignalSignatures[K]>
        ): void;
    }

    namespace TemporalDataType {
        // Signal signatures
        interface SignalSignatures extends FixedWidthDataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends FixedWidthDataType.ConstructorProps {}
    }

    abstract class TemporalDataType extends FixedWidthDataType {
        static $gtype: GObject.GType<TemporalDataType>;

        // Constructors

        constructor(properties?: Partial<TemporalDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof TemporalDataType.SignalSignatures>(
            signal: K,
            callback: TemporalDataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof TemporalDataType.SignalSignatures>(
            signal: K,
            callback: TemporalDataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof TemporalDataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<TemporalDataType.SignalSignatures[K]>
        ): void;
    }

    namespace Tensor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            buffer: Buffer;
            tensor: any;
        }
    }

    class Tensor extends GObject.Object {
        static $gtype: GObject.GType<Tensor>;

        // Properties

        get buffer(): Buffer;
        set tensor(val: any);

        // Constructors

        constructor(properties?: Partial<Tensor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            data_type: DataType,
            data: Buffer,
            shape: number[],
            strides?: number[] | null,
            dimension_names?: string[] | null,
        ): Tensor;

        // Signals

        connect<K extends keyof Tensor.SignalSignatures>(signal: K, callback: Tensor.SignalSignatures[K]): number;
        connect_after<K extends keyof Tensor.SignalSignatures>(signal: K, callback: Tensor.SignalSignatures[K]): number;
        emit<K extends keyof Tensor.SignalSignatures>(signal: K, ...args: Parameters<Tensor.SignalSignatures[K]>): void;

        // Methods

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

    namespace Time32Array {
        // Signal signatures
        interface SignalSignatures extends NumericArray.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends NumericArray.ConstructorProps {}
    }

    class Time32Array extends NumericArray {
        static $gtype: GObject.GType<Time32Array>;

        // Constructors

        constructor(properties?: Partial<Time32Array.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            data_type: Time32DataType,
            length: number,
            data: Buffer,
            null_bitmap: Buffer | null,
            n_nulls: number,
        ): Time32Array;

        // Signals

        connect<K extends keyof Time32Array.SignalSignatures>(
            signal: K,
            callback: Time32Array.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Time32Array.SignalSignatures>(
            signal: K,
            callback: Time32Array.SignalSignatures[K],
        ): number;
        emit<K extends keyof Time32Array.SignalSignatures>(
            signal: K,
            ...args: Parameters<Time32Array.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(i: number): number;
        get_values(): number[];
    }

    namespace Time32ArrayBuilder {
        // Signal signatures
        interface SignalSignatures extends ArrayBuilder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class Time32ArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<Time32ArrayBuilder>;

        // Constructors

        constructor(properties?: Partial<Time32ArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type: Time32DataType): Time32ArrayBuilder;

        // Signals

        connect<K extends keyof Time32ArrayBuilder.SignalSignatures>(
            signal: K,
            callback: Time32ArrayBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Time32ArrayBuilder.SignalSignatures>(
            signal: K,
            callback: Time32ArrayBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof Time32ArrayBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<Time32ArrayBuilder.SignalSignatures[K]>
        ): void;

        // Methods

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

    namespace Time32DataType {
        // Signal signatures
        interface SignalSignatures extends TimeDataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends TimeDataType.ConstructorProps {}
    }

    class Time32DataType extends TimeDataType {
        static $gtype: GObject.GType<Time32DataType>;

        // Constructors

        constructor(properties?: Partial<Time32DataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](unit: TimeUnit): Time32DataType;

        // Signals

        connect<K extends keyof Time32DataType.SignalSignatures>(
            signal: K,
            callback: Time32DataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Time32DataType.SignalSignatures>(
            signal: K,
            callback: Time32DataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof Time32DataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<Time32DataType.SignalSignatures[K]>
        ): void;
    }

    namespace Time32Scalar {
        // Signal signatures
        interface SignalSignatures extends Scalar.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class Time32Scalar extends Scalar {
        static $gtype: GObject.GType<Time32Scalar>;

        // Constructors

        constructor(properties?: Partial<Time32Scalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type: Time32DataType, value: number): Time32Scalar;

        // Signals

        connect<K extends keyof Time32Scalar.SignalSignatures>(
            signal: K,
            callback: Time32Scalar.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Time32Scalar.SignalSignatures>(
            signal: K,
            callback: Time32Scalar.SignalSignatures[K],
        ): number;
        emit<K extends keyof Time32Scalar.SignalSignatures>(
            signal: K,
            ...args: Parameters<Time32Scalar.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(): number;
    }

    namespace Time64Array {
        // Signal signatures
        interface SignalSignatures extends NumericArray.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends NumericArray.ConstructorProps {}
    }

    class Time64Array extends NumericArray {
        static $gtype: GObject.GType<Time64Array>;

        // Constructors

        constructor(properties?: Partial<Time64Array.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            data_type: Time64DataType,
            length: number,
            data: Buffer,
            null_bitmap: Buffer | null,
            n_nulls: number,
        ): Time64Array;

        // Signals

        connect<K extends keyof Time64Array.SignalSignatures>(
            signal: K,
            callback: Time64Array.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Time64Array.SignalSignatures>(
            signal: K,
            callback: Time64Array.SignalSignatures[K],
        ): number;
        emit<K extends keyof Time64Array.SignalSignatures>(
            signal: K,
            ...args: Parameters<Time64Array.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(i: number): number;
        get_values(): number[];
    }

    namespace Time64ArrayBuilder {
        // Signal signatures
        interface SignalSignatures extends ArrayBuilder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class Time64ArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<Time64ArrayBuilder>;

        // Constructors

        constructor(properties?: Partial<Time64ArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type: Time64DataType): Time64ArrayBuilder;

        // Signals

        connect<K extends keyof Time64ArrayBuilder.SignalSignatures>(
            signal: K,
            callback: Time64ArrayBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Time64ArrayBuilder.SignalSignatures>(
            signal: K,
            callback: Time64ArrayBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof Time64ArrayBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<Time64ArrayBuilder.SignalSignatures[K]>
        ): void;

        // Methods

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

    namespace Time64DataType {
        // Signal signatures
        interface SignalSignatures extends TimeDataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends TimeDataType.ConstructorProps {}
    }

    class Time64DataType extends TimeDataType {
        static $gtype: GObject.GType<Time64DataType>;

        // Constructors

        constructor(properties?: Partial<Time64DataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](unit: TimeUnit): Time64DataType;

        // Signals

        connect<K extends keyof Time64DataType.SignalSignatures>(
            signal: K,
            callback: Time64DataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Time64DataType.SignalSignatures>(
            signal: K,
            callback: Time64DataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof Time64DataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<Time64DataType.SignalSignatures[K]>
        ): void;
    }

    namespace Time64Scalar {
        // Signal signatures
        interface SignalSignatures extends Scalar.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class Time64Scalar extends Scalar {
        static $gtype: GObject.GType<Time64Scalar>;

        // Constructors

        constructor(properties?: Partial<Time64Scalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type: Time64DataType, value: number): Time64Scalar;

        // Signals

        connect<K extends keyof Time64Scalar.SignalSignatures>(
            signal: K,
            callback: Time64Scalar.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof Time64Scalar.SignalSignatures>(
            signal: K,
            callback: Time64Scalar.SignalSignatures[K],
        ): number;
        emit<K extends keyof Time64Scalar.SignalSignatures>(
            signal: K,
            ...args: Parameters<Time64Scalar.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(): number;
    }

    namespace TimeDataType {
        // Signal signatures
        interface SignalSignatures extends TemporalDataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends TemporalDataType.ConstructorProps {}
    }

    abstract class TimeDataType extends TemporalDataType {
        static $gtype: GObject.GType<TimeDataType>;

        // Constructors

        constructor(properties?: Partial<TimeDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof TimeDataType.SignalSignatures>(
            signal: K,
            callback: TimeDataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof TimeDataType.SignalSignatures>(
            signal: K,
            callback: TimeDataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof TimeDataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<TimeDataType.SignalSignatures[K]>
        ): void;

        // Methods

        get_unit(): TimeUnit;
    }

    namespace TimestampArray {
        // Signal signatures
        interface SignalSignatures extends NumericArray.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends NumericArray.ConstructorProps {}
    }

    class TimestampArray extends NumericArray {
        static $gtype: GObject.GType<TimestampArray>;

        // Constructors

        constructor(properties?: Partial<TimestampArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            data_type: TimestampDataType,
            length: number,
            data: Buffer,
            null_bitmap: Buffer | null,
            n_nulls: number,
        ): TimestampArray;

        // Signals

        connect<K extends keyof TimestampArray.SignalSignatures>(
            signal: K,
            callback: TimestampArray.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof TimestampArray.SignalSignatures>(
            signal: K,
            callback: TimestampArray.SignalSignatures[K],
        ): number;
        emit<K extends keyof TimestampArray.SignalSignatures>(
            signal: K,
            ...args: Parameters<TimestampArray.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(i: number): number;
        get_values(): number[];
    }

    namespace TimestampArrayBuilder {
        // Signal signatures
        interface SignalSignatures extends ArrayBuilder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class TimestampArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<TimestampArrayBuilder>;

        // Constructors

        constructor(properties?: Partial<TimestampArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type: TimestampDataType): TimestampArrayBuilder;

        // Signals

        connect<K extends keyof TimestampArrayBuilder.SignalSignatures>(
            signal: K,
            callback: TimestampArrayBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof TimestampArrayBuilder.SignalSignatures>(
            signal: K,
            callback: TimestampArrayBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof TimestampArrayBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<TimestampArrayBuilder.SignalSignatures[K]>
        ): void;

        // Methods

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

    namespace TimestampDataType {
        // Signal signatures
        interface SignalSignatures extends TemporalDataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends TemporalDataType.ConstructorProps {
            time_zone: GLib.TimeZone;
            timeZone: GLib.TimeZone;
        }
    }

    class TimestampDataType extends TemporalDataType {
        static $gtype: GObject.GType<TimestampDataType>;

        // Properties

        /**
         * The time zone of this data type.
         */
        get time_zone(): GLib.TimeZone;
        /**
         * The time zone of this data type.
         */
        get timeZone(): GLib.TimeZone;

        // Constructors

        constructor(properties?: Partial<TimestampDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](unit: TimeUnit, time_zone?: GLib.TimeZone | null): TimestampDataType;

        // Signals

        connect<K extends keyof TimestampDataType.SignalSignatures>(
            signal: K,
            callback: TimestampDataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof TimestampDataType.SignalSignatures>(
            signal: K,
            callback: TimestampDataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof TimestampDataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<TimestampDataType.SignalSignatures[K]>
        ): void;

        // Methods

        get_unit(): TimeUnit;
    }

    namespace TimestampParser {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            parser: any;
        }
    }

    abstract class TimestampParser extends GObject.Object {
        static $gtype: GObject.GType<TimestampParser>;

        // Properties

        set parser(val: any);

        // Constructors

        constructor(properties?: Partial<TimestampParser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof TimestampParser.SignalSignatures>(
            signal: K,
            callback: TimestampParser.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof TimestampParser.SignalSignatures>(
            signal: K,
            callback: TimestampParser.SignalSignatures[K],
        ): number;
        emit<K extends keyof TimestampParser.SignalSignatures>(
            signal: K,
            ...args: Parameters<TimestampParser.SignalSignatures[K]>
        ): void;

        // Methods

        get_kind(): string;
    }

    namespace TimestampScalar {
        // Signal signatures
        interface SignalSignatures extends Scalar.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class TimestampScalar extends Scalar {
        static $gtype: GObject.GType<TimestampScalar>;

        // Constructors

        constructor(properties?: Partial<TimestampScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](data_type: TimestampDataType, value: number): TimestampScalar;

        // Signals

        connect<K extends keyof TimestampScalar.SignalSignatures>(
            signal: K,
            callback: TimestampScalar.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof TimestampScalar.SignalSignatures>(
            signal: K,
            callback: TimestampScalar.SignalSignatures[K],
        ): number;
        emit<K extends keyof TimestampScalar.SignalSignatures>(
            signal: K,
            ...args: Parameters<TimestampScalar.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(): number;
    }

    namespace UInt16Array {
        // Signal signatures
        interface SignalSignatures extends NumericArray.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends NumericArray.ConstructorProps {}
    }

    class UInt16Array extends NumericArray {
        static $gtype: GObject.GType<UInt16Array>;

        // Constructors

        constructor(properties?: Partial<UInt16Array.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): UInt16Array;

        // Signals

        connect<K extends keyof UInt16Array.SignalSignatures>(
            signal: K,
            callback: UInt16Array.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof UInt16Array.SignalSignatures>(
            signal: K,
            callback: UInt16Array.SignalSignatures[K],
        ): number;
        emit<K extends keyof UInt16Array.SignalSignatures>(
            signal: K,
            ...args: Parameters<UInt16Array.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(i: number): number;
        get_values(): number[];
        sum(): number;
    }

    namespace UInt16ArrayBuilder {
        // Signal signatures
        interface SignalSignatures extends ArrayBuilder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class UInt16ArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<UInt16ArrayBuilder>;

        // Constructors

        constructor(properties?: Partial<UInt16ArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): UInt16ArrayBuilder;

        // Signals

        connect<K extends keyof UInt16ArrayBuilder.SignalSignatures>(
            signal: K,
            callback: UInt16ArrayBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof UInt16ArrayBuilder.SignalSignatures>(
            signal: K,
            callback: UInt16ArrayBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof UInt16ArrayBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<UInt16ArrayBuilder.SignalSignatures[K]>
        ): void;

        // Methods

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

    namespace UInt16DataType {
        // Signal signatures
        interface SignalSignatures extends IntegerDataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends IntegerDataType.ConstructorProps {}
    }

    class UInt16DataType extends IntegerDataType {
        static $gtype: GObject.GType<UInt16DataType>;

        // Constructors

        constructor(properties?: Partial<UInt16DataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): UInt16DataType;

        // Signals

        connect<K extends keyof UInt16DataType.SignalSignatures>(
            signal: K,
            callback: UInt16DataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof UInt16DataType.SignalSignatures>(
            signal: K,
            callback: UInt16DataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof UInt16DataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<UInt16DataType.SignalSignatures[K]>
        ): void;
    }

    namespace UInt16Scalar {
        // Signal signatures
        interface SignalSignatures extends Scalar.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class UInt16Scalar extends Scalar {
        static $gtype: GObject.GType<UInt16Scalar>;

        // Constructors

        constructor(properties?: Partial<UInt16Scalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): UInt16Scalar;

        // Signals

        connect<K extends keyof UInt16Scalar.SignalSignatures>(
            signal: K,
            callback: UInt16Scalar.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof UInt16Scalar.SignalSignatures>(
            signal: K,
            callback: UInt16Scalar.SignalSignatures[K],
        ): number;
        emit<K extends keyof UInt16Scalar.SignalSignatures>(
            signal: K,
            ...args: Parameters<UInt16Scalar.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(): number;
    }

    namespace UInt32Array {
        // Signal signatures
        interface SignalSignatures extends NumericArray.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends NumericArray.ConstructorProps {}
    }

    class UInt32Array extends NumericArray {
        static $gtype: GObject.GType<UInt32Array>;

        // Constructors

        constructor(properties?: Partial<UInt32Array.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): UInt32Array;

        // Signals

        connect<K extends keyof UInt32Array.SignalSignatures>(
            signal: K,
            callback: UInt32Array.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof UInt32Array.SignalSignatures>(
            signal: K,
            callback: UInt32Array.SignalSignatures[K],
        ): number;
        emit<K extends keyof UInt32Array.SignalSignatures>(
            signal: K,
            ...args: Parameters<UInt32Array.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(i: number): number;
        get_values(): number[];
        sum(): number;
    }

    namespace UInt32ArrayBuilder {
        // Signal signatures
        interface SignalSignatures extends ArrayBuilder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class UInt32ArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<UInt32ArrayBuilder>;

        // Constructors

        constructor(properties?: Partial<UInt32ArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): UInt32ArrayBuilder;

        // Signals

        connect<K extends keyof UInt32ArrayBuilder.SignalSignatures>(
            signal: K,
            callback: UInt32ArrayBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof UInt32ArrayBuilder.SignalSignatures>(
            signal: K,
            callback: UInt32ArrayBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof UInt32ArrayBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<UInt32ArrayBuilder.SignalSignatures[K]>
        ): void;

        // Methods

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

    namespace UInt32DataType {
        // Signal signatures
        interface SignalSignatures extends IntegerDataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends IntegerDataType.ConstructorProps {}
    }

    class UInt32DataType extends IntegerDataType {
        static $gtype: GObject.GType<UInt32DataType>;

        // Constructors

        constructor(properties?: Partial<UInt32DataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): UInt32DataType;

        // Signals

        connect<K extends keyof UInt32DataType.SignalSignatures>(
            signal: K,
            callback: UInt32DataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof UInt32DataType.SignalSignatures>(
            signal: K,
            callback: UInt32DataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof UInt32DataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<UInt32DataType.SignalSignatures[K]>
        ): void;
    }

    namespace UInt32Scalar {
        // Signal signatures
        interface SignalSignatures extends Scalar.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class UInt32Scalar extends Scalar {
        static $gtype: GObject.GType<UInt32Scalar>;

        // Constructors

        constructor(properties?: Partial<UInt32Scalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): UInt32Scalar;

        // Signals

        connect<K extends keyof UInt32Scalar.SignalSignatures>(
            signal: K,
            callback: UInt32Scalar.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof UInt32Scalar.SignalSignatures>(
            signal: K,
            callback: UInt32Scalar.SignalSignatures[K],
        ): number;
        emit<K extends keyof UInt32Scalar.SignalSignatures>(
            signal: K,
            ...args: Parameters<UInt32Scalar.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(): number;
    }

    namespace UInt64Array {
        // Signal signatures
        interface SignalSignatures extends NumericArray.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends NumericArray.ConstructorProps {}
    }

    class UInt64Array extends NumericArray {
        static $gtype: GObject.GType<UInt64Array>;

        // Constructors

        constructor(properties?: Partial<UInt64Array.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): UInt64Array;

        // Signals

        connect<K extends keyof UInt64Array.SignalSignatures>(
            signal: K,
            callback: UInt64Array.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof UInt64Array.SignalSignatures>(
            signal: K,
            callback: UInt64Array.SignalSignatures[K],
        ): number;
        emit<K extends keyof UInt64Array.SignalSignatures>(
            signal: K,
            ...args: Parameters<UInt64Array.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(i: number): number;
        get_values(): number[];
        sum(): number;
    }

    namespace UInt64ArrayBuilder {
        // Signal signatures
        interface SignalSignatures extends ArrayBuilder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class UInt64ArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<UInt64ArrayBuilder>;

        // Constructors

        constructor(properties?: Partial<UInt64ArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): UInt64ArrayBuilder;

        // Signals

        connect<K extends keyof UInt64ArrayBuilder.SignalSignatures>(
            signal: K,
            callback: UInt64ArrayBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof UInt64ArrayBuilder.SignalSignatures>(
            signal: K,
            callback: UInt64ArrayBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof UInt64ArrayBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<UInt64ArrayBuilder.SignalSignatures[K]>
        ): void;

        // Methods

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

    namespace UInt64DataType {
        // Signal signatures
        interface SignalSignatures extends IntegerDataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends IntegerDataType.ConstructorProps {}
    }

    class UInt64DataType extends IntegerDataType {
        static $gtype: GObject.GType<UInt64DataType>;

        // Constructors

        constructor(properties?: Partial<UInt64DataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): UInt64DataType;

        // Signals

        connect<K extends keyof UInt64DataType.SignalSignatures>(
            signal: K,
            callback: UInt64DataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof UInt64DataType.SignalSignatures>(
            signal: K,
            callback: UInt64DataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof UInt64DataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<UInt64DataType.SignalSignatures[K]>
        ): void;
    }

    namespace UInt64Scalar {
        // Signal signatures
        interface SignalSignatures extends Scalar.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class UInt64Scalar extends Scalar {
        static $gtype: GObject.GType<UInt64Scalar>;

        // Constructors

        constructor(properties?: Partial<UInt64Scalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): UInt64Scalar;

        // Signals

        connect<K extends keyof UInt64Scalar.SignalSignatures>(
            signal: K,
            callback: UInt64Scalar.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof UInt64Scalar.SignalSignatures>(
            signal: K,
            callback: UInt64Scalar.SignalSignatures[K],
        ): number;
        emit<K extends keyof UInt64Scalar.SignalSignatures>(
            signal: K,
            ...args: Parameters<UInt64Scalar.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(): number;
    }

    namespace UInt8Array {
        // Signal signatures
        interface SignalSignatures extends NumericArray.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends NumericArray.ConstructorProps {}
    }

    class UInt8Array extends NumericArray {
        static $gtype: GObject.GType<UInt8Array>;

        // Constructors

        constructor(properties?: Partial<UInt8Array.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): UInt8Array;

        // Signals

        connect<K extends keyof UInt8Array.SignalSignatures>(
            signal: K,
            callback: UInt8Array.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof UInt8Array.SignalSignatures>(
            signal: K,
            callback: UInt8Array.SignalSignatures[K],
        ): number;
        emit<K extends keyof UInt8Array.SignalSignatures>(
            signal: K,
            ...args: Parameters<UInt8Array.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(i: number): number;
        get_values(): Uint8Array;
        sum(): number;
    }

    namespace UInt8ArrayBuilder {
        // Signal signatures
        interface SignalSignatures extends ArrayBuilder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class UInt8ArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<UInt8ArrayBuilder>;

        // Constructors

        constructor(properties?: Partial<UInt8ArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): UInt8ArrayBuilder;

        // Signals

        connect<K extends keyof UInt8ArrayBuilder.SignalSignatures>(
            signal: K,
            callback: UInt8ArrayBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof UInt8ArrayBuilder.SignalSignatures>(
            signal: K,
            callback: UInt8ArrayBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof UInt8ArrayBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<UInt8ArrayBuilder.SignalSignatures[K]>
        ): void;

        // Methods

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

    namespace UInt8DataType {
        // Signal signatures
        interface SignalSignatures extends IntegerDataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends IntegerDataType.ConstructorProps {}
    }

    class UInt8DataType extends IntegerDataType {
        static $gtype: GObject.GType<UInt8DataType>;

        // Constructors

        constructor(properties?: Partial<UInt8DataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): UInt8DataType;

        // Signals

        connect<K extends keyof UInt8DataType.SignalSignatures>(
            signal: K,
            callback: UInt8DataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof UInt8DataType.SignalSignatures>(
            signal: K,
            callback: UInt8DataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof UInt8DataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<UInt8DataType.SignalSignatures[K]>
        ): void;
    }

    namespace UInt8Scalar {
        // Signal signatures
        interface SignalSignatures extends Scalar.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {}
    }

    class UInt8Scalar extends Scalar {
        static $gtype: GObject.GType<UInt8Scalar>;

        // Constructors

        constructor(properties?: Partial<UInt8Scalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](value: number): UInt8Scalar;

        // Signals

        connect<K extends keyof UInt8Scalar.SignalSignatures>(
            signal: K,
            callback: UInt8Scalar.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof UInt8Scalar.SignalSignatures>(
            signal: K,
            callback: UInt8Scalar.SignalSignatures[K],
        ): number;
        emit<K extends keyof UInt8Scalar.SignalSignatures>(
            signal: K,
            ...args: Parameters<UInt8Scalar.SignalSignatures[K]>
        ): void;

        // Methods

        get_value(): number;
    }

    namespace UIntArrayBuilder {
        // Signal signatures
        interface SignalSignatures extends ArrayBuilder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    class UIntArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<UIntArrayBuilder>;

        // Constructors

        constructor(properties?: Partial<UIntArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): UIntArrayBuilder;

        // Signals

        connect<K extends keyof UIntArrayBuilder.SignalSignatures>(
            signal: K,
            callback: UIntArrayBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof UIntArrayBuilder.SignalSignatures>(
            signal: K,
            callback: UIntArrayBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof UIntArrayBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<UIntArrayBuilder.SignalSignatures[K]>
        ): void;

        // Methods

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

    namespace UTF8NormalizeOptions {
        // Signal signatures
        interface SignalSignatures extends FunctionOptions.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends FunctionOptions.ConstructorProps {
            form: UTF8NormalizeForm;
        }
    }

    class UTF8NormalizeOptions extends FunctionOptions {
        static $gtype: GObject.GType<UTF8NormalizeOptions>;

        // Properties

        /**
         * The Unicode normalization form to apply.
         */
        get form(): UTF8NormalizeForm;
        set form(val: UTF8NormalizeForm);

        // Constructors

        constructor(properties?: Partial<UTF8NormalizeOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): UTF8NormalizeOptions;

        // Signals

        connect<K extends keyof UTF8NormalizeOptions.SignalSignatures>(
            signal: K,
            callback: UTF8NormalizeOptions.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof UTF8NormalizeOptions.SignalSignatures>(
            signal: K,
            callback: UTF8NormalizeOptions.SignalSignatures[K],
        ): number;
        emit<K extends keyof UTF8NormalizeOptions.SignalSignatures>(
            signal: K,
            ...args: Parameters<UTF8NormalizeOptions.SignalSignatures[K]>
        ): void;
    }

    namespace UnionArray {
        // Signal signatures
        interface SignalSignatures extends Array.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Array.ConstructorProps {
            type_ids: Int8Array;
            typeIds: Int8Array;
        }
    }

    class UnionArray extends Array {
        static $gtype: GObject.GType<UnionArray>;

        // Properties

        get type_ids(): Int8Array;
        get typeIds(): Int8Array;

        // Constructors

        constructor(properties?: Partial<UnionArray.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof UnionArray.SignalSignatures>(
            signal: K,
            callback: UnionArray.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof UnionArray.SignalSignatures>(
            signal: K,
            callback: UnionArray.SignalSignatures[K],
        ): number;
        emit<K extends keyof UnionArray.SignalSignatures>(
            signal: K,
            ...args: Parameters<UnionArray.SignalSignatures[K]>
        ): void;

        // Methods

        get_child_id(i: number): number;
        get_field(i: number): Array | null;
        get_type_code(i: number): number;
    }

    namespace UnionArrayBuilder {
        // Signal signatures
        interface SignalSignatures extends ArrayBuilder.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends ArrayBuilder.ConstructorProps {}
    }

    abstract class UnionArrayBuilder extends ArrayBuilder {
        static $gtype: GObject.GType<UnionArrayBuilder>;

        // Constructors

        constructor(properties?: Partial<UnionArrayBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof UnionArrayBuilder.SignalSignatures>(
            signal: K,
            callback: UnionArrayBuilder.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof UnionArrayBuilder.SignalSignatures>(
            signal: K,
            callback: UnionArrayBuilder.SignalSignatures[K],
        ): number;
        emit<K extends keyof UnionArrayBuilder.SignalSignatures>(
            signal: K,
            ...args: Parameters<UnionArrayBuilder.SignalSignatures[K]>
        ): void;

        // Methods

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

    namespace UnionDataType {
        // Signal signatures
        interface SignalSignatures extends DataType.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends DataType.ConstructorProps {}
    }

    abstract class UnionDataType extends DataType {
        static $gtype: GObject.GType<UnionDataType>;

        // Constructors

        constructor(properties?: Partial<UnionDataType.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof UnionDataType.SignalSignatures>(
            signal: K,
            callback: UnionDataType.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof UnionDataType.SignalSignatures>(
            signal: K,
            callback: UnionDataType.SignalSignatures[K],
        ): number;
        emit<K extends keyof UnionDataType.SignalSignatures>(
            signal: K,
            ...args: Parameters<UnionDataType.SignalSignatures[K]>
        ): void;

        // Methods

        get_field(i: number): Field | null;
        get_fields(): Field[];
        get_n_fields(): number;
        get_type_codes(): Uint8Array;
    }

    namespace UnionScalar {
        // Signal signatures
        interface SignalSignatures extends Scalar.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends Scalar.ConstructorProps {
            value: Scalar;
        }
    }

    abstract class UnionScalar extends Scalar {
        static $gtype: GObject.GType<UnionScalar>;

        // Properties

        /**
         * The value of the scalar.
         */
        set value(val: Scalar);

        // Constructors

        constructor(properties?: Partial<UnionScalar.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof UnionScalar.SignalSignatures>(
            signal: K,
            callback: UnionScalar.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof UnionScalar.SignalSignatures>(
            signal: K,
            callback: UnionScalar.SignalSignatures[K],
        ): number;
        emit<K extends keyof UnionScalar.SignalSignatures>(
            signal: K,
            ...args: Parameters<UnionScalar.SignalSignatures[K]>
        ): void;

        // Methods

        get_type_code(): number;
        get_value(): Scalar;
    }

    namespace VarianceOptions {
        // Signal signatures
        interface SignalSignatures extends FunctionOptions.SignalSignatures {}

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

        // Properties

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

        // Constructors

        constructor(properties?: Partial<VarianceOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): VarianceOptions;

        // Signals

        connect<K extends keyof VarianceOptions.SignalSignatures>(
            signal: K,
            callback: VarianceOptions.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof VarianceOptions.SignalSignatures>(
            signal: K,
            callback: VarianceOptions.SignalSignatures[K],
        ): number;
        emit<K extends keyof VarianceOptions.SignalSignatures>(
            signal: K,
            ...args: Parameters<VarianceOptions.SignalSignatures[K]>
        ): void;
    }

    namespace WriteOptions {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

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

        // Properties

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

        // Constructors

        constructor(properties?: Partial<WriteOptions.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): WriteOptions;

        // Signals

        connect<K extends keyof WriteOptions.SignalSignatures>(
            signal: K,
            callback: WriteOptions.SignalSignatures[K],
        ): number;
        connect_after<K extends keyof WriteOptions.SignalSignatures>(
            signal: K,
            callback: WriteOptions.SignalSignatures[K],
        ): number;
        emit<K extends keyof WriteOptions.SignalSignatures>(
            signal: K,
            ...args: Parameters<WriteOptions.SignalSignatures[K]>
        ): void;
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
    type ISO8601TimestampParserClass = typeof ISO8601TimestampParser;
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
    type SplitPatternOptionsClass = typeof SplitPatternOptions;
    type StrftimeOptionsClass = typeof StrftimeOptions;
    type StringArrayBuilderClass = typeof StringArrayBuilder;
    type StringArrayClass = typeof StringArray;
    type StringDataTypeClass = typeof StringDataType;
    type StringDictionaryArrayBuilderClass = typeof StringDictionaryArrayBuilder;
    type StringScalarClass = typeof StringScalar;
    type StrptimeOptionsClass = typeof StrptimeOptions;
    type StrptimeTimestampParserClass = typeof StrptimeTimestampParser;
    type StructArrayBuilderClass = typeof StructArrayBuilder;
    type StructArrayClass = typeof StructArray;
    type StructDataTypeClass = typeof StructDataType;
    type StructFieldOptionsClass = typeof StructFieldOptions;
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
    type TimestampParserClass = typeof TimestampParser;
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
    namespace File {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface FileNamespace {
        $gtype: GObject.GType<File>;
        prototype: File;
    }
    interface File extends GObject.Object {
        // Methods

        close(): boolean;
        get_mode(): FileMode;
        is_closed(): boolean;
        tell(): number;
    }

    export const File: FileNamespace & {
        new (): File; // This allows `obj instanceof File`
    };

    namespace Readable {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ReadableNamespace {
        $gtype: GObject.GType<Readable>;
        prototype: Readable;
    }
    interface Readable extends GObject.Object {
        // Methods

        read(n_bytes: number): Buffer | null;
        read_bytes(n_bytes: number): GLib.Bytes | null;
    }

    export const Readable: ReadableNamespace & {
        new (): Readable; // This allows `obj instanceof Readable`
    };

    namespace Writable {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface WritableNamespace {
        $gtype: GObject.GType<Writable>;
        prototype: Writable;
    }
    interface Writable extends GObject.Object {
        // Methods

        /**
         * It ensures writing all data on memory to storage.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        flush(): boolean;
        write(data: Uint8Array | string): boolean;
    }

    export const Writable: WritableNamespace & {
        new (): Writable; // This allows `obj instanceof Writable`
    };

    namespace WritableFile {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface WritableFileNamespace {
        $gtype: GObject.GType<WritableFile>;
        prototype: WritableFile;
    }
    interface WritableFile extends GObject.Object {
        // Methods

        write_at(position: number, data: Uint8Array | string): boolean;
    }

    export const WritableFile: WritableFileNamespace & {
        new (): WritableFile; // This allows `obj instanceof WritableFile`
    };

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
