/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './arrow-1.0-ambient.d.ts';
import './arrow-1.0-import.d.ts';
/**
 * Arrow-1.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

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
        // Own fields of Arrow-1.0.Error

        /**
         * Out of memory error.
         */
        OUT_OF_MEMORY: number;
        /**
         * Key error.
         */
        KEY: number;
        /**
         * Type error.
         */
        TYPE: number;
        /**
         * Invalid value error.
         */
        INVALID: number;
        /**
         * IO error.
         */
        IO: number;
        /**
         * Capacity error.
         */
        CAPACITY: number;
        /**
         * Index error.
         */
        INDEX: number;
        /**
         * Unknown error.
         */
        UNKNOWN: number;
        /**
         * The feature is not implemented.
         */
        NOT_IMPLEMENTED: number;
        /**
         * Serialization error.
         */
        SERIALIZATION: number;
        /**
         * Error generating code for expression evaluation
         *   in Gandiva.
         */
        CODE_GENERATION: number;
        /**
         * Validation errors in expression given for code generation.
         */
        EXPRESSION_VALIDATION: number;
        /**
         * Execution error while evaluating the expression against a record batch.
         */
        EXECUTION: number;
        /**
         * Item already exists error.
         */
        ALREADY_EXISTS: number;

        // Constructors of Arrow-1.0.Error

        constructor(options: { message: string; code: number });

        // Owm methods of Arrow-1.0.Error

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
    }

    class AggregateNodeOptions extends ExecuteNodeOptions {
        // Constructors of Arrow-1.0.AggregateNodeOptions

        static ['new'](aggregations: Aggregation[], keys?: string[] | null): AggregateNodeOptions;
    }

    module Aggregation {
        // Constructor properties interface
    }

    class Aggregation extends GObject.Object {
        // Own properties of Arrow-1.0.Aggregation

        /**
         * The function name to aggregate.
         */
        'function': string;
        /**
         * The input field name of aggregate function.
         */
        input: string;
        /**
         * The options of aggregate function.
         */
        options: FunctionOptions;
        /**
         * The output field name of aggregate function.
         */
        output: string;

        // Constructors of Arrow-1.0.Aggregation

        static ['new'](_function: string, options: FunctionOptions | null, input: string, output: string): Aggregation;
    }

    module Array {
        // Constructor properties interface
    }

    abstract class Array extends GObject.Object {
        // Own properties of Arrow-1.0.Array

        array: any;
        buffer1: Buffer;
        buffer2: Buffer;
        null_bitmap: Buffer;
        nullBitmap: Buffer;
        parent: Array;
        value_data_type: DataType;
        valueDataType: DataType;

        // Owm methods of Arrow-1.0.Array

        static ['import'](c_abi_array: any, data_type: DataType): Array | null;

        // Owm methods of Arrow-1.0.Array

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
        ['export'](): boolean;
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
    }

    abstract class ArrayBuilder extends GObject.Object {
        // Own properties of Arrow-1.0.ArrayBuilder

        array_builder: any;
        arrayBuilder: any;

        // Owm methods of Arrow-1.0.ArrayBuilder

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
    }

    class ArrayDatum extends Datum {
        // Own properties of Arrow-1.0.ArrayDatum

        value: Array;

        // Constructors of Arrow-1.0.ArrayDatum

        static ['new'](value: Array): ArrayDatum;
    }

    module ArraySortOptions {
        // Constructor properties interface
    }

    class ArraySortOptions extends FunctionOptions {
        // Own properties of Arrow-1.0.ArraySortOptions

        /**
         * How to order values.
         */
        order: SortOrder;

        // Constructors of Arrow-1.0.ArraySortOptions

        static ['new'](order: SortOrder): ArraySortOptions;

        // Owm methods of Arrow-1.0.ArraySortOptions

        equal(other_options: ArraySortOptions): boolean;
    }

    module BaseBinaryScalar {
        // Constructor properties interface
    }

    abstract class BaseBinaryScalar extends Scalar {
        // Own properties of Arrow-1.0.BaseBinaryScalar

        /**
         * The value of the scalar.
         */
        value: Buffer;

        // Owm methods of Arrow-1.0.BaseBinaryScalar

        get_value(): Buffer;
    }

    module BaseListScalar {
        // Constructor properties interface
    }

    abstract class BaseListScalar extends Scalar {
        // Own properties of Arrow-1.0.BaseListScalar

        /**
         * The value of the scalar.
         */
        value: Array;

        // Owm methods of Arrow-1.0.BaseListScalar

        get_value(): Array;
    }

    module BinaryArray {
        // Constructor properties interface
    }

    class BinaryArray extends Array {
        // Constructors of Arrow-1.0.BinaryArray

        static ['new'](
            length: number,
            value_offsets: Buffer,
            value_data: Buffer,
            null_bitmap: Buffer | null,
            n_nulls: number,
        ): BinaryArray;

        // Owm methods of Arrow-1.0.BinaryArray

        get_buffer(): Buffer;
        get_data_buffer(): Buffer;
        get_offsets_buffer(): Buffer;
        get_value(i: number): GLib.Bytes;
    }

    module BinaryArrayBuilder {
        // Constructor properties interface
    }

    class BinaryArrayBuilder extends ArrayBuilder {
        // Constructors of Arrow-1.0.BinaryArrayBuilder

        static ['new'](): BinaryArrayBuilder;

        // Owm methods of Arrow-1.0.BinaryArrayBuilder

        append(value: Uint8Array): boolean;
        append_value(value: Uint8Array): boolean;
        append_value_bytes(value: GLib.Bytes): boolean;
        /**
         * Append multiple values at once. It's more efficient than multiple
         * `append` and `append_null` calls.
         * @param values The array of #GBytes.
         * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth @is_valids is %TRUE, the Nth @values is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_values(values: GLib.Bytes[], is_valids?: boolean[] | null): boolean;
    }

    module BinaryDataType {
        // Constructor properties interface
    }

    class BinaryDataType extends DataType {
        // Constructors of Arrow-1.0.BinaryDataType

        static ['new'](): BinaryDataType;
    }

    module BinaryDictionaryArrayBuilder {
        // Constructor properties interface
    }

    class BinaryDictionaryArrayBuilder extends ArrayBuilder {
        // Constructors of Arrow-1.0.BinaryDictionaryArrayBuilder

        static ['new'](): BinaryDictionaryArrayBuilder;

        // Owm methods of Arrow-1.0.BinaryDictionaryArrayBuilder

        append_array(array: BinaryArray): boolean;
        /**
         * Append dictionary indices directly without modifying the internal memo.
         * @param values The array of indices.
         * @param is_valids The array of   %TRUE or %FALSE that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_indices(values: number[], is_valids?: boolean[] | null): boolean;
        append_value(value: Uint8Array): boolean;
        append_value_bytes(value: GLib.Bytes): boolean;
        finish_delta(): boolean;
        get_dictionary_length(): number;
        insert_memo_values(values: BinaryArray): boolean;
        /**
         * Reset and also clear accumulated dictionary values in memo table.
         */
        reset_full(): void;
    }

    module BinaryScalar {
        // Constructor properties interface
    }

    class BinaryScalar extends BaseBinaryScalar {
        // Constructors of Arrow-1.0.BinaryScalar

        static ['new'](value: Buffer): BinaryScalar;
    }

    module BooleanArray {
        // Constructor properties interface
    }

    class BooleanArray extends PrimitiveArray {
        // Constructors of Arrow-1.0.BooleanArray

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): BooleanArray;

        // Owm methods of Arrow-1.0.BooleanArray

        and(right: BooleanArray): BooleanArray;
        get_value(i: number): boolean;
        get_values(): boolean[];
        invert(): BooleanArray;
        or(right: BooleanArray): BooleanArray;
        xor(right: BooleanArray): BooleanArray;
    }

    module BooleanArrayBuilder {
        // Constructor properties interface
    }

    class BooleanArrayBuilder extends ArrayBuilder {
        // Constructors of Arrow-1.0.BooleanArrayBuilder

        static ['new'](): BooleanArrayBuilder;

        // Owm methods of Arrow-1.0.BooleanArrayBuilder

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
    }

    class BooleanDataType extends FixedWidthDataType {
        // Constructors of Arrow-1.0.BooleanDataType

        static ['new'](): BooleanDataType;
    }

    module BooleanScalar {
        // Constructor properties interface
    }

    class BooleanScalar extends Scalar {
        // Constructors of Arrow-1.0.BooleanScalar

        static ['new'](value: boolean): BooleanScalar;

        // Owm methods of Arrow-1.0.BooleanScalar

        get_value(): boolean;
    }

    module Buffer {
        // Constructor properties interface
    }

    class Buffer extends GObject.Object {
        // Own properties of Arrow-1.0.Buffer

        buffer: any;
        data: GLib.Bytes;
        parent: Buffer;

        // Constructors of Arrow-1.0.Buffer

        static ['new'](data: Uint8Array): Buffer;

        static new_bytes(data: GLib.Bytes): Buffer;

        // Owm methods of Arrow-1.0.Buffer

        copy(start: number, size: number): Buffer | null;
        equal(other_buffer: Buffer): boolean;
        equal_n_bytes(other_buffer: Buffer, n_bytes: number): boolean;
        get_capacity(): number;
        get_data(): GLib.Bytes;
        get_mutable_data(): GLib.Bytes | null;
        get_parent(): Buffer | null;
        get_size(): number;
        is_mutable(): boolean;
        slice(offset: number, size: number): Buffer;
    }

    module BufferInputStream {
        // Constructor properties interface
    }

    class BufferInputStream extends SeekableInputStream {
        // Own properties of Arrow-1.0.BufferInputStream

        buffer: Buffer;

        // Constructors of Arrow-1.0.BufferInputStream

        static ['new'](buffer: Buffer): BufferInputStream;

        // Owm methods of Arrow-1.0.BufferInputStream

        get_buffer(): Buffer;
    }

    module BufferOutputStream {
        // Constructor properties interface
    }

    /**
     * It wraps `arrow::io::BufferOutputStream`.
     */
    class BufferOutputStream extends OutputStream {
        // Constructors of Arrow-1.0.BufferOutputStream

        static ['new'](buffer: ResizableBuffer): BufferOutputStream;
    }

    module CSVReadOptions {
        // Constructor properties interface
    }

    class CSVReadOptions extends GObject.Object {
        // Own properties of Arrow-1.0.CSVReadOptions

        /**
         * Whether values are allowed to contain CR (0x0d) and LF (0x0a) characters.
         */
        allow_newlines_in_values: boolean;
        /**
         * Whether values are allowed to contain CR (0x0d) and LF (0x0a) characters.
         */
        allowNewlinesInValues: boolean;
        /**
         * Whether string / binary columns can have null values.
         * If %TRUE, then strings in "null_values" are considered null for string columns.
         * If %FALSE, then all strings are valid string values.
         */
        allow_null_strings: boolean;
        /**
         * Whether string / binary columns can have null values.
         * If %TRUE, then strings in "null_values" are considered null for string columns.
         * If %FALSE, then all strings are valid string values.
         */
        allowNullStrings: boolean;
        /**
         * Block size we request from the IO layer; also determines the size
         * of chunks when #GArrowCSVReadOptions:use-threads is %TRUE.
         */
        block_size: number;
        /**
         * Block size we request from the IO layer; also determines the size
         * of chunks when #GArrowCSVReadOptions:use-threads is %TRUE.
         */
        blockSize: number;
        /**
         * Whether to check UTF8 validity of string columns.
         */
        check_utf8: boolean;
        /**
         * Whether to check UTF8 validity of string columns.
         */
        checkUtf8: boolean;
        /**
         * Field delimiter character.
         */
        delimiter: number;
        /**
         * Escaping character. This is used only when
         * #GArrowCSVReadOptions:is-escaped is %TRUE.
         */
        escape_character: number;
        /**
         * Escaping character. This is used only when
         * #GArrowCSVReadOptions:is-escaped is %TRUE.
         */
        escapeCharacter: number;
        generate_column_names: boolean;
        generateColumnNames: boolean;
        /**
         * Whether empty lines are ignored. If %FALSE, an empty line
         * represents a simple empty value (assuming a one-column CSV file).
         */
        ignore_empty_lines: boolean;
        /**
         * Whether empty lines are ignored. If %FALSE, an empty line
         * represents a simple empty value (assuming a one-column CSV file).
         */
        ignoreEmptyLines: boolean;
        /**
         * Whether a quote inside a value is double quoted.
         */
        is_double_quoted: boolean;
        /**
         * Whether a quote inside a value is double quoted.
         */
        isDoubleQuoted: boolean;
        /**
         * Whether escaping is used.
         */
        is_escaped: boolean;
        /**
         * Whether escaping is used.
         */
        isEscaped: boolean;
        /**
         * Whether quoting is used.
         */
        is_quoted: boolean;
        /**
         * Whether quoting is used.
         */
        isQuoted: boolean;
        /**
         * The number of header rows to skip (not including
         * the row of column names, if any)
         */
        n_skip_rows: number;
        /**
         * The number of header rows to skip (not including
         * the row of column names, if any)
         */
        nSkipRows: number;
        /**
         * Quoting character. This is used only when
         * #GArrowCSVReadOptions:is-quoted is %TRUE.
         */
        quote_character: number;
        /**
         * Quoting character. This is used only when
         * #GArrowCSVReadOptions:is-quoted is %TRUE.
         */
        quoteCharacter: number;
        /**
         * Whether to use the global CPU thread pool.
         */
        use_threads: boolean;
        /**
         * Whether to use the global CPU thread pool.
         */
        useThreads: boolean;

        // Constructors of Arrow-1.0.CSVReadOptions

        static ['new'](): CSVReadOptions;

        // Owm methods of Arrow-1.0.CSVReadOptions

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
    }

    class CSVReader extends GObject.Object {
        // Own properties of Arrow-1.0.CSVReader

        csv_table_reader: any;
        csvTableReader: any;
        input: InputStream;

        // Constructors of Arrow-1.0.CSVReader

        static ['new'](input: InputStream, options?: CSVReadOptions | null): CSVReader;

        // Owm methods of Arrow-1.0.CSVReader

        read(): Table | null;
    }

    module CallExpression {
        // Constructor properties interface
    }

    class CallExpression extends Expression {
        // Constructors of Arrow-1.0.CallExpression

        static ['new'](_function: string, _arguments: Expression[], options?: FunctionOptions | null): CallExpression;
    }

    module CastOptions {
        // Constructor properties interface
    }

    class CastOptions extends FunctionOptions {
        // Own properties of Arrow-1.0.CastOptions

        /**
         * Whether truncating decimal value is allowed or not.
         */
        allow_decimal_truncate: boolean;
        /**
         * Whether truncating decimal value is allowed or not.
         */
        allowDecimalTruncate: boolean;
        /**
         * Whether truncating float value is allowed or not.
         */
        allow_float_truncate: boolean;
        /**
         * Whether truncating float value is allowed or not.
         */
        allowFloatTruncate: boolean;
        /**
         * Whether integer overflow is allowed or not.
         */
        allow_int_overflow: boolean;
        /**
         * Whether integer overflow is allowed or not.
         */
        allowIntOverflow: boolean;
        /**
         * Whether invalid UTF-8 string value is allowed or not.
         */
        allow_invalid_utf8: boolean;
        /**
         * Whether invalid UTF-8 string value is allowed or not.
         */
        allowInvalidUtf8: boolean;
        /**
         * Whether time overflow is allowed or not.
         */
        allow_time_overflow: boolean;
        /**
         * Whether time overflow is allowed or not.
         */
        allowTimeOverflow: boolean;
        /**
         * Whether truncating time value is allowed or not.
         */
        allow_time_truncate: boolean;
        /**
         * Whether truncating time value is allowed or not.
         */
        allowTimeTruncate: boolean;
        /**
         * The #GArrowDataType being casted to.
         */
        to_data_type: DataType;
        /**
         * The #GArrowDataType being casted to.
         */
        toDataType: DataType;

        // Constructors of Arrow-1.0.CastOptions

        static ['new'](): CastOptions;
    }

    module ChunkedArray {
        // Constructor properties interface
    }

    class ChunkedArray extends GObject.Object {
        // Own properties of Arrow-1.0.ChunkedArray

        chunked_array: any;
        chunkedArray: any;

        // Constructors of Arrow-1.0.ChunkedArray

        static ['new'](chunks: Array[]): ChunkedArray;

        // Owm methods of Arrow-1.0.ChunkedArray

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
    }

    class ChunkedArrayDatum extends Datum {
        // Own properties of Arrow-1.0.ChunkedArrayDatum

        value: ChunkedArray;

        // Constructors of Arrow-1.0.ChunkedArrayDatum

        static ['new'](value: ChunkedArray): ChunkedArrayDatum;
    }

    module Codec {
        // Constructor properties interface
    }

    class Codec extends GObject.Object {
        // Own properties of Arrow-1.0.Codec

        codec: any;

        // Constructors of Arrow-1.0.Codec

        static ['new'](type: CompressionType): Codec;

        // Owm methods of Arrow-1.0.Codec

        get_compression_level(): number;
        get_compression_type(): CompressionType;
        get_name(): string;
    }

    module CompressedInputStream {
        // Constructor properties interface
    }

    class CompressedInputStream extends InputStream {
        // Own properties of Arrow-1.0.CompressedInputStream

        codec: Codec;
        raw: InputStream;

        // Constructors of Arrow-1.0.CompressedInputStream

        static ['new'](codec: Codec, raw: InputStream): CompressedInputStream;
    }

    module CompressedOutputStream {
        // Constructor properties interface
    }

    class CompressedOutputStream extends OutputStream {
        // Own properties of Arrow-1.0.CompressedOutputStream

        codec: Codec;
        raw: OutputStream;

        // Constructors of Arrow-1.0.CompressedOutputStream

        static ['new'](codec: Codec, raw: OutputStream): CompressedOutputStream;
    }

    module CountOptions {
        // Constructor properties interface
    }

    class CountOptions extends FunctionOptions {
        // Own properties of Arrow-1.0.CountOptions

        mode: CountMode;

        // Constructors of Arrow-1.0.CountOptions

        static ['new'](): CountOptions;
    }

    module DataType {
        // Constructor properties interface
    }

    abstract class DataType extends GObject.Object {
        // Own properties of Arrow-1.0.DataType

        data_type: any;
        dataType: any;

        // Owm methods of Arrow-1.0.DataType

        static ['import'](c_abi_schema: any): DataType | null;

        // Owm methods of Arrow-1.0.DataType

        equal(other_data_type: DataType): boolean;
        ['export'](): any | null;
        get_id(): Type;
        get_name(): string;
        to_string(): string;
    }

    module Date32Array {
        // Constructor properties interface
    }

    class Date32Array extends NumericArray {
        // Constructors of Arrow-1.0.Date32Array

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): Date32Array;

        // Owm methods of Arrow-1.0.Date32Array

        get_value(i: number): number;
        get_values(): number[];
    }

    module Date32ArrayBuilder {
        // Constructor properties interface
    }

    class Date32ArrayBuilder extends ArrayBuilder {
        // Constructors of Arrow-1.0.Date32ArrayBuilder

        static ['new'](): Date32ArrayBuilder;

        // Owm methods of Arrow-1.0.Date32ArrayBuilder

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
    }

    class Date32DataType extends TemporalDataType {
        // Constructors of Arrow-1.0.Date32DataType

        static ['new'](): Date32DataType;
    }

    module Date32Scalar {
        // Constructor properties interface
    }

    class Date32Scalar extends Scalar {
        // Constructors of Arrow-1.0.Date32Scalar

        static ['new'](value: number): Date32Scalar;

        // Owm methods of Arrow-1.0.Date32Scalar

        get_value(): number;
    }

    module Date64Array {
        // Constructor properties interface
    }

    class Date64Array extends NumericArray {
        // Constructors of Arrow-1.0.Date64Array

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): Date64Array;

        // Owm methods of Arrow-1.0.Date64Array

        get_value(i: number): number;
        get_values(): number[];
    }

    module Date64ArrayBuilder {
        // Constructor properties interface
    }

    class Date64ArrayBuilder extends ArrayBuilder {
        // Constructors of Arrow-1.0.Date64ArrayBuilder

        static ['new'](): Date64ArrayBuilder;

        // Owm methods of Arrow-1.0.Date64ArrayBuilder

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
    }

    class Date64DataType extends TemporalDataType {
        // Constructors of Arrow-1.0.Date64DataType

        static ['new'](): Date64DataType;
    }

    module Date64Scalar {
        // Constructor properties interface
    }

    class Date64Scalar extends Scalar {
        // Constructors of Arrow-1.0.Date64Scalar

        static ['new'](value: number): Date64Scalar;

        // Owm methods of Arrow-1.0.Date64Scalar

        get_value(): number;
    }

    module Datum {
        // Constructor properties interface
    }

    abstract class Datum extends GObject.Object {
        // Own properties of Arrow-1.0.Datum

        datum: any;

        // Owm methods of Arrow-1.0.Datum

        equal(other_datum: Datum): boolean;
        is_array(): boolean;
        is_array_like(): boolean;
        is_scalar(): boolean;
        is_value(): boolean;
        to_string(): string;
    }

    module DayTimeIntervalDataType {
        // Constructor properties interface
    }

    class DayTimeIntervalDataType extends IntervalDataType {
        // Constructors of Arrow-1.0.DayTimeIntervalDataType

        static ['new'](): DayTimeIntervalDataType;
    }

    module Decimal128 {
        // Constructor properties interface
    }

    class Decimal128 extends GObject.Object {
        // Own properties of Arrow-1.0.Decimal128

        decimal128: any;

        // Constructors of Arrow-1.0.Decimal128

        static new_integer(data: number): Decimal128;

        static new_string(data: string): Decimal128;

        // Owm methods of Arrow-1.0.Decimal128

        /**
         * Computes the absolute value of the `decimal` destructively.
         */
        abs(): void;
        copy(): Decimal128;
        divide(right: Decimal128): Decimal128 | null;
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
    }

    class Decimal128Array extends FixedSizeBinaryArray {
        // Owm methods of Arrow-1.0.Decimal128Array

        format_value(i: number): string;
        get_value(i: number): Decimal128;
    }

    module Decimal128ArrayBuilder {
        // Constructor properties interface
    }

    class Decimal128ArrayBuilder extends FixedSizeBinaryArrayBuilder {
        // Constructors of Arrow-1.0.Decimal128ArrayBuilder

        static ['new'](data_type: Decimal128DataType): Decimal128ArrayBuilder;

        // Owm methods of Arrow-1.0.Decimal128ArrayBuilder

        append(value: Decimal128): boolean;
        append_value(value?: Decimal128 | null): boolean;
        /**
         * Append multiple values at once. It's more efficient than multiple
         * `append` and `append_null` calls.
         * @param values The array of #GArrowDecimal128.
         * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth @is_valids is %TRUE, the Nth @values is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_values(values: Decimal128[], is_valids?: boolean[] | null): boolean;
    }

    module Decimal128DataType {
        // Constructor properties interface
    }

    class Decimal128DataType extends DecimalDataType {
        // Constructors of Arrow-1.0.Decimal128DataType

        static ['new'](precision: number, scale: number): Decimal128DataType;

        // Owm methods of Arrow-1.0.Decimal128DataType

        static max_precision(): number;
    }

    module Decimal128Scalar {
        // Constructor properties interface
    }

    class Decimal128Scalar extends Scalar {
        // Own properties of Arrow-1.0.Decimal128Scalar

        /**
         * The value of the scalar.
         */
        value: Decimal128;

        // Constructors of Arrow-1.0.Decimal128Scalar

        static ['new'](data_type: Decimal128DataType, value: Decimal128): Decimal128Scalar;

        // Owm methods of Arrow-1.0.Decimal128Scalar

        get_value(): Decimal128;
    }

    module Decimal256 {
        // Constructor properties interface
    }

    class Decimal256 extends GObject.Object {
        // Own properties of Arrow-1.0.Decimal256

        decimal256: any;

        // Constructors of Arrow-1.0.Decimal256

        static new_integer(data: number): Decimal256;

        static new_string(data: string): Decimal256;

        // Owm methods of Arrow-1.0.Decimal256

        /**
         * Computes the absolute value of the `decimal` destructively.
         */
        abs(): void;
        copy(): Decimal256;
        divide(right: Decimal256): Decimal256 | null;
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
    }

    class Decimal256Array extends FixedSizeBinaryArray {
        // Owm methods of Arrow-1.0.Decimal256Array

        format_value(i: number): string;
        get_value(i: number): Decimal256;
    }

    module Decimal256ArrayBuilder {
        // Constructor properties interface
    }

    class Decimal256ArrayBuilder extends FixedSizeBinaryArrayBuilder {
        // Constructors of Arrow-1.0.Decimal256ArrayBuilder

        static ['new'](data_type: Decimal256DataType): Decimal256ArrayBuilder;

        // Owm methods of Arrow-1.0.Decimal256ArrayBuilder

        append_value(value?: Decimal256 | null): boolean;
        /**
         * Append multiple values at once. It's more efficient than multiple
         * `append` and `append_null` calls.
         * @param values The array of #GArrowDecimal256.
         * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth @is_valids is %TRUE, the Nth @values is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_values(values: Decimal256[], is_valids?: boolean[] | null): boolean;
    }

    module Decimal256DataType {
        // Constructor properties interface
    }

    class Decimal256DataType extends DecimalDataType {
        // Constructors of Arrow-1.0.Decimal256DataType

        static ['new'](precision: number, scale: number): Decimal256DataType;

        // Owm methods of Arrow-1.0.Decimal256DataType

        static max_precision(): number;
    }

    module Decimal256Scalar {
        // Constructor properties interface
    }

    class Decimal256Scalar extends Scalar {
        // Own properties of Arrow-1.0.Decimal256Scalar

        /**
         * The value of the scalar.
         */
        value: Decimal256;

        // Constructors of Arrow-1.0.Decimal256Scalar

        static ['new'](data_type: Decimal256DataType, value: Decimal256): Decimal256Scalar;

        // Owm methods of Arrow-1.0.Decimal256Scalar

        get_value(): Decimal256;
    }

    module DecimalDataType {
        // Constructor properties interface
    }

    abstract class DecimalDataType extends FixedSizeBinaryDataType {
        // Constructors of Arrow-1.0.DecimalDataType

        static ['new'](precision: number, scale: number): DecimalDataType;

        // Owm methods of Arrow-1.0.DecimalDataType

        get_precision(): number;
        get_scale(): number;
    }

    module DenseUnionArray {
        // Constructor properties interface
    }

    class DenseUnionArray extends UnionArray {
        // Own properties of Arrow-1.0.DenseUnionArray

        value_offsets: Int32Array;
        valueOffsets: Int32Array;

        // Constructors of Arrow-1.0.DenseUnionArray

        static ['new'](type_ids: Int8Array, value_offsets: Int32Array, fields: Array[]): DenseUnionArray;

        static new_data_type(
            data_type: DenseUnionDataType,
            type_ids: Int8Array,
            value_offsets: Int32Array,
            fields: Array[],
        ): DenseUnionArray;
    }

    module DenseUnionDataType {
        // Constructor properties interface
    }

    class DenseUnionDataType extends UnionDataType {
        // Constructors of Arrow-1.0.DenseUnionDataType

        static ['new'](fields: Field[], type_codes: Uint8Array): DenseUnionDataType;
    }

    module DenseUnionScalar {
        // Constructor properties interface
    }

    class DenseUnionScalar extends UnionScalar {
        // Constructors of Arrow-1.0.DenseUnionScalar

        static ['new'](data_type: DenseUnionDataType, type_code: number, value: Scalar): DenseUnionScalar;
    }

    module DictionaryArray {
        // Constructor properties interface
    }

    class DictionaryArray extends Array {
        // Own properties of Arrow-1.0.DictionaryArray

        dictionary: Array;
        indices: Array;

        // Constructors of Arrow-1.0.DictionaryArray

        static ['new'](data_type: DataType, indices: Array, dictionary: Array): DictionaryArray;

        // Owm methods of Arrow-1.0.DictionaryArray

        get_dictionary(): Array;
        get_dictionary_data_type(): DictionaryDataType;
        get_indices(): Array;
    }

    module DictionaryDataType {
        // Constructor properties interface
    }

    class DictionaryDataType extends FixedWidthDataType {
        // Constructors of Arrow-1.0.DictionaryDataType

        static ['new'](index_data_type: DataType, value_data_type: DataType, ordered: boolean): DictionaryDataType;

        // Owm methods of Arrow-1.0.DictionaryDataType

        get_index_data_type(): DataType;
        get_value_data_type(): DataType;
        is_ordered(): boolean;
    }

    module DoubleArray {
        // Constructor properties interface
    }

    class DoubleArray extends NumericArray {
        // Constructors of Arrow-1.0.DoubleArray

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): DoubleArray;

        // Owm methods of Arrow-1.0.DoubleArray

        get_value(i: number): number;
        get_values(): number[];
        sum(): number;
    }

    module DoubleArrayBuilder {
        // Constructor properties interface
    }

    class DoubleArrayBuilder extends ArrayBuilder {
        // Constructors of Arrow-1.0.DoubleArrayBuilder

        static ['new'](): DoubleArrayBuilder;

        // Owm methods of Arrow-1.0.DoubleArrayBuilder

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
    }

    class DoubleDataType extends FloatingPointDataType {
        // Constructors of Arrow-1.0.DoubleDataType

        static ['new'](): DoubleDataType;
    }

    module DoubleScalar {
        // Constructor properties interface
    }

    class DoubleScalar extends Scalar {
        // Constructors of Arrow-1.0.DoubleScalar

        static ['new'](value: number): DoubleScalar;

        // Owm methods of Arrow-1.0.DoubleScalar

        get_value(): number;
    }

    module EqualOptions {
        // Constructor properties interface
    }

    class EqualOptions extends GObject.Object {
        // Own properties of Arrow-1.0.EqualOptions

        /**
         * The absolute tolerance for approximate comparison of
         * floating-point values.
         */
        absolute_tolerance: number;
        /**
         * The absolute tolerance for approximate comparison of
         * floating-point values.
         */
        absoluteTolerance: number;
        /**
         * Whether or not approximate comparison is used.
         */
        approx: boolean;
        /**
         * Whether or not NaNs are considered equal.
         */
        nans_equal: boolean;
        /**
         * Whether or not NaNs are considered equal.
         */
        nansEqual: boolean;

        // Constructors of Arrow-1.0.EqualOptions

        static ['new'](): EqualOptions;

        // Owm methods of Arrow-1.0.EqualOptions

        is_approx(): boolean;
    }

    module ExecuteContext {
        // Constructor properties interface
    }

    class ExecuteContext extends GObject.Object {
        // Constructors of Arrow-1.0.ExecuteContext

        static ['new'](): ExecuteContext;
    }

    module ExecuteNode {
        // Constructor properties interface
    }

    class ExecuteNode extends GObject.Object {
        // Own properties of Arrow-1.0.ExecuteNode

        node: any;

        // Owm methods of Arrow-1.0.ExecuteNode

        get_kind_name(): string;
        get_output_schema(): Schema;
    }

    module ExecuteNodeOptions {
        // Constructor properties interface
    }

    class ExecuteNodeOptions extends GObject.Object {
        // Own properties of Arrow-1.0.ExecuteNodeOptions

        options: any;
    }

    module ExecutePlan {
        // Constructor properties interface
    }

    class ExecutePlan extends GObject.Object {
        // Own properties of Arrow-1.0.ExecutePlan

        plan: any;

        // Constructors of Arrow-1.0.ExecutePlan

        static ['new'](): ExecutePlan;

        // Owm methods of Arrow-1.0.ExecutePlan

        /**
         * This is a shortcut of garrow_execute_plan_build_node() for aggregate
         * node.
         * @param input A #GArrowExecuteNode.
         * @param options A #GArrowAggregateNodeOptions.
         * @returns A newly built and added #GArrowExecuteNode   for aggregation on success, %NULL on error.
         */
        build_aggregate_node(input: ExecuteNode, options: AggregateNodeOptions): ExecuteNode;
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
        /**
         * Starts this plan.
         * @returns %TRUE on success, %FALSE on error.
         */
        start(): boolean;
        /**
         * Stops this plan.
         */
        stop(): void;
        validate(): boolean;
        /**
         * Waits for finishing this plan.
         */
        wait(): void;
    }

    module Expression {
        // Constructor properties interface
    }

    abstract class Expression extends GObject.Object {
        // Owm methods of Arrow-1.0.Expression

        equal(other_expression: Expression): boolean;
        to_string(): string;
    }

    module ExtensionArray {
        // Constructor properties interface
    }

    class ExtensionArray extends Array {
        // Own properties of Arrow-1.0.ExtensionArray

        storage: Array;

        // Owm methods of Arrow-1.0.ExtensionArray

        get_storage(): Array;
    }

    module ExtensionDataType {
        // Constructor properties interface
    }

    class ExtensionDataType extends DataType {
        // Own properties of Arrow-1.0.ExtensionDataType

        storage_data_type: DataType;
        storageDataType: DataType;

        // Owm methods of Arrow-1.0.ExtensionDataType

        get_extension_name(): string;
        wrap_array(storage: Array): ExtensionArray;
        wrap_chunked_array(storage: ChunkedArray): ChunkedArray;
    }

    module ExtensionDataTypeRegistry {
        // Constructor properties interface
    }

    class ExtensionDataTypeRegistry extends GObject.Object {
        // Own properties of Arrow-1.0.ExtensionDataTypeRegistry

        registry: any;

        // Owm methods of Arrow-1.0.ExtensionDataTypeRegistry

        static ['default'](): ExtensionDataTypeRegistry;

        // Owm methods of Arrow-1.0.ExtensionDataTypeRegistry

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
    }

    class ExtensionScalar extends Scalar {}

    module FeatherFileReader {
        // Constructor properties interface
    }

    class FeatherFileReader extends GObject.Object {
        // Own properties of Arrow-1.0.FeatherFileReader

        feather_reader: any;
        featherReader: any;

        // Constructors of Arrow-1.0.FeatherFileReader

        static ['new'](file: SeekableInputStream): FeatherFileReader;

        // Owm methods of Arrow-1.0.FeatherFileReader

        get_version(): number;
        read(): Table;
        read_indices(indices: number[]): Table;
        read_names(names: string[]): Table;
    }

    module FeatherWriteProperties {
        // Constructor properties interface
    }

    class FeatherWriteProperties extends GObject.Object {
        // Own properties of Arrow-1.0.FeatherWriteProperties

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
        compression: CompressionType;

        // Constructors of Arrow-1.0.FeatherWriteProperties

        static ['new'](): FeatherWriteProperties;
    }

    module Field {
        // Constructor properties interface
    }

    class Field extends GObject.Object {
        // Own properties of Arrow-1.0.Field

        data_type: DataType;
        dataType: DataType;
        field: any;

        // Constructors of Arrow-1.0.Field

        static ['new'](name: string, data_type: DataType): Field;

        static new_full(name: string, data_type: DataType, nullable: boolean): Field;

        // Owm methods of Arrow-1.0.Field

        static ['import'](c_abi_schema: any): Field | null;

        // Owm methods of Arrow-1.0.Field

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
        with_merged_metadata(metadata: GLib.HashTable<string, string>): Field;
        with_metadata(metadata: GLib.HashTable<string, string>): Field;
    }

    module FieldExpression {
        // Constructor properties interface
    }

    class FieldExpression extends Expression {
        // Constructors of Arrow-1.0.FieldExpression

        static ['new'](reference: string): FieldExpression;
    }

    module FileInfo {
        // Constructor properties interface
    }

    class FileInfo extends GObject.Object {
        // Own properties of Arrow-1.0.FileInfo

        /**
         * The file base name (component after the last directory separator).
         */
        readonly base_name: string;
        /**
         * The file base name (component after the last directory separator).
         */
        readonly baseName: string;
        /**
         * The directory base name (component before the file base name).
         */
        readonly dir_name: string;
        /**
         * The directory base name (component before the file base name).
         */
        readonly dirName: string;
        /**
         * The file extension (excluding the dot).
         */
        readonly extension: string;
        /**
         * The time of last modification, if available.
         */
        mtime: number;
        /**
         * The full file path in the file system.
         */
        path: string;
        /**
         * The size in bytes, if available
         * Only regular files are guaranteed to have a size.
         */
        size: number;
        /**
         * The type of the entry.
         */
        type: FileType;

        // Constructors of Arrow-1.0.FileInfo

        static ['new'](): FileInfo;

        // Owm methods of Arrow-1.0.FileInfo

        equal(other_file_info: FileInfo): boolean;
        is_dir(): boolean;
        is_file(): boolean;
        to_string(): string;
    }

    module FileInputStream {
        // Constructor properties interface
    }

    class FileInputStream extends SeekableInputStream {
        // Constructors of Arrow-1.0.FileInputStream

        static ['new'](path: string): FileInputStream;

        static new_file_descriptor(file_descriptor: number): FileInputStream;

        // Owm methods of Arrow-1.0.FileInputStream

        get_file_descriptor(): number;
    }

    module FileOutputStream {
        // Constructor properties interface
    }

    /**
     * It wraps `arrow::io::FileOutputStream`.
     */
    class FileOutputStream extends OutputStream {
        // Constructors of Arrow-1.0.FileOutputStream

        static ['new'](path: string, append: boolean): FileOutputStream;
    }

    module FileSelector {
        // Constructor properties interface
    }

    class FileSelector extends GObject.Object {
        // Own properties of Arrow-1.0.FileSelector

        /**
         * The behavior if `base_dir` isn't found in the file system.
         * If false, an error is returned.  If true, an empty selection is returned.
         */
        allow_not_found: boolean;
        /**
         * The behavior if `base_dir` isn't found in the file system.
         * If false, an error is returned.  If true, an empty selection is returned.
         */
        allowNotFound: boolean;
        /**
         * The directory in which to select files.
         * If the path exists but doesn't point to a directory, this should
         * be an error.
         */
        base_dir: string;
        /**
         * The directory in which to select files.
         * If the path exists but doesn't point to a directory, this should
         * be an error.
         */
        baseDir: string;
        /**
         * The maximum number of subdirectories to recurse into.
         */
        max_recursion: number;
        /**
         * The maximum number of subdirectories to recurse into.
         */
        maxRecursion: number;
        /**
         * Whether to recurse into subdirectories.
         */
        recursive: boolean;
    }

    module FileSystem {
        // Constructor properties interface
    }

    abstract class FileSystem extends GObject.Object {
        // Own properties of Arrow-1.0.FileSystem

        file_system: any;
        fileSystem: any;

        // Owm methods of Arrow-1.0.FileSystem

        /**
         * This is a factory function to create a specific #GArrowFileSystem
         * object.
         * @param uri An URI to specify file system with options. If you only have an   absolute path, g_filename_to_uri() will help you.
         */
        static create(uri: string): FileSystem | null;

        // Owm methods of Arrow-1.0.FileSystem

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

    module FilterOptions {
        // Constructor properties interface
    }

    class FilterOptions extends FunctionOptions {
        // Own properties of Arrow-1.0.FilterOptions

        /**
         * How to handle filtered values.
         */
        null_selection_behavior: FilterNullSelectionBehavior;
        /**
         * How to handle filtered values.
         */
        nullSelectionBehavior: FilterNullSelectionBehavior;

        // Constructors of Arrow-1.0.FilterOptions

        static ['new'](): FilterOptions;
    }

    module FixedSizeBinaryArray {
        // Constructor properties interface
    }

    class FixedSizeBinaryArray extends PrimitiveArray {
        // Constructors of Arrow-1.0.FixedSizeBinaryArray

        static ['new'](
            data_type: FixedSizeBinaryDataType,
            length: number,
            data: Buffer,
            null_bitmap: Buffer | null,
            n_nulls: number,
        ): FixedSizeBinaryArray;

        // Owm methods of Arrow-1.0.FixedSizeBinaryArray

        get_byte_width(): number;
        get_value(i: number): GLib.Bytes;
        get_values_bytes(): GLib.Bytes;
    }

    module FixedSizeBinaryArrayBuilder {
        // Constructor properties interface
    }

    class FixedSizeBinaryArrayBuilder extends ArrayBuilder {
        // Constructors of Arrow-1.0.FixedSizeBinaryArrayBuilder

        static ['new'](data_type: FixedSizeBinaryDataType): FixedSizeBinaryArrayBuilder;

        // Owm methods of Arrow-1.0.FixedSizeBinaryArrayBuilder

        append_value(value?: Uint8Array | null): boolean;
        append_value_bytes(value: GLib.Bytes): boolean;
        /**
         * Append multiple values at once. It's more efficient than multiple
         * `append` and `append_null` calls.
         * @param values The array of #GBytes.
         * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth @is_valids is %TRUE, the Nth @values is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_values(values: GLib.Bytes[], is_valids?: boolean[] | null): boolean;
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
        append_values_packed(values: GLib.Bytes, is_valids?: boolean[] | null): boolean;
    }

    module FixedSizeBinaryDataType {
        // Constructor properties interface
    }

    class FixedSizeBinaryDataType extends FixedWidthDataType {
        // Constructors of Arrow-1.0.FixedSizeBinaryDataType

        static ['new'](byte_width: number): FixedSizeBinaryDataType;

        // Owm methods of Arrow-1.0.FixedSizeBinaryDataType

        get_byte_width(): number;
    }

    module FixedSizeBinaryScalar {
        // Constructor properties interface
    }

    class FixedSizeBinaryScalar extends BaseBinaryScalar {
        // Constructors of Arrow-1.0.FixedSizeBinaryScalar

        static ['new'](data_type: FixedSizeBinaryDataType, value: Buffer): FixedSizeBinaryScalar;
    }

    module FixedWidthDataType {
        // Constructor properties interface
    }

    abstract class FixedWidthDataType extends DataType {
        // Owm methods of Arrow-1.0.FixedWidthDataType

        get_bit_width(): number;
    }

    module FloatArray {
        // Constructor properties interface
    }

    class FloatArray extends NumericArray {
        // Constructors of Arrow-1.0.FloatArray

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): FloatArray;

        // Owm methods of Arrow-1.0.FloatArray

        get_value(i: number): number;
        get_values(): number[];
        sum(): number;
    }

    module FloatArrayBuilder {
        // Constructor properties interface
    }

    class FloatArrayBuilder extends ArrayBuilder {
        // Constructors of Arrow-1.0.FloatArrayBuilder

        static ['new'](): FloatArrayBuilder;

        // Owm methods of Arrow-1.0.FloatArrayBuilder

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
    }

    class FloatDataType extends FloatingPointDataType {
        // Constructors of Arrow-1.0.FloatDataType

        static ['new'](): FloatDataType;
    }

    module FloatScalar {
        // Constructor properties interface
    }

    class FloatScalar extends Scalar {
        // Constructors of Arrow-1.0.FloatScalar

        static ['new'](value: number): FloatScalar;

        // Owm methods of Arrow-1.0.FloatScalar

        get_value(): number;
    }

    module FloatingPointDataType {
        // Constructor properties interface
    }

    abstract class FloatingPointDataType extends NumericDataType {}

    module Function {
        // Constructor properties interface
    }

    class Function extends GObject.Object {
        // Own properties of Arrow-1.0.Function

        'function': any;

        // Owm methods of Arrow-1.0.Function

        static all(): Function[];
        static find(name: string): Function;

        // Owm methods of Arrow-1.0.Function

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
    }

    class FunctionDoc extends GObject.Object {
        // Own properties of Arrow-1.0.FunctionDoc

        doc: any;

        // Owm methods of Arrow-1.0.FunctionDoc

        get_arg_names(): string[];
        get_description(): string;
        get_options_class_name(): string;
        get_summary(): string;
    }

    module FunctionOptions {
        // Constructor properties interface
    }

    class FunctionOptions extends GObject.Object {
        // Owm methods of Arrow-1.0.FunctionOptions

        equal(other_options?: FunctionOptions | null): boolean;
        to_string(): string;
    }

    module GIOInputStream {
        // Constructor properties interface
    }

    /**
     * It's an input stream for `GInputStream`.
     */
    class GIOInputStream extends SeekableInputStream {
        // Own properties of Arrow-1.0.GIOInputStream

        raw: Gio.InputStream;

        // Constructors of Arrow-1.0.GIOInputStream

        static ['new'](gio_input_stream: Gio.InputStream): GIOInputStream;

        // Owm methods of Arrow-1.0.GIOInputStream

        get_raw(): Gio.InputStream;
    }

    module GIOOutputStream {
        // Constructor properties interface
    }

    /**
     * It's an output stream for `GOutputStream`.
     */
    class GIOOutputStream extends OutputStream {
        // Own properties of Arrow-1.0.GIOOutputStream

        raw: Gio.OutputStream;

        // Constructors of Arrow-1.0.GIOOutputStream

        static ['new'](gio_output_stream: Gio.OutputStream): GIOOutputStream;

        // Owm methods of Arrow-1.0.GIOOutputStream

        get_raw(): Gio.OutputStream;
    }

    module HDFSFileSystem {
        // Constructor properties interface
    }

    class HDFSFileSystem extends FileSystem {}

    module HashJoinNodeOptions {
        // Constructor properties interface
    }

    class HashJoinNodeOptions extends ExecuteNodeOptions {
        // Constructors of Arrow-1.0.HashJoinNodeOptions

        static ['new'](type: JoinType, left_keys: string[], right_keys: string[]): HashJoinNodeOptions;

        // Owm methods of Arrow-1.0.HashJoinNodeOptions

        set_left_outputs(outputs: string[]): boolean;
        set_right_outputs(outputs: string[]): boolean;
    }

    module InputStream {
        // Constructor properties interface
    }

    class InputStream extends Gio.InputStream {
        // Own properties of Arrow-1.0.InputStream

        input_stream: any;
        inputStream: any;

        // Owm methods of Arrow-1.0.InputStream

        advance(n_bytes: number): boolean;
        align(alignment: number): boolean;
        read_record_batch(schema: Schema, options?: ReadOptions | null): RecordBatch | null;
        read_tensor(): Tensor | null;
    }

    module Int16Array {
        // Constructor properties interface
    }

    class Int16Array extends NumericArray {
        // Constructors of Arrow-1.0.Int16Array

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): Int16Array;

        // Owm methods of Arrow-1.0.Int16Array

        get_value(i: number): number;
        get_values(): number[];
        sum(): number;
    }

    module Int16ArrayBuilder {
        // Constructor properties interface
    }

    class Int16ArrayBuilder extends ArrayBuilder {
        // Constructors of Arrow-1.0.Int16ArrayBuilder

        static ['new'](): Int16ArrayBuilder;

        // Owm methods of Arrow-1.0.Int16ArrayBuilder

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
    }

    class Int16DataType extends IntegerDataType {
        // Constructors of Arrow-1.0.Int16DataType

        static ['new'](): Int16DataType;
    }

    module Int16Scalar {
        // Constructor properties interface
    }

    class Int16Scalar extends Scalar {
        // Constructors of Arrow-1.0.Int16Scalar

        static ['new'](value: number): Int16Scalar;

        // Owm methods of Arrow-1.0.Int16Scalar

        get_value(): number;
    }

    module Int32Array {
        // Constructor properties interface
    }

    class Int32Array extends NumericArray {
        // Constructors of Arrow-1.0.Int32Array

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): Int32Array;

        // Owm methods of Arrow-1.0.Int32Array

        get_value(i: number): number;
        get_values(): number[];
        sum(): number;
    }

    module Int32ArrayBuilder {
        // Constructor properties interface
    }

    class Int32ArrayBuilder extends ArrayBuilder {
        // Constructors of Arrow-1.0.Int32ArrayBuilder

        static ['new'](): Int32ArrayBuilder;

        // Owm methods of Arrow-1.0.Int32ArrayBuilder

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
    }

    class Int32DataType extends IntegerDataType {
        // Constructors of Arrow-1.0.Int32DataType

        static ['new'](): Int32DataType;
    }

    module Int32Scalar {
        // Constructor properties interface
    }

    class Int32Scalar extends Scalar {
        // Constructors of Arrow-1.0.Int32Scalar

        static ['new'](value: number): Int32Scalar;

        // Owm methods of Arrow-1.0.Int32Scalar

        get_value(): number;
    }

    module Int64Array {
        // Constructor properties interface
    }

    class Int64Array extends NumericArray {
        // Constructors of Arrow-1.0.Int64Array

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): Int64Array;

        // Owm methods of Arrow-1.0.Int64Array

        get_value(i: number): number;
        get_values(): number[];
        sum(): number;
    }

    module Int64ArrayBuilder {
        // Constructor properties interface
    }

    class Int64ArrayBuilder extends ArrayBuilder {
        // Constructors of Arrow-1.0.Int64ArrayBuilder

        static ['new'](): Int64ArrayBuilder;

        // Owm methods of Arrow-1.0.Int64ArrayBuilder

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
    }

    class Int64DataType extends IntegerDataType {
        // Constructors of Arrow-1.0.Int64DataType

        static ['new'](): Int64DataType;
    }

    module Int64Scalar {
        // Constructor properties interface
    }

    class Int64Scalar extends Scalar {
        // Constructors of Arrow-1.0.Int64Scalar

        static ['new'](value: number): Int64Scalar;

        // Owm methods of Arrow-1.0.Int64Scalar

        get_value(): number;
    }

    module Int8Array {
        // Constructor properties interface
    }

    class Int8Array extends NumericArray {
        // Constructors of Arrow-1.0.Int8Array

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): Int8Array;

        // Owm methods of Arrow-1.0.Int8Array

        get_value(i: number): number;
        get_values(): Uint8Array;
        sum(): number;
    }

    module Int8ArrayBuilder {
        // Constructor properties interface
    }

    class Int8ArrayBuilder extends ArrayBuilder {
        // Constructors of Arrow-1.0.Int8ArrayBuilder

        static ['new'](): Int8ArrayBuilder;

        // Owm methods of Arrow-1.0.Int8ArrayBuilder

        append(value: number): boolean;
        append_value(value: number): boolean;
        /**
         * Append multiple values at once. It's more efficient than multiple
         * `append` and `append_null` calls.
         * @param values The array of int8.
         * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_values(values: Uint8Array, is_valids?: boolean[] | null): boolean;
    }

    module Int8DataType {
        // Constructor properties interface
    }

    class Int8DataType extends IntegerDataType {
        // Constructors of Arrow-1.0.Int8DataType

        static ['new'](): Int8DataType;
    }

    module Int8Scalar {
        // Constructor properties interface
    }

    class Int8Scalar extends Scalar {
        // Constructors of Arrow-1.0.Int8Scalar

        static ['new'](value: number): Int8Scalar;

        // Owm methods of Arrow-1.0.Int8Scalar

        get_value(): number;
    }

    module IntArrayBuilder {
        // Constructor properties interface
    }

    class IntArrayBuilder extends ArrayBuilder {
        // Constructors of Arrow-1.0.IntArrayBuilder

        static ['new'](): IntArrayBuilder;

        // Owm methods of Arrow-1.0.IntArrayBuilder

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
    }

    abstract class IntegerDataType extends NumericDataType {
        // Owm methods of Arrow-1.0.IntegerDataType

        is_signed(): boolean;
    }

    module IntervalDataType {
        // Constructor properties interface
    }

    abstract class IntervalDataType extends TemporalDataType {
        // Owm methods of Arrow-1.0.IntervalDataType

        get_interval_type(): IntervalType;
    }

    module JSONReadOptions {
        // Constructor properties interface
    }

    class JSONReadOptions extends GObject.Object {
        // Own properties of Arrow-1.0.JSONReadOptions

        /**
         * Whether objects may be printed across multiple lines (for example pretty printed).
         * if %FALSE, input must end with an empty line.
         */
        allow_newlines_in_values: boolean;
        /**
         * Whether objects may be printed across multiple lines (for example pretty printed).
         * if %FALSE, input must end with an empty line.
         */
        allowNewlinesInValues: boolean;
        /**
         * Block size we request from the IO layer; also determines the size
         * of chunks when #GArrowJSONReadOptions:use-threads is %TRUE.
         */
        block_size: number;
        /**
         * Block size we request from the IO layer; also determines the size
         * of chunks when #GArrowJSONReadOptions:use-threads is %TRUE.
         */
        blockSize: number;
        /**
         * Schema for passing custom conversion rules.
         */
        schema: Schema;
        /**
         * How to parse handle fields outside the explicit schema.
         */
        unexpected_field_behavior: JSONReadUnexpectedFieldBehavior;
        /**
         * How to parse handle fields outside the explicit schema.
         */
        unexpectedFieldBehavior: JSONReadUnexpectedFieldBehavior;
        /**
         * Whether to use the global CPU thread pool.
         */
        use_threads: boolean;
        /**
         * Whether to use the global CPU thread pool.
         */
        useThreads: boolean;

        // Constructors of Arrow-1.0.JSONReadOptions

        static ['new'](): JSONReadOptions;
    }

    module JSONReader {
        // Constructor properties interface
    }

    class JSONReader extends GObject.Object {
        // Own properties of Arrow-1.0.JSONReader

        input: InputStream;
        json_table_reader: any;
        jsonTableReader: any;

        // Constructors of Arrow-1.0.JSONReader

        static ['new'](input: InputStream, options?: JSONReadOptions | null): JSONReader;

        // Owm methods of Arrow-1.0.JSONReader

        read(): Table | null;
    }

    module LargeBinaryArray {
        // Constructor properties interface
    }

    class LargeBinaryArray extends Array {
        // Constructors of Arrow-1.0.LargeBinaryArray

        static ['new'](
            length: number,
            value_offsets: Buffer,
            value_data: Buffer,
            null_bitmap: Buffer | null,
            n_nulls: number,
        ): LargeBinaryArray;

        // Owm methods of Arrow-1.0.LargeBinaryArray

        get_buffer(): Buffer;
        get_data_buffer(): Buffer;
        get_offsets_buffer(): Buffer;
        get_value(i: number): GLib.Bytes;
    }

    module LargeBinaryArrayBuilder {
        // Constructor properties interface
    }

    class LargeBinaryArrayBuilder extends ArrayBuilder {
        // Constructors of Arrow-1.0.LargeBinaryArrayBuilder

        static ['new'](): LargeBinaryArrayBuilder;

        // Owm methods of Arrow-1.0.LargeBinaryArrayBuilder

        append_value(value: Uint8Array): boolean;
        append_value_bytes(value: GLib.Bytes): boolean;
        /**
         * Append multiple values at once. It's more efficient than multiple
         * `append` and `append_null` calls.
         * @param values The array of #GBytes.
         * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth @is_valids is %TRUE, the Nth @values is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_values(values: GLib.Bytes[], is_valids?: boolean[] | null): boolean;
    }

    module LargeBinaryDataType {
        // Constructor properties interface
    }

    class LargeBinaryDataType extends DataType {
        // Constructors of Arrow-1.0.LargeBinaryDataType

        static ['new'](): LargeBinaryDataType;
    }

    module LargeBinaryScalar {
        // Constructor properties interface
    }

    class LargeBinaryScalar extends BaseBinaryScalar {
        // Constructors of Arrow-1.0.LargeBinaryScalar

        static ['new'](value: Buffer): LargeBinaryScalar;
    }

    module LargeListArray {
        // Constructor properties interface
    }

    class LargeListArray extends Array {
        // Own properties of Arrow-1.0.LargeListArray

        raw_values: Array;
        rawValues: Array;

        // Constructors of Arrow-1.0.LargeListArray

        static ['new'](
            data_type: DataType,
            length: number,
            value_offsets: Buffer,
            values: Array,
            null_bitmap: Buffer | null,
            n_nulls: number,
        ): LargeListArray;

        // Owm methods of Arrow-1.0.LargeListArray

        get_value(i: number): Array;
        get_value_length(i: number): number;
        get_value_offset(i: number): number;
        get_value_offsets(): number[];
        get_value_type(): DataType;
        get_values(): Array;
    }

    module LargeListArrayBuilder {
        // Constructor properties interface
    }

    class LargeListArrayBuilder extends ArrayBuilder {
        // Constructors of Arrow-1.0.LargeListArrayBuilder

        static ['new'](data_type: LargeListDataType): LargeListArrayBuilder;

        // Owm methods of Arrow-1.0.LargeListArrayBuilder

        append_value(): boolean;
        get_value_builder(): ArrayBuilder;
    }

    module LargeListDataType {
        // Constructor properties interface
    }

    class LargeListDataType extends DataType {
        // Constructors of Arrow-1.0.LargeListDataType

        static ['new'](field: Field): LargeListDataType;

        // Owm methods of Arrow-1.0.LargeListDataType

        get_field(): Field;
    }

    module LargeListScalar {
        // Constructor properties interface
    }

    class LargeListScalar extends BaseListScalar {
        // Constructors of Arrow-1.0.LargeListScalar

        static ['new'](value: LargeListArray): LargeListScalar;
    }

    module LargeStringArray {
        // Constructor properties interface
    }

    class LargeStringArray extends LargeBinaryArray {
        // Constructors of Arrow-1.0.LargeStringArray

        static ['new'](
            length: number,
            value_offsets: Buffer,
            value_data: Buffer,
            null_bitmap: Buffer | null,
            n_nulls: number,
        ): LargeStringArray;

        // Owm methods of Arrow-1.0.LargeStringArray

        get_string(i: number): string;
    }

    module LargeStringArrayBuilder {
        // Constructor properties interface
    }

    class LargeStringArrayBuilder extends LargeBinaryArrayBuilder {
        // Constructors of Arrow-1.0.LargeStringArrayBuilder

        static ['new'](): LargeStringArrayBuilder;

        // Owm methods of Arrow-1.0.LargeStringArrayBuilder

        append_string(value: string): boolean;
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
    }

    class LargeStringDataType extends DataType {
        // Constructors of Arrow-1.0.LargeStringDataType

        static ['new'](): LargeStringDataType;
    }

    module LargeStringScalar {
        // Constructor properties interface
    }

    class LargeStringScalar extends BaseBinaryScalar {
        // Constructors of Arrow-1.0.LargeStringScalar

        static ['new'](value: Buffer): LargeStringScalar;
    }

    module ListArray {
        // Constructor properties interface
    }

    class ListArray extends Array {
        // Own properties of Arrow-1.0.ListArray

        raw_values: Array;
        rawValues: Array;

        // Constructors of Arrow-1.0.ListArray

        static ['new'](
            data_type: DataType,
            length: number,
            value_offsets: Buffer,
            values: Array,
            null_bitmap: Buffer | null,
            n_nulls: number,
        ): ListArray;

        // Owm methods of Arrow-1.0.ListArray

        get_value(i: number): Array;
        get_value_length(i: number): number;
        get_value_offset(i: number): number;
        get_value_offsets(): number[];
        get_value_type(): DataType;
        get_values(): Array;
    }

    module ListArrayBuilder {
        // Constructor properties interface
    }

    class ListArrayBuilder extends ArrayBuilder {
        // Constructors of Arrow-1.0.ListArrayBuilder

        static ['new'](data_type: ListDataType): ListArrayBuilder;

        // Owm methods of Arrow-1.0.ListArrayBuilder

        append(): boolean;
        append_value(): boolean;
        get_value_builder(): ArrayBuilder;
    }

    module ListDataType {
        // Constructor properties interface
    }

    class ListDataType extends DataType {
        // Constructors of Arrow-1.0.ListDataType

        static ['new'](field: Field): ListDataType;

        // Owm methods of Arrow-1.0.ListDataType

        get_field(): Field;
        get_value_field(): Field;
    }

    module ListScalar {
        // Constructor properties interface
    }

    class ListScalar extends BaseListScalar {
        // Constructors of Arrow-1.0.ListScalar

        static ['new'](value: ListArray): ListScalar;
    }

    module LiteralExpression {
        // Constructor properties interface
    }

    class LiteralExpression extends Expression {
        // Constructors of Arrow-1.0.LiteralExpression

        static ['new'](datum: Datum): LiteralExpression;
    }

    module LocalFileSystem {
        // Constructor properties interface
    }

    class LocalFileSystem extends FileSystem {
        // Constructors of Arrow-1.0.LocalFileSystem

        static ['new'](options?: LocalFileSystemOptions | null): LocalFileSystem;
    }

    module LocalFileSystemOptions {
        // Constructor properties interface
    }

    class LocalFileSystemOptions extends GObject.Object {
        // Own properties of Arrow-1.0.LocalFileSystemOptions

        /**
         * Whether open_input_stream and open_input_file return a mmap'ed file,
         * or a regular one.
         */
        use_mmap: boolean;
        /**
         * Whether open_input_stream and open_input_file return a mmap'ed file,
         * or a regular one.
         */
        useMmap: boolean;

        // Constructors of Arrow-1.0.LocalFileSystemOptions

        static ['new'](): LocalFileSystemOptions;
    }

    module MapArray {
        // Constructor properties interface
    }

    class MapArray extends ListArray {
        // Own properties of Arrow-1.0.MapArray

        items: Array;
        keys: Array;
        offsets: Array;

        // Constructors of Arrow-1.0.MapArray

        static ['new'](offsets: Array, keys: Array, items: Array): MapArray;

        // Owm methods of Arrow-1.0.MapArray

        get_items(): Array;
        get_keys(): Array;
    }

    module MapArrayBuilder {
        // Constructor properties interface
    }

    class MapArrayBuilder extends ArrayBuilder {
        // Constructors of Arrow-1.0.MapArrayBuilder

        static ['new'](data_type: MapDataType): MapArrayBuilder;

        // Owm methods of Arrow-1.0.MapArrayBuilder

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
    }

    class MapDataType extends ListDataType {
        // Constructors of Arrow-1.0.MapDataType

        static ['new'](key_type: DataType, item_type: DataType): MapDataType;

        // Owm methods of Arrow-1.0.MapDataType

        get_item_type(): DataType;
        get_key_type(): DataType;
    }

    module MapScalar {
        // Constructor properties interface
    }

    class MapScalar extends BaseListScalar {
        // Constructors of Arrow-1.0.MapScalar

        static ['new'](value: StructArray): MapScalar;
    }

    module MemoryMappedInputStream {
        // Constructor properties interface
    }

    class MemoryMappedInputStream extends SeekableInputStream {
        // Constructors of Arrow-1.0.MemoryMappedInputStream

        static ['new'](path: string): MemoryMappedInputStream;
    }

    module MockFileSystem {
        // Constructor properties interface
    }

    class MockFileSystem extends FileSystem {}

    module MonthDayNanoIntervalDataType {
        // Constructor properties interface
    }

    class MonthDayNanoIntervalDataType extends IntervalDataType {
        // Constructors of Arrow-1.0.MonthDayNanoIntervalDataType

        static ['new'](): MonthDayNanoIntervalDataType;
    }

    module MonthIntervalDataType {
        // Constructor properties interface
    }

    class MonthIntervalDataType extends IntervalDataType {
        // Constructors of Arrow-1.0.MonthIntervalDataType

        static ['new'](): MonthIntervalDataType;
    }

    module MutableBuffer {
        // Constructor properties interface
    }

    class MutableBuffer extends Buffer {
        // Constructors of Arrow-1.0.MutableBuffer

        static ['new'](data: Uint8Array): MutableBuffer;

        static new_bytes(data: GLib.Bytes): MutableBuffer;

        // Owm methods of Arrow-1.0.MutableBuffer

        set_data(offset: number, data: Uint8Array): boolean;
        slice(offset: number, size: number): MutableBuffer;
    }

    module NullArray {
        // Constructor properties interface
    }

    class NullArray extends Array {
        // Constructors of Arrow-1.0.NullArray

        static ['new'](length: number): NullArray;
    }

    module NullArrayBuilder {
        // Constructor properties interface
    }

    class NullArrayBuilder extends ArrayBuilder {
        // Constructors of Arrow-1.0.NullArrayBuilder

        static ['new'](): NullArrayBuilder;
    }

    module NullDataType {
        // Constructor properties interface
    }

    class NullDataType extends DataType {
        // Constructors of Arrow-1.0.NullDataType

        static ['new'](): NullDataType;
    }

    module NullScalar {
        // Constructor properties interface
    }

    class NullScalar extends Scalar {
        // Constructors of Arrow-1.0.NullScalar

        static ['new'](): NullScalar;
    }

    module NumericArray {
        // Constructor properties interface
    }

    class NumericArray extends PrimitiveArray {
        // Owm methods of Arrow-1.0.NumericArray

        mean(): number;
    }

    module NumericDataType {
        // Constructor properties interface
    }

    abstract class NumericDataType extends FixedWidthDataType {}

    module OutputStream {
        // Constructor properties interface
    }

    class OutputStream extends GObject.Object {
        // Own properties of Arrow-1.0.OutputStream

        output_stream: any;
        outputStream: any;

        // Owm methods of Arrow-1.0.OutputStream

        align(alignment: number): boolean;
        write_record_batch(record_batch: RecordBatch, options?: WriteOptions | null): number;
        write_tensor(tensor: Tensor): number;
    }

    module PrimitiveArray {
        // Constructor properties interface
    }

    class PrimitiveArray extends Array {
        // Owm methods of Arrow-1.0.PrimitiveArray

        get_buffer(): Buffer;
        get_data_buffer(): Buffer;
    }

    module ReadOptions {
        // Constructor properties interface
    }

    class ReadOptions extends GObject.Object {
        // Own properties of Arrow-1.0.ReadOptions

        /**
         * The maximum permitted schema nesting depth.
         */
        max_recursion_depth: number;
        /**
         * The maximum permitted schema nesting depth.
         */
        maxRecursionDepth: number;
        /**
         * Whether to use the global CPU thread pool.
         */
        use_threads: boolean;
        /**
         * Whether to use the global CPU thread pool.
         */
        useThreads: boolean;

        // Constructors of Arrow-1.0.ReadOptions

        static ['new'](): ReadOptions;

        // Owm methods of Arrow-1.0.ReadOptions

        get_included_fields(): number[];
        set_included_fields(fields: number[]): void;
    }

    module RecordBatch {
        // Constructor properties interface
    }

    class RecordBatch extends GObject.Object {
        // Own properties of Arrow-1.0.RecordBatch

        record_batch: any;
        recordBatch: any;

        // Constructors of Arrow-1.0.RecordBatch

        static ['new'](schema: Schema, n_rows: number, columns: Array[]): RecordBatch;

        // Owm methods of Arrow-1.0.RecordBatch

        static ['import'](c_abi_array: any, schema: Schema): RecordBatch | null;

        // Owm methods of Arrow-1.0.RecordBatch

        add_column(i: number, field: Field, column: Array): RecordBatch | null;
        equal(other_record_batch: RecordBatch): boolean;
        equal_metadata(other_record_batch: RecordBatch, check_metadata: boolean): boolean;
        ['export'](): boolean;
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
    }

    class RecordBatchBuilder extends GObject.Object {
        // Own properties of Arrow-1.0.RecordBatchBuilder

        record_batch_builder: any;
        recordBatchBuilder: any;

        // Constructors of Arrow-1.0.RecordBatchBuilder

        static ['new'](schema: Schema): RecordBatchBuilder;

        // Owm methods of Arrow-1.0.RecordBatchBuilder

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
    }

    class RecordBatchDatum extends Datum {
        // Own properties of Arrow-1.0.RecordBatchDatum

        value: RecordBatch;

        // Constructors of Arrow-1.0.RecordBatchDatum

        static ['new'](value: RecordBatch): RecordBatchDatum;
    }

    module RecordBatchFileReader {
        // Constructor properties interface
    }

    /**
     * It wraps `arrow::ipc::RecordBatchFileReader`.
     */
    class RecordBatchFileReader extends GObject.Object {
        // Own properties of Arrow-1.0.RecordBatchFileReader

        record_batch_file_reader: any;
        recordBatchFileReader: any;

        // Constructors of Arrow-1.0.RecordBatchFileReader

        static ['new'](file: SeekableInputStream): RecordBatchFileReader;

        // Owm methods of Arrow-1.0.RecordBatchFileReader

        get_n_record_batches(): number;
        get_record_batch(i: number): RecordBatch | null;
        get_schema(): Schema;
        get_version(): MetadataVersion;
        read_record_batch(i: number): RecordBatch | null;
    }

    module RecordBatchFileWriter {
        // Constructor properties interface
    }

    /**
     * It wraps `arrow::ipc::RecordBatchFileWriter`.
     */
    class RecordBatchFileWriter extends RecordBatchStreamWriter {
        // Constructors of Arrow-1.0.RecordBatchFileWriter

        static ['new'](sink: OutputStream, schema: Schema): RecordBatchFileWriter;
    }

    module RecordBatchIterator {
        // Constructor properties interface
    }

    class RecordBatchIterator extends GObject.Object {
        // Own properties of Arrow-1.0.RecordBatchIterator

        iterator: any;

        // Constructors of Arrow-1.0.RecordBatchIterator

        static ['new'](record_batches: RecordBatch[]): RecordBatchIterator;

        // Owm methods of Arrow-1.0.RecordBatchIterator

        equal(other_iterator: RecordBatchIterator): boolean;
        next(): RecordBatch | null;
        to_list(): RecordBatch[];
    }

    module RecordBatchReader {
        // Constructor properties interface
    }

    class RecordBatchReader extends GObject.Object {
        // Own properties of Arrow-1.0.RecordBatchReader

        record_batch_reader: any;
        recordBatchReader: any;

        // Constructors of Arrow-1.0.RecordBatchReader

        static ['new'](record_batches: RecordBatch[], schema?: Schema | null): RecordBatchReader;

        // Owm methods of Arrow-1.0.RecordBatchReader

        static ['import'](c_abi_array_stream: any): RecordBatchReader | null;

        // Owm methods of Arrow-1.0.RecordBatchReader

        ['export'](): any | null;
        get_next_record_batch(): RecordBatch | null;
        get_schema(): Schema;
        read_all(): Table | null;
        read_next(): RecordBatch | null;
        read_next_record_batch(): RecordBatch | null;
    }

    module RecordBatchStreamReader {
        // Constructor properties interface
    }

    /**
     * It wraps `arrow::ipc::RecordBatchStreamReader`.
     */
    class RecordBatchStreamReader extends RecordBatchReader {
        // Constructors of Arrow-1.0.RecordBatchStreamReader

        static ['new'](stream: InputStream): RecordBatchStreamReader;
    }

    module RecordBatchStreamWriter {
        // Constructor properties interface
    }

    /**
     * It wraps `arrow::ipc::RecordBatchStreamWriter`.
     */
    class RecordBatchStreamWriter extends RecordBatchWriter {
        // Constructors of Arrow-1.0.RecordBatchStreamWriter

        static ['new'](sink: OutputStream, schema: Schema): RecordBatchStreamWriter;
    }

    module RecordBatchWriter {
        // Constructor properties interface
    }

    /**
     * It wraps `arrow::ipc::RecordBatchWriter`.
     */
    class RecordBatchWriter extends GObject.Object {
        // Own properties of Arrow-1.0.RecordBatchWriter

        record_batch_writer: any;
        recordBatchWriter: any;

        // Owm methods of Arrow-1.0.RecordBatchWriter

        close(): boolean;
        write_record_batch(record_batch: RecordBatch): boolean;
        write_table(table: Table): boolean;
    }

    module ResizableBuffer {
        // Constructor properties interface
    }

    class ResizableBuffer extends MutableBuffer {
        // Constructors of Arrow-1.0.ResizableBuffer

        static ['new'](initial_size: number): ResizableBuffer;

        // Owm methods of Arrow-1.0.ResizableBuffer

        reserve(new_capacity: number): boolean;
        resize(new_size: number): boolean;
    }

    module RoundOptions {
        // Constructor properties interface
    }

    class RoundOptions extends FunctionOptions {
        // Own properties of Arrow-1.0.RoundOptions

        /**
         * The rounding and tie-breaking mode.
         */
        mode: RoundMode;
        /**
         * The rounding precision (number of digits to round to).
         */
        n_digits: number;
        /**
         * The rounding precision (number of digits to round to).
         */
        nDigits: number;

        // Constructors of Arrow-1.0.RoundOptions

        static ['new'](): RoundOptions;
    }

    module RoundToMultipleOptions {
        // Constructor properties interface
    }

    class RoundToMultipleOptions extends FunctionOptions {
        // Own properties of Arrow-1.0.RoundToMultipleOptions

        /**
         * The rounding and tie-breaking mode.
         */
        mode: RoundMode;
        /**
         * The rounding scale (multiple to round to).
         *
         * Should be a scalar of a type compatible with the argument to be rounded.
         * For example, rounding a decimal value means a decimal multiple is
         * required. Rounding a floating point or integer value means a floating
         * point scalar is required.
         */
        multiple: Scalar;

        // Constructors of Arrow-1.0.RoundToMultipleOptions

        static ['new'](): RoundToMultipleOptions;
    }

    module S3FileSystem {
        // Constructor properties interface
    }

    class S3FileSystem extends FileSystem {}

    module S3GlobalOptions {
        // Constructor properties interface
    }

    class S3GlobalOptions extends GObject.Object {
        // Own properties of Arrow-1.0.S3GlobalOptions

        /**
         * The log level of S3 APIs.
         */
        log_level: S3LogLevel;
        /**
         * The log level of S3 APIs.
         */
        logLevel: S3LogLevel;

        // Constructors of Arrow-1.0.S3GlobalOptions

        static ['new'](): S3GlobalOptions;
    }

    module Scalar {
        // Constructor properties interface
    }

    abstract class Scalar extends GObject.Object {
        // Own properties of Arrow-1.0.Scalar

        /**
         * The data type of the scalar.
         */
        data_type: DataType;
        /**
         * The data type of the scalar.
         */
        dataType: DataType;
        scalar: any;

        // Owm methods of Arrow-1.0.Scalar

        static parse(data_type: DataType, data: Uint8Array): Scalar | null;

        // Owm methods of Arrow-1.0.Scalar

        cast(data_type: DataType, options?: CastOptions | null): Scalar | null;
        equal(other_scalar: Scalar): boolean;
        equal_options(other_scalar: Scalar, options?: EqualOptions | null): boolean;
        get_data_type(): DataType;
        is_valid(): boolean;
        to_string(): string;
    }

    module ScalarAggregateOptions {
        // Constructor properties interface
    }

    class ScalarAggregateOptions extends FunctionOptions {
        // Own properties of Arrow-1.0.ScalarAggregateOptions

        /**
         * The minimum required number of values.
         */
        min_count: number;
        /**
         * The minimum required number of values.
         */
        minCount: number;
        /**
         * Whether NULLs are skipped or not.
         */
        skip_nulls: boolean;
        /**
         * Whether NULLs are skipped or not.
         */
        skipNulls: boolean;

        // Constructors of Arrow-1.0.ScalarAggregateOptions

        static ['new'](): ScalarAggregateOptions;
    }

    module ScalarDatum {
        // Constructor properties interface
    }

    class ScalarDatum extends Datum {
        // Own properties of Arrow-1.0.ScalarDatum

        value: Scalar;

        // Constructors of Arrow-1.0.ScalarDatum

        static ['new'](value: Scalar): ScalarDatum;
    }

    module Schema {
        // Constructor properties interface
    }

    class Schema extends GObject.Object {
        // Own properties of Arrow-1.0.Schema

        schema: any;

        // Constructors of Arrow-1.0.Schema

        static ['new'](fields: Field[]): Schema;

        // Owm methods of Arrow-1.0.Schema

        static ['import'](c_abi_schema: any): Schema | null;

        // Owm methods of Arrow-1.0.Schema

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
        with_metadata(metadata: GLib.HashTable<string, string>): Schema;
    }

    module SeekableInputStream {
        // Constructor properties interface
    }

    class SeekableInputStream extends InputStream {
        // Owm methods of Arrow-1.0.SeekableInputStream

        get_size(): number;
        get_support_zero_copy(): boolean;
        peek(n_bytes: number): GLib.Bytes;
        read_at(position: number, n_bytes: number): Buffer | null;
        read_at_bytes(position: number, n_bytes: number): GLib.Bytes | null;
    }

    module SetLookupOptions {
        // Constructor properties interface
    }

    class SetLookupOptions extends FunctionOptions {
        // Own properties of Arrow-1.0.SetLookupOptions

        /**
         * Whether NULLs are skipped or not.
         */
        skip_nulls: boolean;
        /**
         * Whether NULLs are skipped or not.
         */
        skipNulls: boolean;
        /**
         * The set of values to look up input values into.
         */
        value_set: Datum;
        /**
         * The set of values to look up input values into.
         */
        valueSet: Datum;

        // Constructors of Arrow-1.0.SetLookupOptions

        static ['new'](value_set?: Datum | null): SetLookupOptions;
    }

    module SinkNodeOptions {
        // Constructor properties interface
    }

    class SinkNodeOptions extends ExecuteNodeOptions {
        // Constructors of Arrow-1.0.SinkNodeOptions

        static ['new'](): SinkNodeOptions;

        // Owm methods of Arrow-1.0.SinkNodeOptions

        get_reader(schema: Schema): RecordBatchReader;
    }

    module SlowFileSystem {
        // Constructor properties interface
    }

    class SlowFileSystem extends FileSystem {
        // Own properties of Arrow-1.0.SlowFileSystem

        base_file_system: FileSystem;
        baseFileSystem: FileSystem;

        // Constructors of Arrow-1.0.SlowFileSystem

        static new_average_latency(base_file_system: FileSystem, average_latency: number): SlowFileSystem;

        static new_average_latency_and_seed(
            base_file_system: FileSystem,
            average_latency: number,
            seed: number,
        ): SlowFileSystem;
    }

    module SortKey {
        // Constructor properties interface
    }

    class SortKey extends GObject.Object {
        // Own properties of Arrow-1.0.SortKey

        /**
         * How to order values.
         */
        order: SortOrder;
        /**
         * A name or dot path for the sort target.
         *
         *     dot_path = '.' name
         *              | '[' digit+ ']'
         *              | dot_path+
         */
        readonly target: string;

        // Constructors of Arrow-1.0.SortKey

        static ['new'](target: string, order: SortOrder): SortKey;

        // Owm methods of Arrow-1.0.SortKey

        equal(other_sort_key: SortKey): boolean;
    }

    module SortOptions {
        // Constructor properties interface
    }

    class SortOptions extends FunctionOptions {
        // Constructors of Arrow-1.0.SortOptions

        static ['new'](sort_keys?: SortKey[] | null): SortOptions;

        // Owm methods of Arrow-1.0.SortOptions

        /**
         * Add a sort key to be used.
         * @param sort_key The sort key to be added.
         */
        add_sort_key(sort_key: SortKey): void;
        equal(other_options: SortOptions): boolean;
        get_sort_keys(): SortKey[];
        /**
         * Set sort keys to be used.
         * @param sort_keys The sort keys to be used.
         */
        set_sort_keys(sort_keys: SortKey[]): void;
    }

    module SourceNodeOptions {
        // Constructor properties interface
    }

    class SourceNodeOptions extends ExecuteNodeOptions {
        // Own properties of Arrow-1.0.SourceNodeOptions

        reader: RecordBatchReader;
        record_batch: RecordBatch;
        recordBatch: RecordBatch;

        // Constructors of Arrow-1.0.SourceNodeOptions

        static new_record_batch(record_batch: RecordBatch): SourceNodeOptions;

        static new_record_batch_reader(reader: RecordBatchReader): SourceNodeOptions;

        static new_table(table: Table): SourceNodeOptions;
    }

    module SparseUnionArray {
        // Constructor properties interface
    }

    class SparseUnionArray extends UnionArray {
        // Constructors of Arrow-1.0.SparseUnionArray

        static ['new'](type_ids: Int8Array, fields: Array[]): SparseUnionArray;

        static new_data_type(data_type: SparseUnionDataType, type_ids: Int8Array, fields: Array[]): SparseUnionArray;
    }

    module SparseUnionDataType {
        // Constructor properties interface
    }

    class SparseUnionDataType extends UnionDataType {
        // Constructors of Arrow-1.0.SparseUnionDataType

        static ['new'](fields: Field[], type_codes: Uint8Array): SparseUnionDataType;
    }

    module SparseUnionScalar {
        // Constructor properties interface
    }

    class SparseUnionScalar extends UnionScalar {
        // Constructors of Arrow-1.0.SparseUnionScalar

        static ['new'](data_type: SparseUnionDataType, type_code: number, value: Scalar): SparseUnionScalar;
    }

    module StringArray {
        // Constructor properties interface
    }

    class StringArray extends BinaryArray {
        // Constructors of Arrow-1.0.StringArray

        static ['new'](
            length: number,
            value_offsets: Buffer,
            value_data: Buffer,
            null_bitmap: Buffer | null,
            n_nulls: number,
        ): StringArray;

        // Owm methods of Arrow-1.0.StringArray

        get_string(i: number): string;
    }

    module StringArrayBuilder {
        // Constructor properties interface
    }

    class StringArrayBuilder extends BinaryArrayBuilder {
        // Constructors of Arrow-1.0.StringArrayBuilder

        static ['new'](): StringArrayBuilder;

        // Owm methods of Arrow-1.0.StringArrayBuilder

        append(value: string): boolean;
        append_string(value: string): boolean;
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
    }

    class StringDataType extends DataType {
        // Constructors of Arrow-1.0.StringDataType

        static ['new'](): StringDataType;
    }

    module StringDictionaryArrayBuilder {
        // Constructor properties interface
    }

    class StringDictionaryArrayBuilder extends ArrayBuilder {
        // Constructors of Arrow-1.0.StringDictionaryArrayBuilder

        static ['new'](): StringDictionaryArrayBuilder;

        // Owm methods of Arrow-1.0.StringDictionaryArrayBuilder

        append_array(array: StringArray): boolean;
        /**
         * Append dictionary indices directly without modifying the internal memo.
         * @param values The array of indices.
         * @param is_valids The array of   %TRUE or %FALSE that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_indices(values: number[], is_valids?: boolean[] | null): boolean;
        append_string(value: string): boolean;
        finish_delta(): boolean;
        get_dictionary_length(): number;
        insert_memo_values(values: StringArray): boolean;
        /**
         * Reset and also clear accumulated dictionary values in memo table.
         */
        reset_full(): void;
    }

    module StringScalar {
        // Constructor properties interface
    }

    class StringScalar extends BaseBinaryScalar {
        // Constructors of Arrow-1.0.StringScalar

        static ['new'](value: Buffer): StringScalar;
    }

    module StructArray {
        // Constructor properties interface
    }

    class StructArray extends Array {
        // Constructors of Arrow-1.0.StructArray

        static ['new'](
            data_type: DataType,
            length: number,
            fields: Array[],
            null_bitmap: Buffer | null,
            n_nulls: number,
        ): StructArray;

        // Owm methods of Arrow-1.0.StructArray

        flatten(): Array[];
        get_field(i: number): Array;
        get_fields(): Array[];
    }

    module StructArrayBuilder {
        // Constructor properties interface
    }

    class StructArrayBuilder extends ArrayBuilder {
        // Constructors of Arrow-1.0.StructArrayBuilder

        static ['new'](data_type: StructDataType): StructArrayBuilder;

        // Owm methods of Arrow-1.0.StructArrayBuilder

        append(): boolean;
        append_value(): boolean;
        get_field_builder(i: number): ArrayBuilder;
        get_field_builders(): Array[];
    }

    module StructDataType {
        // Constructor properties interface
    }

    class StructDataType extends DataType {
        // Constructors of Arrow-1.0.StructDataType

        static ['new'](fields: Field[]): StructDataType;

        // Owm methods of Arrow-1.0.StructDataType

        get_field(i: number): Field | null;
        get_field_by_name(name: string): Field | null;
        get_field_index(name: string): number;
        get_fields(): Field[];
        get_n_fields(): number;
    }

    module StructScalar {
        // Constructor properties interface
    }

    class StructScalar extends Scalar {
        // Constructors of Arrow-1.0.StructScalar

        static ['new'](data_type: StructDataType, value: Scalar[]): StructScalar;

        // Owm methods of Arrow-1.0.StructScalar

        get_value(): Scalar[];
    }

    module SubTreeFileSystem {
        // Constructor properties interface
    }

    class SubTreeFileSystem extends FileSystem {
        // Own properties of Arrow-1.0.SubTreeFileSystem

        base_file_system: FileSystem;
        baseFileSystem: FileSystem;

        // Constructors of Arrow-1.0.SubTreeFileSystem

        static ['new'](base_path: string, base_file_system: FileSystem): SubTreeFileSystem;
    }

    module Table {
        // Constructor properties interface
    }

    class Table extends GObject.Object {
        // Own properties of Arrow-1.0.Table

        table: any;

        // Constructors of Arrow-1.0.Table

        static new_arrays(schema: Schema, arrays: Array[]): Table;

        static new_chunked_arrays(schema: Schema, chunked_arrays: ChunkedArray[]): Table;

        static new_record_batches(schema: Schema, record_batches: RecordBatch[]): Table;

        // Owm methods of Arrow-1.0.Table

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
    }

    class TableBatchReader extends RecordBatchReader {
        // Constructors of Arrow-1.0.TableBatchReader

        static ['new'](table: Table): TableBatchReader;
    }

    module TableConcatenateOptions {
        // Constructor properties interface
    }

    class TableConcatenateOptions extends GObject.Object {
        // Own properties of Arrow-1.0.TableConcatenateOptions

        /**
         * If true, a #GArrowField of #GArrowNullDataType can be unified
         * with a #GArrowField of another type. The unified field will be of
         * the other type and become nullable. Nullability will be promoted
         * to the looser option (nullable if one is not nullable).
         */
        promote_nullability: boolean;
        /**
         * If true, a #GArrowField of #GArrowNullDataType can be unified
         * with a #GArrowField of another type. The unified field will be of
         * the other type and become nullable. Nullability will be promoted
         * to the looser option (nullable if one is not nullable).
         */
        promoteNullability: boolean;
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
        unify_schemas: boolean;
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
        unifySchemas: boolean;

        // Constructors of Arrow-1.0.TableConcatenateOptions

        static ['new'](): TableConcatenateOptions;
    }

    module TableDatum {
        // Constructor properties interface
    }

    class TableDatum extends Datum {
        // Own properties of Arrow-1.0.TableDatum

        value: Table;

        // Constructors of Arrow-1.0.TableDatum

        static ['new'](value: Table): TableDatum;
    }

    module TakeOptions {
        // Constructor properties interface
    }

    class TakeOptions extends FunctionOptions {
        // Constructors of Arrow-1.0.TakeOptions

        static ['new'](): TakeOptions;
    }

    module TemporalDataType {
        // Constructor properties interface
    }

    abstract class TemporalDataType extends FixedWidthDataType {}

    module Tensor {
        // Constructor properties interface
    }

    class Tensor extends GObject.Object {
        // Own properties of Arrow-1.0.Tensor

        buffer: Buffer;
        tensor: any;

        // Constructors of Arrow-1.0.Tensor

        static ['new'](
            data_type: DataType,
            data: Buffer,
            shape: number[],
            strides?: number[] | null,
            dimension_names?: string[] | null,
        ): Tensor;

        // Owm methods of Arrow-1.0.Tensor

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
    }

    class Time32Array extends NumericArray {
        // Constructors of Arrow-1.0.Time32Array

        static ['new'](
            data_type: Time32DataType,
            length: number,
            data: Buffer,
            null_bitmap: Buffer | null,
            n_nulls: number,
        ): Time32Array;

        // Owm methods of Arrow-1.0.Time32Array

        get_value(i: number): number;
        get_values(): number[];
    }

    module Time32ArrayBuilder {
        // Constructor properties interface
    }

    class Time32ArrayBuilder extends ArrayBuilder {
        // Constructors of Arrow-1.0.Time32ArrayBuilder

        static ['new'](data_type: Time32DataType): Time32ArrayBuilder;

        // Owm methods of Arrow-1.0.Time32ArrayBuilder

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
    }

    class Time32DataType extends TimeDataType {
        // Constructors of Arrow-1.0.Time32DataType

        static ['new'](unit: TimeUnit): Time32DataType;
    }

    module Time32Scalar {
        // Constructor properties interface
    }

    class Time32Scalar extends Scalar {
        // Constructors of Arrow-1.0.Time32Scalar

        static ['new'](data_type: Time32DataType, value: number): Time32Scalar;

        // Owm methods of Arrow-1.0.Time32Scalar

        get_value(): number;
    }

    module Time64Array {
        // Constructor properties interface
    }

    class Time64Array extends NumericArray {
        // Constructors of Arrow-1.0.Time64Array

        static ['new'](
            data_type: Time64DataType,
            length: number,
            data: Buffer,
            null_bitmap: Buffer | null,
            n_nulls: number,
        ): Time64Array;

        // Owm methods of Arrow-1.0.Time64Array

        get_value(i: number): number;
        get_values(): number[];
    }

    module Time64ArrayBuilder {
        // Constructor properties interface
    }

    class Time64ArrayBuilder extends ArrayBuilder {
        // Constructors of Arrow-1.0.Time64ArrayBuilder

        static ['new'](data_type: Time64DataType): Time64ArrayBuilder;

        // Owm methods of Arrow-1.0.Time64ArrayBuilder

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
    }

    class Time64DataType extends TimeDataType {
        // Constructors of Arrow-1.0.Time64DataType

        static ['new'](unit: TimeUnit): Time64DataType;
    }

    module Time64Scalar {
        // Constructor properties interface
    }

    class Time64Scalar extends Scalar {
        // Constructors of Arrow-1.0.Time64Scalar

        static ['new'](data_type: Time64DataType, value: number): Time64Scalar;

        // Owm methods of Arrow-1.0.Time64Scalar

        get_value(): number;
    }

    module TimeDataType {
        // Constructor properties interface
    }

    abstract class TimeDataType extends TemporalDataType {
        // Owm methods of Arrow-1.0.TimeDataType

        get_unit(): TimeUnit;
    }

    module TimestampArray {
        // Constructor properties interface
    }

    class TimestampArray extends NumericArray {
        // Constructors of Arrow-1.0.TimestampArray

        static ['new'](
            data_type: TimestampDataType,
            length: number,
            data: Buffer,
            null_bitmap: Buffer | null,
            n_nulls: number,
        ): TimestampArray;

        // Owm methods of Arrow-1.0.TimestampArray

        get_value(i: number): number;
        get_values(): number[];
    }

    module TimestampArrayBuilder {
        // Constructor properties interface
    }

    class TimestampArrayBuilder extends ArrayBuilder {
        // Constructors of Arrow-1.0.TimestampArrayBuilder

        static ['new'](data_type: TimestampDataType): TimestampArrayBuilder;

        // Owm methods of Arrow-1.0.TimestampArrayBuilder

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
    }

    class TimestampDataType extends TemporalDataType {
        // Constructors of Arrow-1.0.TimestampDataType

        static ['new'](unit: TimeUnit): TimestampDataType;

        // Owm methods of Arrow-1.0.TimestampDataType

        get_unit(): TimeUnit;
    }

    module TimestampScalar {
        // Constructor properties interface
    }

    class TimestampScalar extends Scalar {
        // Constructors of Arrow-1.0.TimestampScalar

        static ['new'](data_type: TimestampDataType, value: number): TimestampScalar;

        // Owm methods of Arrow-1.0.TimestampScalar

        get_value(): number;
    }

    module UInt16Array {
        // Constructor properties interface
    }

    class UInt16Array extends NumericArray {
        // Constructors of Arrow-1.0.UInt16Array

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): UInt16Array;

        // Owm methods of Arrow-1.0.UInt16Array

        get_value(i: number): number;
        get_values(): number[];
        sum(): number;
    }

    module UInt16ArrayBuilder {
        // Constructor properties interface
    }

    class UInt16ArrayBuilder extends ArrayBuilder {
        // Constructors of Arrow-1.0.UInt16ArrayBuilder

        static ['new'](): UInt16ArrayBuilder;

        // Owm methods of Arrow-1.0.UInt16ArrayBuilder

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
    }

    class UInt16DataType extends IntegerDataType {
        // Constructors of Arrow-1.0.UInt16DataType

        static ['new'](): UInt16DataType;
    }

    module UInt16Scalar {
        // Constructor properties interface
    }

    class UInt16Scalar extends Scalar {
        // Constructors of Arrow-1.0.UInt16Scalar

        static ['new'](value: number): UInt16Scalar;

        // Owm methods of Arrow-1.0.UInt16Scalar

        get_value(): number;
    }

    module UInt32Array {
        // Constructor properties interface
    }

    class UInt32Array extends NumericArray {
        // Constructors of Arrow-1.0.UInt32Array

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): UInt32Array;

        // Owm methods of Arrow-1.0.UInt32Array

        get_value(i: number): number;
        get_values(): number[];
        sum(): number;
    }

    module UInt32ArrayBuilder {
        // Constructor properties interface
    }

    class UInt32ArrayBuilder extends ArrayBuilder {
        // Constructors of Arrow-1.0.UInt32ArrayBuilder

        static ['new'](): UInt32ArrayBuilder;

        // Owm methods of Arrow-1.0.UInt32ArrayBuilder

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
    }

    class UInt32DataType extends IntegerDataType {
        // Constructors of Arrow-1.0.UInt32DataType

        static ['new'](): UInt32DataType;
    }

    module UInt32Scalar {
        // Constructor properties interface
    }

    class UInt32Scalar extends Scalar {
        // Constructors of Arrow-1.0.UInt32Scalar

        static ['new'](value: number): UInt32Scalar;

        // Owm methods of Arrow-1.0.UInt32Scalar

        get_value(): number;
    }

    module UInt64Array {
        // Constructor properties interface
    }

    class UInt64Array extends NumericArray {
        // Constructors of Arrow-1.0.UInt64Array

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): UInt64Array;

        // Owm methods of Arrow-1.0.UInt64Array

        get_value(i: number): number;
        get_values(): number[];
        sum(): number;
    }

    module UInt64ArrayBuilder {
        // Constructor properties interface
    }

    class UInt64ArrayBuilder extends ArrayBuilder {
        // Constructors of Arrow-1.0.UInt64ArrayBuilder

        static ['new'](): UInt64ArrayBuilder;

        // Owm methods of Arrow-1.0.UInt64ArrayBuilder

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
    }

    class UInt64DataType extends IntegerDataType {
        // Constructors of Arrow-1.0.UInt64DataType

        static ['new'](): UInt64DataType;
    }

    module UInt64Scalar {
        // Constructor properties interface
    }

    class UInt64Scalar extends Scalar {
        // Constructors of Arrow-1.0.UInt64Scalar

        static ['new'](value: number): UInt64Scalar;

        // Owm methods of Arrow-1.0.UInt64Scalar

        get_value(): number;
    }

    module UInt8Array {
        // Constructor properties interface
    }

    class UInt8Array extends NumericArray {
        // Constructors of Arrow-1.0.UInt8Array

        static ['new'](length: number, data: Buffer, null_bitmap: Buffer | null, n_nulls: number): UInt8Array;

        // Owm methods of Arrow-1.0.UInt8Array

        get_value(i: number): number;
        get_values(): Uint8Array;
        sum(): number;
    }

    module UInt8ArrayBuilder {
        // Constructor properties interface
    }

    class UInt8ArrayBuilder extends ArrayBuilder {
        // Constructors of Arrow-1.0.UInt8ArrayBuilder

        static ['new'](): UInt8ArrayBuilder;

        // Owm methods of Arrow-1.0.UInt8ArrayBuilder

        append(value: number): boolean;
        append_value(value: number): boolean;
        /**
         * Append multiple values at once. It's more efficient than multiple
         * `append` and `append_null` calls.
         * @param values The array of uint8.
         * @param is_valids The array of   boolean that shows whether the Nth value is valid or not. If the   Nth `is_valids` is %TRUE, the Nth `values` is valid value. Otherwise   the Nth value is null value.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        append_values(values: Uint8Array, is_valids?: boolean[] | null): boolean;
    }

    module UInt8DataType {
        // Constructor properties interface
    }

    class UInt8DataType extends IntegerDataType {
        // Constructors of Arrow-1.0.UInt8DataType

        static ['new'](): UInt8DataType;
    }

    module UInt8Scalar {
        // Constructor properties interface
    }

    class UInt8Scalar extends Scalar {
        // Constructors of Arrow-1.0.UInt8Scalar

        static ['new'](value: number): UInt8Scalar;

        // Owm methods of Arrow-1.0.UInt8Scalar

        get_value(): number;
    }

    module UIntArrayBuilder {
        // Constructor properties interface
    }

    class UIntArrayBuilder extends ArrayBuilder {
        // Constructors of Arrow-1.0.UIntArrayBuilder

        static ['new'](): UIntArrayBuilder;

        // Owm methods of Arrow-1.0.UIntArrayBuilder

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
    }

    class UTF8NormalizeOptions extends FunctionOptions {
        // Own properties of Arrow-1.0.UTF8NormalizeOptions

        /**
         * The Unicode normalization form to apply.
         */
        form: UTF8NormalizeForm;

        // Constructors of Arrow-1.0.UTF8NormalizeOptions

        static ['new'](): UTF8NormalizeOptions;
    }

    module UnionArray {
        // Constructor properties interface
    }

    class UnionArray extends Array {
        // Own properties of Arrow-1.0.UnionArray

        type_ids: Int8Array;
        typeIds: Int8Array;

        // Owm methods of Arrow-1.0.UnionArray

        get_field(i: number): Array | null;
    }

    module UnionDataType {
        // Constructor properties interface
    }

    abstract class UnionDataType extends DataType {
        // Owm methods of Arrow-1.0.UnionDataType

        get_field(i: number): Field | null;
        get_fields(): Field[];
        get_n_fields(): number;
        get_type_codes(): Uint8Array;
    }

    module UnionScalar {
        // Constructor properties interface
    }

    abstract class UnionScalar extends Scalar {
        // Own properties of Arrow-1.0.UnionScalar

        /**
         * The value of the scalar.
         */
        value: Scalar;

        // Owm methods of Arrow-1.0.UnionScalar

        get_type_code(): number;
        get_value(): Scalar;
    }

    module VarianceOptions {
        // Constructor properties interface
    }

    class VarianceOptions extends FunctionOptions {
        // Own properties of Arrow-1.0.VarianceOptions

        /**
         * The Delta Degrees of Freedom (ddof) to be used.
         */
        ddof: number;
        /**
         * If less than this many non-null values are observed, emit null.
         */
        min_count: number;
        /**
         * If less than this many non-null values are observed, emit null.
         */
        minCount: number;
        /**
         * Whether NULLs are skipped or not.
         */
        skip_nulls: boolean;
        /**
         * Whether NULLs are skipped or not.
         */
        skipNulls: boolean;

        // Constructors of Arrow-1.0.VarianceOptions

        static ['new'](): VarianceOptions;
    }

    module WriteOptions {
        // Constructor properties interface
    }

    class WriteOptions extends GObject.Object {
        // Own properties of Arrow-1.0.WriteOptions

        /**
         * Write padding after memory buffers to this multiple of
         * bytes. Generally 8 or 64.
         */
        alignment: number;
        /**
         * Whether to allow field lengths that don't fit in a signed 32-bit
         * int. Some implementations may not be able to parse such streams.
         */
        allow_64bit: boolean;
        /**
         * Whether to allow field lengths that don't fit in a signed 32-bit
         * int. Some implementations may not be able to parse such streams.
         */
        allow64bit: boolean;
        /**
         * Codec to use for compressing and decompressing record batch body
         * buffers. This is not part of the Arrow IPC protocol and only for
         * internal use (e.g. Feather files).
         *
         * May only be UNCOMPRESSED, LZ4_FRAME and ZSTD.
         */
        codec: Codec;
        /**
         * The maximum permitted schema nesting depth.
         */
        max_recursion_depth: number;
        /**
         * The maximum permitted schema nesting depth.
         */
        maxRecursionDepth: number;
        /**
         * Whether to use the global CPU thread pool.
         */
        use_threads: boolean;
        /**
         * Whether to use the global CPU thread pool.
         */
        useThreads: boolean;
        /**
         * Whether to write the pre-0.15.0 encapsulated IPC message format
         * consisting of a 4-byte prefix instead of 8 byte.
         */
        write_legacy_ipc_format: boolean;
        /**
         * Whether to write the pre-0.15.0 encapsulated IPC message format
         * consisting of a 4-byte prefix instead of 8 byte.
         */
        writeLegacyIpcFormat: boolean;

        // Constructors of Arrow-1.0.WriteOptions

        static ['new'](): WriteOptions;
    }

    class AggregateNodeOptionsClass {}

    class AggregationClass {}

    class ArrayBuilderClass {}

    class ArrayClass {}

    class ArrayDatumClass {}

    class ArraySortOptionsClass {}

    class BaseBinaryScalarClass {}

    class BaseListScalarClass {}

    class BinaryArrayBuilderClass {}

    class BinaryArrayClass {}

    class BinaryDataTypeClass {}

    class BinaryDictionaryArrayBuilderClass {}

    class BinaryScalarClass {}

    class BooleanArrayBuilderClass {}

    class BooleanArrayClass {}

    class BooleanDataTypeClass {}

    class BooleanScalarClass {}

    class BufferClass {}

    class BufferInputStreamClass {}

    class BufferOutputStreamClass {}

    class CSVReadOptionsClass {}

    class CSVReaderClass {}

    class CallExpressionClass {}

    class CastOptionsClass {}

    class ChunkedArrayClass {}

    class ChunkedArrayDatumClass {}

    class CodecClass {}

    class CompressedInputStreamClass {}

    class CompressedOutputStreamClass {}

    class CountOptionsClass {}

    class DataTypeClass {}

    class Date32ArrayBuilderClass {}

    class Date32ArrayClass {}

    class Date32DataTypeClass {}

    class Date32ScalarClass {}

    class Date64ArrayBuilderClass {}

    class Date64ArrayClass {}

    class Date64DataTypeClass {}

    class Date64ScalarClass {}

    class DatumClass {}

    class DayTimeIntervalDataTypeClass {}

    class Decimal128ArrayBuilderClass {}

    class Decimal128ArrayClass {}

    class Decimal128Class {}

    class Decimal128DataTypeClass {}

    class Decimal128ScalarClass {}

    class Decimal256ArrayBuilderClass {}

    class Decimal256ArrayClass {}

    class Decimal256Class {}

    class Decimal256DataTypeClass {}

    class Decimal256ScalarClass {}

    class DecimalDataTypeClass {}

    class DenseUnionArrayClass {}

    class DenseUnionDataTypeClass {}

    class DenseUnionScalarClass {}

    class DictionaryArrayClass {}

    class DictionaryDataTypeClass {}

    class DoubleArrayBuilderClass {}

    class DoubleArrayClass {}

    class DoubleDataTypeClass {}

    class DoubleScalarClass {}

    class EqualOptionsClass {}

    class ExecuteContextClass {}

    class ExecuteNodeClass {}

    class ExecuteNodeOptionsClass {}

    class ExecutePlanClass {}

    class ExpressionClass {}

    class ExtensionArrayClass {}

    class ExtensionDataTypeClass {}

    class ExtensionDataTypeRegistryClass {}

    class ExtensionScalarClass {}

    class FeatherFileReaderClass {}

    class FeatherWritePropertiesClass {}

    class FieldClass {}

    class FieldExpressionClass {}

    class FileInfoClass {}

    class FileInputStreamClass {}

    class FileInterface {}

    class FileOutputStreamClass {}

    class FileSelectorClass {}

    class FileSystemClass {}

    class FilterOptionsClass {}

    class FixedSizeBinaryArrayBuilderClass {}

    class FixedSizeBinaryArrayClass {}

    class FixedSizeBinaryDataTypeClass {}

    class FixedSizeBinaryScalarClass {}

    class FixedWidthDataTypeClass {}

    class FloatArrayBuilderClass {}

    class FloatArrayClass {}

    class FloatDataTypeClass {}

    class FloatScalarClass {}

    class FloatingPointDataTypeClass {}

    class FunctionClass {}

    class FunctionDocClass {}

    class FunctionOptionsClass {}

    class GIOInputStreamClass {}

    class GIOOutputStreamClass {}

    class HDFSFileSystemClass {}

    class HashJoinNodeOptionsClass {}

    class InputStreamClass {}

    class Int16ArrayBuilderClass {}

    class Int16ArrayClass {}

    class Int16DataTypeClass {}

    class Int16ScalarClass {}

    class Int32ArrayBuilderClass {}

    class Int32ArrayClass {}

    class Int32DataTypeClass {}

    class Int32ScalarClass {}

    class Int64ArrayBuilderClass {}

    class Int64ArrayClass {}

    class Int64DataTypeClass {}

    class Int64ScalarClass {}

    class Int8ArrayBuilderClass {}

    class Int8ArrayClass {}

    class Int8DataTypeClass {}

    class Int8ScalarClass {}

    class IntArrayBuilderClass {}

    class IntegerDataTypeClass {}

    class IntervalDataTypeClass {}

    class JSONReadOptionsClass {}

    class JSONReaderClass {}

    class LargeBinaryArrayBuilderClass {}

    class LargeBinaryArrayClass {}

    class LargeBinaryDataTypeClass {}

    class LargeBinaryScalarClass {}

    class LargeListArrayBuilderClass {}

    class LargeListArrayClass {}

    class LargeListDataTypeClass {}

    class LargeListScalarClass {}

    class LargeStringArrayBuilderClass {}

    class LargeStringArrayClass {}

    class LargeStringDataTypeClass {}

    class LargeStringScalarClass {}

    class ListArrayBuilderClass {}

    class ListArrayClass {}

    class ListDataTypeClass {}

    class ListScalarClass {}

    class LiteralExpressionClass {}

    class LocalFileSystemClass {}

    class LocalFileSystemOptionsClass {}

    class MapArrayBuilderClass {}

    class MapArrayClass {}

    class MapDataTypeClass {}

    class MapScalarClass {}

    class MemoryMappedInputStreamClass {}

    class MockFileSystemClass {}

    class MonthDayNanoIntervalDataTypeClass {}

    class MonthIntervalDataTypeClass {}

    class MutableBufferClass {}

    class NullArrayBuilderClass {}

    class NullArrayClass {}

    class NullDataTypeClass {}

    class NullScalarClass {}

    class NumericArrayClass {}

    class NumericDataTypeClass {}

    class OutputStreamClass {}

    class PrimitiveArrayClass {}

    class ReadOptionsClass {}

    class ReadableInterface {}

    class RecordBatchBuilderClass {}

    class RecordBatchClass {}

    class RecordBatchDatumClass {}

    class RecordBatchFileReaderClass {}

    class RecordBatchFileWriterClass {}

    class RecordBatchIteratorClass {}

    class RecordBatchReaderClass {}

    class RecordBatchStreamReaderClass {}

    class RecordBatchStreamWriterClass {}

    class RecordBatchWriterClass {}

    class ResizableBufferClass {}

    class RoundOptionsClass {}

    class RoundToMultipleOptionsClass {}

    class S3FileSystemClass {}

    class S3GlobalOptionsClass {}

    class ScalarAggregateOptionsClass {}

    class ScalarClass {}

    class ScalarDatumClass {}

    class SchemaClass {}

    class SeekableInputStreamClass {}

    class SetLookupOptionsClass {}

    class SinkNodeOptionsClass {}

    class SlowFileSystemClass {}

    class SortKeyClass {}

    class SortOptionsClass {}

    class SourceNodeOptionsClass {}

    class SparseUnionArrayClass {}

    class SparseUnionDataTypeClass {}

    class SparseUnionScalarClass {}

    class StringArrayBuilderClass {}

    class StringArrayClass {}

    class StringDataTypeClass {}

    class StringDictionaryArrayBuilderClass {}

    class StringScalarClass {}

    class StructArrayBuilderClass {}

    class StructArrayClass {}

    class StructDataTypeClass {}

    class StructScalarClass {}

    class SubTreeFileSystemClass {}

    class TableBatchReaderClass {}

    class TableClass {}

    class TableConcatenateOptionsClass {}

    class TableDatumClass {}

    class TakeOptionsClass {}

    class TemporalDataTypeClass {}

    class TensorClass {}

    class Time32ArrayBuilderClass {}

    class Time32ArrayClass {}

    class Time32DataTypeClass {}

    class Time32ScalarClass {}

    class Time64ArrayBuilderClass {}

    class Time64ArrayClass {}

    class Time64DataTypeClass {}

    class Time64ScalarClass {}

    class TimeDataTypeClass {}

    class TimestampArrayBuilderClass {}

    class TimestampArrayClass {}

    class TimestampDataTypeClass {}

    class TimestampScalarClass {}

    class UInt16ArrayBuilderClass {}

    class UInt16ArrayClass {}

    class UInt16DataTypeClass {}

    class UInt16ScalarClass {}

    class UInt32ArrayBuilderClass {}

    class UInt32ArrayClass {}

    class UInt32DataTypeClass {}

    class UInt32ScalarClass {}

    class UInt64ArrayBuilderClass {}

    class UInt64ArrayClass {}

    class UInt64DataTypeClass {}

    class UInt64ScalarClass {}

    class UInt8ArrayBuilderClass {}

    class UInt8ArrayClass {}

    class UInt8DataTypeClass {}

    class UInt8ScalarClass {}

    class UIntArrayBuilderClass {}

    class UTF8NormalizeOptionsClass {}

    class UnionArrayClass {}

    class UnionDataTypeClass {}

    class UnionScalarClass {}

    class VarianceOptionsClass {}

    class WritableFileInterface {}

    class WritableInterface {}

    class WriteOptionsClass {}

    interface File {
        // Owm methods of Arrow-1.0.File

        close(): boolean;
        get_mode(): FileMode;
        is_closed(): boolean;
        tell(): number;
    }

    interface Readable {
        // Owm methods of Arrow-1.0.Readable

        read(n_bytes: number): Buffer | null;
        read_bytes(n_bytes: number): GLib.Bytes | null;
    }

    interface Writable {
        // Owm methods of Arrow-1.0.Writable

        /**
         * It ensures writing all data on memory to storage.
         * @returns %TRUE on success, %FALSE if there was an error.
         */
        flush(): boolean;
        write(data: Uint8Array): boolean;
    }

    interface WritableFile {
        // Owm methods of Arrow-1.0.WritableFile

        write_at(position: number, data: Uint8Array): boolean;
    }

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
